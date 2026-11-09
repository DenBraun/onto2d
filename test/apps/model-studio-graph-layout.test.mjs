import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createModelView } from "@onto2d/view";
import { arcTracks, layoutLayeredGraph, longestPathLayers, neighbourhoodLayers, spreadTurns } from "../../apps/model-studio/graph-layout.js";
import { decodeJsonValueTable, isJsonValueTable } from "../../packages/model-pack/src/json-value-table.js";

const releaseRoot = new URL("../../models/causal-emergence/releases/2026.11.08.0/", import.meta.url);

async function json(path) {
  const value = JSON.parse(await readFile(new URL(path, releaseRoot), "utf8"));
  return isJsonValueTable(value) ? decodeJsonValueTable(value) : value;
}

function boxes(layout) {
  return layout.nodes.map((node) => ({
    id: node.id, left: node.x - node.width / 2, right: node.x + node.width / 2,
    top: node.y - node.height / 2, bottom: node.y + node.height / 2
  }));
}

function assertSeparated(layout, label) {
  const cards = boxes(layout);
  for (let left = 0; left < cards.length; left += 1) {
    for (let right = left + 1; right < cards.length; right += 1) {
      const a = cards[left];
      const b = cards[right];
      const apart = a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top;
      assert.ok(apart, `${label}: ${a.id} overlaps ${b.id}`);
    }
  }
}

