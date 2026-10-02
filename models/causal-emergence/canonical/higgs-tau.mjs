import assert from "node:assert/strict";

export const HIGGS_TAU_CHECKS = new Map();
export const HIGGS_TAU_ANALYTICAL_SOURCES = new Map();
export const HIGGS_TAU_ADMISSION = {
  "definitions": [
    [
      "phys:tau-pair-readout",
      "D-phys-tau-pair-readout"
    ],
    [
      "phys:higgs-rate-modifiers",
      "D-phys-higgs-rate-modifiers"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-tau-pair-readout",
      [
        "phys:lepton-fields",
        "phys:tau-pair-readout"
      ]
    ]
  ],
  "contexts": [
    [
      "cms2016-tau-acquisition-context",
      "M-phys-cms2016-tau-acquisition-context",
      [
        "cms2016-tau-acquisition"
      ]
    ],
    [
      "cms2016-tau-response-context",
      "M-phys-cms2016-tau-response-context",
      [
        "cms2016-tau-rate-inference"
      ]
    ],
    [
      "cms2016-tau-rate-context",
      "M-phys-cms2016-tau-rate-context",
      [
        "cms2016-tau-rate-inference"
      ]
    ],
    [
      "cms2016-tau-coupling-context",
      "M-phys-cms2016-tau-coupling-context",
      [
        "cms2016-tau-coupling-inference"
      ]
    ]
  ],
  "observations": [
    [
      "cms2016-tau-selected-distributions",
      "C-phys-cms2016-tau-selected-distributions",
      [
        "cms2016-tau-acquisition"
      ]
    ],
    [
      "cms2016-tau-rate-excess",
      "C-phys-cms2016-tau-rate-excess",
      [
        "cms2016-tau-rate-inference"
      ]
    ],
    [
      "cms2016-tau-display-summary",
      "C-phys-cms2016-tau-display-summary",
      [
        "cms2016-tau-rate-inference"
      ]
    ],
    [
      "cms2016-tau-coupling-compatibility",
      "C-phys-cms2016-tau-coupling-compatibility",
      [
        "cms2016-tau-coupling-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "tau-pair-readout-cms2016-tau-selected-distributions",
      "tau-pair-readout",
      "cms2016-tau-selected-distributions",
      "M-phys-cms2016-tau-selected-distributions",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-acquisition-context-cms2016-tau-selected-distributions",
      "cms2016-tau-acquisition-context",
      "cms2016-tau-selected-distributions",
      "M-phys-cms2016-tau-selected-distributions",
      "measurement-context"
    ],
    [
      "cms2016-tau-response-context-cms2016-tau-selected-distributions",
      "cms2016-tau-response-context",
      "cms2016-tau-selected-distributions",
      "M-phys-cms2016-tau-selected-distributions",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-selected-distributions-cms2016-tau-rate-excess",
      "cms2016-tau-selected-distributions",
      "cms2016-tau-rate-excess",
      "M-phys-cms2016-tau-rate-excess",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-response-context-cms2016-tau-rate-excess",
      "cms2016-tau-response-context",
      "cms2016-tau-rate-excess",
      "M-phys-cms2016-tau-rate-excess",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-rate-context-cms2016-tau-rate-excess",
      "cms2016-tau-rate-context",
      "cms2016-tau-rate-excess",
      "M-phys-cms2016-tau-rate-excess",
      "interpretation-dependency"
    ],
    [
      "higgs-rate-modifiers-cms2016-tau-rate-excess",
      "higgs-rate-modifiers",
      "cms2016-tau-rate-excess",
      "M-phys-cms2016-tau-rate-excess",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-selected-distributions-cms2016-tau-display-summary",
      "cms2016-tau-selected-distributions",
      "cms2016-tau-display-summary",
      "M-phys-cms2016-tau-display-summary",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-rate-context-cms2016-tau-display-summary",
      "cms2016-tau-rate-context",
      "cms2016-tau-display-summary",
      "M-phys-cms2016-tau-display-summary",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-rate-excess-cms2016-tau-display-summary",
      "cms2016-tau-rate-excess",
      "cms2016-tau-display-summary",
      "M-phys-cms2016-tau-display-summary",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-selected-distributions-cms2016-tau-coupling-compatibility",
      "cms2016-tau-selected-distributions",
      "cms2016-tau-coupling-compatibility",
      "M-phys-cms2016-tau-coupling-compatibility",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-response-context-cms2016-tau-coupling-compatibility",
      "cms2016-tau-response-context",
      "cms2016-tau-coupling-compatibility",
      "M-phys-cms2016-tau-coupling-compatibility",
      "interpretation-dependency"
    ],
    [
      "cms2016-tau-coupling-context-cms2016-tau-coupling-compatibility",
      "cms2016-tau-coupling-context",
      "cms2016-tau-coupling-compatibility",
      "M-phys-cms2016-tau-coupling-compatibility",
      "interpretation-dependency"
    ],
    [
      "higgs-rate-modifiers-cms2016-tau-coupling-compatibility",
      "higgs-rate-modifiers",
      "cms2016-tau-coupling-compatibility",
      "M-phys-cms2016-tau-coupling-compatibility",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "cms2016-tau-acquisition",
    "cms2016-tau-rate-inference",
    "cms2016-tau-coupling-inference"
  ],
  "comparisonIds": [
    "cms2016-tau-rate-interpretation",
    "cms2016-tau-coupling-interpretation"
  ],
  "inferenceSources": [
    [
      "M-phys-cms2016-tau-acquisition-context",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-response-context",
      [
        "cms2018-tau"
      ]
    ],
    [
      "C-phys-cms2016-tau-selected-distributions",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-selected-distributions",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-rate-context",
      [
        "cms2018-tau"
      ]
    ],
    [
      "C-phys-cms2016-tau-rate-excess",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-rate-excess",
      [
        "cms2018-tau"
      ]
    ],
    [
      "C-phys-cms2016-tau-display-summary",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-display-summary",
      [
        "cms2018-tau"
      ]
    ],
    [
      "M-phys-cms2016-tau-coupling-context",
      [
        "cms2018-tau",
        "cms2014-tau-method",
        "higgs2013-coupling-framework"
      ]
    ],
    [
      "C-phys-cms2016-tau-coupling-compatibility",
      [
        "cms2018-tau",
        "cms2014-tau-method",
        "higgs2013-coupling-framework"
      ]
    ],
    [
      "M-phys-cms2016-tau-coupling-compatibility",
      [
        "cms2018-tau",
        "cms2014-tau-method",
        "higgs2013-coupling-framework"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "cms2018-tau",
      "kind": "research-publication",
      "title": "Observation of the Higgs boson decay to a pair of tau leptons with the CMS detector",
      "authors": [
        "CMS Collaboration"
      ],
      "year": 2018,
      "doi": "10.1016/j.physletb.2018.02.004",
      "url": "https://arxiv.org/abs/1708.00373v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-version-passages",
        "locators": [
          "Author version 1708.00373v2, printed pages 1–2 (PDF 3–4), Sections 1–3: 2016 exposure, detector and simulated samples",
          "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "Printed pages 6, 8–11 (PDF 8, 10–13), Section 7 and Figures 2–5: background control samples and transfers",
          "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints",
          "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints",
          "Printed pages 22–25 (PDF 24–27), Figures 18–19 and Table 4: sensitive-bin and weighted summaries",
          "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change",
          "Printed page 24 (PDF 26), end of Section 9 and Section 10: Run1/2016 combination and cross-energy uncertainty assumption"
        ],
        "limit": "Read scientific text/captions on printed pages 1–27 (PDF 3–29) and selected reference 26 on printed page 29. Visually checked printed pages 5,8,12,16,22,24–27, including Tables 1–4, Figures 6–7 and 19–22, and calibration overlap. Collective authorship and publication metadata checked. Official CMS Table 4 was also inspected and repeats the reported values. The full author roster, earlier Run1 analyses, raw data, reusable likelihood and upstream calibrations are not independently reviewed or replayed."
      }
    },
    {
      "id": "cms2014-tau-method",
      "kind": "research-publication",
      "title": "Evidence for the 125 GeV Higgs boson decaying to a pair of tau leptons",
      "authors": [
        "CMS Collaboration"
      ],
      "year": 2014,
      "doi": "10.1007/JHEP05(2014)104",
      "url": "https://arxiv.org/abs/1401.5041v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-method-passages",
        "locators": [
          "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment"
        ],
        "limit": "Read printed page 28 coupling-method text, page 31 Figure 18 caption and page 36 reference 49 metadata; visually checked page 28. Only the method explicitly referenced by CMS2018 is used. No older measured result, acquisition/calibration chain or full likelihood is admitted; these passages do not fully specify the implemented total-width variant."
      }
    },
    {
      "id": "higgs2013-coupling-framework",
      "kind": "research-publication",
      "title": "Handbook of LHC Higgs Cross Sections: 3. Higgs Properties",
      "authors": [
        "LHC Higgs Cross Section Working Group"
      ],
      "year": 2013,
      "doi": "10.5170/CERN-2013-004",
      "url": "https://arxiv.org/abs/1307.1347v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-framework-passages",
        "locators": [
          "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers",
          "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations",
          "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants"
        ],
        "limit": "Read the selected rate-factorization, width and common-modifier passages on printed pages 130–142, including the selected gluon-loop discussion on page 135; visually checked Equation 92 on page 131, Equation 115 and width discussion on page 137, and Table 43 on page 142. Collective working-group identity, editors, report and DOI checked. No full handbook, numerical cross-section tables, complete loop calculation or experiment-specific likelihood implementation is reviewed."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-tau-pair-readout",
      "kind": "review-finding",
      "statement": "In the CMS tau-pair selection, tau_h denotes a reconstructed hadronic tau decay; leptonic tau decays supply electron/muon candidates and missing neutrinos. Visible decay products and missing transverse momentum supply distinct visible-mass and SVFIT tau-pair mass observables.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms."
      ]
    },
    {
      "id": "D-phys-higgs-rate-modifiers",
      "kind": "review-finding",
      "statement": "For a single narrow resonance, sigma(i to H to f)=sigma_i*Gamma_f/Gamma_H. Relative to the same fixed-mass Standard Model reference, mu_if=(sigma_i/sigma_i_SM)*(Gamma_f/Gamma_f_SM)/(Gamma_H/Gamma_H_SM). The common-modifier benchmark groups vector couplings into kappa_V and fermion couplings into kappa_f under explicit loop, tensor-structure and total-width assumptions.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The rate identity assumes a single narrow resonance and production-decay factorization with the same fixed-mass Standard Model reference. Coupling rescalings additionally assume specified tensor structure, loop functions and total width; rate data alone do not remove the width degeneracy.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ]
    },
    {
      "id": "M-phys-cms2016-tau-acquisition-context",
      "kind": "method",
      "statement": "Select the 2016 CMS pp exposure at 13 TeV, 35.9 fb^-1, into tau_h tau_h, mu-tau_h, e-tau_h and e-mu final states with exclusive 0-jet, VBF and boosted categories; apply the stated triggers, object, isolation and charge selections.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Author version 1708.00373v2, printed pages 1–2 (PDF 3–4), Sections 1–3: 2016 exposure, detector and simulated samples",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms."
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-response-context",
      "kind": "method",
      "statement": "Apply simulated templates with data-constrained tau/object and missing-momentum response; use Drell–Yan, W+jets, QCD and top control regions with their stated transfer assumptions and shared nuisance constraints. Preserve the partial overlap of tau energy-scale calibration and search selections.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 6, 8–11 (PDF 8, 10–13), Section 7 and Figures 2–5: background control samples and transfers",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms.",
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "C-phys-cms2016-tau-selected-distributions",
      "kind": "review-finding",
      "statement": "The selected data points in Figures 6–17 give channel/category reconstructed distributions for the 2016 exposure. The tau_h tau_h 0-jet input is one-dimensional; the remaining category inputs are two-dimensional. Simulated signal/background components and post-fit overlays are distinct from these observed bins.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search."
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-selected-distributions",
      "kind": "method",
      "statement": "Retain selected reconstructed bins and the one-dimensional exception as the observed input; keep modeled and post-fit components separate.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search."
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-rate-context",
      "kind": "method",
      "statement": "Fit the selected category bins and control regions jointly with a common H-to-tau-tau signal strength at the adopted mass 125.09 GeV. Profile yield/shape and template-bin nuisances with their stated correlations; treat H-to-WW as background for this rate and significance inference.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "C-phys-cms2016-tau-rate-excess",
      "kind": "review-finding",
      "statement": "For the 2016-only analysis at fixed mH=125.09 GeV, CMS reports mu=1.09 (+0.27/-0.26) relative to the Standard Model tau-pair rate, with local observed significance 4.9 and expected significance 4.7 standard deviations.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed page 24 (PDF 26), end of Section 9 and Section 10: Run1/2016 combination and cross-energy uncertainty assumption",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 1.09 (+0.27/-0.26) strength and observed 4.9 versus expected 4.7 local standard deviations are 2016-only results. They are not an isolated tau Yukawa measurement or a posterior probability of the Higgs hypothesis.",
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "The separately reported Run1-plus-2016 result, mu=0.98 +/-0.18 and 5.9 observed/expected standard deviations, reuses the 2016 data. It assumes a common strength and uncertainties fully uncorrelated between center-of-mass energies; this is the authors' combination assumption, not a demonstrated independence of all physical systematics. Earlier Run1 likelihood inputs are not independently reviewed here.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-rate-excess",
      "kind": "method",
      "statement": "Infer the published strength and local background-tail significance from the common signal/control likelihood and response model; preserve 2016-only and combined-data scopes.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed page 24 (PDF 26), end of Section 9 and Section 10: Run1/2016 combination and cross-energy uncertainty assumption",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 1.09 (+0.27/-0.26) strength and observed 4.9 versus expected 4.7 local standard deviations are 2016-only results. They are not an isolated tau Yukawa measurement or a posterior probability of the Higgs hypothesis.",
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "The separately reported Run1-plus-2016 result, mu=0.98 +/-0.18 and 5.9 observed/expected standard deviations, reuses the 2016 data. It assumes a common strength and uncertainties fully uncorrelated between center-of-mass energies; this is the authors' combination assumption, not a demonstrated independence of all physical systematics. Earlier Run1 likelihood inputs are not independently reviewed here.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "C-phys-cms2016-tau-display-summary",
      "kind": "review-finding",
      "statement": "Figure 18 regroups observed bins by the expected S/(S+B); Figure 19 displays S/(S+B)-weighted reconstructed-mass summaries of the same data and fitted components. In Table 4, the log10(S/(S+B))>-0.9 subset contains observed counts 11,54,91,207 for e-mu, e-tau_h, mu-tau_h and tau_h tau_h; expected component counts and totals remain reported post-fit quantities.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 22–25 (PDF 24–27), Figures 18–19 and Table 4: sensitive-bin and weighted summaries",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figures 18–19 and Table 4 are derived views of the same fit. Figure 19 excludes categories using visible mass; its weights use mass-distribution signal/background integrals excluding first/last bins. Table 4 selects only bins with log10(S/(S+B))>-0.9; post-fit expected components and model-dependent weights are not measured process labels or a second likelihood input.",
        "Some Table 4 process-row sums do not recover the printed background/signal totals within nearest displayed-digit rounding. The official CMS table repeats these values; the reviewed caption does not specify a resolving normalization. No repaired total, uncertainty quadrature, experimental-error conclusion or executable certification is admitted.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-display-summary",
      "kind": "method",
      "statement": "Form the published summaries from the same selected data and fitted component/weight model; do not promote post-fit views or unresolved Table 4 totals into independent data.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 22–25 (PDF 24–27), Figures 18–19 and Table 4: sensitive-bin and weighted summaries",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figures 18–19 and Table 4 are derived views of the same fit. Figure 19 excludes categories using visible mass; its weights use mass-distribution signal/background integrals excluding first/last bins. Table 4 selects only bins with log10(S/(S+B))>-0.9; post-fit expected components and model-dependent weights are not measured process labels or a second likelihood input.",
        "Some Table 4 process-row sums do not recover the printed background/signal totals within nearest displayed-digit rounding. The official CMS table repeats these values; the reviewed caption does not specify a resolving normalization. No repaired total, uncertainty quadrature, experimental-error conclusion or executable certification is admitted.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications."
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-coupling-context",
      "kind": "method",
      "statement": "Reuse the 2016 selections in the reported common kappa_V/kappa_f scan at mH=125.09 GeV, profile the nuisance parameters, and now include H-to-WW as signal. The cited CMS method and generic coupling framework delimit this interpretation without specifying a complete experiment-specific width/loop map.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2014-tau-method",
          "locator": "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search."
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    },
    {
      "id": "C-phys-cms2016-tau-coupling-compatibility",
      "kind": "review-finding",
      "statement": "CMS Figure 22 reports contours compatible with the Standard Model point (kappa_V,kappa_f)=(1,1) under the authors' implemented model. This is a conditional interpretation of the same 2016 data with a common fermion modifier, not a separately measured tau Yukawa or a new acquisition.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2014-tau-method",
          "locator": "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants",
          "role": "supports",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    },
    {
      "id": "M-phys-cms2016-tau-coupling-compatibility",
      "kind": "method",
      "statement": "Interpret the reported contour only within the common-modifier implementation, including its H-to-WW role change and unresolved width/loop specification; do not replace it by a generic algebraic extraction.",
      "scope": "CMS2016 tau-pair acquisition and original conditional inference; a generic narrow-resonance rate convention is distinct from the experiment-specific likelihood.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "cms2014-tau-method",
          "locator": "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants",
          "role": "method",
          "note": "Supports only the stated reconstruction, original inference or explicitly conditional rate convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:tau-pair-readout",
      "name": "Tau-pair decay readout",
      "kind": "definition",
      "description": "In the CMS tau-pair selection, tau_h denotes a reconstructed hadronic tau decay; leptonic tau decays supply electron/muon candidates and missing neutrinos. Visible decay products and missing transverse momentum supply distinct visible-mass and SVFIT tau-pair mass observables.",
      "claimIds": [
        "D-phys-tau-pair-readout"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories"
        }
      ],
      "openObligations": [
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model."
      ]
    },
    {
      "id": "phys:higgs-rate-modifiers",
      "name": "Conditional Higgs rate and coupling modifiers",
      "kind": "definition",
      "description": "For a single narrow resonance, sigma(i to H to f)=sigma_i*Gamma_f/Gamma_H. Relative to the same fixed-mass Standard Model reference, mu_if=(sigma_i/sigma_i_SM)*(Gamma_f/Gamma_f_SM)/(Gamma_H/Gamma_H_SM). The common-modifier benchmark groups vector couplings into kappa_V and fermion couplings into kappa_f under explicit loop, tensor-structure and total-width assumptions.",
      "claimIds": [
        "D-phys-higgs-rate-modifiers"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants"
        }
      ],
      "openObligations": [
        "The rate identity assumes a single narrow resonance and production-decay factorization with the same fixed-mass Standard Model reference. Coupling rescalings additionally assume specified tensor structure, loop functions and total width; rate data alone do not remove the width degeneracy."
      ]
    },
    {
      "id": "phys:cms2016-tau-acquisition-context",
      "name": "CMS 2016 tau-pair acquisition",
      "kind": "context",
      "description": "Select the 2016 CMS pp exposure at 13 TeV, 35.9 fb^-1, into tau_h tau_h, mu-tau_h, e-tau_h and e-mu final states with exclusive 0-jet, VBF and boosted categories; apply the stated triggers, object, isolation and charge selections.",
      "claimIds": [
        "M-phys-cms2016-tau-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Author version 1708.00373v2, printed pages 1–2 (PDF 3–4), Sections 1–3: 2016 exposure, detector and simulated samples"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories"
        }
      ],
      "openObligations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ]
    },
    {
      "id": "phys:cms2016-tau-response-context",
      "name": "CMS tau response and control transfers",
      "kind": "context",
      "description": "Apply simulated templates with data-constrained tau/object and missing-momentum response; use Drell–Yan, W+jets, QCD and top control regions with their stated transfer assumptions and shared nuisance constraints. Preserve the partial overlap of tau energy-scale calibration and search selections.",
      "claimIds": [
        "M-phys-cms2016-tau-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 6, 8–11 (PDF 8, 10–13), Section 7 and Figures 2–5: background control samples and transfers"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints"
        }
      ],
      "openObligations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ]
    },
    {
      "id": "phys:cms2016-tau-selected-distributions",
      "name": "CMS selected tau-decay distributions",
      "kind": "scoped-process",
      "description": "The selected data points in Figures 6–17 give channel/category reconstructed distributions for the 2016 exposure. The tau_h tau_h 0-jet input is one-dimensional; the remaining category inputs are two-dimensional. Simulated signal/background components and post-fit overlays are distinct from these observed bins.",
      "claimIds": [
        "C-phys-cms2016-tau-selected-distributions"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates"
        }
      ],
      "openObligations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ]
    },
    {
      "id": "phys:cms2016-tau-rate-context",
      "name": "CMS original tau-rate likelihood",
      "kind": "context",
      "description": "Fit the selected category bins and control regions jointly with a common H-to-tau-tau signal strength at the adopted mass 125.09 GeV. Profile yield/shape and template-bin nuisances with their stated correlations; treat H-to-WW as background for this rate and significance inference.",
      "claimIds": [
        "M-phys-cms2016-tau-rate-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints"
        }
      ],
      "openObligations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ]
    },
    {
      "id": "phys:cms2016-tau-rate-excess",
      "name": "CMS 2016 tau-rate and local excess",
      "kind": "scoped-process",
      "description": "For the 2016-only analysis at fixed mH=125.09 GeV, CMS reports mu=1.09 (+0.27/-0.26) relative to the Standard Model tau-pair rate, with local observed significance 4.9 and expected significance 4.7 standard deviations.",
      "claimIds": [
        "C-phys-cms2016-tau-rate-excess"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed page 24 (PDF 26), end of Section 9 and Section 10: Run1/2016 combination and cross-energy uncertainty assumption"
        }
      ],
      "openObligations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit."
      ]
    },
    {
      "id": "phys:cms2016-tau-display-summary",
      "name": "CMS same-fit sensitive-bin summaries",
      "kind": "scoped-process",
      "description": "Figure 18 regroups observed bins by the expected S/(S+B); Figure 19 displays S/(S+B)-weighted reconstructed-mass summaries of the same data and fitted components. In Table 4, the log10(S/(S+B))>-0.9 subset contains observed counts 11,54,91,207 for e-mu, e-tau_h, mu-tau_h and tau_h tau_h; expected component counts and totals remain reported post-fit quantities.",
      "claimIds": [
        "C-phys-cms2016-tau-display-summary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 22–25 (PDF 24–27), Figures 18–19 and Table 4: sensitive-bin and weighted summaries"
        },
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates"
        }
      ],
      "openObligations": [
        "Some Table 4 process-row sums do not recover the printed background/signal totals within nearest displayed-digit rounding. The official CMS table repeats these values; the reviewed caption does not specify a resolving normalization. No repaired total, uncertainty quadrature, experimental-error conclusion or executable certification is admitted."
      ]
    },
    {
      "id": "phys:cms2016-tau-coupling-context",
      "name": "CMS common-coupling scan conditions",
      "kind": "context",
      "description": "Reuse the 2016 selections in the reported common kappa_V/kappa_f scan at mH=125.09 GeV, profile the nuisance parameters, and now include H-to-WW as signal. The cited CMS method and generic coupling framework delimit this interpretation without specifying a complete experiment-specific width/loop map.",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change"
        },
        {
          "sourceId": "cms2014-tau-method",
          "locator": "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants"
        }
      ],
      "openObligations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted."
      ]
    },
    {
      "id": "phys:cms2016-tau-coupling-compatibility",
      "name": "CMS reported common-coupling compatibility",
      "kind": "scoped-process",
      "description": "CMS Figure 22 reports contours compatible with the Standard Model point (kappa_V,kappa_f)=(1,1) under the authors' implemented model. This is a conditional interpretation of the same 2016 data with a common fermion modifier, not a separately measured tau Yukawa or a new acquisition.",
      "claimIds": [
        "C-phys-cms2016-tau-coupling-compatibility"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2018-tau",
          "locator": "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change"
        },
        {
          "sourceId": "cms2014-tau-method",
          "locator": "Author version 1401.5041v2, printed pages 28, 31 (PDF 30, 33), coupling-scan paragraph and Figure 18: common vector/fermion modifiers and H-to-WW signal treatment"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 137–139 (PDF 149–151), Sections 10.2.2.5–10.2.3 and Equation 115: total-width assumptions, flat direction and model limitations"
        },
        {
          "sourceId": "higgs2013-coupling-framework",
          "locator": "Printed pages 140–142 (PDF 152–154), Sections 10.3–10.3.2 and Table 43: common vector/fermion modifiers with distinct total-width variants"
        }
      ],
      "openObligations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-tau-pair-readout",
      "source": "phys:lepton-fields",
      "target": "phys:tau-pair-readout",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The tau is the charged-lepton species whose visible decay products define this reconstruction convention; this relation does not make reconstructed tau_h objects stable leptons.",
      "claimIds": [
        "D-phys-lepton",
        "D-phys-tau-pair-readout"
      ]
    },
    {
      "id": "physics:tau-pair-readout-cms2016-tau-selected-distributions",
      "source": "phys:tau-pair-readout",
      "target": "phys:cms2016-tau-selected-distributions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The visible-decay and missing-momentum conventions identify the reconstructed observable; they do not expose the unobserved neutrinos.",
      "claimIds": [
        "M-phys-cms2016-tau-selected-distributions"
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "physics:cms2016-tau-acquisition-context-cms2016-tau-selected-distributions",
      "source": "phys:cms2016-tau-acquisition-context",
      "target": "phys:cms2016-tau-selected-distributions",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated exposure, triggers and exclusive selections delimit the observed bins.",
      "claimIds": [
        "M-phys-cms2016-tau-selected-distributions"
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "physics:cms2016-tau-response-context-cms2016-tau-selected-distributions",
      "source": "phys:cms2016-tau-response-context",
      "target": "phys:cms2016-tau-selected-distributions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reconstruction and calibration conditions act on the processed bins; fitted background overlays remain separate.",
      "claimIds": [
        "M-phys-cms2016-tau-selected-distributions"
      ],
      "contextIds": [
        "cms2016-tau-acquisition"
      ]
    },
    {
      "id": "physics:cms2016-tau-selected-distributions-cms2016-tau-rate-excess",
      "source": "phys:cms2016-tau-selected-distributions",
      "target": "phys:cms2016-tau-rate-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "These selected bins enter the tau signal/control likelihood, not a separate replication of its fitted result.",
      "claimIds": [
        "M-phys-cms2016-tau-rate-excess"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-response-context-cms2016-tau-rate-excess",
      "source": "phys:cms2016-tau-response-context",
      "target": "phys:cms2016-tau-rate-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Response, background transfers and shared nuisance constraints condition the inferred rate and excess.",
      "claimIds": [
        "M-phys-cms2016-tau-rate-excess"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-rate-context-cms2016-tau-rate-excess",
      "source": "phys:cms2016-tau-rate-context",
      "target": "phys:cms2016-tau-rate-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This original likelihood fixes the signal definition, mass hypothesis and local background-tail comparison.",
      "claimIds": [
        "M-phys-cms2016-tau-rate-excess"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:higgs-rate-modifiers-cms2016-tau-rate-excess",
      "source": "phys:higgs-rate-modifiers",
      "target": "phys:cms2016-tau-rate-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The normalized rate denotes production times branching fraction at fixed reference mass; it cannot by itself isolate a tau Yukawa.",
      "claimIds": [
        "M-phys-cms2016-tau-rate-excess"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-selected-distributions-cms2016-tau-display-summary",
      "source": "phys:cms2016-tau-selected-distributions",
      "target": "phys:cms2016-tau-display-summary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The summaries reuse selected data; model-selected sensitive bins do not create another sample.",
      "claimIds": [
        "M-phys-cms2016-tau-display-summary"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-rate-context-cms2016-tau-display-summary",
      "source": "phys:cms2016-tau-rate-context",
      "target": "phys:cms2016-tau-display-summary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted component and nuisance model determines post-fit overlays and weights.",
      "claimIds": [
        "M-phys-cms2016-tau-display-summary"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-rate-excess-cms2016-tau-display-summary",
      "source": "phys:cms2016-tau-rate-excess",
      "target": "phys:cms2016-tau-display-summary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported signal normalization belongs to the same fit summarized by these plots; no unresolved table total is repaired from it.",
      "claimIds": [
        "M-phys-cms2016-tau-display-summary"
      ],
      "contextIds": [
        "cms2016-tau-rate-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-selected-distributions-cms2016-tau-coupling-compatibility",
      "source": "phys:cms2016-tau-selected-distributions",
      "target": "phys:cms2016-tau-coupling-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The coupling scan reuses these selected observations in a different parameterization, not the fitted tau strength as an independent input.",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-compatibility"
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-response-context-cms2016-tau-coupling-compatibility",
      "source": "phys:cms2016-tau-response-context",
      "target": "phys:cms2016-tau-coupling-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same reconstruction, control transfers and nuisance constraints condition the reported contour.",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-compatibility"
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    },
    {
      "id": "physics:cms2016-tau-coupling-context-cms2016-tau-coupling-compatibility",
      "source": "phys:cms2016-tau-coupling-context",
      "target": "phys:cms2016-tau-coupling-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The implemented common-modifier model promotes H-to-WW to signal and retains unresolved width/loop details.",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-compatibility"
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    },
    {
      "id": "physics:higgs-rate-modifiers-cms2016-tau-coupling-compatibility",
      "source": "phys:higgs-rate-modifiers",
      "target": "phys:cms2016-tau-coupling-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The generic narrow-width rate framework exposes required width/loop assumptions; it does not reconstruct the implemented CMS contour.",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-compatibility"
      ],
      "contextIds": [
        "cms2016-tau-coupling-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "cms2016-tau-acquisition",
      "sourceId": "cms2018-tau",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physletb.2018.02.004",
      "journal": "Physics Letters B",
      "volume": "779",
      "issue": "",
      "pages": "283",
      "system": "CMS 2016 pp data at 13 TeV, 35.9 fb^-1",
      "preparation": "Select the 2016 CMS pp exposure at 13 TeV, 35.9 fb^-1, into tau_h tau_h, mu-tau_h, e-tau_h and e-mu final states with exclusive 0-jet, VBF and boosted categories; apply the stated triggers, object, isolation and charge selections.",
      "observable": "Selected tau-decay channel/category reconstructed bins, distinct from expected components.",
      "finding": "The selected data points in Figures 6–17 give channel/category reconstructed distributions for the 2016 exposure. The tau_h tau_h 0-jet input is one-dimensional; the remaining category inputs are two-dimensional. Simulated signal/background components and post-fit overlays are distinct from these observed bins.",
      "limitations": [
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "A tau_h object is a reconstructed hadronic tau decay, not a stable tau track. Neutrinos are unobserved; visible mass and SVFIT mass are different observables, and SVFIT uses missing transverse momentum and a decay/response model.",
        "The tau_h tau_h 0-jet category is one-dimensional; the other categories use the specified two-dimensional bins. VBF, boosted and 0-jet selections have mixed production composition, not separately observed pure production mechanisms.",
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search."
      ],
      "readExtent": "selected-primary-author-version-passages",
      "reviewedLocators": [
        "Author version 1708.00373v2, printed pages 1–2 (PDF 3–4), Sections 1–3: 2016 exposure, detector and simulated samples",
        "Printed pages 3–8 (PDF 5–10), Sections 4–6 and Tables 1–2: tau/object reconstruction, SVFIT and exclusive channels/categories",
        "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1708.00373v2",
      "correctionCheck": "Published author version v2 and journal identity checked. This is the original 2016 analysis, not a new reanalysis or an independently reproduced likelihood; an exhaustive later correction search is not claimed."
    },
    {
      "id": "cms2016-tau-rate-inference",
      "sourceId": "cms2018-tau",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2018.02.004",
      "journal": "Physics Letters B",
      "volume": "779",
      "issue": "",
      "pages": "283",
      "system": "CMS 2016 pp data at 13 TeV, 35.9 fb^-1",
      "preparation": "Fit the selected category bins and control regions jointly with a common H-to-tau-tau signal strength at the adopted mass 125.09 GeV. Profile yield/shape and template-bin nuisances with their stated correlations; treat H-to-WW as background for this rate and significance inference.",
      "observable": "Original joint-likelihood tau signal strength, local excess and dependent post-fit summaries.",
      "finding": "For the 2016-only analysis at fixed mH=125.09 GeV, CMS reports mu=1.09 (+0.27/-0.26) relative to the Standard Model tau-pair rate, with local observed significance 4.9 and expected significance 4.7 standard deviations.",
      "limitations": [
        "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "The 1.09 (+0.27/-0.26) strength and observed 4.9 versus expected 4.7 local standard deviations are 2016-only results. They are not an isolated tau Yukawa measurement or a posterior probability of the Higgs hypothesis.",
        "The separately reported Run1-plus-2016 result, mu=0.98 +/-0.18 and 5.9 observed/expected standard deviations, reuses the 2016 data. It assumes a common strength and uncertainties fully uncorrelated between center-of-mass energies; this is the authors' combination assumption, not a demonstrated independence of all physical systematics. Earlier Run1 likelihood inputs are not independently reviewed here.",
        "Some Table 4 process-row sums do not recover the printed background/signal totals within nearest displayed-digit rounding. The official CMS table repeats these values; the reviewed caption does not specify a resolving normalization. No repaired total, uncertainty quadrature, experimental-error conclusion or executable certification is admitted."
      ],
      "readExtent": "selected-primary-author-version-passages",
      "reviewedLocators": [
        "Printed pages 6, 8–11 (PDF 8, 10–13), Section 7 and Figures 2–5: background control samples and transfers",
        "Printed pages 12–15, 22 (PDF 14–17, 24), Section 8 and Table 3: calibration overlap, shared uncertainties and pre/post-fit constraints",
        "Printed pages 15–24 (PDF 17–26), Section 9, Figures 6–18 and Table 4: joint binned likelihood, observed bins and post-fit templates",
        "Printed pages 23–24, 26 (PDF 25–26, 28), Section 9 and Figures 20–21: fixed-mass 2016 rate/local significance and shared subchannel constraints",
        "Printed pages 22–25 (PDF 24–27), Figures 18–19 and Table 4: sensitive-bin and weighted summaries",
        "Printed page 24 (PDF 26), end of Section 9 and Section 10: Run1/2016 combination and cross-energy uncertainty assumption"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1708.00373v2",
      "correctionCheck": "Published author version v2 and journal identity checked. This is the original 2016 analysis, not a new reanalysis or an independently reproduced likelihood; an exhaustive later correction search is not claimed."
    },
    {
      "id": "cms2016-tau-coupling-inference",
      "sourceId": "cms2018-tau",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2018.02.004",
      "journal": "Physics Letters B",
      "volume": "779",
      "issue": "",
      "pages": "283",
      "system": "CMS 2016 pp data at 13 TeV, 35.9 fb^-1",
      "preparation": "Reuse the 2016 selections in the reported common kappa_V/kappa_f scan at mH=125.09 GeV, profile the nuisance parameters, and now include H-to-WW as signal. The cited CMS method and generic coupling framework delimit this interpretation without specifying a complete experiment-specific width/loop map.",
      "observable": "Reported common vector/fermion modifier compatibility from the same selected data.",
      "finding": "CMS Figure 22 reports contours compatible with the Standard Model point (kappa_V,kappa_f)=(1,1) under the authors' implemented model. This is a conditional interpretation of the same 2016 data with a common fermion modifier, not a separately measured tau Yukawa or a new acquisition.",
      "limitations": [
        "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "Signal/background simulation, data calibration, control-region transfer assumptions and template-bin uncertainties remain required. Less than half of the Z-to-tau-tau energy-scale calibration sample overlaps the mu-tau_h selection; auxiliary controls are not all independent of the search."
      ],
      "readExtent": "selected-primary-author-version-passages",
      "reviewedLocators": [
        "Printed pages 23–24, 27 (PDF 25–26, 29), Section 9 and Figure 22: common-modifier scan and H-to-WW role change"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1708.00373v2",
      "correctionCheck": "Published author version v2 and journal identity checked. This is the original 2016 analysis, not a new reanalysis or an independently reproduced likelihood; an exhaustive later correction search is not claimed."
    }
  ],
  "comparisons": [
    {
      "id": "cms2016-tau-rate-interpretation",
      "candidate": "The original 2016 likelihood supports an H-to-tau-tau rate/excess under the stated signal, response and background model.",
      "alternative": "Selected candidates are all identified signal decays, post-fit views are independent replications, or the stronger Run1 combination is a 2016-only result.",
      "discriminator": "Separate selected bins, shared response/control constraints, original 2016 likelihood and dependent display/combination stages.",
      "result": "conditional-support",
      "limit": "The joint signal/control likelihood, response templates, fitted nuisance covariance and background-tail calibration are not reproduced. H-to-WW is background in the tau signal-strength/significance fit.",
      "assumptions": [
        "The 1.09 (+0.27/-0.26) strength and observed 4.9 versus expected 4.7 local standard deviations are 2016-only results. They are not an isolated tau Yukawa measurement or a posterior probability of the Higgs hypothesis.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "The fit adopts mH=125.09 GeV from the cited earlier mass combination. It does not measure this mass anew and does not substitute the historical ATLAS2012 mass result.",
        "The separately reported Run1-plus-2016 result, mu=0.98 +/-0.18 and 5.9 observed/expected standard deviations, reuses the 2016 data. It assumes a common strength and uncertainties fully uncorrelated between center-of-mass energies; this is the authors' combination assumption, not a demonstrated independence of all physical systematics. Earlier Run1 likelihood inputs are not independently reviewed here.",
        "Figures 18–19 and Table 4 are derived views of the same fit. Figure 19 excludes categories using visible mass; its weights use mass-distribution signal/background integrals excluding first/last bins. Table 4 selects only bins with log10(S/(S+B))>-0.9; post-fit expected components and model-dependent weights are not measured process labels or a second likelihood input.",
        "Some Table 4 process-row sums do not recover the printed background/signal totals within nearest displayed-digit rounding. The official CMS table repeats these values; the reviewed caption does not specify a resolving normalization. No repaired total, uncertainty quadrature, experimental-error conclusion or executable certification is admitted."
      ],
      "sourceIds": [
        "cms2018-tau"
      ],
      "claimIds": [
        "C-phys-cms2016-tau-selected-distributions",
        "C-phys-cms2016-tau-rate-excess",
        "C-phys-cms2016-tau-display-summary"
      ]
    },
    {
      "id": "cms2016-tau-coupling-interpretation",
      "candidate": "The reported common-modifier contour is compatible with the Standard Model within the authors' implemented model.",
      "alternative": "This contour supplies an isolated tau Yukawa, uniquely specifies total width/loop choices or derives every fermion mass.",
      "discriminator": "Keep common kappa_f, the H-to-WW role change and generic rate/width assumptions explicit without filling the unreported implementation choices.",
      "result": "conditional-support",
      "limit": "Figure 22 reports compatibility under the authors' implemented width/loop map, which is not fully specified in the reviewed passages. kappa_f is a common fermion modifier, not an independently varied tau Yukawa. H-to-WW is treated as signal in this scan, unlike the tau-only rate fit. No contour digitization, unique coupling extraction or all-fermion mass derivation is admitted.",
      "assumptions": [
        "The rate identity assumes a single narrow resonance and production-decay factorization with the same fixed-mass Standard Model reference. Coupling rescalings additionally assume specified tensor structure, loop functions and total width; rate data alone do not remove the width degeneracy.",
        "The handbook distinguishes a width built from scaled Standard Model partial widths from variants allowing an independent width. Its generic identity and examples do not identify or reconstruct the exact CMS2018 implemented width/loop map.",
        "The source specifies 2016, not exact acquisition dates. Channel/category fits, post-fit plots and the coupling scan reuse this exposure and shared nuisance constraints; they are not independent replications.",
        "This channel evidence and conditional coupling interpretation do not derive all masses, establish the full scalar potential or vacuum stability, or supply arbitrary graph parent/minimum rules."
      ],
      "sourceIds": [
        "cms2018-tau",
        "cms2014-tau-method",
        "higgs2013-coupling-framework"
      ],
      "claimIds": [
        "D-phys-higgs-rate-modifiers",
        "C-phys-cms2016-tau-coupling-compatibility"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:tau-pair-readout",
      "role": "definition",
      "denotes": "In the CMS tau-pair selection, tau_h denotes a reconstructed hadronic tau decay; leptonic tau decays supply electron/muon candidates and missing neutrinos. Visible decay products and missing transverse momentum supply distinct visible-mass and SVFIT tau-pair mass observables.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-tau-pair-readout"
      ]
    },
    {
      "nodeId": "phys:higgs-rate-modifiers",
      "role": "definition",
      "denotes": "For a single narrow resonance, sigma(i to H to f)=sigma_i*Gamma_f/Gamma_H. Relative to the same fixed-mass Standard Model reference, mu_if=(sigma_i/sigma_i_SM)*(Gamma_f/Gamma_f_SM)/(Gamma_H/Gamma_H_SM). The common-modifier benchmark groups vector couplings into kappa_V and fermion couplings into kappa_f under explicit loop, tensor-structure and total-width assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-higgs-rate-modifiers"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-acquisition-context",
      "role": "experimental-context",
      "denotes": "Select the 2016 CMS pp exposure at 13 TeV, 35.9 fb^-1, into tau_h tau_h, mu-tau_h, e-tau_h and e-mu final states with exclusive 0-jet, VBF and boosted categories; apply the stated triggers, object, isolation and charge selections.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2016-tau-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-response-context",
      "role": "model-context",
      "denotes": "Apply simulated templates with data-constrained tau/object and missing-momentum response; use Drell–Yan, W+jets, QCD and top control regions with their stated transfer assumptions and shared nuisance constraints. Preserve the partial overlap of tau energy-scale calibration and search selections.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2016-tau-response-context"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-selected-distributions",
      "role": "scoped-phenomenon",
      "denotes": "The selected data points in Figures 6–17 give channel/category reconstructed distributions for the 2016 exposure. The tau_h tau_h 0-jet input is one-dimensional; the remaining category inputs are two-dimensional. Simulated signal/background components and post-fit overlays are distinct from these observed bins.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2016-tau-selected-distributions"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-rate-context",
      "role": "model-context",
      "denotes": "Fit the selected category bins and control regions jointly with a common H-to-tau-tau signal strength at the adopted mass 125.09 GeV. Profile yield/shape and template-bin nuisances with their stated correlations; treat H-to-WW as background for this rate and significance inference.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2016-tau-rate-context"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-rate-excess",
      "role": "scoped-phenomenon",
      "denotes": "For the 2016-only analysis at fixed mH=125.09 GeV, CMS reports mu=1.09 (+0.27/-0.26) relative to the Standard Model tau-pair rate, with local observed significance 4.9 and expected significance 4.7 standard deviations.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2016-tau-rate-excess"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-display-summary",
      "role": "scoped-phenomenon",
      "denotes": "Figure 18 regroups observed bins by the expected S/(S+B); Figure 19 displays S/(S+B)-weighted reconstructed-mass summaries of the same data and fitted components. In Table 4, the log10(S/(S+B))>-0.9 subset contains observed counts 11,54,91,207 for e-mu, e-tau_h, mu-tau_h and tau_h tau_h; expected component counts and totals remain reported post-fit quantities.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2016-tau-display-summary"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-coupling-context",
      "role": "model-context",
      "denotes": "Reuse the 2016 selections in the reported common kappa_V/kappa_f scan at mH=125.09 GeV, profile the nuisance parameters, and now include H-to-WW as signal. The cited CMS method and generic coupling framework delimit this interpretation without specifying a complete experiment-specific width/loop map.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2016-tau-coupling-context"
      ]
    },
    {
      "nodeId": "phys:cms2016-tau-coupling-compatibility",
      "role": "scoped-phenomenon",
      "denotes": "CMS Figure 22 reports contours compatible with the Standard Model point (kappa_V,kappa_f)=(1,1) under the authors' implemented model. This is a conditional interpretation of the same 2016 data with a common fermion modifier, not a separately measured tau Yukawa or a new acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2016-tau-coupling-compatibility"
      ]
    }
  ]
};

/** Preserve the original rate fit and the separate conditional common-coupling interpretation. */
export function validateHiggsTauContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing Higgs-tau ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Higgs-tau ${kind} changed ${id}.${key}: preserve acquisition and conditional inference scope`);
    }
  }
}
