import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { citationLinks, resolveClaimCitations } from "../../apps/model-studio/evidence-links.js";
import { recordEvidenceContext, resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";

const appUrl = new URL("../../apps/model-studio/model-studio.js", import.meta.url);
const [source, html] = await Promise.all([
  readFile(appUrl, "utf8"), readFile(new URL("../../apps/model-studio/index.html", import.meta.url), "utf8")
]);

function declaration(name) {
  const match = new RegExp(`^(?:async )?function ${name}\\(`, "m").exec(source);
  assert.ok(match, `Missing app function: ${name}`);
  const end = source.slice(match.index + 1).search(/\n(?:async )?function |\nstart\(\)\.catch/);
  assert.ok(end >= 0);
  return source.slice(match.index, match.index + 1 + end).replaceAll("import.meta.url", JSON.stringify(appUrl.href));
}

function element(tag, className = "", textContent = "") {
  return { tag, className, textContent, children: [], dataset: {}, open: false,
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; }, addEventListener() {} };
}

function setup(presentation = null) {
  const markup = new Map([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => [match[1], element("div")]));
  const state = { presentation: null }, downloads = [], inspections = [];
  // Initialize the app's actual element registry against its actual markup.
  const initialization = source.slice(source.indexOf("const ids = ["), source.indexOf("\nconst state = {"));
  const app = vm.runInNewContext(`${initialization}\n${[
    "shortenedHash", "studyDesignLabel", "renderSourceReview", "configureReviewPanels", "renderRationale",
    "renderInspector", "renderArising", "renderInspectedRecord", "activateModelPack"
  ].map(declaration).join("\n")}\nfunction render() { renderInspector(); }\n({configureReviewPanels, renderRationale, activateModelPack, elements});`, {
    state, URL, citationLinks, resolveClaimCitations, createElement: element,
    recordEvidenceContext, resolveRecordEvidence, CATALOG_PAGE_SIZE: 60,
    pendingInspection: null, inspectionSequence: 0, eventsBound: true,
    document: { body: { dataset: {} }, getElementById: (id) => markup.get(id), createTextNode: (textContent) => ({ textContent }) },
    renderSourceReadiness() {},
    createVerifiedModelPresentation: () => presentation,
    presentationMetadata: () => ({ labels: {}, boundary: {} }), interactionViewCatalog: () => null,
    defaultFocusId: () => "org:record", defaultLayerValue: () => "", configureFacet() {}, selectLocalOption() {}, replaceLocationState() {},
    coordinateText: () => "Level 5", scalarLabel: (value) => String(value ?? ""), tag: (text) => element("span", "", text),
    renderRelationList() {}, renderInteractionCases() {},
    downloadRecord: (value, filename) => downloads.push({ value, filename }),
    inspectNode: (id) => inspections.push(id)
  });
  return { ...app, state, downloads, inspections };
}

function lines(element) {
  return [element.textContent, ...(element.children ?? []).flatMap(lines)].filter(Boolean);
}

const publication = { id: "publication", title: "Scoped organismal intervention", year: 2026,
  doi: "10.1234/organism", review: { extent: "selected-primary-results", limit: "Supplement and raw data unread." } };
const study = { id: "organism-preparation", sourceId: publication.id, studyType: "primary-experiment",
  system: "One specified organism", preparation: "Matched intervention and control", observable: "Finite response",
  finding: "A bounded effect", readExtent: "selected-primary-results", reviewedLocators: ["Results", "Figure 2"],
  limitations: ["No universal operating dependency."], correctionCheck: "Publication metadata checked." };

