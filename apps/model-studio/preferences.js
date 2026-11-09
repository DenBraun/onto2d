/**
 * What the Studio remembers for one reader, in one browser. Storage may be missing, blocked,
 * full or hold anything at all: every read then gives no preference and every write is a no-op.
 * Callers check the values they read, because the stored text is not ours once it is on disk.
 */

const STORAGE_KEY = "onto2d.studio.v1";
const INSPECTOR_HOLD_KEY = "onto2d.studio.tab.inspectorOpen";

function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

/** The stored preferences as a plain object; empty when nothing usable is stored. */
export function loadPreferences() {
  try {
    const parsed = JSON.parse(storage()?.getItem(STORAGE_KEY) ?? "null");
    return parsed !== null && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

/** Remember one value next to the others. Returns whether it was stored. */
export function savePreference(key, value) {
  try {
    const store = storage();
    if (!store) return false;
    store.setItem(STORAGE_KEY, JSON.stringify({ ...loadPreferences(), [key]: value }));
    return true;
  } catch {
    return false;
  }
}

/** Whether a link opened the inspector in this tab and the reader has not closed it since. It outlives a reload, and leaves the preference of other tabs and later visits alone. */
export function inspectorHeldOpen() {
  try {
    return globalThis.sessionStorage?.getItem(INSPECTOR_HOLD_KEY) === "true";
  } catch {
    return false;
  }
}

export function holdInspectorOpen(held) {
  try {
    if (held) globalThis.sessionStorage?.setItem(INSPECTOR_HOLD_KEY, "true");
    else globalThis.sessionStorage?.removeItem(INSPECTOR_HOLD_KEY);
  } catch {
    // Without storage the hold lasts until the next reload.
  }
}
