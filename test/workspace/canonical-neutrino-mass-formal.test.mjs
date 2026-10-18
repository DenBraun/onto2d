import assert from "node:assert/strict";
import test from "node:test";
import {
  NEUTRINO_MASS_FORMAL_ADMISSION, NEUTRINO_MASS_FORMAL_CHECKS,
  NEUTRINO_MASS_FORMAL_ANALYTICAL_SOURCES, validateNeutrinoMassFormalContracts
} from "../../models/causal-emergence/canonical/neutrino-mass-formal.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const mixing = "D-phys-neutrino-mixing-parameterization";
const mass = "D-phys-neutrino-mass-model-boundary";
const sourceId = "pdg2025-neutrino-mass-structure";
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
  validateNeutrinoMassFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateNeutrinoMassFormalContracts(context(data)), /Neutrino mass formal .* changed/, name);
  }
}

test("neutrino mass formal admission adds definitions without invented experiments or fits", () => {
  assert.deepEqual(NEUTRINO_MASS_FORMAL_ADMISSION.definitions, [
    ["phys:neutrino-mixing-parameterization", mixing],
    ["phys:neutrino-mass-model-boundary", mass]
  ]);
  assert.equal(NEUTRINO_MASS_FORMAL_ADMISSION.formalDependencies.length, 3);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(NEUTRINO_MASS_FORMAL_ADMISSION[key], []);
  assert.equal(NEUTRINO_MASS_FORMAL_CHECKS.size, 0);
  assert.equal(NEUTRINO_MASS_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("PMNS convention preserves rotation order, conjugate signs and the actual Majorana phase convention", async () => {
  await rejects([
    ["the selected rotation order cannot change unnoticed", (d) => replace(d, mixing, "U=R23 R13(delta) R12 P", "U=R12 R13(delta) R23 P")],
    ["the complex 1-3 rotation preserves its conjugate sign", (d) => replace(d, mixing, "-s13 exp(i delta)", "s13 exp(i delta)")],
    ["Dirac rephasings remove additional column phases", (d) => replace(d, mixing, "with P=I", "with arbitrary observable Majorana phases in P")],
    ["PDG eta convention has no implicit half factor", (d) => replace(d, mixing, "diag(exp(i eta1),exp(i eta2),1)", "diag(exp(i eta1/2),exp(i eta2/2),1)")],
    ["the effective light submatrix is not automatically closed", (d) => dropLimit(d, mixing, "general 3-by-n")]
  ]);
});

test("formal mixing does not become observed CP violation or a Dirac/Majorana determination", async () => {
  await rejects([
    ["column phases cancel in ordinary oscillations", (d) => replace(d, mixing, "cancel from ordinary", "are measured directly by ordinary")],
    ["phase counting retains exceptional mass and angle limits", (d) => dropLimit(d, mixing, "massless state")],
    ["row/column probability invariance does not freely rephase a massive Majorana field", (d) => dropLimit(d, mixing, "A_prime(alpha,beta)")],
    ["oscillation phase cancellation is not cancellation from every process", (d) => dropLimit(d, mixing, "lepton-number-conserving")],
    ["a formal convention cannot gain an experimentally supported status", (d) => { claim(d, mixing).status = "publication-supported"; }],
    ["a formal convention cannot borrow an oscillation replay check", (d) => { claim(d, mixing).checkIds = ["neutrino-oscillation-arithmetic"]; }]
  ]);
});

test("minimal massless theory and mass alternatives retain their field, symmetry and inference boundaries", async () => {
  await rejects([
    ["the massless statement is restricted to the minimal renormalizable theory", (d) => replace(d, mass, "minimal renormalizable Standard Model", "general gauge-invariant Standard Model effective theory")],
    ["the missing right-handed field is part of the minimal boundary", (d) => replace(d, mass, "no right-handed neutrino singlets", "three right-handed neutrino singlets")],
    ["Dirac and Majorana alternatives cannot be experimentally selected by definition", (d) => replace(d, mass, "flavor-oscillation evidence alone does not select one", "flavor-oscillation evidence proves a Majorana see-saw mechanism")],
    ["the dimension-five exception cannot disappear", (d) => dropLimit(d, mass, "dimension-five extension")],
    ["a see-saw hierarchy cannot be read out of field labels", (d) => dropLimit(d, mass, "hierarchy and matching")],
    ["splittings do not establish every absolute mass or a charged-fermion mass route", (d) => dropLimit(d, mass, "all three masses are positive")]
  ]);
});

test("mass review, definition roles and dependency direction remain bound to reviewed formal meaning", async () => {
  const mutations = [
    ["the mass review URL cannot become an unrelated experimental listing", (d) => { d.graph.sources.find((s) => s.id === sourceId).url = "https://pdg.lbl.gov/2025/listings/rpp2025-list-nu-e.pdf"; }],
    ["a selected formal source cannot claim a full global-fit review", (d) => { d.graph.sources.find((s) => s.id === sourceId).review.extent = "complete-experimental-global-fit"; }],
    ["reading limits cannot become measured neutrino character", (d) => { d.graph.sources.find((s) => s.id === sourceId).review.limit = "Oscillations establish a nonzero Majorana mass for all three states."; }]
  ];
  for (const [id] of NEUTRINO_MASS_FORMAL_ADMISSION.definitions) {
    mutations.push([`${id} retains source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }]);
    mutations.push([`${id} is not an observed occurrence`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }]);
  }
  for (const [id] of NEUTRINO_MASS_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`required definition input ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`formal input ${id} cannot become measured mass formation`, (d) => { d.graph.relations.find((r) => r.id === id).assertion = "A measured intervention produces three Majorana masses."; }]);
  }
  await rejects(mutations);
});
