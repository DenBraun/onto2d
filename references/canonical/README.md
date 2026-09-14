# Canonical graph data

[graph.json](graph.json) is the editable source of the current graph: entities,
claims, publications, proposed construction rules and scoped relations.
The graph is a partial research model; its levels are display groups.

Every scientific claim identifies its source, the passages actually read and
its limitations. Experimental claims also identify a preparation and observable.
A mathematical definition, an observation, an intervention and a hypothesis
have separate roles. Published results are not independent reproductions.

The current graph contains 826 records, 356 connections, 749 claims and 294 sources.
Unfinished source work is listed in [pending-review.json](pending-review.json).
Open neural work concerns glial functions, gene regulation, neuroimmune
interactions, neurovascular coupling, adult neurogenesis, working memory, symbolic representations and social cognition.

| Data | Purpose |
| --- | --- |
| [schema.json](schema.json) | Current source contract |
| [retinal-review.json](retinal-review.json) | Retinal study contexts and competing explanations |
| [routing-review.json](routing-review.json) | Matched retinal comparisons and measured data cells |
| [optical-review.json](optical-review.json) | Material response and measurement boundaries |
| [visual-review.json](visual-review.json) | Visual relay, cortical organization and feedback |
| [neural-review.json](neural-review.json) | Neural preparations and interpretation tests |
| [physics-review.json](physics-review.json) | Physical experiments, computational contexts and conditional interpretations |
| [dictionary-review.json](dictionary-review.json) | Scoped vocabulary and mathematical checks |
| [source-readiness.json](source-readiness.json) | Representation roles and Formal Core requirements |

The [construction policy](../../docs/architecture/SOURCE_POLICY.md) explains how
evidence enters the graph. The [validation record](../../models/causal-emergence/canonical/VALIDATION.md)
states which current checks have run.

```sh
npm run model:causal-emergence:verify
```

Original manuscripts and source catalogues remain research inputs. Formal Core
implementation follows the data review.

## Quantum field definitions

The physical branch organizes a quantum-field framework, a free scalar
construction, the Standard Model specification and its QCD, quark, lepton and
gluon definitions. Its arrows mean theory classification or field membership.
They carry no measured necessity, temporal ordering or carrier count.

