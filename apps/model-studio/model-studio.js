import {
  loadModelPackBundle,
  loadModelPackHttpDirectory
} from "../../packages/model-pack/src/browser.js?v=20261107.2";
import {
  createIndexedDbModelPackCacheStorage,
  createVerifiedModelPackCache
} from "../../packages/model-pack/src/cache.js?v=20261107.2";
import {
  loadModelPackRegistryHttp,
  matchModelPackRegistryResolution,
  resolveModelPackRegistry
} from "../../packages/model-pack/src/registry.js?v=20261107.2";
import { createModelPackWorkerClient } from "../../packages/model-pack/src/worker.js?v=20261107.2";
import { RDF_IMPORT_LIMITS, importNTriples } from "../../packages/rdf-import/src/index.js?v=20261107.2";
import {
  buildRdfMappedModelPack,
  verifyRdfMappingPolicy
} from "../../packages/rdf-mapping/src/index.js?v=20261107.2";
import { validateShacl } from "../../packages/shacl-validation/src/index.js?v=20261107.2";
import { createVerifiedModelPresentation } from "../../packages/engine/src/presentation.js?v=20261107.2";
import { wrapGraphNodeLabel } from "../../packages/view/src/index.js?v=20261107.2";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { graphHighlight } from "./graph-interactions.js?v=20261107.2";
import { layoutLayeredGraph, longestPathLayers, neighbourhoodLayers } from "./graph-layout.js?v=20261107.2";
import { createGraphViewport } from "./graph-viewport.js?v=20261107.2";
import { interactionViewCatalog, selectInteractionGraph, interactionCaseOverview, layoutIsolatedCaseCards } from "./interaction-views.js?v=20261107.2";
import { citationLinks, resolveClaimCitations } from "./evidence-links.js?v=20261107.2";
import { recordEvidenceContext, resolveRecordEvidence } from "./record-evidence.js?v=20261107.2";
import { loadBrowseModel } from "./browse-data.js?v=20261107.2";
import {
  modelSelectionKey,
  modelSelectionLabel,
  registryEntryForKey,
  requestedRegistryEntry,
  requestedWorkspaceState
} from "./model-selection.js?v=20261107.2";

const MODEL_REGISTRY_URL = new URL("../../models/registry.json", import.meta.url);
const DEFAULT_MODEL_SELECTION = Object.freeze({ modelId: "causal-emergence", version: "2026.11.05.0" });
const MODEL_PACK_WORKER_URL = new URL(
  "../../assets/js/model-pack-worker.js?v=20261107.2",
  import.meta.url
);
const EXPECTED_REGISTRY_HASH = "sha256:0043116fedbcfb0ae3b50902b61686629904157ee3d9fa0557aa1dfe5be18298";
const MODEL_CACHE_OPTIONS = Object.freeze({
  databaseName: "onto2d-model-studio-cache-v1",
  maxEntries: 4,
  maxTotalBytes: 128 * 1024 * 1024
});
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const ICONS = "../../assets/icons/ui-symbols.svg";
const GRAPH_LIMITS = Object.freeze({ maxNodes: 72, maxEdges: 260 });
const GRAPH_NODE = Object.freeze({ width: 200, height: 64, focusWidth: 240, focusHeight: 82, radius: 9, lineHeight: 16 });
const SUBGRAPH_NODE = Object.freeze({ width: 200, height: 62 });
const CATALOG_PAGE_SIZE = 60;
const MAX_POLICY_BYTES = 512 * 1024;
const LOCAL_MODEL_OPTION = "local-rdf";
const ONTOLOGY_MODES = Object.freeze(["table", "causes", "subgraph", "records"]);
const CAUSE_ROLES = Object.freeze(["arising", "maintenance", "modulation"]);
const PRESENTATION_FIELDS = new Set([
  "id", "name", "level", "phase", "typeRole", "scientificStatus", "layer", "arisingId", "cluster", "domain",
  "shortDescription", "parentCount", "childCount", "incomingEdgeCount",
  "outgoingEdgeCount", "degree"
]);

// The arising-model vocabulary: the counterfactual meaning of each cause role and status.
const ROLE_TEXT = Object.freeze({
  arising: Object.freeze({ label: "Arising", meaning: "The dependent does not first form without this cause." }),
  maintenance: Object.freeze({ label: "Maintenance", meaning: "Once formed, the dependent does not persist without this cause." }),
  modulation: Object.freeze({ label: "Modulation", meaning: "This cause changes the dependent's operating regime; it is required for neither its formation nor its persistence." })
});
const RELATION_STATUS_TEXT = Object.freeze({
  supported: Object.freeze({ label: "Supported", meaning: "Cites published evidence that the cause conditions the dependent in the stated role." }),
  "model-supported": Object.freeze({ label: "Model-supported", meaning: "Cites a specified model that derives the dependency." }),
  "author-hypothesis": Object.freeze({ label: "Author hypothesis", meaning: "The catalogue's proposal; it carries an explicit obligation until evidence is added." })
});
const NECESSITY_ORDER = Object.freeze({ necessary: 0, enabling: 1, contextual: 2, optional: 3 });
const COVERAGE_TEXT = Object.freeze({
  "published-findings": "Published findings",
  "formal-or-computational": "Formal or computational records",
  "author-definitions": "Author definitions only",
  none: "No records yet"
});

