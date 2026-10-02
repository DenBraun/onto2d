import assert from "node:assert/strict";
import test from "node:test";
import { HIGGS_TAU_ADMISSION, HIGGS_TAU_CHECKS, HIGGS_TAU_ANALYTICAL_SOURCES,
  validateHiggsTauContracts } from "../../models/causal-emergence/canonical/higgs-tau.mjs";

let originalPromise;
const source = () => originalPromise ??= import("../../models/causal-emergence/canonical/source.mjs")
  .then(({ loadCanonicalSource }) => loadCanonicalSource());
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (d, suffix, prefix = "C") => d.graph.claims.find((c) => c.id === `${prefix}-phys-${suffix}`);
function removeLimit(d, suffix, fragment, prefix = "C") {
  const c = claim(d, suffix, prefix), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.ok(c.limitations.length < before, `Missing mutation target ${fragment}`);
}
function rejectMutations(original, mutations) {
  for (const [name, mutate] of mutations) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateHiggsTauContracts(context(copy)), undefined, name);
  }
}

test("Higgs-tau admission does not create an executable measurement certification", () => {
  assert.equal(HIGGS_TAU_CHECKS.size, 0);
  assert.equal(HIGGS_TAU_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(HIGGS_TAU_ADMISSION.localStudySources, []);
  assert.equal(HIGGS_TAU_ADMISSION.definitions.length, 2);
  assert.equal(HIGGS_TAU_ADMISSION.contexts.length, 4);
  assert.equal(HIGGS_TAU_ADMISSION.observations.length, 4);
  assert.equal(HIGGS_TAU_ADMISSION.studyIds.length, 3);
});

test("CMS tau acquisition, response and dependent displays keep their scientific boundaries", async () => {
  const original = await source();
  validateHiggsTauContracts(context(original));
  rejectMutations(original, [
    ["missing neutrinos are not reconstructed tracks", (d) => removeLimit(d, "tau-pair-readout", "Neutrinos are unobserved", "D")],
    ["one-dimensional exception remains", (d) => removeLimit(d, "cms2016-tau-selected-distributions", "one-dimensional")],
    ["calibration controls can overlap selection", (d) => removeLimit(d, "cms2016-tau-response-context", "Less than half", "M")],
    ["Run1 combination is not the 2016-only result", (d) => removeLimit(d, "cms2016-tau-rate-excess", "Run1-plus-2016")],
    ["fixed mass is an adopted input", (d) => removeLimit(d, "cms2016-tau-rate-excess", "125.09")],
    ["local significance is publication-supported", (d) => { claim(d, "cms2016-tau-rate-excess").status = "analytically-checked"; }],
    ["sensitive-bin display is not a second likelihood", (d) => removeLimit(d, "cms2016-tau-display-summary", "second likelihood")],
    ["printed component totals are not silently repaired", (d) => removeLimit(d, "cms2016-tau-display-summary", "No repaired total")]
  ]);
});

test("rate normalization and common-coupling compatibility cannot fill unreported model choices", async () => {
  const original = await source();
  rejectMutations(original, [
    ["narrow-resonance assumption remains", (d) => removeLimit(d, "higgs-rate-modifiers", "single narrow resonance", "D")],
    ["generic identity does not identify CMS width variant", (d) => removeLimit(d, "higgs-rate-modifiers", "implemented width/loop map", "D")],
    ["HWW is background in the tau rate fit", (d) => removeLimit(d, "cms2016-tau-rate-excess", "background in the tau")],
    ["HWW changes role in the common-modifier scan", (d) => removeLimit(d, "cms2016-tau-coupling-context", "H-to-WW is treated as signal", "M")],
    ["common fermion modifier is not isolated tau Yukawa", (d) => { claim(d, "cms2016-tau-coupling-compatibility").statement = "The scan independently measures the tau Yukawa."; }],
    ["unresolved model implementation survives interpretation", (d) => removeLimit(d, "cms2016-tau-coupling-compatibility", "not fully specified in the reviewed passages")]
  ]);
});

test("observations and inference contexts remain explicit inputs without fit-summary cycles", async () => {
  const original = await source();
  for (const suffix of [
    "cms2016-tau-acquisition-context-cms2016-tau-selected-distributions",
    "cms2016-tau-response-context-cms2016-tau-selected-distributions",
    "cms2016-tau-selected-distributions-cms2016-tau-rate-excess",
    "cms2016-tau-response-context-cms2016-tau-rate-excess",
    "cms2016-tau-rate-context-cms2016-tau-rate-excess",
    "cms2016-tau-rate-context-cms2016-tau-display-summary",
    "cms2016-tau-selected-distributions-cms2016-tau-coupling-compatibility",
    "cms2016-tau-coupling-context-cms2016-tau-coupling-compatibility",
    "higgs-rate-modifiers-cms2016-tau-coupling-compatibility"
  ]) {
    const copy = structuredClone(original);
    copy.graph.relations = copy.graph.relations.filter((r) => r.id !== `physics:${suffix}`);
    assert.throws(() => validateHiggsTauContracts(context(copy)), undefined, suffix);
  }
  for (const [from, to] of [
    ["cms2016-tau-display-summary", "cms2016-tau-rate-excess"],
    ["cms2016-tau-rate-excess", "cms2016-tau-coupling-compatibility"],
    ["atlas2012-boson-mass", "cms2016-tau-rate-excess"]
  ]) assert.ok(!original.graph.relations.some((r) => r.source === `phys:${from}` && r.target === `phys:${to}`));
});