function pathNumbers(path) {
  return [...path.matchAll(/-?\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
}

/** Points along a drawn path, a few pixels apart. */
function drawnPoints(path) {
  const numbers = pathNumbers(path);
  const points = [];
  let from = { x: numbers[0], y: numbers[1] };
  for (let index = 2; index + 5 < numbers.length; index += 6) {
    const [ax, ay, bx, by, cx, cy] = numbers.slice(index, index + 6);
    const steps = Math.max(2, Math.ceil((Math.hypot(ax - from.x, ay - from.y) + Math.hypot(bx - ax, by - ay) + Math.hypot(cx - bx, cy - by)) / 3));
    for (let step = 0; step <= steps; step += 1) {
      const t = step / steps;
      const u = 1 - t;
      points.push({
        x: u ** 3 * from.x + 3 * u ** 2 * t * ax + 3 * u * t ** 2 * bx + t ** 3 * cx,
        y: u ** 3 * from.y + 3 * u ** 2 * t * ay + 3 * u * t ** 2 * by + t ** 3 * cy
      });
    }
    from = { x: cx, y: cy };
  }
  return points;
}

/** Every line with a drawn point inside a card it does not belong to, one pixel in from the card's edge. */
function linesUnderCards(layout, kinds = null) {
  const lanes = new Map();
  for (const card of boxes(layout)) {
    if (!lanes.has(card.left)) lanes.set(card.left, { left: card.left, right: card.right, cards: [] });
    const lane = lanes.get(card.left);
    lane.right = Math.max(lane.right, card.right);
    lane.cards.push(card);
  }
  const under = [];
  for (const edge of layout.edges) {
    if (kinds && !kinds.includes(edge.kind)) continue;
    const point = drawnPoints(edge.path).find(({ x, y }) => [...lanes.values()].some((lane) => x > lane.left && x < lane.right && lane.cards.some((card) => (
      card.id !== edge.source && card.id !== edge.target
      && x > card.left + 1 && x < card.right - 1 && y > card.top + 1 && y < card.bottom - 1
    ))));
    if (point) under.push(edge.id);
  }
  return under;
}

test("a steep line into a card narrower than its column stays off the wider card beside it", () => {
  for (let wide = 0; wide < 7; wide += 1) {
    const column = Array.from({ length: 7 }, (_, index) => ({ id: `t${index}`, layer: 1, width: index === wide ? 240 : 200, height: index === wide ? 82 : 64 }));
    const sources = Array.from({ length: 9 }, (_, index) => ({ id: `s${index}`, layer: 0, width: 200, height: 64 }));
    const edges = sources.flatMap((source, index) => column.filter((_, target) => (index + target) % 3 === 0).map(({ id }) => ({ id: `${source.id}>${id}`, source: source.id, target: id })));
    const layout = layoutLayeredGraph({ nodes: [...sources, ...column], edges }, { nodeWidth: 200, nodeHeight: 64, rowGap: 16 });
    assert.deepEqual(linesUnderCards(layout), [], `wide card ${wide}`);
    const narrow = layout.nodes.find(({ id }) => id !== `t${wide}` && id.startsWith("t"));
    const into = layout.edges.find(({ target }) => target === narrow.id);
    const points = pathNumbers(into.path);
    assert.equal(points.at(-1), into.end.y, "The line runs level from the column's edge to the card");
    assert.equal(points.at(-3), into.end.y);
  }
});

/** A repeatable graph with random columns and edges. */
function randomGraph(seed, { layers = 5, maxNodes = 50, loops = true } = {}) {
  let state = seed;
  const random = () => (state = (state * 1664525 + 1013904223) >>> 0) / 2 ** 32;
  const count = 3 + Math.floor(random() * maxNodes);
  const nodes = Array.from({ length: count }, (_, index) => ({ id: `n${index}`, layer: Math.floor(random() * layers) - 2, rank: index, width: 200, height: 56 + Math.floor(random() * 3) * 16 }));
  const edges = [];
  for (let index = Math.floor(random() * count * 3); index > 0; index -= 1) {
    const source = nodes[Math.floor(random() * count)].id;
    const target = nodes[Math.floor(random() * count)].id;
    if (loops || source !== target) edges.push({ id: `${source}>${target}#${index}`, source, target });
  }
  return { nodes, edges };
}

/** Same-column arcs of a layout with their heights, side and the distance they reach from their ports. */
function arcsOf(layout) {
  return layout.edges.filter((edge) => edge.kind === "flat").map((edge) => {
    const xs = drawnPoints(edge.path).map((point) => point.x);
    const side = Math.max(...xs) - edge.start.x > edge.start.x - Math.min(...xs) ? 1 : -1;
    return {
      id: edge.id, side, track: side > 0 ? Math.max(...xs) : Math.min(...xs),
      low: Math.min(edge.start.y, edge.end.y), high: Math.max(edge.start.y, edge.end.y)
    };
  });
}

/** Straight runs across lanes, as a line keeps to a free height or a waypoint, by lane. */
function runsByLane(layout) {
  const lanes = new Map();
  for (const edge of layout.edges) {
    const numbers = pathNumbers(edge.path);
    let from = { x: numbers[0], y: numbers[1] };
    for (let index = 2; index + 5 < numbers.length; index += 6) {
      const [ax, ay, bx, by, cx, cy] = numbers.slice(index, index + 6);
      if (Math.abs(cx - from.x) > 20 && Math.abs(cy - from.y) < 0.11 && Math.abs(ay - from.y) < 0.11 && Math.abs(by - from.y) < 0.11) {
        const key = `${Math.round(Math.min(from.x, cx))}:${Math.round(Math.max(from.x, cx))}`;
        if (!lanes.has(key)) lanes.set(key, []);
        lanes.get(key).push({ y: from.y, edge });
      }
      from = { x: cx, y: cy };
    }
  }
  return lanes;
}

test("arc tracks: arcs keep the reach they want while it fits and overlapping arcs stay apart", () => {
  const arc = (id, low, high, wanted, room = 150) => ({ id, low, high, wanted, room });
  const roomy = arcTracks([arc("a", 0, 100, 30), arc("b", 300, 500, 60)]);
  assert.equal(roomy.get("a").reach, 30, "An arc alone keeps its reach");
  assert.equal(roomy.get("b").reach, 60);
  const twins = arcTracks([arc("a", 0, 100, 30), arc("b", 10, 90, 30)], { pitch: 8 });
  assert.ok(twins.get("a").reach >= twins.get("b").reach + 8, "The arc holding the other lies outside it, one pitch away");
  const touching = arcTracks([arc("a", 0, 100, 30), arc("b", 110, 200, 30)], { pitch: 8 });
  assert.equal(touching.get("a").reach, touching.get("b").reach, "Arcs at separate heights can share a track");
});

test("arc tracks: a longer arc lies outside what it contains, whatever the order given", () => {
  const arcs = [["outer", 0, 400], ["middle", 50, 350], ["inner", 100, 300], ["other", 500, 600]]
    .map(([id, low, high]) => ({ id, low, high, wanted: 30, room: 150 }));
  const tracks = arcTracks(arcs);
  assert.ok(tracks.get("outer").reach > tracks.get("middle").reach);
  assert.ok(tracks.get("middle").reach > tracks.get("inner").reach);
  assert.deepEqual(arcTracks([...arcs].reverse()), tracks, "The input order does not matter");
});

test("arc tracks: too many arcs for the room spread evenly over it", () => {
  // Every arc overlaps every other one and none can go anywhere else.
  const arcs = Array.from({ length: 13 }, (_, index) => ({ id: `a${String(index).padStart(2, "0")}`, low: index, high: 1000 - index, wanted: 60, room: 32 }));
  const tracks = arcTracks(arcs, { pitch: 8, inset: 8, tightest: 3 });
  const reaches = [...tracks.values()].map(({ reach }) => reach).sort((left, right) => left - right);
  assert.ok(Math.abs(reaches[0] - 8) < 1e-9, "The band starts next to the cards");
  assert.ok(Math.abs(reaches.at(-1) - 32) < 1e-9, "The band ends at the limit of the room");
  reaches.slice(1).forEach((reach, index) => assert.ok(Math.abs(reach - reaches[index] - 2) < 1e-9, "The tracks are evenly spaced"));
  assert.ok([...tracks.values()].every(({ around }) => !around));
});

test("arc tracks: a few arcs in a narrow gap move out into it", () => {
  const tracks = arcTracks([{ id: "a", low: 0, high: 500, wanted: 60, room: 32 }], { inset: 8, roomy: 22.5 });
  assert.equal(tracks.get("a").reach, 22.5, "The arc does not hug the cards when it has room");
});

test("arc tracks: an arc takes the way around only when the near room is too tight to tell lines apart", () => {
  const arcs = (count) => Array.from({ length: count }, (_, index) => ({
    id: `a${String(index).padStart(2, "0")}`, low: 100 - index, high: 900 + index, wanted: 60, room: 32, around: { inset: 240, room: 300 }
  }));
  const few = arcTracks(arcs(5), { inset: 8, tightest: 3 });
  assert.ok([...few.values()].every(({ around, reach }) => !around && reach <= 32), "Five tracks fit the gap");
  const many = arcTracks(arcs(20), { inset: 8, tightest: 3 });
  const beyond = [...many.values()].filter(({ around }) => around);
  assert.ok(beyond.length > 0 && beyond.length < 20, "Only the arcs that do not fit go around");
  assert.ok(beyond.every(({ reach }) => reach >= 240 && reach <= 300), "They keep to the room beyond the cards");
  assert.equal(new Set(beyond.map(({ reach }) => reach)).size, beyond.length, "They keep separate tracks there too");
  const near = [...many.entries()].filter(([, track]) => !track.around);
  assert.equal(near.length, 9, "The gap keeps as many arcs as it can show three pixels apart");
  assert.deepEqual(near.map(([id]) => id), [...near.map(([id]) => id)].sort(), "The shortest arcs stay near");
});

test("arc tracks: an arc with nothing tight outside it uses the room it has", () => {
  // The long arc can go no further than 32; the arcs above the lane in its way are held only by their own room.
  const tracks = arcTracks([
    { id: "held", low: 0, high: 1000, wanted: 60, room: 32 },
    ...Array.from({ length: 6 }, (_, index) => ({ id: `a${index}`, low: 10 + index, high: 300 - index, wanted: 30, room: 100 })),
    ...Array.from({ length: 4 }, (_, index) => ({ id: `b${index}`, low: 1500 + index, high: 1800 - index, wanted: 30, room: 100 }))
  ]);
  const free = [0, 1, 2, 3].map((index) => tracks.get(`b${index}`).reach).sort((left, right) => left - right);
  assert.ok(free[1] - free[0] >= 8, "Arcs apart from the tight ones keep the full pitch");
  assert.ok(tracks.get("held").reach <= 32);
  assert.ok(tracks.get("a0").reach < tracks.get("held").reach, "Arcs inside the held arc stay inside it");
});

test("steep curves across a gap turn at their own places, in the order that avoids crossings", () => {
  const falling = (start, end) => ({ start, end, low: 4, high: 36 });
  const turns = spreadTurns([falling(100, 500), falling(0, 400), falling(200, 600)], 4);
  assert.ok(turns[1] > turns[0] && turns[0] > turns[2], "Of falling curves the one that starts higher turns further right");
  assert.deepEqual(turns.map((turn, index, all) => (index ? Math.abs(turn - all[index - 1]) : 0)).sort(), [0, 4, 8]);
  const rising = spreadTurns([{ start: 500, end: 100, low: 4, high: 36 }, { start: 600, end: 200, low: 4, high: 36 }], 4);
  assert.ok(rising[1] > rising[0], "Of rising curves the one that starts lower turns further right");
  assert.deepEqual(spreadTurns([], 4), []);
  assert.deepEqual(spreadTurns([falling(0, 500)], 4), [20], "A single curve turns in the middle");

  // A curve keeps clear of the arrowhead at its end, and its neighbours make way.
  const held = spreadTurns([{ start: 0, end: 500, low: 6, high: 26 }, { start: 100, end: 600, low: 6, high: 34 }, { start: 200, end: 700, low: 6, high: 34 }], 4);
  assert.ok(held[0] <= 26);
  assert.ok(held[0] - held[1] >= 3.99 && held[1] - held[2] >= 3.99, "Turns stay apart");
  const crowded = spreadTurns(Array.from({ length: 30 }, (_, index) => falling(index, 500 + index)), 4);
  assert.ok(crowded.every((turn) => turn >= 4 && turn <= 36), "A crowded gap keeps every curve inside its range");
  assert.ok(new Set(crowded).size === 30, "and still gives each its own turn");
});

test("an arrowhead points along the way its edge arrives at the card", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "far", layer: 0, rank: 0 }, { id: "near", layer: 0, rank: 1 }, { id: "target", layer: 1 }],
    edges: [{ id: "far>target", source: "far", target: "target" }]
  });
  const edge = layout.edges[0];
  assert.deepEqual({ x: edge.arrow.x, y: edge.arrow.y }, edge.end, "The tip touches the card at the port");
  const numbers = pathNumbers(edge.path);
  const base = { x: numbers.at(-2), y: numbers.at(-1) };
  assert.ok(Math.abs(Math.hypot(edge.end.x - base.x, edge.end.y - base.y) - 9) < 0.5, "The line stops one arrowhead short of the card");
  const chord = (Math.atan2(edge.end.y - base.y, edge.end.x - base.x) * 180) / Math.PI;
  assert.ok(Math.abs(edge.arrow.angle - chord) < 1, "The rotation follows the last stretch of the curve");

  const straight = layoutLayeredGraph({
    nodes: [{ id: "a", layer: 0 }, { id: "b", layer: 1 }],
    edges: [{ id: "a>b", source: "a", target: "b" }]
  }).edges[0];
  assert.equal(straight.arrow.angle, 0, "An edge running straight across points straight across");

  const slanted = layoutLayeredGraph({
    nodes: [{ id: "a", layer: 0, rank: 0 }, { id: "b", layer: 0, rank: 1 }, { id: "c", layer: 0, rank: 2 }, { id: "t", layer: 1 }],
    edges: [{ id: "a>t", source: "a", target: "t" }, { id: "b>t", source: "b", target: "t" }, { id: "c>t", source: "c", target: "t" }]
  }).edges;
  assert.equal(new Set(slanted.map((candidate) => candidate.arrow.angle)).size, 3, "Edges from different directions enter at different angles");
  assert.ok(slanted.every((candidate) => Math.abs(candidate.arrow.angle) < 60), "No arrowhead slides along the side of a card");
});

