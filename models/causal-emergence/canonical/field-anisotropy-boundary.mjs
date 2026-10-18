import assert from "node:assert/strict";

export const FIELD_ANISOTROPY_BOUNDARY_CHECKS = new Map();
export const FIELD_ANISOTROPY_BOUNDARY_ANALYTICAL_SOURCES = new Map();
export const FIELD_ANISOTROPY_BOUNDARY_ADMISSION = {
  "definitions": [
    [
      "phys:field-anisotropy-boundary",
      "D-phys-field-anisotropy-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:scalar-dispersion-isotropy-field-anisotropy-boundary",
      [
        "phys:scalar-dispersion-isotropy",
        "phys:field-anisotropy-boundary"
      ]
    ],
    [
      "physics:quantum-field-framework-field-anisotropy-boundary",
      [
        "phys:quantum-field-framework",
        "phys:field-anisotropy-boundary"
      ]
    ],
    [
      "physics:free-field-time-evolution-field-anisotropy-boundary",
      [
        "phys:free-field-time-evolution",
        "phys:field-anisotropy-boundary"
      ]
    ],
    [
      "physics:free-field-vacuum-field-anisotropy-boundary",
      [
        "phys:free-field-vacuum",
        "phys:field-anisotropy-boundary"
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
  "claims": [
    {
      "id": "D-phys-field-anisotropy-boundary",
      "kind": "review-finding",
      "statement": "A field-anisotropy assertion must identify a model, state or preparation, directional comparison, observable and transformation of the setup. Propagation, coupling, localization and response are different possible questions, not one interchangeable observable. The supplied free real scalar dispersion is an isotropic comparison within its assumptions; no anisotropic field regime, intrinsic vacuum axis or universal directional-admissibility law is admitted.",
      "scope": "Interpretation and source-support boundaries for source-card 1.32; no observed anisotropic regime or universal vacuum-admissibility law.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-introduction",
          "locator": "Section 0: field-theory framework and interaction principles",
          "role": "supports",
          "note": "Supports the model-framework boundary only, not the proposed directional-admissibility mechanism."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "role": "supports",
          "note": "Supports the chosen free scalar model and frequency comparison, not an anisotropic medium or vacuum."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.3 opening: vacuum and normal ordering",
          "role": "supports",
          "note": "Supports the chosen Fock-vacuum definition only; no universal rotational-symmetry conclusion is inferred."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports the declared free-field evolution boundary; no directional response is measured."
        },
        {
          "sourceId": "legacy-1",
          "locator": "/",
          "role": "provenance",
          "note": "Original source card /32 and its parents and placeholders; source metadata do not establish physical support."
        },
        {
          "sourceId": "legacy-0",
          "locator": "/",
          "role": "provenance",
          "note": "Original directional-gradient card /22; the author proposal does not specify a field-theory prediction."
        },
        {
          "sourceId": "review",
          "locator": "F01–F12; What the sources contribute; proposed representation",
          "role": "limits",
          "note": "Internal review records the unresolved F12 support boundary; it is not independent experimental evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A directional comparison must specify what rotates relative to what, the frame, held-fixed conditions and the measured or calculated quantity. Propagation frequency, a coupling coefficient, localization and a response function require distinct definitions and protocols. No bounded excitation, standalone dynamical process, realized transport effect or measured field anisotropy is supplied by the original property label.",
        "The chosen scalar frequency comparison contains no anisotropic medium, external field, directional boundary or demonstrated anisotropic vacuum. Its isotropic dispersion cannot establish the response of a different model or every state. A stationary density operator concerns time translation; stationarity alone proves neither rotational invariance of all states nor rotational asymmetry of any vacuum.",
        "Original parent 1.0 supplies only the quantum-field framework. Parent 1.26 supplies free real scalar Heisenberg evolution within an already chosen Hamiltonian. Parent 1.27 supplies a chosen free-field Fock vacuum and its stationarity, not a physical vacuum substance or a universal claim about all interacting, curved-spacetime or symmetry-breaking vacua. These are descriptive definition dependencies, not necessary maintenance or modulation causes.",
        "Parent 0.22 remains the unresolved directional-gradient proposal: no admissibility functional, domain, gradient operator, units, map to a specified field observable or testable anisotropy prediction is supplied. The Level-0 F12 support finding remains unresolved. A gradient name cannot bridge Level 0 to quantum fields; no such physical construction or cross-domain causal edge is admitted.",
        "The original weights 0.30, 0.25, 0.20 and 0.25, all Nmin=Ncrit=1, necessary/enabling and maintenance/modulation/arising labels, carrier codes and direction/interaction-mode codes have no admitted quantitative or causal force. SOMA phase 2, property/type-role 3 and the hypothesized label organize the source card; they do not supply physical evidence, a formation law or a measured universal threshold.",
        "The original conceptual and theoretical evidence placeholders identify no retrievable publication or reviewed anisotropy prediction. No primary source for the proposed vacuum-sensitive anisotropy is supplied in this card; this is a limit of the supplied record, not a claim that no anisotropy literature or models exist. No new empirical source, observation, experiment, numerical replay or computational study is admitted.",
        "Polarization, parity violation, nonreciprocity, dependence on the scalar momentum-transfer scale Q squared and ordinary time evolution are not interchangeable definitions or independent evidence of spatial anisotropy. Directional radiometric or BRDF measurement geometry alone does not identify an intrinsic material axis or vacuum axis. Each proposed equivalence needs its own model, observable and source.",
        "Polarization response and directional excitation stability, localization or transport require their own model, observable and evidence. These labels cannot validate anisotropy through reciprocal descriptions, and this definition does not establish their realizations. An anisotropy claim requires a specified action or constitutive response, state, background, directional protocol and discriminating mathematical or empirical evidence."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:field-anisotropy-boundary",
      "name": "Field anisotropy interpretation boundary",
      "kind": "definition",
      "description": "A field-anisotropy assertion must identify a model, state or preparation, directional comparison, observable and transformation of the setup. Propagation, coupling, localization and response are different possible questions, not one interchangeable observable. The supplied free real scalar dispersion is an isotropic comparison within its assumptions; no anisotropic field regime, intrinsic vacuum axis or universal directional-admissibility law is admitted.",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-introduction",
          "locator": "Section 0: field-theory framework and interaction principles"
        },
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
        },
        {
          "sourceId": "legacy-1",
          "locator": "/"
        },
        {
          "sourceId": "legacy-0",
          "locator": "/"
        },
        {
          "sourceId": "review",
          "locator": "F01–F12; What the sources contribute; proposed representation"
        }
      ],
      "openObligations": [
        "A directional comparison must specify what rotates relative to what, the frame, held-fixed conditions and the measured or calculated quantity. Propagation frequency, a coupling coefficient, localization and a response function require distinct definitions and protocols. No bounded excitation, standalone dynamical process, realized transport effect or measured field anisotropy is supplied by the original property label.",
        "The chosen scalar frequency comparison contains no anisotropic medium, external field, directional boundary or demonstrated anisotropic vacuum. Its isotropic dispersion cannot establish the response of a different model or every state. A stationary density operator concerns time translation; stationarity alone proves neither rotational invariance of all states nor rotational asymmetry of any vacuum.",
        "Original parent 1.0 supplies only the quantum-field framework. Parent 1.26 supplies free real scalar Heisenberg evolution within an already chosen Hamiltonian. Parent 1.27 supplies a chosen free-field Fock vacuum and its stationarity, not a physical vacuum substance or a universal claim about all interacting, curved-spacetime or symmetry-breaking vacua. These are descriptive definition dependencies, not necessary maintenance or modulation causes.",
        "Parent 0.22 remains the unresolved directional-gradient proposal: no admissibility functional, domain, gradient operator, units, map to a specified field observable or testable anisotropy prediction is supplied. The Level-0 F12 support finding remains unresolved. A gradient name cannot bridge Level 0 to quantum fields; no such physical construction or cross-domain causal edge is admitted.",
        "The original weights 0.30, 0.25, 0.20 and 0.25, all Nmin=Ncrit=1, necessary/enabling and maintenance/modulation/arising labels, carrier codes and direction/interaction-mode codes have no admitted quantitative or causal force. SOMA phase 2, property/type-role 3 and the hypothesized label organize the source card; they do not supply physical evidence, a formation law or a measured universal threshold.",
        "The original conceptual and theoretical evidence placeholders identify no retrievable publication or reviewed anisotropy prediction. No primary source for the proposed vacuum-sensitive anisotropy is supplied in this card; this is a limit of the supplied record, not a claim that no anisotropy literature or models exist. No new empirical source, observation, experiment, numerical replay or computational study is admitted.",
        "Polarization, parity violation, nonreciprocity, dependence on the scalar momentum-transfer scale Q squared and ordinary time evolution are not interchangeable definitions or independent evidence of spatial anisotropy. Directional radiometric or BRDF measurement geometry alone does not identify an intrinsic material axis or vacuum axis. Each proposed equivalence needs its own model, observable and source.",
        "Polarization response and directional excitation stability, localization or transport require their own model, observable and evidence. These labels cannot validate anisotropy through reciprocal descriptions, and this definition does not establish their realizations. An anisotropy claim requires a specified action or constitutive response, state, background, directional protocol and discriminating mathematical or empirical evidence."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:scalar-dispersion-isotropy-field-anisotropy-boundary",
      "source": "phys:scalar-dispersion-isotropy",
      "target": "phys:field-anisotropy-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified free scalar frequency supplies an isotropic comparison, not an anisotropic field realization or universal statement about vacua.",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ]
    },
    {
      "id": "physics:quantum-field-framework-field-anisotropy-boundary",
      "source": "phys:quantum-field-framework",
      "target": "phys:field-anisotropy-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The framework leaves the action, state, background and observable to a specified model; it does not predict directional asymmetry by itself.",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-field-anisotropy-boundary",
      "source": "phys:free-field-time-evolution",
      "target": "phys:field-anisotropy-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen free real scalar Heisenberg evolution does not measure directional response, create an anisotropic medium or establish a modulation cause.",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ]
    },
    {
      "id": "physics:free-field-vacuum-field-anisotropy-boundary",
      "source": "phys:free-field-vacuum",
      "target": "phys:field-anisotropy-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen stationary free-field Fock vacuum does not establish rotational invariance or anisotropy for every possible vacuum and observable.",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:field-anisotropy-boundary",
      "role": "definition",
      "denotes": "A scoped interpretation boundary for directional field claims, preserving the supplied isotropic scalar comparison and excluding unsupported universal vacuum or admissibility assertions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-field-anisotropy-boundary"
      ]
    }
  ]
};

/** Keep field anisotropy questions scoped to specified models and observables. */
export function validateFieldAnisotropyBoundaryContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Field anisotropy boundary ${kind} changed ${id}: preserve specified observables and unsupported-vacuum limits`);
    }
  }
}
