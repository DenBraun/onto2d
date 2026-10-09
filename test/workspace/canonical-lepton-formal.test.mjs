import assert from "node:assert/strict";
import test from "node:test";
import {
  LEPTON_FORMAL_ADMISSION, LEPTON_FORMAL_CHECKS, LEPTON_FORMAL_ANALYTICAL_SOURCES,
  validateLeptonFormalContracts
} from "../../models/causal-emergence/canonical/lepton-formal.mjs";

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
const claim = (d, id = "lepton-charge-flavor") => d.graph.claims.find((c) => c.id === `D-phys-${id}`);
function replace(d, from, to) {
  const c = claim(d);
  assert.ok(c.statement.includes(from), "Mutation must change the intended convention");
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, id, fragment) {
  const c = claim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.equal(c.limitations.length, before - 1, "Mutation must remove exactly one existing boundary");
}
async function reject(mutations) {
  const original = await source();
  validateLeptonFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateLeptonFormalContracts(context(changed)), undefined, name);
  }
}

test("lepton conventions reuse field, current and mixing inputs without new measurement or replay", () => {
  assert.deepEqual(LEPTON_FORMAL_ADMISSION.definitions, [["phys:lepton-charge-flavor", "D-phys-lepton-charge-flavor"]]);
  assert.deepEqual(LEPTON_FORMAL_ADMISSION.formalDependencies.map(([, [from, to]]) => [from, to]), [
    ["phys:lepton-fields", "phys:lepton-charge-flavor"],
    ["phys:weak-gauge-currents", "phys:lepton-charge-flavor"],
    ["phys:neutrino-flavor-mixing", "phys:lepton-charge-flavor"]
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(LEPTON_FORMAL_ADMISSION[key], []);
  assert.equal(LEPTON_FORMAL_CHECKS.size, 0);
  assert.equal(LEPTON_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("lepton charges, chirality and neutrino bases cannot become universal identities", async () => {
  await reject([
    ["antileptons cannot keep the negative charged-lepton sign", (d) => replace(d, "their antiparticles have +e", "their antiparticles have -e")],
    ["neutral fields cannot acquire an electromagnetic charge", (d) => replace(d, "electrically neutral", "electrically charged")],
    ["a chiral field is not an exact helicity statement for a massive beam", (d) => replace(d, "is not the same label for a massive lepton", "is always the same label for a massive lepton")],
    ["a flavor readout cannot identify an unchanged propagation species", (d) => removeLimit(d, "lepton-charge-flavor", "does not track persistent flavor")],
    ["a declared label cannot certify universal objecthood", (d) => removeLimit(d, "lepton-charge-flavor", "different counting domains")],
    ["a definition cannot borrow a detector preparation", (d) => { claim(d).experimentalContextIds = ["invented-lepton-detector"]; }],
    ["a formal convention cannot borrow an unrelated numerical witness", (d) => { claim(d).checkIds = ["electron-moment-printed-algebra"]; }]
  ]);
});

test("lepton classification retains finite decay, hadronic scattering and bound-electron scope", async () => {
  await reject([
    ["color singlet cannot become no interaction with hadronic matter", (d) => removeLimit(d, "lepton", "no direct QCD color coupling")],
    ["a channel lifetime bound cannot become eternal stability", (d) => removeLimit(d, "lepton", "searched channel")],
    ["the hydrogen example cannot become a construction by every lepton", (d) => removeLimit(d, "lepton", "ordinary atomic example")],
    ["catalogue weights and minima cannot return as measured constraints", (d) => removeLimit(d, "lepton", "0.7/0.3")],
    ["the scattering qualifier keeps its primary account", (d) => { claim(d, "lepton").citations = claim(d, "lepton").citations.filter((r) => r.sourceId !== "bernauer2014"); }],
    ["the hydrogen qualifier keeps the adopted bound-state model", (d) => { claim(d, "lepton").citations = claim(d, "lepton").citations.filter((r) => r.sourceId !== "bethe1947"); }]
  ]);
});

test("lepton displayed records, evidence coordinates and formal dependencies remain bound", async () => {
  const mutations = ["phys:lepton-fields", "phys:lepton-charge-flavor"].flatMap((id) => [
    [`${id} cannot display an unsupported lifetime measurement`, (d) => { d.graph.entities.find((e) => e.id === id).description = "All leptons have a measured infinite lifetime."; }],
    [`${id} cannot display a contradictory atlas explanation`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "Measured eternal stability of all leptons, with universal minima."; }],
    [`${id} cannot erase its evidence boundaries`, (d) => { d.graph.entities.find((e) => e.id === id).openObligations = ["All atom formation is reconstructed."]; }],
    [`${id} cannot lose the actual source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = [{ sourceId: "lamb1947", locator: "unreviewed lifetime fit" }]; }]
  ]);
  for (const [id] of LEPTON_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`formal input ${id} cannot disappear`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`formal input ${id} cannot become physical maintenance`, (d) => { d.graph.relations.find((r) => r.id === id).kind = "functional-support"; }]);
  }
  mutations.push(["field components are not empirical particle instances", (d) => {
    d.readiness.nodeRoles.find((r) => r.nodeId === "phys:lepton-charge-flavor").instanceAdmission = "empirical";
  }]);
  await reject(mutations);
});

test("lepton formal sources preserve the actual passages and gamma5 convention boundary", async () => {
  await reject([
    ["selected spinor reading cannot become a complete experimental article", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-dirac-spinors").review.extent = "full-primary-article"; }],
    ["Tong projector signs cannot be silently substituted for PDG signs", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-dirac-spinors").review.limit = "All conventions agree without qualification."; }],
    ["charge labels retain their reviewed table passage", (d) => {
      const s = d.graph.sources.find((s) => s.id === "pdg2025-leptons");
      const before = s.review.locators.length;
      s.review.locators = s.review.locators.filter((l) => !l.includes("charge-conjugate muon modes"));
      assert.equal(s.review.locators.length, before - 1);
    }],
    ["flavor versus mass labels retain their reviewed mixing passage", (d) => {
      const s = d.graph.sources.find((s) => s.id === "pdg2025-neutrino-mixing");
      s.review.locators = s.review.locators.filter((l) => !l.includes("charged-current mixing"));
    }]
  ]);
});
