import assert from "node:assert/strict";
import test from "node:test";
import {
  ENTANGLEMENT_BELL_ADMISSION,
  ENTANGLEMENT_BELL_CHECKS,
  ENTANGLEMENT_BELL_ANALYTICAL_SOURCES,
  validateEntanglementBellContracts
} from "../../models/causal-emergence/canonical/entanglement-bell.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function claim(data, suffix, prefix = "C") {
  const record = data.graph.claims.find((r) => r.id === `${prefix}-phys-shalm2015-${suffix}`);
  assert.ok(record, `Missing test target ${prefix}/${suffix}`);
  return record;
}
function replace(data, suffix, from, to, prefix = "C") {
  const record = claim(data, suffix, prefix);
  assert.ok(record.statement.includes(from), "The mutation must change the intended statement");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, prefix = "C") {
  const record = claim(data, suffix, prefix), before = record.limitations.length;
  record.limitations = record.limitations.filter((text) => !text.includes(fragment));
  assert.equal(record.limitations.length, before - 1, "Exactly one scientific boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateEntanglementBellContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateEntanglementBellContracts(context(changed)), undefined, name);
  }
}

test("Shalm Bell topology retains selection before counts and distinguishes counts from inference", () => {
  assert.deepEqual([...ENTANGLEMENT_BELL_CHECKS], []);
  assert.deepEqual([...ENTANGLEMENT_BELL_ANALYTICAL_SOURCES], []);
  assert.deepEqual(ENTANGLEMENT_BELL_ADMISSION.localStudySources, []);
  assert.equal(ENTANGLEMENT_BELL_ADMISSION.contexts.length, 3);
  assert.equal(ENTANGLEMENT_BELL_ADMISSION.observations.length, 2);
  const inputs = (suffix) => ENTANGLEMENT_BELL_ADMISSION.dependencies
    .filter((r) => r[2] === `shalm2015-${suffix}`).map((r) => r[1]);
  assert.deepEqual(inputs("trial-records"), [
    "shalm2015-acquisition-context", "shalm2015-response-context", "shalm2015-inference-context"
  ]);
  assert.deepEqual(inputs("bell-test"), [
    "shalm2015-trial-records", "shalm2015-response-context", "shalm2015-inference-context"
  ]);
  assert.ok(ENTANGLEMENT_BELL_ADMISSION.dependencies.every((r) => r[1].startsWith("shalm2015-")),
    "Neither the Delft runs nor a CHSH statistic supplies this CH-Eberhard analysis");
});

test("Shalm acquisition and apparatus retain actual source versions and local-outcome boundaries", async () => {
  await rejectMutations([
    ["publisher identity is bound", (d) => { d.graph.sources.find((r) => r.id === "shalm2015-bell").doi = "10.1103/PhysRevLett.115.250401"; }],
    ["selected supplement is not an unread later main-text version", (d) => {
      d.graph.sources.find((r) => r.id === "shalm2015-bell-supplement").review.limit = "The complete arXiv-v2 main article and raw logs were independently reproduced.";
    }],
    ["local nondetections are retained", (d) => replace(d, "acquisition-context", "+ for a detection in the accepted window or 0 otherwise", "+ for a detected pair; nondetections are discarded", "M")],
    ["independent pulse samples cannot be invented", (d) => removeLimit(d, "acquisition-context", "Pulse groupings reuse", "M")],
    ["detector efficiency cannot replace system efficiency", (d) => replace(d, "response-context", "74.7 +/- 0.3% and 75.6 +/- 0.3%", "91 +/- 2% at both sites", "M")],
    ["outcome-fixation remains an assumption", (d) => replace(d, "response-context", "assumes outcomes are fixed", "proves outcomes are fixed", "M")],
    ["setting unpredictability is not certified by output randomness", (d) => removeLimit(d, "response-context", "Conditional independence", "M")],
    ["response interpretation is not a second acquisition", (d) => { d.physics.studies.find((r) => r.id === "shalm2015-response").studyType = "primary-experiment"; }]
  ]);
});

