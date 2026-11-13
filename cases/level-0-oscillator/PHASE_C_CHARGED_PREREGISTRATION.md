# Phase-C charged objecthood preregistration

Status date: 2026-11-13

## Question

Does any member of a fixed eight-scenario family of rotating-phase
three-envelope states satisfy every declared trial-objecthood gate when

- the signed-frequency balance admitted in Phase B is kept as rotating
  envelope phases instead of being dropped, and
- the declared potential has `psi = 0` as its global minimum?

This protocol is frozen before the confirmatory solver is executed on any
eligible scenario. It does not authorize adding a parameter point, changing a
threshold, or deleting a failed perturbation after inspecting results.

## Why this is a new study and not a wider parameter sweep

The frozen Phase-C studies reject every static pulse. Two parameter-level facts
explain why more points of the same kind cannot change that, and both are
checked by the runner on the frozen artifacts:

1. A static localized envelope has the first integral
   `0.5 * sum_i (dx u_i)^2 - U(u) = 0`, so the potential must return to zero at
   the envelope's centre. A static pulse therefore exists only when `psi = 0`
   is not the unique global minimum of `U`. In every frozen scenario with
   non-zero coupling `8 * lambda^2 - 9 * g * sum_i m2_i > 0`, which exhibits a
   negative value of `U` on the symmetric ray: the static pulse is the critical
   bubble of a false vacuum.
2. A static state carries no conserved charge. The frozen gate asks for a
   positive-definite unconstrained Hessian. A state that is stable only at
   fixed charge has a descending direction in its unconstrained Hessian by
   definition, so that gate rejects it by construction.

The frozen gate is not relaxed. This study tests a different, explicitly
declared notion: persistence at fixed conserved charge. The frozen artifacts
and their negative dispositions stay unchanged.

## What is and is not added to the Level-0 model

No term is added to the declared energy.

- The frequencies are the ones Phase B already requires to balance. The frozen
  Phase-C input mapping lists them under `notRetained`; here the balance
  `omega_1 + omega_2 + omega_3 = 0` is carried as rotating phases
  `psi_i = f_i(x) * exp(i * omega_i * t)`.
- The two conserved charges are not postulated. They follow from the
  invariance of `Re(psi_1 psi_2 psi_3)` under phase rotations whose angles sum
  to zero.
- The quartic term is the frozen case-added completion. Only its coefficient
  and the mass-squared values change, restricted by the certificate
  `27 * min_i(m2_i) * g - 8 * lambda^2 >= 0`, which implies `U >= 0` for every
  field value.

As in the frozen studies, the quartic completion and all parameter values are
case assumptions, not derivations from the source paper.

## What was inspected before this protocol

An unregistered exploratory calculation was run and inspected on 2026-11-13,
before this file was written. It belongs to Layer H of the
[Formal Core](../../docs/ONTO2D_FORMAL_CORE.md). It covered `lambda = 2`,
`g = 1.3`, equal mass-squared values and the family `omega = (W, W, -2W)`:
stationary profiles for eight values of `W`, time evolution for
`W = 0.36, 0.40, 0.49`, two-object runs and a run from a homogeneous state.

Consequences fixed here:

- The two inspected parameter sets enter only as ineligible controls with a
  declared expected outcome. They cannot qualify.
- The shape band, kernel tolerance, duration and conservation thresholds were
  fixed on those two controls only.
- The six eligible scenarios were chosen from the potential alone: the
  true-vacuum certificate and the necessary existence condition
  `min(U_eff) < 0` with `U_eff = U - 0.5 * sum_i omega_i^2 |psi_i|^2`. No
  eligible profile or evolution was computed before the freeze.

## Fixed search

The machine-readable authority is
[`phase-c-charged-objecthood-v1.json`](phase-c-charged-objecthood-v1.json). It
fixes:

- two inspected controls and six eligible scenarios, including one with an
  exact continuum profile (`equal-effective-mass`), one with the mass-squared
  ratios `5 : 3 : 16` of the admitted Phase-B triad in rescaled units
  (`phase-b-mass-ratios`), and one predicted to fail (`near-threshold`);
