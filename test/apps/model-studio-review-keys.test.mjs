import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), "utf8");
const studio = await read("apps/model-studio/model-studio.js");
const page = await read("apps/model-studio/index.html");
const styles = await read("assets/css/model-studio-workbench.css");

const declaration = (name) => {
  const start = studio.indexOf(`\nfunction ${name}(`);
  assert.notEqual(start, -1, `${name} exists`);
  const end = studio.slice(start + 1).search(/\n(async )?function /);
  return studio.slice(start, start + 1 + end);
};

/** Run named Studio functions against stubs, and hand them back. */
const load = (names, globals = {}) => vm.runInNewContext(`${names.map(declaration).join("\n")}\n({ ${names.join(", ")} });`, globals);

const control = (fields = {}) => ({
  focused: 0,
  focus() { this.focused += 1; },
  scrollIntoView(options) { this.scrolled = options.block; },
  isConnected: true,
  getClientRects: () => [{}],
  matches: () => true,
  closest: () => null,
  contains: () => false,
  setAttribute(name, value) { (this.attributes ??= {})[name] = value; },
  removeAttribute(name) { delete (this.attributes ??= {})[name]; },
  ...fields
});

test("a view's key hands the keyboard to the new view only when what held it is gone", () => {
  const run = (active, change = () => {}) => {
    const calls = [];
    const { viewShortcut } = load(["viewShortcut"], {
      document: { activeElement: active, body: "body" },
      setMode: (mode) => { calls.push(mode); change(active); },
      focusStage: () => calls.push("stage")
    });
    viewShortcut("work");
    return calls;
  };
  assert.deepEqual(run(control(), (card) => { card.isConnected = false; }), ["work", "stage"], "A card redrawn away");
  assert.deepEqual(run(control(), (chip) => { chip.getClientRects = () => []; }), ["work", "stage"], "A tile in a panel that hid");
  assert.deepEqual(run(control()), ["work"], "A control that stays keeps the keyboard, so a key for the same view changes nothing");
  assert.deepEqual(run("body"), ["work"], "With the keyboard nowhere there is nothing to hand on");
});

test("a panel's key leaves the keyboard on the toggle, or on the stage where a narrow page has none", () => {
  const run = ({ inside, side = "navigator", opening = false, stacked = false, toggleShows = true }) => {
    const body = { dataset: {} };
    const search = control();
    const toggle = control({ getClientRects: () => (toggleShows ? [{}] : []) });
    let stage = 0;
    const { panelShortcut } = load(["panelShortcut", "landInStackedNavigator", "navigatorStacked"], {
      document: { activeElement: "here", body, querySelector: () => ({ contains: () => inside }) },
      elements: { [`${side}-toggle`]: toggle, "catalog-search": search },
      matchMedia: () => ({ matches: stacked }),
      togglePanel: () => { body.dataset[`${side}Collapsed`] = opening ? "false" : "true"; },
      focusStage: () => { stage += 1; }
    });
    panelShortcut(side);
    return { toggle: toggle.focused, search: search.focused, stage };
  };
  assert.deepEqual(run({ inside: true }), { toggle: 1, search: 0, stage: 0 });
  assert.deepEqual(run({ inside: true, side: "inspector" }), { toggle: 1, search: 0, stage: 0 });
  assert.deepEqual(run({ inside: true, side: "inspector", toggleShows: false }), { toggle: 0, search: 0, stage: 1 });
  assert.deepEqual(run({ inside: false }), { toggle: 0, search: 0, stage: 0 }, "The keyboard elsewhere stays where it is");
  assert.deepEqual(run({ inside: false, opening: true }), { toggle: 0, search: 0, stage: 0 }, "A wide page opens the panel beside the view");
  assert.deepEqual(run({ inside: false, opening: true, stacked: true }), { toggle: 0, search: 1, stage: 0 }, "A narrow page opens it above the view");
});

