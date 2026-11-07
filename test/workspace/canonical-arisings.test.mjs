import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { compileCanonicalGraph } from "../../models/causal-emergence/canonical/build.mjs";
import { ARISING_ROOT, CATALOGUE_ONLY_OBLIGATION, PENDING_ARISING_QUESTIONS, PLACEHOLDER_OBLIGATION, causalCompleteness } from "../../models/causal-emergence/canonical/arisings.mjs";
import { syncArisings } from "../../models/causal-emergence/canonical/sync-arisings.mjs";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const data = await loadCanonicalSource();
const { graph } = data;
const arisings = new Map(graph.arisings.map((arising) => [arising.id, arising]));
const reject = (mutate, pattern) => {
  const changed = structuredClone(data);
  mutate(changed);
  assert.throws(() => validateCanonicalSource(changed), pattern);
};
const cause = (d, id) => d.graph.causes.find((record) => record.id === id);
// A cause between two Level-2 arisings that is still an author hypothesis, for the mutation checks.
const OPEN = graph.causes.find((record) => record.status === "author-hypothesis" && record.parent.startsWith("arising:2.") && record.child.startsWith("arising:2.")).id;
const arising = (d, id) => d.graph.arisings.find((record) => record.id === id);

test("the ontological layer is the author's catalogue with one root and an arising cause for every other arising", () => {
  assert.equal(graph.arisings.length, data.arisingCatalogue.arisings.length);
  assert.equal(graph.causes.length, data.arisingCatalogue.arisings.reduce((sum, card) => sum + card.Parents.length, 0));
  const parents = new Map(graph.arisings.map((record) => [record.id, []]));
  for (const record of graph.causes) parents.get(record.child).push(record);
  assert.deepEqual([...parents].filter(([, list]) => list.length === 0).map(([id]) => id), [ARISING_ROOT]);
  for (const [id, list] of parents) if (id !== ARISING_ROOT) assert.ok(list.some((record) => record.ontologicalRole === "arising"), id);
  for (const record of graph.causes) {
    assert.equal(record.weight, null);
    assert.deepEqual([record.carrier.nMin, record.carrier.nCrit, record.carrier.nSat], [null, null, null]);
    assert.ok(["supported", "model-supported", "author-hypothesis"].includes(record.status));
    if (record.status === "author-hypothesis") assert.ok(record.openObligations.length);
  }
});

test("every technical record belongs to exactly one arising on its own level", () => {
  const home = new Map();
  const levels = new Map([...graph.entities.map((entity) => [entity.id, entity.level]), ...graph.rules.map((rule) => [rule.id, 0])]);
  for (const record of graph.arisings) for (const id of record.memberIds) {
    assert.ok(!home.has(id), id);
    assert.equal(levels.get(id), record.level, id);
    home.set(id, record.id);
  }
  assert.equal(home.size, levels.size);
  for (const record of graph.arisings) for (const id of record.anchorIds) assert.equal(home.get(id), record.id);
});

test("the catalogue declares its root, principles and loops as current state, without a change log", () => {
  const catalogue = data.arisingCatalogue;
  assert.equal(catalogue.root.code, "0.15");
  assert.ok(catalogue.root.statement.length > 0);
  assert.ok(catalogue.principles.some((principle) => principle.level === 0 && principle.statement.length > 0));
  for (const loop of catalogue.coArisingLoops ?? []) for (const code of loop.members) assert.ok(arisings.has(`arising:${code}`), code);
  assert.equal(catalogue.authorDecisions, undefined);
  for (const record of graph.causes) assert.deepEqual(record.sourceCoordinates, [{ sourceId: "arising-catalogue", locator: "Complete catalogue" }], record.id);
  assert.deepEqual(PENDING_ARISING_QUESTIONS, []);
});

