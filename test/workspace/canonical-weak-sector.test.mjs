import assert from "node:assert/strict";
import test from "node:test";
import {
  WEAK_SECTOR_ADMISSION,
  WEAK_SECTOR_CHECKS,
  WEAK_SECTOR_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/weak-sector.mjs";

test("weak-sector conventions add four definitions without a synthetic measurement or local check", () => {
  assert.equal(WEAK_SECTOR_CHECKS.size, 0);
  assert.equal(WEAK_SECTOR_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(WEAK_SECTOR_ADMISSION.definitions.map(([id]) => id), [
    "phys:weak-gauge-currents", "phys:low-energy-weak-exchange",
    "phys:inclusive-decay-width-branching", "phys:resonance-lifetime-convention"
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(WEAK_SECTOR_ADMISSION[key], [], key);
  const endpoints = WEAK_SECTOR_ADMISSION.formalDependencies.map(([, pair]) => pair);
  for (const from of ["weak-gauge-currents", "higgs-doublet-background", "internal-propagator"])
    assert.ok(endpoints.some(([a, b]) => a === `phys:${from}` && b === "phys:low-energy-weak-exchange"), from);
  assert.ok(endpoints.some(([a, b]) => a === "phys:inclusive-decay-width-branching" && b === "phys:resonance-lifetime-convention"));
});

let source;
async function rejectChanges(mutations) {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  source ??= await loadCanonicalSource();
  for (const [name, change] of mutations) {
    const copy = structuredClone(source);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
const claim = (data, id) => data.graph.claims.find((c) => c.id === `D-phys-${id}`);
function replaceStatement(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), "Mutation must alter a reviewed convention");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, id, fragment) {
  const record = claim(data, id);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.ok(record.limitations.length < before, "Mutation must remove an actual boundary");
}
function removeEdge(data, id) {
  const before = data.graph.relations.length;
  data.graph.relations = data.graph.relations.filter((r) => r.id !== `physics:${id}`);
  assert.equal(data.graph.relations.length, before - 1);
}

test("weak currents preserve charged-current normalization and the restricted tree flavor statement", async () => {
  await rejectChanges([
    ["charged current loses its chiral-projector normalization", (x) => replaceStatement(x, "weak-gauge-currents", "-g/(2*sqrt(2))", "-g/sqrt(2)")],
    ["neutral current gains a tree flavor change", (x) => replaceStatement(x, "weak-gauge-currents", "tree Z current is flavor diagonal", "tree Z current is flavor changing")],
    ["model quantum numbers become spin measurements", (x) => removeLimit(x, "weak-gauge-currents", "not independent spin")],
    ["unstable fields become persistent carrier units", (x) => removeLimit(x, "weak-gauge-currents", "not stable asymptotic")],
    ["current assignment loses its supplied field model", (x) => removeEdge(x, "standard-model-weak-gauge-currents")]
  ]);
});

test("weak contact description retains its small-momentum, amplitude and parameter-input boundaries", async () => {
  await rejectChanges([
    ["contact relation loses the mass-squared suppression", (x) => replaceStatement(x, "low-energy-weak-exchange", "g^2/(8*M_W^2)", "g^2/(8*M_W)")],
    ["contact approximation extends through the resonance", (x) => removeLimit(x, "low-energy-weak-exchange", "away from the resonance")],
    ["formal current becomes a complete nuclear prediction", (x) => removeLimit(x, "low-energy-weak-exchange", "hadronic/nuclear matrix elements")],
    ["Fermi normalization loses the chosen mass relation", (x) => removeEdge(x, "higgs-doublet-background-low-energy-weak-exchange")],
    ["amplitude kernel becomes an observed population", (x) => removeEdge(x, "internal-propagator-low-energy-weak-exchange")]
  ]);
});

test("inclusive widths and pole lifetime retain unit, channel-completeness and energy-pole distinctions", async () => {
  await rejectChanges([
    ["branching fraction is inverted", (x) => replaceStatement(x, "inclusive-decay-width-branching", "B_f=Gamma_f/Gamma_tot", "B_f=Gamma_tot/Gamma_f")],
    ["energy width is silently treated as inverse-time rate", (x) => removeLimit(x, "inclusive-decay-width-branching", "Gamma/hbar")],
    ["selected visible events become a complete partition", (x) => removeLimit(x, "inclusive-decay-width-branching", "selected visible sample")],
    ["energy pole loses its factor of two", (x) => replaceStatement(x, "resonance-lifetime-convention", "M_E-i*Gamma_E/2", "M_E-i*Gamma_E")],
    ["s-plane and energy-plane widths become exactly identical", (x) => removeLimit(x, "resonance-lifetime-convention", "s_R=Mbar^2")],
    ["an inferred timescale becomes directly timed decay", (x) => removeLimit(x, "resonance-lifetime-convention", "directly timed W/Z")],
    ["lifetime loses its energy-width convention", (x) => removeEdge(x, "inclusive-decay-width-branching-resonance-lifetime-convention")]
  ]);
});
