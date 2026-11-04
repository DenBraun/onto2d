import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { SOCIAL_SYSTEMS_RECORDS, SOCIAL_SYSTEMS_CARD_SCOPES, isReviewedSocialSystemsDescription } from "../../models/causal-emergence/canonical/level-seven.mjs";
import { socialSystemsCards } from "../../models/causal-emergence/canonical/social-systems.mjs";
import { publicationIdentity } from "../../models/causal-emergence/canonical/publication-identity.mjs";

const data = await loadCanonicalSource();
const originals = JSON.parse(await readFile(new URL("../../references/level-7.json", import.meta.url)));
const claims = new Map(data.graph.claims.map((claim) => [claim.id, claim]));
const sources = new Map(data.graph.sources.map((source) => [source.id, source]));
const studies = new Map(Object.values(data).flatMap((ledger) => ledger?.studies ?? []).map((study) => [study.id, study]));
const reject = (mutate, pattern) => {
  const changed = structuredClone(data);
  mutate(changed);
  assert.throws(() => validateCanonicalSource(changed), pattern);
};

test("all 25 Level-7 topics preserve their ordered dependencies and all 75 original references", () => {
  assert.equal(SOCIAL_SYSTEMS_CARD_SCOPES.length, 25);
  assert.deepEqual(data.socialSystems.cards, socialSystemsCards(data.graph));
  assert.equal(data.socialSystems.cards.reduce((n, card) => n + card.bibliography.length, 0), 75);
  for (const card of data.socialSystems.cards) {
    const original = originals[card.sourceIndex];
    assert.equal(card.originalName, original.Name);
    assert.deepEqual(card.parentDispositions.map((entry) => entry.parentCode), original.Parents.map((entry) => entry.ParentCode));
    assert.deepEqual(card.bibliography.map((entry) => entry.sourceIndex), original.Evidence.map((_, i) => i));
    for (const entry of card.bibliography) assert.ok(sources.get(entry.sourceId).review.locators.includes(entry.locator));
    for (const entry of [...card.assertions, ...card.parentDispositions]) assert.ok(entry.reason.length && entry.claimIds.length);
  }
});

test("assertion, dependency and bibliography decisions cannot vanish or be promoted silently", () => {
  for (const mutate of [
    (d) => d.socialSystems.cards.pop(),
    (d) => d.socialSystems.cards[0].assertions.pop(),
    (d) => d.socialSystems.cards[0].parentDispositions.reverse(),
    (d) => d.socialSystems.cards[0].bibliography.pop(),
    (d) => { d.socialSystems.cards[0].bibliography[0].disposition = "primary-evidence"; },
    (d) => { d.socialSystems.independentScientificReviewComplete = true; },
    (d) => { d.socialSystems.checkIds = ["objecthood-negative"]; }
  ]) reject(mutate);
});

test("findings retain actual study designs and nulls have no synthetic negative-case witness", () => {
  assert.ok(data.socialSystems.studies.some((study) => study.studyType === "primary-observation"));
  assert.ok(data.socialSystems.studies.some((study) => study.studyType === "primary-experiment"));
  for (const claim of SOCIAL_SYSTEMS_RECORDS.claims) {
    assert.deepEqual(claim.checkIds, []);
    assert.notEqual(claim.status, "case-negative");
    if (!["publication-supported", "literature-synthesis"].includes(claim.status)) continue;
    for (const id of claim.contextIds) {
      const study = studies.get(id);
      assert.ok(claim.citations.some((citation) => citation.sourceId === study.sourceId && citation.role === "supports" && study.reviewedLocators.includes(citation.locator)));
    }
  }
  const ids = Object.values(data).flatMap((ledger) => ledger?.studies ?? []).map((study) => study.id);
  assert.equal(new Set(ids).size, ids.length, "Preparations are not copied into a second ledger");
});

