/**
 * Growing a drawing one card at a time. A reader expands a card to add the neighbours it has outside
 * the view: a cause goes one column left of the card, a dependent one column right, unless it already
 * has a place. Everything is worked out again from the base view on every change, so removing a card's
 * neighbours also removes what was grown from them.
 */

export const EXPANSION_LIMITS = Object.freeze({ maxNodes: 120, maxEdges: 400 });

function byId(left, right) {
  return left.id < right.id ? -1 : left.id > right.id ? 1 : 0;
}

/** The neighbours of a card the Direction control allows, each with the column step it takes. */
function neighbours(id, adjacency, direction) {
  const found = new Map();
  if (direction !== "children") {
    for (const edge of [...adjacency.incoming(id)].sort(byId)) {
      if (edge.source !== id && !found.has(edge.source)) found.set(edge.source, -1);
    }
  }
  if (direction !== "parents") {
    for (const edge of [...adjacency.outgoing(id)].sort(byId)) {
      if (edge.target !== id && !found.has(edge.target)) found.set(edge.target, 1);
    }
  }
  return found;
}

/**
 * The view grown from the base projection. `expanded` lists cards in the order they were expanded;
 * `adjacency` gives `incoming(id)` and `outgoing(id)` over the edges that pass the current filters.
 * Returns the added nodes, all layers, the edges among all shown nodes, the cards that really added
 * something, what each card's pill says, and whether a limit stopped the growth.
 */
export function expandGraph({ nodeIds, layers, edges = [], expanded = [], adjacency, direction = "both", limits = EXPANSION_LIMITS }) {
  const placed = new Map(nodeIds.map((id) => [id, layers.get(id)]));
  const added = [];
  const effective = [];
  let limited = false;
  for (const id of expanded) {
    if (!placed.has(id)) continue;
    let count = 0;
    for (const [neighbour, step] of neighbours(id, adjacency, direction)) {
      if (placed.has(neighbour)) continue;
      if (placed.size >= limits.maxNodes) {
        limited = true;
        break;
      }
      const layer = placed.get(id) + step;
      placed.set(neighbour, layer);
      added.push({ id: neighbour, layer, via: id });
      count += 1;
    }
    if (count > 0) effective.push(id);
  }
  const pills = new Map();
  const grown = new Set(effective);
  for (const id of placed.keys()) {
    const hidden = [...neighbours(id, adjacency, direction).keys()].filter((neighbour) => !placed.has(neighbour)).length;
    if (grown.has(id) || hidden > 0) pills.set(id, { hidden, expanded: grown.has(id) });
  }
  let shownEdges = edges;
  if (effective.length > 0) {
    const seen = new Set(edges.map((edge) => edge.id));
    const extra = [];
    for (const id of placed.keys()) {
      for (const edge of adjacency.outgoing(id)) {
        if (edge.source === edge.target || !placed.has(edge.target) || seen.has(edge.id)) continue;
        seen.add(edge.id);
        extra.push(edge);
      }
    }
    // The lines of the cards a reader expanded come first, so the limit never takes what was asked for.
    const asked = (edge) => (grown.has(edge.source) || grown.has(edge.target) ? 0 : 1);
    extra.sort((left, right) => asked(left) - asked(right) || byId(left, right));
    const room = Math.max(0, limits.maxEdges - edges.length);
    if (extra.length > room) limited = true;
    shownEdges = [...edges, ...extra.slice(0, room)];
  }
  return { added, layers: placed, edges: shownEdges, expanded: effective, pills, limited };
}

/** How a record stands to the focus by chains of lines, at any distance and whichever column it was placed in. */
export function relationToFocus(focusId, adjacency) {
  const behind = reachableWithin(focusId, Infinity, "parents", adjacency);
  const ahead = reachableWithin(focusId, Infinity, "children", adjacency);
  return (id) => {
    if (behind.has(id)) return ahead.has(id) ? "both" : "parent";
    return ahead.has(id) ? "child" : "context";
  };
}

/** The records a neighbourhood of this depth and direction discovers, before any limit. */
export function reachableWithin(focusId, depth, direction, adjacency) {
  const reached = new Set([focusId]);
  const walk = (next) => {
    const seen = new Set([focusId]);
    let frontier = [focusId];
    for (let step = 0; step < depth && frontier.length; step += 1) {
      frontier = frontier.flatMap(next).filter((id) => {
        if (seen.has(id)) return false;
        seen.add(id);
        reached.add(id);
        return true;
      });
    }
  };
  if (direction !== "children") walk((id) => adjacency.incoming(id).map((edge) => edge.source));
  if (direction !== "parents") walk((id) => adjacency.outgoing(id).map((edge) => edge.target));
  return reached;
}
