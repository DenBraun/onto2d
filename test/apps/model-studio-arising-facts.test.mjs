import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { arisingFactsFromNodes, carrierReading, factDisciplineIds, termDefinition, termDefinitions, typeRoleDefinition, usedDisciplines, vocabularyProjection } from "../../apps/model-studio/arising-facts.js";

const root = new URL("../../", import.meta.url);
const directory = new URL("apps/model-studio/data/causal-emergence/2026.11.08.0/", root);
const graph = JSON.parse(await readFile(new URL("graph.json", directory), "utf8"));
const vocabulary = JSON.parse(await readFile(new URL("references/canonical/arising-vocabulary.json", root), "utf8"));
const files = await readdir(directory);
const chunks = (prefix) => Promise.all(files.filter((name) => name.startsWith(prefix)).map(async (name) => JSON.parse(await readFile(new URL(name, directory), "utf8"))));
const records = (await chunks("nodes-")).flatMap((chunk) => chunk.records);
const causes = (await chunks("relations-")).flatMap((chunk) => chunk.relations);

test("facts keep what a reader can use of an arising and leave out whatever is empty", () => {
  const nodes = [
    { id: "a", layer: "arising", disciplines: [3, 5], evidenceCoverage: "none", completeness: { openSlots: [10] }, openObligations: ["Add a definition."] },
    { id: "b", layer: "arising", disciplines: [], evidenceCoverage: "", completeness: { openSlots: [] }, openObligations: [] },
    { id: "c", layer: "arising" },
    { id: "d", layer: "arising", disciplines: "Biology", evidenceCoverage: 3, completeness: null, openObligations: [1] },
    { id: "e", layer: "technical", disciplines: [9], evidenceCoverage: "none" },
    { id: "f", layer: "arising", evidenceCoverage: "published-findings" }
  ];
  assert.deepEqual(arisingFactsFromNodes(nodes, "arising"), {
    a: { disciplines: [3, 5], evidenceCoverage: "none", openSlots: [10], openObligations: ["Add a definition."] },
    f: { evidenceCoverage: "published-findings" }
  });
  assert.deepEqual(arisingFactsFromNodes(nodes, null), {}, "A model without a layer of arisings has no facts");
  assert.deepEqual(arisingFactsFromNodes(nodes, undefined), {});
  assert.deepEqual(arisingFactsFromNodes([], "arising"), {});
});

test("the browse graph holds the facts of every arising of the release, as its records state them", () => {
  const arisings = records.filter((record) => record.layer === "arising");
  assert.equal(arisings.length, 259);
  assert.equal(records.length - arisings.length, 2537);
  assert.deepEqual(graph.arisingFacts, arisingFactsFromNodes(records, "arising"));
  const facts = Object.values(graph.arisingFacts);
  assert.equal(facts.filter((fact) => fact.disciplines).length, 259);
  assert.equal(facts.filter((fact) => fact.openSlots).length, 88);
  assert.equal(facts.flatMap((fact) => fact.openSlots ?? []).length, 103);
  assert.equal(facts.filter((fact) => fact.openObligations).length, 43);
  assert.equal(new Set(facts.flatMap((fact) => fact.openObligations ?? [])).size, 3);
  assert.equal(factDisciplineIds(graph.arisingFacts).length, 22);
  assert.deepEqual(graph.vocabulary, vocabularyProjection(vocabulary, factDisciplineIds(graph.arisingFacts)));
});

