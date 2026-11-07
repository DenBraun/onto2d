import assert from "node:assert/strict";
import { MODEL_CLAIM_STATUSES, PUBLISHED_CLAIM_STATUSES } from "./arisings.mjs";

/**
 * Evidence for causes between arisings. Each cause-evidence claim (id `CE-<parent>-<child>-<slug>`) belongs to exactly
 * one cause and names that cause and its role in its scope. A published claim rests on reviewed study contexts: studies
 * of this ledger or of a domain ledger, cited with their own reviewed passages. A model claim rests on a specified method
 * or an executable check under the global claim rules. A supported or model-supported cause cites such claims; an author
 * hypothesis cites none. No other record cites cause evidence.
 */
export const CAUSE_EVIDENCE_LEDGER_ID = "cause-evidence";
export const CAUSE_EVIDENCE_STUDY_TYPES = Object.freeze(["primary-experiment", "primary-observation"]);
const CLAIM_ID = /^CE-(\d+\.\d+)-(\d+\.\d+)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PUBLISHED = new Set(PUBLISHED_CLAIM_STATUSES);
const MODEL = new Set(MODEL_CLAIM_STATUSES);

export const isCauseEvidenceClaim = (claim) => typeof claim?.id === "string" && claim.id.startsWith("CE-");

/** Exact admission of cause evidence; it does not replicate the cited preparations or establish universal laws. */
export function validateCauseEvidence(data, context) {
  const { graph, causeEvidence } = data;
  const { sources, claims } = context;
  assert.equal(causeEvidence.id, CAUSE_EVIDENCE_LEDGER_ID, "Cause evidence ledger changed");
  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural, data.physics, data.biochemistry,
    data.cellular, data.organismal, data.neuralSystems, data.socialSystems, causeEvidence];
  const studies = new Map(ledgers.flatMap((ledger) => ledger.studies ?? []).map((study) => [study.id, study]));
  for (const study of causeEvidence.studies) {
    assert.ok(CAUSE_EVIDENCE_STUDY_TYPES.includes(study.studyType), `Cause evidence rests on primary studies: ${study.id}`);
    assert.equal(sources.get(study.sourceId)?.kind, "research-publication", `Cause evidence study lacks its publication: ${study.id}`);
  }
  for (const record of [...graph.entities, ...graph.rules, ...graph.relations, ...graph.interactionCases, ...graph.arisings]) {
    for (const id of record.claimIds) assert.ok(!isCauseEvidenceClaim({ id }), `Cause evidence belongs to causes alone: ${record.id} ${id}`);
  }

  const causes = new Map(graph.causes.map((cause) => [cause.id, cause]));
  const owner = new Map();
  for (const cause of graph.causes) for (const id of cause.claimIds) {
    assert.ok(isCauseEvidenceClaim(claims.get(id)), `A cause cites only cause-evidence claims: ${cause.id} ${id}`);
    assert.ok(!owner.has(id), `A cause-evidence claim belongs to one cause: ${id}`);
    owner.set(id, cause.id);
  }
  const usedStudies = new Set();
  for (const claim of graph.claims.filter(isCauseEvidenceClaim)) {
    const match = CLAIM_ID.exec(claim.id);
    assert.ok(match, `Cause-evidence claim id format: ${claim.id}`);
    const causeId = `cause:${match[1]}>${match[2]}`;
    const cause = causes.get(causeId);
    assert.ok(cause, `Cause-evidence claim names an absent cause: ${claim.id}`);
    assert.equal(owner.get(claim.id), causeId, `A cause-evidence claim is cited by its own cause: ${claim.id}`);
    assert.ok(claim.scope.startsWith(`Cause ${match[1]} > ${match[2]} (${cause.ontologicalRole}): `), `Cause evidence names its cause and role in its scope: ${claim.id}`);
    const published = PUBLISHED.has(claim.status);
    assert.ok(published || MODEL.has(claim.status), `Cause evidence is published or model evidence: ${claim.id}`);
    assert.equal(claim.kind, claim.status === "method-contract" ? "method" : "review-finding", `Cause evidence kind follows its status: ${claim.id}`);
    assert.ok(claim.limitations.length >= 1, `Cause evidence states its limits: ${claim.id}`);
    if (published) {
      assert.deepEqual(claim.checkIds, [], `Published cause evidence is not a numerical replay: ${claim.id}`);
      assert.ok(claim.contextIds?.length, `Cause evidence names its study contexts: ${claim.id}`);
      if (claim.status === "literature-synthesis") assert.ok(claim.contextIds.length >= 2, `A synthesis combines several study contexts: ${claim.id}`);
    }
    for (const id of claim.contextIds ?? []) {
      const study = studies.get(id);
      assert.ok(study, `Unknown cause evidence context ${id}: ${claim.id}`);
      assert.ok(claim.citations.some((citation) => citation.sourceId === study.sourceId && study.reviewedLocators.includes(citation.locator)),
        `Cause evidence lacks its study's reviewed passage ${id}: ${claim.id}`);
      usedStudies.add(id);
    }
    for (const citation of claim.citations) {
      assert.ok(sources.get(citation.sourceId)?.review.locators.includes(citation.locator), `Cause evidence citation exceeds the reading: ${claim.id}`);
    }
  }
  for (const study of causeEvidence.studies) assert.ok(usedStudies.has(study.id), `Unused cause evidence study: ${study.id}`);

  const members = new Map(graph.arisings.map((arising) => [arising.id, new Set(arising.memberIds)]));
  const relations = new Map(graph.relations.map((relation) => [relation.id, relation]));
  for (const cause of graph.causes) {
    if (cause.status === "author-hypothesis") assert.deepEqual(cause.claimIds, [], `An author hypothesis cites no evidence yet: ${cause.id}`);
    else assert.ok(cause.claimIds.length, `A ${cause.status} cause cites its evidence: ${cause.id}`);
    const contexts = new Set(cause.claimIds.flatMap((id) => claims.get(id).contextIds ?? []));
    for (const id of cause.evidence.contextIds) assert.ok(contexts.has(id), `A cause names only the study contexts of its evidence: ${cause.id} ${id}`);
    const parent = members.get(cause.parent), child = members.get(cause.child);
    for (const id of cause.evidence.relationIds) {
      const relation = relations.get(id);
      assert.ok(relation, `Unknown cause evidence relation ${id}: ${cause.id}`);
      assert.ok(parent?.has(relation.source) && child?.has(relation.target) || parent?.has(relation.target) && child?.has(relation.source),
        `A cause evidence relation joins the parent and child subgraphs: ${cause.id} ${id}`);
    }
  }
  return data;
}
