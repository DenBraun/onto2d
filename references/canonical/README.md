# Canonical graph data

[graph.json](graph.json) is the editable source of the current graph: entities,
claims, publications, proposed construction rules and scoped relations.
The graph is a partial research model; its levels are display groups.

Every scientific claim identifies its source, the passages actually read and
its limitations. Experimental claims also identify a preparation and observable.
A mathematical definition, an observation, an intervention and a hypothesis
have separate roles. Published results are not independent reproductions.

The current graph contains 1207 records, 983 connections, 1289 claims and 392 sources.
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

Card 1.0 has this scoped framework and its specified model examples. Field
content, quantum algebra and the chosen state representation are inputs to
these constructions. They are not derived from the Level-0 effective carrier.
That proposed bridge remains explicitly unresolved in `C-phys-l0-bridge`;
its necessary-parent arrow, weight and unit minima are not admitted. SOMA
level, phase and pattern labels do not establish a temporal emergence sequence.

The free-field time-evolution contract specifies a time-independent Hamiltonian,
canonical algebra and positive-frequency modes. The finite oscillator check
separates preservation of that algebra from preservation of the ground-state
covariance: squeezing can preserve the first without the second. Stationary
states can have changing unequal-time correlations. Card 1.26 retains this
scoped construction; interaction-amplitude vertices, renormalization-scale
changes and numerical sampling do not supply a universal temporal process or
maintenance cause.

## Electroweak model and boson observation

