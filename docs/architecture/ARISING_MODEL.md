# Arising model of the canonical graph

Status:

- **Structure: implemented.** The canonical release `2026.11.08.0` carries the
  arising layer, its organization into clusters and domains, and the technical
  subgraphs.
- **Evidence review of the causes: in progress.** 441 of 1085 causes are
  supported by primary studies. The Level-0 causes await formal review.

## Purpose

The canonical graph records the ontology of the real world as a network of
arisings. It follows the Theory of Causal Arisings:

- The world is composed of interactions that result from prior interactions.
- There is no final layer of irreducible elements.
- Every object, process, pattern, property or effect exists as the product of
  configurations of causal relations that formed before it.

Each arising is one ontological node. It is described through three things:

- its parent arisings;
- the directions of causation that connect them;
- the interaction modes through which those relations operate.

Formulas, laws and models are local expressions of admissibility, tied to
specific configurations. They belong inside arisings, not above them.

The graph plays the role of the opening of a periodic table. General rules fix
the structure, and known evidence fills it. Cells that the rules require but the
evidence has not yet filled stay visible as predictions.

### The basic rule

The author's hypothesis is that all complexity formed by itself. If it did, the
basic rule is extremely simple: something arises through the interaction of
something, and such arisings form a complex system.

- **Level 0** is an abstraction of this rule under the poorest conditions. In
  something homogeneous and fully uniform, something arises that is no longer
  homogeneous with the original. This first inhomogeneity makes all further
  arising possible.
- **Higher levels** apply the same rule to what has already arisen.
- **Ω** (cell 0.15), the admissibility proto-field, is the root of the graph but
  not an uncaused arising. Its own cause lies in another dimension, which this
  graph cannot measure or determine and which may require an entirely different
  logic.

The graph can show that every arising is described in this one form: parent
arisings, causal directions and interaction modes. It cannot show by itself that
the rule generates the complexity. That requires a model of Level 0 that derives
the first inhomogeneity from homogeneity. Level-0 causes are therefore checked
formally, against such a model, rather than empirically.

## Two layers

| Layer | Contents | Default view |
|---|---|---|
| Ontological | Arising nodes and cause edges | Shown |
| Technical | Definitions, preparations, observations, measurements, models, hypotheses, claims, sources and their relations | Opened from an arising or a cause |

Every technical record belongs to the subgraph of exactly one arising, on that
arising's level. The subgraph records what the arising is and how it is known.
A record that several subgraphs use belongs to one of them, and the others
reference it. A predicted arising may have an empty subgraph until its evidence
is added; it then carries that obligation. Evidence for a cause is cited from the
cause through its `claimIds` and `evidence` fields.

Technical relations, including the reviewed
[bridges](../../references/canonical/BRIDGES.md), never join two arisings
directly. Where they apply, they become evidence of a cause.

## Vocabulary: the rules of the table

The vocabulary is the author's SOMA dictionary, stored as one author source
(`references/canonical/arising-vocabulary.json`). Every arising and cause field
refers to it.

| Dimension | Values |
|---|---|
| Complexity level | 0 Proto field, 1 Quantum, 2 Atomic, 3 Biochemical, 4 Cellular, 5 Multicellular, 6 Behavioral, 7 Social, 8 Technological, 9 Planetary, 10 Civilizational, 11 Spacefaring infrastructure, 12 Cosmic, 13 Upper speculative |
| Level phase | A Differentiation, B Integration, C Self-organization, D Threshold transition |
| Type role | Process, Object, Pattern, Property, Effect |
| Causal direction | Upward, Downward, Horizontal, Diagonal, Decoupled, Metacausation |
| Interaction mode | Cooperation, Constraint, Feedback, Initiation, Realization |
| Dependency type | Substrate, Boundary, Template, Catalyst, Regulation, Gradient, Compartment, Information, Selection, Resource, Constraint, Transport, Environment |
| Necessity | Necessary, Enabling, Contextual, Optional |
| Ontological role | Arising, Maintenance, Modulation |
| Carrier | Six carrier groups, each allowed on certain levels, and fourteen carrier types, each in one group |
| Discipline | The author's list of ontological disciplines |

