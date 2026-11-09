import {
  loadModelPackBundle,
  loadModelPackHttpDirectory
} from "../../packages/model-pack/src/browser.js?v=20261109.1";
import {
  createIndexedDbModelPackCacheStorage,
  createVerifiedModelPackCache
} from "../../packages/model-pack/src/cache.js?v=20261109.1";
import {
  loadModelPackRegistryHttp,
  matchModelPackRegistryResolution,
  resolveModelPackRegistry
} from "../../packages/model-pack/src/registry.js?v=20261109.1";
import { createModelPackWorkerClient } from "../../packages/model-pack/src/worker.js?v=20261109.1";
import { RDF_IMPORT_LIMITS, importNTriples } from "../../packages/rdf-import/src/index.js?v=20261109.1";
import {
  buildRdfMappedModelPack,
  verifyRdfMappingPolicy
} from "../../packages/rdf-mapping/src/index.js?v=20261109.1";
import { validateShacl } from "../../packages/shacl-validation/src/index.js?v=20261109.1";
import { createVerifiedModelPresentation } from "../../packages/engine/src/presentation.js?v=20261109.1";
import { wrapGraphNodeLabel } from "../../packages/view/src/index.js?v=20261109.1";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { graphHighlight } from "./graph-interactions.js?v=20261109.1";
import { causalOrderLayers, columnHeadingY, layoutLayeredGraph, longestPathLayers, neighbourhoodLayers } from "./graph-layout.js?v=20261109.1";
import { PAPER_CLASS, buildExportSvg, downloadBlob, exportFileName, pngScale, svgToPngBlob } from "./graph-export.js?v=20261109.1";
import { EXPANSION_LIMITS, expandGraph, reachableWithin, relationToFocus } from "./graph-expansion.js?v=20261109.1";
import { connection, matchNames } from "./graph-paths.js?v=20261109.1";
import { createGraphViewport } from "./graph-viewport.js?v=20261109.1";
import { interactionViewCatalog, selectInteractionGraph, interactionCaseOverview, layoutIsolatedCaseCards, casesByArising } from "./interaction-views.js?v=20261109.1";
import { citationLinks, resolveClaimCitations } from "./evidence-links.js?v=20261109.1";
import { recordEvidenceContext, resolveRecordEvidence } from "./record-evidence.js?v=20261109.1";
import { plainFailure, plainLocator, plainProse, plainSlug, readingExtent, recordCatalogEntry, recordDisplayName, slugWords } from "./plain-text.js?v=20261109.1";
import { arisingFactsFromNodes, carrierReading, termDefinition, termDefinitions, typeRoleDefinition, usedDisciplines } from "./arising-facts.js?v=20261109.1";
import { evidenceTint, fitNamesColumns, fitTableMap, levelRangeText, shortDomainName, tableMapRows, tileGap } from "./table-map.js?v=20261109.1";
import { citesEvidence, openWork } from "./open-work.js?v=20261109.1";
import { arrowDirection, firstCard, nearestInDirection, nextInCycle, orderedCardLines, rovingEntry, rovingStep, treeKeyAction } from "./keyboard-nav.js?v=20261109.1";
import { holdInspectorOpen, inspectorHeldOpen, loadPreferences, savePreference } from "./preferences.js?v=20261109.1";
import { loadBrowseModel } from "./browse-data.js?v=20261109.1";
import {
  addressNeedsVersion,
  modelSelectionKey,
  modelSelectionLabel,
  namesUnknownModel,
  registryEntryForKey,
  requestedRegistryEntry,
  requestedWorkspaceState
} from "./model-selection.js?v=20261109.1";

const MODEL_REGISTRY_URL = new URL("../../models/registry.json", import.meta.url);
const DEFAULT_MODEL_SELECTION = Object.freeze({ modelId: "causal-emergence", version: "2026.11.08.0" });
const MODEL_PACK_WORKER_URL = new URL(
  "../../assets/js/model-pack-worker.js?v=20261109.1",
  import.meta.url
);
const EXPECTED_REGISTRY_HASH = "sha256:59ad68cad0bfe571978c549746225b62afd06d76537196c453dcd04a815ffa04";
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
// A pill rides above the card's top edge, clear of a first line that fills the card and of the card above (16 away at least).
const PILL_LIFT = 5;
const CARD_FOOTER = Object.freeze({ area: 24, lineHeight: 15, gap: 8 });
const CATALOG_PAGE_SIZE = 60;
const TABLE_CHIP = Object.freeze({ width: 128, chrome: 18, cellChrome: 10 });
// The Map density's fixed sizes; the rules of `.arising-table[data-density="map"]` hold the same numbers.
const TABLE_MAP = Object.freeze({ labelWidth: 112, headHeight: 22, columnGap: 4, rowGap: 4, cellChrome: 8, minRowHeight: 32, minTile: 10, maxTile: 40, headChrome: 12, bareWidth: 700 });
const MAX_POLICY_BYTES = 512 * 1024;
const LOCAL_MODEL_OPTION = "local-rdf";
const ONTOLOGY_MODES = Object.freeze(["table", "causes", "subgraph", "records", "work"]);
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
  "author-hypothesis": Object.freeze({ label: "Author hypothesis", meaning: "The author's proposal; it stays an open obligation until evidence is added." })
});
const NECESSITY_ORDER = Object.freeze({ necessary: 0, enabling: 1, contextual: 2, optional: 3 });
const WORK_PAGE = 100;
const WORK_SECTIONS = Object.freeze([
  Object.freeze({ key: "causes", label: "Causes without evidence", note: "Each of these causes is still the author's proposal. A study or a model that shows the dependency in its stated role would give it evidence." }),
  Object.freeze({ key: "categories", label: "Open categories", note: "An arising needs a cause in each of its required categories, such as a substrate or a boundary. These categories have no cause yet." }),
  Object.freeze({ key: "unsupported", label: "No supported cause", note: "None of the causes of these arisings cites evidence yet. The status describes the phenomenon, not its causes: an established arising can still wait for its causes to be reviewed." }),
  Object.freeze({ key: "obligations", label: "Arising obligations", note: "What is still to be done for these arisings, as the release states it." })
]);
const COVERAGE_TEXT = Object.freeze({
  "published-findings": "Published findings",
  "formal-or-computational": "Formal or computational records",
  "author-definitions": "Author definitions only",
  none: "No records yet"
});

const ids = [
  "model-selector", "model-name", "model-version", "node-count", "edge-count", "root-hash", "load-state",
  "catalog-count", "catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter",
  "status-filter", "catalog-sort", "catalog-sort-default", "catalog-list", "catalog-empty", "catalog-empty-hint", "graph-title",
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
  "layer-filter-control", "layer-filter-label", "discipline-filter", "discipline-filter-control", "discipline-filter-label", "arising-table-panel", "arising-table", "open-work-panel", "selected-evidence", "arising-panel", "arising-details",
  "studio", "source-readiness-panel", "source-readiness-summary",
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
  "interaction-cases-panel", "interaction-cases-records", "arising-cases-panel", "arising-cases", "inspector-content",
  "view-tabs", "release-open", "release-dialog", "guide-open", "guide-dialog", "guide-content", "model-version-chip",
  "verification-state", "navigator-group", "filter-count", "ontology-tree", "graph-viewport",
  "graph-columns", "graph-legend", "stage-legend", "zoom-controls", "graph-subtitle", "graph-hint", "graph-keys", "role-controls",
  "export-toggle", "export-menu", "export-status",
  "causal-order", "direction-parents-label", "direction-children-label", "record-inspector", "relation-inspector", "record-actions", "record-failure",
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
  attempted: null,
  loadMessage: "",
  switchFailed: false,
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
  entryBeforeDoubleClick: null,
  domainFilter: null,
  disciplineFilter: null,
  facts: {},
  vocabulary: null,
  disciplines: [],
  readerCatalog: null,
  graphIndex: null,
  ontology: null,
  causes: null,
  roleFilter: new Set(CAUSE_ROLES),
  causeFilters: { evidence: false, necessary: false },
  rolePresentations: new Map(),
  expanded: [],
  expansionScope: null,
  expansionAdded: [],
  causalOrder: false,
  pathTarget: null,
  navigatorGroup: "domain",
  treeExpanded: new Set(),
  treeFor: null,
  arisingTableFor: null,
  tablePreviewId: null,
  tablePreviewClear: null,
  showLineage: false,
  tableResize: null,
  tableRefit: false,
  tableRefitFrame: 0,
  inspectorShown: null,
  lineStretch: null,
  tableDensity: "map",
  tableColour: "domain",
  introDismissed: false,
  tableMap: null,
  work: { section: "causes", level: null, domain: null, shown: null },
  direction: "both",
  depth: 1,
  interactionViews: null,
  interactionGraphInput: null,
  interactionPerspectiveId: "",
  interactionCaseId: "",
  arisingCases: new Map(),
  catalog: {
    key: null,
    items: [],
    total: 0,
    matching: 0,
    nextOffset: null
  }
};
let activeGraphProjection = null;
// What the pointer has lit, so that moving on within a card does not light the whole drawing again.
let graphPointerTarget = null;
let activeGraphInfo = null;
/** The card whose lines the keyboard is walking. */
let keyboardLineCard = null;
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

/** The name a reader sees: in an ontology a record named by a study key reads as the study. A plain release keeps its names; the raw record and search keep the original. */
function displayName(node) {
  return state.ontology ? recordDisplayName(node?.name) : node?.name;
}

function factsOf(id) {
  return Object.hasOwn(state.facts, id) ? state.facts[id] : null;
}

function hasDiscipline(id, value) {
  return Boolean(factsOf(id)?.disciplines?.includes(value));
}

function disciplineOf(value) {
  return state.disciplines.find((entry) => entry.value === value) ?? null;
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
  return state.presentationMetadata?.arisingTable?.dependencyTypes.get(value) ?? (typeof value === "string" && value.length > 0 ? `Dependency ${value}` : null);
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

/** A native select cuts a long value, so an opaque copy that wraps covers it; clicks and keys pass through to the control. */
function showSelectValues() {
  for (const box of document.querySelectorAll(".select-box")) {
    box.lastElementChild.textContent = box.firstElementChild.selectedOptions[0]?.textContent ?? "";
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
    search: elements["catalog-search"].value.slice(0, 256),
    levels: selectFacetValue(elements["level-filter"]),
    layers: selectFacetValue(elements["layer-filter"]),
    phases: selectFacetValue(elements["phase-filter"]),
    typeRoles: selectFacetValue(elements["role-filter"]),
    scientificStatuses: selectFacetValue(elements["status-filter"]),
    disciplines: selectFacetValue(elements["discipline-filter"]),
    sort,
    order
  };
}

function activeFilterCount(query = currentCatalogQuery()) {
  return ["levels", "layers", "phases", "typeRoles", "scientificStatuses", "disciplines"].filter((key) => query[key].length > 0).length;
}

/** The ontology tree replaces the flat list while nothing is searched or filtered. */
function showsOntologyTree(query = currentCatalogQuery()) {
  return Boolean(state.ontology) && query.search.trim() === "" && activeFilterCount(query) === 0;
}

function catalogItem(node) {
  const button = createElement("button", "catalog-item");
  button.type = "button";
  button.setAttribute("role", "option");
  button.tabIndex = -1;
  button.setAttribute("aria-selected", String(node.id === state.selectedId));
  button.dataset.nodeId = node.id;
  button.dataset.focus = String(node.id === state.focusId || node.id === state.recordFocusId);
  button.title = "Click to inspect; double-click to focus";
  let coordinate;
  let detail;
  if (isArising(node)) {
    coordinate = createElement("i", "catalog-swatch");
    button.dataset.ontology = "true";
    setDomain(button, node);
    detail = [levelName(node.level) ? `Level ${node.level} ${levelName(node.level)}` : null, phaseName(node.phase)].filter(Boolean).join(" \u00b7 ");
  } else if (state.ontology && typeof node.arisingId === "string") {
    const owner = nodeSummary(node.arisingId);
    coordinate = createElement("i", "catalog-swatch");
    button.dataset.ontology = "true";
    setDomain(button, owner);
    detail = [humanize(node.typeRole), owner ? `in ${owner.name}` : null].filter(Boolean).join(" \u00b7 ");
  } else {
    coordinate = createElement("span", "catalog-coordinate", compactCoordinateText(node));
    coordinate.title = coordinateText(node);
    detail = `${humanize(node.typeRole, "Record")} \u00b7 ${plural(node.degree, "relation")}`;
  }
  const title = createElement("strong", "", displayName(node));
  const metadata = createElement("small", "", detail);
  button.append(coordinate, title, metadata);
  button.addEventListener("click", () => inspectNode(node.id));
  button.addEventListener("dblclick", () => focusNode(node.id));
  return button;
}

/** In an ontology the flat list searches and orders the names readers see, over the same verified records; a declared name still finds its record. */
function readerCatalog() {
  const { identity, nodes, edges } = state.graphInputForRoles;
  state.readerCatalog ??= createLazyModelPresentation({ identity, nodes: nodes.map(recordCatalogEntry), edges });
  return state.readerCatalog;
}

function catalogPage({ disciplines: _disciplines, ...query }, offset, limit = CATALOG_PAGE_SIZE) {
  const options = { ...query, offset, limit };
  return state.ontology ? readerCatalog().catalog(options) : state.presentation.catalog(options);
}

/** The catalogue has no facet for a discipline, a fact of arisings: it narrows the arisings that match everything else here. */
function disciplineArisings(query) {
  if (query.layers.length > 0 && !query.layers.includes(state.ontology.layer)) return { items: [], matching: 0 };
  const items = catalogPage({ ...query, layers: [state.ontology.layer] }, 0, 500).items
    .filter((node) => hasDiscipline(node.id, query.disciplines[0]));
  return { items, matching: items.length };
}

function renderCatalog({ reset = false, loadMore = false } = {}) {
  showSelectValues();
  if (!state.presentation) return;
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
    elements["catalog-count"].textContent = String(state.ontology.arisings.length);
    elements["catalog-count"].title = `${state.ontology.arisings.length} arisings in ${state.presentationMetadata.arisingTable.domains.size} domains`;
    return;
  }
  // While searching an ontology, arisings come first and technical records follow, each matching the same query.
  // A discipline describes arisings only, so choosing one leaves no technical records to follow.
  const byDiscipline = query.disciplines.length > 0;
  const split = Boolean(state.ontology) && (query.layers.length === 0 || byDiscipline);
  const pagedQuery = split ? { ...query, layers: state.ontology.otherLayers } : query;
  const key = JSON.stringify(query);
  const shouldReset = reset || state.catalog.key !== key;
  if (shouldReset) {
    // An empty layer list would mean "no filter"; a release of arisings alone has no second group.
    const page = split && (byDiscipline || state.ontology.otherLayers.length === 0)
      ? { items: [], total: state.presentation.descriptor.statistics.nodeCount, matching: 0, nextOffset: null }
      : catalogPage(pagedQuery, 0);
    const arisingPage = byDiscipline ? disciplineArisings(query)
      : split ? catalogPage({ ...query, layers: [state.ontology.layer] }, 0, 500) : null;
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
  // The title of an ontology leaves room for a number alone; "Load next" says that more follow.
  elements["catalog-count"].textContent = state.ontology
    ? String(totalMatching)
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
  const keptOption = document.activeElement?.closest?.(".catalog-item")?.dataset.nodeId;
  elements["catalog-list"].replaceChildren(...children);
  syncCatalogRoving();
  if (keptOption) elements["catalog-list"].querySelector(`.catalog-item[data-node-id="${CSS.escape(keptOption)}"]`)?.focus({ preventScroll: true });
  elements["catalog-empty"].hidden = children.length > 0;
  elements["catalog-empty-hint"].textContent = byDiscipline
    ? "The Discipline filter lists arisings only. Clear a filter or shorten the search."
    : query.layers.length
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
  group.tabIndex = -1;
  row.tabIndex = -1;
  group.dataset.key = key;
  group.setAttribute("aria-expanded", String(state.treeExpanded.has(key)));
  if (label) group.setAttribute("aria-label", label);
  row.addEventListener("click", () => {
    const expanded = !state.treeExpanded.has(key);
    if (expanded) state.treeExpanded.add(key);
    else state.treeExpanded.delete(key);
    group.setAttribute("aria-expanded", String(expanded));
    syncTreeRoving();
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
  leaf.tabIndex = -1;
  leaf.dataset.nodeId = node.id;
  setDomain(leaf, node);
  leaf.title = `${node.name}: ${humanize(node.scientificStatus)}. Double-click to open its causes.`;
  const mark = createElement("i", "status-mark");
  mark.dataset.status = String(node.scientificStatus);
  leaf.append(createElement("span", "", node.name), mark);
  leaf.addEventListener("click", () => inspectNode(node.id));
  leaf.addEventListener("dblclick", () => focusNode(node.id, { mode: "causes" }));
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
    return treeGroup(`cluster:${cluster?.value ?? `@${scope}`}`, row, nodes.map(treeLeaf), { className: "tree-group tree-cluster", label: cluster?.name ?? "Without a cluster" });
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
  syncTreeRoving();
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
  syncTreeRoving();
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
    element.dataset.focus = String(element.dataset.nodeId === state.focusId);
  }
  for (const element of elements["graph-nodes"].querySelectorAll("[data-node-id]")) {
    element.dataset.selected = String(element.dataset.nodeId === id && !state.selectedRelationId);
    markCurrent(element, element.dataset.nodeId === id && !state.selectedRelationId);
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-edge-id]")) {
    element.dataset.selected = String(element.dataset.edgeId === state.selectedRelationId);
  }
  if (state.mode === "work") markWorkSelection();
  syncCatalogRoving();
  syncTreeRoving();
  syncGraphRoving();
}

function inspectNode(id) {
  if (!state.presentation?.has(id)) return;
  state.selectedId = id;
  state.selectedRelationId = null;
  markSelection();
  if (state.ontology) {
    revealInTree(id, true);
    // The table has no separate focus: the selected arising is the one the other views open on.
    if ((state.mode === "table" || state.mode === "work") && isArising(nodeSummary(id)) && state.focusId !== id) {
      state.focusId = id;
      endCaseOutside(id);
      markSelection();
      updateControls();
      replaceLocationState();
    }
    if (state.mode === "table") updateArisingTable();
  }
  renderInspector();
  replaceLocationState();
}

/** Show one relation (a cause between arisings, or any other declared edge) in the inspector. */
function inspectRelation(id) {
  if (!state.graphIndex?.edgesById.has(id)) return;
  state.selectedRelationId = id;
  markSelection();
  renderInspector();
  replaceLocationState();
}

/** A case shows its own records: a focus outside them ends the case. */
function endCaseOutside(id) {
  const selectedCase = state.interactionViews?.cases.find((record) => record.id === state.interactionCaseId);
  if (selectedCase && !selectedCase.entityIds.includes(id)) {
    state.interactionCaseId = "";
    elements["interaction-case"].value = "";
  }
}

/**
 * Focus a record. In an ontology, arisings anchor the Causes and Subgraph views and
 * technical records open in their arising's subgraph (or in Records when that view is open).
 */
function focusNode(id, { mode, path = null } = {}) {
  if (!state.presentation?.has(id)) return;
  state.pathTarget = path;
  endCaseOutside(id);
  state.selectedRelationId = null;
  if (state.ontology) {
    const node = nodeSummary(id);
    let nextMode = mode ?? (state.mode === "table" || state.mode === "work" ? "causes" : state.mode);
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
  replaceLocationState({ push: true });
  render();
}

function setMode(mode) {
  if (!state.ontology || !ONTOLOGY_MODES.includes(mode) || state.mode === mode) return;
  state.mode = mode;
  state.pathTarget = null;
  if (mode === "records") {
    // Records opens on the selected technical record, or on a record of the focused arising.
    const selected = nodeSummary(state.selectedId);
    const current = nodeSummary(state.recordFocusId);
    if (selected && !isArising(selected)) {
      state.recordFocusId = selected.id;
      // One focus: the record's arising, as when the record is focused directly.
      if (state.ontology.arisingIds.has(selected.arisingId)) state.focusId = selected.arisingId;
    } else if (!current || isArising(current) || current.arisingId !== state.focusId) {
      state.recordFocusId = state.ontology.members.get(state.focusId)?.[0] ?? state.focusId;
    }
    endCaseOutside(state.recordFocusId);
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
  for (const button of elements["role-controls"].querySelectorAll("button[data-role]")) {
    button.setAttribute("aria-pressed", String(state.roleFilter.has(button.dataset.role)));
  }
  for (const button of elements["role-controls"].querySelectorAll("button[data-cause-filter]")) {
    button.setAttribute("aria-pressed", String(state.causeFilters[button.dataset.causeFilter]));
  }
  elements["causal-order"].setAttribute("aria-pressed", String(state.causalOrder));
  elements["causal-order"].hidden = state.mode !== "causes" || state.depth !== 1 || Boolean(state.pathTarget);
  for (const button of elements["view-tabs"].querySelectorAll("button")) {
    button.setAttribute("aria-selected", String(button.dataset.mode === state.mode));
    button.tabIndex = button.dataset.mode === state.mode ? 0 : -1;
  }
  const ontology = Boolean(state.ontology);
  const graphMode = ["causes", "records", "graph"].includes(state.mode);
  const caseDrawn = Boolean(state.interactionCaseId) && ["records", "graph"].includes(state.mode);
  elements["view-tabs"].hidden = !ontology;
  elements["role-controls"].hidden = state.mode !== "causes";
  elements["direction-controls"].hidden = !graphMode || caseDrawn || Boolean(state.pathTarget);
  elements["depth-controls"].hidden = !graphMode || caseDrawn || Boolean(state.pathTarget);
  elements["interaction-view-controls"].hidden = !state.interactionViews || !["records", "graph"].includes(state.mode);
  syncMessageRoom();
  elements["zoom-controls"].hidden = state.mode === "table" || state.mode === "work" || !activeGraphInfo;
  if (state.mode === "table" || state.mode === "work") elements["graph-minimap"].hidden = true;
  if (state.mode === "table" || state.mode === "work") setExportMenu(false);
  elements["subgraph-count"].textContent = ontology ? String(state.ontology.members.get(state.focusId)?.length ?? 0) : "";
  syncRovingGroups();
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
  endExpansionOutOfScope();
  // A list of the lines under a click belongs to the drawing that was clicked.
  if (state.mode !== "subgraph") state.lineStretch = null;
  const table = state.mode === "table";
  elements["arising-table-panel"].hidden = !table;
  elements["open-work-panel"].hidden = state.mode !== "work";
  if (table) {
    renderLegend();
    renderArisingTable();
    return;
  }
  if (state.mode === "work") {
    renderLegend();
    renderOpenWork();
    return;
  }
  if (state.mode === "subgraph") renderSubgraph();
  else if (state.pathTarget) renderPath();
  else renderGraph();
  renderLegend();
  fitGraph();
  elements["export-toggle"].disabled = !activeGraphInfo;
  elements["zoom-controls"].hidden = !activeGraphInfo;
  if (!activeGraphInfo) setExportMenu(false);
}

/* ---------- Graph drawing ---------- */

function ensureViewport() {
  if (graphViewport) return graphViewport;
  graphViewport = createGraphViewport(elements["neighborhood-graph"], elements["graph-viewport"], {
    interactive: (target) => !target.closest?.(".graph-node, .graph-edge, .graph-pill"),
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

/** Whether every card lies in the view. The empty margin around the cards need not be on stage. */
function minimapCovered(view, layout) {
  const edges = (axis, size) => layout.nodes.map((node) => [node[axis] - node[size] / 2, node[axis] + node[size] / 2]).flat();
  const across = edges("x", "width");
  const down = edges("y", "height");
  return view.x <= Math.min(...across) + 4 && view.y <= Math.min(...down) + 4
    && view.x + view.width >= Math.max(...across) - 4 && view.y + view.height >= Math.max(...down) - 4;
}

/** The point of the drawing under the pointer on the minimap. A drag past the minimap stops at the drawing's edge. */
function minimapPoint(event, rect, layout) {
  const geometry = minimapGeometry(layout);
  return {
    x: Math.min(layout.width, Math.max(0, (event.clientX - rect.left - geometry.x) / geometry.scale)),
    y: Math.min(layout.height, Math.max(0, (event.clientY - rect.top - geometry.y) / geometry.scale))
  };
}

/** An overview of large drawings: every card as a coloured mark and the visible region as a frame. */
function drawMinimap() {
  const canvas = elements["graph-minimap"];
  const layout = activeGraphInfo?.layout;
  const view = layout && graphViewport ? graphViewport.view() : null;
  const covered = Boolean(view) && minimapCovered(view, layout);
  const show = Boolean(layout && graphViewport && state.mode !== "table" && state.mode !== "work" && layout.nodes.length > 8 && !covered);
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
    graphViewport.centerOn(minimapPoint(event, canvas.getBoundingClientRect(), layout));
  };
  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = true;
    canvas.setPointerCapture?.(event.pointerId);
    move(event);
  });
  canvas.addEventListener("pointermove", (event) => { if (dragging) move(event); });
  canvas.addEventListener("pointerup", () => { dragging = false; });
  canvas.addEventListener("pointercancel", () => { dragging = false; });
}

function clearGraphHighlight() {
  graphPointerTarget = null;
  delete elements["neighborhood-graph"].dataset.highlightBy;
  for (const element of elements["graph-nodes"].querySelectorAll("[data-highlight]")) {
    element.removeAttribute("data-highlight");
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-highlight]")) {
    element.removeAttribute("data-highlight");
  }
}

function applyGraphHighlight(target, keyboard = false) {
  if (!activeGraphProjection) return;
  graphPointerTarget = keyboard ? null : target;
  // A pointer can leave and bring the rest back; a keyboard stays, and has to read where to go next.
  if (keyboard) elements["neighborhood-graph"].dataset.highlightBy = "keyboard";
  else delete elements["neighborhood-graph"].dataset.highlightBy;
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
  for (const pill of elements["graph-nodes"].querySelectorAll("[data-pill-for]")) {
    const id = pill.dataset.pillFor;
    pill.dataset.highlight = primaryNodes.has(id) || connectedNodes.has(id) ? "connected" : "dimmed";
  }
  for (const element of elements["graph-edges"].querySelectorAll("[data-edge-id]")) {
    const id = element.dataset.edgeId;
    element.dataset.highlight = primaryEdges.has(id)
      ? "primary"
      : connectedEdges.has(id) ? "connected" : "dimmed";
  }
}

/**
 * The lines under a pointer, the one it is on first. Lines of a shared stretch lie exactly on one another, so only this can tell them apart.
 * The event reports whole pixels while the browser chose the line at the exact point, and a zoomed-out hit area is only a few pixels wide,
 * so the line the pointer is on counts even when the reported pixel falls just off it.
 */
function linesUnderPointer(event, edgeId) {
  const ids = document.elementsFromPoint?.(event.clientX, event.clientY)
    .filter((element) => element.classList?.contains("edge-hit"))
    .map((element) => element.parentElement.dataset.edgeId) ?? [];
  return [...new Set([edgeId, ...ids])];
}

/** On a shared stretch, pointing lights every line that runs there; further along, only the line that goes on. */
function highlightLinesAt(event, edge) {
  const lines = linesUnderPointer(event, edge.id);
  applyGraphHighlight(lines.length > 1 ? { kind: "edges", ids: lines } : { kind: "edge", id: edge.id });
}

/**
 * On a real move only: a card that slides under a still pointer, as the keyboard pans the drawing, is not being pointed at.
 * For the same reason a card sliding away leaves what the keyboard lit.
 */
function bindPointerHighlight(element, target, onMove = () => {
  if (graphPointerTarget !== target) applyGraphHighlight(target);
}) {
  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerleave", () => {
    if (elements["neighborhood-graph"].dataset.highlightBy !== "keyboard") clearGraphHighlight();
  });
}

