import assert from "node:assert/strict";
import test from "node:test";
import { validateNuclearEnergeticsContracts } from "../../models/causal-emergence/canonical/nuclear-energetics.mjs";

test("the local Q witness cannot certify the upstream mass adjustment", async () => {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateCanonicalSource(original);
  const copy = structuredClone(original);
  copy.graph.claims.find((c) => c.id === "C-phys-rau-joint-adjustment").checkIds = ["deuteron-beta-threshold-arithmetic"];
  assert.throws(() => validateCanonicalSource(copy), undefined, "A checked rest-energy difference must not verify an unreproduced input adjustment");
});

test("nuclear energetics contracts preserve specified states, covariance and dependent evidence", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  function context(data) {
    return Object.fromEntries([
      ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
      ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
      ["readiness", data.readiness]
    ]);
  }
  validateNuclearEnergeticsContracts(context(original));
  const claim = (d, id = "C-phys-deuteron-beta-threshold") => d.graph.claims.find((c) => c.id === id);
  function drop(d, fragment) {
    const c = claim(d), before = c.limitations.length;
    c.limitations = c.limitations.filter((line) => !line.includes(fragment));
    assert.ok(c.limitations.length < before, "Mutation must remove an actual scope boundary");
  }
  for (const [name, mutate] of [
    ["one channel becomes permanence", (d) => { claim(d).statement = "The deuteron is stable against every decay forever."; }],
    ["bare states become neutral atoms", (d) => drop(d, "Neutral atoms")],
    ["positive Q guarantees a rate", (d) => drop(d, "nonzero matrix element")],
    ["joint pair becomes independent direct masses", (d) => drop(d, "+0.26")],
    ["adopted constants become new measurements", (d) => drop(d, "external adjustment values")],
    ["capture becomes independent corroboration", (d) => drop(d, "cancels Bd identically")],
    ["rounding interval becomes confidence interval", (d) => drop(d, "display-rounding box")],
    ["partial covariance becomes complete uncertainty", (d) => drop(d, "Electron/reference cross-covariances")],
    ["atomic binding is omitted", (d) => drop(d, "ID-2IH")],
    ["adjusted input relation is dropped", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:rau-joint-adjustment-deuteron-beta-threshold"); }],
    ["binding dependency becomes causal production", (d) => { d.graph.relations.find((r) => r.id === "physics:rau-capture-binding-deuteron-beta-threshold").kind = "causal"; }],
    ["local result becomes published experiment", (d) => { claim(d).status = "publication-supported"; d.physics.studies.find((s) => s.id === "deuteron-beta-energetics").studyType = "primary-experiment"; }],
    ["local study acquires false journal provenance", (d) => { d.physics.studies.find((s) => s.id === "deuteron-beta-energetics").journal = "Nature"; }],
    ["local result loses executable ownership", (d) => { claim(d).checkIds = []; }],
    ["definition gets an experimental witness", (d) => { claim(d, "D-phys-decay-energy-threshold").checkIds = ["deuteron-beta-threshold-arithmetic"]; }]
  ]) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateNuclearEnergeticsContracts(context(copy)), undefined, name);
  }
});
