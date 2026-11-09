import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import { matchNames } from "../../apps/model-studio/graph-paths.js";
import { FakeElement, declarations } from "./model-studio-source.mjs";

const document = {
  createElement: (name) => new FakeElement(name),
  createElementNS: (_namespace, name) => new FakeElement(name)
};
const pageElements = () => new Proxy({}, {
  get(known, id) {
    known[id] ??= new FakeElement("div", { id });
    return known[id];
  }
});

/* ---------- The drawing of a card, a pill and a line ---------- */

function drawing(state = {}) {
  const elements = pageElements();
  const calls = { cards: [], pills: [], toggled: [] };
  const context = vm.createContext({
    document, elements, state: { mode: "causes", selectedId: null, selectedRelationId: null, ...state },
    SVG_NAMESPACE: "svg",
    GRAPH_NODE: { radius: 9, lineHeight: 16 },
    CARD_FOOTER: { lineHeight: 14 },
    activeGraphProjection: null,
    activeGraphInfo: null,
    keyboardInGraph: () => null,
    restoreGraphKeyboard() {},
    syncGraphRoving() {},
    ensureViewport: () => ({ setContent() {} }),
    matchMedia: () => ({ matches: true }),
    columnHeading: () => null,
    columnHeadingY: () => 0,
    displayName: (node) => node?.name,
    nodeSummary: (id) => ({ id, name: `Name of ${id}` }),
    plural: (count, singular) => `${count} ${singular}${count === 1 ? "" : "s"}`,
    prose: (text) => text,
    scalarLabel: (value) => String(value),
    isCauseEdge: () => true,
    cardFooter: () => ({ owner: [], facts: [], trailing: "" }),
    footerHeight: () => 0,
    wrapCardLabel: (text) => ({ lines: [text], truncated: false }),
    wrappedLines: (text) => ({ lines: [text], truncated: false }),
    bindGraphHighlight() {},
    graphCardNavigation() {},
    graphLineNavigation() {},
    inspectNode() {},
    focusNode() {},
    inspectRelation() {},
    toggleExpansion: (id) => calls.toggled.push(id)
  });
  vm.runInContext(declarations("svgElement", "drawNodeCard", "drawEdge", "cardStateWords", "markCurrent", "humanize", "evidenceShare"), context);
  return { context, elements, calls };
}

function layoutPage() {
  const { context, elements, calls } = drawing();
  vm.runInContext(declarations("drawLayout"), context);
  const realCard = context.drawNodeCard;
  context.drawNodeCard = (node, info, box) => {
    calls.cards.push({ id: node.id, pill: info.pill, kind: info.kind });
    return realCard(node, info, box);
  };
  context.drawExpansionPill = (box, pill, name) => {
    calls.pills.push({ id: box.id, pill, name });
    return new FakeElement("g", { class: "graph-pill" });
  };
  const nodes = [{ id: "a", name: "Name of a" }, { id: "b", name: "Name of b" }];
  const layout = {
    width: 400, height: 200, columns: [], edges: [],
    nodes: [{ id: "a", layer: 0, x: 0, y: 0, width: 200, height: 64 }, { id: "b", layer: 1, x: 300, y: 0, width: 200, height: 64 }]
  };
  const draw = (pills) => context.drawLayout(layout, { nodes, edges: [], info: new Map([["a", { kind: "k" }], ["b", {}]]), focusId: "a", mode: "causes", anchorId: "a", pills });
  return { draw, calls, elements };
}

test("a card that hides neighbours gets its pill, drawn over the cards, and is told about it", () => {
  const { draw, calls, elements } = layoutPage();
  const pill = { hidden: 2, expanded: false };
  draw(new Map([["b", pill]]));
  assert.deepEqual(calls.pills, [{ id: "b", pill, name: "Name of b" }], "Named by what the reader sees");
  assert.equal(calls.cards.find((card) => card.id === "b").pill, pill, "For its keys and its label");
  assert.equal(calls.cards.find((card) => card.id === "a").pill, undefined);
  assert.equal(calls.cards.find((card) => card.id === "a").kind, "k", "The rest of what is known of a card stays");
  assert.deepEqual(elements["graph-nodes"].children.map((child) => child.classes()[0]), ["graph-node", "graph-node", "graph-pill"]);
});

test("a view without pills draws cards alone", () => {
  const { draw, calls, elements } = layoutPage();
  draw(undefined);
  assert.deepEqual(calls.pills, []);
  assert.equal(elements["graph-nodes"].children.length, 2);
});