Levels 8-13 are rows of the table without arisings yet.

## The catalogue

The catalogue (`references/canonical/arising-catalogue.json`) is the editable
source of the outer layer. It holds the current state only; the repository
history keeps how it changed. It contains:

- **Arisings**: one card per arising, with its cell, type role, status,
  requirements, cluster and parent relations.
- **The root**: Ω, with the statement that its own cause lies beyond the graph.
- **Principles**: the Level-0 basic rule.
- **Co-arising loops**: arisings that condition one another's arising. None is
  declared at present, because no arising cycle exists.
- **Clusters and domains**: the organization described below.

`node models/causal-emergence/canonical/sync-arisings.mjs` mirrors the catalogue
into `references/canonical/graph.json`. The script keeps two things the catalogue
cannot hold: each arising's technical subgraph, and each cause's evidence state.
A test checks that the graph mirrors the catalogue exactly.

## Organization: clusters and domains

Levels and phases remain the axes of the table. Inside them:

- A **cluster** is a family of arisings on one level that condition one another.
  An example is the strong-interaction family on Level 1.
- A **domain** is a band of clusters on adjacent levels that one lineage of
  arising causes runs through. Each domain states its membership criteria.

A new arising joins the domain whose criteria it meets. If two domains fit, it
joins the one that holds most of its arising causes.

| Domain | Levels | Clusters | Arisings |
|---|---|---:|---:|
| Admissibility lineage | 0-1 | 5 | 28 |
| Fields, particles and physical matter | 1-2 | 7 | 44 |
| Molecular organization and cell machinery | 2-4 | 14 | 75 |
| Signalling, development and organismal coordination | 4-5 | 5 | 27 |
| Homeostasis, defence and repair | 4-6 | 7 | 34 |
| Behaviour, cognition and society | 6-7 | 11 | 51 |

The organization follows the causes:

- **Clusters.** They keep 247 of the 449 same-level arising causes together.
  Clusters of the same sizes drawn at random keep about 74.
- **Domains.** They keep 592 of the 666 arising causes inside one lineage,
  whereas levels alone keep 449.

## Arising record

| Field | Meaning |
|---|---|
| `id`, `code` | Stable identifier and the cell code `level.index` |
| `name`, `summary`, `description` | What arises |
| `level`, `phase`, `typeRole` | Position in the table |
| `cluster`, `domain` | Its family on the level and its lineage across levels |
| `disciplines` | Fields that study it |
| `status` | The author's scientific status: established, well-supported, hypothesized, speculative or methodological placeholder |
| `evidenceCoverage` | What its subgraph holds: published findings, formal or computational records, author definitions only, or nothing yet |
| `requirements` | Dependency types the arising must, should or may have covered |
| `anchorIds`, `memberIds` | Its technical subgraph: the reviewed topic records, and every record that belongs to it in canonical order |
| `sourceCoordinates`, `claimIds` | The catalogue entry and the evidence claims about the arising |
| `openObligations` | What remains to be shown |

The scientific status and the evidence coverage are kept apart. The status is
the author's assessment from the catalogue. The coverage is computed from the
claims in the subgraph, and the validator recomputes it. Three kinds of arising
carry an obligation:

- An established or well-supported arising whose subgraph holds no published
  findings yet states that its status rests on the catalogue alone.
- A methodological placeholder carries the obligation to specify the observable
  or formal test that would instantiate it.
- An arising without records carries the obligation to add its evidence.

## Cause record

