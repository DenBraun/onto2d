import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  NUCLEAR_BRIDGE_ADMISSION as admission,
  NUCLEAR_BRIDGE_CHECKS,
  NUCLEAR_BRIDGE_ANALYTICAL_SOURCES,
  validateNuclearBridgeContracts
} from "../../models/causal-emergence/canonical/nuclear-bridge.mjs";

const definitionId = "D-phys-qcd-nuclear-energy-bridge";
const synthesisId = "C-phys-qcd-nuclear-evidence-boundary";
const methodId = "M-phys-qcd-nuclear-evidence-boundary";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, suffix) => data.graph.entities.find((record) => record.id === `phys:${suffix}`);
const relation = (data, suffix) => data.graph.relations.find((record) => record.id === `physics:${suffix}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique reviewed boundary: ${fragment}`);
}

async function rejects(mutations) {
  const original = await source();
  validateNuclearBridgeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("the nuclear bridge reuses each input's contexts without inventing a joint acquisition or executable result", async () => {
  assert.equal(NUCLEAR_BRIDGE_CHECKS.size, 0);
  assert.equal(NUCLEAR_BRIDGE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  assert.equal(admission.definitions.length, 1);
  assert.equal(admission.observations.length, 1);
  const data = await source();
  validateNuclearBridgeContracts(context(data));
  const inputs = admission.dependencies.map(([, from]) => from);
  for (const id of [
    "qcd-nuclear-energy-bridge", "durr-hadron-spectrum", "borsanyi-isospin-spectrum",
    "borsanyi-qcd-qed-components", "rau-joint-adjustment", "rau-capture-binding", "deuteron-beta-threshold",
    "beane2013-two-nucleon-shifts", "beane2013-two-nucleon-binding"
  ]) assert.ok(inputs.includes(id), `Missing scoped synthesis input ${id}`);
  const expectedContexts = [...new Set(inputs.filter((id) => id !== "qcd-nuclear-energy-bridge")
    .flatMap((id) => claim(data, `C-phys-${id}`).contextIds))];
  assert.deepEqual(claim(data, synthesisId).contextIds, expectedContexts);
  assert.deepEqual(claim(data, methodId).contextIds, expectedContexts);
  assert.equal(claim(data, synthesisId).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesisId).checkIds, []);
  const ownedSources = new Set(expectedContexts.map((id) => data.physics.studies.find((record) => record.id === id).sourceId));
  const supplementalSources = new Map(admission.inferenceSources);
  for (const id of [synthesisId, methodId]) {
    const record = claim(data, id);
    const role = record.kind === "method" ? "method" : "supports";
    const expected = [...new Set(record.citations
      .filter((citation) => citation.role === role && !ownedSources.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(supplementalSources.get(id) ?? [], expected,
      "Supplemental theory, calibration and companion sources remain explicitly owned without inventing studies");
  }
});

test("a fixed-mass QCD result cannot become a renormalized mass sensitivity or a color-flavor identification", async () => {
  await rejects([
    ["one action-dependent bare mass becomes a measured renormalized mass", (data) => dropLimit(data, definitionId, "one action-dependent bare mass")],
    ["controlled sensitivity no longer requires held-fixed inputs", (data) => dropLimit(data, definitionId, "what is held fixed")],
    ["the formal mass prescription supplies a response derivative", (data) => {
      relation(data, "quark-mass-prescription-qcd-nuclear-energy-bridge").assertion =
        "The single heavy-flavor point directly measures a physical quark-mass derivative independent of scale setting.";
    }],
    ["Dürr calibration masses become numerical inputs to the nuclear study", (data) => {
      relation(data, "hadron-mass-calibration-qcd-nuclear-energy-bridge").assertion =
        "The nuclear ensembles inherit the numerical pion, kaon and Xi inputs and covariance from the Dürr fit.";
    }]
  ]);
});

test("the finite bridge does not certify bulk density, compressibility or atomic and astrophysical response", async () => {
  await rejects([
    ["a two-body spectrum establishes the bulk equation of state", (data) => dropLimit(data, definitionId, "many-body equation of state")],
    ["atomic material response loses electronic and environmental inputs", (data) => dropLimit(data, definitionId, "electromagnetic, electronic and environmental inputs")],
    ["the bridge definition declares a complete quarks-to-bulk causal chain", (data) => {
      claim(data, definitionId).statement = "The two-nucleon energy uniquely predicts ordinary-matter density, compressibility and neutron-star structure.";
    }],
    ["the synthesis display adds an unreviewed mechanical prediction", (data) => {
      entity(data, "qcd-nuclear-evidence-boundary").description =
        "This calculation proves the universal compressibility and macroscopic stability of matter.";
    }]
  ]);
});

test("original parent weights, necessary maintenance and phase labels remain excluded scientific results", async () => {
  await rejects([
    ["the supplied equal weights and carrier minima recover scientific meaning", (data) => dropLimit(data, definitionId, "equal 0.5 weights")],
    ["the SOMA phase and evidence placeholders become empirical support", (data) => dropLimit(data, definitionId, "SOMA phase 2")],
    ["an input relation becomes a weighted necessary maintenance relation", (data) => {
      const edge = relation(data, "qcd-qcd-nuclear-energy-bridge");
      edge.weight = 0.5;
      edge.necessity = "necessary";
    }]
  ]);
});

test("the synthesis preserves incompatible mass regimes and shared calibration rather than pooling results", async () => {
  await rejects([
    ["hadron masses become a complete nuclear binding calculation", (data) => dropLimit(data, synthesisId, "do not determine a nuclear binding observable")],
    ["physical masses are numerically transferred to heavy-flavor ensembles", (data) => dropLimit(data, synthesisId, "cannot be transferred between the theories")],
    ["energy shifts and binding interpretations become independent evidence", (data) => dropLimit(data, synthesisId, "same correlators, baryon thresholds and scale")],
    ["the measured-input threshold becomes an independent QCD binding result", (data) => dropLimit(data, synthesisId, "independently corroborate the shared binding input")],
    ["cross-study covariance and continuum inference are asserted without support", (data) => dropLimit(data, synthesisId, "common cross-study covariance")],
    ["the local deuteron check certifies the whole synthesis", (data) => {
      claim(data, synthesisId).status = "analytically-checked";
      claim(data, synthesisId).checkIds = ["deuteron-beta-threshold-arithmetic"];
    }]
  ]);
});

test("all bridge inputs retain their exact direction and cannot replace a primary analysis numerically", async () => {
  await rejects([
    ...admission.formalDependencies.map(([id]) => [`missing formal bridge input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
    }]),
    ...admission.dependencies.map(([id]) => [`missing scoped synthesis input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== `physics:${id}`);
    }]),
    ["the synthesis feeds back into an experimental mass adjustment", (data) => {
      const edge = structuredClone(relation(data, "rau-joint-adjustment-qcd-nuclear-evidence-boundary"));
      edge.id = "physics:unreviewed-nuclear-synthesis-rau-feedback";
      edge.source = "phys:qcd-nuclear-evidence-boundary";
      edge.target = "phys:rau-joint-adjustment";
      data.graph.relations.push(edge);
    }],
    ["a different valid lattice preparation replaces the nuclear context", (data) => {
      const result = claim(data, synthesisId);
      assert.ok(result.contextIds.includes("beane2013-nuclear-extraction"));
      result.contextIds = result.contextIds.map((id) => id === "beane2013-nuclear-extraction" ? "bulava2019-spectrum" : id);
    }]
  ]);
});

test("exact bridge contracts protect source attribution, display scope and readiness in full validation", async () => {
  await rejects([
    ["a formal citation borrows an unrelated publication", (data) => {
      claim(data, definitionId).citations[0].sourceId = "lee2002";
    }],
    ["displayed synthesis limits disappear", (data) => {
      entity(data, "qcd-nuclear-evidence-boundary").openObligations = [];
    }],
    ["a conditional synthesis becomes an empirically established material instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:qcd-nuclear-evidence-boundary").instanceAdmission = "empirical-instance";
    }]
  ]);
  const changed = structuredClone(await source());
  const text = "All existing data establish one universal quark-to-macroscopic-matter law with an independently measured mass sensitivity.";
  claim(changed, synthesisId).statement = text;
  entity(changed, "qcd-nuclear-evidence-boundary").description = text;
  changed.readiness.nodeRoles.find((record) => record.nodeId === "phys:qcd-nuclear-evidence-boundary").denotes = text;
  assert.throws(() => validateCanonicalSource(changed), /Nuclear bridge/,
    "The shared validator reaches the bridge contract after coordinated semantic and display changes");
});

