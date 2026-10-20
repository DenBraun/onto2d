const PERSPECTIVES = new Set(["system", "evidence", "hypotheses"]);

function requireValue(condition, message) {
  if (!condition) throw new TypeError(`Invalid interaction views: ${message}`);
}

function identifiers(values, allowed, subject) {
  requireValue(Array.isArray(values), `${subject} must be an array`);
  const seen = new Set();
  for (const id of values) {
    requireValue(typeof id === "string" && allowed.has(id) && !seen.has(id), `${subject} contains an unknown or duplicate identifier`);
    seen.add(id);
  }
  return [...seen];
}

/** Keep only explicit release memberships; record kinds never imply a perspective. */
export function interactionViewCatalog(value, { nodes, edges }) {
  if (value === undefined || value === null) return null;
  requireValue(value && typeof value === "object" && Array.isArray(value.cases)
    && Array.isArray(value.perspectives), "cases and perspectives are required");
  const nodeIds = new Set(nodes.map((node) => node.id));
  const edgeIds = new Set(edges.map((edge) => edge.id));
  const caseIds = new Set();
  const cases = value.cases.map((record) => {
    requireValue(record && typeof record.id === "string" && !caseIds.has(record.id)
      && typeof record.title === "string" && record.title.length > 0, "case identity is missing or duplicated");
    caseIds.add(record.id);
    const entityIds = identifiers(record.entityIds, nodeIds, "case entities");
    requireValue(entityIds.length > 0 && entityIds.includes(record.anchorEntityId), "case anchor is not a member");
    return { id: record.id, title: record.title, entityIds, anchorEntityId: record.anchorEntityId };
  });
  const perspectiveIds = new Set();
  const perspectives = value.perspectives.map((record) => {
    requireValue(record && PERSPECTIVES.has(record.id) && !perspectiveIds.has(record.id)
      && typeof record.label === "string" && record.label.length > 0
      && typeof record.boundary === "string" && record.boundary.length > 0, "perspective identity or boundary is invalid");
    perspectiveIds.add(record.id);
    const members = identifiers(record.nodeIds, nodeIds, "perspective nodes");
    const relations = identifiers(record.edgeIds, edgeIds, "perspective edges");
    const memberIds = new Set(members);
    const relationIds = new Set(relations);
    requireValue(edges.every((edge) => !relationIds.has(edge.id)
      || (memberIds.has(edge.source) && memberIds.has(edge.target))), "perspective edge escapes its nodes");
    return { id: record.id, label: record.label, nodeIds: members, edgeIds: relations, boundary: record.boundary };
  });
  return { cases, perspectives };
}

/** Select existing records and relations without changing their meanings. */
export function selectInteractionGraph(input, views, { perspectiveId = "", caseId = "", focusId } = {}) {
  const perspective = perspectiveId === "" ? null : views?.perspectives.find((record) => record.id === perspectiveId);
  const selectedCase = caseId === "" ? null : views?.cases.find((record) => record.id === caseId);
  requireValue(perspectiveId === "" || perspective, "unknown perspective");
  requireValue(caseId === "" || selectedCase, "unknown case");
  const perspectiveNodes = perspective ? new Set(perspective.nodeIds) : null;
  const perspectiveEdges = perspective ? new Set(perspective.edgeIds) : null;
  const caseNodes = selectedCase ? new Set(selectedCase.entityIds) : null;
  const members = input.nodes.filter((node) => (!perspectiveNodes || perspectiveNodes.has(node.id))
    && (!caseNodes || caseNodes.has(node.id)));
  const memberIds = new Set(members.map((node) => node.id));
  const edges = input.edges.filter((edge) => (!perspectiveEdges || perspectiveEdges.has(edge.id))
    && memberIds.has(edge.source) && memberIds.has(edge.target));
  const nodes = [...members];
  const focusOutsideView = typeof focusId === "string" && !memberIds.has(focusId);
  if (focusOutsideView) {
    const focus = input.nodes.find((node) => node.id === focusId);
    requireValue(focus, "focus is absent from the release");
    nodes.push(focus);
  }
  return {
    input: { identity: input.identity, nodes, edges },
    memberNodeIds: members.map((node) => node.id),
    focusOutsideView,
    perspective,
    selectedCase
  };
}

