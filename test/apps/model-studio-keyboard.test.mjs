import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import {
  arrowDirection, firstCard, nearestInDirection, nextInCycle, orderedCardLines, rovingEntry, rovingStep, treeKeyAction
} from "../../apps/model-studio/keyboard-nav.js";
import { constant } from "./model-studio-source.mjs";

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), "utf8");
const studio = await read("apps/model-studio/model-studio.js");
const page = await read("apps/model-studio/index.html");
const styles = await read("assets/css/model-studio-workbench.css");
const readme = await read("apps/model-studio/README.md");

const functionBody = (name) => {
  const start = studio.indexOf(`\nfunction ${name}(`);
  assert.notEqual(start, -1, `${name} exists`);
  const end = studio.slice(start + 1).search(/\n(async )?function /);
  return studio.slice(start, start + 1 + end);
};

/** Run named Studio functions against stubs, and hand them back. */
const load = (names, globals = {}, setup = "") => vm.runInNewContext(`${setup}\n${names.map(functionBody).join("\n")}\n({ ${names.join(", ")} });`, globals);

/** Something that holds a tabindex, as a card, a tile or a row does. */
const stop = (fields = {}) => ({
  dataset: {}, tabindex: "-1", focused: 0, clicked: 0,
  getAttribute(name) { return name === "tabindex" ? this.tabindex : null; },
  setAttribute(name, value) { if (name === "tabindex") this.tabindex = value; },
  focus() { this.focused += 1; },
  click() { this.clicked += 1; },
  ...fields
});
const pressed = (key, fields = {}) => ({ key, prevented: 0, preventDefault() { this.prevented += 1; }, ...fields });
const stops = (items) => items.filter((item) => item.tabindex === "0");

const card = (id, x, y, width = 200, height = 60) => ({ id, x, y, width, height });
// Three columns: causes on the left, the focus in the middle, dependents on the right.
const DRAWING = [
  card("cause-top", 100, 100), card("cause-mid", 100, 180), card("cause-low", 100, 300),
  card("focus", 400, 190),
  card("dep-top", 700, 120), card("dep-low", 700, 260)
];

test("an arrow key names a direction and no other key does", () => {
  assert.deepEqual(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].map(arrowDirection), ["left", "right", "up", "down"]);
  assert.equal(arrowDirection("Home"), null);
  assert.equal(arrowDirection("e"), null);
});

test("the nearest card lies in the direction of the key", () => {
  assert.equal(nearestInDirection(DRAWING, "focus", "left"), "cause-mid");
  assert.equal(nearestInDirection(DRAWING, "focus", "right"), "dep-top");
  assert.equal(nearestInDirection(DRAWING, "cause-top", "down"), "cause-mid");
  assert.equal(nearestInDirection(DRAWING, "cause-mid", "down"), "cause-low");
  assert.equal(nearestInDirection(DRAWING, "cause-mid", "up"), "cause-top");
});

test("a card beside this one is not above or below it, and an edge of the drawing goes nowhere", () => {
  assert.equal(nearestInDirection(DRAWING, "cause-top", "left"), null);
  assert.equal(nearestInDirection(DRAWING, "dep-low", "right"), null);
  assert.equal(nearestInDirection(DRAWING, "focus", "up"), "dep-top", "the only card clearly higher");
  const row = [card("a", 100, 100), card("b", 400, 110)];
  assert.equal(nearestInDirection(row, "a", "down"), null);
  assert.equal(nearestInDirection(row, "b", "up"), null);
});

test("the next card in a column wins over a closer card out of line", () => {
  const boxes = [card("here", 100, 100), card("below", 100, 400), card("beside-lower", 400, 190)];
  assert.equal(nearestInDirection(boxes, "here", "down"), "below");
});

test("an unknown start or an empty drawing finds nothing", () => {
  assert.equal(nearestInDirection(DRAWING, "missing", "left"), null);
  assert.equal(nearestInDirection([], "focus", "left"), null);
});

test("the table moves by the tile grid, across cells too", () => {
  const tile = (id, x, y) => card(id, x, y, 24, 24);
  const tiles = [tile("a", 12, 12), tile("b", 40, 12), tile("c", 12, 40), tile("d", 100, 12), tile("e", 12, 120)];
  assert.equal(nearestInDirection(tiles, "a", "right"), "b");
  assert.equal(nearestInDirection(tiles, "b", "right"), "d");
  assert.equal(nearestInDirection(tiles, "a", "down"), "c");
  assert.equal(nearestInDirection(tiles, "c", "down"), "e");
  assert.equal(nearestInDirection(tiles, "c", "up"), "a");
});

