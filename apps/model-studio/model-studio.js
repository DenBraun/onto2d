import {
  loadModelPackBundle,
  loadModelPackHttpDirectory
} from "../../packages/model-pack/src/browser.js?v=20261106.10";
import {
  createIndexedDbModelPackCacheStorage,
  createVerifiedModelPackCache
} from "../../packages/model-pack/src/cache.js?v=20261106.10";
import {
  loadModelPackRegistryHttp,
  matchModelPackRegistryResolution,
  resolveModelPackRegistry
} from "../../packages/model-pack/src/registry.js?v=20261106.10";
import { createModelPackWorkerClient } from "../../packages/model-pack/src/worker.js?v=20261106.10";
import { RDF_IMPORT_LIMITS, importNTriples } from "../../packages/rdf-import/src/index.js?v=20261106.10";
import {
  buildRdfMappedModelPack,
  verifyRdfMappingPolicy
} from "../../packages/rdf-mapping/src/index.js?v=20261106.10";
import { validateShacl } from "../../packages/shacl-validation/src/index.js?v=20261106.10";
import { createVerifiedModelPresentation } from "../../packages/engine/src/presentation.js?v=20261106.10";
import { layoutNeighborhood, wrapGraphNodeLabel } from "../../packages/view/src/index.js?v=20261106.10";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { graphHighlight } from "./graph-interactions.js?v=20261106.10";
import { interactionViewCatalog, selectInteractionGraph, interactionCaseOverview, layoutIsolatedCaseCards } from "./interaction-views.js?v=20261106.10";
import { citationLinks, resolveClaimCitations } from "./evidence-links.js?v=20261106.10";
import { recordEvidenceContext, resolveRecordEvidence } from "./record-evidence.js?v=20261106.10";
import { loadBrowseModel } from "./browse-data.js?v=20261106.10";
import {
  modelSelectionKey,
  modelSelectionLabel,
  registryEntryForKey,
  requestedRegistryEntry,
  requestedWorkspaceState
} from "./model-selection.js?v=20261106.10";

const MODEL_REGISTRY_URL = new URL("../../models/registry.json", import.meta.url);
const DEFAULT_MODEL_SELECTION = Object.freeze({ modelId: "causal-emergence", version: "2026.11.05.0" });
const MODEL_PACK_WORKER_URL = new URL(
  "../../assets/js/model-pack-worker.js?v=20261106.10",
  import.meta.url
);
const EXPECTED_REGISTRY_HASH = "sha256:0043116fedbcfb0ae3b50902b61686629904157ee3d9fa0557aa1dfe5be18298";
const MODEL_CACHE_OPTIONS = Object.freeze({
  databaseName: "onto2d-model-studio-cache-v1",
  maxEntries: 4,
  maxTotalBytes: 128 * 1024 * 1024
});
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const GRAPH_LIMITS = Object.freeze({ maxNodes: 48, maxEdges: 180 });
const GRAPH_NODE = Object.freeze({ width: 148, height: 54, radius: 8, maxCharacters: 21, maxLines: 3, lineHeight: 13 });
const CATALOG_PAGE_SIZE = 60;
const MAX_POLICY_BYTES = 512 * 1024;
const LOCAL_MODEL_OPTION = "local-rdf";
const PRESENTATION_FIELDS = new Set([
  "id", "name", "level", "phase", "typeRole", "scientificStatus", "layer", "arisingId", "cluster", "domain",
  "shortDescription", "parentCount", "childCount", "incomingEdgeCount",
  "outgoingEdgeCount", "degree"
]);

const ids = [
  "model-selector", "model-name", "model-version", "node-count", "edge-count", "root-hash", "load-state",
  "catalog-count", "catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter",
  "status-filter", "catalog-sort", "catalog-list", "catalog-empty", "catalog-empty-hint", "graph-title", "editor-tab-label",
  "catalog-more", "window-model-id", "rdf-import-open", "rdf-import-dialog", "rdf-import-form",
  "rdf-import-close", "rdf-import-cancel", "rdf-import-submit", "rdf-data-file",
  "rdf-shapes-file", "rdf-policy-file", "rdf-import-status",
  "reset-view", "direction-controls", "depth-controls", "neighborhood-graph", "graph-edges",
  "graph-nodes", "graph-message", "graph-counts", "selected-id", "selected-coordinate",
  "selected-name", "selected-tags", "selected-summary", "parent-count", "child-count",
  "degree-count", "parents-total", "children-total", "parent-list", "child-list",
  "selected-description", "selected-record", "selected-rationale", "model-boundary-title", "model-boundary-summary",
  "model-boundary-note", "records-title-label", "parents-title-label", "children-title-label",
  "level-filter-control", "role-filter-control", "phase-filter-control", "status-filter-control",
  "level-filter-label", "role-filter-label", "phase-filter-label", "status-filter-label",
  "layer-filter-control", "layer-filter-label", "arising-table-panel", "arising-table", "arising-panel", "arising-details",
  "source-readiness-panel", "source-readiness-summary",
  "source-readiness-records", "source-readiness-download", "optical-review-panel", "optical-review-summary",
  "optical-review-records", "optical-review-download",
  "visual-review-panel", "visual-review-summary", "visual-review-records", "visual-review-download",
  "neural-review-panel", "neural-review-summary", "neural-review-records", "neural-review-download",
  "physics-review-panel", "physics-review-summary", "physics-review-records", "physics-review-download",
  "cellular-review-panel", "cellular-review-summary", "cellular-review-records", "cellular-review-download",
  "organismal-review-panel", "organismal-review-summary", "organismal-review-records", "organismal-review-download",
  "neural-systems-review-panel", "neural-systems-review-summary", "neural-systems-review-records", "neural-systems-review-download",
  "social-systems-review-panel", "social-systems-review-summary", "social-systems-review-records", "social-systems-review-download",
  "biochemistry-review-panel", "biochemistry-review-summary", "biochemistry-review-records", "biochemistry-review-download",
  "interaction-view-controls", "interaction-perspective", "interaction-case", "direction-depth-separator",
  "interaction-cases-panel", "interaction-cases-records", "graph-parent-key", "graph-child-key", "graph-case-key"
];
const elements = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
for (const [id, element] of Object.entries(elements)) {
  if (!element) throw new Error(`Model Studio markup is missing #${id}.`);
}

const state = {
  registrySnapshot: null,
  selection: null,
  modelSource: null,
  pack: null,
  presentation: null,
  browse: null,
  presentationMetadata: null,
  manifest: null,
  focusId: null,
  selectedId: null,
  domainFilter: null,
  nodeNames: new Map(),
  arisingTableFor: null,
  direction: "both",
  depth: 1,
  interactionViews: null,
  interactionGraphInput: null,
  interactionPerspectiveId: "",
  interactionCaseId: "",
  catalog: {
    key: null,
    items: [],
    total: 0,
    matching: 0,
    nextOffset: null
  }
};
let activeGraphProjection = null;
let modelLoadSequence = 0;
let pendingModelLoad = null;
let pendingInspection = null;
let inspectionSequence = 0;
let eventsBound = false;

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(SVG_NAMESPACE, name);
  for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, String(value));
  return element;
}