test("Escape closes the navigator of a narrow page and returns to its toggle, after the search box has cleared itself", () => {
  const run = (event, { stacked = true, collapsed = "false" } = {}) => {
    let closed = 0, prevented = 0;
    const toggle = control();
    const { stackedNavigatorEscape } = load(["stackedNavigatorEscape", "navigatorStacked"], {
      document: { body: { dataset: { navigatorCollapsed: collapsed } } },
      elements: { "navigator-toggle": toggle },
      matchMedia: () => ({ matches: stacked }),
      togglePanel: () => { closed += 1; }
    });
    stackedNavigatorEscape({ key: "Escape", defaultPrevented: false, target: { closest: () => ({}) }, preventDefault() { prevented += 1; }, ...event });
    return { closed, toggle: toggle.focused, prevented };
  };
  assert.deepEqual(run({}), { closed: 1, toggle: 1, prevented: 1 });
  assert.deepEqual(run({ defaultPrevented: true }), { closed: 0, toggle: 0, prevented: 0 }, "The first Escape belongs to a search with text");
  assert.deepEqual(run({ key: "a" }), { closed: 0, toggle: 0, prevented: 0 });
  assert.deepEqual(run({ target: { closest: () => null } }), { closed: 0, toggle: 0, prevented: 0 }, "From outside the navigator");
  assert.deepEqual(run({}, { stacked: false }), { closed: 0, toggle: 0, prevented: 0 }, "A wide page keeps its panel");
  assert.deepEqual(run({}, { collapsed: "true" }), { closed: 0, toggle: 0, prevented: 0 });
  assert.match(declaration("bindEvents"), /if \(elements\["catalog-search"\]\.value\) event\.preventDefault\(\);\s+elements\["catalog-search"\]\.value = "";/);
});

/** A listener bindEvents adds in line, from where its code starts to its closing line. */
const inlineListener = (start) => {
  const body = declaration("bindEvents");
  const from = body.indexOf(start);
  assert.notEqual(from, -1, start);
  return body.slice(from, body.indexOf("\n  });", from) + 6);
};

test("the key that opens the navigator of a narrow page is not typed into its search box", () => {
  let listener;
  const opened = [];
  vm.runInNewContext(inlineListener('document.addEventListener("keydown", (event) => {\n    if (event.defaultPrevented || event.metaKey'), {
    document: { addEventListener: (_type, handler) => { listener = handler; }, querySelector: () => null },
    state: { presentation: {}, ontology: {}, mode: "causes" }, isTyping: () => false, panelShortcut: (side) => opened.push(side)
  });
  let prevented = 0;
  listener({ key: "[", target: {}, preventDefault() { prevented += 1; } });
  assert.deepEqual(opened, ["navigator"]);
  assert.equal(prevented, 1);
});

test("a window that changes size keeps the message's room in every view; only a graph refits", () => {
  const run = (mode, presentation = {}) => {
    let listener;
    const calls = [];
    vm.runInNewContext(inlineListener('window.addEventListener("resize", () => {'), {
      window: { addEventListener: (_type, handler) => { listener = handler; } },
      state: { presentation, mode, interactionCaseId: "" },
      syncMessageRoom: () => calls.push("room"), fitGraph: () => calls.push("fit"), renderView: () => calls.push("render")
    });
    listener();
    return calls;
  };
  assert.deepEqual(run("table"), ["room"], "A strip that wraps to more lines would lie over the table");
  assert.deepEqual(run("work"), ["room"]);
  assert.deepEqual(run("causes"), ["room", "fit"]);
  assert.deepEqual(run("causes", null), [], "No model open");
});

