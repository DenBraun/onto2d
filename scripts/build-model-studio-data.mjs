import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { hashArtifactBytes } from "@onto2d/kernel/canonical";
import { verifyModelPack } from "@onto2d/model-pack";
import { arisingFactsFromNodes, factDisciplineIds, vocabularyProjection } from "../apps/model-studio/arising-facts.js";
import { BROWSE_LIMITS, EDGE_FIELDS, NODE_FIELDS, requireArisingFacts, requireVocabulary } from "../apps/model-studio/browse-data.js";
import { recordEvidenceContext, usesDictionaryEvidence } from "../apps/model-studio/record-evidence.js";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const DATA = path.join(ROOT, "apps/model-studio/data");
const LOADER = path.join(ROOT, "apps/model-studio/browse-data.js");
const VOCABULARY_SOURCE = Object.freeze({ id: "arising-vocabulary", path: "references/canonical/arising-vocabulary.json" });
const REVIEW_KEYS = ["sourceReadiness", "optics", "visual", "neural", "physics", "biochemistry", "cellular", "organismal", "neuralSystems", "socialSystems"];
const CHUNK_TARGET = 192 * 1024;
const serialize = (value) => new TextEncoder().encode(`${JSON.stringify(value)}\n`);
const pick = (value, fields) => Object.fromEntries(fields.filter((field) => Object.hasOwn(value, field)).map((field) => [field, value[field]]));

function nodeProjection(node) {
  return {
    ...pick(node, NODE_FIELDS),
    ...(typeof node.shortDescription !== "string" && typeof node.description === "string"
      ? { shortDescription: node.description } : {})
  };
}

function referencedSources(value, result = new Set()) {
  if (Array.isArray(value)) for (const child of value) referencedSources(child, result);
  else if (value !== null && typeof value === "object") {
    if (typeof value.sourceId === "string") result.add(value.sourceId);
    if (Array.isArray(value.sourceIds)) for (const id of value.sourceIds) result.add(id);
    for (const child of Object.values(value)) referencedSources(child, result);
  }
  return result;
}

/** The arising vocabulary a release pins by hash; undefined when the release lists none. The bytes on disk must be the pinned ones. */
export async function pinnedVocabulary(dictionaries, root = ROOT) {
  const source = (Array.isArray(dictionaries?.sources) ? dictionaries.sources : []).find((candidate) => candidate.id === VOCABULARY_SOURCE.id);
  if (!source) return undefined;
  assert.equal(source.path, VOCABULARY_SOURCE.path, "The release pins the arising vocabulary at an unexpected path");
  const bytes = await readFile(path.join(root, VOCABULARY_SOURCE.path));
  assert.equal(hashArtifactBytes(bytes), `sha256:${source.sha256}`, "The arising vocabulary on disk differs from the hash the release pins");
  return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
}

