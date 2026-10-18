import assert from "node:assert/strict";

export const GAUGE_SECTOR_SCOPE_CHECKS = new Map();
export const GAUGE_SECTOR_SCOPE_ANALYTICAL_SOURCES = new Map();
export const GAUGE_SECTOR_SCOPE_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [],
  "observations": [
    [
      "gauge-sector-evidence-boundary",
      "C-phys-gauge-sector-evidence-boundary",
      [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "standard-model-sector-decomposition-gauge-sector-evidence-boundary",
      "standard-model-sector-decomposition",
      "gauge-sector-evidence-boundary",
      "M-phys-gauge-sector-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "gauge-sector-interpretation-boundary-gauge-sector-evidence-boundary",
      "gauge-sector-interpretation-boundary",
      "gauge-sector-evidence-boundary",
      "M-phys-gauge-sector-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "opal2001-color-factors-gauge-sector-evidence-boundary",
      "opal2001-color-factors",
      "gauge-sector-evidence-boundary",
      "M-phys-gauge-sector-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-w-mass-fit-gauge-sector-evidence-boundary",
      "ua1-1983-w-mass-fit",
      "gauge-sector-evidence-boundary",
      "M-phys-gauge-sector-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "ua1-1983-z-electron-mass-gauge-sector-evidence-boundary",
      "ua1-1983-z-electron-mass",
      "gauge-sector-evidence-boundary",
      "M-phys-gauge-sector-evidence-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-gauge-sector-evidence-boundary",
      [
        "pdg2025-qcd",
        "pdg2025-electroweak"
      ]
    ],
    [
      "M-phys-gauge-sector-evidence-boundary",
      [
        "pdg2025-qcd",
        "pdg2025-electroweak"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "C-phys-gauge-sector-evidence-boundary",
      "kind": "review-finding",
      "statement": "The selected OPAL multijet fit constrains conditional color-factor ratios, while the historical UA1 W and Z analyses infer channel-dependent resonance masses. They test selected predictions of their adopted strong and electroweak descriptions. This comparison preserves those distinct response and model assumptions; it does not infer the Standard Model gauge/matter decomposition as a unique physical formation event.",
      "scope": "Literature comparison of the admitted OPAL 2001 color-factor inference and separate historical UA1 W/Z mass inferences, under a declared gauge-sector model.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "OPAL fits correlated color-factor ratios within its specified non-Abelian perturbative family, with standard-QCD detector/hadronization correction models. Converted C_A,C_F and alpha_s additionally use T_R=1/2 and reuse the same fit. This is not a direct vertex image, independent T_R measurement, complete retuned competing-model exclusion or unique reconstruction of the full gauge group.",
        "The historical W inference adopts the V-A hypothesis and its production/recoil model. Its chosen corrected-transverse-motion fit and full-QCD-smearing alternative share the selected 1982 sample and cannot be pooled. Its lower confidence limit is a separate inference. These channel-conditioned mass fits do not independently measure chirality, every weak coupling or the origin of the Higgs background.",
        "The historical Z electron-pair mass retains unfinished electromagnetic calibration and omitted radiative corrections; correlated scale uncertainty is not a set of independent event errors. The April-May 1983 Z exposure and its contemporary W comparison are distinct from the 1982 W discovery sample. No intrinsic Z width, lifetime, modern pole mass or new W/weak-angle fit is admitted here.",
        "These three owning inference contexts retain separate observables, selections, response and confidence assumptions. Within-campaign alternative fits, transformed parameters and displayed events are dependent outputs. No raw events, covariance, detector response, perturbative calculation, likelihood or joint model comparison is newly reproduced.",
        "The selected color-sensitive and weak-channel results are compatible with specified predictions, not direct observation of a universal sector-differentiation event or a proof of every field representation, gauge-group global form, generation, coupling or particle lineage. Other species and decay studies retain their existing scopes; generic collider/scattering placeholders do not admit unreviewed data.",
        "The gauge/matter/Higgs decomposition is a declared model input. A general QFT framework, a chosen Hamiltonian and electroweak symmetry breaking do not dynamically derive that content or establish the original necessary/enabling parents, 0.6/0.4 weights, Nmin=Ncrit=1, temporal arising/maintenance or SOMA pattern authority. Distinct gauge factors do not imply isolated physical sectors."
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "M-phys-gauge-sector-evidence-boundary",
      "kind": "method",
      "statement": "Relate each existing fitted result to its own model, preparation and source conventions. Preserve OPAL correlations and normalization, W recoil/V-A assumptions and Z calibration/radiative limits. Use the declared model and interpretation boundary to restrict conclusions; do not pool dependent outputs, infer all representations or promote the order of definitions into a formation or maintenance process.",
      "scope": "Literature comparison of the admitted OPAL 2001 color-factor inference and separate historical UA1 W/Z mass inferences, under a declared gauge-sector model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal gauge-architecture inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "OPAL fits correlated color-factor ratios within its specified non-Abelian perturbative family, with standard-QCD detector/hadronization correction models. Converted C_A,C_F and alpha_s additionally use T_R=1/2 and reuse the same fit. This is not a direct vertex image, independent T_R measurement, complete retuned competing-model exclusion or unique reconstruction of the full gauge group.",
        "The historical W inference adopts the V-A hypothesis and its production/recoil model. Its chosen corrected-transverse-motion fit and full-QCD-smearing alternative share the selected 1982 sample and cannot be pooled. Its lower confidence limit is a separate inference. These channel-conditioned mass fits do not independently measure chirality, every weak coupling or the origin of the Higgs background.",
        "The historical Z electron-pair mass retains unfinished electromagnetic calibration and omitted radiative corrections; correlated scale uncertainty is not a set of independent event errors. The April-May 1983 Z exposure and its contemporary W comparison are distinct from the 1982 W discovery sample. No intrinsic Z width, lifetime, modern pole mass or new W/weak-angle fit is admitted here.",
        "These three owning inference contexts retain separate observables, selections, response and confidence assumptions. Within-campaign alternative fits, transformed parameters and displayed events are dependent outputs. No raw events, covariance, detector response, perturbative calculation, likelihood or joint model comparison is newly reproduced.",
        "The selected color-sensitive and weak-channel results are compatible with specified predictions, not direct observation of a universal sector-differentiation event or a proof of every field representation, gauge-group global form, generation, coupling or particle lineage. Other species and decay studies retain their existing scopes; generic collider/scattering placeholders do not admit unreviewed data.",
        "The gauge/matter/Higgs decomposition is a declared model input. A general QFT framework, a chosen Hamiltonian and electroweak symmetry breaking do not dynamically derive that content or establish the original necessary/enabling parents, 0.6/0.4 weights, Nmin=Ncrit=1, temporal arising/maintenance or SOMA pattern authority. Distinct gauge factors do not imply isolated physical sectors."
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:gauge-sector-evidence-boundary",
      "name": "Scoped gauge-sector evidence comparison",
      "kind": "scoped-process",
      "description": "The selected OPAL multijet fit constrains conditional color-factor ratios, while the historical UA1 W and Z analyses infer channel-dependent resonance masses. They test selected predictions of their adopted strong and electroweak descriptions. This comparison preserves those distinct response and model assumptions; it does not infer the Standard Model gauge/matter decomposition as a unique physical formation event.",
      "claimIds": [
        "C-phys-gauge-sector-evidence-boundary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Section 10 on printed page 10 (PDF page 12), Figure 10 (PDF page 33) and caption: transverse lower limit, V-A hypothesis, recoil and QCD-smearing choices, and conditional mass fits"
        },
        {
          "sourceId": "ua1-1983-w-discovery",
          "locator": "CERN-EP/83-13, Sections 2-4 and 8-9, printed pages 1-4 and 7-9 (PDF pages 3-6 and 9-11): detector response, electron identification, transverse imbalance, event B and background evaluations"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 4 on printed page 6 (PDF page 10), Tables 1 and 3 on printed pages 17 and 19 (PDF pages 21 and 23), Figure 8 (PDF page 35): electron-pair mass summary and calibration conventions"
        },
        {
          "sourceId": "ua1-1983-z-discovery",
          "locator": "CERN-EP/83-73, Section 7 on printed pages 9-10 (PDF pages 13-14), Table 3 footnote (a), Figures 8-9 (PDF pages 35-36), and note 4 on printed page 12 (PDF page 16): reported mass, unfinished calibration, omitted radiative corrections and distinct contemporary W comparison"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        }
      ],
      "openObligations": [
        "OPAL fits correlated color-factor ratios within its specified non-Abelian perturbative family, with standard-QCD detector/hadronization correction models. Converted C_A,C_F and alpha_s additionally use T_R=1/2 and reuse the same fit. This is not a direct vertex image, independent T_R measurement, complete retuned competing-model exclusion or unique reconstruction of the full gauge group.",
        "The historical W inference adopts the V-A hypothesis and its production/recoil model. Its chosen corrected-transverse-motion fit and full-QCD-smearing alternative share the selected 1982 sample and cannot be pooled. Its lower confidence limit is a separate inference. These channel-conditioned mass fits do not independently measure chirality, every weak coupling or the origin of the Higgs background.",
        "The historical Z electron-pair mass retains unfinished electromagnetic calibration and omitted radiative corrections; correlated scale uncertainty is not a set of independent event errors. The April-May 1983 Z exposure and its contemporary W comparison are distinct from the 1982 W discovery sample. No intrinsic Z width, lifetime, modern pole mass or new W/weak-angle fit is admitted here.",
        "These three owning inference contexts retain separate observables, selections, response and confidence assumptions. Within-campaign alternative fits, transformed parameters and displayed events are dependent outputs. No raw events, covariance, detector response, perturbative calculation, likelihood or joint model comparison is newly reproduced.",
        "The selected color-sensitive and weak-channel results are compatible with specified predictions, not direct observation of a universal sector-differentiation event or a proof of every field representation, gauge-group global form, generation, coupling or particle lineage. Other species and decay studies retain their existing scopes; generic collider/scattering placeholders do not admit unreviewed data.",
        "The gauge/matter/Higgs decomposition is a declared model input. A general QFT framework, a chosen Hamiltonian and electroweak symmetry breaking do not dynamically derive that content or establish the original necessary/enabling parents, 0.6/0.4 weights, Nmin=Ncrit=1, temporal arising/maintenance or SOMA pattern authority. Distinct gauge factors do not imply isolated physical sectors."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:standard-model-sector-decomposition-gauge-sector-evidence-boundary",
      "source": "phys:standard-model-sector-decomposition",
      "target": "phys:gauge-sector-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared model boundary or selected inference constrains only its stated content; the descriptive comparison is not a unique gauge-architecture reconstruction or universal sector-formation mechanism.",
      "claimIds": [
        "M-phys-gauge-sector-evidence-boundary"
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:gauge-sector-interpretation-boundary-gauge-sector-evidence-boundary",
      "source": "phys:gauge-sector-interpretation-boundary",
      "target": "phys:gauge-sector-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared model boundary or selected inference constrains only its stated content; the descriptive comparison is not a unique gauge-architecture reconstruction or universal sector-formation mechanism.",
      "claimIds": [
        "M-phys-gauge-sector-evidence-boundary"
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:opal2001-color-factors-gauge-sector-evidence-boundary",
      "source": "phys:opal2001-color-factors",
      "target": "phys:gauge-sector-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared model boundary or selected inference constrains only its stated content; the descriptive comparison is not a unique gauge-architecture reconstruction or universal sector-formation mechanism.",
      "claimIds": [
        "M-phys-gauge-sector-evidence-boundary"
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-w-mass-fit-gauge-sector-evidence-boundary",
      "source": "phys:ua1-1983-w-mass-fit",
      "target": "phys:gauge-sector-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared model boundary or selected inference constrains only its stated content; the descriptive comparison is not a unique gauge-architecture reconstruction or universal sector-formation mechanism.",
      "claimIds": [
        "M-phys-gauge-sector-evidence-boundary"
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    },
    {
      "id": "physics:ua1-1983-z-electron-mass-gauge-sector-evidence-boundary",
      "source": "phys:ua1-1983-z-electron-mass",
      "target": "phys:gauge-sector-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared model boundary or selected inference constrains only its stated content; the descriptive comparison is not a unique gauge-architecture reconstruction or universal sector-formation mechanism.",
      "claimIds": [
        "M-phys-gauge-sector-evidence-boundary"
      ],
      "contextIds": [
        "opal2001-color-inference",
        "ua1-1983-w-inference",
        "ua1-1983-z-inference"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:gauge-sector-evidence-boundary",
      "role": "scoped-phenomenon",
      "denotes": "A comparison of selected color-sensitive and weak-channel evidence, not a new experiment, joint fit or observed origin of gauge sectors.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-gauge-sector-evidence-boundary"
      ]
    }
  ]
};

/** Preserve chosen gauge-sector and selected-process evidence boundaries. */
export function validateGaugeSectorScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Gauge sector scope ${kind} changed ${id}: preserve model decomposition and selected-process boundaries`);
    }
  }
}
