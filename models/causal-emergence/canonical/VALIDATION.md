# Current canonical validation

Current graph: `2026.10.18.5`, checked locally on 18 October 2026.

The source contains 1325 records, 1202 connections, 1444 claims and 422 sources.
The output has 1022 descriptive and 180 functional connections. Its physics
review retains 188 study contexts and 142 comparisons. All 187 bound input
hashes and 95 local source hashes match current bytes.

- `npm test` passes all 787 ordinary tests with no failures, cancellations or
  skips. Canonical source tests belong to the separate research suite.
- All 120 distinct focused canonical tests pass, including 16 new mass/mixing
  groups. Coverage includes PMNS rotation and phase conventions, restricted
  rephasing invariance, minimal-model versus mass-extension assumptions,
  common mass-squared shifts, unequal-splitting and nonnegative-mass conditions,
  one-zero-mass counterexamples, source-specific historical inferences and
  exclusion of unsupported absolute-mass or mechanism claims. Coordinated
  claim/display/source changes cannot silently broaden the reviewed scope.
- `npm run model:causal-emergence:verify` passes exact source compilation and
  release verification. Existing bounded checks retain their original scope;
  no new global fit, numerical mass spectrum or experimental likelihood is replayed.
- `npm run model-studio:data:verify` validates all 96 browser files against the
  exact release. The registry has 35 entries; Model Studio uses module revision
  `20261018.6` and the current graph.
- `npm run build` passes all repository checks, including 217 versioned
  contracts and 188 Markdown files.
- Original catalogues and existing frozen releases remain unchanged. Only
  `references/level-1.json#/25` leaves the pending source list. All prior
  scientific entities, claims, relations, rules, study contexts and comparisons
  retain their existing contents and scopes.

The focused command used locally was:

```sh
node --test --test-concurrency=4 test/workspace/canonical-{source,physics,routing,readiness,release-serialization,neutrino,solar-neutrino,atmospheric-neutrino,accelerator-neutrino,matter-neutrino,oscillation-formal,neutrino-mass-formal,neutrino-mass-identifiability,neutrino-mass-scope}.test.mjs
```

The production browse loader starts with two HTTP requests totaling 1084186
bytes. All five new records load exact details from three chunks; the physics
review is fetched separately. All 1325 full node details match the release
through the lazy loader. Cache reuse, cancellation, closed sessions, identity
mismatch, graph/detail tamper rejection and clean retry pass. The current full-pack
HTTP fallback loads all 11 split files within default limits; a smaller budget
is rejected. The previous release retains its exact identity through HTTP
fallback. All 1202 edges resolve their 1269 claim references, and all 1325
nodes retain their 1433 expanded rationales. These were Fetch integration
probes, not rendered-browser timing or visual checks.

The initial graph JSON is 1083704 bytes before compression. The compact bundle
is 23805333 bytes and the release totals 47740603 bytes, within the unchanged
32 MiB file and 64 MiB total budgets. Remaining allowances are 9749099 bytes
for the bundle and 19368261 bytes for the total release. The largest semantic
split is 16660086 bytes, leaving 117130 bytes within the browser fallback's
16 MiB file limit. Transport budgets and public schemas are unchanged.

Validation uses macOS, Node.js 24.19.0 and Python 3.9.6. Remote CI requires its
own run after publication. Unrelated research replays were not run.

Current artifact hashes:

```text
rootHash: sha256:321b3404da656a84bafafab8c3f198faaf2bdcc42e0e39e3dcdf245b66e54387
manifestHash: sha256:6119173346b3b62330a4f54b6494d2138cdc5b299ba2336829cebe5851eed392
registryHash: sha256:ff576d26917b2b9e2e6739b44fd685c699dcdcae6c63d10306383f0363a3192f
browseIndexHash: sha256:a4b40c11a8bd976b7bb973c95a7e648a9a85a7436bffa461aa659028731501d9
```

Scientific review remains partial: 170 [source cards](../../../references/canonical/pending-review.json)
are unfinished, including 4 at Level 1. The other 79 cards have substantive
assertions supported, qualified or excluded; this census does not measure
scientific validity or independent reproduction. The Level-0 bridge remains
unresolved. Qualified neighboring cards retain their existing scopes.

The selected PDG mass/mixing sections were read with their actual matrix and
mass-term passages visually checked. The closed unitary three-active model is
supplied, not a universal exclusion of extra states or nonunitary effective
submatrices. Ordinary oscillation phase cancellation does not make Majorana
phases unphysical in every process. Minimal renormalizable field content and
possible massive-neutrino extensions are different formal assumptions.

A common mass-squared shift is an invariance of the leading coherent
ultrarelativistic vacuum probability, with nonnegative masses and approximation
validity retained. The at-least-two-massive-states implication additionally
requires unequal nonzero differences in a common three-state interpretation.
It permits one zero mass and does not measure an absolute scale or ordering.

The five selected outcomes retain four existing historical inference contexts.
KamLAND and Super-Kamiokande effective two-flavor fits do not become exact
modern eigenpair measurements or a new global likelihood. SNO's joint active
flavor result is not a mass-splitting measurement. OPERA appearance and its
full-mixing compatibility interval share an acquisition and analysis context.
No new confidence coverage, Dirac/Majorana determination, unique mass mechanism,
sterile census or quantitative astrophysical/cosmological constraint follows.
Passing software checks does not independently validate these interpretations.
