import assert from "node:assert/strict";

export const ELECTROWEAK_CHECKS = new Map([["electroweak-mass-algebra", "C-phys-electroweak-arithmetic"]]);
export const ELECTROWEAK_ANALYTICAL_SOURCES = new Map([["C-phys-electroweak-arithmetic", "electroweak-verifier"]]);
export const ELECTROWEAK_ADMISSION = {
  "definitions": [
    [
      "phys:higgs-abelian-linearization",
      "D-phys-higgs-abelian-linearization"
    ],
    [
      "phys:weinberg-electroweak-background",
      "D-phys-weinberg-electroweak-background"
    ],
    [
      "phys:weinberg-gauge-mass-matrix",
      "D-phys-weinberg-gauge-mass-matrix"
    ],
    [
      "phys:weinberg-electron-yukawa",
      "D-phys-weinberg-electron-yukawa"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-weinberg-electroweak-background",
      [
        "phys:lepton-fields",
        "phys:weinberg-electroweak-background"
      ]
    ],
    [
      "physics:weinberg-electroweak-background-weinberg-gauge-mass-matrix",
      [
        "phys:weinberg-electroweak-background",
        "phys:weinberg-gauge-mass-matrix"
      ]
    ],
    [
      "physics:weinberg-electroweak-background-weinberg-electron-yukawa",
      [
        "phys:weinberg-electroweak-background",
        "phys:weinberg-electron-yukawa"
      ]
    ]
  ],
  "contexts": [
    [
      "atlas2012-acquisition-context",
      "M-phys-atlas2012-acquisition-context",
      [
        "atlas2012-acquisition"
      ]
    ],
    [
      "atlas2012-response-context",
      "M-phys-atlas2012-response-context",
      [
        "atlas2012-inference"
      ]
    ],
    [
      "atlas2012-inference-context",
      "M-phys-atlas2012-inference-context",
      [
        "atlas2012-inference"
      ]
    ],
    [
      "electroweak-replay-context",
      "M-phys-electroweak-replay-context",
      [
        "electroweak-replay"
      ]
    ]
  ],
  "observations": [
    [
      "atlas2012-four-lepton-candidates",
      "C-phys-atlas2012-four-lepton-candidates",
      [
        "atlas2012-acquisition"
      ]
    ],
    [
      "atlas2012-diphoton-candidates",
      "C-phys-atlas2012-diphoton-candidates",
      [
        "atlas2012-acquisition"
      ]
    ],
    [
      "atlas2012-ww-candidates",
      "C-phys-atlas2012-ww-candidates",
      [
        "atlas2012-acquisition"
      ]
    ],
    [
      "atlas2012-boson-mass",
      "C-phys-atlas2012-boson-mass",
      [
        "atlas2012-inference"
      ]
    ],
    [
      "atlas2012-combined-excess",
      "C-phys-atlas2012-combined-excess",
      [
        "atlas2012-inference"
      ]
    ],
    [
      "atlas2012-higgs-compatibility",
      "C-phys-atlas2012-higgs-compatibility",
      [
        "atlas2012-inference"
      ]
    ],
    [
      "electroweak-arithmetic",
      "C-phys-electroweak-arithmetic",
      [
        "electroweak-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "atlas2012-acquisition-context-atlas2012-four-lepton-candidates",
      "atlas2012-acquisition-context",
      "atlas2012-four-lepton-candidates",
      "M-phys-atlas2012-four-lepton-candidates",
      "measurement-context"
    ],
    [
      "atlas2012-response-context-atlas2012-four-lepton-candidates",
      "atlas2012-response-context",
      "atlas2012-four-lepton-candidates",
      "M-phys-atlas2012-four-lepton-candidates",
      "interpretation-dependency"
    ],
    [
      "atlas2012-acquisition-context-atlas2012-diphoton-candidates",
      "atlas2012-acquisition-context",
      "atlas2012-diphoton-candidates",
      "M-phys-atlas2012-diphoton-candidates",
      "measurement-context"
    ],
    [
      "atlas2012-response-context-atlas2012-diphoton-candidates",
      "atlas2012-response-context",
      "atlas2012-diphoton-candidates",
      "M-phys-atlas2012-diphoton-candidates",
      "interpretation-dependency"
    ],
    [
      "atlas2012-acquisition-context-atlas2012-ww-candidates",
      "atlas2012-acquisition-context",
      "atlas2012-ww-candidates",
      "M-phys-atlas2012-ww-candidates",
      "measurement-context"
    ],
    [
      "atlas2012-response-context-atlas2012-ww-candidates",
      "atlas2012-response-context",
      "atlas2012-ww-candidates",
      "M-phys-atlas2012-ww-candidates",
      "interpretation-dependency"
    ],
    [
      "atlas2012-four-lepton-candidates-atlas2012-boson-mass",
      "atlas2012-four-lepton-candidates",
      "atlas2012-boson-mass",
      "M-phys-atlas2012-boson-mass",
      "interpretation-dependency"
    ],
    [
      "atlas2012-diphoton-candidates-atlas2012-boson-mass",
      "atlas2012-diphoton-candidates",
      "atlas2012-boson-mass",
      "M-phys-atlas2012-boson-mass",
      "interpretation-dependency"
    ],
    [
      "atlas2012-response-context-atlas2012-boson-mass",
      "atlas2012-response-context",
      "atlas2012-boson-mass",
      "M-phys-atlas2012-boson-mass",
      "interpretation-dependency"
    ],
    [
      "atlas2012-inference-context-atlas2012-boson-mass",
      "atlas2012-inference-context",
      "atlas2012-boson-mass",
      "M-phys-atlas2012-boson-mass",
      "interpretation-dependency"
    ],
    [
      "atlas2012-four-lepton-candidates-atlas2012-combined-excess",
      "atlas2012-four-lepton-candidates",
      "atlas2012-combined-excess",
      "M-phys-atlas2012-combined-excess",
      "interpretation-dependency"
    ],
    [
      "atlas2012-diphoton-candidates-atlas2012-combined-excess",
      "atlas2012-diphoton-candidates",
      "atlas2012-combined-excess",
      "M-phys-atlas2012-combined-excess",
      "interpretation-dependency"
    ],
    [
      "atlas2012-response-context-atlas2012-combined-excess",
      "atlas2012-response-context",
      "atlas2012-combined-excess",
      "M-phys-atlas2012-combined-excess",
      "interpretation-dependency"
    ],
    [
      "atlas2012-inference-context-atlas2012-combined-excess",
      "atlas2012-inference-context",
      "atlas2012-combined-excess",
      "M-phys-atlas2012-combined-excess",
      "interpretation-dependency"
    ],
    [
      "atlas2012-ww-candidates-atlas2012-combined-excess",
      "atlas2012-ww-candidates",
      "atlas2012-combined-excess",
      "M-phys-atlas2012-combined-excess",
      "interpretation-dependency"
    ],
    [
      "atlas2012-boson-mass-atlas2012-higgs-compatibility",
      "atlas2012-boson-mass",
      "atlas2012-higgs-compatibility",
      "M-phys-atlas2012-higgs-compatibility",
      "interpretation-dependency"
    ],
    [
      "atlas2012-combined-excess-atlas2012-higgs-compatibility",
      "atlas2012-combined-excess",
      "atlas2012-higgs-compatibility",
      "M-phys-atlas2012-higgs-compatibility",
      "interpretation-dependency"
    ],
    [
      "atlas2012-diphoton-candidates-atlas2012-higgs-compatibility",
      "atlas2012-diphoton-candidates",
      "atlas2012-higgs-compatibility",
      "M-phys-atlas2012-higgs-compatibility",
      "interpretation-dependency"
    ],
    [
      "atlas2012-inference-context-atlas2012-higgs-compatibility",
      "atlas2012-inference-context",
      "atlas2012-higgs-compatibility",
      "M-phys-atlas2012-higgs-compatibility",
      "interpretation-dependency"
    ],
    [
      "higgs-abelian-linearization-electroweak-arithmetic",
      "higgs-abelian-linearization",
      "electroweak-arithmetic",
      "M-phys-electroweak-arithmetic",
      "interpretation-dependency"
    ],
    [
      "weinberg-electroweak-background-electroweak-arithmetic",
      "weinberg-electroweak-background",
      "electroweak-arithmetic",
      "M-phys-electroweak-arithmetic",
      "interpretation-dependency"
    ],
    [
      "weinberg-gauge-mass-matrix-electroweak-arithmetic",
      "weinberg-gauge-mass-matrix",
      "electroweak-arithmetic",
      "M-phys-electroweak-arithmetic",
      "interpretation-dependency"
    ],
    [
      "weinberg-electron-yukawa-electroweak-arithmetic",
      "weinberg-electron-yukawa",
      "electroweak-arithmetic",
      "M-phys-electroweak-arithmetic",
      "interpretation-dependency"
    ],
    [
      "electroweak-replay-context-electroweak-arithmetic",
      "electroweak-replay-context",
      "electroweak-arithmetic",
      "M-phys-electroweak-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "atlas2012-acquisition",
    "atlas2012-inference",
    "electroweak-replay"
  ],
  "comparisonIds": [
    "atlas2012-higgs-interpretation",
    "electroweak-replay"
  ],
  "inferenceSources": [
    [
      "M-phys-electroweak-replay-context",
      [
        "higgs1964-gauge-masses",
        "weinberg1967-leptons",
        "electroweak-verifier"
      ]
    ],
    [
      "C-phys-electroweak-arithmetic",
      [
        "higgs1964-gauge-masses",
        "weinberg1967-leptons",
        "electroweak-verifier"
      ]
    ],
    [
      "M-phys-electroweak-arithmetic",
      [
        "higgs1964-gauge-masses",
        "weinberg1967-leptons",
        "electroweak-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "electroweak-replay",
      "electroweak-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "higgs1964-gauge-masses",
      "kind": "research-publication",
      "title": "Broken Symmetries and the Masses of Gauge Bosons",
      "authors": [
        "Peter W. Higgs"
      ],
      "year": 1964,
      "doi": "10.1103/PhysRevLett.13.508",
      "url": "https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.13.508",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-theoretical-passages",
        "locators": [
          "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation"
        ],
        "limit": "The two-page primary article was read; pages 508-509, Equations 1-4 and footnote 4 were visually checked. Only the declared U(1) example and its limits are admitted. The speculative historical SU(3) application and the adjacent article on page 509 are excluded."
      }
    },
    {
      "id": "weinberg1967-leptons",
      "kind": "research-publication",
      "title": "A Model of Leptons",
      "authors": [
        "Steven Weinberg"
      ],
      "year": 1967,
      "doi": "10.1103/PhysRevLett.19.1264",
      "url": "https://www2.physik.lmu.de/lehre/vorlesungen/wise_21_22/Neutrino-Mass-and-Grand-Unification/Material/a-model-of-leptons.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-theoretical-passages",
        "locators": [
          "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension"
        ],
        "limit": "The primary publisher scan on pages 1264-1266 was read and visually checked, excluding adjacent articles. The admission retains the electron-type model, original background and neutral-field signs; its numerical weak-coupling estimate, historical mass bounds, scattering predictions and unproved quantum extension are not admitted. Publisher metadata verifies author, date and DOI."
      }
    },
    {
      "id": "atlas2012-higgs-observation",
      "kind": "research-publication",
      "title": "Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC",
      "authors": [
        "ATLAS Collaboration"
      ],
      "year": 2012,
      "doi": "10.1016/j.physletb.2012.08.020",
      "url": "https://arxiv.org/abs/1207.7214v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-version-passages",
        "locators": [
          "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections",
          "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
          "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
          "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility"
        ],
        "limit": "Author version 1207.7214v2 has 38 PDF pages including cover and author list. Printed pages 1-20 (PDF 2-21) were read; printed pages 6-7,10,15,17,19-20 were visually checked for Figures 1-4,6,9-12, Tables 3,5-7 and the mass/conclusion text. Metadata and collective authorship were checked; no full author-roster, references or upstream analysis review is claimed. Earlier imported channel likelihoods, detector/control data, templates, nuisance covariance and significance calibration remain unreproduced."
      }
    },
    {
      "id": "electroweak-verifier",
      "kind": "executable-check",
      "title": "Synthetic historical scalar and electroweak mass algebra",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-electroweak.py",
      "sha256": "f61382fc94fe3d54fcbd9dfd0f958dc14b80c3f9a071f9d734c3f66c67905b9c",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation"
        ],
        "limit": "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-higgs-abelian-linearization",
      "kind": "review-finding",
      "statement": "For the Higgs1964 U(1) model with real fields and rho=phi1^2+phi2^2, choose (phi1,phi2)=(0,phi0), V'(phi0^2)=0 and V''(phi0^2)>0. The linearized radial and vector squared masses are 4*phi0^2*V''(phi0^2) and e^2*phi0^2. The shifted vector in Equation 3 contains the scalar-gradient term.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "D-phys-weinberg-electroweak-background",
      "kind": "review-finding",
      "statement": "Weinberg1967 specifies an electron-type chiral doublet/singlet, SU(2) and hypercharge gauge fields and a scalar doublet with kinetic term -1/2*|D_mu phi|^2. In its own convention choose <phi>=lambda_W*(1,0) real, and eliminate the stated scalar phase/charged fields by a gauge transformation before reading the quadratic mass terms.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "The historical model specifies electron-type left-handed doublet and right-handed singlet fields before symmetry breaking. It does not generate chirality, give neutrinos a mass, derive all quark/fermion masses, or prove all-order renormalizability; the paper leaves that last question open.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters."
      ]
    },
    {
      "id": "D-phys-weinberg-gauge-mass-matrix",
      "kind": "review-finding",
      "statement": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "The historical model specifies electron-type left-handed doublet and right-handed singlet fields before symmetry breaking. It does not generate chirality, give neutrinos a mass, derive all quark/fermion masses, or prove all-order renormalizability; the paper leaves that last question open."
      ]
    },
    {
      "id": "D-phys-weinberg-electron-yukawa",
      "kind": "review-finding",
      "statement": "The separately specified real electron coupling G_e in Weinberg1967 multiplies the scalar-lepton term. Replacing the scalar by its chosen background gives M_e=lambda_W*G_e. Changing G_e changes this mass without fixing the gauge couplings or predicting the numerical mass hierarchy.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "The historical model specifies electron-type left-handed doublet and right-handed singlet fields before symmetry breaking. It does not generate chirality, give neutrinos a mass, derive all quark/fermion masses, or prove all-order renormalizability; the paper leaves that last question open."
      ]
    },
    {
      "id": "M-phys-atlas2012-acquisition-context",
      "kind": "method",
      "statement": "Use the ATLAS pp data at 7 TeV in 2011 and 8 TeV in April-June 2012, with channel luminosities 4.6-4.8 and 5.8-5.9 fb^-1. Apply channel-specific lepton/photon triggers, object reconstruction, isolation, jet and missing-momentum selections.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "M-phys-atlas2012-response-context",
      "kind": "method",
      "statement": "Use simulated signal acceptance and mass response with data calibration/control corrections; constrain reducible and WW/top backgrounds through the stated control regions and diphoton backgrounds through category-specific mass fits. Retain control-transfer and shared calibration dependence.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The four-lepton invariant mass follows particle selection and a Z-mass constraint on the leading pair in this low-mass region. Table 3 gives candidates within 120-130 GeV, not identified Higgs counts. Figure 1 is a relaxed-background selection; Figures 2-3 and the fitted result reuse the selected sample.",
        "The 23788/35251 counts cover 100-160 GeV before signal/background separation. Ten categories per energy have different response and purity. Figure 4 weighted panels use ln(1+S/B) from the model and fitted background and show the same events, not new measurements; the actual search uses the category likelihoods.",
        "The 8 TeV analysis uses only e-mu/mu-e final states and missing transverse momentum. Table 5 counts impose an additional 0.75*mH<mT<mH window at mH=125 GeV. The likelihood instead uses five mT bins for 0 jets, three for 1 jet and an mT-integrated 2-jet contribution without that final window; Figure 6 and Table 5 cannot be substituted for one another. Missing neutrinos prevent a fully reconstructed invariant-mass peak."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "C-phys-atlas2012-four-lepton-candidates",
      "kind": "review-finding",
      "statement": "The reanalysed 7 TeV and new 8 TeV four-lepton selections give the Figure 2 invariant-mass spectrum. In the Table 3 window 120-130 GeV, the reported observed counts are 6 four-muon, 5 mixed-electron/muon and 2 four-electron candidates; modeled signal and backgrounds are separate.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four-lepton invariant mass follows particle selection and a Z-mass constraint on the leading pair in this low-mass region. Table 3 gives candidates within 120-130 GeV, not identified Higgs counts. Figure 1 is a relaxed-background selection; Figures 2-3 and the fitted result reuse the selected sample.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "M-phys-atlas2012-four-lepton-candidates",
      "kind": "method",
      "statement": "Retain selected lepton quadruplets, mass constraints and background estimates as distinct inputs; the small-window candidates are not all signal events.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four-lepton invariant mass follows particle selection and a Z-mass constraint on the leading pair in this low-mass region. Table 3 gives candidates within 120-130 GeV, not identified Higgs counts. Figure 1 is a relaxed-background selection; Figures 2-3 and the fitted result reuse the selected sample.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "C-phys-atlas2012-diphoton-candidates",
      "kind": "review-finding",
      "statement": "The selected diphoton samples contain 23788 candidates at 7 TeV and 35251 at 8 TeV in 100-160 GeV, divided into ten categories per energy. Figure 4 shows inclusive and model-weighted views with fitted background residuals of these same samples.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 23788/35251 counts cover 100-160 GeV before signal/background separation. Ten categories per energy have different response and purity. Figure 4 weighted panels use ln(1+S/B) from the model and fitted background and show the same events, not new measurements; the actual search uses the category likelihoods.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "M-phys-atlas2012-diphoton-candidates",
      "kind": "method",
      "statement": "Keep candidate counts, category likelihood inputs and the fitted/model-weighted display distinct; reuse of events does not provide independent confirmations.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 23788/35251 counts cover 100-160 GeV before signal/background separation. Ten categories per energy have different response and purity. Figure 4 weighted panels use ln(1+S/B) from the model and fitted background and show the same events, not new measurements; the actual search uses the category likelihoods.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "C-phys-atlas2012-ww-candidates",
      "kind": "review-finding",
      "statement": "The 8 TeV opposite-flavor dilepton selection supplies the Figure 6 transverse-mass distribution. Table 5 separately reports 185,38,0 observed events in the 0-,1-,2-jet categories after its extra mass window; the search likelihood uses a different mT selection.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 8 TeV analysis uses only e-mu/mu-e final states and missing transverse momentum. Table 5 counts impose an additional 0.75*mH<mT<mH window at mH=125 GeV. The likelihood instead uses five mT bins for 0 jets, three for 1 jet and an mT-integrated 2-jet contribution without that final window; Figure 6 and Table 5 cannot be substituted for one another. Missing neutrinos prevent a fully reconstructed invariant-mass peak.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "M-phys-atlas2012-ww-candidates",
      "kind": "method",
      "statement": "Separate the cut-based Table 5 illustration from the binned transverse-mass search and preserve its opposite-flavor and missing-neutrino conditions.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 8 TeV analysis uses only e-mu/mu-e final states and missing transverse momentum. Table 5 counts impose an additional 0.75*mH<mT<mH window at mH=125 GeV. The likelihood instead uses five mT bins for 0 jets, three for 1 jet and an mT-integrated 2-jet contribution without that final window; Figure 6 and Table 5 cannot be substituted for one another. Missing neutrinos prevent a fully reconstructed invariant-mass peak.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "M-phys-atlas2012-inference-context",
      "kind": "method",
      "statement": "Profile the stated signal/background likelihood with correlated nuisance parameters. Diphotons use unbinned category likelihoods; WW uses transverse-mass bins for 0/1 jet and an integrated 2-jet contribution. The full Table 6 combination also imports earlier 7 TeV channels, while the mass fit selects the four-lepton and diphoton channels only.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Table 7 gives 6.0 local standard deviations before the additional photon/electron energy-scale and resolution treatment described in Section 9.2 reduces it to 5.9. The reported global 5.1 uses the 110-600 GeV search range. These are likelihood/background-tail results, not posterior Higgs probabilities, and no local verifier reproduces them.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "C-phys-atlas2012-boson-mass",
      "kind": "review-finding",
      "statement": "Using the four-lepton and diphoton channels with independently varying signal strengths, ATLAS reports a mass of 126.0 +/-0.4 statistical +/-0.4 systematic GeV for the new particle. This is the original 2012 fit result.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "M-phys-atlas2012-boson-mass",
      "kind": "method",
      "statement": "Infer mass from the two high-resolution channels under the stated response and nuisance model; do not use the all-channel strength fit as an independent mass measurement.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "C-phys-atlas2012-combined-excess",
      "kind": "review-finding",
      "statement": "The full published combination reports local significance 5.9 standard deviations (p0=1.7e-9), and global significance about 5.1 (p0=1.7e-7) over 110-600 GeV. At mH=126 GeV the fitted common signal strength relative to the Standard Model is 1.4 +/-0.3.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "Table 7 gives 6.0 local standard deviations before the additional photon/electron energy-scale and resolution treatment described in Section 9.2 reduces it to 5.9. The reported global 5.1 uses the 110-600 GeV search range. These are likelihood/background-tail results, not posterior Higgs probabilities, and no local verifier reproduces them.",
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "M-phys-atlas2012-combined-excess",
      "kind": "method",
      "statement": "Combine the declared updated and imported channel likelihoods with nuisance dependence; retain the photon/electron resolution treatment and local/global search-range distinction.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "Table 7 gives 6.0 local standard deviations before the additional photon/electron energy-scale and resolution treatment described in Section 9.2 reduces it to 5.9. The reported global 5.1 uses the 110-600 GeV search range. These are likelihood/background-tail results, not posterior Higgs probabilities, and no local verifier reproduces them.",
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "C-phys-atlas2012-higgs-compatibility",
      "kind": "review-finding",
      "statement": "The reported channels support a new neutral boson compatible with the Standard Model Higgs production/decay hypothesis. Diphoton observation disfavors spin one; the paper explicitly requires more information to determine the particle nature in detail.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result.",
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "M-phys-atlas2012-higgs-compatibility",
      "kind": "method",
      "statement": "Interpret the same original channel evidence within the declared Standard Model comparison; do not infer unique particle identity, every coupling or a vacuum image.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result.",
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "M-phys-electroweak-replay-context",
      "kind": "method",
      "statement": "Choose three positive rational U(1) toy potentials V(rho)=kappa*(rho-a^2)^2/4, separately choose three Weinberg background/gauge/Yukawa tuples, and check the declared Hessian and quadratic identities exactly. None of these parameter choices is an experimental input.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "electroweak-verifier",
          "locator": "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters."
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "C-phys-electroweak-arithmetic",
      "kind": "review-finding",
      "statement": "All three synthetic U(1) cases have the stated radial curvature and vector mass term. All three Weinberg matrices have zero determinant, the declared photon null direction and positive massive eigenvalue; the charged/neutral and electric-charge identities hold, while doubling the free electron coupling doubles its mass.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "electroweak-verifier",
          "locator": "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation",
          "role": "supports",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [
        "electroweak-mass-algebra"
      ],
      "limitations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "M-phys-electroweak-arithmetic",
      "kind": "method",
      "statement": "Evaluate only the explicitly synthetic model tuples and polynomial/matrix identities; no experimental result receives this executable check.",
      "scope": "Restricted historical model construction and ATLAS2012 reported search stages; synthetic algebra is distinct from empirical inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        },
        {
          "sourceId": "electroweak-verifier",
          "locator": "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation",
          "role": "method",
          "note": "Supports the specified model convention or original analysis stage only; finite algebra is separate from the measured result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:higgs-abelian-linearization",
      "name": "Linearized U(1) scalar and vector example",
      "kind": "definition",
      "description": "For the Higgs1964 U(1) model with real fields and rho=phi1^2+phi2^2, choose (phi1,phi2)=(0,phi0), V'(phi0^2)=0 and V''(phi0^2)>0. The linearized radial and vector squared masses are 4*phi0^2*V''(phi0^2) and e^2*phi0^2. The shifted vector in Equation 3 contains the scalar-gradient term.",
      "claimIds": [
        "D-phys-higgs-abelian-linearization"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation"
        }
      ],
      "openObligations": [
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "phys:weinberg-electroweak-background",
      "name": "Historical electroweak lepton-model background",
      "kind": "definition",
      "description": "Weinberg1967 specifies an electron-type chiral doublet/singlet, SU(2) and hypercharge gauge fields and a scalar doublet with kinetic term -1/2*|D_mu phi|^2. In its own convention choose <phi>=lambda_W*(1,0) real, and eliminate the stated scalar phase/charged fields by a gauge transformation before reading the quadratic mass terms.",
      "claimIds": [
        "D-phys-weinberg-electroweak-background"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension"
        }
      ],
      "openObligations": [
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "phys:weinberg-gauge-mass-matrix",
      "name": "Historical charged and neutral gauge masses",
      "kind": "definition",
      "description": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "claimIds": [
        "D-phys-weinberg-gauge-mass-matrix"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        }
      ],
      "openObligations": [
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "phys:weinberg-electron-yukawa",
      "name": "Independent electron Yukawa mass relation",
      "kind": "definition",
      "description": "The separately specified real electron coupling G_e in Weinberg1967 multiplies the scalar-lepton term. Replacing the scalar by its chosen background gives M_e=lambda_W*G_e. Changing G_e changes this mass without fixing the gauge couplings or predicting the numerical mass hierarchy.",
      "claimIds": [
        "D-phys-weinberg-electron-yukawa"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension"
        }
      ],
      "openObligations": [
        "Neither the model algebra nor collider compatibility supplies a universal carrier minimum, a mandatory source-card ordering, all-mass origin, cosmic transition history or a proof of particle/composite stability."
      ]
    },
    {
      "id": "phys:atlas2012-acquisition-context",
      "name": "ATLAS 2011-2012 search acquisition",
      "kind": "context",
      "description": "Use the ATLAS pp data at 7 TeV in 2011 and 8 TeV in April-June 2012, with channel luminosities 4.6-4.8 and 5.8-5.9 fb^-1. Apply channel-specific lepton/photon triggers, object reconstruction, isolation, jet and missing-momentum selections.",
      "claimIds": [
        "M-phys-atlas2012-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-response-context",
      "name": "ATLAS response and background conditions",
      "kind": "context",
      "description": "Use simulated signal acceptance and mass response with data calibration/control corrections; constrain reducible and WW/top backgrounds through the stated control regions and diphoton backgrounds through category-specific mass fits. Retain control-transfer and shared calibration dependence.",
      "claimIds": [
        "M-phys-atlas2012-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-four-lepton-candidates",
      "name": "ATLAS selected four-lepton candidates",
      "kind": "scoped-process",
      "description": "The reanalysed 7 TeV and new 8 TeV four-lepton selections give the Figure 2 invariant-mass spectrum. In the Table 3 window 120-130 GeV, the reported observed counts are 6 four-muon, 5 mixed-electron/muon and 2 four-electron candidates; modeled signal and backgrounds are separate.",
      "claimIds": [
        "C-phys-atlas2012-four-lepton-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-diphoton-candidates",
      "name": "ATLAS selected diphoton candidates",
      "kind": "scoped-process",
      "description": "The selected diphoton samples contain 23788 candidates at 7 TeV and 35251 at 8 TeV in 100-160 GeV, divided into ten categories per energy. Figure 4 shows inclusive and model-weighted views with fitted background residuals of these same samples.",
      "claimIds": [
        "C-phys-atlas2012-diphoton-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-ww-candidates",
      "name": "ATLAS selected opposite-flavor transverse mass",
      "kind": "scoped-process",
      "description": "The 8 TeV opposite-flavor dilepton selection supplies the Figure 6 transverse-mass distribution. Table 5 separately reports 185,38,0 observed events in the 0-,1-,2-jet categories after its extra mass window; the search likelihood uses a different mT selection.",
      "claimIds": [
        "C-phys-atlas2012-ww-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-inference-context",
      "name": "ATLAS original likelihood and combination",
      "kind": "context",
      "description": "Profile the stated signal/background likelihood with correlated nuisance parameters. Diphotons use unbinned category likelihoods; WW uses transverse-mass bins for 0/1 jet and an integrated 2-jet contribution. The full Table 6 combination also imports earlier 7 TeV channels, while the mass fit selects the four-lepton and diphoton channels only.",
      "claimIds": [
        "M-phys-atlas2012-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-boson-mass",
      "name": "ATLAS historical neutral-boson mass fit",
      "kind": "scoped-process",
      "description": "Using the four-lepton and diphoton channels with independently varying signal strengths, ATLAS reports a mass of 126.0 +/-0.4 statistical +/-0.4 systematic GeV for the new particle. This is the original 2012 fit result.",
      "claimIds": [
        "C-phys-atlas2012-boson-mass"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-combined-excess",
      "name": "ATLAS historical combined excess and strength",
      "kind": "scoped-process",
      "description": "The full published combination reports local significance 5.9 standard deviations (p0=1.7e-9), and global significance about 5.1 (p0=1.7e-7) over 110-600 GeV. At mH=126 GeV the fitted common signal strength relative to the Standard Model is 1.4 +/-0.3.",
      "claimIds": [
        "C-phys-atlas2012-combined-excess"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:atlas2012-higgs-compatibility",
      "name": "ATLAS 2012 limited Higgs compatibility",
      "kind": "scoped-process",
      "description": "The reported channels support a new neutral boson compatible with the Standard Model Higgs production/decay hypothesis. Diphoton observation disfavors spin one; the paper explicitly requires more information to determine the particle nature in detail.",
      "claimIds": [
        "C-phys-atlas2012-higgs-compatibility"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths"
        },
        {
          "sourceId": "atlas2012-higgs-observation",
          "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength"
        }
      ],
      "openObligations": [
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ]
    },
    {
      "id": "phys:electroweak-replay-context",
      "name": "Synthetic scalar and gauge mass calculation",
      "kind": "context",
      "description": "Choose three positive rational U(1) toy potentials V(rho)=kappa*(rho-a^2)^2/4, separately choose three Weinberg background/gauge/Yukawa tuples, and check the declared Hessian and quadratic identities exactly. None of these parameter choices is an experimental input.",
      "claimIds": [
        "M-phys-electroweak-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass"
        },
        {
          "sourceId": "electroweak-verifier",
          "locator": "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation"
        }
      ],
      "openObligations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed."
      ]
    },
    {
      "id": "phys:electroweak-arithmetic",
      "name": "Synthetic mass matrix and free-coupling identities",
      "kind": "scoped-process",
      "description": "All three synthetic U(1) cases have the stated radial curvature and vector mass term. All three Weinberg matrices have zero determinant, the declared photon null direction and positive massive eigenvalue; the charged/neutral and electric-charge identities hold, while doubling the free electron coupling doubles its mass.",
      "claimIds": [
        "C-phys-electroweak-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "higgs1964-gauge-masses",
          "locator": "Publisher pages 508-509, Equations 1-4 and footnote 4: U(1) scalar/vector example, linearized modes and explicit classical-theory limitation"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass"
        },
        {
          "sourceId": "electroweak-verifier",
          "locator": "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation"
        }
      ],
      "openObligations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-weinberg-electroweak-background",
      "source": "phys:lepton-fields",
      "target": "phys:weinberg-electroweak-background",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The electron-type doublet/singlet assignments are specified representation inputs of this restricted model; the background does not create chirality or a neutrino-mass extension.",
      "claimIds": [
        "D-phys-lepton",
        "D-phys-weinberg-electroweak-background"
      ]
    },
    {
      "id": "physics:weinberg-electroweak-background-weinberg-gauge-mass-matrix",
      "source": "phys:weinberg-electroweak-background",
      "target": "phys:weinberg-gauge-mass-matrix",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen doublet background and source normalization determine the quadratic gauge terms, without fixing their free parameters.",
      "claimIds": [
        "D-phys-weinberg-electroweak-background",
        "D-phys-weinberg-gauge-mass-matrix"
      ]
    },
    {
      "id": "physics:weinberg-electroweak-background-weinberg-electron-yukawa",
      "source": "phys:weinberg-electroweak-background",
      "target": "phys:weinberg-electron-yukawa",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Replacing the scalar by this same background gives the electron mass term for a separately specified Yukawa coupling.",
      "claimIds": [
        "D-phys-weinberg-electroweak-background",
        "D-phys-weinberg-electron-yukawa"
      ]
    },
    {
      "id": "physics:atlas2012-acquisition-context-atlas2012-four-lepton-candidates",
      "source": "phys:atlas2012-acquisition-context",
      "target": "phys:atlas2012-four-lepton-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated exposure and channel selections delimit this reported candidate sample.",
      "claimIds": [
        "M-phys-atlas2012-four-lepton-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-response-context-atlas2012-four-lepton-candidates",
      "source": "phys:atlas2012-response-context",
      "target": "phys:atlas2012-four-lepton-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibration and reconstruction conditions delimit these processed observables; background/model overlays remain distinct from selected data.",
      "claimIds": [
        "M-phys-atlas2012-four-lepton-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-acquisition-context-atlas2012-diphoton-candidates",
      "source": "phys:atlas2012-acquisition-context",
      "target": "phys:atlas2012-diphoton-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated exposure and channel selections delimit this reported candidate sample.",
      "claimIds": [
        "M-phys-atlas2012-diphoton-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-response-context-atlas2012-diphoton-candidates",
      "source": "phys:atlas2012-response-context",
      "target": "phys:atlas2012-diphoton-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibration and reconstruction conditions delimit these processed observables; background/model overlays remain distinct from selected data.",
      "claimIds": [
        "M-phys-atlas2012-diphoton-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-acquisition-context-atlas2012-ww-candidates",
      "source": "phys:atlas2012-acquisition-context",
      "target": "phys:atlas2012-ww-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated exposure and channel selections delimit this reported candidate sample.",
      "claimIds": [
        "M-phys-atlas2012-ww-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-response-context-atlas2012-ww-candidates",
      "source": "phys:atlas2012-response-context",
      "target": "phys:atlas2012-ww-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibration and reconstruction conditions delimit these processed observables; background/model overlays remain distinct from selected data.",
      "claimIds": [
        "M-phys-atlas2012-ww-candidates"
      ],
      "contextIds": [
        "atlas2012-acquisition"
      ]
    },
    {
      "id": "physics:atlas2012-four-lepton-candidates-atlas2012-boson-mass",
      "source": "phys:atlas2012-four-lepton-candidates",
      "target": "phys:atlas2012-boson-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This channel supplies selected reconstructed events to the original fit, not a separate replication of its result.",
      "claimIds": [
        "M-phys-atlas2012-boson-mass"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-diphoton-candidates-atlas2012-boson-mass",
      "source": "phys:atlas2012-diphoton-candidates",
      "target": "phys:atlas2012-boson-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This channel supplies selected reconstructed events to the original fit, not a separate replication of its result.",
      "claimIds": [
        "M-phys-atlas2012-boson-mass"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-response-context-atlas2012-boson-mass",
      "source": "phys:atlas2012-response-context",
      "target": "phys:atlas2012-boson-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Shared calibration, resolution and background conditions enter this inference and its uncertainty.",
      "claimIds": [
        "M-phys-atlas2012-boson-mass"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-inference-context-atlas2012-boson-mass",
      "source": "phys:atlas2012-inference-context",
      "target": "phys:atlas2012-boson-mass",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The profile-likelihood specification selects the relevant channels and preserves correlated nuisance and imported-input conditions.",
      "claimIds": [
        "M-phys-atlas2012-boson-mass"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-four-lepton-candidates-atlas2012-combined-excess",
      "source": "phys:atlas2012-four-lepton-candidates",
      "target": "phys:atlas2012-combined-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This channel supplies selected reconstructed events to the original fit, not a separate replication of its result.",
      "claimIds": [
        "M-phys-atlas2012-combined-excess"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-diphoton-candidates-atlas2012-combined-excess",
      "source": "phys:atlas2012-diphoton-candidates",
      "target": "phys:atlas2012-combined-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This channel supplies selected reconstructed events to the original fit, not a separate replication of its result.",
      "claimIds": [
        "M-phys-atlas2012-combined-excess"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-response-context-atlas2012-combined-excess",
      "source": "phys:atlas2012-response-context",
      "target": "phys:atlas2012-combined-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Shared calibration, resolution and background conditions enter this inference and its uncertainty.",
      "claimIds": [
        "M-phys-atlas2012-combined-excess"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-inference-context-atlas2012-combined-excess",
      "source": "phys:atlas2012-inference-context",
      "target": "phys:atlas2012-combined-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The profile-likelihood specification selects the relevant channels and preserves correlated nuisance and imported-input conditions.",
      "claimIds": [
        "M-phys-atlas2012-combined-excess"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-ww-candidates-atlas2012-combined-excess",
      "source": "phys:atlas2012-ww-candidates",
      "target": "phys:atlas2012-combined-excess",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The opposite-flavor WW likelihood contributes to the combined search; its cut-based table is only a display and is not a direct input to the two-channel mass fit.",
      "claimIds": [
        "M-phys-atlas2012-combined-excess"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-boson-mass-atlas2012-higgs-compatibility",
      "source": "phys:atlas2012-boson-mass",
      "target": "phys:atlas2012-higgs-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This same-analysis evidence and hypothesis scope condition the reported neutral-boson/Higgs compatibility; the interpretation adds no new acquisition.",
      "claimIds": [
        "M-phys-atlas2012-higgs-compatibility"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-combined-excess-atlas2012-higgs-compatibility",
      "source": "phys:atlas2012-combined-excess",
      "target": "phys:atlas2012-higgs-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This same-analysis evidence and hypothesis scope condition the reported neutral-boson/Higgs compatibility; the interpretation adds no new acquisition.",
      "claimIds": [
        "M-phys-atlas2012-higgs-compatibility"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-diphoton-candidates-atlas2012-higgs-compatibility",
      "source": "phys:atlas2012-diphoton-candidates",
      "target": "phys:atlas2012-higgs-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This same-analysis evidence and hypothesis scope condition the reported neutral-boson/Higgs compatibility; the interpretation adds no new acquisition.",
      "claimIds": [
        "M-phys-atlas2012-higgs-compatibility"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:atlas2012-inference-context-atlas2012-higgs-compatibility",
      "source": "phys:atlas2012-inference-context",
      "target": "phys:atlas2012-higgs-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This same-analysis evidence and hypothesis scope condition the reported neutral-boson/Higgs compatibility; the interpretation adds no new acquisition.",
      "claimIds": [
        "M-phys-atlas2012-higgs-compatibility"
      ],
      "contextIds": [
        "atlas2012-inference"
      ]
    },
    {
      "id": "physics:higgs-abelian-linearization-electroweak-arithmetic",
      "source": "phys:higgs-abelian-linearization",
      "target": "phys:electroweak-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model convention or synthetic procedure supplies an input to finite algebra; it supplies no measured mass or detector likelihood.",
      "claimIds": [
        "M-phys-electroweak-arithmetic"
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "physics:weinberg-electroweak-background-electroweak-arithmetic",
      "source": "phys:weinberg-electroweak-background",
      "target": "phys:electroweak-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model convention or synthetic procedure supplies an input to finite algebra; it supplies no measured mass or detector likelihood.",
      "claimIds": [
        "M-phys-electroweak-arithmetic"
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "physics:weinberg-gauge-mass-matrix-electroweak-arithmetic",
      "source": "phys:weinberg-gauge-mass-matrix",
      "target": "phys:electroweak-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model convention or synthetic procedure supplies an input to finite algebra; it supplies no measured mass or detector likelihood.",
      "claimIds": [
        "M-phys-electroweak-arithmetic"
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "physics:weinberg-electron-yukawa-electroweak-arithmetic",
      "source": "phys:weinberg-electron-yukawa",
      "target": "phys:electroweak-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model convention or synthetic procedure supplies an input to finite algebra; it supplies no measured mass or detector likelihood.",
      "claimIds": [
        "M-phys-electroweak-arithmetic"
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    },
    {
      "id": "physics:electroweak-replay-context-electroweak-arithmetic",
      "source": "phys:electroweak-replay-context",
      "target": "phys:electroweak-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model convention or synthetic procedure supplies an input to finite algebra; it supplies no measured mass or detector likelihood.",
      "claimIds": [
        "M-phys-electroweak-arithmetic"
      ],
      "contextIds": [
        "electroweak-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "atlas2012-acquisition",
      "sourceId": "atlas2012-higgs-observation",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physletb.2012.08.020",
      "journal": "Physics Letters B",
      "volume": "716",
      "issue": "1",
      "pages": "1-29",
      "system": "ATLAS 2011 and April-June 2012 pp search samples",
      "preparation": "Use the ATLAS pp data at 7 TeV in 2011 and 8 TeV in April-June 2012, with channel luminosities 4.6-4.8 and 5.8-5.9 fb^-1. Apply channel-specific lepton/photon triggers, object reconstruction, isolation, jet and missing-momentum selections.",
      "observable": "Selected reconstructed lepton/photon and transverse-mass samples, including their explicit plotting/selection boundaries.",
      "finding": "The reanalysed 7 TeV and new 8 TeV four-lepton selections give the Figure 2 invariant-mass spectrum. In the Table 3 window 120-130 GeV, the reported observed counts are 6 four-muon, 5 mixed-electron/muon and 2 four-electron candidates; modeled signal and backgrounds are separate.",
      "limitations": [
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The four-lepton invariant mass follows particle selection and a Z-mass constraint on the leading pair in this low-mass region. Table 3 gives candidates within 120-130 GeV, not identified Higgs counts. Figure 1 is a relaxed-background selection; Figures 2-3 and the fitted result reuse the selected sample.",
        "The 23788/35251 counts cover 100-160 GeV before signal/background separation. Ten categories per energy have different response and purity. Figure 4 weighted panels use ln(1+S/B) from the model and fitted background and show the same events, not new measurements; the actual search uses the category likelihoods.",
        "The 8 TeV analysis uses only e-mu/mu-e final states and missing transverse momentum. Table 5 counts impose an additional 0.75*mH<mT<mH window at mH=125 GeV. The likelihood instead uses five mT bins for 0 jets, three for 1 jet and an mT-integrated 2-jet contribution without that final window; Figure 6 and Table 5 cannot be substituted for one another. Missing neutrinos prevent a fully reconstructed invariant-mass peak."
      ],
      "readExtent": "selected-primary-author-version-passages",
      "reviewedLocators": [
        "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections",
        "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
        "Author version 1207.7214v2, printed pages 7-11, Section 5, Table 4 and Figure 4: photon calibration, categories, mass spectra, fit and weighted display",
        "Author version 1207.7214v2, printed pages 11-15, Section 6, Table 5 and Figures 5-6: opposite-flavor selection, control samples, transverse mass and different table/likelihood selections"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1207.7214v2",
      "correctionCheck": "Final author version v2 and journal identity checked. This is a historical result; later overlapping analyses, all upstream corrections and an exhaustive correction search are not claimed."
    },
    {
      "id": "atlas2012-inference",
      "sourceId": "atlas2012-higgs-observation",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2012.08.020",
      "journal": "Physics Letters B",
      "volume": "716",
      "issue": "1",
      "pages": "1-29",
      "system": "ATLAS 2011 and April-June 2012 pp search samples",
      "preparation": "Profile the stated signal/background likelihood with correlated nuisance parameters. Diphotons use unbinned category likelihoods; WW uses transverse-mass bins for 0/1 jet and an integrated 2-jet contribution. The full Table 6 combination also imports earlier 7 TeV channels, while the mass fit selects the four-lepton and diphoton channels only.",
      "observable": "Original same-acquisition mass, signal-strength and background-tail inference under the published response/nuisance model.",
      "finding": "The full published combination reports local significance 5.9 standard deviations (p0=1.7e-9), and global significance about 5.1 (p0=1.7e-7) over 110-600 GeV. At mH=126 GeV the fitted common signal strength relative to the Standard Model is 1.4 +/-0.3.",
      "limitations": [
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Table 7 gives 6.0 local standard deviations before the additional photon/electron energy-scale and resolution treatment described in Section 9.2 reduces it to 5.9. The reported global 5.1 uses the 110-600 GeV search range. These are likelihood/background-tail results, not posterior Higgs probabilities, and no local verifier reproduces them.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ],
      "readExtent": "selected-primary-author-version-passages",
      "reviewedLocators": [
        "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
        "Author version 1207.7214v2, printed page 19, Section 9.3: two-channel mass fit with independently varying signal strengths",
        "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
        "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1207.7214v2",
      "correctionCheck": "Final author version v2 and journal identity checked. This is a historical result; later overlapping analyses, all upstream corrections and an exhaustive correction search are not claimed."
    },
    {
      "id": "electroweak-replay",
      "sourceId": "electroweak-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Declared synthetic model parameters",
      "preparation": "Choose three positive rational U(1) toy potentials V(rho)=kappa*(rho-a^2)^2/4, separately choose three Weinberg background/gauge/Yukawa tuples, and check the declared Hessian and quadratic identities exactly. None of these parameter choices is an experimental input.",
      "observable": "Exact synthetic scalar Hessians and historical gauge/Yukawa mass identities.",
      "finding": "All three synthetic U(1) cases have the stated radial curvature and vector mass term. All three Weinberg matrices have zero determinant, the declared photon null direction and positive massive eigenvalue; the charged/neutral and electric-charge identities hold, while doubling the free electron coupling doubles its mass.",
      "limitations": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): exact synthetic U(1) radial Hessian, historical neutral mass matrix, electric-charge identity and free-electron-coupling variation"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "A declared local calculation with no publication metadata."
    }
  ],
  "comparisons": [
    {
      "id": "atlas2012-higgs-interpretation",
      "candidate": "The published selected channels and fitted excess support a neutral boson compatible with the stated Higgs hypothesis.",
      "alternative": "The 2012 result alone determines every coupling, a unique full Standard Model scalar identity or a directly measured stable vacuum.",
      "discriminator": "Inspect selected candidates, response and imported likelihood inputs, separate two-channel mass and all-channel excess, and retain the source conclusion limits.",
      "result": "conditional-support",
      "limit": "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result.",
      "assumptions": [
        "The 2011 7 TeV and April-June 2012 8 TeV samples are distinct exposures. Reanalysed 2011 channels, their earlier publications and the combined result reuse data and are not independent replications. Luminosities are channel-dependent, and plotted categories are not additional experiments.",
        "Reconstruction and energy/momentum calibration use simulation and W, Z, J/psi and other control data. Background control regions and theoretical signal templates are required inputs. These controls are not independent Higgs discoveries; their raw data, transfer factors and full response are not reproduced.",
        "Table 6 includes imported 7 TeV WW, tau, associated bb and high-mass ZZ/WW analyses in addition to the updated four-lepton/diphoton and new 8 TeV channels. Only this article account of those imported likelihood inputs is reviewed; their earlier analysis papers are not independently replayed. Correlated nuisance parameters prevent treating displayed channel results as independent numerical replicas.",
        "The 126.0 +/-0.4 statistical +/-0.4 systematic GeV mass uses only the four-lepton and diphoton channels, allowing their signal strengths to vary independently. This fitted mass is distinct from the 126.5 GeV hypothesis maximizing the local excess and from the broader combined signal-strength fit.",
        "Table 7 gives 6.0 local standard deviations before the additional photon/electron energy-scale and resolution treatment described in Section 9.2 reduces it to 5.9. The reported global 5.1 uses the 110-600 GeV search range. These are likelihood/background-tail results, not posterior Higgs probabilities, and no local verifier reproduces them.",
        "The historical observation is compatible with the Standard Model Higgs hypothesis and disfavors spin one through the diphoton channel. It is not by itself a unique spin-parity, every-Yukawa, Higgs-potential, W/Z-width or vacuum-stability determination. Later data are not imported into this 2012 result."
      ],
      "sourceIds": [
        "atlas2012-higgs-observation"
      ],
      "claimIds": [
        "C-phys-atlas2012-boson-mass",
        "C-phys-atlas2012-combined-excess",
        "C-phys-atlas2012-higgs-compatibility"
      ]
    },
    {
      "id": "electroweak-replay",
      "candidate": "The declared synthetic model identities hold in their separate historical conventions.",
      "alternative": "Exact finite algebra proves all particle masses, full quantization or an experimental discovery likelihood.",
      "discriminator": "Retain synthetic inputs, positive historical cross term, electromagnetic null direction and an independently varied electron coupling.",
      "result": "conditional-support",
      "limit": "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
      "assumptions": [
        "The executable uses three explicitly synthetic U(1) cases and three synthetic Weinberg cases. It checks only the declared scalar Hessian, rank-one matrix, photon null direction, mass/charge identities and free-Yukawa scaling. No measured mass, background calibration, detector response, fit, significance or covariance is reconstructed.",
        "The Higgs1964 U(1) example is linearized about a specified classical background. Footnote 4 explicitly supplies no proof of the quantized theory. Its phi0, potential and historical SU(3) discussion are not identified with the electroweak doublet or its background parameter.",
        "Use Weinberg1967 conventions throughout: <phi>=lambda_W*(1,0), where lambda_W is the chosen real background, not a quartic coupling. No silent replacement by the modern (0,v/sqrt(2)) convention is made. The chosen nonzero component is a model/gauge convention, not by itself an observed gauge-invariant order parameter, measured spatial medium or proof of absolute vacuum stability.",
        "Gauge and electron Yukawa couplings are independent inputs. The equations relate mass parameters to those inputs; they do not explain the numerical mass hierarchy. Bare or leading-order model masses are not silently equated with fitted resonance masses or renormalized parameters.",
        "The historical model specifies electron-type left-handed doublet and right-handed singlet fields before symmetry breaking. It does not generate chirality, give neutrinos a mass, derive all quark/fermion masses, or prove all-order renormalizability; the paper leaves that last question open."
      ],
      "sourceIds": [
        "higgs1964-gauge-masses",
        "weinberg1967-leptons",
        "electroweak-verifier"
      ],
      "claimIds": [
        "C-phys-electroweak-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:higgs-abelian-linearization",
      "role": "definition",
      "denotes": "For the Higgs1964 U(1) model with real fields and rho=phi1^2+phi2^2, choose (phi1,phi2)=(0,phi0), V'(phi0^2)=0 and V''(phi0^2)>0. The linearized radial and vector squared masses are 4*phi0^2*V''(phi0^2) and e^2*phi0^2. The shifted vector in Equation 3 contains the scalar-gradient term.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-higgs-abelian-linearization"
      ]
    },
    {
      "nodeId": "phys:weinberg-electroweak-background",
      "role": "definition",
      "denotes": "Weinberg1967 specifies an electron-type chiral doublet/singlet, SU(2) and hypercharge gauge fields and a scalar doublet with kinetic term -1/2*|D_mu phi|^2. In its own convention choose <phi>=lambda_W*(1,0) real, and eliminate the stated scalar phase/charged fields by a gauge transformation before reading the quadratic mass terms.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-weinberg-electroweak-background"
      ]
    },
    {
      "nodeId": "phys:weinberg-gauge-mass-matrix",
      "role": "definition",
      "denotes": "In Weinberg1967 conventions the neutral squared-mass matrix in the (A3,B) basis is lambda_W^2/4 times [[g^2,g*gprime],[g*gprime,gprime^2]]. Its massive direction is (g,gprime), its massless photon direction is (-gprime,g), M_W=lambda_W*g/2, M_Z=lambda_W*sqrt(g^2+gprime^2)/2 and e=g*gprime/sqrt(g^2+gprime^2).",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-weinberg-gauge-mass-matrix"
      ]
    },
    {
      "nodeId": "phys:weinberg-electron-yukawa",
      "role": "definition",
      "denotes": "The separately specified real electron coupling G_e in Weinberg1967 multiplies the scalar-lepton term. Replacing the scalar by its chosen background gives M_e=lambda_W*G_e. Changing G_e changes this mass without fixing the gauge couplings or predicting the numerical mass hierarchy.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-weinberg-electron-yukawa"
      ]
    },
    {
      "nodeId": "phys:atlas2012-acquisition-context",
      "role": "experimental-context",
      "denotes": "Use the ATLAS pp data at 7 TeV in 2011 and 8 TeV in April-June 2012, with channel luminosities 4.6-4.8 and 5.8-5.9 fb^-1. Apply channel-specific lepton/photon triggers, object reconstruction, isolation, jet and missing-momentum selections.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-atlas2012-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:atlas2012-response-context",
      "role": "model-context",
      "denotes": "Use simulated signal acceptance and mass response with data calibration/control corrections; constrain reducible and WW/top backgrounds through the stated control regions and diphoton backgrounds through category-specific mass fits. Retain control-transfer and shared calibration dependence.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-atlas2012-response-context"
      ]
    },
    {
      "nodeId": "phys:atlas2012-four-lepton-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The reanalysed 7 TeV and new 8 TeV four-lepton selections give the Figure 2 invariant-mass spectrum. In the Table 3 window 120-130 GeV, the reported observed counts are 6 four-muon, 5 mixed-electron/muon and 2 four-electron candidates; modeled signal and backgrounds are separate.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-four-lepton-candidates"
      ]
    },
    {
      "nodeId": "phys:atlas2012-diphoton-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The selected diphoton samples contain 23788 candidates at 7 TeV and 35251 at 8 TeV in 100-160 GeV, divided into ten categories per energy. Figure 4 shows inclusive and model-weighted views with fitted background residuals of these same samples.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-diphoton-candidates"
      ]
    },
    {
      "nodeId": "phys:atlas2012-ww-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The 8 TeV opposite-flavor dilepton selection supplies the Figure 6 transverse-mass distribution. Table 5 separately reports 185,38,0 observed events in the 0-,1-,2-jet categories after its extra mass window; the search likelihood uses a different mT selection.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-ww-candidates"
      ]
    },
    {
      "nodeId": "phys:atlas2012-inference-context",
      "role": "model-context",
      "denotes": "Profile the stated signal/background likelihood with correlated nuisance parameters. Diphotons use unbinned category likelihoods; WW uses transverse-mass bins for 0/1 jet and an integrated 2-jet contribution. The full Table 6 combination also imports earlier 7 TeV channels, while the mass fit selects the four-lepton and diphoton channels only.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-atlas2012-inference-context"
      ]
    },
    {
      "nodeId": "phys:atlas2012-boson-mass",
      "role": "scoped-phenomenon",
      "denotes": "Using the four-lepton and diphoton channels with independently varying signal strengths, ATLAS reports a mass of 126.0 +/-0.4 statistical +/-0.4 systematic GeV for the new particle. This is the original 2012 fit result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-boson-mass"
      ]
    },
    {
      "nodeId": "phys:atlas2012-combined-excess",
      "role": "scoped-phenomenon",
      "denotes": "The full published combination reports local significance 5.9 standard deviations (p0=1.7e-9), and global significance about 5.1 (p0=1.7e-7) over 110-600 GeV. At mH=126 GeV the fitted common signal strength relative to the Standard Model is 1.4 +/-0.3.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-combined-excess"
      ]
    },
    {
      "nodeId": "phys:atlas2012-higgs-compatibility",
      "role": "scoped-phenomenon",
      "denotes": "The reported channels support a new neutral boson compatible with the Standard Model Higgs production/decay hypothesis. Diphoton observation disfavors spin one; the paper explicitly requires more information to determine the particle nature in detail.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atlas2012-higgs-compatibility"
      ]
    },
    {
      "nodeId": "phys:electroweak-replay-context",
      "role": "model-context",
      "denotes": "Choose three positive rational U(1) toy potentials V(rho)=kappa*(rho-a^2)^2/4, separately choose three Weinberg background/gauge/Yukawa tuples, and check the declared Hessian and quadratic identities exactly. None of these parameter choices is an experimental input.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-electroweak-replay-context"
      ]
    },
    {
      "nodeId": "phys:electroweak-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "All three synthetic U(1) cases have the stated radial curvature and vector mass term. All three Weinberg matrices have zero determinant, the declared photon null direction and positive massive eigenvalue; the charged/neutral and electric-charge identities hold, while doubling the free electron coupling doubles its mass.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-electroweak-arithmetic"
      ]
    }
  ]
};

/** Preserve historical model normalization and separate measured inference. */
export function validateElectroweakContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing electroweak ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Electroweak ${kind} changed ${id}.${key}: preserve model and observation scope`);
    }
  }
}
