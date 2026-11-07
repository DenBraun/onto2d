import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateCauseEvidence } from "../../models/causal-emergence/canonical/cause-evidence.mjs";

const data = await loadCanonicalSource();
const LOCATOR = "Results, Figure 2 and its legend";
// Any cause that is still an author hypothesis serves as the fixture's target.
const CAUSE = data.graph.causes.find((cause) => cause.status === "author-hypothesis").id;
const [PARENT, CHILD] = CAUSE.slice("cause:".length).split(">");
const ROLE = data.graph.causes.find((cause) => cause.id === CAUSE).ontologicalRole;
const FIXTURE = `CE-${PARENT}-${CHILD}-fixture`;

// A complete, well-formed piece of cause evidence on a copy of the data: one primary study, its source and one claim.
function withEvidence(change = () => {}) {
  const d = structuredClone(data);
  d.graph.sources.push({ id: "ce-fixture2000-study", kind: "research-publication", title: "Fixture study", authors: ["A Author"], year: 2000,
    doi: "10.9999/fixture.2000", url: "https://doi.org/10.9999/fixture.2000", path: null, sha256: null,
    review: { extent: "results-figure-2", locators: [LOCATOR], limit: "Only the results around Figure 2 were read." } });
  d.causeEvidence.studies.push({ id: "ce-fixture2000-study", sourceId: "ce-fixture2000-study", studyType: "primary-experiment", doi: "10.9999/fixture.2000",
    journal: "Fixture Journal", volume: "1", issue: "", pages: "1-10", system: "Fixture system", preparation: "Parent present or removed.",
    observable: "Presence of the child.", finding: "The child is absent without the parent.", limitations: ["One fixture preparation."],
    readExtent: "results-figure-2", reviewedLocators: [LOCATOR], metadataCheckedAt: "2026-11-06", metadataUrl: "https://doi.org/10.9999/fixture.2000",
    correctionCheck: "Fixture: no correction." });
  d.graph.claims.push({ id: FIXTURE, kind: "review-finding", statement: "Without the parent, the child does not form.",
    scope: `Cause ${PARENT} > ${CHILD} (${ROLE}): fixture preparation.`, status: "publication-supported",
    citations: [{ sourceId: "ce-fixture2000-study", locator: LOCATOR, role: "supports", note: "Fixture." }], checkIds: [], limitations: ["Fixture only."],
    contextIds: ["ce-fixture2000-study"] });
  const cause = d.graph.causes.find((record) => record.id === CAUSE);
  cause.claimIds = [FIXTURE]; cause.status = "supported"; cause.openObligations = [];
  change(d, cause);
  return d;
}

test("a supported cause rests on a cause-evidence claim with a reviewed primary study", () => {
  assert.doesNotThrow(() => validateCanonicalSource(withEvidence()));
  assert.equal(data.causeEvidence.id, "cause-evidence");
  for (const cause of data.graph.causes) if (cause.status === "author-hypothesis") assert.deepEqual(cause.claimIds, [], cause.id);
});

test("cause evidence cannot be attached loosely, inflated or detached from its study", () => {
  for (const [change, pattern] of [
    [(d, cause) => { cause.status = "author-hypothesis"; cause.openObligations = ["x"]; }, /author hypothesis cites no evidence/],
    [(d, cause) => { cause.claimIds = []; }, /lacks published evidence|cites its evidence/],
    [(d) => { d.graph.claims.at(-1).contextIds = []; }, /study context|names its study contexts|fewer than 1 items/],
    [(d) => { d.graph.claims.at(-1).citations[0].locator = "Unread section"; }, /reviewed passage|exceeds the reading|Unreviewed or missing study locator/],
    [(d) => { d.graph.claims.at(-1).status = "definition"; }, /published evidence|published or model evidence/],
    [(d) => { d.graph.claims.at(-1).scope = "Fixture preparation."; }, /names its cause and role/],
    [(d, cause) => { cause.evidence.contextIds = ["ce-fixture2000-other"]; }, /only the study contexts of its evidence/],
    [(d, cause) => {
      const near = new Set(d.graph.arisings.filter((record) => [cause.parent, cause.child].includes(record.id)).flatMap((record) => record.memberIds));
      cause.evidence.relationIds = [d.graph.relations.find((relation) => !near.has(relation.source) && !near.has(relation.target)).id];
    }, /joins the parent and child subgraphs/],
    [(d) => { d.causeEvidence.studies.at(-1).studyType = "computational-analysis"; }, /primary studies|primary evidence/],
    [(d) => { const other = d.graph.causes.find((x) => x.id !== CAUSE && x.status === "author-hypothesis").id.slice("cause:".length).split(">");
      const id = `CE-${other[0]}-${other[1]}-fixture`; d.graph.claims.at(-1).id = id; d.graph.causes.find((x) => x.id === CAUSE).claimIds = [id]; }, /its own cause/],
    [(d) => { d.graph.claims.at(-1).status = "literature-synthesis"; }, /combines several study contexts/],
    [(d) => { d.causeEvidence.studies.push({ ...d.causeEvidence.studies.at(-1), id: "ce-fixture2000-unused" }); }, /Unused cause evidence study/]
  ]) assert.throws(() => validateCanonicalSource(withEvidence(change)), pattern);
});

// The same fixture as a specified method: no study context, a method citation and a model-supported cause.
function withModel(change = () => {}) {
  return withEvidence((d, cause) => {
    const claim = d.graph.claims.at(-1);
    Object.assign(claim, { kind: "method", status: "method-contract", citations: [{ ...claim.citations[0], role: "method" }] });
    delete claim.contextIds;
    d.causeEvidence.studies.pop();
    cause.status = "model-supported";
    change(d, cause);
  });
}

test("a model-supported cause rests on a cause-evidence model claim, not on a publication alone", () => {
  assert.doesNotThrow(() => validateCanonicalSource(withModel()));
  for (const [change, pattern] of [
    [(d) => { d.graph.claims.at(-1).kind = "review-finding"; }, /kind follows its status/],
    [(d, cause) => { cause.claimIds = []; }, /lacks a model|cites its evidence/],
    [(d) => { Object.assign(d.graph.claims.at(-1), { kind: "review-finding", status: "definition" }); }, /lacks a model|published or model evidence/]
  ]) assert.throws(() => validateCanonicalSource(withModel(change)), pattern);
  assert.throws(() => validateCanonicalSource(withEvidence((d, cause) => { cause.status = "model-supported"; })), /lacks a model/);
});

test("no technical record, interaction case or arising cites cause evidence", () => {
  // Domain modules lock their own claim lists, so the ownership rule is exercised on its own.
  const direct = (d) => validateCauseEvidence(d, { sources: new Map(d.graph.sources.map((source) => [source.id, source])),
    claims: new Map(d.graph.claims.map((claim) => [claim.id, claim])) });
  assert.doesNotThrow(() => direct(withEvidence()));
  for (const key of ["entities", "rules", "relations", "interactionCases", "arisings"]) {
    assert.throws(() => direct(withEvidence((d) => { d.graph[key][0].claimIds = [...d.graph[key][0].claimIds, FIXTURE]; })), /belongs to causes alone/, key);
  }
});