function bindGraphHighlight(element, target, onMove) {
  bindPointerHighlight(element, target, onMove);
  element.addEventListener("focus", () => applyGraphHighlight(target, element.matches(":focus-visible")));
  element.addEventListener("blur", clearGraphHighlight);
}

function wrappedLines(text, width, characterWidth, maxLines) {
  return wrapGraphNodeLabel(text, {
    maxCharacters: Math.max(8, Math.min(80, Math.floor((width - 28) / characterWidth))),
    maxLines
  });
}

let measureContext;
let measureFamily = null;
const measuredWidths = new Map();

function cardFont(size, weight) {
  measureFamily ??= getComputedStyle(document.body).fontFamily;
  return `${weight} ${size}px ${measureFamily}`;
}

function textWidth(text, font) {
  if (measureContext === undefined) measureContext = document.createElement("canvas").getContext?.("2d") ?? null;
  if (!measureContext) return text.length * 6.8;
  const key = `${font}|${text}`;
  if (!measuredWidths.has(key)) {
    measureContext.font = font;
    if (measuredWidths.size > 20000) measuredWidths.clear();
    measuredWidths.set(key, measureContext.measureText(text).width);
  }
  return measuredWidths.get(key);
}

/** One line of at most `width` pixels, cut with an ellipsis when it does not fit. */
function fitLine(text, width, font) {
  if (textWidth(text, font) <= width) return text;
  let kept = text;
  while (kept.length > 1 && textWidth(`${kept}\u2026`, font) > width) kept = kept.slice(0, -1).trimEnd();
  return `${kept}\u2026`;
}

/** Word wrap by measured width: names break between words; a word too long for a line breaks at its own hyphens, dashes or slashes, and only then is split. */
function wrapCardLabel(text, width, { size = 13, weight = 500, maxLines = 2 } = {}) {
  const font = cardFont(size, weight);
  const fits = (value) => textWidth(value, font) <= width;
  const lines = [];
  let current = "";
  const pushWord = (word) => {
    let rest = word;
    while (rest.length > 1 && !fits(rest)) {
      let cut = rest.length - 1;
      while (cut > 1 && !fits(`${rest.slice(0, cut)}-`)) cut -= 1;
      // Break before a syllable where one is near: "Compartmentaliza-tion", not "Compartmentalizati-on".
      for (let at = cut; at > Math.max(cut - 5, 2); at -= 1) {
        if (/[^aeiouy][aeiouy]/i.test(rest.slice(at, at + 2)) && rest.length - at >= 3) {
          cut = at;
          break;
        }
      }
      lines.push(`${rest.slice(0, cut)}-`);
      rest = rest.slice(cut);
    }
    return rest;
  };
  for (const word of String(text).replace(/\s+/g, " ").trim().split(" ")) {
    const candidate = current ? `${current} ${word}` : word;
    if (fits(candidate)) current = candidate;
    else if (current && fits(word)) {
      lines.push(current);
      current = word;
    } else {
      word.split(/(?<=[-\u2013/])/).forEach((part, index) => {
        const joined = current ? `${current}${index > 0 ? "" : " "}${part}` : part;
        if (fits(joined)) current = joined;
        else {
          if (current) lines.push(current);
          current = pushWord(part);
        }
      });
    }
  }
  if (current) lines.push(current);
  const truncated = lines.length > maxLines;
  const shown = lines.slice(0, maxLines);
  if (truncated) shown[shown.length - 1] = fitLine(`${shown.at(-1)} ${lines[maxLines]}`, width, font);
  return { lines: shown, truncated };
}

/**
 * What a card shows under its name, wrapped to the card: a record's owner on its own lines
 * above its kind, an arising's level and type beside its evidence share. Nothing here is cut.
 */
function cardFooter(info, inner) {
  const font = cardFont(12, 400);
  const wrap = (text, width) => wrapCardLabel(text, width, { size: 12, weight: 400, maxLines: Number.POSITIVE_INFINITY }).lines;
  const trailing = info.evidence ? `${info.evidence.supported > 0 ? "\u2713 " : ""}${info.evidence.supported}/${info.evidence.total}` : "";
  const room = inner - (trailing ? textWidth(trailing, font) + CARD_FOOTER.gap : 0);
  const facts = info.facts && textWidth(info.facts, font) > room ? info.factsShort ?? info.facts : info.facts;
  return { owner: info.owner ? wrap(info.owner, inner) : [], facts: facts ? wrap(facts, room) : [], trailing };
}

function footerHeight(footer) {
  const lines = Math.max(footer.owner.length + footer.facts.length, footer.trailing ? 1 : 0);
  return lines === 0 ? 0 : CARD_FOOTER.area + (lines - 1) * CARD_FOOTER.lineHeight;
}

/** A card grows a line at a time beyond its usual height, so its name and footer show whole: graphs have no tooltips. */
function cardHeight(node, width, baseHeight, focus = false, info = {}) {
  if (!isArising(node) && !state.ontology) return Math.max(baseHeight, wrappedLines(node.name, width, 7.3, 5).lines.length * 14 + 22);
  const inner = width - 30;
  const { lines } = wrapCardLabel(displayName(node), inner, {
    size: focus ? 14 : 13, weight: focus ? 600 : 500, maxLines: Number.POSITIVE_INFINITY
  });
  return Math.max(baseHeight, 8 + lines.length * (focus ? 17 : GRAPH_NODE.lineHeight) + footerHeight(cardFooter(info, inner)));
}

/** What the eye reads from a card's place, border and footer, for its accessible name. */
function cardStateWords(info) {
  const relation = state.pathTarget ? null
    : state.mode === "causes" ? { parent: "cause", child: "dependent", both: "cause and dependent" }[info.relation]
      : state.mode === "records" ? { parent: "links to the focus", child: "linked from the focus", both: "linked both ways with the focus" }[info.relation] : null;
  return [info.focus ? (state.pathTarget ? "end of the path" : "focus card") : null, relation, info.status ? humanize(info.status) : null,
    info.evidence ? evidenceShare(info.evidence.supported, info.evidence.total) : null].filter(Boolean).map((words) => `, ${words}`).join("");
}

/** The selected one of a set says so to a screen reader; the eye has its colour. */
function markCurrent(element, current) {
  if (current) element.setAttribute("aria-current", "true");
  else element.removeAttribute("aria-current");
}

/** One card: the stripe carries the domain or kind colour, the name comes first and the footer says what it is. */
function drawNodeCard(node, info, box) {
  const focus = info.focus === true;
  const name = displayName(node);
  const group = svgElement("g", {
    class: "graph-node",
    transform: `translate(${box.x} ${box.y})`,
    tabindex: "-1",
    role: "button",
    "aria-label": `${name}${cardStateWords(info)}${info.facts ? `, ${info.facts}` : ""}${info.owner ? `, ${info.owner}` : ""}. Enter inspects; Shift Enter or Space focuses; E goes through its lines.${info.pill ? (info.pill.expanded ? " X removes the neighbours it added." : ` X adds ${plural(info.pill.hidden, "neighbour")} to the drawing.`) : ""}`,
    "data-node-id": node.id,
    "data-relation": info.relation ?? "child",
    "data-focus": focus ? "true" : "false",
    "data-selected": node.id === state.selectedId && !state.selectedRelationId ? "true" : "false"
  });
  markCurrent(group, node.id === state.selectedId && !state.selectedRelationId);
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
    const wrapped = wrappedLines(node.name, width, 7.3, Math.max(1, Math.min(5, Math.floor((height - 10) / 14))));
    const lineHeight = 14;
    const firstLineY = -((wrapped.lines.length - 1) * lineHeight) / 2 + 4;
    label.append(...wrapped.lines.map((line, index) => {
      const span = svgElement("tspan", { x: 4, y: firstLineY + index * lineHeight });
      span.textContent = line;
      return span;
    }));
    group.append(label);
  } else {
    const inner = width - 30;
    const lineHeight = focus ? 17 : GRAPH_NODE.lineHeight;
    const footer = cardFooter(info, inner);
    const nameArea = height - footerHeight(footer);
    const wrapped = wrapCardLabel(name, inner, {
      size: focus ? 14 : 13, weight: focus ? 600 : 500, maxLines: Math.max(1, Math.floor(nameArea / lineHeight))
    });
    const firstLine = top + (nameArea - wrapped.lines.length * lineHeight) / 2 + lineHeight - 2;
    label.setAttribute("class", "node-name");
    label.append(...wrapped.lines.map((line, index) => {
      const span = svgElement("tspan", { x: left + 16, y: firstLine + index * lineHeight });
      span.textContent = line;
      return span;
    }));
    group.append(label);
    const footerY = -top - 9;
    const footerLines = [...footer.owner.map((text) => ["node-owner", text]), ...footer.facts.map((text) => ["node-facts", text])];
    footerLines.forEach(([className, text], index) => {
      const line = svgElement("text", { class: className, x: left + 16, y: footerY - (footerLines.length - 1 - index) * CARD_FOOTER.lineHeight });
      line.textContent = text;
      group.append(line);
    });
    if (footer.trailing) {
      const end = svgElement("text", { class: "node-trailing", x: -left - 12, y: footerY });
      end.dataset.evidence = info.evidence.supported === info.evidence.total ? "all" : info.evidence.supported > 0 ? "some" : "none";
      end.textContent = footer.trailing;
      group.append(end);
    }
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
    if (event.key.toLowerCase() === "x" && info.pill) {
      event.preventDefault();
      toggleExpansion(node.id);
    }
    graphCardNavigation(event, node.id);
  });
  bindGraphHighlight(group, { kind: "node", id: node.id });
  return group;
}

/** A small mark on a card's corner: how many neighbours it has outside the drawing, or a minus sign to remove those it added. */
function drawExpansionPill(box, pill, name) {
  const text = pill.expanded ? "\u2212" : `+${pill.hidden}`;
  const width = Math.max(24, 12 + text.length * 7.4);
  const group = svgElement("g", {
    class: "graph-pill",
    transform: `translate(${box.x + box.width / 2 - width / 2 - 8} ${box.y - box.height / 2 - PILL_LIFT})`,
    role: "button",
    "aria-label": pill.expanded ? `Remove the neighbours added to ${name}` : `Add ${plural(pill.hidden, "neighbour")} of ${name} to the drawing`,
    "data-pill-for": box.id,
    "data-expanded": String(pill.expanded)
  });
  group.append(svgElement("rect", { class: "pill-hit", x: -width / 2 - 6, y: -11, width: width + 12, height: 27 }));
  group.append(svgElement("rect", { class: "pill-mark", x: -width / 2, y: -10, width, height: 20, rx: 10, ry: 10 }));
  const label = svgElement("text", { y: 4.5, "aria-hidden": "true" });
  label.textContent = text;
  group.append(label);
  group.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleExpansion(box.id);
  });
  group.addEventListener("dblclick", (event) => event.stopPropagation());
  // Pointer only: Chromium makes an SVG element with a focus listener a Tab stop, and a pill is not one.
  bindPointerHighlight(group, { kind: "node", id: box.id });
  return group;
}

/** Add a card's hidden neighbours or remove those it added. The card stays where the reader is looking. */
function toggleExpansion(id) {
  const before = activeGraphInfo?.layout.nodes.find((node) => node.id === id);
  if (!before) return;
  const typing = document.activeElement?.closest?.(".graph-node")?.dataset.nodeId === id;
  const wasExpanded = state.expanded.includes(id);
  state.expanded = wasExpanded ? state.expanded.filter((other) => other !== id) : [...state.expanded, id];
  renderGraph();
  renderLegend();
  const { layout } = activeGraphInfo;
  const after = layout.nodes.find((node) => node.id === id);
  if (after && graphViewport) {
    const added = new Set(state.expansionAdded.filter((item) => item.via === id).map((item) => item.id));
    const cards = wasExpanded ? [] : layout.nodes.filter((node) => added.has(node.id));
    const shown = [after, ...cards];
    const left = Math.min(...shown.map((node) => node.x - node.width / 2)) - 12;
    const top = Math.min(...shown.map((node) => node.y - node.height / 2)) - 44;
    const box = {
      x: left, y: top,
      width: Math.max(...shown.map((node) => node.x + node.width / 2)) + 12 - left,
      height: Math.max(...shown.map((node) => node.y + node.height / 2)) + 12 - top
    };
    graphViewport.hold({ from: before, to: after, box: cards.length ? box : null, readableScale: 0.68, bottomInset: elements["stage-legend"].offsetHeight + 12, corner: minimapCorner() });
  }
  scheduleMinimap();
  if (typing) elements["graph-nodes"].querySelector(`[data-node-id="${CSS.escape(id)}"]`)?.focus();
}

/** The room the minimap takes in the stage's lower right corner, or nothing when it never shows there. */
function minimapCorner() {
  const stage = elements["graph-minimap"].parentElement.getBoundingClientRect();
  const canvas = elements["graph-minimap"];
  const hidden = canvas.hidden;
  canvas.hidden = false;
  const box = canvas.getBoundingClientRect();
  canvas.hidden = hidden;
  return box.width ? { width: stage.right - box.left + 12, height: stage.bottom - box.top + 12 } : null;
}

function drawEdge(edge, route, focusId) {
  const isFocusEdge = edge.source === focusId || edge.target === focusId;
  const source = nodeSummary(edge.source);
  const target = nodeSummary(edge.target);
  const meaning = [edge.relationLayer, edge.role ?? edge.dependencyType, prose(edge.assertion)]
    .filter((value) => value !== null && value !== undefined && value !== "").map(scalarLabel).join(" | ");
  const label = `${displayName(source) ?? "A record"} -> ${displayName(target) ?? "A record"}${meaning ? ` | ${meaning}` : ""}`;
  const group = svgElement("g", {
    class: "graph-edge",
    tabindex: "-1",
    role: "button",
    "aria-label": `${label}. Enter inspects this relation; E goes to the next line; Escape returns to the card.`,
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
  const arrow = svgElement("path", {
    class: "edge-arrow",
    d: "M0 0-9-4.2-9 4.2z",
    transform: `translate(${route.arrow.x} ${route.arrow.y}) rotate(${route.arrow.angle})`
  });
  group.append(hitPath, linePath, arrow);
  if (state.mode === "subgraph") {
    // Runs first: the inspector the next listener draws lists the lines of the stretch.
    group.addEventListener("click", (event) => {
      const lines = linesUnderPointer(event, edge.id);
      state.lineStretch = lines.length > 1 ? lines : null;
    });
  }
  group.addEventListener("click", () => inspectRelation(edge.id));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      inspectRelation(edge.id);
    }
    graphLineNavigation(event, edge);
  });
  bindGraphHighlight(group, { kind: "edge", id: edge.id }, state.mode === "subgraph" ? (event) => highlightLinesAt(event, edge) : undefined);
  return group;
}

/** The arrow keys, Home and E on a card. */
function graphCardNavigation(event, id) {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const direction = arrowDirection(event.key);
  if (direction) {
    event.preventDefault();
    const next = nearestInDirection(activeGraphInfo?.layout.nodes ?? [], id, direction);
    if (next) focusGraphCard(next);
  } else if (event.key === "Home") {
    event.preventDefault();
    const focus = elements["graph-nodes"].querySelector('.graph-node[data-focus="true"]')?.dataset.nodeId;
    const home = focus ?? firstCard(activeGraphInfo?.layout.nodes ?? []);
    if (home) focusGraphCard(home);
  } else if (event.key.toLowerCase() === "e") {
    event.preventDefault();
    stepCardLines(id, null, event.shiftKey);
  }
}

/** E and Shift+E go on along the card's lines, Escape and Home return to the card. */
function graphLineNavigation(event, edge) {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const card = keyboardLineCard === edge.source || keyboardLineCard === edge.target ? keyboardLineCard : edge.target;
  if (event.key === "Escape" || event.key === "Home") {
    event.preventDefault();
    focusGraphCard(card);
  } else if (event.key.toLowerCase() === "e") {
    event.preventDefault();
    stepCardLines(card, edge.id, event.shiftKey);
  }
}

/** Move the keyboard to the next line of a card and bring both of its ends on stage. */
function stepCardLines(cardId, currentLine, backwards) {
  const boxes = new Map((activeGraphInfo?.layout.nodes ?? []).map((box) => [box.id, box]));
  const lines = orderedCardLines(activeGraphProjection?.edges ?? [], cardId, (id) => boxes.get(id));
  const lineId = nextInCycle(lines, currentLine, backwards);
  const line = lineId && elements["graph-edges"].querySelector(`[data-edge-id="${CSS.escape(lineId)}"]`);
  if (!line) return;
  keyboardLineCard = cardId;
  line.focus({ preventScroll: true });
  const other = boxes.get(line.dataset.source === cardId ? line.dataset.target : line.dataset.source);
  if (other) revealGraphBoxes(other, [boxes.get(cardId), other]);
}

/** Pan, without zooming, until the boxes are on stage as far as they fit; `lead` comes first when they do not. */
function revealGraphBoxes(lead, boxes) {
  if (!graphViewport) return;
  const shown = boxes.filter(Boolean);
  const left = Math.min(...shown.map((box) => box.x - box.width / 2));
  const top = Math.min(...shown.map((box) => box.y - box.height / 2));
  const box = {
    x: left, y: top,
    width: Math.max(...shown.map((item) => item.x + item.width / 2)) - left,
    height: Math.max(...shown.map((item) => item.y + item.height / 2)) - top
  };
  const bottomInset = elements["stage-legend"].offsetHeight + 12;
  const corner = minimapCorner();
  // What is on stage already stays where the reader sees it.
  const view = graphViewport.view();
  const right = view.x + view.width;
  const bottom = view.y + view.height - bottomInset / graphViewport.scale;
  const clearOfCorner = !corner || box.x + box.width <= right - corner.width / graphViewport.scale || box.y + box.height <= view.y + view.height - corner.height / graphViewport.scale;
  if (box.x >= view.x && box.y >= view.y && box.x + box.width <= right && box.y + box.height <= bottom && clearOfCorner) return;
  graphViewport.hold({ from: lead, to: lead, box, readableScale: graphViewport.scale, bottomInset, corner });
}

function focusGraphCard(id) {
  const card = elements["graph-nodes"].querySelector(`.graph-node[data-node-id="${CSS.escape(id)}"]`);
  if (!card) return false;
  card.focus({ preventScroll: true });
  const box = activeGraphInfo?.layout.nodes.find((node) => node.id === id);
  if (box) revealGraphBoxes(box, [box]);
  return true;
}

/** Bring the card that holds the focus back on stage: a ring off stage shows nothing. */
function revealFocusedCard() {
  const id = document.activeElement?.closest?.(".graph-node")?.dataset.nodeId;
  const box = id && activeGraphInfo?.layout.nodes.find((node) => node.id === id);
  if (box) revealGraphBoxes(box, [box]);
}

/** Tab reaches a card wherever it lies. A pointer's click needs no help: the card is under the pointer. */
function revealKeyboardCard(event) {
  if (event.target.matches?.(".graph-node:focus-visible")) revealFocusedCard();
}

/** A graph is one Tab stop: the card the keyboard is on, or else the selected card, the focus card, the card it starts on. */
function syncGraphRoving() {
  const cards = [...elements["graph-nodes"].querySelectorAll(".graph-node")];
  const active = document.activeElement?.closest?.(".graph-node");
  const focus = cards.find((card) => card.dataset.focus === "true")?.dataset.nodeId;
  setRovingStop(cards, active ?? cards[rovingEntry(cards.map((card) => card.dataset.nodeId), [state.selectedId, focus, firstCard(activeGraphInfo?.layout.nodes ?? [])])]);
}

/** Where the keyboard is in the drawing, when it is there: drawing anew must not throw it back to the page. */
function keyboardInGraph() {
  const active = document.activeElement;
  if (!active?.matches?.(":focus-visible")) return null;
  if (active.closest(".graph-node")) return { node: active.closest(".graph-node").dataset.nodeId };
  if (active.closest(".graph-edge")) return { edge: active.closest(".graph-edge").dataset.edgeId };
  return null;
}

function restoreGraphKeyboard(kept) {
  if (!kept || document.activeElement?.closest?.(".graph-node, .graph-edge")) return;
  const again = kept.edge
    ? elements["graph-edges"].querySelector(`[data-edge-id="${CSS.escape(kept.edge)}"]`)
    : elements["graph-nodes"].querySelector(`.graph-node[data-node-id="${CSS.escape(kept.node)}"]`);
  (again ?? elements["graph-nodes"].querySelector('.graph-node[tabindex="0"]'))?.focus({ preventScroll: true });
}

/** Put the keyboard in the stage, on what holds its Tab stop in this view. */
function focusStage() {
  const stage = elements["neighborhood-graph"].closest(".graph-stage");
  const target = state.mode === "table" ? stage.querySelector('.arising-chip[tabindex="0"]')
    : state.mode === "work" ? stage.querySelector('.work-row[tabindex="0"]') ?? stage.querySelector("[data-work-control]")
      : stage.querySelector('.graph-node[tabindex="0"]');
  if (target?.classList.contains("graph-node")) focusGraphCard(target.dataset.nodeId);
  else (target ?? stage).focus();
  // The reader came for the whole view: the card's own highlight waits until the keyboard moves.
  clearGraphHighlight();
}

/** What the stage shows, as far as a control pressed elsewhere can change it. In the table and Open work the focus only follows the selection, and no case is drawn. */
function stageView() {
  const list = state.mode === "table" || state.mode === "work";
  return JSON.stringify([state.mode, list ? null : state.focusId, list ? null : state.recordFocusId, state.pathTarget, list ? null : state.interactionCaseId]);
}

/** On a narrow page the panels stack: a choice made in the inspector, below the view, would draw out of sight. */
function showViewOnNarrowPage() {
  if (navigatorStacked()) elements["studio"].scrollIntoView({ block: "start" });
}

/**
 * A control pressed in the inspector or the graph message is drawn again, and the keyboard would fall back to the page.
 * One that opens a view hands it to the stage. One that changes only the inspector hands it to the inspector's heading,
 * or from a relation back to the badge that opened it. A pointer's click (detail above 0) has no keyboard to keep.
 * Either way, a press that changes the view shows it where the panels stack, and so does a keyboard sent to the stage by a press that changed nothing.
 */
