import assert from "node:assert/strict";
import test from "node:test";
import {
  GLUON_SPIN_ADMISSION, GLUON_SPIN_CHECKS, GLUON_SPIN_ANALYTICAL_SOURCES,
  validateGluonSpinContracts
} from "../../models/causal-emergence/canonical/gluon-spin.mjs";

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
function claim(data, suffix, method = false) {
  return data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-sld1997-spin-${suffix}`);
}
function replace(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), "The mutation must change its intended statement");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method), oldLength = record.limitations.length;
  record.limitations = record.limitations.filter((s) => !s.includes(fragment));
  assert.equal(record.limitations.length, oldLength - 1, "Exactly one boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateGluonSpinContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateGluonSpinContracts(context(changed)), undefined, name);
  }
}

test("SLD spin admission separates acquisition, corrections and comparison without numerical replay", () => {
  assert.deepEqual([...GLUON_SPIN_CHECKS], []);
  assert.deepEqual([...GLUON_SPIN_ANALYTICAL_SOURCES], []);
  assert.deepEqual(GLUON_SPIN_ADMISSION.localStudySources, []);
  assert.equal(GLUON_SPIN_ADMISSION.contexts.length, 3);
  assert.equal(GLUON_SPIN_ADMISSION.observations.length, 3);
  const inputs = (suffix) => GLUON_SPIN_ADMISSION.dependencies.filter((r) => r[2] === `sld1997-spin-${suffix}`).map((r) => r[1]);
  assert.deepEqual(inputs("readout"), ["sld1997-spin-acquisition-context", "sld1997-spin-response-context"]);
  assert.deepEqual(inputs("corrected-shapes"), ["sld1997-spin-readout", "sld1997-spin-response-context"]);
  assert.deepEqual(inputs("comparison"), ["sld1997-spin-corrected-shapes", "sld1997-spin-inference-context", "gluon-fields"]);
  assert.equal(GLUON_SPIN_ADMISSION.dependencies.some((r) => /tasso|opal/.test(r[1])), false,
    "Prior experiments are not reconstruction or fit inputs");
});

test("SLD reconstruction and corrected distributions retain sample, units and shared-systematic boundaries", async () => {
  await rejectMutations([
    ["the reviewed source must remain identifiable", (d) => { d.graph.sources.find((r) => r.id === "sld1997-gluon-spin").doi = "10.1103/PhysRevD.55.2534"; }],
    ["the published year is not the acquisition year", (d) => { d.graph.sources.find((r) => r.id === "sld1997-gluon-spin").year = 1993; }],
    ["the 1993 SLC sample is not a PETRA acquisition", (d) => replace(d, "acquisition-context", "1993 SLC", "1979 PETRA", true)],
    ["independence from overlapping SLD analyses is not established", (d) => removeLimit(d, "acquisition-context", "Event-level independence", true)],
    ["JADE sample size is not a free-gluon count", (d) => replace(d, "readout", "22114 three-jet events", "22114 freely observed gluons")],
    ["Figure 3 errors are statistical only", (d) => replace(d, "readout", "statistical-only", "total independent statistical and systematic")],
    ["spin-independent hadronization remains an assumption", (d) => removeLimit(d, "response-context", "Hadronization is assumed", true)],
    ["hadronization uncertainty is the mean-to-extremum difference, not the full range", (d) => replace(d, "response-context", "mean-to-extremum difference", "full difference between the two models", true)],
    ["bin correlations survive correction", (d) => removeLimit(d, "response-context", "strongly correlated", true)],
    ["hadron and parton stages must remain distinct", (d) => replace(d, "corrected-shapes", "hadron-level distributions", "directly measured parton distributions")],
    ["the tabulated density is not an area cross section", (d) => removeLimit(d, "corrected-shapes", "per unit dimensionless")],
    ["computational correction is not another acquisition", (d) => { d.physics.studies.find((r) => r.id === "sld1997-spin-response").studyType = "primary-experiment"; }],
    ["displayed description remains guarded", (d) => { d.graph.entities.find((r) => r.id === "phys:sld1997-spin-readout").description = "A direct observation of free massless gluons."; }]
  ]);
});

test("SLD spin comparison keeps restricted models, bin counts and publication-supported statistics", async () => {
  await rejectMutations([
    ["restricted phase space cannot become unrestricted", (d) => replace(d, "inference-context", "cos(theta_EK)<0.9", "cos(theta_EK)<=1", true)],
    ["energy ordering is not gluon tagging", (d) => removeLimit(d, "inference-context", "Energy ordering", true)],
    ["model family and endpoint limits remain explicit", (d) => removeLimit(d, "inference-context", "resummation", true)],
    ["bins cannot be relabeled as degrees of freedom", (d) => replace(d, "comparison", "18 bins", "18 independent degrees of freedom")],
    ["reported chi-squared must remain correctly assigned", (d) => replace(d, "comparison", "19.5 (vector)", "1684.0 (vector)")],
    ["vector support is not a measurement of all gluon quantum numbers", (d) => removeLimit(d, "comparison", "does not separately measure")],
    ["no universal confidence limit is inferred", (d) => { d.physics.comparisons.find((r) => r.id === "sld1997-vector-scalar-tensor").limit = "All spin-zero and spin-two interactions are excluded at universal 95% confidence."; }],
    ["findings cannot acquire an unrelated check", (d) => { const c = claim(d, "comparison"); c.status = "analytically-checked"; c.checkIds = ["nucleon-valence-algebra"]; }],
    ["publication support retains source locators", (d) => { claim(d, "corrected-shapes").citations = []; }],
    ["comparison belongs to the inference, not raw acquisition", (d) => { claim(d, "comparison").contextIds = ["sld1997-spin-acquisition"]; }]
  ]);
});

test("SLD dependencies preserve staged corrections and cannot promote descriptive interpretation to maintenance", async () => {
  await rejectMutations(GLUON_SPIN_ADMISSION.dependencies.map(([id]) => [
    `required input remains: ${id}`, (d) => {
      const before = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, before - 1);
    }
  ]));
  await rejectMutations([
    ["field hypothesis is interpretation rather than a functional mechanism", (d) => {
      d.graph.relations.find((r) => r.id === "physics:gluon-fields-sld1997-spin-comparison").kind = "functional";
    }],
    ["source role cannot become an individual free-gluon instance", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:sld1997-spin-comparison").instanceAdmission = "empirical";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-tasso-sld-spin", source: "phys:gluon-fields", target: "phys:sld1997-spin-readout",
    kind: "descriptive", role: "interpretation-dependency", assertion: "All gluon quantum numbers determine a direct detector readout.",
    claimIds: ["M-phys-sld1997-spin-readout"], contextIds: ["sld1997-spin-acquisition"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "No unreviewed field-property prerequisite may be inserted into the measured readout");
});