test("opposite causes between two records leave and enter through separate ports", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "a", layer: 0 }, { id: "b", layer: 1 }],
    edges: [{ id: "a>b", source: "a", target: "b" }, { id: "b>a", source: "b", target: "a" }]
  });
  const forward = layout.edges.find((edge) => edge.id === "a>b");
  const backward = layout.edges.find((edge) => edge.id === "b>a");
  assert.equal(forward.kind, "forward");
  assert.equal(backward.kind, "backward");
  assert.notEqual(forward.path, backward.path);
  assert.notDeepEqual(forward.start, backward.end, "The two directions must not share a port on the source card");
  assert.notDeepEqual(forward.end, backward.start, "The two directions must not share a port on the target card");
  const gapAtA = Math.abs(forward.start.y - backward.end.y);
  const gapAtB = Math.abs(forward.end.y - backward.start.y);
  assert.ok(gapAtA >= 10 && gapAtB >= 10, "Opposite directions stay visibly apart");
  // The same edge keeps its relative position at both cards, so the two curves never cross.
  assert.equal(Math.sign(forward.start.y - backward.end.y), Math.sign(forward.end.y - backward.start.y));
});

test("edges into one card arrive at distinct ports instead of one point", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "x", layer: 0 }, { id: "y", layer: 0 }, { id: "z", layer: 0 }, { id: "t", layer: 1 }],
    edges: ["x", "y", "z"].map((id) => ({ id: `${id}>t`, source: id, target: "t" }))
  });
  const ends = layout.edges.map((edge) => `${edge.end.x}:${edge.end.y}`);
  assert.equal(new Set(ends).size, 3);
});

test("a long edge crosses a column on the straight line through its reserved waypoint", () => {
  const layout = layoutLayeredGraph({
    nodes: [
      { id: "cause", layer: -1 }, { id: "focus", layer: 0 }, { id: "dependent", layer: 1 },
      { id: "sibling", layer: 0, rank: 1 }
    ],
    edges: [
      { id: "cause>focus", source: "cause", target: "focus" },
      { id: "focus>dependent", source: "focus", target: "dependent" },
      { id: "cause>dependent", source: "cause", target: "dependent" },
      { id: "dependent>cause", source: "dependent", target: "cause" },
      { id: "cause>sibling", source: "cause", target: "sibling" }
    ]
  });
  assertSeparated(layout, "waypoint fixture");
  const middleColumn = layout.columns.find((column) => column.layer === 0);
  for (const [id, entry, exit] of [["cause>dependent", "left", "right"], ["dependent>cause", "right", "left"]]) {
    const long = layout.edges.find((edge) => edge.id === id);
    assert.equal((long.path.match(/ C /g) ?? []).length, 3, `${id} enters the column, crosses it and leaves it`);
    const numbers = pathNumbers(long.path);
    const enters = numbers.slice(6, 8);
    const leaves = numbers.slice(12, 14);
    assert.equal(enters[0], middleColumn[entry], `${id} enters at the near side of the column`);
    assert.equal(leaves[0], middleColumn[exit], `${id} leaves at the far side of the column`);
    assert.equal(enters[1], leaves[1], `${id} crosses on one height`);
    for (const card of boxes(layout).filter((node) => ["focus", "sibling"].includes(node.id))) {
      assert.ok(enters[1] <= card.top || enters[1] >= card.bottom, `${id} must avoid ${card.id}`);
    }
  }
  assert.deepEqual(linesUnderCards(layout), []);
});