const ids = [
  "model-selector", "model-name", "model-version", "node-count", "edge-count", "root-hash", "load-state",
  "catalog-count", "catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter",
  "status-filter", "catalog-sort", "catalog-list", "catalog-empty", "catalog-empty-hint", "graph-title",
  "catalog-more", "window-model-id", "rdf-import-open", "rdf-import-dialog", "rdf-import-form",
  "rdf-import-close", "rdf-import-cancel", "rdf-import-submit", "rdf-data-file",
  "rdf-shapes-file", "rdf-policy-file", "rdf-import-status",
  "reset-view", "direction-controls", "depth-controls", "neighborhood-graph", "graph-edges",
  "graph-nodes", "graph-message", "graph-counts", "selected-coordinate",
  "selected-name", "selected-tags", "selected-summary", "parents-total", "children-total", "parent-list", "child-list",
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
  "interaction-view-controls", "interaction-perspective", "interaction-case",
  "interaction-cases-panel", "interaction-cases-records",
  "view-tabs", "release-open", "release-dialog", "guide-open", "guide-dialog", "guide-content", "model-version-chip",
  "verification-state", "navigator-group", "filter-count", "ontology-tree", "graph-viewport",
  "graph-columns", "graph-legend", "zoom-controls", "graph-tooltip", "graph-subtitle", "graph-hint", "role-controls",
  "direction-parents-label", "direction-children-label", "record-inspector", "relation-inspector", "record-actions",
  "record-facts", "description-panel", "rationale-panel", "graph-minimap",
  "navigator-toggle", "inspector-toggle", "lineage-panel", "lineage-list", "lineage-summary", "subgraph-count"
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
  mode: "graph",
  focusId: null,
  recordFocusId: null,
  selectedId: null,
  selectedRelationId: null,
  domainFilter: null,
  nodeNames: new Map(),
  graphIndex: null,
  ontology: null,
  causes: null,
  roleFilter: new Set(CAUSE_ROLES),
  rolePresentations: new Map(),
  navigatorGroup: "domain",
  treeExpanded: new Set(),
  treeFor: null,
  arisingTableFor: null,
  tablePreviewId: null,
  showLineage: false,
  tableResize: null,
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
let activeGraphInfo = null;
let graphViewport = null;
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

function iconElement(name, className = "ui-icon") {
  const icon = svgElement("svg", { class: className, "aria-hidden": "true" });
  icon.append(svgElement("use", { href: `${ICONS}#${name}` }));
  return icon;
}

function scalarLabel(value, fallback = "not declared") {
  return value === null || value === undefined || value === "" ? fallback : String(value);
}

function boundedLabel(value, fallback, maximum = 240) {
  return typeof value === "string" && value.length > 0 && value.length <= maximum
    ? value
    : fallback;
}

/** "scoped-process" -> "Scoped process"; numbers and absent values stay explicit. */
function humanize(value, fallback = "Not declared") {
  if (value === null || value === undefined || value === "") return fallback;
  const text = String(value).replace(/[-_]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").trim();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function plural(count, singular, pluralForm = `${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
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
  const definition = (entry) => (typeof entry.definition === "string" && entry.definition.length <= 1200 ? entry.definition : null);
  const domains = named(value?.domains, 12).map((entry, index) => Object.freeze({
    value: entry.value, name: entry.name, definition: definition(entry), index
  }));
  const domainIds = new Set(domains.map((domain) => domain.value));
  const clusters = named(value?.clusters, 400).filter((entry) => domainIds.has(entry.domain))
    .map((entry, index) => Object.freeze({
      value: entry.value, name: entry.name, domain: entry.domain,
      level: Number.isInteger(entry.level) ? entry.level : null, index
    }));
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

/* ---------- Ontology helpers ---------- */

function isArising(node) {
  return Boolean(state.ontology && node && node.layer === state.ontology.layer);
}

function arisingCode(id) {
  return typeof id === "string" ? id.replace(/^arising:/, "") : String(id);
}

function codeKey(id) {
  return arisingCode(id).split(".").map((part) => Number(part) || 0);
}

function compareCodes(left, right) {
  const a = codeKey(left);
  const b = codeKey(right);
  return (a[0] - b[0]) || (a[1] - b[1]) || (left < right ? -1 : left > right ? 1 : 0);
}

function domainOf(node) {
  return state.presentationMetadata?.arisingTable?.domains.get(node?.domain) ?? null;
}

function clusterOf(node) {
  return state.presentationMetadata?.arisingTable?.clusters.get(node?.cluster) ?? null;
}

function levelName(level) {
  return state.presentationMetadata?.arisingTable?.levels.find((entry) => entry.value === level)?.name ?? null;
}

function phaseName(phase) {
  return state.presentationMetadata?.arisingTable?.phases.find((entry) => entry.value === phase)?.name ?? null;
}

function dependencyName(value) {
  return state.presentationMetadata?.arisingTable?.dependencyTypes.get(value) ?? (value === null || value === undefined ? null : `Dependency ${value}`);
}

function setDomain(element, node) {
  const domain = domainOf(node);
  if (domain) element.dataset.domainIndex = String(domain.index);
  else delete element.dataset.domainIndex;
}

/** Visual family of a technical record, read from its declared type role. */
function recordKind(typeRole) {
  const role = String(typeRole ?? "");
  if (/hypothes|assumption/.test(role)) return "hypothesis";
  if (/rule/.test(role)) return "rule";
  if (/context|protocol/.test(role)) return "context";
  if (/structure/.test(role)) return "structure";
  if (/definition|primitive|domain|carrier|quantity/.test(role)) return "definition";
  if (/process|transformation|effect/.test(role)) return "process";
  return "other";
}

function causeSort(left, right, endpoint) {
  return CAUSE_ROLES.indexOf(left.role) - CAUSE_ROLES.indexOf(right.role)
    || (NECESSITY_ORDER[left.necessity] ?? 9) - (NECESSITY_ORDER[right.necessity] ?? 9)
    || compareCodes(left[endpoint], right[endpoint]);
}

function nodeSummary(id) {
  return state.graphIndex?.nodesById.get(id) ?? null;
}

/**
 * A cause joins two arisings. Technical relations never join arisings, so in an
 * ontology the endpoints decide; other packs keep their declared causal layer.
 */
function isCauseEdge(edge) {
  if (!edge) return false;
  return state.ontology
    ? state.ontology.arisingIds.has(edge.source) && state.ontology.arisingIds.has(edge.target)
    : edge.relationLayer === "causal";
}

/** Indexes of the verified topology used by every view; built once per release. */
function buildGraphIndex(nodes, edges) {
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const edgesById = new Map(edges.map((edge) => [edge.id, edge]));
  const incoming = new Map();
  const outgoing = new Map();
  for (const edge of edges) {
    if (!incoming.has(edge.target)) incoming.set(edge.target, []);
    if (!outgoing.has(edge.source)) outgoing.set(edge.source, []);
    incoming.get(edge.target).push(edge);
    outgoing.get(edge.source).push(edge);
  }
  return { nodesById, edgesById, incoming, outgoing };
}

function buildOntologyIndex(nodes, edges, table, declaredRoot = null) {
  const arisings = nodes.filter((node) => node.layer === table.layer).sort((left, right) => compareCodes(left.id, right.id));
  const arisingIds = new Set(arisings.map((node) => node.id));
  const members = new Map();
  for (const node of nodes) {
    if (typeof node.arisingId !== "string" || !arisingIds.has(node.arisingId)) continue;
    if (!members.has(node.arisingId)) members.set(node.arisingId, []);
    members.get(node.arisingId).push(node.id);
  }
  const causes = edges.filter((edge) => arisingIds.has(edge.source) && arisingIds.has(edge.target));
  // A record without a layer is matched by the null facet value.
  const otherLayers = [...new Set(nodes.filter((node) => node.layer !== table.layer).map((node) => node.layer ?? null))];
  return { layer: table.layer, arisings, arisingIds, members, causes, otherLayers, ...arisingLineages(arisings, causes, declaredRoot) };
}

/**
 * The shortest chain of causes in the arising role from the root to every arising.
 * The root is the one the release declares, otherwise the first arising without a
 * cause inside the graph; ties keep catalogue order.
 */
function arisingLineages(arisings, causes, declaredRoot = null) {
  const caused = new Set(causes.map((edge) => edge.target));
  const root = (declaredRoot && arisings.some((node) => node.id === declaredRoot) ? declaredRoot : null)
    ?? arisings.find((node) => !caused.has(node.id))?.id ?? null;
  const predecessor = new Map();
  if (!root) return { root, predecessor };
  const outgoing = new Map();
  for (const edge of causes) {
    if (edge.role !== "arising") continue;
    if (!outgoing.has(edge.source)) outgoing.set(edge.source, []);
    outgoing.get(edge.source).push(edge);
  }
  for (const list of outgoing.values()) list.sort((left, right) => compareCodes(left.target, right.target));
  const queue = [root];
  const seen = new Set(queue);
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    for (const edge of outgoing.get(queue[cursor]) ?? []) {
      if (seen.has(edge.target)) continue;
      seen.add(edge.target);
      predecessor.set(edge.target, edge);
      queue.push(edge.target);
    }
  }
  return { root, predecessor };
}

/** The causes from the root to an arising, in order; empty for the root or an unreachable arising. */
function lineageOf(id) {
  const chain = [];
  const visited = new Set();
  for (let edge = state.ontology?.predecessor.get(id); edge && !visited.has(edge.id); edge = state.ontology.predecessor.get(edge.source)) {
    visited.add(edge.id);
    chain.unshift(edge);
  }
  return chain;
}

/* ---------- Catalogue and navigator ---------- */

function selectFacetValue(element) {
  if (element.value === "") return [];
  try {
    return [JSON.parse(element.value)];
  } catch {
    return [];
  }
}

function populateSelect(element, entries, allLabel, format = (value) => String(value)) {
  const first = createElement("option", "", allLabel);
  first.value = "";
  const options = entries.map(({ value, count }) => {
    const option = createElement("option", "", `${format(value)} (${count})`);
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

function activeFilterCount(query = currentCatalogQuery()) {
  return ["levels", "layers", "phases", "typeRoles", "scientificStatuses"].filter((key) => query[key].length > 0).length;
}

/** The ontology tree replaces the flat list while nothing is searched or filtered. */
function showsOntologyTree(query = currentCatalogQuery()) {
  return Boolean(state.ontology) && query.search.trim() === "" && activeFilterCount(query) === 0;
}

function catalogItem(node) {
  const button = createElement("button", "catalog-item");
  button.type = "button";
  button.setAttribute("role", "option");
  button.setAttribute("aria-selected", String(node.id === state.selectedId));
  button.dataset.nodeId = node.id;
  button.dataset.focus = String(node.id === state.focusId || node.id === state.recordFocusId);
  button.title = "Click to inspect; double-click to focus";
  let coordinate;
  let detail;
  if (isArising(node)) {
    coordinate = createElement("span", "catalog-coordinate", arisingCode(node.id));
    setDomain(button, node);
    detail = [levelName(node.level) ? `Level ${node.level} ${levelName(node.level)}` : null, phaseName(node.phase)].filter(Boolean).join(" \u00b7 ");
  } else if (state.ontology && typeof node.arisingId === "string") {
    const owner = nodeSummary(node.arisingId);
    coordinate = createElement("span", "catalog-coordinate", arisingCode(node.arisingId));
    setDomain(button, owner);
    detail = `${humanize(node.typeRole)} \u00b7 in ${owner?.name ?? node.arisingId}`;
  } else {
    coordinate = createElement("span", "catalog-coordinate", compactCoordinateText(node));
    coordinate.title = coordinateText(node);
    detail = `${humanize(node.typeRole, "Record")} \u00b7 ${plural(node.degree, "relation")}`;
  }
  const title = createElement("strong", "", node.name);
  const metadata = createElement("small", "", detail);
  button.append(coordinate, title, metadata);
  button.addEventListener("click", () => inspectNode(node.id));
  button.addEventListener("dblclick", () => focusNode(node.id));
  return button;
}

function catalogPage(query, offset, limit = CATALOG_PAGE_SIZE) {
  return state.presentation.catalog({ ...query, offset, limit });
}

function renderCatalog({ reset = false, loadMore = false } = {}) {
  const query = currentCatalogQuery();
  const filters = activeFilterCount(query);
  elements["filter-count"].hidden = filters === 0;
  elements["filter-count"].textContent = String(filters);
  const tree = showsOntologyTree(query);
  elements["ontology-tree"].hidden = !tree;
  elements["navigator-group"].hidden = !state.ontology || !tree;
  if (tree) {
    elements["catalog-list"].replaceChildren();
    elements["catalog-empty"].hidden = true;
    elements["catalog-more"].hidden = true;
    state.catalog.key = null;
    renderOntologyTree();
    elements["catalog-count"].textContent = plural(state.ontology.arisings.length, "arising");
    elements["catalog-count"].title = `${state.ontology.arisings.length} arisings in ${state.presentationMetadata.arisingTable.domains.size} domains`;
    return;
  }
  // While searching an ontology, arisings come first and technical records follow, each matching the same query.
  const split = Boolean(state.ontology) && query.layers.length === 0;
  const pagedQuery = split ? { ...query, layers: state.ontology.otherLayers } : query;
  const key = JSON.stringify(query);
  const shouldReset = reset || state.catalog.key !== key;
  if (shouldReset) {
    // An empty layer list would mean "no filter"; a release of arisings alone has no second group.
    const page = split && state.ontology.otherLayers.length === 0
      ? { items: [], total: state.presentation.descriptor.statistics.nodeCount, matching: 0, nextOffset: null }
      : catalogPage(pagedQuery, 0);
    const arisingPage = split
      ? state.presentation.catalog({ ...query, layers: [state.ontology.layer], offset: 0, limit: 500 })
      : null;
    state.catalog = {
      key,
      items: [...page.items],
      arisings: arisingPage ? [...arisingPage.items] : null,
      arisingMatching: arisingPage?.matching ?? 0,
      total: page.total,
      matching: page.matching,
      nextOffset: page.nextOffset
    };
  } else if (loadMore && state.catalog.nextOffset !== null) {
    const page = catalogPage(pagedQuery, state.catalog.nextOffset);
    state.catalog.items.push(...page.items);
    state.catalog.nextOffset = page.nextOffset;
    state.catalog.total = page.total;
    state.catalog.matching = page.matching;
  }
  const arisingItems = state.catalog.arisings ?? [];
  const totalMatching = state.catalog.matching + (state.catalog.arisingMatching ?? 0);
  elements["catalog-count"].textContent = split
    ? `${totalMatching} found`
    : `${state.catalog.items.length} / ${state.catalog.matching}`;
  elements["catalog-count"].title = `${totalMatching} matching of ${state.catalog.total} total nodes`;
  const children = [];
  if (split) {
    if (arisingItems.length) children.push(createElement("p", "catalog-group-title", `Arisings (${state.catalog.arisingMatching})`), ...arisingItems.map(catalogItem));
    if (state.catalog.arisingMatching > arisingItems.length) {
      children.push(createElement("p", "relation-empty", `${state.catalog.arisingMatching - arisingItems.length} more arisings match; narrow the search.`));
    }
    if (state.catalog.items.length) children.push(createElement("p", "catalog-group-title", `Technical records (${state.catalog.matching})`));
  }
  children.push(...state.catalog.items.map(catalogItem));
  elements["catalog-list"].replaceChildren(...children);
  elements["catalog-empty"].hidden = children.length > 0;
  elements["catalog-empty-hint"].textContent = query.layers.length
    ? `The ${state.presentationMetadata.labels.layerFilter} filter limits the search to the selected layer; clear it to search every record.`
    : "Clear a filter or shorten the search.";
  elements["catalog-more"].hidden = state.catalog.nextOffset === null;
  elements["catalog-more"].textContent = state.catalog.nextOffset === null
    ? "All matching records loaded"
    : `Load next ${Math.min(CATALOG_PAGE_SIZE, state.catalog.matching - state.catalog.items.length)}`;
}

function treeGroup(key, row, children, { className = "tree-group", label }) {
  const group = createElement("div", className);
  group.setAttribute("role", "treeitem");
  group.dataset.key = key;
  group.setAttribute("aria-expanded", String(state.treeExpanded.has(key)));
  if (label) group.setAttribute("aria-label", label);
  row.addEventListener("click", () => {
    const expanded = !state.treeExpanded.has(key);
    if (expanded) state.treeExpanded.add(key);
    else state.treeExpanded.delete(key);
    group.setAttribute("aria-expanded", String(expanded));
  });
  const list = createElement("div", "tree-children");
  list.setAttribute("role", "group");
  list.append(...children);
  group.append(row, list);
  return group;
}

function treeLeaf(node) {
  const leaf = createElement("button", "tree-row tree-leaf");
  leaf.type = "button";
  leaf.setAttribute("role", "treeitem");
  leaf.dataset.nodeId = node.id;
  setDomain(leaf, node);
  leaf.title = `${arisingCode(node.id)} ${node.name}: ${humanize(node.scientificStatus)}. Double-click to open its causes.`;
  const mark = createElement("i", "status-mark");
  mark.dataset.status = String(node.scientificStatus);
  leaf.append(createElement("code", "", arisingCode(node.id)), createElement("span", "", node.name), mark);
  leaf.addEventListener("click", () => inspectNode(node.id));
  leaf.addEventListener("dblclick", () => focusNode(node.id, true, { mode: "causes" }));
  leaf.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      focusNode(node.id, true, { mode: "causes" });
    }
  });
  return leaf;
}

/** Domains (or levels) contain clusters, and clusters contain arisings. */
function buildOntologyTree() {
  const table = state.presentationMetadata.arisingTable;
  const byCluster = new Map();
  for (const node of state.ontology.arisings) {
    const key = table.clusters.has(node.cluster) ? node.cluster : "";
    if (!byCluster.has(key)) byCluster.set(key, []);
    byCluster.get(key).push(node);
  }
  const clusterRow = (cluster, nodes, showLevel, scope = "") => {
    const row = createElement("button", "tree-row");
    row.type = "button";
    const count = createElement("span", "tree-count");
    if (showLevel && Number.isInteger(cluster?.level)) count.append(createElement("span", "tree-level-tag", `L${cluster.level} `));
    count.append(String(nodes.length));
    row.append(iconElement("chevron-down", "ui-icon tree-chevron"), createElement("span", "tree-label", cluster?.name ?? "Without a cluster"), count);
    row.title = cluster?.name ?? "Arisings without a declared cluster";
    return treeGroup(`cluster:${cluster?.value ?? `@${scope}`}`, row, nodes.map(treeLeaf), { className: "tree-group tree-cluster", label: cluster?.name });
  };
  const clustersSorted = [...table.clusters.values()].sort((left, right) => (left.level ?? 99) - (right.level ?? 99) || left.index - right.index);
  const groups = [];
  if (state.navigatorGroup === "level") {
    for (const level of table.levels) {
      const clusters = clustersSorted.filter((cluster) => byCluster.has(cluster.value)
        && byCluster.get(cluster.value).some((node) => node.level === level.value));
      const loose = (byCluster.get("") ?? []).filter((node) => node.level === level.value);
      const count = state.ontology.arisings.filter((node) => node.level === level.value).length;
      if (count === 0) continue;
      const row = createElement("button", "tree-row");
      row.type = "button";
      row.append(iconElement("chevron-down", "ui-icon tree-chevron"), createElement("span", "tree-level-number", String(level.value)),
        createElement("span", "tree-label", level.name), createElement("span", "tree-count", String(count)));
      const children = clusters.map((cluster) => clusterRow(cluster, byCluster.get(cluster.value).filter((node) => node.level === level.value), false));
      if (loose.length) children.push(clusterRow(null, loose, false, level.value));
      groups.push(treeGroup(`level:${level.value}`, row, children, { label: `Level ${level.value} ${level.name}` }));
    }
  } else {
    for (const domain of table.domains.values()) {
      const clusters = clustersSorted.filter((cluster) => cluster.domain === domain.value && byCluster.has(cluster.value));
      const count = clusters.reduce((sum, cluster) => sum + byCluster.get(cluster.value).length, 0);
      const row = createElement("button", "tree-row");
      row.type = "button";
      row.dataset.domainIndex = String(domain.index);
      row.title = domain.definition ?? domain.name;
      row.append(iconElement("chevron-down", "ui-icon tree-chevron"), createElement("i", "tree-swatch"),
        createElement("span", "tree-label", domain.name), createElement("span", "tree-count", String(count)));
      groups.push(treeGroup(`domain:${domain.value}`, row, clusters.map((cluster) => clusterRow(cluster, byCluster.get(cluster.value), true)),
        { label: domain.name }));
    }
    if (byCluster.has("")) groups.push(clusterRow(null, byCluster.get(""), false, "domain"));
  }
  elements["ontology-tree"].replaceChildren(...groups);
  state.treeFor = { presentation: state.presentation, group: state.navigatorGroup };
}

function renderOntologyTree() {
  if (state.treeFor?.presentation !== state.presentation || state.treeFor?.group !== state.navigatorGroup
    || elements["ontology-tree"].childElementCount === 0) buildOntologyTree();
  for (const button of elements["navigator-group"].querySelectorAll("button")) {
    button.setAttribute("aria-checked", String(button.dataset.group === state.navigatorGroup));
  }
  for (const leaf of elements["ontology-tree"].querySelectorAll(".tree-leaf")) {
    leaf.setAttribute("aria-selected", String(leaf.dataset.nodeId === state.selectedId));
    leaf.dataset.focus = String(leaf.dataset.nodeId === state.focusId);
  }
  revealInTree(state.selectedId, true);
}

/** Expand the groups that contain an arising so its row is visible. */
function revealInTree(id, scroll = false) {
  if (!state.ontology || !id) return;
  const node = nodeSummary(id);
  const arising = isArising(node) ? node : nodeSummary(node?.arisingId);
  if (!arising) return;
  const cluster = clusterOf(arising);
  const outer = state.navigatorGroup === "level" ? `level:${arising.level}` : `domain:${cluster?.domain ?? arising.domain}`;
  const inner = `cluster:${cluster ? cluster.value : `@${state.navigatorGroup === "level" ? arising.level : "domain"}`}`;
  for (const key of [outer, inner]) {
    state.treeExpanded.add(key);
    for (const group of elements["ontology-tree"].querySelectorAll(`[data-key="${CSS.escape(key)}"]`)) group.setAttribute("aria-expanded", "true");
  }
  if (scroll) {
    // Scroll the navigator only, never the page, so a stacked layout does not jump.
    const tree = elements["ontology-tree"];
    const leaf = tree.querySelector(`.tree-leaf[data-node-id="${CSS.escape(arising.id)}"]`);
    if (!leaf || tree.clientHeight === 0) return;
    const top = leaf.offsetTop - tree.offsetTop;
    if (top < tree.scrollTop || top + leaf.offsetHeight > tree.scrollTop + tree.clientHeight) {
      tree.scrollTop = Math.max(0, top - tree.clientHeight / 3);
    }
  }
}

/* ---------- Selection, focus and modes ---------- */

function markSelection() {
  const id = state.selectedId;
  for (const element of elements["catalog-list"].querySelectorAll("[data-node-id]")) {
    element.setAttribute("aria-selected", String(element.dataset.nodeId === id));
  }
  for (const element of elements["ontology-tree"].querySelectorAll(".tree-leaf")) {
    element.setAttribute("aria-selected", String(element.dataset.nodeId === id));
  }
  for (const element of elements["graph-nodes"].querySelectorAll("[data-node-id]")) {
    element.dataset.selected = String(element.dataset.nodeId === id && !state.selectedRelationId);
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-edge-id]")) {
    element.dataset.selected = String(element.dataset.edgeId === state.selectedRelationId);
  }
}

function inspectNode(id) {
  if (!state.presentation?.has(id)) return;
  state.selectedId = id;
  state.selectedRelationId = null;
  markSelection();
  if (state.ontology) {
    revealInTree(id, true);
    // The table has no separate focus: the selected arising is the one the other views open on.
    if (state.mode === "table" && isArising(nodeSummary(id)) && state.focusId !== id) {
      state.focusId = id;
      updateControls();
      replaceLocationState();
    }
    if (state.mode === "table") updateArisingTable();
  }
  renderInspector();
}

/** Show one relation (a cause between arisings, or any other declared edge) in the inspector. */
function inspectRelation(id) {
  if (!state.graphIndex?.edgesById.has(id)) return;
  state.selectedRelationId = id;
  markSelection();
  renderInspector();
}

/**
 * Focus a record. In an ontology, arisings anchor the Causes and Subgraph views and
 * technical records open in their arising's subgraph (or in Records when that view is open).
 */
function focusNode(id, updateLocation = true, { mode } = {}) {
  if (!state.presentation?.has(id)) return;
  const selectedCase = state.interactionViews?.cases.find((record) => record.id === state.interactionCaseId);
  if (selectedCase && !selectedCase.entityIds.includes(id)) {
    state.interactionCaseId = "";
    elements["interaction-case"].value = "";
  }
  state.selectedRelationId = null;
  if (state.ontology) {
    const node = nodeSummary(id);
    let nextMode = mode ?? (state.mode === "table" ? "causes" : state.mode);
    if (isArising(node)) {
      state.focusId = id;
      if (nextMode === "records") state.recordFocusId = id;
    } else {
      const owner = typeof node?.arisingId === "string" && state.ontology.arisingIds.has(node.arisingId) ? node.arisingId : null;
      // A second activation inside a subgraph follows the record's relations across subgraphs;
      // a record without an owning arising has no subgraph to open.
      if (!owner || (mode === undefined && state.mode === "subgraph" && owner === state.focusId)) nextMode = "records";
      if (owner) state.focusId = owner;
      state.recordFocusId = id;
      if (nextMode !== "records") nextMode = "subgraph";
    }
    state.mode = nextMode;
  } else {
    state.focusId = id;
  }
  state.selectedId = id;
  if (updateLocation) replaceLocationState({ push: true });
  render();
}

function setMode(mode) {
  if (!state.ontology || !ONTOLOGY_MODES.includes(mode) || state.mode === mode) return;
  state.mode = mode;
  if (mode === "records") {
    // Records opens on the selected technical record, or on a record of the focused arising.
    const selected = nodeSummary(state.selectedId);
    const current = nodeSummary(state.recordFocusId);
    if (selected && !isArising(selected)) state.recordFocusId = selected.id;
    else if (!current || isArising(current) || current.arisingId !== state.focusId) {
      state.recordFocusId = state.ontology.members.get(state.focusId)?.[0] ?? state.focusId;
    }
  }
  replaceLocationState({ push: true });
  render();
}

function updateControls() {
  for (const button of elements["direction-controls"].querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button.dataset.direction === state.direction));
  }
  for (const button of elements["depth-controls"].querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.depth) === state.depth));
  }
  for (const button of elements["role-controls"].querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(state.roleFilter.has(button.dataset.role)));
  }
  for (const button of elements["view-tabs"].querySelectorAll("button")) {
    button.setAttribute("aria-selected", String(button.dataset.mode === state.mode));
    button.tabIndex = button.dataset.mode === state.mode ? 0 : -1;
  }
  const ontology = Boolean(state.ontology);
  const graphMode = ["causes", "records", "graph"].includes(state.mode);
  elements["view-tabs"].hidden = !ontology;
  elements["role-controls"].hidden = state.mode !== "causes";
  elements["direction-controls"].hidden = !graphMode || Boolean(state.interactionCaseId);
  elements["depth-controls"].hidden = !graphMode || Boolean(state.interactionCaseId);
  elements["interaction-view-controls"].hidden = !state.interactionViews || !["records", "graph"].includes(state.mode);
  elements["zoom-controls"].hidden = state.mode === "table";
  if (state.mode === "table") elements["graph-minimap"].hidden = true;
  elements["subgraph-count"].textContent = ontology ? String(state.ontology.members.get(state.focusId)?.length ?? 0) : "";
  elements["direction-parents-label"].textContent = state.mode === "causes" ? "Causes" : "Parents";
  elements["direction-children-label"].textContent = state.mode === "causes" ? "Dependents" : "Children";
  document.body.dataset.mode = state.mode;
}

