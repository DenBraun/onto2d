import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const main = "schreiner2008-hcoh-tunneling";
const supplement = "schreiner2008-hcoh-supplement";
const experiment = "schreiner2008-matrix";
const calculation = "schreiner2008-reaction-path";
const model = "D-phys-reaction-path-quantum-model";
const boundary = "D-phys-isotope-kinetics-evidence-boundary";
const preparation = "M-phys-schreiner2008-matrix-context";
const observed = "C-phys-schreiner2008-matrix-decay";
const predicted = "C-phys-schreiner2008-reaction-path-prediction";
const synthesis = "C-phys-quantum-reaction-source-scope";
const synthesisMethod = "M-phys-quantum-reaction-source-scope";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Synchronize presentation and study summaries so mutations challenge the
// reviewed scientific boundary, rather than leaving a stale duplicate behind.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
  for (const item of data.physics.studies) {
    for (const field of ["preparation", "finding"]) {
      if (typeof item[field] === "string") item[field] = item[field].replace(original, record.statement);
    }
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /Quantum|quantum|Physical|physical|physics|changed|Expected values|context|Context|role|Role|claim|Claim|source|Source/, name);
  }
}

test("quantum reaction admission separates one matrix experiment, its source model and the same-publication supplement", async () => {
  const data = await source();
  assert.equal(study(data, experiment).studyType, "primary-experiment");
  assert.equal(study(data, calculation).studyType, "computational-analysis");
  assert.equal(study(data, experiment).sourceId, main);
  assert.equal(study(data, calculation).sourceId, main);
  assert.equal(publication(data, main).doi, "10.1038/nature07010");
  assert.equal(publication(data, supplement).doi, publication(data, main).doi);
  assert.equal(data.physics.studies.filter((record) => record.sourceId === supplement).length, 0);
  assert.equal(role(data, "schreiner2008-matrix-context").role, "experimental-context");
  assert.equal(role(data, "schreiner2008-reaction-path-context").role, "model-context");
  assert.equal(claim(data, observed).status, "publication-supported");
  assert.equal(claim(data, predicted).status, "publication-supported");
  assert.deepEqual(claim(data, observed).contextIds, [experiment]);
  assert.deepEqual(claim(data, predicted).contextIds, [calculation]);
  assert.deepEqual(claim(data, synthesis).contextIds, [experiment, calculation]);
  assert.equal(edge(data, "schreiner2008-matrix-context", "schreiner2008-matrix-decay").role, "measurement-context");
  assert.equal(edge(data, "schreiner2008-reaction-path-context", "schreiner2008-reaction-path-prediction").role, "computation-context");
  await rejects([
    ["a source calculation cannot become an independent primary experiment", (changed) => {
      study(changed, calculation).studyType = "primary-experiment";
    }],
    ["the supplemental document cannot become an independent matrix acquisition", (changed) => {
      study(changed, experiment).sourceId = supplement;
    }],
    ["a prediction cannot inherit the experimental context", (changed) => {
      claim(changed, predicted).contextIds = [experiment];
    }]
  ]);
});

test("dark infrared kinetics preserve the seven reported host/temperature points and missing cells", async () => {
  const data = await source();
  assert.match(claim(data, observed).statement, /11 K Ar 1\.8, Kr 2\.0, Xe 2\.3 and N2 7\.0/);
  assert.match(claim(data, observed).statement, /15 K Ar 1\.9; at 20 K Ar 1\.7 and Kr 2\.0/);
  assert.match(claim(data, observed).statement, /explicitly not determined/);
  assert.match(claim(data, preparation).statement, /1000 deg C/);
  assert.match(claim(data, preparation).statement, /shield external light.*every 30 min/);
  assert.match(claim(data, preparation).statement, /1050 and 1300 cm\^-1/);
  await rejects([
    ["nitrogen cannot inherit the noble-gas two-hour summary", (changed) =>
      replaceStatement(changed, observed, "N2 7.0", "N2 2.0")],
    ["an unmeasured matrix/temperature cell cannot be interpolated", (changed) =>
      replaceStatement(changed, observed, "at 15 K Ar 1.9", "at 15 K Ar 1.9 and Xe 2.3")],
    ["absent errors and detection limits cannot become precision claims", (changed) =>
      dropLimit(changed, observed, "No uncertainty intervals")],
    ["photochemical difference spectra cannot replace the dark acquisition", (changed) =>
      dropLimit(changed, preparation, "435/470/500 nm")],
    ["a mixed cryogenic matrix cannot become a pure isolated gas", (changed) =>
      dropLimit(changed, observed, "product mixture")]
  ]);
});

test("qualitative deuterium non-decay stays distinct from the predicted millennium-scale lifetime", async () => {
  const data = await source();
  assert.match(claim(data, observed).statement, /unchanged for an unspecified extended observation period/);
  assert.match(claim(data, predicted).statement, /122 min.*2\.0 h.*over 1200 yr.*theoretical outputs/);
  assert.match(claim(data, boundary).statement, /cannot supply a numerical deuterated half-life or k_H\/k_D/);
  await rejects([
    ["the D prediction cannot become an observed lower bound", (changed) =>
      replaceStatement(changed, observed, "unchanged for an unspecified extended observation period", "measured to persist for over 1200 yr")],
    ["an unstated D observation window cannot produce a numerical isotope ratio", (changed) =>
      dropLimit(changed, observed, "observation window is not numerically stated")],
    ["isotope substitution alone cannot identify a unique tunnelling mechanism", (changed) =>
      dropLimit(changed, boundary, "an isotope effect alone")],
    ["a source-calculated lifetime cannot claim experimental numerical confirmation", (changed) =>
      dropLimit(changed, predicted, "no numerical experimental confirmation")]
  ]);
});

