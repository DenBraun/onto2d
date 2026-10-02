import assert from "node:assert/strict";
import test from "node:test";
import { buildModelPack } from "@onto2d/model-pack";
import {
  analyzeStructuralGeometry, projectStructuralGeometry, verifyStructuralGeometryArtifact
} from "@onto2d/structural-geometry";
import { buildStructuralProvider } from "@onto2d/structural-geometry/providers";
import { getDistinguishabilityRegime } from "@onto2d/structural-geometry/regimes";

// Small hand-specified controls. No study files, source reconstruction, solvers
// or complete graph censuses are loaded by the ordinary test suite.
function pack(nodes, pairs) {
  return buildModelPack({
    model: { id: "geometry-unit", name: "Geometry unit control", version: "1" },
    source: { id: "hand-specified-unit-control", files: [] },
    nodes: nodes.map(id => ({ id })),
    edges: pairs.map(([source, target]) => ({
      id: `${source}->${target}`, source, target, relationLayer: "source-parent"
    })),
    dictionaries: {}
  });
}

for (const [name, nodes, pairs, expected] of [
  ["single edge", ["a", "b"], [["a", "b"]], [2]],
  ["four-node path", ["a", "b", "c", "d"], [["a", "b"], ["b", "c"], ["c", "d"]], [1, 0, 1]],
  ["directed cycle", ["a", "b", "c"], [["a", "b"], ["b", "c"], ["c", "a"]], [0, 0, 0]],
  ["outward star", ["a", "b", "c"], [["a", "b"], ["a", "c"]], [2, 2]]
]) {
  test(`bounded Forman unit control: ${name}`, () => {
    const result = analyzeStructuralGeometry(pack(nodes, pairs)).result;
    assert.deepEqual(result.edges.map(edge => edge.curvature), expected);
    assert.equal(result.nodes.reduce((sum, node) => sum + node.balance, 0), 0);
  });
}

test("isolated geometry has an empty metric and explicit unavailable extrema", () => {
  const result = analyzeStructuralGeometry(pack(["a"], [])).result;
  assert.deepEqual(result.summary, {
    count: 0, sum: 0, minimum: null, maximum: null, mean: null, histogram: []
  });
});

test("geometry binds its source, preserves the input and rejects changed results", () => {
  const source = pack(["a", "b"], [["a", "b"]]);
  const before = JSON.stringify(source);
  const artifact = analyzeStructuralGeometry(source);
  assert.equal(JSON.stringify(source), before);
  assert.ok(Object.isFrozen(artifact));
  assert.deepEqual(verifyStructuralGeometryArtifact(artifact, source), artifact);
  const forged = structuredClone(artifact);
  forged.result.edges[0].curvature = 999;
  assert.throws(() => verifyStructuralGeometryArtifact(forged, source));
  assert.throws(() => verifyStructuralGeometryArtifact(artifact, pack(["a", "b", "c"], [["a", "b"]])));
});

test("projection rejects an unverified source and unsupported self loops", () => {
  assert.throws(() => projectStructuralGeometry({}));
  assert.throws(() => projectStructuralGeometry(pack(["a"], [["a", "a"]])));
});

test("unit provider uses exact rational lengths on a two-node graph", () => {
  const provider = buildStructuralProvider(pack(["a", "b"], [["a", "b"]]), { providerId: "unit-v1" });
  assert.equal(provider.result.kind, "metric-values");
  assert.equal(provider.result.edges.length, 1);
  assert.deepEqual(provider.result.edges[0].length, { numerator: "1", denominator: "1" });
  assert.throws(() => buildStructuralProvider(pack(["a"], []), { providerId: "unknown" }));
});

test("regime lookup requires an explicit supported policy", () => {
  assert.ok(Object.isFrozen(getDistinguishabilityRegime("canonical-structure-v1")));
  for (const invalid of [undefined, null, "constructor", "unknown"]) {
    assert.throws(() => getDistinguishabilityRegime(invalid));
  }
});
