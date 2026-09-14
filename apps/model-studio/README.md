# Model Studio

Model Studio is a static browser projection of exact releases in the
hash-pinned Model Pack registry. It loads the registry through a bounded
read-only snapshot, resolves the selected model and version, and loads every
required split file through
the bounded `@onto2d/model-pack/browser` transport, reconstructs the pack, and
verifies its semantic hashes and derived indexes before creating an
exact-identity lazy presentation through `@onto2d/engine/presentation`.

The browser verifies the exact bytes it receives and binds all workspace URL
state to the exact model and version. Switching releases resets an incompatible
node selection. It does not reinterpret relations or replace scientific review
of either release. Model-specific labels and evidence-boundary copy come only
from explicit presentation metadata in the verified pack; generic Studio code
does not branch on a model ID. Version comparison remains distinct from model
selection and requires reviewed lineage.

With no exact release in the URL, the Studio selects
`causal-emergence@2026.09.14.31`, the current canonical model. The source panels
show study design, preparations, findings, citations, publication checks and
interpretation tests. Edge labels and tooltips show the declared relation layer,
meaning and assertion, including measurement and interpretation dependencies.
Record-level evidence and representation roles are available in the inspector.

The registry also serves independently scoped research-case models. Existing
case inputs keep their explicit identities.
