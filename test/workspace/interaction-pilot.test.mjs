import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateCanonicalInteractions } from "../../models/causal-emergence/canonical/interactions.mjs";
import { readComparisonStudies } from "../../scripts/check-interaction-pilot.mjs";
import {
  INTERACTION_FIELDS, projectInteractionPilot, resolveInteractionPilot, validateInteractionPilot
} from "../../models/causal-emergence/canonical/interaction-pilot.mjs";

test("comparison loads every evidence ledger when the canonical atlas gains an unselected optical case", async () => {
  const read = (name) => readFile(new URL(`../../references/canonical/${name}.json`, import.meta.url));
  const [graphBytes, protocolBytes, ...ledgerBytes] = await Promise.all([
    read("graph"), read("interaction-pilot"),
    ...["retinal-review", "routing-review", "optical-review", "visual-review", "neural-review",
      "physics-review", "biochemistry-review"].map(read)
  ]);
  const graph = JSON.parse(graphBytes);
  const protocol = JSON.parse(protocolBytes);
  const ledgerNames = ["retinal-review", "routing-review", "optical-review", "visual-review", "neural-review",
    "physics-review", "biochemistry-review"];
  const inputs = new Map(ledgerNames.map((name, n) => [`references/canonical/${name}.json`, ledgerBytes[n]]));
  const studies = readComparisonStudies(inputs);
  const claimId = "O-reflection", studyId = "hanssen2001", entityId = "opt:specular-response";
  const record = {
    id: "test:unselected-optical-case", title: "Unselected optical provenance fixture", domain: "physics",
    entityIds: [entityId], anchorEntityId: entityId, claimIds: [claimId], studyIds: [studyId],
    sourceIds: [studyId], evidenceMode: "experiment",
    fields: Object.fromEntries(INTERACTION_FIELDS.map((field) => [field, {
      value: "Synthetic audit selection of the existing optical record; no new scientific admission.",
      missingReason: null, claimIds: [claimId]
    }])),
    observations: [{ id: "selected-optical-finding", kind: "reported-observation",
      statement: "Existing source-scoped optical response used only to test ledger resolution.",
      claimIds: [claimId], studyIds: [studyId] }],
    facets: [{ id: "selected-optical-response", kind: "operation", status: "reported", value: "different-response",
      statement: "Synthetic provenance fixture; no new interpretation.", observationIds: ["selected-optical-finding"],
      claimIds: [claimId], studyIds: [studyId] }],
    limitations: ["In-memory contract fixture; not a new canonical scientific case."],
    views: { system: { nodeIds: [entityId], edgeIds: [] }, evidence: { nodeIds: [entityId], edgeIds: [] },
      hypotheses: { nodeIds: [], edgeIds: [] } }
  };
  graph.interactionCases.push(record);
  assert.ok(!protocol.cases.some((selection) => selection.id === record.id));
  assert.equal(validateCanonicalInteractions(graph, { studies }), graph.interactionCases);
  const selected = resolveInteractionPilot(protocol, graph);
  validateInteractionPilot(selected, { graph, studies });
  assert.equal(selected.cases.length, protocol.cases.length, "The unrelated atlas case does not enter the comparison");
  const formerStudies = ["physics-review", "biochemistry-review"].flatMap((name) =>
    JSON.parse(inputs.get(`references/canonical/${name}.json`)).studies);
  assert.throws(() => validateCanonicalInteractions(graph, { studies: formerStudies }), /unknown case study hanssen2001/);
  inputs.delete("references/canonical/optical-review.json");
  assert.throws(() => readComparisonStudies(inputs), /missing bound study ledger/);
});

