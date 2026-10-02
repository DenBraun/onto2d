import assert from "node:assert/strict";

export const MESON_FAMILY_CHECKS = new Map([["meson-family-printed-arithmetic", "C-phys-meson-family-arithmetic"]]);
export const MESON_FAMILY_ANALYTICAL_SOURCES = new Map([["C-phys-meson-family-arithmetic", "meson-family-verifier"]]);

export const MESON_FAMILY_ADMISSION = {
  "definitions": [
    [
      "phys:light-meson-nonets",
      "D-phys-light-meson-nonets"
    ],
    [
      "phys:meson-isoscalar-mixing",
      "D-phys-meson-isoscalar-mixing"
    ]
  ],
  "formalDependencies": [
    [
      "physics:light-flavor-su3-light-meson-nonets",
      [
        "phys:light-flavor-su3",
        "phys:light-meson-nonets"
      ]
    ],
    [
      "physics:light-meson-nonets-meson-isoscalar-mixing",
      [
        "phys:light-meson-nonets",
        "phys:meson-isoscalar-mixing"
      ]
    ]
  ],
  "contexts": [
    [
      "kloe2007-acquisition-context",
      "M-phys-kloe2007-acquisition-context",
      [
        "kloe2007-meson-acquisition"
      ]
    ],
    [
      "kloe2007-response-context",
      "M-phys-kloe2007-response-context",
      [
        "kloe2007-meson-response"
      ]
    ],
    [
      "kloe2007-mixing-context",
      "M-phys-kloe2007-mixing-context",
      [
        "kloe2007-meson-mixing"
      ]
    ],
    [
      "meson-family-replay-context",
      "M-phys-meson-family-replay-context",
      [
        "meson-family-replay"
      ]
    ]
  ],
  "observations": [
    [
      "kloe2007-selected-candidates",
      "C-phys-kloe2007-selected-candidates",
      [
        "kloe2007-meson-acquisition"
      ]
    ],
    [
      "kloe2007-subtracted-yield",
      "C-phys-kloe2007-subtracted-yield",
      [
        "kloe2007-meson-response"
      ]
    ],
    [
      "kloe2007-radiative-ratio",
      "C-phys-kloe2007-radiative-ratio",
      [
        "kloe2007-meson-response"
      ]
    ],
    [
      "kloe2007-pseudoscalar-angle",
      "C-phys-kloe2007-pseudoscalar-angle",
      [
        "kloe2007-meson-mixing"
      ]
    ],
    [
      "meson-family-arithmetic",
      "C-phys-meson-family-arithmetic",
      [
        "meson-family-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "kloe2007-acquisition-context-kloe2007-selected-candidates",
      "kloe2007-acquisition-context",
      "kloe2007-selected-candidates",
      "M-phys-kloe2007-selected-candidates",
      "measurement-context"
    ],
    [
      "kloe2007-selected-candidates-kloe2007-subtracted-yield",
      "kloe2007-selected-candidates",
      "kloe2007-subtracted-yield",
      "M-phys-kloe2007-subtracted-yield",
      "interpretation-dependency"
    ],
    [
      "kloe2007-response-context-kloe2007-subtracted-yield",
      "kloe2007-response-context",
      "kloe2007-subtracted-yield",
      "M-phys-kloe2007-subtracted-yield",
      "interpretation-dependency"
    ],
    [
      "kloe2007-subtracted-yield-kloe2007-radiative-ratio",
      "kloe2007-subtracted-yield",
      "kloe2007-radiative-ratio",
      "M-phys-kloe2007-radiative-ratio",
      "interpretation-dependency"
    ],
    [
      "kloe2007-selected-candidates-kloe2007-radiative-ratio",
      "kloe2007-selected-candidates",
      "kloe2007-radiative-ratio",
      "M-phys-kloe2007-radiative-ratio",
      "interpretation-dependency"
    ],
    [
      "kloe2007-response-context-kloe2007-radiative-ratio",
      "kloe2007-response-context",
      "kloe2007-radiative-ratio",
      "M-phys-kloe2007-radiative-ratio",
      "interpretation-dependency"
    ],
    [
      "meson-isoscalar-mixing-kloe2007-pseudoscalar-angle",
      "meson-isoscalar-mixing",
      "kloe2007-pseudoscalar-angle",
      "M-phys-kloe2007-pseudoscalar-angle",
      "interpretation-dependency"
    ],
    [
      "kloe2007-radiative-ratio-kloe2007-pseudoscalar-angle",
      "kloe2007-radiative-ratio",
      "kloe2007-pseudoscalar-angle",
      "M-phys-kloe2007-pseudoscalar-angle",
      "interpretation-dependency"
    ],
    [
      "kloe2007-mixing-context-kloe2007-pseudoscalar-angle",
      "kloe2007-mixing-context",
      "kloe2007-pseudoscalar-angle",
      "M-phys-kloe2007-pseudoscalar-angle",
      "interpretation-dependency"
    ],
    [
      "light-meson-nonets-meson-family-arithmetic",
      "light-meson-nonets",
      "meson-family-arithmetic",
      "M-phys-meson-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kloe2007-selected-candidates-meson-family-arithmetic",
      "kloe2007-selected-candidates",
      "meson-family-arithmetic",
      "M-phys-meson-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kloe2007-subtracted-yield-meson-family-arithmetic",
      "kloe2007-subtracted-yield",
      "meson-family-arithmetic",
      "M-phys-meson-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "kloe2007-response-context-meson-family-arithmetic",
      "kloe2007-response-context",
      "meson-family-arithmetic",
      "M-phys-meson-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "meson-family-replay-context-meson-family-arithmetic",
      "meson-family-replay-context",
      "meson-family-arithmetic",
      "M-phys-meson-family-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "kloe2007-meson-acquisition",
    "kloe2007-meson-response",
    "kloe2007-meson-mixing",
    "meson-family-replay"
  ],
  "comparisonIds": [
    "meson-family-mixing-scope",
    "kloe2007-ratio-angle-scope",
    "meson-family-arithmetic-scope"
  ],
  "inferenceSources": [
    [
      "M-phys-kloe2007-acquisition-context",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-response-context",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-mixing-context",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "C-phys-kloe2007-selected-candidates",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-selected-candidates",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "C-phys-kloe2007-subtracted-yield",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-subtracted-yield",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "C-phys-kloe2007-radiative-ratio",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-radiative-ratio",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "C-phys-kloe2007-pseudoscalar-angle",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-kloe2007-pseudoscalar-angle",
      [
        "kloe2007-meson-ratio"
      ]
    ],
    [
      "M-phys-meson-family-replay-context",
      [
        "pdg2025-quark-model",
        "kloe2007-meson-ratio",
        "meson-family-verifier"
      ]
    ],
    [
      "C-phys-meson-family-arithmetic",
      [
        "pdg2025-quark-model",
        "kloe2007-meson-ratio",
        "meson-family-verifier"
      ]
    ],
    [
      "M-phys-meson-family-arithmetic",
      [
        "pdg2025-quark-model",
        "kloe2007-meson-ratio",
        "meson-family-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "meson-family-replay",
      "meson-family-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "kloe2007-meson-ratio",
      "kind": "research-publication",
      "title": "Measurement of the pseudoscalar mixing angle and eta-prime gluonium content with the KLOE detector",
      "authors": [
        "KLOE Collaboration"
      ],
      "year": 2007,
      "doi": "10.1016/j.physletb.2007.03.032",
      "url": "https://www.le.infn.it/~ventura/publications/plb648.pdf",
      "path": null,
      "review": {
        "extent": "full-publisher-article",
        "locators": [
          "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection",
          "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs"
        ],
        "limit": "The complete seven-page publisher article (267-273), including references, was read; Equation 7, Equation 10, Tables 1-3 and Figures 1-3 were visually checked. The collective KLOE authorship appears above the individual roster on page 267. Selected acquisition/ratio and conditional no-gluonium inference are admitted; the separate multi-source gluonium fit, absolute branching-fraction inference and referenced detector/theory papers are not independently reconstructed."
      }
    },
    {
      "id": "kloe2009-mixing-scope",
      "kind": "research-publication",
      "title": "A global fit to determine the pseudoscalar mixing angle and the gluonium content of the eta-prime meson",
      "authors": [
        "F. Ambrosino",
        "A. Antonelli",
        "M. Antonelli",
        "F. Archilli",
        "P. Beltrame",
        "G. Bencivenni",
        "S. Bertolucci",
        "C. Bini",
        "C. Bloise",
        "S. Bocchetta",
        "F. Bossi",
        "P. Branchini",
        "G. Capon",
        "T. Capussela",
        "F. Ceradini",
        "P. Ciambrone",
        "E. De Lucia",
        "A. De Santis",
        "P. De Simone",
        "G. De Zorzi",
        "A. Denig",
        "A. Di Domenico",
        "C. Di Donato",
        "B. Di Micco",
        "M. Dreucci",
        "G. Felici",
        "S. Fiore",
        "P. Franzini",
        "C. Gatti",
        "P. Gauzzi",
        "S. Giovannella",
        "E. Graziani",
        "M. Jacewicz",
        "G. Lanfranchi",
        "J. Lee-Franzini",
        "M. Martini",
        "P. Massarotti",
        "S. Meola",
        "S. Miscetti",
        "M. Moulson",
        "S. Muller",
        "F. Murtas",
        "M. Napolitano",
        "F. Nguyen",
        "M. Palutan",
        "E. Pasqualucci",
        "A. Passeri",
        "V. Patera",
        "P. Santangelo",
        "B. Sciascia",
        "T. Spadaro",
        "M. Testa",
        "L. Tortora",
        "P. Valente",
        "G. Venanzoni",
        "R. Versaci",
        "G. Xu"
      ],
      "year": 2009,
      "doi": "10.1088/1126-6708/2009/07/105",
      "url": "https://arxiv.org/abs/0906.3819v1",
      "path": null,
      "review": {
        "extent": "abstract-and-metadata",
        "locators": [
          "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints"
        ],
        "limit": "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred."
      }
    },
    {
      "id": "meson-family-verifier",
      "kind": "executable-check",
      "title": "Bounded light-meson projector and radiative-ratio bookkeeping",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-meson-family.py",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction"
        ],
        "limit": "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-light-meson-nonets",
      "kind": "review-finding",
      "statement": "In the restricted u,d,s quark-antiquark model, 3 tensor 3bar decomposes as flavor 8 plus 1. The lightest L=0 pseudoscalar and vector assignments form separate nonets; spin/parity and physical state mixing remain part of their interpretation.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded."
      ]
    },
    {
      "id": "D-phys-meson-isoscalar-mixing",
      "kind": "review-finding",
      "statement": "The flavor-octet and singlet isoscalar basis vectors are (|u ubar>+|d dbar>-2|s sbar>)/sqrt(6) and (|u ubar>+|d dbar>+|s sbar>)/sqrt(3). Physical eta and eta-prime are rotated combinations, not exact octet/singlet labels. In the restricted flavor basis |eta>=cos(phi_P)*|q qbar>-sin(phi_P)*|s sbar> and |eta-prime>=sin(phi_P)*|q qbar>+cos(phi_P)*|s sbar>, with |q qbar>=(|u ubar>+|d dbar>)/sqrt(2) and theta_P=phi_P-arctan(sqrt(2)). Each ket labels a quark-antiquark basis state, not a subtraction or a complete observed particle population.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 6 and 8-9, Equations 15.5-15.9 and 15.19-15.20: physical isoscalar mixing, basis conventions and limits of simple mass/transition relations",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty."
      ]
    },
    {
      "id": "M-phys-kloe2007-acquisition-context",
      "kind": "method",
      "statement": "Use the 427 pb^-1 KLOE sample collected in 2001-2002 near sqrt(s)=1.02 GeV. Select seven prompt calorimeter photons with an opposite-charge track vertex for the combined two eta-prime cascades, and seven photons without interaction-region tracks for the eta normalization cascade; impose the stated energy, timing, vertex and kinematic-fit selections.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ],
      "contextIds": [
        "kloe2007-meson-acquisition"
      ]
    },
    {
      "id": "M-phys-kloe2007-response-context",
      "kind": "method",
      "statement": "Estimate residual kaon backgrounds using simulation and the acquisition normalization; obtain branching-weighted signal efficiency 23.45% and reference efficiency 33.66%, plus FLS efficiencies 97% and 97.88% from control data. Equation 7 multiplies the subtracted yield ratio by inverse signal/reference efficiencies, FLS ratio, daughter-branching ratio and K_rho=0.95 +/-0.01.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "M-phys-kloe2007-mixing-context",
      "kind": "method",
      "statement": "Use the same measured R_phi in the no-gluonium Equation 10: cot(phi_P)^2*[1-(m_s/m_bar)*(C_NS/C_S)*tan(phi_V)/sin(2phi_P)]^2*(p_eta-prime/p_eta)^3. Adopt the constituent-mass, overlap, vector-angle and phase-space inputs stated in the paper; keep the separate multi-source gluonium fit outside this inference.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2009-mixing-scope",
          "locator": "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints",
          "role": "provenance",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred."
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "C-phys-kloe2007-selected-candidates",
      "kind": "review-finding",
      "statement": "The selected eta-prime cascade sample contains 3750 candidates before residual background subtraction. The eta normalization selection contains 1665000 events. The reported energy and invariant-mass plots display detector-level responses with modeled components.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ],
      "contextIds": [
        "kloe2007-meson-acquisition"
      ]
    },
    {
      "id": "M-phys-kloe2007-selected-candidates",
      "kind": "method",
      "statement": "Retain channel-specific selections and candidate counts before the separate background and response corrections; modeled plot components are not additional measured samples.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ],
      "contextIds": [
        "kloe2007-meson-acquisition"
      ]
    },
    {
      "id": "C-phys-kloe2007-subtracted-yield",
      "kind": "review-finding",
      "statement": "The residual background estimate 343 +/-43 is subtracted from 3750 candidates, giving N_eta-prime-gamma=3407 +/-61 statistical +/-43 systematic. The subtraction reuses the selected acquisition and treats background uncertainty as systematic.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "M-phys-kloe2007-subtracted-yield",
      "kind": "method",
      "statement": "Use the same selected candidates and modeled residual background; the subtracted signal is a conditional estimate, not a new acquisition or an unfolded amplitude.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "C-phys-kloe2007-radiative-ratio",
      "kind": "review-finding",
      "statement": "After the Equation 7 response, daughter-branching and interference corrections, KLOE reports R_phi=BR(phi->eta-prime gamma)/BR(phi->eta gamma)=(4.77 +/-0.09 statistical +/-0.19 systematic)*10^-3.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "M-phys-kloe2007-radiative-ratio",
      "kind": "method",
      "statement": "Apply the response and external branching inputs to the selected same-parent channels; preserve the ratio meaning and the reported uncertainty components.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "C-phys-kloe2007-pseudoscalar-angle",
      "kind": "review-finding",
      "statement": "Under the specified zero-gluonium model, the same R_phi gives phi_P=(41.4 +/-0.3 statistical +/-0.7 systematic +/-0.6 theoretical) degrees, corresponding to the reported octet-singlet angle theta_P=(-13.3 +/-0.3 +/-0.7 +/-0.6) degrees. This is a conditional same-acquisition interpretation.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2009-mixing-scope",
          "locator": "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints",
          "role": "provenance",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "M-phys-kloe2007-pseudoscalar-angle",
      "kind": "method",
      "statement": "Infer the angle using Equation 10 with the adopted reduced-overlap, symmetry-breaking and phase-space inputs; the ratio alone does not determine those inputs or a gluonium fraction.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2009-mixing-scope",
          "locator": "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints",
          "role": "provenance",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "M-phys-meson-family-replay-context",
      "kind": "method",
      "statement": "Check rational trace/traceless projectors and nine declared flavor weights; use an explicitly synthetic two-cascade response model to test efficiency, daughter-branching and common-exposure cancellation. Check only the printed 343 background sum and 3750-343=3407 subtraction.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "meson-family-verifier",
          "locator": "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "C-phys-meson-family-arithmetic",
      "kind": "review-finding",
      "statement": "Three rational matrix witnesses preserve scalar-plus-traceless reconstruction, idempotence and orthogonality. Nine q-qbar basis labels include three coincident zero-weight vectors. Three synthetic exposure cases recover the declared ratio only with the branch-weighted response and proper correction direction; Table 1 backgrounds sum 343 and 3750-343=3407.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "meson-family-verifier",
          "locator": "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction",
          "role": "supports",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [
        "meson-family-printed-arithmetic"
      ],
      "limitations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "M-phys-meson-family-arithmetic",
      "kind": "method",
      "statement": "Evaluate only the declared finite projectors, synthetic ratio model and printed subtraction; no physical angle or experimental ratio is produced.",
      "scope": "Selected light-flavor meson classification and KLOE 2001-2002 radiative ratio with conditional mixing; no universal formation claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        },
        {
          "sourceId": "meson-family-verifier",
          "locator": "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction",
          "role": "method",
          "note": "Supports only the specified classification, analysis stage or finite local check; scope-only citation does not admit a global fit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:light-meson-nonets",
      "name": "Light quark-antiquark flavor nonets",
      "kind": "definition",
      "description": "In the restricted u,d,s quark-antiquark model, 3 tensor 3bar decomposes as flavor 8 plus 1. The lightest L=0 pseudoscalar and vector assignments form separate nonets; spin/parity and physical state mixing remain part of their interpretation.",
      "claimIds": [
        "D-phys-light-meson-nonets"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification"
        }
      ],
      "openObligations": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded."
      ]
    },
    {
      "id": "phys:meson-isoscalar-mixing",
      "name": "Physical isoscalar meson mixing",
      "kind": "definition",
      "description": "The flavor-octet and singlet isoscalar basis vectors are (|u ubar>+|d dbar>-2|s sbar>)/sqrt(6) and (|u ubar>+|d dbar>+|s sbar>)/sqrt(3). Physical eta and eta-prime are rotated combinations, not exact octet/singlet labels. In the restricted flavor basis |eta>=cos(phi_P)*|q qbar>-sin(phi_P)*|s sbar> and |eta-prime>=sin(phi_P)*|q qbar>+cos(phi_P)*|s sbar>, with |q qbar>=(|u ubar>+|d dbar>)/sqrt(2) and theta_P=phi_P-arctan(sqrt(2)). Each ket labels a quark-antiquark basis state, not a subtraction or a complete observed particle population.",
      "claimIds": [
        "D-phys-meson-isoscalar-mixing"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 6 and 8-9, Equations 15.5-15.9 and 15.19-15.20: physical isoscalar mixing, basis conventions and limits of simple mass/transition relations"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs"
        }
      ],
      "openObligations": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty."
      ]
    },
    {
      "id": "phys:kloe2007-acquisition-context",
      "name": "KLOE radiative-decay acquisition",
      "kind": "context",
      "description": "Use the 427 pb^-1 KLOE sample collected in 2001-2002 near sqrt(s)=1.02 GeV. Select seven prompt calorimeter photons with an opposite-charge track vertex for the combined two eta-prime cascades, and seven photons without interaction-region tracks for the eta normalization cascade; impose the stated energy, timing, vertex and kinematic-fit selections.",
      "claimIds": [
        "M-phys-kloe2007-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        }
      ],
      "openObligations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ]
    },
    {
      "id": "phys:kloe2007-response-context",
      "name": "KLOE cascade response and corrections",
      "kind": "context",
      "description": "Estimate residual kaon backgrounds using simulation and the acquisition normalization; obtain branching-weighted signal efficiency 23.45% and reference efficiency 33.66%, plus FLS efficiencies 97% and 97.88% from control data. Equation 7 multiplies the subtracted yield ratio by inverse signal/reference efficiencies, FLS ratio, daughter-branching ratio and K_rho=0.95 +/-0.01.",
      "claimIds": [
        "M-phys-kloe2007-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
        }
      ],
      "openObligations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ]
    },
    {
      "id": "phys:kloe2007-mixing-context",
      "name": "KLOE conditional pseudoscalar mixing model",
      "kind": "context",
      "description": "Use the same measured R_phi in the no-gluonium Equation 10: cot(phi_P)^2*[1-(m_s/m_bar)*(C_NS/C_S)*tan(phi_V)/sin(2phi_P)]^2*(p_eta-prime/p_eta)^3. Adopt the constituent-mass, overlap, vector-angle and phase-space inputs stated in the paper; keep the separate multi-source gluonium fit outside this inference.",
      "claimIds": [
        "M-phys-kloe2007-mixing-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
        },
        {
          "sourceId": "kloe2009-mixing-scope",
          "locator": "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints"
        }
      ],
      "openObligations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred."
      ]
    },
    {
      "id": "phys:kloe2007-selected-candidates",
      "name": "KLOE selected radiative candidates",
      "kind": "scoped-process",
      "description": "The selected eta-prime cascade sample contains 3750 candidates before residual background subtraction. The eta normalization selection contains 1665000 events. The reported energy and invariant-mass plots display detector-level responses with modeled components.",
      "claimIds": [
        "C-phys-kloe2007-selected-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        }
      ],
      "openObligations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ]
    },
    {
      "id": "phys:kloe2007-subtracted-yield",
      "name": "KLOE background-subtracted radiative yield",
      "kind": "scoped-process",
      "description": "The residual background estimate 343 +/-43 is subtracted from 3750 candidates, giving N_eta-prime-gamma=3407 +/-61 statistical +/-43 systematic. The subtraction reuses the selected acquisition and treats background uncertainty as systematic.",
      "claimIds": [
        "C-phys-kloe2007-subtracted-yield"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        }
      ],
      "openObligations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ]
    },
    {
      "id": "phys:kloe2007-radiative-ratio",
      "name": "KLOE radiative partial-rate ratio",
      "kind": "scoped-process",
      "description": "After the Equation 7 response, daughter-branching and interference corrections, KLOE reports R_phi=BR(phi->eta-prime gamma)/BR(phi->eta gamma)=(4.77 +/-0.09 statistical +/-0.19 systematic)*10^-3.",
      "claimIds": [
        "C-phys-kloe2007-radiative-ratio"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
        }
      ],
      "openObligations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ]
    },
    {
      "id": "phys:kloe2007-pseudoscalar-angle",
      "name": "KLOE no-gluonium pseudoscalar angle",
      "kind": "scoped-process",
      "description": "Under the specified zero-gluonium model, the same R_phi gives phi_P=(41.4 +/-0.3 statistical +/-0.7 systematic +/-0.6 theoretical) degrees, corresponding to the reported octet-singlet angle theta_P=(-13.3 +/-0.3 +/-0.7 +/-0.6) degrees. This is a conditional same-acquisition interpretation.",
      "claimIds": [
        "C-phys-kloe2007-pseudoscalar-angle"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
        },
        {
          "sourceId": "kloe2009-mixing-scope",
          "locator": "arXiv:0906.3819v1 abstract and journal metadata: global refit reuses the radiative ratio together with other decay constraints"
        }
      ],
      "openObligations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ]
    },
    {
      "id": "phys:meson-family-replay-context",
      "name": "Finite meson bookkeeping context",
      "kind": "context",
      "description": "Check rational trace/traceless projectors and nine declared flavor weights; use an explicitly synthetic two-cascade response model to test efficiency, daughter-branching and common-exposure cancellation. Check only the printed 343 background sum and 3750-343=3407 subtraction.",
      "claimIds": [
        "M-phys-meson-family-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        },
        {
          "sourceId": "meson-family-verifier",
          "locator": "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction"
        }
      ],
      "openObligations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ]
    },
    {
      "id": "phys:meson-family-arithmetic",
      "name": "Checked meson bookkeeping",
      "kind": "scoped-process",
      "description": "Three rational matrix witnesses preserve scalar-plus-traceless reconstruction, idempotence and orthogonality. Nine q-qbar basis labels include three coincident zero-weight vectors. Three synthetic exposure cases recover the declared ratio only with the branch-weighted response and proper correction direction; Table 1 backgrounds sum 343 and 3750-343=3407.",
      "claimIds": [
        "C-phys-meson-family-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        },
        {
          "sourceId": "meson-family-verifier",
          "locator": "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction"
        }
      ],
      "openObligations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ]
    }
  ],
  "studies": [
    {
      "id": "kloe2007-meson-acquisition",
      "sourceId": "kloe2007-meson-ratio",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physletb.2007.03.032",
      "journal": "Physics Letters B",
      "volume": "648",
      "issue": "4",
      "pages": "267-273",
      "system": "KLOE phi radiative decays in 2001-2002",
      "preparation": "Use the 427 pb^-1 KLOE sample collected in 2001-2002 near sqrt(s)=1.02 GeV. Select seven prompt calorimeter photons with an opposite-charge track vertex for the combined two eta-prime cascades, and seven photons without interaction-region tracks for the eta normalization cascade; impose the stated energy, timing, vertex and kinematic-fit selections.",
      "observable": "KLOE selected radiative candidates",
      "finding": "The selected eta-prime cascade sample contains 3750 candidates before residual background subtraction. The eta normalization selection contains 1665000 events. The reported energy and invariant-mass plots display detector-level responses with modeled components.",
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses."
      ],
      "readExtent": "full-publisher-article",
      "reviewedLocators": [
        "Publisher pages 268-269, Sections 1-3 and Equations 1-6: 2001-2002 acquisition, selected cascade channels and event selection",
        "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2007.03.032",
      "correctionCheck": "Publisher 2007 article read; the 2009 versioned abstract identifies a later global refit that reuses R_phi. No claim of latest data or comprehensive correction review."
    },
    {
      "id": "kloe2007-meson-response",
      "sourceId": "kloe2007-meson-ratio",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2007.03.032",
      "journal": "Physics Letters B",
      "volume": "648",
      "issue": "4",
      "pages": "267-273",
      "system": "KLOE phi radiative decays in 2001-2002",
      "preparation": "Estimate residual kaon backgrounds using simulation and the acquisition normalization; obtain branching-weighted signal efficiency 23.45% and reference efficiency 33.66%, plus FLS efficiencies 97% and 97.88% from control data. Equation 7 multiplies the subtracted yield ratio by inverse signal/reference efficiencies, FLS ratio, daughter-branching ratio and K_rho=0.95 +/-0.01.",
      "observable": "KLOE radiative partial-rate ratio",
      "finding": "After the Equation 7 response, daughter-branching and interference corrections, KLOE reports R_phi=BR(phi->eta-prime gamma)/BR(phi->eta gamma)=(4.77 +/-0.09 statistical +/-0.19 systematic)*10^-3.",
      "limitations": [
        "The 427 pb^-1 sample was collected in 2001-2002; the earlier 2000 KLOE acquisition used different final states and is not pooled. Selected counts, subtracted yields, corrected ratio and inferred angle reuse this acquisition. Simulation and minimum-bias/charged-pion control samples supply response inputs; they are not independent determinations of the radiative ratio.",
        "The 3750 signal-channel candidates contain an estimated 343 +/- 43 background; 3407 +/- 61 statistical +/- 43 systematic is a background-subtracted yield. The 1665000 normalization-channel events are selected counts. Figures 1-3 include simulated physical/combinatorial components and subtractions, not unfolded transition amplitudes or new meson masses.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi.",
        "R_phi is BR(phi->eta-prime gamma)/BR(phi->eta gamma), equivalently a same-parent partial-width ratio. It does not itself determine either absolute branching fraction or an absolute width. Statistical and systematic errors are source-reported; they are not reestimated or treated as independent acquisitions."
      ],
      "readExtent": "full-publisher-article",
      "reviewedLocators": [
        "Publisher pages 269-270, Section 3, Table 1 and Figures 1-3: selected counts, modeled backgrounds, subtracted signal and detector-level distributions",
        "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
        "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2007.03.032",
      "correctionCheck": "Publisher 2007 article read; the 2009 versioned abstract identifies a later global refit that reuses R_phi. No claim of latest data or comprehensive correction review."
    },
    {
      "id": "kloe2007-meson-mixing",
      "sourceId": "kloe2007-meson-ratio",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2007.03.032",
      "journal": "Physics Letters B",
      "volume": "648",
      "issue": "4",
      "pages": "267-273",
      "system": "KLOE phi radiative decays in 2001-2002",
      "preparation": "Use the same measured R_phi in the no-gluonium Equation 10: cot(phi_P)^2*[1-(m_s/m_bar)*(C_NS/C_S)*tan(phi_V)/sin(2phi_P)]^2*(p_eta-prime/p_eta)^3. Adopt the constituent-mass, overlap, vector-angle and phase-space inputs stated in the paper; keep the separate multi-source gluonium fit outside this inference.",
      "observable": "KLOE no-gluonium pseudoscalar angle",
      "finding": "Under the specified zero-gluonium model, the same R_phi gives phi_P=(41.4 +/-0.3 statistical +/-0.7 systematic +/-0.6 theoretical) degrees, corresponding to the reported octet-singlet angle theta_P=(-13.3 +/-0.3 +/-0.7 +/-0.6) degrees. This is a conditional same-acquisition interpretation.",
      "limitations": [
        "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
        "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty.",
        "The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "readExtent": "full-publisher-article",
      "reviewedLocators": [
        "Publisher pages 268, 271-272, Equations 10-11 and Table 3: flavor-basis single-angle convention, no-gluonium hypothesis, overlap and symmetry-breaking inputs",
        "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2007.03.032",
      "correctionCheck": "Publisher 2007 article read; the 2009 versioned abstract identifies a later global refit that reuses R_phi. No claim of latest data or comprehensive correction review."
    },
    {
      "id": "meson-family-replay",
      "sourceId": "meson-family-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite light-meson bookkeeping",
      "preparation": "Check rational trace/traceless projectors and nine declared flavor weights; use an explicitly synthetic two-cascade response model to test efficiency, daughter-branching and common-exposure cancellation. Check only the printed 343 background sum and 3750-343=3407 subtraction.",
      "observable": "Checked meson bookkeeping",
      "finding": "Three rational matrix witnesses preserve scalar-plus-traceless reconstruction, idempotence and orthogonality. Nine q-qbar basis labels include three coincident zero-weight vectors. Three synthetic exposure cases recover the declared ratio only with the branch-weighted response and proper correction direction; Table 1 backgrounds sum 343 and 3750-343=3407.",
      "limitations": [
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The signal efficiency averages two cascade efficiencies weighted by their daughter branching products. Equation 7 also needs the daughter branching-ratio ratio, FLS response and K_rho interference/radiative correction. Their full numerical inputs, correlations, event selection and background simulation are not reconstructed; rounded listed efficiencies and counts alone cannot reproduce R_phi."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): rational trace projectors and net-flavor weights, synthetic two-cascade branching/efficiency cancellation and printed background subtraction"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "The exact executable owns only its finite calculation."
    }
  ],
  "comparisons": [
    {
      "id": "meson-family-mixing-scope",
      "candidate": "Restricted nonets and mixed physical isoscalars are distinct.",
      "alternative": "Physical eta and eta-prime are exact unmixed octet/singlet states or observed two-particle censuses.",
      "discriminator": "Inspect the declared basis rotations and representation scope.",
      "result": "conditional-support",
      "limit": "Physical isoscalars with the same quantum numbers mix. The two-state basis rotation does not make eta and eta-prime exact pure octet/singlet states or establish their full state content. A single flavor-basis pseudoscalar angle assumes the stated treatment of OZI-violating terms; generic beyond-leading-order descriptions need not use one angle.",
      "assumptions": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude."
      ],
      "sourceIds": [
        "pdg2025-quark-model",
        "kloe2007-meson-ratio"
      ],
      "claimIds": [
        "D-phys-light-meson-nonets",
        "D-phys-meson-isoscalar-mixing"
      ]
    },
    {
      "id": "kloe2007-ratio-angle-scope",
      "candidate": "The measured radiative ratio conditionally constrains the stated no-gluonium mixing model.",
      "alternative": "The ratio alone determines a universal mixing angle, gluonium content or all meson transition rates.",
      "discriminator": "Keep selected counts,response correction,model parameters and inferred angle as separate records.",
      "result": "conditional-support",
      "limit": "The reported 41.4-degree result assumes zero eta-prime gluonium and Equation 10, including constituent mass ratio m_s/m_bar, C_NS/C_S overlap parameters, vector mixing phi_V=3.4 degrees and the photon-momentum ratio cubed. These are model/external inputs, not determined by R_phi alone. The theoretical error is a maximum variation over the adopted parameter spreads, not a locally derived Gaussian uncertainty. The paper's separate multi-source gluonium fit is not admitted. The 2009 abstract reports an updated global fit using the radiative ratio with other widths; only that reuse/scope statement was reviewed. No updated angle/gluonium number, latest-result claim, direct gluon population or unique hadron-formation mechanism is inferred.",
      "assumptions": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude."
      ],
      "sourceIds": [
        "kloe2007-meson-ratio",
        "kloe2009-mixing-scope"
      ],
      "claimIds": [
        "C-phys-kloe2007-radiative-ratio",
        "C-phys-kloe2007-pseudoscalar-angle"
      ]
    },
    {
      "id": "meson-family-arithmetic-scope",
      "candidate": "Finite projector and ratio bookkeeping can be checked.",
      "alternative": "Finite arithmetic reproduces the detector analysis or proves a physical formation mechanism.",
      "discriminator": "Use independently testable synthetic inputs and preserve the reported measurements as inputs/comparison targets.",
      "result": "conditional-support",
      "limit": "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude.",
      "assumptions": [
        "The u,d,s q-qbar model supplies flavor labels and multiplets, not a complete hadronic Fock state, exact constituent census, physical formation sequence or color-SU(3) result. Only the lightest pseudoscalar/vector assignments are retained; scalar/excited/exotic assignments and universal parent weights/minima are excluded.",
        "The local calculation checks rational trace projectors, flavor-weight bookkeeping, a synthetic two-cascade response model and the printed background subtraction. It does not prove representation irreducibility, measure q-qbar content or calculate physical mixing, R_phi, detector response, covariance or a radiative amplitude."
      ],
      "sourceIds": [
        "pdg2025-quark-model",
        "kloe2007-meson-ratio",
        "meson-family-verifier"
      ],
      "claimIds": [
        "C-phys-meson-family-arithmetic"
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:light-flavor-su3-light-meson-nonets",
      "source": "phys:light-flavor-su3",
      "target": "phys:light-meson-nonets",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The restricted flavor action supplies the triplet and conjugate-triplet classification; this is not the local color action.",
      "claimIds": [
        "D-phys-light-meson-nonets"
      ]
    },
    {
      "id": "physics:light-meson-nonets-meson-isoscalar-mixing",
      "source": "phys:light-meson-nonets",
      "target": "phys:meson-isoscalar-mixing",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The octet/singlet basis precedes the separately specified physical-state mixing convention.",
      "claimIds": [
        "D-phys-meson-isoscalar-mixing"
      ]
    },
    {
      "id": "physics:kloe2007-acquisition-context-kloe2007-selected-candidates",
      "source": "phys:kloe2007-acquisition-context",
      "target": "phys:kloe2007-selected-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The named channel selections define these candidate samples.",
      "claimIds": [
        "M-phys-kloe2007-selected-candidates"
      ],
      "contextIds": [
        "kloe2007-meson-acquisition"
      ]
    },
    {
      "id": "physics:kloe2007-selected-candidates-kloe2007-subtracted-yield",
      "source": "phys:kloe2007-selected-candidates",
      "target": "phys:kloe2007-subtracted-yield",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The background subtraction reuses these selected signal candidates.",
      "claimIds": [
        "M-phys-kloe2007-subtracted-yield"
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kloe2007-response-context-kloe2007-subtracted-yield",
      "source": "phys:kloe2007-response-context",
      "target": "phys:kloe2007-subtracted-yield",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The modeled residual background conditions the subtracted signal estimate.",
      "claimIds": [
        "M-phys-kloe2007-subtracted-yield"
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kloe2007-subtracted-yield-kloe2007-radiative-ratio",
      "source": "phys:kloe2007-subtracted-yield",
      "target": "phys:kloe2007-radiative-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The subtracted signal supplies the numerator before efficiency and decay-branch corrections.",
      "claimIds": [
        "M-phys-kloe2007-radiative-ratio"
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kloe2007-selected-candidates-kloe2007-radiative-ratio",
      "source": "phys:kloe2007-selected-candidates",
      "target": "phys:kloe2007-radiative-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same acquisition supplies the selected eta normalization-channel count.",
      "claimIds": [
        "M-phys-kloe2007-radiative-ratio"
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kloe2007-response-context-kloe2007-radiative-ratio",
      "source": "phys:kloe2007-response-context",
      "target": "phys:kloe2007-radiative-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Detector response, control measurements, daughter branches and interference supply correction inputs.",
      "claimIds": [
        "M-phys-kloe2007-radiative-ratio"
      ],
      "contextIds": [
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:meson-isoscalar-mixing-kloe2007-pseudoscalar-angle",
      "source": "phys:meson-isoscalar-mixing",
      "target": "phys:kloe2007-pseudoscalar-angle",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared flavor-basis and octet-singlet conventions define the reported angle.",
      "claimIds": [
        "M-phys-kloe2007-pseudoscalar-angle"
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "physics:kloe2007-radiative-ratio-kloe2007-pseudoscalar-angle",
      "source": "phys:kloe2007-radiative-ratio",
      "target": "phys:kloe2007-pseudoscalar-angle",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measured ratio constrains the angle conditionally; the interpretation reuses the acquisition.",
      "claimIds": [
        "M-phys-kloe2007-pseudoscalar-angle"
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "physics:kloe2007-mixing-context-kloe2007-pseudoscalar-angle",
      "source": "phys:kloe2007-mixing-context",
      "target": "phys:kloe2007-pseudoscalar-angle",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The no-gluonium, overlap, symmetry-breaking and phase-space inputs condition the angle extraction.",
      "claimIds": [
        "M-phys-kloe2007-pseudoscalar-angle"
      ],
      "contextIds": [
        "kloe2007-meson-mixing"
      ]
    },
    {
      "id": "physics:light-meson-nonets-meson-family-arithmetic",
      "source": "phys:light-meson-nonets",
      "target": "phys:meson-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared matrix flavor representation supplies the finite trace-projector witnesses.",
      "claimIds": [
        "M-phys-meson-family-arithmetic"
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "physics:kloe2007-selected-candidates-meson-family-arithmetic",
      "source": "phys:kloe2007-selected-candidates",
      "target": "phys:meson-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Printed candidate counts supply subtraction inputs, not event-level data.",
      "claimIds": [
        "M-phys-meson-family-arithmetic"
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "physics:kloe2007-subtracted-yield-meson-family-arithmetic",
      "source": "phys:kloe2007-subtracted-yield",
      "target": "phys:meson-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed subtracted yield is an arithmetic comparison target, not an independently inferred measurement.",
      "claimIds": [
        "M-phys-meson-family-arithmetic"
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "physics:kloe2007-response-context-meson-family-arithmetic",
      "source": "phys:kloe2007-response-context",
      "target": "phys:meson-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Equation 7 and its two-cascade response weighting supply the synthetic correction identity.",
      "claimIds": [
        "M-phys-meson-family-arithmetic"
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    },
    {
      "id": "physics:meson-family-replay-context-meson-family-arithmetic",
      "source": "phys:meson-family-replay-context",
      "target": "phys:meson-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The exact finite inputs and code delimit this local calculation.",
      "claimIds": [
        "M-phys-meson-family-arithmetic"
      ],
      "contextIds": [
        "meson-family-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:light-meson-nonets",
      "role": "definition",
      "denotes": "In the restricted u,d,s quark-antiquark model, 3 tensor 3bar decomposes as flavor 8 plus 1. The lightest L=0 pseudoscalar and vector assignments form separate nonets; spin/parity and physical state mixing remain part of their interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-light-meson-nonets"
      ]
    },
    {
      "nodeId": "phys:meson-isoscalar-mixing",
      "role": "definition",
      "denotes": "The flavor-octet and singlet isoscalar basis vectors are (|u ubar>+|d dbar>-2|s sbar>)/sqrt(6) and (|u ubar>+|d dbar>+|s sbar>)/sqrt(3). Physical eta and eta-prime are rotated combinations, not exact octet/singlet labels. In the restricted flavor basis |eta>=cos(phi_P)*|q qbar>-sin(phi_P)*|s sbar> and |eta-prime>=sin(phi_P)*|q qbar>+cos(phi_P)*|s sbar>, with |q qbar>=(|u ubar>+|d dbar>)/sqrt(2) and theta_P=phi_P-arctan(sqrt(2)). Each ket labels a quark-antiquark basis state, not a subtraction or a complete observed particle population.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-meson-isoscalar-mixing"
      ]
    },
    {
      "nodeId": "phys:kloe2007-acquisition-context",
      "role": "experimental-context",
      "denotes": "Use the 427 pb^-1 KLOE sample collected in 2001-2002 near sqrt(s)=1.02 GeV. Select seven prompt calorimeter photons with an opposite-charge track vertex for the combined two eta-prime cascades, and seven photons without interaction-region tracks for the eta normalization cascade; impose the stated energy, timing, vertex and kinematic-fit selections.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kloe2007-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:kloe2007-response-context",
      "role": "model-context",
      "denotes": "Estimate residual kaon backgrounds using simulation and the acquisition normalization; obtain branching-weighted signal efficiency 23.45% and reference efficiency 33.66%, plus FLS efficiencies 97% and 97.88% from control data. Equation 7 multiplies the subtracted yield ratio by inverse signal/reference efficiencies, FLS ratio, daughter-branching ratio and K_rho=0.95 +/-0.01.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kloe2007-response-context"
      ]
    },
    {
      "nodeId": "phys:kloe2007-mixing-context",
      "role": "model-context",
      "denotes": "Use the same measured R_phi in the no-gluonium Equation 10: cot(phi_P)^2*[1-(m_s/m_bar)*(C_NS/C_S)*tan(phi_V)/sin(2phi_P)]^2*(p_eta-prime/p_eta)^3. Adopt the constituent-mass, overlap, vector-angle and phase-space inputs stated in the paper; keep the separate multi-source gluonium fit outside this inference.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-kloe2007-mixing-context"
      ]
    },
    {
      "nodeId": "phys:kloe2007-selected-candidates",
      "role": "scoped-phenomenon",
      "denotes": "The selected eta-prime cascade sample contains 3750 candidates before residual background subtraction. The eta normalization selection contains 1665000 events. The reported energy and invariant-mass plots display detector-level responses with modeled components.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kloe2007-selected-candidates"
      ]
    },
    {
      "nodeId": "phys:kloe2007-subtracted-yield",
      "role": "scoped-phenomenon",
      "denotes": "The residual background estimate 343 +/-43 is subtracted from 3750 candidates, giving N_eta-prime-gamma=3407 +/-61 statistical +/-43 systematic. The subtraction reuses the selected acquisition and treats background uncertainty as systematic.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kloe2007-subtracted-yield"
      ]
    },
    {
      "nodeId": "phys:kloe2007-radiative-ratio",
      "role": "scoped-phenomenon",
      "denotes": "After the Equation 7 response, daughter-branching and interference corrections, KLOE reports R_phi=BR(phi->eta-prime gamma)/BR(phi->eta gamma)=(4.77 +/-0.09 statistical +/-0.19 systematic)*10^-3.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kloe2007-radiative-ratio"
      ]
    },
    {
      "nodeId": "phys:kloe2007-pseudoscalar-angle",
      "role": "scoped-phenomenon",
      "denotes": "Under the specified zero-gluonium model, the same R_phi gives phi_P=(41.4 +/-0.3 statistical +/-0.7 systematic +/-0.6 theoretical) degrees, corresponding to the reported octet-singlet angle theta_P=(-13.3 +/-0.3 +/-0.7 +/-0.6) degrees. This is a conditional same-acquisition interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-kloe2007-pseudoscalar-angle"
      ]
    },
    {
      "nodeId": "phys:meson-family-replay-context",
      "role": "model-context",
      "denotes": "Check rational trace/traceless projectors and nine declared flavor weights; use an explicitly synthetic two-cascade response model to test efficiency, daughter-branching and common-exposure cancellation. Check only the printed 343 background sum and 3750-343=3407 subtraction.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-meson-family-replay-context"
      ]
    },
    {
      "nodeId": "phys:meson-family-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "Three rational matrix witnesses preserve scalar-plus-traceless reconstruction, idempotence and orthogonality. Nine q-qbar basis labels include three coincident zero-weight vectors. Three synthetic exposure cases recover the declared ratio only with the branch-weighted response and proper correction direction; Table 1 backgrounds sum 343 and 3750-343=3407.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-meson-family-arithmetic"
      ]
    }
  ]
};

/** Preserve flavor classification, measurement stages and conditional mixing. */
export function validateMesonFamilyContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing meson-family ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Meson-family ${kind} changed ${id}.${key}: preserve flavor, acquisition and inference boundaries`);
      }
    }
  }
}