test("in single-lane columns no drawn point of a long edge is inside a foreign card", () => {
  let crossing = 0;
  for (let seed = 1; seed <= 80; seed += 1) {
    const layout = layoutLayeredGraph(randomGraph(seed), { maxRows: 200, columnGap: 100, flatSide: (layer) => (layer < 0 ? "left" : "right") });
    assert.ok(layout.columns.every((column) => column.lanes <= 1), `seed ${seed}: every column keeps one lane`);
    assert.deepEqual(linesUnderCards(layout, ["forward", "backward"]), [], `seed ${seed}`);
    for (const edge of layout.edges.filter((candidate) => (candidate.path.match(/ C /g) ?? []).length > 1)) {
      crossing += 1;
      // The arrowhead keeps turning with the last stretch of the line.
      const numbers = pathNumbers(edge.path);
      const chord = (Math.atan2(edge.end.y - numbers.at(-1), edge.end.x - numbers.at(-2)) * 180) / Math.PI;
      assert.ok(Math.abs(((edge.arrow.angle - chord + 540) % 360) - 180) < 1.5, `${edge.id} arrow follows its line`);
    }
  }
  assert.ok(crossing > 100, "The fixtures hold long edges");
});

test("same-column arcs stay inside the free gap when a neighbour exists", () => {
  const column = Array.from({ length: 14 }, (_, index) => ({ id: `m${String(index).padStart(2, "0")}`, layer: 1, rank: index }));
  const arcs = column.slice(1).map((node, index) => ({ id: `arc${index}`, source: column[0].id, target: node.id }));
  const nodes = [{ id: "before", layer: 0 }, ...column, { id: "after", layer: 2 }];
  const settings = { columnGap: 66, laneGap: 40, maxRows: 200 };
  const extent = (edge) => drawnPoints(edge.path).map((point) => point.x);
  for (const side of ["right", "left"]) {
    const layout = layoutLayeredGraph({ nodes, edges: arcs }, { ...settings, flatSide: () => side });
    const middle = layout.columns.find((candidate) => candidate.layer === 1);
    for (const edge of layout.edges) {
      if (side === "right") assert.ok(Math.max(...extent(edge)) <= middle.right + settings.columnGap - 8 + 0.5, `${edge.id} stays clear of the next column`);
      else assert.ok(Math.min(...extent(edge)) >= middle.left - settings.columnGap + 8 - 0.5, `${edge.id} stays clear of the previous column`);
    }
    assert.deepEqual(linesUnderCards(layout), []);
  }
  // Without a neighbour on that side an arc keeps its full reach.
  const alone = layoutLayeredGraph({ nodes: column, edges: arcs }, { ...settings, flatSide: () => "right" });
  const only = alone.columns[0];
  assert.ok(alone.edges.some((edge) => Math.max(...extent(edge)) > only.right + settings.columnGap), "Nothing limits an arc on the outer side of the drawing");

  // Inside a wrapped column the gap beside a lane is the gap to the next lane.
  const wrapped = layoutLayeredGraph({ nodes: column, edges: [{ id: "a", source: "m00", target: "m03" }, { id: "b", source: "m01", target: "m04" }] }, { ...settings, maxRows: 7, nodeHeight: 56, flatSide: () => "right" });
  assert.ok(alone.columns[0].lanes === 1 && wrapped.columns[0].lanes > 1, "The fixture wraps");
  const firstLane = wrapped.nodes.filter((node) => node.lane === 0);
  const laneRight = Math.max(...firstLane.map((node) => node.x + node.width / 2));
  for (const edge of wrapped.edges) {
    assert.ok(Math.max(...extent(edge)) <= laneRight + settings.laneGap - 8 + 0.5, `${edge.id} stays clear of the next lane`);
  }
});

test("a loop stays below the card above it", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "upper", layer: 0, rank: 0 }, { id: "lower", layer: 0, rank: 1 }],
    edges: [{ id: "upper>upper", source: "upper", target: "upper" }, { id: "lower>lower", source: "lower", target: "lower" }]
  });
  assert.deepEqual(linesUnderCards(layout), []);
  const [upper, lower] = ["upper>upper", "lower>lower"].map((id) => layout.edges.find((edge) => edge.id === id));
  const height = (edge) => edge.start.y - Math.min(...drawnPoints(edge.path).map((point) => point.y));
  assert.ok(height(upper) > height(lower), "The loop with free room above it keeps its size");
  assert.ok(height(lower) > 4, "A squeezed loop still shows");
});

test("lines crossing wrapped columns keep to free heights without moving a card", () => {
  let wrapped = 0;
  let rerouted = 0;
  for (let seed = 1; seed <= 120; seed += 1) {
    const graph = randomGraph(seed);
    const options = { maxRows: 5, columnGap: 66, flatSide: (layer) => (layer < 0 ? "left" : "right") };
    const layout = layoutLayeredGraph(graph, options);
    if (layout.columns.some((column) => column.lanes > 1)) wrapped += 1;
    assert.deepEqual(linesUnderCards(layout), [], `seed ${seed}`);
    assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)), `seed ${seed}: finite routes`);
    assert.deepEqual(layoutLayeredGraph(structuredClone(graph), options), layout, `seed ${seed}: repeatable`);
    // A clearance nothing can fall inside leaves every line on its natural curve: the cards must not care.
    const natural = layoutLayeredGraph(graph, { ...options, slotMargin: -1e6 });
    assert.deepEqual(layout.nodes, natural.nodes, `seed ${seed}: cards stay`);
    assert.deepEqual(layout.columns, natural.columns, `seed ${seed}: columns stay`);
    assert.equal(layout.crossings, natural.crossings, `seed ${seed}: crossings stay`);
    assert.deepEqual(layout.edges.map(({ start, end }) => [start, end]), natural.edges.map(({ start, end }) => [start, end]), `seed ${seed}: ports stay`);
    rerouted += linesUnderCards(natural).length;
    for (const edge of layout.edges) {
      for (const { x, y } of drawnPoints(edge.path)) {
        assert.ok(x >= 0 && x <= layout.width && y >= 0 && y <= layout.height, `seed ${seed}: ${edge.id} stays on the canvas`);
      }
    }
  }
  assert.ok(wrapped > 100, "The fixtures wrap");
  assert.ok(rerouted > 100, "Their natural curves would pass under cards");

  // A wrapped column holding only cards stays packed: lines take the gaps, cards keep their spacing.
  const leaves = Array.from({ length: 30 }, (_, index) => ({ id: `leaf${String(index).padStart(2, "0")}`, layer: 0, rank: index }));
  const layout = layoutLayeredGraph({
    nodes: [...leaves, { id: "hub", layer: 1 }],
    edges: leaves.map((leaf) => ({ id: `${leaf.id}>hub`, source: leaf.id, target: "hub" }))
  }, { maxRows: 8 });
  const firstLane = layout.nodes.filter((node) => node.lane === 0 && node.layer === 0).sort((left, right) => left.y - right.y);
  assert.ok(firstLane.length > 2);
  for (let index = 1; index < firstLane.length; index += 1) {
    assert.equal(Math.round(firstLane[index].y - firstLane[index - 1].y), 56 + 16, "Rows stay one card and one row gap apart");
  }
  assert.deepEqual(linesUnderCards(layout), []);
});

