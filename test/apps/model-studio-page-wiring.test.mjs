import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import { layoutLayeredGraph } from "../../apps/model-studio/graph-layout.js";
import { connection } from "../../apps/model-studio/graph-paths.js";
import { citesEvidence } from "../../apps/model-studio/open-work.js";
import { fitNamesColumns, fitTableMap, tileGap } from "../../apps/model-studio/table-map.js";
import { FakeElement, constant, declaration, declarations } from "./model-studio-source.mjs";

const plural = (count, one, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

/* ---------- The Map's fit ---------- */

function mapPage({ height = 700, width = 900, density = "map" } = {}) {
  const grid = new FakeElement("div", { class: "arising-grid" });
  grid.getBoundingClientRect = () => ({ top: 40 });
  grid.nextElementSibling = null;
  const root = new FakeElement("div", {}, [grid]);
  root.clientWidth = width;
  const panel = new FakeElement("div");
  Object.assign(panel, {
    hidden: false, clientHeight: height, clientWidth: width, scrollTop: 0, scrolled: 0,
    scrollTo() { this.scrolled += 1; },
    getBoundingClientRect: () => ({ top: 0, bottom: height })
  });
  const legend = { getBoundingClientRect: () => ({ top: height - 30 }) };
  const state = {
    tableDensity: density, tableColour: "domain",
    tableMap: { rows: [[5, 7, 10, 3], [15, 14, 7, 1]], minColumns: [100, 100, 100, 100], bareColumns: [40, 40, 40, 40], names: { labelWidth: 104, gap: 6, columns: [{ min: 138, weight: 1 }, { min: 170, weight: 2 }] } }
  };
  const run = vm.runInNewContext(`${constant("TABLE_MAP")}\n${declaration("fitArisingMap")}\nfitArisingMap;`, {
    state, Object, parseFloat, Math,
    elements: { "arising-table-panel": panel, "arising-table": root, "stage-legend": legend },
    getComputedStyle: () => ({ rowGap: "0", paddingLeft: "10px", paddingRight: "10px" }),
    fitTableMap, fitNamesColumns, tileGap
  });
  return { run, panel, root, grid, state };
}

test("the Map takes its tile, gap and columns from the fit, for the room the panel really has", () => {
  const { run, panel, grid, state } = mapPage();
  run();
  const legendRoom = 32;
  const fit = fitTableMap({
    rows: state.tableMap.rows, width: 900, height: 700 - 40 - legendRoom, gap: tileGap,
    labelWidth: 112, headHeight: 22, columnGap: 4, rowGap: 4, cellChrome: 8, minRowHeight: 32, minTile: 10, maxTile: 40, minColumn: state.tableMap.minColumns
  });
  assert.equal(fit.fits, true);
  assert.equal(panel.dataset.fits, "true");
  assert.equal(panel.style.values.get("--legend-room"), "32px");
  assert.equal(grid.style.values.get("--tile"), `${fit.tile}px`);
  assert.equal(grid.style.values.get("--tile-gap"), `${fit.gap}px`);
  assert.equal(grid.style.gridTemplateColumns, `112px ${fit.columns.map((column) => `${column}px`).join(" ")}`);
  assert.equal(panel.scrolled, 1, "A map that fits starts at the top of its panel");
});

test("a Map with too little room says so, keeps the smallest tile and is not scrolled back", () => {
  const { run, panel, grid } = mapPage({ height: 150 });
  run();
  assert.equal(panel.dataset.fits, "false");
  assert.equal(grid.style.values.get("--tile"), "10px");
  assert.equal(panel.scrolled, 0);
});

test("more room gives a larger tile, and a narrow panel asks for the columns without their counts", () => {
  const tile = (options) => {
    const { run, grid } = mapPage(options);
    run();
    return Number.parseInt(grid.style.values.get("--tile"), 10);
  };
  assert.ok(tile({ height: 900 }) > tile({ height: 320 }));
  const narrow = mapPage({ width: 700 });
  narrow.state.tableMap.minColumns = [500, 500, 500, 500];
  narrow.run();
  assert.equal(narrow.panel.dataset.fits, "true", "The bare columns fit where the full headings could not");
});

test("Names takes the columns of its own fit and clears what the Map set", () => {
  const { run, panel, grid, root } = mapPage({ density: "names" });
  panel.dataset.fits = "true";
  grid.style.setProperty("--tile", "19px");
  run();
  assert.equal(panel.dataset.fits, undefined);
  assert.equal(grid.style.values.has("--tile"), false);
  const fit = fitNamesColumns({ labelWidth: 104, gap: 6, columns: [{ min: 138, weight: 1 }, { min: 170, weight: 2 }], width: 880 });
  assert.equal(grid.style.gridTemplateColumns, fit.template);
  assert.equal(grid.dataset.bands, String(fit.bands));
  assert.equal(root.dataset.density, "names");
});

test("a hidden panel or a table with no map measures nothing", () => {
  const hidden = mapPage();
  hidden.panel.hidden = true;
  hidden.run();
  assert.equal(hidden.grid.style.values.has("--tile"), false);
  const empty = mapPage();
  empty.state.tableMap = null;
  empty.run();
  assert.equal(empty.grid.style.values.has("--tile"), false);
});

/* ---------- Expansion ---------- */

function expansionPage({ typing = false } = {}) {
  const box = (id, x, y) => ({ id, x, y, width: 100, height: 60 });
  const card = box("c", 500, 300);
  const grown = { nodes: [box("c", 700, 500), box("n1", 500, 400), box("n2", 500, 600), box("other", 3000, 3000)] };
  const state = { expanded: [], expansionAdded: [] };
  const log = { renders: 0, holds: [], minimap: 0, focused: [] };
  const context = {
    state, Math, Set,
    activeGraphInfo: { layout: { nodes: [card] } },
    graphViewport: { hold: (options) => log.holds.push(options) },
    elements: {
      "stage-legend": { offsetHeight: 30 },
      "graph-nodes": { querySelector: (selector) => ({ focus: () => log.focused.push(selector) }) }
    },
    document: { activeElement: { closest: () => (typing ? { dataset: { nodeId: "c" } } : null) } },
    CSS: { escape: (text) => text },
    minimapCorner: () => "corner",
    renderGraph() {
      log.renders += 1;
      if (state.expanded.includes("c")) {
        state.expansionAdded = [{ id: "n1", via: "c" }, { id: "n2", via: "c" }, { id: "other", via: "z" }];
        context.activeGraphInfo = { layout: grown };
      } else {
        state.expansionAdded = [];
        context.activeGraphInfo = { layout: { nodes: [card] } };
      }
    },
    renderLegend() {},
    scheduleMinimap() { log.minimap += 1; }
  };
  const run = vm.runInNewContext(`${declaration("toggleExpansion")}\ntoggleExpansion;`, context);
  return { run, state, log, card };
}

test("+ adds the card to what is expanded, draws anew and brings the new cards on stage", () => {
  const { run, state, log, card } = expansionPage();
  run("c");
  assert.deepEqual([...state.expanded], ["c"]);
  assert.equal(log.renders, 1);
  const [hold] = log.holds;
  assert.equal(hold.from, card, "The card stays where it was on screen");
  assert.equal(hold.to.x, 700);
  assert.deepEqual({ ...hold.box }, { x: 438, y: 326, width: 324, height: 316 }, "The card and only the cards it added, with room for their pills");
  assert.equal(hold.bottomInset, 42);
  assert.equal(hold.readableScale, 0.68);
  assert.equal(hold.corner, "corner");
  assert.equal(log.minimap, 1);
});

test("the minus takes them away again, and holds the card alone", () => {
  const { run, state, log } = expansionPage();
  run("c");
  run("c");
  assert.deepEqual([...state.expanded], []);
  assert.equal(log.renders, 2);
  assert.equal(log.holds[1].box, null);
});

test("a card no longer drawn changes nothing, and the keyboard stays on the card it was on", () => {
  const gone = expansionPage();
  gone.run("nowhere");
  assert.deepEqual([...gone.state.expanded], []);
  assert.equal(gone.log.renders, 0);
  const typed = expansionPage({ typing: true });
  typed.run("c");
  assert.deepEqual(typed.log.focused, ['[data-node-id="c"]']);
  const clicked = expansionPage();
  clicked.run("c");
  assert.deepEqual(clicked.log.focused, []);
});

test("expansion lasts as long as its view, and starts over with any part of the view's scope", () => {
  const base = { presentation: "p", mode: "causes", focusId: "f", recordFocusId: null, depth: 1, pathTarget: null, interactionPerspectiveId: "", interactionCaseId: "" };
  const after = (change, first = {}) => {
    const state = { ...base, ...first, expanded: ["x"] };
    const run = vm.runInNewContext(`${declaration("endExpansionOutOfScope")}\nendExpansionOutOfScope;`, { state });
    run();
    state.expanded = ["x"];
    Object.assign(state, change);
    run();
    return [...state.expanded];
  };
  assert.deepEqual(after({}), ["x"], "A redraw of the same view keeps it");
  assert.deepEqual(after({ selectedId: "other", direction: "parents" }), ["x"], "Selecting and the Direction control are not its scope");
  for (const change of [{ presentation: "q" }, { mode: "records" }, { focusId: "g" }, { depth: 2 }, { pathTarget: "t" }, { interactionPerspectiveId: "v" }, { interactionCaseId: "k" }]) {
    assert.deepEqual(after(change), [], Object.keys(change)[0]);
  }
  assert.deepEqual(after({ recordFocusId: "r" }, { mode: "records", recordFocusId: "q" }), [], "In Records the record is the focus");
  const first = { ...base, expanded: ["x"] };
  vm.runInNewContext(`${declaration("endExpansionOutOfScope")}\nendExpansionOutOfScope();`, { state: first });
  assert.deepEqual([...first.expanded], [], "What a former view left is not kept");
});

test("a card's neighbours follow the cause filters, in both directions", () => {
  const causes = [
    { id: "1", source: "a", target: "c", role: "arising", status: "supported", necessity: "necessary" },
    { id: "2", source: "b", target: "c", role: "arising", status: "author-hypothesis", necessity: "enabling" },
    { id: "3", source: "c", target: "d", role: "modulation", status: "supported", necessity: "necessary" }
  ];
  const state = {
    roleFilter: new Set(["arising", "modulation"]), causeFilters: { evidence: false, necessary: false },
    causes: { byChild: new Map([["c", causes.slice(0, 2)]]), byParent: new Map([["c", causes.slice(2)]]) }
  };
  const adjacency = vm.runInNewContext(`${declarations("causeShown", "graphAdjacency")}\ngraphAdjacency(true);`, { state, citesEvidence });
  const ids = () => [[...adjacency.incoming("c")].map((edge) => edge.id), [...adjacency.outgoing("c")].map((edge) => edge.id)];
  assert.deepEqual(ids(), [["1", "2"], ["3"]]);
  state.causeFilters.evidence = true;
  assert.deepEqual(ids(), [["1"], ["3"]]);
  state.causeFilters = { evidence: false, necessary: false };
  state.roleFilter = new Set(["arising"]);
  assert.deepEqual(ids(), [["1", "2"], []]);
});

/* ---------- The path view ---------- */

function pathPage(causes, from, to, { filters = "" } = {}) {
  const text = () => ({ textContent: "" });
  const elements = {
    "graph-title": text(), "graph-subtitle": text(), "graph-counts": text(), "graph-hint": text(),
    "neighborhood-graph": new FakeElement("svg")
  };
  elements["neighborhood-graph"].closest = () => ({ dataset: {} });
  const names = { a: "Alpha", b: "Beta", m: "Middle", c: "Common" };
  const log = { drawn: null, messages: null, options: null };
  vm.runInNewContext(`${declaration("renderPath")}\nrenderPath();`, {
    state: { focusId: from, pathTarget: to, ontology: { causes } },
    elements, connection, layoutLayeredGraph, plural, Map, Set, Boolean,
    causeShown: (edge) => edge.shown !== false,
    emptyStage() {},
    nodeSummary: (id) => ({ id, name: names[id] }),
    cardInfo: () => ({}),
    cardHeight: () => 72,
    GRAPH_NODE: { width: 200, height: 72, focusWidth: 240, focusHeight: 90 },
    drawLayout: (layout, options) => { log.drawn = options; },
    causeFilterText: () => filters,
    graphMessage: (messages, overview, options) => { log.messages = [...messages]; log.options = options; }
  });
  return { ...log, title: elements["graph-title"].textContent, subtitle: elements["graph-subtitle"].textContent, counts: elements["graph-counts"].textContent, label: elements["neighborhood-graph"].getAttribute("aria-label") };
}

const cause = (source, target, status = "author-hypothesis", shown = true) => ({ id: `${source}>${target}`, source, target, status, shown });

test("a path names its two ends and counts the steps that cite evidence", () => {
  const view = pathPage([cause("a", "m", "supported"), cause("m", "b")], "a", "b");
  assert.equal(view.title, "Path: Alpha to Beta");
  assert.equal(view.subtitle, "2 steps · 1 cites evidence");
  assert.equal(view.counts, "3 arisings · 2 causes · path");
  assert.equal(view.label, "Path: Alpha to Beta, 2 steps. Arrow keys move between the cards.");
  assert.deepEqual(view.messages, ["The shortest chain of causes."]);
  assert.deepEqual([view.options.clearPath, view.options.reset], [true, false]);
  assert.equal(view.drawn.mode, "path");
  assert.deepEqual([...view.drawn.nodes].map((node) => node.id), ["a", "m", "b"]);
  assert.equal(view.drawn.info.get("a").focus, true);
  assert.equal(view.drawn.info.get("m").focus, false);
});

test("a chain the other way reads from its cause and says so", () => {
  const view = pathPage([cause("b", "a", "supported")], "a", "b");
  assert.equal(view.title, "Path: Beta to Alpha");
  assert.equal(view.subtitle, "1 step · 1 cites evidence");
  assert.deepEqual(view.messages, ["No chain runs from Alpha to Beta, so this one runs the other way."]);
});

test("a common cause is named, not coded", () => {
  const view = pathPage([cause("c", "a"), cause("c", "b")], "a", "b");
  assert.equal(view.title, "Path: Alpha to Beta");
  assert.equal(view.subtitle, "2 steps · 0 cite evidence");
  assert.deepEqual(view.messages, ["Neither leads to the other. Both follow from a nearest common cause: Common."]);
});

test("the path keeps to the filters, and says when they are why there is none", () => {
  const hidden = [cause("a", "b", "author-hypothesis", false)];
  const filtered = pathPage(hidden, "a", "b", { filters: "Only causes with evidence." });
  assert.equal(filtered.subtitle, "No chain");
  assert.deepEqual(filtered.messages, ["No chain joins Alpha and Beta with the current filters.", "Only causes with evidence."]);
  assert.equal(filtered.options.reset, true);
  const none = pathPage([], "a", "b");
  assert.deepEqual(none.messages, ["No chain of causes joins Alpha and Beta."]);
  assert.equal(none.options.reset, false);
});

/* ---------- The inspector and Copy link ---------- */

test("the inspector shows the relation a link names, and the record when the release does not hold it", () => {
  const run = (relation) => {
    const rendered = [];
    const state = {
      selectedRelationId: relation, selectedId: "a", inspectorShown: "", graphIndex: { edgesById: new Map([["cause:a>b", {}]]) },
      presentation: { inspect(id) { throw new Error(`record ${id}`); } }
    };
    const elements = { "record-failure": {}, "inspector-content": { scrollTop: 90 }, "relation-inspector": {}, "record-inspector": {} };
    const code = vm.runInNewContext(`let pendingInspection = null;\nlet inspectionSequence = 0;\n${declaration("renderInspector")}\nrenderInspector;`, {
      state, elements, renderRelationInspector: (id) => rendered.push(id)
    });
    let record = null;
    try { code(); } catch (error) { record = error.message; }
    return { rendered, record, shown: state.inspectorShown, scroll: elements["inspector-content"].scrollTop, relationHidden: elements["relation-inspector"].hidden };
  };
  assert.deepEqual(run("cause:a>b"), { rendered: ["cause:a>b"], record: null, shown: "relation cause:a>b", scroll: 0, relationHidden: undefined });
  const unknown = run("cause:x>y");
  assert.deepEqual([unknown.rendered, unknown.record, unknown.shown, unknown.relationHidden], [[], "record a", "record a", true]);
  assert.equal(run(null).record, "record a");
});

test("Copy link writes the address first and copies exactly that", async () => {
  const run = async (succeeds) => {
    const location = { href: "#stale" };
    const copied = [];
    const button = vm.runInNewContext(`${declarations("actionButton", "createElement", "copyLinkButton")}\ncopyLinkButton();`, {
      location, String,
      document: { createElement: (name) => new FakeElement(name) },
      replaceLocationState: () => { location.href = "#model=m&node=a"; },
      copyText: async (text) => { copied.push(text); return succeeds; },
      setTimeout() {}, clearTimeout() {}
    });
    assert.equal(button.textContent, "Copy link");
    await button.fire("click");
    return { copied, label: button.textContent, focused: button.focused };
  };
  assert.deepEqual(await run(true), { copied: ["#model=m&node=a"], label: "Copied", focused: true });
  assert.deepEqual(await run(false), { copied: ["#model=m&node=a"], label: "Copy failed", focused: true });
});

/* ---------- Which view is drawn ---------- */

test("each mode draws its own view, a path link included, and only a drawn graph can be exported", () => {
  const run = (overrides, activeGraphInfo = {}) => {
    const drawn = [];
    const step = (name) => () => drawn.push(name);
    const elements = { "arising-table-panel": {}, "open-work-panel": {}, "export-toggle": {}, "zoom-controls": {} };
    let exportMenu = null;
    vm.runInNewContext(`${declaration("renderView")}\nrenderView();`, {
      state: { mode: "causes", pathTarget: null, ...overrides }, elements, activeGraphInfo,
      endExpansionOutOfScope: step("scope"), renderLegend() {}, fitGraph() {}, setExportMenu: (open) => { exportMenu = open; },
      renderArisingTable: step("table"), renderOpenWork: step("work"), renderSubgraph: step("subgraph"), renderPath: step("path"), renderGraph: step("graph")
    });
    return { drawn, tableHidden: elements["arising-table-panel"].hidden, workHidden: elements["open-work-panel"].hidden, exportDisabled: elements["export-toggle"].disabled, zoomHidden: elements["zoom-controls"].hidden, exportMenu };
  };
  assert.deepEqual(run({ mode: "table" }).drawn, ["scope", "table"]);
  assert.deepEqual(run({ mode: "work" }).drawn, ["scope", "work"]);
  assert.deepEqual(run({ mode: "subgraph" }).drawn, ["scope", "subgraph"]);
  assert.deepEqual(run({ mode: "causes", pathTarget: "b" }).drawn, ["scope", "path"]);
  assert.deepEqual(run({ mode: "causes" }).drawn, ["scope", "graph"]);
  assert.deepEqual(run({ mode: "graph" }).drawn, ["scope", "graph"], "A plain model draws its graph");
  assert.deepEqual([run({ mode: "table" }).tableHidden, run({ mode: "work" }).workHidden, run({ mode: "causes" }).tableHidden], [false, false, true]);
  assert.equal(run({ mode: "causes" }, null).exportDisabled, true);
  assert.equal(run({ mode: "causes" }).exportDisabled, false);
  assert.deepEqual([run({ mode: "causes" }, null).zoomHidden, run({ mode: "causes" }, null).exportMenu], [true, false], "With no drawing the zoom goes and an open menu closes");
  assert.deepEqual([run({ mode: "causes" }).zoomHidden, run({ mode: "causes" }).exportMenu], [false, null]);
});

test("the Map fits when it is drawn and whenever its panel changes", () => {
  assert.match(declaration("renderArisingTable"), /fitArisingMap\(\);\s+updateArisingTable\(\);/);
  assert.match(declaration("buildArisingTable"), /new ResizeObserver\(\(entries\) => scheduleTableRefit\(entries\.some\(\(entry\) => entry\.target !== grid\)\)\)/);
});

test("the Map refits in the next frame, never inside the observer whose sizes the fit changes", () => {
  const calls = [];
  const frames = [];
  const state = { tableRefit: false, tableRefitFrame: 0 };
  const panel = { hidden: false };
  const schedule = vm.runInNewContext(`${declaration("scheduleTableRefit")}\nscheduleTableRefit;`, {
    state,
    elements: { "arising-table-panel": panel },
    requestAnimationFrame: (run) => frames.push(run),
    fitArisingMap: () => calls.push("fit"),
    updateArisingTable: () => calls.push("curves")
  });
  schedule(false);
  schedule(true);
  schedule(false);
  assert.deepEqual(calls, [], "Nothing changes in the callback");
  assert.equal(frames.length, 1, "One frame for all the sizes of a resize");
  frames.shift()();
  assert.deepEqual(calls, ["fit", "curves"], "One entry from outside the grid is enough to refit");
  calls.length = 0;
  schedule(false);
  frames.shift()();
  assert.deepEqual(calls, ["curves"], "The grid alone only moves the curves");
  calls.length = 0;
  schedule(true);
  panel.hidden = true;
  frames.shift()();
  assert.deepEqual(calls, [], "The table left in the meantime");
  assert.equal(state.tableRefit, false);
});
