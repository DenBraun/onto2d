import assert from "node:assert/strict";
import test from "node:test";
import {
  QUARK_TOP_WIDTH_ADMISSION, QUARK_TOP_WIDTH_CHECKS, QUARK_TOP_WIDTH_ANALYTICAL_SOURCES,
  validateQuarkTopWidthContracts
} from "../../models/causal-emergence/canonical/quark-top-width.mjs";

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
const claim = (data, suffix, method = false) => data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-cdf2013-top-${suffix}`);
function changeStatement(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), "Mutation must change the intended source statement");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((s) => !s.includes(fragment));
  assert.equal(record.limitations.length, before - 1, "Mutation must remove exactly one source boundary");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateQuarkTopWidthContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateQuarkTopWidthContracts(context(changed)), undefined, name);
  }
}

test("top-width admission separates selected data, response and interval inference without a local replay", () => {
  assert.deepEqual([...QUARK_TOP_WIDTH_CHECKS], []);
  assert.deepEqual([...QUARK_TOP_WIDTH_ANALYTICAL_SOURCES], []);
  assert.deepEqual(QUARK_TOP_WIDTH_ADMISSION.localStudySources, []);
  assert.deepEqual(QUARK_TOP_WIDTH_ADMISSION.definitions, []);
  assert.equal(QUARK_TOP_WIDTH_ADMISSION.contexts.length, 3);
  assert.equal(QUARK_TOP_WIDTH_ADMISSION.observations.length, 2);
  const inputs = (target) => QUARK_TOP_WIDTH_ADMISSION.dependencies.filter((r) => r[2] === target).map((r) => r[1]);
  assert.deepEqual(inputs("cdf2013-top-sample"), ["cdf2013-top-acquisition-context", "cdf2013-top-response-context"]);
  assert.deepEqual(inputs("cdf2013-top-width-interval"), [
    "cdf2013-top-sample", "cdf2013-top-response-context", "cdf2013-top-inference-context", "quark-fields"
  ]);
  assert.equal(QUARK_TOP_WIDTH_ADMISSION.dependencies.some((r) => r[1] === "resonance-lifetime-convention"), false,
    "No unperformed lifetime conversion is an input to the width inference");
});

test("top-width selection does not become pure signal, measured template shapes or an independent repeat", async () => {
  await rejectMutations([
    ["the reviewed author version cannot silently change", (d) => {
      d.graph.sources.find((s) => s.id === "cdf2013-top-width").url = "https://arxiv.org/pdf/1308.4050v1";
    }],
    ["the regenerated PDF year is not the result date", (d) => {
      d.graph.sources.find((s) => s.id === "cdf2013-top-width").year = 2022;
    }],
    ["observed categories cannot be replaced by modeled expectations", (d) => changeStatement(d, "sample", "1627, 882, 997, 208 and 275", "1608, 930, 1011, 212 and 318")],
    ["selected detector counts are not pure top decays", (d) => changeStatement(d, "sample", "selected signal-plus-background counts", "pure observed top-decay counts")],
    ["simulated Figure 1 cannot become an acquired mass distribution", (d) => removeLimit(d, "sample", "Figure 1 contains simulated templates")],
    ["extended Run II analysis is not independent of earlier data", (d) => removeLimit(d, "sample", "not an independent replication")],
    ["the actual full exposure remains specified", (d) => changeStatement(d, "acquisition-context", "8.7 fb^-1", "4.3 fb^-1", true)],
    ["model response is not another top-event acquisition", (d) => {
      d.physics.studies.find((s) => s.id === "cdf2013-top-response").studyType = "primary-experiment";
    }],
    ["response readout retains its auxiliary photon-jet input", (d) => changeStatement(d, "response-context", "auxiliary photon+jet resolution control", "only the selected top sample as resolution control", true)]
  ]);
});

test("top-width result retains the fixed mass, nonnegative estimator and distinct confidence bounds", async () => {
  await rejectMutations([
    ["the assumed top mass cannot become another inferred result", (d) => changeStatement(d, "width-interval", "input top mass", "simultaneously measured top mass")],
    ["the estimator is not the interval midpoint or a Gaussian measurement", (d) => changeStatement(d, "width-interval", "best-fit estimator Gamma_meas=1.63 GeV", "measured width Gamma_top=1.63 +/- 1.22 GeV")],
    ["the two confidence levels cannot be swapped", (d) => changeStatement(d, "width-interval", "68% confidence interval", "95% confidence interval")],
    ["the reported upper bound retains its actual value", (d) => changeStatement(d, "width-interval", "Gamma_top<6.38 GeV", "Gamma_top<4.05 GeV")],
    ["the same-sample W calibration is not an independent top mass measurement", (d) => removeLimit(d, "width-interval", "adopted W mass of 80.4")],
    ["negative-estimator boundary cannot silently disappear", (d) => changeStatement(d, "inference-context", "nonnegative width estimator", "unconstrained Gaussian width estimator", true)],
    ["the confidence treatment cannot become a claimed local reconstruction", (d) => removeLimit(d, "inference-context", "displayed Table II components", true)],
    ["correlated observables cannot be replaced by unrelated histograms", (d) => changeStatement(d, "inference-context", "correlated reconstructed-top and dijet masses", "independent reconstructed-top and dijet histograms", true)],
    ["conditional decay width is not a directly timed lifetime", (d) => removeLimit(d, "width-interval", "Neither time is directly measured")],
    ["alternative widths remain inside the stated signal/response model", (d) => {
      d.physics.comparisons.find((c) => c.id === "cdf2013-top-width-boundary").alternative = "Every quark flavor is directly observed to be permanently stable.";
    }]
  ]);
});

test("top-width claims keep every evidence input and cannot borrow another executable check", async () => {
  await rejectMutations(QUARK_TOP_WIDTH_ADMISSION.dependencies.map(([id]) => [
    `missing selected-sample, response, fit or species input: ${id}`, (d) => {
      const before = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, before - 1);
    }
  ]));
  await rejectMutations([
    ["the fit keeps its proper inference context", (d) => { claim(d, "width-interval").contextIds = ["cdf2013-top-acquisition"]; }],
    ["the source confidence interval is not independently checked arithmetic", (d) => {
      claim(d, "width-interval").status = "analytically-checked";
      claim(d, "width-interval").checkIds = ["neutrino-phase-data-algebra"];
    }],
    ["a publication claim retains its primary locator", (d) => { claim(d, "width-interval").citations = []; }],
    ["a signal-species hypothesis is not physical maintenance", (d) => {
      d.graph.relations.find((r) => r.id === "physics:quark-fields-cdf2013-top-width-interval").kind = "functional";
    }],
    ["a reported width bound is not an admitted isolated particle instance", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:cdf2013-top-width-interval").instanceAdmission = "empirical";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-hadronization-top-width", source: "phys:qcd", target: "phys:cdf2013-top-width-interval",
    kind: "descriptive", role: "interpretation-dependency", assertion: "Every top decay is observed before any hadronization.",
    claimIds: ["M-phys-cdf2013-top-width-interval"], contextIds: ["cdf2013-top-inference"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "No additional timing or universal formation relation is admitted");
});
