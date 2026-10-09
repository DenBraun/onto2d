import assert from "node:assert/strict";
import test from "node:test";
import {
  LEPTON_ELECTRON_ADMISSION,
  LEPTON_ELECTRON_CHECKS,
  LEPTON_ELECTRON_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/lepton-electron.mjs";

let source;
async function data() {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  source ??= await loadCanonicalSource();
  return source;
}
async function rejectChanges(mutations) {
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  for (const [name, change] of mutations) {
    const copy = structuredClone(await data());
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
const claim = (d, suffix, prefix = "C") => d.graph.claims.find((c) => c.id === `${prefix}-phys-borexino2015-electron-${suffix}`);
function replace(d, suffix, from, to, prefix) {
  const c = claim(d, suffix, prefix);
  assert.ok(c.statement.includes(from), "Mutation must change an admitted statement");
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, suffix, fragment, prefix) {
  const c = claim(d, suffix, prefix);
  const before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.equal(c.limitations.length, before - 1);
}

test("electron-decay admission separates acquisition, response and inference without a claimed replay", () => {
  assert.equal(LEPTON_ELECTRON_CHECKS.size, 0);
  assert.equal(LEPTON_ELECTRON_ANALYTICAL_SOURCES.size, 0);
  assert.equal(LEPTON_ELECTRON_ADMISSION.contexts.length, 3);
  assert.equal(LEPTON_ELECTRON_ADMISSION.observations.length, 2);
  assert.deepEqual(LEPTON_ELECTRON_ADMISSION.definitions, []);
  assert.deepEqual(LEPTON_ELECTRON_ADMISSION.localStudySources, []);
});

test("electron radiative-decay bound retains its channel, confidence and statistical distinction", async () => {
  await rejectChanges([
    ["channel lifetime becomes a measured universal lifetime", (d) => replace(d, "decay-limit", "tau(e- -> gamma + nu) >= 6.6e28 yr", "all electrons live exactly 6.6e28 yr")],
    ["confidence level changes", (d) => replace(d, "decay-limit", "90% C.L.", "95% C.L.")],
    ["statistical limit becomes observed decays", (d) => removeLimit(d, "decay-limit", "S=379")],
    ["other decay channels become excluded", (d) => removeLimit(d, "decay-limit", "every electron-disappearance channel")],
    ["the final systematic bound becomes statistical-only", (d) => replace(d, "decay-limit", "7.2e28 yr", "6.6e28 yr")]
  ]);
});

test("electron-decay exposure arithmetic uses full-vessel electrons with global efficiency exactly once", async () => {
  const text = claim(await data(), "decay-limit").statement;
  const count = Number(text.match(/S=([0-9]+) events/)[1]);
  const days = Number(text.match(/T=([0-9]+) d/)[1]);
  const electrons = Number(text.match(/N_e=([0-9.e]+) electrons/)[1]);
  const efficiency = Number(text.match(/efficiency ([0-9.]+) in/)[1]);
  const years = efficiency * electrons * days / (365.25 * count);
  assert.equal(Number(years.toPrecision(2)), 7.2e28);
  // This checks printed-input units and normalization, not the spectral fit.
  assert.ok(Math.abs(years * (75.5 / 278) - 7.2e28) > 5e28, "Fiducial restriction must not be applied twice");
  assert.ok(years > 6.6e28, "The final systematic bound is a separate reported inference");
  await rejectChanges([
    ["full-vessel inventory is replaced by fiducial mass", (d) => replace(d, "decay-limit", "electrons in 278 t", "electrons in 75.5 t")],
    ["efficiency loses the fiducial cut", (d) => removeLimit(d, "decay-limit", "already includes")],
    ["exposure changes", (d) => replace(d, "acquisition-context", "408 live days", "408 calendar years", "M")]
  ]);
});

test("electron-decay spectral display and response remain distinct from observed signal", async () => {
  await rejectChanges([
    ["excluded signal becomes a measured line", (d) => replace(d, "spectrum", "not an observed peak", "an observed peak")],
    ["quenched visible energy becomes the photon energy", (d) => replace(d, "response-context", "220 +/- 0.4 keV", "256 +/- 0.4 keV", "M")],
    ["Figure 1 loses its data/model distinction", (d) => removeLimit(d, "spectrum", "black points")],
    ["simulation gains a measured-instance role", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:borexino2015-electron-response-context").role = "experimental-context";
    }]
  ]);
});

test("electron-decay inference retains external solar inputs and correlated physical-region profiles", async () => {
  await rejectChanges([
    ["external pp constraint is omitted", (d) => removeLimit(d, "inference-context", "radiochemical", "M")],
    ["correlated systematics become a fixed discount", (d) => removeLimit(d, "decay-limit", "fixed 8%")],
    ["negative candidate counts enter the final probability region", (d) => replace(d, "inference-context", "nonnegative signal counts", "all real signal counts", "M")],
    ["spectrum is detached from the inferred limit", (d) => {
      const id = "physics:borexino2015-electron-spectrum-borexino2015-electron-decay-limit";
      assert.ok(d.graph.relations.some((r) => r.id === id));
      d.graph.relations = d.graph.relations.filter((r) => r.id !== id);
    }],
    ["field classification becomes a measured cause of charge violation", (d) => {
      const edge = structuredClone(d.graph.relations.find((r) => r.target === "phys:borexino2015-electron-decay-limit"));
      edge.id = "physics:unreviewed-lepton-electron-decay";
      edge.source = "phys:lepton-fields";
      edge.kind = "functional-support";
      d.graph.relations.push(edge);
    }]
  ]);
});

test("electron-decay cards bind visible text, evidence coordinates and actual source reading", async () => {
  const mutations = [...LEPTON_ELECTRON_ADMISSION.contexts, ...LEPTON_ELECTRON_ADMISSION.observations].flatMap(([short]) => [
    [`${short} cannot display unsupported stability`, (d) => {
      d.graph.entities.find((e) => e.id === `phys:${short}`).description = "Every lepton is eternally stable.";
    }],
    [`${short} cannot borrow an unrelated primary locator`, (d) => {
      d.graph.entities.find((e) => e.id === `phys:${short}`).sourceCoordinates =
        structuredClone(d.graph.entities.find((e) => e.id === "phys:lepton-fields").sourceCoordinates);
    }]
  ]);
  mutations.push(["unread supplementary reconstruction is claimed", (d) => {
    d.graph.sources.find((s) => s.id === "borexino2015-electron-decay").review.limit = "All calibration and response programs independently reconstructed.";
  }]);
  await rejectChanges(mutations);
});
