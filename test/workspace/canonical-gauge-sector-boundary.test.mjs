import assert from "node:assert/strict";
import test from "node:test";
import {
  GAUGE_SECTOR_BOUNDARY_ADMISSION as admission,
  GAUGE_SECTOR_BOUNDARY_CHECKS,
  GAUGE_SECTOR_BOUNDARY_ANALYTICAL_SOURCES,
  validateGaugeSectorBoundaryContracts
} from "../../models/causal-emergence/canonical/gauge-sector-boundary.mjs";

const definition = "D-phys-gauge-sector-interpretation-boundary";
const nodeId = "phys:gauge-sector-interpretation-boundary";
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const claim = (data) => data.graph.claims.find((record) => record.id === definition);
const entity = (data) => data.graph.entities.find((record) => record.id === nodeId);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((kind) => [kind,
      new Map(data.graph[kind].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((kind) => [kind,
      new Map(data.physics[kind].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replaceStatement(data, statement) {
  claim(data).statement = statement;
  entity(data).description = statement;
}
function dropLimit(data, pattern) {
  const record = claim(data), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !pattern.test(limit));
  assert.equal(record.limitations.length, before - 1, `Exactly one boundary matches ${pattern}`);
  entity(data).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateGaugeSectorBoundaryContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateGaugeSectorBoundaryContracts(context(data)), /Gauge sector boundary .* changed/, name);
  }
}

test("gauge-sector interpretation admits a sourced model boundary without a new experiment or replay", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.equal(admission.formalDependencies.length, 5);
  assert.equal(GAUGE_SECTOR_BOUNDARY_CHECKS.size, 0);
  assert.equal(GAUGE_SECTOR_BOUNDARY_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validateGaugeSectorBoundaryContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).contextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator),
      "Every interpretation citation remains within its explicitly reviewed source extent");
  }
});

test("sector descriptions cannot become observed physical partitions or universal particle genealogies", async () => {
  await rejects([
    ["a chosen decomposition is not a measured partition event", (data) => replaceStatement(data,
      "A universal physical event splits one undifferentiated quantum field into permanent quark, lepton and gauge-boson lineages.")],
    ["finite collider inferences do not reconstruct every gauge sector", (data) =>
      dropLimit(data, /original generic collider\/scattering placeholder/)],
    ["the definition cannot acquire empirical or numerical-check status", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["field-dynamics-algebra"];
    }],
    ["an interpretation boundary does not admit an observed occurrence", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }]
  ]);
});

test("representation and gauge indices remain distinct from physical particle populations", async () => {
  await rejects([
    ["four potential components do not identify four physical photon modes", (data) =>
      dropLimit(data, /representation index labels transformation components/)],
    ["colored components cannot become isolated gauge-invariant observed particles", (data) =>
      dropLimit(data, /Bare quark color components/)],
    ["sector tags do not forbid mixing repeated representations or make Higgs a gauge mediator", (data) =>
      dropLimit(data, /Higgs field is a scalar doublet/)],
    ["a gauge-redundancy field count cannot replace a physical excitation analysis", (data) => replaceStatement(data,
      "Each gauge potential component and color index is one independently observable free particle, so a representation dimension determines the measured particle population.")]
  ]);
});

test("broken-background formulas do not derive chiral content, generation count or coupling parameters", async () => {
  await rejects([
    ["symmetry breaking does not supply all field assignments and parameters", (data) =>
      dropLimit(data, /electroweak field assignments precede/)],
    ["a background relation is not a universal temporal origin", (data) => replaceStatement(data,
      "Electroweak symmetry breaking derives the number of generations, every chiral representation and every gauge and Yukawa coupling, thereby creating all matter and gauge sectors in sequence.")],
    ["a generic decomposition cannot substitute a different historical background", (data) => {
      const record = data.graph.relations.find((item) => item.source === "phys:weinberg-electroweak-background"
        && item.target === nodeId);
      assert.ok(record);
      record.source = "phys:free-field-vacuum";
    }]
  ]);
});

test("QFT and free scalar parents retain descriptive roles without weights or maintenance thresholds", async () => {
  const inputs = admission.formalDependencies.map(([, [from]]) => from);
  for (const required of ["quantum-field-framework", "free-field-time-evolution",
    "standard-model-sector-decomposition", "electromagnetic-photon-field", "weinberg-electroweak-background"])
    assert.ok(inputs.includes(`phys:${required}`));
  await rejects([
    ["the scalar Hamiltonian cannot construct or maintain the gauge-matter model", (data) =>
      dropLimit(data, /original parent 1\.0 supplies/)],
    ["source-card weights and carrier minima cannot become scientific thresholds", (data) =>
      dropLimit(data, /Original weights 0\.6 and 0\.4/)],
    ...admission.formalDependencies.flatMap(([id]) => [
      [`formal input ${id} is not a causal intervention`, (data) => {
        data.graph.relations.find((record) => record.id === id).kind = "functional";
      }],
      [`formal input ${id} cannot be silently removed`, (data) => {
        data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
      }]
    ])
  ]);
});

test("gauge-sector interpretation display cannot diverge from its reviewed definition", async () => {
  await rejects([
    ["the source coordinates remain visible", (data) => { entity(data).sourceCoordinates = []; }],
    ["the display cannot invent a physical universal maintenance process", (data) => {
      entity(data).description = "A physical mechanism that permanently maintains every matter and gauge lineage.";
    }],
    ["the readiness description cannot promote the definition into a measured cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes =
        "An experimentally established universal cause of quark, lepton and boson formation.";
    }]
  ]);
});
