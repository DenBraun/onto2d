import assert from "node:assert/strict";
import test from "node:test";
import { canonicalClone } from "@onto2d/kernel/canonical";
import { ModelPackError, buildModelPack, verifyModelPack } from "../src/index.js";
import {
  decodeJsonValueTable,
  encodeJsonValueTable,
  isJsonValueTable
} from "../src/json-value-table.js";

const FORMAT = "onto2d-json-value-table";
const PREFIX = "MODEL_PACK_JSON_VALUE_TABLE_";
const envelope = (table, root = ["ref", table.length - 1]) => ({
  format: FORMAT, formatVersion: "1", root, table
});
const reject = (action, code, field) => assert.throws(action, (error) =>
  error instanceof ModelPackError && error.code === `${PREFIX}${code}`
  && (field === undefined || error.details.field === field));

function scientificFixture() {
  const source = {
    id: "primary", title: "A scoped measurement with μ and 𝛼",
    authors: ["A. Researcher", "B. Observer"], year: 2026,
    doi: "10.1234/primary", url: "https://example.test/primary",
    path: null, sha256: null,
    review: { extent: "selected-primary-passages", locators: ["Methods", "Figure 2"],
      limit: "Shared calibration; the acquisition was not independently reproduced." }
  };
  const context = {
    id: "study", sourceId: source.id, preparation: "A defined sample, stimulus and control",
    observable: "Measured response", finding: "A conditional difference", samples: [0, 1.5, -0.25],
    limitations: ["A shared reference does not supply independent replication."],
    readExtent: "selected-primary-passages", reviewedLocators: ["Methods", "Figure 2"]
  };
  const claim = {
    id: "claim", kind: "review-finding", statement: "The specified preparation changes the response.",
    scope: "This preparation only", status: "publication-supported", checkIds: [],
    contextIds: [context.id], contexts: [context], experimentalContexts: [],
    citations: [
      { sourceId: source.id, locator: "Methods", role: "method", note: "Actual preparation.", source },
      { sourceId: source.id, locator: "Figure 2", role: "supports", note: "The measured response." }
    ], limitations: ["No universal formation rule or carrier threshold is calibrated."]
  };
  const node = {
    id: "node-a", name: "Scoped response", description: "Complete scientific description",
    level: 2, kind: "scoped-process", status: "evidence-scoped", claimIds: [claim.id],
    openObligations: ["Resolve the calibration uncertainty."], rationale: [claim],
    sourceCoordinates: [{ sourceId: source.id, locator: "Figure 2" }],
    representation: { role: "scoped-phenomenon", instanceAdmission: "none" }
  };
  return { source, context, claim, nodes: [node, { ...node, id: "node-b", rationale: [claim] }] };
}

test("the value table preserves complete scientific records and exact Model Pack identities", () => {
  const data = scientificFixture();
  const pack = buildModelPack({
    model: { id: "codec-fixture", name: "Complete scientific fixture", version: "1" },
    source: { id: "source", files: [] }, nodes: data.nodes,
    edges: [{ id: "a-b", source: "node-a", target: "node-b", claimIds: [data.claim.id] }],
    dictionaries: { sources: [data.source], claims: [data.claim], studies: [data.context] }
  });
  const before = structuredClone(pack);
  const encoded = encodeJsonValueTable(pack);
  const wire = JSON.parse(JSON.stringify(encoded));
  const decoded = decodeJsonValueTable(wire);
  assert.deepEqual(decoded, pack);
  assert.deepEqual(verifyModelPack(decoded), pack);
  assert.equal(decoded.manifest.rootHash, pack.manifest.rootHash);
  assert.equal(decoded.manifest.manifestHash, pack.manifest.manifestHash);
  assert.deepEqual(pack, before, "Neither encoding nor decoding mutates its input");
  const restoredNodes = decodeJsonValueTable(encodeJsonValueTable(data.nodes));
  assert.deepEqual(restoredNodes, data.nodes);
  assert.equal(Object.hasOwn(restoredNodes[0].rationale[0].citations[1], "source"), false);
  assert.notEqual(restoredNodes[0].rationale[0], restoredNodes[1].rationale[0],
    "Transport sharing must not leak mutable shared containers to callers");
  restoredNodes[0].rationale[0].contexts[0].limitations.push("A local edit");
  assert.deepEqual(restoredNodes[1].rationale[0].contexts[0].limitations, data.context.limitations);
});

