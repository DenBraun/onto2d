import assert from "node:assert/strict";

export const GLUON_FORMAL_CHECKS = new Map();
export const GLUON_FORMAL_ANALYTICAL_SOURCES = new Map();
export const GLUON_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:gluon-self-coupling",
      "D-phys-gluon-self-coupling"
    ]
  ],
  "formalDependencies": [
    [
      "physics:qcd-gluon-self-coupling",
      [
        "phys:qcd",
        "phys:gluon-self-coupling"
      ]
    ],
    [
      "physics:gluon-fields-gluon-self-coupling",
      [
        "phys:gluon-fields",
        "phys:gluon-self-coupling"
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
      "id": "pdg2025-qcd",
      "kind": "research-publication",
      "title": "Quantum Chromodynamics: Review of Particle Physics, 2025 update",
      "authors": [
        "J. Huston",
        "K. Rabbertz",
        "G. Zanderighi"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-qcd.pdf",
      "path": null,
      "sha256": null
    },
    {
      "id": "pdg2025-gluon",
      "kind": "research-publication",
      "title": "g (gluon): Particle Data Group listing, 2025 update",
      "authors": [
        "Particle Data Group"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/listings/rpp2025-list-gluon.pdf",
      "path": null,
      "sha256": null
    },
    {
      "id": "creutz1980",
      "kind": "research-publication",
      "title": "Monte Carlo study of quantized SU(2) gauge theory",
      "authors": [
        "Michael Creutz"
      ],
      "year": 1980,
      "doi": "10.1103/PhysRevD.21.2308",
      "url": "https://doi.org/10.1103/PhysRevD.21.2308",
      "path": null,
      "sha256": null
    },
    {
      "id": "bali2005",
      "kind": "research-publication",
      "title": "Observation of String Breaking in QCD",
      "authors": [
        "Gunnar S. Bali",
        "Hartmut Neff",
        "Thomas Duessel",
        "Thomas Lippert",
        "Klaus Schilling",
        "SESAM Collaboration"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevD.71.114513",
      "url": "https://arxiv.org/abs/hep-lat/0505012v2",
      "path": null,
      "sha256": null
    },
    {
      "id": "durr2008",
      "kind": "research-publication",
      "title": "Ab-initio Determination of Light Hadron Masses",
      "authors": [
        "S. D\u00fcrr",
        "Z. Fodor",
        "J. Frison",
        "C. Hoelbling",
        "R. Hoffmann",
        "S. D. Katz",
        "S. Krieg",
        "T. Kurth",
        "L. Lellouch",
        "T. Lippert",
        "K. K. Szabo",
        "G. Vulvert"
      ],
      "year": 2008,
      "doi": "10.1126/science.1163233",
      "url": "https://arxiv.org/abs/0906.3599v1",
      "path": null,
      "sha256": null
    }
  ],
  "claims": [
    {
      "id": "D-phys-gluon",
      "kind": "review-finding",
      "statement": "Gluon fields are the eight adjoint color components of the QCD gauge field, with spin-one gauge-boson excitations. The non-Abelian field strength gives gluon self-interactions.",
      "scope": "QCD field definition; the interaction process and an observed jet are distinct records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-gluon",
          "locator": "Page 1: color octet, spin assignment, theoretical mass and reference-use notice",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions",
          "role": "limits",
          "note": "Defines the stated convention or delimits the reused model; no new acquisition or independent replay."
        },
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
          "role": "limits",
          "note": "Defines the stated convention or delimits the reused model; no new acquisition or independent replay."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
          "role": "limits",
          "note": "Defines the stated convention or delimits the reused model; no new acquisition or independent replay."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 1-6: two-plus-one-flavor QCD, three physical inputs, ensembles, extrapolation and spectrum interpretation",
          "role": "limits",
          "note": "Defines the stated convention or delimits the reused model; no new acquisition or independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Eight color components do not count eight constituents, polarization states or a minimum carrier group.",
        "The listing labels zero gluon mass as theoretical. It does not report direct observation of a free massless gluon or a pooled spin measurement.",
        "A gauge field is not identical to a particular propagation, exchange, hadronization or confinement process.",
        "The original process label does not make field existence conditional on universal ongoing self-organization. Gauge-sector differentiation (1.29) is retained as the chosen QCD field content, not a measured emergence event. The free-scalar construction under field dynamics (1.26) does not derive interacting QCD. Weights 0.4/0.6, necessary temporal arising or maintenance, one-carrier thresholds and SOMA process classification are excluded.",
        "Renormalization-scale evolution is not time evolution. Existing beta-function and collider records retain their matter content, perturbative range, PDF, unfolding and scale assumptions. Ultraviolet running does not by itself prove infrared confinement, real-time quark binding or every hadronization mechanism.",
        "The reused lattice examples compute different theories: Creutz uses pure SU(2) without sea quarks; Bali uses SU(3) with two degenerate sea quarks near the strange mass and external static sources; Durr uses calibrated isospin-symmetric two-plus-one-flavor SU(3) without QED. Their loop, mixing and hadron-spectrum results are not free-gluon masses or real-time creation histories. Existing finite-volume, continuum, fit and source-convention limits remain attached to those records."
      ]
    },
    {
      "id": "D-phys-gluon-self-coupling",
      "kind": "review-finding",
      "statement": "For adjoint index A=1,...,8, set K^A_mu_nu=partial_mu A^A_nu-partial_nu A^A_mu and B^A_mu_nu=f^{ABC} A^B_mu A^C_nu. The reviewed PDG convention is F=K-g_s B, so L_g=-K.K/4+(g_s/2) K.B-(g_s^2/4) B.B, with Lorentz and adjoint indices contracted. The cubic and quartic terms generate three- and four-gluon vertices proportional to g_s and g_s^2. With [t^A,t^B]=i f^{ABC}t^C and Tr(t^A t^B)=T_R delta^{AB}, fundamental SU(3) has C_F=4/3, C_A=3 and T_R=1/2.",
      "scope": "Classical QCD gauge-sector convention and its formal perturbative vertices; no event or vertex measurement.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Defines the stated convention or delimits the reused model; no new acquisition or independent replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The expansion specifies the gauge-sector terms, not the complete gauge-fixed quantum action, propagators, ghost sector, counterterms or an all-order amplitude. Momentum-space vertex signs also depend on Fourier and Feynman-rule conventions; none is silently assigned here.",
        "Adjoint color index, Lorentz component, spin/polarization and observed jet multiplicity are different labels. The theoretical zero mass is not a fitted free-particle mass; perturbative field notation supplies no observed asymptotic gluon population.",
        "A color-factor or spin fit tests its supplied partonic prediction, response and hadronization assumptions. It does not directly image a single vertex, identify every quantum number or derive confinement and universal self-organization."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:gluon-fields",
      "name": "Gluon fields",
      "kind": "definition",
      "description": "Gluon fields are the eight adjoint color components of the QCD gauge field, with spin-one gauge-boson excitations. The non-Abelian field strength gives gluon self-interactions.",
      "claimIds": [
        "D-phys-gluon"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-gluon",
          "locator": "Page 1: color octet, spin assignment, theoretical mass and reference-use notice"
        }
      ],
      "openObligations": [
        "Jet and DIS results keep their stated reconstruction, alternative models and perturbative inputs. Full detector/fit replay, general confinement and self-organization remain separate obligations; no free-gluon mass or universal arising/maintenance law is admitted."
      ]
    },
    {
      "id": "phys:gluon-self-coupling",
      "name": "Non-Abelian gluon self-coupling terms",
      "kind": "definition",
      "description": "For adjoint index A=1,...,8, set K^A_mu_nu=partial_mu A^A_nu-partial_nu A^A_mu and B^A_mu_nu=f^{ABC} A^B_mu A^C_nu. The reviewed PDG convention is F=K-g_s B, so L_g=-K.K/4+(g_s/2) K.B-(g_s^2/4) B.B, with Lorentz and adjoint indices contracted. The cubic and quartic terms generate three- and four-gluon vertices proportional to g_s and g_s^2. With [t^A,t^B]=i f^{ABC}t^C and Tr(t^A t^B)=T_R delta^{AB}, fundamental SU(3) has C_F=4/3, C_A=3 and T_R=1/2.",
      "claimIds": [
        "D-phys-gluon-self-coupling"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        }
      ],
      "openObligations": [
        "Complete amplitudes and physical process claims require their own gauge, regulator, approximation and experimental or computational evidence."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:qcd-gluon-self-coupling",
      "source": "phys:qcd",
      "target": "phys:gluon-self-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified gauge-sector Lagrangian supplies the interaction terms; it does not measure their temporal creation.",
      "claimIds": [
        "D-phys-gluon-self-coupling"
      ]
    },
    {
      "id": "physics:gluon-fields-gluon-self-coupling",
      "source": "phys:gluon-fields",
      "target": "phys:gluon-self-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Adjoint fields and the declared group structure define the vertex variables; this is not a physical maintenance or carrier-count relation.",
      "claimIds": [
        "D-phys-gluon-self-coupling"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:gluon-fields",
      "role": "definition",
      "denotes": "A specified theoretical concept, not an identified physical occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-gluon"
      ]
    },
    {
      "nodeId": "phys:gluon-self-coupling",
      "role": "definition",
      "denotes": "Specified gauge-field interaction terms, not an identified occurrence or an imaged vertex.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-gluon-self-coupling"
      ]
    }
  ]
};

const reusedLocators = {
  "pdg2025-qcd": [
    "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
    "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
  ],
  "pdg2025-gluon": [
    "Page 1: color octet, spin assignment, theoretical mass and reference-use notice"
  ],
  "creutz1980": [
    "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21"
  ],
  "bali2005": [
    "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65"
  ],
  "durr2008": [
    "Author report 0906.3599v1, pages 1-6: two-plus-one-flavor QCD, three physical inputs, ensembles, extrapolation and spectrum interpretation"
  ]
};

/** Keep formal vertices, model-specific computations and empirical interpretations distinct. */
export function validateGluonFormalContracts(context) {
  for (const [kind, records] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of records) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing gluon-formal ${kind}: ${id}`);
      if (kind === "sources") {
        for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value, `Gluon-formal source identity changed: ${id}.${key}`);
      } else assert.deepEqual(found, expected, `Gluon-formal ${kind} changed: ${id}`);
    }
  }
  for (const [id, locators] of Object.entries(reusedLocators)) {
    const reviewed = context.sources.get(id)?.review?.locators ?? [];
    for (const locator of locators) assert.ok(reviewed.includes(locator), `Gluon-formal source lost reviewed passage: ${id}: ${locator}`);
  }
}
