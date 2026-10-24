import { isReviewedNeuralSystemsDescription } from "./level-six.mjs";
import assert from "node:assert/strict";
import { BIOCHEMISTRY_CARDS, BIOCHEMISTRY_OWN_STUDY_IDS } from "./level-three.mjs";

const published = new Set(["publication-supported", "literature-synthesis"]);
const sorted = (values) => [...values].sort();

/** A closed source-admission contract; it does not evaluate biochemical truth. */
export function validateBiochemistryReview(data, context) {
  const { graph, biochemistry, readiness } = data;
  const reviews = [data.pilot, data.routing, data.optics, data.visual, data.neural, data.physics, biochemistry, ...(data.cellular ? [data.cellular] : []), ...(data.organismal ? [data.organismal] : []), ...(data.neuralSystems ? [data.neuralSystems] : [])];
  const allStudyRows = reviews.flatMap((review) => review.studies);
  const allStudies = new Map(allStudyRows.map((study) => [study.id, study]));
  assert.equal(allStudies.size, allStudyRows.length, "Duplicate study IDs across evidence ledgers");
  const records = {
    ...context,
    studies: allStudies,
    comparisons: new Map(biochemistry.comparisons.map((record) => [record.id, record])),
    readiness: new Map(readiness.nodeRoles.map((record) => [record.nodeId, record]))
  };
  const admitted = Object.fromEntries(["entities", "claims", "relations", "studies", "comparisons"]
    .map((kind) => [kind, new Set()]));
  const reviewedCards = new Set();
  for (const card of BIOCHEMISTRY_CARDS) {
    assert.ok(Number.isInteger(card.card) && card.card >= 0 && card.card < 50, "Unknown Level-3 source card");
    assert.ok(!reviewedCards.has(card.card), "Duplicate Level-3 card admission");
    reviewedCards.add(card.card);
    for (const [kind, expectedRecords] of Object.entries(card.records)) {
      assert.ok(records[kind] instanceof Map, `Unknown biochemical contract inventory: ${kind}`);
      for (const expected of expectedRecords) {
        const id = kind === "readiness" ? expected.nodeId : expected.id;
        assert.deepEqual(records[kind].get(id), expected,
          `Biochemistry card 3.${card.card} ${kind} changed ${id}: preserve the reviewed scope`);
        admitted[kind]?.add(id);
      }
    }
  }
  assert.deepEqual([...reviewedCards].sort((a, b) => a - b),
    Array.from({ length: 50 }, (_, index) => index), "Incomplete Level-3 source-card inventory");
  const ownEntities = graph.entities.filter((record) => record.id.startsWith("bio:"));
  assert.deepEqual(sorted(ownEntities.map((record) => record.id)),
    sorted([...admitted.entities].filter((id) => id.startsWith("bio:"))), "Unreviewed biochemical node");
  assert.deepEqual(sorted(graph.claims.filter((record) => /^[DCM]-bio-/.test(record.id)).map((record) => record.id)),
    sorted([...admitted.claims].filter((id) => /^[DCM]-bio-/.test(id))), "Unreviewed biochemical claim");
  assert.deepEqual(sorted(biochemistry.studies.map((record) => record.id)),
    sorted(BIOCHEMISTRY_OWN_STUDY_IDS), "Unreviewed biochemical acquisition or moved study");
  assert.equal(new Set(biochemistry.studies.map((record) => record.id)).size, biochemistry.studies.length,
    "Duplicate biochemical study IDs");
  assert.deepEqual(sorted(biochemistry.comparisons.map((record) => record.id)), sorted(admitted.comparisons),
    "Unreviewed biochemical comparison");
  assert.deepEqual(biochemistry.checkIds, [], "No biochemical numerical replay has been admitted");

  for (const entity of ownEntities) {
    assert.equal(entity.level, 3, "Biochemical level membership is a reviewed display choice");
    for (const id of entity.claimIds) {
      const claim = context.claims.get(id);
      assert.deepEqual(claim.checkIds, [], "Publication support is not an independent numerical replay");
      if (["definition", "quantity-definition"].includes(entity.kind)) assert.equal(claim.status, "definition");
      if (claim.status === "definition") assert.equal(claim.contextIds, undefined,
        "A biochemical definition does not establish an empirical preparation");
      if (entity.kind === "context") assert.equal(claim.status, "method-contract");
      if (published.has(claim.status)) {
        assert.ok(claim.contextIds?.length, "Biochemical finding lacks its complete preparation");
        const publications = new Set(claim.contextIds.map((studyId) => allStudies.get(studyId)?.sourceId));
        assert.equal(claim.status, publications.size > 1 ? "literature-synthesis" : "publication-supported",
          "Shared preparations do not become independent publication support");
        for (const sourceId of publications) assert.ok(claim.citations.some((citation) =>
          citation.sourceId === sourceId && citation.role === "supports"),
        "A biochemical finding must cite support from every empirical publication it uses");
      }
      for (const citation of claim.citations) {
        assert.ok(context.sources.get(citation.sourceId)?.review.locators.includes(citation.locator),
          "Biochemical citation exceeds actual source reading");
      }
    }
  }
  for (const relation of graph.relations) {
    if (isReviewedNeuralSystemsDescription(relation)) continue;
    if (!relation.id.startsWith("biochemistry:") && !relation.source.startsWith("bio:") && !relation.target.startsWith("bio:")) continue;
    assert.ok(admitted.relations.has(relation.id), "Unreviewed biochemical relation or cross-domain bridge");
    const claims = relation.claimIds.map((id) => context.claims.get(id));
    if (relation.role === "definition-dependency") {
      assert.equal(relation.kind, "descriptive");
      assert.equal(relation.contextIds, undefined, "A formal dependency does not establish a preparation");
    } else {
      assert.ok(relation.contextIds?.length, "Biochemical response or inference lacks preparation");
      assert.ok(claims.some((claim) => JSON.stringify(claim.contextIds) === JSON.stringify(relation.contextIds)),
        "Biochemical relation drops its claim context");
    }
    if (relation.kind === "functional-support") {
      assert.equal(relation.role, "scoped-operating-support");
      assert.ok(claims.some((claim) => published.has(claim.status)), "Biochemical effect lacks publication support");
      for (const id of [relation.source, relation.target]) {
        assert.ok(context.entities.get(id).claimIds.some((claimId) => {
          const claim = context.claims.get(claimId);
          return published.has(claim.status) && relation.contextIds.every((studyId) => claim.contextIds?.includes(studyId));
        }), "Biochemical effect endpoints lack matched empirical support");
      }
    }
    assert.equal(relation.carrier, undefined, "No universal biochemical carrier minima are admitted");
  }
  for (const rule of graph.rules) assert.ok(![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds]
    .some((id) => id.startsWith("bio:")), "Source definitions do not prove biochemical construction rules");
}
