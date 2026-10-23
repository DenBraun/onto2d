import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  CELLULAR_RECORDS, CELLULAR_CARD_SCOPES, CELLULAR_OWN_STUDY_IDS
} from "./level-four.mjs";

const sourceCards = JSON.parse(readFileSync(new URL("../../../references/level-4.json", import.meta.url), "utf8"));
const published = new Set(["publication-supported", "literature-synthesis"]);
const dispositions = new Set(["supported", "qualified", "excluded", "unresolved"]);
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
    data.physics, data.biochemistry, cellular, ...(data.organismal ? [data.organismal] : [])];
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
      assert.deepEqual(records[kind].get(id), expected,
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

  assert.equal(CELLULAR_CARD_SCOPES.length, sourceCards.length, "Incomplete Level-4 card coverage");
  const seenCards = new Set();
  for (const card of CELLULAR_CARD_SCOPES) {
    const original = sourceCards[card.sourceIndex];
    assert.ok(original && original.Id === card.sourceIndex, "Unknown cellular source card");
    assert.equal(card.code, `4.${original.Id}`);
    assert.ok(!seenCards.has(card.code), `Duplicate cellular card ${card.code}`);
    seenCards.add(card.code);
    assert.equal(card.originalName, original.Name, `Cellular original name changed ${card.code}`);
    assert.ok(typeof card.scope === "string" && card.scope.length, `Empty cellular scope ${card.code}`);
    assert.ok(card.nodeIds.length && card.claimIds.length && card.assertions.length,
      `Empty cellular admission contract ${card.code}`);
    assert.equal(new Set(card.nodeIds).size, card.nodeIds.length, `Duplicate cellular card node ${card.code}`);
    assert.equal(new Set(card.claimIds).size, card.claimIds.length, `Duplicate cellular card claim ${card.code}`);
    for (const id of card.nodeIds) assert.ok(context.entities.has(id), `Unknown cellular scope node ${card.code}: ${id}`);
    for (const id of card.claimIds) assert.ok(context.claims.has(id), `Unknown cellular scope claim ${card.code}: ${id}`);
    assert.ok(card.nodeIds.some((id) => context.entities.get(id).sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-4" && coordinate.locator === `/${original.Id}`)),
    `Cellular card lost its actual source coordinate ${card.code}`);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode),
      original.Parents.map((parent) => parent.ParentCode), `Cellular parent inventory/order changed ${card.code}`);
    for (const entry of [...card.assertions, ...card.parentDispositions]) {
      assert.ok(dispositions.has(entry.disposition), `Unknown cellular disposition ${card.code}`);
      assert.ok(typeof entry.reason === "string" && entry.reason.length && entry.claimIds.length,
        `Cellular disposition lacks its scientific reason/evidence ${card.code}`);
      if (Object.hasOwn(entry, "topic")) assert.ok(entry.topic.length, `Unnamed cellular assertion ${card.code}`);
      for (const id of entry.claimIds) assert.ok(context.claims.has(id), `Unknown cellular disposition claim ${id}`);
    }
    assert.ok(card.excludedDefaults.length, `Cellular card retains unreviewed catalogue defaults ${card.code}`);
    assert.ok(Array.isArray(card.unresolved), `Cellular card lost uncertainty inventory ${card.code}`);
  }
  assert.deepEqual(sorted(seenCards), sorted(sourceCards.map((card) => `4.${card.Id}`)));

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