test("Level-7 social scopes load on demand with their open questions and source reading limits and inspect each scope record", async () => {
  const { configureReviewPanels, elements, downloads, inspections } = setup();
  const book = { id: "book", title: "Verified historical publication", year: 1776, url: "https://example.test/book",
    review: { extent: "bibliographic-metadata-only", limit: "Original chapters unread; metadata is not experimental evidence." } };
  const scopes = [{ id: "soc:economic-market-dynamics-scope", name: "Dynamics of Economic Markets",
    scope: "Market outcomes retain their specified institutions, endowments and tested protocols.",
    nodeIds: ["soc:economic-market-dynamics-scope", "soc:auction-rule-sensitive-coordination"],
    claimIds: ["D-soc-economic-market-dynamics-scope-scope", "C-soc-auction-rule-sensitive-coordination"],
    unresolved: ["External validity remains limited."], sourceIds: ["book"] },
  { id: "soc:social-norms-conventions-scope", name: "Social Norms and Conventions",
    scope: "Conventions retain their tested populations, payoffs and observation windows.",
    nodeIds: ["soc:social-norms-conventions-scope", "soc:naming-convention-transition"],
    claimIds: ["D-soc-social-norms-conventions-scope-scope", "C-soc-naming-convention-transition"], sourceIds: ["book"],
    unresolved: ["Cross-population persistence remains unmeasured.", "No convention-wide neural mediator was measured."] }];
  const comparison = { id: "soc:protocol-versus-optimality",
    candidate: "The tested auction protocol constrains the observed allocation.",
    alternative: "A selected auction establishes optimality for every market.",
    discriminator: "Protocol contrasts within the documented sessions.", result: "conditional-support",
    limit: "The sessions do not test every market institution.", assumptions: ["Session rules operationalize the protocol."],
    sourceIds: ["book"], claimIds: ["C-soc-auction-rule-sensitive-coordination"] };
  const review = { studies: [], comparisons: [comparison], scopes };
  const dictionaries = { sources: [book], socialSystems: review }, before = structuredClone(dictionaries), requests = [];
  configureReviewPanels({ files: { "model/dictionaries.json": {} } }, {
    reviews: { socialSystems: { count: 3 } }, review: async (key) => { requests.push(key); return dictionaries; }
  });
  const panel = elements["social-systems-review-panel"], records = elements["social-systems-review-records"];
  assert.equal(panel.hidden, false);
  assert.deepEqual(requests, []);
  panel.open = true;
  await panel.ontoggle();
  assert.deepEqual(requests, ["socialSystems"]);
  assert.deepEqual(records.children.map((section) => section.children[0].textContent),
    ["Dynamics of Economic Markets", "Social Norms and Conventions", "Interpretation: soc:protocol-versus-optimality"]);
  for (const expected of ["Market outcomes retain their specified institutions, endowments and tested protocols.",
    "Open question: External validity remains limited.", "Conventions retain their tested populations, payoffs and observation windows.",
    "Open question: Cross-population persistence remains unmeasured.", "Open question: No convention-wide neural mediator was measured.",
    "Alternative: A selected auction establishes optimality for every market.",
    "Source review: bibliographic-metadata-only. Original chapters unread; metadata is not experimental evidence."]) assert.ok(lines(records).includes(expected), expected);
  assert.match(elements["social-systems-review-summary"].textContent, /^2 reviewed topics and 0 additional study contexts\./);
  const inspectScope = (section) => section.children.find((child) => child.textContent === "Inspect reviewed scope").onclick();
  inspectScope(records.children[1]);
  inspectScope(records.children[0]);
  assert.deepEqual(inspections, ["soc:social-norms-conventions-scope", "soc:economic-market-dynamics-scope"]);
  elements["social-systems-review-download"].onclick();
  assert.deepEqual(downloads, [{ value: review, filename: "socialSystems-evidence.json" }]);
  assert.deepEqual(dictionaries, before);
  configureReviewPanels({ files: { "model/dictionaries.json": {} } }, null);
  assert.equal(panel.hidden, true);
  assert.equal(records.children.length, 0);
  assert.equal(elements["social-systems-review-download"].onclick, null);
});

