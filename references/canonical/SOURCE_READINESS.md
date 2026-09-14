# Representation and Formal Core requirements

## Status of the supplied proposal

[ONTO2D_FORMAL_CORE.md](../../docs/ONTO2D_FORMAL_CORE.md) was read in full:
numbered sections 0 through 132 and both appendices. Its original bytes are
preserved and bound as an author-supplied proposal. The source register records
its SHA-256. The document's proposed freeze and FC-0 through FC-12 are not an
adopted instruction to stop source reconstruction. The user's sequence remains:
update the central data and derivatives first; develop the proposed formal
implementation afterwards.

The useful change is a research discipline: separate definitions, modeling
choices, empirical claims and hypotheses; state the represented object before
computing its geometry; retain unavailable and negative results; distinguish
derivational closure, requirement coverage and physical persistence. The current
atlas already makes many of these distinctions. No new calculus, metric,
curvature, workbench or `formal-core` package is implemented by this edition.

The proposal supplies no external bibliography. Its Appendix A lists anchors
in the 101-page *Theory of Causal Arisings*. Those supplied anchors are leads
for the remaining manuscript audit, not newly verified support for every
equation. The existing [foundation review](../../models/causal-emergence/reconstruction/README.md)
retains its actual reading and checking limits. A complete F/M/E/H assignment
to all existing claims is also pending: several claims contain multiple kinds
of assertion and must first be split, rather than given an invented single label.

## Review of the whole proposal

| Sections | Decision for the source graph and remaining obligation |
|---|---|
| 0-2 | Adopt epistemic separation as a curation principle; defer the implementation roadmap and do not treat the supplied freeze as current project authority. |
| 3-13 | Distinguish atlas nodes from configuration occurrences. Specify an incidence representation that preserves parallel assertions, joint premises and context before adopting the proposed signature. Structural and confidence quantities need distinct meanings, not unequal numerical values. |
| 14-18 | Repair Boolean impossibility and transformer semantics. Missing evaluation is not false; nondeterministic successors require a relation or an explicit selection policy. |
| 19-24 | Coverage weights, category requirements and SCI/ECI coefficients are modeling choices. No current legacy number is calibrated for these operators. Missing requirements cannot silently become an empty, satisfied list. |
| 25-27 | Separate lifecycle participation from individual necessity. Interventions that change policy or the candidate universe need an explicit comparison map. |
| 28-34 | Define support-local validity versus validity inside a larger configuration; inclusion-minimal versus minimum-cardinality support; complete versus bounded search; three operationally distinct closures. Do not order physical complexity using display levels. |
| 35-44 | Make finite candidate generation and budgets explicit. Reconcile explicit unavailable results with Boolean predicates. Define which identity includes evidence and provenance. |
| 45-59 | Preserve stable source IDs, joint-rule incidence and experimental contexts now. Operators, composition, quotient and refinement semantics remain future work. |
| 60-66 | P1 needs transport of transition identities; P2/P3 need fixed positive weights and requirements; P4 needs complete known inputs; P5 follows from its definition; P6/P7 must separate structural, evidence and artifact identity. |
| 67-73 | T1-T7 are candidate statements requiring the assumptions below and independent mathematical review. They are not accepted Onto2D theorems or empirical results. |
| 74-86 | Keep localized potency, irreversibility, universal phases, variational claims, distance, geodesics, curvature and cross-scale invariance as bounded conjectures or modeling proposals. |
| 87-99 | Compiler utility, empirical added value and variational applicability require external tests and declared comparators; existing geometry results retain their original scope. |
| 100-104 | Adopt explicit statement classes, proof obligations and counterexample discipline. Execution alone does not prove a universal theorem. Complete theory reclassification remains open. |
| 105-117 | FC-0 through FC-12 are a deferred program. Source readiness does not certify their completion. |
| 118-129 | Preserve negative evidence and explicit representation boundaries. Do not require a speculative concept to masquerade as an implemented operator merely to remain in the source atlas. |
| 130-132; Appendices A-B | Treat success criteria and repository tasks as proposals. Verify the original manuscript anchors and dependency chain before formal implementation. |

## Corrections needed before formal implementation

