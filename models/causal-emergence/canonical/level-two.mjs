import assert from "node:assert/strict";
import { OPTICAL_PROPAGATION_ADMISSION, OPTICAL_PROPAGATION_CHECKS, OPTICAL_PROPAGATION_ANALYTICAL_SOURCES, OPTICAL_PROPAGATION_STUDY_TYPES, validateOpticalPropagationContracts } from "./optical-propagation.mjs";
import { SURFACE_SCATTERING_ADMISSION, SURFACE_SCATTERING_CHECKS, SURFACE_SCATTERING_ANALYTICAL_SOURCES, SURFACE_SCATTERING_STUDY_TYPES, validateSurfaceScatteringContracts } from "./surface-scattering.mjs";
import { HYPERFINE_ADMISSION, HYPERFINE_CHECKS, HYPERFINE_ANALYTICAL_SOURCES, HYPERFINE_STUDY_TYPES, validateHyperfineContracts } from "./hyperfine.mjs";
import { CASIMIR_SCOPE_ADMISSION, CASIMIR_SCOPE_CHECKS, CASIMIR_SCOPE_ANALYTICAL_SOURCES, CASIMIR_SCOPE_STUDY_TYPES, validateCasimirScopeContracts } from "./casimir-scope.mjs";
import { ELECTRONIC_DECAY_ADMISSION, ELECTRONIC_DECAY_CHECKS, ELECTRONIC_DECAY_ANALYTICAL_SOURCES, ELECTRONIC_DECAY_STUDY_TYPES, validateElectronicDecayContracts } from "./electronic-decay.mjs";
import { MOSSBAUER_ADMISSION, MOSSBAUER_CHECKS, MOSSBAUER_ANALYTICAL_SOURCES, MOSSBAUER_STUDY_TYPES, validateMossbauerContracts } from "./mossbauer.mjs";
import { PIEZOELECTRIC_FERROELECTRIC_ADMISSION, PIEZOELECTRIC_FERROELECTRIC_CHECKS, PIEZOELECTRIC_FERROELECTRIC_ANALYTICAL_SOURCES, PIEZOELECTRIC_FERROELECTRIC_STUDY_TYPES, validatePiezoelectricFerroelectricContracts } from "./piezoelectric-ferroelectric.mjs";
import { PHASE_REGIME_ADMISSION, PHASE_REGIME_CHECKS, PHASE_REGIME_ANALYTICAL_SOURCES, PHASE_REGIME_STUDY_TYPES, validatePhaseRegimeContracts } from "./phase-regime.mjs";
import { METALLIC_BONDING_ADMISSION, METALLIC_BONDING_CHECKS, METALLIC_BONDING_ANALYTICAL_SOURCES, METALLIC_BONDING_STUDY_TYPES, validateMetallicBondingContracts } from "./metallic-bonding.mjs";
import { COLLOID_INTERFACE_ADMISSION, COLLOID_INTERFACE_CHECKS, COLLOID_INTERFACE_ANALYTICAL_SOURCES, COLLOID_INTERFACE_STUDY_TYPES, validateColloidInterfaceContracts } from "./colloid-interface.mjs";
import { LIQUID_ORGANIZATION_ADMISSION, LIQUID_ORGANIZATION_CHECKS, LIQUID_ORGANIZATION_ANALYTICAL_SOURCES, LIQUID_ORGANIZATION_STUDY_TYPES, validateLiquidOrganizationContracts } from "./liquid-organization.mjs";
import { QUANTUM_REACTION_ADMISSION, QUANTUM_REACTION_CHECKS, QUANTUM_REACTION_ANALYTICAL_SOURCES, QUANTUM_REACTION_STUDY_TYPES, validateQuantumReactionContracts } from "./quantum-reaction.mjs";
import { AROMATIC_CONJUGATION_ADMISSION, AROMATIC_CONJUGATION_CHECKS, AROMATIC_CONJUGATION_ANALYTICAL_SOURCES, AROMATIC_CONJUGATION_STUDY_TYPES, validateAromaticConjugationContracts } from "./aromatic-conjugation.mjs";
import { CRYSTAL_ORDER_ADMISSION, CRYSTAL_ORDER_CHECKS, CRYSTAL_ORDER_ANALYTICAL_SOURCES, CRYSTAL_ORDER_STUDY_TYPES, validateCrystalOrderContracts } from "./crystal-order.mjs";
import { MOLECULAR_POLARIZATION_ADMISSION, MOLECULAR_POLARIZATION_CHECKS, MOLECULAR_POLARIZATION_ANALYTICAL_SOURCES, MOLECULAR_POLARIZATION_STUDY_TYPES, validateMolecularPolarizationContracts } from "./molecular-polarization.mjs";
import { HYDROGEN_BOND_ADMISSION, HYDROGEN_BOND_CHECKS, HYDROGEN_BOND_ANALYTICAL_SOURCES, HYDROGEN_BOND_STUDY_TYPES, validateHydrogenBondContracts } from "./hydrogen-bond.mjs";
import { DISPERSION_ADMISSION, DISPERSION_CHECKS, DISPERSION_ANALYTICAL_SOURCES, DISPERSION_STUDY_TYPES, validateDispersionContracts } from "./dispersion.mjs";
import { MOLECULAR_RESONANCE_ADMISSION, MOLECULAR_RESONANCE_CHECKS, MOLECULAR_RESONANCE_ANALYTICAL_SOURCES, MOLECULAR_RESONANCE_STUDY_TYPES, validateMolecularResonanceContracts } from "./molecular-resonance.mjs";
import { IONIC_INTERACTIONS_ADMISSION, IONIC_INTERACTIONS_CHECKS, IONIC_INTERACTIONS_ANALYTICAL_SOURCES, IONIC_INTERACTIONS_STUDY_TYPES, validateIonicInteractionsContracts } from "./ionic-interactions.mjs";
import { MOLECULAR_BINDING_ADMISSION, MOLECULAR_BINDING_CHECKS, MOLECULAR_BINDING_ANALYTICAL_SOURCES, MOLECULAR_BINDING_STUDY_TYPES, validateMolecularBindingContracts } from "./molecular-binding.mjs";
import { ATOMIC_STRUCTURE_ADMISSION, ATOMIC_STRUCTURE_CHECKS, ATOMIC_STRUCTURE_ANALYTICAL_SOURCES, ATOMIC_STRUCTURE_STUDY_TYPES, validateAtomicStructureContracts } from "./atomic-structure.mjs";
import { EM_REGIME_ADMISSION, EM_REGIME_CHECKS, EM_REGIME_ANALYTICAL_SOURCES, EM_REGIME_STUDY_TYPES, validateEmRegimeContracts } from "./em-regime.mjs";
import {
  BBN_ADMISSION, BBN_CHECKS, BBN_ANALYTICAL_SOURCES, BBN_STUDY_TYPES, validateBbnContracts
} from "./bbn.mjs";

const admissions = [BBN_ADMISSION, EM_REGIME_ADMISSION, ATOMIC_STRUCTURE_ADMISSION, MOLECULAR_BINDING_ADMISSION, IONIC_INTERACTIONS_ADMISSION, MOLECULAR_RESONANCE_ADMISSION, DISPERSION_ADMISSION, HYDROGEN_BOND_ADMISSION, MOLECULAR_POLARIZATION_ADMISSION, CRYSTAL_ORDER_ADMISSION, AROMATIC_CONJUGATION_ADMISSION, QUANTUM_REACTION_ADMISSION, LIQUID_ORGANIZATION_ADMISSION, COLLOID_INTERFACE_ADMISSION, METALLIC_BONDING_ADMISSION, PHASE_REGIME_ADMISSION, PIEZOELECTRIC_FERROELECTRIC_ADMISSION, MOSSBAUER_ADMISSION, ELECTRONIC_DECAY_ADMISSION, CASIMIR_SCOPE_ADMISSION, HYPERFINE_ADMISSION, SURFACE_SCATTERING_ADMISSION, OPTICAL_PROPAGATION_ADMISSION];
const fields = ["definitions", "formalDependencies", "contexts", "observations",
  "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"];

export const LEVEL_TWO_ADMISSION = Object.fromEntries(fields.map((field) =>
  [field, admissions.flatMap((admission) => admission[field])]));
