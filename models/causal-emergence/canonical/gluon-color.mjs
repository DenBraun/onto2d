import assert from "node:assert/strict";

export const GLUON_COLOR_CHECKS = new Map();
export const GLUON_COLOR_ANALYTICAL_SOURCES = new Map();
export const GLUON_COLOR_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "opal2001-color-acquisition-context",
      "M-phys-opal2001-color-acquisition-context",
      [
        "opal2001-color-acquisition"
      ]
    ],
    [
      "opal2001-color-response-context",
      "M-phys-opal2001-color-response-context",
      [
        "opal2001-color-response"
      ]
    ],
    [
      "opal2001-color-inference-context",
      "M-phys-opal2001-color-inference-context",
      [
        "opal2001-color-inference"
      ]
    ]
  ],
  "observations": [
    [
      "opal2001-color-distributions",
      "C-phys-opal2001-color-distributions",
      [
        "opal2001-color-response"
      ]
    ],
    [
      "opal2001-color-factors",
      "C-phys-opal2001-color-factors",
      [
        "opal2001-color-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "opal2001-color-acquisition-context-opal2001-color-distributions",
      "opal2001-color-acquisition-context",
      "opal2001-color-distributions",
      "M-phys-opal2001-color-distributions",
      "measurement-context"
    ],
    [
      "opal2001-color-response-context-opal2001-color-distributions",
      "opal2001-color-response-context",
      "opal2001-color-distributions",
      "M-phys-opal2001-color-distributions",
      "interpretation-dependency"
    ],
    [
      "opal2001-color-distributions-opal2001-color-factors",
      "opal2001-color-distributions",
      "opal2001-color-factors",
      "M-phys-opal2001-color-factors",
      "interpretation-dependency"
    ],
    [
      "opal2001-color-response-context-opal2001-color-factors",
      "opal2001-color-response-context",
      "opal2001-color-factors",
      "M-phys-opal2001-color-factors",
      "interpretation-dependency"
    ],
    [
      "opal2001-color-inference-context-opal2001-color-factors",
      "opal2001-color-inference-context",
      "opal2001-color-factors",
      "M-phys-opal2001-color-factors",
      "interpretation-dependency"
    ],
    [
      "gluon-self-coupling-opal2001-color-factors",
      "gluon-self-coupling",
      "opal2001-color-factors",
      "M-phys-opal2001-color-factors",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "opal2001-color-acquisition",
    "opal2001-color-response",
    "opal2001-color-inference"
  ],
  "comparisonIds": [
    "opal2001-color-su3"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "opal2001-colour-factors",
      "kind": "research-publication",
      "title": "A Simultaneous Measurement of the QCD Colour Factors and the Strong Coupling",
      "authors": [
        "OPAL Collaboration"
      ],
      "year": 2001,
      "doi": "10.1007/s100520100699",
      "url": "https://arxiv.org/pdf/hep-ex/0101044v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-article",
        "locators": [
          "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions",
          "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets",
          "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
          "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
          "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization"
        ],
        "limit": "Read author-v1 pages 1-29, including the scientific body, Appendix and references; visually checked Tables 2 and 7, Equations 10-17 and 29, and Figures 1, 2 and 4. Publisher metadata confirms EPJC 20 (2001) 601-615; the publisher PDF and cited generator, detector, resummation and Bayesian-method articles were not independently reviewed. No event, correction, covariance, perturbative-coefficient or fit replay is supplied. The Figure 1 benchmark coupling is printed as 0.118 in Section 2 but 0.119 in its caption; neither is the jointly fitted 0.120."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-opal2001-color-acquisition-context",
      "kind": "method",
      "statement": "Use OPAL data within 3 GeV of the Z peak from 1991-1995: 4.1 million hadronic events before the additional selection, about 3.6 million retained, including about 250000 four-jet events. Require at least five accepted tracks and |cos(theta_thrust)|<0.9; combine matched tracks and calorimeter clusters. For angular observables use Durham y_cut=0.008 and each jet energy above 3 GeV.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Jet clustering and energy ordering classify reconstructed hadronic events, not individually observed free gluons or a resolved three-gluon vertex. Event counts and the four-jet subset are not independent samples."
      ],
      "contextIds": [
        "opal2001-color-acquisition"
      ]
    },
    {
      "id": "M-phys-opal2001-color-response-context",
      "kind": "method",
      "statement": "Correct each measured bin using C_det=H_MC/D_MC and C_had=P_MC/H_MC, so D_corr=C_det*C_had*D_meas. Use JETSET 7.4 matrix-element events with Lund fragmentation for four-jet angles and its parton shower for the jet rates, followed by OPAL detector simulation and the data selection.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The correction generators adopt standard QCD color factors and Lund hadronization. HERWIG, fragmentation parameters and other variations assess dependence; the inference is not free of the tested theory or hadronization assumptions.",
        "The plotted parton-level points are corrected products, not direct parton measurements. Hadron-level simulation treats particles with lifetime above 3e-10 s as stable and removes initial-state photon radiation."
      ],
      "contextIds": [
        "opal2001-color-response"
      ]
    },
    {
      "id": "M-phys-opal2001-color-inference-context",
      "kind": "method",
      "statement": "Fit eta=alpha_s*C_F/(2*pi), x=C_A/C_F and y=T_R/C_F simultaneously with MINUIT using 82 selected bins of six correlated observables. Use NLO O(alpha_s^3) four-jet angular predictions, NLO+NLL matched rates (R matching for R4, ln R matching for D2), five massless quark flavors and default mu/sqrt(s)=1. Convert the fitted ratios to C_A, C_F and alpha_s(M_Z) with the normalization T_R=1/2.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
          "role": "method",
          "note": "Supports the stated stage and its reported conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The bin covariance includes data statistics, finite Monte Carlo statistics and cross-bin/cross-observable dependence, estimated using 90 subsamples. Default cuts require 0.9<C_tot<1.1, relaxed to 0.85<C_tot<1.15 for R4. Systematic variations reuse the default covariance.",
        "Systematics use the reported fit-quality weighting with specified deviation-based exceptions; theoretical uncertainty takes the largest of scale/matching estimates. Scale, hadronization and five-parton migration checks are model-dependent, not independent new acquisitions. The N_f=4 secondary-vertex check was not included in assigned systematics. The cubic-Casimir coefficient was consistent with zero in the cited numerical integration, so it was not fitted."
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    },
    {
      "id": "C-phys-opal2001-color-distributions",
      "kind": "review-finding",
      "statement": "Figures 1-2 report four normalized angular distributions (|cos(chi_BZ)|, |cos(Theta_NR)|, cos(Phi_KSW), cos(alpha_34)) and the Durham rates R4 and D2 after detector and hadronization correction to the declared parton-level convention. These six distributions come from the same selected OPAL sample; the 128-bin representation supplies 82 bins for the simultaneous fit.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figure points already include simulation-based corrections. Curves and correction-factor bands are calculated quantities; no digitized bins or full covariance are imported or reproduced. The normalized angles and rates are statistically dependent.",
        "The Figure 1 benchmark alpha_s is 0.118 in Section 2 and 0.119 in its caption. This unresolved display discrepancy is distinct from the simultaneous fit; no benchmark value is used as its fixed coupling."
      ],
      "contextIds": [
        "opal2001-color-response"
      ]
    },
    {
      "id": "C-phys-opal2001-color-factors",
      "kind": "review-finding",
      "statement": "OPAL reports C_A/C_F=2.25 +/- 0.08 statistical +/- 0.14 systematic and T_R/C_F=0.37 +/- 0.04 statistical +/- 0.06 systematic. With T_R=1/2, the same fit gives C_A=3.02 +/- 0.25 statistical +/- 0.49 systematic, C_F=1.34 +/- 0.13 statistical +/- 0.22 systematic and alpha_s(M_Z)=0.120 +/- 0.011 statistical +/- 0.020 systematic, compatible with the stated SU(3) expectations.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
          "role": "supports",
          "note": "Supports the stated stage and its reported conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 2 reports eta=0.0256 +/- 0.0003 and statistical correlations rho(eta,x)=-0.33, rho(eta,y)=-0.11, rho(x,y)=0.90, with chi2/dof=98.5/79. Table 7 separately gives systematic errors (0.0013,0.136,0.060) and correlations (-0.83,0.06,0.38) in that same parameter order. They are not independent errors or the covariance of (alpha_s,C_A,C_F).",
        "This is a conditional color-factor consistency test in the stated non-Abelian perturbative family, with standard-QCD correction models. It does not directly image self-coupling, independently measure T_R, or establish a complete retuned Abelian-model or light-gluino exclusion.",
        "The ratios and converted factors are one inference, not independent measurements; printed rounding does not exactly reproduce the conversion. No raw-event analysis, NLO calculation, correction/covariance reconstruction or full likelihood fit is reproduced."
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    },
    {
      "id": "M-phys-opal2001-color-distributions",
      "kind": "method",
      "statement": "The selected tracks and clusters supply the measured bins; the declared detector and hadronization corrections produce the plotted parton-level distributions.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Figure 1 benchmark alpha_s is 0.118 in Section 2 and 0.119 in its caption. This unresolved display discrepancy is distinct from the simultaneous fit; no benchmark value is used as its fixed coupling."
      ],
      "contextIds": [
        "opal2001-color-response"
      ]
    },
    {
      "id": "M-phys-opal2001-color-factors",
      "kind": "method",
      "statement": "Use the six corrected distributions, the stated response and perturbative color-factor conventions in one correlated fit. The self-coupling definition supplies the interpretation of the adjoint color factor, not an observed vertex or a causal maintenance relation.",
      "scope": "The OPAL 1991-1995 Z-pole multijet sample and its published, model-conditioned color-factor fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
          "role": "method",
          "note": "Specifies this data-processing or interpretation dependency."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The ratios and converted factors are one inference, not independent measurements; printed rounding does not exactly reproduce the conversion. No raw-event analysis, NLO calculation, correction/covariance reconstruction or full likelihood fit is reproduced."
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:opal2001-color-acquisition-context",
      "name": "OPAL multijet acquisition",
      "kind": "context",
      "description": "Use OPAL data within 3 GeV of the Z peak from 1991-1995: 4.1 million hadronic events before the additional selection, about 3.6 million retained, including about 250000 four-jet events. Require at least five accepted tracks and |cos(theta_thrust)|<0.9; combine matched tracks and calorimeter clusters. For angular observables use Durham y_cut=0.008 and each jet energy above 3 GeV.",
      "claimIds": [
        "M-phys-opal2001-color-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions"
        }
      ],
      "openObligations": [
        "Jet clustering and energy ordering classify reconstructed hadronic events, not individually observed free gluons or a resolved three-gluon vertex. Event counts and the four-jet subset are not independent samples."
      ]
    },
    {
      "id": "phys:opal2001-color-response-context",
      "name": "OPAL detector and hadronization correction",
      "kind": "context",
      "description": "Correct each measured bin using C_det=H_MC/D_MC and C_had=P_MC/H_MC, so D_corr=C_det*C_had*D_meas. Use JETSET 7.4 matrix-element events with Lund fragmentation for four-jet angles and its parton shower for the jet rates, followed by OPAL detector simulation and the data selection.",
      "claimIds": [
        "M-phys-opal2001-color-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations"
        }
      ],
      "openObligations": [
        "The correction generators adopt standard QCD color factors and Lund hadronization. HERWIG, fragmentation parameters and other variations assess dependence; the inference is not free of the tested theory or hadronization assumptions.",
        "The plotted parton-level points are corrected products, not direct parton measurements. Hadron-level simulation treats particles with lifetime above 3e-10 s as stable and removes initial-state photon radiation."
      ]
    },
    {
      "id": "phys:opal2001-color-inference-context",
      "name": "OPAL correlated color-factor fit",
      "kind": "context",
      "description": "Fit eta=alpha_s*C_F/(2*pi), x=C_A/C_F and y=T_R/C_F simultaneously with MINUIT using 82 selected bins of six correlated observables. Use NLO O(alpha_s^3) four-jet angular predictions, NLO+NLL matched rates (R matching for R4, ln R matching for D2), five massless quark flavors and default mu/sqrt(s)=1. Convert the fitted ratios to C_A, C_F and alpha_s(M_Z) with the normalization T_R=1/2.",
      "claimIds": [
        "M-phys-opal2001-color-inference-context"
      ],
      "status": "definition",
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
          "locator": "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization"
        }
      ],
      "openObligations": [
        "The bin covariance includes data statistics, finite Monte Carlo statistics and cross-bin/cross-observable dependence, estimated using 90 subsamples. Default cuts require 0.9<C_tot<1.1, relaxed to 0.85<C_tot<1.15 for R4. Systematic variations reuse the default covariance.",
        "Systematics use the reported fit-quality weighting with specified deviation-based exceptions; theoretical uncertainty takes the largest of scale/matching estimates. Scale, hadronization and five-parton migration checks are model-dependent, not independent new acquisitions. The N_f=4 secondary-vertex check was not included in assigned systematics. The cubic-Casimir coefficient was consistent with zero in the cited numerical integration, so it was not fitted."
      ]
    },
    {
      "id": "phys:opal2001-color-distributions",
      "name": "OPAL corrected multijet distributions",
      "kind": "scoped-process",
      "description": "Figures 1-2 report four normalized angular distributions (|cos(chi_BZ)|, |cos(Theta_NR)|, cos(Phi_KSW), cos(alpha_34)) and the Durham rates R4 and D2 after detector and hadronization correction to the declared parton-level convention. These six distributions come from the same selected OPAL sample; the 128-bin representation supplies 82 bins for the simultaneous fit.",
      "claimIds": [
        "C-phys-opal2001-color-distributions"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections"
        },
        {
          "sourceId": "opal2001-colour-factors",
          "locator": "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit"
        }
      ],
      "openObligations": [
        "Figure points already include simulation-based corrections. Curves and correction-factor bands are calculated quantities; no digitized bins or full covariance are imported or reproduced. The normalized angles and rates are statistically dependent.",
        "The Figure 1 benchmark alpha_s is 0.118 in Section 2 and 0.119 in its caption. This unresolved display discrepancy is distinct from the simultaneous fit; no benchmark value is used as its fixed coupling."
      ]
    },
    {
      "id": "phys:opal2001-color-factors",
      "name": "OPAL jointly fitted color factors",
      "kind": "scoped-process",
      "description": "OPAL reports C_A/C_F=2.25 +/- 0.08 statistical +/- 0.14 systematic and T_R/C_F=0.37 +/- 0.04 statistical +/- 0.06 systematic. With T_R=1/2, the same fit gives C_A=3.02 +/- 0.25 statistical +/- 0.49 systematic, C_F=1.34 +/- 0.13 statistical +/- 0.22 systematic and alpha_s(M_Z)=0.120 +/- 0.011 statistical +/- 0.020 systematic, compatible with the stated SU(3) expectations.",
      "claimIds": [
        "C-phys-opal2001-color-factors"
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
        }
      ],
      "openObligations": [
        "Table 2 reports eta=0.0256 +/- 0.0003 and statistical correlations rho(eta,x)=-0.33, rho(eta,y)=-0.11, rho(x,y)=0.90, with chi2/dof=98.5/79. Table 7 separately gives systematic errors (0.0013,0.136,0.060) and correlations (-0.83,0.06,0.38) in that same parameter order. They are not independent errors or the covariance of (alpha_s,C_A,C_F).",
        "This is a conditional color-factor consistency test in the stated non-Abelian perturbative family, with standard-QCD correction models. It does not directly image self-coupling, independently measure T_R, or establish a complete retuned Abelian-model or light-gluino exclusion.",
        "The ratios and converted factors are one inference, not independent measurements; printed rounding does not exactly reproduce the conversion. No raw-event analysis, NLO calculation, correction/covariance reconstruction or full likelihood fit is reproduced."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:opal2001-color-acquisition-context-opal2001-color-distributions",
      "source": "phys:opal2001-color-acquisition-context",
      "target": "phys:opal2001-color-distributions",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The selected hadronic sample supplies the events from which the distributions are constructed.",
      "claimIds": [
        "M-phys-opal2001-color-distributions"
      ],
      "contextIds": [
        "opal2001-color-response"
      ]
    },
    {
      "id": "physics:opal2001-color-response-context-opal2001-color-distributions",
      "source": "phys:opal2001-color-response-context",
      "target": "phys:opal2001-color-distributions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Detector and hadronization corrections condition the plotted distributions; no partons are directly observed.",
      "claimIds": [
        "M-phys-opal2001-color-distributions"
      ],
      "contextIds": [
        "opal2001-color-response"
      ]
    },
    {
      "id": "physics:opal2001-color-distributions-opal2001-color-factors",
      "source": "phys:opal2001-color-distributions",
      "target": "phys:opal2001-color-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected angular shapes and rates jointly constrain the fitted color parameters.",
      "claimIds": [
        "M-phys-opal2001-color-factors"
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    },
    {
      "id": "physics:opal2001-color-response-context-opal2001-color-factors",
      "source": "phys:opal2001-color-response-context",
      "target": "phys:opal2001-color-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Generator corrections and their variations condition the extracted factors and uncertainty.",
      "claimIds": [
        "M-phys-opal2001-color-factors"
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    },
    {
      "id": "physics:opal2001-color-inference-context-opal2001-color-factors",
      "source": "phys:opal2001-color-inference-context",
      "target": "phys:opal2001-color-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Perturbative order, matching, normalization and covariance specify the simultaneous fit.",
      "claimIds": [
        "M-phys-opal2001-color-factors"
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    },
    {
      "id": "physics:gluon-self-coupling-opal2001-color-factors",
      "source": "phys:gluon-self-coupling",
      "target": "phys:opal2001-color-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The formal adjoint-color convention interprets C_A in this conditional analysis, without turning a definition into experimental evidence.",
      "claimIds": [
        "M-phys-opal2001-color-factors"
      ],
      "contextIds": [
        "opal2001-color-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "opal2001-color-acquisition",
      "sourceId": "opal2001-colour-factors",
      "studyType": "primary-experiment",
      "doi": "10.1007/s100520100699",
      "journal": "European Physical Journal C",
      "volume": "20",
      "issue": "4",
      "pages": "601-615",
      "system": "OPAL hadronic Z decays at LEP, 1991-1995",
      "preparation": "Use OPAL data within 3 GeV of the Z peak from 1991-1995: 4.1 million hadronic events before the additional selection, about 3.6 million retained, including about 250000 four-jet events. Require at least five accepted tracks and |cos(theta_thrust)|<0.9; combine matched tracks and calorimeter clusters. For angular observables use Durham y_cut=0.008 and each jet energy above 3 GeV.",
      "observable": "OPAL multijet acquisition",
      "finding": "The selected Z-pole preparation and its clustered hadronic events.",
      "limitations": [
        "Jet clustering and energy ordering classify reconstructed hadronic events, not individually observed free gluons or a resolved three-gluon vertex. Event counts and the four-jet subset are not independent samples."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets",
        "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100699",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata; no exhaustive correction census. Section 2 and Figure 1 differ on the benchmark coupling, explicitly retained outside the fitted result."
    },
    {
      "id": "opal2001-color-response",
      "sourceId": "opal2001-colour-factors",
      "studyType": "computational-analysis",
      "doi": "10.1007/s100520100699",
      "journal": "European Physical Journal C",
      "volume": "20",
      "issue": "4",
      "pages": "601-615",
      "system": "OPAL hadronic Z decays at LEP, 1991-1995",
      "preparation": "Correct each measured bin using C_det=H_MC/D_MC and C_had=P_MC/H_MC, so D_corr=C_det*C_had*D_meas. Use JETSET 7.4 matrix-element events with Lund fragmentation for four-jet angles and its parton shower for the jet rates, followed by OPAL detector simulation and the data selection.",
      "observable": "OPAL detector and hadronization correction",
      "finding": "Simulation-based bin corrections between detector, hadron and parton conventions.",
      "limitations": [
        "The correction generators adopt standard QCD color factors and Lund hadronization. HERWIG, fragmentation parameters and other variations assess dependence; the inference is not free of the tested theory or hadronization assumptions.",
        "The plotted parton-level points are corrected products, not direct parton measurements. Hadron-level simulation treats particles with lifetime above 3e-10 s as stable and removes initial-state photon radiation."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections",
        "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
        "Author v1, pages 6-7, Section 2 and Equations 1-3; pages 26-27, Figures 1-2: Durham variables and corrected distributions",
        "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
        "Author v1, pages 8-9, Sections 3.1-3.2: 1991-1995 Z-pole acquisition and selected tracks, clusters and jets"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100699",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata; no exhaustive correction census. Section 2 and Figure 1 differ on the benchmark coupling, explicitly retained outside the fitted result."
    },
    {
      "id": "opal2001-color-inference",
      "sourceId": "opal2001-colour-factors",
      "studyType": "computational-analysis",
      "doi": "10.1007/s100520100699",
      "journal": "European Physical Journal C",
      "volume": "20",
      "issue": "4",
      "pages": "601-615",
      "system": "OPAL hadronic Z decays at LEP, 1991-1995",
      "preparation": "Fit eta=alpha_s*C_F/(2*pi), x=C_A/C_F and y=T_R/C_F simultaneously with MINUIT using 82 selected bins of six correlated observables. Use NLO O(alpha_s^3) four-jet angular predictions, NLO+NLL matched rates (R matching for R4, ln R matching for D2), five massless quark flavors and default mu/sqrt(s)=1. Convert the fitted ratios to C_A, C_F and alpha_s(M_Z) with the normalization T_R=1/2.",
      "observable": "OPAL correlated color-factor fit",
      "finding": "The NLO and resummation-conditioned simultaneous parameter inference.",
      "limitations": [
        "The bin covariance includes data statistics, finite Monte Carlo statistics and cross-bin/cross-observable dependence, estimated using 90 subsamples. Default cuts require 0.9<C_tot<1.1, relaxed to 0.85<C_tot<1.15 for R4. Systematic variations reuse the default covariance.",
        "Systematics use the reported fit-quality weighting with specified deviation-based exceptions; theoretical uncertainty takes the largest of scale/matching estimates. Scale, hadronization and five-parton migration checks are model-dependent, not independent new acquisitions. The N_f=4 secondary-vertex check was not included in assigned systematics. The cubic-Casimir coefficient was consistent with zero in the cited numerical integration, so it was not fitted."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 11-12, Sections 3.4-3.5, Equation 7 and Table 2: correlated simultaneous fit",
        "Author v1, pages 12-17, Section 4 and Tables 3-7: model variations and systematic correlations",
        "Author v1, pages 19-22, Appendix, Equations 8-29: perturbative order, matching and color normalization",
        "Author v1, pages 18-19, Sections 5-6; page 29, Figure 4: color-factor results and conditional SU(3) comparison",
        "Author v1, pages 9-10, Section 3.3 and Equations 4-6: detector and hadronization corrections"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100699",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata; no exhaustive correction census. Section 2 and Figure 1 differ on the benchmark coupling, explicitly retained outside the fitted result."
    }
  ],
  "comparisons": [
    {
      "id": "opal2001-color-su3",
      "candidate": "The SU(3) color-factor point agrees with the simultaneous angular-and-rate fit under the adopted perturbative and response models.",
      "alternative": "Other color-factor ratios in the same fitted non-Abelian parameter family.",
      "discriminator": "Use the correlated six-observable fit and the reported total-uncertainty contours for (C_A/C_F,T_R/C_F).",
      "result": "conditional-support",
      "limit": "This is a model-conditioned color-factor test, not a directly imaged self-interaction or a complete separately simulated Abelian/gauge-group discrimination. The alternate fixed-alpha_s fit, historical contours and ratio conversion are not independent acquisitions.",
      "assumptions": [
        "The correction generators adopt standard QCD color factors and Lund hadronization. HERWIG, fragmentation parameters and other variations assess dependence; the inference is not free of the tested theory or hadronization assumptions.",
        "Table 2 reports eta=0.0256 +/- 0.0003 and statistical correlations rho(eta,x)=-0.33, rho(eta,y)=-0.11, rho(x,y)=0.90, with chi2/dof=98.5/79. Table 7 separately gives systematic errors (0.0013,0.136,0.060) and correlations (-0.83,0.06,0.38) in that same parameter order. They are not independent errors or the covariance of (alpha_s,C_A,C_F)."
      ],
      "sourceIds": [
        "opal2001-colour-factors"
      ],
      "claimIds": [
        "C-phys-opal2001-color-distributions",
        "C-phys-opal2001-color-factors"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:opal2001-color-acquisition-context",
      "role": "experimental-context",
      "denotes": "The selected Z-pole preparation and its clustered hadronic events.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opal2001-color-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:opal2001-color-response-context",
      "role": "model-context",
      "denotes": "Simulation-based bin corrections between detector, hadron and parton conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opal2001-color-response-context"
      ]
    },
    {
      "nodeId": "phys:opal2001-color-inference-context",
      "role": "model-context",
      "denotes": "The NLO and resummation-conditioned simultaneous parameter inference.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opal2001-color-inference-context"
      ]
    },
    {
      "nodeId": "phys:opal2001-color-distributions",
      "role": "scoped-phenomenon",
      "denotes": "Six same-sample corrected distributions, with normalization and bin dependence.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opal2001-color-distributions"
      ]
    },
    {
      "nodeId": "phys:opal2001-color-factors",
      "role": "scoped-phenomenon",
      "denotes": "The conditional fitted ratios and their correlated conversion using T_R=1/2.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opal2001-color-factors"
      ]
    }
  ]
};

/** Preserve corrected distributions, correlated inference and declared color normalization. */
export function validateGluonColorContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Gluon-color ${kind} changed ${id}: preserve response, covariance and conditional inference`);
    }
  }
}