[Tong's quantization treatment](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html)
supplies an explicit construction under stated algebra and vacuum assumptions.
The [PDG QCD review](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-qcd.pdf) and
[electroweak review](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-standard-model.pdf)
specify particular fields and interactions. Each graph citation records the
sections actually reviewed. Representation dimensions, occupations, physical
states and stable constituents are distinct counting domains.

## Particle measurements

[Breidenbach et al.](https://doi.org/10.1103/PhysRevLett.23.935) supplies
electron spectra and a structure-function extraction conditional on transverse
dominance. [TASSO](https://doi.org/10.1016/0370-2693(79)90830-X) supplies
charged-track event shapes and a gluon interpretation with fragmentation
assumptions; the reviewed full text is the public DESY 79/53 author report.
[MuLan](https://doi.org/10.1103/PhysRevLett.106.041803) supplies two target
preparations, their finite positive-muon lifetimes and a combined result with
correlated errors. Its Fermi-coupling extraction additionally assumes the stated
decay relation, corrections and universality.

The graph uses `measurement-context` connections for the preparation defining
a readout and `interpretation-dependency` connections for the inputs to a stated
inference. Both are descriptive. Theory inputs, measured outcomes and inference
assumptions can therefore be inspected without asserting a physical creation
order. Jet multiplicity, detector counts and representation dimensions do not
define universal carrier minima. Published values retain their publication date
and uncertainty meaning; no detector analysis is independently reproduced.

The first four physical source cards remain open for the remaining scattering,
spectroscopy, lepton-specific and gluon-property evidence and their proposed
dependencies. Lattice computations need computational evidence.
The Level-0 carrier-promotion hypothesis also needs a derived quantum algebra,
state space, dynamics and observable map before it can connect to this branch.

## Bipartite states and Bell tests

[Werner's construction](https://doi.org/10.1103/PhysRevA.40.4277) separates
entanglement from Bell nonlocality for local projective measurements. A mixed
state is entangled when it has no convex decomposition into product states;
being nonproduct alone is insufficient. The subsystem partition is explicit.
It supplies neither a universal two-particle minimum nor a physical formation
order. Local unconditioned marginals follow from the declared Born measurement
model and completeness of its projectors.

The [CHSH bound](https://doi.org/10.1103/PhysRevLett.23.880) specifies a local
model under setting-independence assumptions. The Delft
[2015 experiment](https://doi.org/10.1038/nature15759) and
[2016 second run](https://doi.org/10.1038/srep30289) have separate preparation,
scoring and inference records. Replaying the deposited event tables recovers
196/245 and 237/300 wins. Under the declared null assumptions, the binomial
upper tails are 0.03917464 and 0.06072764; the published 0.039 and 0.061 are
rounded. The second run alone is inconclusive at 0.05. The
recorded assumptions include trial selection, setting predictability, timing
and stopping independently of outcomes. These are two runs by the same group.
The [event-table verifier](../../models/causal-emergence/canonical/verify-bell-data.py)
checks all 8664 exported rows, state-specific scoring and the detector change.
The deposited tables contain preselected events and derived fields; original
acquisition, stopping decisions and RNG calibration remain unverified.

Source card 1.4 remains open for field-region and vacuum entanglement,
quantum-information applications and further experimental reproducibility.


## Vacuum quantities and electromagnetic measurements

Vacuum is defined relative to a specified quantum model. A stationary ground
state can have nonzero variance for selected observables while its energy
variance and chosen free-particle occupation are zero. Smeared free-field
correlations and their spacelike commutator have separate meanings. These
quantities do not specify ongoing particle creation or a universal carrier count.

[Casimir's ideal-plate calculation](https://dwc.knaw.nl/DL/publications/PU00018547.pdf)
defines an interaction-energy difference. Real measurements require material
response, geometry and electrostatic calibration. The sphere-plane experiment
includes the [radius correction](https://doi.org/10.1103/PhysRevLett.81.5475),
[accepted optical calculation](https://doi.org/10.1103/PhysRevLett.84.5672) and
[author's systematic-error limitation](https://doi.org/10.1103/PhysRevLett.84.5673).
The [parallel-surface experiment](https://doi.org/10.1103/PhysRevLett.88.041804)
keeps its nine-point coefficient, drift-inclusive fit and unresolved printed
voltage-sign conflict explicit. Its measured squared-frequency shift and inferred
pressure have different distance exponents.

The [hydrogen microwave experiment](https://doi.org/10.1103/PhysRev.72.241)
reports an approximate 1000 MHz level separation. The
[Bethe model](https://doi.org/10.1103/PhysRev.72.339) estimates 1040 MHz under
an assumed cutoff; measurement and theoretical compatibility have separate
records. Neither experiment measures absolute vacuum energy. The
[external-source formulation](https://doi.org/10.1103/PhysRevD.72.021301)
limits what a Casimir force uniquely identifies without denying quantum
correlations. Acquisition and fit reproduction remain open research tasks.

## QCD running and its experimental interpretation

The [Gross-Wilczek](https://doi.org/10.1103/PhysRevLett.30.1343) and
[Politzer](https://doi.org/10.1103/PhysRevLett.30.1346) calculations establish
the weak-coupling ultraviolet argument for the specified matter content.
Renormalization scale is a description parameter. The graph separates its
convention, the gauge/fermion beta coefficients, asymptotic freedom and effective
flavor matching. Pure Yang-Mills theory is asymptotically free without quarks;
adding arbitrary matter need not preserve that property. The perturbative
infrared pole does not prove confinement or a generative hierarchy.

The [CMS jet-ratio study](https://arxiv.org/abs/1304.7498v2) supplies an unfolded
observable, a conditional coupling estimate and a correlated scale comparison.
Its final result uses a symmetric theoretical uncertainty: alpha_s(M_Z) =
0.1148 +/- 0.0014 (experimental) +/- 0.0018 (PDF) +/- 0.0050 (theory).
The three extracted scales are 474, 664 and 896 GeV; 1390 GeV is a range boundary.
The extraction uses NLO matrix elements, PDFs and an RGE conversion, so its
agreement tests that specified construction. Independent DIS comparisons,
detector/fit reproduction and nonperturbative extensions remain open.

## Lattice gauge theory

[Wilson](https://doi.org/10.1103/PhysRevD.10.2445) supplies a regulated
Euclidean construction and a leading strong-coupling surface argument. The
lattice, Wilson-loop observable, static-source area criterion, continuum-limit
prescription and surface expansion have separate definitions. Minimal
plaquette area concerns that expansion; it does not establish a universal
minimum for physical constituents or stable complexity.

[Creutz](https://doi.org/10.1103/PhysRevD.21.2308) supplies computational
evidence in pure SU(2), without dynamical quarks. Square-loop expectations,
a conditional area-coefficient fit and a scaling comparison have distinct
records. The model context and `computation-context` connections distinguish
this calculation from detector experiments. Small-loop fit assumptions,
finite-size checks, five-iteration fluctuations and weak area sensitivity above
beta=2.5 limit the inference. Fixed-tension renormalization and the comparison
normalization remain explicit inputs.

The [Bali static-source study](https://arxiv.org/abs/hep-lat/0505012v2) uses
SU(3) with two degenerate Wilson sea quarks, one lattice spacing and a sea mass
slightly below the physical strange mass. String and two-meson operator channels,
their correlation matrix, an operator-only null, fitted energy levels and a
mixing coupling have distinct records. Wilson loops alone show no visible
breaking signal within the sampled time window. The full matrix fit resolves
an avoided crossing and a lower energy approaching the two-meson threshold.
Its minimum-gap distance is 15.00(8) lattice spacings; conversion to 1.248(13) fm
uses r0=0.5 fm, and these quoted errors are statistical.

The graph follows the Equation 77 basis convention. The summary interchanges
its sine and cosine coefficients; Equation 85 also fails the text's exact
equal-mixing identity for the fitted coefficient. Those source inconsistencies
remain explicit. The inferred coupling has units of energy and describes
Euclidean mixing. It is not a measured irreversible decay rate. The physical
two-plus-one-flavor bands are speculative, and the auxiliary finite-range
potential formula has an incorrect large-distance asymptote. Independent
simulation replay, physical-mass extrapolation, continuum confinement and
real-time hadronization remain separate obligations.

The [Dürr light-hadron calculation](https://arxiv.org/abs/0906.3599v1) uses
two-plus-one-flavor QCD with degenerate up/down masses at three lattice spacings.
The graph separates correlator energies, scale-setting inputs, finite-volume
resonance inference and the extrapolated mass spectrum. Pion, kaon and Xi masses
are inputs, with Omega replacing Xi in an alternative normalization. Each set
predicts nine other channels; the two sets reuse the same simulations.

The isospin-symmetric nucleon result is 0.936 +/- 0.025 (statistical) +/- 0.022
(systematic) GeV with Xi normalization. The full reported mass table and its
uncertainty convention are attached to the spectrum claim. Physical light-quark
masses and zero lattice spacing are reached through fits. The 432 analysis
variants measure sensitivity to selected fit choices; they are not independent
experiments. Raw correlators, covariance and fit replay remain unavailable here.

The lightest rho and Delta points near a=0.085 fm are excluded because the
lowest two-particle level is insufficiently sensitive to the resonance mass.
This limitation has its own record. Finite-volume energies do not establish
physical lifetimes, and the isospin-symmetric spectrum does not resolve the
proton-neutron mass difference. Source cards 1.10 and 1.11 remain open for
formation dynamics, form factors, magnetic moments, weak-decay and nuclear
stability, and their claimed constituent minima.

## Free-neutron lifetime

The [Gonzalez UCNτ measurement](https://doi.org/10.1103/PhysRevLett.127.162501)
and [Musedinovic UCNτ measurement](https://doi.org/10.1103/PhysRevC.111.045501)
count surviving trapped neutrons after different storage times. Five production
years and three diagnostic preparations have separate contexts. Exponential
survival, storage losses and detector unloading have distinct meanings;
unloading constants of a few seconds are not the neutron lifetime.

The 2017-2018 result is 877.75 +/- 0.28 (statistical) +0.22/-0.16
(systematic) seconds. The published 2020-2022 result is 877.96 +/- 0.37
(statistical) seconds; combining all five production years gives
877.83 +/- 0.22 (statistical) +0.20/-0.17 (systematic) seconds. Analyses
within a year reuse the same data. The combined result imports the earlier
years, and the earlier lifetime also calibrates a simulation-based fit-bias
correction. These dependencies are explicit connections in the graph.

Material-loss controls, uncleaned-neutron preparations and detector-segment
response constrain corrections under stated assumptions. The different
within-year uncertainty rules, empirical fit-error normalization and correction
of a selection error after unblinding remain attached to their claims. The
2025 table's positive mean detector-uniformity correction conflicts with its
only nonzero yearly entry, which is negative; the averaging detail is unresolved.
Raw acquisition, fitted covariance and the complete systematic budget have not
been independently reproduced. These storage results do not independently test
a beam experiment, determine a unique decay mechanism or establish proton and
nuclear stability.

## Fractional electric-charge searches

The [Lee oil-drop experiment](https://doi.org/10.1103/PhysRevD.66.012002)
measures electric charge in 70.1 mg of processed silicone oil. Integer-peak
calibration, trajectory covariance, overlapping cuts and the final selected
sample remain part of the measurement context. The centered peak residual and
the modulo-one residual have separate definitions. The selected distribution
contains no drop farther than 0.15 e from the nearest integer, without
background subtraction.

The published 95% upper bound is 1.17 x 10^-22 particles per nucleon. Its
admitted modulo-one window is 0.18-0.82: the abstract and Introduction use that
window, while the results section assigns the same bound to 0.15-0.85.
Confidence-limit normalization and acquisition have not been independently
reproduced. Processing and unknown natural concentration prevent generalizing
this sample to all matter. Electric-charge non-detection does not measure color
charge or establish a universal confinement or downward-causation law.