function createElement(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function shortenedHash(value) {
  return typeof value === "string" && value.length > 26
    ? `${value.slice(0, 14)}...${value.slice(-8)}`
    : String(value ?? "not available");
}

function scalarLabel(value, fallback = "not declared") {
  return value === null || value === undefined || value === "" ? fallback : String(value);
}

function boundedLabel(value, fallback, maximum = 240) {
  return typeof value === "string" && value.length > 0 && value.length <= maximum
    ? value
    : fallback;
}

function arisingTableMetadata(value) {
  const axis = (entries) => (Array.isArray(entries) ? entries.slice(0, 32).filter((entry) => (
    entry !== null && typeof entry === "object" && Number.isInteger(entry.value)
    && typeof entry.name === "string" && entry.name.length > 0 && entry.name.length <= 80
  )).map(({ value, name }) => Object.freeze({ value, name })) : []);
  const levels = axis(value?.levels);
  const phases = axis(value?.phases);
  const names = (entries) => new Map(axis(entries).map(({ value: id, name }) => [id, name]));
  const layer = typeof value?.layer === "string" && value.layer.length > 0 && value.layer.length <= 80 ? value.layer : null;
  const rootNote = typeof value?.rootNote === "string" && value.rootNote.length > 0 && value.rootNote.length <= 800 ? value.rootNote : null;
  const named = (entries, limit) => (Array.isArray(entries) ? entries.slice(0, limit).filter((entry) => (
    entry !== null && typeof entry === "object" && typeof entry.value === "string" && entry.value.length > 0 && entry.value.length <= 80
    && typeof entry.name === "string" && entry.name.length > 0 && entry.name.length <= 120
  )) : []);
  const domains = named(value?.domains, 12).map(({ value: id, name }, index) => Object.freeze({ value: id, name, index }));
  const domainIds = new Set(domains.map((domain) => domain.value));
  const clusters = named(value?.clusters, 400).filter((entry) => domainIds.has(entry.domain))
    .map(({ value: id, name, domain }, index) => Object.freeze({ value: id, name, domain, index }));
  return layer && levels.length && phases.length ? Object.freeze({ layer, levels, phases, rootNote,
    domains: new Map(domains.map((domain) => [domain.value, domain])), clusters: new Map(clusters.map((cluster) => [cluster.value, cluster])),
    dependencyTypes: names(value?.dependencyTypes), causalDirections: names(value?.causalDirections), interactionModes: names(value?.interactionModes) }) : null;
}

/** The layer and record a release opens on, when it declares them. */
function presentationDefaults(value) {
  const text = (entry) => (typeof entry === "string" && entry.length > 0 && entry.length <= 200 ? entry : null);
  return Object.freeze({ layer: text(value?.layer), focusId: text(value?.focusId) });
}

function presentationMetadata(pack, { localRdf = false } = {}) {
  const dictionaries = pack.files["model/dictionaries.json"];
  const supplied = dictionaries?.presentation;
  const labels = supplied?.labels;
  const boundary = supplied?.boundary;
  const suppliedCoordinates = Array.isArray(supplied?.coordinates)
    ? supplied.coordinates.slice(0, 4).filter((coordinate) => (
        coordinate !== null
        && typeof coordinate === "object"
        && !Array.isArray(coordinate)
        && PRESENTATION_FIELDS.has(coordinate.field)
        && typeof coordinate.label === "string"
        && coordinate.label.length > 0
        && coordinate.label.length <= 40
      ))
    : [];
  const metadata = {
    labels: {
      catalogTitle: boundedLabel(labels?.catalogTitle, "Records"),
      searchPlaceholder: boundedLabel(labels?.searchPlaceholder, "Search records"),
      levelFilter: boundedLabel(labels?.levelFilter, "Level"),
      typeFilter: boundedLabel(labels?.typeFilter, "Type"),
      phaseFilter: boundedLabel(labels?.phaseFilter, "Phase"),
      statusFilter: boundedLabel(labels?.statusFilter, "Status"),
      layerFilter: boundedLabel(labels?.layerFilter, "Layer"),
      parents: boundedLabel(labels?.parents, "Direct parents"),
      children: boundedLabel(labels?.children, "Direct children")
    },
    arisingTable: arisingTableMetadata(supplied?.arisingTable),
    defaults: presentationDefaults(supplied?.defaults),
    coordinates: suppliedCoordinates.length > 0
      ? suppliedCoordinates.map(({ field, label }) => Object.freeze({ field, label }))
      : [
          Object.freeze({ field: "level", label: "Level" }),
          Object.freeze({ field: "phase", label: "Phase" })
        ],
    boundary: {
      title: boundedLabel(boundary?.title, "Verified model boundary"),
      summary: boundedLabel(
        boundary?.summary,
        "Record and relation semantics are those declared by this exact verified release.",
        4000
      ),
      note: boundedLabel(
        boundary?.note,
        "The Studio does not add dependency or causal meaning beyond the selected Model Pack."
      )
    }
  };
  if (localRdf) {
    metadata.boundary = {
      title: "Local RDF boundary",
      summary: "Reviewed mapping projection. Nodes and edges are admitted only by the exact local policy after SHACL conformance.",
      note: "This in-memory model is not a registry release, is not uploaded, and disappears when the page reloads."
    };
  }
  return Object.freeze(metadata);
}

function coordinateText(node, fallback = "No coordinate") {
  const parts = state.presentationMetadata.coordinates
    .filter(({ field }) => node[field] !== null && node[field] !== undefined && node[field] !== "")
    .map(({ field, label }) => `${label} ${String(node[field])}`);
  return parts.length > 0 ? parts.join(" / ") : fallback;
}

function compactCoordinateText(node, fallback = "--") {
  const values = state.presentationMetadata.coordinates
    .map(({ field }) => node[field])
    .filter((value) => value !== null && value !== undefined && value !== "")
    .map(String);
  return values.length > 0 ? values.join(" / ") : fallback;
}

function selectFacetValue(element) {
  if (element.value === "") return [];
  try {
    return [JSON.parse(element.value)];
  } catch {
    return [];
  }
}

function populateSelect(element, entries, allLabel) {
  const first = createElement("option", "", allLabel);
  first.value = "";
  const options = entries.map(({ value, count }) => {
    const option = createElement("option", "", `${value} (${count})`);
    option.value = JSON.stringify(value);
    return option;
  });
  element.replaceChildren(first, ...options);
}

function currentCatalogQuery() {
  const [sort, order] = elements["catalog-sort"].value.split(":");
  return {
    search: elements["catalog-search"].value,
    levels: selectFacetValue(elements["level-filter"]),
    layers: selectFacetValue(elements["layer-filter"]),
    phases: selectFacetValue(elements["phase-filter"]),
    typeRoles: selectFacetValue(elements["role-filter"]),
    scientificStatuses: selectFacetValue(elements["status-filter"]),
    sort,
    order
  };
}

function inspectNode(id) {
  if (!state.presentation?.has(id)) return;
  state.selectedId = id;
  for (const element of elements["catalog-list"].querySelectorAll("[data-node-id]")) {
    element.setAttribute("aria-selected", String(element.dataset.nodeId === id));
  }
  for (const element of elements["graph-nodes"].querySelectorAll("[data-node-id]")) {
    element.dataset.selected = String(element.dataset.nodeId === id);
  }
  for (const element of elements["arising-table"].querySelectorAll("[data-node-id]")) {
    element.dataset.selected = String(element.dataset.nodeId === id);
  }
  renderInspector();
}

function focusNode(id, updateLocation = true) {
  if (!state.presentation?.has(id)) return;
  const selectedCase = state.interactionViews?.cases.find((record) => record.id === state.interactionCaseId);
  if (selectedCase && !selectedCase.entityIds.includes(id)) {
    state.interactionCaseId = "";
    elements["interaction-case"].value = "";
  }
  state.focusId = id;
  state.selectedId = id;
  if (updateLocation) replaceLocationState();
  render();
}

function renderCatalog({ reset = false, loadMore = false } = {}) {
  const query = currentCatalogQuery();
  const key = JSON.stringify(query);
  const shouldReset = reset || state.catalog.key !== key;
  if (shouldReset) {
    const page = state.presentation.catalog({ ...query, offset: 0, limit: CATALOG_PAGE_SIZE });
    state.catalog = {
      key,
      items: [...page.items],
      total: page.total,
      matching: page.matching,
      nextOffset: page.nextOffset
    };
  } else if (loadMore && state.catalog.nextOffset !== null) {
    const page = state.presentation.catalog({
      ...query,
      offset: state.catalog.nextOffset,
      limit: CATALOG_PAGE_SIZE
    });
    state.catalog.items.push(...page.items);
    state.catalog.nextOffset = page.nextOffset;
    state.catalog.total = page.total;
    state.catalog.matching = page.matching;
  }
  elements["catalog-count"].textContent = `${state.catalog.items.length} / ${state.catalog.matching}`;
  elements["catalog-count"].title = `${state.catalog.matching} matching of ${state.catalog.total} total nodes`;
  const items = state.catalog.items.map((node) => {
    const button = createElement("button", "catalog-item");
    button.type = "button";
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(node.id === state.selectedId));
    button.dataset.nodeId = node.id;
    button.dataset.focus = String(node.id === state.focusId);
    button.title = "Click to inspect; double-click to focus the graph";
    const coordinate = createElement("span", "catalog-coordinate", compactCoordinateText(node));
    coordinate.title = coordinateText(node);
    const title = createElement("strong", "", node.name);
    const metadata = createElement("small", "", `${node.id} | ${scalarLabel(node.typeRole)} | ${node.degree} edges`);
    button.append(coordinate, title, metadata);
    button.addEventListener("click", () => inspectNode(node.id));
    button.addEventListener("dblclick", () => focusNode(node.id));
    return button;
  });
  elements["catalog-list"].replaceChildren(...items);
  elements["catalog-empty"].hidden = items.length > 0;
  elements["catalog-empty-hint"].textContent = query.layers.length
    ? `The ${state.presentationMetadata.labels.layerFilter} filter limits the search to the selected layer; clear it to search every record.`
    : "Clear a filter or shorten the search.";
  elements["catalog-more"].hidden = state.catalog.nextOffset === null;
  elements["catalog-more"].textContent = state.catalog.nextOffset === null
    ? "All matching records loaded"
    : `Load next ${Math.min(CATALOG_PAGE_SIZE, state.catalog.matching - state.catalog.items.length)}`;
}

function relationClass(relation) {
  return ["focus", "parent", "child", "both"].includes(relation) ? relation : "child";
}

function clearGraphHighlight() {
  for (const element of elements["graph-nodes"].querySelectorAll("[data-highlight]")) {
    element.removeAttribute("data-highlight");
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-highlight]")) {
    element.removeAttribute("data-highlight");
  }
}

function applyGraphHighlight(target) {
  if (!activeGraphProjection) return;
  const highlight = graphHighlight(activeGraphProjection, target);
  const primaryNodes = new Set(highlight.primaryNodes);
  const connectedNodes = new Set(highlight.connectedNodes);
  const primaryEdges = new Set(highlight.primaryEdges);
  const connectedEdges = new Set(highlight.connectedEdges);
  for (const element of elements["graph-nodes"].querySelectorAll("[data-node-id]")) {
    const id = element.dataset.nodeId;
    element.dataset.highlight = primaryNodes.has(id)
      ? "primary"
      : connectedNodes.has(id) ? "connected" : "dimmed";
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-edge-id]")) {
    const id = element.dataset.edgeId;
    element.dataset.highlight = primaryEdges.has(id)
      ? "primary"
      : connectedEdges.has(id) ? "connected" : "dimmed";
  }
}

function bindGraphHighlight(element, target) {
  element.addEventListener("pointerenter", () => applyGraphHighlight(target));
  element.addEventListener("pointerleave", clearGraphHighlight);
  element.addEventListener("focus", () => applyGraphHighlight(target));
  element.addEventListener("blur", clearGraphHighlight);
}

