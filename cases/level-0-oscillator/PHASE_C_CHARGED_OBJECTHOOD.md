# Phase-C charged objecthood search

Status date: 2026-11-13

## Result

The preregistered study completed with a bounded positive result:

```text
bounded-positive-qualified-charged-branch
```

Five of the six eligible scenarios pass every declared necessary gate. Both
inspected controls behave as declared. The secondary hypothesis is **not
supported**: on `near-threshold` the charge-constrained count passes while the
dynamic bank rejects the state.

| Scenario | Eligible | `Gamma` | `n(H)` | `p(d'')` | Count gate | Departed probes | Worst excursion | Disposition |
|---|---|---:|---:|---:|---|---:|---:|---|
| `inspected-stable-branch` | no | `3.65008` | 1 | 1 | pass | 0 of 7 | `1.18715` | control passed every gate |
| `inspected-unstable-branch` | no | `1.55430` | 1 | 0 | fail | 7 of 7 | departed | rejected |
| `stiffer-quartic` | yes | `5.55767` | 1 | 1 | pass | 0 of 7 | `1.07279` | qualified |
| `weaker-coupling` | yes | `4.04993` | 1 | 1 | pass | 0 of 7 | `1.20561` | qualified |
| `asymmetric-frequencies` | yes | `3.61030` | 1 | 1 | pass | 0 of 7 | `1.18156` | qualified |
| `equal-effective-mass` | yes | `8.67647` | 1 | 1 | pass | 0 of 7 | `1.05962` | qualified |
| `phase-b-mass-ratios` | yes | `1.37091` | 1 | 1 | pass | 0 of 7 | `1.04788` | qualified |
| `near-threshold` | yes | `2.08466` | 1 | 1 | pass | 3 of 7 | departed | rejected by the dynamic bank |

Departed probes and worst excursions are the space-refined values; the
departure pattern is identical at base, time-refined and space-refined
resolution in every scenario. The seven probes are the unperturbed state and
the six preregistered perturbations.

"Qualified" means trial objecthood of a rotating-phase state inside this
finite one-dimensional model and perturbation bank. It is not a claim about
the paper's CRT-node in general, about other nonlinear completions, or about
any physical system. Independent review is pending.

## What this does and does not change

- The frozen static studies are unchanged. Their pulses remain rejected, and
  the integrated [`v3` disposition](LEVEL_ZERO_VALIDATION_V3.md) remains
  `complete-negative-result-within-portable-expanded-model`.
- This study uses a different declared model family and a different declared
  stability notion. It does not reinterpret a frozen gate.
- Phase D is recorded as `eligible-for-separate-preregistration`. It has not
  been run and nothing here authorizes running it without its own protocol.

## Protocol and freeze

The protocol is
[`PHASE_C_CHARGED_PREREGISTRATION.md`](PHASE_C_CHARGED_PREREGISTRATION.md) and
its machine-readable authority is
[`phase-c-charged-objecthood-v1.json`](phase-c-charged-objecthood-v1.json).

An unregistered exploratory calculation preceded the protocol and is declared
in both files. The two parameter sets it covered are ineligible controls. The
six eligible scenarios were selected from the potential alone, and none of
them was solved or evolved before the freeze. The solver was developed and
compared with the independent reference only on the two controls and on two
development fixtures that are not registered scenarios
(`massSquared [1, 1, 1.75]`, `lambda 2`, `g 1.2`, `omega [0.5, 0.5, -1]` and
`massSquared [1.2, 0.9, 1.1]`, `lambda 2.1`, `g 1.5`,
`omega [0.45, 0.35, -0.8]`).

The files were frozen at `2026-11-13T20:52:21Z`, before the single
confirmatory run:

- contract: `sha256:d719152586155f7120008c10d7f6f87e84cd2f7d10e0fd8daf738b950a872896`;
- preregistration text: `sha256:e48cb01e9770f8b610488e0d6d2059a732f327452789f98a06305904bff2a8b8`;
- solver: `sha256:1a07340984604be1f3cad1eceee04eaf6bbd0b1765665d7b3a0483c7ca277117`;
- runner: `sha256:43a16b0f87f5a8f5cf0f6fe8d4779bcdab120582fb5d98ac99651eaf000479d7`.

These are plain file digests. The freeze was not anchored by a commit or an
external timestamp, so the ordering rests on this record and cannot be checked
from the repository history alone. The stopping rule was followed: eight
scenarios and six perturbations, evaluated once.

Frozen identities of the result:

