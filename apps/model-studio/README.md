# Model Studio

Model Studio is a static browser projection of exact releases in the
hash-pinned Model Pack registry. It resolves the selected model and version
before loading its presentation.

The current canonical graph uses incremental data: the initial request loads
the complete searchable catalogue and lightweight topology, then the inspector
loads a bounded chunk containing the selected record. Scientific reviews load
when their panels open. Hidden reviews do not create DOM content.
Each fetched file has a checked byte length and SHA-256 digest. A separately
pinned browse index binds these files to the exact registry root and manifest
hashes. The stable index URL bypasses the HTTP cache so a new deployment cannot
reuse an earlier release's index; immutable release files may use that cache
and are verified again when fetched. `npm run model-studio:data:verify`, an
explicit command outside the ordinary build, regenerates every browse file from
the fully verified Model Pack and checks exact equality, including the file
inventory. This is a
verified projection; the browser does not claim to have loaded and verified the
entire Model Pack. Complete records and review downloads retain their original
values and evidence boundaries.

Other releases use the bounded `@onto2d/model-pack/browser` transport, worker
verification and verified cache. That path checks all required split files,
semantic hashes and derived indexes before creating a presentation through
`@onto2d/engine/presentation`. Local RDF imports use the same full verification
boundary. Both paths share catalogue, neighborhood and inspector behavior.

The browser verifies the exact bytes it receives. The address names the model,
because a model is updated in place: `version=` appears only for a local import
or a model with several registered releases. An older link that names a version
opens the model's current release at the same view. A record or relation is
looked up by its ID in that release, what it does not hold is ignored, and
nothing is translated between releases. Switching models resets the node
selection. None of this replaces scientific review of a release. Model-specific labels and evidence-boundary copy come only
from explicit presentation metadata in the verified pack; generic Studio code
does not branch on a model ID. Version comparison remains distinct from model
selection and requires reviewed lineage.

With no model in the URL, or one that is not published here, the Studio selects
`causal-emergence@2026.11.08.0`, the current canonical model, and nothing else
in the address carries over. A link that named another model says so above the
view. A release whose
presentation metadata declares an arising table opens as an ontology of the
[arising model](../../docs/architecture/ARISING_MODEL.md), with five views:

- **Table**: complexity levels by phases, like the opening of a periodic table.
  It opens as a **Map**: every arising is a square, sized so that the whole table
  fits the stage without scrolling (`table-map.js`), and refits with the window and
  the side panels. **Names** shows the same table with names and scrolls down, never
  sideways from 1100 px wide up: when the phases do not fit beside the level labels, the
  labels become bands above their rows (`fitNamesColumns` in `table-map.js`). **Colour**
  tints by **Domain**, or by **Evidence**: the share of an arising's causes that
  cite evidence, from a neutral surface to the evidence colour, hatched when it has
  no causes in the graph, with each level's share beside the row. A line under the
  controls names the hovered or selected arising. Selecting or hovering an arising
  rings its causes and dependents and draws their links across the table. The
  domain chips and a Discipline select dim the other arisings, together, and the
  heading above the table names them and counts those that remain; in Names, either one
  scrolls to the first arising it keeps. A first visit
  shows a short introduction above the table. This browser remembers the density,
  the colour and the closed introduction (`preferences.js`).
- **Causes**: the focused arising with its causes to the left and the arisings
  it conditions to the right, to depth 3. Line style shows the cause role
  (arising, maintenance, modulation), colour its evidence status and width its
  necessity; the roles can be shown or hidden, and **With evidence** and
  **Necessary** narrow the causes further. These filters are never remembered: a
  reload shows every cause. A card shows the name, the complexity level and type,
  and how many causes of the arising cite evidence. At depth 1, **Causal order**
  spreads causes that feed other causes, and dependents of other dependents, into
  their own columns, so no line stays inside a column; this browser remembers it.
  **Path to...** in the inspector draws the shortest chain of causes to another
  arising, one column per step (`graph-paths.js`, `path=` in the URL), or the two
  chains from their nearest common cause when neither leads to the other.
- **Subgraph**: the technical records of the focused arising, laid out as a flow
  from contexts to findings, hypotheses and definitions, with dashed cards for
  records of other arisings that they cite. Lines of one card may share a stretch:
  pointing at it lights all of them, and clicking it lists them in the inspector, so
  each can be opened whichever lies on top.
- **Records**: the relations of any record across subgraphs, with the release's
  lenses and interaction cases. In Subgraph and Records a technical record's stripe and
  kind label take the colour the legend gives its kind; an arising's card keeps its
  domain colour. An arising's inspector lists the **Interaction cases**
  it takes part in, itself or through a record it owns; a click opens the case here,
  on its anchor, with the case selected.
