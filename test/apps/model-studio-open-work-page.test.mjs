import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import { openWork } from "../../apps/model-studio/open-work.js";
import { FakeElement, constant, declarations, read, releaseVersion } from "./model-studio-source.mjs";

const dataRoot = "apps/model-studio/data/causal-emergence/";
const graph = JSON.parse(read(`${dataRoot}${releaseVersion}/graph.json`));
const table = graph.presentation.arisingTable;
const arisings = graph.nodes.filter((node) => node.layer === table.layer);
const ids = new Set(arisings.map((node) => node.id));
const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
const byChild = new Map();
for (const edge of graph.edges) {
  if (!ids.has(edge.source) || !ids.has(edge.target)) continue;
  if (!byChild.has(edge.target)) byChild.set(edge.target, []);
  byChild.get(edge.target).push(edge);
}

const FUNCTIONS = ["createElement", "actionButton", "factsOf", "causeSort", "workNames", "workGroupTitle", "workRow", "workSelect", "workSummary", "workControls", "appendWorkRows", "workCount", "workReach", "evidenceShare", "setWorkFilter", "renderOpenWork", "markWorkSelection", "markCurrent"];
const CONSTANTS = ["WORK_PAGE"];

/** Open work's page, with the release's own arisings, causes and facts, on a page that records what it is given. */
function openWorkPage(work = {}, selection = {}) {
  const addressed = [];
  const panel = new FakeElement("div");
  const text = () => ({ textContent: "" });
  const elements = { "open-work-panel": panel, "graph-title": text(), "graph-subtitle": text(), "graph-counts": text(), "graph-hint": text() };
  const state = {
    work: { section: "causes", level: null, domain: null, shown: null, ...work },
    ontology: { arisings },
    causes: { byChild },
    facts: graph.arisingFacts,
    presentationMetadata: { arisingTable: { levels: table.levels, domains: new Map(table.domains.map((domain) => [domain.value, domain])) } },
    ...selection
  };
  const render = vm.runInNewContext(`${studioConstants}\n${declarations(...FUNCTIONS)}\nrenderOpenWork;`, {
    state, elements, openWork, Object, Math, String, Number, Set,
    CSS: { escape: (value) => value },
    document: { createElement: (name) => new FakeElement(name), createTextNode: (value) => value, activeElement: null },
    plural: (count, one, many = `${one}s`) => `${count} ${count === 1 ? one : many}`,
    humanize: (value) => String(value ?? ""),
    prose: (value) => value,
    levelName: (level) => table.levels.find((entry) => entry.value === level)?.name ?? null,
    nodeSummary: (id) => nodesById.get(id),
    setDomain() {},
    replaceLocationState: () => addressed.push({ ...state.work }),
    dependencyName: (slot) => String(slot),
    graphMessage() {},
    emptyStage() {},
    syncWorkRoving() {},
    syncRovingGroups() {},
    workListKeydown() {},
    workListFocusin() {},
    compareCodes: (left, right) => (left < right ? -1 : left > right ? 1 : 0),
    focusNode() {}, inspectNode() {}, inspectWorkCause() {}, inspectRelation() {},
    ROLE_TEXT: {}, CAUSE_ROLES: ["arising", "modulation"], NECESSITY_ORDER: {}
  });
  render();
  return { panel, elements, state, render, addressed };
}

const studioConstants = [...CONSTANTS, "WORK_SECTIONS"].map(constant).join("\n");
const rows = (panel) => panel.querySelectorAll(".work-row");
const tab = (panel, key) => panel.children[0].querySelector(".work-sections").children.find((child) => child.dataset.workControl === `section-${key}`);
const tabCount = (panel, key) => tab(panel, key).children.find((child) => child.name === "small").textContent;
const direct = (filters = {}) => openWork({ arisings, causesOf: (id) => byChild.get(id), factsOf: (id) => graph.arisingFacts[id] ?? null, ...filters });

test("each tab counts its own section of the release", () => {
  const { panel } = openWorkPage();
  assert.deepEqual(["causes", "categories", "unsupported", "obligations"].map((key) => tabCount(panel, key)), ["644", "103", "79", "48"]);
  const { counts } = direct();
  assert.deepEqual([counts.causes, counts.categories, counts.unsupported, counts.obligations], [644, 103, 79, 48]);
});

test("every section the page lists is one openWork computes", () => {
  const sections = vm.runInNewContext(`${constant("WORK_SECTIONS")}\nWORK_SECTIONS.map((section) => section.key).join(" ");`).split(" ");
  const work = direct();
  assert.equal(sections.length, 4);
  for (const key of sections) {
    assert.equal(typeof work.counts[key], "number", key);
    assert.ok(Array.isArray(work.sections[key]), key);
  }
});

test("each section draws its own rows, a page at a time", async () => {
  const work = direct();
  const size = (key) => work.sections[key].reduce((sum, group) => sum + group.items.length, 0);
  for (const key of ["causes", "categories", "unsupported", "obligations"]) {
    const { panel } = openWorkPage({ section: key });
    assert.equal(rows(panel).length, Math.min(100, size(key)), key);
    assert.equal(panel.querySelectorAll(".work-group").length > 0, true, `${key} has group headings`);
    assert.equal(tab(panel, key).getAttribute("aria-pressed"), "true");
  }
  const { panel } = openWorkPage({ section: "causes" });
  assert.deepEqual(rows(panel).map((row) => Boolean(row.dataset.edgeId)).slice(0, 2), [true, true], "A cause row names its cause in the data, not on screen");
  const more = panel.querySelector(".work-more").querySelector("button");
  assert.match(more.textContent, /^Show 100 more100 of 644$/);
  await more.fire("click");
  assert.equal(rows(panel).length, 200, "Show more adds the next page");
  assert.equal(new Set(rows(panel).map((row) => row.dataset.edgeId)).size, 200, "and no line twice");
  const { panel: categories } = openWorkPage({ section: "categories" });
  assert.equal(categories.querySelector(".work-more"), null, "A section under a page has no button");
  const chips = categories.querySelectorAll(".work-row-chips");
  assert.ok(chips.length > 0 && chips.every((chip) => chip.children.length > 0), "A row of open categories names them");
});

