import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import { plainFailure } from "../../apps/model-studio/plain-text.js";

const root = new URL("../../", import.meta.url);
const studio = readFileSync(new URL("apps/model-studio/model-studio.js", root), "utf8");
const markup = readFileSync(new URL("apps/model-studio/index.html", root), "utf8");

function declaration(name) {
  const start = studio.search(new RegExp(`^(?:async )?function ${name}\\(`, "m"));
  assert.notEqual(start, -1, name);
  const end = studio.slice(start + 1).search(/\n(?:\/\*\*[^\n]*\n|\/\*\*\n(?: \*[^\n]*\n)+)?(?:async )?function /);
  return studio.slice(start, end === -1 ? undefined : start + 1 + end);
}

function element() {
  return {
    dataset: {}, hidden: false, disabled: false, textContent: "", value: "", children: [], style: { setProperty() {} }, listeners: {},
    replaceChildren(...children) { this.children = children; }, append(...children) { this.children.push(...children); },
    addEventListener(name, listener) { this.listeners[name] = listener; }, setAttribute() {}, focus() { this.focused = true; },
    querySelectorAll: () => [], querySelector: () => null, closest: () => null, parentElement: null
  };
}

const elementStore = () => new Proxy({}, { get: (target, key) => target[key] ??= element() });

const OWNED = new Map([["own", "a"], ["borrowed", "b"], ["inCase", "a"]]);
const nodeSummary = (id) => (id === undefined || id === null ? undefined : { id, arisingId: OWNED.get(id) });
const isArising = (node) => Boolean(node) && !OWNED.has(node.id);

function focusCode(overrides = {}) {
  const elements = elementStore();
  const calls = [];
  const state = {
    ontology: { arisingIds: new Set(["a", "b", "c"]), members: new Map([["a", ["own", "inCase"]], ["b", ["borrowed"]], ["c", []]]) },
    presentation: { has: () => true }, interactionViews: { cases: [{ id: "case", entityIds: ["inCase"] }] }, interactionCaseId: "",
    mode: "subgraph", focusId: "a", recordFocusId: null, selectedId: "a", selectedRelationId: null, pathTarget: null, ...overrides
  };
  const code = vm.runInNewContext(`${declaration("endCaseOutside")}\n${declaration("setMode")}\n${declaration("inspectNode")}\n${declaration("inspectWorkCause")}\n${declaration("focusNode")}\n({ setMode, inspectNode, inspectWorkCause, focusNode });`, {
    state, elements, nodeSummary, isArising, ONTOLOGY_MODES: ["table", "causes", "subgraph", "records", "work"],
    replaceLocationState: (options) => calls.push(options?.push ? "push" : "replace"), render() {}, markSelection() {}, revealInTree() {}, updateControls() {},
    updateArisingTable() {}, renderInspector() {}, inspectRelation() {}
  });
  return { ...code, state, elements, calls };
}

test("Records on a record of another arising moves the focus to that arising: there is one focus", () => {
  const walk = focusCode({ selectedId: "borrowed" });
  walk.setMode("records");
  assert.equal(walk.state.recordFocusId, "borrowed");
  assert.equal(walk.state.focusId, "b", "The Subgraph tab and every later view open on the record's own arising");
});

test("a record of the focused arising leaves the focus where it is", () => {
  const walk = focusCode({ selectedId: "own" });
  walk.setMode("records");
  assert.equal(walk.state.focusId, "a");
  assert.equal(walk.state.recordFocusId, "own");
});

test("a new focus is a new history entry, so Back returns to the focus before it", () => {
  const walk = focusCode({ mode: "causes" });
  walk.focusNode("b");
  assert.equal(walk.state.focusId, "b");
  assert.deepEqual(walk.calls, ["push"], "Only selecting replaces the entry");
});

function urlCode(overrides = {}) {
  const location = { hash: "" };
  const state = {
    selection: { modelId: "m", version: "1" }, manifest: null, ontology: {}, interactionPerspectiveId: "", interactionCaseId: "",
    mode: "causes", focusId: "a", recordFocusId: null, selectedId: "a", selectedRelationId: null, depth: 1, direction: "both", pathTarget: null,
    work: { section: "causes", level: null, domain: null, shown: null }, ...overrides
  };
  const write = (_state, _title, url) => { location.hash = url; };
  vm.runInNewContext(`${declaration("replaceLocationState")}\nreplaceLocationState();`, {
    state, location, URLSearchParams, nodeSummary, history: { replaceState: write, pushState: write }
  });
  return new URLSearchParams(location.hash.slice(1));
}

