import assert from "node:assert/strict";
import test from "node:test";

import {
  inspectModelStudioRevisionGraph,
  synchronizeModelStudioRevision
} from "./public-module-revisions.mjs";

function indexFixture(entryRevision, dependencyRevision) {
  return `<!doctype html>
<link rel="stylesheet" href="style.css?v=20260101.1">
<script src="reset.js" defer></script>
<script type="importmap">
  {"imports":{"@onto2d/example":"../../packages/example.js?v=${dependencyRevision}"}}
</script>
<script type="module" src="./model-studio.js?v=${entryRevision}"></script>`;
}

function appFixture(revision) {
  return `import { example } from "../../packages/example.js?v=${revision}";
const workerUrl = new URL("../../assets/worker.js?v=${revision}", import.meta.url);
const lazyModule = import("./lazy.js?v=${revision}");
consume(example, workerUrl, lazyModule);`;
}

test("Model Studio revision inspection accepts one coherent module graph", () => {
  const inspection = inspectModelStudioRevisionGraph(
    indexFixture("20260825.1", "20260825.1"),
    appFixture("20260825.1")
  );
  assert.equal(inspection.revision, "20260825.1");
  assert.equal(inspection.references.length, 4);
  assert.deepEqual(inspection.errors, []);
});

test("Model Studio revision inspection reports every stale dependency", () => {
  const inspection = inspectModelStudioRevisionGraph(
    indexFixture("20260825.1", "20260819.1"),
    appFixture("20260819.1")
  );
  assert.equal(inspection.errors.length, 4);
  assert.ok(inspection.errors.every((message) => message.includes("expected 20260825.1")));
});

test("Model Studio revision synchronization updates modules but leaves unrelated assets alone", () => {
  const updated = synchronizeModelStudioRevision(
    indexFixture("20260819.1", "20260818.2"),
    appFixture("20260817.3"),
    "20260825.1"
  );
  assert.deepEqual(
    inspectModelStudioRevisionGraph(updated.indexSource, updated.appSource).errors,
    []
  );
  assert.match(updated.indexSource, /style\.css\?v=20260101\.1/u);
  assert.match(updated.indexSource, /reset\.js" defer/u);
  assert.doesNotMatch(updated.indexSource, /2026081[789]/u);
  assert.doesNotMatch(updated.appSource, /20260817\.3/u);
});

test("Model Studio revision synchronization rejects ambiguous revision labels", () => {
  assert.throws(
    () => synchronizeModelStudioRevision(
      indexFixture("20260819.1", "20260819.1"),
      appFixture("20260819.1"),
      "latest"
    ),
    /must match YYYYMMDD\.N/u
  );
});

test("Model Studio revision inspection and synchronization cover nested browse imports", () => {
  const indexSource = indexFixture("20261022.1", "20261022.1");
  const appSource = appFixture("20261022.1");
  const modules = { "browse-data.js": 'import { resolveRecordEvidence } from "./record-evidence.js?v=20261021.1";' };
  const inspection = inspectModelStudioRevisionGraph(indexSource, appSource, modules);
  assert.equal(inspection.errors.length, 1);
  assert.match(inspection.errors[0], /browse-data\.js module import .*record-evidence.*uses 20261021\.1; expected 20261022\.1/u);
  const updated = synchronizeModelStudioRevision(indexSource, appSource, "20261022.1", modules);
  assert.equal(updated.indexSource, indexSource);
  assert.equal(updated.appSource, appSource);
  assert.equal(updated.moduleSources["browse-data.js"],
    'import { resolveRecordEvidence } from "./record-evidence.js?v=20261022.1";');
  assert.deepEqual(inspectModelStudioRevisionGraph(updated.indexSource, updated.appSource, updated.moduleSources).errors, []);
});