export const LEVEL_TWO_STUDY_TYPES = new Map([...BBN_STUDY_TYPES, ...EM_REGIME_STUDY_TYPES, ...ATOMIC_STRUCTURE_STUDY_TYPES, ...MOLECULAR_BINDING_STUDY_TYPES, ...IONIC_INTERACTIONS_STUDY_TYPES, ...MOLECULAR_RESONANCE_STUDY_TYPES, ...DISPERSION_STUDY_TYPES, ...HYDROGEN_BOND_STUDY_TYPES, ...MOLECULAR_POLARIZATION_STUDY_TYPES, ...CRYSTAL_ORDER_STUDY_TYPES, ...AROMATIC_CONJUGATION_STUDY_TYPES, ...QUANTUM_REACTION_STUDY_TYPES, ...LIQUID_ORGANIZATION_STUDY_TYPES, ...COLLOID_INTERFACE_STUDY_TYPES, ...METALLIC_BONDING_STUDY_TYPES, ...PHASE_REGIME_STUDY_TYPES, ...PIEZOELECTRIC_FERROELECTRIC_STUDY_TYPES, ...MOSSBAUER_STUDY_TYPES, ...ELECTRONIC_DECAY_STUDY_TYPES, ...CASIMIR_SCOPE_STUDY_TYPES, ...HYPERFINE_STUDY_TYPES, ...SURFACE_SCATTERING_STUDY_TYPES, ...OPTICAL_PROPAGATION_STUDY_TYPES]);
export const LEVEL_TWO_CHECKS = new Map([...BBN_CHECKS, ...EM_REGIME_CHECKS, ...ATOMIC_STRUCTURE_CHECKS, ...MOLECULAR_BINDING_CHECKS, ...IONIC_INTERACTIONS_CHECKS, ...MOLECULAR_RESONANCE_CHECKS, ...DISPERSION_CHECKS, ...HYDROGEN_BOND_CHECKS, ...MOLECULAR_POLARIZATION_CHECKS, ...CRYSTAL_ORDER_CHECKS, ...AROMATIC_CONJUGATION_CHECKS, ...QUANTUM_REACTION_CHECKS, ...LIQUID_ORGANIZATION_CHECKS, ...COLLOID_INTERFACE_CHECKS, ...METALLIC_BONDING_CHECKS, ...PHASE_REGIME_CHECKS, ...PIEZOELECTRIC_FERROELECTRIC_CHECKS, ...MOSSBAUER_CHECKS, ...ELECTRONIC_DECAY_CHECKS, ...CASIMIR_SCOPE_CHECKS, ...HYPERFINE_CHECKS, ...SURFACE_SCATTERING_CHECKS, ...OPTICAL_PROPAGATION_CHECKS]);
export const LEVEL_TWO_ANALYTICAL_SOURCES = new Map([...BBN_ANALYTICAL_SOURCES, ...EM_REGIME_ANALYTICAL_SOURCES, ...ATOMIC_STRUCTURE_ANALYTICAL_SOURCES, ...MOLECULAR_BINDING_ANALYTICAL_SOURCES, ...IONIC_INTERACTIONS_ANALYTICAL_SOURCES, ...MOLECULAR_RESONANCE_ANALYTICAL_SOURCES, ...DISPERSION_ANALYTICAL_SOURCES, ...HYDROGEN_BOND_ANALYTICAL_SOURCES, ...MOLECULAR_POLARIZATION_ANALYTICAL_SOURCES, ...CRYSTAL_ORDER_ANALYTICAL_SOURCES, ...AROMATIC_CONJUGATION_ANALYTICAL_SOURCES, ...QUANTUM_REACTION_ANALYTICAL_SOURCES, ...LIQUID_ORGANIZATION_ANALYTICAL_SOURCES, ...COLLOID_INTERFACE_ANALYTICAL_SOURCES, ...METALLIC_BONDING_ANALYTICAL_SOURCES, ...PHASE_REGIME_ANALYTICAL_SOURCES, ...PIEZOELECTRIC_FERROELECTRIC_ANALYTICAL_SOURCES, ...MOSSBAUER_ANALYTICAL_SOURCES, ...ELECTRONIC_DECAY_ANALYTICAL_SOURCES, ...CASIMIR_SCOPE_ANALYTICAL_SOURCES, ...HYPERFINE_ANALYTICAL_SOURCES, ...SURFACE_SCATTERING_ANALYTICAL_SOURCES, ...OPTICAL_PROPAGATION_ANALYTICAL_SOURCES]);
export const LEVEL_TWO_NODE_IDS = new Set([
  ...LEVEL_TWO_ADMISSION.definitions.map(([id]) => id),
  ...[...LEVEL_TWO_ADMISSION.contexts, ...LEVEL_TWO_ADMISSION.observations]
    .map(([id]) => `phys:${id}`)
]);

