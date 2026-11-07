import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createModelView } from "@onto2d/view";
import { layoutLayeredGraph, longestPathLayers, neighbourhoodLayers } from "../../apps/model-studio/graph-layout.js";
import { decodeJsonValueTable, isJsonValueTable } from "../../packages/model-pack/src/json-value-table.js";

const releaseRoot = new URL("../../models/causal-emergence/releases/2026.11.05.0/", import.meta.url);

async function json(path) {
  const value = JSON.parse(await readFile(new URL(path, releaseRoot), "utf8"));
  return isJsonValueTable(value) ? decodeJsonValueTable(value) : value;
}

function boxes(layout) {
  return layout.nodes.map((node) => ({
    id: node.id, left: node.x - node.width / 2, right: node.x + node.width / 2,
    top: node.y - node.height / 2, bottom: node.y + node.height / 2
  }));
}

function assertSeparated(layout, label) {
  const cards = boxes(layout);
  for (let left = 0; left < cards.length; left += 1) {
    for (let right = left + 1; right < cards.length; right += 1) {
      const a = cards[left];
      const b = cards[right];
      const apart = a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top;
      assert.ok(apart, `${label}: ${a.id} overlaps ${b.id}`);
    }
  }
}

function pathNumbers(path) {
  return [...path.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
}

test("opposite causes between two records leave and enter through separate ports", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "a", layer: 0 }, { id: "b", layer: 1 }],
    edges: [{ id: "a>b", source: "a", target: "b" }, { id: "b>a", source: "b", target: "a" }]
  });
  const forward = layout.edges.find((edge) => edge.id === "a>b");
  const backward = layout.edges.find((edge) => edge.id === "b>a");
  assert.equal(forward.kind, "forward");
  assert.equal(backward.kind, "backward");
  assert.notEqual(forward.path, backward.path);
  assert.notDeepEqual(forward.start, backward.end, "The two directions must not share a port on the source card");
  assert.notDeepEqual(forward.end, backward.start, "The two directions must not share a port on the target card");
  const gapAtA = Math.abs(forward.start.y - backward.end.y);
  const gapAtB = Math.abs(forward.end.y - backward.start.y);
  assert.ok(gapAtA >= 10 && gapAtB >= 10, "Opposite directions stay visibly apart");
  // The same edge keeps its relative position at both cards, so the two curves never cross.
  assert.equal(Math.sign(forward.start.y - backward.end.y), Math.sign(forward.end.y - backward.start.y));
});

test("edges into one card arrive at distinct ports instead of one point", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "x", layer: 0 }, { id: "y", layer: 0 }, { id: "z", layer: 0 }, { id: "t", layer: 1 }],
    edges: ["x", "y", "z"].map((id) => ({ id: `${id}>t`, source: id, target: "t" }))
  });
  const ends = layout.edges.map((edge) => `${edge.end.x}:${edge.end.y}`);
  assert.equal(new Set(ends).size, 3);
});

test("a long edge passes through reserved waypoints rather than across intermediate cards", () => {
  const layout = layoutLayeredGraph({
    nodes: [
      { id: "cause", layer: -1 }, { id: "focus", layer: 0 }, { id: "dependent", layer: 1 },
      { id: "sibling", layer: 0, rank: 1 }
    ],
    edges: [
      { id: "cause>focus", source: "cause", target: "focus" },
      { id: "focus>dependent", source: "focus", target: "dependent" },
      { id: "cause>dependent", source: "cause", target: "dependent" },
      { id: "cause>sibling", source: "cause", target: "sibling" }
    ]
  });
  assertSeparated(layout, "waypoint fixture");
  const long = layout.edges.find((edge) => edge.id === "cause>dependent");
  assert.equal((long.path.match(/ C /g) ?? []).length, 2, "One waypoint splits the long edge into two curves");
  const middleColumn = layout.columns.find((column) => column.layer === 0);
  const waypoint = pathNumbers(long.path).slice(6, 8);
  assert.equal(waypoint[0], middleColumn.x);
  for (const card of boxes(layout).filter((node) => ["focus", "sibling"].includes(node.id))) {
    assert.ok(waypoint[1] <= card.top || waypoint[1] >= card.bottom, `The waypoint must avoid ${card.id}`);
  }
});

