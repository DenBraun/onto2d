import assert from "node:assert/strict";

export const WEAK_BOSON_CHECKS = new Map();
export const WEAK_BOSON_ANALYTICAL_SOURCES = new Map();
export const WEAK_BOSON_ADMISSION = {
  "definitions": [
    [
      "phys:transverse-two-body-mass",
      "D-phys-transverse-two-body-mass"
    ],
    [
      "phys:dilepton-invariant-mass",
      "D-phys-dilepton-invariant-mass"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-transverse-two-body-mass",
      [
        "phys:lepton-fields",
        "phys:transverse-two-body-mass"
      ]
    ],
    [
      "physics:lepton-fields-dilepton-invariant-mass",
      [
        "phys:lepton-fields",
        "phys:dilepton-invariant-mass"
      ]
    ]
  ],
  "contexts": [
    [
      "ua1-1983-w-acquisition-context",
      "M-phys-ua1-1983-w-acquisition-context",
      [
        "ua1-1983-w-acquisition"
      ]
    ],
    [
      "ua1-1983-w-response-context",
      "M-phys-ua1-1983-w-response-context",
      [
        "ua1-1983-w-response"
      ]
    ],
    [
      "ua1-1983-w-inference-context",
      "M-phys-ua1-1983-w-inference-context",
      [
        "ua1-1983-w-inference"
      ]
    ],
    [
      "ua1-1983-z-acquisition-context",
      "M-phys-ua1-1983-z-acquisition-context",
      [
        "ua1-1983-z-acquisition"
      ]
    ],
    [
      "ua1-1983-z-response-context",
      "M-phys-ua1-1983-z-response-context",
      [
        "ua1-1983-z-response"
      ]
    ],
    [
      "ua1-1983-z-inference-context",
      "M-phys-ua1-1983-z-inference-context",
      [
        "ua1-1983-z-inference"
      ]
    ]
  ],
  "observations": [
    [
      "ua1-1983-w-electron-candidates",
      "C-phys-ua1-1983-w-electron-candidates",
      [
        "ua1-1983-w-acquisition"
      ]
    ],
    [
      "ua1-1983-w-selection-comparison",
      "C-phys-ua1-1983-w-selection-comparison",
      [
        "ua1-1983-w-response"
      ]
    ],
    [
      "ua1-1983-w-transverse-kinematics",
      "C-phys-ua1-1983-w-transverse-kinematics",
      [
        "ua1-1983-w-response"
      ]
    ],
    [
      "ua1-1983-w-mass-bound",
      "C-phys-ua1-1983-w-mass-bound",
      [
        "ua1-1983-w-inference"
      ]
    ],
    [
      "ua1-1983-w-mass-fit",
      "C-phys-ua1-1983-w-mass-fit",
      [
        "ua1-1983-w-inference"
      ]
    ],
    [
      "ua1-1983-z-pair-candidates",
      "C-phys-ua1-1983-z-pair-candidates",
      [
        "ua1-1983-z-acquisition"
      ]
    ],
    [
      "ua1-1983-z-electron-mass",
      "C-phys-ua1-1983-z-electron-mass",
      [
        "ua1-1983-z-inference"
      ]
    ],
    [
      "ua1-1983-z-dimuon-mass",
      "C-phys-ua1-1983-z-dimuon-mass",
      [
        "ua1-1983-z-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "ua1-1983-w-acquisition-context-ua1-1983-w-electron-candidates",
      "ua1-1983-w-acquisition-context",
      "ua1-1983-w-electron-candidates",
      "M-phys-ua1-1983-w-electron-candidates",
      "measurement-context"
    ],
    [
      "ua1-1983-w-response-context-ua1-1983-w-electron-candidates",
      "ua1-1983-w-response-context",
      "ua1-1983-w-electron-candidates",
      "M-phys-ua1-1983-w-electron-candidates",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-acquisition-context-ua1-1983-z-pair-candidates",
      "ua1-1983-z-acquisition-context",
      "ua1-1983-z-pair-candidates",
      "M-phys-ua1-1983-z-pair-candidates",
      "measurement-context"
    ],
    [
      "ua1-1983-z-response-context-ua1-1983-z-pair-candidates",
      "ua1-1983-z-response-context",
      "ua1-1983-z-pair-candidates",
      "M-phys-ua1-1983-z-pair-candidates",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-acquisition-context-ua1-1983-w-selection-comparison",
      "ua1-1983-w-acquisition-context",
      "ua1-1983-w-selection-comparison",
      "M-phys-ua1-1983-w-selection-comparison",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-response-context-ua1-1983-w-selection-comparison",
      "ua1-1983-w-response-context",
      "ua1-1983-w-selection-comparison",
      "M-phys-ua1-1983-w-selection-comparison",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-electron-candidates-ua1-1983-w-selection-comparison",
      "ua1-1983-w-electron-candidates",
      "ua1-1983-w-selection-comparison",
      "M-phys-ua1-1983-w-selection-comparison",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-electron-candidates-ua1-1983-w-transverse-kinematics",
      "ua1-1983-w-electron-candidates",
      "ua1-1983-w-transverse-kinematics",
      "M-phys-ua1-1983-w-transverse-kinematics",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-response-context-ua1-1983-w-transverse-kinematics",
      "ua1-1983-w-response-context",
      "ua1-1983-w-transverse-kinematics",
      "M-phys-ua1-1983-w-transverse-kinematics",
      "interpretation-dependency"
    ],
    [
      "transverse-two-body-mass-ua1-1983-w-transverse-kinematics",
      "transverse-two-body-mass",
      "ua1-1983-w-transverse-kinematics",
      "M-phys-ua1-1983-w-transverse-kinematics",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-transverse-kinematics-ua1-1983-w-mass-bound",
      "ua1-1983-w-transverse-kinematics",
      "ua1-1983-w-mass-bound",
      "M-phys-ua1-1983-w-mass-bound",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-response-context-ua1-1983-w-mass-bound",
      "ua1-1983-w-response-context",
      "ua1-1983-w-mass-bound",
      "M-phys-ua1-1983-w-mass-bound",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-inference-context-ua1-1983-w-mass-bound",
      "ua1-1983-w-inference-context",
      "ua1-1983-w-mass-bound",
      "M-phys-ua1-1983-w-mass-bound",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-electron-candidates-ua1-1983-w-mass-fit",
      "ua1-1983-w-electron-candidates",
      "ua1-1983-w-mass-fit",
      "M-phys-ua1-1983-w-mass-fit",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-transverse-kinematics-ua1-1983-w-mass-fit",
      "ua1-1983-w-transverse-kinematics",
      "ua1-1983-w-mass-fit",
      "M-phys-ua1-1983-w-mass-fit",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-response-context-ua1-1983-w-mass-fit",
      "ua1-1983-w-response-context",
      "ua1-1983-w-mass-fit",
      "M-phys-ua1-1983-w-mass-fit",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-inference-context-ua1-1983-w-mass-fit",
      "ua1-1983-w-inference-context",
      "ua1-1983-w-mass-fit",
      "M-phys-ua1-1983-w-mass-fit",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-pair-candidates-ua1-1983-z-electron-mass",
      "ua1-1983-z-pair-candidates",
      "ua1-1983-z-electron-mass",
      "M-phys-ua1-1983-z-electron-mass",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-response-context-ua1-1983-z-electron-mass",
      "ua1-1983-z-response-context",
      "ua1-1983-z-electron-mass",
      "M-phys-ua1-1983-z-electron-mass",
      "interpretation-dependency"
    ],
    [
      "dilepton-invariant-mass-ua1-1983-z-electron-mass",
      "dilepton-invariant-mass",
      "ua1-1983-z-electron-mass",
      "M-phys-ua1-1983-z-electron-mass",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-inference-context-ua1-1983-z-electron-mass",
      "ua1-1983-z-inference-context",
      "ua1-1983-z-electron-mass",
      "M-phys-ua1-1983-z-electron-mass",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-pair-candidates-ua1-1983-z-dimuon-mass",
      "ua1-1983-z-pair-candidates",
      "ua1-1983-z-dimuon-mass",
      "M-phys-ua1-1983-z-dimuon-mass",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-response-context-ua1-1983-z-dimuon-mass",
      "ua1-1983-z-response-context",
      "ua1-1983-z-dimuon-mass",
      "M-phys-ua1-1983-z-dimuon-mass",
      "interpretation-dependency"
    ],
    [
      "dilepton-invariant-mass-ua1-1983-z-dimuon-mass",
      "dilepton-invariant-mass",
      "ua1-1983-z-dimuon-mass",
      "M-phys-ua1-1983-z-dimuon-mass",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-inference-context-ua1-1983-z-dimuon-mass",
      "ua1-1983-z-inference-context",
      "ua1-1983-z-dimuon-mass",
      "M-phys-ua1-1983-z-dimuon-mass",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "ua1-1983-w-acquisition",
    "ua1-1983-w-response",
    "ua1-1983-w-inference",
    "ua1-1983-z-acquisition",
    "ua1-1983-z-response",
    "ua1-1983-z-inference"
  ],
  "comparisonIds": [
    "ua1-1983-w-dependent-selections",
    "ua1-1983-w-mass-methods",
    "ua1-1983-z-channel-interpretation",
    "ua1-1983-z-scale-and-width-boundary"
  ],
  "inferenceSources": [
    [
      "M-phys-ua1-1983-w-acquisition-context",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-response-context",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-inference-context",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-w-electron-candidates",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-w-selection-comparison",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-w-transverse-kinematics",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-w-mass-bound",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-w-mass-fit",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-acquisition-context",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-response-context",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-inference-context",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-z-pair-candidates",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-z-electron-mass",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "C-phys-ua1-1983-z-dimuon-mass",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-electron-candidates",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-selection-comparison",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-transverse-kinematics",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-mass-bound",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-w-mass-fit",
      [
        "ua1-1983-w-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-pair-candidates",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-electron-mass",
      [
        "ua1-1983-z-discovery"
      ]
    ],
    [
      "M-phys-ua1-1983-z-dimuon-mass",
      [
        "ua1-1983-z-discovery"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "ua1-1983-w-discovery",
      "kind": "research-publication",
      "title": "Experimental observation of isolated large transverse energy electrons with associated missing energy at sqrt(s) = 540 GeV",
      "authors": [
        "UA1 Collaboration"
      ],
      "year": 1983,
      "doi": "10.1016/0370-2693(83)91177-2",
      "url": "https://inspirehep.net/files/b880034df24f26135095e7118d8a0893",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "primary-preprint-sections-and-selected-tables",
        "locators": [
          "CERN-EP/83-13, Sections 2 and 5, printed pages 1-5 (PDF pages 3-7): detector, 1982 acquisition, exposure, trigger and reconstructed selection",
          "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        ],
        "limit": "Read the CERN-EP/83-13 author preprint dated 21 January 1983, a 33-PDF-page scan: cover, abstract, Sections 1-10, references and footnotes, Table 1 in OCR, Tables 2-3 visually and all figure captions. Visually checked PDF pages 1, 12, 17-18 and 31-33 (Figures 8-10). Figures 1-7 were not individually inspected. This is not the publisher typeset article, published 24 February 1983; the CERN catalog also groups conference versions not reviewed here. The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      }
    },
    {
      "id": "ua1-1983-z-discovery",
      "kind": "research-publication",
      "title": "Experimental observation of lepton pairs of invariant mass around 95 GeV/c^2 at the CERN SPS collider",
      "authors": [
        "UA1 Collaboration"
      ],
      "year": 1983,
      "doi": "10.1016/0370-2693(83)90188-0",
      "url": "https://inspirehep.net/files/c15afcc500d8e6247336d2e5598db78f",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "primary-preprint-sections-and-selected-tables",
        "locators": [
          "CERN-EP/83-73, Sections 1-3, printed pages 1-5 (PDF pages 5-9): four-week April-May 1983 acquisition, exposure, trigger and express-line selections",
          "CERN-EP/83-73, Section 2 and Sections 4-6, printed pages 2-8 (PDF pages 6-12); notes 9 and 11-15, printed pages 13-15 (PDF pages 17-19): calibration, tracking, lepton identification, radiation and backgrounds",
          "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon",
          "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        ],
        "limit": "Read the CERN-EP/83-73 author preprint dated 3 June 1983, a 36-PDF-page scan: cover, abstract, Sections 1-7, references and footnotes, Tables 1-3 and all figure captions. Visually checked PDF pages 1, 9-11, 13, 21-23, 26 and 35-36 (Tables 1-3 and Figures 1, 8-9). Other figure panels were not individually inspected. This is not the publisher typeset article, published 7 July 1983. The reviewed preprint prints the electron event D run as 7739 in Table 1 and 7339 in Table 3, both with event 1279. Run identifiers are not imported or silently repaired; the admitted count and mass summaries do not choose between those spellings. The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-transverse-two-body-mass",
      "kind": "review-finding",
      "statement": "For two effectively massless physical daughter four-momenta from a two-body decay, define mT^2 = 2 pT1 pT2 (1-cos(deltaPhi)); the exact parent invariant mass then obeys M >= mT. Replacing these quantities by reconstructed electron and missing transverse vectors defines an estimator under a single-invisible-daughter assignment. Response errors can make that estimator exceed the true mass, so the exact inequality is not an eventwise detector guarantee. The transverse recoil is the magnitude of the daughter transverse-vector sum; mT is not a fully reconstructed invariant mass.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W.",
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified."
      ]
    },
    {
      "id": "D-phys-dilepton-invariant-mass",
      "kind": "review-finding",
      "statement": "Define the pair invariant mass by Mll^2 = (p_lplus+p_lminus)^2 for the assigned reconstructed lepton four-momenta, in c=1 units and the (+,-,-,-) metric. In the negligible daughter-mass limit this becomes 2 E1 E2 (1-cos(theta12)), where theta12 is the full three-dimensional opening angle. Detector calibration and any response or recoil constraint used to infer the four-momenta remain inputs.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W.",
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally."
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-acquisition-context",
      "kind": "method",
      "statement": "Use the 30-day November-December 1982 proton-antiproton run at sqrt(s)=540 GeV. The reported exposure is 18 nb^-1 after dead-time and instrumental corrections. Preserve the trigger and offline reconstruction stages preceding the electron and missing-energy searches.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2 and 5, printed pages 1-5 (PDF pages 3-7): detector, 1982 acquisition, exposure, trigger and reconstructed selection",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "contextIds": [
        "ua1-1983-w-acquisition"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-response-context",
      "kind": "method",
      "statement": "Use central tracking, electromagnetic shower shape, hadronic leakage, energy/momentum agreement and the described isolation and jet criteria to select electron candidates. Reconstruct transverse energy imbalance with the calorimeter and use muon/response checks and the reported background controls; preserve the distinct central-gondola and endcap responses.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-inference-context",
      "kind": "method",
      "statement": "Keep the source transverse lower-limit construction separate from mass fitting under W decay kinematics and standard V-A couplings. The chosen fit corrects the transverse W motion event by event and uses Drell-Yan predictions without additional smearing; the full-QCD-smearing spectrum fit is a same-data alternative. Retain the final five-central-event restriction.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "The historical predicted mass and rate are comparisons using adopted electroweak parameters, efficiencies and production inputs. Agreement is not a direct determination of the scalar vacuum, a unique Higgs-mechanism test, or an independent absolute cross-section measurement.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "C-phys-ua1-1983-w-electron-candidates",
      "kind": "review-finding",
      "statement": "The report displays six electron candidates A-F: five central-gondola events and endcap event B, with high transverse electron energy and associated imbalance. It restricts the final analysis to the five central events because B has possible asymmetric conversion and opposite muon activity. The separately labeled tau candidate is not another admitted electron-neutrino event.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance.",
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics."
      ],
      "contextIds": [
        "ua1-1983-w-acquisition"
      ]
    },
    {
      "id": "C-phys-ua1-1983-w-selection-comparison",
      "kind": "review-finding",
      "statement": "The electron-first and missing-energy-first searches recover the same five central electron candidates. The missing-energy search also retains two events removed by the electron energy/momentum match, which the report discusses as compatible with tau hypotheses. Their appearance is not an independent replicated W sample or a confirmed tau-decay measurement.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance."
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "C-phys-ua1-1983-w-transverse-kinematics",
      "kind": "review-finding",
      "statement": "Table 3 gives derived transverse mass and transverse recoil summaries for all six displayed A-F electron candidates from their reconstructed electron and missing-energy vectors. These event quantities provide inputs to the interpretation; the endcap candidate remains displayed despite its exclusion from the final central-event analysis.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W."
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "C-phys-ua1-1983-w-mass-bound",
      "kind": "review-finding",
      "statement": "Under the stated event interpretation and source confidence construction, UA1 reports mW > 73 GeV/c^2 at 90 percent confidence level from the transverse-mass lower-bound method.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified."
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "C-phys-ua1-1983-w-mass-fit",
      "kind": "review-finding",
      "statement": "The chosen event-by-event transverse-motion correction and unsmeared Drell-Yan fit reports mW = 81 +/- 5 GeV/c^2 with allowance for systematic errors. The same report obtains 74 +/- 4 GeV/c^2 from the electron spectrum with full QCD smearing; this alternative exposes production/recoil-model dependence rather than a second independent mass measurement.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The historical predicted mass and rate are comparisons using adopted electroweak parameters, efficiencies and production inputs. Agreement is not a direct determination of the scalar vacuum, a unique Higgs-mechanism test, or an independent absolute cross-section measurement.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-acquisition-context",
      "kind": "method",
      "statement": "Use the four-week April-May 1983 proton-antiproton acquisition at sqrt(s)=540 GeV, with reported corrected exposure 55 nb^-1. Retain the electron, muon, jet and total-transverse-energy triggers and the express-line/offline selection used for the dilepton search.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 1-3, printed pages 1-5 (PDF pages 5-9): four-week April-May 1983 acquisition, exposure, trigger and express-line selections",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here.",
        "The four electron pairs and single dimuon are selected, reconstructed candidates, not raw trigger counts or stable objects tracked as Z bosons. Figure 1 displays nested cuts on one electron sample; its stages are not independent acquisitions. A jet veto from the W search must not be imposed on Z events: the dimuon and electron event B have visible jet structure.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "contextIds": [
        "ua1-1983-z-acquisition"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-response-context",
      "kind": "method",
      "statement": "Adopt the central track, electromagnetic shower and penetrating-muon response, test-beam and source calibration, cosmic-muon alignment checks and background estimates described in the report. Preserve electron radiation and geometric response limitations, the unfinished electromagnetic energy calibration and the different magnetic/recoil inputs used for the dimuon.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 2 and Sections 4-6, printed pages 2-8 (PDF pages 6-12); notes 9 and 11-15, printed pages 13-15 (PDF pages 17-19): calibration, tracking, lepton identification, radiation and backgrounds",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electron and muon channels have distinct response and calibration procedures. Cosmic-ray muons, test beams, source scans, detector events and simulated backgrounds are auxiliary inputs, not extra Z signal events. The hard-radiation interpretation of one electron track is not a new measured radiation probability.",
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "contextIds": [
        "ua1-1983-z-response"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-inference-context",
      "kind": "method",
      "statement": "Interpret the selected lepton pairs using the reported invariant-mass reconstruction and background evaluation. Combine the four electron-pair mass determinations as reported; for the dimuon retain the weighted magnetic and transverse-balance momenta conditional on no neutrino. Compare the topology and mass concentration with neutral-boson decay without treating peak spread as an intrinsic width measurement.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "C-phys-ua1-1983-z-pair-candidates",
      "kind": "review-finding",
      "statement": "The stated selection yields four electron-pair candidates and one dimuon candidate. Figure 1 shows nested electron selection stages with 152, 6 and 4 events; the dimuon analysis scans 42 events after its offline requirements to identify the single candidate. These are separate channel selections within one acquisition, not five directly observed stable Z objects.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four electron pairs and single dimuon are selected, reconstructed candidates, not raw trigger counts or stable objects tracked as Z bosons. Figure 1 displays nested cuts on one electron sample; its stages are not independent acquisitions. A jet veto from the W search must not be imposed on Z events: the dimuon and electron event B have visible jet structure.",
        "The electron and muon channels have distinct response and calibration procedures. Cosmic-ray muons, test beams, source scans, detector events and simulated backgrounds are auxiliary inputs, not extra Z signal events. The hard-radiation interpretation of one electron track is not a new measured radiation probability.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "contextIds": [
        "ua1-1983-z-acquisition"
      ]
    },
    {
      "id": "C-phys-ua1-1983-z-electron-mass",
      "kind": "review-finding",
      "statement": "The report combines its four electron-pair masses to give 95.2 +/- 2.5 GeV/c^2 and adopts that value in its neutral-boson interpretation. The result is retained with the source preliminary-calibration and uncorrected-radiation conventions; the number is not recomputed from rounded table centers.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "C-phys-ua1-1983-z-dimuon-mass",
      "kind": "review-finding",
      "statement": "For the one dimuon candidate, Section 5 reports a mass of 95.5 +/- 7.3 GeV/c^2. The source combines magnetic-deflection momenta with a solution using measured muon directions and calorimetric recoil under the no-neutrino assumption, as distinguished in Table 2.",
      "scope": "The declared kinematic convention or historical UA1 W/Z acquisition and original inference under its stated detector, selection and model assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "supports",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-electron-candidates",
      "kind": "method",
      "statement": "Apply the calibrated track, shower, imbalance and event-quality criteria to the declared acquisition; preserve the six displayed candidates and five-event final subset.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance.",
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics."
      ],
      "contextIds": [
        "ua1-1983-w-acquisition"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-selection-comparison",
      "kind": "method",
      "statement": "Compare the two reported selection paths on their shared data and response conditions; overlapping candidates must not become independent confirmations.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance."
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-transverse-kinematics",
      "kind": "method",
      "statement": "Use the selected reconstructed vectors and declared transverse convention to interpret the source-computed event summaries; do not infer the missing longitudinal momentum.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W."
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-mass-bound",
      "kind": "method",
      "statement": "Interpret the reported transverse lower limit using the source event assignment, subset, response and confidence procedure; no local confidence reconstruction is supplied.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified."
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "M-phys-ua1-1983-w-mass-fit",
      "kind": "method",
      "statement": "Use the same selected candidates, reconstructed kinematics and calibrated response under the declared original recoil/production fit; preserve the dependent alternative and systematic limitation.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The historical predicted mass and rate are comparisons using adopted electroweak parameters, efficiencies and production inputs. Agreement is not a direct determination of the scalar vacuum, a unique Higgs-mechanism test, or an independent absolute cross-section measurement.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-pair-candidates",
      "kind": "method",
      "statement": "Apply the distinct calibrated electron and muon selections to the 1983 acquisition; retain common data ownership, nested cuts and the candidate role.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four electron pairs and single dimuon are selected, reconstructed candidates, not raw trigger counts or stable objects tracked as Z bosons. Figure 1 displays nested cuts on one electron sample; its stages are not independent acquisitions. A jet veto from the W search must not be imposed on Z events: the dimuon and electron event B have visible jet structure.",
        "The electron and muon channels have distinct response and calibration procedures. Cosmic-ray muons, test beams, source scans, detector events and simulated backgrounds are auxiliary inputs, not extra Z signal events. The hard-radiation interpretation of one electron track is not a new measured radiation probability.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "contextIds": [
        "ua1-1983-z-acquisition"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-electron-mass",
      "kind": "method",
      "statement": "Use the electron subset of the selected pairs, the response and declared invariant-mass convention within the original interpretation; preserve the reported combination and shared calibration limitation.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "M-phys-ua1-1983-z-dimuon-mass",
      "kind": "method",
      "statement": "Use the selected dimuon, calibrated detector response and invariant-mass convention with the original conditional recoil/magnetic inference; a no-neutrino constraint is an input, not another observation.",
      "scope": "The declared historical UA1 reconstruction or inference stage with explicit data and response prerequisites.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "method",
          "note": "Supports the declared primary-source reconstruction or inference scope; no experimental or likelihood replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:transverse-two-body-mass",
      "name": "Conditional transverse two-body mass",
      "kind": "definition",
      "description": "For two effectively massless physical daughter four-momenta from a two-body decay, define mT^2 = 2 pT1 pT2 (1-cos(deltaPhi)); the exact parent invariant mass then obeys M >= mT. Replacing these quantities by reconstructed electron and missing transverse vectors defines an estimator under a single-invisible-daughter assignment. Response errors can make that estimator exceed the true mass, so the exact inequality is not an eventwise detector guarantee. The transverse recoil is the magnitude of the daughter transverse-vector sum; mT is not a fully reconstructed invariant mass.",
      "claimIds": [
        "D-phys-transverse-two-body-mass"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        }
      ],
      "openObligations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W."
      ]
    },
    {
      "id": "phys:dilepton-invariant-mass",
      "name": "Reconstructed dilepton invariant mass",
      "kind": "definition",
      "description": "Define the pair invariant mass by Mll^2 = (p_lplus+p_lminus)^2 for the assigned reconstructed lepton four-momenta, in c=1 units and the (+,-,-,-) metric. In the negligible daughter-mass limit this becomes 2 E1 E2 (1-cos(theta12)), where theta12 is the full three-dimensional opening angle. Detector calibration and any response or recoil constraint used to infer the four-momenta remain inputs.",
      "claimIds": [
        "D-phys-dilepton-invariant-mass"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
        }
      ],
      "openObligations": [
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W."
      ]
    },
    {
      "id": "phys:ua1-1983-w-acquisition-context",
      "name": "UA1 1982 charged-boson search acquisition",
      "kind": "context",
      "description": "Use the 30-day November-December 1982 proton-antiproton run at sqrt(s)=540 GeV. The reported exposure is 18 nb^-1 after dead-time and instrumental corrections. Preserve the trigger and offline reconstruction stages preceding the electron and missing-energy searches.",
      "claimIds": [
        "M-phys-ua1-1983-w-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2 and 5, printed pages 1-5 (PDF pages 3-7): detector, 1982 acquisition, exposure, trigger and reconstructed selection"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-response-context",
      "name": "UA1 W response and selection conditions",
      "kind": "context",
      "description": "Use central tracking, electromagnetic shower shape, hadronic leakage, energy/momentum agreement and the described isolation and jet criteria to select electron candidates. Reconstruct transverse energy imbalance with the calorimeter and use muon/response checks and the reported background controls; preserve the distinct central-gondola and endcap responses.",
      "claimIds": [
        "M-phys-ua1-1983-w-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-inference-context",
      "name": "UA1 conditional W mass interpretation",
      "kind": "context",
      "description": "Keep the source transverse lower-limit construction separate from mass fitting under W decay kinematics and standard V-A couplings. The chosen fit corrects the transverse W motion event by event and uses Drell-Yan predictions without additional smearing; the full-QCD-smearing spectrum fit is a same-data alternative. Retain the final five-central-event restriction.",
      "claimIds": [
        "M-phys-ua1-1983-w-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-electron-candidates",
      "name": "UA1 selected electron and missing-energy candidates",
      "kind": "scoped-process",
      "description": "The report displays six electron candidates A-F: five central-gondola events and endcap event B, with high transverse electron energy and associated imbalance. It restricts the final analysis to the five central events because B has possible asymmetric conversion and opposite muon activity. The separately labeled tau candidate is not another admitted electron-neutrino event.",
      "claimIds": [
        "C-phys-ua1-1983-w-electron-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-selection-comparison",
      "name": "UA1 overlapping search selections",
      "kind": "scoped-process",
      "description": "The electron-first and missing-energy-first searches recover the same five central electron candidates. The missing-energy search also retains two events removed by the electron energy/momentum match, which the report discusses as compatible with tau hypotheses. Their appearance is not an independent replicated W sample or a confirmed tau-decay measurement.",
      "claimIds": [
        "C-phys-ua1-1983-w-selection-comparison"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-transverse-kinematics",
      "name": "UA1 derived transverse event quantities",
      "kind": "scoped-process",
      "description": "Table 3 gives derived transverse mass and transverse recoil summaries for all six displayed A-F electron candidates from their reconstructed electron and missing-energy vectors. These event quantities provide inputs to the interpretation; the endcap candidate remains displayed despite its exclusion from the final central-event analysis.",
      "claimIds": [
        "C-phys-ua1-1983-w-transverse-kinematics"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-mass-bound",
      "name": "UA1 reported W transverse lower limit",
      "kind": "scoped-process",
      "description": "Under the stated event interpretation and source confidence construction, UA1 reports mW > 73 GeV/c^2 at 90 percent confidence level from the transverse-mass lower-bound method.",
      "claimIds": [
        "C-phys-ua1-1983-w-mass-bound"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-w-mass-fit",
      "name": "UA1 historical conditional W mass fit",
      "kind": "scoped-process",
      "description": "The chosen event-by-event transverse-motion correction and unsmeared Drell-Yan fit reports mW = 81 +/- 5 GeV/c^2 with allowance for systematic errors. The same report obtains 74 +/- 4 GeV/c^2 from the electron spectrum with full QCD smearing; this alternative exposes production/recoil-model dependence rather than a second independent mass measurement.",
      "claimIds": [
        "C-phys-ua1-1983-w-mass-fit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-acquisition-context",
      "name": "UA1 1983 neutral-boson search acquisition",
      "kind": "context",
      "description": "Use the four-week April-May 1983 proton-antiproton acquisition at sqrt(s)=540 GeV, with reported corrected exposure 55 nb^-1. Retain the electron, muon, jet and total-transverse-energy triggers and the express-line/offline selection used for the dilepton search.",
      "claimIds": [
        "M-phys-ua1-1983-z-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 1-3, printed pages 1-5 (PDF pages 5-9): four-week April-May 1983 acquisition, exposure, trigger and express-line selections"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-response-context",
      "name": "UA1 dilepton response and calibration",
      "kind": "context",
      "description": "Adopt the central track, electromagnetic shower and penetrating-muon response, test-beam and source calibration, cosmic-muon alignment checks and background estimates described in the report. Preserve electron radiation and geometric response limitations, the unfinished electromagnetic energy calibration and the different magnetic/recoil inputs used for the dimuon.",
      "claimIds": [
        "M-phys-ua1-1983-z-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 2 and Sections 4-6, printed pages 2-8 (PDF pages 6-12); notes 9 and 11-15, printed pages 13-15 (PDF pages 17-19): calibration, tracking, lepton identification, radiation and backgrounds"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-inference-context",
      "name": "UA1 original dilepton mass interpretation",
      "kind": "context",
      "description": "Interpret the selected lepton pairs using the reported invariant-mass reconstruction and background evaluation. Combine the four electron-pair mass determinations as reported; for the dimuon retain the weighted magnetic and transverse-balance momenta conditional on no neutrino. Compare the topology and mass concentration with neutral-boson decay without treating peak spread as an intrinsic width measurement.",
      "claimIds": [
        "M-phys-ua1-1983-z-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-pair-candidates",
      "name": "UA1 selected electron and muon pairs",
      "kind": "scoped-process",
      "description": "The stated selection yields four electron-pair candidates and one dimuon candidate. Figure 1 shows nested electron selection stages with 152, 6 and 4 events; the dimuon analysis scans 42 events after its offline requirements to identify the single candidate. These are separate channel selections within one acquisition, not five directly observed stable Z objects.",
      "claimIds": [
        "C-phys-ua1-1983-z-pair-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-electron-mass",
      "name": "UA1 historical electron-pair Z mass summary",
      "kind": "scoped-process",
      "description": "The report combines its four electron-pair masses to give 95.2 +/- 2.5 GeV/c^2 and adopts that value in its neutral-boson interpretation. The result is retained with the source preliminary-calibration and uncorrected-radiation conventions; the number is not recomputed from rounded table centers.",
      "claimIds": [
        "C-phys-ua1-1983-z-electron-mass"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    },
    {
      "id": "phys:ua1-1983-z-dimuon-mass",
      "name": "UA1 constrained dimuon mass summary",
      "kind": "scoped-process",
      "description": "For the one dimuon candidate, Section 5 reports a mass of 95.5 +/- 7.3 GeV/c^2. The source combines magnetic-deflection momenta with a solution using measured muon directions and calorimetric recoil under the no-neutrino assumption, as distinguished in Table 2.",
      "claimIds": [
        "C-phys-ua1-1983-z-dimuon-mass"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        }
      ],
      "openObligations": [
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-transverse-two-body-mass",
      "source": "phys:lepton-fields",
      "target": "phys:transverse-two-body-mass",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Apply this explicitly declared mass convention to the classified lepton final states; it does not derive their detector identity or require a scalar-vacuum measurement.",
      "claimIds": [
        "D-phys-transverse-two-body-mass"
      ]
    },
    {
      "id": "physics:lepton-fields-dilepton-invariant-mass",
      "source": "phys:lepton-fields",
      "target": "phys:dilepton-invariant-mass",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Apply this explicitly declared mass convention to the classified lepton final states; it does not derive their detector identity or require a scalar-vacuum measurement.",
      "claimIds": [
        "D-phys-dilepton-invariant-mass"
      ]
    },
    {
      "id": "physics:ua1-1983-w-acquisition-context-ua1-1983-w-electron-candidates",
      "source": "phys:ua1-1983-w-acquisition-context",
      "target": "phys:ua1-1983-w-electron-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared collider acquisition supplies the selected candidate sample.",
      "claimIds": [
        "M-phys-ua1-1983-w-electron-candidates"
      ],
      "contextIds": [
        "ua1-1983-w-acquisition"
      ]
    },
    {
      "id": "physics:ua1-1983-w-response-context-ua1-1983-w-electron-candidates",
      "source": "phys:ua1-1983-w-response-context",
      "target": "phys:ua1-1983-w-electron-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibrated reconstruction, identification and event selection determine which detector readouts enter the candidate sample.",
      "claimIds": [
        "M-phys-ua1-1983-w-electron-candidates"
      ],
      "contextIds": [
        "ua1-1983-w-acquisition"
      ]
    },
    {
      "id": "physics:ua1-1983-z-acquisition-context-ua1-1983-z-pair-candidates",
      "source": "phys:ua1-1983-z-acquisition-context",
      "target": "phys:ua1-1983-z-pair-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared collider acquisition supplies the selected candidate sample.",
      "claimIds": [
        "M-phys-ua1-1983-z-pair-candidates"
      ],
      "contextIds": [
        "ua1-1983-z-acquisition"
      ]
    },
    {
      "id": "physics:ua1-1983-z-response-context-ua1-1983-z-pair-candidates",
      "source": "phys:ua1-1983-z-response-context",
      "target": "phys:ua1-1983-z-pair-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibrated reconstruction, identification and event selection determine which detector readouts enter the candidate sample.",
      "claimIds": [
        "M-phys-ua1-1983-z-pair-candidates"
      ],
      "contextIds": [
        "ua1-1983-z-acquisition"
      ]
    },
    {
      "id": "physics:ua1-1983-w-acquisition-context-ua1-1983-w-selection-comparison",
      "source": "phys:ua1-1983-w-acquisition-context",
      "target": "phys:ua1-1983-w-selection-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Retain the common acquisition, response and candidate ownership when comparing the two overlapping selection paths.",
      "claimIds": [
        "M-phys-ua1-1983-w-selection-comparison"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:ua1-1983-w-response-context-ua1-1983-w-selection-comparison",
      "source": "phys:ua1-1983-w-response-context",
      "target": "phys:ua1-1983-w-selection-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Retain the common acquisition, response and candidate ownership when comparing the two overlapping selection paths.",
      "claimIds": [
        "M-phys-ua1-1983-w-selection-comparison"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:ua1-1983-w-electron-candidates-ua1-1983-w-selection-comparison",
      "source": "phys:ua1-1983-w-electron-candidates",
      "target": "phys:ua1-1983-w-selection-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Retain the common acquisition, response and candidate ownership when comparing the two overlapping selection paths.",
      "claimIds": [
        "M-phys-ua1-1983-w-selection-comparison"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:ua1-1983-w-electron-candidates-ua1-1983-w-transverse-kinematics",
      "source": "phys:ua1-1983-w-electron-candidates",
      "target": "phys:ua1-1983-w-transverse-kinematics",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source event kinematics depend on selected reconstructed vectors, detector response and the declared transverse-mass convention.",
      "claimIds": [
        "M-phys-ua1-1983-w-transverse-kinematics"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:ua1-1983-w-response-context-ua1-1983-w-transverse-kinematics",
      "source": "phys:ua1-1983-w-response-context",
      "target": "phys:ua1-1983-w-transverse-kinematics",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source event kinematics depend on selected reconstructed vectors, detector response and the declared transverse-mass convention.",
      "claimIds": [
        "M-phys-ua1-1983-w-transverse-kinematics"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:transverse-two-body-mass-ua1-1983-w-transverse-kinematics",
      "source": "phys:transverse-two-body-mass",
      "target": "phys:ua1-1983-w-transverse-kinematics",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source event kinematics depend on selected reconstructed vectors, detector response and the declared transverse-mass convention.",
      "claimIds": [
        "M-phys-ua1-1983-w-transverse-kinematics"
      ],
      "contextIds": [
        "ua1-1983-w-response"
      ]
    },
    {
      "id": "physics:ua1-1983-w-transverse-kinematics-ua1-1983-w-mass-bound",
      "source": "phys:ua1-1983-w-transverse-kinematics",
      "target": "phys:ua1-1983-w-mass-bound",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported confidence bound uses the transverse interpretation, response and original inference procedure; it is not a locally checked confidence result.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-bound"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-response-context-ua1-1983-w-mass-bound",
      "source": "phys:ua1-1983-w-response-context",
      "target": "phys:ua1-1983-w-mass-bound",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported confidence bound uses the transverse interpretation, response and original inference procedure; it is not a locally checked confidence result.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-bound"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-inference-context-ua1-1983-w-mass-bound",
      "source": "phys:ua1-1983-w-inference-context",
      "target": "phys:ua1-1983-w-mass-bound",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported confidence bound uses the transverse interpretation, response and original inference procedure; it is not a locally checked confidence result.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-bound"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-electron-candidates-ua1-1983-w-mass-fit",
      "source": "phys:ua1-1983-w-electron-candidates",
      "target": "phys:ua1-1983-w-mass-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The chosen mass fit uses these selected-data, kinematic, calibration and model inputs; alternate recoil treatments reuse the same events.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-fit"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-transverse-kinematics-ua1-1983-w-mass-fit",
      "source": "phys:ua1-1983-w-transverse-kinematics",
      "target": "phys:ua1-1983-w-mass-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The chosen mass fit uses these selected-data, kinematic, calibration and model inputs; alternate recoil treatments reuse the same events.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-fit"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-response-context-ua1-1983-w-mass-fit",
      "source": "phys:ua1-1983-w-response-context",
      "target": "phys:ua1-1983-w-mass-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The chosen mass fit uses these selected-data, kinematic, calibration and model inputs; alternate recoil treatments reuse the same events.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-fit"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-inference-context-ua1-1983-w-mass-fit",
      "source": "phys:ua1-1983-w-inference-context",
      "target": "phys:ua1-1983-w-mass-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The chosen mass fit uses these selected-data, kinematic, calibration and model inputs; alternate recoil treatments reuse the same events.",
      "claimIds": [
        "M-phys-ua1-1983-w-mass-fit"
      ],
      "contextIds": [
        "ua1-1983-w-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-pair-candidates-ua1-1983-z-electron-mass",
      "source": "phys:ua1-1983-z-pair-candidates",
      "target": "phys:ua1-1983-z-electron-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-electron-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-response-context-ua1-1983-z-electron-mass",
      "source": "phys:ua1-1983-z-response-context",
      "target": "phys:ua1-1983-z-electron-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-electron-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:dilepton-invariant-mass-ua1-1983-z-electron-mass",
      "source": "phys:dilepton-invariant-mass",
      "target": "phys:ua1-1983-z-electron-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-electron-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-inference-context-ua1-1983-z-electron-mass",
      "source": "phys:ua1-1983-z-inference-context",
      "target": "phys:ua1-1983-z-electron-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-electron-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-pair-candidates-ua1-1983-z-dimuon-mass",
      "source": "phys:ua1-1983-z-pair-candidates",
      "target": "phys:ua1-1983-z-dimuon-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-dimuon-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-response-context-ua1-1983-z-dimuon-mass",
      "source": "phys:ua1-1983-z-response-context",
      "target": "phys:ua1-1983-z-dimuon-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-dimuon-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:dilepton-invariant-mass-ua1-1983-z-dimuon-mass",
      "source": "phys:dilepton-invariant-mass",
      "target": "phys:ua1-1983-z-dimuon-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-dimuon-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-inference-context-ua1-1983-z-dimuon-mass",
      "source": "phys:ua1-1983-z-inference-context",
      "target": "phys:ua1-1983-z-dimuon-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source mass inference depends on the relevant selected channel, calibrated four-momenta, declared invariant-mass convention and original interpretation procedure.",
      "claimIds": [
        "M-phys-ua1-1983-z-dimuon-mass"
      ],
      "contextIds": [
        "ua1-1983-z-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "ua1-1983-w-acquisition",
      "sourceId": "ua1-1983-w-discovery",
      "studyType": "primary-experiment",
      "doi": "10.1016/0370-2693(83)91177-2",
      "journal": "Physics Letters B",
      "volume": "122",
      "issue": "1",
      "pages": "103-116",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Use the 30-day November-December 1982 proton-antiproton run at sqrt(s)=540 GeV. The reported exposure is 18 nb^-1 after dead-time and instrumental corrections. Preserve the trigger and offline reconstruction stages preceding the electron and missing-energy searches.",
      "observable": "UA1 selected electron and missing-energy candidates",
      "finding": "The report displays six electron candidates A-F: five central-gondola events and endcap event B, with high transverse electron energy and associated imbalance. It restricts the final analysis to the five central events because B has possible asymmetric conversion and opposite muon activity. The separately labeled tau candidate is not another admitted electron-neutrino event.",
      "limitations": [
        "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-13, Sections 2 and 5, printed pages 1-5 (PDF pages 3-7): detector, 1982 acquisition, exposure, trigger and reconstructed selection",
        "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
        "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
        "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383911772",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates."
    },
    {
      "id": "ua1-1983-w-response",
      "sourceId": "ua1-1983-w-discovery",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(83)91177-2",
      "journal": "Physics Letters B",
      "volume": "122",
      "issue": "1",
      "pages": "103-116",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Use central tracking, electromagnetic shower shape, hadronic leakage, energy/momentum agreement and the described isolation and jet criteria to select electron candidates. Reconstruct transverse energy imbalance with the calorimeter and use muon/response checks and the reported background controls; preserve the distinct central-gondola and endcap responses.",
      "observable": "UA1 overlapping search selections; UA1 derived transverse event quantities",
      "finding": "The electron-first and missing-energy-first searches recover the same five central electron candidates. The missing-energy search also retains two events removed by the electron energy/momentum match, which the report discusses as compatible with tau hypotheses. Their appearance is not an independent replicated W sample or a confirmed tau-decay measurement. Table 3 gives derived transverse mass and transverse recoil summaries for all six displayed A-F electron candidates from their reconstructed electron and missing-energy vectors. These event quantities provide inputs to the interpretation; the endcap candidate remains displayed despite its exclusion from the final central-event analysis.",
      "limitations": [
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
        "CERN-EP/83-13, Sections 5-8, printed pages 4-8 (PDF pages 6-10); footnotes 7-9 on printed page 13 (PDF page 15): electron-first and missing-energy-first selections and overlapping candidates",
        "CERN-EP/83-13, Tables 2-3 on printed pages 15-16 (PDF pages 17-18); Figures 8-9 (PDF pages 31-32) and captions on printed page 18 (PDF page 20): six displayed candidates and derived transverse quantities",
        "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383911772",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates."
    },
    {
      "id": "ua1-1983-w-inference",
      "sourceId": "ua1-1983-w-discovery",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(83)91177-2",
      "journal": "Physics Letters B",
      "volume": "122",
      "issue": "1",
      "pages": "103-116",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Keep the source transverse lower-limit construction separate from mass fitting under W decay kinematics and standard V-A couplings. The chosen fit corrects the transverse W motion event by event and uses Drell-Yan predictions without additional smearing; the full-QCD-smearing spectrum fit is a same-data alternative. Retain the final five-central-event restriction.",
      "observable": "UA1 reported W transverse lower limit; UA1 historical conditional W mass fit",
      "finding": "Under the stated event interpretation and source confidence construction, UA1 reports mW > 73 GeV/c^2 at 90 percent confidence level from the transverse-mass lower-bound method. The chosen event-by-event transverse-motion correction and unsmeared Drell-Yan fit reports mW = 81 +/- 5 GeV/c^2 with allowance for systematic errors. The same report obtains 74 +/- 4 GeV/c^2 from the electron spectrum with full QCD smearing; this alternative exposes production/recoil-model dependence rather than a second independent mass measurement.",
      "limitations": [
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
        "The historical predicted mass and rate are comparisons using adopted electroweak parameters, efficiencies and production inputs. Agreement is not a direct determination of the scalar vacuum, a unique Higgs-mechanism test, or an independent absolute cross-section measurement.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
        "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383911772",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates."
    },
    {
      "id": "ua1-1983-z-acquisition",
      "sourceId": "ua1-1983-z-discovery",
      "studyType": "primary-experiment",
      "doi": "10.1016/0370-2693(83)90188-0",
      "journal": "Physics Letters B",
      "volume": "126",
      "issue": "5",
      "pages": "398-410",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Use the four-week April-May 1983 proton-antiproton acquisition at sqrt(s)=540 GeV, with reported corrected exposure 55 nb^-1. Retain the electron, muon, jet and total-transverse-energy triggers and the express-line/offline selection used for the dilepton search.",
      "observable": "UA1 selected electron and muon pairs",
      "finding": "The stated selection yields four electron-pair candidates and one dimuon candidate. Figure 1 shows nested electron selection stages with 152, 6 and 4 events; the dimuon analysis scans 42 events after its offline requirements to identify the single candidate. These are separate channel selections within one acquisition, not five directly observed stable Z objects.",
      "limitations": [
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here.",
        "The four electron pairs and single dimuon are selected, reconstructed candidates, not raw trigger counts or stable objects tracked as Z bosons. Figure 1 displays nested cuts on one electron sample; its stages are not independent acquisitions. A jet veto from the W search must not be imposed on Z events: the dimuon and electron event B have visible jet structure.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-73, Sections 1-3, printed pages 1-5 (PDF pages 5-9): four-week April-May 1983 acquisition, exposure, trigger and express-line selections",
        "CERN-EP/83-73, Sections 3-5, printed pages 4-7 (PDF pages 8-11); Figure 1 (PDF page 26) and caption on printed page 20 (PDF page 24): electron cuts, four pairs and selected dimuon",
        "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
        "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383901880",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. The reviewed preprint prints the electron event D run as 7739 in Table 1 and 7339 in Table 3, both with event 1279. Run identifiers are not imported or silently repaired; the admitted count and mass summaries do not choose between those spellings."
    },
    {
      "id": "ua1-1983-z-response",
      "sourceId": "ua1-1983-z-discovery",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(83)90188-0",
      "journal": "Physics Letters B",
      "volume": "126",
      "issue": "5",
      "pages": "398-410",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Adopt the central track, electromagnetic shower and penetrating-muon response, test-beam and source calibration, cosmic-muon alignment checks and background estimates described in the report. Preserve electron radiation and geometric response limitations, the unfinished electromagnetic energy calibration and the different magnetic/recoil inputs used for the dimuon.",
      "observable": "UA1 dilepton response and calibration",
      "finding": "Adopt the central track, electromagnetic shower and penetrating-muon response, test-beam and source calibration, cosmic-muon alignment checks and background estimates described in the report. Preserve electron radiation and geometric response limitations, the unfinished electromagnetic energy calibration and the different magnetic/recoil inputs used for the dimuon.",
      "limitations": [
        "The electron and muon channels have distinct response and calibration procedures. Cosmic-ray muons, test beams, source scans, detector events and simulated backgrounds are auxiliary inputs, not extra Z signal events. The hard-radiation interpretation of one electron track is not a new measured radiation probability.",
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The cited detector technical publications, test-beam data, radiative-correction calculations, parton distributions, production models and QCD simulations are adopted as described by the reviewed primary account. Their underlying records and calculations were not independently reproduced; this review does not replay acquisition, calibration, event selection, backgrounds or likelihoods."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-73, Section 2 and Sections 4-6, printed pages 2-8 (PDF pages 6-12); notes 9 and 11-15, printed pages 13-15 (PDF pages 17-19): calibration, tracking, lepton identification, radiation and backgrounds",
        "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
        "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
        "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383901880",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. The reviewed preprint prints the electron event D run as 7739 in Table 1 and 7339 in Table 3, both with event 1279. Run identifiers are not imported or silently repaired; the admitted count and mass summaries do not choose between those spellings."
    },
    {
      "id": "ua1-1983-z-inference",
      "sourceId": "ua1-1983-z-discovery",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(83)90188-0",
      "journal": "Physics Letters B",
      "volume": "126",
      "issue": "5",
      "pages": "398-410",
      "system": "The declared UA1 historical collider preparation and its original response or inference stage",
      "preparation": "Interpret the selected lepton pairs using the reported invariant-mass reconstruction and background evaluation. Combine the four electron-pair mass determinations as reported; for the dimuon retain the weighted magnetic and transverse-balance momenta conditional on no neutrino. Compare the topology and mass concentration with neutral-boson decay without treating peak spread as an intrinsic width measurement.",
      "observable": "UA1 historical electron-pair Z mass summary; UA1 constrained dimuon mass summary",
      "finding": "The report combines its four electron-pair masses to give 95.2 +/- 2.5 GeV/c^2 and adopts that value in its neutral-boson interpretation. The result is retained with the source preliminary-calibration and uncorrected-radiation conventions; the number is not recomputed from rounded table centers. For the one dimuon candidate, Section 5 reports a mass of 95.5 +/- 7.3 GeV/c^2. The source combines magnetic-deflection momenta with a solution using measured muon directions and calorimetric recoil under the no-neutrino assumption, as distinguished in Table 2.",
      "limitations": [
        "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here."
      ],
      "readExtent": "primary-preprint-sections-and-selected-tables",
      "reviewedLocators": [
        "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
        "CERN-EP/83-73, Section 5 on printed pages 6-7 (PDF pages 10-11), Tables 2-3 on printed pages 18-19 (PDF pages 22-23): magnetic and no-neutrino transverse-recoil momentum determinations and their weighted combination",
        "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/0370269383901880",
      "correctionCheck": "The actually reviewed dated CERN preprint is distinguished from the journal typesetting and later precision reanalyses. This review does not claim an exhaustive search for later corrections. The reviewed preprint prints the electron event D run as 7739 in Table 1 and 7339 in Table 3, both with event 1279. Run identifiers are not imported or silently repaired; the admitted count and mass summaries do not choose between those spellings."
    }
  ],
  "comparisons": [
    {
      "id": "ua1-1983-w-dependent-selections",
      "candidate": "The two selection paths support the same charged-boson candidate interpretation under the declared response.",
      "alternative": "Independent searches provide additive candidate counts or a direct neutrino measurement from imbalance alone.",
      "discriminator": "Preserve overlapping central candidates, possible backgrounds and the explicit six-display/five-analysis distinction.",
      "result": "conditional-support",
      "limit": "The electron-first and missing-energy-first procedures share the same 1982 acquisition and five overlapping central candidates. Their agreement is a dependent selection cross-check, not independent replication or additive signal statistics.",
      "assumptions": [
        "Longitudinal energy flow is affected by particles escaping through the beam pipe. Transverse imbalance can also arise from muons, limited response, secondary interactions or mismeasurement; the source uses detector and background checks. Its negligible-background conclusions are reported evaluations, not exact zeros or a locally certified discovery significance.",
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Use c=1 and the (+,-,-,-) metric for the declared kinematic definitions. The exact transverse-mass inequality concerns physical daughter momenta under the two-body assumptions. Detector reconstruction errors can place an estimated mT above the true parent mass; a confidence bound requires the source response and inference procedure. Assigning the missing transverse vector to one effectively massless neutrino is an inference condition; missing energy alone does not identify a neutrino species or a W."
      ],
      "sourceIds": [
        "ua1-1983-w-discovery"
      ],
      "claimIds": [
        "C-phys-ua1-1983-w-electron-candidates",
        "C-phys-ua1-1983-w-selection-comparison"
      ]
    },
    {
      "id": "ua1-1983-w-mass-methods",
      "candidate": "The source transverse bound and recoil-dependent fit support a massive charged-boson decay interpretation within different method scopes.",
      "alternative": "Event transverse masses are exact W masses or the two historical fits are independent results to average.",
      "discriminator": "Keep the 73 GeV confidence bound, chosen 81 +/- 5 fit and 74 +/- 4 smearing alternative separate from theoretical predicted-mass/rate comparisons.",
      "result": "conditional-support",
      "limit": "The 90 percent lower-limit construction and the fitted central mass are different inferences. The chosen 81 +/- 5 result and the 74 +/- 4 full-QCD-smearing alternative reuse the same selected data with different recoil/production treatments; they must not be pooled. The quoted fit includes allowance for systematic errors without a released full likelihood here.",
      "assumptions": [
        "Tables 2-3 and Figures 8-9 retain six electron candidates A-F, including endcap event B. Because B has possible conversion and opposite muon activity, the source restricts final analysis to the five central-gondola events. Table 2 candidate G and additional tau-compatible events are not further confirmed electron-neutrino candidates.",
        "Table 3 contains computed transverse masses and recoil momenta, not directly measured W invariant masses. Rounded event inputs are insufficient to reproduce every printed center or the error covariance exactly. No local table arithmetic, confidence limit or final fit is certified.",
        "The historical predicted mass and rate are comparisons using adopted electroweak parameters, efficiencies and production inputs. Agreement is not a direct determination of the scalar vacuum, a unique Higgs-mechanism test, or an independent absolute cross-section measurement.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "sourceIds": [
        "ua1-1983-w-discovery"
      ],
      "claimIds": [
        "C-phys-ua1-1983-w-transverse-kinematics",
        "C-phys-ua1-1983-w-mass-bound",
        "C-phys-ua1-1983-w-mass-fit"
      ]
    },
    {
      "id": "ua1-1983-z-channel-interpretation",
      "candidate": "Selected electron and muon pairs support the historical neutral-boson decay interpretation under the stated detector and background model.",
      "alternative": "The candidate count is a direct stable-particle observation or the dimuon mass uses wholly unconstrained independent track estimates.",
      "discriminator": "Preserve the original channel-specific selection, magnetic and no-neutrino recoil inputs, background evaluation and common 1983 acquisition.",
      "result": "conditional-support",
      "limit": "The dimuon momentum determination combines magnetic deflection with a transverse-recoil solution conditional on no emitted neutrino. Table 2 labels their weighted average. These estimates concern the same two tracks and are not independent events; their covariance and the reported mass error are not reconstructed locally.",
      "assumptions": [
        "The four electron pairs and single dimuon are selected, reconstructed candidates, not raw trigger counts or stable objects tracked as Z bosons. Figure 1 displays nested cuts on one electron sample; its stages are not independent acquisitions. A jet veto from the W search must not be imposed on Z events: the dimuon and electron event B have visible jet structure.",
        "The electron and muon channels have distinct response and calibration procedures. Cosmic-ray muons, test beams, source scans, detector events and simulated backgrounds are auxiliary inputs, not extra Z signal events. The hard-radiation interpretation of one electron track is not a new measured radiation probability.",
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "sourceIds": [
        "ua1-1983-z-discovery"
      ],
      "claimIds": [
        "C-phys-ua1-1983-z-pair-candidates",
        "C-phys-ua1-1983-z-electron-mass",
        "C-phys-ua1-1983-z-dimuon-mass"
      ]
    },
    {
      "id": "ua1-1983-z-scale-and-width-boundary",
      "candidate": "The historical mass summaries retain preliminary shared calibration and resolution conditions.",
      "alternative": "Displayed marginal bars prove independent precision or the observed spread measures intrinsic width and lifetime.",
      "discriminator": "Read Table 3 footnote (a), the scale error omitted from Figures 8-9, and the Section 7 statement that calibration is unfinished and radiative mass corrections are unapplied.",
      "result": "conditional-support",
      "limit": "Table 3 footnote (a) says electron mass errors were scaled up to 5 GeV to represent the unfinished overall electromagnetic calibration; that scale factor is omitted from Figure 8 error bars. Figure 9 omits correlated energy-scale error. Preserve the reported 95.2 +/- 2.5 summary without recomputing it from rounded event masses or treating calibration contributions as independent errors.",
      "assumptions": [
        "The source explicitly states that final electromagnetic calibration is still in progress, possible scale shifts can affect W and Z masses together, and electromagnetic radiative corrections have not been applied to the masses. These are historical results under that convention, not current precision values or a modern pole-mass extraction.",
        "The source compares the electron-pair mass spread with detector resolution and an adopted natural-width expectation. No intrinsic width, lifetime or branching-fraction measurement is admitted from this discovery peak; instrumental spread is not automatically a decay width.",
        "This Z report uses the April-May 1983 sample. Its contemporary W comparison and preliminary 81 +/- 2 mass reference are distinct from the November-December 1982 W discovery sample and 81 +/- 5 result. The 1983 W comparison, weak-angle/rho extraction and rate predictions are not new admitted outcomes here.",
        "These are channel-conditioned production and decay interpretations of unstable weak-boson resonances, not stable persistent carrier units or a measurement of every weak interaction property. Universal parent weights, carrier minima, fixed arising order and an internal-propagator formation prerequisite are excluded. Scalar-vacuum uniqueness, Yukawa hierarchy, absolute vacuum stability and a cosmological transition are not inferred."
      ],
      "sourceIds": [
        "ua1-1983-z-discovery"
      ],
      "claimIds": [
        "C-phys-ua1-1983-z-electron-mass",
        "C-phys-ua1-1983-z-dimuon-mass"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:transverse-two-body-mass",
      "role": "definition",
      "denotes": "The declared massless two-body transverse-mass convention and its conditional lower-bound interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-transverse-two-body-mass"
      ]
    },
    {
      "nodeId": "phys:dilepton-invariant-mass",
      "role": "definition",
      "denotes": "The declared four-vector mass convention for the source-reported dilepton reconstruction, distinct from transverse mass.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-dilepton-invariant-mass"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-acquisition-context",
      "role": "experimental-context",
      "denotes": "The declared 1982 collider exposure, trigger and reconstruction preparation for the charged-boson search.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-w-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-response-context",
      "role": "model-context",
      "denotes": "The adopted detector response, calibrated selection and background conditions of the original W analysis.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-w-response-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-inference-context",
      "role": "model-context",
      "denotes": "The original lower-limit and conditional recoil/production mass-fit procedures, not a new acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-w-inference-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-electron-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The source-selected electron candidates and explicit final-analysis subset, distinguished from raw collisions or direct W tracks.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-w-electron-candidates"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-selection-comparison",
      "role": "scoped-phenomenon",
      "denotes": "The reported dependence and overlap of two selections on the same collider acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-w-selection-comparison"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-transverse-kinematics",
      "role": "scoped-phenomenon",
      "denotes": "The source-computed transverse masses and recoil summaries, not eventwise parent invariant-mass measurements.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-w-transverse-kinematics"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-mass-bound",
      "role": "scoped-phenomenon",
      "denotes": "The source-reported conditional confidence limit; no local coverage or significance calculation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-w-mass-bound"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-w-mass-fit",
      "role": "scoped-phenomenon",
      "denotes": "The reported chosen 1982-data mass fit, retaining the dependent alternate recoil treatment and historical convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-w-mass-fit"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-acquisition-context",
      "role": "experimental-context",
      "denotes": "The declared 1983 acquisition and data-selection preparation, distinct from the 1982 W discovery run.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-z-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-response-context",
      "role": "model-context",
      "denotes": "The distinct electron/muon detector response and calibration conditions constraining the dilepton interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-z-response-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-inference-context",
      "role": "model-context",
      "denotes": "The original electron and muon mass-inference conventions and conditional neutral-boson interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ua1-1983-z-inference-context"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-pair-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The reported selected four electron pairs and one muon pair with their nested-cut and common-acquisition boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-z-pair-candidates"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-electron-mass",
      "role": "scoped-phenomenon",
      "denotes": "The source-reported electron-channel mass summary and limited neutral-boson interpretation, not a modern precision mass.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-z-electron-mass"
      ]
    },
    {
      "nodeId": "phys:ua1-1983-z-dimuon-mass",
      "role": "scoped-phenomenon",
      "denotes": "The same-event mass inference using magnetic and conditional recoil information, not an independent second acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ua1-1983-z-dimuon-mass"
      ]
    }
  ]
};

/** Preserve separate acquisitions, calibrated candidates and conditional mass inferences. */
export function validateWeakBosonContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing weak-boson ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Weak-boson ${kind} changed ${id}.${key}: preserve acquisition, response and inference boundaries`);
    }
  }
  const outcomes = new Set(WEAK_BOSON_ADMISSION.observations.map(([id]) => `phys:${id}`));
  const incoming = new Set(contracts.relations.filter((r) => outcomes.has(r.target)).map((r) => r.id));
  for (const relation of context.relations.values()) {
    if (outcomes.has(relation.target)) assert.ok(incoming.has(relation.id),
      `Unreviewed incoming weak-boson inference: ${relation.id}`);
  }
}
