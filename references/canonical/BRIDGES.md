# Reviewed bridges

Bridges join evidence islands and display levels that the topic reviews built separately. Each bridge is one
descriptive relation with its own claim: a definition or topic scope that a record uses, a measurement principle
that a preparation's readout relies on, or a model, result or evaluation boundary that a finding is read with.
The claim cites the passage actually read; a measurement bridge also cites its preparation's own reviewed passage.
Passages of existing sources that were read only for a bridge are appended to that source's reviewed passages;
the owning ledger's preparations keep the passages they were built from.

Bridges never establish arising, causation, necessity, a construction order between levels, a carrier minimum
or a weight, and they do not pool preparations. Levels remain display groups. The exact records live in
[bridges.mjs](../../models/causal-emergence/canonical/bridges.mjs) and
[bridge-records.mjs](../../models/causal-emergence/canonical/bridge-records.mjs); other ledgers reject any
further cross-domain relation. Admission rules are described in the
[source policy](../../docs/architecture/SOURCE_POLICY.md).

## Connectivity

| Quantity | Without bridges | With bridges |
|---|---:|---:|
| Weakly connected components | 119 | 2 |
| Largest component (records) | 504 | 2531 |
| Isolated records | 15 | 0 |
| Relations between different levels | 34 | 109 |

| Level pair | Relations without bridges | With bridges |
|---|---:|---:|
| L0–L1 | 0 | 15 |
| L1–L2 | 23 | 31 |
| L1–L3 | 0 | 1 |
| L2–L3 | 0 | 19 |
| L3–L4 | 4 | 12 |
| L3–L5 | 0 | 3 |
| L4–L5 | 4 | 14 |
| L5–L6 | 1 | 9 |
| L6–L7 | 2 | 5 |

The 194 bridges by level pair and role:

| Levels | definition-dependency | measurement-context | interpretation-dependency |
|---|---:|---:|---:|
| L0–L1 | 8 | 0 | 7 |
| L0 | 5 | 0 | 0 |
| L1–L2 | 5 | 0 | 3 |
| L1–L3 | 0 | 1 | 0 |
| L1 | 11 | 1 | 7 |
| L2–L3 | 8 | 3 | 8 |
| L2 | 13 | 0 | 5 |
| L3–L4 | 4 | 2 | 2 |
| L3–L5 | 0 | 3 | 0 |
| L3 | 23 | 3 | 7 |
| L4–L5 | 7 | 2 | 1 |
| L4 | 8 | 0 | 3 |
| L5–L6 | 5 | 0 | 3 |
| L5 | 5 | 2 | 3 |
| L6–L7 | 1 | 0 | 2 |
| L6 | 7 | 1 | 10 |
| L7 | 5 | 0 | 0 |

## Level 0

Level-0 bridges keep four kinds apart. Internal definitions follow the manuscript's own dependencies. Evaluations
link a Level-0 hypothesis to the physical record that assesses it. A formal identity holds for a declared
equation only. An author correspondence records the manuscript's proposed reading of a physical notion; it points
from the physical record to the Level-0 construct because the reading belongs to the construct, and it is not a
derivation of physics from Level 0.

| Kind | Premise | Dependent |
|---|---|---|
| Level-0 definition | Admissibility context Ω | Compensation relation |
| Level-0 definition | Compensation relation | Oscillatory mode class |
| Level-0 definition | Compensation relation | Assumed hyperbolic analytic frame |
| Level-0 definition | Compensation relation | Discrete scale hypothesis |
| Level-0 definition | Oscillatory mode class | Discrete scale hypothesis |
| Evaluation | Anisotropy hypothesis | Field anisotropy interpretation boundary |
| Evaluation | Directional gradient hypothesis | Field anisotropy interpretation boundary |
| Evaluation | Directional gradient hypothesis | Photon polarization state and response boundary |
| Evaluation | Transport bias hypothesis | Directional excitation interpretation boundary |
| Evaluation | Anisotropy hypothesis | Isotropic free scalar dispersion |
| Evaluation | Carrier promotion contract | Quantum field theory framework |
| Evaluation | Free real scalar field quantization | Discrete scale hypothesis |
| Formal identity | Free scalar Hamiltonian time evolution | Dispersion parameter m² |
| Author correspondence | Free scalar Hamiltonian time evolution | Sequential distinction |
| Author correspondence | Free scalar envelope propagation | Spatial distinction |
| Author correspondence | Free scalar Hamiltonian time evolution | Compensation relation |
| Author correspondence | Free real scalar field quantization | Dispersion parameter m² |
| Author correspondence | Free real scalar field quantization | CRT carrier class — no admitted instance |
| Author correspondence | Free real scalar field quantization | Quadratic action family |
| Author correspondence | Quantum field theory framework | Promoted carrier class |

## Records still separate