test("only a line that would pass under a card leaves its natural curve", () => {
  // The first lane holds three cards, the second a single card level with the middle one.
  const layout = layoutLayeredGraph({
    nodes: [
      { id: "a", layer: 0, rank: 0 }, { id: "b", layer: 0, rank: 1 }, { id: "c", layer: 0, rank: 2 }, { id: "d", layer: 0, rank: 3 },
      { id: "high", layer: 1, rank: 0 }, { id: "level", layer: 1, rank: 1 }
    ],
    edges: [
      { id: "a>high", source: "a", target: "high" }, { id: "b>level", source: "b", target: "level" },
      { id: "d>level", source: "d", target: "level" }
    ]
  }, { maxRows: 3 });
  assert.equal(layout.columns.find((column) => column.layer === 0).lanes, 2);
  const curves = (id) => (layout.edges.find((edge) => edge.id === id).path.match(/ C /g) ?? []).length;
  assert.equal(curves("d>level"), 1, "A line from the last lane has nothing to cross");
  assert.equal(curves("a>high"), 1, "A line clear of the cards in its way keeps its one curve");
  assert.equal(curves("b>level"), 3, "A line that would pass under a card crosses that lane on a free height");
  assert.deepEqual(linesUnderCards(layout), []);
});

test("lines through one gap spread evenly over it", () => {
  const layout = layoutLayeredGraph({
    nodes: [
      { id: "a", layer: 0, rank: 0 }, { id: "b", layer: 0, rank: 1 }, { id: "c", layer: 0, rank: 2 }, { id: "d", layer: 0, rank: 3 },
      { id: "hub", layer: 1 }
    ],
    edges: [{ id: "a>hub", source: "a", target: "hub" }, { id: "b>hub", source: "b", target: "hub" }]
  }, { maxRows: 2 });
  const [c, d] = ["c", "d"].map((id) => boxes(layout).find((card) => card.id === id));
  const heightIn = (id) => {
    const numbers = pathNumbers(layout.edges.find((edge) => edge.id === id).path);
    assert.equal(numbers[7], numbers[13], `${id} crosses the lane on one height`);
    return numbers[7];
  };
  const middle = (c.bottom + d.top) / 2;
  assert.ok(Math.abs(heightIn("a>hub") - (middle - 4)) < 0.11, "The upper line sits above the middle of the gap");
  assert.ok(Math.abs(heightIn("b>hub") - (middle + 4)) < 0.11, "The lower line sits below it, as far apart as waypoints");
  assert.deepEqual(linesUnderCards(layout), []);
});

test("a line keeps off the waypoint runs of a lane it crosses", () => {
  // A long edge reserves a waypoint in the first lane; other lines must cross that lane on heights of their own.
  const lane = Array.from({ length: 6 }, (_, index) => ({ id: `m${index}`, layer: 1, rank: index }));
  const graph = {
    nodes: [
      ...lane, { id: "n", layer: 1, rank: 6 }, { id: "n2", layer: 1, rank: 7 }, { id: "n3", layer: 1, rank: 8 }, { id: "n4", layer: 1, rank: 9 },
      ...Array.from({ length: 8 }, (_, index) => ({ id: `left${index}`, layer: 0, rank: index })),
      ...Array.from({ length: 8 }, (_, index) => ({ id: `right${index}`, layer: 2, rank: index }))
    ],
    edges: Array.from({ length: 8 }, (_, index) => [
      { id: `through${index}`, source: `left${index}`, target: `right${index}` },
      { id: `into${index}`, source: `left${index}`, target: "n3" }
    ]).flat()
  };
  const layout = layoutLayeredGraph(graph, { maxRows: 6 });
  assert.ok(layout.columns.find((column) => column.layer === 1).lanes > 1, "The fixture wraps");
  assert.deepEqual(linesUnderCards(layout), []);
  let compared = 0;
  for (const runs of runsByLane(layout).values()) {
    runs.sort((left, right) => left.y - right.y);
    runs.slice(1).forEach((run, index) => {
      compared += 1;
      assert.ok(run.y - runs[index].y >= 2.9, `${run.edge.id} keeps ${runs[index].edge.id} apart`);
    });
  }
  assert.ok(compared > 5, "The fixture holds neighbouring runs");
});

test("unrelated lines never share a straight run on random graphs", () => {
  let runsSeen = 0;
  for (let seed = 1; seed <= 150; seed += 1) {
    const graph = randomGraph(seed, { maxNodes: 70 });
    const separate = layoutLayeredGraph(graph, { maxRows: 5, columnGap: 66, flatSide: (layer) => (layer < 0 ? "left" : "right") });
    for (const runs of runsByLane(separate).values()) {
      runs.sort((left, right) => left.y - right.y);
      runsSeen += runs.length;
      runs.slice(1).forEach((run, index) => assert.ok(run.y - runs[index].y >= 2.9, `seed ${seed}: ${run.edge.id} and ${runs[index].edge.id}`));
    }
    const shared = layoutLayeredGraph(graph, { maxRows: 5, columnGap: 72, laneGap: 26, rowGap: 14, sharedRuns: true });
    for (const runs of runsByLane(shared).values()) {
      runs.sort((left, right) => left.y - right.y);
      runs.slice(1).forEach((run, index) => {
        if (run.y - runs[index].y >= 2.9) return;
        const [a, b] = [run.edge, runs[index].edge];
        assert.ok(a.source === b.source || a.target === b.target, `seed ${seed}: only lines of one card may share a run, not ${a.id} and ${b.id}`);
      });
    }
  }
  assert.ok(runsSeen > 500, "The fixtures hold runs");
});

