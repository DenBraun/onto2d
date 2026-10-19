import assert from "node:assert/strict";

export const CASIMIR_SCOPE_CHECKS = new Map();
export const CASIMIR_SCOPE_ANALYTICAL_SOURCES = new Map();
export const CASIMIR_SCOPE_STUDY_TYPES = new Map([]);
export const CASIMIR_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:casimir-observable-boundary",
      "D-phys-casimir-observable-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:ideal-plate-casimir-casimir-observable-boundary",
      [
        "phys:ideal-plate-casimir",
        "phys:casimir-observable-boundary"
      ]
    ],
    [
      "physics:casimir-material-model-casimir-observable-boundary",
      [
        "phys:casimir-material-model",
        "phys:casimir-observable-boundary"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "casimir-source-scope",
      "C-phys-casimir-source-scope",
      [
        "lamoreaux1997",
        "bressi2002"
      ]
    ]
  ],
  "dependencies": [
    [
      "casimir-observable-boundary-casimir-source-scope",
      "casimir-observable-boundary",
      "casimir-source-scope",
      "M-phys-casimir-source-scope",
      "interpretation-dependency"
    ],
    [
      "ideal-plate-casimir-casimir-source-scope",
      "ideal-plate-casimir",
      "casimir-source-scope",
      "M-phys-casimir-source-scope",
      "interpretation-dependency"
    ],
    [
      "casimir-material-model-casimir-source-scope",
      "casimir-material-model",
      "casimir-source-scope",
      "M-phys-casimir-source-scope",
      "interpretation-dependency"
    ],
    [
      "lamoreaux-casimir-casimir-source-scope",
      "lamoreaux-casimir",
      "casimir-source-scope",
      "M-phys-casimir-source-scope",
      "interpretation-dependency"
    ],
    [
      "bressi-coefficient-casimir-source-scope",
      "bressi-coefficient",
      "casimir-source-scope",
      "M-phys-casimir-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-casimir-source-scope",
      [
        "bressi2002",
        "casimir1948",
        "jaffe2005",
        "lamoreaux1997"
      ]
    ],
    [
      "M-phys-casimir-source-scope",
      [
        "bressi2002",
        "casimir1948",
        "jaffe2005",
        "lamoreaux1997"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-casimir-observable-boundary",
      "kind": "review-finding",
      "statement": "Specify geometry, separation, material response, temperature and the actual readout before comparing a Casimir model with an experiment. Ideal interaction energy per area, conjugate pressure, a curved-body force and a resonance shift sensitive to a force gradient are different quantities. Residual-force attribution additionally retains electrostatic calibration and subtraction. A measured conditional interaction does not uniquely identify an absolute vacuum energy or the original ontology of its parents.",
      "scope": "Specified electromagnetic boundary models and original experiment-specific observables; no universal hierarchy.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 5-7: sphere-plane apparatus, electrostatic calibration and subtraction; Figures 1-3",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-1 to 041804-3: parallel surfaces, voltage calibration and frequency readout; Figures 1-3",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /19. Numerical parent/ontology defaults are provenance, not evidence."
        },
        {
          "sourceId": "lamoreaux1998-note",
          "locator": "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1",
          "role": "limits",
          "note": "Retain the exact accepted correction and its interpretation limits."
        },
        {
          "sourceId": "lambrecht2000",
          "locator": "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1",
          "role": "limits",
          "note": "Retain the exact accepted correction and its interpretation limits."
        },
        {
          "sourceId": "lamoreaux2000-reply",
          "locator": "Page 5673: accepted Au correction and limits of systematic-error testing",
          "role": "limits",
          "note": "Retain the exact accepted correction and its interpretation limits."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy",
          "role": "limits",
          "note": "The reviewed inference-limit passage delimits what a conditional force measurement identifies."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite positive empirical scope is the existing sphere-plane residual-force comparison and parallel-surface frequency-gradient inference, with both complete original study contexts. They use different preparations and estimators, not one pooled acquisition or universal force curve.",
        "The ideal parallel-plate pressure and interaction energy have different separation powers; the curved-body force and the oscillator frequency-gradient readout require their own geometry and calibration. An ideal field-mode calculation does not directly measure a real-material force.",
        "Keep the Lamoreaux local-radius erratum and accepted Lambrecht-Reynaud optical correction. The reply reports only minimal systematic-error testing; this is not a comprehensive 5% uncertainty certification or an independent replay.",
        "Keep the Bressi nine-point selected fit, declared 0.5-1.1 micrometre interval, alternative drift fit and unresolved printed residual-voltage sign conflict. A squared-frequency exponent is not the pressure exponent, and fitted calibration/subtraction stages are not direct pressure sensing.",
        "The selected cases concern attraction. They do not measure repulsion, every geometry/material/separation/temperature, all surface patches or a universal Casimir force independent of material response. Such extensions need their own declared models and evidence.",
        "Nominally neutral surfaces can retain a fitted electrostatic background; neutrality does not establish vanishing contact potentials or perfect subtraction. The original experimental limits remain attached rather than replaced by a precision label.",
        "Boundary-mode and material-response formulations delimit what the force identifies. No unique measurement of absolute vacuum energy, cosmological energy density, particles from nothing, or one privileged vacuum ontology follows. The material-source formulation does not disprove quantum correlations."
      ]
    },
    {
      "id": "C-phys-casimir-source-scope",
      "kind": "review-finding",
      "statement": "The existing corrected sphere-plane study supports an attractive residual force under its torsion-balance preparation and response assumptions. A separate parallel-surface study supports a conditional pressure coefficient inferred from a calibrated residual resonance-frequency shift. Together with the ideal-plate and material-response definitions, these provide bounded positive evidence for geometry- and material-conditioned electromagnetic interactions; they are not direct measurements of one universal vacuum substance, all force signs or a cross-level emergence law.",
      "scope": "Specified electromagnetic boundary models and original experiment-specific observables; no universal hierarchy.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux1998-note",
          "locator": "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lambrecht2000",
          "locator": "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux2000-reply",
          "locator": "Page 5673: accepted Au correction and limits of systematic-error testing",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4",
          "role": "supports",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /19. Numerical parent/ontology defaults are provenance, not evidence."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy",
          "role": "limits",
          "note": "The reviewed inference-limit passage delimits what a conditional force measurement identifies."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite positive empirical scope is the existing sphere-plane residual-force comparison and parallel-surface frequency-gradient inference, with both complete original study contexts. They use different preparations and estimators, not one pooled acquisition or universal force curve.",
        "The ideal parallel-plate pressure and interaction energy have different separation powers; the curved-body force and the oscillator frequency-gradient readout require their own geometry and calibration. An ideal field-mode calculation does not directly measure a real-material force.",
        "Keep the Lamoreaux local-radius erratum and accepted Lambrecht-Reynaud optical correction. The reply reports only minimal systematic-error testing; this is not a comprehensive 5% uncertainty certification or an independent replay.",
        "Keep the Bressi nine-point selected fit, declared 0.5-1.1 micrometre interval, alternative drift fit and unresolved printed residual-voltage sign conflict. A squared-frequency exponent is not the pressure exponent, and fitted calibration/subtraction stages are not direct pressure sensing.",
        "The selected cases concern attraction. They do not measure repulsion, every geometry/material/separation/temperature, all surface patches or a universal Casimir force independent of material response. Such extensions need their own declared models and evidence.",
        "Nominally neutral surfaces can retain a fitted electrostatic background; neutrality does not establish vanishing contact potentials or perfect subtraction. The original experimental limits remain attached rather than replaced by a precision label.",
        "Boundary-mode and material-response formulations delimit what the force identifies. No unique measurement of absolute vacuum energy, cosmological energy density, particles from nothing, or one privileged vacuum ontology follows. The material-source formulation does not disprove quantum correlations.",
        "Original necessary parents 2.1 and 1.5, weights 0.55/0.45, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance recipe. Supplied electromagnetic response is not proof of a prior ontological vacuum stage.",
        "Original carrier group1/type0 minimum/critical count2 for parent2.1 and group0/type2 resonant-mode count1 for parent1.5, with null saturation, are unsupported thresholds. Two surfaces define the selected geometry rather than a universal minimum for all electromagnetic fluctuation forces.",
        "Original Level2, Phase2, TypeRole4 Effect, science tags, established status, MustCover[10], ShouldCover[9] and Optional[] remain display/ontology choices. Macroscopic boundary sensitivity does not by itself verify SOMA downward causation, universal constraint propagation or new cross-level rules.",
        "The generic theoretical and precision-measurement Evidence entries have null DOI/URL. This admission reuses only the already reviewed ideal model, interpretive limits, actual experiments and linked corrections; no comprehensive literature survey, new force experiment or raw numerical/calibration replay is claimed."
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ]
    },
    {
      "id": "M-phys-casimir-source-scope",
      "kind": "method",
      "statement": "Compare the original force and frequency-gradient data paths with their declared geometry and electromagnetic response. Retain both complete experimental contexts, the accepted radius/optical corrections, the selected parallel-surface estimator and its unresolved voltage-sign conflict. Reuse each study once and keep mathematical boundary models, measured readouts and conditional force interpretations distinct.",
      "scope": "Specified electromagnetic boundary models and original experiment-specific observables; no universal hierarchy.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
          "role": "method",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation",
          "role": "method",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9",
          "role": "method",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux1998-note",
          "locator": "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lambrecht2000",
          "locator": "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "lamoreaux2000-reply",
          "locator": "Page 5673: accepted Au correction and limits of systematic-error testing",
          "role": "limits",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4",
          "role": "method",
          "note": "Reuse the exact reviewed passage and its original scope; no new acquisition or expanded reading is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /19. Numerical parent/ontology defaults are provenance, not evidence."
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Section IV: interpretation limits and unresolved gravitational vacuum energy",
          "role": "limits",
          "note": "The reviewed inference-limit passage delimits what a conditional force measurement identifies."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite positive empirical scope is the existing sphere-plane residual-force comparison and parallel-surface frequency-gradient inference, with both complete original study contexts. They use different preparations and estimators, not one pooled acquisition or universal force curve.",
        "The ideal parallel-plate pressure and interaction energy have different separation powers; the curved-body force and the oscillator frequency-gradient readout require their own geometry and calibration. An ideal field-mode calculation does not directly measure a real-material force.",
        "Keep the Lamoreaux local-radius erratum and accepted Lambrecht-Reynaud optical correction. The reply reports only minimal systematic-error testing; this is not a comprehensive 5% uncertainty certification or an independent replay.",
        "Keep the Bressi nine-point selected fit, declared 0.5-1.1 micrometre interval, alternative drift fit and unresolved printed residual-voltage sign conflict. A squared-frequency exponent is not the pressure exponent, and fitted calibration/subtraction stages are not direct pressure sensing.",
        "The selected cases concern attraction. They do not measure repulsion, every geometry/material/separation/temperature, all surface patches or a universal Casimir force independent of material response. Such extensions need their own declared models and evidence.",
        "Nominally neutral surfaces can retain a fitted electrostatic background; neutrality does not establish vanishing contact potentials or perfect subtraction. The original experimental limits remain attached rather than replaced by a precision label.",
        "Boundary-mode and material-response formulations delimit what the force identifies. No unique measurement of absolute vacuum energy, cosmological energy density, particles from nothing, or one privileged vacuum ontology follows. The material-source formulation does not disprove quantum correlations.",
        "Original necessary parents 2.1 and 1.5, weights 0.55/0.45, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance recipe. Supplied electromagnetic response is not proof of a prior ontological vacuum stage.",
        "Original carrier group1/type0 minimum/critical count2 for parent2.1 and group0/type2 resonant-mode count1 for parent1.5, with null saturation, are unsupported thresholds. Two surfaces define the selected geometry rather than a universal minimum for all electromagnetic fluctuation forces.",
        "Original Level2, Phase2, TypeRole4 Effect, science tags, established status, MustCover[10], ShouldCover[9] and Optional[] remain display/ontology choices. Macroscopic boundary sensitivity does not by itself verify SOMA downward causation, universal constraint propagation or new cross-level rules.",
        "The generic theoretical and precision-measurement Evidence entries have null DOI/URL. This admission reuses only the already reviewed ideal model, interpretive limits, actual experiments and linked corrections; no comprehensive literature survey, new force experiment or raw numerical/calibration replay is claimed."
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:casimir-observable-boundary",
      "name": "Geometry, response and force-observable boundary for Casimir claims",
      "kind": "definition",
      "description": "Specify geometry, separation, material response, temperature and the actual readout before comparing a Casimir model with an experiment. Ideal interaction energy per area, conjugate pressure, a curved-body force and a resonance shift sensitive to a force gradient are different quantities. Residual-force attribution additionally retains electrostatic calibration and subtraction. A measured conditional interaction does not uniquely identify an absolute vacuum energy or the original ontology of its parents.",
      "claimIds": [
        "D-phys-casimir-observable-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        }
      ],
      "openObligations": [
        "The finite positive empirical scope is the existing sphere-plane residual-force comparison and parallel-surface frequency-gradient inference, with both complete original study contexts. They use different preparations and estimators, not one pooled acquisition or universal force curve.",
        "The ideal parallel-plate pressure and interaction energy have different separation powers; the curved-body force and the oscillator frequency-gradient readout require their own geometry and calibration. An ideal field-mode calculation does not directly measure a real-material force.",
        "Keep the Lamoreaux local-radius erratum and accepted Lambrecht-Reynaud optical correction. The reply reports only minimal systematic-error testing; this is not a comprehensive 5% uncertainty certification or an independent replay.",
        "Keep the Bressi nine-point selected fit, declared 0.5-1.1 micrometre interval, alternative drift fit and unresolved printed residual-voltage sign conflict. A squared-frequency exponent is not the pressure exponent, and fitted calibration/subtraction stages are not direct pressure sensing.",
        "The selected cases concern attraction. They do not measure repulsion, every geometry/material/separation/temperature, all surface patches or a universal Casimir force independent of material response. Such extensions need their own declared models and evidence.",
        "Nominally neutral surfaces can retain a fitted electrostatic background; neutrality does not establish vanishing contact potentials or perfect subtraction. The original experimental limits remain attached rather than replaced by a precision label.",
        "Boundary-mode and material-response formulations delimit what the force identifies. No unique measurement of absolute vacuum energy, cosmological energy density, particles from nothing, or one privileged vacuum ontology follows. The material-source formulation does not disprove quantum correlations."
      ]
    },
    {
      "id": "phys:casimir-source-scope",
      "name": "Scoped material-boundary Casimir evidence",
      "kind": "scoped-process",
      "description": "The existing corrected sphere-plane study supports an attractive residual force under its torsion-balance preparation and response assumptions. A separate parallel-surface study supports a conditional pressure coefficient inferred from a calibrated residual resonance-frequency shift. Together with the ideal-plate and material-response definitions, these provide bounded positive evidence for geometry- and material-conditioned electromagnetic interactions; they are not direct measurements of one universal vacuum substance, all force signs or a cross-level emergence law.",
      "claimIds": [
        "C-phys-casimir-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "casimir1948",
          "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        },
        {
          "sourceId": "jaffe2005",
          "locator": "Sections II-III: material response, coupling limits and external-source calculation"
        },
        {
          "sourceId": "lamoreaux1997",
          "locator": "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9"
        },
        {
          "sourceId": "bressi2002",
          "locator": "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4"
        }
      ],
      "openObligations": [
        "The finite positive empirical scope is the existing sphere-plane residual-force comparison and parallel-surface frequency-gradient inference, with both complete original study contexts. They use different preparations and estimators, not one pooled acquisition or universal force curve.",
        "The ideal parallel-plate pressure and interaction energy have different separation powers; the curved-body force and the oscillator frequency-gradient readout require their own geometry and calibration. An ideal field-mode calculation does not directly measure a real-material force.",
        "Keep the Lamoreaux local-radius erratum and accepted Lambrecht-Reynaud optical correction. The reply reports only minimal systematic-error testing; this is not a comprehensive 5% uncertainty certification or an independent replay.",
        "Keep the Bressi nine-point selected fit, declared 0.5-1.1 micrometre interval, alternative drift fit and unresolved printed residual-voltage sign conflict. A squared-frequency exponent is not the pressure exponent, and fitted calibration/subtraction stages are not direct pressure sensing.",
        "The selected cases concern attraction. They do not measure repulsion, every geometry/material/separation/temperature, all surface patches or a universal Casimir force independent of material response. Such extensions need their own declared models and evidence.",
        "Nominally neutral surfaces can retain a fitted electrostatic background; neutrality does not establish vanishing contact potentials or perfect subtraction. The original experimental limits remain attached rather than replaced by a precision label.",
        "Boundary-mode and material-response formulations delimit what the force identifies. No unique measurement of absolute vacuum energy, cosmological energy density, particles from nothing, or one privileged vacuum ontology follows. The material-source formulation does not disprove quantum correlations.",
        "Original necessary parents 2.1 and 1.5, weights 0.55/0.45, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance recipe. Supplied electromagnetic response is not proof of a prior ontological vacuum stage.",
        "Original carrier group1/type0 minimum/critical count2 for parent2.1 and group0/type2 resonant-mode count1 for parent1.5, with null saturation, are unsupported thresholds. Two surfaces define the selected geometry rather than a universal minimum for all electromagnetic fluctuation forces.",
        "Original Level2, Phase2, TypeRole4 Effect, science tags, established status, MustCover[10], ShouldCover[9] and Optional[] remain display/ontology choices. Macroscopic boundary sensitivity does not by itself verify SOMA downward causation, universal constraint propagation or new cross-level rules.",
        "The generic theoretical and precision-measurement Evidence entries have null DOI/URL. This admission reuses only the already reviewed ideal model, interpretive limits, actual experiments and linked corrections; no comprehensive literature survey, new force experiment or raw numerical/calibration replay is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:ideal-plate-casimir-casimir-observable-boundary",
      "source": "phys:ideal-plate-casimir",
      "target": "phys:casimir-observable-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "claimIds": [
        "D-phys-casimir-observable-boundary"
      ],
      "assertion": "The existing declared boundary model supplies a formal interpretation condition, without asserting measured causation."
    },
    {
      "id": "physics:casimir-material-model-casimir-observable-boundary",
      "source": "phys:casimir-material-model",
      "target": "phys:casimir-observable-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "claimIds": [
        "D-phys-casimir-observable-boundary"
      ],
      "assertion": "The existing declared boundary model supplies a formal interpretation condition, without asserting measured causation."
    },
    {
      "id": "physics:casimir-observable-boundary-casimir-source-scope",
      "source": "phys:casimir-observable-boundary",
      "target": "phys:casimir-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-casimir-source-scope"
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ],
      "assertion": "The declared model or original scoped result conditions this two-preparation interpretation; no new acquisition or universal causal ancestry is asserted."
    },
    {
      "id": "physics:ideal-plate-casimir-casimir-source-scope",
      "source": "phys:ideal-plate-casimir",
      "target": "phys:casimir-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-casimir-source-scope"
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ],
      "assertion": "The declared model or original scoped result conditions this two-preparation interpretation; no new acquisition or universal causal ancestry is asserted."
    },
    {
      "id": "physics:casimir-material-model-casimir-source-scope",
      "source": "phys:casimir-material-model",
      "target": "phys:casimir-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-casimir-source-scope"
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ],
      "assertion": "The declared model or original scoped result conditions this two-preparation interpretation; no new acquisition or universal causal ancestry is asserted."
    },
    {
      "id": "physics:lamoreaux-casimir-casimir-source-scope",
      "source": "phys:lamoreaux-casimir",
      "target": "phys:casimir-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-casimir-source-scope"
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ],
      "assertion": "The declared model or original scoped result conditions this two-preparation interpretation; no new acquisition or universal causal ancestry is asserted."
    },
    {
      "id": "physics:bressi-coefficient-casimir-source-scope",
      "source": "phys:bressi-coefficient",
      "target": "phys:casimir-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-casimir-source-scope"
      ],
      "contextIds": [
        "lamoreaux1997",
        "bressi2002"
      ],
      "assertion": "The declared model or original scoped result conditions this two-preparation interpretation; no new acquisition or universal causal ancestry is asserted."
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:casimir-observable-boundary",
      "role": "definition",
      "denotes": "Specify geometry, separation, material response, temperature and the actual readout before comparing a Casimir model with an experiment. Ideal interaction energy per area, conjugate pressure, a curved-body force and a resonance shift sensitive to a force gradient are different quantities. Residual-force attribution additionally retains electrostatic calibration and subtraction. A measured conditional interaction does not uniquely identify an absolute vacuum energy or the original ontology of its parents.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-casimir-observable-boundary"
      ]
    },
    {
      "nodeId": "phys:casimir-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The existing corrected sphere-plane study supports an attractive residual force under its torsion-balance preparation and response assumptions. A separate parallel-surface study supports a conditional pressure coefficient inferred from a calibrated residual resonance-frequency shift. Together with the ideal-plate and material-response definitions, these provide bounded positive evidence for geometry- and material-conditioned electromagnetic interactions; they are not direct measurements of one universal vacuum substance, all force signs or a cross-level emergence law.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-casimir-source-scope"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "casimir1948",
      "kind": "research-publication",
      "title": "On the attraction between two perfectly conducting plates",
      "authors": [
        "H. B. G. Casimir"
      ],
      "year": 1948,
      "doi": null,
      "url": "https://dwc.knaw.nl/DL/publications/PU00018547.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force"
        ],
        "limit": "Complete three-page KNAW scan read; equations on pages 794-795 visually inspected. Original Proceedings 51, pages 793-795, not a later reprint. A boundary-model calculation, not a measurement or a reproduced regulator proof."
      }
    },
    {
      "id": "jaffe2005",
      "kind": "research-publication",
      "title": "Casimir effect and the quantum vacuum",
      "authors": [
        "R. L. Jaffe"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevD.72.021301",
      "url": "https://doi.org/10.1103/PhysRevD.72.021301",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Sections II-III: material response, coupling limits and external-source calculation",
          "Section IV: interpretation limits and unresolved gravitational vacuum energy"
        ],
        "limit": "All five published pages read; Equations 6-9 and Figures 2-3 visually inspected. Theoretical argument about inference, not experimental disproof of quantum fluctuations or a complete all-orders reformulation."
      }
    },
    {
      "id": "lamoreaux1997",
      "kind": "research-publication",
      "title": "Demonstration of the Casimir Force in the 0.6 to 6 micrometers Range",
      "authors": [
        "S. K. Lamoreaux"
      ],
      "year": 1997,
      "doi": "10.1103/PhysRevLett.78.5",
      "url": "https://doi.org/10.1103/PhysRevLett.78.5",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 5-7: sphere-plane apparatus, electrostatic calibration and subtraction; Figures 1-3",
          "Pages 7-8: sweep selection, residual force and fitted amplitude; Figure 4 and Equation 9"
        ],
        "limit": "All four published pages and all four figures reviewed. Interpret with the 1998 erratum and 2000 comment/reply. No sweep-level acquisition, calibration or fit replay."
      }
    },
    {
      "id": "lamoreaux1998-note",
      "kind": "research-publication",
      "title": "Erratum: Demonstration of the Casimir Force in the 0.6 to 6 micrometers Range",
      "authors": [
        "S. K. Lamoreaux"
      ],
      "year": 1998,
      "doi": "10.1103/PhysRevLett.81.5475",
      "url": "https://doi.org/10.1103/PhysRevLett.81.5475",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-publisher-erratum",
        "locators": [
          "Pages 5475-5476: conductivity sign, local radius and theoretical curves; Figure 1"
        ],
        "limit": "Both pages read and Figure 1 visually inspected. The radius correction applies; the Au/Cu calculation and coating explanation require the 2000 comment and reply. Not another experiment."
      }
    },
    {
      "id": "lambrecht2000",
      "kind": "research-publication",
      "title": "Comment on Demonstration of the Casimir Force in the 0.6 to 6 micrometers Range",
      "authors": [
        "Astrid Lambrecht",
        "Serge Reynaud"
      ],
      "year": 2000,
      "doi": "10.1103/PhysRevLett.84.5672",
      "url": "https://doi.org/10.1103/PhysRevLett.84.5672",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-comment",
        "locators": [
          "Page 5672: optical-response calculation and Au/Cu comparison; Figure 1"
        ],
        "limit": "Complete one-page comment and figure reviewed. Reports a revised finite-conductivity calculation; its separate detailed numerical methods paper and optical tables have not been replayed."
      }
    },
    {
      "id": "lamoreaux2000-reply",
      "kind": "research-publication",
      "title": "Lamoreaux Replies:",
      "authors": [
        "S. K. Lamoreaux"
      ],
      "year": 2000,
      "doi": "10.1103/PhysRevLett.84.5673",
      "url": "https://doi.org/10.1103/PhysRevLett.84.5673",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-reply",
        "locators": [
          "Page 5673: accepted Au correction and limits of systematic-error testing"
        ],
        "limit": "Complete one-page reply read and visually inspected. Acceptance of the calculation correction and an explicit experimental limitation, not independent replication."
      }
    },
    {
      "id": "bressi2002",
      "kind": "research-publication",
      "title": "Measurement of the Casimir Force between Parallel Metallic Surfaces",
      "authors": [
        "G. Bressi",
        "G. Carugno",
        "R. Onofrio",
        "G. Ruoso"
      ],
      "year": 2002,
      "doi": "10.1103/PhysRevLett.88.041804",
      "url": "https://doi.org/10.1103/PhysRevLett.88.041804",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 041804-1 to 041804-3: parallel surfaces, voltage calibration and frequency readout; Figures 1-3",
          "Pages 041804-3 to 041804-4: residual fit, coefficient and selected distances; Equations 3-4 and Figure 4"
        ],
        "limit": "All four pages and figures reviewed. The printed dynamic V0 sign conflicts with the static estimate and compensating voltage. No silent sign correction, digitization, calibration replay or fit reproduction."
      }
    }
  ]
};

/** Reuse corrected force and frequency-gradient evidence while retaining geometry, calibration and interpretation boundaries. */
export function validateCasimirScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Casimir-scope ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