1 component remains outside the largest one. A component is joined only when a read passage
supports a dependency; otherwise it stays separate with the reason recorded during review.

| Records | Example | Reason |
|---:|---|---|
| 6 | Glutathione-coupled optical redox reporter convention | Grx1-roGFP2 reporter. The ratiometric excitation readout relies on chromophore protonation photophysics, for which no L1/L2 record exists; conjugation terminology does not define this readout. Gutscher 2008 not re-read. |

## Rejected candidates

109 candidate bridges were checked and not admitted. Typical reasons: the passage treats only
shared vocabulary or an analogy, the record explicitly denies the dependency, the direction runs the other way,
or the source could not be read.

| Premise | Dependent | Reason |
|---|---|---|
| Perturbation test candidate | Anisotropy hypothesis | Perturbative persistence (pp. 21-22) is part of the objecthood test under small admissible deformation; the manuscript defines no anisotropic deformation or directional branch (D-deformation, F12). |
| Assumed hyperbolic analytic frame | Anisotropy hypothesis | The 'ordered asymmetry of directions' (p. 6) concerns the two primitive directions in the signature argument; the anisotropy record explicitly forbids inferring the directional branch from the time/space signature. |
| Quadratic action family | Transport bias hypothesis | Pp. 9-10 and 12 exclude first-order drift terms from the minimal operator; this exclusion is not a definition of a transport-bias effect. Used instead as a limits citation of the transport-bias evaluation bridge. |
| Selection among eligible candidates | Directional gradient hypothesis | The selection functional F[psi] (p. 34) has open chi metrics and coefficients and no gradient or directional derivative, and the action S[psi], also called an admissibility functional (p. 11), is used only for stationarity; the gradient hypothesis is not defin |
| Directional gradient hypothesis | Isotropic free scalar dispersion | Redundant: the isotropy record only disclaims supplying a Level-0 admissibility-gradient mechanism; the substantive evaluation is recorded by the bridges to phys:field-anisotropy-boundary and phys:photon-polarization-scope. |
| Carrier promotion contract | Free scalar Hamiltonian time evolution | Redundant with the carrier-promotion evaluation against phys:quantum-field-framework; the record's 'no Level-0-to-quantum-field derivation' sentence is a disclaimer of the same boundary (likewise phys:gauge-sector-interpretation-boundary, 'No Level-0 construct |
| Free scalar Hamiltonian time evolution | Quadratic action family | No formal identity as written: with eta = diag(-1,+1) and -1/2 m2 psi*psi the action's Euler-Lagrange equation is the Klein-Gordon form with m2 replaced by -m2 (F01, F02). The identity is recorded only for the declared case convention on l0:closure-parameter;  |
| Free electromagnetic photon field | Assumed hyperbolic analytic frame | The author explicitly does not identify the pseudo-Euclidean class with physical spacetime (p. 5: 'not yet assumed as a physical spacetime background'; p. 8: 'does not yet claim the full empirical geometry of physical spacetime'), and no L1 record defines the  |
| Vacuum of a specified free field | Admissibility context Ω | The author explicitly denies the correspondence: 'Omega is neither a physical vacuum nor a material substrate' (p. 3). |
| Free real scalar field quantization | Oscillatory mode class | The author denies a physical-wave or field-mode reading at this stage (p. 5: 'does not yet represent a physical wave in the standard sense'; p. 19: the modes 'do not yet constitute particles or fully formed fields'). The mathematical form is captured by the fo |
| Free real scalar field quantization | Integrated density Γ | The author denies the correspondence: Gamma 'measures neither matter density nor probability in the later physical sense' (p. 19). |
| Free real scalar field quantization | Promoted carrier class | The author denies a particle or field-excitation reading of the ensemble-quantum (p. 33); the accepted correspondence is with quantum-field organization at Level 1 (phys:quantum-field-framework). |
| Nucleon Fock-sector representation | Triad candidate configuration class | The bound-state analogy (p. 24) is stated to be 'structural rather than identificatory', and the three-body analogy (p. 20) refers to the author's own complexity classification; no L1 record defines a generic quantum-field bound state, and the specific bound-s |
| Nucleon Fock-sector representation | Ensemble carrier class | No composite-system correspondence is stated for the ensemble; the author writes that the meta-Lagrangian 'does not yet constitute a fundamental many-body field theory' (p. 30). |
| Ground-state observable variance | Discrete scale hypothesis | An identification of the Level-0 hbar with Planck's constant is disclaimed by the author: hbar is 'neither assigned a numerical value nor treated as an already established fundamental constant' (p. 13). The relation of E = hbar omega, p = hbar k to field quant |
| Weak vector fields and fermion currents | PIENU corrected inclusive pion ratio | PIENU (arXiv:1506.05845v2 pages 1 and 4) interprets R_e/mu as a charged-current e-mu universality test (g_e/g_mu=0.9996+/-0.0012), but the existing corrected-ratio record explicitly states that the universality comparison requires separate theoretical inputs a |
| Weak vector fields and fermion currents | Beam neutron-decay count ratio | Gonzalez (arXiv v2 page 1) names n -> p e- antineutrino and says the lifetime with correlations tests V-A structure, but no C012 record interprets the lifetime through the charged current, and the storage-loss record explicitly excludes CKM, radiative-correcti |
| Nucleon valence quantum numbers | Beam neutron-decay count ratio | The beam method uses the measured proton charge for trapping and counting; no reviewed passage uses quark-number labels to define the lifetime observable. Same reason for the Sachs normalization GE(0)=1, which Bernauer ties to the proton charge in units of e,  |
| Neutron mass from a nuclear mass balance | Exponential ensemble survival | No lifetime analysis reviewed (Gonzalez, Takenaka) uses the deuteron mass-balance relation; there is no definitional or interpretive dependency. |
| Leading electromagnetic quark-parton response | Conditional structure-function scaling | The 1969 preprint (pages 5-6) lists parton models as one of several competing interpretations (with Regge exchange and vector dominance), and the C001 record states it is not a premise of the historical measurement; C072 also excludes free-quark readings. |
| Nucleon Fock-sector representation | Sachs elastic proton form factors | Brodsky et al. (pages 40-41) give form factors as Fock-state overlap sums and Bernauer (page 1) recommends a light-cone interpretation, but the Fock record excludes any magnetic-response computation and the MAMI fit determines no Fock amplitude; the definition |
| Conditional transverse two-body mass | ATLAS selected opposite-flavor transverse mass | ATLAS (printed page 12) defines mT from the dilepton system with its mass m_ll and the missing transverse momentum of two neutrinos; the C001 record is the massless two-body transverse mass whose endpoint property does not transfer to this four-body final stat |
| Bethe approximate radiative-shift model | Schwinger leading electron magnetic anomaly | Schwinger's letter (pages 416-417) compares his level-shift values with Bethe's nonrelativistic estimate, not the magnetic moment, and attributes the mass-renormalization idea to Kramers; the anomaly record does not depend on Bethe's model. |
| QED effective coupling convention | Schwinger leading electron magnetic anomaly | Schwinger absorbs vacuum polarization into the experimental charge, but identifying that charge with the L3 alpha(0) reference would be my own inference; no reviewed passage states the dependency. |
| Quark fields | Lee reported fractional-charge abundance limit | Lee et al. (author v2, full text searched) never mention quarks or confinement; reading the 0.18-0.82 residual window as a free-quark test would be my inference. The C001 quark-current record already treats bulk-matter null searches only as a boundary. |
| Electric-charge residual modulo one | CMS conditional fractional-charge limits | CMS reads charge from low ionization (dE/dx scaling with q^2) and does not use the modulo-one residual; it cites bulk-matter null results only through a review (Perl, Lee and Loomba 2009) that was not read. |
| Proton magnetic-moment unit convention | Neutron/mercury precession-magnitude ratio | See C058: the PSI ratio is a positive frequency magnitude calibrated through the shielded proton in water, and the C058 records disclaim nuclear-magneton or free-proton substitutions. |
| Combined five-campaign neutron lifetime | Historical BBN prediction context | Pitrou 2018 adopts tau_n=879.5+/-0.8 s, a post-2000 average from Serebrov et al. 2017 (Appendix D, Table X). The 2021/2025 UCNtau results (and their 2017-2022 campaign fits) postdate the calculation and are not its input; only the method-level storage and beam |
| Published beam lifetime | Historical BBN prediction context | Whether the Nico 2005 (or Yue 2013) beam value enters the Serebrov post-2000 average was not established: the Serebrov paper and its experiment list were not read. Not admitted as an input bridge. |
| Fermi coupling inferred from muon decay | Specified primordial nuclear reaction network | Pitrou Table X lists G_F=1.1663787e-5 GeV^-2 as a PDG-type input, which is not the MuLan 2011 value 1.1663788(7)e-5 recorded in C001, and the rate normalization is fixed from tau_n instead; only the definitional Fermi-coupling bridge is admitted. |
| Capture photon and nuclear recoil | Bound-body recoil and zero-phonon nuclear transition | Both records apply the same free-body photon-recoil kinematics E^2/(2Mc^2) (Mossbauer lecture page 585; Kessler capture analysis). Neither definition uses the other; this is a shared formula, not a dependency (formal-identity bridges are reserved for the L0 se |
| Calibrated diffraction wavelength | Amorphous Fe-gluconate diffraction and Fe-57 transmission context | The C001 record is Kessler's specific Si(220) gamma-spectrometer relation with pressure correction, not a general diffraction principle; Dubiel's Cu K-alpha 2theta-to-d conversion (and Shechtman's diffraction) is not supported by that record. |
| Specified ground-state atom-pair and ideal-wall dispersion limits | Finite-sphere screened repulsive pair model | Crocker and Grier (page 352) state that for their highly charged spheres the screened Coulomb interaction dominates van der Waals and hydrodynamic contributions, which therefore do not appear in Eq. (1). The colloid model omits rather than uses a dispersion mo |
| Signed electron moment, Bohr normalization and anomaly | Isotope- and state-specific hyperfine frequency parameters | Herd Section III is purely parametric (I, J, F, A, B) and Marion Eq. 4 contains alpha^2, mu/mu_N, m_e/m_p and R_inf without the electron g-factor or Bohr magneton; no read passage uses the C034 normalization for the hyperfine records. |
| Neutron/mercury precession-magnitude ratio | Scoped hyperfine spectral coupling and clock realization | The C058 neutron/199Hg precession-frequency ratio concerns spin precession in a common field, not hyperfine structure; no read passage links it to the C061 records. |
| Specified one-electron hydrogen bound-state model | Isotope- and state-specific hyperfine frequency parameters | The hydrogen model explicitly excludes hyperfine structure, and the C061 obligations state that the Z=1 model does not predict Cs constants; no definitional use was found. |
| Specified one-electron hydrogen bound-state model | Stationary many-electron valence-bond representation | Pauling and Wheland use carbon K/L orbital functions (2s, 2p hybrids) without reference to the one-electron hydrogen solution, and the C001 atomic-structure scope excludes chemical bonding; no dependency is supported. |
| Two-dimensional hard-disk equilibrium model | Gasser post-shear colloidal crystallization context | Gasser interprets PMMA as nearly hard spheres with three-dimensional hard-sphere freezing/melting fractions (0.494/0.545, page 259); the C022 record is a two-dimensional hard-disk model. Shared entropic-ordering idea, no dependency. |
| Perturbative QED amplitude convention | Specified ground-state atom-pair and ideal-wall dispersion limits | Jaffe states that the Casimir-Polder results follow from fourth-order perturbation theory corresponding to Feynman diagrams, but the C001 record is a scattering-amplitude convention; tying an energy-shift result to it would overreach the read passages. |
| Leading nonrelativistic Coulomb potential | Finite rigid-SPC/E water-reorientation model | Plausible (SPC/E point-charge electrostatics with Ewald treatment), but the Laage-Hynes text could not be re-read: the recorded ResearchGate URL returns HTTP 403 and no open copy was found. Not admitted. |
| Evidence-based intra/intermolecular hydrogen-bond classification | Finite rigid-SPC/E water-reorientation model | A link between the IUPAC evidence-based definition and the geometric SPC/E hydrogen-bond assignment could not be checked: publications.iupac.org is behind a Cloudflare challenge (403) and the Laage text is unavailable. Not admitted. |
| Leading nonrelativistic Coulomb potential | Evidence-based intra/intermolecular hydrogen-bond classification | The IUPAC criterion naming electrostatic, charge-transfer and dispersion contributions could not be re-read (Cloudflare/403; no full-text mirror found). Not admitted; the water-dimer model is linked instead through the readable Altun LED passages. |
| Dispersion, material response and measured-observable boundary | Gaissmaier sodium bulk-energy calculation | A possible van der Waals (BEEF-vdW) interpretation link could not be checked: the Wiley full text returned a Cloudflare challenge page. Not admitted. |
| Photon polarization state and response boundary | Potorochin sodium film ARPES preparation | The ARPES photoemission principle (and the Skinner X-ray scattering readout) would need the Potorochin/Skinner texts, which were not readable here, and the C001 photon-evidence scope explicitly excludes photoelectric and Compton evidence, so C001 offers no anc |
| Nuclear synthesis and atomic recombination boundary | Scoped atomic binding and formation evidence | Content-compatible (the scope's obligation addresses the BBN/recombination relation), but redundant with the Seager-context bridges that join the same boundary to its specific recombination model; not added to avoid hub attachment. |
| Protein modification and functional readout boundary | Scoped chromatin-modification and response evidence | Suggested as a lead (C117 to C101), but the boundary's own admitted text excludes it: it states that phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in its scope, and the proteasome source read here contains  |
| Cyclic regeneration and flux boundary | Finite metabolic-compartment source scope | Suggested as a lead (C042 to C053), but re-reading both sources produced only parallel exclusions, not a stated dependency: the cycle source's supplied 17-enzyme network and the cage source's two-enzyme coupled assay share no concept, instrument or reference r |
| External pH and trapped-phosphorylation readout definitions | Light-dependent external-pH response of reconstituted vesicles | The convention-to-user link within the Racker family could not be evidenced: the article is recorded as read through a mirror, and in this session both the publisher full text and the article page returned HTTP 403 while no abstract is indexed in Europe PMC, s |
| Conditional alpha-lytic protease kinetic-metastability inference | Activation Gibbs energy in elementary transition-state theory | The alpha-lytic protease kinetic-stability records convert fitted folding and unfolding rates into a free-energy difference, which would be a genuine use of the activation and equilibrium conventions, but the declared source route returned HTTP 403 in this ses |
| Reaction Gibbs energy and standard equilibrium conventions | Source-fitted CAPN sequential binding and thermodynamics | Genuine but redundant: the calorimetric stepwise constants and free energies do use the declared standard-state equilibrium convention, yet the same records are already bound to their own cooperativity and allostery boundaries by two admitted bridges, and addi |
| Specified fixed electric dipole pair interaction | Prepared noncleavable hammerhead I-III FRET titration | FRET readouts (Penedo, Boots, and the Zhu/Chen membrane FRET contexts in C017) rely on Foerster transition-dipole energy transfer. No L1/L2 record represents Foerster transfer; the L2 record is a fixed static vacuum dipole-pair energy whose obligations exclude |
| Conjugation and criterion-specific aromaticity distinction | Rhodopsin photoisomerization and evidence boundary | Gruhl's 'polyene chain' is not classified as conjugated in any read passage, and the IUPAC 2022 glossary could not be re-read in this session; admitting the bridge would rest on an unread definition and an inferred bond alternation. |
| Scoped many-electron molecular resonance model evidence | Rhodopsin photoisomerization and evidence boundary | The photopigment scope explicitly states that the benzene valence-bond resonance model supplies no retinal spectrum, excited-state path or delocalization mediator. |
| Scoped conjugation and benzene energetic/magnetic criteria | Glutathione-coupled optical redox reporter convention | The roGFP2 ratio readout depends on chromophore protonation photophysics; no L1/L2 principle record covers it and no source connecting conjugation terminology to the readout was read. |
| Scoped colloid pair interactions and evolving crystal-fluid interfaces | Finite Ddx4 condensate scope | Nott 2015 models Ddx4 demixing with Flory-Huggins theory and a screened Coulomb term, not colloidal pair potentials or crystal-fluid interfaces; no read source draws a colloid connection (the screening concept is bridged directly from phys:dilute-electrolyte-s |
| Evidence-based intra/intermolecular hydrogen-bond classification | Ligand-dependent CAPN amide H/D exchange protection | Popovych 2006 interprets amide H/D exchange through conformational fluctuations that permit solvent exchange and does not invoke hydrogen bonds in the read passages. |
| Neutron/mercury precession-magnitude ratio | CAPN ligand-series NMR and exchange context | The CAPN Methods name a 600 MHz spectrometer and HSQC intensity decay in D2O but state no precession or isotope-detection principle; only the BPTI relaxation-dispersion readout makes the frequency axis explicit, so one L1 precession bridge was admitted (C070). |
| Isotope- and state-specific hyperfine frequency parameters | Supercooled BPTI water-relaxation context | Atomic hyperfine A/B constants of a declared electronic state are not the molecular quadrupole-coupling relaxation mechanism of water 2H/17O; no source links them. |
| Calibrated diffraction wavelength | HEWL-D1.3 crystallographic context | The L1 record is a GAMS4-specific calibrated gamma-ray wavelength definition (Si d220 with pressure correction), not a general crystallographic diffraction principle, and Amit 1986 does not state the diffraction principle behind its 2.8 angstrom data. |
| Specified spatial order, symmetry and finite-size boundary | HEWL-D1.3 crystallographic context | The HEWL-D1.3 crystal is indexed as monoclinic P21, a periodic-lattice description, but the L2 boundary is framed by quasicrystal and hard-disk evidence and no read passage connects protein-crystal indexing to it; not admitted without a crystallographic-princi |
| Computed water acceptor exchange and orientational reconfiguration | Conditional heterogeneous BPTI hydration dynamics | Modig 2004 predates and does not use the jump model, the Laage-Hynes source was not retrievable, and the protein-hydration scope forbids importing liquid-organization evidence; only the shared observable distinction is admitted (bridge:liquid-correlation-bound |
| Scoped ion preparation and electrolyte interaction evidence | Finite protein hydration and ionic-microenvironment source scope | The BPTI MRD acquisition contains no ion distribution or ionic-shell measurement and the L3 scope explicitly excludes an ionic microenvironment. |
| Equilibrium dilute-electrolyte screened-potential model | Loop-dependent hammerhead global FRET transitions | Penedo's introduction mentions metal ions neutralizing backbone charge in general, but no screened-potential model is applied to the sodium transitions; the ion-atmosphere dependency is admitted for the Boots high-salt arm via Draper 2004 instead. |
| Equilibrium dilute-electrolyte screened-potential model | Condition-dependent lymphotactin spectra and alternative fold inference | Tuinstra's statement that increasing ionic strength would diminish the Lys25-Glu31 salt-bridge stabilization is qualitative and invokes no screened-potential model. |
| Evidence-based intra/intermolecular hydrogen-bond classification | Finite heat separation of DNA isotope subunits | Base-pairing/hydrogen-bond use in Meselson-Stahl 1958 could not be verified because the scanned text was not retrievable in this session. |
| Decay-channel population model versus beam loss | Supplied-polyU cell-free phenylalanine incorporation | The L2 model is the stored-ion EC/beta+/beam-loss fit, not a general radioactive-counting principle, and the radiolabel readouts in L3 sources state no counting principle. |
| Phase stability, criticality, kinetics and observable boundary | Conditional alpha-lytic protease kinetic-metastability inference | Kinetic versus thermodynamic stability of a protein two-state equilibrium is only analogous to phase stability; no source draws the connection. |
| Molecular orientation, alignment and dielectric boundary | KSI-bound phenolate environment-sensitive spectrum | Kraut's water/THF comparison is a qualitative polarity contrast and the L3 record states that the 19F shift is not a measured dielectric constant. |
| Bulk absorption coefficient | Prepared pKSI variants and 5(10)-EST initial-rate assay | The KSI 248 nm extinction coefficient is in the unread SI; the absorbance principle is admitted once (Zhao A260, C053) rather than duplicated across absorbance assays (Prywes epsilon260, Mansy UV, Zhao 410 nm). |
| bio:replication-transcription-source-scope / bio:translation-source-scope (C038) | cell:gene-expression-architecture-response (C063) / cell:laberge2015-sasp-translation-response (C005) | The lead is plausible on content: the engineered reporter readout is explicitly transcription plus translation and the senescence record measures IL1A translational efficiency. It is not admitted because the three C038 sources (meselson1958, chamberlin1962, ni |
| bio:racker-coupling-interpretation / bio:racker-proton-response (C076) | cell:voltage-motility-coupling / cell:voltage-not-entire-gradient (C029) | A real dependency looks likely: the bacterial-voltage record separates membrane voltage from pH and reads motor slowdown as reduced proton-motive drive, which uses the chemiosmotic coupling account that the reconstituted purple-membrane vesicles support. Not a |
| bio:cetch-finite-cyclic-operation / bio:metabolic-cycle-source-scope (C042) | cell:endosymbiotic-integration (C049) / cell:cellular-metabolism (C029) | Rejected on content, not access. The CETCH records describe a designed in-vitro enzyme network supplied with cofactors; the chromatophore records infer retained photosynthetic function from genome annotation, and the cellular-energy records are bacterial repor |
| bio:epigenetic-regulation-source-scope (C101) / bio:chromatin-packaging-source-scope (C102) | cell:gene-expression-regulation (C063), cell:eukaryotic-compartmentalization (C016), cell:garciaprat2016-geriatric-redox-response (C005) | No admitted L4 record is defined with chromatin accessibility or locus methylation: the C063 record explicitly excludes chromatin-mediated control from its engineered-circuit evidence, and C016 concerns membrane compartments and pores. The closest genuine cont |
| cell:prokaryotic-organization / cell:minimal-cell-gene-composition (C055) | cell:endosymbiotic-integration (C049) / cell:eukaryotic-compartmentalization (C016) | The suggested L4-internal pairing was checked and rejected. Reduced-genome dependence on rich medium and chromatophore dependence on a host are parallel observations in unrelated organisms, with neither record defined with or interpreted through the other; the |
| bio:selective-proteasome-degradation-source-scope (C040) / bio:protein-folding-source-scope (C036) | cell:autophagy-turnover-scope (C005) | Searched for a cellular proteostasis target and found none that uses these records. The autophagy scope is built from initiation, lysosomal-flux and selective mitochondrial-turnover preparations and its own boundary states that chaperone participation is not a |
| Trophic Regulation of Cellular Metabolism: reviewed scope | Inflammation–Metabolic Dysregulation Feedback Loop: reviewed scope | No passage supports a dependency between the two scopes. The trophic-metabolic sources (Cantor 2017 human-plasma-like medium, Muir 2017 cystine/glutamine) and the immune-metabolic sources (Cani 2007, Camell 2017, Wang 2016, Everett 2018) share no cited result, |
| Scoped NLRP3 assembly and IL-1beta output | Conditional inflammasome-associated cytokine output | Rejected in favour of the scope-level definitional bridge: the potassium-efflux result is specific to NLRP3 in LPS-primed mouse macrophages, whereas the metabolite experiment implicates NLRC4 in a human cell line and uses ATP only as a comparison stimulus. Ass |
| rivlin2012-on-blockade: bounded result | Mouse transient OFF alpha measured output | Both use ON-pathway blockade (L-AP4/APB) in mouse retina, but Jin 2022 neither cites nor uses the Rivlin-Etzion direction-reversal result, and the readouts (direction-selective classes versus transient OFF alpha peak firing) are different. The shared pharmacol |
| Dark-adapted single-rod current and incremental background response | murphy2006-light-response: bounded result | A rod calcium-feedback dependency for the mouse flicker-timing record was looked for and not found in the read passages: the Murphy 2006 locators admitted in the graph concern spike timing, synaptic conductances and network variability, and no GCAP or cyclase- |
| org:infl-lps-tolerance-survival-output (C003) | neur:dbh-endotoxin-survival / cog:neuroimmune-interactions-scope (C014) | Both use high-dose LPS endotoxaemia, but no read passage treats them together: Jin 2024 cites a JoVE LPS protocol (ref. 48), not Wang 2016, and Wang 2016 discusses neuronal dysfunction in endotoxaemia without vagal, nodose or cNST circuits. Shared assay vocabu |
| C003 inflammation scopes (chronic inflammation, immune set point) | C014 neuroimmune records | Jin 2024 Discussion links pro-inflammatory states to diabetes and neurodegeneration via general citations (ref. 54 Donath & Shoelson), not via any C003 record (e.g. the CANTOS diabetes companion record). |
| org:warmth-neural-response (C091) | C027 sleep/neuromodulation or C014 neuroimmune records | Tan 2016 mentions sleep, circadian and immune status only as other homeostatic influences on body temperature and that the POA contains sleep-related cell types; no passage treats an LC/Hcrt sleep record or a neuroimmune record. |
| C011/C019 retinal and ocular L5 records | C071 V1 feature-map records | Reid & Alonso's abstract concerns concentric thalamic (LGN) receptive fields, and Hubel & Wiesel's retinal-position mosaic is a cortical map; neither treats the retinal sampling, ocular optics or ganglion-spiking records. C011 is joined to C071 through the Usr |
| cog:brain-rhythms-scope / neur:gamma-response (C067) | neur:culture-avalanches / neur:synchrony-criticality (C057) | Beggs & Plenz define avalanches as a mode differing from oscillatory, synchronized or wave-like states and check correlograms for periodicity, but they treat oscillation generically, not the fast-spiking induced-gamma records; judged too generic for a record-l |
| neur:rhythm-coding (C067) | C024 working-memory or C027 sleep records | Wang 2010 (read in PMC2923921) discusses gamma during working-memory delays and sleep slow oscillations only as broad review statements about other studies, not the Miller 1996, Rose 2016 or Hcrt/LC records; not used to avoid a review hub. |
| cog:placebo-context-pathways (C015) | cog:affective-processing-scope (C056) | Wager & Atlas 2015 list affective/motivational states and amygdala responses to placebo anxiolytics (Petrovic 2005, not in the graph); this is vocabulary-level overlap with the mouse BLA-CeA exploration records. |
| C015 placebo analgesia records | C020 empathy-for-pain records | No read source treats both; a study combining placebo analgesia with empathy for pain (e.g. Ruetgen et al. 2015) was not read in this session and was not added. |
| neur:kir4-potassium-current (C006) | C008 capillary potassium records | Longden 2017 discusses astrocytic K+ release through endfoot BK channels (Filosa 2006; Girouard 2010), not Kir4.1-dependent uptake measured by Djukic 2007; the Djukic full text was blocked (reCAPTCHA) and not re-read. |
| C007 ECS dentate accessibility records (Su 2017) | C002 adult neurogenesis records | Su 2017 (read in PMC5325677) mentions neuronal plasticity, learning and memory generally but not adult neurogenesis or the C002 records. |
| C044 V1 ensemble records (Carrillo-Reid 2019) | C071 orientation-selectivity records | Carrillo-Reid 2019 does not discuss orientation selectivity or Ohki 2005; both concern mouse/rat V1 but share only vocabulary. |
| cog:neuromodulatory-state-scope / neur:global-modulation (C027) | cog:decision-making-scope (C039) | Aston-Jones & Cohen 2005 (abstract only) relate phasic LC activity to task-related decision outcomes in general, not to the LIP motion-decision records; not needed for coverage and left out. |
| miller2001 (shared by C024 and C039) | C039 decision records | The Miller & Cohen 2001 PDF at the recorded URL is an image scan without a text layer, so the relevant passages could not be re-read here. |
| neur:dentate-potentiation (C031) | C002 dentate neurogenesis records | Perforant path/dentate granule cells are shared anatomy only; the Aimone 2014 page was blocked and van Praag 2002 was not found to discuss perforant-path LTP alongside its new-neuron recordings. |
| neur:presynaptic-differentiation (C030) | C002 synapse-formation records (Toni 2008) | Scheiffele 2000 (abstract) speaks of formation and remodeling of CNS synapses generally; no passage treats adult-born-neuron synapses. |
| Symbols in a compositional system | Bounded success and failure of convention replacement | Dehaene et al. 2022 (glossary, pp. 2-4) define a sign as an often arbitrary and conventional signifier-signified pairing and a symbol as a signifier entering syntactic relations; the C009 record states that recognizing an arbitrary sign alone does not establis |
| Neural Mechanisms of Symbolic Representation: reviewed scope | Filtered training and structured transmission | Kirby's systematic signal-meaning structure and Dehaene's mental-program composition are different constructs (external transmitted language versus internal symbolic code); no read passage treats both, and the C009 definition is explicitly limited to the autho |
| Cognitive Processing and Decision Making: reviewed scope | Dynamics of Economic Markets: reviewed scope | C039 records are macaque LIP/MT perceptual-choice perturbations; Smith 1962 (Sections II, VI) and Hayek 1945 (Sections I-III, VI) discuss traders' bids and dispersed knowledge without neural decision mechanisms, and no C039 source read treats market coordinati |
| Emotional and Affective Processing: reviewed scope | Ordered exclusion task and BOLD/distress associations | Tye 2011 BLA-CeA anxiety-exploration assays and Eisenberger's exclusion distress share only the word distress/affect; Eisenberger's cited affective-pain and regulation studies (Rainville 1997, Petrovic 2002) are not graph records and no read passage treats the |
| Placebo Responses and Psychosomatic Modulation: reviewed scope | Ordered exclusion task and BOLD/distress associations | Eisenberger relates RVPFC to a placebo-pain study, but its cited placebo references (Petrovic 2002; an unidentified ref. 16 in Europe PMC metadata) are not C015 sources; no C015 source read treats social records. |
| Shared self and partner-pain BOLD locations | Punishment benefit varies across sampled groups | Searched Singer 2004, Decety 2004, Tan 2024 and Herrmann's existing readings: none treats empathy/mirror/partner-pain records together with public-goods punishment. Candidate primary studies combining the partner-pain paradigm with fairness or group membership |
| Shared manifold hypothesis | Social Identity and Group Belonging: reviewed scope | Gallese 2003 pp. 517-518 and 524-525 use a broad multi-level 'social identity'/identity-relation notion (from shared body format to shared culture and party voting) and propose identity relations as necessary for belonging; linking it to the L7 scope would enc |
| Developmental profile of the maternal-care CpG contrast | Social Organization of Animals: reviewed scope | Rat maternal licking/grooming enters only as an environmental classification for offspring GR-promoter readouts; no read passage treats it as group social organization with the C013 preparations. Carter 2013's 'maternal' food-sharing classification concerns va |
| Social Roles and Stratification: reviewed scope | Historically specified asymmetric decision and enforcement design | Chase 2002 dominance hierarchies and Henrich and Gil-White's prestige abstract do not treat constitutive offices or institutional authority; the roles scope mentions human authority only as an exclusion. No supporting passage. |
| Political and Governance Structures: reviewed scope | Collective Decision-Making: reviewed scope | Couzin 2011 (p. 1578) contrasts animal consensus with the absence of 'established procedures such as voting', but this introductory contrast cites social-choice theory, not the Charter's procedures, and would make a constitutive document an interpretive premis |
| Dispersed knowledge as an economic-coordination argument | Cultural and Linguistic Evolutionary Change: reviewed scope | Hayek Section VI likens the price system to language and cultural inheritance as formations used without full understanding; this is an attributed analogy, not a definition or interpretation dependency of the reviewed language/migrant scope. Hayek is also not  |
| Partner-specific sharing predictors | Dynamics of Economic Markets: reviewed scope | Carter 2013 cites Noë and Hammerstein's 'biological markets' partner-choice theory; a supply-demand analogy for partner choice is not a dependency on Smith's classroom auctions or Hayek's argument. |
| Numerical-estimate information conditions | Dispersed knowledge as an economic-coordination argument | Lorenz 2011 compares its feedback to a previous stock price known to traders and mentions stock markets as wisdom-of-crowd examples; analogy only, no treatment of Smith or Hayek. |
| Source-reported aggregate urban scaling | Superorganism Behavior in Insect Colonies: reviewed scope | Bettencourt 2007's 'Scaling and Biological Metaphors for the City' compares cities with organisms' metabolism and size; it does not mention social insects or colonies. |
| Social relations, dominance and prestige: interpretation boundaries | Cultural Transmission, Recombination, and Idea Propagation: reviewed scope | Henrich and Gil-White's abstract (abstract-only reading) ties prestige to cultural transmission as an evolutionary 'emergent product' hypothesis; admitting it would encode an arising/causal claim. Aplin 2015 already supplies the primary-data C013-C007 transmis |

## Open obligations

- Obtain independent scientific review of every bridge reading; agreement of vocabulary across domains is not evidence of a shared mechanism.
- Replace a bridge whose cited passage is superseded or contradicted; a bridge records a stated dependency, not a tested construction.
- Keep unresolved Level-0 correspondences open until the manuscript specifies the missing maps, observables and tests; no derivation of physics from Level 0 is admitted.