test("Level-6 neural scopes load on demand beside their study contexts and open the actual scope record", async () => {
  const { configureReviewPanels, elements, downloads, inspections } = setup();
  const review = { studies: [study], comparisons: [], scopes: [{ id: "cog:neurovascular-coupling-scope", name: "Neurovascular Coupling",
    scope: "Vascular response is distinct from immune regulation and from neural activity itself.",
    nodeIds: ["cog:neurovascular-coupling-scope", "neur:kir21-cec-current"],
    claimIds: ["D-cog-neurovascular-coupling-scope-scope", "C-kir21-cec-current"], sourceIds: [publication.id],
    unresolved: ["The complete neuronal-to-vascular route is unmeasured."] }] };
  const dictionaries = { sources: [publication], neuralSystems: review };
  const before = structuredClone(dictionaries), requests = [];
  configureReviewPanels({ files: { "model/dictionaries.json": {} } }, {
    reviews: { neuralSystems: { count: 2 } }, review: async (key) => { requests.push(key); return dictionaries; }
  });
  const panel = elements["neural-systems-review-panel"];
  assert.equal(panel.hidden, false);
  assert.deepEqual(requests, []);
  panel.open = true;
  await panel.ontoggle();
  assert.deepEqual(requests, ["neuralSystems"]);
  const records = elements["neural-systems-review-records"];
  assert.deepEqual(records.children.map((section) => section.children[0].textContent), ["Neurovascular Coupling", publication.title]);
  for (const expected of ["Vascular response is distinct from immune regulation and from neural activity itself.",
    "Open question: The complete neuronal-to-vascular route is unmeasured.", "Finding: A bounded effect",
    "Source review: selected-primary-results. Supplement and raw data unread."]) assert.ok(lines(records).includes(expected), expected);
  assert.match(elements["neural-systems-review-summary"].textContent, /1 reviewed topics and 1 additional study contexts/);
  records.children[0].children.find((child) => child.textContent === "Inspect reviewed scope").onclick();
  assert.deepEqual(inspections, ["cog:neurovascular-coupling-scope"]);
  elements["neural-systems-review-download"].onclick();
  assert.deepEqual(downloads, [{ value: review, filename: "neuralSystems-evidence.json" }]);
  assert.deepEqual(dictionaries, before);
  configureReviewPanels({ files: { "model/dictionaries.json": {} } }, null);
  assert.equal(panel.hidden, true);
  assert.equal(records.children.length, 0);
  assert.equal(elements["neural-systems-review-download"].onclick, null);
});

test("the organismal panel loads on opening, retains reading boundaries and downloads its exact review", async () => {
  const { configureReviewPanels, elements, state, downloads } = setup();
  const review = { studies: [study, { ...study, id: "another-organism-preparation" }]
    .map((study) => ({ ...study, limitations: [publication.review.limit, ...study.limitations] })), comparisons: [] };
  const dictionaries = { sources: [publication], organismal: review };
  const before = structuredClone(dictionaries);
  const requests = [];
  configureReviewPanels({ files: { "model/dictionaries.json": {} } }, {
    reviews: { organismal: { count: 2 } },
    review: async (key) => { requests.push(key); return dictionaries; }
  });
  const panel = elements["organismal-review-panel"], records = elements["organismal-review-records"];
  const download = elements["organismal-review-download"];
  assert.equal(panel.hidden, false);
  assert.equal(download.disabled, true);
  assert.deepEqual(requests, [], "Closed panels do not request scientific evidence");
  panel.open = true;
  await panel.ontoggle();
  assert.deepEqual(requests, ["organismal"]);
  assert.equal(panel.dataset.state, "ready");
  assert.equal(download.disabled, false);
  const rendered = lines(records);
  for (const text of ["Study design: Primary experimental study", "System: One specified organism",
    "Preparation: Matched intervention and control", "Observable: Finite response", "Finding: A bounded effect",
    "Reviewed: selected-primary-results. Results; Figure 2", "No universal operating dependency.",
    "Source review: selected-primary-results. Supplement and raw data unread."]) assert.ok(rendered.includes(text), text);
  for (const section of records.children) {
    assert.equal(lines(section).filter((text) => text.includes(publication.review.limit)).length, 1,
      "Each study displays a source reading limit once, retaining the full raw limitations for download");
  }
  download.onclick();
  assert.deepEqual(downloads, [{ value: review, filename: "organismal-evidence.json" }]);
  assert.deepEqual(dictionaries, before, "Rendering preserves the exact scientific records");

  state.presentation = {};
  configureReviewPanels({ files: { "model/dictionaries.json": { sources: [], cellular: { studies: [] } } } }, null);
  assert.equal(panel.hidden, true, "Historical releases have no organismal panel");
  assert.equal(panel.open, false);
  assert.equal(records.children.length, 0);
  assert.equal(download.onclick, null);
  assert.equal(download.disabled, true);
  const cellular = elements["cellular-review-panel"];
  assert.equal(cellular.hidden, false);
  cellular.open = true;
  await cellular.ontoggle();
  assert.equal(cellular.dataset.state, "ready");
  assert.deepEqual(requests, ["organismal"], "Full historical packs render locally");
});

