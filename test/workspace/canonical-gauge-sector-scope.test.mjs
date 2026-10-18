import assert from "node:assert/strict";
import test from "node:test";
import {
  GAUGE_SECTOR_SCOPE_ADMISSION as admission,
  GAUGE_SECTOR_SCOPE_CHECKS,
  GAUGE_SECTOR_SCOPE_ANALYTICAL_SOURCES,
  validateGaugeSectorScopeContracts
} from "../../models/causal-emergence/canonical/gauge-sector-scope.mjs";

const synthesis = "C-phys-gauge-sector-evidence-boundary";
const method = "M-phys-gauge-sector-evidence-boundary";
const nodeId = "phys:gauge-sector-evidence-boundary";
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key,
      new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replaceStatement(data, id, statement) {
  claim(data, id).statement = statement;
  if (id === synthesis) data.graph.entities.find((record) => record.id === nodeId).description = statement;
}
function dropLimit(data, id, pattern) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !pattern.test(limit));
  assert.equal(record.limitations.length, before - 1, `Exactly one boundary matches ${pattern}`);
  if (id === synthesis) data.graph.entities.find((item) => item.id === nodeId)
    .openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateGaugeSectorScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateGaugeSectorScopeContracts(context(data)), /Gauge sector scope .* changed/, name);
  }
}

test("gauge-sector literature comparison adds no acquisition, joint fit or numerical replay", async () => {
  assert.equal(GAUGE_SECTOR_SCOPE_CHECKS.size, 0);
  assert.equal(GAUGE_SECTOR_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["definitions", "formalDependencies", "contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  assert.equal(admission.observations.length, 1);
  const inputs = admission.dependencies.map(([, from]) => from);
  assert.deepEqual(new Set(inputs), new Set([
    "standard-model-sector-decomposition", "gauge-sector-interpretation-boundary",
    "opal2001-color-factors", "ua1-1983-w-mass-fit", "ua1-1983-z-electron-mass"
  ]));
  const data = await source();
  validateGaugeSectorScopeContracts(context(data));
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.equal(claim(data, method).status, "method-contract");
  for (const id of [synthesis, method]) assert.deepEqual(claim(data, id).checkIds, []);
});

test("selected collider inferences retain their actual owners and supplemental model conventions", async () => {
  const data = await source();
  const inputs = ["opal2001-color-factors", "ua1-1983-w-mass-fit", "ua1-1983-z-electron-mass"];
  const expected = [...new Set(inputs.flatMap((suffix) => claim(data, `C-phys-${suffix}`).contextIds))];
  assert.deepEqual(expected, ["opal2001-color-inference", "ua1-1983-w-inference", "ua1-1983-z-inference"]);
  const studies = expected.map((id) => data.physics.studies.find((record) => record.id === id));
  assert.ok(studies.every((record) => record.studyType === "computational-analysis"));
  const owners = new Set(studies.map((record) => record.sourceId));
  assert.equal(owners.size, 3);
  const supplemental = new Map(admission.inferenceSources);
  for (const id of [synthesis, method]) {
    assert.deepEqual(claim(data, id).contextIds, expected);
    const role = id === method ? "method" : "supports";
    const extra = [...new Set(claim(data, id).citations
      .filter((citation) => citation.role === role && !owners.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(supplemental.get(id), extra);
    assert.deepEqual(extra, ["pdg2025-qcd", "pdg2025-electroweak"]);
  }
});

test("conditional fit agreement cannot become complete gauge-group or matter-content identification", async () => {
  await rejects([
    ["color-factor agreement cannot determine the full global gauge group", (data) => replaceStatement(data, synthesis,
      "OPAL uniquely reconstructs the full global Standard Model gauge group without correction-model assumptions.")],
    ["an adopted chiral model is not an independent chirality measurement", (data) => replaceStatement(data, synthesis,
      "The selected UA1 mass summaries independently measure every fermion chirality and establish universal weak couplings.")],
    ["the selected comparisons cannot observe a universal partition event", (data) => replaceStatement(data, synthesis,
      "These three measurements observe one undifferentiated field splitting into permanent quark, lepton and gauge-boson lineages.")],
    ["unreviewed collider placeholders cannot prove every sector", (data) =>
      dropLimit(data, synthesis, /generic collider\/scattering placeholders/)],
    ["formal architecture cannot acquire measured parent thresholds", (data) =>
      dropLimit(data, synthesis, /0\.6\/0\.4 weights/)]
  ]);
});

test("color correlations, recoil alternatives and historical calibration cannot disappear from the comparison", async () => {
  await rejects([
    ["converted OPAL parameters remain dependent on the same fit and normalization", (data) =>
      dropLimit(data, synthesis, /T_R=1\/2/)],
    ["the W fit cannot measure its own assumed V-A coupling", (data) =>
      dropLimit(data, synthesis, /V-A hypothesis/)],
    ["preliminary Z calibration cannot become current precision or independent event errors", (data) =>
      dropLimit(data, synthesis, /unfinished electromagnetic calibration/)],
    ["three inference owners cannot become a replayed joint likelihood", (data) =>
      dropLimit(data, synthesis, /three owning inference contexts/)],
    ["the comparison method cannot pool heterogeneous observables", (data) => replaceStatement(data, method,
      "Combine color-factor ratios and W/Z mass estimates into one homogeneous independent sample and compute a joint gauge-group likelihood.")],
    ["a publication comparison cannot be relabeled as a checked reconstruction", (data) => {
      claim(data, synthesis).status = "analytically-checked";
      claim(data, synthesis).checkIds = ["field-dynamics-algebra"];
    }]
  ]);
});

test("inference routing cannot replace selected outcomes with alternate fits or definition arithmetic", async () => {
  await rejects([
    ["the selected Z electron outcome cannot silently become the constrained dimuon channel", (data) => {
      data.graph.relations.find((record) => record.source === "phys:ua1-1983-z-electron-mass"
        && record.target === nodeId).source = "phys:ua1-1983-z-dimuon-mass";
    }],
    ["free scalar arithmetic cannot replace an observed collider constraint", (data) => {
      data.graph.relations.find((record) => record.source === "phys:opal2001-color-factors"
        && record.target === nodeId).source = "phys:field-dynamics-arithmetic";
    }],
    ["acquisition and final inference do not have interchangeable context ownership", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = claim(data, id).contextIds
        .map((item) => item === "ua1-1983-w-inference" ? "ua1-1983-w-acquisition" : item);
    }],
    ["the joint interpretation cannot omit one admitted evidence owner", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = claim(data, id).contextIds
        .filter((item) => item !== "opal2001-color-inference");
    }]
  ]);
});

test("display metadata and descriptive links cannot promote the synthesis into a physical construction", async () => {
  const mutations = [
    ["the synthesis retains its verifiable publication coordinates", (data) => {
      data.graph.entities.find((record) => record.id === nodeId).sourceCoordinates = [];
    }],
    ["the comparison is not an observed formation instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }],
    ["the user-facing role cannot promise universal creation or maintenance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes =
        "A measured universal mechanism creating and maintaining all physical gauge sectors.";
    }]
  ];
  for (const [suffix] of admission.dependencies) {
    const id = `physics:${suffix}`;
    mutations.push([`comparison dependency ${id} cannot become an empirical formation law`, (data) => {
      data.graph.relations.find((record) => record.id === id).kind = "functional";
    }]);
  }
  await rejects(mutations);
});
