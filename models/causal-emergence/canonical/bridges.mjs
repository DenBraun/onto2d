import assert from "node:assert/strict";
import { isDeepStrictEqual } from "node:util";
import { publicationIdentity } from "./publication-identity.mjs";
import { BRIDGE_SOURCES, BRIDGE_CLAIMS, BRIDGE_RELATIONS, BRIDGE_READINGS } from "./bridge-records.mjs";

/**
 * Reviewed descriptive bridges between otherwise separate evidence islands and levels.
 * A bridge states which definition, measurement principle, interpretation boundary or topic scope a
 * record uses. It never establishes arising, causation, necessity, a carrier minimum or a level order.
 */
export const BRIDGE_RECORDS = Object.freeze({ sources: BRIDGE_SOURCES, claims: BRIDGE_CLAIMS, relations: BRIDGE_RELATIONS });
export const BRIDGE_ROLES = Object.freeze(["definition-dependency", "measurement-context", "interpretation-dependency"]);
export const BRIDGE_OBLIGATIONS = [
  "Obtain independent scientific review of every bridge reading; agreement of vocabulary across domains is not evidence of a shared mechanism.",
  "Replace a bridge whose cited passage is superseded or contradicted; a bridge records a stated dependency, not a tested construction.",
  "Keep unresolved Level-0 correspondences open until the manuscript specifies the missing maps, observables and tests; no derivation of physics from Level 0 is admitted."
];

const inventories = new Map(Object.entries(BRIDGE_RECORDS).map(([kind, rows]) => {
  const records = new Map();
  for (const row of rows) {
    assert.ok(!records.has(row.id), `Duplicate bridge ${kind}: ${row.id}`);
    records.set(row.id, row);
  }
  return [kind, records];
}));

/** Only the exact reviewed bridge record crosses another domain's closed inventory. */
export function isReviewedBridgeRecord(kind, record) {
  const expected = inventories.get(kind)?.get(record?.id);
  return expected !== undefined && isDeepStrictEqual(record, expected);
}

/** Bridges organize existing evidence; they never grant a physical dependency. */
export function isReviewedBridgeRelation(relation) {
  return relation.kind === "descriptive" && isReviewedBridgeRecord("relations", relation);
}

export function isReviewedBridgeClaim(claim) {
  return isReviewedBridgeRecord("claims", claim);
}

export { BRIDGE_READINGS };

/**
 * Passages of existing sources read only for bridges. They extend the source's reviewed passages in the graph
 * without changing the owning ledger's preparations, which keep the passages they were built from.
 */
/** The passages a source's own ledger reviewed, without the bridge readings appended in the graph. */
export function withoutBridgeReadings(source) {
  const readings = BRIDGE_READINGS[source?.id];
  if (!readings) return source;
  return { ...source, review: { ...source.review, locators: source.review.locators.filter((l) => !readings.includes(l)) } };
}

export function withBridgeReadings(source) {
  const readings = BRIDGE_READINGS[source?.id];
  if (!readings) return source;
  return { ...source, review: { ...source.review, locators: [...source.review.locators, ...readings.filter((l) => !source.review.locators.includes(l))] } };
}

const sorted = (values) => [...values].sort();
const definitionKinds = new Set(["review-finding", "author-definition"]);

