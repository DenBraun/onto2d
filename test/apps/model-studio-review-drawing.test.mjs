import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { createGraphViewport } from "../../apps/model-studio/graph-viewport.js";

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), "utf8");
const studio = await read("apps/model-studio/model-studio.js");
const styles = await read("assets/css/model-studio-workbench.css");

const functionBody = (name) => {
  const start = studio.indexOf(`\nfunction ${name}(`);
  assert.notEqual(start, -1, `${name} exists`);
  const end = studio.slice(start + 1).search(/\n(async )?function /);
  return studio.slice(start, start + 1 + end);
};
const run = (names, globals = {}) => {
  const context = vm.createContext({ ...globals });
  vm.runInContext(names.map(functionBody).join("\n"), context);
  return context;
};
const plain = (value) => JSON.parse(JSON.stringify(value));

/* ---------- The minimap ---------- */

const LAYOUT = {
  width: 1000,
  height: 600,
  nodes: [
    { id: "a", x: 136, y: 136, width: 200, height: 200 },
    { id: "b", x: 864, y: 464, width: 200, height: 200 }
  ]
};

test("a minimap drag past its edge stops at the edge of the drawing", () => {
  const { minimapPoint } = run(["minimapGeometry", "minimapPoint"]);
  const rect = { left: 100, top: 100 };
  const far = plain(minimapPoint({ clientX: 100 + 9000, clientY: 100 + 9000 }, rect, LAYOUT));
  assert.deepEqual(far, { x: 1000, y: 600 });
  const before = plain(minimapPoint({ clientX: 100 - 9000, clientY: 100 - 9000 }, rect, LAYOUT));
  assert.deepEqual(before, { x: 0, y: 0 });
  // Inside the minimap the point is the same as before the clamp: 180 by 120 holds a scale of .168 here, centred.
  const inside = minimapPoint({ clientX: 100 + 90, clientY: 100 + 60 }, rect, LAYOUT);
  assert.ok(Math.abs(inside.x - 500) < 1e-6 && Math.abs(inside.y - 300) < 1e-6);
});

test("the minimap does not count the empty margin around the cards as off stage", () => {
  const { minimapCovered } = run(["minimapCovered"]);
  // Cards span 36..964 by 36..564. The view cuts the 36 px margin on every side and no card.
  assert.equal(minimapCovered({ x: 30, y: 30, width: 940, height: 540 }, LAYOUT), true);
  // A card cut by more than the tolerance on any side counts as off stage.
  assert.equal(minimapCovered({ x: 60, y: 30, width: 910, height: 540 }, LAYOUT), false);
  assert.equal(minimapCovered({ x: 30, y: 60, width: 940, height: 510 }, LAYOUT), false);
  assert.equal(minimapCovered({ x: 30, y: 30, width: 900, height: 540 }, LAYOUT), false);
  assert.equal(minimapCovered({ x: 30, y: 30, width: 940, height: 500 }, LAYOUT), false);
});

test("only the main button moves the view through the minimap", () => {
  const listeners = {};
  const centred = [];
  const canvas = {
    addEventListener: (type, listener) => { listeners[type] = listener; },
    setPointerCapture() {},
    getBoundingClientRect: () => ({ left: 0, top: 0 })
  };
  const context = run(["minimapGeometry", "minimapPoint", "bindMinimap"], {
    elements: { "graph-minimap": canvas },
    activeGraphInfo: { layout: LAYOUT },
    graphViewport: { centerOn: (point) => centred.push(plain(point)) }
  });
  context.bindMinimap();
  for (const button of [1, 2]) {
    listeners.pointerdown({ button, pointerId: 1, clientX: 30, clientY: 30 });
    listeners.pointermove({ pointerId: 1, clientX: 40, clientY: 40 });
    listeners.pointerup({ pointerId: 1 });
  }
  assert.equal(centred.length, 0, "A right or a middle press neither jumps nor starts a drag");
  listeners.pointerdown({ button: 0, pointerId: 1, clientX: 90, clientY: 60 });
  listeners.pointermove({ pointerId: 1, clientX: 90, clientY: 60 });
  listeners.pointerup({ pointerId: 1 });
  listeners.pointermove({ pointerId: 1, clientX: 40, clientY: 40 });
  assert.equal(centred.length, 2, "The main button jumps and drags, and the release ends the drag");
});

/* ---------- The wheel over the overlays ---------- */

