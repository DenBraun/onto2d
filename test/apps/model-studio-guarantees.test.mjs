import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";
import { createModelView } from "@onto2d/view";
import { factDisciplineIds } from "../../apps/model-studio/arising-facts.js";
import { expandGraph } from "../../apps/model-studio/graph-expansion.js";
import { columnHeadingY, layoutLayeredGraph, longestPathLayers, neighbourhoodLayers } from "../../apps/model-studio/graph-layout.js";
import { connection, matchNames } from "../../apps/model-studio/graph-paths.js";
import { createGraphViewport } from "../../apps/model-studio/graph-viewport.js";
import { casesByArising } from "../../apps/model-studio/interaction-views.js";
import { openWork } from "../../apps/model-studio/open-work.js";
import { fitTableMap, tileGap } from "../../apps/model-studio/table-map.js";
import { decodeJsonValueTable, isJsonValueTable } from "../../packages/model-pack/src/json-value-table.js";
import { declaration, releaseVersion } from "./model-studio-source.mjs";

const edge = (source, target, id = `${source}>${target}`) => ({ id, source, target });
const adjacencyOf = (edges) => ({
  incoming: (id) => edges.filter((item) => item.target === id),
  outgoing: (id) => edges.filter((item) => item.source === id)
});

test("at the limit a reader keeps the lines of the card asked for, whatever their names", () => {
  // Alphabetically the line no one asked for, a>b, would come first.
  const base = edge("c", "f");
  const edges = [base, edge("a", "b"), edge("z", "c")];
  const view = expandGraph({
    nodeIds: ["f", "c", "a", "b"], layers: new Map([["f", 0], ["c", -1], ["a", 0], ["b", 1]]), edges: [base],
    expanded: ["c"], adjacency: adjacencyOf(edges), limits: { maxNodes: 120, maxEdges: 2 }
  });
  assert.deepEqual(view.edges.map(({ id }) => id), ["c>f", "z>c"]);
  assert.equal(view.limited, true);
});

test("a card's line to itself is neither drawn, counted nor added", () => {
  const edges = [edge("a", "b"), edge("a", "a"), edge("x", "a")];
  const view = expandGraph({ nodeIds: ["a", "b"], layers: new Map([["a", 0], ["b", 1]]), edges: [edges[0]], expanded: ["a"], adjacency: adjacencyOf(edges) });
  assert.deepEqual(view.added.map(({ id }) => id), ["x"]);
  assert.deepEqual(view.edges.map(({ id }) => id), ["a>b", "x>a"]);
  assert.deepEqual(view.pills.get("a"), { hidden: 0, expanded: true });
});

test("a neighbour that is both a cause and a dependent goes left, once", () => {
  const edges = [edge("c", "n"), edge("n", "c")];
  const view = expandGraph({ nodeIds: ["c"], layers: new Map([["c", 0]]), edges: [], expanded: ["c"], adjacency: adjacencyOf(edges) });
  assert.deepEqual(view.added, [{ id: "n", layer: -1, via: "c" }]);
  assert.equal(expandGraph({ nodeIds: ["c"], layers: new Map([["c", 0]]), edges: [], adjacency: adjacencyOf(edges) }).pills.get("c").hidden, 1);
});

test("a card's neighbours come in the order of their lines' ids, however the release lists them", () => {
  const edges = [edge("z", "c", "2"), edge("a", "c", "3"), edge("m", "c", "1")];
  const view = expandGraph({ nodeIds: ["c"], layers: new Map([["c", 0]]), edges: [], expanded: ["c"], adjacency: adjacencyOf(edges) });
  assert.deepEqual(view.added.map(({ id }) => id), ["m", "z", "a"]);
});

test("among equal links a chain takes the smallest edge id, whichever is listed first", () => {
  const link = (id) => ({ ...edge("a", "b", id), status: "supported" });
  assert.deepEqual(connection([link("second"), link("first")], "a", "b").edges.map(({ id }) => id), ["first"]);
  assert.deepEqual(connection([link("first"), link("second")], "a", "b").edges.map(({ id }) => id), ["first"]);
});

test("a word that starts with the query ranks above a match inside a word, also against the alphabet", () => {
  const items = ["Accell", "Zed Cell"].map((name) => ({ name }));
  assert.deepEqual(matchNames(items, "cell").map(({ name }) => name), ["Zed Cell", "Accell"]);
});

