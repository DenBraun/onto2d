# Current canonical validation

Current graph: `2026.10.18.8`, checked locally on 18 October 2026.

The source contains 1331 records, 1228 connections, 1451 claims and 422 sources.
The output has 1048 descriptive and 180 functional connections. Its physics
review retains 188 study contexts and 142 comparisons. All 193 bound input
hashes and 95 local source hashes match current bytes.

- `npm test` passes all 787 ordinary tests with no failures, cancellations or
  skips. Canonical source tests belong to the separate research suite.
- All 110 focused canonical tests pass, including six new polarization-state
  groups and the updated anisotropy boundary. Coverage protects normalization,
  finite energy, transverse basis conventions, consistent coefficient/operator
  changes, mean-field interpretation, mode degeneracy and unsupported response,
  parent, threshold and Level-0 claims.
- `npm run model:causal-emergence:verify` passes exact source compilation and
  release verification. Existing bounded checks retain their original scope;
  no new polarization experiment, response fit or numerical study is replayed.
- `npm run model-studio:data:verify` validates all 97 browser files against the
  exact release. The registry has 38 entries; Model Studio uses module revision
  `20261018.9` and the current graph.
- `npm run build` passes source, module revision, workspace, declaration,
  worker, registry, schema, kernel, documentation and stored-catalogue checks.
  All 217 public schemas and 188 Markdown files pass their checks.

The focused command used locally was:

```sh
node --test --test-concurrency=4 test/workspace/canonical-{source,physics,routing,readiness,release-serialization,field-dynamics,photon-formal,photon-scope,vacuum-polarization,scalar-dispersion-isotropy,field-anisotropy-boundary,polarization-state-scope}.test.mjs
```

The production browse loader starts with two HTTP requests totaling 1099500
bytes. The new definition loads exact details from one chunk; the physics
review is fetched separately. All 1331 full node details match the release
through the lazy loader and actual local HTTP transport. Cache reuse,
cancellation, closed sessions, identity mismatch, graph/detail tamper rejection
and clean retry pass. The current full-pack HTTP fallback loads all 11 split
files within default limits; a smaller budget is rejected. Registered historical
fallback retains its exact identity. All 1228 edges resolve their 1295 claim
references, and all 1331 nodes retain their 1439 expanded rationales. These
were Fetch integration probes, not rendered-browser timing or visual checks.

The initial graph JSON is 1099018 bytes before compression. The compact bundle
is 23974230 bytes and the release totals 48079480 bytes, within the unchanged
32 MiB file and 64 MiB total budgets. Remaining allowances are 9580202 bytes
for the bundle and 19029384 bytes for the total release. The largest semantic
split is 16772887 bytes, leaving 4329 bytes within the browser fallback's
16 MiB file limit. Transport budgets and public schemas are unchanged.

Validation uses macOS, Node.js 24.19.0 and Python 3.9.6. Remote CI requires its
own run after publication. Unrelated research replays were not run.

Current artifact hashes:

```text
rootHash: sha256:fd1055e2b138748ba98985bd5e4d0be56062d8a82db9c2460df9277d41cddb41
manifestHash: sha256:1037bc31ed3553de0295ba8d336c3e2e724afad05e39953fcd183590f273f0a1
registryHash: sha256:5b839fde5cf288a28e736ed48d152fb75a5e81446967216a54259565525ed797
browseIndexHash: sha256:4ed2013602fbbf7c0058470709cf8d82599a4b7be5e3caef23a57780542e1867
```

Scientific review remains partial: 167 [source cards](../../../references/canonical/pending-review.json)
are unfinished, including one at Level 1: directional excitation stability
(1.34). The other 82 cards have substantive assertions supported, qualified or
excluded; this census does not measure scientific validity or independent
reproduction. Registered frozen releases and original source catalogues retain
their exact bytes.

Card 1.33 selects a normalized transverse photon state in the supplied free
Maxwell model, using the actual Tong Coulomb-gauge mode-algebra and Hamiltonian
passage. Its local real basis, complex coefficients, fixed-frame measure and
finite-energy wavepacket are explicit. Passive basis changes transform the
coefficients and mode operators consistently, preserving the state. An active
comparison keeps the basis and apparatus fixed while varying relative
coefficients. The polarization amplitude is distinct from the mean electric
field, which vanishes in a one-photon number state. Equal free-mode frequencies
supply no observed birefringence or intrinsic vacuum axis.

Prepared photon polarization, induced material polarization or magnetization,
and loop-polarization corrections are separate meanings. Neither effective-alpha
running nor directional radiometry supplies a polarization-resolved constitutive
measurement in this admission. No analyzer calibration, material response tensor,
new experiment or numerical replay is supplied. A physical response claim needs
its model, state, background, directional protocol and observable.

The original parent weights, unit minima, necessity/modulation/arising labels
and SOMA classifications are not physical causal laws. The scalar vacuum and
scalar evolution definitions do not establish electromagnetic polarizability;
the Level-0 gradient still lacks a defined field-response map. Unidentified
conceptual/theoretical placeholders establish no anisotropic response or
redistribution of interaction influence. Polarization and directional excitation
stability require separately scoped models and evidence, and their names cannot
mutually validate anisotropy. Passing software checks does not independently
validate anisotropic vacuum response.
