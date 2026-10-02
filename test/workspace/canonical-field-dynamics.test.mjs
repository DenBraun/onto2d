import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { FIELD_DYNAMICS_CHECKS, FIELD_DYNAMICS_ANALYTICAL_SOURCES,
  FIELD_DYNAMICS_ADMISSION, validateFieldDynamicsContracts } from "../../models/causal-emergence/canonical/field-dynamics.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location('fd','models/causal-emergence/canonical/verify-field-dynamics.py')
v=importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("free-mode witness preserves canonical and energy forms with changing unequal-time correlation", () => {
  const result = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  assert.equal(result.phaseChecks, 10);
  assert.equal(result.compositionAndCommonShiftChecks, 50);
  assert.deepEqual(result.unequalTimeCorrelation, ["3/20", "-1/5"]);
  assert.equal(result.unequalTimeCommutatorImaginaryCoefficient, "-2/5");
  assert.deepEqual([result.equalTimeVariance, result.numberMean, result.energyMean, result.energyVariance],
    ["1/4", "0", "1", "0"]);
  // Independent integer-scaled coefficient calculation: M=[[3,2],[-8,3]]/5,
  // energy metric diag(4,1), vacuum covariance diag(1,4)/4. These are coefficient
  // matrices, not finite quantum operators purporting to obey the CCR.
  const m = [[3, 2], [-8, 3]];
  assert.equal(m[0][0] * m[1][1] - m[0][1] * m[1][0], 25);
  const energyMetric = [4, 1], covariance = [1, 4];
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    assert.equal(m.reduce((sum, row, k) => sum + row[i] * energyMetric[k] * row[j], 0),
      i === j ? 25 * energyMetric[i] : 0);
    assert.equal(m[i].reduce((sum, x, k) => sum + x * covariance[k] * m[j][k], 0),
      i === j ? 25 * covariance[i] : 0);
  }
  for (const key of ["finiteDimensionalCCRRepresentation", "arbitraryTimeNumericalIntegration",
    "continuumLimitConstructed", "spacelikeMicrocausalityProved", "interactingQuantumFieldTheorySolved",
    "particleCreationOrVacuumMaintenanceInferred"]) assert.equal(result[key], false, key);
});

test("free-mode flow has inverse and generator at independent positive-frequency phases", () => {
  python(`
from fractions import Fraction as F
w=F(7,3)
p=(F(-7,25),F(24,25))
assert v.flow(w,p)==((F(-7,25),F(72,175)),(F(-56,25),F(-7,25)))
assert v.flow_derivative(w,p)==((F(-56,25),F(-7,25)),(F(343,225),F(-56,25)))
assert v.multiply(v.flow(w,p),v.flow(w,(p[0],-p[1])))==((1,0),(0,1))
# Phases not used by the production witness, constructed by rational circle parametrization.
for r in [F(3,7),F(-9,4),F(2,11)]:
 q=((1-r*r)/(1+r*r),2*r/(1+r*r))
 expected=(p[0]*q[0]-p[1]*q[1],p[1]*q[0]+p[0]*q[1])
 assert v.multiply(v.flow(w,p),v.flow(w,q))==v.flow(w,expected)
 assert v.commutator_factor(v.flow(w,q))==1
`);
});

test("vacuum moments use untruncated ladder algebra rather than covariance alone", () => {
  python(`
from fractions import Fraction as F
from math import factorial
assert v.vacuum_word('')==1
assert v.vacuum_word('-+')==1
assert v.vacuum_word('+-')==0
assert v.vacuum_word('--++')==2
assert v.vacuum_word('-'*12+'+'*12)==factorial(12)
assert v.vacuum_word('+'*12+'-'*12)==0
assert v.vacuum_word('-++')==0
data=v.vacuum_data(F(3,2))
assert data['covariance']==((F(1,3),0),(0,F(3,4)))
assert data['qp']==(0,F(1,2)) and data['pq']==(0,F(-1,2))
assert data['numberMean']==data['energyVariance']==0
assert data['energyMean']==F(3,4)
`);
});

test("ordered mode correlation is stationary under common shifts but not under changing the time difference", () => {
  python(`
from fractions import Fraction as F
w=F(3,2)
left=(F(5,13),F(12,13)); right=(F(3,5),F(4,5))
# cos(left-right)=63/65, sin(left-right)=16/65, <q(t)q(u)>=exp(-i*w*(t-u))/(2*w).
assert v.correlation(w,left,right)==(F(21,65),F(-16,195))
assert v.correlation(w,right,left)==(F(21,65),F(16,195))
assert v.correlation(w,left,left)==(F(1,3),0)
shift=(F(-7,25),F(24,25))
assert v.correlation(w,v.compose_phase(left,shift),v.compose_phase(right,shift))==v.correlation(w,left,right)
assert v.correlation(w,left,(1,0))!=v.correlation(w,(1,0),(1,0))
`);
});