- coarse, fine, enlarged-domain and space-refined grids;
- the charge-constrained count on the fine grid;
- an unperturbed run and six perturbations, each at base, time-refined and
  space-refined resolution, for 300 time units;
- numerical quality, localization, stability and persistence thresholds;
- a stopping rule after exactly eight scenarios and six perturbations.

### Necessary gates

A scenario qualifies only if it is eligible, its numerics are complete, and it
passes every one of:

| Gate | Requirement |
|---|---|
| vacuum admissibility | `27 * min(m2) * g - 8 * lambda^2 >= 0` |
| frequency balance | `abs(omega_1 + omega_2 + omega_3) <= 1e-9` |
| evanescence | `m2_i - omega_i^2 > 0` for every component |
| nontrivial `Gamma` | `Gamma >= 0.1` on the fine grid |
| nontrivial charge | `max(abs(Q_1), abs(Q_2)) >= 0.01` |
| intrinsic localization | `Gamma` and the 90-percent support radius change by at most five percent on the enlarged domain |
| charge-constrained stability | `n(H) = p(d'')`, defined below |
| unperturbed persistence | the unperturbed state stays inside the shape band |
| dynamic bank | every perturbation stays inside the shape band at all three resolutions |

`n(H)` is the number of eigenvalues below `-0.001` of the real-amplitude and
imaginary-phase block Hessians of `E - Omega_1 Q_1 - Omega_2 Q_2` on the fine
grid. `p(d'')` is the number of positive eigenvalues of minus the symmetrized
charge response `dQ_a / dOmega_b`, measured by central differences with step
`0.0025`. The count is applicable only when the eigenvalues within `0.001` of
zero are exactly the three symmetry directions: one translation in the real
sector and two phase rotations in the imaginary sector.

The shape band is a factor of two: a run departs when the density peak or the
90-percent support radius about the density centroid leaves `[1/2, 2]`
relative to the unperturbed stationary state. Both descriptors are invariant
under the phase symmetry; the radius is also invariant under translation. A
departed run stops and records its departure time.

### Numerical checks

Stationarity residual, grid convergence, the symmetry-kernel dimensions, the
symmetry and step-halving stability of the charge response, energy and charge
conservation, and agreement of the departure pattern and worst excursion
across resolutions. A failed numerical check makes the scenario
indeterminate, not negative. A scenario for which the declared continuation
reaches no localized stationary state is also indeterminate.

## Hypotheses and outcome policy

- **Primary.** At least one eligible scenario passes every necessary gate.
  Failure of every eligible scenario is a bounded negative result.
- **Secondary.** On every scenario with complete numerics the
  charge-constrained count and the dynamic verdict agree.
- **Controls.** The inspected stable-branch control passes every gate except
  eligibility and the inspected unstable-branch control is rejected. If either
  control behaves otherwise the study is indeterminate, because the gates would
  not have been shown to discriminate.
- **Predictions.** Four eligible scenarios are predicted to pass and one to
  fail, by analogy with the inspected family; `phase-b-mass-ratios` carries no
  prediction. Predictions are recorded and scored. They are not gates.

Positive, negative, mixed and indeterminate outcomes are all reported.

## Model boundary

The complex energy, the mass-squared values, the quartic completion, the finite
Dirichlet domain, the frequency values and the perturbation bank are explicit
case assumptions. The count criterion is used as a declared operationalization
of stability at fixed charge; this study does not prove it for this system and
tests its agreement with direct evolution instead. The search is
one-dimensional, covers 300 time units, and does not exclude instabilities
slower than that duration resolves.

Even a positive result would establish only trial objecthood of a charged
state inside this finite model and perturbation bank. It would not change the
frozen static dispositions or the integrated `v3` disposition, and it would
authorize only a separately preregistered Phase D.

## Independent reference

[`reference/phase-c-charged-reference.py`](reference/phase-c-charged-reference.py)
recomputes the stationary quantities, the counts with a dense symmetric
eigensolver, the charge response and the dynamic verdicts with NumPy and SciPy,
independently of the JavaScript solver. It is an optional local check and not
a substitute for external review.
