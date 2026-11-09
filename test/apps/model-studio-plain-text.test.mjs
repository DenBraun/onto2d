import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { createLazyModelPresentation } from "@onto2d/view/lazy";
import { plainFailure, plainLocator, plainProse, plainSlug, readingExtent, recordCatalogEntry, recordDisplayName, slugWords } from "../../apps/model-studio/plain-text.js";
import { resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";

const root = new URL("../../", import.meta.url);
const directory = new URL("apps/model-studio/data/causal-emergence/2026.11.08.0/", root);
const graph = JSON.parse(await readFile(new URL("graph.json", directory), "utf8"));
const names = new Map(graph.nodes.map((node) => [node.id, recordDisplayName(node.name)]));
const nameOf = (id) => names.get(id);

test("cell codes read as the names of the arisings they stand for", () => {
  const atlas = { "arising:1.35": "Atomic Nuclei", "arising:2.20": "Hyperfine Structure" };
  const known = (id) => atlas[id];
  assert.equal(plainProse("Hydrogen, whose nucleus is a proton outside arising 1.35, is not tested.", known),
    "Hydrogen, whose nucleus is a proton outside Atomic Nuclei, is not tested.");
  assert.equal(plainProse("the same contrast supports the nuclear-spin claim of cause 1.35 > 2.20 and is read here", known),
    "the same contrast supports the nuclear-spin claim of the cause from Atomic Nuclei to Hyperfine Structure and is read here");
  assert.equal(plainProse("Show that arising 1.35 does not first form without arising 2.20.", known),
    "Show that Atomic Nuclei does not first form without Hyperfine Structure.");
  assert.equal(plainProse("Measured 1.35 > 0.20 in arising 9.99.", known), "Measured 1.35 > 0.20 in arising 9.99.", "A number is not a code");
});

test("record, claim and study keys in prose read as words", () => {
  const known = (id) => ({ "ret:cgmp-conductance": "cGMP-activated rod conductance" })[id];
  assert.equal(plainProse("Reuse the existing fesenko1985 primary-experiment record, its source, P-fesenko1985 and ret:cgmp-conductance without change.", known),
    "Reuse the existing Fesenko 1985 primary-experiment record, its source, the Fesenko 1985 claim and cGMP-activated rod conductance without change.");
  assert.equal(plainProse("Optical/retinal pilot; contexts baylor1979, baylor-single1979, fung1981"), "Optical/retinal pilot; contexts Baylor 1979, Baylor single 1979, Fung 1981");
  assert.equal(plainProse("recorded in the graph's ni2008-krb-stark study, was not read here."), "recorded in the graph's Ni 2008 KRb Stark study, was not read here.");
  assert.equal(plainProse("OFF sustained alpha RGC; comparison protocol grimes-mouse-0p5"), "OFF sustained alpha RGC; comparison protocol Grimes mouse 0.5");
  assert.equal(plainProse("That is what C-phys-l0-bridge records as missing."), "That is what the Level 0 bridge claim records as missing.");
  assert.equal(plainProse("Neither record establishes anisotropy, and F12 remains unresolved (F02)."), "Neither record establishes anisotropy, and Finding 12 remains unresolved (Finding 2).");
});

test("scientific text that only looks like a key stays exactly as it is", () => {
  for (const text of ["C-reactive protein and C-terminal-domain contacts", "pre-2000 death dates and the over-1200-year prediction",
    "Complete pajot2026-model-check.json: 55 pairs", "arXiv:hep-ex/0506072v1 printed pages 91-92", "a 2:1 myristoleate:monomyristolein mixture and poly(I:C)",
    "Sheet1!E12,F12 and A1:F11", "the F128 episome", "DMEM/F12 medium", "T-cell-mediated killing in SLAC-PUB-642", "10^-8 cm/s at pH 7.2", "alpha_s(mu_R^2) at 0.31 > 0.51/2"]) {
    assert.equal(plainProse(text, nameOf), text);
  }
  assert.equal(plainProse(undefined), undefined);
  assert.equal(plainProse(null), null);
});

test("slugs read as words, with ranges, versions and abbreviations intact", () => {
  assert.equal(slugWords("selected-full-text-passages"), "selected full text passages");
  assert.equal(slugWords("published-pdf-pages-931-937-supplement-unread"), "published PDF pages 931-937 supplement unread");
  assert.equal(slugWords("reported"), "reported", "A plain word needs nothing");
  assert.equal(slugWords("three-person-trial"), "three-person trial", "Two parts that are one term stay one");
  assert.equal(slugWords("human-msc-elasticity"), "human MSC elasticity");
  assert.equal(slugWords("pages-1-7-cell-free"), "pages 1-7 cell-free");
  assert.equal(slugWords("abstract-introduction-section-14-5-1-equations-44-46-and-sections-17-18"), "abstract introduction section 14.5.1 equations 44-46 and sections 17-18", "Three numbers are a section; two are a range");
  assert.equal(slugWords("abstract-sections-1-2-1-and-6-7-with-equations-13-14"), "abstract sections 1.2.1 and 6-7 with equations 13-14");
  assert.equal(slugWords("reviewed-2026-10-20"), "reviewed 2026-10-20", "A date keeps its hyphens");
  assert.equal(plainSlug("section-14-5-1; supplement-unread"), "Section 14.5.1; supplement unread");
  assert.equal(plainSlug("selected-primary-results-methods-and-figure-legends-supplement-unread"), "Selected primary results methods and figure legends supplement unread");
  assert.equal(plainSlug("complete-main-text-table-and-figure-captions; supporting-information-unread"), "Complete main text table and figure captions; supporting information unread");
  assert.equal(plainSlug("pmc-author-manuscript-sections-1-3-and-5-7-tables-1-2"), "PMC author manuscript sections 1-3 and 5-7 tables 1-2");
  assert.equal(plainSlug("arxiv-author-version-main-text"), "arXiv author version main text", "The form of a name wins over capitalizing");
  assert.equal(plainSlug("Optical/retinal pilot; contexts crook2011"), "Optical/retinal pilot; contexts crook2011");
  assert.equal(plainSlug("specified-Bell-test"), "Specified Bell test");
  assert.equal(plainSlug("T-cell"), "T-cell");
  assert.equal(plainSlug("mRNA-seq"), "mRNA-seq");
  assert.equal(plainSlug(undefined), undefined);
  assert.equal(readingExtent("selected-full-text-passages"), "Selected full text passages");
  assert.equal(readingExtent("Figure 6C is outside this extraction."), "Figure 6C is outside this extraction", "The caller ends the sentence");
  assert.equal(readingExtent(undefined), undefined);
});

test("locators keep pages and cells and lose check names and document pointers", () => {
  for (const exact of ["PDF pages 8 and 13, equations (8)-(9)", "4k!B1:D8", "'Table S5d. sh-Ctrl E1-E0'!A2:H4394", "Sheet1!E17,F17", "Results; Figure 2"]) {
    assert.equal(plainLocator(exact), exact);
  }
  assert.equal(plainLocator("F09"), "Finding 9");
  assert.equal(plainLocator("F01–F12; What the sources contribute"), "Findings 1 to 12; What the sources contribute");
  assert.equal(plainLocator("verify(): bell-null-tail-2015"), "Bell null tail 2015");
  assert.equal(plainLocator("verify(): formal count-rate transfer and rounding bounds"), "Formal count-rate transfer and rounding bounds");
  assert.equal(plainLocator("verify(), flow(), vacuum_word() and correlation(): exact rational flow"), "Exact rational flow");
  assert.equal(plainLocator("mathematical_witnesses()"), "Mathematical witnesses");
  assert.equal(plainLocator("coefficient-not-absorptance"), "Coefficient not absorptance");
  assert.equal(plainLocator("/reviews/0"), "Review 1");
  assert.equal(plainLocator("/conclusion"), "Conclusion");
  assert.equal(plainLocator(undefined), undefined);
});

/** Every string of a release chunk, with the name of the field that holds it. */
function walk(value, visit, field = "") {
  if (typeof value === "string") visit(value, field);
  else if (Array.isArray(value)) for (const entry of value) walk(entry, visit, field);
  else if (value && typeof value === "object") for (const [key, entry] of Object.entries(value)) walk(entry, visit, key);
}

const PROSE_FIELDS = new Set(["assertion", "statement", "scope", "limitations", "note", "limit", "preparation", "observable", "system", "organism",
  "finding", "correctionCheck", "description", "shortDescription", "denotes", "conditions", "candidate", "alternative", "discriminator", "assumptions",
  "unresolved", "openObligations", "reason", "observation", "inference", "refutation", "quantitativeInference", "adaptation", "comparison", "correspondence", "breakdownConditions"]);

test("over the whole release no cell code, record key or study key reaches a reader", async () => {
  const files = (await readdir(directory)).filter((name) => /^(?:nodes|relations|review)-/.test(name));
  const texts = new Map();
  const extents = new Set();
  const locators = new Set();
  const scopes = new Set();
  const keys = { study: new Set(), claim: new Set() };
  const collectKeys = (value) => {
    if (Array.isArray(value)) value.forEach(collectKeys);
    else if (value && typeof value === "object") {
      for (const [key, entry] of Object.entries(value)) {
        if (key === "studies" && Array.isArray(entry)) for (const study of entry) keys.study.add(study.id);
        if (key === "claimIds" && Array.isArray(entry)) for (const id of entry) keys.claim.add(id);
        collectKeys(entry);
      }
    }
  };
  for (const name of files) {
    const chunk = JSON.parse(await readFile(new URL(name, directory), "utf8"));
    collectKeys(chunk);
    walk(chunk, (text, field) => {
      if (PROSE_FIELDS.has(field)) texts.set(text, field);
      if (field === "extent" || field === "readExtent") extents.add(text);
      if (field === "locator") locators.add(text);
      if (field === "scope") scopes.add(text);
    });
  }
  walk(graph.edges.map(({ assertion }) => ({ assertion })), (text, field) => texts.set(text, field));
  assert.ok(texts.size > 10000 && extents.size > 300 && locators.size > 1000 && keys.study.size > 500);
  // Bibliographic strings keep their own forms: a DOI ends in "/nrn2618", a spreadsheet cell in "E12,F12", a ratio reads "myristoleate:glycerol-monomyristoleate".
  const leaks = (text) => (text.match(/\b(?:[Aa]rising|[Cc]ause) \d+\.\d+|\bP-[a-z]+\d{4}\b|\bC-phys-|\borginfl-|(?<![\w./-])[a-z]{2,}\d{4}\b(?![-.\w/])|(?<![\w!:,/])F(?:0[1-9]|1[0-2])\b(?!:)|(?<![\w:])(?:bio|cell|cog|l0|neur|opt|org|phys|ret|soc|vis):[a-z0-9-]+/g) ?? []);
  const namedClaims = [...keys.claim].filter((key) => /^(?:P-|C-phys-l0)/.test(key));
  assert.ok(namedClaims.includes("P-fesenko1985") && namedClaims.includes("C-phys-l0-bridge"));
  let changed = 0;
  for (const text of texts.keys()) {
    const plain = plainProse(text, nameOf);
    if (plain !== text) changed += 1;
    assert.deepEqual(leaks(plain), [], plain.slice(0, 200));
    for (const id of namedClaims) assert.ok(!plain.includes(id), id);
  }
  assert.ok(changed > 1000, "The obligations, scopes and limits that name arisings are all rewritten");
  for (const extent of extents) {
    const plain = readingExtent(extent);
    assert.doesNotMatch(plain, /^[a-z0-9]+(?:-[a-z0-9]+)+\b/, extent);
    assert.match(plain, /^[A-Za-z]/, extent);
    assert.doesNotMatch(plain, /\.$/, extent);
  }
  assert.ok(scopes.has("specified-Bell-test"));
  for (const scope of scopes) assert.doesNotMatch(plainSlug(scope), /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+$/, scope);
  for (const locator of locators) {
    const plain = plainLocator(locator);
    assert.doesNotMatch(plain, /^\/|\(\)|^[a-z0-9]+(?:-[a-z0-9]+)+$|^F\d\d\b/, locator);
  }
});

test("the Studio writes release prose through the mapping, keeps a plain release as declared and leaves the raw record alone", async () => {
  const source = await readFile(new URL("apps/model-studio/model-studio.js", root), "utf8");
  assert.match(source, /function prose\(text\) \{\n {2}return state\.ontology \? plainProse\(text, \(id\) => displayName\(nodeSummary\(id\)\)\) : text;/);
  assert.doesNotMatch(source, /namedArisings/);
  assert.doesNotMatch(source, /\?\? citation\.sourceId/, "An unresolved source shows no key");
  assert.doesNotMatch(source, /reviewedLocators \?\? \[\]\)\.join/, "Reviewed locators read as words, as citation locators do");
  assert.equal(source.match(/\(study\.reviewedLocators \?\? \[\]\)\.map\(plainLocator\)\.join/g)?.length, 3);
  for (const line of ["proseLine(`Limit: ${limit}`)", "proseLine(`Scope: ${plainSlug(claim.scope)}`)", "prose(edge.assertion)", "prose(node.shortDescription)", "prose(description)",
    "proseLine(`Source review: ${reviewText}`)", "readingExtent(study.readExtent)", "plainLocator(citation.locator)", "humanize(comparison.result)", "slugWords(observation.kind)"]) {
    assert.ok(source.includes(line), line);
  }
  assert.match(source, /pre\.textContent = JSON\.stringify\(record, null, 2\)/, "The raw record stays exact");
  assert.match(source, /elements\["selected-record"\]\.textContent = JSON\.stringify\(record, null, 2\)/);
});

const technicalNames = graph.nodes.filter((node) => node.layer !== "arising").map((node) => node.name);

test("a record named by a study key reads as the study", () => {
  for (const [name, shown] of [
    ["albring2012-expectation-intracellular: acquisition context", "Albring 2012, expectation intracellular: acquisition context"],
    ["albring2012-four-reexposures: acquisition context", "Albring 2012, four re-exposures: acquisition context"],
    ["orginfl-aged-bmdm-efferocytosis: acquisition context", "Aged BMDM efferocytosis: acquisition context"],
    ["orginfl-arnold-early-depletion: acquisition context", "Arnold, early depletion: acquisition context"],
    ["orginfl-cantos-main: acquisition context", "CANTOS, main: acquisition context"],
    ["orginfl-thevar-anti-tnf: acquisition context", "Thevaranjan, anti-TNF: acquisition context"],
    ["orginfl-mannick-phase2b: acquisition context", "Mannick, phase 2b: acquisition context"],
    ["woolley2010-three-person: fitted task-performance structure", "Woolley 2010, three-person: fitted task-performance structure"],
    ["artal2001-component-model: bounded result", "Artal 2001, component model: bounded result"],
    ["berry1997-rabbit: preparation", "Berry 1997, rabbit: preparation"],
    ["vandenbrink2014-signal-size-history: acquisition context", "van den Brink 2014, signal size history: acquisition context"],
    ["mccombs1972-chapel-hill-agenda: acquisition context", "McCombs 1972, Chapel Hill agenda: acquisition context"],
    ["munoz2013-primed-bmdm-ion-gating: acquisition context", "Mu\u00f1oz-Planillo 2013, primed BMDM ion gating: acquisition context"],
    ["rivlin2012-on-blockade: preparation", "Rivlin-Etzion 2012, On-pathway blockade: preparation"],
    ["mitroulis2018-day28-transplant: acquisition context", "Mitroulis 2018, day 28 transplant: acquisition context"],
    ["novakovic2016-endotoxemia-exvivo: acquisition context", "Novakovic 2016, endotoxemia ex vivo: acquisition context"],
    ["walker2012-acth-cort-timing: acquisition context", "Walker 2012, ACTH and corticosterone timing: acquisition context"],
    ["smith1962: acquisition context", "Smith 1962: acquisition context"],
    ["smith1962-classroom-auctions", "Smith 1962, classroom auctions"]
  ]) assert.equal(recordDisplayName(name), shown);
});

test("a name that is no study key stays byte-identical", () => {
  for (const name of ["mTOR-sensitive SASP output context", "c-Fos-independent maintenance of chromatin opening", "p16-selected cell clearance in aging mice",
    "Cortisol: conditioned peripheral response", "GH: no significant suggestion-only response", "cGMP-dependent rod conductance", "QED_L finite-volume prescription",
    "Four re-exposures: stimulated immune-cell endpoint", "Chronic Low-Grade Inflammation: reviewed scope", "self-assembly", "self-assembly: a reviewed scope", "note: a lowercase word", "orginfl: alone",
    "beta-catenin: nuclear response", "pre-2000 deaths: a count", "Albring2012-expectation: Capitalized", "", "name: with a\nnew line"]) {
    assert.equal(recordDisplayName(name), name);
  }
  assert.equal(recordDisplayName(undefined), undefined);
  assert.equal(recordDisplayName(null), null);
});

test("over the release's names, only study keys change and they all read as words", () => {
  assert.equal(technicalNames.length, 2537);
  const changed = technicalNames.filter((name) => recordDisplayName(name) !== name);
  assert.equal(changed.length, 216);
  for (const node of graph.nodes.filter((candidate) => candidate.layer === "arising")) assert.equal(recordDisplayName(node.name), node.name, "No arising is touched");
  const key = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)+: /;
  assert.deepEqual([...technicalNames].filter((name) => !key.test(name) && /^[a-z0-9]+-/.test(name) && recordDisplayName(name) !== name), [], "A name that does not open with a key stays");
  for (const name of technicalNames) {
    const shown = recordDisplayName(name);
    assert.doesNotMatch(shown, key, `Still reads like a key: ${shown}`);
    assert.equal(recordDisplayName(shown), shown, "Showing a shown name changes nothing");
  }
  for (const name of changed) {
    const shown = recordDisplayName(name);
    assert.doesNotMatch(shown, /orginfl|[a-z](?:19|20)\d{2}|\d{4}-/i, shown);
    assert.match(shown, /^(?:[A-Z]|van den Brink )/, shown);
    assert.equal(shown.slice(shown.lastIndexOf(": ")), name.slice(name.lastIndexOf(": ")), "The suffix stays");
    assert.doesNotMatch(shown.slice(0, shown.lastIndexOf(": ")), /(?:^|[\s,])[a-z]+-[a-z]+-[a-z]+/, `Slug left in ${shown}`);
  }
  assert.equal(new Set(technicalNames.map(recordDisplayName)).size, new Set(technicalNames).size, "Two records keep two names");
  const suffixes = new Map();
  for (const name of changed) suffixes.set(name.slice(name.lastIndexOf(": ") + 2), (suffixes.get(name.slice(name.lastIndexOf(": ") + 2)) ?? 0) + 1);
  assert.deepEqual(Object.fromEntries(suffixes), { "acquisition context": 176, preparation: 19, "bounded result": 19, "fitted task-performance structure": 2 });
});

