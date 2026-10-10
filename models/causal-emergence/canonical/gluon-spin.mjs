import assert from "node:assert/strict";

export const GLUON_SPIN_CHECKS = new Map();
export const GLUON_SPIN_ANALYTICAL_SOURCES = new Map();
export const GLUON_SPIN_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "sld1997-spin-acquisition-context",
      "M-phys-sld1997-spin-acquisition-context",
      [
        "sld1997-spin-acquisition"
      ]
    ],
    [
      "sld1997-spin-response-context",
      "M-phys-sld1997-spin-response-context",
      [
        "sld1997-spin-response"
      ]
    ],
    [
      "sld1997-spin-inference-context",
      "M-phys-sld1997-spin-inference-context",
      [
        "sld1997-spin-inference"
      ]
    ]
  ],
  "observations": [
    [
      "sld1997-spin-readout",
      "C-phys-sld1997-spin-readout",
      [
        "sld1997-spin-acquisition"
      ]
    ],
    [
      "sld1997-spin-corrected-shapes",
      "C-phys-sld1997-spin-corrected-shapes",
      [
        "sld1997-spin-response"
      ]
    ],
    [
      "sld1997-spin-comparison",
      "C-phys-sld1997-spin-comparison",
      [
        "sld1997-spin-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "sld1997-spin-acquisition-context-sld1997-spin-readout",
      "sld1997-spin-acquisition-context",
      "sld1997-spin-readout",
      "M-phys-sld1997-spin-readout",
      "measurement-context"
    ],
    [
      "sld1997-spin-response-context-sld1997-spin-readout",
      "sld1997-spin-response-context",
      "sld1997-spin-readout",
      "M-phys-sld1997-spin-readout",
      "interpretation-dependency"
    ],
    [
      "sld1997-spin-readout-sld1997-spin-corrected-shapes",
      "sld1997-spin-readout",
      "sld1997-spin-corrected-shapes",
      "M-phys-sld1997-spin-corrected-shapes",
      "interpretation-dependency"
    ],
    [
      "sld1997-spin-response-context-sld1997-spin-corrected-shapes",
      "sld1997-spin-response-context",
      "sld1997-spin-corrected-shapes",
      "M-phys-sld1997-spin-corrected-shapes",
      "interpretation-dependency"
    ],
    [
      "sld1997-spin-corrected-shapes-sld1997-spin-comparison",
      "sld1997-spin-corrected-shapes",
      "sld1997-spin-comparison",
      "M-phys-sld1997-spin-comparison",
      "interpretation-dependency"
    ],
    [
      "sld1997-spin-inference-context-sld1997-spin-comparison",
      "sld1997-spin-inference-context",
      "sld1997-spin-comparison",
      "M-phys-sld1997-spin-comparison",
      "interpretation-dependency"
    ],
    [
      "gluon-fields-sld1997-spin-comparison",
      "gluon-fields",
      "sld1997-spin-comparison",
      "M-phys-sld1997-spin-comparison",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "sld1997-spin-acquisition",
    "sld1997-spin-response",
    "sld1997-spin-inference"
  ],
  "comparisonIds": [
    "sld1997-vector-scalar-tensor"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "sld1997-gluon-spin",
      "kind": "research-publication",
      "title": "Study of the orientation and energy partition of three-jet events in hadronic Z0 decays",
      "authors": [
        "SLD Collaboration"
      ],
      "year": 1997,
      "doi": "10.1103/PhysRevD.55.2533",
      "url": "https://hiroshima.repo.nii.ac.jp/record/2008414/files/PhysRevD_55_2533.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
          "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors",
          "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives",
          "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions"
        ],
        "limit": "Read the published scientific body, Appendix and references, pages 2534-2545, and author version hep-ex/9608016v1, pages 4-26. Visually checked the author formulas, reconstruction and Figures 3, 7-8; checked published Tables III-VII and Figure 8. The publication is PRD 55, 2533-2545 (1 March 1997); the sole author version was submitted 28 August 1996. Upstream detector/generator papers and analysis files were not replayed. Numerical orientation-angle fits and ad hoc mixture limits are outside this admission."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-sld1997-spin-acquisition-context",
      "kind": "method",
      "statement": "Use the 1993 SLC Z0-resonance run recorded by SLD. Trigger on LAC electromagnetic energy above 12 GeV; select corrected clusters with nonzero electromagnetic energy and at least 100 MeV. Apply the stated cluster multiplicity, total-energy and energy-balance cuts, then JADE with y_c=0.02.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This acquisition is distinct from PETRA/TASSO and LEP/OPAL. Event-level independence from other SLD analyses using 1993 data, including the admitted 1993-1995 hadron sample, is not established. Electron-beam helicity is ignored in this analysis."
      ],
      "contextIds": [
        "sld1997-spin-acquisition"
      ]
    },
    {
      "id": "M-phys-sld1997-spin-response-context",
      "kind": "method",
      "statement": "Weight cluster energies by the inverse simulated polar-angle response; rescale jet momenta to zero total three-momentum and adjust energies by Equations 10-12. Apply C_D=D_MC_hadron/D_MC_SLD from HERWIG 5.7 for detector, selection and ISR effects. Then apply C_H=D_MC_parton/D_MC_hadron, averaging JETSET 7.4 and HERWIG 5.7 and assigning the mean-to-extremum difference as a symmetric hadronization uncertainty.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Hadron-level MC uses generated particles with lifetimes above 3e-10 s, without detector simulation or ISR. Tables I-IV have experimental systematic errors strongly correlated between bins; small migrations do not establish diagonal covariance.",
        "Hadronization is assumed independent of gluon spin. JETSET parameters include tuning to SLD hadronic data and the models also use other collider data. Corrected distributions reuse the selected events; they are not independent acquisitions or direct parton observations."
      ],
      "contextIds": [
        "sld1997-spin-response"
      ]
    },
    {
      "id": "M-phys-sld1997-spin-inference-context",
      "kind": "method",
      "statement": "Order jets by energy and compare normalized x_i=2E_i/sqrt(s) and Ellis-Karliner shapes with the specified massless leading-order vector QCD, scalar and Equation 6 tensor models. Restrict to 0.688<x1<0.976, x2<0.93, x3>0.09 and cos(theta_EK)<0.9, normalizing each prediction to the data in its selected range. Table VI separately compares QCD orders and showers.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The relation cos(theta_EK)=(x2-x3)/x1 applies to massless tree-level three-parton kinematics. Energy ordering does not identify an individual jet as a gluon. Scalar predictions use the stated Z-quark couplings; scalar/tensor alternatives have limited higher-order applicability.",
        "The inference assumes the declared response/hadronization treatment and restricted model family. Soft/collinear endpoint resummation is not performed. Ad hoc mixture fits are not universal confidence bounds on scalar/tensor populations."
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    },
    {
      "id": "C-phys-sld1997-spin-readout",
      "kind": "review-finding",
      "statement": "About 51000 hadronic events pass the calorimeter selection; JADE at y_c=0.02 yields 22114 three-jet events. Figure 3 displays reconstructed x1, x2, x3 and cos(theta_EK) distributions with statistical-only error bars, alongside HERWIG 5.7 plus detector simulation.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "role": "supports",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The displayed data already use cluster-response and momentum reconstruction. The four distributions reuse the same events and are not independent replications or directly observed quark/gluon momenta."
      ],
      "contextIds": [
        "sld1997-spin-acquisition"
      ]
    },
    {
      "id": "C-phys-sld1997-spin-corrected-shapes",
      "kind": "review-finding",
      "statement": "Tables I-IV report normalized hadron-level distributions after detector/ISR correction. For example, Table IV gives density 1.700 +/- 0.035 statistical +/- 0.043 experimental systematic at cos(theta_EK)=0.875. Figures 4-7 further apply hadronization corrections to give parton-level estimates, with statistical and total systematic errors added in quadrature.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors",
          "role": "supports",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The tabulated density is per unit dimensionless cos(theta_EK), not a cross section in area units or a parton-level Figure 7 value. Experimental systematic errors are correlated between bins.",
        "No event, migration, generator-tuning, covariance or correction replay is claimed. The correction stages describe the same measured sample and depend on their declared phenomenological models."
      ],
      "contextIds": [
        "sld1997-spin-response"
      ]
    },
    {
      "id": "C-phys-sld1997-spin-comparison",
      "kind": "review-finding",
      "statement": "The normalized restricted-range shapes favor the specified vector QCD calculation over the scalar and tensor alternatives. For the Ellis-Karliner comparison, Table VII reports 18 bins and chi-squared values 19.5 (vector), 1684.0 (scalar) and 772.1 (tensor). These are the published comparison statistics, not locally reproduced fits.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
          "role": "supports",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives",
          "role": "supports",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions",
          "role": "supports",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Numbers of bins are not declared degrees of freedom or converted here to p-values. Shape agreement is restricted: leading-order QCD is not an exact description at all endpoints, and higher orders do not improve every observable uniformly.",
        "This supports vector-gluon interpretation within the tested model family; it does not separately measure color factors, electric charge, confinement, exact masslessness, self-coupling or all possible spin-zero/two theories. No independent gluon count or universal mixture bound follows."
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    },
    {
      "id": "M-phys-sld1997-spin-readout",
      "kind": "method",
      "statement": "The selected 1993 acquisition and calibrated cluster/jet reconstruction jointly determine the displayed readout; the simulated histogram is a comparison, not another data sample.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The displayed data already use cluster-response and momentum reconstruction. The four distributions reuse the same events and are not independent replications or directly observed quark/gluon momenta."
      ],
      "contextIds": [
        "sld1997-spin-acquisition"
      ]
    },
    {
      "id": "M-phys-sld1997-spin-corrected-shapes",
      "kind": "method",
      "statement": "The selected reconstructed shapes are inputs to the detector/ISR and then hadronization maps; each corrected stage retains its distinct observable and correlated systematic boundary.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The tabulated density is per unit dimensionless cos(theta_EK), not a cross section in area units or a parton-level Figure 7 value. Experimental systematic errors are correlated between bins.",
        "No event, migration, generator-tuning, covariance or correction replay is claimed. The correction stages describe the same measured sample and depend on their declared phenomenological models."
      ],
      "contextIds": [
        "sld1997-spin-response"
      ]
    },
    {
      "id": "M-phys-sld1997-spin-comparison",
      "kind": "method",
      "statement": "The corrected shapes and the declared restricted prediction family determine the conditional spin comparison. The gluon-field definition names the vector QCD hypothesis, not an independently measured premise or a derivation of all its properties.",
      "scope": "SLD 1993 calorimeter three-jet energy partition under the published reconstruction, correction and restricted spin-model comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions",
          "role": "method",
          "note": "Supports the specified stage of the SLD analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Numbers of bins are not declared degrees of freedom or converted here to p-values. Shape agreement is restricted: leading-order QCD is not an exact description at all endpoints, and higher orders do not improve every observable uniformly.",
        "This supports vector-gluon interpretation within the tested model family; it does not separately measure color factors, electric charge, confinement, exact masslessness, self-coupling or all possible spin-zero/two theories. No independent gluon count or universal mixture bound follows."
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:sld1997-spin-acquisition-context",
      "name": "SLD 1993 three-jet acquisition",
      "kind": "context",
      "description": "Use the 1993 SLC Z0-resonance run recorded by SLD. Trigger on LAC electromagnetic energy above 12 GeV; select corrected clusters with nonzero electromagnetic energy and at least 100 MeV. Apply the stated cluster multiplicity, total-energy and energy-balance cuts, then JADE with y_c=0.02.",
      "claimIds": [
        "M-phys-sld1997-spin-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction"
        }
      ],
      "openObligations": [
        "This acquisition is distinct from PETRA/TASSO and LEP/OPAL. Event-level independence from other SLD analyses using 1993 data, including the admitted 1993-1995 hadron sample, is not established. Electron-beam helicity is ignored in this analysis."
      ]
    },
    {
      "id": "phys:sld1997-spin-response-context",
      "name": "SLD jet response and hadronization corrections",
      "kind": "context",
      "description": "Weight cluster energies by the inverse simulated polar-angle response; rescale jet momenta to zero total three-momentum and adjust energies by Equations 10-12. Apply C_D=D_MC_hadron/D_MC_SLD from HERWIG 5.7 for detector, selection and ISR effects. Then apply C_H=D_MC_parton/D_MC_hadron, averaging JETSET 7.4 and HERWIG 5.7 and assigning the mean-to-extremum difference as a symmetric hadronization uncertainty.",
      "claimIds": [
        "M-phys-sld1997-spin-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors"
        }
      ],
      "openObligations": [
        "Hadron-level MC uses generated particles with lifetimes above 3e-10 s, without detector simulation or ISR. Tables I-IV have experimental systematic errors strongly correlated between bins; small migrations do not establish diagonal covariance.",
        "Hadronization is assumed independent of gluon spin. JETSET parameters include tuning to SLD hadronic data and the models also use other collider data. Corrected distributions reuse the selected events; they are not independent acquisitions or direct parton observations."
      ]
    },
    {
      "id": "phys:sld1997-spin-inference-context",
      "name": "SLD restricted gluon-spin model comparison",
      "kind": "context",
      "description": "Order jets by energy and compare normalized x_i=2E_i/sqrt(s) and Ellis-Karliner shapes with the specified massless leading-order vector QCD, scalar and Equation 6 tensor models. Restrict to 0.688<x1<0.976, x2<0.93, x3>0.09 and cos(theta_EK)<0.9, normalizing each prediction to the data in its selected range. Table VI separately compares QCD orders and showers.",
      "claimIds": [
        "M-phys-sld1997-spin-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions"
        }
      ],
      "openObligations": [
        "The relation cos(theta_EK)=(x2-x3)/x1 applies to massless tree-level three-parton kinematics. Energy ordering does not identify an individual jet as a gluon. Scalar predictions use the stated Z-quark couplings; scalar/tensor alternatives have limited higher-order applicability.",
        "The inference assumes the declared response/hadronization treatment and restricted model family. Soft/collinear endpoint resummation is not performed. Ad hoc mixture fits are not universal confidence bounds on scalar/tensor populations."
      ]
    },
    {
      "id": "phys:sld1997-spin-readout",
      "name": "SLD reconstructed three-jet shapes",
      "kind": "scoped-process",
      "description": "About 51000 hadronic events pass the calorimeter selection; JADE at y_c=0.02 yields 22114 three-jet events. Figure 3 displays reconstructed x1, x2, x3 and cos(theta_EK) distributions with statistical-only error bars, alongside HERWIG 5.7 plus detector simulation.",
      "claimIds": [
        "C-phys-sld1997-spin-readout"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction"
        }
      ],
      "openObligations": [
        "The displayed data already use cluster-response and momentum reconstruction. The four distributions reuse the same events and are not independent replications or directly observed quark/gluon momenta."
      ]
    },
    {
      "id": "phys:sld1997-spin-corrected-shapes",
      "name": "SLD corrected three-jet shapes",
      "kind": "scoped-process",
      "description": "Tables I-IV report normalized hadron-level distributions after detector/ISR correction. For example, Table IV gives density 1.700 +/- 0.035 statistical +/- 0.043 experimental systematic at cos(theta_EK)=0.875. Figures 4-7 further apply hadronization corrections to give parton-level estimates, with statistical and total systematic errors added in quadrature.",
      "claimIds": [
        "C-phys-sld1997-spin-corrected-shapes"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors"
        }
      ],
      "openObligations": [
        "The tabulated density is per unit dimensionless cos(theta_EK), not a cross section in area units or a parton-level Figure 7 value. Experimental systematic errors are correlated between bins.",
        "No event, migration, generator-tuning, covariance or correction replay is claimed. The correction stages describe the same measured sample and depend on their declared phenomenological models."
      ]
    },
    {
      "id": "phys:sld1997-spin-comparison",
      "name": "SLD conditional vector-gluon support",
      "kind": "scoped-process",
      "description": "The normalized restricted-range shapes favor the specified vector QCD calculation over the scalar and tensor alternatives. For the Ellis-Karliner comparison, Table VII reports 18 bins and chi-squared values 19.5 (vector), 1684.0 (scalar) and 772.1 (tensor). These are the published comparison statistics, not locally reproduced fits.",
      "claimIds": [
        "C-phys-sld1997-spin-comparison"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives"
        },
        {
          "sourceId": "sld1997-gluon-spin",
          "locator": "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions"
        }
      ],
      "openObligations": [
        "Numbers of bins are not declared degrees of freedom or converted here to p-values. Shape agreement is restricted: leading-order QCD is not an exact description at all endpoints, and higher orders do not improve every observable uniformly.",
        "This supports vector-gluon interpretation within the tested model family; it does not separately measure color factors, electric charge, confinement, exact masslessness, self-coupling or all possible spin-zero/two theories. No independent gluon count or universal mixture bound follows."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:sld1997-spin-acquisition-context-sld1997-spin-readout",
      "source": "phys:sld1997-spin-acquisition-context",
      "target": "phys:sld1997-spin-readout",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The selected SLC/SLD exposure supplies the events for the reconstructed three-jet readout.",
      "claimIds": [
        "M-phys-sld1997-spin-readout"
      ],
      "contextIds": [
        "sld1997-spin-acquisition"
      ]
    },
    {
      "id": "physics:sld1997-spin-response-context-sld1997-spin-readout",
      "source": "phys:sld1997-spin-response-context",
      "target": "phys:sld1997-spin-readout",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Cluster-response and momentum reconstruction condition the displayed jet shapes before later C_D and C_H correction.",
      "claimIds": [
        "M-phys-sld1997-spin-readout"
      ],
      "contextIds": [
        "sld1997-spin-acquisition"
      ]
    },
    {
      "id": "physics:sld1997-spin-readout-sld1997-spin-corrected-shapes",
      "source": "phys:sld1997-spin-readout",
      "target": "phys:sld1997-spin-corrected-shapes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reconstructed sample supplies the distributions transformed by the correction maps; these stages reuse events.",
      "claimIds": [
        "M-phys-sld1997-spin-corrected-shapes"
      ],
      "contextIds": [
        "sld1997-spin-response"
      ]
    },
    {
      "id": "physics:sld1997-spin-response-context-sld1997-spin-corrected-shapes",
      "source": "phys:sld1997-spin-response-context",
      "target": "phys:sld1997-spin-corrected-shapes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The detector/ISR and hadronization maps determine the respective corrected shapes and model/systematic boundaries.",
      "claimIds": [
        "M-phys-sld1997-spin-corrected-shapes"
      ],
      "contextIds": [
        "sld1997-spin-response"
      ]
    },
    {
      "id": "physics:sld1997-spin-corrected-shapes-sld1997-spin-comparison",
      "source": "phys:sld1997-spin-corrected-shapes",
      "target": "phys:sld1997-spin-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same-data corrected shapes supply the measured side of the restricted prediction comparison.",
      "claimIds": [
        "M-phys-sld1997-spin-comparison"
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    },
    {
      "id": "physics:sld1997-spin-inference-context-sld1997-spin-comparison",
      "source": "phys:sld1997-spin-inference-context",
      "target": "phys:sld1997-spin-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The specified normalized vector/scalar/tensor alternatives and selected ranges define the published comparison.",
      "claimIds": [
        "M-phys-sld1997-spin-comparison"
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    },
    {
      "id": "physics:gluon-fields-sld1997-spin-comparison",
      "source": "phys:gluon-fields",
      "target": "phys:sld1997-spin-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The gluon-field definition names the vector QCD hypothesis tested against alternatives; it is not a detector observation of every gluon property.",
      "claimIds": [
        "M-phys-sld1997-spin-comparison"
      ],
      "contextIds": [
        "sld1997-spin-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "sld1997-spin-acquisition",
      "sourceId": "sld1997-gluon-spin",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevD.55.2533",
      "journal": "Physical Review D",
      "volume": "55",
      "issue": "5",
      "pages": "2533-2545",
      "system": "1993 SLC hadronic Z0 decays selected as three calorimeter jets in SLD",
      "preparation": "Use the 1993 SLC Z0-resonance run recorded by SLD. Trigger on LAC electromagnetic energy above 12 GeV; select corrected clusters with nonzero electromagnetic energy and at least 100 MeV. Apply the stated cluster multiplicity, total-energy and energy-balance cuts, then JADE with y_c=0.02.",
      "observable": "SLD 1993 three-jet acquisition",
      "finding": "The 1993 SLC exposure and declared calorimeter/JADE selection.",
      "limitations": [
        "This acquisition is distinct from PETRA/TASSO and LEP/OPAL. Event-level independence from other SLD analyses using 1993 data, including the admitted 1993-1995 hadron sample, is not established. Electron-beam helicity is ignored in this analysis."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.55.2533",
      "correctionCheck": "Checked the published article against the sole arXiv author version. No exhaustive correction census or upstream reanalysis is claimed."
    },
    {
      "id": "sld1997-spin-response",
      "sourceId": "sld1997-gluon-spin",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.55.2533",
      "journal": "Physical Review D",
      "volume": "55",
      "issue": "5",
      "pages": "2533-2545",
      "system": "1993 SLC hadronic Z0 decays selected as three calorimeter jets in SLD",
      "preparation": "Weight cluster energies by the inverse simulated polar-angle response; rescale jet momenta to zero total three-momentum and adjust energies by Equations 10-12. Apply C_D=D_MC_hadron/D_MC_SLD from HERWIG 5.7 for detector, selection and ISR effects. Then apply C_H=D_MC_parton/D_MC_hadron, averaging JETSET 7.4 and HERWIG 5.7 and assigning the mean-to-extremum difference as a symmetric hadronization uncertainty.",
      "observable": "SLD jet response and hadronization corrections",
      "finding": "The cluster/jet reconstruction and successive detector/ISR and hadronization correction maps.",
      "limitations": [
        "Hadron-level MC uses generated particles with lifetimes above 3e-10 s, without detector simulation or ISR. Tables I-IV have experimental systematic errors strongly correlated between bins; small migrations do not establish diagonal covariance.",
        "Hadronization is assumed independent of gluon spin. JETSET parameters include tuning to SLD hadronic data and the models also use other collider data. Corrected distributions reuse the selected events; they are not independent acquisitions or direct parton observations."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
        "Published page 2536, Sections III-IV, Equations 10-12 and Figure 3: 1993 SLC acquisition, corrected calorimeter clusters and three-jet reconstruction",
        "Published pages 2536-2539, Section IV.A, Equations 13-16, Tables I-V and Figures 4-7: detector/ISR and hadronization corrections with correlated systematic errors"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.55.2533",
      "correctionCheck": "Checked the published article against the sole arXiv author version. No exhaustive correction census or upstream reanalysis is claimed."
    },
    {
      "id": "sld1997-spin-inference",
      "sourceId": "sld1997-gluon-spin",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.55.2533",
      "journal": "Physical Review D",
      "volume": "55",
      "issue": "5",
      "pages": "2533-2545",
      "system": "1993 SLC hadronic Z0 decays selected as three calorimeter jets in SLD",
      "preparation": "Order jets by energy and compare normalized x_i=2E_i/sqrt(s) and Ellis-Karliner shapes with the specified massless leading-order vector QCD, scalar and Equation 6 tensor models. Restrict to 0.688<x1<0.976, x2<0.93, x3>0.09 and cos(theta_EK)<0.9, normalizing each prediction to the data in its selected range. Table VI separately compares QCD orders and showers.",
      "observable": "SLD restricted gluon-spin model comparison",
      "finding": "The restricted phase space and normalized vector/scalar/tensor prediction family.",
      "limitations": [
        "The relation cos(theta_EK)=(x2-x3)/x1 applies to massless tree-level three-parton kinematics. Energy ordering does not identify an individual jet as a gluon. Scalar predictions use the stated Z-quark couplings; scalar/tensor alternatives have limited higher-order applicability.",
        "The inference assumes the declared response/hadronization treatment and restricted model family. Soft/collinear endpoint resummation is not performed. Ad hoc mixture fits are not universal confidence bounds on scalar/tensor populations."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Published pages 2534-2535, Section II.A, Equations 1-6; pages 2544-2545, Appendix: energy ordering and specified vector, scalar and tensor models",
        "Published page 2540, Section IV.A, Tables VI-VII and Figure 8: restricted-range shape comparisons and leading-order spin alternatives",
        "Published pages 2540-2543, Equation 17 and Section V: model-dependent mixtures and qualified conclusions"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.55.2533",
      "correctionCheck": "Checked the published article against the sole arXiv author version. No exhaustive correction census or upstream reanalysis is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "sld1997-vector-scalar-tensor",
      "candidate": "The specified leading-order vector QCD shapes describe the selected three-jet energy partition better than the alternatives.",
      "alternative": "The specified leading-order scalar or Equation 6 tensor model describes those shapes.",
      "discriminator": "Normalized distributions in the declared restricted ranges; Table VII reports chi-squared 19.5, 1684.0 and 772.1 for vector, scalar and tensor in 18 Ellis-Karliner bins.",
      "result": "conditional-support",
      "limit": "Same-sample model comparison, not independent acquisition or a local chi-squared/covariance replay. The tested alternatives and spin-independent hadronization assumption bound the inference; no degrees-of-freedom or mixture-confidence claim is added.",
      "assumptions": [
        "The corrected shapes, specified Z0-production couplings and restricted leading-order alternatives apply.",
        "Normalization is to the selected data range; detector and hadronization corrections carry shared systematic dependence."
      ],
      "sourceIds": [
        "sld1997-gluon-spin"
      ],
      "claimIds": [
        "M-phys-sld1997-spin-inference-context",
        "C-phys-sld1997-spin-comparison"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:sld1997-spin-acquisition-context",
      "role": "experimental-context",
      "denotes": "The 1993 SLC exposure and declared calorimeter/JADE selection.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sld1997-spin-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:sld1997-spin-response-context",
      "role": "model-context",
      "denotes": "The cluster/jet reconstruction and successive detector/ISR and hadronization correction maps.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sld1997-spin-response-context"
      ]
    },
    {
      "nodeId": "phys:sld1997-spin-inference-context",
      "role": "model-context",
      "denotes": "The restricted phase space and normalized vector/scalar/tensor prediction family.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sld1997-spin-inference-context"
      ]
    },
    {
      "nodeId": "phys:sld1997-spin-readout",
      "role": "scoped-phenomenon",
      "denotes": "The selected-event reconstructed jet-energy and Ellis-Karliner distributions before C_D and C_H correction.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sld1997-spin-readout"
      ]
    },
    {
      "nodeId": "phys:sld1997-spin-corrected-shapes",
      "role": "scoped-phenomenon",
      "denotes": "The successive same-data hadron-level tables and model-conditioned parton-level shape estimates.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sld1997-spin-corrected-shapes"
      ]
    },
    {
      "nodeId": "phys:sld1997-spin-comparison",
      "role": "scoped-phenomenon",
      "denotes": "The reported conditional discrimination among specified spin-dependent shapes.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sld1997-spin-comparison"
      ]
    }
  ]
};

/** Preserve measured, corrected and spin-model comparison stages of the SLD analysis. */
export function validateGluonSpinContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing gluon-spin ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value,
        `Gluon-spin ${kind} changed ${id}.${key}: preserve reconstruction, corrections and conditional interpretation`);
    }
  }
}