[Higgs's 1964 model](https://doi.org/10.1103/PhysRevLett.13.508) supplies a
linearized scalar/vector example, with its explicit classical-theory boundary.
[Weinberg's 1967 model](https://doi.org/10.1103/PhysRevLett.19.1264) supplies
electron-type chiral representations, a scalar doublet and gauge/electron mass
relations. The graph preserves each paper's normalization and field signs.
Gauge and Yukawa couplings remain inputs; the relations do not predict their
numerical values or the mass hierarchy. A chosen nonzero field component is
not itself an observed gauge-invariant order parameter.

The [ATLAS 2012 observation](https://arxiv.org/abs/1207.7214v2) separates
acquisition, response, selected candidates and likelihood inference. Its
four-lepton and diphoton channels determine the reported mass; the broader
combination determines the excess and common signal strength. The WW table
and likelihood use different final selections. Weighted plots reuse the same
events, and reanalysed 2011 data are not independent replications. Local and
global significance retain their different hypotheses and search ranges.

The historical result supports a neutral boson compatible with the Standard
Model Higgs hypothesis. It does not alone determine every coupling, unique
spin-parity, the scalar potential or vacuum stability. Synthetic mass-matrix
and Hessian checks do not reconstruct detector response or likelihoods.
The selected PDG single-doublet construction specifies its potential convention,
unitary-gauge background and tree-level gauge/scalar masses. In the charged
fermion mass basis the one-Higgs coefficient is `m_i/v = y_i/sqrt(2)`.
Masses or Yukawa parameters are supplied inputs; their hierarchy is not derived.
The background differs from the propagating Higgs excitation, and a classical
minimum does not establish absolute quantum-vacuum stability. The minimal
charged-fermion formula supplies no neutrino-mass mechanism or composite-hadron
mass sum.

Cards 1.8, 1.9, 1.14 and 1.28 have this qualified formal and collider scope.
Their claims of generated chirality, a predicted mass hierarchy, universal
composite-matter stability, causal maintenance and a fixed temporal order are
excluded. Parent weights, carrier minima and SOMA classifications receive no
scientific validation. Species-specific coupling measurements and a cosmological
transition require separately specified evidence.

## Historical W and Z observations

The [UA1 W report](https://doi.org/10.1016/0370-2693(83)91177-2) separates
the 1982 acquisition, detector response, six displayed electron candidates and
the final five-central-event subset. Its overlapping selection methods reuse
the same data. The exact two-body transverse-mass inequality does not guarantee
a bound for every reconstructed detector estimate. The reported 90% lower
limit and the chosen mass fit are distinct inferences; the alternative QCD
smearing fit is a dependent model comparison.

The [UA1 Z report](https://doi.org/10.1016/0370-2693(83)90188-0) uses a separate
1983 acquisition with four electron pairs and one dimuon. The electron mass
summary retains the unfinished common electromagnetic calibration. The dimuon
mass combines magnetic and transverse-recoil estimates under a no-neutrino
assumption. These historical masses are not current precision values, and the
discovery peak does not determine an intrinsic width or lifetime. The reviewed
CERN preprints, selected visual checks and conflicting event identifier are
explicit. These discovery analyses retain their historical measurement scope.

## Weak currents, resonance widths and decay fractions

The [PDG electroweak treatment](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-standard-model.pdf)
specifies charged and neutral currents in the declared broken-phase model.
Spin, charge, chiral representations and couplings are supplied assignments;
the tree neutral current is flavor diagonal in the minimal mass basis.
Low-momentum massive exchange gives a contact approximation with its tree
Fermi normalization. Beta decay and neutrino reactions additionally require
their own external states, matrix elements and response; they do not require
production of a real on-shell W or Z.

The [LEP Z report](https://arxiv.org/abs/hep-ex/0509008v3) separates corrected
scan observables, four experiment fits and their correlated combination.
Its no-lepton-universality branch gives the running-width parameter
`Gamma_Z = 2.4952 +/- 0.0023 GeV`. Inclusive partial widths and branching
fractions transform the same fit; the invisible component is a residual.
They are not independent confirmations of the total width. Common covariance,
radiative corrections, interference assumptions and the adopted parameter
convention remain explicit.

The [LEP W report](https://arxiv.org/abs/1302.3415v4) separates the 1996-2000
width inputs from the 1997-2000 branching inputs, with distinct acquisition,
response and inference records. Its running-width result is
`Gamma_W = 2.195 +/- 0.063 (stat.) +/- 0.055 (syst.) GeV`.
Unconstrained leptonic fractions and the universality-constrained result
remain separate. Total-production cross sections computed with assumed
branching fractions do not supply independent branching evidence. Printed
source discrepancies remain attached to the corresponding records; raw
likelihoods and complete covariance are not locally reproduced.

The [resonance pole convention](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-resonances.pdf)
and [exponential survival approximation](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-kinematics.pdf)
relate a proper lifetime to an energy-plane pole width. That width is distinct
from an s-plane or running-width parameter without the stated conversion or
approximation. No numerical lifetime or directly timed W/Z decay is admitted.
Card 1.24 has this finite qualified scope, together with the existing Higgs
mass definitions and historical UA1 observations. Stable bounded carriers,
persistent classical identity, universal formation/maintenance, original
parent weights, carrier minima and SOMA phase ordering are excluded.

## Higgs decay to tau leptons

The [CMS tau analysis](https://arxiv.org/abs/1708.00373v2) separates the
2016 exposure, reconstructed decay distributions, response/control inputs
and original likelihood. At the adopted mass 125.09 GeV, its 2016-only
signal strength is `1.09 (+0.27/-0.26)` relative to the Standard Model rate,
with local observed significance 4.9 standard deviations. The stronger
Run1-plus-2016 combination reuses this exposure. Tau decay neutrinos remain
unobserved; reconstructed hadronic tau objects are not stable tau tracks.
Calibration samples can overlap the search, and fitted channel summaries
share nuisance constraints.

The [coupling framework](https://arxiv.org/abs/1307.1347v2) defines the
production-times-partial-width rate divided by total width for a single
narrow resonance. The common vector/fermion scan uses the
[referenced CMS method](https://arxiv.org/abs/1401.5041v2), treating H-to-WW
as signal; the tau-rate fit treats it as background. Its reported Standard
Model compatibility depends on the implemented width/loop map, which is
not fully specified in the reviewed passages. The generic framework does
not supply those missing choices. A common fermion modifier is not an
isolated tau Yukawa determination or a derivation of all fermion masses.

Post-fit plots and the sensitive-bin Table 4 are dependent summaries.
Some printed component totals remain unreconciled; no replacement totals
or likelihood replay are claimed. These published outcomes receive no
local executable certification. Their width/loop and unreconciled-table
obligations remain attached to these records.

## Reactor neutrino oscillations

The [PDG mixing treatment](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf)
defines flavor/mass bases and coherent vacuum phases within the declared
unitary model. Oscillation phases constrain mass-squared differences; they
do not determine absolute masses or a unique mass-generation mechanism.

The [KamLAND 2005 study](https://arxiv.org/abs/hep-ex/0406035v3) supplies a
reactor preparation and an [official selected-energy release](https://www.awa.tohoku.ac.jp/KamLAND/datarelease/2ndresult.html).
Its 258 selected prompt candidates, no-oscillation expectation, backgrounds, average
survival and rate-and-shape fit have separate records. The 2.6 MeV prompt
threshold and approximately 3.4 MeV neutrino threshold concern different
energy variables. Reactor histories, response and the revised alpha-neutron
background remain inputs; the 180 km plotting baseline does not replace them.

The local check binds the two unchanged source assets and verifies selected
energy summaries, printed central arithmetic and synthetic phase identities.
It does not reproduce the likelihood or its uncertainty. The earlier sample
is part of this acquisition, and the solar-combined result is a different
inference. Cards 1.17 and 1.25 remain open for their other source assertions,
including transport, astrophysical-source and cosmological applications. The
solar, atmospheric and accelerator results retain their own acquisition and
interpretation scopes.

## Accelerator tau-neutrino appearance

The [OPERA appearance result](https://arxiv.org/abs/1507.01417v2) separates
the 2008-2012 CNGS acquisition, 5408 analyzed selected events, reconstructed
tau-decay candidates, modeled signal/background expectations and original
inference. Five selected candidates across four channels are not a measured
transition probability. The beam-composition and reconstruction conditions
come from the selected [method passages](https://arxiv.org/abs/1308.2553v1),
with their [publisher erratum](https://doi.org/10.1007/JHEP04(2014)014) retained.

The reported 5.1-standard-deviation appearance result uses channel-specific
backgrounds and pseudoexperiment calibration. A total-count Poisson tail does
not reproduce it. The signal-strength and full-mixing mass-squared intervals
are 90% confidence results from the same acquisition. Earlier candidate papers,
the fifth-event display and alternative statistical implementations do not
provide independent experiments. No absolute neutrino mass, unique mass origin,
transport model or cosmological prediction follows from this finite admission.

## Solar active-flavor evidence

The [SNO neutral-current study](https://arxiv.org/abs/nucl-ex/0204008v2)
separates its pure-heavy-water acquisition, 2928 selected events, calibration
and background estimates, fitted channel yields and flux interpretation.
Charged current selects electron flavor; neutral current has equal response
to the three active flavors; elastic scattering has reduced non-electron
sensitivity. Its channel-normalized elastic-scattering flux is therefore
electron-equivalent, not the total active flux. Reconstructed energy,
reaction threshold and neutron-capture gamma energy remain distinct.

The same-data joint analysis reports a non-electron active component
`3.41 (+/-0.45 statistical)(+0.48/-0.45 systematic) x 10^6 cm^-2 s^-1`,
under the standard boron-8 shape and adopted weak-response model. This is
a combined muon/tau component, not separately identified incoming flavors.
Its inference is not subtraction of independent CC and NC measurements;
the joint covariance and likelihood are unreproduced. The external
Super-Kamiokande constraint and shape-relaxed extraction are separate analyses.
The result supports flavor transformation without selecting a unique
oscillation mechanism, absolute mass or matter-enhancement explanation.

## Atmospheric disappearance

The [Super-Kamiokande 1998 study](https://arxiv.org/abs/hep-ex/9807003v2)
supplies a separate 535-day atmospheric acquisition. Reconstructed
electron-like/muon-like counts, containment, the modeled no-oscillation
response, double ratios and zenith asymmetry have distinct records.
Visible energy and charged-lepton direction are imperfect proxies for
neutrino energy and direction. The historical physical two-flavor fit
reports `sin^2(2 theta)=1` and `Delta m^2=2.2 x 10^-3 eV^2`, conditional
on its flux, interaction, detector and nuisance model.

Version 2 retains corrected event weights and a freely fitted overall
normalization. The fit, confidence region and reconstructed L/E display
reuse the selected sample and are not locally reproduced. This acquisition
does not distinguish tau from sterile disappearance or directly observe tau
appearance; its mass-squared difference is not an absolute neutrino mass.

## Coherent neutrino propagation in matter

Selected [PDG matter-propagation equations](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf)
specify a closed, coherent three-active-flavor model with prescribed vacuum
masses, mixing, energy and ordinary-matter density. Antineutrinos conjugate
the mixing matrix and reverse the potential. A common neutral-current
term contributes only an overall phase within this model.

The separate two-flavor approximation distinguishes instantaneous maximal
mixing from adiabatic following: varying density introduces derivative
coupling between instantaneous states. Neither resonance alone nor the
formal equations establish complete conversion or reproduce a solar/Earth
profile. Effective propagation eigenvalues do not generate vacuum masses.
These definitions are not prerequisites for the SNO response comparison
and do not turn that observation into a measured matter effect.

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

Lepton and gluon source cards 1.2-1.3 remain open for their remaining
species-specific evidence and proposed dependencies. Lattice computations
retain their separate computational evidence.
The Level-0 carrier-promotion hypothesis also needs a derived quantum algebra,
state space, dynamics and observable map before it can connect to this branch.

## Quark fields and inclusive scattering

Quark spin, electric charge, flavor and color representation are declared model
assignments. Three color components do not mean three constituent particles.
Renormalized masses require a prescription and scale; a fitted top-mass input
does not assign the same mass convention to every flavor. The electromagnetic
current and leading charge-weighted parton response are formal definitions,
with active flavors, approximation and factorization boundaries made explicit.
Parton distributions, reconstructed jets and fragmentation are distinct from
counts of isolated quarks.

[Bloom et al.](https://doi.org/10.1103/PhysRevLett.23.930) supplies the
apparatus, electron selection and radiative corrections for the historical
SLAC sample also interpreted by Breidenbach. These papers do not supply
independent replications. The small-angle scaling interpretation retains its
transverse-dominance assumption.

[Whitlow et al.](https://doi.org/10.1016/0370-2693(90)91176-C) separates the
longitudinal and transverse response through a reanalysis of archived SLAC
cross sections at different virtual-photon polarizations. Radiative corrections,
relative normalization, bin centering and correlated fits are explicit inputs.
The reported Rd-Rp difference is consistent with zero within its errors;
it does not establish exact equality. Interpreting these responses in terms
of partons requires the stated approximations; neither result by itself
determines all six flavors or observes isolated colored particles. Printed formulas
and normalization discrepancies in the selected author report remain explicit;
the numerical fit and original acquisition are not reproduced.

[CDF's top-width analysis](https://doi.org/10.1103/PhysRevLett.111.202001)
separates selected event counts, simulated detector response, a joint width/jet
calibration fit at fixed top mass and its reported confidence interval. Its width-to-lifetime
interpretation and comparison with an adopted hadronization scale are
species-specific and conditional; no directly timed decay is claimed.

Card 1.1 is qualified to these model definitions and scoped evidence, together
with the existing spectroscopy, valence/Fock, lattice and hadron-production
records. Net valence numbers do not imply a permanent valence-only population;
color-singlet algebra does not derive real-time hadron formation. The Lee
fractional-electric-charge search constrains its selected material and is not
a universal color-confinement test. General confinement remains card 1.7's
separate scope. Universal stable carriers, a later chronological confinement
stage, arbitrary parent weights/minima and a SOMA objecthood proof are excluded.
Framework and representation dependencies state the chosen model; they do not
derive it from Level 0 or establish a necessary physical creation sequence.

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

Card 1.27 retains this model-dependent state definition and the scoped force
and spectral observations below. Stationarity does not require an additional
maintenance cause or make unequal-time correlations constant. The free model
does not establish a unique vacuum substance, absolute vacuum energy or an
electroweak background. Interacting, symmetry-breaking and curved-spacetime
states require separate constructions. The original physical parent weights,
maintenance arrow and carrier minima are excluded.

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
records. Neither result measures absolute vacuum energy. The
[external-source formulation](https://doi.org/10.1103/PhysRevD.72.021301)
limits what a Casimir force uniquely identifies without denying quantum
correlations. Acquisition and fit reproduction remain open research tasks.

## Electron anomaly and electromagnetic running

The [Fan et al. study](https://doi.org/10.1103/PhysRevLett.130.071801) measures a single
trapped electron through quantum-jump spectra. Fitted anomaly and cyclotron
frequencies, trap corrections and the cavity response condition the reported
`g/2 = 1.00115965218059(13)`. The eleven magnetic-field settings belong to one
determination; cavity uncertainties are correlated for nearby fields. The
unexplained cyclotron-line broadening remains explicit. The authors advise
against averaging this determination with their 2008 result because the
uncertainty correlations are difficult to determine.

[Schwinger's letter](https://doi.org/10.1103/PhysRev.73.416) supplies the leading
electron anomaly `a_e = alpha/(2*pi)` and a renormalized mass/charge convention.
That term is separate from the full Standard Model prediction and its external
inputs. Neither the experimental moment nor a finite algebra check measures a
bare mass or resolves separate virtual-particle contributions. The
[electron-moment verifier](../../models/causal-emergence/canonical/verify-electron-moment.py)
checks its declared arithmetic; it does not reproduce the spectra, cavity model
or full radiative calculation.

The [L3 small-angle analysis](https://doi.org/10.1016/S0370-2693(00)00122-2)
uses 1993–1995 Bhabha-scattering data near the Z resonance. Because the sample
also supplies the luminosity normalization, the inference uses angular shape.
Its fitted deformation of nominal QED running and the resulting
`alpha^-1(-2.1 GeV^2) - alpha^-1(-6.25 GeV^2) = 0.78 +/- 0.26`
are interpretations of the same acquisition. A zero deformation preserves
nominal running. The plotted lower endpoint is fixed to theory, and the
opposite-side material discrepancy remains a systematic limit. The separate
1998 large-angle acquisition is outside this admission.

The [effective-alpha verifier](../../models/causal-emergence/canonical/verify-vacuum-polarization.py)
checks synthetic normalization and the added deformation from the printed
slope. It does not calculate the nominal vacuum polarization, reproduce the
reported full difference or validate the likelihood. These records, together
with the scoped Lamb/Bethe and QCD-running evidence, qualify source card 1.13.
They support specific radiative corrections and scale-dependent descriptions,
not a measured virtual-particle population, absolute vacuum energy or a
universal construction rule. Arbitrary source-card parent weights and minima
are excluded.

Selected pages 769-776 of [Feynman's amplitude construction](https://doi.org/10.1103/PhysRev.76.769)
give card 1.22 a scoped perturbative QED treatment. External states, internal
propagators and the sum of interfering amplitudes have separate definitions.
Four-momentum is conserved; internal momenta are not restricted to a free
mass shell, and pole regions prevent identifying internal with always off
shell. The ordering of matrices along a fermion line is distinct from measured
chronology. The selected historical passages do not establish an all-orders
construction or a universal particle population.

The [kinematic verifier](../../models/causal-emergence/canonical/verify-virtual-process.py)
checks exact synthetic external mass shells, momentum conservation, spacelike
transfer, Lorentz boosts and generic interference. It calculates no spinor
amplitude, loop integral or experimental cross section. Card 1.22's universal
formation/maintenance dependencies, parent weights and carrier minima are
excluded; the existing measured radiative effects keep their own model inputs.

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

Card 1.15 is reviewed with qualifications. These static-source and screening
records, color-singlet algebra and charge-search limits do not establish its
universal downward-causation mechanism or blanket composite stability. Those
assertions and the arbitrary parent weights/minima are excluded. A distinct
macroconstraint hypothesis needs a defined macrovariable, micro-to-macro map,
effective dynamics and discriminating intervention or reduction predictions.
General confinement card 1.7 retains its own unresolved scope; independent
lattice replay is separate from the finite disposition of card 1.15.

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
proton-neutron mass difference. Hadron production and nucleon properties have scoped evidence below.
Their formal constituent labels and response measurements establish neither
universal carrier minima nor a necessary construction order.

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

The [Nico beam measurement](https://doi.org/10.1103/PhysRevC.71.055502)
counts protons from neutron beta decay and uses a downstream fluence monitor
to infer the neutron population in a defined trap region.
Its June 2000-February 2001 acquisition gave 886.3 +/- 1.2 (statistical)
+/- 3.2 (systematic) seconds. The
[Yue calibration update](https://doi.org/10.1103/PhysRevLett.111.222501)
applies a new absolute monitor calibration to that same acquisition. Its
887.7 +/- 1.2 (statistical) +/- 1.9 (systematic) seconds is an updated
inference, not a second neutron lifetime acquisition. Calibration, temporal
stability assumptions, proton detection and trapping corrections remain
separate dependencies. The graph does not average these dependent results
or combine beam and storage measurements.

The reviewed Yue author manuscript's Equation 2 reverses the wavelength
ratio required by Equation 1 and the reported thermal efficiency. Both the
printed conflict and the consistent conversion are explicit. This establishes
a conflict in that manuscript, not an error in the published numerical analysis.
The [beam arithmetic verifier](../../models/causal-emergence/canonical/verify-beam-neutron.py)
checks this conversion, the 1.4-second recalibration and the rounded 2.3-second
uncertainty budget. It does not reproduce the raw acquisition, calibration
chain, proton-loss fit, deposit-stability model or full covariance.

The [detailed AlphaGamma study](https://doi.org/10.1088/1681-7575/aac283)
separates source-activity calibration, alpha-to-gamma count-rate transfer and
thermal monitor normalization. The primary rate identity cancels a common
gamma response and branching fraction; the full corrected experiment still
depends on geometry, losses, transport and nuclear-data inputs. A total beam
rate in inverse seconds is distinct from a fluence rate per unit area.
Thermal efficiency additionally depends on wavelength, the inverse-velocity
assumption and finite-beam corrections. Its reported 2018 efficiency remains
distinct from the value used in the 2013 lifetime update.

The 2011 dissertation's two-stack activity and the 2018 paper's activity are
separate source-specific results. The
[calibration arithmetic verifier](../../models/causal-emergence/canonical/verify-alpha-gamma.py)
checks the thesis weighted mean and shared-error propagation under both
conflicting printed common-error fractions. It also preserves the 2018
activity-ratio discrepancy, missing factor in Equation 28 and absorption versus
transmission label conflict. The measured efficiency is an input to the
attenuation check. These checks establish bounded algebraic consistency or
inconsistency of printed material; they do not reproduce the calibration,
27-point fit, full covariance or lifetime analysis, or establish an error in
the underlying experimental computation.

## Elastic proton form factors

The [A1 analysis](https://doi.org/10.1103/PhysRevC.90.015206) separates the
MAMI scattering acquisition, corrected cross-section ratios, normalization
and electric/magnetic form-factor extraction. The reviewed article is
[arXiv:1307.6227v2](https://arxiv.org/abs/1307.6227v2); selected ancillary
tables retain their exact deposited bytes and source descriptions.
Its 1,422 cross-section entries reuse the acquisition previously reported in
2010. Their spline normalization, scaled point uncertainties and shared
normalization parameters are analysis inputs, not independent calibrations.

The 77 Rosenbluth extractions and four additional constrained alternatives
remain distinct. The separation uses normalization from the spline fit, so
agreement between these methods is a dependent comparison. The selected
1,000-point spline table describes a fitted curve with pointwise uncertainty
bands; its grid points are not new measurements. Its magnetic column is
`GM / mu_p`, while the Rosenbluth table supplies `GM`. Charge and magnetic
normalizations are imposed reference conditions, not new moment measurements.

The [table verifier](../../models/causal-emergence/canonical/verify-bernauer-data.py)
checks the finite table census, normalization conventions, form-factor ratio
identities and printed fit bookkeeping. A discrepant Friedrich-Walcher row in
Table IV is preserved without diagnosing the original fitting computation.
Raw event reduction, the fitted parameters, full covariance and uncertainty
bands have not been independently reproduced. Radiative and two-photon
corrections and model dependence remain part of the inference. These results
do not establish a literal static three-dimensional charge map, an exact
constituent count or hadron formation dynamics.

## Nucleon magnetic moments

[Mooser's proton measurement](https://arxiv.org/abs/1406.4888v1) and the
[Schneider result](https://doi.org/10.1126/science.aan0207) retain separate
double-trap campaigns. The latter's methods are reviewed through selected
passages of the [original dissertation](https://doi.org/10.25358/openscience-4441);
the journal reading is limited to its indexed abstract and metadata. The graph
separates the frequency-ratio definition, spin-response inference, statistical
center and corrected moment. The dissertation describes the same campaign,
not another measurement. Its ratio, variance and likelihood-normalization
print conflicts remain unresolved. The
[proton verifier](../../models/causal-emergence/canonical/verify-proton-moment.py)
checks bounded identities and printed arithmetic, retaining the linear
systematic-error sum. A definition link identifies the nuclear-magneton units
of the Sachs normalization without changing the historical fit's inputs.

[Afach's neutron/mercury experiment](https://arxiv.org/abs/1410.8259v2) measures
a positive precession-frequency ratio in a shared storage chamber. Different
spatial sampling and magnetic responses require corrections. An absolute
neutron gyromagnetic magnitude additionally uses the quoted external atomic
mercury calibration; the ratio does not independently determine the sign.
The [neutron verifier](../../models/causal-emergence/canonical/verify-neutron-moment.py)
preserves the 16 grouped run entries, correction directions and the authors'
maximum-directional-error rule. Neither verifier reproduces acquired signals,
resonance fits, field maps or full covariance.

## Neutron elastic response

[Lachniet et al.](https://arxiv.org/abs/0811.1716v2) separates deuterium
quasielastic event ratios from the magnetic form-factor extraction. The bound
26-point table is checked against the versioned author figure. Its last two
reported systematic fractions do not match the article's stated range; that
conflict is retained without altering the data. Nuclear corrections and
Fermi-motion acceptance factors are distinct inputs.

[Riordan et al.](https://arxiv.org/abs/1008.1738v2) separates measured helium-3
asymmetries, correction stages, the inferred ratio and its electric-response
conversion. The versioned Table III values take precedence over the older
abstract values. The conversion uses Lachniet magnetic data and the adopted
neutron moment. Interpolation and rounded-table checks do not reproduce the
nuclear response, acceptance simulation or covariance. The first electric
central value is compatible with the printed ratio's rounding interval;
central arithmetic alone does not exactly reproduce it.

## Identified hadron production

The selected [SLD analysis](https://arxiv.org/abs/hep-ex/9805029v1) supplies
inclusive reconstructed neutral-kaon, Lambda, K-star and phi spectra in
hadronic Z decays. The graph separates reconstruction, corrected differential
yields, measured-range integrals and extrapolation into unmeasured momentum.
A local check integrates the 44 transcribed bins and retains central-value
rounding differences. The extrapolation uses the same acquisition and three
fragmentation models; it is not an independent measurement or a unique
hadron-formation mechanism. Resonance reconstruction does not imply stability.
The later charged-particle result is recorded only as a scope boundary.

## Light-flavor families and conditional identification

Selected [PDG quark-model passages](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-quark-model.pdf)
distinguish approximate light-flavor SU(3) from color SU(3). The spatially
symmetric ground-state baryon model contains the spin-one-half octet and
spin-three-halves decuplet. The light meson convention separates singlet and
octet components and physical isoscalar mixing. These assignments specify
model states, without determining their complete quark/gluon populations.
[Gell-Mann's Equation 8.1](https://doi.org/10.1103/PhysRev.125.1067) supplies
a first-order octet mass relation. The
[family verifier](../../models/causal-emergence/canonical/verify-hadron-family.py)
checks supplied weights, synthetic mass-relation identities and historical
spacing arithmetic; it does not derive symmetry breaking or fit measured masses.

The [Barnes Omega report](https://www.osti.gov/servlets/purl/12491965)
separates a decuplet expectation from one selected bubble-chamber event.
Measured tracks and photon conversions feed a conditional neutral-cascade
reconstruction and the reported mass `1686 +/- 12 MeV/c^2`. The predicted
`J^P=3/2+` is not a spin measurement, and the reconstructed event time
`0.7 x 10^-10 s` is not an ensemble lifetime. The authors defer a detailed
mass discussion until further events and better-understood systematic errors.

The [KLOE radiative-decay analysis](https://doi.org/10.1016/j.physletb.2007.03.032)
separates selected candidates, modeled background subtraction, detector
response and the inferred branching-fraction ratio of `phi -> eta' gamma`
to `phi -> eta gamma`,
`R_phi = (4.77 +/- 0.09 statistical +/- 0.19 systematic) x 10^-3`.
Its pseudoscalar mixing angle in the quark-flavor basis,
`phi_P = (41.4 +/- 0.3 statistical +/- 0.7 systematic +/- 0.6 theory) degrees`
uses the same acquisition plus a no-gluonium assumption, constituent-mass,
overlap, vector-angle and photon-momentum inputs. The angle is a conditional
interpretation of the ratio; no independent confirmation or absolute decay
width is inferred. The
[meson verifier](../../models/causal-emergence/canonical/verify-meson-family.py)
checks finite flavor algebra, synthetic response identities and printed
subtraction, without reproducing the measured ratio, mixing fit or covariance.

Card 1.16 has this finite classification, event-identification and transition
treatment under the stated flavor, spin and spatial assumptions. It is not a
complete hadron taxonomy or a confinement/formation mechanism. The measured
free-neutron lifetime and channel-specific proton limits do not establish
nucleon permanence. Universal stability, a necessary parent 1.10, parent weights
and constituent minima are excluded; SOMA level/phase/type assignments gain no
scientific validation from these results. Further spectroscopy and complete
acquisition replay are separate scopes.

## Nucleon labels and conditional nuclear energetics

Selected [PDG quark-model passages](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-quark-model.pdf)
define net flavor, electric charge and baryon number. The
[light-front review](https://arxiv.org/abs/hep-ph/9705477v1) describes a state
expansion with different parton sectors. The local exact algebra checks charge
bookkeeping, the antisymmetric color tensor and the SU(3) center obstruction
for one or two fundamental factors. The restricted three-factor minimum
excludes antiquark and adjoint factors by assumption. It establishes neither
a general hadron minimum nor an observed three-particle population. Fock
coefficients, color recoupling and QCD dynamics are not calculated.

For a bare deuteron, the declared channel `d -> p + p + e- + antineutrino`
has a conditional Q value near -1.44223 MeV using the scoped adjusted mass
inputs. Positive on-shell final energies exclude that breakup channel for
those inputs. Re-expressing the captured neutron mass cancels the shared
binding energy exactly; it does not provide independent confirmation. The
calculation retains the published mass correlation, atomic/bare-state
boundary and rounded-input limits. It does not measure a lifetime or prove
stability against other channels.

Local calculations identify their executable sources and use
`analytically-checked` claims. Their study records carry no journal metadata.
Definitions, published measurements and bounded calculations retain distinct
evidence roles.

## Pion decay channels

[PIENU](https://arxiv.org/abs/1506.05845v2) measures the ratio of electronic
to muonic positive-pion partial decay rates, including associated radiative
decays. Selected positron energy/time spectra, the simultaneous timing fit,
response corrections and final ratio have separate records. The published
result is `(1.2344 +/- 0.0023 statistical +/- 0.0019 systematic) x 10^-4`.
It is neither an absolute branching fraction nor a new pion lifetime.

The fitted and corrected ratios reuse the same pion acquisition. Dedicated
positron-beam response measurements, stopped-muon controls and simulation
supply additional correction inputs. The empirical upper/lower calorimeter-tail
bounds are not independent Gaussian measurements. Detector histograms are
not unfolded decay spectra, and the adopted lifetimes are not new measurements.

The [local verifier](../../models/causal-emergence/canonical/verify-pion-decay.py)
checks the printed correction product, display rounding and synthetic
efficiency/exposure identities. It reproduces neither the timing fit nor the
tail correction and covariance. The measured ratio does not acquire this
local check's evidence status.

Card 1.12 is covered by these branching data, the existing muon/neutron
lifetime preparations, proton partial-lifetime searches and the conditional
deuteron energy threshold. Universal daughter stability, cosmological
population claims and the original parent weights/minima are excluded.
Other decay families and complete experimental replay are separate research
scopes, not prerequisites for this finite treatment.

## Proton partial-lifetime searches

The [Super-Kamiokande search](https://doi.org/10.1103/PhysRevD.102.112011)
separates its shared SK-I-IV acquisition, modeled response, selected counts
and Bayesian inference. It reports zero electron-channel candidates and one
muon-channel candidate, consistent with modeled backgrounds. The published
90% bounds concern `tau/B`: 2.4e34 years for `p -> e+ pi0` and 1.6e34 years
for `p -> mu+ pi0`. Unknown branching fractions prevent treating these as the
same bounds on total lifetime or as proof of eternal stability.

The source retains detector phases, fiducial and kinematic cuts, imperfect
neutron tagging, nuclear response and overlapping earlier exposure. The
original inference uses the same acquisition; its numerical calculation is
a model context. Its printed prior and normalization conventions, unrounded
MC inputs and nuisance covariance require resolution before a likelihood
replay can be claimed. Newer channels and independent experiments remain open.

The [local verifier](../../models/causal-emergence/canonical/verify-proton-decay.py)
checks hand-transcribed exposure and efficiency bookkeeping, background
rounding intervals and the fixed-mean Poisson tail. It preserves censored
entries and the distinction between nominal and summed printed exposure.
It does not reproduce a lifetime bound. Its bounded output is available in
`dictionaries.evidence.protonDecayData`.

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
