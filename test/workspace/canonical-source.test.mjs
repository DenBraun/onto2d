import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";

const data = await loadCanonicalSource();

test("the source contract rejects missing citations, invented references, unchecked truth labels and unsupported scientific labels", () => {
  const mutations = [
    (d) => { d.graph.claims[0].citations = []; },
    (d) => { d.graph.claims[0].citations[0].sourceId = "invented"; },
    (d) => { d.graph.entities[0].status = "empirically-established"; },
    (d) => { d.graph.claims[0].status = "analytically-checked"; },
    (d) => { d.graph.claims[0].checkIds = ["invented-check"]; },
    (d) => { d.graph.entities[0].arbitraryTruth = true; },
    (d) => { d.graph.scope.empiricalValidationClaimed = true; },
    (d) => { d.graph.sources.find((s) => s.kind === "research-publication").year = null; }
  ];
  for (const mutate of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed));
  }
});


test("joint rules require distinct multiplicities and cannot assert successful physical admission", () => {
  const triad = data.graph.rules.find((r) => r.id === "R-triad");
  assert.deepEqual(triad.inputs[0], { entityId: "l0:oscillatory-mode", minCount: 3, maxCount: 3, distinct: true, role: "candidate-instances" });
  for (const mutate of [
    (r) => { r.inputLogic = "any"; },
    (r) => { r.inputs[0].distinct = false; },
    (r) => { r.inputs[0].maxCount = 2; },
    (r) => { r.instanceAdmission = "passed"; }
  ]) {
    const changed = structuredClone(data);
    mutate(changed.graph.rules.find((r) => r.id === "R-triad"));
    assert.throws(() => validateCanonicalSource(changed));
  }
});

test("the current output contains evidence and no graph migration history", async () => {
  const pack = await buildCanonicalRelease();
  assert.deepEqual(pack.manifest.statistics, { nodeCount: 938, edgeCount: 566 });
  const dictionaries = pack.files["model/dictionaries.json"];
  assert.equal(dictionaries.claims.length, 908);
  assert.equal(dictionaries.sources.length, 314);
  const census = dictionaries.evidence.neurogenesisData;
  assert.equal(census.sampleCount, 39);
  assert.equal(census.retainedNuclei, 153530);
  assert.equal(census.cohortDiscrepancyResolved, false);
  assert.equal(census.statisticalModelReplayed, false);
  assert.equal(census.biologicalValidationClaimed, false);
  const forbidden = new Set(["migration", "nodeReviews", "edgeReviews", "evidenceReviews", "outgoingRechecks", "legacyReviewId", "legacyCodes", "legacyId", "originalQuantization", "fieldDispositions"]);
  const inspect = (value) => {
    if (!value || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      assert.ok(!forbidden.has(key), `History field in current output: ${key}`);
      inspect(child);
    }
  };
  inspect(pack.files);
  assert.ok(pack.files["model/nodes.json"].every((n) => n.rationale.length));
  assert.ok(!pack.manifest.source.files.some((f) => /source-snapshots|migration\.json/.test(f.path)));
});

test("local JSON citations and reading locators resolve to current source content", async () => {
  for (const source of data.graph.sources.filter((s) => s.path?.endsWith(".json"))) {
    const document = JSON.parse(await readFile(new URL(`../../${source.path}`, import.meta.url), "utf8"));
    const locators = new Set(source.review.locators);
    const collect = (value) => {
      if (!value || typeof value !== "object") return;
      if (value.sourceId === source.id && typeof value.locator === "string") locators.add(value.locator);
      for (const child of Object.values(value)) collect(child);
    };
    collect(data);
    for (const locator of locators) {
      if (!locator.startsWith("/")) continue;
      let value = document;
      // A solitary slash denotes the complete source in the citation contract.
      if (locator === "/") continue;
      for (const segment of locator.slice(1).split("/")) {
        const key = segment.replace(/~1/g, "/").replace(/~0/g, "~");
        assert.ok(value !== null && typeof value === "object" && Object.hasOwn(value, key),
          `Missing source content: ${source.id} ${locator}`);
        value = value[key];
      }
    }
  }
});

test("measurement and retinal evidence cannot be rewired to a different observable", () => {
  for (const [relationId, field, value] of [
    ["retinal:photochemistry-rod-response", "target", "ret:ganglion-spiking"],
    ["retinal:cone-drive-retinal-filtering", "source", "ret:excitable-membrane"],
    ["optical:measurement-context-specular-response", "target", "opt:material-transmission"]
  ]) {
    const changed = structuredClone(data);
    changed.graph.relations.find((r) => r.id === relationId)[field] = value;
    assert.throws(() => validateCanonicalSource(changed));
  }
});
