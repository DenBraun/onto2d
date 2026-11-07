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
`causal-emergence@2026.11.05.0`, the current canonical model. A release whose
presentation metadata declares an arising table opens as an ontology of the
[arising model](../../docs/architecture/ARISING_MODEL.md), with four views:

- **Table**: complexity levels by phases, like the opening of a periodic table.
  Selecting or hovering an arising rings its causes and dependents and draws
  their links across the table; the domain legend dims the other domains.
- **Causes**: the focused arising with its causes to the left and the arisings
  it conditions to the right, to depth 3. Line style shows the cause role
  (arising, maintenance, modulation), colour its evidence status and width its
  necessity; the roles can be shown or hidden.
- **Subgraph**: the technical records of the focused arising, laid out as a flow
  from contexts to findings, hypotheses and definitions, with dashed cards for
  records of other arisings that they cite.
- **Records**: the relations of any record across subgraphs, with the release's
  lenses and interaction cases.

The navigator groups arisings by domain or level and then by cluster; a search
lists matching arisings before technical records. Selecting an arising shows its
cell, status, evidence coverage, causal requirements, causes and dependents,
subgraph composition, obligations and its lineage: the shortest chain of
arising-role causes from the root, which the table can also draw. Selecting a cause shows its role,
dependency, necessity, causal directions, interaction modes, carrier, evidence
claims and obligations. A technical record links back to the arising that owns it.

Graphs are laid out in ordered columns: crossings are reduced, every edge enters
and leaves a card through its own port, opposite directions between two records
stay apart and long edges pass through reserved waypoints. Graphs pan and zoom;
large drawings show an overview map. The URL records the view, so the browser's
Back button returns to the previous focus. The guide explains the views and the
legend from the release's own metadata and declarations; the release dialog holds
the registry selection, verification state, model boundary and the release-wide
evidence reviews.

Relations between arisings load their exact records, claims and evidence from
separately hashed chunks when a cause is opened; technical relations show their
declared fields. Release-wide reviews load when their panels open.

These views come from the pack's presentation metadata: the opening record, the
arising table, its domains and clusters, and the layer facet. The release-wide
review panels show study design, preparations, findings, citations, publication
checks, interpretation tests and representation roles. Edge tooltips and the
relation inspector show the declared relation layer, role and assertion,
including measurement and interpretation dependencies. Record-level claims,
sources and limitations are in the inspector.

Releases with an interaction atlas expose **Lens** and **Case** controls on the
graph of the Records view (or of a release without an arising table). System,
Evidence and Hypotheses views use explicit release memberships; they do not
derive meaning from record kinds or add causal edges. A selected case displays
its existing relations and disconnected records together. Context cards use
neutral styling, and their positions assert no interaction. Disconnected case
cards retain their size; the canvas pans and zooms when they exceed the viewport.
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
The raw record panel shows the exact verified release representation.

The registry also serves independently scoped research-case models. Existing
case inputs keep their explicit identities.

After generating and registering a new canonical release, run
`npm run model-studio:data` to regenerate the browser data and its pin, then
update the module revision. Run `npm run model-studio:data:verify` explicitly
to check the derivation; ordinary build and CI checks do not run this replay.
Failed detail loads offer a
retry; model and record changes cancel obsolete requests and discard late
responses. Cached details are bounded and disposed when the model closes.
