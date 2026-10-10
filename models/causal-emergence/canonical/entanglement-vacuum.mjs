import assert from "node:assert/strict";

export const ENTANGLEMENT_VACUUM_CHECKS = new Map();
export const ENTANGLEMENT_VACUUM_ANALYTICAL_SOURCES = new Map();
export const ENTANGLEMENT_VACUUM_ADMISSION = {
  "definitions": [
    [
      "phys:regulated-scalar-region-state",
      "D-phys-regulated-scalar-region-state"
    ]
  ],
  "formalDependencies": [
    [
      "physics:free-field-vacuum-regulated-scalar-region-state",
      [
        "phys:free-field-vacuum",
        "phys:regulated-scalar-region-state"
      ]
    ]
  ],
  "contexts": [
    [
      "srednicki1993-region-entropy-context",
      "M-phys-srednicki1993-region-entropy-context",
      [
        "srednicki1993-region-entropy"
      ]
    ]
  ],
  "observations": [
    [
      "srednicki1993-area-entropy",
      "C-phys-srednicki1993-area-entropy",
      [
        "srednicki1993-region-entropy"
      ]
    ]
  ],
  "dependencies": [
    [
      "regulated-scalar-region-state-srednicki1993-area-entropy",
      "regulated-scalar-region-state",
      "srednicki1993-area-entropy",
      "M-phys-srednicki1993-area-entropy",
      "interpretation-dependency"
    ],
    [
      "srednicki1993-region-entropy-context-srednicki1993-area-entropy",
      "srednicki1993-region-entropy-context",
      "srednicki1993-area-entropy",
      "M-phys-srednicki1993-area-entropy",
      "interpretation-dependency"
    ],
    [
      "bipartite-entanglement-srednicki1993-area-entropy",
      "bipartite-entanglement",
      "srednicki1993-area-entropy",
      "M-phys-srednicki1993-area-entropy",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "srednicki1993-region-entropy"
  ],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "srednicki1993-region-entropy",
      "kind": "research-publication",
      "title": "Entropy and Area",
      "authors": [
        "Mark Srednicki"
      ],
      "year": 1993,
      "doi": "10.1103/PhysRevLett.71.666",
      "url": "https://arxiv.org/pdf/hep-th/9303048v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-article",
        "locators": [
          "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
          "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
          "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations"
        ],
        "limit": "Read all ten author-v2 PDF pages, including references and Figure 1; visually checked Equations 1-22 and Figure 1. Version 2 is dated 20 March 1993; publisher metadata identifies PRL 71, 666-669 (2 August 1993). The published-layout PDF and numerical code/data were not obtained. The reported entropy calculation and fit are not independently reproduced; black-hole analogies and other-dimensional results are not admitted."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-regulated-scalar-region-state",
      "kind": "review-finding",
      "statement": "Use hbar=c=1 and H=(1/2) integral d^3x [pi^2+|grad phi|^2]. Expand in real spherical harmonics and discretize radius at j*a, j=1,...,N, with phi_(l,m,N+1)=0 at L=(N+1)a. Equation 18 defines the radial oscillator couplings. The state is the pure Gaussian ground state, with Omega=sqrt(K) for each positive oscillator matrix K. Split each partial wave into inside sites j<=n and outside sites j>n, with R=(n+1/2)a.",
      "scope": "The stated radially regulated 3+1-dimensional free massless real scalar vacuum and its inside/outside partition.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
          "role": "supports",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
          "role": "supports",
          "note": "Supports this regulated construction or its reported calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Each partial wave has N oscillator factors, each infinite-dimensional; the angular sum remains unbounded. This construction does not assert finite-qubit or arbitrary continuum/gauge-region factorization.",
        "The chosen sphere is a partition, not a new physical wall at R. The outer Dirichlet boundary and spacing a are part of the model; neither N nor n counts elementary particles."
      ]
    },
    {
      "id": "M-phys-srednicki1993-region-entropy-context",
      "kind": "method",
      "statement": "Trace the inside oscillators from the pure ground-state density operator. For Omega blocks A,B,C, the reduced Gaussian has beta=B^T A^-1 B/2 and gamma=C-beta. Diagonalization gives mode parameters xi_i and S_l=sum_i[-log(1-xi_i)-xi_i*log(xi_i)/(1-xi_i)]. Sum S=sum_l(2l+1)S_l; the large-l expressions in Equations 20-21 control convergence in three spatial dimensions.",
      "scope": "The stated radially regulated 3+1-dimensional free massless real scalar vacuum and its inside/outside partition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "S=-Tr(rho_out log rho_out) uses natural logarithms and is dimensionless. This is a reduced-state entropy, not a thermodynamic temperature or entropy of the full pure vacuum.",
        "The numerical matrices, partial-wave truncation/tail implementation and fit data are not reproduced. Equal inside/outside spectra for a pure state do not alone prove an area law."
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    },
    {
      "id": "C-phys-srednicki1993-area-entropy",
      "kind": "review-finding",
      "statement": "Srednicki reports S approximately 0.30(R/a)^2 for N=60 and 1<=n<=30, proportional to sphere area A=4*pi*R^2. At fixed n<=N/2, the reported N=20,40,60 results agree within 0.5% in the worst case. The nonzero reduced entropy of this declared pure state means it does not factorize across the chosen inside/outside partition.",
      "scope": "The stated radially regulated 3+1-dimensional free massless real scalar vacuum and its inside/outside partition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
          "role": "supports",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
          "role": "supports",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations",
          "role": "supports",
          "note": "Supports this regulated construction or its reported calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The coefficient is regulator-dependent: 0.30 multiplies R^2/a^2, not A/a^2. The finite-box comparison is not exact infrared independence; S falls near the outer wall and is zero when all N sites are traced.",
        "The criterion uses the pure state and specified tensor factors/trace, not an ordinary two-point correlation alone. It establishes no Bell violation, controllable signal, particle population, universal continuum entropy or temporal entanglement-creation mechanism.",
        "This is a publication-reported numerical result, not an experiment or local replay. No continuum-limit finite value, universal area coefficient or black-hole entropy identification is inferred."
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    },
    {
      "id": "M-phys-srednicki1993-area-entropy",
      "kind": "method",
      "statement": "The chosen free-vacuum ground state, regulated inside/outside factors and Gaussian partial trace condition the reported entropy. Pure-state nonfactorization interprets its positive value; the finite bipartite baseline does not supply a theorem for arbitrary continuum local algebras.",
      "scope": "The stated radially regulated 3+1-dimensional free massless real scalar vacuum and its inside/outside partition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations",
          "role": "method",
          "note": "Supports this regulated construction or its reported calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No two-point value, Bell dataset or field-creation history is substituted for this state/partition calculation."
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:regulated-scalar-region-state",
      "name": "Regulated scalar vacuum region partition",
      "kind": "definition",
      "description": "Use hbar=c=1 and H=(1/2) integral d^3x [pi^2+|grad phi|^2]. Expand in real spherical harmonics and discretize radius at j*a, j=1,...,N, with phi_(l,m,N+1)=0 at L=(N+1)a. Equation 18 defines the radial oscillator couplings. The state is the pure Gaussian ground state, with Omega=sqrt(K) for each positive oscillator matrix K. Split each partial wave into inside sites j<=n and outside sites j>n, with R=(n+1/2)a.",
      "claimIds": [
        "D-phys-regulated-scalar-region-state"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy"
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum"
        }
      ],
      "openObligations": [
        "Each partial wave has N oscillator factors, each infinite-dimensional; the angular sum remains unbounded. This construction does not assert finite-qubit or arbitrary continuum/gauge-region factorization.",
        "The chosen sphere is a partition, not a new physical wall at R. The outer Dirichlet boundary and spacing a are part of the model; neither N nor n counts elementary particles."
      ]
    },
    {
      "id": "phys:srednicki1993-region-entropy-context",
      "name": "Srednicki Gaussian partial-trace calculation",
      "kind": "context",
      "description": "Trace the inside oscillators from the pure ground-state density operator. For Omega blocks A,B,C, the reduced Gaussian has beta=B^T A^-1 B/2 and gamma=C-beta. Diagonalization gives mode parameters xi_i and S_l=sum_i[-log(1-xi_i)-xi_i*log(xi_i)/(1-xi_i)]. Sum S=sum_l(2l+1)S_l; the large-l expressions in Equations 20-21 control convergence in three spatial dimensions.",
      "claimIds": [
        "M-phys-srednicki1993-region-entropy-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy"
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum"
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations"
        }
      ],
      "openObligations": [
        "S=-Tr(rho_out log rho_out) uses natural logarithms and is dimensionless. This is a reduced-state entropy, not a thermodynamic temperature or entropy of the full pure vacuum.",
        "The numerical matrices, partial-wave truncation/tail implementation and fit data are not reproduced. Equal inside/outside spectra for a pure state do not alone prove an area law."
      ]
    },
    {
      "id": "phys:srednicki1993-area-entropy",
      "name": "Srednicki regulated vacuum area entropy",
      "kind": "scoped-process",
      "description": "Srednicki reports S approximately 0.30(R/a)^2 for N=60 and 1<=n<=30, proportional to sphere area A=4*pi*R^2. At fixed n<=N/2, the reported N=20,40,60 results agree within 0.5% in the worst case. The nonzero reduced entropy of this declared pure state means it does not factorize across the chosen inside/outside partition.",
      "claimIds": [
        "C-phys-srednicki1993-area-entropy"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy"
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum"
        },
        {
          "sourceId": "srednicki1993-region-entropy",
          "locator": "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations"
        }
      ],
      "openObligations": [
        "The coefficient is regulator-dependent: 0.30 multiplies R^2/a^2, not A/a^2. The finite-box comparison is not exact infrared independence; S falls near the outer wall and is zero when all N sites are traced.",
        "The criterion uses the pure state and specified tensor factors/trace, not an ordinary two-point correlation alone. It establishes no Bell violation, controllable signal, particle population, universal continuum entropy or temporal entanglement-creation mechanism.",
        "This is a publication-reported numerical result, not an experiment or local replay. No continuum-limit finite value, universal area coefficient or black-hole entropy identification is inferred."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:free-field-vacuum-regulated-scalar-region-state",
      "source": "phys:free-field-vacuum",
      "target": "phys:regulated-scalar-region-state",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The free-field ground-state convention is specialized by the stated Hamiltonian, radial regulator and boundary; it supplies no generic continuum subsystem factorization.",
      "claimIds": [
        "D-phys-regulated-scalar-region-state"
      ]
    },
    {
      "id": "physics:regulated-scalar-region-state-srednicki1993-area-entropy",
      "source": "phys:regulated-scalar-region-state",
      "target": "phys:srednicki1993-area-entropy",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The regulated pure state and explicit inside/outside factors define which degrees of freedom are traced.",
      "claimIds": [
        "M-phys-srednicki1993-area-entropy"
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    },
    {
      "id": "physics:srednicki1993-region-entropy-context-srednicki1993-area-entropy",
      "source": "phys:srednicki1993-region-entropy-context",
      "target": "phys:srednicki1993-area-entropy",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared Gaussian reduction and partial-wave entropy calculation produce the reported numerical result.",
      "claimIds": [
        "M-phys-srednicki1993-area-entropy"
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    },
    {
      "id": "physics:bipartite-entanglement-srednicki1993-area-entropy",
      "source": "phys:bipartite-entanglement",
      "target": "phys:srednicki1993-area-entropy",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The pure-state factorization criterion is instantiated for the declared oscillator factors; the finite-state baseline alone is not a continuum-region factorization theorem.",
      "claimIds": [
        "M-phys-srednicki1993-area-entropy"
      ],
      "contextIds": [
        "srednicki1993-region-entropy"
      ]
    }
  ],
  "studies": [
    {
      "id": "srednicki1993-region-entropy",
      "sourceId": "srednicki1993-region-entropy",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.71.666",
      "journal": "Physical Review Letters",
      "volume": "71",
      "issue": "5",
      "pages": "666-669",
      "system": "Radially regulated massless real scalar field in three spatial dimensions",
      "preparation": "Choose the pure Gaussian ground state, spacing a, outer boundary L=(N+1)a and inside sites j<=n; apply the stated partial trace and angular-mode sum.",
      "observable": "Dimensionless von Neumann entropy of the outside reduced state",
      "finding": "Srednicki reports S approximately 0.30(R/a)^2 for N=60 and 1<=n<=30, proportional to sphere area A=4*pi*R^2. At fixed n<=N/2, the reported N=20,40,60 results agree within 0.5% in the worst case. The nonzero reduced entropy of this declared pure state means it does not factorize across the chosen inside/outside partition.",
      "limitations": [
        "The coefficient is regulator-dependent: 0.30 multiplies R^2/a^2, not A/a^2. The finite-box comparison is not exact infrared independence; S falls near the outer wall and is zero when all N sites are traced.",
        "The criterion uses the pure state and specified tensor factors/trace, not an ordinary two-point correlation alone. It establishes no Bell violation, controllable signal, particle population, universal continuum entropy or temporal entanglement-creation mechanism.",
        "This is a publication-reported numerical result, not an experiment or local replay. No continuum-limit finite value, universal area coefficient or black-hole entropy identification is inferred."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v2, printed pages 1-4 (PDF 3-6), Equations 1-13; printed page 7, reference 1: pure Gaussian state, partial trace, reduced spectrum and entropy",
        "Author v2, printed pages 4-5 (PDF 6-7), Equations 14-21: massless scalar partial waves, radial regulator, outer boundary and convergent entropy sum",
        "Author v2, printed pages 5-6 (PDF 7-8), Equation 22; printed page 8, Figure 1: numerical area scaling, finite-box comparisons and limitations"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.71.666",
      "correctionCheck": "Checked author v2 and publisher metadata; v2 replaces the withdrawn v1 and adds a reference/corrects minor typos. No exhaustive later-correction census."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:regulated-scalar-region-state",
      "role": "definition",
      "denotes": "The specified massless scalar ground state, radial regulator and inside/outside oscillator factors.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-regulated-scalar-region-state"
      ]
    },
    {
      "nodeId": "phys:srednicki1993-region-entropy-context",
      "role": "model-context",
      "denotes": "The declared reduced-state spectrum, entropy functional and convergent partial-wave sum.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-srednicki1993-region-entropy-context"
      ]
    },
    {
      "nodeId": "phys:srednicki1993-area-entropy",
      "role": "scoped-phenomenon",
      "denotes": "The reported cutoff-dependent reduced entropy and conditional nonfactorization of a pure vacuum state.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-srednicki1993-area-entropy"
      ]
    }
  ]
};

/** Preserve the regulated state, explicit partial trace and publication-only area result. */
export function validateEntanglementVacuumContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing vacuum-entanglement ${kind}: ${id}`);
      assert.deepEqual(actual, expected, `Vacuum-entanglement ${kind} changed: ${id}`);
    }
  }
}
