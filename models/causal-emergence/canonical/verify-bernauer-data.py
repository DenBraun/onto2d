"""Check selected A1 author tables and printed arithmetic, not the original fit."""

import hashlib
import json
import math
import re
from collections import Counter
from decimal import Decimal as D
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / "references/canonical/data"
FILES = {
    "bernauer2014-cross-sections.dat": "18e63a8420a48f3fe68a490081766731618b2c5ed78030209612372f31ede03a",
    "bernauer2014-rosenbluth.dat": "22992d960a3aee71793b1644a229752b62f06132e08e5691ad433c8335147f19",
    "bernauer2014-mainz-spline.dat": "a888833fa6194058e58ee54b99611f8db271707151537f4e2b7579b8d0ac51cf",
    "bernauer2014-ancillary-description.pdf": "f0bbbbf21e503591dee1fc33a0424f0da574dfe087d7b430e4f173d76213adae",
}


def finite(value):
    assert isinstance(value, (int, float)) and not isinstance(value, bool)
    assert math.isfinite(value)
    return value


def numeric(cells):
    values = [float(v) for v in cells]
    assert all(math.isfinite(v) for v in values), "Nonfinite source value"
    return values


def cross_sections(text):
    """Preserve already-normalized ratios, scaled errors and shared factors."""
    result = []
    for line in text.splitlines():
        if not line.strip() or line.startswith("#"):
            continue
        v = line.split()
        assert len(v) == 18 and v[1] in ("A", "B", "C")
        n = numeric(v[:1] + v[2:10] + v[11:])
        assert all(x > 0 for x in n) and n[1] < 180
        assert re.fullmatch(r"[1-9][0-9]*(?::[1-9][0-9]*)*", v[10])
        norms = [int(x) for x in v[10].split(":")]
        assert len(norms) == len(set(norms)), "Repeated normalization factor"
        result.append(dict(energyMeV=n[0], spectrometer=v[1], centralAngleDegrees=n[1],
                           q2GeV2=n[2], ratio=n[3], pointError=n[4],
                           smallerCutRatio=n[5], largerCutRatio=n[6],
                           coulombUndoFactor=n[7], systematicFactor=n[8],
                           normalizationFactors=norms, alternativeNormalizations=n[9:]))
    assert result
    return result


def rosenbluth(text):
    """Constrained alternatives are separate from ordinary five-column pairs."""
    free, constrained = [], []
    for line in text.splitlines():
        if not line.strip() or line.startswith("#"):
            continue
        if "(" in line:
            match = re.fullmatch(r"(\S+) \((\S+)-(\S+)\) (\S+) # Gm forced to \(1,\\ 1\.05\) \\mu_pG_\\mathrm\{std\.\\ dip\.\}", line)
            assert match, "Malformed constrained form-factor row"
            q2, lo, hi, error = numeric(match.groups())
            assert q2 > 0 and 0 < lo < hi and error > 0
            constrained.append(dict(q2GeV2=q2, electricRange=[lo, hi],
                                    statisticalError=error, imposedMagneticMultipliers=[1, 1.05],
                                    endpointPairingSpecified=False))
        else:
            cells = line.split()
            assert len(cells) == 5
            q2, ge, dge, gm, dgm = numeric(cells)
            assert all(v > 0 for v in (q2, ge, dge, gm, dgm))
            free.append(dict(q2GeV2=q2, electric=ge, electricStatisticalError=dge,
                             magnetic=gm, magneticStatisticalError=dgm))
    assert free and constrained
    for rows in (free, constrained):
        assert len({r["q2GeV2"] for r in rows}) == len(rows)
    assert {r["q2GeV2"] for r in constrained} <= {r["q2GeV2"] for r in free}
    return free, constrained


def spline(text):
    result = []
    for line in text.splitlines():
        if not line.strip():
            continue
        v = numeric(line.split())
        assert len(v) == 19 and v[0] >= 0
        assert v[1] > 0 and v[7] > 0 and v[13] > 0
        assert all(v[i] >= 0 for i in range(1, 19) if i not in (1, 7, 13))
        assert abs(v[13] - v[1] / v[7]) < 1e-11, "GM/mu_p or form-factor ratio changed"
        if result:
            assert v[0] > result[-1][0]
        result.append(v)
    assert result
    return result


def kinematics(energy_gev, q2_gev2, mass_gev):
    """Ultrarelativistic elastic kinematics, neglecting the electron mass."""
    assert finite(energy_gev) > 0 and finite(q2_gev2) > 0 and finite(mass_gev) > 0
    outgoing = energy_gev - q2_gev2 / (2 * mass_gev)
    assert outgoing > 0
    sine2 = q2_gev2 / (4 * energy_gev * outgoing)
    assert 0 < sine2 < 1
    tau = q2_gev2 / (4 * mass_gev ** 2)
    epsilon = 1 / (1 + 2 * (1 + tau) * sine2 / (1 - sine2))
    assert finite(outgoing) > 0 and finite(tau) > 0 and 0 < finite(epsilon) < 1
    return dict(outgoingEnergy=outgoing, angleRadians=2 * math.asin(math.sqrt(sine2)),
                tau=tau, epsilon=epsilon)