// Synthetic references exercise the representation contract, not physical laws.
function fixture() {
  const graph = { sources: [], claims: [], entities: [], relations: [] };
  const studies = [];
  const families = ["regime", "persistence", "operation"].map((id) => ({
    id, title: `${id} hypothesis`, eligibility: "A declared within-preparation contrast.",
    scopedPrediction: "The specified contrast predicts the stated observable.",
    supportCriteria: [{ id: `${id}-support`, text: "The eligible contrast shows its specified response." }],
    contraryCriteria: [{ id: `${id}-contrary`, text: "A stated stronger extrapolation fails." }],
    inconclusiveCriteria: [{ id: `${id}-unknown`, text: "The required contrast is unmeasured." }],
    overextension: "No universal law follows from the selected literature."
  }));
  const pilot = {
    schemaVersion: 1, id: "canonical-interaction-pilot", date: "2026-10-20",
    question: "Which source-scoped interaction descriptions can be compared?",
    scope: {
      kind: "retrospective-literature-comparison", caseSelection: "purposive-contrast-sample",
      physicalInstancesAdmitted: false, independentScientificReviewComplete: false,
      prospectiveValidation: "not-performed", universalLawClaimed: false
    },
    sourceGroups: [], families, cases: [], analogies: [],
    review: {
      retrospectiveExposure: "The selections and source outcomes were known before this protocol.",
      splitRationale: "Whole synthetic publications are disjoint; no unseen prediction is claimed.",
      independentReview: "not-performed", prospectiveEvaluation: "not-performed",
      currentConclusion: "The audit checks provenance, not scientific truth."
    }
  };
  for (let n = 0; n < 12; n++) {
    const sourceId = `source-${n}`, studyId = `study-${n}`, claimId = `finding-${n}`;
    const methodId = `method-${n}`, caseId = `case-${n}`, entityIds = [`input-${n}`, `response-${n}`];
    const computational = n === 0;
    graph.sources.push({ id: sourceId, doi: `10.1234/pilot-${n}`, kind: "research-publication",
      review: { extent: "Synthetic reviewed article", locators: ["Synthetic Figure 1", "Synthetic Methods"], limit: "No real experiment is represented." } });
    studies.push({ id: studyId, sourceId, studyType: computational ? "computational-analysis" : "primary-experiment",
      readExtent: "Synthetic fixture only", reviewedLocators: ["Synthetic Figure 1", "Synthetic Methods"],
      limitations: ["Not scientific evidence."] });
    graph.claims.push({ id: claimId, status: "publication-supported", statement: "Synthetic response.",
      contextIds: [studyId], citations: [{ sourceId, role: "supports", locator: "Synthetic Figure 1" }],
      limitations: ["Not a real finding."] });
    graph.claims.push({ id: methodId, status: "method-contract", statement: "Synthetic preparation.",
      contextIds: [studyId], citations: [{ sourceId, role: "method", locator: "Synthetic Methods" }],
      limitations: ["No independent replication."] });
    graph.entities.push(...entityIds.map((id) => ({ id, claimIds: [claimId, methodId] })));
    pilot.sourceGroups.push({ id: `group-${n}`, sourceIds: [sourceId], split: n < 6 ? "development" : "challenge",
      dependenceNote: "All views of this synthetic acquisition share this group." });
    pilot.cases.push({
      id: caseId, title: `Synthetic contrast ${n}`, domain: ["physics", "chemistry", "biochemistry"][n % 3],
      sourceGroupId: `group-${n}`, entityIds, claimIds: [claimId, methodId], studyIds: [studyId],
      evidenceMode: computational ? "computation" : "experiment",
      fields: Object.fromEntries(INTERACTION_FIELDS.map((field) => [field, {
        value: `Synthetic ${field}`, missingReason: null, claimIds: [field === "response" ? claimId : methodId]
      }])),
      observations: [{ id: "response", kind: computational ? "model-result" : "reported-observation",
        statement: "The synthetic selected contrast has its stated response.", claimIds: [claimId], studyIds: [studyId] }],
      limitations: ["The same source is not an independent replication of itself."],
      assessments: [{ familyId: "regime", criterionId: "regime-support", verdict: "supports-scoped-instance",
        observationIds: ["response"], rationale: "Only the declared synthetic contrast is assessed." }]
    });
  }
  pilot.analogies.push({
    id: "regime-correspondence", familyId: "regime", caseIds: ["case-0", "case-6"],
    fields: ["changedFactor", "response"], correspondence: "Both fixtures declare a factor and response.",
    breakdownConditions: "Their mechanisms, units and regimes are not interchangeable.",
    status: "hypothesis", physicalCausalClaim: false
  });
  graph.relations.push({ id: "selected-functional", source: "input-1", target: "response-1",
    kind: "functional-support", role: "scoped-operating-support", claimIds: ["finding-1"], contextIds: ["study-1"] });
  return { pilot, context: { graph, studies } };
}

