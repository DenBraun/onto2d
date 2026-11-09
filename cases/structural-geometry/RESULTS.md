# Causal Emergence: descriptive geometry of the canonical graph

Source: complete verified `causal-emergence@2026.11.08.0`, the canonical graph,
pinned by [source-lock.json](causal-emergence/source-lock.json).
The release has two layers ([arising model](../../docs/architecture/ARISING_MODEL.md)).
The outer layer holds the arisings of the author's catalogue, joined by their
causes. The technical layer holds the evidence records, and each of them belongs
to exactly one arising. The census measures each layer with its own projection.
No projected edge crosses from one layer to the other.

Metric: `unit-v1`; algorithm: `forman-directed-unit`, version `1`, for both layers.

## Arising layer

Projection: `canonical-arising-causal-v1`. Nodes are arisings, and each edge is
a cause, directed from the cause to the arising it conditions.

| Quantity | Frozen result |
|---|---:|
| Nodes | 259 |
| Edges | 1085 |
| Negative-curvature edges | 1055 |
| Zero-curvature edges | 26 |
| Positive-curvature edges | 4 |
| Minimum | -38 |
| Maximum | 1 |
| Exact mean | -7812 / 1085 |

The [artifact](causal-emergence/artifact.json) has hash
`sha256:c78430ed4a222a2fcac1c14abd7b9eba8e3ed27a6236c786becfc05746853c22`.
It includes:

- every edge and node value;
- summaries by dependency type, necessity, ontological role, source level and
  target level;
- all extrema ties.

No edge was sampled or filtered out.

Of the 1085 causes, 441 are supported by primary studies, and the rest remain
author hypotheses. The census weighs every cause alike. It therefore describes the
shape of the proposed causal structure, not its support.

### Reading an edge

For `u -> v`, start with 2. Subtract the number of edges entering `u` and the
number of edges leaving `v`. The result reports both counts alongside
`curvature`. A negative value says that their sum exceeds 2 under this metric.
It does not establish weakness, causal importance or emergence.
This is the unit specialization of the directed definition documented in the
[metric policy](../../docs/structural-geometry/GEOMETRY.md#metric-and-algorithm-policies).

A node's `incomingCurvature` and `outgoingCurvature` sum the values of its
incident edges. Its `balance` is incoming minus outgoing, with no physical flow
interpretation.

For example, the cause `cause:4.0>4.3` has the minimum value -38. It runs from
Prokaryotic Cell Organization to Cellular Signaling and Communication. Eleven
causes enter its source, and 29 causes leave its target.

### What the census shows

| Ontological role | Causes | Curvature sum | Minimum | Maximum |
|---|---:|---:|---:|---:|
| `arising` | 666 | -4571 | -31 | 1 |
| `maintenance` | 109 | -921 | -38 | 0 |
| `modulation` | 310 | -2320 | -26 | 0 |

| Necessity | Causes | Curvature sum |
|---|---:|---:|
| `necessary` | 604 | -4146 |
| `enabling` | 317 | -2355 |
| `contextual` | 150 | -1216 |
| `optional` | 14 | -95 |

Causes leaving Level 4 sum to -1855 over 202 causes, and causes leaving Level 3
sum to -1641 over 210. Causes leaving Level 1 sum to only -302 over 106. Two kinds
of arising stand out:

- **Hubs.** Cellular Signaling and Communication (4.3) has the largest balance,
  +98: it has 4 causes and 29 dependents. Next are Chemical Bonding and Molecular
  Formation (2.3, +96) and Hydrogen Bonds (2.7, +82).
- **Sinks.** Neuro–Immune Interactions (6.15) has the smallest balance, -63: it
  has 13 causes and 2 dependents. Next are Immune Resilience vs Immune Constraint
  Trade-off (5.25, -44) and Emotional and Affective Processing (6.6, -42).

These values describe how the catalogue distributes causes. They are not causal
or empirical findings.

## Technical layer

Projection: `canonical-technical-directed-v1`. Nodes are the technical records.
Edges are their descriptive and functional-support relations, directed from
premise to dependent.

| Quantity | Frozen result |
|---|---:|
| Nodes | 2537 |
| Edges | 3683 |
| Negative-curvature edges | 836 |
| Zero-curvature edges | 891 |
| Positive-curvature edges | 1956 |
| Minimum | -17 |
| Maximum | 2 |
| Exact mean | 920 / 3683 |

The [technical artifact](causal-emergence/technical-artifact.json) has hash
`sha256:a5f255722b55acb2b51b11247b4107cc58c297c52cd0b8cccca1faeb580ab66f`.
It includes:

- every edge and node value;
- summaries by source level, target level, relation layer and relation role;
- all extrema ties.

For example, the definition edge `physics:standard-model-qcd`
(`phys:standard-model -> phys:qcd`) has the minimum value -17. One edge enters
its source, and 18 edges leave its target. Its result can be traced through its
edge ID and the projection's source record hash to the exact Model Pack.

| Relation role | Edges | Curvature sum | Minimum | Maximum |
|---|---:|---:|---:|---:|
| `interpretation-dependency` | 1429 | -141 | -9 | 2 |
| `definition-dependency` | 1289 | 813 | -17 | 2 |
| `measurement-context` | 605 | 226 | -6 | 2 |
| `scoped-operating-support` (functional) | 305 | 32 | -4 | 1 |
| `computation-context` | 30 | 16 | -1 | 2 |
| `rule-premise` | 19 | -10 | -3 | 1 |
| `rule-conclusion` | 6 | -16 | -7 | -1 |

Edges leaving Level 1 sum to -646 over 1063 edges. Edges leaving Level 6 sum to
+1298 over 890 edges. The difference follows how the evidence is built:

- **Level 1.** Physical definitions form chains through hubs with many
  dependents. The smallest balances belong to physical boundary definitions such
  as `phys:qcd-nuclear-evidence-boundary` (-26).
- **Level 6.** Topic scopes collect many evidence records and have no outgoing
  edges. They hold the largest balances, for example
  `cog:adult-neurogenesis-remodeling-scope` (+325, 181 incoming edges).

These are descriptive properties of how the graph records evidence. They are not
causal or empirical findings.

The census includes the 194 [reviewed bridges](../../references/canonical/BRIDGES.md)
that join the evidence islands:

- 69 are positively curved, 63 zero and 62 negative, with sum -66.
- The most negative, -12, joins a condensate boundary to the model-vesicle
  readout boundary. The condensate boundary has one incoming edge, and the
  readout boundary has 13 dependents.

The [Ollivier](ollivier/README.md) and [flow](flow/README.md) suites measure
induced fragments of the technical layer.

## Local inspection

1. Run `npm ci --ignore-scripts` after pulling the changes.
2. Run `npm run structural-geometry:check`. The focused tests and frozen
   reference checks should pass. Python 3 is required for the reference checks.
3. Run `npm run structural-geometry:report` to verify and inspect both censuses.
4. Open a JSON artifact to read a specific edge or grouped summary. The
   [package API](../../packages/structural-geometry/README.md) supports direct
   analysis, explicit engine registration and verification against a source pack.

The existing web pages do not run this analysis on page load. Visualization,
alternative metrics and scientific comparison follow the
[subsequent roadmap gates](../../docs/structural-geometry/README.md).
