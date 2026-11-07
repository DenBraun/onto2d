# Source policy

The editable canonical graph lives in `references/canonical/graph.json`.
It stores the current scientific model, with one current derived output.

Admit a node as a scoped observation, experimental context, definition or
explicit hypothesis. Cite the actual publication or supplied manuscript and
only passages that have been reviewed. A review or formal model does not become
primary experimental evidence. Computational studies declare their model,
sampling, observables and inference limits; their contexts have the model role.
Unread sources and unresolved identities cannot
silently supply support.

A local analytical result identifies its executable source, exact inputs and
owned check. Its computational study has no invented journal metadata, and
`analytically-checked` certifies only the declared calculation. Replaying
rounded published values does not reproduce their acquisition or inference.
Descriptive input links preserve that distinction in the graph.

An empirical relation requires a named preparation, compatible endpoints and
the measured effect. Preserve intervention direction, species, stimulus,
observable and outcome selection. Correlations, null findings and theoretical
interpretations do not acquire causal edges. Descriptive relations explain
definitions and measurement boundaries.

Construction rules specify joint inputs and gates. A specification does not
prove that an instance exists, that a minimum is universal or that a quotient
graph supplies valid new dynamics. Competing constructions need discriminating
tests. The Level-0 manuscript analysis and existing case results remain bounded
by their stated assumptions.

Canonical record claims retain citation and preparation IDs. Complete publication
and study records are stored once in the verified release dictionaries. The full
inspector resolves these references from that release; lazy detail chunks carry
the same complete evidence as a shared chunk context. Raw record JSON remains
exact. Missing references fail instead of borrowing a different preparation.

Store publications, evidence limits and current test obligations with the data.
Do not store canonical migration tables, editing chronologies, intermediate
releases or full snapshots of previous source states. Preserve supplied
manuscripts and actual experimental inputs used by research cases.

Missing raw data and unresolved source conflicts remain explicit limits of the
affected claims.

A speculative assertion can receive an explicit unresolved disposition when
the missing observations, competing interpretations and withheld conclusions
are recorded. This completes its scope assessment while leaving the scientific
question open. A reviewed topic definition can organize positive findings,
nulls and hypotheses through descriptive links. Such a link is admitted only
as the exact reviewed representation; it cannot establish a physical dependency,
pool preparations or become a construction-rule premise. Level-6 topic decisions
are stored with the canonical review and remain available in the selected
release's on-demand evidence panel.

A reviewed bridge joins records that separate reviews built apart, inside a
level or across levels. It is one descriptive relation with its own claim: a
definition or topic scope that a record uses, a measurement principle that a
preparation's readout relies on, or a model, result or evaluation boundary
that a finding is read with. The claim cites the passage actually read; a
bridge that names a preparation also cites that preparation's own reviewed
passage. A passage read only for a bridge extends the source's reviewed
passages without changing the owning ledger's preparations. Bridges are
admitted only as the exact records of the
[bridge ledger](../../references/canonical/BRIDGES.md); other ledgers reject
any further cross-domain relation. A bridge never establishes arising,
causation, necessity, a construction order between levels, a carrier minimum
or a weight, and it does not pool preparations. Level-0 bridges keep internal
definitions, evaluations of a Level-0 hypothesis by a physical record, formal
identities of a declared equation and the author's proposed correspondences
apart; a correspondence records the manuscript's reading of a physical notion
and is not a derivation. A component without a supported bridge stays separate.

The outer layer of the graph is the [arising model](ARISING_MODEL.md). Its
arisings and causes mirror the author's catalogue, which holds the current state
only. The vocabulary and the catalogue are bound author sources, and they
organize the ontology without serving as empirical evidence:

- **Arisings.** Each technical record belongs to the subgraph of exactly one
  arising on its own level. An arising keeps the author's scientific status, and
  its evidence coverage is computed from the claims in its subgraph.
