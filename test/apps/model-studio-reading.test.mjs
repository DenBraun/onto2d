import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { recordDisplayName } from "../../apps/model-studio/plain-text.js";

const root = new URL("../../", import.meta.url);
const [source, styles, html] = await Promise.all([
  readFile(new URL("apps/model-studio/model-studio.js", root), "utf8"),
  readFile(new URL("assets/css/model-studio-workbench.css", root), "utf8"),
  readFile(new URL("apps/model-studio/index.html", root), "utf8")
]);

function declaration(name) {
  const match = new RegExp(`^(?:async )?function ${name}\\(`, "m").exec(source);
  assert.ok(match, `Missing app function: ${name}`);
  const end = source.slice(match.index + 1).search(/\n(?:async )?function |\n\/\*\* /);
  assert.ok(end >= 0);
  return source.slice(match.index, match.index + 1 + end);
}

function constant(name) {
  const match = new RegExp(`^const ${name} = .*$`, "m").exec(source);
  assert.ok(match, `Missing app constant: ${name}`);
  return match[0];
}

/** Every declaration of a selector in the stylesheet, joined. */
function ruleOf(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const found = [...styles.matchAll(new RegExp(`(?:^|[}\\s,])${escaped}\\s*(?:,[^{}]*)?\\{([^}]*)\\}`, "gm"))].map((match) => match[1]);
  assert.ok(found.length > 0, `Missing style rule: ${selector}`);
  return found.join(";");
}

const CHARACTER = 6;

function cards({ ontology = true } = {}) {
  return vm.runInNewContext(`${[constant("GRAPH_NODE"), constant("CARD_FOOTER")].join("\n")}\n${[
    "displayName", "fitLine", "wrapCardLabel", "cardFooter", "footerHeight", "cardHeight"
  ].map(declaration).join("\n")}\n({ cardFooter, cardHeight, footerHeight, CARD_FOOTER, GRAPH_NODE });`, {
    state: { ontology },
    recordDisplayName,
    textWidth: (text) => text.length * CHARACTER,
    cardFont: () => "test",
    isArising: (node) => node.layer === "arising",
    wrappedLines: () => ({ lines: ["one"] }),
    Math, Number, String
  });
}

test("a technical record's card shows its kind and gives the owning arising its own wrapped lines", () => {
  const { cardFooter } = cards();
  const owner = "in Innate Immune Pattern Recognition and Damage-Associated Inflammatory Signaling";
  const footer = cardFooter({ facts: "Scoped process", owner }, 170);
  assert.deepEqual([...footer.facts], ["Scoped process"], "The footer line names the kind only");
  assert.equal(footer.trailing, "");
  assert.ok(footer.owner.length >= 3, "A long owner takes the lines it needs");
  assert.equal(footer.owner.join(" "), owner, "Nothing of the name is lost");
  for (const line of footer.owner) assert.ok(line.length * CHARACTER <= 170, line);
  assert.ok(!footer.owner.join("").includes("…"));
});

test("a word split for lack of room breaks before a syllable where one is near", () => {
  const { cardFooter } = cards();
  for (const width of [108, 114]) {
    assert.deepEqual([...cardFooter({ facts: "Scoped process", owner: "Compartmentalization" }, width).owner], ["Compartmentaliza-", "tion"], `At ${width} px`);
  }
  const [head, ...tail] = cardFooter({ facts: "Scoped process", owner: "Mmmmmmmmmmmmmmmmmmmmmmmm" }, 60).owner;
  assert.equal(`${head.slice(0, -1)}${tail.join("").replaceAll("-", "")}`, "Mmmmmmmmmmmmmmmmmmmmmmmm", "A word with no syllable to find still splits whole");
});

