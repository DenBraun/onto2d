import assert from "node:assert/strict";

export const RG_FORMAL_CHECKS = new Map();
export const RG_FORMAL_ANALYTICAL_SOURCES = new Map();
export const RG_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:wilsonian-effective-action",
      "D-phys-wilsonian-effective-action"
    ],
    [
      "phys:renormalization-group-flow",
      "D-phys-renormalization-group-flow"
    ],
    [
      "phys:fixed-point-scaling-fields",
      "D-phys-fixed-point-scaling-fields"
    ],
    [
      "phys:gaussian-scaling-example",
      "D-phys-gaussian-scaling-example"
    ]
  ],
  "formalDependencies": [
    [
      "physics:wilsonian-effective-action-renormalization-group-flow",
      [
        "phys:wilsonian-effective-action",
        "phys:renormalization-group-flow"
      ]
    ],
    [
      "physics:renormalization-group-flow-fixed-point-scaling-fields",
      [
        "phys:renormalization-group-flow",
        "phys:fixed-point-scaling-fields"
      ]
    ],
    [
      "physics:fixed-point-scaling-fields-gaussian-scaling-example",
      [
        "phys:fixed-point-scaling-fields",
        "phys:gaussian-scaling-example"
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
      "id": "wilson-kogut1974-rg",
      "kind": "research-publication",
      "title": "The renormalization group and the epsilon expansion",
      "authors": [
        "Kenneth G. Wilson",
        "J. Kogut"
      ],
      "year": 1974,
      "doi": "10.1016/0370-1573(74)90023-4",
      "url": "https://www.researchgate.net/profile/John-Kogut/publication/255306347_The_renormalization_group_and_the_epsilon_expansion/links/5e53d4a3299bf18082de3b1a/The-renormalization-group-and-the-epsilon-expansion.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-theory-passages",
        "locators": [
          "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "Published pages 168-170, Section 12.3, fixed-point stability and domains: conditional universality within a specified attraction domain",
          "Published pages 172-176, Section 12.4, Equations 12.7-12.30: linearized local operators, scaling indices and the marginal higher-order qualification",
          "Published pages 192-193, Appendix, Equations A.39-A.45 and following paragraphs: Gaussian operator dimensions and redundant operators"
        ],
        "limit": "Reviewed the listed body passages in the author-uploaded publisher scan, not the entire 125-page article. Physics Reports 12(2), 75-199 (1974) and the DOI are confirmed by publisher/INSPIRE metadata; the scan issue heading instead prints 75-200. This published theory review supplies formal constructions and explicitly conditional examples, not a primary experiment. The graph uses exp(-S), ell and full scaling dimension Delta in place of the source's exp(H), t and d_m notation. No unreviewed numerical exponents, universal fixed-point existence theorem, or experimental universality claim is imported."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-wilsonian-effective-action",
      "kind": "review-finding",
      "statement": "For a well-defined regulated Euclidean real-scalar functional integral with ultraviolet momentum cutoff Lambda, split phi=phi_<+phi_> at Lambda_prime=Lambda/b with b>1. Define exp(-S_Lambda_prime[phi_<])=integral Dphi_> exp(-S_Lambda[phi_<+phi_>]), integrating only Lambda_prime<|p|<=Lambda. For sources supported below Lambda_prime, integrating the retained fields gives the same normalized low-mode generating functional as the original integral. Field-independent normalization factors cancel in that normalized functional.",
      "scope": "A formal integration within a supplied regulated scalar model; no measured coarse-graining process or universal microscopic action.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "supports",
          "note": "Section 3 explicitly integrates high momentum modes and retains low-momentum correlators. The displayed general functional identity declares Euclidean action sign and b rather than the source's factor two."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "role": "supports",
          "note": "Section 12.1 explains cutoff interactions and the associated physical scale; a continuum theory, where available, requires a separate limit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The field content, interaction, regulator, measure, boundary conditions and any needed infrared regulator must be supplied. The equality is an identity of that specified integral, not an existence or convergence theorem for every field theory.",
        "The result can contain infinitely many interactions and nonlocal momentum dependence. A local derivative expansion and a finite operator truncation need their own momentum range and error control; they are not consequences of discarding high modes alone.",
        "A Wilsonian action for retained modes is not the one-particle-irreducible effective action. Integrating out variables changes the description; it does not assert that physical constituents disappear or that microscopic information is uniquely reconstructible."
      ]
    },
    {
      "id": "D-phys-renormalization-group-flow",
      "kind": "review-finding",
      "statement": "After the shell step, use p_prime=b p, x_prime=x/b and a stated field normalization to restore the reference cutoff in dimensionless variables. Write the transformed action in dimensionless coupling coordinates g_i(ell), with ell=ln b and d g_i/d ell=F_i(g); increasing ell means a smaller physical cutoff Lambda_0 exp(-ell) and longer resolved lengths. Separately, a renormalized coupling g_R(mu) in a chosen subtraction scheme obeys mu d g_R/d mu=beta_R. The cutoff Lambda, subtraction scale mu and external physical momentum Q have distinct roles.",
      "scope": "Definitions of Wilsonian scale change and subtraction-scale running; no identification with physical time or a detector setting.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "supports",
          "note": "The source separates integration from momentum and field rescaling; field normalization is part of the construction."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 160-161, Section 12.1, Equations 12.1-12.3 and surrounding paragraphs: dimensionless interactions and decreasing physical cutoff",
          "role": "supports",
          "note": "Equation 12.1 uses dimensionless interaction flow while the physical cutoff is Lambda_0 exp(-t). Here ell replaces the source's t; beta_R is an explicitly declared subtraction-scale convention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "ell is a resolution parameter, not physical time, a duration, a cosmological history or an intervention on an observed system. A hard process momentum Q can motivate choosing mu near Q, but that choice does not identify their physical roles.",
        "Flow functions and coupling coordinates depend on regulator, normalization, operator basis and subtraction scheme. Wilsonian coefficients and subtraction-scheme couplings cannot be equated without a specified matching relation.",
        "If the same dimensionless coordinate is parametrized by mu=Lambda_0 exp(-ell), its derivative mu d/dmu is -d/dell. This sign relation alone does not equate F_i with a different scheme's beta_R. Consistent observables require corresponding parameter/operator transformations; a finite truncation can retain scale dependence."
      ]
    },
    {
      "id": "D-phys-fixed-point-scaling-fields",
      "kind": "review-finding",
      "statement": "For the declared infrared flow F(g), a fixed point g_* satisfies F_i(g_*)=0. Near it, d(delta g_i)/d ell=B_ij delta g_j+O(delta g^2), where B_ij=partial F_i/partial g_j at g_*. For an admitted eigen-direction with real eigenvalue y_a, its linear scaling field obeys u_a(ell)=exp(y_a ell)u_a(0). A nonredundant local operator of full fixed-point scaling dimension Delta_a coupled homogeneously in d dimensions has y_a=d-Delta_a. With ell increasing toward the infrared, y_a>0 is relevant, y_a<0 irrelevant and y_a=0 linearly marginal.",
      "scope": "A local linear classification in a specified theory space and fixed-point neighborhood; not a general global convergence theorem.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 172-176, Section 12.4, Equations 12.7-12.30: linearized local operators, scaling indices and the marginal higher-order qualification",
          "role": "supports",
          "note": "Equation 12.8 linearizes the flow; Equation 12.30 gives homogeneous perturbations proportional to exp[(d-d_m)t]. Its following paragraph requires higher order to classify d_m=d."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 168-170, Section 12.3, fixed-point stability and domains: conditional universality within a specified attraction domain",
          "role": "supports",
          "note": "Section 12.3 defines a domain by approach to a particular fixed point and makes stability depend on the permitted interaction space."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The displayed exponential applies to an eigen-direction in the linear regime. Operator mixing, non-diagonalizable blocks, redundant field redefinitions, symmetry restrictions and departures from the fixed-point neighborhood require explicit treatment; a complete diagonal basis is not assumed for arbitrary models. The displayed inequalities cover real eigenvalues; complex pairs need a real-part stability analysis outside this example.",
        "Delta_a is the full scaling dimension, including anomalous contributions, not automatically the engineering dimension. A marginal direction needs higher-order flow or an additional exact argument to distinguish marginally relevant, marginally irrelevant and exactly marginal behavior.",
        "An irrelevant perturbation decreases relative to the fixed point in this direction; its coefficient need not vanish at finite resolution or be negligible for every observable. Relevant does not mean more ontologically real, and marginal does not mean experimentally constant.",
        "A fixed point, its attraction domain and any associated universality class must be established for the selected action, symmetries and approximation. This classification neither ensures that every flow reaches a fixed point nor proves universal autonomous higher-level laws."
      ]
    },
    {
      "id": "D-phys-gaussian-scaling-example",
      "kind": "review-finding",
      "statement": "For the massless Gaussian scalar kinetic action S_*=(1/2)integral d^d x (partial phi)^2 with fixed kinetic normalization, x_prime=x/b and phi_prime(x_prime)=b^((d-2)/2)phi(b x_prime) keep that term invariant. Thus [phi]_engineering=(d-2)/2 and an operator containing n fields and r derivatives has engineering dimension Delta_eng=n(d-2)/2+r. In d=4 with phi->-phi symmetry, the monomials phi^2, phi^4 and phi^6 have dimensions 2, 4 and 6, giving engineering values y=2, 0 and -2 under the stated infrared convention.",
      "scope": "A finite formal power-counting example about a Gaussian scalar point; no fitted critical exponent, QCD fixed point or numerical replay.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 98-101, Section 3, Equations 3.30-3.41: Gaussian momentum-shell integration, field/momentum rescaling and transformed mass parameter",
          "role": "supports",
          "note": "The Gaussian shell/rescaling example keeps the quadratic momentum coefficient fixed and yields r_prime=4r for a factor-two step, consistent with the mass-squared engineering value y=2."
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 192-193, Appendix, Equations A.39-A.45 and following paragraphs: Gaussian operator dimensions and redundant operators",
          "role": "supports",
          "note": "The Appendix gives Gaussian canonical dimensions from fields and momenta, allows mixing into lower field orders, and warns about operators equivalent to zero."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A finite volume or another infrared prescription must handle the massless zero mode when defining the Gaussian integral. The displayed local scaling identity does not by itself make that zero-mode integral normalizable.",
        "These monomials illustrate engineering dimensions, not an assertion that unsubtracted cutoff monomials are unmixed eigenoperators. Shell contractions can generate lower-field terms; eigenoperator identification needs suitable subtractions, operator mixing and removal of redundant operators.",
        "The quartic value y=0 is only linear marginality; its nonlinear flow is not determined by power counting. At interacting fixed points, anomalous dimensions can change this classification. No scalar example supplies a quantitative QED/QCD running prediction or empirical proof of universality."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:wilsonian-effective-action",
      "name": "Regulated Wilsonian effective action",
      "kind": "definition",
      "description": "For a well-defined regulated Euclidean real-scalar functional integral with ultraviolet momentum cutoff Lambda, split phi=phi_<+phi_> at Lambda_prime=Lambda/b with b>1. Define exp(-S_Lambda_prime[phi_<])=integral Dphi_> exp(-S_Lambda[phi_<+phi_>]), integrating only Lambda_prime<|p|<=Lambda. For sources supported below Lambda_prime, integrating the retained fields gives the same normalized low-mode generating functional as the original integral. Field-independent normalization factors cancel in that normalized functional.",
      "claimIds": [
        "D-phys-wilsonian-effective-action"
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
        }
      ],
      "openObligations": [
        "The field content, interaction, regulator, measure, boundary conditions and any needed infrared regulator must be supplied. The equality is an identity of that specified integral, not an existence or convergence theorem for every field theory.",
        "The result can contain infinitely many interactions and nonlocal momentum dependence. A local derivative expansion and a finite operator truncation need their own momentum range and error control; they are not consequences of discarding high modes alone.",
        "A Wilsonian action for retained modes is not the one-particle-irreducible effective action. Integrating out variables changes the description; it does not assert that physical constituents disappear or that microscopic information is uniquely reconstructible."
      ]
    },
    {
      "id": "phys:renormalization-group-flow",
      "name": "Scale flow with declared infrared direction",
      "kind": "definition",
      "description": "After the shell step, use p_prime=b p, x_prime=x/b and a stated field normalization to restore the reference cutoff in dimensionless variables. Write the transformed action in dimensionless coupling coordinates g_i(ell), with ell=ln b and d g_i/d ell=F_i(g); increasing ell means a smaller physical cutoff Lambda_0 exp(-ell) and longer resolved lengths. Separately, a renormalized coupling g_R(mu) in a chosen subtraction scheme obeys mu d g_R/d mu=beta_R. The cutoff Lambda, subtraction scale mu and external physical momentum Q have distinct roles.",
      "claimIds": [
        "D-phys-renormalization-group-flow"
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
        }
      ],
      "openObligations": [
        "ell is a resolution parameter, not physical time, a duration, a cosmological history or an intervention on an observed system. A hard process momentum Q can motivate choosing mu near Q, but that choice does not identify their physical roles.",
        "Flow functions and coupling coordinates depend on regulator, normalization, operator basis and subtraction scheme. Wilsonian coefficients and subtraction-scheme couplings cannot be equated without a specified matching relation.",
        "If the same dimensionless coordinate is parametrized by mu=Lambda_0 exp(-ell), its derivative mu d/dmu is -d/dell. This sign relation alone does not equate F_i with a different scheme's beta_R. Consistent observables require corresponding parameter/operator transformations; a finite truncation can retain scale dependence."
      ]
    },
    {
      "id": "phys:fixed-point-scaling-fields",
      "name": "Local fixed-point scaling classification",
      "kind": "definition",
      "description": "For the declared infrared flow F(g), a fixed point g_* satisfies F_i(g_*)=0. Near it, d(delta g_i)/d ell=B_ij delta g_j+O(delta g^2), where B_ij=partial F_i/partial g_j at g_*. For an admitted eigen-direction with real eigenvalue y_a, its linear scaling field obeys u_a(ell)=exp(y_a ell)u_a(0). A nonredundant local operator of full fixed-point scaling dimension Delta_a coupled homogeneously in d dimensions has y_a=d-Delta_a. With ell increasing toward the infrared, y_a>0 is relevant, y_a<0 irrelevant and y_a=0 linearly marginal.",
      "claimIds": [
        "D-phys-fixed-point-scaling-fields"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 172-176, Section 12.4, Equations 12.7-12.30: linearized local operators, scaling indices and the marginal higher-order qualification"
        },
        {
          "sourceId": "wilson-kogut1974-rg",
          "locator": "Published pages 168-170, Section 12.3, fixed-point stability and domains: conditional universality within a specified attraction domain"
        }
      ],
      "openObligations": [
        "The displayed exponential applies to an eigen-direction in the linear regime. Operator mixing, non-diagonalizable blocks, redundant field redefinitions, symmetry restrictions and departures from the fixed-point neighborhood require explicit treatment; a complete diagonal basis is not assumed for arbitrary models. The displayed inequalities cover real eigenvalues; complex pairs need a real-part stability analysis outside this example.",
        "Delta_a is the full scaling dimension, including anomalous contributions, not automatically the engineering dimension. A marginal direction needs higher-order flow or an additional exact argument to distinguish marginally relevant, marginally irrelevant and exactly marginal behavior.",
        "An irrelevant perturbation decreases relative to the fixed point in this direction; its coefficient need not vanish at finite resolution or be negligible for every observable. Relevant does not mean more ontologically real, and marginal does not mean experimentally constant.",
        "A fixed point, its attraction domain and any associated universality class must be established for the selected action, symmetries and approximation. This classification neither ensures that every flow reaches a fixed point nor proves universal autonomous higher-level laws."
      ]
    },
    {
      "id": "phys:gaussian-scaling-example",
      "name": "Gaussian scalar engineering-dimension example",
      "kind": "definition",
      "description": "For the massless Gaussian scalar kinetic action S_*=(1/2)integral d^d x (partial phi)^2 with fixed kinetic normalization, x_prime=x/b and phi_prime(x_prime)=b^((d-2)/2)phi(b x_prime) keep that term invariant. Thus [phi]_engineering=(d-2)/2 and an operator containing n fields and r derivatives has engineering dimension Delta_eng=n(d-2)/2+r. In d=4 with phi->-phi symmetry, the monomials phi^2, phi^4 and phi^6 have dimensions 2, 4 and 6, giving engineering values y=2, 0 and -2 under the stated infrared convention.",
      "claimIds": [
        "D-phys-gaussian-scaling-example"
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
          "locator": "Published pages 192-193, Appendix, Equations A.39-A.45 and following paragraphs: Gaussian operator dimensions and redundant operators"
        }
      ],
      "openObligations": [
        "A finite volume or another infrared prescription must handle the massless zero mode when defining the Gaussian integral. The displayed local scaling identity does not by itself make that zero-mode integral normalizable.",
        "These monomials illustrate engineering dimensions, not an assertion that unsubtracted cutoff monomials are unmixed eigenoperators. Shell contractions can generate lower-field terms; eigenoperator identification needs suitable subtractions, operator mixing and removal of redundant operators.",
        "The quartic value y=0 is only linear marginality; its nonlinear flow is not determined by power counting. At interacting fixed points, anomalous dimensions can change this classification. No scalar example supplies a quantitative QED/QCD running prediction or empirical proof of universality."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:wilsonian-effective-action-renormalization-group-flow",
      "source": "phys:wilsonian-effective-action",
      "target": "phys:renormalization-group-flow",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The integration and declared rescaling define the flow of effective descriptions; this dependency is not a measured temporal mechanism.",
      "claimIds": [
        "D-phys-renormalization-group-flow"
      ]
    },
    {
      "id": "physics:renormalization-group-flow-fixed-point-scaling-fields",
      "source": "phys:renormalization-group-flow",
      "target": "phys:fixed-point-scaling-fields",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The stated infrared coordinate and coupling flow fix the sign convention for local stability and scaling dimensions.",
      "claimIds": [
        "D-phys-fixed-point-scaling-fields"
      ]
    },
    {
      "id": "physics:fixed-point-scaling-fields-gaussian-scaling-example",
      "source": "phys:fixed-point-scaling-fields",
      "target": "phys:gaussian-scaling-example",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The Gaussian power-counting example uses the declared infrared classification; it supplies no universal interacting-theory eigenbasis or observed fixed point.",
      "claimIds": [
        "D-phys-gaussian-scaling-example"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:wilsonian-effective-action",
      "role": "definition",
      "denotes": "An explicitly regulated integration over short-wavelength variables, retaining the normalized low-mode source functional.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-wilsonian-effective-action"
      ]
    },
    {
      "nodeId": "phys:renormalization-group-flow",
      "role": "definition",
      "denotes": "A dimensionless transformation of effective descriptions toward smaller physical cutoff, distinct from mu-running, external Q and elapsed time.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-renormalization-group-flow"
      ]
    },
    {
      "nodeId": "phys:fixed-point-scaling-fields",
      "role": "definition",
      "denotes": "The fixed point and linear scaling fields of a declared infrared flow, with full operator dimensions and explicit marginal and domain limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-fixed-point-scaling-fields"
      ]
    },
    {
      "nodeId": "phys:gaussian-scaling-example",
      "role": "definition",
      "denotes": "The explicitly normalized free-scalar rescaling and three finite engineering-dimension examples, with mixing and interacting-theory boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-gaussian-scaling-example"
      ]
    }
  ]
};

/** Preserve the regulator, infrared direction and bounded scaling classification. */
export function validateRgFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `RG formal ${kind} changed ${id}: preserve cutoff, flow direction and scaling limits`);
    }
  }
}