test("lines of one card may share a run across a wrapped lane, only when asked", () => {
  const leaves = Array.from({ length: 36 }, (_, index) => ({ id: `leaf${String(index).padStart(2, "0")}`, layer: 0, rank: index }));
  const graph = {
    nodes: [...leaves, { id: "hub", layer: 1 }],
    edges: leaves.map((leaf) => ({ id: `${leaf.id}>hub`, source: leaf.id, target: "hub" }))
  };
  // Straight runs of each line, by lane and height.
  const runs = (layout) => {
    const lines = new Map();
    for (const edge of layout.edges) {
      const numbers = pathNumbers(edge.path);
      for (let index = 6; index + 7 < numbers.length; index += 6) {
        if (numbers[index + 1] !== numbers[index + 7]) continue;
        if (!lines.has(numbers[index])) lines.set(numbers[index], []);
        lines.get(numbers[index]).push(numbers[index + 1]);
      }
    }
    return lines;
  };
  const separate = layoutLayeredGraph(graph, { maxRows: 6 });
  const shared = layoutLayeredGraph(graph, { maxRows: 6, sharedRuns: true });
  assert.deepEqual(shared.nodes, separate.nodes, "Sharing leaves the cards where they are");
  assert.ok(runs(separate).size > 0);
  for (const heights of runs(separate).values()) {
    const sorted = [...heights].sort((left, right) => left - right);
    sorted.forEach((height, index) => {
      if (index > 0) assert.ok(height - sorted[index - 1] >= 3.2, "By default every line keeps its own height");
    });
  }
  const sharing = [...runs(shared).values()].some((heights) => new Set(heights).size < heights.length);
  assert.ok(sharing, "Lines to one card may share a height");
  assert.deepEqual(linesUnderCards(separate), []);
  assert.deepEqual(linesUnderCards(shared), []);
  assert.ok(shared.height <= separate.height, "Sharing never needs more room");
});

test("same-column arcs bulge outward and nest without sharing ports", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "focus", layer: 0 }, { id: "a", layer: 1 }, { id: "b", layer: 1 }, { id: "c", layer: 1 }],
    edges: [
      { id: "focus>a", source: "focus", target: "a" }, { id: "focus>b", source: "focus", target: "b" },
      { id: "focus>c", source: "focus", target: "c" }, { id: "a>c", source: "a", target: "c" },
      { id: "b>c", source: "b", target: "c" }, { id: "c>a", source: "c", target: "a" }
    ]
  }, { flatSide: () => "right" });
  const right = Math.max(...layout.nodes.filter((node) => node.layer === 1).map((node) => node.x + node.width / 2));
  const flat = layout.edges.filter((edge) => edge.kind === "flat");
  assert.equal(flat.length, 3);
  for (const edge of flat) {
    assert.ok(pathNumbers(edge.path).some((value, index) => index % 2 === 0 && value > right), `${edge.id} bulges outward`);
  }
  const endpoints = flat.flatMap((edge) => [`${edge.start.x}:${edge.start.y}`, `${edge.end.x}:${edge.end.y}`]);
  assert.equal(new Set(endpoints).size, endpoints.length, "Every arc endpoint has its own port");
});

test("arcs of one card leave on the side they head for and never cross one another", () => {
  const nodes = ["a", "b", "c", "d", "e"].map((id, rank) => ({ id, layer: 0, rank, height: 96 }));
  const layout = layoutLayeredGraph({
    nodes,
    edges: [{ id: "c>a", source: "c", target: "a" }, { id: "c>b", source: "c", target: "b" }, { id: "c>d", source: "c", target: "d" }, { id: "c>e", source: "c", target: "e" }]
  }, { flatSide: () => "right" });
  const port = (id) => layout.edges.find((edge) => edge.id === id).start.y;
  assert.ok(port("c>a") < port("c>d") && port("c>b") < port("c>e"), "Arcs going up leave above arcs going down");
  assert.ok(port("c>b") < port("c>a"), "Of arcs going up, the farther leaves nearer the middle and passes outside");
  assert.ok(port("c>e") < port("c>d"), "Of arcs going down too");
  const arcs = Object.fromEntries(arcsOf(layout).map((arc) => [arc.id, arc]));
  assert.ok(arcs["c>a"].track > arcs["c>b"].track && arcs["c>e"].track > arcs["c>d"].track, "The farther arc takes the outer track");
  assert.ok(arcs["c>a"].high < arcs["c>d"].low, "An arc going up and one going down share no height");
});

test("two arcs between the same cards nest instead of crossing", () => {
  const layout = layoutLayeredGraph({
    nodes: [{ id: "a", layer: 0, rank: 0, height: 96 }, { id: "b", layer: 0, rank: 1, height: 96 }],
    edges: [{ id: "a>b", source: "a", target: "b" }, { id: "b>a", source: "b", target: "a" }]
  }, { flatSide: () => "right" });
  const [first, second] = arcsOf(layout).sort((left, right) => left.low - right.low);
  assert.ok(first.low < second.low && first.high > second.high, "One lies inside the other");
  assert.ok(first.track > second.track, "and on the inner track");
});

test("arcs that overlap keep separate tracks in every gap on random graphs", () => {
  let compared = 0;
  for (let seed = 1; seed <= 120; seed += 1) {
    const layout = layoutLayeredGraph(randomGraph(seed, { maxNodes: 60 }), { maxRows: seed % 2 ? 6 : 200, columnGap: 66, flatSide: (layer) => (layer < 0 ? "left" : "right") });
    assert.deepEqual(linesUnderCards(layout), [], `seed ${seed}`);
    const arcs = arcsOf(layout);
    for (let left = 0; left < arcs.length; left += 1) {
      for (let right = left + 1; right < arcs.length; right += 1) {
        const [a, b] = [arcs[left], arcs[right]];
        if (a.side !== b.side || Math.abs(a.track - b.track) > 200 || a.low >= b.high || b.low >= a.high) continue;
        compared += 1;
        assert.ok(a.track !== b.track, `seed ${seed}: ${a.id} and ${b.id} share a track`);
        // A contained arc lies inside the arc that holds it.
        if (a.low < b.low && a.high > b.high) assert.ok((a.track - b.track) * a.side > 0, `seed ${seed}: ${b.id} lies inside ${a.id}`);
        if (b.low < a.low && b.high > a.high) assert.ok((b.track - a.track) * b.side > 0, `seed ${seed}: ${a.id} lies inside ${b.id}`);
      }
    }
  }
  assert.ok(compared > 100, "The fixtures hold overlapping arcs");
});

