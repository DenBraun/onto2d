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
  assert.equal(onto.model.version, "2026.11.05.0");
  assert.equal(onto.modelResolution.requested, "causal-emergence@stable");
  assert.equal(onto.modelResolution.exact, "causal-emergence@2026.11.05.0");
  assert.equal(onto.model.nodes().length, 2796);
  assert.equal(onto.model.edges().length, 4768);
  assert.equal(onto.model.get("l0:crt-node").name, "CRT carrier class — no admitted instance");
  assert.equal(onto.model.get("R-object").parents().length, 5);
  assert.equal(onto.model.edges({ relationLayer: "descriptive" }).length, 3378);
  assert.ok(onto.model.query({ level: 0, typeRole: "construction-rule" }).length > 0);
  assert.ok(onto.model.paths({ from: "l0:oscillatory-mode", to: "l0:crt-node" }).length > 0);
});

test("an exact version request selects the bundled release without the stable alias", async () => {
  const onto = await Onto2D.create({ model: "causal-emergence@2026.11.05.0" });
  assert.equal(onto.modelResolution.requested, "causal-emergence@2026.11.05.0");
  assert.equal(onto.modelResolution.exact, "causal-emergence@2026.11.05.0");
  assert.equal(onto.modelResolution.modelVersion, "2026.11.05.0");
  assert.equal(onto.modelResolution.modelRootHash, bundledCausalEmergenceModelPack.manifest.rootHash);
  assert.equal(onto.model.version, bundledCausalEmergenceModelPack.manifest.model.version);
  assert.equal(onto.model.rootHash, bundledCausalEmergenceModelPack.manifest.rootHash);
  assert.throws(
    () => onto.models.resolve("causal-emergence@2000.01.01.0"),
    (error) => error.code === "ENGINE_MODEL_RESOLUTION_FAILED",
    "An exact version that is not bundled must fail closed instead of falling back to the stable alias"
  );
});

test("the Node loader accepts the current release within default transport budgets", async () => {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
  const loaded = await loadModelPackDirectory(
    path.join(repositoryRoot, "models", "causal-emergence", "releases", "2026.11.05.0")
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