function renderGraph() {
  const selection = state.interactionViews && (state.interactionPerspectiveId || state.interactionCaseId)
    ? selectInteractionGraph(state.interactionGraphInput, state.interactionViews, {
      perspectiveId: state.interactionPerspectiveId, caseId: state.interactionCaseId, focusId: state.focusId
    }) : null;
  const presentation = selection ? createLazyModelPresentation(selection.input) : state.presentation;
  const neighborhoodOptions = {
    focusId: state.focusId, depth: state.depth, direction: state.direction, ...GRAPH_LIMITS
  };
  const projection = selection?.selectedCase
    ? interactionCaseOverview(presentation, selection, state.focusId, GRAPH_LIMITS)
    : selection ? presentation.neighborhood(neighborhoodOptions)
      : state.presentation.neighborhood(neighborhoodOptions);
  if (selection) presentation.close();
  const isolatedCase = Boolean(selection?.selectedCase && projection.edges.length === 0);
  const graph = elements["neighborhood-graph"];
  const stage = graph.closest(".graph-stage");
  stage.dataset.isolatedCase = String(isolatedCase);
  const dimensions = isolatedCase ? {
    width: Math.max(320, stage.clientWidth),
    height: Math.max(240, stage.clientHeight)
  } : { width: 1040, height: 680 };
  const layout = isolatedCase ? layoutIsolatedCaseCards(projection, dimensions) : layoutNeighborhood(projection, {
    width: 1040,
    height: 680,
    padding: 42,
    nodeWidth: GRAPH_NODE.width,
    nodeHeight: GRAPH_NODE.height
  });
  graph.style.height = isolatedCase ? `${layout.height}px` : "";
  graph.setAttribute("viewBox", `0 0 ${layout.width} ${layout.height}`);
  if (!isolatedCase) stage.scrollTop = 0;
  activeGraphProjection = projection;
  elements["graph-title"].textContent = projection.focus.name;
  elements["editor-tab-label"].textContent = `${projection.focus.id} ${projection.focus.name}`;
  elements["neighborhood-graph"].setAttribute("aria-label", `${projection.focus.name}: ${projection.counts.displayedNodeCount} visible nodes and ${projection.counts.displayedEdgeCount} visible edges.`);

  const edgeNodes = layout.edges.map((edge) => {
    const isFocusEdge = edge.source === state.focusId || edge.target === state.focusId;
    const meaning = [edge.relationLayer, edge.role ?? edge.dependencyType, edge.assertion]
      .filter((value) => value !== null && value !== undefined && value !== "").map(scalarLabel).join(" | ");
    const weight = edge.weight === null || edge.weight === undefined ? "" : ` | weight ${scalarLabel(edge.weight)}`;
    const label = `${edge.source} -> ${edge.target}${meaning ? ` | ${meaning}` : ""}${weight}`;
    const group = svgElement("g", {
      class: "graph-edge",
      tabindex: "0",
      role: "img",
      "aria-label": label,
      "data-edge-id": edge.id,
      "data-source": edge.source,
      "data-target": edge.target
    });
    const hitPath = svgElement("path", { class: "edge-hit", d: edge.path });
    const linePath = svgElement("path", {
      class: "edge-line",
      d: edge.path,
      fill: "none",
      stroke: isFocusEdge ? "#4ec9b0" : "#6a6a6a",
      "stroke-width": isFocusEdge ? "1.8" : "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "vector-effect": "non-scaling-stroke",
      "data-focus-edge": isFocusEdge ? "true" : "false",
      "marker-end": isFocusEdge ? "url(#studio-arrow-focus)" : "url(#studio-arrow)"
    });
    const title = svgElement("title");
    title.textContent = label;
    group.append(hitPath, linePath, title);
    bindGraphHighlight(group, { kind: "edge", id: edge.id });
    return group;
  });
  elements["graph-edges"].replaceChildren(...edgeNodes);

  const nodeNodes = layout.nodes.map((node) => {
    const group = svgElement("g", {
      class: "graph-node",
      transform: `translate(${node.x} ${node.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${node.name}, node ${node.id}, ${node.caseContext ? "case record" : node.relation}${node.caseIsolate ? ", no displayed incident relation" : ""}. Enter inspects; Shift Enter or Space focuses.`,
      "data-node-id": node.id,
      "data-relation": node.caseContext && node.id !== state.focusId ? "context" : relationClass(node.relation),
      "data-focus": node.id === state.focusId ? "true" : "false",
      "data-selected": node.id === state.selectedId ? "true" : "false"
    });
    const box = svgElement("rect", {
      x: -layout.nodeWidth / 2,
      y: -layout.nodeHeight / 2,
      width: layout.nodeWidth,
      height: layout.nodeHeight,
      rx: GRAPH_NODE.radius,
      ry: GRAPH_NODE.radius
    });
    const label = svgElement("text", { "aria-hidden": "true" });
    if (isolatedCase) label.style.fontSize = "14px";
    const lineHeight = isolatedCase ? 16 : GRAPH_NODE.lineHeight;
    const wrapped = wrapGraphNodeLabel(node.name, {
      maxCharacters: Math.max(8, Math.min(
        GRAPH_NODE.maxCharacters,
        Math.floor((layout.nodeWidth - 24) / (isolatedCase ? 8.4 : 7.25))
      )),
      maxLines: GRAPH_NODE.maxLines
    });
    const firstLineY = -((wrapped.lines.length - 1) * lineHeight) / 2 + 4;
    label.append(...wrapped.lines.map((line, index) => {
      const span = svgElement("tspan", { x: 0, y: firstLineY + index * lineHeight });
      span.textContent = line;
      return span;
    }));
    group.dataset.truncated = String(wrapped.truncated);
    const title = svgElement("title");
    title.textContent = `${node.id} | ${node.name}`;
    group.append(box, label, title);
    group.addEventListener("click", () => inspectNode(node.id));
    group.addEventListener("dblclick", () => focusNode(node.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        inspectNode(node.id);
      }
      if (event.key === " " || (event.key === "Enter" && event.shiftKey)) {
        event.preventDefault();
        focusNode(node.id);
      }
    });
    bindGraphHighlight(group, { kind: "node", id: node.id });
    return group;
  });
  elements["graph-nodes"].replaceChildren(...nodeNodes);

  const hidden = projection.counts.hiddenNodeCount + projection.counts.hiddenEdgeCount;
  const messages = [];
  if (selection?.perspective) messages.push(selection.perspective.boundary);
  if (selection?.selectedCase) messages.push("Case overview includes disconnected records. Card position does not establish an interaction.");
  if (selection?.focusOutsideView) messages.push(selection.memberNodeIds.length
    ? "The focus is outside this view and is retained without relations for context."
    : "This case has no records in the selected perspective. Its focus is shown only for context.");
  if (hidden) messages.push(`Bounded view: ${projection.counts.hiddenNodeCount} nodes and ${projection.counts.hiddenEdgeCount} edges omitted.`);
  elements["graph-message"].hidden = messages.length === 0;
  elements["graph-message"].dataset.caseOverview = String(Boolean(selection?.selectedCase));
  if (selection?.selectedCase) {
    const scope = createElement("details");
    scope.append(createElement("summary", "", selection.memberNodeIds.length ? "View scope" : "No records in this view"));
    scope.append(createElement("p", "", messages.join(" ")));
    elements["graph-message"].replaceChildren(scope);
  } else elements["graph-message"].textContent = messages.join(" ");
  elements["graph-counts"].textContent = `${projection.counts.displayedNodeCount} nodes | ${projection.counts.displayedEdgeCount} edges | ${selection?.selectedCase ? "case overview" : `depth ${state.depth}`}`;
  for (const id of ["direction-controls", "depth-controls", "direction-depth-separator"]) {
    elements[id].hidden = Boolean(selection?.selectedCase);
  }
  for (const id of ["graph-parent-key", "graph-child-key"]) elements[id].hidden = Boolean(selection?.selectedCase);
  elements["graph-case-key"].hidden = !selection?.selectedCase;
}

function tag(text, tone) {
  const element = createElement("span", "node-tag", text);
  if (tone) element.dataset.tone = tone;
  return element;
}

function renderRelationList(container, nodes, emptyText) {
  if (nodes.length === 0) {
    container.replaceChildren(createElement("p", "relation-empty", emptyText));
    return;
  }
  const buttons = nodes.map((node) => {
    const button = createElement("button", "relation-item");
    button.type = "button";
    button.title = `${node.id} | ${node.name}`;
    button.setAttribute("aria-label", `${node.name}, node ${node.id}. Click to inspect.`);
    const identifier = createElement("code", "", node.id);
    const name = createElement("span", "", node.name);
    identifier.title = node.id;
    name.title = node.name;
    button.append(identifier, name);
    button.addEventListener("click", () => inspectNode(node.id));
    return button;
  });
  container.replaceChildren(...buttons);
}

function renderInspector() {
  pendingInspection?.abort();
  pendingInspection = null;
  const sequence = ++inspectionSequence;
  const detail = state.presentation.inspect(state.selectedId);
  elements["interaction-cases-panel"].hidden = true;
  elements["interaction-cases-records"].replaceChildren();
  const node = detail.node;
  elements["selected-id"].textContent = node.id;
  elements["selected-coordinate"].textContent = coordinateText(node);
  elements["selected-name"].textContent = node.name;
  elements["selected-tags"].replaceChildren(
    tag(scalarLabel(node.typeRole), "role"),
    tag(scalarLabel(node.scientificStatus), "status")
  );
  elements["selected-summary"].textContent = node.shortDescription || "No short description is declared for this record.";
  elements["parent-count"].textContent = String(node.parentCount);
  elements["child-count"].textContent = String(node.childCount);
  elements["degree-count"].textContent = String(node.degree);
  elements["parents-total"].textContent = String(detail.relationCounts.parentCount);
  elements["children-total"].textContent = String(detail.relationCounts.childCount);
  renderRelationList(elements["parent-list"], detail.relations.parents, "No direct parents in this release.");
  renderRelationList(elements["child-list"], detail.relations.children, "No direct children in this release.");
  if (state.browse === null) {
    const context = recordEvidenceContext([detail.record], state.pack.files["model/dictionaries.json"]);
    renderInspectedRecord(detail.record, resolveRecordEvidence(detail.record, context));
    return;
  }
  const controller = new AbortController();
  pendingInspection = controller;
  document.body.dataset.detailState = "loading";
  elements["selected-description"].textContent = "Loading record...";
  elements["selected-record"].textContent = "";
  elements["selected-rationale"].replaceChildren(createElement("p", "", "Loading sources and limitations..."));
  state.browse.inspectWithEvidence(node.id, { signal: controller.signal }).then(({ record, rationale }) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    renderInspectedRecord(record, rationale);
  }).catch((error) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    document.body.dataset.detailState = "error";
    elements["selected-description"].textContent = "Record details could not be loaded.";
    const retry = createElement("button", "", "Retry record details");
    retry.type = "button";
    retry.addEventListener("click", renderInspector, { once: true });
    elements["selected-rationale"].replaceChildren(
      createElement("p", "", `Could not verify record details: ${error.message}`), retry
    );
  });
}

function arisingButton(id, label, detail) {
  const button = createElement("button", "relation-item");
  button.type = "button";
  button.title = id;
  const identifier = createElement("code", "", id.replace(/^arising:/, ""));
  const name = createElement("span", "", label ?? id);
  button.append(identifier, name);
  if (detail) button.append(createElement("small", "", detail));
  button.addEventListener("click", () => inspectNode(id));
  button.addEventListener("dblclick", () => focusNode(id));
  return button;
}