function bindKeyboardLanding() {
  let pressed = null;
  document.addEventListener("click", (event) => {
    const control = event.target.closest?.(".inspector-panel button, #graph-message button");
    // Asked before the press: the handler takes the control out of the page.
    // Only Back to returns to the badge that opened the relation; any other row lands on the heading of what it opens.
    pressed = control ? {
      keyboard: event.detail === 0,
      opensView: Boolean(control.closest("#record-actions, #graph-message")),
      view: stageView(),
      relation: control.closest(".back-to-record") ? state.selectedRelationId : null
    } : null;
  }, true);
  document.addEventListener("click", () => {
    if (!pressed) return;
    const { keyboard, opensView, view, relation } = pressed;
    pressed = null;
    const changed = stageView() !== view;
    if (changed) showViewOnNarrowPage();
    if (!keyboard) return;
    // A control that stays keeps the keyboard, unless its press changed the view. A hidden one still holds the focus until the browser next lays out the page.
    // After Back to, the heading only stands in for the badge: details already loaded hand it the keyboard between these two listeners.
    const active = document.activeElement;
    const standIn = Boolean(relation) && active === elements["selected-name"];
    if (!changed && active !== document.body && !standIn && active.getClientRects().length) return;
    if (opensView && !changed) showViewOnNarrowPage();
    if (opensView || changed) focusStage();
    else landInInspector(relation);
  });
}

/** The control the keyboard is on in the inspector, when it is there. */
function keyboardInInspector() {
  const active = document.activeElement;
  return active?.closest?.(".inspector-panel") && active.matches(":focus-visible") ? active : null;
}

/** A record's details arrive after the rest of the inspector and replace what lies in them: the keyboard then goes to the heading. What they only push down stays in sight. */
function restoreInspectorKeyboard(kept) {
  if (!kept) return;
  if (kept.isConnected && kept.getClientRects().length) kept.scrollIntoView({ block: "nearest" });
  else elements["selected-name"].focus();
}

function landInInspector(relation) {
  const inRelation = !elements["relation-inspector"].hidden;
  const badge = relation && !inRelation ? elements["record-inspector"].querySelector(`.cause-badge[data-relation-id="${CSS.escape(relation)}"]`) : null;
  (badge ?? (inRelation ? elements["relation-inspector"].querySelector("h3") : elements["selected-name"])).focus();
}

function columnHeading(layer, mode) {
  if (mode === "subgraph" || mode === "path") return null;
  if (layer === 0) return "Focus";
  const distance = Math.abs(layer);
  if (mode === "causal") {
    if (layer < 0) return distance === 1 ? "Causes" : "Earlier causes";
    return distance === 1 ? "Dependents" : "Later dependents";
  }
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
function drawLayout(layout, { nodes, edges, info, focusId, mode, anchorId, overview = false, pills = null, start = false }) {
  const kept = keyboardInGraph();
  const nodesById = new Map(nodes.map((node) => [node.id, node]));
  const edgesById = new Map(edges.map((edge) => [edge.id, edge]));
  const columns = [];
  if (mode !== "subgraph" && mode !== "path") {
    for (const column of layout.columns) {
      const inColumn = layout.nodes.filter((node) => node.layer === column.layer).length;
      if (inColumn === 0) continue;
      // Expanding a neighbour can put other cards beside the focus; the column is then no longer only the focus.
      if (column.layer === 0 && inColumn > 1) continue;
      // A case overview also draws records with no line to the focus: only the focus's own column can be named.
      if (overview && column.layer !== 0) continue;
      const heading = columnHeading(column.layer, mode);
      if (!heading) continue;
      const text = svgElement("text", { class: "graph-column-label", x: column.x, y: columnHeadingY(layout) });
      text.textContent = heading;
      columns.push(text);
    }
  }
  elements["graph-columns"].replaceChildren(...columns);
  const routes = new Map(layout.edges.map((route) => [route.id, route]));
  // Lines that do not touch the focus step back. A subgraph has no focus, a case overview is drawn for all
  // its relations alike, and a focus without lines of its own leaves nothing to step back from.
  elements["graph-edges"].dataset.hasFocus = String(Boolean(focusId) && !overview && layout.edges.some((route) => route.source === focusId || route.target === focusId));
  elements["graph-edges"].replaceChildren(...layout.edges.map((route) => drawEdge(edgesById.get(route.id), route, focusId)));
  elements["graph-nodes"].replaceChildren(
    ...layout.nodes.map((box) => drawNodeCard(nodesById.get(box.id), { ...info.get(box.id), pill: pills?.get(box.id) }, box)),
    ...layout.nodes.filter((box) => pills?.has(box.id)).map((box) => drawExpansionPill(box, pills.get(box.id), displayName(nodesById.get(box.id))))
  );
  activeGraphProjection = { nodes: layout.nodes.map(({ id }) => ({ id })), edges: [...routes.values()].map(({ id, source, target }) => ({ id, source, target })) };
  activeGraphInfo = { layout, anchorId, info, start };
  const viewport = ensureViewport();
  viewport.setContent(layout.width, layout.height);
  syncGraphRoving();
  restoreGraphKeyboard(kept);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (const group of [elements["graph-nodes"], elements["graph-edges"], elements["graph-columns"]]) {
      group.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: "ease-out" });
    }
  }
}

function fitGraph() {
  if (!activeGraphInfo || !graphViewport) return;
  const { layout, anchorId, start } = activeGraphInfo;
  const chosen = layout.nodes.find((node) => node.id === anchorId);
  // With no chosen card, a drawing that starts in its first column opens on that column, from its top when it is taller than the stage.
  const firstLayer = Math.min(...layout.nodes.map((node) => node.layer));
  const firstColumn = start && !chosen ? layout.nodes.filter((node) => node.layer === firstLayer) : [];
  const column = firstColumn.length ? {
    top: Math.min(...firstColumn.map((node) => node.y - node.height / 2)),
    bottom: Math.max(...firstColumn.map((node) => node.y + node.height / 2))
  } : null;
  graphViewport.fit({
    anchor: chosen ? { x: chosen.x, y: chosen.y } : column ? { x: 0, y: (column.top + column.bottom) / 2 } : null,
    column,
    bottomInset: elements["stage-legend"].offsetHeight + 12,
    readableScale: 0.68,
    maxFitScale: 1,
    start
  });
  scheduleMinimap();
}

function setExportMenu(open) {
  // The menu is about to hide with the keyboard in it. A pointer has no such place to keep.
  if (!open && elements["export-menu"].contains(document.activeElement) && document.activeElement.matches(":focus-visible")) elements["export-toggle"].focus();
  elements["export-menu"].hidden = !open;
  elements["export-toggle"].setAttribute("aria-expanded", String(open));
  if (open) elements["export-status"].hidden = true;
}

/** Save the drawing on the stage, whole, as a file that stands alone. */
async function exportGraph(format, palette) {
  if (!activeGraphInfo) return;
  const { svg, width, height } = buildExportSvg(elements["neighborhood-graph"], activeGraphInfo.layout, { palette });
  const text = `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(svg)}`;
  const focus = nodeSummary(state.mode === "records" ? (state.recordFocusId ?? state.focusId) : state.focusId);
  const fileName = exportFileName({ modelId: state.manifest.model.id, focusName: focus ? displayName(focus) : "", view: state.mode, format, palette });
  try {
    const blob = format === "svg"
      ? new Blob([text], { type: "image/svg+xml" })
      : await svgToPngBlob(text, width, height, pngScale(width, height));
    if (!blob) throw new Error("The browser returned no image.");
    downloadBlob(blob, fileName);
    setExportMenu(false);
  } catch {
    elements["export-status"].textContent = "This browser could not make the image. Try SVG.";
    elements["export-status"].hidden = false;
  }
}

/** What print changes on the page, to put back afterwards. */
let printRestore = null;

/** Paper colours, the whole drawing without pan and zoom, and the table with its names. */
function preparePrint() {
  if (printRestore) return;
  const graph = elements["neighborhood-graph"];
  const group = elements["graph-viewport"];
  const transform = group.getAttribute("transform");
  const density = state.tableDensity;
  clearGraphHighlight();
  document.body.classList.add(PAPER_CLASS);
  if (state.mode === "table" && density !== "names") {
    state.tableDensity = "names";
    renderArisingTable();
    renderLegend();
  } else if (state.mode !== "table" && state.mode !== "work" && activeGraphInfo) {
    graph.setAttribute("viewBox", `0 0 ${activeGraphInfo.layout.width} ${activeGraphInfo.layout.height}`);
    group.removeAttribute("transform");
  }
  printRestore = () => {
    document.body.classList.remove(PAPER_CLASS);
    graph.removeAttribute("viewBox");
    if (transform) group.setAttribute("transform", transform);
    if (state.tableDensity !== density) {
      state.tableDensity = density;
      if (state.mode === "table") {
        renderArisingTable();
        renderLegend();
      }
    }
  };
}

function finishPrint() {
  printRestore?.();
  printRestore = null;
}

/** How many causes of an arising cite evidence, out of all its causes. */
function causeEvidence(id) {
  const causes = state.causes?.byChild.get(id) ?? [];
  if (causes.length === 0) return null;
  return { supported: causes.filter(citesEvidence).length, total: causes.length };
}

/** Card contents for any record shown in a graph: its name, then what a reader needs at a glance. */
function cardInfo(node, { focusId, relation, external = false, showOwner = false } = {}) {
  if (isArising(node)) {
    const domain = domainOf(node);
    const level = levelName(node.level);
    return {
      focus: node.id === focusId,
      relation,
      domainIndex: domain?.index,
      status: node.scientificStatus,
      facts: [level, humanize(node.typeRole, null)].filter(Boolean).join(" \u00b7 "),
      factsShort: level,
      evidence: causeEvidence(node.id)
    };
  }
  if (state.ontology) {
    const owner = nodeSummary(node.arisingId);
    return {
      focus: node.id === focusId,
      relation,
      kind: recordKind(node.typeRole),
      external,
      facts: humanize(node.typeRole, "Record"),
      owner: (external || showOwner) && owner ? `in ${owner.name}` : null
    };
  }
  return { focus: node.id === focusId, relation, generic: true };
}

/** Whether a cause passes the role toggles and the With evidence and Necessary filters. */
function causeShown(edge) {
  return state.roleFilter.has(edge.role)
    && (!state.causeFilters.evidence || citesEvidence(edge))
    && (!state.causeFilters.necessary || edge.necessity === "necessary");
}

/** A presentation of the arisings and their causes that pass the filters, cached per filter set. */
function causePresentation() {
  const key = [...state.roleFilter].sort().join(",") + (state.causeFilters.evidence ? "|evidence" : "") + (state.causeFilters.necessary ? "|necessary" : "");
  if (!state.rolePresentations.has(key)) {
    const edges = state.ontology.causes.filter(causeShown);
    state.rolePresentations.set(key, createLazyModelPresentation({
      identity: state.graphInputForRoles.identity, nodes: state.ontology.arisings, edges
    }));
  }
  return state.rolePresentations.get(key);
}

/** What a reader can leave out of the causes, in words, or nothing when every cause shows. */
function causeFilterText() {
  const roles = state.roleFilter.size < CAUSE_ROLES.length ? [...state.roleFilter].map((role) => ROLE_TEXT[role].label.toLowerCase()).join(", ") || "no" : "";
  const kept = [state.causeFilters.necessary ? "necessary" : "", roles].filter(Boolean).join(" ");
  const narrowed = state.causeFilters.evidence ? `${kept ? `${kept} ` : ""}causes with evidence` : kept ? `${kept} causes` : "";
  return narrowed ? `Showing ${narrowed} only.` : "";
}

function clearCauseFilters() {
  state.roleFilter = new Set(CAUSE_ROLES);
  state.causeFilters = { evidence: false, necessary: false };
}

function graphMessage(messages, caseOverview = false, { reset = false, clearPath = false } = {}) {
  endSwitchFailure();
  elements["graph-message"].hidden = messages.length === 0;
  if (caseOverview && messages.length) {
    const scope = createElement("details");
    scope.append(createElement("summary", "", "View scope"));
    scope.append(createElement("p", "", messages.join(" ")));
    scope.addEventListener("toggle", syncMessageRoom);
    elements["graph-message"].replaceChildren(scope);
  } else {
    elements["graph-message"].replaceChildren(document.createTextNode(messages.join(" ")));
    if (reset && messages.length) {
      const button = createElement("button", "", state.causeFilters.evidence || state.causeFilters.necessary ? "Show all causes" : "Show all roles");
      button.type = "button";
      button.addEventListener("click", () => {
        clearCauseFilters();
        render();
      });
      elements["graph-message"].append(button);
    }
    if (clearPath) {
      const button = createElement("button", "", "Clear path");
      button.type = "button";
      button.addEventListener("click", () => {
        state.pathTarget = null;
        replaceLocationState({ push: true });
        render();
      });
      elements["graph-message"].append(button);
    }
  }
  syncMessageRoom();
}

/** A failed switch is over once the view moves on: the status names the release on screen again. */
function endSwitchFailure() {
  if (!state.switchFailed) return;
  state.switchFailed = false;
  elements["load-state"].textContent = state.loadMessage;
}