test("a list key moves along its own orientation", () => {
  assert.equal(rovingStep(5, 2, "ArrowDown"), 3);
  assert.equal(rovingStep(5, 2, "ArrowUp"), 1);
  assert.equal(rovingStep(5, 2, "ArrowRight"), null);
  assert.equal(rovingStep(5, 2, "ArrowRight", { orientation: "horizontal" }), 3);
  assert.equal(rovingStep(5, 2, "ArrowDown", { orientation: "horizontal" }), null);
  assert.equal(rovingStep(5, 2, "Home"), 0);
  assert.equal(rovingStep(5, 2, "End"), 4);
  assert.equal(rovingStep(5, 2, "Enter"), null);
  assert.equal(rovingStep(0, 0, "ArrowDown"), null);
});

test("a list stops at its ends, a row of controls wraps", () => {
  assert.equal(rovingStep(3, 2, "ArrowDown"), 2);
  assert.equal(rovingStep(3, 0, "ArrowUp"), 0);
  assert.equal(rovingStep(3, 2, "ArrowRight", { orientation: "horizontal", wrap: true }), 0);
  assert.equal(rovingStep(3, 0, "ArrowLeft", { orientation: "horizontal", wrap: true }), 2);
});

test("the Tab stop goes to the first preferred item present, or else the first", () => {
  assert.equal(rovingEntry(["a", "b", "c"], ["c", "b"]), 2);
  assert.equal(rovingEntry(["a", "b", "c"], ["z", "b"]), 1);
  assert.equal(rovingEntry(["a", "b", "c"], [null, undefined]), 0);
  assert.equal(rovingEntry(["a", "b"]), 0);
  assert.equal(rovingEntry([], ["a"]), -1);
});

test("the tree follows the tree pattern", () => {
  const rows = [
    { depth: 0, expandable: true, expanded: true },
    { depth: 1, expandable: true, expanded: true },
    { depth: 2, expandable: false, expanded: false },
    { depth: 2, expandable: false, expanded: false },
    { depth: 1, expandable: true, expanded: false },
    { depth: 0, expandable: true, expanded: false }
  ];
  assert.deepEqual(treeKeyAction(rows, 2, "ArrowDown"), { move: 3 });
  assert.deepEqual(treeKeyAction(rows, 2, "ArrowUp"), { move: 1 });
  assert.deepEqual(treeKeyAction(rows, 5, "ArrowDown"), { move: 5 });
  assert.deepEqual(treeKeyAction(rows, 3, "Home"), { move: 0 });
  assert.deepEqual(treeKeyAction(rows, 3, "End"), { move: 5 });
  assert.deepEqual(treeKeyAction(rows, 4, "ArrowRight"), { toggle: true }, "Right opens a closed group");
  assert.deepEqual(treeKeyAction(rows, 1, "ArrowRight"), { move: 2 }, "Right enters an open group");
  assert.equal(treeKeyAction(rows, 2, "ArrowRight"), null, "A leaf has nothing to open");
  assert.deepEqual(treeKeyAction(rows, 1, "ArrowLeft"), { toggle: true }, "Left closes an open group");
  assert.deepEqual(treeKeyAction(rows, 4, "ArrowLeft"), { move: 0 }, "Left goes from a closed group to its parent");
  assert.deepEqual(treeKeyAction(rows, 3, "ArrowLeft"), { move: 1 }, "Left goes from a leaf to its parent");
  assert.equal(treeKeyAction(rows, 5, "ArrowLeft"), null, "A closed top group has no parent");
  assert.equal(treeKeyAction(rows, 2, "x"), null);
  assert.equal(treeKeyAction(rows, 9, "ArrowDown"), null);
  assert.equal(treeKeyAction([{ depth: 0, expandable: true, expanded: true }], 0, "ArrowRight"), null, "An open group without rows goes nowhere");
});

test("a card's lines come in reading order and only its own", () => {
  const place = new Map(DRAWING.map((box) => [box.id, box]));
  const edges = [
    { id: "to-dep-low", source: "focus", target: "dep-low" },
    { id: "elsewhere", source: "cause-top", target: "cause-mid" },
    { id: "from-mid", source: "cause-mid", target: "focus" },
    { id: "from-top", source: "cause-top", target: "focus" },
    { id: "to-dep-top", source: "focus", target: "dep-top" }
  ];
  assert.deepEqual(orderedCardLines(edges, "focus", (id) => place.get(id)), ["from-top", "from-mid", "to-dep-top", "to-dep-low"]);
  assert.deepEqual(orderedCardLines(edges, "dep-top", (id) => place.get(id)), ["to-dep-top"]);
  assert.deepEqual(orderedCardLines(edges, "missing", (id) => place.get(id)), []);
});

