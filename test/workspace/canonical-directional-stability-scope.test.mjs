import assert from "node:assert/strict";
import test from "node:test";
import {
  DIRECTIONAL_STABILITY_SCOPE_ADMISSION as admission,
  DIRECTIONAL_STABILITY_SCOPE_CHECKS,
  DIRECTIONAL_STABILITY_SCOPE_ANALYTICAL_SOURCES,
  validateDirectionalStabilityScopeContracts
} from "../../models/causal-emergence/canonical/directional-stability-scope.mjs";

const definition = "D-phys-directional-excitation-boundary";
const nodeId = "phys:directional-excitation-boundary";
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
    ["readiness", data.readiness]
  ]);
}
function replaceStatement(data, before, after) {
  const original = claim(data).statement;
  assert.ok(original.includes(before), `The expected statement contains ${before}`);
  const statement = original.replace(before, after);
  assert.notEqual(statement, original);
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
  validateDirectionalStabilityScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateDirectionalStabilityScopeContracts(context(data)),
      /Directional stability scope .* changed/, name);
  }
}


test("directional excitation admits only a sourced interpretation boundary", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.equal(admission.formalDependencies.length, 5);
  assert.equal(DIRECTIONAL_STABILITY_SCOPE_CHECKS.size, 0);
  assert.equal(DIRECTIONAL_STABILITY_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validateDirectionalStabilityScopeContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).experimentalContextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator),
      "Each citation remains within an actual reviewed source extent");
    if (publication.kind === "legacy-catalogue") assert.equal(citation.role, "provenance");
  }
});

test("dispersion, localization, attenuation and intrinsic decay remain separate observables", async () => {
  await rejects([
    ["a directional property label cannot unify incompatible quantities", (data) =>
      replaceStatement(data, "They are different observables", "They are one universal measured observable")],
    ["packet redistribution and detector escape cannot become particle decay", (data) =>
      dropLimit(data, /A dispersion relation specifies/)],
    ["the proper-lifetime convention must retain units and exponential approximation", (data) =>
      dropLimit(data, /Only within the declared exponential/)],
    ["full-state unitarity does not forbid unstable-subspace decay", (data) =>
      dropLimit(data, /A unit-modulus free-mode phase/)],
    ["a formal contrast cannot admit a measured directional decay result", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["directional-decay-rate"];
    }]
  ]);
});

test("spatial axes, opposite directions and preparation controls cannot imply drift or nonreciprocity", async () => {
  await rejects([
    ["anisotropy alone does not establish opposite-direction nonreciprocity", (data) =>
      dropLimit(data, /Comparing different axes/)],
    ["the admitted model cannot acquire an anisotropic environment", (data) =>
      replaceStatement(data, "establish no anisotropic environment", "establish a universal anisotropic vacuum")],
    ["a comparison needs a specified state and directional protocol", (data) =>
      replaceStatement(data, "model, state, environment, frame, held-fixed controls and directional comparison", "universal direction-dependent persistence threshold")],
    ["a boundary is not an observed transport instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }]
  ]);
});

test("all proposed parents retain descriptive roles without weights or universal carrier thresholds", async () => {
  assert.deepEqual(admission.formalDependencies.map(([, [from]]) => from), [
    "phys:free-scalar-propagation", "phys:field-anisotropy-boundary", "phys:photon-polarization-scope",
    "phys:free-field-time-evolution", "phys:resonance-lifetime-convention"
  ]);
  await rejects([
    ["photon polarization and free evolution do not modulate scalar persistence", (data) =>
      dropLimit(data, /Original parent 1\.32 supplies/)],
    ["source weights, minima and SOMA codes have no physical authority", (data) =>
      dropLimit(data, /original weights 0\.40/)],
    ...admission.formalDependencies.flatMap(([id]) => [
      [`definition input ${id} is not a causal intervention`, (data) => {
        data.graph.relations.find((record) => record.id === id).kind = "functional";
      }],
      [`definition input ${id} cannot silently disappear`, (data) => {
        data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
      }]
    ])
  ]);
});

test("the unresolved Level-0 transport proposal and unnamed publications cannot validate a physical bridge", async () => {
  assert.ok(admission.formalDependencies.every(([, endpoints]) =>
    endpoints.every((id) => !id.startsWith("l0:"))), "No Level-0 physical construction edge is admitted");
  const data = await source();
  assert.equal(data.graph.claims.find((record) => record.id === "F12").status, "unresolved");
  await rejects([
    ["a bias label cannot replace a field-observable map or testable prediction", (copy) =>
      dropLimit(copy, /Parent 0\.23 remains/)],
    ["unsupported evidence placeholders cannot become a primary result", (copy) =>
      dropLimit(copy, /conceptual and theoretical evidence placeholders/)],
    ["the inherited unresolved transport proposal cannot replace a formal input", (copy) => {
      copy.graph.relations.find((record) => record.target === nodeId
        && record.source === "phys:free-scalar-propagation").source = "l0:localized-transport-bias";
    }],
    ["catalogue provenance cannot silently become scientific support", (copy) => {
      claim(copy).citations.find((record) => record.sourceId === "legacy-0").role = "supports";
    }],
    ["a definition cannot silently acquire a response experiment", (copy) => {
      claim(copy).contextIds = ["phys:directional-stability-experiment"];
    }]
  ]);
});

test("source boundaries and the public directional-excitation description remain consistent", async () => {
  await rejects([
    ["the existing PDG convention cannot become an unread directional-decay experiment", (data) => {
      claim(data).citations.find((record) => record.sourceId === "pdg2025-kinematics").locator = "All anisotropic decay and transport experiments";
    }],
    ["the PDG formal reading cannot silently become an experimental replay", (data) => {
      data.graph.sources.find((record) => record.id === "pdg2025-kinematics").review.extent = "complete-experimental-reproduction";
    }],
    ["the browser cannot invent a measured drift mechanism", (data) => {
      entity(data).description = "An established Level-0 cause of measured directional particle drift.";
    }],
    ["displayed inference limits remain available", (data) => { entity(data).openObligations = []; }],
    ["readable source coordinates remain available", (data) => { entity(data).sourceCoordinates = []; }],
    ["readiness cannot become a physical persistence cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes = "A universal experimentally measured directional stability cause.";
    }]
  ]);
});
