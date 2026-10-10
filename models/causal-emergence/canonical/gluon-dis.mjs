import assert from "node:assert/strict";

export const GLUON_DIS_CHECKS = new Map();
export const GLUON_DIS_ANALYTICAL_SOURCES = new Map();
export const GLUON_DIS_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "h1-2001-dis-acquisition-context",
      "M-phys-h1-2001-dis-acquisition-context",
      [
        "h1-2001-dis-acquisition"
      ]
    ],
    [
      "h1-2001-dis-response-context",
      "M-phys-h1-2001-dis-response-context",
      [
        "h1-2001-dis-response"
      ]
    ],
    [
      "h1-2001-dis-evolution-context",
      "M-phys-h1-2001-dis-evolution-context",
      [
        "h1-2001-dis-evolution"
      ]
    ]
  ],
  "observations": [
    [
      "h1-2001-dis-crosssections",
      "C-phys-h1-2001-dis-crosssections",
      [
        "h1-2001-dis-acquisition"
      ]
    ],
    [
      "h1-2001-dis-gluon-distribution",
      "C-phys-h1-2001-dis-gluon-distribution",
      [
        "h1-2001-dis-evolution"
      ]
    ]
  ],
  "dependencies": [
    [
      "h1-2001-dis-acquisition-context-h1-2001-dis-crosssections",
      "h1-2001-dis-acquisition-context",
      "h1-2001-dis-crosssections",
      "M-phys-h1-2001-dis-crosssections",
      "measurement-context"
    ],
    [
      "h1-2001-dis-response-context-h1-2001-dis-crosssections",
      "h1-2001-dis-response-context",
      "h1-2001-dis-crosssections",
      "M-phys-h1-2001-dis-crosssections",
      "interpretation-dependency"
    ],
    [
      "h1-2001-dis-crosssections-h1-2001-dis-gluon-distribution",
      "h1-2001-dis-crosssections",
      "h1-2001-dis-gluon-distribution",
      "M-phys-h1-2001-dis-gluon-distribution",
      "interpretation-dependency"
    ],
    [
      "h1-2001-dis-response-context-h1-2001-dis-gluon-distribution",
      "h1-2001-dis-response-context",
      "h1-2001-dis-gluon-distribution",
      "M-phys-h1-2001-dis-gluon-distribution",
      "interpretation-dependency"
    ],
    [
      "h1-2001-dis-evolution-context-h1-2001-dis-gluon-distribution",
      "h1-2001-dis-evolution-context",
      "h1-2001-dis-gluon-distribution",
      "M-phys-h1-2001-dis-gluon-distribution",
      "interpretation-dependency"
    ],
    [
      "qcd-h1-2001-dis-gluon-distribution",
      "qcd",
      "h1-2001-dis-gluon-distribution",
      "M-phys-h1-2001-dis-gluon-distribution",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "h1-2001-dis-acquisition",
    "h1-2001-dis-response",
    "h1-2001-dis-evolution"
  ],
  "comparisonIds": [
    "h1-2001-heavy-flavor-prescription"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "h1-2001-dis-gluon",
      "kind": "research-publication",
      "title": "Deep-Inelastic Inclusive ep Scattering at Low x and a Determination of alpha_s",
      "authors": [
        "H1 Collaboration"
      ],
      "year": 2001,
      "doi": "10.1007/s100520100720",
      "url": "https://arxiv.org/pdf/hep-ex/0012053v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v1, printed pages 4-10, Sections 1-3 and Table 1: 1996/97 e+p exposure, selection and simulation",
          "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
          "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions",
          "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit",
          "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence",
          "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty"
        ],
        "limit": "Read the abstract and scientific text on author-v1 printed pages 4-31 (PDF pages 5-32), Table 9 and captions of Tables 10-12 and Figures 12, 18-19, 21 and 23; visually checked Equations 1-2 and 18-19, scale conventions and Figures 18-19. The sole arXiv version is dated 21 December 2000; journal metadata is EPJ C 21, 33-61 (2001), with revision 10 May 2001. The revised publisher PDF, upstream H1 high-Q2/BCDMS articles and fit files were not independently reviewed. Scale notation follows the explicit definitions on printed page 24; the Table 7 caption reverses the mr/mf labels. No detector, covariance, DGLAP or PDF-fit replay, current-best claim or exhaustive correction census is made."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-h1-2001-dis-acquisition-context",
      "kind": "method",
      "statement": "H1 records 1996/97 e+p collisions with 27.6 GeV positrons and 820 GeV protons. The new inclusive neutral-current sample covers 1.5<=Q2<=150 GeV^2 and 3e-5<=x<=0.2. Standard samples have 4.5+13.4 pb^-1 and a dedicated low-Q2 run 1.8 pb^-1; effective exposure depends on the trigger, with smaller high-y subsets. Scattered-positron and hadronic measurements enter the stated event selection.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 4-10, Sections 1-3 and Table 1: 1996/97 e+p exposure, selection and simulation",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Trigger-dependent luminosities are overlapping selections, not independent exposures to add. New low-Q2 data and published high-Q2 H1 input share the 1996/97 running; the BCDMS muon-proton input is a distinct upstream dataset, not newly acquired H1 data."
      ],
      "contextIds": [
        "h1-2001-dis-acquisition"
      ]
    },
    {
      "id": "M-phys-h1-2001-dis-response-context",
      "kind": "method",
      "statement": "Reconstruct kinematics with the electron or hadronic Sigma method, calibrate against control data, subtract photoproduction background and apply iterative bin, acceptance and radiative corrections using detector simulation. In the one-photon approximation, sigma_r=F2-y^2*FL/[1+(1-y)^2]. The published F2 extraction for y<=0.6 uses R=FL/(F2-FL) from a QCD fit; it is a derived response, not a separate acquired spectrum.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Simulation, luminosity, calibration controls and background subtraction are inputs. The generator starting with FL=0 is reweighted; it does not establish zero longitudinal response. The quoted 1.7% global normalization error and bin correlations are not independent point errors."
      ],
      "contextIds": [
        "h1-2001-dis-response"
      ]
    },
    {
      "id": "M-phys-h1-2001-dis-evolution-context",
      "kind": "method",
      "statement": "Fit reduced cross sections with NLO DGLAP evolution and coefficient functions in MSbar, using central mu_r^2=mu_f^2=Q2, input scale Q0^2=4 GeV^2, parameterized quark combinations and xg, and massive charm/beauty production with adopted on-shell masses 1.4/4.5 GeV. The standard H1-only gluon fit fixes alpha_s(MZ^2)=0.115 and uses 3.5<=Q2<=3000 GeV^2, including published high-Q2 H1 data from the same 1996/97 running. Equation 33 treats normalization and correlated-systematic nuisance parameters.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fixed-coupling standard fit differs from both an H1-only free-coupling fit and the simultaneous H1+BCDMS fit. The latter uses y_mu>0.3 and supplies the +/-0.0017 experimental alpha_s variation illustrated in Figure 18; this is not an independent H1-only constraint.",
        "Factorization/renormalization scales and input PDF forms are conventions, not measured clocks or unique constituent populations. Coupled singlet/gluon evolution, flavor assumptions and fitted correlations are not reconstructed here."
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    },
    {
      "id": "C-phys-h1-2001-dis-crosssections",
      "kind": "review-finding",
      "statement": "H1 reports corrected reduced cross sections in Tables 9-12 over 1.5<=Q2<=150 GeV^2 and 3e-5<=x<=0.2, with bin-dependent statistical, correlated and uncorrelated systematic errors. These are inclusive detector-corrected responses. The F2 values tabulated alongside them use the fitted longitudinal correction; the later gluon inference uses the reduced cross sections and their Q2 dependence.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
          "role": "supports",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions",
          "role": "supports",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Corrected cross sections, fitted longitudinal subtraction and the resulting scaling readouts reuse the same events and controls. The full measured range extends below the standard Q2>=3.5 GeV^2 fit cut; no raw-event or table-covariance replay is supplied."
      ],
      "contextIds": [
        "h1-2001-dis-acquisition"
      ]
    },
    {
      "id": "C-phys-h1-2001-dis-gluon-distribution",
      "kind": "review-finding",
      "statement": "The standard H1 NLO analysis constrains the momentum-weighted gluon distribution xg(x,Q2) for 3e-4<=x<=0.1. Its experimental uncertainty is about 5% at Q2=5 GeV^2 and about 3% at Q2=20 GeV^2. Figure 18 separately adds an alpha_s uncertainty borrowed from the joint H1+BCDMS analysis and then model uncertainty. This is a scheme- and model-conditioned distribution inferred mainly through scaling violations, not an observed free-gluon count.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit",
          "role": "supports",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence",
          "role": "supports",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty",
          "role": "supports",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 3% figure is experimental precision in the stated range, not total theory uncertainty. The borrowed H1+BCDMS coupling fit separately quotes asymmetric model errors and an additional estimated scale uncertainty about +/-0.005, not a stated confidence interval; none is absorbed into a universal 3% error.",
        "The analysis cannot reliably determine the xg shape for x>0.1. The source explicitly treats xg as nonobservable; heavy-flavor treatment changes it. It does not determine gluon spin, color factors, isolated particles or universal hadron formation."
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    },
    {
      "id": "M-phys-h1-2001-dis-crosssections",
      "kind": "method",
      "statement": "The declared inclusive selection and detector/radiative corrections jointly define sigma_r. Its accompanying F2 extraction uses the fitted longitudinal response, so the two are not independent measurements.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 4-10, Sections 1-3 and Table 1: 1996/97 e+p exposure, selection and simulation",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No published correction or error matrix is recomputed."
      ],
      "contextIds": [
        "h1-2001-dis-acquisition"
      ]
    },
    {
      "id": "M-phys-h1-2001-dis-gluon-distribution",
      "kind": "method",
      "statement": "QCD supplies the adopted evolution model. The measured reduced cross sections, detector corrections, same-period high-Q2 input and correlated NLO fit condition xg; the H1+BCDMS coupling constraint adds reused external data to its illustrated uncertainty.",
      "scope": "The H1 1996/97 inclusive e+p cross sections and their conditional low-x NLO gluon-distribution extraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty",
          "role": "method",
          "note": "Supports this stage of the reported H1 analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The dependency is inferential, not measured causation or a direct count of gluons."
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:h1-2001-dis-acquisition-context",
      "name": "H1 inclusive e+p acquisition",
      "kind": "context",
      "description": "H1 records 1996/97 e+p collisions with 27.6 GeV positrons and 820 GeV protons. The new inclusive neutral-current sample covers 1.5<=Q2<=150 GeV^2 and 3e-5<=x<=0.2. Standard samples have 4.5+13.4 pb^-1 and a dedicated low-Q2 run 1.8 pb^-1; effective exposure depends on the trigger, with smaller high-y subsets. Scattered-positron and hadronic measurements enter the stated event selection.",
      "claimIds": [
        "M-phys-h1-2001-dis-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 4-10, Sections 1-3 and Table 1: 1996/97 e+p exposure, selection and simulation"
        }
      ],
      "openObligations": [
        "Trigger-dependent luminosities are overlapping selections, not independent exposures to add. New low-Q2 data and published high-Q2 H1 input share the 1996/97 running; the BCDMS muon-proton input is a distinct upstream dataset, not newly acquired H1 data."
      ]
    },
    {
      "id": "phys:h1-2001-dis-response-context",
      "name": "H1 DIS reconstruction and corrections",
      "kind": "context",
      "description": "Reconstruct kinematics with the electron or hadronic Sigma method, calibrate against control data, subtract photoproduction background and apply iterative bin, acceptance and radiative corrections using detector simulation. In the one-photon approximation, sigma_r=F2-y^2*FL/[1+(1-y)^2]. The published F2 extraction for y<=0.6 uses R=FL/(F2-FL) from a QCD fit; it is a derived response, not a separate acquired spectrum.",
      "claimIds": [
        "M-phys-h1-2001-dis-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions"
        }
      ],
      "openObligations": [
        "Simulation, luminosity, calibration controls and background subtraction are inputs. The generator starting with FL=0 is reweighted; it does not establish zero longitudinal response. The quoted 1.7% global normalization error and bin correlations are not independent point errors."
      ]
    },
    {
      "id": "phys:h1-2001-dis-evolution-context",
      "name": "H1 conditional NLO parton evolution",
      "kind": "context",
      "description": "Fit reduced cross sections with NLO DGLAP evolution and coefficient functions in MSbar, using central mu_r^2=mu_f^2=Q2, input scale Q0^2=4 GeV^2, parameterized quark combinations and xg, and massive charm/beauty production with adopted on-shell masses 1.4/4.5 GeV. The standard H1-only gluon fit fixes alpha_s(MZ^2)=0.115 and uses 3.5<=Q2<=3000 GeV^2, including published high-Q2 H1 data from the same 1996/97 running. Equation 33 treats normalization and correlated-systematic nuisance parameters.",
      "claimIds": [
        "M-phys-h1-2001-dis-evolution-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty"
        }
      ],
      "openObligations": [
        "The fixed-coupling standard fit differs from both an H1-only free-coupling fit and the simultaneous H1+BCDMS fit. The latter uses y_mu>0.3 and supplies the +/-0.0017 experimental alpha_s variation illustrated in Figure 18; this is not an independent H1-only constraint.",
        "Factorization/renormalization scales and input PDF forms are conventions, not measured clocks or unique constituent populations. Coupled singlet/gluon evolution, flavor assumptions and fitted correlations are not reconstructed here."
      ]
    },
    {
      "id": "phys:h1-2001-dis-crosssections",
      "name": "H1 reduced DIS cross sections",
      "kind": "scoped-process",
      "description": "H1 reports corrected reduced cross sections in Tables 9-12 over 1.5<=Q2<=150 GeV^2 and 3e-5<=x<=0.2, with bin-dependent statistical, correlated and uncorrelated systematic errors. These are inclusive detector-corrected responses. The F2 values tabulated alongside them use the fitted longitudinal correction; the later gluon inference uses the reduced cross sections and their Q2 dependence.",
      "claimIds": [
        "C-phys-h1-2001-dis-crosssections"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions"
        }
      ],
      "openObligations": [
        "Corrected cross sections, fitted longitudinal subtraction and the resulting scaling readouts reuse the same events and controls. The full measured range extends below the standard Q2>=3.5 GeV^2 fit cut; no raw-event or table-covariance replay is supplied."
      ]
    },
    {
      "id": "phys:h1-2001-dis-gluon-distribution",
      "name": "H1 low-x gluon distribution",
      "kind": "scoped-process",
      "description": "The standard H1 NLO analysis constrains the momentum-weighted gluon distribution xg(x,Q2) for 3e-4<=x<=0.1. Its experimental uncertainty is about 5% at Q2=5 GeV^2 and about 3% at Q2=20 GeV^2. Figure 18 separately adds an alpha_s uncertainty borrowed from the joint H1+BCDMS analysis and then model uncertainty. This is a scheme- and model-conditioned distribution inferred mainly through scaling violations, not an observed free-gluon count.",
      "claimIds": [
        "C-phys-h1-2001-dis-gluon-distribution"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence"
        },
        {
          "sourceId": "h1-2001-dis-gluon",
          "locator": "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty"
        }
      ],
      "openObligations": [
        "The 3% figure is experimental precision in the stated range, not total theory uncertainty. The borrowed H1+BCDMS coupling fit separately quotes asymmetric model errors and an additional estimated scale uncertainty about +/-0.005, not a stated confidence interval; none is absorbed into a universal 3% error.",
        "The analysis cannot reliably determine the xg shape for x>0.1. The source explicitly treats xg as nonobservable; heavy-flavor treatment changes it. It does not determine gluon spin, color factors, isolated particles or universal hadron formation."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:h1-2001-dis-acquisition-context-h1-2001-dis-crosssections",
      "source": "phys:h1-2001-dis-acquisition-context",
      "target": "phys:h1-2001-dis-crosssections",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Beam conditions, trigger-dependent exposure and inclusive selection define the corrected response sample.",
      "claimIds": [
        "M-phys-h1-2001-dis-crosssections"
      ],
      "contextIds": [
        "h1-2001-dis-acquisition"
      ]
    },
    {
      "id": "physics:h1-2001-dis-response-context-h1-2001-dis-crosssections",
      "source": "phys:h1-2001-dis-response-context",
      "target": "phys:h1-2001-dis-crosssections",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reconstruction, background and detector/radiative corrections produce the published reduced cross sections.",
      "claimIds": [
        "M-phys-h1-2001-dis-crosssections"
      ],
      "contextIds": [
        "h1-2001-dis-acquisition"
      ]
    },
    {
      "id": "physics:h1-2001-dis-crosssections-h1-2001-dis-gluon-distribution",
      "source": "phys:h1-2001-dis-crosssections",
      "target": "phys:h1-2001-dis-gluon-distribution",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The Q2 dependence of these same cross sections supplies scaling-violation information to the NLO fit.",
      "claimIds": [
        "M-phys-h1-2001-dis-gluon-distribution"
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    },
    {
      "id": "physics:h1-2001-dis-response-context-h1-2001-dis-gluon-distribution",
      "source": "phys:h1-2001-dis-response-context",
      "target": "phys:h1-2001-dis-gluon-distribution",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Response systematics and their correlations condition the PDF inference; derived F2 is not an independent gluon measurement.",
      "claimIds": [
        "M-phys-h1-2001-dis-gluon-distribution"
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    },
    {
      "id": "physics:h1-2001-dis-evolution-context-h1-2001-dis-gluon-distribution",
      "source": "phys:h1-2001-dis-evolution-context",
      "target": "phys:h1-2001-dis-gluon-distribution",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The specified evolution, quark input, coupling and heavy-flavor prescription define this conditional xg extraction.",
      "claimIds": [
        "M-phys-h1-2001-dis-gluon-distribution"
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    },
    {
      "id": "physics:qcd-h1-2001-dis-gluon-distribution",
      "source": "phys:qcd",
      "target": "phys:h1-2001-dis-gluon-distribution",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "QCD is the adopted framework for the quark/gluon evolution; this formal dependency does not separately measure spin or color factors.",
      "claimIds": [
        "M-phys-h1-2001-dis-gluon-distribution"
      ],
      "contextIds": [
        "h1-2001-dis-evolution"
      ]
    }
  ],
  "studies": [
    {
      "id": "h1-2001-dis-acquisition",
      "sourceId": "h1-2001-dis-gluon",
      "studyType": "primary-experiment",
      "doi": "10.1007/s100520100720",
      "journal": "European Physical Journal C",
      "volume": "21",
      "issue": "1",
      "pages": "33-61",
      "system": "H1 inclusive 1996/97 e+p scattering with declared high-Q2 H1 and external BCDMS inputs to the QCD analyses",
      "preparation": "H1 records 1996/97 e+p collisions with 27.6 GeV positrons and 820 GeV protons. The new inclusive neutral-current sample covers 1.5<=Q2<=150 GeV^2 and 3e-5<=x<=0.2. Standard samples have 4.5+13.4 pb^-1 and a dedicated low-Q2 run 1.8 pb^-1; effective exposure depends on the trigger, with smaller high-y subsets. Scattered-positron and hadronic measurements enter the stated event selection.",
      "observable": "H1 inclusive e+p acquisition",
      "finding": "The 1996/97 beam, exposure and selected inclusive preparation.",
      "limitations": [
        "Trigger-dependent luminosities are overlapping selections, not independent exposures to add. New low-Q2 data and published high-Q2 H1 input share the 1996/97 running; the BCDMS muon-proton input is a distinct upstream dataset, not newly acquired H1 data."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v1, printed pages 4-10, Sections 1-3 and Table 1: 1996/97 e+p exposure, selection and simulation",
        "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
        "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100720",
      "correctionCheck": "Checked arXiv sole-v1 identity and publisher metadata, including the later journal revision date; revised publisher content was not independently compared. No latest-result or exhaustive-correction claim."
    },
    {
      "id": "h1-2001-dis-response",
      "sourceId": "h1-2001-dis-gluon",
      "studyType": "computational-analysis",
      "doi": "10.1007/s100520100720",
      "journal": "European Physical Journal C",
      "volume": "21",
      "issue": "1",
      "pages": "33-61",
      "system": "H1 inclusive 1996/97 e+p scattering with declared high-Q2 H1 and external BCDMS inputs to the QCD analyses",
      "preparation": "Reconstruct kinematics with the electron or hadronic Sigma method, calibrate against control data, subtract photoproduction background and apply iterative bin, acceptance and radiative corrections using detector simulation. In the one-photon approximation, sigma_r=F2-y^2*FL/[1+(1-y)^2]. The published F2 extraction for y<=0.6 uses R=FL/(F2-FL) from a QCD fit; it is a derived response, not a separate acquired spectrum.",
      "observable": "H1 DIS reconstruction and corrections",
      "finding": "Detector and radiative corrections, auxiliary controls and the fitted longitudinal response.",
      "limitations": [
        "Simulation, luminosity, calibration controls and background subtraction are inputs. The generator starting with FL=0 is reweighted; it does not establish zero longitudinal response. The quoted 1.7% global normalization error and bin correlations are not independent point errors."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v1, printed pages 5-6 and 10-17, Sections 2 and 4-6, Equations 1-2 and 11: reconstruction, corrections and structure-function extraction",
        "Author v1, printed pages 13-14 and 58-61, Section 4.4-4.5 and Tables 9-12: corrected reduced cross sections and error definitions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100720",
      "correctionCheck": "Checked arXiv sole-v1 identity and publisher metadata, including the later journal revision date; revised publisher content was not independently compared. No latest-result or exhaustive-correction claim."
    },
    {
      "id": "h1-2001-dis-evolution",
      "sourceId": "h1-2001-dis-gluon",
      "studyType": "computational-analysis",
      "doi": "10.1007/s100520100720",
      "journal": "European Physical Journal C",
      "volume": "21",
      "issue": "1",
      "pages": "33-61",
      "system": "H1 inclusive 1996/97 e+p scattering with declared high-Q2 H1 and external BCDMS inputs to the QCD analyses",
      "preparation": "Fit reduced cross sections with NLO DGLAP evolution and coefficient functions in MSbar, using central mu_r^2=mu_f^2=Q2, input scale Q0^2=4 GeV^2, parameterized quark combinations and xg, and massive charm/beauty production with adopted on-shell masses 1.4/4.5 GeV. The standard H1-only gluon fit fixes alpha_s(MZ^2)=0.115 and uses 3.5<=Q2<=3000 GeV^2, including published high-Q2 H1 data from the same 1996/97 running. Equation 33 treats normalization and correlated-systematic nuisance parameters.",
      "observable": "H1 conditional NLO parton evolution",
      "finding": "Parameterized quark/gluon evolution and correlated inference with declared coupling and scale choices.",
      "limitations": [
        "The fixed-coupling standard fit differs from both an H1-only free-coupling fit and the simultaneous H1+BCDMS fit. The latter uses y_mu>0.3 and supplies the +/-0.0017 experimental alpha_s variation illustrated in Figure 18; this is not an independent H1-only constraint.",
        "Factorization/renormalization scales and input PDF forms are conventions, not measured clocks or unique constituent populations. Coupled singlet/gluon evolution, flavor assumptions and fitted correlations are not reconstructed here."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v1, printed pages 18-21 and 28-31, Sections 7.1-7.2 and Appendix A, Equations 18-19 and 33: NLO evolution, input distributions and correlated fit",
        "Author v1, printed pages 21-22 and 51-52, Section 7.2 and Figures 18-19: conditional gluon distribution, uncertainty bands and heavy-flavor dependence",
        "Author v1, printed pages 22-25 and 56, Section 7.3, Equation 20 and Figure 23: reused H1+BCDMS data, simultaneous coupling fit and scale uncertainty"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://link.springer.com/article/10.1007/s100520100720",
      "correctionCheck": "Checked arXiv sole-v1 identity and publisher metadata, including the later journal revision date; revised publisher content was not independently compared. No latest-result or exhaustive-correction claim."
    }
  ],
  "comparisons": [
    {
      "id": "h1-2001-heavy-flavor-prescription",
      "candidate": "The standard massive-charm/beauty NLO fit supplies the displayed low-x gluon distribution.",
      "alternative": "A massless-heavy-flavor NLO prescription is applied to the same H1 data.",
      "discriminator": "Section 7.2 and Figure 19 compare the resulting distributions at Q2=20 GeV^2: the massless treatment gives xg about 15% lower at small x; a separate Mellin-space calculation checks that implementation.",
      "result": "conditional-support",
      "limit": "This reported prescription comparison shows PDF model dependence, not rejection of the alternative by a reproduced likelihood or a new independent gluon observation.",
      "assumptions": [
        "The compared distributions reuse H1 measurements and retain their own theoretical prescriptions."
      ],
      "sourceIds": [
        "h1-2001-dis-gluon"
      ],
      "claimIds": [
        "M-phys-h1-2001-dis-evolution-context",
        "C-phys-h1-2001-dis-gluon-distribution"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:h1-2001-dis-acquisition-context",
      "role": "experimental-context",
      "denotes": "The 1996/97 beam, exposure and selected inclusive preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-h1-2001-dis-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:h1-2001-dis-response-context",
      "role": "model-context",
      "denotes": "Detector and radiative corrections, auxiliary controls and the fitted longitudinal response.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-h1-2001-dis-response-context"
      ]
    },
    {
      "nodeId": "phys:h1-2001-dis-evolution-context",
      "role": "model-context",
      "denotes": "Parameterized quark/gluon evolution and correlated inference with declared coupling and scale choices.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-h1-2001-dis-evolution-context"
      ]
    },
    {
      "nodeId": "phys:h1-2001-dis-crosssections",
      "role": "scoped-phenomenon",
      "denotes": "The published corrected inclusive response, distinct from its derived structure functions and PDFs.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-h1-2001-dis-crosssections"
      ]
    },
    {
      "nodeId": "phys:h1-2001-dis-gluon-distribution",
      "role": "scoped-phenomenon",
      "denotes": "The publication-reported conditional gluon PDF and separate uncertainty components.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-h1-2001-dis-gluon-distribution"
      ]
    }
  ]
};

/** Keep corrected DIS response distinct from scheme-dependent gluon inference. */
export function validateGluonDISContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing gluon-DIS ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value,
        `Gluon-DIS ${kind} changed ${id}.${key}: preserve measured response, data reuse and conditional PDF inference`);
    }
  }
}