test("construction rules cannot bypass reviewed physical dependency admission", async () => {
  const original = await source();
  const mutations = [
    ["a new rule adds an unreviewed quark-to-binding construction", (data) => {
      const rule = structuredClone(data.graph.rules[0]);
      Object.assign(rule, {
        id: "R-unreviewed-nuclear-binding",
        name: "Infer nuclear binding from a fixed quark-mass point",
        inputs: [{ entityId: "phys:quark-mass-prescription", minCount: 1, maxCount: null, distinct: false, role: "declared-context" }],
        outputEntityIds: ["phys:beane2013-two-nucleon-binding"],
        conditions: ["A single input mass is sufficient to construct a bound state"],
        claimIds: [definitionId]
      });
      data.graph.rules.push(rule);
      data.readiness.nodeRoles.push({ nodeId: rule.id, role: "rule-specification", denotes: rule.name, instanceAdmission: "none", claimIds: rule.claimIds });
    }],
    ["an existing rule acquires an unreviewed physical premise", (data) => {
      data.graph.rules[0].inputs[0].entityId = "phys:quark-mass-prescription";
    }],
    ["an existing rule acquires an unreviewed physical conclusion", (data) => {
      data.graph.rules[0].outputEntityIds = ["phys:beane2013-two-nucleon-binding"];
    }],
    ["an unreviewed rule introduces a physical record through its own identifier", (data) => {
      const rule = structuredClone(data.graph.rules[0]);
      rule.id = "phys:unreviewed-nuclear-construction";
      data.graph.rules.push(rule);
      data.readiness.nodeRoles.push({ nodeId: rule.id, role: "rule-specification", denotes: rule.name, instanceAdmission: "none", claimIds: rule.claimIds });
    }]
  ];
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), /Unreviewed physical construction rule/, name);
  }
});