- **Causes.** Each cause enters as an author hypothesis with an obligation drawn
  from the counterfactual definition of its ontological role. A cause becomes
  model-supported only by citing a specified model, and supported only by
  citing published evidence for the stated role. A cause that evidence
  contradicts leaves the ontology.
- **Quantities.** Weights and carrier counts stay null until quantitative
  evidence supports them.

A technical relation, including a bridge, never joins two arisings directly. It
can serve only as evidence of a cause.

Evidence for a cause comes from a primary study, recorded in the cause evidence
ledger or in a domain ledger, with the passages actually read. The claim states
the dependency in the cause's ontological role and the limits of the
preparation. A correlation, a co-occurrence or a textbook assertion without an
experiment does not support a cause. Evidence from a model is a method contract
that cites its method publication, or a derivation checked by bound executable
code.

Source admission preserves query fields that identify distinct catalogue entries;
tracking parameters alone do not create a new publication. Declared DOI fields
and DOI-based source URLs share one publication identity, including when another
record points to a mirror URL. Comparison admission
checks both publication and acquisition identifiers according to the ledger's
contract. Reusing reviewed evidence does not authorize a new interpretation in
another ledger; existing reused comparisons retain their reviewed content and
owning ledger.

Level-7 source provenance belongs to the reviewed social domain even when a record
uses another domain's identifier or mixes social-source assertions with an unrelated
experiment. Renaming a node or borrowing a preparation cannot admit an additional
unreviewed social claim or physical dependency.

Social-source reviews distinguish sampled interactions, randomized interventions,
observational associations, specified simulations and constitutive documents.
A primary document can support a definition of its stated rules, not an
experimental claim about implementation, compliance or effectiveness. Verified
historical publication years are permitted; original editions, translations and
later reprints remain distinct. Metadata for an unread book supplies
attribution, not a mechanism. Laboratory group size, sample size and model
parameters are not universal social carrier minima or weights. Completing scope
decisions does not close unresolved empirical questions or validate a universal
sequence of organizational levels.

For decay measurements, distinguish a total lifetime, a partial-rate limit
and a ratio of specified channels. Detector spectra, fitted intermediate
quantities, auxiliary response measurements and corrected results keep their
own roles even when they contribute to one analysis. Agreement of printed
arithmetic does not certify the fit or its uncertainty model.

For radiative corrections, keep the measured observable, fitted experimental
corrections and theoretical expansion separate. A renormalized parameter or
model-dependent loop decomposition is not a measurement of a bare parameter
or a virtual-particle population. A normalized shape can constrain a coupling
difference without independently determining its absolute scale.

Representation labels, mass relations and mixing conventions require their
symmetry, spin-space and approximation assumptions. A classification or a
successful conditional event assignment does not establish formation dynamics
or permanence. Internal propagators and external states retain the declared
amplitude boundary; a synthetic kinematic check cannot certify a loop
calculation or an observed population.

The following contracts describe reusable source-analysis APIs.

## Source relation classification policy

Before annotation begins, define for every relation kind:

- positive decision question;
- necessary and sufficient observable fields;
- inclusions, exclusions, and counterexamples;
- conflict/adjudication rule;
- annotator/tool exposure declaration;
- policy version and hash;
- warning thresholds for disagreement and post-unblinding changes.

The policy must not receive SCC membership, cycle visualizations, desired
acyclicity, or the effect of a label on the quotient graph.

<a id="source-node-resolution-policy"></a>

## Source node resolution policy

Define general merge and cluster criteria with positive and negative examples.
The following criterion is forbidden: “merge these records because doing so
removes a cycle.” Component size and resemblance to the foundational paper are
diagnostics only.

Every surviving component must become one stratification vertex with
`internalOrder = "undefined"`; members inherit its depth and basis. Every raw
edge must remain reconciled as an inter-cluster, internal, or typed explanation
relation.

<a id="source-policy-freeze-contracts"></a>

## Source policy freeze contracts

The kernel exposes two closed, deterministic artifact constructors:

