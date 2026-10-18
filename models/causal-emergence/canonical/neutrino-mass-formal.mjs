import assert from "node:assert/strict";

export const NEUTRINO_MASS_FORMAL_CHECKS = new Map();
export const NEUTRINO_MASS_FORMAL_ANALYTICAL_SOURCES = new Map();
export const NEUTRINO_MASS_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-mixing-parameterization",
      "D-phys-neutrino-mixing-parameterization"
    ],
    [
      "phys:neutrino-mass-model-boundary",
      "D-phys-neutrino-mass-model-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:neutrino-flavor-mixing-neutrino-mixing-parameterization",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-mixing-parameterization"
      ]
    ],
    [
      "physics:standard-model-neutrino-mass-model-boundary",
      [
        "phys:standard-model",
        "phys:neutrino-mass-model-boundary"
      ]
    ],
    [
      "physics:lepton-fields-neutrino-mass-model-boundary",
      [
        "phys:lepton-fields",
        "phys:neutrino-mass-model-boundary"
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
      "id": "pdg2025-neutrino-mass-structure",
      "kind": "research-publication",
      "title": "Neutrino Masses, Mixing, and Oscillations: selected mass-structure and rephasing passages, 2025 update",
      "authors": [
        "M. C. Gonzalez-Garcia",
        "R. Wendell"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-review-passages",
        "locators": [
          "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion",
          "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives",
          "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation"
        ],
        "limit": "The review is revised August 2025 and this PDF carries a 1 December 2025 footer. Sections 14.1-14.3 on pages 1-8 were read; pages 3 and 7-8 were visually checked. This new source extent covers formal mass alternatives and field rephasings. It supplies no primary experimental acquisition, global fit, current numerical mass or CP bound, measured Dirac/Majorana assignment, or empirical selection of a mass-generation mechanism. The minimal massless theory is the renormalizable Standard Model with its stated field content; it is not every gauge-invariant effective theory using Standard Model fields. Closed unitary three-state mixing is a declared approximation, not a theorem about a general extended spectrum."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutrino-mixing-parameterization",
      "kind": "review-finding",
      "statement": "In a supplied closed unitary three-active-neutrino model, define U=R23 R13(delta) R12 P. Each real ij rotation acts on its plane with block [[cij,sij],[-sij,cij]] and as identity on the remaining direction, with cij=cos(thetaij) and sij=sin(thetaij); the 1-3 block is [[c13,s13 exp(-i delta)],[-s13 exp(i delta),c13]]. For generic three-mass mixing, charged-lepton and Dirac-neutrino rephasings leave three angles and one Dirac phase, with P=I. In the Majorana alternative use P=diag(exp(i eta1),exp(i eta2),1); these two extra column phases cancel from ordinary mass-induced flavor-oscillation probabilities.",
      "scope": "A declared PMNS convention and phase-counting boundary; not measured angle values, CP violation or a determination of neutrino mass character.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation",
          "role": "supports",
          "note": "Supports the stated formal convention or boundary within the reviewed passage; no new experimental or executable result is claimed."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports the stated formal convention or boundary within the reviewed passage; no new experimental or executable result is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The supplied 3-by-3 unitary model is distinct from a general 3-by-n charged-current matrix or an effective light-sector submatrix after heavy states are removed. The latter need not be exactly unitary; this definition does not establish that extra states are absent.",
        "The phase count assumes generic nondegenerate nonzero masses. Degenerate masses, a massless state or vanishing mixing angles can remove phases or their observable effects. A nontrivial mixing matrix need not violate CP, and a complex entry alone is not a rephasing-invariant measurement.",
        "For the same ordinary vacuum channel, U_prime(alpha,i)=exp(i r_alpha) U(alpha,i) exp(i c_i) gives A_prime(alpha,beta)=exp(i(r_beta-r_alpha)) A(alpha,beta), so its probability is unchanged. This column-phase invariance of the oscillation amplitude does not permit arbitrary rephasing of a Majorana field at fixed real mass in the full Lagrangian.",
        "Majorana column-phase cancellation concerns ordinary lepton-number-conserving oscillations. It does not make those phases unphysical in all processes or identify neutrinos as Dirac or Majorana. The chosen angles, phases and conventions supply no fitted parameter values or current ordering preference."
      ]
    },
    {
      "id": "D-phys-neutrino-mass-model-boundary",
      "kind": "review-finding",
      "statement": "With the usual fermion content, one Higgs doublet and no right-handed neutrino singlets, the minimal renormalizable Standard Model has no neutrino Dirac Yukawa term and leaves neutrinos massless. Formal extensions can add singlet neutrinos and Dirac masses, with total lepton number imposed to exclude Majorana terms, or allow lepton-number-violating Majorana masses. A dimension-five operator built from the lepton and Higgs doublets can instead generate a Majorana mass after electroweak symmetry breaking. These are alternative model constructions; flavor-oscillation evidence alone does not select one.",
      "scope": "Formal boundary between the minimal massless theory and possible massive-neutrino extensions; no measured ultraviolet mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion",
          "role": "supports",
          "note": "Supports the stated formal convention or boundary within the reviewed passage; no new experimental or executable result is claimed."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives",
          "role": "supports",
          "note": "Supports the stated formal convention or boundary within the reviewed passage; no new experimental or executable result is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The massless statement uses the minimal renormalizable field content and its accidental symmetries. It is not a prohibition on all gauge-invariant Standard Model effective operators: the stated dimension-five extension changes that assumption.",
        "Dirac and Majorana alternatives require different field or symmetry assumptions. A see-saw construction additionally needs a hierarchy and matching assumptions; no such hierarchy, heavy state, Yukawa coefficient or new-physics scale is inferred here.",
        "Nonzero oscillation mass-squared differences do not determine all absolute masses, prove that all three masses are positive, identify a Dirac/Majorana assignment, or establish the charged-fermion mass route for neutrinos. Direct kinematic, cosmological and lepton-number-violating searches retain separate inference contexts."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-mixing-parameterization",
      "name": "Three-active-neutrino mixing parameterization",
      "kind": "definition",
      "description": "In a supplied closed unitary three-active-neutrino model, define U=R23 R13(delta) R12 P. Each real ij rotation acts on its plane with block [[cij,sij],[-sij,cij]] and as identity on the remaining direction, with cij=cos(thetaij) and sij=sin(thetaij); the 1-3 block is [[c13,s13 exp(-i delta)],[-s13 exp(i delta),c13]]. For generic three-mass mixing, charged-lepton and Dirac-neutrino rephasings leave three angles and one Dirac phase, with P=I. In the Majorana alternative use P=diag(exp(i eta1),exp(i eta2),1); these two extra column phases cancel from ordinary mass-induced flavor-oscillation probabilities.",
      "claimIds": [
        "D-phys-neutrino-mixing-parameterization"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        }
      ],
      "openObligations": [
        "The supplied 3-by-3 unitary model is distinct from a general 3-by-n charged-current matrix or an effective light-sector submatrix after heavy states are removed. The latter need not be exactly unitary; this definition does not establish that extra states are absent.",
        "The phase count assumes generic nondegenerate nonzero masses. Degenerate masses, a massless state or vanishing mixing angles can remove phases or their observable effects. A nontrivial mixing matrix need not violate CP, and a complex entry alone is not a rephasing-invariant measurement.",
        "For the same ordinary vacuum channel, U_prime(alpha,i)=exp(i r_alpha) U(alpha,i) exp(i c_i) gives A_prime(alpha,beta)=exp(i(r_beta-r_alpha)) A(alpha,beta), so its probability is unchanged. This column-phase invariance of the oscillation amplitude does not permit arbitrary rephasing of a Majorana field at fixed real mass in the full Lagrangian.",
        "Majorana column-phase cancellation concerns ordinary lepton-number-conserving oscillations. It does not make those phases unphysical in all processes or identify neutrinos as Dirac or Majorana. The chosen angles, phases and conventions supply no fitted parameter values or current ordering preference."
      ]
    },
    {
      "id": "phys:neutrino-mass-model-boundary",
      "name": "Neutrino mass-model boundary",
      "kind": "definition",
      "description": "With the usual fermion content, one Higgs doublet and no right-handed neutrino singlets, the minimal renormalizable Standard Model has no neutrino Dirac Yukawa term and leaves neutrinos massless. Formal extensions can add singlet neutrinos and Dirac masses, with total lepton number imposed to exclude Majorana terms, or allow lepton-number-violating Majorana masses. A dimension-five operator built from the lepton and Higgs doublets can instead generate a Majorana mass after electroweak symmetry breaking. These are alternative model constructions; flavor-oscillation evidence alone does not select one.",
      "claimIds": [
        "D-phys-neutrino-mass-model-boundary"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives"
        }
      ],
      "openObligations": [
        "The massless statement uses the minimal renormalizable field content and its accidental symmetries. It is not a prohibition on all gauge-invariant Standard Model effective operators: the stated dimension-five extension changes that assumption.",
        "Dirac and Majorana alternatives require different field or symmetry assumptions. A see-saw construction additionally needs a hierarchy and matching assumptions; no such hierarchy, heavy state, Yukawa coefficient or new-physics scale is inferred here.",
        "Nonzero oscillation mass-squared differences do not determine all absolute masses, prove that all three masses are positive, identify a Dirac/Majorana assignment, or establish the charged-fermion mass route for neutrinos. Direct kinematic, cosmological and lepton-number-violating searches retain separate inference contexts."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-mixing-parameterization",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-mixing-parameterization",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The flavor-to-propagation basis convention supplies the meaning of this explicitly closed three-state matrix; the link does not fit its angles or phases.",
      "claimIds": [
        "D-phys-neutrino-mixing-parameterization"
      ]
    },
    {
      "id": "physics:standard-model-neutrino-mass-model-boundary",
      "source": "phys:standard-model",
      "target": "phys:neutrino-mass-model-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified Standard Model field content fixes the minimal renormalizable massless boundary; a mass extension changes its assumptions rather than following as a measured formation event.",
      "claimIds": [
        "D-phys-neutrino-mass-model-boundary"
      ]
    },
    {
      "id": "physics:lepton-fields-neutrino-mass-model-boundary",
      "source": "phys:lepton-fields",
      "target": "phys:neutrino-mass-model-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The electroweak lepton representation distinguishes the left-handed doublet from any added neutrino singlet; a representation assignment does not select a mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-model-boundary"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutrino-mixing-parameterization",
      "role": "definition",
      "denotes": "A formal three-state mixing matrix and its rephasing conventions, without a fitted parameter point or observed CP result.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-mixing-parameterization"
      ]
    },
    {
      "nodeId": "phys:neutrino-mass-model-boundary",
      "role": "definition",
      "denotes": "Alternative formal ways to extend the specified massless neutrino sector, with no observed mass-generation event or selected mechanism.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-mass-model-boundary"
      ]
    }
  ]
};

/** Preserve mass-model alternatives and the declared three-state phase convention. */
export function validateNeutrinoMassFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Neutrino mass formal ${kind} changed ${id}: preserve the mass-model and rephasing boundaries`);
    }
  }
}