- In Causes, Records and the graph of a plain model, a card with neighbours outside
  the drawing carries a small mark such as `+3`. It adds them one column to the left
  or right of the card, and a minus sign removes them (`graph-expansion.js`, up to
  120 cards and 400 lines), so a reader picks what to see instead of a global depth.
  The focus, depth, view or model starting over clears this. A bounded view reaches
  its hidden cards this way, and its message takes a strip above the drawing.
- **Open work** (key 5, `mode=work`): what the map does not know yet, computed from
  the causes and arising facts (`open-work.js`). Thin bars show the share of causes
  that cite evidence on each level, and a bar filters by its level. Four sections,
  each with a live count: **Causes without evidence**, by the dependent's level;
  **Open categories**, the required categories that have no cause yet; **No
  supported cause**, established arisings first; and **Arising obligations**, by
  their text. Level and Domain selects narrow all of them. A click inspects a line
  and stays here, a double-click opens it in Causes, and long lists grow with
  `Show 100 more`.

The inspector separates what can look like a contradiction. An arising's status
describes the phenomenon, and a line under it counts the causes that cite evidence:
an established arising with none says that its causes here have not been reviewed
yet. On a cause, necessity stands next to the role and says that the two are
independent, so a modulation can be necessary.

The navigator groups arisings by domain or level and then by cluster; a search
lists matching arisings before technical records. Under Filters, a Discipline
select lists the arisings of one field of study, narrowed further by the search
and the other selects. Open filters scroll inside a cap, so the list below keeps room
for about 5 rows. Selecting an arising shows its
cell, status, disciplines, evidence coverage, causal requirements, causes and dependents,
subgraph composition, obligations and its lineage: the shortest chain of
arising-role causes from the root, which the table can also draw. Selecting a cause shows its role,
dependency, necessity, causal directions, interaction modes, its carrier by group
and type where one is declared, evidence claims and obligations. A vocabulary value
is shown by its name or not at all, never as a bare number. A word the release's vocabulary
defines holds that definition as a native title in the inspector: an arising's type, phase,
disciplines and required categories, a cause's dependency type, causal direction, interaction
mode and carrier. A domain chip holds its domain's definition the same way. The guide lists these
definitions and explains the carrier in general. The release gives no definitions for the
kinds of technical records, such as Scoped process, so the Studio writes none. A technical record links
back to the arising that owns it. Another record or relation opens at the top of the inspector;
the same one drawn again keeps the reader's place.

Graphs are laid out in ordered columns: crossings are reduced, every edge enters
and leaves a card through its own port and opposite directions between two records
stay apart. Lines stay off the cards they do not belong to: a long edge crosses each
column on the straight line through a reserved waypoint, and a line that would pass
under a card of a column wrapped into several lanes keeps to free heights in the
lanes it crosses, between their cards and waypoints or beyond them. In a subgraph,
where all lines look alike, lines of one card may share such a height. Same-column
arcs nest on tracks of their own in the free gap beside their lane: a longer arc lies
outside the arcs it contains, and when a gap between two lanes holds too few tracks
to tell lines apart, long arcs pass beyond a short lane instead. Steep curves across
a gap, between two lanes or two columns, turn at different places. No card moves for a line. Each
arrowhead is turned to the angle at which its edge arrives. Where a drawing has a focus, lines
that do not touch it stay quiet until a card or line is hovered, focused or selected.
Graphs pan and zoom; large drawings show an overview map. **Export**, in the zoom
group of a graph view, saves the whole drawing as SVG or PNG (at twice its size), on
**Dark** or **White**. The file stands alone: styles are written on its elements, and
hit areas, expansion pills, identifiers and states stay out (`graph-export.js`). File
names use words, as in `causal-emergence-chronic-low-grade-inflammation-causes.svg`;
a white copy ends in `-white`. The browser's print uses the same paper palette, which
the stylesheet defines once under `.paper-palette`, and shows the whole drawing, or
the table with its names, with bars, panels and controls hidden. The screen stays dark.
At 900 px wide or less the panels stack and the navigator starts closed behind its
toggle. On a phone the view tabs and graph controls fit the width, the overview map
is gone and the legend is compact. Touch has no gestures of its own: dragging pans the
graph and the zoom buttons zoom. Graphs show no tooltips:
clicking a card or an edge opens it in the inspector. Names are not cut: navigator rows, table
chips, inspector rows and the cards of an ontology grow to show them whole. A card of a plain
model stops at five lines and ends in an ellipsis; the inspector shows the whole name. Cell codes and record identifiers stay out of the interface: release
text that uses them is shown with names and plain words, while the raw record panel keeps the original and search still finds it. A technical
record named by a study key reads as the study: `albring2012-four-reexposures: acquisition context` shows as
`Albring 2012, four re-exposures: acquisition context`. The flat list searches and orders the names on screen, and the declared name
still finds the record. The URL records the view and the selection (`relation=` for a
selected relation, `select=` for a selected record other than the focus), so a reload or a
shared link opens the same view with the same inspector, and the browser's Back button
returns to the previous focus. Selecting only replaces the history entry; a value the release
does not hold is ignored. Choosing another model opens a new history entry. An address arriving on
an open page is applied as a load applies it, then written back in full. `case=` appears while a
case is drawn, and Open work adds `section=`, `level=` and `domain=` when they differ from the
defaults. A link to a relation, on a new page or arriving on an open one, opens the inspector, even when this browser
remembers it collapsed; the remembered choice stays as it was, the panel stays open in that tab until the reader closes it,
and the reader's own Back, Forward and reload keep the panel as they left it. A relation's inspector has **Copy link**. A double-click on an inspector
row focuses the row of the first click, even though that click has replaced what lies
under the pointer. This browser also remembers collapsed side panels and the navigator grouping
(`Domains` or `Levels`); **Reset** leaves them, and a page 900 px wide or narrower ignores a remembered
collapse: its navigator waits closed behind its toggle. The guide explains the views and the
legend from the release's own metadata and declarations; the release dialog holds
the registry selection, verification state, model boundary and the release-wide
evidence reviews.