test("the study a name opens with is one the record cites, by the name of an author or of the trial", async () => {
  const files = (await readdir(directory)).filter((name) => name.startsWith("nodes-"));
  let checked = 0;
  for (const file of files) {
    const chunk = JSON.parse(await readFile(new URL(file, directory), "utf8"));
    for (const record of chunk.records) {
      const shown = recordDisplayName(record.name);
      if (shown === record.name) continue;
      const lead = shown.match(/^(.+?)(?: \d{4})?(?:, |: )/)?.[1];
      if (!lead || /^Aged /.test(shown)) continue;
      const citations = resolveRecordEvidence(record, chunk.evidence).flatMap((claim) => claim.citations ?? []);
      const known = citations.flatMap((citation) => [...(citation.source?.authors ?? []), citation.source?.id ?? ""]).join("; ").toLowerCase();
      assert.ok(known.includes(lead.toLowerCase()), `${shown}: ${known.slice(0, 200)}`);
      checked += 1;
    }
  }
  assert.equal(checked, 216 - 3, "Every study lead is checked; three names of one study open with what was aged");
});

test("a record id before a colon still reads as its name, and a longer id does not", () => {
  const names = { "org:infl-cantos": "CANTOS trial", "arising:x-y": "An arising" };
  const known = (id) => names[id] ?? null;
  assert.equal(plainProse("org:infl-cantos: acquisition context", known), "CANTOS trial: acquisition context");
  assert.equal(plainProse("See org:infl-cantos, then arising:x-y: both.", known), "See CANTOS trial, then An arising: both.");
  assert.equal(plainProse("Ends with org:infl-cantos:", known), "Ends with CANTOS trial:");
  assert.equal(plainProse("org:infl-cantos:part stays", known), "org:infl-cantos:part stays", "A colon that goes on is part of another key");
  assert.equal(plainProse("org:infl-cantos:/path stays", known), "org:infl-cantos:/path stays");
  assert.equal(plainProse("org:unknown-key: stays", known), "org:unknown-key: stays", "What has no name stays as written");
});