test("the address names the subgraph on screen, never the arising of a record from elsewhere", () => {
  const foreign = urlCode({ mode: "subgraph", focusId: "a", recordFocusId: "borrowed", selectedId: "borrowed" });
  assert.equal(foreign.get("node"), "a");
  assert.equal(foreign.get("select"), "borrowed");
  const own = urlCode({ mode: "subgraph", focusId: "a", recordFocusId: "own", selectedId: "own" });
  assert.equal(own.get("node"), "own", "Its own arising's subgraph opens from the record itself");
  assert.equal(own.get("select"), null);
});

test("the address carries a case only where the case is drawn", () => {
  assert.equal(urlCode({ mode: "records", recordFocusId: "inCase", selectedId: "inCase", interactionCaseId: "case" }).get("case"), "case");
  assert.equal(urlCode({ mode: "graph", interactionCaseId: "case" }).get("case"), "case");
  for (const mode of ["causes", "table", "subgraph", "work"]) {
    assert.equal(urlCode({ mode, interactionCaseId: "case" }).get("case"), null, mode);
  }
});

function controls(overrides) {
  const elements = elementStore();
  const state = {
    direction: "both", depth: 1, roleFilter: new Set(), causeFilters: {}, causalOrder: false, ontology: { members: new Map() },
    interactionViews: {}, interactionCaseId: "", pathTarget: null, mode: "causes", focusId: "a", ...overrides
  };
  vm.runInNewContext(`${declaration("updateControls")}\nupdateControls();`, {
    state, elements, String, Boolean, document: { body: { dataset: {} } }, activeGraphInfo: {}, syncMessageRoom() {}, syncRovingGroups() {}, setExportMenu() {}
  });
  return elements;
}

test("a case takes Depth and Direction away only in the views that draw it", () => {
  const causes = controls({ mode: "causes", interactionCaseId: "case" });
  assert.equal(causes["depth-controls"].hidden, false);
  assert.equal(causes["direction-controls"].hidden, false);
  const records = controls({ mode: "records", interactionCaseId: "case" });
  assert.equal(records["depth-controls"].hidden, true);
  assert.equal(records["direction-controls"].hidden, true);
  assert.equal(controls({ mode: "records" })["depth-controls"].hidden, false);
});

test("a focus that leaves a case ends it, in Table, Open work and on the way into Records", () => {
  for (const mode of ["table", "work"]) {
    const walk = focusCode({ mode, focusId: "a", recordFocusId: "inCase", selectedId: "inCase", interactionCaseId: "case" });
    walk.inspectNode("c");
    assert.equal(walk.state.focusId, "c");
    assert.equal(walk.state.interactionCaseId, "", mode);
    assert.equal(walk.elements["interaction-case"].value, "");
  }
  const cause = focusCode({ mode: "work", interactionCaseId: "case" });
  cause.inspectWorkCause({ id: "line", target: "c" });
  assert.equal(cause.state.interactionCaseId, "");
  const records = focusCode({ mode: "subgraph", selectedId: "own", interactionCaseId: "case" });
  records.setMode("records");
  assert.equal(records.state.interactionCaseId, "", "The record selected in between lies outside the case");
  const back = focusCode({ mode: "causes", focusId: "a", recordFocusId: "inCase", selectedId: "a", interactionCaseId: "case" });
  back.setMode("records");
  assert.equal(back.state.interactionCaseId, "case", "Going back to a record of the case keeps it");
  assert.equal(back.state.recordFocusId, "inCase");
});

test("inspecting inside the case keeps it", () => {
  const walk = focusCode({ mode: "table", focusId: "a", interactionCaseId: "case" });
  walk.inspectNode("a");
  assert.equal(walk.state.interactionCaseId, "case");
});

const TABLE = { levels: [{ value: 0 }, { value: 1 }, { value: 8 }], domains: new Map([["life", {}]]) };

function requestedWork(hash) {
  const state = { ontology: { arisings: [{ level: 0 }, { level: 1 }] } };
  const code = vm.runInNewContext(`const WORK_SECTIONS = [{ key: "causes" }, { key: "unsupported" }];\n${declaration("requestedWork")}\nrequestedWork;`, { state });
  return { ...code(new URLSearchParams(hash), { arisingTable: TABLE }) };
}

