#!/usr/bin/env python3
"""Independent NumPy/SciPy reference for the Phase-C charged objecthood study.

Optional local research verification. It shares no code with
``solver/phase-c-charged-solver.mjs``:

* stationary envelopes: full-domain Newton iteration with a sparse LU solve
  (the JavaScript solver eliminates blocks on the even half-domain);
* eigenvalue counts: a dense symmetric eigensolver on the assembled Hessians
  (the JavaScript solver counts block Schur-complement inertias);
* dynamics: vectorized complex velocity Verlet.

It reads the frozen model contract and the frozen artifact, recomputes every
scenario and compares. Passing this check is computational agreement between
two implementations of the declared model; it is not external review.

Usage:
    python3 cases/level-0-oscillator/reference/phase-c-charged-reference.py
    python3 ... --scenario inspected-stable-branch --static-only

Requires Python 3.9+, NumPy and SciPy.
"""
import argparse
import json
import pathlib
import sys

import numpy as np
import scipy.linalg
import scipy.sparse as sp
import scipy.sparse.linalg as spla

CASE_ROOT = pathlib.Path(__file__).resolve().parent.parent
MODEL_PATH = CASE_ROOT / "phase-c-charged-objecthood-v1.json"
ARTIFACT_PATH = CASE_ROOT / "artifacts" / "phase-c-charged-objecthood-v1.json"
CONTROL = "unperturbed-control"


def grid(half_width, intervals):
    dx = 2 * half_width / intervals
    return -half_width + dx * np.arange(1, intervals), dx


def second_difference(size, dx):
    ones = np.ones(size - 1)
    return sp.diags([ones, -2 * np.ones(size), ones], [-1, 0, 1], format="csr") / dx**2


def residual(f, d2, mu, lam, g):
    s = (f**2).sum(0)
    return np.concatenate([
        -(d2 @ f[i]) + mu[i] * f[i] - 2 * lam * f[(i + 1) % 3] * f[(i + 2) % 3] + g * s * f[i]
        for i in range(3)])


def real_hessian(f, d2, mu, lam, g):
    s = (f**2).sum(0)
    blocks = [[None] * 3 for _ in range(3)]
    for i in range(3):
        for j in range(3):
            if i == j:
                blocks[i][j] = -d2 + sp.diags(mu[i] + g * s + 2 * g * f[i] ** 2)
            else:
                blocks[i][j] = sp.diags(-2 * lam * f[3 - i - j] + 2 * g * f[i] * f[j])
    return sp.bmat(blocks, format="csc")


def phase_hessian(f, d2, mu, lam, g):
    s = (f**2).sum(0)
    blocks = [[None] * 3 for _ in range(3)]
    for i in range(3):
        for j in range(3):
            blocks[i][j] = (-d2 + sp.diags(mu[i] + g * s)) if i == j else sp.diags(2 * lam * f[3 - i - j])
    return sp.bmat(blocks, format="csc")


def newton(f, d2, mu, lam, g, tol, max_iterations):
    size = f.shape[1]
    r = residual(f, d2, mu, lam, g)
    for _ in range(max_iterations):
        if np.abs(r).max() <= tol:
            return f, float(np.abs(r).max())
        step = spla.spsolve(real_hessian(f, d2, mu, lam, g), -r).reshape(3, size)
        # The translation direction is numerically singular on a wide domain;
        # the stationary envelopes are even, so the update is symmetrized.
        step = 0.5 * (step + step[:, ::-1])
        scale = 1.0
        for _ in range(29):
            trial = f + scale * step
            r_trial = residual(trial, d2, mu, lam, g)
            if np.abs(r_trial).max() < np.abs(r).max() or np.abs(r_trial).max() <= tol:
                f, r = trial, r_trial
                break
            scale /= 2
        else:
            raise RuntimeError("line search failed")
    if np.abs(r).max() > tol:
        raise RuntimeError("Newton iteration did not converge")
    return f, float(np.abs(r).max())


def stationary(p, sc, frequencies, half_width, intervals):
    x, dx = grid(half_width, intervals)
    d2 = second_difference(x.size, dx)
    lam, g = sc["lambda"], sc["quarticCoefficient"]
    target = np.array([sc["massSquared"][i] - frequencies[i] ** 2 for i in range(3)])
    mean = target.mean()
    f = np.tile(3 * mean / (4 * lam) / np.cosh(np.sqrt(mean) * x / 2) ** 2, (3, 1))
    stages = p["continuationStages"]
    for k in range(stages + 1):
        f, res = newton(f, d2, mean + k * (target - mean) / stages, lam, 0.0,
                        p["newtonTolerance"], p["newtonMaxIterations"])
    for k in range(1, stages + 1):
        f, res = newton(f, d2, target, lam, k * g / stages, p["newtonTolerance"], p["newtonMaxIterations"])
    return dict(x=x, dx=dx, f=f, mu=target, d2=d2, w=np.array(frequencies, float), residual=res,
                half_width=half_width)


