import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createVerifiedModelPresentation } from "@onto2d/engine/presentation";
import { resolveModelPackRegistry } from "@onto2d/model-pack/registry";
import {
  modelSelectionKey,
  modelSelectionLabel,
  registryEntryForKey,
  requestedRegistryEntry,
  requestedWorkspaceState
} from "../../apps/model-studio/model-selection.js";

const entries = Object.freeze([
  Object.freeze({ modelId: "causal-emergence", version: "2026.11.05.0" }),
  Object.freeze({ modelId: "live-bootstrap-provenance", version: "v2-example" })
]);
const REPOSITORY_ROOT = new URL("../../", import.meta.url);

async function json(relative) {
  return JSON.parse(await readFile(new URL(relative, REPOSITORY_ROOT), "utf8"));
}

test("registered releases have exact, reversible selector identities", () => {
  const key = modelSelectionKey(entries[1]);
  assert.equal(registryEntryForKey(entries, key), entries[1]);
  assert.equal(registryEntryForKey(entries, "missing"), null);
  assert.equal(
    modelSelectionLabel(entries[1]),
    "Live Bootstrap Provenance - v2-example"
  );
});

test("location selection accepts only an exact registered model and version", () => {
  assert.equal(
    requestedRegistryEntry(entries, new URLSearchParams({
      model: "live-bootstrap-provenance",
      version: "v2-example"
    })),
    entries[1]
  );
  assert.equal(
    requestedRegistryEntry(entries, new URLSearchParams({
      model: "live-bootstrap-provenance",
      version: "unregistered"
    })),
    entries[0]
  );
});

test("switching models cannot reuse a node selection from another model", () => {
  const causalLocation = new URLSearchParams({
    model: "causal-emergence",
    version: "2026.11.05.0",
    node: "l0:crt-node",
    depth: "2",
    direction: "parents"
  });
  const liveState = requestedWorkspaceState(
    causalLocation,
    entries[1],
    (id) => id === "event:manifest:1",
    "event:manifest:1"
  );
  assert.deepEqual(liveState, {
    focusId: "event:manifest:1",
    depth: 1,
    direction: "both"
  });

  const causalNodes = new Set(["R-ensemble", "l0:crt-node"]);
  const causalState = requestedWorkspaceState(
    causalLocation,
    entries[0],
    (id) => causalNodes.has(id),
    "R-ensemble"
  );
  assert.deepEqual(causalState, {
    focusId: "l0:crt-node",
    depth: 2,
    direction: "parents"
  });
});

test("the explicit Studio default survives registry canonical sorting and respects exact URLs", () => {
  const preferred = entries[0];
  const sorted = [{ modelId: "airflow", version: "v1" }, preferred, entries[1]];
  assert.equal(requestedRegistryEntry(sorted, new URLSearchParams(), preferred), preferred);
  assert.equal(requestedRegistryEntry(sorted, new URLSearchParams({ model: "live-bootstrap-provenance", version: "v2-example" }), preferred), entries[1]);
  assert.equal(requestedRegistryEntry(sorted, new URLSearchParams(), { modelId: "absent", version: "v1" }), sorted[0]);
});

test("all exact registry releases open through the same verified presentation boundary", async () => {
  const registry = await json("models/registry.json");
  for (const entry of registry.entries) {
    const resolution = resolveModelPackRegistry(
      registry,
      "https://onto2d.dev/models/registry.json",
      { modelId: entry.modelId, version: entry.version }
    );
    const pack = await json(`models/${entry.packPath}bundle.json`);
    const presentation = createVerifiedModelPresentation(pack, { resolution });
    assert.equal(presentation.descriptor.identity.modelId, entry.modelId);
    assert.equal(presentation.descriptor.identity.modelVersion, entry.version);
    assert.ok(presentation.catalog({ limit: 1 }).items.length === 1);
    presentation.close();
  }
});

test("the shipped Studio pin resolves the canonical registry and its actual default", async () => {
  const source = await readFile(new URL("apps/model-studio/model-studio.js", REPOSITORY_ROOT), "utf8");
  const expectedRegistryHash = source.match(/const EXPECTED_REGISTRY_HASH = "([^"]+)";/)?.[1];
  const defaults = source.match(/const DEFAULT_MODEL_SELECTION = Object.freeze\(\{ modelId: "([^"]+)", version: "([^"]+)" \}\);/);
  assert.ok(expectedRegistryHash && defaults, "Missing shipped registry pin or default selection");
  const resolved = resolveModelPackRegistry(await json("models/registry.json"), "https://onto2d.dev/models/registry.json", {
    modelId: defaults[1], version: defaults[2]
  }, { expectedRegistryHash });
  assert.equal(resolved.registryHash, expectedRegistryHash);
});

test("an invalid external pack is rejected before presentation", async () => {
  const registry = await json("models/registry.json");
  const entry = registry.entries.find((candidate) => candidate.modelId === "live-bootstrap-provenance");
  const resolution = resolveModelPackRegistry(
    registry,
    "https://onto2d.dev/models/registry.json",
    { modelId: entry.modelId, version: entry.version }
  );
  const pack = await json(`models/${entry.packPath}bundle.json`);
  pack.files["model/nodes.json"][0].name = "tampered after publication";
  assert.throws(
    () => createVerifiedModelPresentation(pack, { resolution }),
    (error) => error.code === "MODEL_PACK_VERIFICATION_FAILED"
  );
});
