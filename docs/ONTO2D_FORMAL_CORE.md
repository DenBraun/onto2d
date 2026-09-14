# ONTO2D FORMAL CORE

**Status:** Foundational consolidation and development freeze document  
**Target:** Onto2D formal theory and reference implementation  
**Purpose:** Establish the smallest defensible formal core of Onto2D, separate mathematical statements from empirical hypotheses, and define the only development sequence that should precede further theoretical expansion.

---

## 0. Executive decision

Onto2D has reached the point where adding new concepts, graph measures, datasets, visual editors, or cross-domain examples is less valuable than consolidating the mathematical object that already exists.

The current *Theory of Causal Arisings* already contains:

- typed causal configurations;
- node and edge ontologies;
- configurational codes;
- admissible-transition sets;
- structural potency;
- causal-completeness measures;
- lifecycle roles of parent relations;
- carrier-sensitive quantitative semantics;
- transition criteria;
- generalized transition Lagrangians;
- closure and threshold concepts;
- predictive and cross-domain claims.

The problem is no longer a lack of mathematics.

The problem is that definitions, modeling postulates, design rules, propositions, theorem-labelled statements, heuristics, and empirical hypotheses are currently interleaved.

The next Onto2D phase is therefore:

> **formal consolidation, axiomatization, proof discipline, and semantic closure.**

Until this phase is complete, no new major theoretical branch should be considered part of the Onto2D core.

The intended hierarchy is:

```text
ONTO2D FORMAL CORE
────────────────────────────────

Primitives
Definitions
Axioms

        ↓

Derived operators

        ↓

Propositions

        ↓

Theorems + proofs

        ↓

Conjectures

────────────────────────────────

Empirical hypotheses
outside the formal core
```

The core objective is not to make Onto2D larger.

The core objective is to make it **closed enough that every subsequent addition has an unambiguous formal place**.

---

# PART I — SCOPE AND EPISTEMIC LAYERS

## 1. What the Formal Core is

The Onto2D Formal Core is the minimal mathematical system required to represent and reason about **typed causal configurations and the transitions they structurally admit**.

The core must be:

1. finite at the level of each evaluated model;
2. deterministic under a fixed model, rule set, and evaluation policy;
3. independent of node names and serialization order;
4. explicit about typing;
5. explicit about admissibility;
6. explicit about transformation;
7. independent of any particular empirical domain;
8. independent of any particular graph metric;
9. implementable without hidden semantic rules;
10. falsifiable at the empirical mapping layer without collapsing the mathematical theory itself.

The core is not required to predict empirical events.

It is required to determine the consequences of its own formal semantics correctly.

---

## 2. Four layers that must never again be mixed

Onto2D development must distinguish four layers.

### Layer F — Formal

Statements true by definition, axiom, or proof.

Examples:

- typed-isomorphic configurations have identical admissibility under type-invariant predicates;
- mandatory coverage cannot decrease when only non-negative support is added;
- a minimal hitting set of all sufficient supports blocks a transition when removed.

These belong to mathematics.

### Layer M — Modeling

Rules that define how a particular class of real systems is encoded into Onto2D.

Examples:

- treating a synapse as an edge rather than a first-class node;
- mapping a biochemical gradient to `DTGRD`;
- selecting the descriptive level of a social institution;
- choosing whether an empirical dependency is `arising` or `maintenance`.

These are representation commitments.

### Layer E — Empirical

Claims connecting an Onto2D quantity to observations.

Examples:

- high structural readiness predicts a higher chance of regime transition;
- a geometry-derived descriptor improves prediction on DREAM4;
- developmental-history representation improves C. elegans functional prediction.

These require data.

### Layer H — Heuristic / exploratory

Useful quantities with no theorem or validated empirical interpretation yet.

Examples:

- a weighted tension score;
- a candidate structural-curvature metric;
- a provisional threshold default;
- an exploratory cross-domain analogy.

These may exist in tools, but they must never silently enter the Formal Core.

---

# PART II — THE FORMAL OBJECT

## 3. Onto2D signature

A Formal Core version is defined relative to a finite signature

\[
\Sigma =
(\mathcal L,\Phi,\mathcal R,\mathcal I,\mathcal D,
\mathcal Y,\mathcal N,\mathcal G,\mathcal C,\Theta)
\]

where:

- \(\mathcal L\) — organizational levels;
- \(\Phi\) — level phases;
- \(\mathcal R\) — node type roles;
- \(\mathcal I\) — interaction modes;
- \(\mathcal D\) — causal directions;
- \(\mathcal Y\) — dependency types;
- \(\mathcal N\) — necessity classes;
- \(\mathcal G\) — ontological lifecycle roles;
- \(\mathcal C\) — carrier ontology;
- \(\Theta\) — exact thresholds and policy parameters used by the evaluator.

The current theory supplies concrete vocabularies for all of these except that the final role of some fields in the minimal core still requires consolidation.

A particular Formal Core release must freeze the admissible values of \(\Sigma\).

---

# PART III — PRIMITIVES

## 4. Primitive P1 — Arising identifier

An **arising identifier** distinguishes one formal node occurrence from another inside a model.

An identifier carries no semantics by itself.

Renaming identifiers must not change the mathematical meaning of a configuration.

---

## 5. Primitive P2 — Node

A node is a finite formal position

\[
v \in V.
\]

A node is not assumed to be a physical object.

Its semantics are provided by its typing.

For the current core:

\[
\tau_V(v)=
(L(v),\Phi(v),R(v)).
\]

Optional implementation metadata such as labels, descriptions, source text, UI position, and display category are not part of mathematical node identity unless explicitly promoted into the signature.

---

## 6. Primitive P3 — Directed parent relation

An edge is an ordered relation

\[
e=(u,v)\in E\subseteq V\times V.
\]

The source \(u\) contributes to the structural status of target \(v\).

The relation is not merely adjacency.

It is a typed operator.

---

## 7. Primitive P4 — Edge typing

For the consolidated core, define

\[
\tau_E(e)=
(I(e),D(e),Y(e),G(e),N(e),w(e),c(e),Q(e)).
\]

Where:

- \(I(e)\subseteq\mathcal I\): interaction modes;
- \(D(e)\subseteq\mathcal D\): causal directions;
- \(Y(e)\in\mathcal Y\): exactly one primary dependency type;
- \(G(e)\in\mathcal G\): ontological role;
- \(N(e)\in\mathcal N\): necessity;
- \(w(e)\): structural contribution weight;
- \(c(e)\): epistemic confidence;
- \(Q(e)\): optional carrier/quantization specification.

The Theory of Causal Arisings already treats these dimensions as semantically distinct. The Formal Core must preserve that orthogonality.

### Required separation

\[
w(e)\neq c(e).
\]

Weight represents modeled structural contribution.

Confidence represents epistemic support for the claim.

Combining the two is allowed in derived evidence-aware operators, but they must never become the same primitive.

---

## 8. Primitive P5 — Configuration

An Onto2D configuration is

\[
M=(V,E,\tau_V,\tau_E).
\]

This is the primary static object of the Formal Core.

The graph topology alone is not an Onto2D configuration.

Two configurations with identical adjacency but different typing may have different semantics.

---

## 9. Primitive P6 — Transition type

Let \(\mathcal T\) be a finite or bounded set of candidate transition types under an evaluation policy.

A transition

\[
t\in\mathcal T
\]

contains at least:

