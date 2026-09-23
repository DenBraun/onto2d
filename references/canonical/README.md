# Canonical graph data

[graph.json](graph.json) is the editable source of the current graph: entities,
claims, publications, proposed construction rules and scoped relations.
The graph is a partial research model; its levels are display groups.

Every scientific claim identifies its source, the passages actually read and
its limitations. Experimental claims also identify a preparation and observable.
A mathematical definition, an observation, an intervention and a hypothesis
have separate roles. Published results are not independent reproductions.

The current graph contains 938 records, 566 connections, 908 claims and 314 sources.
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

## Isospin-breaking mass splittings

The [Borsanyi four-flavor calculation](https://arxiv.org/abs/1406.4088v2)
includes dynamical QCD and QED with nondegenerate up, down, strange and charm
quarks. Its 41 ensembles, the four-volume kaon diagnostic, physical-point
calibration and extrapolated spectrum have distinct records. The volume study
uses a subset of the production ensembles at enhanced electromagnetic coupling.

Charged-pion, charged/neutral-kaon and neutral-D masses are inputs; the Omega
mass sets the scale. The reported neutron-proton difference is
1.51 +/- 0.16 (statistical) +/- 0.23 (systematic) MeV. The other light/charm
splittings and correlated Coleman-Glashow combination retain their table values,
units and error convention. The approximately 500 fit variants and 2000 bootstrap
samples characterize a shared-data analysis, rather than independent experiments.

Separate QCD and QED contributions require a convention. This paper sets the
Sigma electromagnetic splitting to zero at its working precision, yielding
nucleon components of 2.52 and -1.00 MeV with their respective uncertainties.
The zero is a convention; rounded, correlated components need not sum exactly
to the rounded total. The reported component ratio -2.49 additionally uses the
experimental neutron-proton difference. Its dependence on that input is explicit.

QED_L zero-mode removal and inverse-volume corrections are part of the model.
The charged-ensemble table covers three of the four overall lattice spacings.
It also supplies four nonzero bare electromagnetic couplings, making five with
zero, while the main text says four including zero. That census discrepancy is
unresolved. Gauge configurations, correlators, fit covariances and the adopted
experimental masses have not been independently reproduced. This calculation
supports neither a weak-decay lifetime nor a universal stable-constituent minimum.

## Capture-based neutron mass

The [Kessler measurement](https://doi.org/10.1016/S0375-9601(99)00078-X)
separates the February 1995 and March 1998 GAMS4 campaigns. The five diffraction
configuration groups share calibration within each campaign. Their combination
therefore retains two campaign estimates and the final systematic contributions.
The reported first-order angle is 0.083202194(14) degrees.

Separate records identify the crystal lattice input, atmospheric compression,
photon wavelength, nuclear recoil, unit conversions and adopted hydrogen-isotope
mass difference. The 1999 analysis reports a photon wavelength of
5.57671299(99)e-13 m and a binding energy of 2224566.14(41) eV. Its neutron mass,
1.00866491637(82) u, also requires an external mass-spectrometry input; capture
spectroscopy alone does not determine it. These are that analysis's values,
not current recommended constants.

The selected [Dewey author-report passages](https://arxiv.org/abs/nucl-ex/0507011v1)
use an adjusted crystal spacing to recalculate the same capture data. The graph
retains that shared-data dependence. Selected [CODATA neutron-input passages](https://physics.nist.gov/cuu/pdf/RevModPhys.97.025002.pdf)
separate the dimensionless diffraction ratio from the adjusted crystal length.
The CODATA table prints a conflicting meter unit, and Kessler's Table 2 prints
an inconsistent year on the second campaign's summary row. Both discrepancies
remain visible. Neither the whole CODATA adjustment nor the other nuclei in
the Dewey paper are admitted through these selected readings.

Raw profiles, calibration records, upstream mass measurements and their
covariances remain unreproduced. No lifetime, proton-stability or universal
constituent-minimum conclusion follows from these mass inferences.

## Penning-trap mass inputs

The [Natarajan nondoublet experiment](https://doi.org/10.1103/PhysRevLett.71.1998)
separates common-voltage SOF measurements from the unequal-voltage PNP control.
Both are classical single-ion protocols. Charge state, three-mode frequency
reconstruction and magnetic drift remain explicit; the Ar+/Ar++ comparison is
a ratio of mass to charge, not simply the two ionic masses. The six reported
ratios retain their uncertainties and measurement scope.

Neutral H and D masses require electron, ionization and chemical-energy
corrections, with neutral carbon-12 defining 12 u. The [DiFilippo global fit](https://doi.org/10.1103/PhysRevLett.73.1481)
reports H 1.0078250316(5) u and D 2.0141017779(5) u from twenty pairwise
comparisons. Its covariance controls uncertainties in mass differences; the
short article does not print that matrix or all input ratios. Kessler's adopted
relative difference 1.00627674630(71) is therefore traced to this experiment,
while its uncertainty remains unreproduced.

The neutron entries in the mass papers already require external deuteron
binding energies. They cannot independently confirm the capture-based neutron
inference. The two MIT reports also do not establish independent acquisition
or cross-publication covariance. Raw records, fit reproduction and those shared
inputs remain open; no present-day constant or independent replication is
claimed by this review.

## LIONTRAP mass and geometry evidence

The [original proton measurement](https://doi.org/10.1103/PhysRevLett.119.033001)
and [2019 reanalysis](https://doi.org/10.1103/PhysRevA.100.022518) share their
acquisition. The graph and Model Studio distinguish experimental reanalysis
from new acquisition. The revised mass retains its carbon nuclear reference,
sixfold charge factor, electronic energies and thermal corrections. Extrapolating
deliberate excitation to zero does not remove thermal motion.

The double-dip comparison uses the same measurement cycles. Neutral oxygen
depends on the adopted proton mass; its third uncertainty component records
that input. The carbon charge-state control has a distinct doubled-voltage
preparation. These checks do not establish independent proton-mass replication.
The printed carbon-reference uncertainty, correction-table sign and
pair-specific correction aggregation remain unresolved. Their presence does
not justify silently changing the published mass.

The [image-charge study](https://doi.org/10.1103/PhysRevA.100.023411) separates a
dedicated magnetron experiment from finite-element geometry calculations.
Its inference retains shared mass and axial-calibration inputs, correlated
tilt corrections, numerical convergence and manufacturing tolerances.
The conversion between its two experimental table entries remains open.
Geometry supports a conditional correction for the specified electrodes;
it supplies no universal construction rule for the central graph. Raw data,
original numerical models and complete covariance remain unreproduced.

## Deuteron, molecular-ion and capture constraints

The [Rau deuteron and HD+ measurements](https://doi.org/10.1038/s41586-020-2628-7)
have separate generator and molecular-ion preparations. The carbon ionic
references, charge factors, thermal corrections and inferred molecular states
remain attached to the results. The local mass adjustment and the joint fit
with the [FSU ratio](https://doi.org/10.1103/PhysRevLett.124.013001) are derived
results. FSU's absolute deuteron mass uses the earlier LIONTRAP proton mass;
it cannot independently validate that shared absolute reference. The FSU
supplement and its detailed selection and rotational fit remain unreviewed.

The [HD+ NRQED energy](https://doi.org/10.1103/PhysRevLett.118.233001) is a
calculation, with theoretical and constant uncertainties distinguished. Its
primary table resolves the spurious energy multiplier in the accessible Rau
author version. Vibrational ground state alone does not establish rotational
ground state. State assignments inferred from cooling retain that assumption.

The [ILL silicon calibration](https://doi.org/10.6028/jres.122.024) retains its
two transfer paths, shared absolute reference, specimen variability and
22.5 C vacuum boundary. The complete final uncertainty combination remains
unrecovered. Rescaling the existing capture wavelength gives a revised binding
energy; its combination with adjusted proton and deuteron masses gives a
conditional neutron mass. This reuses the original capture acquisition.

The [executable check](../../models/causal-emergence/canonical/verify-deuteron-data.py)
fits 27 published grouped means from three named workbook panels with decimal
arithmetic and diagonal weights. It also checks rounded molecular mass and
capture-recoil arithmetic. The resulting grouped-fit errors differ from the
published original fit errors. Incorrect species headers and the 18 versus
17 pu figure/article uncertainty remain visible in the preserved workbook
bytes and claim limitations. This replay does not reconstruct raw acquisition,
original covariance, mass adjustments, molecular theory or crystal calibration.
The build includes the bounded results in `dictionaries.evidence.deuteronData`.

## Conditional mass ratios and adjustment inputs

[Fink and Myers 2021](https://doi.org/10.1103/PhysRevLett.127.243001)
measures two ions simultaneously in coupled magnetron orbits. Acquisition,
state assignment and drive controls have distinct contexts. Eleven plateaus
lead to five retained ratios within each of three possible state branches.
The published mass ratio assumes the most probable branch; its single quoted
uncertainty does not include the two alternatives. The derived proton mass
uses Rau's direct deuteron measurement, with that shared absolute reference.

The H2+ binding calculation has its own record and uncertainty boundary.
The [arithmetic verifier](../../models/causal-emergence/canonical/verify-mass-constraints.py)
preserves all three printed branches and checks their central mass conversion
and the direct-deuteron quotient. It does not reconstruct state likelihoods,
original phase acquisition or uncertainty propagation. The build exposes
these bounded results in `dictionaries.evidence.massConstraintData`.

Selected [CODATA 2022 passages](https://physics.nist.gov/cuu/pdf/RevModPhys.97.025002.pdf)
identify the adopted frequency ratios, charge-aware observational equations
and correlated carbon ionization inputs. These are adjustment constraints;
adjusted masses are not additional independent observations. The later input
selection does not rewrite the Fink 2020 constraint used in Rau's earlier fit.

The E13 lattice-input identity remains unresolved between the 2018/2022
adjustment tables and the cited Kessler WS1/ILL comparison paths. The graph
records both source values without inventing a replacement calibration or
claiming an error in the numerical adjustment. Printed equation and label
conflicts are explicit. The whole CODATA adjustment remains unreproduced.

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
