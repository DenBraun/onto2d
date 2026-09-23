# Current canonical validation

Current graph: `2026.09.23.7`, checked locally on 23 September 2026.
The complete repository build passes.

The source contains 938 records, 566 connections, 908 claims and 314 sources.
The output has 386 descriptive and 180 functional connections. Its physics
review contains 53 study contexts and 59 comparisons. The artifact binds 90
input files; all bound hashes and 66 local source hashes match current bytes.

- The focused physics, deuteron and conditional mass-constraint suite passes
  all 66 tests, including eight tests for the conditional mass constraints.
- `npm test` passes all 1937 tests, with no failures or skipped tests.
- `npm run build` passes, including exact canonical reproduction, Structural
  Geometry checks, the registry, 217 versioned schemas, kernel contracts,
  documentation and the preserved catalogue audit.
- Artifact compilation and registration pass. The registry has 21 entries;
  Model Studio uses module revision `20260923.7` and the current graph.
- Browser verification covers all 21 added records, 50 added connections,
  112 physics review entries and 10 experimental-reanalysis labels. Five JSON
  downloads match their source data. Desktop and mobile views at 1500 by 1100
  and 390 by 844 pixels pass with no runtime errors or horizontal overflow;
  all four screenshots were visually inspected.
- Only the current canonical output and the original `2026.08.15` catalogue
  remain. The Formal Core document and original research inputs are unchanged.

The full tests and build also pass under `LC_ALL=C`, `LANG=C` and
`PYTHONCOERCECLOCALE=0`, with the CI settings `PYTHONUTF8=1` and
`PYTHONIOENCODING=utf-8`. Unicode pipe and source-reader controls pass.
This validation ran locally on macOS with Node.js 24.19.0 and Python 3.9.6;
the updated Windows CI jobs still require a run after push.

Current artifact hashes:

```text
rootHash: sha256:eef545115faac8a357e2091065bd2fbdcc3e844be9edb1b23202c7f28c1c3a19
manifestHash: sha256:f3dffbc683032aac24bb33d35281a92423470d58b3b5b53f63b641d7c25802d9
registryHash: sha256:36167084c78be0965122bd3fda7c3113cf7221d60659cbabf54f66100cb9d677
```

Scientific review remains partial: 197 [source cards](../../../references/canonical/pending-review.json)
are unfinished. Printed mass arithmetic is reproduced for three conditional
state branches; raw acquisition, state probabilities, original uncertainty
propagation and the complete CODATA adjustment are not reproduced. The E13
lattice-input identity remains unresolved. These local checks do not establish
whole-graph scientific validity. Formal Core implementation remains deferred.
