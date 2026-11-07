import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { SOCIAL_SYSTEMS_RECORDS, SOCIAL_SYSTEMS_SCOPES, isReviewedSocialSystemsDescription } from "../../models/causal-emergence/canonical/level-seven.mjs";
import { socialSystemsScopes } from "../../models/causal-emergence/canonical/social-systems.mjs";
import { publicationIdentity } from "../../models/causal-emergence/canonical/publication-identity.mjs";

const data = await loadCanonicalSource();
const claims = new Map(data.graph.claims.map((claim) => [claim.id, claim]));
const sources = new Map(data.graph.sources.map((source) => [source.id, source]));
const studies = new Map(Object.values(data).flatMap((ledger) => ledger?.studies ?? []).map((study) => [study.id, study]));
const reject = (mutate, pattern) => {
  const changed = structuredClone(data);
  mutate(changed);
  assert.throws(() => validateCanonicalSource(changed), pattern);
};

test("all 25 Level-7 topic scopes name their scope node, claims and open questions", () => {
  assert.equal(SOCIAL_SYSTEMS_SCOPES.length, 25);
  assert.deepEqual(data.socialSystems.scopes, socialSystemsScopes(data.graph));
  const entities = new Map(data.graph.entities.map((entity) => [entity.id, entity]));
  for (const scope of data.socialSystems.scopes) {
    assert.equal(scope.nodeIds[0], scope.id);
    assert.equal(entities.get(scope.id).name, `${scope.name}: reviewed scope`);
    assert.ok(scope.scope.length && scope.claimIds.every((id) => claims.has(id)));
    assert.ok(scope.sourceIds.every((id) => sources.has(id)));
    assert.ok(Array.isArray(scope.unresolved));
  }
});

test("topic scopes and review status cannot vanish or be promoted silently", () => {
  for (const mutate of [
    (d) => d.socialSystems.scopes.pop(),
    (d) => d.socialSystems.scopes[0].claimIds.pop(),
    (d) => { d.socialSystems.scopes[0].scope = "A universal social construction law."; },
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

test("documentary rules do not become experimental evidence", () => {
  const documentary = SOCIAL_SYSTEMS_RECORDS.sources.filter((source) => source.kind === "primary-document");
  assert.ok(documentary.length);
  for (const source of documentary) {
    assert.ok(!data.socialSystems.studies.some((study) => study.sourceId === source.id));
    for (const claim of SOCIAL_SYSTEMS_RECORDS.claims.filter((claim) => claim.citations.some((citation) => citation.sourceId === source.id))) assert.equal(claim.status, "definition");
  }
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

test("internal review provenance cannot escape social admission through retinal IDs or borrowed experiments", () => {
  const review = { sourceId: "social-systems-review", locator: "studies", role: "provenance",
    note: "The internal review supplies this unreviewed social interpretation." };
  reject((d) => d.graph.claims.push({ id: "D-unreviewed-review-note", kind: "author-definition",
    statement: "An additional social interpretation outside the reviewed inventory.", scope: "Unreviewed topic",
    status: "definition", citations: [review], checkIds: [], limitations: ["No independent validation."] }), /Unreviewed social-systems claim/);

  const addNode = (d, id, claimId, kind, status) => {
    const description = "Review provenance remains social under a different namespace.";
    d.graph.entities.push({ id, name: "Unreviewed social interpretation", kind,
      description, claimIds: [claimId], status,
      sourceCoordinates: [{ sourceId: "social-systems-review", locator: "studies" }], openObligations: ["No independent validation."], level: 7 });
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
    claim.citations.push({ ...review, role: "supports" });
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
    (d) => { d.graph.entities.find((entity) => entity.id.startsWith("soc:")).causalWeight = 0.5; }
  ]) reject(mutate);
});


test("DOI mirrors, PLOS print views and Google Books pages retain publication identity without merging different resources", () => {
  const doiPaper = sources.get("henrich2001-prestige");
  const doiIdentity = publicationIdentity(`https://doi.org/${doiPaper.doi}`);
  assert.match(doiIdentity, /^doi:10\./);
  reject((d) => d.graph.sources.push({ ...doiPaper, id: "aliased-doi-paper", url: "https://example.test/henrich2001-mirror" }), /publication alias/);
  reject((d) => d.graph.sources.push({ ...doiPaper, id: "url-only-doi-paper", doi: null, url: `https://doi.org/${doiPaper.doi}` }), /publication alias/);
  const paper = sources.get("mesoudi2016-migrant-cultural-profiles");
  const print = new URL(paper.url); print.searchParams.set("view", "print");
  assert.equal(publicationIdentity(print.href), publicationIdentity(`https://doi.org/${paper.doi}`));
  reject((d) => d.graph.sources.push({ ...paper, id: "aliased-migrant-paper", doi: null, url: print.href }), /publication alias/);
  const book = "https://books.google.com/books/about/Example.html?id=hEGTugAACAAJ";
  const page = new URL(book); page.searchParams.set("pg", "PA10"); page.searchParams.set("jscmd", "SearchWithinVolume2");
  assert.equal(publicationIdentity(page.href), publicationIdentity(book));
  const distinct = new URL(book); distinct.searchParams.set("id", "another-volume");
  assert.notEqual(publicationIdentity(distinct.href), publicationIdentity(book));
  assert.notEqual(publicationIdentity("https://example.test/records?id=first"), publicationIdentity("https://example.test/records?id=second"));
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
  for (const [id, notice] of [["soc:cultural-linguistic-change-scope", "kirby2017-language-si-correction"], ["soc:transculturation-scope", "mesoudi2018-migrant-table-correction"]]) {
    const scope = data.socialSystems.scopes.find((record) => record.id === id);
    assert.ok(scope.sourceIds.includes(notice));
    assert.ok(scope.claimIds.some((id) => claims.get(id).citations.some((citation) => citation.sourceId === notice && citation.role === "limits")));
  }
  assert.match(sources.get("kirby2017-language-si-correction").review.limit, /replacement table.*not inspected/);
  assert.match(sources.get("mesoudi2018-migrant-table-correction").review.limit, /swaps.*first-generation.*non-migrant/);
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
