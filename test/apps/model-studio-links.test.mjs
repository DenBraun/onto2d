import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import { casesByArising } from "../../apps/model-studio/interaction-views.js";
import { addressNeedsVersion, requestedWorkspaceState } from "../../apps/model-studio/model-selection.js";
import { releaseVersion } from "./model-studio-source.mjs";

const root = new URL("../../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const studio = read("apps/model-studio/model-studio.js");
const markup = read("apps/model-studio/index.html");

function declaration(name) {
  const start = studio.search(new RegExp(`^(?:async )?function ${name}\\(`, "m"));
  assert.notEqual(start, -1, name);
  const end = studio.slice(start + 1).search(/\n(?:\/\*\*[^\n]*\n|\/\*\*\n(?: \*[^\n]*\n)+)?(?:async )?function /);
  return studio.slice(start, end === -1 ? undefined : start + 1 + end);
}

const identity = { modelId: "m", version: "1" };
const nodes = new Set(["a", "b", "r"]);
const edges = new Map([["cause:a>b", {}]]);

/** The Studio's own URL code over a location and a history that only record what they are told. */
function urlCode(hash, overrides = {}, entryState = undefined) {
  const location = { hash };
  const calls = [];
  const urls = [];
  const states = [];
  const history = { state: entryState };
  const write = (kind) => (entry, _title, url = location.hash) => { calls.push(kind); urls.push(url); states.push(entry); location.hash = url; history.state = entry; };
  history.pushState = write("push");
  history.replaceState = write("replace");
  const state = {
    selection: identity, manifest: null, ontology: { arisingIds: new Set(["a", "b"]) }, interactionPerspectiveId: "", interactionCaseId: "",
    mode: "causes", focusId: "a", recordFocusId: null, selectedId: "a", selectedRelationId: null, depth: 1, direction: "both",
    graphIndex: { edgesById: edges }, ...overrides
  };
  // Like the view package: an id it refuses outright throws, it does not answer false.
  const presentation = {
    has: (id) => {
      if (id === "__proto__" || id === "constructor" || id.length > 1024) throw new TypeError("id must be a safe, non-empty bounded string.");
      return nodes.has(id);
    }
  };
  const code = vm.runInNewContext(`${declaration("requestedGraphState")}\n${declaration("pathTargetOf")}\n${declaration("replaceLocationState")}\n${declaration("applyRequestedFocus")}\n({ requestedGraphState, replaceLocationState, applyRequestedFocus });`, {
    state, location, URLSearchParams, requestedWorkspaceState, addressNeedsVersion, ONTOLOGY_MODES: ["table", "causes", "subgraph", "records", "work"],
    history,
    defaultFocusId: () => "a",
    nodeSummary: (id) => ({ id, layer: "arising", arisingId: id === "r" ? "a" : undefined }),
    isArising: (node) => node.id !== "r"
  });
  return { ...code, presentation, state, location, history, calls, urls, states, read: () => code.requestedGraphState(presentation, identity, {}) };
}

test("a local import's address always says its version, even under the name of a registered model", () => {
  const registry = { registry: { entries: [identity] } };
  const local = urlCode("", { selection: null, manifest: { model: { id: "m", version: "rdf-1" } }, registrySnapshot: registry });
  local.replaceLocationState();
  assert.equal(new URLSearchParams(local.location.hash.replace(/^#/, "")).get("version"), "rdf-1", "Without it Back inside would open the registered model");
  const registered = urlCode("", { registrySnapshot: registry });
  registered.replaceLocationState();
  assert.equal(new URLSearchParams(registered.location.hash.replace(/^#/, "")).get("version"), null);
});

test("an entry the Studio has been through is marked, so that an unmarked one is a link just arrived", () => {
  const arrived = urlCode("", {}, null);
  arrived.replaceLocationState();
  assert.equal(arrived.calls.length, 1);
  assert.notEqual(arrived.history.state, null, "An address that needs writing");
  const same = urlCode("", {}, null);
  same.replaceLocationState();
  const normal = same.location.hash;
  same.history.state = null;
  same.calls.length = 0;
  same.replaceLocationState();
  assert.equal(same.location.hash, normal);
  assert.deepEqual(same.calls, ["replace"]);
  assert.notEqual(same.history.state, null, "An address already normal");
  same.calls.length = 0;
  same.replaceLocationState();
  assert.deepEqual(same.calls, [], "A marked entry with nothing new is left alone");
  const pushed = urlCode("#model=m&node=b", {}, null);
  pushed.replaceLocationState({ push: true });
  assert.deepEqual(pushed.calls, ["push"]);
  assert.notEqual(pushed.history.state, null, "A new entry");
});

test("a link names the selected relation and the selected record", () => {
  const bound = "#model=m&version=1&node=a&mode=causes";
  const relation = urlCode(`${bound}&relation=cause%3Aa%3Eb`).read();
  assert.equal(relation.relationId, "cause:a>b");
  assert.equal(relation.selectId, null);
  assert.equal(urlCode(`${bound}&select=b`).read().selectId, "b");
  const code = urlCode(`${bound}&relation=cause%3Aa%3Eb&select=b`);
  code.applyRequestedFocus(code.read());
  assert.equal(code.state.selectedRelationId, "cause:a>b");
  assert.equal(code.state.selectedId, "b");
  assert.equal(code.state.focusId, "a");
});

test("a plain model keeps its one mode and takes the selected record from the link", () => {
  const code = urlCode("#model=m&version=1&node=a&select=b", { ontology: null, mode: "graph" });
  const requested = code.read();
  assert.equal(requested.selectId, "b");
  code.applyRequestedFocus(requested);
  assert.equal(code.state.mode, "graph");
  assert.equal(code.state.focusId, "a");
  assert.equal(code.state.recordFocusId, null);
  assert.equal(code.state.selectedId, "b");
  const plain = urlCode("#model=m&version=1&node=b", { ontology: null, mode: "graph" });
  plain.applyRequestedFocus(plain.read());
  assert.equal(plain.state.selectedId, "b", "Without select= the focus is the selection");
});

test("a path link opens its path, and only one that makes sense", () => {
  const opened = (hash, overrides) => {
    const code = urlCode(hash, overrides);
    code.applyRequestedFocus(code.read());
    return code.state;
  };
  const state = opened("#model=m&version=1&node=a&mode=causes&path=b");
  assert.equal(state.pathTarget, "b");
  assert.equal(state.mode, "causes");
  assert.equal(state.focusId, "a");
  assert.equal(opened("#model=m&version=1&node=a&mode=causes&path=a").pathTarget, null, "A path to itself");
  assert.equal(opened("#model=m&version=1&node=a&mode=causes&path=r").pathTarget, null, "To a record that is no arising");
  assert.equal(opened("#model=m&version=1&node=a&mode=causes&path=nowhere").pathTarget, null, "To nothing");
  assert.equal(opened("#model=m&version=1&node=a&mode=table&path=b").pathTarget, null, "In another view");
  assert.equal(opened("#model=m&version=2&node=a&mode=causes&path=b").pathTarget, "b", "From an earlier version");
  assert.equal(opened("#model=m&node=a&mode=causes&path=b").pathTarget, "b", "With no version");
  assert.equal(opened("#model=other&version=1&node=a&mode=causes&path=b").pathTarget, null, "From another model");
  assert.equal(opened("#model=m&version=1&node=a&mode=causes").pathTarget, null, "With none asked");
  assert.equal(opened("#model=m&version=1&node=a&mode=causes&path=b", { ontology: null, mode: "graph" }).pathTarget, null, "A plain model has no path");
  const code = urlCode("", { pathTarget: "b" });
  code.replaceLocationState();
  assert.match(code.location.hash, /path=b/, "And the address writes what the link reads");
});

test("unknown values and another model open without a selection, and an earlier version keeps its own", () => {
  const unknown = urlCode("#model=m&version=1&node=a&relation=cause%3Ax%3Ey&select=nothing").read();
  assert.equal(unknown.relationId, null);
  assert.equal(unknown.selectId, null);
  const other = urlCode("#model=other&version=1&node=a&relation=cause%3Aa%3Eb&select=b").read();
  assert.equal(other.relationId, null);
  assert.equal(other.selectId, null);
  const earlier = urlCode("#model=m&version=0&node=a&mode=causes&relation=cause%3Aa%3Eb&select=b").read();
  assert.equal(earlier.relationId, "cause:a>b");
  assert.equal(earlier.selectId, "b");
  assert.equal(earlier.mode, "causes");
  const unversioned = urlCode("#model=m&node=a&mode=causes&relation=cause%3Aa%3Eb").read();
  assert.equal(unversioned.relationId, "cause:a>b");
  assert.equal(unversioned.mode, "causes");
  const old = urlCode("#model=m&version=1&node=b&mode=causes&depth=2&direction=both");
  const requested = old.read();
  old.applyRequestedFocus(requested);
  assert.equal(old.state.focusId, "b");
  assert.equal(old.state.selectedId, "b");
  assert.equal(old.state.selectedRelationId, null);
});

test("the address of a registered model names no version, and an old address is rewritten without one", () => {
  const registered = { registrySnapshot: { registry: { entries: [identity, { modelId: "other", version: "9" }] } } };
  const code = urlCode("#model=m&version=0&node=a&mode=causes", registered);
  code.replaceLocationState();
  assert.equal(code.location.hash, "#model=m&node=a&depth=1&direction=both&mode=causes");
  assert.deepEqual(code.calls, ["replace"]);
  const several = urlCode("#model=m&version=1&node=a", { registrySnapshot: { registry: { entries: [identity, { modelId: "m", version: "2" }] } } });
  several.replaceLocationState();
  assert.match(several.location.hash, /^#model=m&version=1&node=a/, "Where the name cannot tell the releases apart");
  const local = urlCode("#model=m&node=a", { registrySnapshot: { registry: { entries: [{ modelId: "other", version: "9" }] } } });
  local.replaceLocationState();
  assert.match(local.location.hash, /^#model=m&version=1&node=a/, "A local import keeps it, to tell Back from a registered model of the same name");
  const noRegistry = urlCode("#model=m&node=a");
  noRegistry.replaceLocationState();
  assert.match(noRegistry.location.hash, /^#model=m&version=1&node=a/, "A local import after the registry failed to load");
});

test("an id the view package refuses is ignored like any other unknown value", () => {
  for (const bad of ["__proto__", "constructor", "x".repeat(2000)]) {
    const selected = urlCode(`#model=m&version=1&node=b&select=${bad}&relation=${bad}`).read();
    assert.equal(selected.focusId, "b");
    assert.equal(selected.selectId, null);
    assert.equal(selected.relationId, null);
    assert.equal(urlCode(`#model=m&version=1&node=${bad}`).read().focusId, "a", "The default focus takes over");
  }
});

test("a double-click pushes on top of the entry as it was before its first click", () => {
  const before = "#model=m&version=1&node=a&mode=causes&relation=cause%3Aa%3Eb";
  const clicked = "#model=m&version=1&node=a&mode=causes&select=b";
  const code = urlCode(clicked, { focusId: "b", selectedId: "b", entryBeforeDoubleClick: before });
  code.replaceLocationState({ push: true });
  assert.deepEqual(code.calls, ["replace", "push"]);
  assert.equal(code.urls[0], before);
  assert.match(code.urls[1], /node=b/);
  assert.deepEqual(code.states.map((entry) => entry?.written === true), [true, true], "Both entries are the Studio's own, so Back to either asks for nothing");
  const plain = urlCode(clicked, { focusId: "b", selectedId: "b" });
  plain.replaceLocationState({ push: true });
  assert.deepEqual(plain.calls, ["push"], "Any other focus change leaves the entry as it stands");
  const same = urlCode("", { entryBeforeDoubleClick: before });
  same.replaceLocationState();
  same.calls.length = 0;
  same.replaceLocationState({ push: true });
  assert.deepEqual(same.calls, [], "A double-click that changes nothing opens no entry");
});

test("the double-click watch sees the clicks before any handler does", () => {
  const code = declaration("bindDoubleClickHistory");
  assert.match(code, /event\.detail === 1\) before = location\.hash/);
  assert.match(code, /"dblclick", mark, true/);
  assert.match(declaration("bindEvents"), /bindDoubleClickHistory\(\);/);
});

test("the address carries the selection only while there is one to carry", () => {
  const code = urlCode("");
  code.replaceLocationState();
  assert.doesNotMatch(code.location.hash, /select=|relation=/);
  code.state.selectedRelationId = "cause:a>b";
  code.replaceLocationState();
  assert.match(code.location.hash, /relation=cause%3Aa%3Eb/);
  assert.doesNotMatch(code.location.hash, /select=/, "The focus needs no second mention");
  code.state.selectedRelationId = null;
  code.state.selectedId = "b";
  code.replaceLocationState();
  assert.match(code.location.hash, /select=b/);
  assert.doesNotMatch(code.location.hash, /relation=/);
  assert.deepEqual([...new Set(code.calls)], ["replace"]);
});

test("a selected record that is the focus of Records or of a subgraph stays out of select", () => {
  for (const mode of ["records", "subgraph"]) {
    const code = urlCode("", { mode, focusId: "a", recordFocusId: "r", selectedId: "r" });
    code.replaceLocationState();
    assert.match(code.location.hash, /node=r/);
    assert.doesNotMatch(code.location.hash, /select=/);
  }
  const code = urlCode("", { mode: "subgraph", focusId: "a", recordFocusId: null, selectedId: "r" });
  code.replaceLocationState();
  assert.match(code.location.hash, /node=a/);
  assert.match(code.location.hash, /select=r/);
});

test("selection changes replace the history entry, and Back brings the selection back with the focus", () => {
  for (const name of ["inspectNode", "inspectRelation"]) {
    assert.match(declaration(name), /renderInspector\(\);\n {2}replaceLocationState\(\);\n\}/, `${name} never pushes`);
  }
  assert.match(declaration("restoreLocationState"), /applyRequestedFocus\(requested\);/);
  assert.match(declaration("applyRequestedFocus"), /state\.selectedRelationId = requested\.relationId \?\? null;/);
  assert.match(declaration("applyRequestedFocus"), /state\.selectedId = requested\.selectId \?\? id;/);
});

test("Copy link stands in the relation inspector and the page has a clipboard fallback", async () => {
  assert.match(declaration("renderRelationInspector"), /copyLinkButton\(\)/);
  assert.match(declaration("copyLinkButton"), /actionButton\("Copy link"/);
  assert.match(declaration("copyLinkButton"), /"Copied"/);
  const run = (clipboard, execCommand) => {
    const appended = [];
    const field = { select() {}, remove() { appended.pop(); } };
    return vm.runInNewContext(`${declaration("copyText")}\ncopyText("address");`, {
      navigator: { clipboard }, createElement: () => field,
      document: { body: { append: (element) => appended.push(element) }, execCommand }
    });
  };
  const written = [];
  assert.equal(await run({ writeText: async (text) => written.push(text) }, () => assert.fail("no fallback needed")), true);
  assert.deepEqual(written, ["address"]);
  assert.equal(await run(undefined, (command) => command === "copy"), true, "No clipboard API on a plain http page");
  assert.equal(await run({ writeText: async () => { throw new Error("denied"); } }, () => false), false);
  assert.equal(await run(undefined, () => { throw new Error("unsupported"); }), false);
});

test("the second click of a double-click focuses the row of the first, whatever replaced it", () => {
  const code = () => {
    const listeners = [];
    const focused = [];
    const shown = [];
    vm.runInNewContext(`${declaration("bindInspectorDoubleClick")}\nbindInspectorDoubleClick(panel);`, {
      panel: { addEventListener: (type, handler, capture) => listeners.push({ type, handler, capture }) },
      focusNode: (id) => focused.push(id),
      stageView: () => `view ${focused.filter((id) => id !== "the focus already").length}`,
      showViewOnNarrowPage: () => shown.push(focused.at(-1))
    });
    assert.deepEqual(listeners.map(({ type, capture }) => [type, capture]), [["click", true]]);
    const stopped = [];
    const click = (detail, id, x = 10) => {
      const event = {
        detail, clientX: x, clientY: 10, preventDefault() {}, stopPropagation() { stopped.push(id); },
        target: { closest: () => (id ? { dataset: { focusId: id } } : null) }
      };
      listeners[0].handler(event);
    };
    return { click, focused, stopped, shown };
  };
  const double = code();
  double.click(1, "first");
  double.click(2, "other row now under the pointer");
  assert.deepEqual(double.focused, ["first"]);
  assert.equal(double.stopped.length, 1, "What now lies under the pointer hears nothing");
  assert.deepEqual(double.shown, ["first"], "The new view comes up where the panels stack, as a button in the inspector brings it");
  const same = code();
  same.click(1, "the focus already");
  same.click(2, null);
  assert.deepEqual(same.shown, [], "Nothing new to show");
  const onNothing = code();
  onNothing.click(1, "first");
  onNothing.click(2, null);
  assert.deepEqual(onNothing.focused, ["first"]);
  const slow = code();
  slow.click(1, "first");
  slow.click(1, "second");
  assert.deepEqual(slow.focused, [], "Two separate clicks only inspect");
  const moved = code();
  moved.click(1, "first");
  moved.click(2, "second", 40);
  assert.deepEqual(moved.focused, [], "A second click elsewhere is another row");
  const keyboard = code();
  keyboard.click(0, "first");
  keyboard.click(0, "first");
  assert.deepEqual(keyboard.focused, []);
  const noRow = code();
  noRow.click(1, null);
  noRow.click(2, null);
  assert.deepEqual(noRow.focused, []);
  assert.doesNotMatch(`${declaration("causeRow")}${declaration("renderLineage")}${declaration("routeButton")}${declaration("renderTechnicalRelations")}`, /"dblclick"/, "One route for rows: a row's own listener could focus the wrong record");
  assert.match(declaration("bindEvents"), /bindInspectorDoubleClick\(elements\["record-inspector"\]\.closest\("\.inspector-panel"\)\)/);
});

test("the panels and the navigator grouping are remembered, and Reset leaves them", () => {
  const key = read("apps/model-studio/preferences.js").match(/STORAGE_KEY = "([^"]+)"/)[1];
  const early = markup.match(/<body[^>]*>\s*<script>([\s\S]*?)<\/script>/);
  assert.ok(early, "The panels are set by the first thing in the body, before the first paint");
  const holdKey = read("apps/model-studio/preferences.js").match(/INSPECTOR_HOLD_KEY = "([^"]+)"/)[1];
  const firstPaint = (stored, width = 1440, held = false) => {
    const dataset = {};
    const asked = [];
    vm.runInNewContext(early[1], {
      JSON, document: { body: { dataset }, addEventListener() {} },
      localStorage: { getItem: (name) => { asked.push(name); return stored; } },
      sessionStorage: { getItem: (name) => { if (held === "blocked") throw new Error("blocked"); return held && name === holdKey ? "true" : null; } },
      matchMedia: (query) => {
        assert.equal(query, "(max-width: 900px)", "The module's own narrow test, so no width falls between narrow and wide");
        return { matches: width <= 900 };
      }
    });
    assert.deepEqual(asked, width <= 900 ? [] : [key]);
    return { ...dataset };
  };
  assert.deepEqual(firstPaint('{"navigatorCollapsed":true}'), { navigatorCollapsed: "true" }, "Each panel by its own memory");
  assert.deepEqual(firstPaint('{"inspectorCollapsed":true}'), { inspectorCollapsed: "true" });
  assert.deepEqual(firstPaint('{"navigatorCollapsed":true,"inspectorCollapsed":true}', 1440, true), { navigatorCollapsed: "true" }, "A link opened the inspector in this tab: no flash on a reload");
  assert.deepEqual(firstPaint('{"inspectorCollapsed":true}', 1440, "blocked"), { inspectorCollapsed: "true" }, "A blocked tab storage holds nothing, as inspectorHeldOpen reads it");
  assert.deepEqual(firstPaint('{"navigatorCollapsed":false,"inspectorCollapsed":true}', 900), { navigatorCollapsed: "true" }, "A narrow page starts on the view, whatever is remembered");
  assert.deepEqual(firstPaint(null, 390), { navigatorCollapsed: "true" });
  assert.deepEqual(firstPaint('{"navigatorCollapsed":false,"inspectorCollapsed":"true"}'), {}, "Only a stored true counts");
  assert.deepEqual(firstPaint("not json"), {}, "A broken memory leaves the page as it is");
  assert.deepEqual(firstPaint(null), {});
  assert.ok(declaration("restorePreferences").includes('if (!matchMedia("(max-width: 900px)").matches) {'), "Both places agree on where the panel toggles exist");
  assert.ok(declaration("collapseNavigatorOnNarrowScreen").includes('if (!matchMedia("(max-width: 900px)").matches) return;'));
  assert.match(declaration("togglePanel"), /savePreference\(key, collapsed\);/);
  const toggled = (side) => {
    const holds = [];
    vm.runInNewContext(`${declaration("togglePanel")}\ntogglePanel(side);`, {
      side, document: { body: { dataset: {} } }, showPanel() {}, savePreference() {}, requestAnimationFrame() {}, holdInspectorOpen: (held) => holds.push(held)
    });
    return holds;
  };
  assert.deepEqual(toggled("inspector"), [false], "The reader's own toggle ends what a link held open");
  assert.deepEqual(toggled("navigator"), []);
  assert.match(declaration("tableLegend"), /state\.tableDensity = value;\s+savePreference\("tableDensity", value\);/);
  assert.match(declaration("tableLegend"), /state\.tableColour = value;\s+savePreference\("tableColour", value\);/);
  assert.match(declaration("tableIntro"), /state\.introDismissed = true;\s+savePreference\("introDismissed", true\);/);
  assert.match(declaration("bindEvents"), /savePreference\("navigatorGroup", state\.navigatorGroup\);/);
  const reset = declaration("bindEvents").match(/elements\["reset-view"\]\.addEventListener\("click", \(\) => \{[\s\S]*?\n {2}\}\);/)[0];
  assert.doesNotMatch(reset, /navigatorGroup|Collapsed|savePreference/);

  const run = (stored, width = 1440, held = false) => {
    const state = { navigatorGroup: "domain" };
    const shown = [];
    vm.runInNewContext(`${declaration("restorePreferences")}\nrestorePreferences();`, {
      state, loadPreferences: () => stored, inspectorHeldOpen: () => held,
      matchMedia: (query) => {
        assert.equal(query, "(max-width: 900px)");
        return { matches: width <= 900 };
      },
      showPanel: (side, collapsed) => shown.push([side, collapsed])
    });
    return { group: state.navigatorGroup, shown };
  };
  assert.deepEqual(run({ navigatorGroup: "level", navigatorCollapsed: true, inspectorCollapsed: true }), {
    group: "level", shown: [["navigator", true], ["inspector", true]]
  });
  assert.deepEqual(run({ inspectorCollapsed: true }, 1440, true), { group: "domain", shown: [] }, "A link opened it in this tab and the reader left it open");
  assert.deepEqual(run({ navigatorGroup: "level", navigatorCollapsed: true }, 800), { group: "level", shown: [] }, "A narrow page keeps its own default for the panels");
  assert.deepEqual(run({ navigatorGroup: "somewhere", navigatorCollapsed: "yes", inspectorCollapsed: 1 }), { group: "domain", shown: [] });
});

test("before the module runs, the skip link writes nothing into the address the page is opening", () => {
  const early = markup.match(/<body[^>]*>\s*<script>([\s\S]*?)<\/script>/);
  const listeners = [];
  const focused = [];
  vm.runInNewContext(early[1], {
    JSON, localStorage: { getItem: () => null }, sessionStorage: { getItem: () => null }, matchMedia: () => ({ matches: false }),
    document: {
      body: { dataset: {} }, addEventListener: (type, listener) => listeners.push({ type, listener }),
      querySelector: (selector) => (selector === ".graph-stage" ? { focus: () => focused.push("stage") } : null)
    }
  });
  assert.deepEqual(listeners.map(({ type }) => type), ["click"]);
  const click = (onSkipLink, defaultPrevented = false) => {
    const event = { defaultPrevented, prevented: 0, preventDefault() { this.prevented += 1; }, target: { closest: (selector) => (onSkipLink && selector === ".skip-link" ? {} : null) } };
    listeners[0].listener(event);
    return event.prevented;
  };
  assert.equal(click(true), 1);
  assert.deepEqual(focused, ["stage"]);
  assert.equal(click(true, true), 0, "Once the module has taken the link over, its own handler does the work");
  assert.equal(click(false), 0, "Any other click is not its business");
  assert.deepEqual(focused, ["stage"]);
  assert.match(markup, /<script>[\s\S]*?<\/script>\s*<a class="skip-link" href="#studio">/, "The script comes before the link it covers");
});

test("the table's density, its colour and a closed banner come back, and nothing else does", () => {
  const run = (stored) => {
    const state = { navigatorGroup: "domain", tableDensity: "map", tableColour: "domain", introDismissed: false };
    vm.runInNewContext(`${declaration("restorePreferences")}\nrestorePreferences();`, {
      state, loadPreferences: () => stored, matchMedia: () => ({ matches: true }), showPanel() {}
    });
    return [state.tableDensity, state.tableColour, state.introDismissed];
  };
  assert.deepEqual(run({}), ["map", "domain", false]);
  assert.deepEqual(run({ tableDensity: "names", tableColour: "evidence", introDismissed: true }), ["names", "evidence", true]);
  assert.deepEqual(run({ tableDensity: "huge", tableColour: "plaid", introDismissed: "yes" }), ["map", "domain", false], "A stored value the Studio does not know is ignored");
});

test("the tree opens with the top rows of the remembered grouping", () => {
  const table = { levels: [{ value: 0 }, { value: 1 }], domains: new Map([["x", {}]]) };
  const keys = (navigatorGroup) => vm.runInNewContext(`${declaration("navigatorGroupKeys")}\nnavigatorGroupKeys(table);`, { state: { navigatorGroup }, table });
  assert.deepEqual([...keys("domain")], ["domain:x"]);
  assert.deepEqual([...keys("level")], ["level:0", "level:1"]);
  assert.match(declaration("configureOntology"), /navigatorGroupKeys\(metadata\.arisingTable\)/);
});

test("a case touches the arising itself and the arising owning any of its records", () => {
  const views = { cases: [
    { id: "one", entityIds: ["r1", "r2"], anchorEntityId: "r1" },
    { id: "two", entityIds: ["a", "r2", "lone"], anchorEntityId: "a" }
  ] };
  const fixture = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "r1", arisingId: "a" }, { id: "r2", arisingId: "b" }, { id: "lone" }];
  const index = casesByArising(views, fixture, new Set(["a", "b", "c"]));
  assert.deepEqual(index.get("a").map((record) => record.id), ["one", "two"]);
  assert.deepEqual(index.get("b").map((record) => record.id), ["one", "two"], "Two records of one arising count one case");
  assert.equal(index.has("c"), false);
  assert.equal(casesByArising(null, fixture, new Set(["a"])).size, 0);
});

test("in the current release 15 of 259 arisings have interaction cases", () => {
  const graph = JSON.parse(read(`apps/model-studio/data/causal-emergence/${releaseVersion}/graph.json`));
  const layer = graph.presentation.arisingTable.layer;
  const arisings = new Set(graph.nodes.filter((node) => node.layer === layer).map((node) => node.id));
  assert.equal(arisings.size, 259);
  const index = casesByArising(graph.interactionViews, graph.nodes, arisings);
  assert.equal(index.size, 15);
  const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
  for (const record of graph.interactionViews.cases) {
    const anchor = nodesById.get(record.anchorEntityId);
    assert.ok(anchor && record.entityIds.includes(anchor.id), "A case opens on a record it holds");
    assert.ok(index.get(anchor.arisingId ?? anchor.id).includes(record), "The arising of the anchor lists the case");
  }
  assert.doesNotMatch(graph.interactionViews.cases.map((record) => record.title).join(" "), /pilot:|bio:|phys:/, "Titles carry no record identifiers");
});

test("an arising lists its cases, and a click opens the case in Records with the select set", () => {
  assert.match(markup, /id="arising-cases-panel"[^>]*hidden><summary>Interaction cases<\/summary>/);
  assert.match(declaration("renderInspector"), /renderArisingCases\(node\);/);
  assert.match(declaration("openInteractionCase"), /elements\["interaction-case"\]\.value = record\.id;\n\s+focusNode\(record\.anchorEntityId, \{ mode: "records" \}\);/);
  const panel = { hidden: true };
  const list = { children: [], replaceChildren(...children) { this.children = children; } };
  const element = (tag, className = "", text = "") => ({ tag, className, text, children: [], listeners: {}, append(...c) { this.children.push(...c); }, addEventListener(type, handler) { this.listeners[type] = handler; } });
  const opened = [];
  const render = vm.runInNewContext(`${declaration("renderArisingCases")}\nrenderArisingCases;`, {
    state: { arisingCases: new Map([["a", [{ id: "one", title: "A case", entityIds: ["x", "y"] }]]]) },
    elements: { "arising-cases-panel": panel, "arising-cases": list }, isArising: (node) => node.arising, createElement: element,
    plural: (count, word) => `${count} ${word}s`, openInteractionCase: (record) => opened.push(record.id)
  });
  render({ id: "a", arising: true });
  assert.equal(panel.hidden, false);
  const row = list.children.at(-1);
  assert.equal(row.title, "A case");
  row.listeners.click();
  assert.deepEqual(opened, ["one"]);
  render({ id: "b", arising: true });
  assert.equal(panel.hidden, true, "Absent when there are none");
  render({ id: "a", arising: false });
  assert.equal(panel.hidden, true, "Only an arising has the section");
});

test("a link to a relation that has just arrived opens the inspector, holds it for the tab and leaves the remembered collapse alone", () => {
  const run = (requested, collapsed, entry = null) => {
    const body = { dataset: { inspectorCollapsed: String(collapsed) } };
    const calls = [];
    vm.runInNewContext(`${declaration("openInspectorForLink")}\nopenInspectorForLink(requested);`, {
      requested, document: { body }, history: { state: entry }, showPanel: (side, value) => calls.push([side, value]),
      savePreference: () => calls.push("saved"), holdInspectorOpen: (held) => calls.push(["hold", held])
    });
    return calls;
  };
  assert.deepEqual(run({ relationId: "line" }, true), [["inspector", false], ["hold", true]]);
  assert.deepEqual(run({ relationId: "line" }, true, { written: true }), [], "Back, Forward and a reload find an entry already written: the reader's collapse stands");
  assert.deepEqual(run({ selectId: "record" }, true), [], "Every card click writes select: it asks for nothing");
  assert.deepEqual(run({}, true), [], "An address without a selection keeps the collapse");
  assert.deepEqual(run({ relationId: "line" }, false), [], "An open inspector needs nothing");
  assert.doesNotMatch(declaration("openInspectorForLink"), /savePreference/);
  assert.match(declaration("restoreLocationState"), /openInspectorForLink\(requested\);\n\s+applyRequestedFocus\(requested\);/, "A hash change on an open page, before the view fits itself to the room left");
  assert.match(declaration("activateModelPack"), /openInspectorForLink\(requested\);\n\s+applyRequestedFocus\(requested\);/, "A first load, or a link into another model");
});

