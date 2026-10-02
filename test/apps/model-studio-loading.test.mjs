import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");

// Execute the actual app orchestration with controlled network completion and DOM state.
function declaration(name) {
  const match = new RegExp(`^(?:async )?function ${name}\\(`, "m").exec(source);
  assert.ok(match, `Missing app function: ${name}`);
  const remainder = source.slice(match.index + 1);
  const end = remainder.search(/\n(?:async )?function |\nstart\(\)\.catch/);
  assert.ok(end >= 0);
  return source.slice(match.index, match.index + 1 + end);
}

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

const flush = () => new Promise((resolve) => setImmediate(resolve));

function startup() {
  const registry = deferred();
  const initialModel = deferred();
  const listeners = new Map();
  const activations = [];
  const failures = [];
  const fetchSignals = [];
  const current = { modelId: "fixture", version: "current" };
  const older = { modelId: "fixture", version: "older" };
  const state = { registrySnapshot: null, selection: null, presentation: null };
  const location = { hash: "" };
  const context = {
    state, location, URLSearchParams, AbortController,
    MODEL_REGISTRY_URL: "https://example.test/registry.json",
    EXPECTED_REGISTRY_HASH: "registry-pin", DEFAULT_MODEL_SELECTION: current,
    elements: { "model-selector": {}, "load-state": {} },
    document: { body: { dataset: {} } },
    window: { addEventListener: (name, callback) => listeners.set(name, callback) },
    loadModelPackRegistryHttp: () => registry.promise,
    populateRegistrySelector() {},
    requestedRegistryEntry: (entries, parameters, fallback) => entries.find((entry) => entry.version === parameters.get("version")) ?? fallback,
    modelSelectionKey: (entry) => `${entry.modelId}@${entry.version}`,
    resolveModelPackRegistry: (_registry, _url, entry) => ({ ...entry, registryTrust: "hash-pinned" }),
    loadBrowseModel: (resolution, options) => {
      fetchSignals.push(options.signal);
      return resolution.version === "current" ? initialModel.promise : Promise.resolve(null);
    },
    loadVerifiedModelPack: async (resolution, options) => {
      assert.equal(options.signal.aborted, false);
      return { pack: { manifest: { model: { id: resolution.modelId, version: resolution.version } } }, verifier: "worker", cache: "miss" };
    },
    activateModelPack: (pack, options) => {
      activations.push(pack.manifest.model.version);
      state.selection = options.resolution;
      state.presentation = options.browse?.presentation ?? {};
      location.hash = `#model=fixture&version=${pack.manifest.model.version}`;
    },
    displaySwitchError: (error) => failures.push(error),
    selectRegisteredOption() {},
    requestedGraphState: () => ({ focusId: "node", depth: 1, direction: "both" }),
    focusNode() {}
  };
  const app = vm.runInNewContext(`let modelLoadSequence = 0; let pendingModelLoad = null;
    ${declaration("restoreLocationState")}
    ${declaration("openRegisteredModel")}
    ${declaration("start")}
    ({start});`, context);
  const snapshot = { registry: { entries: [current, older] }, registryUrl: "https://example.test/registry.json", registryTrust: "hash-pinned" };
  return { app, registry, snapshot, initialModel, listeners, activations, failures, fetchSignals, location };
}

test("a hash change while the initial graph is loading supersedes that load", async () => {
  const setup = startup();
  const started = setup.app.start();
  assert.equal(typeof setup.listeners.get("hashchange"), "function");
  setup.registry.resolve(setup.snapshot);
  await flush();
  assert.equal(setup.fetchSignals.length, 1);
  setup.location.hash = "#model=fixture&version=older";
  setup.listeners.get("hashchange")();
  await flush();
  assert.equal(setup.fetchSignals[0].aborted, true);
  assert.deepEqual(setup.activations, ["older"]);
  let closed = false;
  setup.initialModel.resolve({
    manifest: { model: { id: "fixture", version: "current" } },
    dictionaries: {}, presentation: {}, close() { closed = true; }
  });
  await started;
  assert.equal(closed, true, "The superseded browsing session must be disposed");
  assert.deepEqual(setup.activations, ["older"]);
  assert.equal(setup.location.hash, "#model=fixture&version=older");
  assert.deepEqual(setup.failures, []);
});

test("a hash change before the registry arrives is read by initial selection", async () => {
  const setup = startup();
  const started = setup.app.start();
  setup.location.hash = "#model=fixture&version=older";
  setup.listeners.get("hashchange")();
  setup.registry.resolve(setup.snapshot);
  await started;
  assert.deepEqual(setup.activations, ["older"]);
  assert.deepEqual(setup.failures, []);
});

function element() {
  return { dataset: {}, children: [], open: false, replaceChildren(...children) { this.children = children; }, addEventListener() {} };
}

function reviewPanel(request) {
  const elements = new Proxy({}, { get: (target, key) => target[key] ??= element() });
  const state = { presentation: {} };
  const rendered = [];
  const configure = vm.runInNewContext(`${declaration("configureReviewPanels")}; configureReviewPanels;`, {
    elements, state,
    renderVocabulary() {}, renderSourceReadiness() {},
    renderSourceReview: (_pack, key, prefix) => {
      rendered.push(key);
      elements[`${prefix}-records`].replaceChildren(element());
    },
    createElement: element
  });
  configure({ files: { "model/dictionaries.json": {} } }, {
    reviews: { physics: { count: 1 } }, review: request
  });
  return { panel: elements["physics-review-panel"], records: elements["physics-review-records"], state, rendered };
}

test("closing a review during its request defers DOM creation until reopening", async () => {
  const pending = deferred();
  const { panel, records, rendered } = reviewPanel(() => pending.promise);
  panel.open = true;
  const loading = panel.ontoggle();
  panel.open = false;
  await panel.ontoggle();
  pending.resolve({ sources: [], physics: { studies: [] } });
  await loading;
  assert.equal(panel.dataset.state, "idle");
  assert.equal(records.children.length, 0);
  assert.deepEqual(rendered, []);
  panel.open = true;
  await panel.ontoggle();
  assert.equal(panel.dataset.state, "ready");
  assert.deepEqual(rendered, ["physics"]);
  assert.equal(records.children.length, 1);
});

test("a closed review suppresses late failure DOM and can retry after reopening", async () => {
  const pending = deferred();
  let attempts = 0;
  const { panel, records, rendered } = reviewPanel(() => ++attempts === 1
    ? pending.promise : Promise.resolve({ sources: [], physics: { studies: [] } }));
  panel.open = true;
  const loading = panel.ontoggle();
  panel.open = false;
  pending.reject(new Error("Failed request"));
  await loading;
  assert.equal(panel.dataset.state, "idle");
  assert.equal(records.children.length, 0);
  panel.open = true;
  await panel.ontoggle();
  assert.equal(panel.dataset.state, "ready");
  assert.deepEqual(rendered, ["physics"]);
});

test("a model switch prevents an earlier review from changing the new panel", async () => {
  const pending = deferred();
  const { panel, records, rendered, state } = reviewPanel(() => pending.promise);
  panel.open = true;
  const loading = panel.ontoggle();
  state.presentation = {};
  pending.resolve({ sources: [], physics: { studies: [] } });
  await loading;
  assert.equal(records.children.length, 0);
  assert.deepEqual(rendered, []);
});
