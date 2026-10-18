import assert from "node:assert/strict";
import test from "node:test";
import {
  POLARIZATION_STATE_SCOPE_ADMISSION as admission,
  POLARIZATION_STATE_SCOPE_CHECKS,
  POLARIZATION_STATE_SCOPE_ANALYTICAL_SOURCES,
  validatePolarizationStateScopeContracts
} from "../../models/causal-emergence/canonical/polarization-state-scope.mjs";

const definition = "D-phys-photon-polarization-scope";
const nodeId = "phys:photon-polarization-scope";
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
function replaceStatement(data, from, to) {
  const before = claim(data).statement;
  assert.ok(before.includes(from), `The scientific clause remains present: ${from}`);
  claim(data).statement = before.replace(from, to);
  entity(data).description = claim(data).statement;
}
function dropLimit(data, pattern) {
  const record = claim(data), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !pattern.test(limit));
  assert.equal(record.limitations.length, before - 1, `Exactly one boundary matches ${pattern}`);
  entity(data).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validatePolarizationStateScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validatePolarizationStateScopeContracts(context(data)),
      /Photon polarization scope .* changed/, name);
  }
}

test("photon polarization admits one scoped definition without a response experiment or numerical result", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.equal(POLARIZATION_STATE_SCOPE_CHECKS.size, 0);
  assert.equal(POLARIZATION_STATE_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validatePolarizationStateScopeContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).contextIds, undefined);
  assert.equal(claim(data).experimentalContextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator));
    if (publication.kind === "legacy-catalogue") assert.equal(citation.role, "provenance");
  }
});

test("the transverse wavepacket retains its normalization, finite energy and local basis", async () => {
  await rejects([
    ["polarization remains transverse", (data) => replaceStatement(data, "p^T E=0", "p^T E=1")],
    ["the complex polarization uses Hermitian norm", (data) => replaceStatement(data,
      "c_dagger c=1", "c^T c=1")],
    ["the wavepacket remains normalized", (data) => replaceStatement(data,
      "integral dPi_p |g|^2=1", "integral dPi_p |g|^2=2")],
    ["finite energy cannot be silently dropped", (data) => replaceStatement(data,
      "and integral dPi_p |p| |g|^2 is finite", "with arbitrary energy")],
    ["sharp momentum and the local basis do not acquire global normalization claims", (data) =>
      dropLimit(data, /basis is local in momentum space/)]
  ]);
});

test("passive basis changes preserve the state without becoming an active preparation or classical field", async () => {
  await rejects([
    ["passive components use the inverse orthogonal transformation", (data) => replaceStatement(data,
      "c'=O^T c", "c'=O c")],
    ["the wavepacket components transform with the modes", (data) => replaceStatement(data,
      "f'=O^T f", "f'=f")],
    ["creation operators must transform consistently", (data) => replaceStatement(data,
      "transforming creation operators consistently", "keeping creation operators fixed")],
    ["polarization amplitude is not the mean electric field", (data) => replaceStatement(data,
      "the mean electric field, which vanishes in this one-photon number state",
      "a nonzero mean electric field measured in this one-photon number state")],
    ["equal free frequencies do not become vacuum birefringence", (data) => replaceStatement(data,
      "Both transverse modes have the same free frequency |p|",
      "The transverse modes have different free frequencies along an intrinsic vacuum axis")]
  ]);
});

test("polarized states, material response and QED corrections keep separate evidence boundaries", async () => {
  await rejects([
    ["a polarized state cannot become a material or loop response tensor", (data) =>
      dropLimit(data, /polarized excitation is distinct/)],
    ["response claims need a specified preparation and directional comparison", (data) =>
      dropLimit(data, /response claim must specify/)],
    ["an ideal definition cannot become a calibrated experiment", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["vacuum-polarization-shape-algebra"];
    }],
    ["the source reading cannot invent an observed anisotropic response context", (data) => {
      claim(data).contextIds = ["polarization-response-experiment"];
    }]
  ]);
});

test("source-card parents, thresholds and speculative labels do not gain causal or empirical authority", async () => {
  assert.deepEqual(admission.formalDependencies.map(([, [from]]) => from),
    ["transverse-photon-fock-state", "one-photon-wavepacket-boundary", "field-anisotropy-boundary",
      "free-field-vacuum", "free-field-time-evolution"].map((id) => `phys:${id}`));
  const data = await source();
  assert.equal(data.graph.claims.find((record) => record.id === "F12").status, "unresolved");
  assert.ok(admission.formalDependencies.every(([, endpoints]) =>
    endpoints.every((id) => !id.startsWith("l0:"))));
  await rejects([
    ["the anisotropy, scalar-vacuum, scalar-evolution and Level-0 parents retain their limits", (copy) =>
      dropLimit(copy, /Original parent 1\.32 supplies/)],
    ["weights, minima and organizational codes cannot become measured laws", (copy) =>
      dropLimit(copy, /source weights 0\.50/)],
    ["placeholders cannot establish mediation or downstream excitation stability", (copy) =>
      dropLimit(copy, /conceptual and theoretical placeholders/)],
    ["catalogue provenance is not scientific confirmation", (copy) => {
      claim(copy).citations.find((record) => record.sourceId === "legacy-0").role = "supports";
    }],
    ...admission.formalDependencies.map(([id]) =>
      [`definition input ${id} cannot become an intervention`, (copy) => {
        copy.graph.relations.find((record) => record.id === id).kind = "functional";
      }])
  ]);
});

test("the displayed definition retains its sources, descriptive dependencies and non-instance role", async () => {
  await rejects([
    ["source coordinates remain visible", (data) => { entity(data).sourceCoordinates = []; }],
    ["the display cannot invent an intrinsic vacuum axis", (data) => {
      entity(data).description = "An experimentally established vacuum axis causing directional polarization response.";
    }],
    ["descriptive inputs cannot disappear", (data) => {
      data.graph.relations = data.graph.relations.filter((record) =>
        record.id !== admission.formalDependencies[0][0]);
    }],
    ["a definition cannot become an observed instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }],
    ["readiness cannot turn the definition into a vacuum cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes =
        "A measured source of universal directional transport.";
    }]
  ]);
});