/** The message and the Lens and Case controls take their own strips above the drawing, so neither can ever lie over a card. */
function syncMessageRoom() {
  const message = elements["graph-message"];
  const lens = elements["interaction-view-controls"];
  const stage = message.parentElement;
  const messageHeight = message.hidden ? 0 : message.offsetHeight;
  stage?.style?.setProperty("--message-height", `${messageHeight}px`);
  stage?.style?.setProperty("--message-room", `${messageHeight + (!lens || lens.hidden ? 0 : lens.offsetHeight)}px`);
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
  let edgeRecords = projection.edges.map((edge) => ({ ...edge, ...(state.graphIndex.edgesById.get(edge.id) ?? {}) }));
  let nodes = projection.nodes;
  const roleSide = (node) => {
    const outgoing = edgeRecords.find((edge) => edge.source === focusId && edge.target === node.id);
    return outgoing?.role === "arising" || !outgoing ? 1 : -1;
  };
  let layers = isolatedCase ? null : neighbourhoodLayers(projection, roleSide);
  const causal = Boolean(layers) && causesMode && state.causalOrder && state.depth === 1;
  if (causal) layers = causalOrderLayers(layers, edgeRecords, focusId);
  const columnCount = layers ? new Set(layers.values()).size : 0;
  // Grown from the view as it stands: pills, and hidden nodes of a bounded view, belong to every graph except a case overview.
  const adjacency = selection?.selectedCase ? null : graphAdjacency(causesMode, selection);
  const growth = adjacency && layers ? expandGraph({
    nodeIds: nodes.map((node) => node.id), layers, edges: edgeRecords, expanded: state.expanded, adjacency, direction: state.direction, limits: EXPANSION_LIMITS
  }) : null;
  state.expansionAdded = growth?.added ?? [];
  if (growth) {
    state.expanded = growth.expanded;
    layers = growth.layers;
    // A card's column does not make it a cause or a dependent of the focus: a chain of lines does.
    const relationOf = growth.added.length ? relationToFocus(focusId, adjacency) : null;
    nodes = [...nodes, ...growth.added.map(({ id }) => ({ ...nodeSummary(id), relation: relationOf(id) }))];
    edgeRecords = growth.edges.map((edge) => ({ ...edge, ...(state.graphIndex.edgesById.get(edge.id) ?? {}) }));
  }
  // A card names its owning arising only when that differs from the arising of the focus.
  const focusOwner = isArising(nodeSummary(focusId)) ? focusId : nodeSummary(focusId)?.arisingId;
  const info = new Map(nodes.map((node) => [node.id, {
    ...cardInfo(node, { focusId, showOwner: recordsMode && node.arisingId !== focusOwner, relation: node.caseContext && node.id !== focusId ? "context" : ["focus", "parent", "child", "both", "context"].includes(node.relation) ? node.relation : "child" })
  }]));
  let layout;
  if (isolatedCase) {
    // Disconnected case cards share one size, the one their longest name and footer need.
    const nodeHeight = Math.max(...nodes.map((node) => cardHeight(node, 208, 72, node.id === focusId, info.get(node.id))));
    const cards = layoutIsolatedCaseCards(projection, { width: Math.max(320, stage.clientWidth), height: Math.max(240, stage.clientHeight), nodeHeight });
    layout = {
      width: cards.width, height: cards.height, columns: [], edges: [],
      nodes: cards.nodes.map((node) => ({ id: node.id, layer: 0, x: node.x, y: node.y, width: cards.nodeWidth, height: cards.nodeHeight }))
    };
  } else {
    // Sized by the base view, so growing the drawing does not shrink the cards a reader is looking at.
    const compact = columnCount > 3;
    const cardWidth = compact ? 164 : GRAPH_NODE.width;
    const sized = (node) => {
      const focus = node.id === focusId;
      const width = focus ? (compact ? 208 : GRAPH_NODE.focusWidth) : cardWidth;
      return { width, height: cardHeight(node, width, focus ? GRAPH_NODE.focusHeight : GRAPH_NODE.height, focus, info.get(node.id)) };
    };
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
  drawLayout(layout, { nodes, edges: edgeRecords, info, focusId, mode: causal ? "causal" : causesMode ? "causes" : recordsMode ? "records" : "graph", anchorId: focusId, overview: Boolean(selection?.selectedCase), pills: growth?.pills });

  const focus = projection.focus ?? nodeSummary(focusId);
  elements["graph-title"].textContent = displayName(focus);
  const owner = !isArising(focus) && state.ontology ? nodeSummary(focus.arisingId) : null;
  const caseTitle = selection?.selectedCase ? `Case: ${selection.selectedCase.title}` : null;
  elements["graph-subtitle"].textContent = (causesMode || isArising(focus)
    ? [humanize(focus.typeRole, null), levelName(focus.level) ? `Level ${focus.level} ${levelName(focus.level)}` : null, caseTitle]
    : [humanize(focus.typeRole, "Record"), owner ? `in ${owner.name}` : null, caseTitle]).filter(Boolean).join(" \u00b7 ");
  elements["neighborhood-graph"].setAttribute("aria-label", `${displayName(focus)}: ${nodes.length} visible nodes and ${edgeRecords.length} visible edges. Arrow keys move between the cards.`);
  const left = leftOut(projection, nodes, edgeRecords, adjacency, focusId, growth);
  const messages = [];
  if (selection?.perspective) messages.push(selection.perspective.boundary);
  if (selection?.selectedCase) messages.push("Case overview includes disconnected records. Card position does not establish an interaction.");
  if (selection?.focusOutsideView) messages.push(selection.memberNodeIds.length
    ? "The focus is outside this view and is retained without relations for context."
    : "This case has no records in the selected perspective. Its focus is shown only for context.");
  if (left.nodes + left.edges) {
    const parts = [left.nodes ? plural(left.nodes, "card") : "", left.edges ? plural(left.edges, "line") : ""].filter(Boolean).join(" and ");
    messages.push(`Bounded view: ${parts} left out. Use + on a card to add its neighbours, or lower the depth.`);
  }
  if (growth?.limited) messages.push(`This drawing is at its limit of ${EXPANSION_LIMITS.maxNodes} cards and ${EXPANSION_LIMITS.maxEdges} lines. Use the minus sign on a card to make room.`);
  const filterText = causesMode ? causeFilterText() : "";
  if (filterText) messages.push(filterText);
  if (filterText && nodes.length === 1) messages.push("No cause or dependent of this arising passes these filters.");
  graphMessage(messages, Boolean(selection?.selectedCase), { reset: Boolean(filterText) });
  const noun = causesMode ? ["arising", "cause"] : ["record", "relation"];
  elements["graph-counts"].textContent = `${plural(nodes.length, noun[0])} \u00b7 ${plural(edgeRecords.length, noun[1])} \u00b7 ${selection?.selectedCase ? "case overview" : `depth ${state.depth}`}`;
  elements["graph-hint"].textContent = `Click: inspect \u00b7 Double-click: focus \u00b7 ${growth?.pills.size ? "Click +: add cards \u00b7 " : ""}Drag or scroll: pan \u00b7 Ctrl+scroll: zoom`;
}

/** Expansion belongs to one view: every view, drawn or not, ends it when the focus, depth, mode, path or lens changed. */
function endExpansionOutOfScope() {
  const focusId = state.mode === "records" ? (state.recordFocusId ?? state.focusId) : state.focusId;
  const scope = [state.presentation, state.mode, focusId, state.depth, state.pathTarget, state.interactionPerspectiveId, state.interactionCaseId];
  if (!state.expansionScope || scope.some((value, index) => value !== state.expansionScope[index])) state.expanded = [];
  state.expansionScope = scope;
}

/** Causes and dependents for Causes, under its filters; the release's relations, or a lens's, elsewhere. */
function graphAdjacency(causesMode, selection) {
  if (causesMode) {
    return {
      incoming: (id) => (state.causes.byChild.get(id) ?? []).filter(causeShown),
      outgoing: (id) => (state.causes.byParent.get(id) ?? []).filter(causeShown)
    };
  }
  if (selection) {
    const { incoming, outgoing } = buildGraphIndex([], selection.input.edges);
    return { incoming: (id) => incoming.get(id) ?? [], outgoing: (id) => outgoing.get(id) ?? [] };
  }
  return { incoming: (id) => state.graphIndex.incoming.get(id) ?? [], outgoing: (id) => state.graphIndex.outgoing.get(id) ?? [] };
}

/** How much of the depth's neighbourhood is not drawn. Growing the drawing brings hidden cards in, so it is counted again then. */
function leftOut(projection, nodes, edges, adjacency, focusId, growth) {
  const { hiddenNodeCount, hiddenEdgeCount, availableEdgeCount } = projection.counts;
  if (!growth?.expanded.length || !adjacency) return { nodes: hiddenNodeCount, edges: hiddenEdgeCount };
  const reachable = reachableWithin(focusId, state.depth, state.direction, adjacency);
  const shown = new Set(nodes.map((node) => node.id));
  const drawn = edges.filter((edge) => reachable.has(edge.source) && reachable.has(edge.target)).length;
  return { nodes: [...reachable].filter((id) => !shown.has(id)).length, edges: Math.max(0, availableEdgeCount - drawn) };
}

/** A chain of causes between two arisings, one column per step. It is built from the causes that pass the filters. */
function renderPath() {
  emptyStage(null);
  const from = state.focusId;
  const to = state.pathTarget;
  const found = connection(state.ontology.causes.filter(causeShown), from, to);
  const stage = elements["neighborhood-graph"].closest(".graph-stage");
  stage.dataset.isolatedCase = "false";
  const nodes = found.columns.map((id) => nodeSummary(id));
  const ends = found.kind === "backward" ? [to, from] : [from, to];
  const endSet = new Set(ends);
  const info = new Map(nodes.map((node) => [node.id, { ...cardInfo(node, { focusId: null }), focus: endSet.has(node.id) }]));
  const compact = nodes.length > 3;
  const cardWidth = compact ? 164 : GRAPH_NODE.width;
  const layout = layoutLayeredGraph({
    nodes: nodes.map((node, index) => {
      const focus = endSet.has(node.id);
      const width = focus ? (compact ? 208 : GRAPH_NODE.focusWidth) : cardWidth;
      return { id: node.id, layer: index, rank: 0, width, height: cardHeight(node, width, focus ? GRAPH_NODE.focusHeight : GRAPH_NODE.height, focus, info.get(node.id)) };
    }),
    edges: found.edges
  }, { nodeWidth: cardWidth, nodeHeight: GRAPH_NODE.height, columnGap: compact ? 66 : 100, padding: 44, maxRows: 26 });
  drawLayout(layout, { nodes, edges: found.edges, info, focusId: null, mode: "path", anchorId: null, start: true });
  const [first, last] = ends.map((id) => nodeSummary(id).name);
  elements["graph-title"].textContent = `Path: ${first} to ${last}`;
  const citing = found.steps - found.hypotheses;
  elements["graph-subtitle"].textContent = found.kind === "none" ? "No chain" : `${plural(found.steps, "step")} \u00b7 ${citing} ${citing === 1 ? "cites" : "cite"} evidence`;
  elements["neighborhood-graph"].setAttribute("aria-label", `Path: ${first} to ${last}, ${plural(found.steps, "step")}. Arrow keys move between the cards.`);
  const filterText = causeFilterText();
  const messages = [];
  if (found.kind === "none") messages.push(filterText ? `No chain joins ${first} and ${last} with the current filters.` : `No chain of causes joins ${first} and ${last}.`);
  if (found.kind === "backward") messages.push(`No chain runs from ${nodeSummary(from).name} to ${nodeSummary(to).name}, so this one runs the other way.`);
  if (found.kind === "common-cause") messages.push(`Neither leads to the other. Both follow from a nearest common cause: ${nodeSummary(found.cause).name}.`);
  if (filterText) messages.push(filterText);
  if (messages.length === 0) messages.push("The shortest chain of causes.");
  graphMessage(messages, false, { reset: Boolean(filterText), clearPath: true });
  elements["graph-counts"].textContent = `${plural(nodes.length, "arising")} \u00b7 ${plural(found.edges.length, "cause")} \u00b7 path`;
  elements["graph-hint"].textContent = "Click: inspect \u00b7 Double-click: focus and leave the path \u00b7 Drag or scroll: pan \u00b7 Ctrl+scroll: zoom";
}

/** The technical subgraph of the focused arising, with the records it borrows from other arisings. */
function renderSubgraph() {
  const arising = nodeSummary(state.focusId);
  const members = state.ontology.members.get(state.focusId) ?? [];
  const memberSet = new Set(members);
  elements["graph-title"].textContent = `Subgraph of ${arising?.name ?? "the arising"}`;
  elements["graph-subtitle"].textContent = "What the arising is and how it is known";
  elements["neighborhood-graph"].setAttribute("aria-label", `Technical subgraph of ${arising?.name ?? "the arising"}. Arrow keys move between the cards.`);
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
    state.lineStretch = null;
    elements["graph-counts"].textContent = "0 records";
    elements["graph-hint"].textContent = "";
    return;
  }
  emptyStage(null);
  state.lineStretch = null;
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
  const info = new Map(nodes.map((node) => [node.id, cardInfo(node, { focusId: null, relation: undefined, external: !memberSet.has(node.id) })]));
  const layout = layoutLayeredGraph({
    nodes: nodes.map((node) => ({
      id: node.id,
      layer: layers.get(node.id),
      rank: (memberSet.has(node.id) ? 0 : 10) + (kindRank[recordKind(node.typeRole)] ?? 6),
      height: cardHeight(node, SUBGRAPH_NODE.width, SUBGRAPH_NODE.height, false, info.get(node.id))
    })),
    edges: relations
  }, { nodeWidth: SUBGRAPH_NODE.width, nodeHeight: SUBGRAPH_NODE.height, columnGap: 72, laneGap: 26, rowGap: 14, padding: 36, maxRows: rows, sharedRuns: true });
  // A drawing wider than the stage opens where it starts; a record the reader chose stays on stage.
  const anchorId = members.includes(state.selectedId) ? state.selectedId : null;
  drawLayout(layout, { nodes, edges: relations, info, focusId: null, mode: "subgraph", anchorId, start: true });
  graphMessage([]);
  elements["graph-counts"].textContent = `${plural(members.length, "record")} \u00b7 ${plural(relations.length, "relation")} \u00b7 ${plural(external.length, "record")} of other arisings`;
  elements["graph-hint"].textContent = "Double-click a record to follow it; a dashed one opens its arising";
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
    for (const [link, label] of [["cause", "cause"], ["dependent", "dependent"], ["both", "both"]]) {
      const swatch = createElement("i", "legend-swatch");
      swatch.style.setProperty("--legend-color", link === "cause" ? "var(--blue-bright)" : link === "dependent" ? (state.tableDensity === "map" ? "var(--text-bright)" : "var(--green)") : "var(--purple)");
      items.push(legendItem(swatch, label));
    }
    for (const role of CAUSE_ROLES) {
      const line = createElement("i", "legend-line");
      line.dataset.role = role;
      items.push(legendItem(line, ROLE_TEXT[role].label));
    }
    for (const [style, label] of [["dashed", "hypothesized"], ["dotted", "placeholder"]]) {
      const card = createElement("i", "legend-card");
      card.dataset.style = style;
      items.push(legendItem(card, label));
    }
  } else if (state.mode === "causes") {
    const share = createElement("b", "legend-evidence", "\u2713 2/3");
    items.push(legendItem(share, "causes that cite evidence"));
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
    for (const [kind, label] of [["context", "context"], ["process", "scoped process"], ["structure", "structure"], ["hypothesis", "hypothesis"], ["definition", "definition"], ["rule", "rule"], ["other", "other"]]) {
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
  elements["graph-counts"].textContent = `${plural(state.ontology.arisings.length, "arising")} in ${plural(table.domains.size, "domain")}`;
  elements["graph-hint"].textContent = "Click: inspect and show its causes \u00b7 Double-click: open the causes graph";
  graphMessage([]);
  emptyStage(null);
  fitArisingMap();
  updateArisingTable();
}

/** Size the Map to the room it has: every line of chrome around the grid is measured, not assumed. */
function fitArisingMap() {
  const panel = elements["arising-table-panel"];
  const root = elements["arising-table"];
  const grid = root.querySelector(".arising-grid");
  if (!grid || !state.tableMap || panel.hidden || panel.clientHeight === 0) return;
  root.dataset.density = state.tableDensity;
  root.dataset.colour = state.tableColour;
  if (state.tableDensity !== "map") {
    delete panel.dataset.fits;
    panel.style.removeProperty("--legend-room");
    grid.style.removeProperty("--tile");
    grid.style.removeProperty("--tile-gap");
    const padding = getComputedStyle(panel);
    const fit = fitNamesColumns({ ...state.tableMap.names, width: panel.clientWidth - parseFloat(padding.paddingLeft) - parseFloat(padding.paddingRight) });
    grid.style.gridTemplateColumns = fit.template;
    grid.dataset.bands = String(fit.bands);
    grid.dataset.tight = String(fit.tight);
    return;
  }
  delete grid.dataset.bands;
  delete grid.dataset.tight;
  // The floating legend keeps its own strip at the bottom of the stage.
  const legend = elements["stage-legend"].getBoundingClientRect();
  const stage = panel.getBoundingClientRect();
  const legendRoom = Math.ceil(stage.bottom - legend.top) + 2;
  panel.style.setProperty("--legend-room", `${legendRoom}px`);
  const measure = () => {
    const after = grid.nextElementSibling;
    const below = after ? after.offsetHeight + parseFloat(getComputedStyle(root).rowGap || "0") : 0;
    const above = grid.getBoundingClientRect().top - stage.top + panel.scrollTop;
    return fitTableMap({
      rows: state.tableMap.rows,
      width: root.clientWidth,
      height: Math.floor(panel.clientHeight - above - below - legendRoom),
      gap: tileGap,
      labelWidth: TABLE_MAP.labelWidth,
      headHeight: TABLE_MAP.headHeight,
      columnGap: TABLE_MAP.columnGap,
      rowGap: TABLE_MAP.rowGap,
      cellChrome: TABLE_MAP.cellChrome,
      minRowHeight: TABLE_MAP.minRowHeight,
      minTile: TABLE_MAP.minTile,
      maxTile: TABLE_MAP.maxTile,
      // The narrowest panels drop the counts from the headings, as the styles do at this same width.
      minColumn: root.clientWidth <= TABLE_MAP.bareWidth ? state.tableMap.bareColumns : state.tableMap.minColumns
    });
  };
  // Asked without scrollbars first: a panel that scrolled before must not keep scrolling for their sake.
  panel.dataset.fits = "true";
  let fit = measure();
  if (fit.fits) panel.scrollTo(0, 0);
  else {
    // The panel scrolls, and its scrollbars take room from the same map.
    panel.dataset.fits = "false";
    fit = measure();
  }
  grid.style.setProperty("--tile", `${fit.tile}px`);
  grid.style.setProperty("--tile-gap", `${fit.gap}px`);
  grid.style.gridTemplateColumns = `${TABLE_MAP.labelWidth}px ${fit.columns.map((width) => `${width}px`).join(" ")}`;
}

/** One line under the controls names what a tile cannot: the hovered arising, or else the selected one. */
function updateTableReadout(id) {
  const readout = elements["arising-table"].querySelector(".arising-readout");
  if (!readout) return;
  const node = id ? nodeSummary(id) : null;
  readout.dataset.empty = String(!node);
  const [swatch, name, meta, evidence] = readout.children;
  if (!node) {
    delete swatch.dataset.domainIndex;
    swatch.hidden = true;
    name.textContent = "";
    meta.replaceChildren();
    evidence.replaceChildren();
    readout.dataset.hint = state.tableDensity === "map" ? "Point at a square to read it. Click it to see its causes." : "Point at an arising to see its links. Click it to read about it.";
    return;
  }
  const domain = domainOf(node);
  swatch.hidden = false;
  if (domain) swatch.dataset.domainIndex = String(domain.index);
  else delete swatch.dataset.domainIndex;
  const coverage = causeEvidence(id);
  const tint = evidenceTint(coverage);
  swatch.dataset.evidence = tint === null ? "none" : "some";
  swatch.style.setProperty("--evidence", String(tint ?? 0));
  swatch.dataset.status = String(node.scientificStatus);
  name.textContent = node.name;
  const facts = [];
  if (domain) {
    const place = createElement("span");
    place.append(createElement("span", "arising-short", shortDomainName(domain.name)), createElement("span", "arising-full", domain.name));
    facts.push(place);
  }
  const level = createElement("span", "", `Level ${node.level}`);
  if (levelName(node.level)) level.append(createElement("span", "arising-full", ` ${levelName(node.level)}`));
  facts.push(level);
  if (phaseName(node.phase)) facts.push(createElement("span", "", phaseName(node.phase)));
  meta.replaceChildren(...facts);
  if (coverage) evidence.replaceChildren(`${coverage.supported}/${coverage.total} `, createElement("span", "arising-readout-word", "causes "), "cite evidence");
  else evidence.textContent = "No causes in the graph";
}

function updateArisingTable() {
  if (!state.ontology || state.arisingTableFor !== state.presentation) return;
  for (const item of elements["arising-table"].querySelectorAll(".arising-legend-item")) {
    item.setAttribute("aria-pressed", String(state.domainFilter === item.dataset.domain));
  }
  const disciplineSelect = elements["arising-table"].querySelector(".arising-discipline select");
  if (disciplineSelect) {
    disciplineSelect.value = state.disciplineFilter === null ? "" : JSON.stringify(state.disciplineFilter);
  }
  const linkedId = state.tablePreviewId ?? state.selectedId;
  const linked = isArising(nodeSummary(linkedId)) ? linkedId : null;
  updateTableReadout(linked);
  const causes = new Map((state.causes.byChild.get(linked) ?? []).map((edge) => [edge.source, edge]));
  const dependents = new Map((state.causes.byParent.get(linked) ?? []).map((edge) => [edge.target, edge]));
  // Hovering previews one arising's links and dims the rest; a selection keeps the table readable.
  elements["arising-table"].dataset.preview = String(Boolean(state.tablePreviewId && linked));
  let matching = 0;
  for (const chip of elements["arising-table"].querySelectorAll(".arising-chip")) {
    const id = chip.dataset.nodeId;
    chip.dataset.selected = String(id === state.selectedId);
    chip.dataset.focus = String(id === state.focusId);
    chip.dataset.previewSource = String(id === state.tablePreviewId);
    const dimmed = Boolean(state.domainFilter && chip.dataset.domain !== state.domainFilter)
      || (state.disciplineFilter !== null && !hasDiscipline(id, state.disciplineFilter));
    if (chip.dataset.dimmed !== String(dimmed)) chip.setAttribute("aria-description", chipDescription(id, dimmed));
    chip.dataset.dimmed = String(dimmed);
    markCurrent(chip, id === state.selectedId);
    if (!dimmed) matching += 1;
    const link = causes.has(id) && dependents.has(id) ? "both" : causes.has(id) ? "cause" : dependents.has(id) ? "dependent" : null;
    if (link && id !== linked) chip.dataset.link = link;
    else delete chip.dataset.link;
    delete chip.dataset.lineage;
  }
  if (state.mode === "table") {
    const total = plural(state.ontology.arisings.length, "arising");
    const table = state.presentationMetadata.arisingTable;
    // The heading has a line of its own for these long names; in the footer they would squeeze the hint.
    const scope = [disciplineOf(state.disciplineFilter)?.name, table.domains.get(state.domainFilter)?.name].filter(Boolean).join(" in ");
    const heading = scope ? `${scope}: ${matching} of ${total}` : `${total} \u00b7 ${plural(state.ontology.causes.length, "cause")} \u00b7 levels by phases`;
    // A status region: only a real change is read out, not every hover or arrow key that passes through here.
    if (elements["graph-subtitle"].textContent !== heading) elements["graph-subtitle"].textContent = heading;
  }
  drawTableLinks(linked, causes, dependents);
  syncTableRoving();
}

/** What a tile shows by its colour and border; a description replaces the title for a screen reader, so it says the title's part as well. */
function chipDescription(id, dimmed) {
  const node = nodeSummary(id);
  const domain = state.presentationMetadata.arisingTable.domains.get(node?.domain);
  const coverage = causeEvidence(id);
  return `${humanize(node?.scientificStatus)}${domain ? `; ${domain.name}` : ""}.${coverage ? ` ${evidenceShare(coverage.supported, coverage.total)}.` : ""}${dimmed ? " Outside the current filter." : ""}`;
}

/** The table is one Tab stop: the arising the keyboard is on, or else the selected one, the focused one, the first. */
function syncTableRoving() {
  const chips = [...elements["arising-table"].querySelectorAll(".arising-chip")];
  const active = document.activeElement?.closest?.(".arising-chip");
  setRovingStop(chips, active ?? chips[rovingEntry(chips.map((chip) => chip.dataset.nodeId), [state.selectedId, state.focusId])]);
}

/** Arrow keys move through the table as it is drawn, in either density. Enter is the chip's own click. */
function tableGridKeydown(event) {
  const chip = event.target.closest(".arising-chip");
  if (!chip || event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key === " " || (event.key === "Enter" && event.shiftKey)) {
    event.preventDefault();
    focusNode(chip.dataset.nodeId, { mode: "causes" });
    focusStage();
    return;
  }
  const chips = [...event.currentTarget.querySelectorAll(".arising-chip")];
  const direction = arrowDirection(event.key);
  if (direction) {
    event.preventDefault();
    const boxes = chips.map((item) => {
      const rect = item.getBoundingClientRect();
      return { id: item.dataset.nodeId, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width, height: rect.height };
    });
    const next = nearestInDirection(boxes, chip.dataset.nodeId, direction);
    if (next) chips.find((item) => item.dataset.nodeId === next).focus();
  } else if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    chips[rovingStep(chips.length, chips.indexOf(chip), event.key)].focus();
  }
}

/** Keyboard focus reads a tile as the pointer does. A click leaves the reading to the selection. */
function tableGridFocusin(event) {
  syncTableRoving();
  const chip = event.target.closest(".arising-chip");
  if (!chip?.matches(":focus-visible")) return;
  clearTimeout(state.tablePreviewClear);
  state.tablePreviewId = chip.dataset.nodeId;
  updateArisingTable();
  // The sticky headings and the floating legend lie over a panel that scrolls, and the browser does not know them.
  keepFocusClear(chip, elements["arising-table-panel"], elements["arising-table"].querySelector(".arising-table-phase").getBoundingClientRect().bottom, elements["stage-legend"].getBoundingClientRect().top);
}