test("the reduced ground-singlet model preserves dimensional zero-point and distinct barrier conventions", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /ground-singlet.*1220 cm\^-1/);
  assert.match(claim(data, model).statement, /h\*c\*nu_tilde\/2.*c\*nu_tilde/);
  assert.match(claim(data, predicted).statement, /54\.2.*83\.9.*29\.7.*31\.60.*-52\.05.*2174i cm\^-1/);
  await rejects([
    ["a wavenumber cannot become zero-point energy without dimensional conversion", (changed) =>
      replaceStatement(changed, model, "h*c*nu_tilde/2", "nu_tilde/2")],
    ["a wavenumber cannot become an attempt frequency in Hz without c", (changed) =>
      replaceStatement(changed, model, "barrier-attempt frequency c*nu_tilde", "barrier-attempt frequency nu_tilde")],
    ["the Figure 4 barrier cannot silently replace the separate Eckart input", (changed) =>
      replaceStatement(changed, predicted, "31.60 kcal/mol barrier", "29.7 kcal/mol barrier")],
    ["a reduced reaction path cannot acquire an exact full-dimensional rate", (changed) =>
      dropLimit(changed, predicted, "explicitly leaves full-dimensional")],
    ["the harmonic-zero-point schematic difference cannot become a bare electronic barrier", (changed) =>
      dropLimit(changed, predicted, "not a bare electronic barrier")],
    ["noble-gas agreement cannot validate a universal matrix-specific rate", (changed) =>
      dropLimit(changed, predicted, "7.0 h nitrogen result")]
  ]);
});

test("finite tunnelling evidence cannot supply universal ancestry, carrier minima, reaction theories or SOMA laws", async () => {
  const data = await source();
  assert.equal(claim(data, model).status, "definition");
  assert.equal(claim(data, boundary).status, "definition");
  assert.equal(claim(data, synthesis).status, "publication-supported");
  assert.deepEqual(claim(data, synthesis).checkIds, []);
  assert.deepEqual(claim(data, synthesisMethod).checkIds, []);
  const names = new Set(["reaction-path-quantum-model", "isotope-kinetics-evidence-boundary",
    "schreiner2008-matrix-context", "schreiner2008-matrix-decay", "schreiner2008-reaction-path-context",
    "schreiner2008-reaction-path-prediction", "quantum-reaction-source-scope"].map((name) => `phys:${name}`));
  assert.ok(data.graph.relations.filter((record) => names.has(record.source) || names.has(record.target))
    .every((record) => record.kind === "descriptive"));
  await rejects([
    ["old necessary parents and two-body counts cannot become measured thresholds", (changed) =>
      dropLimit(changed, synthesis, "weights 0.40/0.35/0.25")],
    ["a ground-singlet case cannot establish every electronic quantum-reaction mechanism", (changed) =>
      dropLimit(changed, synthesis, "electronic nonadiabatic coupling")],
    ["finite kinetics cannot establish that all transition-state models fail", (changed) =>
      dropLimit(changed, boundary, "every transition-state model")],
    ["hot preparation and assignment illumination cannot become a sustained cause of dark decay", (changed) =>
      dropLimit(changed, synthesis, "sustained external resource threshold")],
    ["display and SOMA classification cannot create a physical law", (changed) =>
      dropLimit(changed, synthesis, "SOMA propagation")],
    ["a named source model cannot acquire an independent raw-data replay", (changed) =>
      dropLimit(changed, synthesis, "independent numerical replay")]
  ]);
});

test("primary citations retain the actual supplement passages, reading extents and same-publication limits", async () => {
  const data = await source();
  assert.match(publication(data, supplement).url, /MOESM264_ESM\.pdf$/);
  assert.match(publication(data, supplement).review.limit, /same research publication.*not independent confirmation/);
  assert.match(publication(data, main).review.limit, /third-party copy/);
  for (const id of [main, supplement]) {
    assert.equal(publication(data, id).path, null);
    assert.equal(publication(data, id).sha256, null);
  }
  for (const id of [observed, predicted, synthesis, synthesisMethod]) {
    for (const citation of claim(data, id).citations) {
      assert.ok(publication(data, citation.sourceId).review.locators.includes(citation.locator));
    }
    assert.ok(claim(data, id).citations.some((citation) => citation.sourceId === supplement));
  }
  await rejects([
    ["supplemental host values cannot lose their primary passage citation", (changed) => {
      claim(changed, observed).citations = claim(changed, observed).citations.filter((ref) => ref.sourceId !== supplement);
    }],
    ["partial primary reading cannot be relabelled as a complete numerical replay", (changed) => {
      publication(changed, supplement).review.limit = "The entire dataset and calculation were independently reproduced.";
    }],
    ["a temporary PDF hash cannot be assigned to an unarchived remote source", (changed) => {
      publication(changed, supplement).sha256 = "a".repeat(64);
    }]
  ]);
});
