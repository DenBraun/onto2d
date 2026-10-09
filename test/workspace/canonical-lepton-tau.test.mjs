import assert from "node:assert/strict";
import test from "node:test";
import {
  LEPTON_TAU_ADMISSION, LEPTON_TAU_CHECKS, LEPTON_TAU_ANALYTICAL_SOURCES,
  validateLeptonTauContracts
} from "../../models/causal-emergence/canonical/lepton-tau.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs").then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const claim = (data, suffix, method = false) => data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-belle2014-tau-${suffix}`);
function replace(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), "The mutation must change its intended statement");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method);
  const length = record.limitations.length;
  record.limitations = record.limitations.filter((s) => !s.includes(fragment));
  assert.equal(record.limitations.length, length - 1, "Exactly one boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateLeptonTauContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateLeptonTauContracts(context(changed)), undefined, name);
  }
}

test("tau-lifetime admission distinguishes selected proper lengths, response and inference without a local replay", () => {
  assert.deepEqual([...LEPTON_TAU_CHECKS], []);
  assert.deepEqual([...LEPTON_TAU_ANALYTICAL_SOURCES], []);
  assert.deepEqual(LEPTON_TAU_ADMISSION.localStudySources, []);
  assert.deepEqual(LEPTON_TAU_ADMISSION.definitions, []);
  assert.equal(LEPTON_TAU_ADMISSION.contexts.length, 3);
  assert.equal(LEPTON_TAU_ADMISSION.observations.length, 2);
  const inputs = (target) => LEPTON_TAU_ADMISSION.dependencies.filter((r) => r[2] === target).map((r) => r[1]);
  assert.deepEqual(inputs("belle2014-tau-decay-lengths"), ["belle2014-tau-acquisition-context", "belle2014-tau-response-context"]);
  assert.deepEqual(inputs("belle2014-tau-lifetime"), [
    "belle2014-tau-decay-lengths", "belle2014-tau-response-context", "belle2014-tau-inference-context", "lepton-fields"
  ]);
  assert.equal(LEPTON_TAU_ADMISSION.dependencies.some((r) => r[1] === "resonance-lifetime-convention"), false,
    "This is a length-based lifetime inference, not an unperformed intrinsic-width conversion");
});

test("tau selection and proper-length reconstruction retain the paired sample and auxiliary controls", async () => {
  await rejectMutations([
    ["the reviewed author version cannot change", (d) => { d.graph.sources.find((r) => r.id === "belle2014-tau-lifetime").url = "https://arxiv.org/pdf/1310.8503v2"; }],
    ["the author posting year is not the journal publication year", (d) => { d.graph.sources.find((r) => r.id === "belle2014-tau-lifetime").year = 2013; }],
    ["the declared exposure remains the actual acquisition", (d) => replace(d, "acquisition-context", "711 fb^-1", "1.1 million fb^-1", true)],
    ["reconstruction uses a mean of the direction solutions", (d) => replace(d, "response-context", "use their mean vector", "observe the unique true direction", true)],
    ["reconstructed t has length units", (d) => replace(d, "response-context", "a length equal to c times proper time", "a directly clocked proper time in seconds", true)],
    ["adopted tau mass is not measured simultaneously", (d) => removeLimit(d, "response-context", "not measured in this fit", true)],
    ["dimuon calibration and simulated Figure2 are not tau data", (d) => removeLimit(d, "response-context", "auxiliary e+e-->", true)],
    ["the event count is not a set of independent proper clocks", (d) => replace(d, "decay-lengths", "selected data events", "independent directly timed tau decays")],
    ["pair reconstruction cannot lose shared-event dependence", (d) => removeLimit(d, "decay-lengths", "same paired event")],
    ["response computation is not another primary acquisition", (d) => { d.physics.studies.find((r) => r.id === "belle2014-tau-response").studyType = "primary-experiment"; }]
  ]);
});

test("tau mean and errors preserve length units, fitted response and calibration scope", async () => {
  await rejectMutations([
    ["lifetime units cannot silently change", (d) => replace(d, "lifetime", "fs", "ps")],
    ["statistical and systematic errors remain separate", (d) => replace(d, "lifetime", "0.53 statistical +/- 0.33 systematic", "0.33 statistical +/- 0.53 systematic")],
    ["resolution asymmetry is fixed, not freely inferred", (d) => replace(d, "inference-context", "fix asymmetry A=2.5 cm^-1", "freely fit asymmetry A with no lifetime correlation", true)],
    ["simulated background shapes and normalization stay conditional inputs", (d) => replace(d, "inference-context", "fixed MC background shapes and normalizations", "exactly measured background-free signal", true)],
    ["fit and systematic propagation are not locally reproduced", (d) => removeLimit(d, "lifetime", "No full response")],
    ["the source table is in micrometers", (d) => removeLimit(d, "inference-context", "Table I systematic errors", true)],
    ["this result cannot become universal lepton permanence", (d) => removeLimit(d, "lifetime", "tau-specific mean")],
    ["MC calibration is not independent experimental replication", (d) => {
      d.physics.comparisons.find((r) => r.id === "belle2014-tau-calibration").limit = "Three independently acquired tau experiments reproduce the exact true lifetime.";
    }]
  ]);
});

test("tau findings retain evidence inputs and cannot borrow a check or acquire unreviewed width semantics", async () => {
  await rejectMutations(LEPTON_TAU_ADMISSION.dependencies.map(([id]) => [
    `the declared input must remain: ${id}`, (d) => {
      const length = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, length - 1);
    }
  ]));
  await rejectMutations([
    ["the lifetime belongs to the inference context", (d) => { claim(d, "lifetime").contextIds = ["belle2014-tau-acquisition"]; }],
    ["publication support is not an analytical replay", (d) => {
      claim(d, "lifetime").status = "analytically-checked";
      claim(d, "lifetime").checkIds = ["electroweak-mass-algebra"];
    }],
    ["a publication finding needs its source locator", (d) => { claim(d, "lifetime").citations = []; }],
    ["the tau species is interpretation, not maintenance", (d) => {
      d.graph.relations.find((r) => r.id === "physics:lepton-fields-belle2014-tau-lifetime").kind = "functional";
    }],
    ["reported lifetime does not admit a located particle instance", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:belle2014-tau-lifetime").instanceAdmission = "empirical";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-width-belle-lifetime", source: "phys:resonance-lifetime-convention", target: "phys:belle2014-tau-lifetime",
    kind: "descriptive", role: "interpretation-dependency", assertion: "An independently measured intrinsic width determines this lifetime.",
    claimIds: ["M-phys-belle2014-tau-lifetime"], contextIds: ["belle2014-tau-inference"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "No unreviewed width-derived lifetime relation is admitted");
});