test("a word too long for a line breaks at its own hyphens before it is split, and a word that fits stays whole", () => {
  const { cardFooter } = cards();
  const { owner } = cardFooter({ facts: "Scoped process", owner: "in Atomic-to-Macroscopic Electromagnetic Interaction Regime" }, 120);
  assert.equal(owner[0], "in Atomic-to-");
  assert.equal(owner[1], "Macroscopic");
  assert.ok(owner.every((line) => line.length * CHARACTER <= 120), owner.join("|"));
  const whole = cardFooter({ facts: "Scoped process", owner: "Immune Resilience vs Immune Constraint Trade-off" }, 134).owner;
  assert.equal(whole.at(-1), "Trade-off", "A compound that fits a line is not parted");
  const split = cardFooter({ facts: "Scoped process", owner: "Supercalifragilisticexpialidocious" }, 120).owner;
  assert.ok(split.length > 1 && split[0].endsWith("-"), "Only a word without its own breaks is split");
  assert.equal(split.join("").replaceAll("-", ""), "Supercalifragilisticexpialidocious");
});

test("an arising card keeps its level and type beside the evidence share, and wraps rather than cuts", () => {
  const { cardFooter } = cards();
  const evidence = { supported: 2, total: 5 };
  const facts = "Multicellular · Scoped process";
  const wide = cardFooter({ facts, factsShort: "Multicellular", evidence }, 300);
  assert.deepEqual([...wide.facts], [facts]);
  assert.equal(wide.trailing, "✓ 2/5");
  const narrow = cardFooter({ facts, factsShort: "Multicellular", evidence }, 134);
  assert.deepEqual([...narrow.facts], ["Multicellular"], "The short form takes over when the whole does not fit");
  const tight = cardFooter({ facts: "Spacefaring infrastructure · Scoped process", factsShort: "Spacefaring infrastructure", evidence }, 134);
  assert.equal(tight.facts.join(" "), "Spacefaring infrastructure", "Even the short form wraps whole beside the share");
  assert.ok(tight.facts.length > 1);
  assert.equal(cardFooter({ facts: "", evidence: null }, 134).facts.length, 0);
});

test("a card grows a line at a time for its footer and its name", () => {
  const { cardHeight, cardFooter, footerHeight, CARD_FOOTER, GRAPH_NODE } = cards();
  const record = { id: "r", layer: "technical", name: "Short name" };
  const width = 200;
  const bare = cardHeight(record, width, 10, false, { facts: "Scoped process" });
  assert.equal(footerHeight(cardFooter({ facts: "Scoped process" }, width - 30)), CARD_FOOTER.area);
  const owned = { facts: "Scoped process", owner: "in Innate Immune Pattern Recognition and Damage-Associated Inflammatory Signaling" };
  const lines = cardFooter(owned, width - 30).owner.length;
  assert.equal(cardHeight(record, width, 10, false, owned), bare + lines * CARD_FOOTER.lineHeight, "Each owner line adds one footer line");
  const longName = { ...record, name: "A name long enough to need more than one line on every card it is drawn on" };
  assert.ok(cardHeight(longName, width, 10, false, { facts: "Scoped process" }) >= bare + GRAPH_NODE.lineHeight);
  assert.equal(cardHeight(record, width, 200, false, owned), 200, "The usual height is the minimum");
  assert.equal(cardHeight(record, width, 10, false), 8 + GRAPH_NODE.lineHeight, "A card without a footer holds its name");
});

test("the release library titles interpretations by words, for every comparison in the release", async () => {
  const context = vm.runInNewContext(`${declaration("humanize")}\n${declaration("interpretationTitle")}\n({ interpretationTitle });`, { String, Number });
  const { interpretationTitle } = context;
  assert.equal(interpretationTitle("soc:hierarchy-attributes-versus-interaction"), "Hierarchy attributes versus interaction");
  assert.equal(interpretationTitle("cog:opioid-common-route"), "Opioid common route");
  assert.equal(interpretationTitle("neural-wm-buffer"), "Neural wm buffer");
  assert.equal(interpretationTitle("ucn2017-2018-lifetime"), "Ucn 2017 2018 lifetime");
  const directory = new URL("apps/model-studio/data/causal-emergence/2026.11.08.0/", root);
  const files = (await readdir(directory)).filter((name) => name.startsWith("review-"));
  const comparisons = [];
  const collect = (value) => {
    if (Array.isArray(value)) value.forEach(collect);
    else if (value && typeof value === "object") {
      if (Array.isArray(value.comparisons)) comparisons.push(...value.comparisons);
      Object.values(value).forEach(collect);
    }
  };
  for (const name of files) collect(JSON.parse(await readFile(new URL(name, directory), "utf8")));
  assert.ok(comparisons.length > 100);
  for (const { id } of comparisons) {
    const title = interpretationTitle(id);
    assert.doesNotMatch(title, /[:_]|[a-z]-[a-z]/, `${id} -> ${title}`);
    assert.match(title, /^[A-Z0-9]/, `${id} -> ${title}`);
  }
  assert.doesNotMatch(source, /Interpretation: \$\{comparison\.id\}/);
  assert.doesNotMatch(source, /\?\? study\.id/);
});