- source applicability conditions;
- target organizational status;
- structural requirements;
- an optional transformation rule producing a successor configuration.

The transition object must be explicitly represented.

A transition must not exist only as prose attached to an analyzer.

---

## 10. Primitive P7 — Structural predicate

A structural predicate is a deterministic function over a configuration and a candidate transition:

\[
p(M,t)\in\{0,1\}.
\]

Predicates may inspect only formally declared components of the model and policy.

Examples include:

- dependency-category coverage;
- presence of typed motifs;
- level-direction consistency;
- carrier-threshold satisfaction;
- closure requirements.

---

## 11. Primitive P8 — Evaluation policy

A policy \(\Theta\) contains all thresholds, bounded-search limits, normative profiles, and rule-version choices required for deterministic evaluation.

No threshold may exist only in code.

For an exact model and exact policy:

\[
(M,\Theta)\mapsto Result
\]

must be deterministic.

---

# PART IV — DEFINITIONS

## 12. Definition D1 — Typed isomorphism

Configurations

\[
M_1=(V_1,E_1,\tau^1_V,\tau^1_E)
\]

and

\[
M_2=(V_2,E_2,\tau^2_V,\tau^2_E)
\]

are **typed-isomorphic**, written

\[
M_1\cong_\Sigma M_2,
\]

if there exists a bijection

\[
f:V_1\rightarrow V_2
\]

such that:

1. edge incidence is preserved;
2. node typing is preserved;
3. edge typing is preserved for all Formal Core fields;
4. all exact values used by formal evaluation are preserved.

Human-readable labels and node identifiers are excluded unless a particular model explicitly makes them semantic.

This relation defines the first and weakest notion of Onto2D structural equivalence.

---

## 13. Definition D2 — Canonical identity

Let

\[
Can(M)
\]

be a deterministic canonical representation of the typed-isomorphism class of \(M\).

Define canonical identity

\[
ID(M)=Hash(Can(M)).
\]

The implementation requirement is:

\[
M_1\cong_\Sigma M_2
\Rightarrow
ID(M_1)=ID(M_2).
\]

The converse is assumed only relative to the collision model of the chosen hash and canonical encoder.

---

## 14. Definition D3 — Admissibility predicate

Define

\[
A_\Theta(M,t)\in\{0,1\}
\]

as the conjunction of all mandatory formal predicates declared for transition \(t\) under policy \(\Theta\).

A transition is **structurally admissible** iff

\[
A_\Theta(M,t)=1.
\]

This definition consolidates the existing theory's use of \(A(cfg,t)\) and \(A(M,t)\).

---

## 15. Definition D4 — Admissible transition set

\[
P_\Theta(M)=
\{t\in\mathcal T_\Theta\mid A_\Theta(M,t)=1\}.
\]

This is a first-class Formal Core object.

It represents the structural possibility landscape induced by \(M\) under \(\Theta\).

---

## 16. Definition D5 — Structural impossibility

A candidate transition is structurally impossible relative to the model and policy iff

\[
t\notin P_\Theta(M).
\]

This means only:

> the current formal description does not admit the transition.

It must not be silently upgraded to a metaphysical or empirical impossibility claim.

---

## 17. Definition D6 — Realization

A realized transition is an empirical or simulation event corresponding to a transition type \(t\).

`Realized` is not derivable from graph structure alone.

The Formal Core may model a realization event, but actual empirical realization belongs to Layer E.

---

## 18. Definition D7 — Transition transformer

For transitions that modify the formal configuration, define a partial transformation

\[
T_t:M\mapsto M'.
\]

It is partial because some formally described transition types may lack a unique successor configuration.

Where the successor is unique and fully specified:

\[
M'=T_t(M).
\]

---

## 19. Definition D8 — Requirement profile

For each target node or transition, define a requirement profile:

\[
Req =
(R_{must},R_{should},R_{optional}).
\]

Each set contains dependency categories or other formally declared requirement classes.

Only \(R_{must}\) determines binary structural admissibility unless a rule explicitly declares otherwise.

---

## 20. Definition D9 — Evidence-aware coverage

For node \(N\) and dependency category \(r\), define

\[
Cover_N(r)=
\sum_{\substack{e=(p,N)\\Y(e)=r}}
w(e)c(e).
\]

This preserves the current Theory of Causal Arisings definition.

A Formal Core profile must specify whether this evidence-aware coverage is used directly for structural admissibility or only for epistemic qualification.

### Consolidation requirement

The current theory partially mixes structural and epistemic support in coverage.

The Formal Core must expose two variants:

\[
Cover^{struct}_N(r)
=
\sum w(e),
\]

and

\[
Cover^{evid}_N(r)
=
\sum w(e)c(e).
\]

Structural admissibility and evidence sufficiency must be independently queryable.

This is a required refinement, not an optional feature.

---

## 21. Definition D10 — Mandatory category satisfaction

For threshold \(T_{must}\),

\[
Satisfied_N(r)
\iff
Cover^{struct}_N(r)\ge T_{must}.
\]

The evidence-aware analogue is

\[
Evidenced_N(r)
\iff
Cover^{evid}_N(r)\ge T^{evid}_{must}.
\]

The exact thresholds belong to \(\Theta\).

---

## 22. Definition D11 — Structural completeness

A node \(N\) is structurally complete relative to its declared requirement profile iff

\[
\forall r\in R_{must},
\quad
Satisfied_N(r).
\]

Define

\[
Missing_N=
\{r\in R_{must}\mid \neg Satisfied_N(r)\}.
\]

Then

\[
StructurallyComplete(N)
\iff
Missing_N=\varnothing.
\]

This preserves the core idea of the existing SCI machinery while separating binary closure from scoring.

---

## 23. Definition D12 — Structural Completeness Index

A scalar SCI may remain as a derived diagnostic:

\[
SCI_N
=
0.8\cdot MustScore+
0.2\cdot ShouldScore
\]

for the current policy.

The coefficients are not axioms of Onto2D.

They are policy values.

Therefore SCI is not part of the timeless mathematical signature.

It is a versioned derived metric.

---

## 24. Definition D13 — Epistemic Completeness Index

ECI is a derived evidence metric.

It belongs to the formal software model but not to structural ontology itself.

Any coefficients such as

\[
ECI_N=
0.4 EdgeEvidence+
0.4 NodeEvidence+
0.2 StatusScore
\]

are policy-level definitions, not universal laws.

---

## 25. Definition D14 — Ontological lifecycle role

For parent relation \(e=(p,N)\), define

\[
G(e)\in
\{arising,maintenance,modulation\}.
\]

The semantics are:

### Arising

Removal destroys first admissibility:

\[
Adm(N\mid M)=1
\land
Adm(N\mid M\setminus e)=0.
\]

### Maintenance

First admissibility remains meaningful, but stable persistence fails after removal.

### Modulation

Admissibility and persistence remain, but the operating parameter state changes.

These are lifecycle semantics.

They must remain distinct from interaction mode, necessity, and dependency type.

---

## 26. Definition D15 — Intervention

An intervention is an explicit configuration transformation

\[
I:M\mapsto M_I
\]

that may:

- remove nodes;
- remove edges;
- add nodes;
- add edges;
- change typing;
- alter thresholds or policy parameters only when the intervention explicitly targets policy.

An intervention record must preserve:

- parent configuration identity;
- exact edit set;
- resulting configuration identity.

---

## 27. Definition D16 — Impact set

For an intervention \(I\), define the transition-impact set

