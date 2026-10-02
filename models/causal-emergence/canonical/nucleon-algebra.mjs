import assert from "node:assert/strict";

export const NUCLEON_ALGEBRA_CHECKS = new Map([["nucleon-charge-color-algebra", "C-phys-nucleon-algebra"]]);
export const NUCLEON_ALGEBRA_ANALYTICAL_SOURCES = new Map([["C-phys-nucleon-algebra", "nucleon-algebra-verifier"]]);
export const NUCLEON_ALGEBRA_ADMISSION = {
  "definitions": [
    [
      "phys:nucleon-valence-numbers",
      "D-phys-nucleon-valence-numbers"
    ],
    [
      "phys:fundamental-color-singlet",
      "D-phys-fundamental-color-singlet"
    ],
    [
      "phys:nucleon-fock-expansion",
      "D-phys-nucleon-fock-expansion"
    ]
  ],
  "formalDependencies": [
    [
      "physics:quark-fields-nucleon-valence-numbers",
      [
        "phys:quark-fields",
        "phys:nucleon-valence-numbers"
      ]
    ],
    [
      "physics:qcd-fundamental-color-singlet",
      [
        "phys:qcd",
        "phys:fundamental-color-singlet"
      ]
    ],
    [
      "physics:qcd-nucleon-fock-expansion",
      [
        "phys:qcd",
        "phys:nucleon-fock-expansion"
      ]
    ],
    [
      "physics:nucleon-valence-numbers-nucleon-fock-expansion",
      [
        "phys:nucleon-valence-numbers",
        "phys:nucleon-fock-expansion"
      ]
    ],
    [
      "physics:fundamental-color-singlet-nucleon-fock-expansion",
      [
        "phys:fundamental-color-singlet",
        "phys:nucleon-fock-expansion"
      ]
    ]
  ],
  "contexts": [
    [
      "nucleon-algebra-context",
      "M-phys-nucleon-algebra-context",
      [
        "nucleon-algebra"
      ]
    ]
  ],
  "observations": [
    [
      "nucleon-algebra",
      "C-phys-nucleon-algebra",
      [
        "nucleon-algebra"
      ]
    ]
  ],
  "dependencies": [
    [
      "nucleon-valence-numbers-nucleon-algebra",
      "nucleon-valence-numbers",
      "nucleon-algebra",
      "M-phys-nucleon-algebra",
      "interpretation-dependency"
    ],
    [
      "fundamental-color-singlet-nucleon-algebra",
      "fundamental-color-singlet",
      "nucleon-algebra",
      "M-phys-nucleon-algebra",
      "interpretation-dependency"
    ],
    [
      "nucleon-fock-expansion-nucleon-algebra",
      "nucleon-fock-expansion",
      "nucleon-algebra",
      "M-phys-nucleon-algebra",
      "interpretation-dependency"
    ],
    [
      "nucleon-algebra-context-nucleon-algebra",
      "nucleon-algebra-context",
      "nucleon-algebra",
      "M-phys-nucleon-algebra",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "nucleon-algebra"
  ],
  "comparisonIds": [
    "nucleon-algebra"
  ],
  "inferenceSources": [
    [
      "M-phys-nucleon-algebra-context",
      [
        "pdg2025-quark-model",
        "brodsky1998-light-front",
        "nucleon-algebra-verifier"
      ]
    ],
    [
      "C-phys-nucleon-algebra",
      [
        "pdg2025-quark-model",
        "brodsky1998-light-front",
        "nucleon-algebra-verifier"
      ]
    ],
    [
      "M-phys-nucleon-algebra",
      [
        "pdg2025-quark-model",
        "brodsky1998-light-front",
        "nucleon-algebra-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "nucleon-algebra",
      "nucleon-algebra-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "pdg2025-quark-model",
      "kind": "research-publication",
      "title": "Quark Model: Review of Particle Physics, 2025 update",
      "authors": [
        "C. Amsler",
        "V. Crede",
        "T. DeGrand"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-quark-model.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-review-passages",
        "locators": [
          "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model",
          "Pages 3-6, Section 15.3, Table 15.2 lightest pseudoscalar/vector rows and Equation 15.3: light q-qbar octet plus singlet classification",
          "Pages 6 and 8-9, Equations 15.5-15.9 and 15.19-15.20: physical isoscalar mixing, basis conventions and limits of simple mass/transition relations"
        ],
        "limit": "Pages 1-3 and 13 were read, with page 13 visually checked for valence-charge and color-singlet conventions. This official review supplies scoped conventions, not primary experimental support or admission of its full spectrum, magnetic-moment or lattice results. Pages 13-15 were read and visually checked for the restricted light-baryon flavor and ground-state spin-space classification, including Equations 15.25-15.29a and the ground-state rows of Table 15.6. Excited-state assignments, dynamic models and precision spectra are not admitted by these passages. Selected meson classification and physical-isoscalar mixing passages on pages 3-6 and 8-9 were read; only lightest pseudoscalar/vector rows are admitted. Scalar/excited/exotic assignments, modern mass fits and an exact constituent census are outside this extension."
      }
    },
    {
      "id": "brodsky1998-light-front",
      "kind": "research-publication",
      "title": "Quantum Chromodynamics and Other Field Theories on the Light Cone",
      "authors": [
        "Stanley J. Brodsky",
        "Hans-Christian Pauli",
        "Stephen S. Pinsky"
      ],
      "year": 1998,
      "doi": "10.1016/S0370-1573(97)00089-6",
      "url": "https://arxiv.org/pdf/hep-ph/9705477v1",
      "path": null,
      "review": {
        "extent": "selected-author-theory-passages",
        "locators": [
          "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers"
        ],
        "limit": "Selected passages of the 1997 author v1 were read; page 99 and Equation 5.2 were visually checked. The arXiv record identifies Physics Reports 301, 299-486 (1998). This theoretical formalism is not an experimental constituent count; the other chapters, complete QCD solution and publisher bytes are not claimed reviewed."
      }
    },
    {
      "id": "nucleon-algebra-verifier",
      "kind": "executable-check",
      "title": "Exact nucleon charge and color algebra",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-nucleon-algebra.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction"
        ],
        "limit": "Exact rational occupation-label bookkeeping and a polynomial determinant identity only; no QCD eigenproblem, Fock amplitudes, empirical population, confinement, formation or lifetime inference."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-nucleon-valence-numbers",
      "kind": "review-finding",
      "statement": "In the declared strong-interaction nucleon sectors, net flavor means quarks minus antiquarks: proton (N_u,N_d)=(2,1), neutron (1,2), with zero other net flavors. With B=sum_f N_f/3 and Q/e=sum_f q_f*N_f, these labels give B=1 and charges +1 and 0. Adding a same-flavor quark-antiquark pair or gluons preserves these additive labels without preserving total basis-particle count.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ]
    },
    {
      "id": "D-phys-fundamental-color-singlet",
      "kind": "review-finding",
      "statement": "For three fundamental SU(3) color indices, the normalized antisymmetric tensor epsilon_abc/sqrt(6) is invariant because U_ai*U_bj*U_ck*epsilon_ijk=det(U)*epsilon_abc and det(U)=1. A nontrivial center element acts as z or z^2 on one or two fundamental factors, excluding a singlet there. Three is therefore a restricted representation-theoretic minimum, not a measured particle population or sufficient formation condition.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ]
    },
    {
      "id": "D-phys-nucleon-fock-expansion",
      "kind": "review-finding",
      "statement": "In the specified light-front QCD framework, a proton eigenstate is expanded in quark-gluon Fock sectors with the same global quantum numbers, including uud and uudg sectors. The complete state sums amplitudes over sectors; restricting to a three-quark component is a truncation. Basis occupations, net flavor, color representation dimension and observed particles are different quantities.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ]
    },
    {
      "id": "M-phys-nucleon-algebra-context",
      "kind": "method",
      "statement": "Use exact rational charge assignments and symbolic polynomials in nine independent matrix entries. Check pair/gluon charge preservation, the full epsilon determinant identity, its normalization and the center obstruction for one and two fundamental factors. No amplitudes or physical state probabilities are supplied.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "nucleon-algebra-verifier",
          "locator": "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    },
    {
      "id": "C-phys-nucleon-algebra",
      "kind": "review-finding",
      "statement": "The declared proton/neutron labels have charges +1/0 and baryon number 1; twelve pair insertions and two gluon insertions preserve their net labels while changing basis count. All 27 tensor components satisfy the determinant identity and the epsilon squared norm is 6. The first nonempty purely fundamental color-singlet tensor occurs at three factors within that restricted counting domain.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "nucleon-algebra-verifier",
          "locator": "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction",
          "role": "supports",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [
        "nucleon-charge-color-algebra"
      ],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    },
    {
      "id": "M-phys-nucleon-algebra",
      "kind": "method",
      "statement": "Apply the exact algebra only to the declared occupation labels and color tensors; preserve the difference between representation-level admissibility and realized particles. The Fock definition limits the interpretation, and its coefficients are not evaluated.",
      "scope": "Declared QCD occupation-basis labels, additive flavor charges and fundamental color representations; no empirical constituent census or bound-state solution.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        },
        {
          "sourceId": "nucleon-algebra-verifier",
          "locator": "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction",
          "role": "method",
          "note": "Supports the stated formal convention or exact local algebra within its reading and calculation limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:nucleon-valence-numbers",
      "name": "Nucleon valence quantum numbers",
      "kind": "definition",
      "description": "In the declared strong-interaction nucleon sectors, net flavor means quarks minus antiquarks: proton (N_u,N_d)=(2,1), neutron (1,2), with zero other net flavors. With B=sum_f N_f/3 and Q/e=sum_f q_f*N_f, these labels give B=1 and charges +1 and 0. Adding a same-flavor quark-antiquark pair or gluons preserves these additive labels without preserving total basis-particle count.",
      "claimIds": [
        "D-phys-nucleon-valence-numbers"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers"
        }
      ],
      "openObligations": [
        "Any later empirical or dynamical use requires its own preparation, observable and source support."
      ]
    },
    {
      "id": "phys:fundamental-color-singlet",
      "name": "Fundamental color-singlet tensor",
      "kind": "definition",
      "description": "For three fundamental SU(3) color indices, the normalized antisymmetric tensor epsilon_abc/sqrt(6) is invariant because U_ai*U_bj*U_ck*epsilon_ijk=det(U)*epsilon_abc and det(U)=1. A nontrivial center element acts as z or z^2 on one or two fundamental factors, excluding a singlet there. Three is therefore a restricted representation-theoretic minimum, not a measured particle population or sufficient formation condition.",
      "claimIds": [
        "D-phys-fundamental-color-singlet"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet"
        }
      ],
      "openObligations": [
        "Any later empirical or dynamical use requires its own preparation, observable and source support."
      ]
    },
    {
      "id": "phys:nucleon-fock-expansion",
      "name": "Nucleon Fock-sector representation",
      "kind": "definition",
      "description": "In the specified light-front QCD framework, a proton eigenstate is expanded in quark-gluon Fock sectors with the same global quantum numbers, including uud and uudg sectors. The complete state sums amplitudes over sectors; restricting to a three-quark component is a truncation. Basis occupations, net flavor, color representation dimension and observed particles are different quantities.",
      "claimIds": [
        "D-phys-nucleon-fock-expansion"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet"
        }
      ],
      "openObligations": [
        "Any later empirical or dynamical use requires its own preparation, observable and source support."
      ]
    },
    {
      "id": "phys:nucleon-algebra-context",
      "name": "Declared charge and color algebra check",
      "kind": "context",
      "description": "Use exact rational charge assignments and symbolic polynomials in nine independent matrix entries. Check pair/gluon charge preservation, the full epsilon determinant identity, its normalization and the center obstruction for one and two fundamental factors. No amplitudes or physical state probabilities are supplied.",
      "claimIds": [
        "M-phys-nucleon-algebra-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers"
        },
        {
          "sourceId": "nucleon-algebra-verifier",
          "locator": "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction"
        }
      ],
      "openObligations": [
        "Any later empirical or dynamical use requires its own preparation, observable and source support."
      ]
    },
    {
      "id": "phys:nucleon-algebra",
      "name": "Checked charge and color identities",
      "kind": "scoped-process",
      "description": "The declared proton/neutron labels have charges +1/0 and baryon number 1; twelve pair insertions and two gluon insertions preserve their net labels while changing basis count. All 27 tensor components satisfy the determinant identity and the epsilon squared norm is 6. The first nonempty purely fundamental color-singlet tensor occurs at three factors within that restricted counting domain.",
      "claimIds": [
        "C-phys-nucleon-algebra"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5 and Equation 15.25: baryon-number assignment, additional quark-antiquark pairs and the three-quark color singlet"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 5-7: constituent-quark approximation, variable particle number and truncation limits"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 pages 36-39, Section 3A, Equations 3.4-3.16 and Figure 2: Fock basis, regulated coupled equations and zero-mode caveat"
        },
        {
          "sourceId": "brodsky1998-light-front",
          "locator": "arXiv:hep-ph/9705477v1 page 99, Section 5A and Equation 5.2: proton expansion in sectors with the same global quantum numbers"
        },
        {
          "sourceId": "nucleon-algebra-verifier",
          "locator": "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction"
        }
      ],
      "openObligations": [
        "Any later empirical or dynamical use requires its own preparation, observable and source support."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:quark-fields-nucleon-valence-numbers",
      "source": "phys:quark-fields",
      "target": "phys:nucleon-valence-numbers",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Quark flavor charges specify the additive bookkeeping convention.",
      "claimIds": [
        "D-phys-nucleon-valence-numbers"
      ]
    },
    {
      "id": "physics:qcd-fundamental-color-singlet",
      "source": "phys:qcd",
      "target": "phys:fundamental-color-singlet",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen QCD color representation specifies the tensor-invariance question.",
      "claimIds": [
        "D-phys-fundamental-color-singlet"
      ]
    },
    {
      "id": "physics:qcd-nucleon-fock-expansion",
      "source": "phys:qcd",
      "target": "phys:nucleon-fock-expansion",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified QCD framework defines the interacting-state expansion.",
      "claimIds": [
        "D-phys-nucleon-fock-expansion"
      ]
    },
    {
      "id": "physics:nucleon-valence-numbers-nucleon-fock-expansion",
      "source": "phys:nucleon-valence-numbers",
      "target": "phys:nucleon-fock-expansion",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The expansion preserves global net-flavor labels across sectors with different occupation counts.",
      "claimIds": [
        "D-phys-nucleon-fock-expansion"
      ]
    },
    {
      "id": "physics:fundamental-color-singlet-nucleon-fock-expansion",
      "source": "phys:fundamental-color-singlet",
      "target": "phys:nucleon-fock-expansion",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Color invariance constrains sector combinations without determining their amplitudes or total occupation.",
      "claimIds": [
        "D-phys-nucleon-fock-expansion"
      ]
    },
    {
      "id": "physics:nucleon-valence-numbers-nucleon-algebra",
      "source": "phys:nucleon-valence-numbers",
      "target": "phys:nucleon-algebra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared additive labels are inputs to the exact bookkeeping check.",
      "claimIds": [
        "M-phys-nucleon-algebra"
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    },
    {
      "id": "physics:fundamental-color-singlet-nucleon-algebra",
      "source": "phys:fundamental-color-singlet",
      "target": "phys:nucleon-algebra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The color-tensor definition supplies the invariant identity and its restricted counting domain.",
      "claimIds": [
        "M-phys-nucleon-algebra"
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    },
    {
      "id": "physics:nucleon-fock-expansion-nucleon-algebra",
      "source": "phys:nucleon-fock-expansion",
      "target": "phys:nucleon-algebra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The Fock representation limits the interpretation of basis counts; its amplitudes are not calculated.",
      "claimIds": [
        "M-phys-nucleon-algebra"
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    },
    {
      "id": "physics:nucleon-algebra-context-nucleon-algebra",
      "source": "phys:nucleon-algebra-context",
      "target": "phys:nucleon-algebra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared local procedure supplies the exact algebraic result, not empirical formation evidence.",
      "claimIds": [
        "M-phys-nucleon-algebra"
      ],
      "contextIds": [
        "nucleon-algebra"
      ]
    }
  ],
  "studies": [
    {
      "id": "nucleon-algebra",
      "sourceId": "nucleon-algebra-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Formal nucleon charge and fundamental-color algebra",
      "preparation": "Use exact rational charge assignments and symbolic polynomials in nine independent matrix entries. Check pair/gluon charge preservation, the full epsilon determinant identity, its normalization and the center obstruction for one and two fundamental factors. No amplitudes or physical state probabilities are supplied.",
      "observable": "Exact rational additive labels and polynomial tensor invariance, with explicit non-dynamical scope.",
      "finding": "The declared proton/neutron labels have charges +1/0 and baryon number 1; twelve pair insertions and two gluon insertions preserve their net labels while changing basis count. All 27 tensor components satisfy the determinant identity and the epsilon squared norm is 6. The first nonempty purely fundamental color-singlet tensor occurs at three factors within that restricted counting domain.",
      "limitations": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ],
      "readExtent": "scoped-executable-replay",
      "reviewedLocators": [
        "verify(): exact additive charges, twelve pair and two gluon insertions, all 27 determinant-tensor polynomial identities and the SU(3) center obstruction"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "This is a local formal calculation using reviewed definitions; it is not a publication or experimental reanalysis."
    }
  ],
  "comparisons": [
    {
      "id": "nucleon-algebra",
      "candidate": "Net flavor and restricted color-singlet minimality are compatible with multiple occupation sectors.",
      "alternative": "The valence label or the three-dimensional color representation establishes exactly three observed constituents or a universal construction minimum.",
      "discriminator": "Apply the exact algebra only to the declared occupation labels and color tensors; preserve the difference between representation-level admissibility and realized particles. The Fock definition limits the interpretation, and its coefficients are not evaluated.",
      "result": "conditional-support",
      "limit": "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle.",
      "assumptions": [
        "Baryon number and net flavor are additive sector labels in the stated strong-interaction description. They do not specify a total quark, antiquark or gluon population, sector probabilities, a free-particle census or weak-decay stability.",
        "The three-factor minimum concerns nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors. It is not a minimum for arbitrary color representations, every hadron, or a graph construction rule. Color SU(3) and approximate flavor SU(3) are distinct.",
        "The Fock expansion is a representation with specified quantization, gauge, regulator and renormalization conventions. No coefficient, Hamiltonian eigenstate, parton distribution, mass, magnetic response or formation trajectory is computed here.",
        "The executable establishes exact algebra under declared definitions. It neither proves confinement nor shows that a color-invariant tensor is a dynamically realized or stable physical particle."
      ],
      "sourceIds": [
        "pdg2025-quark-model",
        "brodsky1998-light-front",
        "nucleon-algebra-verifier"
      ],
      "claimIds": [
        "C-phys-nucleon-algebra"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:nucleon-valence-numbers",
      "role": "definition",
      "denotes": "In the declared strong-interaction nucleon sectors, net flavor means quarks minus antiquarks: proton (N_u,N_d)=(2,1), neutron (1,2), with zero other net flavors. With B=sum_f N_f/3 and Q/e=sum_f q_f*N_f, these labels give B=1 and charges +1 and 0. Adding a same-flavor quark-antiquark pair or gluons preserves these additive labels without preserving total basis-particle count.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-nucleon-valence-numbers"
      ]
    },
    {
      "nodeId": "phys:fundamental-color-singlet",
      "role": "definition",
      "denotes": "For three fundamental SU(3) color indices, the normalized antisymmetric tensor epsilon_abc/sqrt(6) is invariant because U_ai*U_bj*U_ck*epsilon_ijk=det(U)*epsilon_abc and det(U)=1. A nontrivial center element acts as z or z^2 on one or two fundamental factors, excluding a singlet there. Three is therefore a restricted representation-theoretic minimum, not a measured particle population or sufficient formation condition.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-fundamental-color-singlet"
      ]
    },
    {
      "nodeId": "phys:nucleon-fock-expansion",
      "role": "definition",
      "denotes": "In the specified light-front QCD framework, a proton eigenstate is expanded in quark-gluon Fock sectors with the same global quantum numbers, including uud and uudg sectors. The complete state sums amplitudes over sectors; restricting to a three-quark component is a truncation. Basis occupations, net flavor, color representation dimension and observed particles are different quantities.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-nucleon-fock-expansion"
      ]
    },
    {
      "nodeId": "phys:nucleon-algebra-context",
      "role": "model-context",
      "denotes": "Use exact rational charge assignments and symbolic polynomials in nine independent matrix entries. Check pair/gluon charge preservation, the full epsilon determinant identity, its normalization and the center obstruction for one and two fundamental factors. No amplitudes or physical state probabilities are supplied.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-nucleon-algebra-context"
      ]
    },
    {
      "nodeId": "phys:nucleon-algebra",
      "role": "scoped-phenomenon",
      "denotes": "The declared proton/neutron labels have charges +1/0 and baryon number 1; twelve pair insertions and two gluon insertions preserve their net labels while changing basis count. All 27 tensor components satisfy the determinant identity and the epsilon squared norm is 6. The first nonempty purely fundamental color-singlet tensor occurs at three factors within that restricted counting domain.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-nucleon-algebra"
      ]
    }
  ]
};

/** Preserve the counting domain and distinguish formal algebra from physical realization. */
export function validateNucleonAlgebraContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing nucleon algebra ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Nucleon algebra ${kind} changed ${id}.${key}: preserve formal scope and counting domain`);
    }
  }
}
