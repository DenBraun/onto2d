import assert from "node:assert/strict";
import { test } from "node:test";
import { declaration, studio } from "./model-studio-source.mjs";

// Where text reaches a reader. An assignment or an object key takes the expression after it, a call the arguments named here, and a node takes any value given to it as text.
const EXPRESSIONS = [/\.(?:title|textContent|placeholder) = /g, /"aria-label": /g, /\bsetAttribute\("(?:title|aria-label)", /g];
const CALLS = {
  createElement: [2],
  "document.createTextNode": [0],
  "messages.push": [0],
  graphMessage: [0],
  emptyStage: [0, 1],
  tag: [0],
  fact: [0, 1],
  actionButton: [0],
  legendItem: [1],
  guideSection: [0],
  guideCard: [0, 1],
  prose: [0],
  proseLine: [0],
  drawExpansionPill: [2],
  // The words on a card of a graph.
  wrappedLines: [0],
  wrapCardLabel: [0],
  fitLine: [0]
};
const CALL = new RegExp(`(?<![\\w.])(${Object.keys(CALLS).join("|").replaceAll(".", "\\.")})\\(`, "g");
const NODE_TEXT = /\.(?:append|prepend|replaceChildren|before|after)\(/g;
// A call that turns an id into words takes its id with it; what is left is what the reader would see raw.
const NAMING = /\b(?:nodeSummary|displayName|interpretationTitle)\((?:[^()]|\([^()]*\))*\)|\w*\??\.get\((?:[^()]|\([^()]*\))*\)/g;
// `.id` alone or changed by a string method still shows the id; `event.target.closest(...)` or `edge.source.name` is something else.
const TAIL = String.raw`(?:(?![?.]*\w)|[?.]+(?:replace|replaceAll|slice|substring|split|trim|toString|toUpperCase|toLowerCase|padStart|padEnd|at|concat)\b)`;
const IDENTIFIER = new RegExp(String.raw`\.(?:id|source|target|cause)\b${TAIL}|\barisingCode\(|\b(?:id|\w+Id)\b${TAIL}`);
// Words for the model itself when the release names nothing else, and a route's key in words when its experiment does not name it. Neither is a record, a claim or a cell.
const ALLOWED = ["manifest.model.name ?? manifest.model.id", "?.name ?? humanize(id)"];

/** The characters of code from a point on, with their bracket depth. A string yields as an empty one, and a template only what stands in its `${}`. */
function* codeOf(source, start = 0) {
  const templates = [];
  let depth = 0;
  let quote = "";
  let template = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (char === "\\" && (quote || template)) index += 1;
    else if (quote) {
      if (char === quote) quote = "";
    } else if (template) {
      if (char === "`") template = false;
      else if (char === "$" && source[index + 1] === "{") {
        yield [index, " ", depth];
        templates.push(depth);
        depth += 1;
        index += 1;
        template = false;
      }
    } else if (char === '"' || char === "'") {
      quote = char;
      yield [index, '""', depth];
    } else if (char === "`") template = true;
    else {
      if ("([{".includes(char)) depth += 1;
      if (")]}".includes(char)) depth -= 1;
      if (char === "}" && templates.at(-1) === depth) {
        templates.pop();
        template = true;
        yield [index, " ", depth];
      } else yield [index, char, depth];
    }
  }
}

/** From a point in code to the end of what stands there, cut at its top-level commas: the arguments of a call, or one expression. */
function pieces(source, start) {
  const found = [];
  let from = start;
  let end = source.length;
  for (const [index, char, depth] of codeOf(source, start)) {
    if (depth < 0 || (depth === 0 && char === ";")) {
      end = index;
      break;
    }
    if (depth === 0 && char === ",") {
      found.push(source.slice(from, index));
      from = index + 1;
    }
  }
  found.push(source.slice(from, end));
  return found.map((piece) => piece.trim());
}

/** What reaches a reader in this code, as `[sink, expression]` pairs. */
function reachingReader(source) {
  const found = [];
  for (const pattern of EXPRESSIONS) {
    for (const match of source.matchAll(pattern)) found.push([match[0].trim(), pieces(source, match.index + match[0].length)[0]]);
  }
  for (const match of source.matchAll(CALL)) {
    const parts = pieces(source, match.index + match[0].length);
    for (const position of CALLS[match[1]]) if (parts[position]) found.push([`${match[1]}()`, parts[position]]);
  }
  // What a call in there builds is judged at the call: `row.append(rowFor(edge.id))` holds an element, not an id.
  for (const match of source.matchAll(NODE_TEXT)) {
    for (const part of pieces(source, match.index + match[0].length)) found.push([match[0].slice(1, -1), heldBy(raw(part))]);
  }
  return found;
}

/** An expression as code, without what never shows: named ids, arrow parameters and what is only compared or tested. */
function raw(expression) {
  const allowed = ALLOWED.reduce((text, part) => text.replaceAll(part, ""), expression);
  return [...codeOf(allowed)].map(([, char]) => char).join("")
    .replace(NAMING, "")
    .replace(/(?:\([^()]*\)|\b\w+) =>/g, "=>")
    .replace(/[\w.?[\]]+\s*[!=]==?\s*[\w.?"[\]]*/g, "")
    .replace(/[\w.?[\]!]+ && /g, "")
    .replace(/[\w.?[\]!]+ \? /g, "");
}

/** A function's block is not what a value holds: `rows.map((row) => { row.dataset.focusId = id; return row; })` is a list of rows. */
function withoutBlocks(value) {
  let text = value;
  for (let at = text.indexOf("=> {"); at !== -1; at = text.indexOf("=> {", at + 4)) {
    let end = at + 3;
    let depth = 0;
    do {
      if (text[end] === "{") depth += 1;
      if (text[end] === "}") depth -= 1;
      end += 1;
    } while (depth > 0 && end < text.length);
    text = `${text.slice(0, at + 4)}${text.slice(end - 1)}`;
  }
  return text;
}

/** Only what a value is, not what it was made from: `leftOut(nodes, focusId)` holds no id, `String(node.id)` and `node.id.slice(8)` do. */
function heldBy(value) {
  let text = withoutBlocks(value);
  for (let before = ""; before !== text;) {
    before = text;
    text = text.replace(/\bString\(([^()]*)\)/g, "$1").replace(/\b(\w+)\([^()]*\)/g, "$1<>");
  }
  return text.replace(/<>/g, "()").replace(/\barisingCode\(\)/g, "arisingCode(");
}

const namedIn = (value, names) => names.some((name) => new RegExp(`\\b${name}\\b${TAIL}`).test(value));

/** A name in this code that holds an id: `const code = node.id;`, also through another such name. */
function identifierNames(source) {
  const names = new Set();
  for (let grown = true; grown;) {
    grown = false;
    for (const match of source.matchAll(/\b(?:const|let) (\w+) = /g)) {
      if (names.has(match[1])) continue;
      const value = heldBy(raw(pieces(source, match.index + match[0].length)[0]));
      if (IDENTIFIER.test(value) || namedIn(value, [...names])) {
        names.add(match[1]);
        grown = true;
      }
    }
  }
  return [...names];
}

/** One function at a time, so a name stands for what it holds there. */
function leaks(source) {
  const found = [];
  const starts = [...source.matchAll(/^(?:async )?function \w+\(/gm)].map((match) => match.index);
  const chunks = [0, ...starts].map((start, index, all) => source.slice(start, all[index + 1]));
  for (const chunk of chunks) {
    const names = identifierNames(chunk);
    for (const [sink, expression] of reachingReader(chunk)) {
      const value = raw(expression);
      if (IDENTIFIER.test(value) || namedIn(value, names)) found.push(`${sink} ${expression}`);
    }
  }
  return found;
}

test("no identifier feeds a title, a label, a heading or a message in the Studio", () => {
  assert.deepEqual(leaks(studio), []);
});

test("the scan sees the ways an identifier could reach a reader", () => {
  for (const line of [
    "chip.title = `${node.id} ${node.name}`;",
    'group.setAttribute("title", node.id);',
    'scale.setAttribute("aria-label", `Causes of ${edge.source}`);',
    'elements["graph-title"].textContent = `Path: ${from.id} to ${to.id}`;',
    'list.append(createElement("small", "work-row-meta", `${item.id}`));',
    'heading.append(createElement("h3", "", arisingCode(node.id)));',
    "messages.push(`Both follow from ${found.cause}.`);",
    'graphMessage([`Nothing joins ${edge.target}.`]);',
    '  "aria-label": `Add ${node.id}`,',
    // Changed by a string method on the way.
    'chip.title = node.id.replace("arising:", "");',
    'chip.title = `${node.id?.slice(8)} ${node.name}`;',
    // Through a helper that writes the text.
    'facts.append(fact("Role", edge.id, { wide: true }));',
    'const chip = tag(edge.id, "muted");',
    'actions.push(actionButton(`Open ${node.id}`, () => {}));',
    // Over several lines.
    'elements["graph-subtitle"].textContent = (causesMode\n  ? [focus.id, humanize(focus.typeRole, null)]\n  : []).filter(Boolean).join(" ");',
    'messages.push(selected\n  ? `Held by ${edge.source}.`\n  : "Nothing is held.");',
    // By another name.
    "const code = node.id;\nchip.title = `${code} ${node.name}`;",
    "const code = node.id;\nconst shown = code;\nchip.title = shown;",
    "function label(id) {\n  chip.title = id;\n}",
    "chip.title = state.selectedId;",
    'chip.title = node.name ? node.id : "";',
    'chip.title = node.name && node.id;',
    // On a card of a graph.
    "const wrapped = wrappedLines(node.id, width, 7.3, 2);",
    "const line = wrapCardLabel(node.id, width);",
    "const line = fitLine(`${node.id}`, width, font);",
    // Given to a node as it is.
    "heading.append(state.selectedId);",
    "row.append(button, badge, edge.id);",
    "list.replaceChildren(`${node.id}`);",
    "const code = node.id;\nrow.prepend(code);",
    "heading.append(document.createTextNode(`Technical record ${node.id}`));",
    "const text = document.createTextNode(state.focusId);"
  ]) {
    assert.equal(leaks(line).length, 1, line);
  }
  for (const line of [
    "chip.title = `${node.name} (${humanize(node.scientificStatus)})`;",
    'elements["graph-title"].textContent = `Path: ${nodeSummary(from).name} to ${nodeSummary(to).name}`;',
    'list.append(createElement("span", "", nodeSummary(item.source)?.name ?? ""));',
    "messages.push(`Both follow from ${nodeSummary(found.cause).name}.`);",
    'row.title = cluster?.name ?? "Arisings without a declared cluster";',
    'count.textContent = table.domains.get(state.domainFilter)?.name;',
    // The text of a string is not code, and a name a function holds in one place says nothing about another.
    'chip.title = "It is the id of the card, it\'s not shown";',
    "function one() {\n  const code = node.id;\n  use(code);\n}\nfunction two(code) {\n  chip.title = code.name;\n}",
    "const code = node.id;\nchip.title = nodeSummary(code).name;",
    "const wrapped = wrappedLines(node.name, width, 7.3, 2);",
    'chip.title = node.id === state.focusId ? "This arising" : "Another arising";',
    'chip.title = node.arisingId && node.name;',
    "const owner = node?.arisingId ? nodeSummary(node.arisingId) : null;\nchip.title = owner;",
    "const left = leftOut(nodes, focusId);\nchip.title = left;",
    'event.target.title = event.target.closest(".row").dataset.label;',
    "row.append(button, badge);",
    "row.append(rowFor(edge.id));",
    "list.replaceChildren(...ids.map((id) => rowFor(id)));",
    "heading.append(document.createTextNode(nodeSummary(id).name));"
  ]) {
    assert.deepEqual(leaks(line), [], line);
  }
});

test("native titles are set only as properties, where the rule on codes can see them", () => {
  assert.doesNotMatch(studio, /setAttribute\("title"/, "Also not on the evidence scale, a level share or a select");
});

test("no card, line or pill of a graph carries a title of any kind", () => {
  for (const name of ["drawNodeCard", "drawEdge", "drawExpansionPill", "drawLayout"]) {
    const body = declaration(name);
    assert.doesNotMatch(body, /\.title\s*=|"title"|\btitle:/, name);
    assert.doesNotMatch(body, /svgElement\("(?:title|desc)"/, name);
  }
});

test("the evidence scale, level shares, empty rows and discipline select stay without native titles", () => {
  const titled = (name) => [...declaration(name).matchAll(/(\w+)\.title = /g)].map((match) => match[1]);
  assert.deepEqual(titled("tableLegend").sort(), ["item", "lineage"], "Only a domain chip and the lineage button; the scale explains itself by its label");
  assert.deepEqual(titled("buildArisingTable"), ["chip"], "Only a chip; a level's share and an empty row do not");
  assert.deepEqual(titled("updateArisingTable"), [], "The discipline select neither");
});
