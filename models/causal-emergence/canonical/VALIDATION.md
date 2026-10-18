# Current canonical validation

Current graph: `2026.10.18.7`, checked locally on 18 October 2026.

The source contains 1330 records, 1223 connections, 1450 claims and 422 sources.
The output has 1043 descriptive and 180 functional connections. Its physics
review retains 188 study contexts and 142 comparisons. All 192 bound input
hashes and 95 local source hashes match current bytes.

- `npm test` passes all 787 ordinary tests with no failures, cancellations or
  skips. Canonical source tests belong to the separate research suite.
- All 107 distinct focused canonical tests pass, including 12 new scalar
  isotropy and field-anisotropy boundary groups. Coverage protects the scalar
  norm and rotation convention, fixed momentum magnitude and preparation,
  active/passive distinctions, state and regulator limits, descriptive inputs,
  source ownership and unsupported vacuum, parent and Level-0 claims.
  Coordinated claim/display changes cannot silently broaden the reviewed scope.
- `npm run model:causal-emergence:verify` passes exact source compilation and
  release verification. Existing bounded checks retain their original scope;
  no new anisotropy experiment, response fit or numerical study is replayed.
- `npm run model-studio:data:verify` validates all 97 browser files against the
  exact release. The registry has 37 entries; Model Studio uses module revision
  `20261018.8` and the current graph.
- `npm run build` passes source, module revision, workspace, declaration,
  worker, registry, schema, kernel, documentation and stored-catalogue checks.
  All 217 public schemas and 188 Markdown files pass their checks.

The focused commands used locally were:

```sh
node --test --test-concurrency=4 test/workspace/canonical-{source,physics,routing,readiness,release-serialization,field-dynamics,gauge-sector-model,gauge-sector-boundary,gauge-sector-scope,scalar-dispersion-isotropy,field-anisotropy-boundary}.test.mjs
node --test test/workspace/canonical-routing.test.mjs
```

The production browse loader starts with two HTTP requests totaling 1096534
bytes. Both new definitions load exact details from two chunks; the physics
review is fetched separately. All 1330 full node details match the release
through the lazy loader and actual local HTTP transport. Cache reuse,
cancellation, closed sessions, identity mismatch, graph/detail tamper rejection
and clean retry pass. The current full-pack HTTP fallback loads all 11 split
files within default limits; a smaller budget is rejected. Registered historical
fallback retains its exact identity. All 1223 edges resolve their 1290 claim
references, and all 1330 nodes retain their 1438 expanded rationales. These
were Fetch integration probes, not rendered-browser timing or visual checks.

The initial graph JSON is 1096052 bytes before compression. The compact bundle
is 23954313 bytes and the release totals 48039457 bytes, within the unchanged
32 MiB file and 64 MiB total budgets. Remaining allowances are 9600119 bytes
for the bundle and 19069407 bytes for the total release. The largest semantic
split is 16760740 bytes, leaving 16476 bytes within the browser fallback's
16 MiB file limit. Transport budgets and public schemas are unchanged.

Validation uses macOS, Node.js 24.19.0 and Python 3.9.6. Remote CI requires its
own run after publication. Unrelated research replays were not run.

Current artifact hashes:

```text
rootHash: sha256:bd60eee30891bd7ae9d36246201c158a76bd26e7175483c75c0e9ed14307dd31
manifestHash: sha256:54fa9b8d92f0aedf5db654a6181e52ee4484d0e014b6ec86b014f5aed94ec667
registryHash: sha256:e81a6571e85df279efca018316cc97e369cffed6b3d29b49775faca06fd4d150
browseIndexHash: sha256:5c0e083fbc4fdda94598e8ac6f20d305b6900b21e3f3c9eef6c3411e28b0b47e
```

Scientific review remains partial: 168 [source cards](../../../references/canonical/pending-review.json)
are unfinished, including 2 at Level 1. The other 81 cards have substantive
assertions supported, qualified or excluded; this census does not measure
scientific validity or independent reproduction. Qualified neighboring cards
retain their existing scopes; all registered frozen releases and original
source catalogues retain their exact bytes.

Card 1.32 is qualified to a rotational comparison and a source-support boundary.
The selected Tong scalar, vacuum and Heisenberg passages were read. Their
positive-mass free scalar model supplies E(k)=sqrt(k dot k+m^2) in hbar=c=1:
proper rotations preserve that energy at fixed momentum magnitude. This is an
isotropic model null, not observed anisotropy or an experiment on empty-space
symmetry. Rotation-related momenta need not identify the same quantum state.
A passive coordinate change rotates all components together; an active test
compares momentum with a fixed physical axis and preparation. An anisotropic
regulator cannot inherit unrestricted rotation symmetry from this model.

A chosen stationary vacuum, ordinary time evolution and the field framework
supply no anisotropy formation or maintenance cause. Source-card weights, unit
minima and SOMA classifications are not physical thresholds. The unresolved
Level-0 directional gradient still needs a functional, domain, operator, units,
map and discriminating prediction. Polarization, parity, nonreciprocity,
momentum-transfer running and BRDF geometry do not replace a specified spatial
anisotropy observable. Cards 1.33 and 1.34 remain pending and supply no mutual
validation. No anisotropic medium, response tensor, vacuum axis, directional
stability law or new primary experiment is admitted. Passing software checks
does not independently validate a physical anisotropy hypothesis.
