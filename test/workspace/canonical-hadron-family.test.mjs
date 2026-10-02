import assert from "node:assert/strict";
import test from "node:test";
import { HADRON_FAMILY_CHECKS, HADRON_FAMILY_ANALYTICAL_SOURCES,
  HADRON_FAMILY_ADMISSION, validateHadronFamilyContracts } from "../../models/causal-emergence/canonical/hadron-family.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}

test("flavor family contracts preserve approximate symmetry and same-event inference", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateHadronFamilyContracts(context(original));
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  const removeLimit = (d, id, fragment) => {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((line) => !line.includes(fragment));
    assert.ok(c.limitations.length < before);
  };
  for (const [name, mutate] of [
    ["color is not flavor", (d) => removeLimit(d, "D-phys-light-flavor-su3", "local color")],
    ["ground-state permutation restrictions remain", (d) => removeLimit(d, "D-phys-light-baryon-multiplets", "spatially symmetric")],
    ["mass relation remains first order", (d) => { claim(d, "D-phys-baryon-octet-mass-relation").statement = "All octet masses obey this relation exactly."; }],
    ["spin remains a prediction", (d) => removeLimit(d, "C-phys-barnes1964-omega", "not a modern fitted")],
    ["one event is not a lifetime fit", (d) => removeLimit(d, "C-phys-barnes1964-omega", "ensemble mean lifetime")],
    ["mass systematic limit remains", (d) => removeLimit(d, "C-phys-barnes1964-omega", "deferring a detailed mass")],
    ["cascade is not an independent acquisition", (d) => removeLimit(d, "C-phys-barnes1964-cascade", "not independent replications")],
    ["same-event input dependency remains", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:barnes1964-tracks-barnes1964-omega"); }],
    ["hypothesis remains distinct from reconstruction", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:omega-decuplet-expectation-barnes1964-omega"); }],
    ["local spacing retains its historical input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:omega-decuplet-expectation-hadron-family-arithmetic"); }],
    ["archival locators do not become publisher-page claims", (d) => { d.graph.sources.find((s) => s.id === "barnes1964-omega").review.extent = "full-primary-publisher-report"; }]
  ]) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateHadronFamilyContracts(context(copy)), undefined, name);
  }
});

test("finite flavor algebra cannot certify a measured cascade or Omega identification", async () => {
  assert.deepEqual([...HADRON_FAMILY_CHECKS], [["hadron-family-flavor-algebra", "C-phys-hadron-family-arithmetic"]]);
  assert.deepEqual([...HADRON_FAMILY_ANALYTICAL_SOURCES], [["C-phys-hadron-family-arithmetic", "hadron-family-verifier"]]);
  assert.deepEqual(HADRON_FAMILY_ADMISSION.localStudySources, [["hadron-family-replay", "hadron-family-verifier"]]);
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  for (const id of ["C-phys-barnes1964-tracks", "C-phys-barnes1964-cascade", "C-phys-barnes1964-omega"]) {
    const copy = structuredClone(original);
    copy.graph.claims.find((c) => c.id === id).checkIds = ["hadron-family-flavor-algebra"];
    assert.throws(() => validateCanonicalSource(copy));
  }
});
