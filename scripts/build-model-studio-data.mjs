import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { hashArtifactBytes } from "@onto2d/kernel/canonical";
import { verifyModelPack } from "@onto2d/model-pack";
import { BROWSE_LIMITS } from "../apps/model-studio/browse-data.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const DATA = path.join(ROOT, "apps/model-studio/data");
const LOADER = path.join(ROOT, "apps/model-studio/browse-data.js");
const NODE_FIELDS = ["id", "name", "level", "phase", "typeRole", "scientificStatus", "shortDescription"];
const EDGE_FIELDS = ["id", "source", "target", "relationLayer", "role", "assertion", "dependencyType", "necessity", "weight"];
const REVIEW_KEYS = ["vocabulary", "sourceReadiness", "optics", "visual", "neural", "physics"];
const CHUNK_TARGET = 192 * 1024;
const serialize = (value) => new TextEncoder().encode(`${JSON.stringify(value)}\n`);
const pick = (value, fields) => Object.fromEntries(fields.filter((field) => Object.hasOwn(value, field)).map((field) => [field, value[field]]));

function referencedSources(value, result = new Set()) {
  if (Array.isArray(value)) for (const child of value) referencedSources(child, result);
  else if (value !== null && typeof value === "object") {
    if (typeof value.sourceId === "string") result.add(value.sourceId);
    if (Array.isArray(value.sourceIds)) for (const id of value.sourceIds) result.add(id);
    for (const child of Object.values(value)) referencedSources(child, result);
  }
  return result;
}

/** Derive browse artifacts only after full Model Pack reconstruction succeeds. */
export function buildBrowseArtifacts(input) {
  const pack = verifyModelPack(input);
  const model = pack.manifest.model;
  assert.match(model.id, /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/);
  assert.match(model.version, /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/);
  const identity = {
    modelId: model.id, modelVersion: model.version,
    rootHash: pack.manifest.rootHash, manifestHash: pack.manifest.manifestHash
  };
  const prefix = `${model.id}/${model.version}`;
  const files = new Map();
  const envelope = (format, body) => ({ format, formatVersion: "1", identity, ...body });
  function add(relative, value, maximum) {
    const bytes = serialize(value);
    assert.ok(bytes.byteLength <= maximum, `${relative} exceeds its browse byte budget`);
    assert.ok(!files.has(relative), `Duplicate browse path ${relative}`);
    files.set(relative, bytes);
    return { path: relative, hash: hashArtifactBytes(bytes), byteLength: bytes.byteLength };
  }
  const sourceNodes = pack.files["model/nodes.json"];
  const chunks = [];
  let records = [];
  let recordsBytes = 0;
  function flush() {
    if (records.length === 0) return;
    const relative = `${prefix}/nodes-${String(chunks.length).padStart(4, "0")}.json`;
    chunks.push({
      descriptor: add(relative, envelope("onto2d-studio-node-details", { records }), BROWSE_LIMITS.detailBytes),
      nodeIds: records.map((record) => record.id)
    });
    records = [];
    recordsBytes = 0;
  }
  for (const node of sourceNodes) {
    const bytes = serialize(node).byteLength;
    if (records.length > 0 && recordsBytes + bytes > CHUNK_TARGET) flush();
    records.push(node);
    recordsBytes += bytes;
  }
  flush();
  const dictionaries = pack.files["model/dictionaries.json"];
  const reviews = {};
  for (const key of REVIEW_KEYS) {
    const value = dictionaries[key];
    if (value === undefined || value === null) continue;
    const sourceIds = referencedSources(value);
    const subset = {
      sources: (dictionaries.sources ?? []).filter((source) => sourceIds.has(source.id)),
      [key]: value,
      ...(key === "vocabulary" && typeof dictionaries.dictionaryReview?.scope === "string"
        ? { dictionaryReview: { scope: dictionaries.dictionaryReview.scope } } : {})
    };
    const descriptor = add(`${prefix}/review-${key}.json`, envelope("onto2d-studio-review", { key, dictionaries: subset }), BROWSE_LIMITS.reviewBytes);
    reviews[key] = {
      descriptor,
      count: Array.isArray(value) ? value.length : Array.isArray(value.nodeRoles) ? value.nodeRoles.length
        : (value.studies?.length ?? 0) + (value.comparisons?.length ?? 0),
      ...(Array.isArray(value.studies) ? { studyCount: value.studies.length, comparisonCount: value.comparisons?.length ?? 0 } : {})
    };
  }
  const graph = add(`${prefix}/graph.json`, envelope("onto2d-studio-browse-graph", {
    model,
    nodes: sourceNodes.map((node) => pick(node, NODE_FIELDS)),
    edges: pack.files["model/edges.json"].map((edge) => pick(edge, EDGE_FIELDS)),
    presentation: dictionaries.presentation ?? {},
    reviews,
    chunks
  }), BROWSE_LIMITS.graphBytes);
  const index = { format: "onto2d-studio-browse-index", formatVersion: "1", entries: [{ identity, graph }] };
  const indexDescriptor = add("index.json", index, BROWSE_LIMITS.indexBytes);
  return { files, index, indexHash: indexDescriptor.hash };
}

