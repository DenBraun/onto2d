import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildModelPack, verifyModelPack } from "@onto2d/model-pack";
import { loadModelPackDirectory } from "@onto2d/model-pack/node";
import { hashArtifactBytes } from "@onto2d/kernel";
import {
  verifyCanonicalRelease,
  writeCanonicalRelease
} from "../../models/causal-emergence/canonical/build.mjs";

const pretty = (value) => `${JSON.stringify(value, null, 2)}\n`;
const compact = (value) => `${JSON.stringify(value)}\n`;

function fixture(description = "A scoped response with quoted \"inputs\", a line\nbreak and \u03bc normalization.") {
  return buildModelPack({
    model: { id: "canonical-serialization-fixture", name: "Serialization fixture", version: "2026.10.02.8" },
    source: { id: "fixture-source", files: [{ path: "selected-data.json", hash: hashArtifactBytes(new TextEncoder().encode("selected input\n")) }] },
    nodes: [{ id: "input", description }, { id: "result", description: "Conditional result" }],
    edges: [{ id: "input-result", source: "input", target: "result", role: "interpretation-dependency" }],
    dictionaries: { source: { title: "Selected input", values: [0, -0.25, 1.5], optional: null } }
  });
}

async function withDirectory(run) {
  const temporary = await mkdtemp(path.join(os.tmpdir(), "onto2d-canonical-serialization-"));
  try {
    return await run(path.join(temporary, "release"), temporary);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

function paths(pack) {
  return ["manifest.json", ...Object.keys(pack.files), "bundle.json"].sort();
}

async function snapshot(directory, pack) {
  return Promise.all(paths(pack).map(async (relative) => {
    const filename = path.join(directory, relative);
    return { relative, bytes: await readFile(filename), modified: (await stat(filename, { bigint: true })).mtimeNs };
  }));
}

test("canonical compact bundle and semantic splits preserve loader identity and readable metadata", async () => {
  await withDirectory(async (directory) => {
    const pack = fixture();
    await writeCanonicalRelease(pack, directory);
    const bundle = await readFile(path.join(directory, "bundle.json"), "utf8");
    assert.equal(bundle, compact(pack));
    assert.ok(Buffer.byteLength(bundle) < Buffer.byteLength(pretty(pack)));
    const semanticPaths = pack.manifest.semanticFiles.map((file) => file.path);
    assert.deepEqual([...semanticPaths].sort(), ["model/dictionaries.json", "model/edges.json", "model/nodes.json"]);
    for (const relative of semanticPaths) {
      const value = pack.files[relative];
      const text = await readFile(path.join(directory, relative), "utf8");
      assert.equal(text, compact(value), `Compact semantic file ${relative}`);
      assert.ok(Buffer.byteLength(text) < Buffer.byteLength(pretty(value)), `Reduced transport bytes: ${relative}`);
      assert.deepEqual(JSON.parse(text), value, `Unchanged semantic value: ${relative}`);
      assert.notEqual(hashArtifactBytes(new TextEncoder().encode(text)), hashArtifactBytes(new TextEncoder().encode(pretty(value))), `Changed bytes: ${relative}`);
    }
    for (const [relative, value] of Object.entries({ "manifest.json": pack.manifest, ...pack.files })) {
      if (!semanticPaths.includes(relative)) {
        assert.equal(await readFile(path.join(directory, relative), "utf8"), pretty(value), `Readable metadata file ${relative}`);
      }
    }

    const loaded = await loadModelPackDirectory(directory);
    const parsedCompact = verifyModelPack(JSON.parse(bundle));
    const parsedPretty = verifyModelPack(JSON.parse(pretty(pack)));
    assert.deepEqual(loaded, pack);
    assert.deepEqual(parsedCompact, parsedPretty);
    assert.equal(parsedCompact.manifest.rootHash, pack.manifest.rootHash);
    assert.equal(parsedCompact.manifest.manifestHash, pack.manifest.manifestHash);
    assert.ok(parsedCompact.manifest.semanticFiles.length > 0);
    assert.deepEqual(parsedCompact.manifest.semanticFiles, pack.manifest.semanticFiles);
    assert.deepEqual(parsedCompact.manifest.indexFiles, pack.manifest.indexFiles);
    assert.notEqual(hashArtifactBytes(new TextEncoder().encode(bundle)), hashArtifactBytes(new TextEncoder().encode(pretty(pack))), "Transport bytes differ while semantic hashes agree");
  });
});

test("canonical serialization is deterministic and exact replay performs no writes", async () => {
  await withDirectory(async (directory, temporary) => {
    const pack = fixture();
    await writeCanonicalRelease(pack, directory);
    const before = await snapshot(directory, pack);
    assert.equal(await verifyCanonicalRelease(pack, directory), pack);
    assert.equal(await writeCanonicalRelease(pack, directory), pack);
    assert.deepEqual(await snapshot(directory, pack), before);

    const secondDirectory = path.join(temporary, "second-release");
    const independentlyBuilt = fixture();
    await writeCanonicalRelease(independentlyBuilt, secondDirectory);
    for (const { relative, bytes } of before) {
      assert.deepEqual(await readFile(path.join(secondDirectory, relative)), bytes, `Deterministic bytes: ${relative}`);
    }
  });
});

test("existing readable semantic releases load but cannot be compacted in place", async () => {
  for (const prettyBundle of [false, true]) {
    await withDirectory(async (directory) => {
      const pack = fixture();
      await writeCanonicalRelease(pack, directory);
      // Cover the prior compact-bundle/readable-split layout and the older
      // entirely readable layout without introducing version-dependent code.
      for (const { path: relative } of pack.manifest.semanticFiles) {
        await writeFile(path.join(directory, relative), pretty(pack.files[relative]));
      }
      if (prettyBundle) await writeFile(path.join(directory, "bundle.json"), pretty(pack));
      const before = await snapshot(directory, pack);
      assert.deepEqual(await loadModelPackDirectory(directory), pack, "Existing readable transport still loads semantically");
      assert.deepEqual(verifyModelPack(JSON.parse(await readFile(path.join(directory, "bundle.json"), "utf8"))), pack);
      await assert.rejects(() => verifyCanonicalRelease(pack, directory), /Stale canonical derivative: model\/(?:dictionaries|edges|nodes)\.json/);
      await assert.rejects(() => writeCanonicalRelease(pack, directory), /Refusing to overwrite release .*choose a new source version/);
      assert.deepEqual(await snapshot(directory, pack), before, "Refusal does not rewrite old release bytes or timestamps");
    });
  }
});

test("canonical verification rejects even semantically equivalent transport-byte drift", async () => {
  for (const relative of ["bundle.json", "model/nodes.json", "model/edges.json", "model/dictionaries.json", "manifest.json", "indexes/by-id.json"]) {
    await withDirectory(async (directory) => {
      const pack = fixture();
      await writeCanonicalRelease(pack, directory);
      const filename = path.join(directory, relative);
      await writeFile(filename, `${await readFile(filename, "utf8")} `);
      const before = await snapshot(directory, pack);
      assert.deepEqual(await loadModelPackDirectory(directory), pack, "Whitespace does not change model semantics");
      await assert.rejects(() => verifyCanonicalRelease(pack, directory), /Stale canonical derivative/);
      await assert.rejects(() => writeCanonicalRelease(pack, directory), /Refusing to overwrite release/);
      assert.deepEqual(await snapshot(directory, pack), before);
    });
  }
});

test("compact semantic split tampering fails integrity without being rescued by an intact bundle", async () => {
  const changes = [
    ["model/nodes.json", (value) => { value[0].description = "Unreviewed replacement"; }],
    ["model/edges.json", (value) => { value[0].role = "unreviewed-dependency"; }],
    ["model/dictionaries.json", (value) => { value.source.values[1] = -0.5; }]
  ];
  for (const [relative, mutate] of changes) {
    await withDirectory(async (directory) => {
      const pack = fixture();
      await writeCanonicalRelease(pack, directory);
      const filename = path.join(directory, relative);
      const altered = JSON.parse(await readFile(filename, "utf8"));
      mutate(altered);
      await writeFile(filename, compact(altered));
      const before = await snapshot(directory, pack);
      assert.deepEqual(verifyModelPack(JSON.parse(await readFile(path.join(directory, "bundle.json"), "utf8"))), pack, "The independent bundle remains valid");
      await assert.rejects(() => loadModelPackDirectory(directory), undefined, `Changed semantic split must fail: ${relative}`);
      await assert.rejects(() => verifyCanonicalRelease(pack, directory), /Stale canonical derivative/);
      await assert.rejects(() => writeCanonicalRelease(pack, directory), /Refusing to overwrite release/);
      assert.deepEqual(await snapshot(directory, pack), before, "Failure never repairs or overwrites the changed release");
    });
  }
});

test("canonical release writer refuses changed scientific content in an existing directory", async () => {
  await withDirectory(async (directory) => {
    const pack = fixture();
    await writeCanonicalRelease(pack, directory);
    const before = await snapshot(directory, pack);
    const changed = fixture("A different scientific statement");
    assert.notEqual(changed.manifest.rootHash, pack.manifest.rootHash);
    await assert.rejects(() => writeCanonicalRelease(changed, directory), /Refusing to overwrite release/);
    assert.deepEqual(await snapshot(directory, pack), before);
    await verifyCanonicalRelease(pack, directory);
  });
});

test("canonical release inventory and invalid-pack failures do not repair immutable output", async () => {
  await withDirectory(async (directory, temporary) => {
    const pack = fixture();
    await writeCanonicalRelease(pack, directory);
    await writeFile(path.join(directory, "extra.json"), "{}\n");
    const before = await snapshot(directory, pack);
    await assert.rejects(() => verifyCanonicalRelease(pack, directory), /Release file inventory differs/);
    await assert.rejects(() => writeCanonicalRelease(pack, directory), /Refusing to overwrite release/);
    assert.deepEqual(await snapshot(directory, pack), before);
    assert.equal(await readFile(path.join(directory, "extra.json"), "utf8"), "{}\n");

    const invalid = structuredClone(pack);
    invalid.files["model/nodes.json"][0].description = "Unhashed replacement";
    const newDirectory = path.join(temporary, "invalid-release");
    await assert.rejects(() => writeCanonicalRelease(invalid, newDirectory));
    await assert.rejects(() => stat(newDirectory), (error) => error.code === "ENOENT", "Invalid pack creates no release directory");
  });
});
