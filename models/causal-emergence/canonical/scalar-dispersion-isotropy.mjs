import assert from "node:assert/strict";

export const SCALAR_DISPERSION_ISOTROPY_CHECKS = new Map();
export const SCALAR_DISPERSION_ISOTROPY_ANALYTICAL_SOURCES = new Map();
export const SCALAR_DISPERSION_ISOTROPY_ADMISSION = {
  "definitions": [
    [
      "phys:scalar-dispersion-isotropy",
      "D-phys-scalar-dispersion-isotropy"
    ]
  ],
  "formalDependencies": [
    [
      "physics:free-scalar-quantization-scalar-dispersion-isotropy",
      [
        "phys:free-scalar-quantization",
        "phys:scalar-dispersion-isotropy"
      ]
    ],
    [
      "physics:free-field-vacuum-scalar-dispersion-isotropy",
      [
        "phys:free-field-vacuum",
        "phys:scalar-dispersion-isotropy"
      ]
    ],
    [
      "physics:free-field-time-evolution-scalar-dispersion-isotropy",
      [
        "phys:free-field-time-evolution",
        "phys:scalar-dispersion-isotropy"
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
      "id": "D-phys-scalar-dispersion-isotropy",
      "kind": "review-finding",
      "statement": "For the chosen free real scalar model in infinite flat space, use hbar=c=1, m>0 and the Fock vacuum. Its positive energy is E(k)=sqrt(k dot k+m^2). A proper spatial rotation R obeys R^T R=I and det(R)=+1, hence E(Rk)=E(k). Comparing nonzero wave vectors of fixed magnitude at fixed mass, state preparation and model gives an isotropic dispersion null. This is a formal prediction of the supplied model, not an observed anisotropic response.",
      "scope": "Formal isotropic dispersion comparison in a chosen free real scalar model; no empirical field anisotropy.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "role": "supports",
          "note": "The positive scalar dispersion supplies the model used in the rotation-invariance deduction; no measured directional response."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "supports",
          "note": "The annihilation condition specifies the chosen free-field vacuum, not every physical state."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "The time-independent free scalar evolution fixes the model boundary; it does not establish an anisotropic mechanism."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Hamiltonian is time independent, with no external directional background or physical boundary axis. An anisotropic box or cutoff can break rotational symmetry; no all-rotation claim is made for such a regulator. The selected Fock vacuum does not imply that every excited state, interacting theory or physical vacuum is isotropic.",
        "A passive orthogonal change of spatial components transforms every vector and any physical axis together and preserves scalar products. An active directional test instead rotates k relative to a fixed physical axis and preparation. This scalar model supplies no such axis or anisotropic dispersion to measure; k=0 has no direction.",
        "E(Rk)=E(k) expresses equal energies of rotation-related momenta, not equality of the momentum labels or quantum states. Hold |k|, mass and controls fixed: changing |k| tests momentum dependence rather than orientation. No directional coupling, polarization tensor, localization time or stability law follows from the dispersion relation.",
        "The canonical field specification, chosen vacuum and Heisenberg evolution are descriptive inputs. Their presence does not generate anisotropy, prove a physical arising or maintenance relation, or supply a Level-0 admissibility-gradient mechanism. No response experiment, numerical reproduction or universal empty-space symmetry test is admitted."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:scalar-dispersion-isotropy",
      "name": "Isotropic free scalar dispersion",
      "kind": "definition",
      "description": "For the chosen free real scalar model in infinite flat space, use hbar=c=1, m>0 and the Fock vacuum. Its positive energy is E(k)=sqrt(k dot k+m^2). A proper spatial rotation R obeys R^T R=I and det(R)=+1, hence E(Rk)=E(k). Comparing nonzero wave vectors of fixed magnitude at fixed mass, state preparation and model gives an isotropic dispersion null. This is a formal prediction of the supplied model, not an observed anisotropic response.",
      "claimIds": [
        "D-phys-scalar-dispersion-isotropy"
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
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        }
      ],
      "openObligations": [
        "The Hamiltonian is time independent, with no external directional background or physical boundary axis. An anisotropic box or cutoff can break rotational symmetry; no all-rotation claim is made for such a regulator. The selected Fock vacuum does not imply that every excited state, interacting theory or physical vacuum is isotropic.",
        "A passive orthogonal change of spatial components transforms every vector and any physical axis together and preserves scalar products. An active directional test instead rotates k relative to a fixed physical axis and preparation. This scalar model supplies no such axis or anisotropic dispersion to measure; k=0 has no direction.",
        "E(Rk)=E(k) expresses equal energies of rotation-related momenta, not equality of the momentum labels or quantum states. Hold |k|, mass and controls fixed: changing |k| tests momentum dependence rather than orientation. No directional coupling, polarization tensor, localization time or stability law follows from the dispersion relation.",
        "The canonical field specification, chosen vacuum and Heisenberg evolution are descriptive inputs. Their presence does not generate anisotropy, prove a physical arising or maintenance relation, or supply a Level-0 admissibility-gradient mechanism. No response experiment, numerical reproduction or universal empty-space symmetry test is admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:free-scalar-quantization-scalar-dispersion-isotropy",
      "source": "phys:free-scalar-quantization",
      "target": "phys:scalar-dispersion-isotropy",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The free scalar construction fixes E(k), mass and conventions; it is a descriptive model input, not a cause of measured anisotropy.",
      "claimIds": [
        "D-phys-scalar-dispersion-isotropy"
      ]
    },
    {
      "id": "physics:free-field-vacuum-scalar-dispersion-isotropy",
      "source": "phys:free-field-vacuum",
      "target": "phys:scalar-dispersion-isotropy",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected Fock vacuum fixes the state used for this formal comparison; no universal vacuum or directional background is inferred.",
      "claimIds": [
        "D-phys-scalar-dispersion-isotropy"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-scalar-dispersion-isotropy",
      "source": "phys:free-field-time-evolution",
      "target": "phys:scalar-dispersion-isotropy",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The time-independent free scalar Hamiltonian supplies evolution within the chosen isotropic model, not a directional modulation or maintenance law.",
      "claimIds": [
        "D-phys-scalar-dispersion-isotropy"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:scalar-dispersion-isotropy",
      "role": "definition",
      "denotes": "The isotropic energy-versus-direction null of a specified free scalar model, with active and passive rotations distinguished.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-scalar-dispersion-isotropy"
      ]
    }
  ]
};

/** Preserve the supplied scalar model and its orientation-versus-momentum boundary. */
export function validateScalarDispersionIsotropyContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Scalar dispersion isotropy ${kind} changed ${id}: preserve the supplied model, rotation controls and formal scope`);
    }
  }
}