test("E walks a card's lines in a cycle, Shift+E walks back", () => {
  assert.equal(nextInCycle(["a", "b", "c"], null), "a");
  assert.equal(nextInCycle(["a", "b", "c"], null, true), "c");
  assert.equal(nextInCycle(["a", "b", "c"], "a"), "b");
  assert.equal(nextInCycle(["a", "b", "c"], "c"), "a");
  assert.equal(nextInCycle(["a", "b", "c"], "a", true), "c");
  assert.equal(nextInCycle(["a", "b", "c"], "missing"), "a");
  assert.equal(nextInCycle([], "a"), null);
});

test("a graph is one Tab stop: cards rove, lines and pills are not stops", () => {
  const cards = functionBody("drawNodeCard");
  assert.match(cards, /class: "graph-node",[\s\S]*?tabindex: "-1"/);
  assert.match(cards, /graphCardNavigation\(event, node\.id\)/);
  const lines = functionBody("drawEdge");
  assert.match(lines, /class: "graph-edge",[\s\S]*?tabindex: "-1"/);
  assert.match(lines, /graphLineNavigation\(event, edge\)/);
  assert.match(functionBody("drawLayout"), /syncGraphRoving\(\);\s*restoreGraphKeyboard\(kept\);/);
  const stop = functionBody("syncGraphRoving");
  assert.match(stop, /\[state\.selectedId, focus, firstCard\(/, "The selected card first, then the focus card");
  // Chromium makes an SVG element with a focus listener a Tab stop.
  const pill = functionBody("drawExpansionPill");
  assert.doesNotMatch(pill, /tabindex/);
  assert.doesNotMatch(pill, /bindGraphHighlight/);
  assert.doesNotMatch(studio, /elements\["graph-(nodes|edges)"\]\.addEventListener\("focus/);
});

test("a widget has one Tab stop, whichever item the reader is on", () => {
  const { setRovingStop } = load(["setRovingStop"]);
  const items = [stop(), stop({ tabindex: "0" }), stop()];
  setRovingStop(items, items[2]);
  assert.deepEqual(items.map((item) => item.tabindex), ["-1", "-1", "0"]);
  const graph = (selectedId, active = null) => {
    const cards = ["cause-top", "focus", "dep-top"].map((nodeId) => stop({ dataset: { nodeId, focus: String(nodeId === "focus") } }));
    const { syncGraphRoving } = load(["syncGraphRoving", "setRovingStop"], {
      state: { selectedId }, rovingEntry, firstCard, activeGraphInfo: { layout: { nodes: DRAWING } },
      document: { activeElement: { closest: () => (active ? cards.find((item) => item.dataset.nodeId === active) : null) } },
      elements: { "graph-nodes": { querySelectorAll: () => cards } }
    });
    syncGraphRoving();
    return stops(cards).map((item) => item.dataset.nodeId);
  };
  assert.deepEqual(graph("dep-top"), ["dep-top"], "The selected card first");
  assert.deepEqual(graph("not drawn"), ["focus"], "Then the focus card");
  assert.deepEqual(graph("dep-top", "cause-top"), ["cause-top"], "The card the keyboard is on keeps the stop");
});

test("the table, Open work and the tree have one Tab stop each, on the selected item", () => {
  const items = ["a", "b", "c"].map((nodeId) => stop({ dataset: { nodeId }, classList: { contains: () => false } }));
  const common = { state: { selectedId: "b", focusId: "a", selectedRelationId: null }, rovingEntry, document: { activeElement: null } };
  load(["syncTableRoving", "setRovingStop"], { ...common, elements: { "arising-table": { querySelectorAll: () => items } } }).syncTableRoving();
  assert.deepEqual(stops(items).map((item) => item.dataset.nodeId), ["b"]);
  items[1].tabindex = "-1";
  load(["syncWorkRoving", "setRovingStop"], { ...common, state: { selectedId: "c", selectedRelationId: null }, elements: { "open-work-panel": { querySelectorAll: () => items } } }).syncWorkRoving();
  assert.deepEqual(stops(items).map((item) => item.dataset.nodeId), ["c"]);
  items[2].tabindex = "-1";
  load(["syncTreeRoving", "setRovingStop"], {
    ...common, state: { selectedId: "a" }, nodeSummary: () => null, visibleTreeRows: () => items,
    elements: { "ontology-tree": { querySelectorAll: () => items } }
  }).syncTreeRoving();
  assert.deepEqual(stops(items).map((item) => item.dataset.nodeId), ["a"]);
});

test("on a card the arrows move, Home goes to the focus card or else the first, E goes along its lines", () => {
  const run = (key, { id = "focus", focusCard = "focus", ...fields } = {}) => {
    const calls = [];
    const { graphCardNavigation } = load(["graphCardNavigation"], {
      arrowDirection, nearestInDirection, firstCard, activeGraphInfo: { layout: { nodes: DRAWING } },
      elements: { "graph-nodes": { querySelector: () => (focusCard ? { dataset: { nodeId: focusCard } } : null) } },
      focusGraphCard: (card) => calls.push(card), stepCardLines: (...args) => calls.push(args)
    });
    const event = pressed(key, fields);
    graphCardNavigation(event, id);
    return { calls, prevented: event.prevented };
  };
  assert.deepEqual(run("ArrowLeft"), { calls: ["cause-mid"], prevented: 1 });
  assert.deepEqual(run("ArrowRight"), { calls: ["dep-top"], prevented: 1 });
  assert.deepEqual(run("ArrowLeft", { id: "cause-top" }), { calls: [], prevented: 1 }, "At the edge of the drawing the page does not scroll");
  assert.deepEqual(run("Home", { id: "dep-low" }), { calls: ["focus"], prevented: 1 });
  assert.deepEqual(run("Home", { id: "dep-low", focusCard: null }), { calls: ["cause-top"], prevented: 1 });
  assert.deepEqual(run("e"), { calls: [["focus", null, undefined]], prevented: 1 });
  assert.deepEqual(run("E", { shiftKey: true }), { calls: [["focus", null, true]], prevented: 1 });
  assert.deepEqual(run("ArrowLeft", { metaKey: true }), { calls: [], prevented: 0 }, "The browser's own keys stay its own");
  assert.deepEqual(run("q"), { calls: [], prevented: 0 });
});

test("on a line Escape and Home return to its card and E goes on", () => {
  const run = (key, keyboardLineCard = "from", fields = {}) => {
    const calls = [];
    const { graphLineNavigation } = load(["graphLineNavigation"], {
      keyboardLineCard, focusGraphCard: (card) => calls.push(card), stepCardLines: (...args) => calls.push(args)
    });
    const event = pressed(key, fields);
    graphLineNavigation(event, { id: "line", source: "from", target: "to" });
    return { calls, prevented: event.prevented };
  };
  assert.deepEqual(run("Escape"), { calls: ["from"], prevented: 1 });
  assert.deepEqual(run("Home"), { calls: ["from"], prevented: 1 });
  assert.deepEqual(run("Escape", "elsewhere"), { calls: ["to"], prevented: 1 }, "A line reached without E returns to the card it points at");
  assert.deepEqual(run("e"), { calls: [["from", "line", undefined]], prevented: 1 });
  assert.deepEqual(run("Escape", "from", { ctrlKey: true }), { calls: [], prevented: 0 });
});

test("in the table Space and Shift+Enter open the causes, the arrows move by what is drawn", () => {
  const tile = (nodeId, left, top) => stop({ dataset: { nodeId }, getBoundingClientRect: () => ({ left, top, width: 24, height: 24 }) });
  const run = (key, fields = {}) => {
    const chips = [tile("a", 0, 0), tile("b", 40, 0), tile("c", 0, 40)];
    const calls = [];
    const { tableGridKeydown } = load(["tableGridKeydown"], {
      arrowDirection, nearestInDirection, rovingStep,
      focusNode: (...args) => calls.push(JSON.parse(JSON.stringify(args))), focusStage: () => calls.push("stage")
    });
    const event = pressed(key, { target: { closest: () => chips[0] }, currentTarget: { querySelectorAll: () => chips }, ...fields });
    tableGridKeydown(event);
    return { calls, moved: chips.filter((chip) => chip.focused).map((chip) => chip.dataset.nodeId), prevented: event.prevented };
  };
  const opened = { calls: [["a", { mode: "causes" }], "stage"], moved: [], prevented: 1 };
  assert.deepEqual(run(" "), opened);
  assert.deepEqual(run("Enter", { shiftKey: true }), opened);
  assert.deepEqual(run("Enter"), { calls: [], moved: [], prevented: 0 }, "Enter is the chip's own click");
  assert.deepEqual(run("ArrowRight"), { calls: [], moved: ["b"], prevented: 1 });
  assert.deepEqual(run("ArrowDown"), { calls: [], moved: ["c"], prevented: 1 });
  assert.deepEqual(run("End"), { calls: [], moved: ["c"], prevented: 1 });
  assert.deepEqual(run(" ", { metaKey: true }), { calls: [], moved: [], prevented: 0 });
});

test("in the tree Enter inspects a leaf, Space and Shift+Enter open its causes, and a group opens", () => {
  const row = (fields = {}) => stop({ parentElement: { closest: () => null }, classList: { contains: () => false }, dataset: { nodeId: "leaf" }, ...fields });
  const run = (key, { group = false, ...fields } = {}) => {
    const titleRow = stop();
    const item = row(group ? { classList: { contains: (name) => name === "tree-group" }, querySelector: () => titleRow, getAttribute: () => "false" } : {});
    const next = row({ dataset: { nodeId: "next" } });
    const calls = [];
    const { treeKeydown } = load(["treeKeydown"], {
      treeKeyAction, visibleTreeRows: () => [item, next], focusNode: (...args) => calls.push(JSON.parse(JSON.stringify(args)))
    });
    const event = pressed(key, { target: { closest: () => item }, ...fields });
    treeKeydown(event);
    return { calls, clicked: item.clicked, opened: titleRow.clicked, moved: next.focused, prevented: event.prevented };
  };
  assert.deepEqual(run("Enter"), { calls: [], clicked: 1, opened: 0, moved: 0, prevented: 1 });
  assert.deepEqual(run(" "), { calls: [["leaf", { mode: "causes" }]], clicked: 0, opened: 0, moved: 0, prevented: 1 });
  assert.deepEqual(run("Enter", { shiftKey: true }), { calls: [["leaf", { mode: "causes" }]], clicked: 0, opened: 0, moved: 0, prevented: 1 });
  assert.deepEqual(run("Enter", { group: true }), { calls: [], clicked: 0, opened: 1, moved: 0, prevented: 1 });
  assert.deepEqual(run("ArrowDown"), { calls: [], clicked: 0, opened: 0, moved: 1, prevented: 1 });
  assert.deepEqual(run("ArrowRight", { group: true }), { calls: [], clicked: 0, opened: 1, moved: 0, prevented: 1 });
  assert.deepEqual(run("q"), { calls: [], clicked: 0, opened: 0, moved: 0, prevented: 0 });
});

test("a graph's keys: arrows, Home, E and Escape", () => {
  const navigation = functionBody("graphCardNavigation");
  assert.match(navigation, /nearestInDirection\(activeGraphInfo\?\.layout\.nodes/);
  assert.match(navigation, /event\.key === "Home"/);
  assert.match(navigation, /stepCardLines\(id, null, event\.shiftKey\)/);
  const line = functionBody("graphLineNavigation");
  assert.match(line, /event\.key === "Escape"/);
  assert.match(line, /stepCardLines\(card, edge\.id, event\.shiftKey\)/);
  assert.match(functionBody("revealGraphBoxes"), /readableScale: graphViewport\.scale/, "Moving pans and never zooms");
});

test("Home has a target in a drawing without a focus card: the top of its leftmost column", () => {
  assert.equal(firstCard(DRAWING), "cause-top");
  assert.equal(firstCard([card("b", 100, 200), card("a", 100, 80), card("c", 40, 500)]), "c");
  assert.equal(firstCard([]), null);
  assert.match(functionBody("graphCardNavigation"), /focus \?\? firstCard\(/);
});

test("the footer offers X only on a card with a pill and names where Home goes", () => {
  const hint = ({ pill = null, focus = true, pathTarget = null }) => {
    const { cardKeyHint } = load(["cardKeyHint"], {
      state: { pathTarget }, CSS: { escape: String },
      elements: { "graph-nodes": { querySelector: (selector) => (selector.includes("graph-pill") ? pill : focus ? {} : null) } }
    });
    return cardKeyHint({ dataset: { nodeId: "card" } });
  };
  assert.doesNotMatch(hint({}), /X:/);
  assert.match(hint({ pill: { dataset: { expanded: "false" } } }), /X: expand/);
  assert.match(hint({ pill: { dataset: { expanded: "true" } } }), /X: collapse/);
  assert.match(hint({}), /Home: focus card$/);
  assert.match(hint({ focus: false }), /Home: first card$/, "A subgraph has no focus card");
  assert.match(hint({ pathTarget: "other" }), /Home: first card$/, "A path marks both ends and Home takes the left one, the focus or not");
  assert.doesNotMatch(studio, /"\.graph-node", "Arrows/);
});

test("a control redrawn under the keyboard hands it on: to the stage, or to the inspector", () => {
  const landing = functionBody("bindKeyboardLanding");
  assert.match(landing, /event\.detail === 0/, "A pointer's click is left alone");
  assert.match(landing, /active !== document\.body && !standIn && active\.getClientRects\(\)\.length/, "A control that keeps its focus is left alone");
  assert.match(landing, /control\.closest\("\.back-to-record"\) \? state\.selectedRelationId : null/, "Only Back to looks for the badge");
  assert.match(functionBody("renderRelationInspector"), /backToRecord\.classList\.add\("back-to-record"\);/);
  assert.match(landing, /#record-actions, #graph-message/);
  assert.match(functionBody("landInInspector"), /cause-badge\[data-relation-id=/);
  assert.match(functionBody("pathPicker"), /choose\(options\[active\]\);\s+focusStage\(\);/);
  assert.match(page, /<h3 id="selected-name" tabindex="-1">/);
  assert.match(functionBody("renderRelationInspector"), /title\.tabIndex = -1;/);
});

test("print leaves the expansion pills out, as the export does", () => {
  const print = styles.slice(styles.indexOf("@media print"));
  assert.match(print.slice(0, print.indexOf("display: none !important")), /\.graph-pill/);
});

test("drawing anew keeps the keyboard in the graph, a pointer's focus does not count", () => {
  assert.match(functionBody("keyboardInGraph"), /:focus-visible/);
  assert.match(functionBody("drawLayout"), /const kept = keyboardInGraph\(\);/);
});

test("the tree, the search results, the table and Open work are one Tab stop each", () => {
  assert.match(functionBody("treeGroup"), /group\.tabIndex = -1;\s*row\.tabIndex = -1;/);
  assert.match(functionBody("treeLeaf"), /leaf\.tabIndex = -1;/);
  assert.match(functionBody("catalogItem"), /button\.tabIndex = -1;/);
  assert.match(functionBody("buildArisingTable"), /chip\.tabIndex = -1;/);
  assert.match(functionBody("workRow"), /row\.tabIndex = -1;/);
  assert.match(functionBody("markSelection"), /syncCatalogRoving\(\);\s*syncTreeRoving\(\);\s*syncGraphRoving\(\);/);
  assert.match(functionBody("updateArisingTable"), /syncTableRoving\(\);/);
  assert.match(functionBody("markWorkSelection"), /syncWorkRoving\(\);/);
  assert.match(functionBody("tableGridKeydown"), /nearestInDirection\(boxes, chip\.dataset\.nodeId, direction\)/);
  assert.match(functionBody("treeKeydown"), /treeKeyAction\(/);
});

test("the rows of controls before the graph are one Tab stop each", () => {
  assert.match(page, /class="graph-controls" role="toolbar" aria-label="Graph controls" data-roving="horizontal"/);
  assert.match(page, /id="view-tabs"[^>]*data-roving="horizontal"/);
  assert.match(page, /id="navigator-group"[^>]*data-roving="horizontal"[^>]*data-roving-selects/);
  assert.match(page, /class="menubar"[^>]*data-roving="horizontal"/);
  assert.match(functionBody("tableLegend"), /legend\.dataset\.roving = "horizontal";/);
  assert.match(functionBody("tableIntro"), /intro\.dataset\.roving = "horizontal";/);
  assert.match(functionBody("workSummary"), /bars\.dataset\.roving = "vertical";/);
  assert.match(functionBody("workControls"), /sections\.dataset\.roving = "horizontal";/);
  assert.match(functionBody("updateControls"), /syncRovingGroups\(\);/);
  assert.match(functionBody("rovingKeydown"), /rovingStep\(items\.length, items\.indexOf\(event\.target\), event\.key, \{ orientation: group\.dataset\.roving, wrap: true \}\)/);
});

test("the keyboard is never left on the page after a control goes away", () => {
  assert.match(functionBody("renderOpenWork"), /list\.querySelectorAll\("\.work-row"\)\[before\]\?\.focus\(\);/);
  assert.match(functionBody("renderOpenWork"), /\[data-work-control="filter-Level"\]/);
  assert.match(functionBody("tableIntro"), /visibleRovingItems\(legend\)\[0\]\?\.focus/);
});

test("the skip link goes into the stage and leaves the address alone, from the moment the module runs", () => {
  assert.doesNotMatch(functionBody("bindKeyboard"), /skip-link/, "Bound once, not when the first model opens");
  const listeners = {};
  const calls = [];
  load(["bindSkipLink"], {
    document: { querySelector: (selector) => (selector === ".skip-link" ? { addEventListener: (type, listener) => { listeners[type] = listener; } } : null) },
    focusStage: () => calls.push("stage")
  }).bindSkipLink();
  listeners.click({ preventDefault: () => calls.push("address left alone") });
  assert.deepEqual(calls, ["address left alone", "stage"]);
  assert.match(studio, /\ncollapseNavigatorOnNarrowScreen\(\);\nrestorePreferences\(\);\nbindSkipLink\(\);\n\nasync function start\(\)/, "Before start() waits for the registry");
  assert.match(page, /class="graph-stage" aria-label="Graph" tabindex="-1"/);
});

test("the stage takes the keyboard on the stop of the view it shows, or itself while it has none", () => {
  const target = (name, graphNode = false) => ({ name, focused: 0, dataset: { nodeId: name }, classList: { contains: (value) => graphNode && value === "graph-node" }, focus() { this.focused += 1; } });
  const run = (mode, present) => {
    const items = {
      '.graph-node[tabindex="0"]': target("the card holding the stop", true),
      ".graph-node": target("the first card", true),
      '.arising-chip[tabindex="0"]': target("the tile holding the stop"),
      '.work-row[tabindex="0"]': target("the row holding the stop"),
      "[data-work-control]": target("the first control of Open work")
    };
    const stage = target("the stage itself");
    stage.querySelector = (selector) => (present.includes(selector) ? items[selector] : null);
    const cards = [];
    let cleared = 0;
    load(["focusStage"], {
      state: { mode }, elements: { "neighborhood-graph": { closest: () => stage } },
      focusGraphCard: (id) => cards.push(id), clearGraphHighlight: () => { cleared += 1; }
    }).focusStage();
    return { landed: [...cards, ...[...Object.values(items), stage].filter((item) => item.focused).map((item) => item.name)], cleared };
  };
  const everything = ['.graph-node[tabindex="0"]', ".graph-node", '.arising-chip[tabindex="0"]', '.work-row[tabindex="0"]', "[data-work-control]"];
  assert.deepEqual(run("causes", everything).landed, ["the card holding the stop"], "Not merely the first card");
  assert.deepEqual(run("subgraph", [".graph-node"]).landed, ["the stage itself"], "No stop drawn yet");
  assert.deepEqual(run("table", everything).landed, ["the tile holding the stop"]);
  assert.deepEqual(run("work", everything).landed, ["the row holding the stop"]);
  assert.deepEqual(run("work", ["[data-work-control]"]).landed, ["the first control of Open work"], "A list with no rows");
  assert.equal(run("causes", everything).cleared, 1, "The card's own highlight waits until the keyboard moves");
});

test("in the inspector, Back to returns to the badge in the record, and anything else to the heading of what opened", () => {
  const run = ({ relation = null, inRelation = false, listed = true }) => {
    const target = (name) => ({ name, focused: 0, focus() { this.focused += 1; } });
    const heading = target("record heading");
    const title = target("relation heading");
    const badge = target("badge in the record");
    const decoy = target("badge in the relation inspector");
    load(["landInInspector"], {
      CSS: { escape: (value) => value },
      elements: {
        "selected-name": heading,
        "relation-inspector": { hidden: !inRelation, querySelector: (selector) => (selector === "h3" ? title : decoy) },
        "record-inspector": { querySelector: (selector) => (listed && selector === '.cause-badge[data-relation-id="line"]' ? badge : null) }
      }
    }).landInInspector(relation);
    return [heading, title, badge, decoy].filter((item) => item.focused).map((item) => item.name);
  };
  assert.deepEqual(run({ relation: "line" }), ["badge in the record"], "Back to");
  assert.deepEqual(run({ relation: "line", listed: false }), ["record heading"], "A record that lists no badge for the line");
  assert.deepEqual(run({}), ["record heading"], "A row that opened a record");
  assert.deepEqual(run({ inRelation: true }), ["relation heading"], "A badge that opened a relation");
  assert.deepEqual(run({ relation: "line", inRelation: true }), ["relation heading"], "A relation opened from another");
});

test("the Map's readout follows keyboard focus and a click stays out of it", () => {
  const focusin = functionBody("tableGridFocusin");
  assert.match(focusin, /:focus-visible/);
  assert.match(focusin, /state\.tablePreviewId = chip\.dataset\.nodeId;\s*updateArisingTable\(\);/);
  assert.match(functionBody("buildArisingTable"), /grid\.addEventListener\("focusin", tableGridFocusin\)/);
});

test("the ring is for the keyboard: a clicked card or line shows no browser rectangle", () => {
  assert.match(styles, /\.graph-node:focus, \.graph-edge:focus, \.tree-group:focus \{ outline: none; \}/);
  assert.match(styles, /\.graph-node:focus-visible rect\.node-card \{ stroke: var\(--blue-bright\); stroke-width: 3;/);
  assert.match(styles, /\.graph-edge:focus-visible \.edge-hit \{ stroke:/);
  assert.match(styles, /\.tree-group:focus-visible > \.tree-row \{ outline: 2px solid/);
  assert.doesNotMatch(styles, /\.graph-node:focus rect\.node-card/);
});

test("the footer names the keys of the widget for the keyboard, and stays empty for a pointer", () => {
  const run = (keyboard, within) => {
    const footer = { hidden: false, textContent: "was here" };
    const { updateKeyHint } = load(["updateKeyHint", "cardKeyHint"], {
      state: {}, CSS: { escape: String }, elements: { "graph-keys": footer, "graph-nodes": { querySelector: () => null } }
    }, constant("KEY_HINTS"));
    updateKeyHint({
      matches: (selector) => selector === ":focus-visible" && keyboard,
      closest: (selector) => (selector === within ? { dataset: { nodeId: "card" } } : null)
    });
    return footer;
  };
  assert.match(run(true, ".graph-node").textContent, /^Arrows: move/);
  assert.equal(run(true, ".graph-node").hidden, false);
  assert.match(run(true, "#ontology-tree").textContent, /^Up, Down: move .* Right: open/);
  assert.match(run(true, ".arising-grid").textContent, /Space: open its causes$/);
  assert.match(run(true, ".graph-edge").textContent, /^E: next line/);
  for (const within of [".graph-node", "#ontology-tree", ".graph-edge"]) {
    assert.deepEqual({ ...run(false, within) }, { hidden: true, textContent: "" }, within);
  }
  assert.deepEqual({ ...run(true, "nothing with keys") }, { hidden: true, textContent: "" });
});

test("the arising a technical record belongs to is one Tab stop away", () => {
  const made = [];
  const inspected = [];
  const elements = new Proxy({}, { get: (target, key) => target[key] ??= { dataset: {}, replaceChildren(...children) { this.children = children; }, append() {} } });
  const owner = { id: "arising", name: "Inflammation" };
  const { renderHeader } = load(["renderHeader", "tag"], {
    elements, state: { ontology: {} }, isArising: (node) => node === owner, recordKind: () => "process", humanize: String, domainOf: () => ({ index: 2 }),
    nodeSummary: () => owner, inspectNode: (id) => inspected.push(id), String,
    document: { createTextNode: String },
    createElement: (name, className, text) => {
      const element = { name, className, text, dataset: {}, addEventListener(type, handler) { this[type] = handler; } };
      made.push(element);
      return element;
    }
  });
  renderHeader({ id: "record", arisingId: "arising", typeRole: "scoped-process" });
  const chip = elements["selected-tags"].children.at(-1);
  assert.deepEqual([chip.name, chip.type, chip.className, chip.dataset.tone, chip.text], ["button", "button", "node-tag", "link", "in Inflammation"]);
  chip.click();
  assert.deepEqual(inspected, ["arising"]);
  assert.match(styles, /\.node-tag\[data-tone="link"\] \{ background: none;/, "It looks like the tags beside it");
});

test("the footer names the keys of the widget, the guide and the README list them", () => {
  assert.match(page, /<p id="graph-keys" hidden><\/p>/);
  assert.match(studio, /"graph-hint", "graph-keys"/);
  assert.match(functionBody("updateKeyHint"), /:focus-visible/);
  const guide = functionBody("renderGuide");
  for (const key of ["Tab", "Arrow keys", "Enter", "Space, Shift + Enter", "Home", "E, Shift + E", "Right, Left in the tree", "[  ]"]) {
    assert.ok(guide.includes(`["${key}"`), key);
  }
  assert.match(readme, /Keyboard/);
  assert.match(readme, /one Tab stop/);
});