\[
Impact_P(I,M)=
P_\Theta(M)\triangle P_\Theta(I(M)),
\]

where \(\triangle\) is symmetric difference.

This is the exact set of transitions whose admissibility status changes.

For node-level status, an analogous impact set may be defined over derived node predicates.

---

## 28. Definition D17 — Sufficient support

A finite subconfiguration

\[
S\subseteq M
\]

is a **sufficient support** for transition \(t\) iff:

\[
A_\Theta(S,t)=1
\]

under a declared support-local admissibility semantics.

A sufficient support is **minimal** iff no proper supported subconfiguration remains sufficient.

Define the family:

\[
\mathcal S_t(M)=
\{S_1,\ldots,S_k\}.
\]

This family is central to alternative-path and necessity analysis.

---

## 29. Definition D18 — Structural cut set

A set of model elements \(C\) is a cut set for transition \(t\) iff

\[
\forall S\in\mathcal S_t(M),
\quad
C\cap S\neq\varnothing.
\]

A minimal cut set is a minimal hitting set of all sufficient supports.

This gives Onto2D a precise semantics for structural bottlenecks.

---

## 30. Definition D19 — Alternative construction multiplicity

Define

\[
Alt(t,M)=|\mathcal S^{min}_t(M)|
\]

or, where supports differ only trivially, the number of equivalence classes of minimal supports.

This quantity measures structurally distinct sufficient ways of making a transition admissible.

It is not identical to graph path count.

---

## 31. Definition D20 — Projection

A projection is a policy-controlled mapping

\[
\pi_Q:M\mapsto M_Q
\]

that selects a subconfiguration relevant to query \(Q\).

A projection must record:

- selection policy;
- included nodes;
- included edges;
- excluded semantic dimensions;
- provenance from the original configuration.

Projection is not assumed to preserve all admissibility statements.

Preservation must be proven for a declared query class.

---

## 32. Definition D21 — Structural potency

The current theory defines a potency subset of admissible transitions.

For the Formal Core, define a transition-order function

\[
\Delta_\Omega(t)
\]

over an explicit organizational order \(\Omega\).

Then

\[
\Pi_\Theta(M)=
\{t\in P_\Theta(M)\mid \Delta_\Omega(t)>0\}.
\]

### Required correction

The current manuscript defines potency using \(\Delta L(t)>0\) but also treats certain phase upgrades as potency-producing transitions.

The Formal Core must not leave this ambiguous.

Either:

1. potency is strictly level-raising; or
2. organizational order \(\Omega\) includes level and phase.

The recommended consolidation is option 2.

For example:

\[
\Omega(v)=(L(v),\Phi(v))
\]

with an explicitly declared partial or lexicographic order.

---

## 33. Definition D22 — Local potency

For a subconfiguration \(g\subseteq M\),

\[
\Pi_{loc}(g;M)
=
P_\Theta(g)\cap \Pi_\Theta(M)
\]

only if local evaluation is semantically meaningful for the selected transition rules.

The fact that global potency exists does **not** by itself imply that a proper subgraph must carry it.

That statement requires additional assumptions.

---

## 34. Definition D23 — Three distinct meanings of “closure”

The term `closure` is currently overloaded and must be split.

### C1 — Derivational closure

A fixpoint of candidate generation and admissibility under a rule system:

\[
Cl_R(M).
\]

This is the kernel/engine notion.

### C2 — Causal completeness

Satisfaction of declared dependency requirements.

This is measured by `Missing`, SCI, ECI, and related diagnostics.

### C3 — Organizational persistence closure

A domain-appropriate self-support or retention criterion:

\[
Q_{cl}(M)\ge Q_{crit}.
\]

This appears in the generalized transition theory.

These are different mathematical concepts and must never share an unqualified identifier in the Formal Core.

---

# PART V — AXIOMS

## 35. Axiom A1 — Finite evaluability

Every configuration evaluated by the reference kernel is finite:

\[
|V|<\infty,\qquad |E|<\infty.
\]

Candidate generation and bounded analyses must terminate or return an explicit unavailable/budget-exhausted result.

---

## 36. Axiom A2 — Typing totality

Every node and every formal edge used by the core evaluator has all mandatory type fields defined.

No evaluator may infer missing formal types from labels.

---

## 37. Axiom A3 — Identifier irrelevance

Semantic results are invariant under pure renaming of node and relation identifiers.

Identifiers provide addressability, not meaning.

---

## 38. Axiom A4 — Type-semantic invariance

Formal predicates may depend only on components explicitly declared as semantic in \(\Sigma\) and \(\Theta\).

UI position, textual order, JSON property order, temporary IDs, and presentation metadata must not affect formal results.

---

## 39. Axiom A5 — Determinism

For exact inputs:

\[
(M,\Theta,t)\mapsto A_\Theta(M,t)
\]

is deterministic.

The same exact model and policy must return the same formal result.

---

## 40. Axiom A6 — Admissibility precedes modeled realization

Inside the Onto2D model:

\[
Realizable_\Theta(t,M)
\Rightarrow
A_\Theta(M,t)=1.
\]

This is a modeling axiom.

It does not claim that Onto2D has discovered every real-world condition of realization.

---

## 41. Axiom A7 — Explicit failure

If mandatory information required by a formal predicate is unavailable, the evaluator must not silently map it to false, zero, or success.

The result space must distinguish at least:

- admissible;
- inadmissible;
- unavailable/underdetermined;
- budget exhausted;
- invalid model.

This reflects the existing fail-closed project discipline.

---

## 42. Axiom A8 — Non-negative structural support

Unless a relation is represented explicitly as inhibitory or subtractive through its formal semantics, support contributions used in coverage are non-negative.

This axiom is required for monotonic coverage results.

Negative influence must be represented through an operator designed for it, not by silently inserting negative confidence or negative structural weight.

---

## 43. Axiom A9 — Typed-isomorphism invariance of predicates

If

\[
M_1\cong_\Sigma M_2
\]

and transition \(t\) is mapped consistently under the same isomorphism, then every Formal Core structural predicate has the same truth value on both configurations.

This is the core representation-invariance axiom.

---

## 44. Axiom A10 — Provenance of transformation

Every formal transformation used in scientific or reference computation must identify:

- source configuration;
- transformation rule;
- exact parameters;
- result configuration.

A successor model without derivation provenance is not a formally traceable Onto2D transition artifact.

---

# PART VI — DERIVED OPERATORS

## 45. Operator O1 — Canonicalization

\[
Can(M)
\]

produces a deterministic representative of the typed-isomorphism class.

Uses:

- identity;
- caching;
- comparison;
- fixture verification;
- reproducibility.

---

## 46. Operator O2 — Admissibility evaluation

\[
EvalAdm(M,t,\Theta)
\]

returns one of:

```text
ADMISSIBLE
INADMISSIBLE
UNDERDETERMINED
UNAVAILABLE
INVALID
BUDGET_EXHAUSTED
```

The Boolean set \(P_\Theta(M)\) is constructed only from `ADMISSIBLE`.

---

## 47. Operator O3 — Admissible-set construction

\[
P_\Theta(M)
\]

is computed over a bounded candidate transition set.

No unbounded metaphysical transition universe is required by the software kernel.

---

## 48. Operator O4 — Structural-completeness analysis

Computes:

- structural category coverage;
- missing mandatory categories;
- recommended coverage;
- SCI under a declared policy.

---

