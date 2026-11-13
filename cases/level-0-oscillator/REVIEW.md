# Independent scientific review packet

Status date: 2026-08-16

This review concerns the bounded Level-0 computational case. Approval means
that its assumptions, calculations, evidence chain, and negative conclusion
are reproducible and correctly delimited. It is not approval of the general
theory, physical validation, or an empirical result.

## Reviewer independence

The reviewer should not be the sole author of the model, solver, and frozen
artifacts. They may use the repository implementation, but the checks below
must include an independent derivation or implementation of the critical
quantities.

Record the exact commit, operating system, CPU architecture, Node.js version,
review date, and reviewer identity or stable pseudonym.

## Reproduce from a clean checkout

```sh
npm ci
npm run check
npm run build
npm run case:level-0:verify
npm run case:level-0:dynamics:verify
npm run case:level-0:expanded:verify
npm run case:level-0:charged:verify
npm test
```

The review must stop if a frozen artifact differs, a dependency cannot be
reproduced, or the source lock fails.

## Scientific checks

The [foundation review of 2026-09-11](../../models/causal-emergence/reconstruction/README.md#mathematical-findings-that-change-representation)
adds source-to-case obligations: independently substitute the plane wave into
PDF equations (24)–(26), record the sign discrepancy and the frozen case's
consistent convention, and distinguish stationarity from action minimization
and dynamic stability. Check that balance and `|Psi|^2` alone are not presented
as localization or irreducible-closure certificates. These findings do not
change the frozen numerical result or mark its independent review complete.

1. Verify the source DOI, version, local byte count, and SHA-256 in
   [`source-lock.json`](source-lock.json).
2. Confirm that the Phase-B positive and negative controls match the declared
   dispersion, balance, simple-cycle, and removal rules.
3. Independently derive the Phase-C preflight ray
   `V(r)=3r^2-0.5r^3` and confirm that it is unbounded below.
4. Review the positive quartic completion and confirm that it is labelled as a
   case-added assumption rather than a source-derived term.
5. Review the Phase-B to Phase-C mapping. Confirm that the retained triangle
   skeleton and discarded carrier parameters are stated explicitly.
6. Independently evaluate the continuum pulse
   `u(x)=2/(8/3+sqrt(37/9)*cosh(x))`. Confirm `Gamma` near
   `4.61685467491` and a profile-direction Rayleigh quotient near
   `-0.993260773531` before finite-domain discretization error.
7. Independently derive the upper homogeneous plateau root
   `(4+sqrt(10))/3`, approximately `2.38742588672`, and confirm that the
   numerical peak approaches it.
8. Confirm that enlarging the domain leaves the pulse concentration nearly
   unchanged but increases the plateau concentration and support materially.
9. Confirm that each original tested branch fails at least one necessary
   objecthood gate.
10. Confirm that Phase D receives no eligible node and is not silently run on
    a failed Phase-C candidate.
11. Independently derive the three-envelope time-evolution equation from the
    declared energy and confirm the sign of every nonlinear term.
12. Reproduce the symmetric perturbation amplification, the bounded
    antisymmetric control, and the temporal/spatial refinement comparisons.
13. Confirm that
    [`PHASE_C_EXPANDED_PREREGISTRATION.md`](PHASE_C_EXPANDED_PREREGISTRATION.md)
    and [`phase-c-expanded-search-v2.json`](phase-c-expanded-search-v2.json)
    fix the six scenarios, four perturbations, thresholds, and stopping rule
    independently of the reported outcome.
14. Independently reproduce at least one eligible asymmetric stationary
    solution and compare its residual, `Gamma`, component-asymmetry index, and
    enlarged-domain localization measures.
15. Independently construct the complete discrete real-amplitude and
    imaginary-phase Hessians for at least one eligible scenario. Confirm both
    frozen positive-definiteness dispositions without relying only on the
    repository block factorization.
16. Reproduce all four refined dynamic probes for at least one eligible
    scenario and confirm the control, energy, and refinement gates.
17. Confirm that the bounded dynamic-bank pass does not override either failed
    static stability gate and that Phase D still receives no eligible node.

## Charged-state study

Status date: 2026-11-13

[`PHASE_C_CHARGED_OBJECTHOOD.md`](PHASE_C_CHARGED_OBJECTHOOD.md) reports a
bounded positive result in a different declared model family. It needs its own
review and is not covered by an approval of the negative result above.

18. Confirm from the declared energy that phase rotations whose angles sum to
    zero are a symmetry, and derive the two conserved charges and the rotating
    stationary equations.
19. Independently verify that `27 * min(m2) * g - 8 * lambda^2 >= 0` implies a
    non-negative potential, and that `8 * lambda^2 - 9 * g * sum(m2) > 0`
    exhibits a negative value on the symmetric ray. Recompute both bounds for
    the nine frozen static scenarios and the eight charged scenarios.
20. Review the declared exploratory inspection and the freeze record. The
    freeze is a set of file digests, not a commit. State whether the ordering
    is accepted, and check that the contract and the preregistration text
    still match their recorded digests.
21. Assess whether the count `n(H) = p(d'')` is an acceptable
    operationalization of stability at fixed charge for this second-order
    system with two charges. The study does not prove it.
22. Independently assemble the real-amplitude and imaginary-phase Hessians for
    at least one qualified scenario and for `near-threshold`. Confirm the
    eigenvalue counts and the three near-zero directions without relying on
    the repository block inertia.
23. Independently recompute the charge response for at least one scenario with
    unequal frequencies and confirm its symmetry and its sign pattern at both
    steps.
24. Independently evaluate the continuum envelope of `equal-effective-mass`,
    `f(x) = 1.68 / (8/3 + sqrt(64/9 - 6.552) * cosh(sqrt(0.84) * x))`, and
    confirm `Gamma` near `8.67741` and a peak density near `0.726290` before
    discretization error.
25. Reproduce the seven probes at the three resolutions for at least one
    qualified scenario and for both controls. Confirm the shape band, the
    departure pattern, and the energy and charge conservation checks.
26. Confirm that `near-threshold` is rejected by the dynamic bank although it
    passes the count, and that the report states the secondary hypothesis as
    not supported.
27. Confirm that the post-hoc note is labelled unregistered, that the static
    dispositions and the integrated v3 disposition are unchanged, and that
    Phase D has not been run.

## Claim audit

The final report may say that the declared case executed completely and
returned a negative result. It must not say that Level 0 is physically
validated, that the general theory is falsified, that all nonlinear
completions were searched, or that the result is empirical.

For the charged-state study the report may say that five preregistered
scenarios passed every declared gate inside the declared one-dimensional model
and perturbation bank. It must not say that Level 0 is validated, that the
paper's CRT-node is established, that the count criterion is proven, or that
the states are stable beyond the declared duration, dimension and bank.

## Review record

Copy this block into the review issue or pull request and fill every field:

```text
Commit:
Reviewer:
Date:
Environment:
Reproduction commands passed: yes/no
Independent Phase-B check:
Independent cubic boundedness check:
Independent pulse/Gamma/Rayleigh check:
Independent plateau-root/domain check:
Independent real-time dynamics check:
Independent asymmetric stationary check:
Independent real/phase Hessian check:
Independent four-probe dynamics check:
Independent charged symmetry/charge/vacuum-bound check:
Independent charged Hessian-count and charge-response check:
Independent charged seven-probe dynamics check:
Charged-study freeze ordering accepted: yes/no
Count criterion accepted as operationalization: yes/no
Phase-B to Phase-C mapping accepted: yes/no
Claim boundary accepted: yes/no
Blocking findings:
Non-blocking findings:
Decision: accept bounded computational result / request changes
Charged-study decision: accept bounded computational result / request changes
```

An accepted review record should be linked by commit hash. Do not edit the
scientific result to `reviewed` without preserving that external record.