test("documentary rules and unread book metadata do not become experimental evidence", () => {
  const documentary = SOCIAL_SYSTEMS_RECORDS.sources.filter((source) => source.kind === "primary-document");
  assert.ok(documentary.length);
  for (const source of documentary) {
    assert.ok(!data.socialSystems.studies.some((study) => study.sourceId === source.id));
    for (const claim of SOCIAL_SYSTEMS_RECORDS.claims.filter((claim) => claim.citations.some((citation) => citation.sourceId === source.id))) assert.equal(claim.status, "definition");
  }
  const metadata = new Set(SOCIAL_SYSTEMS_RECORDS.sources.filter((source) => /metadata-only/.test(source.review.extent)).map((source) => source.id));
  assert.ok(metadata.size);
  assert.ok(!data.socialSystems.studies.some((study) => metadata.has(study.sourceId)));
});

test("physical-support links require matched experimental endpoints; observed associations and models stay descriptive", () => {
  const functional = SOCIAL_SYSTEMS_RECORDS.relations.filter((relation) => relation.kind === "functional-support");
  assert.ok(functional.length);
  for (const relation of functional) for (const id of relation.contextIds) assert.equal(studies.get(id).studyType, "primary-experiment");
  const description = SOCIAL_SYSTEMS_RECORDS.relations.find((relation) => relation.role === "definition-dependency");
  reject((d) => {
    const relation = d.graph.relations.find((record) => record.id === description.id);
    relation.kind = "functional-support"; relation.role = "scoped-operating-support"; relation.contextIds = [d.socialSystems.studies[0].id];
  });
  reject((d) => d.graph.relations.push({ ...description, id: "social-systems:unreviewed-dependency" }));
});

test("new IDs cannot launder reviewed publications, findings, acquisitions or comparisons across ledgers", () => {
  const finding = SOCIAL_SYSTEMS_RECORDS.claims.find((claim) => claim.status === "publication-supported");
  const publication = sources.get(studies.get(finding.contextIds[0]).sourceId);
  for (const alias of [{ doi: publication.doi?.toUpperCase() }, { doi: null, url: `https://doi.org/${publication.doi}` }]) {
    if (!publication.doi) continue;
    reject((d) => d.graph.sources.push({ ...publication, ...alias, id: "unreviewed-social-publication" }), /publication alias/);
  }
  reject((d) => d.graph.claims.push({ ...finding, id: "renamed-social-finding", statement: "A bounded observation establishes a universal social law." }), /Unreviewed social-systems claim/);
  reject((d) => d.pilot.comparisons.push({ ...d.pilot.comparisons[1], id: "unreviewed-social-comparison", sourceIds: [finding.contextIds[0]] }), /Unreviewed social-systems comparison/);
  reject((d) => d.pilot.studies.push({ ...d.pilot.studies[0], id: "borrowed-social-acquisition",
    sourceId: d.socialSystems.studies[0].sourceId, doi: d.socialSystems.studies[0].doi }), /social-systems study/);
});

