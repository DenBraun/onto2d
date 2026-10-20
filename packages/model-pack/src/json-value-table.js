import { ModelPackError } from "./model-pack-error.js";

const FORMAT = "onto2d-json-value-table";
const VERSION = "1";
const DEFAULT_LIMITS = Object.freeze({
  maxBytes: 64 * 1024 * 1024,
  maxEntries: 1_000_000,
  maxDepth: 64,
  maxStringBytes: 1024 * 1024
});
const OPTION_FIELDS = new Set(Object.keys(DEFAULT_LIMITS));
const ENVELOPE_FIELDS = ["format", "formatVersion", "root", "table"];
const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);
const PREFIX = "MODEL_PACK_JSON_VALUE_TABLE_";
const codecErrors = new WeakSet();
const compareText = (left, right) => left < right ? -1 : left > right ? 1 : 0;

function fail(code, message, details = {}) {
  const error = new ModelPackError(`${PREFIX}${code}`, message, details);
  codecErrors.add(error);
  throw error;
}

function guarded(action) {
  try {
    return action();
  } catch (error) {
    if (error !== null && typeof error === "object" && codecErrors.has(error)) throw error;
    fail("INPUT_INVALID", "The JSON value cannot be inspected safely.", {
      cause: typeof error
    });
  }
}

function plainObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function normalizeOptions(options) {
  if (!plainObject(options)) fail("OPTIONS_INVALID", "Codec options must be a plain data object.");
  const descriptors = Object.getOwnPropertyDescriptors(options);
  const limits = { ...DEFAULT_LIMITS };
  for (const key of Reflect.ownKeys(descriptors)) {
    const descriptor = descriptors[key];
    if (typeof key !== "string" || !OPTION_FIELDS.has(key)
      || !Object.hasOwn(descriptor, "value") || !descriptor.enumerable
      || !Number.isSafeInteger(descriptor.value) || descriptor.value < 1) {
      fail("OPTIONS_INVALID", "Codec limits must be known positive safe integers.");
    }
    limits[key] = descriptor.value;
  }
  return limits;
}

function add(current, amount, maximum, field, subject) {
  if (amount > maximum - current) {
    fail("LIMIT_EXCEEDED", "The JSON value exceeds its codec limit.", {
      field, maximum, subject
    });
  }
  return current + amount;
}

// Count UTF-8 and JSON string bytes without first allocating an encoded copy.
// Unpaired surrogates are rejected, matching canonical JSON's Unicode policy.
function stringSizes(value, maximum, subject) {
  let bytes = 0;
  let jsonBytes = 2;
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    let size;
    if (code >= 0xd800 && code <= 0xdbff) {
      const next = value.charCodeAt(index + 1);
      if (!(next >= 0xdc00 && next <= 0xdfff)) {
        fail("INPUT_INVALID", "Unpaired Unicode surrogates are not canonical JSON.", { subject });
      }
      index += 1;
      size = 4;
    } else if (code >= 0xdc00 && code <= 0xdfff) {
      fail("INPUT_INVALID", "Unpaired Unicode surrogates are not canonical JSON.", { subject });
    } else {
      size = code < 0x80 ? 1 : code < 0x800 ? 2 : 3;
    }
    bytes = add(bytes, size, maximum, "maxStringBytes", subject);
    if (code === 0x22 || code === 0x5c) jsonBytes += 2;
    else if (code < 0x20) jsonBytes += [8, 9, 10, 12, 13].includes(code) ? 2 : 6;
    else jsonBytes += size;
  }
  return { bytes, jsonBytes };
}

function scalar(value, limits, subject) {
  if (value === null) return { value, bytes: 4, entries: 1, depth: 0 };
  if (typeof value === "boolean") return { value, bytes: value ? 4 : 5, entries: 1, depth: 0 };
  if (typeof value === "string") {
    return { value, bytes: stringSizes(value, limits.maxStringBytes, subject).jsonBytes, entries: 1, depth: 0 };
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    const normalized = Object.is(value, -0) ? 0 : value;
    return { value: normalized, bytes: JSON.stringify(normalized).length, entries: 1, depth: 0 };
  }
  fail("INPUT_INVALID", "Only finite JSON scalars and plain JSON containers are supported.", { subject });
}

