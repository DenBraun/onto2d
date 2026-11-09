import assert from "node:assert/strict";
import test from "node:test";
import { holdInspectorOpen, inspectorHeldOpen, loadPreferences, savePreference } from "../../apps/model-studio/preferences.js";

const KEY = "onto2d.studio.v1";

function withStorage(storage, run) {
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", { configurable: true, ...storage });
  try {
    run();
  } finally {
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else delete globalThis.localStorage;
  }
}

function memory(initial = {}) {
  const values = new Map(Object.entries(initial));
  return { value: { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), values } };
}

test("a stored preference comes back next to the others", () => {
  const storage = memory();
  withStorage(storage, () => {
    assert.deepEqual(loadPreferences(), {});
    assert.equal(savePreference("tableDensity", "names"), true);
    assert.equal(savePreference("introDismissed", true), true);
    assert.deepEqual(loadPreferences(), { tableDensity: "names", introDismissed: true });
    assert.deepEqual(JSON.parse(storage.value.values.get(KEY)), { tableDensity: "names", introDismissed: true });
  });
});

test("junk in storage reads as no preference and is replaced by the next write", () => {
  for (const junk of ["{not json", "null", "[1,2]", "7", "\"text\""]) {
    const storage = memory({ [KEY]: junk });
    withStorage(storage, () => {
      assert.deepEqual(loadPreferences(), {});
      assert.equal(savePreference("tableColour", "evidence"), true);
      assert.deepEqual(loadPreferences(), { tableColour: "evidence" });
    });
  }
});

test("a hold on the inspector lives in the tab, apart from the preferences", () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, "sessionStorage");
  const set = (descriptor) => Object.defineProperty(globalThis, "sessionStorage", { configurable: true, ...descriptor });
  try {
    const values = new Map();
    set({ value: { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) } });
    assert.equal(inspectorHeldOpen(), false);
    holdInspectorOpen(true);
    assert.equal(inspectorHeldOpen(), true);
    holdInspectorOpen(false);
    assert.equal(inspectorHeldOpen(), false);
    assert.equal(values.size, 0, "A hold that ended leaves nothing behind");
    set({ value: undefined });
    holdInspectorOpen(true);
    assert.equal(inspectorHeldOpen(), false, "Missing storage");
    set({ get() { throw new Error("blocked"); } });
    holdInspectorOpen(true);
    assert.equal(inspectorHeldOpen(), false, "Blocked storage");
  } finally {
    if (original) Object.defineProperty(globalThis, "sessionStorage", original);
    else delete globalThis.sessionStorage;
  }
});

test("missing, blocked or full storage is harmless", () => {
  withStorage({ value: undefined }, () => {
    assert.deepEqual(loadPreferences(), {});
    assert.equal(savePreference("tableDensity", "map"), false);
  });
  withStorage({ get() { throw new Error("blocked"); } }, () => {
    assert.deepEqual(loadPreferences(), {});
    assert.equal(savePreference("tableDensity", "map"), false);
  });
  withStorage({ value: { getItem() { throw new Error("denied"); }, setItem() { throw new Error("full"); } } }, () => {
    assert.deepEqual(loadPreferences(), {});
    assert.equal(savePreference("tableDensity", "map"), false);
  });
});
