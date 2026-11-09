/** The Studio's source for tests that run its functions in a vm, and a small fake of the DOM they touch. Not a test file. */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

export const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");
export const studio = read("apps/model-studio/model-studio.js");

/** The release the Studio opens: the one place tests take its version from. */
export const releaseVersion = studio.match(/DEFAULT_MODEL_SELECTION = Object\.freeze\(\{[^}]*version: "([^"]+)"/)[1];

/** A top-level function of the Studio, by name, as far as the next one. */
export function declaration(name) {
  const start = studio.search(new RegExp(`^(?:async )?function ${name}\\(`, "m"));
  assert.notEqual(start, -1, name);
  const end = studio.slice(start + 1).search(/\n(?:\/\*\*[^\n]*\n|\/\*\*\n(?: \*[^\n]*\n)+)?(?:async )?function /);
  return studio.slice(start, end === -1 ? undefined : start + 1 + end);
}

export const declarations = (...names) => names.map(declaration).join("\n");

/** A top-level `const` of the Studio, as source to run. */
export function constant(name) {
  const start = studio.search(new RegExp(`^const ${name} = `, "m"));
  assert.notEqual(start, -1, name);
  const end = studio.indexOf(";\n", start);
  return studio.slice(start, end + 1);
}

const matches = (element, selector) => selector.split(",").map((part) => part.trim()).some((part) => {
  if (part === "*") return true;
  if (/^\.[\w-]+$/.test(part)) return element.classes().includes(part.slice(1));
  if (part.startsWith("#")) return element.getAttribute("id") === part.slice(1);
  const attribute = part.match(/^\[([\w-]+)\]$/);
  if (attribute) return element.hasAttribute(attribute[1]);
  const valued = part.match(/^(?:\.([\w-]+))?\[data-([\w-]+)="([^"]*)"\]$/);
  if (valued) return (!valued[1] || element.classes().includes(valued[1])) && element.dataset[valued[2].replace(/-(\w)/g, (_all, letter) => letter.toUpperCase())] === valued[3];
  const compound = part.match(/^(\w+)\[([\w-]+)\]$/);
  if (compound) return element.name === compound[1] && element.hasAttribute(compound[2]);
  return element.name === part;
});

/** An element with attributes, children and the selectors the Studio uses here: a class, an id, an attribute, a tag, `*` and lists of them. */
export class FakeElement {
  constructor(name, attributes = {}, children = []) {
    this.name = name;
    this.values = new Map(Object.entries(attributes));
    this.childList = [];
    this.parentElement = null;
    this.ownText = "";
    this.dataset = {};
    this.listeners = {};
    this.style = {
      values: new Map(),
      setProperty(key, value) { this.values.set(key, value); },
      removeProperty(key) { this.values.delete(key); }
    };
    this.classList = { add: (name) => this.setAttribute("class", [...this.classes(), name].join(" ")) };
    this.append(...children);
  }
  classes() { return (this.values.get("class") ?? this.className ?? "").split(/\s+/).filter(Boolean); }
  get attributes() { return [...this.values.keys()].map((name) => ({ name })); }
  get children() { return this.childList.filter((child) => child instanceof FakeElement); }
  get childElementCount() { return this.children.length; }
  get textContent() { return this.ownText + this.childList.map((child) => child.textContent ?? String(child)).join(""); }
  set textContent(value) { this.childList = []; this.ownText = String(value); }
  hasAttribute(name) { return this.values.has(name); }
  getAttribute(name) { return this.values.get(name) ?? null; }
  setAttribute(name, value) { this.values.set(name, String(value)); }
  removeAttribute(name) { this.values.delete(name); }
  append(...items) {
    for (const item of items) {
      if (item instanceof FakeElement) { item.remove(); item.parentElement = this; }
      this.childList.push(item);
    }
  }
  prepend(item) {
    item.parentElement = this;
    this.childList.unshift(item);
  }
  replaceChildren(...items) {
    for (const child of this.children) child.parentElement = null;
    this.childList = [];
    this.ownText = "";
    this.append(...items);
  }
  remove() {
    if (!this.parentElement) return;
    this.parentElement.childList = this.parentElement.childList.filter((child) => child !== this);
    this.parentElement = null;
  }
  addEventListener(type, handler) { (this.listeners[type] ??= []).push(handler); }
  fire(type, event = {}) { return Promise.all((this.listeners[type] ?? []).map((handler) => handler(event))); }
  focus() { this.focused = true; }
  scrollIntoView(options) { this.scrolledInto = options; }
  descendants() { return this.children.flatMap((child) => [child, ...child.descendants()]); }
  querySelectorAll(selector) { return this.descendants().filter((element) => matches(element, selector)); }
  querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
  cloneNode(deep) {
    const copy = new FakeElement(this.name, Object.fromEntries(this.values));
    copy.ownText = this.ownText;
    if (deep) copy.append(...this.childList.map((child) => (child instanceof FakeElement ? child.cloneNode(true) : child)));
    return copy;
  }
}