test("postorder interning is deterministic and unambiguous for reference-like user arrays", () => {
  const expected = envelope([
    ["a", [1, 2]],
    ["o", [["x", ["ref", 0]]]],
    ["a", [["ref", 1], ["ref", 1]]]
  ]);
  assert.deepEqual(encodeJsonValueTable([{ x: [1, 2] }, { x: [1, 2] }]), expected);
  assert.deepEqual(encodeJsonValueTable({ b: [2], a: [1] }),
    encodeJsonValueTable({ a: [1], b: [2] }));
  assert.notDeepEqual(encodeJsonValueTable([1, 2]), encodeJsonValueTable([2, 1]));
  for (const value of [["ref", 0], [["ref", 1]], { root: ["ref", 0], table: [] }]) {
    assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable(value)), value);
  }
});

test("primitive roots, empty containers, Unicode and negative zero follow canonical JSON", () => {
  for (const value of [null, true, false, 0, -0, 1.25, 1e-20, 1e30, "", "μ𝛼 e\u0301 é\n\t\u0000\\\"", [], {},
    { "𝛼": -0, "\ue000": [], "": null }]) {
    const normalized = canonicalClone(value);
    assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable(value)), normalized);
  }
  assert.equal(Object.is(decodeJsonValueTable(encodeJsonValueTable(-0)), -0), false);
  assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable(Object.assign(Object.create(null), { x: 1 }))), { x: 1 });
  const reverseFields = { table: [], root: 1, formatVersion: "1", format: FORMAT };
  assert.equal(decodeJsonValueTable(reverseFields), 1, "Envelope object property order is immaterial");
});

test("the marker recognizer reserves unsupported versions without invoking getters", () => {
  assert.equal(isJsonValueTable({ format: FORMAT, formatVersion: "future" }), true);
  reject(() => decodeJsonValueTable({ ...encodeJsonValueTable([]), formatVersion: "future" }), "FORMAT_UNSUPPORTED");
  assert.equal(isJsonValueTable(null), false);
  assert.equal(isJsonValueTable([]), false);
  assert.equal(isJsonValueTable({ format: "another-format" }), false);
  let reads = 0;
  const getter = { get format() { reads += 1; return FORMAT; } };
  assert.equal(isJsonValueTable(getter), false);
  reject(() => decodeJsonValueTable(getter), "INPUT_INVALID");
  assert.equal(reads, 0);
  const { proxy, revoke } = Proxy.revocable({}, {});
  revoke();
  assert.equal(isJsonValueTable(proxy), false);
  reject(() => decodeJsonValueTable(proxy), "INPUT_INVALID");
  const thrown = Object.defineProperty(new Error(), "name", { get() { reads += 1; return "Error"; } });
  const hostile = new Proxy({}, { getPrototypeOf() { throw thrown; } });
  reject(() => encodeJsonValueTable(hostile), "INPUT_INVALID");
  assert.equal(reads, 0, "Error reporting does not read accessors on untrusted thrown values");
});