function tableGridFocusout(event) {
  if (event.relatedTarget?.closest?.(".arising-chip")) return;
  clearTimeout(state.tablePreviewClear);
  state.tablePreviewClear = setTimeout(() => {
    state.tablePreviewId = elements["arising-table"].querySelector(".arising-chip:hover")?.dataset.nodeId ?? null;
    updateArisingTable();
  }, 70);
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

/** The first screen of a long table may hold none of the arisings a filter keeps: show where they begin. The Map holds them all on one screen. */
function showFirstTableMatch() {
  if (state.tableDensity !== "names") return;
  elements["arising-table"].querySelector('.arising-chip[data-dimmed="false"]')?.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

/** The table's Discipline select dims the arisings outside one field of study, together with the domain chips. */
function tableDisciplineFilter() {
  const label = createElement("label", "arising-discipline");
  const select = createElement("select");
  populateSelect(select, state.disciplines, "All disciplines", (value) => disciplineOf(value)?.name ?? "");
  select.addEventListener("change", () => {
    state.disciplineFilter = selectFacetValue(select)[0] ?? null;
    updateArisingTable();
    if (state.disciplineFilter !== null) showFirstTableMatch();
  });
  label.append(createElement("span", "arising-legend-title", "Discipline"), select);
  return label;
}

/** A segmented control of the table's legend row; the choice is remembered by the caller. */
function tableSegmented(name, options, current, choose) {
  const field = createElement("fieldset", "segmented arising-segmented");
  field.append(createElement("legend", "", name));
  for (const [value, text] of options) {
    const button = createElement("button", "", text);
    button.type = "button";
    button.setAttribute("aria-pressed", String(value === current));
    button.addEventListener("click", () => {
      for (const other of field.querySelectorAll("button")) other.setAttribute("aria-pressed", String(other === button));
      choose(value);
    });
    field.append(button);
  }
  return field;
}

/** The first-visit banner: what the two words on this screen mean. Closing it gives its room to the map. */
function tableIntro() {
  const intro = createElement("div", "arising-intro");
  intro.dataset.roving = "horizontal";
  intro.setAttribute("role", "group");
  intro.setAttribute("aria-label", "Introduction");
  const text = createElement("p");
  const count = state.ontology.arisings.length;
  text.append(createElement("strong", "", "An arising"), document.createTextNode(" is an object, process or effect that comes from earlier interactions. "),
    createElement("strong", "", "A cause"), document.createTextNode(" links it to what it comes from. "),
    createElement("span", "arising-intro-map", `Each of the ${count} squares is one arising: point at it to read its name.`),
    createElement("span", "arising-intro-names", `Each of the ${count} names is one arising: click it to see its causes.`));
  const guide = createElement("button", "arising-intro-guide", "How to read this");
  guide.type = "button";
  guide.addEventListener("click", () => openDialog(elements["guide-dialog"]));
  const close = createElement("button", "arising-intro-close");
  close.type = "button";
  close.setAttribute("aria-label", "Close this introduction");
  const cross = svgElement("svg", { viewBox: "0 0 12 12", "aria-hidden": "true" });
  cross.append(svgElement("path", { d: "M2.5 2.5l7 7M9.5 2.5l-7 7" }));
  close.append(cross);
  close.addEventListener("click", () => {
    state.introDismissed = true;
    savePreference("introDismissed", true);
    intro.remove();
    fitArisingMap();
    updateArisingTable();
    // The keyboard goes on from where the banner was, to the first control of the legend row.
    const legend = elements["arising-table"].querySelector(".arising-legend");
    if (legend) visibleRovingItems(legend)[0]?.focus({ preventScroll: true });
  });
  intro.append(text, guide, close);
  return intro;
}

/** The legend row of the table: how it is drawn on the first line, which domains on the second. */
function tableLegend(table, items) {
  const legend = createElement("div", "arising-legend");
  legend.dataset.roving = "horizontal";
  legend.setAttribute("role", "toolbar");
  legend.setAttribute("aria-label", "How the table is drawn");
  const controls = createElement("div", "arising-legend-controls");
  const density = tableSegmented("Density", [["map", "Map"], ["names", "Names"]], state.tableDensity, (value) => {
    state.tableDensity = value;
    savePreference("tableDensity", value);
    renderLegend();
    fitArisingMap();
    updateArisingTable();
  });
  const colour = createElement("span", "arising-colour");
  colour.append(createElement("span", "arising-legend-title", "Colour"), tableSegmented("Colour", [["domain", "Domain"], ["evidence", "Evidence"]], state.tableColour, (value) => {
    state.tableColour = value;
    savePreference("tableColour", value);
    fitArisingMap();
    updateArisingTable();
  }));
  const scale = createElement("span", "arising-evidence-scale");
  scale.setAttribute("role", "img");
  scale.setAttribute("aria-label", "The share of an arising's causes that cite evidence, from 0 to 100 percent");
  scale.append(createElement("span", "", "0%"), createElement("i", "arising-evidence-ramp"), createElement("span", "", "100%"));
  const lineage = createElement("button", "arising-lineage-toggle", "Lineage from the root");
  lineage.type = "button";
  lineage.title = "Draw the chain of arising-role causes from the root to the selected arising";
  lineage.setAttribute("aria-pressed", String(state.showLineage));
  lineage.addEventListener("click", () => {
    state.showLineage = !state.showLineage;
    lineage.setAttribute("aria-pressed", String(state.showLineage));
    updateArisingTable();
  });
  controls.append(density, colour, scale, lineage, ...(state.disciplines.length ? [tableDisciplineFilter()] : []));
  legend.append(controls);
  if (table.domains.size) {
    const domains = createElement("div", "arising-legend-domains");
    domains.append(createElement("span", "arising-legend-title", "Domains"));
    for (const domain of table.domains.values()) {
      const count = items.filter((node) => node.domain === domain.value).length;
      const item = createElement("button", "arising-legend-item");
      item.type = "button";
      item.dataset.domain = domain.value;
      item.dataset.domainIndex = String(domain.index);
      item.title = domain.definition ? `${domain.name}: ${domain.definition}` : domain.name;
      item.setAttribute("aria-label", `${domain.name}, ${plural(count, "arising")}`);
      item.append(createElement("span", "arising-short", shortDomainName(domain.name)), createElement("span", "arising-full", domain.name), createElement("small", "", String(count)));
      item.addEventListener("click", () => {
        state.domainFilter = state.domainFilter === domain.value ? null : domain.value;
        updateArisingTable();
        if (state.domainFilter !== null) showFirstTableMatch();
      });
      domains.append(item);
    }
    const noCauses = createElement("span", "arising-no-causes");
    const noCausesText = createElement("span", "", "no causes");
    noCausesText.append(createElement("span", "arising-no-causes-end", " in the graph"));
    noCauses.append(createElement("i"), noCausesText);
    domains.append(noCauses);
    legend.append(domains);
  }
  return legend;
}

/** Of all causes of the arisings on one level, how many cite evidence. */
function levelEvidence(levelItems) {
  const shares = levelItems.map((node) => causeEvidence(node.id)).filter(Boolean);
  return { supported: shares.reduce((sum, entry) => sum + entry.supported, 0), total: shares.reduce((sum, entry) => sum + entry.total, 0) };
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
  if (!state.introDismissed) rows.push(tableIntro());
  rows.push(tableLegend(table, items));
  const readout = createElement("div", "arising-readout");
  readout.append(createElement("i", "arising-readout-swatch"), createElement("strong"), createElement("span", "arising-readout-meta"), createElement("span", "arising-readout-evidence"));
  rows.push(readout);
  const phaseCounts = table.phases.map((phase) => Math.max(1, ...table.levels.map((level) => (cells.get(`${level.value}:${phase.value}`) ?? []).length)));
  // A chip holds its name's longest word, with a pixel to spare for rounding, and a column its widest chip, so that no name has to split a word.
  const chipFont = cardFont(12, 400);
  const chipWidths = new Map(table.phases.map((phase) => [phase.value, Math.max(TABLE_CHIP.width, ...items.filter((node) => node.phase === phase.value)
    .flatMap((node) => node.name.split(/\s+|(?<=[-\u2013\u2014/])/)).map((word) => Math.ceil(textWidth(word, chipFont)) + 1 + TABLE_CHIP.chrome))]));
  const grid = createElement("div", "arising-grid");
  grid.setAttribute("role", "table");
  grid.setAttribute("aria-label", "Arisings by complexity level and phase");
  grid.addEventListener("keydown", tableGridKeydown);
  grid.addEventListener("focusin", tableGridFocusin);
  grid.addEventListener("focusout", tableGridFocusout);
  const names = {
    labelWidth: 104,
    gap: 6,
    columns: table.phases.map((phase, index) => ({ min: chipWidths.get(phase.value) + TABLE_CHIP.cellChrome, weight: Math.max(1, phaseCounts[index] / 6) }))
  };
  grid.style.gridTemplateColumns = fitNamesColumns({ ...names, width: Infinity }).template;
  // A heading stays on one line in the Map, so each phase's column starts as wide as its heading.
  const headFont = cardFont(12, 600);
  state.tableMap = {
    rows: tableMapRows(items, table.levels, table.phases),
    names,
    minColumns: table.phases.map((phase) => Math.ceil(textWidth(`${phase.name} ${items.filter((node) => node.phase === phase.value).length}`, headFont)) + TABLE_MAP.headChrome),
    bareColumns: table.phases.map((phase) => Math.ceil(textWidth(phase.name, headFont)) + TABLE_MAP.headChrome)
  };
  // The table draws its arrowheads with its own markers.
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
  corner.append(createElement("small", "arising-level-share", "Evidence"));
  head.append(corner, ...table.phases.map((phase) => {
    const cell = createElement("span", "arising-table-phase", `${phase.name} `);
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
    const share = levelEvidence(levelItems);
    const percent = share.total ? `${Math.round((share.supported / share.total) * 100)}%` : "";
    const count = createElement("small", "", plural(levelItems.length, "arising"));
    if (percent) {
      const shareText = createElement("span", "arising-level-share", percent);
      shareText.setAttribute("role", "img");
      shareText.setAttribute("aria-label", `${percent} of the causes on this level cite evidence: ${share.supported} of ${share.total}`);
      count.append(shareText);
    }
    label.append(createElement("strong", "", String(level.value)), createElement("span", "", level.name), count);
    row.append(label);
    for (const phase of table.phases) {
      const cell = createElement("div", "arising-table-cell");
      cell.setAttribute("role", "cell");
      cell.setAttribute("aria-label", `Level ${level.value} ${level.name}, ${phase.name}`);
      cell.style.setProperty("--chip-min", `${chipWidths.get(phase.value)}px`);
      for (const node of (cells.get(`${level.value}:${phase.value}`) ?? []).sort(order)) {
        const chip = createElement("button", "arising-chip");
        chip.type = "button";
        chip.tabIndex = -1;
        chip.dataset.nodeId = node.id;
        chip.dataset.status = String(node.scientificStatus);
        const domain = table.domains.get(node.domain);
        if (typeof node.domain === "string") chip.dataset.domain = node.domain;
        if (domain) chip.dataset.domainIndex = String(domain.index);
        chip.title = `${node.name} (${humanize(node.scientificStatus)}${domain ? `; ${domain.name}` : ""})`;
        const tint = evidenceTint(causeEvidence(node.id));
        chip.dataset.evidence = tint === null ? "none" : "some";
        chip.style.setProperty("--evidence", String(tint ?? 0));
        chip.append(createElement("span", "", node.name));
        chip.addEventListener("click", () => inspectNode(node.id));
        chip.addEventListener("dblclick", () => focusNode(node.id, { mode: "causes" }));
        // On a real move only: a chip that slides under a still pointer, as the table scrolls to a filter's match, is not being pointed at.
        chip.addEventListener("pointermove", () => {
          clearTimeout(state.tablePreviewClear);
          if (state.tablePreviewId === node.id) return;
          state.tablePreviewId = node.id;
          updateArisingTable();
        });
        // The pointer crossing the small gap between two tiles must not flash the whole table.
        chip.addEventListener("pointerleave", () => {
          clearTimeout(state.tablePreviewClear);
          state.tablePreviewClear = setTimeout(() => {
            state.tablePreviewId = elements["arising-table"].querySelector(".arising-chip:focus-visible")?.dataset.nodeId ?? null;
            updateArisingTable();
          }, 70);
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
    future.setAttribute("role", "note");
    future.setAttribute("aria-label", `Rows without arisings yet: ${empty.map((level) => `${level.value} ${level.name}`).join(", ")}`);
    future.append(createElement("strong", "", "Rows without arisings yet:"), createElement("em", "arising-short", levelRangeText(empty.map((level) => level.value))));
    for (const level of empty) future.append(createElement("span", "arising-full", `${level.value} ${level.name}`));
    rows.push(future);
  }
  elements["arising-table"].replaceChildren(...rows);
  syncRovingGroups();
  elements["arising-table"].dataset.density = state.tableDensity;
  elements["arising-table"].dataset.colour = state.tableColour;
  if (typeof ResizeObserver === "function") {
    state.tableResize?.disconnect();
    // The panel changes with the window and the side panels and refits the map; the grid then moves the curves.
    state.tableResize = new ResizeObserver((entries) => scheduleTableRefit(entries.some((entry) => entry.target !== grid)));
    state.tableResize.observe(grid);
    state.tableResize.observe(elements["arising-table-panel"]);
    state.tableResize.observe(elements["stage-legend"]);
    state.tableResize.observe(elements["arising-table"].querySelector(".arising-legend"));
  }
}

/**
 * Refit in the next frame: changing what a ResizeObserver watches inside its own callback is a page error,
 * and the fit changes the grid, the legend row and the panel's scrollbars.
 */
function scheduleTableRefit(refit) {
  state.tableRefit ||= refit;
  if (state.tableRefitFrame) return;
  state.tableRefitFrame = requestAnimationFrame(() => {
    const fit = state.tableRefit;
    state.tableRefitFrame = 0;
    state.tableRefit = false;
    if (elements["arising-table-panel"].hidden) return;
    if (fit) fitArisingMap();
    updateArisingTable();
  });
}

/* ---------- Open work ---------- */

function workNames(node) {
  const level = levelName(node.level);
  return level ? `Level ${node.level} \u00b7 ${level}` : `Level ${node.level}`;
}

function workGroupTitle(section, key) {
  if (section === "unsupported") return humanize(key);
  if (section === "obligations") return prose(key);
  return workNames({ level: key });
}

/** One line of a section: click inspects it here, double-click opens it in Causes. */
function workRow(section, item) {
  const cause = section === "causes";
  const arising = cause ? nodeSummary(item.target) : item.arising ?? item;
  const row = createElement("button", "work-row");
  row.type = "button";
  row.tabIndex = -1;
  setDomain(row, arising);
  const main = createElement("span", "work-row-main");
  if (cause) {
    row.dataset.edgeId = item.id;
    main.append(createElement("span", "", nodeSummary(item.source)?.name ?? ""), createElement("span", "work-arrow", "\u2192"), createElement("span", "", arising?.name ?? ""));
    row.addEventListener("click", () => inspectWorkCause(item));
    row.addEventListener("dblclick", () => {
      focusNode(item.target, { mode: "causes" });
      inspectRelation(item.id);
    });
  } else {
    row.dataset.nodeId = arising.id;
    main.append(createElement("span", "", arising.name));
    row.addEventListener("click", () => inspectNode(arising.id));
    row.addEventListener("dblclick", () => focusNode(arising.id, { mode: "causes" }));
  }
  const dot = createElement("i", "domain-dot");
  let meta;
  if (cause) {
    meta = createElement("small", "work-row-meta", [ROLE_TEXT[item.role]?.label ?? humanize(item.role), humanize(item.necessity, null)].filter(Boolean).join(" \u00b7 "));
  } else if (section === "categories") {
    meta = createElement("span", "coverage-chips work-row-chips");
    for (const slot of item.slots) {
      const chip = createElement("span", "", dependencyName(slot) ?? "");
      chip.dataset.state = "open";
      meta.append(chip);
    }
  } else if (section === "unsupported") {
    meta = createElement("small", "work-row-meta", `${humanize(arising.scientificStatus)} \u00b7 ${item.supported}/${item.total}`);
  } else {
    meta = createElement("small", "work-row-meta", workNames(arising));
  }
  row.append(dot, main, meta);
  return row;
}

/** A cause opens in the inspector with its dependent as the record the other views and the way back open on. */
function inspectWorkCause(edge) {
  state.selectedId = edge.target;
  if (state.focusId !== edge.target) {
    state.focusId = edge.target;
    endCaseOutside(edge.target);
    updateControls();
    replaceLocationState();
  }
  revealInTree(edge.target, true);
  inspectRelation(edge.id);
}

function markWorkSelection() {
  for (const row of elements["open-work-panel"].querySelectorAll(".work-row")) {
    const selected = row.dataset.edgeId ? row.dataset.edgeId === state.selectedRelationId
      : !state.selectedRelationId && row.dataset.nodeId === state.selectedId;
    row.dataset.selected = String(selected);
    markCurrent(row, selected);
  }
  syncWorkRoving();
}

/** A list of Open work is one Tab stop: the line the keyboard is on, or else the selected line, the first. */
function syncWorkRoving() {
  const rows = [...elements["open-work-panel"].querySelectorAll(".work-row")];
  const active = document.activeElement?.closest?.(".work-row");
  const keyOf = (row) => row.dataset.edgeId ?? row.dataset.nodeId;
  setRovingStop(rows, active ?? rows[rovingEntry(rows.map(keyOf), [state.selectedRelationId, state.selectedId])]);
}

/** The keyboard's line stays clear of the sticky controls and the panel's edge. */
function workListFocusin(event) {
  syncWorkRoving();
  const panel = elements["open-work-panel"];
  const row = event.target.closest(".work-row");
  if (row?.matches(":focus-visible")) keepFocusClear(row, panel, panel.querySelector(".work-controls").getBoundingClientRect().bottom, panel.getBoundingClientRect().bottom);
}

/** Up and Down go along the lines of the section; Enter is the line's own click. */
function workListKeydown(event) {
  listKeydown(event, ".work-row", (row) => {
    if (row.dataset.edgeId) {
      focusNode(state.graphIndex.edgesById.get(row.dataset.edgeId).target, { mode: "causes" });
      inspectRelation(row.dataset.edgeId);
    } else focusNode(row.dataset.nodeId, { mode: "causes" });
    focusStage();
  });
}

/** Evidence by level as thin bars on one scale: the whole bar is 100%. A bar also filters by its level. */
function workSummary(work) {
  const summary = createElement("section", "work-summary");
  const { evidence } = work;
  const total = createElement("div", "work-total");
  const share = evidence.total ? `${Math.round((evidence.supported / evidence.total) * 100)}%` : "\u2013";
  total.append(createElement("strong", "", share), createElement("span", "", "of causes cite evidence"), createElement("small", "", `${evidence.supported} / ${evidence.total}`));
  const bars = createElement("div", "work-bars");
  bars.setAttribute("role", "group");
  bars.dataset.roving = "vertical";
  bars.dataset.rovingRest = '[aria-pressed="true"]';
  bars.setAttribute("aria-label", "Causes that cite evidence, by level. Choose a level to filter by it.");
  bars.append(createElement("h3", "", "Causes that cite evidence, by level"));
  for (const entry of evidence.levels) {
    const bar = createElement("button", "work-bar");
    bar.type = "button";
    bar.dataset.workControl = `level-${entry.level}`;
    bar.setAttribute("aria-pressed", String(state.work.level === entry.level));
    const percent = entry.total ? Math.round((entry.supported / entry.total) * 100) : null;
    const name = createElement("span", "work-bar-name");
    name.append(createElement("b", "", String(entry.level)), document.createTextNode(` ${levelName(entry.level) ?? ""}`));
    const track = createElement("span", "work-bar-track");
    const fill = createElement("i");
    fill.style.width = `${percent ?? 0}%`;
    track.append(fill);
    bar.append(name, track, createElement("span", "work-bar-share", percent === null ? "" : `${percent}%`), createElement("small", "work-bar-count", entry.total ? `${entry.supported} / ${entry.total}` : "no causes"));
    bar.addEventListener("click", () => setWorkFilter({ level: state.work.level === entry.level ? null : entry.level }));
    bars.append(bar);
  }
  summary.append(total, bars);
  return summary;
}

function setWorkFilter(change) {
  state.work = { ...state.work, ...change, shown: null };
  replaceLocationState();
  // The controls are drawn anew. The one in use keeps the keyboard, so that the next key stays with it instead of reaching the global shortcuts.
  const control = document.activeElement?.dataset?.workControl;
  renderOpenWork();
  if (control) elements["open-work-panel"].querySelector(`[data-work-control="${CSS.escape(control)}"]`)?.focus({ preventScroll: true });
  // A fresh list starts at its top, under the controls. The sticky controls report where they sit only from the top of the panel.
  const panel = elements["open-work-panel"];
  const reached = panel.scrollTop;
  panel.scrollTop = 0;
  panel.scrollTop = Math.min(reached, panel.querySelector(".work-controls").offsetTop);
}

function workSelect(label, options, current, choose) {
  const field = createElement("label", "work-filter");
  const select = createElement("select");
  select.dataset.workControl = `filter-${label}`;
  for (const [value, text] of options) {
    const option = createElement("option", "", text);
    option.value = value;
    select.append(option);
  }
  select.value = current;
  select.addEventListener("change", () => choose(select.value));
  field.append(createElement("span", "arising-legend-title", label), select);
  return field;
}

function workControls(work) {
  const table = state.presentationMetadata.arisingTable;
  const controls = createElement("div", "work-controls");
  const sections = createElement("fieldset", "segmented work-sections");
  sections.dataset.roving = "horizontal";
  sections.dataset.rovingRest = '[aria-pressed="true"]';
  sections.append(createElement("legend", "", "Section"));
  for (const section of WORK_SECTIONS) {
    const button = createElement("button", "", section.label);
    button.type = "button";
    button.dataset.workControl = `section-${section.key}`;
    button.setAttribute("aria-pressed", String(state.work.section === section.key));
    button.append(createElement("small", "", String(work.counts[section.key])));
    button.addEventListener("click", () => setWorkFilter({ section: section.key }));
    sections.append(button);
  }
  const present = new Set(state.ontology.arisings.map((node) => node.level));
  const filters = createElement("div", "work-filters");
  filters.append(
    workSelect("Level", [["", "All levels"], ...table.levels.filter((level) => present.has(level.value)).map((level) => [String(level.value), `${level.value} ${level.name}`])],
      state.work.level === null ? "" : String(state.work.level), (value) => setWorkFilter({ level: value === "" ? null : Number(value) })),
    workSelect("Domain", [["", "All domains"], ...[...table.domains.values()].map((domain) => [domain.value, domain.name])],
      state.work.domain ?? "", (value) => setWorkFilter({ domain: value === "" ? null : value })));
  controls.append(sections, filters);
  return controls;
}

/** How many lines a list draws first: one page, or the pages that reach the selected line. */
function workReach(section, groups) {
  const items = groups.flatMap((group) => group.items);
  const index = items.findIndex((item) => (section === "causes" ? item.id === state.selectedRelationId
    : !state.selectedRelationId && (item.arising ?? item).id === state.selectedId));
  return (Math.floor(Math.max(index, 0) / WORK_PAGE) + 1) * WORK_PAGE;
}

/** Append the next page of a section; a group's heading comes with its first row. */
function appendWorkRows(list, section, groups, from, to) {
  let index = 0;
  for (const group of groups) {
    for (const item of group.items) {
      if (index >= from && index < to) {
        if (item === group.items[0]) {
          const heading = createElement("h4", "work-group");
          heading.append(createElement("span", "", workGroupTitle(section, group.key)), createElement("small", "", String(group.items.length)));
          list.append(heading);
        }
        list.append(workRow(section, item));
      }
      index += 1;
    }
  }
}

function workCount(section, work) {
  if (work.counts[section] === 0) return "";
  if (section === "categories") return `${plural(work.counts.categories, "open category", "open categories")} in ${plural(work.counts.categoryArisings, "arising")}.`;
  if (section === "obligations") return `${plural(work.counts.obligations, "obligation")} in ${plural(work.counts.obligationArisings, "arising")}.`;
  return "";
}

/** The view of what the map does not know yet: every count comes from the causes and the arising facts. */
function renderOpenWork() {
  const panel = elements["open-work-panel"];
  const { section, level, domain } = state.work;
  const work = openWork({
    arisings: state.ontology.arisings,
    causesOf: (id) => state.causes.byChild.get(id),
    factsOf,
    level,
    domain,
    compareCauses: (left, right) => causeSort(left, right, "source")
  });
  const scope = [level === null ? null : workNames({ level }), domain === null ? null : state.presentationMetadata.arisingTable.domains.get(domain)?.name].filter(Boolean).join(" in ");
  elements["graph-title"].textContent = "Open work";
  elements["graph-subtitle"].textContent = scope || "What this map does not know yet";
  elements["graph-counts"].textContent = evidenceShare(work.evidence.supported, work.evidence.total);
  elements["graph-hint"].textContent = "Click: inspect \u00b7 Double-click: open in Causes";
  graphMessage([]);
  emptyStage(null);
  const definition = WORK_SECTIONS.find((entry) => entry.key === section);
  const groups = work.sections[section];
  const shown = state.work.shown ?? workReach(section, groups);
  const size = groups.reduce((sum, group) => sum + group.items.length, 0);
  const intro = createElement("p", "work-intro", "This is where the map can still grow. A study, a model or a sharper definition can close any line below.");
  const summary = workSummary(work);
  const controls = workControls(work);
  const note = createElement("p", "work-note", [definition.note, workCount(section, work)].filter(Boolean).join(" "));
  const list = createElement("div", "work-list");
  list.addEventListener("keydown", workListKeydown);
  list.addEventListener("focusin", workListFocusin);
  const previous = panel.scrollTop;
  const content = createElement("div", "work-content");
  content.append(intro, summary, controls, note, list);
  if (size === 0) {
    const clear = actionButton("Clear the filters", () => {
      setWorkFilter({ level: null, domain: null });
      // The button has gone with the empty list; the keyboard goes on from the first filter.
      elements["open-work-panel"].querySelector('[data-work-control="filter-Level"]')?.focus({ preventScroll: true });
    });
    const empty = createElement("div", "work-empty");
    empty.append(createElement("p", "", "Nothing is open here for this level and domain."), clear);
    list.append(empty);
  } else {
    appendWorkRows(list, section, groups, 0, shown);
    let reached = Math.min(shown, size);
    if (reached < size) {
      const more = createElement("div", "work-more");
      const button = createElement("button");
      button.type = "button";
      const label = () => {
        button.replaceChildren(`Show ${Math.min(WORK_PAGE, size - reached)} more`, createElement("small", "", `${reached} of ${size}`));
      };
      label();
      button.addEventListener("click", () => {
        more.remove();
        const before = list.querySelectorAll(".work-row").length;
        appendWorkRows(list, section, groups, reached, reached + WORK_PAGE);
        reached = Math.min(reached + WORK_PAGE, size);
        state.work.shown = reached;
        markWorkSelection();
        if (reached < size) {
          label();
          list.append(more);
        }
        // The button moved below the new lines; the keyboard goes on from the first of them.
        list.querySelectorAll(".work-row")[before]?.focus();
      });
      more.append(button);
      list.append(more);
    }
  }
  panel.replaceChildren(content);
  panel.scrollTop = previous;
  markWorkSelection();
  syncRovingGroups();
  if (state.work.reveal) {
    state.work.reveal = false;
    panel.querySelector('.work-row[data-selected="true"]')?.scrollIntoView({ block: "center" });
  }
}

/* ---------- Inspector ---------- */

function tag(text, tone) {
  const element = createElement("span", "node-tag", text);
  if (tone) element.dataset.tone = tone;
  return element;
}

function fact(label, value, { wide = false, title = "" } = {}) {
  const item = createElement("div", wide ? "wide" : "");
  const definition = createElement("dd");
  if (value instanceof Node) definition.append(value);
  else definition.textContent = value;
  if (title) definition.title = title;
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

/** Put text on the clipboard. The clipboard API exists only on secure pages, so a plain http page falls back to a selected field. */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = createElement("textarea", "visually-hidden");
    field.value = text;
    field.readOnly = true;
    document.body.append(field);
    field.select();
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      field.remove();
    }
  }
}

/** The address of what is open, to share: the button says for a moment whether it went to the clipboard. */
function copyLinkButton() {
  let restore = null;
  const button = actionButton("Copy link", async () => {
    replaceLocationState();
    const copied = await copyText(location.href);
    button.focus({ preventScroll: true });
    button.style.minWidth = button.style.minWidth || `${button.offsetWidth}px`;
    button.textContent = copied ? "Copied" : "Copy failed";
    clearTimeout(restore);
    restore = setTimeout(() => { button.textContent = "Copy link"; }, 1600);
  });
  button.setAttribute("aria-live", "polite");
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
    button.dataset.focusId = node.id;
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
  button.title = node?.name ?? "";
  setDomain(button, node);
  const dependency = dependencyName(edge.dependencyType);
  button.append(createElement("i", "domain-dot"), createElement("span", "", node?.name ?? ""),
    createElement("small", "", [humanize(edge.necessity, null), dependency].filter(Boolean).join(" \u00b7 ")));
  button.addEventListener("click", () => inspectNode(id));
  button.dataset.focusId = id;
  const badge = createElement("button", "cause-badge");
  badge.type = "button";
  badge.dataset.role = edge.role;
  badge.dataset.status = edge.status;
  badge.dataset.relationId = edge.id;
  badge.title = `${ROLE_TEXT[edge.role]?.label ?? edge.role} cause, ${RELATION_STATUS_TEXT[edge.status]?.label ?? edge.status}. Open its evidence and obligations.`;
  badge.setAttribute("aria-label", `${ROLE_TEXT[edge.role]?.label ?? humanize(edge.role)} cause ${endpoint === "source" ? "from" : "of"} ${node?.name ?? "another arising"}, ${(RELATION_STATUS_TEXT[edge.status]?.label ?? humanize(edge.status)).toLowerCase()}`);
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
  elements["lineage-summary"].textContent = `${plural(chain.length, "step")} from the root`;
  const steps = [chain[0].source, ...chain.map((edge) => edge.target)];
  list.replaceChildren(...steps.map((id, index) => {
    const step = nodeSummary(id);
    const row = createElement("button", "lineage-step");
    row.type = "button";
    setDomain(row, step);
    if (id === node.id) row.dataset.current = "true";
    row.title = step?.name ?? "";
    const via = index > 0 ? chain[index - 1] : null;
    row.append(createElement("i"), createElement("span", "", step?.name ?? ""));
    if (via?.status === "supported") {
      const mark = createElement("small", "", "supported");
      mark.title = "The cause from the previous step is supported by published evidence";
      row.append(mark);
    }
    row.addEventListener("click", () => inspectNode(id));
    row.dataset.focusId = id;
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
      button.title = displayName(node) ?? "";
      const owner = state.ontology && node?.arisingId ? nodeSummary(node.arisingId) : null;
      const same = owner && owner.id === nodeSummary(state.selectedId)?.arisingId;
      if (owner) setDomain(button, owner);
      const dot = createElement("i", "domain-dot");
      if (same) dot.dataset.same = "true";
      button.append(dot,
        createElement("span", "", displayName(node) ?? ""),
        createElement("small", "", [humanize(edge.role ?? edge.relationLayer, null), humanize(node?.typeRole, null), owner && !same ? `in ${owner.name}` : null].filter(Boolean).join(" \u00b7 ")));
      button.addEventListener("click", () => inspectNode(edge[endpoint]));
      button.dataset.focusId = edge[endpoint];
      const badge = createElement("button", "cause-badge", "relation");
      badge.type = "button";
      badge.title = "Open this relation";
      badge.setAttribute("aria-label", `Open this relation ${endpoint === "source" ? "from" : "to"} ${displayName(node) ?? "another record"}`);
      badge.dataset.relationId = edge.id;
      badge.addEventListener("click", () => inspectRelation(edge.id));
      row.append(button, badge);
      return row;
    });
  container.replaceChildren(...rows);
}

function evidenceShare(supported, total) {
  return `${supported} of ${plural(total, "cause")} ${total === 1 ? "cites" : "cite"} evidence`;
}

/** The share of an arising's causes that cite evidence, and why a known phenomenon can still have none. */
function evidenceLine(node) {
  const coverage = causeEvidence(node.id);
  if (!coverage) return "";
  const share = `${evidenceShare(coverage.supported, coverage.total)}.`;
  const known = { established: "established", "well-supported": "well supported" }[node.scientificStatus];
  return coverage.supported === 0 && known ? `${share} The phenomenon itself is ${known}; its causes here have not been reviewed yet.` : share;
}

function renderHeader(node) {
  const heading = elements["selected-coordinate"];
  const tags = [];
  const line = isArising(node) ? evidenceLine(node) : "";
  elements["selected-evidence"].textContent = line;
  elements["selected-evidence"].hidden = !line;
  heading.replaceChildren();
  delete heading.dataset.domainIndex;
  delete heading.dataset.kind;
  if (isArising(node)) {
    setDomain(heading, node);
    // Where the vocabulary defines the type it stands as a chip that holds the definition.
    const type = typeRoleDefinition(state.vocabulary, node.typeRole);
    heading.append(document.createTextNode(type ? "Arising" : `Arising \u00b7 ${humanize(node.typeRole)}`));
    if (type) {
      const chip = tag(humanize(node.typeRole), "muted");
      chip.title = type;
      tags.push(chip);
    }
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
    if (node.scientificStatus) tags.push(tag(`Status: ${humanize(node.scientificStatus).toLowerCase()}`, "status"));
    const owner = nodeSummary(node.arisingId);
    if (owner) {
      const chip = createElement("button", "node-tag", `in ${owner.name}`);
      chip.type = "button";
      chip.dataset.tone = "link";
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
    actions.push(actionButton("Causes graph", () => focusNode(node.id, { mode: "causes" }), { primary: state.mode !== "causes" || state.focusId !== node.id }));
    actions.push(actionButton("Subgraph", () => focusNode(node.id, { mode: "subgraph" }), { count: members }));
    actions.push(actionButton("In table", () => {
      focusNode(node.id, { mode: "table" });
      elements["arising-table"].querySelector(`.arising-chip[data-node-id="${CSS.escape(node.id)}"]`)?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
    actions.push(actionButton("Path to...", (event) => togglePathPicker(event.currentTarget, node)));
  } else if (state.ontology) {
    // Inside its own subgraph the record is already there.
    if (state.ontology.arisingIds.has(node.arisingId) && (state.mode !== "subgraph" || node.arisingId !== state.focusId)) {
      actions.push(actionButton("Show in subgraph", () => focusNode(node.id, { mode: "subgraph" }), { primary: state.mode !== "subgraph" }));
    }
    actions.push(actionButton("Explore relations", () => focusNode(node.id, { mode: "records" })));
  }
  elements["record-actions"].replaceChildren(...actions);
  elements["record-actions"].hidden = actions.length === 0;
}

/** Open or close the inline picker of a path's far end: a text box with a live list of names. */
function togglePathPicker(opener, node) {
  const open = elements["record-actions"].querySelector(".path-picker");
  if (open) {
    open.remove();
    opener.setAttribute("aria-expanded", "false");
    return;
  }
  opener.setAttribute("aria-expanded", "true");
  const picker = pathPicker(node, () => {
    picker.remove();
    opener.setAttribute("aria-expanded", "false");
    opener.focus();
  });
  elements["record-actions"].append(picker);
  picker.querySelector("input").focus();
}

function pathPicker(node, close) {
  const picker = createElement("div", "path-picker");
  const input = createElement("input");
  input.type = "text";
  input.placeholder = "Find an arising";
  input.autocomplete = "off";
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-label", `Path from ${node.name} to`);
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-controls", "path-options");
  input.setAttribute("aria-expanded", "false");
  const list = createElement("div", "path-options");
  list.id = "path-options";
  list.setAttribute("role", "listbox");
  list.setAttribute("aria-label", "Arisings");
  // Stays in the picker while empty: a status region is read out when its text changes.
  const none = createElement("p", "path-none");
  none.setAttribute("role", "status");
  let options = [];
  let active = 0;
  const others = state.ontology.arisings.filter((other) => other.id !== node.id);
  const choose = (target) => focusNode(node.id, { mode: "causes", path: target.id });
  const mark = () => {
    [...list.children].forEach((row, index) => row.setAttribute("aria-selected", String(index === active)));
    if (options.length) input.setAttribute("aria-activedescendant", `path-option-${active}`);
    else input.removeAttribute("aria-activedescendant");
    list.children[active]?.scrollIntoView?.({ block: "nearest" });
  };
  const update = () => {
    options = matchNames(others, input.value);
    active = 0;
    const rows = options.map((other, index) => {
      const row = createElement("button", "path-option", other.name);
      row.type = "button";
      row.id = `path-option-${index}`;
      row.tabIndex = -1;
      row.setAttribute("role", "option");
      row.addEventListener("click", () => choose(other));
      return row;
    });
    none.textContent = input.value.trim() && !rows.length ? "No arising has that name." : "";
    list.replaceChildren(...rows);
    input.setAttribute("aria-expanded", String(options.length > 0));
    mark();
  };
  input.addEventListener("input", update);
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (options.length) active = (active + (event.key === "ArrowDown" ? 1 : options.length - 1)) % options.length;
      mark();
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (options[active]) {
        choose(options[active]);
        focusStage();
        showViewOnNarrowPage();
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  });
  picker.append(input, list, none);
  return picker;
}

function renderFacts(node) {
  const facts = [];
  if (isArising(node)) {
    facts.push(fact("Level", levelName(node.level) ? `${node.level} \u00b7 ${levelName(node.level)}` : String(node.level)));
    facts.push(fact("Phase", phaseName(node.phase) ?? String(node.phase), { title: termDefinition(state.vocabulary?.phases, node.phase) ?? "" }));
    const cluster = clusterOf(node);
    if (cluster) facts.push(fact("Cluster", cluster.name, { wide: true }));
    const disciplines = state.disciplines.filter((entry) => hasDiscipline(node.id, entry.value));
    if (disciplines.length) {
      const chips = createElement("div", "coverage-chips");
      for (const entry of disciplines) {
        const chip = createElement("span", "", entry.name);
        chip.title = entry.definition ?? entry.name;
        chips.append(chip);
      }
      facts.push(fact("Disciplines", chips, { wide: true }));
    }
  }
  elements["record-facts"].replaceChildren(...facts);
  elements["record-facts"].hidden = facts.length === 0;
}

function renderInspector() {
  pendingInspection?.abort();
  pendingInspection = null;
  const sequence = ++inspectionSequence;
  elements["record-failure"].hidden = true;
  // Another record or relation opens at its heading; the same one drawn again stays where the reader is.
  const shown = state.selectedRelationId && state.graphIndex?.edgesById.has(state.selectedRelationId) ? `relation ${state.selectedRelationId}` : `record ${state.selectedId}`;
  const another = shown !== state.inspectorShown;
  if (another) {
    state.inspectorShown = shown;
    elements["inspector-content"].scrollTop = 0;
  }
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
  renderArisingCases(node);
  elements["selected-name"].textContent = displayName(node);
  elements["lineage-panel"].hidden = true;
  renderHeader(node);
  renderActions(node);
  renderFacts(node);
  elements["selected-summary"].textContent = prose(node.shortDescription) || "No short description is declared for this record.";
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
      causes.length === 0 ? rootNoteText(state.presentationMetadata.arisingTable?.rootNote) : null);
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
  // Nothing of the record shown before may stay under this heading; the same record drawn again keeps its panel.
  if (another) {
    elements["arising-panel"].hidden = true;
    elements["arising-details"].replaceChildren();
  }
  elements["selected-description"].textContent = "Loading record...";
  elements["selected-record"].textContent = "";
  elements["selected-rationale"].replaceChildren(createElement("p", "", "Loading sources and limitations..."));
  state.browse.inspectWithEvidence(node.id, { signal: controller.signal }).then(({ record, rationale }) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    const kept = keyboardInInspector();
    renderInspectedRecord(record, rationale);
    restoreInspectorKeyboard(kept);
  }).catch((error) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    document.body.dataset.detailState = "error";
    elements["selected-description"].textContent = "Record details could not be loaded.";
    elements["selected-rationale"].replaceChildren(createElement("p", "", "Sources and limitations could not be loaded."));
    elements["rationale-panel"].hidden = false;
    // Nothing of the record shown before may stay under this heading.
    elements["arising-panel"].hidden = true;
    elements["arising-details"].replaceChildren();
    const retry = createElement("button", "", "Retry record details");
    retry.type = "button";
    retry.addEventListener("click", (event) => {
      renderInspector();
      // The button goes with the failure: a key press lands on the heading, and a click moves no focus.
      if (event.detail === 0) elements["selected-name"].focus({ preventScroll: true });
    }, { once: true });
    elements["record-failure"].replaceChildren(createElement("p", "", `Could not load this record's details. ${plainFailure(error)}`), retry);
    elements["record-failure"].hidden = false;
    elements["inspector-content"].scrollTop = 0;
    console.error(error);
  });
}

/** Open a case in Records on its anchor. A lens could hide the records of the case, so it is cleared. */
function openInteractionCase(record) {
  state.interactionPerspectiveId = "";
  state.interactionCaseId = record.id;
  elements["interaction-perspective"].value = "";
  elements["interaction-case"].value = record.id;
  focusNode(record.anchorEntityId, { mode: "records" });
  elements["inspector-content"].scrollTop = 0;
}

/** The interaction cases an arising takes part in, directly or through a record it owns. */
function renderArisingCases(node) {
  const cases = isArising(node) ? state.arisingCases.get(node.id) ?? [] : [];
  elements["arising-cases-panel"].hidden = cases.length === 0;
  elements["arising-cases"].replaceChildren(createElement("p", "arising-cases-note", "Studied cases where this arising or one of its records takes part in an interaction. Open one to see its records together."), ...cases.map((record) => {
    const button = createElement("button", "relation-item");
    button.type = "button";
    button.title = record.title;
    button.append(createElement("span", "", record.title), createElement("small", "", plural(record.entityIds.length, "record")));
    button.addEventListener("click", () => openInteractionCase(record));
    return button;
  }));
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
    const name = dependencyName(value);
    if (!name) continue;
    const chip = createElement("span", "", name);
    chip.dataset.state = beyondGraph.includes(name) ? "beyond" : covered.has(value) ? "covered" : "open";
    chip.title = [chip.dataset.state === "beyond" ? "Required; its cause lies beyond the graph"
      : chip.dataset.state === "covered" ? "Required and covered by a cause" : "Required and still open", termDefinition(state.vocabulary?.dependencyTypes, value)].filter(Boolean).join("\n");
    chips.append(chip);
  }
  const coverage = createElement("div");
  coverage.append(document.createTextNode(`${(completeness.covered ?? []).length} of ${(completeness.mustCover ?? []).length} required categories covered`), chips);
  elements["record-facts"].append(fact("Evidence in its subgraph", COVERAGE_TEXT[record.evidenceCoverage] ?? humanize(record.evidenceCoverage), { wide: true }),
    fact("Causal requirements", coverage, { wide: true }));
  elements["record-facts"].hidden = false;
  const members = Array.isArray(record.memberIds) ? record.memberIds : [];
  const subgraph = createElement("div");
  subgraph.append(createElement("h5", "", `Technical subgraph \u00b7 ${plural(members.length, "record")}`));
  if (members.length) {
    subgraph.append(subgraphComposition(members));
    subgraph.append(actionButton("Open subgraph", () => focusNode(record.id, { mode: "subgraph" })));
  } else {
    subgraph.append(createElement("p", "relation-empty", "No technical records yet."));
  }
  const anchors = (Array.isArray(record.anchorIds) ? record.anchorIds : []).filter((id) => nodeSummary(id));
  if (anchors.length) {
    subgraph.append(createElement("h5", "", "Reviewed topic records"));
    for (const id of anchors.slice(0, 12)) {
      const button = createElement("button", "relation-item");
      button.type = "button";
      button.append(createElement("code", "", humanize(nodeSummary(id)?.typeRole, "")), createElement("span", "", displayName(nodeSummary(id)) ?? ""));
      button.addEventListener("click", () => inspectNode(id));
      button.dataset.focusId = id;
      subgraph.append(button);
    }
  }
  const obligations = createElement("ul", "arising-obligations");
  for (const text of record.openObligations ?? []) obligations.append(createElement("li", "", prose(text)));
  box.replaceChildren(...(obligations.childElementCount ? [createElement("h5", "", "Open obligations"), obligations] : []), subgraph);
  panel.hidden = false;
}

function renderInspectedRecord(record, rationale = record.rationale) {
  renderArising(record);
  const description = typeof record.description === "string" ? record.description : null;
  elements["selected-description"].textContent = prose(description) ?? "No full description is declared for this record.";
  elements["description-panel"].hidden = !description || description === record.shortDescription || description === record.summary;
  elements["selected-record"].textContent = JSON.stringify(record, null, 2);
  renderRationale({ ...record, rationale });
  const claims = Array.isArray(rationale) ? rationale.length : 0;
  elements["rationale-panel"].hidden = isArising(record) && claims === 0;
  renderInteractionCases(record);
  document.body.dataset.detailState = "ready";
}

/** Release text as readers see it: names, not cell codes or record keys. The raw record keeps the original; a plain release's text stays as declared. */
function prose(text) {
  return state.ontology ? plainProse(text, (id) => displayName(nodeSummary(id))) : text;
}

function proseLine(text) {
  return createElement("p", "", prose(text));
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
  button.append(createElement("code", "", humanize(node?.typeRole, "")), createElement("span", "", displayName(node) ?? ""));
  button.title = displayName(node) ?? "";
  button.addEventListener("click", () => inspectNode(id));
  button.dataset.focusId = id;
  return button;
}

/** The names of a relation's declared values. A number nothing can name is left out: a bare number tells a reader nothing. */
function declaredNames(values, names) {
  return (Array.isArray(values) ? values : []).map((value) => names?.get(value) ?? (typeof value === "string" ? value : null)).filter(Boolean);
}

/** Necessity next to the role: the two are independent, which a bare tag beside the role's meaning does not say. */
function necessityReading(edge) {
  const independent = edge.role === "modulation" && edge.necessity === "necessary"
    ? "This is independent of its role: a modulation can be necessary while the dependent still forms and persists without it."
    : "This is independent of its role.";
  return `${humanize(edge.necessity)}. How essential this cause is in the description. ${independent}`;
}

/** The other lines where a shared stretch was clicked, so that each can be read, whichever lay on top. */
function lineStretchList(id) {
  const lines = state.lineStretch ?? [];
  if (lines.length < 2 || !lines.includes(id)) return null;
  const section = createElement("div", "line-stretch");
  section.append(createElement("p", "", `${lines.length} lines pass where you clicked. This is one of them; open another:`));
  for (const line of lines) {
    const edge = state.graphIndex.edgesById.get(line);
    if (!edge) continue;
    const button = createElement("button", "relation-item", `${displayName(nodeSummary(edge.source)) ?? "A record"} \u2192 ${displayName(nodeSummary(edge.target)) ?? "A record"}`);
    button.type = "button";
    if (line === id) button.setAttribute("aria-current", "true");
    button.addEventListener("click", () => inspectRelation(line));
    section.append(button);
  }
  return section;
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
  const title = createElement("h3", "", `${displayName(source) ?? "A record"} \u2192 ${displayName(target) ?? "A record"}`);
  title.tabIndex = -1;
  heading.append(kicker, title);
  const tags = createElement("div", "tag-row");
  if (causal) {
    tags.append(tag(RELATION_STATUS_TEXT[edge.status]?.label ?? humanize(edge.status), edge.status === "supported" ? "good" : "warn"),
      tag(humanize(edge.necessity), "status"));
    const dependency = dependencyName(edge.dependencyType);
    if (dependency) {
      const chip = tag(dependency, "muted");
      chip.title = termDefinition(state.vocabulary?.dependencyTypes, edge.dependencyType) ?? "";
      tags.append(chip);
    }
  } else {
    tags.append(tag(humanize(edge.role ?? edge.relationLayer), "role"), tag(humanize(edge.relationLayer), "muted"));
  }
  heading.append(tags);
  const routeBox = createElement("div", "relation-inspector-route");
  routeBox.append(routeButton(edge.source), createElement("span", "route-arrow", causal ? "\u2193 conditions" : "\u2193"), routeButton(edge.target));
  const stretch = lineStretchList(id);
  const facts = createElement("dl", "fact-grid");
  if (causal) {
    facts.append(fact("Role", ROLE_TEXT[edge.role]?.meaning ?? humanize(edge.role), { wide: true }));
    if (edge.necessity) facts.append(fact("Necessity", necessityReading(edge), { wide: true }));
    facts.append(fact("Status", RELATION_STATUS_TEXT[edge.status]?.meaning ?? humanize(edge.status), { wide: true }));
  } else if (edge.assertion) {
    facts.append(fact("Assertion", prose(edge.assertion), { wide: true }));
  }
  const detailFacts = createElement("dl", "fact-grid");
  detailFacts.hidden = true;
  const evidence = createElement("div", "relation-evidence");
  evidence.append(createElement("p", "relation-empty", "Loading evidence..."));
  const obligations = createElement("div", "relation-obligations");
  const raw = createElement("details", "record-details");
  raw.append(createElement("summary", "", "Raw record"));
  const pre = createElement("pre", "", JSON.stringify(edge, null, 2));
  raw.append(pre);
  const back = createElement("div", "record-actions");
  const backToRecord = actionButton(`Back to ${displayName(nodeSummary(state.selectedId)) ?? "record"}`, () => inspectNode(state.selectedId ?? edge.target));
  backToRecord.classList.add("back-to-record");
  back.append(backToRecord, copyLinkButton());
  const evidenceHeader = createElement("div", "relation-section");
  const header = createElement("header");
  header.append(createElement("h4", "", "Evidence"), createElement("span", "", "..."));
  evidenceHeader.append(header);
  container.replaceChildren(...[heading, back, routeBox, stretch, facts, detailFacts, evidenceHeader, evidence, obligations, raw].filter(Boolean));
  const controller = new AbortController();
  pendingInspection = controller;
  document.body.dataset.detailState = "loading";
  relationDetail(id, controller.signal).then(({ relation, rationale }) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    const record = relation ?? edge;
    pre.textContent = JSON.stringify(record, null, 2);
    const extra = [];
    const table = state.presentationMetadata?.arisingTable;
    const directions = declaredNames(record.causalDirections, table?.causalDirections);
    if (directions.length) extra.push(fact("Causal direction", directions.join(", "), { title: termDefinitions(state.vocabulary?.causalDirections, record.causalDirections) }));
    const modes = declaredNames(record.interactionModes, table?.interactionModes);
    if (modes.length) extra.push(fact("Interaction mode", modes.join(", "), { title: termDefinitions(state.vocabulary?.interactionModes, record.interactionModes) }));
    const carrier = carrierReading(record.carrier, state.vocabulary);
    if (carrier) extra.push(fact("Carrier", carrier.label, { title: carrier.definition }));
    if (causal && record.weight !== null && record.weight !== undefined) extra.push(fact("Weight", String(record.weight)));
    detailFacts.replaceChildren(...extra);
    detailFacts.hidden = extra.length === 0;
    header.lastChild.textContent = String(rationale.length);
    // A cause's claims open by repeating the cause, which the inspector's heading already names.
    if (rationale.length) renderRationale({ rationale: rationale.map((claim) => ({ ...claim, scope: typeof claim.scope === "string" ? claim.scope.replace(/^Cause \S+ > \S+ \([^)]*\):\s*/, "") : claim.scope })) }, evidence);
    else evidence.replaceChildren(createElement("p", "empty-state", causal
      ? "No published evidence is attached yet. The cause remains the author's hypothesis until a study or model shows the dependency in the stated role."
      : "This relation cites no separate claim; its records carry the evidence."));
    const open = Array.isArray(record.openObligations) ? record.openObligations : [];
    if (open.length) {
      const list = createElement("ul", "arising-obligations");
      for (const text of open) list.append(createElement("li", "", prose(text)));
      obligations.replaceChildren(createElement("h5", "", "Open obligations"), list);
    }
    document.body.dataset.detailState = "ready";
  }).catch((error) => {
    if (sequence !== inspectionSequence || controller.signal.aborted) return;
    document.body.dataset.detailState = "error";
    const retry = createElement("button", "", "Retry");
    retry.type = "button";
    retry.addEventListener("click", renderInspector, { once: true });
    evidence.replaceChildren(createElement("p", "relation-empty", `Could not load this relation. ${plainFailure(error)}`), retry);
    console.error(error);
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
      finding.append(createElement("summary", "", `${humanize(facet.kind)}: ${slugWords(facet.value)} \u00b7 ${slugWords(facet.status)}`));
      finding.append(proseLine(facet.statement));
      section.append(finding);
    }
    for (const [key, field] of Object.entries(interaction.fields ?? {})) {
      const label = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      const property = createElement("details");
      property.append(createElement("summary", "", label.charAt(0).toUpperCase() + label.slice(1)));
      const missing = {
        "not-applicable": "Not applicable to this comparison.",
        "not-reviewed": "Not reviewed; no value is asserted."
      }[field.missingReason] ?? `No value is asserted (${slugWords(field.missingReason)}).`;
      property.append(proseLine(field.value === null ? missing : field.value));
      section.append(property);
    }
    for (const observation of interaction.observations ?? []) {
      const finding = createElement("details");
      finding.append(createElement("summary", "", `Finding: ${slugWords(observation.kind)}`));
      finding.append(proseLine(observation.statement));
      section.append(finding);
    }
    const sources = new Map((interaction.sources ?? []).map((source) => [source.id, source]));
    const studies = new Map((interaction.studies ?? []).map((study) => [study.id, study]));
    for (const claim of interaction.claims ?? []) {
      const support = createElement("details");
      support.append(createElement("summary", "", `Evidence: ${typeof claim.status === "string" ? claim.status.replace(/-/g, " ") : "claim"}`));
      support.append(proseLine(claim.statement));
      if (claim.scope) support.append(proseLine(`Scope: ${plainSlug(claim.scope)}`));
      for (const id of claim.contextIds ?? []) {
        const study = studies.get(id);
        if (!study) continue;
        support.append(proseLine(`Study: ${study.preparation}`));
        support.append(proseLine(`Observable: ${study.observable}`));
        support.append(proseLine(`Reviewed: ${readingExtent(study.readExtent)}. ${(study.reviewedLocators ?? []).map(plainLocator).join("; ")}`));
        for (const limit of study.limitations ?? []) support.append(proseLine(`Study limit: ${limit}`));
      }
      for (const citation of resolveClaimCitations(claim)) {
        const source = citation.source ?? sources.get(citation.sourceId);
        const paragraph = createElement("p", "", `${citation.role}: ${source?.title ?? "Unnamed source"} \u2014 ${plainLocator(citation.locator)}. ${prose(citation.note ?? "")} `);
        for (const link of citationLinks({ ...citation, source }, new URL("../../", import.meta.url))) {
          const anchor = createElement("a", "evidence-link", link.label);
          anchor.href = link.href;
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          paragraph.append(anchor, document.createTextNode(" "));
        }
        support.append(paragraph);
        if (source?.review) support.append(proseLine(`Source review: ${readingExtent(source.review.extent)}. ${source.review.limit}`));
      }
      for (const limit of claim.limitations ?? []) support.append(proseLine(`Limit: ${limit}`));
      section.append(support);
    }
    for (const limit of interaction.limitations ?? []) section.append(proseLine(`Case limit: ${limit}`));
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
    section.append(proseLine(analogy.correspondence));
    if (analogy.fields?.length) section.append(createElement("p", "", `Compared properties: ${analogy.fields.map((field) => humanize(field)).join("; ")}`));
    const boundaries = typeof analogy.breakdownConditions === "string"
      ? [analogy.breakdownConditions] : analogy.breakdownConditions ?? [];
    for (const limit of boundaries) section.append(proseLine(`Comparison boundary: ${limit}`));
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
    section.append(proseLine(claim.statement));
    section.append(proseLine(`Scope: ${plainSlug(claim.scope)}`));
    for (const experiment of Array.isArray(claim.experimentalContexts) ? claim.experimentalContexts : []) {
      const context = createElement("details");
      context.append(createElement("summary", "", `Experimental comparison: ${experiment.cellType}`));
      context.append(proseLine(`${experiment.organism}. ${experiment.preparation}`));
      context.append(proseLine(`Adaptation: ${experiment.adaptation}`));
      context.append(proseLine(`Stimulus: ${experiment.stimulus.description}`));
      const light = experiment.stimulus.light;
      context.append(createElement("p", "", `${humanize(light.role)}: ${light.value} ${light.unit}; nominal ${light.nominalValue}.`));
      context.append(proseLine(`Comparison: ${experiment.comparison}`));
      context.append(proseLine(`Readout: ${experiment.observable}`));
      context.append(proseLine(`Observation: ${experiment.review.observation}`));
      context.append(proseLine(`Interpretation: ${experiment.review.inference}`));
      for (const candidate of experiment.review.candidates) {
        const route = experiment.routes.find((r) => r.id === candidate.routeId);
        context.append(proseLine(`${route.name}: ${slugWords(candidate.status)}. ${candidate.reason}`));
        context.append(createElement("p", "", route.logic === "any"
          ? `Alternatives (inclusive OR): ${route.alternativeRouteIds.map((id) => experiment.routes.find((r) => r.id === id)?.name ?? humanize(id)).join("; ")}`
          : `Candidate mechanism: ${route.components.join(" \u2192 ")}`));
      }
      if (experiment.measurement) {
        const m = experiment.measurement;
        context.append(createElement("p", "", `Source table: ${m.sheet}!${m.intensityCell},${m.ratioCell}; response ratio ${m.responseRatio} (${m.ratioUnit}). Uncertainty: ${plainSlug(m.uncertainty)}. ${m.sampling}`));
      }
      context.append(proseLine(`Revisit: ${experiment.review.refutation}`));
      context.append(proseLine(experiment.review.quantitativeInference));
      section.append(context);
    }
    for (const study of Array.isArray(claim.contexts) ? claim.contexts : []) {
      if (!study || typeof study !== "object") continue;
      const context = createElement("details");
      const subject = study.system ?? study.organism;
      const design = studyDesignLabel(study);
      context.append(createElement("summary", "", `Study context: ${subject ?? design ?? "preparation"}`));
      if (design) context.append(createElement("p", "", `Study design: ${design}`));
      context.append(proseLine(`Preparation: ${study.preparation}`));
      context.append(proseLine(`Observable: ${study.observable}`));
      context.append(proseLine(`Reviewed: ${readingExtent(study.readExtent)}. ${(study.reviewedLocators ?? []).map(plainLocator).join("; ")}`));
      for (const limit of Array.isArray(study.limitations) ? study.limitations : []) context.append(proseLine(`Study limit: ${limit}`));
      section.append(context);
    }
    for (const citation of resolveClaimCitations(claim)) {
      const paragraph = createElement("p");
      const year = citation.source?.year ? ` (${citation.source.year})` : "";
      paragraph.append(createElement("span", "", `${citation.role}: ${citation.source?.title ?? "Unnamed source"}${year} \u2014 ${plainLocator(citation.locator)}. ${prose(citation.note ?? "")} `));
      for (const link of citationLinks(citation, new URL("../../", import.meta.url))) {
        const anchor = createElement("a", "evidence-link", link.label);
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        paragraph.append(anchor, document.createTextNode(" "));
      }
      section.append(paragraph);
      const review = citation.source?.review;
      const reviewText = [readingExtent(review?.extent), review?.limit]
        .filter((value) => typeof value === "string" && value.length > 0).join(". ");
      if (reviewText && !reviewedSources.has(citation.sourceId)) {
        section.append(proseLine(`Source review: ${reviewText}`));
        reviewedSources.add(citation.sourceId);
      }
    }
    for (const limit of Array.isArray(claim.limitations) ? claim.limitations : []) {
      section.append(proseLine(`Limit: ${limit}`));
    }
    return section;
  });
  if (Array.isArray(record.conditions)) {
    const conditions = createElement("section");
    conditions.append(createElement("h5", "", "Joint conditions \u2014 every condition is required"));
    for (const condition of record.conditions) conditions.append(proseLine(condition));
    sections.unshift(conditions);
  }
  if (record.representation) {
    const representation = createElement("section");
    representation.append(createElement("h5", "", `Atlas role: ${humanize(record.representation.role)}`));
    representation.append(proseLine(record.representation.denotes));
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

/** The words the release's vocabulary defines, each with its definition. */
function guideTerms(entries) {
  const grid = createElement("div", "guide-grid");
  for (const entry of entries) grid.append(guideCard(entry.name, entry.definition));
  return grid;
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

/** The release's root note speaks of a sign; say which arising that sign is. */
function rootNoteText(note) {
  const root = nodeSummary(state.ontology?.root);
  return note && root && note.includes("\u03a9") ? `The sign \u03a9 stands for ${root.name}. ${note}` : note;
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
      createElement("p", "", "Each square in the table and each card in Causes is an arising: an object, process, pattern, property or effect that arises from earlier interactions. Each line between arisings is a cause. Everything else is a technical record in the subgraph of exactly one arising: what the arising is and how it is known."),
      createElement("p", "", counts),
      ...(Array.isArray(declarations?.principles) ? declarations.principles.filter((entry) => typeof entry?.statement === "string")
        .map((entry) => createElement("blockquote", "", entry.statement)) : []),
      ...(table.rootNote ? [createElement("p", "", rootNoteText(table.rootNote))] : [])));
    const viewGrid = createElement("div", "guide-grid guide-views");
    viewGrid.append(
      guideCard("1 \u00b7 Table", "Levels of complexity by phases, like the opening of a periodic table. The Map shows every arising as a square and fits one screen; Names shows them with their names. Point at an arising to read it under the controls and to draw its causes and dependents across the table. Rings mark its causes, its dependents, and arisings that are both."),
      guideCard("2 \u00b7 Causes", "The focused arising in the centre, its causes to the left and the arisings it conditions to the right. Depth adds further steps; a + on a card adds only that card's neighbours. Causal order spreads causes that feed other causes into their own columns. With evidence and Necessary narrow the causes shown."),
      guideCard("3 \u00b7 Subgraph", "The technical records of the focused arising: contexts, scoped processes, definitions and hypotheses, with dashed records borrowed from other arisings."),
      guideCard("4 \u00b7 Records", "The relations of any single record across subgraphs. A lens shows only the records the release marks for that view, such as studied systems or measurements; a case shows the records of one studied interaction. An arising that takes part in a case lists it in the inspector; click it to open the case here. A + on a card adds its neighbours here too."),
      guideCard("5 \u00b7 Open work", "What the map does not know yet, and so where it can grow: evidence by level, causes without evidence, open categories, arisings with no supported cause and arising obligations."));
    sections.push(guideSection("Five views", viewGrid));
    const explore = createElement("div", "guide-grid");
    explore.append(
      guideCard("+3 on a card", "This card has 3 neighbours outside the drawing. Click to add them: a cause one column left of the card, a dependent one column right. The minus sign removes them again. Changing the focus, depth or view starts over. A view too large to draw whole says so at the top and leaves the rest to these marks."),
      guideCard("Causal order", "At depth 1, causes that feed other causes move further left and dependents that depend on other dependents further right, so no line stays inside a column."),
      guideCard("Path to...", "In the inspector of an arising: name another arising to draw the shortest chain of causes between them, with fewer unreviewed links preferred. When neither leads to the other, the two chains meet at their nearest common cause. The filters apply; Clear path returns."));
    sections.push(guideSection("Choosing what to see", explore));
    const axes = createElement("div");
    const levels = createElement("div", "guide-axis");
    for (const level of table.levels) {
      const chip = createElement("span", "", `${level.value} ${level.name}`);
      chip.dataset.empty = String(!state.ontology.arisings.some((node) => node.level === level.value));
      levels.append(chip);
    }
    const phases = createElement("div", "guide-axis");
    for (const phase of table.phases) phases.append(createElement("span", "", phase.name));
    axes.append(createElement("p", "", "Rows are complexity levels; levels with no arisings yet, dashed here, are listed under the table and remain predictions."), levels,
      createElement("p", "", "Columns are the phases within a level:"), phases);
    if (state.vocabulary?.phases.length) axes.append(guideTerms(state.vocabulary.phases));
    sections.push(guideSection("Levels and phases", axes));
    if (state.vocabulary?.typeRoles.length) sections.push(guideSection("Types of arising", createElement("p", "", "Every arising is one of these types, as the theory's vocabulary defines them. The inspector shows the definition when you point at the type."), guideTerms(state.vocabulary.typeRoles)));
    const domains = createElement("div", "guide-grid");
    for (const domain of table.domains.values()) domains.append(guideCard(domain.name, domain.definition, { domainIndex: domain.index }));
    sections.push(guideSection("Domains", createElement("p", "", "A domain is a band of clusters on adjacent levels that one lineage of arising causes runs through. Its colour marks squares, cards, chips and the navigator."), domains));
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
    roles.append(guideCard("Line width", "Necessary causes are drawn thickest, then enabling, contextual and optional ones. Necessity says how essential a cause is in the description and is independent of its role: a modulation can be necessary while the dependent still forms and persists without it."));
    if (state.vocabulary) roles.append(guideCard("Carrier", "What carries a cause, where one is declared: the group and type of unit, such as cells or agents, whose number controls it. The inspector names it on the cause."));
    sections.push(guideSection("Reading a cause", createElement("p", "", "The line style shows the role of a cause and its colour shows its evidence status. Lines that do not touch the focused arising are drawn fainter; point at a card or a line to bring its lines back. Click any cause, in a graph or in the inspector, to read its evidence and open obligations."), roles));
    for (const [title, entries] of [["Dependency types", state.vocabulary?.dependencyTypes], ["Causal directions", state.vocabulary?.causalDirections], ["Interaction modes", state.vocabulary?.interactionModes]]) {
      if (!entries?.length) continue;
      const details = createElement("details", "guide-disciplines");
      details.append(createElement("summary", "", `${title}: what the words on a cause mean`), guideTerms(entries));
      sections.push(details);
    }
    const cards = createElement("div", "guide-grid");
    const solid = createElement("i", "legend-card");
    const dashed = createElement("i", "legend-card");
    dashed.dataset.style = "dashed";
    const dotted = createElement("i", "legend-card");
    dotted.dataset.style = "dotted";
    const reached = state.ontology.predecessor.size + (state.ontology.root ? 1 : 0);
    cards.append(guideCard("On a card", "The name, then its complexity level and type. The fraction counts the causes of the arising that cite evidence, out of all its causes."),
      guideCard("Status and evidence", "The status says how well the phenomenon itself is known; the fraction counts the causes that cite evidence. So Established next to 0/5 is no contradiction: the phenomenon is established, while its causes here have not been reviewed yet."),
      guideCard("Lineage from the root", `The shortest chain of causes in the arising role that leads from the root to an arising. ${reached} of ${state.ontology.arisings.length} arisings are reached this way. The inspector lists it; the table can draw it.`),
      guideCard("Colour: Evidence", "The table can tint each arising by the share of its causes that cite evidence, from grey for none to full green for all. Hatched: no causes in the graph, as for the root. Next to each level stands the share across all causes on that level."),
      guideCard("Established or well-supported", "Solid border: the author's scientific status of the arising.", { line: solid }),
      guideCard("Hypothesized or speculative", "Dashed border.", { line: dashed }),
      guideCard("Methodological placeholder", "Dotted border: the observable or formal test that would instantiate it is still to be specified.", { line: dotted }));
    sections.push(guideSection("Reading an arising", cards));
    if (state.disciplines.length) {
      const list = createElement("div", "guide-grid");
      for (const entry of state.disciplines) list.append(guideCard(entry.name, entry.definition));
      const details = createElement("details", "guide-disciplines");
      details.append(createElement("summary", "", `The ${state.disciplines.length} disciplines in this release`), list);
      sections.push(guideSection("Disciplines", createElement("p", "", "The fields that study an arising. The inspector lists them for each arising; a Discipline select in the table dims the other arisings, and one under Filters in the navigator lists the arisings of a field."), details));
    }
  } else {
    sections.push(guideSection("What you are looking at",
      createElement("p", "", "A verified neighbourhood of the selected record: its parents to the left, the record in the centre and its children to the right. Arrowheads point from source to target."),
      createElement("p", "", state.presentationMetadata?.boundary.summary ?? "")));
  }
  const keys = createElement("dl", "guide-keys");
  const ontology = Boolean(state.ontology);
  for (const [key, text] of [
    ["Click", "Inspect a record or a relation"], ["Double-click", ontology ? "Focus it (in the table: open its causes)" : "Focus it"],
    ["+3 on a card, or X", "Add its neighbours to the drawing, or remove them"],
    ["Tab", `Go to the next part of the page. The first stop skips to the open view. A graph, ${ontology ? "the tree, the table, " : ""}a list and most rows of controls each take one stop; arrow keys move inside it, and the line under the stage says which keys work there. The ${ontology ? "filter and " : ""}zoom buttons on the stage of a graph are a stop each.`],
    ["Arrow keys", `In a graph${ontology ? " or the table" : ""}: the nearest card in that direction. In a list: up and down. In a row of controls that is one stop: along it.`],
    ["Enter", `Inspect what the keyboard is on${ontology ? ", or open and close a group in the tree" : ""}`],
    ["Space, Shift + Enter", ontology ? "Focus it (in the table, the tree and Open work: open its causes)" : "Focus it"],
    ["Home", `In a graph: back to the focus card, or to the first card where there is none. In ${ontology ? "the table or a list" : "a list"}: the first one, End the last`],
    ["E, Shift + E", "Go through the lines of a card, forwards or back. Enter inspects a line; Escape returns to the card."],
    ["Escape", ontology ? "Go back one step: from a line to its card, clear the search, close the Path to... picker or the Export menu, close the navigator of a narrow page" : "Go back one step: from a line to its card, clear the search, close the Export menu, close the navigator of a narrow page"],
    ...(ontology ? [["Right, Left in the tree", "Open a group or enter it; close it or go to its parent"]] : []),
    ["Drag, scroll", "Pan the graph"], ["Ctrl or Cmd + scroll, pinch", "Zoom around the pointer"],
    ["+  -  0", "Zoom in, zoom out, fit"], ["[  ]", "Hide or show the navigator, the inspector"], ["/", "Search"], ...(ontology ? [["1  2  3  4  5", "Table, Causes, Subgraph, Records, Open work"]] : []),
    ["Alt + Left", "Back to the previous focus (browser history)"], ["?", "This guide"],
    ["Export", "Save the drawing, whole, as SVG or PNG, on dark or on white"],
    ["Print", `The browser's print gives the whole drawing on white${ontology ? ", or the table with its names" : ""}`],
    ["The address", `Keeps the view and what is selected, so a reload or a shared link opens the same place. A ${ontology ? "cause" : "relation"} has Copy link in the inspector.`]
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

/** A comparison's record identifier as words: "soc:approval-versus-truth" -> "Approval versus truth". */
function interpretationTitle(id) {
  return humanize(String(id).replace(/^[a-z][a-z0-9-]*:/i, "").replace(/([a-z])(\d{4})/g, "$1 $2"));
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
    const reviewText = [readingExtent(source.review?.extent), source.review?.limit]
      .filter((value) => typeof value === "string" && value.length > 0).join(". ");
    if (reviewText) section.append(proseLine(`Source review: ${reviewText}`));
  };
  const sections = review.studies.map((study) => {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", sources.get(study.sourceId)?.title ?? "Study"));
    const studyDesign = studyDesignLabel(study);
    for (const [label, value] of [["Study design", studyDesign], ["System", study.system ?? study.organism], ["Preparation", study.preparation], ["Observable", study.observable], ["Finding", study.finding]]) {
      if (value) section.append(proseLine(`${label}: ${value}`));
    }
    if (study.readExtent) section.append(proseLine(`Reviewed: ${readingExtent(study.readExtent)}. ${(study.reviewedLocators ?? []).map(plainLocator).join("; ")}`));
    const sourceReviewLimit = sources.get(study.sourceId)?.review?.limit;
    for (const limit of study.limitations) {
      if (!sourceReviewLimit || limit !== sourceReviewLimit) section.append(proseLine(limit));
    }
    if (study.correctionCheck) section.append(proseLine(`Publication check: ${study.correctionCheck}`));
    appendSource(section, study.sourceId);
    return section;
  });
  const scopeSections = (review.scopes ?? []).map((scope) => {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", scope.name));
    section.append(proseLine(scope.scope));
    const inspect = createElement("button", "", "Inspect reviewed scope");
    inspect.type = "button";
    inspect.onclick = () => inspectNode(scope.id);
    section.append(inspect);
    for (const limit of scope.unresolved) section.append(proseLine(`Open question: ${limit}`));
    return section;
  });
  sections.unshift(...scopeSections);
  for (const comparison of review.comparisons ?? []) {
    const section = createElement("details", "record-details");
    section.append(createElement("summary", "", `Interpretation: ${interpretationTitle(comparison.id)}`));
    section.append(proseLine(comparison.candidate));
    section.append(proseLine(`Alternative: ${comparison.alternative}`));
    section.append(proseLine(`Discriminating evidence: ${comparison.discriminator}`));
    section.append(proseLine(`${humanize(comparison.result)}. ${comparison.limit}`));
    for (const assumption of comparison.assumptions ?? []) section.append(proseLine(`Assumption: ${assumption}`));
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
        summary.textContent = `Could not load this review. ${plainFailure(error)}`;
        console.error(error);
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

/** The top rows of the navigator tree in its current grouping, which all start open. */
function navigatorGroupKeys(table) {
  return state.navigatorGroup === "level" ? table.levels.map((level) => `level:${level.value}`)
    : [...table.domains.keys()].map((value) => `domain:${value}`);
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
  state.causeFilters = { evidence: false, necessary: false };
  state.expanded = [];
  state.expansionScope = null;
  state.treeFor = null;
  state.treeExpanded = new Set(state.ontology ? navigatorGroupKeys(metadata.arisingTable) : []);
  state.tablePreviewId = null;
  state.work = { section: "causes", level: null, domain: null, shown: null };
  state.readerCatalog?.close();
  state.readerCatalog = null;
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
  const declarations = options.browse?.declarations ?? pack.files?.["model/dictionaries.json"]?.arisingDeclarations ?? null;
  configureOntology(metadata, topologyNodes, topologyEdges, interactionGraphInput.identity ?? descriptor.identity, declarations);
  state.facts = options.browse?.arisingFacts ?? arisingFactsFromNodes(topologyNodes, metadata.arisingTable?.layer);
  state.vocabulary = options.browse?.vocabulary ?? null;
  state.disciplines = usedDisciplines(state.facts, state.vocabulary);
  state.disciplineFilter = null;
  state.domainFilter = null;
  state.arisingTableFor = null;
  state.pack = pack;
  state.manifest = manifest;
  state.presentation = presentation;
  state.browse = options.browse ?? null;
  state.presentationMetadata = metadata;
  state.interactionGraphInput = interactionViews ? interactionGraphInput : null;
  state.interactionViews = interactionViews;
  state.arisingCases = interactionViews && state.ontology ? casesByArising(interactionViews, topologyNodes, state.ontology.arisingIds) : new Map();
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
  for (const id of ["level-filter", "role-filter", "phase-filter", "status-filter", "discipline-filter"]) {
    elements[id].value = "";
  }
  elements["catalog-sort"].value = "id:asc";
  elements["catalog-sort-default"].textContent = state.ontology ? "Table order" : "Default order";
  const requested = options.useLocation === true
    ? requestedGraphState(presentation, state.selection, metadata)
    : { focusId: defaultFocusId(presentation, metadata), depth: 1, direction: "both", mode: null };
  openInspectorForLink(requested);
  applyRequestedFocus(requested);
  state.depth = requested.depth;
  state.direction = requested.direction;
  if (interactionViews && options.useLocation === true) restoreInteractionLocationState(requested.focusId);
  elements["window-model-id"].textContent = manifest.model.name ?? manifest.model.id;
  elements["model-version-chip"].textContent = manifest.model.version;
  elements["release-open"].title = `Release ${manifest.model.version}: verification and evidence library`;
  elements["model-name"].textContent = manifest.model.name;
  elements["model-version"].textContent = manifest.model.version;
  elements["node-count"].textContent = String(descriptor.statistics.nodeCount);
  elements["edge-count"].textContent = String(descriptor.statistics.edgeCount);
  elements["root-hash"].textContent = manifest.rootHash ?? "not available";
  elements["root-hash"].title = manifest.rootHash ?? "";
  elements["records-title-label"].textContent = metadata.labels.catalogTitle;
  // A placeholder cannot wrap: the Studio's short text serves an ontology, and a release's longer label moves to the tooltip.
  const declaredSearch = metadata.labels.searchPlaceholder;
  elements["catalog-search"].placeholder = state.ontology ? "Find an arising or a record" : declaredSearch?.length > 26 ? "Search records" : declaredSearch;
  elements["catalog-search"].title = !state.ontology && declaredSearch?.length > 26 ? declaredSearch : "";
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
  configureFacet("discipline-filter", state.disciplines, "All disciplines", "Discipline", (value) => disciplineOf(value)?.name ?? "");
  if (state.selection === null) selectLocalOption(manifest);
  else selectRegisteredOption(state.selection);
  render();
  if (previousBrowse) previousBrowse.close();
  else previousPresentation?.close();
  // A model the reader chose is a new place: Back returns to the view they left.
  replaceLocationState({ push: options.useLocation !== true });
  document.body.dataset.presentation = state.browse ? "incremental" : "lazy";
  document.body.dataset.modelSource = options.modelSource ?? "registry";
  document.body.dataset.state = "ready";
  state.loadMessage = options.loadMessage ?? "Model verified";
  elements["load-state"].textContent = state.loadMessage;
  elements["rdf-import-open"].disabled = false;
  elements["model-selector"].disabled = false;
  elements["reset-view"].disabled = false;
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
  state.selectedRelationId = requested.relationId ?? null;
  state.pathTarget = null;
  if (!state.ontology) {
    state.mode = "graph";
    state.focusId = id;
    state.recordFocusId = null;
    state.selectedId = requested.selectId ?? id;
    return;
  }
  const node = nodeSummary(id);
  const mode = ONTOLOGY_MODES.includes(requested.mode) ? requested.mode : null;
  if (isArising(node)) {
    state.focusId = id;
    state.recordFocusId = mode === "records" ? id : null;
    state.mode = mode ?? "table";
    state.pathTarget = pathTargetOf(requested, id);
  } else {
    const owner = node?.arisingId && state.ontology.arisingIds.has(node.arisingId) ? node.arisingId : null;
    state.focusId = owner ?? state.ontology.root ?? state.ontology.arisings[0]?.id ?? id;
    state.recordFocusId = id;
    state.mode = mode === "records" || !owner ? "records" : "subgraph";
  }
  state.selectedId = requested.selectId ?? id;
  if (state.mode === "work" && requested.work) {
    const { section, level, domain } = state.work;
    const same = section === requested.work.section && level === requested.work.level && domain === requested.work.domain;
    state.work = { ...requested.work, shown: same ? state.work.shown : null, reveal: true };
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
  return error instanceof Error ? error.message : String(error);
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
  // The view package throws on an id it refuses outright (__proto__, an overlong one), and an address can hold anything.
  const holds = (id) => {
    try {
      return presentation.has(id);
    } catch {
      return false;
    }
  };
  const requested = requestedWorkspaceState(
    parameters,
    identity,
    holds,
    defaultFocusId(presentation, metadata)
  );
  const sameModel = parameters.get("model") === identity.modelId;
  const mode = sameModel ? parameters.get("mode") : null;
  // A record or relation this release does not hold is ignored, so old and mistyped links still open. An old link's version is ignored too: the model is what it names.
  const select = sameModel ? parameters.get("select") : null;
  const relation = sameModel ? parameters.get("relation") : null;
  return {
    ...requested,
    mode: ONTOLOGY_MODES.includes(mode) ? mode : null,
    path: sameModel ? parameters.get("path") : null,
    work: sameModel && mode === "work" ? requestedWork(parameters, metadata) : null,
    selectId: select && holds(select) ? select : null,
    relationId: relation && state.graphIndex?.edgesById.has(relation) ? relation : null
  };
}

/** The section and filters of Open work in an address. A value this release does not hold falls back to the default: the table declares levels that hold no arising yet. */
function requestedWork(parameters, metadata) {
  const table = metadata?.arisingTable;
  const section = parameters.get("section");
  const level = parameters.get("level");
  const domain = parameters.get("domain");
  return {
    section: WORK_SECTIONS.some((entry) => entry.key === section) ? section : "causes",
    level: level && table?.levels.some((entry) => String(entry.value) === level) && state.ontology?.arisings.some((node) => node.level === Number(level)) ? Number(level) : null,
    domain: domain && table?.domains.has(domain) ? domain : null
  };
}

/** The far end of a path in a request: another arising, in Causes. Anything else opens no path. */
function pathTargetOf(requested, focusId) {
  const valid = requested.mode === "causes" && requested.path !== focusId && state.ontology?.arisingIds.has(requested.path);
  return valid ? requested.path : null;
}

function replaceLocationState({ push = false } = {}) {
  const identity = state.selection ?? {
    modelId: state.manifest.model.id,
    version: state.manifest.model.version
  };
  const focus = state.mode === "records" ? (state.recordFocusId ?? state.focusId)
    : state.mode === "subgraph" && state.recordFocusId && state.selectedId === state.recordFocusId && nodeSummary(state.recordFocusId)?.arisingId === state.focusId ? state.recordFocusId
      : state.focusId;
  const parameters = new URLSearchParams({ model: identity.modelId });
  const entries = state.registrySnapshot?.registry.entries;
  // A local import always says its version: without one, its name may be that of a registered model, which then opens.
  if (state.selection === null || !entries || addressNeedsVersion(entries, identity)) parameters.set("version", identity.version);
  parameters.set("node", focus);
  parameters.set("depth", String(state.depth));
  parameters.set("direction", state.direction);
  if (state.ontology) parameters.set("mode", state.mode);
  if (state.pathTarget) parameters.set("path", state.pathTarget);
  if (state.interactionPerspectiveId) parameters.set("view", state.interactionPerspectiveId);
  // The address names what the screen shows: a case only where it is drawn.
  if (state.interactionCaseId && ["records", "graph"].includes(state.mode)) parameters.set("case", state.interactionCaseId);
  if (state.mode === "work") {
    if (state.work.section !== "causes") parameters.set("section", state.work.section);
    if (state.work.level !== null) parameters.set("level", String(state.work.level));
    if (state.work.domain !== null) parameters.set("domain", state.work.domain);
  }
  if (state.selectedId && state.selectedId !== focus) parameters.set("select", state.selectedId);
  if (state.selectedRelationId) parameters.set("relation", state.selectedRelationId);
  const nextHash = parameters.toString();
  // Every entry the Studio has been through holds a state, and keeps it through Back, Forward and a reload: one with none is a link that has just arrived.
  const written = { written: true };
  if (location.hash.slice(1) === nextHash) {
    if (history.state === null) history.replaceState(written, "");
    return;
  }
  if (push && location.hash.length > 1) {
    if (state.entryBeforeDoubleClick) history.replaceState(written, "", state.entryBeforeDoubleClick);
    history.pushState(written, "", `#${nextHash}`);
  } else history.replaceState(written, "", `#${nextHash}`);
}

function restoreInteractionLocationState(focusId) {
  const parameters = new URLSearchParams(location.hash.slice(1));
  const identity = state.selection ?? { modelId: state.manifest.model.id, version: state.manifest.model.version };
  const bound = parameters.get("model") === identity.modelId;
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
  // A local model has no registry entry: an address that names it stays inside it.
  const inLocalModel = state.selection === null && parameters.get("model") === state.manifest?.model.id
    && parameters.get("version") === state.manifest?.model.version;
  const unknownModel = !inLocalModel && namesUnknownModel(state.registrySnapshot.registry.entries, parameters);
  if (
    !inLocalModel && (state.selection === null
    || modelSelectionKey(requestedEntry) !== modelSelectionKey(state.selection))
  ) {
    const opened = await openRegisteredModel(requestedEntry, { useLocation: true });
    if (opened && unknownModel) noteUnknownModel();
    return;
  }
  // Returning to the displayed release supersedes an in-flight model switch.
  if (pendingModelLoad !== null) {
    modelLoadSequence += 1;
    pendingModelLoad.abort();
    pendingModelLoad = null;
    elements["model-selector"].disabled = false;
    if (state.selection === null) selectLocalOption(state.manifest);
    else selectRegisteredOption(state.selection);
    elements["load-state"].textContent = state.loadMessage;
  }
  // The same steps as a load, so that an address gives the same screen whichever way it arrives.
  const requested = requestedGraphState();
  openInspectorForLink(requested);
  applyRequestedFocus(requested);
  state.depth = requested.depth;
  state.direction = requested.direction;
  if (state.interactionViews) restoreInteractionLocationState(requested.focusId);
  endSwitchFailure();
  render();
  replaceLocationState();
  if (unknownModel) noteUnknownModel();
}

/** A link to a model the registry does not hold opens the default view, and the strip says why, until the next render rewrites the strip. */
function noteUnknownModel() {
  elements["graph-message"].hidden = false;
  elements["graph-message"].prepend(document.createTextNode("This link names a model that is not published here, so the default view opened instead. "));
  syncMessageRoom();
  // The render before this hid the strip in the same frame, so the Map's observer may see no change at all.
  if (state.mode === "table") {
    fitArisingMap();
    updateArisingTable();
  }
}

/**
 * A link to a relation that has just arrived, on a new page or an open one, asks to show it: the inspector opens, and the remembered collapse stays as it was.
 * Back, Forward and a reload return to an entry the Studio has written and ask for nothing: the panel stays as the reader left it, in this tab open until they close it.
 */
function openInspectorForLink(requested) {
  if (history.state !== null || document.body.dataset.inspectorCollapsed !== "true" || !requested.relationId) return;
  showPanel("inspector", false);
  holdInspectorOpen(true);
}

function showPanel(side, collapsed) {
  document.body.dataset[side === "navigator" ? "navigatorCollapsed" : "inspectorCollapsed"] = String(collapsed);
  const button = elements[`${side}-toggle`];
  button.setAttribute("aria-expanded", String(!collapsed));
  button.title = `${collapsed ? "Show" : "Hide"} the ${side} (${side === "navigator" ? "[" : "]"})`;
}

/** A view's key: what held the keyboard may be gone with the old view, and the keyboard then goes to the new view's stop. */
function viewShortcut(mode) {
  const before = document.activeElement;
  setMode(mode);
  if (before && before !== document.body && (!before.isConnected || !before.getClientRects().length)) focusStage();
}

/** On a narrow page the navigator opens above the view, and the toggle that opened it drops out of the window. */
function navigatorStacked() {
  return matchMedia("(max-width: 900px)").matches;
}

/** A panel's key: a panel that hides takes the keyboard's place with it, so the keyboard waits on its toggle, or on the stage where a narrow page has none. */
function panelShortcut(side) {
  const collapsedKey = side === "navigator" ? "navigatorCollapsed" : "inspectorCollapsed";
  const panel = document.querySelector(side === "navigator" ? ".catalog-panel" : ".inspector-panel");
  const inside = panel.contains(document.activeElement);
  togglePanel(side);
  if (document.body.dataset[collapsedKey] !== "true") {
    if (side === "navigator") landInStackedNavigator();
  } else if (inside) {
    const toggle = elements[`${side}-toggle`];
    if (toggle.getClientRects().length) toggle.focus();
    else focusStage();
  }
}

function landInStackedNavigator() {
  if (navigatorStacked() && document.body.dataset.navigatorCollapsed !== "true") elements["catalog-search"].focus();
}

/** Escape closes the navigator of a narrow page from inside it and returns to its toggle. The search box uses a first Escape to clear itself. */
function stackedNavigatorEscape(event) {
  if (event.key !== "Escape" || event.defaultPrevented || !navigatorStacked() || document.body.dataset.navigatorCollapsed === "true" || !event.target.closest?.(".catalog-panel, #navigator-toggle")) return;
  event.preventDefault();
  togglePanel("navigator");
  elements["navigator-toggle"].focus();
}

/** Collapse or restore a side panel; the graph refits to the space it gains. */
function togglePanel(side) {
  const key = side === "navigator" ? "navigatorCollapsed" : "inspectorCollapsed";
  const collapsed = document.body.dataset[key] !== "true";
  showPanel(side, collapsed);
  savePreference(key, collapsed);
  if (side === "inspector") holdInspectorOpen(false);
  requestAnimationFrame(() => {
    syncMessageRoom();
    if (state.mode === "table") updateArisingTable();
    else if (state.mode !== "work") fitGraph();
  });
}

/**
 * Clicking an inspector row shows that record, which replaces what lies under the pointer: the second
 * click of a double-click lands on something else. So the panel remembers the row, and reads a
 * second click on the same spot as focusing it, whatever is there by then.
 */
function bindInspectorDoubleClick(panel) {
  let first = null;
  panel.addEventListener("click", (event) => {
    if (first && event.detail === 2 && Math.hypot(event.clientX - first.x, event.clientY - first.y) < 6) {
      event.preventDefault();
      event.stopPropagation();
      const { id } = first;
      first = null;
      const view = stageView();
      focusNode(id);
      if (stageView() !== view) showViewOnNarrowPage();
      return;
    }
    const row = event.detail === 1 ? event.target.closest("[data-focus-id]") : null;
    first = row ? { id: row.dataset.focusId, x: event.clientX, y: event.clientY } : null;
  }, true);
}

/**
 * The first click of a double-click selects, and that selection is written into the current history
 * entry before the second click opens a new one. So the address is kept from before the first click,
 * and the new entry is pushed on top of it: Back returns to what was there, not to that passing click.
 */
function bindDoubleClickHistory() {
  let before = "";
  const mark = () => {
    state.entryBeforeDoubleClick = before;
    setTimeout(() => { state.entryBeforeDoubleClick = null; });
  };
  document.addEventListener("click", (event) => {
    if (event.detail === 1) before = location.hash;
    else if (event.detail === 2) mark();
  }, true);
  document.addEventListener("dblclick", mark, true);
}

/**
 * A pill's first click moves the drawing under the pointer. The rest of that double-click still
 * belongs to the pill, not to the card or line that now lies there.
 */
function bindPillDoubleClick() {
  let onPill = false;
  document.addEventListener("click", (event) => {
    if (event.detail <= 1) onPill = Boolean(event.target.closest?.(".graph-pill"));
    else if (onPill) event.stopPropagation();
  }, true);
  document.addEventListener("dblclick", (event) => {
    if (onPill) event.stopPropagation();
  }, true);
}

const ROVING_ITEMS = "a[href], button, select";

/** What the footer says while the keyboard is in a widget, because a ring alone does not tell that arrow keys work there. */
const KEY_HINTS = [
  [".graph-edge", "E: next line \u00b7 Enter: inspect \u00b7 Escape: back to the card"],
  ["#ontology-tree", "Up, Down: move \u00b7 Right: open \u00b7 Left: close \u00b7 Enter: inspect \u00b7 Shift+Enter: focus"],
  ["#catalog-list", "Up, Down: move \u00b7 Enter: inspect \u00b7 Shift+Enter: focus"],
  [".arising-grid", "Arrows: move \u00b7 Enter: inspect \u00b7 Space: open its causes"],
  [".work-list", "Up, Down: move \u00b7 Enter: inspect \u00b7 Space: open in Causes"],
  ["[data-roving]", "Arrow keys move along these controls \u00b7 Tab: on to the next group"],
  ["#inspector-content h3", "Up, Down: scroll the inspector \u00b7 Tab: on to its controls"]
];

/** The keys of a card: X only where the card has neighbours to add or remove, Home by what it goes to in this drawing. A path marks both its ends and Home takes the left one, which need not be the focus. */
function cardKeyHint(card) {
  const pill = elements["graph-nodes"].querySelector(`.graph-pill[data-pill-for="${CSS.escape(card.dataset.nodeId)}"]`);
  const focus = elements["graph-nodes"].querySelector('.graph-node[data-focus="true"]');
  return ["Arrows: move", "Enter: inspect", "Space: focus", ...(pill ? [pill.dataset.expanded === "true" ? "X: collapse" : "X: expand"] : []), "E: its lines", focus && !state.pathTarget ? "Home: focus card" : "Home: first card"].join(" \u00b7 ");
}

function updateKeyHint(target) {
  const visible = target?.matches?.(":focus-visible");
  const card = visible ? target.closest(".graph-node") : null;
  const hint = card ? cardKeyHint(card) : visible ? KEY_HINTS.find(([selector]) => target.closest(selector))?.[1] : null;
  elements["graph-keys"].hidden = !hint;
  elements["graph-keys"].textContent = hint ?? "";
}

/** Make one of the items the Tab stop of its widget; the others are reached with the arrow keys. */
function setRovingStop(items, stop) {
  for (const item of items) {
    const value = item === stop ? "0" : "-1";
    if (item.getAttribute("tabindex") !== value) item.setAttribute("tabindex", value);
  }
}

/** Scroll a panel so that an element keeps clear of what lies over its top and bottom edges. */
function keepFocusClear(element, panel, top, bottom) {
  const rect = element.getBoundingClientRect();
  if (rect.top < top + 6) panel.scrollTop -= top + 6 - rect.top;
  else if (rect.bottom > bottom - 6) panel.scrollTop += rect.bottom - bottom + 6;
}

function visibleRovingItems(group) {
  return [...group.querySelectorAll(ROVING_ITEMS)].filter((item) => item.getClientRects().length > 0);
}

/** A row of controls is one Tab stop, kept on a control that shows; a group with a chosen item returns to it when the keyboard leaves. */
function syncRovingGroup(group) {
  const all = [...group.querySelectorAll(ROVING_ITEMS)];
  const visible = visibleRovingItems(group);
  const active = group.contains(document.activeElement) ? document.activeElement : null;
  const rest = group.dataset.rovingRest ? visible.find((item) => item.matches(group.dataset.rovingRest)) : null;
  setRovingStop(all, visible.includes(active) ? active : rest ?? visible.find((item) => item.getAttribute("tabindex") === "0") ?? visible[0] ?? all[0]);
}

function syncRovingGroups() {
  for (const group of document.querySelectorAll("[data-roving]")) syncRovingGroup(group);
}

function rovingKeydown(event) {
  const group = event.target.closest?.("[data-roving]");
  if (!group || event.metaKey || event.ctrlKey || event.altKey) return;
  const items = visibleRovingItems(group);
  const next = rovingStep(items.length, items.indexOf(event.target), event.key, { orientation: group.dataset.roving, wrap: true });
  if (next === null || !items.includes(event.target)) return;
  event.preventDefault();
  items[next].focus();
  if ("rovingSelects" in group.dataset) items[next].click();
}

function rovingFocusin(event) {
  updateKeyHint(event.target);
  const group = event.target.closest?.("[data-roving]");
  if (group) syncRovingGroup(group);
}

function rovingFocusout(event) {
  if (!event.relatedTarget) updateKeyHint(null);
  const group = event.target.closest?.("[data-roving]");
  // The focus has not landed yet: the group reads where it is, once it has.
  if (group && !group.contains(event.relatedTarget)) setTimeout(() => syncRovingGroup(group));
}

/** Up, Down, Home and End along a list, Space and Shift+Enter open the item. Plain Enter is the button's own click. */
function listKeydown(event, selector, open) {
  const item = event.target.closest(selector);
  if (!item || event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key === " " || (event.key === "Enter" && event.shiftKey)) {
    event.preventDefault();
    open(item);
    return;
  }
  const items = [...event.currentTarget.querySelectorAll(selector)];
  const next = rovingStep(items.length, items.indexOf(item), event.key);
  if (next === null) return;
  event.preventDefault();
  items[next].focus();
}

/** The results of a search are one Tab stop: the one the keyboard is on, or else the selected one, the first. */
function syncCatalogRoving() {
  const items = [...elements["catalog-list"].querySelectorAll(".catalog-item")];
  const active = document.activeElement?.closest?.(".catalog-item");
  setRovingStop(items, active ?? items[rovingEntry(items.map((item) => item.dataset.nodeId), [state.selectedId])]);
}

/** The rows of the tree a reader can see now: every group around them is open. */
function visibleTreeRows() {
  return [...elements["ontology-tree"].querySelectorAll('[role="treeitem"]')]
    .filter((row) => !row.parentElement.closest('.tree-group[aria-expanded="false"]'));
}

/** The tree is one Tab stop: the row the keyboard is on, or else the selected arising, the row that had it, the first. */
function syncTreeRoving() {
  const all = [...elements["ontology-tree"].querySelectorAll('[role="treeitem"]')];
  if (all.length === 0) return;
  const rows = visibleTreeRows();
  const active = document.activeElement?.closest?.('#ontology-tree [role="treeitem"]');
  const keyOf = (row) => row.dataset.nodeId ?? row.dataset.key;
  const held = all.find((row) => row.getAttribute("tabindex") === "0");
  const selected = nodeSummary(state.selectedId);
  const preferred = [state.selectedId, selected?.arisingId, held && keyOf(held)];
  setRovingStop(all, active ?? rows[rovingEntry(rows.map(keyOf), preferred)]);
}

/** The tree pattern: Up and Down over visible rows, Right opens or enters, Left closes or goes to the parent. */
function treeKeydown(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const item = event.target.closest('[role="treeitem"]');
  if (!item) return;
  const group = item.classList.contains("tree-group");
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    if (group) item.querySelector(":scope > .tree-row").click();
    else if (event.key === " " || event.shiftKey) focusNode(item.dataset.nodeId, { mode: "causes" });
    else item.click();
    return;
  }
  const rows = visibleTreeRows();
  const depthOf = (row) => {
    let depth = 0;
    for (let parent = row.parentElement.closest('[role="treeitem"]'); parent; parent = parent.parentElement.closest('[role="treeitem"]')) depth += 1;
    return depth;
  };
  const action = treeKeyAction(rows.map((row) => ({
    depth: depthOf(row),
    expandable: row.classList.contains("tree-group"),
    expanded: row.getAttribute("aria-expanded") === "true"
  })), rows.indexOf(item), event.key);
  if (!action && !event.key.startsWith("Arrow")) return;
  event.preventDefault();
  if (action?.toggle) {
    item.querySelector(":scope > .tree-row").click();
    item.focus();
  } else if (action) rows[action.move].focus();
}

/** Tab out of the Export menu or the Path to... picker closes it, wherever the keyboard goes on to. Its opener counts as inside; a pointer's click is left as it was. */
function closeWhatTabLeft(event) {
  if (event.key !== "Tab") return;
  setTimeout(() => {
    const active = document.activeElement;
    const menu = elements["export-menu"];
    if (!menu.hidden && !menu.contains(active) && active !== elements["export-toggle"]) setExportMenu(false);
    const actions = elements["record-actions"];
    const picker = actions.querySelector(".path-picker");
    const opener = actions.querySelector('button[aria-expanded="true"]');
    if (picker && !picker.contains(active) && active !== opener) {
      picker.remove();
      opener?.setAttribute("aria-expanded", "false");
    }
  });
}

function isTyping(target) {
  return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName));
}

/** The widgets of the keyboard: everything delegated, so that what is drawn later takes part. */
function bindKeyboard() {
  bindKeyboardLanding();
  document.addEventListener("keydown", rovingKeydown);
  document.addEventListener("keydown", stackedNavigatorEscape);
  document.addEventListener("keydown", closeWhatTabLeft);
  document.addEventListener("focusin", rovingFocusin);
  document.addEventListener("focusout", rovingFocusout);
  window.addEventListener("resize", syncRovingGroups);
  elements["ontology-tree"].addEventListener("keydown", treeKeydown);
  elements["ontology-tree"].addEventListener("focusin", syncTreeRoving);
  elements["catalog-list"].addEventListener("keydown", (event) => listKeydown(event, ".catalog-item", (item) => focusNode(item.dataset.nodeId)));
  elements["catalog-list"].addEventListener("focusin", syncCatalogRoving);
  // On the stage, not on the drawing: Chromium makes an SVG element with a focus listener a Tab stop.
  elements["neighborhood-graph"].closest(".graph-stage").addEventListener("focusin", syncGraphRoving);
  elements["neighborhood-graph"].closest(".graph-stage").addEventListener("focusin", revealKeyboardCard);
}

/** Bound when the module runs, before any model opens: the plain anchor would write its target into the address the page is still opening. */
function bindSkipLink() {
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    focusStage();
  });
}

function bindEvents() {
  bindKeyboard();
  window.addEventListener("resize", () => {
    if (!state.presentation) return;
    syncMessageRoom();
    if (state.mode === "table" || state.mode === "work") return;
    if (state.interactionCaseId && ["records", "graph"].includes(state.mode)) renderView();
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
  for (const id of ["catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter", "status-filter", "discipline-filter", "catalog-sort"]) {
    const eventName = id === "catalog-search" ? "input" : "change";
    elements[id].addEventListener(eventName, () => renderCatalog({ reset: true }));
  }
  elements["catalog-search"].addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && !elements["catalog-list"].hidden) {
      const first = elements["catalog-list"].querySelector(".catalog-item");
      if (first) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === "Escape") {
      if (elements["catalog-search"].value) event.preventDefault();
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
  elements["catalog-more"].addEventListener("click", () => {
    const before = elements["catalog-list"].querySelectorAll(".catalog-item").length;
    renderCatalog({ loadMore: true });
    elements["catalog-list"].querySelectorAll(".catalog-item")[before]?.focus();
  });
  elements["navigator-group"].addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");
    if (!button || !state.presentation || state.navigatorGroup === button.dataset.group) return;
    state.navigatorGroup = button.dataset.group;
    savePreference("navigatorGroup", state.navigatorGroup);
    state.treeExpanded = new Set(navigatorGroupKeys(state.presentationMetadata.arisingTable));
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
    const filter = event.target.closest("button[data-cause-filter]")?.dataset.causeFilter;
    if (filter) state.causeFilters[filter] = !state.causeFilters[filter];
    if (filter) {
      renderView();
      updateControls();
      return;
    }
    const button = event.target.closest("button[data-role]");
    if (!button) return;
    const role = button.dataset.role;
    if (state.roleFilter.has(role)) state.roleFilter.delete(role);
    else state.roleFilter.add(role);
    if (state.roleFilter.size === 0) state.roleFilter.add(role);
    renderView();
    updateControls();
  });
  elements["export-toggle"].addEventListener("click", (event) => {
    event.stopPropagation();
    setExportMenu(elements["export-menu"].hidden);
  });
  elements["export-menu"].addEventListener("click", (event) => {
    event.stopPropagation();
    const button = event.target.closest("button[data-export-format]");
    if (button) exportGraph(button.dataset.exportFormat, button.dataset.exportPalette);
  });
  document.addEventListener("click", () => setExportMenu(false));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || elements["export-menu"].hidden) return;
    setExportMenu(false);
    elements["export-toggle"].focus();
  });
  window.addEventListener("beforeprint", preparePrint);
  window.addEventListener("afterprint", finishPrint);
  elements["causal-order"].addEventListener("click", () => {
    state.causalOrder = !state.causalOrder;
    savePreference("causalOrder", state.causalOrder);
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
    if (!event.target.closest(".graph-node, .graph-edge, .graph-pill")) fitGraph();
  });
  elements["reset-view"].addEventListener("click", () => {
    elements["catalog-search"].value = "";
    for (const id of ["level-filter", "role-filter", "phase-filter", "status-filter", "discipline-filter"]) elements[id].value = "";
    elements["layer-filter"].value = state.ontology ? "" : defaultLayerValue();
    state.work = { section: "causes", level: null, domain: null, shown: null };
    state.domainFilter = null;
    state.disciplineFilter = null;
    elements["catalog-sort"].value = "id:asc";
    state.direction = "both";
    state.depth = 1;
    state.expanded = [];
    clearCauseFilters();
    state.catalog.key = null;
    state.interactionPerspectiveId = "";
    state.interactionCaseId = "";
    elements["interaction-perspective"].value = "";
    elements["interaction-case"].value = "";
    focusNode(defaultFocusId(), { mode: state.ontology ? "table" : undefined });
  });
  for (const [button, side] of [[elements["navigator-toggle"], "navigator"], [elements["inspector-toggle"], "inspector"]]) {
    button.addEventListener("click", (event) => {
      togglePanel(side);
      if (event.detail === 0 && side === "navigator") landInStackedNavigator();
    });
  }
  bindInspectorDoubleClick(elements["record-inspector"].closest(".inspector-panel"));
  bindDoubleClickHistory();
  bindPillDoubleClick();
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
    } else if (state.ontology && ["1", "2", "3", "4", "5"].includes(key)) {
      viewShortcut(ONTOLOGY_MODES[Number(key) - 1]);
    } else if ((key === "+" || key === "=") && graphViewport && state.mode !== "table" && state.mode !== "work") {
      graphViewport.zoomBy(1.25);
      revealFocusedCard();
    } else if (key === "-" && graphViewport && state.mode !== "table" && state.mode !== "work") {
      graphViewport.zoomBy(0.8);
      revealFocusedCard();
    } else if (key === "0" && state.mode !== "table" && state.mode !== "work") {
      fitGraph();
      revealFocusedCard();
    } else if (key === "[") {
      // On a narrow page this lands in the search box, which would type the key.
      event.preventDefault();
      panelShortcut("navigator");
    } else if (key === "]") {
      panelShortcut("inspector");
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
    } catch (error) {
      elements["model-selector"].value = previousKey;
      displaySwitchError(error);
    }
    // Also after a failure: the strip that explains it lies behind the open dialog.
    elements["release-dialog"].close();
  });
}

