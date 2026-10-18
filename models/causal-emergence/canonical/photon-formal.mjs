import assert from "node:assert/strict";

export const PHOTON_FORMAL_CHECKS = new Map();
export const PHOTON_FORMAL_ANALYTICAL_SOURCES = new Map();
export const PHOTON_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:electromagnetic-photon-field",
      "D-phys-electromagnetic-photon-field"
    ],
    [
      "phys:transverse-photon-fock-state",
      "D-phys-transverse-photon-fock-state"
    ],
    [
      "phys:one-photon-wavepacket-boundary",
      "D-phys-one-photon-wavepacket-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:electromagnetic-photon-field-transverse-photon-fock-state",
      [
        "phys:electromagnetic-photon-field",
        "phys:transverse-photon-fock-state"
      ]
    ],
    [
      "physics:transverse-photon-fock-state-one-photon-wavepacket-boundary",
      [
        "phys:transverse-photon-fock-state",
        "phys:one-photon-wavepacket-boundary"
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
      "id": "tong-qft-free-maxwell",
      "kind": "research-publication",
      "title": "Quantum Field Theory: selected electromagnetic gauge-field and QED sections (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        ],
        "limit": "Author lecture notes for the Cambridge 2006-2007 course, in the HTML edition generated on 15 October 2021. Only the listed body passages were reviewed for this admission. This is an instructional formal source, not a primary photon experiment. The graph declares a smeared one-photon state using the reviewed mode algebra and a fixed-frame normalization; it does not report a new numerical replay, experimental preparation, mass/charge bound, interacting-field construction or all-orders QED result. Scalar-field sections are not substituted for the gauge-field constraint analysis. The additional Coulomb passage is a leading nonrelativistic scattering calculation, not a static-force experiment or evidence for a population of real exchanged photons."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-electromagnetic-photon-field",
      "kind": "review-finding",
      "statement": "In Minkowski spacetime with hbar=c=1 and metric (+---), adopt the source-free Maxwell action S=-(1/4)integral d^4x F_mu_nu F^mu_nu, with F_mu_nu=partial_mu A_nu-partial_nu A_mu and A_mu identified with A_mu+partial_mu lambda under the stated boundary conditions. In this unbroken Abelian U(1) electromagnetic model there is no mass term. A constant gauge parameter leaves A_mu unchanged, giving its neutral transformation law in this model rather than a measured zero-charge result.",
      "scope": "A selected massless Abelian vector-field definition; not an experimental inference of exact photon mass or charge.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Gauge equivalence removes redundant potential descriptions; A_mu is not four independent physical photon polarizations. In source-free radiation gauge, Gauss law and suitable vanishing boundary conditions permit A_0=0 and div A=0. Charged sources or different boundaries require their own constraint solution.",
        "The Maxwell action and unbroken U(1) regime are supplied assumptions, not a derivation of electroweak symmetry breaking, a measured upper bound on photon mass/charge, or proof that every gauge-invariant extension must be massless.",
        "The free field is a controlled description before an explicit interaction is added; its action does not specify an emission mechanism, detector response, static-force measurement or a persistent photon identity through interactions. No interacting charged-sector infrared dressing or asymptotic completeness is constructed."
      ]
    },
    {
      "id": "D-phys-transverse-photon-fock-state",
      "kind": "review-finding",
      "statement": "For nonzero three-momentum p, choose two real orthonormal transverse vectors epsilon_r(p), r=1,2, with p dot epsilon_r=0. Using dPi_p=d^3p/(2pi)^3, the free-field modes obey [a_r(p),a_s_dagger(q)]=(2pi)^3 delta_rs delta^3(p-q), with creation-creation and annihilation-annihilation commutators zero. Define a_r(p)|0>=0 and the normal-ordered Hamiltonian H_0=sum_r integral dPi_p |p| a_r_dagger(p)a_r(p). These are the two physical photon polarization modes of the selected free Maxwell field.",
      "scope": "Bosonic transverse modes in a fixed inertial-frame normalization, with zero-point energy subtracted by the stated convention.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "supports",
          "note": "Supports this formal definition within the selected gauge-field reading extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The two-polarization result uses the Maxwell gauge constraint, not a scalar Fock construction or a count of all four potential components. A time-like or longitudinal internal propagator component is not an additional physical free-photon polarization.",
        "The polarization basis depends on p and can be chosen in momentum-space patches; no single globally continuous real transverse basis is assumed. A chosen polarization of an excitation is not a preferred direction of the vacuum. Zero-momentum and boundary modes are outside this nonzero-momentum sector.",
        "Plane-wave creation operators are operator-valued distributions; a sharp-momentum vector is delta-normalized, not a normalizable localized photon. Normal ordering is an energy convention, not a measurement of absolute vacuum energy."
      ]
    },
    {
      "id": "D-phys-one-photon-wavepacket-boundary",
      "kind": "review-finding",
      "statement": "In the declared transverse-mode convention, let sum_r integral dPi_p |f_r(p)|^2=1 and sum_r integral dPi_p |p| |f_r(p)|^2 be finite. Define |1_f>=sum_r integral dPi_p f_r(p)a_r_dagger(p)|0>. The reviewed mode algebra gives unit norm and one quantum of N_0=sum_r integral dPi_p a_r_dagger(p)a_r(p). Free evolution replaces f_r(p) by exp(-i|p|t)f_r(p); it conserves N_0 within this supplied free Hamiltonian.",
      "scope": "A formal finite-energy momentum-space one-photon state; its algebra does not supply an experimental preparation or detection claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "supports",
          "note": "The normalized smeared state and free phase follow from the cited bosonic algebra and Hamiltonian in the explicitly declared convention; no independent replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The f_r components refer to the selected transverse basis and must transform with it; normalization uses the declared dPi_p measure, not an unstated covariant measure. This wavepacket definition makes no position-eigenstate, sharply localized trajectory or universal photon position-operator claim.",
        "A normalized one-photon state is an ideal input. A real source needs its conditional preparation, multi-photon contamination and losses, while an observed detector click needs an instrument model; none is inferred from N_0=1 alone.",
        "Free number conservation is not photon-number conservation in interacting QED. Absorption and emission require the coupled matter-field description; identical bosons do not acquire distinguishable identities that this free formula tracks through those processes."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:electromagnetic-photon-field",
      "name": "Free electromagnetic photon field",
      "kind": "definition",
      "description": "In Minkowski spacetime with hbar=c=1 and metric (+---), adopt the source-free Maxwell action S=-(1/4)integral d^4x F_mu_nu F^mu_nu, with F_mu_nu=partial_mu A_nu-partial_nu A_mu and A_mu identified with A_mu+partial_mu lambda under the stated boundary conditions. In this unbroken Abelian U(1) electromagnetic model there is no mass term. A constant gauge parameter leaves A_mu unchanged, giving its neutral transformation law in this model rather than a measured zero-charge result.",
      "claimIds": [
        "D-phys-electromagnetic-photon-field"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        }
      ],
      "openObligations": [
        "Gauge equivalence removes redundant potential descriptions; A_mu is not four independent physical photon polarizations. In source-free radiation gauge, Gauss law and suitable vanishing boundary conditions permit A_0=0 and div A=0. Charged sources or different boundaries require their own constraint solution.",
        "The Maxwell action and unbroken U(1) regime are supplied assumptions, not a derivation of electroweak symmetry breaking, a measured upper bound on photon mass/charge, or proof that every gauge-invariant extension must be massless.",
        "The free field is a controlled description before an explicit interaction is added; its action does not specify an emission mechanism, detector response, static-force measurement or a persistent photon identity through interactions. No interacting charged-sector infrared dressing or asymptotic completeness is constructed."
      ]
    },
    {
      "id": "phys:transverse-photon-fock-state",
      "name": "Transverse photon Fock construction",
      "kind": "definition",
      "description": "For nonzero three-momentum p, choose two real orthonormal transverse vectors epsilon_r(p), r=1,2, with p dot epsilon_r=0. Using dPi_p=d^3p/(2pi)^3, the free-field modes obey [a_r(p),a_s_dagger(q)]=(2pi)^3 delta_rs delta^3(p-q), with creation-creation and annihilation-annihilation commutators zero. Define a_r(p)|0>=0 and the normal-ordered Hamiltonian H_0=sum_r integral dPi_p |p| a_r_dagger(p)a_r(p). These are the two physical photon polarization modes of the selected free Maxwell field.",
      "claimIds": [
        "D-phys-transverse-photon-fock-state"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian"
        }
      ],
      "openObligations": [
        "The two-polarization result uses the Maxwell gauge constraint, not a scalar Fock construction or a count of all four potential components. A time-like or longitudinal internal propagator component is not an additional physical free-photon polarization.",
        "The polarization basis depends on p and can be chosen in momentum-space patches; no single globally continuous real transverse basis is assumed. A chosen polarization of an excitation is not a preferred direction of the vacuum. Zero-momentum and boundary modes are outside this nonzero-momentum sector.",
        "Plane-wave creation operators are operator-valued distributions; a sharp-momentum vector is delta-normalized, not a normalizable localized photon. Normal ordering is an energy convention, not a measurement of absolute vacuum energy."
      ]
    },
    {
      "id": "phys:one-photon-wavepacket-boundary",
      "name": "Normalized one-photon wavepacket boundary",
      "kind": "definition",
      "description": "In the declared transverse-mode convention, let sum_r integral dPi_p |f_r(p)|^2=1 and sum_r integral dPi_p |p| |f_r(p)|^2 be finite. Define |1_f>=sum_r integral dPi_p f_r(p)a_r_dagger(p)|0>. The reviewed mode algebra gives unit norm and one quantum of N_0=sum_r integral dPi_p a_r_dagger(p)a_r(p). Free evolution replaces f_r(p) by exp(-i|p|t)f_r(p); it conserves N_0 within this supplied free Hamiltonian.",
      "claimIds": [
        "D-phys-one-photon-wavepacket-boundary"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian"
        }
      ],
      "openObligations": [
        "The f_r components refer to the selected transverse basis and must transform with it; normalization uses the declared dPi_p measure, not an unstated covariant measure. This wavepacket definition makes no position-eigenstate, sharply localized trajectory or universal photon position-operator claim.",
        "A normalized one-photon state is an ideal input. A real source needs its conditional preparation, multi-photon contamination and losses, while an observed detector click needs an instrument model; none is inferred from N_0=1 alone.",
        "Free number conservation is not photon-number conservation in interacting QED. Absorption and emission require the coupled matter-field description; identical bosons do not acquire distinguishable identities that this free formula tracks through those processes."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:electromagnetic-photon-field-transverse-photon-fock-state",
      "source": "phys:electromagnetic-photon-field",
      "target": "phys:transverse-photon-fock-state",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The Maxwell gauge constraint fixes the two transverse modes admitted to this free Fock construction; it is a formal dependency, not a measured formation event.",
      "claimIds": [
        "D-phys-transverse-photon-fock-state"
      ]
    },
    {
      "id": "physics:transverse-photon-fock-state-one-photon-wavepacket-boundary",
      "source": "phys:transverse-photon-fock-state",
      "target": "phys:one-photon-wavepacket-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The normalized smeared state uses the declared transverse bosonic algebra and free Hamiltonian; this does not establish a prepared or detected photon.",
      "claimIds": [
        "D-phys-one-photon-wavepacket-boundary"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:electromagnetic-photon-field",
      "role": "definition",
      "denotes": "The selected free Maxwell gauge field and its neutral Abelian transformation law, with a declared spacetime and action.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-electromagnetic-photon-field"
      ]
    },
    {
      "nodeId": "phys:transverse-photon-fock-state",
      "role": "definition",
      "denotes": "A bosonic Fock construction for the two transverse modes of a specified free Maxwell field, without an observed photon occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-transverse-photon-fock-state"
      ]
    },
    {
      "nodeId": "phys:one-photon-wavepacket-boundary",
      "role": "definition",
      "denotes": "A normalized finite-energy one-photon input in the specified mode convention, with preparation, interaction and measurement left to separate contexts.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-one-photon-wavepacket-boundary"
      ]
    }
  ]
};

/** Preserve physical Maxwell modes and the formal one-photon measurement boundary. */
export function validatePhotonFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Photon formal ${kind} changed ${id}: preserve Maxwell constraints and one-photon scope`);
    }
  }
}
