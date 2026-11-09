import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { usedDisciplines } from "../../apps/model-studio/arising-facts.js";
import { recordCatalogEntry, recordDisplayName } from "../../apps/model-studio/plain-text.js";

const root = new URL("../../", import.meta.url);
const [source, html, readme, graph] = await Promise.all([
  readFile(new URL("apps/model-studio/model-studio.js", root), "utf8"),
  readFile(new URL("apps/model-studio/index.html", root), "utf8"),
  readFile(new URL("apps/model-studio/README.md", root), "utf8"),
  readFile(new URL("apps/model-studio/data/causal-emergence/2026.11.08.0/graph.json", root), "utf8").then(JSON.parse)
]);

function declaration(name) {
  const match = new RegExp(`^(?:async )?function ${name}\\(`, "m").exec(source);
  assert.ok(match, `Missing app function: ${name}`);
  const end = source.slice(match.index + 1).search(/\n(?:async )?function |\n\/\*\* /);
  assert.ok(end >= 0);
  return source.slice(match.index, match.index + 1 + end);
}

/** App functions in this realm: the presentation takes plain objects of its own realm only. */
function functions(names, globals) {
  const keys = Object.keys(globals);
  return new Function(...keys, `${names.map(declaration).join("\n")}\nreturn { ${names.join(", ")} };`)(...keys.map((key) => globals[key]));
}

