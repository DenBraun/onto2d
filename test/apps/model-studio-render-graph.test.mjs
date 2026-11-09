import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import { expandGraph, reachableWithin, relationToFocus } from "../../apps/model-studio/graph-expansion.js";
import { causalOrderLayers, layoutLayeredGraph, neighbourhoodLayers } from "../../apps/model-studio/graph-layout.js";
import { FakeElement, declarations, studio } from "./model-studio-source.mjs";

const FUNCTIONS = ["renderGraph", "graphAdjacency", "leftOut", "buildGraphIndex"];
const edge = (source, target) => ({ id: `${source}>${target}`, source, target });
// c0 -> c1 -> f -> d1 -> d2, with c1 -> x and y -> d1 beyond the view.
const ALL = [edge("c1", "f"), edge("f", "d1"), edge("c0", "c1"), edge("c1", "x"), edge("d1", "d2"), edge("y", "d1")];
const BASE = [
  { id: "f", relation: "focus", upstreamDistance: 0, downstreamDistance: 0 },
  { id: "c1", relation: "parent", upstreamDistance: 1, downstreamDistance: Infinity },
  { id: "d1", relation: "child", upstreamDistance: Infinity, downstreamDistance: 1 }
];
const withName = (id) => ({ id, name: `Name of ${id}`, layer: "arisings", typeRole: "state", level: 5 });

function indexOf(edges) {
  const incoming = new Map();
  const outgoing = new Map();
  for (const item of edges) {
    incoming.set(item.target, [...(incoming.get(item.target) ?? []), item]);
    outgoing.set(item.source, [...(outgoing.get(item.source) ?? []), item]);
  }
  return { incoming, outgoing, edgesById: new Map(edges.map((item) => [item.id, item])) };
}

/** renderGraph as the page runs it, with the real growth and layout, on a page that records what it is given. */
function page({ state: overrides = {}, limits = { maxNodes: 120, maxEdges: 400 }, projection = {}, hide = () => false, selection = null } = {}) {
  const text = {};
  const stage = { dataset: {}, clientWidth: 800, clientHeight: 600 };
  const elements = new Proxy({}, {
    get: (_target, id) => ({
      closest: () => stage,
      setAttribute: (name, value) => { text[`${id} ${name}`] = value; },
      set textContent(value) { text[id] = value; }
    })
  });
  const drawn = [];
  const messages = [];
  const records = ALL.map((item) => ({ ...item, role: "cause" }));
  const closed = [];
  const presentation = {
    neighborhood: () => ({
      nodes: BASE.map((node) => ({ ...withName(node.id), ...node })),
      edges: records.slice(0, 2),
      focus: withName("f"),
      counts: { hiddenNodeCount: 0, hiddenEdgeCount: 0, availableEdgeCount: 2 },
      ...projection
    }),
    close: () => closed.push(true)
  };
  const state = {
    mode: "causes", focusId: "f", recordFocusId: null, depth: 1, direction: "both", expanded: [], expansionAdded: [],
    causalOrder: false, interactionViews: null, interactionPerspectiveId: null, interactionCaseId: null, ontology: { layer: "arisings" },
    presentation, graphIndex: indexOf(records),
    causes: { byChild: indexOf(records).incoming, byParent: indexOf(records).outgoing },
    ...overrides
  };
  const context = vm.createContext({
    state, elements,
    GRAPH_NODE: { width: 200, height: 64, focusWidth: 240, focusHeight: 82 },
    GRAPH_LIMITS: { maxNodes: 72, maxEdges: 260 },
    EXPANSION_LIMITS: limits,
    expandGraph, reachableWithin, relationToFocus, neighbourhoodLayers, causalOrderLayers, layoutLayeredGraph,
    emptyStage() {},
    causePresentation: () => presentation,
    createLazyModelPresentation: () => presentation,
    selectInteractionGraph: () => selection,
    interactionCaseOverview: () => presentation.neighborhood(),
    layoutIsolatedCaseCards: () => { throw new Error("A connected view is laid out in columns"); },
    causeShown: (item) => !hide(item),
    causeFilterText: () => "",
    nodeSummary: withName,
    isArising: (node) => node?.layer === "arisings",
    displayName: (node) => node?.name,
    humanize: (value, fallback) => value ?? fallback,
    levelName: () => "Molecular",
    plural: (count, singular) => `${count} ${singular}${count === 1 ? "" : "s"}`,
    codeKey: () => [0, 0],
    cardInfo: (_node, { relation }) => ({ relation }),
    cardHeight: (_node, _width, base) => base,
    drawLayout: (layout, options) => drawn.push({ layout, options }),
    graphMessage: (lines) => messages.push(...lines)
  });
  vm.runInContext(declarations(...FUNCTIONS), context);
  return {
    state, text, messages, closed, stage,
    render() {
      context.renderGraph();
      const { layout, options } = drawn.at(-1);
      return {
        layout, options,
        cards: [...options.nodes].map((node) => node.id).sort(),
        lines: [...options.edges].map((item) => item.id).sort(),
        boxes: new Map(layout.nodes.map((box) => [box.id, box]))
      };
    }
  };
}

