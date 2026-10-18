# Current canonical validation

Current graph: `2026.10.18.1`, checked locally on 18 October 2026.

The source contains 1288 records, 1127 connections, 1399 claims and 411 sources.
The output has 947 descriptive and 180 functional connections. Its physics
review contains 183 study contexts and 142 comparisons. All 174 bound input
hashes and 95 local source hashes match current bytes.

- `npm test` passes all 787 ordinary tests with no failures, cancellations or
  skips. Canonical source tests belong to the separate research suite.
- All 132 distinct focused canonical tests pass, including 22 new nuclear
  groups. Coverage includes compatible thresholds, sign and unit conventions,
  bare versus renormalized masses, fixed inputs versus sensitivity, shared
  covariance, state-identification assumptions and exclusion of unmodeled bulk
  claims. Direct preprint metadata and computational-role guards also pass.
  Rule-generated physical nodes and dependencies require reviewed admission;
  appended rules and rewired premises/conclusions cannot bypass that boundary.
- `npm run model:causal-emergence:verify` passes exact source compilation and
  release verification. No complete new lattice simulation or fit replay is
  claimed.
- `npm run model-studio:data:verify` validates all 93 browser files against the
  exact release. The registry has 31 entries; Model Studio uses module revision
  `20261018.2` and the current graph.
- `npm run build` passes all repository checks, including 217 versioned
  contracts and 188 Markdown files.
- Original catalogues and existing frozen releases remain unchanged. Only
  `references/level-1.json#/19` leaves the pending source list.

The focused command used locally was:

```sh
node --test --test-concurrency=4 test/workspace/canonical-{source,physics,routing,readiness,release-serialization,quark-formal,quark-dis,quark-top-width,nucleon-algebra,nuclear-energetics,deuteron,mass-constraints,nuclear-lattice,nuclear-state-review,nuclear-bridge}.test.mjs
```

Mutations reject invented journal metadata, an unreviewed source
owner, an unversioned preprint and promotion to detector acquisition or local
numerical reproduction. The paired preprints retain one study and no journal
metadata.

The production browse loader starts with two HTTP requests totaling 1024906
bytes. All ten new records load exact details from six chunks; the physics
review is fetched separately. All 1288 full node details also match the release
through the lazy loader. Cache reuse, cancellation, closed sessions, identity
mismatch, graph/detail tamper rejection and clean retry pass. The current
full-pack HTTP fallback loads all 11 split files within default limits; a
smaller budget is rejected. The previous release retains its exact identity
through HTTP fallback. All 1127 edges resolve their 1194 claim references, and
all 1288 nodes retain their 1396 expanded rationales. These were Fetch
integration probes, not rendered-browser timing or visual checks.

The initial graph JSON is 1024424 bytes before compression. The compact bundle
is 22903028 bytes and the release totals 45931406 bytes, within the unchanged
32 MiB file and 64 MiB total budgets. Remaining allowances are 10651404 bytes
for the bundle and 21177458 bytes for the total release. The largest semantic
split is 16029570 bytes, leaving 747646 bytes within the browser fallback's
16 MiB file limit. Transport budgets and public schemas are unchanged.

Validation uses macOS, Node.js 24.19.0 and Python 3.9.6. Remote CI requires its
own run after publication. Unrelated research replays were not run.

Current artifact hashes:

```text
rootHash: sha256:a2217dbd9e44ad8a341b7afe6ae0dd5e95ffc583de22a8c7ccfe04df71ecaa09
manifestHash: sha256:6d79293a879bf60b9a09aab7b5480046547661d0a34cc09053221b278884a469
registryHash: sha256:b4e817837bcb34f30f5a4906ac5a8662c982106bff51d2fd93958cc8fab664dc
browseIndexHash: sha256:11005b906ad0fa5fcbf5fa5043cdc501b2cb1493d088584686631057446530e7
```

Scientific review remains partial: 174 [source cards](../../../references/canonical/pending-review.json)
are unfinished, including 8 at Level 1. The other 75 cards have substantive
assertions supported, qualified or excluded; this census does not measure
scientific validity or independent reproduction. The Level-0 bridge remains
unresolved. Qualified neighboring cards retain their existing scopes.

The new nuclear bridge keeps one heavy flavor-symmetric QCD input point,
ensemble/operator preparation, finite-volume threshold differences and
conditional binding assignments distinct. Three original volumes do not
provide a continuum or physical-light-mass nuclear prediction. The adopted
scale and complete covariance are not independently reconstructed.

The 2026 preprint analysis reuses a subset of the original gauge fields with
new correlators and operators. Saturation, gap and Hermiticity assumptions
remain explicit; bounds on some eigenvalue need not identify the ground state
or exclude missed levels. The bound/unbound interpretation remains unresolved.
The companion report is not an independent replication. No renormalized
quark-mass derivative, bulk density, compressibility, astrophysical equation of
state, causal maintenance rule or universal carrier minimum is admitted.
Passing software checks does not independently validate these interpretations.