function render() {
  if (!state.presentation) return;
  updateControls();
  renderCatalog();
  renderView();
  renderInspector();
}

function renderView() {
  const table = state.mode === "table";
  elements["arising-table-panel"].hidden = !table;
  hideTooltip();
  if (table) {
    renderArisingTable();
    renderLegend();
    return;
  }
  if (state.mode === "subgraph") renderSubgraph();
  else renderGraph();
  renderLegend();
}

/* ---------- Graph drawing ---------- */

function ensureViewport() {
  if (graphViewport) return graphViewport;
  graphViewport = createGraphViewport(elements["neighborhood-graph"], elements["graph-viewport"], {
    interactive: (target) => !target.closest?.(".graph-node, .graph-edge"),
    onChange: scheduleMinimap,
    // In the stacked layout the page scrolls; a plain wheel then scrolls the page, not the graph.
    wheelPans: () => document.scrollingElement.scrollHeight <= window.innerHeight + 1
  });
  bindMinimap();
  return graphViewport;
}

let minimapFrame = 0;
function scheduleMinimap() {
  if (minimapFrame) return;
  minimapFrame = requestAnimationFrame(() => {
    minimapFrame = 0;
    drawMinimap();
  });
}

function minimapGeometry(layout) {
  const width = 180;
  const height = 120;
  const scale = Math.min((width - 12) / layout.width, (height - 12) / layout.height);
  return { width, height, scale, x: (width - layout.width * scale) / 2, y: (height - layout.height * scale) / 2 };
}

/** An overview of large drawings: every card as a coloured mark and the visible region as a frame. */
function drawMinimap() {
  const canvas = elements["graph-minimap"];
  const layout = activeGraphInfo?.layout;
  const view = layout && graphViewport ? graphViewport.view() : null;
  const covered = Boolean(view) && view.x <= 4 && view.y <= 4 && view.x + view.width >= layout.width - 4 && view.y + view.height >= layout.height - 4;
  const show = Boolean(layout && graphViewport && state.mode !== "table" && layout.nodes.length > 8 && !covered);
  canvas.hidden = !show;
  if (!show) return;
  const ratio = window.devicePixelRatio || 1;
  const geometry = minimapGeometry(layout);
  canvas.width = geometry.width * ratio;
  canvas.height = geometry.height * ratio;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.scale(ratio, ratio);
  context.clearRect(0, 0, geometry.width, geometry.height);
  const styles = getComputedStyle(document.documentElement);
  const colour = (id) => {
    const info = activeGraphInfo.info?.get(id) ?? {};
    if (info.focus) return styles.getPropertyValue("--highlight");
    if (info.domainIndex !== undefined) return styles.getPropertyValue(`--domain-${info.domainIndex}`);
    if (info.kind) return styles.getPropertyValue(`--kind-${info.kind}`);
    return styles.getPropertyValue("--muted");
  };
  for (const node of layout.nodes) {
    context.globalAlpha = activeGraphInfo.info?.get(node.id)?.external ? 0.45 : 0.85;
    context.fillStyle = colour(node.id).trim() || "#98a2b3";
    context.fillRect(geometry.x + (node.x - node.width / 2) * geometry.scale, geometry.y + (node.y - node.height / 2) * geometry.scale,
      Math.max(2, node.width * geometry.scale), Math.max(1.5, node.height * geometry.scale));
  }
  context.globalAlpha = 1;
  context.strokeStyle = styles.getPropertyValue("--blue-bright").trim() || "#6cb6ff";
  context.lineWidth = 1.5;
  context.strokeRect(geometry.x + view.x * geometry.scale, geometry.y + view.y * geometry.scale, view.width * geometry.scale, view.height * geometry.scale);
}

function bindMinimap() {
  const canvas = elements["graph-minimap"];
  let dragging = false;
  const move = (event) => {
    const layout = activeGraphInfo?.layout;
    if (!layout || !graphViewport) return;
    const rect = canvas.getBoundingClientRect();
    const geometry = minimapGeometry(layout);
    graphViewport.centerOn({ x: (event.clientX - rect.left - geometry.x) / geometry.scale, y: (event.clientY - rect.top - geometry.y) / geometry.scale });
  };
  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    canvas.setPointerCapture?.(event.pointerId);
    move(event);
  });
  canvas.addEventListener("pointermove", (event) => { if (dragging) move(event); });
  canvas.addEventListener("pointerup", () => { dragging = false; });
  canvas.addEventListener("pointercancel", () => { dragging = false; });
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

function bindGraphHighlight(element, target, tooltip) {
  element.addEventListener("pointerenter", (event) => {
    applyGraphHighlight(target);
    if (tooltip) showTooltip(tooltip(), event);
  });
  element.addEventListener("pointermove", (event) => moveTooltip(event));
  element.addEventListener("pointerleave", () => {
    clearGraphHighlight();
    hideTooltip();
  });
  element.addEventListener("focus", () => applyGraphHighlight(target));
  element.addEventListener("blur", clearGraphHighlight);
}

function hideTooltip() {
  elements["graph-tooltip"].hidden = true;
}

function moveTooltip(event) {
  const tooltip = elements["graph-tooltip"];
  if (tooltip.hidden) return;
  const stage = tooltip.parentElement.getBoundingClientRect();
  const width = tooltip.offsetWidth;
  const height = tooltip.offsetHeight;
  let left = event.clientX - stage.left + 16;
  let top = event.clientY - stage.top + 16;
  if (left + width > stage.width - 8) left = Math.max(8, event.clientX - stage.left - width - 14);
  if (top + height > stage.height - 8) top = Math.max(8, event.clientY - stage.top - height - 14);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showTooltip(content, event) {
  if (!content) return;
  const tooltip = elements["graph-tooltip"];
  tooltip.replaceChildren(...content);
  tooltip.hidden = false;
  moveTooltip(event);
}

function tooltipTags(values) {
  const row = createElement("div", "tooltip-tags");
  for (const [text, tone] of values) if (text) row.append(tag(text, tone));
  return row;
}

function edgeTooltip(edge) {
  const source = nodeSummary(edge.source);
  const target = nodeSummary(edge.target);
  const route = createElement("div", "tooltip-route",
    `${isArising(source) ? `${arisingCode(source.id)} ` : ""}${source?.name ?? edge.source} \u2192 ${isArising(target) ? `${arisingCode(target.id)} ` : ""}${target?.name ?? edge.target}`);
  if (isCauseEdge(edge)) {
    const role = ROLE_TEXT[edge.role];
    return [
      createElement("strong", "", `${role?.label ?? humanize(edge.role)} cause`),
      route,
      tooltipTags([[humanize(edge.necessity, null), "muted"], [dependencyName(edge.dependencyType), "muted"],
        [RELATION_STATUS_TEXT[edge.status]?.label ?? humanize(edge.status, null), edge.status === "supported" ? "good" : "warn"]]),
      createElement("p", "", role?.meaning ?? ""),
      createElement("p", "", "Click for its evidence and obligations.")
    ];
  }
  const parts = [createElement("strong", "", humanize(edge.role ?? edge.relationLayer, "Relation")), route];
  if (edge.assertion) parts.push(createElement("p", "", edge.assertion.length > 260 ? `${edge.assertion.slice(0, 257)}...` : edge.assertion));
  parts.push(tooltipTags([[humanize(edge.relationLayer, null), "muted"]]));
  return parts;
}

function nodeTooltip(node, info) {
  if (!node) return null;
  const head = isArising(node)
    ? `${arisingCode(node.id)} \u00b7 ${humanize(node.typeRole)} \u00b7 ${humanize(node.scientificStatus)}`
    : info?.external
      ? `${humanize(node.typeRole)} \u00b7 in ${arisingCode(node.arisingId)} ${nodeSummary(node.arisingId)?.name ?? ""}`
      : `${humanize(node.typeRole, "Record")}${node.scientificStatus ? ` \u00b7 ${humanize(node.scientificStatus)}` : ""}`;
  const summary = typeof node.shortDescription === "string" && node.shortDescription.length > 0
    ? (node.shortDescription.length > 240 ? `${node.shortDescription.slice(0, 237)}...` : node.shortDescription) : null;
  return [createElement("strong", "", node.name), createElement("div", "tooltip-route", head),
    ...(summary ? [createElement("p", "", summary)] : [])];
}

function wrappedLines(text, width, characterWidth, maxLines) {
  return wrapGraphNodeLabel(text, {
    maxCharacters: Math.max(8, Math.min(80, Math.floor((width - 28) / characterWidth))),
    maxLines
  });
}

let measureContext = null;
let measureFamily = null;
const measuredWidths = new Map();
function textWidth(text, font) {
  const key = `${font}\u0000${text}`;
  if (!measuredWidths.has(key)) {
    measureContext.font = font;
    if (measuredWidths.size > 20000) measuredWidths.clear();
    measuredWidths.set(key, measureContext.measureText(text).width);
  }
  return measuredWidths.get(key);
}

/** Word wrap by measured width: names break between words, and only an overlong word is split. */
function wrapCardLabel(text, width, { size = 13, weight = 500, maxLines = 2, characterWidth = 7.1 } = {}) {
  if (!measureContext) measureContext = document.createElement("canvas").getContext?.("2d") ?? null;
  if (!measureContext) return wrappedLines(text, width + 28, characterWidth, maxLines);
  measureFamily ??= getComputedStyle(document.body).fontFamily;
  const font = `${weight} ${size}px ${measureFamily}`;
  const fits = (value) => textWidth(value, font) <= width;
  const lines = [];
  let current = "";
  const pushWord = (word) => {
    let rest = word;
    while (rest.length > 1 && !fits(rest)) {
      let cut = rest.length - 1;
      while (cut > 1 && !fits(`${rest.slice(0, cut)}-`)) cut -= 1;
      lines.push(`${rest.slice(0, cut)}-`);
      rest = rest.slice(cut);
    }
    return rest;
  };
  for (const word of String(text).replace(/\s+/g, " ").trim().split(" ")) {
    const candidate = current ? `${current} ${word}` : word;
    if (fits(candidate)) current = candidate;
    else if (!current) current = pushWord(word);
    else {
      lines.push(current);
      current = pushWord(word);
    }
  }
  if (current) lines.push(current);
  const truncated = lines.length > maxLines;
  const shown = lines.slice(0, maxLines);
  if (truncated) {
    let last = shown.at(-1);
    while (last.length > 1 && !fits(`${last}\u2026`)) last = last.slice(0, -1).trimEnd();
    shown[shown.length - 1] = `${last}\u2026`;
  }
  return { lines: shown, truncated };
}

/** One card: the stripe carries the domain or kind colour, the kicker the code or kind. */
function drawNodeCard(node, info, box) {
  const focus = info.focus === true;
  const group = svgElement("g", {
    class: "graph-node",
    transform: `translate(${box.x} ${box.y})`,
    tabindex: "0",
    role: "button",
    "aria-label": `${node.name}${info.kicker ? `, ${info.kicker}` : ""}. Enter inspects; Shift Enter or Space focuses.`,
    "data-node-id": node.id,
    "data-relation": info.relation ?? "child",
    "data-focus": focus ? "true" : "false",
    "data-selected": node.id === state.selectedId && !state.selectedRelationId ? "true" : "false"
  });
  if (info.domainIndex !== undefined) group.dataset.domainIndex = String(info.domainIndex);
  if (info.kind) group.dataset.kind = info.kind;
  if (info.status) group.dataset.status = info.status;
  if (info.external) group.dataset.external = "true";
  if (info.generic) group.dataset.generic = "true";
  const width = box.width;
  const height = box.height;
  const left = -width / 2;
  const top = -height / 2;
  group.append(svgElement("rect", { class: "node-card", x: left, y: top, width, height, rx: GRAPH_NODE.radius, ry: GRAPH_NODE.radius }));
  group.append(svgElement("rect", { class: "node-stripe", x: left + 5, y: top + 9, width: 3, height: height - 18, rx: 1.5 }));
  const label = svgElement("text", { "aria-hidden": "true" });
  if (info.generic) {
    const wrapped = wrappedLines(node.name, width, 7.3, 3);
    const lineHeight = 14;
    const firstLineY = -((wrapped.lines.length - 1) * lineHeight) / 2 + 4;
    label.append(...wrapped.lines.map((line, index) => {
      const span = svgElement("tspan", { x: 4, y: firstLineY + index * lineHeight });
      span.textContent = line;
      return span;
    }));
    group.dataset.truncated = String(wrapped.truncated);
    group.append(label);
  } else {
    if (info.kicker) {
      const kicker = svgElement("text", { class: "node-kicker", x: left + 16, y: top + 18 });
      const room = Math.floor((width - 28 - (info.meta ? info.meta.length * 7 + 10 : 0)) / 7.3);
      kicker.textContent = info.kicker.length > room ? `${info.kicker.slice(0, Math.max(3, room - 1))}\u2026` : info.kicker;
      group.append(kicker);
    }
    if (info.meta) {
      const meta = svgElement("text", { class: "node-meta", x: -left - 12, y: top + 18 });
      meta.textContent = info.meta;
      group.append(meta);
    }
    const lineHeight = focus ? 17 : GRAPH_NODE.lineHeight;
    const maxLines = Math.max(1, Math.floor((height - 26) / lineHeight));
    const wrapped = wrapCardLabel(node.name, width - 30, { size: focus ? 14 : 13, weight: focus ? 600 : 500, maxLines });
    label.setAttribute("class", "node-name");
    label.append(...wrapped.lines.map((line, index) => {
      const span = svgElement("tspan", { x: left + 16, y: top + 37 + index * lineHeight + (focus ? 2 : 0) });
      span.textContent = line;
      return span;
    }));
    group.dataset.truncated = String(wrapped.truncated);
    group.append(label);
  }
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
  bindGraphHighlight(group, { kind: "node", id: node.id }, () => nodeTooltip(node, info));
  return group;
}

function drawEdge(edge, route, focusId) {
  const isFocusEdge = edge.source === focusId || edge.target === focusId;
  const source = nodeSummary(edge.source);
  const target = nodeSummary(edge.target);
  const meaning = [edge.relationLayer, edge.role ?? edge.dependencyType, edge.assertion]
    .filter((value) => value !== null && value !== undefined && value !== "").map(scalarLabel).join(" | ");
  const label = `${source?.name ?? edge.source} -> ${target?.name ?? edge.target}${meaning ? ` | ${meaning}` : ""}`;
  const group = svgElement("g", {
    class: "graph-edge",
    tabindex: "0",
    role: "button",
    "aria-label": `${label}. Enter inspects this relation.`,
    "data-edge-id": edge.id,
    "data-source": edge.source,
    "data-target": edge.target,
    "data-layer": isCauseEdge(edge) ? "causal" : "technical",
    "data-focus-edge": isFocusEdge ? "true" : "false",
    "data-selected": edge.id === state.selectedRelationId ? "true" : "false"
  });
  if (isCauseEdge(edge)) {
    if (edge.role) group.dataset.role = edge.role;
    if (edge.status) group.dataset.status = edge.status;
    if (edge.necessity) group.dataset.necessity = edge.necessity;
  }
  const hitPath = svgElement("path", { class: "edge-hit", d: route.path });
  const linePath = svgElement("path", { class: "edge-line", d: route.path });
  group.append(hitPath, linePath);
  group.addEventListener("click", () => inspectRelation(edge.id));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      inspectRelation(edge.id);
    }
  });
  bindGraphHighlight(group, { kind: "edge", id: edge.id }, () => edgeTooltip(edge));
  return group;
}