function rejects(mutate, expected = /Interaction pilot/) {
  const { pilot, context } = fixture();
  mutate(pilot, context);
  assert.throws(() => validateInteractionPilot(pilot, context), expected);
}

function externalFixture() {
  const result = fixture();
  const { pilot } = result;
  for (const [n, familyId] of ["regime", "persistence", "operation"].entries()) {
    if (n) pilot.cases[n].assessments.push({ familyId, criterionId: `${familyId}-support`,
      verdict: "supports-scoped-instance", observationIds: ["response"], rationale: "Synthetic comparison only." });
  }
  pilot.transferChecks = ["regime", "persistence", "operation"].map((familyId, n) => ({
    id: `external-${n}`, familyId, developmentCaseIds: [`case-${n}`],
    source: { id: `external-source-${n}`, title: "Synthetic external source", authors: ["Synthetic author"],
      year: 2025, doi: `10.9876/external-${n}`, url: `https://example.org/external-${n}`,
      readExtent: "full-primary-main", locators: ["Synthetic Figure 1"], readingLimit: "Synthetic only; no experiment." },
    question: "Does the specified discriminator transfer to a separate source?",
    expectedDiscriminator: "A stated measured contrast.", contraryOutcome: "The stated contrast is absent.",
    observations: [{ kind: "reported-observation", statement: "Synthetic measured contrast.", locator: "Synthetic Figure 1" }],
    verdict: "supports-scoped-transfer", rationale: "Only the synthetic scoped contrast is evaluated.",
    limits: ["No scientific evidence."], dependencyNote: "Synthetic source differs from the selected fixtures.",
    exposureNote: "Retrospective, not blind.", canonicalAdmission: false, blindProspective: false
  }));
  return result;
}

test("comparison selection resolves canonical science without storing duplicate passports or analogy mappings", () => {
  const { pilot, context } = fixture();
  context.graph.interactionCases = pilot.cases.map(({ sourceGroupId, assessments, ...record }) => structuredClone(record));
  context.graph.interactionAnalogies = structuredClone(pilot.analogies);
  const protocol = structuredClone(pilot);
  protocol.cases = protocol.cases.map(({ id, sourceGroupId, assessments }) => ({ id, sourceGroupId, assessments }));
  protocol.analogyIds = protocol.analogies.map((record) => record.id);
  delete protocol.analogies;
  const resolved = resolveInteractionPilot(protocol, context.graph);
  assert.deepEqual(resolved, pilot);
  validateInteractionPilot(resolved, context);
  resolved.cases[0].fields.response.value = "Changed result";
  assert.equal(context.graph.interactionCases[0].fields.response.value, "Synthetic response");
  const duplicate = structuredClone(protocol);
  duplicate.cases[0].fields = pilot.cases[0].fields;
  assert.throws(() => resolveInteractionPilot(duplicate, context.graph), /protocol schema/);
  const missing = structuredClone(protocol);
  missing.cases[0].id = "missing-case";
  assert.throws(() => resolveInteractionPilot(missing, context.graph), /unknown canonical case/);
  missing.cases[0].id = "case-0";
  missing.analogyIds[0] = "missing-analogy";
  assert.throws(() => resolveInteractionPilot(missing, context.graph), /unknown canonical analogy/);
});