function stageWithGraph({ width = 800, wheelPans = () => true } = {}) {
  const listeners = {};
  const listenersOf = (target) => ({
    addEventListener: (type, listener, options) => { target[type] = { listener, options }; }
  });
  const stage = { ...listenersOf(listeners), setAttribute() {}, removeAttribute() {} };
  const svg = {
    dataset: {},
    parentElement: stage,
    addEventListener() {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width, height: 600 })
  };
  let transform = "";
  const group = { setAttribute: (name, value) => { transform = value; } };
  createGraphViewport(svg, group, { wheelPans });
  return { wheel: listeners.wheel, transform: () => transform };
}
const wheelEvent = (fields) => {
  const event = { clientX: 100, clientY: 100, deltaX: 0, deltaY: -100, deltaMode: 0, ctrlKey: false, metaKey: false, defaultPrevented: false, ...fields };
  event.preventDefault = () => { event.defaultPrevented = true; };
  return event;
};

test("the stage takes the wheel, so a pinch over the legend or the minimap zooms the graph", () => {
  const { wheel, transform } = stageWithGraph();
  assert.equal(wheel.options.passive, false, "Without this it could not stop the browser's page zoom");
  const before = transform();
  const pinch = wheelEvent({ ctrlKey: true });
  wheel.listener(pinch);
  assert.equal(pinch.defaultPrevented, true);
  assert.notEqual(transform(), before);
  const pan = wheelEvent({ deltaY: 40 });
  wheel.listener(pan);
  assert.equal(pan.defaultPrevented, true);
});

test("a stage that shows no drawing leaves the wheel to its table, its list and the browser", () => {
  const { wheel, transform } = stageWithGraph({ width: 0 });
  const before = transform();
  for (const fields of [{ ctrlKey: true }, {}]) {
    const event = wheelEvent(fields);
    wheel.listener(event);
    assert.equal(event.defaultPrevented, false);
  }
  assert.equal(transform(), before);
});

test("where the page itself scrolls, a plain wheel stays with the page and a pinch still zooms", () => {
  const { wheel } = stageWithGraph({ wheelPans: () => false });
  const plainWheel = wheelEvent({});
  wheel.listener(plainWheel);
  assert.equal(plainWheel.defaultPrevented, false);
  const pinch = wheelEvent({ metaKey: true });
  wheel.listener(pinch);
  assert.equal(pinch.defaultPrevented, true);
});

/* ---------- A stage without a drawing ---------- */

function controls() {
  return {
    "arising-table-panel": {},
    "open-work-panel": {},
    "export-toggle": {},
    "zoom-controls": { hidden: false }
  };
}
function viewContext(mode, activeGraphInfo, calls = []) {
  const elements = controls();
  const state = { mode, lineStretch: ["one", "two"] };
  const log = (name) => () => calls.push(name);
  const context = run(["renderView"], {
    elements,
    state,
    activeGraphInfo,
    endExpansionOutOfScope() {},
    renderLegend() {},
    renderArisingTable: log("table"),
    renderOpenWork: log("work"),
    renderSubgraph: log("subgraph"),
    renderPath: log("path"),
    renderGraph: log("graph"),
    fitGraph() {},
    setExportMenu: (open) => calls.push(`menu:${open}`)
  });
  return { context, elements, state };
}

test("the zoom buttons and an open Export menu leave with the drawing and come back with it", () => {
  const calls = [];
  const empty = viewContext("subgraph", null, calls);
  empty.context.renderView();
  assert.equal(empty.elements["zoom-controls"].hidden, true);
  assert.equal(empty.elements["export-toggle"].disabled, true);
  assert.ok(calls.includes("menu:false"), "The toggle is disabled and could not close the menu");
  const drawnCalls = [];
  const drawn = viewContext("subgraph", { layout: {} }, drawnCalls);
  drawn.context.renderView();
  assert.equal(drawn.elements["zoom-controls"].hidden, false);
  assert.equal(drawn.elements["export-toggle"].disabled, false);
  assert.ok(!drawnCalls.includes("menu:false"));
  assert.match(functionBody("updateControls"), /elements\["zoom-controls"\]\.hidden = [^\n]*!activeGraphInfo;/, "A later update of the controls must not bring them back");
});

test("an empty subgraph promises no clicks and no panning in the footer", () => {
  const hint = { textContent: "Click: inspect" };
  const element = (extra = {}) => ({ textContent: "", replaceChildren() {}, setAttribute() {}, closest: () => ({ dataset: {} }), ...extra });
  const elements = {
    "graph-title": element(),
    "graph-subtitle": element(),
    "neighborhood-graph": element(),
    "graph-columns": element(),
    "graph-edges": element(),
    "graph-nodes": element(),
    "graph-counts": element(),
    "graph-hint": hint
  };
  const state = { focusId: "arising:empty", lineStretch: ["one", "two"], ontology: { members: new Map() } };
  const context = run(["renderSubgraph"], {
    elements,
    state,
    Set,
    Map,
    nodeSummary: () => ({ name: "Empty" }),
    drawMinimap() {},
    emptyStage() {},
    graphMessage() {},
    activeGraphProjection: null,
    activeGraphInfo: { layout: {} }
  });
  context.renderSubgraph();
  assert.equal(hint.textContent, "");
  assert.equal(elements["graph-counts"].textContent, "0 records");
  assert.equal(state.lineStretch, null);
  assert.equal(context.activeGraphInfo, null);
});