/** Derive browse artifacts only after full Model Pack reconstruction succeeds. */
export function buildBrowseArtifacts(input, { vocabulary } = {}) {
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
  const dictionaries = pack.files["model/dictionaries.json"];
  const sharedEvidence = usesDictionaryEvidence(dictionaries);
  const detailPayload = (values) => envelope("onto2d-studio-node-details", {
    records: values,
    ...(sharedEvidence ? { evidence: recordEvidenceContext(values, dictionaries) } : {})
  });
  const chunks = [];
  let records = [];
  let recordsBytes = 0;
  function flush() {
    if (records.length === 0) return;
    const relative = `${prefix}/nodes-${String(chunks.length).padStart(4, "0")}.json`;
    chunks.push({
      descriptor: add(relative, detailPayload(records), BROWSE_LIMITS.detailBytes),
      nodeIds: records.map((record) => record.id)
    });
    records = [];
    recordsBytes = 0;
  }
  for (const node of sourceNodes) {
    const bytes = serialize(node).byteLength;
    if (records.length > 0 && (sharedEvidence
      ? serialize(detailPayload([...records, node])).byteLength > CHUNK_TARGET
      : recordsBytes + bytes > CHUNK_TARGET)) flush();
    records.push(node);
    recordsBytes += bytes;
  }
  flush();
  // Relations between records of a declared ontological layer (the causes between
  // arisings) load with their exact records, claims and evidence on request.
  const ontologicalLayer = dictionaries.presentation?.arisingTable?.layer;
  const layerIds = new Set(typeof ontologicalLayer === "string"
    ? sourceNodes.filter((node) => node.layer === ontologicalLayer).map((node) => node.id) : []);
  const claimsById = new Map((Array.isArray(dictionaries.claims) ? dictionaries.claims : []).map((claim) => [claim.id, claim]));
  const relationPayload = (values) => {
    const claims = [...new Map(values.flatMap((relation) => (Array.isArray(relation.claimIds) ? relation.claimIds : [])
      .map((id) => {
        assert.ok(claimsById.has(id), `Relation claim ${id} is missing from the release dictionaries`);
        return [id, claimsById.get(id)];
      }))).values()];
    return envelope("onto2d-studio-relation-details", {
      relations: values,
      claims,
      ...(sharedEvidence ? { evidence: recordEvidenceContext([{ rationale: claims }], dictionaries) } : {})
    });
  };
  const relationChunks = [];
  let relations = [];
  let relationBytes = 0;
  const chunkClaims = new Set();
  function flushRelations() {
    if (relations.length === 0) return;
    const relative = `${prefix}/relations-${String(relationChunks.length).padStart(4, "0")}.json`;
    relationChunks.push({
      descriptor: add(relative, relationPayload(relations), BROWSE_LIMITS.detailBytes),
      edgeIds: relations.map((relation) => relation.id)
    });
    relations = [];
    relationBytes = 0;
    chunkClaims.clear();
  }
  // Bytes a relation adds to the current chunk: itself, its claims not yet in the chunk and their
  // evidence. Evidence shared between claims is counted for each, so the estimate only overstates.
  function relationCost(relation) {
    const fresh = (Array.isArray(relation.claimIds) ? relation.claimIds : []).filter((id) => !chunkClaims.has(id)).map((id) => {
      assert.ok(claimsById.has(id), `Relation claim ${id} is missing from the release dictionaries`);
      return claimsById.get(id);
    });
    const evidence = sharedEvidence && fresh.length > 0
      ? serialize(recordEvidenceContext([{ rationale: fresh }], dictionaries)).byteLength : 0;
    return serialize(relation).byteLength + fresh.reduce((sum, claim) => sum + serialize(claim).byteLength, 0) + evidence;
  }
  const layerRelations = pack.files["model/edges.json"]
    .filter((edge) => layerIds.has(edge.source) && layerIds.has(edge.target))
    .sort((left, right) => (left.target < right.target ? -1 : left.target > right.target ? 1 : 0)
      || (left.id < right.id ? -1 : left.id > right.id ? 1 : 0));
  for (const relation of layerRelations) {
    let cost = relationCost(relation);
    if (relations.length > 0 && relationBytes + cost > CHUNK_TARGET) {
      flushRelations();
      cost = relationCost(relation);
    }
    relations.push(relation);
    for (const id of Array.isArray(relation.claimIds) ? relation.claimIds : []) chunkClaims.add(id);
    relationBytes += cost;
  }
  flushRelations();
  const declarations = dictionaries.arisingDeclarations;
  const arisingFacts = arisingFactsFromNodes(sourceNodes, ontologicalLayer);
  const usedDisciplineIds = factDisciplineIds(arisingFacts);
  const vocabularyNames = vocabulary ? vocabularyProjection(vocabulary, usedDisciplineIds) : null;
  if (vocabularyNames) {
    const named = new Set(vocabularyNames.disciplines.map((entry) => entry.value));
    for (const id of usedDisciplineIds) assert.ok(named.has(id), `Discipline ${id} is missing from the arising vocabulary`);
    // As the loader will read it: serialized, so a missing value is a missing field.
    requireVocabulary(JSON.parse(JSON.stringify(vocabularyNames)));
  }
  if (Object.keys(arisingFacts).length > 0) {
    requireArisingFacts(arisingFacts, new Map(sourceNodes.map((node) => [node.id, node])), ontologicalLayer);
  }
  const interactionViews = dictionaries.interactions ? {
    cases: dictionaries.interactions.cases.map(({ id, title, entityIds, anchorEntityId }) => ({ id, title, entityIds, anchorEntityId })),
    perspectives: dictionaries.interactions.perspectives
  } : null;
  const reviews = {};
  for (const key of REVIEW_KEYS) {
    const value = dictionaries[key];
    if (value === undefined || value === null) continue;
    const sourceIds = referencedSources(value);
    const subset = {
      sources: (dictionaries.sources ?? []).filter((source) => sourceIds.has(source.id)),
      [key]: value
    };
    const descriptor = add(`${prefix}/review-${key}.json`, envelope("onto2d-studio-review", { key, dictionaries: subset }), BROWSE_LIMITS.reviewBytes);
    reviews[key] = {
      descriptor,
      count: Array.isArray(value) ? value.length : Array.isArray(value.nodeRoles) ? value.nodeRoles.length
        : (value.studies?.length ?? 0) + (value.comparisons?.length ?? 0) + (value.scopes?.length ?? 0),
      ...(Array.isArray(value.scopes) ? { scopeCount: value.scopes.length } : {}),
      ...(Array.isArray(value.studies) ? { studyCount: value.studies.length, comparisonCount: value.comparisons?.length ?? 0 } : {})
    };
  }
  const graph = add(`${prefix}/graph.json`, envelope("onto2d-studio-browse-graph", {
    model,
    nodes: sourceNodes.map(nodeProjection),
    edges: pack.files["model/edges.json"].map((edge) => pick(edge, EDGE_FIELDS)),
    presentation: dictionaries.presentation ?? {},
    ...(sharedEvidence ? { recordEvidence: dictionaries.recordEvidence } : {}),
    ...(interactionViews ? { interactionViews } : {}),
    ...(declarations !== undefined && declarations !== null ? { declarations } : {}),
    ...(Object.keys(arisingFacts).length > 0 ? { arisingFacts } : {}),
    ...(vocabularyNames ? { vocabulary: vocabularyNames } : {}),
    reviews,
    chunks,
    ...(relationChunks.length > 0 ? { relationChunks } : {})
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
  const pack = verifyModelPack(JSON.parse(await readFile(path.join(release, "bundle.json"), "utf8")));
  assert.equal(pack.manifest.model.id, entry.modelId);
  assert.equal(pack.manifest.model.version, entry.version);
  assert.equal(pack.manifest.rootHash, entry.rootHash);
  assert.equal(pack.manifest.manifestHash, entry.manifestHash);
  const artifacts = buildBrowseArtifacts(pack, { vocabulary: await pinnedVocabulary(pack.files["model/dictionaries.json"]) });
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
