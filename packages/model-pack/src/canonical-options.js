// A pack contains records, indexes and repeated source rationale. Its aggregate
// budget is separate from the kernel's default budget for individual values.
// This changes admission capacity, never the canonical representation or hashes.
export const MODEL_PACK_CANONICAL_OPTIONS = Object.freeze({
  limits: Object.freeze({ maxEntries: 1_000_000 })
});
