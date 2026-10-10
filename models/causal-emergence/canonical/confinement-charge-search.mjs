import assert from "node:assert/strict";

export const CONFINEMENT_CHARGE_SEARCH_CHECKS = new Map();
export const CONFINEMENT_CHARGE_SEARCH_ANALYTICAL_SOURCES = new Map();
export const CONFINEMENT_CHARGE_SEARCH_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "cms2013-fcp-acquisition-context",
      "M-phys-cms2013-fcp-acquisition-context",
      [
        "cms2013-fcp-acquisition"
      ]
    ],
    [
      "cms2013-fcp-response-context",
      "M-phys-cms2013-fcp-response-context",
      [
        "cms2013-fcp-response"
      ]
    ],
    [
      "cms2013-fcp-inference-context",
      "M-phys-cms2013-fcp-inference-context",
      [
        "cms2013-fcp-inference"
      ]
    ]
  ],
  "observations": [
    [
      "cms2013-fcp-selected-count",
      "C-phys-cms2013-fcp-selected-count",
      [
        "cms2013-fcp-acquisition"
      ]
    ],
    [
      "cms2013-fcp-limits",
      "C-phys-cms2013-fcp-limits",
      [
        "cms2013-fcp-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "cms2013-fcp-acquisition-context-cms2013-fcp-selected-count",
      "cms2013-fcp-acquisition-context",
      "cms2013-fcp-selected-count",
      "M-phys-cms2013-fcp-selected-count",
      "measurement-context"
    ],
    [
      "cms2013-fcp-response-context-cms2013-fcp-selected-count",
      "cms2013-fcp-response-context",
      "cms2013-fcp-selected-count",
      "M-phys-cms2013-fcp-selected-count",
      "interpretation-dependency"
    ],
    [
      "cms2013-fcp-acquisition-context-cms2013-fcp-limits",
      "cms2013-fcp-acquisition-context",
      "cms2013-fcp-limits",
      "M-phys-cms2013-fcp-limits",
      "measurement-context"
    ],
    [
      "cms2013-fcp-response-context-cms2013-fcp-limits",
      "cms2013-fcp-response-context",
      "cms2013-fcp-limits",
      "M-phys-cms2013-fcp-limits",
      "interpretation-dependency"
    ],
    [
      "cms2013-fcp-inference-context-cms2013-fcp-limits",
      "cms2013-fcp-inference-context",
      "cms2013-fcp-limits",
      "M-phys-cms2013-fcp-limits",
      "interpretation-dependency"
    ],
    [
      "cms2013-fcp-selected-count-cms2013-fcp-limits",
      "cms2013-fcp-selected-count",
      "cms2013-fcp-limits",
      "M-phys-cms2013-fcp-limits",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "cms2013-fcp-acquisition",
    "cms2013-fcp-response",
    "cms2013-fcp-inference"
  ],
  "comparisonIds": [
    "cms2013-fcp-benchmark-limits"
  ],
  "localStudySources": [],
  "inferenceSources": []
};

const contracts = {
  "sources": [
    {
      "id": "cms2013-fcp",
      "kind": "research-publication",
      "title": "Search for fractionally charged particles in pp collisions at sqrt(s) = 7 TeV",
      "authors": [
        "CMS Collaboration"
      ],
      "year": 2013,
      "doi": "10.1103/PhysRevD.87.092008",
      "url": "https://arxiv.org/abs/1210.2311v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-scientific-body",
        "locators": [
          "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
          "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency",
          "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions"
        ],
        "limit": "Read author v2 printed pages 1-11, including the complete scientific body and references; the collaboration roster is not evidence. Visually checked the selection, background formula, Tables 1-3 and Figure 3. ArXiv identifies v2 as replaced with the published version. No event records, detector simulation or CLs construction are replayed; this selected historical search is not a current-limit census."
      }
    },
    {
      "id": "lee2002",
      "kind": "research-publication",
      "title": "Large bulk matter search for fractional charge particles",
      "authors": [
        "Irwin T. Lee",
        "Sewan Fan",
        "Valerie Halyo",
        "Eric R. Lee",
        "Peter C. Kim",
        "Martin L. Perl",
        "Howard Rogers",
        "Dinesh Loomba",
        "Klaus S. Lackner",
        "Gordon Shaw"
      ],
      "year": 2002,
      "doi": "10.1103/PhysRevD.66.012002",
      "url": "https://doi.org/10.1103/PhysRevD.66.012002",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I",
          "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
          "Published pages 012002-1 and 012002-9, abstract, Introduction and Section V A: quoted charge window and abundance limit, material-processing restriction and limits of comparison; Table III",
          "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound"
        ],
        "limit": "Complete published ten-page article read, including appendix and references; pages 1, 5-6 and 8-9 visually checked. Figure 9 labels a modulo-one distribution q_c although the text defines q_r. The abstract/Introduction and Section IV B give different charge windows for the same upper limit; only their common 0.18-0.82 window is admitted for the reported bound. Raw trajectories, selection and confidence-limit normalization have not been independently reproduced. Author v2 pages 1 and 6-10 were rechecked, with Tables II-III visually checked: cut totals differ from the published values retained here, and no explicit confidence construction is supplied. The author version does not replace the selected published sample."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-cms2013-fcp-acquisition-context",
      "kind": "method",
      "statement": "The search uses 5.0 fb^-1 of CMS pp collisions at sqrt(s)=7 TeV recorded in 2011. Single-muon triggering requires reconstructed pT>40 GeV and |eta|<2.1. Offline tracks matched to muon detectors require reconstructed pT>45 GeV, |eta|<1.5, track quality and isolation, at least six tracker ionization measurements including two pixel measurements, and collision-time/impact-parameter cuts.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Momentum is reconstructed assuming unit electric charge: pT_reco=pT_true/|q|. The 40 GeV trigger corresponds to about 27 GeV for |q|=2/3 and 13 GeV for |q|=1/3; the selected tracks are not an unbiased sample of produced particles.",
        "The 80<m_LL<100 GeV two-candidate region is excluded from the search sample and used in a separate control selection. One-candidate events remain; events with more than two candidates are excluded.",
        "This collider acquisition is distinct from Lee silicone oil. Other analyses of the 2011 CMS running period are not automatically independent replications; no samples or significances are pooled."
      ],
      "contextIds": [
        "cms2013-fcp-acquisition"
      ]
    },
    {
      "id": "M-phys-cms2013-fcp-response-context",
      "kind": "method",
      "statement": "The benchmark is pair-produced spin-1/2 particles with electric charges +/-e/3 or +/-2e/3, singlets under SU(3)c and SU(2)L, assumed not to decay within the detector. Modified Drell-Yan photon/Z production is simulated with PYTHIA 6.422, leading-order CTEQ6L1 parton distributions and GEANT4 detector response for masses 100-600 GeV. At least six retained tracker measurements with dE/dx<2 MeV/cm define the signal region.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Low ionization and finite hit thresholds make trigger, reconstruction and selected velocity distributions charge- and mass-dependent. Table 3 gives event efficiencies at 100 GeV of 0.341 +/- 0.026 for |q|=2/3 and 0.041 +/- 0.007 for |q|=1/3; neither is a universal charge acceptance.",
        "Sensor-edge measurements are removed. Signal-region optimization uses simulated 100 and 400 GeV samples; simulated signal efficiencies are distinct from the data-driven background prediction.",
        "Table 1 reports total signal-efficiency systematic uncertainties of 8% for |q|=2/3 and 18% for |q|=1/3. No simulation, nuisance covariance or detector response is independently reconstructed.",
        "The benchmark particles have no QCD color charge. Detector-scale survival is assumed, not a measured lifetime or permanent stability; the result is not a search for arbitrary free colored quarks."
      ],
      "contextIds": [
        "cms2013-fcp-response"
      ]
    },
    {
      "id": "M-phys-cms2013-fcp-inference-context",
      "kind": "method",
      "statement": "Cosmic-ray control selections with inverted impact parameters predict 0.007 +/- 0.006 events. A scaled Z-peak control sample is fitted in zero-to-five low-ionization measurements using a generalized binomial form and extrapolated to the signal region, predicting 0.005 +/- 0.004 pp events. The reported total is 0.012 +/- 0.007. The paper uses CLs for 95% production-cross-section upper limits and compares them with the benchmark leading-order cross section to obtain mass exclusions.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The extrapolation assumes that the control-sample ionization statistics describe the selected collision background; alternative functions, fitted-parameter uncertainty and search/control differences contribute to its uncertainty. Cosmic background is separately constrained.",
        "The 2.2% luminosity uncertainty and charge-dependent signal-efficiency systematics accompany the background estimate. The paper identifies the CLs criterion but a local likelihood, nuisance treatment and confidence-calibration replay are not supplied.",
        "The background prediction is not an observed fractional-charge count. A cross-section limit depends on selection and efficiency; a mass exclusion additionally depends on the specified production model."
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "C-phys-cms2013-fcp-selected-count",
      "kind": "review-finding",
      "statement": "CMS reports zero events in the signal region containing a selected track with at least six retained tracker measurements below 2 MeV/cm. Figure 2 also reports no search-sample track with five or more such measurements. This is the selected event count before a subtraction of the predicted 0.012 +/- 0.007 background.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "role": "supports",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The observed event count and the number of low-ionization measurements on a track are different quantities. The absence of tracks with five or more measurements is not a replacement for the predefined six-measurement signal region.",
        "The null is restricted to the trigger, reconstruction and event selection; it does not establish zero abundance or an absence of all fractional or color-charged particles."
      ],
      "contextIds": [
        "cms2013-fcp-acquisition"
      ]
    },
    {
      "id": "C-phys-cms2013-fcp-limits",
      "kind": "review-finding",
      "statement": "For the stated detector-stable spin-1/2 SU(3)c/SU(2)L-singlet benchmark, CMS reports 95% CLs cross-section upper limits over masses 100-600 GeV: 1.7-2.3 fb for |q|=2/3 and 14-5.4 fb for |q|=1/3. Comparing with its modified Drell-Yan prediction excludes benchmark masses below 310 GeV and 140 GeV, respectively, at the reported 95% confidence level.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency",
          "role": "supports",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "role": "supports",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions",
          "role": "supports",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted ranges and charge ordering are retained as reported. The mass thresholds are model-conditional exclusions, not fitted particle masses, a lifetime measurement or model-independent limits at arbitrary charges.",
        "The observed and expected curves in Figure 3 overlap in this zero-event search; they are not independent measurements or replications. No CLs or interpolation replay is claimed.",
        "Lee constrains particles retained in processed silicone oil; CMS constrains collider production and acceptance for different hypotheses. These bounds are not pooled, converted into a common abundance, or treated as direct evidence of QCD color confinement."
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "M-phys-cms2013-fcp-selected-count",
      "kind": "method",
      "statement": "The observed count uses the specified trigger, track and low-ionization event selection; simulated efficiency is not an observed event.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No detector, background-fit or confidence-limit replay is claimed."
      ],
      "contextIds": [
        "cms2013-fcp-acquisition"
      ]
    },
    {
      "id": "M-phys-cms2013-fcp-limits",
      "kind": "method",
      "statement": "The selected count, exposure, signal response and control-sample background enter the published CLs interpretation; benchmark production supplies the additional mass conversion.",
      "scope": "Fractional electric-charge searches in a selected silicone-oil sample and a specified CMS collider benchmark",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions",
          "role": "method",
          "note": "Supports the stated selection, response or conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No detector, background-fit or confidence-limit replay is claimed."
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "D-phys-fractional-charge-residual",
      "kind": "review-finding",
      "statement": "For a measured drop charge q=Q/e, define q_r=q-floor(q). The fractional residual tests departure from integer electric charge; q_c=q-nearest_integer(q) instead centers the individual integer peaks.",
      "scope": "Lee Introduction and Section IV B; modulo-one convention at integer endpoints.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "q=Q/e is electric charge in electron-charge-magnitude units. It is not QCD color charge or an observable of neutral colored objects.",
        "q_r=q-floor(q) lies in [0,1). The centered residual q_c=q-nearest_integer(q) has a different range; Figure 9's q_c caption is inconsistent with its modulo-one axis and the Section IV B definition.",
        "A charge window is a measurement acceptance condition, not a particle species, minimum constituent count or universal absence statement."
      ]
    },
    {
      "id": "M-phys-lee2002-context",
      "kind": "method",
      "statement": "A modified Millikan oil-drop experiment measures horizontal trajectories in an alternating electric field while upward air flow slows the drops. The final selected sample contains 70.1 mg of processed silicone oil in 16,807,644 drops with average diameter approximately 20.6 micrometers.",
      "scope": "Declared preparation, sampling and readout.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound",
          "role": "limits",
          "note": "The author version is checked separately; source-version and confidence-normalization limits remain explicit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
        "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
        "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
        "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
        "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed.",
        "Author v2 Table II gives joint rejections 22.3% and 8.7%, differing from the selected published values 21.0% and 9.4%. These versions are not mixed to recompute the final 70.1 mg sample or acceptance."
      ],
      "contextIds": [
        "lee2002"
      ]
    },
    {
      "id": "C-phys-lee-charge-null",
      "kind": "review-finding",
      "statement": "The final 70.1 mg silicone-oil sample shows integer electric-charge peaks and no accepted drop more than 0.15 e from the nearest integer. The result uses the stated cuts without background subtraction.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound",
          "role": "limits",
          "note": "The author version is checked separately; source-version and confidence-normalization limits remain explicit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
        "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
        "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
        "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
        "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed.",
        "Section IV B reports no accepted drop farther than 0.15 e from the nearest integer, with no background subtraction. The modulo-one gap is described as 0.15-0.85; the narrower 0.18-0.82 interval is used for the admitted published bound.",
        "The earlier 17.4 mg experiment contained an anomalous drop that this search did not confirm. These samples are not pooled, and the earlier event is not established to be an artifact.",
        "Author v2 Table II gives joint rejections 22.3% and 8.7%, differing from the selected published values 21.0% and 9.4%. These versions are not mixed to recompute the final 70.1 mg sample or acceptance."
      ],
      "contextIds": [
        "lee2002"
      ]
    },
    {
      "id": "C-phys-lee-abundance-limit",
      "kind": "review-finding",
      "statement": "The authors report a 95% confidence upper limit of 1.17 x 10^-22 fractional-charge particles per nucleon in silicone oil for 0.18<=q_r<=0.82. The graph records the published limit with its unresolved normalization and material restrictions.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 and 012002-9, abstract, Introduction and Section V A: quoted charge window and abundance limit, material-processing restriction and limits of comparison; Table III",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound",
          "role": "limits",
          "note": "The author version is checked separately; source-version and confidence-normalization limits remain explicit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
        "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
        "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
        "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species.",
        "The reviewed author v2 also states the bound without a confidence-construction formula or effective-exposure prescription. Its Table III caption quotes 6.4 x 10^20 nucleons per milligram; that printed conversion is not adopted to reconstruct the bound."
      ],
      "contextIds": [
        "lee2002"
      ]
    },
    {
      "id": "M-phys-lee-abundance-limit",
      "kind": "method",
      "statement": "The selected charge distribution contains no event in the admitted interval; confidence-limit construction and retention outside this material require separate information.",
      "scope": "Conditional interpretation of the declared computational or experimental output.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 and 012002-9, abstract, Introduction and Section V A: quoted charge window and abundance limit, material-processing restriction and limits of comparison; Table III",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
          "role": "method",
          "note": "The reviewed methods and result passage supplies the correlated readout and fitting context."
        },
        {
          "sourceId": "lee2002",
          "locator": "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound",
          "role": "limits",
          "note": "The author version is checked separately; source-version and confidence-normalization limits remain explicit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
        "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
        "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
        "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species.",
        "The reviewed author v2 also states the bound without a confidence-construction formula or effective-exposure prescription. Its Table III caption quotes 6.4 x 10^20 nucleons per milligram; that printed conversion is not adopted to reconstruct the bound."
      ],
      "contextIds": [
        "lee2002"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:cms2013-fcp-acquisition-context",
      "name": "CMS fractionally charged search preparation",
      "kind": "context",
      "description": "The search uses 5.0 fb^-1 of CMS pp collisions at sqrt(s)=7 TeV recorded in 2011. Single-muon triggering requires reconstructed pT>40 GeV and |eta|<2.1. Offline tracks matched to muon detectors require reconstructed pT>45 GeV, |eta|<1.5, track quality and isolation, at least six tracker ionization measurements including two pixel measurements, and collision-time/impact-parameter cuts.",
      "claimIds": [
        "M-phys-cms2013-fcp-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection"
        }
      ],
      "openObligations": [
        "Momentum is reconstructed assuming unit electric charge: pT_reco=pT_true/|q|. The 40 GeV trigger corresponds to about 27 GeV for |q|=2/3 and 13 GeV for |q|=1/3; the selected tracks are not an unbiased sample of produced particles.",
        "The 80<m_LL<100 GeV two-candidate region is excluded from the search sample and used in a separate control selection. One-candidate events remain; events with more than two candidates are excluded.",
        "This collider acquisition is distinct from Lee silicone oil. Other analyses of the 2011 CMS running period are not automatically independent replications; no samples or significances are pooled."
      ]
    },
    {
      "id": "phys:cms2013-fcp-response-context",
      "name": "CMS low-ionization signal response",
      "kind": "context",
      "description": "The benchmark is pair-produced spin-1/2 particles with electric charges +/-e/3 or +/-2e/3, singlets under SU(3)c and SU(2)L, assumed not to decay within the detector. Modified Drell-Yan photon/Z production is simulated with PYTHIA 6.422, leading-order CTEQ6L1 parton distributions and GEANT4 detector response for masses 100-600 GeV. At least six retained tracker measurements with dE/dx<2 MeV/cm define the signal region.",
      "claimIds": [
        "M-phys-cms2013-fcp-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection"
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency"
        }
      ],
      "openObligations": [
        "Low ionization and finite hit thresholds make trigger, reconstruction and selected velocity distributions charge- and mass-dependent. Table 3 gives event efficiencies at 100 GeV of 0.341 +/- 0.026 for |q|=2/3 and 0.041 +/- 0.007 for |q|=1/3; neither is a universal charge acceptance.",
        "Sensor-edge measurements are removed. Signal-region optimization uses simulated 100 and 400 GeV samples; simulated signal efficiencies are distinct from the data-driven background prediction.",
        "Table 1 reports total signal-efficiency systematic uncertainties of 8% for |q|=2/3 and 18% for |q|=1/3. No simulation, nuisance covariance or detector response is independently reconstructed.",
        "The benchmark particles have no QCD color charge. Detector-scale survival is assumed, not a measured lifetime or permanent stability; the result is not a search for arbitrary free colored quarks."
      ]
    },
    {
      "id": "phys:cms2013-fcp-inference-context",
      "name": "CMS fractional-charge limit inference",
      "kind": "context",
      "description": "Cosmic-ray control selections with inverted impact parameters predict 0.007 +/- 0.006 events. A scaled Z-peak control sample is fitted in zero-to-five low-ionization measurements using a generalized binomial form and extrapolated to the signal region, predicting 0.005 +/- 0.004 pp events. The reported total is 0.012 +/- 0.007. The paper uses CLs for 95% production-cross-section upper limits and compares them with the benchmark leading-order cross section to obtain mass exclusions.",
      "claimIds": [
        "M-phys-cms2013-fcp-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion"
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions"
        }
      ],
      "openObligations": [
        "The extrapolation assumes that the control-sample ionization statistics describe the selected collision background; alternative functions, fitted-parameter uncertainty and search/control differences contribute to its uncertainty. Cosmic background is separately constrained.",
        "The 2.2% luminosity uncertainty and charge-dependent signal-efficiency systematics accompany the background estimate. The paper identifies the CLs criterion but a local likelihood, nuisance treatment and confidence-calibration replay are not supplied.",
        "The background prediction is not an observed fractional-charge count. A cross-section limit depends on selection and efficiency; a mass exclusion additionally depends on the specified production model."
      ]
    },
    {
      "id": "phys:cms2013-fcp-selected-count",
      "name": "CMS selected fractional-charge candidate count",
      "kind": "scoped-process",
      "description": "CMS reports zero events in the signal region containing a selected track with at least six retained tracker measurements below 2 MeV/cm. Figure 2 also reports no search-sample track with five or more such measurements. This is the selected event count before a subtraction of the predicted 0.012 +/- 0.007 background.",
      "claimIds": [
        "C-phys-cms2013-fcp-selected-count"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion"
        }
      ],
      "openObligations": [
        "The observed event count and the number of low-ionization measurements on a track are different quantities. The absence of tracks with five or more measurements is not a replacement for the predefined six-measurement signal region.",
        "The null is restricted to the trigger, reconstruction and event selection; it does not establish zero abundance or an absence of all fractional or color-charged particles."
      ]
    },
    {
      "id": "phys:cms2013-fcp-limits",
      "name": "CMS conditional fractional-charge limits",
      "kind": "scoped-process",
      "description": "For the stated detector-stable spin-1/2 SU(3)c/SU(2)L-singlet benchmark, CMS reports 95% CLs cross-section upper limits over masses 100-600 GeV: 1.7-2.3 fb for |q|=2/3 and 14-5.4 fb for |q|=1/3. Comparing with its modified Drell-Yan prediction excludes benchmark masses below 310 GeV and 140 GeV, respectively, at the reported 95% confidence level.",
      "claimIds": [
        "C-phys-cms2013-fcp-limits"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency"
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion"
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions"
        }
      ],
      "openObligations": [
        "The quoted ranges and charge ordering are retained as reported. The mass thresholds are model-conditional exclusions, not fitted particle masses, a lifetime measurement or model-independent limits at arbitrary charges.",
        "The observed and expected curves in Figure 3 overlap in this zero-event search; they are not independent measurements or replications. No CLs or interpolation replay is claimed.",
        "Lee constrains particles retained in processed silicone oil; CMS constrains collider production and acceptance for different hypotheses. These bounds are not pooled, converted into a common abundance, or treated as direct evidence of QCD color confinement."
      ]
    },
    {
      "id": "phys:fractional-charge-residual",
      "name": "Electric-charge residual modulo one",
      "kind": "definition",
      "description": "For a measured drop charge q=Q/e, define q_r=q-floor(q). The fractional residual tests departure from integer electric charge; q_c=q-nearest_integer(q) instead centers the individual integer peaks.",
      "claimIds": [
        "D-phys-fractional-charge-residual"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I"
        },
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16"
        }
      ],
      "openObligations": [
        "The modulo-one electric-charge residual is distinct from the centered residual and from QCD color charge."
      ]
    },
    {
      "id": "phys:lee2002-context",
      "name": "Lee silicone-oil electric-charge search context",
      "kind": "context",
      "description": "A modified Millikan oil-drop experiment measures horizontal trajectories in an alternating electric field while upward air flow slows the drops. The final selected sample contains 70.1 mg of processed silicone oil in 16,807,644 drops with average diameter approximately 20.6 micrometers.",
      "claimIds": [
        "M-phys-lee2002-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I"
        },
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16"
        }
      ],
      "openObligations": [
        "Author v2 Table II gives joint rejections 22.3% and 8.7%, differing from the selected published values 21.0% and 9.4%. These versions are not mixed to recompute the final 70.1 mg sample or acceptance.",
        "The final sample already follows the overlapping cuts; raw trajectories and calibrations are not replayed."
      ]
    },
    {
      "id": "phys:lee-charge-null",
      "name": "Lee selected-drop fractional-charge null",
      "kind": "scoped-process",
      "description": "The final 70.1 mg silicone-oil sample shows integer electric-charge peaks and no accepted drop more than 0.15 e from the nearest integer. The result uses the stated cuts without background subtraction.",
      "claimIds": [
        "C-phys-lee-charge-null"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16"
        }
      ],
      "openObligations": [
        "Keep the observed 0.15-0.85 gap distinct from the admitted 0.18-0.82 confidence-limit window; the earlier anomalous drop is neither pooled nor proved spurious."
      ]
    },
    {
      "id": "phys:lee-abundance-limit",
      "name": "Lee reported fractional-charge abundance limit",
      "kind": "scoped-process",
      "description": "The authors report a 95% confidence upper limit of 1.17 x 10^-22 fractional-charge particles per nucleon in silicone oil for 0.18<=q_r<=0.82. The graph records the published limit with its unresolved normalization and material restrictions.",
      "claimIds": [
        "C-phys-lee-abundance-limit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lee2002",
          "locator": "Published pages 012002-1 and 012002-9, abstract, Introduction and Section V A: quoted charge window and abundance limit, material-processing restriction and limits of comparison; Table III"
        }
      ],
      "openObligations": [
        "The reviewed author v2 also states the bound without a confidence-construction formula or effective-exposure prescription. Its Table III caption quotes 6.4 x 10^20 nucleons per milligram; that printed conversion is not adopted to reconstruct the bound.",
        "The reported bound applies to the stated processed-oil sample and charge window; no universal abundance or color-confinement theorem follows."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:cms2013-fcp-acquisition-context-cms2013-fcp-selected-count",
      "source": "phys:cms2013-fcp-acquisition-context",
      "target": "phys:cms2013-fcp-selected-count",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The exposure and trigger/track cuts define the events included in the observed count.",
      "claimIds": [
        "M-phys-cms2013-fcp-selected-count"
      ],
      "contextIds": [
        "cms2013-fcp-acquisition"
      ]
    },
    {
      "id": "physics:cms2013-fcp-response-context-cms2013-fcp-selected-count",
      "source": "phys:cms2013-fcp-response-context",
      "target": "phys:cms2013-fcp-selected-count",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared low-ionization readout and signal-region definition specify the selected count; simulated signal efficiencies do not generate observed events.",
      "claimIds": [
        "M-phys-cms2013-fcp-selected-count"
      ],
      "contextIds": [
        "cms2013-fcp-acquisition"
      ]
    },
    {
      "id": "physics:cms2013-fcp-acquisition-context-cms2013-fcp-limits",
      "source": "phys:cms2013-fcp-acquisition-context",
      "target": "phys:cms2013-fcp-limits",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The 5.0 fb^-1 exposure and selected event preparation enter the production-limit interpretation.",
      "claimIds": [
        "M-phys-cms2013-fcp-limits"
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "physics:cms2013-fcp-response-context-cms2013-fcp-limits",
      "source": "phys:cms2013-fcp-response-context",
      "target": "phys:cms2013-fcp-limits",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Charge- and mass-dependent event efficiencies connect a candidate production cross section to the expected selected signal; the benchmark prediction additionally supplies the mass exclusion.",
      "claimIds": [
        "M-phys-cms2013-fcp-limits"
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "physics:cms2013-fcp-inference-context-cms2013-fcp-limits",
      "source": "phys:cms2013-fcp-inference-context",
      "target": "phys:cms2013-fcp-limits",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The control-sample background and published CLs construction supply the conditional confidence interpretation.",
      "claimIds": [
        "M-phys-cms2013-fcp-limits"
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "physics:cms2013-fcp-selected-count-cms2013-fcp-limits",
      "source": "phys:cms2013-fcp-selected-count",
      "target": "phys:cms2013-fcp-limits",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same observed zero count enters the reported limits; the limits are not a new acquisition.",
      "claimIds": [
        "M-phys-cms2013-fcp-limits"
      ],
      "contextIds": [
        "cms2013-fcp-inference"
      ]
    },
    {
      "id": "physics:lee-charge-readout",
      "source": "phys:lee2002-context",
      "target": "phys:lee-charge-null",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The selected oil-drop preparation and calibrated trajectory readout supply the observed electric-charge distribution.",
      "claimIds": [
        "M-phys-lee2002-context"
      ],
      "contextIds": [
        "lee2002"
      ]
    },
    {
      "id": "physics:residual-lee-charge",
      "source": "phys:fractional-charge-residual",
      "target": "phys:lee-charge-null",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The centered and modulo-one residual definitions identify the integer peaks and intervening observed gap; neither residual denotes QCD color charge.",
      "claimIds": [
        "M-phys-lee2002-context"
      ],
      "contextIds": [
        "lee2002"
      ]
    },
    {
      "id": "physics:lee-null-bound",
      "source": "phys:lee-charge-null",
      "target": "phys:lee-abundance-limit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected null distribution supplies the observational input to the published sample-conditional bound; the confidence normalization is not independently reconstructed.",
      "claimIds": [
        "M-phys-lee-abundance-limit"
      ],
      "contextIds": [
        "lee2002"
      ]
    }
  ],
  "studies": [
    {
      "id": "cms2013-fcp-acquisition",
      "sourceId": "cms2013-fcp",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevD.87.092008",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "9",
      "pages": "092008",
      "system": "Low-ionization tracks in the CMS 2011 pp sample with a detector-stable color-singlet signal benchmark",
      "preparation": "The search uses 5.0 fb^-1 of CMS pp collisions at sqrt(s)=7 TeV recorded in 2011. Single-muon triggering requires reconstructed pT>40 GeV and |eta|<2.1. Offline tracks matched to muon detectors require reconstructed pT>45 GeV, |eta|<1.5, track quality and isolation, at least six tracker ionization measurements including two pixel measurements, and collision-time/impact-parameter cuts.",
      "observable": "CMS fractionally charged search preparation",
      "finding": "The 2011 pp exposure, trigger and restricted track/event selection.",
      "limitations": [
        "Momentum is reconstructed assuming unit electric charge: pT_reco=pT_true/|q|. The 40 GeV trigger corresponds to about 27 GeV for |q|=2/3 and 13 GeV for |q|=1/3; the selected tracks are not an unbiased sample of produced particles.",
        "The 80<m_LL<100 GeV two-candidate region is excluded from the search sample and used in a separate control selection. One-candidate events remain; events with more than two candidates are excluded.",
        "This collider acquisition is distinct from Lee silicone oil. Other analyses of the 2011 CMS running period are not automatically independent replications; no samples or significances are pooled."
      ],
      "readExtent": "full-primary-scientific-body",
      "reviewedLocators": [
        "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
        "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://cms-results.web.cern.ch/cms-results/public-results/publications/EXO-11-074/index.html",
      "correctionCheck": "Official CMS publication and arXiv v2 metadata checked; v2 is identified as the published version. This is a selected 2011 sample, not the later combined 7/8 TeV search or an exhaustive correction/latest-result survey."
    },
    {
      "id": "cms2013-fcp-response",
      "sourceId": "cms2013-fcp",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.87.092008",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "9",
      "pages": "092008",
      "system": "Low-ionization tracks in the CMS 2011 pp sample with a detector-stable color-singlet signal benchmark",
      "preparation": "The benchmark is pair-produced spin-1/2 particles with electric charges +/-e/3 or +/-2e/3, singlets under SU(3)c and SU(2)L, assumed not to decay within the detector. Modified Drell-Yan photon/Z production is simulated with PYTHIA 6.422, leading-order CTEQ6L1 parton distributions and GEANT4 detector response for masses 100-600 GeV. At least six retained tracker measurements with dE/dx<2 MeV/cm define the signal region.",
      "observable": "CMS low-ionization signal response",
      "finding": "The color-singlet production model, detector-scale lifetime assumption and conditional event efficiency.",
      "limitations": [
        "Low ionization and finite hit thresholds make trigger, reconstruction and selected velocity distributions charge- and mass-dependent. Table 3 gives event efficiencies at 100 GeV of 0.341 +/- 0.026 for |q|=2/3 and 0.041 +/- 0.007 for |q|=1/3; neither is a universal charge acceptance.",
        "Sensor-edge measurements are removed. Signal-region optimization uses simulated 100 and 400 GeV samples; simulated signal efficiencies are distinct from the data-driven background prediction.",
        "Table 1 reports total signal-efficiency systematic uncertainties of 8% for |q|=2/3 and 18% for |q|=1/3. No simulation, nuisance covariance or detector response is independently reconstructed.",
        "The benchmark particles have no QCD color charge. Detector-scale survival is assumed, not a measured lifetime or permanent stability; the result is not a search for arbitrary free colored quarks."
      ],
      "readExtent": "full-primary-scientific-body",
      "reviewedLocators": [
        "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
        "Author v2 printed pages 1-3 and 5-9, Sections 2-4 and 6, Tables 1 and 3: modified Drell-Yan signal, detector response and mass/charge-dependent efficiency"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://cms-results.web.cern.ch/cms-results/public-results/publications/EXO-11-074/index.html",
      "correctionCheck": "Official CMS publication and arXiv v2 metadata checked; v2 is identified as the published version. This is a selected 2011 sample, not the later combined 7/8 TeV search or an exhaustive correction/latest-result survey."
    },
    {
      "id": "cms2013-fcp-inference",
      "sourceId": "cms2013-fcp",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.87.092008",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "9",
      "pages": "092008",
      "system": "Low-ionization tracks in the CMS 2011 pp sample with a detector-stable color-singlet signal benchmark",
      "preparation": "Cosmic-ray control selections with inverted impact parameters predict 0.007 +/- 0.006 events. A scaled Z-peak control sample is fitted in zero-to-five low-ionization measurements using a generalized binomial form and extrapolated to the signal region, predicting 0.005 +/- 0.004 pp events. The reported total is 0.012 +/- 0.007. The paper uses CLs for 95% production-cross-section upper limits and compares them with the benchmark leading-order cross section to obtain mass exclusions.",
      "observable": "CMS fractional-charge limit inference",
      "finding": "The control-sample background extrapolation and publication-reported CLs/mass interpretation.",
      "limitations": [
        "The extrapolation assumes that the control-sample ionization statistics describe the selected collision background; alternative functions, fitted-parameter uncertainty and search/control differences contribute to its uncertainty. Cosmic background is separately constrained.",
        "The 2.2% luminosity uncertainty and charge-dependent signal-efficiency systematics accompany the background estimate. The paper identifies the CLs criterion but a local likelihood, nuisance treatment and confidence-calibration replay are not supplied.",
        "The background prediction is not an observed fractional-charge count. A cross-section limit depends on selection and efficiency; a mass exclusion additionally depends on the specified production model."
      ],
      "readExtent": "full-primary-scientific-body",
      "reviewedLocators": [
        "Author v2 printed pages 4-8, Sections 5-7, Figure 2 and Table 2: disjoint control selection, background extrapolation, zero selected events and CLs criterion",
        "Author v2 printed pages 8-9, Sections 7-8, Table 3 and Figure 3: cross-section upper limits and model-conditional mass exclusions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://cms-results.web.cern.ch/cms-results/public-results/publications/EXO-11-074/index.html",
      "correctionCheck": "Official CMS publication and arXiv v2 metadata checked; v2 is identified as the published version. This is a selected 2011 sample, not the later combined 7/8 TeV search or an exhaustive correction/latest-result survey."
    },
    {
      "id": "lee2002",
      "sourceId": "lee2002",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevD.66.012002",
      "journal": "Physical Review D",
      "volume": "66",
      "issue": "1",
      "pages": "012002",
      "system": "Processed silicone-oil drops in a horizontal alternating electric field",
      "preparation": "A modified Millikan oil-drop experiment measures horizontal trajectories in an alternating electric field while upward air flow slows the drops. The final selected sample contains 70.1 mg of processed silicone oil in 16,807,644 drops with average diameter approximately 20.6 micrometers.",
      "observable": "Calibrated electric charge per accepted drop and a reported fractional-charge abundance bound.",
      "finding": "The final 70.1 mg silicone-oil sample shows integer electric-charge peaks and no accepted drop more than 0.15 e from the nearest integer. The result uses the stated cuts without background subtraction.",
      "limitations": [
        "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
        "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
        "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
        "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
        "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed.",
        "Section IV B reports no accepted drop farther than 0.15 e from the nearest integer, with no background subtraction. The modulo-one gap is described as 0.15-0.85; the narrower 0.18-0.82 interval is used for the admitted published bound.",
        "The earlier 17.4 mg experiment contained an anomalous drop that this search did not confirm. These samples are not pooled, and the earlier event is not established to be an artifact.",
        "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
        "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
        "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
        "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species.",
        "q=Q/e is electric charge in electron-charge-magnitude units. It is not QCD color charge or an observable of neutral colored objects.",
        "q_r=q-floor(q) lies in [0,1). The centered residual q_c=q-nearest_integer(q) has a different range; Figure 9's q_c caption is inconsistent with its modulo-one axis and the Section IV B definition.",
        "A charge window is a measurement acceptance condition, not a particle species, minimum constituent count or universal absence statement.",
        "Author v2 Table II gives joint rejections 22.3% and 8.7%, differing from the selected published values 21.0% and 9.4%. These versions are not mixed to recompute the final 70.1 mg sample or acceptance.",
        "The reviewed author v2 also states the bound without a confidence-construction formula or effective-exposure prescription. Its Table III caption quotes 6.4 x 10^20 nucleons per milligram; that printed conversion is not adopted to reconstruct the bound."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Published pages 012002-1 to 012002-6, Sections I-III: electric-charge readout, oil preparation, integer-peak calibration and trajectory covariance; Equations 1-11 and Table I",
        "Published pages 012002-6 to 012002-8, Section IV: selection, final sample, centered and modulo-one residuals, null result and reported limit; Table II, Figures 7-9 and Equations 12-16",
        "Published pages 012002-1 and 012002-9, abstract, Introduction and Section V A: quoted charge window and abundance limit, material-processing restriction and limits of comparison; Table III",
        "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0204003v2",
      "correctionCheck": "Published identity and author v2 metadata checked. Author v2 Table II differs from the selected published cut totals; residual-window and Figure 9 label discrepancies remain explicit. No confidence-construction formula is supplied in the reviewed author version; no unpublished efficiency or alternative bound is inferred."
    }
  ],
  "comparisons": [
    {
      "id": "cms2013-fcp-benchmark-limits",
      "candidate": "The specified long-lived color-singlet pair-production benchmark at a stated charge and mass.",
      "alternative": "The selected collision and cosmic-ray background without that signal.",
      "sourceIds": [
        "cms2013-fcp"
      ],
      "discriminator": "Zero selected events and the reported CLs production limits, compared with the specified leading-order signal cross section.",
      "result": "conditional-support",
      "limit": "Supports exclusions only within the stated signal, lifetime and response assumptions; neither color confinement nor universal fractional-charge absence is tested.",
      "assumptions": [
        "Control-sample background extrapolation, charge/mass-dependent efficiency, 2011 luminosity and the modified Drell-Yan benchmark."
      ],
      "claimIds": [
        "C-phys-cms2013-fcp-limits"
      ]
    },
    {
      "id": "lee-abundance-limit",
      "candidate": "A published abundance bound conditional on the charge window and processed-oil preparation.",
      "alternative": "A universal absence theorem for fractional or color-charged particles.",
      "sourceIds": [
        "lee2002"
      ],
      "discriminator": "The selected charge distribution contains no event in the admitted interval; confidence-limit construction and retention outside this material require separate information.",
      "result": "not-tested",
      "limit": "The reported null constrains this preparation; it does not test universal absence or establish the printed statistical normalization independently.",
      "assumptions": [
        "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
        "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
        "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
        "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species."
      ],
      "claimIds": [
        "C-phys-lee-abundance-limit"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:cms2013-fcp-acquisition-context",
      "role": "experimental-context",
      "denotes": "The 2011 pp exposure, trigger and restricted track/event selection.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2013-fcp-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:cms2013-fcp-response-context",
      "role": "model-context",
      "denotes": "The color-singlet production model, detector-scale lifetime assumption and conditional event efficiency.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2013-fcp-response-context"
      ]
    },
    {
      "nodeId": "phys:cms2013-fcp-inference-context",
      "role": "model-context",
      "denotes": "The control-sample background extrapolation and publication-reported CLs/mass interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cms2013-fcp-inference-context"
      ]
    },
    {
      "nodeId": "phys:cms2013-fcp-selected-count",
      "role": "scoped-phenomenon",
      "denotes": "The observed zero selected events, distinct from predicted backgrounds and model limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2013-fcp-selected-count"
      ]
    },
    {
      "nodeId": "phys:cms2013-fcp-limits",
      "role": "scoped-phenomenon",
      "denotes": "The reported production limits and extra model-dependent conversion into mass exclusions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cms2013-fcp-limits"
      ]
    },
    {
      "nodeId": "phys:fractional-charge-residual",
      "role": "definition",
      "denotes": "The centered and modulo-one electric-charge residual definitions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-fractional-charge-residual"
      ]
    },
    {
      "nodeId": "phys:lee2002-context",
      "role": "experimental-context",
      "denotes": "The selected silicone-oil sample, trajectory calibration and overlapping acceptance cuts.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lee2002-context"
      ]
    },
    {
      "nodeId": "phys:lee-charge-null",
      "role": "scoped-phenomenon",
      "denotes": "The observed integer-charge peaks and unoccupied residual window after selection.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lee-charge-null"
      ]
    },
    {
      "nodeId": "phys:lee-abundance-limit",
      "role": "scoped-phenomenon",
      "denotes": "The publication-reported abundance bound for the stated processed-oil sample and residual-charge window.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lee-abundance-limit"
      ]
    }
  ]
};

/** Electric-charge null searches retain their distinct sample and inference conditions. */
export function validateConfinementChargeSearchContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Charge-search ${kind} changed ${id}: preserve electric/color distinction, selection and conditional limits`);
    }
  }
}