test("in a crowded gap beside a short lane long arcs pass beyond its cards", () => {
  const column = Array.from({ length: 22 }, (_, index) => ({ id: `m${String(index).padStart(2, "0")}`, layer: 1, rank: index }));
  // Long arcs from the top of the column to its bottom, all of them spanning the short lane; maxRows wraps one card off.
  const edges = Array.from({ length: 8 }, (_, top) => Array.from({ length: 4 }, (__, bottom) => ({
    id: `arc${top}-${bottom}`, source: column[top].id, target: column[20 - bottom].id
  }))).flat();
  const layout = layoutLayeredGraph({ nodes: column, edges }, { maxRows: 21, laneGap: 40, flatSide: () => "right" });
  const cards = boxes(layout);
  const lane = (index) => layout.nodes.filter((node) => node.lane === index);
  const [firstRight, secondRight] = [0, 1].map((index) => Math.max(...lane(index).map((node) => node.x + node.width / 2)));
  assert.equal(lane(1).length, 1, "The second lane holds one card");
  assert.deepEqual(linesUnderCards(layout), []);
  const arcs = arcsOf(layout);
  const beyond = arcs.filter((arc) => arc.track > secondRight);
  const near = arcs.filter((arc) => arc.track <= firstRight + 40 - 8 + 0.5);
  assert.ok(beyond.length > 0, "Long arcs go around the short lane");
  assert.equal(beyond.length + near.length, arcs.length, "No arc ends on a track in the card's way");
  const tracks = near.filter((arc) => arc.low < cards.find((card) => card.id === lane(1)[0].id).top && arc.high > cards.find((card) => card.id === lane(1)[0].id).bottom).map((arc) => arc.track).sort((left, right) => left - right);
  tracks.slice(1).forEach((track, index) => assert.ok(track - tracks[index] >= 2.5, "The arcs left in the gap stay readable"));
  for (const edge of layout.edges) {
    for (const { x, y } of drawnPoints(edge.path)) assert.ok(x >= 0 && x <= layout.width && y >= 0 && y <= layout.height, `${edge.id} stays on the canvas`);
  }

  // The arcs of the short lane itself keep inside those passing beyond it.
  const withOwn = layoutLayeredGraph({
    nodes: [...column, { id: "x0", layer: 1, rank: 21 }, { id: "x1", layer: 1, rank: 22 }],
    edges: [...edges, { id: "own", source: "x0", target: "x1" }]
  }, { maxRows: 21, laneGap: 40, flatSide: () => "right" });
  const own = arcsOf(withOwn).find((arc) => arc.id === "own");
  const around = arcsOf(withOwn).filter((arc) => arc.id !== "own" && arc.track > own.track - 40 && arc.low < own.low && arc.high > own.high);
  assert.ok(around.every((arc) => arc.track > own.track), "An arc passing beyond a lane stays outside that lane's arcs");
});

test("a steep curve between two lanes keeps a real angle at its arrowhead", () => {
  const leaves = Array.from({ length: 24 }, (_, index) => ({ id: `n${String(index).padStart(2, "0")}`, layer: 0, rank: index }));
  const edges = leaves.slice(0, 12).map((leaf, index) => ({ id: `e${index}`, source: leaf.id, target: leaves[23 - index].id }));
  const layout = layoutLayeredGraph({ nodes: leaves, edges }, { maxRows: 12 });
  const lanes = layout.edges.filter((edge) => edge.kind !== "flat");
  assert.ok(lanes.length > 6, "The lines run from one lane to the next");
  for (const edge of lanes) {
    const off = Math.min(Math.abs(edge.arrow.angle), Math.abs(180 - Math.abs(edge.arrow.angle)));
    assert.ok(off < 82, `${edge.id} does not slide along the card (${off})`);
  }
  // Lines turn at different places rather than all in the middle of the gap.
  const turns = new Set(lanes.map((edge) => pathNumbers(edge.path)[2]));
  assert.ok(turns.size > lanes.length / 2, "They spread over the gap");
});

test("steep curves between two columns turn at different places, unless lines may share runs", () => {
  const targets = Array.from({ length: 10 }, (_, index) => ({ id: `b${index}`, layer: 1, rank: index }));
  const nodes = [{ id: "a0", layer: 0, rank: 0 }, { id: "a1", layer: 0, rank: 1 }, ...targets];
  const edges = targets.flatMap(({ id }) => ["a0", "a1"].map((source) => ({ id: `${source}-${id}`, source, target: id })));
  const steepTurns = (options) => layoutLayeredGraph({ nodes, edges }, options).edges.flatMap((edge) => {
    const [startX, startY, turn, , , , endX, endY] = pathNumbers(edge.path);
    return Math.abs(endY - startY) >= 0.9 * (endX - startX) ? [turn] : [];
  });
  const turns = steepTurns({});
  assert.ok(turns.length >= 8, "The fixture has steep curves");
  assert.equal(new Set(turns).size, turns.length, `Each has its own turn: ${turns.join(", ")}`);
  const shared = steepTurns({ sharedRuns: true });
  assert.ok(new Set(shared).size < shared.length, "With shared runs they keep the middle of the gap");
});

test("barycentre ordering removes avoidable crossings and the result is deterministic", () => {
  const graph = {
    nodes: [
      { id: "p1", layer: 0, rank: 0 }, { id: "p2", layer: 0, rank: 1 }, { id: "p3", layer: 0, rank: 2 },
      { id: "c1", layer: 1, rank: 0 }, { id: "c2", layer: 1, rank: 1 }, { id: "c3", layer: 1, rank: 2 }
    ],
    edges: [
      { id: "1", source: "p1", target: "c3" }, { id: "2", source: "p2", target: "c2" }, { id: "3", source: "p3", target: "c1" }
    ]
  };
  const first = layoutLayeredGraph(graph);
  assert.equal(first.crossings, 0);
  assert.deepEqual(layoutLayeredGraph(structuredClone(graph)), first);
});

test("tall columns wrap into lanes that keep every card separated", () => {
  const nodes = [{ id: "hub", layer: 1 }, ...Array.from({ length: 40 }, (_, index) => ({ id: `leaf-${String(index).padStart(2, "0")}`, layer: 0 }))];
  const edges = nodes.slice(1).map((node) => ({ id: `${node.id}>hub`, source: node.id, target: "hub" }));
  const layout = layoutLayeredGraph({ nodes, edges }, { maxRows: 12 });
  assert.equal(layout.columns.find((column) => column.layer === 0).lanes, 4);
  assertSeparated(layout, "wrapped fixture");
  assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)));
});

test("cards of different heights stay separated, in one lane and across wrapped lanes", () => {
  const nodes = Array.from({ length: 12 }, (_, index) => ({ id: `n${index}`, layer: 0, height: 64 + (index % 4) * 16 }));
  assertSeparated(layoutLayeredGraph({ nodes, edges: [] }), "one lane");
  assertSeparated(layoutLayeredGraph({ nodes, edges: [] }, { maxRows: 4 }), "wrapped lanes");
  const tall = layoutLayeredGraph({ nodes, edges: [] }).nodes.find((node) => node.id === "n3");
  assert.equal(tall.height, 112, "A card keeps the height its caller asks for");
});

