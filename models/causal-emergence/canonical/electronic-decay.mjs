import assert from "node:assert/strict";

export const ELECTRONIC_DECAY_CHECKS = new Map();
export const ELECTRONIC_DECAY_ANALYTICAL_SOURCES = new Map();
export const ELECTRONIC_DECAY_STUDY_TYPES = new Map([["litvinov2007-pr-charge-states", "primary-experiment"]]);
export const ELECTRONIC_DECAY_ADMISSION = {
  "definitions": [
    [
      "phys:orbital-ec-channel-boundary",
      "D-phys-orbital-ec-channel-boundary"
    ],
    [
      "phys:ec-population-loss-model",
      "D-phys-ec-population-loss-model"
    ]
  ],
  "formalDependencies": [
    [
      "physics:atomic-binding-formation-distinction-orbital-ec-channel-boundary",
      [
        "phys:atomic-binding-formation-distinction",
        "phys:orbital-ec-channel-boundary"
      ]
    ],
    [
      "physics:orbital-ec-channel-boundary-ec-population-loss-model",
      [
        "phys:orbital-ec-channel-boundary",
        "phys:ec-population-loss-model"
      ]
    ]
  ],
  "contexts": [
    [
      "litvinov2007-pr-context",
      "M-phys-litvinov2007-pr-context",
      [
        "litvinov2007-pr-charge-states"
      ]
    ]
  ],
  "observations": [
    [
      "litvinov2007-pr-schottky",
      "C-phys-litvinov2007-pr-schottky",
      [
        "litvinov2007-pr-charge-states"
      ]
    ],
    [
      "litvinov2007-pr-ec-rates",
      "C-phys-litvinov2007-pr-ec-rates",
      [
        "litvinov2007-pr-charge-states"
      ]
    ],
    [
      "litvinov2007-pr-hyperfine-inference",
      "C-phys-litvinov2007-pr-hyperfine-inference",
      [
        "litvinov2007-pr-charge-states"
      ]
    ],
    [
      "electronic-decay-source-scope",
      "C-phys-electronic-decay-source-scope",
      [
        "litvinov2007-pr-charge-states"
      ]
    ]
  ],
  "dependencies": [
    [
      "litvinov2007-pr-context-litvinov2007-pr-schottky",
      "litvinov2007-pr-context",
      "litvinov2007-pr-schottky",
      "M-phys-litvinov2007-pr-context",
      "measurement-context"
    ],
    [
      "litvinov2007-pr-schottky-litvinov2007-pr-ec-rates",
      "litvinov2007-pr-schottky",
      "litvinov2007-pr-ec-rates",
      "M-phys-litvinov2007-pr-ec-rates",
      "interpretation-dependency"
    ],
    [
      "ec-population-loss-model-litvinov2007-pr-ec-rates",
      "ec-population-loss-model",
      "litvinov2007-pr-ec-rates",
      "M-phys-litvinov2007-pr-ec-rates",
      "interpretation-dependency"
    ],
    [
      "litvinov2007-pr-ec-rates-litvinov2007-pr-hyperfine-inference",
      "litvinov2007-pr-ec-rates",
      "litvinov2007-pr-hyperfine-inference",
      "M-phys-litvinov2007-pr-hyperfine-inference",
      "interpretation-dependency"
    ],
    [
      "litvinov2007-pr-ec-rates-electronic-decay-source-scope",
      "litvinov2007-pr-ec-rates",
      "electronic-decay-source-scope",
      "M-phys-electronic-decay-source-scope",
      "interpretation-dependency"
    ],
    [
      "litvinov2007-pr-hyperfine-inference-electronic-decay-source-scope",
      "litvinov2007-pr-hyperfine-inference",
      "electronic-decay-source-scope",
      "M-phys-electronic-decay-source-scope",
      "interpretation-dependency"
    ],
    [
      "orbital-ec-channel-boundary-electronic-decay-source-scope",
      "orbital-ec-channel-boundary",
      "electronic-decay-source-scope",
      "M-phys-electronic-decay-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "litvinov2007-pr-charge-states"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-litvinov2007-pr-context",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "C-phys-litvinov2007-pr-schottky",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "C-phys-litvinov2007-pr-ec-rates",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "M-phys-litvinov2007-pr-ec-rates",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "C-phys-litvinov2007-pr-hyperfine-inference",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "M-phys-litvinov2007-pr-hyperfine-inference",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "C-phys-electronic-decay-source-scope",
      [
        "litvinov2007-pr-ec"
      ]
    ],
    [
      "M-phys-electronic-decay-source-scope",
      [
        "litvinov2007-pr-ec"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-orbital-ec-channel-boundary",
      "kind": "review-finding",
      "statement": "Orbital electron capture consumes a bound electron in a specified nuclear transition and emits an electron neutrino; in the selected 140Pr to 140Ce channel it converts a proton to a neutron, preserves mass number A=140 and lowers nuclear charge Z from 59 to 58. Initial bare 140Pr59+, hydrogenlike 140Pr58+ and heliumlike 140Pr57+ carry zero, one and two bound electrons respectively. EC removes one bound electron while lowering Z by one, so the daughter ionic charge remains the same. Changing the initial ionization state does not change which parent isotope is prepared; the subsequent nuclear decay does change the element.",
      "scope": "Isotope-, channel- and electronic-occupancy definition for the selected storage-ring orbital EC experiment.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Absence of bound electrons removes this orbital EC channel. This is not a universal prohibition of continuum-electron capture in an electron bath, all weak transitions or every possible electron-mediated process.",
        "Nuclear electron capture is distinct from an electron binding to an ion during atomic neutralization. No change of a nuclear matrix element or universal nuclear identity invariance through the decay is established.",
        "The selected ion experiment is not a chemical-bonding, molecular-solvation, pressure or lattice-embedding experiment; a bound-electron count is a preparation label rather than an emergence minimum."
      ]
    },
    {
      "id": "D-phys-ec-population-loss-model",
      "kind": "review-finding",
      "statement": "For the source constant-rate fit in one consistent time frame, parent disappearance obeys N_Pr(t)=N_Pr(0)*exp(-lambda_all*t), with lambda_all=lambda_EC+lambda_betaPlus+lambda_loss. Stable EC-daughter growth obeys N_Ce(t)=N_Pr(0)*lambda_EC/(lambda_all-lambda_loss)*[exp(-lambda_loss*t)-exp(-lambda_all*t)]+N_Ce(0)*exp(-lambda_loss*t). Loss includes residual-gas collisions and electron pickup in the cooler; it is not nuclear decay. The source Table I rates are in the ion rest frame, while Figure 2 times are laboratory times: for a constant Lorentz factor gamma, t_lab=gamma*t_rest and lambda_rest=gamma*lambda_lab.",
      "scope": "Declared population-analysis convention for loss-corrected Pr/Ce beam intensities; constant rates and common time frame.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Parent disappearance alone does not separate EC, beta+ and beam losses. The EC-daughter growth and loss model supply the separation; the reported rates are fit-dependent rather than counts of independently observed nuclear events.",
        "Use the population equation only under the supplied constant-rate/no-feeding assumptions. The source uses mechanical slits to avoid feeding; neither arbitrary time-dependent kinetics nor oscillatory decay is admitted.",
        "The tabulated partial nuclear rates are not the uncorrected total beam-disappearance constant. No raw-data refit, covariance reconstruction or independent rate/half-life calculation is claimed."
      ]
    },
    {
      "id": "M-phys-litvinov2007-pr-context",
      "kind": "method",
      "statement": "Produce 140Pr by fragmenting 152Sm projectiles at 508 MeV/u on a 1 g/cm^2 Be target, separate bare 59+, H-like 58+ and He-like 57+ charge states with the FRS, and inject them into the ESR under approximately 1e-11 mbar vacuum. Use stochastic and electron cooling near a stored-beam energy of 400 MeV/u, with an overall cooling time about 2 s. Record non-destructive time-resolved Schottky spectra: circulating ions induce pickup signals, Fourier spectra distinguish mass-to-charge peaks, and peak areas track stored populations. The example uses the 31st harmonic and averages each of 195 spectra over 10.5 s. Mechanical slits suppress feeding from other stored ions. Figure 2 time is laboratory time; the source uses gamma=1.43 to report rest-frame rates.",
      "scope": "Publication-specific Pr140 charge-state preparation, cooled storage and non-destructive Schottky acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "C-phys-litvinov2007-pr-schottky",
      "kind": "review-finding",
      "statement": "In the source Schottky sequence for H-like 140Pr58+, the assigned parent-frequency intensity decreases while the 140Ce58+ daughter intensity grows. The EC channel preserves ionic charge and gives an approximately 270 Hz frequency displacement at the 31st harmonic in the source example. These are mass-to-charge spectral assignments and time-dependent integrated intensities; nuclear partial decay constants require the separate population/loss fit.",
      "scope": "Assigned Pr/Ce Schottky peak evolution for the supplied stored H-like parent sample.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "C-phys-litvinov2007-pr-ec-rates",
      "kind": "review-finding",
      "statement": "The source Table I reports rest-frame partial constants in s^-1: bare 140Pr59+ lambda_betaPlus=0.00158(8), with no orbital-EC entry; H-like 140Pr58+ lambda_betaPlus=0.00161(10) and lambda_EC=0.00219(6); He-like 140Pr57+ lambda_betaPlus=0.00154(11) and lambda_EC=0.00147(7). The source EC ratio H-like/He-like is 1.49(8), despite reducing the bound-electron count from two to one. The beta+ values agree within their reported errors. The accompanying reported mean beam-loss constant is 0.0003(1) s^-1 and is not added to a nuclear partial rate as if it were another nuclear channel.",
      "scope": "Source-fitted rest-frame Pr140 EC/beta+ partial rates and the reported H-like/He-like comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level.",
        "The orbital-EC dash for the bare preparation is an unavailable bound-electron channel, not a fitted universal zero for continuum capture or all nuclear decay. The three charge states do not define a monotonic electron-count rate law.",
        "The rate ratio is a source result from the same charge-state experiment. No new uncertainty propagation, independent isotope replication or universal chemical-environment coefficient is derived.",
        "The paper reuses lambda for total observed disappearance and in its later half-life comparison. This admission retains the explicitly separated partial constants rather than assigning the quoted nuclear half-life to uncorrected beam loss."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "M-phys-litvinov2007-pr-ec-rates",
      "kind": "method",
      "statement": "Infer partial rates by fitting the same parent-decay and stable EC-daughter-growth signals to the declared population model, including a beam-loss term and suppressed feeding. Preserve laboratory versus rest time, charge-state assignment and reported uncertainty notation. Compare the source H-like and He-like EC constants only after separating EC from beta+ decay and storage losses.",
      "scope": "Interpretation contract for charge-state-specific partial-rate extraction from the same Schottky acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level.",
        "The orbital-EC dash for the bare preparation is an unavailable bound-electron channel, not a fitted universal zero for continuum capture or all nuclear decay. The three charge states do not define a monotonic electron-count rate law.",
        "The rate ratio is a source result from the same charge-state experiment. No new uncertainty propagation, independent isotope replication or universal chemical-environment coefficient is derived.",
        "The paper reuses lambda for total observed disappearance and in its later half-life comparison. This admission retains the explicitly separated partial constants rather than assigning the quoted nuclear half-life to uncorrected beam loss."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "C-phys-litvinov2007-pr-hyperfine-inference",
      "kind": "review-finding",
      "statement": "The source interprets the selected 140Pr nuclear-spin-1 to 140Ce spin-0 Gamow-Teller channel using H-like initial hyperfine F=1/2 or 3/2. In the allowed approximation only F=1/2 couples to the stated final nuclear-spin-0 plus neutrino-spin-1/2 state. With the source-assumed lower F=1/2 population, its statistical factor (2*I_i+1)/(2*F_i+1)=3/2 accounts for the enhanced H-like versus He-like EC rate. Thus electron occupancy alone is insufficient to specify the channel rate; nuclear/electronic angular momentum and state populations enter the interpretation.",
      "scope": "Source conditional hyperfine-state interpretation of the fitted Pr140 H-like/He-like EC contrast.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 140Pr positive nuclear magnetic moment and lower-F assignment are deduced in this source from neighboring nuclei, not directly measured here. The approximately 0.03 s relaxation time is an adopted estimate, compared with approximately 2 s cooling.",
        "Dominant lower-hyperfine population and negligible repopulation by ring fields are source assumptions/arguments, not a state-resolved spin-population measurement in this experiment.",
        "The 3/2 factor is the source conditional angular-momentum/statistical explanation for this transition, not a universal occupancy rule, a new computed nuclear matrix element or an independently verified prediction.",
        "The allowed-channel restriction is not an assertion that all higher-order transitions or capture in arbitrary electronic/thermal environments are impossible. No GSI time-modulation or neutrino-oscillation claim is admitted."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "M-phys-litvinov2007-pr-hyperfine-inference",
      "kind": "method",
      "statement": "Interpret the measured charge-state rate contrast with the specified nuclear-spin transition, allowed angular-momentum coupling and source-assumed hyperfine ordering/populations. Keep the source estimate of positive moment, relaxation and negligible upper-state repopulation separate from the measured Schottky intensities and fitted rate ratio. No spin preparation, nuclear-moment measurement or independent new experiment is thereby created.",
      "scope": "Method contract for source-reported hyperfine interpretation, rather than an occupancy-only rate law.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 140Pr positive nuclear magnetic moment and lower-F assignment are deduced in this source from neighboring nuclei, not directly measured here. The approximately 0.03 s relaxation time is an adopted estimate, compared with approximately 2 s cooling.",
        "Dominant lower-hyperfine population and negligible repopulation by ring fields are source assumptions/arguments, not a state-resolved spin-population measurement in this experiment.",
        "The 3/2 factor is the source conditional angular-momentum/statistical explanation for this transition, not a universal occupancy rule, a new computed nuclear matrix element or an independently verified prediction.",
        "The allowed-channel restriction is not an assertion that all higher-order transitions or capture in arbitrary electronic/thermal environments are impossible. No GSI time-modulation or neutrino-oscillation claim is admitted."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "C-phys-electronic-decay-source-scope",
      "kind": "review-finding",
      "statement": "The reviewed primary experiment supports a finite electronic-state sensitivity of one nuclear channel: fitted orbital EC of stored H-like 140Pr58+ is faster than He-like 140Pr57+, while the measured beta+ partial rates agree within their reported errors. The Schottky acquisition, loss-corrected nuclear-rate inference and conditional hyperfine explanation remain separate roles within the same publication. This positive case constrains an occupancy-only story and does not extend to every nuclear decay or ordinary chemical environment.",
      "scope": "Scoped replacement for original Level 2 card /18 using one isotope-specific primary charge-state experiment.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original card /18 supplies draft scope and asserted metadata only; it is not empirical support."
        },
        {
          "sourceId": "legacy-1",
          "locator": "/",
          "role": "provenance",
          "note": "Original parent catalogue JSON pointer: /12, Particle Decays. The broad draft category and its metadata do not supply an empirical Pr140 channel, rate or causal weight."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original necessary parents 2.2 and 1.12, weights 0.35/0.65, downward-causation/constraint codes and carrier group1/type1 N_min=N_crit=1 and N_sat=null are not established causal or numerical thresholds. The catalogue group/type pairing is inconsistent with the carrier dictionary and is not resolved as a physical particle type. The prose diagonal/SOMA label does not resolve or validate those coded directions.",
        "Ionization preserves the prepared parent isotope, but EC itself converts Pr to Ce. No invariant nuclear identity through decay, changed intrinsic nuclear matrix element, universal nuclear-electronic coupling law or newly generated cross-level rule is demonstrated.",
        "This finite highly ionized EC comparison does not establish molecular, chemical-bonding or solid-state/lattice effects, a universal density-at-the-nucleus coefficient, or how most ordinary decay modes respond to chemistry. Other isotopes and bound-beta cases cited in the source introduction are outside the primary admission.",
        "Orbital occupancy, nuclear/lepton angular momentum and assumed hyperfine populations are distinct dependencies; fewer electrons do not imply a universally slower EC rate. The source beta+ agreement is limited by its reported precision and is not proof that all beta, alpha or gamma rates are exactly environment-independent.",
        "Level 2 is a display grouping. Phase 2, TypeRole 3 Property, science tags, well-supported status and SOMA diagonal linkage supply no measured developmental phase, carrier minimum or universal causal hierarchy.",
        "Theoretical and empirical Evidence placeholders have null publication identifiers. Replace them with the actual primary charge-state experiment and its conditional source interpretation; no ordinary chemical intervention, broad literature survey, oscillation signal or independent numerical replay is claimed.",
        "Constraint/resource requirement codes do not supply physical thresholds. The selected projectile production, cooling, vacuum and Schottky pickup are preparation/readout context; no universal sustained resource requirement for nuclear decay is inferred.",
        "Original parent 1.12, Particle Decays, is a broad category of unstable-state transformations under symmetry, conservation and interaction-channel constraints. Its lifetime and branching vocabulary does not determine the Pr140 EC/beta+ channel partition, bound-electron or hyperfine preparation, beam-loss correction or laboratory/rest-frame model. It supplies no measured 0.65 causal weight, unit carrier minimum, universal daughter stability or general cosmological population law."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "M-phys-electronic-decay-source-scope",
      "kind": "method",
      "statement": "Join the source Schottky intensities, fitted EC/beta+ partial rates and conditional hyperfine interpretation only within the same Pr140 charge-state experiment. Retain loss and time-frame conventions, initial isotope versus daughter identity, magnetic-moment/population assumptions and finite precision. Do not convert one acquisition into multiple confirmations or infer generic chemical effects, universal decay control, old parent weights or particle minima.",
      "scope": "Interpretation dependencies for the finite Pr140 electronic-environment decay case.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor",
          "role": "method",
          "note": "Supports the declared source-reported preparation, population fit or conditional interpretation only; no independent replay."
        },
        {
          "sourceId": "legacy-1",
          "locator": "/",
          "role": "provenance",
          "note": "Original parent catalogue JSON pointer: /12, Particle Decays. The broad draft category and its metadata do not supply an empirical Pr140 channel, rate or causal weight."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original necessary parents 2.2 and 1.12, weights 0.35/0.65, downward-causation/constraint codes and carrier group1/type1 N_min=N_crit=1 and N_sat=null are not established causal or numerical thresholds. The catalogue group/type pairing is inconsistent with the carrier dictionary and is not resolved as a physical particle type. The prose diagonal/SOMA label does not resolve or validate those coded directions.",
        "Ionization preserves the prepared parent isotope, but EC itself converts Pr to Ce. No invariant nuclear identity through decay, changed intrinsic nuclear matrix element, universal nuclear-electronic coupling law or newly generated cross-level rule is demonstrated.",
        "This finite highly ionized EC comparison does not establish molecular, chemical-bonding or solid-state/lattice effects, a universal density-at-the-nucleus coefficient, or how most ordinary decay modes respond to chemistry. Other isotopes and bound-beta cases cited in the source introduction are outside the primary admission.",
        "Orbital occupancy, nuclear/lepton angular momentum and assumed hyperfine populations are distinct dependencies; fewer electrons do not imply a universally slower EC rate. The source beta+ agreement is limited by its reported precision and is not proof that all beta, alpha or gamma rates are exactly environment-independent.",
        "Level 2 is a display grouping. Phase 2, TypeRole 3 Property, science tags, well-supported status and SOMA diagonal linkage supply no measured developmental phase, carrier minimum or universal causal hierarchy.",
        "Theoretical and empirical Evidence placeholders have null publication identifiers. Replace them with the actual primary charge-state experiment and its conditional source interpretation; no ordinary chemical intervention, broad literature survey, oscillation signal or independent numerical replay is claimed.",
        "Constraint/resource requirement codes do not supply physical thresholds. The selected projectile production, cooling, vacuum and Schottky pickup are preparation/readout context; no universal sustained resource requirement for nuclear decay is inferred.",
        "Original parent 1.12, Particle Decays, is a broad category of unstable-state transformations under symmetry, conservation and interaction-channel constraints. Its lifetime and branching vocabulary does not determine the Pr140 EC/beta+ channel partition, bound-electron or hyperfine preparation, beam-loss correction or laboratory/rest-frame model. It supplies no measured 0.65 causal weight, unit carrier minimum, universal daughter stability or general cosmological population law."
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:orbital-ec-channel-boundary",
      "name": "Orbital electron capture and charge-state boundary",
      "kind": "definition",
      "description": "Orbital electron capture consumes a bound electron in a specified nuclear transition and emits an electron neutrino; in the selected 140Pr to 140Ce channel it converts a proton to a neutron, preserves mass number A=140 and lowers nuclear charge Z from 59 to 58. Initial bare 140Pr59+, hydrogenlike 140Pr58+ and heliumlike 140Pr57+ carry zero, one and two bound electrons respectively. EC removes one bound electron while lowering Z by one, so the daughter ionic charge remains the same. Changing the initial ionization state does not change which parent isotope is prepared; the subsequent nuclear decay does change the element.",
      "claimIds": [
        "D-phys-orbital-ec-channel-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        }
      ],
      "openObligations": [
        "Absence of bound electrons removes this orbital EC channel. This is not a universal prohibition of continuum-electron capture in an electron bath, all weak transitions or every possible electron-mediated process.",
        "Nuclear electron capture is distinct from an electron binding to an ion during atomic neutralization. No change of a nuclear matrix element or universal nuclear identity invariance through the decay is established.",
        "The selected ion experiment is not a chemical-bonding, molecular-solvation, pressure or lattice-embedding experiment; a bound-electron count is a preparation label rather than an emergence minimum."
      ]
    },
    {
      "id": "phys:ec-population-loss-model",
      "name": "Decay-channel population model versus beam loss",
      "kind": "definition",
      "description": "For the source constant-rate fit in one consistent time frame, parent disappearance obeys N_Pr(t)=N_Pr(0)*exp(-lambda_all*t), with lambda_all=lambda_EC+lambda_betaPlus+lambda_loss. Stable EC-daughter growth obeys N_Ce(t)=N_Pr(0)*lambda_EC/(lambda_all-lambda_loss)*[exp(-lambda_loss*t)-exp(-lambda_all*t)]+N_Ce(0)*exp(-lambda_loss*t). Loss includes residual-gas collisions and electron pickup in the cooler; it is not nuclear decay. The source Table I rates are in the ion rest frame, while Figure 2 times are laboratory times: for a constant Lorentz factor gamma, t_lab=gamma*t_rest and lambda_rest=gamma*lambda_lab.",
      "claimIds": [
        "D-phys-ec-population-loss-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term"
        }
      ],
      "openObligations": [
        "Parent disappearance alone does not separate EC, beta+ and beam losses. The EC-daughter growth and loss model supply the separation; the reported rates are fit-dependent rather than counts of independently observed nuclear events.",
        "Use the population equation only under the supplied constant-rate/no-feeding assumptions. The source uses mechanical slits to avoid feeding; neither arbitrary time-dependent kinetics nor oscillatory decay is admitted.",
        "The tabulated partial nuclear rates are not the uncorrected total beam-disappearance constant. No raw-data refit, covariance reconstruction or independent rate/half-life calculation is claimed."
      ]
    },
    {
      "id": "phys:litvinov2007-pr-context",
      "name": "Litvinov Pr140 charge-state storage and Schottky acquisition",
      "kind": "context",
      "description": "Produce 140Pr by fragmenting 152Sm projectiles at 508 MeV/u on a 1 g/cm^2 Be target, separate bare 59+, H-like 58+ and He-like 57+ charge states with the FRS, and inject them into the ESR under approximately 1e-11 mbar vacuum. Use stochastic and electron cooling near a stored-beam energy of 400 MeV/u, with an overall cooling time about 2 s. Record non-destructive time-resolved Schottky spectra: circulating ions induce pickup signals, Fourier spectra distinguish mass-to-charge peaks, and peak areas track stored populations. The example uses the 31st harmonic and averages each of 195 spectra over 10.5 s. Mechanical slits suppress feeding from other stored ions. Figure 2 time is laboratory time; the source uses gamma=1.43 to report rest-frame rates.",
      "claimIds": [
        "M-phys-litvinov2007-pr-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term"
        }
      ],
      "openObligations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level."
      ]
    },
    {
      "id": "phys:litvinov2007-pr-schottky",
      "name": "Pr140/Ce140 Schottky intensity evolution",
      "kind": "scoped-process",
      "description": "In the source Schottky sequence for H-like 140Pr58+, the assigned parent-frequency intensity decreases while the 140Ce58+ daughter intensity grows. The EC channel preserves ionic charge and gives an approximately 270 Hz frequency displacement at the 31st harmonic in the source example. These are mass-to-charge spectral assignments and time-dependent integrated intensities; nuclear partial decay constants require the separate population/loss fit.",
      "claimIds": [
        "C-phys-litvinov2007-pr-schottky"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        }
      ],
      "openObligations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level."
      ]
    },
    {
      "id": "phys:litvinov2007-pr-ec-rates",
      "name": "Reported charge-state-dependent Pr140 EC partial rates",
      "kind": "scoped-process",
      "description": "The source Table I reports rest-frame partial constants in s^-1: bare 140Pr59+ lambda_betaPlus=0.00158(8), with no orbital-EC entry; H-like 140Pr58+ lambda_betaPlus=0.00161(10) and lambda_EC=0.00219(6); He-like 140Pr57+ lambda_betaPlus=0.00154(11) and lambda_EC=0.00147(7). The source EC ratio H-like/He-like is 1.49(8), despite reducing the bound-electron count from two to one. The beta+ values agree within their reported errors. The accompanying reported mean beam-loss constant is 0.0003(1) s^-1 and is not added to a nuclear partial rate as if it were another nuclear channel.",
      "claimIds": [
        "C-phys-litvinov2007-pr-ec-rates"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term"
        }
      ],
      "openObligations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level.",
        "The orbital-EC dash for the bare preparation is an unavailable bound-electron channel, not a fitted universal zero for continuum capture or all nuclear decay. The three charge states do not define a monotonic electron-count rate law.",
        "The rate ratio is a source result from the same charge-state experiment. No new uncertainty propagation, independent isotope replication or universal chemical-environment coefficient is derived.",
        "The paper reuses lambda for total observed disappearance and in its later half-life comparison. This admission retains the explicitly separated partial constants rather than assigning the quoted nuclear half-life to uncorrected beam loss."
      ]
    },
    {
      "id": "phys:litvinov2007-pr-hyperfine-inference",
      "name": "Conditional hyperfine interpretation of Pr140 EC enhancement",
      "kind": "scoped-process",
      "description": "The source interprets the selected 140Pr nuclear-spin-1 to 140Ce spin-0 Gamow-Teller channel using H-like initial hyperfine F=1/2 or 3/2. In the allowed approximation only F=1/2 couples to the stated final nuclear-spin-0 plus neutrino-spin-1/2 state. With the source-assumed lower F=1/2 population, its statistical factor (2*I_i+1)/(2*F_i+1)=3/2 accounts for the enhanced H-like versus He-like EC rate. Thus electron occupancy alone is insufficient to specify the channel rate; nuclear/electronic angular momentum and state populations enter the interpretation.",
      "claimIds": [
        "C-phys-litvinov2007-pr-hyperfine-inference"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor"
        }
      ],
      "openObligations": [
        "The 140Pr positive nuclear magnetic moment and lower-F assignment are deduced in this source from neighboring nuclei, not directly measured here. The approximately 0.03 s relaxation time is an adopted estimate, compared with approximately 2 s cooling.",
        "Dominant lower-hyperfine population and negligible repopulation by ring fields are source assumptions/arguments, not a state-resolved spin-population measurement in this experiment.",
        "The 3/2 factor is the source conditional angular-momentum/statistical explanation for this transition, not a universal occupancy rule, a new computed nuclear matrix element or an independently verified prediction.",
        "The allowed-channel restriction is not an assertion that all higher-order transitions or capture in arbitrary electronic/thermal environments are impossible. No GSI time-modulation or neutrino-oscillation claim is admitted."
      ]
    },
    {
      "id": "phys:electronic-decay-source-scope",
      "name": "Electronic-state sensitivity within a declared nuclear EC channel",
      "kind": "scoped-process",
      "description": "The reviewed primary experiment supports a finite electronic-state sensitivity of one nuclear channel: fitted orbital EC of stored H-like 140Pr58+ is faster than He-like 140Pr57+, while the measured beta+ partial rates agree within their reported errors. The Schottky acquisition, loss-corrected nuclear-rate inference and conditional hyperfine explanation remain separate roles within the same publication. This positive case constrains an occupancy-only story and does not extend to every nuclear decay or ordinary chemical environment.",
      "claimIds": [
        "C-phys-electronic-decay-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term"
        },
        {
          "sourceId": "litvinov2007-pr-ec",
          "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        },
        {
          "sourceId": "legacy-1",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original necessary parents 2.2 and 1.12, weights 0.35/0.65, downward-causation/constraint codes and carrier group1/type1 N_min=N_crit=1 and N_sat=null are not established causal or numerical thresholds. The catalogue group/type pairing is inconsistent with the carrier dictionary and is not resolved as a physical particle type. The prose diagonal/SOMA label does not resolve or validate those coded directions.",
        "Ionization preserves the prepared parent isotope, but EC itself converts Pr to Ce. No invariant nuclear identity through decay, changed intrinsic nuclear matrix element, universal nuclear-electronic coupling law or newly generated cross-level rule is demonstrated.",
        "This finite highly ionized EC comparison does not establish molecular, chemical-bonding or solid-state/lattice effects, a universal density-at-the-nucleus coefficient, or how most ordinary decay modes respond to chemistry. Other isotopes and bound-beta cases cited in the source introduction are outside the primary admission.",
        "Orbital occupancy, nuclear/lepton angular momentum and assumed hyperfine populations are distinct dependencies; fewer electrons do not imply a universally slower EC rate. The source beta+ agreement is limited by its reported precision and is not proof that all beta, alpha or gamma rates are exactly environment-independent.",
        "Level 2 is a display grouping. Phase 2, TypeRole 3 Property, science tags, well-supported status and SOMA diagonal linkage supply no measured developmental phase, carrier minimum or universal causal hierarchy.",
        "Theoretical and empirical Evidence placeholders have null publication identifiers. Replace them with the actual primary charge-state experiment and its conditional source interpretation; no ordinary chemical intervention, broad literature survey, oscillation signal or independent numerical replay is claimed.",
        "Constraint/resource requirement codes do not supply physical thresholds. The selected projectile production, cooling, vacuum and Schottky pickup are preparation/readout context; no universal sustained resource requirement for nuclear decay is inferred.",
        "Original parent 1.12, Particle Decays, is a broad category of unstable-state transformations under symmetry, conservation and interaction-channel constraints. Its lifetime and branching vocabulary does not determine the Pr140 EC/beta+ channel partition, bound-electron or hyperfine preparation, beam-loss correction or laboratory/rest-frame model. It supplies no measured 0.65 causal weight, unit carrier minimum, universal daughter stability or general cosmological population law."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:atomic-binding-formation-distinction-orbital-ec-channel-boundary",
      "source": "phys:atomic-binding-formation-distinction",
      "target": "phys:orbital-ec-channel-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify an already supplied ionic electronic state and distinguish nuclear orbital capture from atomic neutralization; this does not establish an old necessary parent or formation sequence.",
      "claimIds": [
        "D-phys-orbital-ec-channel-boundary"
      ]
    },
    {
      "id": "physics:orbital-ec-channel-boundary-ec-population-loss-model",
      "source": "phys:orbital-ec-channel-boundary",
      "target": "phys:ec-population-loss-model",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify the selected nuclear channel and ionic-state labels before distinguishing partial decay and nonnuclear storage loss.",
      "claimIds": [
        "D-phys-ec-population-loss-model"
      ]
    },
    {
      "id": "physics:litvinov2007-pr-context-litvinov2007-pr-schottky",
      "source": "phys:litvinov2007-pr-context",
      "target": "phys:litvinov2007-pr-schottky",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The selected production, storage and pickup preparation defines the indirect parent/daughter spectral time series.",
      "claimIds": [
        "M-phys-litvinov2007-pr-context"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:litvinov2007-pr-schottky-litvinov2007-pr-ec-rates",
      "source": "phys:litvinov2007-pr-schottky",
      "target": "phys:litvinov2007-pr-ec-rates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Use the same population data with the stated loss/time-frame model to infer partial nuclear rates; no new acquisition is created.",
      "claimIds": [
        "M-phys-litvinov2007-pr-ec-rates"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:ec-population-loss-model-litvinov2007-pr-ec-rates",
      "source": "phys:ec-population-loss-model",
      "target": "phys:litvinov2007-pr-ec-rates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Use the same population data with the stated loss/time-frame model to infer partial nuclear rates; no new acquisition is created.",
      "claimIds": [
        "M-phys-litvinov2007-pr-ec-rates"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:litvinov2007-pr-ec-rates-litvinov2007-pr-hyperfine-inference",
      "source": "phys:litvinov2007-pr-ec-rates",
      "target": "phys:litvinov2007-pr-hyperfine-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The enhanced fitted EC ratio is interpreted under explicit hyperfine ordering, angular-momentum and population assumptions, not electron number alone.",
      "claimIds": [
        "M-phys-litvinov2007-pr-hyperfine-inference"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:litvinov2007-pr-ec-rates-electronic-decay-source-scope",
      "source": "phys:litvinov2007-pr-ec-rates",
      "target": "phys:electronic-decay-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve isotope/channel, observation, partial-rate and conditional-state interpretation in the finite source scope without universal causal ancestry.",
      "claimIds": [
        "M-phys-electronic-decay-source-scope"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:litvinov2007-pr-hyperfine-inference-electronic-decay-source-scope",
      "source": "phys:litvinov2007-pr-hyperfine-inference",
      "target": "phys:electronic-decay-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve isotope/channel, observation, partial-rate and conditional-state interpretation in the finite source scope without universal causal ancestry.",
      "claimIds": [
        "M-phys-electronic-decay-source-scope"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    },
    {
      "id": "physics:orbital-ec-channel-boundary-electronic-decay-source-scope",
      "source": "phys:orbital-ec-channel-boundary",
      "target": "phys:electronic-decay-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve isotope/channel, observation, partial-rate and conditional-state interpretation in the finite source scope without universal causal ancestry.",
      "claimIds": [
        "M-phys-electronic-decay-source-scope"
      ],
      "contextIds": [
        "litvinov2007-pr-charge-states"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:orbital-ec-channel-boundary",
      "role": "definition",
      "denotes": "Isotope-, channel- and electronic-occupancy definition for the selected storage-ring orbital EC experiment.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-orbital-ec-channel-boundary"
      ]
    },
    {
      "nodeId": "phys:ec-population-loss-model",
      "role": "definition",
      "denotes": "Declared population-analysis convention for loss-corrected Pr/Ce beam intensities; constant rates and common time frame.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ec-population-loss-model"
      ]
    },
    {
      "nodeId": "phys:litvinov2007-pr-context",
      "role": "experimental-context",
      "denotes": "Publication-specific Pr140 charge-state preparation, cooled storage and non-destructive Schottky acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-litvinov2007-pr-context"
      ]
    },
    {
      "nodeId": "phys:litvinov2007-pr-schottky",
      "role": "scoped-phenomenon",
      "denotes": "Assigned Pr/Ce Schottky peak evolution for the supplied stored H-like parent sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-litvinov2007-pr-schottky"
      ]
    },
    {
      "nodeId": "phys:litvinov2007-pr-ec-rates",
      "role": "scoped-phenomenon",
      "denotes": "Source-fitted rest-frame Pr140 EC/beta+ partial rates and the reported H-like/He-like comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-litvinov2007-pr-ec-rates"
      ]
    },
    {
      "nodeId": "phys:litvinov2007-pr-hyperfine-inference",
      "role": "scoped-phenomenon",
      "denotes": "Source conditional hyperfine-state interpretation of the fitted Pr140 H-like/He-like EC contrast.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-litvinov2007-pr-hyperfine-inference"
      ]
    },
    {
      "nodeId": "phys:electronic-decay-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped replacement for original Level 2 card /18 using one isotope-specific primary charge-state experiment.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-electronic-decay-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "litvinov2007-pr-charge-states",
      "sourceId": "litvinov2007-pr-ec",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.99.262501",
      "journal": "Physical Review Letters",
      "volume": "99",
      "issue": "26",
      "pages": "262501",
      "system": "Selected bare/H-like/He-like 140Pr ions and EC daughter 140Ce in the ESR storage ring",
      "preparation": "Produce 140Pr by fragmenting 152Sm projectiles at 508 MeV/u on a 1 g/cm^2 Be target, separate bare 59+, H-like 58+ and He-like 57+ charge states with the FRS, and inject them into the ESR under approximately 1e-11 mbar vacuum. Use stochastic and electron cooling near a stored-beam energy of 400 MeV/u, with an overall cooling time about 2 s. Record non-destructive time-resolved Schottky spectra: circulating ions induce pickup signals, Fourier spectra distinguish mass-to-charge peaks, and peak areas track stored populations. The example uses the 31st harmonic and averages each of 195 spectra over 10.5 s. Mechanical slits suppress feeding from other stored ions. Figure 2 time is laboratory time; the source uses gamma=1.43 to report rest-frame rates.",
      "observable": "Parent and EC-daughter Schottky frequency-peak integrated intensities versus storage time, followed by joint population-model rate inference for the three prepared charge states.",
      "finding": "In the source Schottky sequence for H-like 140Pr58+, the assigned parent-frequency intensity decreases while the 140Ce58+ daughter intensity grows. The EC channel preserves ionic charge and gives an approximately 270 Hz frequency displacement at the 31st harmonic in the source example. These are mass-to-charge spectral assignments and time-dependent integrated intensities; nuclear partial decay constants require the separate population/loss fit. The source Table I reports rest-frame partial constants in s^-1: bare 140Pr59+ lambda_betaPlus=0.00158(8), with no orbital-EC entry; H-like 140Pr58+ lambda_betaPlus=0.00161(10) and lambda_EC=0.00219(6); He-like 140Pr57+ lambda_betaPlus=0.00154(11) and lambda_EC=0.00147(7). The source EC ratio H-like/He-like is 1.49(8), despite reducing the bound-electron count from two to one. The beta+ values agree within their reported errors. The accompanying reported mean beam-loss constant is 0.0003(1) s^-1 and is not added to a nuclear partial rate as if it were another nuclear channel. The source interprets the selected 140Pr nuclear-spin-1 to 140Ce spin-0 Gamow-Teller channel using H-like initial hyperfine F=1/2 or 3/2. In the allowed approximation only F=1/2 couples to the stated final nuclear-spin-0 plus neutrino-spin-1/2 state. With the source-assumed lower F=1/2 population, its statistical factor (2*I_i+1)/(2*F_i+1)=3/2 accounts for the enhanced H-like versus He-like EC rate. Thus electron occupancy alone is insufficient to specify the channel rate; nuclear/electronic angular momentum and state populations enter the interpretation.",
      "limitations": [
        "Schottky peak intensity is an indirect population proxy. No direct neutrino detector, nuclear-event counter or state-by-state electron-density image is supplied; spectral processing and fitted population histories are not independent acquisitions.",
        "The population model separates nuclear partial rates from residual-gas/electron-cooler losses and assumes the declared no-feeding preparation. Bare-ion disappearance is not a direct measurement of a generic zero capture rate.",
        "Only one isotope and the selected highly stripped storage-ring states are admitted. Neutral-atom rates and K-shell ratios quoted from earlier X-ray studies are not a new neutral control measurement here.",
        "No raw spectra, absolute response calibration, full fit covariance or independent numerical replay is supplied. Source uncertainty parentheses are retained as reported, without assigning a new confidence level.",
        "The orbital-EC dash for the bare preparation is an unavailable bound-electron channel, not a fitted universal zero for continuum capture or all nuclear decay. The three charge states do not define a monotonic electron-count rate law.",
        "The rate ratio is a source result from the same charge-state experiment. No new uncertainty propagation, independent isotope replication or universal chemical-environment coefficient is derived.",
        "The paper reuses lambda for total observed disappearance and in its later half-life comparison. This admission retains the explicitly separated partial constants rather than assigning the quoted nuclear half-life to uncorrected beam loss.",
        "The 140Pr positive nuclear magnetic moment and lower-F assignment are deduced in this source from neighboring nuclei, not directly measured here. The approximately 0.03 s relaxation time is an adopted estimate, compared with approximately 2 s cooling.",
        "Dominant lower-hyperfine population and negligible repopulation by ring fields are source assumptions/arguments, not a state-resolved spin-population measurement in this experiment.",
        "The 3/2 factor is the source conditional angular-momentum/statistical explanation for this transition, not a universal occupancy rule, a new computed nuclear matrix element or an independently verified prediction.",
        "The allowed-channel restriction is not an assertion that all higher-order transitions or capture in arbitrary electronic/thermal environments are impossible. No GSI time-modulation or neutrino-oscillation claim is admitted."
      ],
      "readExtent": "selected-primary-author-manuscript-passages",
      "reviewedLocators": [
        "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
        "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
        "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
        "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.99.262501",
      "correctionCheck": "Actual four-page author manuscript arXiv:0711.3709v1 scientific text was read, with pages 3-4 visually inspected. Publisher title, all 42 authors, DOI, volume 99, issue 26, article 262501 and publication on 26 December 2007 agree with Crossref; 31 December is the issue date. GSI institution record 54473 links this article to the author full text. Final publisher full text could not be accessed, so detailed final-version identity is not claimed. Crossref relation is empty with no update-to record, and targeted DOI/erratum searches found no correction; this is not an exhaustive correction search. The nuclear-moment sign and hyperfine populations are not directly measured in this experiment. The imported neutral-reference comparisons are not treated as a new primary control; the loss/half-life notation limit is explicit."
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
      "id": "litvinov2007-pr-ec",
      "kind": "research-publication",
      "title": "Measurement of the beta+ and Orbital Electron-Capture Decay Rates in Fully Ionized, Hydrogenlike, and Heliumlike 140Pr Ions",
      "authors": [
        "Yu. A. Litvinov",
        "F. Bosch",
        "H. Geissel",
        "J. Kurcewicz",
        "Z. Patyk",
        "N. Winckler",
        "L. Batist",
        "K. Beckert",
        "D. Boutin",
        "C. Brandau",
        "L. Chen",
        "C. Dimopoulou",
        "B. Fabian",
        "T. Faestermann",
        "A. Fragner",
        "L. Grigorenko",
        "E. Haettner",
        "S. Hess",
        "P. Kienle",
        "R. Knöbel",
        "C. Kozhuharov",
        "S. A. Litvinov",
        "L. Maier",
        "M. Mazzocco",
        "F. Montes",
        "G. Münzenberg",
        "A. Musumarra",
        "C. Nociforo",
        "F. Nolden",
        "M. Pfützner",
        "W. R. Plaß",
        "A. Prochazka",
        "R. Reda",
        "R. Reuschl",
        "C. Scheidenberger",
        "M. Steck",
        "T. Stöhlker",
        "S. Torilov",
        "M. Trassinelli",
        "B. Sun",
        "H. Weick",
        "M. Winkler"
      ],
      "year": 2007,
      "doi": "10.1103/PhysRevLett.99.262501",
      "url": "https://arxiv.org/abs/0711.3709v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-manuscript-passages",
        "locators": [
          "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
          "Author manuscript arXiv:0711.3709v1 pages 2-3, Figures 1-2 and Equations 1-2: parent/daughter intensity evolution, 10.5 s spectra, loss-corrected population model and laboratory/rest-frame distinction",
          "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
          "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor"
        ],
        "limit": "Actual four-page author manuscript arXiv:0711.3709v1 dated 23 November 2007, linked by the repository and author institution GSI record 54473 to Phys. Rev. Lett. 99(26),262501. Read scientific text on pages 1-4, Figures 1-3, Equations 1-2 and Table I; visually checked manuscript pages 3-4 including the rate table, population equations and hyperfine diagram. Publisher title/DOI/date/authors/abstract and Crossref metadata were checked; final publisher full text was not accessible, so no page-for-page final-version identity is claimed. The references on other isotopes, neutral-atom X-ray experiments, hyperfine lifetimes and general stellar applications are not separately admitted primary studies. No raw Schottky time series, new rate fit, hyperfine population measurement, nuclear magnetic-moment measurement or numerical replay was performed."
      }
    }
  ]
};

/** Retain one isotope-specific charge-state preparation, fitted partial rates, beam losses and conditional hyperfine interpretation. */
export function validateElectronicDecayContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Electronic-decay ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
