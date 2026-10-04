import assert from "node:assert/strict";
import test from "node:test";
import {
  W_DECAY_ADMISSION, W_DECAY_CHECKS, W_DECAY_ANALYTICAL_SOURCES,
  validateWDecayContracts
} from "../../models/causal-emergence/canonical/w-decay.mjs";

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
const claim = (data, suffix, method = false) => data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-lep2013-w-${suffix}`);
const study = (data, suffix) => data.physics.studies.find((r) => r.id === `lep2013-w-${suffix}`);
function removeLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((s) => !s.includes(fragment));
  assert.ok(record.limitations.length < before, "Mutation must remove a reviewed boundary");
}
function replaceStatement(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), "Mutation must change the intended source convention");
  record.statement = record.statement.replace(from, to);
}
async function rejectMutations(mutations) {
  const original = await source();
  validateWDecayContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateWDecayContracts(context(changed)), undefined, name);
  }
}

test("W decay admission separates response from inference without inventing a numerical replay", () => {
  assert.deepEqual([...W_DECAY_CHECKS], []);
  assert.deepEqual([...W_DECAY_ANALYTICAL_SOURCES], []);
  assert.deepEqual(W_DECAY_ADMISSION.localStudySources, []);
  assert.deepEqual(W_DECAY_ADMISSION.definitions, []);
  assert.equal(W_DECAY_ADMISSION.contexts.length, 6);
  assert.equal(W_DECAY_ADMISSION.observations.length, 3);
  for (const [id] of W_DECAY_ADMISSION.observations) {
    const stem = id === "lep2013-w-width" ? "width" : "branching";
    assert.deepEqual(W_DECAY_ADMISSION.dependencies.filter((r) => r[2] === id).map((r) => r[1]), [
      `lep2013-w-${stem}-acquisition-context`,
      `lep2013-w-${stem}-response-context`,
      `lep2013-w-${stem}-inference-context`,
      "inclusive-decay-width-branching"
    ]);
  }
});

test("W decay source and preparation retain the two acquisition ranges and adopted response", async () => {
  await rejectMutations([
    ["selected author passages are not a complete publisher review", (d) => {
      d.graph.sources.find((s) => s.id === "lep2013-w-width-branching").review.limit = "The full publisher report and detector acquisitions were reproduced.";
    }],
    ["the reviewed version cannot change silently", (d) => {
      d.graph.sources.find((s) => s.id === "lep2013-w-width-branching").url = "https://arxiv.org/pdf/1302.3415v1";
    }],
    ["width acquisition cannot borrow the narrower branching range", (d) => replaceStatement(d, "width-acquisition-context", "1996-2000 at 172-209 GeV", "1997-2000 at 183-207 GeV", true)],
    ["branching preparation cannot use the whole report abstract range", (d) => replaceStatement(d, "branching-acquisition-context", "1997-2000 at 183-207 GeV", "1995-2000 at 130-209 GeV", true)],
    ["modeled response is not another acquisition", (d) => { study(d, "width-response").studyType = "primary-experiment"; }],
    ["CC03 diagrammatic convention is not a directly observed gauge-invariant sample", (d) => replaceStatement(d, "branching-response-context", "explicitly not gauge invariant by itself", "directly observed and gauge invariant by itself", true)],
    ["mass-specific final-state mitigation cannot be assigned to the width analysis", (d) => removeLimit(d, "width-response-context", "modified jet reconstruction", true)],
    ["published response is not an empirical instance", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:lep2013-w-branching-response-context").role = "experimental-context";
    }]
  ]);
});

test("W width remains a correlated running-width fit rather than peak spread or timed lifetime", async () => {
  await rejectMutations([
    ["the source result retains its statistical and systematic components", (d) => replaceStatement(d, "width", "0.063 statistical +/- 0.055 systematic", "0.055 statistical +/- 0.063 systematic")],
    ["the parameter convention is not silently changed to a pole width", (d) => replaceStatement(d, "width", "s-dependent Breit-Wigner convention", "constant-width pole convention")],
    ["width extraction does not fix the Standard Model mass-width relation", (d) => replaceStatement(d, "width-inference-context", "varying m_W and Gamma_W independently", "fixing Gamma_W to its Standard Model mass relation", true)],
    ["energy width is not directly measured proper time", (d) => removeLimit(d, "width", "directly timed lifetime")],
    ["four rounded experiment summaries do not replay the full combination", (d) => removeLimit(d, "width", "Four rounded experiment summaries")],
    ["different data subsets do not supply a joint width-branching covariance", (d) => removeLimit(d, "width", "joint width/branching covariance")],
    ["a fit parameter cannot become an independently replicated acquisition", (d) => { study(d, "width-inference").studyType = "primary-experiment"; }]
  ]);
});

test("W branching preserves universality constraints, common data and unresolved printed inputs", async () => {
  await rejectMutations([
    ["the nonuniversal leptonic vector is not the constrained result", (d) => replaceStatement(d, "branching-nonuniversal", "Without lepton universality", "Assuming lepton universality")],
    ["the common leptonic fraction requires the universality premise", (d) => replaceStatement(d, "branching-universal", "Assuming lepton universality", "Without lepton universality")],
    ["mixed Table 5.5 columns cannot become one normalized vector", (d) => removeLimit(d, "branching-nonuniversal", "Table 5.5")],
    ["the twelve-input covariance cannot be replaced by independence", (d) => replaceStatement(d, "branching-inference-context", "full 12 by 12 covariance", "independent diagonal uncertainties", true)],
    ["source correlation disagreement must remain explicit", (d) => removeLimit(d, "branching-nonuniversal", "13.5%")],
    ["OPAL input-table total error disagreement must not be silently resolved", (d) => removeLimit(d, "branching-nonuniversal", "OPAL B_tau")],
    ["the illustrative non-normalized topology fractions must not be silently repaired", (d) => removeLimit(d, "branching-response-context", "0.910", true)],
    ["production cross sections with fixed branching do not independently establish branching", (d) => removeLimit(d, "branching-universal", "total production cross sections")],
    ["the same data cannot become an independent confirmation of universality", (d) => {
      d.physics.comparisons.find((c) => c.id === "lep2013-w-branching-constraints").candidate = "The two independently acquired results prove lepton universality.";
    }],
    ["branching outcome owns its corresponding inference context", (d) => { claim(d, "branching-universal").contextIds = ["lep2013-w-width-inference"]; }]
  ]);
});

test("W decay outcomes require every declared input and cannot borrow a local calculation", async () => {
  await rejectMutations(W_DECAY_ADMISSION.dependencies.map(([id]) => [
    `missing preparation, response, inference or convention: ${id}`, (d) => {
      const before = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, before - 1);
    }
  ]));
  await rejectMutations([
    ["a quoted width is not locally checked experimental inference", (d) => {
      claim(d, "width").status = "analytically-checked";
      claim(d, "width").checkIds = ["neutrino-phase-data-algebra"];
    }],
    ["fitted branching retains its exact primary locator", (d) => { claim(d, "branching-universal").citations = []; }],
    ["an inference dependency is not physical maintenance", (d) => {
      d.graph.relations.find((r) => r.id === "physics:lep2013-w-width-inference-context-lep2013-w-width").kind = "functional";
    }],
    ["a shared formal convention does not remove auxiliary calibration inputs", (d) => {
      d.graph.relations.find((r) => r.id === "physics:inclusive-decay-width-branching-lep2013-w-width").assertion = "No Z data or detector calibration enters the W inference.";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-propagator-w-decay", source: "phys:internal-propagator", target: "phys:lep2013-w-width",
    kind: "descriptive", role: "interpretation-dependency", assertion: "Virtual particles necessarily maintain every W resonance.",
    claimIds: ["M-phys-lep2013-w-width"], contextIds: ["lep2013-w-width-inference"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "No additional universal formation prerequisite is admitted");
});
