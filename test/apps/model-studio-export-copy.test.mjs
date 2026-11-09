import assert from "node:assert/strict";
import { test } from "node:test";
import vm from "node:vm";
import { buildExportSvg, exportFileName, keepsAttribute, pngScale } from "../../apps/model-studio/graph-export.js";
import { FakeElement, declaration, studio } from "./model-studio-source.mjs";

const DARK = { background: "#101418", ink: "rgb(230, 230, 230)" };
const WHITE = { background: "#ffffff", ink: "rgb(20, 20, 20)" };

/** The drawn graph as the page holds it: full of identifiers, states, hit paths, pills and the reader's pan and zoom. */
function drawing() {
  const card = new FakeElement("g", {
    class: "graph-node", id: "card-1", role: "button", tabindex: "0", title: "arising:5.24", transform: "translate(120 80)",
    "data-node-id": "arising:5.24", "data-selected": "true", "aria-label": "arising:5.24"
  }, [new FakeElement("rect", { width: "200", height: "60", "data-highlight": "true" })]);
  const label = new FakeElement("text", { class: "graph-column-label", x: "120", y: "30", "data-uppercase": "yes" });
  label.textContent = "Causes";
  const edge = new FakeElement("g", { class: "graph-edge", "data-edge-id": "cause:5.24>6.1", "aria-label": "cause:5.24>6.1" }, [
    new FakeElement("path", { class: "edge-hit", d: "M hit" }),
    new FakeElement("path", { class: "edge-line", d: "M line" })
  ]);
  const pill = new FakeElement("g", { class: "graph-pill", "data-pill-for": "arising:5.24" }, [new FakeElement("rect", { class: "pill-mark", width: "24" })]);
  const pan = new FakeElement("g", { id: "graph-viewport", transform: "translate(-300 -40) scale(0.68)" }, [label, edge, card, pill]);
  return new FakeElement("svg", { id: "neighborhood-graph", class: "graph", "aria-label": "Causes of a record", tabindex: "0" }, [pan]);
}

/** A document whose rules read the palette class of the host, as the page's stylesheet does. */
function page(source, box = { x: 0, y: 0, width: 400, height: 200 }) {
  const body = new FakeElement("body");
  const palette = (element) => {
    for (let at = element; at; at = at.parentElement) if (at.classes().includes("paper-palette")) return WHITE;
    return DARK;
  };
  const view = {
    getComputedStyle: (element) => ({
      getPropertyValue(property) {
        if (property === "--editor") return ` ${palette(element).background} `;
        if (property === "text-transform") return element.getAttribute("data-uppercase") ? "uppercase" : "none";
        if (property === "fill") return palette(element).ink;
        if (property === "stroke-width") return element.name === "path" ? "2px" : "1px";
        return "";
      }
    })
  };
  const document = {
    defaultView: view, body,
    createElement: (name) => new FakeElement(name),
    createElementNS: (_namespace, name) => new FakeElement(name)
  };
  source.ownerDocument = document;
  // A clone in this fake knows how big it is once it is in the page.
  const clone = source.cloneNode;
  source.cloneNode = (deep) => {
    const copy = clone.call(source, deep);
    copy.getBBox = () => box;
    return copy;
  };
  return { body, document };
}

const LAYOUT = { width: 400, height: 200 };
const everything = (svg) => [svg, ...svg.descendants()];

test("a saved copy holds drawing attributes only: no identifier, state or role survives", () => {
  const source = drawing();
  const { svg } = buildExportSvg(source, LAYOUT, { ownerDocument: page(source).document });
  for (const element of everything(svg)) {
    for (const { name } of element.attributes) {
      if (name === "style") continue;
      assert.ok(keepsAttribute(name), `${element.name} kept ${name}`);
      assert.ok(!/^(id|class|role|tabindex|title)$|^data-|^aria-/.test(name), `${element.name} kept ${name}`);
    }
  }
  const values = everything(svg).flatMap((element) => [...element.values.values()]).join(" ");
  assert.doesNotMatch(values, /arising:|cause:/, "No record or edge id reaches the file");
});

