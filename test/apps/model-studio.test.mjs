import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createModelView, layoutNeighborhood } from "@onto2d/view";
import { decodeJsonValueTable, isJsonValueTable } from "../../packages/model-pack/src/json-value-table.js";

const releaseRoot = new URL("../../models/causal-emergence/releases/2026.11.05.0/", import.meta.url);
const loaded = new Map();

function json(path) {
  if (!loaded.has(path)) {
    loaded.set(path, readFile(new URL(path, releaseRoot), "utf8").then((text) => {
      const value = JSON.parse(text);
      return isJsonValueTable(value) ? decodeJsonValueTable(value) : value;
    }));
  }
  return loaded.get(path);
}

function indexedNeighbors(index, id) {
  return index.find((entry) => entry.id === id).nodes;
}

test("the Studio projection accepts the exact bundled release and draws a stable initial graph", async () => {
  const [manifest, nodes, edges, levels, parents, children] = await Promise.all([
    json("manifest.json"),
    json("model/nodes.json"),
    json("model/edges.json"),
    json("indexes/levels.json"),
    json("indexes/parents.json"),
    json("indexes/children.json")
  ]);
  const view = createModelView({ nodes, edges });
  assert.deepEqual(view.statistics, manifest.statistics);
  assert.equal(view.statistics.nodeCount, 2796);
  assert.equal(view.statistics.edgeCount, 4768);
  assert.deepEqual(view.facets.levels, levels.map(({ value, nodes: ids }) => ({ value, count: ids.length })));
  assert.equal(view.facets.levels.length, 8);

  const focusId = "l0:oscillatory-mode";
  const projection = view.neighborhood({
    focusId,
    depth: 1,
    direction: "both",
    maxNodes: 48,
    maxEdges: 180
  });
  const layout = layoutNeighborhood(projection, {
    width: 1040,
    height: 680,
    padding: 62,
    nodeRadius: 25
  });
  assert.deepEqual(projection.adjacent, {
    parents: indexedNeighbors(parents, focusId),
    children: indexedNeighbors(children, focusId)
  }, "Studio adjacency must equal the release's published parent and child indexes");
  assert.deepEqual(projection.adjacent.parents, ["R-mode", "l0:compensation"]);
  assert.deepEqual(projection.adjacent.children, ["R-triad", "l0:closure-parameter", "l0:discrete-scale"]);
  assert.deepEqual(layout.nodes.map((node) => node.id), ["R-mode", "R-triad", "l0:closure-parameter", "l0:compensation", "l0:discrete-scale", "l0:oscillatory-mode"]);
  assert.equal(layout.edges.length, 7);
  assert.ok(layout.edges.every((edge) => edge.path.includes(" Q ")));
  assert.ok(layout.nodes.every((node) => Number.isFinite(node.x) && Number.isFinite(node.y)));
  const x = (id) => layout.nodes.find((node) => node.id === id).x;
  assert.ok(x("R-mode") < x(focusId));
  assert.ok(x(focusId) < x("R-triad"));
});

test("dense real neighborhoods stay bounded and preserve the selected focus", async () => {
  const view = createModelView({
    nodes: await json("model/nodes.json"),
    edges: await json("model/edges.json")
  });
  const focusId = "cog:adult-neurogenesis-remodeling-scope";
  const projection = view.neighborhood({
    focusId,
    depth: 2,
    direction: "both",
    maxNodes: 48,
    maxEdges: 180
  });
  const layout = layoutNeighborhood(projection);
  assert.equal(layout.focusId, focusId);
  assert.ok(projection.counts.discoveredNodeCount > 48, "The selected neighborhood must exceed the display bound");
  assert.equal(projection.truncated, true);
  assert.ok(projection.counts.displayedNodeCount <= 48);
  assert.ok(projection.counts.displayedEdgeCount <= 180);
  assert.equal(new Set(layout.nodes.map((node) => `${node.x}:${node.y}`)).size, layout.nodes.length);
  assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)));
});

test("every real depth-2 Studio layout keeps bounded node cards separated", async () => {
  const nodes = await json("model/nodes.json");
  const view = createModelView({ nodes, edges: await json("model/edges.json") });
  for (const focus of nodes) {
    const projection = view.neighborhood({
      focusId: focus.id,
      depth: 2,
      direction: "both",
      maxNodes: 48,
      maxEdges: 180
    });
    const layout = layoutNeighborhood(projection, {
      width: 1040,
      height: 680,
      padding: 42,
      nodeWidth: 148,
      nodeHeight: 54
    });
    for (let left = 0; left < layout.nodes.length; left += 1) {
      for (let right = left + 1; right < layout.nodes.length; right += 1) {
        const horizontalDistance = Math.abs(layout.nodes[left].x - layout.nodes[right].x);
        const verticalDistance = Math.abs(layout.nodes[left].y - layout.nodes[right].y);
        assert.ok(
          horizontalDistance >= layout.nodeWidth + 12 || verticalDistance >= layout.nodeHeight + 18,
          `${focus.id}: ${layout.nodes[left].id} overlaps ${layout.nodes[right].id}`
        );
      }
    }
  }
});
