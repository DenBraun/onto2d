import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { brotliCompressSync, gzipSync } from "node:zlib";
import { buildModelPack } from "@onto2d/model-pack";
import { createVerifiedModelPresentation } from "@onto2d/engine/presentation";
import { createBrowseModelLoader } from "../../apps/model-studio/browse-data.js";
import { buildBrowseArtifacts, checkBrowseArtifacts } from "../../scripts/build-model-studio-data.mjs";

const BASE_URL = "https://example.test/Onto2D/apps/model-studio/data/";
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytes(value) {
  return encoder.encode(`${JSON.stringify(value)}\n`);
}

function hash(value) {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

function fixture() {
  return buildModelPack({
    model: { id: "browse-fixture", name: "Browse Fixture", version: "1" },
    source: {
      id: "browse-source",
      files: [{ path: "source.json", hash: `sha256:${"e".repeat(64)}` }]
    },
    nodes: [
      {
        id: "a", name: "Alpha", level: 0, phase: "preparation",
        typeRole: "context", scientificStatus: "measured",
        shortDescription: "Prepared sample", evidence: { scope: "One sample", values: [1, 2] }
      },
      {
        id: "b", name: "Beta", level: 1, phase: "observation",
        typeRole: "observation", scientificStatus: "measured",
        shortDescription: "Observed response", evidence: { scope: "One detector", values: [3, 4] }
      },
      { id: "c", name: "Gamma", level: 2, shortDescription: "Conditional estimate" },
      { id: "isolated", name: "Isolated", level: 2, scientificStatus: "unresolved" }
    ],
    edges: [
      { id: "ab", source: "a", target: "b", relationLayer: "descriptive", role: "context", assertion: "scoped" },
      { id: "ab-second", source: "a", target: "b", relationLayer: "functional", dependencyType: "conditional", weight: 0.5 },
      { id: "bc", source: "b", target: "c", relationLayer: "descriptive", necessity: "unknown" },
      { id: "ca", source: "c", target: "a", relationLayer: "descriptive" }
    ],
    dictionaries: {
      presentation: { recordLabel: "Records" },
      dictionaryReview: { scope: "Definitions are scoped vocabulary, not formation evidence.", findings: ["Separate review content"] },
      vocabulary: [{
        id: "sample", name: "Sample", group: "measurement", definition: "A specified preparation",
        citations: [{ sourceId: "used-source", role: "supports", locator: "Definition 1" }]
      }],
      sources: [
        { id: "used-source", title: "Scoped observation", url: "https://example.test/paper" },
        { id: "unrelated-source", title: "Unrelated paper" }
      ],
      physics: {
        studies: [{ id: "study", sourceId: "used-source", nodeIds: ["b"], limitations: ["A scoped observation"] }],
        comparisons: [{ id: "comparison", studyIds: ["study"], sourceIds: ["used-source"] }]
      }
    }
  });
}

function resolution(pack) {
  return {
    modelId: pack.manifest.model.id,
    version: pack.manifest.model.version,
    rootHash: pack.manifest.rootHash,
    manifestHash: pack.manifest.manifestHash
  };
}

function transport(files, override) {
  const calls = [];
  const fetch = async (input, init) => {
    const url = new URL(input);
    assert.ok(url.href.startsWith(BASE_URL), `Unexpected request: ${url}`);
    const path = url.href.slice(BASE_URL.length);
    const value = files.get(path);
    calls.push({ path, init });
    if (override) {
      const response = await override({ path, value, init, calls });
      if (response !== undefined) {
        if (response.url === "") Object.defineProperty(response, "url", { value: url.href });
        return response;
      }
    }
    const response = new Response(value ?? "missing", {
      status: value ? 200 : 404,
      headers: { "content-type": "application/json", "content-length": String(value?.byteLength ?? 7) }
    });
    Object.defineProperty(response, "url", { value: url.href });
    return response;
  };
  return { fetch, calls };
}

async function prepared(override) {
  const pack = fixture();
  const artifacts = await buildBrowseArtifacts(pack);
  const mock = transport(artifacts.files, override);
  const load = createBrowseModelLoader({
    indexUrl: `${BASE_URL}index.json`, expectedIndexHash: artifacts.indexHash, fetch: mock.fetch
  });
  return { pack, artifacts, mock, load };
}

function editedArtifacts(artifacts, edit) {
  const files = new Map(artifacts.files);
  const index = structuredClone(artifacts.index);
  const graph = JSON.parse(decoder.decode(files.get(index.entries[0].graph.path)));
  const replace = (descriptor, value) => {
    const encoded = bytes(value);
    files.set(descriptor.path, encoded);
    descriptor.hash = hash(encoded);
    descriptor.byteLength = encoded.byteLength;
  };
  const rewrite = (descriptor, mutate) => {
    const value = JSON.parse(decoder.decode(files.get(descriptor.path)));
    mutate(value);
    replace(descriptor, value);
  };
  edit({ index, graph, rewrite });
  replace(index.entries[0].graph, graph);
  const encoded = bytes(index);
  files.set("index.json", encoded);
  return { files, indexHash: hash(encoded) };
}

function loaderFor(artifacts) {
  const mock = transport(artifacts.files);
  return {
    mock,
    load: createBrowseModelLoader({
      indexUrl: `${BASE_URL}index.json`, expectedIndexHash: artifacts.indexHash, fetch: mock.fetch
    })
  };
}

test("a new deployment bypasses a cached index from the previous release", async () => {
  const previous = fixture();
  const previousArtifacts = buildBrowseArtifacts(previous);
  const current = buildModelPack({
    model: { ...previous.manifest.model, version: "2" },
    source: previous.manifest.source,
    nodes: previous.files["model/nodes.json"],
    edges: previous.files["model/edges.json"],
    dictionaries: previous.files["model/dictionaries.json"]
  });
  const artifacts = buildBrowseArtifacts(current);
  const mock = transport(artifacts.files, ({ path, init }) => {
    if (path === "index.json" && init.cache !== "no-store") {
      return new Response(previousArtifacts.files.get("index.json"), {
        headers: { "content-type": "application/json" }
      });
    }
  });
  const load = createBrowseModelLoader({
    indexUrl: `${BASE_URL}index.json`, expectedIndexHash: artifacts.indexHash, fetch: mock.fetch
  });
  const session = await load(resolution(current));
  assert.equal(session.manifest.model.version, "2");
  assert.deepEqual(await session.inspect("a"), current.files["model/nodes.json"].find((node) => node.id === "a"));
  session.close();
});

test("browse loading fetches only the compact graph and preserves catalogue and neighborhood semantics", async () => {
  const { pack, artifacts, mock, load } = await prepared();
  const session = await load(resolution(pack));
  const complete = createVerifiedModelPresentation(pack);
  assert.equal(mock.calls.length, 2, "Loading must not prefetch evidence or review documents");
  assert.equal(mock.calls[0].path, "index.json");
  assert.equal(mock.calls[0].init.cache, "no-store", "A new deployment must not reuse the previous release index");
  assert.equal(mock.calls[1].init.cache, "default", "Immutable release graph bytes may use HTTP caching before verification");
  assert.deepEqual(session.presentation.descriptor, complete.descriptor);
  for (const query of [
    {}, { search: "detector" }, { search: "response" },
    { levels: [2], sort: "name", order: "desc" },
    { scientificStatuses: ["measured"], sort: "degree", limit: 1, offset: 1 }
  ]) {
    assert.deepEqual(session.presentation.catalog(query), complete.catalog(query));
  }
  for (const focusId of ["a", "b", "c", "isolated"]) {
    for (const direction of ["both", "parents", "children"]) {
      for (const depth of [0, 1, 2]) {
        const query = { focusId, direction, depth, maxNodes: 3, maxEdges: 2 };
        assert.deepEqual(session.presentation.neighborhood(query), complete.neighborhood(query));
      }
    }
  }
  assert.deepEqual(session.dictionaries.presentation, pack.files["model/dictionaries.json"].presentation);
  const graph = JSON.parse(decoder.decode(artifacts.files.get(mock.calls[1].path)));
  assert.ok(graph.nodes.every((node) => !Object.hasOwn(node, "evidence")));
  assert.ok(!Object.hasOwn(graph, "sources"));
  for (const call of mock.calls) {
    assert.equal(call.init.redirect, "error");
    assert.equal(call.init.credentials, "same-origin");
  }
  complete.close();
  session.close();
});

test("record evidence and review sources load only on request and preserve exact source content", async () => {
  const { pack, mock, load } = await prepared();
  const session = await load(resolution(pack));
  const originalNodes = pack.files["model/nodes.json"];
  assert.deepEqual(await session.inspect("b"), originalNodes.find((node) => node.id === "b"));
  assert.equal(mock.calls.length, 3);
  assert.deepEqual(await session.inspect("a"), originalNodes.find((node) => node.id === "a"));
  assert.equal(mock.calls.length, 3, "A verified neighboring record in the same chunk must be reused");
  const review = await session.review("physics");
  assert.deepEqual(review.physics, pack.files["model/dictionaries.json"].physics);
  assert.deepEqual(review.sources, [pack.files["model/dictionaries.json"].sources[0]]);
  assert.equal(mock.calls.length, 4);
  assert.deepEqual(await session.review("physics"), review);
  assert.equal(mock.calls.length, 4);
  await assert.rejects(() => session.inspect("absent"), { code: "STUDIO_BROWSE_NODE_MISSING" });
  await assert.rejects(() => session.review("unavailable"), { code: "STUDIO_BROWSE_REVIEW_MISSING" });
  assert.equal(mock.calls.length, 4, "Missing items do not trigger network requests");
  session.close();
});

test("vocabulary lazy loading retains its scope and cited source without fetching unrelated reviews", async () => {
  const { pack, mock, load } = await prepared();
  const session = await load(resolution(pack));
  const review = await session.review("vocabulary");
  const dictionaries = pack.files["model/dictionaries.json"];
  assert.deepEqual(review.vocabulary, dictionaries.vocabulary);
  assert.deepEqual(review.dictionaryReview, { scope: dictionaries.dictionaryReview.scope });
  assert.deepEqual(review.sources, [dictionaries.sources[0]]);
  assert.equal(mock.calls.length, 3);
  assert.ok(mock.calls.at(-1).path.endsWith("review-vocabulary.json"));
  session.close();
});

test("unknown releases fall back explicitly while known release hash mismatches fail closed", async () => {
  const { pack, mock, load } = await prepared();
  assert.equal(await load({ ...resolution(pack), version: "missing" }), null);
  assert.equal(mock.calls.length, 1);
  await assert.rejects(() => load({ ...resolution(pack), rootHash: `sha256:${"0".repeat(64)}` }));
  assert.ok(mock.calls.every((call) => call.path === "index.json"), "An incompatible pinned identity must never fetch graph data");
  const session = await load(resolution(pack));
  assert.equal(mock.calls.filter((call) => call.path !== "index.json").length, 1);
  session.close();
});

test("the browse artifact builder rejects a semantically modified Model Pack", async () => {
  const pack = structuredClone(fixture());
  pack.files["model/nodes.json"][0].name = "Unsupported replacement";
  await assert.rejects(async () => buildBrowseArtifacts(pack));
});

test("corrupt index, graph, record and review bytes never enter the verified cache and remain retryable", async () => {
  for (const stage of ["index", "graph", "record", "review"]) {
    let rejectedOnce = false;
    const ordinal = { index: 1, graph: 2, record: 3, review: 3 }[stage];
    const { pack, mock, load } = await prepared(({ value, calls }) => {
      if (calls.length !== ordinal || rejectedOnce) return undefined;
      rejectedOnce = true;
      const tampered = new Uint8Array(value.byteLength + 1);
      tampered.set(value);
      tampered[value.byteLength] = 32;
      return new Response(tampered, { headers: { "content-type": "application/json" } });
    });
    if (stage === "index" || stage === "graph") {
      await assert.rejects(() => load(resolution(pack)), undefined, stage);
      const session = await load(resolution(pack));
      assert.ok(session.presentation.has("b"));
      session.close();
    } else {
      const session = await load(resolution(pack));
      const action = () => stage === "record" ? session.inspect("b") : session.review("physics");
      await assert.rejects(action, undefined, stage);
      await action();
      assert.equal(mock.calls.length, 4, "A retry must fetch fresh bytes after a failed verification");
      session.close();
    }
    assert.equal(rejectedOnce, true);
  }
});

test("HTTP failures are explicit and a failed detail request can be retried", async () => {
  let fail = true;
  const { pack, mock, load } = await prepared(({ calls }) => {
    if (calls.length < 3 || !fail) return undefined;
    fail = false;
    return new Response("temporarily unavailable", { status: 503 });
  });
  const session = await load(resolution(pack));
  await assert.rejects(() => session.inspect("b"));
  assert.equal((await session.inspect("b")).id, "b");
  assert.equal(mock.calls.length, 4);
  session.close();
});

test("aborted requests and closed sessions cannot expose or cache late record data", async () => {
  let release;
  let entered;
  const waiting = new Promise((resolve) => { entered = resolve; });
  const { pack, mock, load } = await prepared(async ({ calls }) => {
    if (calls.length !== 3) return undefined;
    entered();
    await new Promise((resolve) => { release = resolve; });
    return undefined;
  });
  const session = await load(resolution(pack));
  const controller = new AbortController();
  const pending = session.inspect("b", { signal: controller.signal });
  const rejection = assert.rejects(pending);
  await waiting;
  controller.abort();
  release();
  await rejection;
  assert.equal((await session.inspect("b")).id, "b");
  assert.equal(mock.calls.length, 4, "Aborted bytes must not be reused");
  session.close();
  await assert.rejects(() => session.inspect("b"));
  await assert.rejects(() => session.review("physics"));
  assert.throws(() => session.presentation.catalog());
});

test("the index streaming budget stops and cancels an oversized response without a length header", async () => {
  let pulls = 0;
  let cancelled = false;
  const { pack, load } = await prepared(() => new Response(new ReadableStream({
    pull(controller) {
      pulls += 1;
      controller.enqueue(new Uint8Array(64 * 1024));
      if (pulls === 100) controller.close();
    },
    cancel() { cancelled = true; }
  }), { headers: { "content-type": "application/json" } }));
  await assert.rejects(() => load(resolution(pack)));
  assert.equal(cancelled, true);
  assert.ok(pulls <= 18, `The bounded reader consumed ${pulls * 64} KiB`);
});

test("closing a session rejects a previously started detail request after its response arrives", async () => {
  let release;
  let entered;
  const waiting = new Promise((resolve) => { entered = resolve; });
  const { pack, mock, load } = await prepared(async ({ calls }) => {
    if (calls.length !== 3) return undefined;
    entered();
    await new Promise((resolve) => { release = resolve; });
    return undefined;
  });
  const session = await load(resolution(pack));
  const pending = session.inspect("b");
  const rejection = assert.rejects(pending);
  await waiting;
  session.close();
  release();
  await rejection;
  assert.equal(mock.calls.length, 3);
});

test("compressed HTTP Content-Length is distinct from the verified decoded-byte length", async () => {
  for (const [encoding, compress] of [["gzip", gzipSync], ["br", brotliCompressSync]]) {
    const { pack, load } = await prepared(({ value }) => new Response(value, {
      headers: {
        "content-type": "application/json", "content-encoding": encoding,
        "content-length": String(compress(value).byteLength)
      }
    }));
    const session = await load(resolution(pack));
    assert.equal((await session.inspect("b")).id, "b");
    assert.equal((await session.review("physics")).physics.studies.length, 1);
    session.close();
  }
});

test("compressed responses still verify decoded bytes and reject corrupted graph data", async () => {
  const { pack, load } = await prepared(({ path: relative, value }) => {
    if (!relative.endsWith("graph.json")) return undefined;
    const changed = value.slice();
    changed[changed.length - 1] = 32;
    return new Response(changed, { headers: {
      "content-type": "application/json", "content-encoding": "gzip",
      "content-length": String(gzipSync(changed).byteLength)
    } });
  });
  await assert.rejects(() => load(resolution(pack)), { code: "STUDIO_BROWSE_HASH_MISMATCH" });
});

test("consistent byte hashes cannot conceal a graph, record or review identity mismatch", async () => {
  const pack = fixture();
  const original = buildBrowseArtifacts(pack);
  for (const stage of ["graph", "record", "review"]) {
    const altered = editedArtifacts(original, ({ graph, rewrite }) => {
      const changeIdentity = (value) => { value.identity.modelVersion = "another-release"; };
      if (stage === "graph") changeIdentity(graph);
      if (stage === "record") rewrite(graph.chunks[0].descriptor, changeIdentity);
      if (stage === "review") rewrite(graph.reviews.physics.descriptor, changeIdentity);
    });
    const { load } = loaderFor(altered);
    if (stage === "graph") {
      await assert.rejects(() => load(resolution(pack)), { code: "STUDIO_BROWSE_IDENTITY_MISMATCH" });
    } else {
      const session = await load(resolution(pack));
      const action = () => stage === "record" ? session.inspect("b") : session.review("physics");
      await assert.rejects(action, { code: "STUDIO_BROWSE_IDENTITY_MISMATCH" });
      session.close();
    }
  }
});

test("node chunks must cover the compact graph exactly and agree with its summaries", async () => {
  const pack = fixture();
  const original = buildBrowseArtifacts(pack);
  for (const kind of ["missing-assignment", "duplicate-assignment", "wrong-summary", "duplicate-record"]) {
    const altered = editedArtifacts(original, ({ graph, rewrite }) => {
      if (kind === "missing-assignment") graph.chunks[0].nodeIds.pop();
      if (kind === "duplicate-assignment") graph.chunks[0].nodeIds.push(graph.chunks[0].nodeIds[0]);
      if (kind === "wrong-summary") rewrite(graph.chunks[0].descriptor, (data) => { data.records[0].name = "Different summary"; });
      if (kind === "duplicate-record") rewrite(graph.chunks[0].descriptor, (data) => { data.records[1] = data.records[0]; });
    });
    const { load } = loaderFor(altered);
    if (kind.endsWith("assignment")) {
      await assert.rejects(() => load(resolution(pack)), { code: "STUDIO_BROWSE_GRAPH_INVALID" });
    } else {
      const session = await load(resolution(pack));
      await assert.rejects(() => session.inspect("b"), { code: "STUDIO_BROWSE_DETAIL_INVALID" });
      session.close();
    }
  }
});

test("unsafe paths and duplicate artifact paths fail before requesting those resources", async () => {
  const pack = fixture();
  const original = buildBrowseArtifacts(pack);
  for (const unsafe of ["../outside.json", "https://evil.test/data.json", "%2e%2e/data.json", "a/../data.json"]) {
    const altered = editedArtifacts(original, ({ graph }) => { graph.chunks[0].descriptor.path = unsafe; });
    const { load, mock } = loaderFor(altered);
    await assert.rejects(() => load(resolution(pack)), { code: "STUDIO_BROWSE_DESCRIPTOR_INVALID" });
    assert.equal(mock.calls.length, 2);
  }
  const duplicated = editedArtifacts(original, ({ graph }) => {
    graph.reviews.physics.descriptor.path = graph.chunks[0].descriptor.path;
  });
  const { load, mock } = loaderFor(duplicated);
  await assert.rejects(() => load(resolution(pack)), { code: "STUDIO_BROWSE_GRAPH_INVALID" });
  assert.equal(mock.calls.length, 2);
});

test("redirected, cross-resource, non-JSON and malformed-length responses fail closed", async () => {
  for (const issue of ["redirect", "wrong-url", "html", "invalid-length", "missing-body"]) {
    const { pack, load } = await prepared(({ value }) => {
      const response = new Response(issue === "missing-body" ? null : value, { headers: {
        "content-type": issue === "html" ? "text/html" : "application/json",
        "content-length": issue === "invalid-length" ? "-1" : String(value.byteLength)
      } });
      if (issue === "redirect") Object.defineProperty(response, "redirected", { value: true });
      if (issue === "wrong-url") Object.defineProperty(response, "url", { value: `${BASE_URL}different.json` });
      return response;
    });
    await assert.rejects(() => load(resolution(pack)), (error) => error.code?.startsWith("STUDIO_BROWSE_"));
  }
});

test("generated output verification rejects stale bytes, missing files and unlisted files", async () => {
  const artifacts = buildBrowseArtifacts(fixture());
  const directory = await mkdtemp(path.join(os.tmpdir(), "onto2d-browse-check-"));
  try {
    for (const [relative, value] of artifacts.files) {
      const filename = path.join(directory, relative);
      await mkdir(path.dirname(filename), { recursive: true });
      await writeFile(filename, value);
    }
    await checkBrowseArtifacts(artifacts, directory);
    const graphPath = path.join(directory, artifacts.index.entries[0].graph.path);
    const original = await readFile(graphPath);
    await writeFile(graphPath, Buffer.concat([original, Buffer.from(" ")]));
    await assert.rejects(() => checkBrowseArtifacts(artifacts, directory), /Stale browse artifact/);
    await writeFile(graphPath, original);
    await writeFile(path.join(directory, "unlisted.json"), "{}");
    await assert.rejects(() => checkBrowseArtifacts(artifacts, directory), /inventory differs/);
    await rm(path.join(directory, "unlisted.json"));
    await rm(graphPath);
    await assert.rejects(() => checkBrowseArtifacts(artifacts, directory), /inventory differs/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("the completed detail cache evicts the oldest chunks when their total byte budget is exhausted", async () => {
  const pack = buildModelPack({
    model: { id: "large-browse-fixture", name: "Large Browse Fixture", version: "1" },
    source: { id: "source", files: [{ path: "source.json", hash: `sha256:${"e".repeat(64)}` }] },
    nodes: Array.from({ length: 10 }, (_, index) => ({
      id: `record-${index}`, name: `Record ${index}`, evidence: "x".repeat(900 * 1024)
    })),
    edges: [], dictionaries: {}
  });
  const { load, mock } = loaderFor(buildBrowseArtifacts(pack));
  const session = await load(resolution(pack));
  for (let index = 0; index < 10; index += 1) {
    assert.equal((await session.inspect(`record-${index}`)).id, `record-${index}`);
  }
  assert.equal(mock.calls.length, 12);
  await session.inspect("record-9");
  assert.equal(mock.calls.length, 12, "A recently used chunk remains cached");
  await session.inspect("record-0");
  assert.equal(mock.calls.length, 13, "The oldest chunk must be fetched after exceeding the aggregate budget");
  session.close();
});
