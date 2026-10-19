import assert from "node:assert/strict";

export const HYDROGEN_BOND_CHECKS = new Map();
export const HYDROGEN_BOND_ANALYTICAL_SOURCES = new Map();
export const HYDROGEN_BOND_STUDY_TYPES = new Map([["rocher2011-water-dimer", "primary-experiment"], ["altun2018-water-dimer", "computational-analysis"]]);
export const HYDROGEN_BOND_ADMISSION = {
  "definitions": [
    [
      "phys:hydrogen-bond-evidence-definition",
      "D-phys-hydrogen-bond-evidence-definition"
    ],
    [
      "phys:hydrogen-bond-state-energy-boundary",
      "D-phys-hydrogen-bond-state-energy-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:hydrogen-bond-evidence-definition-hydrogen-bond-state-energy-boundary",
      [
        "phys:hydrogen-bond-evidence-definition",
        "phys:hydrogen-bond-state-energy-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "rocher2011-water-dimer-context",
      "M-phys-rocher2011-water-dimer-context",
      [
        "rocher2011-water-dimer"
      ]
    ],
    [
      "altun2018-water-dimer-context",
      "M-phys-altun2018-water-dimer-context",
      [
        "altun2018-water-dimer"
      ]
    ]
  ],
  "observations": [
    [
      "water-dimer-dissociation",
      "C-phys-water-dimer-dissociation",
      [
        "rocher2011-water-dimer"
      ]
    ],
    [
      "water-dimer-model",
      "C-phys-water-dimer-model",
      [
        "altun2018-water-dimer"
      ]
    ],
    [
      "hydrogen-bond-source-scope",
      "C-phys-hydrogen-bond-source-scope",
      [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    ]
  ],
  "dependencies": [
    [
      "rocher2011-water-dimer-context-water-dimer-dissociation",
      "rocher2011-water-dimer-context",
      "water-dimer-dissociation",
      "M-phys-water-dimer-dissociation",
      "measurement-context"
    ],
    [
      "hydrogen-bond-state-energy-boundary-water-dimer-dissociation",
      "hydrogen-bond-state-energy-boundary",
      "water-dimer-dissociation",
      "M-phys-water-dimer-dissociation",
      "interpretation-dependency"
    ],
    [
      "altun2018-water-dimer-context-water-dimer-model",
      "altun2018-water-dimer-context",
      "water-dimer-model",
      "M-phys-water-dimer-model",
      "interpretation-dependency"
    ],
    [
      "hydrogen-bond-evidence-definition-water-dimer-model",
      "hydrogen-bond-evidence-definition",
      "water-dimer-model",
      "M-phys-water-dimer-model",
      "interpretation-dependency"
    ],
    [
      "hydrogen-bond-evidence-definition-hydrogen-bond-source-scope",
      "hydrogen-bond-evidence-definition",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ],
    [
      "hydrogen-bond-state-energy-boundary-hydrogen-bond-source-scope",
      "hydrogen-bond-state-energy-boundary",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ],
    [
      "rocher2011-water-dimer-context-hydrogen-bond-source-scope",
      "rocher2011-water-dimer-context",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ],
    [
      "altun2018-water-dimer-context-hydrogen-bond-source-scope",
      "altun2018-water-dimer-context",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ],
    [
      "water-dimer-dissociation-hydrogen-bond-source-scope",
      "water-dimer-dissociation",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ],
    [
      "water-dimer-model-hydrogen-bond-source-scope",
      "water-dimer-model",
      "hydrogen-bond-source-scope",
      "M-phys-hydrogen-bond-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "rocher2011-water-dimer",
    "altun2018-water-dimer"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-rocher2011-water-dimer-context",
      [
        "rocher2011-water-dimer"
      ]
    ],
    [
      "M-phys-water-dimer-dissociation",
      [
        "rocher2011-water-dimer"
      ]
    ],
    [
      "C-phys-water-dimer-dissociation",
      [
        "rocher2011-water-dimer"
      ]
    ],
    [
      "M-phys-altun2018-water-dimer-context",
      [
        "altun2018-water-dimer"
      ]
    ],
    [
      "M-phys-water-dimer-model",
      [
        "altun2018-water-dimer"
      ]
    ],
    [
      "C-phys-water-dimer-model",
      [
        "altun2018-water-dimer"
      ]
    ],
    [
      "M-phys-hydrogen-bond-source-scope",
      [
        "altun2018-water-dimer",
        "arunan2011-hbond-definition",
        "arunan2011-hbond-rationale",
        "rocher2011-water-dimer"
      ]
    ],
    [
      "C-phys-hydrogen-bond-source-scope",
      [
        "altun2018-water-dimer",
        "arunan2011-hbond-definition",
        "arunan2011-hbond-rationale",
        "rocher2011-water-dimer"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-hydrogen-bond-evidence-definition",
      "kind": "review-finding",
      "statement": "Use an evidence-based hydrogen-bond classification for an attractive X-H...Y interaction with positively polarized H, X more electronegative than H and an electron-rich acceptor atom or group. Donor and acceptor may occur within one molecule or between molecules. Qualified structural, spectroscopic and theoretical diagnostics support classification; the definition itself is not an observed experiment.",
      "scope": "Reviewed IUPAC recommendation; scientific terminology rather than a universal physical-stage claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "arunan2011-hbond-definition",
          "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Directionality and the usual red shift are tendencies: blue shifts, no shift, multiple donors/acceptors and borderline cases are explicitly allowed. No preferred angle or van der Waals radius comparison is an infallible necessary cutoff.",
        "Cooperative networks are possible multi-bond systems, not required of a single hydrogen bond. An intermolecular-only definition excludes legitimate intramolecular cases.",
        "Contributions and energetic strength depend on the system and environment. A fixed intermediate-strength band or universal dispersion < hydrogen bond < covalent ordering is not admitted.",
        "This operational definition does not supply a measured critical count, formation rate, recognition selectivity or an ontologically autonomous SOMA arising."
      ]
    },
    {
      "id": "D-phys-hydrogen-bond-state-energy-boundary",
      "kind": "review-finding",
      "statement": "A hydrogen-bond energy must specify the molecular system, electronic/rovibrational state, separated fragments and energy convention. For the neutral water dimer, D0 dissociation to water monomers differs from electronic well depth De, a frozen-fragment interaction energy, thermal dimerization enthalpy and covalent O-H bond cleavage. Intramolecular hydrogen-bond partners cannot generally be separated without changing the rest of the molecule.",
      "scope": "Definition delimiting the selected cold water-dimer experiment and isolated computational model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "arunan2011-hbond-rationale",
          "locator": "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "For the model sign convention, negative dimerization DeltaEe and DeltaE0 correspond to positive De and D0. The geometrical preparation term distinguishes dimerization energy from frozen-fragment interaction energy.",
        "Model energy decomposition terms depend on the chosen formalism and fragment/orbital conventions; no unique measured electrostatic, induction, dispersion or partial-covalency fraction is inferred.",
        "Positive state-specific binding is not a guarantee of room-temperature population, universal lifetime, network cooperation or a common formation history."
      ]
    },
    {
      "id": "M-phys-rocher2011-water-dimer-context",
      "kind": "method",
      "statement": "Prepare neutral water dimers in a pulsed supersonic expansion of about 2% H2O in He, with estimated rotational temperature 10 +/- 5 K. Excite the donor bound-OH band at 3602 cm^-1; state-selective 2+1 REMPI detects water fragments, while velocity-map images constrain translational distributions. Use IR-on/off signal discrimination, NO2 photodissociation calibration and reconstruction before fitting energy conservation. The estimated initial dimer internal energy is 5 +/- 5 cm^-1.",
      "scope": "Rocher-Casterline 2011 cold molecular-beam acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-1 to 211101-3, Figures 1-4 and Equation 1: cold water-dimer preparation, state-selected fragments, VMI calibration and energy-conservation fits",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The supplied cold dimer is not an observation of bulk hydrogen-bond networks or a measured elementary association pathway. UV ionization is fragment detection after predissociation, not ionic hydrogen-bond formation.",
        "The spectra, selected fragment-state images and fitted D0 share one measurement chain. Eight images are not eight independent experimental studies. No raw images, calibration refit or full covariance replay is supplied."
      ],
      "contextIds": [
        "rocher2011-water-dimer"
      ]
    },
    {
      "id": "M-phys-water-dimer-dissociation",
      "kind": "method",
      "statement": "Infer D0 from energy conservation: initial internal energy plus IR photon energy equals D0 plus translational and both fragments rovibrational energies. State-selective REMPI fixes one fragment state; Gaussian features using known cofragment levels and a finite-resolution width are shifted jointly to match image structure and maximum velocities. Preserve the published adopted total uncertainty and unresolved printed discrepancies.",
      "scope": "Published Equation1 and fits, conditional on calibration, fragment-state assignments and internal-energy estimate.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-1 to 211101-3, Figures 1-4 and Equation 1: cold water-dimer preparation, state-selected fragments, VMI calibration and energy-conservation fits",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No new fitted spectrum, likelihood or detector-response witness is computed. The quoted uncertainty is the adopted source uncertainty, not a new confidence-level conversion."
      ],
      "contextIds": [
        "rocher2011-water-dimer"
      ]
    },
    {
      "id": "C-phys-water-dimer-dissociation",
      "kind": "review-finding",
      "statement": "The source adopts D0=1105 +/- 10 cm^-1, equivalently 13.2 +/- 0.12 kJ/mol, for neutral (H2O)2 dissociation to water monomers. This is a fitted state-specific dissociation energy from cold-dimer fragment velocity distributions, not De or an isolated measured hydrogen-bond force component.",
      "scope": "One source-reported low-temperature neutral-water-dimer energy inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The eight-image fit reports 1100 +/- 3 cm^-1 (2 sigma); the abstract and final uncertainty discussion adopt 1105 +/- 10 cm^-1. The 5 cm^-1 difference is compatible with the estimated initial internal energy of 5 +/- 5 cm^-1, but the reviewed text does not explicitly reconstruct that connection. This possible explanation is an inference, not an established source error or an independently reproduced correction.",
        "One page-4 sentence prints 13.2 +/- 0.05 kJ/mol, conflicting with +/- 0.12 in the abstract and final comparison. The adopted abstract/final pair is retained with this source inconsistency.",
        "The geometry and theoretical comparison mentioned in the introduction/discussion are inherited literature, not newly measured angles or independently reviewed computational studies. No bulk enthalpy, per-bond network energy or universal strength interval is inferred."
      ],
      "contextIds": [
        "rocher2011-water-dimer"
      ]
    },
    {
      "id": "M-phys-altun2018-water-dimer-context",
      "kind": "method",
      "statement": "Use the isolated neutral-water-dimer Conf1 geometry optimized at RI-MP2/aug-cc-pVTZ, including harmonic frequencies/ZPE at that level. Compute TightPNO DLPNO-CCSD(T) energies with frozen O1s cores, localized occupied/virtual orbitals, counterpoise BSSE correction and augmented triple/quadruple-zeta extrapolation. Compare LED energy components with the same paper DFT-SAPT partition under its stated basis and asymptotic-functional conventions.",
      "scope": "Selected Altun 2018 water-dimer model preparation and energy-partition conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 921-923, Computational Details and Theoretical Aspects, Equations 1-11: RI-MP2 geometry, DLPNO-CCSD(T)/LED, basis corrections and DFT-SAPT conventions",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a computational analysis, not a geometry measurement or room-temperature water simulation. The other water conformers have imaginary frequencies and are not admitted as stable populations.",
        "The paper DFT-SAPT implementation supplies an inherited gas-phase water ionization input; that underlying publication was not independently reviewed here. No electronic-structure solver or basis extrapolation is replayed.",
        "LED and DFT-SAPT organize polarization, electrostatics, exchange and dispersion differently. Similar total energies do not identify unique measured components or a literal ionic intermediate."
      ],
      "contextIds": [
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "M-phys-water-dimer-model",
      "kind": "method",
      "statement": "Keep the computed equilibrium geometry, negative electronic dimerization energy, harmonic zero-point correction and frozen-fragment interaction energy as different model outputs. Treat the source comparison to experiment as inherited evidence and any replacement of the harmonic ZPE by an external value as a hybrid calculation. Energy-component labels retain their LED or DFT-SAPT definitions.",
      "scope": "Interpretation contract for the selected Altun water-dimer outputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2011 D0 comparison is not another independent acquisition. The source external ZPE provenance is not promoted to a newly reviewed separate study or a pure prediction."
      ],
      "contextIds": [
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "C-phys-water-dimer-model",
      "kind": "review-finding",
      "statement": "For neutral water-dimer Conf1/s0, the RI-MP2 source reports O...O=2.908 Angstrom, H...O=1.943 Angstrom and O-H...O=173.6 degrees. Table1 gives DeltaEe=-4.95 kcal/mol, harmonic-ZPE DeltaE0=-2.82 kcal/mol and frozen-fragment DeltaEint=-5.01 kcal/mol. The model retains directional attractive binding and significant contributions beyond a bare permanent-dipole pair term.",
      "scope": "Selected isolated-water-dimer source computation, with kcal/mol sign and geometry conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are optimized model distances/angle, not directly measured or vibrationally averaged geometry. They are not universal hydrogen-bond lengths or angular cutoffs.",
        "The harmonic ZPE correction 2.13 kcal/mol does not yield the observed D0. Substituting inherited 1.72 kcal/mol gives source DeltaE0=-3.23 kcal/mol; agreement after substitution is hybrid and cannot be called a wholly independent pure-theory reproduction.",
        "The model has multiple counteracting terms. LED and DFT-SAPT component magnitudes differ; a whole hydrogen bond cannot be assigned a universal r^-6 potential or a uniquely measured partial-covalency fraction. The asymptotic dispersion-tail statement does not apply at every separation.",
        "Only Conf1 water-dimer quantities are admitted. No stable populations, HF-specific results, liquid/crystal/polymer structure, recognition performance or cooperative network nonadditivity is inferred."
      ],
      "contextIds": [
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "M-phys-hydrogen-bond-source-scope",
      "kind": "method",
      "statement": "Synthesize the definition authority with the one cold-dimer measurement and one isolated computational model, retaining both full contexts. Use the measured energy only with its adopted source uncertainty and discrepancies; use optimized geometry/partition outputs only with their method and inherited-input limits. Qualify broad network/application assertions without converting them to new measured studies.",
      "scope": "Literature-synthesis interpretation contract for original card2.7.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "arunan2011-hbond-definition",
          "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "arunan2011-hbond-rationale",
          "locator": "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle",
          "role": "method",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parent2.3 chemical bonding weight0.4, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 N_min=N_crit=2,N_sat=null have no matched causal estimator or universal measured threshold. A covalent donor is a structural definition, not the full molecular-formation history.",
        "Original parent2.4 ionic interaction/formation weight0.3, direction[2], mode[1], necessary/dependency10/arising and carrier1/0 minima1,N_sat=null are excluded as universal prerequisites; a neutral water dimer requires no prior free-ion formation.",
        "Original parent2.6 dispersion weight0.3, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 minima2,N_sat=null are not causal-stage or threshold evidence. A contribution in a joint energy model is not a distinct earlier physical stage.",
        "Intra- as well as intermolecular hydrogen bonds are included by the definition. Two monomers in the selected dimer specify its composition, not a universal minimum or critical number; no normalized replacement weights are introduced.",
        "Original Level2, Phase1, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern labels are catalogue/display classifications. Repeated terminology does not establish an autonomous physical arising, absence of bounded molecular complexes or a universal object/event distinction.",
        "Electrostatic, polarization, dispersion and partial-covalent interpretations do not establish a universal intermediate strength, selectivity ranking or new fundamental interaction. Energies and diagnostic evidence retain their system/state/method boundaries.",
        "Network cooperativity, molecular recognition, supramolecular organization and liquids/crystals/polymers are real application domains. Their full geometry, kinetics, thermodynamics, structural roles and recognition specificity require system-specific evidence beyond this isolated dimer; their existence is not blanket-excluded.",
        "The generic original theoretical and empirical paragraphs have null DOI/URL and are not independent publications. No unnamed crystallographic, bulk calorimetric or cooperative-network acquisition is admitted.",
        "The experimental and computational contexts remain distinct; the model paper comparison reuses prior experiment and an inherited external ZPE. No cloned study, common fitted likelihood, raw VMI reanalysis or new quantum-chemical reproduction is supplied."
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "C-phys-hydrogen-bond-source-scope",
      "kind": "review-finding",
      "statement": "Hydrogen-bond classification can retain intra/intermolecular donor-acceptor interactions with qualified evidence criteria. In the finite positive cases reviewed, a prepared neutral water dimer has a measured fitted dissociation energy and an isolated-water model has directional equilibrium geometry and counteracting interaction-energy contributions. These distinct results support scoped hydrogen-bond description without a universal strength hierarchy, network-cooperativity requirement or necessary chemical/ionic/dispersion emergence chain.",
      "scope": "Complete disposition of references/level-2.json /7 through selected definitions, finite findings and explicit broad-scope qualifications.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "arunan2011-hbond-definition",
          "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "arunan2011-hbond-rationale",
          "locator": "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle",
          "role": "supports",
          "note": "Actually reviewed published passage; no independent numerical replay or newly reviewed study is inferred from its references."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parent2.3 chemical bonding weight0.4, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 N_min=N_crit=2,N_sat=null have no matched causal estimator or universal measured threshold. A covalent donor is a structural definition, not the full molecular-formation history.",
        "Original parent2.4 ionic interaction/formation weight0.3, direction[2], mode[1], necessary/dependency10/arising and carrier1/0 minima1,N_sat=null are excluded as universal prerequisites; a neutral water dimer requires no prior free-ion formation.",
        "Original parent2.6 dispersion weight0.3, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 minima2,N_sat=null are not causal-stage or threshold evidence. A contribution in a joint energy model is not a distinct earlier physical stage.",
        "Intra- as well as intermolecular hydrogen bonds are included by the definition. Two monomers in the selected dimer specify its composition, not a universal minimum or critical number; no normalized replacement weights are introduced.",
        "Original Level2, Phase1, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern labels are catalogue/display classifications. Repeated terminology does not establish an autonomous physical arising, absence of bounded molecular complexes or a universal object/event distinction.",
        "Electrostatic, polarization, dispersion and partial-covalent interpretations do not establish a universal intermediate strength, selectivity ranking or new fundamental interaction. Energies and diagnostic evidence retain their system/state/method boundaries.",
        "Network cooperativity, molecular recognition, supramolecular organization and liquids/crystals/polymers are real application domains. Their full geometry, kinetics, thermodynamics, structural roles and recognition specificity require system-specific evidence beyond this isolated dimer; their existence is not blanket-excluded.",
        "The generic original theoretical and empirical paragraphs have null DOI/URL and are not independent publications. No unnamed crystallographic, bulk calorimetric or cooperative-network acquisition is admitted.",
        "The experimental and computational contexts remain distinct; the model paper comparison reuses prior experiment and an inherited external ZPE. No cloned study, common fitted likelihood, raw VMI reanalysis or new quantum-chemical reproduction is supplied."
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:hydrogen-bond-evidence-definition",
      "name": "Evidence-based intra/intermolecular hydrogen-bond classification",
      "kind": "definition",
      "description": "Use an evidence-based hydrogen-bond classification for an attractive X-H...Y interaction with positively polarized H, X more electronegative than H and an electron-rich acceptor atom or group. Donor and acceptor may occur within one molecule or between molecules. Qualified structural, spectroscopic and theoretical diagnostics support classification; the definition itself is not an observed experiment.",
      "claimIds": [
        "D-phys-hydrogen-bond-evidence-definition"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "arunan2011-hbond-definition",
          "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics"
        }
      ],
      "openObligations": [
        "Directionality and the usual red shift are tendencies: blue shifts, no shift, multiple donors/acceptors and borderline cases are explicitly allowed. No preferred angle or van der Waals radius comparison is an infallible necessary cutoff.",
        "Cooperative networks are possible multi-bond systems, not required of a single hydrogen bond. An intermolecular-only definition excludes legitimate intramolecular cases.",
        "Contributions and energetic strength depend on the system and environment. A fixed intermediate-strength band or universal dispersion < hydrogen bond < covalent ordering is not admitted.",
        "This operational definition does not supply a measured critical count, formation rate, recognition selectivity or an ontologically autonomous SOMA arising."
      ]
    },
    {
      "id": "phys:hydrogen-bond-state-energy-boundary",
      "name": "Hydrogen-bond state, fragment and energy-convention boundary",
      "kind": "definition",
      "description": "A hydrogen-bond energy must specify the molecular system, electronic/rovibrational state, separated fragments and energy convention. For the neutral water dimer, D0 dissociation to water monomers differs from electronic well depth De, a frozen-fragment interaction energy, thermal dimerization enthalpy and covalent O-H bond cleavage. Intramolecular hydrogen-bond partners cannot generally be separated without changing the rest of the molecule.",
      "claimIds": [
        "D-phys-hydrogen-bond-state-energy-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "arunan2011-hbond-rationale",
          "locator": "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning"
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies"
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components"
        }
      ],
      "openObligations": [
        "For the model sign convention, negative dimerization DeltaEe and DeltaE0 correspond to positive De and D0. The geometrical preparation term distinguishes dimerization energy from frozen-fragment interaction energy.",
        "Model energy decomposition terms depend on the chosen formalism and fragment/orbital conventions; no unique measured electrostatic, induction, dispersion or partial-covalency fraction is inferred.",
        "Positive state-specific binding is not a guarantee of room-temperature population, universal lifetime, network cooperation or a common formation history."
      ]
    },
    {
      "id": "phys:rocher2011-water-dimer-context",
      "name": "Cold water-dimer vibrational-predissociation measurement context",
      "kind": "context",
      "description": "Prepare neutral water dimers in a pulsed supersonic expansion of about 2% H2O in He, with estimated rotational temperature 10 +/- 5 K. Excite the donor bound-OH band at 3602 cm^-1; state-selective 2+1 REMPI detects water fragments, while velocity-map images constrain translational distributions. Use IR-on/off signal discrimination, NO2 photodissociation calibration and reconstruction before fitting energy conservation. The estimated initial dimer internal energy is 5 +/- 5 cm^-1.",
      "claimIds": [
        "M-phys-rocher2011-water-dimer-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-1 to 211101-3, Figures 1-4 and Equation 1: cold water-dimer preparation, state-selected fragments, VMI calibration and energy-conservation fits"
        }
      ],
      "openObligations": [
        "The supplied cold dimer is not an observation of bulk hydrogen-bond networks or a measured elementary association pathway. UV ionization is fragment detection after predissociation, not ionic hydrogen-bond formation.",
        "The spectra, selected fragment-state images and fitted D0 share one measurement chain. Eight images are not eight independent experimental studies. No raw images, calibration refit or full covariance replay is supplied."
      ]
    },
    {
      "id": "phys:water-dimer-dissociation",
      "name": "Cold neutral-water-dimer source-reported dissociation energy",
      "kind": "scoped-process",
      "description": "The source adopts D0=1105 +/- 10 cm^-1, equivalently 13.2 +/- 0.12 kJ/mol, for neutral (H2O)2 dissociation to water monomers. This is a fitted state-specific dissociation energy from cold-dimer fragment velocity distributions, not De or an isolated measured hydrogen-bond force component.",
      "claimIds": [
        "C-phys-water-dimer-dissociation"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies"
        }
      ],
      "openObligations": [
        "The eight-image fit reports 1100 +/- 3 cm^-1 (2 sigma); the abstract and final uncertainty discussion adopt 1105 +/- 10 cm^-1. The 5 cm^-1 difference is compatible with the estimated initial internal energy of 5 +/- 5 cm^-1, but the reviewed text does not explicitly reconstruct that connection. This possible explanation is an inference, not an established source error or an independently reproduced correction.",
        "One page-4 sentence prints 13.2 +/- 0.05 kJ/mol, conflicting with +/- 0.12 in the abstract and final comparison. The adopted abstract/final pair is retained with this source inconsistency.",
        "The geometry and theoretical comparison mentioned in the introduction/discussion are inherited literature, not newly measured angles or independently reviewed computational studies. No bulk enthalpy, per-bond network energy or universal strength interval is inferred."
      ]
    },
    {
      "id": "phys:altun2018-water-dimer-context",
      "name": "Isolated water-dimer geometry and DLPNO-CCSD(T)/LED model context",
      "kind": "context",
      "description": "Use the isolated neutral-water-dimer Conf1 geometry optimized at RI-MP2/aug-cc-pVTZ, including harmonic frequencies/ZPE at that level. Compute TightPNO DLPNO-CCSD(T) energies with frozen O1s cores, localized occupied/virtual orbitals, counterpoise BSSE correction and augmented triple/quadruple-zeta extrapolation. Compare LED energy components with the same paper DFT-SAPT partition under its stated basis and asymptotic-functional conventions.",
      "claimIds": [
        "M-phys-altun2018-water-dimer-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 921-923, Computational Details and Theoretical Aspects, Equations 1-11: RI-MP2 geometry, DLPNO-CCSD(T)/LED, basis corrections and DFT-SAPT conventions"
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle"
        }
      ],
      "openObligations": [
        "This is a computational analysis, not a geometry measurement or room-temperature water simulation. The other water conformers have imaginary frequencies and are not admitted as stable populations.",
        "The paper DFT-SAPT implementation supplies an inherited gas-phase water ionization input; that underlying publication was not independently reviewed here. No electronic-structure solver or basis extrapolation is replayed.",
        "LED and DFT-SAPT organize polarization, electrostatics, exchange and dispersion differently. Similar total energies do not identify unique measured components or a literal ionic intermediate."
      ]
    },
    {
      "id": "phys:water-dimer-model",
      "name": "Finite water-dimer model geometry and interaction-energy analysis",
      "kind": "scoped-process",
      "description": "For neutral water-dimer Conf1/s0, the RI-MP2 source reports O...O=2.908 Angstrom, H...O=1.943 Angstrom and O-H...O=173.6 degrees. Table1 gives DeltaEe=-4.95 kcal/mol, harmonic-ZPE DeltaE0=-2.82 kcal/mol and frozen-fragment DeltaEint=-5.01 kcal/mol. The model retains directional attractive binding and significant contributions beyond a bare permanent-dipole pair term.",
      "claimIds": [
        "C-phys-water-dimer-model"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components"
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle"
        }
      ],
      "openObligations": [
        "These are optimized model distances/angle, not directly measured or vibrationally averaged geometry. They are not universal hydrogen-bond lengths or angular cutoffs.",
        "The harmonic ZPE correction 2.13 kcal/mol does not yield the observed D0. Substituting inherited 1.72 kcal/mol gives source DeltaE0=-3.23 kcal/mol; agreement after substitution is hybrid and cannot be called a wholly independent pure-theory reproduction.",
        "The model has multiple counteracting terms. LED and DFT-SAPT component magnitudes differ; a whole hydrogen bond cannot be assigned a universal r^-6 potential or a uniquely measured partial-covalency fraction. The asymptotic dispersion-tail statement does not apply at every separation.",
        "Only Conf1 water-dimer quantities are admitted. No stable populations, HF-specific results, liquid/crystal/polymer structure, recognition performance or cooperative network nonadditivity is inferred."
      ]
    },
    {
      "id": "phys:hydrogen-bond-source-scope",
      "name": "Scoped hydrogen-bond definition, cold-dimer energy and model evidence",
      "kind": "scoped-process",
      "description": "Hydrogen-bond classification can retain intra/intermolecular donor-acceptor interactions with qualified evidence criteria. In the finite positive cases reviewed, a prepared neutral water dimer has a measured fitted dissociation energy and an isolated-water model has directional equilibrium geometry and counteracting interaction-energy contributions. These distinct results support scoped hydrogen-bond description without a universal strength hierarchy, network-cooperativity requirement or necessary chemical/ionic/dispersion emergence chain.",
      "claimIds": [
        "C-phys-hydrogen-bond-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "arunan2011-hbond-definition",
          "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics"
        },
        {
          "sourceId": "arunan2011-hbond-rationale",
          "locator": "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning"
        },
        {
          "sourceId": "rocher2011-water-dimer",
          "locator": "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies"
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components"
        },
        {
          "sourceId": "altun2018-water-dimer",
          "locator": "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/7"
        }
      ],
      "openObligations": [
        "Original parent2.3 chemical bonding weight0.4, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 N_min=N_crit=2,N_sat=null have no matched causal estimator or universal measured threshold. A covalent donor is a structural definition, not the full molecular-formation history.",
        "Original parent2.4 ionic interaction/formation weight0.3, direction[2], mode[1], necessary/dependency10/arising and carrier1/0 minima1,N_sat=null are excluded as universal prerequisites; a neutral water dimer requires no prior free-ion formation.",
        "Original parent2.6 dispersion weight0.3, direction[2], modes[0,1], necessary/dependency10/arising and carrier1/0 minima2,N_sat=null are not causal-stage or threshold evidence. A contribution in a joint energy model is not a distinct earlier physical stage.",
        "Intra- as well as intermolecular hydrogen bonds are included by the definition. Two monomers in the selected dimer specify its composition, not a universal minimum or critical number; no normalized replacement weights are introduced.",
        "Original Level2, Phase1, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern labels are catalogue/display classifications. Repeated terminology does not establish an autonomous physical arising, absence of bounded molecular complexes or a universal object/event distinction.",
        "Electrostatic, polarization, dispersion and partial-covalent interpretations do not establish a universal intermediate strength, selectivity ranking or new fundamental interaction. Energies and diagnostic evidence retain their system/state/method boundaries.",
        "Network cooperativity, molecular recognition, supramolecular organization and liquids/crystals/polymers are real application domains. Their full geometry, kinetics, thermodynamics, structural roles and recognition specificity require system-specific evidence beyond this isolated dimer; their existence is not blanket-excluded.",
        "The generic original theoretical and empirical paragraphs have null DOI/URL and are not independent publications. No unnamed crystallographic, bulk calorimetric or cooperative-network acquisition is admitted.",
        "The experimental and computational contexts remain distinct; the model paper comparison reuses prior experiment and an inherited external ZPE. No cloned study, common fitted likelihood, raw VMI reanalysis or new quantum-chemical reproduction is supplied."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:hydrogen-bond-evidence-definition-hydrogen-bond-state-energy-boundary",
      "source": "phys:hydrogen-bond-evidence-definition",
      "target": "phys:hydrogen-bond-state-energy-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Evidence-based classification does not fix a universal strength or separated-fragment energy convention.",
      "claimIds": [
        "D-phys-hydrogen-bond-state-energy-boundary"
      ]
    },
    {
      "id": "physics:rocher2011-water-dimer-context-water-dimer-dissociation",
      "source": "phys:rocher2011-water-dimer-context",
      "target": "phys:water-dimer-dissociation",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The VMI/REMPI preparation, calibration, fragment states and resolution condition the reported D0 fit.",
      "claimIds": [
        "M-phys-water-dimer-dissociation"
      ],
      "contextIds": [
        "rocher2011-water-dimer"
      ]
    },
    {
      "id": "physics:hydrogen-bond-state-energy-boundary-water-dimer-dissociation",
      "source": "phys:hydrogen-bond-state-energy-boundary",
      "target": "phys:water-dimer-dissociation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted D0 refers to separated water monomers and differs from covalent O-H cleavage, De and thermal enthalpy.",
      "claimIds": [
        "M-phys-water-dimer-dissociation"
      ],
      "contextIds": [
        "rocher2011-water-dimer"
      ]
    },
    {
      "id": "physics:altun2018-water-dimer-context-water-dimer-model",
      "source": "phys:altun2018-water-dimer-context",
      "target": "phys:water-dimer-model",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Optimized geometry and energy terms retain their RI-MP2 and DLPNO/LED model preparation.",
      "claimIds": [
        "M-phys-water-dimer-model"
      ],
      "contextIds": [
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:hydrogen-bond-evidence-definition-water-dimer-model",
      "source": "phys:hydrogen-bond-evidence-definition",
      "target": "phys:water-dimer-model",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected directional model illustrates evidence for a finite system, not a definition-derived measurement.",
      "claimIds": [
        "M-phys-water-dimer-model"
      ],
      "contextIds": [
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:hydrogen-bond-evidence-definition-hydrogen-bond-source-scope",
      "source": "phys:hydrogen-bond-evidence-definition",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Definition authority supplies classification criteria without becoming an experimental network finding.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:hydrogen-bond-state-energy-boundary-hydrogen-bond-source-scope",
      "source": "phys:hydrogen-bond-state-energy-boundary",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "State/channel and model-partition boundaries limit the meaning of the combined positive results.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:rocher2011-water-dimer-context-hydrogen-bond-source-scope",
      "source": "phys:rocher2011-water-dimer-context",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Retain the full cold acquisition and its numerical source limitations.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:altun2018-water-dimer-context-hydrogen-bond-source-scope",
      "source": "phys:altun2018-water-dimer-context",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Retain the full isolated-model and inherited-input conventions.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:water-dimer-dissociation-hydrogen-bond-source-scope",
      "source": "phys:water-dimer-dissociation",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source D0 remains one shared measurement-and-fit result, not independent support for network applications.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    },
    {
      "id": "physics:water-dimer-model-hydrogen-bond-source-scope",
      "source": "phys:water-dimer-model",
      "target": "phys:hydrogen-bond-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite calculated geometry and energy partition remain computational and method dependent.",
      "claimIds": [
        "M-phys-hydrogen-bond-source-scope"
      ],
      "contextIds": [
        "rocher2011-water-dimer",
        "altun2018-water-dimer"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:hydrogen-bond-evidence-definition",
      "role": "definition",
      "denotes": "Evidence-based intra/intermolecular hydrogen-bond classification under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hydrogen-bond-evidence-definition"
      ]
    },
    {
      "nodeId": "phys:hydrogen-bond-state-energy-boundary",
      "role": "definition",
      "denotes": "Hydrogen-bond state, fragment and energy-convention boundary under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hydrogen-bond-state-energy-boundary"
      ]
    },
    {
      "nodeId": "phys:rocher2011-water-dimer-context",
      "role": "experimental-context",
      "denotes": "Cold water-dimer vibrational-predissociation measurement context under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-rocher2011-water-dimer-context"
      ]
    },
    {
      "nodeId": "phys:water-dimer-dissociation",
      "role": "scoped-phenomenon",
      "denotes": "Cold neutral-water-dimer source-reported dissociation energy under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-water-dimer-dissociation"
      ]
    },
    {
      "nodeId": "phys:altun2018-water-dimer-context",
      "role": "model-context",
      "denotes": "Isolated water-dimer geometry and DLPNO-CCSD(T)/LED model context under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-altun2018-water-dimer-context"
      ]
    },
    {
      "nodeId": "phys:water-dimer-model",
      "role": "scoped-phenomenon",
      "denotes": "Finite water-dimer model geometry and interaction-energy analysis under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-water-dimer-model"
      ]
    },
    {
      "nodeId": "phys:hydrogen-bond-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped hydrogen-bond definition, cold-dimer energy and model evidence under the reviewed source and finite-system boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hydrogen-bond-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "rocher2011-water-dimer",
      "sourceId": "rocher2011-water-dimer",
      "studyType": "primary-experiment",
      "doi": "10.1063/1.3598339",
      "journal": "The Journal of Chemical Physics",
      "volume": "134",
      "issue": "21",
      "pages": "211101",
      "system": "Cold neutral water dimer dissociation to water monomer fragments",
      "preparation": "Prepare neutral water dimers in a pulsed supersonic expansion of about 2% H2O in He, with estimated rotational temperature 10 +/- 5 K. Excite the donor bound-OH band at 3602 cm^-1; state-selective 2+1 REMPI detects water fragments, while velocity-map images constrain translational distributions. Use IR-on/off signal discrimination, NO2 photodissociation calibration and reconstruction before fitting energy conservation. The estimated initial dimer internal energy is 5 +/- 5 cm^-1.",
      "observable": "State-selected H2O fragment velocity distributions following donor-OH vibrational predissociation; fitted D0 through energy conservation.",
      "finding": "The source adopts D0=1105 +/- 10 cm^-1, equivalently 13.2 +/- 0.12 kJ/mol, for neutral (H2O)2 dissociation to water monomers. This is a fitted state-specific dissociation energy from cold-dimer fragment velocity distributions, not De or an isolated measured hydrogen-bond force component.",
      "limitations": [
        "The supplied cold dimer is not an observation of bulk hydrogen-bond networks or a measured elementary association pathway. UV ionization is fragment detection after predissociation, not ionic hydrogen-bond formation.",
        "The spectra, selected fragment-state images and fitted D0 share one measurement chain. Eight images are not eight independent experimental studies. No raw images, calibration refit or full covariance replay is supplied.",
        "The eight-image fit reports 1100 +/- 3 cm^-1 (2 sigma); the abstract and final uncertainty discussion adopt 1105 +/- 10 cm^-1. The 5 cm^-1 difference is compatible with the estimated initial internal energy of 5 +/- 5 cm^-1, but the reviewed text does not explicitly reconstruct that connection. This possible explanation is an inference, not an established source error or an independently reproduced correction.",
        "One page-4 sentence prints 13.2 +/- 0.05 kJ/mol, conflicting with +/- 0.12 in the abstract and final comparison. The adopted abstract/final pair is retained with this source inconsistency.",
        "The geometry and theoretical comparison mentioned in the introduction/discussion are inherited literature, not newly measured angles or independently reviewed computational studies. No bulk enthalpy, per-bond network energy or universal strength interval is inferred."
      ],
      "readExtent": "full-published-scientific-main-text",
      "reviewedLocators": [
        "Published pages 211101-1 to 211101-3, Figures 1-4 and Equation 1: cold water-dimer preparation, state-selected fragments, VMI calibration and energy-conservation fits",
        "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.3598339",
      "correctionCheck": "Published title/authors/DOI/article identity and online1June/issue7June2011 dates match DOI registry; empty relation/no update-to item. Limited correction search found no explicit resolution of the printed discrepancies; not exhaustive."
    },
    {
      "id": "altun2018-water-dimer",
      "sourceId": "altun2018-water-dimer",
      "studyType": "computational-analysis",
      "doi": "10.3762/bjoc.14.79",
      "journal": "Beilstein Journal of Organic Chemistry",
      "volume": "14",
      "pages": "919-929",
      "system": "Isolated neutral-water-dimer Conf1 RI-MP2 geometry and DLPNO-CCSD(T)/LED energy analysis",
      "preparation": "Use the isolated neutral-water-dimer Conf1 geometry optimized at RI-MP2/aug-cc-pVTZ, including harmonic frequencies/ZPE at that level. Compute TightPNO DLPNO-CCSD(T) energies with frozen O1s cores, localized occupied/virtual orbitals, counterpoise BSSE correction and augmented triple/quadruple-zeta extrapolation. Compare LED energy components with the same paper DFT-SAPT partition under its stated basis and asymptotic-functional conventions.",
      "observable": "Computed equilibrium geometry, total dimerization/interaction energies and scheme-dependent energy components; no experimental acquisition.",
      "finding": "For neutral water-dimer Conf1/s0, the RI-MP2 source reports O...O=2.908 Angstrom, H...O=1.943 Angstrom and O-H...O=173.6 degrees. Table1 gives DeltaEe=-4.95 kcal/mol, harmonic-ZPE DeltaE0=-2.82 kcal/mol and frozen-fragment DeltaEint=-5.01 kcal/mol. The model retains directional attractive binding and significant contributions beyond a bare permanent-dipole pair term.",
      "limitations": [
        "This is a computational analysis, not a geometry measurement or room-temperature water simulation. The other water conformers have imaginary frequencies and are not admitted as stable populations.",
        "The paper DFT-SAPT implementation supplies an inherited gas-phase water ionization input; that underlying publication was not independently reviewed here. No electronic-structure solver or basis extrapolation is replayed.",
        "LED and DFT-SAPT organize polarization, electrostatics, exchange and dispersion differently. Similar total energies do not identify unique measured components or a literal ionic intermediate.",
        "These are optimized model distances/angle, not directly measured or vibrationally averaged geometry. They are not universal hydrogen-bond lengths or angular cutoffs.",
        "The harmonic ZPE correction 2.13 kcal/mol does not yield the observed D0. Substituting inherited 1.72 kcal/mol gives source DeltaE0=-3.23 kcal/mol; agreement after substitution is hybrid and cannot be called a wholly independent pure-theory reproduction.",
        "The model has multiple counteracting terms. LED and DFT-SAPT component magnitudes differ; a whole hydrogen bond cannot be assigned a universal r^-6 potential or a uniquely measured partial-covalency fraction. The asymptotic dispersion-tail statement does not apply at every separation.",
        "Only Conf1 water-dimer quantities are admitted. No stable populations, HF-specific results, liquid/crystal/polymer structure, recognition performance or cooperative network nonadditivity is inferred."
      ],
      "readExtent": "selected-published-computational-main-text-and-geometry",
      "reviewedLocators": [
        "Published pages 921-923, Computational Details and Theoretical Aspects, Equations 1-11: RI-MP2 geometry, DLPNO-CCSD(T)/LED, basis corrections and DFT-SAPT conventions",
        "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
        "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://www.beilstein-journals.org/bjoc/articles/14/79",
      "correctionCheck": "Publisher HTML/PDF identity, DOI/authors/date25April2018 checked; limited title/DOI correction search found no explicit correction. Crossref API429; no claim of registry correction coverage or exhaustive later audit.",
      "issue": ""
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "arunan2011-hbond-definition",
      "kind": "research-publication",
      "title": "Definition of the hydrogen bond (IUPAC Recommendations 2011)",
      "authors": [
        "E. Arunan",
        "G. R. Desiraju",
        "R. A. Klein",
        "J. Sadlej",
        "S. Scheiner",
        "I. Alkorta",
        "D. C. Clary",
        "R. H. Crabtree",
        "J. J. Dannenberg",
        "P. Hobza",
        "H. G. Kjaergaard",
        "A. C. Legon",
        "B. Mennucci",
        "D. J. Nesbitt"
      ],
      "year": 2011,
      "doi": "10.1351/PAC-REC-10-01-02",
      "url": "https://publications.iupac.org/pac/pdf/2011/pdf/8308x1637.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-definition-passages",
        "locators": [
          "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics"
        ],
        "limit": "Official publisher indexed primary text, including the definition, criteria, characteristics and footnotes, was read; direct PDF retrieval returned HTTP403. This is an IUPAC definition recommendation, not an experimental acquisition or full primary literature audit. Older author drafts are not substituted. Identity/date checked against DOI registration; empty relation and no update-to item, with a limited title/DOI correction search. Acknowledgment: © IUPAC 2011."
      }
    },
    {
      "id": "arunan2011-hbond-rationale",
      "kind": "research-publication",
      "title": "Defining the hydrogen bond: An account (IUPAC Technical Report)",
      "authors": [
        "E. Arunan",
        "G. R. Desiraju",
        "R. A. Klein",
        "J. Sadlej",
        "S. Scheiner",
        "I. Alkorta",
        "D. C. Clary",
        "R. H. Crabtree",
        "J. J. Dannenberg",
        "P. Hobza",
        "H. G. Kjaergaard",
        "A. C. Legon",
        "B. Mennucci",
        "D. J. Nesbitt"
      ],
      "year": 2011,
      "doi": "10.1351/PAC-REP-10-01-01",
      "url": "https://publications.iupac.org/pac/pdf/2011/pdf/8308x1619.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-definition-rationale-passages",
        "locators": [
          "Published pages 1622-1623, Section 2.2, and page 1628: donors/acceptors, intramolecular energy limitation and method-dependent interaction-energy partitioning"
        ],
        "limit": "Read selected official publisher indexed donor/acceptor and theoretical-energy passages and conclusion p.1630; direct PDF retrieval returned HTTP403. Rationale for the authors definition, not new experimental support and not an independent reading of the studies it cites. Identity/date matched to DOI registration; empty relation and no update-to item is not exhaustive correction coverage. Acknowledgment: © IUPAC 2011."
      }
    },
    {
      "id": "rocher2011-water-dimer",
      "kind": "research-publication",
      "title": "Communication: Determination of the bond dissociation energy (D0) of the water dimer, (H2O)2, by velocity map imaging",
      "authors": [
        "B. E. Rocher-Casterline",
        "L. C. Ch’ng",
        "A. K. Mollner",
        "H. Reisler"
      ],
      "year": 2011,
      "doi": "10.1063/1.3598339",
      "url": "https://dornsife.usc.edu/reisler-lab/wp-content/uploads/sites/443/2024/07/101.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text",
        "locators": [
          "Published pages 211101-1 to 211101-3, Figures 1-4 and Equation 1: cold water-dimer preparation, state-selected fragments, VMI calibration and energy-conservation fits",
          "Published pages 211101-3 to 211101-4 and abstract: eight-image fit, adopted D0, uncertainty budget and unresolved printed numerical discrepancies"
        ],
        "limit": "All four scientific pages read, including figures, Equation 1 and numerical uncertainty discussion; pp.3-4 visually inspected. The 1100 cm^-1 fit and adopted 1105 cm^-1 result remain distinct, with their possible connection to the initial internal energy explicitly qualified. The 0.05-versus-0.12 kJ/mol printed uncertainty conflict is retained. No raw image reanalysis, detector/calibration replay or independent review of the cited theory and prior thermal studies. DOI identity and online 1 June/issue 7 June 2011 dates checked; registry has no update item and title/DOI search found no explicit resolution of the discrepancies."
      }
    },
    {
      "id": "altun2018-water-dimer",
      "kind": "research-publication",
      "title": "Local energy decomposition analysis of hydrogen-bonded dimers within a domain-based pair natural orbital coupled cluster study",
      "authors": [
        "A. Altun",
        "F. Neese",
        "G. Bistoni"
      ],
      "year": 2018,
      "doi": "10.3762/bjoc.14.79",
      "url": "https://www.beilstein-journals.org/bjoc/articles/14/79",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-computational-main-text-and-geometry",
        "locators": [
          "Published pages 921-923, Computational Details and Theoretical Aspects, Equations 1-11: RI-MP2 geometry, DLPNO-CCSD(T)/LED, basis corrections and DFT-SAPT conventions",
          "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
          "Supporting Information page S3, Section 1.1, Conf1 s0: RI-MP2/aug-cc-pVTZ water-dimer O-O and H-O distances and O-H-O angle"
        ],
        "limit": "Read methods pp.921-923, water-dimer Table1/Figs3-5/results pp.923-926, conformer/interpretation/conclusion p.927 and SI p.S3 Conf1 geometry. This finite water-dimer computation is not an experimental acquisition, a new HF result, a replay of the entire SI or an independent primary review of inherited ZPE/ionization inputs. Publisher title/authors/DOI/date checked; no explicit correction found in limited title/DOI search. Crossref API returned429. CC-BY4.0; attribution to Altun, Neese and Bistoni retained."
      }
    }
  ]
};

/** Preserve qualified classification, water-dimer measurement and model-dependent energy conventions. */
export function validateHydrogenBondContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Hydrogen bond ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