function causeList(title, edges, endpoint, empty) {
  const section = createElement("div", "arising-causes");
  section.append(createElement("h5", "", `${title} (${edges.length})`));
  if (edges.length === 0) section.append(createElement("p", "relation-empty", empty));
  const dependencyNames = state.presentationMetadata?.arisingTable?.dependencyTypes;
  for (const edge of edges) {
    const id = edge[endpoint];
    const name = state.nodeNames.get(id) ?? id;
    const dependency = dependencyNames?.get(edge.dependencyType) ?? `dependency ${edge.dependencyType}`;
    section.append(arisingButton(id, name, `${edge.role} | ${edge.necessity} | ${dependency} | ${edge.status}`));
  }
  return section;
}

/** The domain and cluster that organize an arising, when the release declares them. */
function arisingOrganization(record) {
  const table = state.presentationMetadata?.arisingTable;
  const domain = table?.domains.get(record.domain);
  const cluster = table?.clusters.get(record.cluster);
  return domain || cluster ? [createElement("p", "", `Domain: ${domain?.name ?? record.domain}. Cluster: ${cluster?.name ?? record.cluster}.`)] : [];
}

/** Ontological context of the inspected record: an arising with its causes and subgraph, or the arising a record belongs to. */
function renderArising(record) {
  const panel = elements["arising-panel"];
  const box = elements["arising-details"];
  if (record.layer !== undefined && record.layer === state.presentationMetadata?.arisingTable?.layer) {
    const completeness = record.completeness ?? { mustCover: [], covered: [], openSlotNames: [] };
    const beyondGraph = Array.isArray(completeness.beyondGraphNames) ? completeness.beyondGraphNames : [];
    const parts = [
      createElement("p", "", `Cell ${record.code}: ${record.levelName ?? `level ${record.level}`} / ${record.phaseName ?? `phase ${record.phase}`}; ${record.typeRole}.`),
      createElement("p", "", `Scientific status: ${record.scientificStatus}. Evidence in its subgraph: ${String(record.evidenceCoverage).replaceAll("-", " ")}.`),
      ...arisingOrganization(record),
      createElement("p", "", `Mandatory causal categories covered: ${completeness.covered.length} of ${completeness.mustCover.length}`
        + (completeness.openSlotNames.length ? `; open: ${completeness.openSlotNames.join(", ")}` : "")
        + (beyondGraph.length ? `; beyond the graph: ${beyondGraph.join(", ")}` : "") + ".")
    ];
    const members = Array.isArray(record.memberIds) ? record.memberIds : [];
    const subgraph = createElement("div", "arising-members");
    subgraph.append(createElement("h5", "", `Technical subgraph (${members.length} ${members.length === 1 ? "record" : "records"})`));
    for (const id of members.slice(0, 80)) {
      const button = createElement("button", "relation-item");
      button.type = "button";
      button.append(createElement("code", "", id), createElement("span", "", state.nodeNames.get(id) ?? id));
      button.addEventListener("click", () => inspectNode(id));
      button.addEventListener("dblclick", () => focusNode(id));
      subgraph.append(button);
    }
    if (members.length > 80) subgraph.append(createElement("p", "relation-empty", `${members.length - 80} further records are listed in the record fields.`));
    const obligations = createElement("ul", "arising-obligations");
    for (const text of record.openObligations ?? []) obligations.append(createElement("li", "", text));
    box.replaceChildren(...parts,
      causeList("Causes", state.causes?.byChild.get(record.id) ?? [], "source",
        state.presentationMetadata?.arisingTable?.rootNote ?? "No cause inside this graph."),
      causeList("Arisings it conditions", state.causes?.byParent.get(record.id) ?? [], "target", "No arising lists this one as a parent."),
      subgraph, ...(obligations.childElementCount ? [createElement("h5", "", "Open obligations"), obligations] : []));
    panel.hidden = false;
    return;
  }
  if (typeof record.arisingId === "string" && state.presentation.has(record.arisingId)) {
    box.replaceChildren(createElement("p", "", "This technical record belongs to the subgraph of:"),
      arisingButton(record.arisingId, state.nodeNames.get(record.arisingId) ?? record.arisingId));
    panel.hidden = false;
    return;
  }
  panel.hidden = true;
  box.replaceChildren();
}

/**
 * Periodic-table view of the arisings: complexity levels as rows, level phases as columns.
 * The chips are built once per release; selection, focus and the domain filter update them in place.
 */
function renderArisingTable() {
  const panel = elements["arising-table-panel"];
  const table = state.presentationMetadata?.arisingTable;
  const hasArisings = Boolean(table) && (state.presentation?.descriptor.facets.layers ?? []).some((entry) => entry.value === table.layer);
  panel.hidden = !hasArisings;
  if (!hasArisings) {
    elements["arising-table"].replaceChildren();
    state.arisingTableFor = null;
    return;
  }
  if (state.arisingTableFor !== state.presentation) {
    buildArisingTable(table);
    state.arisingTableFor = state.presentation;
  }
  for (const item of elements["arising-table"].querySelectorAll(".arising-legend-item")) {
    item.setAttribute("aria-pressed", String(state.domainFilter === item.dataset.domain));
  }
  for (const chip of elements["arising-table"].querySelectorAll(".arising-chip")) {
    chip.dataset.selected = String(chip.dataset.nodeId === state.selectedId);
    chip.dataset.focus = String(chip.dataset.nodeId === state.focusId);
    chip.dataset.dimmed = String(Boolean(state.domainFilter && chip.dataset.domain !== state.domainFilter));
  }
}

function buildArisingTable(table) {
  const items = state.presentation.catalog({ layers: [table.layer], offset: 0, limit: 500, sort: "id", order: "asc" }).items;
  const cells = new Map();
  for (const node of items) {
    const key = `${node.level}:${node.phase}`;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(node);
  }
  const code = (id) => id.replace(/^arising:/, "");
  const clusterIndex = (node) => table.clusters.get(node.cluster)?.index ?? Number.MAX_SAFE_INTEGER;
  const order = (a, b) => clusterIndex(a) - clusterIndex(b) || code(a.id).split(".").map(Number)[1] - code(b.id).split(".").map(Number)[1];
  const rows = [];
  if (table.domains.size) {
    const legend = createElement("div", "arising-legend");
    legend.append(createElement("span", "arising-legend-title", "Domains"));
    for (const domain of table.domains.values()) {
      const item = createElement("button", "arising-legend-item", domain.name);
      item.type = "button";
      item.dataset.domain = domain.value;
      item.dataset.domainIndex = String(domain.index);
      item.addEventListener("click", () => {
        state.domainFilter = state.domainFilter === domain.value ? null : domain.value;
        renderArisingTable();
      });
      legend.append(item);
    }
    rows.push(legend);
  }
  rows.push(createElement("div", "arising-table-row arising-table-head"));
  rows.at(-1).append(createElement("span", "arising-table-corner", "Level"), ...table.phases.map((phase) => createElement("span", "arising-table-phase", phase.name)));
  for (const level of table.levels) {
    const row = createElement("div", "arising-table-row");
    row.append(createElement("span", "arising-table-level", `${level.value} ${level.name}`));
    for (const phase of table.phases) {
      const cell = createElement("div", "arising-table-cell");
      for (const node of (cells.get(`${level.value}:${phase.value}`) ?? []).sort(order)) {
        const chip = createElement("button", "arising-chip");
        chip.type = "button";
        chip.dataset.nodeId = node.id;
        chip.dataset.status = String(node.scientificStatus);
        const domain = table.domains.get(node.domain);
        if (typeof node.domain === "string") chip.dataset.domain = node.domain;
        if (domain) chip.dataset.domainIndex = String(domain.index);
        chip.title = `${code(node.id)} ${node.name} (${node.scientificStatus}${domain ? `; ${domain.name}` : ""})`;
        chip.append(createElement("code", "", code(node.id)), createElement("span", "", node.name));
        chip.addEventListener("click", () => inspectNode(node.id));
        chip.addEventListener("dblclick", () => focusNode(node.id));
        cell.append(chip);
      }
      row.append(cell);
    }
    rows.push(row);
  }
  elements["arising-table"].replaceChildren(...rows);
}

function renderInspectedRecord(record, rationale = record.rationale) {
  renderArising(record);
  elements["selected-description"].textContent = typeof record.description === "string"
    ? record.description : "No full description is declared for this record.";
  elements["selected-record"].textContent = JSON.stringify(record, null, 2);
  renderRationale({ ...record, rationale });
  renderInteractionCases(record);
  document.body.dataset.detailState = "ready";
}

