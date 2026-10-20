import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildModelPack, ModelPackError, modelPackFilePaths, verifyModelPack } from "../src/index.js";
import {
  MODEL_PACK_BROWSER_LIMITS, loadModelPackBundle, loadModelPackHttpDirectory
} from "../src/browser.js";
import {
  MODEL_PACK_ARCHIVE_LIMITS, MODEL_PACK_DIRECTORY_LIMITS,
  loadModelPackArchive, loadModelPackDirectory
} from "../src/node.js";
import { encodeJsonValueTable } from "../src/json-value-table.js";
import { createZip } from "./zip-fixture.mjs";

const BASE = "https://models.example.test/value-table/";
const bytes = (value) => Buffer.from(`${JSON.stringify(value)}\n`, "utf8");
const semanticBytes = (value) => Buffer.byteLength(JSON.stringify(value));

function fixture(version = "1") {
  const publication = {
    id: "publication", title: "A controlled scientific measurement", year: 2026,
    review: { extent: "selected-primary-passages", locators: ["Methods", "Figure 2"],
      limit: "Shared calibration and unreviewed raw acquisition. ".repeat(4) }
  };
  const study = {
    id: "study", sourceId: publication.id, preparation: "A named specimen and controlled stimulus",
    observable: "Calibrated response", limitations: ["Separate source interpretation and response model."]
  };
  const claim = {
    id: "claim", statement: "A finite response in the named preparation.", status: "publication-supported",
    citations: [{ sourceId: publication.id, locator: "Figure 2", source: publication }],
    contexts: [study], experimentalContexts: [], limitations: ["No universal formation rule."]
  };
  return buildModelPack({
    model: { id: "value-table-loaders", name: "Lossless scientific transport", version },
    source: { id: "source", files: [] },
    nodes: Array.from({ length: 8 }, (_, index) => ({
      id: `node-${index}`, name: "A scoped observation", level: 2,
      description: "The complete source description and experimental boundary.",
      claimIds: [claim.id], rationale: [claim]
    })),
    edges: [{ id: "connection", source: "node-0", target: "node-1", claimIds: [claim.id] }],
    dictionaries: { sources: [publication], claims: [claim], studies: [study] }
  });
}

function transportValues(pack, { encoded = true, bundle = true } = {}) {
  return new Map([
    ["manifest.json", pack.manifest],
    ...Object.entries(pack.files).map(([relative, value]) => [relative,
      encoded && relative === "model/nodes.json" ? encodeJsonValueTable(value) : value]),
    ...(bundle ? [["bundle.json", encoded ? encodeJsonValueTable(pack) : pack]] : [])
  ]);
}

function fakeFetch(values) {
  const calls = [];
  return {
    calls,
    fetch: async (input) => {
      const url = new URL(input);
      const relative = url.pathname.slice(new URL(BASE).pathname.length);
      calls.push(relative);
      const body = bytes(values.get(relative) ?? {});
      const status = values.has(relative) ? 200 : 404;
      return {
        ok: status === 200, status, redirected: false, type: "basic", url: url.href,
        headers: new Headers({ "content-type": "application/json", "content-length": String(body.byteLength) }),
        body: new ReadableStream({
          start(controller) {
            const midpoint = Math.floor(body.byteLength / 2);
            controller.enqueue(body.subarray(0, midpoint));
            controller.enqueue(body.subarray(midpoint));
            controller.close();
          }
        })
      };
    }
  };
}

