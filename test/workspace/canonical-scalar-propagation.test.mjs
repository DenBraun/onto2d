import assert from "node:assert/strict";
import test from "node:test";
import {
  SCALAR_PROPAGATION_ADMISSION as admission,
  SCALAR_PROPAGATION_CHECKS,
  SCALAR_PROPAGATION_ANALYTICAL_SOURCES,
  validateScalarPropagationContracts
} from "../../models/causal-emergence/canonical/scalar-propagation.mjs";

const definition = "D-phys-free-scalar-propagation";
const nodeId = "phys:free-scalar-propagation";
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
  validateScalarPropagationContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateScalarPropagationContracts(context(data)),
      /Scalar propagation .* changed/, name);
  }
}


test("scalar propagation admits a formal definition without a measured or numerical result", async () => {
  assert.deepEqual(admission.definitions, [[nodeId, definition]]);
  assert.deepEqual(admission.formalDependencies.map(([, [from]]) => from), [
    "phys:scalar-dispersion-isotropy", "phys:free-field-time-evolution"
  ]);
  assert.equal(SCALAR_PROPAGATION_CHECKS.size, 0);
  assert.equal(SCALAR_PROPAGATION_ANALYTICAL_SOURCES.size, 0);
  for (const kind of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds",
    "inferenceSources", "localStudySources"]) assert.deepEqual(admission[kind], []);
  const data = await source();
  validateScalarPropagationContracts(context(data));
  assert.equal(claim(data).status, "definition");
  assert.deepEqual(claim(data).checkIds, []);
  assert.equal(claim(data).contextIds, undefined);
  for (const citation of claim(data).citations) {
    const publication = data.graph.sources.find((record) => record.id === citation.sourceId);
    assert.ok(publication.review.locators.includes(citation.locator),
      "Each formal citation remains within the actual reviewed source extent");
  }
});

test("the energy gradient transforms as a vector and preserves opposite-direction reciprocity", async () => {
  await rejects([
    ["the frequency cannot lose its rotational scalar", (data) =>
      replaceStatement(data, "k dot k", "k_x+k_y+k_z")],
    ["the group velocity is not the reciprocal phase speed", (data) =>
      replaceStatement(data, "k0/E(k0)", "E(k0)/|k0|")],
    ["rotation covariance rotates velocity components", (data) =>
      replaceStatement(data, "v_g(Rk)=R v_g(k)", "v_g(Rk)=v_g(k)")],
    ["opposite momenta have opposite velocity", (data) =>
      replaceStatement(data, "v_g(-k)=-v_g(k)", "v_g(-k)=v_g(k)")],
    ["an arbitrary unit-determinant matrix is not necessarily a rotation", (data) =>
      replaceStatement(data, "R^T R=I and ", "")],
    ["equal speed requires fixed momentum magnitude", (data) =>
      replaceStatement(data, "fixed |k| and mass", "arbitrary |k| and mass")],
    ["component changes and a packet direction are not an intrinsic vacuum axis", (data) =>
      dropLimit(data, /Rotation covariance changes/)]
  ]);
});

test("group velocity retains its narrow-envelope and localization limits", async () => {
  await rejects([
    ["zero momentum cannot select an envelope propagation direction", (data) =>
      replaceStatement(data, "k0!=0", "k0=0")],
    ["the stationary-phase approximation cannot become exact arbitrary-bandwidth rigid motion", (data) =>
      replaceStatement(data, "first-order dispersion and stationary phase", "exact rigid translation at any bandwidth")],
    ["spreading and escape do not automatically become intrinsic decay", (data) =>
      dropLimit(data, /The envelope must be smooth/)],
    ["a sharp momentum is not a normalized localized carrier", (data) =>
      dropLimit(data, /A sharp momentum eigenstate/)],
    ["an envelope velocity is not a flux, signal front or propulsion", (data) =>
      dropLimit(data, /Group velocity is the local/)]
  ]);
});

test("free mode phases and number conservation cannot acquire a generic instability exclusion", async () => {
  await rejects([
    ["a real mode phase does not damp with exp minus energy times time", (data) =>
      replaceStatement(data, "|exp(-i E(k)t)|=1", "|exp(-E(k)t)|=1")],
    ["the sector statement requires free number conservation", (data) =>
      replaceStatement(data, "[N,H]=0", "[N,H]!=0")],
    ["the model scope cannot become every interacting or open subsystem", (data) =>
      dropLimit(data, /This is a closed free model/)],
    ["a free number sector is not permanent localization", (data) =>
      replaceStatement(data, "preserves the specified free Fock number sector", "proves permanent localization and forbids decay of every excitation")],
    ["a formal definition cannot become an independently checked experiment", (data) => {
      claim(data).status = "analytically-checked";
      claim(data).checkIds = ["field-mode-evolution-algebra"];
    }]
  ]);
});

test("the declared flat free model and its inputs do not become directional maintenance causes", async () => {
  await rejects([
    ["the isotropic model excludes an imposed material axis", (data) =>
      replaceStatement(data, "no material, external or boundary axis", "an imposed anisotropic material and boundary axis")],
    ["the chosen massive branch cannot become a tachyonic model", (data) =>
      replaceStatement(data, "m>0", "m^2<0")],
    ...admission.formalDependencies.flatMap(([id]) => [
      [`input ${id} is not a causal functional relation`, (data) => {
        data.graph.relations.find((record) => record.id === id).kind = "functional";
      }],
      [`input ${id} cannot silently disappear`, (data) => {
        data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
      }]
    ]),
    ["the formal comparison is not an observed instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }]
  ]);
});

test("propagation descriptions and source extents retain their declared scientific scope", async () => {
  await rejects([
    ["an unread interacting model cannot replace the actual formal source", (data) => {
      claim(data).citations[0].locator = "All interacting anisotropic media and experimental propagation";
    }],
    ["the reviewed source cannot silently acquire a full-theory review", (data) => {
      data.graph.sources.find((record) => record.id === "tong-qft-free-fields").review.extent = "complete-all-theory-review";
    }],
    ["the browser cannot claim a measured directional persistence law", (data) => {
      entity(data).description = "An experimentally established universal directional persistence law.";
    }],
    ["displayed packet and flux limits cannot silently disappear", (data) => {
      entity(data).openObligations = [];
    }],
    ["source coordinates remain accessible", (data) => { entity(data).sourceCoordinates = []; }],
    ["readiness cannot promote a scoped definition to a universal cause", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === nodeId).denotes = "The physical cause of all directional transport.";
    }]
  ]);
});