function renderInteractionCases(record) {
  const cases = Array.isArray(record.interactionCases) ? record.interactionCases : [];
  const references = Array.isArray(record.interactionCaseRefs) ? record.interactionCaseRefs : [];
  const analogies = Array.isArray(record.interactionAnalogies) ? record.interactionAnalogies : [];
  const sections = [];
  const anchorButton = (reference) => {
    const button = createElement("button", "relation-item", reference.title ?? reference.id);
    button.type = "button";
    button.title = `Open interaction properties: ${reference.anchorEntityId}`;
    button.addEventListener("click", () => focusNode(reference.anchorEntityId));
    return button;
  };
  const provenance = (container, item) => {
    if (item.claimIds?.length) container.append(createElement("p", "", `Claims: ${item.claimIds.join("; ")}`));
    if (item.studyIds?.length) container.append(createElement("p", "", `Studies: ${item.studyIds.join("; ")}`));
  };
  for (const interaction of cases) {
    const section = createElement("section");
    section.append(createElement("h5", "", interaction.title));
    section.append(createElement("p", "", `${interaction.domain} \u00b7 ${interaction.evidenceMode}`));
    for (const facet of interaction.facets ?? []) {
      const finding = createElement("details");
      finding.open = true;
      finding.append(createElement("summary", "", `${facet.kind}: ${facet.value} \u00b7 ${facet.status}`));
      finding.append(createElement("p", "", facet.statement));
      provenance(finding, facet);
      section.append(finding);
    }
    for (const [key, field] of Object.entries(interaction.fields ?? {})) {
      const label = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      const property = createElement("details");
      property.append(createElement("summary", "", label.charAt(0).toUpperCase() + label.slice(1)));
      const missing = {
        "not-applicable": "Not applicable to this comparison (not-applicable).",
        "not-reviewed": "Not reviewed; no value is asserted (not-reviewed)."
      }[field.missingReason] ?? `No value is asserted (${field.missingReason}).`;
      property.append(createElement("p", "", field.value === null ? missing : field.value));
      provenance(property, field);
      section.append(property);
    }
    for (const observation of interaction.observations ?? []) {
      const finding = createElement("details");
      finding.append(createElement("summary", "", `Finding: ${observation.kind}`));
      finding.append(createElement("p", "", observation.statement));
      provenance(finding, observation);
      section.append(finding);
    }
    const sources = new Map((interaction.sources ?? []).map((source) => [source.id, source]));
    const studies = new Map((interaction.studies ?? []).map((study) => [study.id, study]));
    for (const claim of interaction.claims ?? []) {
      const support = createElement("details");
      support.append(createElement("summary", "", `Evidence: ${claim.id} \u00b7 ${claim.status}`));
      support.append(createElement("p", "", claim.statement));
      if (claim.scope) support.append(createElement("p", "", `Scope: ${claim.scope}`));
      for (const id of claim.contextIds ?? []) {
        const study = studies.get(id);
        if (!study) continue;
        support.append(createElement("p", "", `Study ${id}: ${study.preparation}`));
        support.append(createElement("p", "", `Observable: ${study.observable}`));
        support.append(createElement("p", "", `Reviewed: ${study.readExtent}. ${(study.reviewedLocators ?? []).join("; ")}`));
        for (const limit of study.limitations ?? []) support.append(createElement("p", "", `Study limit: ${limit}`));
      }
      for (const citation of resolveClaimCitations(claim)) {
        const source = citation.source ?? sources.get(citation.sourceId);
        const paragraph = createElement("p", "", `${citation.role}: ${source?.title ?? citation.sourceId} \u2014 ${citation.locator}. ${citation.note ?? ""} `);
        for (const link of citationLinks({ ...citation, source }, new URL("../../", import.meta.url))) {
          const anchor = createElement("a", "evidence-link", link.label);
          anchor.href = link.href;
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          paragraph.append(anchor, document.createTextNode(" "));
        }
        support.append(paragraph);
        if (source?.review) support.append(createElement("p", "", `Source review: ${source.review.extent}. ${source.review.limit}`));
      }
      for (const limit of claim.limitations ?? []) support.append(createElement("p", "", `Limit: ${limit}`));
      section.append(support);
    }
    for (const limit of interaction.limitations ?? []) section.append(createElement("p", "", `Case limit: ${limit}`));
    sections.push(section);
  }
  const localCases = new Set(cases.map((interaction) => interaction.id));
  for (const reference of references) {
    if (localCases.has(reference.id)) continue;
    const section = createElement("section");
    section.append(createElement("p", "", "Interaction conditions, findings and supporting evidence are available on the case anchor."));
    section.append(anchorButton(reference));
    sections.push(section);
  }
  for (const analogy of analogies) {
    const section = createElement("details");
    section.append(createElement("summary", "", `Proposed comparison: ${analogy.id}`));
    section.append(createElement("p", "", "Hypothesis for comparison; no physical causal relation between cases is asserted."));
    section.append(createElement("p", "", analogy.correspondence));
    if (analogy.fields?.length) section.append(createElement("p", "", `Compared properties: ${analogy.fields.join("; ")}`));
    const boundaries = typeof analogy.breakdownConditions === "string"
      ? [analogy.breakdownConditions] : analogy.breakdownConditions ?? [];
    for (const limit of boundaries) section.append(createElement("p", "", `Comparison boundary: ${limit}`));
    for (const reference of analogy.cases ?? []) section.append(anchorButton(reference));
    sections.push(section);
  }
  elements["interaction-cases-panel"].hidden = sections.length === 0;
  elements["interaction-cases-records"].replaceChildren(...sections);
}

function renderRationale(record) {
  const container = elements["selected-rationale"];
  const items = Array.isArray(record.rationale) ? record.rationale : [];
  const sections = items.map((claim) => {
    const section = createElement("section");
    const reviewedSources = new Set();
    section.append(createElement("h5", "", `${claim.id} \u00b7 ${claim.status}`));
    section.append(createElement("p", "", claim.statement));
    section.append(createElement("p", "", `Scope: ${claim.scope}`));
    for (const experiment of Array.isArray(claim.experimentalContexts) ? claim.experimentalContexts : []) {
      const context = createElement("details");
      context.append(createElement("summary", "", `Experimental comparison: ${experiment.id} \u00b7 ${experiment.cellType}`));
      context.append(createElement("p", "", `${experiment.organism}. ${experiment.preparation}`));
      context.append(createElement("p", "", `Adaptation: ${experiment.adaptation}`));
      context.append(createElement("p", "", `Stimulus: ${experiment.stimulus.description}`));
      const light = experiment.stimulus.light;
      context.append(createElement("p", "", `${light.role}: ${light.value} ${light.unit}; nominal ${light.nominalValue}.`));
      context.append(createElement("p", "", `Comparison: ${experiment.comparison}`));
      context.append(createElement("p", "", `Readout: ${experiment.observable}`));
      context.append(createElement("p", "", `Observation: ${experiment.review.observation}`));
      context.append(createElement("p", "", `Interpretation: ${experiment.review.inference}`));
      for (const candidate of experiment.review.candidates) {
        const route = experiment.routes.find((r) => r.id === candidate.routeId);
        context.append(createElement("p", "", `${route.name}: ${candidate.status}. ${candidate.reason}`));
        context.append(createElement("p", "", route.logic === "any"
          ? `Alternatives (inclusive OR): ${route.alternativeRouteIds.join("; ")}`
          : `Candidate mechanism: ${route.components.join(" \u2192 ")}`));
      }
      if (experiment.measurement) {
        const m = experiment.measurement;
        context.append(createElement("p", "", `Source table: ${m.sheet}!${m.intensityCell},${m.ratioCell}; response ratio ${m.responseRatio} (${m.ratioUnit}). Uncertainty: ${m.uncertainty}. ${m.sampling}`));
      }
      context.append(createElement("p", "", `Revisit: ${experiment.review.refutation}`));
      context.append(createElement("p", "", experiment.review.quantitativeInference));
      section.append(context);
    }
    for (const study of Array.isArray(claim.contexts) ? claim.contexts : []) {
      if (!study || typeof study !== "object") continue;
      const context = createElement("details");
      const subject = study.system ?? study.organism;
      context.append(createElement("summary", "", `Study context: ${study.id}${subject ? ` \u00b7 ${subject}` : ""}`));
      const design = studyDesignLabel(study);
      if (design) context.append(createElement("p", "", `Study design: ${design}`));
      context.append(createElement("p", "", `Preparation: ${study.preparation}`));
      context.append(createElement("p", "", `Observable: ${study.observable}`));
      context.append(createElement("p", "", `Reviewed: ${study.readExtent}. ${(study.reviewedLocators ?? []).join("; ")}`));
      for (const limit of Array.isArray(study.limitations) ? study.limitations : []) context.append(createElement("p", "", `Study limit: ${limit}`));
      section.append(context);
    }
    for (const citation of resolveClaimCitations(claim)) {
      const paragraph = createElement("p");
      const year = citation.source?.year ? ` (${citation.source.year})` : "";
      paragraph.append(createElement("span", "", `${citation.role}: ${citation.source?.title ?? citation.sourceId}${year} \u2014 ${citation.locator}. ${citation.note} `));
      for (const link of citationLinks(citation, new URL("../../", import.meta.url))) {
        const anchor = createElement("a", "evidence-link", link.label);
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        paragraph.append(anchor, document.createTextNode(" "));
      }
      section.append(paragraph);
      const review = citation.source?.review;
      const reviewText = [review?.extent, review?.limit]
        .filter((value) => typeof value === "string" && value.length > 0).join(". ");
      if (reviewText && !reviewedSources.has(citation.sourceId)) {
        section.append(createElement("p", "", `Source review: ${reviewText}`));
        reviewedSources.add(citation.sourceId);
      }
    }
    for (const limit of Array.isArray(claim.limitations) ? claim.limitations : []) {
      section.append(createElement("p", "", `Limit: ${limit}`));
    }
    return section;
  });
  if (Array.isArray(record.conditions)) {
    const conditions = createElement("section");
    conditions.append(createElement("h5", "", "Joint conditions \u2014 every condition is required"));
    for (const condition of record.conditions) conditions.append(createElement("p", "", condition));
    sections.unshift(conditions);
  }
  if (record.representation) {
    const representation = createElement("section");
    representation.append(createElement("h5", "", `Atlas role: ${record.representation.role}`));
    representation.append(createElement("p", "", record.representation.denotes));
    representation.append(createElement("p", "", `Physical instance admission: ${record.representation.instanceAdmission}.`));
    sections.unshift(representation);
  }
  container.replaceChildren(...(sections.length ? sections : [createElement("p", "", "This release has no structured claim rationale for this record. Inspect its original source fields below.")]));
}

function updateControls() {
  for (const button of elements["direction-controls"].querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button.dataset.direction === state.direction));
  }
  for (const button of elements["depth-controls"].querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.depth) === state.depth));
  }
}

function render() {
  if (!state.presentation) return;
  renderCatalog();
  renderArisingTable();
  renderGraph();
  renderInspector();
  updateControls();
}

function populateRegistrySelector(snapshot) {
  const options = snapshot.registry.entries.map((entry) => {
    const option = createElement("option", "", modelSelectionLabel(entry));
    option.value = modelSelectionKey(entry);
    return option;
  });
  elements["model-selector"].replaceChildren(...options);
}

function selectRegisteredOption(selection) {
  const local = elements["model-selector"].querySelector(`option[value="${LOCAL_MODEL_OPTION}"]`);
  if (local) local.remove();
  elements["model-selector"].value = modelSelectionKey(selection);
}

function selectLocalOption(manifest) {
  let option = elements["model-selector"].querySelector(`option[value="${LOCAL_MODEL_OPTION}"]`);
  if (!option) {
    option = createElement("option");
    option.value = LOCAL_MODEL_OPTION;
    elements["model-selector"].append(option);
  }
  option.textContent = `${manifest.model.name} - ${manifest.model.version} (local)`;
  elements["model-selector"].value = LOCAL_MODEL_OPTION;
}