def born_ratio(epsilon, tau, ge, gm, reference_ge, reference_gm):
    """Ratio at identical kinematics; Mott and common prefactors cancel."""
    assert 0 < finite(epsilon) <= 1 and finite(tau) >= 0
    for x in (ge, gm, reference_ge, reference_gm):
        finite(x)
    denominator = epsilon * reference_ge ** 2 + tau * reference_gm ** 2
    assert finite(denominator) > 0
    numerator = epsilon * ge ** 2 + tau * gm ** 2
    assert finite(numerator) >= 0
    return finite(numerator / denominator)


def normalized_residual(ratio, error, model, factors):
    """Equation 48 convention: the same product multiplies data and error."""
    assert finite(ratio) > 0 and finite(error) > 0
    finite(model)
    assert factors and all(finite(v) > 0 for v in factors)
    product = math.prod(factors)
    assert math.isfinite(product) and product > 0
    numerator, denominator = product * ratio - model, product * error
    finite(numerator)
    assert finite(denominator) > 0
    return finite(numerator / denominator)


def rounded_fit_table():
    # Hand transcription: author version Table IV, p.20. The total chi-square
    # is printed as an integer; reduced chi-square has four decimal places.
    rows = [
        ("single-dipole", 3422, 33, "2.4635"),
        ("double-dipole", 1786, 37, "1.2893"),
        ("polynomial", 1563, 51, "1.1399"),
        ("polynomial-plus-dipole", 1563, 51, "1.1400"),
        ("polynomial-times-dipole", 1572, 47, "1.1436"),
        ("inverse-polynomial", 1571, 45, "1.1406"),
        ("spline", 1565, 47, "1.1385"),
        ("spline-times-dipole", 1570, 45, "1.1403"),
        ("friedrich-walcher", 1598, 45, "1.1588"),
        ("extended-gari-krumpelmann", 1759, 45, "1.2777"),
    ]
    result = []
    for name, total, count, reported in rows:
        dof = 1422 - count
        lo, hi = (D(total) - D(".5")) / dof, (D(total) + D(".5")) / dof
        overlap = max(lo, D(reported) - D(".00005")) < min(hi, D(reported) + D(".00005"))
        result.append(dict(model=name, printedChiSquare=total, printedParameterCount=count,
                           degreesOfFreedom=dof, calculatedCentralReducedChiSquare=str(D(total) / dof),
                           printedReducedChiSquare=reported, roundingIntervalsOverlap=overlap))
    return result


def verify(data_dir=DATA):
    content = {}
    for name, expected in FILES.items():
        raw = (data_dir / name).read_bytes()
        assert hashlib.sha256(raw).hexdigest() == expected, "Author bytes changed: " + name
        if name.endswith(".dat"):
            content[name] = raw.decode("utf-8")
    cross = cross_sections(content["bernauer2014-cross-sections.dat"])
    free, constrained = rosenbluth(content["bernauer2014-rosenbluth.dat"])
    fit = spline(content["bernauer2014-mainz-spline.dat"])
    assert len(cross) == 1422 == 358 + 490 + 574  # Table I campaign census.
    assert len(free) == 77 and len(constrained) == 4 and len(fit) == 1000
    assert {v for r in cross for v in r["normalizationFactors"]} == set(range(1, 32))
    assert Counter(r["spectrometer"] for r in cross) == {"A": 415, "B": 724, "C": 283}
    assert Counter(r["energyMeV"] for r in cross) == {180: 323, 315: 244, 450: 276, 585: 193, 720: 221, 855: 165}
    assert [min(r["q2GeV2"] for r in cross), max(r["q2GeV2"] for r in cross)] == [.003839, .977245]
    assert all(abs(r[0] - (i / 1000) ** 2) < 1e-15 for i, r in enumerate(fit))
    assert fit[0][1] == fit[0][7] == fit[0][13] == 1
    # A source-independent closure calculation, not a refit or new observation.
    ratios = [r[1] / r[7] for r in fit]
    discrepancy = max(abs(r[13] - ratio) for r, ratio in zip(fit, ratios))
    assert discrepancy < 1e-11
    table = rounded_fit_table()
    mismatches = [r["model"] for r in table if not r["roundingIntervalsOverlap"]]
    assert mismatches == ["friedrich-walcher"]
    # The conversion uses the supplied multiplier, never its reciprocal.
    first = cross[0]
    uncorrected = first["ratio"] * first["coulombUndoFactor"]
    assert abs(uncorrected - .9946743928) < 1e-14
    return dict(crossSectionRows=len(cross), sharedNormalizationParameters=31,
                q2RangeGeV2=[.003839, .977245], rosenbluthUnconstrainedRows=len(free),
                rosenbluthConstrainedAlternatives=len(constrained), splineGridRows=len(fit),
                splineGridQ2RangeGeV2=[fit[0][0], fit[-1][0]],
                maxNormalizedRatioIdentityResidual=discrepancy,
                firstRatioWithoutCoulombCorrection=uncorrected,
                printedFitTable=table, unresolvedPrintedFitRows=mismatches,
                rawAcquisitionReplayed=False, acceptanceSimulationReplayed=False,
                fitReoptimized=False, covarianceReproduced=False, radiiReproduced=False,
                limit="Bound author tables, their declared column conventions, ratio identities and printed rounding arithmetic only. The spline grid is not a new acquisition; pointwise bands are not independent samples. The Table IV mismatch is preserved without diagnosing the fit.")


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
