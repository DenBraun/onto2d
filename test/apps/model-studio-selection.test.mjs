import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createVerifiedModelPresentation } from "@onto2d/engine/presentation";
import { resolveModelPackRegistry } from "@onto2d/model-pack/registry";
import {
  addressNeedsVersion,
  modelSelectionKey,
  modelSelectionLabel,
  namesUnknownModel,
  registryEntryForKey,
  requestedRegistryEntry,
  requestedWorkspaceState
} from "../../apps/model-studio/model-selection.js";

const entries = Object.freeze([
  Object.freeze({ modelId: "causal-emergence", version: "2026.11.08.0" }),
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

test("an address opens its model, whatever version it names or leaves out", () => {
  const opened = (values, preferred) => requestedRegistryEntry(entries, new URLSearchParams(values), preferred);
  assert.equal(opened({ model: "live-bootstrap-provenance", version: "v2-example" }), entries[1], "The release it names");
  assert.equal(opened({ model: "live-bootstrap-provenance" }), entries[1], "No version");
  assert.equal(opened({ model: "live-bootstrap-provenance", version: "earlier" }), entries[1], "An earlier version");
  assert.equal(opened({ model: "absent", version: "v1" }), entries[0], "A model not registered gets no release of another name");
  assert.equal(opened({ model: "absent" }, entries[1]), entries[1], "It falls to the preferred one");
  assert.equal(opened({}, entries[1]), entries[1], "As does an address naming no model");
});

test("a model with several releases is opened by name, by preference, then by its last release", () => {
  const several = [{ modelId: "m", version: "1" }, { modelId: "m", version: "2" }, { modelId: "m", version: "3" }];
  const opened = (values, preferred) => requestedRegistryEntry(several, new URLSearchParams(values), preferred);
  assert.equal(opened({ model: "m", version: "1" }), several[0]);
  assert.equal(opened({ model: "m" }, several[1]), several[1]);
  assert.equal(opened({ model: "m", version: "gone" }, { modelId: "other", version: "2" }), several[1], "A preference counts for its own model");
  assert.equal(opened({ model: "m" }), several[2]);
});

test("the address of a registered model holds no version unless the name cannot tell", () => {
  assert.equal(addressNeedsVersion(entries, entries[0]), false);
  assert.equal(addressNeedsVersion(entries, entries[1]), false);
  assert.equal(addressNeedsVersion(entries, { modelId: "local-import", version: "rdf-1" }), true, "A local import has no registry entry");
  const several = [{ modelId: "m", version: "1" }, { modelId: "m", version: "2" }];
  assert.equal(addressNeedsVersion(several, several[0]), true);
});

test("only an address naming a model the registry does not hold counts as unknown", () => {
  const named = (values) => namesUnknownModel(entries, new URLSearchParams(values));
  assert.equal(named({ model: "causal-emergence", version: "2026.11.08.0" }), false, "The current release");
  assert.equal(named({ model: "causal-emergence", version: "2026.11.05.0" }), false, "An earlier version of the model");
  assert.equal(named({ model: "causal-emergence" }), false, "No version");
  assert.equal(named({}), false, "A bare address asks for nothing");
  assert.equal(named({ node: "arising:6.21" }), false, "No model named");
  assert.equal(named({ model: "absent", version: "v1" }), true, "A model not registered");
  assert.equal(named({ model: "absent" }), true);
  assert.equal(named({ model: "" }), false, "An empty value names nothing");
  assert.equal(new URLSearchParams("model").get("model"), "", "Nor does the name alone, which reads the same");
  assert.equal(named({ model: "", node: "arising:6.21", mode: "causes" }), false);
});

test("an address keeps its focus, depth and direction across versions of its model", () => {
  const earlier = new URLSearchParams({ model: "causal-emergence", version: "2026.11.05.0", node: "l0:crt-node", depth: "2", direction: "parents" });
  assert.deepEqual(requestedWorkspaceState(earlier, entries[0], () => true, "R-ensemble"), { focusId: "l0:crt-node", depth: 2, direction: "parents" });
  const unversioned = new URLSearchParams({ model: "causal-emergence", node: "l0:crt-node", depth: "3" });
  assert.deepEqual(requestedWorkspaceState(unversioned, entries[0], () => true, "R-ensemble"), { focusId: "l0:crt-node", depth: 3, direction: "both" });
  const gone = new URLSearchParams({ model: "causal-emergence", node: "removed" });
  assert.equal(requestedWorkspaceState(gone, entries[0], () => false, "R-ensemble").focusId, "R-ensemble", "A record the release no longer holds gives the default focus");
});

test("switching models cannot reuse a node selection from another model", () => {
  const causalLocation = new URLSearchParams({
    model: "causal-emergence",
    version: "2026.11.08.0",
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