test("the flat list finds a record by the name a reader sees and by its declared name, and orders it by what shows", () => {
  const nodes = graph.nodes.map(recordCatalogEntry);
  assert.equal(recordCatalogEntry(graph.nodes[0]), graph.nodes[0], "Nothing is copied for a name that stays");
  const presentation = createLazyModelPresentation({ identity: graph.identity, nodes, edges: graph.edges });
  try {
    const names = (search) => presentation.catalog({ search, limit: 50 }).items.map((node) => node.name);
    for (const search of ["Albring 2012", "albring 2012, four", "Albring 2012 four", "albring2012-four-reexposures: acquisition context", "four re-exposures: acquisition context"]) {
      assert.ok(names(search).includes("Albring 2012, four re-exposures: acquisition context"), search);
    }
    assert.ok(names("orginfl-cantos-main: acquisition context").includes("CANTOS, main: acquisition context"), "The declared name still finds it, with a suffix no record key holds");
    assert.ok(names("CANTOS, main").includes("CANTOS, main: acquisition context"), "So does the name on screen");
    assert.ok(names("org:infl-orginfl-cantos-main").length > 0, "And its record key");
    const ordered = [];
    for (let offset = 0; offset !== null;) {
      const page = presentation.catalog({ layers: ["technical"], sort: "name", order: "asc", offset, limit: 500 });
      ordered.push(...page.items.map((node) => node.name.toLowerCase()));
      offset = page.nextOffset;
    }
    assert.equal(ordered.length, 2537);
    assert.deepEqual(ordered, [...ordered].sort((left, right) => (left < right ? -1 : left > right ? 1 : 0)));
    assert.ok(ordered.indexOf("aged peritonitis: acquisition context") < ordered.indexOf("albring 2012, four re-exposures: acquisition context"), "A dropped prefix does not decide the order");
  } finally { presentation.close(); }
});

