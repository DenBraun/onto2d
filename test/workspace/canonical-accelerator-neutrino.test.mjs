import assert from "node:assert/strict";
import test from "node:test";
import { ACCELERATOR_NEUTRINO_ADMISSION, ACCELERATOR_NEUTRINO_CHECKS,
  ACCELERATOR_NEUTRINO_ANALYTICAL_SOURCES, validateAcceleratorNeutrinoContracts }
  from "../../models/causal-emergence/canonical/accelerator-neutrino.mjs";

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
    assert.throws(() => validateAcceleratorNeutrinoContracts(context(copy)), undefined, name);
  }
}

test("accelerator appearance remains a published result without a local executable certificate", () => {
  assert.equal(ACCELERATOR_NEUTRINO_CHECKS.size, 0);
  assert.equal(ACCELERATOR_NEUTRINO_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(ACCELERATOR_NEUTRINO_ADMISSION.localStudySources, []);
  assert.equal(ACCELERATOR_NEUTRINO_ADMISSION.definitions.length, 1);
  assert.equal(ACCELERATOR_NEUTRINO_ADMISSION.contexts.length, 3);
  assert.equal(ACCELERATOR_NEUTRINO_ADMISSION.observations.length, 6);
});

test("OPERA selection, topology and modeled means retain their distinct observables", async () => {
  const original = await source();
  validateAcceleratorNeutrinoContracts(context(original));
  rejectMutations(original, [
    ["beam interaction fractions are not flux fractions", (d) => removeLimit(d, "opera2015-acquisition-context", "not incident flux fractions", "M")],
    ["all interactions differ from analyzed events", (d) => removeLimit(d, "opera2015-analyzed-sample", "different selection boundaries")],
    ["decay topology is not continuous neutrino tracking", (d) => removeLimit(d, "tau-neutrino-appearance-readout", "not direct tracking", "D")],
    ["decay geometry is not an ensemble lifetime", (d) => removeLimit(d, "opera2015-fifth-candidate", "neither is an ensemble tau lifetime")],
    ["candidate counts preserve channel assignment", (d) => { claim(d, "opera2015-decay-candidates").statement = "Five tau candidates with no channel information."; }],
    ["expectations require response and normalization", (d) => removeLimit(d, "opera2015-expected-counts", "census alone")],
    ["nominal parameter input cannot be retroactively fitted", (d) => removeLimit(d, "opera2015-expected-counts", "retroactively replaced")],
    ["earlier normalization erratum remains inspectable", (d) => { claim(d, "opera2015-expected-counts").citations = claim(d, "opera2015-expected-counts").citations.filter((c) => c.sourceId !== "opera2014-method-erratum"); }],
    ["auxiliary preparations need not share one exposure", (d) => removeLimit(d, "opera2015-response-context", "separate auxiliary preparations", "M")]
  ]);
});

test("OPERA channel-aware inference retains published confidence and same-data boundaries", async () => {
  const original = await source();
  rejectMutations(original, [
    ["Fisher product is not the calibrated probability", (d) => removeLimit(d, "opera2015-appearance-evidence", "not the final calibrated")],
    ["independent channel factors are a declared model", (d) => removeLimit(d, "opera2015-inference-context", "authors' statistical model", "M")],
    ["nuisance details cannot be invented", (d) => removeLimit(d, "opera2015-appearance-evidence", "nuisance domains")],
    ["published significance has no local check status", (d) => { claim(d, "opera2015-appearance-evidence").status = "analytically-checked"; }],
    ["strength errors use the reported 90 percent interval", (d) => removeLimit(d, "opera2015-parameter-compatibility", "90% confidence interval")],
    ["earlier candidate papers reuse exposure", (d) => removeLimit(d, "opera2015-decay-candidates", "subsets of this same")],
    ["parameter interval is a conditional same-data result", (d) => { claim(d, "opera2015-parameter-compatibility").statement = "An independent experiment measures absolute neutrino masses."; }]
  ]);
});

test("OPERA observed and modeled inputs remain explicit without inference cycles", async () => {
  const original = await source();
  for (const suffix of [
    "opera2015-acquisition-context-opera2015-analyzed-sample",
    "opera2015-response-context-opera2015-analyzed-sample",
    "opera2015-response-context-opera2015-fifth-candidate",
    "opera2015-fifth-candidate-opera2015-decay-candidates",
    "opera2015-response-context-opera2015-expected-counts",
    "opera2015-acquisition-context-opera2015-appearance-evidence",
    "opera2015-decay-candidates-opera2015-appearance-evidence",
    "opera2015-expected-counts-opera2015-appearance-evidence",
    "opera2015-inference-context-opera2015-appearance-evidence",
    "opera2015-decay-candidates-opera2015-parameter-compatibility"
  ]) {
    const copy = structuredClone(original);
    copy.graph.relations = copy.graph.relations.filter((r) => r.id !== `physics:${suffix}`);
    assert.throws(() => validateAcceleratorNeutrinoContracts(context(copy)), undefined, suffix);
  }
  for (const [from, to] of [
    ["opera2015-parameter-compatibility", "opera2015-expected-counts"],
    ["opera2015-appearance-evidence", "opera2015-parameter-compatibility"],
    ["superk1998-oscillation-fit", "opera2015-expected-counts"],
    ["neutrino-matter-evolution", "opera2015-analyzed-sample"]
  ]) assert.ok(!original.graph.relations.some((r) => r.source === `phys:${from}` && r.target === `phys:${to}`));
});