test("new-source transfer retains separate primary review and does not admit canonical physical claims", () => {
  const { pilot, context } = externalFixture();
  validateInteractionPilot(pilot, context);
  const views = projectInteractionPilot(pilot, context);
  assert.equal(views.evaluation.transferChecks.length, 3);
  assert.equal(views.evidence.externalTransferSources.length, 3);
  assert.equal(views.evaluation.prospectiveEvaluation, "not-performed");
  assert.equal(views.evaluation.scientificScores, null);
  assert.equal(views.system.cases.length, 12);
  assert.equal(views.evaluation.transferChecks[0].recordPointer, "/transferChecks/0");
  views.evaluation.transferChecks[0].verdict = "Changed view";
  assert.equal(pilot.transferChecks[0].verdict, "supports-scoped-transfer");
});

test("external transfer rejects reused publications, challenge leakage, unread passages and fabricated confirmation", () => {
  const mutations = [
    (p) => { p.transferChecks[0].source.doi = "10.1234/pilot-0"; },
    (p) => { p.transferChecks[0].source.id = "source-0"; },
    (p) => { p.transferChecks[1].source.doi = p.transferChecks[0].source.doi; },
    (p) => { p.transferChecks[0].developmentCaseIds = ["case-6"]; },
    (p) => { p.transferChecks[0].observations[0].locator = "Unread supplement"; },
    (p) => { p.transferChecks[0].observations[0].kind = "not-established"; },
    (p) => { p.transferChecks[0].source.readExtent = "abstract-only"; },
    (p) => { p.transferChecks[0].blindProspective = true; },
    (p) => { p.transferChecks[0].canonicalAdmission = true; },
    (p) => { p.transferChecks[0].familyId = "unknown"; },
    (p) => { p.transferChecks[1].familyId = "regime"; },
    (p) => { p.transferChecks.pop(); }
  ];
  for (const mutate of mutations) {
    const { pilot, context } = externalFixture();
    mutate(pilot);
    assert.throws(() => validateInteractionPilot(pilot, context), /Interaction pilot/);
  }
  const { pilot, context } = externalFixture();
  pilot.transferChecks[0].source.readExtent = "abstract-only";
  pilot.transferChecks[0].verdict = "inconclusive";
  assert.equal(validateInteractionPilot(pilot, context), pilot);
});

test("pilot separates literature, evidence and candidate analogy without a scientific score", () => {
  const { pilot, context } = fixture();
  assert.equal(validateInteractionPilot(pilot, context), pilot);
  const views = projectInteractionPilot(pilot, context);
  assert.deepEqual(views, projectInteractionPilot(pilot, context));
  assert.equal(views.system.physicalInstancesAdmitted, false);
  assert.equal(views.system.cases.length, 12);
  assert.equal(views.system.cases[0].evidenceMode, "computation");
  assert.deepEqual(views.system.cases[1].canonicalFunctionalRelations, [context.graph.relations[0]]);
  assert.equal(views.evidence.sources[0].review.limit, "No real experiment is represented.");
  assert.equal(views.evidence.studies[0].readExtent, "Synthetic fixture only");
  assert.equal(views.analogy.physicalCausalClaim, false);
  assert.equal(views.analogy.links[0].status, "hypothesis");
  assert.equal(views.evaluation.scientificScores, null);
  assert.equal(views.evaluation.prospectiveEvaluation, "not-performed");
  assert.equal(views.evaluation.independentReview, "not-performed");
  assert.deepEqual(views.evaluation.scope, pilot.scope);
  assert.deepEqual(views.evaluation.assessments.filter((row) => row.split === "challenge").map((row) => row.caseId),
    ["case-6", "case-7", "case-8", "case-9", "case-10", "case-11"]);
  views.evidence.claims[0].statement = "Changed view";
  views.system.cases[0].fields.response.value = "Changed view";
  assert.equal(context.graph.claims[0].statement, "Synthetic response.");
  assert.equal(pilot.cases[0].fields.response.value, "Synthetic response");
});

