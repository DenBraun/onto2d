import assert from "node:assert/strict";

export const Z_LINESHAPE_CHECKS = new Map();
export const Z_LINESHAPE_ANALYTICAL_SOURCES = new Map();
export const Z_LINESHAPE_ADMISSION = {
  "definitions": [
    [
      "phys:z-line-shape-conventions",
      "D-phys-z-line-shape-conventions"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "lep1-z-acquisition-context",
      "M-phys-lep1-z-acquisition-context",
      [
        "lep1-z-acquisition"
      ]
    ],
    [
      "lep1-z-response-context",
      "M-phys-lep1-z-response-context",
      [
        "lep1-z-response"
      ]
    ],
    [
      "lep1-z-combination-context",
      "M-phys-lep1-z-combination-context",
      [
        "lep1-z-combination"
      ]
    ]
  ],
  "observations": [
    [
      "lep1-z-scan-responses",
      "C-phys-lep1-z-scan-responses",
      [
        "lep1-z-acquisition"
      ]
    ],
    [
      "lep1-z-experiment-parameters",
      "C-phys-lep1-z-experiment-parameters",
      [
        "lep1-z-response"
      ]
    ],
    [
      "lep1-z-line-shape",
      "C-phys-lep1-z-line-shape",
      [
        "lep1-z-combination"
      ]
    ],
    [
      "lep1-z-partial-widths",
      "C-phys-lep1-z-partial-widths",
      [
        "lep1-z-combination"
      ]
    ],
    [
      "lep1-z-branching-fractions",
      "C-phys-lep1-z-branching-fractions",
      [
        "lep1-z-combination"
      ]
    ]
  ],
  "dependencies": [
    [
      "lep1-z-acquisition-context-lep1-z-scan-responses",
      "lep1-z-acquisition-context",
      "lep1-z-scan-responses",
      "M-phys-lep1-z-scan-responses",
      "measurement-context"
    ],
    [
      "lep1-z-response-context-lep1-z-scan-responses",
      "lep1-z-response-context",
      "lep1-z-scan-responses",
      "M-phys-lep1-z-scan-responses",
      "interpretation-dependency"
    ],
    [
      "lep1-z-scan-responses-lep1-z-experiment-parameters",
      "lep1-z-scan-responses",
      "lep1-z-experiment-parameters",
      "M-phys-lep1-z-experiment-parameters",
      "interpretation-dependency"
    ],
    [
      "lep1-z-response-context-lep1-z-experiment-parameters",
      "lep1-z-response-context",
      "lep1-z-experiment-parameters",
      "M-phys-lep1-z-experiment-parameters",
      "interpretation-dependency"
    ],
    [
      "z-line-shape-conventions-lep1-z-experiment-parameters",
      "z-line-shape-conventions",
      "lep1-z-experiment-parameters",
      "M-phys-lep1-z-experiment-parameters",
      "interpretation-dependency"
    ],
    [
      "lep1-z-experiment-parameters-lep1-z-line-shape",
      "lep1-z-experiment-parameters",
      "lep1-z-line-shape",
      "M-phys-lep1-z-line-shape",
      "interpretation-dependency"
    ],
    [
      "lep1-z-combination-context-lep1-z-line-shape",
      "lep1-z-combination-context",
      "lep1-z-line-shape",
      "M-phys-lep1-z-line-shape",
      "interpretation-dependency"
    ],
    [
      "z-line-shape-conventions-lep1-z-line-shape",
      "z-line-shape-conventions",
      "lep1-z-line-shape",
      "M-phys-lep1-z-line-shape",
      "interpretation-dependency"
    ],
    [
      "lep1-z-line-shape-lep1-z-partial-widths",
      "lep1-z-line-shape",
      "lep1-z-partial-widths",
      "M-phys-lep1-z-partial-widths",
      "interpretation-dependency"
    ],
    [
      "lep1-z-combination-context-lep1-z-partial-widths",
      "lep1-z-combination-context",
      "lep1-z-partial-widths",
      "M-phys-lep1-z-partial-widths",
      "interpretation-dependency"
    ],
    [
      "inclusive-decay-width-branching-lep1-z-partial-widths",
      "inclusive-decay-width-branching",
      "lep1-z-partial-widths",
      "M-phys-lep1-z-partial-widths",
      "interpretation-dependency"
    ],
    [
      "lep1-z-partial-widths-lep1-z-branching-fractions",
      "lep1-z-partial-widths",
      "lep1-z-branching-fractions",
      "M-phys-lep1-z-branching-fractions",
      "interpretation-dependency"
    ],
    [
      "lep1-z-line-shape-lep1-z-branching-fractions",
      "lep1-z-line-shape",
      "lep1-z-branching-fractions",
      "M-phys-lep1-z-branching-fractions",
      "interpretation-dependency"
    ],
    [
      "lep1-z-combination-context-lep1-z-branching-fractions",
      "lep1-z-combination-context",
      "lep1-z-branching-fractions",
      "M-phys-lep1-z-branching-fractions",
      "interpretation-dependency"
    ],
    [
      "inclusive-decay-width-branching-lep1-z-branching-fractions",
      "inclusive-decay-width-branching",
      "lep1-z-branching-fractions",
      "M-phys-lep1-z-branching-fractions",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "lep1-z-acquisition",
    "lep1-z-response",
    "lep1-z-combination"
  ],
  "comparisonIds": [
    "lep1-z-response-versus-parameters",
    "lep1-z-convention-and-covariance",
    "lep1-z-dependent-decay-parameters"
  ],
  "inferenceSources": [
    [
      "M-phys-lep1-z-acquisition-context",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-response-context",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-combination-context",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "C-phys-lep1-z-scan-responses",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "C-phys-lep1-z-experiment-parameters",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "C-phys-lep1-z-line-shape",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "C-phys-lep1-z-partial-widths",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "C-phys-lep1-z-branching-fractions",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-scan-responses",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-experiment-parameters",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-line-shape",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-partial-widths",
      [
        "lep2006-z-lineshape"
      ]
    ],
    [
      "M-phys-lep1-z-branching-fractions",
      [
        "lep2006-z-lineshape"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "lep2006-z-lineshape",
      "kind": "research-publication",
      "title": "Precision Electroweak Measurements on the Z Resonance",
      "authors": [
        "ALEPH Collaboration",
        "DELPHI Collaboration",
        "L3 Collaboration",
        "OPAL Collaboration",
        "SLD Collaboration",
        "LEP Electroweak Working Group",
        "SLD Electroweak and Heavy Flavour Groups"
      ],
      "year": 2006,
      "doi": "10.1016/j.physrep.2005.12.006",
      "url": "https://arxiv.org/abs/hep-ex/0509008v3",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-report-sections",
        "locators": [
          "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states",
          "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread",
          "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands",
          "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates",
          "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "Author v3 PDF pages 31 and 34, Section 1.5.1, Equations 1.37 and 1.43-1.44; page 172, Section 7.2.1: inclusive total/partial widths and branching fractions"
        ],
        "limit": "Reviewed arXiv:hep-ex/0509008v3, revised 27 February 2006, the 302-page author journal version; the publisher PDF was not separately retrieved. Read the cover/contents and selected PDF pages 14, 16, 30-32, 34-35, 39-41, 45-76 and 172-174. Visually checked pages 30-31, 53, 61, 69-70, 75 and 173-174, including Figure 2.3 and Tables 2.4, 2.9-2.10, 2.13 and 7.1-7.2. Other figures and upstream papers are not independently reviewed. Heavy-flavor rows and the global electroweak, neutrino-count and Higgs-prediction branches are excluded. The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-z-line-shape-conventions",
      "kind": "review-finding",
      "statement": "In the report's c=hbar=1 convention, the Z propagator term has denominator s-mZ^2+i*s*GammaZ/mZ. The equivalent constant-width form uses s-mbarZ^2+i*mbarZ*GammabarZ, with mbarZ=mZ/sqrt(1+(GammaZ/mZ)^2) and GammabarZ=GammaZ/sqrt(1+(GammaZ/mZ)^2), together with the stated rescaling of Z exchange and gamma-Z interference. The observed cross-section also includes photon exchange/interference, QED radiator convolution and experimental response; it is not the bare denominator alone.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported mass and total width belong to the s-dependent Breit-Wigner convention. Detector/beam smearing and QED radiation are separate response effects. Neither a plotted peak width nor this parameter alone is a directly timed lifetime; spin-one and vector/axial couplings are framework assumptions of the parametrization.",
        "Pseudo-observables retain QED treatment, fixed SM hadronic gamma-Z interference and small SM-remnant assumptions. This qualified parametrization is not theory-free extraction or a unique scalar-vacuum test."
      ]
    },
    {
      "id": "M-phys-lep1-z-acquisition-context",
      "kind": "method",
      "statement": "Use the ALEPH, DELPHI, L3 and OPAL LEP-I electron-positron data accumulated mainly in 1990-1995 around the Z resonance. Peak and off-peak energy scans supply hadronic and charged-lepton samples; 1993 and 1995 use precision three-point scans. Reconstruct selected final states and the channel-specific angular observables with the declared detector acceptances.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This LEP-I combination uses the four LEP experiments; the separate SLD polarized sample, LEP-II W data and historical UA1 candidates are not additional observations in this fit.",
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      ],
      "contextIds": [
        "lep1-z-acquisition"
      ]
    },
    {
      "id": "M-phys-lep1-z-response-context",
      "kind": "method",
      "statement": "Correct selected event rates for efficiency and backgrounds, normalize by small-angle Bhabha luminosity and extrapolate to declared idealized acceptances. Adopt the beam-energy model, its spread and correlations, t-channel electron contributions and QED radiation. TOPAZ0 4.4 and ZFITTER 6.23 relate cross-sections and asymmetries to each experiment's nine pseudo-observables; preserve the combination-specific calibration and program updates.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed.",
        "Pseudo-observables retain QED treatment, fixed SM hadronic gamma-Z interference and small SM-remnant assumptions. This qualified parametrization is not theory-free extraction or a unique scalar-vacuum test.",
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result."
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "M-phys-lep1-z-combination-context",
      "kind": "method",
      "statement": "Combine four sets of nine pseudo-observables by the reported chi-square minimization using the 36-by-36 covariance. Preserve common beam-energy, luminosity, t-channel and QED/parametrization contributions, including the common theory term also added to diagonal blocks. Use the no-lepton-universality result and propagate its dependent parameter transformations to inclusive widths and fractions.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch.",
        "Table 2.13 excludes the stated parametric Higgs-mass dependence of mZ. No modern parameter update, direct SM global fit, or recombination of rounded inputs is performed."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "C-phys-lep1-z-scan-responses",
      "kind": "review-finding",
      "statement": "The report describes roughly 200 cross-section and forward-backward-asymmetry measurements per experiment. Corrected channel rates vary across the scan energy, and Figure 2.3 displays selected hadronic cross-sections around the three principal energies. These detector- and luminosity-corrected observables precede the nine fitted pseudo-observables; the plotted combination bands are fitted summaries of the same data.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cross-sections already use selection efficiency, backgrounds, acceptance and luminosity. Figure 2.3 data bars are statistical; its bands reuse the combined fit and common theory errors. No point digitization, raw-event table or complete scan-input replay is supplied.",
        "This LEP-I combination uses the four LEP experiments; the separate SLD polarized sample, LEP-II W data and historical UA1 candidates are not additional observations in this fit."
      ],
      "contextIds": [
        "lep1-z-acquisition"
      ]
    },
    {
      "id": "C-phys-lep1-z-experiment-parameters",
      "kind": "review-finding",
      "statement": "Table 2.4 reports four correlated nine-parameter fits: mZ, GammaZ, sigmaHad0, Re0, Rmu0, Rtau0 and three pole forward-backward asymmetries. The fitted total widths are ALEPH 2.4959 +/- 0.0043, DELPHI 2.4876 +/- 0.0041, L3 2.5025 +/- 0.0041 and OPAL 2.4948 +/- 0.0041 GeV. Their within-experiment matrices and shared uncertainties remain inputs to the combined result.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result.",
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors."
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "C-phys-lep1-z-line-shape",
      "kind": "review-finding",
      "statement": "The no-lepton-universality branch of Table 2.13 reports mZ=91.1876 +/- 0.0021 GeV, GammaZ=2.4952 +/- 0.0023 GeV and sigmaHad0=41.541 +/- 0.037 nb. The width ratios are Re0=20.804 +/- 0.050, Rmu0=20.785 +/- 0.033 and Rtau0=20.764 +/- 0.045. These are correlated pseudo-observables in the declared running-width convention, including the three asymmetry parameters in the joint fit.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch.",
        "Table 2.13 excludes the stated parametric Higgs-mass dependence of mZ. No modern parameter update, direct SM global fit, or recombination of rounded inputs is performed.",
        "The reported mass and total width belong to the s-dependent Breit-Wigner convention. Detector/beam smearing and QED radiation are separate response effects. Neither a plotted peak width nor this parameter alone is a directly timed lifetime; spin-one and vector/axial couplings are framework assumptions of the parametrization."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "C-phys-lep1-z-partial-widths",
      "kind": "review-finding",
      "statement": "In Table 7.1 without lepton universality, the reported inclusive partial widths are GammaHad=1745.8 +/- 2.7, Gammaee=83.92 +/- 0.12, Gammamumu=83.99 +/- 0.18 and Gammatautau=84.08 +/- 0.22 MeV. GammaInvisible=497.4 +/- 2.5 MeV is the total-width residual after those visible components. These are parameter transformations of the same LEP-I fit, retaining their reported correlations.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "C-phys-lep1-z-branching-fractions",
      "kind": "review-finding",
      "statement": "In Table 7.2 without lepton universality, the reported percentages are Bhad=69.967 +/- 0.093, Bee=3.3632 +/- 0.0042, Bmumu=3.3662 +/- 0.0066, Btautau=3.3696 +/- 0.0083 and Binvisible=19.934 +/- 0.098. Each visible fraction is its inclusive partial width divided by the common total width; the invisible fraction enforces the inclusive sum to one. These fractions and errors are dependent on the same fit and its correlations.",
      "scope": "The declared LEP-I Z line-shape and selected inclusive decay parameters of the 2006 author report.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "role": "supports",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "M-phys-lep1-z-scan-responses",
      "kind": "method",
      "statement": "Select and correct the declared scan sample using the detector, background, luminosity and beam response; distinguish plotted observations from bands fitted to them.",
      "scope": "The source-reported response, extraction or parameter-transformation stage.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cross-sections already use selection efficiency, backgrounds, acceptance and luminosity. Figure 2.3 data bars are statistical; its bands reuse the combined fit and common theory errors. No point digitization, raw-event table or complete scan-input replay is supplied.",
        "This LEP-I combination uses the four LEP experiments; the separate SLD polarized sample, LEP-II W data and historical UA1 candidates are not additional observations in this fit."
      ],
      "contextIds": [
        "lep1-z-acquisition"
      ]
    },
    {
      "id": "M-phys-lep1-z-experiment-parameters",
      "kind": "method",
      "statement": "Fit the corrected scan responses with the stated radiative/acceptance model and line-shape convention; retain the reported nine-parameter covariance and program updates.",
      "scope": "The source-reported response, extraction or parameter-transformation stage.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result.",
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors."
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "M-phys-lep1-z-line-shape",
      "kind": "method",
      "statement": "Combine the four fitted vectors with the declared full common covariance and running-width convention; neither independent scalar averaging nor a bare detector peak reproduces this result.",
      "scope": "The source-reported response, extraction or parameter-transformation stage.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch.",
        "Table 2.13 excludes the stated parametric Higgs-mass dependence of mZ. No modern parameter update, direct SM global fit, or recombination of rounded inputs is performed.",
        "The reported mass and total width belong to the s-dependent Breit-Wigner convention. Detector/beam smearing and QED radiation are separate response effects. Neither a plotted peak width nor this parameter alone is a directly timed lifetime; spin-one and vector/axial couplings are framework assumptions of the parametrization."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "M-phys-lep1-z-partial-widths",
      "kind": "method",
      "statement": "Transform the correlated line-shape parameters using the inclusive-width convention and reported analysis; keep the invisible component as a dependent residual.",
      "scope": "The source-reported response, extraction or parameter-transformation stage.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "M-phys-lep1-z-branching-fractions",
      "kind": "method",
      "statement": "Divide the inclusive components by the shared total width within the same correlated fit; constrain the invisible residual and do not pool fit branches.",
      "scope": "The source-reported response, extraction or parameter-transformation stage.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
          "role": "method",
          "note": "Supports the declared published LEP-I response or inference; no local likelihood replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch."
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:z-line-shape-conventions",
      "name": "Declared Z line-shape conventions",
      "kind": "definition",
      "description": "In the report's c=hbar=1 convention, the Z propagator term has denominator s-mZ^2+i*s*GammaZ/mZ. The equivalent constant-width form uses s-mbarZ^2+i*mbarZ*GammabarZ, with mbarZ=mZ/sqrt(1+(GammaZ/mZ)^2) and GammabarZ=GammaZ/sqrt(1+(GammaZ/mZ)^2), together with the stated rescaling of Z exchange and gamma-Z interference. The observed cross-section also includes photon exchange/interference, QED radiator convolution and experimental response; it is not the bare denominator alone.",
      "claimIds": [
        "D-phys-z-line-shape-conventions"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread"
        }
      ],
      "openObligations": [
        "The reported mass and total width belong to the s-dependent Breit-Wigner convention. Detector/beam smearing and QED radiation are separate response effects. Neither a plotted peak width nor this parameter alone is a directly timed lifetime; spin-one and vector/axial couplings are framework assumptions of the parametrization."
      ]
    },
    {
      "id": "phys:lep1-z-acquisition-context",
      "name": "LEP-I Z scan acquisition",
      "kind": "context",
      "description": "Use the ALEPH, DELPHI, L3 and OPAL LEP-I electron-positron data accumulated mainly in 1990-1995 around the Z resonance. Peak and off-peak energy scans supply hadronic and charged-lepton samples; 1993 and 1995 use precision three-point scans. Reconstruct selected final states and the channel-specific angular observables with the declared detector acceptances.",
      "claimIds": [
        "M-phys-lep1-z-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands"
        }
      ],
      "openObligations": [
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      ]
    },
    {
      "id": "phys:lep1-z-response-context",
      "name": "LEP-I response and pseudo-observable extraction",
      "kind": "context",
      "description": "Correct selected event rates for efficiency and backgrounds, normalize by small-angle Bhabha luminosity and extrapolate to declared idealized acceptances. Adopt the beam-energy model, its spread and correlations, t-channel electron contributions and QED radiation. TOPAZ0 4.4 and ZFITTER 6.23 relate cross-sections and asymmetries to each experiment's nine pseudo-observables; preserve the combination-specific calibration and program updates.",
      "claimIds": [
        "M-phys-lep1-z-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates"
        }
      ],
      "openObligations": [
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      ]
    },
    {
      "id": "phys:lep1-z-combination-context",
      "name": "Correlated LEP-I Z combination",
      "kind": "context",
      "description": "Combine four sets of nine pseudo-observables by the reported chi-square minimization using the 36-by-36 covariance. Preserve common beam-energy, luminosity, t-channel and QED/parametrization contributions, including the common theory term also added to diagonal blocks. Use the no-lepton-universality result and propagate its dependent parameter transformations to inclusive widths and fractions.",
      "claimIds": [
        "M-phys-lep1-z-combination-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality"
        }
      ],
      "openObligations": [
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      ]
    },
    {
      "id": "phys:lep1-z-scan-responses",
      "name": "Selected LEP-I scan responses",
      "kind": "scoped-process",
      "description": "The report describes roughly 200 cross-section and forward-backward-asymmetry measurements per experiment. Corrected channel rates vary across the scan energy, and Figure 2.3 displays selected hadronic cross-sections around the three principal energies. These detector- and luminosity-corrected observables precede the nine fitted pseudo-observables; the plotted combination bands are fitted summaries of the same data.",
      "claimIds": [
        "C-phys-lep1-z-scan-responses"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands"
        }
      ],
      "openObligations": [
        "Cross-sections already use selection efficiency, backgrounds, acceptance and luminosity. Figure 2.3 data bars are statistical; its bands reuse the combined fit and common theory errors. No point digitization, raw-event table or complete scan-input replay is supplied."
      ]
    },
    {
      "id": "phys:lep1-z-experiment-parameters",
      "name": "Individual LEP-I Z parameter fits",
      "kind": "scoped-process",
      "description": "Table 2.4 reports four correlated nine-parameter fits: mZ, GammaZ, sigmaHad0, Re0, Rmu0, Rtau0 and three pole forward-backward asymmetries. The fitted total widths are ALEPH 2.4959 +/- 0.0043, DELPHI 2.4876 +/- 0.0041, L3 2.5025 +/- 0.0041 and OPAL 2.4948 +/- 0.0041 GeV. Their within-experiment matrices and shared uncertainties remain inputs to the combined result.",
      "claimIds": [
        "C-phys-lep1-z-experiment-parameters"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch"
        }
      ],
      "openObligations": [
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result."
      ]
    },
    {
      "id": "phys:lep1-z-line-shape",
      "name": "Combined LEP-I Z line shape",
      "kind": "scoped-process",
      "description": "The no-lepton-universality branch of Table 2.13 reports mZ=91.1876 +/- 0.0021 GeV, GammaZ=2.4952 +/- 0.0023 GeV and sigmaHad0=41.541 +/- 0.037 nb. The width ratios are Re0=20.804 +/- 0.050, Rmu0=20.785 +/- 0.033 and Rtau0=20.764 +/- 0.045. These are correlated pseudo-observables in the declared running-width convention, including the three asymmetry parameters in the joint fit.",
      "claimIds": [
        "C-phys-lep1-z-line-shape"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch"
        }
      ],
      "openObligations": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors."
      ]
    },
    {
      "id": "phys:lep1-z-partial-widths",
      "name": "Derived inclusive Z partial widths",
      "kind": "scoped-process",
      "description": "In Table 7.1 without lepton universality, the reported inclusive partial widths are GammaHad=1745.8 +/- 2.7, Gammaee=83.92 +/- 0.12, Gammamumu=83.99 +/- 0.18 and Gammatautau=84.08 +/- 0.22 MeV. GammaInvisible=497.4 +/- 2.5 MeV is the total-width residual after those visible components. These are parameter transformations of the same LEP-I fit, retaining their reported correlations.",
      "claimIds": [
        "C-phys-lep1-z-partial-widths"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality"
        }
      ],
      "openObligations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted."
      ]
    },
    {
      "id": "phys:lep1-z-branching-fractions",
      "name": "Derived inclusive Z branching fractions",
      "kind": "scoped-process",
      "description": "In Table 7.2 without lepton universality, the reported percentages are Bhad=69.967 +/- 0.093, Bee=3.3632 +/- 0.0042, Bmumu=3.3662 +/- 0.0066, Btautau=3.3696 +/- 0.0083 and Binvisible=19.934 +/- 0.098. Each visible fraction is its inclusive partial width divided by the common total width; the invisible fraction enforces the inclusive sum to one. These fractions and errors are dependent on the same fit and its correlations.",
      "claimIds": [
        "C-phys-lep1-z-branching-fractions"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality"
        }
      ],
      "openObligations": [
        "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lep1-z-acquisition-context-lep1-z-scan-responses",
      "source": "phys:lep1-z-acquisition-context",
      "target": "phys:lep1-z-scan-responses",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The four LEP-I acquisitions supply the selected scan data.",
      "claimIds": [
        "M-phys-lep1-z-scan-responses"
      ],
      "contextIds": [
        "lep1-z-acquisition"
      ]
    },
    {
      "id": "physics:lep1-z-response-context-lep1-z-scan-responses",
      "source": "phys:lep1-z-response-context",
      "target": "phys:lep1-z-scan-responses",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Selection, background, luminosity and beam corrections determine the published response observables.",
      "claimIds": [
        "M-phys-lep1-z-scan-responses"
      ],
      "contextIds": [
        "lep1-z-acquisition"
      ]
    },
    {
      "id": "physics:lep1-z-scan-responses-lep1-z-experiment-parameters",
      "source": "phys:lep1-z-scan-responses",
      "target": "phys:lep1-z-experiment-parameters",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The experiment fits require the selected scan responses, adopted response model and declared line-shape convention.",
      "claimIds": [
        "M-phys-lep1-z-experiment-parameters"
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "physics:lep1-z-response-context-lep1-z-experiment-parameters",
      "source": "phys:lep1-z-response-context",
      "target": "phys:lep1-z-experiment-parameters",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The experiment fits require the selected scan responses, adopted response model and declared line-shape convention.",
      "claimIds": [
        "M-phys-lep1-z-experiment-parameters"
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "physics:z-line-shape-conventions-lep1-z-experiment-parameters",
      "source": "phys:z-line-shape-conventions",
      "target": "phys:lep1-z-experiment-parameters",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The experiment fits require the selected scan responses, adopted response model and declared line-shape convention.",
      "claimIds": [
        "M-phys-lep1-z-experiment-parameters"
      ],
      "contextIds": [
        "lep1-z-response"
      ]
    },
    {
      "id": "physics:lep1-z-experiment-parameters-lep1-z-line-shape",
      "source": "phys:lep1-z-experiment-parameters",
      "target": "phys:lep1-z-line-shape",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combination retains the fitted-vector inputs, common covariance and parameter convention.",
      "claimIds": [
        "M-phys-lep1-z-line-shape"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-combination-context-lep1-z-line-shape",
      "source": "phys:lep1-z-combination-context",
      "target": "phys:lep1-z-line-shape",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combination retains the fitted-vector inputs, common covariance and parameter convention.",
      "claimIds": [
        "M-phys-lep1-z-line-shape"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:z-line-shape-conventions-lep1-z-line-shape",
      "source": "phys:z-line-shape-conventions",
      "target": "phys:lep1-z-line-shape",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combination retains the fitted-vector inputs, common covariance and parameter convention.",
      "claimIds": [
        "M-phys-lep1-z-line-shape"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-line-shape-lep1-z-partial-widths",
      "source": "phys:lep1-z-line-shape",
      "target": "phys:lep1-z-partial-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The partial widths derive from the same fitted parameters under the inclusive decay convention; the residual is not independent data.",
      "claimIds": [
        "M-phys-lep1-z-partial-widths"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-combination-context-lep1-z-partial-widths",
      "source": "phys:lep1-z-combination-context",
      "target": "phys:lep1-z-partial-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The partial widths derive from the same fitted parameters under the inclusive decay convention; the residual is not independent data.",
      "claimIds": [
        "M-phys-lep1-z-partial-widths"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-lep1-z-partial-widths",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:lep1-z-partial-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The partial widths derive from the same fitted parameters under the inclusive decay convention; the residual is not independent data.",
      "claimIds": [
        "M-phys-lep1-z-partial-widths"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-partial-widths-lep1-z-branching-fractions",
      "source": "phys:lep1-z-partial-widths",
      "target": "phys:lep1-z-branching-fractions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The branching fractions use the correlated inclusive partial widths and shared total width, with the invisible sum constraint.",
      "claimIds": [
        "M-phys-lep1-z-branching-fractions"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-line-shape-lep1-z-branching-fractions",
      "source": "phys:lep1-z-line-shape",
      "target": "phys:lep1-z-branching-fractions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The branching fractions use the correlated inclusive partial widths and shared total width, with the invisible sum constraint.",
      "claimIds": [
        "M-phys-lep1-z-branching-fractions"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:lep1-z-combination-context-lep1-z-branching-fractions",
      "source": "phys:lep1-z-combination-context",
      "target": "phys:lep1-z-branching-fractions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The branching fractions use the correlated inclusive partial widths and shared total width, with the invisible sum constraint.",
      "claimIds": [
        "M-phys-lep1-z-branching-fractions"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-lep1-z-branching-fractions",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:lep1-z-branching-fractions",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The branching fractions use the correlated inclusive partial widths and shared total width, with the invisible sum constraint.",
      "claimIds": [
        "M-phys-lep1-z-branching-fractions"
      ],
      "contextIds": [
        "lep1-z-combination"
      ]
    }
  ],
  "studies": [
    {
      "id": "lep1-z-acquisition",
      "sourceId": "lep2006-z-lineshape",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physrep.2005.12.006",
      "journal": "Physics Reports",
      "volume": "427",
      "issue": "",
      "pages": "257-454",
      "system": "Four-experiment LEP-I Z scans and the original published parameter combination",
      "preparation": "Use the ALEPH, DELPHI, L3 and OPAL LEP-I electron-positron data accumulated mainly in 1990-1995 around the Z resonance. Peak and off-peak energy scans supply hadronic and charged-lepton samples; 1993 and 1995 use precision three-point scans. Reconstruct selected final states and the channel-specific angular observables with the declared detector acceptances.",
      "observable": "Selected LEP-I scan responses",
      "finding": "The report describes roughly 200 cross-section and forward-backward-asymmetry measurements per experiment. Corrected channel rates vary across the scan energy, and Figure 2.3 displays selected hadronic cross-sections around the three principal energies. These detector- and luminosity-corrected observables precede the nine fitted pseudo-observables; the plotted combination bands are fitted summaries of the same data.",
      "limitations": [
        "This LEP-I combination uses the four LEP experiments; the separate SLD polarized sample, LEP-II W data and historical UA1 candidates are not additional observations in this fit.",
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed."
      ],
      "readExtent": "selected-primary-author-report-sections",
      "reviewedLocators": [
        "Author v3 PDF pages 14, 16 and 45-48, Sections 1.1 and 2.1-2.2.1: LEP-I acquisition, energy scans and selected final states",
        "Author v3 PDF pages 49-54, Sections 2.2.2-2.2.4 and Figure 2.3: corrected cross-sections and asymmetries versus energy, plotted data and dependent fitted bands"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0509008v3",
      "correctionCheck": "The review uses the versioned author journal report v3 of 27 February 2006 and its combination-specific inputs, not a retrieved publisher PDF or a current refit. No exhaustive search for later precision updates is claimed."
    },
    {
      "id": "lep1-z-response",
      "sourceId": "lep2006-z-lineshape",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2005.12.006",
      "journal": "Physics Reports",
      "volume": "427",
      "issue": "",
      "pages": "257-454",
      "system": "Four-experiment LEP-I Z scans and the original published parameter combination",
      "preparation": "Correct selected event rates for efficiency and backgrounds, normalize by small-angle Bhabha luminosity and extrapolate to declared idealized acceptances. Adopt the beam-energy model, its spread and correlations, t-channel electron contributions and QED radiation. TOPAZ0 4.4 and ZFITTER 6.23 relate cross-sections and asymmetries to each experiment's nine pseudo-observables; preserve the combination-specific calibration and program updates.",
      "observable": "Individual LEP-I Z parameter fits",
      "finding": "Table 2.4 reports four correlated nine-parameter fits: mZ, GammaZ, sigmaHad0, Re0, Rmu0, Rtau0 and three pole forward-backward asymmetries. The fitted total widths are ALEPH 2.4959 +/- 0.0043, DELPHI 2.4876 +/- 0.0041, L3 2.5025 +/- 0.0041 and OPAL 2.4948 +/- 0.0041 GeV. Their within-experiment matrices and shared uncertainties remain inputs to the combined result.",
      "limitations": [
        "The report supplies the original combination and describes adopted detector, energy-calibration, luminosity and radiative-correction inputs. Their underlying data and programs are not replayed here; no new acquisition or fit reproduction is claimed.",
        "Pseudo-observables retain QED treatment, fixed SM hadronic gamma-Z interference and small SM-remnant assumptions. This qualified parametrization is not theory-free extraction or a unique scalar-vacuum test.",
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result."
      ],
      "readExtent": "selected-primary-author-report-sections",
      "reviewedLocators": [
        "Author v3 PDF pages 39-41 and 49-60, Sections 1.5.4 and 2.2.2-2.2.5: measured acceptances, luminosity, selection, energy calibration and beam spread",
        "Author v3 PDF pages 60-62, Section 2.3 and Table 2.4: four experiment-specific nine-parameter fits, correlation coefficients and combination-specific updates",
        "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0509008v3",
      "correctionCheck": "The review uses the versioned author journal report v3 of 27 February 2006 and its combination-specific inputs, not a retrieved publisher PDF or a current refit. No exhaustive search for later precision updates is claimed."
    },
    {
      "id": "lep1-z-combination",
      "sourceId": "lep2006-z-lineshape",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2005.12.006",
      "journal": "Physics Reports",
      "volume": "427",
      "issue": "",
      "pages": "257-454",
      "system": "Four-experiment LEP-I Z scans and the original published parameter combination",
      "preparation": "Combine four sets of nine pseudo-observables by the reported chi-square minimization using the 36-by-36 covariance. Preserve common beam-energy, luminosity, t-channel and QED/parametrization contributions, including the common theory term also added to diagonal blocks. Use the no-lepton-universality result and propagate its dependent parameter transformations to inclusive widths and fractions.",
      "observable": "Combined LEP-I Z line shape; Derived inclusive Z partial widths; Derived inclusive Z branching fractions",
      "finding": "The no-lepton-universality branch of Table 2.13 reports mZ=91.1876 +/- 0.0021 GeV, GammaZ=2.4952 +/- 0.0023 GeV and sigmaHad0=41.541 +/- 0.037 nb. The width ratios are Re0=20.804 +/- 0.050, Rmu0=20.785 +/- 0.033 and Rtau0=20.764 +/- 0.045. These are correlated pseudo-observables in the declared running-width convention, including the three asymmetry parameters in the joint fit. In Table 7.1 without lepton universality, the reported inclusive partial widths are GammaHad=1745.8 +/- 2.7, Gammaee=83.92 +/- 0.12, Gammamumu=83.99 +/- 0.18 and Gammatautau=84.08 +/- 0.22 MeV. GammaInvisible=497.4 +/- 2.5 MeV is the total-width residual after those visible components. These are parameter transformations of the same LEP-I fit, retaining their reported correlations. In Table 7.2 without lepton universality, the reported percentages are Bhad=69.967 +/- 0.093, Bee=3.3632 +/- 0.0042, Bmumu=3.3662 +/- 0.0066, Btautau=3.3696 +/- 0.0083 and Binvisible=19.934 +/- 0.098. Each visible fraction is its inclusive partial width divided by the common total width; the invisible fraction enforces the inclusive sum to one. These fractions and errors are dependent on the same fit and its correlations.",
      "limitations": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors.",
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch.",
        "Table 2.13 excludes the stated parametric Higgs-mass dependence of mZ. No modern parameter update, direct SM global fit, or recombination of rounded inputs is performed."
      ],
      "readExtent": "selected-primary-author-report-sections",
      "reviewedLocators": [
        "Author v3 PDF pages 64-75, Sections 2.4-2.6, Equation 2.2 and Tables 2.9-2.10 and 2.13: common covariance, fitted combination, hadronic interference assumption and nonuniversality branch",
        "Author v3 PDF pages 172-174, Section 7.2 and Tables 7.1-7.2: same-data derived inclusive partial widths and branching fractions, without lepton universality",
        "Author v3 PDF pages 30-32 and 34-35, Section 1.5, Equations 1.34-1.47: running-width resonance convention, QED convolution and inclusive partial-width parameters"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0509008v3",
      "correctionCheck": "The review uses the versioned author journal report v3 of 27 February 2006 and its combination-specific inputs, not a retrieved publisher PDF or a current refit. No exhaustive search for later precision updates is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "lep1-z-response-versus-parameters",
      "candidate": "The scan data support source-fitted Z parameters under explicit response and radiative assumptions.",
      "alternative": "Corrected cross-sections, fitted bands and pseudo-observables are independent raw measurements of the same width.",
      "discriminator": "Separate Figure 2.3 points/bands, experiment-specific extraction and the later correlated combination.",
      "result": "conditional-support",
      "limit": "Cross-sections already use selection efficiency, backgrounds, acceptance and luminosity. Figure 2.3 data bars are statistical; its bands reuse the combined fit and common theory errors. No point digitization, raw-event table or complete scan-input replay is supplied.",
      "assumptions": [
        "Table 2.4 includes common energy and fit-program conventions, including the ALEPH update to ZFITTER 6.23. The fitted summaries are not raw measurements or independent replications of their combined result.",
        "Pseudo-observables retain QED treatment, fixed SM hadronic gamma-Z interference and small SM-remnant assumptions. This qualified parametrization is not theory-free extraction or a unique scalar-vacuum test."
      ],
      "sourceIds": [
        "lep2006-z-lineshape"
      ],
      "claimIds": [
        "C-phys-lep1-z-scan-responses",
        "C-phys-lep1-z-experiment-parameters",
        "C-phys-lep1-z-line-shape"
      ]
    },
    {
      "id": "lep1-z-convention-and-covariance",
      "candidate": "The combined total width is a conditional correlated line-shape parameter.",
      "alternative": "An instrumental peak width or independent average of marginal widths directly supplies an intrinsic lifetime.",
      "discriminator": "Retain the s-dependent convention, radiator/beam response and full common covariance.",
      "result": "conditional-support",
      "limit": "The reported mass and total width belong to the s-dependent Breit-Wigner convention. Detector/beam smearing and QED radiation are separate response effects. Neither a plotted peak width nor this parameter alone is a directly timed lifetime; spin-one and vector/axial couplings are framework assumptions of the parametrization.",
      "assumptions": [
        "The four nine-parameter fits share common errors. Tables 2.6, 2.7 and 2.9 encode signed square roots of covariance elements, not correlations. Published marginal errors cannot replace the full common covariance with independent diagonal errors.",
        "Table 2.13 excludes the stated parametric Higgs-mass dependence of mZ. No modern parameter update, direct SM global fit, or recombination of rounded inputs is performed."
      ],
      "sourceIds": [
        "lep2006-z-lineshape"
      ],
      "claimIds": [
        "D-phys-z-line-shape-conventions",
        "C-phys-lep1-z-line-shape"
      ]
    },
    {
      "id": "lep1-z-dependent-decay-parameters",
      "candidate": "Inclusive partial widths and fractions are dependent transformations of one selected fit branch.",
      "alternative": "Invisible counts independently confirm the total width or universal/nonuniversal rows can be pooled.",
      "discriminator": "Use the no-universality rows of Tables 7.1-7.2 and their correlations; preserve the residual/sum constraints.",
      "result": "conditional-support",
      "limit": "These widths and fractions transform the same fitted parameters and are correlated. The invisible component is a residual, not an independently counted invisible sample. Heavy-flavor subdivisions, neutrino counting and new invisible-channel limits are not admitted.",
      "assumptions": [
        "Use the no-lepton-universality branch throughout. The constrained universal branch uses a massless reference lepton and a tau-mass correction; its entries must not be pooled with this branch."
      ],
      "sourceIds": [
        "lep2006-z-lineshape"
      ],
      "claimIds": [
        "C-phys-lep1-z-partial-widths",
        "C-phys-lep1-z-branching-fractions"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:z-line-shape-conventions",
      "role": "definition",
      "denotes": "The specified energy-dependent versus constant-width Z parametrizations and the separate radiative/experimental response.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-z-line-shape-conventions"
      ]
    },
    {
      "nodeId": "phys:lep1-z-acquisition-context",
      "role": "experimental-context",
      "denotes": "The four LEP-I campaigns and selected hadronic/leptonic energy-scan preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep1-z-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:lep1-z-response-context",
      "role": "model-context",
      "denotes": "The adopted detector, luminosity, beam and radiative inputs and original experiment-level parameter extraction.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep1-z-response-context"
      ]
    },
    {
      "nodeId": "phys:lep1-z-combination-context",
      "role": "model-context",
      "denotes": "The original correlated parameter combination and same-data decay-parameter transformation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep1-z-combination-context"
      ]
    },
    {
      "nodeId": "phys:lep1-z-scan-responses",
      "role": "scoped-phenomenon",
      "denotes": "The reported selected energy-dependent cross-section/asymmetry response summaries, not fitted width parameters or a released raw sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep1-z-scan-responses"
      ]
    },
    {
      "nodeId": "phys:lep1-z-experiment-parameters",
      "role": "scoped-phenomenon",
      "denotes": "The four reported fitted input vectors with their covariance conventions, not four independent width-only likelihoods.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep1-z-experiment-parameters"
      ]
    },
    {
      "nodeId": "phys:lep1-z-line-shape",
      "role": "scoped-phenomenon",
      "denotes": "The reported correlated combined mass, total width, pole cross-section and ratios under the nonuniversal fit convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep1-z-line-shape"
      ]
    },
    {
      "nodeId": "phys:lep1-z-partial-widths",
      "role": "scoped-phenomenon",
      "denotes": "The selected visible inclusive partial-width transformations and correlated invisible residual of the same fitted data.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep1-z-partial-widths"
      ]
    },
    {
      "nodeId": "phys:lep1-z-branching-fractions",
      "role": "scoped-phenomenon",
      "denotes": "The same-data correlated inclusive branching fractions; the invisible residual is not an additional observed sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep1-z-branching-fractions"
      ]
    }
  ]
};

/** Keep scan responses, correlated parameter fits and derived decay quantities distinct. */
export function validateZLineshapeContracts(context) {
  for (const [kind, records] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of records) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing Z line-shape ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Z line-shape ${kind} changed ${id}.${key}: preserve response, convention and covariance boundaries`);
    }
  }
  const outcomes = new Set(Z_LINESHAPE_ADMISSION.observations.map(([id]) => `phys:${id}`));
  const incoming = new Set(contracts.relations.filter((r) => outcomes.has(r.target)).map((r) => r.id));
  for (const relation of context.relations.values()) {
    if (outcomes.has(relation.target)) assert.ok(incoming.has(relation.id),
      `Unreviewed incoming Z line-shape inference: ${relation.id}`);
  }
}
