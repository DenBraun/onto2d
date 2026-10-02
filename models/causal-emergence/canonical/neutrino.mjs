import assert from "node:assert/strict";

export const NEUTRINO_CHECKS = new Map([["neutrino-phase-data-algebra", "C-phys-neutrino-arithmetic"]]);
export const NEUTRINO_ANALYTICAL_SOURCES = new Map([["C-phys-neutrino-arithmetic", "neutrino-verifier"]]);

export const NEUTRINO_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-flavor-mixing",
      "D-phys-neutrino-flavor-mixing"
    ],
    [
      "phys:neutrino-vacuum-phase",
      "D-phys-neutrino-vacuum-phase"
    ],
    [
      "phys:reactor-antineutrino-readout",
      "D-phys-reactor-antineutrino-readout"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-neutrino-flavor-mixing",
      [
        "phys:lepton-fields",
        "phys:neutrino-flavor-mixing"
      ]
    ],
    [
      "physics:neutrino-flavor-mixing-neutrino-vacuum-phase",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-vacuum-phase"
      ]
    ],
    [
      "physics:lepton-fields-reactor-antineutrino-readout",
      [
        "phys:lepton-fields",
        "phys:reactor-antineutrino-readout"
      ]
    ]
  ],
  "contexts": [
    [
      "kamland2005-acquisition-context",
      "M-phys-kamland2005-acquisition-context",
      [
        "kamland2005-acquisition"
      ]
    ],
    [
      "kamland2005-response-context",
      "M-phys-kamland2005-response-context",
      [
        "kamland2005-response"
      ]
    ],
    [
      "kamland2005-fit-context",
      "M-phys-kamland2005-fit-context",
      [
        "kamland2005-oscillation-fit"
      ]
    ],
    [
      "neutrino-replay-context",
      "M-phys-neutrino-replay-context",
      [
        "neutrino-replay"
      ]
    ]
  ],
  "observations": [
    [
      "kamland2005-selected-energies",
      "C-phys-kamland2005-selected-energies",
      [
        "kamland2005-acquisition"
      ]
    ],
    [
      "kamland2005-unoscillated-prediction",
      "C-phys-kamland2005-unoscillated-prediction",
      [
        "kamland2005-response"
      ]
    ],
    [
      "kamland2005-background-estimate",
      "C-phys-kamland2005-background-estimate",
      [
        "kamland2005-response"
      ]
    ],
    [
      "kamland2005-average-survival",
      "C-phys-kamland2005-average-survival",
      [
        "kamland2005-response"
      ]
    ],
    [
      "kamland2005-oscillation-fit",
      "C-phys-kamland2005-oscillation-fit",
      [
        "kamland2005-oscillation-fit"
      ]
    ],
    [
      "neutrino-arithmetic",
      "C-phys-neutrino-arithmetic",
      [
        "neutrino-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "reactor-antineutrino-readout-kamland2005-selected-energies",
      "reactor-antineutrino-readout",
      "kamland2005-selected-energies",
      "M-phys-kamland2005-selected-energies",
      "interpretation-dependency"
    ],
    [
      "kamland2005-acquisition-context-kamland2005-selected-energies",
      "kamland2005-acquisition-context",
      "kamland2005-selected-energies",
      "M-phys-kamland2005-selected-energies",
      "measurement-context"
    ],
    [
      "kamland2005-acquisition-context-kamland2005-unoscillated-prediction",
      "kamland2005-acquisition-context",
      "kamland2005-unoscillated-prediction",
      "M-phys-kamland2005-unoscillated-prediction",
      "interpretation-dependency"
    ],
    [
      "kamland2005-response-context-kamland2005-unoscillated-prediction",
      "kamland2005-response-context",
      "kamland2005-unoscillated-prediction",
      "M-phys-kamland2005-unoscillated-prediction",
      "interpretation-dependency"
    ],
    [
      "kamland2005-response-context-kamland2005-background-estimate",
      "kamland2005-response-context",
      "kamland2005-background-estimate",
      "M-phys-kamland2005-background-estimate",
      "interpretation-dependency"
    ],
    [
      "kamland2005-selected-energies-kamland2005-average-survival",
      "kamland2005-selected-energies",
      "kamland2005-average-survival",
      "M-phys-kamland2005-average-survival",
      "interpretation-dependency"
    ],
    [
      "kamland2005-unoscillated-prediction-kamland2005-average-survival",
      "kamland2005-unoscillated-prediction",
      "kamland2005-average-survival",
      "M-phys-kamland2005-average-survival",
      "interpretation-dependency"
    ],
    [
      "kamland2005-background-estimate-kamland2005-average-survival",
      "kamland2005-background-estimate",
      "kamland2005-average-survival",
      "M-phys-kamland2005-average-survival",
      "interpretation-dependency"
    ],
    [
      "kamland2005-response-context-kamland2005-average-survival",
      "kamland2005-response-context",
      "kamland2005-average-survival",
      "M-phys-kamland2005-average-survival",
      "interpretation-dependency"
    ],
    [
      "neutrino-vacuum-phase-kamland2005-oscillation-fit",
      "neutrino-vacuum-phase",
      "kamland2005-oscillation-fit",
      "M-phys-kamland2005-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "kamland2005-selected-energies-kamland2005-oscillation-fit",
      "kamland2005-selected-energies",
      "kamland2005-oscillation-fit",
      "M-phys-kamland2005-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "kamland2005-unoscillated-prediction-kamland2005-oscillation-fit",
      "kamland2005-unoscillated-prediction",
      "kamland2005-oscillation-fit",
      "M-phys-kamland2005-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "kamland2005-background-estimate-kamland2005-oscillation-fit",
      "kamland2005-background-estimate",
      "kamland2005-oscillation-fit",
      "M-phys-kamland2005-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "kamland2005-fit-context-kamland2005-oscillation-fit",
      "kamland2005-fit-context",
      "kamland2005-oscillation-fit",
      "M-phys-kamland2005-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "neutrino-vacuum-phase-neutrino-arithmetic",
      "neutrino-vacuum-phase",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kamland2005-selected-energies-neutrino-arithmetic",
      "kamland2005-selected-energies",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kamland2005-unoscillated-prediction-neutrino-arithmetic",
      "kamland2005-unoscillated-prediction",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kamland2005-background-estimate-neutrino-arithmetic",
      "kamland2005-background-estimate",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kamland2005-average-survival-neutrino-arithmetic",
      "kamland2005-average-survival",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ],
    [
      "neutrino-replay-context-neutrino-arithmetic",
      "neutrino-replay-context",
      "neutrino-arithmetic",
      "M-phys-neutrino-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "kamland2005-acquisition",
    "kamland2005-response",
    "kamland2005-oscillation-fit",
    "neutrino-replay"
  ],
  "comparisonIds": [
    "neutrino-phase-mass-scope",
    "kamland2005-data-response-scope",
    "kamland2005-fit-scope",
    "neutrino-arithmetic-scope"
  ],
  "inferenceSources": [
    [
      "M-phys-kamland2005-acquisition-context",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "M-phys-kamland2005-response-context",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "M-phys-kamland2005-fit-context",
      [
        "kamland2005"
      ]
    ],
    [
      "C-phys-kamland2005-selected-energies",
      [
        "kamland2005",
        "kamland2005-selected-energies",
        "kamland2005-data-description"
      ]
    ],
    [
      "M-phys-kamland2005-selected-energies",
      [
        "kamland2005",
        "kamland2005-selected-energies",
        "kamland2005-data-description"
      ]
    ],
    [
      "C-phys-kamland2005-unoscillated-prediction",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "M-phys-kamland2005-unoscillated-prediction",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "C-phys-kamland2005-background-estimate",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "M-phys-kamland2005-background-estimate",
      [
        "kamland2005",
        "kamland2005-data-description"
      ]
    ],
    [
      "C-phys-kamland2005-average-survival",
      [
        "kamland2005"
      ]
    ],
    [
      "M-phys-kamland2005-average-survival",
      [
        "kamland2005"
      ]
    ],
    [
      "C-phys-kamland2005-oscillation-fit",
      [
        "kamland2005"
      ]
    ],
    [
      "M-phys-kamland2005-oscillation-fit",
      [
        "kamland2005"
      ]
    ],
    [
      "M-phys-neutrino-replay-context",
      [
        "neutrino-verifier",
        "pdg2025-neutrino-mixing",
        "kamland2005-selected-energies",
        "kamland2005-data-description",
        "kamland2005"
      ]
    ],
    [
      "C-phys-neutrino-arithmetic",
      [
        "neutrino-verifier",
        "pdg2025-neutrino-mixing",
        "kamland2005-selected-energies",
        "kamland2005-data-description",
        "kamland2005"
      ]
    ],
    [
      "M-phys-neutrino-arithmetic",
      [
        "neutrino-verifier",
        "pdg2025-neutrino-mixing",
        "kamland2005-selected-energies",
        "kamland2005-data-description",
        "kamland2005"
      ]
    ]
  ],
  "localStudySources": [
    [
      "neutrino-replay",
      "neutrino-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "pdg2025-neutrino-mixing",
      "kind": "research-publication",
      "title": "Neutrino Masses, Mixing, and Oscillations: Review of Particle Physics, 2025 update",
      "authors": [
        "M. C. Gonzalez-Garcia",
        "R. Wendell"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf",
      "path": null,
      "review": {
        "extent": "selected-formal-review-passages",
        "locators": [
          "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium"
        ],
        "limit": "Sections 14.3-14.4 on pages 6-10 and Section 14.5 on pages 10-13, ending before Section 14.5.1, were read; pages 8-10 and 12-13 were visually checked. These passages supply formal conventions and approximations. The solar density profile/application, experimental review, current global fits, numerical mass limits and the full underlying derivations are not admitted. The graph states its flavor-basis convention explicitly and restricts removal of the neutral-current potential to a common identity term in the active sector. Finite reactor phase checks remain separate from matter propagation; no matter-profile integration or detector likelihood is reproduced."
      }
    },
    {
      "id": "kamland2005",
      "kind": "research-publication",
      "title": "Measurement of Neutrino Oscillation with KamLAND: Evidence of Spectral Distortion",
      "authors": [
        "KamLAND Collaboration"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevLett.94.081801",
      "url": "https://arxiv.org/pdf/hep-ex/0406035v3",
      "path": null,
      "review": {
        "extent": "full-primary-author-version",
        "locators": [
          "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
          "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime",
          "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
        ],
        "limit": "All five pages of arXiv:hep-ex/0406035v3, revised 1 November 2004 and linked to the 2005 journal article, were read; Figure 2, Figure 3 and fit expressions were visually inspected. The collective author identity is followed by the roster on page 1. The regenerated PDF date does not date the acquisition. The prior sample overlap and revised alpha-neutron background are retained; this is not a latest-result claim or an exhaustive review of later KamLAND analyses. This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed."
      }
    },
    {
      "id": "kamland2005-data-description",
      "kind": "research-dataset",
      "title": "KamLAND second reactor result: official data description",
      "authors": [
        "KamLAND Collaboration"
      ],
      "year": 2005,
      "doi": null,
      "url": "https://www.awa.tohoku.ac.jp/KamLAND/datarelease/2ndresult.html",
      "path": "references/canonical/data/kamland2005-description.html",
      "review": {
        "extent": "complete-selected-source-page",
        "locators": [
          "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        ],
        "limit": "The complete official description was read and saved unchanged on 2 October 2026. It identifies the associated PRL publication, selected prompt-energy convention and separate model/response inputs. Linked monthly, background, fission and chi-squared files are not included in the local calculation. The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      }
    },
    {
      "id": "kamland2005-selected-energies",
      "kind": "research-dataset",
      "title": "KamLAND second reactor result: 258 selected prompt energies",
      "authors": [
        "KamLAND Collaboration"
      ],
      "year": 2005,
      "doi": null,
      "url": "https://www.awa.tohoku.ac.jp/KamLAND/datarelease/sort_energy.dat",
      "path": "references/canonical/data/kamland2005-selected-energies.dat",
      "review": {
        "extent": "complete-selected-table",
        "locators": [
          "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values"
        ],
        "limit": "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them. Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records."
      }
    },
    {
      "id": "neutrino-verifier",
      "kind": "executable-check",
      "title": "Finite KamLAND selected-energy and vacuum-phase checks",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-neutrino.py",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses"
        ],
        "limit": "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutrino-flavor-mixing",
      "kind": "review-finding",
      "statement": "Use |nu_alpha>=sum_i U_alpha,i* |nu_i> for flavor states produced or detected through charged-current interactions. A closed two- or three-state unitary mixing model connects these labels to propagation mass eigenstates; the minimal massless Standard Model lepton classification alone does not supply neutrino masses.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The declared local model is a closed unitary two- or three-state system. A general 3-by-n charged-current mixing matrix need not satisfy U-dagger U=I_n. Flavor and mass labels are bases, not distinct classical populations measured simultaneously. Minimal massless Standard Model field assignments do not generate the mass extension."
      ]
    },
    {
      "id": "D-phys-neutrino-vacuum-phase",
      "kind": "review-finding",
      "statement": "In the coherent ultrarelativistic vacuum approximation with hbar=c=1, A_alpha-to-beta=sum_i U_beta,i exp[-i m_i^2 L/(2E)] U_alpha,i* and P=|A|^2. Antineutrinos replace U by U*. Relative phases use Delta m^2 L/(2E); the effective two-flavor survival probability is 1-sin^2(2 theta) sin^2[Delta m^2 L/(4E)]. A common mass-squared shift changes only a common phase.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The declared local model is a closed unitary two- or three-state system. A general 3-by-n charged-current mixing matrix need not satisfy U-dagger U=I_n. Flavor and mass labels are bases, not distinct classical populations measured simultaneously. Minimal massless Standard Model field assignments do not generate the mass extension.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block."
      ]
    },
    {
      "id": "D-phys-reactor-antineutrino-readout",
      "kind": "review-finding",
      "statement": "KamLAND identifies electron-antineutrino candidates through inverse beta decay, antinu_e+p->e-plus+n. The prompt positron kinetic plus annihilation signal is followed by neutron-capture light, normally a 2.2 MeV gamma from hydrogen. The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset; energy response and delayed-coincidence selection remain explicit.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records."
      ]
    },
    {
      "id": "M-phys-kamland2005-acquisition-context",
      "kind": "method",
      "statement": "Use the 766 ton-year exposure from 9 March 2002 to 11 January 2004, with 515.1 days of livetime after muon cuts. Require prompt energy 2.6-8.5 MeV, delayed energy 1.8-2.6 MeV, both vertices within 5.5 m, separation below 2 m and delay 0.5-1000 microseconds. Retain the PMT upgrade and reported 89.8 +/- 1.5% selection efficiency.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ],
      "contextIds": [
        "kamland2005-acquisition"
      ]
    },
    {
      "id": "M-phys-kamland2005-response-context",
      "kind": "method",
      "statement": "Construct the no-oscillation reactor expectation from time-dependent reactor histories, fission-spectrum and cross-section inputs, 4.61e31 target protons, livetime and response. Use calibrations and auxiliary controls for the accidental, lithium/helium and alpha-induced carbon-neutron components; retain the reported uncertainty treatment separately from selected counts.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "M-phys-kamland2005-fit-context",
      "kind": "method",
      "statement": "Use the same selected prompt spectrum and rate in the reported unbinned two-flavor maximum-likelihood analysis. Include reactor histories, detector response and background nuisance treatment: float the alpha-neutron component near 6 MeV, constrain the 2.6 and 4.4 MeV components and retain their stated energy-scale uncertainty. Keep the separate solar combination outside this result.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "C-phys-kamland2005-selected-energies",
      "kind": "review-finding",
      "statement": "The full selection yields 258 candidate events. The official release lists their rounded prompt energies in MeV, including annihilation energy; these selected energies supply the measured spectrum used by the same-acquisition analyses.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ],
      "contextIds": [
        "kamland2005-acquisition"
      ]
    },
    {
      "id": "M-phys-kamland2005-selected-energies",
      "kind": "method",
      "statement": "Retain all selected prompt entries with repeated rounded values, preserving the declared energy variable and coincidence cuts; do not interpret a selected table as raw detector acquisition.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ],
      "contextIds": [
        "kamland2005-acquisition"
      ]
    },
    {
      "id": "C-phys-kamland2005-unoscillated-prediction",
      "kind": "review-finding",
      "statement": "The source predicts 365.2 +/- 23.7 systematic reactor antineutrino events above the 2.6 MeV prompt threshold in the absence of disappearance. This is the reactor signal expectation before adding background, conditioned on flux, cross section, calibration and selection inputs.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "M-phys-kamland2005-unoscillated-prediction",
      "kind": "method",
      "statement": "Use the reported flux-and-response expectation as a model input; do not derive it from selected candidate counts or add the same background twice.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "C-phys-kamland2005-background-estimate",
      "kind": "review-finding",
      "statement": "The reported background above 2.6 MeV prompt energy is 17.8 +/- 7.3 events. Its central components are 2.69 +/- 0.02 accidental, 4.8 +/- 0.9 lithium/helium and 10.3 +/- 7.1 alpha-induced carbon-neutron events; the fast-neutron bound enters the uncertainty.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "M-phys-kamland2005-background-estimate",
      "kind": "method",
      "statement": "Keep background estimates and their response/control assumptions distinct from observed candidates, and preserve the alpha-neutron revision and upper-bound convention.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "C-phys-kamland2005-average-survival",
      "kind": "review-finding",
      "statement": "From the same selected acquisition and the adopted reactor/background models, KamLAND reports average electron-antineutrino survival 0.658 +/- 0.044 statistical +/- 0.047 systematic. This is a period-averaged rate estimate, not an event-level probability measured at one baseline.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "M-phys-kamland2005-average-survival",
      "kind": "method",
      "statement": "Subtract the adopted background from selected candidates and normalize by the no-oscillation reactor signal expectation; preserve the reported uncertainty components without locally estimating them.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "C-phys-kamland2005-oscillation-fit",
      "kind": "review-finding",
      "statement": "The KamLAND-only two-flavor rate-and-shape analysis reports Delta m^2=7.9(+0.6/-0.5)e-5 eV^2 and best-fit tan^2(theta)=0.46, with a large uncertainty on the mixing parameter. The fitted spectral distortion is interpreted within the declared propagation, flux, response and nuisance model.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "M-phys-kamland2005-oscillation-fit",
      "kind": "method",
      "statement": "Fit the same selected rate and spectrum with the stated two-flavor likelihood; keep the mass-squared splitting distinct from absolute neutrino mass and the solar-combined mixing result.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "M-phys-neutrino-replay-context",
      "kind": "method",
      "statement": "Bind the unchanged official data description and 258 prompt-energy rows; check their count, range and sum, printed background/survival arithmetic, and synthetic unitary two- and three-state vacuum phase identities in a declared convention. The executable owns only this finite calculation.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "neutrino-verifier",
          "locator": "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block."
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "C-phys-neutrino-arithmetic",
      "kind": "review-finding",
      "statement": "The 258 selected prompt energies span 2.61-7.95 MeV and sum to 1098.33 MeV; 61 entries are below 3.4 MeV prompt energy, consistently with the different neutrino-energy threshold. Printed background components sum to 17.79, and (258-17.8)/365.2=1201/1826 rounds to 0.658. Synthetic unitary witnesses preserve probability normalization, common-phase invariance and the two-flavor phase factor.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "neutrino-verifier",
          "locator": "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [
        "neutrino-phase-data-algebra"
      ],
      "limitations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed."
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "M-phys-neutrino-arithmetic",
      "kind": "method",
      "statement": "Check exact released bytes and finite arithmetic with synthetic phase inputs; reported rates, backgrounds and fit parameters remain inputs or comparison targets, not outputs of an experimental replay.",
      "scope": "Declared coherent neutrino mixing and the KamLAND 2002-2004 reactor acquisition; no universal mass-generation or formation rule.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "neutrino-verifier",
          "locator": "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports the specified formal convention, source analysis stage or bounded local calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed."
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-flavor-mixing",
      "name": "Neutrino flavor and propagation bases",
      "kind": "definition",
      "description": "Use |nu_alpha>=sum_i U_alpha,i* |nu_i> for flavor states produced or detected through charged-current interactions. A closed two- or three-state unitary mixing model connects these labels to propagation mass eigenstates; the minimal massless Standard Model lepton classification alone does not supply neutrino masses.",
      "claimIds": [
        "D-phys-neutrino-flavor-mixing"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        }
      ],
      "openObligations": [
        "The declared local model is a closed unitary two- or three-state system. A general 3-by-n charged-current mixing matrix need not satisfy U-dagger U=I_n. Flavor and mass labels are bases, not distinct classical populations measured simultaneously. Minimal massless Standard Model field assignments do not generate the mass extension."
      ]
    },
    {
      "id": "phys:neutrino-vacuum-phase",
      "name": "Coherent vacuum oscillation phase",
      "kind": "definition",
      "description": "In the coherent ultrarelativistic vacuum approximation with hbar=c=1, A_alpha-to-beta=sum_i U_beta,i exp[-i m_i^2 L/(2E)] U_alpha,i* and P=|A|^2. Antineutrinos replace U by U*. Relative phases use Delta m^2 L/(2E); the effective two-flavor survival probability is 1-sin^2(2 theta) sin^2[Delta m^2 L/(4E)]. A common mass-squared shift changes only a common phase.",
      "claimIds": [
        "D-phys-neutrino-vacuum-phase"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        }
      ],
      "openObligations": [
        "The declared local model is a closed unitary two- or three-state system. A general 3-by-n charged-current mixing matrix need not satisfy U-dagger U=I_n. Flavor and mass labels are bases, not distinct classical populations measured simultaneously. Minimal massless Standard Model field assignments do not generate the mass extension.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block."
      ]
    },
    {
      "id": "phys:reactor-antineutrino-readout",
      "name": "Reactor antineutrino coincidence readout",
      "kind": "definition",
      "description": "KamLAND identifies electron-antineutrino candidates through inverse beta decay, antinu_e+p->e-plus+n. The prompt positron kinetic plus annihilation signal is followed by neutron-capture light, normally a 2.2 MeV gamma from hydrogen. The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset; energy response and delayed-coincidence selection remain explicit.",
      "claimIds": [
        "D-phys-reactor-antineutrino-readout"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records."
      ]
    },
    {
      "id": "phys:kamland2005-acquisition-context",
      "name": "KamLAND reactor acquisition and selection",
      "kind": "context",
      "description": "Use the 766 ton-year exposure from 9 March 2002 to 11 January 2004, with 515.1 days of livetime after muon cuts. Require prompt energy 2.6-8.5 MeV, delayed energy 1.8-2.6 MeV, both vertices within 5.5 m, separation below 2 m and delay 0.5-1000 microseconds. Retain the PMT upgrade and reported 89.8 +/- 1.5% selection efficiency.",
      "claimIds": [
        "M-phys-kamland2005-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ]
    },
    {
      "id": "phys:kamland2005-response-context",
      "name": "KamLAND reactor response and backgrounds",
      "kind": "context",
      "description": "Construct the no-oscillation reactor expectation from time-dependent reactor histories, fission-spectrum and cross-section inputs, 4.61e31 target protons, livetime and response. Use calibrations and auxiliary controls for the accidental, lithium/helium and alpha-induced carbon-neutron components; retain the reported uncertainty treatment separately from selected counts.",
      "claimIds": [
        "M-phys-kamland2005-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:kamland2005-fit-context",
      "name": "KamLAND-only oscillation likelihood",
      "kind": "context",
      "description": "Use the same selected prompt spectrum and rate in the reported unbinned two-flavor maximum-likelihood analysis. Include reactor histories, detector response and background nuisance treatment: float the alpha-neutron component near 6 MeV, constrain the 2.6 and 4.4 MeV components and retain their stated energy-scale uncertainty. Keep the separate solar combination outside this result.",
      "claimIds": [
        "M-phys-kamland2005-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
        }
      ],
      "openObligations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:kamland2005-selected-energies",
      "name": "KamLAND selected prompt-energy sample",
      "kind": "scoped-process",
      "description": "The full selection yields 258 candidate events. The official release lists their rounded prompt energies in MeV, including annihilation energy; these selected energies supply the measured spectrum used by the same-acquisition analyses.",
      "claimIds": [
        "C-phys-kamland2005-selected-energies"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime"
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ]
    },
    {
      "id": "phys:kamland2005-unoscillated-prediction",
      "name": "KamLAND no-oscillation reactor expectation",
      "kind": "scoped-process",
      "description": "The source predicts 365.2 +/- 23.7 systematic reactor antineutrino events above the 2.6 MeV prompt threshold in the absence of disappearance. This is the reactor signal expectation before adding background, conditioned on flux, cross section, calibration and selection inputs.",
      "claimIds": [
        "C-phys-kamland2005-unoscillated-prediction"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:kamland2005-background-estimate",
      "name": "KamLAND selected-sample background estimate",
      "kind": "scoped-process",
      "description": "The reported background above 2.6 MeV prompt energy is 17.8 +/- 7.3 events. Its central components are 2.69 +/- 0.02 accidental, 4.8 +/- 0.9 lithium/helium and 10.3 +/- 7.1 alpha-induced carbon-neutron events; the fast-neutron bound enters the uncertainty.",
      "claimIds": [
        "C-phys-kamland2005-background-estimate"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        }
      ],
      "openObligations": [
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:kamland2005-average-survival",
      "name": "KamLAND normalized average survival estimate",
      "kind": "scoped-process",
      "description": "From the same selected acquisition and the adopted reactor/background models, KamLAND reports average electron-antineutrino survival 0.658 +/- 0.044 statistical +/- 0.047 systematic. This is a period-averaged rate estimate, not an event-level probability measured at one baseline.",
      "claimIds": [
        "C-phys-kamland2005-average-survival"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        }
      ],
      "openObligations": [
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:kamland2005-oscillation-fit",
      "name": "KamLAND-only rate-and-shape mass splitting",
      "kind": "scoped-process",
      "description": "The KamLAND-only two-flavor rate-and-shape analysis reports Delta m^2=7.9(+0.6/-0.5)e-5 eV^2 and best-fit tan^2(theta)=0.46, with a large uncertainty on the mixing parameter. The fitted spectral distortion is interpreted within the declared propagation, flux, response and nuisance model.",
      "claimIds": [
        "C-phys-kamland2005-oscillation-fit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        }
      ],
      "openObligations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ]
    },
    {
      "id": "phys:neutrino-replay-context",
      "name": "Finite neutrino data and phase context",
      "kind": "context",
      "description": "Bind the unchanged official data description and 258 prompt-energy rows; check their count, range and sum, printed background/survival arithmetic, and synthetic unitary two- and three-state vacuum phase identities in a declared convention. The executable owns only this finite calculation.",
      "claimIds": [
        "M-phys-neutrino-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "neutrino-verifier",
          "locator": "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        }
      ],
      "openObligations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block."
      ]
    },
    {
      "id": "phys:neutrino-arithmetic",
      "name": "Checked selected energies and vacuum phases",
      "kind": "scoped-process",
      "description": "The 258 selected prompt energies span 2.61-7.95 MeV and sum to 1098.33 MeV; 61 entries are below 3.4 MeV prompt energy, consistently with the different neutrino-energy threshold. Printed background components sum to 17.79, and (258-17.8)/365.2=1201/1826 rounds to 0.658. Synthetic unitary witnesses preserve probability normalization, common-phase invariance and the two-flavor phase factor.",
      "claimIds": [
        "C-phys-neutrino-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "neutrino-verifier",
          "locator": "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        },
        {
          "sourceId": "kamland2005-selected-energies",
          "locator": "Unchanged sort_energy.dat: all 258 sorted prompt energies in MeV, including repeated rounded values"
        },
        {
          "sourceId": "kamland2005-data-description",
          "locator": "Unchanged official second-result page: Event List, Background Spectrum, Number of Fissions, chi-squared Map and Other Constants sections"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        }
      ],
      "openObligations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-neutrino-flavor-mixing",
      "source": "phys:lepton-fields",
      "target": "phys:neutrino-flavor-mixing",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The lepton classification supplies neutrino flavor labels; it does not derive the additional mass or mixing parameters.",
      "claimIds": [
        "D-phys-neutrino-flavor-mixing"
      ]
    },
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-vacuum-phase",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-vacuum-phase",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared flavor-state convention fixes mixing factors in the propagation amplitude.",
      "claimIds": [
        "D-phys-neutrino-vacuum-phase"
      ]
    },
    {
      "id": "physics:lepton-fields-reactor-antineutrino-readout",
      "source": "phys:lepton-fields",
      "target": "phys:reactor-antineutrino-readout",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Electron-flavor antineutrino labels identify the charged-current readout channel without deriving its response.",
      "claimIds": [
        "D-phys-reactor-antineutrino-readout"
      ]
    },
    {
      "id": "physics:reactor-antineutrino-readout-kamland2005-selected-energies",
      "source": "phys:reactor-antineutrino-readout",
      "target": "phys:kamland2005-selected-energies",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The readout definition specifies the prompt variable and delayed coincidence, distinct from true neutrino energy.",
      "claimIds": [
        "M-phys-kamland2005-selected-energies"
      ],
      "contextIds": [
        "kamland2005-acquisition"
      ]
    },
    {
      "id": "physics:kamland2005-acquisition-context-kamland2005-selected-energies",
      "source": "phys:kamland2005-acquisition-context",
      "target": "phys:kamland2005-selected-energies",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated selection defines the 258-entry candidate sample.",
      "claimIds": [
        "M-phys-kamland2005-selected-energies"
      ],
      "contextIds": [
        "kamland2005-acquisition"
      ]
    },
    {
      "id": "physics:kamland2005-acquisition-context-kamland2005-unoscillated-prediction",
      "source": "phys:kamland2005-acquisition-context",
      "target": "phys:kamland2005-unoscillated-prediction",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Exposure, target and selection settings condition the expected signal count.",
      "claimIds": [
        "M-phys-kamland2005-unoscillated-prediction"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-response-context-kamland2005-unoscillated-prediction",
      "source": "phys:kamland2005-response-context",
      "target": "phys:kamland2005-unoscillated-prediction",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reactor histories, spectrum, cross section and detector response supply the model prediction.",
      "claimIds": [
        "M-phys-kamland2005-unoscillated-prediction"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-response-context-kamland2005-background-estimate",
      "source": "phys:kamland2005-response-context",
      "target": "phys:kamland2005-background-estimate",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Auxiliary controls and response modeling define the background estimate.",
      "claimIds": [
        "M-phys-kamland2005-background-estimate"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-selected-energies-kamland2005-average-survival",
      "source": "phys:kamland2005-selected-energies",
      "target": "phys:kamland2005-average-survival",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected sample supplies the observed count before background subtraction.",
      "claimIds": [
        "M-phys-kamland2005-average-survival"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-unoscillated-prediction-kamland2005-average-survival",
      "source": "phys:kamland2005-unoscillated-prediction",
      "target": "phys:kamland2005-average-survival",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The no-oscillation reactor signal expectation supplies the denominator.",
      "claimIds": [
        "M-phys-kamland2005-average-survival"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-background-estimate-kamland2005-average-survival",
      "source": "phys:kamland2005-background-estimate",
      "target": "phys:kamland2005-average-survival",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted background is subtracted once from selected candidates.",
      "claimIds": [
        "M-phys-kamland2005-average-survival"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:kamland2005-response-context-kamland2005-average-survival",
      "source": "phys:kamland2005-response-context",
      "target": "phys:kamland2005-average-survival",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source response and uncertainty treatment condition the normalized rate estimate.",
      "claimIds": [
        "M-phys-kamland2005-average-survival"
      ],
      "contextIds": [
        "kamland2005-response"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-kamland2005-oscillation-fit",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:kamland2005-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared phase convention identifies the fitted mass-squared splitting; the experimental response remains a separate model.",
      "claimIds": [
        "M-phys-kamland2005-oscillation-fit"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "physics:kamland2005-selected-energies-kamland2005-oscillation-fit",
      "source": "phys:kamland2005-selected-energies",
      "target": "phys:kamland2005-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fit reuses the selected prompt spectrum and rate rather than a new acquisition.",
      "claimIds": [
        "M-phys-kamland2005-oscillation-fit"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "physics:kamland2005-unoscillated-prediction-kamland2005-oscillation-fit",
      "source": "phys:kamland2005-unoscillated-prediction",
      "target": "phys:kamland2005-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reactor signal expectation and its underlying spectrum provide the oscillated model baseline.",
      "claimIds": [
        "M-phys-kamland2005-oscillation-fit"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "physics:kamland2005-background-estimate-kamland2005-oscillation-fit",
      "source": "phys:kamland2005-background-estimate",
      "target": "phys:kamland2005-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Background estimates constrain nuisance components; their spectrum-dependent fit treatment remains explicit.",
      "claimIds": [
        "M-phys-kamland2005-oscillation-fit"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "physics:kamland2005-fit-context-kamland2005-oscillation-fit",
      "source": "phys:kamland2005-fit-context",
      "target": "phys:kamland2005-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The likelihood, response and nuisance assumptions delimit the KamLAND-only inference.",
      "claimIds": [
        "M-phys-kamland2005-oscillation-fit"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-neutrino-arithmetic",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared amplitude and two-flavor convention supply synthetic algebra witnesses.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "physics:kamland2005-selected-energies-neutrino-arithmetic",
      "source": "phys:kamland2005-selected-energies",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Unchanged selected energies supply count, range and sum checks.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "physics:kamland2005-unoscillated-prediction-neutrino-arithmetic",
      "source": "phys:kamland2005-unoscillated-prediction",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed 365.2 expected count is an arithmetic input, not a recomputed reactor model.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "physics:kamland2005-background-estimate-neutrino-arithmetic",
      "source": "phys:kamland2005-background-estimate",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Printed background centers supply only sum and subtraction inputs.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "physics:kamland2005-average-survival-neutrino-arithmetic",
      "source": "phys:kamland2005-average-survival",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed survival center is a rounding comparison target, not an independently estimated uncertainty or fit.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    },
    {
      "id": "physics:neutrino-replay-context-neutrino-arithmetic",
      "source": "phys:neutrino-replay-context",
      "target": "phys:neutrino-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The exact executable and finite assets delimit the local calculation.",
      "claimIds": [
        "M-phys-neutrino-arithmetic"
      ],
      "contextIds": [
        "neutrino-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "kamland2005-acquisition",
      "sourceId": "kamland2005",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.94.081801",
      "journal": "Physical Review Letters",
      "volume": "94",
      "issue": "8",
      "pages": "081801",
      "system": "KamLAND 2002-2004 reactor antineutrinos",
      "preparation": "Use the 766 ton-year exposure from 9 March 2002 to 11 January 2004, with 515.1 days of livetime after muon cuts. Require prompt energy 2.6-8.5 MeV, delayed energy 1.8-2.6 MeV, both vertices within 5.5 m, separation below 2 m and delay 0.5-1000 microseconds. Retain the PMT upgrade and reported 89.8 +/- 1.5% selection efficiency.",
      "observable": "KamLAND selected prompt-energy sample",
      "finding": "The full selection yields 258 candidate events. The official release lists their rounded prompt energies in MeV, including annihilation energy; these selected energies supply the measured spectrum used by the same-acquisition analyses.",
      "limitations": [
        "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 3 pages 1-2: inverse-beta reaction, prompt energy including annihilation, neutron recoil, delayed capture and analysis thresholds",
        "Author version 3 pages 2-3: March 2002-January 2004 acquisition, prior-sample reanalysis, PMT upgrade, selection, fiducial volume, efficiency and livetime"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0406035v3",
      "correctionCheck": "Author version 3 and official second-result data description reviewed. The earlier acquisition subset and revised alpha-neutron background are explicit; later KamLAND analyses and the solar combination are outside this admission."
    },
    {
      "id": "kamland2005-response",
      "sourceId": "kamland2005",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.94.081801",
      "journal": "Physical Review Letters",
      "volume": "94",
      "issue": "8",
      "pages": "081801",
      "system": "KamLAND 2002-2004 reactor antineutrinos",
      "preparation": "Construct the no-oscillation reactor expectation from time-dependent reactor histories, fission-spectrum and cross-section inputs, 4.61e31 target protons, livetime and response. Use calibrations and auxiliary controls for the accidental, lithium/helium and alpha-induced carbon-neutron components; retain the reported uncertainty treatment separately from selected counts.",
      "observable": "KamLAND normalized average survival estimate",
      "finding": "From the same selected acquisition and the adopted reactor/background models, KamLAND reports average electron-antineutrino survival 0.658 +/- 0.044 statistical +/- 0.047 systematic. This is a period-averaged rate estimate, not an event-level probability measured at one baseline.",
      "limitations": [
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample.",
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0406035v3",
      "correctionCheck": "Author version 3 and official second-result data description reviewed. The earlier acquisition subset and revised alpha-neutron background are explicit; later KamLAND analyses and the solar combination are outside this admission."
    },
    {
      "id": "kamland2005-oscillation-fit",
      "sourceId": "kamland2005",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.94.081801",
      "journal": "Physical Review Letters",
      "volume": "94",
      "issue": "8",
      "pages": "081801",
      "system": "KamLAND 2002-2004 reactor antineutrinos",
      "preparation": "Use the same selected prompt spectrum and rate in the reported unbinned two-flavor maximum-likelihood analysis. Include reactor histories, detector response and background nuisance treatment: float the alpha-neutron component near 6 MeV, constrain the 2.6 and 4.4 MeV components and retain their stated energy-scale uncertainty. Keep the separate solar combination outside this result.",
      "observable": "KamLAND-only rate-and-shape mass splitting",
      "finding": "The KamLAND-only two-flavor rate-and-shape analysis reports Delta m^2=7.9(+0.6/-0.5)e-5 eV^2 and best-fit tan^2(theta)=0.46, with a large uncertainty on the mixing parameter. The fitted spectral distortion is interpreted within the declared propagation, flux, response and nuisance model.",
      "limitations": [
        "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
        "The no-oscillation reactor expectation requires individual reactor power/fuel histories, external fission spectra and cross sections, target protons, livetime, response and selection efficiency; it is not computed from 258 observed candidates. The full reactor prediction, calibration, response correlations and Monte Carlo are not reconstructed.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The 9 March 2002-11 January 2004 acquisition includes the reanalyzed earlier sample and a February 2003 PMT upgrade. The selected list, rate estimate and fitted spectrum reuse that acquisition; they are not independent replications. Special background/control measurements and simulation supply auxiliary inputs. Figure 2a omits the delayed-energy cut and is not the fully selected 258-event sample."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
        "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0406035v3",
      "correctionCheck": "Author version 3 and official second-result data description reviewed. The earlier acquisition subset and revised alpha-neutron background are explicit; later KamLAND analyses and the solar combination are outside this admission."
    },
    {
      "id": "neutrino-replay",
      "sourceId": "neutrino-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite selected-energy and synthetic vacuum-phase model",
      "preparation": "Bind the unchanged official data description and 258 prompt-energy rows; check their count, range and sum, printed background/survival arithmetic, and synthetic unitary two- and three-state vacuum phase identities in a declared convention. The executable owns only this finite calculation.",
      "observable": "Checked selected energies and vacuum phases",
      "finding": "The 258 selected prompt energies span 2.61-7.95 MeV and sum to 1098.33 MeV; 61 entries are below 3.4 MeV prompt energy, consistently with the different neutrino-energy threshold. Printed background components sum to 17.79, and (258-17.8)/365.2=1201/1826 rounds to 0.658. Synthetic unitary witnesses preserve probability normalization, common-phase invariance and the two-flavor phase factor.",
      "limitations": [
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
        "The complete 258-value official list is a rounded, sorted selected prompt-energy release, without times, vertices, detector waveforms, nuisance parameters or covariance. Duplicated rounded energies must be preserved. The unchanged HTML and numeric bytes retain KamLAND attribution; no explicit additional open-content license or project software license is assigned to them.",
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The reported 0.658 average is a background-subtracted, no-oscillation-normalized rate estimate, with background error included in its systematic uncertainty. Different periods have different effective reactor baselines and are not directly comparable. Neither uncertainty component nor the reported disappearance significance is derived from the central-value division.",
        "The alpha-induced carbon-neutron component was not included in the earlier publication and changes its background estimate. The fast-neutron value below 0.89 events is an upper bound entering uncertainty, not an additional central count. The official released background shapes use arbitrary normalization and are preliminary below 2.6 MeV; those shape files and their fit are not replayed."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): byte-bound selected-energy count/range/sum, printed central background/survival arithmetic and synthetic unitary vacuum-phase witnesses"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "Exact local executable ownership; no experimental fit certification."
    }
  ],
  "comparisons": [
    {
      "id": "neutrino-phase-mass-scope",
      "candidate": "Relative mass-squared phases can change flavor probabilities under a declared coherent model.",
      "alternative": "An oscillation pattern determines absolute masses or a unique mass-generation mechanism.",
      "discriminator": "Check the flavor convention, common-phase cancellation and separate detector averaging.",
      "result": "conditional-support",
      "limit": "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
      "assumptions": [
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation."
      ],
      "sourceIds": [
        "pdg2025-neutrino-mixing"
      ],
      "claimIds": [
        "D-phys-neutrino-vacuum-phase"
      ]
    },
    {
      "id": "kamland2005-data-response-scope",
      "candidate": "Selected prompt energies, modeled reactor expectation and background estimate have different roles.",
      "alternative": "258 selected candidates are raw acquisition or the no-oscillation prediction.",
      "discriminator": "Keep prompt and neutrino variables, response assumptions and same-acquisition reuse explicit.",
      "result": "conditional-support",
      "limit": "Prompt energy contains positron kinetic and annihilation energy; The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset. The prompt cut at 2.6 MeV and the abstract neutrino-energy threshold near 3.4 MeV concern different variables. Selected prompt energies are not exact event-by-event true neutrino energies or original photomultiplier records.",
      "assumptions": [
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation."
      ],
      "sourceIds": [
        "kamland2005",
        "kamland2005-data-description",
        "kamland2005-selected-energies"
      ],
      "claimIds": [
        "C-phys-kamland2005-selected-energies",
        "C-phys-kamland2005-unoscillated-prediction",
        "C-phys-kamland2005-background-estimate"
      ]
    },
    {
      "id": "kamland2005-fit-scope",
      "candidate": "The KamLAND-only two-flavor fit conditionally constrains a mass-squared splitting.",
      "alternative": "A single 180 km vacuum curve, solar-combined parameter or central count division reproduces the fit.",
      "discriminator": "Separate the individual reactor histories and response model from the display convention and arithmetic.",
      "result": "conditional-support",
      "limit": "This record is the KamLAND-only rate-and-shape two-flavor fit. The shape-only tan-squared theta=0.76 and CPT-assuming solar-combined tan-squared theta=0.40 are different analyses, not additional KamLAND-only results. Figure 3 uses L0=180 km for display; its models account for individual time-dependent reactor fluxes and detector effects. The likelihood, nuisance correlations, spectral-distortion significance, contour coverage and simulation-calibrated goodness-of-fit are not reconstructed.",
      "assumptions": [
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation."
      ],
      "sourceIds": [
        "kamland2005",
        "pdg2025-neutrino-mixing"
      ],
      "claimIds": [
        "C-phys-kamland2005-oscillation-fit"
      ]
    },
    {
      "id": "neutrino-arithmetic-scope",
      "candidate": "Finite data integrity and synthetic phase identities can be checked.",
      "alternative": "These checks certify the likelihood, significance or all neutrino experimental families.",
      "discriminator": "Preserve exact local ownership and the explicit no-replay limits.",
      "result": "conditional-support",
      "limit": "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation.",
      "assumptions": [
        "The plane-wave, coherent, ultrarelativistic vacuum approximation uses hbar=c=1. An experiment averages with flux, cross section, efficiency and resolution; a single vacuum phase is not a detector likelihood. Oscillation differences do not determine absolute masses, every individual mass to be nonzero, Dirac versus Majorana character or a unique mass-generation mechanism. Matter propagation and solar, atmospheric and accelerator acquisitions remain outside this finite reactor block.",
        "The local executable checks two unchanged assets, the selected prompt-energy count/range/sum, 2.69+4.8+10.3=17.79 rounding to 17.8, and (258-17.8)/365.2 rounding to 0.658. Its unitary phase witnesses use synthetic parameters. It does not replay acquisition, reactor prediction, background/response models, likelihood, uncertainties, significance, solar combination or mass generation."
      ],
      "sourceIds": [
        "neutrino-verifier",
        "kamland2005-selected-energies",
        "kamland2005-data-description",
        "kamland2005",
        "pdg2025-neutrino-mixing"
      ],
      "claimIds": [
        "C-phys-neutrino-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutrino-flavor-mixing",
      "role": "definition",
      "denotes": "Use |nu_alpha>=sum_i U_alpha,i* |nu_i> for flavor states produced or detected through charged-current interactions. A closed two- or three-state unitary mixing model connects these labels to propagation mass eigenstates; the minimal massless Standard Model lepton classification alone does not supply neutrino masses.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-flavor-mixing"
      ]
    },
    {
      "nodeId": "phys:neutrino-vacuum-phase",
      "role": "definition",
      "denotes": "In the coherent ultrarelativistic vacuum approximation with hbar=c=1, A_alpha-to-beta=sum_i U_beta,i exp[-i m_i^2 L/(2E)] U_alpha,i* and P=|A|^2. Antineutrinos replace U by U*. Relative phases use Delta m^2 L/(2E); the effective two-flavor survival probability is 1-sin^2(2 theta) sin^2[Delta m^2 L/(4E)]. A common mass-squared shift changes only a common phase.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-vacuum-phase"
      ]
    },
    {
      "nodeId": "phys:reactor-antineutrino-readout",
      "role": "definition",
      "denotes": "KamLAND identifies electron-antineutrino candidates through inverse beta decay, antinu_e+p->e-plus+n. The prompt positron kinetic plus annihilation signal is followed by neutron-capture light, normally a 2.2 MeV gamma from hydrogen. The approximate relation E_antineutrino=E_prompt+T_neutron+0.8 MeV uses neutron recoil kinetic energy and a rounded kinematic offset; energy response and delayed-coincidence selection remain explicit.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-reactor-antineutrino-readout"
      ]
    },
    {
      "nodeId": "phys:kamland2005-acquisition-context",
      "role": "experimental-context",
      "denotes": "Use the 766 ton-year exposure from 9 March 2002 to 11 January 2004, with 515.1 days of livetime after muon cuts. Require prompt energy 2.6-8.5 MeV, delayed energy 1.8-2.6 MeV, both vertices within 5.5 m, separation below 2 m and delay 0.5-1000 microseconds. Retain the PMT upgrade and reported 89.8 +/- 1.5% selection efficiency.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kamland2005-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:kamland2005-response-context",
      "role": "model-context",
      "denotes": "Construct the no-oscillation reactor expectation from time-dependent reactor histories, fission-spectrum and cross-section inputs, 4.61e31 target protons, livetime and response. Use calibrations and auxiliary controls for the accidental, lithium/helium and alpha-induced carbon-neutron components; retain the reported uncertainty treatment separately from selected counts.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kamland2005-response-context"
      ]
    },
    {
      "nodeId": "phys:kamland2005-fit-context",
      "role": "model-context",
      "denotes": "Use the same selected prompt spectrum and rate in the reported unbinned two-flavor maximum-likelihood analysis. Include reactor histories, detector response and background nuisance treatment: float the alpha-neutron component near 6 MeV, constrain the 2.6 and 4.4 MeV components and retain their stated energy-scale uncertainty. Keep the separate solar combination outside this result.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kamland2005-fit-context"
      ]
    },
    {
      "nodeId": "phys:kamland2005-selected-energies",
      "role": "scoped-phenomenon",
      "denotes": "The full selection yields 258 candidate events. The official release lists their rounded prompt energies in MeV, including annihilation energy; these selected energies supply the measured spectrum used by the same-acquisition analyses.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kamland2005-selected-energies"
      ]
    },
    {
      "nodeId": "phys:kamland2005-unoscillated-prediction",
      "role": "scoped-phenomenon",
      "denotes": "The source predicts 365.2 +/- 23.7 systematic reactor antineutrino events above the 2.6 MeV prompt threshold in the absence of disappearance. This is the reactor signal expectation before adding background, conditioned on flux, cross section, calibration and selection inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kamland2005-unoscillated-prediction"
      ]
    },
    {
      "nodeId": "phys:kamland2005-background-estimate",
      "role": "scoped-phenomenon",
      "denotes": "The reported background above 2.6 MeV prompt energy is 17.8 +/- 7.3 events. Its central components are 2.69 +/- 0.02 accidental, 4.8 +/- 0.9 lithium/helium and 10.3 +/- 7.1 alpha-induced carbon-neutron events; the fast-neutron bound enters the uncertainty.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kamland2005-background-estimate"
      ]
    },
    {
      "nodeId": "phys:kamland2005-average-survival",
      "role": "scoped-phenomenon",
      "denotes": "From the same selected acquisition and the adopted reactor/background models, KamLAND reports average electron-antineutrino survival 0.658 +/- 0.044 statistical +/- 0.047 systematic. This is a period-averaged rate estimate, not an event-level probability measured at one baseline.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kamland2005-average-survival"
      ]
    },
    {
      "nodeId": "phys:kamland2005-oscillation-fit",
      "role": "scoped-phenomenon",
      "denotes": "The KamLAND-only two-flavor rate-and-shape analysis reports Delta m^2=7.9(+0.6/-0.5)e-5 eV^2 and best-fit tan^2(theta)=0.46, with a large uncertainty on the mixing parameter. The fitted spectral distortion is interpreted within the declared propagation, flux, response and nuisance model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kamland2005-oscillation-fit"
      ]
    },
    {
      "nodeId": "phys:neutrino-replay-context",
      "role": "model-context",
      "denotes": "Bind the unchanged official data description and 258 prompt-energy rows; check their count, range and sum, printed background/survival arithmetic, and synthetic unitary two- and three-state vacuum phase identities in a declared convention. The executable owns only this finite calculation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-neutrino-replay-context"
      ]
    },
    {
      "nodeId": "phys:neutrino-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The 258 selected prompt energies span 2.61-7.95 MeV and sum to 1098.33 MeV; 61 entries are below 3.4 MeV prompt energy, consistently with the different neutrino-energy threshold. Printed background components sum to 17.79, and (258-17.8)/365.2=1201/1826 rounds to 0.658. Synthetic unitary witnesses preserve probability normalization, common-phase invariance and the two-flavor phase factor.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-neutrino-arithmetic"
      ]
    }
  ]
};

/** Preserve selected data, response inputs and model-conditional inference. */
export function validateNeutrinoContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing neutrino ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Neutrino ${kind} changed ${id}.${key}: preserve phase, acquisition and response boundaries`);
      }
    }
  }
}
