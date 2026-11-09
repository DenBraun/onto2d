/**
 * The decisions behind the Studio's keyboard widgets, without a DOM: which card lies in a
 * direction, where a list key goes, what a tree key does and in which order a card's lines come.
 */

const DIRECTIONS = Object.freeze({ ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down" });

/** The direction an arrow key names, or null for any other key. */
export function arrowDirection(key) {
  return DIRECTIONS[key] ?? null;
}

/**
 * The box nearest to `fromId` in a direction. Boxes are { id, x, y, width, height } with x and y at
 * their centre. A box counts only when its near edge lies past the centre of the current box, so a
 * card beside this one is not "below" it. Being out of line costs twice as much as being far away:
 * the next card in a column wins over a closer card in the next column.
 */
export function nearestInDirection(boxes, fromId, direction) {
  const from = boxes.find((box) => box.id === fromId);
  if (!from) return null;
  const horizontal = direction === "left" || direction === "right";
  const sign = direction === "right" || direction === "down" ? 1 : -1;
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;
  for (const box of boxes) {
    if (box.id === fromId) continue;
    const along = horizontal ? (box.x - from.x) * sign : (box.y - from.y) * sign;
    const across = Math.abs(horizontal ? box.y - from.y : box.x - from.x);
    const reach = (horizontal ? box.width : box.height) / 2;
    if (along - reach <= 0) continue;
    const gap = Math.max(0, along - reach - (horizontal ? from.width : from.height) / 2);
    const score = gap + across * 2;
    if (score < bestScore) {
      bestScore = score;
      best = box.id;
    }
  }
  return best;
}

/**
 * Where a list key goes from `index` among `count` items, or null when the key does not move in this
 * orientation. Without `wrap` an end stays where it is, so the key still counts as handled.
 */
export function rovingStep(count, index, key, { orientation = "vertical", wrap = false } = {}) {
  if (count <= 0) return null;
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  const [back, forward] = orientation === "horizontal" ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"];
  if (key !== back && key !== forward) return null;
  const next = index + (key === forward ? 1 : -1);
  if (wrap) return (next + count) % count;
  return Math.max(0, Math.min(count - 1, next));
}

/** The id of the card a drawing starts on: top of its leftmost column. */
export function firstCard(boxes) {
  return boxes.reduce((first, box) => (!first || box.x < first.x || (box.x === first.x && box.y < first.y) ? box : first), null)?.id ?? null;
}

/** The index that holds a widget's Tab stop: the first preferred key present, or else the first item. */
export function rovingEntry(keys, preferred = []) {
  if (keys.length === 0) return -1;
  for (const key of preferred) {
    if (key === null || key === undefined) continue;
    const index = keys.indexOf(key);
    if (index !== -1) return index;
  }
  return 0;
}

/**
 * What a key does on row `index` of a tree's visible rows, each { depth, expandable, expanded }:
 * { move: index } goes to another row, { toggle: true } opens or closes this one, null does nothing.
 */
export function treeKeyAction(rows, index, key) {
  const row = rows[index];
  if (!row) return null;
  if (key === "ArrowDown" || key === "ArrowUp" || key === "Home" || key === "End") {
    return { move: rovingStep(rows.length, index, key) };
  }
  if (key === "ArrowRight") {
    if (!row.expandable) return null;
    if (!row.expanded) return { toggle: true };
    return rows[index + 1]?.depth > row.depth ? { move: index + 1 } : null;
  }
  if (key === "ArrowLeft") {
    if (row.expandable && row.expanded) return { toggle: true };
    for (let other = index - 1; other >= 0; other -= 1) {
      if (rows[other].depth < row.depth) return { move: other };
    }
  }
  return null;
}

/**
 * The lines of a card in reading order: from the left of the drawing to the right, then from the
 * top down, by where the line's other end sits. `positionOf` gives { x, y } for a card id.
 */
export function orderedCardLines(edges, cardId, positionOf) {
  const lines = [];
  for (const edge of edges) {
    if (edge.source !== cardId && edge.target !== cardId) continue;
    const place = positionOf(edge.source === cardId ? edge.target : edge.source) ?? { x: 0, y: 0 };
    lines.push({ id: edge.id, x: place.x, y: place.y });
  }
  lines.sort((left, right) => left.x - right.x || left.y - right.y);
  return lines.map((line) => line.id);
}

/** The next id in a cycle, or the first (the last, going back) when `current` is not among them. */
export function nextInCycle(ids, current, backwards = false) {
  if (ids.length === 0) return null;
  const index = ids.indexOf(current);
  if (index === -1) return backwards ? ids[ids.length - 1] : ids[0];
  return ids[(index + (backwards ? ids.length - 1 : 1)) % ids.length];
}
