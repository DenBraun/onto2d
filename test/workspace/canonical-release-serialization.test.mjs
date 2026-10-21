import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildModelPack, verifyModelPack } from "@onto2d/model-pack";
import { loadModelPackDirectory } from "@onto2d/model-pack/node";
import { hashArtifactBytes } from "@onto2d/kernel";
import { citationLinks } from "../../apps/model-studio/evidence-links.js";
import { decodeJsonValueTable, isJsonValueTable } from "../../packages/model-pack/src/json-value-table.js";
import {
  compileCanonicalGraph,
  verifyCanonicalRelease,
  writeCanonicalRelease
} from "../../models/causal-emergence/canonical/build.mjs";

import { recordEvidenceContext, resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";

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

test("canonical entities retain source descriptions and evidence without generated duplicate summaries", () => {
  const publication = { id: "publication", title: "Scoped evidence" };
  const claim = { id: "claim", statement: "A scoped definition", citations: [{ sourceId: "publication", locator: "Definition 1" }] };
  const entity = { id: "entity", name: "Entity", kind: "definition", status: "definition", level: 1,
    description: "A source description with its explicit evidence boundary", claimIds: ["claim"] };
  const rule = { id: "rule", name: "Conditional rule", conditions: ["A declared gate", "A second gate"],
    inputs: [], outputEntityIds: [], claimIds: ["claim"] };
  const data = {
    graph: { model: { id: "projection-fixture", name: "Projection fixture", version: "1" },
      scope: { summary: "A scoped presentation fixture" }, entities: [entity], rules: [rule],
      relations: [], sources: [publication], claims: [claim], interactionCases: [], interactionAnalogies: [] },
    readiness: { nodeRoles: [{ nodeId: "entity", role: "definition" }, { nodeId: "rule", role: "rule-specification" }] },
    dictionaryReview: { records: [] }, pilot: { studies: [] },
    routing: { studies: [], contexts: [], reviews: [], measurements: [], routes: [] }, routingPolicy: {},
    optics: { studies: [] }, visual: { studies: [] }, neural: { studies: [] }, physics: { studies: [] }
  };
  const before = structuredClone(data);
  const pack = compileCanonicalGraph(data, {}, [{ path: "source.json", hash: hashArtifactBytes(new TextEncoder().encode("fixture")) }]);
  const [compiledEntity, compiledRule] = pack.files["model/nodes.json"];
  assert.equal(compiledEntity.description, entity.description);
  assert.equal(Object.hasOwn(compiledEntity, "shortDescription"), false);
  assert.deepEqual(compiledEntity.rationale, [claim]);
  assert.deepEqual(resolveRecordEvidence(compiledEntity, recordEvidenceContext([compiledEntity], pack.files["model/dictionaries.json"])),
    [{ ...claim, contexts: [], experimentalContexts: [], citations: [{ ...claim.citations[0], source: publication }] }]);
  assert.equal(compiledRule.shortDescription, "A declared gate; A second gate");
  assert.notEqual(compiledRule.shortDescription, compiledRule.description, "Rule-specific summaries remain distinct");
  assert.deepEqual(pack.files["model/dictionaries.json"].claims, [claim]);
  assert.deepEqual(data, before, "Compaction changes the generated projection only");
  assert.deepEqual(verifyModelPack(pack), pack);
});

test("repeated passage citations retain complete claim-local evidence after serialization and resolution", () => {
  const publication = {
    id: "publication", title: "A scoped measurement", authors: ["A. Researcher"], year: 2026,
    doi: "10.1234/measurement", url: "https://example.org/measurement.pdf",
    path: "references/measurement.pdf", sha256: "a".repeat(64),
    review: { extent: "selected-passages", locators: ["Methods", "Figure 1", "Discussion"],
      limit: "Calibration and raw acquisition were not reproduced." }
  };
  const alternative = { id: "alternative", title: "A competing interpretation", year: 2025,
    url: "https://example.org/alternative", review: { extent: "full-article", locators: ["Section 2"],
      limit: "A model comparison rather than a second acquisition." } };
  const first = { id: "first", statement: "A conditional observation", scope: "The named preparation",
    status: "publication-supported", limitations: ["Shared calibration is retained."], checkIds: [], contextIds: ["study"],
    citations: [
      { sourceId: publication.id, locator: "Methods", role: "method", note: "The actual preparation." },
      { sourceId: alternative.id, locator: "Section 2", role: "limits", note: "A distinct explanation." },
      { sourceId: publication.id, locator: "Figure 1", role: "supports", note: "The measured endpoint." },
      { sourceId: publication.id, locator: "Discussion", role: "limits", note: "The authors' uncertainty." }
    ] };
  const second = { id: "second", statement: "A separate claim", scope: "A separate interpretation",
    status: "definition", limitations: ["No additional experiment."], checkIds: [],
    citations: [first.citations[2], first.citations[3]] };
  const study = { id: "study", sourceId: publication.id, preparation: "A declared specimen and stimulus",
    observable: "Calibrated response", limitations: ["The original covariance is unavailable."] };
  const entity = { id: "entity", name: "Measured record", kind: "scoped-process", status: "evidence-scoped",
    level: 1, description: "The complete source description", claimIds: [first.id, second.id],
    sourceCoordinates: [{ sourceId: publication.id, locator: "Figure 1" }],
    openObligations: ["Preserve calibration dependence."] };
  const data = {
    graph: { model: { id: "citation-projection", name: "Citation projection", version: "1" },
      scope: { summary: "A claim-local projection fixture" }, entities: [entity], rules: [], relations: [],
      sources: [publication, alternative], claims: [first, second], interactionCases: [], interactionAnalogies: [] },
    readiness: { nodeRoles: [{ nodeId: entity.id, role: "scoped-phenomenon", denotes: entity.description,
      instanceAdmission: "none", claimIds: entity.claimIds }] },
    dictionaryReview: { records: [] }, pilot: { studies: [study] },
    routing: { studies: [], contexts: [], reviews: [], measurements: [], routes: [] }, routingPolicy: {},
    optics: { studies: [] }, visual: { studies: [] }, neural: { studies: [] }, physics: { studies: [] }
  };
  const before = structuredClone(data);
  const pack = compileCanonicalGraph(data, {}, []);
  const compiled = JSON.parse(compact(pack.files["model/nodes.json"]))[0];
  assert.deepEqual(compiled.rationale, [first, second], "Raw claims retain exact references without repeated publication copies");

  const expected = [first, second].map((claim) => ({ ...claim,
    contexts: claim.contextIds ? [study] : [], experimentalContexts: [],
    citations: claim.citations.map((citation) => ({ ...citation,
      source: data.graph.sources.find((source) => source.id === citation.sourceId) })) }));
  const restored = resolveRecordEvidence(compiled, recordEvidenceContext([compiled], pack.files["model/dictionaries.json"]));
  assert.deepEqual(restored, expected, "Every citation, complete source, reading limit and study reconstructs exactly");
  assert.ok(Buffer.byteLength(compact(compiled.rationale)) < Buffer.byteLength(compact(expected)));
  for (const [index, claim] of restored.entries()) {
    for (const [citationIndex, citation] of claim.citations.entries()) {
      assert.deepEqual(citationLinks(citation, "https://example.org/Onto2D/"),
        citationLinks(expected[index].citations[citationIndex], "https://example.org/Onto2D/"));
    }
  }
  assert.deepEqual(pack.files["model/dictionaries.json"].claims, [first, second]);
  assert.deepEqual(data, before, "Only the generated projection changes");
  assert.deepEqual(verifyModelPack(pack), pack);

  const conflicting = structuredClone(data);
  conflicting.graph.sources.push({ ...publication, title: "Conflicting source identity" });
  assert.throws(() => compileCanonicalGraph(conflicting, {}, []), /Citation source IDs must be unique/);
  const missing = structuredClone(data);
  missing.graph.claims[0].citations[0].sourceId = "unresolved";
  assert.throws(() => compileCanonicalGraph(missing, {}, []), /Missing citation source: unresolved/);
});

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

test("explicit value-table release transport restores the same semantic pack and exact byte replay", async () => {
  await withDirectory(async (directory) => {
    const pack = fixture();
    const options = { transportEncoding: "value-table-v1" };
    await writeCanonicalRelease(pack, directory, options);
    const nodes = JSON.parse(await readFile(path.join(directory, "model/nodes.json"), "utf8"));
    const bundle = JSON.parse(await readFile(path.join(directory, "bundle.json"), "utf8"));
    assert.equal(isJsonValueTable(nodes), true);
    assert.equal(isJsonValueTable(bundle), true);
    assert.deepEqual(decodeJsonValueTable(nodes), pack.files["model/nodes.json"]);
    assert.deepEqual(verifyModelPack(bundle), pack);
    assert.deepEqual(await loadModelPackDirectory(directory), pack);
    const before = await snapshot(directory, pack);
    await verifyCanonicalRelease(pack, directory, options);
    await writeCanonicalRelease(pack, directory, options);
    assert.deepEqual(await snapshot(directory, pack), before, "Exact replay does not rewrite bytes or timestamps");
    await assert.rejects(() => writeCanonicalRelease(pack, directory), /Refusing to overwrite release/);
    assert.deepEqual(await snapshot(directory, pack), before, "Plain conversion is refused in place");
  });
});

test("value-table transport cannot reformat an existing plain release or accept an unknown encoding", async () => {
  await withDirectory(async (directory) => {
    const pack = fixture();
    await writeCanonicalRelease(pack, directory);
    const before = await snapshot(directory, pack);
    await assert.rejects(() => writeCanonicalRelease(pack, directory, { transportEncoding: "value-table-v1" }),
      /Refusing to overwrite release/);
    await assert.rejects(() => verifyCanonicalRelease(pack, directory, { transportEncoding: "unknown" }),
      /Unknown canonical transport encoding/);
    assert.deepEqual(await snapshot(directory, pack), before);
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

test("transport encoding failures leave no immutable release directory", async () => {
  await withDirectory(async (directory) => {
    // Each scalar is canonical JSON; their escaped expansion exceeds the
    // codec's 64 MiB bound even though semantic pack validation succeeds.
    const pack = buildModelPack({
      model: { id: "encoding-preflight", name: "Encoding preflight", version: "1" },
      source: { id: "fixture-source", files: [] },
      nodes: [{ id: "a", evidence: Array(11).fill("\u0000".repeat(1_048_576)) }],
      edges: [], dictionaries: {}
    });
    await assert.rejects(() => writeCanonicalRelease(pack, directory, { transportEncoding: "value-table-v1" }),
      (error) => error.code === "MODEL_PACK_JSON_VALUE_TABLE_LIMIT_EXCEEDED");
    await assert.rejects(() => stat(directory), (error) => error.code === "ENOENT",
      "A codec rejection must not strand a partial immutable version");
    await writeCanonicalRelease(fixture(), directory, { transportEncoding: "value-table-v1" });
  });
});
