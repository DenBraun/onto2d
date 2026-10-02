import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { VIRTUAL_PROCESS_CHECKS, VIRTUAL_PROCESS_ANALYTICAL_SOURCES,
  VIRTUAL_PROCESS_ADMISSION, validateVirtualProcessContracts } from "../../models/causal-emergence/canonical/virtual-process.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location('vp','models/causal-emergence/canonical/verify-virtual-process.py')
v=importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("synthetic scattering conserves momentum with spacelike transfer and invariant exchange channels", () => {
  const r = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  assert.deepEqual([r.s, r.t, r.u, r.sPlusTPlusU], ["100", "-36/5", "-144/5", "64"]);
  // Independent integer-scaled four-vectors, metric +---; no production helper.
  const legs = [[25,15,0,0], [25,-15,0,0], [25,9,12,0], [25,-9,-12,0]];
  const metricSquare = (p) => p.reduce((sum, x, i) => sum + (i ? -1 : 1) * x * x, 0);
  for (const p of legs) assert.equal(metricSquare(p), 400);
  const q = legs[0].map((x, i) => x - legs[2][i]);
  assert.equal(metricSquare(q), -180);
  for (let i=0; i<4; i++) assert.equal(legs[0][i]+legs[1][i], legs[2][i]+legs[3][i]);
  assert.equal(r.syntheticBoostChecks, 2);
  for (const key of ["physicalElectronMassInput", "spinorAmplitudeCalculated",
    "loopIntegralOrGaugeCancellationReproduced", "crossSectionOrEventDataReproduced",
    "energyBorrowingInferred", "virtualParticlePopulationMeasured", "allInternalLinesOffShell"]) assert.equal(r[key], false);
});

test("kinematic witness preserves shells in other frames and admits an internal zero-transfer boundary", () => {
  python(`
from fractions import Fraction as F
incoming=[(13,12,0,0),(13,-12,0,0)]
outgoing=[(13,0,12,0),(13,0,-12,0)]
assert v.elastic_invariants(5,incoming,outgoing)==(676,-288,-288)
for velocity,gamma in [(F(3,5),F(5,4)),(F(-3,5),F(5,4))]:
 boosted=[[v.boost_x(p,velocity,gamma) for p in pair] for pair in (incoming,outgoing)]
 assert v.elastic_invariants(5,*boosted)==(676,-288,-288)
 for p in incoming+outgoing:
  assert v.boost_x(v.boost_x(p,velocity,gamma),-velocity,gamma)==p
assert v.elastic_invariants(5,incoming,incoming)[1]==0
`);
});

test("kinematic checks reject nonconservation, false shells and invalid Lorentz data", () => {
  python(`
good=[(5,3,0,0),(5,-3,0,0)]
for args in [(4,good,[(5,0,3,0),(5,0,3,0)]),(3,good,good),
 (4,good,[(5,1,0,0),(5,-1,0,0)]),(4,good,[(-5,3,0,0),(-5,-3,0,0)]),
 (0,good,good),(4,[good[0]],good),(True,good,good)]:
 try:v.elastic_invariants(*args)
 except ValueError:pass
 else:raise AssertionError('invalid kinematics accepted')
for p in [(1,2,3),(1,2,3,4,5),(True,0,0,0),('NaN',0,0,0),'1234']:
 try:v.square(p)
 except ValueError:pass
 else:raise AssertionError('invalid vector accepted')
for velocity,gamma in [(1,1),(2,1),('3/5',1),(0,-1),(0,'NaN')]:
 try:v.boost_x(good[0],velocity,gamma)
 except ValueError:pass
 else:raise AssertionError('invalid boost accepted')
`);
});

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}

test("virtual-process contracts preserve amplitude conventions and bounded local evidence", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateVirtualProcessContracts(context(original));
  const claim = (d,id) => d.graph.claims.find((c) => c.id === id);
  for (const [name,mutate] of [
    ["internal need not be always off shell", (d) => { claim(d,"D-phys-internal-propagator").limitations = []; }],
    ["diagrams combine as amplitudes", (d) => { claim(d,"D-phys-perturbative-amplitude").statement = "Every diagram is an independently measured probability."; }],
    ["external state requires a boundary", (d) => { claim(d,"D-phys-external-scattering-state").limitations = []; }],
    ["local computation does not solve QED", (d) => { claim(d,"C-phys-virtual-process-arithmetic").limitations = []; }],
    ["synthetic context remains", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:virtual-process-replay-context-virtual-process-arithmetic"); }],
    ["local calculation has no journal", (d) => { d.physics.studies.find((s) => s.id === "virtual-process-replay").journal = "Physical Review"; }]
  ]) {
    const copy = structuredClone(original); mutate(copy);
    assert.throws(() => validateVirtualProcessContracts(context(copy)), undefined, name);
  }
});

test("virtual-process finite check belongs only to its local kinematic claim", async () => {
  assert.deepEqual([...VIRTUAL_PROCESS_CHECKS], [["virtual-process-kinematic-algebra", "C-phys-virtual-process-arithmetic"]]);
  assert.deepEqual([...VIRTUAL_PROCESS_ANALYTICAL_SOURCES], [["C-phys-virtual-process-arithmetic", "virtual-process-verifier"]]);
  assert.deepEqual(VIRTUAL_PROCESS_ADMISSION.localStudySources, [["virtual-process-replay", "virtual-process-verifier"]]);
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  for (const id of ["D-phys-internal-propagator", "C-phys-l3-running-difference", "C-phys-fan2023-electron-moment"]) {
    const copy = structuredClone(original), c = copy.graph.claims.find((c) => c.id === id);
    assert.ok(c, id);
    c.checkIds = ["virtual-process-kinematic-algebra"];
    assert.throws(() => validateCanonicalSource(copy));
  }
});
