import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { EXPANSION_LIMITS, expandGraph, reachableWithin, relationToFocus } from "../../apps/model-studio/graph-expansion.js";
import { causalOrderLayers } from "../../apps/model-studio/graph-layout.js";
import { createGraphViewport } from "../../apps/model-studio/graph-viewport.js";

const edge = (source, target) => ({ id: `${source}>${target}`, source, target });
function adjacencyOf(edges) {
  return {
    incoming: (id) => edges.filter((item) => item.target === id),
    outgoing: (id) => edges.filter((item) => item.source === id)
  };
}
// c1 -> f -> d1, with neighbours beyond the view: c0 -> c1, c1 -> x, d1 -> d2, y -> d1.
const all = [edge("c1", "f"), edge("f", "d1"), edge("c0", "c1"), edge("c1", "x"), edge("d1", "d2"), edge("y", "d1")];
const base = () => ({
  nodeIds: ["f", "c1", "d1"],
  layers: new Map([["f", 0], ["c1", -1], ["d1", 1]]),
  edges: all.slice(0, 2),
  adjacency: adjacencyOf(all)
});

test("Nothing changes until a card is expanded, and each card knows what it hides", () => {
  const view = expandGraph(base());
  assert.deepEqual(view.added, []);
  assert.deepEqual(view.edges, all.slice(0, 2));
  assert.deepEqual(view.pills.get("c1"), { hidden: 2, expanded: false });
  assert.deepEqual(view.pills.get("d1"), { hidden: 2, expanded: false });
  assert.equal(view.pills.has("f"), false);
});

test("A cause goes one column left of the card and a dependent one column right", () => {
  const view = expandGraph({ ...base(), expanded: ["c1"] });
  assert.deepEqual(view.added, [{ id: "c0", layer: -2, via: "c1" }, { id: "x", layer: 0, via: "c1" }]);
  assert.deepEqual(view.expanded, ["c1"]);
  assert.deepEqual(view.pills.get("c1"), { hidden: 0, expanded: true });
  assert.equal(view.layers.get("f"), 0, "A placed card keeps its column");
  assert.deepEqual(view.edges.map((item) => item.id).sort(), ["c0>c1", "c1>f", "c1>x", "f>d1"], "Each line once");
});

test("Edges among all shown cards are drawn, also those no expansion asked for", () => {
  const edges = [...all, edge("c0", "d1")];
  const view = expandGraph({ ...base(), adjacency: adjacencyOf(edges), expanded: ["c1"] });
  assert.ok(view.edges.some((item) => item.id === "c0>d1"));
});

test("The Direction control limits what a card adds and what its pill counts", () => {
  const causes = expandGraph({ ...base(), direction: "parents", expanded: ["c1"] });
  assert.deepEqual(causes.added.map(({ id }) => id), ["c0"]);
  assert.equal(expandGraph({ ...base(), direction: "parents" }).pills.get("c1").hidden, 1);
  const dependents = expandGraph({ ...base(), direction: "children", expanded: ["c1"] });
  assert.deepEqual(dependents.added.map(({ id }) => id), ["x"]);
});

test("The adjacency carries the filters: a filtered neighbour is neither counted nor added", () => {
  const filtered = adjacencyOf(all.filter((item) => item.id !== "c0>c1"));
  const view = expandGraph({ ...base(), adjacency: filtered, expanded: ["c1"] });
  assert.deepEqual(view.added.map(({ id }) => id), ["x"]);
});

test("Removing a card's neighbours removes what was grown from them", () => {
  const grown = expandGraph({ ...base(), adjacency: adjacencyOf([...all, edge("b", "c0")]), expanded: ["c1", "c0"] });
  assert.deepEqual(grown.added.map(({ id }) => id), ["c0", "x", "b"]);
  const removed = expandGraph({ ...base(), adjacency: adjacencyOf([...all, edge("b", "c0")]), expanded: ["c0"] });
  assert.deepEqual(removed.added, []);
  assert.deepEqual(removed.expanded, [], "An expansion of a card no longer shown is dropped");
});

test("A shared neighbour survives while another expanded card still reaches it", () => {
  const edges = [edge("c1", "f"), edge("f", "d1"), edge("s", "c1"), edge("s", "d1")];
  const view = expandGraph({ ...base(), adjacency: adjacencyOf(edges), expanded: ["d1"] });
  assert.deepEqual(view.added, [{ id: "s", layer: 0, via: "d1" }]);
  assert.equal(view.pills.has("c1"), false, "No pill once nothing is hidden");
});