function inspectContainer(value, budget, limits, subject) {
  const array = Array.isArray(value);
  if (!array && !plainObject(value)) {
    fail("INPUT_INVALID", "Only plain JSON objects and arrays are supported.", { subject });
  }
  if (array) {
    const length = Object.getOwnPropertyDescriptor(value, "length")?.value;
    if (!Number.isSafeInteger(length) || length < 0) {
      fail("INPUT_INVALID", "A JSON array requires a valid own length.", { subject });
    }
    if (length > limits.maxEntries - budget.entries) {
      fail("LIMIT_EXCEEDED", "The JSON array exceeds its codec entry limit.", {
        field: "maxEntries", maximum: limits.maxEntries, subject
      });
    }
  }
  const descriptors = Object.getOwnPropertyDescriptors(value);
  const keys = Reflect.ownKeys(descriptors);
  for (const key of keys) {
    const descriptor = descriptors[key];
    if (typeof key !== "string" || !Object.hasOwn(descriptor, "value")
      || (!descriptor.enumerable && !(array && key === "length"))) {
      fail("INPUT_INVALID", "JSON containers require enumerable string data properties.", { subject });
    }
    if (FORBIDDEN_KEYS.has(key)) {
      fail("INPUT_INVALID", "Prototype-sensitive JSON keys are forbidden.", { subject, key });
    }
  }
  if (array) {
    const length = descriptors.length.value;
    if (keys.length !== length + 1) {
      fail("INPUT_INVALID", "JSON arrays must be dense and have no named properties.", { subject });
    }
    const indexes = [];
    for (let index = 0; index < length; index += 1) {
      if (!Object.hasOwn(descriptors, String(index))) {
        fail("INPUT_INVALID", "Sparse JSON arrays are forbidden.", { subject });
      }
      indexes.push(String(index));
    }
    return { kind: "a", keys: indexes, descriptors };
  }
  return { kind: "o", keys: keys.sort(compareText), descriptors };
}

/** Descriptor-only, iterative JSON traversal: no getters, toJSON, or recursion. */
function walkJson(input, limits, finish, subject) {
  const budget = { bytes: 0, entries: 0 };
  const ancestors = new WeakSet();
  const stack = [];
  let result;
  const deliver = (value) => {
    if (stack.length === 0) result = value;
    else stack[stack.length - 1].children.push(value);
  };
  function begin(value, depth) {
    budget.entries = add(budget.entries, 1, limits.maxEntries, "maxEntries", subject);
    if (depth > limits.maxDepth) {
      fail("LIMIT_EXCEEDED", "The JSON value exceeds its codec depth limit.", {
        field: "maxDepth", maximum: limits.maxDepth, subject
      });
    }
    if (value === null || typeof value !== "object") {
      const item = scalar(value, limits, subject);
      budget.bytes = add(budget.bytes, item.bytes, limits.maxBytes, "maxBytes", subject);
      deliver(item.value);
      return;
    }
    if (ancestors.has(value)) fail("INPUT_INVALID", "Cyclic values are not JSON.", { subject });
    const container = inspectContainer(value, budget, limits, subject);
    let overhead = 2 + Math.max(0, container.keys.length - 1);
    if (container.kind === "o") {
      for (const key of container.keys) {
        overhead = add(overhead, stringSizes(key, limits.maxStringBytes, subject).jsonBytes + 1,
          limits.maxBytes, "maxBytes", subject);
      }
    }
    budget.bytes = add(budget.bytes, overhead, limits.maxBytes, "maxBytes", subject);
    ancestors.add(value);
    stack.push({ ...container, input: value, depth, next: 0, children: [] });
  }
  begin(input, 0);
  while (stack.length > 0) {
    const frame = stack[stack.length - 1];
    if (frame.next < frame.keys.length) {
      const key = frame.keys[frame.next++];
      begin(frame.descriptors[key].value, frame.depth + 1);
    } else {
      stack.pop();
      ancestors.delete(frame.input);
      deliver(finish(frame.kind, frame.keys, frame.children));
    }
  }
  return result;
}