function configureFacet(filterId, entries, allLabel, label) {
  populateSelect(elements[filterId], entries, allLabel);
  const prefix = filterId.replace("-filter", "");
  elements[`${prefix}-filter-label`].textContent = label;
  elements[`${prefix}-filter-control`].hidden = entries.length === 0;
}

function downloadRecord(value, filename) {
  const url = URL.createObjectURL(new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: "application/json" }));
  const anchor = createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderSourceReadiness(pack) {
  const review = pack.files["model/dictionaries.json"]?.sourceReadiness;
  const panel = elements["source-readiness-panel"];
  panel.hidden = !review;
  elements["source-readiness-records"].replaceChildren();
  elements["source-readiness-summary"].textContent = review
    ? `${review.nodeRoles.length} records with explicit representation roles. Roles describe what a record denotes; they do not establish a physical instance.` : "";
  elements["source-readiness-download"].onclick = review
    ? () => downloadRecord(review, "representation-roles.json") : null;
}

function studyDesignLabel(study) {
  return {
    "primary-observation": "Primary observational study",
    "primary-experiment": "Primary experimental study",
    "experimental-reanalysis": "Reanalysis of experimental data",
    "computational-analysis": "Computational analysis"
  }[study.studyType];
}

function renderSourceReview(pack, key, prefix) {
  const dictionaries = pack.files["model/dictionaries.json"];
  const review = dictionaries?.[key];
  const panel = elements[`${prefix}-panel`];
  panel.hidden = !review;
  elements[`${prefix}-records`].replaceChildren();
  elements[`${prefix}-summary`].textContent = "";
  elements[`${prefix}-download`].onclick = null;
  if (!review) return;
  const coverage = Array.isArray(review.scopes)
    ? `${review.scopes.length} reviewed topics and ${review.studies.length} additional study contexts. Existing evidence retains its original study records.`
    : `${review.studies.length} study contexts.`;
  elements[`${prefix}-summary`].textContent = `${coverage} Measurements, interventions and interpretations retain their stated scope. Independent scientific review remains open.`;
  const sources = new Map(dictionaries.sources.map((source) => [source.id, source]));
  const appendSource = (section, id) => {
    const source = sources.get(id);
    if (!source) return;
    const line = createElement("p", "", `${source.title}. `);
    for (const link of citationLinks({ source }, new URL("../../", import.meta.url))) {
      const anchor = createElement("a", "evidence-link", link.label);
      anchor.href = link.href;
      anchor.rel = "noopener noreferrer";
      line.append(anchor, document.createTextNode(" "));
    }
    section.append(line);
    const reviewText = [source.review?.extent, source.review?.limit]
      .filter((value) => typeof value === "string" && value.length > 0).join(". ");
    if (reviewText) section.append(createElement("p", "", `Source review: ${reviewText}`));
  };
  const sections = review.studies.map((study) => {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", sources.get(study.sourceId)?.title ?? study.id));
    const studyDesign = studyDesignLabel(study);
    for (const [label, value] of [["Study design", studyDesign], ["System", study.system ?? study.organism], ["Preparation", study.preparation], ["Observable", study.observable], ["Finding", study.finding]]) {
      if (value) section.append(createElement("p", "", `${label}: ${value}`));
    }
    if (study.readExtent) section.append(createElement("p", "", `Reviewed: ${study.readExtent}. ${(study.reviewedLocators ?? []).join("; ")}`));
    const sourceReviewLimit = sources.get(study.sourceId)?.review?.limit;
    for (const limit of study.limitations) {
      if (!sourceReviewLimit || limit !== sourceReviewLimit) section.append(createElement("p", "", limit));
    }
    if (study.correctionCheck) section.append(createElement("p", "", `Publication check: ${study.correctionCheck}`));
    appendSource(section, study.sourceId);
    return section;
  });
  const scopeSections = (review.scopes ?? []).map((scope) => {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", scope.name));
    section.append(createElement("p", "", scope.scope));
    const inspect = createElement("button", "", "Inspect reviewed scope");
    inspect.type = "button";
    inspect.onclick = () => inspectNode(scope.id);
    section.append(inspect);
    for (const limit of scope.unresolved) section.append(createElement("p", "", `Open question: ${limit}`));
    return section;
  });
  sections.unshift(...scopeSections);
  for (const comparison of review.comparisons ?? []) {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", `Interpretation: ${comparison.id}`));
    section.append(createElement("p", "", comparison.candidate));
    section.append(createElement("p", "", `Alternative: ${comparison.alternative}`));
    section.append(createElement("p", "", `Discriminating evidence: ${comparison.discriminator}`));
    section.append(createElement("p", "", `${comparison.result}. ${comparison.limit}`));
    for (const assumption of comparison.assumptions ?? []) section.append(createElement("p", "", `Assumption: ${assumption}`));
    for (const id of comparison.sourceIds) appendSource(section, id);
    sections.push(section);
  }
  elements[`${prefix}-records`].replaceChildren(...sections);
  elements[`${prefix}-download`].onclick = () => downloadRecord(review, `${key}-evidence.json`);
}


function configureReviewPanels(pack, browse) {
  const presentation = state.presentation;
  const dictionaries = pack.files["model/dictionaries.json"] ?? {};
  const reviews = [
    ["sourceReadiness", "source-readiness", renderSourceReadiness],
    ...[["optics", "optical-review"], ["visual", "visual-review"],
      ["neural", "neural-review"], ["physics", "physics-review"], ["biochemistry", "biochemistry-review"], ["cellular", "cellular-review"],
      ["organismal", "organismal-review"], ["neuralSystems", "neural-systems-review"], ["socialSystems", "social-systems-review"]]
      .map(([key, prefix]) => [key, prefix, (value) => renderSourceReview(value, key, prefix)])
  ];
  for (const [key, prefix, renderReview] of reviews) {
    const panel = elements[`${prefix}-panel`];
    const records = elements[`${prefix}-records`];
    const summary = elements[`${prefix}-summary`];
    const download = elements[`${prefix}-download`];
    panel.ontoggle = null;
    panel.open = false;
    panel.hidden = browse ? !browse.reviews[key] : !dictionaries[key];
    panel.dataset.state = "idle";
    records.replaceChildren();
    summary.textContent = "Open to review the evidence and its scope.";
    if (download) { download.onclick = null; download.disabled = true; }
    let loading = false;
    const canRender = () => {
      if (state.presentation !== presentation) return false;
      if (panel.open) return true;
      panel.dataset.state = "idle";
      summary.textContent = "Open to review the evidence and its scope.";
      return false;
    };
    const load = async () => {
      if (!panel.open || loading || panel.dataset.state === "ready") return;
      loading = true;
      panel.dataset.state = "loading";
      summary.textContent = "Loading review...";
      try {
        const subset = browse ? await browse.review(key) : dictionaries;
        if (!canRender()) return;
        renderReview({ files: { "model/dictionaries.json": subset } });
        panel.dataset.state = "ready";
        if (download) download.disabled = false;
      } catch (error) {
        if (!canRender()) return;
        panel.dataset.state = "error";
        summary.textContent = `Could not verify this review: ${error.message}`;
        const retry = createElement("button", "", "Retry review");
        retry.type = "button";
        retry.addEventListener("click", () => { records.replaceChildren(); load(); }, { once: true });
        records.replaceChildren(retry);
      } finally {
        loading = false;
      }
    };
    panel.ontoggle = load;
  }
}