test("every card learns what it hides: the pills reach the drawing", () => {
  const { render, text } = page();
  const { options } = render();
  assert.deepEqual({ ...options.pills.get("c1") }, { hidden: 2, expanded: false });
  assert.deepEqual({ ...options.pills.get("d1") }, { hidden: 2, expanded: false });
  assert.match(text["graph-hint"], /Click \+: add cards/, "And the hint names them");
});

test("an expanded card brings its neighbours in: as cards, as boxes in their columns and with their lines", () => {
  const { render, state } = page({ state: { expanded: ["c1"] } });
  const { cards, lines, boxes, options } = render();
  assert.deepEqual(cards, ["c0", "c1", "d1", "f", "x"]);
  assert.deepEqual(lines, ["c0>c1", "c1>f", "c1>x", "f>d1"]);
  assert.ok(boxes.get("c0").x < boxes.get("c1").x, "A cause stands left of the card that asked for it");
  assert.ok(boxes.get("x").x > boxes.get("c1").x, "A dependent right of it");
  assert.equal(boxes.get("x").x, boxes.get("f").x, "One column on, beside the focus");
  assert.deepEqual([...state.expanded], ["c1"]);
  assert.deepEqual([...state.expansionAdded].map(({ id }) => id), ["c0", "x"], "toggleExpansion reads what was added");
  const relation = (id) => [...options.nodes].find((node) => node.id === id).relation;
  assert.equal(relation("c0"), "parent");
  assert.equal(relation("x"), "context", "On the focus's own column it is neither side of it");
  assert.equal(options.info.get("x").relation, "context", "And the card says so: no border and no word of a dependent");
  assert.equal(options.info.get("c0").relation, "parent");
  const words = vm.runInNewContext(`${declarations("cardStateWords")}\ncardStateWords(info);`, { state: { mode: "causes" }, info: { relation: "context" }, humanize: String, evidenceShare: String });
  assert.equal(words, "", "No role is read out for a card that has none here");
  assert.equal(options.pills.get("c1").expanded, true);
  assert.equal([...options.edges].find((item) => item.id === "c1>x").role, "cause", "A grown line carries its record's fields");
});

test("what was grown is drawn again from the view: a card no longer in it leaves no expansion behind", () => {
  const { render, state } = page({ state: { expanded: ["gone"] } });
  assert.deepEqual(render().cards, ["c1", "d1", "f"]);
  assert.deepEqual([...state.expanded], []);
  assert.deepEqual([...state.expansionAdded], []);
});

test("growing the drawing does not shrink the cards a reader is looking at", () => {
  const { render } = page({ state: { expanded: ["c1", "d1"] } });
  const { layout, boxes } = render();
  assert.ok(new Set(layout.nodes.map((box) => box.layer)).size > 3, "More than three columns now");
  assert.equal(boxes.get("c1").width, 200, "Still as wide as in the three columns they started from");
  assert.equal(boxes.get("f").width, 240);
});

test("the Direction control limits what a card adds", () => {
  const causes = page({ state: { direction: "parents", expanded: ["c1"] } }).render();
  assert.deepEqual(causes.cards, ["c0", "c1", "d1", "f"]);
  const dependents = page({ state: { direction: "children", expanded: ["c1"] } }).render();
  assert.deepEqual(dependents.cards, ["c1", "d1", "f", "x"]);
});

test("the drawing stops at the Studio's limits and says so", () => {
  const stopped = page({ state: { expanded: ["c1", "d1"] }, limits: { maxNodes: 4, maxEdges: 400 } });
  assert.equal(stopped.render().cards.length, 4);
  assert.ok(stopped.messages.some((line) => /at its limit of 4 cards and 400 lines/.test(line)), stopped.messages.join("|"));
  const free = page({ state: { expanded: ["c1", "d1"] } });
  assert.equal(free.render().cards.length, 7);
  assert.ok(!free.messages.some((line) => /at its limit/.test(line)));
});

test("Causes grows only along what its filters show, on both sides of a card", () => {
  const hidden = (id) => (item) => item.id === id;
  const noCause = page({ state: { expanded: ["c1"] }, hide: hidden("c0>c1") }).render();
  assert.deepEqual(noCause.cards, ["c1", "d1", "f", "x"]);
  assert.equal(noCause.options.pills.has("c0"), false);
  const noDependent = page({ state: { expanded: ["c1"] }, hide: hidden("c1>x") }).render();
  assert.deepEqual(noDependent.cards, ["c0", "c1", "d1", "f"]);
});