function columnHeading(layer, mode) {
  if (mode === "subgraph") return null;
  if (layer === 0) return "Focus";
  const distance = Math.abs(layer);
  if (mode === "causes") {
    if (layer < 0) return distance === 1 ? "Causes" : distance === 2 ? "Causes of causes" : `${distance} steps back`;
    return distance === 1 ? "Dependents" : distance === 2 ? "Their dependents" : `${distance} steps ahead`;
  }
  const labels = mode === "records" ? { parents: "Linked from", children: "Links to" } : state.presentationMetadata.labels;
  if (layer < 0) return distance === 1 ? labels.parents : `${distance} steps back`;
  return distance === 1 ? labels.children : `${distance} steps ahead`;
}

/**
 * Draw a laid-out graph. `info` maps node IDs to card styling; edges carry the
 * declared relation fields used for line style.
 */
function drawLayout(layout, { nodes, edges, info, focusId, mode, anchorId }) {
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const edgesById = new Map(edges.map((edge) => [edge.id, edge]));
  const columns = [];
  if (mode !== "subgraph") {
    const top = Math.min(...layout.nodes.map((node) => node.y - node.height / 2));
    for (const column of layout.columns) {
      if (!layout.nodes.some((node) => node.layer === column.layer)) continue;
      const heading = columnHeading(column.layer, mode);
      if (!heading) continue;
      const text = svgElement("text", { class: "graph-column-label", x: column.x, y: Math.max(16, top - 22) });
      text.textContent = heading;
      columns.push(text);
    }
  }
  elements["graph-columns"].replaceChildren(...columns);
  const routes = new Map(layout.edges.map((route) => [route.id, route]));
  elements["graph-edges"].replaceChildren(...layout.edges.map((route) => drawEdge(edgesById.get(route.id), route, focusId)));
  elements["graph-nodes"].replaceChildren(...layout.nodes.map((box) => drawNodeCard(nodesById.get(box.id), info.get(box.id) ?? {}, box)));
  activeGraphProjection = { nodes: layout.nodes.map(({ id }) => ({ id })), edges: [...routes.values()].map(({ id, source, target }) => ({ id, source, target })) };
  activeGraphInfo = { layout, anchorId, info };
  const viewport = ensureViewport();
  viewport.setContent(layout.width, layout.height);
  fitGraph();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const group of [elements["graph-nodes"], elements["graph-edges"], elements["graph-columns"]]) {
      group.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: "ease-out" });
    }
  }
}

function fitGraph() {
  if (!activeGraphInfo || !graphViewport) return;
  const anchor = activeGraphInfo.layout.nodes.find((node) => node.id === activeGraphInfo.anchorId);
  graphViewport.fit({ anchor: anchor ? { x: anchor.x, y: anchor.y } : null, bottomInset: 44, readableScale: 0.68, maxFitScale: 1 });
  scheduleMinimap();
}

/** Card style for any record shown in a graph. */
function cardInfo(node, { focusId, relation, external = false, showOwner = false } = {}) {
  if (isArising(node)) {
    const domain = domainOf(node);
    return {
      focus: node.id === focusId,
      relation,
      domainIndex: domain?.index,
      status: node.scientificStatus,
      kicker: arisingCode(node.id),
      meta: humanize(node.typeRole, "")
    };
  }
  if (state.ontology) {
    const owner = nodeSummary(node.arisingId);
    return {
      focus: node.id === focusId,
      relation,
      kind: recordKind(node.typeRole),
      external,
      kicker: humanize(node.typeRole, "Record"),
      meta: (external || showOwner) && owner ? `in ${arisingCode(owner.id)}` : ""
    };
  }
  return { focus: node.id === focusId, relation, generic: true };
}

/** A presentation of the arisings and their causes in the shown roles, cached per role set. */
function causePresentation() {
  const key = [...state.roleFilter].sort().join(",");
  if (!state.rolePresentations.has(key)) {
    const edges = state.ontology.causes.filter((edge) => state.roleFilter.has(edge.role));
    state.rolePresentations.set(key, createLazyModelPresentation({
      identity: state.graphInputForRoles.identity, nodes: state.ontology.arisings, edges
    }));
  }
  return state.rolePresentations.get(key);
}

function graphMessage(messages, caseOverview = false, { reset = false } = {}) {
  elements["graph-message"].hidden = messages.length === 0;
  elements["graph-message"].dataset.caseOverview = String(caseOverview);
  if (caseOverview && messages.length) {
    const scope = createElement("details");
    scope.append(createElement("summary", "", "View scope"));
    scope.append(createElement("p", "", messages.join(" ")));
    elements["graph-message"].replaceChildren(scope);
  } else {
    elements["graph-message"].replaceChildren(document.createTextNode(messages.join(" ")));
    if (reset && messages.length) {
      const button = createElement("button", "", "Show all roles");
      button.type = "button";
      button.addEventListener("click", () => {
        state.roleFilter = new Set(CAUSE_ROLES);
        render();
      });
      elements["graph-message"].append(button);
    }
  }
}

function emptyStage(title, text) {
  const existing = elements["graph-nodes"].closest(".graph-stage").querySelector(".graph-empty");
  existing?.remove();
  if (!title) return;
  const empty = createElement("div", "graph-empty");
  empty.append(createElement("strong", "", title), createElement("p", "", text));
  elements["graph-nodes"].closest(".graph-stage").append(empty);
}

/** The neighbourhood of the focus: causes of an arising, or relations of any record. */
function renderGraph() {
  emptyStage(null);
  const recordsMode = state.mode === "records";
  const causesMode = state.mode === "causes";
  const focusId = recordsMode ? (state.recordFocusId ?? state.focusId) : state.focusId;
  const selection = state.interactionViews && (state.interactionPerspectiveId || state.interactionCaseId) && !causesMode
    ? selectInteractionGraph(state.interactionGraphInput, state.interactionViews, {
      perspectiveId: state.interactionPerspectiveId, caseId: state.interactionCaseId, focusId
    }) : null;
  const presentation = selection ? createLazyModelPresentation(selection.input) : causesMode ? causePresentation() : state.presentation;
  const neighborhoodOptions = {
    focusId, depth: state.depth, direction: state.direction, ...GRAPH_LIMITS
  };
  const projection = selection?.selectedCase
    ? interactionCaseOverview(presentation, selection, focusId, GRAPH_LIMITS)
    : presentation !== state.presentation ? presentation.neighborhood(neighborhoodOptions)
      : state.presentation.neighborhood(neighborhoodOptions);
  if (selection) presentation.close();
  const isolatedCase = Boolean(selection?.selectedCase && projection.edges.length === 0);
  const stage = elements["neighborhood-graph"].closest(".graph-stage");
  stage.dataset.isolatedCase = String(isolatedCase);
  const edgeRecords = projection.edges.map((edge) => ({ ...edge, ...(state.graphIndex.edgesById.get(edge.id) ?? {}) }));
  const nodes = projection.nodes;
  let layout;
  if (isolatedCase) {
    const cards = layoutIsolatedCaseCards(projection, { width: Math.max(320, stage.clientWidth), height: Math.max(240, stage.clientHeight) });
    layout = {
      width: cards.width, height: cards.height, columns: [], edges: [],
      nodes: cards.nodes.map((node) => ({ id: node.id, layer: 0, x: node.x, y: node.y, width: cards.nodeWidth, height: cards.nodeHeight }))
    };
  } else {
    const roleSide = (node) => {
      const outgoing = edgeRecords.find((edge) => edge.source === focusId && edge.target === node.id);
      return outgoing?.role === "arising" || !outgoing ? 1 : -1;
    };
    const layers = neighbourhoodLayers(projection, roleSide);
    const columnCount = new Set(layers.values()).size;
    const compact = columnCount > 3;
    const cardWidth = compact ? 164 : GRAPH_NODE.width;
    const sized = (node) => (node.id === focusId
      ? { width: compact ? 208 : GRAPH_NODE.focusWidth, height: GRAPH_NODE.focusHeight }
      : { width: cardWidth, height: GRAPH_NODE.height });
    layout = layoutLayeredGraph({
      nodes: nodes.map((node) => ({
        id: node.id,
        layer: layers.get(node.id),
        rank: isArising(node) ? codeKey(node.id)[0] * 1000 + codeKey(node.id)[1] : 0,
        ...sized(node)
      })),
      edges: edgeRecords
    }, {
      nodeWidth: cardWidth,
      nodeHeight: GRAPH_NODE.height,
      columnGap: compact ? 66 : 100,
      padding: 44,
      maxRows: 26,
      flatSide: (layer) => (layer < 0 ? "left" : "right")
    });
  }
  const info = new Map(nodes.map((node) => [node.id, {
    ...cardInfo(node, { focusId, showOwner: recordsMode, relation: node.caseContext && node.id !== focusId ? "context" : ["focus", "parent", "child", "both"].includes(node.relation) ? node.relation : "child" })
  }]));
  drawLayout(layout, { nodes, edges: edgeRecords, info, focusId, mode: causesMode ? "causes" : recordsMode ? "records" : "graph", anchorId: focusId });

  const focus = projection.focus ?? nodeSummary(focusId);
  elements["graph-title"].textContent = focus.name;
  const owner = !isArising(focus) && state.ontology ? nodeSummary(focus.arisingId) : null;
  elements["graph-subtitle"].textContent = causesMode || isArising(focus)
    ? [arisingCode(focus.id), humanize(focus.typeRole, null), levelName(focus.level) ? `Level ${focus.level} ${levelName(focus.level)}` : null].filter(Boolean).join(" \u00b7 ")
    : [humanize(focus.typeRole, "Record"), owner ? `in ${arisingCode(owner.id)} ${owner.name}` : null].filter(Boolean).join(" \u00b7 ");
  elements["neighborhood-graph"].setAttribute("aria-label", `${focus.name}: ${projection.counts.displayedNodeCount} visible nodes and ${projection.counts.displayedEdgeCount} visible edges.`);
  const hidden = projection.counts.hiddenNodeCount + projection.counts.hiddenEdgeCount;
  const messages = [];
  if (selection?.perspective) messages.push(selection.perspective.boundary);
  if (selection?.selectedCase) messages.push("Case overview includes disconnected records. Card position does not establish an interaction.");
  if (selection?.focusOutsideView) messages.push(selection.memberNodeIds.length
    ? "The focus is outside this view and is retained without relations for context."
    : "This case has no records in the selected perspective. Its focus is shown only for context.");
  if (hidden) messages.push(`Bounded view: ${projection.counts.hiddenNodeCount} nodes and ${projection.counts.hiddenEdgeCount} edges omitted. Lower the depth or narrow the direction.`);
  const filtered = causesMode && state.roleFilter.size < CAUSE_ROLES.length;
  if (filtered) messages.push(`Showing ${[...state.roleFilter].map((role) => ROLE_TEXT[role].label.toLowerCase()).join(", ") || "no"} causes only.`);
  graphMessage(messages, Boolean(selection?.selectedCase), { reset: filtered });
  const noun = causesMode ? ["arising", "cause"] : ["record", "relation"];
  elements["graph-counts"].textContent = `${plural(projection.counts.displayedNodeCount, noun[0])} \u00b7 ${plural(projection.counts.displayedEdgeCount, noun[1])} \u00b7 ${selection?.selectedCase ? "case overview" : `depth ${state.depth}`}`;
  elements["graph-hint"].textContent = "Click: inspect \u00b7 Double-click: focus \u00b7 Drag or scroll: pan \u00b7 Ctrl+scroll: zoom";
}

/** The technical subgraph of the focused arising, with the records it borrows from other arisings. */
function renderSubgraph() {
  const arising = nodeSummary(state.focusId);
  const members = state.ontology.members.get(state.focusId) ?? [];
  const memberSet = new Set(members);
  elements["graph-title"].textContent = `Subgraph of ${arising?.name ?? state.focusId}`;
  elements["graph-subtitle"].textContent = `${arisingCode(state.focusId)} \u00b7 what the arising is and how it is known`;
  elements["neighborhood-graph"].closest(".graph-stage").dataset.isolatedCase = "false";
  if (members.length === 0) {
    elements["graph-columns"].replaceChildren();
    elements["graph-edges"].replaceChildren();
    elements["graph-nodes"].replaceChildren();
    activeGraphProjection = { nodes: [], edges: [] };
    activeGraphInfo = null;
    drawMinimap();
    emptyStage("No technical records yet", `${arising?.name ?? "This arising"} has an empty subgraph. It carries the obligation to add its definitions, preparations and evidence.`);
    graphMessage([]);
    elements["graph-counts"].textContent = "0 records";
    return;
  }
  emptyStage(null);
  const relations = [];
  const seen = new Set();
  for (const id of members) {
    for (const edge of [...(state.graphIndex.incoming.get(id) ?? []), ...(state.graphIndex.outgoing.get(id) ?? [])]) {
      if (seen.has(edge.id) || isCauseEdge(edge)) continue;
      seen.add(edge.id);
      relations.push(edge);
    }
  }
  const external = [...new Set(relations.flatMap((edge) => [edge.source, edge.target]).filter((id) => !memberSet.has(id)))];
  const ids = [...members, ...external];
  const layers = longestPathLayers(ids, relations);
  const kindRank = { context: 0, process: 1, structure: 2, hypothesis: 3, definition: 4, rule: 5, other: 6 };
  const stage = elements["neighborhood-graph"].getBoundingClientRect();
  const aspect = Math.max(0.8, Math.min(2.4, (stage.width || 900) / Math.max(1, (stage.height || 600) - 40)));
  const layerSizes = new Map();
  for (const id of ids) layerSizes.set(layers.get(id), (layerSizes.get(layers.get(id)) ?? 0) + 1);
  let rows = 10;
  let bestScore = Infinity;
  for (let candidate = 5; candidate <= 40; candidate += 1) {
    const lanes = [...layerSizes.values()].reduce((sum, size) => sum + Math.ceil(size / candidate), 0);
    const width = lanes * (SUBGRAPH_NODE.width + 46) + layerSizes.size * 70;
    const height = Math.min(candidate, Math.max(...layerSizes.values())) * (SUBGRAPH_NODE.height + 14);
    const score = Math.abs(Math.log((width / height) / aspect));
    if (score < bestScore - 0.02) {
      bestScore = score;
      rows = candidate;
    }
  }
  const nodes = ids.map((id) => nodeSummary(id)).filter(Boolean);
  const layout = layoutLayeredGraph({
    nodes: nodes.map((node) => ({
      id: node.id,
      layer: layers.get(node.id),
      rank: (memberSet.has(node.id) ? 0 : 10) + (kindRank[recordKind(node.typeRole)] ?? 6)
    })),
    edges: relations
  }, { nodeWidth: SUBGRAPH_NODE.width, nodeHeight: SUBGRAPH_NODE.height, columnGap: 72, laneGap: 26, rowGap: 14, padding: 36, maxRows: rows });
  const info = new Map(nodes.map((node) => [node.id, cardInfo(node, { focusId: null, relation: undefined, external: !memberSet.has(node.id) })]));
  const degree = new Map();
  for (const edge of relations) for (const id of [edge.source, edge.target]) degree.set(id, (degree.get(id) ?? 0) + 1);
  const anchorId = (members.includes(state.selectedId) ? state.selectedId : null)
    ?? [...members].sort((left, right) => (degree.get(right) ?? 0) - (degree.get(left) ?? 0))[0];
  drawLayout(layout, { nodes, edges: relations, info, focusId: null, mode: "subgraph", anchorId });
  graphMessage([]);
  elements["graph-counts"].textContent = `${plural(members.length, "record")} \u00b7 ${plural(relations.length, "relation")} \u00b7 ${plural(external.length, "record")} of other arisings`;
  elements["graph-hint"].textContent = "Click: inspect \u00b7 Double-click: follow a record's relations (a dashed record opens its arising) \u00b7 Ctrl+scroll: zoom";
}