const card = (state, info = {}) => {
  const page = drawing(state);
  const group = page.context.drawNodeCard({ id: "a", name: "Name of a" }, { focus: false, ...info }, { x: 0, y: 0, width: 200, height: 64 });
  return { ...page, group };
};
const pressed = (group, key) => {
  const event = { key, prevented: false, preventDefault() { this.prevented = true; } };
  group.listeners.keydown[0](event);
  return event;
};

test("X on a card adds or removes its neighbours, and only a card with a pill listens", () => {
  for (const key of ["x", "X"]) {
    const { group, calls } = card({}, { pill: { hidden: 2, expanded: false } });
    assert.equal(pressed(group, key).prevented, true);
    assert.deepEqual(calls.toggled, ["a"]);
  }
  const { group, calls } = card();
  assert.equal(pressed(group, "x").prevented, false);
  assert.deepEqual(calls.toggled, []);
});

test("a card's label says what X will do, and says nothing when it would do nothing", () => {
  const label = (info) => card({}, info).group.getAttribute("aria-label");
  assert.match(label({ pill: { hidden: 2, expanded: false } }), /X adds 2 neighbours to the drawing\./);
  assert.match(label({ pill: { hidden: 0, expanded: true } }), /X removes the neighbours it added\./);
  assert.doesNotMatch(label({}), /\bX\b/);
});

test("a card's label says in words what its colours show", () => {
  const label = (state, info) => card(state, info).group.getAttribute("aria-label");
  const words = { focus: true, relation: "parent", status: "well-supported", evidence: { supported: 1, total: 2 } };
  assert.match(label({}, words), /^Name of a, focus card, cause, Well supported, 1 of 2 causes cite evidence\. /);
  assert.match(label({ mode: "records" }, { relation: "child" }), /^Name of a, linked from the focus\. /);
  assert.match(label({ pathTarget: "b" }, { focus: true, relation: "parent" }), /^Name of a, end of the path\. /, "On a path no card is a cause of the focus");
  assert.match(label({}, {}), /^Name of a\. /);
});

test("the selected card and the selected line are marked when drawn, and a selected line unmarks its card", () => {
  const selectedCard = (state) => card(state).group.getAttribute("data-selected");
  assert.equal(selectedCard({ selectedId: "a" }), "true");
  assert.equal(selectedCard({ selectedId: "b" }), "false");
  assert.equal(selectedCard({ selectedId: "a", selectedRelationId: "a>b" }), "false");
  const current = (state) => card(state).group.getAttribute("aria-current");
  assert.deepEqual([current({ selectedId: "a" }), current({ selectedId: "b" }), current({ selectedId: "a", selectedRelationId: "a>b" })], ["true", null, null], "A screen reader hears it too");
  const selectedLine = (state) => drawing(state).context.drawEdge(
    { id: "a>b", source: "a", target: "b" }, { path: "M0 0", arrow: { x: 0, y: 0, angle: 0 } }, "a"
  ).getAttribute("data-selected");
  assert.equal(selectedLine({ selectedRelationId: "a>b" }), "true");
  assert.equal(selectedLine({ selectedRelationId: "c>d" }), "false");
  assert.equal(selectedLine({}), "false");
});

test("choosing a card or a line marks it in place, and only it", () => {
  const elements = pageElements();
  const row = (attribute, id) => {
    const element = new FakeElement("g", { [attribute]: id });
    element.dataset[attribute === "data-node-id" ? "nodeId" : "edgeId"] = id;
    return element;
  };
  const [first, second] = [row("data-node-id", "a"), row("data-node-id", "b")];
  const [line, other] = [row("data-edge-id", "a>b"), row("data-edge-id", "c>d")];
  elements["graph-nodes"].append(first, second);
  elements["graph-edges"].append(line, other);
  const state = { mode: "causes", selectedId: "a", selectedRelationId: null, focusId: "a" };
  const context = vm.createContext({ elements, state, syncCatalogRoving() {}, syncTreeRoving() {}, syncGraphRoving() {}, markWorkSelection() {} });
  vm.runInContext(declarations("markSelection", "markCurrent"), context);
  context.markSelection();
  assert.deepEqual([first.dataset.selected, second.dataset.selected, line.dataset.selected, other.dataset.selected], ["true", "false", "false", "false"]);
  assert.deepEqual([first.getAttribute("aria-current"), second.getAttribute("aria-current")], ["true", null]);
  state.selectedRelationId = "a>b";
  context.markSelection();
  assert.deepEqual([first.dataset.selected, second.dataset.selected, line.dataset.selected, other.dataset.selected], ["false", "false", "true", "false"]);
  assert.equal(first.getAttribute("aria-current"), null);
});

