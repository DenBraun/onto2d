import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { connection, matchNames } from "../../apps/model-studio/graph-paths.js";
import { releaseVersion } from "./model-studio-source.mjs";

const edge = (source, target, status = "author-hypothesis", id = `${source}>${target}`) => ({ id, source, target, status });

test("a chain takes the fewest steps", () => {
  const path = connection([edge("a", "b"), edge("b", "c"), edge("c", "d"), edge("b", "d")], "a", "d");
  assert.deepEqual(path.columns, ["a", "b", "d"]);
  assert.equal(path.steps, 2);
});

test("a chain then takes the fewest author-hypothesis links", () => {
  const edges = [edge("a", "b"), edge("b", "d"), edge("a", "c", "supported"), edge("c", "d", "model-supported")];
  const path = connection(edges, "a", "d");
  assert.deepEqual(path.columns, ["a", "c", "d"]);
  assert.equal(path.hypotheses, 0);
});

test("a chain prefers the better of two parallel links", () => {
  const path = connection([edge("a", "b", "author-hypothesis", "1"), edge("a", "b", "supported", "2")], "a", "b");
  assert.deepEqual(path.edges.map(({ id }) => id), ["2"]);
});

test("a chain follows direction and survives cycles", () => {
  assert.equal(connection([edge("a", "b")], "b", "a").kind, "backward");
  assert.equal(connection([edge("a", "b")], "a", "a").kind, "none");
  assert.deepEqual(connection([edge("a", "b"), edge("b", "a"), edge("b", "c")], "a", "c").columns, ["a", "b", "c"]);
});

test("connection tries a to b, then b to a", () => {
  const forward = connection([edge("a", "b")], "a", "b");
  assert.equal(forward.kind, "forward");
  assert.deepEqual(forward.columns, ["a", "b"]);
  const backward = connection([edge("b", "x"), edge("x", "a")], "a", "b");
  assert.equal(backward.kind, "backward");
  assert.deepEqual(backward.columns, ["b", "x", "a"], "A chain always reads from its cause");
});

test("connection finds the nearest common cause and keeps true directions", () => {
  const edges = [edge("far", "c"), edge("c", "m"), edge("m", "a"), edge("c", "b"), edge("far", "a"), edge("far", "z"), edge("z", "y"), edge("y", "b")];
  const found = connection(edges, "a", "b");
  assert.equal(found.kind, "common-cause");
  assert.equal(found.steps, 3);
  assert.equal(found.cause, "c", "c and far are both 3 steps away from the two; equal evidence, so the name decides");
  assert.deepEqual(found.columns, ["a", "m", "c", "b"]);
  assert.deepEqual(found.edges.map(({ id }) => id), ["m>a", "c>m", "c>b"]);
  for (const item of found.edges) assert.equal(item, edges.find(({ id }) => id === item.id), "Edges stay as they are");
});

test("connection between common causes prefers evidence over the name", () => {
  const edges = [edge("p", "a"), edge("p", "b"), edge("q", "a", "supported"), edge("q", "b", "supported")];
  assert.equal(connection(edges, "a", "b").cause, "q");
});

test("connection reports when nothing joins the two", () => {
  const found = connection([edge("a", "x"), edge("b", "y")], "a", "b");
  assert.equal(found.kind, "none");
  assert.deepEqual(found.columns, ["a", "b"]);
  assert.deepEqual(found.edges, []);
});

test("matchNames ranks a name start first and stops at the limit", () => {
  const items = ["Cell Death", "Dead Cell Removal", "Excellent", "Other"].map((name) => ({ name }));
  assert.deepEqual(matchNames(items, "cell").map(({ name }) => name), ["Cell Death", "Dead Cell Removal", "Excellent"]);
  assert.deepEqual(matchNames(items, "").map(({ name }) => name), []);
  assert.equal(matchNames(items, "e", 2).length, 2);
});

const dataRoot = new URL("../../apps/model-studio/data/causal-emergence/", import.meta.url);
const graph = JSON.parse(readFileSync(new URL(`${releaseVersion}/graph.json`, dataRoot), "utf8"));

test("Over the real causes: every chain walks real edges, and two arisings are always told apart", () => {
  const isArising = (id) => id.startsWith("arising:");
  const causes = graph.edges.filter((item) => isArising(item.source) && isArising(item.target));
  assert.equal(causes.length, 1085);
  const ids = [...new Set(causes.flatMap((item) => [item.source, item.target]))].sort();
  const kinds = { forward: 0, backward: 0, "common-cause": 0, none: 0 };
  let longest = 0;
  for (let index = 0; index < ids.length; index += 7) {
    const a = ids[index];
    const b = ids[(index * 13 + 101) % ids.length];
    if (a === b) continue;
    const found = connection(causes, a, b);
    kinds[found.kind] += 1;
    longest = Math.max(longest, found.columns.length);
    assert.equal(found.steps, found.edges.length);
    assert.equal(found.hypotheses, found.edges.filter((item) => item.status === "author-hypothesis").length);
    if (found.kind !== "none") assert.equal(found.columns.length, found.edges.length + 1);
    for (let step = 0; step < found.edges.length; step += 1) {
      const ends = [found.edges[step].source, found.edges[step].target];
      assert.ok(ends.includes(found.columns[step]) && ends.includes(found.columns[step + 1]), "Each edge joins two adjacent columns");
    }
    if (found.kind === "forward") assert.ok(found.edges.every((item, step) => item.source === found.columns[step]));
    if (found.kind === "common-cause") assert.equal(new Set(found.columns).size, found.columns.length, "The two chains share only the cause");
  }
  assert.ok(kinds.forward + kinds.backward > 0);
  assert.ok(longest >= 3);
});