async function withDisk(values, run) {
  const temporary = await mkdtemp(path.join(os.tmpdir(), "onto2d-value-table-loaders-"));
  try {
    const directory = path.join(temporary, "directory");
    await mkdir(directory);
    for (const [relative, value] of values) {
      const target = path.join(directory, ...relative.split("/"));
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, bytes(value));
    }
    const archive = path.join(temporary, "fixture.zip");
    await writeFile(archive, createZip([...values].map(([name, value]) => ({ name, data: bytes(value) }))).bytes);
    return await run({ directory, archive });
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

function samePack(actual, expected) {
  assert.deepEqual(actual, expected);
  assert.equal(actual.manifest.rootHash, expected.manifest.rootHash);
  assert.equal(actual.manifest.manifestHash, expected.manifest.manifestHash);
  assert.ok(Object.isFrozen(actual));
  assert.ok(Object.isFrozen(actual.files["model/nodes.json"][0].rationale[0]));
}

async function rejected(action, code) {
  await assert.rejects(action, (error) => error instanceof ModelPackError && error.code === code);
}

async function expandedLimit(action) {
  await assert.rejects(action, (error) => error instanceof ModelPackError && [
    "MODEL_PACK_TRANSPORT_LIMIT_EXCEEDED", "MODEL_PACK_JSON_VALUE_TABLE_LIMIT_EXCEEDED"
  ].includes(error.code));
}

test("encoded splits and bundle restore the same complete pack through every loader", async () => {
  const pack = fixture();
  const values = transportValues(pack);
  samePack(verifyModelPack(values.get("bundle.json")), pack);
  const bundle = bytes(values.get("bundle.json"));
  samePack(await loadModelPackBundle(bundle), pack);
  samePack(await loadModelPackBundle(new Blob([bundle])), pack);
  for (const policy of ["omit", "required"]) {
    const mock = fakeFetch(values);
    samePack(await loadModelPackHttpDirectory(BASE, { fetch: mock.fetch, bundle: policy }), pack);
    assert.deepEqual(mock.calls, ["manifest.json", ...Object.values(modelPackFilePaths()),
      ...(policy === "required" ? ["bundle.json"] : [])]);
  }
  await withDisk(values, async ({ directory, archive }) => {
    samePack(await loadModelPackDirectory(directory), pack);
    samePack(await loadModelPackArchive(archive), pack);
  });
});

test("legacy plain arrays and ordinary bundles retain the same loader behavior", async () => {
  const pack = fixture();
  const values = transportValues(pack, { encoded: false });
  samePack(verifyModelPack(pack), pack);
  samePack(await loadModelPackBundle(bytes(pack)), pack);
  const mock = fakeFetch(values);
  samePack(await loadModelPackHttpDirectory(BASE, { fetch: mock.fetch, bundle: "required" }), pack);
  await withDisk(values, async ({ directory, archive }) => {
    samePack(await loadModelPackDirectory(directory), pack);
    samePack(await loadModelPackArchive(archive), pack);
  });
});

test("valid codec content still fails the unchanged scientific semantic hashes when tampered", async () => {
  const pack = fixture();
  const changed = structuredClone(pack);
  changed.files["model/nodes.json"][0].description = "An unsupported replacement of the scientific record.";
  const values = transportValues(pack);
  values.set("model/nodes.json", encodeJsonValueTable(changed.files["model/nodes.json"]));
  assert.throws(() => verifyModelPack(encodeJsonValueTable(changed)),
    (error) => error instanceof ModelPackError && error.code === "MODEL_PACK_VERIFICATION_FAILED");
  await rejected(() => loadModelPackBundle(bytes(encodeJsonValueTable(changed))), "MODEL_PACK_VERIFICATION_FAILED");
  const mock = fakeFetch(values);
  await rejected(() => loadModelPackHttpDirectory(BASE, { fetch: mock.fetch, bundle: "required" }), "MODEL_PACK_VERIFICATION_FAILED");
  await withDisk(values, async ({ directory, archive }) => {
    await rejected(() => loadModelPackDirectory(directory), "MODEL_PACK_VERIFICATION_FAILED");
    await rejected(() => loadModelPackArchive(archive), "MODEL_PACK_VERIFICATION_FAILED");
  });
});

test("an individually verified different encoded bundle cannot replace authoritative split content", async () => {
  const pack = fixture();
  const values = transportValues(pack);
  const different = fixture("2");
  values.set("bundle.json", encodeJsonValueTable(different));
  samePack(verifyModelPack(values.get("bundle.json")), different);
  const mock = fakeFetch(values);
  await rejected(() => loadModelPackHttpDirectory(BASE, { fetch: mock.fetch, bundle: "required" }),
    "MODEL_PACK_BROWSER_BUNDLE_MISMATCH");
  await withDisk(values, async ({ directory, archive }) => {
    await rejected(() => loadModelPackDirectory(directory), "MODEL_PACK_DIRECTORY_BUNDLE_MISMATCH");
    await rejected(() => loadModelPackArchive(archive), "MODEL_PACK_ARCHIVE_BUNDLE_MISMATCH");
  });
});

test("unreferenced codec data is rejected through split and complete-bundle loaders", async () => {
  const pack = fixture();
  const values = transportValues(pack);
  values.get("model/nodes.json").table.push(["a", ["unbound transport data"]]);
  const mock = fakeFetch(values);
  const code = "MODEL_PACK_JSON_VALUE_TABLE_NON_CANONICAL";
  await rejected(() => loadModelPackHttpDirectory(BASE, { fetch: mock.fetch }), code);
  await withDisk(values, async ({ directory, archive }) => {
    await rejected(() => loadModelPackDirectory(directory), code);
    await rejected(() => loadModelPackArchive(archive), code);
  });
  const bundle = encodeJsonValueTable(pack);
  bundle.table.push(["a", ["unbound bundle data"]]);
  assert.throws(() => verifyModelPack(bundle), (error) => error instanceof ModelPackError && error.code === code);
  await rejected(() => loadModelPackBundle(bytes(bundle)), code);
});

test("lower aggregate budgets count expanded splits and count a required bundle again", async () => {
  const pack = fixture();
  for (const bundle of [false, true]) {
    const values = transportValues(pack, { bundle });
    const plain = transportValues(pack, { encoded: false, bundle });
    const physical = [...values.values()].reduce((sum, value) => sum + bytes(value).byteLength, 0);
    const expanded = [...plain.values()].reduce((sum, value) => sum + semanticBytes(value), 0);
    const splits = [...transportValues(pack, { encoded: false, bundle: false }).values()]
      .reduce((sum, value) => sum + semanticBytes(value), 0);
    const maximum = [...values.values()].reduce((largest, value) => Math.max(largest, bytes(value).byteLength), 0);
    const limit = bundle ? Math.max(physical + 1, splits + 1)
      : Math.floor((physical + expanded) / 2);
    assert.ok(physical < limit && limit < expanded, "Physical JSON fits; expanded logical content does not");
    assert.ok(maximum <= limit);
    const mock = fakeFetch(values);
    await expandedLimit(() => loadModelPackHttpDirectory(BASE, {
      fetch: mock.fetch, bundle: bundle ? "required" : "omit", maxFileBytes: maximum, maxTotalBytes: limit
    }));
    await withDisk(values, async ({ directory, archive }) => {
      await expandedLimit(() => loadModelPackDirectory(directory, { maxFileBytes: maximum, maxTotalBytes: limit }));
      await expandedLimit(() => loadModelPackArchive(archive, {
        maxCompressedEntryBytes: maximum, maxUncompressedEntryBytes: maximum, maxTotalUncompressedBytes: limit
      }));
    });
    if (bundle) {
      const withoutBundle = new Map(values); withoutBundle.delete("bundle.json");
      const omit = fakeFetch(withoutBundle);
      samePack(await loadModelPackHttpDirectory(BASE, {
        fetch: omit.fetch, maxFileBytes: maximum, maxTotalBytes: limit
      }), pack);
      await withDisk(withoutBundle, async ({ directory, archive }) => {
        samePack(await loadModelPackDirectory(directory, { maxFileBytes: maximum, maxTotalBytes: limit }), pack);
        samePack(await loadModelPackArchive(archive, {
          maxCompressedEntryBytes: maximum, maxUncompressedEntryBytes: maximum, maxTotalUncompressedBytes: limit
        }), pack);
      });
    }
  }
});

test("a reduced browser bundle budget bounds expansion as well as physical encoded bytes", async () => {
  const pack = fixture();
  const encoded = bytes(encodeJsonValueTable(pack));
  const expanded = semanticBytes(pack);
  const maxBundleBytes = Math.floor((encoded.byteLength + expanded) / 2);
  assert.ok(encoded.byteLength < maxBundleBytes && maxBundleBytes < expanded);
  for (const source of [encoded, new Blob([encoded])]) {
    await expandedLimit(() => loadModelPackBundle(source, { maxBundleBytes }));
  }
});

test("value-table transport preserves all established default budgets", () => {
  assert.deepEqual(MODEL_PACK_BROWSER_LIMITS, {
    maxFileBytes: 16 * 1024 * 1024, maxTotalBytes: 64 * 1024 * 1024,
    maxBundleBytes: 64 * 1024 * 1024, maxUrlLength: 16_384
  });
  assert.deepEqual(MODEL_PACK_DIRECTORY_LIMITS, {
    maxFileCount: 32, maxFileBytes: 16 * 1024 * 1024, maxTotalBytes: 64 * 1024 * 1024
  });
  assert.deepEqual(MODEL_PACK_ARCHIVE_LIMITS, {
    maxArchiveBytes: 64 * 1024 * 1024, maxEntryCount: 32,
    maxCompressedEntryBytes: 16 * 1024 * 1024, maxUncompressedEntryBytes: 16 * 1024 * 1024,
    maxTotalUncompressedBytes: 64 * 1024 * 1024, maxCompressionRatio: 200
  });
});