/** Exact bridge admission; it does not validate the bridged science or replace independent review. */
export function validateBridgeReview(data, context) {
  const { graph } = data;
  const admitted = Object.fromEntries([...inventories].map(([kind, rows]) => [kind, new Set(rows.keys())]));
  for (const [kind, rows] of inventories) {
    const present = new Map(graph[kind].map((row) => [row.id, row]));
    for (const [id, record] of rows) assert.deepEqual(present.get(id), record, `Bridge ${kind} changed ${id}: preserve the reviewed reading`);
  }
  assert.deepEqual(sorted(graph.relations.filter((r) => r.id.startsWith("bridge:")).map((r) => r.id)), sorted(admitted.relations), "Unreviewed bridge relation");
  assert.deepEqual(sorted(graph.claims.filter((c) => c.id.startsWith("B-")).map((c) => c.id)), sorted(admitted.claims), "Unreviewed bridge claim");

  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural, data.physics,
    data.biochemistry, data.cellular, data.organismal, data.neuralSystems, data.socialSystems];
  const studies = new Map(ledgers.flatMap((ledger) => ledger.studies).map((study) => [study.id, study]));
  const claimUsers = new Map();
  for (const record of [...graph.entities, ...graph.rules, ...graph.relations]) for (const id of record.claimIds ?? []) {
    if (!claimUsers.has(id)) claimUsers.set(id, []);
    claimUsers.get(id).push(record.id);
  }
  const ordinaryPairs = new Set(graph.relations.filter((r) => !admitted.relations.has(r.id)).map((r) => `${r.source}\u0000${r.target}`));
  const bridgePairs = new Set();
  const citedSources = new Set();

  for (const relation of BRIDGE_RELATIONS) {
    const id = relation.id;
    assert.match(id, /^bridge:[a-z0-9][a-z0-9-]*$/, `Bridge id format ${id}`);
    assert.equal(relation.kind, "descriptive", `A bridge is descriptive, never a measured effect: ${id}`);
    assert.ok(BRIDGE_ROLES.includes(relation.role), `Bridge role ${relation.role}: ${id}`);
    assert.ok(context.entities.has(relation.source) && context.entities.has(relation.target), `Bridge endpoints are entities: ${id}`);
    assert.equal(relation.carrier, undefined, `A bridge has no carrier semantics: ${id}`);
    assert.equal(relation.experimentalContextIds, undefined, `A bridge has no experimental context: ${id}`);
    const pair = `${relation.source}\u0000${relation.target}`;
    assert.ok(!ordinaryPairs.has(pair) && !bridgePairs.has(pair), `Bridge duplicates an existing relation: ${id}`);
    bridgePairs.add(pair);
    assert.equal(relation.claimIds.length, 1, `A bridge owns exactly one claim: ${id}`);
    const claim = context.claims.get(relation.claimIds[0]);
    assert.ok(claim && admitted.claims.has(claim.id), `Bridge claim is not a reviewed bridge claim: ${id}`);
    assert.deepEqual(claimUsers.get(claim.id), [id], `A bridge claim supports only its bridge: ${claim.id}`);
    assert.deepEqual(relation.contextIds ?? null, claim.contextIds ?? null, `Bridge drops or changes its claim preparation: ${id}`);
    if (relation.role === "definition-dependency") assert.equal(relation.contextIds, undefined, `A definition bridge does not establish a preparation: ${id}`);
    if (relation.role === "measurement-context") assert.ok(relation.contextIds?.length, `A measurement bridge names its preparation: ${id}`);
    for (const studyId of relation.contextIds ?? []) {
      const study = studies.get(studyId);
      assert.ok(study, `Unknown bridge preparation ${studyId}: ${id}`);
      assert.ok(claim.citations.some((c) => c.sourceId === study.sourceId && study.reviewedLocators.includes(c.locator)),
        `Bridge claim lacks its preparation's own reviewed passage ${study.sourceId}: ${id}`);
    }
    const levels = [context.entities.get(relation.source).level, context.entities.get(relation.target).level];
    if (claim.kind === "author-definition") assert.ok(levels.includes(0), `Only Level-0 bridges carry author definitions: ${id}`);
  }
  for (const claim of BRIDGE_CLAIMS) {
    const id = claim.id;
    assert.match(id, /^B-[a-z0-9][a-z0-9-]*$/, `Bridge claim id format ${id}`);
    assert.deepEqual(claim.checkIds, [], `A bridge reading is not a numerical replay: ${id}`);
    assert.ok(claim.limitations.length >= 2, `A bridge keeps its reading and causal limits: ${id}`);
    if (claim.status === "definition") assert.ok(definitionKinds.has(claim.kind), `Bridge definition kind ${claim.kind}: ${id}`);
    else {
      assert.equal(claim.status, "method-contract", `A bridge is a definition or method contract: ${id}`);
      assert.equal(claim.kind, "method", `A bridge method contract is a method: ${id}`);
    }
    const sourceOf = (citation) => context.sources.get(citation.sourceId);
    for (const citation of claim.citations) {
      const source = sourceOf(citation);
      assert.ok(source, `Unknown bridge citation ${citation.sourceId}: ${id}`);
      assert.ok(source.review.locators.includes(citation.locator), `Bridge citation exceeds actual source reading ${citation.sourceId}: ${id}`);
      assert.ok(["supports", "method", "limits", "provenance"].includes(citation.role), `Bridge citation role ${citation.role}: ${id}`);
      citedSources.add(source.id);
    }
    if (claim.kind === "method") assert.ok(claim.citations.some((c) => c.role === "method" && sourceOf(c).kind === "research-publication"), `Bridge method lacks a publication: ${id}`);
    if (claim.kind === "review-finding") assert.ok(claim.citations.some((c) => c.role === "supports" && sourceOf(c).kind === "research-publication"), `Bridge definition lacks a published source: ${id}`);
    if (claim.kind === "author-definition") assert.ok(claim.citations.some((c) => c.sourceId === "topology" && c.role === "provenance"), `Author correspondence lacks manuscript provenance: ${id}`);
  }
  const identities = new Map();
  for (const source of graph.sources) {
    for (const identity of [source.doi ? `doi:${source.doi.toLowerCase()}` : null, publicationIdentity(source.url)].filter(Boolean)) {
      assert.ok(!identities.has(identity) || identities.get(identity) === source.id || !admitted.sources.has(source.id) && !admitted.sources.has(identities.get(identity)),
        `Bridge publication duplicates an existing source: ${source.id}`);
      identities.set(identity, source.id);
    }
  }
  const bridgeCitations = new Set(BRIDGE_CLAIMS.flatMap((claim) => claim.citations.map((c) => `${c.sourceId}\u0000${c.locator}`)));
  for (const [sourceId, readings] of Object.entries(BRIDGE_READINGS)) {
    const source = context.sources.get(sourceId);
    assert.ok(source && !admitted.sources.has(sourceId), `Bridge reading of an unknown or bridge-owned source: ${sourceId}`);
    assert.ok(readings.length && new Set(readings).size === readings.length, `Empty or repeated bridge reading: ${sourceId}`);
    assert.deepEqual(source.review.locators.slice(-readings.length), readings, `Bridge readings must close the source's reviewed passages: ${sourceId}`);
    for (const locator of readings) assert.ok(bridgeCitations.has(`${sourceId}\u0000${locator}`), `Uncited bridge reading ${sourceId}: ${locator}`);
  }
  for (const source of BRIDGE_SOURCES) {
    assert.equal(source.kind, "research-publication", `A bridge source is a publication: ${source.id}`);
    assert.ok(citedSources.has(source.id), `Uncited bridge source: ${source.id}`);
    assert.ok(source.review.locators.length && source.review.limit, `Bridge source lacks its reading record: ${source.id}`);
  }
  return data;
}
