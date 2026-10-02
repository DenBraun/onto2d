// Research replays are opt-in, including when they happen to use node:test.
// Keep their original paths: published evidence refers to these test files.
const RESEARCH_ROOTS = ["cases/", "models/", "docs/", "test/cases/"];
const RESEARCH_FILES = new Set([
  "apps/structural-geometry-lab/model.test.mjs",
  "packages/history-benchmark/test/history-benchmark.test.mjs",
  "test/workspace/model-studio-browse.test.mjs",
  "test/workspace/references-audit.test.mjs",
  "test/workspace/runtime-schema-conformance.test.mjs"
]);

export function isResearchTest(relativePath) {
  const file = relativePath.replaceAll("\\", "/");
  return RESEARCH_ROOTS.some(root => file.startsWith(root))
    || RESEARCH_FILES.has(file)
    || file.endsWith(".research.test.mjs")
    || file.startsWith("test/workspace/canonical-")
    || (file.startsWith("packages/structural-geometry/test/")
      && !file.endsWith(".unit.test.mjs"));
}

export function selectTestFiles(files, suite = "unit") {
  if (!["unit", "research", "all"].includes(suite)) {
    throw new Error(`Unknown test suite: ${suite}. Use unit, research or all.`);
  }
  return files.filter(file => suite === "all"
    || isResearchTest(file) === (suite === "research"));
}
