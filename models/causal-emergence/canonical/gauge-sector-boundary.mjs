import assert from "node:assert/strict";

export const GAUGE_SECTOR_BOUNDARY_CHECKS = new Map();
export const GAUGE_SECTOR_BOUNDARY_ANALYTICAL_SOURCES = new Map();
export const GAUGE_SECTOR_BOUNDARY_ADMISSION = {
  "definitions": [
    [
      "phys:gauge-sector-interpretation-boundary",
      "D-phys-gauge-sector-interpretation-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:quantum-field-framework-gauge-sector-interpretation-boundary",
      [
        "phys:quantum-field-framework",
        "phys:gauge-sector-interpretation-boundary"
      ]
    ],
    [
      "physics:free-field-time-evolution-gauge-sector-interpretation-boundary",
      [
        "phys:free-field-time-evolution",
        "phys:gauge-sector-interpretation-boundary"
      ]
    ],
    [
      "physics:standard-model-sector-decomposition-gauge-sector-interpretation-boundary",
      [
        "phys:standard-model-sector-decomposition",
        "phys:gauge-sector-interpretation-boundary"
      ]
    ],
    [
      "physics:electromagnetic-photon-field-gauge-sector-interpretation-boundary",
      [
        "phys:electromagnetic-photon-field",
        "phys:gauge-sector-interpretation-boundary"
      ]
    ],
    [
      "physics:weinberg-electroweak-background-gauge-sector-interpretation-boundary",
      [
        "phys:weinberg-electroweak-background",
        "phys:gauge-sector-interpretation-boundary"
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
      "id": "D-phys-gauge-sector-interpretation-boundary",
      "kind": "review-finding",
      "statement": "Gauge-sector differentiation denotes a chosen decomposition of a specified quantum field model by its gauge, matter and scalar transformation roles. It is a model description, not an observed event that partitions one undifferentiated field into permanent particle lineages. Representation labels, redundant field components and physical excitations require separate interpretation; distinct sectors remain coupled by the declared interactions.",
      "scope": "Interpretation and parent boundaries for source-card 1.29 within the supplied model; no observed sector-partition event or universal causal rule.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-introduction",
          "locator": "Section 0: field-theory framework and interaction principles",
          "role": "supports",
          "note": "Supports the declared framework, gauge constraint or interaction boundary within the recorded reading extent; no new experimental result."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports the declared framework, gauge constraint or interaction boundary within the recorded reading extent; no new experimental result."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports the declared framework, gauge constraint or interaction boundary within the recorded reading extent; no new experimental result."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports the declared framework, gauge constraint or interaction boundary within the recorded reading extent; no new experimental result."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports the declared framework, gauge constraint or interaction boundary within the recorded reading extent; no new experimental result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A representation index labels transformation components, not a directly observed particle population. Gauge-equivalent potential configurations describe the same physical state under the stated boundary conditions. The free Maxwell example requires its Gauss constraint and gauge choice to identify two transverse physical polarizations; counting four potential components cannot replace that analysis. No universal excitation count follows from a representation dimension alone.",
        "Bare quark color components are gauge covariant, not individually gauge-invariant observed particles. The reviewed QCD convention uses fundamental quarks and adjoint gluons; neither is observed as an isolated free colored particle. The component decomposition is not a confinement proof or a measurement of individual color states.",
        "The Higgs field is a scalar doublet in the selected model, not a gauge-boson mediator. Matter, gauge and Higgs labels do not define mutually noninteracting subsystems: the reviewed QCD quark-gluon vertex and electroweak fermion currents and Higgs couplings connect those classifications. Inequivalent transformation assignments cannot be arbitrarily swapped at fixed action. Repeated representation copies admit field-basis mixing with corresponding coupling transformations; a shared gauge representation does not identify a unique physical species or universally forbid interchange.",
        "The electroweak field assignments precede a chosen broken-background description. Electroweak symmetry breaking does not derive the adopted chiral representations, number of generations, gauge couplings or Yukawa parameters. Its unitary-gauge reorganization of scalar/vector components is not a separate creation of every quark, lepton, photon, gluon and weak-boson lineage; no thermal transition or universal temporal order is inferred.",
        "The original parent 1.0 supplies a quantum-field framework that leaves fields, interactions and parameters to the chosen model. Parent 1.26 supplies explicitly free real scalar Heisenberg evolution; it does not construct gauge constraints, generate Standard Model field content or establish universal maintenance of a sector decomposition. These are descriptive model dependencies, not measured causal necessities.",
        "Original weights 0.6 and 0.4, Nmin=Ncrit=1, necessary/enabling and arising/maintenance labels, direction/interaction codes, SOMA phase 0, pattern/type-role 2 and the established label do not establish quantitative thresholds or scientific evidence. A stable organizational pattern here means consistent adopted assignments, not a tested dynamical attractor or persistence time. No Level-0 construction, universal sector-formation rule or particle-lineage causal hierarchy is admitted.",
        "The original generic collider/scattering placeholder is restricted to the separately named finite inference contexts in the gauge-sector evidence comparison. A selected color-factor or weak-channel fit constrains its declared model quantities; it does not observe a universal physical partition event, independently prove the complete gauge group, or validate every sector and interaction. No grand unification, exhaustive classification or unreviewed precision fit is supplied."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:gauge-sector-interpretation-boundary",
      "name": "Gauge-sector interpretation boundary",
      "kind": "definition",
      "description": "Gauge-sector differentiation denotes a chosen decomposition of a specified quantum field model by its gauge, matter and scalar transformation roles. It is a model description, not an observed event that partitions one undifferentiated field into permanent particle lineages. Representation labels, redundant field components and physical excitations require separate interpretation; distinct sectors remain coupled by the declared interactions.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
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
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        }
      ],
      "openObligations": [
        "A representation index labels transformation components, not a directly observed particle population. Gauge-equivalent potential configurations describe the same physical state under the stated boundary conditions. The free Maxwell example requires its Gauss constraint and gauge choice to identify two transverse physical polarizations; counting four potential components cannot replace that analysis. No universal excitation count follows from a representation dimension alone.",
        "Bare quark color components are gauge covariant, not individually gauge-invariant observed particles. The reviewed QCD convention uses fundamental quarks and adjoint gluons; neither is observed as an isolated free colored particle. The component decomposition is not a confinement proof or a measurement of individual color states.",
        "The Higgs field is a scalar doublet in the selected model, not a gauge-boson mediator. Matter, gauge and Higgs labels do not define mutually noninteracting subsystems: the reviewed QCD quark-gluon vertex and electroweak fermion currents and Higgs couplings connect those classifications. Inequivalent transformation assignments cannot be arbitrarily swapped at fixed action. Repeated representation copies admit field-basis mixing with corresponding coupling transformations; a shared gauge representation does not identify a unique physical species or universally forbid interchange.",
        "The electroweak field assignments precede a chosen broken-background description. Electroweak symmetry breaking does not derive the adopted chiral representations, number of generations, gauge couplings or Yukawa parameters. Its unitary-gauge reorganization of scalar/vector components is not a separate creation of every quark, lepton, photon, gluon and weak-boson lineage; no thermal transition or universal temporal order is inferred.",
        "The original parent 1.0 supplies a quantum-field framework that leaves fields, interactions and parameters to the chosen model. Parent 1.26 supplies explicitly free real scalar Heisenberg evolution; it does not construct gauge constraints, generate Standard Model field content or establish universal maintenance of a sector decomposition. These are descriptive model dependencies, not measured causal necessities.",
        "Original weights 0.6 and 0.4, Nmin=Ncrit=1, necessary/enabling and arising/maintenance labels, direction/interaction codes, SOMA phase 0, pattern/type-role 2 and the established label do not establish quantitative thresholds or scientific evidence. A stable organizational pattern here means consistent adopted assignments, not a tested dynamical attractor or persistence time. No Level-0 construction, universal sector-formation rule or particle-lineage causal hierarchy is admitted.",
        "The original generic collider/scattering placeholder is restricted to the separately named finite inference contexts in the gauge-sector evidence comparison. A selected color-factor or weak-channel fit constrains its declared model quantities; it does not observe a universal physical partition event, independently prove the complete gauge group, or validate every sector and interaction. No grand unification, exhaustive classification or unreviewed precision fit is supplied."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:quantum-field-framework-gauge-sector-interpretation-boundary",
      "source": "phys:quantum-field-framework",
      "target": "phys:gauge-sector-interpretation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The framework requires a chosen field model; this descriptive input is not a measured necessary formation cause.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-gauge-sector-interpretation-boundary",
      "source": "phys:free-field-time-evolution",
      "target": "phys:gauge-sector-interpretation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The free real scalar law illustrates evolution within a supplied model; it cannot establish gauge-sector formation or maintenance.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    },
    {
      "id": "physics:standard-model-sector-decomposition-gauge-sector-interpretation-boundary",
      "source": "phys:standard-model-sector-decomposition",
      "target": "phys:gauge-sector-interpretation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The supplied field and representation decomposition fixes the model under discussion, not a physical partition event or universal particle genealogy.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    },
    {
      "id": "physics:electromagnetic-photon-field-gauge-sector-interpretation-boundary",
      "source": "phys:electromagnetic-photon-field",
      "target": "phys:gauge-sector-interpretation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The Maxwell gauge constraint distinguishes redundant components from physical polarizations in its stated free-field regime only.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    },
    {
      "id": "physics:weinberg-electroweak-background-gauge-sector-interpretation-boundary",
      "source": "phys:weinberg-electroweak-background",
      "target": "phys:gauge-sector-interpretation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The chosen electroweak background reorganizes fields within a supplied theory; it does not derive its chiral matter content or parameters.",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:gauge-sector-interpretation-boundary",
      "role": "definition",
      "denotes": "A model interpretation boundary separating sector labels and gauge descriptions from physical excitation counts, finite evidence and universal formation claims.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-gauge-sector-interpretation-boundary"
      ]
    }
  ]
};

/** Preserve the interpretation and parent boundaries of the chosen gauge-sector model. */
export function validateGaugeSectorBoundaryContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Gauge sector boundary ${kind} changed ${id}: preserve model interpretation and descriptive parent limits`);
    }
  }
}