function displayError(error) {
  document.body.dataset.state = "error";
  elements["load-state"].textContent = "Model load failed";
  elements["graph-title"].textContent = "Could not load the model";
  const attempted = state.attempted ? modelSelectionLabel(state.attempted) : null;
  if (state.attempted) {
    elements["window-model-id"].textContent = attempted;
    elements["model-version-chip"].textContent = state.attempted.version;
    elements["model-name"].textContent = attempted;
    selectRegisteredOption(state.attempted);
  }
  const retry = createElement("button", "", "Retry");
  retry.type = "button";
  retry.addEventListener("click", () => location.reload());
  elements["graph-message"].hidden = false;
  elements["graph-message"].replaceChildren(document.createTextNode(plainFailure(error)), retry);
  for (const id of ["catalog-count", "graph-counts", "graph-hint", "selected-coordinate"]) elements[id].textContent = "";
  elements["selected-name"].textContent = "No record open";
  elements["selected-summary"].textContent = "The model did not load, so there is nothing to inspect yet.";
  // With no model open only what can act stays offered: the release dialog with its model list, the guide, the panels.
  for (const id of ["view-tabs", "direction-controls", "depth-controls", "role-controls", "causal-order", "zoom-controls"]) elements[id].hidden = true;
  elements["reset-view"].disabled = true;
  elements["rdf-import-open"].disabled = false;
  elements["model-selector"].disabled = state.registrySnapshot === null;
  renderGuide();
  syncMessageRoom();
  if (!eventsBound) {
    bindEvents();
    eventsBound = true;
  }
  console.error(error);
}

