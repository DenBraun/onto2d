import { isReviewedBridgeRelation, isReviewedBridgeClaim, withBridgeReadings } from "./bridges.mjs";
import { isCauseEvidenceClaim } from "./cause-evidence.mjs";
import { publicationIdentity } from "./publication-identity.mjs";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SOCIAL_SYSTEMS_RECORDS, SOCIAL_SYSTEMS_SCOPES } from "./level-seven.mjs";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const published = new Set(["publication-supported", "literature-synthesis"]);
const sorted = (values) => [...values].sort();
export const SOCIAL_SYSTEMS_OBLIGATIONS = [
  "Obtain independent scientific review of the source readings, bibliographic corrections and unresolved reporting conflicts.",
  "Test proposed mediation, persistence, cross-population transfer and causal necessities with matched controls; document definitions and observed associations do not establish them.",
  "Reproduce selected original data and analysis before admitting numerical replay, universal social minima, weighted dependencies or a construction rule."
];
export function socialSystemsScopes(graph) {
  const claims = new Map(graph.claims.map((claim) => [claim.id, claim]));
  return SOCIAL_SYSTEMS_SCOPES.map((scope) => {
    const sourceIds = new Set();
    for (const id of scope.claimIds) {
      assert.ok(claims.has(id), `Unknown Level-7 scope claim ${scope.id}: ${id}`);
      for (const citation of claims.get(id).citations) sourceIds.add(citation.sourceId);
    }
    return { ...scope, sourceIds: sorted(sourceIds) };
  });
}
function index(rows, label, key = "id") {
  const result = new Map();
  for (const row of rows) {
    assert.ok(!result.has(row[key]), `Duplicate social-systems ${label}: ${row[key]}`);
    result.set(row[key], row);
  }
  return result;
}

