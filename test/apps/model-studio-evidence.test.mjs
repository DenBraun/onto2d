import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { citationLinks, resolveClaimCitations } from "../../apps/model-studio/evidence-links.js";
import { recordEvidenceContext, resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";

const base = "https://example.org/Onto2D/";

test("evidence links preserve publication locators and a repository deployment prefix", () => {
  const links = citationLinks({ source: { url: "https://doi.org/10.1234/example", doi: "10.1234/example", path: "references/Архив.zip" } }, base);
  assert.equal(links.length, 2);
  assert.equal(links[0].label, "DOI 10.1234/example");
  assert.equal(links[1].href, new URL("references/Архив.zip", base).href);
});

test("evidence links distinguish DOI resolution from a reviewed manuscript", () => {
  const doi = "10.1016/j.neuron.2015.09.019";
  const url = "https://pallier.org/papers/DehaeneMeynielWacongneWangPallier2015.pdf";
  const links = citationLinks({ source: { doi, url } }, base);
  assert.deepEqual(links, [
    { label: `DOI ${doi}`, href: `https://doi.org/${doi}` },
    { label: "Publication / source", href: url }
  ]);
  assert.deepEqual(citationLinks({ source: { doi } }, base), [links[0]]);
  assert.deepEqual(citationLinks({ source: { doi: "unresolved", url } }, base), [links[1]]);
});

test("imported evidence cannot create executable, credentialed or escaping links", () => {
  for (const url of ["javascript:alert(1)", "data:text/html,x", "file:///tmp/x", "https://user:secret@example.org/", "//example.org/"]) {
    assert.deepEqual(citationLinks({ source: { url } }, base), []);
  }
  for (const path of ["references/../../secret", "references/%2e%2e/secret", "references//example", "references/./a", "/etc/passwd", "https://evil.test/"]) {
    assert.deepEqual(citationLinks({ source: { path } }, base), []);
  }
  assert.deepEqual(citationLinks({}, base), []);
});

test("citation resolution stays within one claim and preserves fully expanded historical fields", () => {
  const source = { id: "source", title: "Original publication", year: 2020,
    doi: "10.1234/original", review: { limit: "A scoped result." } };
  const inline = { ...source, title: "Explicit historical metadata" };
  const claim = Object.freeze({ citations: Object.freeze([
    Object.freeze({ sourceId: "source", locator: "Methods", source }),
    Object.freeze({ sourceId: "source", locator: "Figure 1", role: "supports", note: "Same source, different passage." }),
    Object.freeze({ sourceId: "source", locator: "Historical passage", source: inline }),
    Object.freeze({ sourceId: "source", locator: "Explicit null", source: null })
  ]) });
  const before = structuredClone(claim);
  const citations = resolveClaimCitations(claim);
  assert.equal(citations[0], claim.citations[0]);
  assert.deepEqual(citations[1], { ...claim.citations[1], source });
  assert.equal(citations[2], claim.citations[2], "Explicit historical metadata wins over fallback");
  assert.equal(citations[3], claim.citations[3], "Explicit optional source fields are not rewritten");
  assert.deepEqual(claim, before, "Verified frozen records are not modified");
  assert.deepEqual(resolveClaimCitations({ citations: [{ sourceId: "source", locator: "Unresolved in this claim" }] }),
    [{ sourceId: "source", locator: "Unresolved in this claim" }], "No source is borrowed from a previous claim");
  assert.deepEqual(resolveClaimCitations({}), []);
});

test("the actual inspector renders every compact citation with the same title, year, passage and links", async () => {
  const appUrl = new URL("../../apps/model-studio/model-studio.js", import.meta.url);
  const sourceText = await readFile(appUrl, "utf8");
  const start = sourceText.indexOf("function renderRationale(record) {");
  const end = sourceText.indexOf("\nfunction updateControls()", start);
  assert.ok(start >= 0 && end > start);
  const render = sourceText.slice(start, end).replaceAll("import.meta.url", JSON.stringify(appUrl.href));
  const publication = { id: "publication", title: "Measured response", year: 2026,
    doi: "10.1234/response", url: "https://example.org/response.pdf", path: "references/response.pdf",
    review: { extent: "full-article", locators: ["Methods", "Figure 1"], limit: "Shared calibration." } };
  const citations = [
    { sourceId: publication.id, locator: "Methods", role: "method", note: "The preparation.", source: publication },
    { sourceId: publication.id, locator: "Figure 1", role: "supports", note: "The measured endpoint." },
    { sourceId: publication.id, locator: "Discussion", role: "limits", note: "A dependent inference." }
  ];
  const compactRecord = { rationale: [{ id: "claim", status: "publication-supported", statement: "An observed response",
    scope: "One specified preparation", contexts: [], experimentalContexts: [], limitations: ["No universal claim."], citations }] };
  const before = structuredClone(compactRecord);
  const expandedRecord = structuredClone(compactRecord);
  expandedRecord.rationale[0].citations = citations.map((citation) => ({ ...citation, source: publication }));
  function rendered(record) {
    const element = (tag, className = "", textContent = "") => ({ tag, className, textContent, children: [],
      append(...children) { this.children.push(...children); },
      replaceChildren(...children) { this.children = children; } });
    const container = element("div");
    vm.runInNewContext(`${render}\nrenderRationale(record);`, {
      record, URL, citationLinks, resolveClaimCitations,
      createElement: element, elements: { "selected-rationale": container },
      document: { createTextNode: (textContent) => ({ textContent }) }
    });
    return JSON.parse(JSON.stringify(container));
  }
  const compactView = rendered(compactRecord);
  assert.deepEqual(compactView, rendered(expandedRecord));
  const dictionaryRecord = structuredClone(compactRecord);
  dictionaryRecord.rationale[0].citations = citations.map(({ source, ...citation }) => citation);
  const rawDictionaryRecord = structuredClone(dictionaryRecord);
  const dictionaries = { recordEvidence: { format: "dictionary-references-v1" }, sources: [publication] };
  const resolved = resolveRecordEvidence(dictionaryRecord, recordEvidenceContext([dictionaryRecord], dictionaries));
  assert.deepEqual(rendered({ ...dictionaryRecord, rationale: resolved }), compactView,
    "Dictionary-backed sources retain the same visible source review boundaries as inline evidence");
  assert.deepEqual(dictionaryRecord, rawDictionaryRecord);
  const anchors = [];
  const reviewLines = [];
  const collect = (element) => {
    if (element.tag === "a") anchors.push(element);
    if (element.textContent.startsWith("Source review:")) reviewLines.push(element.textContent);
    for (const child of element.children ?? []) collect(child);
  };
  collect(compactView);
  assert.deepEqual(reviewLines, ["Source review: full-article. Shared calibration."],
    "Reading extent and its limit remain visible once per source without repeating them for each passage");
  assert.equal(anchors.length, citations.length * 3, "Every passage retains DOI, reviewed source and repository links");
  for (let index = 0; index < citations.length; index += 1) {
    assert.deepEqual(anchors.slice(index * 3, index * 3 + 3).map((anchor) => anchor.href),
      citationLinks({ source: publication }, new URL("../../", appUrl)).map((link) => link.href));
  }
  assert.deepEqual(compactRecord, before, "Rendering leaves the raw release representation intact");
});
