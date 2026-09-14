import assert from "node:assert/strict";
import test from "node:test";
import { citationLinks } from "../../apps/model-studio/evidence-links.js";

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
