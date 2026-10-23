import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../../apps/model-studio/index.html", import.meta.url), "utf8");
const documentUrl = new URL("https://example.test/Onto2D/apps/model-studio/index.html");
const importMap = JSON.parse(html.match(/<script\s+type="importmap">([\s\S]*?)<\/script>/u)[1]);
const revision = new URL(html.match(/<script\s+type="module"\s+src="([^"]+)"/u)[1], documentUrl)
  .searchParams.get("v");
const urlLike = (specifier) => /^(?:\.{0,2}\/|[a-z][a-z0-9+.-]*:)/iu.test(specifier);
const imports = new Map(Object.entries(importMap.imports).map(([key, value]) => [
  urlLike(key) ? new URL(key, documentUrl).href : key,
  new URL(value, documentUrl).href
]));

// Exact URL-like keys are normalized against the document; relative imports
// are normalized against their importing module before that lookup.
function effectiveUrl(specifier, referrer) {
  const normalized = urlLike(specifier) ? new URL(specifier, referrer).href : specifier;
  return imports.get(normalized) ?? normalized;
}

test("bare and relative Model Pack imports share the current cache revision", async () => {
  const helpers = ["index.js", "browser.js", "transport-layout.js", "json-value-table.js", "model-pack-error.js"];
  const expected = new Map(helpers.map((name) => {
    const unversioned = new URL(`../../packages/model-pack/src/${name}`, documentUrl);
    const versioned = new URL(unversioned);
    versioned.searchParams.set("v", revision);
    assert.equal(imports.get(unversioned.href), versioned.href, `${name} must bypass a cached unversioned helper`);
    return [unversioned.href, versioned.href];
  }));
  assert.equal(effectiveUrl("@onto2d/model-pack", documentUrl),
    expected.get(new URL("../../packages/model-pack/src/index.js", documentUrl).href));

  let checked = 0;
  for (const filename of [...helpers, "cache.js", "worker.js", "registry.js"]) {
    const source = await readFile(new URL(`../../packages/model-pack/src/${filename}`, import.meta.url), "utf8");
    const referrer = new URL(`../../packages/model-pack/src/${filename}?v=${revision}`, documentUrl);
    for (const match of source.matchAll(/(?:\bfrom\s*|\bimport\s*)["']([^"']+)["']/gu)) {
      if (!urlLike(match[1])) continue;
      const raw = new URL(match[1], referrer).href;
      if (!expected.has(raw)) continue;
      assert.equal(effectiveUrl(match[1], referrer), expected.get(raw),
        `${filename} import ${match[1]} must reach the versioned helper`);
      checked += 1;
    }
  }
  assert.ok(checked >= helpers.length, "Check the actual transitive helper imports, including cache/worker paths");
});

test("the app and lazy browse loader resolve the same current record evidence module", async () => {
  const [app, browse] = await Promise.all([
    readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8"),
    readFile(new URL("../../apps/model-studio/browse-data.js", import.meta.url), "utf8")
  ]);
  const specifier = (source, filename) => {
    const match = source.match(new RegExp(`\\bfrom\\s*["'](\\./${filename}\\.js[^"']*)["']`, "u"));
    assert.ok(match, `Missing actual ${filename} import`);
    return match[1];
  };
  const appUrl = new URL(`./model-studio.js?v=${revision}`, documentUrl);
  const browseUrl = effectiveUrl(specifier(app, "browse-data"), appUrl);
  const expected = new URL(`./record-evidence.js?v=${revision}`, documentUrl).href;
  assert.equal(effectiveUrl(specifier(app, "record-evidence"), appUrl), expected);
  assert.equal(effectiveUrl(specifier(browse, "record-evidence"), browseUrl), expected,
    "Lazy inspection must not retain a previous deployment's evidence resolver");
});
