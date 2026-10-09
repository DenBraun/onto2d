import assert from "node:assert/strict";

export const LEPTON_FORMAL_CHECKS = new Map();
export const LEPTON_FORMAL_ANALYTICAL_SOURCES = new Map();
export const LEPTON_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:lepton-charge-flavor",
      "D-phys-lepton-charge-flavor"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-lepton-charge-flavor",
      [
        "phys:lepton-fields",
        "phys:lepton-charge-flavor"
      ]
    ],
    [
      "physics:weak-gauge-currents-lepton-charge-flavor",
      [
        "phys:weak-gauge-currents",
        "phys:lepton-charge-flavor"
      ]
    ],
    [
      "physics:neutrino-flavor-mixing-lepton-charge-flavor",
      [
        "phys:neutrino-flavor-mixing",
        "phys:lepton-charge-flavor"
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
      "id": "tong-qft-dirac-spinors",
      "kind": "research-publication",
      "title": "Quantum Field Theory: The Dirac Equation (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-passages",
        "locators": [
          "Sections 4.4-4.4.2: Weyl components, Dirac mass coupling and chirality projectors",
          "Sections 4.7.1-4.7.2: massive and massless plane-wave spinors and helicity"
        ],
        "limit": "Read only Sections 4.4-4.4.2 and 4.7.1-4.7.2 in the HTML edition generated 15 October 2021, from the Cambridge 2006-2007 course notes. These passages define representation components, their mass coupling and the helicity operator; no quantization, interaction calculation or experiment is newly admitted. Tong uses the opposite gamma5 sign to the PDG left-projector convention. The graph does not identify his +/- projector names with PDG left/right signs."
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
      "sha256": null
    },
    {
      "id": "pdg2025-leptons",
      "kind": "research-publication",
      "title": "Leptons: Particle Data Group summary table, 2025 update",
      "authors": [
        "Particle Data Group"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/tables/rpp2025-sum-leptons.pdf",
      "path": null,
      "sha256": null
    },
    {
      "id": "pdg2025-neutrino-mixing",
      "kind": "research-publication",
      "title": "Neutrino Masses, Mixing, and Oscillations: Review of Particle Physics, 2025 update",
      "authors": [
        "M. C. Gonzalez-Garcia",
        "R. Wendell"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf",
      "path": null,
      "sha256": null
    },
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
      "sha256": null
    },
    {
      "id": "bethe1947",
      "kind": "research-publication",
      "title": "The Electromagnetic Shift of Energy Levels",
      "authors": [
        "H. A. Bethe"
      ],
      "year": 1947,
      "doi": "10.1103/PhysRev.72.339",
      "url": "https://doi.org/10.1103/PhysRev.72.339",
      "path": null,
      "sha256": null
    }
  ],
  "claims": [
    {
      "id": "D-phys-lepton",
      "kind": "review-finding",
      "statement": "Lepton fields are color singlets with spin one half. Their electroweak specification distinguishes left-handed doublets, charged right-handed singlets, charged leptons and neutrinos.",
      "scope": "Standard Model field classification, with an explicit boundary for neutrino-mass extensions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.4.7, page 31: color multiplicities in fermion decay channels",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: electron, muon and tau spin and lifetime entries",
          "role": "limits",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.4-4.4.2: Weyl components, Dirac mass coupling and chirality projectors",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.7.1-4.7.2: massive and massless plane-wave spinors and helicity",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "limits",
          "note": "This specific source delimits the classification, scattering or bound-electron interpretation; no new measured result or independent replay is inferred."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A color-singlet lepton has no direct QCD color coupling in the declared model. This does not exclude electromagnetic or weak interactions with hadronic matter: the admitted MAMI electron-proton scattering is a specific example, with its own acceptance, radiation and fitted-normalization conditions.",
        "Muon and tau lifetimes are finite. An electron lifetime lower bound applies to its searched channel and statistical/response assumptions; it is not a measured infinite lifetime. No species result establishes a universal lifetime for all leptons.",
        "A field or flavor label is not a permanent classical identity across propagation and interactions. Chirality is distinct from massive-particle helicity; neutrino flavor/mass labels require their separately stated extension and evidence.",
        "The ordinary atomic example is an electron in the specified electromagnetic hydrogen bound-state description. The admitted hydrogen separation and approximate radiative model do not establish that all leptons build ordinary atoms, exclude other bound systems or reconstruct atom formation.",
        "Quantization, gauge representation and renormalizable interactions do not prove stable individual carriers. The original 0.7/0.3 weights, necessary arising/maintenance, one-carrier minima and SOMA object classification have no scientific admission."
      ]
    },
    {
      "id": "D-phys-lepton-charge-flavor",
      "kind": "review-finding",
      "statement": "With e>0 the positron charge, the charged species e-, mu- and tau- have charge -e and their antiparticles have +e; the active neutrino fields are electrically neutral in the declared electroweak model. Left/right chirality labels field representation components; helicity is spin projected along momentum and is not the same label for a massive lepton. Charged-lepton mass-basis species and charged-current neutrino flavor labels must be distinguished from the neutrino propagation mass basis.",
      "scope": "Declared charged-lepton charge and spinor conventions, with a separately specified neutrino flavor/mass extension.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports this formal convention or stated boundary; no new measured parameter or experimental reproduction."
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: charged-lepton and antiparticle labels, charge-conjugate muon modes and spin assignments",
          "role": "supports",
          "note": "Supports this formal convention or stated boundary; no new measured parameter or experimental reproduction."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.4-4.4.2: Weyl components, Dirac mass coupling and chirality projectors",
          "role": "supports",
          "note": "Supports this formal convention or stated boundary; no new measured parameter or experimental reproduction."
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.7.1-4.7.2: massive and massless plane-wave spinors and helicity",
          "role": "supports",
          "note": "Supports this formal convention or stated boundary; no new measured parameter or experimental reproduction."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports this formal convention or stated boundary; no new measured parameter or experimental reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These charge, spinor and field assignments specify a model, not independent measurements of every species, a numerical charge-conjugation test or universal lepton stability. Massive Dirac fields contain both chiral components; a chiral interaction does not assert an exactly polarized massive beam. No Tong/PDG gamma5 sign identification is made.",
        "Minimal massless Standard Model fields do not generate the separately declared neutrino mass/mixing extension. A flavor readout does not track persistent flavor in flight. The admitted oscillation interpretation does not determine absolute masses, require each individual mass to be nonzero, decide Dirac versus Majorana character or prove separate antiparticle species for a Majorana field.",
        "Representation components, particle species and detector candidates are different counting domains. No universal one-carrier minimum, parent weight, necessary arising/maintenance process or SOMA objecthood follows."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:lepton-fields",
      "name": "Lepton fields",
      "kind": "definition",
      "description": "Lepton fields are color singlets with spin one half. Their electroweak specification distinguishes left-handed doublets, charged right-handed singlets, charged leptons and neutrinos.",
      "claimIds": [
        "D-phys-lepton"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.4.7, page 31: color multiplicities in fermion decay channels"
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: electron, muon and tau spin and lifetime entries"
        }
      ],
      "openObligations": [
        "Lepton labels do not specify universal stability or persistent flavor. Species-specific scattering, decay limits, neutrino inference and electron bound-state descriptions retain their declared preparation and model boundaries."
      ]
    },
    {
      "id": "phys:lepton-charge-flavor",
      "name": "Lepton charge, chirality and flavor labels",
      "kind": "definition",
      "description": "With e>0 the positron charge, the charged species e-, mu- and tau- have charge -e and their antiparticles have +e; the active neutrino fields are electrically neutral in the declared electroweak model. Left/right chirality labels field representation components; helicity is spin projected along momentum and is not the same label for a massive lepton. Charged-lepton mass-basis species and charged-current neutrino flavor labels must be distinguished from the neutrino propagation mass basis.",
      "claimIds": [
        "D-phys-lepton-charge-flavor"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-leptons",
          "locator": "Pages 1-2: charged-lepton and antiparticle labels, charge-conjugate muon modes and spin assignments"
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.4-4.4.2: Weyl components, Dirac mass coupling and chirality projectors"
        },
        {
          "sourceId": "tong-qft-dirac-spinors",
          "locator": "Sections 4.7.1-4.7.2: massive and massless plane-wave spinors and helicity"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        }
      ],
      "openObligations": [
        "Species-specific scattering, decay and bound-state outcomes keep their own preparation and inference limits; these labels do not establish universal persistence or atom formation."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-lepton-charge-flavor",
      "source": "phys:lepton-fields",
      "target": "phys:lepton-charge-flavor",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The color-singlet field classification supplies the species domain; this does not create stable particle instances.",
      "claimIds": [
        "D-phys-lepton-charge-flavor"
      ]
    },
    {
      "id": "physics:weak-gauge-currents-lepton-charge-flavor",
      "source": "phys:weak-gauge-currents",
      "target": "phys:lepton-charge-flavor",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared electroweak currents specify the chiral interaction labels; a current convention is not a measured helicity for every massive lepton.",
      "claimIds": [
        "D-phys-lepton-charge-flavor"
      ]
    },
    {
      "id": "physics:neutrino-flavor-mixing-lepton-charge-flavor",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:lepton-charge-flavor",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The separately declared mass/flavor construction delimits neutrino labels; the minimal field classification does not generate that extension.",
      "claimIds": [
        "D-phys-lepton-charge-flavor"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:lepton-fields",
      "role": "definition",
      "denotes": "A specified theoretical concept, not an identified physical occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lepton"
      ]
    },
    {
      "nodeId": "phys:lepton-charge-flavor",
      "role": "definition",
      "denotes": "The model charge assignments and distinct chiral, helicity, charged-species and neutrino-basis labels.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lepton-charge-flavor"
      ]
    }
  ]
};

