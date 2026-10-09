import assert from "node:assert/strict";

export const LEPTON_ELECTRON_CHECKS = new Map();
export const LEPTON_ELECTRON_ANALYTICAL_SOURCES = new Map();
export const LEPTON_ELECTRON_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "borexino2015-electron-acquisition-context",
      "M-phys-borexino2015-electron-acquisition-context",
      [
        "borexino2015-electron-acquisition"
      ]
    ],
    [
      "borexino2015-electron-response-context",
      "M-phys-borexino2015-electron-response-context",
      [
        "borexino2015-electron-response"
      ]
    ],
    [
      "borexino2015-electron-inference-context",
      "M-phys-borexino2015-electron-inference-context",
      [
        "borexino2015-electron-inference"
      ]
    ]
  ],
  "observations": [
    [
      "borexino2015-electron-spectrum",
      "C-phys-borexino2015-electron-spectrum",
      [
        "borexino2015-electron-acquisition"
      ]
    ],
    [
      "borexino2015-electron-decay-limit",
      "C-phys-borexino2015-electron-decay-limit",
      [
        "borexino2015-electron-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "borexino2015-electron-acquisition-context-borexino2015-electron-spectrum",
      "borexino2015-electron-acquisition-context",
      "borexino2015-electron-spectrum",
      "M-phys-borexino2015-electron-spectrum",
      "measurement-context"
    ],
    [
      "borexino2015-electron-response-context-borexino2015-electron-spectrum",
      "borexino2015-electron-response-context",
      "borexino2015-electron-spectrum",
      "M-phys-borexino2015-electron-spectrum",
      "interpretation-dependency"
    ],
    [
      "borexino2015-electron-spectrum-borexino2015-electron-decay-limit",
      "borexino2015-electron-spectrum",
      "borexino2015-electron-decay-limit",
      "M-phys-borexino2015-electron-decay-limit",
      "interpretation-dependency"
    ],
    [
      "borexino2015-electron-response-context-borexino2015-electron-decay-limit",
      "borexino2015-electron-response-context",
      "borexino2015-electron-decay-limit",
      "M-phys-borexino2015-electron-decay-limit",
      "interpretation-dependency"
    ],
    [
      "borexino2015-electron-inference-context-borexino2015-electron-decay-limit",
      "borexino2015-electron-inference-context",
      "borexino2015-electron-decay-limit",
      "M-phys-borexino2015-electron-decay-limit",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "borexino2015-electron-acquisition",
    "borexino2015-electron-response",
    "borexino2015-electron-inference"
  ],
  "comparisonIds": [
    "borexino2015-electron-decay-boundary"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "borexino2015-electron-decay",
      "kind": "research-publication",
      "title": "Test of Electric Charge Conservation with Borexino",
      "authors": [
        "Borexino Collaboration"
      ],
      "year": 2015,
      "doi": "10.1103/PhysRevLett.115.231802",
      "url": "https://arxiv.org/pdf/1509.01223v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum",
          "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response",
          "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs",
          "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound",
          "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound"
        ],
        "limit": "Read the five-page author v2 and visually checked Figure 1 and equations 1-7 on pages 3-5; cross-checked the published response/fit and limit text on pages 231802-4 to 231802-5. The cited calibration, solar-neutrino and response theses/articles were not independently reconstructed. No new full spectral fit or confidence-profile calculation is supplied."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-borexino2015-electron-acquisition-context",
      "kind": "method",
      "statement": "Use 408 live days from January 2012 to May 2013 in the PC/PPO scintillator. The spectral selection uses a 75.5 t fiducial mass with R<3.02 m and |Z|<1.67 m. Count triggered PMTs in 230 ns; fit 62-220 hits, corresponding to 164-590 keV.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ],
      "contextIds": [
        "borexino2015-electron-acquisition"
      ]
    },
    {
      "id": "M-phys-borexino2015-electron-response-context",
      "kind": "method",
      "statement": "Model a hypothetical 256 keV photon as a quenched 220 +/- 0.4 keV electron-equivalent response, using Birks quenching, a scaled-Poisson line shape and measured/simulated resolution inputs. Include data-driven synthetic pile-up. Simulation gives global photon efficiency 0.264, including the fiducial cut.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quenched visible signal and its efficiency depend on calibration and simulation. The full response code, event list and bin covariance are not supplied here; no acquisition or detector-response replay is claimed.",
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count."
      ],
      "contextIds": [
        "borexino2015-electron-response"
      ]
    },
    {
      "id": "M-phys-borexino2015-electron-inference-context",
      "kind": "method",
      "statement": "Fit the low-energy spectrum with constrained pp and other solar/background components, free light yield and resolution parameters, and a hypothetical photon contribution. Normalize probability profiles over nonnegative signal counts; integrate to the stated 90% level and combine profiles over correlated systematic variations.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The pp-rate penalty adopts 134 cpd/100 t and uncertainty parameter 13.3 cpd/100 t from external radiochemical information. The separate fiducial term 2.7 represents the Borexino 2% mass uncertainty. The paper calls 13.3 a variance, but squares it in the penalty denominator. Other solar components retain their Borexino or SSM/MSW-LMA inputs; the whole fit is not assumption-free.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage."
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    },
    {
      "id": "C-phys-borexino2015-electron-spectrum",
      "kind": "review-finding",
      "statement": "Figure 1 reports the selected low-energy spectrum with radioactive, solar-neutrino and pile-up components. The hypothetical photon line is displayed at its 90% exclusion level; it is not an observed peak from electron decay.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum",
          "role": "supports",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response",
          "role": "supports",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure 1 black points are measured selected events. Its red 256 keV photon component is a hypothetical signal at the 90% exclusion level, not a detected electron-decay line; fitted components are not separately counted populations.",
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ],
      "contextIds": [
        "borexino2015-electron-acquisition"
      ]
    },
    {
      "id": "M-phys-borexino2015-electron-spectrum",
      "kind": "method",
      "statement": "Keep measured spectrum points separate from fitted backgrounds and the hypothetical excluded signal; the printed figure does not supply the full event sample or a released numerical spectrum.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure 1 black points are measured selected events. Its red 256 keV photon component is a hypothetical signal at the 90% exclusion level, not a detected electron-decay line; fitted components are not separately counted populations.",
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ],
      "contextIds": [
        "borexino2015-electron-acquisition"
      ]
    },
    {
      "id": "C-phys-borexino2015-electron-decay-limit",
      "kind": "review-finding",
      "statement": "Borexino reports tau(e- -> gamma + nu) >= 6.6e28 yr at 90% C.L., including systematic treatment. Its statistical-only result uses S=379 events, T=408 d, N_e=9.19e31 electrons in 278 t, and efficiency 0.264 in tau >= efficiency*N_e*T/S, giving the reported 7.2e28 yr bound.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound",
          "role": "supports",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
          "role": "supports",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage.",
        "This is a lower bound on the mean lifetime for the searched charge-violating e- -> gamma + nu channel. It neither measures an infinite lifetime nor excludes every electron-disappearance channel or determines a neutrino flavor or mass."
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    },
    {
      "id": "M-phys-borexino2015-electron-decay-limit",
      "kind": "method",
      "statement": "Infer the channel bound from this same spectrum using the calibrated photon response, full-vessel electron inventory and constrained fit. Retain the statistical and final systematic bounds as dependent stages of one search.",
      "scope": "Borexino Phase-2 search for the hypothetical e- -> gamma + nu decay, under its stated low-energy response, external backgrounds and limit construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
          "role": "method",
          "note": "Supports this reported stage within the reviewed primary analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage.",
        "This is a lower bound on the mean lifetime for the searched charge-violating e- -> gamma + nu channel. It neither measures an infinite lifetime nor excludes every electron-disappearance channel or determines a neutrino flavor or mass."
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:borexino2015-electron-acquisition-context",
      "name": "Borexino electron-decay search preparation",
      "kind": "context",
      "description": "Use 408 live days from January 2012 to May 2013 in the PC/PPO scintillator. The spectral selection uses a 75.5 t fiducial mass with R<3.02 m and |Z|<1.67 m. Count triggered PMTs in 230 ns; fit 62-220 hits, corresponding to 164-590 keV.",
      "claimIds": [
        "M-phys-borexino2015-electron-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs"
        }
      ],
      "openObligations": [
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ]
    },
    {
      "id": "phys:borexino2015-electron-response-context",
      "name": "Borexino electron-decay response model",
      "kind": "context",
      "description": "Model a hypothetical 256 keV photon as a quenched 220 +/- 0.4 keV electron-equivalent response, using Birks quenching, a scaled-Poisson line shape and measured/simulated resolution inputs. Include data-driven synthetic pile-up. Simulation gives global photon efficiency 0.264, including the fiducial cut.",
      "claimIds": [
        "M-phys-borexino2015-electron-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound"
        }
      ],
      "openObligations": [
        "The quenched visible signal and its efficiency depend on calibration and simulation. The full response code, event list and bin covariance are not supplied here; no acquisition or detector-response replay is claimed.",
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count."
      ]
    },
    {
      "id": "phys:borexino2015-electron-inference-context",
      "name": "Borexino constrained decay-limit inference",
      "kind": "context",
      "description": "Fit the low-energy spectrum with constrained pp and other solar/background components, free light yield and resolution parameters, and a hypothetical photon contribution. Normalize probability profiles over nonnegative signal counts; integrate to the stated 90% level and combine profiles over correlated systematic variations.",
      "claimIds": [
        "M-phys-borexino2015-electron-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound"
        }
      ],
      "openObligations": [
        "The pp-rate penalty adopts 134 cpd/100 t and uncertainty parameter 13.3 cpd/100 t from external radiochemical information. The separate fiducial term 2.7 represents the Borexino 2% mass uncertainty. The paper calls 13.3 a variance, but squares it in the penalty denominator. Other solar components retain their Borexino or SSM/MSW-LMA inputs; the whole fit is not assumption-free.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage."
      ]
    },
    {
      "id": "phys:borexino2015-electron-spectrum",
      "name": "Borexino electron-decay search spectrum",
      "kind": "scoped-process",
      "description": "Figure 1 reports the selected low-energy spectrum with radioactive, solar-neutrino and pile-up components. The hypothetical photon line is displayed at its 90% exclusion level; it is not an observed peak from electron decay.",
      "claimIds": [
        "C-phys-borexino2015-electron-spectrum"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response"
        }
      ],
      "openObligations": [
        "Figure 1 black points are measured selected events. Its red 256 keV photon component is a hypothetical signal at the 90% exclusion level, not a detected electron-decay line; fitted components are not separately counted populations.",
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ]
    },
    {
      "id": "phys:borexino2015-electron-decay-limit",
      "name": "Borexino electron radiative-decay lifetime bound",
      "kind": "scoped-process",
      "description": "Borexino reports tau(e- -> gamma + nu) >= 6.6e28 yr at 90% C.L., including systematic treatment. Its statistical-only result uses S=379 events, T=408 d, N_e=9.19e31 electrons in 278 t, and efficiency 0.264 in tau >= efficiency*N_e*T/S, giving the reported 7.2e28 yr bound.",
      "claimIds": [
        "C-phys-borexino2015-electron-decay-limit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound"
        },
        {
          "sourceId": "borexino2015-electron-decay",
          "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound"
        }
      ],
      "openObligations": [
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage.",
        "This is a lower bound on the mean lifetime for the searched charge-violating e- -> gamma + nu channel. It neither measures an infinite lifetime nor excludes every electron-disappearance channel or determines a neutrino flavor or mass."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:borexino2015-electron-acquisition-context-borexino2015-electron-spectrum",
      "source": "phys:borexino2015-electron-acquisition-context",
      "target": "phys:borexino2015-electron-spectrum",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Exposure, selection and PMT readout define the measured spectrum.",
      "claimIds": [
        "M-phys-borexino2015-electron-spectrum"
      ],
      "contextIds": [
        "borexino2015-electron-acquisition"
      ]
    },
    {
      "id": "physics:borexino2015-electron-response-context-borexino2015-electron-spectrum",
      "source": "phys:borexino2015-electron-response-context",
      "target": "phys:borexino2015-electron-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The visible-energy calibration and fitted components condition interpretation of the spectrum.",
      "claimIds": [
        "M-phys-borexino2015-electron-spectrum"
      ],
      "contextIds": [
        "borexino2015-electron-acquisition"
      ]
    },
    {
      "id": "physics:borexino2015-electron-spectrum-borexino2015-electron-decay-limit",
      "source": "phys:borexino2015-electron-spectrum",
      "target": "phys:borexino2015-electron-decay-limit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The limit reuses this spectrum; the hypothetical excluded line is not a new observation.",
      "claimIds": [
        "M-phys-borexino2015-electron-decay-limit"
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    },
    {
      "id": "physics:borexino2015-electron-response-context-borexino2015-electron-decay-limit",
      "source": "phys:borexino2015-electron-response-context",
      "target": "phys:borexino2015-electron-decay-limit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Quenching, line shape and simulated acceptance condition the channel limit.",
      "claimIds": [
        "M-phys-borexino2015-electron-decay-limit"
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    },
    {
      "id": "physics:borexino2015-electron-inference-context-borexino2015-electron-decay-limit",
      "source": "phys:borexino2015-electron-inference-context",
      "target": "phys:borexino2015-electron-decay-limit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "External background constraints and systematic probability profiles define the reported limit.",
      "claimIds": [
        "M-phys-borexino2015-electron-decay-limit"
      ],
      "contextIds": [
        "borexino2015-electron-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "borexino2015-electron-acquisition",
      "sourceId": "borexino2015-electron-decay",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.115.231802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "23",
      "pages": "231802",
      "system": "Borexino Phase-2 low-energy scintillator events",
      "preparation": "Use 408 live days from January 2012 to May 2013 in the PC/PPO scintillator. The spectral selection uses a 75.5 t fiducial mass with R<3.02 m and |Z|<1.67 m. Count triggered PMTs in 230 ns; fit 62-220 hits, corresponding to 164-590 keV.",
      "observable": "Borexino electron-decay search preparation",
      "finding": "The specified exposure, scintillator and selection, not a lifetime observation.",
      "limitations": [
        "This is the January 2012-May 2013 Borexino Phase-2 sample. The analysis reuses its low-energy solar-neutrino response and pile-up treatment; it is not an independent replication of that detector sample."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Author v2, page 2: Phase-2 exposure, scintillator and measured spectrum",
        "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.231802",
      "correctionCheck": "Author v2 and publisher metadata were checked, with the published limit text cross-checked. The older CTF result is a distinct detector study; no exhaustive later-result or correction census is claimed."
    },
    {
      "id": "borexino2015-electron-response",
      "sourceId": "borexino2015-electron-decay",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.231802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "23",
      "pages": "231802",
      "system": "Borexino Phase-2 low-energy scintillator events",
      "preparation": "Model a hypothetical 256 keV photon as a quenched 220 +/- 0.4 keV electron-equivalent response, using Birks quenching, a scaled-Poisson line shape and measured/simulated resolution inputs. Include data-driven synthetic pile-up. Simulation gives global photon efficiency 0.264, including the fiducial cut.",
      "observable": "Borexino electron-decay response model",
      "finding": "Calibration, simulated signal acceptance and spectral response inputs.",
      "limitations": [
        "The quenched visible signal and its efficiency depend on calibration and simulation. The full response code, event list and bin covariance are not supplied here; no acquisition or detector-response replay is claimed.",
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Author v2, pages 3-4, Figure 1 and equations 1-5: quenching, pile-up and detector response",
        "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.231802",
      "correctionCheck": "Author v2 and publisher metadata were checked, with the published limit text cross-checked. The older CTF result is a distinct detector study; no exhaustive later-result or correction census is claimed."
    },
    {
      "id": "borexino2015-electron-inference",
      "sourceId": "borexino2015-electron-decay",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.231802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "23",
      "pages": "231802",
      "system": "Borexino Phase-2 low-energy scintillator events",
      "preparation": "Fit the low-energy spectrum with constrained pp and other solar/background components, free light yield and resolution parameters, and a hypothetical photon contribution. Normalize probability profiles over nonnegative signal counts; integrate to the stated 90% level and combine profiles over correlated systematic variations.",
      "observable": "Borexino constrained decay-limit inference",
      "finding": "The conditional spectral fit and physical-region limit construction.",
      "limitations": [
        "The pp-rate penalty adopts 134 cpd/100 t and uncertainty parameter 13.3 cpd/100 t from external radiochemical information. The separate fiducial term 2.7 represents the Borexino 2% mass uncertainty. The paper calls 13.3 a variance, but squares it in the penalty denominator. Other solar components retain their Borexino or SSM/MSW-LMA inputs; the whole fit is not assumption-free.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Author v2, pages 4-5: constrained spectral fit, fiducial selection and background inputs",
        "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
        "Author v2, page 5, equations 6-7: event-limit normalization and statistical lifetime bound"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.231802",
      "correctionCheck": "Author v2 and publisher metadata were checked, with the published limit text cross-checked. The older CTF result is a distinct detector study; no exhaustive later-result or correction census is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "borexino2015-electron-decay-boundary",
      "candidate": "The selected spectrum bounds a hypothetical radiative electron-decay contribution.",
      "alternative": "Different nonnegative signal strengths under the same constrained background and detector response.",
      "discriminator": "Integrate the physical-region probability profile and retain the correlated systematic variations.",
      "result": "conditional-support",
      "limit": "This is a lower bound on the mean lifetime for the searched charge-violating e- -> gamma + nu channel. It neither measures an infinite lifetime nor excludes every electron-disappearance channel or determines a neutrino flavor or mass.",
      "assumptions": [
        "The pp-rate penalty adopts 134 cpd/100 t and uncertainty parameter 13.3 cpd/100 t from external radiochemical information. The separate fiducial term 2.7 represents the Borexino 2% mass uncertainty. The paper calls 13.3 a variance, but squares it in the penalty denominator. Other solar components retain their Borexino or SSM/MSW-LMA inputs; the whole fit is not assumption-free.",
        "The efficiency 0.264 already includes the fiducial cut and multiplies the electron inventory of the entire 278 t inner vessel. Replacing that inventory with the 75.5 t fiducial inventory would apply the volume restriction twice. S=379 is a statistical upper limit, not an observed decay count.",
        "The final bound mixes physical-region-normalized probability profiles over correlated estimator, quenching and fiducial-volume variations. An independent quadrature sum or a fixed 8% arithmetic discount does not reconstruct this procedure or its confidence coverage."
      ],
      "sourceIds": [
        "borexino2015-electron-decay"
      ],
      "claimIds": [
        "C-phys-borexino2015-electron-spectrum",
        "C-phys-borexino2015-electron-decay-limit"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:borexino2015-electron-acquisition-context",
      "role": "experimental-context",
      "denotes": "The specified exposure, scintillator and selection, not a lifetime observation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-borexino2015-electron-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:borexino2015-electron-response-context",
      "role": "model-context",
      "denotes": "Calibration, simulated signal acceptance and spectral response inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-borexino2015-electron-response-context"
      ]
    },
    {
      "nodeId": "phys:borexino2015-electron-inference-context",
      "role": "model-context",
      "denotes": "The conditional spectral fit and physical-region limit construction.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-borexino2015-electron-inference-context"
      ]
    },
    {
      "nodeId": "phys:borexino2015-electron-spectrum",
      "role": "scoped-phenomenon",
      "denotes": "The measured selected spectrum and its explicitly hypothetical signal illustration.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-borexino2015-electron-spectrum"
      ]
    },
    {
      "nodeId": "phys:borexino2015-electron-decay-limit",
      "role": "scoped-phenomenon",
      "denotes": "A reported conditional lower lifetime bound for one hypothetical decay channel.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-borexino2015-electron-decay-limit"
      ]
    }
  ]
};

/** Bind the searched channel, exposure, response and conditional limit. */
export function validateLeptonElectronContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing electron-decay ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value,
        `Electron-decay ${kind} changed ${id}.${key}: preserve channel, exposure and conditional limit`);
    }
  }
}
