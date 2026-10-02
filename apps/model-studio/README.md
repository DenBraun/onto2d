# Model Studio

Model Studio is a static browser projection of exact releases in the
hash-pinned Model Pack registry. It resolves the selected model and version
before loading its presentation.

The current canonical graph uses incremental data: the initial request loads
the complete searchable catalogue and lightweight topology, then the inspector
loads a bounded chunk containing the selected record. Vocabulary and scientific
reviews load when their panels open. Hidden reviews do not create DOM content.
Each fetched file has a checked byte length and SHA-256 digest. A separately
pinned browse index binds these files to the exact registry root and manifest
hashes. The stable index URL bypasses the HTTP cache so a new deployment cannot
reuse an earlier release's index; immutable release files may use that cache
and are verified again when fetched. Build validation regenerates every browse file from the fully verified
Model Pack and checks exact equality, including the file inventory. This is a
verified projection; the browser does not claim to have loaded and verified the
entire Model Pack. Complete records and review downloads retain their original
values and evidence boundaries.

Other releases use the bounded `@onto2d/model-pack/browser` transport, worker
verification and verified cache. That path checks all required split files,
semantic hashes and derived indexes before creating a presentation through
`@onto2d/engine/presentation`. Local RDF imports use the same full verification
boundary. Both paths share catalogue, neighborhood and inspector behavior.

The browser verifies the exact bytes it receives and binds all workspace URL
state to the exact model and version. Switching releases resets an incompatible
node selection. It does not reinterpret relations or replace scientific review
of either release. Model-specific labels and evidence-boundary copy come only
from explicit presentation metadata in the verified pack; generic Studio code
does not branch on a model ID. Version comparison remains distinct from model
selection and requires reviewed lineage.

With no exact release in the URL, the Studio selects
`causal-emergence@2026.10.02.9`, the current canonical model. The source panels
show study design, preparations, findings, citations, publication checks and
interpretation tests. Edge labels and tooltips show the declared relation layer,
meaning and assertion, including measurement and interpretation dependencies.
Record-level evidence and representation roles are available in the inspector.

The registry also serves independently scoped research-case models. Existing
case inputs keep their explicit identities.

After generating and registering a new canonical release, run
`npm run model-studio:data` to regenerate the browser data and its pin, then
update the module revision. `npm run model-studio:data:verify` checks the
derivation and runs as part of `npm run build`. Failed detail loads offer a
retry; model and record changes cancel obsolete requests and discard late
responses. Cached details are bounded and disposed when the model closes.