test("Growth stops at the limits and says so", () => {
  const nodes = expandGraph({ ...base(), expanded: ["c1", "d1"], limits: { maxNodes: 4, maxEdges: 400 } });
  assert.equal(nodes.layers.size, 4);
  assert.equal(nodes.limited, true);
  const edges = expandGraph({ ...base(), expanded: ["c1"], limits: { maxNodes: 120, maxEdges: 3 } });
  assert.equal(edges.edges.length, 3);
  assert.equal(edges.limited, true);
  assert.deepEqual(EXPANSION_LIMITS, { maxNodes: 120, maxEdges: 400 });
  const full = expandGraph({ ...base(), expanded: ["c1"], limits: { maxNodes: 3, maxEdges: 400 } });
  assert.deepEqual(full.expanded, [], "A card that could add nothing is not marked expanded");
  assert.equal(full.pills.get("c1").expanded, false);
});

test("reachableWithin finds what the neighbourhood discovers, side by side", () => {
  const adjacency = adjacencyOf(all);
  assert.deepEqual(reachableWithin("f", 1, "both", adjacency), new Set(["f", "c1", "d1"]));
  assert.deepEqual(reachableWithin("f", 2, "parents", adjacency), new Set(["f", "c1", "c0"]));
  assert.deepEqual(reachableWithin("f", 2, "children", adjacency), new Set(["f", "d1", "d2"]));
});

test("Causal order spreads causes and dependents and keeps free cards beside the focus", () => {
  const layers = new Map([["f", 0], ["a", -1], ["b", -1], ["free", -1], ["p", 1], ["q", 1], ["alone", 1]]);
  const edges = [edge("a", "b"), edge("a", "f"), edge("b", "f"), edge("free", "f"), edge("f", "p"), edge("f", "q"), edge("p", "q"), edge("f", "alone")];
  const ordered = causalOrderLayers(layers, edges, "f");
  assert.equal(ordered.get("b"), -1);
  assert.equal(ordered.get("a"), -2);
  assert.equal(ordered.get("free"), -1);
  assert.equal(ordered.get("p"), 1);
  assert.equal(ordered.get("q"), 2);
  assert.equal(ordered.get("alone"), 1);
  assert.equal(ordered.get("f"), 0);
});

test("Causal order leaves no line inside a column, also through a cycle", () => {
  const layers = new Map([["f", 0], ["a", -1], ["b", -1], ["c", -1]]);
  const edges = [edge("a", "b"), edge("b", "a"), edge("b", "c"), edge("a", "f"), edge("b", "f"), edge("c", "f")];
  const ordered = causalOrderLayers(layers, edges, "f");
  for (const item of edges) assert.notEqual(ordered.get(item.source), ordered.get(item.target), item.id);
  assert.ok([...ordered.entries()].every(([id, layer]) => id === "f" || layer < 0), "Causes stay left of the focus");
});

function fakeViewport(stage = { width: 800, height: 600 }) {
  const group = { transform: "", setAttribute(name, value) { this.transform = value; } };
  const svg = {
    dataset: {},
    parentElement: null,
    getBoundingClientRect: () => ({ left: 0, top: 0, ...stage }),
    addEventListener() {}
  };
  return { svg, group, read() {
    const [, x, y, scale] = /translate\(([-\d.]+) ([-\d.]+)\) scale\(([\d.]+)\)/.exec(group.transform).map(Number);
    return { x, y, scale };
  } };
}

test("A drawing wider than the stage opens on its first column and leaves no free room", () => {
  const { svg, group, read } = fakeViewport();
  const viewport = createGraphViewport(svg, group);
  viewport.setContent(3000, 900);
  viewport.fit({ anchor: { x: 0, y: 450 }, column: { top: 100, bottom: 800 }, readableScale: 0.68, start: true });
  assert.equal(read().x, 0, "The first column is on stage");
  viewport.fit({ anchor: { x: 1000, y: 450 }, readableScale: 0.68, start: true });
  assert.ok(read().x + 1000 * 0.68 < 800 && read().x + 1000 * 0.68 > 0, "A chosen card stays on stage");
  viewport.fit({ anchor: { x: 2950, y: 450 }, readableScale: 0.68 });
  assert.ok(read().x + 3000 * 0.68 >= 799.9, "A focus near the end leaves no free room on the right");
  viewport.fit({ anchor: { x: 50, y: 450 }, readableScale: 0.68 });
  assert.equal(read().x, 0, "A focus near the start leaves no free room on the left");
});