test("an Open work address writes only what differs from the defaults", () => {
  const plain = urlCode({ mode: "work" });
  for (const name of ["section", "level", "domain"]) assert.equal(plain.get(name), null, `${name} stays out of the plain link`);
  const full = urlCode({ mode: "work", work: { section: "unsupported", level: 0, domain: "life", shown: 200 } });
  assert.equal(full.get("section"), "unsupported");
  assert.equal(full.get("level"), "0", "Level 0 is a level, not an absent one");
  assert.equal(full.get("domain"), "life");
  assert.equal(full.get("shown"), null);
  assert.equal(urlCode({ mode: "causes", work: { section: "unsupported", level: 1, domain: "life" } }).get("section"), null, "Only Open work writes them");
});

test("an Open work address is read back, and what the release does not hold falls back to the default", () => {
  assert.deepEqual(requestedWork("section=unsupported&level=0&domain=life"), { section: "unsupported", level: 0, domain: "life" });
  assert.deepEqual(requestedWork(""), { section: "causes", level: null, domain: null }, "The plain link keeps working");
  assert.deepEqual(requestedWork("section=junk&level=99&domain=__proto__"), { section: "causes", level: null, domain: null });
  assert.deepEqual(requestedWork("level=abc&domain=constructor"), { section: "causes", level: null, domain: null });
  assert.equal(requestedWork("level=8").level, null, "A level the table declares and no arising holds is not on the Level select");
});

test("a filter of Open work goes to the address at once, without a new history entry", () => {
  assert.match(declaration("setWorkFilter"), /shown: null \};\n\s+replaceLocationState\(\);/);
});

test("a first draw reaches the selected line, however far down the list it lies", () => {
  const run = (section, selectedRelationId, selectedId) => vm.runInNewContext(`const WORK_PAGE = 100;\n${declaration("workReach")}\nworkReach(section, groups);`, {
    section, state: { selectedRelationId, selectedId },
    groups: [{ items: Array.from({ length: 150 }, (_, index) => ({ id: `row${index}` })) }, { items: Array.from({ length: 150 }, (_, index) => ({ id: `row${150 + index}` })) }]
  });
  assert.equal(run("causes", null, "x"), 100, "No selected line: one page");
  assert.equal(run("causes", "row99", "x"), 100);
  assert.equal(run("causes", "row100", "x"), 200);
  assert.equal(run("causes", "row299", "x"), 300);
  assert.equal(run("unsupported", null, "row150"), 200);
  assert.equal(run("unsupported", "row150", "row0"), 100, "A selected relation is no selected arising");
});