function displaySwitchError(error) {
  if (state.presentation === null) {
    displayError(error);
    return;
  }
  document.body.dataset.state = "ready";
  state.switchFailed = true;
  elements["load-state"].textContent = "Model switch failed";
  elements["graph-message"].hidden = false;
  elements["graph-message"].textContent = `Could not open that model. ${plainFailure(error)}`;
  elements["model-selector"].disabled = false;
  syncMessageRoom();
  if (state.mode === "table") updateArisingTable();
  replaceLocationState();
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
  state.switchFailed = false;
  state.attempted = selection;
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

/** What this reader chose earlier, read before the first render. A stored value we do not know counts as no choice. */
function restorePreferences() {
  const preferences = loadPreferences();
  if (preferences.tableDensity === "names") state.tableDensity = "names";
  if (preferences.tableColour === "evidence") state.tableColour = "evidence";
  state.introDismissed = preferences.introDismissed === true;
  if (preferences.navigatorGroup === "level") state.navigatorGroup = "level";
  state.causalOrder = preferences.causalOrder === true;
  // A narrow page keeps its own default: the navigator behind its toggle, the inspector below the view with no toggle to bring it back.
  // Wide is whatever is not narrow, so no width falls between the two. Same test as the script at the top of the page's body.
  if (!matchMedia("(max-width: 900px)").matches) {
    if (preferences.navigatorCollapsed === true) showPanel("navigator", true);
    if (preferences.inspectorCollapsed === true && !inspectorHeldOpen()) showPanel("inspector", true);
  }
}

/** A narrow screen opens on the view; the navigator waits behind its toggle. This default is not the reader's choice, so it is not remembered. */
function collapseNavigatorOnNarrowScreen() {
  if (!matchMedia("(max-width: 900px)").matches) return;
  document.body.dataset.navigatorCollapsed = "true";
  elements["navigator-toggle"].setAttribute("aria-expanded", "false");
  elements["navigator-toggle"].title = "Show the navigator ([)";
}

collapseNavigatorOnNarrowScreen();
restorePreferences();
bindSkipLink();

async function start() {
  window.addEventListener("hashchange", () => {
    restoreLocationState().catch(displaySwitchError);
  });
  // A failed switch leaves its entry naming the view on screen: Back from it fires no hashchange, yet it leaves the failure behind.
  window.addEventListener("popstate", () => {
    if (state.switchFailed) render();
  });
  const snapshot = await loadModelPackRegistryHttp(
    MODEL_REGISTRY_URL,
    { expectedRegistryHash: EXPECTED_REGISTRY_HASH }
  );
  state.registrySnapshot = snapshot;
  document.body.dataset.registry = snapshot.registryTrust;
  populateRegistrySelector(snapshot);
  const parameters = new URLSearchParams(location.hash.slice(1));
  const selection = requestedRegistryEntry(snapshot.registry.entries, parameters, DEFAULT_MODEL_SELECTION);
  const opened = await openRegisteredModel(selection, { useLocation: true });
  if (opened && namesUnknownModel(snapshot.registry.entries, parameters)) noteUnknownModel();
}

start().catch(displayError);