test("the Level filter narrows the tabs and rows, and a cause belongs to its dependent", () => {
  const { panel, elements } = openWorkPage({ section: "causes", level: 4 });
  const narrowed = direct({ level: 4 });
  assert.equal(narrowed.counts.causes, 60, "The causes of level 4 without evidence: 179 less 119");
  assert.equal(tabCount(panel, "causes"), "60");
  assert.equal(tabCount(panel, "obligations"), String(narrowed.counts.obligations));
  assert.equal(rows(panel).length, 60);
  for (const row of rows(panel)) {
    const [source, target] = row.dataset.edgeId.replace(/^[^:]*:/, "").split(">");
    assert.equal(nodesById.get(`arising:${target}`).level, 4, `${source} is attributed by its dependent`);
  }
  assert.match(elements["graph-subtitle"].textContent, /^Level 4/);
  assert.equal(elements["graph-counts"].textContent, "119 of 179 causes cite evidence");
  const bars = panel.querySelectorAll(".work-bar");
  assert.equal(bars.length, new Set(arisings.map((node) => node.level)).size, "The bars keep every level");
  assert.deepEqual(bars.map((bar) => bar.getAttribute("aria-pressed")).filter((value) => value === "true"), ["true"]);
});

test("the Domain filter narrows them too, and the filters' own controls say what is chosen", async () => {
  const domain = table.domains[0].value;
  const { panel, elements, state, addressed } = openWorkPage({ section: "unsupported", domain });
  const narrowed = direct({ domain });
  assert.ok(narrowed.counts.causes < 644);
  assert.equal(tabCount(panel, "causes"), String(narrowed.counts.causes));
  assert.equal(rows(panel).length, Math.min(100, narrowed.counts.unsupported));
  assert.equal(elements["graph-subtitle"].textContent, table.domains[0].name);
  const selects = panel.querySelectorAll("select");
  assert.deepEqual(selects.map((select) => select.dataset.workControl), ["filter-Level", "filter-Domain"]);
  assert.equal(selects[1].value, domain);
  assert.equal(selects[0].children.length, 1 + new Set(arisings.map((node) => node.level)).size);
  assert.equal(state.work.domain, domain);
  selects[0].value = "4";
  await selects[0].fire("change");
  assert.equal(state.work.level, 4, "Choosing a level keeps the domain");
  assert.deepEqual([addressed.at(-1).level, addressed.at(-1).domain], [4, domain], "And a link to the page holds both");
  assert.equal(state.work.domain, domain);
  assert.equal(tabCount(panel, "causes"), String(direct({ domain, level: 4 }).counts.causes));
  panel.querySelectorAll("select")[1].value = "";
  await panel.querySelectorAll("select")[1].fire("change");
  assert.equal(state.work.domain, null);
  assert.equal(tabCount(panel, "causes"), "60");
});

test("a filter that leaves nothing offers to clear it", () => {
  const empty = openWorkPage({ section: "causes", level: 99 });
  assert.equal(rows(empty.panel).length, 0);
  assert.match(empty.panel.querySelector(".work-empty").textContent, /^Nothing is open here/);
  const clear = empty.panel.querySelector(".work-empty").querySelector("button");
  assert.equal(clear.textContent, "Clear the filters");
  clear.fire("click");
  assert.equal(empty.state.work.level, null);
  assert.equal(rows(empty.panel).length, 100, "The list is back");
  assert.equal(empty.panel.querySelector('[data-work-control="filter-Level"]').focused, true, "The keyboard goes on from the first filter");
});

test("a link to a line far down the list draws that line and brings it on screen", () => {
  const far = direct().sections.causes.flatMap((group) => group.items)[250];
  const selected = (panel) => rows(panel).filter((row) => row.dataset.selected === "true");
  const { panel, state } = openWorkPage({ reveal: true }, { selectedRelationId: far.id });
  assert.equal(rows(panel).length, 300, "Whole pages, as far as the line");
  assert.deepEqual(selected(panel).map((row) => row.dataset.edgeId), [far.id]);
  assert.deepEqual({ ...selected(panel)[0].scrolledInto }, { block: "center" });
  assert.equal(state.work.reveal, false, "Once: a later draw leaves the reader's place");
  const { panel: redrawn } = openWorkPage({}, { selectedRelationId: far.id });
  assert.equal(selected(redrawn)[0].scrolledInto, undefined, "A list the reader is in does not jump");
  const { panel: read } = openWorkPage({ shown: 100, reveal: true }, { selectedRelationId: far.id });
  assert.equal(rows(read).length, 100, "What the reader opened stands when the list has a size already");
  assert.deepEqual(selected(read), [], "A line beyond that is not drawn");
});

test("the note says how many obligations and in how many arisings", () => {
  const { panel } = openWorkPage({ section: "obligations" });
  assert.match(panel.querySelector(".work-note").textContent, /48 obligations in 43 arisings\.$/);
});