function activateModelPack(pack, options = {}) {
  const presentationOptions = options.resolution
    ? { resolution: options.resolution, defaultCatalogPageSize: CATALOG_PAGE_SIZE }
    : { defaultCatalogPageSize: CATALOG_PAGE_SIZE };
  const presentation = options.browse?.presentation ?? createVerifiedModelPresentation(pack, presentationOptions);
  const manifest = pack.manifest;
  const descriptor = presentation.descriptor;
  const localRdf = options.modelSource === "local-rdf";
  const metadata = presentationMetadata(pack, { localRdf });
  const interactionGraphInput = options.browse?.graphInput ?? {
    identity: descriptor.identity, nodes: pack.files["model/nodes.json"], edges: pack.files["model/edges.json"]
  };
  const interactionViews = interactionViewCatalog(options.browse?.interactionViews
    ?? pack.files["model/dictionaries.json"]?.interactions, interactionGraphInput);
  const previousPresentation = state.presentation;
  const previousBrowse = state.browse;
  // Causes between arisings, indexed for the inspector; the browse projection carries their typing.
  const causalEdges = (options.browse?.graphInput?.edges ?? pack.files?.["model/edges.json"] ?? []).filter((edge) => edge.relationLayer === "causal");
  const byChild = new Map(); const byParent = new Map();
  for (const edge of causalEdges) {
    if (!byChild.has(edge.target)) byChild.set(edge.target, []);
    if (!byParent.has(edge.source)) byParent.set(edge.source, []);
    byChild.get(edge.target).push(edge); byParent.get(edge.source).push(edge);
  }
  state.causes = { byChild, byParent };
  state.nodeNames = new Map((options.browse?.graphInput?.nodes ?? pack.files?.["model/nodes.json"] ?? [])
    .map((node) => [node.id, node.name]));
  state.domainFilter = null;
  state.arisingTableFor = null;
  state.pack = pack;
  state.manifest = manifest;
  state.presentation = presentation;
  state.browse = options.browse ?? null;
  state.presentationMetadata = metadata;
  state.interactionGraphInput = interactionViews ? interactionGraphInput : null;
  state.interactionViews = interactionViews;
  state.interactionPerspectiveId = "";
  state.interactionCaseId = "";
  document.body.dataset.interactionViews = String(Boolean(interactionViews));
  elements["interaction-view-controls"].hidden = !interactionViews;
  for (const [id, records, empty] of [
    ["interaction-perspective", interactionViews?.perspectives ?? [], "All records"],
    ["interaction-case", interactionViews?.cases ?? [], "All cases"]
  ]) {
    const first = createElement("option", "", empty);
    first.value = "";
    elements[id].replaceChildren(first, ...records.map((record) => {
      const option = createElement("option", "", record.label ?? record.title);
      option.value = record.id;
      return option;
    }));
  }
  state.selection = options.resolution === undefined
    ? null
    : Object.freeze({ modelId: options.resolution.modelId, version: options.resolution.version });
  state.modelSource = options.modelSource ?? "registry";
  state.catalog = { key: null, items: [], total: 0, matching: 0, nextOffset: null };
  elements["catalog-search"].value = "";
  for (const id of ["level-filter", "role-filter", "phase-filter", "status-filter"]) {
    elements[id].value = "";
  }
  elements["catalog-sort"].value = "id:asc";
  const requested = options.useLocation === true
    ? requestedGraphState(presentation, state.selection, metadata)
    : { focusId: defaultFocusId(presentation, metadata), depth: 1, direction: "both" };
  state.focusId = requested.focusId;
  state.selectedId = requested.focusId;
  state.depth = requested.depth;
  state.direction = requested.direction;
  if (interactionViews && options.useLocation === true) restoreInteractionLocationState(requested.focusId);
  elements["window-model-id"].textContent = manifest.model.id;
  elements["model-name"].textContent = manifest.model.name;
  elements["model-version"].textContent = manifest.model.version;
  elements["node-count"].textContent = String(descriptor.statistics.nodeCount);
  elements["edge-count"].textContent = String(descriptor.statistics.edgeCount);
  elements["root-hash"].textContent = shortenedHash(manifest.rootHash);
  elements["root-hash"].title = manifest.rootHash;
  elements["records-title-label"].textContent = metadata.labels.catalogTitle;
  elements["catalog-search"].placeholder = metadata.labels.searchPlaceholder;
  elements["parents-title-label"].textContent = metadata.labels.parents;
  elements["children-title-label"].textContent = metadata.labels.children;
  elements["model-boundary-title"].textContent = metadata.boundary.title;
  elements["model-boundary-summary"].textContent = metadata.boundary.summary;
  elements["model-boundary-note"].textContent = metadata.boundary.note;
  configureReviewPanels(pack, state.browse);
  configureFacet("layer-filter", descriptor.facets.layers ?? [], "All layers", metadata.labels.layerFilter);
  // A release may open on one layer (an ontology of arisings opens on its arisings); other records stay one filter away.
  elements["layer-filter"].value = defaultLayerValue(presentation, metadata);
  configureFacet("level-filter", descriptor.facets.levels, "All levels", metadata.labels.levelFilter);
  configureFacet("role-filter", descriptor.facets.typeRoles, "All types", metadata.labels.typeFilter);
  configureFacet("phase-filter", descriptor.facets.phases, "All phases", metadata.labels.phaseFilter);
  configureFacet("status-filter", descriptor.facets.scientificStatuses, "All statuses", metadata.labels.statusFilter);
  if (state.selection === null) selectLocalOption(manifest);
  else selectRegisteredOption(state.selection);
  render();
  if (previousBrowse) previousBrowse.close();
  else previousPresentation?.close();
  replaceLocationState();
  document.body.dataset.presentation = state.browse ? "incremental" : "lazy";
  document.body.dataset.modelSource = options.modelSource ?? "registry";
  document.body.dataset.state = "ready";
  elements["load-state"].textContent = options.loadMessage ?? "Model verified";
  elements["rdf-import-open"].disabled = false;
  elements["model-selector"].disabled = false;
  if (!eventsBound) {
    bindEvents();
    eventsBound = true;
  }
}

function selectedFile(id, label) {
  const file = elements[id].files?.[0];
  if (!file) throw new Error(`${label} is required.`);
  return file;
}

function assertFileSize(file, maximum, label) {
  if (file.size > maximum) {
    throw new Error(`${label} exceeds the ${maximum}-byte local import limit.`);
  }
}

function setImportStatus(message, tone = "progress") {
  elements["rdf-import-status"].textContent = message;
  elements["rdf-import-status"].dataset.tone = tone;
}

function importErrorText(error) {
  const message = error instanceof Error ? error.message : String(error);
  return typeof error?.code === "string" ? `${error.code}: ${message}` : message;
}

async function importRdfMapping() {
  const dataFile = selectedFile("rdf-data-file", "Data graph");
  const shapesFile = selectedFile("rdf-shapes-file", "SHACL shapes");
  const policyFile = selectedFile("rdf-policy-file", "Mapping policy");
  assertFileSize(dataFile, RDF_IMPORT_LIMITS.maxBytes, "Data graph");
  assertFileSize(shapesFile, RDF_IMPORT_LIMITS.maxBytes, "SHACL shapes");
  assertFileSize(policyFile, MAX_POLICY_BYTES, "Mapping policy");
  setImportStatus("Reading the exact local input set...");
  const [dataBytes, shapesBytes, policyText] = await Promise.all([
    dataFile.arrayBuffer(),
    shapesFile.arrayBuffer(),
    policyFile.text()
  ]);
  let policyJson;
  try {
    policyJson = JSON.parse(policyText);
  } catch {
    throw new Error("Mapping policy is not valid JSON.");
  }
  const policy = verifyRdfMappingPolicy(policyJson);
  setImportStatus("Importing N-Triples and validating SHACL...");
  const data = importNTriples(dataBytes, { sourceId: policy.inputs.dataSourceId });
  const shapes = importNTriples(shapesBytes, { sourceId: policy.inputs.shapesSourceId });
  const report = validateShacl(data, shapes);
  if (!report.conforms) {
    throw new Error(`SHACL validation rejected the data with ${report.statistics.violationCount} violation(s).`);
  }
  setImportStatus("Verifying the mapping and constructing a Model Pack...");
  const pack = buildRdfMappedModelPack(data, shapes, report, policy, {
    id: policy.id,
    name: policy.provenance.title,
    version: `rdf-${policy.policyHash.slice(7, 19)}`,
    description: policy.provenance.adaptation,
    status: "local-import"
  });
  modelLoadSequence += 1;
  pendingModelLoad?.abort();
  pendingModelLoad = null;
  activateModelPack(pack, {
    modelSource: "local-rdf",
    loadMessage: "Local RDF model verified"
  });
  document.body.dataset.registry = "local-import";
  elements["rdf-import-form"].reset();
  elements["rdf-import-dialog"].close();
  setImportStatus("");
}

/** The layer filter value a release opens on, when its catalog has that layer. */
function defaultLayerValue(presentation = state.presentation, metadata = state.presentationMetadata) {
  const layer = metadata?.defaults.layer;
  return layer && (presentation?.descriptor.facets.layers ?? []).some((entry) => entry.value === layer) ? JSON.stringify(layer) : "";
}

function defaultFocusId(presentation = state.presentation, metadata = state.presentationMetadata) {
  const declared = metadata?.defaults.focusId;
  if (declared && presentation?.has(declared)) return declared;
  const first = presentation?.catalog({ offset: 0, limit: 1 }).items[0];
  if (!first) throw new Error("The verified Model Pack does not contain a graph node.");
  return first.id;
}

function requestedGraphState(presentation = state.presentation, selection = state.selection, metadata = state.presentationMetadata) {
  const parameters = new URLSearchParams(location.hash.slice(1));
  const identity = selection ?? {
    modelId: state.manifest.model.id,
    version: state.manifest.model.version
  };
  return requestedWorkspaceState(
    parameters,
    identity,
    (id) => presentation.has(id),
    defaultFocusId(presentation, metadata)
  );
}

function replaceLocationState() {
  const identity = state.selection ?? {
    modelId: state.manifest.model.id,
    version: state.manifest.model.version
  };
  const parameters = new URLSearchParams({
    model: identity.modelId,
    version: identity.version,
    node: state.focusId,
    depth: String(state.depth),
    direction: state.direction
  });
  if (state.interactionPerspectiveId) parameters.set("view", state.interactionPerspectiveId);
  if (state.interactionCaseId) parameters.set("case", state.interactionCaseId);
  const nextHash = parameters.toString();
  if (location.hash.slice(1) !== nextHash) history.replaceState(null, "", `#${nextHash}`);
}

function restoreInteractionLocationState(focusId) {
  const parameters = new URLSearchParams(location.hash.slice(1));
  const identity = state.selection ?? { modelId: state.manifest.model.id, version: state.manifest.model.version };
  const bound = parameters.get("model") === identity.modelId && parameters.get("version") === identity.version;
  const perspective = bound && state.interactionViews?.perspectives.find((record) => record.id === parameters.get("view"));
  const selectedCase = bound && state.interactionViews?.cases.find((record) => record.id === parameters.get("case")
    && record.entityIds.includes(focusId));
  state.interactionPerspectiveId = perspective?.id ?? "";
  state.interactionCaseId = selectedCase?.id ?? "";
  elements["interaction-perspective"].value = state.interactionPerspectiveId;
  elements["interaction-case"].value = state.interactionCaseId;
}

async function restoreLocationState() {
  if (state.registrySnapshot === null) return;
  const parameters = new URLSearchParams(location.hash.slice(1));
  const requestedEntry = requestedRegistryEntry(
    state.registrySnapshot.registry.entries,
    parameters,
    DEFAULT_MODEL_SELECTION
  );
  if (
    state.selection === null
    || modelSelectionKey(requestedEntry) !== modelSelectionKey(state.selection)
  ) {
    await openRegisteredModel(requestedEntry, { useLocation: true });
    return;
  }
  // Returning to the displayed release supersedes an in-flight model switch.
  if (pendingModelLoad !== null) {
    modelLoadSequence += 1;
    pendingModelLoad.abort();
    pendingModelLoad = null;
    elements["model-selector"].disabled = false;
    selectRegisteredOption(state.selection);
    elements["load-state"].textContent = state.browse
      ? "Graph verified / details on demand" : "Model verified";
  }
  const requested = requestedGraphState();
  if (state.interactionViews) restoreInteractionLocationState(requested.focusId);
  state.depth = requested.depth;
  state.direction = requested.direction;
  focusNode(requested.focusId, false);
}

