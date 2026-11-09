import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import { citesEvidence, openWork } from "../../apps/model-studio/open-work.js";
import { releaseVersion } from "./model-studio-source.mjs";

const root = new URL("../../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const studio = read("apps/model-studio/model-studio.js");

const arisings = [
  { id: "a", level: 0, domain: "x", scientificStatus: "hypothesized" },
  { id: "b", level: 1, domain: "x", scientificStatus: "established" },
  { id: "c", level: 1, domain: "y", scientificStatus: "well-supported" },
  { id: "d", level: 2, domain: "y", scientificStatus: "established" }
];
const edge = (id, source, target, status) => ({ id, source, target, status });
const causes = new Map([
  ["b", [edge("ab", "a", "b", "author-hypothesis"), edge("cb", "c", "b", "author-hypothesis")]],
  ["c", [edge("ac", "a", "c", "supported"), edge("bc", "b", "c", "author-hypothesis")]],
  ["d", [edge("cd", "c", "d", "model-supported")]]
]);
const facts = {
  a: { openObligations: ["Specify it."] },
  b: { openSlots: [1, 2], openObligations: ["Specify it.", "Review it."] },
  d: { openSlots: [3] }
};
const work = (options = {}) => openWork({ arisings, causesOf: (id) => causes.get(id), factsOf: (id) => facts[id] ?? null, ...options });

test("a cause cites evidence through a published finding or a specified model", () => {
  assert.equal(citesEvidence({ status: "supported" }), true);
  assert.equal(citesEvidence({ status: "model-supported" }), true);
  assert.equal(citesEvidence({ status: "author-hypothesis" }), false);
  assert.equal(citesEvidence(null), false);
});

test("open work counts what each section names", () => {
  const { counts, evidence, sections } = work();
  assert.deepEqual(counts, { causes: 3, categories: 3, categoryArisings: 2, unsupported: 1, obligations: 3, obligationArisings: 2 });
  assert.deepEqual([evidence.supported, evidence.total], [2, 5]);
  assert.deepEqual(evidence.levels, [{ level: 0, supported: 0, total: 0 }, { level: 1, supported: 1, total: 4 }, { level: 2, supported: 1, total: 1 }]);
  assert.deepEqual(sections.causes.map((group) => [group.key, group.items.map((item) => item.id)]), [[1, ["ab", "cb", "bc"]]]);
  assert.deepEqual(sections.categories.map((group) => group.key), [1, 2]);
  assert.deepEqual(sections.obligations.map((group) => [group.key, group.items.length]), [["Specify it.", 2], ["Review it.", 1]]);
});

test("an arising without causes is not among those with no supported cause", () => {
  assert.deepEqual(work().sections.unsupported.flatMap((group) => group.items.map((item) => item.arising.id)), ["b"]);
});

test("established arisings come first among those with no supported cause", () => {
  const list = [{ id: "h", level: 0, scientificStatus: "hypothesized" }, { id: "x", level: 0, scientificStatus: "unknown" }, { id: "e", level: 3, scientificStatus: "established" }];
  const none = [edge("n", "z", "h", "author-hypothesis")];
  const { sections } = openWork({ arisings: list, causesOf: () => none, factsOf: () => null });
  assert.deepEqual(sections.unsupported.map((group) => group.key), ["established", "hypothesized", "unknown"]);
});

test("level and domain narrow every section; the bars keep every level and follow only the domain", () => {
  const byLevel = work({ level: 1 });
  assert.deepEqual([byLevel.counts.causes, byLevel.counts.categories, byLevel.counts.obligations], [3, 2, 2]);
  assert.equal(byLevel.evidence.levels.length, 3);
  assert.deepEqual([byLevel.evidence.supported, byLevel.evidence.total], [1, 4]);
  const byDomain = work({ domain: "y" });
  assert.deepEqual([byDomain.counts.causes, byDomain.counts.categories, byDomain.counts.unsupported, byDomain.counts.obligations], [1, 1, 0, 0]);
  assert.deepEqual(byDomain.evidence.levels, [{ level: 0, supported: 0, total: 0 }, { level: 1, supported: 1, total: 2 }, { level: 2, supported: 1, total: 1 }]);
  assert.deepEqual(work({ level: 0, domain: "y" }).counts, { causes: 0, categories: 0, categoryArisings: 0, unsupported: 0, obligations: 0, obligationArisings: 0 });
});

test("causes keep the order the caller gives them, without touching the release's arrays", () => {
  const before = causes.get("b").map((item) => item.id);
  const { sections } = work({ compareCauses: (left, right) => right.id.localeCompare(left.id) });
  assert.deepEqual(sections.causes[0].items.map((item) => item.id), ["cb", "ab", "bc"]);
  assert.deepEqual(causes.get("b").map((item) => item.id), before);
});

test("the sections of the real release match its records", () => {
  const graph = JSON.parse(read(`apps/model-studio/data/causal-emergence/${releaseVersion}/graph.json`));
  const layer = graph.presentation.arisingTable.layer;
  const list = graph.nodes.filter((node) => node.layer === layer);
  const ids = new Set(list.map((node) => node.id));
  const byChild = new Map();
  for (const item of graph.edges) {
    if (!ids.has(item.source) || !ids.has(item.target)) continue;
    if (!byChild.has(item.target)) byChild.set(item.target, []);
    byChild.get(item.target).push(item);
  }
  const result = openWork({ arisings: list, causesOf: (id) => byChild.get(id), factsOf: (id) => graph.arisingFacts[id] ?? null });
  const all = [...byChild.values()].flat();
  assert.equal(result.counts.causes, all.filter((item) => !citesEvidence(item)).length);
  assert.equal(result.evidence.total, all.length);
  assert.equal(result.evidence.supported + result.counts.causes, result.evidence.total);
  assert.equal(result.evidence.total, 1085);
  assert.equal(result.evidence.supported, 441);
  assert.equal(result.counts.causes, 644);
  assert.equal(result.counts.obligations, 48);
  assert.equal(result.counts.obligationArisings, 43, "Arisings that owe something, not the texts they owe");
  assert.equal(result.sections.unsupported.reduce((sum, group) => sum + group.items.length, 0), result.counts.unsupported);
  assert.equal(result.sections.unsupported[0].key, "established");
  const facts = Object.values(graph.arisingFacts);
  assert.equal(result.counts.categories, facts.reduce((sum, fact) => sum + (fact.openSlots?.length ?? 0), 0));
  assert.equal(result.counts.obligations, facts.reduce((sum, fact) => sum + (fact.openObligations?.length ?? 0), 0));
  assert.equal(new Set(facts.flatMap((fact) => fact.openObligations ?? [])).size, result.sections.obligations.length);
});

function declaration(name) {
  const start = studio.indexOf(`\nfunction ${name}(`);
  assert.notEqual(start, -1, name);
  const end = studio.indexOf("\nfunction ", start + 1);
  return studio.slice(start, end === -1 ? undefined : end);
}

test("the status line explains an established arising whose causes cite no evidence", () => {
  const context = { state: {}, causeEvidence: null, plural: (count, word) => `${count} ${word}${count === 1 ? "" : "s"}` };
  vm.runInNewContext(`${declaration("evidenceShare")}\n${declaration("evidenceLine")}\nglobalThis.line = evidenceLine;`, context);
  const line = (coverage, scientificStatus) => {
    context.causeEvidence = () => coverage;
    return context.line({ id: "a", scientificStatus });
  };
  assert.equal(line({ supported: 2, total: 5 }, "established"), "2 of 5 causes cite evidence.");
  assert.equal(line({ supported: 0, total: 5 }, "established"), "0 of 5 causes cite evidence. The phenomenon itself is established; its causes here have not been reviewed yet.");
  assert.equal(line({ supported: 0, total: 1 }, "well-supported"), "0 of 1 cause cites evidence. The phenomenon itself is well supported; its causes here have not been reviewed yet.");
  assert.equal(line({ supported: 0, total: 5 }, "hypothesized"), "0 of 5 causes cite evidence.");
  assert.equal(line(null, "established"), "");
});

test("necessity is explained as independent of the role, with the modulation case named", () => {
  const context = { humanize: (value) => value.charAt(0).toUpperCase() + value.slice(1) };
  vm.runInNewContext(`${declaration("necessityReading")}\nglobalThis.read = necessityReading;`, context);
  assert.equal(context.read({ role: "modulation", necessity: "necessary" }), "Necessary. How essential this cause is in the description. This is independent of its role: a modulation can be necessary while the dependent still forms and persists without it.");
  assert.equal(context.read({ role: "arising", necessity: "optional" }), "Optional. How essential this cause is in the description. This is independent of its role.");
  assert.match(studio, /fact\("Necessity", necessityReading\(edge\), \{ wide: true \}\)/);
});

test("Open work is the fifth view of an ontology, with its labels and no hard-coded counts", () => {
  const html = read("apps/model-studio/index.html");
  assert.match(studio, /ONTOLOGY_MODES = Object\.freeze\(\["table", "causes", "subgraph", "records", "work"\]\)/);
  assert.match(html, /data-mode="work"[^\n]*Open work<\/button>/);
  assert.match(html, /id="open-work-panel"/);
  for (const label of ["Causes without evidence", "Open categories", "No supported cause", "Arising obligations"]) {
    assert.ok(studio.includes(`label: "${label}"`), label);
  }
  assert.match(studio, /workSelect\("Level"/);
  assert.match(studio, /workSelect\("Domain"/);
  assert.match(studio, /guideSection\("Five views"/);
  const view = declaration("renderOpenWork") + declaration("workControls") + declaration("workSummary");
  assert.doesNotMatch(view, /\b(644|441|1085|103|79|48)\b/);
  // Inspecting a line stays in the view; only a double-click opens Causes.
  assert.match(declaration("workRow"), /addEventListener\("dblclick", \(\) => focusNode\(arising\.id, \{ mode: "causes" \}\)\)/);
  assert.match(declaration("workRow"), /addEventListener\("click", \(\) => inspectNode\(arising\.id\)\)/);
  assert.match(declaration("workRow"), /addEventListener\("click", \(\) => inspectWorkCause\(item\)\)/);
});
