import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";
import { verifyDictionaryWitnesses } from "../../models/causal-emergence/canonical/dictionary-witnesses.mjs";

const data = await loadCanonicalSource();

test("dictionary review rejects lost evidence, misbound methods, numeric defaults and speculative promotion", () => {
  const record = (d, group, id) => d.dictionaryReview.records.find((r) => r.id === `dict:${group}:${id}`);
  for (const mutate of [
    (d) => { d.dictionaryReview.records.pop(); },
    (d) => { record(d, "InteractionModes", 2).group = "CarrierTypes"; },
    (d) => { record(d, "InteractionModes", 2).legacyId = 2; },
    (d) => { record(d, "ComplexityLevels", 8).disposition = "display-group"; },
    (d) => { record(d, "Ontologicals", 0).status = "empirically-validated"; },
    (d) => { record(d, "InteractionModes", 2).checkIds = []; },
    (d) => { record(d, "InteractionModes", 2).citations = record(d, "InteractionModes", 2).citations.filter((c) => c.role !== "method"); },
    (d) => { record(d, "InteractionModes", 1).citations.find((c) => c.role === "method").locator = "unread theorem"; },
    (d) => { record(d, "DependencyTypes", 3).citations.find((c) => c.role === "method").sourceId = "legacy-dictionaries"; },
    (d) => { d.dictionaryReview.policySha256 = "0".repeat(64); },
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed));
  }
});
