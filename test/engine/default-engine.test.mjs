import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { loadModelPackDirectory } from "@onto2d/model-pack/node";
import { Onto2D, bundledCausalEmergenceModelPack } from "onto2d";
import {
  IDENTITY_SCENARIOS,
  TRIANGLE_SKELETON_ID,
  inputView
} from "../../apps/canonical-identity-lab/identity-model.js";

test("the root facade loads the exact bundled Causal Emergence Model Pack", async () => {
  const onto = await Onto2D.create();
  assert.equal(onto.model.name, "Causal Emergence — Canonical Reconstruction");
  assert.equal(onto.model.version, "2026.10.09.4");
  assert.equal(onto.modelResolution.requested, "causal-emergence@stable");
  assert.equal(onto.modelResolution.exact, "causal-emergence@2026.10.09.4");
  assert.equal(onto.model.nodes().length, 1218);
  assert.equal(onto.model.edges().length, 997);
  assert.equal(onto.model.get("l0:crt-node").name, "CRT carrier class — no admitted instance");
  assert.equal(onto.model.get("R-object").parents().length, 5);
  assert.equal(onto.model.edges({ relationLayer: "descriptive" }).length, 817);
  assert.ok(onto.model.query({ level: 0, typeRole: "construction-rule" }).length > 0);
  assert.ok(onto.model.paths({ from: "l0:oscillatory-mode", to: "l0:crt-node" }).length > 0);
});

test("the historical exact version remains selectable with its original identity and semantics", async () => {
  const onto = await Onto2D.create({ model: "causal-emergence@2026.08.15" });
  assert.equal(onto.model.nodes().length, 249);
  assert.equal(onto.model.edges().length, 971);
  assert.equal(onto.model.get("0.8").name, "Resonant Localized Configuration (CRT-Node)");
  assert.equal(onto.model.get("0.8").parents().length, 7);
  assert.equal(onto.model.edges({ relationLayer: "source-parent" }).length, 971);
  assert.ok(onto.model.query({ level: 0, phase: "C", typeRole: "Object" }).length > 0);
  assert.ok(onto.model.paths({ from: "0.0", to: "0.8" }).length > 0);
});

test("the Node loader accepts the current release with an explicit 32 MiB file budget", async () => {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  const loaded = await loadModelPackDirectory(
    path.join(repositoryRoot, "models", "causal-emergence", "releases", "2026.10.09.4"),
    { maxFileBytes: 32 * 1024 * 1024 }
  );
  assert.equal(loaded.manifest.rootHash, bundledCausalEmergenceModelPack.manifest.rootHash);
  assert.equal(loaded.manifest.manifestHash, bundledCausalEmergenceModelPack.manifest.manifestHash);
});

test("the default engine analysis replays the Canonical Identity Lab fixture", async () => {
  const onto = await Onto2D.create();
  assert.equal(onto.analyses()[0].id, "canonical-identity");
  const view = inputView("base", 4, true);
  const artifact = await onto.analyze("canonical-identity", {
    candidate: {
      domain: "single-candidate",
      nodes: view.nodes,
      edges: view.edges
    }
  });
  assert.equal(artifact.result.candidateId, IDENTITY_SCENARIOS.base.candidateId);
  assert.equal(artifact.result.skeletonId, TRIANGLE_SKELETON_ID);
  assert.equal(artifact.model.modelRootHash, bundledCausalEmergenceModelPack.manifest.rootHash);
});

test("the root facade rejects option accessors without invoking them", async () => {
  let reads = 0;
  const options = {};
  Object.defineProperty(options, "models", {
    enumerable: true,
    get() {
      reads += 1;
      return [];
    }
  });
  await assert.rejects(() => Onto2D.create(options), TypeError);
  assert.equal(reads, 0);
});
