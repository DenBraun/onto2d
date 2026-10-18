import assert from "node:assert/strict";

export const RG_SCOPE_CHECKS = new Map();
export const RG_SCOPE_ANALYTICAL_SOURCES = new Map();
export const RG_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:effective-description-scope",
      "D-phys-effective-description-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:quantum-field-framework-effective-description-scope",
      [
        "phys:quantum-field-framework",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:qcd-renormalization-scale-effective-description-scope",
      [
        "phys:qcd-renormalization-scale",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:wilsonian-effective-action-effective-description-scope",
      [
        "phys:wilsonian-effective-action",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:fixed-point-scaling-fields-effective-description-scope",
      [
        "phys:fixed-point-scaling-fields",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:effective-operator-expansion-effective-description-scope",
      [
        "phys:effective-operator-expansion",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:threshold-matching-effective-description-scope",
      [
        "phys:threshold-matching",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:decoupling-validity-effective-description-scope",
      [
        "phys:decoupling-validity",
        "phys:effective-description-scope"
      ]
    ],
    [
      "physics:low-energy-weak-exchange-effective-description-scope",
      [
        "phys:low-energy-weak-exchange",
        "phys:effective-description-scope"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "running-evidence-boundary",
      "C-phys-running-evidence-boundary",
      [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    ]
  ],
  "dependencies": [
    [
      "effective-description-scope-running-evidence-boundary",
      "effective-description-scope",
      "running-evidence-boundary",
      "M-phys-running-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "cms-running-consistency-running-evidence-boundary",
      "cms-running-consistency",
      "running-evidence-boundary",
      "M-phys-running-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "l3-running-slope-running-evidence-boundary",
      "l3-running-slope",
      "running-evidence-boundary",
      "M-phys-running-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "l3-running-difference-running-evidence-boundary",
      "l3-running-difference",
      "running-evidence-boundary",
      "M-phys-running-evidence-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-running-evidence-boundary",
      [
        "wilson-kogut1974-rg",
        "georgi1993-effective-field-theory"
      ]
    ],
    [
      "M-phys-running-evidence-boundary",
      [
        "wilson-kogut1974-rg",
        "georgi1993-effective-field-theory"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-effective-description-scope",
      "kind": "review-finding",
      "statement": "An effective description declares its retained fields, symmetries, operator basis, hierarchy of scales and target observables. Wilsonian elimination of short-distance modes, renormalized-parameter running with mu and the hard scale of a measurement are distinct operations or variables. Matching coefficients and boundary conditions are additional inputs to an RG equation. Approximate low-energy agreement retains heavy-field effects in parameters and higher operators; it does not remove microscopic causes or establish a physical-time process.",
      "scope": "Operational scope of the selected Wilsonian scalar construction, EFT logic and existing weak contact example for source card 1.21.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 172-176, Section 12.4, Equations 12.7-12.30: linearized local operators, scaling indices and the marginal higher-order qualification",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 168-170, Section 12.3, fixed-point stability and domains: conditional universality within a specified attraction domain",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structurally significant means contributions retained by declared power counting for specified observables and accuracy. It does not select a universal ontology or prove that eliminated fields cease to matter. Suppression requires its hierarchy, coefficient and perturbative assumptions; a higher canonical dimension alone is not a numerical error certificate.",
        "The massive weak-exchange example is the existing leading low-momentum tree approximation with light external fermions. Its Fermi relation is a parameter identity, not loop matching, a measured coefficient, a complete gauge-consistent amplitude or a precision electroweak scheme conversion. Threshold matching, radiative mixing and nondecoupling need their own declared conventions and validity.",
        "A fixed point and its linearized scaling fields define relevance only with a chosen scale-flow direction. Marginal directions require higher-order analysis. The finite Gaussian example does not prove an interacting universality class, its basin or all critical exponents; no general stable low-energy-laws theorem across physics is admitted.",
        "No condensed-matter acquisition, scaling dataset or fitted critical exponent is selected here. The original generic particle-physics and condensed-matter empirical sentence is narrowed to the separately reviewed QCD and QED running extractions, not used as evidence for all EFTs or universality classes.",
        "The original necessary QFT parent 1.0, weight 1, N_min=N_crit=1 and causal/interaction codes have no admitted scientific quantitative meaning. The SOMA phase 2, property TypeRole 3 and established label do not specify a universal arising stage, formation/maintenance law or downward-causation mechanism. Generic evidence placeholders add no independent source."
      ]
    },
    {
      "id": "C-phys-running-evidence-boundary",
      "kind": "review-finding",
      "statement": "The reviewed CMS jet-ratio analysis supplies a correlated, theory/PDF-conditioned strong-coupling scale comparison. The reviewed L3 angular-shape analysis supplies a conditional electromagnetic running deformation and a dependent inverse-coupling difference. These are distinct observable/model chains. Their limited scale-dependence findings are compatible with the declared parameter-running descriptions; they do not directly measure Wilsonian mode elimination, establish fixed-point universality or validate every effective theory.",
      "scope": "Literature synthesis of the existing selected CMS and L3 analyses; no new experiment, pooled coupling estimate, fit or numerical RG replay.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "cms2013-r32",
          "locator": "Author report arXiv:1304.7498v2, Sections 5-6, pages 9-11: separate scale fits and RGE comparison; Tables 3-4 and Figure 3",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        }
      ],
      "checkIds": [],
      "limitations": [
        "CMS scale-region points and its combined curve share the selected jet data and NLO/PDF/RGE construction. Experimental uncertainties are correlated. The running comparison does not independently measure a beta function or supply a reviewed constant-coupling rejection statistic.",
        "L3 slope and inverse-alpha difference reuse one small-angle fit. Its S=0 reference is nominal running, not constant coupling. The displayed lower-scale anchor is fixed to theory, not an independent absolute-alpha measurement; the detector-material systematic and covariance limits remain attached to the existing records.",
        "QCD alpha_s and QED alpha have different definitions, kinematic regions, radiative conventions and inference inputs. They are not pooled as one coupling or interchangeable trajectory. Neither the source-specific experimental uncertainty nor agreement with a running equation measures a Wilsonian truncation error.",
        "There is no new condensed-matter scaling measurement, EFT coefficient extraction, interacting fixed-point test or cross-domain universality analysis. The formal Gaussian scaling example and tree weak contact relation are definitions, not independent experimental corroborations of these running fits.",
        "No local CMS/L3 event, detector, PDF, likelihood or covariance replay is claimed. Neither an effective fit nor a reduced description supplies universal stable low-energy laws, microscopic causal erasure, a temporal emergence sequence or downward causation."
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "M-phys-running-evidence-boundary",
      "kind": "method",
      "statement": "Retain each existing acquisition, response, coupling convention, scale prescription and uncertainty. Keep CMS correlated scale regions separate from L3 same-fit slope/difference and theory-fixed display anchor. Compare only the declared parameter-running descriptions; do not count either experiment as a direct measurement of Wilsonian integration, a universal matching coefficient or all universality classes.",
      "scope": "Literature synthesis of the existing selected CMS and L3 analyses; no new experiment, pooled coupling estimate, fit or numerical RG replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "cms2013-r32",
          "locator": "Author report arXiv:1304.7498v2, Sections 5-6, pages 9-11: separate scale fits and RGE comparison; Tables 3-4 and Figure 3",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or experimental universality theorem."
        }
      ],
      "checkIds": [],
      "limitations": [
        "CMS scale-region points and its combined curve share the selected jet data and NLO/PDF/RGE construction. Experimental uncertainties are correlated. The running comparison does not independently measure a beta function or supply a reviewed constant-coupling rejection statistic.",
        "L3 slope and inverse-alpha difference reuse one small-angle fit. Its S=0 reference is nominal running, not constant coupling. The displayed lower-scale anchor is fixed to theory, not an independent absolute-alpha measurement; the detector-material systematic and covariance limits remain attached to the existing records.",
        "QCD alpha_s and QED alpha have different definitions, kinematic regions, radiative conventions and inference inputs. They are not pooled as one coupling or interchangeable trajectory. Neither the source-specific experimental uncertainty nor agreement with a running equation measures a Wilsonian truncation error.",
        "There is no new condensed-matter scaling measurement, EFT coefficient extraction, interacting fixed-point test or cross-domain universality analysis. The formal Gaussian scaling example and tree weak contact relation are definitions, not independent experimental corroborations of these running fits.",
        "No local CMS/L3 event, detector, PDF, likelihood or covariance replay is claimed. Neither an effective fit nor a reduced description supplies universal stable low-energy laws, microscopic causal erasure, a temporal emergence sequence or downward causation."
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:effective-description-scope",
      "name": "Scoped effective-description construction",
      "kind": "definition",
      "description": "An effective description declares its retained fields, symmetries, operator basis, hierarchy of scales and target observables. Wilsonian elimination of short-distance modes, renormalized-parameter running with mu and the hard scale of a measurement are distinct operations or variables. Matching coefficients and boundary conditions are additional inputs to an RG equation. Approximate low-energy agreement retains heavy-field effects in parameters and higher operators; it does not remove microscopic causes or establish a physical-time process.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter"
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff"
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 172-176, Section 12.4, Equations 12.7-12.30: linearized local operators, scaling indices and the marginal higher-order qualification"
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 168-170, Section 12.3, fixed-point stability and domains: conditional universality within a specified attraction domain"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries"
        }
      ],
      "openObligations": [
        "Structurally significant means contributions retained by declared power counting for specified observables and accuracy. It does not select a universal ontology or prove that eliminated fields cease to matter. Suppression requires its hierarchy, coefficient and perturbative assumptions; a higher canonical dimension alone is not a numerical error certificate.",
        "The massive weak-exchange example is the existing leading low-momentum tree approximation with light external fermions. Its Fermi relation is a parameter identity, not loop matching, a measured coefficient, a complete gauge-consistent amplitude or a precision electroweak scheme conversion. Threshold matching, radiative mixing and nondecoupling need their own declared conventions and validity.",
        "A fixed point and its linearized scaling fields define relevance only with a chosen scale-flow direction. Marginal directions require higher-order analysis. The finite Gaussian example does not prove an interacting universality class, its basin or all critical exponents; no general stable low-energy-laws theorem across physics is admitted.",
        "No condensed-matter acquisition, scaling dataset or fitted critical exponent is selected here. The original generic particle-physics and condensed-matter empirical sentence is narrowed to the separately reviewed QCD and QED running extractions, not used as evidence for all EFTs or universality classes.",
        "The original necessary QFT parent 1.0, weight 1, N_min=N_crit=1 and causal/interaction codes have no admitted scientific quantitative meaning. The SOMA phase 2, property TypeRole 3 and established label do not specify a universal arising stage, formation/maintenance law or downward-causation mechanism. Generic evidence placeholders add no independent source."
      ]
    },
    {
      "id": "phys:running-evidence-boundary",
      "name": "Scope of QCD and QED running evidence",
      "kind": "scoped-process",
      "description": "The reviewed CMS jet-ratio analysis supplies a correlated, theory/PDF-conditioned strong-coupling scale comparison. The reviewed L3 angular-shape analysis supplies a conditional electromagnetic running deformation and a dependent inverse-coupling difference. These are distinct observable/model chains. Their limited scale-dependence findings are compatible with the declared parameter-running descriptions; they do not directly measure Wilsonian mode elimination, establish fixed-point universality or validate every effective theory.",
      "claimIds": [
        "C-phys-running-evidence-boundary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter"
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions"
        },
        {
          "sourceId": "cms2013-r32",
          "locator": "Author report arXiv:1304.7498v2, Sections 5-6, pages 9-11: separate scale fits and RGE comparison; Tables 3-4 and Figure 3"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor"
        }
      ],
      "openObligations": [
        "CMS scale-region points and its combined curve share the selected jet data and NLO/PDF/RGE construction. Experimental uncertainties are correlated. The running comparison does not independently measure a beta function or supply a reviewed constant-coupling rejection statistic.",
        "L3 slope and inverse-alpha difference reuse one small-angle fit. Its S=0 reference is nominal running, not constant coupling. The displayed lower-scale anchor is fixed to theory, not an independent absolute-alpha measurement; the detector-material systematic and covariance limits remain attached to the existing records.",
        "QCD alpha_s and QED alpha have different definitions, kinematic regions, radiative conventions and inference inputs. They are not pooled as one coupling or interchangeable trajectory. Neither the source-specific experimental uncertainty nor agreement with a running equation measures a Wilsonian truncation error.",
        "There is no new condensed-matter scaling measurement, EFT coefficient extraction, interacting fixed-point test or cross-domain universality analysis. The formal Gaussian scaling example and tree weak contact relation are definitions, not independent experimental corroborations of these running fits.",
        "No local CMS/L3 event, detector, PDF, likelihood or covariance replay is claimed. Neither an effective fit nor a reduced description supplies universal stable low-energy laws, microscopic causal erasure, a temporal emergence sequence or downward causation."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:quantum-field-framework-effective-description-scope",
      "source": "phys:quantum-field-framework",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected field-theory framework supplies an adopted model vocabulary, not a necessary universal creation parent for RG or low-energy laws.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:qcd-renormalization-scale-effective-description-scope",
      "source": "phys:qcd-renormalization-scale",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Renormalized QCD scale variation provides a comparison with the distinct Wilsonian cutoff; the hard experimental scale and physical time remain different.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:wilsonian-effective-action-effective-description-scope",
      "source": "phys:wilsonian-effective-action",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen cutoff transformation preserves its specified low-momentum generating functional; no empirical microscopic-erasure claim follows.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:fixed-point-scaling-fields-effective-description-scope",
      "source": "phys:fixed-point-scaling-fields",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Fixed-point relevance and universality reasoning retain the declared IR direction, linearization and domain conditions.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:effective-operator-expansion-effective-description-scope",
      "source": "phys:effective-operator-expansion",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The retained light-field operators and power counting define low-energy accuracy, rather than universal structural importance.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:threshold-matching-effective-description-scope",
      "source": "phys:threshold-matching",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Matching and boundary coefficients retain the specified full/effective theories, prescriptions, orders and low-energy comparison.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:decoupling-validity-effective-description-scope",
      "source": "phys:decoupling-validity",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Suppression of heavy effects retains scale-separation and coupling assumptions; nondecoupling is not silently excluded.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:low-energy-weak-exchange-effective-description-scope",
      "source": "phys:low-energy-weak-exchange",
      "target": "phys:effective-description-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing weak contact limit is one tree-level example with its original currents and exclusions, not a new extraction or higher-order EFT calculation.",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "id": "physics:effective-description-scope-running-evidence-boundary",
      "source": "phys:effective-description-scope",
      "target": "phys:running-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own preparation, definition and uncertainty; it does not add an independent acquisition, universal RG proof or physical-time causal arrow.",
      "claimIds": [
        "M-phys-running-evidence-boundary"
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:cms-running-consistency-running-evidence-boundary",
      "source": "phys:cms-running-consistency",
      "target": "phys:running-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own preparation, definition and uncertainty; it does not add an independent acquisition, universal RG proof or physical-time causal arrow.",
      "claimIds": [
        "M-phys-running-evidence-boundary"
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-running-slope-running-evidence-boundary",
      "source": "phys:l3-running-slope",
      "target": "phys:running-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own preparation, definition and uncertainty; it does not add an independent acquisition, universal RG proof or physical-time causal arrow.",
      "claimIds": [
        "M-phys-running-evidence-boundary"
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-running-difference-running-evidence-boundary",
      "source": "phys:l3-running-difference",
      "target": "phys:running-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own preparation, definition and uncertainty; it does not add an independent acquisition, universal RG proof or physical-time causal arrow.",
      "claimIds": [
        "M-phys-running-evidence-boundary"
      ],
      "contextIds": [
        "cms2013-r32",
        "l3-2000-running-fit"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:effective-description-scope",
      "role": "definition",
      "denotes": "A declared model, approximation and observable boundary, without empirical formation or universal ontology.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-effective-description-scope"
      ]
    },
    {
      "nodeId": "phys:running-evidence-boundary",
      "role": "scoped-phenomenon",
      "denotes": "A bounded comparison of existing running inferences, without a universal EFT or condensed-matter evidence claim.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-running-evidence-boundary"
      ]
    }
  ]
};

/** Preserve the distinction between effective-description logic and limited running evidence. */
export function validateRgScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `RG scope ${kind} changed ${id}: preserve scale, matching and evidence boundaries`);
    }
  }
}