test("a press that changes the view takes the keyboard to the stage, even from a control that stays on the page", () => {
  const listeners = [];
  const landed = [];
  const state = { mode: "causes", focusId: "a", recordFocusId: null, pathTarget: null, interactionCaseId: "", selectedRelationId: null };
  const heading = { getClientRects: () => [{}] };
  const context = {
    state, JSON, elements: { studio: { scrollIntoView() {} }, "selected-name": heading },
    document: { addEventListener: (_name, listener) => listeners.push(listener), activeElement: { getClientRects: () => [{}] }, body: {} },
    matchMedia: () => ({ matches: false }),
    focusStage: () => landed.push("stage"),
    landInInspector: (relation) => landed.push(relation === "line" ? "badge of the line" : "inspector")
  };
  vm.runInNewContext(`${declaration("stageView")}\n${declaration("showViewOnNarrowPage")}\n${declaration("navigatorStacked")}\n${declaration("bindKeyboardLanding")}\nbindKeyboardLanding();`, context);
  const press = (change, inActions = false, backTo = false) => {
    // The control and what holds it, as the page nests them: Back to sits in a row of class record-actions, the view actions in #record-actions.
    const chain = backTo ? [{ classes: ["back-to-record"] }, { classes: ["record-actions"] }, { id: "relation-inspector" }, { classes: ["inspector-panel"] }]
      : inActions ? [{}, { id: "record-actions" }, { classes: ["inspector-panel"] }]
        : [{}, { classes: ["inspector-panel"] }];
    const matches = (part) => chain.some((node) => (part.startsWith("#") ? node.id === part.slice(1) : part.startsWith(".") && (node.classes ?? []).includes(part.slice(1))));
    const control = { closest: (selector) => (selector.split(",").some((part) => matches(part.trim())) ? {} : null) };
    const event = { detail: 0, target: { closest: () => control } };
    listeners[0](event);
    change();
    listeners[1](event);
  };
  press(() => { state.mode = "subgraph"; });
  assert.deepEqual(landed, ["stage"], "Open subgraph, in the arising's panel, stays on the page until the details are drawn");
  press(() => { state.selectedRelationId = "r"; });
  assert.deepEqual(landed, ["stage"], "Nothing changed on stage, so a control still there keeps the keyboard");
  press(() => {}, true);
  assert.deepEqual(landed, ["stage"], "An action that changed nothing keeps it too");
  context.document.activeElement = context.document.body;
  press(() => {});
  assert.deepEqual(landed, ["stage", "inspector"], "A control gone from the page hands on to the inspector");
  press(() => {}, true);
  assert.deepEqual(landed, ["stage", "inspector", "stage"], "Or, from the row of actions, to the stage");
  landed.length = 0;
  const fromRelation = (backTo, loaded) => {
    state.selectedRelationId = "line";
    context.document.activeElement = { getClientRects: () => [{}] };
    press(() => {
      state.selectedRelationId = null;
      // Details already loaded arrive in a microtask between the two listeners, and hand the keyboard to the heading.
      context.document.activeElement = loaded ? heading : context.document.body;
    }, false, backTo);
  };
  fromRelation(true, true);
  assert.deepEqual(landed, ["badge of the line"], "Back to returns to the badge that opened the relation, past the heading that only stood in");
  fromRelation(true, false);
  assert.deepEqual(landed, ["badge of the line", "badge of the line"], "Also before the details arrive");
  landed.length = 0;
  fromRelation(false, true);
  assert.deepEqual(landed, [], "A cause or effect row of the relation leaves the keyboard on the heading of the record it opened");
  fromRelation(false, false);
  assert.deepEqual(landed, ["inspector"], "And lands there before the details arrive, not on a badge in that record");
});

function restoring(overrides = {}) {
  const elements = elementStore();
  const calls = [];
  const state = {
    registrySnapshot: { registry: { entries: [{ modelId: "reg", version: "1" }] } }, selection: null, manifest: { model: { id: "local", version: "1" } },
    interactionViews: null, depth: 1, direction: "both", loadMessage: "Local RDF model verified", switchFailed: false, ...overrides
  };
  const code = vm.runInNewContext(`let pendingModelLoad = pending; let modelLoadSequence = 0;\n${declaration("restoreLocationState")}\n${declaration("endSwitchFailure")}\nrestoreLocationState;`, {
    state, elements, location: { hash: overrides.hash ?? "#model=local&version=1&node=x" }, URLSearchParams, DEFAULT_MODEL_SELECTION: null,
    pending: overrides.pending ?? null,
    requestedRegistryEntry: (entries) => entries[0], modelSelectionKey: (entry) => `${entry.modelId}@${entry.version}`,
    namesUnknownModel: () => overrides.unknownModel === true, noteUnknownModel: () => calls.push("note"), openInspectorForLink: () => calls.push("link"),
    openRegisteredModel: async () => { calls.push("registry"); return overrides.opens !== false; }, requestedGraphState: () => ({ focusId: "x", depth: 2, direction: "parents" }),
    applyRequestedFocus: () => calls.push("focus"), restoreInteractionLocationState() {}, render: () => calls.push("render"), replaceLocationState: () => calls.push("address"),
    selectLocalOption: () => calls.push("local option"), selectRegisteredOption: () => calls.push("registered option")
  });
  return { run: code, calls, state, elements };
}

test("a link to a model not published here gets its note after the view it opened, and a superseded one gets none", async () => {
  const applied = restoring({ selection: { modelId: "reg", version: "1" }, unknownModel: true, hash: "#model=gone&version=1" });
  await applied.run();
  assert.deepEqual(applied.calls, ["link", "focus", "render", "address", "note"], "A render would rewrite the strip, so the note comes last");
  const opened = restoring({ unknownModel: true, hash: "#model=gone&version=1" });
  await opened.run();
  assert.deepEqual(opened.calls, ["registry", "note"]);
  const superseded = restoring({ unknownModel: true, opens: false, hash: "#model=gone&version=1" });
  await superseded.run();
  assert.deepEqual(superseded.calls, ["registry"]);
  const inside = restoring({ unknownModel: true });
  await inside.run();
  assert.equal(inside.calls.includes("note"), false, "An address naming the open local model stays inside it");
});