def neighbour(p, sc, sol, frequencies):
    target = np.array([sc["massSquared"][i] - frequencies[i] ** 2 for i in range(3)])
    f, _ = newton(sol["f"], sol["d2"], target, sc["lambda"], sc["quarticCoefficient"],
                  p["newtonTolerance"], p["newtonMaxIterations"])
    return dict(sol, f=f, mu=target, w=np.array(frequencies, float))


def charges(sol):
    n = sol["w"] * (sol["f"] ** 2).sum(1) * sol["dx"]
    return n, n[0] - n[2], n[1] - n[2]


def gamma(sol):
    return float((sol["f"].sum(0) ** 2).sum() * sol["dx"])


def support_radius(sol):
    weight = sol["f"].sum(0) ** 2
    order = np.argsort(np.abs(sol["x"]), kind="stable")
    cumulative = np.cumsum(weight[order])
    return float(np.abs(sol["x"])[order][np.searchsorted(cumulative, 0.9 * cumulative[-1])])


def energy(sol, sc):
    f, dx, w = sol["f"], sol["dx"], sol["w"]
    padded = np.concatenate([np.zeros((3, 1)), f, np.zeros((3, 1))], axis=1)
    s = (f**2).sum(0)
    m2 = np.array(sc["massSquared"])[:, None]
    return float(0.5 * (np.diff(padded, axis=1) ** 2).sum() / dx
                 + 0.5 * dx * ((w[:, None] ** 2 + m2) * f**2).sum()
                 + dx * (-2 * sc["lambda"] * f[0] * f[1] * f[2] + 0.25 * sc["quarticCoefficient"] * s**2).sum())


def charge_response(p, sc, sol, step):
    response = np.zeros((2, 2))
    for column in range(2):
        plus, minus = list(sol["w"]), list(sol["w"])
        plus[column] += step
        minus[column] -= step
        plus[2], minus[2] = -(plus[0] + plus[1]), -(minus[0] + minus[1])
        _, p1, p2 = charges(neighbour(p, sc, sol, plus))
        _, m1, m2 = charges(neighbour(p, sc, sol, minus))
        response[:, column] = [(p1 - m1) / (2 * step), (p2 - m2) / (2 * step)]
    symmetric = 0.5 * (response + response.T)
    positive = int((scipy.linalg.eigvalsh(-symmetric) > 0).sum())
    return response, float(abs(response[0, 1] - response[1, 0])), float(np.linalg.det(symmetric)), positive


def static_quantities(p, sc):
    w = sc["frequencies"]
    coarse = stationary(p, sc, w, p["baseHalfWidth"], p["coarseIntervals"])
    fine = stationary(p, sc, w, p["baseHalfWidth"], p["fineIntervals"])
    extended = stationary(p, sc, w, p["extendedHalfWidth"], p["extendedIntervals"])
    refined = stationary(p, sc, w, p["baseHalfWidth"], p["dynamicRefinedIntervals"])
    tau = p["kernelTolerance"]
    lam, g = sc["lambda"], sc["quarticCoefficient"]
    real = scipy.linalg.eigvalsh(real_hessian(fine["f"], fine["d2"], fine["mu"], lam, g).toarray())
    phase = scipy.linalg.eigvalsh(phase_hessian(fine["f"], fine["d2"], fine["mu"], lam, g).toarray())
    numbers, q1, q2 = charges(fine)
    e = energy(fine, sc)
    response, defect, determinant, positive = charge_response(p, sc, fine, p["frequencyResponseStep"])
    _, _, _, positive_half = charge_response(p, sc, fine, p["frequencyResponseStep"] / 2)
    counts = dict(
        real_sector_negative_count=int((real < -tau).sum()),
        real_sector_near_zero_count=int((np.abs(real) <= tau).sum()),
        phase_sector_negative_count=int((phase < -tau).sum()),
        phase_sector_near_zero_count=int((np.abs(phase) <= tau).sum()))
    negative = counts["real_sector_negative_count"] + counts["phase_sector_negative_count"]
    stable = (counts["real_sector_near_zero_count"] == 1 and counts["phase_sector_near_zero_count"] == 2
              and positive == positive_half and negative == positive)
    g_coarse, g_fine, g_extended = gamma(coarse), gamma(fine), gamma(extended)
    values = dict(
        true_vacuum_certificate_margin=27 * min(sc["massSquared"]) * g - 8 * lam * lam,
        gamma_coarse=g_coarse, gamma_fine=g_fine, gamma_extended=g_extended,
        gamma_grid_relative_change=abs(g_coarse - g_fine) / max(g_coarse, g_fine),
        gamma_domain_relative_change=abs(g_fine - g_extended) / max(g_fine, g_extended),
        profile_grid_relative_l2=float(np.sqrt(((coarse["f"] - fine["f"][:, 1::2]) ** 2).sum()
                                               / (fine["f"][:, 1::2] ** 2).sum())),
        support_radius_90_fine=support_radius(fine), support_radius_90_extended=support_radius(extended),
        peak_density_fine=float((fine["f"] ** 2).sum(0).max()),
        charge_1_fine=float(q1), charge_2_fine=float(q2), energy_fine=e,
        free_quanta_energy_ratio_fine=float(e / (np.sqrt(np.array(sc["massSquared"])) * np.abs(numbers)).sum()),
        charge_response_11=response[0, 0], charge_response_12=response[0, 1],
        charge_response_21=response[1, 0], charge_response_22=response[1, 1],
        charge_response_symmetry_defect=defect, charge_hessian_determinant=determinant,
        charge_hessian_positive_count=positive, charge_hessian_positive_count_half_step=positive_half,
        constrained_stability_flag=int(stable), **counts)
    return values, fine, refined