test("unknown fields remain distinct from unsupported text and unreported certainty", () => {
  const { pilot, context } = fixture();
  pilot.cases[0].fields.timeScale = { value: null, missingReason: "not-reported", claimIds: [] };
  assert.equal(validateInteractionPilot(pilot, context), pilot);
  assert.deepEqual(projectInteractionPilot(pilot, context).system.cases[0].fields.timeScale,
    { value: null, missingReason: "not-reported", claimIds: [] });
  rejects((p) => { p.cases[0].fields.timeScale.value = null; });
  rejects((p) => { p.cases[0].fields.response.claimIds = []; });
  rejects((p) => { p.cases[0].fields.response.missingReason = "not-reviewed"; });
  rejects((p) => { p.cases[0].fields.response.value = "   "; });
  rejects((p) => { p.analogies[0].fields = ["timeScale"]; p.cases[0].fields.timeScale = { value: null, missingReason: "not-reviewed", claimIds: [] }; });
});

test("retrospective selection cannot become prospective, independently reviewed or universal by relabeling", () => {
  for (const mutate of [
    (p) => { p.scope.physicalInstancesAdmitted = true; },
    (p) => { p.scope.independentScientificReviewComplete = true; },
    (p) => { p.scope.prospectiveValidation = "passed"; },
    (p) => { p.scope.universalLawClaimed = true; },
    (p) => { p.scope.caseSelection = "random-sample"; },
    (p) => { p.review.independentReview = "passed"; },
    (p) => { p.review.prospectiveEvaluation = "passed"; },
    (p) => { p.analogies[0].physicalCausalClaim = true; },
    (p) => { p.analogies[0].status = "established-law"; },
    (p) => { p.review.accuracy = 1; }
  ]) rejects(mutate);
});

test("whole-source dependency groups reject source reuse and DOI aliases across a split", () => {
  rejects((p) => { p.sourceGroups[6].sourceIds.push("source-0"); });
  rejects((_p, c) => { c.graph.sources[6].doi = "HTTPS://DOI.ORG/10.1234/PILOT-0"; });
  rejects((p) => { p.sourceGroups.forEach((group) => { group.split = "development"; }); });
  rejects((p) => { p.cases[0].sourceGroupId = "group-6"; });
  rejects((_p, c) => { c.graph.claims[0].citations.push({ sourceId: "source-6", role: "supports" }); });
  rejects((_p, c) => { c.graph.sources[0].review.locators = []; });
});

test("case fields and observations retain original claim and preparation boundaries", () => {
  rejects((p) => { p.cases[0].fields.response.claimIds = ["finding-1"]; });
  rejects((p) => { p.cases[0].observations[0].claimIds = ["finding-1"]; });
  rejects((p) => { p.cases[0].observations[0].studyIds = ["study-1"]; });
  rejects((_p, c) => { c.graph.claims[0].contextIds = ["study-1"]; });
  rejects((_p, c) => { c.studies[0].sourceId = "source-1"; });
  rejects((p) => { p.cases[0].entityIds = ["input-1"]; });
  rejects((p) => { p.cases[0].claimIds.push("unknown"); });
  rejects((_p, c) => { c.graph.claims[0].citations[0].sourceId = "unknown"; });
  rejects((_p, c) => { c.graph.claims[0].experimentalContextIds = ["unselected-context"]; });
  rejects((p, c) => {
    c.studies.push({ ...c.studies[0], id: "uncited-preparation" });
    p.cases[0].studyIds.push("uncited-preparation");
    p.cases[0].observations[0].studyIds.push("uncited-preparation");
  });
});

test("methods cannot become observed findings and computational cases retain their model role", () => {
  rejects((_p, c) => { c.graph.claims[0].citations[0].role = "method"; });
  rejects((p) => { p.cases[0].observations[0].claimIds = ["method-0"]; });
  rejects((p) => { p.cases[0].observations[0].kind = "reported-observation"; });
  rejects((p) => { p.cases[0].evidenceMode = "experiment"; });
  rejects((p) => { p.cases[0].observations[0].kind = "not-established"; });
  rejects((p) => { p.cases[0].observations[0].kind = "source-interpretation"; });
  rejects((p, c) => {
    c.graph.claims[0].contextIds = [];
    p.cases[0].observations[0].claimIds.push("method-0");
  });
  const { pilot, context } = fixture();
  pilot.cases[0].observations[0].kind = "not-established";
  pilot.cases[0].assessments[0].verdict = "inconclusive";
  pilot.cases[0].assessments[0].criterionId = "regime-unknown";
  validateInteractionPilot(pilot, context);
});