test("JSON inputs and limit options reject accessors, sparse arrays and unsupported data", () => {
  let reads = 0;
  const getter = { get value() { reads += 1; return 1; } };
  const hidden = Object.defineProperty({}, "hidden", { get() { reads += 1; return 1; } });
  const arrayGetter = Object.defineProperty([], "0", { enumerable: true, get() { reads += 1; return 1; } });
  const options = { get maxEntries() { reads += 1; return 100; } };
  const toJSON = { toJSON() { reads += 1; return {}; } };
  const namedArray = Object.assign([], { extra: 1 });
  const symbol = { [Symbol("private")]: 1 };
  const sparse = new Array(2);
  for (const value of [getter, hidden, arrayGetter, namedArray, symbol, sparse, toJSON,
    new Date(), new Map(), new Uint8Array([1]), Object.create({ inherited: 1 }),
    undefined, () => 1, Symbol("value"), 1n, NaN, Infinity, -Infinity]) {
    reject(() => encodeJsonValueTable(value), "INPUT_INVALID");
  }
  reject(() => encodeJsonValueTable({}, options), "OPTIONS_INVALID");
  reject(() => decodeJsonValueTable(encodeJsonValueTable({}), options), "OPTIONS_INVALID");
  assert.equal(reads, 0);
  for (const invalid of [null, [], new Date(), { unknown: 1 }, { maxBytes: 0 }, { maxDepth: -1 },
    { maxEntries: 1.5 }, { maxStringBytes: undefined }, { maxBytes: Infinity },
    { maxEntries: Number.MAX_SAFE_INTEGER + 1 }, { [Symbol("limit")]: 1 }]) {
    reject(() => encodeJsonValueTable([], invalid), "OPTIONS_INVALID");
    reject(() => decodeJsonValueTable(envelope([], null), invalid), "OPTIONS_INVALID");
  }
});

test("unsafe keys, malformed Unicode and object cycles fail without lossy normalization", () => {
  for (const key of ["__proto__", "constructor", "prototype"]) {
    const unsafe = JSON.parse(`{"${key}":1}`);
    reject(() => encodeJsonValueTable(unsafe), "INPUT_INVALID");
    reject(() => decodeJsonValueTable(envelope([["o", [[key, 1]]]])), "INPUT_INVALID");
  }
  for (const invalid of ["\ud800", "\udc00", "x\ud800y"]) {
    reject(() => encodeJsonValueTable(invalid), "INPUT_INVALID");
    reject(() => encodeJsonValueTable({ [invalid]: 1 }), "INPUT_INVALID");
    reject(() => decodeJsonValueTable(envelope([], invalid)), "INPUT_INVALID");
  }
  const object = {}; object.self = object;
  const array = []; array.push(array);
  for (const value of [object, array]) reject(() => encodeJsonValueTable(value), "INPUT_INVALID");
  const wire = encodeJsonValueTable([]); wire.table.push(wire);
  reject(() => decodeJsonValueTable(wire), "INPUT_INVALID");
});

test("malformed envelopes and payloads are rejected as typed transport errors", () => {
  for (const value of [null, [], {}, { ...envelope([], null), extra: 1 },
    { ...envelope([], null), format: "wrong" }, { ...envelope([], null), table: {} }]) {
    reject(() => decodeJsonValueTable(value), "FORMAT_INVALID");
  }
  for (const table of [[null], [["unknown", []]], [["a", {}]], [["a", [], 1]],
    [["o", [[1, 2]]]], [["o", [["x"]]]], [["o", [["x", 1, 2]]]],
    [["a", [{}]]]]) {
    reject(() => decodeJsonValueTable(envelope(table)), "INPUT_INVALID");
  }
  reject(() => decodeJsonValueTable(envelope([["o", [["b", 1], ["a", 2]]]])), "NON_CANONICAL");
  reject(() => decodeJsonValueTable(envelope([["o", [["a", 1], ["a", 2]]]])), "NON_CANONICAL");
});

test("references cannot be cyclic, forward, fractional, out of range or disguised arrays", () => {
  for (const ref of [["ref", -1], ["ref", 0], ["ref", 1], ["ref", 0.5],
    ["ref", "0"], ["ref", Number.MAX_SAFE_INTEGER + 1], ["ref"], ["ref", 0, 1],
    ["other", 0], [], [1, 2]]) {
    reject(() => decodeJsonValueTable(envelope([["a", [ref]]])), "REFERENCE_INVALID");
  }
  reject(() => decodeJsonValueTable(envelope([["a", []]], ["ref", 1])), "REFERENCE_INVALID");
  reject(() => decodeJsonValueTable(envelope([["a", [["ref", 1]]], ["a", [["ref", 0]]]])), "REFERENCE_INVALID");
});