test("A tall first column opens from its top", () => {
  const { svg, group, read } = fakeViewport();
  const viewport = createGraphViewport(svg, group);
  viewport.setContent(3000, 2000);
  viewport.fit({ anchor: { x: 0, y: 1000 }, column: { top: 400, bottom: 1960 }, readableScale: 0.68, start: true });
  assert.ok(Math.abs(read().y - (28 - 400 * 0.68)) < 0.2);
});

test("Holding a card keeps it where it was, and brings its new neighbours on stage", () => {
  const { svg, group, read } = fakeViewport();
  const viewport = createGraphViewport(svg, group);
  viewport.setContent(4000, 4000);
  viewport.centerOn({ x: 400, y: 300 }, 1);
  const screen = (point) => ({ x: read().x + point.x * read().scale, y: read().y + point.y * read().scale });
  const from = screen({ x: 400, y: 300 });
  viewport.hold({ from: { x: 400, y: 300 }, to: { x: 700, y: 500 } });
  assert.deepEqual(screen({ x: 700, y: 500 }), from);
  viewport.hold({ from: { x: 700, y: 500 }, to: { x: 700, y: 500 }, box: { x: 50, y: 400, width: 700, height: 200 }, readableScale: 0.68 });
  const left = screen({ x: 50, y: 400 });
  const right = screen({ x: 750, y: 600 });
  assert.ok(left.x >= 28 - 0.1 && right.x <= 800 - 28 + 0.1, "The new cards are on stage");
  assert.equal(read().scale, 1, "It zooms out only when the box needs it");
  viewport.hold({ from: { x: 700, y: 500 }, to: { x: 700, y: 500 }, box: { x: 0, y: 0, width: 4000, height: 200 }, readableScale: 0.68 });
  assert.equal(read().scale, 0.68, "Never below the readable scale");
  const card = screen({ x: 700, y: 500 });
  assert.ok(card.x >= 28 - 0.1 && card.x <= 772.1, "A box too large for the stage never loses the card");
});

test("Holding a card leaves no free room beside a drawing that no longer fills the stage", () => {
  const { svg, group, read } = fakeViewport();
  const viewport = createGraphViewport(svg, group);
  viewport.setContent(2000, 2000);
  viewport.centerOn({ x: 1900, y: 1900 }, 1);
  viewport.setContent(2000, 1000);
  viewport.hold({ from: { x: 1900, y: 1900 }, to: { x: 1900, y: 900 } });
  assert.ok(read().y + 1000 >= 600 - 0.1 && read().y <= 0.1);
});

test("Holding a card keeps it above an overlay in the stage's corner only when it reaches under that overlay", () => {
  const { svg, group, read: position } = fakeViewport();
  const viewport = createGraphViewport(svg, group);
  const corner = { width: 240, height: 140 };
  viewport.setContent(3000, 3000);
  const low = { x: 1100, y: 1400 };
  viewport.centerOn({ x: low.x - 300, y: low.y - 170 }, 1);
  viewport.hold({ from: low, to: { ...low, width: 136, height: 60 }, box: { x: low.x - 68, y: low.y - 74, width: 136, height: 104 }, corner });
  const held = position();
  assert.ok(held.y + low.y + 30 <= 600 - 140, "Above the overlay");
  const left = { x: 200, y: 1400 };
  viewport.centerOn({ x: left.x + 300, y: left.y - 170 }, 1);
  const before = position();
  viewport.hold({ from: left, to: { ...left, width: 136, height: 60 }, box: { x: left.x - 68, y: left.y - 44, width: 136, height: 74 }, corner });
  assert.equal(position().y, before.y, "A card away from the overlay stays where it is");
});

const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");
const studio = read("apps/model-studio/model-studio.js");
const markup = read("apps/model-studio/index.html");
const styles = read("assets/css/model-studio-workbench.css");

