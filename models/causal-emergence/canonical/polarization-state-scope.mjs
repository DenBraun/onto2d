import assert from "node:assert/strict";

export const POLARIZATION_STATE_SCOPE_CHECKS = new Map();
export const POLARIZATION_STATE_SCOPE_ANALYTICAL_SOURCES = new Map();
export const POLARIZATION_STATE_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:photon-polarization-scope",
      "D-phys-photon-polarization-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:transverse-photon-fock-state-photon-polarization-scope",
      [
        "phys:transverse-photon-fock-state",
        "phys:photon-polarization-scope"
      ]
    ],
    [
      "physics:one-photon-wavepacket-boundary-photon-polarization-scope",
      [
        "phys:one-photon-wavepacket-boundary",
        "phys:photon-polarization-scope"
      ]
    ],
    [
      "physics:field-anisotropy-boundary-photon-polarization-scope",
      [
        "phys:field-anisotropy-boundary",
        "phys:photon-polarization-scope"
      ]
    ],
    [
      "physics:free-field-vacuum-photon-polarization-scope",
      [
        "phys:free-field-vacuum",
        "phys:photon-polarization-scope"
      ]
    ],
    [
      "physics:free-field-time-evolution-photon-polarization-scope",
      [
        "phys:free-field-time-evolution",
        "phys:photon-polarization-scope"
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
      "id": "D-phys-photon-polarization-scope",
      "kind": "review-finding",
      "statement": "In the specified free Maxwell theory, fix an inertial frame, hbar=c=1 and nonzero momentum p. Locally choose a real transverse basis E(p)=(epsilon_1,epsilon_2), with E^T E=I and p^T E=0. For the existing one-photon wavepacket use dPi_p=d^3p/(2pi)^3 and f_r(p)=g(p)c_r(p), where c_dagger c=1 on the nonzero support of g, integral dPi_p |g|^2=1 and integral dPi_p |p| |g|^2 is finite. Its complex polarization vector is e(p)=E(p)c(p), so p dot e=0 and e_dagger e=1. Here e is a polarization amplitude, not the mean electric field, which vanishes in this one-photon number state. A passive real O(p) in SO(2) gives E'=E O, c'=O^T c and f'=O^T f in the transformed mode convention; transforming creation operators consistently preserves e and the one-photon state. An active polarization comparison instead fixes the basis and apparatus while varying relative coefficients. Both transverse modes have the same free frequency |p|; this model supplies no polarization-dependent propagation splitting or preferred vacuum axis.",
      "scope": "A transverse free-photon state and interpretation boundary; no observed polarization-response anisotropy.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "supports",
          "note": "Reviewed transverse basis, mode algebra and Hamiltonian support this declared wavepacket convention and basis change, not an anisotropic response experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The basis is local in momentum space; no globally continuous real transverse basis, zero-momentum sector or extra longitudinal photon polarization is supplied. Sharp-momentum vectors are delta-normalized. The normalized finite-energy wavepacket is an ideal state, not an experimental preparation, analyzer response or complete polarization tomography.",
        "A polarized excitation is distinct from induced material electric polarization or magnetization, and from a QED vacuum-polarization correction. No constitutive or loop response tensor is inferred here. Effective-alpha dependence on scalar momentum transfer is not spatial anisotropy; directional BRDF geometry alone identifies no intrinsic material or vacuum axis.",
        "A response claim must specify its action or constitutive model, state, background, what rotates relative to what, held-fixed controls and polarization-resolved observable. No anisotropic medium, external directional background, calibrated analyzer, response experiment or numerical replay is admitted; equal free-mode frequencies do not establish every vacuum or material response.",
        "The effective-field-anisotropy dependency supplies the scoped anisotropy comparison, not a realized anisotropic regime. The vacuum-configuration and quantum-field-dynamics dependencies concern a chosen scalar Fock vacuum and free scalar evolution, not electromagnetic polarizability or causal modulation. The directional admissibility gradient has no admitted functional, domain, gradient operator, units or map to a field response; the Level-0 F12 support finding remains unresolved.",
        "The proposed redistribution of interaction influence and asymmetric mediation remain unsupported by this record. No particle population, standalone process, directional excitation stability, localization or transport mechanism is inferred from this polarization definition."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:photon-polarization-scope",
      "name": "Photon polarization state and response boundary",
      "kind": "definition",
      "description": "In the specified free Maxwell theory, fix an inertial frame, hbar=c=1 and nonzero momentum p. Locally choose a real transverse basis E(p)=(epsilon_1,epsilon_2), with E^T E=I and p^T E=0. For the existing one-photon wavepacket use dPi_p=d^3p/(2pi)^3 and f_r(p)=g(p)c_r(p), where c_dagger c=1 on the nonzero support of g, integral dPi_p |g|^2=1 and integral dPi_p |p| |g|^2 is finite. Its complex polarization vector is e(p)=E(p)c(p), so p dot e=0 and e_dagger e=1. Here e is a polarization amplitude, not the mean electric field, which vanishes in this one-photon number state. A passive real O(p) in SO(2) gives E'=E O, c'=O^T c and f'=O^T f in the transformed mode convention; transforming creation operators consistently preserves e and the one-photon state. An active polarization comparison instead fixes the basis and apparatus while varying relative coefficients. Both transverse modes have the same free frequency |p|; this model supplies no polarization-dependent propagation splitting or preferred vacuum axis.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
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
        "The basis is local in momentum space; no globally continuous real transverse basis, zero-momentum sector or extra longitudinal photon polarization is supplied. Sharp-momentum vectors are delta-normalized. The normalized finite-energy wavepacket is an ideal state, not an experimental preparation, analyzer response or complete polarization tomography.",
        "A polarized excitation is distinct from induced material electric polarization or magnetization, and from a QED vacuum-polarization correction. No constitutive or loop response tensor is inferred here. Effective-alpha dependence on scalar momentum transfer is not spatial anisotropy; directional BRDF geometry alone identifies no intrinsic material or vacuum axis.",
        "A response claim must specify its action or constitutive model, state, background, what rotates relative to what, held-fixed controls and polarization-resolved observable. No anisotropic medium, external directional background, calibrated analyzer, response experiment or numerical replay is admitted; equal free-mode frequencies do not establish every vacuum or material response.",
        "The effective-field-anisotropy dependency supplies the scoped anisotropy comparison, not a realized anisotropic regime. The vacuum-configuration and quantum-field-dynamics dependencies concern a chosen scalar Fock vacuum and free scalar evolution, not electromagnetic polarizability or causal modulation. The directional admissibility gradient has no admitted functional, domain, gradient operator, units or map to a field response; the Level-0 F12 support finding remains unresolved.",
        "The proposed redistribution of interaction influence and asymmetric mediation remain unsupported by this record. No particle population, standalone process, directional excitation stability, localization or transport mechanism is inferred from this polarization definition."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:transverse-photon-fock-state-photon-polarization-scope",
      "source": "phys:transverse-photon-fock-state",
      "target": "phys:photon-polarization-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The two constrained Maxwell modes fix the transverse basis and equal free frequencies, without a vacuum response measurement.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    },
    {
      "id": "physics:one-photon-wavepacket-boundary-photon-polarization-scope",
      "source": "phys:one-photon-wavepacket-boundary",
      "target": "phys:photon-polarization-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The normalized finite-energy wavepacket supplies the chosen state; preparation and analyzer calibration remain separate.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    },
    {
      "id": "physics:field-anisotropy-boundary-photon-polarization-scope",
      "source": "phys:field-anisotropy-boundary",
      "target": "phys:photon-polarization-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The directional comparison boundary does not supply a realized anisotropic medium or a polarization-response tensor.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    },
    {
      "id": "physics:free-field-vacuum-photon-polarization-scope",
      "source": "phys:free-field-vacuum",
      "target": "phys:photon-polarization-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen scalar Fock vacuum does not determine electromagnetic polarizability or establish a modulation cause.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-photon-polarization-scope",
      "source": "phys:free-field-time-evolution",
      "target": "phys:photon-polarization-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Free scalar Heisenberg evolution is a separate definition, not a polarization-response mechanism or causal precursor.",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:photon-polarization-scope",
      "role": "definition",
      "denotes": "A normalized transverse free-photon polarization convention with explicit limits on anisotropic response, causal precursors and vacuum interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-photon-polarization-scope"
      ]
    }
  ]
};

/** Preserve the free-photon state convention and the unsupported response boundary. */
export function validatePolarizationStateScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Photon polarization scope ${kind} changed ${id}: preserve transverse state conventions and anisotropic-response limits`);
    }
  }
}
