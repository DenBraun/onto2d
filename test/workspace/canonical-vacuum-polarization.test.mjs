import assert from "node:assert/strict";
import test from "node:test";
import { VACUUM_POLARIZATION_CHECKS, VACUUM_POLARIZATION_ANALYTICAL_SOURCES,
  VACUUM_POLARIZATION_ADMISSION, validateVacuumPolarizationContracts } from "../../models/causal-emergence/canonical/vacuum-polarization.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}

test("L3 normalized-shape contracts preserve acquisition, theory and interpretation boundaries", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateVacuumPolarizationContracts(context(original));
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  const removeLimit = (d, id, text) => {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((line) => !line.includes(text));
    assert.ok(c.limitations.length < before);
  };
  for (const [name, mutate] of [
    ["S zero is nominal running", (d) => { claim(d, "C-phys-l3-running-slope").statement = "The slope measures absolute running, so S=0 is no running."; }],
    ["same shape is not absolute normalization", (d) => removeLimit(d, "C-phys-l3-angular-shape", "luminosity monitor")],
    ["coordinates are not independent events", (d) => removeLimit(d, "C-phys-l3-angular-shape", "Four coordinate")],
    ["material discrepancy is retained", (d) => removeLimit(d, "C-phys-l3-running-slope", "opposite detector sides")],
    ["simulation covariance is retained", (d) => removeLimit(d, "C-phys-l3-running-slope", "fully correlated")],
    ["theory anchor is not measured", (d) => removeLimit(d, "C-phys-l3-running-difference", "lower-scale alpha")],
    ["effective coupling is not virtual population", (d) => removeLimit(d, "C-phys-l3-running-difference", "virtual-particle population")],
    ["same-fit interpretation edge remains", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:l3-running-slope-l3-running-difference"); }],
    ["slope is an input to local algebra", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:l3-running-slope-vacuum-polarization-arithmetic"); }],
    ["local algebra is not original inference", (d) => removeLimit(d, "C-phys-vacuum-polarization-arithmetic", "synthetic bin integrals")],
    ["local result has no journal", (d) => { d.physics.studies.find((s) => s.id === "vacuum-polarization-replay").journal = "Physics Letters B"; }]
  ]) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateVacuumPolarizationContracts(context(copy)), undefined, name);
  }
});

test("finite vacuum-polarization arithmetic cannot certify the published L3 fit", async () => {
  assert.deepEqual([...VACUUM_POLARIZATION_CHECKS], [["vacuum-polarization-shape-algebra", "C-phys-vacuum-polarization-arithmetic"]]);
  assert.deepEqual([...VACUUM_POLARIZATION_ANALYTICAL_SOURCES], [["C-phys-vacuum-polarization-arithmetic", "vacuum-polarization-verifier"]]);
  assert.deepEqual(VACUUM_POLARIZATION_ADMISSION.localStudySources, [["vacuum-polarization-replay", "vacuum-polarization-verifier"]]);
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  for (const id of ["C-phys-l3-angular-shape", "C-phys-l3-running-slope", "C-phys-l3-running-difference"]) {
    const copy = structuredClone(original);
    copy.graph.claims.find((c) => c.id === id).checkIds = ["vacuum-polarization-shape-algebra"];
    assert.throws(() => validateCanonicalSource(copy));
  }
});
