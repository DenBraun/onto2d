import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { canonicalize } from "@onto2d/kernel";
import { bundledCausalEmergenceModelPack } from "onto2d";
import { buildCausalEmergenceRelease } from "../../models/causal-emergence/build.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";

// Full source reconstruction belongs to the explicitly requested research suite.
test("the canonical release reproduces the exact bundled Model Pack", async () => {
  assert.deepEqual(await buildCanonicalRelease(), bundledCausalEmergenceModelPack);
});

test("the historical release is an exact reproduction of preserved source bytes", async () => {
  const rebuilt = await buildCausalEmergenceRelease();
  const stored = JSON.parse(await readFile(new URL("../../models/causal-emergence/releases/2026.08.15/bundle.json", import.meta.url), "utf8"));
  assert.equal(canonicalize(rebuilt), canonicalize(stored));
  assert.equal(rebuilt.manifest.statistics.nodeCount, 249);
  assert.equal(rebuilt.manifest.statistics.edgeCount, 971);
  assert.equal(rebuilt.manifest.model.status, "source-snapshot-known-findings");

  const expectedAudit = JSON.parse(await readFile(
    new URL("../fixtures/catalogue-audit.expected.json", import.meta.url),
    "utf8"
  ));
  assert.equal(expectedAudit.summary.weightSumAnomalyCount, 3);
  assert.equal(expectedAudit.summary.nontrivialSccCount, 3);
});