// These existing contexts are reused by Level-2 claims, not new acquisitions.
// Preserve their complete preparation, observable and interpretation boundaries.
const reusedPhysicsStudies = [
  {
    "id": "lamb1947",
    "sourceId": "lamb1947",
    "studyType": "primary-experiment",
    "doi": "10.1103/PhysRev.72.241",
    "journal": "Physical Review",
    "volume": "72",
    "issue": "3",
    "pages": "241-243",
    "system": "Microwave spectroscopy of metastable hydrogen",
    "preparation": "Electron-impact preparation of a metastable hydrogen beam; microwave quenching at fixed frequency while magnetic field is varied; electron-ejection detection at a metal target.",
    "observable": "Galvanometer-current change under microwave interruption and resonance fields at several frequencies.",
    "finding": "The Zeeman comparison places 2S1/2 about 1000 MHz above 2P1/2, without a best-fit uncertainty.",
    "limitations": [
      "The plotted 1000 MHz displacement is an approximate comparison and explicitly not a best fit.",
      "Field calibration and inhomogeneity, line broadening and hyperfine structure limit the measurement; the proposed 10 MHz accuracy is future work in this article.",
      "A measured level separation does not isolate a unique radiative contribution or absolute vacuum energy.",
      "Published measurements and fits have not been independently reproduced from acquisition data."
    ],
    "readExtent": "full-primary-article",
    "reviewedLocators": [
      "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
      "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
    ],
    "metadataCheckedAt": "2026-09-14",
    "metadataUrl": "https://doi.org/10.1103/PhysRev.72.241",
    "correctionCheck": "Publisher identity checked against the published scan. Later precision measurements are outside this review; no exhaustive correction search is claimed."
  },
  {
    "id": "rau2020-awg1",
    "sourceId": "rau2020",
    "studyType": "primary-experiment",
    "doi": "10.1038/s41586-020-2628-7",
    "journal": "Nature",
    "volume": "585",
    "issue": "7823",
    "pages": "43-47",
    "system": "Deuteron AWG1 acquisition",
    "preparation": "Pairs 1-2 of the four-pair LIONTRAP deuteron/C6+ campaign use the first excitation generator, alternating ions near 3.8 T and 4.2 K. A separate planar fit extrapolates the squared excitation strengths to zero drive.",
    "observable": "The explicitly scoped frequency ratio, mass constraint, theoretical energy, lattice comparison or grouped-data arithmetic.",
    "finding": "Support is restricted to the stated preparation, assumptions and uncertainty meaning.",
    "limitations": [
      "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
      "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
      "Four deuteron/carbon pairs provide 41 runs. Pairs 1-2 use AWG1 and pairs 3-4 use AWG2, with separate excitation-plane fits; alternate ion measurements and randomized species order do not create independent absolute references.",
      "The shim coils are used in this campaign: B2/B0=+6.5(6.5)e-10/mm^2. The magnetometer trap remains unused. This differs from the proton campaign.",
      "Zero driven excitation is not zero thermal energy. Feedback-cooled PnA motion uses 1.2(0.5) K; the no-feedback dip measurement uses 3.7(0.5) K.",
      "Table 1 reports ratio corrections in ppt: image charge 82.1(4.1), relativity -2.9(1.2), magnetic 0.3(0.6), electrostatic <0.1(0.3), line shape 0(4.7), magnetron 0(0.4), total 79.6(6.5). The stated five-percent image-charge uncertainty is retained.",
      "The AWG replacement followed observed double-dip noise; the heating test did not detect a relevant effect. This is not proof that every generator-dependent systematic vanishes.",
      "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
      "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
    ],
    "readExtent": "full-author-manuscript",
    "reviewedLocators": [
      "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
    ],
    "metadataCheckedAt": "2026-09-23",
    "metadataUrl": "https://doi.org/10.1038/s41586-020-2628-7",
    "correctionCheck": "Publisher metadata and the identified primary text were checked. The accessible source version and missing supplement or raw-data boundaries are explicit. No exhaustive correction-history search or independent scientific validation is claimed."
  },
  {
    "id": "rau2020-awg2",
    "sourceId": "rau2020",
    "studyType": "primary-experiment",
    "doi": "10.1038/s41586-020-2628-7",
    "journal": "Nature",
    "volume": "585",
    "issue": "7823",
    "pages": "43-47",
    "system": "Deuteron AWG2 acquisition",
    "preparation": "Pairs 3-4 use a replacement excitation generator and their own excitation-plane fit, with the same LIONTRAP mass reference and corrected trap. The two generator groups share apparatus and systematic inputs.",
    "observable": "The explicitly scoped frequency ratio, mass constraint, theoretical energy, lattice comparison or grouped-data arithmetic.",
    "finding": "Support is restricted to the stated preparation, assumptions and uncertainty meaning.",
    "limitations": [
      "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
      "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
      "Four deuteron/carbon pairs provide 41 runs. Pairs 1-2 use AWG1 and pairs 3-4 use AWG2, with separate excitation-plane fits; alternate ion measurements and randomized species order do not create independent absolute references.",
      "The shim coils are used in this campaign: B2/B0=+6.5(6.5)e-10/mm^2. The magnetometer trap remains unused. This differs from the proton campaign.",
      "Zero driven excitation is not zero thermal energy. Feedback-cooled PnA motion uses 1.2(0.5) K; the no-feedback dip measurement uses 3.7(0.5) K.",
      "Table 1 reports ratio corrections in ppt: image charge 82.1(4.1), relativity -2.9(1.2), magnetic 0.3(0.6), electrostatic <0.1(0.3), line shape 0(4.7), magnetron 0(0.4), total 79.6(6.5). The stated five-percent image-charge uncertainty is retained.",
      "The AWG replacement followed observed double-dip noise; the heating test did not detect a relevant effect. This is not proof that every generator-dependent systematic vanishes.",
      "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
      "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
    ],
    "readExtent": "full-author-manuscript",
    "reviewedLocators": [
      "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
    ],
    "metadataCheckedAt": "2026-09-23",
    "metadataUrl": "https://doi.org/10.1038/s41586-020-2628-7",
    "correctionCheck": "Publisher metadata and the identified primary text were checked. The accessible source version and missing supplement or raw-data boundaries are explicit. No exhaustive correction-history search or independent scientific validation is claimed."
  },
  {
    "id": "rau2020-hd",
    "sourceId": "rau2020",
    "studyType": "primary-experiment",
    "doi": "10.1038/s41586-020-2628-7",
    "journal": "Nature",
    "volume": "585",
    "issue": "7823",
    "pages": "43-47",
    "system": "HD+ carbon comparison",
    "preparation": "One HD+/C4+ pair is compared for seven weeks with changed trap voltage to match axial frequencies. The ground rovibrational state is inferred from cryogenic storage and cooling; excitation and polarizability corrections remain.",
    "observable": "The explicitly scoped frequency ratio, mass constraint, theoretical energy, lattice comparison or grouped-data arithmetic.",
    "finding": "Support is restricted to the stated preparation, assumptions and uncertainty meaning.",
    "limitations": [
      "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
      "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
      "The HD+/C4+ acquisition uses one pair over seven weeks and different trapping voltages to match axial frequencies. It is not the common-voltage deuteron preparation.",
      "The HD+ rovibrational ground state is inferred after days at 4.2 K using radiative cooling, a 149 s first-excited-state lifetime and a 5.4 meV gap. It is not directly state-resolved certification; spin populations need not be thermalized.",
      "Extended Data Table 1 reports HD+ ratio correction 54.3(8.1) ppt, including polarization -18.5 ppt, image charge 73.8(3.7), relativity -1.1(0.5), magnetic 0.2(0.3), line shape 0(6.8) and magnetron 0(2.1).",
      "The molecular mass balance m_HD=m_p+m_d+m_e-E_ion(HD+)/c^2 uses the total positive ionization energy relative to free nuclei and electron. The predicted/direct comparison shares mass-reference and theoretical inputs; it is not independent-facility validation.",
      "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
      "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
    ],
    "readExtent": "full-author-manuscript",
    "reviewedLocators": [
      "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
    ],
    "metadataCheckedAt": "2026-09-23",
    "metadataUrl": "https://doi.org/10.1038/s41586-020-2628-7",
    "correctionCheck": "Publisher metadata and the identified primary text were checked. The accessible source version and missing supplement or raw-data boundaries are explicit. No exhaustive correction-history search or independent scientific validation is claimed."
  },
  {
    "id": "korobov2017-hd",
    "sourceId": "korobov2017",
    "studyType": "computational-analysis",
    "doi": "10.1103/PhysRevLett.118.233001",
    "journal": "Physical Review Letters",
    "volume": "118",
    "issue": "23",
    "pages": "233001",
    "system": "HD+ NRQED energy calculation",
    "preparation": "Calculate spin-averaged hydrogen molecular-ion energies with high-order NRQED corrections and stated approximations using CODATA 2014 inputs; quote theoretical uncertainty separately from constant uncertainties.",
    "observable": "The explicitly scoped frequency ratio, mass constraint, theoretical energy, lattice comparison or grouped-data arithmetic.",
    "finding": "Support is restricted to the stated preparation, assumptions and uncertainty meaning.",
    "limitations": [
      "Korobov Table V gives HD+ ionization energy 131224.6841650(6) cm^-1 without a 1e-7 multiplier. The extra factor in Rau author Extended Data Table 2 conflicts with the cited primary table and is not adopted.",
      "This is a spin-averaged NRQED calculation with CODATA 2014 constants, not an energy measurement. Higher-order terms use adiabatic/Born-Oppenheimer approximations and hydrogen/LCAO estimates; the code and wavefunctions have not been replayed.",
      "The quoted (6) is theoretical uncertainty only. The table excludes the Rydberg relative uncertainty 5.9e-12 and describes a mass-ratio contribution below 1e-7 cm^-1. It is not a complete propagated uncertainty or a recalculation with CODATA 2018 constants.",
      "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
      "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
    ],
    "readExtent": "full-author-manuscript",
    "reviewedLocators": [
      "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
    ],
    "metadataCheckedAt": "2026-09-23",
    "metadataUrl": "https://doi.org/10.1103/PhysRevLett.118.233001",
    "correctionCheck": "Publisher metadata and the identified primary text were checked. The accessible source version and missing supplement or raw-data boundaries are explicit. No exhaustive correction-history search or independent scientific validation is claimed."
  },
  {
    "id": "korobov2017-h2",
    "sourceId": "korobov2017",
    "studyType": "computational-analysis",
    "doi": "10.1103/PhysRevLett.118.233001",
    "journal": "Physical Review Letters",
    "volume": "118",
    "issue": "23",
    "pages": "233001",
    "system": "H2+ ground-state binding calculation",
    "preparation": "Read the H2+ ground-state ionization calculation under the paper's spin and constant conventions; retain theoretical and constant uncertainties separately.",
    "observable": "The stated phase-derived ratio, conditional state branch, theoretical binding energy or adjustment input.",
    "finding": "The record preserves the reported conditional result and the explicitly unresolved alternatives or calibration identity.",
    "limitations": [
      "H2+ ground-state ionization energy is 131058.1219937(6) cm^-1 in Korobov 2017 Table V. It is distinct from the HD+ entry and from the older binding calculations cited in Fink 2020.",
      "The NRQED calculation uses CODATA 2014 constants and spin-averaged energies. The quoted uncertainty is theoretical; the separate Rydberg and mass-ratio uncertainties are excluded. Wavefunctions, higher-order approximations and code are not replayed.",
      "Use m_H2=2*m_p+m_e-E_ion(H2+)/c^2. Since both ions carry one positive charge, R=nu(H2+)/nu(D+)=m_d/m_H2. A reciprocal ratio or positive binding addition is a different equation.",
      "Published inferences retain their preparation, calibration and model assumptions. Source reading and central arithmetic do not reproduce acquisition, covariance or propagated uncertainty.",
      "These records do not establish nucleon formation, intrinsic particle stability or universal carrier minima. Publication-date constants are not automatically current recommendations."
    ],
    "readExtent": "full-author-manuscript",
    "reviewedLocators": [
      "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
    ],
    "metadataCheckedAt": "2026-09-23",
    "metadataUrl": "https://doi.org/10.1103/PhysRevLett.118.233001",
    "correctionCheck": "Official publisher or NIST metadata and the stated primary passages were checked. Supplement access and unresolved printed conflicts are explicit; no exhaustive correction-history search or independent experimental validation is claimed."
  },
  {
    "id": "lamoreaux1997",
    "sourceId": "lamoreaux1997",
    "studyType": "primary-experiment",
    "doi": "10.1103/PhysRevLett.78.5",
    "journal": "Physical Review Letters",
    "volume": "78",
    "issue": "1",
    "pages": "5-8",
    "system": "Conducting sphere-plane force measurement",
    "preparation": "Cu/Au-coated surfaces in a feedback torsion balance; relative separation from calibrated PZT motion and absolute separation from the electrostatic fit. The final dataset comprises 216 retained sweeps.",
    "observable": "Feedback force versus separation and residual after subtracting fitted electrostatic and constant terms.",
    "finding": "Attractive residual over the stated 0.6-6 micrometer range; interpretation requires the radius and optical-response corrections.",
    "limitations": [
      "Use the corrected local radius R=12.5 +/- 0.3 cm from the erratum and the accepted Lambrecht-Reynaud optical calculation.",
      "The 2000 comment gives eta about 0.87 for Au at 0.6 micrometers and Au/Cu agreement within 1%; the reply accepts this correction.",
      "The reply explicitly reports only minimal testing of systematic errors. Agreement is not a comprehensive 5% uncertainty certification.",
      "Published measurements and fits have not been independently reproduced from acquisition data."
    ],
    "readExtent": "full-primary-article",
    "reviewedLocators": [
      "Pages 5-7: sphere-plane apparatus, electrostatic calibration and subtraction; Figures 1-3",
      "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9"
    ],
    "metadataCheckedAt": "2026-09-14",
    "metadataUrl": "https://doi.org/10.1103/PhysRevLett.78.5",
    "correctionCheck": "1998 erratum and linked 2000 comment/reply read in full. The 1998 Au/Cu discrepancy is corrected by the accepted 2000 calculation. No exhaustive later-reassessment review."
  },
  {
    "id": "bressi2002",
    "sourceId": "bressi2002",
    "studyType": "primary-experiment",
    "doi": "10.1103/PhysRevLett.88.041804",
    "journal": "Physical Review Letters",
    "volume": "88",
    "issue": "4",
    "pages": "041804-1 to 041804-4",
    "system": "Parallel chromium-coated silicon surfaces",
    "preparation": "A chromium-coated silicon cantilever faces a rigid coated beam, overlapping 1.2 by 1.2 mm. Interferometry reads the torsional resonance; electrostatic sweeps calibrate gap and residual voltage.",
    "observable": "nu^2-nu0^2 versus calibrated gap, then residual after the electrostatic subtraction.",
    "finding": "Main fitted coefficient K_C=(1.22 +/- 0.18) x 10^-27 N m^2; the selected distance range and voltage-sign conflict remain explicit.",
    "limitations": [
      "The main coefficient uses the nine closest points, 0.5-1.1 micrometers, selected through chi-square analysis.",
      "The printed dynamic calibration gives V0=+(60.2 +/- 1.7) mV, conflicting with the static -(68.6 +/- 2.2) mV estimate and compensating Vc=-68.6 mV. The sign remains unresolved.",
      "Points at 1-2 micrometers deviate from the main fit. A separate fit with linear time drift gives (1.24 +/- 0.10) x 10^-27 N m^2; it is not the same estimator.",
      "The exponent 5.0 +/- 0.1 belongs to the squared-frequency shift; the corresponding ideal pressure scales as d^-4.",
      "Published measurements and fits have not been independently reproduced from acquisition data."
    ],
    "readExtent": "full-primary-article",
    "reviewedLocators": [
      "Pages 041804-1 to 041804-3: parallel surfaces, voltage calibration and frequency readout; Figures 1-3",
      "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4"
    ],
    "metadataCheckedAt": "2026-09-14",
    "metadataUrl": "https://doi.org/10.1103/PhysRevLett.88.041804",
    "correctionCheck": "Publisher page inspected; no linked correction found there. This limited check does not resolve the printed voltage-sign discrepancy or cover all later criticism."
  }
];