The machine-readable findings link back to exact numbered sections. Their
reasoning is internal mathematical and representational analysis, not a new
publication-backed theorem catalogue.

**Unknown and impossible.** D5 defines impossibility through nonmembership in
the admissible set, while A7 requires unavailable, underdetermined and
budget-exceeded results. If an observation needed for a predicate is missing,
not finding an admitted transition does not prove its rejection. Future
evaluation must distinguish a completed false result from missing data,
invalid input and incomplete search; it must record the candidate universe.
An empty atlas edge set likewise asserts no adopted explanation, not the
physical absence of all interactions.

**Identity and representation.** A bijection of node IDs must transport
candidate transitions, predicate inputs and policy references. Equality of
literal transition-ID sets is not renaming invariance. The signature puts
confidence inside edge typing, while P7 separates it from bare topology;
therefore specify at least incidence, structural typing, evidence and complete
artifact identity. Changing a citation can preserve incidence but must change
the hash of an artifact that contains it. The equation `w(e) != c(e)` should
express distinct roles, not a constraint prohibiting coincident values. An
edge set that is literally a subset of `V x V` also needs an extension or
reification for distinct assertions on the same endpoints. Joint premises
must retain their rule identity; pairwise arrows alone do not encode AND.

**Lifecycle and redundancy.** Suppose formation is admitted when either
support `a` or support `b` is present. With both present, neither individual
deletion blocks admission. Both can participate in a formation mechanism
without either being individually necessary. D14's removal criterion therefore
cannot simultaneously be a general definition of formation participation and
an axis independent of necessity. Record target, observation window,
intervention, alternative mechanisms and the unit being removed. Current
retinal operating evidence is not a developmental formation experiment.

**Support and cuts.** Consider the admissibility predicate
`A(X) = (a in X) and ((b not in X) or (c in X))`.
The configuration `{a,b,c}` is admitted and `{a}` is admitted in isolation.
Deleting `{c}` leaves that isolated support unchanged, yet `{a,b}` is rejected.
Thus T3 needs a condition that lifts support validity into the surrounding
configuration. This example is outside an explicitly upward-preserving
support contract; it shows why that contract must be stated, not why the
conditional theorem could never hold.

T2 needs a complete support family, a witness characterization of admission,
legal removals and exclusion of new supports created by deletion. Removing a
vertex also removes its incident assertions. A budget-limited enumeration
cannot certify that all alternatives were hit. For T4, adding support sets
adds hitting constraints, so the optimum cannot decrease when the same cost
and removal universe apply; it may stay equal. An empty support family has
empty hitting set of size zero; a family containing the empty support has no
hitting set. The latter needs an explicit unavailable or infinite convention,
not a finite minimum. Inclusion-minimal sets need not have minimum size.

**Other conditional statements.** T1 relies on predicate invariance and an
equivariant candidate generator. Positive-sum monotonicity in P2 does not
survive arbitrary renormalization or changed thresholds. T5 requires every
consulted requirement, including exclusion/context conditions, to survive
projection. Shared study identity alone is weaker than this. T6 additionally
requires a defined, preserved organizational measure; current `level` values
are display groups. T7 needs commuting pre/post intervention maps and a common
policy/candidate comparison domain. A global requirement for both `a` and `b`
on `{a,b}` has no sufficient proper subconfiguration, so universal proper
localizability of potency needs restrictions. None of these arguments supplies
a general physical complexity order or establishes a CRT instance.

## Current atlas contract

Every entity and construction rule has an explicit representation role in
[source-readiness.json](source-readiness.json). Quantity definitions, carrier
classes, model contexts, scoped phenomena and experimental contexts remain
distinct. A scoped phenomenon describes study-supported behavior; it is not a
separately identified experimental event. A rule specification describes joint
gates and output classes; it is not an executed transition. Every current
record has `instanceAdmission: none`. Roles do not replace evidence status.

The compiler attaches roles to nodes and scoped carrier interpretations to
current graph relations. The interface exposes these current records and their
scientific citations. Source validation checks node coverage, relation bindings
and publication locators within the declared study boundaries. These checks
validate data integrity and representation contracts, not scientific prose.

Formal Core implementation remains deferred until source review is complete.
