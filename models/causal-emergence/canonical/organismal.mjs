import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ORGANISMAL_RECORDS, ORGANISMAL_CARD_SCOPES, ORGANISMAL_OWN_STUDY_IDS
} from "./level-five.mjs";

const sourceCards = JSON.parse(readFileSync(new URL("../../../references/level-5.json", import.meta.url), "utf8"));
const root = fileURLToPath(new URL("../../../", import.meta.url));
const published = new Set(["publication-supported", "literature-synthesis"]);
const dispositions = new Set(["supported", "qualified", "excluded", "unresolved"]);
const sorted = (values) => [...values].sort();
const claimContexts = (claim) => claim.contextIds ?? [];

function publicationUrlIdentity(value) {
  if (!value) return null;
  let url;
  try { url = new URL(value); } catch { return null; }
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = url.pathname; }
  pathname = path.posix.normalize(pathname).replace(/\/+$/, "");
  if (["doi.org", "dx.doi.org"].includes(url.hostname)) return `doi:${pathname.slice(1).toLowerCase()}`;
  if (["pmc.ncbi.nlm.nih.gov", "www.ncbi.nlm.nih.gov", "ncbi.nlm.nih.gov", "europepmc.org", "www.europepmc.org"].includes(url.hostname)) {
    const pmcid = pathname.match(/\/(?:pmc\/)?articles\/(PMC\d+)(?:\/|$)/i)?.[1];
    if (pmcid) return `pmc:${pmcid.toUpperCase()}`;
  }
  return `${url.host}${pathname}`;
}

function index(records, label, idKey = "id") {
  const result = new Map();
  for (const record of records) {
    const id = record[idKey];
    assert.ok(typeof id === "string" && id.length, `Organismal ${label} has no identity`);
    assert.ok(!result.has(id), `Duplicate organismal ${label}: ${id}`);
    result.set(id, record);
  }
  return result;
}