// Direct inputs reused by this review retain their existing evidence and roles.
// Upstream records outside those direct dependencies remain with their own contracts.
const reusedEvidence = {
  "entities": [
    {
      "id": "opt:specular-response",
      "name": "Measured response of specular IR samples",
      "kind": "scoped-process",
      "description": "Aggregate reflected-light response in the specified Hanssen preparation; no complete directional scattering law is inferred.",
      "claimIds": [
        "O-reflection",
        "C-optical-measurement-context-specular-response"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry"
        }
      ],
      "openObligations": [
        "Complete the water-method and published-dispute review before numerical calibration.",
        "Select an angular scattering dataset and a bounded inverse/forward target before strengthening the scene-encoding claim.",
        "Test the external-parent mechanisms and obtain matched optical/retinal evidence."
      ],
      "level": 2
    },
    {
      "id": "opt:brdf",
      "name": "Directional reflectance distribution",
      "kind": "quantity-definition",
      "description": "A radiometric density under stated geometry and ray-optics assumptions, distinct from a reflected flux fraction.",
      "claimIds": [
        "O-brdf"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)"
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "angular-integral-not-inversion"
        }
      ],
      "openObligations": [
        "Complete the water-method and published-dispute review before numerical calibration.",
        "Select an angular scattering dataset and a bounded inverse/forward target before strengthening the scene-encoding claim.",
        "Test the external-parent mechanisms and obtain matched optical/retinal evidence."
      ],
      "level": 2
    },
    {
      "id": "opt:material-transmission",
      "name": "Measured transmission of IR windows",
      "kind": "scoped-process",
      "description": "Transmitted-light measurements for the stated window samples; not a general channel operator or a complete field reconstruction.",
      "claimIds": [
        "O-transmission",
        "C-optical-measurement-context-material-transmission"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry"
        },
        {
          "sourceId": "pope1997",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "Complete the water-method and published-dispute review before numerical calibration.",
        "Select an angular scattering dataset and a bounded inverse/forward target before strengthening the scene-encoding claim.",
        "Test the external-parent mechanisms and obtain matched optical/retinal evidence."
      ],
      "level": 2
    },
    {
      "id": "opt:absorption-coefficient",
      "name": "Bulk absorption coefficient",
      "kind": "quantity-definition",
      "description": "A length-reciprocal coefficient, distinguished from dimensionless flux fractions and from a microscopic carrier count.",
      "claimIds": [
        "O-coefficient"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "pope1997",
          "locator": "Abstract"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry"
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "coefficient-not-absorptance"
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "balance-retains-covariance"
        }
      ],
      "openObligations": [
        "Complete the water-method and published-dispute review before numerical calibration.",
        "Select an angular scattering dataset and a bounded inverse/forward target before strengthening the scene-encoding claim.",
        "Test the external-parent mechanisms and obtain matched optical/retinal evidence."
      ],
      "level": 2
    },
    {
      "id": "phys:lepton-fields",
      "name": "Lepton fields",
      "kind": "definition",
      "description": "Lepton fields are color singlets with spin one half. Their electroweak specification distinguishes left-handed doublets, charged right-handed singlets, charged leptons and neutrinos.",
      "claimIds": [
        "D-phys-lepton"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.4.7, page 31: color multiplicities in fermion decay channels"
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: electron, muon and tau spin and lifetime entries"
        }
      ],
      "openObligations": [
        "Lepton labels do not specify universal stability or persistent flavor. Species-specific scattering, decay limits, neutrino inference and electron bound-state descriptions retain their declared preparation and model boundaries."
      ]
    },
    {
      "id": "phys:ideal-plate-casimir",
      "name": "Ideal parallel-plate Casimir model",
      "kind": "definition",
      "description": "For parallel perfectly conducting plates, the regulated interaction energy per area is -pi^2 hbar c/(720 a^3). The force per area conjugate to increasing separation is -pi^2 hbar c/(240 a^4), directed toward smaller separation.",
      "claimIds": [
        "D-phys-ideal-plate-casimir"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:casimir-material-model",
      "name": "Material-dependent Casimir interaction",
      "kind": "definition",
      "description": "A Casimir interaction can be calculated from electromagnetic response and coupling to material sources. Ideal conducting boundaries are a limiting approximation; the external-source formulation does not require an independently measured absolute zero-point energy.",
      "claimIds": [
        "D-phys-casimir-material-model"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:lamoreaux-casimir",
      "name": "Conditional sphere-plane Casimir comparison",
      "kind": "scoped-process",
      "description": "The reported residual attraction agrees with the revised material-response calculation when the corrected radius is used. The accepted Au/Cu calculation removes the proposed need for a Cu-like contaminated coating as an explanation of their discrepancy.",
      "claimIds": [
        "C-phys-lamoreaux-casimir"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9"
        },
        {
          "sourceId": "lamoreaux1998-note",
          "locator": "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1"
        },
        {
          "sourceId": "lambrecht2000",
          "locator": "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1"
        },
        {
          "sourceId": "lamoreaux2000-reply",
          "locator": "Page 5673: accepted Au correction and limits of systematic-error testing"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:bressi-coefficient",
      "name": "Conditional parallel-plate force coefficient",
      "kind": "scoped-process",
      "description": "The main nine-point fit gives C_Cas=(2.34 +/- 0.34) x 10^-28 Hz^2 m^5 and K_C=(1.22 +/- 0.18) x 10^-27 N m^2 through K_C=epsilon0 C_Cas/(4 C_el). Agreement with ideal pressure is conditional on calibration and the declared fit.",
      "claimIds": [
        "C-phys-bressi-coefficient"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:lamb-separation",
      "name": "Approximate hydrogen level separation",
      "kind": "scoped-process",
      "description": "The comparison with Zeeman curves places hydrogen 2S1/2 about 1000 MHz above 2P1/2. This is the approximate 1947 result, with no fitted error bar supplied.",
      "claimIds": [
        "C-phys-lamb-separation"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:lamb-radiative-interpretation",
      "name": "Conditional radiative interpretation of the level shift",
      "kind": "scoped-process",
      "description": "The approximate measured separation is compatible with Bethe's 1040 MHz self-energy estimate under its subtraction and cutoff assumptions. Compatibility does not isolate vacuum polarization or validate full relativistic QED.",
      "claimIds": [
        "C-phys-lamb-radiative-interpretation"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence for the proposed domain and its measurement or mathematical assumptions."
      ]
    },
    {
      "id": "phys:rau-hd-mass",
      "name": "Direct corrected HD+ mass",
      "kind": "scoped-process",
      "description": "The HD+ comparison reports zero-drive ratio 1.007310263850(19), corrected ratio 1.007310263905(19)(8)(20), and m_HD=3.021378241561(56)(24)(61) u, with statistical, systematic and total uncertainties.",
      "claimIds": [
        "C-phys-rau-hd-mass"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        }
      ],
      "openObligations": [
        "Recover the explicitly missing acquisition, covariance, theoretical or calibration evidence before claiming independent reproduction."
      ]
    },
    {
      "id": "phys:korobov-hd-energy",
      "name": "Calculated HD+ ionization energy",
      "kind": "scoped-process",
      "description": "Korobov Table V gives spin-averaged HD+ ionization energy 131224.6841650(6) cm^-1. The final-digit uncertainty is theoretical and omits the separately discussed constant uncertainties.",
      "claimIds": [
        "C-phys-korobov-hd-energy"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        }
      ],
      "openObligations": [
        "Recover the explicitly missing acquisition, covariance, theoretical or calibration evidence before claiming independent reproduction."
      ]
    },
    {
      "id": "phys:rau-hd-closure",
      "name": "Internal molecular mass closure",
      "kind": "scoped-process",
      "description": "Using the 2019 proton input and direct deuteron mass, the molecular balance predicts m_HD=3.021378241576(37) u. Prediction minus direct HD+ measurement is 15(71) pu, where pu=1e-12 u.",
      "claimIds": [
        "C-phys-rau-hd-closure"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
        }
      ],
      "openObligations": [
        "Recover the explicitly missing acquisition, covariance, theoretical or calibration evidence before claiming independent reproduction."
      ]
    },
    {
      "id": "phys:korobov-h2-energy",
      "name": "Calculated H2+ ionization energy",
      "kind": "scoped-process",
      "description": "Korobov Table V gives H2+ ground-state ionization energy 131058.1219937(6) cm^-1 under CODATA 2014 and spin-averaged conventions; (6) is the theoretical component only.",
      "claimIds": [
        "C-phys-korobov-h2-energy"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
        }
      ],
      "openObligations": [
        "Resolve the declared state, covariance or source-identity limitations before independent reproduction is claimed."
      ]
    },
    {
      "id": "phys:internal-propagator",
      "name": "Internal propagator kernel",
      "kind": "definition",
      "description": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "claimIds": [
        "D-phys-internal-propagator"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        }
      ],
      "openObligations": [
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "phys:weinberg-gauge-mass-matrix",
      "name": "Historical charged and neutral gauge masses",
      "kind": "definition",
      "description": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "claimIds": [
        "D-phys-weinberg-gauge-mass-matrix"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        }
      ],
      "openObligations": [
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "phys:electromagnetic-photon-field",
      "name": "Free electromagnetic photon field",
      "kind": "definition",
      "description": "In Minkowski spacetime with hbar=c=1 and metric (+---), adopt the source-free Maxwell action S=-(1/4)integral d^4x F_mu_nu F^mu_nu, with F_mu_nu=partial_mu A_nu-partial_nu A_mu and A_mu identified with A_mu+partial_mu lambda under the stated boundary conditions. In this unbroken Abelian U(1) electromagnetic model there is no mass term. A constant gauge parameter leaves A_mu unchanged, giving its neutral transformation law in this model rather than a measured zero-charge result.",
      "claimIds": [
        "D-phys-electromagnetic-photon-field"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        }
      ],
      "openObligations": [
        "Gauge equivalence removes redundant potential descriptions; A_mu is not four independent physical photon polarizations. In source-free radiation gauge, Gauss law and suitable vanishing boundary conditions permit A_0=0 and div A=0. Charged sources or different boundaries require their own constraint solution.",
        "The Maxwell action and unbroken U(1) regime are supplied assumptions, not a derivation of electroweak symmetry breaking, a measured upper bound on photon mass/charge, or proof that every gauge-invariant extension must be massless.",
        "The free field is a controlled description before an explicit interaction is added; its action does not specify an emission mechanism, detector response, static-force measurement or a persistent photon identity through interactions. No interacting charged-sector infrared dressing or asymptotic completeness is constructed."
      ]
    }
  ],
  "claims": [
    {
      "id": "O-reflection",
      "kind": "review-finding",
      "statement": "Specified IR samples have measured aggregate reflected-light responses in the reported integrating-sphere setup.",
      "scope": "Scoped optical representation; no physical occurrence, universal necessity or numerical threshold admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "supports",
          "note": "Support is limited to the declared reading and measurement context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An atlas representation does not establish an ontological level, a successful construction rule or a matched optical-to-retinal transfer."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "O-transmission",
      "kind": "review-finding",
      "statement": "The same study reports aggregate transmission for specified window samples, with sample and geometry limits.",
      "scope": "Scoped optical representation; no physical occurrence, universal necessity or numerical threshold admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "supports",
          "note": "Support is limited to the declared reading and measurement context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An atlas representation does not establish an ontological level, a successful construction rule or a matched optical-to-retinal transfer."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "O-brdf",
      "kind": "method",
      "statement": "Represent BRDF as a directional radiometric density with unit sr^-1; measured reflectance integrates over a specified illumination and collection geometry.",
      "scope": "Scoped optical representation; no physical occurrence, universal necessity or numerical threshold admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)",
          "role": "method",
          "note": "Support is limited to the declared reading and measurement context."
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "angular-integral-not-inversion",
          "role": "supports",
          "note": "Synthetic angular-bin counterexample; not measured data."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reviewed monograph assumes a declared ray-optics regime and spatial/illumination conditions.",
        "An integrated reflectance does not identify a unique angular distribution or material surface."
      ]
    },
    {
      "id": "O-coefficient",
      "kind": "method",
      "statement": "Represent the reported absorption coefficient in m^-1 separately from dimensionless transmission and absorptance; conversion requires a specified propagation and boundary model.",
      "scope": "Scoped optical representation; no physical occurrence, universal necessity or numerical threshold admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pope1997",
          "locator": "Abstract",
          "role": "method",
          "note": "Support is limited to the declared reading and measurement context."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "method",
          "note": "Support is limited to the declared reading and measurement context."
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "coefficient-not-absorptance",
          "role": "supports",
          "note": "Synthetic absorption-only path model, not a fit to either study."
        },
        {
          "sourceId": "optical-witnesses",
          "locator": "balance-retains-covariance",
          "role": "supports",
          "note": "Synthetic error propagation retains covariance; no experimental covariance is assigned."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An atlas representation does not establish an ontological level, a successful construction rule or a matched optical-to-retinal transfer."
      ]
    },
    {
      "id": "C-optical-measurement-context-specular-response",
      "kind": "review-finding",
      "statement": "The incident beam, sample and collection geometry define the boundary of the specular-response measurement.",
      "scope": "The cited experimental preparation or measurement definition only.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "supports",
          "note": "Support is limited to the declared reading and measurement context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An atlas representation does not establish an ontological level, a successful construction rule or a matched optical-to-retinal transfer."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "C-optical-measurement-context-material-transmission",
      "kind": "review-finding",
      "statement": "The specified incident beam, sample path and detector define the transmission measurement boundary.",
      "scope": "The cited experimental preparation or measurement definition only.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "supports",
          "note": "Support is limited to the declared reading and measurement context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An atlas representation does not establish an ontological level, a successful construction rule or a matched optical-to-retinal transfer."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "D-phys-lepton",
      "kind": "review-finding",
      "statement": "Lepton fields are color singlets with spin one half. Their electroweak specification distinguishes left-handed doublets, charged right-handed singlets, charged leptons and neutrinos.",
      "scope": "Standard Model field classification, with an explicit boundary for neutrino-mass extensions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.4.7, page 31: color multiplicities in fermion decay channels",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: electron, muon and tau spin and lifetime entries",
          "role": "limits",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.4-4.4.2: Weyl components, Dirac mass coupling and chirality projectors",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.7.1-4.7.2: massive and massless plane-wave spinors and helicity",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A color-singlet lepton has no direct QCD color coupling in the declared model. This does not exclude electromagnetic or weak interactions with hadronic matter: the admitted MAMI electron-proton scattering is a specific example, with its own acceptance, radiation and fitted-normalization conditions.",
        "Muon and tau lifetimes are finite. An electron lifetime lower bound applies to its searched channel and statistical/response assumptions; it is not a measured infinite lifetime. No species result establishes a universal lifetime for all leptons.",
        "A field or flavor label is not a permanent classical identity across propagation and interactions. Chirality is distinct from massive-particle helicity; neutrino flavor/mass labels require their separately stated extension and evidence.",
        "The ordinary atomic example is an electron in the specified electromagnetic hydrogen bound-state description. The admitted hydrogen separation and approximate radiative model do not establish that all leptons build ordinary atoms, exclude other bound systems or reconstruct atom formation.",
        "Quantization, gauge representation and renormalizable interactions do not prove stable individual carriers. The original 0.7/0.3 weights, necessary arising/maintenance, one-carrier minima and SOMA object classification have no scientific admission."
      ]
    },
    {
      "id": "D-phys-ideal-plate-casimir",
      "kind": "review-finding",
      "statement": "For parallel perfectly conducting plates, the regulated interaction energy per area is -pi^2 hbar c/(720 a^3). The force per area conjugate to increasing separation is -pi^2 hbar c/(240 a^4), directed toward smaller separation.",
      "scope": "Zero-temperature electromagnetic boundary model, a>0, large lateral dimensions and negligible penetration depth relative to separation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "limits",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is an interaction-energy difference; a separation-independent constant contributes no force. The paper prints the positive magnitude of attraction.",
        "Real-material response, temperature, geometry, roughness and electrostatic backgrounds need explicit treatment. A scalar field has a different mode count.",
        "The model is not a measurement of absolute vacuum energy, cosmological energy density or particles appearing from nothing."
      ]
    },
    {
      "id": "D-phys-casimir-material-model",
      "kind": "review-finding",
      "statement": "A Casimir interaction can be calculated from electromagnetic response and coupling to material sources. Ideal conducting boundaries are a limiting approximation; the external-source formulation does not require an independently measured absolute zero-point energy.",
      "scope": "Jaffe Sections II-III: material response argument and a one-dimensional scalar external-potential example; not a complete model of every conductor.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy",
          "role": "limits",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The scalar example tends to zero at vanishing coupling and reaches the ideal boundary result at strong coupling. This limit is not an experiment that varies the fine-structure constant.",
        "Alternative formulations limit what a force measurement uniquely identifies; they do not disprove quantum correlations or resolve the cosmological constant problem."
      ]
    },
    {
      "id": "C-phys-lamoreaux-casimir",
      "kind": "review-finding",
      "statement": "The reported residual attraction agrees with the revised material-response calculation when the corrected radius is used. The accepted Au/Cu calculation removes the proposed need for a Cu-like contaminated coating as an explanation of their discrepancy.",
      "scope": "Specified preparation and observable; no universal emergence claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "lamoreaux1998-note",
          "locator": "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "lambrecht2000",
          "locator": "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "lamoreaux2000-reply",
          "locator": "Page 5673: accepted Au correction and limits of systematic-error testing",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the corrected local radius R=12.5 +/- 0.3 cm from the erratum and the accepted Lambrecht-Reynaud optical calculation.",
        "The 2000 comment gives eta about 0.87 for Au at 0.6 micrometers and Au/Cu agreement within 1%; the reply accepts this correction.",
        "The reply explicitly reports only minimal testing of systematic errors. Agreement is not a comprehensive 5% uncertainty certification.",
        "Published measurements and fits have not been independently reproduced from acquisition data.",
        "A force comparison does not uniquely measure absolute vacuum energy."
      ],
      "contextIds": [
        "lamoreaux1997"
      ]
    },
    {
      "id": "C-phys-bressi-coefficient",
      "kind": "review-finding",
      "statement": "The main nine-point fit gives C_Cas=(2.34 +/- 0.34) x 10^-28 Hz^2 m^5 and K_C=(1.22 +/- 0.18) x 10^-27 N m^2 through K_C=epsilon0 C_Cas/(4 C_el). Agreement with ideal pressure is conditional on calibration and the declared fit.",
      "scope": "Specified preparation and observable; no universal emergence claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy",
          "role": "limits",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The main coefficient uses the nine closest points, 0.5-1.1 micrometers, selected through chi-square analysis.",
        "The printed dynamic calibration gives V0=+(60.2 +/- 1.7) mV, conflicting with the static -(68.6 +/- 2.2) mV estimate and compensating Vc=-68.6 mV. The sign remains unresolved.",
        "Points at 1-2 micrometers deviate from the main fit. A separate fit with linear time drift gives (1.24 +/- 0.10) x 10^-27 N m^2; it is not the same estimator.",
        "The exponent 5.0 +/- 0.1 belongs to the squared-frequency shift; the corresponding ideal pressure scales as d^-4.",
        "Published measurements and fits have not been independently reproduced from acquisition data."
      ],
      "contextIds": [
        "bressi2002"
      ]
    },
    {
      "id": "C-phys-lamb-separation",
      "kind": "review-finding",
      "statement": "The comparison with Zeeman curves places hydrogen 2S1/2 about 1000 MHz above 2P1/2. This is the approximate 1947 result, with no fitted error bar supplied.",
      "scope": "Specified preparation and observable; no universal emergence claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The plotted 1000 MHz displacement is an approximate comparison and explicitly not a best fit.",
        "Field calibration and inhomogeneity, line broadening and hyperfine structure limit the measurement; the proposed 10 MHz accuracy is future work in this article.",
        "A measured level separation does not isolate a unique radiative contribution or absolute vacuum energy.",
        "Published measurements and fits have not been independently reproduced from acquisition data."
      ],
      "contextIds": [
        "lamb1947"
      ]
    },
    {
      "id": "C-phys-lamb-radiative-interpretation",
      "kind": "review-finding",
      "statement": "The approximate measured separation is compatible with Bethe's 1040 MHz self-energy estimate under its subtraction and cutoff assumptions. Compatibility does not isolate vacuum polarization or validate full relativistic QED.",
      "scope": "Specified preparation and observable; no universal emergence claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12",
          "role": "supports",
          "note": "The identified passage supports this role within its stated scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The plotted 1000 MHz displacement is an approximate comparison and explicitly not a best fit.",
        "Field calibration and inhomogeneity, line broadening and hyperfine structure limit the measurement; the proposed 10 MHz accuracy is future work in this article.",
        "A measured level separation does not isolate a unique radiative contribution or absolute vacuum energy.",
        "Published measurements and fits have not been independently reproduced from acquisition data.",
        "Bethe assumes K approximately m c^2 and leaves the relativistic calculation unfinished."
      ],
      "contextIds": [
        "lamb1947"
      ]
    },
    {
      "id": "C-phys-rau-hd-mass",
      "kind": "review-finding",
      "statement": "The HD+ comparison reports zero-drive ratio 1.007310263850(19), corrected ratio 1.007310263905(19)(8)(20), and m_HD=3.021378241561(56)(24)(61) u, with statistical, systematic and total uncertainties.",
      "scope": "The stated deuteron, molecular-ion and silicon-calibration evidence.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Restricted to the stated ion preparation, calculation, calibration or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
        "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
        "The HD+/C4+ acquisition uses one pair over seven weeks and different trapping voltages to match axial frequencies. It is not the common-voltage deuteron preparation.",
        "The HD+ rovibrational ground state is inferred after days at 4.2 K using radiative cooling, a 149 s first-excited-state lifetime and a 5.4 meV gap. It is not directly state-resolved certification; spin populations need not be thermalized.",
        "Extended Data Table 1 reports HD+ ratio correction 54.3(8.1) ppt, including polarization -18.5 ppt, image charge 73.8(3.7), relativity -1.1(0.5), magnetic 0.2(0.3), line shape 0(6.8) and magnetron 0(2.1).",
        "The molecular mass balance m_HD=m_p+m_d+m_e-E_ion(HD+)/c^2 uses the total positive ionization energy relative to free nuclei and electron. The predicted/direct comparison shares mass-reference and theoretical inputs; it is not independent-facility validation.",
        "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
        "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
      ],
      "contextIds": [
        "rau2020-hd"
      ]
    },
    {
      "id": "C-phys-korobov-hd-energy",
      "kind": "review-finding",
      "statement": "Korobov Table V gives spin-averaged HD+ ionization energy 131224.6841650(6) cm^-1. The final-digit uncertainty is theoretical and omits the separately discussed constant uncertainties.",
      "scope": "The stated deuteron, molecular-ion and silicon-calibration evidence.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "supports",
          "note": "Restricted to the stated ion preparation, calculation, calibration or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Korobov Table V gives HD+ ionization energy 131224.6841650(6) cm^-1 without a 1e-7 multiplier. The extra factor in Rau author Extended Data Table 2 conflicts with the cited primary table and is not adopted.",
        "This is a spin-averaged NRQED calculation with CODATA 2014 constants, not an energy measurement. Higher-order terms use adiabatic/Born-Oppenheimer approximations and hydrogen/LCAO estimates; the code and wavefunctions have not been replayed.",
        "The quoted (6) is theoretical uncertainty only. The table excludes the Rydberg relative uncertainty 5.9e-12 and describes a mass-ratio contribution below 1e-7 cm^-1. It is not a complete propagated uncertainty or a recalculation with CODATA 2018 constants.",
        "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
        "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
      ],
      "contextIds": [
        "korobov2017-hd"
      ]
    },
    {
      "id": "C-phys-rau-hd-closure",
      "kind": "review-finding",
      "statement": "Using the 2019 proton input and direct deuteron mass, the molecular balance predicts m_HD=3.021378241576(37) u. Prediction minus direct HD+ measurement is 15(71) pu, where pu=1e-12 u.",
      "scope": "The stated deuteron, molecular-ion and silicon-calibration evidence.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Restricted to the stated ion preparation, calculation, calibration or bounded arithmetic."
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "role": "supports",
          "note": "Restricted to the stated ion preparation, calculation, calibration or bounded arithmetic."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "supports",
          "note": "Restricted to the stated ion preparation, calculation, calibration or bounded arithmetic."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
          "role": "supports",
          "note": "Deuteron input to the molecular mass balance."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The HD+/C4+ acquisition uses one pair over seven weeks and different trapping voltages to match axial frequencies. It is not the common-voltage deuteron preparation.",
        "The HD+ rovibrational ground state is inferred after days at 4.2 K using radiative cooling, a 149 s first-excited-state lifetime and a 5.4 meV gap. It is not directly state-resolved certification; spin populations need not be thermalized.",
        "Extended Data Table 1 reports HD+ ratio correction 54.3(8.1) ppt, including polarization -18.5 ppt, image charge 73.8(3.7), relativity -1.1(0.5), magnetic 0.2(0.3), line shape 0(6.8) and magnetron 0(2.1).",
        "The molecular mass balance m_HD=m_p+m_d+m_e-E_ion(HD+)/c^2 uses the total positive ionization energy relative to free nuclei and electron. The predicted/direct comparison shares mass-reference and theoretical inputs; it is not independent-facility validation.",
        "Korobov Table V gives HD+ ionization energy 131224.6841650(6) cm^-1 without a 1e-7 multiplier. The extra factor in Rau author Extended Data Table 2 conflicts with the cited primary table and is not adopted.",
        "This is a spin-averaged NRQED calculation with CODATA 2014 constants, not an energy measurement. Higher-order terms use adiabatic/Born-Oppenheimer approximations and hydrogen/LCAO estimates; the code and wavefunctions have not been replayed.",
        "The quoted (6) is theoretical uncertainty only. The table excludes the Rydberg relative uncertainty 5.9e-12 and describes a mass-ratio contribution below 1e-7 cm^-1. It is not a complete propagated uncertainty or a recalculation with CODATA 2018 constants.",
        "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
        "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
        "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
        "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values."
      ],
      "contextIds": [
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "C-phys-korobov-h2-energy",
      "kind": "review-finding",
      "statement": "Korobov Table V gives H2+ ground-state ionization energy 131058.1219937(6) cm^-1 under CODATA 2014 and spin-averaged conventions; (6) is the theoretical component only.",
      "scope": "Conditional light-ion mass inference and selected CODATA input dependencies.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "supports",
          "note": "Only the explicitly reviewed preparation, conditional inference or input-identity comparison is supported."
        }
      ],
      "checkIds": [],
      "limitations": [
        "H2+ ground-state ionization energy is 131058.1219937(6) cm^-1 in Korobov 2017 Table V. It is distinct from the HD+ entry and from the older binding calculations cited in Fink 2020.",
        "The NRQED calculation uses CODATA 2014 constants and spin-averaged energies. The quoted uncertainty is theoretical; the separate Rydberg and mass-ratio uncertainties are excluded. Wavefunctions, higher-order approximations and code are not replayed.",
        "Use m_H2=2*m_p+m_e-E_ion(H2+)/c^2. Since both ions carry one positive charge, R=nu(H2+)/nu(D+)=m_d/m_H2. A reciprocal ratio or positive binding addition is a different equation.",
        "Published inferences retain their preparation, calibration and model assumptions. Source reading and central arithmetic do not reproduce acquisition, covariance or propagated uncertainty.",
        "These records do not establish nucleon formation, intrinsic particle stability or universal carrier minima. Publication-date constants are not automatically current recommendations."
      ],
      "contextIds": [
        "korobov2017-h2"
      ]
    },
    {
      "id": "D-phys-internal-propagator",
      "kind": "review-finding",
      "statement": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Internal four-momenta are not constrained to a free on-shell relation, but an integration includes pole regions: internal does not mean always off shell. Four-momentum conservation is retained. Matrix ordering along a fermion line is not a measured chronology or a license to borrow energy temporarily.",
        "The photon denominator (k^2+i0)^-1 and inverse Dirac operator are schematic kernel factors in the stated historical Fourier convention. Couplings, tensor/spinor indices, normalization, vertex factors and a complete amplitude remain required. No coordinate-space path or cross section is inferred from a denominator alone.",
        "External and internal are roles in a declared amplitude calculation. Changing the included sources and detectors changes the boundary; this is not a universal particle census. No individual diagram is automatically gauge independent, separately observable or an independently measured alternative.",
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "D-phys-weinberg-gauge-mass-matrix",
      "kind": "review-finding",
      "statement": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "The historical model specifies electron-type left-handed doublet and right-handed singlet fields before symmetry breaking. It does not generate chirality, give neutrinos a mass, derive all quark/fermion masses, or prove all-order renormalizability; the paper leaves that last question open."
      ]
    },
    {
      "id": "D-phys-electromagnetic-photon-field",
      "kind": "review-finding",
      "statement": "In Minkowski spacetime with hbar=c=1 and metric (+---), adopt the source-free Maxwell action S=-(1/4)integral d^4x F_mu_nu F^mu_nu, with F_mu_nu=partial_mu A_nu-partial_nu A_mu and A_mu identified with A_mu+partial_mu lambda under the stated boundary conditions. In this unbroken Abelian U(1) electromagnetic model there is no mass term. A constant gauge parameter leaves A_mu unchanged, giving its neutral transformation law in this model rather than a measured zero-charge result.",
      "scope": "A selected massless Abelian vector-field definition; not an experimental inference of exact photon mass or charge.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Gauge equivalence removes redundant potential descriptions; A_mu is not four independent physical photon polarizations. In source-free radiation gauge, Gauss law and suitable vanishing boundary conditions permit A_0=0 and div A=0. Charged sources or different boundaries require their own constraint solution.",
        "The Maxwell action and unbroken U(1) regime are supplied assumptions, not a derivation of electroweak symmetry breaking, a measured upper bound on photon mass/charge, or proof that every gauge-invariant extension must be massless.",
        "The free field is a controlled description before an explicit interaction is added; its action does not specify an emission mechanism, detector response, static-force measurement or a persistent photon identity through interactions. No interacting charged-sector infrared dressing or asymptotic completeness is constructed."
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "opt:specular-response",
      "role": "scoped-phenomenon",
      "denotes": "A description of behavior or structure within the cited study boundaries; not an identified event occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "O-reflection",
        "C-optical-measurement-context-specular-response"
      ]
    },
    {
      "nodeId": "opt:brdf",
      "role": "quantity-definition",
      "denotes": "A quantity definition; no measured value, bearer occurrence or unit is inferred from this node.",
      "instanceAdmission": "none",
      "claimIds": [
        "O-brdf"
      ]
    },
    {
      "nodeId": "opt:material-transmission",
      "role": "scoped-phenomenon",
      "denotes": "A description of behavior or structure within the cited study boundaries; not an identified event occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "O-transmission",
        "C-optical-measurement-context-material-transmission"
      ]
    },
    {
      "nodeId": "opt:absorption-coefficient",
      "role": "quantity-definition",
      "denotes": "A quantity definition; no measured value, bearer occurrence or unit is inferred from this node.",
      "instanceAdmission": "none",
      "claimIds": [
        "O-coefficient"
      ]
    },
    {
      "nodeId": "phys:lepton-fields",
      "role": "definition",
      "denotes": "A specified theoretical concept, not an identified physical occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lepton"
      ]
    },
    {
      "nodeId": "phys:ideal-plate-casimir",
      "role": "definition",
      "denotes": "A specified theoretical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ideal-plate-casimir"
      ]
    },
    {
      "nodeId": "phys:casimir-material-model",
      "role": "definition",
      "denotes": "A specified theoretical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-casimir-material-model"
      ]
    },
    {
      "nodeId": "phys:lamoreaux-casimir",
      "role": "scoped-phenomenon",
      "denotes": "A reported result or conditional interpretation in the cited preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lamoreaux-casimir"
      ]
    },
    {
      "nodeId": "phys:bressi-coefficient",
      "role": "scoped-phenomenon",
      "denotes": "A reported result or conditional interpretation in the cited preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bressi-coefficient"
      ]
    },
    {
      "nodeId": "phys:lamb-separation",
      "role": "scoped-phenomenon",
      "denotes": "A reported result or conditional interpretation in the cited preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lamb-separation"
      ]
    },
    {
      "nodeId": "phys:lamb-radiative-interpretation",
      "role": "scoped-phenomenon",
      "denotes": "A reported result or conditional interpretation in the cited preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lamb-radiative-interpretation"
      ]
    },
    {
      "nodeId": "phys:rau-hd-mass",
      "role": "scoped-phenomenon",
      "denotes": "A scoped mass definition, ion preparation, analysis result or calibration dependency.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-rau-hd-mass"
      ]
    },
    {
      "nodeId": "phys:korobov-hd-energy",
      "role": "scoped-phenomenon",
      "denotes": "A scoped mass definition, ion preparation, analysis result or calibration dependency.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-korobov-hd-energy"
      ]
    },
    {
      "nodeId": "phys:rau-hd-closure",
      "role": "scoped-phenomenon",
      "denotes": "A scoped mass definition, ion preparation, analysis result or calibration dependency.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-rau-hd-closure"
      ]
    },
    {
      "nodeId": "phys:korobov-h2-energy",
      "role": "scoped-phenomenon",
      "denotes": "A conditional mass constraint, scoped preparation, calculation or source-input comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-korobov-h2-energy"
      ]
    },
    {
      "nodeId": "phys:internal-propagator",
      "role": "definition",
      "denotes": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-internal-propagator"
      ]
    },
    {
      "nodeId": "phys:weinberg-gauge-mass-matrix",
      "role": "definition",
      "denotes": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-weinberg-gauge-mass-matrix"
      ]
    },
    {
      "nodeId": "phys:electromagnetic-photon-field",
      "role": "definition",
      "denotes": "The selected free Maxwell gauge field and its neutral Abelian transformation law, with a declared spacetime and action.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-electromagnetic-photon-field"
      ]
    }
  ]
};