test("longest-path layering orders a technical subgraph and breaks cycles deterministically", () => {
  const layers = longestPathLayers(["a", "b", "c", "d"], [
    { id: "1", source: "a", target: "b" }, { id: "2", source: "b", target: "c" },
    { id: "3", source: "a", target: "c" }, { id: "4", source: "c", target: "a" }, { id: "5", source: "d", target: "d" }
  ]);
  assert.deepEqual(Object.fromEntries(layers), { a: 0, b: 1, c: 2, d: 0 });
});

test("a source that feeds only a deep record moves next to it instead of stretching a long edge", () => {
  const layers = longestPathLayers(["context", "process", "definition", "late"], [
    { id: "1", source: "context", target: "process" }, { id: "2", source: "process", target: "definition" },
    { id: "3", source: "late", target: "definition" }
  ]);
  assert.deepEqual(Object.fromEntries(layers), { context: 0, process: 1, definition: 2, late: 1 });
});

test("every real arising neighbourhood lays out with separated cards and finite routes", async () => {
  const [nodes, edges] = await Promise.all([json("model/nodes.json"), json("model/edges.json")]);
  const view = createModelView({ nodes, edges });
  const arisings = nodes.filter((node) => node.layer === "arising");
  let checked = 0;
  let wrapped = 0;
  for (const focus of arisings) {
    for (const depth of [1, 2, 3]) {
      const projection = view.neighborhood({ focusId: focus.id, depth, direction: "both", maxNodes: 72, maxEdges: 260 });
      const layers = neighbourhoodLayers(projection);
      const layout = layoutLayeredGraph({
        nodes: projection.nodes.map((node) => ({ id: node.id, layer: layers.get(node.id) })),
        edges: projection.edges
      }, { maxRows: 24 });
      assertSeparated(layout, `${focus.id} depth ${depth}`);
      assert.ok(layout.edges.every((edge) => !/NaN|Infinity/.test(edge.path)), `${focus.id}: finite routes`);
      const ports = layout.edges.flatMap((edge) => [`${edge.start.x}:${edge.start.y}`, `${edge.end.x}:${edge.end.y}`]);
      assert.equal(new Set(ports).size, ports.length, `${focus.id} depth ${depth}: every edge end has its own port`);
      assert.deepEqual(linesUnderCards(layout), [], `${focus.id} depth ${depth}: no line passes under a card it does not belong to`);
      if (layout.columns.some((column) => column.lanes > 1)) wrapped += 1;
      checked += 1;
      // No stack of arcs on one track, and no two unrelated lines on one straight run.
      const arcs = arcsOf(layout);
      for (const arc of arcs) {
        const sharing = arcs.filter((other) => other.side === arc.side && Math.abs(other.track - arc.track) < 0.5 && other.low < arc.high && arc.low < other.high);
        assert.ok(sharing.length <= 2, `${focus.id} depth ${depth}: ${sharing.length} arcs on the track of ${arc.id}`);
      }
      for (const runs of runsByLane(layout).values()) {
        runs.sort((left, right) => left.y - right.y);
        runs.slice(1).forEach((run, index) => assert.ok(run.y - runs[index].y >= 2.9, `${focus.id} depth ${depth}: ${run.edge.id} on the run of ${runs[index].edge.id}`));
      }
    }
  }
  assert.equal(checked, arisings.length * 3);
  assert.ok(wrapped > 50, "Real neighbourhoods include wrapped columns");
});

test("the Studio shares runs only in the subgraph, where every line looks the same", async () => {
  const appSource = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  assert.equal(appSource.match(/sharedRuns: true/g)?.length, 1);
  const subgraph = appSource.slice(appSource.search(/^function renderSubgraph\(/m));
  assert.match(subgraph.slice(0, subgraph.indexOf("\nfunction ")), /sharedRuns: true/);
});

test("every arising has a lineage of arising-role causes from the root", async () => {
  const appSource = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const declaration = (name) => {
    const start = appSource.search(new RegExp(`^function ${name}\\(`, "m"));
    assert.ok(start >= 0, `Missing app function: ${name}`);
    const end = appSource.indexOf("\nfunction ", start + 1);
    return appSource.slice(start, end);
  };
  const { arisingLineages } = (await import(`data:text/javascript,${encodeURIComponent(
    ["arisingCode", "codeKey", "compareCodes", "arisingLineages"].map(declaration).join("\n") + "\nexport { arisingLineages };"
  )}`));
  const [nodes, edges] = await Promise.all([json("model/nodes.json"), json("model/edges.json")]);
  const arisings = nodes.filter((node) => node.layer === "arising");
  const ids = new Set(arisings.map((node) => node.id));
  const causes = edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target));
  const { root, predecessor } = arisingLineages(arisings, causes);
  assert.equal(root, "arising:0.15", "The root is the arising without a cause inside the graph");
  assert.equal(predecessor.size, arisings.length - 1, "Every other arising is reached through arising-role causes");
  for (const node of arisings) {
    if (node.id === root) continue;
    const chain = [];
    for (let edge = predecessor.get(node.id); edge; edge = predecessor.get(edge.source)) chain.unshift(edge);
    assert.equal(chain[0].source, root, `${node.id} traces back to the root`);
    assert.equal(chain.at(-1).target, node.id);
    assert.ok(chain.every((edge) => edge.role === "arising" && edge.relationLayer === "causal"), `${node.id}: arising-role causes only`);
  }
});

test("the Fenwick crossing count equals a pairwise count on random columns", async () => {
  const { crossingCount } = await import("../../apps/model-studio/graph-layout.js");
  let seed = 7;
  const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (let round = 0; round < 60; round += 1) {
    const upper = Array.from({ length: 1 + Math.floor(random() * 12) }, (_, index) => ({ id: `u${index}` }));
    const lower = Array.from({ length: 1 + Math.floor(random() * 12) }, (_, index) => ({ id: `l${index}` }));
    const links = new Map(upper.map((item) => [item.id, lower.filter(() => random() < 0.35)]));
    const pairs = [];
    upper.forEach((item, upperIndex) => {
      for (const neighbour of links.get(item.id)) pairs.push([upperIndex, lower.indexOf(neighbour)]);
    });
    let expected = 0;
    for (let left = 0; left < pairs.length; left += 1) {
      for (let right = 0; right < pairs.length; right += 1) {
        if (pairs[left][0] < pairs[right][0] && pairs[left][1] > pairs[right][1]) expected += 1;
      }
    }
    assert.equal(crossingCount(upper, lower, links), expected, `round ${round}`);
  }
});
