/**
 * Layered drawing for Model Studio graphs.
 *
 * Every node keeps the column (layer) its caller assigns. Columns are ordered
 * to reduce crossings, aligned toward their neighbours and wrapped into lanes
 * when they exceed the row budget. Edges that span several columns pass
 * through reserved waypoints instead of crossing cards, and every edge enters
 * and leaves a card through its own port, so opposite directions between two
 * records never share a line.
 */

export const GRAPH_LAYOUT_DEFAULTS = Object.freeze({
  nodeWidth: 184,
  nodeHeight: 56,
  columnGap: 112,
  laneGap: 40,
  rowGap: 16,
  waypointHeight: 4,
  waypointGap: 8,
  portSpacing: 11,
  maxRows: 18,
  sweeps: 12,
  alignments: 8,
  padding: 48,
  flatBulge: 30
});

function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function round(value) {
  const rounded = Math.round(value * 10) / 10;
  return Object.is(rounded, -0) ? 0 : rounded;
}

function finite(value, fallback) {
  return Number.isFinite(value) ? value : fallback;
}

function push(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

/** Longest-path layers for a directed graph; cycles are broken deterministically. */
export function longestPathLayers(nodeIds, edges) {
  const ids = [...nodeIds].sort(compareText);
  const known = new Set(ids);
  const outgoing = new Map(ids.map((id) => [id, []]));
  for (const edge of [...edges].sort((left, right) => compareText(left.id, right.id))) {
    if (edge.source === edge.target || !known.has(edge.source) || !known.has(edge.target)) continue;
    outgoing.get(edge.source).push(edge.target);
  }
  const state = new Map();
  const incoming = new Map(ids.map((id) => [id, []]));
  for (const root of ids) {
    if (state.has(root)) continue;
    const stack = [[root, 0]];
    state.set(root, 1);
    while (stack.length > 0) {
      const frame = stack.at(-1);
      const [id, index] = frame;
      const next = outgoing.get(id)[index];
      if (next === undefined) {
        state.set(id, 2);
        stack.pop();
        continue;
      }
      frame[1] += 1;
      // An edge back into the active path closes a cycle and is not used for layering.
      if (state.get(next) === 1) continue;
      incoming.get(next).push(id);
      if (!state.has(next)) {
        state.set(next, 1);
        stack.push([next, 0]);
      }
    }
  }
  const layers = new Map();
  const pending = new Map(ids.map((id) => [id, incoming.get(id).length]));
  const children = new Map(ids.map((id) => [id, []]));
  for (const [id, parents] of incoming) for (const parent of parents) children.get(parent).push(id);
  const queue = ids.filter((id) => pending.get(id) === 0);
  for (const id of queue) layers.set(id, 0);
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const id = queue[cursor];
    for (const child of children.get(id)) {
      layers.set(child, Math.max(layers.get(child) ?? 0, layers.get(id) + 1));
      pending.set(child, pending.get(child) - 1);
      if (pending.get(child) === 0) queue.push(child);
    }
  }
  for (const id of ids) if (!layers.has(id)) layers.set(id, 0);
  // Sources move next to their nearest successor, so they do not stretch long edges across the drawing.
  for (let cursor = queue.length - 1; cursor >= 0; cursor -= 1) {
    const id = queue[cursor];
    if (incoming.get(id).length > 0 || children.get(id).length === 0) continue;
    layers.set(id, Math.min(...children.get(id).map((child) => layers.get(child))) - 1);
  }
  const lowest = Math.min(...layers.values());
  if (lowest !== 0) for (const [id, layer] of layers) layers.set(id, layer - lowest);
  return layers;
}

/**
 * Count crossings between two adjacent ordered columns. Sorted by their position
 * in the first column, two segments cross exactly when their positions in the
 * second column are inverted, so a Fenwick tree counts them in O(S log S).
 */
export function crossingCount(upperOrder, lowerOrder, links) {
  const upperIndex = new Map(upperOrder.map((item, index) => [item.id, index]));
  const lowerIndex = new Map(lowerOrder.map((item, index) => [item.id, index]));
  const segments = [];
  for (const item of upperOrder) {
    for (const neighbour of links.get(item.id) ?? []) {
      if (lowerIndex.has(neighbour.id)) segments.push([upperIndex.get(item.id), lowerIndex.get(neighbour.id)]);
    }
  }
  segments.sort((left, right) => left[0] - right[0] || left[1] - right[1]);
  const tree = new Array(lowerOrder.length + 1).fill(0);
  let count = 0;
  segments.forEach(([, position], index) => {
    let atMost = 0;
    for (let cursor = position + 1; cursor > 0; cursor -= cursor & -cursor) atMost += tree[cursor];
    count += index - atMost;
    for (let cursor = position + 1; cursor < tree.length; cursor += cursor & -cursor) tree[cursor] += 1;
  });
  return count;
}