/* ---------- The path picker ---------- */

const ARISINGS = [{ id: "arising:1.1", name: "Inflammation" }, { id: "arising:1.2", name: "Chronic inflammation" }, { id: "arising:2.1", name: "Fatigue" }];

function picker() {
  const elements = pageElements();
  const focused = [];
  const stageAfter = [];
  let shown = 0;
  const context = vm.createContext({
    document, elements, matchNames,
    state: { ontology: { arisings: ARISINGS } },
    focusNode: (...args) => focused.push(JSON.parse(JSON.stringify(args))),
    focusStage: () => stageAfter.push(focused.length),
    showViewOnNarrowPage: () => { shown += 1; }
  });
  vm.runInContext(declarations("createElement", "togglePathPicker", "pathPicker"), context);
  const opener = new FakeElement("button");
  context.togglePathPicker(opener, ARISINGS[0]);
  const root = elements["record-actions"].querySelector(".path-picker");
  const input = root?.querySelector("input");
  const list = root?.querySelector(".path-options");
  const type = (value) => {
    input.value = value;
    input.listeners.input[0]();
    return list.children.map((row) => row.textContent);
  };
  const press = (key) => input.listeners.keydown[0]({ key, preventDefault() {} });
  return { context, elements, opener, input, list, root, type, press, focused, stageAfter, shown: () => shown };
}

test("the picker offers arisings by name, never the arising it starts from", () => {
  const { type, input, list, root } = picker();
  const none = root.querySelector(".path-none");
  assert.deepEqual(type("inflam"), ["Chronic inflammation"], "Inflammation matches too, but a path to itself is no path");
  assert.deepEqual(type("fat"), ["Fatigue"]);
  assert.equal(input.getAttribute("aria-expanded"), "true");
  assert.equal(list.children[0].getAttribute("aria-selected"), "true");
  assert.equal(none.textContent, "");
  assert.deepEqual(type("nothing like it"), []);
  assert.equal(none.textContent, "No arising has that name.", "Said outside the list, by a status region that stays in the picker");
  assert.equal(none.getAttribute("role"), "status");
  assert.equal(input.getAttribute("aria-expanded"), "false");
  assert.equal(input.getAttribute("aria-activedescendant"), null);
});

test("choosing an arising opens the path to it in Causes, by click or by keyboard", () => {
  const clicked = picker();
  clicked.type("fat");
  clicked.list.children[0].fire("click");
  assert.deepEqual(clicked.focused, [["arising:1.1", { mode: "causes", path: "arising:2.1" }]]);
  assert.deepEqual(clicked.stageAfter, [], "A pointer has no keyboard to hand over");
  const keyed = picker();
  keyed.type("a");
  const names = keyed.list.children.map((row) => row.textContent);
  assert.ok(names.length >= 2);
  keyed.press("ArrowDown");
  assert.equal(keyed.list.children[1].getAttribute("aria-selected"), "true");
  keyed.press("Enter");
  assert.equal(keyed.focused[0][1].path, ARISINGS.find((item) => item.name === names[1]).id);
  assert.deepEqual(keyed.stageAfter, [1], "The keyboard lands on the stage once the path is open");
  assert.equal(keyed.shown(), 1, "Where the panels stack, the page goes to the drawing");
});

test("the Path button opens the picker with the cursor in it, and closes it again", () => {
  const { opener, elements, input, context } = picker();
  assert.equal(opener.getAttribute("aria-expanded"), "true");
  assert.equal(input.focused, true);
  assert.match(input.getAttribute("aria-label"), /^Path from Inflammation to$/);
  context.togglePathPicker(opener, ARISINGS[0]);
  assert.equal(elements["record-actions"].querySelector(".path-picker"), null);
  assert.equal(opener.getAttribute("aria-expanded"), "false");
});

test("Escape leaves the picker and returns to its button", () => {
  const { press, opener, elements } = picker();
  press("Escape");
  assert.equal(elements["record-actions"].querySelector(".path-picker"), null);
  assert.equal(opener.getAttribute("aria-expanded"), "false");
  assert.equal(opener.focused, true);
});
