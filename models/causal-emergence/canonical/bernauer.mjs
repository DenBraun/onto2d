import assert from "node:assert/strict";

export const BERNAUER_CHECKS = new Map([["bernauer2014-bound-tables", "C-phys-bernauer-data-arithmetic"]]);

export const BERNAUER_ADMISSION = {
  "definitions": [
    [
      "phys:sachs-form-factors",
      "D-phys-sachs-form-factors"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "bernauer2014-acquisition-context",
      "M-phys-bernauer2014-acquisition-context",
      [
        "bernauer2014-acquisition"
      ]
    ],
    [
      "bernauer2014-mainz-fit-context",
      "M-phys-bernauer2014-mainz-fit-context",
      [
        "bernauer2014-mainz-fit"
      ]
    ],
    [
      "bernauer2014-rosenbluth-context",
      "M-phys-bernauer2014-rosenbluth-context",
      [
        "bernauer2014-rosenbluth"
      ]
    ],
    [
      "bernauer-data-replay-context",
      "M-phys-bernauer-data-replay-context",
      [
        "bernauer-data-replay"
      ]
    ]
  ],
  "observations": [
    [
      "bernauer2014-ratios",
      "C-phys-bernauer2014-ratios",
      [
        "bernauer2014-acquisition"
      ]
    ],
    [
      "bernauer2014-form-factors",
      "C-phys-bernauer2014-form-factors",
      [
        "bernauer2014-mainz-fit"
      ]
    ],
    [
      "bernauer2014-separated",
      "C-phys-bernauer2014-separated",
      [
        "bernauer2014-rosenbluth"
      ]
    ],
    [
      "bernauer-data-arithmetic",
      "C-phys-bernauer-data-arithmetic",
      [
        "bernauer-data-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "bernauer2014-mainz-fit-context-bernauer2014-ratios",
      "bernauer2014-mainz-fit-context",
      "bernauer2014-ratios",
      "M-phys-bernauer2014-ratios",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-acquisition-context-bernauer2014-ratios",
      "bernauer2014-acquisition-context",
      "bernauer2014-ratios",
      "M-phys-bernauer2014-acquisition-context",
      "measurement-context"
    ],
    [
      "sachs-form-factors-bernauer2014-form-factors",
      "sachs-form-factors",
      "bernauer2014-form-factors",
      "M-phys-bernauer2014-form-factors",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-ratios-bernauer2014-form-factors",
      "bernauer2014-ratios",
      "bernauer2014-form-factors",
      "M-phys-bernauer2014-form-factors",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-mainz-fit-context-bernauer2014-form-factors",
      "bernauer2014-mainz-fit-context",
      "bernauer2014-form-factors",
      "M-phys-bernauer2014-form-factors",
      "interpretation-dependency"
    ],
    [
      "sachs-form-factors-bernauer2014-separated",
      "sachs-form-factors",
      "bernauer2014-separated",
      "M-phys-bernauer2014-separated",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-ratios-bernauer2014-separated",
      "bernauer2014-ratios",
      "bernauer2014-separated",
      "M-phys-bernauer2014-separated",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-form-factors-bernauer2014-separated",
      "bernauer2014-form-factors",
      "bernauer2014-separated",
      "M-phys-bernauer2014-separated",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-rosenbluth-context-bernauer2014-separated",
      "bernauer2014-rosenbluth-context",
      "bernauer2014-separated",
      "M-phys-bernauer2014-separated",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-ratios-bernauer-data-arithmetic",
      "bernauer2014-ratios",
      "bernauer-data-arithmetic",
      "M-phys-bernauer-data-arithmetic",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-form-factors-bernauer-data-arithmetic",
      "bernauer2014-form-factors",
      "bernauer-data-arithmetic",
      "M-phys-bernauer-data-arithmetic",
      "interpretation-dependency"
    ],
    [
      "bernauer2014-separated-bernauer-data-arithmetic",
      "bernauer2014-separated",
      "bernauer-data-arithmetic",
      "M-phys-bernauer-data-arithmetic",
      "interpretation-dependency"
    ],
    [
      "bernauer-data-replay-context-bernauer-data-arithmetic",
      "bernauer-data-replay-context",
      "bernauer-data-arithmetic",
      "M-phys-bernauer-data-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "bernauer2014-acquisition",
    "bernauer2014-mainz-fit",
    "bernauer2014-rosenbluth",
    "bernauer-data-replay"
  ],
  "comparisonIds": [
    "bernauer2014-form-factors",
    "bernauer2014-separated",
    "bernauer-data-arithmetic"
  ],
  "inferenceSources": [
    [
      "M-phys-bernauer2014-acquisition-context",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections"
      ]
    ],
    [
      "M-phys-bernauer2014-mainz-fit-context",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline"
      ]
    ],
    [
      "M-phys-bernauer2014-rosenbluth-context",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth"
      ]
    ],
    [
      "M-phys-bernauer-data-replay-context",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth",
        "bernauer-data-verifier"
      ]
    ],
    [
      "C-phys-bernauer2014-ratios",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections"
      ]
    ],
    [
      "C-phys-bernauer2014-form-factors",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline"
      ]
    ],
    [
      "C-phys-bernauer2014-separated",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth"
      ]
    ],
    [
      "C-phys-bernauer-data-arithmetic",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth",
        "bernauer-data-verifier"
      ]
    ],
    [
      "M-phys-bernauer2014-ratios",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline"
      ]
    ],
    [
      "M-phys-bernauer2014-form-factors",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline"
      ]
    ],
    [
      "M-phys-bernauer2014-separated",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth"
      ]
    ],
    [
      "M-phys-bernauer-data-arithmetic",
      [
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth",
        "bernauer-data-verifier"
      ]
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "bernauer2014",
      "kind": "research-publication",
      "title": "The electric and magnetic form factors of the proton",
      "authors": [
        "J. C. Bernauer",
        "A1 Collaboration"
      ],
      "year": 2014,
      "doi": "10.1103/PhysRevC.90.015206",
      "url": "https://arxiv.org/pdf/1307.6227v2",
      "path": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity",
          "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        ],
        "limit": "The stated passages in the 29 July 2014 arXiv version were read; Table I, Table IV, Equation 51 and Figure 15 were visually inspected. The publisher PDF was not reviewed. Radius results and external-world-data fits are not admitted. Raw events, original acceptance simulation and full fitted covariance are not replayed."
      }
    },
    {
      "id": "bernauer2014-ancillary-description",
      "kind": "research-dataset",
      "title": "Description of ancillary files for The electric and magnetic form factors of the proton",
      "authors": [
        "J. C. Bernauer",
        "A1 Collaboration"
      ],
      "year": 2014,
      "doi": null,
      "url": "https://arxiv.org/src/1307.6227v2",
      "path": "references/canonical/data/bernauer2014-ancillary-description.pdf",
      "review": {
        "extent": "full-ancillary-description",
        "locators": [
          "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        ],
        "limit": "The complete five-page author description dated 24 March 2014 was read. Only the three separately bound Mainz input/output tables are admitted; external-world-data tables and the example optimizer are not executed."
      }
    },
    {
      "id": "bernauer2014-cross-sections",
      "kind": "research-dataset",
      "title": "MAMI elastic cross-section ratio table",
      "authors": [
        "J. C. Bernauer",
        "A1 Collaboration"
      ],
      "year": 2014,
      "doi": null,
      "url": "https://arxiv.org/src/1307.6227v2",
      "path": "references/canonical/data/bernauer2014-cross-sections.dat",
      "review": {
        "extent": "complete-selected-author-table",
        "locators": [
          "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        ],
        "limit": "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input. The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem. Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations."
      }
    },
    {
      "id": "bernauer2014-rosenbluth",
      "kind": "research-dataset",
      "title": "MAMI Rosenbluth form-factor table",
      "authors": [
        "J. C. Bernauer",
        "A1 Collaboration"
      ],
      "year": 2014,
      "doi": null,
      "url": "https://arxiv.org/src/1307.6227v2",
      "path": "references/canonical/data/bernauer2014-rosenbluth.dat",
      "review": {
        "extent": "complete-selected-author-table",
        "locators": [
          "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf"
        ],
        "limit": "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval. Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files."
      }
    },
    {
      "id": "bernauer2014-mainz-spline",
      "kind": "research-dataset",
      "title": "MAMI-only spline form-factor table",
      "authors": [
        "J. C. Bernauer",
        "A1 Collaboration"
      ],
      "year": 2014,
      "doi": null,
      "url": "https://arxiv.org/src/1307.6227v2",
      "path": "references/canonical/data/bernauer2014-mainz-spline.dat",
      "review": {
        "extent": "complete-selected-author-table",
        "locators": [
          "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        ],
        "limit": "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements. The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model."
      }
    },
    {
      "id": "bernauer-data-verifier",
      "kind": "executable-check",
      "title": "Bound MAMI form-factor table and rounded fit-census verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-bernauer-data.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency"
        ],
        "limit": "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-sachs-form-factors",
      "kind": "review-finding",
      "statement": "For unpolarized elastic electron-proton scattering in the ultrarelativistic one-photon approximation, the reduced cross section is epsilon*GE(Q^2)^2+tau*GM(Q^2)^2, where tau=Q^2/(4*m_p^2). GE(0)=1 and GM(0)=mu_p specify reference normalization; the measured cross section does not determine signs by itself.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ]
    },
    {
      "id": "M-phys-bernauer2014-acquisition-context",
      "kind": "method",
      "statement": "Measure unpolarized electron scattering on liquid hydrogen at six beam energies with the three A1 spectrometers; extract acceptance-modeled ratios with the declared radiation, luminosity and normalization treatment.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations."
      ],
      "contextIds": [
        "bernauer2014-acquisition"
      ]
    },
    {
      "id": "M-phys-bernauer2014-mainz-fit-context",
      "kind": "method",
      "statement": "Fit the reused MAMI cross-section ratios with the published Mainz-only models and shared normalization parameters, retaining squared-form-factor response, scaled errors and correction assumptions.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "M-phys-bernauer2014-rosenbluth-context",
      "kind": "method",
      "statement": "Reuse the spline-fit normalization and project the same acceptance-averaged cross sections to fixed Q^2 values before the epsilon-linear separation; retain unconstrained results and constrained alternatives separately.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "M-phys-bernauer-data-replay-context",
      "kind": "method",
      "statement": "Parse the bound author tables under their distinct column conventions; check counts, shared-factor coverage, form-factor ratio identities and rounded Table IV arithmetic.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer-data-verifier",
          "locator": "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "The nonlinear fitted curve and empirically scaled errors make the usual chi-square distribution interpretation approximate, as stated on page 19; printed arithmetic does not certify a goodness-of-fit probability. Table IV prints Friedrich-Walcher chi-square 1598, parameter count 2*7+31 and reduced chi-square 1.1588 for 1422 points. The resulting 1598/1377=1.16049... disagrees beyond display rounding. The reported entries are retained; neither a corrected parameter count nor an error in the original fit is established.",
        "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    },
    {
      "id": "C-phys-bernauer2014-ratios",
      "kind": "review-finding",
      "statement": "The bound MAMI table contains 1422 cross-section ratios at six incident energies from 180 to 855 MeV, with acceptance-averaged Q^2 from 0.003839 to 0.977245 GeV^2. The ratios already use the spline normalization and scaled point errors.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations."
      ],
      "contextIds": [
        "bernauer2014-acquisition"
      ]
    },
    {
      "id": "C-phys-bernauer2014-form-factors",
      "kind": "review-finding",
      "statement": "The selected Mainz-only spline table gives GE, GM/mu_p and mu_p*GE/GM on 1000 Q^2 grid points from 0 to 0.998001 GeV^2, with separate pointwise bands. These are fitted elastic-response quantities conditional on shared normalization and the stated correction model.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "C-phys-bernauer2014-separated",
      "kind": "review-finding",
      "statement": "The bound Rosenbluth table reports 77 unconstrained GE/GM pairs over Q^2=0.0152-0.5524 GeV^2, plus four low-Q^2 GE alternatives constrained by GM/(mu_p*G_dipole)=1 or 1.05. The separation uses the same acquisition and spline-fit normalization.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "C-phys-bernauer-data-arithmetic",
      "kind": "review-finding",
      "statement": "The bound tables contain 1422 cross-section rows, 77 unconstrained plus four constrained Rosenbluth entries and 1000 spline evaluations. GE/(GM/mu_p) reproduces the tabulated normalized ratio within 1e-11. Nine Table IV rows admit their displayed reduced chi-square under rounding; the Friedrich-Walcher row does not.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer-data-verifier",
          "locator": "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency",
          "role": "supports",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [
        "bernauer2014-bound-tables"
      ],
      "limitations": [
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "The nonlinear fitted curve and empirically scaled errors make the usual chi-square distribution interpretation approximate, as stated on page 19; printed arithmetic does not certify a goodness-of-fit probability. Table IV prints Friedrich-Walcher chi-square 1598, parameter count 2*7+31 and reduced chi-square 1.1588 for 1422 points. The resulting 1598/1377=1.16049... disagrees beyond display rounding. The reported entries are retained; neither a corrected parameter count nor an error in the original fit is established.",
        "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    },
    {
      "id": "M-phys-bernauer2014-ratios",
      "kind": "method",
      "statement": "Interpret the released table as the acquisition-derived ratios after spline-fitted normalization and error scaling; retain their mutual fit/product provenance without asserting temporal or causal order.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations."
      ],
      "contextIds": [
        "bernauer2014-acquisition"
      ]
    },
    {
      "id": "M-phys-bernauer2014-form-factors",
      "kind": "method",
      "statement": "Interpret the extracted ratios through the squared Sachs response and the Mainz-only fitting procedure, preserving shared normalization, scaled errors and limited epsilon coverage.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "M-phys-bernauer2014-separated",
      "kind": "method",
      "statement": "Use the same extracted ratios and spline-fit normalization in the stated fixed-Q^2 separation; distinguish free GE/GM pairs from the constrained low-Q^2 alternatives.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "M-phys-bernauer-data-arithmetic",
      "kind": "method",
      "statement": "Use only the bound selected tables, their declared column semantics and displayed Table IV precision for finite checks; retain the unresolved mismatch instead of changing source entries.",
      "scope": "The reused 2006-2007 MAMI proton elastic-scattering acquisition and selected Mainz-only inferences in arXiv:1307.6227v2; no radius or world-data fit admission.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        },
        {
          "sourceId": "bernauer-data-verifier",
          "locator": "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency",
          "role": "method",
          "note": "Only the stated author-version passage, selected table or bounded executable supports this record."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "The nonlinear fitted curve and empirically scaled errors make the usual chi-square distribution interpretation approximate, as stated on page 19; printed arithmetic does not certify a goodness-of-fit probability. Table IV prints Friedrich-Walcher chi-square 1598, parameter count 2*7+31 and reduced chi-square 1.1588 for 1422 points. The resulting 1598/1377=1.16049... disagrees beyond display rounding. The reported entries are retained; neither a corrected parameter count nor an error in the original fit is established.",
        "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "bernauer2014-acquisition",
      "sourceId": "bernauer2014",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevC.90.015206",
      "journal": "Physical Review C",
      "volume": "90",
      "issue": "1",
      "pages": "015206",
      "system": "MAMI proton elastic-scattering acquisition",
      "preparation": "Measure unpolarized electron scattering on liquid hydrogen at six beam energies with the three A1 spectrometers; extract acceptance-modeled ratios with the declared radiation, luminosity and normalization treatment.",
      "observable": "1422 extracted cross-section ratios with acceptance-averaged Q^2, already-scaled point errors and shared normalization products.",
      "finding": "The selected author table contains the reused MAMI ratios; normalization and radiation corrections are part of their extraction.",
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity",
        "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
      ],
      "metadataCheckedAt": "2026-10-01",
      "metadataUrl": "https://arxiv.org/abs/1307.6227v2",
      "correctionCheck": "The versioned arXiv report and deposited ancillary files were inspected; publisher bytes, exhaustive later corrections and independent replications were not reviewed."
    },
    {
      "id": "bernauer2014-mainz-fit",
      "sourceId": "bernauer2014",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevC.90.015206",
      "journal": "Physical Review C",
      "volume": "90",
      "issue": "1",
      "pages": "015206",
      "system": "MAMI-only Sachs form-factor fit",
      "preparation": "Fit the reused MAMI cross-section ratios with the published Mainz-only models and shared normalization parameters, retaining squared-form-factor response, scaled errors and correction assumptions.",
      "observable": "Tabulated Mainz-only spline GE, GM/mu_p and mu_p*GE/GM, with separate pointwise uncertainty and correction-variation columns.",
      "finding": "The selected spline file is a 1000-point evaluation of a fitted response, not another acquisition.",
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
        "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
      ],
      "metadataCheckedAt": "2026-10-01",
      "metadataUrl": "https://arxiv.org/abs/1307.6227v2",
      "correctionCheck": "The versioned arXiv report and deposited ancillary files were inspected; publisher bytes, exhaustive later corrections and independent replications were not reviewed."
    },
    {
      "id": "bernauer2014-rosenbluth",
      "sourceId": "bernauer2014",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevC.90.015206",
      "journal": "Physical Review C",
      "volume": "90",
      "issue": "1",
      "pages": "015206",
      "system": "MAMI dependent Rosenbluth separation",
      "preparation": "Reuse the spline-fit normalization and project the same acceptance-averaged cross sections to fixed Q^2 values before the epsilon-linear separation; retain unconstrained results and constrained alternatives separately.",
      "observable": "77 unconstrained GE/GM pairs and four additional low-Q^2 GE alternatives under fixed magnetic-to-dipole assumptions.",
      "finding": "The separated values are a dependent comparison using the same cross sections and fitted normalization.",
      "limitations": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
      ],
      "metadataCheckedAt": "2026-10-01",
      "metadataUrl": "https://arxiv.org/abs/1307.6227v2",
      "correctionCheck": "The versioned arXiv report and deposited ancillary files were inspected; publisher bytes, exhaustive later corrections and independent replications were not reviewed."
    },
    {
      "id": "bernauer-data-replay",
      "sourceId": "bernauer2014",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevC.90.015206",
      "journal": "Physical Review C",
      "volume": "90",
      "issue": "1",
      "pages": "015206",
      "system": "Bound MAMI table verification",
      "preparation": "Parse the bound author tables under their distinct column conventions; check counts, shared-factor coverage, form-factor ratio identities and rounded Table IV arithmetic.",
      "observable": "Finite source-table identities and the admissible rounding intervals of ten printed fit-census rows.",
      "finding": "The numerical tables satisfy the declared ratio identities; the printed Friedrich-Walcher fit-census row retains an unresolved arithmetic mismatch.",
      "limitations": [
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "The nonlinear fitted curve and empirically scaled errors make the usual chi-square distribution interpretation approximate, as stated on page 19; printed arithmetic does not certify a goodness-of-fit probability. Table IV prints Friedrich-Walcher chi-square 1598, parameter count 2*7+31 and reduced chi-square 1.1588 for 1422 points. The resulting 1598/1377=1.16049... disagrees beyond display rounding. The reported entries are retained; neither a corrected parameter count nor an error in the original fit is established.",
        "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census",
        "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
      ],
      "metadataCheckedAt": "2026-10-01",
      "metadataUrl": "https://arxiv.org/abs/1307.6227v2",
      "correctionCheck": "The versioned arXiv report and deposited ancillary files were inspected; publisher bytes, exhaustive later corrections and independent replications were not reviewed."
    }
  ],
  "comparisons": [
    {
      "id": "bernauer2014-form-factors",
      "candidate": "The extracted ratios support conditional electric and magnetic response fits.",
      "alternative": "The tabulated fit proves a unique charge geometry, constituent count or new magnetic moment.",
      "discriminator": "Interpret the extracted ratios through the squared Sachs response and the Mainz-only fitting procedure, preserving shared normalization, scaled errors and limited epsilon coverage.",
      "result": "conditional-support",
      "limit": "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis.",
      "assumptions": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The released ratios are a fitted-normalization data product, with spline-derived error scaling; they are not a temporally prior independent input to that same fit. The cross-section ratios already incorporate acceptance and radiation modeling, Feshbach Coulomb correction and spline-fit normalization. They are not raw counts or independently measured absolute Born cross sections. Standard-dipole normalization is a model input.",
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "sourceIds": [
        "bernauer2014",
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline"
      ],
      "claimIds": [
        "C-phys-bernauer2014-form-factors"
      ]
    },
    {
      "id": "bernauer2014-separated",
      "candidate": "The separated form factors are a dependent analysis with explicit low-Q^2 constraints.",
      "alternative": "The separation supplies independent validation of the spline normalization and unconstrained magnetic response everywhere.",
      "discriminator": "Use the same extracted ratios and spline-fit normalization in the stated fixed-Q^2 separation; distinguish free GE/GM pairs from the constrained low-Q^2 alternatives.",
      "result": "conditional-support",
      "limit": "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis.",
      "assumptions": [
        "The 2014 author report describes the August 2006, November 2006 and May 2007 MAMI acquisition previously reported in 2010. The 2010 and 2014 publications, spline fits and Rosenbluth separation are dependent uses of this acquisition, not independent replications.",
        "Unpolarized elastic scattering in the ultrarelativistic one-photon approximation determines epsilon*GE^2+tau*GM^2. Signs require normalization and continuity conventions. GE(0)=1 and GM(0)=mu_p are imposed reference values; this is not a new magnetic-moment measurement, a count of constituents or a formation law.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "The Mainz-only analysis applies Feshbach Coulomb correction but not a complete hard two-photon-exchange treatment. Limited epsilon coverage weakens GE/GM separation above Q^2 about 0.55 GeV^2; the single-energy endpoint does not separately identify both form factors without the fit model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "Sachs form factors describe elastic current response in a specified framework. A static three-dimensional charge-density interpretation is frame dependent; no literal three-quark geometry, unique pion-cloud mechanism, neutron form factor, hadronization dynamics or nuclear stability follows."
      ],
      "sourceIds": [
        "bernauer2014",
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth"
      ],
      "claimIds": [
        "C-phys-bernauer2014-separated"
      ]
    },
    {
      "id": "bernauer-data-arithmetic",
      "candidate": "Finite table identities and printed rounding arithmetic delimit the checked quantities and preserve a mismatch.",
      "alternative": "These checks reproduce the original optimization, covariance or apparatus analysis.",
      "discriminator": "Use only the bound selected tables, their declared column semantics and displayed Table IV precision for finite checks; retain the unresolved mismatch instead of changing source entries.",
      "result": "conditional-support",
      "limit": "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis.",
      "assumptions": [
        "The 31 normalization parameters enter shared products. Equation 48 multiplies data and error by their product; ancillary Section 4 uses the reciprocal nuisance-parameter convention on the model. Their numerical parameter values are not interchangeable. Column 6 contains already-scaled point-to-point errors, not counting errors to scale a second time. The 315-MeV acquisition uses the current-based luminosity estimate after a monitor-setting problem.",
        "Kinematics must use the acceptance-averaged Q^2 and beam energy, not the central spectrometer angle. Multiplying columns 5-8 by column 9 undoes the applied Coulomb correction. Columns 12-18 change model normalization; the systematic variations in column 10 require new fits, not new observations.",
        "The selected Mainz-only spline table tabulates GE, GM/mu_p and mu_p*GE/GM, with separate statistical, experimental systematic and Coulomb-variation columns. Its 1000 grid values are evaluations of one fit, not 1000 new measurements.",
        "The fit errors describe 68 percent pointwise bands. They are not simultaneous bands, independent draws or the full covariance. The Coulomb-variation band varies a correction by 50 percent; it is not an independent Gaussian error to combine without a model.",
        "Rosenbluth separation reuses the spline-fit normalization and projects the same finite-acceptance data to 77 Q^2 values. Its 77 unconstrained pairs and four additional low-Q^2 constrained alternatives are not independent data sets. The latter impose GM/(mu_p*G_dipole) at 1 and 1.05; their GE alternatives are not an ordinary confidence interval.",
        "Rosenbluth.dat stores GM, whereas the selected spline file stores GM/mu_p. The unconstrained Rosenbluth uncertainties are statistical; no complete cross-point or GE-GM covariance is supplied by these selected files.",
        "The nonlinear fitted curve and empirically scaled errors make the usual chi-square distribution interpretation approximate, as stated on page 19; printed arithmetic does not certify a goodness-of-fit probability. Table IV prints Friedrich-Walcher chi-square 1598, parameter count 2*7+31 and reduced chi-square 1.1588 for 1422 points. The resulting 1598/1377=1.16049... disagrees beyond display rounding. The reported entries are retained; neither a corrected parameter count nor an error in the original fit is established.",
        "The executable check binds three author tables and their description, verifies finite-table identities and printed rounding arithmetic, and retains the Table IV mismatch. It does not replay raw acquisition, acceptance simulation, optimization, covariance, radius extraction or the external-world-data analysis."
      ],
      "sourceIds": [
        "bernauer2014",
        "bernauer2014-ancillary-description",
        "bernauer2014-cross-sections",
        "bernauer2014-mainz-spline",
        "bernauer2014-rosenbluth",
        "bernauer-data-verifier"
      ],
      "claimIds": [
        "C-phys-bernauer-data-arithmetic"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:sachs-form-factors",
      "name": "Sachs elastic proton form factors",
      "kind": "definition",
      "description": "For unpolarized elastic electron-proton scattering in the ultrarelativistic one-photon approximation, the reduced cross section is epsilon*GE(Q^2)^2+tau*GM(Q^2)^2, where tau=Q^2/(4*m_p^2). GE(0)=1 and GM(0)=mu_p specify reference normalization; the measured cross section does not determine signs by itself.",
      "claimIds": [
        "D-phys-sachs-form-factors"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        }
      ],
      "openObligations": [
        "Keep momentum-transfer, normalization and frame conventions explicit when relating the response to other nucleon observables."
      ]
    },
    {
      "id": "phys:bernauer2014-acquisition-context",
      "name": "MAMI proton elastic-scattering acquisition",
      "kind": "context",
      "description": "Measure unpolarized electron scattering on liquid hydrogen at six beam energies with the three A1 spectrometers; extract acceptance-modeled ratios with the declared radiation, luminosity and normalization treatment.",
      "claimIds": [
        "M-phys-bernauer2014-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Preserve the source-data dependency and obtain original analysis inputs before claiming a full replay."
      ]
    },
    {
      "id": "phys:bernauer2014-mainz-fit-context",
      "name": "MAMI-only Sachs form-factor fit",
      "kind": "context",
      "description": "Fit the reused MAMI cross-section ratios with the published Mainz-only models and shared normalization parameters, retaining squared-form-factor response, scaled errors and correction assumptions.",
      "claimIds": [
        "M-phys-bernauer2014-mainz-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Preserve the source-data dependency and obtain original analysis inputs before claiming a full replay."
      ]
    },
    {
      "id": "phys:bernauer2014-rosenbluth-context",
      "name": "MAMI dependent Rosenbluth separation",
      "kind": "context",
      "description": "Reuse the spline-fit normalization and project the same acceptance-averaged cross sections to fixed Q^2 values before the epsilon-linear separation; retain unconstrained results and constrained alternatives separately.",
      "claimIds": [
        "M-phys-bernauer2014-rosenbluth-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Preserve the source-data dependency and obtain original analysis inputs before claiming a full replay."
      ]
    },
    {
      "id": "phys:bernauer-data-replay-context",
      "name": "Bound MAMI table verification",
      "kind": "context",
      "description": "Parse the bound author tables under their distinct column conventions; check counts, shared-factor coverage, form-factor ratio identities and rounded Table IV arithmetic.",
      "claimIds": [
        "M-phys-bernauer-data-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer-data-verifier",
          "locator": "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency"
        }
      ],
      "openObligations": [
        "Preserve the source-data dependency and obtain original analysis inputs before claiming a full replay."
      ]
    },
    {
      "id": "phys:bernauer2014-ratios",
      "name": "MAMI extracted elastic cross-section ratios",
      "kind": "scoped-process",
      "description": "The bound MAMI table contains 1422 cross-section ratios at six incident energies from 180 to 855 MeV, with acceptance-averaged Q^2 from 0.003839 to 0.977245 GeV^2. The ratios already use the spline normalization and scaled point errors.",
      "claimIds": [
        "C-phys-bernauer2014-ratios"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 7-15, Sections III B-C and IV, Equations 18-29: radiation, Feshbach correction, acceptance simulation, extracted ratios and luminosity"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Recover raw events and acceptance simulation before reproducing the ratio extraction."
      ]
    },
    {
      "id": "phys:bernauer2014-form-factors",
      "name": "MAMI-only fitted electric and magnetic form factors",
      "kind": "scoped-process",
      "description": "The selected Mainz-only spline table gives GE, GM/mu_p and mu_p*GE/GM on 1000 Q^2 grid points from 0 to 0.998001 GeV^2, with separate pointwise bands. These are fitted elastic-response quantities conditional on shared normalization and the stated correction model.",
      "claimIds": [
        "C-phys-bernauer2014-form-factors"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Reproduce the optimizer, acceptance integration and covariance before claiming a full form-factor fit replay; keep neutron and magnetic-moment measurements separate."
      ]
    },
    {
      "id": "phys:bernauer2014-separated",
      "name": "MAMI dependent separated form factors",
      "kind": "scoped-process",
      "description": "The bound Rosenbluth table reports 77 unconstrained GE/GM pairs over Q^2=0.0152-0.5524 GeV^2, plus four low-Q^2 GE alternatives constrained by GM/(mu_p*G_dipole)=1 or 1.05. The separation uses the same acquisition and spline-fit normalization.",
      "claimIds": [
        "C-phys-bernauer2014-separated"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf"
        }
      ],
      "openObligations": [
        "Recover the projection, point grouping and full covariance before comparing separation methods as a reproduced statistical test."
      ]
    },
    {
      "id": "phys:bernauer-data-arithmetic",
      "name": "Checked MAMI table identities and fit-census mismatch",
      "kind": "scoped-process",
      "description": "The bound tables contain 1422 cross-section rows, 77 unconstrained plus four constrained Rosenbluth entries and 1000 spline evaluations. GE/(GM/mu_p) reproduces the tabulated normalized ratio within 1e-11. Nine Table IV rows admit their displayed reduced chi-square under rounding; the Friedrich-Walcher row does not.",
      "claimIds": [
        "C-phys-bernauer-data-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 18-23, Sections V C-D, Equation 48 and Tables III-IV: shared normalization, scaled errors, model fits, pointwise bands and printed fit census"
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 25-28, Sections VI A-B, Equation 51 and Figure 15: Mainz-only spline, limited separation, dependent Rosenbluth extraction and constrained low-Q^2 points"
        },
        {
          "sourceId": "bernauer2014-ancillary-description",
          "locator": "arXiv:1307.6227v2 archive member aux/explanation.pdf, pages 1-5: Mainz-only and world-data column conventions, Rosenbluth values, cross-section corrections and shared normalization"
        },
        {
          "sourceId": "bernauer2014-cross-sections",
          "locator": "arXiv:1307.6227v2 archive member aux/CrossSections/CrossSections.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-mainz-spline",
          "locator": "arXiv:1307.6227v2 archive member aux/fits/MainzOnly/Spline.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer2014-rosenbluth",
          "locator": "arXiv:1307.6227v2 archive member aux/Rosenbluth/Rosenbluth.dat: complete author table, interpreted with aux/explanation.pdf"
        },
        {
          "sourceId": "bernauer-data-verifier",
          "locator": "verify(): bound table census, shared-factor IDs, GE/(GM/mu_p) identities, correction direction and rounded Table IV consistency"
        }
      ],
      "openObligations": [
        "Resolve the reported Table IV parameter-count and reduced-chi-square mismatch without inventing a corrected fit; finite checks do not reproduce raw acquisition or covariance."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:bernauer2014-mainz-fit-context-bernauer2014-ratios",
      "source": "phys:bernauer2014-mainz-fit-context",
      "target": "phys:bernauer2014-ratios",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The released ratios already use spline-derived normalization and error scaling. This records shared fit/product provenance, not a new causal or temporally ordered computation.",
      "claimIds": [
        "M-phys-bernauer2014-ratios"
      ],
      "contextIds": [
        "bernauer2014-acquisition"
      ]
    },
    {
      "id": "physics:bernauer2014-acquisition-context-bernauer2014-ratios",
      "source": "phys:bernauer2014-acquisition-context",
      "target": "phys:bernauer2014-ratios",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared acquisition and extraction procedure determine the tabulated corrected ratios.",
      "claimIds": [
        "M-phys-bernauer2014-acquisition-context"
      ],
      "contextIds": [
        "bernauer2014-acquisition"
      ]
    },
    {
      "id": "physics:sachs-form-factors-bernauer2014-form-factors",
      "source": "phys:sachs-form-factors",
      "target": "phys:bernauer2014-form-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The squared Sachs response and imposed zero-transfer references define the quantities inferred by the fit.",
      "claimIds": [
        "M-phys-bernauer2014-form-factors"
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "physics:bernauer2014-ratios-bernauer2014-form-factors",
      "source": "phys:bernauer2014-ratios",
      "target": "phys:bernauer2014-form-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The released table represents the acquisition-derived ratios used in fitting; a refit must retain shared floating normalization rather than treating the spline-normalized release as an independent raw input.",
      "claimIds": [
        "M-phys-bernauer2014-form-factors"
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "physics:bernauer2014-mainz-fit-context-bernauer2014-form-factors",
      "source": "phys:bernauer2014-mainz-fit-context",
      "target": "phys:bernauer2014-form-factors",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The Mainz-only model, normalization and uncertainty procedure condition the tabulated spline evaluations.",
      "claimIds": [
        "M-phys-bernauer2014-form-factors"
      ],
      "contextIds": [
        "bernauer2014-mainz-fit"
      ]
    },
    {
      "id": "physics:sachs-form-factors-bernauer2014-separated",
      "source": "phys:sachs-form-factors",
      "target": "phys:bernauer2014-separated",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "At fixed momentum transfer the squared Sachs response gives the linear epsilon separation under the stated approximations.",
      "claimIds": [
        "M-phys-bernauer2014-separated"
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "physics:bernauer2014-ratios-bernauer2014-separated",
      "source": "phys:bernauer2014-ratios",
      "target": "phys:bernauer2014-separated",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separated points reuse a projected subset of the same cross-section acquisition.",
      "claimIds": [
        "M-phys-bernauer2014-separated"
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "physics:bernauer2014-form-factors-bernauer2014-separated",
      "source": "phys:bernauer2014-form-factors",
      "target": "phys:bernauer2014-separated",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separation fixes the normalization determined by the spline fit; it is not an independently normalized replication.",
      "claimIds": [
        "M-phys-bernauer2014-separated"
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "physics:bernauer2014-rosenbluth-context-bernauer2014-separated",
      "source": "phys:bernauer2014-rosenbluth-context",
      "target": "phys:bernauer2014-separated",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Projection, epsilon coverage and constrained low-Q^2 alternatives delimit the reported separation.",
      "claimIds": [
        "M-phys-bernauer2014-separated"
      ],
      "contextIds": [
        "bernauer2014-rosenbluth"
      ]
    },
    {
      "id": "physics:bernauer2014-ratios-bernauer-data-arithmetic",
      "source": "phys:bernauer2014-ratios",
      "target": "phys:bernauer-data-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The bound ratio table supplies the finite census and shared-normalization fields checked locally.",
      "claimIds": [
        "M-phys-bernauer-data-arithmetic"
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    },
    {
      "id": "physics:bernauer2014-form-factors-bernauer-data-arithmetic",
      "source": "phys:bernauer2014-form-factors",
      "target": "phys:bernauer-data-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected spline evaluations supply the normalized ratio identity, not new observations.",
      "claimIds": [
        "M-phys-bernauer-data-arithmetic"
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    },
    {
      "id": "physics:bernauer2014-separated-bernauer-data-arithmetic",
      "source": "phys:bernauer2014-separated",
      "target": "phys:bernauer-data-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The bound separation table supplies the distinct unconstrained and constrained entry census.",
      "claimIds": [
        "M-phys-bernauer-data-arithmetic"
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    },
    {
      "id": "physics:bernauer-data-replay-context-bernauer-data-arithmetic",
      "source": "phys:bernauer-data-replay-context",
      "target": "phys:bernauer-data-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared finite checks delimit the verified table arithmetic and retain the printed inconsistency.",
      "claimIds": [
        "M-phys-bernauer-data-arithmetic"
      ],
      "contextIds": [
        "bernauer-data-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:sachs-form-factors",
      "role": "definition",
      "denotes": "For unpolarized elastic electron-proton scattering in the ultrarelativistic one-photon approximation, the reduced cross section is epsilon*GE(Q^2)^2+tau*GM(Q^2)^2, where tau=Q^2/(4*m_p^2). GE(0)=1 and GM(0)=mu_p specify reference normalization; the measured cross section does not determine signs by itself.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-sachs-form-factors"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-acquisition-context",
      "role": "experimental-context",
      "denotes": "Measure unpolarized electron scattering on liquid hydrogen at six beam energies with the three A1 spectrometers; extract acceptance-modeled ratios with the declared radiation, luminosity and normalization treatment.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bernauer2014-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-mainz-fit-context",
      "role": "model-context",
      "denotes": "Fit the reused MAMI cross-section ratios with the published Mainz-only models and shared normalization parameters, retaining squared-form-factor response, scaled errors and correction assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bernauer2014-mainz-fit-context"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-rosenbluth-context",
      "role": "model-context",
      "denotes": "Reuse the spline-fit normalization and project the same acceptance-averaged cross sections to fixed Q^2 values before the epsilon-linear separation; retain unconstrained results and constrained alternatives separately.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bernauer2014-rosenbluth-context"
      ]
    },
    {
      "nodeId": "phys:bernauer-data-replay-context",
      "role": "model-context",
      "denotes": "Parse the bound author tables under their distinct column conventions; check counts, shared-factor coverage, form-factor ratio identities and rounded Table IV arithmetic.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bernauer-data-replay-context"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-ratios",
      "role": "scoped-phenomenon",
      "denotes": "The bound MAMI table contains 1422 cross-section ratios at six incident energies from 180 to 855 MeV, with acceptance-averaged Q^2 from 0.003839 to 0.977245 GeV^2. The ratios already use the spline normalization and scaled point errors.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bernauer2014-ratios"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-form-factors",
      "role": "scoped-phenomenon",
      "denotes": "The selected Mainz-only spline table gives GE, GM/mu_p and mu_p*GE/GM on 1000 Q^2 grid points from 0 to 0.998001 GeV^2, with separate pointwise bands. These are fitted elastic-response quantities conditional on shared normalization and the stated correction model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bernauer2014-form-factors"
      ]
    },
    {
      "nodeId": "phys:bernauer2014-separated",
      "role": "scoped-phenomenon",
      "denotes": "The bound Rosenbluth table reports 77 unconstrained GE/GM pairs over Q^2=0.0152-0.5524 GeV^2, plus four low-Q^2 GE alternatives constrained by GM/(mu_p*G_dipole)=1 or 1.05. The separation uses the same acquisition and spline-fit normalization.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bernauer2014-separated"
      ]
    },
    {
      "nodeId": "phys:bernauer-data-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The bound tables contain 1422 cross-section rows, 77 unconstrained plus four constrained Rosenbluth entries and 1000 spline evaluations. GE/(GM/mu_p) reproduces the tabulated normalized ratio within 1e-11. Nine Table IV rows admit their displayed reduced chi-square under rounding; the Friedrich-Walcher row does not.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bernauer-data-arithmetic"
      ]
    }
  ]
};

/** Protect the reviewed table semantics and shared-data inference, not the fit. */
export function validateBernauerContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing Bernauer ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Bernauer ${kind} changed ${id}.${key}: preserve source, normalization and inference scope`);
      }
    }
  }
}