test("every other mode grows along the release's relations, unfiltered", () => {
  const { render } = page({ state: { mode: "graph", expanded: ["c1"], causes: null }, hide: () => true });
  const { cards, options } = render();
  assert.deepEqual(cards, ["c0", "c1", "d1", "f", "x"]);
  assert.equal(options.mode, "graph");
});

test("a lens grows along its own relations, not the release's", () => {
  const selection = { input: { edges: [ALL[0], ALL[1], ALL[2]] }, selectedCase: null, memberNodeIds: [] };
  const lens = page({ state: { mode: "graph", interactionViews: {}, interactionPerspectiveId: "p", expanded: ["c1"] }, selection });
  assert.deepEqual(lens.render().cards, ["c0", "c1", "d1", "f"], "c1 -> x is not in this lens");
  assert.equal(lens.closed.length, 1, "The lens's own presentation is closed again");
});

test("a case overview has no pills and grows nothing", () => {
  const selection = { input: { edges: ALL }, selectedCase: { title: "A case" }, memberNodeIds: ["f"] };
  const overview = page({ state: { mode: "graph", interactionViews: {}, interactionCaseId: "k", expanded: ["c1"] }, selection });
  const { cards, options } = overview.render();
  assert.equal(options.pills, undefined);
  assert.equal(options.overview, true);
  assert.deepEqual(cards, ["c1", "d1", "f"]);
  assert.doesNotMatch(overview.text["graph-hint"], /add neighbours/);
  assert.match(overview.text["graph-subtitle"], /Case: A case/);
});

test("the bounded message counts again once cards came in, and asks for nothing when the view is whole", () => {
  // At depth 2 the neighbourhood is c0 -> c1 -> f -> d1 -> d2: two cards and two lines beyond the three drawn.
  const counts = { hiddenNodeCount: 2, hiddenEdgeCount: 2, availableEdgeCount: 4 };
  const before = page({ state: { depth: 2 }, projection: { counts } });
  before.render();
  assert.ok(before.messages.some((line) => line.startsWith("Bounded view: 2 cards and 2 lines left out.")), before.messages.join("|"));
  const after = page({ state: { depth: 2, expanded: ["c1"] }, projection: { counts } });
  after.render();
  assert.ok(after.messages.some((line) => line.startsWith("Bounded view: 1 card and 1 line left out.")), after.messages.join("|"));
  const whole = page();
  whole.render();
  assert.deepEqual(whole.messages, []);
});

test("a causal drawing tells the drawing its mode; each other view its own", () => {
  assert.equal(page({ state: { causalOrder: true } }).render().options.mode, "causal");
  assert.equal(page({ state: { causalOrder: true, depth: 2 } }).render().options.mode, "causes");
  assert.equal(page().render().options.mode, "causes");
  assert.equal(page({ state: { mode: "records", causes: null } }).render().options.mode, "records");
});

test("Records follows its own focus", () => {
  const seen = [];
  const presentation = {
    neighborhood: (options) => {
      seen.push(options);
      return { nodes: [{ ...withName("r"), relation: "focus", upstreamDistance: 0, downstreamDistance: 0 }], edges: [], focus: withName("r"), counts: { hiddenNodeCount: 0, hiddenEdgeCount: 0, availableEdgeCount: 0 } };
    }
  };
  const { render } = page({ state: { mode: "records", recordFocusId: "r", presentation, causes: null } });
  assert.equal(render().options.focusId, "r");
  assert.equal(seen[0].focusId, "r");
  assert.equal(seen[0].maxNodes, 72, "Under the base view's own limits");
});

test("what the header and the counts say names cards and never shows an id", () => {
  const { render, text } = page({ state: { expanded: ["c1"] } });
  render();
  assert.equal(text["graph-title"], "Name of f");
  assert.equal(text["graph-subtitle"], "state · Level 5 Molecular");
  assert.equal(text["graph-counts"], "5 arisings · 4 causes · depth 1");
  assert.match(text["neighborhood-graph aria-label"], /^Name of f: 5 visible nodes and 4 visible edges\./);
});

/* ---------- Print ---------- */

const PAPER_CLASS = "paper-palette";