def profile(kind, sol):
    x, f = sol["x"], sol["f"]
    if kind == "stationary-envelope":
        return f.copy()
    if kind == "squared-lorentzian-width-0.8-centered-at-1.5":
        y = (x - 1.5) / 0.8
        return np.tile(1 / (1 + y * y) ** 2, (3, 1))
    if kind == "odd-squared-lorentzian-width-1-centered-at-minus-1.5":
        y = x + 1.5
        return np.tile(y / (1 + y * y) ** 2, (3, 1))
    raise ValueError(kind)


def acceleration(psi, dx, m2, lam, g):
    lap = np.empty_like(psi)
    lap[:, 1:-1] = psi[:, 2:] - 2 * psi[:, 1:-1] + psi[:, :-2]
    lap[:, 0] = psi[:, 1] - 2 * psi[:, 0]
    lap[:, -1] = psi[:, -2] - 2 * psi[:, -1]
    s = (np.abs(psi) ** 2).sum(0)
    out = np.empty_like(psi)
    for i in range(3):
        out[i] = lap[i] / dx**2 - m2[i] * psi[i] + 2 * lam * np.conj(psi[(i + 1) % 3] * psi[(i + 2) % 3]) - g * s * psi[i]
    return out


def shape(psi, x):
    density = (np.abs(psi) ** 2).sum(0)
    total = density.sum()
    centroid = (x * density).sum() / total
    distance = np.abs(x - centroid)
    order = np.argsort(distance, kind="stable")
    cumulative = np.cumsum(density[order])
    return float(density.max()), float(distance[order][np.searchsorted(cumulative, 0.9 * total)])


