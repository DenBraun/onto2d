import { isReviewedBridgeRelation, withBridgeReadings } from "./bridges.mjs";
import { isReviewedNeuralSystemsDescription } from "./level-six.mjs";
import assert from "node:assert/strict";
import {
  CELLULAR_RECORDS, CELLULAR_OWN_STUDY_IDS
} from "./level-four.mjs";

const published = new Set(["publication-supported", "literature-synthesis"]);
const sorted = (values) => [...values].sort();
const claimContexts = (claim) => claim.contextIds ?? [];

function index(records, label, idKey = "id") {
  const result = new Map();
  for (const record of records) {
    const id = record[idKey];
    assert.ok(typeof id === "string" && id.length, `Cellular ${label} has no identity`);
    assert.ok(!result.has(id), `Duplicate cellular ${label}: ${id}`);
    result.set(id, record);
  }
  return result;
}

/** Admission/provenance checks, not a substitute for independent scientific review. */
export function validateCellularReview(data, context) {
  const { graph, cellular, readiness } = data;
  assert.equal(cellular.id, "cellular-evidence");
  assert.equal(cellular.independentScientificReviewComplete, false);
  assert.deepEqual(cellular.checkIds, [], "No cellular numerical replay has been admitted");
  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural,
    data.physics, data.biochemistry, cellular, ...(data.organismal ? [data.organismal] : []), ...(data.neuralSystems ? [data.neuralSystems] : []), ...(data.socialSystems ? [data.socialSystems] : [])];
  const studies = index(ledgers.flatMap((review) => review.studies), "study");
  const records = {
    ...context,
    studies,
    comparisons: index(cellular.comparisons, "comparison"),
    readiness: index(readiness.nodeRoles, "readiness", "nodeId")
  };
  const admitted = {};
  for (const [kind, expectedRecords] of Object.entries(CELLULAR_RECORDS)) {
    const idKey = kind === "readiness" ? "nodeId" : "id";
    admitted[kind] = new Set();
    assert.ok(records[kind] instanceof Map, `Unknown cellular inventory: ${kind}`);
    for (const expected of expectedRecords) {
      const id = expected[idKey];
      assert.deepEqual(records[kind].get(id), kind === "sources" ? withBridgeReadings(expected) : expected,
        `Cellular ${kind} changed ${id}: preserve the reviewed preparation and scope`);
      admitted[kind].add(id);
    }
  }
  assert.deepEqual(sorted(graph.entities.filter((record) => record.id.startsWith("cell:")).map((record) => record.id)),
    sorted([...admitted.entities].filter((id) => id.startsWith("cell:"))), "Unreviewed cellular node");
  assert.deepEqual(sorted(graph.claims.filter((record) => /^[DCM]-cell-/.test(record.id)).map((record) => record.id)),
    sorted([...admitted.claims].filter((id) => /^[DCM]-cell-/.test(id))), "Unreviewed cellular claim");
  assert.deepEqual(sorted(cellular.studies.map((record) => record.id)), sorted(CELLULAR_OWN_STUDY_IDS),
    "Unreviewed cellular study or moved acquisition");
  assert.deepEqual(sorted(cellular.comparisons.map((record) => record.id)), sorted(admitted.comparisons),
    "Unreviewed cellular comparison");


  for (const expected of CELLULAR_RECORDS.studies) {
    const source = context.sources.get(expected.sourceId);
    assert.equal(source?.kind, "research-publication", `Cellular study lacks primary publication ${expected.id}`);
    assert.equal(expected.doi, source.doi, `Cellular study DOI differs ${expected.id}`);
    assert.equal(expected.readExtent, source.review.extent, `Cellular reading extent differs ${expected.id}`);
    assert.ok(expected.reviewedLocators.length && expected.reviewedLocators.every((locator) =>
      source.review.locators.includes(locator)), `Cellular study reading exceeds source ${expected.id}`);
    for (const key of ["system", "preparation", "observable", "finding", "correctionCheck"]) {
      assert.ok(typeof expected[key] === "string" && expected[key].length, `Cellular study missing ${key}: ${expected.id}`);
    }
  }
  for (const expected of CELLULAR_RECORDS.claims) {
    assert.deepEqual(expected.checkIds, [], "Cellular publication support is not numerical reproduction");
    for (const citation of expected.citations) {
      const source = context.sources.get(citation.sourceId);
      assert.ok(source?.review.locators.includes(citation.locator),
        `Cellular citation exceeds actual reading: ${expected.id} / ${citation.sourceId}`);
    }
    for (const id of claimContexts(expected)) {
      const study = studies.get(id);
      assert.ok(study, `Cellular claim references unknown preparation ${expected.id}: ${id}`);
      assert.ok(expected.citations.some((citation) => citation.sourceId === study.sourceId
        && study.reviewedLocators.includes(citation.locator)),
      `Cellular claim lacks preparation-specific citation ${expected.id}: ${id}`);
    }
    if (published.has(expected.status)) {
      assert.ok(claimContexts(expected).length, `Cellular finding lacks preparation ${expected.id}`);
      const publications = new Set(expected.contextIds.map((id) => studies.get(id).sourceId));
      assert.equal(expected.status, publications.size > 1 ? "literature-synthesis" : "publication-supported",
        `Cellular publication dependence changed ${expected.id}`);
      for (const sourceId of publications) assert.ok(expected.citations.some((citation) =>
        citation.sourceId === sourceId && citation.role === "supports"),
      `Cellular finding lacks support from each used publication ${expected.id}`);
    }
  }
  for (const entity of CELLULAR_RECORDS.entities) {
    if (entity.id.startsWith("cell:")) assert.equal(entity.level, 4);
    if (entity.status === "evidence-scoped" && entity.kind !== "context") assert.ok(entity.claimIds.some((id) =>
      published.has(context.claims.get(id).status)), `Cellular scoped record lacks evidence ${entity.id}`);
    if (entity.kind === "context") for (const id of entity.claimIds) assert.equal(context.claims.get(id).status,
      "method-contract", `Cellular experimental context is not a method ${entity.id}`);
    assert.equal(records.readiness.get(entity.id).instanceAdmission, "none");
    for (const coordinate of entity.sourceCoordinates) assert.ok(context.sources.get(coordinate.sourceId)?.review.locators
      .includes(coordinate.locator), `Cellular coordinate exceeds reading ${entity.id}`);
  }
  for (const relation of graph.relations) {
    if (isReviewedNeuralSystemsDescription(relation) || isReviewedBridgeRelation(relation)) continue;
    if (!relation.id.startsWith("cellular:") && !relation.source.startsWith("cell:")
      && !relation.target.startsWith("cell:")) continue;
    assert.ok(admitted.relations.has(relation.id), `Unreviewed cellular relation or domain bridge ${relation.id}`);
    const support = relation.claimIds.map((id) => context.claims.get(id));
    if (relation.kind === "descriptive") {
      assert.ok(support.some((claim) => ["definition", "method-contract"].includes(claim.status)),
        `Cellular description lacks definition/method ${relation.id}`);
      if (relation.role !== "definition-dependency") {
        assert.ok(relation.contextIds?.length, `Cellular response/inference lacks preparation ${relation.id}`);
        assert.ok(support.some((claim) => relation.contextIds.every((id) => claimContexts(claim).includes(id))),
          `Cellular description drops its claim preparation ${relation.id}`);
      }
      continue;
    }
    assert.equal(relation.role, "scoped-operating-support");
    assert.ok(relation.contextIds?.length, `Cellular effect lacks preparation ${relation.id}`);
    const supported = support.filter((claim) => published.has(claim.status));
    assert.ok(supported.some((claim) => relation.contextIds.every((id) => claimContexts(claim).includes(id))),
      `Cellular effect lacks matched publication support ${relation.id}`);
    for (const id of [relation.source, relation.target]) assert.ok(context.entities.get(id).claimIds.some((claimId) => {
      const claim = context.claims.get(claimId);
      return published.has(claim.status) && relation.contextIds.every((studyId) => claimContexts(claim).includes(studyId));
    }), `Cellular effect endpoints lack matched preparation ${relation.id}: ${id}`);
    if (relation.carrier) {
      assert.deepEqual(relation.carrier.contextIds, relation.contextIds);
      assert.equal(relation.carrier.countingStatus, "unoperationalized");
      assert.equal(relation.carrier.numericalAdmission, "none");
      assert.ok(relation.carrier.interpretation?.limit, `Cellular carrier lacks scope ${relation.id}`);
    }
  }
  for (const rule of graph.rules) assert.ok(![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds]
    .some((id) => id.startsWith("cell:")), "Cellular source records do not prove construction rules");
  return data;
}