- `freezeSourceClassificationPolicy`, versioned as
  `source-classification-policy-v1` and hashed in
  `onto2d:source-classification-policy:v1`;
- `freezeSourceNodeResolutionPolicy`, versioned as
  `source-node-resolution-policy-v1` and hashed in
  `onto2d:source-node-resolution-policy:v1`.

The classification contract requires all six relation kinds. Each kind has a
decision question, necessary and sufficient observations, inclusions,
exclusions, and counterexamples. The artifact also contains the conflict rule,
classification-visible fields, a complete forbidden-input vocabulary, and the
three migration-risk thresholds from the architecture.

The authorship and exposure declarations are cross-checked:

- `human-independent` requires at least two classifiers;
- `prospective-blind` requires independent human authorship and a negative
  declaration of pre-freeze SCC-aware exposure;
- `deterministic-precommitted` requires a frozen classifier ID and version and
  a negative declaration of pre-freeze SCC-aware exposure;
- `historically-exposed` requires an explicit positive exposure declaration
  and cannot be represented as prospective blind.

The exact forbidden classification inputs are SCC membership, cycle
visualization, desired topology, and the effect on quotient acyclicity. None
may occur in the visible-field set. Visible fields use a closed, versioned
local-field vocabulary and must include `source` and `target`; undeclared
aliases such as `sccMembership` are rejected. Human policy minima are bounded
from two through the executable annotation ceiling of 100 classifiers, so a
successfully frozen policy is not impossible to instantiate.

The node-resolution contract binds the classification policy hash and requires
classified relations, source endpoints, and SCC membership as post-
classification inputs. It covers all four dispositions with general criteria
and positive/negative examples. Cycle-removal outcome, desired acyclicity,
component size alone, and resemblance to the foundational paper alone are
frozen as forbidden criteria.

Every resolution policy fixes three additional invariants:

- each raw relation is preserved and reconciled exactly once as inter-cluster,
  internal, or typed explanation;
- cluster internal order is `undefined`, and members inherit cluster depth;
- the condensation quotient is required to be a DAG.

Set-valued arrays are deduplicated and sorted before hashing. Authored text is
preserved but must already be normalized and non-empty. The policy hash covers
the schema version, freezer version, and every normalized semantic field; it
does not cover itself.

<a id="source-classification-annotation-artifacts"></a>

## Source classification annotation artifacts

The kernel exposes two closed artifact constructors:

- `freezeSourceClassificationAnnotations`, versioned as
  `source-classification-annotations-v1` and hashed in
  `onto2d:source-classification-annotations:v1`;
- `freezeSourceClassificationAdjudication`, versioned as
  `source-classification-adjudication-v1` and hashed in
  `onto2d:source-classification-adjudication:v1`.

Both constructors first reproduce the supplied frozen policy and reject any
content/hash mismatch.

<a id="source-classification-annotation-artifacts--raw-annotations"></a>

#### Raw annotations

The annotation artifact binds the policy hash, access-controlled view hash,
exact policy-visible field set, complete relation inventory, freeze time,
classifier identities, individual exposure declarations, observations,
rationales, and selected relation kinds.

For human-independent policy, the artifact requires at least the policy's
minimum classifier count and a complete Cartesian annotation matrix: every
declared classifier independently annotates every relation exactly once. For a
deterministic-precommitted policy, exactly one classifier is permitted and its
ID and version must equal the identity frozen in the policy.

Prospective-blind and deterministic-precommitted declarations require a
negative SCC-exposure statement. Under an overall historically exposed policy,
each human still declares their own truthful status, so a mixed group may
retain prospective-blind individuals while the artifact remains historically
exposed and risk-elevated. Classifier ordering, relation ordering, annotation
ordering, and observation-set ordering cannot change the artifact hash.

<a id="source-classification-annotation-artifacts--adjudication"></a>

#### Adjudication

The adjudication artifact binds both the policy and raw-annotation hashes. It
contains one final decision per relation, a policy-compatible adjudicator
identity and exposure declaration, adjudication freeze time, and explicit
unblinding time.

