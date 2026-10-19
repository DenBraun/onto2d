import assert from "node:assert/strict";

export const CRYSTAL_ORDER_CHECKS = new Map();
export const CRYSTAL_ORDER_ANALYTICAL_SOURCES = new Map();
export const CRYSTAL_ORDER_STUDY_TYPES = new Map([["shechtman1984-alloy", "primary-experiment"], ["bernard2011-hard-disks", "computational-analysis"]]);
export const CRYSTAL_ORDER_ADMISSION = {
  "definitions": [
    [
      "phys:spatial-order-symmetry-boundary",
      "D-phys-spatial-order-symmetry-boundary"
    ],
    [
      "phys:hard-disk-equilibrium-model",
      "D-phys-hard-disk-equilibrium-model"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "shechtman1984-alloy-context",
      "M-phys-shechtman1984-alloy-context",
      [
        "shechtman1984-alloy"
      ]
    ],
    [
      "bernard2011-hard-disk-context",
      "M-phys-bernard2011-hard-disk-context",
      [
        "bernard2011-hard-disks"
      ]
    ]
  ],
  "observations": [
    [
      "shechtman-icosahedral-order",
      "C-phys-shechtman-icosahedral-order",
      [
        "shechtman1984-alloy"
      ]
    ],
    [
      "bernard-hard-disk-ordering",
      "C-phys-bernard-hard-disk-ordering",
      [
        "bernard2011-hard-disks"
      ]
    ],
    [
      "crystal-order-source-scope",
      "C-phys-crystal-order-source-scope",
      [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    ]
  ],
  "dependencies": [
    [
      "shechtman1984-alloy-context-shechtman-icosahedral-order",
      "shechtman1984-alloy-context",
      "shechtman-icosahedral-order",
      "M-phys-shechtman1984-alloy-context",
      "measurement-context"
    ],
    [
      "spatial-order-symmetry-boundary-shechtman-icosahedral-order",
      "spatial-order-symmetry-boundary",
      "shechtman-icosahedral-order",
      "M-phys-shechtman-icosahedral-order",
      "interpretation-dependency"
    ],
    [
      "bernard2011-hard-disk-context-bernard-hard-disk-ordering",
      "bernard2011-hard-disk-context",
      "bernard-hard-disk-ordering",
      "M-phys-bernard2011-hard-disk-context",
      "interpretation-dependency"
    ],
    [
      "hard-disk-equilibrium-model-bernard-hard-disk-ordering",
      "hard-disk-equilibrium-model",
      "bernard-hard-disk-ordering",
      "M-phys-bernard-hard-disk-ordering",
      "interpretation-dependency"
    ],
    [
      "spatial-order-symmetry-boundary-bernard-hard-disk-ordering",
      "spatial-order-symmetry-boundary",
      "bernard-hard-disk-ordering",
      "M-phys-bernard-hard-disk-ordering",
      "interpretation-dependency"
    ],
    [
      "spatial-order-symmetry-boundary-crystal-order-source-scope",
      "spatial-order-symmetry-boundary",
      "crystal-order-source-scope",
      "M-phys-crystal-order-source-scope",
      "interpretation-dependency"
    ],
    [
      "hard-disk-equilibrium-model-crystal-order-source-scope",
      "hard-disk-equilibrium-model",
      "crystal-order-source-scope",
      "M-phys-crystal-order-source-scope",
      "interpretation-dependency"
    ],
    [
      "shechtman-icosahedral-order-crystal-order-source-scope",
      "shechtman-icosahedral-order",
      "crystal-order-source-scope",
      "M-phys-crystal-order-source-scope",
      "interpretation-dependency"
    ],
    [
      "bernard-hard-disk-ordering-crystal-order-source-scope",
      "bernard-hard-disk-ordering",
      "crystal-order-source-scope",
      "M-phys-crystal-order-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "shechtman1984-alloy",
    "bernard2011-hard-disks"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-shechtman1984-alloy-context",
      [
        "shechtman1984-icosahedral"
      ]
    ],
    [
      "M-phys-bernard2011-hard-disk-context",
      [
        "bernard2011-hard-disks"
      ]
    ],
    [
      "M-phys-shechtman-icosahedral-order",
      [
        "shechtman1984-icosahedral"
      ]
    ],
    [
      "C-phys-shechtman-icosahedral-order",
      [
        "shechtman1984-icosahedral"
      ]
    ],
    [
      "M-phys-bernard-hard-disk-ordering",
      [
        "bernard2011-hard-disks"
      ]
    ],
    [
      "C-phys-bernard-hard-disk-ordering",
      [
        "bernard2011-hard-disks"
      ]
    ],
    [
      "M-phys-crystal-order-source-scope",
      [
        "bernard2011-hard-disks",
        "shechtman1984-icosahedral"
      ]
    ],
    [
      "C-phys-crystal-order-source-scope",
      [
        "bernard2011-hard-disks",
        "shechtman1984-icosahedral"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-spatial-order-symmetry-boundary",
      "kind": "review-finding",
      "statement": "Spatial ordering is specified here through diffraction, positional correlations, bond-orientational correlations, specimen size and preparation. Periodic Bravais-lattice translation is one possible ordering description; it is not imposed as a universal prerequisite for the finite icosahedral alloy evidence. In the selected two-dimensional hard-disk model, a solid has algebraically decaying positional correlations rather than nondecaying positional order, and the hexatic has short-range positional order with very slowly decaying orientational correlations. A finite ordered specimen, a thermodynamic phase assignment and a transition pathway are distinct claims.",
      "scope": "Operational order/symmetry and finite-size boundary for the two selected studies.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No universal modern crystallographic definition, unique quasiperiodic tiling or atom-by-atom reconstruction is inferred solely from sharp diffraction.",
        "The two-dimensional model statement does not assert that every two-dimensional system with arbitrary interactions or boundaries lacks long-range positional order.",
        "A finite-grain correlation bound and finite-box scaling must not be rewritten as direct observations of an infinite system."
      ]
    },
    {
      "id": "D-phys-hard-disk-equilibrium-model",
      "kind": "review-finding",
      "statement": "The selected model contains N structureless disks of radius sigma in a two-dimensional periodic square of area V=L^2, with packing fraction eta=N*pi*sigma^2/V. Nonoverlapping configurations have zero potential energy and overlaps are forbidden. At fixed packing fraction its equilibrium phase behavior is independent of temperature, while pressure is proportional to temperature. Dense ordering can therefore be entropic without an attractive pair potential. Local sixfold bond orientation is Psi_k=average_l exp(6*i*phi_kl), with neighbors supplied by the stated construction, and sample orientation is Psi=N^-1*sum_k Psi_k.",
      "scope": "Specified hard-disk equilibrium model and order-parameter convention.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Sigma denotes radius, not diameter. V is area, not three-dimensional volume. The periodic square and hard-core exclusion are supplied assumptions.",
        "The absence of ionic, permanent-dipole and dispersion attractions in this mathematical model does not assert that microscopic forces are absent from the real Al-Mn alloy.",
        "No liquid-gas distinction exists in this hard-disk model. The model supplies neither a quantum binding energy nor a critical number of ions, molecules or dipoles."
      ]
    },
    {
      "id": "M-phys-shechtman1984-alloy-context",
      "kind": "method",
      "statement": "Use the reported rapidly cooled Al-Mn alloy specimens, especially Al-14 at.% Mn, and their finite grains up to about 2 micrometers. Rotate specimens to relate selected-area electron diffraction patterns to icosahedral axes. Keep dark-field imaging, convergent-beam microdiffraction and Cu K-alpha powder diffraction as reported complementary checks against a conventional multiple-twin explanation. Retain the separate morphology/segregation inference and the stated annealing durations when interpreting formation or metastability.",
      "scope": "One primary experimental publication with diffraction/imaging and reported thermal-treatment observations.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No raw diffraction intensities, angular-error propagation, atom-coordinate refinement, new imaging, calorimetry or time-resolved growth measurement is reconstructed.",
        "The publication provides finite specimen/control evidence, without a pooled uncertainty budget or a measured infinite correlation length.",
        "Morphology and solute segregation motivate the source first-order growth interpretation; this is not a measured latent heat or an equilibrium phase-boundary determination."
      ],
      "contextIds": [
        "shechtman1984-alloy"
      ]
    },
    {
      "id": "M-phys-bernard2011-hard-disk-context",
      "kind": "method",
      "statement": "Use the reported constant-NV periodic hard-disk calculations with N=256^2, 512^2 and up to 1024^2 disks. The SEC event-chain algorithm moves in positive x or y directions, breaks detailed balance and preserves global balance. Interpret reported coexistence snapshots, the equilibrium equation of state and its Maxwell/interface analysis together with positional and bond-orientational correlations. Use the numerically located first-peak wave vector k_peak of the computed structure factor for positional correlations, rather than imposing the perfect triangular-lattice k_perf. Retain comparison of crystal/liquid initial conditions, autocorrelation and finite-size checks, and the supplement Gaussian sampling-error procedure.",
      "scope": "One computational study, including its author supplement, without a new simulation or experimental acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Time in the calculation is measured in disk displacements; CPU runtime, coarsening and algorithmic equilibration are not physical nucleation or melting rates.",
        "The supplement obtains 64 essentially independent configurations from a long Markov chain and uses subsequent parallel runs for Gaussian error estimates. These are conditional sampling errors, not independent physical experiments or universal confidence intervals on phase boundaries.",
        "Pressure uses the fitted contact value of the pair-correlation function. No contact-fit, equation-of-state integration, raw configuration analysis or covariance replay is supplied.",
        "The supplement code on pages 10-12 was read without execution; linked configuration files were not downloaded."
      ],
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "M-phys-shechtman-icosahedral-order",
      "kind": "method",
      "statement": "Infer finite icosahedral orientational order from the related specimen-rotation diffraction patterns and the whole-grain/microdiffraction/powder controls reported in this single study. Keep the failure of the reviewed Bravais-lattice/multiple-twin explanations distinct from a uniquely solved modern atomic structure. Treat persistence or conversion under the reported anneals as protocol-dependent metastability evidence, with morphology-based growth interpretation distinct from an equilibrium transition measurement.",
      "scope": "Interpretation method for the finite Al-Mn ordering result.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The authors early qualitative random packing of parallel icosahedra is not admitted as an established atomic structure.",
        "Historical use of crystallization for conversion to ordinary Al6Mn does not imply that the initial icosahedral material lacked spatial order."
      ],
      "contextIds": [
        "shechtman1984-alloy"
      ]
    },
    {
      "id": "C-phys-shechtman-icosahedral-order",
      "kind": "review-finding",
      "statement": "For the selected rapidly cooled Al-Mn material, the source reports sharp electron diffraction with six fivefold, ten threefold and fifteen twofold axes of an icosahedral point group, with orientational correlation across finite grains up to about 2 micrometers. Dark-field imaging, small-volume convergent-beam diffraction and powder diffraction support the authors rejection of a conventional multiply twinned Bravais-lattice explanation. The icosahedral phase is metastable under the reported protocols: no detectable subsequent crystallization after 6 hours at 300 degrees C or 1 hour at 350 degrees C, and conversion to stable Al6Mn after 1 hour at 400 degrees C.",
      "scope": "Publication-supported finite alloy order and annealing observations, rather than universal periodic crystallinity.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No infinite correlation length, unique quasiperiodic atom arrangement, modern tiling model or universal absence of alternative structures is established by these selected observations.",
        "The three annealing protocols do not determine an equilibrium transition temperature of 400 degrees C or a temperature-independent lifetime.",
        "Nucleation/growth and segregation provide the reported morphological first-order interpretation; no latent heat, calorimetric critical behavior, real-time growth curve or quantitative kinetic coefficient is admitted."
      ],
      "contextIds": [
        "shechtman1984-alloy"
      ]
    },
    {
      "id": "M-phys-bernard-hard-disk-ordering",
      "kind": "method",
      "statement": "Combine the finite-N coexistence pattern, equilibrium pressure-loop form and interface free energy per disk proportional to N^-1/2 to assess the first-order liquid-hexatic transition. Analyze the higher-density single phase using positional and orientational correlations at the computed structure-factor peak, with the stated finite-size checks. Keep a finite equilibrium interface loop distinct from a kinetic hysteresis loop, and keep the authors theory-assisted hexatic assignment distinct from a directly resolved orientational power-law exponent.",
      "scope": "Interpretation method for the single hard-disk computational study.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Near eta=0.718 the orientational correlation decays too slowly for the authors to numerically distinguish quasi-long-range from true long-range order; the hexatic interpretation also invokes the incompatibility of short-range positional and true long-range orientational order in this framework.",
        "At the hexatic-solid transition the authors report finite-size effects at the largest distances. The approximately r^-1/3 positional behavior over the resolved range is not an exact measured universal exponent for every material."
      ],
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "C-phys-bernard-hard-disk-ordering",
      "kind": "review-finding",
      "statement": "The reported two-dimensional hard-disk calculations support first-order liquid-hexatic coexistence over approximately eta=0.700 to 0.716, using coexistence patterns, the equilibrium equation of state and interface scaling. At eta=0.718 the source finds exponential positional decay on a scale of about 100 disk radii and very slow orientational decay, interpreted as a single hexatic phase. Near eta=0.720 the positional correlations become approximately algebraic, near r^-1/3 over the resolved range, and the source identifies a continuous hexatic-solid transition. Thus this specified entropic model has ordered regimes and two distinct transition characters.",
      "scope": "Publication-supported computational ordering and melting interpretation in the selected two-dimensional model.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The coexistence endpoints and the near-0.720 transition are source-specific approximate values, not exact thresholds or experimentally measured temperatures.",
        "The orientational data at eta=0.718 alone do not resolve quasi-long-range versus true long-range behavior; the phase assignment includes the framework argument retained in the method.",
        "Large-distance finite-size effects remain at the continuous transition. The hard-disk result does not establish that all ordering transitions are continuous, critical, first order or described by the full two-continuous-transition KTHNY scenario.",
        "The Monte Carlo displacement clock is not a physical kinetic law; no new simulation or experimental reproduction is claimed."
      ],
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "M-phys-crystal-order-source-scope",
      "kind": "method",
      "statement": "Synthesize the finite physical alloy evidence and the separately specified hard-disk equilibrium model while preserving their distinct preparation, dimensionality, readout, uncertainty and interpretation boundaries. Use the alloy study for finite non-Bravais-periodic icosahedral order and protocol-dependent metastability, and the computational study for a positive entropic ordering mechanism with distinct first-order and continuous transitions. Do not transfer the model mechanism, transition densities, symmetry or kinetic clock to the alloy.",
      "scope": "Two-context literature-synthesis method for original card 2.9.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution",
          "role": "method",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original Level 2 card /9 delimits reconstruction; its labels and defaults are not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original periodic lattice positions and universal translational order are narrowed: finite icosahedral alloy order and two-dimensional quasi-long-range positional order are explicitly retained. No single infinite periodic architecture is imposed on all ordered solids.",
        "Original collective stabilization and coordinated reconfiguration survive only as these stated structural/model inferences. The finite Al-Mn grains and hard-disk configurations are different systems and are not mutual replications, a common force fit or one transition pathway.",
        "Temperature enters the alloy annealing protocols and pressure/density enter the hard-disk equilibrium model. A universal response to arbitrary temperature, pressure, composition or external fields, and a complete phase map, are not established here.",
        "Order parameters and different transition characters are retained positively in the hard-disk study. First-order coexistence is distinct from the continuous hexatic-solid transition; critical behavior and symmetry breaking/restoration are not mandatory for every structural transition.",
        "Elasticity, conductivity, anisotropic transport and other symmetry-governed material responses are not measured by these selected records. The hard-disk discussion of entropic elastic effects is not a new measured material constitutive law.",
        "Original necessary parents 2.4 ionic interactions, 2.6 dispersion and 2.8 molecular polarization are not universal requirements for the selected hard-disk ordering model. The model does not establish which microscopic contributions stabilize the real Al-Mn alloy.",
        "Original weights 0.4/0.35/0.25, directions [3], interaction modes [0,1]/[0,1]/[1], dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, N_min=N_crit=2 for all parents and null N_sat are catalogue provenance. A disk pair, finite grain or chosen simulation size does not establish a critical number of ions, dispersion carriers, molecular dipoles or a two-unit crystallization threshold.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. The SOMA pattern-level/higher-order label is not an independently observed physical entity or causal law.",
        "Generic original diffraction/neutron/calorimetry/growth and statistical-mechanical placeholders are replaced only by the actual reviewed diffraction/imaging/annealing study and hard-disk calculation. No neutron experiment, latent-heat measurement, all-crystal growth proof or new mathematical universality theorem is supplied.",
        "Future card 2.15 may reuse these exact source and study records for a bounded phase-regime discussion. This reconstruction does not pre-admit its general coexistence/metastability/critical-point/kinetic-pathway claims.",
        "No raw-data refit, diffraction digitization, new alloy growth, atom-coordinate solution, Monte Carlo execution, configuration-file analysis, physical rate inference or independently reproduced experiment is claimed."
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "C-phys-crystal-order-source-scope",
      "kind": "review-finding",
      "statement": "The selected primary diffraction study supports finite icosahedral Al-Mn order that is not explained as a conventional periodic Bravais crystal or its multiple twins, together with protocol-dependent metastability. A separate periodic-box hard-disk study supplies a positive, purely entropic model of collective spatial ordering, first-order liquid-hexatic coexistence and a continuous hexatic-solid transition. These bounded cases support structural ordering and transition distinctions without a universal periodic-lattice requirement, universal critical behavior or a necessary ionic/dispersion/dipole precursor chain.",
      "scope": "Literature synthesis of two distinct primary contexts, with original card /9 fully dispositioned.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution",
          "role": "supports",
          "note": "Actually reviewed primary passage; no independent data reconstruction or simulation replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original Level 2 card /9 delimits reconstruction; its labels and defaults are not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original periodic lattice positions and universal translational order are narrowed: finite icosahedral alloy order and two-dimensional quasi-long-range positional order are explicitly retained. No single infinite periodic architecture is imposed on all ordered solids.",
        "Original collective stabilization and coordinated reconfiguration survive only as these stated structural/model inferences. The finite Al-Mn grains and hard-disk configurations are different systems and are not mutual replications, a common force fit or one transition pathway.",
        "Temperature enters the alloy annealing protocols and pressure/density enter the hard-disk equilibrium model. A universal response to arbitrary temperature, pressure, composition or external fields, and a complete phase map, are not established here.",
        "Order parameters and different transition characters are retained positively in the hard-disk study. First-order coexistence is distinct from the continuous hexatic-solid transition; critical behavior and symmetry breaking/restoration are not mandatory for every structural transition.",
        "Elasticity, conductivity, anisotropic transport and other symmetry-governed material responses are not measured by these selected records. The hard-disk discussion of entropic elastic effects is not a new measured material constitutive law.",
        "Original necessary parents 2.4 ionic interactions, 2.6 dispersion and 2.8 molecular polarization are not universal requirements for the selected hard-disk ordering model. The model does not establish which microscopic contributions stabilize the real Al-Mn alloy.",
        "Original weights 0.4/0.35/0.25, directions [3], interaction modes [0,1]/[0,1]/[1], dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, N_min=N_crit=2 for all parents and null N_sat are catalogue provenance. A disk pair, finite grain or chosen simulation size does not establish a critical number of ions, dispersion carriers, molecular dipoles or a two-unit crystallization threshold.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. The SOMA pattern-level/higher-order label is not an independently observed physical entity or causal law.",
        "Generic original diffraction/neutron/calorimetry/growth and statistical-mechanical placeholders are replaced only by the actual reviewed diffraction/imaging/annealing study and hard-disk calculation. No neutron experiment, latent-heat measurement, all-crystal growth proof or new mathematical universality theorem is supplied.",
        "Future card 2.15 may reuse these exact source and study records for a bounded phase-regime discussion. This reconstruction does not pre-admit its general coexistence/metastability/critical-point/kinetic-pathway claims.",
        "No raw-data refit, diffraction digitization, new alloy growth, atom-coordinate solution, Monte Carlo execution, configuration-file analysis, physical rate inference or independently reproduced experiment is claimed."
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:spatial-order-symmetry-boundary",
      "name": "Specified spatial order, symmetry and finite-size boundary",
      "kind": "definition",
      "description": "Spatial ordering is specified here through diffraction, positional correlations, bond-orientational correlations, specimen size and preparation. Periodic Bravais-lattice translation is one possible ordering description; it is not imposed as a universal prerequisite for the finite icosahedral alloy evidence. In the selected two-dimensional hard-disk model, a solid has algebraically decaying positional correlations rather than nondecaying positional order, and the hexatic has short-range positional order with very slowly decaying orientational correlations. A finite ordered specimen, a thermodynamic phase assignment and a transition pathway are distinct claims.",
      "claimIds": [
        "D-phys-spatial-order-symmetry-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        }
      ],
      "openObligations": [
        "No universal modern crystallographic definition, unique quasiperiodic tiling or atom-by-atom reconstruction is inferred solely from sharp diffraction.",
        "The two-dimensional model statement does not assert that every two-dimensional system with arbitrary interactions or boundaries lacks long-range positional order.",
        "A finite-grain correlation bound and finite-box scaling must not be rewritten as direct observations of an infinite system."
      ]
    },
    {
      "id": "phys:hard-disk-equilibrium-model",
      "name": "Two-dimensional hard-disk equilibrium model",
      "kind": "definition",
      "description": "The selected model contains N structureless disks of radius sigma in a two-dimensional periodic square of area V=L^2, with packing fraction eta=N*pi*sigma^2/V. Nonoverlapping configurations have zero potential energy and overlaps are forbidden. At fixed packing fraction its equilibrium phase behavior is independent of temperature, while pressure is proportional to temperature. Dense ordering can therefore be entropic without an attractive pair potential. Local sixfold bond orientation is Psi_k=average_l exp(6*i*phi_kl), with neighbors supplied by the stated construction, and sample orientation is Psi=N^-1*sum_k Psi_k.",
      "claimIds": [
        "D-phys-hard-disk-equilibrium-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis"
        }
      ],
      "openObligations": [
        "Sigma denotes radius, not diameter. V is area, not three-dimensional volume. The periodic square and hard-core exclusion are supplied assumptions.",
        "The absence of ionic, permanent-dipole and dispersion attractions in this mathematical model does not assert that microscopic forces are absent from the real Al-Mn alloy.",
        "No liquid-gas distinction exists in this hard-disk model. The model supplies neither a quantum binding energy nor a critical number of ions, molecules or dipoles."
      ]
    },
    {
      "id": "phys:shechtman1984-alloy-context",
      "name": "Al-Mn diffraction, imaging and annealing context",
      "kind": "context",
      "description": "Use the reported rapidly cooled Al-Mn alloy specimens, especially Al-14 at.% Mn, and their finite grains up to about 2 micrometers. Rotate specimens to relate selected-area electron diffraction patterns to icosahedral axes. Keep dark-field imaging, convergent-beam microdiffraction and Cu K-alpha powder diffraction as reported complementary checks against a conventional multiple-twin explanation. Retain the separate morphology/segregation inference and the stated annealing durations when interpreting formation or metastability.",
      "claimIds": [
        "M-phys-shechtman1984-alloy-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        }
      ],
      "openObligations": [
        "No raw diffraction intensities, angular-error propagation, atom-coordinate refinement, new imaging, calorimetry or time-resolved growth measurement is reconstructed.",
        "The publication provides finite specimen/control evidence, without a pooled uncertainty budget or a measured infinite correlation length.",
        "Morphology and solute segregation motivate the source first-order growth interpretation; this is not a measured latent heat or an equilibrium phase-boundary determination."
      ]
    },
    {
      "id": "phys:bernard2011-hard-disk-context",
      "name": "Hard-disk equilibrium sampling and correlation context",
      "kind": "context",
      "description": "Use the reported constant-NV periodic hard-disk calculations with N=256^2, 512^2 and up to 1024^2 disks. The SEC event-chain algorithm moves in positive x or y directions, breaks detailed balance and preserves global balance. Interpret reported coexistence snapshots, the equilibrium equation of state and its Maxwell/interface analysis together with positional and bond-orientational correlations. Use the numerically located first-peak wave vector k_peak of the computed structure factor for positional correlations, rather than imposing the perfect triangular-lattice k_perf. Retain comparison of crystal/liquid initial conditions, autocorrelation and finite-size checks, and the supplement Gaussian sampling-error procedure.",
      "claimIds": [
        "M-phys-bernard2011-hard-disk-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution"
        }
      ],
      "openObligations": [
        "Time in the calculation is measured in disk displacements; CPU runtime, coarsening and algorithmic equilibration are not physical nucleation or melting rates.",
        "The supplement obtains 64 essentially independent configurations from a long Markov chain and uses subsequent parallel runs for Gaussian error estimates. These are conditional sampling errors, not independent physical experiments or universal confidence intervals on phase boundaries.",
        "Pressure uses the fitted contact value of the pair-correlation function. No contact-fit, equation-of-state integration, raw configuration analysis or covariance replay is supplied.",
        "The supplement code on pages 10-12 was read without execution; linked configuration files were not downloaded."
      ]
    },
    {
      "id": "phys:shechtman-icosahedral-order",
      "name": "Finite icosahedral Al-Mn order and reported metastability",
      "kind": "scoped-process",
      "description": "For the selected rapidly cooled Al-Mn material, the source reports sharp electron diffraction with six fivefold, ten threefold and fifteen twofold axes of an icosahedral point group, with orientational correlation across finite grains up to about 2 micrometers. Dark-field imaging, small-volume convergent-beam diffraction and powder diffraction support the authors rejection of a conventional multiply twinned Bravais-lattice explanation. The icosahedral phase is metastable under the reported protocols: no detectable subsequent crystallization after 6 hours at 300 degrees C or 1 hour at 350 degrees C, and conversion to stable Al6Mn after 1 hour at 400 degrees C.",
      "claimIds": [
        "C-phys-shechtman-icosahedral-order"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        }
      ],
      "openObligations": [
        "No infinite correlation length, unique quasiperiodic atom arrangement, modern tiling model or universal absence of alternative structures is established by these selected observations.",
        "The three annealing protocols do not determine an equilibrium transition temperature of 400 degrees C or a temperature-independent lifetime.",
        "Nucleation/growth and segregation provide the reported morphological first-order interpretation; no latent heat, calorimetric critical behavior, real-time growth curve or quantitative kinetic coefficient is admitted."
      ]
    },
    {
      "id": "phys:bernard-hard-disk-ordering",
      "name": "Entropic hard-disk ordering and distinct transitions",
      "kind": "scoped-process",
      "description": "The reported two-dimensional hard-disk calculations support first-order liquid-hexatic coexistence over approximately eta=0.700 to 0.716, using coexistence patterns, the equilibrium equation of state and interface scaling. At eta=0.718 the source finds exponential positional decay on a scale of about 100 disk radii and very slow orientational decay, interpreted as a single hexatic phase. Near eta=0.720 the positional correlations become approximately algebraic, near r^-1/3 over the resolved range, and the source identifies a continuous hexatic-solid transition. Thus this specified entropic model has ordered regimes and two distinct transition characters.",
      "claimIds": [
        "C-phys-bernard-hard-disk-ordering"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits"
        }
      ],
      "openObligations": [
        "The coexistence endpoints and the near-0.720 transition are source-specific approximate values, not exact thresholds or experimentally measured temperatures.",
        "The orientational data at eta=0.718 alone do not resolve quasi-long-range versus true long-range behavior; the phase assignment includes the framework argument retained in the method.",
        "Large-distance finite-size effects remain at the continuous transition. The hard-disk result does not establish that all ordering transitions are continuous, critical, first order or described by the full two-continuous-transition KTHNY scenario.",
        "The Monte Carlo displacement clock is not a physical kinetic law; no new simulation or experimental reproduction is claimed."
      ]
    },
    {
      "id": "phys:crystal-order-source-scope",
      "name": "Scoped spatial ordering and structural-transition evidence",
      "kind": "scoped-process",
      "description": "The selected primary diffraction study supports finite icosahedral Al-Mn order that is not explained as a conventional periodic Bravais crystal or its multiple twins, together with protocol-dependent metastability. A separate periodic-box hard-disk study supplies a positive, purely entropic model of collective spatial ordering, first-order liquid-hexatic coexistence and a continuous hexatic-solid transition. These bounded cases support structural ordering and transition distinctions without a universal periodic-lattice requirement, universal critical behavior or a necessary ionic/dispersion/dipole precursor chain.",
      "claimIds": [
        "C-phys-crystal-order-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original periodic lattice positions and universal translational order are narrowed: finite icosahedral alloy order and two-dimensional quasi-long-range positional order are explicitly retained. No single infinite periodic architecture is imposed on all ordered solids.",
        "Original collective stabilization and coordinated reconfiguration survive only as these stated structural/model inferences. The finite Al-Mn grains and hard-disk configurations are different systems and are not mutual replications, a common force fit or one transition pathway.",
        "Temperature enters the alloy annealing protocols and pressure/density enter the hard-disk equilibrium model. A universal response to arbitrary temperature, pressure, composition or external fields, and a complete phase map, are not established here.",
        "Order parameters and different transition characters are retained positively in the hard-disk study. First-order coexistence is distinct from the continuous hexatic-solid transition; critical behavior and symmetry breaking/restoration are not mandatory for every structural transition.",
        "Elasticity, conductivity, anisotropic transport and other symmetry-governed material responses are not measured by these selected records. The hard-disk discussion of entropic elastic effects is not a new measured material constitutive law.",
        "Original necessary parents 2.4 ionic interactions, 2.6 dispersion and 2.8 molecular polarization are not universal requirements for the selected hard-disk ordering model. The model does not establish which microscopic contributions stabilize the real Al-Mn alloy.",
        "Original weights 0.4/0.35/0.25, directions [3], interaction modes [0,1]/[0,1]/[1], dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, N_min=N_crit=2 for all parents and null N_sat are catalogue provenance. A disk pair, finite grain or chosen simulation size does not establish a critical number of ions, dispersion carriers, molecular dipoles or a two-unit crystallization threshold.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. The SOMA pattern-level/higher-order label is not an independently observed physical entity or causal law.",
        "Generic original diffraction/neutron/calorimetry/growth and statistical-mechanical placeholders are replaced only by the actual reviewed diffraction/imaging/annealing study and hard-disk calculation. No neutron experiment, latent-heat measurement, all-crystal growth proof or new mathematical universality theorem is supplied.",
        "Future card 2.15 may reuse these exact source and study records for a bounded phase-regime discussion. This reconstruction does not pre-admit its general coexistence/metastability/critical-point/kinetic-pathway claims.",
        "No raw-data refit, diffraction digitization, new alloy growth, atom-coordinate solution, Monte Carlo execution, configuration-file analysis, physical rate inference or independently reproduced experiment is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:shechtman1984-alloy-context-shechtman-icosahedral-order",
      "source": "phys:shechtman1984-alloy-context",
      "target": "phys:shechtman-icosahedral-order",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-shechtman1984-alloy-context"
      ],
      "role": "measurement-context",
      "assertion": "The reported specimen, diffraction/imaging controls and thermal-treatment protocols condition this finite alloy result.",
      "contextIds": [
        "shechtman1984-alloy"
      ]
    },
    {
      "id": "physics:spatial-order-symmetry-boundary-shechtman-icosahedral-order",
      "source": "phys:spatial-order-symmetry-boundary",
      "target": "phys:shechtman-icosahedral-order",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-shechtman-icosahedral-order"
      ],
      "role": "interpretation-dependency",
      "assertion": "The finite correlation and symmetry boundary conditions the structural and metastability interpretation.",
      "contextIds": [
        "shechtman1984-alloy"
      ]
    },
    {
      "id": "physics:bernard2011-hard-disk-context-bernard-hard-disk-ordering",
      "source": "phys:bernard2011-hard-disk-context",
      "target": "phys:bernard-hard-disk-ordering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-bernard2011-hard-disk-context"
      ],
      "role": "interpretation-dependency",
      "assertion": "The reported equilibrium sampling, correlation analysis and finite-size checks condition the computed ordering result.",
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:hard-disk-equilibrium-model-bernard-hard-disk-ordering",
      "source": "phys:hard-disk-equilibrium-model",
      "target": "phys:bernard-hard-disk-ordering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-bernard-hard-disk-ordering"
      ],
      "role": "interpretation-dependency",
      "assertion": "The supplied hard-disk model and finite-N correlation/interface analysis condition the transition interpretation.",
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:spatial-order-symmetry-boundary-bernard-hard-disk-ordering",
      "source": "phys:spatial-order-symmetry-boundary",
      "target": "phys:bernard-hard-disk-ordering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-bernard-hard-disk-ordering"
      ],
      "role": "interpretation-dependency",
      "assertion": "The dimensionality, correlation and finite-size boundary conditions the model phase assignment.",
      "contextIds": [
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:spatial-order-symmetry-boundary-crystal-order-source-scope",
      "source": "phys:spatial-order-symmetry-boundary",
      "target": "phys:crystal-order-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-crystal-order-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "This declared definition or finite result contributes to the two-context literature synthesis without transferring the two systems mechanisms or counting mutual replication.",
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:hard-disk-equilibrium-model-crystal-order-source-scope",
      "source": "phys:hard-disk-equilibrium-model",
      "target": "phys:crystal-order-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-crystal-order-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "This declared definition or finite result contributes to the two-context literature synthesis without transferring the two systems mechanisms or counting mutual replication.",
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:shechtman-icosahedral-order-crystal-order-source-scope",
      "source": "phys:shechtman-icosahedral-order",
      "target": "phys:crystal-order-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-crystal-order-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "This declared definition or finite result contributes to the two-context literature synthesis without transferring the two systems mechanisms or counting mutual replication.",
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    },
    {
      "id": "physics:bernard-hard-disk-ordering-crystal-order-source-scope",
      "source": "phys:bernard-hard-disk-ordering",
      "target": "phys:crystal-order-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-crystal-order-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "This declared definition or finite result contributes to the two-context literature synthesis without transferring the two systems mechanisms or counting mutual replication.",
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:spatial-order-symmetry-boundary",
      "role": "definition",
      "denotes": "Specified spatial order, symmetry and finite-size boundary under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-spatial-order-symmetry-boundary"
      ]
    },
    {
      "nodeId": "phys:hard-disk-equilibrium-model",
      "role": "definition",
      "denotes": "Two-dimensional hard-disk equilibrium model under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hard-disk-equilibrium-model"
      ]
    },
    {
      "nodeId": "phys:shechtman1984-alloy-context",
      "role": "experimental-context",
      "denotes": "Al-Mn diffraction, imaging and annealing context under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-shechtman1984-alloy-context"
      ]
    },
    {
      "nodeId": "phys:bernard2011-hard-disk-context",
      "role": "model-context",
      "denotes": "Hard-disk equilibrium sampling and correlation context under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bernard2011-hard-disk-context"
      ]
    },
    {
      "nodeId": "phys:shechtman-icosahedral-order",
      "role": "scoped-phenomenon",
      "denotes": "Finite icosahedral Al-Mn order and reported metastability under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-shechtman-icosahedral-order"
      ]
    },
    {
      "nodeId": "phys:bernard-hard-disk-ordering",
      "role": "scoped-phenomenon",
      "denotes": "Entropic hard-disk ordering and distinct transitions under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bernard-hard-disk-ordering"
      ]
    },
    {
      "nodeId": "phys:crystal-order-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped spatial ordering and structural-transition evidence under the explicitly declared finite study, model and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-crystal-order-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "shechtman1984-alloy",
      "sourceId": "shechtman1984-icosahedral",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.53.1951",
      "journal": "Physical Review Letters",
      "volume": "53",
      "issue": "20",
      "pages": "1951-1953",
      "system": "Rapidly cooled Al-Mn alloy, especially Al-14 at.% Mn",
      "preparation": "Use the reported rapidly cooled Al-Mn alloy specimens, especially Al-14 at.% Mn, and their finite grains up to about 2 micrometers. Rotate specimens to relate selected-area electron diffraction patterns to icosahedral axes. Keep dark-field imaging, convergent-beam microdiffraction and Cu K-alpha powder diffraction as reported complementary checks against a conventional multiple-twin explanation. Retain the separate morphology/segregation inference and the stated annealing durations when interpreting formation or metastability.",
      "observable": "Related electron diffraction patterns, dark-field grain contrast, convergent-beam microdiffraction, powder diffraction and reported annealing response",
      "finding": "For the selected rapidly cooled Al-Mn material, the source reports sharp electron diffraction with six fivefold, ten threefold and fifteen twofold axes of an icosahedral point group, with orientational correlation across finite grains up to about 2 micrometers. Dark-field imaging, small-volume convergent-beam diffraction and powder diffraction support the authors rejection of a conventional multiply twinned Bravais-lattice explanation. The icosahedral phase is metastable under the reported protocols: no detectable subsequent crystallization after 6 hours at 300 degrees C or 1 hour at 350 degrees C, and conversion to stable Al6Mn after 1 hour at 400 degrees C.",
      "limitations": [
        "No raw diffraction intensities, angular-error propagation, atom-coordinate refinement, new imaging, calorimetry or time-resolved growth measurement is reconstructed.",
        "The publication provides finite specimen/control evidence, without a pooled uncertainty budget or a measured infinite correlation length.",
        "Morphology and solute segregation motivate the source first-order growth interpretation; this is not a measured latent heat or an equilibrium phase-boundary determination.",
        "No infinite correlation length, unique quasiperiodic atom arrangement, modern tiling model or universal absence of alternative structures is established by these selected observations.",
        "The three annealing protocols do not determine an equilibrium transition temperature of 400 degrees C or a temperature-independent lifetime.",
        "Nucleation/growth and segregation provide the reported morphological first-order interpretation; no latent heat, calorimetric critical behavior, real-time growth curve or quantitative kinetic coefficient is admitted."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
        "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
        "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.53.1951",
      "correctionCheck": "All published pages visually read. DOI/title/initialed authors/volume/issue/pages and 12 November 1984 publication date checked against publisher identity and Crossref. No linked correction found in the bounded primary-record/title/DOI check; no exhaustive absence claim."
    },
    {
      "id": "bernard2011-hard-disks",
      "sourceId": "bernard2011-hard-disks",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.107.155704",
      "journal": "Physical Review Letters",
      "volume": "107",
      "issue": "15",
      "pages": "155704",
      "system": "Two-dimensional structureless hard disks in a periodic square at prescribed packing fraction",
      "preparation": "Use the reported constant-NV periodic hard-disk calculations with N=256^2, 512^2 and up to 1024^2 disks. The SEC event-chain algorithm moves in positive x or y directions, breaks detailed balance and preserves global balance. Interpret reported coexistence snapshots, the equilibrium equation of state and its Maxwell/interface analysis together with positional and bond-orientational correlations. Use the numerically located first-peak wave vector k_peak of the computed structure factor for positional correlations, rather than imposing the perfect triangular-lattice k_perf. Retain comparison of crystal/liquid initial conditions, autocorrelation and finite-size checks, and the supplement Gaussian sampling-error procedure.",
      "observable": "Computed equilibrium equation of state, coexistence patterns, interface scaling and positional/bond-orientational correlation functions",
      "finding": "The reported two-dimensional hard-disk calculations support first-order liquid-hexatic coexistence over approximately eta=0.700 to 0.716, using coexistence patterns, the equilibrium equation of state and interface scaling. At eta=0.718 the source finds exponential positional decay on a scale of about 100 disk radii and very slow orientational decay, interpreted as a single hexatic phase. Near eta=0.720 the positional correlations become approximately algebraic, near r^-1/3 over the resolved range, and the source identifies a continuous hexatic-solid transition. Thus this specified entropic model has ordered regimes and two distinct transition characters.",
      "limitations": [
        "Time in the calculation is measured in disk displacements; CPU runtime, coarsening and algorithmic equilibration are not physical nucleation or melting rates.",
        "The supplement obtains 64 essentially independent configurations from a long Markov chain and uses subsequent parallel runs for Gaussian error estimates. These are conditional sampling errors, not independent physical experiments or universal confidence intervals on phase boundaries.",
        "Pressure uses the fitted contact value of the pair-correlation function. No contact-fit, equation-of-state integration, raw configuration analysis or covariance replay is supplied.",
        "The supplement code on pages 10-12 was read without execution; linked configuration files were not downloaded.",
        "The coexistence endpoints and the near-0.720 transition are source-specific approximate values, not exact thresholds or experimentally measured temperatures.",
        "The orientational data at eta=0.718 alone do not resolve quasi-long-range versus true long-range behavior; the phase assignment includes the framework argument retained in the method.",
        "Large-distance finite-size effects remain at the continuous transition. The hard-disk result does not establish that all ordering transitions are continuous, critical, first order or described by the full two-continuous-transition KTHNY scenario.",
        "The Monte Carlo displacement clock is not a physical kinetic law; no new simulation or experimental reproduction is claimed."
      ],
      "readExtent": "full-author-preprint",
      "reviewedLocators": [
        "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
        "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
        "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
        "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
        "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
        "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.107.155704",
      "correctionCheck": "All author v2 pages and all supplement text read; main figures and supplemental S7-S9 visually checked. Published full text not obtained. DOI/title/authors/volume/issue/article and 7 October 2011 publication date verified against publisher/Crossref; author v2 history 30 August 2011. Main and supplement are one study. No linked correction found in the bounded primary-record/title/DOI check; no exhaustive absence claim."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "shechtman1984-icosahedral",
      "kind": "research-publication",
      "title": "Metallic Phase with Long-Range Orientational Order and No Translational Symmetry",
      "authors": [
        "D. Shechtman",
        "I. Blech",
        "D. Gratias",
        "J. W. Cahn"
      ],
      "year": 1984,
      "doi": "10.1103/PhysRevLett.53.1951",
      "url": "https://lipn.univ-paris13.fr/~fernique/qc/shechtman.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        ],
        "limit": "All published pages 1951-1953 and Figures 1-2 read visually from the original published scan. The university PDF has a fourth page duplicating an enlarged Figure 2; it is not a fourth article page. No raw diffraction, new microscopy, atom-coordinate refinement, calorimetric or time-resolved kinetic replay. Publisher identity and Crossref publication metadata checked; 12 November 1984, PRL 53(20), 1951-1953. No linked correction found in the bounded DOI/title/publisher/Crossref check; not an exhaustive no-correction assertion."
      }
    },
    {
      "id": "bernard2011-hard-disks",
      "kind": "research-publication",
      "title": "Two-Step Melting in Two Dimensions: First-Order Liquid-Hexatic Transition",
      "authors": [
        "Etienne P. Bernard",
        "Werner Krauth"
      ],
      "year": 2011,
      "doi": "10.1103/PhysRevLett.107.155704",
      "url": "https://arxiv.org/pdf/1102.4094v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-author-preprint",
        "locators": [
          "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution"
        ],
        "limit": "All five author arXiv 1102.4094v2 pages read in full, main Figures 1-4 visually checked, and all twelve pages of the author supplement dated 25 August 2011 read as text, including the unexecuted program. Supplement pages 7-10 and Figures S7-S9 also visually checked; the other supplemental figures were read through text/captions, not all visually inspected. Supplement primary URL: https://arxiv.org/src/1102.4094v2/anc/Bernard_PRL_supplemental.pdf . Configuration files were not downloaded and no Monte Carlo/code, pressure/contact fit or correlation replay was executed. Published full text was not obtained; publisher/Crossref publication metadata verified as 7 October 2011, PRL 107(15), 155704. Author archive v2 is dated 30 August 2011 (v1 20 February 2011). No linked correction found in the bounded DOI/title/publisher/Crossref check; not an exhaustive no-correction assertion."
      }
    }
  ]
};

/** Preserve finite alloy order and the separate entropy-driven hard-disk transition model. */
export function validateCrystalOrderContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Crystal order ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
