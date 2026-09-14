# Current canonical validation

Current graph: `2026.09.14.31`, checked on 14 September 2026.
The [manifest](../releases/2026.09.14.31/manifest.json) binds 83 source and
implementation files: 826 records, 356 connections, 749 claims and 294 sources.
Connections comprise 176 descriptive dependencies and 180 functional relations
with declared experimental scope.

```text
rootHash: sha256:eaf1367fa046ad27a33023c466dd4814a92485831693468b91dba0b72720edd7
manifestHash: sha256:088a5709b7319f8060f17d380504b22a7d3745cce1d24e332c4548a22737edea
```

| Check | Result |
| --- | --- |
| Physics contracts | All 33 tests passed |
| Full workspace tests | All 1904 tests passed, with no failures or skipped tests |
| Repository build | All checks passed, including structural geometry, schemas, kernel closure, documentation and catalogue audit |
| Canonical output | Exact reproduction and pinned hashes verified; 21 registry entries |
| Public interface | Studio module revision 20260914.33 and 21 aligned dependencies verified; CSS revision 20260913.1 |
| Browser | 22 neutron records and their connections checked at desktop and mobile widths; all 47 physics entries present; five JSON downloads match current data; four screenshots inspected; no runtime exceptions or horizontal overflow |
| Research inputs | All 61 local source hashes match; the supplied Formal Core document is unchanged |

Software checks and source hashes do not establish whole-graph scientific
validity. Neutron lifetimes remain published inferences conditional on storage
losses, detector corrections and shared-data uncertainty. Raw acquisition,
covariance and the full systematic budget have not been independently
reproduced; the published mean detector-uniformity correction is unresolved.

There are 197 unfinished [source cards](../../../references/canonical/pending-review.json).
The [roadmap](../../../docs/ROADMAP.md) identifies current work. Formal Core
implementation remains deferred.