test("Open work lists its sections by level, however the arisings are given", () => {
  const arising = (id, level) => ({ id, level, domain: "d", scientificStatus: "established" });
  const arisings = [arising("high", 7), arising("low", 0), arising("middle", 3)];
  const causes = new Map(arisings.map(({ id }) => [id, [{ id: `cause:${id}`, source: "x", target: id, status: "author-hypothesis" }]]));
  const work = openWork({ arisings, causesOf: (id) => causes.get(id), factsOf: () => ({ openSlots: [1] }) });
  assert.deepEqual(work.sections.causes.map(({ key }) => key), [0, 3, 7]);
  assert.deepEqual(work.sections.categories.map(({ key }) => key), [0, 3, 7]);
  assert.deepEqual(work.evidence.levels.map(({ level }) => level), [0, 3, 7]);
});

test("Open work counts the arisings that owe something apart from the texts they owe", () => {
  const arisings = ["a", "b", "c"].map((id) => ({ id, level: 0, domain: "d" }));
  const work = openWork({ arisings, causesOf: () => [], factsOf: () => ({ openObligations: ["Add a definition.", "Review."] }) });
  assert.equal(work.counts.obligations, 6);
  assert.equal(work.counts.obligationArisings, 3);
  assert.equal(work.sections.obligations.length, 2);
});

const MAP = { labelWidth: 112, headHeight: 22, columnGap: 4, rowGap: 4, cellChrome: 8, gap: tileGap, maxTile: 20 };

test("what the tiles leave of the width fills the grid, by the same weights", () => {
  const fit = fitTableMap({ ...MAP, rows: [[2, 8]], width: 1000, height: 1000 });
  assert.equal(fit.tile, 20);
  assert.equal(fit.columns.reduce((sum, width) => sum + width, 0), 1000 - 112 - 4 * 2, "The columns reach the edge of the table");
  assert.ok(fit.columns[1] > fit.columns[0] * 3, "The larger cell takes the larger share");
});

test("a column never holds more tiles per line than its largest cell has", () => {
  assert.deepEqual(fitTableMap({ ...MAP, rows: [[2, 3]], width: 2000, height: 1000 }).perLine, [2, 3]);
});

test("every row of the map is at least its minimum height, and the gap grows slowly with the tile", () => {
  const fit = fitTableMap({ ...MAP, rows: [[1, 0], [0, 1]], width: 1000, height: 1000, minRowHeight: 34 });
  assert.ok(fit.rowHeights.every((height) => height >= 34));
  const small = fitTableMap({ ...MAP, rows: [[1]], width: 1000, height: 1000, maxTile: 10, minRowHeight: 50 });
  assert.deepEqual(small.rowHeights, [50]);
  assert.deepEqual([7, 14, 21, 28, 40].map(tileGap), [2, 2, 3, 4, 6]);
});

test("a case is listed once for an arising, however many of its records it names", () => {
  const nodes = [{ id: "a" }, { id: "r1", arisingId: "a" }, { id: "r2", arisingId: "a" }];
  const index = casesByArising({ cases: [{ id: "one", entityIds: ["a", "r1", "r2"] }] }, nodes, new Set(["a"]));
  assert.deepEqual(index.get("a").map(({ id }) => id), ["one"]);
});

test("the disciplines arisings use are listed in ascending order, each once", () => {
  assert.deepEqual(factDisciplineIds({ a: { disciplines: [10, 3] }, b: { disciplines: [4, 3] }, c: {} }), [3, 4, 10]);
});

test("the lowest layer of a longest-path layering is always zero", () => {
  const edges = [edge("late", "end"), edge("a", "b"), edge("b", "c"), edge("c", "end")];
  const layers = longestPathLayers(["late", "a", "b", "c", "end"], edges);
  assert.equal(Math.min(...layers.values()), 0);
  assert.equal(layers.get("late"), 2, "A source moves up to its nearest successor");
  const cycle = longestPathLayers(["x", "y"], [edge("x", "y"), edge("y", "x")]);
  assert.equal(Math.min(...cycle.values()), 0, "Also through a cycle");
});