function legendItem(element, text) {
  const item = createElement("span");
  item.append(element, document.createTextNode(text));
  return item;
}

function renderLegend() {
  const legend = elements["graph-legend"];
  const items = [];
  if (state.mode === "table") {
    for (const [link, label] of [["cause", "cause of the selected"], ["dependent", "conditioned by it"], ["both", "both"]]) {
      const swatch = createElement("i", "legend-swatch");
      swatch.style.setProperty("--legend-color", link === "cause" ? "var(--blue-bright)" : link === "dependent" ? "var(--green)" : "var(--purple)");
      items.push(legendItem(swatch, label));
    }
    for (const role of CAUSE_ROLES) {
      const line = createElement("i", "legend-line");
      line.dataset.role = role;
      items.push(legendItem(line, ROLE_TEXT[role].label));
    }
  } else if (state.mode === "causes") {
    const supported = createElement("i", "legend-line");
    supported.dataset.status = "supported";
    items.push(legendItem(supported, "supported"));
    items.push(legendItem(createElement("i", "legend-line"), "hypothesis"));
    const dashed = createElement("i", "legend-card");
    dashed.dataset.style = "dashed";
    items.push(legendItem(dashed, "hypothesized arising"));
    if (elements["graph-nodes"].querySelector('[data-status="methodological-placeholder"]')) {
      const dotted = createElement("i", "legend-card");
      dotted.dataset.style = "dotted";
      items.push(legendItem(dotted, "methodological placeholder"));
    }
  } else if (state.mode === "subgraph" || (state.mode === "records" && state.ontology)) {
    const present = new Set([...elements["graph-nodes"].querySelectorAll("[data-kind]")].map((node) => node.dataset.kind));
    for (const [kind, label] of [["context", "context"], ["process", "process / finding"], ["structure", "structure"], ["hypothesis", "hypothesis"], ["definition", "definition"], ["rule", "rule"], ["other", "other"]]) {
      if (!present.has(kind)) continue;
      const swatch = createElement("i", "legend-swatch");
      swatch.style.setProperty("--legend-color", `var(--kind-${kind === "process" ? "process" : kind})`);
      items.push(legendItem(swatch, label));
    }
    if (elements["graph-nodes"].querySelector("[data-external]")) {
      const card = createElement("i", "legend-card");
      card.dataset.style = "dashed";
      items.push(legendItem(card, "record of another arising"));
    }
  } else if (state.mode === "graph") {
    for (const [color, label] of [["var(--blue-bright)", "parent"], ["var(--orange)", "focus"], ["var(--green)", "child"]]) {
      const swatch = createElement("i", "legend-swatch");
      swatch.style.setProperty("--legend-color", color);
      items.push(legendItem(swatch, label));
    }
  }
  legend.replaceChildren(...items);
  legend.hidden = items.length === 0;
}

/* ---------- Arising table ---------- */

/**
 * Periodic-table view of the arisings: complexity levels as rows, level phases as columns.
 * The chips are built once per release; selection, focus, links and the domain filter update them in place.
 */
function renderArisingTable() {
  const panel = elements["arising-table-panel"];
  const table = state.presentationMetadata?.arisingTable;
  const hasArisings = Boolean(table) && Boolean(state.ontology);
  if (!hasArisings) {
    panel.hidden = true;
    elements["arising-table"].replaceChildren();
    state.arisingTableFor = null;
    state.tableResize?.disconnect();
    state.tableResize = null;
    return;
  }
  if (state.arisingTableFor !== state.presentation) {
    buildArisingTable(table);
    state.arisingTableFor = state.presentation;
  }
  elements["graph-title"].textContent = "Table of arisings";
  elements["graph-subtitle"].textContent = `${plural(state.ontology.arisings.length, "arising")} \u00b7 ${plural(state.ontology.causes.length, "cause")} \u00b7 levels by phases`;
  elements["graph-counts"].textContent = `${plural(state.ontology.arisings.length, "arising")} in ${plural(table.domains.size, "domain")}`;
  elements["graph-hint"].textContent = "Click: inspect and show its causes \u00b7 Double-click: open the causes graph";
  graphMessage([]);
  emptyStage(null);
  updateArisingTable();
}

function updateArisingTable() {
  if (!state.ontology || state.arisingTableFor !== state.presentation) return;
  for (const item of elements["arising-table"].querySelectorAll(".arising-legend-item")) {
    item.setAttribute("aria-pressed", String(state.domainFilter === item.dataset.domain));
  }
  const linkedId = state.tablePreviewId ?? state.selectedId;
  const linked = isArising(nodeSummary(linkedId)) ? linkedId : null;
  const causes = new Map((state.causes.byChild.get(linked) ?? []).map((edge) => [edge.source, edge]));
  const dependents = new Map((state.causes.byParent.get(linked) ?? []).map((edge) => [edge.target, edge]));
  // Hovering previews one arising's links and dims the rest; a selection keeps the table readable.
  elements["arising-table"].dataset.preview = String(Boolean(state.tablePreviewId && linked));
  for (const chip of elements["arising-table"].querySelectorAll(".arising-chip")) {
    const id = chip.dataset.nodeId;
    chip.dataset.selected = String(id === state.selectedId);
    chip.dataset.focus = String(id === state.focusId);
    chip.dataset.previewSource = String(id === state.tablePreviewId);
    chip.dataset.dimmed = String(Boolean(state.domainFilter && chip.dataset.domain !== state.domainFilter));
    const link = causes.has(id) && dependents.has(id) ? "both" : causes.has(id) ? "cause" : dependents.has(id) ? "dependent" : null;
    if (link && id !== linked) chip.dataset.link = link;
    else delete chip.dataset.link;
    delete chip.dataset.lineage;
  }
  drawTableLinks(linked, causes, dependents);
}

