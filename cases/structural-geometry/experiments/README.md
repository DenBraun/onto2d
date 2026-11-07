# Stage 3: typed and local-weight experiment controls

Status: reproducible synthetic controls; no default metric promotion.

[controls.json](controls.json) declares five small graphs for the typed
selections and the optional `inverse-target-share-v1` metric. Their edges,
weights and typed fields are constructed controls, not observations:

| Control | Purpose |
|---|---|
| `typed-diamond` | Four nested necessity stages, overlapping role and channel memberships, and incoming weights 0.25/0.75 at `d` |
| `rational-root` | Exact perfect-square length ratios and an exact zero curvature |
| `irrational-feedback` | A directed cycle with irrational length ratios, so bounds remain intervals |
| `non-unit-sums` | Incoming source weights that do not sum to one |
| `isolated` | A single vertex with no edges |

The [Python reference](reference.py) uses Fraction arithmetic and Decimal square
roots at 100 digits; [expected.json](expected.json) freezes its outward bounds
for the weighted metric on every control. The JavaScript runtime uses BigInt
integer square roots. The package tests compare both implementations across
filtered selections, both metrics and Unicode identifiers, and separately
check weight audits, invalid weights and unresolved signs.
These are separate implementations in the repository, not independent review.
The suite contains synthetic controls only; no real-source experiment is frozen.

```sh
npm run structural-geometry:experiments:check
```

The check verifies the frozen reference controls and runs the focused API,
schema and browser-bundle tests. It is read-only. To regenerate the reference
controls deliberately, run
`python3 cases/structural-geometry/experiments/reference.py --write` and inspect
the resulting diff.

## Precision

Curvature values are intervals in integer ticks, where one tick is 10^-12.
`lowerTicks`/`upperTicks` are decimal strings. An interval touching zero is not
declared positive or negative unless its entire range permits that conclusion;
exact [0,0] is distinguished from unresolved sign. They are computational bounds
under the declared metric, not confidence intervals or measured precision.
The inverse-share hypothesis normalizes over the full incoming source
population, not over each filtered selection. Unit remains the default.

Read the [experiment contract](../../../docs/structural-geometry/GEOMETRY.md#typed-filtration-and-local-weight-experiments)
for selection, normalization, arithmetic, identity and resource limits.
