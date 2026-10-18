import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  PHOTON_ANTICORRELATION_ADMISSION as admission,
  PHOTON_ANTICORRELATION_CHECKS,
  PHOTON_ANTICORRELATION_ANALYTICAL_SOURCES,
  validatePhotonAnticorrelationContracts
} from "../../models/causal-emergence/canonical/photon-anticorrelation.mjs";

const counts = "triggered-optical-coincidences";
const response = "optical-counting-response-context";
const inference = "optical-anticorrelation-inference-context";
const outcome = "triggered-optical-anticorrelation";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replace(data, id, before, after) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(before), `Missing reviewed phrase: ${before}`);
  record.statement = record.statement.replace(before, after);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique boundary: ${fragment}`);
}

async function rejects(mutations) {
  const original = await source();
  validatePhotonAnticorrelationContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("one optical acquisition retains distinct measured counts, hardware response and statistical interpretation", async () => {
  assert.equal(PHOTON_ANTICORRELATION_CHECKS.size, 0);
  assert.equal(PHOTON_ANTICORRELATION_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.localStudySources, []);
  assert.deepEqual(admission.comparisonIds, []);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  const data = await source();
  validatePhotonAnticorrelationContracts(context(data));
  const counting = study(data, "grangier1986-counting");
  const comparison = study(data, "grangier1986-anticorrelation-inference");
  assert.equal(counting.studyType, "primary-experiment");
  assert.equal(comparison.studyType, "computational-analysis");
  assert.equal(counting.sourceId, comparison.sourceId);
  assert.deepEqual(claim(data, `C-phys-${counts}`).contextIds, [counting.id]);
  assert.deepEqual(claim(data, `C-phys-${outcome}`).contextIds, [comparison.id]);
  assert.deepEqual(claim(data, `C-phys-${outcome}`).checkIds, []);
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${response}`).role, "experimental-context");
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${inference}`).role, "model-context");
});

test("the selected coincidence summary cannot become an ideal source or a complete event replay", async () => {
  await rejects([
    ["replace observed coincidences by the ideal zero", (data) => replace(data, `C-phys-${counts}`, "9 joint-output coincidences", "zero joint-output coincidences")],
    ["change the approximate exposure", (data) => replace(data, `C-phys-${counts}`, "approximately 5 hours", "exactly 5 seconds")],
    ["silently treat trigger dark counts as already removed", (data) => replace(data, `C-phys-${counts}`, "including a 300 s^-1 dark rate", "after subtracting all trigger dark counts")],
    ["pretend the absent transmitted singles and covariance were reconstructed", (data) => dropLimit(data, `C-phys-${counts}`, "selected transmitted rate N_t")],
    ["promote finite detections into particle paths", (data) => {
      const text = "Every prepared photon follows one measured unsplit trajectory with unit efficiency.";
      claim(data, `C-phys-${counts}`).statement = text;
      entity(data, counts).description = text;
      data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${counts}`).denotes = text;
    }]
  ]);
});

test("the anticorrelation bound retains the tested intensity and detector assumptions", async () => {
  await rejects([
    ["invert the coincidence normalization", (data) => replace(data, `M-phys-${inference}`, "N_c*N_1/(N_t*N_r)", "N_t*N_r/(N_c*N_1)")],
    ["lower the tested classical bound", (data) => replace(data, `M-phys-${inference}`, "alpha>=1", "alpha>=0")],
    ["confuse cascade excitation with detected heralds", (data) => dropLimit(data, `M-phys-${inference}`, "not the trigger rate N_1")],
    ["remove the common-intensity and conditional output-response boundary", (data) => dropLimit(data, `M-phys-${inference}`, "factorized conditional output response")],
    ["replace a fixed linear response by an arbitrary detector", (data) => replace(data, `M-phys-${inference}`, "linear low-detection-probability response", "unrestricted nonlinear, saturated and correlated response")]
  ]);
});

test("reported alpha, one-sigma bars and classical expectation do not become a replayed tail probability", async () => {
  await rejects([
    ["mistake alpha for a confidence level", (data) => replace(data, `C-phys-${outcome}`, "alpha=0.18 +/- 0.06", "a 99.999999999999 percent confidence level")],
    ["turn a lower-bound expectation into observed events", (data) => replace(data, `C-phys-${outcome}`, "classical expected coincidence count of at least 50", "measured coincidence count of exactly 50")],
    ["change the published error-bar convention", (data) => replace(data, `C-phys-${outcome}`, "one standard deviation", "a simultaneous 99 percent confidence interval")],
    ["remove the small-count likelihood and trial-selection limits", (data) => dropLimit(data, `C-phys-${outcome}`, "exact small-count likelihood")],
    ["erase the difference from a complete QED or photon-property test", (data) => dropLimit(data, `C-phys-${outcome}`, "all photon properties")]
  ]);
});

test("the interference comparison preserves shared preparation, separate configurations and actual dark corrections", async () => {
  await rejects([
    ["borrow the ungated calibration as the gated estimate", (data) => dropLimit(data, `C-phys-${outcome}`, "98.7 +/- 0.5 percent")],
    ["apply a visibility correction to the coincidence counts", (data) => dropLimit(data, `M-phys-${response}`, "separate interference dark correction")],
    ["replace finite gate overlap by an exact factor", (data) => dropLimit(data, `M-phys-${response}`, "not exactly one")],
    ["make the inference an independent experimental acquisition", (data) => {
      study(data, "grangier1986-anticorrelation-inference").studyType = "primary-experiment";
    }],
    ["claim an independent source in the inference record", (data) => {
      study(data, "grangier1986-anticorrelation-inference").limitations[0] = "The records describe two independent sources and datasets.";
    }]
  ]);
});

test("source identity and reviewed extent cannot silently acquire unread atomic details", async () => {
  await rejects([
    ["substitute another publication DOI", (data) => {
      data.graph.sources.find((record) => record.id === "grangier1986-optical-anticorrelation").doi = "10.1103/PhysRevLett.47.460";
    }],
    ["claim a complete detector pipeline replay", (data) => {
      data.graph.sources.find((record) => record.id === "grangier1986-optical-anticorrelation").review.extent = "full-local-experiment-reproduction";
    }],
    ["hide the unread source-construction boundary", (data) => dropLimit(data, "M-phys-heralded-optical-counting-context", "source construction to an earlier paper")],
    ["rename the result as all photon properties", (data) => {
      entity(data, outcome).name = "Proof of every photon property and trajectory";
    }]
  ]);
});

test("each preparation, response and interpretation link remains required and descriptive", async () => {
  const original = await source();
  for (const [id] of admission.dependencies) {
    const changed = structuredClone(original);
    const index = changed.graph.relations.findIndex((record) => record.id === `physics:${id}`);
    assert.ok(index >= 0);
    changed.graph.relations.splice(index, 1);
    assert.throws(() => validateCanonicalSource(changed), undefined, `Missing ${id}`);
  }
  await rejects([
    ["turn statistical inference into a photon-maintenance causal edge", (data) => {
      data.graph.relations.find((record) => record.id === `physics:${counts}-${outcome}`).kind = "causal";
    }],
    ["erase response provenance from the browser edge", (data) => {
      data.graph.relations.find((record) => record.id === `physics:${response}-${outcome}`).assertion = "Every click directly measures a photon with no detector assumptions.";
    }]
  ]);
});