test("the release dialog closes on a failed switch too, or it would cover the strip that explains it", async () => {
  const run = async ({ chosen = { modelId: "other" }, open = async () => true }) => {
    let listener;
    let closed = 0;
    const failures = [];
    const selector = { value: "other", addEventListener: (_type, handler) => { listener = handler; } };
    vm.runInNewContext(inlineListener('elements["model-selector"].addEventListener("change", async () => {'), {
      elements: { "model-selector": selector, "release-dialog": { close() { closed += 1; } } },
      state: { selection: { modelId: "shown" }, registrySnapshot: { registry: { entries: [] } } },
      LOCAL_MODEL_OPTION: "local", modelSelectionKey: (entry) => entry.modelId, registryEntryForKey: () => chosen,
      openRegisteredModel: open, displaySwitchError: (error) => failures.push(error.message)
    });
    await listener();
    return { closed, failures, value: selector.value };
  };
  assert.deepEqual(await run({ open: async () => { throw new Error("refused"); } }), { closed: 1, failures: ["refused"], value: "shown" });
  assert.deepEqual(await run({}), { closed: 1, failures: [], value: "other" });
  assert.deepEqual(await run({ chosen: null }), { closed: 0, failures: [], value: "shown" }, "No model chosen: the reader is still choosing");
});

test("the toggle of the navigator lands inside it for a key press only", () => {
  assert.match(declaration("bindEvents"), /togglePanel\(side\);\s+if \(event\.detail === 0 && side === "navigator"\) landInStackedNavigator\(\);/);
});

test("Tab out of the Export menu or the picker closes it without moving the keyboard; its opener counts as inside", () => {
  const run = (active) => {
    const menu = control({ hidden: false, contains: (element) => element === "item" });
    const picker = control({ contains: (element) => element === "input", remove() { this.removed = true; } });
    const opener = control();
    const closed = [];
    const toggle = "export-toggle";
    const { closeWhatTabLeft } = load(["closeWhatTabLeft"], {
      document: { activeElement: active === "opener" ? opener : active },
      elements: {
        "export-menu": menu, "export-toggle": toggle,
        "record-actions": { querySelector: (selector) => (selector === ".path-picker" ? picker : opener) }
      },
      setExportMenu: (open) => closed.push(open),
      setTimeout: (run) => run()
    });
    closeWhatTabLeft({ key: "Tab" });
    return { menu: closed, picker: picker.removed === true, expanded: opener.attributes?.["aria-expanded"] };
  };
  assert.deepEqual(run("elsewhere"), { menu: [false], picker: true, expanded: "false" });
  assert.deepEqual(run("item"), { menu: [], picker: true, expanded: "false" });
  assert.deepEqual(run("export-toggle"), { menu: [], picker: true, expanded: "false" });
  assert.deepEqual(run("input"), { menu: [false], picker: false, expanded: undefined });
  assert.deepEqual(run("opener"), { menu: [false], picker: false, expanded: undefined });
  const { closeWhatTabLeft } = load(["closeWhatTabLeft"], { setTimeout: () => assert.fail("Only Tab closes them; a pointer's click stays as it was") });
  closeWhatTabLeft({ key: "Enter" });
});

test("closing the Export menu returns a keyboard to Export, and leaves a pointer's focus alone", () => {
  const run = ({ inMenu, keyboard, open = false }) => {
    const toggle = control();
    const menu = control({ hidden: !open, contains: () => inMenu });
    const { setExportMenu } = load(["setExportMenu"], {
      document: { activeElement: control({ matches: () => keyboard }) },
      elements: { "export-menu": menu, "export-toggle": toggle, "export-status": {} }
    });
    setExportMenu(open);
    return { toggle: toggle.focused, hidden: menu.hidden };
  };
  assert.deepEqual(run({ inMenu: true, keyboard: true }), { toggle: 1, hidden: true });
  assert.deepEqual(run({ inMenu: true, keyboard: false }), { toggle: 0, hidden: true }, "A click");
  assert.deepEqual(run({ inMenu: false, keyboard: true }), { toggle: 0, hidden: true }, "Tab has moved on already");
  assert.deepEqual(run({ inMenu: true, keyboard: true, open: true }), { toggle: 0, hidden: false }, "Opening moves nothing");
});