// The envelope has at most six structural nesting levels. Its tags, key pairs,
// and reference tuples add fewer than twelve wire values per semantic entry.
// Bound that scaffolding separately so small semantic limits remain meaningful.
function wireLimits(limits) {
  return {
    ...limits,
    maxEntries: limits.maxEntries > (Number.MAX_SAFE_INTEGER - 32) / 12
      ? Number.MAX_SAFE_INTEGER : limits.maxEntries * 12 + 32,
    maxDepth: 8,
    maxStringBytes: Math.max(64, limits.maxStringBytes)
  };
}

function snapshotWire(value, limits) {
  return walkJson(value, wireLimits(limits), (kind, keys, children) => kind === "a"
    ? children : Object.fromEntries(keys.map((key, index) => [key, children[index]])), "wire");
}

function encode(value, limits) {
  const table = [];
  const interned = new Map();
  let tableBytes = 2;
  const root = walkJson(value, limits, (kind, keys, children) => {
    const entry = [kind, kind === "a" ? children : keys.map((key, index) => [key, children[index]])];
    const text = JSON.stringify(entry);
    if (interned.has(text)) return ["ref", interned.get(text)];
    const bytes = stringSizes(text, limits.maxBytes, "encoded table").bytes;
    tableBytes = add(tableBytes, bytes + (table.length > 0 ? 1 : 0), limits.maxBytes, "maxBytes", "wire");
    const index = table.length;
    table.push(entry);
    interned.set(text, index);
    return ["ref", index];
  }, "expanded value");
  const envelope = { format: FORMAT, formatVersion: VERSION, root, table };
  // Also bound the complete encoded envelope, including all reference overhead.
  snapshotWire(envelope, limits);
  return envelope;
}

/** Encode a canonical JSON value using deterministic postorder interning. */
export function encodeJsonValueTable(value, options = {}) {
  return guarded(() => encode(value, normalizeOptions(options)));
}

/** Recognize the reserved marker without reading accessor properties. */
export function isJsonValueTable(value) {
  if (value === null || typeof value !== "object") return false;
  try {
    const descriptor = Object.getOwnPropertyDescriptor(value, "format");
    return descriptor !== undefined && Object.hasOwn(descriptor, "value") && descriptor.value === FORMAT;
  } catch {
    return false;
  }
}

function reference(value, maximum) {
  if (!Array.isArray(value) || value.length !== 2 || value[0] !== "ref"
    || !Number.isSafeInteger(value[1]) || value[1] < 0 || value[1] >= maximum) {
    fail("REFERENCE_INVALID", "A table reference must name an earlier container.");
  }
  return value[1];
}

function expandedMetrics(value, available, metrics, limits) {
  if (Array.isArray(value)) return metrics[reference(value, available)];
  if (value !== null && typeof value === "object") {
    fail("INPUT_INVALID", "Encoded values must be scalars or reference tuples.");
  }
  const item = scalar(value, limits, "expanded value");
  if (item.bytes > limits.maxBytes) {
    fail("LIMIT_EXCEEDED", "The expanded scalar exceeds its codec byte limit.", {
      field: "maxBytes", maximum: limits.maxBytes, subject: "expanded value"
    });
  }
  return item;
}

