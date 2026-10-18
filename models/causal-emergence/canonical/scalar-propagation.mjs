import assert from "node:assert/strict";

export const SCALAR_PROPAGATION_CHECKS = new Map();
export const SCALAR_PROPAGATION_ANALYTICAL_SOURCES = new Map();
export const SCALAR_PROPAGATION_ADMISSION = {
  "definitions": [
    [
      "phys:free-scalar-propagation",
      "D-phys-free-scalar-propagation"
    ]
  ],
  "formalDependencies": [
    [
      "physics:scalar-dispersion-isotropy-free-scalar-propagation",
      [
        "phys:scalar-dispersion-isotropy",
        "phys:free-scalar-propagation"
      ]
    ],
    [
      "physics:free-field-time-evolution-free-scalar-propagation",
      [
        "phys:free-field-time-evolution",
        "phys:free-scalar-propagation"
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
    }
  ],
  "claims": [
    {
      "id": "D-phys-free-scalar-propagation",
      "kind": "review-finding",
      "statement": "For the chosen free real scalar field in infinite homogeneous flat space, use hbar=c=1, m>0 and no material, external or boundary axis. The positive-frequency branch has E(k)=sqrt(k dot k+m^2). For an envelope narrowly concentrated around k0!=0, first-order dispersion and stationary phase give v_g(k0)=grad_k E|k0=k0/E(k0). A proper rotation R satisfies R^T R=I and det(R)=+1, giving v_g(Rk)=R v_g(k) and equal speed at fixed |k| and mass. E(-k)=E(k), while v_g(-k)=-v_g(k). Each free mode has |exp(-i E(k)t)|=1, and [N,H]=0 preserves the specified free Fock number sector. These are formal properties of this model, not an observed directional stability asymmetry.",
      "scope": "Formal dispersion, narrow-envelope velocity and free number-sector conservation; no observed localization, attenuation or directional decay effect.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "role": "supports",
          "note": "The positive free scalar frequency is the input to the declared group-velocity and rotation deductions; no propagation experiment is claimed."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "supports",
          "note": "The normal-ordered Hamiltonian fixes the free model; it does not establish a physical vacuum medium."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "role": "supports",
          "note": "The free number operator, conserved Fock sectors and smeared states support the stated sector and wavepacket limits."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "The reviewed evolution phases support the single-mode unit-modulus statement; group velocity is deduced from the specified dispersion."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The envelope must be smooth and sufficiently narrow in momentum for expansion about k0 over the stated propagation interval. Higher dispersion derivatives can spread or reshape it; this velocity approximation does not assert exact rigid translation. A changing local amplitude or escape from a finite region is not by itself intrinsic decay.",
        "A sharp momentum eigenstate is delta-normalized and not a bounded localized object. Use suitably smeared, normalized finite-energy states. The positive-frequency envelope is a mode-superposition description, not a universal relativistic position probability density or proof of persistent localization.",
        "Rotation covariance changes the velocity vector components; it does not make rotation-related momentum labels or states identical. Equal speed compares fixed |k|, mass and model with the preparation rotated consistently. A chosen packet momentum can select a propagation direction without introducing an intrinsic vacuum axis; k=0 has no momentum direction.",
        "This is a closed free model with a time-independent Hamiltonian, without interaction-induced transitions, dissipation or an imposed directional environment. Conservation of its free number sector and a mode phase do not establish the persistence of all interacting excitations, every quantum state or an open subsystem. Physical boundaries or anisotropic regulators require a separate symmetry analysis.",
        "Group velocity is the local narrow-envelope velocity derived here. It is not an integrated particle or energy flux, a signal-front speed, detector retention, a net directed current or propulsion. No transport measurement, decay width, localization length, damping rate, numerical replay or universal stability threshold is admitted."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:free-scalar-propagation",
      "name": "Free scalar envelope propagation",
      "kind": "definition",
      "description": "For the chosen free real scalar field in infinite homogeneous flat space, use hbar=c=1, m>0 and no material, external or boundary axis. The positive-frequency branch has E(k)=sqrt(k dot k+m^2). For an envelope narrowly concentrated around k0!=0, first-order dispersion and stationary phase give v_g(k0)=grad_k E|k0=k0/E(k0). A proper rotation R satisfies R^T R=I and det(R)=+1, giving v_g(Rk)=R v_g(k) and equal speed at fixed |k| and mass. E(-k)=E(k), while v_g(-k)=-v_g(k). Each free mode has |exp(-i E(k)t)|=1, and [N,H]=0 preserves the specified free Fock number sector. These are formal properties of this model, not an observed directional stability asymmetry.",
      "claimIds": [
        "D-phys-free-scalar-propagation"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field"
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
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        }
      ],
      "openObligations": [
        "The envelope must be smooth and sufficiently narrow in momentum for expansion about k0 over the stated propagation interval. Higher dispersion derivatives can spread or reshape it; this velocity approximation does not assert exact rigid translation. A changing local amplitude or escape from a finite region is not by itself intrinsic decay.",
        "A sharp momentum eigenstate is delta-normalized and not a bounded localized object. Use suitably smeared, normalized finite-energy states. The positive-frequency envelope is a mode-superposition description, not a universal relativistic position probability density or proof of persistent localization.",
        "Rotation covariance changes the velocity vector components; it does not make rotation-related momentum labels or states identical. Equal speed compares fixed |k|, mass and model with the preparation rotated consistently. A chosen packet momentum can select a propagation direction without introducing an intrinsic vacuum axis; k=0 has no momentum direction.",
        "This is a closed free model with a time-independent Hamiltonian, without interaction-induced transitions, dissipation or an imposed directional environment. Conservation of its free number sector and a mode phase do not establish the persistence of all interacting excitations, every quantum state or an open subsystem. Physical boundaries or anisotropic regulators require a separate symmetry analysis.",
        "Group velocity is the local narrow-envelope velocity derived here. It is not an integrated particle or energy flux, a signal-front speed, detector retention, a net directed current or propulsion. No transport measurement, decay width, localization length, damping rate, numerical replay or universal stability threshold is admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:scalar-dispersion-isotropy-free-scalar-propagation",
      "source": "phys:scalar-dispersion-isotropy",
      "target": "phys:free-scalar-propagation",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing positive scalar dispersion supplies the energy function differentiated here; its rotational symmetry remains a chosen model property.",
      "claimIds": [
        "D-phys-free-scalar-propagation"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-free-scalar-propagation",
      "source": "phys:free-field-time-evolution",
      "target": "phys:free-scalar-propagation",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified free Hamiltonian supplies mode phases and number-sector conservation, not a physical maintenance cause or a directional damping mechanism.",
      "claimIds": [
        "D-phys-free-scalar-propagation"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:free-scalar-propagation",
      "role": "definition",
      "denotes": "The formally deduced group velocity, rotation covariance and conserved free number sector of the specified scalar model, without an observed stability or transport instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-free-scalar-propagation"
      ]
    }
  ]
};

/** Preserve scalar propagation model, observable and source boundaries. */
export function validateScalarPropagationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Scalar propagation ${kind} changed ${id}: preserve scoped model and interpretation limits`);
    }
  }
}
