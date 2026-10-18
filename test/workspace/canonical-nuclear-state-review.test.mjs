import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateRetinalPilot } from "../../models/causal-emergence/canonical/retinal.mjs";
import {
  NUCLEAR_STATE_REVIEW_ADMISSION as admission,
  NUCLEAR_STATE_REVIEW_CHECKS,
  NUCLEAR_STATE_REVIEW_ANALYTICAL_SOURCES,
  validateNuclearStateReviewContracts
} from "../../models/causal-emergence/canonical/nuclear-state-review.mjs";

const studyId = "detmold2026-state-identification";
const sourceId = "detmold2026-state-bounds";
const contextId = "M-phys-detmold2026-state-identification-context";
const resultId = "C-phys-two-nucleon-state-identification-review";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, suffix) => data.graph.entities.find((record) => record.id === `phys:${suffix}`);
const study = (data) => data.physics.studies.find((record) => record.id === studyId);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique reviewed boundary: ${fragment}`);
}

function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Missing scientific mutation target: ${from}`);
  record.statement = record.statement.replace(from, to);
}

async function rejects(mutations) {
  const original = await source();
  validateNuclearStateReviewContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("the state-identification review retains one computational preprint analysis and no local replay", async () => {
  assert.equal(NUCLEAR_STATE_REVIEW_CHECKS.size, 0);
  assert.equal(NUCLEAR_STATE_REVIEW_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.localStudySources, []);
  assert.deepEqual(admission.preprintStudySources, [[studyId, sourceId]]);
  assert.equal(admission.contexts.length, 1);
  assert.equal(admission.observations.length, 1);
  assert.deepEqual(admission.studyIds, [studyId]);
  const data = await source();
  validateNuclearStateReviewContracts(context(data));
  const reviewed = study(data);
  assert.equal(reviewed.sourceId, sourceId);
  assert.equal(reviewed.studyType, "computational-analysis");
  for (const key of ["journal", "volume", "pages"]) assert.equal(reviewed[key], null);
  assert.equal(reviewed.issue, "");
  assert.equal(reviewed.doi, "10.48550/arXiv.2601.22272");
  assert.equal(claim(data, resultId).status, "publication-supported");
  assert.deepEqual(claim(data, resultId).checkIds, []);
  assert.deepEqual(claim(data, resultId).contextIds, [studyId]);
});

test("an archive DOI cannot become a fictitious journal, detector experiment or executable source", async () => {
  await rejects([
    ["the arXiv study is presented as journal-published", (data) => {
      Object.assign(study(data), { journal: "Physical Review D", volume: "113", issue: "1", pages: "014501" });
    }],
    ["the computational analysis becomes a new detector acquisition", (data) => {
      study(data).studyType = "primary-experiment";
    }],
    ["the archival source is replaced by the existing local threshold verifier", (data) => {
      study(data).sourceId = "nuclear-energetics-verifier";
    }],
    ["the archival research publication is relabeled executable code", (data) => {
      data.graph.sources.find((record) => record.id === sourceId).kind = "executable-check";
    }],
    ["the reported bound borrows a different local arithmetic check", (data) => {
      claim(data, resultId).status = "analytically-checked";
      claim(data, resultId).checkIds = ["deuteron-beta-threshold-arithmetic"];
    }],
    ["primary reading becomes a complete local correlator replay", (data) => {
      data.graph.sources.find((record) => record.id === sourceId).review.extent = "locally-reproduced-ensemble";
    }],
    ["the study inherits locators from an unrelated primary paper", (data) => {
      study(data).reviewedLocators = data.physics.studies.find((record) => record.id === "beane2013-nuclear-extraction").reviewedLocators;
    }]
  ]);
});

test("the shared metadata guard restricts null journal fields to the explicitly owned preprint study", async () => {
  const original = await source();
  validateRetinalPilot(original, context(original));
  for (const [name, mutate] of [
    ["a mapped preprint acquires invented journal metadata", (data) => {
      Object.assign(study(data), { journal: "Physical Review D", volume: "113", pages: "014501" });
    }],
    ["an unmapped study attempts to borrow the null-metadata exception", (data) => {
      study(data).id = "unreviewed-preprint-alias";
    }],
    ["a mapped preprint changes its source owner", (data) => {
      study(data).sourceId = "beane2013-nuclei";
    }],
    ["a mapped research publication becomes an executable source", (data) => {
      data.graph.sources.find((record) => record.id === sourceId).kind = "executable-check";
    }],
    ["an unversioned archive URL replaces the reviewed version", (data) => {
      data.graph.sources.find((record) => record.id === sourceId).url = "https://arxiv.org/abs/2601.22272";
    }],
    ["a fabricated journal DOI replaces the archive identifier consistently", (data) => {
      const doi = "10.1103/PhysRevD.113.014501";
      data.graph.sources.find((record) => record.id === sourceId).doi = doi;
      study(data).doi = doi;
    }],
    ["the computational preprint becomes a detector acquisition", (data) => {
      study(data).studyType = "primary-experiment";
    }]
  ]) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateRetinalPilot(changed, context(changed)), undefined, name);
  }
});