- model: `sha256:ae2525b7cb347b6a6c9903f78a84a5ebb4f18f4950e394053809be8788ca7914`;
- analysis: `sha256:72936b79e3c6735ae15755dc9261027c1ffeb848c071215931a8354f0d37b1d1`;
- objecthood v2 dependency: `sha256:d20ae86e0db42ae8c3ea47e379faff67d0f79eb924238504fa75b241280ac2a6`;
- expanded search v2 dependency: `sha256:a020a2b5c24f4e682c29845154a116bc52f051830dc01837cf088cd844f0c3a5`.

## Declared model

The source is `topology-of-arising.pdf` (DOI `10.5281/zenodo.19397414`, `v1.2`),
bound through [`source-lock.json`](source-lock.json) as in the frozen studies.
Three complex fields carry the frozen energy

```text
E = integral(
  0.5 * sum_i(|dt psi_i|^2 + |dx psi_i|^2 + m2_i |psi_i|^2)
  - 2 * lambda * Re(psi_1 psi_2 psi_3)
  + 0.25 * g * (sum_i |psi_i|^2)^2
) dx
```

on `[-L, L]` with homogeneous Dirichlet boundaries. No term is added. The
states are `psi_i = f_i(x) * exp(i * omega_i * t)` with real even envelopes and
`omega_1 + omega_2 + omega_3 = 0`, which gives

```text
-d2_x f_i + (m2_i - omega_i^2) f_i - 2 lambda f_j f_k + g (sum_l f_l^2) f_i = 0.
```

The energy is invariant under phase rotations whose angles sum to zero, so
`Q_1 = N_1 - N_3` and `Q_2 = N_2 - N_3` are conserved, with
`N_i = integral Im(conj(psi_i) dt psi_i) dx`.

Every scenario satisfies `27 * min(m2) * g - 8 * lambda^2 >= 0`, which implies
`U >= 0` for every field value. The quartic completion, the mass-squared
values and the frequency values are case assumptions. The signed frequencies
are not the Phase-B values; only their balance is retained.

`phase-b-mass-ratios` uses mass-squared values `(1, 0.6, 3.2)`, the ratios
`5 : 3 : 16` of the admitted Phase-B triad. Under the model's scaling
`m2 -> m2 / s`, `g -> g * s`, `omega -> omega / sqrt(s)` at fixed `lambda`, it
is equivalent to mass-squared values `(5, 3, 16)` with the frozen `lambda = 2`
and `g = 0.5`. Its frequencies were chosen for this study and are not derived
from Phase B.

## Numerical method

The external solver is
[`solver/phase-c-charged-solver.mjs`](solver/phase-c-charged-solver.mjs). It
does not import the kernel.

- **Stationary envelopes.** Second-order central differences and damped
  block-Newton iteration on the even half-domain, reached by a fixed
  continuation from an exact equal-mass seed. Base half-width `24` with `192`
  and `384` intervals, enlarged half-width `36` with `576`, and a
  space-refined grid of `768`.
- **Count.** Block Schur-complement inertia of the real-amplitude and
  imaginary-phase Hessians with shifts `+0.001` and `-0.001`; charge response
  by central differences with steps `0.0025` and `0.00125`.
- **Dynamics.** Complex velocity Verlet for `300` time units with `6000` base
  steps, a time-refined run and a space-refined run. Shape is sampled every
  `0.2`, conservation every `1`.
- **Arithmetic.** Identity-bearing numbers use only IEEE addition,
  subtraction, multiplication, division and square root. Results are then
  placed on the `portable-numeric-reporting-v1` grid.

Numerical checks passed on all eight scenarios: residuals below the Newton
tolerance, `Gamma` grid change at most `0.00071`, profile grid change at most
`0.00093`, energy drift at most `0.000027`, charge drift below the reporting
grid, and worst-excursion refinement change at most `0.0020`.

## Results

### Controls

`inspected-stable-branch` has `dQ/dOmega = [[-0.657769, -1.08081], [-1.08081, -0.657769]]`,
so `d''` has one positive eigenvalue, equal to `n(H) = 1`. All seven probes
stay inside the band; the worst excursion is `1.18715`.

`inspected-unstable-branch` has `dQ/dOmega = [[2.82463, 2.70719], [2.70719, 2.82463]]`,
so `d''` has no positive eigenvalue. All seven probes depart, including the
unperturbed state at `t = 104`.

The gates therefore discriminate on the two inspected controls, as required
by the protocol.

### Qualified scenarios

Each of the five has one eigenvalue below `-0.001` in the real sector, none in
the phase sector, exactly three within the tolerance of zero, and a charge
response whose `d''` has one positive eigenvalue at both steps. No probe
departs at any resolution. Worst excursions range from `1.04788` to `1.20561`
against a band of `2`.

