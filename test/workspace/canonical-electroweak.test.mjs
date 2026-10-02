import assert from "node:assert/strict";
import test from "node:test";
import { ELECTROWEAK_ADMISSION, ELECTROWEAK_CHECKS, ELECTROWEAK_ANALYTICAL_SOURCES,
  validateElectroweakContracts } from "../../models/causal-emergence/canonical/electroweak.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}

test("electroweak contracts preserve historical conventions and distinct observation stages", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateElectroweakContracts(context(original));
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  const removeLimit = (d, id, fragment) => {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((s) => !s.includes(fragment));
    assert.ok(c.limitations.length < before);
  };
  const removeEdge = (d, id) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`); };
  for (const [name, mutate] of [
    ["linearized example is not a quantum proof", (d) => removeLimit(d, "D-phys-higgs-abelian-linearization", "no proof of the quantized")],
    ["chosen component is not an observed vacuum", (d) => removeLimit(d, "D-phys-weinberg-electroweak-background", "gauge-invariant order parameter")],
    ["historical normalization stays explicit", (d) => { claim(d, "D-phys-weinberg-electroweak-background").statement = "Use an unspecified nonzero vacuum."; }],
    ["Yukawas remain independent inputs", (d) => removeLimit(d, "D-phys-weinberg-electron-yukawa", "independent inputs")],
    ["diphoton weights do not create samples", (d) => removeLimit(d, "C-phys-atlas2012-diphoton-candidates", "same events")],
    ["WW table and likelihood selections differ", (d) => removeLimit(d, "C-phys-atlas2012-ww-candidates", "Table 5 counts")],
    ["mass channels differ from discovery combination", (d) => removeLimit(d, "C-phys-atlas2012-boson-mass", "only the four-lepton")],
    ["local and global significance differ", (d) => removeLimit(d, "C-phys-atlas2012-combined-excess", "global 5.1")],
    ["earlier imported likelihood inputs remain", (d) => removeLimit(d, "C-phys-atlas2012-combined-excess", "Table 6 includes")],
    ["compatibility is not unique identity", (d) => removeLimit(d, "C-phys-atlas2012-higgs-compatibility", "not by itself a unique")],
    ["selected mass input remains", (d) => removeEdge(d, "atlas2012-diphoton-candidates-atlas2012-boson-mass")],
    ["response is an inference input", (d) => removeEdge(d, "atlas2012-response-context-atlas2012-boson-mass")],
    ["synthetic model input remains", (d) => removeEdge(d, "weinberg-gauge-mass-matrix-electroweak-arithmetic")]
  ]) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateElectroweakContracts(context(copy)), undefined, name);
  }
  assert.ok(!original.graph.relations.some((r) => r.source === "phys:atlas2012-ww-candidates" && r.target === "phys:atlas2012-boson-mass"));
});

test("synthetic electroweak algebra cannot certify ATLAS measurements", async () => {
  assert.deepEqual([...ELECTROWEAK_CHECKS], [["electroweak-mass-algebra", "C-phys-electroweak-arithmetic"]]);
  assert.deepEqual([...ELECTROWEAK_ANALYTICAL_SOURCES], [["C-phys-electroweak-arithmetic", "electroweak-verifier"]]);
  assert.deepEqual(ELECTROWEAK_ADMISSION.localStudySources, [["electroweak-replay", "electroweak-verifier"]]);
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  for (const id of ["C-phys-atlas2012-boson-mass", "C-phys-atlas2012-combined-excess", "C-phys-atlas2012-higgs-compatibility"]) {
    const copy = structuredClone(original);
    copy.graph.claims.find((c) => c.id === id).checkIds = ["electroweak-mass-algebra"];
    assert.throws(() => validateCanonicalSource(copy));
  }
});