test("same-column arcs bulge outward and nest without sharing ports", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "focus", layer: 0 }, { id: "a", layer: 1 }, { id: "b", layer: 1 }, { id: "c", layer: 1 }],
    edges: [
      { id: "focus>a", source: "focus", target: "a" }, { id: "focus>b", source: "focus", target: "b" },
      { id: "focus>c", source: "focus", target: "c" }, { id: "a>c", source: "a", target: "c" },
      { id: "b>c", source: "b", target: "c" }, { id: "c>a", source: "c", target: "a" }
    ]
  }, { flatSide: () => "right" });
  const right = Math.max(...layout.nodes.filter((node) => node.layer === 1).map((node) => node.x + node.width / 2));
  const flat = layout.edges.filter((edge) => edge.kind === "flat");
  assert.equal(flat.length, 3);
  for (const edge of flat) {
    assert.ok(pathNumbers(edge.path).some((value, index) => index % 2 === 0 && value > right), `${edge.id} bulges outward`);
  }
  const endpoints = flat.flatMap((edge) => [`${edge.start.x}:${edge.start.y}`, `${edge.end.x}:${edge.end.y}`]);
  assert.equal(new Set(endpoints).size, endpoints.length, "Every arc endpoint has its own port");
});

test("barycentre ordering removes avoidable crossings and the result is deterministic", () => {
  const graph = {
    nodes: [
      { id: "p1", layer: 0, rank: 0 }, { id: "p2", layer: 0, rank: 1 }, { id: "p3", layer: 0, rank: 2 },
      { id: "c1", layer: 1, rank: 0 }, { id: "c2", layer: 1, rank: 1 }, { id: "c3", layer: 1, rank: 2 }
    ],
    edges: [
      { id: "1", source: "p1", target: "c3" }, { id: "2", source: "p2", target: "c2" }, { id: "3", source: "p3", target: "c1" }
    ]
  };
  const first = layoutLayeredGraph(graph);
  assert.equal(first.crossings, 0);
  assert.deepEqual(layoutLayeredGraph(structuredClone(graph)), first);
});

test("tall columns wrap into lanes that keep every card separated", () => {
  const nodes = [{ id: "hub", layer: 1 }, ...Array.from({ length: 40 }, (_, index) => ({ id: `leaf-${String(index).padStart(2, "0")}`, layer: 0 }))];
  const edges = nodes.slice(1).map((node) => ({ id: `${node.id}>hub`, source: node.id, target: "hub" }));
  const layout = layoutLayeredGraph({ nodes, edges }, { maxRows: 12 });
  assert.equal(layout.columns.find((column) => column.layer === 0).lanes, 4);
  assertSeparated(layout, "wrapped fixture");
  assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)));
});

test("longest-path layering orders a technical subgraph and breaks cycles deterministically", () => {
  const layers = longestPathLayers(["a", "b", "c", "d"], [
    { id: "1", source: "a", target: "b" }, { id: "2", source: "b", target: "c" },
    { id: "3", source: "a", target: "c" }, { id: "4", source: "c", target: "a" }, { id: "5", source: "d", target: "d" }
  ]);
  assert.deepEqual(Object.fromEntries(layers), { a: 0, b: 1, c: 2, d: 0 });
});

test("a source that feeds only a deep record moves next to it instead of stretching a long edge", () => {
  const layers = longestPathLayers(["context", "process", "definition", "late"], [
    { id: "1", source: "context", target: "process" }, { id: "2", source: "process", target: "definition" },
    { id: "3", source: "late", target: "definition" }
  ]);
  assert.deepEqual(Object.fromEntries(layers), { context: 0, process: 1, definition: 2, late: 1 });
});