const reusedLocators = {
  "pdg2025-electroweak": [
    "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
    "Section 10.4.7, page 31: color multiplicities in fermion decay channels"
  ],
  "pdg2025-leptons": [
    "Pages 1-2: charged-lepton and antiparticle labels, charge-conjugate muon modes and spin assignments",
    "Pages 1-2: electron, muon and tau spin and lifetime entries"
  ],
  "pdg2025-neutrino-mixing": [
    "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
  ],
  "bernauer2014": [
    "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization"
  ],
  "bethe1947": [
    "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12"
  ]
};

/** Preserve model labels and finite species scope without promoting them to measurements. */
export function validateLeptonFormalContracts(context) {
  for (const [kind, records] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of records) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing lepton-formal ${kind}: ${id}`);
      if (kind === "sources" && expected.review === undefined) {
        for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value, `Lepton-formal source identity changed: ${id}.${key}`);
      } else assert.deepEqual(found, expected, `Lepton-formal ${kind} changed: ${id}`);
    }
  }
  for (const [id, locators] of Object.entries(reusedLocators)) {
    const reviewed = context.sources.get(id)?.review?.locators ?? [];
    for (const locator of locators) assert.ok(reviewed.includes(locator), `Lepton-formal source lost reviewed passage: ${id}: ${locator}`);
  }
}