function stageOf(width, height) {
  const group = { transform: "", setAttribute(name, value) { this.transform = value; } };
  const svg = { dataset: {}, parentElement: null, getBoundingClientRect: () => ({ left: 0, top: 0, width, height }), addEventListener() {} };
  const viewport = createGraphViewport(svg, group);
  const read = () => {
    const [, x, y, scale] = /translate\(([-\d.]+) ([-\d.]+)\) scale\(([\d.]+)\)/.exec(group.transform).map(Number);
    return { x, y, scale };
  };
  return { viewport, read };
}

test("with start a wide drawing opens on its first column, unless that would lose the anchor", () => {
  const options = { anchor: { x: 900, y: 450 }, readableScale: 0.68 };
  const open = (extra) => {
    const { viewport, read } = stageOf(1000, 600);
    viewport.setContent(5000, 900);
    viewport.fit({ ...options, ...extra });
    return read().x;
  };
  assert.equal(open({ start: true }), 0, "The anchor is on stage from the first column");
  assert.ok(Math.abs(open({}) - (500 - 900 * 0.68)) < 0.1, "Without start the anchor is centred");
  assert.ok(Math.abs(open({ start: true, anchor: { x: 3000, y: 450 } }) - (500 - 3000 * 0.68)) < 0.1, "An anchor further on stays centred");
});

test("when the box cannot fit, the card comes first", () => {
  const { viewport, read } = stageOf(1000, 600);
  viewport.setContent(8000, 4000);
  viewport.centerOn({ x: 4000, y: 2000 }, 1);
  const to = { x: 4900, y: 2000, width: 200, height: 72 };
  viewport.hold({ from: to, to, box: { x: 1000, y: 1960, width: 4000, height: 80 }, readableScale: 0.68 });
  const { x, scale } = read();
  const card = x + to.x * scale;
  assert.ok(card - (to.width / 2) * scale >= 0 && card + (to.width / 2) * scale <= 1000, `The card is on stage at ${card}`);
  assert.ok(x + 1000 * scale < 0, "and the far end of the box is what gives way");
});

/* ---------- Column headings ---------- */