function printPage({ mode = "causes", tableDensity = "map", info = { layout: { width: 900, height: 500 } }, transform = "translate(-30 -40) scale(0.68)" } = {}) {
  const attributes = (values) => ({
    values: new Map(Object.entries(values)),
    dataset: {},
    getAttribute(name) { return this.values.get(name) ?? null; },
    setAttribute(name, value) { this.values.set(name, value); },
    removeAttribute(name) { this.values.delete(name); }
  });
  const body = new Set();
  const calls = [];
  const state = { mode, tableDensity };
  const elements = {
    "neighborhood-graph": attributes({}),
    "graph-viewport": attributes(transform ? { transform } : {}),
    "graph-nodes": new FakeElement("g"),
    "graph-edges": new FakeElement("g")
  };
  const context = vm.createContext({
    state, elements, PAPER_CLASS, activeGraphInfo: info,
    document: { body: { classList: { add: (name) => body.add(name), remove: (name) => body.delete(name) } } },
    renderArisingTable: () => calls.push(`table in ${state.tableDensity}`),
    renderLegend: () => calls.push("legend")
  });
  vm.runInContext(`var printRestore = null;\n${declarations("preparePrint", "finishPrint", "clearGraphHighlight")}`, context);
  return { context, state, body, calls, elements, graph: elements["neighborhood-graph"], group: elements["graph-viewport"] };
}

test("print shows the whole drawing on paper, and the screen comes back as the reader left it", () => {
  const { context, body, graph, group, calls } = printPage();
  context.preparePrint();
  assert.ok(body.has(PAPER_CLASS), "The paper palette");
  assert.equal(graph.getAttribute("viewBox"), "0 0 900 500", "The whole drawing");
  assert.equal(group.getAttribute("transform"), null, "Without the pan and zoom");
  context.finishPrint();
  assert.equal(body.size, 0, "The screen is dark again");
  assert.equal(graph.getAttribute("viewBox"), null);
  assert.equal(group.getAttribute("transform"), "translate(-30 -40) scale(0.68)");
  assert.deepEqual(calls, [], "A drawing is not drawn again");
});

test("a card's highlight does not reach the paper", () => {
  const { context, elements, graph } = printPage();
  const [card, line] = ["graph-nodes", "graph-edges"].map((id) => {
    const element = new FakeElement("g", { "data-highlight": "dimmed" });
    elements[id].append(element);
    return element;
  });
  graph.dataset.highlightBy = "keyboard";
  context.preparePrint();
  assert.deepEqual([card.getAttribute("data-highlight"), line.getAttribute("data-highlight"), graph.dataset.highlightBy], [null, null, undefined]);
});

test("a browser that fires beforeprint twice still restores the first state, and restoring twice changes nothing", () => {
  const { context, body, group } = printPage();
  context.preparePrint();
  context.preparePrint();
  context.finishPrint();
  assert.equal(group.getAttribute("transform"), "translate(-30 -40) scale(0.68)");
  group.setAttribute("transform", "translate(1 1)");
  body.add("later");
  context.finishPrint();
  assert.equal(group.getAttribute("transform"), "translate(1 1)", "A second afterprint does not undo what came after the first");
  assert.ok(body.has("later"));
});

test("print of a drawing that was not panned leaves no transform behind", () => {
  const { context, group } = printPage({ transform: null });
  context.preparePrint();
  context.finishPrint();
  assert.equal(group.getAttribute("transform"), null);
});

test("the table prints with its names and returns to the reader's density", () => {
  const { context, state, body, graph, calls } = printPage({ mode: "table" });
  context.preparePrint();
  assert.equal(state.tableDensity, "names");
  assert.deepEqual(calls, ["table in names", "legend"]);
  assert.equal(graph.getAttribute("viewBox"), null, "The hidden drawing is left alone");
  assert.ok(body.has(PAPER_CLASS));
  context.finishPrint();
  assert.equal(state.tableDensity, "map");
  assert.deepEqual(calls.slice(2), ["table in map", "legend"]);
  assert.equal(body.size, 0);
});

test("a table already showing names is not drawn again for print", () => {
  const { context, calls, state } = printPage({ mode: "table", tableDensity: "names" });
  context.preparePrint();
  context.finishPrint();
  assert.deepEqual(calls, []);
  assert.equal(state.tableDensity, "names");
});

test("Open work and a page with no drawing print on paper and keep their view", () => {
  for (const options of [{ mode: "work" }, { info: null }]) {
    const { context, body, graph, group } = printPage(options);
    context.preparePrint();
    assert.ok(body.has(PAPER_CLASS));
    assert.equal(graph.getAttribute("viewBox"), null);
    assert.ok(group.getAttribute("transform"));
    context.finishPrint();
    assert.equal(body.size, 0);
  }
});

test("the page prepares for print and restores after it", () => {
  assert.match(studio, /window\.addEventListener\("beforeprint", preparePrint\);/);
  assert.match(studio, /window\.addEventListener\("afterprint", finishPrint\);/);
});