function bindEvents() {
  window.addEventListener("resize", () => {
    if (state.presentation && state.interactionCaseId) renderGraph();
  });
  for (const id of ["interaction-perspective", "interaction-case"]) {
    elements[id].addEventListener("change", () => {
      state.interactionPerspectiveId = elements["interaction-perspective"].value;
      state.interactionCaseId = elements["interaction-case"].value;
      const selectedCase = state.interactionViews?.cases.find((record) => record.id === state.interactionCaseId);
      if (selectedCase) {
        const selection = selectInteractionGraph(state.interactionGraphInput, state.interactionViews, {
          perspectiveId: state.interactionPerspectiveId, caseId: state.interactionCaseId
        });
        focusNode(selection.memberNodeIds.includes(selectedCase.anchorEntityId)
          ? selectedCase.anchorEntityId : selection.memberNodeIds[0] ?? selectedCase.anchorEntityId);
      } else if (state.interactionPerspectiveId) {
        const selection = selectInteractionGraph(state.interactionGraphInput, state.interactionViews, {
          perspectiveId: state.interactionPerspectiveId
        });
        if (selection.memberNodeIds.length && !selection.memberNodeIds.includes(state.focusId)) {
          focusNode(selection.memberNodeIds[0]);
        } else renderGraph();
      } else renderGraph();
      replaceLocationState();
    });
  }
  for (const id of ["catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter", "status-filter", "catalog-sort"]) {
    const eventName = id === "catalog-search" ? "input" : "change";
    elements[id].addEventListener(eventName, () => renderCatalog({ reset: true }));
  }
  elements["catalog-more"].addEventListener("click", () => renderCatalog({ loadMore: true }));
  elements["direction-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-direction]");
    if (!button) return;
    state.direction = button.dataset.direction;
    renderGraph();
    updateControls();
    replaceLocationState();
  });
  elements["depth-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-depth]");
    if (!button) return;
    state.depth = Number(button.dataset.depth);
    renderGraph();
    updateControls();
    replaceLocationState();
  });
  elements["reset-view"].addEventListener("click", () => {
    elements["catalog-search"].value = "";
    for (const id of ["level-filter", "role-filter", "phase-filter", "status-filter"]) elements[id].value = "";
    elements["layer-filter"].value = defaultLayerValue();
    state.domainFilter = null;
    elements["catalog-sort"].value = "id:asc";
    state.direction = "both";
    state.depth = 1;
    state.catalog.key = null;
    state.interactionPerspectiveId = "";
    state.interactionCaseId = "";
    elements["interaction-perspective"].value = "";
    elements["interaction-case"].value = "";
    focusNode(defaultFocusId());
  });
  elements["rdf-import-open"].addEventListener("click", () => {
    setImportStatus("");
    elements["rdf-import-dialog"].showModal();
    elements["rdf-data-file"].focus();
  });
  const closeImportDialog = () => elements["rdf-import-dialog"].close();
  elements["rdf-import-close"].addEventListener("click", closeImportDialog);
  elements["rdf-import-cancel"].addEventListener("click", closeImportDialog);
  elements["rdf-import-form"].addEventListener("submit", async (event) => {
    event.preventDefault();
    elements["rdf-import-submit"].disabled = true;
    try {
      await importRdfMapping();
    } catch (error) {
      setImportStatus(importErrorText(error), "error");
    } finally {
      elements["rdf-import-submit"].disabled = false;
    }
  });
  elements["model-selector"].addEventListener("change", async () => {
    const previousKey = state.selection === null ? LOCAL_MODEL_OPTION : modelSelectionKey(state.selection);
    const selection = registryEntryForKey(
      state.registrySnapshot.registry.entries,
      elements["model-selector"].value
    );
    if (selection === null) {
      elements["model-selector"].value = previousKey;
      return;
    }
    try {
      await openRegisteredModel(selection);
    } catch (error) {
      elements["model-selector"].value = previousKey;
      displaySwitchError(error);
    }
  });
}

function displayError(error) {
  document.body.dataset.state = "error";
  elements["load-state"].textContent = "Model load failed";
  elements["graph-title"].textContent = "Could not load the model";
  elements["graph-message"].hidden = false;
  elements["graph-message"].textContent = error instanceof Error ? error.message : String(error);
  console.error(error);
}

function displaySwitchError(error) {
  if (state.presentation === null) {
    displayError(error);
    return;
  }
  document.body.dataset.state = "ready";
  elements["load-state"].textContent = "Model switch failed";
  elements["graph-message"].hidden = false;
  elements["graph-message"].textContent = error instanceof Error ? error.message : String(error);
  elements["model-selector"].disabled = false;
  console.error(error);
}

function isWorkerOperationalFailure(error) {
  return typeof error?.code === "string" && error.code.startsWith("MODEL_PACK_WORKER_");
}

function isCacheStorageFailure(error) {
  return typeof error?.code === "string" && (
    error.code.startsWith("MODEL_PACK_CACHE_STORAGE_")
    || error.code.startsWith("MODEL_PACK_CACHE_INDEXEDDB_")
  );
}

async function loadThroughVerifiedCache(resolution, loader, verifyBundle = loadModelPackBundle, reportCache = () => {}) {
  const identity = Object.freeze({
    rootHash: resolution.rootHash,
    manifestHash: resolution.manifestHash
  });
  const loadBoundPack = async () => matchModelPackRegistryResolution(
    await loader(),
    resolution
  );
  const verifyBoundBundle = async (source) => matchModelPackRegistryResolution(
    await verifyBundle(source),
    resolution
  );
  let cache;
  try {
    const storage = createIndexedDbModelPackCacheStorage({
      databaseName: MODEL_CACHE_OPTIONS.databaseName
    });
    cache = createVerifiedModelPackCache(storage, {
      verifyBundle: verifyBoundBundle,
      maxEntries: MODEL_CACHE_OPTIONS.maxEntries,
      maxTotalBytes: MODEL_CACHE_OPTIONS.maxTotalBytes,
      ownsStorage: true
    });
  } catch (error) {
    if (!isCacheStorageFailure(error)) throw error;
    reportCache("unavailable");
    return loadBoundPack();
  }

  try {
    const result = await cache.load(identity, loadBoundPack);
    reportCache(result.source === "cache"
      ? "hit"
      : result.cacheState === "invalid" ? "recovered" : "miss");
    return result.pack;
  } catch (error) {
    if (!isCacheStorageFailure(error)) throw error;
    reportCache("unavailable");
    return loadBoundPack();
  } finally {
    await cache.close();
  }
}

async function loadVerifiedModelPack(resolution, { signal } = {}) {
  let cache = "unavailable";
  const loadCached = (loader, verifyBundle) => loadThroughVerifiedCache(
    resolution, loader, verifyBundle, (value) => { cache = value; }
  );
  const fallback = async () => {
    signal?.throwIfAborted();
    const pack = await loadCached(() => loadModelPackHttpDirectory(resolution.baseUrl, { signal }));
    signal?.throwIfAborted();
    return { pack, cache, verifier: "main-thread-fallback" };
  };
  if (typeof Worker !== "function") {
    return fallback();
  }

  let worker = null;
  let client = null;
  try {
    worker = new Worker(MODEL_PACK_WORKER_URL, {
      type: "module",
      name: "onto2d-model-pack-verifier"
    });
    client = createModelPackWorkerClient(worker, {
      clientId: "model-studio",
      ownsWorker: true,
      requestTimeoutMs: 60_000
    });
    const pack = await loadCached(
      () => client.loadHttpDirectory(resolution.baseUrl, { signal }),
      (source) => client.loadBundle(source, { transfer: "move", signal })
    );
    signal?.throwIfAborted();
    return { pack, cache, verifier: "worker" };
  } catch (error) {
    signal?.throwIfAborted();
    if (client !== null && !isWorkerOperationalFailure(error)) throw error;
    return fallback();
  } finally {
    if (client !== null) {
      client.close();
    } else if (worker !== null) {
      worker.terminate();
    }
  }
}

async function openRegisteredModel(selection, { useLocation = false } = {}) {
  if (state.registrySnapshot === null) {
    throw new Error("The verified Model Pack registry is not loaded.");
  }
  const sequence = ++modelLoadSequence;
  pendingModelLoad?.abort();
  const controller = new AbortController();
  pendingModelLoad = controller;
  elements["model-selector"].disabled = true;
  elements["load-state"].textContent = "Verifying selected model";
  if (state.presentation === null) document.body.dataset.state = "loading";
  const resolution = resolveModelPackRegistry(
    state.registrySnapshot.registry,
    state.registrySnapshot.registryUrl,
    { modelId: selection.modelId, version: selection.version },
    { expectedRegistryHash: EXPECTED_REGISTRY_HASH }
  );
  let browse;
  let pack;
  let verification;
  try {
    browse = await loadBrowseModel(resolution, { signal: controller.signal });
    if (sequence !== modelLoadSequence) { browse?.close(); return false; }
    if (browse) {
      pack = { manifest: browse.manifest, files: { "model/dictionaries.json": browse.dictionaries } };
      verification = { verifier: "projection-sha256", cache: "http" };
    } else {
      verification = await loadVerifiedModelPack(resolution, { signal: controller.signal });
      pack = verification.pack;
    }
  } catch (error) {
    if (sequence !== modelLoadSequence) { browse?.close(); return false; }
    throw error;
  } finally {
    if (pendingModelLoad === controller) pendingModelLoad = null;
  }
  if (sequence !== modelLoadSequence) { browse?.close(); return false; }
  document.body.dataset.verifier = verification.verifier;
  document.body.dataset.cache = verification.cache;
  document.body.dataset.registry = resolution.registryTrust;
  activateModelPack(pack, {
    resolution,
    browse,
    useLocation,
    modelSource: "registry",
    loadMessage: browse ? "Graph verified / details on demand" : document.body.dataset.cache === "hit"
      ? "Cached model verified"
      : "Model verified"
  });
  return true;
}

async function start() {
  window.addEventListener("hashchange", () => {
    restoreLocationState().catch(displaySwitchError);
  });
  const snapshot = await loadModelPackRegistryHttp(
    MODEL_REGISTRY_URL,
    { expectedRegistryHash: EXPECTED_REGISTRY_HASH }
  );
  state.registrySnapshot = snapshot;
  document.body.dataset.registry = snapshot.registryTrust;
  populateRegistrySelector(snapshot);
  const selection = requestedRegistryEntry(
    snapshot.registry.entries,
    new URLSearchParams(location.hash.slice(1)),
    DEFAULT_MODEL_SELECTION
  );
  await openRegisteredModel(selection, { useLocation: true });
}

start().catch(displayError);
