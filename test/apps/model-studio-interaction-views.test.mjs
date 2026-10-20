import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { layoutNeighborhood } from "@onto2d/view";
import { citationLinks, resolveClaimCitations } from "../../apps/model-studio/evidence-links.js";
import {
  interactionViewCatalog,
  selectInteractionGraph,
  interactionCaseOverview,
  layoutIsolatedCaseCards
} from "../../apps/model-studio/interaction-views.js";

const input = {
  identity: { modelId: "fixture", modelVersion: "1", rootHash: `sha256:${"a".repeat(64)}`, manifestHash: `sha256:${"b".repeat(64)}` },
  nodes: [
    { id: "preparation", name: "Preparation", typeRole: "context" },
    { id: "response", name: "Response", typeRole: "scoped-process" },
    { id: "isolated", name: "Isolated system record", typeRole: "scoped-process" },
    { id: "hypothesis", name: "Hypothesis", scientificStatus: "unresolved" }
  ],
  edges: [
    { id: "measurement", source: "preparation", target: "response", relationLayer: "descriptive", role: "measurement-context" },
    { id: "interpretation", source: "response", target: "hypothesis", relationLayer: "descriptive", role: "interpretation-dependency" }
  ]
};
const memberships = {
  cases: [
    { id: "case:one", title: "One case", entityIds: input.nodes.map((node) => node.id), anchorEntityId: "response" },
    { id: "case:no-hypothesis", title: "No proposed mechanism", entityIds: ["preparation"], anchorEntityId: "preparation" }
  ],
  perspectives: [
    { id: "system", label: "System", nodeIds: ["response", "isolated"], edgeIds: [], boundary: "Scoped system records; no added causal edges." },
    { id: "evidence", label: "Evidence", nodeIds: ["preparation", "response"], edgeIds: ["measurement"], boundary: "Measurement context is not a physical interaction." },
    { id: "hypotheses", label: "Hypotheses", nodeIds: ["hypothesis"], edgeIds: [], boundary: "Explicit proposals retain their evidence status." }
  ]
};

test("perspectives select explicit memberships and preserve the exact declared relation", () => {
  const before = structuredClone(input);
  const views = interactionViewCatalog(memberships, input);
  const system = selectInteractionGraph(input, views, { perspectiveId: "system", focusId: "response" });
  assert.deepEqual(system.memberNodeIds, ["response", "isolated"]);
  assert.deepEqual(system.input.edges, []);
  const evidence = selectInteractionGraph(input, views, { perspectiveId: "evidence", focusId: "response" });
  assert.deepEqual(evidence.input.edges, [input.edges[0]]);
  assert.equal(evidence.input.edges[0].role, "measurement-context");
  assert.equal(evidence.input.edges[0].relationLayer, "descriptive");
  assert.deepEqual(input, before);
  assert.deepEqual(selectInteractionGraph(input, views).input, input, "All records retains the complete graph");
  assert.equal(interactionViewCatalog(undefined, input), null, "Historical releases need no interaction extension");
});

test("case overview keeps isolated system records visible and creates no relations", () => {
  const views = interactionViewCatalog(memberships, input);
  const selection = selectInteractionGraph(input, views, { perspectiveId: "system", caseId: "case:one", focusId: "response" });
  const presentation = createLazyModelPresentation(selection.input);
  const ordinary = presentation.neighborhood({ focusId: "response", depth: 1 });
  assert.equal(ordinary.nodes.length, 1, "A neighborhood alone would hide the second case record");
  const overview = interactionCaseOverview(presentation, selection, "response");
  assert.deepEqual(overview.nodes.map((node) => node.id), ["response", "isolated"]);
  assert.ok(overview.nodes.every((node) => node.caseContext && node.caseIsolate));
  assert.deepEqual(overview.edges, []);
  assert.deepEqual(overview.adjacent, { parents: [], children: [] });
  assert.equal(overview.counts.discoveredNodeCount, 2);
  assert.equal(overview.counts.displayedNodeCount, 2);
  const layout = layoutNeighborhood(overview, { width: 1040, height: 680, nodeWidth: 148, nodeHeight: 54 });
  assert.equal(layout.nodes.length, 2);
  assert.ok(layout.nodes.every((node) => Number.isFinite(node.x) && Number.isFinite(node.y)));
  presentation.close();
});

