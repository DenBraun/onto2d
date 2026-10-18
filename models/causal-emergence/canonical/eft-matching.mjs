import assert from "node:assert/strict";

export const EFT_MATCHING_CHECKS = new Map();
export const EFT_MATCHING_ANALYTICAL_SOURCES = new Map();
export const EFT_MATCHING_ADMISSION = {
  "definitions": [
    [
      "phys:effective-operator-expansion",
      "D-phys-effective-operator-expansion"
    ],
    [
      "phys:threshold-matching",
      "D-phys-threshold-matching"
    ],
    [
      "phys:decoupling-validity",
      "D-phys-decoupling-validity"
    ]
  ],
  "formalDependencies": [
    [
      "physics:effective-operator-expansion-threshold-matching",
      [
        "phys:effective-operator-expansion",
        "phys:threshold-matching"
      ]
    ],
    [
      "physics:low-energy-weak-exchange-threshold-matching",
      [
        "phys:low-energy-weak-exchange",
        "phys:threshold-matching"
      ]
    ],
    [
      "physics:effective-operator-expansion-decoupling-validity",
      [
        "phys:effective-operator-expansion",
        "phys:decoupling-validity"
      ]
    ],
    [
      "physics:threshold-matching-decoupling-validity",
      [
        "phys:threshold-matching",
        "phys:decoupling-validity"
      ]
    ]
  ],
  "contexts": [],
  "observations": [],
  "dependencies": [],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "georgi1993-effective-field-theory",
      "kind": "research-publication",
      "title": "Effective Field Theory",
      "authors": [
        "Howard Georgi"
      ],
      "year": 1993,
      "doi": "10.1146/annurev.ns.43.120193.001233",
      "url": "https://members.ift.uam-csic.es/jmoreno/BSM/docs/georgi_effective_field_theory.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-author-review-formal-derivation",
        "locators": [
          "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy",
          "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling",
          "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion",
          "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions"
        ],
        "limit": "Read the complete indicated author-review pages 7-8, 16-19, 20-27 and 28-29; also read pages 5-6 for the matching overview and visually checked pages 7-8, 22-23 and 25-27. The 47-page HUTP-93/A003 author review is dated January 1993 and identifies the forthcoming Annual Review of Nuclear and Particle Science article; publisher metadata identifies volume 43, 209-252 (1993) and the stated DOI. It is a formal review with explicit matching derivations, not primary experimental evidence or an independent reading of the Appelquist-Carazzone proof. The publisher layout and the rest of the review are not independently reviewed. Historical neutrino statements, numerical bounds, model-building predictions and the speculative nonperturbative section are not admitted. The notation d below is operator mass dimension; it is not a literal reuse of the review's shifted dimension index."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-effective-operator-expansion",
      "kind": "review-finding",
      "statement": "For specified light fields and realized Lorentz/internal symmetries in four spacetime dimensions, choose a local operator basis and write L_EFT=L_(d<=4)+sum_(d>4,i) C_i^(d)(mu) O_i^(d)/M^(d-4). Here d is operator mass dimension, M is the heavy scale and the displayed C_i are dimensionless. At light scales E and masses small compared with M, a declared perturbative power counting orders amplitudes in E/M and couplings. With bounded coefficients and controlled loop/logarithmic corrections, finitely many operators contribute at a chosen order.",
      "scope": "A local relativistic EFT parametrization with its field content, symmetries, operator normalization, coefficient assumptions and approximation order supplied.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy",
          "role": "supports",
          "note": "The displayed d-dimensional basis notation makes the coefficient and perturbative power-counting assumptions explicit."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions",
          "role": "supports",
          "note": "Use only the structural dependence of allowed interactions on the specified light fields and realized symmetries; historical empirical statements on these pages are excluded."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Symmetries restrict allowed operators; they do not fix every coefficient or select a unique ultraviolet theory. Explicit symmetry breaking, field redefinitions and redundant operators must be handled consistently in the chosen basis. No particular complete operator list is supplied.",
        "The d<=4 sector retains the canonically renormalizable interactions and heavy threshold corrections to their parameters; canonical dimension here does not classify scaling eigenfields at an arbitrary interacting fixed point. Higher operator dimension alone is not a universal numerical error bound: enhanced coefficients, strong coupling, large logarithms or extra small scales can require a different power counting or resummation.",
        "An application must state the retained operator and loop orders and the first omitted contributions. This definition supplies no fitted coefficients, measured truncation error, all-orders convergence proof or validity at E comparable to M."
      ]
    },
    {
      "id": "D-phys-threshold-matching",
      "kind": "review-finding",
      "statement": "In the selected continuum convention use dimensional regularization with modified minimal subtraction (MSbar). At a matching scale mu_t of order M, determine EFT coefficients by equating renormalized full-theory and EFT light-particle amplitudes through the chosen momentum and loop orders, with compatible external-field and infrared conventions. At loop order n, subtract EFT contributions containing the lower-order matched coefficients from the full result; their common infrared physics cancels in a consistent matching calculation. The resulting C_i(mu_t) are boundary data; RG evolution below the threshold does not determine them without those data. A finite tree example uses J^mu=bar(e) gamma^mu (1-gamma5) nu_e and O6=J_mu^dagger J^mu, with L_eff,CC=-(G_F/sqrt(2)) O6=-g^2 O6/(8 M_W^2). Match at mu_t of order M_W for light external fermions with m_light^2 and |q^2| much smaller than M_W^2, retaining this dimension-six contact operator at tree level.",
      "scope": "Perturbative matching between a supplied heavy/light theory and its finite local low-energy description; no new numerical threshold calculation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling",
          "role": "supports",
          "note": "Use dimensional regularization with modified minimal subtraction as a declared continuum-EFT convention, not automatic removal of a heavy field from a full-theory beta function."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion",
          "role": "supports",
          "note": "The derivation matches light-particle physics, including lower-order EFT contributions in loop differences; no numerical matching calculation is supplied here."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization",
          "role": "supports",
          "note": "The electron-neutrino charged current has the displayed (1-gamma5), not P_L, normalization. Algebraically eliminating the massive W at tree level yields the stated negative contact coefficient; the low-momentum propagator expansion supplies the derivative order only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "If the ultraviolet theory is known, matching uses its supplied masses and couplings; otherwise coefficients require phenomenological constraints or remain undetermined. A beta function fixes scale evolution, not the missing integration constants or unknown ultraviolet physics.",
        "The matching scale, subtraction scheme, field normalization and operator basis are conventions that must be used consistently in coefficients and matrix elements. Finite-order residual scale dependence remains; individual Wilson coefficients are not scheme-independent observables.",
        "A tree expansion of a heavy propagator is a bounded leading example, not a complete loop matching calculation. For the selected weak-current example, expanding the scalar propagator denominator gives the next derivative dimension-eight term with relative order q^2/M_W^2. This is not a bound on the complete amplitude error: longitudinal/current-mass terms, additional channels and electroweak/QED loops require their stated operators and orders. Its tree Fermi relation is not a precision measurement or new fit.",
        "The exact heavy-field functional integral is generally nonlocal. A finite local expansion and the required light-field loop subtractions cannot be replaced by simply deleting heavy lines or Taylor-expanding an already integrated loop outside its region of validity."
      ]
    },
    {
      "id": "D-phys-decoupling-validity",
      "kind": "review-finding",
      "statement": "For light-particle processes below the heavy production thresholds, a consistently matched EFT can omit the heavy field as an explicit low-energy degree of freedom while retaining its virtual effects in local coefficients and renormalized light parameters. In a controlled expansion with light scales E much smaller than M and non-growing dimensionless matching coefficients, higher-dimensional contributions are suppressed by powers of E/M. This conditional suppression does not erase heavy-field effects in the relevant or marginal sector.",
      "scope": "The bounded decoupling interpretation of the declared local expansion and weak-contact example, rather than a universal heavy-mass theorem.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling",
          "role": "supports",
          "note": "Use dimensional regularization with modified minimal subtraction as a declared continuum-EFT convention, not automatic removal of a heavy field from a full-theory beta function."
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion",
          "role": "supports",
          "note": "The derivation matches light-particle physics, including lower-order EFT contributions in loop differences; no numerical matching calculation is supplied here."
        }
      ],
      "checkIds": [],
      "limitations": [
        "MSbar beta functions of the full theory do not automatically discard a massive field when mu passes its mass. One changes the field content and matches at the threshold before applying the lower-energy RG evolution.",
        "Taking a heavy mass large while its coupling also grows, including masses tied to symmetry breaking, need not satisfy the stated suppression assumptions. The review's top-loop discussion is a formal warning, not an admitted numerical Zbb calculation or independent experimental test of nondecoupling.",
        "Near a production threshold or resonance, or without the stated scale separation and power counting, the local truncation need not apply. Integrating out a heavy degree of freedom does not make the full theory physically disappear or create a sharp universal spatial cutoff.",
        "No new observed composite, stable carrier, time-directed formation process or universal minimal number of constituents follows from changing an effective description. Internal heavy propagation is an amplitude contribution, not a counted population of virtual particles."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:effective-operator-expansion",
      "name": "Scoped local effective-operator expansion",
      "kind": "definition",
      "description": "For specified light fields and realized Lorentz/internal symmetries in four spacetime dimensions, choose a local operator basis and write L_EFT=L_(d<=4)+sum_(d>4,i) C_i^(d)(mu) O_i^(d)/M^(d-4). Here d is operator mass dimension, M is the heavy scale and the displayed C_i are dimensionless. At light scales E and masses small compared with M, a declared perturbative power counting orders amplitudes in E/M and couplings. With bounded coefficients and controlled loop/logarithmic corrections, finitely many operators contribute at a chosen order.",
      "claimIds": [
        "D-phys-effective-operator-expansion"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 7-8, Section 1.1, Equations 1.1-1.3: operator tower, coefficient assumptions and finite-order accuracy"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 28-29, Section 4.1: light fields, realized gauge symmetry and allowed low-energy interactions"
        }
      ],
      "openObligations": [
        "Symmetries restrict allowed operators; they do not fix every coefficient or select a unique ultraviolet theory. Explicit symmetry breaking, field redefinitions and redundant operators must be handled consistently in the chosen basis. No particular complete operator list is supplied.",
        "The d<=4 sector retains the canonically renormalizable interactions and heavy threshold corrections to their parameters; canonical dimension here does not classify scaling eigenfields at an arbitrary interacting fixed point. Higher operator dimension alone is not a universal numerical error bound: enhanced coefficients, strong coupling, large logarithms or extra small scales can require a different power counting or resummation.",
        "An application must state the retained operator and loop orders and the first omitted contributions. This definition supplies no fitted coefficients, measured truncation error, all-orders convergence proof or validity at E comparable to M."
      ]
    },
    {
      "id": "phys:threshold-matching",
      "name": "Threshold matching and coefficient boundary data",
      "kind": "definition",
      "description": "In the selected continuum convention use dimensional regularization with modified minimal subtraction (MSbar). At a matching scale mu_t of order M, determine EFT coefficients by equating renormalized full-theory and EFT light-particle amplitudes through the chosen momentum and loop orders, with compatible external-field and infrared conventions. At loop order n, subtract EFT contributions containing the lower-order matched coefficients from the full result; their common infrared physics cancels in a consistent matching calculation. The resulting C_i(mu_t) are boundary data; RG evolution below the threshold does not determine them without those data. A finite tree example uses J^mu=bar(e) gamma^mu (1-gamma5) nu_e and O6=J_mu^dagger J^mu, with L_eff,CC=-(G_F/sqrt(2)) O6=-g^2 O6/(8 M_W^2). Match at mu_t of order M_W for light external fermions with m_light^2 and |q^2| much smaller than M_W^2, retaining this dimension-six contact operator at tree level.",
      "claimIds": [
        "D-phys-threshold-matching"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
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
        }
      ],
      "openObligations": [
        "If the ultraviolet theory is known, matching uses its supplied masses and couplings; otherwise coefficients require phenomenological constraints or remain undetermined. A beta function fixes scale evolution, not the missing integration constants or unknown ultraviolet physics.",
        "The matching scale, subtraction scheme, field normalization and operator basis are conventions that must be used consistently in coefficients and matrix elements. Finite-order residual scale dependence remains; individual Wilson coefficients are not scheme-independent observables.",
        "A tree expansion of a heavy propagator is a bounded leading example, not a complete loop matching calculation. For the selected weak-current example, expanding the scalar propagator denominator gives the next derivative dimension-eight term with relative order q^2/M_W^2. This is not a bound on the complete amplitude error: longitudinal/current-mass terms, additional channels and electroweak/QED loops require their stated operators and orders. Its tree Fermi relation is not a precision measurement or new fit.",
        "The exact heavy-field functional integral is generally nonlocal. A finite local expansion and the required light-field loop subtractions cannot be replaced by simply deleting heavy lines or Taylor-expanding an already integrated loop outside its region of validity."
      ]
    },
    {
      "id": "phys:decoupling-validity",
      "name": "Conditional heavy-field decoupling",
      "kind": "definition",
      "description": "For light-particle processes below the heavy production thresholds, a consistently matched EFT can omit the heavy field as an explicit low-energy degree of freedom while retaining its virtual effects in local coefficients and renormalized light parameters. In a controlled expansion with light scales E much smaller than M and non-growing dimensionless matching coefficients, higher-dimensional contributions are suppressed by powers of E/M. This conditional suppression does not erase heavy-field effects in the relevant or marginal sector.",
      "claimIds": [
        "D-phys-decoupling-validity"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 16-19, Sections 2.4-2.5: dimensional regularization, mass-independent subtraction and threshold decoupling"
        },
        {
          "sourceId": "georgi1993-effective-field-theory",
          "locator": "Author review HUTP-93/A003, pages 20-27, Section 3, Equations 3.15-3.34 and Figures 2-6: light-field matching, loop subtraction and finite local expansion"
        }
      ],
      "openObligations": [
        "MSbar beta functions of the full theory do not automatically discard a massive field when mu passes its mass. One changes the field content and matches at the threshold before applying the lower-energy RG evolution.",
        "Taking a heavy mass large while its coupling also grows, including masses tied to symmetry breaking, need not satisfy the stated suppression assumptions. The review's top-loop discussion is a formal warning, not an admitted numerical Zbb calculation or independent experimental test of nondecoupling.",
        "Near a production threshold or resonance, or without the stated scale separation and power counting, the local truncation need not apply. Integrating out a heavy degree of freedom does not make the full theory physically disappear or create a sharp universal spatial cutoff.",
        "No new observed composite, stable carrier, time-directed formation process or universal minimal number of constituents follows from changing an effective description. Internal heavy propagation is an amplitude contribution, not a counted population of virtual particles."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:effective-operator-expansion-threshold-matching",
      "source": "phys:effective-operator-expansion",
      "target": "phys:threshold-matching",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen local operator basis and normalization define which coefficient boundary conditions the matching calculation must determine.",
      "claimIds": [
        "D-phys-threshold-matching"
      ]
    },
    {
      "id": "physics:low-energy-weak-exchange-threshold-matching",
      "source": "phys:low-energy-weak-exchange",
      "target": "phys:threshold-matching",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing leading weak contact relation supplies one bounded tree matching example; its amplitude, current and precision limitations remain in force.",
      "claimIds": [
        "D-phys-threshold-matching"
      ]
    },
    {
      "id": "physics:effective-operator-expansion-decoupling-validity",
      "source": "phys:effective-operator-expansion",
      "target": "phys:decoupling-validity",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Higher-dimensional suppression uses the stated scale separation, coefficient assumptions and power counting, rather than operator labels alone.",
      "claimIds": [
        "D-phys-decoupling-validity"
      ]
    },
    {
      "id": "physics:threshold-matching-decoupling-validity",
      "source": "phys:threshold-matching",
      "target": "phys:decoupling-validity",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Removing explicit heavy fields retains matched threshold corrections and coefficient boundary data; a mass-independent beta function alone does not implement decoupling.",
      "claimIds": [
        "D-phys-decoupling-validity"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:effective-operator-expansion",
      "role": "definition",
      "denotes": "A local operator expansion and conditional power counting for specified light fields; no observed microscopic completion.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-effective-operator-expansion"
      ]
    },
    {
      "nodeId": "phys:threshold-matching",
      "role": "definition",
      "denotes": "Renormalized light-amplitude matching and the coefficient boundary input required in addition to an RG equation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-threshold-matching"
      ]
    },
    {
      "nodeId": "phys:decoupling-validity",
      "role": "definition",
      "denotes": "Conditional omission of explicit heavy degrees of freedom with their matched low-energy effects retained.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-decoupling-validity"
      ]
    }
  ]
};

/** Preserve operator scope, matching boundary data and conditional decoupling. */
export function validateEftMatchingContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `EFT matching ${kind} changed ${id}: preserve operator scope, boundary input and decoupling limits`);
    }
  }
}