test("A pill is its own small control: out of the card's clicks, in a quiet class the export can leave out", () => {
  assert.match(studio, /class: "graph-pill"/);
  const pill = studio.slice(studio.indexOf("function drawExpansionPill"), studio.indexOf("function toggleExpansion"));
  assert.match(pill, /event\.stopPropagation\(\);\s+toggleExpansion/);
  assert.match(pill, /"dblclick", \(event\) => event\.stopPropagation\(\)/);
  assert.doesNotMatch(pill, /title/, "Graphs have no tooltips");
  assert.match(studio, /interactive: \(target\) => !target\.closest\?\.\("\.graph-node, \.graph-edge, \.graph-pill"\)/);
  assert.match(studio, /state\.expanded = \[\]/);
  assert.match(studio, /scope = \[state\.presentation, state\.mode, focusId, state\.depth, state\.pathTarget/, "Expansion starts over with the view");
  assert.match(studio, /function renderView\(\) \{\s+endExpansionOutOfScope\(\);/, "Whichever view comes next, also one that draws no graph");
  const lift = Number(/const PILL_LIFT = (\d+);/.exec(studio)[1]);
  const hit = /class: "pill-hit", x: [^,]+, y: (-\d+)/.exec(pill);
  assert.ok(lift >= 5, "The pill clears the first line of a full card");
  assert.ok(lift - Number(hit[1]) <= 16, "Its hit area stops at the card above, the row gap away");
});

test("The bounded message names the pills and takes its own strip above the drawing", () => {
  assert.match(studio, /Bounded view: \$\{parts\} left out\. Use \+ on a card/);
  assert.match(styles, /\.graph-stage \{[^}]*padding-top: var\(--message-room\)/);
  assert.match(styles, /\.graph-message \{[^}]*top: 0; left: 0; right: 0/);
});

test("Filters share one predicate, cache per set and are never stored", () => {
  assert.match(studio, /causeFilters\.evidence \|\| citesEvidence\(edge\)/);
  assert.match(studio, /causes\.filter\(citesEvidence\)/);
  assert.match(studio, /\|evidence/);
  assert.doesNotMatch(studio, /savePreference\("(evidence|necessary|causeFilters)/);
  assert.match(markup, /data-cause-filter="evidence" aria-pressed="false">With evidence</);
  assert.match(markup, /data-cause-filter="necessary" aria-pressed="false">Necessary</);
});

test("Causal order is off by default, shown only at depth 1 and remembered", () => {
  assert.match(markup, /id="causal-order"[^>]*aria-pressed="false" hidden>Causal order</);
  assert.match(studio, /savePreference\("causalOrder", state\.causalOrder\)/);
  assert.match(studio, /state\.causalOrder = preferences\.causalOrder === true/);
  assert.match(studio, /state\.mode !== "causes" \|\| state\.depth !== 1/);
  for (const heading of ["Earlier causes", "Later dependents"]) assert.ok(studio.includes(heading));
});

test("A path has its own URL parameter, no pills and no headings", () => {
  assert.match(studio, /parameters\.set\("path", state\.pathTarget\)/);
  const path = studio.slice(studio.indexOf("function renderPath"), studio.indexOf("/** The technical subgraph"));
  assert.doesNotMatch(path, /pills/);
  assert.match(path, /mode: "path"/);
  assert.match(studio, /mode === "subgraph" \|\| mode === "path"\) return null/);
  assert.match(path, /"Clear path"|clearPath: true/);
});

test("relationToFocus goes by chains of lines at any distance, not by column", () => {
  const lines = [["c0", "c1"], ["c1", "f"], ["f", "d1"], ["d1", "d2"], ["x", "d1"], ["c1", "y"], ["f", "l"], ["l", "f"], ["z", "z"]];
  const adjacency = {
    incoming: (id) => lines.filter(([, target]) => target === id).map(([source, target]) => ({ source, target })),
    outgoing: (id) => lines.filter(([source]) => source === id).map(([source, target]) => ({ source, target }))
  };
  const relation = relationToFocus("f", adjacency);
  assert.equal(relation("c0"), "parent", "A cause of a cause");
  assert.equal(relation("d2"), "child", "A dependent of a dependent");
  assert.equal(relation("l"), "both", "A cycle through the focus");
  assert.equal(relation("x"), "context", "A cause of a dependent is no dependent");
  assert.equal(relation("y"), "context", "A dependent of a cause is no cause");
  assert.equal(relation("z"), "context", "Nothing joins it");
  assert.deepEqual(reachableWithin("f", Infinity, "children", adjacency), new Set(["f", "d1", "d2", "l"]), "An unbounded walk ends");
});