test("canonical squeeze differs from stationary evolution and attenuation needs an extended model", () => {
  python(`
from fractions import Fraction as F
squeeze=((3,0),(0,F(1,3)))
vacuum=v.vacuum_data(2)['covariance']
assert v.commutator_factor(squeeze)==1
assert v.transform_covariance(squeeze,vacuum)==((F(9,4),0),(0,F(1,9)))
assert v.multiply(v.multiply(v.transpose(squeeze),v.energy_form(2)),squeeze)==((36,0),(0,F(1,9)))
assert v.commutator_factor(((F(2,3),0),(0,F(2,3))))==F(4,9)
assert v.commutator_factor(((0,1),(1,0)))==-1
assert v.commutator_factor(((1,1),(1,1)))==0
`);
});

test("mode algebra rejects zero modes, invalid phases and inexact or malformed coefficient inputs", () => {
  python(`
for w in [0,-1,True,'NaN','Infinity',1.5]:
 for fn in [lambda: v.flow(w,(1,0)),lambda: v.vacuum_data(w),lambda: v.energy_form(w)]:
  try:fn()
  except ValueError:pass
  else:raise AssertionError('invalid frequency accepted')
for p in [(1,1),(0,0),(1,),[1,0,0],'10',(True,0),(1.0,0),('NaN',0)]:
 try:v.flow(2,p)
 except ValueError:pass
 else:raise AssertionError('invalid phase accepted')
for m in [[],[(1,0)],[(1,0),(0,1,2)],'1001',[(True,0),(0,1)],[(1,0),(0,float('inf'))]]:
 try:v.commutator_factor(m)
 except ValueError:pass
 else:raise AssertionError('invalid matrix accepted')
for word in [None,12,[],['+','-'],'a','+-x']:
 try:v.vacuum_word(word)
 except ValueError:pass
 else:raise AssertionError('invalid ladder word accepted')
`);
});

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}

test("field-dynamics canonical contracts keep adopted algebra, source extent and vacuum boundaries explicit", async () => {
  const { loadCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  validateFieldDynamicsContracts(context(original));
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  for (const [name, mutate] of [
    ["quantum model is specified before evolution", (d) => { claim(d, "D-phys-free-field-time-evolution").limitations = []; }],
    ["rational phases do not sample a finite quantum Hilbert space", (d) => { claim(d, "M-phys-field-dynamics-replay-context").statement = "Finite q,p matrices exactly realize the canonical commutator."; }],
    ["stationarity does not suppress unequal-time correlation", (d) => { claim(d, "C-phys-field-dynamics-arithmetic").statement = "Every vacuum correlation is time independent."; }],
    ["squeeze and open-system boundary remain explicit", (d) => { claim(d, "C-phys-field-dynamics-arithmetic").limitations = []; }],
    ["vacuum is an adopted input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:free-field-vacuum-field-dynamics-arithmetic"); }],
    ["context remains computational", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:field-dynamics-replay-context").role = "experimental-context"; }],
    ["no publication metadata for local algebra", (d) => { d.physics.studies.find((s) => s.id === "field-dynamics-replay").journal = "Physical Review"; }],
    ["reading does not expand to interacting QFT", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-free-fields").review.limit = "Complete interacting theory reproduced."; }]
  ]) {
    const copy = structuredClone(original); mutate(copy);
    assert.throws(() => validateFieldDynamicsContracts(context(copy)), undefined, name);
  }
});

test("field-dynamics canonical finite check belongs only to the local oscillator claim", async () => {
  assert.deepEqual([...FIELD_DYNAMICS_CHECKS], [["field-mode-evolution-algebra", "C-phys-field-dynamics-arithmetic"]]);
  assert.deepEqual([...FIELD_DYNAMICS_ANALYTICAL_SOURCES], [["C-phys-field-dynamics-arithmetic", "field-dynamics-verifier"]]);
  assert.deepEqual(FIELD_DYNAMICS_ADMISSION.localStudySources, [["field-dynamics-replay", "field-dynamics-verifier"]]);
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await loadCanonicalSource();
  for (const id of ["D-phys-free-field-time-evolution", "D-phys-free-field-vacuum", "C-phys-l0-bridge"]) {
    const copy = structuredClone(original);
    const c = copy.graph.claims.find((c) => c.id === id);
    assert.ok(c, id);
    c.checkIds = ["field-mode-evolution-algebra"];
    assert.throws(() => validateCanonicalSource(copy));
  }
});
