import assert from "node:assert/strict";

export const ENTANGLEMENT_BELL_CHECKS = new Map();
export const ENTANGLEMENT_BELL_ANALYTICAL_SOURCES = new Map();
export const ENTANGLEMENT_BELL_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "shalm2015-acquisition-context",
      "M-phys-shalm2015-acquisition-context",
      [
        "shalm2015-acquisition"
      ]
    ],
    [
      "shalm2015-response-context",
      "M-phys-shalm2015-response-context",
      [
        "shalm2015-response"
      ]
    ],
    [
      "shalm2015-inference-context",
      "M-phys-shalm2015-inference-context",
      [
        "shalm2015-inference"
      ]
    ]
  ],
  "observations": [
    [
      "shalm2015-trial-records",
      "C-phys-shalm2015-trial-records",
      [
        "shalm2015-acquisition"
      ]
    ],
    [
      "shalm2015-bell-test",
      "C-phys-shalm2015-bell-test",
      [
        "shalm2015-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "shalm2015-acquisition-context-shalm2015-trial-records",
      "shalm2015-acquisition-context",
      "shalm2015-trial-records",
      "M-phys-shalm2015-trial-records",
      "measurement-context"
    ],
    [
      "shalm2015-response-context-shalm2015-trial-records",
      "shalm2015-response-context",
      "shalm2015-trial-records",
      "M-phys-shalm2015-trial-records",
      "interpretation-dependency"
    ],
    [
      "shalm2015-inference-context-shalm2015-trial-records",
      "shalm2015-inference-context",
      "shalm2015-trial-records",
      "M-phys-shalm2015-trial-records",
      "interpretation-dependency"
    ],
    [
      "shalm2015-trial-records-shalm2015-bell-test",
      "shalm2015-trial-records",
      "shalm2015-bell-test",
      "M-phys-shalm2015-bell-test",
      "interpretation-dependency"
    ],
    [
      "shalm2015-response-context-shalm2015-bell-test",
      "shalm2015-response-context",
      "shalm2015-bell-test",
      "M-phys-shalm2015-bell-test",
      "interpretation-dependency"
    ],
    [
      "shalm2015-inference-context-shalm2015-bell-test",
      "shalm2015-inference-context",
      "shalm2015-bell-test",
      "M-phys-shalm2015-bell-test",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "shalm2015-acquisition",
    "shalm2015-response",
    "shalm2015-inference"
  ],
  "comparisonIds": [
    "shalm2015-local-null"
  ],
  "inferenceSources": [
    [
      "M-phys-shalm2015-acquisition-context",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "M-phys-shalm2015-response-context",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "M-phys-shalm2015-inference-context",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "C-phys-shalm2015-trial-records",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "C-phys-shalm2015-bell-test",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "M-phys-shalm2015-trial-records",
      [
        "shalm2015-bell-supplement"
      ]
    ],
    [
      "M-phys-shalm2015-bell-test",
      [
        "shalm2015-bell-supplement"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "shalm2015-bell",
      "kind": "research-publication",
      "title": "Strong Loophole-Free Test of Local Realism",
      "authors": [
        "Lynden K. Shalm",
        "Evan Meyer-Scott",
        "Bradley G. Christensen",
        "Peter Bierhorst",
        "Michael A. Wayne",
        "Martin J. Stevens",
        "Thomas Gerrits",
        "Scott Glancy",
        "Deny R. Hamel",
        "Michael S. Allman",
        "Kevin J. Coakley",
        "Shellee D. Dyer",
        "Carson Hodge",
        "Adriana E. Lita",
        "Varun B. Verma",
        "Camilla Lambrocco",
        "Edward Tortorici",
        "Alan L. Migdall",
        "Yanbao Zhang",
        "Daniel R. Kumor",
        "William H. Farr",
        "Francesco Marsili",
        "Matthew D. Shaw",
        "Jeffrey A. Stern",
        "Carlos Abellan",
        "Waldimar Amaya",
        "Valerio Pruneri",
        "Thomas Jennewein",
        "Morgan W. Mitchell",
        "Paul G. Kwiat",
        "Joshua C. Bienfang",
        "Richard P. Mirin",
        "Emanuel Knill",
        "Sae Woo Nam"
      ],
      "year": 2015,
      "doi": "10.1103/PhysRevLett.115.250402",
      "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=919674",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-publisher-primary-article",
        "locators": [
          "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
          "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
        ],
        "limit": "Read the complete published ten-page PRL PDF from NIST; visually checked Equations 1-2, Figure 3 and Table I. The APS supplement was separately read. Table I and the abstract give 5.9e-9 while nearby text gives 5.8e-9; supplement Table S-I gives 5.85e-9. These printed values are preserved without repairing the source. Deposited time tags/software (10.5060/D2JW8BTT), upstream device papers and the statistical proof are not replayed; no raw acquisition, RNG or timing calibration is independently reproduced."
      }
    },
    {
      "id": "shalm2015-bell-supplement",
      "kind": "research-publication",
      "title": "Supplemental Material: A strong loophole-free test of local realism",
      "authors": [
        "Lynden K. Shalm",
        "Evan Meyer-Scott",
        "Bradley G. Christensen",
        "Peter Bierhorst",
        "Michael A. Wayne",
        "Martin J. Stevens",
        "Thomas Gerrits",
        "Scott Glancy",
        "Deny R. Hamel",
        "Michael S. Allman",
        "Kevin J. Coakley",
        "Shellee D. Dyer",
        "Carson Hodge",
        "Adriana E. Lita",
        "Varun B. Verma",
        "Camilla Lambrocco",
        "Edward Tortorici",
        "Alan L. Migdall",
        "Yanbao Zhang",
        "Daniel R. Kumor",
        "William H. Farr",
        "Francesco Marsili",
        "Matthew D. Shaw",
        "Jeffrey A. Stern",
        "Carlos Abellan",
        "Waldimar Amaya",
        "Valerio Pruneri",
        "Thomas Jennewein",
        "Morgan W. Mitchell",
        "Paul G. Kwiat",
        "Joshua C. Bienfang",
        "Richard P. Mirin",
        "Emanuel Knill",
        "Sae Woo Nam"
      ],
      "year": 2015,
      "doi": "10.1103/PhysRevLett.115.250402",
      "url": "https://journals.aps.org/prl/supplemental/10.1103/PhysRevLett.115.250402/LHFSupplementary.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-publisher-supplement",
        "locators": [
          "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "Supplement pages 4-7, Section II and Figure S2: measured timing paths, uncertainties and spatial bounds",
          "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias",
          "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions"
        ],
        "limit": "Read all sixteen pages of the APS supplement dated 21 November 2015, including statistical, timing, RNG and run-selection methods; visually checked Equations S2-S4, Figure S2 and Tables S-I/S-II. This is the supplement served with the published article, not a review of the later arXiv-v2 main text. Calibration/model assumptions remain external inputs. The four pulse groupings reuse one run; no global selection-adjusted or pooled p-value is supplied here. Diagnostic independence/no-signalling tests assume iid behavior, unlike the reported memory-robust Bell null test."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-shalm2015-acquisition-context",
      "kind": "method",
      "statement": "Prepare nonmaximally polarization-entangled 1550 nm photon pairs by pulsed downconversion and distribute them to separate Alice/Bob stations. Each local 99.1 kHz trial records a setting and + for a detection in the accepted window or 0 otherwise. Settings combine phase-diffusion, photon-sampling and predetermined pseudorandom bits by XOR. The selected Classical XOR3 run lasted 30 minutes.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The final run is one of six analyzed configurations over two days; a separate blind run was not analyzed. Pulse groupings reuse the same events and are not independent experiments. This photonic sample is distinct from the Delft spin runs; no joint p-value is formed."
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "M-phys-shalm2015-response-context",
      "kind": "method",
      "statement": "Local arrival windows and the timing/calibration model determine the accepted binary outcomes and spacelike-separation claim. Published system efficiencies are 74.7 +/- 0.3% and 75.6 +/- 0.3%; five-pulse timing margin is 38.3 +/- 3.7 ns. The analysis assumes outcomes are fixed at the time taggers and reliable measured positions/delays.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 4-7, Section II and Figure S2: measured timing paths, uncertainties and spatial bounds",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No fair-sampling assumption is used to discard nondetections; local trial/window definitions and the complete outcomes remain operative. Spacelike timing does not prove absolute freedom of settings or complete device correctness.",
        "RNG models and post-acquisition synchronization-board tests motivate the conservative epsilon=0.003 bound; output randomness tests do not certify unpredictability. Conditional independence of the two setting choices given the permitted predictability remains an assumption."
      ],
      "contextIds": [
        "shalm2015-response"
      ]
    },
    {
      "id": "M-phys-shalm2015-inference-context",
      "kind": "method",
      "statement": "Test P(++|ab)<=P(+0|ab')+P(0+|a'b)+P(++|a'b'). The statistic N_S counts ++ab among the first N_chi events in those four settings/outcome classes. A disjoint initial training segment estimates f and fixes N_chi=0.9*r*f for the remaining r trials. Per trial, epsilon bounds each maximum setting probability: max(P(a),P(a')) and max(P(b),P(b'))<=(1+epsilon)/2. Use the reported memory-robust binomial-tail bound, with success bound 1/2 for equiprobable choices or 1/2+epsilon/(1+epsilon^2) for bounded predictability.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Bell bound allows memory without iid trials. Training is excluded from the tested suffix; later events beyond the relevant-event cut are discarded. Stopping at the most favorable fluctuation would invalidate this procedure.",
        "The main text highlights the most stable, best-aligned run and reports several overlapping pulse groupings. These reported per-analysis values are not a newly established global or multiple-selection-adjusted p-value. The iid-based diagnostic tests are separate."
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    },
    {
      "id": "C-phys-shalm2015-trial-records",
      "kind": "review-finding",
      "statement": "For Classical XOR3 with pulses 4-8 aggregated, Table I reports 177358351 total trials through the selected stopping point, N_chi=12127 relevant events and N_S=6378 ++ab events. Supplement Table S-II retains all four outcomes, including 00, for each setting pair. These are stopping-selected counts from one recorded run.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Relevant-event thinning belongs to the declared null test, not a detected-pair fair-sampling assumption. N_chi is not the total trial count, and the full-run N_Total=182137032 in Table S-I is not the stopping-selected count. No event table, trial selection or timing data are locally replayed."
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "C-phys-shalm2015-bell-test",
      "kind": "review-finding",
      "statement": "For that five-pulse analysis, Table I reports nominal p=5.9e-9 and predictability-adjusted p=2.3e-7 using epsilon=0.003. These are conditional tail bounds against the specified local model; the adjusted result permits the declared limited setting predictability.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "supports",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I/abstract print 5.9e-9, nearby text 5.8e-9 and supplement Table S-I 5.85e-9 for the nominal case; the discrepancy is retained. The adjusted value is distinct from the nominal one.",
        "A p-value is not the probability that locality is true. Conditional rejection does not certify every entangled state, superluminal signalling, ontological nonlocal causation or independence of all device assumptions. No published null calculation or experiment is reproduced here."
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    },
    {
      "id": "M-phys-shalm2015-trial-records",
      "kind": "method",
      "statement": "Local acquisition, detection windows and the training-fixed cut jointly define the published counts. A selected count table is not the full time-tag stream.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Relevant-event thinning belongs to the declared null test, not a detected-pair fair-sampling assumption. N_chi is not the total trial count, and the full-run N_Total=182137032 in Table S-I is not the stopping-selected count. No event table, trial selection or timing data are locally replayed."
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "M-phys-shalm2015-bell-test",
      "kind": "method",
      "statement": "The selected counts, declared apparatus/RNG boundary and memory-robust inference jointly support this conditional test. Nominal and adjusted tails reuse the same data.",
      "scope": "The published Classical XOR3 photonic Bell run and its pulse-4-to-8 analysis, under the declared apparatus and local-model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions",
          "role": "method",
          "note": "Supports the declared experimental stage and its limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A p-value is not the probability that locality is true. Conditional rejection does not certify every entangled state, superluminal signalling, ontological nonlocal causation or independence of all device assumptions. No published null calculation or experiment is reproduced here."
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:shalm2015-acquisition-context",
      "name": "Shalm photonic Bell acquisition",
      "kind": "context",
      "description": "Prepare nonmaximally polarization-entangled 1550 nm photon pairs by pulsed downconversion and distribute them to separate Alice/Bob stations. Each local 99.1 kHz trial records a setting and + for a detection in the accepted window or 0 otherwise. Settings combine phase-diffusion, photon-sampling and predetermined pseudorandom bits by XOR. The selected Classical XOR3 run lasted 30 minutes.",
      "claimIds": [
        "M-phys-shalm2015-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions"
        }
      ],
      "openObligations": [
        "The final run is one of six analyzed configurations over two days; a separate blind run was not analyzed. Pulse groupings reuse the same events and are not independent experiments. This photonic sample is distinct from the Delft spin runs; no joint p-value is formed."
      ]
    },
    {
      "id": "phys:shalm2015-response-context",
      "name": "Shalm detection and timing boundary",
      "kind": "context",
      "description": "Local arrival windows and the timing/calibration model determine the accepted binary outcomes and spacelike-separation claim. Published system efficiencies are 74.7 +/- 0.3% and 75.6 +/- 0.3%; five-pulse timing margin is 38.3 +/- 3.7 ns. The analysis assumes outcomes are fixed at the time taggers and reliable measured positions/delays.",
      "claimIds": [
        "M-phys-shalm2015-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection"
        },
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 4-7, Section II and Figure S2: measured timing paths, uncertainties and spatial bounds"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias"
        }
      ],
      "openObligations": [
        "No fair-sampling assumption is used to discard nondetections; local trial/window definitions and the complete outcomes remain operative. Spacelike timing does not prove absolute freedom of settings or complete device correctness.",
        "RNG models and post-acquisition synchronization-board tests motivate the conservative epsilon=0.003 bound; output randomness tests do not certify unpredictability. Conditional independence of the two setting choices given the permitted predictability remains an assumption."
      ]
    },
    {
      "id": "phys:shalm2015-inference-context",
      "name": "Shalm memory-robust Bell inference",
      "kind": "context",
      "description": "Test P(++|ab)<=P(+0|ab')+P(0+|a'b)+P(++|a'b'). The statistic N_S counts ++ab among the first N_chi events in those four settings/outcome classes. A disjoint initial training segment estimates f and fixes N_chi=0.9*r*f for the remaining r trials. Per trial, epsilon bounds each maximum setting probability: max(P(a),P(a')) and max(P(b),P(b'))<=(1+epsilon)/2. Use the reported memory-robust binomial-tail bound, with success bound 1/2 for equiprobable choices or 1/2+epsilon/(1+epsilon^2) for bounded predictability.",
      "claimIds": [
        "M-phys-shalm2015-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions"
        }
      ],
      "openObligations": [
        "The Bell bound allows memory without iid trials. Training is excluded from the tested suffix; later events beyond the relevant-event cut are discarded. Stopping at the most favorable fluctuation would invalidate this procedure.",
        "The main text highlights the most stable, best-aligned run and reports several overlapping pulse groupings. These reported per-analysis values are not a newly established global or multiple-selection-adjusted p-value. The iid-based diagnostic tests are separate."
      ]
    },
    {
      "id": "phys:shalm2015-trial-records",
      "name": "Shalm stopping-selected trial counts",
      "kind": "scoped-process",
      "description": "For Classical XOR3 with pulses 4-8 aggregated, Table I reports 177358351 total trials through the selected stopping point, N_chi=12127 relevant events and N_S=6378 ++ab events. Supplement Table S-II retains all four outcomes, including 00, for each setting pair. These are stopping-selected counts from one recorded run.",
      "claimIds": [
        "C-phys-shalm2015-trial-records"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions"
        }
      ],
      "openObligations": [
        "Relevant-event thinning belongs to the declared null test, not a detected-pair fair-sampling assumption. N_chi is not the total trial count, and the full-run N_Total=182137032 in Table S-I is not the stopping-selected count. No event table, trial selection or timing data are locally replayed."
      ]
    },
    {
      "id": "phys:shalm2015-bell-test",
      "name": "Shalm conditional photonic Bell test",
      "kind": "scoped-process",
      "description": "For that five-pulse analysis, Table I reports nominal p=5.9e-9 and predictability-adjusted p=2.3e-7 using epsilon=0.003. These are conditional tail bounds against the specified local model; the adjusted result permits the declared limited setting predictability.",
      "claimIds": [
        "C-phys-shalm2015-bell-test"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "shalm2015-bell",
          "locator": "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 1-4, Sections I.A-I.C and Equations S1-S4: relevant trials, training, stopping and predictability-adjusted null"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 8-13, Section III and Figures S3-S6: random-setting generation, metrology and synchronization bias"
        },
        {
          "sourceId": "shalm2015-bell-supplement",
          "locator": "Supplement pages 13-16, Section IV and Tables S-I to S-III: run selection, stopping counts, outcome table and diagnostic assumptions"
        }
      ],
      "openObligations": [
        "Table I/abstract print 5.9e-9, nearby text 5.8e-9 and supplement Table S-I 5.85e-9 for the nominal case; the discrepancy is retained. The adjusted value is distinct from the nominal one.",
        "A p-value is not the probability that locality is true. Conditional rejection does not certify every entangled state, superluminal signalling, ontological nonlocal causation or independence of all device assumptions. No published null calculation or experiment is reproduced here."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:shalm2015-acquisition-context-shalm2015-trial-records",
      "source": "phys:shalm2015-acquisition-context",
      "target": "phys:shalm2015-trial-records",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The local preparation and measurement procedure supplies the recorded settings and binary outcomes.",
      "claimIds": [
        "M-phys-shalm2015-trial-records"
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "physics:shalm2015-response-context-shalm2015-trial-records",
      "source": "phys:shalm2015-response-context",
      "target": "phys:shalm2015-trial-records",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The local detection windows and timing interpretation define the accepted outcomes.",
      "claimIds": [
        "M-phys-shalm2015-trial-records"
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "physics:shalm2015-inference-context-shalm2015-trial-records",
      "source": "phys:shalm2015-inference-context",
      "target": "phys:shalm2015-trial-records",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The training-fixed relevant-event cut defines which recorded trials enter the published count table.",
      "claimIds": [
        "M-phys-shalm2015-trial-records"
      ],
      "contextIds": [
        "shalm2015-acquisition"
      ]
    },
    {
      "id": "physics:shalm2015-trial-records-shalm2015-bell-test",
      "source": "phys:shalm2015-trial-records",
      "target": "phys:shalm2015-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected setting/outcome counts supply this null-test statistic.",
      "claimIds": [
        "M-phys-shalm2015-bell-test"
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    },
    {
      "id": "physics:shalm2015-response-context-shalm2015-bell-test",
      "source": "phys:shalm2015-response-context",
      "target": "phys:shalm2015-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Timing, outcome-fixation and predictability assumptions condition the local-model rejection.",
      "claimIds": [
        "M-phys-shalm2015-bell-test"
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    },
    {
      "id": "physics:shalm2015-inference-context-shalm2015-bell-test",
      "source": "phys:shalm2015-inference-context",
      "target": "phys:shalm2015-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared memory-robust tail and stopping protocol give the reported nominal and adjusted bounds.",
      "claimIds": [
        "M-phys-shalm2015-bell-test"
      ],
      "contextIds": [
        "shalm2015-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "shalm2015-acquisition",
      "sourceId": "shalm2015-bell",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.115.250402",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "25",
      "pages": "250402",
      "system": "The Shalm Classical XOR3 photonic Bell run",
      "preparation": "Prepare nonmaximally polarization-entangled 1550 nm photon pairs by pulsed downconversion and distribute them to separate Alice/Bob stations. Each local 99.1 kHz trial records a setting and + for a detection in the accepted window or 0 otherwise. Settings combine phase-diffusion, photon-sampling and predetermined pseudorandom bits by XOR. The selected Classical XOR3 run lasted 30 minutes.",
      "observable": "Shalm photonic Bell acquisition",
      "finding": "The selected photonic run and local setting/outcome acquisition.",
      "limitations": [
        "The final run is one of six analyzed configurations over two days; a separate blind run was not analyzed. Pulse groupings reuse the same events and are not independent experiments. This photonic sample is distinct from the Delft spin runs; no joint p-value is formed."
      ],
      "readExtent": "full-publisher-primary-article",
      "reviewedLocators": [
        "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
        "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.115.250402",
      "correctionCheck": "Actual published article and linked supplement read; nominal p-value printing discrepancy retained. No exhaustive correction census or independent calibration/null-test replay."
    },
    {
      "id": "shalm2015-response",
      "sourceId": "shalm2015-bell",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.250402",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "25",
      "pages": "250402",
      "system": "The Shalm Classical XOR3 photonic Bell run",
      "preparation": "Local arrival windows and the timing/calibration model determine the accepted binary outcomes and spacelike-separation claim. Published system efficiencies are 74.7 +/- 0.3% and 75.6 +/- 0.3%; five-pulse timing margin is 38.3 +/- 3.7 ns. The analysis assumes outcomes are fixed at the time taggers and reliable measured positions/delays.",
      "observable": "Shalm detection and timing boundary",
      "finding": "The detection-window, spacetime and RNG interpretation using reported calibrations.",
      "limitations": [
        "No fair-sampling assumption is used to discard nondetections; local trial/window definitions and the complete outcomes remain operative. Spacelike timing does not prove absolute freedom of settings or complete device correctness.",
        "RNG models and post-acquisition synchronization-board tests motivate the conservative epsilon=0.003 bound; output randomness tests do not certify unpredictability. Conditional independence of the two setting choices given the permitted predictability remains an assumption."
      ],
      "readExtent": "full-publisher-primary-article",
      "reviewedLocators": [
        "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
        "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.115.250402",
      "correctionCheck": "Actual published article and linked supplement read; nominal p-value printing discrepancy retained. No exhaustive correction census or independent calibration/null-test replay."
    },
    {
      "id": "shalm2015-inference",
      "sourceId": "shalm2015-bell",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.250402",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "25",
      "pages": "250402",
      "system": "The Shalm Classical XOR3 photonic Bell run",
      "preparation": "Test P(++|ab)<=P(+0|ab')+P(0+|a'b)+P(++|a'b'). The statistic N_S counts ++ab among the first N_chi events in those four settings/outcome classes. A disjoint initial training segment estimates f and fixes N_chi=0.9*r*f for the remaining r trials. Per trial, epsilon bounds each maximum setting probability: max(P(a),P(a')) and max(P(b),P(b'))<=(1+epsilon)/2. Use the reported memory-robust binomial-tail bound, with success bound 1/2 for equiprobable choices or 1/2+epsilon/(1+epsilon^2) for bounded predictability.",
      "observable": "Shalm memory-robust Bell inference",
      "finding": "The chosen local null, training/cut rule and predictability-conditioned tail procedure.",
      "limitations": [
        "The Bell bound allows memory without iid trials. Training is excluded from the tested suffix; later events beyond the relevant-event cut are discarded. Stopping at the most favorable fluctuation would invalidate this procedure.",
        "The main text highlights the most stable, best-aligned run and reports several overlapping pulse groupings. These reported per-analysis values are not a newly established global or multiple-selection-adjusted p-value. The iid-based diagnostic tests are separate."
      ],
      "readExtent": "full-publisher-primary-article",
      "reviewedLocators": [
        "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
        "Publisher pages 250402-6 to 250402-8, Table I and Figures 4-5: selected run, p-values, timing and assumptions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.115.250402",
      "correctionCheck": "Actual published article and linked supplement read; nominal p-value printing discrepancy retained. No exhaustive correction census or independent calibration/null-test replay."
    }
  ],
  "comparisons": [
    {
      "id": "shalm2015-local-null",
      "candidate": "The selected quantum-compatible photonic correlations violate the stated local-model constraint.",
      "alternative": "Local hidden-variable responses with memory, the declared timing boundary and bounded setting predictability.",
      "discriminator": "The specified relevant-event statistic and reported predictability-adjusted p=2.3e-7 for Classical XOR3, pulses 4-8.",
      "result": "specified-alternative-disfavored",
      "limit": "This is a publication-supported, per-analysis null test, not a posterior probability of locality, universal entanglement test, faster-than-light mechanism or combined Delft result.",
      "assumptions": [
        "RNG models and post-acquisition synchronization-board tests motivate the conservative epsilon=0.003 bound; output randomness tests do not certify unpredictability. Conditional independence of the two setting choices given the permitted predictability remains an assumption.",
        "The Bell bound allows memory without iid trials. Training is excluded from the tested suffix; later events beyond the relevant-event cut are discarded. Stopping at the most favorable fluctuation would invalidate this procedure."
      ],
      "sourceIds": [
        "shalm2015-bell",
        "shalm2015-bell-supplement"
      ],
      "claimIds": [
        "C-phys-shalm2015-trial-records",
        "C-phys-shalm2015-bell-test"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:shalm2015-acquisition-context",
      "role": "experimental-context",
      "denotes": "The selected photonic run and local setting/outcome acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-shalm2015-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:shalm2015-response-context",
      "role": "model-context",
      "denotes": "The detection-window, spacetime and RNG interpretation using reported calibrations.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-shalm2015-response-context"
      ]
    },
    {
      "nodeId": "phys:shalm2015-inference-context",
      "role": "model-context",
      "denotes": "The chosen local null, training/cut rule and predictability-conditioned tail procedure.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-shalm2015-inference-context"
      ]
    },
    {
      "nodeId": "phys:shalm2015-trial-records",
      "role": "scoped-phenomenon",
      "denotes": "The published setting/outcome counts after the declared relevant-event stopping selection.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-shalm2015-trial-records"
      ]
    },
    {
      "nodeId": "phys:shalm2015-bell-test",
      "role": "scoped-phenomenon",
      "denotes": "Reported nominal and predictability-adjusted null bounds for one pulse grouping.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-shalm2015-bell-test"
      ]
    }
  ]
};

/** Preserve trial selection, device assumptions and conditional Bell inference. */
export function validateEntanglementBellContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Entanglement-Bell ${kind} changed ${id}: preserve preparation, selection and conditional null`);
    }
  }
}
