import assert from "node:assert/strict";
import { verifyDictionaryWitnesses } from "./dictionary-witnesses.mjs";

const requiredChecks = new Map([
  ["InteractionModes:0", ["cubic-sign"]],
  ["InteractionModes:1", ["inactive-inequality"]],
  ["InteractionModes:2", ["feedback-sign", "time-domain", "unit-circle-boundary"]],
  ["CausalDirections:2", ["horizontal-asymmetry"]],
  ["CausalDirections:3", ["stable-cross-level-loop"]],
  ["CarrierGroups:3", ["cycle-count-unit"]],
  ["CarrierGroups:4", ["token-individuation"]],
  ["CarrierTypes:10", ["cycle-count-unit"]],
  ["CarrierTypes:11", ["token-individuation"]]
]);

export function validateDictionaryReview({ dictionaryReview: review, graph }) {
  const sources = new Map(graph.sources.map((s) => [s.id, s]));
  const checks = new Set(verifyDictionaryWitnesses().cases.map((c) => c.id));
  assert.equal(new Set(review.records.map((r) => r.id)).size, review.records.length, "Duplicate vocabulary record");
  for (const record of review.records) {
    const identity = record.id.match(/^dict:([^:]+):(0|[1-9]\d*)$/);
    assert.ok(identity && identity[1] === record.group, "Vocabulary ID does not match its group");
    const ordinal = Number(identity[2]);
    const disposition = record.group === "ComplexityLevels"
      ? ordinal >= 8 ? "dictionary-only-proposal" : "display-group"
      : record.group === "Ontologicals" ? "subject-tag" : "scoped-definition";
    assert.equal(record.disposition, disposition, "Vocabulary role changed");
    const expectedChecks = record.group === "DependencyTypes" ? ["normalized-weight-not-necessity"] : requiredChecks.get(record.id.slice(5)) ?? [];
    assert.deepEqual(record.checkIds, expectedChecks, "Mathematical witness binding changed");
    const method = ["CarrierGroups", "CarrierTypes"].includes(record.group) ? "vim2012"
      : record.id === "dict:DependencyTypes:3" ? "iupac-catalyst"
      : record.id === "dict:InteractionModes:1" ? "boyd2004"
      : record.id === "dict:InteractionModes:2" ? "astrom2008"
      : record.group === "CausalDirections" && [0, 1, 4].includes(ordinal) ? "rubenstein2017" : null;
    if (method) assert.ok(record.citations.some((c) => c.sourceId === method && c.role === "method"), "Definition lacks its method source");
    for (const id of record.checkIds) assert.ok(checks.has(id), "Unknown dictionary witness");
    for (const citation of record.citations) {
      const source = sources.get(citation.sourceId);
      assert.ok(source, "Unknown vocabulary source");
      if (citation.role === "method") {
        assert.equal(source.kind, "research-publication");
        assert.ok(source.review.locators.includes(citation.locator), "Unreviewed method locator");
      }
      if (citation.role === "counterexample") assert.equal(citation.sourceId, "dictionary-witnesses");
    }
    assert.ok(!graph.entities.some((e) => e.id === record.id), "Vocabulary became a physical entity");
  }
}

export function compileVocabulary(review, sources) {
  const sourceById = new Map(sources.map((s) => [s.id, s]));
  return review.records.map((r) => ({
    id: r.id, group: r.group, name: r.name,
    definition: r.definition, finding: r.finding, disposition: r.disposition, status: r.status,
    sourcePointer: r.pointer, checkIds: r.checkIds,
    citations: r.citations.map((c) => ({ ...c, source: sourceById.get(c.sourceId) }))
  }));
}