test("a saved copy is styled as if nothing were selected or pointed at, since the page's rules read those states", () => {
  const source = drawing();
  const { document } = page(source);
  // The stylesheet's rules: a selected card or a highlighted part is drawn in another colour while it carries its state.
  const computed = document.defaultView.getComputedStyle;
  const marked = (element) => {
    for (let at = element; at; at = at.parentElement) if (at.hasAttribute("data-selected") || at.hasAttribute("data-highlight")) return true;
    return false;
  };
  document.defaultView.getComputedStyle = (element) => ({
    getPropertyValue: (property) => (property === "stroke" && marked(element) ? "rgb(255, 200, 0)" : computed(element).getPropertyValue(property))
  });
  const { svg } = buildExportSvg(source, LAYOUT, { ownerDocument: document });
  assert.doesNotMatch(everything(svg).map((element) => element.getAttribute("style") ?? "").join(" "), /rgb\(255, 200, 0\)/);
  assert.equal(source.querySelector(".graph-node").getAttribute("data-selected"), "true", "The page keeps its selection");
});

test("hit areas, pills and the pan and zoom of the screen stay behind; the drawing itself does not", () => {
  const source = drawing();
  const { svg } = buildExportSvg(source, LAYOUT, { ownerDocument: page(source).document });
  const paths = svg.querySelectorAll("path").map((path) => path.getAttribute("d"));
  assert.deepEqual(paths, ["M line"], "The wide hit path is gone, the line is not");
  assert.equal(svg.querySelectorAll("rect").filter((rect) => rect.getAttribute("width") === "24").length, 0, "The pill is gone");
  const [background, pan] = svg.children;
  assert.equal(background.name, "rect");
  assert.equal(pan.getAttribute("transform"), null, "The reader's pan and zoom stay behind");
  assert.equal(pan.querySelector("g[transform]").getAttribute("transform"), "translate(120 80)", "A card keeps its place in the drawing");
});

test("the copy is framed by the layout and carries its background", () => {
  const source = drawing();
  const made = buildExportSvg(source, LAYOUT, { ownerDocument: page(source, { x: -20, y: 0, width: 300, height: 260 }).document });
  const { svg, width, height } = made;
  assert.equal(svg.getAttribute("xmlns"), "http://www.w3.org/2000/svg");
  assert.equal(svg.getAttribute("viewBox"), "-28 -8 428 276", "Everything drawn past the layout is inside the frame");
  assert.deepEqual([svg.getAttribute("width"), svg.getAttribute("height"), width, height], ["428", "276", 428, 276]);
  const rect = svg.children[0];
  assert.deepEqual(["x", "y", "width", "height", "fill"].map((name) => rect.getAttribute(name)), ["-28", "-8", "428", "276", DARK.background]);
});

test("a white copy is computed in the paper palette, and a dark one is not", () => {
  const inked = (palette) => {
    const source = drawing();
    const { svg } = buildExportSvg(source, LAYOUT, { palette, ownerDocument: page(source).document });
    return { background: svg.children[0].getAttribute("fill"), style: svg.getAttribute("style") };
  };
  assert.deepEqual(inked("white"), { background: WHITE.background, style: `fill:${WHITE.ink}` });
  assert.deepEqual(inked("dark"), { background: DARK.background, style: `fill:${DARK.ink}` });
  assert.deepEqual(inked(undefined), inked("dark"));
});

test("each element carries its own styles, and uppercase headings are written out", () => {
  const source = drawing();
  const { svg } = buildExportSvg(source, LAYOUT, { ownerDocument: page(source).document });
  assert.equal(svg.querySelector("path").getAttribute("style"), "stroke-width:2px", "Only what differs from its parent");
  assert.equal(svg.querySelector("text").textContent, "CAUSES");
});