/** Admission/provenance checks, not a substitute for independent scientific review. */
export function validateOrganismalReview(data, context) {
  const { graph, organismal, readiness } = data;
  assert.equal(organismal.id, "organismal-evidence");
  assert.equal(organismal.independentScientificReviewComplete, false);
  assert.deepEqual(organismal.checkIds, [], "No organismal numerical replay has been admitted");
  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural,
    data.physics, data.biochemistry, data.cellular, organismal];
  const studies = index(ledgers.flatMap((review) => review.studies), "study");
  const records = {
    ...context,
    studies,
    comparisons: index(organismal.comparisons, "comparison"),
    readiness: index(readiness.nodeRoles, "readiness", "nodeId")
  };
  const admitted = {};
  for (const [kind, expectedRecords] of Object.entries(ORGANISMAL_RECORDS)) {
    const idKey = kind === "readiness" ? "nodeId" : "id";
    admitted[kind] = new Set();
    assert.ok(records[kind] instanceof Map, `Unknown organismal inventory: ${kind}`);
    for (const expected of expectedRecords) {
      const id = expected[idKey];
      assert.deepEqual(records[kind].get(id), expected,
        `Organismal ${kind} changed ${id}: preserve the reviewed preparation and scope`);
      admitted[kind].add(id);
    }
  }
  // Provenance owns these records even when a new ID hides their namespace.
  // Otherwise a copied preparation or finding could be relabeled as Level 0
  // and used to justify a construction rule without reviewing that inference.
  const ownedSources = new Set([...admitted.sources, "legacy-5", "organismal-review"]);
  const ownedFiles = new Map([
    ["references/level-5.json", { id: "legacy-5", kind: "legacy-catalogue" }],
    ["references/canonical/organismal-review.json", { id: "organismal-review", kind: "internal-review" }]
  ]);
  for (const [file, owner] of ownedFiles) {
    assert.equal(context.sources.get(owner.id)?.path, file, `Organismal source binding changed ${owner.id}`);
    assert.equal(context.sources.get(owner.id)?.kind, owner.kind, `Organismal source role changed ${owner.id}`);
  }
  const ownedDois = new Set(ORGANISMAL_RECORDS.sources.filter((source) => source.doi)
    .map((source) => source.doi.toLowerCase()));
  const ownedUrls = new Set([
    ...ORGANISMAL_RECORDS.sources.map((source) => publicationUrlIdentity(source.url)).filter(Boolean),
    ...[...ownedDois].map((doi) => `doi:${doi}`)
  ]);
  const ownedPaths = new Map([...ownedFiles].map(([file, owner]) => [path.resolve(root, file), owner.id]));
  const usesEvidence = (record) => record.contextIds?.some((id) => admitted.studies.has(id))
    || record.citations?.some((citation) => ownedSources.has(citation.sourceId));
  const usesClaims = (record) => record.claimIds?.some((id) => admitted.claims.has(id));
  for (const source of graph.sources) {
    if (ownedDois.has(source.doi?.toLowerCase()) || ownedUrls.has(publicationUrlIdentity(source.url))) assert.ok(admitted.sources.has(source.id),
      `Unreviewed organismal publication alias ${source.id}`);
    if (source.path && ownedPaths.has(path.resolve(root, source.path))) {
      assert.equal(source.id, ownedPaths.get(path.resolve(root, source.path)), `Unreviewed organismal file alias ${source.id}`);
    }
  }
  for (const ledger of ledgers) {
    for (const study of ledger.studies) if (ownedSources.has(study.sourceId)
      || admitted.studies.has(study.id)) assert.ok(ledger === organismal && admitted.studies.has(study.id),
      `Unreviewed organismal study or moved acquisition ${study.id}`);
    for (const comparison of ledger.comparisons ?? []) if (usesClaims(comparison)
      || comparison.sourceIds?.some((id) => ownedSources.has(id) || admitted.studies.has(id))) {
      assert.ok(ledger === organismal && admitted.comparisons.has(comparison.id),
        `Unreviewed organismal comparison or cross-ledger inference ${comparison.id}`);
    }
  }
  assert.deepEqual(sorted(graph.entities.filter((record) => record.id.startsWith("org:")
    || usesClaims(record) || record.sourceCoordinates.some((coordinate) => ownedSources.has(coordinate.sourceId)))
    .map((record) => record.id)), sorted(admitted.entities), "Unreviewed organismal node");
  assert.deepEqual(sorted(graph.claims.filter((record) => /^[^-]+-org-/.test(record.id) || usesEvidence(record))
    .map((record) => record.id)), sorted(admitted.claims), "Unreviewed organismal claim");
  assert.deepEqual(sorted(organismal.studies.map((record) => record.id)), sorted(ORGANISMAL_OWN_STUDY_IDS),
    "Unreviewed organismal study or moved acquisition");
  assert.deepEqual(sorted(organismal.comparisons.map((record) => record.id)), sorted(admitted.comparisons),
    "Unreviewed organismal comparison");

  assert.equal(ORGANISMAL_CARD_SCOPES.length, sourceCards.length, "Incomplete Level-5 card coverage");
  const seenCards = new Set();
  for (const card of ORGANISMAL_CARD_SCOPES) {
    const original = sourceCards[card.sourceIndex];
    assert.ok(original && original.Id === card.sourceIndex, "Unknown organismal source card");
    assert.equal(card.code, `5.${original.Id}`);
    assert.ok(!seenCards.has(card.code), `Duplicate organismal card ${card.code}`);
    seenCards.add(card.code);
    assert.equal(card.originalName, original.Name, `Organismal original name changed ${card.code}`);
    assert.ok(typeof card.scope === "string" && card.scope.length, `Empty organismal scope ${card.code}`);
    assert.ok(card.nodeIds.length && card.claimIds.length && card.assertions.length,
      `Empty organismal admission contract ${card.code}`);
    assert.equal(new Set(card.nodeIds).size, card.nodeIds.length, `Duplicate organismal card node ${card.code}`);
    assert.equal(new Set(card.claimIds).size, card.claimIds.length, `Duplicate organismal card claim ${card.code}`);
    for (const id of card.nodeIds) assert.ok(context.entities.has(id), `Unknown organismal scope node ${card.code}: ${id}`);
    for (const id of card.claimIds) assert.ok(context.claims.has(id), `Unknown organismal scope claim ${card.code}: ${id}`);
    assert.ok(card.nodeIds.some((id) => context.entities.get(id).sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-5" && coordinate.locator === `/${original.Id}`)),
    `Organismal card lost its actual source coordinate ${card.code}`);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode),
      original.Parents.map((parent) => parent.ParentCode), `Organismal parent inventory/order changed ${card.code}`);
    for (const entry of [...card.assertions, ...card.parentDispositions]) {
      assert.ok(dispositions.has(entry.disposition), `Unknown organismal disposition ${card.code}`);
      assert.ok(typeof entry.reason === "string" && entry.reason.length && entry.claimIds.length,
        `Organismal disposition lacks its scientific reason/evidence ${card.code}`);
      if (Object.hasOwn(entry, "topic")) assert.ok(entry.topic.length, `Unnamed organismal assertion ${card.code}`);
      for (const id of entry.claimIds) assert.ok(context.claims.has(id), `Unknown organismal disposition claim ${id}`);
    }
    assert.ok(card.excludedDefaults.length, `Organismal card retains unreviewed catalogue defaults ${card.code}`);
    assert.ok(Array.isArray(card.unresolved), `Organismal card lost uncertainty inventory ${card.code}`);
  }
  assert.deepEqual(sorted(seenCards), sorted(sourceCards.map((card) => `5.${card.Id}`)));

  for (const expected of ORGANISMAL_RECORDS.studies) {
    const source = context.sources.get(expected.sourceId);
    assert.equal(source?.kind, "research-publication", `Organismal study lacks primary publication ${expected.id}`);
    assert.equal(expected.doi, source.doi, `Organismal study DOI differs ${expected.id}`);
    assert.equal(expected.readExtent, source.review.extent, `Organismal reading extent differs ${expected.id}`);
    assert.ok(expected.reviewedLocators.length && expected.reviewedLocators.every((locator) =>
      source.review.locators.includes(locator)), `Organismal study reading exceeds source ${expected.id}`);
    for (const key of ["system", "preparation", "observable", "finding", "correctionCheck"]) {
      assert.ok(typeof expected[key] === "string" && expected[key].length, `Organismal study missing ${key}: ${expected.id}`);
    }
  }
  for (const comparison of ORGANISMAL_RECORDS.comparisons) {
    for (const id of comparison.sourceIds) assert.equal(context.sources.get(id)?.kind,
      "research-publication", `Organismal comparison lacks a publication ${comparison.id}: ${id}`);
    for (const id of comparison.claimIds) assert.ok(context.claims.has(id),
      `Organismal comparison references an unknown claim ${comparison.id}: ${id}`);
  }
  for (const expected of ORGANISMAL_RECORDS.claims) {
    assert.deepEqual(expected.checkIds, [], "Organismal publication support is not numerical reproduction");
    for (const citation of expected.citations) {
      const source = context.sources.get(citation.sourceId);
      assert.ok(source?.review.locators.includes(citation.locator),
        `Organismal citation exceeds actual reading: ${expected.id} / ${citation.sourceId}`);
    }
    for (const id of claimContexts(expected)) {
      const study = studies.get(id);
      assert.ok(study, `Organismal claim references unknown preparation ${expected.id}: ${id}`);
      assert.ok(expected.citations.some((citation) => citation.sourceId === study.sourceId
        && study.reviewedLocators.includes(citation.locator)),
      `Organismal claim lacks preparation-specific citation ${expected.id}: ${id}`);
    }
    if (published.has(expected.status)) {
      assert.ok(claimContexts(expected).length, `Organismal finding lacks preparation ${expected.id}`);
      const sourceIds = new Set(expected.contextIds.map((id) => studies.get(id).sourceId));
      const publications = new Set([...sourceIds].map((id) => context.sources.get(id).doi?.toLowerCase() ?? id));
      assert.equal(expected.status, publications.size > 1 ? "literature-synthesis" : "publication-supported",
        `Organismal publication dependence changed ${expected.id}`);
      for (const sourceId of sourceIds) assert.ok(expected.citations.some((citation) =>
        citation.sourceId === sourceId && citation.role === "supports"),
      `Organismal finding lacks support from each used publication ${expected.id}`);
    }
  }
  for (const entity of ORGANISMAL_RECORDS.entities) {
    if (entity.id.startsWith("org:")) assert.equal(entity.level, 5);
    if (entity.status === "evidence-scoped" && entity.kind !== "context") assert.ok(entity.claimIds.some((id) =>
      published.has(context.claims.get(id).status)), `Organismal scoped record lacks evidence ${entity.id}`);
    if (entity.kind === "context") for (const id of entity.claimIds) assert.equal(context.claims.get(id).status,
      "method-contract", `Organismal experimental context is not a method ${entity.id}`);
    assert.equal(records.readiness.get(entity.id).instanceAdmission, "none");
    for (const coordinate of entity.sourceCoordinates) assert.ok(context.sources.get(coordinate.sourceId)?.review.locators
      .includes(coordinate.locator), `Organismal coordinate exceeds reading ${entity.id}`);
  }
  for (const relation of graph.relations) {
    if (!relation.id.startsWith("organismal:") && !relation.source.startsWith("org:")
      && !relation.target.startsWith("org:") && !usesClaims(relation) && !usesEvidence(relation)
      && !(relation.carrier && usesEvidence(relation.carrier))) continue;
    assert.ok(admitted.relations.has(relation.id), `Unreviewed organismal relation or domain bridge ${relation.id}`);
    const support = relation.claimIds.map((id) => context.claims.get(id));
    if (relation.kind === "descriptive") {
      assert.ok(support.some((claim) => ["definition", "method-contract"].includes(claim.status)),
        `Organismal description lacks definition/method ${relation.id}`);
      if (relation.role !== "definition-dependency") {
        assert.ok(relation.contextIds?.length, `Organismal response/inference lacks preparation ${relation.id}`);
        assert.ok(support.some((claim) => relation.contextIds.every((id) => claimContexts(claim).includes(id))),
          `Organismal description drops its claim preparation ${relation.id}`);
      }
      continue;
    }
    assert.equal(relation.role, "scoped-operating-support");
    assert.ok(relation.contextIds?.length, `Organismal effect lacks preparation ${relation.id}`);
    for (const id of relation.contextIds) {
      const study = studies.get(id);
      assert.equal(study?.studyType, "primary-experiment",
        `Organismal effect requires an experimental intervention ${relation.id}: ${id}`);
      assert.ok(!/abstract/i.test(study.readExtent),
        `Organismal effect exceeds abstract-only reading ${relation.id}: ${id}`);
    }
    const supported = support.filter((claim) => published.has(claim.status));
    assert.ok(supported.some((claim) => relation.contextIds.every((id) => claimContexts(claim).includes(id))),
      `Organismal effect lacks matched publication support ${relation.id}`);
    for (const id of [relation.source, relation.target]) assert.ok(context.entities.get(id).claimIds.some((claimId) => {
      const claim = context.claims.get(claimId);
      return published.has(claim.status) && relation.contextIds.every((studyId) => claimContexts(claim).includes(studyId));
    }), `Organismal effect endpoints lack matched preparation ${relation.id}: ${id}`);
    if (relation.carrier) {
      assert.deepEqual(relation.carrier.contextIds, relation.contextIds);
      assert.equal(relation.carrier.countingStatus, "unoperationalized");
      assert.equal(relation.carrier.numericalAdmission, "none");
      assert.ok(relation.carrier.interpretation?.limit, `Organismal carrier lacks scope ${relation.id}`);
    }
  }
  for (const rule of graph.rules) assert.ok(!usesClaims(rule)
    && ![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds]
      .some((id) => id.startsWith("org:") || admitted.entities.has(id)),
  "Organismal source records do not prove construction rules");
  return data;
}