## 49. Operator O5 — Epistemic analysis

Computes evidence support independently of structural topology.

Outputs include:

- edge evidence;
- node evidence;
- confidence-qualified coverage;
- ECI;
- explicit unsupported claims.

---

## 50. Operator O6 — Intervention

Applies an explicit edit set and recomputes all affected formal results.

An intervention must never mutate the reference model without producing a new model identity.

---

## 51. Operator O7 — Impact closure

Given intervention \(I\):

\[
Impact_P(I,M)
\]

and optional node-level impact closure are computed.

The engine should explain every changed result through a minimal changed-support trace where feasible.

---

## 52. Operator O8 — Minimal-support extraction

For a target transition \(t\), compute minimal sufficient supports

\[
\mathcal S^{min}_t(M)
\]

within declared bounds.

This operator is the formal basis of:

- alternative constructions;
- necessity analysis;
- robust-vs-fragile admissibility;
- minimal repair.

---

## 53. Operator O9 — Minimal cut extraction

Compute minimal hitting sets of the minimal support family.

These are semantic bottlenecks for \(t\).

They need not coincide with topological articulation points.

---

## 54. Operator O10 — Minimal repair

Given inadmissible \(t\), search bounded modifications \(\Delta\) such that

\[
A_\Theta(M\oplus\Delta,t)=1.
\]

Return minimal repairs under an explicit cost ordering.

This is a derived solver, not a primitive.

---

## 55. Operator O11 — Projection

Construct task-specific submodels.

Every analysis must declare whether it operates on:

- full configuration;
- projection;
- quotient;
- derived graph.

The output must include projection identity.

---

## 56. Operator O12 — Comparison

For configurations \(M_1,M_2\), compute differences in:

- typing;
- support families;
- cut sets;
- admissible transitions;
- potency;
- completeness;
- empirical annotations.

This is more informative than raw graph diff.

---

## 57. Operator O13 — Composition

A composition operator

\[
M_1\oplus M_2
\]

may be defined only when namespace, type, level, and relation semantics are compatible.

Composition semantics require a dedicated proof obligation and should not be treated as set union by default.

---

## 58. Operator O14 — Refinement and coarse-graining

A refinement

\[
Ref:M\rightarrow M'
\]

introduces additional internal structure.

A coarse-graining

\[
CG:M'\rightarrow M
\]

suppresses internal structure.

These operators are central to future Structural Geometry because they define when different descriptive scales represent the same effective arising.

They are not yet fully defined in the current theory.

They are priority Formal Core work.

---

## 59. Operator O15 — Quotient by structural equivalence

Given an equivalence relation \(\sim\), construct

\[
M/{\sim}.
\]

The quotient is meaningful only if the operators of interest are well-defined on equivalence classes.

This creates a direct proof obligation:

> show that the operator does not depend on the representative selected from the class.

---

# PART VII — PROPOSITIONS

## 60. Proposition P1 — Canonical renaming invariance

