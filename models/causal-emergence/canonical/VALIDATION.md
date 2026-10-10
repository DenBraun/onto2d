# Current canonical validation

Current graph: `2026.10.10.2`, checked locally on 10 October 2026.

The source contains 1235 records, 1018 connections, 1328 claims and 398 sources.
The output has 838 descriptive and 180 functional connections. Its physics
review contains 163 study contexts and 136 comparisons. All 158 bound input
hashes and 95 local source hashes match current bytes.

- `npm test` passes all 787 ordinary tests with no failures, cancellations or
  skips. Canonical source tests belong to the separate research suite.
- All 123 focused canonical tests pass, including 18 gluon tests and the affected
  source, physics, routing, readiness, serialization, quark, lepton, hadron and
  field-dynamics boundaries. Full-source validation rejects duplicate physics
  comparison IDs; regression cases cover conflicting records before and after
  the reviewed SLD and H1 comparisons.
- `npm run model:causal-emergence:verify` passes exact source compilation and
  release verification. No complete detector or likelihood replay is claimed.
- `npm run model-studio:data:verify` validates all 89 browser files against the
  exact release. The registry has 26 entries; Model Studio uses module revision
  `20261010.2` and the current graph.
- `npm run build` passes all repository checks, including 217 versioned contracts
  and 188 Markdown files. Unrelated research replays were not run.
- Original catalogues and existing frozen releases remain unchanged. Existing
  study/comparison records, relations and readiness rows retain their content.
  Only source card 1.3 leaves the pending list.

The focused command used locally was:

```sh
node --test --test-concurrency=4 test/workspace/canonical-{gluon-formal,gluon-spin,gluon-color,gluon-dis,source,physics,routing,readiness,release-serialization,quark-formal,quark-dis,lepton-formal,hadron-production,field-dynamics}.test.mjs
```

The production browse loader retrieved all 17 new records with matching
citations and representation roles using the index, graph and three detail
chunks. The full pack and unopened reviews remained unloaded. The separately
requested physics review matched the canonical data. This was a Node Fetch
integration probe, not a rendered-browser timing or visual check.

The initial graph JSON is 946105 bytes before compression. The compact bundle
is 33315189 bytes and the release totals 66749263 bytes, within the unchanged
32 MiB file and 64 MiB total budgets. Remaining allowances are 239243 bytes for
the bundle and 359601 bytes for the total release. The largest semantic split
is 15178367 bytes, within the browser fallback's 16 MiB file limit. Additional
source work must preserve these transport limits. No loading architecture or
public schema changed.

Validation uses macOS, Node.js 24.19.0 and Python 3.9.6. Remote CI requires its
own run after publication.

Current artifact hashes:

```text
rootHash: sha256:28f873c08218cb77a2fa517446452005c6f476f4efdc017562017d2ab3a9c686
manifestHash: sha256:fd611b619ffee9b6a8350619467253f98e451709d45797640623c83b707d1b6a
registryHash: sha256:3d863a3027319e254de5c6b2c30b028e8367c0d202902d7189fbf0ee5dcb5fc2
browseIndexHash: sha256:d155cb93598b2348e6c8a3e4bfa96f8233478ffffe380024e7fe9d2e1c6c8c52
```

Scientific review remains partial: 179 [source cards](../../../references/canonical/pending-review.json)
are unfinished, including 13 at Level 1. The other 70 cards have substantive
assertions supported, qualified or excluded; this census does not measure
scientific validity or independent reproduction. The Level-0 bridge remains
unresolved.

Gluon field strength, cubic/quartic terms and color normalization specify a
formal model. Adjoint components, spin/polarization, theoretical mass, detector
counts and physical instances remain different concepts. The old process
classification, necessary weighted parents and one-carrier minima are excluded.

SLD's reconstructed shapes, hadron corrections and parton estimates reuse one
sample. Its spin comparison retains specified alternatives and correlated
uncertainty; no new p-values or universal spin-model exclusion is inferred.
OPAL's simultaneous color-factor fit retains NLO/resummation assumptions,
standard-QCD corrections, adopted T_R normalization and distinct statistical
and systematic correlations. It does not directly image a vertex. Its benchmark
text/caption discrepancy remains separate from the fitted coupling.

H1's corrected cross sections and conditional PDF extraction retain MSbar,
heavy-flavor and scale choices. Fixed H1-only coupling and uncertainty from the
joint H1+BCDMS fit remain distinct. Experimental PDF precision is not total
model uncertainty. Explicit scale definitions are preserved alongside the
source's reversed table-caption labels.

Existing TASSO, running-coupling and lattice findings keep their own reading,
matter-content, sampling and inference limits. Pure SU(2), two-flavor SU(3)
with static sources and calibrated 2+1-flavor QCD are distinct computations.
They do not establish physical gluon mass, real-time hadron formation or a
universal self-organization mechanism. Confinement and broader running claims
remain separate pending scopes. Passing software checks do not independently
validate these scientific interpretations.
