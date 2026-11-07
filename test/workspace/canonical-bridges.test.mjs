import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { BRIDGE_RECORDS, BRIDGE_ROLES, isReviewedBridgeRelation } from "../../models/causal-emergence/canonical/bridges.mjs";

const data = await loadCanonicalSource();
const { graph } = data;
const entities = new Map(graph.entities.map((entity) => [entity.id, entity]));
const claims = new Map(graph.claims.map((claim) => [claim.id, claim]));
const sources = new Map(graph.sources.map((source) => [source.id, source]));
const bridges = graph.relations.filter((relation) => relation.id.startsWith("bridge:"));
const reject = (mutate, pattern) => {
  const changed = structuredClone(data);
  mutate(changed);
  assert.throws(() => validateCanonicalSource(changed), pattern);
};
const bridgeAt = (d, index = 0) => d.graph.relations.find((relation) => relation.id === bridges[index].id);
const claimOf = (d, relation) => d.graph.claims.find((claim) => claim.id === relation.claimIds[0]);

function components(relations) {
  const parent = new Map([...graph.entities, ...graph.rules].map((record) => [record.id, record.id]));
  const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
  const join = (a, b) => parent.set(find(a), find(b));
  for (const relation of relations) join(relation.source, relation.target);
  for (const rule of graph.rules) {
    for (const input of rule.inputs) join(input.entityId, rule.id);
    for (const id of rule.outputEntityIds) join(rule.id, id);
  }
  return new Set([...parent.keys()].map(find)).size;
}

test("every bridge is an exact reviewed descriptive record with its own read evidence", () => {
  assert.ok(bridges.length > 0);
  assert.equal(bridges.length, BRIDGE_RECORDS.relations.length);
  for (const relation of bridges) {
    assert.ok(isReviewedBridgeRelation(relation));
    assert.equal(relation.kind, "descriptive");
    assert.ok(BRIDGE_ROLES.includes(relation.role));
    assert.ok(entities.has(relation.source) && entities.has(relation.target));
    const claim = claims.get(relation.claimIds[0]);
    assert.ok(["definition", "method-contract"].includes(claim.status));
    assert.deepEqual(claim.checkIds, []);
    for (const citation of claim.citations) assert.ok(sources.get(citation.sourceId).review.locators.includes(citation.locator));
  }
});

test("bridges join evidence islands without replacing their preparations", () => {
  const ordinary = graph.relations.filter((relation) => !relation.id.startsWith("bridge:"));
  assert.ok(components(graph.relations) < components(ordinary));
  for (const relation of bridges.filter((r) => r.contextIds)) {
    assert.deepEqual(relation.contextIds, claims.get(relation.claimIds[0]).contextIds);
  }
});

test("bridges cannot be added, promoted, re-pointed or detached from their reading", () => {
  const first = bridges[0];
  for (const [mutate, pattern] of [
    [(d) => d.graph.relations.push({ ...structuredClone(bridgeAt(d)), id: "bridge:unreviewed-copy" }), /bridge|Unreviewed/i],
    [(d) => { bridgeAt(d).kind = "functional-support"; bridgeAt(d).role = "scoped-operating-support"; }, /./],
    [(d) => { bridgeAt(d).assertion = "This bridge establishes that the source level constructs the target level."; }, /Bridge relations changed|Unreviewed/],
    [(d) => { bridgeAt(d).target = first.source === "l0:omega" ? "l0:distinction" : "l0:omega"; }, /./],
    [(d) => { claimOf(d, bridgeAt(d)).status = "publication-supported"; }, /./],
    [(d) => { claimOf(d, bridgeAt(d)).citations[0].locator = "An unread passage"; }, /./],
    [(d) => { claimOf(d, bridgeAt(d)).checkIds = ["objecthood-negative"]; }, /./],
    [(d) => { d.graph.relations = d.graph.relations.filter((relation) => relation.id !== first.id); }, /Unreviewed bridge|changed/],
    [(d) => { d.graph.entities[0].claimIds.push(first.claimIds[0]); }, /./]
  ]) reject(mutate, pattern);
});

test("an unreviewed cross-domain relation is still rejected by the domain ledgers", () => {
  const cell = graph.entities.find((entity) => entity.id.startsWith("cell:"));
  const org = graph.entities.find((entity) => entity.id.startsWith("org:"));
  reject((d) => d.graph.relations.push({ id: "organismal:unreviewed-bridge", source: cell.id, target: org.id, kind: "descriptive",
    role: "definition-dependency", assertion: "An unreviewed cross-domain dependency.", claimIds: [org.claimIds[0]] }), /Unreviewed/);
});