test("original catalogue provenance cannot escape social admission through retinal IDs or borrowed experiments", () => {
  const catalogue = { sourceId: "legacy-7", locator: "/0", role: "provenance",
    note: "The catalogue supplies this unreviewed social interpretation." };
  reject((d) => d.graph.claims.push({ id: "D-unreviewed-catalogue", kind: "author-definition",
    statement: "An additional social interpretation outside the reviewed inventory.", scope: "Source card 7.0",
    status: "definition", citations: [catalogue], checkIds: [], limitations: ["No independent validation."] }), /Unreviewed social-systems claim/);

  const addNode = (d, id, claimId, kind, status) => {
    const description = "Catalogue provenance remains social under a different namespace.";
    d.graph.entities.push({ id, name: "Unreviewed social interpretation", kind,
      description, claimIds: [claimId], status,
      sourceCoordinates: [{ sourceId: "legacy-7", locator: "/0" }], openObligations: ["No independent validation."], level: 7 });
    d.readiness.nodeRoles.splice(d.graph.entities.length - 1, 0, { nodeId: id,
      role: kind === "definition" ? "definition" : "scoped-phenomenon", denotes: description,
      instanceAdmission: "none", claimIds: [claimId] });
  };
  reject((d) => addNode(d, "ret:unreviewed-social-scope", d.graph.claims.find((claim) => claim.status === "definition").id,
    "definition", "definition"), /Unreviewed social-systems entity/);

  const borrowFinding = (d) => {
    const claim = structuredClone(d.graph.claims.find((record) => record.id === "P-baylor1979"));
    claim.id = "P-unreviewed-social-necessity";
    claim.statement = "An unrelated retinal experiment establishes a necessary social dependency.";
    claim.citations.push({ ...catalogue, role: "supports" });
    d.graph.claims.push(claim);
    return claim;
  };
  reject(borrowFinding, /Unreviewed social-systems claim/);
  reject((d) => {
    const claim = borrowFinding(d);
    const source = "ret:unreviewed-social-A", target = "ret:unreviewed-social-B";
    for (const id of [source, target]) addNode(d, id, claim.id, "scoped-process", "evidence-scoped");
    d.graph.relations.push({ id: "retinal:unreviewed-social-cause", source, target,
      kind: "functional-support", role: "scoped-operating-support", assertion: claim.statement,
      claimIds: [claim.id], contextIds: ["baylor1979"] });
  }, /Unreviewed social-systems (claim|entity)/);
});

test("social scope definitions and relabeled findings cannot justify construction rules", () => {
  const entity = SOCIAL_SYSTEMS_RECORDS.entities[0];
  reject((d) => { d.graph.rules[0].claimIds = [entity.claimIds[0]]; }, /do not establish construction rules/);
  reject((d) => { d.graph.rules[0].inputs[0].entityId = entity.id; }, /do not establish construction rules/);
  reject((d) => {
    const copy = { ...entity, id: "l0:relabeled-social-result", level: 0 };
    d.graph.entities.push(copy);
    d.readiness.nodeRoles.splice(d.graph.entities.length - 1, 0, { ...d.readiness.nodeRoles.find((role) => role.nodeId === entity.id), nodeId: copy.id });
    d.graph.rules[0].inputs[0].entityId = copy.id;
  });
});

test("reviewed citation and preparation boundaries cannot expand through metadata changes", () => {
  for (const mutate of [
    (d) => { d.socialSystems.studies[0].readExtent = "complete-independent-reproduction"; },
    (d) => { d.socialSystems.studies[0].studyType = "computational-analysis"; },
    (d) => { d.graph.sources.find((source) => source.id === "social-systems-review").kind = "research-publication"; },
    (d) => { d.graph.entities.find((entity) => entity.id.startsWith("soc:")).Weight = 0.5; }
  ]) reject(mutate);
});

test("all original source cards have explicit scope decisions without claiming complete scientific validation", async () => {
  const pending = JSON.parse(await readFile(new URL("../../references/canonical/pending-review.json", import.meta.url)));
  assert.deepEqual(pending.cards, []);
  assert.equal(data.socialSystems.independentScientificReviewComplete, false);
});