/** Curves from the causes of the linked arising to it, and from it to its dependents. */
function drawTableLinks(linked, causes, dependents) {
  const grid = elements["arising-table"].querySelector(".arising-grid");
  const svg = grid?.querySelector(".arising-links");
  const paths = svg?.querySelector(".arising-link-paths");
  if (!grid || !svg || !paths) return;
  paths.replaceChildren();
  if (!linked) return;
  const chips = new Map([...grid.querySelectorAll(".arising-chip")].map((chip) => [chip.dataset.nodeId, chip]));
  const center = chips.get(linked);
  if (!center) return;
  // The layer matches the grid's own box; arcs beside the last column paint as visible overflow.
  svg.setAttribute("width", String(grid.offsetWidth));
  svg.setAttribute("height", String(grid.offsetHeight));
  const box = (chip) => ({ x: chip.offsetLeft, y: chip.offsetTop, width: chip.offsetWidth, height: chip.offsetHeight });
  const anchor = (from, to) => {
    const cx = from.x + from.width / 2;
    const cy = from.y + from.height / 2;
    const dx = to.x + to.width / 2 - cx;
    const dy = to.y + to.height / 2 - cy;
    const scale = Math.min(Math.abs(dx) > 0 ? (from.width / 2) / Math.abs(dx) : Infinity, Math.abs(dy) > 0 ? (from.height / 2) / Math.abs(dy) : Infinity);
    return { x: cx + dx * Math.min(1, scale), y: cy + dy * Math.min(1, scale) };
  };
  const curve = (fromChip, toChip, edge) => {
    const from = box(fromChip);
    const to = box(toChip);
    let d;
    if (Math.abs(from.x + from.width / 2 - (to.x + to.width / 2)) < Math.min(from.width, to.width) / 2) {
      // Same column: leave and enter through the right edges and pass beside the column.
      const start = { x: from.x + from.width, y: from.y + from.height / 2 };
      const end = { x: to.x + to.width + 3, y: to.y + to.height / 2 };
      const reach = 18 + Math.min(54, Math.abs(end.y - start.y) * 0.12);
      d = `M ${start.x} ${start.y} C ${start.x + reach} ${start.y} ${end.x + reach} ${end.y} ${end.x} ${end.y}`;
    } else {
      const start = anchor(from, to);
      const end = anchor(to, from);
      const mx = (start.x + end.x) / 2;
      const my = (start.y + end.y) / 2;
      const length = Math.hypot(end.x - start.x, end.y - start.y) || 1;
      const bend = Math.min(60, length * 0.18);
      const control = { x: mx - ((end.y - start.y) / length) * bend, y: my + ((end.x - start.x) / length) * bend };
      d = `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
    }
    const path = svgElement("path", { d, "marker-end": edge.status === "supported" ? "url(#table-arrow-supported)" : "url(#table-arrow)" });
    path.dataset.role = edge.role;
    path.dataset.status = edge.status;
    return path;
  };
  for (const [id, edge] of causes) if (chips.has(id) && id !== linked) paths.append(curve(chips.get(id), center, edge));
  for (const [id, edge] of dependents) if (chips.has(id) && id !== linked) paths.append(curve(center, chips.get(id), edge));
  if (state.showLineage && !state.tablePreviewId) {
    for (const edge of lineageOf(linked)) {
      if (!chips.has(edge.source) || !chips.has(edge.target)) continue;
      const path = curve(chips.get(edge.source), chips.get(edge.target), edge);
      path.dataset.lineage = "true";
      path.setAttribute("marker-end", "url(#table-arrow-highlight)");
      paths.append(path);
      chips.get(edge.source).dataset.lineage = "true";
    }
  }
}

function buildArisingTable(table) {
  const items = state.ontology.arisings;
  const cells = new Map();
  for (const node of items) {
    const key = `${node.level}:${node.phase}`;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(node);
  }
  const clusterIndex = (node) => table.clusters.get(node.cluster)?.index ?? Number.MAX_SAFE_INTEGER;
  const order = (a, b) => clusterIndex(a) - clusterIndex(b) || compareCodes(a.id, b.id);
  const rows = [];
  if (table.domains.size) {
    const legend = createElement("div", "arising-legend");
    const lineage = createElement("button", "arising-lineage-toggle", "Lineage from the root");
    lineage.type = "button";
    lineage.title = "Draw the chain of arising-role causes from the root to the selected arising";
    lineage.setAttribute("aria-pressed", String(state.showLineage));
    lineage.addEventListener("click", () => {
      state.showLineage = !state.showLineage;
      lineage.setAttribute("aria-pressed", String(state.showLineage));
      updateArisingTable();
    });
    legend.append(lineage, createElement("span", "arising-legend-title", "Domains"));
    for (const domain of table.domains.values()) {
      const count = items.filter((node) => node.domain === domain.value).length;
      const item = createElement("button", "arising-legend-item");
      item.type = "button";
      item.dataset.domain = domain.value;
      item.dataset.domainIndex = String(domain.index);
      item.title = domain.definition ?? domain.name;
      item.append(document.createTextNode(domain.name), createElement("small", "", String(count)));
      item.addEventListener("click", () => {
        state.domainFilter = state.domainFilter === domain.value ? null : domain.value;
        updateArisingTable();
      });
      legend.append(item);
    }
    rows.push(legend);
  }
  const phaseCounts = table.phases.map((phase) => Math.max(1, ...table.levels.map((level) => (cells.get(`${level.value}:${phase.value}`) ?? []).length)));
  const grid = createElement("div", "arising-grid");
  grid.setAttribute("role", "table");
  grid.setAttribute("aria-label", "Arisings by complexity level and phase");
  grid.style.gridTemplateColumns = `104px ${phaseCounts.map((count) => `minmax(138px, ${Math.max(1, count / 6).toFixed(2)}fr)`).join(" ")}`;
  // The table keeps its own arrowheads: the graph's markers live in an SVG the table view hides.
  const links = svgElement("svg", { class: "arising-links", "aria-hidden": "true" });
  const defs = svgElement("defs");
  for (const [id, className] of [["table-arrow", "arrow-hypothesis"], ["table-arrow-supported", "arrow-supported"], ["table-arrow-highlight", "arrow-highlight"]]) {
    const marker = svgElement("marker", { id, class: className, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 8, markerHeight: 8, markerUnits: "userSpaceOnUse", orient: "auto-start-reverse" });
    marker.append(svgElement("path", { d: "M0 1 10 5 0 9z" }));
    defs.append(marker);
  }
  links.append(defs, svgElement("g", { class: "arising-link-paths" }));
  grid.append(links);
  const head = createElement("div", "arising-table-row arising-table-head");
  head.setAttribute("role", "row");
  const corner = createElement("span", "arising-table-corner", "Level");
  corner.setAttribute("role", "columnheader");
  head.append(corner, ...table.phases.map((phase) => {
    const cell = createElement("span", "arising-table-phase", phase.name);
    cell.setAttribute("role", "columnheader");
    cell.append(createElement("small", "", String(items.filter((node) => node.phase === phase.value).length)));
    return cell;
  }));
  grid.append(head);
  const empty = [];
  for (const level of table.levels) {
    const levelItems = items.filter((node) => node.level === level.value);
    if (levelItems.length === 0) {
      empty.push(level);
      continue;
    }
    const row = createElement("div", "arising-table-row");
    row.setAttribute("role", "row");
    const label = createElement("div", "arising-table-level");
    label.setAttribute("role", "rowheader");
    label.append(createElement("strong", "", String(level.value)), createElement("span", "", level.name), createElement("small", "", plural(levelItems.length, "arising")));
    row.append(label);
    for (const phase of table.phases) {
      const cell = createElement("div", "arising-table-cell");
      cell.setAttribute("role", "cell");
      cell.setAttribute("aria-label", `Level ${level.value} ${level.name}, ${phase.name}`);
      for (const node of (cells.get(`${level.value}:${phase.value}`) ?? []).sort(order)) {
        const chip = createElement("button", "arising-chip");
        chip.type = "button";
        chip.dataset.nodeId = node.id;
        chip.dataset.status = String(node.scientificStatus);
        const domain = table.domains.get(node.domain);
        if (typeof node.domain === "string") chip.dataset.domain = node.domain;
        if (domain) chip.dataset.domainIndex = String(domain.index);
        chip.title = `${arisingCode(node.id)} ${node.name} (${humanize(node.scientificStatus)}${domain ? `; ${domain.name}` : ""})`;
        chip.append(createElement("code", "", arisingCode(node.id)), createElement("span", "", node.name));
        chip.addEventListener("click", () => inspectNode(node.id));
        chip.addEventListener("dblclick", () => focusNode(node.id, true, { mode: "causes" }));
        chip.addEventListener("pointerenter", () => {
          state.tablePreviewId = node.id;
          updateArisingTable();
        });
        chip.addEventListener("pointerleave", () => {
          state.tablePreviewId = null;
          updateArisingTable();
        });
        cell.append(chip);
      }
      row.append(cell);
    }
    grid.append(row);
  }
  rows.push(grid);
  if (empty.length) {
    const future = createElement("div", "arising-table-future");
    future.append(createElement("strong", "", "Rows without arisings yet:"));
    for (const level of empty) future.append(createElement("span", "", `${level.value} ${level.name}`));
    rows.push(future);
  }
  elements["arising-table"].replaceChildren(...rows);
  if (typeof ResizeObserver === "function") {
    state.tableResize?.disconnect();
    state.tableResize = new ResizeObserver(() => updateArisingTable());
    state.tableResize.observe(grid);
  }
}

/* ---------- Inspector ---------- */

function tag(text, tone) {
  const element = createElement("span", "node-tag", text);
  if (tone) element.dataset.tone = tone;
  return element;
}

function fact(label, value, { wide = false } = {}) {
  const item = createElement("div", wide ? "wide" : "");
  const definition = createElement("dd");
  if (value instanceof Node) definition.append(value);
  else definition.textContent = value;
  item.append(createElement("dt", "", label), definition);
  return item;
}

function actionButton(text, handler, { primary = false, count } = {}) {
  const button = createElement("button", primary ? "primary" : "", text);
  button.type = "button";
  if (count !== undefined) button.append(createElement("small", "", String(count)));
  button.addEventListener("click", handler);
  return button;
}

function renderRelationList(container, nodes, emptyText, rows = null) {
  if (nodes.length === 0) {
    container.replaceChildren(createElement("p", "relation-empty", emptyText));
    return;
  }
  const buttons = nodes.map((node, index) => {
    const button = createElement("button", "relation-item");
    button.type = "button";
    button.title = node.name;
    button.setAttribute("aria-label", `${node.name}. Click to inspect.`);
    button.append(createElement("span", "", node.name));
    const roles = rows?.[index];
    if (roles) button.append(createElement("small", "", roles));
    button.addEventListener("click", () => inspectNode(node.id));
    button.addEventListener("dblclick", () => focusNode(node.id));
    return button;
  });
  container.replaceChildren(...buttons);
}

/** One cause in the inspector: the other arising, and a badge that opens the cause itself. */
function causeRow(edge, endpoint) {
  const id = edge[endpoint];
  const node = nodeSummary(id);
  const row = createElement("div", "relation-row");
  const button = createElement("button", "relation-item");
  button.type = "button";
  button.title = `${arisingCode(id)} ${node?.name ?? ""}`;
  setDomain(button, node);
  const dependency = dependencyName(edge.dependencyType);
  button.append(createElement("code", "", arisingCode(id)), createElement("span", "", node?.name ?? id),
    createElement("small", "", [humanize(edge.necessity, null), dependency].filter(Boolean).join(" \u00b7 ")));
  button.addEventListener("click", () => inspectNode(id));
  button.addEventListener("dblclick", () => focusNode(id));
  const badge = createElement("button", "cause-badge");
  badge.type = "button";
  badge.dataset.role = edge.role;
  badge.dataset.status = edge.status;
  badge.title = `${ROLE_TEXT[edge.role]?.label ?? edge.role} cause, ${RELATION_STATUS_TEXT[edge.status]?.label ?? edge.status}. Open its evidence and obligations.`;
  badge.append(createElement("i"), document.createTextNode(`${(ROLE_TEXT[edge.role]?.label ?? humanize(edge.role)).toLowerCase()}${edge.status === "supported" ? " \u2713" : ""}`));
  badge.addEventListener("click", () => inspectRelation(edge.id));
  row.append(button, badge);
  return row;
}

/** A timeline of the arising-role causes that lead from the root to this arising. */
function renderLineage(node) {
  const panel = elements["lineage-panel"];
  const chain = lineageOf(node.id);
  const list = elements["lineage-list"];
  const root = state.ontology.root;
  if (node.id === root) {
    elements["lineage-summary"].textContent = "Root of the graph";
    list.replaceChildren(createElement("p", "relation-empty", "Every other arising traces back to this one through causes in the arising role."));
    panel.hidden = false;
    return;
  }
  if (chain.length === 0) {
    elements["lineage-summary"].textContent = "Not reached from the root";
    list.replaceChildren(createElement("p", "relation-empty", "No chain of arising-role causes reaches this arising from the root."));
    panel.hidden = false;
    return;
  }
  elements["lineage-summary"].textContent = `${plural(chain.length, "step")} from ${arisingCode(root)}`;
  const steps = [chain[0].source, ...chain.map((edge) => edge.target)];
  list.replaceChildren(...steps.map((id, index) => {
    const step = nodeSummary(id);
    const row = createElement("button", "lineage-step");
    row.type = "button";
    setDomain(row, step);
    if (id === node.id) row.dataset.current = "true";
    row.title = `${arisingCode(id)} ${step?.name ?? id}`;
    const via = index > 0 ? chain[index - 1] : null;
    row.append(createElement("i"), createElement("code", "", arisingCode(id)), createElement("span", "", step?.name ?? id));
    if (via?.status === "supported") {
      const mark = createElement("small", "", "supported");
      mark.title = "The cause from the previous step is supported by published evidence";
      row.append(mark);
    }
    row.addEventListener("click", () => inspectNode(id));
    row.addEventListener("dblclick", () => focusNode(id));
    return row;
  }));
  panel.hidden = false;
}

function renderCauseList(container, edges, endpoint, emptyText, note = null) {
  if (edges.length === 0) {
    container.replaceChildren(note ? createElement("p", "relation-note", note) : createElement("p", "relation-empty", emptyText));
    return;
  }
  container.replaceChildren(...[...edges].sort((left, right) => causeSort(left, right, endpoint)).map((edge) => causeRow(edge, endpoint)));
}

/** Technical relations: the neighbouring record and the declared relation role. */
function renderTechnicalRelations(container, edges, endpoint, emptyText) {
  if (edges.length === 0) {
    container.replaceChildren(createElement("p", "relation-empty", emptyText));
    return;
  }
  const rows = [...edges].sort((left, right) => String(left.role).localeCompare(String(right.role)) || String(left[endpoint]).localeCompare(String(right[endpoint])))
    .map((edge) => {
      const node = nodeSummary(edge[endpoint]);
      const row = createElement("div", "relation-row");
      const button = createElement("button", "relation-item");
      button.type = "button";
      button.title = node?.name ?? "";
      const owner = state.ontology && node?.arisingId ? nodeSummary(node.arisingId) : null;
      const same = owner && owner.id === nodeSummary(state.selectedId)?.arisingId;
      if (owner) setDomain(button, owner);
      const code = createElement("code", "", owner ? arisingCode(owner.id) : "");
      if (same) code.dataset.same = "true";
      code.title = owner ? (same ? "Same arising" : `In ${owner.name}`) : "";
      button.append(code,
        createElement("span", "", node?.name ?? edge[endpoint]),
        createElement("small", "", [humanize(edge.role ?? edge.relationLayer, null), humanize(node?.typeRole, null), owner && !same ? `in ${owner.name}` : null].filter(Boolean).join(" \u00b7 ")));
      button.addEventListener("click", () => inspectNode(edge[endpoint]));
      button.addEventListener("dblclick", () => focusNode(edge[endpoint]));
      const badge = createElement("button", "cause-badge", "relation");
      badge.type = "button";
      badge.title = "Open this relation";
      badge.addEventListener("click", () => inspectRelation(edge.id));
      row.append(button, badge);
      return row;
    });
  container.replaceChildren(...rows);
}

function renderHeader(node) {
  const heading = elements["selected-coordinate"];
  const tags = [];
  heading.replaceChildren();
  delete heading.dataset.domainIndex;
  delete heading.dataset.kind;
  if (isArising(node)) {
    setDomain(heading, node);
    heading.append(createElement("code", "", arisingCode(node.id)), document.createTextNode(`Arising \u00b7 ${humanize(node.typeRole)}`));
    tags.push(tag(humanize(node.scientificStatus), ["established", "well-supported"].includes(node.scientificStatus) ? "good" : "warn"));
    const domain = domainOf(node);
    if (domain) {
      const chip = tag(domain.name, "domain");
      chip.dataset.domainIndex = String(domain.index);
      chip.title = domain.definition ?? domain.name;
      tags.push(chip);
    }
  } else if (state.ontology) {
    const kind = recordKind(node.typeRole);
    heading.dataset.kind = kind;
    heading.append(document.createTextNode(`Technical record \u00b7 ${humanize(node.typeRole)}`));
    if (node.scientificStatus) tags.push(tag(humanize(node.scientificStatus), "status"));
    const owner = nodeSummary(node.arisingId);
    if (owner) {
      const chip = tag(`in ${arisingCode(owner.id)} ${owner.name}`, "link");
      chip.dataset.domainIndex = String(domainOf(owner)?.index ?? "");
      chip.title = "Inspect the arising this record belongs to";
      chip.addEventListener("click", () => inspectNode(owner.id));
      tags.push(chip);
    }
  } else {
    heading.textContent = coordinateText(node);
    tags.push(tag(scalarLabel(node.typeRole), "role"), tag(scalarLabel(node.scientificStatus), "status"));
  }
  elements["selected-tags"].replaceChildren(...tags);
}

function renderActions(node) {
  const actions = [];
  if (isArising(node)) {
    const members = state.ontology.members.get(node.id)?.length ?? 0;
    actions.push(actionButton("Causes graph", () => focusNode(node.id, true, { mode: "causes" }), { primary: state.mode !== "causes" || state.focusId !== node.id }));
    actions.push(actionButton("Subgraph", () => focusNode(node.id, true, { mode: "subgraph" }), { count: members }));
    actions.push(actionButton("In table", () => {
      focusNode(node.id, true, { mode: "table" });
      elements["arising-table"].querySelector(`.arising-chip[data-node-id="${CSS.escape(node.id)}"]`)?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  } else if (state.ontology) {
    if (state.ontology.arisingIds.has(node.arisingId)) {
      actions.push(actionButton("Show in subgraph", () => focusNode(node.id, true, { mode: "subgraph" }), { primary: state.mode !== "subgraph" }));
    }
    actions.push(actionButton("Explore relations", () => focusNode(node.id, true, { mode: "records" })));
  }
  elements["record-actions"].replaceChildren(...actions);
  elements["record-actions"].hidden = actions.length === 0;
}

function renderFacts(node) {
  const facts = [];
  if (isArising(node)) {
    facts.push(fact("Level", levelName(node.level) ? `${node.level} \u00b7 ${levelName(node.level)}` : String(node.level)));
    facts.push(fact("Phase", phaseName(node.phase) ?? String(node.phase)));
    const cluster = clusterOf(node);
    if (cluster) facts.push(fact("Cluster", cluster.name, { wide: true }));
  }
  elements["record-facts"].replaceChildren(...facts);
  elements["record-facts"].hidden = facts.length === 0;
}

function renderInspector() {
  pendingInspection?.abort();
  pendingInspection = null;
  const sequence = ++inspectionSequence;
  if (state.selectedRelationId && state.graphIndex?.edgesById.has(state.selectedRelationId)) {
    renderRelationInspector(state.selectedRelationId, sequence);
    return;
  }
  elements["relation-inspector"].hidden = true;
  elements["record-inspector"].hidden = false;
  const detail = state.presentation.inspect(state.selectedId);
  elements["interaction-cases-panel"].hidden = true;
  elements["interaction-cases-records"].replaceChildren();
  const node = detail.node;
  const arising = isArising(node);
  elements["selected-name"].textContent = node.name;
  elements["lineage-panel"].hidden = true;
  renderHeader(node);
  renderActions(node);
  renderFacts(node);
  elements["selected-summary"].textContent = node.shortDescription || "No short description is declared for this record.";
  elements["parents-total"].textContent = String(detail.relationCounts.parentCount);
  elements["children-total"].textContent = String(detail.relationCounts.childCount);
  if (arising) {
    const causes = state.causes.byChild.get(node.id) ?? [];
    const dependents = state.causes.byParent.get(node.id) ?? [];
    elements["parents-title-label"].textContent = "Arises from";
    elements["children-title-label"].textContent = "Conditions";
    elements["parents-total"].textContent = String(causes.length);
    elements["children-total"].textContent = String(dependents.length);
    renderCauseList(elements["parent-list"], causes, "source", "No cause inside this graph.",
      causes.length === 0 ? state.presentationMetadata.arisingTable?.rootNote : null);
    renderCauseList(elements["child-list"], dependents, "target", "No arising lists this one as a cause.");
    renderLineage(node);
  } else if (state.ontology) {
    const incoming = state.graphIndex.incoming.get(node.id) ?? [];
    const outgoing = state.graphIndex.outgoing.get(node.id) ?? [];
    elements["parents-title-label"].textContent = "Linked from";
    elements["children-title-label"].textContent = "Links to";
    elements["parents-total"].textContent = String(incoming.length);
    elements["children-total"].textContent = String(outgoing.length);
    renderTechnicalRelations(elements["parent-list"], incoming, "source", "No incoming relations.");
    renderTechnicalRelations(elements["child-list"], outgoing, "target", "No outgoing relations.");
  } else {
    elements["parents-title-label"].textContent = state.presentationMetadata.labels.parents;
    elements["children-title-label"].textContent = state.presentationMetadata.labels.children;
    const roles = (nodes, edges, endpoint) => nodes.map((neighbour) => [...new Set(edges.filter((edge) => edge[endpoint] === neighbour.id)
      .map((edge) => edge.role ?? edge.relationLayer).filter(Boolean).map((value) => humanize(value)))].join(", ") || null);
    renderRelationList(elements["parent-list"], detail.relations.parents, "No direct parents in this release.",
      roles(detail.relations.parents, state.graphIndex.incoming.get(node.id) ?? [], "source"));
    renderRelationList(elements["child-list"], detail.relations.children, "No direct children in this release.",
      roles(detail.relations.children, state.graphIndex.outgoing.get(node.id) ?? [], "target"));
  }
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

/** Counts of the records in an arising's subgraph by their declared type role. */
function subgraphComposition(members) {
  const counts = new Map();
  for (const id of members) {
    const node = nodeSummary(id);
    const key = node?.typeRole ?? "record";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  const total = members.length || 1;
  const bars = createElement("div", "kind-bars");
  for (const [role, count] of [...counts].sort((left, right) => right[1] - left[1])) {
    const bar = createElement("div", "kind-bar");
    bar.dataset.kind = recordKind(role);
    const meter = createElement("span", "kind-meter");
    const fill = createElement("i");
    fill.style.width = `${Math.max(4, (count / total) * 100)}%`;
    meter.append(fill);
    bar.append(createElement("span", "", humanize(role)), createElement("small", "", String(count)), meter);
    bars.append(bar);
  }
  return bars;
}

/** Ontological context of the inspected record: an arising with its coverage, subgraph and obligations. */
function renderArising(record) {
  const panel = elements["arising-panel"];
  const box = elements["arising-details"];
  if (record.layer === undefined || record.layer !== state.presentationMetadata?.arisingTable?.layer) {
    panel.hidden = true;
    box.replaceChildren();
    return;
  }
  const completeness = record.completeness ?? { mustCover: [], covered: [] };
  const beyondGraph = Array.isArray(completeness.beyondGraphNames) ? completeness.beyondGraphNames : [];
  const covered = new Set(completeness.covered ?? []);
  const chips = createElement("div", "coverage-chips");
  for (const value of completeness.mustCover ?? []) {
    const name = dependencyName(value) ?? String(value);
    const chip = createElement("span", "", name);
    chip.dataset.state = beyondGraph.includes(name) ? "beyond" : covered.has(value) ? "covered" : "open";
    chip.title = chip.dataset.state === "beyond" ? "Required; its cause lies beyond the graph"
      : chip.dataset.state === "covered" ? "Required and covered by a cause" : "Required and still open";
    chips.append(chip);
  }
  const coverage = createElement("div");
  coverage.append(document.createTextNode(`${(completeness.covered ?? []).length} of ${(completeness.mustCover ?? []).length} required categories covered`), chips);
  elements["record-facts"].append(fact("Evidence in its subgraph", COVERAGE_TEXT[record.evidenceCoverage] ?? humanize(record.evidenceCoverage), { wide: true }),
    fact("Causal requirements", coverage, { wide: true }));
  elements["record-facts"].hidden = false;
  const members = Array.isArray(record.memberIds) ? record.memberIds : [];
  const subgraph = createElement("div", "arising-members");
  subgraph.append(createElement("h5", "", `Technical subgraph \u00b7 ${plural(members.length, "record")}`));
  if (members.length) {
    subgraph.append(subgraphComposition(members));
    subgraph.append(actionButton("Open subgraph", () => focusNode(record.id, true, { mode: "subgraph" })));
  } else {
    subgraph.append(createElement("p", "relation-empty", "No technical records yet."));
  }
  const anchors = (Array.isArray(record.anchorIds) ? record.anchorIds : []).filter((id) => state.nodeNames.has(id));
  if (anchors.length) {
    subgraph.append(createElement("h5", "", "Reviewed topic records"));
    for (const id of anchors.slice(0, 12)) {
      const button = createElement("button", "relation-item");
      button.type = "button";
      button.append(createElement("code", "", humanize(nodeSummary(id)?.typeRole, "")), createElement("span", "", state.nodeNames.get(id) ?? id));
      button.addEventListener("click", () => inspectNode(id));
      button.addEventListener("dblclick", () => focusNode(id));
      subgraph.append(button);
    }
  }
  const obligations = createElement("ul", "arising-obligations");
  for (const text of record.openObligations ?? []) obligations.append(createElement("li", "", text));
  box.replaceChildren(...(obligations.childElementCount ? [createElement("h5", "", "Open obligations"), obligations] : []), subgraph);
  panel.hidden = false;
}

function renderInspectedRecord(record, rationale = record.rationale) {
  renderArising(record);
  const description = typeof record.description === "string" ? record.description : null;
  elements["selected-description"].textContent = description ?? "No full description is declared for this record.";
  elements["description-panel"].hidden = !description || description === record.shortDescription || description === record.summary;
  elements["selected-record"].textContent = JSON.stringify(record, null, 2);
  renderRationale({ ...record, rationale });
  const claims = Array.isArray(rationale) ? rationale.length : 0;
  elements["rationale-panel"].hidden = isArising(record) && claims === 0;
  renderInteractionCases(record);
  document.body.dataset.detailState = "ready";
}

/** Load a relation's exact record and evidence: from a browse chunk or from the full verified pack. */
async function relationDetail(id, signal) {
  if (state.browse?.hasRelationDetail?.(id)) return state.browse.inspectRelation(id, { signal });
  const dictionaries = state.pack?.files?.["model/dictionaries.json"];
  const relation = (state.pack?.files?.["model/edges.json"] ?? []).find((edge) => edge.id === id)
    ?? state.graphIndex.edgesById.get(id);
  const claimsById = new Map((Array.isArray(dictionaries?.claims) ? dictionaries.claims : []).map((claim) => [claim.id, claim]));
  const claims = (Array.isArray(relation?.claimIds) ? relation.claimIds : []).map((claimId) => claimsById.get(claimId)).filter(Boolean);
  const holder = { rationale: claims };
  const context = dictionaries ? recordEvidenceContext([holder], dictionaries) : null;
  return { relation, rationale: resolveRecordEvidence(holder, context) };
}

function routeButton(id) {
  const node = nodeSummary(id);
  const button = createElement("button", "relation-item");
  button.type = "button";
  setDomain(button, node);
  button.append(createElement("code", "", isArising(node) ? arisingCode(id) : humanize(node?.typeRole, "")), createElement("span", "", node?.name ?? id));
  button.title = node?.name ?? "";
  button.addEventListener("click", () => inspectNode(id));
  button.addEventListener("dblclick", () => focusNode(id));
  return button;
}

/** A cause (or any declared relation) with its meaning, evidence and obligations. */
function renderRelationInspector(id, sequence) {
  const edge = state.graphIndex.edgesById.get(id);
  const container = elements["relation-inspector"];
  elements["record-inspector"].hidden = true;
  container.hidden = false;
  const causal = isCauseEdge(edge);
  const heading = createElement("div", "node-heading");
  const kicker = createElement("p", "", causal ? `${ROLE_TEXT[edge.role]?.label ?? humanize(edge.role)} cause` : "Relation");
  const source = nodeSummary(edge.source);
  const target = nodeSummary(edge.target);
  heading.append(kicker, createElement("h3", "", `${source?.name ?? edge.source} \u2192 ${target?.name ?? edge.target}`));
  const tags = createElement("div", "tag-row");
  if (causal) {
    tags.append(tag(RELATION_STATUS_TEXT[edge.status]?.label ?? humanize(edge.status), edge.status === "supported" ? "good" : "warn"),
      tag(humanize(edge.necessity), "status"));
    const dependency = dependencyName(edge.dependencyType);
    if (dependency) tags.append(tag(dependency, "muted"));
  } else {
    tags.append(tag(humanize(edge.role ?? edge.relationLayer), "role"), tag(humanize(edge.relationLayer), "muted"));
  }
  heading.append(tags);
  const routeBox = createElement("div", "relation-inspector-route");
  routeBox.append(routeButton(edge.source), createElement("span", "route-arrow", causal ? "\u2193 conditions" : "\u2193"), routeButton(edge.target));
  const facts = createElement("dl", "fact-grid");
  if (causal) {
    facts.append(fact("Role", ROLE_TEXT[edge.role]?.meaning ?? humanize(edge.role), { wide: true }),
      fact("Status", RELATION_STATUS_TEXT[edge.status]?.meaning ?? humanize(edge.status), { wide: true }));
  } else if (edge.assertion) {
    facts.append(fact("Assertion", edge.assertion, { wide: true }));
  }
  const detailFacts = createElement("dl", "fact-grid");
  detailFacts.hidden = true;
  const evidence = createElement("div", "relation-evidence");
  evidence.append(createElement("p", "relation-empty", "Loading evidence..."));
  const obligations = createElement("div");
  const raw = createElement("details", "record-details raw-record");
  raw.append(createElement("summary", "", "Raw record"));
  const pre = createElement("pre", "", JSON.stringify(edge, null, 2));
  raw.append(pre);
  const back = createElement("div", "record-actions");
  back.append(actionButton(`Back to ${nodeSummary(state.selectedId)?.name ?? "record"}`, () => inspectNode(state.selectedId ?? edge.target)));
  const evidenceHeader = createElement("div", "relation-section");
  const header = createElement("header");
  header.append(createElement("h4", "", "Evidence"), createElement("span", "", "..."));
  evidenceHeader.append(header);
  container.replaceChildren(heading, back, routeBox, facts, detailFacts, evidenceHeader, evidence, obligations, raw);
  const controller = new AbortController();
  pendingInspection = controller;
  document.body.dataset.detailState = "loading";
  relationDetail(id, controller.signal).then(({ relation, rationale }) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    const record = relation ?? edge;
    pre.textContent = JSON.stringify(record, null, 2);
    const extra = [];
    const table = state.presentationMetadata?.arisingTable;
    if (Array.isArray(record.causalDirections) && record.causalDirections.length) {
      extra.push(fact("Causal direction", record.causalDirections.map((value) => table?.causalDirections.get(value) ?? String(value)).join(", ")));
    }
    if (Array.isArray(record.interactionModes) && record.interactionModes.length) {
      extra.push(fact("Interaction mode", record.interactionModes.map((value) => table?.interactionModes.get(value) ?? String(value)).join(", ")));
    }
    if (record.carrier && typeof record.carrier === "object") {
      const carrier = record.carrier;
      const declared = carrier.group !== null && carrier.group !== undefined;
      extra.push(fact("Carrier", declared ? `Group ${carrier.group}, type ${scalarLabel(carrier.type, "not declared")}` : "Not declared"));
    }
    if (causal) extra.push(fact("Weight", record.weight === null || record.weight === undefined ? "Not quantified" : String(record.weight)));
    detailFacts.replaceChildren(...extra);
    detailFacts.hidden = extra.length === 0;
    header.lastChild.textContent = String(rationale.length);
    if (rationale.length) renderRationale({ rationale }, evidence);
    else evidence.replaceChildren(createElement("p", "empty-state", causal
      ? "No published evidence is attached yet. The cause remains the catalogue's hypothesis until a study or model shows the dependency in the stated role."
      : "This relation cites no separate claim; its records carry the evidence."));
    const open = Array.isArray(record.openObligations) ? record.openObligations : [];
    if (open.length) {
      const list = createElement("ul", "arising-obligations");
      for (const text of open) list.append(createElement("li", "", text));
      obligations.replaceChildren(createElement("h5", "", "Open obligations"), list);
    }
    document.body.dataset.detailState = "ready";
  }).catch((error) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    document.body.dataset.detailState = "error";
    const retry = createElement("button", "", "Retry");
    retry.type = "button";
    retry.addEventListener("click", renderInspector, { once: true });
    evidence.replaceChildren(createElement("p", "relation-empty", `Could not verify the relation: ${error.message}`), retry);
  });
}

function renderInteractionCases(record) {
  const cases = Array.isArray(record.interactionCases) ? record.interactionCases : [];
  const references = Array.isArray(record.interactionCaseRefs) ? record.interactionCaseRefs : [];
  const analogies = Array.isArray(record.interactionAnalogies) ? record.interactionAnalogies : [];
  const sections = [];
  const anchorButton = (reference) => {
    const button = createElement("button", "relation-item", reference.title ?? "Case anchor");
    button.type = "button";
    button.title = "Open the case anchor with its interaction properties";
    button.addEventListener("click", () => focusNode(reference.anchorEntityId));
    return button;
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
      section.append(property);
    }
    for (const observation of interaction.observations ?? []) {
      const finding = createElement("details");
      finding.append(createElement("summary", "", `Finding: ${observation.kind}`));
      finding.append(createElement("p", "", observation.statement));
      section.append(finding);
    }
    const sources = new Map((interaction.sources ?? []).map((source) => [source.id, source]));
    const studies = new Map((interaction.studies ?? []).map((study) => [study.id, study]));
    for (const claim of interaction.claims ?? []) {
      const support = createElement("details");
      support.append(createElement("summary", "", `Evidence: ${typeof claim.status === "string" ? claim.status.replace(/-/g, " ") : "claim"}`));
      support.append(createElement("p", "", claim.statement));
      if (claim.scope) support.append(createElement("p", "", `Scope: ${claim.scope}`));
      for (const id of claim.contextIds ?? []) {
        const study = studies.get(id);
        if (!study) continue;
        support.append(createElement("p", "", `Study: ${study.preparation}`));
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
    const compared = (analogy.cases ?? []).map((reference) => reference.title).filter(Boolean);
    section.append(createElement("summary", "", compared.length ? `Proposed comparison with ${compared.join(", ")}` : "Proposed comparison"));
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

function renderRationale(record, container = elements["selected-rationale"]) {
  const items = Array.isArray(record.rationale) ? record.rationale : [];
  const sections = items.map((claim) => {
    const section = createElement("section");
    const reviewedSources = new Set();
    const status = typeof claim.status === "string" ? claim.status.replace(/-/g, " ") : "Claim";
    section.append(createElement("h5", "", status.charAt(0).toUpperCase() + status.slice(1)));
    section.append(createElement("p", "", claim.statement));
    section.append(createElement("p", "", `Scope: ${claim.scope}`));
    for (const experiment of Array.isArray(claim.experimentalContexts) ? claim.experimentalContexts : []) {
      const context = createElement("details");
      context.append(createElement("summary", "", `Experimental comparison: ${experiment.cellType}`));
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
      const design = studyDesignLabel(study);
      context.append(createElement("summary", "", `Study context: ${subject ?? design ?? "preparation"}`));
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

/* ---------- Guide and release ---------- */

function guideSection(title, ...children) {
  const section = createElement("section");
  section.append(createElement("h3", "", title), ...children);
  return section;
}

function guideCard(title, text, { domainIndex, line } = {}) {
  const card = createElement("div", "guide-card");
  if (domainIndex !== undefined) card.dataset.domainIndex = String(domainIndex);
  const heading = createElement("strong");
  if (line) heading.append(line);
  heading.append(document.createTextNode(title));
  card.append(heading);
  if (text) card.append(createElement("p", "", text));
  return card;
}

/** The guide explains the views from the release's own presentation metadata and declarations. */
function renderGuide() {
  const content = elements["guide-content"];
  const sections = [];
  const table = state.presentationMetadata?.arisingTable;
  const declarations = state.browse?.declarations ?? state.pack?.files?.["model/dictionaries.json"]?.arisingDeclarations ?? null;
  if (state.ontology && table) {
    const counts = `${state.ontology.arisings.length} arisings joined by ${state.ontology.causes.length} causes; ${state.graphIndex.nodesById.size - state.ontology.arisings.length} technical records inside them.`;
    sections.push(guideSection("What you are looking at",
      createElement("p", "", "Each main node is an arising: an object, process, pattern, property or effect that arises from earlier interactions. Each edge between arisings is a cause. Everything else is a technical record in the subgraph of exactly one arising: what the arising is and how it is known."),
      createElement("p", "", counts),
      ...(Array.isArray(declarations?.principles) ? declarations.principles.filter((entry) => typeof entry?.statement === "string")
        .map((entry) => createElement("blockquote", "", entry.statement)) : []),
      ...(table.rootNote ? [createElement("p", "", table.rootNote)] : [])));
    const viewGrid = createElement("div", "guide-grid guide-views");
    viewGrid.append(
      guideCard("1 \u00b7 Table", "Levels of complexity by phases, like the opening of a periodic table. Hover or select an arising to draw its causes and dependents across the table."),
      guideCard("2 \u00b7 Causes", "The focused arising in the centre, its causes to the left and the arisings it conditions to the right. Depth adds further steps."),
      guideCard("3 \u00b7 Subgraph", "The technical records of the focused arising: contexts, findings, definitions and hypotheses, with dashed records borrowed from other arisings."),
      guideCard("4 \u00b7 Records", "The relations of any single record across subgraphs, with the release's lenses and interaction cases."));
    sections.push(guideSection("Four views", viewGrid));
    const axes = createElement("div");
    const levels = createElement("div", "guide-axis");
    for (const level of table.levels) {
      const chip = createElement("span", "", `${level.value} ${level.name}`);
      chip.dataset.empty = String(!state.ontology.arisings.some((node) => node.level === level.value));
      levels.append(chip);
    }
    const phases = createElement("div", "guide-axis");
    for (const phase of table.phases) phases.append(createElement("span", "", phase.name));
    axes.append(createElement("p", "", "Rows are complexity levels; dashed rows have no arisings yet and remain predictions of the table."), levels,
      createElement("p", "", "Columns are the phases within a level:"), phases);
    sections.push(guideSection("Levels and phases", axes));
    const domains = createElement("div", "guide-grid");
    for (const domain of table.domains.values()) domains.append(guideCard(domain.name, domain.definition, { domainIndex: domain.index }));
    sections.push(guideSection("Domains", createElement("p", "", "A domain is a band of clusters on adjacent levels that one lineage of arising causes runs through. Its colour marks cards, chips and the navigator."), domains));
    const roles = createElement("div", "guide-grid");
    for (const role of CAUSE_ROLES) {
      const line = createElement("i", "legend-line");
      line.dataset.role = role;
      roles.append(guideCard(ROLE_TEXT[role].label, ROLE_TEXT[role].meaning, { line }));
    }
    for (const status of ["supported", "author-hypothesis"]) {
      const line = createElement("i", "legend-line");
      if (status === "supported") line.dataset.status = "supported";
      roles.append(guideCard(RELATION_STATUS_TEXT[status].label, RELATION_STATUS_TEXT[status].meaning, { line }));
    }
    roles.append(guideCard("Line width", "Necessary causes are drawn thickest, then enabling, contextual and optional ones."));
    sections.push(guideSection("Reading a cause", createElement("p", "", "The line style shows the role of a cause and its colour shows its evidence status. Click any cause, in a graph or in the inspector, to read its evidence and open obligations."), roles));
    const cards = createElement("div", "guide-grid");
    const solid = createElement("i", "legend-card");
    const dashed = createElement("i", "legend-card");
    dashed.dataset.style = "dashed";
    const dotted = createElement("i", "legend-card");
    dotted.dataset.style = "dotted";
    const reached = state.ontology.predecessor.size + (state.ontology.root ? 1 : 0);
    cards.append(guideCard("Lineage from the root", `The shortest chain of causes in the arising role that leads from the root to an arising. ${reached} of ${state.ontology.arisings.length} arisings are reached this way. The inspector lists it; the table can draw it.`),
      guideCard("Established or well-supported", "Solid border: the author's scientific status of the arising.", { line: solid }),
      guideCard("Hypothesized or speculative", "Dashed border.", { line: dashed }),
      guideCard("Methodological placeholder", "Dotted border: the observable or formal test that would instantiate it is still to be specified.", { line: dotted }));
    sections.push(guideSection("Reading an arising", cards));
  } else {
    sections.push(guideSection("What you are looking at",
      createElement("p", "", "A verified neighbourhood of the selected record: its parents to the left, the record in the centre and its children to the right. Arrowheads point from source to target."),
      createElement("p", "", state.presentationMetadata?.boundary.summary ?? "")));
  }
  const keys = createElement("dl", "guide-keys");
  for (const [key, text] of [
    ["Click", "Inspect a record or a relation"], ["Double-click", "Focus it (in the table: open its causes)"],
    ["Drag, scroll", "Pan the graph"], ["Ctrl or Cmd + scroll, pinch", "Zoom around the pointer"],
    ["+  -  0", "Zoom in, zoom out, fit"], ["/", "Search"], ...(state.ontology ? [["1  2  3  4", "Table, Causes, Subgraph, Records"]] : []),
    ["Alt + Left", "Back to the previous focus (browser history)"], ["?", "This guide"]
  ]) keys.append(createElement("dt", "", key), createElement("dd", "", text));
  sections.push(guideSection("Navigation", keys));
  content.replaceChildren(...sections);
}

function renderReleaseFacts() {
  const verifier = document.body.dataset.verifier;
  const parts = [
    verifier === "projection-sha256" ? "Browse projection verified by SHA-256; record details verified when opened"
      : verifier === "worker" ? "Full Model Pack verified in a worker"
        : verifier === "main-thread-fallback" ? "Full Model Pack verified on the main thread"
          : state.modelSource === "local-rdf" ? "Local RDF mapping verified" : "Verified",
    document.body.dataset.registry ? `registry ${document.body.dataset.registry}` : null,
    document.body.dataset.cache && document.body.dataset.cache !== "http" ? `cache ${document.body.dataset.cache}` : null
  ].filter(Boolean);
  elements["verification-state"].textContent = parts.join("; ");
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
}

/* ---------- Release panels ---------- */

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

function configureFacet(filterId, entries, allLabel, label, format) {
  populateSelect(elements[filterId], entries, allLabel, format);
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

/** Topology indexes, the ontology and its navigator for a newly activated release. */
function configureOntology(metadata, nodes, edges, identity, declarations = null) {
  state.graphIndex = buildGraphIndex(nodes, edges);
  const rootCode = typeof declarations?.root?.code === "string" ? declarations.root.code : null;
  state.ontology = metadata.arisingTable && nodes.some((node) => node.layer === metadata.arisingTable.layer)
    ? buildOntologyIndex(nodes, edges, metadata.arisingTable, rootCode ? `arising:${rootCode}` : null) : null;
  // Causes are indexed once for the inspector, the table and the lineage.
  const byChild = new Map();
  const byParent = new Map();
  for (const edge of state.ontology?.causes ?? edges.filter((candidate) => candidate.relationLayer === "causal")) {
    if (!byChild.has(edge.target)) byChild.set(edge.target, []);
    if (!byParent.has(edge.source)) byParent.set(edge.source, []);
    byChild.get(edge.target).push(edge);
    byParent.get(edge.source).push(edge);
  }
  state.causes = { byChild, byParent };
  state.graphInputForRoles = { identity, nodes, edges };
  state.rolePresentations = new Map();
  state.roleFilter = new Set(CAUSE_ROLES);
  state.treeFor = null;
  state.treeExpanded = new Set(state.ontology ? [...metadata.arisingTable.domains.keys()].map((value) => `domain:${value}`) : []);
  state.tablePreviewId = null;
  elements["ontology-tree"].replaceChildren();
  document.body.dataset.ontology = String(Boolean(state.ontology));
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
  const topologyNodes = options.browse?.graphInput?.nodes ?? pack.files?.["model/nodes.json"] ?? [];
  const topologyEdges = options.browse?.graphInput?.edges ?? pack.files?.["model/edges.json"] ?? [];
  state.nodeNames = new Map(topologyNodes.map((node) => [node.id, node.name]));
  const declarations = options.browse?.declarations ?? pack.files?.["model/dictionaries.json"]?.arisingDeclarations ?? null;
  configureOntology(metadata, topologyNodes, topologyEdges, interactionGraphInput.identity ?? descriptor.identity, declarations);
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
  state.selectedRelationId = null;
  document.body.dataset.interactionViews = String(Boolean(interactionViews));
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
    : { focusId: defaultFocusId(presentation, metadata), depth: 1, direction: "both", mode: null };
  applyRequestedFocus(requested);
  state.depth = requested.depth;
  state.direction = requested.direction;
  if (interactionViews && options.useLocation === true) restoreInteractionLocationState(requested.focusId);
  elements["window-model-id"].textContent = manifest.model.name ?? manifest.model.id;
  elements["model-version-chip"].textContent = manifest.model.version;
  elements["model-name"].textContent = manifest.model.name;
  elements["model-version"].textContent = manifest.model.version;
  elements["node-count"].textContent = String(descriptor.statistics.nodeCount);
  elements["edge-count"].textContent = String(descriptor.statistics.edgeCount);
  elements["root-hash"].textContent = manifest.rootHash ?? "not available";
  elements["root-hash"].title = manifest.rootHash ?? "";
  elements["records-title-label"].textContent = metadata.labels.catalogTitle;
  elements["catalog-search"].placeholder = metadata.labels.searchPlaceholder;
  elements["parents-title-label"].textContent = metadata.labels.parents;
  elements["children-title-label"].textContent = metadata.labels.children;
  elements["model-boundary-title"].textContent = metadata.boundary.title;
  elements["model-boundary-summary"].textContent = metadata.boundary.summary;
  elements["model-boundary-note"].textContent = metadata.boundary.note;
  configureReviewPanels(pack, state.browse);
  configureFacet("layer-filter", descriptor.facets.layers ?? [], "All layers", metadata.labels.layerFilter, (value) => humanize(value));
  // An ontology opens on its navigator tree; a release without one may still open on a declared layer.
  elements["layer-filter"].value = state.ontology ? "" : defaultLayerValue(presentation, metadata);
  configureFacet("level-filter", descriptor.facets.levels, "All levels", metadata.labels.levelFilter,
    (value) => (state.ontology && levelName(value) ? `${value} ${levelName(value)}` : String(value)));
  configureFacet("role-filter", descriptor.facets.typeRoles, "All types", metadata.labels.typeFilter, (value) => humanize(value));
  configureFacet("phase-filter", descriptor.facets.phases, "All phases", metadata.labels.phaseFilter,
    (value) => (state.ontology && phaseName(value) ? phaseName(value) : String(value)));
  configureFacet("status-filter", descriptor.facets.scientificStatuses, "All statuses", metadata.labels.statusFilter, (value) => humanize(value));
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
  renderGuide();
  renderReleaseFacts();
  if (!eventsBound) {
    bindEvents();
    eventsBound = true;
  }
}

/** Resolve a requested focus into the focus, selection and view of the active release. */
function applyRequestedFocus(requested) {
  const id = requested.focusId;
  state.selectedRelationId = null;
  if (!state.ontology) {
    state.mode = "graph";
    state.focusId = id;
    state.recordFocusId = null;
    state.selectedId = id;
    return;
  }
  const node = nodeSummary(id);
  const mode = ONTOLOGY_MODES.includes(requested.mode) ? requested.mode : null;
  if (isArising(node)) {
    state.focusId = id;
    state.recordFocusId = mode === "records" ? id : null;
    state.mode = mode ?? "table";
  } else {
    const owner = node?.arisingId && state.ontology.arisingIds.has(node.arisingId) ? node.arisingId : null;
    state.focusId = owner ?? state.ontology.root ?? state.ontology.arisings[0]?.id ?? id;
    state.recordFocusId = id;
    state.mode = mode === "records" || !owner ? "records" : "subgraph";
  }
  state.selectedId = id;
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
  const requested = requestedWorkspaceState(
    parameters,
    identity,
    (id) => presentation.has(id),
    defaultFocusId(presentation, metadata)
  );
  const sameModel = parameters.get("model") === identity.modelId && parameters.get("version") === identity.version;
  const mode = sameModel ? parameters.get("mode") : null;
  return { ...requested, mode: ONTOLOGY_MODES.includes(mode) ? mode : null };
}

function replaceLocationState({ push = false } = {}) {
  const identity = state.selection ?? {
    modelId: state.manifest.model.id,
    version: state.manifest.model.version
  };
  const focus = state.mode === "records" ? (state.recordFocusId ?? state.focusId)
    : state.mode === "subgraph" && state.recordFocusId && state.selectedId === state.recordFocusId ? state.recordFocusId
      : state.focusId;
  const parameters = new URLSearchParams({
    model: identity.modelId,
    version: identity.version,
    node: focus,
    depth: String(state.depth),
    direction: state.direction
  });
  if (state.ontology) parameters.set("mode", state.mode);
  if (state.interactionPerspectiveId) parameters.set("view", state.interactionPerspectiveId);
  if (state.interactionCaseId) parameters.set("case", state.interactionCaseId);
  const nextHash = parameters.toString();
  if (location.hash.slice(1) === nextHash) return;
  if (push && location.hash.length > 1) history.pushState(null, "", `#${nextHash}`);
  else history.replaceState(null, "", `#${nextHash}`);
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
  if (requested.mode && state.ontology) state.mode = requested.mode;
  focusNode(requested.focusId, false, { mode: state.ontology ? state.mode : undefined });
}

/** Collapse or restore a side panel; the graph refits to the space it gains. */
function togglePanel(side) {
  const key = side === "navigator" ? "navigatorCollapsed" : "inspectorCollapsed";
  const collapsed = document.body.dataset[key] !== "true";
  document.body.dataset[key] = String(collapsed);
  const button = elements[`${side}-toggle`];
  button.setAttribute("aria-expanded", String(!collapsed));
  button.title = `${collapsed ? "Show" : "Hide"} the ${side} (${side === "navigator" ? "[" : "]"})`;
  requestAnimationFrame(() => {
    if (state.mode === "table") updateArisingTable();
    else fitGraph();
  });
}

function isTyping(target) {
  return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName));
}