test("the note takes its room back from the Map, also when the strip it replaces was hidden in the same frame", () => {
  const run = (mode) => {
    const elements = elementStore();
    const calls = [];
    elements["graph-message"].hidden = true;
    elements["graph-message"].prepend = () => calls.push("note");
    vm.runInNewContext(`${declaration("noteUnknownModel")}\nnoteUnknownModel();`, {
      state: { mode }, elements, document: { createTextNode: (text) => text },
      syncMessageRoom: () => calls.push("room"), fitArisingMap: () => calls.push("fit"), updateArisingTable: () => calls.push("table")
    });
    return { calls, hidden: elements["graph-message"].hidden };
  };
  assert.deepEqual(run("table"), { calls: ["note", "room", "fit", "table"], hidden: false });
  assert.deepEqual(run("graph"), { calls: ["note", "room"], hidden: false }, "No Map to fit");
});

test("Back inside a local model stays in that model", async () => {
  const local = restoring();
  await local.run();
  assert.deepEqual(local.calls, ["link", "focus", "render", "address"]);
  assert.equal(local.state.depth, 2);
  const other = restoring({ hash: "#model=reg&version=1" });
  await other.run();
  assert.deepEqual(other.calls, ["registry"], "An address of another release leaves it");
  const inFlight = restoring({ pending: { abort() {} } });
  await inFlight.run();
  assert.equal(inFlight.calls[0], "local option", "A superseded switch puts the local model back in the selector");
  assert.equal(inFlight.elements["load-state"].textContent, "Local RDF model verified");
});

test("an address on an open page goes through the same steps as a load, and is written back normalised", async () => {
  const registered = restoring({ selection: { modelId: "reg", version: "1" }, hash: "#model=nope&version=1" });
  await registered.run();
  assert.deepEqual(registered.calls, ["link", "focus", "render", "address"], "The inspector opens before the view fits itself to the room left");
  assert.doesNotMatch(declaration("restoreLocationState"), /focusNode/);
});

