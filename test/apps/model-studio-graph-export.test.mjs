import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  EXPORT_REMOVED_SELECTOR,
  EXPORT_STYLE_PROPERTIES,
  PAPER_CLASS,
  exportFileName,
  exportFrame,
  fileSlug,
  keepsAttribute,
  pngScale,
  styleDeclarations
} from "../../apps/model-studio/graph-export.js";

const css = readFileSync(new URL("../../assets/css/model-studio-workbench.css", import.meta.url), "utf8");

test("file names are built from words", () => {
  assert.equal(
    exportFileName({ modelId: "causal-emergence", focusName: "Chronic Low-Grade Inflammation", view: "causes", format: "svg" }),
    "causal-emergence-chronic-low-grade-inflammation-causes.svg"
  );
  assert.equal(
    exportFileName({ modelId: "causal-emergence", focusName: "Albring 2012, four re-exposures: acquisition context", view: "records", format: "png", palette: "white" }),
    "causal-emergence-albring-2012-four-re-exposures-acquisition-context-records-white.png"
  );
  assert.equal(exportFileName({ modelId: "", focusName: "", view: "", format: "png" }), "graph.png");
});

test("a slug keeps letters of any script, drops marks and stops at a word boundary", () => {
  assert.equal(fileSlug("TNF-α / Café (mTOR)"), "tnf-α-cafe-mtor");
  assert.equal(fileSlug("alpha beta gamma", 10), "alpha beta".replace(" ", "-"));
  assert.equal(fileSlug("averyveryverylongword", 5), "avery");
  assert.equal(fileSlug("..."), "");
  assert.equal(fileSlug(null), "");
});

test("only drawing attributes survive", () => {
  for (const name of ["id", "class", "style", "role", "tabindex", "title", "data-node-id", "data-edge-id", "aria-label", "aria-hidden"]) {
    assert.equal(keepsAttribute(name), false, name);
  }
  for (const name of ["d", "x", "y", "width", "height", "rx", "ry", "transform", "viewBox"]) {
    assert.equal(keepsAttribute(name), true, name);
  }
});

test("the removed parts are the hit paths and the expansion pills", () => {
  assert.deepEqual(EXPORT_REMOVED_SELECTOR.split(", ").sort(), [".edge-hit", ".graph-pill"]);
});

test("styles are written once: inherited values equal to the parent's are left out", () => {
  const blank = Object.fromEntries(EXPORT_STYLE_PROPERTIES.map((name) => [name, ""]));
  const root = { ...blank, fill: "rgb(0, 0, 0)", stroke: "none", opacity: "1", "font-family": "Inter, sans-serif", "font-size": "13px" };
  assert.equal(styleDeclarations(root), "font-family:Inter, sans-serif;font-size:13px");
  assert.equal(styleDeclarations(root, root), "");
  assert.equal(styleDeclarations({ ...root, fill: "rgb(1, 2, 3)" }, root), "fill:rgb(1, 2, 3)");
  // Back to the initial value under a parent that changed it: it must be written.
  assert.equal(styleDeclarations({ ...root, stroke: "none" }, { ...root, stroke: "rgb(9, 9, 9)" }), "stroke:none");
  // Opacity does not inherit, so a parent's value says nothing about the child.
  assert.equal(styleDeclarations({ ...root, opacity: "0.4" }, { ...root, opacity: "0.4" }), "opacity:0.4");
  assert.equal(styleDeclarations({ ...root, opacity: "1" }, { ...root, opacity: "0.4" }), "");
});

test("the frame holds the layout and anything drawn past it", () => {
  assert.deepEqual(exportFrame({ width: 800, height: 600 }), { x: 0, y: 0, width: 800, height: 600 });
  assert.deepEqual(exportFrame({ width: 800, height: 600 }, { x: 40, y: 40, width: 100, height: 100 }), { x: 0, y: 0, width: 800, height: 600 });
  assert.deepEqual(exportFrame({ width: 800, height: 600 }, { x: -20.5, y: 10, width: 830, height: 600 }, 8), { x: -29, y: 0, width: 846, height: 618 });
});

test("a PNG is twice the drawing unless the canvas would be too large", () => {
  assert.equal(pngScale(1200, 800), 2);
  assert.equal(pngScale(10000, 500), 1.6);
  const scale = pngScale(9000, 9000);
  assert.ok(scale * 9000 <= 16000 && (scale * 9000) ** 2 <= 120_000_001);
});