/* ---------- Lines under a click ---------- */

test("the list of lines under a click ends when the drawing that was clicked is left", () => {
  for (const mode of ["causes", "records", "graph", "table", "work"]) {
    const { context, state } = viewContext(mode, { layout: {} });
    context.renderView();
    assert.equal(state.lineStretch, null, `${mode} draws other lines`);
  }
  const { context, state } = viewContext("subgraph", { layout: {} });
  context.renderView();
  assert.deepEqual(plain(state.lineStretch), ["one", "two"], "renderSubgraph decides for itself");
});

/* ---------- A table preview follows the pointer, not the table ---------- */

test("a chip that slides under a still pointer starts no preview", () => {
  assert.doesNotMatch(studio, /chip\.addEventListener\("pointerenter"/, "The browser fires it when the table scrolls under the pointer");
  const move = studio.match(/chip\.addEventListener\("pointermove", \(\) => \{([\s\S]*?)\n\s+\}\);/);
  assert.ok(move, "A preview starts on a real move");
  assert.match(move[1], /clearTimeout\(state\.tablePreviewClear\);\s+if \(state\.tablePreviewId === node\.id\) return;/, "A return to the same tile keeps its preview and costs nothing");
});

/* ---------- Layout rules ---------- */

const ruleOf = (selector) => {
  const at = styles.indexOf(`\n${selector} {`);
  assert.notEqual(at, -1, `${selector} exists`);
  return styles.slice(at, styles.indexOf("}", at));
};
const containerBlock = (name) => {
  const at = styles.indexOf(`@container ${name}`);
  assert.notEqual(at, -1, `@container ${name} exists`);
  return styles.slice(at, styles.indexOf("\n}", at));
};

test("the toolbar and the lens stay inside the stage column", () => {
  const toolbar = ruleOf(".graph-controls");
  assert.match(toolbar, /flex: 0 1 auto;/);
  assert.match(toolbar, /max-width: 100%;/);
  assert.match(toolbar, /flex-wrap: wrap;/);
  assert.match(ruleOf(".lens-controls label"), /max-width: 100%;/);
});

test("a narrow stage gives the corner to the legend, and a narrow panel stacks the Open work summary", () => {
  assert.match(ruleOf(".graph-stage"), /container: graph-stage \/ inline-size;/);
  const stage = containerBlock("graph-stage");
  assert.match(stage, /\.graph-minimap \{ display: none; \}/);
  assert.match(stage, /\.stage-legend \{ max-width: calc\(100% - 78px\); \}/);
  assert.match(stage, /\.graph-legend span \{ white-space: normal; \}/);
  assert.match(ruleOf(".open-work-panel"), /container: work-panel \/ inline-size;/);
  assert.match(containerBlock("work-panel"), /\.work-summary \{ grid-template-columns: minmax\(0, 1fr\); \}/);
});

test("the Discipline select is as wide as its value and no narrower rule cuts it", () => {
  assert.match(ruleOf(".arising-discipline select"), /field-sizing: content;/);
  assert.equal(styles.match(/\.arising-discipline select \{[^}]*max-width/g).length, 1);
});

const luminance = (hex) => {
  const channel = (value) => {
    const v = value / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = [1, 3, 5].map((at) => channel(Number.parseInt(hex.slice(at, at + 2), 16)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test("an Evidence tile keeps a visible edge at every share, and 0% stays far from 100%", () => {
  const token = (name) => styles.match(new RegExp(`--${name}: (#[0-9a-f]{6});`))[1];
  const cell = "#171c25";
  assert.ok(contrast(token("tile-edge"), cell) >= 3, "The edge of a 0% tile against its cell");
  assert.ok(contrast(token("supported"), cell) >= 3, "The edge of a 100% tile against its cell");
  assert.ok(contrast(token("tile-zero"), token("supported")) >= 4.5, "The fills of 0% and 100%");
  assert.match(styles, /\[data-colour="evidence"\] \.arising-chip \{ border-color: color-mix\(in oklab, var\(--supported\) calc\(var\(--evidence, 0\) \* 1%\), var\(--tile-edge\)\);/);
  // Both palettes define the edge, so the mix never falls back to the text colour.
  assert.equal(styles.match(/--tile-edge: #/g).length, 2);
});