In every qualified scenario the energy is below the rest energy of the same
number of free quanta: the ratio `E / sum_i sqrt(m2_i) |N_i|` ranges from
`0.711653` to `0.913898`. This ratio is reported and is not a gate.

`equal-effective-mass` has the exact continuum envelope
`f(x) = 2 mu / (c + sqrt(c^2 - 6 g mu) cosh(sqrt(mu) x))` with `mu = 0.84` and
`c = 8/3`. Its continuum `Gamma` is `8.67741` and its continuum peak density is
`0.726290`; the fine grid gives `8.67647` and `0.726464`.

### The rejected scenario

`near-threshold` passes the count: `dQ/dOmega = [[0.0339666, -0.16054], [-0.16054, 0.0339666]]`,
so `d''` has eigenvalues of opposite sign. Its unperturbed state persists
(excursion `1.0152`), and so do the amplitude-up, relative-phase and
off-centre probes. Three probes depart: amplitude-down at `t = 32.8`,
common-phase at `t = 130.2` and the dipole packet at `t = 179`.

It was predicted to fail and it is rejected, but not for the predicted reason:
the prediction assumed the count would fail.

## Secondary hypothesis

The count and the dynamic verdict agree on seven of eight scenarios and
disagree on `near-threshold`. The registered statement "the same verdict on
every scenario" is therefore not supported. Within this study the count is
necessary for qualification but is not sufficient to predict persistence under
the declared two-percent bank.

The five declared predictions all matched their disposition.

## Post-hoc note on the disagreement

This paragraph reports an unregistered follow-up (Layer H). It is not part of
the frozen artifact and changes no disposition.

Re-running `near-threshold` with smaller perturbation fractions gives
amplitude-down departure times `32.8`, `48.2`, `67.0` and `97.8` for fractions
`0.02`, `0.01`, `0.005` and `0.002`. The common-phase and dipole probes stop
departing at `0.005`, and the amplitude-up probe never departs. The scenario's
symmetrized charge-response determinant is `-0.0246194`. Among the scenarios
that pass every gate the smallest magnitude is about thirty times larger:
`-0.735480` for the inspected stable control and `-0.753479` for
`asymmetric-frequencies`, the smallest among the qualified scenarios.

A one-sided departure whose time grows roughly as the inverse square root of
the perturbation is what a state close to the minimum charge of its branch
would show: a perturbation that lowers the charge leaves no nearby stationary
state. That reading is not established here. If it is correct, a future
protocol should add a margin on the charge response or on the distance to the
branch minimum instead of relying on the sign of the count alone.

## Prior static scenarios

The runner evaluates two parameter-only bounds on the nine frozen static
scenarios of the objecthood and expanded searches. Eight carry the witness
`8 * lambda^2 - 9 * g * sum(m2) > 0`: their potential is negative on the
symmetric ray, so `psi = 0` is not its global minimum. The ninth is the
uncoupled control with `lambda = 0`. This is consistent with the frozen
rejections and does not alter them.

## Independent reference

[`reference/phase-c-charged-reference.py`](reference/phase-c-charged-reference.py)
recomputes every scenario with NumPy and SciPy: a full-domain sparse Newton
solve, a dense symmetric eigensolver for the counts, and vectorized evolution.
Against the frozen artifact it reports `314` comparisons and `0` mismatches.
Static quantities agree within `1e-6` relative; departure counts and probe
departure flags agree exactly.

This is agreement between two implementations by the same author. It is not
external review.

## Reproduce

```sh
npm run case:level-0:charged:verify
```

The command reproduces both dependencies and compares the result byte for byte
with
[`artifacts/phase-c-charged-objecthood-v1.json`](artifacts/phase-c-charged-objecthood-v1.json).
It takes about one minute. The artifact was generated on Linux x86-64 and
verified byte for byte on Linux aarch64, both with Node.js `22.23.4`.

Intentional regeneration and the optional reference are separate:

```sh
npm run case:level-0:charged
npm run case:level-0:charged:reference
```

The reference needs Python 3.9+, NumPy and SciPy and takes about two minutes.

## Interpretation boundary

This study establishes computational conformance for one declared model:

- with the signed-frequency balance kept and a true vacuum, five fixed
  parameter sets carry localized states that satisfy the declared count and
  stay inside the declared band for 300 time units under six perturbations;
- a state inspected beforehand as unstable is rejected by both criteria;
- the count alone does not predict persistence under the declared bank.

It does not establish stability beyond 300 time units, in two or three
dimensions, for moving states, or under other perturbations. It does not
prove the count criterion for this system. It says nothing about collective
behaviour, which belongs to a Phase D that has not been preregistered.