/**
 * Minimum squared displacement toward desired centres while preserving order and spacing.
 * Pool-adjacent-violators over offsets removes the spacing from the ordering constraint.
 */
function resolveColumn(items, desired, spacing) {
  const offsets = [0];
  for (let index = 1; index < items.length; index += 1) offsets.push(offsets[index - 1] + spacing(items[index - 1], items[index]));
  const blocks = [];
  for (let index = 0; index < items.length; index += 1) {
    blocks.push({ start: index, end: index, total: desired[index] - offsets[index], count: 1 });
    while (blocks.length > 1) {
      const last = blocks.at(-1);
      const previous = blocks.at(-2);
      if (previous.total / previous.count <= last.total / last.count) break;
      previous.end = last.end;
      previous.total += last.total;
      previous.count += last.count;
      blocks.pop();
    }
  }
  const result = new Array(items.length);
  for (const block of blocks) {
    const mean = block.total / block.count;
    for (let index = block.start; index <= block.end; index += 1) result[index] = mean + offsets[index];
  }
  return result;
}

function cubicPoint(start, first, second, end, t) {
  const inverse = 1 - t;
  return {
    x: inverse ** 3 * start.x + 3 * inverse ** 2 * t * first.x + 3 * inverse * t ** 2 * second.x + t ** 3 * end.x,
    y: inverse ** 3 * start.y + 3 * inverse ** 2 * t * first.y + 3 * inverse * t ** 2 * second.y + t ** 3 * end.y
  };
}

/**
 * Lay out nodes in caller-assigned integer layers.
 *
 * @param {{nodes: Array<{id: string, layer: number, rank?: number, width?: number, height?: number}>,
 *   edges: Array<{id: string, source: string, target: string}>}} graph
 * @param {object} [options] Geometry overrides; `flatSide(layer)` chooses the side of same-column arcs.
 */