test("every real arising neighbourhood lays out with separated cards and finite routes", async () => {
  const [nodes, edges] = await Promise.all([json("model/nodes.json"), json("model/edges.json")]);
  const view = createModelView({ nodes, edges });
  const arisings = nodes.filter((node) => node.layer === "arising");
  let checked = 0;
  for (const focus of arisings) {
    for (const depth of [1, 2]) {
      const projection = view.neighborhood({ focusId: focus.id, depth, direction: "both", maxNodes: 72, maxEdges: 260 });
      const layers = neighbourhoodLayers(projection);
      const layout = layoutLayeredGraph({
        nodes: projection.nodes.map((node) => ({ id: node.id, layer: layers.get(node.id) })),
        edges: projection.edges
      }, { maxRows: 24 });
      assertSeparated(layout, `${focus.id} depth ${depth}`);
      assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)), `${focus.id}: finite routes`);
      const ports = layout.edges.flatMap((edge) => [`${edge.start.x}:${edge.start.y}`, `${edge.end.x}:${edge.end.y}`]);
      assert.equal(new Set(ports).size, ports.length, `${focus.id} depth ${depth}: every edge end has its own port`);
      checked += 1;
    }
  }
  assert.equal(checked, arisings.length * 2);
});

test("every arising has a lineage of arising-role causes from the root", async () => {
  const appSource = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const declaration = (name) => {
    const start = appSource.search(new RegExp(`^function ${name}\\(`, "m"));
    assert.ok(start >= 0, `Missing app function: ${name}`);
    const end = appSource.indexOf("\nfunction ", start + 1);
    return appSource.slice(start, end);
  };
  const { arisingLineages } = (await import(`data:text/javascript,${encodeURIComponent(
    ["arisingCode", "codeKey", "compareCodes", "arisingLineages"].map(declaration).join("\n") + "\nexport { arisingLineages };"
  )}`));
  const [nodes, edges] = await Promise.all([json("model/nodes.json"), json("model/edges.json")]);
  const arisings = nodes.filter((node) => node.layer === "arising");
  const ids = new Set(arisings.map((node) => node.id));
  const causes = edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target));
  const { root, predecessor } = arisingLineages(arisings, causes);
  assert.equal(root, "arising:0.15", "The root is the arising without a cause inside the graph");
  assert.equal(predecessor.size, arisings.length - 1, "Every other arising is reached through arising-role causes");
  for (const node of arisings) {
    if (node.id === root) continue;
    const chain = [];
    for (let edge = predecessor.get(node.id); edge; edge = predecessor.get(edge.source)) chain.unshift(edge);
    assert.equal(chain[0].source, root, `${node.id} traces back to the root`);
    assert.equal(chain.at(-1).target, node.id);
    assert.ok(chain.every((edge) => edge.role === "arising" && edge.relationLayer === "causal"), `${node.id}: arising-role causes only`);
  }
});

test("the Fenwick crossing count equals a pairwise count on random columns", async () => {
  const { crossingCount } = await import("../../apps/model-studio/graph-layout.js");
  let seed = 7;
  const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (let round = 0; round < 60; round += 1) {
    const upper = Array.from({ length: 1 + Math.floor(random() * 12) }, (_, index) => ({ id: `u${index}` }));
    const lower = Array.from({ length: 1 + Math.floor(random() * 12) }, (_, index) => ({ id: `l${index}` }));
    const links = new Map(upper.map((item) => [item.id, lower.filter(() => random() < 0.35)]));
    const pairs = [];
    upper.forEach((item, upperIndex) => {
      for (const neighbour of links.get(item.id)) pairs.push([upperIndex, lower.indexOf(neighbour)]);
    });
    let expected = 0;
    for (let left = 0; left < pairs.length; left += 1) {
      for (let right = 0; right < pairs.length; right += 1) {
        if (pairs[left][0] < pairs[right][0] && pairs[left][1] > pairs[right][1]) expected += 1;
      }
    }
    assert.equal(crossingCount(upper, lower, links), expected, `round ${round}`);
  }
});