test("mixed publications retain separate measured and computational observation contexts", () => {
  const { pilot, context } = fixture();
  const record = pilot.cases[0];
  context.studies.push({ ...context.studies[0], id: "paired-experiment", studyType: "primary-experiment" });
  context.graph.claims.push({ ...context.graph.claims[0], id: "paired-finding", contextIds: ["paired-experiment"] });
  record.studyIds.push("paired-experiment");
  record.claimIds.push("paired-finding");
  record.evidenceMode = "mixed";
  record.observations.push({ id: "measured-response", kind: "reported-observation", statement: "The paired measured result.",
    claimIds: ["paired-finding"], studyIds: ["paired-experiment"] });
  validateInteractionPilot(pilot, context);
  const original = structuredClone(pilot);
  for (const mode of ["experiment", "computation"]) {
    record.evidenceMode = mode;
    assert.throws(() => validateInteractionPilot(pilot, context), /evidence mode mismatch/);
  }
  record.evidenceMode = "mixed";
  record.observations[0].kind = "reported-observation";
  assert.throws(() => validateInteractionPilot(pilot, context), /observation\/study evidence mode mismatch/);
  record.observations[0] = structuredClone(original.cases[0].observations[0]);
  record.observations[1].kind = "model-result";
  assert.throws(() => validateInteractionPilot(pilot, context), /observation\/study evidence mode mismatch/);
  record.observations[1] = structuredClone(original.cases[0].observations[1]);
  record.observations.push({ id: "combined-interpretation", kind: "source-interpretation",
    statement: "This is a within-publication comparison, not independent confirmation.",
    claimIds: ["finding-0", "paired-finding"], studyIds: ["study-0", "paired-experiment"] });
  validateInteractionPilot(pilot, context);
});

test("experimental measurement inference remains distinct from computational output and speculative mechanism", () => {
  const { pilot, context } = fixture();
  pilot.cases[1].observations[0].kind = "measurement-inference";
  validateInteractionPilot(pilot, context);
  const view = projectInteractionPilot(pilot, context);
  assert.equal(view.system.cases[1].observations[0].kind, "measurement-inference");
  assert.equal(view.evaluation.assessments[1].verdict, "supports-scoped-instance");
  pilot.cases[1].observations[0].kind = "source-interpretation";
  assert.throws(() => validateInteractionPilot(pilot, context), /support cannot rest solely on interpretation/);
  rejects((p) => { p.cases[0].observations[0].kind = "measurement-inference"; });
  rejects((p) => { p.cases[1].observations[0].kind = "model-result"; });
  rejects((p) => { p.cases[1].observations[0].kind = "measurement-inference";
    p.cases[1].observations[0].claimIds = ["method-1"]; });
});

test("reading boundaries reject unknown passages and absent preparation review metadata", () => {
  rejects((_p, c) => { c.graph.claims[0].citations[0].locator = "Unread Supplementary Table 99"; });
  rejects((_p, c) => { c.studies[0].reviewedLocators = ["Unread Supplementary Table 99"]; });
  rejects((_p, c) => { c.studies[0].readExtent = ""; });
  rejects((_p, c) => { c.studies[0].limitations = []; });
  rejects((_p, c) => { delete c.studies[0].reviewedLocators; });
  rejects((_p, c) => { c.studies[0].studyType = "unknown-assumed-experiment"; });
});

