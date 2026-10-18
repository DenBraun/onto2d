import assert from "node:assert/strict";

export const COSMOLOGY_SCOPE_CHECKS = new Map();
export const COSMOLOGY_SCOPE_ANALYTICAL_SOURCES = new Map();
export const COSMOLOGY_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:primordial-origin-scope",
      "D-phys-primordial-origin-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:vacuum-two-point-function-primordial-origin-scope",
      [
        "phys:vacuum-two-point-function",
        "phys:primordial-origin-scope"
      ]
    ],
    [
      "physics:primordial-curvature-spectrum-primordial-origin-scope",
      [
        "phys:primordial-curvature-spectrum",
        "phys:primordial-origin-scope"
      ]
    ],
    [
      "physics:superhorizon-curvature-evolution-primordial-origin-scope",
      [
        "phys:superhorizon-curvature-evolution",
        "phys:primordial-origin-scope"
      ]
    ],
    [
      "physics:cosmological-growing-mode-classical-limit-primordial-origin-scope",
      [
        "phys:cosmological-growing-mode-classical-limit",
        "phys:primordial-origin-scope"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "primordial-cmb-model-compatibility",
      "C-phys-primordial-cmb-model-compatibility",
      [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "primordial-origin-scope-primordial-cmb-model-compatibility",
      "primordial-origin-scope",
      "primordial-cmb-model-compatibility",
      "M-phys-primordial-cmb-model-compatibility",
      "interpretation-dependency"
    ],
    [
      "planck2018-cmb-acquisition-context-primordial-cmb-model-compatibility",
      "planck2018-cmb-acquisition-context",
      "primordial-cmb-model-compatibility",
      "M-phys-primordial-cmb-model-compatibility",
      "interpretation-dependency"
    ],
    [
      "planck2018-angular-spectra-primordial-cmb-model-compatibility",
      "planck2018-angular-spectra",
      "primordial-cmb-model-compatibility",
      "M-phys-primordial-cmb-model-compatibility",
      "interpretation-dependency"
    ],
    [
      "planck2018-scalar-spectrum-primordial-cmb-model-compatibility",
      "planck2018-scalar-spectrum",
      "primordial-cmb-model-compatibility",
      "M-phys-primordial-cmb-model-compatibility",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-primordial-cmb-model-compatibility",
      [
        "mukhanov1988-perturbations",
        "garriga1999-perturbations",
        "polarski1996-classical",
        "planck2018-inflation"
      ]
    ],
    [
      "M-phys-primordial-cmb-model-compatibility",
      [
        "mukhanov1988-perturbations",
        "garriga1999-perturbations",
        "polarski1996-classical",
        "planck2018-inflation"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-primordial-origin-scope",
      "kind": "review-finding",
      "statement": "A primordial quantum-origin model supplies a curved cosmological background, field/gravity action, canonical scalar mode, initial state and validity regime. The admitted linear single-field construction predicts a conditional curvature two-point function, with restricted long-wave conservation and stochastic interpretation. Testing its primordial power against CMB statistics additionally requires a postinflationary transfer model, instrument/foreground response and cosmological likelihood. Compatibility of that chain is not a direct measurement of the assumed initial vacuum or a unique origin mechanism.",
      "scope": "Operational boundary of the selected scalar-perturbation and CMB application for source card 1.20; no universal cross-scale construction rule.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The original 1.5 flat-space vacuum parent supplies a separate free-field concept. Its stationary variance and two-point function do not select a cosmological background, curvature variable, potential or initial state. No old oscillator replay is numerical evidence for the CMB chain.",
        "The scalar field perturbation delta(phi), gauge-invariant primordial R, later metric/density perturbations and measured angular CMB statistics are different observables. Their connection requires the stated constraints and transfer model; density also needs an epoch and gauge convention.",
        "Hubble-radius exit alone supplies neither universal freezing nor classicalization. Conservation requires the specified regular background and dominant long-wave solution. A Gaussian amplitude marginal or a restricted stochastic trajectory approximation does not select a realized outcome or remove the exact canonical commutator.",
        "Matter spectra and large-scale structure are explicitly outside this CMB application: no independent survey sample, bias/redshift response, nonlinear matter evolution or large-scale-structure likelihood is reviewed. No uninterrupted quantum-fluctuation-to-galaxy construction is established.",
        "The original parent weight 1, necessary arising relation, causal/interaction codes and N_min=N_crit=1 have no admitted quantitative scientific meaning. The SOMA phase 2, effect TypeRole 4, well-supported label and generic theoretical/CMB/structure placeholders supply no independent evidence or universal temporal order."
      ]
    },
    {
      "id": "C-phys-primordial-cmb-model-compatibility",
      "kind": "review-finding",
      "statement": "The selected Planck 2018 TT,TE,EE+lowE chain compares measured angular temperature/polarization statistics with a flat base-LambdaCDM transfer and likelihood model and infers its power-law scalar amplitude and tilt. The admitted quantum single-field construction is a conditional way to supply primordial curvature power with which such data can be compared. The parameter fit does not identify an inflaton potential, measure its initial quantum state, or uniquely prove inflationary quantum generation.",
      "scope": "A literature synthesis of one selected historical CMB data combination and separate formal interpretation; no pooled independent confirmation or new likelihood run.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The angular-spectrum product, response analysis and parameter fit reuse the same sky maps and parts of the calibration/foreground model. They are stages of one chain, not independent confirmations. The fit retains its cosmological priors and parameter degeneracies; theory assumptions are not measured initial conditions.",
        "TT,TE,EE+lowE excludes the separate reconstructed-lensing likelihood, BAO, BK15 and large-scale-structure likelihoods. Physical gravitational lensing of the theoretical angular spectra remains included. This is the declared Planck 2018 historical combination, not a claim about a current joint cosmological best fit.",
        "The fitted power law P_R(k)=A_s(k/k_*)^(n_s-1) is a phenomenological input parameterization. The reviewed canonical slow-roll formula requires a specified potential/background, adopted initial state and later matching; the fit alone supplies none of them or a unique inflationary energy scale.",
        "Near scale invariance and a compatible Gaussian adiabatic spectrum do not uniquely determine a quantum origin. Other initial states, classical stochastic descriptions and alternative generation histories are not ruled out solely by the selected two-point fit. No unreviewed alternative model is claimed to fit equally well.",
        "There is no local Planck likelihood/sky-map replay or new cosmological simulation. Uncertainty and model compatibility are those of the reviewed analyses; no independent likelihood ratio, combined significance, initial-state measurement, particle-survival claim or universal formation/maintenance law is supplied."
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "M-phys-primordial-cmb-model-compatibility",
      "kind": "method",
      "statement": "Keep the observed angular statistics, instrument/foreground response and conditional primordial-parameter posterior in their reviewed contexts. Compare the fitted power with the selected curvature-spectrum definition only after declaring the background/state and transfer assumptions. Preserve shared data and priors; do not treat a power-law fit or Gaussian stochastic representation as a direct observation of an initial vacuum, a measured inflaton or a unique origin mechanism.",
      "scope": "A literature synthesis of one selected historical CMB data combination and separate formal interpretation; no pooled independent confirmation or new likelihood run.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, likelihood replay or direct observation of an initial quantum state."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The angular-spectrum product, response analysis and parameter fit reuse the same sky maps and parts of the calibration/foreground model. They are stages of one chain, not independent confirmations. The fit retains its cosmological priors and parameter degeneracies; theory assumptions are not measured initial conditions.",
        "TT,TE,EE+lowE excludes the separate reconstructed-lensing likelihood, BAO, BK15 and large-scale-structure likelihoods. Physical gravitational lensing of the theoretical angular spectra remains included. This is the declared Planck 2018 historical combination, not a claim about a current joint cosmological best fit.",
        "The fitted power law P_R(k)=A_s(k/k_*)^(n_s-1) is a phenomenological input parameterization. The reviewed canonical slow-roll formula requires a specified potential/background, adopted initial state and later matching; the fit alone supplies none of them or a unique inflationary energy scale.",
        "Near scale invariance and a compatible Gaussian adiabatic spectrum do not uniquely determine a quantum origin. Other initial states, classical stochastic descriptions and alternative generation histories are not ruled out solely by the selected two-point fit. No unreviewed alternative model is claimed to fit equally well.",
        "There is no local Planck likelihood/sky-map replay or new cosmological simulation. Uncertainty and model compatibility are those of the reviewed analyses; no independent likelihood ratio, combined significance, initial-state measurement, particle-survival claim or universal formation/maintenance law is supplied."
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:primordial-origin-scope",
      "name": "Conditional primordial-origin model",
      "kind": "definition",
      "description": "A primordial quantum-origin model supplies a curved cosmological background, field/gravity action, canonical scalar mode, initial state and validity regime. The admitted linear single-field construction predicts a conditional curvature two-point function, with restricted long-wave conservation and stochastic interpretation. Testing its primordial power against CMB statistics additionally requires a postinflationary transfer model, instrument/foreground response and cosmological likelihood. Compatibility of that chain is not a direct measurement of the assumed initial vacuum or a unique origin mechanism.",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action"
        },
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin"
        }
      ],
      "openObligations": [
        "The original 1.5 flat-space vacuum parent supplies a separate free-field concept. Its stationary variance and two-point function do not select a cosmological background, curvature variable, potential or initial state. No old oscillator replay is numerical evidence for the CMB chain.",
        "The scalar field perturbation delta(phi), gauge-invariant primordial R, later metric/density perturbations and measured angular CMB statistics are different observables. Their connection requires the stated constraints and transfer model; density also needs an epoch and gauge convention.",
        "Hubble-radius exit alone supplies neither universal freezing nor classicalization. Conservation requires the specified regular background and dominant long-wave solution. A Gaussian amplitude marginal or a restricted stochastic trajectory approximation does not select a realized outcome or remove the exact canonical commutator.",
        "Matter spectra and large-scale structure are explicitly outside this CMB application: no independent survey sample, bias/redshift response, nonlinear matter evolution or large-scale-structure likelihood is reviewed. No uninterrupted quantum-fluctuation-to-galaxy construction is established.",
        "The original parent weight 1, necessary arising relation, causal/interaction codes and N_min=N_crit=1 have no admitted quantitative scientific meaning. The SOMA phase 2, effect TypeRole 4, well-supported label and generic theoretical/CMB/structure placeholders supply no independent evidence or universal temporal order."
      ]
    },
    {
      "id": "phys:primordial-cmb-model-compatibility",
      "name": "Conditional primordial-spectrum and CMB compatibility",
      "kind": "scoped-process",
      "description": "The selected Planck 2018 TT,TE,EE+lowE chain compares measured angular temperature/polarization statistics with a flat base-LambdaCDM transfer and likelihood model and infers its power-law scalar amplitude and tilt. The admitted quantum single-field construction is a conditional way to supply primordial curvature power with which such data can be compared. The parameter fit does not identify an inflaton potential, measure its initial quantum state, or uniquely prove inflationary quantum generation.",
      "claimIds": [
        "C-phys-primordial-cmb-model-compatibility"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions"
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude"
        }
      ],
      "openObligations": [
        "The angular-spectrum product, response analysis and parameter fit reuse the same sky maps and parts of the calibration/foreground model. They are stages of one chain, not independent confirmations. The fit retains its cosmological priors and parameter degeneracies; theory assumptions are not measured initial conditions.",
        "TT,TE,EE+lowE excludes the separate reconstructed-lensing likelihood, BAO, BK15 and large-scale-structure likelihoods. Physical gravitational lensing of the theoretical angular spectra remains included. This is the declared Planck 2018 historical combination, not a claim about a current joint cosmological best fit.",
        "The fitted power law P_R(k)=A_s(k/k_*)^(n_s-1) is a phenomenological input parameterization. The reviewed canonical slow-roll formula requires a specified potential/background, adopted initial state and later matching; the fit alone supplies none of them or a unique inflationary energy scale.",
        "Near scale invariance and a compatible Gaussian adiabatic spectrum do not uniquely determine a quantum origin. Other initial states, classical stochastic descriptions and alternative generation histories are not ruled out solely by the selected two-point fit. No unreviewed alternative model is claimed to fit equally well.",
        "There is no local Planck likelihood/sky-map replay or new cosmological simulation. Uncertainty and model compatibility are those of the reviewed analyses; no independent likelihood ratio, combined significance, initial-state measurement, particle-survival claim or universal formation/maintenance law is supplied."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:vacuum-two-point-function-primordial-origin-scope",
      "source": "phys:vacuum-two-point-function",
      "target": "phys:primordial-origin-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The old flat-space correlator is a boundary comparison only; it supplies no cosmological pump field, initial state or numerical CMB prediction.",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ]
    },
    {
      "id": "physics:primordial-curvature-spectrum-primordial-origin-scope",
      "source": "phys:primordial-curvature-spectrum",
      "target": "phys:primordial-origin-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen linear mode/state defines a conditional primordial power, with its Fourier normalization and slow-roll limits.",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ]
    },
    {
      "id": "physics:superhorizon-curvature-evolution-primordial-origin-scope",
      "source": "phys:superhorizon-curvature-evolution",
      "target": "phys:primordial-origin-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Using primordial power after Hubble-radius exit requires the specified dominant-solution and background conditions.",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ]
    },
    {
      "id": "physics:cosmological-growing-mode-classical-limit-primordial-origin-scope",
      "source": "phys:cosmological-growing-mode-classical-limit",
      "target": "phys:primordial-origin-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The restricted stochastic approximation does not establish universal decoherence or a unique quantum origin.",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ]
    },
    {
      "id": "physics:primordial-origin-scope-primordial-cmb-model-compatibility",
      "source": "phys:primordial-origin-scope",
      "target": "phys:primordial-cmb-model-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own model, observable, response and uncertainty; it is neither an independent acquisition nor an empirical necessary-parent arrow.",
      "claimIds": [
        "M-phys-primordial-cmb-model-compatibility"
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:planck2018-cmb-acquisition-context-primordial-cmb-model-compatibility",
      "source": "phys:planck2018-cmb-acquisition-context",
      "target": "phys:primordial-cmb-model-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own model, observable, response and uncertainty; it is neither an independent acquisition nor an empirical necessary-parent arrow.",
      "claimIds": [
        "M-phys-primordial-cmb-model-compatibility"
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:planck2018-angular-spectra-primordial-cmb-model-compatibility",
      "source": "phys:planck2018-angular-spectra",
      "target": "phys:primordial-cmb-model-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own model, observable, response and uncertainty; it is neither an independent acquisition nor an empirical necessary-parent arrow.",
      "claimIds": [
        "M-phys-primordial-cmb-model-compatibility"
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:planck2018-scalar-spectrum-primordial-cmb-model-compatibility",
      "source": "phys:planck2018-scalar-spectrum",
      "target": "phys:primordial-cmb-model-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped interpretation input retains its own model, observable, response and uncertainty; it is neither an independent acquisition nor an empirical necessary-parent arrow.",
      "claimIds": [
        "M-phys-primordial-cmb-model-compatibility"
      ],
      "contextIds": [
        "planck2018-cmb-acquisition",
        "planck2018-cmb-response",
        "planck2018-primordial-inference"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:primordial-origin-scope",
      "role": "definition",
      "denotes": "A declared conditional model and evidence boundary, not an observed initial quantum preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-primordial-origin-scope"
      ]
    },
    {
      "nodeId": "phys:primordial-cmb-model-compatibility",
      "role": "scoped-phenomenon",
      "denotes": "A bounded comparison of one CMB inference with conditional primordial theory, preserving shared data and origin ambiguity.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-primordial-cmb-model-compatibility"
      ]
    }
  ]
};

/** Preserve the conditional cosmological model and its finite CMB evidence boundary. */
export function validateCosmologyScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Cosmology scope ${kind} changed ${id}: preserve model, observable and origin boundaries`);
    }
  }
}