test("an empty perspective retains the focus only as explicitly identified context", () => {
  const views = interactionViewCatalog(memberships, input);
  const selection = selectInteractionGraph(input, views, {
    perspectiveId: "hypotheses", caseId: "case:no-hypothesis", focusId: "preparation"
  });
  assert.deepEqual(selection.memberNodeIds, []);
  assert.equal(selection.focusOutsideView, true);
  assert.deepEqual(selection.input.nodes, [input.nodes[0]]);
  assert.deepEqual(selection.input.edges, []);
});

test("six disconnected case cards preserve their size in desktop, mobile and short scrollable canvases", () => {
  const projection = { nodes: Array.from({ length: 6 }, (_, index) => ({ id: String(index), caseContext: true })), edges: [] };
  for (const viewport of [{ width: 820, height: 900 }, { width: 390, height: 572 }, { width: 400, height: 469 }]) {
    const layout = layoutIsolatedCaseCards(projection, viewport);
    assert.equal(layout.nodeWidth, 208);
    assert.equal(layout.nodeHeight, 72);
    assert.ok(layout.height >= viewport.height);
    for (const node of layout.nodes) {
      assert.ok(node.x - layout.nodeWidth / 2 >= 0 && node.x + layout.nodeWidth / 2 <= viewport.width);
      assert.ok(node.y - layout.nodeHeight / 2 >= 0 && node.y + layout.nodeHeight / 2 <= layout.height);
    }
    for (let left = 0; left < layout.nodes.length; left++) for (let right = left + 1; right < layout.nodes.length; right++) {
      const a = layout.nodes[left], b = layout.nodes[right];
      assert.ok(Math.abs(a.x - b.x) >= layout.nodeWidth + 16 || Math.abs(a.y - b.y) >= layout.nodeHeight + 16);
    }
    assert.deepEqual(layout.edges, []);
    if (viewport.height === 469) assert.ok(layout.height > viewport.height,
      "The short canvas must expose its overflow for scrolling instead of clipping or shrinking the last record");
  }
});

test("invalid perspective memberships fail instead of inventing or repairing edges", () => {
  const escaped = structuredClone(memberships);
  escaped.perspectives[0].edgeIds = ["measurement"];
  assert.throws(() => interactionViewCatalog(escaped, input), /edge escapes/);
  const wrongAnchor = structuredClone(memberships);
  wrongAnchor.cases[0].anchorEntityId = "missing";
  assert.throws(() => interactionViewCatalog(wrongAnchor, input), /anchor/);
  const duplicate = structuredClone(memberships);
  duplicate.perspectives[0].nodeIds.push("response");
  assert.throws(() => interactionViewCatalog(duplicate, input), /duplicate/);
  const views = interactionViewCatalog(memberships, input);
  assert.throws(() => selectInteractionGraph(input, views, { perspectiveId: "causal" }), /unknown perspective/);
});

test("interaction view URLs remain bound to an exact release and compatible case focus", async () => {
  const app = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const start = app.indexOf("function restoreInteractionLocationState(focusId) {");
  const end = app.indexOf("\nasync function restoreLocationState()", start);
  assert.ok(start >= 0 && end > start);
  function restore(parameters, focusId = "response") {
    const state = { selection: { modelId: "fixture", version: "1" }, interactionViews: memberships };
    const elements = { "interaction-perspective": {}, "interaction-case": {} };
    vm.runInNewContext(`${app.slice(start, end)}\nrestoreInteractionLocationState(focusId);`, {
      state, elements, focusId, URLSearchParams, location: { hash: `#${new URLSearchParams(parameters)}` }
    });
    return { perspective: state.interactionPerspectiveId, case: state.interactionCaseId };
  }
  const requested = { model: "fixture", version: "1", view: "system", case: "case:one" };
  assert.deepEqual(restore(requested), { perspective: "system", case: "case:one" });
  assert.deepEqual(restore({ ...requested, version: "other" }), { perspective: "", case: "" });
  assert.deepEqual(restore({ ...requested, model: "other" }), { perspective: "", case: "" });
  assert.deepEqual(restore({ ...requested, view: "invented", case: "unknown" }), { perspective: "", case: "" });
  assert.deepEqual(restore({ ...requested, case: "case:no-hypothesis" }), { perspective: "system", case: "" });
});

