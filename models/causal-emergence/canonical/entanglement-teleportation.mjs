import assert from "node:assert/strict";

export const ENTANGLEMENT_TELEPORTATION_CHECKS = new Map();
export const ENTANGLEMENT_TELEPORTATION_ANALYTICAL_SOURCES = new Map();
export const ENTANGLEMENT_TELEPORTATION_ADMISSION = {
  "definitions": [
    [
      "phys:qubit-teleportation-protocol",
      "D-phys-qubit-teleportation"
    ]
  ],
  "formalDependencies": [
    [
      "physics:bipartite-entanglement-qubit-teleportation-protocol",
      [
        "phys:bipartite-entanglement",
        "phys:qubit-teleportation-protocol"
      ]
    ]
  ],
  "contexts": [
    [
      "boschi1998-teleportation-acquisition-context",
      "M-phys-boschi1998-teleportation-acquisition-context",
      [
        "boschi1998-teleportation-acquisition"
      ]
    ],
    [
      "boschi1998-teleportation-response-context",
      "M-phys-boschi1998-teleportation-response-context",
      [
        "boschi1998-teleportation-response"
      ]
    ],
    [
      "boschi1998-teleportation-inference-context",
      "M-phys-boschi1998-teleportation-inference-context",
      [
        "boschi1998-teleportation-inference"
      ]
    ]
  ],
  "observations": [
    [
      "boschi1998-teleportation-fringes",
      "C-phys-boschi1998-teleportation-fringes",
      [
        "boschi1998-teleportation-acquisition"
      ]
    ],
    [
      "boschi1998-teleportation-score",
      "C-phys-boschi1998-teleportation-score",
      [
        "boschi1998-teleportation-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "boschi1998-teleportation-acquisition-context-boschi1998-teleportation-fringes",
      "boschi1998-teleportation-acquisition-context",
      "boschi1998-teleportation-fringes",
      "M-phys-boschi1998-teleportation-fringes",
      "measurement-context"
    ],
    [
      "boschi1998-teleportation-response-context-boschi1998-teleportation-fringes",
      "boschi1998-teleportation-response-context",
      "boschi1998-teleportation-fringes",
      "M-phys-boschi1998-teleportation-fringes",
      "interpretation-dependency"
    ],
    [
      "boschi1998-teleportation-acquisition-context-boschi1998-teleportation-score",
      "boschi1998-teleportation-acquisition-context",
      "boschi1998-teleportation-score",
      "M-phys-boschi1998-teleportation-score",
      "measurement-context"
    ],
    [
      "boschi1998-teleportation-response-context-boschi1998-teleportation-score",
      "boschi1998-teleportation-response-context",
      "boschi1998-teleportation-score",
      "M-phys-boschi1998-teleportation-score",
      "interpretation-dependency"
    ],
    [
      "boschi1998-teleportation-inference-context-boschi1998-teleportation-score",
      "boschi1998-teleportation-inference-context",
      "boschi1998-teleportation-score",
      "M-phys-boschi1998-teleportation-score",
      "interpretation-dependency"
    ],
    [
      "qubit-teleportation-protocol-boschi1998-teleportation-score",
      "qubit-teleportation-protocol",
      "boschi1998-teleportation-score",
      "M-phys-boschi1998-teleportation-score",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "boschi1998-teleportation-acquisition",
    "boschi1998-teleportation-response",
    "boschi1998-teleportation-inference"
  ],
  "comparisonIds": [
    "boschi1998-teleportation-classical-channel"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "bennett1993-teleportation",
      "kind": "research-publication",
      "title": "Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels",
      "authors": [
        "Charles H. Bennett",
        "Gilles Brassard",
        "Claude Crépeau",
        "Richard Jozsa",
        "Asher Peres",
        "William K. Wootters"
      ],
      "year": 1993,
      "doi": "10.1103/PhysRevLett.70.1895",
      "url": "https://people.disim.univaq.it/~serva/teaching/Bennet.1993.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-published-article",
        "locators": [
          "Published pages 1895-1897, Equations 1-6: unknown input, shared singlet, Bell measurement and outcome-dependent recovery",
          "Published page 1897: two classical bits, unconditioned maximally mixed receiver and no superluminal information transfer"
        ],
        "limit": "Read the complete published scan, PRL 70, 1895-1899; visually checked the qubit formulas on pages 1896-1897. The admission uses the ideal qubit protocol only; higher-dimensional and dense-coding constructions are not admitted. No experiment or local executable proof is claimed."
      }
    },
    {
      "id": "boschi1998-teleportation",
      "kind": "research-publication",
      "title": "Experimental Realization of Teleporting an Unknown Pure Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels",
      "authors": [
        "D. Boschi",
        "S. Branca",
        "F. De Martini",
        "L. Hardy",
        "S. Popescu"
      ],
      "year": 1998,
      "doi": "10.1103/PhysRevLett.80.1121",
      "url": "https://painterlab.caltech.edu/wp-content/uploads/2019/06/iqd_experimental_realization_teleporting_pure_quantum_state.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-published-article",
        "locators": [
          "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
          "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result",
          "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation"
        ],
        "limit": "Read all five published pages, PRL 80, 1121-1125, including the Appendix; visually checked pages 1122-1125, formulas and Figures 1-3. The sole arXiv v1 posting is identified in metadata, but its text is not substituted for the published article. Upstream apparatus papers and event records are not independently reviewed. No acquisition, uncertainty or channel reconstruction is replayed."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-qubit-teleportation",
      "kind": "review-finding",
      "statement": "For an unknown pure qubit initially independent of a shared singlet, Alice jointly measures the input and her resource qubit in the Bell basis. Each of four outcomes has probability 1/4. Two classical bits identify the outcome; Bob applies the corresponding identity or Pauli-equivalent rotation to recover the input state, up to a global phase. Averaging over the unreceived outcome gives Bob I/2, independent of the input.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bennett1993-teleportation",
          "locator": "Published pages 1895-1897, Equations 1-6: unknown input, shared singlet, Bell measurement and outcome-dependent recovery",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "bennett1993-teleportation",
          "locator": "Published page 1897: two classical bits, unconditioned maximally mixed receiver and no superluminal information transfer",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This ideal protocol assumes a maximally entangled resource, complete Bell measurement and correct conditional operations. Its unit success probability is not an experimental detection efficiency.",
        "Recovery requires the classical outcome. The original input is not retained as an independent copy; neither particle transport nor useful information faster than the classical channel follows."
      ]
    },
    {
      "id": "M-phys-boschi1998-teleportation-acquisition-context",
      "kind": "method",
      "statement": "The BBO down-conversion source supplies 702.2 nm photon pairs. Calcite paths and polarization rotations prepare (|a1 a2>+|b1 b2>)/sqrt(2), with the input alpha|v>+beta|h> encoded in the polarization of Alice's resource photon. The stations are about 2.5 m apart; the coincidence window is 1.6 ns and runs last 10 s, typically yielding about 500 coincidences.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The input is prepared on one of the resource photons; an independently supplied external input and the proposed local swap are not implemented. A two-photon realization uses distinct path and polarization factors, not three independently arriving photons."
      ],
      "contextIds": [
        "boschi1998-teleportation-acquisition"
      ]
    },
    {
      "id": "M-phys-boschi1998-teleportation-response-context",
      "kind": "method",
      "statement": "Alice's path-polarization analyzer identifies four Bell-basis outcomes using a 50:50 beam splitter, polarizing beam splitters and four detector channels. Bob converts paths to polarization and sets the verification analyzer for each outcome according to Equation 11. The experiment uses passive outcome-dependent verification rather than active conditional correction. I_parallel and I_perpendicular are coincidences with the same Bob detector at orthogonal analyzer settings.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The paper relates orthogonal rates to projection probabilities through a common efficiency-dependent normalization k. The other Bob detector is used only for alignment; no simultaneous two-detector or all-emitted-pair efficiency certification is supplied.",
        "Alice outcome labels and coincidence comparison are classical information needed to interpret the conditional output. No active arbitrary-input receiver channel, spacelike-signaling test or complete process tomography is demonstrated."
      ],
      "contextIds": [
        "boschi1998-teleportation-response"
      ]
    },
    {
      "id": "M-phys-boschi1998-teleportation-inference-context",
      "kind": "method",
      "statement": "For linear inputs at 0, +120 and -120 degrees, each with prior probability 1/3, define S as I_parallel/(I_parallel+I_perpendicular), averaged with weights 1/3 over the inputs and 1/4 over the four Alice outcomes. Equations 1-3 and the Appendix bound S<=3/4 for single-copy measurement by Alice followed only by classical communication and state preparation by Bob. The verifier projects onto the corresponding prepared state after accounting for the outcome-dependent rotation.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 3/4 bound belongs to this three-state ensemble and task, not the 2/3 uniform-qubit benchmark or a Bell-locality test. Its application here retains the published coincidence normalization and conditioning.",
        "The source reports an uncertainty on S without a locally reconstructed error model; no covariance, confidence calibration or complete channel-fidelity reconstruction is claimed."
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    },
    {
      "id": "C-phys-boschi1998-teleportation-fringes",
      "kind": "review-finding",
      "statement": "Figure 2 shows four outcome-conditioned coincidence curves versus Bob's analyzer angle for a 22.5 degree linear input, with maxima at 22.5, 67.5, -67.5 and -22.5 degrees as predicted by Equation 11. Figure 3 displays the corresponding verification for an elliptical input prepared with a 20 degree quarter-wave plate, using an outcome-dependent quarter-wave setting at Bob.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These detected-coincidence scans are illustrative linear and elliptical settings, distinct from the three linear inputs used for S. They do not supply full state/process tomography or an unconditional success probability."
      ],
      "contextIds": [
        "boschi1998-teleportation-acquisition"
      ]
    },
    {
      "id": "C-phys-boschi1998-teleportation-score",
      "kind": "review-finding",
      "statement": "For the three equally weighted linear inputs and four equally weighted Bell outcomes, the source reports S=0.853 +/- 0.012, exceeding its classical-channel bound 3/4. This is the reported average projection score inferred from normalized conditional coincidences under the stated response and benchmark assumptions.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "supports",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted uncertainty is retained as reported, without an independently reconstructed statistical/systematic decomposition or significance. It is not a fidelity claim for every input state or an all-trials detection-loophole-free test.",
        "This result uses the same two-photon apparatus and passive verification; it does not establish active recovery of an external unknown input, faster-than-classical communication or independent replication by the fringe illustrations."
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    },
    {
      "id": "M-phys-boschi1998-teleportation-fringes",
      "kind": "method",
      "statement": "Interpret the displayed coincidence scans with the selected input preparation, Alice outcome labeling and Bob's Equation 11 analyzer mapping.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Publication-reported interpretation; no event, detector-response or uncertainty replay."
      ],
      "contextIds": [
        "boschi1998-teleportation-acquisition"
      ]
    },
    {
      "id": "M-phys-boschi1998-teleportation-score",
      "kind": "method",
      "statement": "Infer the reported score from the separate three-input coincidence measurements using the declared orthogonal-rate normalization, equal input/outcome weights and classical benchmark.",
      "scope": "Ideal qubit teleportation and the conditional two-photon Boschi 1998 realization",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result",
          "role": "method",
          "note": "Supports this scoped protocol or experimental statement."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Publication-reported interpretation; no event, detector-response or uncertainty replay."
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:qubit-teleportation-protocol",
      "name": "Ideal qubit teleportation",
      "kind": "definition",
      "description": "For an unknown pure qubit initially independent of a shared singlet, Alice jointly measures the input and her resource qubit in the Bell basis. Each of four outcomes has probability 1/4. Two classical bits identify the outcome; Bob applies the corresponding identity or Pauli-equivalent rotation to recover the input state, up to a global phase. Averaging over the unreceived outcome gives Bob I/2, independent of the input.",
      "claimIds": [
        "D-phys-qubit-teleportation"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bennett1993-teleportation",
          "locator": "Published pages 1895-1897, Equations 1-6: unknown input, shared singlet, Bell measurement and outcome-dependent recovery"
        },
        {
          "sourceId": "bennett1993-teleportation",
          "locator": "Published page 1897: two classical bits, unconditioned maximally mixed receiver and no superluminal information transfer"
        }
      ],
      "openObligations": [
        "This ideal protocol assumes a maximally entangled resource, complete Bell measurement and correct conditional operations. Its unit success probability is not an experimental detection efficiency.",
        "Recovery requires the classical outcome. The original input is not retained as an independent copy; neither particle transport nor useful information faster than the classical channel follows."
      ]
    },
    {
      "id": "phys:boschi1998-teleportation-acquisition-context",
      "name": "Two-photon teleportation preparation",
      "kind": "context",
      "description": "The BBO down-conversion source supplies 702.2 nm photon pairs. Calcite paths and polarization rotations prepare (|a1 a2>+|b1 b2>)/sqrt(2), with the input alpha|v>+beta|h> encoded in the polarization of Alice's resource photon. The stations are about 2.5 m apart; the coincidence window is 1.6 ns and runs last 10 s, typically yielding about 500 coincidences.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
        }
      ],
      "openObligations": [
        "The input is prepared on one of the resource photons; an independently supplied external input and the proposed local swap are not implemented. A two-photon realization uses distinct path and polarization factors, not three independently arriving photons."
      ]
    },
    {
      "id": "phys:boschi1998-teleportation-response-context",
      "name": "Passive teleportation verification",
      "kind": "context",
      "description": "Alice's path-polarization analyzer identifies four Bell-basis outcomes using a 50:50 beam splitter, polarizing beam splitters and four detector channels. Bob converts paths to polarization and sets the verification analyzer for each outcome according to Equation 11. The experiment uses passive outcome-dependent verification rather than active conditional correction. I_parallel and I_perpendicular are coincidences with the same Bob detector at orthogonal analyzer settings.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation"
        }
      ],
      "openObligations": [
        "The paper relates orthogonal rates to projection probabilities through a common efficiency-dependent normalization k. The other Bob detector is used only for alignment; no simultaneous two-detector or all-emitted-pair efficiency certification is supplied.",
        "Alice outcome labels and coincidence comparison are classical information needed to interpret the conditional output. No active arbitrary-input receiver channel, spacelike-signaling test or complete process tomography is demonstrated."
      ]
    },
    {
      "id": "phys:boschi1998-teleportation-inference-context",
      "name": "Three-state teleportation criterion",
      "kind": "context",
      "description": "For linear inputs at 0, +120 and -120 degrees, each with prior probability 1/3, define S as I_parallel/(I_parallel+I_perpendicular), averaged with weights 1/3 over the inputs and 1/4 over the four Alice outcomes. Equations 1-3 and the Appendix bound S<=3/4 for single-copy measurement by Alice followed only by classical communication and state preparation by Bob. The verifier projects onto the corresponding prepared state after accounting for the outcome-dependent rotation.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
        }
      ],
      "openObligations": [
        "The 3/4 bound belongs to this three-state ensemble and task, not the 2/3 uniform-qubit benchmark or a Bell-locality test. Its application here retains the published coincidence normalization and conditioning.",
        "The source reports an uncertainty on S without a locally reconstructed error model; no covariance, confidence calibration or complete channel-fidelity reconstruction is claimed."
      ]
    },
    {
      "id": "phys:boschi1998-teleportation-fringes",
      "name": "Conditional teleportation fringes",
      "kind": "scoped-process",
      "description": "Figure 2 shows four outcome-conditioned coincidence curves versus Bob's analyzer angle for a 22.5 degree linear input, with maxima at 22.5, 67.5, -67.5 and -22.5 degrees as predicted by Equation 11. Figure 3 displays the corresponding verification for an elliptical input prepared with a 20 degree quarter-wave plate, using an outcome-dependent quarter-wave setting at Bob.",
      "claimIds": [
        "C-phys-boschi1998-teleportation-fringes"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation"
        }
      ],
      "openObligations": [
        "These detected-coincidence scans are illustrative linear and elliptical settings, distinct from the three linear inputs used for S. They do not supply full state/process tomography or an unconditional success probability."
      ]
    },
    {
      "id": "phys:boschi1998-teleportation-score",
      "name": "Three-state teleportation score",
      "kind": "scoped-process",
      "description": "For the three equally weighted linear inputs and four equally weighted Bell outcomes, the source reports S=0.853 +/- 0.012, exceeding its classical-channel bound 3/4. This is the reported average projection score inferred from normalized conditional coincidences under the stated response and benchmark assumptions.",
      "claimIds": [
        "C-phys-boschi1998-teleportation-score"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result"
        },
        {
          "sourceId": "boschi1998-teleportation",
          "locator": "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
        }
      ],
      "openObligations": [
        "The quoted uncertainty is retained as reported, without an independently reconstructed statistical/systematic decomposition or significance. It is not a fidelity claim for every input state or an all-trials detection-loophole-free test.",
        "This result uses the same two-photon apparatus and passive verification; it does not establish active recovery of an external unknown input, faster-than-classical communication or independent replication by the fringe illustrations."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:bipartite-entanglement-qubit-teleportation-protocol",
      "source": "phys:bipartite-entanglement",
      "target": "phys:qubit-teleportation-protocol",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A maximally entangled pair across the declared sender/receiver factors supplies this ideal protocol resource; generic entanglement alone does not certify an implementation.",
      "claimIds": [
        "D-phys-qubit-teleportation"
      ]
    },
    {
      "id": "physics:boschi1998-teleportation-acquisition-context-boschi1998-teleportation-fringes",
      "source": "phys:boschi1998-teleportation-acquisition-context",
      "target": "phys:boschi1998-teleportation-fringes",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The preparation and coincidence acquisition supply the selected linear and elliptical scans.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-fringes"
      ],
      "contextIds": [
        "boschi1998-teleportation-acquisition"
      ]
    },
    {
      "id": "physics:boschi1998-teleportation-response-context-boschi1998-teleportation-fringes",
      "source": "phys:boschi1998-teleportation-response-context",
      "target": "phys:boschi1998-teleportation-fringes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The Bell-outcome map and passive analyzer settings interpret the observed scan peaks.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-fringes"
      ],
      "contextIds": [
        "boschi1998-teleportation-acquisition"
      ]
    },
    {
      "id": "physics:boschi1998-teleportation-acquisition-context-boschi1998-teleportation-score",
      "source": "phys:boschi1998-teleportation-acquisition-context",
      "target": "phys:boschi1998-teleportation-score",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Separate settings of the same apparatus supply the three-input coincidences used for S; the illustrative fringe plots are not those data.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-score"
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    },
    {
      "id": "physics:boschi1998-teleportation-response-context-boschi1998-teleportation-score",
      "source": "phys:boschi1998-teleportation-response-context",
      "target": "phys:boschi1998-teleportation-score",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The orthogonal-rate normalization and outcome-dependent verification condition the score.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-score"
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    },
    {
      "id": "physics:boschi1998-teleportation-inference-context-boschi1998-teleportation-score",
      "source": "phys:boschi1998-teleportation-inference-context",
      "target": "phys:boschi1998-teleportation-score",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The input prior and four-outcome averaging specify this score and its 3/4 classical comparison.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-score"
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    },
    {
      "id": "physics:qubit-teleportation-protocol-boschi1998-teleportation-score",
      "source": "phys:qubit-teleportation-protocol",
      "target": "phys:boschi1998-teleportation-score",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ideal protocol supplies the transfer task; this passive, locally encoded-input experiment tests a restricted realization, not every operation of an active external-input channel.",
      "claimIds": [
        "M-phys-boschi1998-teleportation-score"
      ],
      "contextIds": [
        "boschi1998-teleportation-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "boschi1998-teleportation-acquisition",
      "sourceId": "boschi1998-teleportation",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.80.1121",
      "journal": "Physical Review Letters",
      "volume": "80",
      "issue": "6",
      "pages": "1121-1125",
      "system": "Two-photon path/polarization teleportation with passive conditional verification",
      "preparation": "The BBO down-conversion source supplies 702.2 nm photon pairs. Calcite paths and polarization rotations prepare (|a1 a2>+|b1 b2>)/sqrt(2), with the input alpha|v>+beta|h> encoded in the polarization of Alice's resource photon. The stations are about 2.5 m apart; the coincidence window is 1.6 ns and runs last 10 s, typically yielding about 500 coincidences.",
      "observable": "Two-photon teleportation preparation",
      "finding": "The two-photon preparation, selected input settings and coincidence acquisition.",
      "limitations": [
        "The input is prepared on one of the resource photons; an independently supplied external input and the proposed local swap are not implemented. A two-photon realization uses distinct path and polarization factors, not three independently arriving photons."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
        "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.80.1121",
      "correctionCheck": "Publisher identity and the sole arXiv v1 posting were checked. The published article supplies these results; no exhaustive correction or latest-experiment census is claimed."
    },
    {
      "id": "boschi1998-teleportation-response",
      "sourceId": "boschi1998-teleportation",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.80.1121",
      "journal": "Physical Review Letters",
      "volume": "80",
      "issue": "6",
      "pages": "1121-1125",
      "system": "Two-photon path/polarization teleportation with passive conditional verification",
      "preparation": "Alice's path-polarization analyzer identifies four Bell-basis outcomes using a 50:50 beam splitter, polarizing beam splitters and four detector channels. Bob converts paths to polarization and sets the verification analyzer for each outcome according to Equation 11. The experiment uses passive outcome-dependent verification rather than active conditional correction. I_parallel and I_perpendicular are coincidences with the same Bob detector at orthogonal analyzer settings.",
      "observable": "Passive teleportation verification",
      "finding": "The outcome-to-polarization mapping, analyzer response and conditional detection normalization.",
      "limitations": [
        "The paper relates orthogonal rates to projection probabilities through a common efficiency-dependent normalization k. The other Bob detector is used only for alignment; no simultaneous two-detector or all-emitted-pair efficiency certification is supplied.",
        "Alice outcome labels and coincidence comparison are classical information needed to interpret the conditional output. No active arbitrary-input receiver channel, spacelike-signaling test or complete process tomography is demonstrated."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published pages 1121-1123, Figure 1 and Equations 4-10: two-photon path resource, locally encoded polarization input and Bell-state analyzer",
        "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization",
        "Published page 1124, Figures 2-3 and Equation 12: linear and elliptical input coincidence fringes and active-correction limitation"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.80.1121",
      "correctionCheck": "Publisher identity and the sole arXiv v1 posting were checked. The published article supplies these results; no exhaustive correction or latest-experiment census is claimed."
    },
    {
      "id": "boschi1998-teleportation-inference",
      "sourceId": "boschi1998-teleportation",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.80.1121",
      "journal": "Physical Review Letters",
      "volume": "80",
      "issue": "6",
      "pages": "1121-1125",
      "system": "Two-photon path/polarization teleportation with passive conditional verification",
      "preparation": "For linear inputs at 0, +120 and -120 degrees, each with prior probability 1/3, define S as I_parallel/(I_parallel+I_perpendicular), averaged with weights 1/3 over the inputs and 1/4 over the four Alice outcomes. Equations 1-3 and the Appendix bound S<=3/4 for single-copy measurement by Alice followed only by classical communication and state preparation by Bob. The verifier projects onto the corresponding prepared state after accounting for the outcome-dependent rotation.",
      "observable": "Three-state teleportation criterion",
      "finding": "The declared input prior, equal outcome weighting and classical measure-and-prepare comparison.",
      "limitations": [
        "The 3/4 bound belongs to this three-state ensemble and task, not the 2/3 uniform-qubit benchmark or a Bell-locality test. Its application here retains the published coincidence normalization and conditioning.",
        "The source reports an uncertainty on S without a locally reconstructed error model; no covariance, confidence calibration or complete channel-fidelity reconstruction is claimed."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published pages 1122-1123 and 1125, Equations 1-3 and Appendix: three-state classical benchmark, equally weighted score and reported result",
        "Published pages 1123-1124, Equation 11 and apparatus paragraphs: passive outcome-dependent verification, coincidence window and detector normalization"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.80.1121",
      "correctionCheck": "Publisher identity and the sole arXiv v1 posting were checked. The published article supplies these results; no exhaustive correction or latest-experiment census is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "boschi1998-teleportation-classical-channel",
      "candidate": "An entanglement-assisted realization yields a conditional score above the classical measure-and-prepare bound for the declared input ensemble.",
      "alternative": "Alice measures one copy and Bob prepares an output using only classical communication for the same three equally likely inputs.",
      "discriminator": "The equally weighted conditional projection score S=0.853 +/- 0.012 is compared with the published S<=3/4 benchmark.",
      "result": "conditional-support",
      "limit": "The comparison retains coincidence selection, passive verification and common rate normalization; it is not a Bell test, a universal-qubit fidelity benchmark or an active external-input channel demonstration.",
      "assumptions": [
        "Three specified inputs, equal input/outcome weights and the paper's common-efficiency projection model."
      ],
      "sourceIds": [
        "boschi1998-teleportation"
      ],
      "claimIds": [
        "M-phys-boschi1998-teleportation-inference-context",
        "C-phys-boschi1998-teleportation-score"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:qubit-teleportation-protocol",
      "role": "definition",
      "denotes": "The ideal shared-singlet, Bell-measurement and two-bit conditional-recovery protocol.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-qubit-teleportation"
      ]
    },
    {
      "nodeId": "phys:boschi1998-teleportation-acquisition-context",
      "role": "experimental-context",
      "denotes": "The two-photon preparation, selected input settings and coincidence acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-boschi1998-teleportation-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:boschi1998-teleportation-response-context",
      "role": "model-context",
      "denotes": "The outcome-to-polarization mapping, analyzer response and conditional detection normalization.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-boschi1998-teleportation-response-context"
      ]
    },
    {
      "nodeId": "phys:boschi1998-teleportation-inference-context",
      "role": "model-context",
      "denotes": "The declared input prior, equal outcome weighting and classical measure-and-prepare comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-boschi1998-teleportation-inference-context"
      ]
    },
    {
      "nodeId": "phys:boschi1998-teleportation-fringes",
      "role": "scoped-phenomenon",
      "denotes": "Reported outcome-conditioned coincidence scans for the selected illustrative input states.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-boschi1998-teleportation-fringes"
      ]
    },
    {
      "nodeId": "phys:boschi1998-teleportation-score",
      "role": "scoped-phenomenon",
      "denotes": "The publication-reported three-state conditional score and its specific classical benchmark.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-boschi1998-teleportation-score"
      ]
    }
  ]
};

/** Keep the ideal protocol distinct from this conditional experimental realization. */
export function validateEntanglementTeleportationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Teleportation ${kind} changed ${id}: preserve the protocol, conditioning and specific classical benchmark`);
    }
  }
}
