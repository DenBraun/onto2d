import { hashArtifactBytes } from "@onto2d/kernel/canonical";
import { createLazyModelPresentation } from "@onto2d/view/lazy";

// Updated from the exact generated index by scripts/build-model-studio-data.mjs.
export const EXPECTED_BROWSE_INDEX_HASH = "sha256:c8e1e47e4ef375d64f9a718d1675b96bef25167864ac46355d5161145ce50fbe";

export const BROWSE_LIMITS = Object.freeze({
  indexBytes: 1024 * 1024,
  graphBytes: 4 * 1024 * 1024,
  detailBytes: 1024 * 1024,
  reviewBytes: 4 * 1024 * 1024,
  cacheBytes: 8 * 1024 * 1024,
  entries: 1024,
  nodes: 100_000,
  edges: 1_000_000
});

const HASH = /^sha256:[0-9a-f]{64}$/;
const IDENTIFIER = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
const PATH = /^(?:[A-Za-z0-9][A-Za-z0-9._-]*\/)*[A-Za-z0-9][A-Za-z0-9._-]*\.json$/;
const REVIEW_KEYS = new Set(["vocabulary", "sourceReadiness", "optics", "visual", "neural", "physics"]);
const NODE_FIELDS = ["id", "name", "level", "phase", "typeRole", "scientificStatus", "shortDescription"];

function fail(code, message) {
  const error = new Error(message);
  error.code = `STUDIO_BROWSE_${code}`;
  throw error;
}

function object(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function freeze(value) {
  if (value !== null && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) freeze(child);
  }
  return value;
}

function exactFields(value, keys, subject) {
  if (!object(value) || Object.keys(value).sort().join("\0") !== [...keys].sort().join("\0")) {
    fail("INVALID", `${subject} has an invalid field set.`);
  }
}

function identity(value) {
  exactFields(value, ["modelId", "modelVersion", "rootHash", "manifestHash"], "Browse identity");
  if (!IDENTIFIER.test(value.modelId) || !IDENTIFIER.test(value.modelVersion)
    || !HASH.test(value.rootHash) || !HASH.test(value.manifestHash)) {
    fail("IDENTITY_INVALID", "Browse identity is invalid.");
  }
  return value;
}

function sameIdentity(left, right) {
  return ["modelId", "modelVersion", "rootHash", "manifestHash"].every((key) => left[key] === right[key]);
}

function requireIdentity(value, expected) {
  if (!sameIdentity(identity(value), expected)) {
    fail("IDENTITY_MISMATCH", "The browse artifact belongs to a different exact release.");
  }
}

function descriptor(value, maximum) {
  exactFields(value, ["path", "hash", "byteLength"], "Browse file descriptor");
  if (typeof value.path !== "string" || value.path.length > 2048 || !PATH.test(value.path)
    || value.path.split("/").some((part) => part === "." || part === "..")
    || !HASH.test(value.hash) || !Number.isSafeInteger(value.byteLength)
    || value.byteLength < 1 || value.byteLength > maximum) {
    fail("DESCRIPTOR_INVALID", "A browse file descriptor is unsafe or exceeds its byte limit.");
  }
  return value;
}

function envelope(value, format, expected) {
  if (!object(value) || value.format !== format || value.formatVersion !== "1") {
    fail("FORMAT_INVALID", "The browse artifact format is unsupported.");
  }
  requireIdentity(value.identity, expected);
}

function aborted(signal) {
  signal?.throwIfAborted();
}

function combinedSignal(sessionSignal, requestSignal) {
  return requestSignal ? AbortSignal.any([sessionSignal, requestSignal]) : sessionSignal;
}