test("the vocabulary projection names numbers and carries no code, icon or count", () => {
  const projection = vocabularyProjection(vocabulary, [8, 3, 99]);
  assert.equal(projection.carrierGroups.length, 6);
  assert.equal(projection.carrierTypes.length, 14);
  assert.deepEqual(projection.disciplines.map((entry) => entry.name), ["Biology", "Economics"], "Only those in use, in vocabulary order");
  assert.deepEqual(Object.keys(projection.carrierGroups[0]), ["value", "name", "definition"]);
  assert.deepEqual(Object.keys(projection.carrierTypes[0]), ["value", "name", "group", "definition"]);
  assert.deepEqual(Object.keys(projection.disciplines[0]), ["value", "name", "type", "definition"]);
  for (const entry of [...projection.carrierGroups, ...projection.carrierTypes, ...projection.disciplines]) {
    assert.ok(entry.name.length > 0 && !/[{}\\]/.test(`${entry.name} ${entry.definition}`), "No code such as CG_{FMC} or TeX reaches a reader");
    assert.equal(typeof entry.definition, "string");
  }
  assert.deepEqual(vocabularyProjection({}, []), { carrierGroups: [], carrierTypes: [], disciplines: [], typeRoles: [], phases: [], dependencyTypes: [], causalDirections: [], interactionModes: [] });
  assert.deepEqual(projection.typeRoles.map((entry) => entry.name), ["Process", "Object", "Pattern", "Property", "Effect"]);
  assert.deepEqual(projection.phases.map((entry) => entry.value), [0, 1, 2, 3]);
  for (const field of ["typeRoles", "phases", "dependencyTypes", "causalDirections", "interactionModes"]) {
    for (const entry of projection[field]) {
      assert.deepEqual(Object.keys(entry), ["value", "name", "definition"]);
      assert.equal(typeof entry.definition, "string", `${entry.name} has its definition`);
    }
  }
  assert.equal(termDefinition(projection.phases, 0), projection.phases[0].definition);
  assert.equal(termDefinition(projection.phases, 99), null);
  assert.equal(termDefinition(undefined, 0), null);
  assert.match(termDefinitions(projection.causalDirections, [0, 99]), /^Upward causation: /);
  assert.equal(termDefinitions(projection.causalDirections, undefined), "");
  assert.equal(typeRoleDefinition(projection, "process"), projection.typeRoles[0].definition);
  assert.equal(typeRoleDefinition(projection, "scoped-process"), null, "A technical record's kind is not in the vocabulary, and nothing makes one up");
  assert.equal(typeRoleDefinition(null, "process"), null);
  assert.equal(vocabularyProjection({ disciplines: [{ Id: 1, Name: "Physics", Type: "natural" }] }, [1]).disciplines[0].definition, null);
});

test("the disciplines in use are listed by name with their counts", () => {
  const list = usedDisciplines(graph.arisingFacts, graph.vocabulary);
  assert.equal(list.length, 22);
  assert.deepEqual(list.map((entry) => entry.name), [...list.map((entry) => entry.name)].sort());
  assert.equal(list.find((entry) => entry.name === "Biology").count, 141);
  assert.equal(list.find((entry) => entry.name === "Neuroscience").count, 35);
  assert.deepEqual(usedDisciplines(graph.arisingFacts, null), [], "Without a vocabulary nothing can be named");
  assert.deepEqual(usedDisciplines(null, graph.vocabulary), []);
  assert.deepEqual(usedDisciplines({}, graph.vocabulary), [], "A model without disciplines has none to offer");
  assert.deepEqual(usedDisciplines({ a: { disciplines: [999] } }, graph.vocabulary), [], "A number nothing can name is left out");
});

test("a cause's carrier shows by name, with its definitions, or not at all", () => {
  const reading = carrierReading({ group: 2, type: 8, nMin: null, nCrit: null, nSat: null }, graph.vocabulary);
  assert.equal(reading.label, "Functional material carriers \u00b7 Cell");
  assert.match(reading.definition, /^Functional material carriers: Carrier group in which[^\n]*\nCell: Autonomous living unit/);
  assert.equal(carrierReading({ group: null, type: null }, graph.vocabulary), null, "Not declared: no row");
  assert.equal(carrierReading(null, graph.vocabulary), null);
  assert.equal(carrierReading(undefined, graph.vocabulary), null);
  assert.equal(carrierReading({ group: 2, type: 8 }, null), null, "No vocabulary: no row");
  assert.equal(carrierReading({ group: 77, type: 88 }, graph.vocabulary), null, "A number nothing can name is left out");
  assert.equal(carrierReading({ group: 2, type: 88 }, graph.vocabulary).label, "Functional material carriers");
  let named = 0;
  assert.equal(causes.length, 1085);
  for (const cause of causes) {
    const value = carrierReading(cause.carrier, graph.vocabulary);
    if (value === null) {
      assert.equal(cause.carrier.group, null);
      continue;
    }
    named += 1;
    assert.match(value.label, /^[A-Z][^\d]* \u00b7 [A-Z][^\d]*$/, "Never a bare number");
    assert.ok(value.definition.length > 0);
  }
  assert.equal(named, 680);
  assert.equal(causes.length - named, 405);
});