test("the paper palette is defined once and its text colours read on white", () => {
  const blocks = [...css.matchAll(new RegExp(`\\.${PAPER_CLASS}\\s*\\{([^}]*)\\}`, "g"))];
  assert.equal(blocks.length, 1);
  const tokens = Object.fromEntries([...blocks[0][1].matchAll(/(--[\w-]+):\s*(#[0-9a-f]{6})/g)].map((match) => [match[1], match[2]]));
  const luminance = (hex) => {
    const channels = [1, 3, 5].map((start) => Number.parseInt(hex.slice(start, start + 2), 16) / 255)
      .map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };
  const contrast = (a, b) => {
    const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (high + 0.05) / (low + 0.05);
  };
  assert.equal(tokens["--editor"], "#ffffff");
  // Each of these colours text on a card: names, facts, kind labels, stripes and evidence counts.
  const texts = ["--text", "--text-bright", "--muted", "--faint", "--supported", "--evidence-some", "--blue-bright", "--green", "--orange", "--purple",
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((index) => `--domain-${index}`)];
  for (const name of texts) {
    assert.ok(tokens[name], `${name} is defined`);
    assert.ok(contrast(tokens[name], "#ffffff") >= 4.5, `${name} ${tokens[name]} reads on white`);
    assert.ok(contrast(tokens[name], tokens["--raised"]) >= 4.5, `${name} ${tokens[name]} reads on a card`);
    assert.ok(contrast(tokens[name], tokens["--focus-card"]) >= 4.5, `${name} ${tokens[name]} reads on the focus card`);
  }
});

test("the Export control sits in the zoom group, without a title, and offers both formats on both palettes", () => {
  const html = readFileSync(new URL("../../apps/model-studio/index.html", import.meta.url), "utf8");
  const zoom = html.match(/<div id="zoom-controls"[\s\S]*?<\/div>/)[0];
  assert.match(zoom, /<button id="export-toggle"[^>]*>Export<\/button>/);
  const menu = html.match(/<div id="export-menu"[\s\S]*?<\/div>/)[0];
  assert.doesNotMatch(zoom + menu, /\stitle=/);
  for (const format of ["svg", "png"]) {
    for (const palette of ["dark", "white"]) {
      assert.match(menu, new RegExp(`data-export-format="${format}" data-export-palette="${palette}"`));
    }
  }
});

test("the printed page is paper to its edge and carries no dark fill or blurred shadow", () => {
  const print = css.slice(css.indexOf("@media print {"));
  assert.match(print, /:root \{ color-scheme: light; background: #ffffff; \}/);
  // The links layer is measured on screen, so on paper it would misplace its lines and add empty sheets.
  assert.match(print, /\.arising-links[^{]*\{ display: none !important; \}/);
  assert.match(print, /body\[data-mode="table"\] \.graph-legend span:has\(> \.legend-line\) \{ display: none; \}/);
  const fills = css.match(/\.(?:arising-chip|work-row)\[data-(?:selected|link)="[a-z]+"\][^{]*\{[^}]*\}/g);
  assert.ok(fills.length >= 5);
  for (const rule of fills) assert.doesNotMatch(rule, /background: #/);
  assert.match(css, /\.paper-palette \.arising-chip\[data-selected="true"\] \{ box-shadow: 0 0 0 1px var\(--highlight\); \}/);
  assert.match(css, /\.legend-evidence \{ color: var\(--evidence-some\);/);
});

test("short screens get the phone's stage overlays, not only narrow ones", () => {
  const rule = css.match(/@media \(max-width:560px\), \(max-height:500px\) \{([^\n]*)\}\n/);
  assert.ok(rule);
  assert.match(rule[1], /\.graph-minimap\{display:none\}/);
  assert.match(rule[1], /\.stage-legend\{[^}]*max-width:calc\(100% - 78px\)/);
  assert.match(css, /@media \(max-height:500px\) \{ \.zoom-controls\{grid-auto-flow:column\}/);
});

test("print uses the paper palette and the narrow navigator grows with its filters", () => {
  const source = readFileSync(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  assert.match(source, /addEventListener\("beforeprint", preparePrint\)/);
  assert.match(source, /addEventListener\("afterprint", finishPrint\)/);
  assert.match(source, /document\.body\.classList\.add\(PAPER_CLASS\)/);
  assert.match(css, /@media print \{/);
  assert.match(css, /@media \(max-width:900px\) \{[^\n]*\.catalog-panel\{height:auto/);
});