def run_probe(p, sc, sol, perturbation, steps):
    x, dx, f, w = sol["x"], sol["dx"], sol["f"], sol["w"][:, None]
    psi = f.astype(complex)
    if perturbation is not None:
        delta = np.array(perturbation["componentDirection"], float)[:, None] * profile(perturbation["spatialProfile"], sol)
        delta = delta * p["perturbationFraction"] * np.sqrt((f**2).sum() / (delta**2).sum())
        psi = psi + (delta if perturbation["field"] == "real" else 1j * delta)
    velocity = 1j * w * psi
    dt = p["dynamicDuration"] / steps
    stride = int(round(steps * p["shapeSampleInterval"] / p["dynamicDuration"]))
    peak0, radius0 = shape(f.astype(complex), x)
    m2, lam, g = sc["massSquared"], sc["lambda"], sc["quarticCoefficient"]
    a = acceleration(psi, dx, m2, lam, g)
    worst = 1.0
    for step in range(steps + 1):
        if step % stride == 0:
            peak, radius = shape(psi, x)
            excursion = max(peak / peak0, peak0 / peak, radius / radius0, radius0 / radius)
            worst = max(worst, excursion)
            if not excursion <= p["shapeBandFactor"]:
                return dict(departed=True, time=(step // stride) * p["shapeSampleInterval"], worst=worst)
        if step == steps:
            break
        velocity = velocity + 0.5 * dt * a
        psi = psi + dt * velocity
        a = acceleration(psi, dx, m2, lam, g)
        velocity = velocity + 0.5 * dt * a
    return dict(departed=False, time=-1.0, worst=worst)


def dynamic_quantities(p, sc, perturbations, fine, refined):
    probes = [(CONTROL, None)] + [(entry["id"], entry) for entry in perturbations]
    base_steps = p["dynamicBaseSteps"]
    refined_steps = p["timeRefinementFactor"] * base_steps
    out = {}
    for resolution, sol, steps in (("base", fine, base_steps), ("time_refined", fine, refined_steps),
                                   ("space_refined", refined, refined_steps)):
        out[resolution] = {name: run_probe(p, sc, sol, perturbation, steps) for name, perturbation in probes}
    return out


def compare(scenario_id, name, reference, frozen, tolerance, failures):
    if isinstance(reference, (int, np.integer)) and not isinstance(reference, bool):
        ok = int(reference) == frozen
    else:
        ok = abs(float(reference) - frozen) <= tolerance * max(1.0, abs(frozen))
    if not ok:
        failures.append(f"{scenario_id}: {name} reference={reference!r} frozen={frozen!r}")
    return ok


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--scenario", action="append", help="limit the check to these scenario ids")
    parser.add_argument("--static-only", action="store_true", help="skip the time evolution")
    parser.add_argument("--static-tolerance", type=float, default=1e-6)
    parser.add_argument("--dynamic-tolerance", type=float, default=1e-4)
    arguments = parser.parse_args()

    model = json.loads(MODEL_PATH.read_text(encoding="utf-8"))
    artifact = json.loads(ARTIFACT_PATH.read_text(encoding="utf-8"))
    parameters = model["parameters"]
    failures, checked = [], 0
    for scenario in model["scenarios"]:
        if arguments.scenario and scenario["id"] not in arguments.scenario:
            continue
        frozen_scenario = next(entry for entry in artifact["scenarios"] if entry["id"] == scenario["id"])
        frozen = frozen_scenario["scientificResult"]["values"]
        if not frozen:
            print(f"{scenario['id']}: frozen scenario is indeterminate; nothing to compare")
            continue
        values, fine, refined = static_quantities(parameters, scenario)
        static_ok = all([compare(scenario["id"], name, value, frozen[name], arguments.static_tolerance, failures)
                         for name, value in values.items()])
        checked += len(values)
        line = f"{scenario['id']:28s} static {'ok' if static_ok else 'MISMATCH'}"
        if not arguments.static_only:
            bank = dynamic_quantities(parameters, scenario, model["perturbations"], fine, refined)
            dynamic_ok = True
            for resolution, probes in bank.items():
                count = sum(entry["departed"] for entry in probes.values())
                dynamic_ok &= compare(scenario["id"], f"dynamic_departure_count_{resolution}", count,
                                      frozen[f"dynamic_departure_count_{resolution}"], 0, failures)
                checked += 1
                # A run that never departs is not exponentially sensitive, so its
                # worst excursion must agree closely. A departed run stops at its
                # first sample outside the band; only the count is compared.
                if count == 0:
                    worst = max(entry["worst"] for entry in probes.values())
                    dynamic_ok &= compare(scenario["id"], f"dynamic_worst_shape_excursion_{resolution}", worst,
                                          frozen[f"dynamic_worst_shape_excursion_{resolution}"],
                                          arguments.dynamic_tolerance, failures)
                    checked += 1
            for name, entry in bank["space_refined"].items():
                prefix = name.replace("-", "_")
                frozen_time = frozen[f"{prefix}_departure_time_space_refined"]
                if (frozen_time >= 0) != entry["departed"]:
                    failures.append(f"{scenario['id']}: {name} departure flag differs")
                    dynamic_ok = False
                # The unperturbed run of an unstable state is seeded by rounding,
                # so its departure time is implementation-dependent.
                elif entry["departed"] and name != CONTROL and abs(entry["time"] - frozen_time) > 2 * parameters["shapeSampleInterval"]:
                    failures.append(f"{scenario['id']}: {name} departure time reference={entry['time']} frozen={frozen_time}")
                    dynamic_ok = False
                checked += 1
            line += f"  dynamics {'ok' if dynamic_ok else 'MISMATCH'}"
        print(line, flush=True)
    for failure in failures:
        print("MISMATCH", failure)
    print(f"{checked} comparisons, {len(failures)} mismatches")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