test("a record shows by its display name wherever a reader meets it", () => {
  for (const [name, pattern] of [
    ["catalogItem", /createElement\("strong", "", displayName\(node\)\)/],
    ["cardHeight", /wrapCardLabel\(displayName\(node\), inner,/],
    ["drawNodeCard", /const name = displayName\(node\);[\s\S]*"aria-label": `\$\{name\}[\s\S]*wrapCardLabel\(name, inner,/],
    ["drawEdge", /const label = `\$\{displayName\(source\) \?\? "A record"\} -> \$\{displayName\(target\) \?\? "A record"\}/],
    ["renderGraph", /elements\["graph-title"\]\.textContent = displayName\(focus\);[\s\S]*`\$\{displayName\(focus\)\}: \$\{nodes\.length\} visible nodes/],
    ["renderTechnicalRelations", /button\.title = displayName\(node\) \?\? "";[\s\S]*createElement\("span", "", displayName\(node\) \?\? ""\)/],
    ["renderInspector", /elements\["selected-name"\]\.textContent = displayName\(node\);/],
    ["routeButton", /createElement\("span", "", displayName\(node\) \?\? ""\)\);\n {2}button\.title = displayName\(node\) \?\? "";/],
    ["renderRelationInspector", /`\$\{displayName\(source\) \?\? "A record"\} \\u2192 \$\{displayName\(target\) \?\? "A record"\}`[\s\S]*`Back to \$\{displayName\(nodeSummary\(state\.selectedId\)\) \?\? "record"\}`/],
    ["renderArising", /createElement\("span", "", displayName\(nodeSummary\(id\)\) \?\? ""\)/],
    ["prose", /plainProse\(text, \(id\) => displayName\(nodeSummary\(id\)\)\)/]
  ]) assert.match(declaration(name), pattern, name);
  // What remains is the branch of a plain release, or a name the code does not display.
  for (const name of ["catalogItem", "drawEdge", "renderGraph", "renderTechnicalRelations", "renderInspector", "routeButton", "renderRelationInspector", "renderArising"]) {
    assert.doesNotMatch(declaration(name), /\b(?:node|source|target|focus|step)\??\.name\b/, name);
  }
  assert.doesNotMatch(source, /(?:\.name|displayName\(\w+\)) \?\? edge\.(?:source|target)\b/, "A missing endpoint shows no key");
  assert.doesNotMatch(source, /state\.nodeNames/);
});

test("an ontology reads a study key as the study, and a plain release keeps its names", () => {
  const name = "albring2012-four-reexposures: acquisition context";
  const state = { ontology: { layer: "arising" } };
  const { displayName } = functions(["displayName"], { state, recordDisplayName });
  assert.equal(displayName({ name }), "Albring 2012, four re-exposures: acquisition context");
  assert.equal(displayName({ name: "mTOR-sensitive SASP output context" }), "mTOR-sensitive SASP output context");
  assert.equal(displayName(null), undefined, "A missing record has no name for a caller to show");
  state.ontology = null;
  assert.equal(displayName({ name }), name, "A plain release stays as declared");
});

test("the Discipline filter narrows the flat list of an ontology on the client", () => {
  const facts = graph.arisingFacts;
  const state = { ontology: { layer: "arising" }, facts, readerCatalog: null,
    graphInputForRoles: { identity: graph.identity, nodes: graph.nodes, edges: graph.edges },
    presentation: { catalog() { throw new Error("An ontology lists names as readers see them"); } } };
  const { activeFilterCount, showsOntologyTree, catalogPage, disciplineArisings } = functions(
    ["factsOf", "hasDiscipline", "readerCatalog", "catalogPage", "disciplineArisings", "activeFilterCount", "showsOntologyTree"],
    { state, createLazyModelPresentation, recordCatalogEntry, currentCatalogQuery: () => { throw new Error("A query is passed in"); }, CATALOG_PAGE_SIZE: 60 });
  const query = (extra = {}) => ({ search: "", levels: [], layers: [], phases: [], typeRoles: [], scientificStatuses: [], disciplines: [], sort: "id", order: "asc", ...extra });
  const neuroscience = graph.vocabulary.disciplines.find((entry) => entry.name === "Neuroscience").value;
  try {
    assert.equal(activeFilterCount(query()), 0);
    assert.equal(activeFilterCount(query({ disciplines: [neuroscience] })), 1, "It counts as a filter");
    assert.equal(activeFilterCount(query({ disciplines: [neuroscience], levels: [5] })), 2);
    assert.equal(showsOntologyTree(query()), true);
    assert.equal(showsOntologyTree(query({ disciplines: [neuroscience] })), false, "The tree gives way to the flat list");
    assert.equal(catalogPage(query({ disciplines: [neuroscience], layers: ["arising"] }), 0, 500).matching, 259, "The catalogue itself is not asked for a facet it lacks");
    const all = disciplineArisings(query({ disciplines: [neuroscience] }));
    assert.equal(all.matching, 35);
    assert.equal(all.items.length, 35);
    assert.ok(all.items.every((node) => node.layer === "arising" && facts[node.id].disciplines.includes(neuroscience)));
    const searched = disciplineArisings(query({ disciplines: [neuroscience], search: "synaptic" }));
    assert.ok(searched.matching > 0 && searched.matching < 35, "Search narrows it further");
    assert.equal(disciplineArisings(query({ disciplines: [neuroscience], levels: [0] })).matching, 0, "So do the other selects, down to nothing");
    assert.equal(disciplineArisings(query({ disciplines: [neuroscience], layers: ["arising"] })).matching, 35);
    assert.deepEqual(disciplineArisings(query({ disciplines: [neuroscience], layers: ["technical"] })), { items: [], matching: 0 }, "A discipline describes arisings only");
  } finally { state.readerCatalog?.close(); }
  const render = declaration("renderCatalog");
  assert.match(render, /const byDiscipline = query\.disciplines\.length > 0;/);
  assert.match(render, /byDiscipline \? disciplineArisings\(query\)/);
  assert.match(render, /elements\["catalog-empty-hint"\]\.textContent = byDiscipline\n\s+\? "The Discipline filter lists arisings only\. Clear a filter or shorten the search\."/, "The empty state says why");
});

test("a plain release lists through its own presentation", () => {
  const calls = [];
  const state = { ontology: null, presentation: { catalog(options) { calls.push(options); return { items: [] }; } } };
  const { catalogPage } = functions(["catalogPage"], { state, readerCatalog() { throw new Error("Only for an ontology"); }, CATALOG_PAGE_SIZE: 60 });
  catalogPage({ search: "x", disciplines: [] }, 0);
  assert.deepEqual(calls, [{ search: "x", offset: 0, limit: 60 }], "The presentation accepts no option for a discipline");
});

test("the Discipline controls follow the rules of the others, and vanish without disciplines", () => {
  const panel = html.match(/<div class="filter-grid">[\s\S]*?<\/details>/)[0];
  assert.match(panel, /<label id="discipline-filter-control" hidden><span id="discipline-filter-label">Discipline<\/span><span class="select-box"><select id="discipline-filter"/, "Hidden until a release has disciplines");
  assert.ok(panel.indexOf("discipline-filter") < panel.indexOf("catalog-sort"), "With the filters, above the order");
  assert.match(source, /configureFacet\("discipline-filter", state\.disciplines, "All disciplines", "Discipline",/);
  assert.match(source, /state\.facts = options\.browse\?\.arisingFacts \?\? arisingFactsFromNodes\(topologyNodes, metadata\.arisingTable\?\.layer\);/);
  assert.match(source, /state\.vocabulary = options\.browse\?\.vocabulary \?\? null;/);
  assert.match(source, /state\.disciplines = usedDisciplines\(state\.facts, state\.vocabulary\);/);
  assert.deepEqual(usedDisciplines({}, graph.vocabulary), []);
  // Every list of filters knows it: changes, a new model and the reset.
  assert.equal(source.match(/\["level-filter", "role-filter", "phase-filter", "status-filter", "discipline-filter"\]/g)?.length, 2);
  assert.match(source, /\["catalog-search", "layer-filter", "level-filter", "role-filter", "phase-filter", "status-filter", "discipline-filter", "catalog-sort"\]/);
  assert.match(source, /state\.domainFilter = null;\n\s+state\.disciplineFilter = null;\n\s+elements\["catalog-sort"\]/, "Reset clears the table's select too");
  // The table: the select sits in the legend, dims with the domain chips and says how many remain.
  assert.match(declaration("tableLegend"), /controls\.append\(density, colour, scale, lineage, \.\.\.\(state\.disciplines\.length \? \[tableDisciplineFilter\(\)\] : \[\]\)\);/);
  const update = declaration("updateArisingTable");
  assert.match(update, /Boolean\(state\.domainFilter && chip\.dataset\.domain !== state\.domainFilter\)\n\s+\|\| \(state\.disciplineFilter !== null && !hasDiscipline\(id, state\.disciplineFilter\)\);/);
  assert.match(update, /\.filter\(Boolean\)\.join\(" in "\);\n\s+const heading = scope \? `\$\{scope\}: \$\{matching\} of \$\{total\}`[\s\S]*?elements\["graph-subtitle"\]\.textContent = heading;/, "The heading names what the table is dimmed to, once the select has scrolled away");
  assert.doesNotMatch(update, /graph-counts|graph-hint/, "A filter leaves the footer alone: the long names would squeeze its hint");
  assert.match(declaration("renderArisingTable"), /elements\["graph-counts"\]\.textContent = `\$\{plural\(state\.ontology\.arisings\.length, "arising"\)\} in \$\{plural\(table\.domains\.size, "domain"\)\}`;/, "The footer's counts are short and fixed");
  assert.match(declaration("showFirstTableMatch"), /\.arising-chip\[data-dimmed="false"\]'\)\?\.scrollIntoView\(/, "The first screen of a long table may hold none of them");
  assert.match(declaration("showFirstTableMatch"), /state\.tableDensity !== "names"/, "The Map holds them all on one screen");
  assert.match(declaration("tableDisciplineFilter"), /state\.disciplineFilter !== null\) showFirstTableMatch\(\);/);
  assert.match(declaration("tableLegend"), /state\.domainFilter !== null\) showFirstTableMatch\(\);/, "A domain chip and the Discipline select agree");
  assert.match(update, /disciplineSelect\.value = state\.disciplineFilter === null \? "" : JSON\.stringify\(state\.disciplineFilter\);/, "A reset shows in the select");
  // The inspector: named chips, with the definition as a native title.
  const facts = declaration("renderFacts");
  assert.match(facts, /chip\.title = entry\.definition \?\? entry\.name;/);
  assert.match(facts, /if \(disciplines\.length\) \{/);
  // The guide: listed with definitions, collapsed by default, absent without disciplines.
  const guide = declaration("renderGuide");
  assert.match(guide, /if \(state\.disciplines\.length\) \{\n\s+const list = createElement\("div", "guide-grid"\);\n\s+for \(const entry of state\.disciplines\) list\.append\(guideCard\(entry\.name, entry\.definition\)\);\n\s+const details = createElement\("details", "guide-disciplines"\);/);
  assert.doesNotMatch(guide, /details\.open/);
  assert.match(guide, /if \(state\.vocabulary\) roles\.append\(guideCard\("Carrier",/);
  assert.match(readme, /Discipline/);
});

test("a cause shows its carrier and declared values by name, never as a bare number", () => {
  const relation = declaration("renderRelationInspector");
  assert.match(relation, /const carrier = carrierReading\(record\.carrier, state\.vocabulary\);\n\s+if \(carrier\) extra\.push\(fact\("Carrier", carrier\.label, \{ title: carrier\.definition \}\)\);/);
  assert.doesNotMatch(source, /Group \$\{carrier\.group\}|"Not declared"\)\);/);
  assert.doesNotMatch(relation, /\?\? String\(value\)/, "Directions and modes have no numeric fallback");
  assert.match(declaration("fact"), /if \(title\) definition\.title = title;/);
  const { declaredNames } = functions(["declaredNames"], {});
  const names = new Map([[0, "Upward causation"], [3, "Diagonal causation"]]);
  assert.deepEqual(declaredNames([3, 0], names), ["Diagonal causation", "Upward causation"]);
  assert.deepEqual(declaredNames([3, 9], names), ["Diagonal causation"], "A number nothing can name is left out");
  assert.deepEqual(declaredNames([9], names), [], "No names: no row");
  assert.deepEqual(declaredNames([9], undefined), []);
  assert.deepEqual(declaredNames(["declared-text"], undefined), ["declared-text"], "A plain release's text stays");
  assert.deepEqual(declaredNames(undefined, names), []);
  const state = { presentationMetadata: { arisingTable: { dependencyTypes: new Map([[4, "Regulation"]]) } } };
  const { dependencyName } = functions(["dependencyName"], { state });
  assert.equal(dependencyName(4), "Regulation");
  assert.equal(dependencyName(99), null, "Not \"Dependency 99\"");
  assert.equal(dependencyName(null), null);
  assert.equal(dependencyName(undefined), null);
  assert.equal(dependencyName("conditional"), "Dependency conditional");
  assert.doesNotMatch(declaration("renderArising"), /dependencyName\(value\) \?\? String\(value\)/);
});
