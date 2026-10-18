import assert from "node:assert/strict";
import test from "node:test";
import {
  EFT_MATCHING_ADMISSION, EFT_MATCHING_CHECKS,
  EFT_MATCHING_ANALYTICAL_SOURCES, validateEftMatchingContracts
} from "../../models/causal-emergence/canonical/eft-matching.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const expansion = "D-phys-effective-operator-expansion";
const matching = "D-phys-threshold-matching";
const decoupling = "D-phys-decoupling-validity";
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).description = record.statement;
}
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one limit: ${fragment}`);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateEftMatchingContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateEftMatchingContracts(context(data)), /EFT matching .* changed/, name);
  }
}

test("EFT matching inventory has three definitions without a new experiment or replay", () => {
  assert.deepEqual(EFT_MATCHING_ADMISSION.definitions, [
    ["phys:effective-operator-expansion", expansion],
    ["phys:threshold-matching", matching],
    ["phys:decoupling-validity", decoupling]
  ]);
  assert.equal(EFT_MATCHING_ADMISSION.formalDependencies.length, 4);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(EFT_MATCHING_ADMISSION[key], []);
  assert.equal(EFT_MATCHING_CHECKS.size, 0);
  assert.equal(EFT_MATCHING_ANALYTICAL_SOURCES.size, 0);
});

test("local EFT expansion retains coefficient assumptions and a stated truncation", async () => {
  await rejects([
    ["operator suppression requires the inverse heavy-mass power", (d) => replace(d, expansion, "O_i^(d)/M^(d-4)", "O_i^(d)*M^(d-4)")],
    ["dimension labels cannot prove a numerical error bound", (d) => replace(d, expansion, "With bounded coefficients and controlled loop/logarithmic corrections", "With no assumptions about coefficients or loops")],
    ["the realized symmetries and operator basis are supplied inputs", (d) => dropLimit(d, expansion, "Symmetries restrict allowed operators")],
    ["relevant and marginal threshold terms cannot be thrown away", (d) => dropLimit(d, expansion, "d<=4 sector")],
    ["retained orders and omitted contributions cannot disappear", (d) => dropLimit(d, expansion, "first omitted contributions")],
    ["a formal operator expansion cannot become an observed EFT completion", (d) => { claim(d, expansion).status = "publication-supported"; }]
  ]);
});

test("threshold matching keeps infrared subtraction, conventions and boundary coefficients", async () => {
  await rejects([
    ["common infrared contributions must cancel in the difference", (d) => replace(d, matching, "subtract EFT contributions", "add EFT contributions")],
    ["RG evolution cannot determine missing matching boundary data", (d) => replace(d, matching, "does not determine them without those data", "determines them without those data")],
    ["unknown ultraviolet masses and couplings cannot be silently fitted", (d) => dropLimit(d, matching, "otherwise coefficients require phenomenological constraints")],
    ["Wilson coefficients cannot silently become scheme-independent observables", (d) => dropLimit(d, matching, "individual Wilson coefficients")],
    ["a tree weak relation cannot become a precision threshold measurement", (d) => dropLimit(d, matching, "Its tree Fermi relation")],
    ["the V-A current cannot become P_L with its old coefficient", (d) => replace(d, matching, "(1-gamma5)", "(1-gamma5)/2")],
    ["charged-current contact matching preserves the Fermi coefficient sign", (d) => replace(d, matching, "L_eff,CC=-(G_F/sqrt(2)) O6", "L_eff,CC=+(G_F/sqrt(2)) O6")],
    ["the retained dimension-six contact cannot silently become a loop-complete basis", (d) => replace(d, matching, "retaining this dimension-six contact operator at tree level", "retaining all operators through one loop")],
    ["the exact nonlocal heavy integral cannot replace a finite local EFT", (d) => dropLimit(d, matching, "exact heavy-field functional integral")],
    ["paper mathematics cannot borrow a local executable check", (d) => { claim(d, matching).checkIds = ["field-dynamics-algebra"]; }]
  ]);
});

test("decoupling preserves heavy virtual effects and excludes a universal mass limit", async () => {
  await rejects([
    ["heavy effects remain in the light parameters and coefficients", (d) => replace(d, decoupling, "while retaining its virtual effects", "while eliminating its virtual effects")],
    ["suppression is conditional on non-growing matching coefficients", (d) => replace(d, decoupling, "non-growing dimensionless matching coefficients", "arbitrarily growing dimensionless matching coefficients")],
    ["full-theory MSbar beta functions do not automatically remove heavy fields", (d) => dropLimit(d, decoupling, "MSbar beta functions")],
    ["masses tied to growing couplings cannot lose their nondecoupling caveat", (d) => dropLimit(d, decoupling, "coupling also grows")],
    ["a heavy expansion cannot extend through a production threshold", (d) => dropLimit(d, decoupling, "Near a production threshold")],
    ["a change of description is not a measured formation or carrier minimum", (d) => dropLimit(d, decoupling, "universal minimal number")]
  ]);
});

test("EFT source extent and descriptive dependencies retain their evidence roles", async () => {
  const mutations = EFT_MATCHING_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} keeps actual source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }],
    [`${id} cannot acquire an observed instance`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }]
  ]);
  for (const [id] of EFT_MATCHING_ADMISSION.formalDependencies) {
    mutations.push([`input ${id} must remain present`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`input ${id} is not an observed intervention`, (d) => { d.graph.relations.find((r) => r.id === id).kind = "functional"; }]);
  }
  mutations.push(
    ["a selected formal review is not the independently read decoupling proof", (d) => { d.graph.sources.find((s) => s.id === "georgi1993-effective-field-theory").review.extent = "full-primary-decoupling-theorem-proof"; }],
    ["the reviewed author PDF cannot become an unreviewed version", (d) => { d.graph.sources.find((s) => s.id === "georgi1993-effective-field-theory").url = "https://example.invalid/unread.pdf"; }],
    ["formal matching is not primary experimental evidence", (d) => { claim(d, matching).citations[0].sourceId = "cms2020-running-top"; }]
  );
  await rejects(mutations);
});

test("the weak matching example reuses the admitted contact definition", async () => {
  const data = await source();
  const weak = data.graph.entities.find((record) => record.id === "phys:low-energy-weak-exchange");
  assert.ok(weak.description.includes("G_F/sqrt(2)=g^2/(8*M_W^2)=1/(2*v^2)"));
  const relation = data.graph.relations.find((record) => record.id === "physics:low-energy-weak-exchange-threshold-matching");
  assert.equal(relation.source, weak.id);
  assert.equal(relation.target, "phys:threshold-matching");
  assert.equal(relation.kind, "descriptive");
  assert.equal(relation.role, "definition-dependency");
  assert.ok(relation.assertion.includes("bounded tree matching example"));
});

test("canonical validation invokes the EFT matching contract", async () => {
  const data = structuredClone(await source());
  replace(data, matching, "does not determine them without those data", "determines them without those data");
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  assert.throws(() => validateCanonicalSource(data), /EFT matching .* changed/);
});
