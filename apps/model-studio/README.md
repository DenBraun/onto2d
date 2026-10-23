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
`causal-emergence@2026.10.22.0`, the current canonical model. The source panels
show study design, preparations, findings, citations, publication checks and
interpretation tests. Edge labels and tooltips show the declared relation layer,
meaning and assertion, including measurement and interpretation dependencies.
Record-level evidence and representation roles are available in the inspector.

Releases with an interaction atlas expose **View** and **Case** controls. System,
Evidence and Hypotheses views use explicit release memberships; they do not
derive meaning from record kinds or add causal edges. A selected case displays
its existing relations and disconnected records together. Context cards use
neutral styling, and their positions assert no interaction. Disconnected case
cards retain their size and scroll vertically when the viewport is too short.
The full catalogue
and original record inspector remain available. View and case URL parameters
are bound to the exact model and release.

Each case anchor provides comparable interaction properties, findings,
limitations and the source passages supporting them. Other case records link
to that anchor. Missing quantities retain their declared missing reason.
Proposed cross-case comparisons expose their breakdown conditions and link to
the other anchors; these comparisons never create physical causal relations.
Passports and their supporting claims, sources and studies load with the
selected record rather than the initial graph.

Canonical claims retain source and preparation IDs, passage locators, evidence
roles and limitations. Complete publications and study contexts reside in the
verified release dictionaries. A lazy detail chunk includes the referenced
evidence once in a shared context; the full inspector resolves the same records
from its verified dictionaries. Both retain complete reading extents and limits
without an additional request. Missing or invalid evidence fails before display.
Historical inline evidence keeps its existing interpretation. The raw record
panel shows the exact verified release representation.

The registry also serves independently scoped research-case models. Existing
case inputs keep their explicit identities.

After generating and registering a new canonical release, run
`npm run model-studio:data` to regenerate the browser data and its pin, then
update the module revision. Run `npm run model-studio:data:verify` explicitly
to check the derivation; ordinary build and CI checks do not run this replay.
Failed detail loads offer a
retry; model and record changes cancel obsolete requests and discard late
responses. Cached details are bounded and disposed when the model closes.