test("DOI mirrors, PLOS print views and Google Books pages retain publication identity without merging different resources", () => {
  const doiBook = sources.get("north1990-institutions");
  assert.equal(doiBook.doi, null, "The DOI is carried by the registered source URL in this case");
  const doiIdentity = publicationIdentity(doiBook.url);
  assert.match(doiIdentity, /^doi:10\./);
  reject((d) => d.graph.sources.push({ ...doiBook, id: "aliased-doi-book",
    doi: doiIdentity.slice(4), url: "https://example.test/north1990-mirror" }), /publication alias/);
  const paper = sources.get("mesoudi2016-migrant-cultural-profiles");
  const print = new URL(paper.url); print.searchParams.set("view", "print");
  assert.equal(publicationIdentity(print.href), publicationIdentity(`https://doi.org/${paper.doi}`));
  reject((d) => d.graph.sources.push({ ...paper, id: "aliased-migrant-paper", doi: null, url: print.href }), /publication alias/);
  const book = sources.get("tinbergen1951-instinct");
  const page = new URL(book.url); page.searchParams.set("pg", "PA10"); page.searchParams.set("jscmd", "SearchWithinVolume2");
  assert.equal(publicationIdentity(page.href), publicationIdentity(book.url));
  reject((d) => d.graph.sources.push({ ...book, id: "aliased-instinct-book", url: page.href }), /publication alias/);
  const distinct = new URL(book.url); distinct.searchParams.set("id", "another-volume");
  assert.notEqual(publicationIdentity(distinct.href), publicationIdentity(book.url));
  assert.notEqual(publicationIdentity("https://example.test/catalogue?id=first"), publicationIdentity("https://example.test/catalogue?id=second"));
});

test("the neural reuse exception accepts only exact descriptive links and does not change prior findings", () => {
  const relation = SOCIAL_SYSTEMS_RECORDS.relations.find((record) => record.source.startsWith("neur:"));
  assert.ok(relation);
  assert.equal(isReviewedSocialSystemsDescription(relation), true);
  assert.equal(isReviewedSocialSystemsDescription({ ...relation, id: "social-systems:renamed-neural-link" }), false);
  assert.equal(isReviewedSocialSystemsDescription({ ...relation, kind: "functional-support" }), false);
  reject((d) => { const changed = d.graph.relations.find((record) => record.id === relation.id); changed.kind = "functional-support"; changed.role = "scoped-operating-support"; changed.contextIds = ["weaver2004"]; });
});

test("ant cue units and fish choice endpoints retain their source conflicts rather than yielding universal thresholds", () => {
  assert.match(sources.get("greene2013-ant-cues").review.limit, /9 ng.*9 microgram/);
  assert.match(sources.get("couzin2011-consensus").review.limit, /108.*56/);
  assert.match(sources.get("couzin2011-consensus").review.limit, /First arrival.*not equal participation or truth/);
});

test("published corrections remain reachable from the affected language and cultural-profile claims", () => {
  for (const [code, notice] of [["7.12", "kirby2017-language-si-correction"], ["7.22", "mesoudi2018-migrant-table-correction"]]) {
    const card = data.socialSystems.cards.find((record) => record.code === code);
    assert.ok(card.sourceIds.includes(notice));
    assert.ok(card.claimIds.some((id) => claims.get(id).citations.some((citation) => citation.sourceId === notice && citation.role === "limits")));
  }
  assert.match(sources.get("kirby2017-language-si-correction").review.limit, /replacement table.*not inspected/);
  assert.match(sources.get("mesoudi2018-migrant-table-correction").review.limit, /swaps.*first-generation.*non-migrant/);
  assert.equal(sources.get("smith1776-wealth").year, 1776);
  assert.equal(sources.get("shapin1994-history-truth").year, 1994);
});

test("ordered social-exclusion imaging is not a selective neural intervention or evidence of measured belief", () => {
  const source = sources.get("eisenberger2003-social-exclusion");
  assert.match(source.review.limit, /fixed-order/);
  assert.match(source.review.limit, /No physical-pain condition/);
  const ids = new Set(data.socialSystems.studies.filter((study) => study.sourceId === source.id).map((study) => study.id));
  assert.ok(ids.size);
  assert.ok(!SOCIAL_SYSTEMS_RECORDS.relations.some((relation) => relation.kind === "functional-support" && relation.contextIds.some((id) => ids.has(id))));
  assert.match(sources.get("vosoughi2018-news-diffusion").review.limit, /Sharing.*does not itself measure belief/);
});