test("the actual interaction inspector resolves case-local evidence and limits without changing records", async () => {
  const appUrl = new URL("../../apps/model-studio/model-studio.js", import.meta.url);
  const app = await readFile(appUrl, "utf8");
  const start = app.indexOf("function renderInteractionCases(record) {");
  const end = app.indexOf("\nfunction renderRationale(record)", start);
  assert.ok(start >= 0 && end > start);
  const render = app.slice(start, end).replaceAll("import.meta.url", JSON.stringify(appUrl.href));
  const source = { id: "source", title: "Measured supplied network", doi: "10.1234/fixture",
    url: "https://example.test/article.pdf", review: { extent: "selected-primary-passages", limit: "Supplementary controls were not read." } };
  const record = {
    interactionCases: [{ id: "case:one", title: "Composition", domain: "chemistry", evidenceMode: "experiment", sourceGroupId: "group:one",
      facets: [{ kind: "composition", value: "reported-failure", status: "reported", statement: "Separate steps do not assure a complete turn.", claimIds: ["claim"], studyIds: ["study"] }],
      fields: { response: { value: "The combined network stalled.", claimIds: ["claim"] },
        timeScale: { value: null, missingReason: "not-reported", claimIds: [] } },
      observations: [{ kind: "reported-observation", statement: "No complete turn.", claimIds: ["claim"], studyIds: ["study"] }],
      claims: [{ id: "claim", status: "publication-supported", statement: "A finite observation.", scope: "One preparation", contextIds: ["study"],
        citations: [{ sourceId: "source", role: "supports", locator: "Figure 1" }], limitations: ["No isolated causal explanation."] }],
      sources: [source], studies: [{ id: "study", preparation: "Supplied enzymes.", observable: "Intermediate abundance.",
        readExtent: "selected-primary-passages", reviewedLocators: ["Figure 1"], limitations: ["One shared acquisition."] }],
      limitations: ["No autonomous reproduction."] }],
    interactionCaseRefs: [{ id: "case:one", title: "Composition", anchorEntityId: "response" },
      { id: "case:other", title: "Other case", anchorEntityId: "isolated" }],
    interactionAnalogies: [{ id: "comparison", correspondence: "Both cases retain supplied resources.", fields: ["resources"],
      breakdownConditions: "Different readouts cannot be equated.", cases: [{ id: "case:other", title: "Other case", anchorEntityId: "isolated" }] }]
  };
  const before = structuredClone(record);
  function element(tag, className = "", textContent = "") {
    return { tag, className, textContent, children: [], handlers: {},
      append(...children) { this.children.push(...children); },
      replaceChildren(...children) { this.children = children; },
      addEventListener(name, handler) { this.handlers[name] = handler; } };
  }
  const panel = element("details");
  const container = element("div");
  const focused = [];
  vm.runInNewContext(`${render}\nrenderInteractionCases(record);`, {
    record, URL, citationLinks, resolveClaimCitations, createElement: element,
    focusNode: (id) => focused.push(id), elements: { "interaction-cases-panel": panel, "interaction-cases-records": container },
    document: { createTextNode: (textContent) => ({ textContent }) }
  });
  const all = [];
  const visit = (node) => { all.push(node); for (const child of node.children ?? []) visit(child); };
  visit(container);
  assert.equal(panel.hidden, false);
  const text = all.map((node) => node.textContent).join("\n");
  for (const expected of ["The combined network stalled.", "Separate steps do not assure a complete turn.", "composition: reported-failure · reported", "not-reported", "Measured supplied network", "Figure 1",
    "Supplementary controls were not read.", "One shared acquisition.", "No isolated causal explanation.",
    "No autonomous reproduction.", "Different readouts cannot be equated."]) assert.ok(text.includes(expected), expected);
  assert.equal(all.filter((node) => node.textContent?.startsWith("Comparison boundary:")).length, 1);
  assert.deepEqual(all.filter((node) => node.tag === "a").map((node) => node.href),
    citationLinks({ source }, new URL("../../", appUrl)).map((link) => link.href));
  const buttons = all.filter((node) => node.tag === "button");
  assert.equal(buttons.length, 2, "The anchor is not linked redundantly to its own passport");
  buttons[0].handlers.click();
  assert.deepEqual(focused, ["isolated"]);
  assert.deepEqual(record, before);
});