test("criteria and analogies remain explicit, case-scoped and noncausal", () => {
  rejects((p) => { p.cases[0].assessments[0].familyId = "unknown"; });
  rejects((p) => { p.cases[0].assessments[0].criterionId = "regime-contrary"; });
  rejects((p) => { p.cases[0].assessments[0].observationIds = ["unknown"]; });
  rejects((p) => { p.families[0].contraryCriteria[0].id = "regime-support"; });
  rejects((p) => { p.cases[0].assessments.push(structuredClone(p.cases[0].assessments[0])); });
  rejects((p) => { p.analogies[0].caseIds = ["case-0", "unknown"]; });
  rejects((p) => { p.analogies[0].caseIds = ["case-0", "case-0"]; });
  rejects((p) => { p.analogies[0].fields = ["invented-mechanism"]; });
});

test("a contrary judgment cannot convert missing evidence or methods into an observed negative result", () => {
  const contrary = (p) => {
    p.cases[0].assessments[0].criterionId = "regime-contrary";
    p.cases[0].assessments[0].verdict = "contradicts-overextension";
  };
  rejects((p) => { contrary(p); p.cases[0].observations[0].kind = "not-established"; });
  rejects((p) => { contrary(p); p.cases[0].observations[0].kind = "source-interpretation";
    p.cases[0].observations[0].claimIds = ["method-0"]; });
  const { pilot, context } = fixture();
  contrary(pilot);
  pilot.cases[0].observations[0].kind = "source-interpretation";
  validateInteractionPilot(pilot, context);
});

test("system view selects only already admitted functional relations with matching preparation and claims", () => {
  const { pilot, context } = fixture();
  const template = context.graph.relations[0];
  context.graph.relations.push(
    { ...template, id: "descriptive", kind: "descriptive" },
    { ...template, id: "interpretation-role", role: "interpretation-dependency" },
    { ...template, id: "method-only", claimIds: ["method-1"] },
    { ...template, id: "other-claim", claimIds: ["finding-2"] },
    { ...template, id: "other-context", contextIds: ["study-2"] },
    { ...template, id: "no-context", contextIds: [] },
    { ...template, id: "other-endpoint", target: "response-2" },
    { ...template, id: "external-context", experimentalContextIds: ["unknown-context"] }
  );
  assert.deepEqual(projectInteractionPilot(pilot, context).system.cases[1].canonicalFunctionalRelations, [template]);
});

test("functional projections retain every canonical claim, context, role and assertion without truncation", () => {
  const { pilot, context } = fixture();
  const record = pilot.cases[1];
  context.studies.push({ ...context.studies[1], id: "additional-context" });
  record.studyIds.push("additional-context");
  record.observations[0].studyIds.push("additional-context");
  context.graph.claims.find((claim) => claim.id === "finding-1").contextIds.push("additional-context");
  const relation = context.graph.relations[0];
  relation.contextIds.push("additional-context");
  relation.claimIds.push("method-1");
  relation.assertion = "Preserve the exact existing scoped assertion.";
  const projected = projectInteractionPilot(pilot, context).system.cases[1].canonicalFunctionalRelations;
  assert.deepEqual(projected, [relation]);
  assert.equal(projected[0].role, "scoped-operating-support");
  relation.contextIds.pop();
  assert.deepEqual(projectInteractionPilot(pilot, context).system.cases[1].canonicalFunctionalRelations, []);
});

test("the compact pilot rejects duplicate identities, unsupported size and invalid dates", () => {
  rejects((p) => { p.cases.pop(); });
  rejects((p) => { p.cases.push(...structuredClone(p.cases.slice(0, 4))); });
  rejects((p) => { p.cases[1].id = p.cases[0].id; });
  rejects((p) => { p.sourceGroups[1].id = p.sourceGroups[0].id; });
  rejects((p) => { p.families[1].id = p.families[0].id; });
  rejects((p) => { p.date = "2026-02-30"; });
  rejects((p) => { p.cases.forEach((record) => { record.domain = "physics"; }); });
  rejects((_p, c) => { c.studies.push(structuredClone(c.studies[0])); });
});