test("the inspector retains distinct organismal and reused cellular preparations from one publication", () => {
  const { renderRationale, elements } = setup();
  const cellular = { ...study, id: "cellular-preparation", system: "Isolated cells",
    preparation: "Separate cell preparation", reviewedLocators: ["Figure 1"], limitations: ["No organismal transfer."] };
  const claim = { id: "claim", status: "publication-supported", statement: "A scoped finding", scope: "Matched conditions",
    contextIds: [study.id, cellular.id], citations: [{ sourceId: publication.id, locator: "Figure 2", role: "supports", note: "Finite endpoint." }] };
  const record = { id: "org:record", rationale: [claim] };
  const dictionaries = { recordEvidence: { format: "dictionary-references-v1" }, sources: [publication],
    organismal: { studies: [study] }, cellular: { studies: [cellular] } };
  const before = structuredClone({ record, dictionaries });
  renderRationale({ ...record, rationale: resolveRecordEvidence(record, recordEvidenceContext([record], dictionaries)) });
  const rendered = lines(elements["selected-rationale"]);
  for (const text of ["Study context: organism-preparation · One specified organism",
    "Study context: cellular-preparation · Isolated cells", "Preparation: Matched intervention and control",
    "Preparation: Separate cell preparation", "Reviewed: selected-primary-results. Results; Figure 2",
    "Reviewed: selected-primary-results. Figure 1", "Study limit: No organismal transfer.",
    "Source review: selected-primary-results. Supplement and raw data unread."]) assert.ok(rendered.includes(text), text);
  assert.deepEqual({ record, dictionaries }, before);
});

test("historical source reviews render without inventing absent reading metadata", async () => {
  const { configureReviewPanels, elements } = setup();
  configureReviewPanels({ files: { "model/dictionaries.json": { sources: [{ id: "old", title: "Historical source" }],
    physics: { studies: [{ id: "old-study", sourceId: "old", preparation: "Original sample", limitations: [] }] } } } }, null);
  const panel = elements["physics-review-panel"];
  panel.open = true;
  await panel.ontoggle();
  assert.equal(panel.dataset.state, "ready");
  const rendered = lines(elements["physics-review-records"]);
  assert.ok(rendered.includes("Preparation: Original sample"));
  assert.ok(rendered.every((text) => !text.includes("undefined") && !text.startsWith("Reviewed:") && !text.startsWith("Source review:")));
});

test("activating a full pack replaces prior release evidence before rendering its inspector", () => {
  const record = { id: "org:record", name: "Scoped record", description: "Exact source description",
    rationale: [{ id: "claim", statement: "A scoped finding", scope: "One preparation", status: "publication-supported",
      contextIds: [study.id], citations: [{ sourceId: publication.id, locator: "Figure 2", role: "supports" }] }] };
  const presentation = { descriptor: { statistics: { nodeCount: 1, edgeCount: 0 },
    facets: { levels: [5], typeRoles: [], phases: [], scientificStatuses: [] } },
    inspect: () => ({ node: { ...record, shortDescription: "Scoped finding" }, record,
      relationCounts: { parentCount: 0, childCount: 0 }, relations: { parents: [], children: [] } }) };
  const { activateModelPack, elements, state } = setup(presentation);
  state.pack = { files: { "model/dictionaries.json": { recordEvidence: { format: "dictionary-references-v1" }, sources: [] } } };
  const pack = { manifest: { model: { id: "fixture", name: "Fixture", version: "historical" }, rootHash: "sha256:fixture" },
    files: { "model/nodes.json": [record], "model/edges.json": [], "model/dictionaries.json": {
      recordEvidence: { format: "dictionary-references-v1" }, sources: [publication], organismal: { studies: [study] }
    } } };
  activateModelPack(pack);
  assert.equal(state.pack, pack, "The newly active pack must replace the previous release before rendering");
  assert.deepEqual(JSON.parse(elements["selected-record"].textContent), record);
  assert.ok(lines(elements["selected-rationale"]).includes("Preparation: Matched intervention and control"));
  assert.ok(lines(elements["selected-rationale"]).includes("Source review: selected-primary-results. Supplement and raw data unread."));
});
