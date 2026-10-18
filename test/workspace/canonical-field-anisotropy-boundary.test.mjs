import assert from "node:assert/strict";
import test from "node:test";
import {
  FIELD_ANISOTROPY_BOUNDARY_ADMISSION as admission,
  FIELD_ANISOTROPY_BOUNDARY_CHECKS,
  FIELD_ANISOTROPY_BOUNDARY_ANALYTICAL_SOURCES,
  validateFieldAnisotropyBoundaryContracts
} from "../../models/causal-emergence/canonical/field-anisotropy-boundary.mjs";

const definition = "D-phys-field-anisotropy-boundary";
const nodeId = "phys:field-anisotropy-boundary";
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
  validateFieldAnisotropyBoundaryContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateFieldAnisotropyBoundaryContracts(context(data)),
      /Field anisotropy boundary .* changed/, name);
  }
}

test("field anisotropy admits an interpretation boundary without a new empirical or numerical result", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.equal(admission.formalDependencies.length, 4);
  assert.equal(FIELD_ANISOTROPY_BOUNDARY_CHECKS.size, 0);
  assert.equal(FIELD_ANISOTROPY_BOUNDARY_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validateFieldAnisotropyBoundaryContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).contextIds, undefined);
  assert.equal(claim(data).experimentalContextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator),
      "Every interpretation citation remains within its explicitly reviewed source extent");
    if (publication.kind === "legacy-catalogue") assert.equal(citation.role, "provenance");
    if (publication.kind === "internal-review") assert.equal(citation.role, "limits");
  }
});

test("directional field questions retain their observable, preparation and model boundaries", async () => {
  await rejects([
    ["propagation, coupling and localization cannot become one universal response", (data) => replaceStatement(data,
      "Effective field anisotropy is a universal vacuum property making propagation, coupling, localization and response one observed directional-admissibility quantity.")],
    ["a property label cannot become a realized transport mechanism", (data) =>
      dropLimit(data, /directional comparison must specify/)],
    ["an isotropic free scalar comparison does not realize an anisotropic vacuum", (data) =>
      dropLimit(data, /chosen scalar frequency comparison contains/)],
    ["the definition cannot become an independently checked empirical result", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["field-dynamics-algebra"];
    }],
    ["a boundary is not an observed instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }]
  ]);
});

test("framework, evolution and vacuum parents do not become anisotropy causes or carrier thresholds", async () => {
  const inputs = admission.formalDependencies.map(([, [from]]) => from);
  assert.deepEqual(inputs, ["scalar-dispersion-isotropy", "quantum-field-framework",
    "free-field-time-evolution", "free-field-vacuum"].map((id) => `phys:${id}`));
  await rejects([
    ["free field stationarity cannot establish every vacuum rotational symmetry", (data) =>
      dropLimit(data, /Original parent 1\.0 supplies/)],
    ["source-card weights, minima and organizational codes lack physical authority", (data) =>
      dropLimit(data, /original weights 0\.30/)],
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

test("the unresolved directional gradient and neighboring source cards cannot mutually validate a physical bridge", async () => {
  assert.ok(admission.formalDependencies.every(([, endpoints]) =>
    endpoints.every((id) => !id.startsWith("l0:"))), "No Level-0 physical construction edge is admitted");
  const data = await source();
  assert.equal(data.graph.claims.find((record) => record.id === "F12").status, "unresolved");
  assert.equal(data.graph.entities.find((record) => record.id === "l0:directional-gradient").status,
    "hypothesis");
  await rejects([
    ["an undefined gradient cannot become a field observable or prediction", (copy) =>
      dropLimit(copy, /Parent 0\.22 remains/)],
    ["pending polarization and excitation cards cannot provide reciprocal support", (copy) =>
      dropLimit(copy, /Source cards 1\.33 and 1\.34 remain/)],
    ["the Fock vacuum dependency cannot be replaced by an unreviewed physical gradient", (copy) => {
      copy.graph.relations.find((record) => record.target === nodeId
        && record.source === "phys:free-field-vacuum").source = "l0:directional-gradient";
    }]
  ]);
});

test("evidence placeholders and unrelated directional phenomena cannot establish vacuum anisotropy", async () => {
  await rejects([
    ["unnamed theoretical placeholders cannot become a primary experimental source", (data) =>
      dropLimit(data, /original conceptual and theoretical evidence placeholders/)],
    ["polarization, parity, nonreciprocity and scale running do not automatically identify spatial anisotropy", (data) =>
      dropLimit(data, /Polarization, parity violation, nonreciprocity/)],
    ["provenance cannot be upgraded to scientific confirmation", (data) => {
      claim(data).citations.find((record) => record.sourceId === "legacy-0").role = "supports";
    }],
    ["source reading cannot acquire an invented experimental preparation", (data) => {
      claim(data).contextIds = ["phys:field-anisotropy-experiment"];
    }]
  ]);
});

test("field anisotropy display retains its source and interpretation limits", async () => {
  await rejects([
    ["the source coordinates remain visible", (data) => { entity(data).sourceCoordinates = []; }],
    ["the display cannot invent an intrinsic universal vacuum direction", (data) => {
      entity(data).description = "An established intrinsic vacuum axis governing all propagation and transport.";
    }],
    ["readiness cannot promote a scoped definition into a measured cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes =
        "An experimentally established cause of all anisotropic field organization.";
    }]
  ]);
});
