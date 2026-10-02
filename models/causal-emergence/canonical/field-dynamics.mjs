import assert from "node:assert/strict";

export const FIELD_DYNAMICS_CHECKS = new Map([["field-mode-evolution-algebra", "C-phys-field-dynamics-arithmetic"]]);
export const FIELD_DYNAMICS_ANALYTICAL_SOURCES = new Map([["C-phys-field-dynamics-arithmetic", "field-dynamics-verifier"]]);
export const FIELD_DYNAMICS_ADMISSION = {
  "definitions": [
    [
      "phys:free-field-time-evolution",
      "D-phys-free-field-time-evolution"
    ]
  ],
  "formalDependencies": [
    [
      "physics:free-scalar-free-field-time-evolution",
      [
        "phys:free-scalar-quantization",
        "phys:free-field-time-evolution"
      ]
    ]
  ],
  "contexts": [
    [
      "field-dynamics-replay-context",
      "M-phys-field-dynamics-replay-context",
      [
        "field-dynamics-replay"
      ]
    ]
  ],
  "observations": [
    [
      "field-dynamics-arithmetic",
      "C-phys-field-dynamics-arithmetic",
      [
        "field-dynamics-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "free-field-time-evolution-field-dynamics-arithmetic",
      "free-field-time-evolution",
      "field-dynamics-arithmetic",
      "M-phys-field-dynamics-arithmetic",
      "interpretation-dependency"
    ],
    [
      "free-field-vacuum-field-dynamics-arithmetic",
      "free-field-vacuum",
      "field-dynamics-arithmetic",
      "M-phys-field-dynamics-arithmetic",
      "interpretation-dependency"
    ],
    [
      "vacuum-observable-variance-field-dynamics-arithmetic",
      "vacuum-observable-variance",
      "field-dynamics-arithmetic",
      "M-phys-field-dynamics-arithmetic",
      "interpretation-dependency"
    ],
    [
      "field-dynamics-replay-context-field-dynamics-arithmetic",
      "field-dynamics-replay-context",
      "field-dynamics-arithmetic",
      "M-phys-field-dynamics-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "field-dynamics-replay"
  ],
  "comparisonIds": [
    "field-dynamics-replay"
  ],
  "inferenceSources": [
    [
      "M-phys-field-dynamics-replay-context",
      [
        "tong-qft-free-fields",
        "field-dynamics-verifier"
      ]
    ],
    [
      "C-phys-field-dynamics-arithmetic",
      [
        "tong-qft-free-fields",
        "field-dynamics-verifier"
      ]
    ],
    [
      "M-phys-field-dynamics-arithmetic",
      [
        "tong-qft-free-fields",
        "field-dynamics-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "field-dynamics-replay",
      "field-dynamics-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "tong-qft-free-fields",
      "kind": "research-publication",
      "title": "Quantum Field Theory: Free Fields (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "Section 2.3 opening: vacuum and normal ordering",
          "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "Section 2.7 opening before 2.7.1: vacuum two-point function"
        ],
        "limit": "Author lecture notes for the 2006-2007 course, in the HTML edition dated 15 October 2021. Only the listed sections supply support; no complete interacting or gauge-field quantization is reviewed. Formula locators use section names because HTML and PDF equation numbering differ. The separately bound field-dynamics verifier checks finite formal oscillator-mode algebra under declared assumptions; no complete continuum or interacting construction, or experimental reproduction, is claimed."
      }
    },
    {
      "id": "field-dynamics-verifier",
      "kind": "executable-check",
      "title": "Finite free-mode evolution and stationary-vacuum algebra",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-field-dynamics.py",
      "sha256": "5c3810c51c4569725bab3c8a9be1d6b6ebfbca9c2c0ecb7df664aed43dc50cdc",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls"
        ],
        "limit": "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed. Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced. A symplectic squeeze preserves the canonical commutator but changes this Hamiltonian and vacuum covariance. Attenuation without added operators fails a closed canonical map; this does not exclude physical open-system channels with environmental or noise degrees of freedom. A one-mode unequal-time commutator proves no spacelike microcausality or signal-propagation theorem."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-free-field-time-evolution",
      "kind": "review-finding",
      "statement": "For the specified free real scalar field, H=(1/2)*integral d^3x [pi^2+(grad phi)^2+m^2*phi^2] generates O_H(t)=exp(iHt)*O_S*exp(-iHt). With no explicit operator time dependence, dO_H/dt=i[H,O_H], so dphi/dt=pi and dpi/dt=(Laplacian-m^2)*phi. A positive-frequency mode evolves as a_p(t)=exp(-i*E_p*t)*a_p, E_p=sqrt(p^2+m^2)>0. These are evolution laws within an already specified quantum model.",
      "scope": "Declared free real scalar evolution and a finite, positive-frequency oscillator witness in hbar=c=1 units.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a free real scalar field in flat spacetime with time-independent Hamiltonian and hbar=c=1. The displayed Heisenberg derivative applies to operators without additional explicit time dependence. It does not construct an interacting or gauge theory, specify Standard Model field content, or derive quantum algebra from a classical carrier.",
        "Continuum fields and equal-time commutators are operator-valued distributions, not pointwise finite operators. Use suitable smearing and operator domains; a finite periodic box and momentum cutoff may regulate the free mode expansion and its vacuum-energy sum. Integration by parts requires compatible periodic or vanishing boundary terms. No cutoff removal, rigorous continuum domain construction or regulator-independent interacting limit is checked here.",
        "An additive vacuum-energy constant or normal-ordering subtraction does not change the Heisenberg commutators. The finite mode uses H=omega*(N+1/2), whose vacuum energy is omega/2; this is not a gravitational vacuum-energy calculation or an assertion that continuum zero-point energy is finite.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ]
    },
    {
      "id": "M-phys-field-dynamics-replay-context",
      "kind": "method",
      "statement": "Adopt one free oscillator with unit mass, hbar=c=1, H=(p^2+omega^2*q^2)/2=omega*(N+1/2), [q,p]=i and a|0>=0. Check the coefficient map q(t)=c*q+s*p/omega, p(t)=-omega*s*q+c*p at omega=2 and 3/2 and phases (1,0),(0,1),(-1,0),(3/5,4/5),(-5/13,12/13). Use exact rational arithmetic and untruncated finite ladder words for vacuum moments.",
      "scope": "Declared free real scalar evolution and a finite, positive-frequency oscillator witness in hbar=c=1 units.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.7 opening before 2.7.1: vacuum two-point function",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "field-dynamics-verifier",
          "locator": "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed.",
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "An additive vacuum-energy constant or normal-ordering subtraction does not change the Heisenberg commutators. The finite mode uses H=omega*(N+1/2), whose vacuum energy is omega/2; this is not a gravitational vacuum-energy calculation or an assertion that continuum zero-point energy is finite."
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    },
    {
      "id": "C-phys-field-dynamics-arithmetic",
      "kind": "review-finding",
      "statement": "The ten declared mode maps preserve the formal canonical commutator, oscillator Hamiltonian and vacuum covariance; their derivatives satisfy the declared oscillator generator. Fifty composition and common-time-shift checks pass. For omega=2 and phase (3/5,4/5), <q(t)q(0)>=3/20-i/5 while <q(0)^2>=1/4 and [q(t),q(0)]=-2i/5. The adopted vacuum has <N>=0, <H>=1 and Var(H)=0. A squeeze preserves the commutator but changes the Hamiltonian and covariance; bare half-amplitude attenuation changes its commutator factor to 1/4.",
      "scope": "Declared free real scalar evolution and a finite, positive-frequency oscillator witness in hbar=c=1 units.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.7 opening before 2.7.1: vacuum two-point function",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "field-dynamics-verifier",
          "locator": "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls",
          "role": "supports",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        }
      ],
      "checkIds": [
        "field-mode-evolution-algebra"
      ],
      "limitations": [
        "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed.",
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "Stationary vacuum density and equal-time covariance do not require a time-independent unequal-time correlator. Vacuum occupation and energy variance are calculated from the adopted ladder vacuum, not inferred from covariance alone. Nonzero q or p variance is not a measured population, an energy source or repeated vacuum creation.",
        "A symplectic squeeze preserves the canonical commutator but changes this Hamiltonian and vacuum covariance. Attenuation without added operators fails a closed canonical map; this does not exclude physical open-system channels with environmental or noise degrees of freedom. A one-mode unequal-time commutator proves no spacelike microcausality or signal-propagation theorem.",
        "Continuum fields and equal-time commutators are operator-valued distributions, not pointwise finite operators. Use suitable smearing and operator domains; a finite periodic box and momentum cutoff may regulate the free mode expansion and its vacuum-energy sum. Integration by parts requires compatible periodic or vanishing boundary terms. No cutoff removal, rigorous continuum domain construction or regulator-independent interacting limit is checked here.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    },
    {
      "id": "M-phys-field-dynamics-arithmetic",
      "kind": "method",
      "statement": "Apply the declared free-mode evolution to the adopted ladder vacuum. Evaluate formal commutator coefficients, the quadratic Hamiltonian and covariance, inverse/group composition, the oscillator generator and ordered two-time correlations with exact rationals. Derive vacuum occupation and energy variance from finite ladder words; use squeezing and bare attenuation solely as discriminating algebraic controls.",
      "scope": "Declared free real scalar evolution and a finite, positive-frequency oscillator witness in hbar=c=1 units.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.7 opening before 2.7.1: vacuum two-point function",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        },
        {
          "sourceId": "field-dynamics-verifier",
          "locator": "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls",
          "role": "method",
          "note": "Supports the declared free-field convention or the separately scoped local mode calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed.",
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "Stationary vacuum density and equal-time covariance do not require a time-independent unequal-time correlator. Vacuum occupation and energy variance are calculated from the adopted ladder vacuum, not inferred from covariance alone. Nonzero q or p variance is not a measured population, an energy source or repeated vacuum creation.",
        "A symplectic squeeze preserves the canonical commutator but changes this Hamiltonian and vacuum covariance. Attenuation without added operators fails a closed canonical map; this does not exclude physical open-system channels with environmental or noise degrees of freedom. A one-mode unequal-time commutator proves no spacelike microcausality or signal-propagation theorem."
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:free-field-time-evolution",
      "name": "Free scalar Hamiltonian time evolution",
      "kind": "definition",
      "description": "For the specified free real scalar field, H=(1/2)*integral d^3x [pi^2+(grad phi)^2+m^2*phi^2] generates O_H(t)=exp(iHt)*O_S*exp(-iHt). With no explicit operator time dependence, dO_H/dt=i[H,O_H], so dphi/dt=pi and dpi/dt=(Laplacian-m^2)*phi. A positive-frequency mode evolves as a_p(t)=exp(-i*E_p*t)*a_p, E_p=sqrt(p^2+m^2)>0. These are evolution laws within an already specified quantum model.",
      "claimIds": [
        "D-phys-free-field-time-evolution"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions"
        }
      ],
      "openObligations": [
        "Continuum fields and equal-time commutators are operator-valued distributions, not pointwise finite operators. Use suitable smearing and operator domains; a finite periodic box and momentum cutoff may regulate the free mode expansion and its vacuum-energy sum. Integration by parts requires compatible periodic or vanishing boundary terms. No cutoff removal, rigorous continuum domain construction or regulator-independent interacting limit is checked here.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ]
    },
    {
      "id": "phys:field-dynamics-replay-context",
      "name": "Finite free-mode evolution preparation",
      "kind": "context",
      "description": "Adopt one free oscillator with unit mass, hbar=c=1, H=(p^2+omega^2*q^2)/2=omega*(N+1/2), [q,p]=i and a|0>=0. Check the coefficient map q(t)=c*q+s*p/omega, p(t)=-omega*s*q+c*p at omega=2 and 3/2 and phases (1,0),(0,1),(-1,0),(3/5,4/5),(-5/13,12/13). Use exact rational arithmetic and untruncated finite ladder words for vacuum moments.",
      "claimIds": [
        "M-phys-field-dynamics-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.7 opening before 2.7.1: vacuum two-point function"
        },
        {
          "sourceId": "field-dynamics-verifier",
          "locator": "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls"
        }
      ],
      "openObligations": [
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ]
    },
    {
      "id": "phys:field-dynamics-arithmetic",
      "name": "Stationary vacuum and unequal-time mode algebra",
      "kind": "scoped-process",
      "description": "The ten declared mode maps preserve the formal canonical commutator, oscillator Hamiltonian and vacuum covariance; their derivatives satisfy the declared oscillator generator. Fifty composition and common-time-shift checks pass. For omega=2 and phase (3/5,4/5), <q(t)q(0)>=3/20-i/5 while <q(0)^2>=1/4 and [q(t),q(0)]=-2i/5. The adopted vacuum has <N>=0, <H>=1 and Var(H)=0. A squeeze preserves the commutator but changes the Hamiltonian and covariance; bare half-amplitude attenuation changes its commutator factor to 1/4.",
      "claimIds": [
        "C-phys-field-dynamics-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.7 opening before 2.7.1: vacuum two-point function"
        },
        {
          "sourceId": "field-dynamics-verifier",
          "locator": "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls"
        }
      ],
      "openObligations": [
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:free-scalar-free-field-time-evolution",
      "source": "phys:free-scalar-quantization",
      "target": "phys:free-field-time-evolution",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared Hamiltonian evolution uses the already specified free scalar algebra, field content and state-space convention; it does not generate that quantum framework from a prior carrier.",
      "claimIds": [
        "D-phys-free-field-time-evolution"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-field-dynamics-arithmetic",
      "source": "phys:free-field-time-evolution",
      "target": "phys:field-dynamics-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The free-field Heisenberg convention supplies the oscillator evolution law being checked; the finite mode calculation is not a continuum evolution solver.",
      "claimIds": [
        "M-phys-field-dynamics-arithmetic"
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    },
    {
      "id": "physics:free-field-vacuum-field-dynamics-arithmetic",
      "source": "phys:free-field-vacuum",
      "target": "phys:field-dynamics-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted annihilation vacuum supplies the state condition for the local stationary-vacuum and ordered-correlation checks; stationarity is not ongoing vacuum creation.",
      "claimIds": [
        "M-phys-field-dynamics-arithmetic"
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    },
    {
      "id": "physics:vacuum-observable-variance-field-dynamics-arithmetic",
      "source": "phys:vacuum-observable-variance",
      "target": "phys:field-dynamics-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared oscillator observable and vacuum-moment conventions bound the variance and unequal-time calculation; commutator preservation alone does not establish vacuum stationarity.",
      "claimIds": [
        "M-phys-field-dynamics-arithmetic"
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    },
    {
      "id": "physics:field-dynamics-replay-context-field-dynamics-arithmetic",
      "source": "phys:field-dynamics-replay-context",
      "target": "phys:field-dynamics-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The exact positive-frequency mode preparation and rational phase inputs define this local calculation; they are not new experimental observations.",
      "claimIds": [
        "M-phys-field-dynamics-arithmetic"
      ],
      "contextIds": [
        "field-dynamics-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "field-dynamics-replay",
      "sourceId": "field-dynamics-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "One free positive-frequency oscillator mode under an adopted canonical algebra and vacuum",
      "preparation": "Adopt one free oscillator with unit mass, hbar=c=1, H=(p^2+omega^2*q^2)/2=omega*(N+1/2), [q,p]=i and a|0>=0. Check the coefficient map q(t)=c*q+s*p/omega, p(t)=-omega*s*q+c*p at omega=2 and 3/2 and phases (1,0),(0,1),(-1,0),(3/5,4/5),(-5/13,12/13). Use exact rational arithmetic and untruncated finite ladder words for vacuum moments.",
      "observable": "Formal commutator and Hamiltonian identities, vacuum moments and ordered two-time correlation",
      "finding": "The ten declared mode maps preserve the formal canonical commutator, oscillator Hamiltonian and vacuum covariance; their derivatives satisfy the declared oscillator generator. Fifty composition and common-time-shift checks pass. For omega=2 and phase (3/5,4/5), <q(t)q(0)>=3/20-i/5 while <q(0)^2>=1/4 and [q(t),q(0)]=-2i/5. The adopted vacuum has <N>=0, <H>=1 and Var(H)=0. A squeeze preserves the commutator but changes the Hamiltonian and covariance; bare half-amplitude attenuation changes its commutator factor to 1/4.",
      "limitations": [
        "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed.",
        "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
        "Stationary vacuum density and equal-time covariance do not require a time-independent unequal-time correlator. Vacuum occupation and energy variance are calculated from the adopted ladder vacuum, not inferred from covariance alone. Nonzero q or p variance is not a measured population, an energy source or repeated vacuum creation.",
        "A symplectic squeeze preserves the canonical commutator but changes this Hamiltonian and vacuum covariance. Attenuation without added operators fails a closed canonical map; this does not exclude physical open-system channels with environmental or noise degrees of freedom. A one-mode unequal-time commutator proves no spacelike microcausality or signal-propagation theorem.",
        "Continuum fields and equal-time commutators are operator-valued distributions, not pointwise finite operators. Use suitable smearing and operator domains; a finite periodic box and momentum cutoff may regulate the free mode expansion and its vacuum-energy sum. Integration by parts requires compatible periodic or vanishing boundary terms. No cutoff removal, rigorous continuum domain construction or regulator-independent interacting limit is checked here."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(), flow(), vacuum_word() and correlation(): exact rational positive-frequency oscillator flow, formal commutator and Hamiltonian identities, vacuum moments, common time shifts and unequal-time controls"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "A local calculation without publication metadata."
    }
  ],
  "comparisons": [
    {
      "id": "field-dynamics-replay",
      "candidate": "For the declared closed free mode, Hamiltonian evolution preserves the chosen vacuum while ordered unequal-time correlations can depend on the time difference.",
      "alternative": "A changing two-time correlation requires repeated particle creation, or commutator preservation alone proves that the chosen Hamiltonian and vacuum are stationary.",
      "discriminator": "Compare exact mode flow against a commutator-preserving squeeze and bare attenuation; evaluate ladder-vacuum occupation, energy variance and both equal-time and unequal-time moments.",
      "result": "conditional-support",
      "limit": "Two rational positive frequencies and five rational unit-circle phases give ten exact mode checks and fifty composition/common-shift checks. A phase pair denotes cos(omega*t), sin(omega*t); no rational elapsed time is assigned and no arbitrary-time numerical integration or continuum field evolution is reproduced.",
      "assumptions": [
        "The local oscillator has unit mass, positive omega, and an adopted infinite Fock representation with a|0>=0. The massless zero-frequency mode is excluded. Its 2 by 2 matrices act on coefficients of q and p, not on a finite-dimensional quantum state space; no finite matrix representation of [q,p]=i is claimed.",
        "Stationary vacuum density and equal-time covariance do not require a time-independent unequal-time correlator. Vacuum occupation and energy variance are calculated from the adopted ladder vacuum, not inferred from covariance alone. Nonzero q or p variance is not a measured population, an energy source or repeated vacuum creation.",
        "A symplectic squeeze preserves the canonical commutator but changes this Hamiltonian and vacuum covariance. Attenuation without added operators fails a closed canonical map; this does not exclude physical open-system channels with environmental or noise degrees of freedom. A one-mode unequal-time commutator proves no spacelike microcausality or signal-propagation theorem.",
        "Continuum fields and equal-time commutators are operator-valued distributions, not pointwise finite operators. Use suitable smearing and operator domains; a finite periodic box and momentum cutoff may regulate the free mode expansion and its vacuum-energy sum. Integration by parts requires compatible periodic or vanishing boundary terms. No cutoff removal, rigorous continuum domain construction or regulator-independent interacting limit is checked here.",
        "Real Hamiltonian time is not a renormalization scale, a Euclidean coordinate or a Monte Carlo iteration. No universal formation or maintenance dependency, parent weight, carrier-count minimum, physical vacuum substance or Level-0-to-quantum-field derivation follows from this scoped free-field construction."
      ],
      "sourceIds": [
        "tong-qft-free-fields",
        "field-dynamics-verifier"
      ],
      "claimIds": [
        "C-phys-field-dynamics-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:free-field-time-evolution",
      "role": "definition",
      "denotes": "Heisenberg time evolution within the specified free real scalar model, with declared distributional and boundary assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-free-field-time-evolution"
      ]
    },
    {
      "nodeId": "phys:field-dynamics-replay-context",
      "role": "model-context",
      "denotes": "An adopted infinite oscillator vacuum and a finite set of exact rational coefficient maps at positive frequencies and declared phases.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-field-dynamics-replay-context"
      ]
    },
    {
      "nodeId": "phys:field-dynamics-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The finite exact mode identities and counterexamples, conditional on the oscillator algebra and chosen vacuum; no field measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-field-dynamics-arithmetic"
      ]
    }
  ]
};

/** Preserve the adopted free-model scope and the finite check's local ownership. */
export function validateFieldDynamicsContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing field-dynamics ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Field-dynamics ${kind} changed ${id}.${key}: preserve free-mode and stationary-vacuum boundaries`);
    }
  }
}