**Keyboard.** The first Tab stop, *Skip to the main view*, puts the keyboard in the stage
of the open view and leaves the address alone. A graph, the navigator tree, the search
results, the table, a list of Open work and a row of controls (view tabs, project links,
`Domains | Levels`, the graph controls, the legend row of the table, the bars and sections of
Open work) each take one Tab stop, so 13 presses reach a graph from the top of the page at
1600 px wide and 15 reach the table on a first visit. Arrow keys move inside a stop, and
while the keyboard is in one a line in the footer names the keys that work there.

- Graph: arrows go to the nearest card in that direction, panning it on stage; Home goes to the
  focus card, or to the first card in Subgraph and on a path; Enter inspects; Space or Shift+Enter focuses; X expands or collapses; E and
  Shift+E go through the lines of the card, Enter inspects a line and Escape returns to the card.
  The stop starts on the selected card, then the focus card.
- Tree: Up and Down over visible rows, Right opens or enters, Left closes or goes to the parent,
  Home and End; on an arising Enter inspects and Space or Shift+Enter opens its causes; on a
  group Enter or Space opens or closes it.
- Search results: Down from the search box enters the list; Up, Down, Home and End move; Enter
  inspects; Space or Shift+Enter focuses.
- Table, in both densities: arrows move through the table as it is drawn; Home and End; Enter
  inspects; Space or Shift+Enter opens the causes. The readout line follows the keyboard as it
  follows the pointer, without changing the selection or the address.
- Open work: Up, Down, Home and End along the lines; Enter inspects; Space or Shift+Enter opens
  it in Causes.

Keyboard focus shows a ring; a click shows none and moves no focus. A key press moves the focus on
when its control goes away or the view changes: *Show 100 more* to the first new line, *Clear the
filters* to the Level select, a closed banner to the first control of the legend row; a chosen path,
*Clear path*, the inspector's view actions, the buttons of the message strip and any press that
changes the view to the stage, on the card, tile or row that holds its stop; an inspector row or
badge to the heading of what opens (*Back to* returns to the badge). Any other control that stays
keeps the focus. Where the panels stack, a press that changes the view, or a key press that sends
the focus to the stage, brings the view into sight. `[` and `]` hide or show the navigator and the
inspector.
The decisions are pure functions in `keyboard-nav.js`.

Relations between arisings load their exact records, claims and evidence from
separately hashed chunks when a cause is opened; technical relations show their
declared fields. Release-wide reviews load when their panels open. The browse
graph itself carries what the views need about every arising without a request:
its disciplines, evidence coverage, open categories and obligations. It also
carries the names and definitions of carriers, of the disciplines in use, and of arising types,
phases, dependency types, causal directions and interaction modes, from
the arising vocabulary the release pins by hash; the build stops if the file on
disk differs from the pin. A release without that source has no names to show, so
the carrier row, every Discipline control and these definitions stay out of its views.

These views come from the pack's presentation metadata: the opening record, the
arising table, its domains and clusters, and the layer facet. The release-wide
review panels show study design, preparations, findings, citations, publication
checks, interpretation tests and representation roles. The relation inspector
shows the declared relation layer, role and assertion, including measurement and
interpretation dependencies. Record-level claims,
sources and limitations are in the inspector.

Releases with an interaction atlas expose **Lens** and **Case** controls in a strip
above the graph of the Records view (or of a release without an arising table), so they
cover none of the drawing; a view's message takes the same kind of strip. The lenses
Studied systems, Measurements and evidence, and Hypotheses and correspondences use
explicit release memberships; they do not
derive meaning from record kinds or add causal edges. A selected case displays
its existing relations and disconnected records together. Cards around the focus
keep their kind colours, and their positions assert no interaction. Disconnected case
cards retain their size; the canvas pans and zooms when they exceed the viewport.
The full catalogue
and original record inspector remain available. View and case URL parameters
are bound to the model.

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