test("a failed request is told in words, never in the browser's or the loader's", () => {
  const coded = (code, message = "A browse response has a different byte length from its descriptor.") => Object.assign(new Error(message), { code });
  const away = "The server could not be reached or did not send the data.";
  const different = "The data that arrived does not match this release.";
  assert.equal(plainFailure(new TypeError("Failed to fetch")), away);
  assert.equal(plainFailure(new TypeError("NetworkError when attempting to fetch resource.")), away);
  assert.equal(plainFailure(new TypeError("Load failed")), away);
  assert.equal(plainFailure(coded("MODEL_PACK_BROWSER_FETCH_FAILED")), away);
  assert.equal(plainFailure(coded("MODEL_PACK_REGISTRY_FETCH_FAILED")), away);
  assert.equal(plainFailure(coded("MODEL_PACK_REGISTRY_STREAM_FAILED")), away);
  assert.equal(plainFailure(coded("MODEL_PACK_BROWSER_HTTP_FAILED")), away);
  assert.equal(plainFailure(coded("STUDIO_BROWSE_RESPONSE_INVALID")), away);
  assert.equal(plainFailure(coded("STUDIO_BROWSE_LENGTH_MISMATCH")), different);
  assert.equal(plainFailure(coded("STUDIO_BROWSE_HASH_MISMATCH")), different);
  assert.equal(plainFailure(coded("MODEL_PACK_TRANSPORT_BUNDLE_MISMATCH")), different);
  assert.equal(plainFailure(coded("MODEL_PACK_WORKER_REQUEST_ID_INVALID")), "Something went wrong while opening it.");
  assert.equal(plainFailure(new Error("The verified Model Pack registry is not loaded.")), "Something went wrong while opening it.");
  assert.equal(plainFailure("gone"), "Something went wrong while opening it.");
  assert.equal(plainFailure(new TypeError("Cannot read properties of undefined")), "Something went wrong while opening it.", "A fault of the page is no fault of the connection");
});