test("the navigator offers no identifiers by name", () => {
  const sort = html.match(/<select id="catalog-sort">[\s\S]*?<\/select>/)[0];
  assert.deepEqual([...sort.matchAll(/<option[^>]*>([^<]*)<\/option>/g)].map((match) => match[1]), ["Table order", "Level", "Name", "Most connected"]);
  assert.doesNotMatch(html.match(/<label class="search-field"[\s\S]*?<\/label>/)[0], /\bID\b/);
  assert.match(source, /"Find an arising or a record"/);
  assert.match(styles, /@media \(max-width:1280px\) \{[^\n]*\.search-field kbd\{display:none\}/, "Narrow panels give the hint's room to the placeholder");
  assert.match(source, /elements\["catalog-count"\]\.textContent = String\(state\.ontology\.arisings\.length\)/, "The count beside the title is a plain number");
  assert.doesNotMatch(ruleOf(".sidebar-header h1 > span:first-child"), /ellipsis/);
});

test("the navigator names its first order by what the release has", () => {
  assert.match(html, /<option id="catalog-sort-default" value="id:asc">Table order<\/option>/);
  assert.match(source, /elements\["catalog-sort-default"\]\.textContent = state\.ontology \? "Table order" : "Default order";/);
  assert.match(source, /"catalog-sort-default"/, "The option is part of the element registry");
});

test("the count beside the title of an ontology is a plain number under every filter, and a plain release keeps its loaded share", () => {
  assert.match(source, /elements\["catalog-count"\]\.textContent = state\.ontology\n\s+\? String\(totalMatching\)\n\s+: `\$\{state\.catalog\.items\.length\} \/ \$\{state\.catalog\.matching\}`;/);
});

test("every navigator select shows its value through a copy that wraps, kept in step on each catalog render", () => {
  const panel = html.match(/<div class="filter-grid">[\s\S]*?<\/details>/)[0];
  const selects = [...panel.matchAll(/<select id="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(selects.includes("role-filter") && selects.includes("catalog-sort"));
  for (const id of selects) {
    assert.match(panel, new RegExp(`<span class="select-box"><select id="${id}"[^>]*>(?:(?!</select>)[\\s\\S])*</select><span class="select-value" aria-hidden="true"></span></span>`),
      `${id} needs the wrapping copy of its value`);
  }
  assert.match(declaration("renderCatalog"), /^function renderCatalog\([^\n]*\n {2}showSelectValues\(\);/, "Filters set from code show too: reset, a model switch, a restored view");
  assert.match(ruleOf(".select-value"), /overflow-wrap:\s*anywhere/);
  assert.doesNotMatch(ruleOf(".select-value"), /nowrap|ellipsis|[^-]height:\s*\d/, "The box grows with its value");
  assert.match(ruleOf(".select-box select"), /position:\s*absolute;\s*inset:\s*0;\s*width:\s*100%;\s*height:\s*100%/, "The native control covers the box, however tall");
  assert.match(ruleOf(".select-value"), /pointer-events:\s*none/, "Clicks reach the control under the copy");
  assert.match(ruleOf(".select-value"), /background:\s*var\(--input\)/, "The copy hides the control's own cut value");
  assert.match(styles, /\.select-box select:focus-visible \+ \.select-value \{ outline: 2px solid/, "Keyboard focus shows on the copy");
});

test("table columns and chips are as wide as the longest word they hold", () => {
  const table = declaration("buildArisingTable");
  assert.match(table, /Math\.ceil\(textWidth\(word, chipFont\)\) \+ 1 \+ TABLE_CHIP\.chrome/);
  assert.match(table, /min: chipWidths\.get\(phase\.value\) \+ TABLE_CHIP\.cellChrome,/);
  assert.match(table, /cell\.style\.setProperty\("--chip-min",/);
  assert.match(ruleOf(".arising-table-cell"), /minmax\(min\(var\(--chip-min, 128px\), 100%\), 1fr\)/);
  const padding = ruleOf(".arising-chip").match(/padding:\s*5px 5px 5px 11px/);
  assert.ok(padding, "A chip's chrome is two borders and sixteen pixels of padding, as the constant says");
  assert.match(constant("TABLE_CHIP"), /chrome: 18, cellChrome: 10/);
  assert.doesNotMatch(ruleOf(".arising-chip span"), /hyphen/, "A browser's dictionary decides nothing");
});

test("browser defaults cannot take text below the readable minimum", () => {
  assert.match(styles, /^small, h5 \{ font-size: 12px; \}$/m, "A small count or a heading with no rule of its own stays at 12px");
  assert.match(source, /createElement\("div", "relation-obligations"\)/);
  assert.match(ruleOf(".relation-obligations > h5"), /text-transform:\s*uppercase/, "It reads as the section it is");
});

test("a wrapped action keeps its text inside the button", () => {
  const rule = ruleOf(".record-actions button");
  assert.match(rule, /min-height:\s*28px/);
  assert.doesNotMatch(rule, /[^-]height:\s*28px/);
});

test("long release strings wrap inside the panels instead of scrolling them sideways", () => {
  assert.match(styles, /\.inspector-content :is\(h3, h5, p, li, dd, summary\), \.dialog-body :is\(h3, h5, p, li, dd, summary\) \{ overflow-wrap: anywhere; \}/);
});

test("loading text keeps its full strength", () => {
  assert.doesNotMatch(styles, /#load-state \{[^}]*opacity/);
});

test("names wrap in the inspector, the navigator and the table chips", () => {
  for (const selector of [".relation-item span", ".relation-item small", ".lineage-step span", ".tree-row .tree-label", ".tree-leaf span",
    ".catalog-item strong", ".catalog-item small", ".arising-chip span", ".node-tag", ".toolbar-title strong", ".toolbar-title span"]) {
    assert.doesNotMatch(ruleOf(selector), /text-overflow|white-space:\s*nowrap|line-clamp/, selector);
  }
  assert.match(ruleOf(".relation-row"), /align-items:\s*start/, "The badge stays beside the first line of a wrapped name");
  assert.match(ruleOf(".editor-group"), /grid-template-rows:\s*auto\b/, "The toolbar grows when a long name wraps");
});

test("the footer's hint shows whole or not at all", () => {
  const footer = ruleOf(".editor-footer");
  assert.match(footer, /flex-wrap:\s*wrap/, "Without room the hint moves to a second line");
  assert.match(footer, /overflow:\s*hidden/, "and the footer clips that line");
  assert.match(ruleOf(".editor-footer p"), /line-height:\s*27px/, "A line fills the footer: 28px with its border");
  assert.match(ruleOf(".editor-group"), /grid-template-rows:[^;]*\s28px/);
  assert.match(ruleOf(".editor-footer p:first-child"), /flex:\s*none/, "The counts come first and the hint gives way");
});

test("a narrow window keeps the table's heading, which names what the filters leave", () => {
  assert.match(styles, /@media \(max-width:1100px\) \{[^\n]*#graph-hint\{display:none\}[^\n]*body:not\(\[data-mode="table"\]\) \.toolbar-title span\{display:none\}/);
});

test("lines that do not touch the focus step back only in a drawing that has one", () => {
  const rule = styles.match(/#graph-edges\[data-has-focus="true"\] \.graph-edge\[data-focus-edge="false"\]:not\(\[data-highlight\]\):not\(\[data-selected="true"\]\) \{ opacity: (\.\d+); \}/);
  assert.ok(rule, "The rule is gated on the drawing, and yields to hover, keyboard focus and selection");
  assert.ok(Number(rule[1]) >= 0.3 && Number(rule[1]) <= 0.6);
  const technical = styles.match(/#graph-edges\[data-has-focus="true"\] \.graph-edge\[data-layer="technical"\]\[data-focus-edge="false"\]:not\(\[data-highlight\]\):not\(\[data-selected="true"\]\) \{ opacity: (\.\d+); \}/);
  assert.ok(technical && Number(technical[1]) > Number(rule[1]) && Number(technical[1]) <= 0.6, "Technical lines start dimmer, so they keep more of it");
  const hasFocus = source.match(/elements\["graph-edges"\]\.dataset\.hasFocus = String\((.*)\);\n/);
  assert.ok(hasFocus, "The drawing says whether it has one");
  const quiet = (focusId, overview, edges) => vm.runInNewContext(hasFocus[1], { Boolean, focusId, overview, layout: { edges } });
  const line = { source: "a", target: "b" };
  assert.equal(quiet("a", false, [line]), true);
  assert.equal(quiet("b", false, [line]), true, "From either end");
  assert.equal(quiet(null, false, [line]), false, "A subgraph has no focus");
  assert.equal(quiet("a", true, [line]), false, "A case overview draws its relations alike");
  assert.equal(quiet("c", false, [line]), false, "A focus without lines of its own leaves nothing to step back from");
  assert.match(source, /drawLayout\(layout, \{ nodes, edges: relations, info, focusId: null, mode: "subgraph", anchorId, start: true \}\)/, "A subgraph has no focus and keeps one strength");
  assert.match(ruleOf(".graph-edge .edge-hit"), /pointer-events:\s*stroke/, "Quiet lines stay clickable");
});

test("the cause inspector shows a weight only when it has a value", () => {
  assert.doesNotMatch(source, /Not quantified/);
  assert.match(source, /if \(causal && record\.weight !== null && record\.weight !== undefined\) extra\.push\(fact\("Weight", String\(record\.weight\)\)\);/);
});

const tokens = new Map([...styles.match(/:root \{[\s\S]*?\n\}/)[0].matchAll(/--([a-z0-9-]+):\s*(#[0-9a-f]{6})\b/g)].map((match) => [match[1], match[2]]));

function luminance(hex) {
  const channel = (start) => {
    const value = parseInt(hex.slice(start, start + 2), 16) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

function contrast(foreground, background) {
  const [high, low] = [luminance(tokens.get(foreground)), luminance(tokens.get(background))].sort((a, b) => b - a);
  return (high + 0.05) / (low + 0.05);
}

test("text tokens reach 4.5:1 on the surfaces they are used on", () => {
  assert.equal(tokens.get("faint"), "#7d8695");
  const surfaces = {
    faint: ["app", "title", "sidebar", "sidebar-deep", "editor", "input"],
    muted: ["app", "title", "sidebar", "sidebar-deep", "editor", "input", "raised", "raised-2", "hover"],
    text: ["app", "title", "sidebar", "sidebar-deep", "editor", "input", "raised", "raised-2", "hover", "selection"],
    "text-bright": ["app", "title", "sidebar", "sidebar-deep", "editor", "input", "raised", "raised-2", "hover", "selection", "selection-strong"]
  };
  for (const [foreground, backgrounds] of Object.entries(surfaces)) {
    for (const background of backgrounds) {
      assert.ok(contrast(foreground, background) >= 4.5, `--${foreground} on --${background}: ${contrast(foreground, background).toFixed(2)}`);
    }
  }
});

test("surfaces lighter than the panels swap the faint token for one that still reads", () => {
  assert.ok(contrast("faint", "raised") < 4.5 && contrast("faint", "hover") < 4.5, "The swap is still needed");
  const swapped = styles.match(/([^{}]+)\{ --faint: var\(--muted\); \}/);
  assert.ok(swapped, "One rule swaps the token at every lighter surface");
  for (const selector of [".catalog-item:hover", ".tree-row:hover", ".relation-row:hover", ".arising-legend-item", ".graph-node"]) {
    assert.ok(swapped[1].includes(selector), selector);
  }
  assert.doesNotMatch(ruleOf('.role-controls button[aria-pressed="false"]'), /opacity/, "An off toggle stays readable");
});

test("a record's card shows the colour the legend gives its kind, and an arising's card its domain", () => {
  const relation = styles.indexOf('.graph-node[data-relation="child"] {');
  const domain = styles.indexOf(".graph-node[data-domain-index] { --node-color: var(--domain-color); }");
  const kind = styles.indexOf(".graph-node[data-kind] { --node-color: var(--kind-color); }");
  assert.ok(relation !== -1 && relation < domain && domain < kind, "Same specificity: the later rule decides");
  for (const name of ["context", "process", "definition", "hypothesis", "structure", "rule", "other"]) {
    assert.match(styles, new RegExp(`\\[data-kind="${name}"\\] \\{[^}]*--kind-color: var\\(--kind-${name}\\);`));
  }
  assert.match(ruleOf(".graph-node[data-kind] text.node-facts"), /fill: var\(--node-color/);
  assert.match(declaration("cardInfo"), /kind: recordKind\(node\.typeRole\)/);
  assert.doesNotMatch(declaration("cardInfo").split("if (state.ontology)")[0], /kind:/, "An arising's card carries no kind");
});

test("the Names table narrows without scrolling sideways", () => {
  assert.match(ruleOf(".arising-table"), /min-width: 420px/);
  assert.match(declaration("fitArisingMap"), /fitNamesColumns\(\{ \.\.\.state\.tableMap\.names, width: panel\.clientWidth - parseFloat\(padding\.paddingLeft\) - parseFloat\(padding\.paddingRight\) \}\)/);
  assert.match(ruleOf('.arising-grid[data-bands="true"] .arising-table-level'), /grid-column: 1 \/ -1/);
  assert.match(ruleOf('.arising-grid[data-bands="true"] .arising-table-corner'), /display: none/);
});

test("the open filters scroll inside a cap, so the list keeps its rows", () => {
  const rule = /@media \(min-width: 901px\) \{ \.filter-grid \{([^}]*)\}/.exec(styles);
  assert.ok(rule, "On a phone the panel is not limited by the window");
  assert.match(rule[1], /max-height: max\(96px, calc\(100dvh - 570px\)\)/);
  assert.match(rule[1], /overflow-y: auto/);
});

test("the Lens and Case controls and the message take strips above the drawing, whatever is shown", () => {
  assert.match(ruleOf(".stage-panel"), /top: var\(--message-height, 0px\); left: 0; right: 0;/);
  assert.match(ruleOf(".graph-stage"), /padding-top: var\(--message-room\)/);
  const set = {};
  const sync = (messageHidden, lensHidden) => {
    vm.runInNewContext(`${declaration("syncMessageRoom")}\nsyncMessageRoom();`, { elements: {
      "graph-message": { hidden: messageHidden, offsetHeight: 30, parentElement: { style: { setProperty: (name, value) => { set[name] = value; } } } },
      "interaction-view-controls": { hidden: lensHidden, offsetHeight: 39 }
    } });
    return [set["--message-height"], set["--message-room"]];
  };
  assert.deepEqual(sync(true, true), ["0px", "0px"]);
  assert.deepEqual(sync(false, true), ["30px", "30px"]);
  assert.deepEqual(sync(true, false), ["0px", "39px"]);
  assert.deepEqual(sync(false, false), ["30px", "69px"]);
  assert.match(declaration("updateControls"), /elements\["interaction-view-controls"\]\.hidden = [^\n]*\n\s+syncMessageRoom\(\);/, "The strip is there before the drawing fits");
});

test("another record or relation opens at the top of the inspector, the same one keeps the place", () => {
  const body = declaration("renderInspector");
  const run = (selectedId, selectedRelationId, inspectorShown) => {
    const content = { scrollTop: 400 };
    const code = body.slice(body.indexOf("  const shown ="), body.indexOf("  if (state.selectedRelationId && state.graphIndex?.edgesById.has(state.selectedRelationId)) {\n    renderRelationInspector"));
    const sandbox = { state: { selectedId, selectedRelationId, inspectorShown, graphIndex: { edgesById: new Set(["line", "other"]) } }, elements: { "inspector-content": content } };
    vm.runInNewContext(code, sandbox);
    return [content.scrollTop, sandbox.state.inspectorShown];
  };
  assert.deepEqual(run("a", null, "record a"), [400, "record a"]);
  assert.deepEqual(run("b", null, "record a"), [0, "record b"]);
  assert.deepEqual(run("a", "line", "record a"), [0, "relation line"]);
  assert.deepEqual(run("a", "line", "relation line"), [400, "relation line"]);
  assert.deepEqual(run("a", "other", "relation line"), [0, "relation other"]);
  assert.deepEqual(run("a", "gone", "record a"), [400, "record a"], "A relation the release does not hold shows the record");
});

test("a case overview names only the focus's column: it also draws records with no line to the focus", () => {
  assert.match(declaration("drawLayout"), /if \(overview && column\.layer !== 0\) continue;\n\s+const heading = columnHeading\(column\.layer, mode\);/);
});

test("a dialog's heading keeps the room a long model name needs", () => {
  assert.match(styles, /^\.dialog-header, \.import-dialog-header \{ flex: none;/m, "The dialog is a flex column, and its long body must not squeeze the heading");
});

test("a shared stretch lights all its lines and the inspector tells them apart, in Subgraph only", () => {
  const edge = declaration("drawEdge");
  assert.match(edge, /bindGraphHighlight\(group, \{ kind: "edge", id: edge\.id \}, state\.mode === "subgraph" \? \(event\) => highlightLinesAt\(event, edge\) : undefined\);/);
  assert.ok(edge.indexOf("state.lineStretch = lines.length > 1 ? lines : null") < edge.indexOf('group.addEventListener("click", () => inspectRelation(edge.id));'), "The list is ready when the inspector draws");
  assert.match(declaration("highlightLinesAt"), /lines\.length > 1 \? \{ kind: "edges", ids: lines \} : \{ kind: "edge", id: edge\.id \}/);
  assert.match(declaration("renderSubgraph"), /state\.lineStretch = null;/);
  const under = (hits, on) => vm.runInNewContext(`${declaration("linesUnderPointer")}\nlinesUnderPointer({ clientX: 1, clientY: 2 }, on)`, { on, document: { elementsFromPoint: () => hits } });
  const hit = (id) => ({ classList: { contains: (name) => name === "edge-hit" }, parentElement: { dataset: { edgeId: id } } });
  assert.deepEqual([...under([{ classList: { contains: () => false } }, hit("a"), hit("b"), hit("a")], "a")], ["a", "b"]);
  assert.deepEqual([...under([hit("bridge")], "line")], ["line", "bridge"], "The whole pixel the event reports fell just off the clicked line: it still counts, first");
  assert.deepEqual([...under([], "line")], ["line"]);
  assert.match(edge, /const lines = linesUnderPointer\(event, edge\.id\);/);
  assert.match(declaration("highlightLinesAt"), /const lines = linesUnderPointer\(event, edge\.id\);/);
});

test("words the vocabulary defines hold their definitions in the inspector and the guide, never in a graph", () => {
  const header = declaration("renderHeader");
  assert.match(header, /const type = typeRoleDefinition\(state\.vocabulary, node\.typeRole\);/);
  assert.match(header, /chip\.title = type;/);
  assert.match(header, /Technical record \\u00b7 \$\{humanize\(node\.typeRole\)\}/, "A record's kind has no definition in the release, and none is written here");
  assert.match(source, /fact\("Phase", [^\n]*termDefinition\(state\.vocabulary\?\.phases, node\.phase\)/);
  assert.match(source, /chip\.title = termDefinition\(state\.vocabulary\?\.dependencyTypes, edge\.dependencyType\) \?\? "";/);
  assert.match(source, /guideSection\("Types of arising"/);
  assert.doesNotMatch(declaration("drawNodeCard"), /\.title\b|"title"/);
});