| Field | Meaning |
|---|---|
| `id`, `parent`, `child` | The parent arising and the arising it conditions |
| `causalDirections`, `interactionModes` | How the parent acts |
| `dependencyType`, `necessity`, `ontologicalRole` | The kind of dependency; how essential it is; whether it concerns the arising, its maintenance or its modulation |
| `carrier`, `weight` | Carrier group and type. The counts `nMin`, `nCrit`, `nSat` and the `weight` stay null until quantitatively supported |
| `status` | Supported, model-supported or author hypothesis |
| `claimIds`, `evidence` | Evidence claims, preparations and technical relations, including bridges |
| `openObligations` | What remains to be shown |

The theory defines the three ontological roles counterfactually, so each role
carries its own obligation:

| Role | The cause must show that the child... |
|---|---|
| Arising | does not first form without the parent |
| Maintenance | once formed, does not persist without the parent |
| Modulation | has its operating regime changed by the parent, which is required for neither its formation nor its persistence |

Role and necessity are independent, as the theory states (Section 7.4): the
role says which part of the child's life the cause concerns, and necessity how
essential the cause is in the description. A modulation cause can therefore be
necessary, and an arising cause merely enabling.

Each status requires its own evidence:

- **Supported.** The cause cites published evidence that the parent conditions
  the child in the stated role. An example is a preparation in which the child
  does not form, or changes, without the parent.
- **Model-supported.** The cause cites a specified model that derives the
  dependency.
- **Author hypothesis.** The cause is the catalogue's proposal and carries an
  explicit obligation.

A cause that evidence contradicts leaves the ontology.

### Cause evidence

The evidence for causes has its own ledger,
`references/canonical/cause-evidence-review.json`. Its studies are primary
experiments or observations. Each study records:

- the publication;
- the system, preparation, observable and finding;
- the passages read and the limits.

A cause-evidence claim, with id `CE-<parent>-<child>-<slug>`, belongs to exactly
one cause, and no other record cites it. Its scope begins with that cause and
its role, for example `Cause 2.2 > 2.3 (arising):`, and it states what the
evidence does not establish. A claim is one of two kinds:

- **Published.** It names its study contexts: studies of this ledger, or reviewed
  studies of a domain ledger. It cites each context's own reviewed passage. A
  claim that rests on one study is publication-supported; a claim that combines
  several studies is a literature synthesis.
- **Model.** It is a method contract that cites its method publication, or a
  derivation checked by bound executable code.

A supported cause cites at least one published claim, a model-supported cause
at least one model claim, and an author hypothesis none. The `evidence` field of
a cause names only the study contexts of its own claims and technical relations
that join the parent's subgraph to the child's.

[cause-evidence.mjs](../../models/causal-emergence/canonical/cause-evidence.mjs)
admits exactly this. It does not replicate the cited preparations or turn them
into universal laws.

## Invariants

1. **One root.** The proto-field of admissibility (Ω, cell 0.15) is the only
   arising without a cause inside the graph. The catalogue states that its own
   cause lies beyond the graph, so its dependency requirements point there
   rather than to open cause slots. Level-1 arisings whose physical cause is not
   established receive their Level-0 cause as an explicit hypothesis
   (metacausation).
2. **Arising cause.** Every other arising has at least one cause whose role is
   arising.
3. **Dependency coverage.** Each mandatory dependency type is covered by a cause
   or shown as an open cause slot.
4. **No unexplained loops.** An arising is not its own arising ancestor, unless
   the loop is a declared co-arising loop. Every member of a declared loop keeps
   an arising cause from outside the loop.
5. **Causes join arisings only.** A cause joins two distinct arisings. Every
   technical record has exactly one home arising on its own level, and every
   anchor lies in its arising's subgraph.
6. **Level order.** Across levels, a cause's direction agrees with the level
   order: a cause from a lower level is not Downward, a cause from a higher
   level is not Upward, and neither is Horizontal. Within a level, the author's
   finer descriptive levels apply.
7. **Carriers.** A carrier group is allowed at one of the cause's levels, and the
   carrier type belongs to its group.