If \(M'\) is obtained from \(M\) only by renaming identifiers, then

\[
M\cong_\Sigma M'
\]

and therefore

\[
P_\Theta(M)=P_\Theta(M').
\]

### Proof

A pure renaming defines a bijection \(f:V\to V'\) preserving incidence and all semantic typing. By Axiom A9, every structural predicate has identical truth value. Therefore every transition has the same admissibility value, hence the admissible sets are equal. ∎

---

## 61. Proposition P2 — Structural-coverage monotonicity

Let \(M'\) be obtained from \(M\) by adding only non-negative supporting parent relations to node \(N\), without changing existing edges or thresholds.

Then for every dependency category \(r\):

\[
Cover^{struct}_{N,M'}(r)
\ge
Cover^{struct}_{N,M}(r).
\]

### Proof

Structural coverage is a sum of non-negative edge contributions. Adding non-negative terms cannot reduce the sum. ∎

---

## 62. Proposition P3 — Preservation of satisfied mandatory categories

Under the assumptions of P2, any mandatory category satisfied in \(M\) remains satisfied in \(M'\).

### Proof

By P2, coverage cannot decrease. If coverage was at least \(T_{must}\), it remains at least \(T_{must}\). ∎

### Limitation

This does not imply global transition admissibility is monotone if additional edges may introduce inhibitory constraints, contradictions, exclusion rules, or changed global predicates.

---

## 63. Proposition P4 — Explicit incompleteness equivalence

For the definition

\[
Missing_N=
\{r\in R_{must}\mid
Cover^{struct}_N(r)<T_{must}\},
\]

we have

\[
Missing_N=\varnothing
\iff
StructurallyComplete(N).
\]

### Proof

Directly from Definition D11. ∎

This is a definitional proposition, not a deep theorem.

---

## 64. Proposition P5 — Arising-role ablation consequence

If relation \(e\) is classified as `arising` exactly by Definition D14, then removing \(e\) destroys first admissibility.

### Proof

This is the defining condition of the `arising` role. ∎

### Classification

The manuscript currently presents closely related statements in theorem-like language. In the Formal Core this must be identified as a consequence of definition, not an independent theorem.

---

## 65. Proposition P6 — Intervention identity stability

If an intervention changes no semantic field of \(M\), then

\[
I(M)\cong_\Sigma M
\]

and all Formal Core results remain unchanged.

This covers pure UI relocation, layout change, label formatting, and other non-semantic edits.

---

## 66. Proposition P7 — Evidence does not alter bare structural topology

Changing confidence \(c(e)\) without changing any structural semantic field leaves the typed topology unchanged.

It may alter evidence-aware metrics, but must not alter purely structural operators unless the selected policy explicitly uses confidence as an admissibility condition.

This proposition enforces separation between structure and epistemic support.

---

# PART VIII — THEOREMS AND PROOFS

## 67. Theorem T1 — Semantic isomorphism invariance

Let

\[
M_1\cong_\Sigma M_2.
\]

Then, under the same policy \(\Theta\),

\[
P_\Theta(M_1)
\cong
P_\Theta(M_2)
\]

under the transition mapping induced by the isomorphism.

### Proof

Let \(f\) be the typed isomorphism. By Axiom A9, every structural predicate used in \(A_\Theta\) is invariant under \(f\). Therefore for every corresponding candidate transition pair \(t_1,t_2\):

\[
A_\Theta(M_1,t_1)
=
A_\Theta(M_2,t_2).
\]

Thus membership in the admissible set is preserved under the induced transition mapping. ∎

### Importance

This is one of the core theorems that makes Onto2D more than a database.

It establishes that admissibility belongs to the structural configuration rather than to arbitrary encoding.

---

## 68. Theorem T2 — Minimal-cut blocking theorem

Let

\[
\mathcal S^{min}_t(M)
\]

be the family of all minimal sufficient supports for transition \(t\).

Let \(C\) be a set of model elements.

If

\[
\forall S\in\mathcal S^{min}_t(M),
\quad
C\cap S\neq\varnothing
\]

and removal of elements cannot create new supports, then

\[
t\notin P_\Theta(M\setminus C).
\]

### Proof

By assumption, every minimal sufficient support contains at least one element from \(C\). Removing \(C\) destroys every known sufficient support. Under the monotone-removal condition, removal cannot generate a new sufficient support not present before. Therefore no sufficient support remains, so \(A_\Theta(M\setminus C,t)=0\). Hence \(t\notin P_\Theta(M\setminus C)\). ∎

### Interpretation

A semantic cut set is a formal bottleneck.

This is more meaningful for Onto2D than ordinary graph articulation because the cut is defined relative to sufficient typed support for a transition.

---

## 69. Theorem T3 — Alternative-support survival theorem

Let \(C\) be an intervention-removal set.

If there exists at least one sufficient support

\[
S\in\mathcal S_t(M)
\]

such that

\[
C\cap S=\varnothing,
\]

and all predicates used by that support remain unchanged, then

\[
t\in P_\Theta(M\setminus C).
\]

### Proof

The surviving support \(S\) remains a subconfiguration of \(M\setminus C\). By assumption its relevant predicates are unchanged. Since \(S\) was sufficient for \(t\), it remains sufficient. Therefore \(A_\Theta(M\setminus C,t)=1\). ∎

### Interpretation

This is the formal basis of alternative-path robustness.

---

## 70. Theorem T4 — Support-family expansion cannot reduce cut size

Let \(\mathcal S_1\subseteq\mathcal S_2\) be two support families over the same element universe.

Let

\[
\kappa(\mathcal S)
\]

be the minimum size of a hitting set intersecting every support in \(\mathcal S\).

Then

\[
\kappa(\mathcal S_2)
\ge
\kappa(\mathcal S_1).
\]

### Proof

Any hitting set for \(\mathcal S_2\) must intersect every support in \(\mathcal S_1\), because \(\mathcal S_1\subseteq\mathcal S_2\). Therefore every hitting set of \(\mathcal S_2\) is also a hitting set of \(\mathcal S_1\). The minimum over the more constrained family cannot be smaller. ∎

### Interpretation

Adding genuinely independent sufficient constructions can only preserve or increase the minimum intervention needed to block the transition.

This gives a clean structural robustness quantity.

---

## 71. Theorem T5 — Support-complete projection preservation

Let projection \(\pi_Q(M)=M_Q\).

Suppose transition \(t\) is evaluated solely from a support \(S\subseteq M_Q\), and every predicate consulted by \(A_\Theta(\cdot,t)\) is support-local to \(S\).

Then

\[
A_\Theta(M,t)=1
\Rightarrow
A_\Theta(M_Q,t)=1.
\]

### Proof

Because \(S\subseteq M_Q\) and all predicates relevant to \(t\) depend only on \(S\), projection removes no information used by the admissibility proof. The same predicate evaluations therefore hold in \(M_Q\). ∎

### Limitation

This theorem fails when admissibility depends on global exclusions, competing structures, normalization over the full graph, or missing negative context.

Therefore every projection-based analyzer must declare its preservation assumptions.

---

## 72. Theorem T6 — Typed-isomorphic potency invariance

If

\[
M_1\cong_\Sigma M_2
\]

and the organizational order \(\Omega\) is preserved by the typed isomorphism, then

\[
\Pi_\Theta(M_1)
\cong
\Pi_\Theta(M_2).
\]

### Proof

By T1, admissible transition sets correspond. Because \(\Delta_\Omega(t)\) is preserved under the same typed mapping, the predicate \(\Delta_\Omega(t)>0\) has identical truth value for corresponding transitions. Restricting equal admissible sets by equal potency predicates yields corresponding potency sets. ∎

---

## 73. Theorem T7 — Representation-independent impact under isomorphic interventions

Let

\[
M_1\cong_\Sigma M_2
\]

and let interventions \(I_1,I_2\) correspond under the same typed isomorphism.

Then

\[
Impact_P(I_1,M_1)
\cong
Impact_P(I_2,M_2).
\]

### Proof

By T1, pre-intervention admissible sets correspond. The intervention correspondence implies the resulting configurations are also typed-isomorphic. Applying T1 again gives corresponding post-intervention admissible sets. Symmetric difference is preserved under bijection. ∎

### Importance

This is a central requirement for any future claim that Onto2D supports representation-independent counterfactual reasoning.

---

# PART IX — STATEMENTS THAT MUST NOT CURRENTLY BE CALLED THEOREMS

## 74. Existing “law of localized potency”

The manuscript states, in effect, that if a configuration possesses potency then some subgraph carries local potency.

If the allowed subgraph may equal the whole graph, the statement is trivial.

If a **proper** subgraph is required, the statement is not guaranteed by the current definitions.

### Formal Core decision

Classify as:

> **Conjecture C1 / optional axiom for a restricted model class**, not a universal theorem.

---

## 75. Existing configurational irreversibility claim

The current theory states that realization changes the potency landscape and often excludes the exact inverse transition.

This is plausible for many emergent processes but not a universal mathematical consequence of the current configuration formalism.

Reversible structural transformations are logically possible unless explicitly forbidden.

### Formal Core decision

Split into:

- definition of configuration-changing realization;
- empirical/domain condition of irreversibility;
- optional irreversible transition class.

Do not retain universal irreversibility as an axiom.

---

## 76. Tension-index implication

Statements of the form

\[
T(v)\ge T_{crit}
\Rightarrow
\Pi_{loc}(g(v))\neq\varnothing
\]

are not currently mathematical theorems if \(T(v)\) is a weighted heuristic built from feedback density, cross-level density, closure, and spectral terms.

### Formal Core decision

Move to empirical hypothesis unless \(T\) is redefined directly from the exact admissibility predicate.

---

## 77. Structural transferability across real systems

If structural equivalence is defined so strongly that it preserves all predicates of \(A_\Theta\), then transferability is a theorem by construction.

But the stronger claim—

> materially different real systems with similar Onto2D motifs have the same admissible transition class—

depends on whether the empirical mappings are faithful.

### Formal Core decision

Split:

- formal invariance theorem;
- empirical transfer hypothesis.

---

## 78. Universal four-phase progression

The phase sequence

```text
Differentiation
Integration
Self-organization
Threshold transition
```

is an important organizing hypothesis of the theory.

It is not currently a theorem of the Formal Core.

### Formal Core decision

Keep phase labels in the signature, but treat cross-domain universality of the four-phase progression as an empirical/meta-theoretical hypothesis.

---

## 79. Universal generalized Lagrangian

The generalized form

\[
L_{tr}
=
D-C+K+F+I+R-S
\]

is a major theoretical construct.

However, the claim that every sufficiently mature causal configuration admits a faithful functional of this form is not yet proven.

### Formal Core decision

Create a separate **Variational Extension**.

The base Formal Core must function without a Lagrangian.

The Lagrangian layer may be loaded when a model satisfies explicit applicability conditions.

---

# PART X — CONJECTURES

## 80. Conjecture C1 — Proper localizability of potency

For a non-trivial potent configuration there exists a proper subconfiguration carrying enough support for at least one potent transition.

This is not always true without restrictions.

Research task:

- characterize the model classes for which it holds;
- find minimal counterexamples;
- identify whether hyperedge-like or genuinely global predicates violate locality.

---

## 81. Conjecture C2 — Granularity invariance

There exists a useful class of refinement/coarse-graining transformations under which selected Onto2D invariants are preserved.

Candidate invariants:

- admissibility class;
- minimal cut class;
- alternative-support class;
- potency class;
- lifecycle-role semantics.

This conjecture is central.

Without it, Onto2D cannot claim meaningful structural geometry across descriptive scales.

---

## 82. Conjecture C3 — Non-trivial structural distance

There exists a distance or quasi-distance

\[
d_S(M_1,M_2)
\]

over structural-equivalence classes that captures semantic change better than graph-edit distance.

Candidate construction:

\[
d_S(M_1,M_2)
=
\min_\pi Cost(\pi)
\]

over valid Onto2D transformations.

Required properties must be studied rather than assumed:

- identity of indiscernibles;
- symmetry or directedness;
- triangle inequality;
- invariance under typed isomorphism.

---

## 83. Conjecture C4 — Structural geodesics

Minimum-cost admissible transformation paths define meaningful trajectories between organizational regimes.

This requires C3 and a transformation algebra first.

---

## 84. Conjecture C5 — Structural curvature

A curvature-like quantity can be defined over the space of admissible transformations such that it measures convergence, divergence, redundancy, or bottlenecking of nearby construction paths.

This conjecture should remain **inactive** until:

1. equivalence is formalized;
2. neighborhoods are defined;
3. a distance/cost structure exists;
4. geodesic or transport semantics exist.

Existing Forman/Ollivier work remains a graph-geometry analysis, not the final definition of Onto2D Structural Geometry.

---

## 85. Conjecture C6 — History-sensitive equivalence

Two configurations may be identical in current structure while remaining non-equivalent under an extended Onto2D history semantics.

The formal question is whether an augmented state

\[
(M,H)
\]

admits invariants not recoverable from \(M\) alone.

This is the proper formal home of Historical Load.

---

## 86. Conjecture C7 — Variational compression

For a sufficiently resolved configuration class, the admissibility structure can be compressed into an effective transition functional without losing the transition distinctions relevant to the selected analysis.

This is the formal research question behind the generalized Lagrangian.

---

# PART XI — EMPIRICAL HYPOTHESES OUTSIDE THE FORMAL CORE

## 87. E1 — Onto2D representation utility

A typed Onto2D representation preserves or exposes task-relevant information that is lost in a conventional untyped or weakly typed graph.

This is an empirical claim.

It must be tested by controlled representation ablation.

---

## 88. E2 — Structural Geometry added value

Onto2D-derived geometry provides predictive or discriminative information beyond ordinary graph baselines.

Current biological results are mixed and do not justify universality.

Future claims must remain dataset- and protocol-specific.

---

## 89. E3 — Structural readiness predicts regime transition

High readiness or tension metrics correlate with observed transition probability, timing, or magnitude.

This is currently empirical.

A weighted tension index is not self-validating.

---

## 90. E4 — Cross-domain motif transfer

The same typed motif corresponds to meaningfully analogous transition conditions across different material domains.

This requires:

- formal motif equivalence;
- independent empirical mapping;
- domain-specific controls.

---

## 91. E5 — Four-phase generality

The phase grammar is observed with useful consistency across physical, chemical, biological, neural, social, and technological systems.

This must be evaluated rather than assumed.

---

## 92. E6 — Generalized Lagrangian usefulness

Effective Lagrangian constructions derived from Onto2D configurations provide better transition models than domain baselines or simpler rule systems.

This should be tested separately for each applicability regime:

- direct;
- effective;
- simulation-based;
- pre-Lagrangian/unavailable.

---

## 93. E7 — Historical Load

Explicit historical structure provides explanatory or predictive value beyond present-state structure.

This is a major empirical program, not an axiom of Onto2D.

---

## 94. E8 — Onto2D compiler fidelity

Real systems can be translated into Onto2D without target leakage and without destroying the distinctions relevant to the intended analysis.

This is the central empirical requirement for future DREAM, C. elegans, robotics, software architecture, and other adapters.

---

# PART XII — VARIATIONAL EXTENSION

## 95. Why the Lagrangian is not deleted

The generalized transition Lagrangian is one of the strongest parts of the existing theory.

It should not be removed.

It should be **layered correctly**.

The base core determines:

- what the configuration is;
- what the semantic operators are;
- what transitions are structurally admissible;
- what support and closure structures exist.

The Variational Extension determines, for eligible model classes:

- how admissible branches are weighted;
- which branches are dynamically favored;
- where thresholds occur;
- where bifurcation occurs;
- whether closure stabilizes a branch;
- where saturation begins.

---

## 96. Applicability classes

Every attempt to construct \(L_{tr}\) must return one of:

```text
DIRECT
EFFECTIVE
SIMULATION_DERIVED
PRE_LAGRANGIAN
UNAVAILABLE
```

This converts the methodological limits already described in the theory into a machine-readable formal status.

---

## 97. Transition regimes

The existing sequence should be retained as an extension-level regime classification:

```text
inactive
stationarily admissible
subcritical
threshold-active
branch-sensitive
stabilized
saturated
```

The exact mathematical criteria are domain/model-class dependent.

They are not universal base-core predicates.

---

# PART XIII — STRUCTURAL GEOMETRY PROGRAM

## 98. Formal prerequisite chain

No new Onto2D-native curvature proposal should be promoted before this chain exists:

```text
typed equivalence
        ↓
transformation algebra
        ↓
structural supports and cuts
        ↓
refinement/coarse-graining semantics
        ↓
distance / cost
        ↓
neighborhood
        ↓
path / geodesic
        ↓
boundary
        ↓
curvature-like quantities
```

This ordering is mandatory.

Skipping directly to curvature recreates the original problem: importing graph geometry before defining the geometry of Onto2D structure itself.

---

## 99. Structural Geometry v1 target

The first true Onto2D Structural Geometry release should provide at minimum:

1. a structural equivalence relation;
2. a transformation cost model;
3. a structural distance or directed cost;
4. support multiplicity;
5. minimal cut structure;
6. intervention boundaries;
7. invariance tests under renaming/refinement;
8. at least one non-trivial theorem specific to typed arising semantics.

Only after this should curvature be reconsidered.

---

# PART XIV — PROOF DISCIPLINE

## 100. Statement classes

Every mathematical statement in Onto2D documentation must carry exactly one status:

```text
[DEF]  Definition
[AX]   Axiom
[LEM]  Lemma
[PROP] Proposition
[THM]  Theorem
[COR]  Corollary
[CONJ] Conjecture
[EMP]  Empirical hypothesis
[HEUR] Heuristic
[POL]  Policy choice
```

No unlabeled “law” should remain in the formal specification.

---

## 101. Theorem acceptance rule

A statement may be labeled `[THM]` only if all of the following exist:

1. exact formal statement;
2. declared assumptions;
3. definitions of all symbols;
4. proof;
5. at least one machine-checkable positive fixture;
6. where meaningful, a boundary or counterexample fixture showing why the assumptions matter.

---

## 102. Proof implementation is not proof

Passing software tests does not constitute a mathematical proof.

Conversely, a paper proof does not establish implementation correctness.

For each theorem-backed operator, Onto2D should maintain:

```text
formal statement
proof
reference examples
counterexamples
implementation tests
```

as separate artifacts.

---

## 103. Counterexample discipline

Every conjecture promoted to a theorem must survive deliberate counterexample search.

For structural statements, generated finite typed graphs are ideal for bounded exhaustive searches.

The project should include a counterexample harness capable of generating small valid configurations and testing candidate invariance laws.

This should become a first-class scientific tool.

---

# PART XV — SOURCE-THEORY RECLASSIFICATION

## 104. Required audit of the current Theory of Causal Arisings

The 101-page theory manuscript must now be audited statement by statement.

The audit output should be a table:

| ID | Section / Eq. | Current wording | New class | Core? | Proof needed? | Empirical validation? | Action |
|---|---|---|---|---|---|---|---|

Examples of expected reclassification:

| Existing item | Formal Core treatment |
|---|---|
| Configuration graph definition | `[DEF]` |
| Node/edge typing | `[DEF]` |
| \(P(cfg)\) admissible set | `[DEF]` |
| Structural admissibility implication | `[AX]` or definitional modeling rule |
| Strong exclusion | `[COR]` relative to admissibility semantics |
| Potency set | `[DEF]`, after phase/level ambiguity is fixed |
| Localized potency | `[CONJ]` unless locality assumptions are added |
| Multiple admissibility | not a law; a property that may or may not hold for a configuration |
| Configurational irreversibility | `[CONJ]` / domain property |
| Tension threshold implies potency | `[EMP]` or `[HEUR]` |
| Structural transferability | split into `[THM]` formal invariance + `[EMP]` real-domain transfer |
| Dependency non-substitutability | conditional `[PROP]` after rule semantics are fixed |
| SCI/ECI coefficients | `[POL]` |
| Generalized Lagrangian | Variational Extension |
| Universal cross-domain Lagrangian usefulness | `[CONJ]` + `[EMP]` |
| Closure threshold \(Q_{cl}\) | model-class definition / empirical parameter |
| Four-level-phase universality | `[EMP]` |

This audit is mandatory before expanding the manuscript.

---

# PART XVI — DEVELOPMENT ROADMAP

## 105. FC-0 — Freeze

**Goal:** stop uncontrolled conceptual expansion.

Allowed:

- bug fixes;
- documentation corrections;
- release engineering;
- formal-core work;
- tests required by formal-core work.

Deferred:

- new graph metrics;
- new empirical domains;
- new UI/editor product work;
- new cross-domain ontology categories;
- new generalized equations;
- new “universal” claims.

Exit criterion:

> This document is accepted as the current Onto2D development authority.

---

## 106. FC-1 — Formal inventory

Create:

```text
docs/formal/STATEMENT_CATALOG.md
```

Extract every definition, law, theorem, equation family, heuristic, and empirical claim from the current theory.

Assign status tags.

Exit criteria:

- 100% of formal claims indexed;
- no theorem/law remains epistemically unclassified;
- duplicated or contradictory definitions identified.

---

## 107. FC-2 — Core signature v1

Create:

```text
docs/formal/SIGNATURE.md
schemas/formal-core-v1.schema.json
```

Freeze:

- node semantic fields;
- edge semantic fields;
- exact domains;
- optional vs mandatory fields;
- exact-value representation;
- policy separation.

Exit criteria:

- every kernel field is either core-semantic, extension-semantic, evidence-only, or presentation-only;
- no field has ambiguous mathematical status.

---

## 108. FC-3 — Core semantics v1

Create:

```text
docs/formal/SEMANTICS.md
```

Define exactly:

- typed isomorphism;
- canonical identity;
- admissibility;
- structural completeness;
- transition candidates;
- transition set;
- potency;
- intervention;
- support;
- cuts;
- projection.

Exit criteria:

- every operator has formal domain/codomain;
- all failure states are explicit;
- no prose-only operator remains in the kernel.

---

## 109. FC-4 — Proof set v1

Create:

```text
docs/formal/THEOREMS.md
```

Minimum theorem set:

- T1 semantic isomorphism invariance;
- T2 minimal-cut blocking;
- T3 alternative-support survival;
- T4 support-family robustness monotonicity;
- T5 support-complete projection preservation;
- T6 potency invariance;
- T7 intervention-impact invariance.

Exit criteria:

- proofs reviewed independently;
- assumptions explicit;
- executable examples present;
- counterexample boundaries present.

---

## 110. FC-5 — Reference calculus implementation

Implement a dedicated formal-core module independent of research analyzers.

Suggested conceptual boundary:

```text
packages/formal-core/
```

It must implement only:

- signature validation;
- canonicalization;
- predicates;
- transition evaluation;
- support/cut reasoning;
- interventions;
- projection contracts;
- result explanations.

No biological fitting, curvature, Lagrangian simulation, UI, or domain adapter belongs here.

Exit criteria:

- every exported operation maps to a formal definition;
- every theorem-relevant operation has conformance tests;
- exact deterministic outputs across supported runtimes.

---

## 111. FC-6 — Counterexample Lab

Build a small finite-model exploration system.

Capabilities:

- enumerate bounded valid typed configurations;
- mutate them;
- test conjectures;
- find smallest counterexamples;
- verify invariance under isomorphism;
- verify projection assumptions;
- test support/cut algorithms.

Exit criterion:

> no theorem enters the core without surviving bounded counterexample search appropriate to its assumptions.

---

## 112. FC-7 — Refinement / coarse-graining semantics

This is the first major new theoretical work after consolidation.

Define when:

```text
fine model
   ↓ coarse-graining
effective model
```

preserves selected semantics.

Questions:

- which node splits are representation-only?
- which intermediate nodes change admissibility?
- when may a process be collapsed into one relation?
- what must a quotient preserve?
- how are lifecycle roles transformed?

Exit criterion:

> at least one non-trivial coarse-graining invariance theorem.

---

## 113. FC-8 — Structural distance

Only now define a candidate Onto2D-native distance/cost.

Compare against:

- graph edit distance;
- typed graph edit distance;
- support-set distance;
- admissible-set distance;
- intervention cost.

Exit criterion:

- identity behavior established;
- invariance under renaming;
- sensitivity to semantic changes;
- documented counterexamples;
- clear reason it is not merely a renamed known metric.

---

## 114. FC-9 — Structural Geometry v1

Define configuration-space concepts only after FC-8.

Potential scope:

- neighborhoods;
- boundaries;
- geodesic intervention paths;
- bottleneck geometry;
- branching/divergence;
- eventual curvature candidate.

The existing Forman/Ollivier branch remains a comparative graph-geometry module.

It does not define Onto2D Structural Geometry v1.

---

## 115. FC-10 — Variational Extension v1

Formalize the generalized Lagrangian as an extension module.

Required:

- applicability classifier;
- edge-to-term mapping;
- dimensional/semantic consistency rules;
- direct/effective/simulation-derived distinction;
- explicit unavailable outcome;
- domain-specific validation.

Exit criterion:

> at least one domain where the mapping is formal enough to be independently reconstructed from the Onto2D model without prose interpretation.

---

## 116. FC-11 — Empirical compiler studies

Only after Formal Core stabilization should external systems be reintroduced.

Each domain receives:

```text
source data
    ↓
frozen adapter
    ↓
Onto2D model
    ↓
formal-core operators
    ↓
extension analyzers
    ↓
empirical evaluation
```

The adapter must not see held-out target outcomes.

Use:

- DREAM4;
- C. elegans;
- software architectures;
- robotics;
- historical systems;

as separate empirical mappings.

The goal is not to make every domain succeed.

The goal is to determine which structural semantics transfer.

---

## 117. FC-12 — Visual Workbench

The editor becomes justified only after the calculus is stable.

It should be a visual programming environment for:

- configurations;
- interventions;
- supports;
- cuts;
- projections;
- equivalence;
- admissibility;
- proofs/explanations.

It should not define semantics.

The formal kernel must be usable headlessly and independently.

---

# PART XVII — HARD DEVELOPMENT RULES

## 118. Rule R1 — No concept without operator

A new semantic field may enter the core only if at least one formal operator uses it.

Otherwise it remains metadata or experimental extension data.

---

## 119. Rule R2 — No operator without semantics

A new algorithm may enter the core only if its mathematical domain, codomain, and invariance requirements are documented.

---

## 120. Rule R3 — No theorem without proof

Labels such as `law`, `theorem`, `principle`, and `invariant` are controlled vocabulary.

No rhetorical promotion.

---

## 121. Rule R4 — No empirical success may redefine the formal core retroactively

A dataset result may motivate a new conjecture.

It may not silently alter definitions or thresholds in a frozen formal release.

---

## 122. Rule R5 — Negative and unavailable results remain first-class

A model that cannot be evaluated honestly must return `UNAVAILABLE`, not an approximate success.

A conjecture destroyed by a counterexample must be downgraded or narrowed.

This is progress.

---

## 123. Rule R6 — No new metric before the representation question is explicit

Every metric must state:

- which Onto2D object it measures;
- which representation changes leave it invariant;
- which semantic changes it should detect.

Without these statements, the metric remains exploratory.

---

## 124. Rule R7 — Cross-domain sameness must be earned

Two phenomena are not structurally equivalent because they sound analogous.

They must satisfy an explicit equivalence relation or mapping contract.

---

## 125. Rule R8 — Exact implementation and mathematical theory stay separate

The code is a realization of the formal system.

The repository may contain implementation-specific constraints, but these must not be confused with mathematical necessity.

---

# PART XVIII — DOCUMENT ARCHITECTURE AFTER THE FREEZE

## 126. Canonical formal documentation

Recommended structure:

```text
docs/formal/
├── FORMAL_CORE.md
├── SIGNATURE.md
├── SEMANTICS.md
├── STATEMENT_CATALOG.md
├── THEOREMS.md
├── CONJECTURES.md
├── COUNTEREXAMPLES.md
├── VARIATIONAL_EXTENSION.md
├── STRUCTURAL_GEOMETRY.md
└── EMPIRICAL_MAPPING_RULES.md
```

---

## 127. Role of the current Theory of Causal Arisings

The theory manuscript remains the conceptual and mathematical source work.

It should not be deleted or rewritten immediately into the terse core specification.

The relationship should be:

```text
Theory of Causal Arisings
    broad theory / motivation / derivation / examples

            ↓ distilled into

Onto2D Formal Core
    normative definitions / axioms / proofs

            ↓ realized by

Reference Implementation
    executable semantics

            ↓ instantiated by

Empirical Studies
```

The manuscript explains.

The Formal Core legislates.

The implementation executes.

The studies test mappings and empirical claims.

---

# PART XIX — WHAT COUNTS AS SUCCESS

## 128. Minimal success condition

Onto2D Formal Core v1 is successful when an independent reviewer can answer, without reading the implementation:

1. What is an Onto2D configuration?
2. When are two configurations formally equivalent?
3. What exactly is an admissible transition?
4. What makes a transition impossible relative to a model?
5. What is structural potency?
6. What does an intervention change?
7. What is a sufficient support?
8. What is a structural bottleneck?
9. Which results are proven?
10. Which results are conjectures?
11. Which claims require empirical data?
12. Which quantities are policy choices rather than universal constants?

If any of these answers depends on “look at the code” or “it is intuitively clear”, the Formal Core is not closed.

---

## 129. Strong success condition

Onto2D becomes a defensible independent structural calculus when it demonstrates all of the following:

### Formal independence

At least one non-trivial theorem depends essentially on Onto2D typing semantics and is not merely an ordinary graph-theory theorem with renamed variables.

### Representation invariance

The same structural result survives non-semantic encoding changes.

### Scale discipline

At least one meaningful result survives a proven refinement/coarse-graining transformation.

### Structural metric

At least one native quantity measures semantic structural difference better than plain graph topology.

### Counterexample maturity

The project contains explicit counterexamples to earlier over-strong conjectures.

### Empirical mapping

At least one external system can be compiled into Onto2D under a frozen adapter and evaluated without target leakage.

### Negative-result discipline

Failure to transfer to another domain does not require rewriting the theory to save the claim.

---

# PART XX — FINAL POSITION

## 130. Onto2D after this document

Onto2D is no longer developed as an ever-expanding catalogue of concepts.

It is developed as a formal theory of structural admissibility.

Its central object is:

\[
\boxed{
\text{typed configuration}
+
\text{admissible transition space}
+
\text{structure-preserving transformations}
}
\]

The universal ontology graph is a reference atlas.

The kernel is the executable semantics.

Model Packs are exact instantiations.

Structural Geometry studies the geometry of configuration space.

Historical Load studies path dependence beyond present-state structure.

The generalized Lagrangian is a variational extension for eligible configuration classes.

DREAM4, C. elegans, robotics, software systems, and future domains are empirical mappings.

A visual editor, if later built, is a workbench over the calculus.

None of those components is the Formal Core itself.

---

# 131. The research question that now governs development

The central question is:

> **Which properties of an arising are invariant under changes of material realization and representation, and which are determined by the typed structure of the admissibility conditions from which the arising can exist?**

All major future proposals must answer one of five questions:

1. Does this proposal introduce a new primitive that cannot be derived from the existing core?
2. Does it define a new operator over an existing formal object?
3. Does it prove a new invariant or theorem?
4. Does it define a new conjecture with a falsification path?
5. Does it provide an empirical test of an already declared hypothesis?

If the answer is **none of the above**, the proposal does not belong in Onto2D core development.

---

# 132. Stop condition for the current phase

The project should remain in **Formal Core Consolidation** until:

- the current theory has been completely statement-classified;
- the core signature is frozen;
- admissibility and potency semantics are unambiguous;
- closure terminology is split;
- structural vs epistemic quantities are separated;
- the first theorem set has independent review;
- the reference implementation conforms to the specification;
- bounded counterexample search exists.

Only then should new foundational concepts be admitted.

This is the deliberate stopping point.

Not because Onto2D is finished.

Because from this point onward, **new ideas must enter a mathematical system rather than enlarge an unfinished vocabulary**.

---

# Appendix A — Source anchors in the current Theory of Causal Arisings

The Formal Core consolidation is grounded in the existing manuscript rather than replacing it.

Key source locations:

- §4.2–4.11 — interaction modes, causal directions, type roles, carrier groups and carrier types.
- §5.2, Eqs. 39–58 — graph-level configuration and configurational codes.
- §6.1, Eqs. 85–88 — admissible transition set and structural admissibility.
- §6.2, Eqs. 89–108 — structural potency and local potency.
- §7.1–7.3, Eqs. 144–167 — causal map, typed nodes, typed edges, edge operator semantics.
- §7.4, Eqs. 168–179 — arising / maintenance / modulation roles.
- §7.5, Eqs. 180–195 — tension nodes and readiness metrics.
- §7.7–7.8, Eqs. 210–236 — structural prediction and computational model.
- §8, Eqs. 237–250 — causal completeness, SCI, ECI, CCI.
- §9.1–9.6, Eqs. 251–317 — generalized transition Lagrangian, mapping rules, transition regimes, potency relation.
- §9.8 — direct, effective, and pre-Lagrangian applicability limits.
- §10 — explicit statement that the theory remains under development.

---

# Appendix B — Immediate repository tasks

The next implementation batch should be limited to:

```text
[FC-1] Statement catalog
[FC-2] Signature v1
[FC-3] Semantics v1
[FC-4] Theorem document
[FC-5] Reference formal-core module
[FC-6] Counterexample Lab
```

Everything else is secondary until these six items are complete.