async function readJson(url, expected, maximum, fetchImplementation, signal, cache = "default") {
  aborted(signal);
  const response = await fetchImplementation(url.href, {
    method: "GET", cache, credentials: "same-origin", redirect: "error",
    headers: { Accept: "application/json" }, ...(signal ? { signal } : {})
  });
  const rejectResponse = async (code, message) => {
    try { await response?.body?.cancel(); } catch { /* The rejected stream may already be closed. */ }
    fail(code, message);
  };
  if (!response || response.status !== 200 || response.ok !== true || response.redirected === true
    || response.type === "opaque" || response.url !== url.href
    || typeof response.headers?.get !== "function" || typeof response.body?.getReader !== "function") {
    return rejectResponse("RESPONSE_INVALID", "A browse request did not return the expected JSON resource.");
  }
  const mediaType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (!/^application\/(?:[a-z0-9!#$&^_.+-]+\+)?json$/.test(mediaType ?? "")) {
    return rejectResponse("CONTENT_TYPE_INVALID", "A browse response is not JSON.");
  }
  const declared = response.headers.get("content-length");
  const encoding = response.headers.get("content-encoding")?.trim().toLowerCase();
  // Fetch exposes decoded bytes; compressed wire lengths do not describe them.
  const identityEncoding = !encoding || encoding === "identity";
  if (declared !== null && (!/^(?:0|[1-9][0-9]*)$/.test(declared)
    || !Number.isSafeInteger(Number(declared)) || (identityEncoding && Number(declared) > maximum))) {
    return rejectResponse("LIMIT_EXCEEDED", "A browse response declares an invalid or excessive byte count.");
  }
  const reader = response.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      aborted(signal);
      const { done, value } = await reader.read();
      if (done) break;
      if (!(value instanceof Uint8Array)) fail("RESPONSE_INVALID", "Browse response bytes are invalid.");
      total += value.byteLength;
      if (total > maximum || (expected.byteLength !== undefined && total > expected.byteLength)) {
        fail("LIMIT_EXCEEDED", "A browse response exceeds its verified byte budget.");
      }
      chunks.push(value);
    }
  } catch (error) {
    await reader.cancel().catch(() => {});
    throw error;
  } finally {
    reader.releaseLock();
  }
  aborted(signal);
  if ((identityEncoding && declared !== null && Number(declared) !== total)
    || (expected.byteLength !== undefined && total !== expected.byteLength)) {
    fail("LENGTH_MISMATCH", "A browse response has a different byte length from its descriptor.");
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  if (hashArtifactBytes(bytes) !== expected.hash) fail("HASH_MISMATCH", "Browse artifact bytes failed verification.");
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch {
    fail("JSON_INVALID", "Verified browse bytes are not valid UTF-8 JSON.");
  }
}

function nodeProjection(record) {
  return Object.fromEntries(NODE_FIELDS.filter((key) => Object.hasOwn(record, key)).map((key) => [key, record[key]]));
}

function matchingProjection(left, right) {
  return NODE_FIELDS.every((key) => Object.hasOwn(left, key) === Object.hasOwn(right, key)
    && left[key] === right[key]);
}

/** A pinned, build-verified browsing projection, not a partially verified Model Pack. */
export function createBrowseModelLoader({ indexUrl, expectedIndexHash, fetch: suppliedFetch } = {}) {
  const url = new URL(indexUrl);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.search || url.hash
    || !HASH.test(expectedIndexHash)) fail("OPTIONS_INVALID", "A safe index URL and pinned digest are required.");
  const base = new URL("./", url);
  return async function load(resolution, { signal, fetch: overrideFetch } = {}) {
    const fetchImplementation = overrideFetch ?? suppliedFetch ?? globalThis.fetch?.bind(globalThis);
    if (typeof fetchImplementation !== "function") fail("OPTIONS_INVALID", "A fetch implementation is required.");
    const expectedIdentity = identity({
      modelId: resolution.modelId, modelVersion: resolution.version,
      rootHash: resolution.rootHash, manifestHash: resolution.manifestHash
    });
    // The index URL is stable across deployments; release artifact URLs are immutable.
    const index = await readJson(url, { hash: expectedIndexHash }, BROWSE_LIMITS.indexBytes, fetchImplementation, signal, "no-store");
    exactFields(index, ["format", "formatVersion", "entries"], "Browse index");
    if (index.format !== "onto2d-studio-browse-index" || index.formatVersion !== "1"
      || !Array.isArray(index.entries) || index.entries.length > BROWSE_LIMITS.entries) {
      fail("INDEX_INVALID", "The browse index is unsupported or exceeds its entry budget.");
    }
    const identities = new Set();
    for (const item of index.entries) {
      exactFields(item, ["identity", "graph"], "Browse index entry");
      identity(item.identity);
      descriptor(item.graph, BROWSE_LIMITS.graphBytes);
      const key = `${item.identity.modelId}\0${item.identity.modelVersion}`;
      if (identities.has(key)) fail("INDEX_INVALID", "The browse index contains duplicate releases.");
      identities.add(key);
    }
    const entry = index.entries.find((item) => item.identity.modelId === expectedIdentity.modelId
      && item.identity.modelVersion === expectedIdentity.modelVersion);
    if (!entry) return null;
    requireIdentity(entry.identity, expectedIdentity);
    const graph = await readJson(new URL(entry.graph.path, base), entry.graph,
      BROWSE_LIMITS.graphBytes, fetchImplementation, signal);
    envelope(graph, "onto2d-studio-browse-graph", expectedIdentity);
    exactFields(graph, ["format", "formatVersion", "identity", "model", "nodes", "edges", "presentation", "reviews", "chunks"], "Browse graph");
    if (!object(graph.model) || graph.model.id !== expectedIdentity.modelId
      || graph.model.version !== expectedIdentity.modelVersion || !Array.isArray(graph.nodes)
      || graph.nodes.length > BROWSE_LIMITS.nodes || !Array.isArray(graph.edges)
      || graph.edges.length > BROWSE_LIMITS.edges || !Array.isArray(graph.chunks)
      || graph.chunks.length > graph.nodes.length || !object(graph.reviews) || !object(graph.presentation)) {
      fail("GRAPH_INVALID", "The browsing projection is inconsistent or exceeds its record budget.");
    }
    const nodeIds = new Set(graph.nodes.map((node) => node.id));
    const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
    const chunksById = new Map();
    const paths = new Set([entry.graph.path]);
    const requireNewPath = (file) => {
      if (paths.has(file.path)) fail("GRAPH_INVALID", "Browse artifact paths must be unique.");
      paths.add(file.path);
    };
    for (const chunk of graph.chunks) {
      exactFields(chunk, ["descriptor", "nodeIds"], "Node detail chunk");
      descriptor(chunk.descriptor, BROWSE_LIMITS.detailBytes);
      requireNewPath(chunk.descriptor);
      if (!Array.isArray(chunk.nodeIds) || chunk.nodeIds.length === 0 || chunk.nodeIds.length > graph.nodes.length) {
        fail("GRAPH_INVALID", "A node detail chunk must identify its records.");
      }
      for (const id of chunk.nodeIds) {
        if (!nodeIds.has(id) || chunksById.has(id)) fail("GRAPH_INVALID", "Node details must cover each graph record exactly once.");
        chunksById.set(id, chunk);
      }
    }
    if (chunksById.size !== graph.nodes.length) fail("GRAPH_INVALID", "The browse graph has missing or duplicate detail records.");
    const reviews = {};
    for (const [key, review] of Object.entries(graph.reviews)) {
      if (!REVIEW_KEYS.has(key) || !object(review) || !Number.isSafeInteger(review.count) || review.count < 0) {
        fail("GRAPH_INVALID", "Review availability is invalid.");
      }
      descriptor(review.descriptor, BROWSE_LIMITS.reviewBytes);
      requireNewPath(review.descriptor);
      const { descriptor: _descriptor, ...metadata } = review;
      reviews[key] = metadata;
    }
    const presentation = createLazyModelPresentation({ identity: graph.identity, nodes: graph.nodes, edges: graph.edges });
    const controller = new AbortController();
    const onAbort = () => controller.abort(signal.reason);
    signal?.addEventListener("abort", onAbort, { once: true });
    if (signal?.aborted) onAbort();
    const cache = new Map();
    let cacheBytes = 0;
    let closed = false;
    function requireOpen(requestSignal) {
      if (closed) fail("CLOSED", "The browse session is closed.");
      aborted(controller.signal);
      aborted(requestSignal);
    }
    async function cached(file, maximum, requestSignal, validate) {
      requireOpen(requestSignal);
      if (cache.has(file.path)) {
        const value = cache.get(file.path);
        cache.delete(file.path);
        cache.set(file.path, value);
        return value.data;
      }
      const data = await readJson(new URL(file.path, base), file, maximum, fetchImplementation,
        combinedSignal(controller.signal, requestSignal));
      requireOpen(requestSignal);
      validate(data);
      freeze(data);
      // Concurrent requests for the same chunk must not double-count its bytes.
      if (cache.has(file.path)) cacheBytes -= cache.get(file.path).bytes;
      cache.set(file.path, { data, bytes: file.byteLength });
      cacheBytes += file.byteLength;
      while (cacheBytes > BROWSE_LIMITS.cacheBytes) {
        const oldest = cache.keys().next().value;
        cacheBytes -= cache.get(oldest).bytes;
        cache.delete(oldest);
      }
      return data;
    }
    return Object.freeze({
      manifest: freeze({ model: graph.model, rootHash: graph.identity.rootHash, manifestHash: graph.identity.manifestHash }),
      presentation,
      dictionaries: freeze({ presentation: graph.presentation }),
      reviews: freeze(reviews),
      async inspect(id, { signal: requestSignal } = {}) {
        requireOpen(requestSignal);
        const chunk = chunksById.get(id);
        if (!chunk) fail("NODE_MISSING", "The requested record is absent from this release.");
        const data = await cached(chunk.descriptor, BROWSE_LIMITS.detailBytes, requestSignal, (value) => {
          envelope(value, "onto2d-studio-node-details", expectedIdentity);
          exactFields(value, ["format", "formatVersion", "identity", "records"], "Node details");
          if (!Array.isArray(value.records) || value.records.length !== chunk.nodeIds.length) {
            fail("DETAIL_INVALID", "A detail chunk has an unexpected record count.");
          }
          const observed = new Set();
          for (const record of value.records) {
            if (!object(record) || observed.has(record.id) || chunksById.get(record.id) !== chunk
              || !matchingProjection(nodeProjection(record), nodesById.get(record.id))) {
              fail("DETAIL_INVALID", "A detail record differs from its pinned graph summary or chunk assignment.");
            }
            observed.add(record.id);
          }
        });
        return data.records.find((record) => record.id === id);
      },
      async review(key, { signal: requestSignal } = {}) {
        requireOpen(requestSignal);
        const review = graph.reviews[key];
        if (!REVIEW_KEYS.has(key) || !review) fail("REVIEW_MISSING", "The requested review is absent from this release.");
        const data = await cached(review.descriptor, BROWSE_LIMITS.reviewBytes, requestSignal, (value) => {
          envelope(value, "onto2d-studio-review", expectedIdentity);
          exactFields(value, ["format", "formatVersion", "identity", "key", "dictionaries"], "Review");
          if (value.key !== key || !object(value.dictionaries)
            || !Object.hasOwn(value.dictionaries, key) || !Array.isArray(value.dictionaries.sources)) {
            fail("REVIEW_INVALID", "The review does not contain its declared dictionary value.");
          }
        });
        return data.dictionaries;
      },
      close() {
        if (closed) return;
        closed = true;
        controller.abort();
        signal?.removeEventListener("abort", onAbort);
        cache.clear();
        cacheBytes = 0;
        presentation.close();
      }
    });
  };
}

export async function loadBrowseModel(resolution, options) {
  return createBrowseModelLoader({
    indexUrl: new URL("./data/index.json", import.meta.url),
    expectedIndexHash: EXPECTED_BROWSE_INDEX_HASH
  })(resolution, options);
}