test("making a copy leaves the page as it was", () => {
  const source = drawing();
  const before = JSON.stringify(everything(source).map((element) => [...element.values]));
  const { body, document } = page(source);
  buildExportSvg(source, LAYOUT, { ownerDocument: document });
  assert.equal(JSON.stringify(everything(source).map((element) => [...element.values])), before, "The drawing on screen keeps its ids and its pan");
  assert.equal(body.children.length, 0, "The hidden host has gone");
  const broken = drawing();
  const failing = page(broken);
  const clone = broken.cloneNode;
  broken.cloneNode = (deep) => Object.assign(clone(deep), { getBBox() { throw new Error("no box"); } });
  assert.throws(() => buildExportSvg(broken, LAYOUT, { ownerDocument: failing.document }), /no box/);
  assert.equal(failing.body.children.length, 0, "Also when it fails");
});

/** The Studio's exportGraph over a page that records what reached the reader. */
function exporter({ activeGraphInfo = { layout: LAYOUT }, png = async () => ({ png: true }), mode = "causes" } = {}) {
  const log = { built: [], downloaded: [], menu: [], pngCalls: [] };
  const status = { hidden: true, textContent: "" };
  const run = vm.runInNewContext(`${declaration("exportGraph")}\nexportGraph;`, {
    activeGraphInfo,
    state: { mode, focusId: "arising:5.24", recordFocusId: "record", manifest: { model: { id: "causal-emergence" } } },
    elements: { "neighborhood-graph": "the drawing", "export-status": status },
    buildExportSvg: (source, layout, options) => {
      log.built.push({ source, layout, options });
      return { svg: "the copy", width: 400, height: 200 };
    },
    XMLSerializer: class { serializeToString(svg) { return `<svg>${svg}</svg>`; } },
    nodeSummary: (id) => ({ id, name: id === "record" ? "A record" : "Chronic Inflammation" }),
    displayName: (node) => node.name,
    exportFileName, pngScale,
    Blob: class { constructor(parts, options) { this.parts = parts; this.type = options.type; } },
    svgToPngBlob: (text, width, height, scale) => {
      log.pngCalls.push({ text, width, height, scale });
      return png();
    },
    downloadBlob: (blob, name) => log.downloaded.push({ blob, name }),
    setExportMenu: (open) => log.menu.push(open)
  });
  return { run, log, status };
}

test("Export gives the reader a file named after what is drawn, and closes its menu", async () => {
  const { run, log } = exporter();
  await run("svg", "white");
  assert.deepEqual(log.built.map(({ source, layout, options }) => [source, layout, options.palette]), [["the drawing", LAYOUT, "white"]]);
  const [{ blob, name }] = log.downloaded;
  assert.equal(name, "causal-emergence-chronic-inflammation-causes-white.svg");
  assert.equal(blob.type, "image/svg+xml");
  assert.equal(blob.parts[0], '<?xml version="1.0" encoding="UTF-8"?>\n<svg>the copy</svg>');
  assert.deepEqual(log.menu, [false]);
});

test("a PNG is scaled up, and the Records view is named after its record", async () => {
  const { run, log } = exporter({ mode: "records" });
  await run("png", "dark");
  assert.deepEqual(log.pngCalls.map(({ width, height, scale }) => [width, height, scale]), [[400, 200, pngScale(400, 200)]]);
  assert.equal(pngScale(400, 200), 2);
  assert.deepEqual(log.downloaded.map(({ name }) => name), ["causal-emergence-a-record-records.png"]);
});

test("nothing drawn saves nothing, and a browser that fails says so and keeps the menu", async () => {
  const idle = exporter({ activeGraphInfo: null });
  await idle.run("svg", "dark");
  assert.deepEqual([idle.log.built, idle.log.downloaded], [[], []]);
  const failing = exporter({ png: async () => null });
  await failing.run("png", "dark");
  assert.deepEqual([failing.log.downloaded, failing.log.menu], [[], []]);
  assert.equal(failing.status.hidden, false);
  assert.match(failing.status.textContent, /could not make the image/);
});

test("the Export menu calls it with the format and the palette its button names", () => {
  assert.match(studio, /closest\("button\[data-export-format\]"\);\s+if \(button\) exportGraph\(button\.dataset\.exportFormat, button\.dataset\.exportPalette\);/);
});