test("the status names the release on screen again once a failed switch is behind", async () => {
  const back = restoring({ selection: { modelId: "reg", version: "1" }, hash: "#model=reg&version=1", switchFailed: true, loadMessage: "Model verified" });
  back.elements["load-state"].textContent = "Model switch failed";
  await back.run();
  assert.equal(back.elements["load-state"].textContent, "Model verified");
  assert.equal(back.state.switchFailed, false);
  assert.match(declaration("graphMessage"), /^function graphMessage\([^\n]*\n {2}endSwitchFailure\(\);/, "Any new view ends it");
  assert.match(declaration("openRegisteredModel"), /state\.switchFailed = false;/, "A new attempt owns the status");
  assert.match(declaration("start"), /addEventListener\("popstate", \(\) => \{\n\s+if \(state\.switchFailed\) render\(\);/, "Back from the failed entry fires no hashchange");
});

test("a choice in the inspector shows its drawing where the panels stack, and only a choice that changes the view", () => {
  const listeners = [];
  const state = { mode: "causes", focusId: "a", recordFocusId: null, pathTarget: null, interactionCaseId: "", selectedRelationId: null };
  const scrolled = [];
  const stack = { matches: true };
  const context = {
    state,
    JSON,
    elements: { studio: { scrollIntoView: (options) => scrolled.push(options.block) } },
    document: { addEventListener: (_name, listener, capture) => listeners.push({ listener, capture }), activeElement: { getClientRects: () => [{}] }, body: {} },
    matchMedia: () => stack,
    focusStage() {},
    landInInspector() {}
  };
  vm.runInNewContext(`${declaration("stageView")}\n${declaration("showViewOnNarrowPage")}\n${declaration("navigatorStacked")}\n${declaration("bindKeyboardLanding")}\nbindKeyboardLanding();`, context);
  const press = (change, detail = 1) => {
    const event = { detail, target: { closest: () => ({ closest: () => null }) } };
    listeners[0].listener(event);
    change();
    listeners[1].listener(event);
  };
  press(() => { state.selectedRelationId = "r"; });
  assert.deepEqual(scrolled, [], "The inspector alone changed");
  press(() => { state.pathTarget = "b"; });
  assert.deepEqual(scrolled, ["start"], "A path");
  press(() => { state.interactionCaseId = "case"; });
  assert.equal(scrolled.length, 2, "A case, even on the record already open");
  press(() => { state.focusId = "c"; }, 0);
  assert.equal(scrolled.length, 3, "By keyboard too");
  stack.matches = false;
  press(() => { state.focusId = "d"; });
  assert.equal(scrolled.length, 3, "A wide page has the view beside the inspector");
  stack.matches = true;
  const action = (detail) => {
    const event = { detail, target: { closest: () => ({ closest: () => ({}) }) } };
    listeners[0].listener(event);
    context.document.activeElement = context.document.body;
    listeners[1].listener(event);
    context.document.activeElement = { getClientRects: () => [{}] };
  };
  action(1);
  assert.equal(scrolled.length, 3, "A pointer's press of an action that changes nothing leaves the page where it is");
  action(0);
  assert.equal(scrolled.length, 4, "The keyboard goes to the stage all the same, so the stage has to be in the window");
  for (const mode of ["table", "work"]) {
    state.mode = mode;
    state.interactionCaseId = "held over from Records";
    press(() => { state.interactionCaseId = ""; state.focusId = `${mode} selection`; });
    assert.equal(scrolled.length, 4, `${mode} draws no case and follows the selection, so ending one there changes nothing on stage`);
  }
});

test("a failed switch gives its message room and writes the address of what is shown", () => {
  const elements = elementStore();
  const calls = [];
  const state = { presentation: {}, mode: "table", switchFailed: false };
  vm.runInNewContext(`${declaration("displaySwitchError")}\ndisplaySwitchError(Object.assign(new Error("A Model Pack HTTP request failed."), { code: "MODEL_PACK_BROWSER_FETCH_FAILED" }));`, {
    state, elements, document: { body: { dataset: {} } }, displayError() {}, Error, Object, plainFailure, console: { error() {} },
    syncMessageRoom: () => calls.push("room"), replaceLocationState: () => calls.push("address"), updateArisingTable: () => calls.push("table")
  });
  assert.deepEqual(calls, ["room", "table", "address"]);
  assert.equal(state.switchFailed, true);
  assert.equal(elements["load-state"].textContent, "Model switch failed");
  assert.equal(elements["graph-message"].textContent, "Could not open that model. The server could not be reached or did not send the data.");
  assert.equal(elements["model-selector"].disabled, false);
});

function failedLoad(overrides = {}) {
  const elements = elementStore();
  const calls = [];
  const state = { attempted: { modelId: "nix", version: "v1" }, registrySnapshot: {}, ...overrides };
  const location = { reload: () => calls.push("reload") };
  const body = { dataset: {} };
  const display = vm.runInNewContext(`let eventsBound = false;\n${declaration("displayError")}\ndisplayError;`, {
    state, elements, location, document: { body, createTextNode: (text) => ({ text }) }, plainFailure, console: { error() {} },
    modelSelectionLabel: (entry) => `${entry.modelId} label`, selectRegisteredOption: (entry) => calls.push(`select ${entry.modelId}`),
    createElement: (_tag, _class, text) => ({ ...element(), textContent: text }), syncMessageRoom() {}, renderGuide: () => calls.push("guide"), bindEvents: () => calls.push("bind")
  });
  return { display, elements, calls, body };
}

test("a failed first load names the model it tried, offers Retry and leaves only what can act", () => {
  const { display, elements, calls, body } = failedLoad();
  display(new TypeError("Failed to fetch"));
  assert.equal(body.dataset.state, "error");
  assert.equal(elements["window-model-id"].textContent, "nix label");
  assert.equal(elements["model-selector"].disabled, false);
  assert.equal(elements["rdf-import-open"].disabled, false);
  assert.equal(elements["reset-view"].disabled, true);
  for (const id of ["view-tabs", "direction-controls", "depth-controls", "role-controls", "causal-order", "zoom-controls"]) assert.equal(elements[id].hidden, true, id);
  assert.notEqual(elements["selected-name"].textContent, "Loading...");
  const [text, retry] = elements["graph-message"].children;
  assert.equal(text.text, "The server could not be reached or did not send the data.", "The browser's own words stay in the console");
  assert.equal(retry.textContent, "Retry");
  retry.listeners.click();
  assert.ok(calls.includes("reload"));
  assert.ok(calls.includes("select nix"));
  assert.ok(calls.includes("guide"));
  display(new Error("Failed again"));
  assert.equal(calls.filter((call) => call === "bind").length, 1, "The controls are bound once");
});

test("no registry: nothing to choose from, Retry stays", () => {
  const { display, elements } = failedLoad({ attempted: null, registrySnapshot: null });
  display(new Error("Failed to fetch"));
  assert.equal(elements["model-selector"].disabled, true);
  assert.equal(elements["graph-message"].children[1].textContent, "Retry");
});

test("the next model opened brings back what a failed first load took away", () => {
  const code = declaration("activateModelPack");
  assert.match(code, /elements\["reset-view"\]\.disabled = false;/);
  assert.match(declaration("renderCatalog"), /showSelectValues\(\);\n {2}if \(!state\.presentation\) return;/, "The navigator's controls stay safe with no model");
});

test("only a model the reader chose opens a new history entry", () => {
  const code = declaration("activateModelPack");
  assert.match(code, /replaceLocationState\(\{ push: options\.useLocation !== true \}\);/);
  assert.match(code, /openInspectorForLink\(requested\);\n\s+applyRequestedFocus\(requested\);/, "A link across models opens the inspector like any other; Back across them finds an entry already written");
  assert.match(code, /state\.loadMessage = options\.loadMessage \?\? "Model verified";/);
});

test("the search stays within what the catalogue accepts", () => {
  const search = "x".repeat(300);
  const query = vm.runInNewContext(`${declaration("currentCatalogQuery")}\ncurrentCatalogQuery();`, {
    elements: new Proxy({}, { get: (_target, key) => ({ value: key === "catalog-search" ? search : "id:asc" }) }), selectFacetValue: () => []
  });
  assert.equal(query.search.length, 256);
  assert.match(markup, /<input id="catalog-search"[^>]*maxlength="256"/);
});

test("Reset ends an expansion, which a plain model's default focus would otherwise keep", () => {
  assert.match(declaration("bindEvents"), /elements\["reset-view"\]\.addEventListener\("click", \(\) => \{[\s\S]*?state\.expanded = \[\];[\s\S]*?focusNode\(defaultFocusId\(\)/);
});

function actions(overrides) {
  const pushed = [];
  vm.runInNewContext(`${declaration("renderActions")}\nrenderActions({ id: "own", arisingId: "a" });`, {
    state: { ontology: { arisingIds: new Set(["a", "b"]) }, mode: "subgraph", focusId: "a", ...overrides }, elements: elementStore(), isArising: () => false,
    actionButton: (label) => { pushed.push(label); return label; }, focusNode() {}
  });
  return pushed;
}

test("Show in subgraph is offered only where it would change something", () => {
  assert.deepEqual(actions({}), ["Explore relations"]);
  assert.deepEqual(actions({ focusId: "b" }), ["Show in subgraph", "Explore relations"], "A record borrowed from another arising");
  assert.deepEqual(actions({ mode: "causes" }), ["Show in subgraph", "Explore relations"]);
});

async function failedDetails(previous) {
  const elements = elementStore();
  elements["arising-panel"].hidden = previous.arisingPanelHidden;
  elements["rationale-panel"].hidden = previous.rationaleHidden;
  elements["arising-details"].children = ["records of the previous arising"];
  let reject;
  const state = {
    selectedId: "next", selectedRelationId: null, graphIndex: { edgesById: new Map(), incoming: new Map(), outgoing: new Map() }, causes: { byChild: new Map(), byParent: new Map() },
    presentation: { inspect: () => ({ node: { id: "next" }, relationCounts: {} }) }, ontology: {}, presentationMetadata: {},
    browse: { inspectWithEvidence: () => new Promise((_resolve, failure) => { reject = failure; }) }
  };
  const body = { dataset: {} };
  const render = vm.runInNewContext(`let pendingInspection = null; let inspectionSequence = 0;\n${declaration("renderInspector")}\nrenderInspector;`, {
    state, elements, AbortController, String, plainFailure, console: { error() {} }, document: { body }, isArising: () => false, displayName: () => "Next", prose: (text) => text, renderArisingCases() {}, renderHeader() {}, renderActions() {},
    renderFacts() {}, renderLineage() {}, renderCauseList() {}, renderTechnicalRelations() {}, renderInspectedRecord() {}, renderRelationInspector() {},
    createElement: (_tag, _class, text) => ({ ...element(), textContent: text })
  });
  render();
  assert.equal(elements["record-failure"].hidden, true);
  reject(new Error("refused"));
  await new Promise((resolve) => setImmediate(resolve));
  return { elements, body };
}

test("details that fail to load say so in view, and nothing of the record before stays under the new heading", async () => {
  const { elements, body } = await failedDetails({ arisingPanelHidden: false, rationaleHidden: true });
  assert.equal(body.dataset.detailState, "error");
  assert.equal(elements["record-failure"].hidden, false);
  const [message, retry] = elements["record-failure"].children;
  assert.equal(message.textContent, "Could not load this record's details. Something went wrong while opening it.");
  assert.doesNotMatch(message.textContent, /refused/, "The console keeps the original");
  assert.equal(retry.textContent, "Retry record details");
  assert.equal(elements["arising-panel"].hidden, true);
  assert.deepEqual(elements["arising-details"].children, []);
  assert.equal(elements["rationale-panel"].hidden, false);
  retry.listeners.click({ detail: 0 });
  assert.equal(elements["record-failure"].hidden, true, "Retry starts over");
  assert.equal(elements["selected-name"].focused, true, "The keyboard is not lost with the button");
  const clicked = await failedDetails({ arisingPanelHidden: false, rationaleHidden: true });
  clicked.elements["record-failure"].children[1].listeners.click({ detail: 1 });
  assert.equal(clicked.elements["record-failure"].hidden, true);
  assert.equal(clicked.elements["selected-name"].focused, undefined, "A click moves no focus");
  assert.match(markup, /id="record-actions"[^\n]*\n\s*<div id="record-failure"[^>]*role="alert"/, "Near the top, above the long sections");
});

function loadingDetails(inspectorShown) {
  const elements = elementStore();
  elements["arising-panel"].hidden = false;
  elements["arising-details"].children = ["records of what is shown"];
  const state = {
    selectedId: "next", selectedRelationId: null, inspectorShown, graphIndex: { edgesById: new Map(), incoming: new Map(), outgoing: new Map() }, causes: { byChild: new Map(), byParent: new Map() },
    presentation: { inspect: () => ({ node: { id: "next" }, relationCounts: {} }) }, ontology: {}, presentationMetadata: {},
    browse: { inspectWithEvidence: () => new Promise(() => {}) }
  };
  const body = { dataset: {} };
  vm.runInNewContext(`let pendingInspection = null; let inspectionSequence = 0;\n${declaration("renderInspector")}\nrenderInspector();`, {
    state, elements, AbortController, String, document: { body }, isArising: () => false, displayName: () => "Next", prose: (text) => text, renderArisingCases() {}, renderHeader() {}, renderActions() {},
    renderFacts() {}, renderTechnicalRelations() {}, createElement: (_tag, _class, text) => ({ ...element(), textContent: text })
  });
  assert.equal(body.dataset.detailState, "loading");
  return elements;
}

test("while another record's details load, nothing of the record before stays under the new heading", () => {
  const another = loadingDetails("record previous");
  assert.equal(another["arising-panel"].hidden, true, "Its subgraph and its buttons act on the record before");
  assert.deepEqual(another["arising-details"].children, []);
  const same = loadingDetails("record next");
  assert.equal(same["arising-panel"].hidden, false, "The same record drawn again keeps its place");
  assert.deepEqual(same["arising-details"].children, ["records of what is shown"]);
});

test("the requested work never reaches a view other than Open work", () => {
  const state = { ontology: { arisingIds: new Set(["a"]), root: "a" }, work: { section: "causes", level: null, domain: null, shown: null } };
  const apply = vm.runInNewContext(`${declaration("pathTargetOf")}\n${declaration("applyRequestedFocus")}\napplyRequestedFocus;`, {
    state, ONTOLOGY_MODES: ["table", "causes", "subgraph", "records", "work"], nodeSummary, isArising
  });
  const work = { section: "unsupported", level: 1, domain: null };
  apply({ focusId: "a", mode: "causes", work: null });
  assert.equal(state.work.section, "causes");
  apply({ focusId: "a", mode: "work", work });
  assert.equal(state.work.section, "unsupported");
  assert.equal(state.work.reveal, true, "A restored list shows its selected line");
  state.work.shown = 300;
  apply({ focusId: "a", mode: "work", work });
  assert.equal(state.work.shown, 300, "The same list keeps what the reader opened");
  apply({ focusId: "a", mode: "work", work: { section: "causes", level: null, domain: null } });
  assert.equal(state.work.shown, null);
});