async function inventory(directory, prefix = "") {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    assert.ok(!entry.isSymbolicLink(), `Generated browse data must not contain symlinks: ${relative}`);
    if (entry.isDirectory()) result.push(...await inventory(path.join(directory, entry.name), relative));
    else { assert.ok(entry.isFile()); result.push(relative); }
  }
  return result.sort();
}

export async function checkBrowseArtifacts(artifacts, directory = DATA) {
  assert.deepEqual(await inventory(directory), [...artifacts.files.keys()].sort(), "Browse file inventory differs from the exact release projection");
  for (const [relative, bytes] of artifacts.files) {
    assert.deepEqual(new Uint8Array(await readFile(path.join(directory, relative))), bytes, `Stale browse artifact: ${relative}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  let write = false;
  let version;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === "--write") write = true;
    else if (args[i] === "--version" && args[i + 1]) version = args[++i];
    else throw new Error(`Unknown browse build argument: ${args[i]}`);
  }
  const source = JSON.parse(await readFile(path.join(ROOT, "references/canonical/graph.json"), "utf8"));
  version ??= source.model.version;
  assert.match(version, /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/);
  const registry = JSON.parse(await readFile(path.join(ROOT, "models/registry.json"), "utf8"));
  const entry = registry.entries.find((candidate) => candidate.modelId === source.model.id && candidate.version === version);
  assert.ok(entry, "The requested canonical release must be registered before building browse artifacts");
  const release = path.resolve(ROOT, "models", entry.packPath);
  assert.ok(release.startsWith(path.join(ROOT, "models") + path.sep), "Registry pack path escapes models");
  const pack = JSON.parse(await readFile(path.join(release, "bundle.json"), "utf8"));
  assert.equal(pack.manifest.model.id, entry.modelId);
  assert.equal(pack.manifest.model.version, entry.version);
  assert.equal(pack.manifest.rootHash, entry.rootHash);
  assert.equal(pack.manifest.manifestHash, entry.manifestHash);
  const artifacts = buildBrowseArtifacts(pack);
  const loader = await readFile(LOADER, "utf8");
  const pinPattern = /export const EXPECTED_BROWSE_INDEX_HASH = "sha256:[0-9a-f]{64}";/;
  assert.match(loader, pinPattern, "Browse loader pin is missing");
  const pinnedLoader = loader.replace(pinPattern, `export const EXPECTED_BROWSE_INDEX_HASH = "${artifacts.indexHash}";`);
  if (write) {
    // This directory contains only deterministic current browse output.
    await rm(DATA, { recursive: true, force: true });
    for (const [relative, bytes] of artifacts.files) {
      const target = path.join(DATA, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, bytes);
    }
    await writeFile(LOADER, pinnedLoader);
  } else {
    await checkBrowseArtifacts(artifacts);
    assert.equal(loader, pinnedLoader, "The browse index pin differs from current generated data");
  }
  console.log(`Model Studio browse data ${write ? "built" : "verified"}: ${entry.modelId}@${entry.version}, ${artifacts.files.size} files, ${artifacts.indexHash}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((error) => { console.error(error); process.exitCode = 1; });
}