function preflight(envelope, limits) {
  if (!plainObject(envelope) || Object.keys(envelope).join("\0") !== ENVELOPE_FIELDS.join("\0")
    || envelope.format !== FORMAT || !Array.isArray(envelope.table)) {
    fail("FORMAT_INVALID", "The JSON value-table envelope has an invalid field set or format.");
  }
  if (envelope.formatVersion !== VERSION) {
    fail("FORMAT_UNSUPPORTED", "The JSON value-table version is unsupported.");
  }
  const metrics = [];
  for (const [index, entry] of envelope.table.entries()) {
    if (!Array.isArray(entry) || entry.length !== 2 || !["a", "o"].includes(entry[0])
      || !Array.isArray(entry[1])) {
      fail("INPUT_INVALID", "A table entry must contain an array or object payload.", { index });
    }
    const [kind, payload] = entry;
    const result = { bytes: 2, entries: 1, depth: 0 };
    let previous = null;
    for (const [position, item] of payload.entries()) {
      let value = item;
      if (position > 0) result.bytes = add(result.bytes, 1, limits.maxBytes, "maxBytes", "expanded value");
      if (kind === "o") {
        if (!Array.isArray(item) || item.length !== 2 || typeof item[0] !== "string"
          || FORBIDDEN_KEYS.has(item[0])) {
          fail("INPUT_INVALID", "Object payloads require safe string-key/value pairs.", { index });
        }
        const [key, child] = item;
        if (previous !== null && compareText(previous, key) >= 0) {
          fail("NON_CANONICAL", "Object payload keys must be unique and sorted.", { index });
        }
        previous = key;
        result.bytes = add(result.bytes, stringSizes(key, limits.maxStringBytes, "expanded key").jsonBytes + 1,
          limits.maxBytes, "maxBytes", "expanded value");
        value = child;
      }
      const child = expandedMetrics(value, index, metrics, limits);
      result.bytes = add(result.bytes, child.bytes, limits.maxBytes, "maxBytes", "expanded value");
      result.entries = add(result.entries, child.entries, limits.maxEntries, "maxEntries", "expanded value");
      result.depth = Math.max(result.depth, child.depth + 1);
      if (result.depth > limits.maxDepth) {
        fail("LIMIT_EXCEEDED", "The expanded value exceeds its codec depth limit.", {
          field: "maxDepth", maximum: limits.maxDepth, subject: "expanded value"
        });
      }
    }
    if (result.bytes > limits.maxBytes) {
      fail("LIMIT_EXCEEDED", "The expanded container exceeds its codec byte limit.", {
        field: "maxBytes", maximum: limits.maxBytes, subject: "expanded value"
      });
    }
    metrics.push(result);
  }
  expandedMetrics(envelope.root, metrics.length, metrics, limits);
}

// Expand references with multiplicity, after the DP guard, so callers receive
// ordinary independent JSON containers rather than a mutable shared-object DAG.
function materialize(envelope) {
  let result;
  const stack = [];
  const deliver = (value) => {
    if (stack.length === 0) result = value;
    else {
      const frame = stack[stack.length - 1];
      const position = frame.next - 1;
      if (frame.kind === "a") frame.value.push(value);
      else frame.value[frame.payload[position][0]] = value;
    }
  };
  function begin(encoded) {
    if (!Array.isArray(encoded)) { deliver(Object.is(encoded, -0) ? 0 : encoded); return; }
    const [kind, payload] = envelope.table[encoded[1]];
    stack.push({ kind, payload, next: 0, value: kind === "a" ? [] : {} });
  }
  begin(envelope.root);
  while (stack.length > 0) {
    const frame = stack[stack.length - 1];
    if (frame.next < frame.payload.length) {
      const item = frame.payload[frame.next++];
      begin(frame.kind === "a" ? item : item[1]);
    } else {
      stack.pop();
      deliver(frame.value);
    }
  }
  return result;
}

/** Restore the exact bounded JSON value before Model Pack semantic verification. */
export function decodeJsonValueTable(value, options = {}) {
  return guarded(() => {
    const limits = normalizeOptions(options);
    const envelope = snapshotWire(value, limits);
    preflight(envelope, limits);
    const restored = materialize(envelope);
    const expected = encode(restored, limits);
    if (JSON.stringify(expected) !== JSON.stringify(envelope)) {
      fail("NON_CANONICAL", "The table must use exact first-occurrence postorder interning with no unused entries.");
    }
    return restored;
  });
}
