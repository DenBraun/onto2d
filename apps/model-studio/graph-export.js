/**
 * Turns the drawn graph into a file that stands alone: a copy of the SVG with its
 * styles written on each element, framed by the layout, with no trace of the page.
 * The helpers without a DOM come first; the ones that need a browser follow.
 */

/** The class that holds the paper palette; exports and print both use it. */
export const PAPER_CLASS = "paper-palette";

/** Each property with the value it has when nothing sets it; `opacity` is the only one that does not inherit. */
const STYLE_DEFAULTS = Object.freeze({
  fill: "rgb(0, 0, 0)",
  "fill-opacity": "1",
  stroke: "none",
  "stroke-opacity": "1",
  "stroke-width": "1px",
  "stroke-dasharray": "none",
  "stroke-linecap": "butt",
  "stroke-linejoin": "miter",
  opacity: "1",
  "font-family": "",
  "font-size": "",
  "font-style": "normal",
  "font-weight": "400",
  "letter-spacing": "normal",
  "text-anchor": "start"
});

export const EXPORT_STYLE_PROPERTIES = Object.freeze(Object.keys(STYLE_DEFAULTS));

/** What the file leaves out: lines' wide hit areas and the pills that expand a card. */
export const EXPORT_REMOVED_SELECTOR = ".edge-hit, .graph-pill";

/**
 * The declarations an element needs, given its computed values and its parent's.
 * An inherited value equal to the parent's is left out, which keeps the file small.
 */
export function styleDeclarations(computed, parent = null) {
  const declarations = [];
  for (const [property, initial] of Object.entries(STYLE_DEFAULTS)) {
    const value = computed[property];
    if (!value) continue;
    const unchanged = property === "opacity" || !parent ? initial : parent[property];
    if (value !== unchanged) declarations.push(`${property}:${value}`);
  }
  return declarations.join(";");
}

/** Only drawing attributes stay: no identifiers, states, roles or focus stops reach the file. */
export function keepsAttribute(name) {
  return !(name === "id" || name === "class" || name === "style" || name === "role" || name === "tabindex"
    || name === "title" || name.startsWith("data-") || name.startsWith("aria-"));
}

/** Words of a name for a file name: lower case, joined by hyphens, cut at a word boundary. */
export function fileSlug(text, maxLength = 72) {
  const words = String(text ?? "").normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
  let slug = "";
  for (const word of words) {
    const next = slug ? `${slug}-${word}` : word;
    if (next.length > maxLength) break;
    slug = next;
  }
  return slug || words[0]?.slice(0, maxLength) || "";
}

/** `causal-emergence-chronic-low-grade-inflammation-causes.svg`; a white copy says so, so the two do not collide. */
export function exportFileName({ modelId, focusName, view, format, palette = "dark" }) {
  const parts = [fileSlug(modelId), fileSlug(focusName), fileSlug(view), palette === "white" ? "white" : ""].filter(Boolean);
  return `${parts.join("-") || "graph"}.${format}`;
}

/** The frame of the file: the whole layout, and anything drawn past it (`box` is the measured drawing). */
export function exportFrame(layout, box = null, margin = 8) {
  const left = Math.min(0, box ? box.x - margin : 0);
  const top = Math.min(0, box ? box.y - margin : 0);
  const right = Math.max(layout.width, box ? box.x + box.width + margin : 0);
  const bottom = Math.max(layout.height, box ? box.y + box.height + margin : 0);
  return { x: Math.floor(left), y: Math.floor(top), width: Math.ceil(right - left), height: Math.ceil(bottom - top) };
}

/** The scale of a PNG: twice the drawing, less when a browser could not hold such a canvas. */
export function pngScale(width, height, { scale = 2, maxSide = 16000, maxArea = 120_000_000 } = {}) {
  return Math.min(scale, maxSide / width, maxSide / height, Math.sqrt(maxArea / (width * height)));
}

/**
 * A standalone copy of the drawing. It is styled in a hidden host at the end of the page,
 * so the page's rules apply; the host carries the palette the copy is computed in.
 */
export function buildExportSvg(source, layout, { palette = "dark", ownerDocument = source.ownerDocument } = {}) {
  const view = ownerDocument.defaultView;
  const copy = source.cloneNode(true);
  for (const element of copy.querySelectorAll(EXPORT_REMOVED_SELECTOR)) element.remove();
  // A file shows the drawing itself, not what the reader was pointing at or had selected.
  for (const element of copy.querySelectorAll("[data-highlight], [data-selected]")) {
    element.removeAttribute("data-highlight");
    element.removeAttribute("data-selected");
  }
  // The pan and zoom of the screen stay behind.
  copy.querySelector("#graph-viewport")?.removeAttribute("transform");
  const host = ownerDocument.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.cssText = "position:fixed;left:-100000px;top:0;width:100px;height:100px;overflow:hidden;visibility:hidden";
  if (palette === "white") host.classList.add(PAPER_CLASS);
  host.append(copy);
  ownerDocument.body.append(host);
  let frame;
  let background;
  try {
    frame = exportFrame(layout, copy.getBBox());
    background = view.getComputedStyle(host).getPropertyValue("--editor").trim();
    const values = new Map();
    const elements = [copy, ...copy.querySelectorAll("*")];
    for (const element of elements) {
      const computed = view.getComputedStyle(element);
      const entry = {};
      for (const property of EXPORT_STYLE_PROPERTIES) entry[property] = computed.getPropertyValue(property);
      values.set(element, entry);
      if (computed.getPropertyValue("text-transform") === "uppercase" && element.childElementCount === 0) {
        element.textContent = element.textContent.toUpperCase();
      }
    }
    for (const element of elements) {
      const style = styleDeclarations(values.get(element), values.get(element.parentElement) ?? null);
      for (const { name } of [...element.attributes]) {
        if (!keepsAttribute(name)) element.removeAttribute(name);
      }
      if (style) element.setAttribute("style", style);
    }
  } finally {
    host.remove();
  }
  copy.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  copy.setAttribute("viewBox", `${frame.x} ${frame.y} ${frame.width} ${frame.height}`);
  copy.setAttribute("width", String(frame.width));
  copy.setAttribute("height", String(frame.height));
  const rect = ownerDocument.createElementNS("http://www.w3.org/2000/svg", "rect");
  for (const [name, value] of Object.entries({ x: frame.x, y: frame.y, width: frame.width, height: frame.height, fill: background })) {
    rect.setAttribute(name, String(value));
  }
  copy.prepend(rect);
  return { svg: copy, width: frame.width, height: frame.height };
}

/** Draw serialized SVG on a canvas at the given scale and return it as a PNG blob. */
export async function svgToPngBlob(text, width, height, scale, ownerDocument = document) {
  const image = new ownerDocument.defaultView.Image();
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(text)}`;
  await image.decode();
  const canvas = ownerDocument.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

/** Hand a blob to the browser as a download. */
export function downloadBlob(blob, fileName, ownerDocument = document) {
  const link = ownerDocument.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  ownerDocument.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 10_000);
}
