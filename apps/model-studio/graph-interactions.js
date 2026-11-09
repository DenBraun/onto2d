function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function requireProjection(projection) {
  if (
    projection === null
    || typeof projection !== "object"
    || !Array.isArray(projection.nodes)
    || !Array.isArray(projection.edges)
  ) {
    throw new TypeError("projection must contain node and edge arrays.");
  }
  return projection;
}

function frozenIdentifiers(values) {
  return Object.freeze([...values].sort(compareText));
}

export function graphHighlight(projectionInput, target) {
  const projection = requireProjection(projectionInput);
  if (target === null || typeof target !== "object" || !["node", "edge", "edges"].includes(target.kind)) {
    throw new TypeError("target.kind must be node, edge or edges.");
  }
  const nodes = new Set(projection.nodes.map((node) => node.id));
  const edges = new Map(projection.edges.map((edge) => [edge.id, edge]));
  const primaryNodes = new Set();
  const connectedNodes = new Set();
  const primaryEdges = new Set();
  const connectedEdges = new Set();

  if (target.kind === "node") {
    if (!nodes.has(target.id)) throw new RangeError("The highlighted node is not in the projection.");
    primaryNodes.add(target.id);
    for (const edge of projection.edges) {
      if (edge.source !== target.id && edge.target !== target.id) continue;
      connectedEdges.add(edge.id);
      if (edge.source !== target.id) connectedNodes.add(edge.source);
      if (edge.target !== target.id) connectedNodes.add(edge.target);
    }
  } else if (target.kind === "edges") {
    // Several lines at one spot: all of them and their cards, with nothing else competing.
    for (const id of target.ids) {
      const edge = edges.get(id);
      if (!edge) throw new RangeError("The highlighted edge is not in the projection.");
      primaryEdges.add(edge.id);
      primaryNodes.add(edge.source);
      primaryNodes.add(edge.target);
    }
  } else {
    const selectedEdge = edges.get(target.id);
    if (!selectedEdge) throw new RangeError("The highlighted edge is not in the projection.");
    primaryEdges.add(selectedEdge.id);
    primaryNodes.add(selectedEdge.source);
    primaryNodes.add(selectedEdge.target);
    for (const edge of projection.edges) {
      if (
        edge.source !== selectedEdge.source
        && edge.target !== selectedEdge.source
        && edge.source !== selectedEdge.target
        && edge.target !== selectedEdge.target
      ) continue;
      if (edge.id !== selectedEdge.id) connectedEdges.add(edge.id);
      if (!primaryNodes.has(edge.source)) connectedNodes.add(edge.source);
      if (!primaryNodes.has(edge.target)) connectedNodes.add(edge.target);
    }
  }

  return Object.freeze({
    primaryNodes: frozenIdentifiers(primaryNodes),
    connectedNodes: frozenIdentifiers(connectedNodes),
    primaryEdges: frozenIdentifiers(primaryEdges),
    connectedEdges: frozenIdentifiers(connectedEdges)
  });
}
