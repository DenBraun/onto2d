# Shadow geometry flow reference cases

Status: bounded computational agreement and published synthetic reproduction.
The [flow contract](../../../docs/structural-geometry/SHADOW_FLOW.md) fixes the
metric, transport, update, normalization, stopping and final-cut interpretation.

```sh
npm run structural-geometry:flow:check
npm run structural-geometry:flow:report
```

Both commands are read-only. They rerun the packaged Python reference, verify
the exact artifact bytes against the source, and compare every state with frozen
independent NetworkX output. The check also runs the published analytical
recurrence and behavioral/schema/browser tests. Python 3.9+ standard library is
sufficient. No web server is needed for this backend stage.

## Cases and results

[fixtures.mjs](fixtures.mjs) constructs nine synthetic controls and reuses two
locked source fragments from the [Ollivier suite](../ollivier/README.md).
[suite.json](suite.json) indexes all 11 artifacts, their identities, final
summaries and stopping records: 66 states and 1233 exact edge calculations.

| Control | Expected behavior |
|---|---|
| Single edge; diamond; reciprocal clique | Exact fixed normalized geometry |
| Directed path; asymmetric neighborhood | Nonuniform length evolution |
| Directed feedback triangle, full step, zero idleness | Stop before zero lengths |
| Unequal reciprocal pair, full step, zero idleness | Exact period-two cycle |
| Initial long shortcut plus isolate | Metric closure shortens the shortcut; isolate remains |
| Published `G(3,2)` | Analytical recurrence and three recovered four-node groups |

The published fixture follows [Ni et al. (2019), Appendix E](https://arxiv.org/html/1907.03993v1).
There are three complete four-node groups, each with one gateway; all gateways
are connected. Each undirected edge becomes two reciprocal arcs. At zero
idleness, uniform measures and full step, three edge classes have raw updates:

```text
inter-gateway:      D1 = (2/5) d1 + (6/5) d2
gateway-internal:   D2 = (2/5) d1 + (1/15) d2 + (1/5) d3
internal-internal:  D3 = d3 / 3
normalization:     (D1,D2,D3) * 42 / (6 D1 + 18 D2 + 18 D3)
```

[paper_reference.py](paper_reference.py) checks this recurrence independently
using only `Fraction`, including exact transport costs and curvatures. Its 714
edge checks pass. After 16 transformations, lengths are approximately 2.960073,
1.346642 and 0.000000096536 respectively. Removing the six arcs strictly longer
than 2 recovers the three known groups. The stored reason is `iteration-limit`.

The source examples run half steps at half idleness, starting at unit length
and applying no cut. The definition fragment runs six steps. The rule fragment
runs four, the largest count within the policy's exact rational digit bound; a
fifth step exceeds it:

| Induced Causal Emergence fragment | Nodes / edges / boundary edges | Longest final links |
|---|---|---|
| Level-0 definitions | 28 / 22 / 40 | `description:sequential-axis-quadratic-action`, `description:spatial-axis-quadratic-action`, length about 1.586064 |
| Level-0 definitions with rules | 34 / 47 / 15 | `l0:triad-configuration->R-object` and `l0:ensemble-action->R-ensemble`, lengths about 1.421635 and 1.421299 |

Their average length remains exactly one; both end at their iteration limit.
In the rule fragment the shortest final links are
`description:oscillatory-mode-closure-parameter` (about 0.415615) and
`l0:closure-parameter->R-mode` (about 0.419155), on the fragment's only directed
cycle (`l0:closure-parameter -> R-mode -> l0:oscillatory-mode ->
l0:closure-parameter`), followed by `l0:hyperbolic-frame->R-mode` (about 0.471449).
In the definition fragment they are the isolated
`description:ensemble-synchronization` (about 0.166449) and the compensation
shortcut `bridge:oscillatory-mode-discrete-scale` (about 0.337143).
These rankings describe relative separation under the selected transformation.
They do not establish causal importance, full-model geometry or true communities.
The source Model Pack remains unchanged.

## Independent execution and regeneration

[networkx_reference.py](networkx_reference.py) reconstructs distributions,
weighted directed Dijkstra distances and transport costs at every iteration,
then independently applies closure, normalization, stopping and final cuts.
Network simplex receives integer demands and integer-scaled rational costs,
avoiding floating-point optimization. It imports no runtime geometry or oracle
code. [networkx-expected.json](networkx-expected.json) records exact results,
NetworkX version and the network-simplex source SHA-256.

```sh
python3 -m venv /tmp/onto2d-flow-reference
/tmp/onto2d-flow-reference/bin/python -m pip install -r cases/structural-geometry/flow/requirements-reference.txt
/tmp/onto2d-flow-reference/bin/python -B cases/structural-geometry/flow/networkx_reference.py --verify
```

On Windows use the environment's `Scripts/python.exe`. CI reruns the pinned
NetworkX reference as well as ordinary source/certificate replay. The reference
dependency is not added to the JavaScript runtime or bundled Python solver.

Deliberate regeneration is `npm run structural-geometry:flow:build`, followed by
the independent command with `--write`. The independent writer checks runtime
agreement and the published recurrence before replacing its expected file.
Then run the check and review the diff. Neither command rewrites source locks.

Suite hash:
`sha256:90b7488424df6d0ee08001b4381cc145db217e2bb9c8403d5a33e4df8eae2782`.