test("status and evidence coverage are kept apart", () => {
  for (const record of graph.arisings) {
    const restsOnCatalogue = ["established", "well-supported"].includes(record.status) && record.evidenceCoverage !== "published-findings";
    assert.equal(record.openObligations.some((text) => text.startsWith("The subgraph holds no published findings")), restsOnCatalogue, record.id);
  }
  const completeness = causalCompleteness(arisings.get("arising:3.0"), graph.causes);
  assert.deepEqual(completeness.openSlots, []);
  // The root's cause lies beyond the graph: its requirement is not an open slot.
  assert.deepEqual(causalCompleteness(arisings.get(ARISING_ROOT), graph.causes),
    { mustCover: [0], covered: [], supported: [], openSlots: [], beyondGraph: [0] });
});

test("the arising layer cannot be edited away from the catalogue, the evidence rules or its invariants", () => {
  for (const [mutate, pattern] of [
    [(d) => { arising(d, "arising:2.3").name = "Renamed arising"; }, /catalogue/],
    [(d) => { arising(d, "arising:2.3").status = "speculative"; }, /catalogue/],
    [(d) => { cause(d, OPEN).weight = 0.5; }, /weight/],
    [(d) => { cause(d, OPEN).carrier.nMin = 2; }, /Carrier counts/],
    [(d) => { cause(d, OPEN).status = "supported"; }, /published evidence/],
    [(d) => { const c = cause(d, OPEN); c.ontologicalRole = c.ontologicalRole === "modulation" ? "arising" : "modulation"; }, /catalogue/],
    [(d) => { d.graph.causes = d.graph.causes.filter((record) => record.id !== OPEN); }, /parent relations/],
    [(d) => { const a = arising(d, "arising:2.3"); const b = arising(d, "arising:3.0"); b.memberIds = [...b.memberIds, a.memberIds.pop()].sort(); }, /not on the level/],
    [(d) => { const a = arising(d, "arising:2.3"); const b = arising(d, "arising:2.2"); const anchor = a.anchorIds[0];
      a.memberIds = a.memberIds.filter((id) => id !== anchor); b.memberIds = [...b.memberIds, anchor].sort(); }, /Anchor outside the subgraph/],
    [(d) => { arising(d, "arising:2.3").memberIds.reverse(); }, /canonical order/],
    [(d) => { arising(d, "arising:2.3").memberIds.pop(); }, /without an arising/],
    [(d) => { arising(d, "arising:2.3").evidenceCoverage = "author-definitions"; }, /coverage/],
    [(d) => {
      // A new arising-role relation from 2.3 back to 2.2 closes a loop that no declaration covers.
      const card = d.arisingCatalogue.arisings.find((x) => x.Code === "2.2");
      const entry = { ...card.Parents[0], ParentCode: "2.3", OntologicalRole: "arising" };
      card.Parents = [...card.Parents, entry];
      d.graph.causes.push({ ...cause(d, d.graph.causes.find((x) => x.child === "arising:2.2").id), id: "cause:2.3>2.2", parent: "arising:2.3",
        causalDirections: entry.CausalDirections, interactionModes: entry.InteractionModes, dependencyType: entry.DependencyType,
        necessity: entry.Necessity, ontologicalRole: "arising" });
    }, /Undeclared arising cycle/],
    [(d) => {
      // An arising cannot condition itself, in any role.
      const card = d.arisingCatalogue.arisings.find((x) => x.Code === "2.3");
      const entry = { ...card.Parents[0], ParentCode: "2.3", OntologicalRole: "modulation" };
      card.Parents = [...card.Parents, entry];
      d.graph.causes.push({ ...cause(d, d.graph.causes.find((x) => x.child === "arising:2.3").id), id: "cause:2.3>2.3", parent: "arising:2.3",
        causalDirections: entry.CausalDirections, interactionModes: entry.InteractionModes, dependencyType: entry.DependencyType,
        necessity: entry.Necessity, ontologicalRole: "modulation", status: "author-hypothesis", claimIds: [], openObligations: ["x"] });
    }, /two distinct arisings/],
    [(d) => {
      const [parentCode, childCode] = OPEN.slice("cause:".length).split(">");
      const entry = d.arisingCatalogue.arisings.find((x) => x.Code === childCode).Parents.find((x) => x.ParentCode === parentCode);
      entry.ParentCode = "9.99";
      Object.assign(cause(d, OPEN), { id: `cause:9.99>${childCode}`, parent: "arising:9.99" });
    }, /parent outside the catalogue/],
    [(d) => { d.graph.arisings.find((x) => x.evidenceCoverage === "published-findings").openObligations.push(CATALOGUE_ONLY_OBLIGATION); }, /rests on the catalogue alone/],
    [(d) => { d.graph.arisings.find((x) => x.status !== "methodological-placeholder").openObligations.push(PLACEHOLDER_OBLIGATION); }, /placeholder states its missing test/],
    [(d) => { delete d.arisingCatalogue.root; }, /root's own cause lies beyond the graph/],
    [(d) => { d.arisingCatalogue.principles.push(structuredClone(d.arisingCatalogue.principles[0])); }, /Duplicate catalogue declaration/],
    [(d) => { d.arisingCatalogue.clusters[0].domain = "unknown-domain"; }, /Cluster outside its domain/],
    [(d) => { d.arisingCatalogue.arisings[0].Cluster = d.arisingCatalogue.clusters.find((x) => x.level !== d.arisingCatalogue.arisings[0].Level).id; }, /cluster of its level/],
    [(d) => { d.arisingVocabulary.dependencyTypes.pop(); }, /dependency type|vocabulary/i]
  ]) reject(mutate, pattern);
});

test("the release exposes arisings as the outer layer and keeps the technical layer inside them", () => {
  const pack = compileCanonicalGraph(data, {}, [{ path: "arisings-fixture.json", hash: `sha256:${"0".repeat(64)}` }]);
  const nodes = pack.files["model/nodes.json"];
  const edges = pack.files["model/edges.json"];
  assert.equal(nodes.filter((node) => node.layer === "arising").length, graph.arisings.length);
  assert.equal(edges.filter((edge) => edge.relationLayer === "causal").length, graph.causes.length);
  const arisingIds = new Set(nodes.filter((node) => node.layer === "arising").map((node) => node.id));
  for (const node of nodes.filter((entry) => entry.layer !== "arising")) {
    assert.equal(node.layer, "technical");
    assert.ok(arisingIds.has(node.arisingId), node.id);
  }
  for (const edge of edges.filter((entry) => entry.relationLayer === "causal")) assert.ok(arisingIds.has(edge.source) && arisingIds.has(edge.target));
  const presentation = pack.files["model/dictionaries.json"].presentation;
  assert.deepEqual(presentation.defaults, { layer: "arising", focusId: ARISING_ROOT });
  assert.match(presentation.boundary.note, new RegExp(`^${graph.arisings.length} arisings joined by ${graph.causes.length} causes; ${graph.entities.length + graph.rules.length} technical records`));
  const table = presentation.arisingTable;
  assert.equal(table.layer, "arising");
  assert.equal(table.levels.length, 14);
  assert.equal(table.phases.length, 4);
  assert.deepEqual(table.domains.map((domain) => domain.value), data.arisingCatalogue.domains.map((domain) => domain.id));
  for (const node of nodes.filter((entry) => entry.layer === "arising")) assert.ok(node.cluster && node.domain, node.id);
});

test("the graph mirrors the arising catalogue exactly, keeping subgraphs and cause evidence", async () => {
  const files = ["references/canonical/graph.json", "references/canonical/arising-vocabulary.json", "references/canonical/arising-catalogue.json"];
  const [graphText, vocabularyText, catalogueText] = await Promise.all(files.map((file) => readFile(new URL(`../../${file}`, import.meta.url), "utf8")));
  const sha = (text) => createHash("sha256").update(text).digest("hex");
  const synced = syncArisings({ graph: JSON.parse(graphText), vocabulary: JSON.parse(vocabularyText), catalogue: JSON.parse(catalogueText),
    hashes: { [files[1]]: sha(vocabularyText), [files[2]]: sha(catalogueText) } });
  assert.equal(`${JSON.stringify(synced, null, 2)}\n`, graphText, "Run node models/causal-emergence/canonical/sync-arisings.mjs after editing the catalogue");
});