export function layoutLayeredGraph(graph, options = {}) {
  const settings = { ...GRAPH_LAYOUT_DEFAULTS, ...options };
  if (!graph || !Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) {
    throw new TypeError("A layered layout requires node and edge arrays.");
  }
  const nodes = new Map();
  for (const node of graph.nodes) {
    if (typeof node?.id !== "string" || node.id.length === 0 || nodes.has(node.id)) {
      throw new TypeError("Layered layout nodes require unique identifiers.");
    }
    if (!Number.isInteger(node.layer)) throw new TypeError(`Layered layout node ${node.id} requires an integer layer.`);
    nodes.set(node.id, {
      id: node.id,
      layer: node.layer,
      rank: finite(node.rank, 0),
      width: finite(node.width, settings.nodeWidth),
      height: finite(node.height, settings.nodeHeight),
      waypoint: false,
      x: 0,
      y: 0
    });
  }
  if (nodes.size === 0) throw new TypeError("A layered layout requires at least one node.");
  const edges = graph.edges
    .filter((edge) => nodes.has(edge?.source) && nodes.has(edge?.target) && typeof edge.id === "string")
    .map((edge) => ({ id: edge.id, source: edge.source, target: edge.target }))
    .sort((left, right) => compareText(left.id, right.id));

  const layerValues = [...new Set([...nodes.values()].map((node) => node.layer))].sort((left, right) => left - right);
  const firstLayer = layerValues[0];
  const lastLayer = layerValues.at(-1);
  const columns = new Map();
  for (let layer = firstLayer; layer <= lastLayer; layer += 1) columns.set(layer, []);
  for (const node of nodes.values()) columns.get(node.layer).push(node);

  // Waypoints reserve a slot in every column a long edge crosses.
  const upper = new Map();
  const lower = new Map();
  const link = (left, right) => {
    const [first, second] = left.layer < right.layer ? [left, right] : [right, left];
    push(lower, first.id, second);
    push(upper, second.id, first);
  };
  for (const edge of edges) {
    const source = nodes.get(edge.source);
    const target = nodes.get(edge.target);
    edge.chain = [source];
    if (edge.source === edge.target) edge.kind = "loop";
    else if (source.layer === target.layer) edge.kind = "flat";
    else {
      edge.kind = source.layer < target.layer ? "forward" : "backward";
      const step = source.layer < target.layer ? 1 : -1;
      for (let layer = source.layer + step; layer !== target.layer; layer += step) {
        const waypoint = {
          id: `${edge.id}\u0000${layer}`,
          layer,
          rank: (source.rank + target.rank) / 2,
          width: 0,
          height: settings.waypointHeight,
          waypoint: true,
          x: 0,
          y: 0
        };
        columns.get(layer).push(waypoint);
        edge.chain.push(waypoint);
      }
    }
    edge.chain.push(target);
    if (edge.kind === "forward" || edge.kind === "backward") {
      for (let index = 0; index + 1 < edge.chain.length; index += 1) link(edge.chain[index], edge.chain[index + 1]);
    }
  }

  // Crossing reduction by alternating barycentre sweeps; the best ordering is kept.
  let order = new Map([...columns].map(([layer, items]) => [layer, [...items].sort((left, right) => (
    left.rank - right.rank || compareText(left.id, right.id)
  ))]));
  const layers = [...order.keys()];
  const totalCrossings = (candidate) => layers.slice(0, -1)
    .reduce((sum, layer) => sum + crossingCount(candidate.get(layer), candidate.get(layer + 1), lower), 0);
  const reorder = (layer, reference, links) => {
    const items = order.get(layer);
    const referenceItems = order.get(reference);
    const referenceIndex = new Map(referenceItems.map((item, index) => [item.id, index]));
    const scale = (count) => (count > 1 ? count - 1 : 1);
    const keyed = items.map((item, index) => {
      const positions = (links.get(item.id) ?? []).map((neighbour) => referenceIndex.get(neighbour.id))
        .filter((value) => value !== undefined);
      const value = positions.length > 0
        ? positions.reduce((sum, value) => sum + value, 0) / positions.length / scale(referenceItems.length)
        : index / scale(items.length);
      return { item, index, value };
    });
    keyed.sort((left, right) => left.value - right.value || left.index - right.index);
    order.set(layer, keyed.map(({ item }) => item));
  };
  let best = new Map([...order].map(([layer, items]) => [layer, [...items]]));
  let bestCrossings = totalCrossings(order);
  for (let sweep = 0; sweep < settings.sweeps && bestCrossings > 0; sweep += 1) {
    if (sweep % 2 === 0) for (let index = 1; index < layers.length; index += 1) reorder(layers[index], layers[index - 1], upper);
    else for (let index = layers.length - 2; index >= 0; index -= 1) reorder(layers[index], layers[index + 1], lower);
    const crossings = totalCrossings(order);
    if (crossings < bestCrossings) {
      bestCrossings = crossings;
      best = new Map([...order].map(([layer, items]) => [layer, [...items]]));
    }
  }
  order = best;

  // Columns taller than the row budget wrap into adjacent lanes.
  const rowBudget = settings.maxRows * (settings.nodeHeight + settings.rowGap);
  const lanePlans = new Map();
  for (const layer of layers) {
    const lanes = [[]];
    let used = 0;
    for (const item of order.get(layer)) {
      const extent = item.height + (item.waypoint ? settings.waypointGap : settings.rowGap);
      if (!item.waypoint && used > 0 && used + extent > rowBudget) {
        lanes.push([]);
        used = 0;
      }
      lanes.at(-1).push(item);
      used += extent;
    }
    lanePlans.set(layer, lanes.filter((lane) => lane.length > 0));
  }

  let cursor = 0;
  const columnGuides = [];
  for (const layer of layers) {
    const lanes = lanePlans.get(layer);
    const start = cursor;
    lanes.forEach((lane, laneIndex) => {
      const width = Math.max(24, ...lane.filter((item) => !item.waypoint).map((item) => item.width));
      for (const item of lane) {
        item.x = cursor + width / 2;
        item.lane = laneIndex;
      }
      cursor += width + (laneIndex < lanes.length - 1 ? settings.laneGap : 0);
    });
    columnGuides.push({ layer, start, end: cursor, lanes: lanes.length });
    cursor += settings.columnGap;
  }

  const spacing = (above, below) => above.height / 2 + below.height / 2
    + (above.waypoint || below.waypoint ? settings.waypointGap : settings.rowGap);
  const stack = (lane) => {
    let y = 0;
    lane.forEach((item, index) => {
      if (index > 0) y += spacing(lane[index - 1], item);
      item.y = y;
    });
    const middle = y / 2;
    for (const item of lane) item.y -= middle;
  };
  for (const lanes of lanePlans.values()) for (const lane of lanes) stack(lane);

  // Align single-lane columns toward their neighbours; wrapped columns stay packed.
  const neighboursOf = (item) => [...(upper.get(item.id) ?? []), ...(lower.get(item.id) ?? [])];
  for (let pass = 0; pass < settings.alignments; pass += 1) {
    const sequence = pass % 2 === 0 ? layers : [...layers].reverse();
    for (const layer of sequence) {
      const lanes = lanePlans.get(layer);
      if (lanes.length !== 1) continue;
      const lane = lanes[0];
      const desired = lane.map((item) => {
        const neighbours = neighboursOf(item);
        if (neighbours.length === 0) return item.y;
        const mean = neighbours.reduce((sum, neighbour) => sum + neighbour.y, 0) / neighbours.length;
        return item.waypoint ? mean : (mean * 2 + item.y) / 3;
      });
      const resolved = resolveColumn(lane, desired, spacing);
      lane.forEach((item, index) => { item.y = resolved[index]; });
    }
  }

  // Ports: each endpoint gets its own slot on the side facing its next waypoint.
  const sides = new Map();
  const flatSide = typeof settings.flatSide === "function" ? settings.flatSide : () => "right";
  const addEndpoint = (node, side, endpoint) => push(sides, `${node.id}\u0000${side}`, endpoint);
  for (const edge of edges) {
    const source = nodes.get(edge.source);
    const target = nodes.get(edge.target);
    if (edge.kind === "loop") continue;
    const sameLane = Math.abs(source.x - target.x) < 0.5;
    if (edge.kind === "flat" && sameLane) continue;
    const next = edge.chain[1];
    const previous = edge.chain.at(-2);
    edge.sourceSide = next.x > source.x ? "right" : "left";
    edge.targetSide = previous.x < target.x ? "left" : "right";
    if (edge.kind === "flat") edge.kind = "lane";
    addEndpoint(source, edge.sourceSide, { edge, end: "source", toward: next });
    addEndpoint(target, edge.targetSide, { edge, end: "target", toward: previous });
  }
  // Same-column arcs take the outer side unless only the other side is free of column traffic.
  const throughLoad = new Map([...sides].map(([key, endpoints]) => [key, endpoints.length]));
  for (const edge of edges) {
    if (edge.kind !== "flat") continue;
    const source = nodes.get(edge.source);
    const target = nodes.get(edge.target);
    const preferred = flatSide(source.layer);
    const other = preferred === "left" ? "right" : "left";
    const load = (side) => (throughLoad.get(`${source.id}\u0000${side}`) ?? 0) + (throughLoad.get(`${target.id}\u0000${side}`) ?? 0);
    const side = load(preferred) > 0 && load(other) === 0 ? other : preferred;
    edge.sourceSide = side;
    edge.targetSide = side;
    addEndpoint(source, side, { edge, end: "source", toward: target, flat: true });
    addEndpoint(target, side, { edge, end: "target", toward: source, flat: true });
  }
  const ports = new Map();
  for (const [key, endpoints] of sides) {
    const node = nodes.get(key.split("\u0000")[0]);
    const sortKey = ({ toward, flat }) => {
      const offset = toward.y - node.y;
      // Same-column arcs nest: the farther arc takes the outer port.
      if (flat) return offset >= 0 ? -1e6 - offset : 1e6 - offset;
      return offset;
    };
    endpoints.sort((left, right) => sortKey(left) - sortKey(right) || compareText(left.edge.id, right.edge.id)
      || compareText(left.end, right.end));
    const count = endpoints.length;
    const step = count > 1 ? Math.min(settings.portSpacing, (node.height - 14) / (count - 1)) : 0;
    endpoints.forEach((endpoint, index) => {
      const x = node.x + (endpoint.edge[`${endpoint.end}Side`] === "right" ? node.width / 2 : -node.width / 2);
      ports.set(`${endpoint.edge.id}\u0000${endpoint.end}`, { x, y: node.y + (index - (count - 1) / 2) * step, index, count });
    });
  }

  const flatRanks = new Map();
  for (const edge of edges.filter((candidate) => candidate.kind === "flat")) {
    const key = [edge.source, edge.target].sort(compareText).join("\u0000");
    flatRanks.set(edge.id, (flatRanks.get(key) ?? 0));
    flatRanks.set(key, (flatRanks.get(key) ?? 0) + 1);
  }

  const routed = edges.map((edge) => {
    const source = nodes.get(edge.source);
    const target = nodes.get(edge.target);
    if (edge.kind === "loop") {
      const x = source.x + source.width / 2 - 22;
      const y = source.y - source.height / 2;
      const start = { x: x - 12, y };
      const end = { x: x + 12, y };
      const first = { x: x - 18, y: y - 34 };
      const second = { x: x + 18, y: y - 34 };
      return { edge, start, end, segments: [[start, first, second, end]] };
    }
    const start = ports.get(`${edge.id}\u0000source`);
    const end = ports.get(`${edge.id}\u0000target`);
    if (edge.kind === "flat") {
      const direction = edge.sourceSide === "right" ? 1 : -1;
      const reach = Math.abs(end.y - start.y);
      const bulge = settings.flatBulge + Math.min(90, reach * 0.22) + flatRanks.get(edge.id) * 10
        + Math.max(start.index, end.index) * 2;
      return {
        edge, start, end,
        segments: [[start, { x: start.x + direction * bulge, y: start.y }, { x: end.x + direction * bulge, y: end.y }, end]]
      };
    }
    const points = [start, ...edge.chain.slice(1, -1).map((waypoint) => ({ x: waypoint.x, y: waypoint.y })), end];
    const segments = [];
    for (let index = 0; index + 1 < points.length; index += 1) {
      const from = points[index];
      const to = points[index + 1];
      const handle = (to.x - from.x) / 2;
      segments.push([from, { x: from.x + handle, y: from.y }, { x: to.x - handle, y: to.y }, to]);
    }
    return { edge, start, end, segments };
  });

  // Normalize to a padded positive canvas, including arc and loop extents.
  const realNodes = [...nodes.values()];
  let minX = Math.min(...realNodes.map((node) => node.x - node.width / 2));
  let maxX = Math.max(...realNodes.map((node) => node.x + node.width / 2));
  let minY = Math.min(...realNodes.map((node) => node.y - node.height / 2));
  let maxY = Math.max(...realNodes.map((node) => node.y + node.height / 2));
  for (const route of routed) {
    for (const segment of route.segments) {
      for (const point of segment) {
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        minY = Math.min(minY, point.y);
        maxY = Math.max(maxY, point.y);
      }
    }
  }
  const shiftX = settings.padding - minX;
  const shiftY = settings.padding - minY;
  const move = (point) => ({ x: round(point.x + shiftX), y: round(point.y + shiftY) });
  const columnsOut = columnGuides.map(({ layer, start, end, lanes }) => ({
    layer, lanes, left: round(start + shiftX), right: round(end + shiftX), x: round((start + end) / 2 + shiftX)
  }));
  const nodesOut = realNodes.map((node) => ({
    id: node.id,
    layer: node.layer,
    lane: node.lane ?? 0,
    x: round(node.x + shiftX),
    y: round(node.y + shiftY),
    width: node.width,
    height: node.height
  })).sort((left, right) => compareText(left.id, right.id));
  const edgesOut = routed.map(({ edge, segments }) => {
    const moved = segments.map((segment) => segment.map(move));
    const path = [`M ${moved[0][0].x} ${moved[0][0].y}`,
      ...moved.map(([, first, second, end]) => `C ${first.x} ${first.y} ${second.x} ${second.y} ${end.x} ${end.y}`)].join(" ");
    const middle = moved[Math.floor((moved.length - 1) / 2)];
    const midpoint = moved.length % 2 === 1
      ? cubicPoint(...middle, 0.5)
      : middle[3];
    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      kind: edge.kind === "lane" ? (nodes.get(edge.source).x < nodes.get(edge.target).x ? "forward" : "backward") : edge.kind,
      path,
      start: moved[0][0],
      end: moved.at(-1)[3],
      midpoint: { x: round(midpoint.x), y: round(midpoint.y) }
    };
  });
  return Object.freeze({
    width: round(maxX - minX + settings.padding * 2),
    height: round(maxY - minY + settings.padding * 2),
    nodes: nodesOut,
    edges: edgesOut,
    columns: columnsOut,
    crossings: bestCrossings
  });
}

/**
 * Columns for a directed neighbourhood: causes to the left of the focus,
 * dependents to the right, each at its shortest distance. A record that is both
 * a cause and a dependent at the same distance goes to the side `preferredSide`
 * chooses (the Studio asks which of the two causes is in the arising role); the
 * view package's neighbourhood layout alternates such ties instead.
 */
export function neighbourhoodLayers(projection, preferredSide = () => 1) {
  const layers = new Map();
  for (const node of projection.nodes) {
    if (node.relation === "focus") layers.set(node.id, 0);
    else if (node.relation === "parent") layers.set(node.id, -node.upstreamDistance);
    else if (node.relation === "child") layers.set(node.id, node.downstreamDistance);
    else if (node.upstreamDistance < node.downstreamDistance) layers.set(node.id, -node.upstreamDistance);
    else if (node.downstreamDistance < node.upstreamDistance) layers.set(node.id, node.downstreamDistance);
    else layers.set(node.id, preferredSide(node) < 0 ? -node.upstreamDistance : node.downstreamDistance);
  }
  return layers;
}