test("variational upper bounds and spectral windows do not identify an unobserved ground state without assumptions", async () => {
  await rejects([
    ["the N-state and Hermiticity conditions disappear", (data) =>
      dropLimit(data, contextId, "N-state-saturation assumption")],
    ["gap bounds lose their no-missing-states and thermal assumptions", (data) =>
      dropLimit(data, contextId, "no-missing-states threshold")],
    ["an eigenvalue-containing interval becomes an exact ground-state confidence interval", (data) =>
      dropLimit(data, resultId, "ground-state index")],
    ["a restricted phase comparison becomes a complete coupled-channel continuum amplitude", (data) =>
      dropLimit(data, contextId, "lowest S wave")],
    ["the source's lack of positive evidence becomes an exclusion of binding", (data) =>
      replace(data, resultId, "find no positive I=1 bound-state evidence", "exclude every I=1 bound state")],
    ["the diagnostic excludes all apparently stable energy estimators", (data) =>
      dropLimit(data, resultId, "every such energy estimate is wrong")]
  ]);
});

test("the later review preserves shared gauge fields and separates synthetic ambiguity from QCD data", async () => {
  await rejects([
    ["the shared subset is removed from the preparation", (data) =>
      replace(data, contextId, "A subset of gauge fields was also used in Beane2013.", "All gauge fields are independent of the Beane2013 calculation.")],
    ["the one-volume analysis becomes a new independent three-volume repeat", (data) =>
      dropLimit(data, contextId, "not a new independent repeat")],
    ["the companion preprint becomes independent confirmation", (data) =>
      dropLimit(data, resultId, "two preprints describe the same work")],
    ["the paired primary interpretation loses its explicitly reviewed companion source", (data) => {
      const record = claim(data, resultId);
      assert.ok(record.citations.some((citation) => citation.sourceId === "detmold2026-state-summary"));
      record.citations = record.citations.filter((citation) => citation.sourceId !== "detmold2026-state-summary");
    }],
    ["synthetic examples become additional QCD observations", (data) =>
      dropLimit(data, resultId, "synthetic small-gap examples")],
    ["the heavy-mass review acquires a physical-mass or permanent-stability conclusion", (data) =>
      dropLimit(data, resultId, "continuum physical-mass nuclear binding")],
    ["the statistical comparison is promoted to an unambiguous bound-state exclusion", (data) => {
      data.physics.comparisons.find((record) => record.id === "detmold2026-bound-state-identification").result =
        "specified-alternative-disfavored";
    }]
  ]);
  const data = await source();
  assert.equal(data.physics.comparisons.find((record) => record.id === "detmold2026-bound-state-identification").result, "inconclusive");
});

test("state-identification inputs cannot become retrospective fit data or independent measurements", async () => {
  await rejects([
    ...admission.dependencies.map(([id]) => [`missing reviewed state-identification dependency ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== `physics:${id}`);
    }]),
    ["the modern review is silently made an input to the earlier binding fit", (data) => {
      const edge = structuredClone(data.graph.relations.find((record) => record.id === `physics:${admission.dependencies[0][0]}`));
      edge.id = "physics:unreviewed-state-review-beane2013-fit";
      edge.source = "phys:two-nucleon-state-identification-review";
      edge.target = "phys:beane2013-two-nucleon-binding";
      data.graph.relations.push(edge);
    }],
    ["the review output is assigned the earlier ensemble as its acquisition", (data) => {
      claim(data, resultId).contextIds = ["beane2013-nuclear-ensemble"];
    }],
    ["the computational context becomes an empirical material instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:detmold2026-state-identification-context").instanceAdmission = "empirical-instance";
    }]
  ]);
});

test("state-review attribution, display and scientific limitations remain protected in full validation", async () => {
  await rejects([
    ["the context acquires unrelated experimental support", (data) => {
      claim(data, contextId).citations[0].sourceId = "lee2002";
    }],
    ["the visible state-identification assumptions disappear", (data) => {
      entity(data, "two-nucleon-state-identification-review").openObligations = [];
    }]
  ]);
  const changed = structuredClone(await source());
  const text = "This independently reproduced physical-mass calculation proves the absence of every bound two-nucleon state.";
  claim(changed, resultId).statement = text;
  entity(changed, "two-nucleon-state-identification-review").description = text;
  changed.readiness.nodeRoles.find((record) => record.nodeId === "phys:two-nucleon-state-identification-review").denotes = text;
  assert.throws(() => validateCanonicalSource(changed), /state.identification|state review|Nuclear state/i,
    "The full validator reaches the reviewed contracts after coordinated scientific and display drift");
});