/** Exact evidence admission, not proof of social laws or independent scientific validation. */
export function validateSocialSystemsReview(data, context) {
  const { graph, socialSystems, readiness } = data;
  assert.equal(socialSystems.id, "social-systems-evidence");
  assert.equal(socialSystems.independentScientificReviewComplete, false);
  assert.deepEqual(socialSystems.checkIds, []);
  assert.deepEqual(socialSystems.openObligations, SOCIAL_SYSTEMS_OBLIGATIONS);
  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural, data.physics,
    data.biochemistry, data.cellular, data.organismal, data.neuralSystems, socialSystems];
  const records = { ...context, studies: index(ledgers.flatMap((ledger) => ledger.studies), "study"),
    comparisons: index(socialSystems.comparisons, "comparison"), readiness: index(readiness.nodeRoles, "role", "nodeId") };
  const admitted = {};
  for (const [kind, expected] of Object.entries(SOCIAL_SYSTEMS_RECORDS)) {
    const key = kind === "readiness" ? "nodeId" : "id";
    admitted[kind] = new Set();
    for (const record of expected) {
      assert.deepEqual(records[kind].get(record[key]), kind === "sources" ? withBridgeReadings(record) : record, `Social-systems ${kind} changed ${record[key]}: preserve reviewed preparation and scope`);
      admitted[kind].add(record[key]);
    }
  }
  // Owned sources remain in this inventory even when IDs are relabeled
  // or unrelated primary evidence is added to an unreviewed social claim.
  const ownedSources = new Set([...admitted.sources, "social-systems-review"]);
  const ownedDois = new Set(SOCIAL_SYSTEMS_RECORDS.sources.filter((source) => source.doi).map((source) => source.doi.toLowerCase()));
  const ownedIdentities = new Set([...SOCIAL_SYSTEMS_RECORDS.sources.map((source) => publicationIdentity(source.url)), ...[...ownedDois].map((doi) => `doi:${doi}`)].filter(Boolean));
  const files = new Map([["references/canonical/social-systems-review.json", { id: "social-systems-review", kind: "internal-review" }]]);
  for (const [file, owner] of files) {
    assert.equal(context.sources.get(owner.id)?.path, file, `Social-systems source binding changed ${owner.id}`);
    assert.equal(context.sources.get(owner.id)?.kind, owner.kind, `Social-systems source role changed ${owner.id}`);
  }
  const ownedPaths = new Map([...files].map(([file, owner]) => [path.resolve(root, file), owner.id]));
  const usesClaims = (record) => record.claimIds?.some((id) => admitted.claims.has(id));
  const usesEvidence = (record) => record.contextIds?.some((id) => admitted.studies.has(id))
    || record.citations?.some((citation) => ownedSources.has(citation.sourceId));
  for (const source of graph.sources) {
    const doiIdentity = source.doi ? `doi:${source.doi.toLowerCase()}` : null;
    if (ownedIdentities.has(doiIdentity) || ownedIdentities.has(publicationIdentity(source.url))) assert.ok(admitted.sources.has(source.id), `Unreviewed social-systems publication alias ${source.id}`);
    if (source.path && ownedPaths.has(path.resolve(root, source.path))) assert.equal(source.id, ownedPaths.get(path.resolve(root, source.path)), `Unreviewed social-systems file alias ${source.id}`);
    if (source.kind === "primary-document") assert.ok(admitted.sources.has(source.id), `Unreviewed social documentary source ${source.id}`);
  }
  for (const ledger of ledgers) {
    for (const study of ledger.studies) if (ownedSources.has(study.sourceId) || admitted.studies.has(study.id)) assert.ok(ledger === socialSystems && admitted.studies.has(study.id), `Unreviewed social-systems study or moved acquisition ${study.id}`);
    for (const comparison of ledger.comparisons ?? []) if (usesClaims(comparison)
      || comparison.sourceIds?.some((id) => ownedSources.has(id) || admitted.studies.has(id))) assert.ok(ledger === socialSystems && admitted.comparisons.has(comparison.id), `Unreviewed social-systems comparison ${comparison.id}`);
  }
  assert.deepEqual(sorted(graph.entities.filter((record) => record.id.startsWith("soc:") || usesClaims(record)
    || record.sourceCoordinates.some((coordinate) => ownedSources.has(coordinate.sourceId))).map((record) => record.id)), sorted(admitted.entities), "Unreviewed social-systems entity");
  assert.deepEqual(sorted(graph.claims.filter((record) => !isReviewedBridgeClaim(record) && !isCauseEvidenceClaim(record) && (/^[^-]+-soc-/.test(record.id) || usesEvidence(record))).map((record) => record.id)), sorted(admitted.claims), "Unreviewed social-systems claim");
  assert.deepEqual(sorted(socialSystems.studies.map((record) => record.id)), sorted(admitted.studies), "Unreviewed social-systems acquisition inventory");
  assert.deepEqual(sorted(socialSystems.comparisons.map((record) => record.id)), sorted(admitted.comparisons), "Unreviewed social-systems comparison inventory");
  assert.deepEqual(socialSystems.scopes, socialSystemsScopes(graph), "Level-7 topic scopes differ from reviewed contracts");
  for (const scope of SOCIAL_SYSTEMS_SCOPES) {
    assert.ok(scope.scope.length && scope.nodeIds.length && scope.claimIds.length, `Empty Level-7 scope ${scope.id}`);
    assert.equal(scope.nodeIds[0], scope.id, `Level-7 scope node changed ${scope.id}`);
    assert.equal(context.entities.get(scope.id)?.name, `${scope.name}: reviewed scope`, `Level-7 scope name changed ${scope.id}`);
    for (const id of scope.nodeIds) assert.ok(context.entities.has(id), `Unknown Level-7 node ${scope.id}: ${id}`);
    for (const id of scope.claimIds) assert.ok(context.claims.has(id), `Unknown Level-7 claim ${scope.id}: ${id}`);
  }
  for (const study of SOCIAL_SYSTEMS_RECORDS.studies) {
    const source = context.sources.get(study.sourceId);
    assert.equal(source.kind, "research-publication");
    assert.equal(study.doi, source.doi);
    assert.equal(study.readExtent, source.review.extent);
    assert.ok(study.reviewedLocators.every((locator) => source.review.locators.includes(locator)), `Social preparation exceeds reading ${study.id}`);
  }
  for (const claim of SOCIAL_SYSTEMS_RECORDS.claims) {
    assert.deepEqual(claim.checkIds, [], "A social source reading is not numerical replay");
    for (const citation of claim.citations) {
      const source = context.sources.get(citation.sourceId);
      assert.ok(source?.review.locators.includes(citation.locator), `Social citation exceeds reading ${claim.id}`);
      if (source.kind === "primary-document") assert.equal(claim.status, "definition", "A constitutive document is not evidence of implementation or effectiveness");
    }
    for (const id of claim.contextIds ?? []) {
      const study = records.studies.get(id);
      assert.ok(study && claim.citations.some((citation) => citation.sourceId === study.sourceId && study.reviewedLocators.includes(citation.locator)), `Social claim lacks actual preparation citation ${claim.id}: ${id}`);
    }
    if (published.has(claim.status)) {
      assert.ok(claim.contextIds?.length, `Social finding lacks preparation ${claim.id}`);
      const publications = new Set(claim.contextIds.map((id) => records.studies.get(id).sourceId));
      assert.equal(claim.status, publications.size > 1 ? "literature-synthesis" : "publication-supported");
      for (const id of publications) assert.ok(claim.citations.some((citation) => citation.sourceId === id && citation.role === "supports"));
    }
  }
  for (const entity of SOCIAL_SYSTEMS_RECORDS.entities) {
    assert.equal(entity.level, 7);
    assert.equal(records.readiness.get(entity.id).instanceAdmission, "none");
    if (entity.kind === "context") for (const id of entity.claimIds) assert.equal(context.claims.get(id).status, "method-contract");
    for (const coordinate of entity.sourceCoordinates) assert.ok(context.sources.get(coordinate.sourceId)?.review.locators.includes(coordinate.locator), `Social coordinate exceeds reading ${entity.id}`);
  }
  for (const relation of graph.relations) {
    if (isReviewedBridgeRelation(relation)) continue;
    if (!relation.id.startsWith("social-systems:") && !relation.source.startsWith("soc:") && !relation.target.startsWith("soc:")
      && !usesClaims(relation) && !usesEvidence(relation) && !(relation.carrier && usesEvidence(relation.carrier))) continue;
    assert.ok(admitted.relations.has(relation.id), `Unreviewed social-systems relation or domain bridge ${relation.id}`);
    if (relation.kind === "descriptive") continue;
    assert.equal(relation.role, "scoped-operating-support");
    for (const id of relation.contextIds) {
      const study = records.studies.get(id);
      assert.equal(study.studyType, "primary-experiment", "An observed association or simulation does not establish an intervention");
      assert.doesNotMatch(study.readExtent, /abstract/i, "Social functional support exceeds abstract reading");
    }
    for (const endpoint of [relation.source, relation.target]) assert.ok(context.entities.get(endpoint).claimIds.some((id) => {
      const claim = context.claims.get(id);
      return published.has(claim.status) && relation.contextIds.every((contextId) => claim.contextIds?.includes(contextId));
    }), `Social functional endpoints lack matched preparation ${relation.id}`);
  }
  for (const comparison of SOCIAL_SYSTEMS_RECORDS.comparisons) {
    for (const id of comparison.sourceIds) assert.equal(context.sources.get(id)?.kind, "research-publication");
    for (const id of comparison.claimIds) assert.ok(context.claims.has(id));
  }
  const usesSocialClaims = (record) => record.claimIds?.some((id) => admitted.claims.has(id)
    || context.claims.get(id)?.citations.some((citation) => ownedSources.has(citation.sourceId)));
  for (const rule of graph.rules) assert.ok(!usesSocialClaims(rule)
    && ![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds].some((id) => id.startsWith("soc:") || usesSocialClaims(context.entities.get(id))),
  "Social source records do not establish construction rules");
  return data;
}
