import assert from "node:assert/strict";

export const DISPERSION_CHECKS = new Map();
export const DISPERSION_ANALYTICAL_SOURCES = new Map();
export const DISPERSION_STUDY_TYPES = new Map([["perreault2005-phase", "primary-experiment"]]);
export const DISPERSION_ADMISSION = {
  "definitions": [
    [
      "phys:ground-state-dispersion-limits",
      "D-phys-ground-state-dispersion-limits"
    ],
    [
      "phys:dispersion-material-observable-boundary",
      "D-phys-dispersion-material-observable-boundary"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "perreault2005-phase-context",
      "M-phys-perreault2005-phase-context",
      [
        "perreault2005-phase"
      ]
    ]
  ],
  "observations": [
    [
      "perreault-atom-surface-phase",
      "C-phys-perreault-atom-surface-phase",
      [
        "perreault2005-phase"
      ]
    ],
    [
      "perreault-nonretarded-comparison",
      "C-phys-perreault-nonretarded-comparison",
      [
        "perreault2005-phase"
      ]
    ],
    [
      "dispersion-source-scope",
      "C-phys-dispersion-source-scope",
      [
        "perreault2005-phase"
      ]
    ]
  ],
  "dependencies": [
    [
      "perreault2005-phase-context-perreault-atom-surface-phase",
      "perreault2005-phase-context",
      "perreault-atom-surface-phase",
      "M-phys-perreault2005-phase-context",
      "measurement-context"
    ],
    [
      "perreault2005-phase-context-perreault-nonretarded-comparison",
      "perreault2005-phase-context",
      "perreault-nonretarded-comparison",
      "M-phys-perreault-nonretarded-comparison",
      "interpretation-dependency"
    ],
    [
      "perreault-atom-surface-phase-perreault-nonretarded-comparison",
      "perreault-atom-surface-phase",
      "perreault-nonretarded-comparison",
      "M-phys-perreault-nonretarded-comparison",
      "interpretation-dependency"
    ],
    [
      "ground-state-dispersion-limits-perreault-nonretarded-comparison",
      "ground-state-dispersion-limits",
      "perreault-nonretarded-comparison",
      "M-phys-perreault-nonretarded-comparison",
      "interpretation-dependency"
    ],
    [
      "dispersion-material-observable-boundary-perreault-nonretarded-comparison",
      "dispersion-material-observable-boundary",
      "perreault-nonretarded-comparison",
      "M-phys-perreault-nonretarded-comparison",
      "interpretation-dependency"
    ],
    [
      "ground-state-dispersion-limits-dispersion-source-scope",
      "ground-state-dispersion-limits",
      "dispersion-source-scope",
      "M-phys-dispersion-source-scope",
      "interpretation-dependency"
    ],
    [
      "dispersion-material-observable-boundary-dispersion-source-scope",
      "dispersion-material-observable-boundary",
      "dispersion-source-scope",
      "M-phys-dispersion-source-scope",
      "interpretation-dependency"
    ],
    [
      "perreault-nonretarded-comparison-dispersion-source-scope",
      "perreault-nonretarded-comparison",
      "dispersion-source-scope",
      "M-phys-dispersion-source-scope",
      "interpretation-dependency"
    ],
    [
      "casimir-material-model-dispersion-source-scope",
      "casimir-material-model",
      "dispersion-source-scope",
      "M-phys-dispersion-source-scope",
      "interpretation-dependency"
    ],
    [
      "ideal-plate-casimir-dispersion-source-scope",
      "ideal-plate-casimir",
      "dispersion-source-scope",
      "M-phys-dispersion-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "perreault2005-phase"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-perreault2005-phase-context",
      [
        "perreault2005-atom-surface"
      ]
    ],
    [
      "C-phys-perreault-atom-surface-phase",
      [
        "perreault2005-atom-surface"
      ]
    ],
    [
      "M-phys-perreault-nonretarded-comparison",
      [
        "perreault2005-atom-surface"
      ]
    ],
    [
      "C-phys-perreault-nonretarded-comparison",
      [
        "perreault2005-atom-surface"
      ]
    ],
    [
      "M-phys-dispersion-source-scope",
      [
        "casimir-polder1948",
        "casimir1948",
        "jaffe2005",
        "perreault2005-atom-surface"
      ]
    ],
    [
      "C-phys-dispersion-source-scope",
      [
        "casimir-polder1948",
        "casimir1948",
        "jaffe2005",
        "perreault2005-atom-surface"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-ground-state-dispersion-limits",
      "kind": "review-finding",
      "statement": "For the selected lowest-state, isotropic electric-dipole model of separated neutral atoms, the nonretarded interaction energy is U_AB(R)=-C6/R^6 with C6>0. At separations large compared with the relevant transition wavelengths the source result becomes U_AB(R)=-23*hbar*c*a_A(0)*a_B(0)/(4*pi*R^7). For an isotropic atom near a perfectly conducting plane the corresponding energy limits scale as -C3_ideal/z^3 and -3*hbar*c*a(0)/(8*pi*z^4). Here a denotes Gaussian/volume-normalized electric polarizability, explicitly distinct from the positive dimensionless fine-structure constant. These are different geometry-dependent energies under supplied atomic and field assumptions.",
      "scope": "Selected Casimir-Polder analytic lowest-state/dipole limits, with a fixed ideal atom-wall boundary and an isotropic atom-pair case.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source assumes the lowest atomic/radiation state, a dipole approximation and a J=0 simplification in the atom-wall calculation; the pair result is stated for S states. This is not a fitted sodium spin/hyperfine, excited-state, finite-temperature or material-specific model.",
        "The short-distance asymptote means small compared with transition wavelengths while still outside atomic overlap. No R=0 continuation, repulsive core, covalent bond, condensed-state equilibrium or lifetime is supplied.",
        "The source polarizabilities use Gaussian volume normalization. SI polarizabilities require the corresponding 4*pi*epsilon_0 conversion factors; their numerical symbols cannot be silently identified across conventions.",
        "R^-6/R^-7 are atom-pair energy powers; z^-3/z^-4 are atom-wall energy powers. Force derivatives and plate energy/pressure have different powers. No universal crossover distance is inferred.",
        "The calculation supplies distance-dependent interaction-energy differences, not an absolute measured vacuum energy or real exchanged-photon population. No full fourth-order derivation, regulator proof or numerical curve is replayed."
      ]
    },
    {
      "id": "D-phys-dispersion-material-observable-boundary",
      "kind": "review-finding",
      "statement": "In this scope dispersion names the ground-state electric-response correlation contribution in the declared model. It is distinct from orientational interactions of supplied permanent dipoles and induction by an applied or static field, neither of which is estimated here. An atom-surface phase comparison additionally requires the particular material, channel geometry, atomic velocity and response model. A nonzero relative fringe phase can support an interaction model; it is not a direct measurement of microscopic fluctuating dipoles, a reconstructed dielectric function, a universal cohesion law or an isolated absolute vacuum energy.",
      "scope": "Operational term and inference boundary for the ideal ground-state limits and one Na/silicon-nitride phase experiment.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Permanent-field/patch-charge alternatives are not comprehensively excluded by a supplied separate analysis in the reviewed author text. Attribution remains conditional on its atom-surface potential and preparation.",
        "No finite-temperature population, thermal crossover law or material-temperature fit is supplied. Do not invent a grating temperature or use a lowest-field-state asymptote as a universal thermal result.",
        "The finite silicon-nitride channel is not a perfectly conducting plane. Its adopted C3 cannot be obtained by silently inserting ideal-conductor or atom-pair coefficients.",
        "Atom-pair dispersion need not be promoted to an exact pair-additive dense-material potential. Macroscopic Casimir, atom-wall Casimir-Polder and nonretarded dispersion share electromagnetic-response descriptions but require separate geometry and material assumptions."
      ]
    },
    {
      "id": "M-phys-perreault2005-phase-context",
      "kind": "method",
      "statement": "Use the reported oven-generated Na beam near 2 km/s, collimated by two 10 micrometer slits separated by 1 m, in a Mach-Zehnder interferometer made from three 100 nm-period silicon-nitride gratings. Insert an additional grating G4 with 50 nm-wide and 150 nm-long channels into either arm or out of the paths. Scan the third grating to read fringe phase and contrast; use the co-propagating optical interferometer for vibration compensation. Alternate test/control positions at 50 s intervals and subtract a fifth-order polynomial fit to control-phase drift. Keep the diffraction-order response and the separate statistical/systematic errors in the interpretation.",
      "scope": "One primary experimental acquisition/analysis in Perreault-Cronin author v1, with the related published identity checked.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Transmitted atoms pass within 25 nm of a channel wall by the supplied geometry. This is not an imaged individual trajectory, pointwise potential profile, observed adsorption or direct charge-fluctuation measurement.",
        "Figure 3 intensity uncertainties assume Poisson counts for five-second fringe records. Figure 4 instead corrects roughly 30 percent unwanted-order systematic offsets and gives error bars from systematic-parameter uncertainty.",
        "The author v1 is the full text actually reviewed; the final publisher full text was not obtained. No raw count, drift subtraction, channel metrology or covariance replay is supplied."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "C-phys-perreault-atom-surface-phase",
      "kind": "review-finding",
      "statement": "The source reports an approximately 0.3 rad relative fringe-phase displacement when G4 is inserted in one Na interferometer arm, with the sign reversed on inserting it in the other arm. The scale is described as about a 5 nm fringe displacement at 100 nm grating period. Nonzero fringe contrast remains for atoms transmitted through the supplied channels. This is an interaction-sensitive matter-wave phase observation, not a direct force trace or an event forming a molecular or ionic bond.",
      "scope": "Source-reported approximate relative-phase response in the selected Na/silicon-nitride interferometer.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No invented uncertainty is attached to the approximate 0.3 rad scale. Figure 3 counting statistics and Figure 4 systematic-parameter bars are different uncertainty statements.",
        "The relevant measured phase Phi_0 is the phase of the spatially integrated complex zeroth diffraction amplitude. It is not the constant/midpoint local phase phi_0 illustrated near 0.05 rad in Figure 1.",
        "The within-25-nm distance follows the channel geometry. The abstract as-small-as-10-nm statement is not admitted as a separate resolved distance or trajectory measurement.",
        "The same fringe data support the subsequent interaction interpretation; no independent measurement of a microscopic fluctuation source, thermodynamic cohesion or adsorption is added."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "M-phys-perreault-nonretarded-comparison",
      "kind": "method",
      "statement": "Interpret the relative phase using the source local phase phi(xi)=-l*V(xi)/(hbar*v), the spatial diffraction-amplitude integral and the two-arm fringe response in Equations 1-4. Compare corrected velocity-dependent phase observations with the adopted attractive nonretarded atom-surface model, using C3=3 meV*nm^3, channel length 150 nm and open fraction 0.5 for the Figure 4 prediction. Retain the position-dependent channel response rather than replacing it with one midpoint phase.",
      "scope": "Conditional reported potential/phase comparison; C3 is an adopted prior model input, not a new parameter fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The cited earlier diffraction study supplies context for the chosen C3 but has not been separately reviewed or refitted here. No new C3 value, exponent estimate, total covariance or fit confidence is supplied.",
        "About 30 percent diffraction-order offsets are corrected in Figure 4; its errors belong to systematic parameters. A 10-percent C3 measurement is discussed as a future prospect, not an achieved result.",
        "The author preprint and publisher abstract have different general theory wording. No separately read Lifshitz calculation, measured dielectric function or unique microscopic vacuum interpretation is admitted."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "C-phys-perreault-nonretarded-comparison",
      "kind": "review-finding",
      "statement": "The source finds the sign of the arm-dependent phase consistent with an attractive Na/surface potential and reports approximate magnitude and slight velocity-trend agreement with its nonretarded prediction using adopted C3=3 meV*nm^3. This is a conditional comparison of the measured phase with a supplied finite-channel interaction model. It is not a newly fitted C3, a measurement of an atom-pair C6, a retarded-law test or an independent repetition of the phase acquisition.",
      "scope": "Positive source-reported finite atom-surface interaction comparison in the measured nonretarded geometry.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source does not quote a new fitted C3 uncertainty in the reviewed author text. Do not substitute values from separate diffraction/conference papers or label the future 10-percent precision as achieved.",
        "The empirical response depends on channel dimensions, velocity, diffraction orders and drift treatment; the adopted material potential remains conditional. No new error budget or microscopic correlation measurement is reconstructed.",
        "The ideal J=0/perfect-conductor calculation and the Na/silicon-nitride experiment have different supplied atoms/material boundaries; the comparison does not numerically validate the ideal conductor coefficient."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "M-phys-dispersion-source-scope",
      "kind": "method",
      "statement": "Keep the ideal ground-state atom-pair/atom-wall analytic limits distinct from the finite Na/silicon-nitride acquisition and its adopted nonretarded phase model. Use the phase observation and its dependent comparison as one experiment. Retain existing Casimir material-response boundaries without treating them as another atomic acquisition or a universal condensation/cohesion mechanism.",
      "scope": "Scoped interpretation method for the finite reconstruction of original card 2.6.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "method",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original Level 2 catalogue card /6 delimits the scope being reconstructed; its labels and defaults are not independent scientific support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This finite scope retains a positive ground-state dispersion model and an interaction-sensitive atom-surface phase result. It does not establish universal attraction for every excited state, medium, material, orientation, temperature or separation.",
        "Permanent dipoles, static-field induction, ionic transfer and benzene resonance are separate descriptions. The selected neutral atomic model does not require the original 2.3 molecular-formation case, the 2.4 ionic regime or the 2.5 molecular-resonance stage as universal prerequisites.",
        "No noble-gas cohesion energy, molecular-crystal packing, adsorption isotherm, nonideal-gas coefficient, soft-matter organization or condensed-phase stability is measured by these selected records. Ensemble accumulation and pair additivity need separate models.",
        "Original parent weights 0.4/0.3/0.3, directions [2], interaction modes [0,1], necessary, dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent minima/critical counts 2/1/2 and null saturation are catalogue provenance. A chosen two-atom model is not a measured critical molecule, ion, resonance or mode count.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. Generic theoretical and empirical placeholders identify no separately reviewed all-material proof.",
        "The existing plate Casimir/material-response definitions delimit interpretation; no Lamoreaux/Bressi measurement or correction chain is duplicated. Future card 2.19 can reuse these exact records while retaining distinct geometry, material, temperature and readout assumptions.",
        "No raw-data refit, phase digitization, C3/atomic-polarizability fit, dielectric reconstruction, thermal prediction, full microscopic solver or independently reproduced experiment is claimed."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "C-phys-dispersion-source-scope",
      "kind": "review-finding",
      "statement": "A specified lowest-state electric-response model yields attractive nonretarded and retarded interaction-energy limits with distinct atom-pair and ideal atom-wall distance powers. A separate Na/silicon-nitride interferometer reports an arm-dependent relative phase and a conditional comparison with an adopted attractive nonretarded potential. These provide finite positive dispersion-related theory and interaction-sensitive evidence, with material, geometry, state and uncertainty limits retained. They do not directly observe transient dipoles or establish universal condensed-matter organization.",
      "scope": "One experimental context plus declared analytic model definitions; observations and dependent interpretation remain separate.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite model, preparation or response; no experimental or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original Level 2 catalogue card /6 delimits the scope being reconstructed; its labels and defaults are not independent scientific support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This finite scope retains a positive ground-state dispersion model and an interaction-sensitive atom-surface phase result. It does not establish universal attraction for every excited state, medium, material, orientation, temperature or separation.",
        "Permanent dipoles, static-field induction, ionic transfer and benzene resonance are separate descriptions. The selected neutral atomic model does not require the original 2.3 molecular-formation case, the 2.4 ionic regime or the 2.5 molecular-resonance stage as universal prerequisites.",
        "No noble-gas cohesion energy, molecular-crystal packing, adsorption isotherm, nonideal-gas coefficient, soft-matter organization or condensed-phase stability is measured by these selected records. Ensemble accumulation and pair additivity need separate models.",
        "Original parent weights 0.4/0.3/0.3, directions [2], interaction modes [0,1], necessary, dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent minima/critical counts 2/1/2 and null saturation are catalogue provenance. A chosen two-atom model is not a measured critical molecule, ion, resonance or mode count.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. Generic theoretical and empirical placeholders identify no separately reviewed all-material proof.",
        "The existing plate Casimir/material-response definitions delimit interpretation; no Lamoreaux/Bressi measurement or correction chain is duplicated. Future card 2.19 can reuse these exact records while retaining distinct geometry, material, temperature and readout assumptions.",
        "No raw-data refit, phase digitization, C3/atomic-polarizability fit, dielectric reconstruction, thermal prediction, full microscopic solver or independently reproduced experiment is claimed."
      ],
      "contextIds": [
        "perreault2005-phase"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:ground-state-dispersion-limits",
      "name": "Specified ground-state atom-pair and ideal-wall dispersion limits",
      "kind": "definition",
      "description": "For the selected lowest-state, isotropic electric-dipole model of separated neutral atoms, the nonretarded interaction energy is U_AB(R)=-C6/R^6 with C6>0. At separations large compared with the relevant transition wavelengths the source result becomes U_AB(R)=-23*hbar*c*a_A(0)*a_B(0)/(4*pi*R^7). For an isotropic atom near a perfectly conducting plane the corresponding energy limits scale as -C3_ideal/z^3 and -3*hbar*c*a(0)/(8*pi*z^4). Here a denotes Gaussian/volume-normalized electric polarizability, explicitly distinct from the positive dimensionless fine-structure constant. These are different geometry-dependent energies under supplied atomic and field assumptions.",
      "claimIds": [
        "D-phys-ground-state-dispersion-limits"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification"
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary"
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits"
        }
      ],
      "openObligations": [
        "The source assumes the lowest atomic/radiation state, a dipole approximation and a J=0 simplification in the atom-wall calculation; the pair result is stated for S states. This is not a fitted sodium spin/hyperfine, excited-state, finite-temperature or material-specific model.",
        "The short-distance asymptote means small compared with transition wavelengths while still outside atomic overlap. No R=0 continuation, repulsive core, covalent bond, condensed-state equilibrium or lifetime is supplied.",
        "The source polarizabilities use Gaussian volume normalization. SI polarizabilities require the corresponding 4*pi*epsilon_0 conversion factors; their numerical symbols cannot be silently identified across conventions.",
        "R^-6/R^-7 are atom-pair energy powers; z^-3/z^-4 are atom-wall energy powers. Force derivatives and plate energy/pressure have different powers. No universal crossover distance is inferred.",
        "The calculation supplies distance-dependent interaction-energy differences, not an absolute measured vacuum energy or real exchanged-photon population. No full fourth-order derivation, regulator proof or numerical curve is replayed."
      ]
    },
    {
      "id": "phys:dispersion-material-observable-boundary",
      "name": "Dispersion, material response and measured-observable boundary",
      "kind": "definition",
      "description": "In this scope dispersion names the ground-state electric-response correlation contribution in the declared model. It is distinct from orientational interactions of supplied permanent dipoles and induction by an applied or static field, neither of which is estimated here. An atom-surface phase comparison additionally requires the particular material, channel geometry, atomic velocity and response model. A nonzero relative fringe phase can support an interaction model; it is not a direct measurement of microscopic fluctuating dipoles, a reconstructed dielectric function, a universal cohesion law or an isolated absolute vacuum energy.",
      "claimIds": [
        "D-phys-dispersion-material-observable-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification"
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        }
      ],
      "openObligations": [
        "Permanent-field/patch-charge alternatives are not comprehensively excluded by a supplied separate analysis in the reviewed author text. Attribution remains conditional on its atom-surface potential and preparation.",
        "No finite-temperature population, thermal crossover law or material-temperature fit is supplied. Do not invent a grating temperature or use a lowest-field-state asymptote as a universal thermal result.",
        "The finite silicon-nitride channel is not a perfectly conducting plane. Its adopted C3 cannot be obtained by silently inserting ideal-conductor or atom-pair coefficients.",
        "Atom-pair dispersion need not be promoted to an exact pair-additive dense-material potential. Macroscopic Casimir, atom-wall Casimir-Polder and nonretarded dispersion share electromagnetic-response descriptions but require separate geometry and material assumptions."
      ]
    },
    {
      "id": "phys:perreault2005-phase-context",
      "name": "Na/silicon-nitride relative-phase acquisition context",
      "kind": "context",
      "description": "Use the reported oven-generated Na beam near 2 km/s, collimated by two 10 micrometer slits separated by 1 m, in a Mach-Zehnder interferometer made from three 100 nm-period silicon-nitride gratings. Insert an additional grating G4 with 50 nm-wide and 150 nm-long channels into either arm or out of the paths. Scan the third grating to read fringe phase and contrast; use the co-propagating optical interferometer for vibration compensation. Alternate test/control positions at 50 s intervals and subtract a fifth-order polynomial fit to control-phase drift. Keep the diffraction-order response and the separate statistical/systematic errors in the interpretation.",
      "claimIds": [
        "M-phys-perreault2005-phase-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        }
      ],
      "openObligations": [
        "Transmitted atoms pass within 25 nm of a channel wall by the supplied geometry. This is not an imaged individual trajectory, pointwise potential profile, observed adsorption or direct charge-fluctuation measurement.",
        "Figure 3 intensity uncertainties assume Poisson counts for five-second fringe records. Figure 4 instead corrects roughly 30 percent unwanted-order systematic offsets and gives error bars from systematic-parameter uncertainty.",
        "The author v1 is the full text actually reviewed; the final publisher full text was not obtained. No raw count, drift subtraction, channel metrology or covariance replay is supplied."
      ]
    },
    {
      "id": "phys:perreault-atom-surface-phase",
      "name": "Reported arm-dependent Na atom-surface fringe phase",
      "kind": "scoped-process",
      "description": "The source reports an approximately 0.3 rad relative fringe-phase displacement when G4 is inserted in one Na interferometer arm, with the sign reversed on inserting it in the other arm. The scale is described as about a 5 nm fringe displacement at 100 nm grating period. Nonzero fringe contrast remains for atoms transmitted through the supplied channels. This is an interaction-sensitive matter-wave phase observation, not a direct force trace or an event forming a molecular or ionic bond.",
      "claimIds": [
        "C-phys-perreault-atom-surface-phase"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        }
      ],
      "openObligations": [
        "No invented uncertainty is attached to the approximate 0.3 rad scale. Figure 3 counting statistics and Figure 4 systematic-parameter bars are different uncertainty statements.",
        "The relevant measured phase Phi_0 is the phase of the spatially integrated complex zeroth diffraction amplitude. It is not the constant/midpoint local phase phi_0 illustrated near 0.05 rad in Figure 1.",
        "The within-25-nm distance follows the channel geometry. The abstract as-small-as-10-nm statement is not admitted as a separate resolved distance or trajectory measurement.",
        "The same fringe data support the subsequent interaction interpretation; no independent measurement of a microscopic fluctuation source, thermodynamic cohesion or adsorption is added."
      ]
    },
    {
      "id": "phys:perreault-nonretarded-comparison",
      "name": "Conditional nonretarded Na/surface phase comparison",
      "kind": "scoped-process",
      "description": "The source finds the sign of the arm-dependent phase consistent with an attractive Na/surface potential and reports approximate magnitude and slight velocity-trend agreement with its nonretarded prediction using adopted C3=3 meV*nm^3. This is a conditional comparison of the measured phase with a supplied finite-channel interaction model. It is not a newly fitted C3, a measurement of an atom-pair C6, a retarded-law test or an independent repetition of the phase acquisition.",
      "claimIds": [
        "C-phys-perreault-nonretarded-comparison"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        }
      ],
      "openObligations": [
        "The source does not quote a new fitted C3 uncertainty in the reviewed author text. Do not substitute values from separate diffraction/conference papers or label the future 10-percent precision as achieved.",
        "The empirical response depends on channel dimensions, velocity, diffraction orders and drift treatment; the adopted material potential remains conditional. No new error budget or microscopic correlation measurement is reconstructed.",
        "The ideal J=0/perfect-conductor calculation and the Na/silicon-nitride experiment have different supplied atoms/material boundaries; the comparison does not numerically validate the ideal conductor coefficient."
      ]
    },
    {
      "id": "phys:dispersion-source-scope",
      "name": "Scoped ground-state dispersion and atom-surface evidence",
      "kind": "scoped-process",
      "description": "A specified lowest-state electric-response model yields attractive nonretarded and retarded interaction-energy limits with distinct atom-pair and ideal atom-wall distance powers. A separate Na/silicon-nitride interferometer reports an arm-dependent relative phase and a conditional comparison with an adopted attractive nonretarded potential. These provide finite positive dispersion-related theory and interaction-sensitive evidence, with material, geometry, state and uncertainty limits retained. They do not directly observe transient dipoles or establish universal condensed-matter organization.",
      "claimIds": [
        "C-phys-dispersion-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification"
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary"
        },
        {
          "sourceId": "casimir-polder1948",
          "locator": "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction"
        },
        {
          "sourceId": "perreault2005-atom-surface",
          "locator": "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        },
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "This finite scope retains a positive ground-state dispersion model and an interaction-sensitive atom-surface phase result. It does not establish universal attraction for every excited state, medium, material, orientation, temperature or separation.",
        "Permanent dipoles, static-field induction, ionic transfer and benzene resonance are separate descriptions. The selected neutral atomic model does not require the original 2.3 molecular-formation case, the 2.4 ionic regime or the 2.5 molecular-resonance stage as universal prerequisites.",
        "No noble-gas cohesion energy, molecular-crystal packing, adsorption isotherm, nonideal-gas coefficient, soft-matter organization or condensed-phase stability is measured by these selected records. Ensemble accumulation and pair additivity need separate models.",
        "Original parent weights 0.4/0.3/0.3, directions [2], interaction modes [0,1], necessary, dependency type 10 and arising roles have no admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent minima/critical counts 2/1/2 and null saturation are catalogue provenance. A chosen two-atom model is not a measured critical molecule, ion, resonance or mode count.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display choices. Generic theoretical and empirical placeholders identify no separately reviewed all-material proof.",
        "The existing plate Casimir/material-response definitions delimit interpretation; no Lamoreaux/Bressi measurement or correction chain is duplicated. Future card 2.19 can reuse these exact records while retaining distinct geometry, material, temperature and readout assumptions.",
        "No raw-data refit, phase digitization, C3/atomic-polarizability fit, dielectric reconstruction, thermal prediction, full microscopic solver or independently reproduced experiment is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:perreault2005-phase-context-perreault-atom-surface-phase",
      "source": "phys:perreault2005-phase-context",
      "target": "phys:perreault-atom-surface-phase",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-perreault2005-phase-context"
      ],
      "role": "measurement-context",
      "assertion": "The reported atom-beam, channel, fringe readout and drift/uncertainty treatment condition the measured relative phase.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:perreault2005-phase-context-perreault-nonretarded-comparison",
      "source": "phys:perreault2005-phase-context",
      "target": "phys:perreault-nonretarded-comparison",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-perreault-nonretarded-comparison"
      ],
      "role": "interpretation-dependency",
      "assertion": "The same acquired phase data and apparatus corrections underlie the nonretarded potential comparison.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:perreault-atom-surface-phase-perreault-nonretarded-comparison",
      "source": "phys:perreault-atom-surface-phase",
      "target": "phys:perreault-nonretarded-comparison",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-perreault-nonretarded-comparison"
      ],
      "role": "interpretation-dependency",
      "assertion": "The observed phase sign and velocity-dependent magnitude are interpreted with the adopted channel potential; they are not a second experiment or a fitted C3.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:ground-state-dispersion-limits-perreault-nonretarded-comparison",
      "source": "phys:ground-state-dispersion-limits",
      "target": "phys:perreault-nonretarded-comparison",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-perreault-nonretarded-comparison"
      ],
      "role": "interpretation-dependency",
      "assertion": "Ideal atom-pair/atom-wall distance limits delimit the dispersion interpretation without equating the ideal conductor coefficient with silicon nitride.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:dispersion-material-observable-boundary-perreault-nonretarded-comparison",
      "source": "phys:dispersion-material-observable-boundary",
      "target": "phys:perreault-nonretarded-comparison",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-perreault-nonretarded-comparison"
      ],
      "role": "interpretation-dependency",
      "assertion": "Measured relative phase, material potential, static-field alternatives and microscopic fluctuation inference remain separate.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:ground-state-dispersion-limits-dispersion-source-scope",
      "source": "phys:ground-state-dispersion-limits",
      "target": "phys:dispersion-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-dispersion-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The supplied ground-state/dipole and separation limits prevent treating one power law as all-distance, all-state or all-material attraction.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:dispersion-material-observable-boundary-dispersion-source-scope",
      "source": "phys:dispersion-material-observable-boundary",
      "target": "phys:dispersion-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-dispersion-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The scoped synthesis retains the difference between a measured phase, supplied material response and unmeasured microscopic fluctuations or bulk cohesion.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:perreault-nonretarded-comparison-dispersion-source-scope",
      "source": "phys:perreault-nonretarded-comparison",
      "target": "phys:dispersion-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-dispersion-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The adopted-C3 comparison contributes one dependent interpretation of the same phase acquisition, with its systematic and geometric limits.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:casimir-material-model-dispersion-source-scope",
      "source": "phys:casimir-material-model",
      "target": "phys:dispersion-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-dispersion-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "Existing electromagnetic material-response interpretation delimits atom-wall/Casimir overlap without adding another acquisition.",
      "contextIds": [
        "perreault2005-phase"
      ]
    },
    {
      "id": "physics:ideal-plate-casimir-dispersion-source-scope",
      "source": "phys:ideal-plate-casimir",
      "target": "phys:dispersion-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-dispersion-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The ideal-plate formal boundary has its own geometry and energy/pressure powers and is not a directly measured atom-wall coefficient.",
      "contextIds": [
        "perreault2005-phase"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:ground-state-dispersion-limits",
      "role": "definition",
      "denotes": "Specified ground-state atom-pair and ideal-wall dispersion limits in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ground-state-dispersion-limits"
      ]
    },
    {
      "nodeId": "phys:dispersion-material-observable-boundary",
      "role": "definition",
      "denotes": "Dispersion, material response and measured-observable boundary in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-dispersion-material-observable-boundary"
      ]
    },
    {
      "nodeId": "phys:perreault2005-phase-context",
      "role": "experimental-context",
      "denotes": "Na/silicon-nitride relative-phase acquisition context in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-perreault2005-phase-context"
      ]
    },
    {
      "nodeId": "phys:perreault-atom-surface-phase",
      "role": "scoped-phenomenon",
      "denotes": "Reported arm-dependent Na atom-surface fringe phase in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-perreault-atom-surface-phase"
      ]
    },
    {
      "nodeId": "phys:perreault-nonretarded-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Conditional nonretarded Na/surface phase comparison in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-perreault-nonretarded-comparison"
      ]
    },
    {
      "nodeId": "phys:dispersion-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped ground-state dispersion and atom-surface evidence in the declared atomic state, distance, geometry and source interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-dispersion-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "perreault2005-phase",
      "sourceId": "perreault2005-atom-surface",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.95.133201",
      "journal": "Physical Review Letters",
      "volume": "95",
      "issue": "13",
      "pages": "133201",
      "system": "Na atom-wave relative phase near silicon-nitride grating walls",
      "preparation": "Use the reported oven-generated Na beam near 2 km/s, collimated by two 10 micrometer slits separated by 1 m, in a Mach-Zehnder interferometer made from three 100 nm-period silicon-nitride gratings. Insert an additional grating G4 with 50 nm-wide and 150 nm-long channels into either arm or out of the paths. Scan the third grating to read fringe phase and contrast; use the co-propagating optical interferometer for vibration compensation. Alternate test/control positions at 50 s intervals and subtract a fifth-order polynomial fit to control-phase drift. Keep the diffraction-order response and the separate statistical/systematic errors in the interpretation.",
      "observable": "Arm-dependent interference fringe displacement/relative phase and contrast, including the velocity comparison",
      "finding": "The author text reports Phi_0≈0.3 rad with opposite sign on swapping the interaction grating between arms and nonzero transmitted fringe contrast. The corrected phase is compared with a nonretarded channel prediction using adopted C3=3 meV*nm^3; no new C3 fit or independently measured microscopic fluctuation is reported.",
      "limitations": [
        "Transmitted atoms pass within 25 nm of a channel wall by the supplied geometry. This is not an imaged individual trajectory, pointwise potential profile, observed adsorption or direct charge-fluctuation measurement.",
        "Figure 3 intensity uncertainties assume Poisson counts for five-second fringe records. Figure 4 instead corrects roughly 30 percent unwanted-order systematic offsets and gives error bars from systematic-parameter uncertainty.",
        "The author v1 is the full text actually reviewed; the final publisher full text was not obtained. No raw count, drift subtraction, channel metrology or covariance replay is supplied.",
        "The Fig.4 adopted C3 and material comparison are not a separately reviewed prior diffraction experiment or a new fitted coefficient.",
        "No raw count fit, drift/systematic replay or finite-temperature/dielectric reconstruction is supplied."
      ],
      "readExtent": "full-author-preprint",
      "reviewedLocators": [
        "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
        "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
        "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.95.133201",
      "correctionCheck": "Full primary author v1 and all figures/equations read; published DOI/title/authors/date checked against publisher and Crossref. The archive contains only v1 dated 24 May 2005, while the current PDF internal date says 16 November 2018; no second experiment inferred. Final publisher full PDF not obtained. No linked correction appeared in the bounded primary-record/DOI search; no exhaustive absence claim."
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
      "id": "casimir1948",
      "kind": "research-publication",
      "title": "On the attraction between two perfectly conducting plates",
      "authors": [
        "H. B. G. Casimir"
      ],
      "year": 1948,
      "doi": null,
      "url": "https://dwc.knaw.nl/DL/publications/PU00018547.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        ],
        "limit": "Complete three-page KNAW scan read; equations on pages 794-795 visually inspected. Original Proceedings 51, pages 793-795, not a later reprint. A boundary-model calculation, not a measurement or a reproduced regulator proof."
      }
    },
    {
      "id": "jaffe2005",
      "kind": "research-publication",
      "title": "Casimir effect and the quantum vacuum",
      "authors": [
        "R. L. Jaffe"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevD.72.021301",
      "url": "https://doi.org/10.1103/PhysRevD.72.021301",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Sections II-III: material response, coupling limits and external-source calculation",
          "Section IV: interpretation limits and unresolved gravitational vacuum energy"
        ],
        "limit": "All five published pages read; Equations 6-9 and Figures 2-3 visually inspected. Theoretical argument about inference, not experimental disproof of quantum fluctuations or a complete all-orders reformulation."
      }
    },
    {
      "id": "casimir-polder1948",
      "kind": "research-publication",
      "title": "The Influence of Retardation on the London-van der Waals Forces",
      "authors": [
        "H. B. G. Casimir",
        "D. Polder"
      ],
      "year": 1948,
      "doi": "10.1103/PhysRev.73.360",
      "url": "https://www.mit.edu/~kardar/research/seminars/Casimir/PR-CasimirPolder48.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-published-passages",
        "locators": [
          "Published pages 361-363, Part I Sections 1-2, Equations 1-16: neutral atom, lowest atomic/field state, conducting boundary, dipole approximation and J=0 simplification",
          "Published pages 364-365, Part I Equations 17-27: combined atom-wall interaction, nonretarded and retarded limits, static polarizability and ideal boundary",
          "Published pages 370-372, Part II Sections 5-6, especially Equations 50-56: two-neutral-atom ground-state result, S-state isotropy and R^-6/R^-7 limits"
        ],
        "limit": "Read published pages 360-365 and 370-372 visually from the original published scan; exclude the unrelated radiocarbon article above the paper on 360. Pages 366-369 and the full intermediate Part II perturbation derivation were not read. The scan has no scientific text layer. Admit only the declared lowest-state/dipole model, analytic distance limits and their assumptions; no reproduced regulator proof, full fourth-order calculation, numerical correction-curve replay, thermal field calculation or modern atomic/material input fit. Publisher record and Crossref identity/date checked; no linked correction appeared in the bounded DOI/title/primary-record check, not an exhaustive absence claim."
      }
    },
    {
      "id": "perreault2005-atom-surface",
      "kind": "research-publication",
      "title": "Observation of Atom Wave Phase Shifts Induced by Van Der Waals Atom-Surface Interactions",
      "authors": [
        "John D. Perreault",
        "Alexander D. Cronin"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevLett.95.133201",
      "url": "https://arxiv.org/pdf/physics/0505160v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-author-preprint",
        "locators": [
          "Author arXiv v1 pages 1-2, Equations 1-4 and Figures 1-2: adopted nonretarded atom-surface potential, local phase, diffraction amplitude, interferometer and channel geometry",
          "Author arXiv v1 pages 2-3, Figure 3: arm-dependent fringe displacement, relative phase, Poisson counting errors, test/control sequence and drift subtraction",
          "Author arXiv v1 pages 3-4, Figure 4 and conclusion: corrected velocity comparison, unwanted-order systematics, adopted C3 and prospective precision limits"
        ],
        "limit": "Read all four pages of the primary author arXiv v1, submitted 24 May 2005; all four figures and Equations 1-4 visually checked. The final publisher full PDF was not obtained. Published identity/DOI/date were checked against the publisher and Crossref. The current author PDF prints a later internal date, 16 November 2018, while the pinned archive version is 2005; no additional 2018 experiment is inferred. The preprint abstract says QED while the publisher abstract says Lifshitz; no complete publisher-text identity or separately reviewed Lifshitz derivation is claimed. No raw fringe data, C3 fit, diffraction/drift/systematic replay or cited prior diffraction acquisition is reproduced. No linked correction appeared in the bounded primary-record/DOI search; no exhaustive absence claim."
      }
    }
  ]
};

/** Preserve ground-state geometry limits and the conditional atom-surface phase comparison. */
export function validateDispersionContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Dispersion ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
