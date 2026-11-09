import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const [source, html, styles, readme] = await Promise.all([
  "../../apps/model-studio/model-studio.js",
  "../../apps/model-studio/index.html",
  "../../assets/css/model-studio-workbench.css",
  "../../apps/model-studio/README.md"
].map((path) => readFile(new URL(path, import.meta.url), "utf8")));

function declaration(name) {
  const match = new RegExp(`^function ${name}\\(`, "m").exec(source);
  assert.ok(match, `Missing app function: ${name}`);
  const end = source.slice(match.index + 1).search(/\n(?:async )?function /);
  return source.slice(match.index, match.index + 1 + end);
}

function element(tag, className = "", textContent = "") {
  return { tag, className, textContent, children: [],
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; } };
}

/** The Navigation rows of the guide, by key, for a model with or without an ontology. */
function guideKeys(ontology) {
  const content = element("div");
  const state = { ontology, presentationMetadata: { boundary: { summary: "" } }, browse: null, pack: null };
  const app = vm.runInNewContext(`${declaration("renderGuide")}\n({ renderGuide });`, {
    state, elements: { "guide-content": content }, createElement: element,
    guideSection: (title, ...children) => ({ title, children })
  });
  app.renderGuide();
  const list = content.children.find((section) => section.title === "Navigation").children[0];
  const rows = new Map();
  for (let index = 0; index < list.children.length; index += 2) rows.set(list.children[index].textContent, list.children[index + 1].textContent);
  return rows;
}

test("the root note first says which arising its sign stands for", () => {
  const omega = "Ω";
  const note = `${omega} has a cause of its own.`;
  const state = { ontology: { root: "root" } };
  const app = vm.runInNewContext(`${declaration("rootNoteText")}\n({ rootNoteText });`, {
    state, nodeSummary: (id) => (id === "root" ? { name: "The first one" } : null)
  });
  assert.equal(app.rootNoteText(note), `The sign ${omega} stands for The first one. ${note}`);
  assert.equal(app.rootNoteText("A note with no sign."), "A note with no sign.", "A note that names no sign needs no explanation");
  assert.equal(app.rootNoteText(null), null);
  state.ontology = { root: "missing" };
  assert.equal(app.rootNoteText(note), note, "Without a known root the note stays as the release wrote it");
});

test("the guide's keys speak only of what a plain model has", () => {
  const plain = [...guideKeys(null)].map((row) => row.join(": ")).join("\n");
  for (const absent of [/\btable\b/, /\btree\b/, /Open work/, /\bcause/, /filter/, /1 {2}2 {2}3/]) assert.doesNotMatch(plain, absent);
  assert.match(plain, /A relation has Copy link/, "The relation inspector of a plain model has it too");
  assert.equal(guideKeys(null).get("Space, Shift + Enter"), "Focus it");
});

test("an ontology's guide keeps its keys for the table, the tree and Open work", () => {
  const keys = guideKeys({});
  assert.match(keys.get("Double-click"), /in the table: open its causes/);
  assert.match(keys.get("Space, Shift + Enter"), /the table, the tree and Open work/);
  assert.match(keys.get("Tab"), /A graph, the tree, the table, a list/);
  assert.match(keys.get("Tab"), /The filter and zoom buttons/);
  assert.match(keys.get("Home"), /In the table or a list/);
  assert.ok(keys.has("Right, Left in the tree"));
  assert.ok(keys.has("1  2  3  4  5"));
  assert.match(keys.get("Print"), /or the table with its names/);
  assert.match(keys.get("The address"), /A cause has Copy link/);
});

test("the words a reader meets name what is on the screen", () => {
  assert.match(html, /<a class="skip-link" href="#studio">Skip to the main view<\/a>/, "The first stop leads to any open view, not only a graph");
  assert.match(source, /The first stop skips to the open view\./);
  assert.match(readme, /\*Skip to the main view\*/);
  assert.match(source, /"Click \+: add cards /, "The + of a card is clicked: the + key zooms");
  assert.doesNotMatch(source, /"\+: add neighbours/);
  assert.match(source, /tags\.push\(tag\(`Status: \$\{humanize\(node\.scientificStatus\)\.toLowerCase\(\)\}`, "status"\)\)/, "A status on a technical record says it is one");
  assert.match(source, /\["process", "scoped process"\]/, "The legend uses the word on the cards");
  assert.doesNotMatch(source, /catalogue's/, "The reader is told of the author; nothing explains a catalogue");
  assert.doesNotMatch(source, /Each main node|Each edge between|dashed rows/);
  assert.match(source, /A lens shows only the records the release marks for that view/);
  assert.match(source, /Rings mark its causes, its dependents, and arisings that are both\./);
  assert.match(readme, /The lenses\s+Studied systems, Measurements and evidence, and Hypotheses and correspondences use/);
});

test("the labels the owner's article depends on stay as written", () => {
  for (const label of ["Map", "Names", "Colour", "Domain", "Evidence", "Open work", "Causes without evidence", "Open categories", "No supported cause", "Arising obligations", "Lineage from the root", "Level"]) {
    assert.ok(source.includes(`"${label}"`) || html.includes(`>${label}<`), `Missing label: ${label}`);
  }
});

test("a printed drawing leaves out the expansion marks", () => {
  const print = styles.slice(styles.indexOf("@media print"));
  assert.match(print, /\.graph-pill[^{}]*\{ display: none !important; \}/);
});

test("markup hooks nothing reads are gone", () => {
  for (const hook of ["dataset.truncated", "dataset.caseOverview", "button.dataset.value", "arising-level-count", "arising-members", "raw-record"]) {
    assert.ok(!source.includes(hook), `Hook still written: ${hook}`);
  }
  assert.ok(!html.includes('id="filter-panel"') && !html.includes("raw-record"));
});
