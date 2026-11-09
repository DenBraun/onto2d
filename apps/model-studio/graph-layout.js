/**
 * Layered drawing for Model Studio graphs.
 *
 * Every node keeps the column (layer) its caller assigns. Columns are ordered
 * to reduce crossings, aligned toward their neighbours and wrapped into lanes
 * when they exceed the row budget. Every edge enters and leaves a card through
 * its own port, so opposite directions between two records never share a line.
 *
 * Lines stay off the cards they do not belong to. An edge that spans several
 * columns crosses each one on the straight line through a reserved waypoint. A
 * line that would still pass under a card of a wrapped column keeps to free
 * heights in the lanes it crosses, between its cards and waypoints or beyond
 * them; the cards themselves never move for a line. Same-column arcs nest on
 * tracks in the free gap beside their lane, or pass beyond a short lane in the
 * way, so that each stays readable. Each edge reports the angle at which its
 * arrowhead meets the card.
 */

const GRAPH_LAYOUT_DEFAULTS = Object.freeze({
  nodeWidth: 184,
  nodeHeight: 56,
  columnGap: 112,
  laneGap: 72,
  rowGap: 16,
  waypointHeight: 4,
  waypointGap: 8,
  portSpacing: 11,
  maxRows: 18,
  sweeps: 12,
  alignments: 8,
  padding: 48,
  flatBulge: 30,
  arcPitch: 8,
  arcInset: 8,
  arcMargin: 8,
  arcTurn: 1.2,
  arcTightest: 3,
  maxArcReach: 150,
  turnPitch: 4,
  turnMargin: 0.15,
  turnArrow: 0.35,
  entryLean: 0.3,
  maxEntryLean: 1.6,
  arrowLength: 9,
  slotMargin: 3,
  slotPitch: 3.3,
  sharedRuns: false
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

function distance(left, right) {
  return Math.hypot(left.x - right.x, left.y - right.y);
}

/**
 * Stop a cubic segment one arrowhead short of its end. The arrowhead then spans
 * the last stretch of the curve, so it points along the way the edge really arrives.
 */
function trimForArrow(segment, length) {
  const [start, first, second, end] = segment;
  let low = 0;
  let high = 1;
  for (let step = 0; step < 24; step += 1) {
    const middle = (low + high) / 2;
    if (distance(cubicPoint(start, first, second, end, middle), end) > length) low = middle;
    else high = middle;
  }
  const mix = (left, right) => ({ x: left.x + (right.x - left.x) * low, y: left.y + (right.y - left.y) * low });
  const a = mix(start, first);
  const b = mix(first, second);
  const c = mix(second, end);
  const d = mix(a, b);
  const e = mix(b, c);
  const base = mix(d, e);
  return { segment: [start, a, d, base], base };
}

/**
 * Free heights in one lane as ascending slots, around its cards and the waypoint runs already
 * crossing it. A narrow stretch holds as many lines as `pitch` allows, `margin` clear of a card
 * and `pitch` clear of a run. In a tall stretch, and above and below the lane, lines keep
 * `outerPitch` apart and from what they pass, as waypoints do. Above, slots stop at `ceiling`;
 * below, they go as far as `wants` reach, with room for every line.
 */
function laneSlots(items, wants, { margin, pitch, outerPitch, ceiling }) {
  const edge = (item) => (item.waypoint
    ? { top: item.y, bottom: item.y, clear: pitch }
    : { top: item.y - item.height / 2, bottom: item.y + item.height / 2, clear: margin });
  const stops = items.map(edge);
  const top = stops[0].top - outerPitch;
  const bottom = stops.at(-1).bottom + outerPitch;
  const slots = [];
  const above = Math.min(Math.ceil(Math.max(0, top - Math.min(...wants)) / outerPitch) + wants.length, Math.floor((top - ceiling) / outerPitch));
  for (let index = above; index >= 0; index -= 1) slots.push({ y: top - index * outerPitch, gap: null });
  for (let index = 0; index + 1 < stops.length; index += 1) {
    const low = stops[index].bottom;
    const high = stops[index + 1].top;
    if (high - low > 4 * outerPitch) {
      for (let y = low + outerPitch; y <= high - outerPitch; y += outerPitch) slots.push({ y, gap: null });
    } else if (high - low >= stops[index].clear + stops[index + 1].clear) {
      const gap = { low: low + stops[index].clear, high: high - stops[index + 1].clear };
      const count = Math.floor((gap.high - gap.low) / pitch) + 1;
      for (let slot = 0; slot < count; slot += 1) slots.push({ y: gap.low + slot * pitch, gap });
    }
  }
  const below = Math.ceil(Math.max(0, Math.max(...wants) - bottom) / outerPitch) + wants.length;
  for (let index = 0; index <= below; index += 1) slots.push({ y: bottom + index * outerPitch, gap: null });
  return slots;
}

/**
 * Give lines, ordered by the height each wants, ascending slots with the smallest
 * squared displacement. A line may stay on the slot of the line before it when
 * `groups` puts them together. There must be at least one slot for every line.
 */
function placeLines(wants, slots, groups = null) {
  const count = slots.length;
  const shares = (line) => groups !== null && line > 0 && groups[line] === groups[line - 1];
  const chosen = new Int32Array(wants.length * count);
  let previous = new Float64Array(count);
  let current = new Float64Array(count);
  wants.forEach((want, line) => {
    let best = Infinity;
    let bestSlot = -1;
    for (let slot = 0; slot < count; slot += 1) {
      const reach = line === 0 ? 0 : shares(line) ? previous[slot] : slot > 0 ? previous[slot - 1] : Infinity;
      const cost = reach + (want - slots[slot].y) ** 2;
      if (cost < best) {
        best = cost;
        bestSlot = slot;
      }
      current[slot] = best;
      chosen[line * count + slot] = bestSlot;
    }
    [previous, current] = [current, previous];
  });
  const placed = new Array(wants.length);
  for (let line = wants.length - 1, slot = count - 1; line >= 0; line -= 1) {
    const at = chosen[line * count + slot];
    placed[line] = slots[at];
    slot = shares(line) ? at : at - 1;
  }
  return placed;
}

/** For each line in a lane, the larger group it can share with: lines to its target or lines from its source. */
function runGroups(edges) {
  const sizes = new Map();
  const count = (key) => sizes.set(key, (sizes.get(key) ?? 0) + 1);
  for (const edge of edges) {
    count(`to\u0000${edge.target}`);
    count(`from\u0000${edge.source}`);
  }
  return edges.map(({ source, target }) => (
    sizes.get(`to\u0000${target}`) >= sizes.get(`from\u0000${source}`) ? `to\u0000${target}` : `from\u0000${source}`
  ));
}

/**
 * Where steep curves across one gap turn, as x positions. Of curves falling or rising the same way, the
 * one that starts higher (falling) or lower (rising) turns further right, so that they do not cross.
 * Each curve keeps to its own [low, high] range; turns stay `spacing` apart as far as these ranges allow.
 *
 * @param {Array<{start: number, end: number, low: number, high: number}>} curves Heights at the left and right of the gap.
 * @returns {number[]} The turn of each curve, in the order given.
 */
export function spreadTurns(curves, spacing) {
  const order = curves.map((curve, index) => ({ ...curve, index })).sort((left, right) => {
    const fallingLeft = left.end > left.start;
    const fallingRight = right.end > right.start;
    if (fallingLeft !== fallingRight) return fallingLeft ? -1 : 1;
    return (fallingLeft ? left.start - right.start : right.start - left.start) || left.index - right.index;
  });
  const lowest = Math.min(...order.map((curve) => curve.low));
  const highest = Math.max(...order.map((curve) => curve.high));
  const step = order.length > 1 ? Math.min(spacing, (highest - lowest) / (order.length - 1)) : 0;
  let turn = (lowest + highest + step * (order.length - 1)) / 2;
  for (const curve of order) {
    curve.turn = Math.min(turn, curve.high);
    turn = curve.turn - step;
  }
  turn = -Infinity;
  for (const curve of [...order].reverse()) {
    curve.turn = Math.min(curve.high, Math.max(curve.turn, curve.low, turn));
    turn = curve.turn + step;
  }
  const turns = new Array(curves.length);
  for (const curve of order) turns[curve.index] = curve.turn;
  return turns;
}

/**
 * Tracks for the same-column arcs beside one lane, as distances from the side of the lane.
 * An arc lies outside every arc it contains, so nested arcs never cross, and arcs sharing a height
 * keep to different tracks. Arcs that overlap one another keep the reach they want while it fits
 * their room. When it does not, their tracks spread evenly over the tightest room among them, and
 * an arc with nothing tight outside it spreads further. When the room holds too few tracks to tell
 * lines apart, an arc with a free way `around` the cards in its way takes a track beyond them.
 *
 * @param {Array<{id: string, low: number, high: number, wanted: number, room: number,
 *   around?: {inset: number, room: number}}>} arcs
 * @returns {Map<string, {reach: number, around: boolean}>} The track of each arc by id.
 */
export function arcTracks(arcs, { pitch = 8, inset = 8, roomy = 22.5, tightest = 3, clearance = 2 } = {}) {
  const overlap = (left, right) => left.low < right.high + clearance && right.low < left.high + clearance;
  const levelAmong = (arc, placed) => {
    const beside = placed.filter((other) => overlap(other, arc));
    let level = 0;
    for (const other of beside) if (other.low >= arc.low && other.high <= arc.high) level = Math.max(level, other.level + 1);
    while (beside.some((other) => other.level === level)) level += 1;
    return level;
  };
  const near = [];
  const beyond = [];
  for (const arc of [...arcs].sort((left, right) => (left.high - left.low) - (right.high - right.low) || compareText(left.id, right.id))) {
    const level = levelAmong(arc, near);
    if (arc.around && level * tightest > arc.room - inset) {
      const { inset: start, room } = arc.around;
      beyond.push({ id: arc.id, low: arc.low, high: arc.high, level: levelAmong(arc, beyond), inset: start, room, reach: start, depth: 0, around: true });
    } else {
      near.push({ id: arc.id, low: arc.low, high: arc.high, level, inset: Math.min(inset, arc.room), room: arc.room, reach: arc.wanted, depth: 0, around: false });
    }
  }
  const tracks = new Map();
  for (const band of [near, beyond]) {
    const runs = [];
    let bottom = -Infinity;
    for (const arc of [...band].sort((left, right) => left.low - right.low)) {
      if (arc.low >= bottom + clearance) runs.push([]);
      runs.at(-1).push(arc);
      bottom = Math.max(bottom, arc.high);
    }
    for (const run of runs) {
      run.sort((left, right) => left.level - right.level);
      for (const arc of run) {
        for (const other of run) {
          if (other.level >= arc.level) break;
          if (!overlap(other, arc)) continue;
          arc.depth = Math.max(arc.depth, other.depth + 1);
          arc.reach = Math.max(arc.reach, other.reach + pitch);
        }
      }
      if (run.some((arc) => arc.reach > arc.room)) {
        const step = Math.min(pitch, ...run.filter((arc) => arc.depth > 0).map((arc) => Math.max(0, arc.room - arc.inset) / arc.depth));
        // With few tracks the band moves out into the gap instead of hugging the cards.
        const lift = Math.max(0, Math.min(roomy - inset, ...run.map((arc) => arc.room - arc.inset - arc.depth * step)));
        const base = (arc) => arc.inset + (arc.around ? 0 : lift);
        for (const arc of run) arc.reach = Math.min(arc.room, base(arc) + arc.depth * step);
        for (const arc of [...run].reverse()) {
          let free = Math.min(arc.room, base(arc) + arc.depth * pitch);
          for (const other of run) if (other.level > arc.level && overlap(other, arc)) free = Math.min(free, other.reach - step);
          arc.reach = Math.max(arc.reach, free);
        }
      }
      for (const arc of run) tracks.set(arc.id, { reach: arc.reach, around: arc.around });
    }
  }
  return tracks;
}

/**
 * Lay out nodes in caller-assigned integer layers.
 *
 * @param {{nodes: Array<{id: string, layer: number, rank?: number, width?: number, height?: number}>,
 *   edges: Array<{id: string, source: string, target: string}>}} graph
 * @param {object} [options] Geometry overrides; `flatSide(layer)` chooses the side of same-column arcs,
 *   and `sharedRuns` lets lines of one card share a height across a wrapped lane when their style is uniform.
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
        item.half = width / 2;
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
      // A same-column arc leaves on the side of the card it heads for, the farther arc nearest the middle, so
      // arcs of one card never cross one another.
      if (flat) return offset < 0 ? -1e6 - offset : 1e6 - offset;
      return offset;
    };
    // Two arcs between the same cards nest as well: the order flips at the lower card.
    const tieOrder = ({ toward, flat }) => (flat && toward.y < node.y ? -1 : 1);
    endpoints.sort((left, right) => sortKey(left) - sortKey(right) || tieOrder(left) * compareText(left.edge.id, right.edge.id)
      || compareText(left.end, right.end));
    const count = endpoints.length;
    const step = count > 1 ? Math.min(settings.portSpacing, (node.height - 14) / (count - 1)) : 0;
    endpoints.forEach((endpoint, index) => {
      const x = node.x + (endpoint.edge[`${endpoint.end}Side`] === "right" ? node.width / 2 : -node.width / 2);
      ports.set(`${endpoint.edge.id}\u0000${endpoint.end}`, { x, y: node.y + (index - (count - 1) / 2) * step, index, count });
    });
  }

  // The arcs beside one lane share its free gap: each takes a track, as far out as the cards beside it allow.
  const cards = [...nodes.values()].map((node) => ({ node, top: node.y - node.height / 2, bottom: node.y + node.height / 2 }));
  const beside = (node, direction) => `${node.x + direction * node.half}\u0000${direction}`;
  const families = new Map();
  for (const edge of edges) {
    if (edge.kind !== "flat") continue;
    const source = nodes.get(edge.source);
    const direction = edge.sourceSide === "right" ? 1 : -1;
    const wall = source.x + direction * source.half;
    const heights = [ports.get(`${edge.id}\u0000source`).y, ports.get(`${edge.id}\u0000target`).y];
    const low = Math.min(...heights);
    const high = Math.max(...heights);
    const margin = settings.arcMargin;
    const inWay = cards.filter(({ top, bottom }) => bottom + margin / 2 > low && top - margin / 2 < high)
      .map((card) => ({ ...card, away: (card.node.x - direction * card.node.width / 2 - wall) * direction }))
      .filter(({ away }) => away > 0)
      .sort((left, right) => left.away - right.away);
    const arc = { id: edge.id, low, high, room: settings.maxArcReach, wanted: 0.75 * (settings.flatBulge + Math.min(90, (high - low) * 0.22)) };
    if (inWay.length > 0) {
      arc.room = Math.max(settings.arcInset / 2, inWay[0].away - margin);
      // The cards of the nearest lane can be passed beyond them when both ends of the arc lie clear of them.
      const lane = inWay.filter(({ node }) => node.x === inWay[0].node.x);
      const above = Math.min(...lane.map((card) => card.top)) - margin - low;
      const below = high - Math.max(...lane.map((card) => card.bottom)) - margin;
      if (above >= 2 * margin && below >= 2 * margin) {
        const next = inWay.find(({ node }) => node.x !== inWay[0].node.x);
        const inset = Math.max(...lane.map((card) => card.away + card.node.width)) + margin;
        arc.around = {
          inset, room: next ? next.away - margin : inset + settings.maxArcReach, above, below,
          family: beside(lane[0].node, direction), distance: Math.abs(lane[0].node.x + direction * lane[0].node.half - wall)
        };
      }
    }
    if (!families.has(beside(source, direction))) families.set(beside(source, direction), { order: wall * direction, arcs: [] });
    families.get(beside(source, direction)).arcs.push(arc);
  }
  // Lanes furthest out come first: an arc passing beyond a lane keeps outside the arcs of that lane.
  const arcTrack = new Map();
  const outermost = new Map();
  for (const [key, { arcs }] of [...families].sort(([, left], [, right]) => right.order - left.order)) {
    for (const arc of arcs) {
      if (!arc.around) continue;
      const taken = outermost.get(arc.around.family);
      if (taken !== undefined) arc.around.inset = Math.max(arc.around.inset, arc.around.distance + taken + settings.arcPitch);
      if (arc.around.room - arc.around.inset < 3 * settings.arcTightest) delete arc.around;
    }
    const tracks = arcTracks(arcs, { pitch: settings.arcPitch, inset: settings.arcInset, roomy: 0.75 * settings.flatBulge, tightest: settings.arcTightest });
    for (const arc of arcs) {
      const { reach, around } = tracks.get(arc.id);
      arcTrack.set(arc.id, { reach, clear: around ? arc.around : null });
      outermost.set(key, Math.max(outermost.get(key) ?? 0, reach));
    }
  }

  // Curve handles lean toward the far end, so an edge meets a card at the angle it comes from.
  const clampLean = (value, reach) => Math.max(-reach * settings.maxEntryLean, Math.min(reach * settings.maxEntryLean, value));
  const segmentBetween = (from, to, leanFrom, leanTo, turn = (from.x + to.x) / 2) => {
    const lean = (reach) => clampLean((to.y - from.y) * settings.entryLean, Math.abs(reach));
    return [
      from,
      { x: turn, y: from.y + (leanFrom ? lean(turn - from.x) : 0) },
      { x: turn, y: to.y - (leanTo ? lean(to.x - turn) : 0) },
      to
    ];
  };
  // A line that would pass under a card of a wrapped column takes free heights in the lanes it crosses.
  const wrappedLanes = layers.flatMap((layer) => (lanePlans.get(layer).length > 1 ? lanePlans.get(layer) : []))
    .map((lane) => ({ left: lane[0].x - lane[0].half, right: lane[0].x + lane[0].half, items: lane, cards: lane.filter((item) => !item.waypoint), passes: [] }))
    .filter((lane) => lane.cards.length > 0);
  const passesUnderCard = (curve, lanes) => {
    const margin = settings.slotMargin;
    const steps = Math.max(4, Math.ceil((distance(curve[0], curve[1]) + distance(curve[1], curve[2]) + distance(curve[2], curve[3])) / 4));
    for (let step = 0; step <= steps; step += 1) {
      const { x, y } = cubicPoint(...curve, step / steps);
      for (const lane of lanes) {
        if (x < lane.left - margin || x > lane.right + margin) continue;
        if (lane.cards.some((card) => Math.abs(x - card.x) < card.width / 2 + margin && Math.abs(y - card.y) < card.height / 2 + margin)) return true;
      }
    }
    return false;
  };
  // A card narrower than its lane is reached straight from the lane's edge: a curve would cut the corner of a wider card above or below it.
  const laneEdge = (port, card) => (card && card.half > card.width / 2 + 0.01 ? [{ x: card.x + Math.sign(port.x - card.x) * card.half, y: port.y }] : []);
  // A line between two cards is a chain of legs: from a card or waypoint to the next one.
  const legsOf = new Map();
  for (const edge of edges) {
    if (edge.kind === "loop" || edge.kind === "flat") continue;
    const dir = edge.kind === "forward" ? 1 : -1;
    const points = [
      ports.get(`${edge.id}\u0000source`),
      ...edge.chain.slice(1, -1).flatMap((waypoint) => [
        { x: waypoint.x - dir * waypoint.half, y: waypoint.y },
        { x: waypoint.x + dir * waypoint.half, y: waypoint.y }
      ]),
      ports.get(`${edge.id}\u0000target`)
    ];
    const legs = points.slice(0, -1).map((from, index) => ({
      from, to: points[index + 1], first: index === 0, last: index + 2 === points.length, passes: [],
      fromEdge: laneEdge(from, index === 0 ? nodes.get(edge.source) : null), toEdge: laneEdge(points[index + 1], index + 2 === points.length ? nodes.get(edge.target) : null)
    }));
    for (const leg of legs) {
      const { from, to } = leg;
      const crossed = wrappedLanes.filter((lane) => lane.left >= Math.min(from.x, to.x) && lane.right <= Math.max(from.x, to.x));
      const curve = segmentBetween(leg.fromEdge[0] ?? from, leg.toEdge[0] ?? to, leg.first && leg.fromEdge.length === 0, leg.last && leg.toEdge.length === 0);
      if (crossed.length === 0 || !passesUnderCard(curve, crossed)) continue;
      const travel = to.x > from.x ? 1 : -1;
      for (const lane of travel > 0 ? crossed : [...crossed].reverse()) {
        // Each lane is crossed as near as it can be to the straight line between the two ends of the leg.
        const want = from.y + ((to.y - from.y) * ((lane.left + lane.right) / 2 - from.x)) / (to.x - from.x);
        const pass = { edge, lane, travel, want };
        lane.passes.push(pass);
        leg.passes.push(pass);
      }
    }
    legsOf.set(edge.id, legs);
  }
  // A line rises at most two gaps above the drawing: under the column headings, inside the padding, so no card shifts.
  const ceiling = Math.min(...[...columns.values()].flat().map((item) => item.y - item.height / 2)) - 2 * settings.waypointGap;
  for (const lane of wrappedLanes) {
    if (lane.passes.length === 0) continue;
    lane.passes.sort((left, right) => left.want - right.want || compareText(left.edge.id, right.edge.id));
    const wants = lane.passes.map((pass) => pass.want);
    const slots = laneSlots(lane.items, wants, { margin: settings.slotMargin, pitch: settings.slotPitch, outerPitch: settings.waypointGap, ceiling });
    const placed = placeLines(wants, slots, settings.sharedRuns ? runGroups(lane.passes.map((pass) => pass.edge)) : null);
    const gaps = new Map();
    lane.passes.forEach((pass, index) => {
      pass.y = placed[index].y;
      if (placed[index].gap) push(gaps, placed[index].gap, pass);
    });
    // The lines in a narrow gap spread evenly over it, no further apart than waypoints.
    for (const [gap, passes] of gaps) {
      const levels = [...new Set(passes.map((pass) => pass.y))];
      const spacing = levels.length > 1 ? Math.min(settings.waypointGap, (gap.high - gap.low) / (levels.length - 1)) : 0;
      const first = (gap.low + gap.high - spacing * (levels.length - 1)) / 2;
      for (const pass of passes) pass.y = first + levels.indexOf(pass.y) * spacing;
    }
  }

  // Between its stops a line curves; through a waypoint or a lane it runs straight.
  for (const legs of legsOf.values()) {
    for (const leg of legs) {
      leg.stops = [leg.from, ...leg.fromEdge, ...leg.passes.flatMap(({ lane, travel, y }) => [
        { x: travel > 0 ? lane.left : lane.right, y },
        { x: travel > 0 ? lane.right : lane.left, y }
      ]), ...leg.toEdge, leg.to];
      leg.turns = leg.stops.slice(1).map(() => undefined);
    }
  }
  // Steep curves across a gap, between two lanes or two columns, would all turn in its middle, as one rope. Each turns
  // at its own place instead, clear of the arrowhead at its end. Lines of one card keep their shared runs in the subgraph.
  if (!settings.sharedRuns) {
    const gaps = layers.flatMap((layer) => lanePlans.get(layer).slice(1).map((lane, index) => ({
      before: lanePlans.get(layer)[index][0], after: lane[0], curves: []
    })));
    layers.slice(0, -1).forEach((layer, index) => {
      const nextLanes = lanePlans.get(layers[index + 1]);
      const lanes = lanePlans.get(layer);
      if (lanes.length && nextLanes.length) gaps.push({ before: lanes.at(-1)[0], after: nextLanes[0][0], curves: [] });
    });
    for (const legs of legsOf.values()) {
      for (const leg of legs) {
        leg.stops.slice(1).forEach((to, stop) => {
          const from = leg.stops[stop];
          const [start, end] = from.x < to.x ? [from, to] : [to, from];
          const gap = gaps.find(({ before, after }) => Math.abs(start.x - before.x) <= before.half + 0.01 && Math.abs(end.x - after.x) <= after.half + 0.01);
          if (!gap) return;
          const left = gap.before.x + gap.before.half;
          const width = gap.after.x - gap.after.half - left;
          if (Math.abs(end.y - start.y) < 0.9 * width) return;
          const arrow = leg.last && stop + 2 === leg.stops.length;
          const keep = (arrives) => (arrives ? settings.turnArrow : settings.turnMargin) * width;
          gap.curves.push({
            leg, stop, start: start.y, end: end.y,
            low: left + keep(arrow && to.x < from.x), high: left + width - keep(arrow && to.x > from.x)
          });
        });
      }
    }
    for (const { curves } of gaps) {
      spreadTurns(curves, settings.turnPitch).forEach((turn, index) => { curves[index].leg.turns[curves[index].stop] = turn; });
    }
  }

  const routed = edges.map((edge) => {
    const source = nodes.get(edge.source);
    if (edge.kind === "loop") {
      const x = source.x + source.width / 2 - 22;
      const y = source.y - source.height / 2;
      const start = { x: x - 12, y };
      const end = { x: x + 12, y };
      // A loop, too, reaches three quarters of its rise, and stays below the card above it.
      const above = lanePlans.get(source.layer)[source.lane].filter((item) => !item.waypoint && item.y < source.y).at(-1);
      const rise = above ? Math.min(34, (y - above.y - above.height / 2 - 4) / 0.75) : 34;
      const first = { x: x - 18, y: y - rise };
      const second = { x: x + 18, y: y - rise };
      return { edge, start, end, segments: [[start, first, second, end]] };
    }
    const start = ports.get(`${edge.id}\u0000source`);
    const end = ports.get(`${edge.id}\u0000target`);
    if (edge.kind === "flat") {
      // An arc turns out of its port onto its track and keeps to it, parallel to the others beside the lane.
      const direction = edge.sourceSide === "right" ? 1 : -1;
      const { reach, clear } = arcTrack.get(edge.id);
      const track = source.x + direction * (source.half + reach);
      const way = end.y > start.y ? 1 : -1;
      const middle = (start.y + end.y) / 2;
      const corner = (port) => {
        const turn = Math.min(Math.abs(end.y - start.y) / 2, settings.arcTurn * reach, clear ? (port.y < middle ? clear.above : clear.below) : Infinity);
        const run = (track - port.x) * 0.6;
        return { turn, x: port.x + run, lean: Math.min(turn * 0.6, Math.abs(run) * settings.entryLean) };
      };
      const out = corner(start);
      const back = corner(end);
      const onto = { x: track, y: start.y + way * out.turn };
      const off = { x: track, y: end.y - way * back.turn };
      const first = [start, { x: out.x, y: start.y + way * out.lean }, { x: track, y: onto.y - way * out.turn * 0.6 }, onto];
      const last = [off, { x: track, y: off.y + way * back.turn * 0.6 }, { x: back.x, y: end.y - way * back.lean }, end];
      return { edge, start, end, segments: Math.abs(off.y - onto.y) < 0.5 ? [first, last] : [first, [onto, onto, off, off], last] };
    }
    const segments = legsOf.get(edge.id).flatMap(({ stops, turns, first, last }) => stops.slice(0, -1).map((stop, index) => (
      segmentBetween(stop, stops[index + 1], first && index === 0, last && index + 2 === stops.length, turns[index])
    )));
    return { edge, start, end, segments };
  });

  // Normalize to a padded positive canvas, including arc and loop extents. The top comes from the cards and
  // the ends of legs alone: a free height above them lies inside the top padding.
  const realNodes = [...nodes.values()];
  let minX = Math.min(...realNodes.map((node) => node.x - node.width / 2));
  let maxX = Math.max(...realNodes.map((node) => node.x + node.width / 2));
  let minY = Math.min(...realNodes.map((node) => node.y - node.height / 2));
  let maxY = Math.max(...realNodes.map((node) => node.y + node.height / 2));
  for (const route of routed) {
    const legs = legsOf.get(route.edge.id);
    for (const segment of route.segments) {
      for (const point of segment) {
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        if (!legs) minY = Math.min(minY, point.y);
        maxY = Math.max(maxY, point.y);
      }
    }
    for (const { from, to } of legs ?? []) minY = Math.min(minY, from.y, to.y);
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
    const end = moved.at(-1)[3];
    const { segment: lastStretch, base } = trimForArrow(moved.at(-1), settings.arrowLength);
    const tidy = (point) => ({ x: round(point.x), y: round(point.y) });
    const drawn = [...moved.slice(0, -1), lastStretch.map(tidy)];
    const path = [`M ${drawn[0][0].x} ${drawn[0][0].y}`,
      ...drawn.map(([, first, second, last]) => `C ${first.x} ${first.y} ${second.x} ${second.y} ${last.x} ${last.y}`)].join(" ");
    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      kind: edge.kind === "lane" ? (nodes.get(edge.source).x < nodes.get(edge.target).x ? "forward" : "backward") : edge.kind,
      path,
      start: moved[0][0],
      end,
      arrow: { ...end, angle: round((Math.atan2(end.y - base.y, end.x - base.x) * 180) / Math.PI) }
    };
  });
  return Object.freeze({
    width: round(maxX - minX + settings.padding * 2),
    height: round(maxY - minY + settings.padding * 2),
    top: round(Math.min(...realNodes.map((node) => node.y - node.height / 2), ...routed.flatMap(({ segments }) => segments.flat().map((point) => point.y))) + shiftY),
    nodes: nodesOut,
    edges: edgesOut,
    columns: columnsOut,
    crossings: bestCrossings
  });
}

/** The baseline of the column headings: over the cards, and over a line that rises above the place they would take. */
export function columnHeadingY(layout) {
  const cards = Math.min(...layout.nodes.map((node) => node.y - node.height / 2));
  return Math.max(16, Math.min(cards - 22, layout.top - 6));
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

/**
 * Columns at depth 1 that spread mutually dependent neighbours: causes that feed other causes sit further
 * left of the focus and dependents that depend on other dependents further right, so no line stays
 * inside a column. Only the columns change; each side stays the side `layers` gave it.
 */
export function causalOrderLayers(layers, edges, focusId) {
  const ordered = new Map(layers);
  for (const sign of [-1, 1]) {
    const ids = [...layers.keys()].filter((id) => id !== focusId && Math.sign(layers.get(id)) === sign);
    if (ids.length === 0) continue;
    const side = new Set(ids);
    const among = edges.filter((edge) => side.has(edge.source) && side.has(edge.target));
    // Every card is tied to the focus, whatever its real lines to the focus are, so a free card stays beside it.
    const ties = ids.map((id) => (sign < 0
      ? { id: `tie:${id}`, source: id, target: focusId }
      : { id: `tie:${id}`, source: focusId, target: id }));
    const columns = longestPathLayers([focusId, ...ids], [...among, ...ties]);
    for (const id of ids) ordered.set(id, columns.get(id) - columns.get(focusId));
  }
  return ordered;
}