/** Level membership is a reviewed display choice, not a physical hierarchy. */
export function validateLevelTwoContracts(context) {
  validateOpticalPropagationContracts(context);
  validateSurfaceScatteringContracts(context);
  validateHyperfineContracts(context);
  validateCasimirScopeContracts(context);
  validateElectronicDecayContracts(context);
  validateMossbauerContracts(context);
  validatePiezoelectricFerroelectricContracts(context);
  validatePhaseRegimeContracts(context);
  validateMetallicBondingContracts(context);
  validateColloidInterfaceContracts(context);
  validateLiquidOrganizationContracts(context);
  validateQuantumReactionContracts(context);
  validateAromaticConjugationContracts(context);
  validateCrystalOrderContracts(context);
  validateMolecularPolarizationContracts(context);
  validateHydrogenBondContracts(context);
  validateDispersionContracts(context);
  validateBbnContracts(context);
  validateEmRegimeContracts(context);
  validateAtomicStructureContracts(context);
  validateMolecularBindingContracts(context);
  validateIonicInteractionsContracts(context);
  validateMolecularResonanceContracts(context);
  for (const expected of reusedPhysicsStudies) {
    assert.deepEqual(context.studies.get(expected.id), expected,
      `Level-2 reused physics study changed ${expected.id}: preserve the complete reviewed preparation, observable and limits`);
  }
  for (const [kind, expectedRecords] of Object.entries(reusedEvidence)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Level-2 reused ${kind} changed ${id}: preserve the reviewed evidence and representation`);
    }
  }
}
