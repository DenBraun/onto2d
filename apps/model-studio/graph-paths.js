/**
 * Chains of causes between two arisings. Fewest steps come first, then the fewest links that cite no
 * evidence, then the alphabetical order of edge ids, so the same release always draws the same chain.
 */
import { citesEvidence } from "./open-work.js?v=20261109.1";

function indexEdges(edges) {
  const outgoing = new Map();
  const incoming = new Map();
  for (const edge of edges) {
    if (edge.source === edge.target) continue;
    if (!outgoing.has(edge.source)) outgoing.set(edge.source, []);
    if (!incoming.has(edge.target)) incoming.set(edge.target, []);
    outgoing.get(edge.source).push(edge);
    incoming.get(edge.target).push(edge);
  }
  return { outgoing, incoming };
}

function hypothesisCost(edge) {
  return citesEvidence(edge) ? 0 : 1;
}

/**
 * Best way from `start` to every record along `links`. Breadth first gives the fewest steps; among
 * those, a pass per distance keeps the fewest hypothesis links and the smallest edge id.
 */
function bestRoutes(start, links, otherEnd) {
  const best = new Map([[start, { steps: 0, cost: 0, via: null, previous: null }]]);
  let frontier = [start];
  while (frontier.length > 0) {
    const reached = new Set();
    for (const id of frontier) {
      const here = best.get(id);
      for (const edge of links.get(id) ?? []) {
        const next = otherEnd(edge);
        const known = best.get(next);
        if (known && known.steps <= here.steps) continue;
        const cost = here.cost + hypothesisCost(edge);
        if (!known || cost < known.cost || (cost === known.cost && edge.id < known.via.id)) {
          best.set(next, { steps: here.steps + 1, cost, via: edge, previous: id });
        }
        reached.add(next);
      }
    }
    frontier = [...reached];
  }
  return best;
}

/** The records from the far end back to the start, and the edges between them, in that order. */
function walkBack(best, end) {
  const nodes = [end];
  const edges = [];
  for (let step = best.get(end); step.via; step = best.get(step.previous)) {
    edges.push(step.via);
    nodes.push(step.previous);
  }
  return { nodes, edges };
}

function chain(best, from, to) {
  if (!best.has(to) || from === to) return null;
  const { nodes, edges } = walkBack(best, to);
  return { nodes: nodes.reverse(), edges: edges.reverse(), steps: edges.length, hypotheses: best.get(to).cost };
}

/**
 * How two arisings are joined: `a` leads to `b` ("forward"), `b` leads to `a` ("backward"), or both
 * follow from the nearest common cause ("common-cause"), the arising with the smallest total distance
 * to both. `columns` lists the records left to right: a causal chain from its cause, and a common cause
 * between `a` on the left and `b` on the right, so its two chains meet there.
 */
export function connection(edges, a, b) {
  const none = { kind: "none", columns: a === b ? [a] : [a, b], edges: [], steps: 0, hypotheses: 0, cause: null };
  if (a === b) return none;
  const { outgoing, incoming } = indexEdges(edges);
  const forward = chain(bestRoutes(a, outgoing, (edge) => edge.target), a, b);
  if (forward) return { kind: "forward", columns: forward.nodes, edges: forward.edges, steps: forward.steps, hypotheses: forward.hypotheses, cause: null };
  const backward = chain(bestRoutes(b, outgoing, (edge) => edge.target), b, a);
  if (backward) return { kind: "backward", columns: backward.nodes, edges: backward.edges, steps: backward.steps, hypotheses: backward.hypotheses, cause: null };
  const toA = bestRoutes(a, incoming, (edge) => edge.source);
  const toB = bestRoutes(b, incoming, (edge) => edge.source);
  let cause = null;
  for (const [id, route] of toA) {
    const other = toB.get(id);
    if (!other) continue;
    const steps = route.steps + other.steps;
    const cost = route.cost + other.cost;
    if (!cause || steps < cause.steps || (steps === cause.steps && (cost < cause.cost || (cost === cause.cost && id < cause.id)))) {
      cause = { id, steps, cost };
    }
  }
  if (!cause) return none;
  // Walking back from the cause over reversed links lists each chain from the cause down to its arising.
  const left = walkBack(toA, cause.id);
  const right = walkBack(toB, cause.id);
  return {
    kind: "common-cause",
    columns: [...left.nodes.slice().reverse(), ...right.nodes.slice(1)],
    edges: [...left.edges.slice().reverse(), ...right.edges],
    steps: cause.steps,
    hypotheses: cause.cost,
    cause: cause.id
  };
}

/** Up to `limit` names matching a query: those starting with it first, then a word starting with it, then any match. */
export function matchNames(items, query, limit = 8) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  const score = (name) => {
    const text = name.toLowerCase();
    if (text.startsWith(needle)) return 0;
    if (text.includes(` ${needle}`)) return 1;
    return text.includes(needle) ? 2 : 3;
  };
  return items
    .map((item) => ({ item, rank: score(item.name) }))
    .filter(({ rank }) => rank < 3)
    .sort((left, right) => left.rank - right.rank || left.item.name.localeCompare(right.item.name))
    .slice(0, limit)
    .map(({ item }) => item);
}
