import assert from "node:assert/strict";
import test from "node:test";
import {
  SCALAR_DISPERSION_ISOTROPY_ADMISSION as admission,
  SCALAR_DISPERSION_ISOTROPY_CHECKS,
  SCALAR_DISPERSION_ISOTROPY_ANALYTICAL_SOURCES,
  validateScalarDispersionIsotropyContracts
} from "../../models/causal-emergence/canonical/scalar-dispersion-isotropy.mjs";

const definition = "D-phys-scalar-dispersion-isotropy";
const nodeId = "phys:scalar-dispersion-isotropy";
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
  validateScalarDispersionIsotropyContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateScalarDispersionIsotropyContracts(context(data)),
      /Scalar dispersion isotropy .* changed/, name);
  }
}

test("scalar orientation comparison admits only a sourced formal isotropic null", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.equal(admission.formalDependencies.length, 3);
  assert.equal(SCALAR_DISPERSION_ISOTROPY_CHECKS.size, 0);
  assert.equal(SCALAR_DISPERSION_ISOTROPY_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validateScalarDispersionIsotropyContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).contextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator),
      "Every formal citation stays within the actual source reading extent");
  }
});

test("proper rotations preserve the scalar norm and compare equal energy at fixed momentum magnitude", async () => {
  await rejects([
    ["component sums cannot replace the rotational scalar k dot k", (data) => replaceStatement(data,
      claim(data).statement.replace("k dot k", "k_x+k_y+k_z"))],
    ["a unit determinant without orthogonality cannot preserve the norm", (data) => replaceStatement(data,
      claim(data).statement.replace("R^T R=I and ", ""))],
    ["rotation invariance cannot become a preferred-axis dispersion", (data) => replaceStatement(data,
      claim(data).statement.replace("E(Rk)=E(k)", "E(Rk) differs from E(k) along a universal vacuum axis"))],
    ["a change of momentum magnitude is not an orientation test", (data) =>
      dropLimit(data, /equal energies of rotation-related momenta/)],
    ["a rotation does not make distinct momentum states identical", (data) => replaceStatement(data,
      "Rotation-related momenta have equal energy, so Rk and k are the same momentum label and the same quantum state.")]
  ]);
});

test("coordinate changes and active rotations keep their physical controls distinct", async () => {
  await rejects([
    ["passive covariance is not evidence for a directional response", (data) =>
      dropLimit(data, /passive orthogonal change/)],
    ["an active comparison must keep preparation fixed", (data) => replaceStatement(data,
      claim(data).statement.replace("fixed mass, state preparation and model", "fixed mass while changing state preparation and model"))],
    ["a zero wave vector supplies no orientation", (data) => replaceStatement(data,
      claim(data).statement.replace("nonzero wave vectors", "zero wave vectors"))],
    ["rotating the entire physical arrangement does not test orientation relative to its axis", (data) => replaceStatement(data,
      "Rotate k, the sample axis and all boundaries together; a change of coordinate components establishes intrinsic field anisotropy.")]
  ]);
});

test("the isotropic model cannot become a claim about every state, regulator or physical vacuum", async () => {
  await rejects([
    ["remove the restriction on physical boundaries and directional backgrounds", (data) =>
      dropLimit(data, /Hamiltonian is time independent/)],
    ["a cubic regulator does not have every continuous spatial rotation", (data) => replaceStatement(data,
      claim(data).statement.replace("in infinite flat space", "in a finite cubic box with an arbitrary anisotropic cutoff"))],
    ["the supplied scalar cannot become an unreviewed interacting gauge theory", (data) => replaceStatement(data,
      claim(data).statement.replace("free real scalar model", "arbitrary interacting gauge theory"))],
    ["a specified Fock vacuum cannot establish universal empty-space isotropy", (data) => replaceStatement(data,
      "Every possible quantum state and physical vacuum has isotropic propagation because a_p annihilates the chosen free scalar Fock vacuum.")],
    ["a formal null does not admit an observed anisotropic instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }]
  ]);
});

test("scalar construction, vacuum and evolution remain descriptive inputs without an anisotropy mechanism", async () => {
  assert.deepEqual(admission.formalDependencies.map(([, [from]]) => from), [
    "phys:free-scalar-quantization", "phys:free-field-vacuum", "phys:free-field-time-evolution"
  ]);
  await rejects([
    ["formal inputs do not establish an admissibility-gradient bridge", (data) =>
      dropLimit(data, /canonical field specification/)],
    ["a formal prediction does not become a numerical reproduction", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["field-mode-evolution-algebra"];
    }],
    ...admission.formalDependencies.flatMap(([id]) => [
      [`input ${id} is not a measured functional dependency`, (data) => {
        data.graph.relations.find((record) => record.id === id).kind = "functional";
      }],
      [`input ${id} cannot silently disappear`, (data) => {
        data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
      }]
    ])
  ]);
});

test("scalar rotation definitions retain exact source boundaries and consistent public descriptions", async () => {
  await rejects([
    ["unread interacting-field passages cannot replace the formal citation", (data) => {
      claim(data).citations[0].locator = "All interacting gauge theories and all physical vacuum measurements";
    }],
    ["the source cannot silently acquire a full-theory review", (data) => {
      data.graph.sources.find((record) => record.id === "tong-qft-free-fields").review.extent = "complete-all-theory-review";
    }],
    ["the browser description cannot invent a preferred vacuum axis", (data) => {
      entity(data).description = "Measured universal empty-space anisotropy along a preferred axis.";
    }],
    ["the displayed boundary cannot omit state and regulator restrictions", (data) => {
      entity(data).openObligations = [];
    }],
    ["the readable source coordinates remain available", (data) => { entity(data).sourceCoordinates = []; }],
    ["the readiness role cannot promote the null to a measured cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes =
        "An experimentally established cause of all field anisotropy.";
    }]
  ]);
});