/** The height of every point in a line's path, control points included. A curve stays within its control points, so nothing it reaches lies outside these. */
function lineHeights(layout) {
  const heights = [];
  for (const { path } of layout.edges) {
    const numbers = [...path.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    for (let index = 1; index < numbers.length; index += 2) heights.push(numbers[index]);
  }
  return heights;
}

const cardsTop = (layout) => Math.min(...layout.nodes.map((node) => node.y - node.height / 2));

function wrappedGraph(seed) {
  let state = seed;
  const random = () => (state = (state * 1664525 + 1013904223) >>> 0) / 2 ** 32;
  const count = 12 + Math.floor(random() * 40);
  const nodes = Array.from({ length: count }, (_, index) => ({ id: `n${index}`, layer: Math.floor(random() * 5) - 2, rank: index, width: 200, height: 56 + Math.floor(random() * 3) * 16 }));
  const edges = [];
  for (let index = count * 3; index > 0; index -= 1) {
    const source = nodes[Math.floor(random() * count)].id;
    const target = nodes[Math.floor(random() * count)].id;
    if (source !== target) edges.push({ id: `${source}>${target}#${index}`, source, target });
  }
  return { nodes, edges };
}

test("the layout reports the highest point it draws, cards and lines alike", () => {
  let above = 0;
  for (let seed = 1; seed <= 60; seed += 1) {
    const layout = layoutLayeredGraph(wrappedGraph(seed), { maxRows: 5, columnGap: 66, padding: 44 });
    const heights = lineHeights(layout);
    assert.ok(layout.top <= cardsTop(layout) + 1e-6, `seed ${seed}`);
    assert.ok(heights.every((height) => height >= layout.top - 0.01), `seed ${seed}`);
    if (layout.top < cardsTop(layout)) above += 1;
  }
  assert.ok(above > 10, "The fixtures hold lines that rise above the cards");
});

test("a column heading sits over the cards and over every line, inside the canvas", () => {
  const cap = 12;
  let lifted = 0;
  for (let seed = 1; seed <= 60; seed += 1) {
    const layout = layoutLayeredGraph(wrappedGraph(seed), { maxRows: 5, columnGap: 66, padding: 44 });
    const y = columnHeadingY(layout);
    assert.ok(y - cap >= 0, `seed ${seed}: the heading stays on the canvas`);
    assert.ok(y + 3 <= Math.min(cardsTop(layout), ...lineHeights(layout)), `seed ${seed}: no line reaches the heading at ${y}`);
    if (y < cardsTop(layout) - 22) lifted += 1;
  }
  assert.ok(lifted > 0, "Some fixtures need the heading lifted");
});

test("with no line above the cards a heading stays where it always was", () => {
  const nodes = [{ id: "a", layer: 0, rank: 0, width: 200, height: 60 }, { id: "b", layer: 1, rank: 0, width: 200, height: 60 }];
  const layout = layoutLayeredGraph({ nodes, edges: [edge("a", "b")] }, { padding: 44 });
  assert.equal(layout.top, cardsTop(layout));
  assert.equal(columnHeadingY(layout), cardsTop(layout) - 22);
  const low = { nodes: [{ y: 300, height: 60 }], top: 270 };
  assert.equal(columnHeadingY(low), 248, "A line among the cards does not move it");
  assert.equal(columnHeadingY({ nodes: [{ y: 300, height: 60 }], top: 200 }), 194, "One above lifts it");
  assert.equal(columnHeadingY({ nodes: [{ y: 30, height: 60 }], top: 0 }), 16, "Never off the canvas");
});

test("the views where lines crossed the headings, in the real release, now keep them clear", async () => {
  const release = new URL(`../../models/causal-emergence/releases/${releaseVersion}/model/`, import.meta.url);
  const json = async (name) => {
    const value = JSON.parse(await readFile(new URL(name, release), "utf8"));
    return isJsonValueTable(value) ? decodeJsonValueTable(value) : value;
  };
  const view = createModelView({ nodes: await json("nodes.json"), edges: await json("edges.json") });
  for (const focusId of ["arising:7.8", "arising:7.6"]) {
    const projection = view.neighborhood({ focusId, depth: 3, direction: "both", maxNodes: 72, maxEdges: 260 });
    const layers = neighbourhoodLayers(projection);
    const layout = layoutLayeredGraph({
      nodes: projection.nodes.map((node) => ({ id: node.id, layer: layers.get(node.id), width: 164, height: 72 })),
      edges: projection.edges
    }, { nodeWidth: 164, nodeHeight: 72, columnGap: 66, padding: 44, maxRows: 26, flatSide: (layer) => (layer < 0 ? "left" : "right") });
    const y = columnHeadingY(layout);
    assert.ok(cardsTop(layout) - 22 > y, `${focusId}: a line rises past where the heading would stand`);
    assert.ok(y + 3 <= Math.min(...lineHeights(layout)), focusId);
  }
});

test("the Studio draws its headings where the layout says, and none in a subgraph or a path", () => {
  const layout = {
    top: 30,
    nodes: [{ id: "a", layer: -1, x: 100, y: 100, height: 60 }, { id: "b", layer: 0, x: 300, y: 100, height: 60 }],
    columns: [{ layer: -1, x: 100 }, { layer: 0, x: 300 }, { layer: 1, x: 500 }],
    edges: []
  };
  const headings = (mode, drawn = layout) => {
    const stop = new Error("headings drawn");
    let columns = null;
    const elements = { "graph-columns": { replaceChildren(...children) { columns = children; throw stop; } } };
    const draw = vm.runInNewContext(`${declaration("drawLayout")}\ndrawLayout;`, {
      elements, columnHeadingY, Map, Math,
      keyboardInGraph: () => false,
      columnHeading: (layer) => `column ${layer}`,
      svgElement: (_name, attributes) => ({ ...attributes })
    });
    assert.throws(() => draw(drawn, { nodes: [], edges: [], mode }), (error) => error === stop);
    return columns.map(({ x, y, textContent }) => ({ x, y, textContent }));
  };
  assert.deepEqual(headings("causes"), [{ x: 100, y: 24, textContent: "column -1" }, { x: 300, y: 24, textContent: "column 0" }], "A column with no card has no heading");
  assert.deepEqual(headings("subgraph"), []);
  assert.deepEqual(headings("path"), []);
  const grown = { ...layout, nodes: [...layout.nodes, { id: "c", layer: 0, x: 300, y: 200, height: 60 }] };
  assert.deepEqual(headings("causes", grown).map(({ x }) => x), [100], "A focus column holding other cards is no longer only the focus");
});