test("unused entries, duplicates and alternate table order cannot hide unbound payload", () => {
  const unused = encodeJsonValueTable([1]); unused.table.push(["a", [2]]);
  reject(() => decodeJsonValueTable(unused), "NON_CANONICAL");
  reject(() => decodeJsonValueTable(envelope([["a", []]], 1)), "NON_CANONICAL");
  reject(() => decodeJsonValueTable(envelope([
    ["a", [1]], ["a", [1]], ["a", [["ref", 0], ["ref", 1]]]
  ])), "NON_CANONICAL");
  reject(() => decodeJsonValueTable(envelope([
    ["a", [2]], ["a", [1]], ["a", [["ref", 1], ["ref", 0]]]
  ])), "NON_CANONICAL");
  const touched = encodeJsonValueTable([{ observed: 1 }, { observed: 1 }]);
  touched.table[0][1][0][1] = 2;
  const changed = decodeJsonValueTable(touched);
  assert.deepEqual(changed, [{ observed: 2 }, { observed: 2 }],
    "Scientific value hashes, applied after decoding, must reject semantically changed transport");
});

test("expanded bytes, entries, depth and string limits precede materialization", () => {
  const bomb = [["a", [0]]];
  for (let index = 1; index < 60; index += 1) bomb.push(["a", [["ref", index - 1], ["ref", index - 1]]]);
  reject(() => decodeJsonValueTable(envelope(bomb)), "LIMIT_EXCEEDED");
  const repeated = encodeJsonValueTable(Array.from({ length: 100 }, () => ({ value: "x".repeat(100) })));
  assert.ok(Buffer.byteLength(JSON.stringify(repeated)) < 10_000);
  reject(() => decodeJsonValueTable(repeated, { maxBytes: 10_000 }), "LIMIT_EXCEEDED", "maxBytes");
  reject(() => decodeJsonValueTable(repeated, { maxEntries: 100 }), "LIMIT_EXCEEDED", "maxEntries");
  reject(() => encodeJsonValueTable([1, 2], { maxEntries: 2 }), "LIMIT_EXCEEDED", "maxEntries");
  const nested = encodeJsonValueTable([[[[0]]]]);
  reject(() => decodeJsonValueTable(nested, { maxDepth: 3 }), "LIMIT_EXCEEDED", "maxDepth");
  reject(() => encodeJsonValueTable([[[[0]]]], { maxDepth: 3 }), "LIMIT_EXCEEDED", "maxDepth");
  assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable([1], { maxDepth: 1 }), { maxDepth: 1 }), [1]);
  assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable([], { maxEntries: 1 }), { maxEntries: 1 }), []);
  assert.equal(decodeJsonValueTable(encodeJsonValueTable("μ", { maxStringBytes: 2 }), { maxStringBytes: 2 }), "μ");
  for (const value of ["μa", { "μa": 1 }]) {
    reject(() => encodeJsonValueTable(value, { maxStringBytes: 2 }), "LIMIT_EXCEEDED", "maxStringBytes");
    reject(() => decodeJsonValueTable(encodeJsonValueTable(value), { maxStringBytes: 2 }), "LIMIT_EXCEEDED", "maxStringBytes");
  }
  reject(() => encodeJsonValueTable([], { maxBytes: 1 }), "LIMIT_EXCEEDED", "maxBytes");
  let boundary = 0;
  for (let index = 0; index < 64; index += 1) boundary = [boundary];
  assert.deepEqual(decodeJsonValueTable(encodeJsonValueTable(boundary)), boundary);
  reject(() => encodeJsonValueTable([boundary]), "LIMIT_EXCEEDED", "maxDepth");
});

test("raw wire scaffolding has bounded bytes, entries and depth independently of expansion", () => {
  const excessive = envelope([["a", Array.from({ length: 1000 }, () => 0)]], null);
  reject(() => decodeJsonValueTable(excessive, { maxEntries: 1 }), "LIMIT_EXCEEDED", "maxEntries");
  reject(() => decodeJsonValueTable(encodeJsonValueTable([]), { maxBytes: 10 }), "LIMIT_EXCEEDED", "maxBytes");
  let nested = null;
  for (let index = 0; index < 20; index += 1) nested = [nested];
  reject(() => decodeJsonValueTable({ ...envelope([], null), unexpected: nested }), "LIMIT_EXCEEDED", "maxDepth");
});
