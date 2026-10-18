import assert from "node:assert/strict";

export const GAUGE_SECTOR_MODEL_CHECKS = new Map();
export const GAUGE_SECTOR_MODEL_ANALYTICAL_SOURCES = new Map();
export const GAUGE_SECTOR_MODEL_ADMISSION = {
  "definitions": [
    [
      "phys:standard-model-sector-decomposition",
      "D-phys-standard-model-sector-decomposition"
    ]
  ],
  "formalDependencies": [
    [
      "physics:standard-model-standard-model-sector-decomposition",
      [
        "phys:standard-model",
        "phys:standard-model-sector-decomposition"
      ]
    ],
    [
      "physics:qcd-standard-model-sector-decomposition",
      [
        "phys:qcd",
        "phys:standard-model-sector-decomposition"
      ]
    ],
    [
      "physics:weak-gauge-currents-standard-model-sector-decomposition",
      [
        "phys:weak-gauge-currents",
        "phys:standard-model-sector-decomposition"
      ]
    ],
    [
      "physics:higgs-doublet-background-standard-model-sector-decomposition",
      [
        "phys:higgs-doublet-background",
        "phys:standard-model-sector-decomposition"
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
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
        ],
        "limit": "Revised August 2025; inspected PDF produced 1 December 2025. Section 9.1 including running coupling and mass prescriptions read; pages 1-3 visually checked. Support is restricted to the listed formal passages. The remaining review and its underlying experiments are not reviewed. The cited parent work, S. Navas et al., Physical Review D 110, 030001 (2024), plus the 2025 update, is not a distinct DOI for this chapter. No scattering data, loop integrals, lattice calculation or threshold-matching calculation is reproduced."
      }
    },
    {
      "id": "pdg2025-electroweak",
      "kind": "research-publication",
      "title": "Electroweak Model and Constraints on New Physics: Review of Particle Physics, 2025 update",
      "authors": [
        "J. de Blas",
        "S. Dittmaier",
        "R. Kogler"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-standard-model.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "Section 10.4.7, page 31: color multiplicities in fermion decay channels",
          "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses",
          "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary",
          "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis",
          "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization",
          "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries"
        ],
        "limit": "Revised November 2025; inspected PDF produced 15 April 2026. Pages 1-3 and 31 read and visually checked. Page 31 supplies the color convention only; its numerical predictions, global fits and cited experiments are not independently reviewed. The 2024 parent volume and this 2025 chapter update are distinct bibliographic scopes. No chapter-specific DOI is asserted. The weak-sector review additionally reads Section 10.2.4 on pages 9-11 and visually checks Equation 10.11-10.13 on page 10; pages 2-3 current and contact formulas were visually rechecked. Only these formal conventions are added: no global fit, quoted numerical mass/width or complete radiative/off-shell calculation is admitted."
      }
    },
    {
      "id": "pdg2025-quarks",
      "kind": "research-publication",
      "title": "Quarks: Particle Data Group summary table, 2025 update",
      "authors": [
        "Particle Data Group"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/tables/rpp2025-sum-quarks.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "Pages 2-3: top width, additional-quark searches and table notes"
        ],
        "limit": "All three table pages read; page 1 visually checked. PDF produced 30 May 2025. Classification and explicit mass conventions are used; numerical estimates, combinations and individual experiments are not independently reproduced. Search limits do not identify additional observed flavors."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-standard-model-sector-decomposition",
      "kind": "review-finding",
      "statement": "Adopt the local gauge algebra su(3)c plus su(2)L plus u(1)Y, conventionally written SU(3)c x SU(2)L x U(1)Y, with Q=T3+Y. For each of three generations, the pre-Higgs-background chiral assignments are Q_L=(u_L,dprime_L)~(3,2,1/6), u_R~(3,1,2/3), d_R~(3,1,-1/3), L_L=(nu_L,l_L)~(1,2,-1/2) and l_R~(1,1,-1). The single complex Higgs scalar is phi~(1,2,1/2). Each tuple gives the color representation, weak representation and declared hypercharge: 3 means the color fundamental, 2 the weak doublet and 1 a singlet. The gauge potentials are G_mu^a (a=1,...,8), W_mu^i (i=1,2,3) and B_mu, with couplings gs, g and gprime. This is a chosen interacting field specification; the scalar is a boson without being a gauge vector mediator.",
      "scope": "Declared minimal Standard Model sector and representation bookkeeping; no empirical selection or derivation of the field content.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supplies color representations and non-Abelian interactions within the existing reviewed extent; this is a field-definition premise, not a new observed population."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supplies chiral weak assignments, the PDG hypercharge convention, scalar doublet, tree-level field combinations and minimal neutrino boundary; the displayed Y is Y_PDG/2."
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "role": "supports",
          "note": "Supplies the adopted quark charges; the displayed hypercharges are derived in the explicitly declared normalization, not quoted from a representation table."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Here Y=Y_PDG/2: the reviewed electroweak chapter writes Q=T3+Y_PDG/2. The tuples use Y=Q-T3, the adopted quark charges +2/3 and -1/3, lepton charges 0 and -1, and weak doublet T3=+1/2,-1/2 or singlet T3=0. They state the converted convention, not a verbatim PDG tuple table. Right-handed entries denote right-handed fermion fields, not their left-handed charge conjugates; dprime is a weak-interaction basis component.",
        "Choose D_mu=partial_mu+i*gs*t^a*G_mu^a+i*g*T^i*W_mu^i+i*gprime*Y*B_mu, with generators in the representation of the field and zero action for a trivial factor. The Q_L multiplet is charged under all three factors; the Higgs doublet has weak and hypercharge interactions, and Yukawa terms couple the declared multiplets. Commuting gauge factors do not make the full interacting sectors dynamically isolated or independently generated systems.",
        "The 8+3+1 vector-potential species count follows from the chosen generator dimensions; it is neither a total physical-polarization count nor an observed particle population. Gauge redundancy, physical free excitations, unstable W/Z resonances, confined colored fields and detector candidates have different meanings. The four real components of phi do not add four gauge-vector species.",
        "With a supplied single-doublet background in the usual unitary-gauge tree convention, thetaW=arctan(gprime/g), A_mu=B_mu*cos(thetaW)+W_mu^3*sin(thetaW), Z_mu=-B_mu*sin(thetaW)+W_mu^3*cos(thetaW), and W_mu^plus/minus=(W_mu^1 minus/plus i*W_mu^2)/sqrt(2). These coupling-dependent combinations and the supplied Higgs background reorganize the chosen electroweak fields; they do not derive the original gauge factors, representation content or a cosmological field-formation sequence. No all-orders mixing or mass fit is supplied.",
        "This minimal renormalizable field content contains no nu_R. Its neutrino masslessness is the minimal-model boundary, while the separately specified neutrino mass/mixing alternatives change field, operator or symmetry assumptions. This card selects no Dirac/Majorana mechanism or ultraviolet origin.",
        "The local algebra, representations, chirality, three-generation repetition and coupling parameters are adopted model premises. No global gauge-group quotient, unified group, derivation of those assignments, independent measurement of the gauge group, universal carrier minimum, arising/maintenance law or SOMA phase order follows. The selected review passages supply formal conventions, not a new primary acquisition, global fit or executable verification."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:standard-model-sector-decomposition",
      "name": "Declared Standard Model sector decomposition",
      "kind": "definition",
      "description": "Adopt the local gauge algebra su(3)c plus su(2)L plus u(1)Y, conventionally written SU(3)c x SU(2)L x U(1)Y, with Q=T3+Y. For each of three generations, the pre-Higgs-background chiral assignments are Q_L=(u_L,dprime_L)~(3,2,1/6), u_R~(3,1,2/3), d_R~(3,1,-1/3), L_L=(nu_L,l_L)~(1,2,-1/2) and l_R~(1,1,-1). The single complex Higgs scalar is phi~(1,2,1/2). Each tuple gives the color representation, weak representation and declared hypercharge: 3 means the color fundamental, 2 the weak doublet and 1 a singlet. The gauge potentials are G_mu^a (a=1,...,8), W_mu^i (i=1,2,3) and B_mu, with couplings gs, g and gprime. This is a chosen interacting field specification; the scalar is a boson without being a gauge vector mediator.",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions"
        }
      ],
      "openObligations": [
        "Here Y=Y_PDG/2: the reviewed electroweak chapter writes Q=T3+Y_PDG/2. The tuples use Y=Q-T3, the adopted quark charges +2/3 and -1/3, lepton charges 0 and -1, and weak doublet T3=+1/2,-1/2 or singlet T3=0. They state the converted convention, not a verbatim PDG tuple table. Right-handed entries denote right-handed fermion fields, not their left-handed charge conjugates; dprime is a weak-interaction basis component.",
        "Choose D_mu=partial_mu+i*gs*t^a*G_mu^a+i*g*T^i*W_mu^i+i*gprime*Y*B_mu, with generators in the representation of the field and zero action for a trivial factor. The Q_L multiplet is charged under all three factors; the Higgs doublet has weak and hypercharge interactions, and Yukawa terms couple the declared multiplets. Commuting gauge factors do not make the full interacting sectors dynamically isolated or independently generated systems.",
        "The 8+3+1 vector-potential species count follows from the chosen generator dimensions; it is neither a total physical-polarization count nor an observed particle population. Gauge redundancy, physical free excitations, unstable W/Z resonances, confined colored fields and detector candidates have different meanings. The four real components of phi do not add four gauge-vector species.",
        "With a supplied single-doublet background in the usual unitary-gauge tree convention, thetaW=arctan(gprime/g), A_mu=B_mu*cos(thetaW)+W_mu^3*sin(thetaW), Z_mu=-B_mu*sin(thetaW)+W_mu^3*cos(thetaW), and W_mu^plus/minus=(W_mu^1 minus/plus i*W_mu^2)/sqrt(2). These coupling-dependent combinations and the supplied Higgs background reorganize the chosen electroweak fields; they do not derive the original gauge factors, representation content or a cosmological field-formation sequence. No all-orders mixing or mass fit is supplied.",
        "This minimal renormalizable field content contains no nu_R. Its neutrino masslessness is the minimal-model boundary, while the separately specified neutrino mass/mixing alternatives change field, operator or symmetry assumptions. This card selects no Dirac/Majorana mechanism or ultraviolet origin.",
        "The local algebra, representations, chirality, three-generation repetition and coupling parameters are adopted model premises. No global gauge-group quotient, unified group, derivation of those assignments, independent measurement of the gauge group, universal carrier minimum, arising/maintenance law or SOMA phase order follows. The selected review passages supply formal conventions, not a new primary acquisition, global fit or executable verification."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:standard-model-standard-model-sector-decomposition",
      "source": "phys:standard-model",
      "target": "phys:standard-model-sector-decomposition",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified Standard Model field content is made explicit as a chosen local gauge and representation decomposition; the link supplies no derivation or independent test of that choice.",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ]
    },
    {
      "id": "physics:qcd-standard-model-sector-decomposition",
      "source": "phys:qcd",
      "target": "phys:standard-model-sector-decomposition",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The reviewed QCD field definition supplies the color representation and shared quark-gluon interaction conventions, not a dynamically isolated strong subsystem or an observed generator count.",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ]
    },
    {
      "id": "physics:weak-gauge-currents-standard-model-sector-decomposition",
      "source": "phys:weak-gauge-currents",
      "target": "phys:standard-model-sector-decomposition",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The weak current definition supplies the chiral electroweak representation context; a formal representation assignment is not a separate measurement of chirality or generation number.",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ]
    },
    {
      "id": "physics:higgs-doublet-background-standard-model-sector-decomposition",
      "source": "phys:higgs-doublet-background",
      "target": "phys:standard-model-sector-decomposition",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The separately declared Higgs doublet and background fix the tree-level electroweak field-combination context; choosing that background does not generate the original gauge algebra or multiplet content.",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:standard-model-sector-decomposition",
      "role": "definition",
      "denotes": "The adopted local Standard Model gauge and chiral representation decomposition, with declared hypercharge normalization and coupled-sector boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-standard-model-sector-decomposition"
      ]
    }
  ]
};

/** Preserve the chosen Standard Model content and its converted hypercharge convention. */
export function validateGaugeSectorModelContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Gauge sector model ${kind} changed ${id}: preserve the declared representation and interaction boundaries`);
    }
  }
}
