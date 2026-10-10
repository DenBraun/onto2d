import assert from "node:assert/strict";
import test from "node:test";
import {
  GLUON_FORMAL_ADMISSION, GLUON_FORMAL_CHECKS, GLUON_FORMAL_ANALYTICAL_SOURCES,
  validateGluonFormalContracts
} from "../../models/causal-emergence/canonical/gluon-formal.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (d, id = "gluon-self-coupling") => d.graph.claims.find((c) => c.id === `D-phys-${id}`);
function replace(d, from, to) {
  const c = claim(d);
  assert.ok(c.statement.includes(from));
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, id, fragment) {
  const c = claim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.equal(c.limitations.length, before - 1);
}
async function reject(mutations) {
  const original = await source();
  validateGluonFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateGluonFormalContracts(context(changed)), undefined, name);
  }
}

test("gluon interaction terms have formal inputs without a new measurement or analytical replay", () => {
  assert.deepEqual(GLUON_FORMAL_ADMISSION.definitions, [["phys:gluon-self-coupling", "D-phys-gluon-self-coupling"]]);
  assert.deepEqual(GLUON_FORMAL_ADMISSION.formalDependencies.map(([, endpoints]) => endpoints), [
    ["phys:qcd", "phys:gluon-self-coupling"],
    ["phys:gluon-fields", "phys:gluon-self-coupling"]
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(GLUON_FORMAL_ADMISSION[key], []);
  assert.equal(GLUON_FORMAL_CHECKS.size, 0);
  assert.equal(GLUON_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("gluon self-coupling preserves the stated field-strength sign and color normalization", async () => {
  await reject([
    ["the PDG field-strength sign is explicit", (d) => replace(d, "F=K-g_s B", "F=K+g_s B")],
    ["the cubic expansion sign cannot change", (d) => replace(d, "+(g_s/2) K.B", "-(g_s/2) K.B")],
    ["the quartic term cannot lose its second coupling power", (d) => replace(d, "-(g_s^2/4) B.B", "-(g_s/4) B.B")],
    ["the adjoint factor is distinct from the fundamental factor", (d) => replace(d, "C_A=3", "C_A=4/3")],
    ["the normalization cannot silently change", (d) => replace(d, "T_R=1/2", "T_R=1")],
    ["gauge-sector terms are not complete quantum amplitudes", (d) => removeLimit(d, "gluon-self-coupling", "gauge-fixed quantum action")],
    ["a formal term cannot acquire a detector preparation", (d) => { claim(d).experimentalContextIds = ["invented-gluon-detector"]; }],
    ["a definition cannot borrow an unrelated executable", (d) => { claim(d).checkIds = ["electron-moment-printed-algebra"]; }]
  ]);
});

test("gluon classification retains model-specific lattice, mass and parent boundaries", async () => {
  await reject([
    ["eight color components are not a carrier threshold", (d) => removeLimit(d, "gluon", "Eight color components")],
    ["a theoretical zero mass is not a free-particle measurement", (d) => removeLimit(d, "gluon", "theoretical")],
    ["source parent weights and process classification remain excluded", (d) => removeLimit(d, "gluon", "0.4/0.6")],
    ["renormalization scale is not a physical clock", (d) => removeLimit(d, "gluon", "Renormalization-scale evolution")],
    ["pure SU2 and massive-sea SU3 models cannot become physical gluon masses", (d) => removeLimit(d, "gluon", "pure SU(2)")],
    ["a conditional fit is not an imaged vertex", (d) => removeLimit(d, "gluon-self-coupling", "directly image")]
  ]);
});

test("displayed gluon records, readiness, reviewed passages and formal edges stay bound", async () => {
  const mutations = ["phys:gluon-fields", "phys:gluon-self-coupling"].flatMap((id) => [
    [`${id} cannot display a free-particle mass measurement`, (d) => { d.graph.entities.find((e) => e.id === id).description = "Measured free gluon mass is exactly zero."; }],
    [`${id} cannot display universal self-organization`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "All gluons exist only during a measured universal self-organization process."; }],
    [`${id} cannot admit an empirical instance from notation`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "empirical"; }],
    [`${id} cannot lose its source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }]
  ]);
  for (const [id] of GLUON_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`${id} cannot become a measured cause`, (d) => { d.graph.relations.find((r) => r.id === id).kind = "functional-support"; }]);
    mutations.push([`${id} cannot silently disappear`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
  }
  mutations.push(["the field-strength passage must actually be reviewed", (d) => {
    const s = d.graph.sources.find((s) => s.id === "pdg2025-qcd");
    const before = s.review.locators.length;
    s.review.locators = s.review.locators.filter((l) => !l.startsWith("Section 9.1, pages 1-2"));
    assert.equal(s.review.locators.length, before - 1);
  }]);
  await reject(mutations);
});

test("the full canonical validator rejects a false gluon process explanation", async () => {
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.readiness.nodeRoles.find((r) => r.nodeId === "phys:gluon-fields").denotes =
    "Measured universal arising from necessary weighted parents with one carrier.";
  assert.throws(() => validateCanonicalSource(changed), /Gluon-formal readiness changed/);
});