/** A case overview includes isolates. Their layout position asserts no relation. */
export function interactionCaseOverview(presentation, selection, focusId, { maxNodes = 48, maxEdges = 180 } = {}) {
  const local = presentation.neighborhood({ focusId, depth: 1, direction: "both", maxNodes, maxEdges });
  const localNodes = new Map(local.nodes.map((node) => [node.id, node]));
  const ordered = [focusId, ...selection.input.nodes.map((node) => node.id).filter((id) => id !== focusId)];
  const ids = ordered.slice(0, maxNodes);
  const visible = new Set(ids);
  const allEdges = selection.input.edges.filter((edge) => visible.has(edge.source) && visible.has(edge.target));
  const fields = ["id", "source", "target", "relationLayer", "role", "assertion", "dependencyType", "necessity", "weight"];
  const edges = allEdges.slice(0, maxEdges).map((edge) => Object.fromEntries(
    fields.filter((field) => Object.hasOwn(edge, field)).map((field) => [field, edge[field]])
  ));
  const incident = new Set(edges.flatMap((edge) => [edge.source, edge.target]));
  const nodes = ids.map((id) => {
    const node = localNodes.get(id);
    if (node) return { ...node, caseContext: true, caseIsolate: !incident.has(id) };
    return {
      ...presentation.inspect(id).node,
      // These coordinates place a context card in the existing layout. The
      // renderer labels it as a case record, never as a discovered descendant.
      relation: "child", distance: 1, upstreamDistance: null, downstreamDistance: 1,
      caseContext: true, caseIsolate: !incident.has(id)
    };
  });
  const hiddenNodeCount = ordered.length - nodes.length;
  const hiddenEdgeCount = selection.input.edges.length - edges.length;
  return {
    ...local, nodes, edges,
    counts: { discoveredNodeCount: ordered.length, availableEdgeCount: selection.input.edges.length,
      displayedNodeCount: nodes.length, displayedEdgeCount: edges.length,
      hiddenNodeCount, hiddenEdgeCount },
    truncated: hiddenNodeCount > 0 || hiddenEdgeCount > 0
  };
}

/** Neutral cards retain their size; excess rows extend the scrollable canvas. */
export function layoutIsolatedCaseCards(projection, { width, height, padding = 24, gap = 16 } = {}) {
  requireValue(projection.edges.length === 0 && projection.nodes.length > 0, "an isolated-card layout requires records without edges");
  requireValue(Number.isFinite(width) && Number.isFinite(height) && width >= 320 && height >= 240,
    "an isolated-card layout requires a usable viewport");
  const nodeWidth = Math.min(208, width - padding * 2);
  const nodeHeight = 72;
  const columns = Math.min(projection.nodes.length, Math.max(1,
    Math.floor((width - padding * 2 + gap) / (nodeWidth + gap))));
  const rows = Math.ceil(projection.nodes.length / columns);
  const gridWidth = columns * nodeWidth + (columns - 1) * gap;
  const gridHeight = rows * nodeHeight + (rows - 1) * gap;
  const contentHeight = Math.max(height, gridHeight + padding * 2 + 24);
  const firstX = (width - gridWidth + nodeWidth) / 2;
  const firstY = Math.max(padding + 24, (contentHeight - gridHeight) / 2) + nodeHeight / 2;
  return {
    width, height: contentHeight, nodeWidth, nodeHeight, edges: [],
    nodes: projection.nodes.map((node, index) => ({
      ...node, x: firstX + (index % columns) * (nodeWidth + gap),
      y: firstY + Math.floor(index / columns) * (nodeHeight + gap)
    }))
  };
}