test("a record's details arriving late hand the keyboard to the heading when they replace its place", () => {
  const heading = control();
  const { restoreInspectorKeyboard } = load(["restoreInspectorKeyboard"], { elements: { "selected-name": heading } });
  restoreInspectorKeyboard(null);
  const pushedDown = control();
  restoreInspectorKeyboard(pushedDown);
  assert.equal(heading.focused, 0, "Nothing was held, or it is still there");
  assert.equal(pushedDown.scrolled, "nearest", "Details drawn above it must not take it out of the window");
  restoreInspectorKeyboard(control({ isConnected: false }));
  assert.equal(heading.focused, 1, "A row in the details that were replaced");
  restoreInspectorKeyboard(control({ getClientRects: () => [] }));
  assert.equal(heading.focused, 2, "A row in a panel that hid");

  const asked = (active) => load(["keyboardInInspector"], { document: { activeElement: active } }).keyboardInInspector();
  const row = control({ closest: () => ({}) });
  assert.equal(asked(row), row);
  assert.equal(asked(control({ closest: () => ({}), matches: () => false })), null, "A pointer's click has no keyboard to keep");
  assert.equal(asked(control()), null, "Outside the inspector");

  const inspector = declaration("renderInspector");
  assert.match(inspector, /const kept = keyboardInInspector\(\);\s+renderInspectedRecord\(record, rationale\);\s+restoreInspectorKeyboard\(kept\);/);
});

test("Tab and the zoom keys keep the card under the keyboard on stage; a pointer's click does not pan", () => {
  const box = { id: "card", x: 1, y: 2 };
  const run = (active, target) => {
    const revealed = [];
    const { revealKeyboardCard, revealFocusedCard } = load(["revealKeyboardCard", "revealFocusedCard"], {
      document: { activeElement: active },
      activeGraphInfo: { layout: { nodes: [box] } },
      revealGraphBoxes: (lead, boxes) => revealed.push(lead, ...boxes)
    });
    if (target) revealKeyboardCard({ target });
    else revealFocusedCard();
    return revealed.length;
  };
  const card = control({ closest: () => ({ dataset: { nodeId: "card" } }) });
  assert.equal(run(card), 2);
  assert.equal(run(control()), 0, "A control off the drawing has no card to bring back");
  assert.equal(run(card, { matches: (selector) => selector === ".graph-node:focus-visible" }), 2);
  assert.equal(run(card, { matches: () => false }), 0, "Focus from a click");
  assert.match(declaration("bindKeyboard"), /addEventListener\("focusin", revealKeyboardCard\)/);
  const events = declaration("bindEvents");
  assert.match(events, /graphViewport\.zoomBy\(1\.25\);\s+revealFocusedCard\(\);/);
  assert.match(events, /graphViewport\.zoomBy\(0\.8\);\s+revealFocusedCard\(\);/);
  assert.match(events, /fitGraph\(\);\s+revealFocusedCard\(\);/);
});