8. **Evidence rules.** Statuses follow the rules above. No weight, carrier count
   or status is promoted without the stated evidence.
9. **The catalogue governs.** Arisings, causes and the organization mirror the
   catalogue.

`validateArisingModel` in
[arisings.mjs](../../models/causal-emergence/canonical/arisings.mjs) rejects any
violation unless `PENDING_ARISING_QUESTIONS` lists it as an open question. No
question is open at present. A listed question that the data no longer needs is
also rejected, so the list cannot go stale.

## Current contents

- **Arisings.** 259 arisings on levels 0-7:

  | Level | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  |---|---:|---:|---:|---:|---:|---:|---:|---:|
  | Arisings | 25 | 37 | 26 | 48 | 35 | 34 | 28 | 26 |

- **Author statuses.** 173 established, 49 well-supported, 10 hypothesized,
  2 speculative and 25 methodological placeholders. The placeholders are the
  Level-0 cells.
- **Evidence coverage.** In the subgraphs:
  - 212 hold published findings;
  - 39 hold formal or computational records;
  - 3 hold author definitions only;
  - 5 have no records yet: 0.24, 2.23, 2.24, 2.25 and 3.51.
- **Causes.** 1085 causes: 666 arising, 109 maintenance and 310
  modulation causes.
- **Evidence.** 441 causes are supported, each through a cause-evidence claim
  resting on a primary study. The cause evidence ledger holds 243 studies of its
  own, and further claims cite reviewed studies of the domain ledgers. 151 of the
  259 arisings have at least one supported arising cause.

  | Level of the child | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  |---|---:|---:|---:|---:|---:|---:|---:|
  | Supported causes | 21 | 28 | 78 | 119 | 88 | 67 | 40 |

  The other 644 causes remain author hypotheses with their obligations.
- **Technical layer.** 2537 records, with their claims, sources and relations.

### Gaps

| Gap | Extent | Treatment |
|---|---|---|
| Mandatory dependency type without a covering cause | 103 slots in 88 arisings | Open cause slot |
| Established or well-supported arising whose subgraph holds no published findings | 18 arisings | Obligation on the arising |
| Arising without records | 5 arisings | Obligation on the arising |
| Cause without published evidence for its role | 644 causes | Author hypothesis with obligation |
| Weights and carrier counts without quantitative support | 1085 causes | Null with obligation |

The 18 arisings are:

- **Level 1.** 1.0, 1.6, 1.8, 1.9, 1.22, 1.26, 1.27, 1.28.
- **Level 2.** 2.23, 2.24, 2.25.
- **Level 3.** 3.10, 3.16, 3.21, 3.35, 3.51.
- **Level 4.** 4.12.
- **Level 7.** 7.24.

## Views

- **Model Studio.** The workbench opens on the arising layer:
  - The arising table shows levels by phases.
  - Each arising carries its domain colour and is ordered by cluster.
  - The domain legend dims the other domains.
  - The navigator lists arisings; a search also finds technical records.
  - Selecting an arising shows its cell, status, domain and cluster, evidence
    coverage, open cause slots, causes and dependents, technical subgraph and
    obligations.
  - Selecting a technical record links back to the arising it belongs to.
- **Structural Geometry.** Its primary census runs on the arising layer
  (`canonical-arising-causal-v1`). The census of the technical layer
  (`canonical-technical-directed-v1`) is a secondary analysis; see the
  [results](../../cases/structural-geometry/RESULTS.md).

## Phases

1. **Structure (done).** Vocabulary, catalogue, arising and cause records,
   subgraph membership, organization, validator, release, Studio view and the
   arising-layer census.
2. **Evidence.** Review every cause level by level and set its status:
   - causes above Level 0 need published evidence for the stated role;
   - Level-0 causes need a formal derivation in a Level-0 model.
3. **Filling.** New arisings and causes from evidence, including predicted cells
   and levels 8-13.