test("Shalm counts preserve the training and stopping protocol instead of outcome-optimized sampling", async () => {
  await rejectMutations([
    ["total trials differ from relevant events", (d) => replace(d, "trial-records", "177358351 total trials", "12127 total trials")],
    ["full-run count differs from stopping-selected count", (d) => replace(d, "trial-records", "177358351", "182137032")],
    ["the positive event count has a fixed assignment", (d) => replace(d, "trial-records", "N_S=6378 ++ab events", "N_S=12127 detected photon pairs")],
    ["published counts are not a raw independent stream", (d) => removeLimit(d, "trial-records", "Relevant-event thinning")],
    ["training and testing are disjoint", (d) => replace(d, "inference-context", "A disjoint initial training segment", "The entire tested data set", "M")],
    ["all data cannot be scanned for the smallest p-value", (d) => removeLimit(d, "inference-context", "Stopping at the most favorable", "M")],
    ["the reported null bound allows memory", (d) => replace(d, "inference-context", "memory-robust", "iid-only", "M")],
    ["epsilon is twice the maximum excess setting probability", (d) => replace(d, "inference-context", "(1+epsilon)/2", "1/2+epsilon", "M")],
    ["the predictability correction retains its conditional bound", (d) => replace(d, "inference-context", "1/2+epsilon/(1+epsilon^2)", "1/2+epsilon/2", "M")],
    ["per-analysis values cannot become global selection-adjusted bounds", (d) => removeLimit(d, "inference-context", "multiple-selection-adjusted", "M")]
  ]);
});

test("Shalm result retains adjusted versus nominal tails and the limited local-null conclusion", async () => {
  await rejectMutations([
    ["nominal and adjusted tails cannot be exchanged", (d) => replace(d, "bell-test", "predictability-adjusted p=2.3e-7", "predictability-adjusted p=5.9e-9")],
    ["the adopted predictability bound is not a measured constant", (d) => replace(d, "bell-test", "using epsilon=0.003", "using a directly measured adversarial predictability epsilon=0.0002")],
    ["conflicting printed nominal values remain visible", (d) => removeLimit(d, "bell-test", "5.85e-9")],
    ["tail probability is not a posterior probability or causal mechanism", (d) => removeLimit(d, "bell-test", "probability that locality is true")],
    ["a published test has no invented local replay", (d) => { const c = claim(d, "bell-test"); c.status = "analytically-checked"; c.checkIds = ["nucleon-valence-algebra"]; }],
    ["inference is owned by the original statistical study", (d) => { claim(d, "bell-test").contextIds = ["shalm2015-acquisition"]; }],
    ["supplement support cannot silently vanish", (d) => { const c = claim(d, "bell-test"); c.citations = c.citations.filter((r) => r.sourceId !== "shalm2015-bell-supplement"); }],
    ["comparison is not an unrestricted nonlocal-causation claim", (d) => { d.physics.comparisons.find((r) => r.id === "shalm2015-local-null").limit = "All local physical mechanisms are disproved and faster-than-light causation is measured."; }]
  ]);
});

test("Shalm display and readiness records reject extra unreviewed semantic content", async () => {
  await rejectMutations([
    ["entity descriptions are scientific content", (d) => { d.graph.entities.find((r) => r.id === "phys:shalm2015-bell-test").description = "Direct measurement of instantaneous remote causation."; }],
    ["extra evidence is not silently admitted", (d) => { d.graph.entities.find((r) => r.id === "phys:shalm2015-trial-records").experimentalContext = { claim: "Every emitted pair was detected." }; }],
    ["extra source review fields are not accepted", (d) => { d.graph.sources.find((r) => r.id === "shalm2015-bell").review.independentReplay = true; }],
    ["readiness denotes cannot promote a conditional inference", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:shalm2015-bell-test").denotes = "A universally verified nonlocal interaction mechanism."; }],
    ["computational interpretation retains model role", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:shalm2015-inference-context").role = "experimental-context"; }],
    ["conditional findings are not empirical carrier instances", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:shalm2015-bell-test").instanceAdmission = "empirical"; }]
  ]);
});

test("Shalm required dependencies and the full validator prohibit an unreviewed pooled experiment", async () => {
  await rejectMutations(ENTANGLEMENT_BELL_ADMISSION.dependencies.map(([id]) => [
    `required scientific input remains: ${id}`, (d) => {
      const before = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, before - 1);
    }
  ]));
  await rejectMutations([
    ["descriptive input cannot become a causal influence", (d) => {
      d.graph.relations.find((r) => r.id === "physics:shalm2015-trial-records-shalm2015-bell-test").kind = "functional";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-shalm-pooled-null",
    source: "phys:shalm2015-acquisition-context", target: "phys:shalm2015-bell-test",
    kind: "descriptive", role: "interpretation-dependency",
    assertion: "The acquisition establishes a globally selected p-value pooled with independent Delft trials.",
    claimIds: ["M-phys-shalm2015-bell-test"], contextIds: ["shalm2015-inference"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined,
    "The complete source validator must reject an additional superficially valid but unreviewed input");
});