test("the keyboard's highlight keeps the rest of the drawing readable, and a pointer's stays as it was", () => {
  assert.match(declaration("bindGraphHighlight"), /addEventListener\("focus", \(\) => applyGraphHighlight\(target, element\.matches\(":focus-visible"\)\)\)/);
  assert.match(declaration("clearGraphHighlight"), /delete elements\["neighborhood-graph"\]\.dataset\.highlightBy;/);
  const empty = () => ({ querySelectorAll: () => [] });
  const run = (keyboard) => {
    const graph = { dataset: { highlightBy: "keyboard" } };
    const { applyGraphHighlight } = load(["applyGraphHighlight"], {
      activeGraphProjection: {},
      graphHighlight: () => ({ primaryNodes: [], connectedNodes: [], primaryEdges: [], connectedEdges: [] }),
      Set,
      elements: { "neighborhood-graph": graph, "graph-nodes": empty(), "graph-edges": empty() }
    });
    applyGraphHighlight({}, keyboard);
    return graph.dataset.highlightBy;
  };
  assert.equal(run(true), "keyboard");
  assert.equal(run(undefined), undefined);
  // Text on a card at this opacity: the smallest footer stays at 3:1 on its card, as measured in the browser.
  const soft = Number(styles.match(/#neighborhood-graph\[data-highlight-by="keyboard"\] \.graph-node\[data-highlight="dimmed"\][^{]*\{ opacity: (\.\d+); \}/)?.[1]);
  assert.ok(soft >= 0.6, `${soft} keeps card text readable`);
  assert.match(styles, /\.graph-edge\[data-highlight="dimmed"\], \.graph-node\[data-highlight="dimmed"\], \.graph-pill\[data-highlight="dimmed"\] \{ opacity: \.14; \}/, "The pointer's dim is unchanged");
});

test("a card sliding under a still pointer takes nothing from the keyboard", () => {
  assert.doesNotMatch(studio, /addEventListener\("pointerenter"/, "The browser fires it when the drawing pans under the pointer");
  const applied = [];
  const graph = { dataset: {} };
  const listeners = {};
  const element = { addEventListener: (name, listener) => { listeners[name] = listener; }, matches: () => true };
  const context = {
    activeGraphProjection: {},
    graphHighlight: () => ({ primaryNodes: [], connectedNodes: [], primaryEdges: [], connectedEdges: [] }),
    Set,
    elements: { "neighborhood-graph": graph, "graph-nodes": { querySelectorAll: () => [] }, "graph-edges": { querySelectorAll: () => [] } },
    note: (keyboard) => applied.push(keyboard ? "keyboard" : "pointer")
  };
  const { bindGraphHighlight } = vm.runInNewContext(`let graphPointerTarget = null;\n${declaration("clearGraphHighlight")}\n${declaration("applyGraphHighlight").replace("if (!activeGraphProjection) return;", "note(keyboard);")}\n${declaration("bindPointerHighlight")}\n${declaration("bindGraphHighlight")}\n({ bindGraphHighlight });`, context);
  bindGraphHighlight(element, { kind: "node", id: "a" });
  assert.equal(listeners.pointerenter, undefined);
  listeners.pointermove();
  listeners.pointermove();
  assert.deepEqual(applied, ["pointer"], "Moving on within a card does not light the drawing again");
  listeners.focus();
  assert.equal(graph.dataset.highlightBy, "keyboard");
  listeners.pointerleave();
  assert.equal(graph.dataset.highlightBy, "keyboard", "The card sliding away leaves what the keyboard lit");
  listeners.pointermove();
  assert.equal(graph.dataset.highlightBy, undefined, "A real move takes over");
  assert.deepEqual(applied, ["pointer", "keyboard", "pointer"]);
  listeners.pointerleave();
  listeners.pointermove();
  assert.deepEqual(applied, ["pointer", "keyboard", "pointer", "pointer"], "Coming back lights it again");
});

test("the tile under the keyboard stands clear of every dim rule, its ring included", () => {
  const rule = styles.indexOf('.arising-chip[data-dimmed="true"]:focus-visible { opacity: 1 !important; }');
  assert.notEqual(rule, -1);
});

test("the card's name says what the eye reads from its place, border and footer", () => {
  const words = (info, globals = {}) => load(["cardStateWords"], {
    state: { mode: "causes", pathTarget: null, ...globals },
    humanize: (value) => `<${value}>`,
    evidenceShare: (supported, total) => `${supported} of ${total}`
  }).cardStateWords(info);
  assert.equal(words({ focus: true, relation: "focus", status: "well-supported", evidence: { supported: 8, total: 12 } }), ", focus card, <well-supported>, 8 of 12");
  assert.equal(words({ relation: "parent", status: "hypothesized" }), ", cause, <hypothesized>");
  assert.equal(words({ relation: "child" }), ", dependent");
  assert.equal(words({ relation: "both" }), ", cause and dependent");
  assert.equal(words({ relation: "parent" }, { mode: "records" }), ", links to the focus");
  assert.equal(words({ relation: "child" }, { mode: "records" }), ", linked from the focus");
  assert.equal(words({ focus: true, relation: "child" }, { pathTarget: "other" }), ", end of the path", "A path has ends, and no side");
  assert.equal(words({ relation: "child", generic: true }, { mode: "graph" }), "", "A plain model's card");
  assert.equal(words({ focus: true, generic: true }, { mode: "graph" }), ", focus card");
  assert.match(declaration("drawNodeCard"), /"aria-label": `\$\{name\}\$\{cardStateWords\(info\)\}/);
});

test("the selected card, tile and row say so; the mark goes with the selection", () => {
  const { markCurrent } = load(["markCurrent"]);
  const element = control();
  markCurrent(element, true);
  assert.equal(element.attributes["aria-current"], "true");
  markCurrent(element, false);
  assert.equal(element.attributes["aria-current"], undefined);
  assert.match(declaration("drawNodeCard"), /markCurrent\(group, /);
  assert.match(declaration("markSelection"), /markCurrent\(element, /);
  assert.match(declaration("updateArisingTable"), /markCurrent\(chip, id === state\.selectedId\);/);
  assert.match(declaration("markWorkSelection"), /markCurrent\(row, selected\);/);
});

test("a badge names its cause, and a tile's description holds what its title and colour say", () => {
  const row = declaration("causeRow");
  assert.match(row, /badge\.setAttribute\("aria-label", `\$\{ROLE_TEXT\[edge\.role\]\?\.label \?\? humanize\(edge\.role\)\} cause \$\{endpoint === "source" \? "from" : "of"\} \$\{node\?\.name/);
  assert.match(declaration("renderTechnicalRelations"), /badge\.setAttribute\("aria-label", `Open this relation \$\{endpoint === "source" \? "from" : "to"\}/);
  const describe = (id, dimmed, coverage) => load(["chipDescription"], {
    state: { presentationMetadata: { arisingTable: { domains: new Map([["d", { name: "Domain" }]]) } } },
    nodeSummary: () => ({ domain: id, scientificStatus: "established" }),
    humanize: () => "Established",
    causeEvidence: () => coverage,
    evidenceShare: (supported, total) => `${supported} of ${total} cite`
  }).chipDescription(id, dimmed);
  assert.equal(describe("d", false, { supported: 2, total: 5 }), "Established; Domain. 2 of 5 cite.");
  assert.equal(describe("d", true, { supported: 2, total: 5 }), "Established; Domain. 2 of 5 cite. Outside the current filter.");
  assert.equal(describe("none", false, null), "Established.", "The root has no causes in the graph");
  assert.match(declaration("updateArisingTable"), /if \(chip\.dataset\.dimmed !== String\(dimmed\)\) chip\.setAttribute\("aria-description", chipDescription\(id, dimmed\)\);/);
});

test("results that change with no focus move are read out from regions that stay in the page", () => {
  assert.match(page, /<p id="graph-counts" role="status">/);
  assert.match(page, /<span id="graph-subtitle" role="status">/);
  assert.match(page, /<div role="status"><div class="catalog-empty" id="catalog-empty" hidden>/);
  const update = declaration("updateArisingTable");
  assert.match(update, /if \(elements\["graph-subtitle"\]\.textContent !== heading\) elements\["graph-subtitle"\]\.textContent = heading;/, "Only a real change: arrows and hovers pass through here");
  const picker = declaration("pathPicker");
  assert.match(picker, /none\.setAttribute\("role", "status"\);/);
  assert.match(picker, /none\.textContent = input\.value\.trim\(\) && !rows\.length \? "No arising has that name\." : "";/);
  assert.match(picker, /picker\.append\(input, list, none\);/);
  assert.match(styles, /\.path-none:empty \{ margin-top: -4px; padding: 0; \}/, "An empty region takes no room in the picker");
});

test("Down from the search box goes to the first result, as Enter does", () => {
  const search = declaration("bindEvents");
  assert.match(search, /querySelector\("\.catalog-item"\);\s+if \(first\) \{\s+event\.preventDefault\(\);\s+first\.focus\(\);/);
  assert.doesNotMatch(search, /\.catalog-item\[tabindex="0"\]/);
});

test("the guide lists what Escape does", () => {
  const guide = declaration("renderGuide");
  assert.match(guide, /\["Escape", ontology \? "Go back one step: from a line to its card, clear the search, close the Path to\.\.\. picker or the Export menu, close the navigator of a narrow page"/);
  assert.match(guide, /: "Go back one step: from a line to its card, clear the search, close the Export menu, close the navigator of a narrow page"\]/, "A plain model has no Path to... picker");
});
