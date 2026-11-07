# MetricProvider examples and compatibility suite

SG2-005 adds five explicit provider families above the existing source/metric
contracts. This suite checks **seven frozen small examples** over one synthetic
control. It measures compatibility with the earlier unit and experiment analyses
and computational behavior; it does not promote a metric hypothesis.

```sh
npm run structural-geometry:providers:check
npm run structural-geometry:providers:report
```

The check replays the frozen suite and examples, tests source/context binding,
capability rejection, positive rational lengths, typed selections, resource
bounds, schemas, browser and engine behavior. The combined geometry check
includes it. Check/report modes never change output. Deliberate regeneration is
`npm run structural-geometry:providers:build`; review its diff before acceptance.

## Reading the examples

The existing synthetic `typed-diamond` graph has four vertices and four arcs.
Its parent weights at `d` are 0.25 and 0.75. Other source weights are one.
Necessities are necessary, enabling, contextual and optional respectively;
roles and overlapping channel codes are explicitly declared control data.
The example uses an empty dictionary, as the original control does: numeric
codes express selected memberships, not externally reviewed domain meanings.

| Artifact | What it supplies |
|---|---|
| [unit](artifacts/unit.json) | Every vertex/edge weight and edge length is exactly 1 |
| [inverse-share](artifacts/inverse-share.json) | Lengths into `d` are exactly 4 and 4/3; the full incoming source population determines the denominator |
| [necessity](artifacts/necessity.json) | Four nested edge sets of sizes 1,2,3,4; every source vertex remains |
| [roles](artifacts/roles.json) | The arising/modulation subset and complete selected/excluded accounting |
| [channels](artifacts/channels.json) | Two overlapping interaction-code views; an arc may appear in both |
| [unit analysis](artifacts/unit-analysis.json) | Unit provider identity plus the unmodified legacy integer Forman artifact |
| [weighted contextual analysis](artifacts/weighted-contextual-analysis.json) | Weighted provider plus the declared necessity stage and unmodified interval Forman artifact |

The weighted contextual analysis excludes the optional `c->d` edge, yet `b->d`
keeps length 4: the denominator still includes both full-source incoming
weights. Selecting a subgraph does not silently renormalize contributions.
Necessity, role and channel artifacts supply **no lengths**; a numeric consumer
must request a separate compatible metric.

## Public usage

```js
import {
  createStructuralMetricContext,
  createStructuralMetricProvider,
  requireStructuralMetricValues,
  analyzeStructuralGeometryWithProvider,
  verifyStructuralProviderAnalysis
} from "@onto2d/structural-geometry/providers";

const context = createStructuralMetricContext(pack);
const provider = createStructuralMetricProvider("inverse-target-share-v1");
const artifact = provider.build(context.projection, context);
const metric = requireStructuralMetricValues(artifact, pack, {
  providerId: "inverse-target-share-v1"
});
console.log(metric.edges);

const request = {
  analysis: "structural-metric-experiment",
  metricProviderId: "inverse-target-share-v1",
  selection: { kind: "necessity", through: "contextual" }
};
const result = analyzeStructuralGeometryWithProvider(pack, request);
const checked = verifyStructuralProviderAnalysis(result, pack, request);
console.log(checked.legacyArtifact.result.summary);
```

`pack` is a complete verified-source Model Pack. A context snapshots it and
binds its projection and model-local dictionaries; copying a context object
does not copy its authority. Recreate contexts from the expected source when
loading stored results. See the [full contract](../../../docs/structural-geometry/GEOMETRY.md#compatible-metric-providers)
for capabilities, numeric interpretation and limits.

## Suite index

[suite.json](suite.json) binds the metric context of the `typed-diamond` example
source and the request and artifact hash of each of the seven examples. The two
analysis envelopes wrap the unmodified unit integer Forman artifact and the
interval experiment artifact; the package tests check that both equal direct
legacy calls on every [experiment control](../experiments/controls.json). The
independent Python incidence and Decimal/Fraction references remain the
arithmetic references for these values. No new optimization algorithm or
external runtime dependency is introduced. The suite contains synthetic
controls only.

Suite hash: `sha256:941b6a4eccd6af309e0fb229718124a9c1651f66d121d725ebaaa4085514d244`.
The case index uses `onto2d:structural-provider-suite:v1`. Individual outputs
have their own provider/envelope hashes and existing legacy identities.
Existing Ollivier and both flow suites remain separate, unchanged regression
gates; this API does not replace their distance or initialization policies.