function bindEvents() {
  window.addEventListener("resize", () => {
    if (!state.presentation || state.mode === "table") return;
    if (state.interactionCaseId && ["records", "graph"].includes(state.mode)) renderGraph();
    else fitGraph();
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
        const focusId = state.mode === "records" ? state.recordFocusId : state.focusId;
        if (selection.memberNodeIds.length && !selection.memberNodeIds.includes(focusId)) {
          focusNode(selection.memberNodeIds[0]);
        } else render();
      } else render();
      replaceLocationState();
    });
  }
  for (const id of ["catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter", "status-filter", "catalog-sort"]) {
    const eventName = id === "catalog-search" ? "input" : "change";
    elements[id].addEventListener(eventName, () => renderCatalog({ reset: true }));
  }
  elements["catalog-search"].addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      elements["catalog-search"].value = "";
      renderCatalog({ reset: true });
    }
    if (event.key === "Enter") {
      const first = elements["catalog-list"].querySelector("[data-node-id]");
      if (first) {
        event.preventDefault();
        focusNode(first.dataset.nodeId);
      }
    }
  });
  elements["catalog-more"].addEventListener("click", () => renderCatalog({ loadMore: true }));
  elements["navigator-group"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");
    if (!button || state.navigatorGroup === button.dataset.group) return;
    state.navigatorGroup = button.dataset.group;
    state.treeExpanded = new Set(state.navigatorGroup === "domain"
      ? [...state.presentationMetadata.arisingTable.domains.keys()].map((value) => `domain:${value}`)
      : state.presentationMetadata.arisingTable.levels.map((level) => `level:${level.value}`));
    state.treeFor = null;
    renderCatalog();
  });
  elements["view-tabs"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (button) setMode(button.dataset.mode);
  });
  elements["direction-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-direction]");
    if (!button) return;
    state.direction = button.dataset.direction;
    renderView();
    updateControls();
    replaceLocationState();
  });
  elements["depth-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-depth]");
    if (!button) return;
    state.depth = Number(button.dataset.depth);
    renderView();
    updateControls();
    replaceLocationState();
  });
  elements["role-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-role]");
    if (!button) return;
    const role = button.dataset.role;
    if (state.roleFilter.has(role)) state.roleFilter.delete(role);
    else state.roleFilter.add(role);
    if (state.roleFilter.size === 0) state.roleFilter.add(role);
    renderView();
    updateControls();
  });
  elements["zoom-controls"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-zoom]");
    if (!button || !graphViewport) return;
    if (button.dataset.zoom === "in") graphViewport.zoomBy(1.25);
    else if (button.dataset.zoom === "out") graphViewport.zoomBy(0.8);
    else fitGraph();
  });
  elements["neighborhood-graph"].addEventListener("dblclick", (event) => {
    if (!event.target.closest(".graph-node, .graph-edge")) fitGraph();
  });
  elements["reset-view"].addEventListener("click", () => {
    elements["catalog-search"].value = "";
    for (const id of ["level-filter", "role-filter", "phase-filter", "status-filter"]) elements[id].value = "";
    elements["layer-filter"].value = state.ontology ? "" : defaultLayerValue();
    state.domainFilter = null;
    elements["catalog-sort"].value = "id:asc";
    state.direction = "both";
    state.depth = 1;
    state.roleFilter = new Set(CAUSE_ROLES);
    state.catalog.key = null;
    state.interactionPerspectiveId = "";
    state.interactionCaseId = "";
    elements["interaction-perspective"].value = "";
    elements["interaction-case"].value = "";
    focusNode(defaultFocusId(), true, { mode: state.ontology ? "table" : undefined });
  });
  for (const [button, side] of [[elements["navigator-toggle"], "navigator"], [elements["inspector-toggle"], "inspector"]]) {
    button.addEventListener("click", () => togglePanel(side));
  }
  elements["guide-open"].addEventListener("click", () => openDialog(elements["guide-dialog"]));
  elements["release-open"].addEventListener("click", () => openDialog(elements["release-dialog"]));
  for (const dialog of [elements["guide-dialog"], elements["release-dialog"]]) {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-close-dialog]")) dialog.close();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)
      || document.querySelector("dialog[open]") || !state.presentation) return;
    const key = event.key;
    if (key === "/") {
      event.preventDefault();
      elements["catalog-search"].focus();
      elements["catalog-search"].select();
    } else if (key === "?") {
      openDialog(elements["guide-dialog"]);
    } else if (state.ontology && ["1", "2", "3", "4"].includes(key)) {
      setMode(ONTOLOGY_MODES[Number(key) - 1]);
    } else if ((key === "+" || key === "=") && graphViewport && state.mode !== "table") {
      graphViewport.zoomBy(1.25);
    } else if (key === "-" && graphViewport && state.mode !== "table") {
      graphViewport.zoomBy(0.8);
    } else if (key === "0" && state.mode !== "table") {
      fitGraph();
    } else if (key === "[") {
      togglePanel("navigator");
    } else if (key === "]") {
      togglePanel("inspector");
    }
  });
  elements["rdf-import-open"].addEventListener("click", () => {
    setImportStatus("");
    elements["release-dialog"].close();
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
      elements["release-dialog"].close();
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