Raw kinds and agreement status are derived from the frozen annotations rather
than trusted from input. A unanimous classification cannot be changed during
adjudication. A disagreement remains visible even if the final decision uses a
third supported category. The artifact computes the exact disagreement count
and ratio, compares it with the frozen risk threshold, and raises fitting risk
for threshold excess or historical exposure.

Annotation freeze, adjudication freeze, and unblinding instants must be in that
order. Timestamps use canonical UTC milliseconds and are caller-supplied
provenance, not a trusted clock attestation.

<a id="post-unblinding-classification-amendments"></a>

## Post-unblinding classification amendments

`@onto2d/kernel` implements `source-classification-amendments-v1`. The caller
supplies a complete snapshot frozen strictly after adjudication unblinding.
Every change names a frozen relation, a new supported kind, a canonical UTC
instant, a reason, an approver identity/role, and an approval `ArtifactRef`.

The freezer:

1. exactly replays policy, annotations, and adjudication;
2. rejects pre-unblinding, post-freeze, unknown-relation, no-op, and
   same-relation/same-instant ambiguous changes;
3. sorts changes chronologically and derives each `originalKind` from the
   frozen decision or preceding amendment;
4. binds every change to a `priorStateHash` and derives a content-addressed
   `changeId`;
5. emits one effective-decision record per frozen relation without modifying
   the adjudication artifact;
6. counts both change records and unique changed relations, compares the
   latter share with the precommitted risk threshold, and combines that signal
   with existing historical-exposure/disagreement reasons;
7. hashes the complete amendment snapshot under its own domain.

An empty log is meaningful: it attests that no post-unblinding changes were
recorded through its `frozenAt` instant.

<a id="closed-source-migration-package-and-run-binding"></a>

## Closed source-migration package and run binding

Schema v1 defines `SourceMigrationBinding` as one closed manifest containing:

- the semantic classification `policyHash` and blindness status;
- classification/risk policies, classification view, annotations,
  adjudication, post-unblinding amendments, and effective classified
  relations;
- node resolutions, condensation, member projections, and exactly six typed
  relation-layer artifacts;
- reconciliation, metrics, explanation index, and optional concentration.

The package loader requires all mandatory roles, rejects unknown fields,
validates every `ArtifactRef`, requires a distinct content hash for every
migration role, and requires an exact matching reference in the root
`sourceArtifacts` inventory. Typed relation layers are normalized by hash.

Every condensed-cluster primitive requires this binding. Its classification
policy hash and classification, node-resolution, and condensation artifact
references must match the bound migration exactly. One source member cannot
occur in more than one condensed-cluster primitive. Normalized member and
internal-relation order remains identity-insensitive.

The normalized binding is hashed under
`onto2d:source-migration-binding:v1`. The loaded package semantic manifest
records `sourceMigrationHash`, and its depth basis records the bound
condensation artifact hash. Verified run bundles copy `sourceMigrationHash`
and add `normalized-input/source-migration.json` as a sixteenth input artifact;
packages without a migration retain the original fifteen-input manifest.

The loader does not claim that an `ArtifactRef` proves the scientific content
of unavailable bytes. Exact upstream replay and node/edge conservation remain
the responsibility of the application that constructs this package manifest.
Authorship, access-controlled annotation, and reviewed dispositions remain
external research/application inputs rather than pending kernel algorithms.

<a id="candidate-explanations-and-closed-kernel-registry"></a>

## Candidate explanations and closed kernel registry

Candidate explanation lookup uses a kernel instance because its complete
semantic inputs and explanation indexes are embedded in a verified kernel
run-artifact store. Unsupported inputs produce stage-specific errors.

The kernel capability registry excludes adapter algorithms and authored
research/application inputs as pending kernel work. Its pending list is empty.
This means the published schema-v1 kernel API has no known placeholder
operation; it does not claim that source-migration research inputs, remote
stores, user interfaces, or deployment applications already exist.
