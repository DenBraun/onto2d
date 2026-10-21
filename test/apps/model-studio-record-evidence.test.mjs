import assert from "node:assert/strict";
import test from "node:test";
import { recordEvidenceContext, resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";

test("dictionary references retain complete claim-local citations and distinct study preparations", () => {
  const source = { id: "paper", title: "A scoped measurement", review: { extent: "selected-main", limit: "No raw replay" } };
  const first = { id: "assay-a", sourceId: "paper", preparation: "First sample", limitations: ["No transfer"] };
  const second = { id: "assay-b", sourceId: "paper", preparation: "Different sample", limitations: ["Separate preparation"] };
  const claim = { id: "claim", contextIds: ["assay-b"], limitations: ["No unique mechanism"],
    citations: [{ sourceId: "paper", locator: "Methods", role: "method" },
      { sourceId: "paper", locator: "Figure 2", role: "supports" }] };
  const records = [{ id: "a", rationale: [claim] }, { id: "b", rationale: [claim] }];
  const dictionaries = { recordEvidence: { format: "dictionary-references-v1" }, sources: [source],
    firstLedger: { studies: [first] }, anotherLedger: { studies: [second] } };
  const before = structuredClone({ records, dictionaries });
  const context = recordEvidenceContext(records, dictionaries);
  assert.deepEqual(context.sources, [source], "Shared chunk metadata is retained once");
  assert.deepEqual(context.studies, [second], "The first assay cannot fill a different preparation's reference");
  assert.deepEqual(resolveRecordEvidence(records[0], context), [{ ...claim, contexts: [second],
    experimentalContexts: [], citations: claim.citations.map((citation) => ({ ...citation, source })) }]);
  assert.deepEqual({ records, dictionaries }, before, "Raw verified nodes remain exact and unchanged");
  assert.deepEqual(resolveRecordEvidence(records[1], context), resolveRecordEvidence(records[0], context));
});

test("unresolved references fail before a partial scientific inspector can be displayed", () => {
  const record = { rationale: [{ id: "claim", contextIds: ["missing"], citations: [] }] };
  const dictionaries = { recordEvidence: { format: "dictionary-references-v1" }, sources: [] };
  assert.throws(() => recordEvidenceContext([record], dictionaries), /Missing record evidence study/);
  assert.throws(() => resolveRecordEvidence(record, { format: "dictionary-references-v1", sources: [],
    studies: [], experimentalContexts: [] }), /Missing record evidence study/);
});

test("historical inline evidence and explicit source fields are preserved", () => {
  const record = { rationale: [{ citations: [{ sourceId: "paper", source: null }], contexts: [{ id: "old" }] }] };
  assert.equal(recordEvidenceContext([record], {}), null);
  assert.equal(resolveRecordEvidence(record), record.rationale);
  const result = resolveRecordEvidence(record, { format: "dictionary-references-v1", sources: [],
    studies: [], experimentalContexts: [] });
  assert.equal(result[0].citations[0].source, null);
  assert.deepEqual(result[0].contexts, [{ id: "old" }]);
});


test("unknown dictionary evidence encodings cannot silently fall back to incomplete raw claims", () => {
  assert.throws(() => recordEvidenceContext([], { recordEvidence: { format: "future-format" } }),
    /Unknown record evidence representation/);
  assert.throws(() => recordEvidenceContext([], { recordEvidence: null }),
    /Unknown record evidence representation/);
  for (const context of [false, 0, ""]) {
    assert.throws(() => resolveRecordEvidence({ rationale: [] }, context),
      /Unknown record evidence representation/);
  }
});


test("experimental context resolution requires its actual review and preserves a legitimately absent measurement", () => {
  const record = { rationale: [{ experimentalContextIds: ["context"], citations: [] }] };
  const dictionaries = { recordEvidence: { format: "dictionary-references-v1" }, sources: [],
    routing: { contexts: [{ id: "context", preparation: "Matched stimulus" }], reviews: [] } };
  assert.throws(() => recordEvidenceContext([record], dictionaries), /Missing record evidence experimental review/);
  const review = { contextId: "context", candidates: [{ id: "route", status: "not-resolved" }] };
  dictionaries.routing.reviews.push(review);
  const evidence = resolveRecordEvidence(record, recordEvidenceContext([record], dictionaries));
  assert.deepEqual(evidence[0].experimentalContexts, [{ ...dictionaries.routing.contexts[0], review, measurement: null, routes: [] }]);
});
