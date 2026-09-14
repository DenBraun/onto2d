import assert from "node:assert/strict";
import test from "node:test";
import { canonicalize } from "@onto2d/kernel/canonical";
import { buildModelPack, verifyModelPack } from "../src/index.js";
import { loadModelPackBundle } from "../src/browser.js";
import { createMemoryModelPackCacheStorage, createVerifiedModelPackCache } from "../src/cache.js";
import { verifyTransportFiles } from "../src/transport-layout.js";

const input = (values) => ({
  model: { id: "large-evidence", name: "Large evidence fixture", version: "1" },
  source: { id: "fixture-source", files: [] },
  nodes: [{ id: "a" }], edges: [], dictionaries: { values }
});

test("large evidence survives construction, split/bundle verification and a real cache hit", async () => {
  const values = Array.from({ length: 110_000 }, (_, i) => i);
  const pack = buildModelPack(input(values));
  assert.throws(() => canonicalize(values), { code: "CANONICALIZATION_LIMIT_EXCEEDED" }, "The kernel default remains unchanged");
  assert.deepEqual(verifyModelPack(pack), pack);
  const transport = new Map(Object.entries(pack.files));
  transport.set("manifest.json", pack.manifest); transport.set("bundle.json", pack);
  assert.deepEqual(verifyTransportFiles(transport), pack);
  const loaded = await loadModelPackBundle(new TextEncoder().encode(JSON.stringify(pack)));
  assert.equal(loaded.files["model/dictionaries.json"].values[109_999], 109_999);
  const cache = createVerifiedModelPackCache(createMemoryModelPackCacheStorage());
  const identity = { rootHash: pack.manifest.rootHash, manifestHash: pack.manifest.manifestHash };
  await cache.load(identity, async () => pack);
  const hit = await cache.load(identity, async () => assert.fail("Verified data should come from cache"));
  assert.equal(hit.source, "cache");
  assert.deepEqual(hit.pack, pack);
  const changed = structuredClone(pack);
  changed.files["model/dictionaries.json"].values[109_999] = -1;
  assert.throws(() => verifyModelPack(changed), { code: "MODEL_PACK_VERIFICATION_FAILED" });
});

test("the aggregate budget remains bounded and preserves depth, string and accessor guards", () => {
  assert.throws(() => buildModelPack(input(Array(1_000_000).fill(0))), { code: "CANONICALIZATION_LIMIT_EXCEEDED" });
  let deep = null;
  for (let i = 0; i < 65; i += 1) deep = [deep];
  assert.throws(() => buildModelPack(input(deep)), { code: "CANONICALIZATION_LIMIT_EXCEEDED" });
  assert.throws(() => buildModelPack(input("x".repeat(1_048_577))), { code: "CANONICALIZATION_LIMIT_EXCEEDED" });
  let reads = 0;
  const hostile = input([]);
  Object.defineProperty(hostile.dictionaries, "values", { enumerable: true, get() { reads += 1; return []; } });
  assert.throws(() => buildModelPack(hostile), { code: "CANONICALIZATION_ACCESSOR" });
  assert.equal(reads, 0);
});
