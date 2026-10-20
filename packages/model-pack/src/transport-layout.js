import { canonicalize } from "@onto2d/kernel/canonical";
import { MODEL_PACK_CANONICAL_OPTIONS } from "./canonical-options.js";
import { decodeJsonValueTable, isJsonValueTable } from "./json-value-table.js";
import {
  ModelPackError,
  modelPackFilePaths,
  verifyModelPack
} from "./index.js";

export const MODEL_PACK_REQUIRED_PATHS = Object.freeze([
  "manifest.json",
  ...Object.values(modelPackFilePaths())
]);

export const MODEL_PACK_OPTIONAL_PATHS = Object.freeze(["bundle.json"]);

export const MODEL_PACK_ALLOWED_PATHS = new Set([
  ...MODEL_PACK_REQUIRED_PATHS,
  ...MODEL_PACK_OPTIONAL_PATHS
]);

export const MODEL_PACK_ALLOWED_DIRECTORIES = new Set(
  [...MODEL_PACK_ALLOWED_PATHS].flatMap((filePath) => {
    const segments = filePath.split("/");
    return segments
      .slice(0, -1)
      .map((_, index) => segments.slice(0, index + 1).join("/"));
  })
);

export function modelPackTransportFail(code, message, details = {}) {
  throw new ModelPackError(code, message, details);
}

export function inspectTransportOptions(value, code, subject) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    modelPackTransportFail(code, `${subject} must be a plain data object.`);
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) {
    modelPackTransportFail(code, `${subject} must be a plain data object.`);
  }
  const descriptors = Object.getOwnPropertyDescriptors(value);
  const entries = new Map();
  for (const key of Reflect.ownKeys(descriptors)) {
    const descriptor = descriptors[key];
    if (typeof key !== "string" || !("value" in descriptor)) {
      modelPackTransportFail(code, `${subject} must contain only string data properties.`);
    }
    entries.set(key, descriptor.value);
  }
  return entries;
}

export function verifyTransportFiles(values, { maxTotalBytes = 64 * 1024 * 1024 } = {}) {
  let expandedBytes = 0;
  function decoded(relative) {
    const remaining = maxTotalBytes - expandedBytes;
    if (remaining < 1) {
      modelPackTransportFail("MODEL_PACK_TRANSPORT_LIMIT_EXCEEDED", "Expanded Model Pack files exceed maxTotalBytes.");
    }
    const input = values.get(relative);
    const value = (relative === "model/nodes.json" || relative === "bundle.json") && isJsonValueTable(input)
      ? decodeJsonValueTable(input, { maxBytes: remaining }) : input;
    // Canonical inspection rejects accessors and non-JSON values before counting.
    // Raw stream limits remain separate; repeated bundle content counts again.
    const bytes = new TextEncoder().encode(canonicalize(value, MODEL_PACK_CANONICAL_OPTIONS)).byteLength;
    if (bytes > remaining) {
      modelPackTransportFail("MODEL_PACK_TRANSPORT_LIMIT_EXCEEDED", "Expanded Model Pack files exceed maxTotalBytes.", {
        path: relative, maxTotalBytes
      });
    }
    expandedBytes += bytes;
    return value;
  }
  const manifest = decoded("manifest.json");
  const packFiles = {};
  for (const relative of Object.values(modelPackFilePaths())) {
    packFiles[relative] = decoded(relative);
  }
  const verified = verifyModelPack({ manifest, files: packFiles });
  if (values.has("bundle.json")) {
    const bundle = verifyModelPack(decoded("bundle.json"));
    if (canonicalize(bundle, MODEL_PACK_CANONICAL_OPTIONS) !== canonicalize(verified, MODEL_PACK_CANONICAL_OPTIONS)) {
      modelPackTransportFail(
        "MODEL_PACK_TRANSPORT_BUNDLE_MISMATCH",
        "bundle.json differs from the authoritative split Model Pack files."
      );
    }
  }
  return verified;
}
