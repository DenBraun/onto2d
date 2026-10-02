import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";
import { isResearchTest, selectTestFiles } from "./test-suites.mjs";

test("normal discovery keeps software tests and excludes scientific replay on both path formats", () => {
  const software = [
    "packages/kernel/test/decimal.test.mjs",
    "packages/model-pack/test/archive-loader.test.mjs",
    "packages/structural-geometry/test/runtime.unit.test.mjs",
    "test/apps/model-studio-selection.test.mjs",
    "test/engine/default-engine.test.mjs",
    "scripts/new-regression.test.mjs"
  ];
  const research = [
    "cases/new-study/replay.test.mjs", "models/example/compiler.test.mjs",
    "packages/structural-geometry/test/pseudometric-contracts.test.mjs",
    "test/workspace/canonical-source.test.mjs",
    "test/workspace/model-studio-browse.test.mjs",
    "test/workspace/runtime-schema-conformance.test.mjs",
    "packages/example/census.research.test.mjs",
    "test/engine/release-reproduction.research.test.mjs"
  ];
  for (const normalize of [file => file, file => file.replaceAll("/", "\\")]) {
    const files = [...software, ...research].map(normalize);
    assert.deepEqual(selectTestFiles(files), software.map(normalize));
    assert.deepEqual(selectTestFiles(files, "research"), research.map(normalize));
    assert.deepEqual(selectTestFiles(files, "all"), files);
  }
  assert.throws(() => selectTestFiles(software, "reserch"), /Unknown test suite/);
});

test("all existing geometry replay suites remain manual; bounded unit tests run normally", async () => {
  const files = await readdir(new URL("../packages/structural-geometry/test/", import.meta.url));
  for (const file of files.filter(file => file.endsWith(".test.mjs"))) {
    assert.equal(isResearchTest(`packages/structural-geometry/test/${file}`), !file.endsWith(".unit.test.mjs"));
  }
});

test("automatic CI has one check entrypoint, no duplicate build and no scientific commands", async () => {
  const workflow = await readFile(new URL("../.github/workflows/ci.yml", import.meta.url), "utf8");
  const check = await readFile(new URL("./check.mjs", import.meta.url), "utf8");
  assert.equal(workflow.match(/run: npm run check\s*$/gm)?.length, 1);
  assert.equal(workflow.match(/run: npm test\s*$/gm)?.length, 1);
  assert.doesNotMatch(workflow, /run:.*(?:research|structural-geometry|python|pip|npm run build)|setup-python/);
  assert.doesNotMatch(check, /check-research|check-structural-geometry|check-history-benchmark|build-model-studio-data|check-canonical-source/);
});
