import assert from "node:assert/strict";

export const QUARK_TOP_WIDTH_CHECKS = new Map();
export const QUARK_TOP_WIDTH_ANALYTICAL_SOURCES = new Map();
export const QUARK_TOP_WIDTH_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "cdf2013-top-acquisition-context",
      "M-phys-cdf2013-top-acquisition-context",
      [
        "cdf2013-top-acquisition"
      ]
    ],
    [
      "cdf2013-top-response-context",
      "M-phys-cdf2013-top-response-context",
      [
        "cdf2013-top-response"
      ]
    ],
    [
      "cdf2013-top-inference-context",
      "M-phys-cdf2013-top-inference-context",
      [
        "cdf2013-top-inference"
      ]
    ]
  ],
  "observations": [
    [
      "cdf2013-top-sample",
      "C-phys-cdf2013-top-sample",
      [
        "cdf2013-top-acquisition"
      ]
    ],
    [
      "cdf2013-top-width-interval",
      "C-phys-cdf2013-top-width-interval",
      [
        "cdf2013-top-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "cdf2013-top-acquisition-context-cdf2013-top-sample",
      "cdf2013-top-acquisition-context",
      "cdf2013-top-sample",
      "M-phys-cdf2013-top-sample",
      "measurement-context"
    ],
    [
      "cdf2013-top-response-context-cdf2013-top-sample",
      "cdf2013-top-response-context",
      "cdf2013-top-sample",
      "M-phys-cdf2013-top-sample",
      "interpretation-dependency"
    ],
    [
      "cdf2013-top-sample-cdf2013-top-width-interval",
      "cdf2013-top-sample",
      "cdf2013-top-width-interval",
      "M-phys-cdf2013-top-width-interval",
      "interpretation-dependency"
    ],
    [
      "cdf2013-top-response-context-cdf2013-top-width-interval",
      "cdf2013-top-response-context",
      "cdf2013-top-width-interval",
      "M-phys-cdf2013-top-width-interval",
      "interpretation-dependency"
    ],
    [
      "cdf2013-top-inference-context-cdf2013-top-width-interval",
      "cdf2013-top-inference-context",
      "cdf2013-top-width-interval",
      "M-phys-cdf2013-top-width-interval",
      "interpretation-dependency"
    ],
    [
      "quark-fields-cdf2013-top-width-interval",
      "quark-fields",
      "cdf2013-top-width-interval",
      "M-phys-cdf2013-top-width-interval",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "cdf2013-top-acquisition",
    "cdf2013-top-response",
    "cdf2013-top-inference"
  ],
  "comparisonIds": [
    "cdf2013-top-width-boundary"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "cdf2013-top-width",
      "kind": "research-publication",
      "title": "Direct Measurement of the Total Decay Width of the Top Quark",
      "authors": [
        "CDF Collaboration"
      ],
      "year": 2013,
      "doi": "10.1103/PhysRevLett.111.202001",
      "url": "https://arxiv.org/pdf/1308.4050v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories",
          "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations",
          "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
          "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
          "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison"
        ],
        "limit": "Read the scientific abstract and body on author-v2 pages 3-6 and the referenced-method bibliography on page 7; visually checked pages 5-6, Tables I-II and Figures 1-2. The arXiv revision is 18 October 2013 and publisher metadata identifies PRL 111, 202001 (2013); the regenerated PDF date is not a new publication. The publisher PDF and cited detector, simulation and statistics papers were not independently reviewed. No event, detector-response, fit or confidence-coverage replay is claimed."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-cdf2013-top-acquisition-context",
      "kind": "method",
      "statement": "Use the full CDF II Run II proton-antiproton sample at sqrt(s)=1.96 TeV with integrated luminosity 8.7 fb^-1. Select one central electron or muon, missing transverse energy and at least four jets; separate zero, one and multiple b tags and tight/loose jet requirements into five exclusive categories.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ],
      "contextIds": [
        "cdf2013-top-acquisition"
      ]
    },
    {
      "id": "M-phys-cdf2013-top-response-context",
      "kind": "method",
      "statement": "Apply calibrated jet response, neural-network energy corrections and secondary-vertex b tagging. Under the top-pair lepton+jets hypothesis choose the lowest-chi^2 jet assignment for the reconstructed top mass; a separate non-b dijet mass uses the pair closest to the adopted W mass. Simulated signal/background templates, auxiliary photon+jet resolution control and generator variations model their response.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reconstruction assigns selected events to the lepton+jets top-pair hypothesis and chooses jet assignments using a kinematic fit. Detector resolution, jet calibration, backgrounds, radiation and color reconnection affect the response; observed mass spread is not the intrinsic width."
      ],
      "contextIds": [
        "cdf2013-top-response"
      ]
    },
    {
      "id": "M-phys-cdf2013-top-inference-context",
      "kind": "method",
      "statement": "Fit correlated reconstructed-top and dijet masses with two-dimensional kernel densities and interpolation in width and jet-energy scale. Multiply five category likelihoods, constrain expected backgrounds and leave signal yields free. Use a nonnegative width estimator, simulated Neyman confidence bands with likelihood-ratio ordering and the reported Gaussian systematic treatment.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The source adopts a 1.22 GeV Gaussian systematic smearing from its stated uncertainty procedure. The displayed Table II components do not reproduce the reported quadrature total; this source-accounting mismatch is retained without replacing the adopted total or recomputing the interval. Simulations, kernel estimates, interpolation and confidence coverage are not independently reconstructed; 1.22 GeV is not a symmetric error bar on the fitted estimator.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound."
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    },
    {
      "id": "C-phys-cdf2013-top-sample",
      "kind": "review-finding",
      "statement": "Table I reports 1627, 882, 997, 208 and 275 observed events in the 0-tag, 1-tagL, 1-tagT, 2-tagL and 2-tagT categories, respectively. These are selected signal-plus-background counts; the inference uses the corresponding reconstructed-event distributions rather than the five totals alone.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories",
          "role": "supports",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations",
          "role": "supports",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I expected signal yields assume a top-pair cross section of 7.45 pb and top mass of 172.5 GeV/c^2; they are not observed counts. Figure 1 contains simulated templates, not measured spectra. Published category totals do not reconstruct the unbinned data.",
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ],
      "contextIds": [
        "cdf2013-top-acquisition"
      ]
    },
    {
      "id": "M-phys-cdf2013-top-sample",
      "kind": "method",
      "statement": "Retain the source category definitions, selection and detector response when interpreting the observed counts; keep modeled composition and simulated shape illustrations separate.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I expected signal yields assume a top-pair cross section of 7.45 pb and top mass of 172.5 GeV/c^2; they are not observed counts. Figure 1 contains simulated templates, not measured spectra. Published category totals do not reconstruct the unbinned data.",
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ],
      "contextIds": [
        "cdf2013-top-acquisition"
      ]
    },
    {
      "id": "C-phys-cdf2013-top-width-interval",
      "kind": "review-finding",
      "statement": "For input top mass 172.5 GeV/c^2, CDF reports best-fit estimator Gamma_meas=1.63 GeV, a two-sided 68% confidence interval 1.10<Gamma_top<4.05 GeV and a 95% confidence upper bound Gamma_top<6.38 GeV. Both intervals include the source statistical and systematic treatment.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
          "role": "supports",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
          "role": "supports",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison",
          "role": "supports",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound.",
        "The paper converts the width interval to a lifetime and compares it with an externally cited typical hadronization timescale. Neither time is directly measured in this acquisition; no lifetime conversion, hadronization measurement or all-flavor stability result is admitted here."
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    },
    {
      "id": "M-phys-cdf2013-top-width-interval",
      "kind": "method",
      "statement": "Interpret the published bounds through the correlated two-observable fit, adopted response and source confidence construction. A finite decay width is a species-specific inference, not a directly timed lifetime or a general statement about all quark flavors.",
      "scope": "The CDF 2013 lepton+jets top-width analysis under its declared reconstruction, mass input and confidence construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison",
          "role": "method",
          "note": "Supports this reported stage within the stated author-version scope."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound.",
        "The paper converts the width interval to a lifetime and compares it with an externally cited typical hadronization timescale. Neither time is directly measured in this acquisition; no lifetime conversion, hadronization measurement or all-flavor stability result is admitted here."
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:cdf2013-top-acquisition-context",
      "name": "CDF top-width selected-event preparation",
      "kind": "context",
      "description": "Use the full CDF II Run II proton-antiproton sample at sqrt(s)=1.96 TeV with integrated luminosity 8.7 fb^-1. Select one central electron or muon, missing transverse energy and at least four jets; separate zero, one and multiple b tags and tight/loose jet requirements into five exclusive categories.",
      "claimIds": [
        "M-phys-cdf2013-top-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations"
        }
      ],
      "openObligations": [
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ]
    },
    {
      "id": "phys:cdf2013-top-response-context",
      "name": "CDF top-width reconstruction and response",
      "kind": "context",
      "description": "Apply calibrated jet response, neural-network energy corrections and secondary-vertex b tagging. Under the top-pair lepton+jets hypothesis choose the lowest-chi^2 jet assignment for the reconstructed top mass; a separate non-b dijet mass uses the pair closest to the adopted W mass. Simulated signal/background templates, auxiliary photon+jet resolution control and generator variations model their response.",
      "claimIds": [
        "M-phys-cdf2013-top-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion"
        }
      ],
      "openObligations": [
        "Reconstruction assigns selected events to the lepton+jets top-pair hypothesis and chooses jet assignments using a kinematic fit. Detector resolution, jet calibration, backgrounds, radiation and color reconnection affect the response; observed mass spread is not the intrinsic width."
      ]
    },
    {
      "id": "phys:cdf2013-top-inference-context",
      "name": "CDF top-width likelihood and confidence construction",
      "kind": "context",
      "description": "Fit correlated reconstructed-top and dijet masses with two-dimensional kernel densities and interpolation in width and jet-energy scale. Multiply five category likelihoods, constrain expected backgrounds and leave signal yields free. Use a nonnegative width estimator, simulated Neyman confidence bands with likelihood-ratio ordering and the reported Gaussian systematic treatment.",
      "claimIds": [
        "M-phys-cdf2013-top-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison"
        }
      ],
      "openObligations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The source adopts a 1.22 GeV Gaussian systematic smearing from its stated uncertainty procedure. The displayed Table II components do not reproduce the reported quadrature total; this source-accounting mismatch is retained without replacing the adopted total or recomputing the interval. Simulations, kernel estimates, interpolation and confidence coverage are not independently reconstructed; 1.22 GeV is not a symmetric error bar on the fitted estimator.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound."
      ]
    },
    {
      "id": "phys:cdf2013-top-sample",
      "name": "CDF selected top-width categories",
      "kind": "scoped-process",
      "description": "Table I reports 1627, 882, 997, 208 and 275 observed events in the 0-tag, 1-tagL, 1-tagT, 2-tagL and 2-tagT categories, respectively. These are selected signal-plus-background counts; the inference uses the corresponding reconstructed-event distributions rather than the five totals alone.",
      "claimIds": [
        "C-phys-cdf2013-top-sample"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations"
        }
      ],
      "openObligations": [
        "Table I expected signal yields assume a top-pair cross section of 7.45 pb and top mass of 172.5 GeV/c^2; they are not observed counts. Figure 1 contains simulated templates, not measured spectra. Published category totals do not reconstruct the unbinned data.",
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ]
    },
    {
      "id": "phys:cdf2013-top-width-interval",
      "name": "CDF conditional top-width interval",
      "kind": "scoped-process",
      "description": "For input top mass 172.5 GeV/c^2, CDF reports best-fit estimator Gamma_meas=1.63 GeV, a two-sided 68% confidence interval 1.10<Gamma_top<4.05 GeV and a 95% confidence upper bound Gamma_top<6.38 GeV. Both intervals include the source statistical and systematic treatment.",
      "claimIds": [
        "C-phys-cdf2013-top-width-interval"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response"
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison"
        }
      ],
      "openObligations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound.",
        "The paper converts the width interval to a lifetime and compares it with an externally cited typical hadronization timescale. Neither time is directly measured in this acquisition; no lifetime conversion, hadronization measurement or all-flavor stability result is admitted here."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:cdf2013-top-acquisition-context-cdf2013-top-sample",
      "source": "phys:cdf2013-top-acquisition-context",
      "target": "phys:cdf2013-top-sample",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared exposure, selection and mutually exclusive categories define this sample.",
      "claimIds": [
        "M-phys-cdf2013-top-sample"
      ],
      "contextIds": [
        "cdf2013-top-acquisition"
      ]
    },
    {
      "id": "physics:cdf2013-top-response-context-cdf2013-top-sample",
      "source": "phys:cdf2013-top-response-context",
      "target": "phys:cdf2013-top-sample",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibrated jets and tagging enter the selected-category readout; modeled composition does not turn all selected events into signal.",
      "claimIds": [
        "M-phys-cdf2013-top-sample"
      ],
      "contextIds": [
        "cdf2013-top-acquisition"
      ]
    },
    {
      "id": "physics:cdf2013-top-sample-cdf2013-top-width-interval",
      "source": "phys:cdf2013-top-sample",
      "target": "phys:cdf2013-top-width-interval",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fit uses this same selected sample through unbinned reconstructed masses; the published five counts alone cannot reconstruct the width inference.",
      "claimIds": [
        "M-phys-cdf2013-top-width-interval"
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    },
    {
      "id": "physics:cdf2013-top-response-context-cdf2013-top-width-interval",
      "source": "phys:cdf2013-top-response-context",
      "target": "phys:cdf2013-top-width-interval",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Detector resolution, calibration, backgrounds and simulated template response condition the inferred width.",
      "claimIds": [
        "M-phys-cdf2013-top-width-interval"
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    },
    {
      "id": "physics:cdf2013-top-inference-context-cdf2013-top-width-interval",
      "source": "phys:cdf2013-top-inference-context",
      "target": "phys:cdf2013-top-width-interval",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fixed mass input, simultaneous jet-energy fit and nonnegative confidence construction define the reported bounds.",
      "claimIds": [
        "M-phys-cdf2013-top-width-interval"
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    },
    {
      "id": "physics:quark-fields-cdf2013-top-width-interval",
      "source": "phys:quark-fields",
      "target": "phys:cdf2013-top-width-interval",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The top-quark species supplies the named signal hypothesis; this is not an observation of an isolated stable quark or a measurement of all flavor lifetimes.",
      "claimIds": [
        "M-phys-cdf2013-top-width-interval"
      ],
      "contextIds": [
        "cdf2013-top-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "cdf2013-top-acquisition",
      "sourceId": "cdf2013-top-width",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.111.202001",
      "journal": "Physical Review Letters",
      "volume": "111",
      "issue": "20",
      "pages": "202001",
      "system": "CDF II top-pair candidates in the lepton+jets channel",
      "preparation": "Use the full CDF II Run II proton-antiproton sample at sqrt(s)=1.96 TeV with integrated luminosity 8.7 fb^-1. Select one central electron or muon, missing transverse energy and at least four jets; separate zero, one and multiple b tags and tight/loose jet requirements into five exclusive categories.",
      "observable": "CDF top-width selected-event preparation",
      "finding": "The declared collider exposure, object selections and category assignment.",
      "limitations": [
        "The reported categories are selected detector events, not raw acquisition, pure top decays or isolated quark observations. This full Run II analysis extends the earlier CDF sample and is not an independent replication of that sample."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Author v2, pages 3-4: full Run II exposure, lepton+jets channel, object selection and five exclusive tagging/jet categories",
        "Author v2, pages 4-5, Table I: selected-category composition, observed counts and conditional signal/background expectations"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.111.202001",
      "correctionCheck": "Author v2 and publisher bibliographic metadata were checked. The earlier CDF result is a smaller overlapping sample; no exhaustive later-result or correction census is claimed."
    },
    {
      "id": "cdf2013-top-response",
      "sourceId": "cdf2013-top-width",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.111.202001",
      "journal": "Physical Review Letters",
      "volume": "111",
      "issue": "20",
      "pages": "202001",
      "system": "CDF II top-pair candidates in the lepton+jets channel",
      "preparation": "Apply calibrated jet response, neural-network energy corrections and secondary-vertex b tagging. Under the top-pair lepton+jets hypothesis choose the lowest-chi^2 jet assignment for the reconstructed top mass; a separate non-b dijet mass uses the pair closest to the adopted W mass. Simulated signal/background templates, auxiliary photon+jet resolution control and generator variations model their response.",
      "observable": "CDF top-width reconstruction and response",
      "finding": "The detector, reconstruction, background and simulation inputs, including auxiliary calibration data.",
      "limitations": [
        "Reconstruction assigns selected events to the lepton+jets top-pair hypothesis and chooses jet assignments using a kinematic fit. Detector resolution, jet calibration, backgrounds, radiation and color reconnection affect the response; observed mass spread is not the intrinsic width."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
        "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.111.202001",
      "correctionCheck": "Author v2 and publisher bibliographic metadata were checked. The earlier CDF result is a smaller overlapping sample; no exhaustive later-result or correction census is claimed."
    },
    {
      "id": "cdf2013-top-inference",
      "sourceId": "cdf2013-top-width",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.111.202001",
      "journal": "Physical Review Letters",
      "volume": "111",
      "issue": "20",
      "pages": "202001",
      "system": "CDF II top-pair candidates in the lepton+jets channel",
      "preparation": "Fit correlated reconstructed-top and dijet masses with two-dimensional kernel densities and interpolation in width and jet-energy scale. Multiply five category likelihoods, constrain expected backgrounds and leave signal yields free. Use a nonnegative width estimator, simulated Neyman confidence bands with likelihood-ratio ordering and the reported Gaussian systematic treatment.",
      "observable": "CDF top-width likelihood and confidence construction",
      "finding": "The conditional unbinned fit and confidence-band inversion, separate from exposure and response.",
      "limitations": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The source adopts a 1.22 GeV Gaussian systematic smearing from its stated uncertainty procedure. The displayed Table II components do not reproduce the reported quadrature total; this source-accounting mismatch is retained without replacing the adopted total or recomputing the interval. Simulations, kernel estimates, interpolation and confidence coverage are not independently reconstructed; 1.22 GeV is not a symmetric error bar on the fitted estimator.",
        "The 68% two-sided interval and 95% upper bound invert the same nonnegative-estimator confidence construction. They are not independent measurements or a Gaussian central-value error interval; the best-fit estimator is not substituted for either bound."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Author v2, pages 4-5, Figure 1: jet calibration, kinematic reconstruction, simulated mass templates and correlated two-observable response",
        "Author v2, pages 5-6, Table II and Figure 2: unbinned likelihood, nonnegative estimator, systematic treatment and confidence-band inversion",
        "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.111.202001",
      "correctionCheck": "Author v2 and publisher bibliographic metadata were checked. The earlier CDF result is a smaller overlapping sample; no exhaustive later-result or correction census is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "cdf2013-top-width-boundary",
      "candidate": "The selected event shapes constrain a conditional top decay-width interval.",
      "alternative": "Different total widths under the same fixed-mass signal/background model.",
      "discriminator": "Compare measured unbinned reconstructed top and dijet masses with width/jet-energy-scale templates, then invert the calibrated confidence bands.",
      "result": "conditional-support",
      "limit": "The paper converts the width interval to a lifetime and compares it with an externally cited typical hadronization timescale. Neither time is directly measured in this acquisition; no lifetime conversion, hadronization measurement or all-flavor stability result is admitted here.",
      "assumptions": [
        "The width templates fix the top mass to 172.5 GeV/c^2 and fit the jet-energy scale using the same sample with an adopted W mass of 80.4 GeV/c^2. The top mass and W reference are inputs, not new mass measurements.",
        "The source adopts a 1.22 GeV Gaussian systematic smearing from its stated uncertainty procedure. The displayed Table II components do not reproduce the reported quadrature total; this source-accounting mismatch is retained without replacing the adopted total or recomputing the interval. Simulations, kernel estimates, interpolation and confidence coverage are not independently reconstructed; 1.22 GeV is not a symmetric error bar on the fitted estimator."
      ],
      "sourceIds": [
        "cdf2013-top-width"
      ],
      "claimIds": [
        "C-phys-cdf2013-top-sample",
        "C-phys-cdf2013-top-width-interval"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:cdf2013-top-acquisition-context",
      "role": "experimental-context",
      "denotes": "The declared collider exposure, object selections and category assignment.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cdf2013-top-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:cdf2013-top-response-context",
      "role": "model-context",
      "denotes": "The detector, reconstruction, background and simulation inputs, including auxiliary calibration data.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cdf2013-top-response-context"
      ]
    },
    {
      "nodeId": "phys:cdf2013-top-inference-context",
      "role": "model-context",
      "denotes": "The conditional unbinned fit and confidence-band inversion, separate from exposure and response.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cdf2013-top-inference-context"
      ]
    },
    {
      "nodeId": "phys:cdf2013-top-sample",
      "role": "scoped-phenomenon",
      "denotes": "The reported selected event sample, not pure signal or released event-level mass data.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cdf2013-top-sample"
      ]
    },
    {
      "nodeId": "phys:cdf2013-top-width-interval",
      "role": "scoped-phenomenon",
      "denotes": "The source-reported conditional top-width bounds, not a Gaussian width measurement or a measured decay time.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cdf2013-top-width-interval"
      ]
    }
  ]
};

/** Preserve the primary result's response, mass input and interval semantics. */
export function validateQuarkTopWidthContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing top-width ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value,
        `Top-width ${kind} changed ${id}.${key}: preserve preparation, response and conditional inference`);
    }
  }
}
