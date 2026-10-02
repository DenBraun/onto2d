import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location('family', 'models/causal-emergence/canonical/verify-hadron-family.py')
v=importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("supplied flavor patterns preserve the two distinct neutral octet states", () => {
  const r = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  assert.deepEqual(r.octetWeights.map((w) => w.charge), ["0", "1", "-1", "0", "1", "0", "-1", "0"]);
  assert.deepEqual(r.decupletWeights.map((w) => w.charge), ["-1", "0", "1", "2", "-1", "0", "1", "-1", "0", "-1"]);
  const central = r.octetWeights.filter((w) => w.i3 === "0" && w.hypercharge === "0");
  assert.deepEqual(central.map((w) => [w.family, w.isospin]), [["Sigma", "1"], ["Lambda", "0"]]);
  assert.equal(r.octetWeightCount, 8);
  assert.equal(r.octetDistinctPositions, 7);
  assert.equal(r.decupletWeightCount, 10);
  assert.deepEqual(r.omegaWeight, { isospin: "0", i3: "0", hypercharge: "-2", strangeness: "-3", charge: "-1" });
  for (const key of ["irreducibleDecompositionProved", "spinSpaceStateConstructed", "inputsAreObservedQuarkCounts",
    "fullHadronStateComputed", "firstOrderBreakingDerived", "measuredOctetRelationFitted", "modernMassComparisonMade",
    "discoveryKinematicFitReplayed", "discoveryCovarianceReplayed", "omegaSpinMeasured",
    "populationLifetimeInferred", "formationOrStabilityProved"]) assert.equal(r[key], false);
});

test("the ten symmetric flavor labels match the adopted decuplet without proving its decomposition", () => {
  python(`
from fractions import Fraction as F
# Independent integer label table: I3=(n_u-n_d)/2 and Y=1-n_s.
labels=[(3,0,0),(2,1,0),(1,2,0),(0,3,0),(2,0,1),
        (1,1,1),(0,2,1),(1,0,2),(0,1,2),(0,0,3)]
expected={(F(u-d,2),F(1-s),F(2*u-d-s,3)) for u,d,s in labels}
_,decuplet=v.baryon_weights()
actual={(w['i3'],w['hypercharge'],w['charge']) for w in decuplet}
assert expected==actual and len(actual)==10
assert v.verify()['irreducibleDecompositionProved'] is False
`);
});

test("the supplied octet relation has explicit linear sensitivity and common-unit invariance", () => {
  python(`
from fractions import Fraction as F
# Synthetic masses in arbitrary common units; no measured spectrum is used.
assert v.octet_mass_residual(10,17,13,15)==0
assert v.supplied_xi_mass(10,13,15)==17
assert v.octet_mass_residual(12,17,13,15)==1
assert v.octet_mass_residual(10,19,13,15)==1
assert v.octet_mass_residual(10,17,15,15)==F(-3,2)
assert v.octet_mass_residual(10,17,13,17)==F(-1,2)
for shift in [F(1,7),F(23,5),F(200)]:
 assert v.octet_mass_residual(10+shift,17+shift,13+shift,15+shift)==0
for scale in [F(1,1000),F(1000),F(7,3)]:
 assert v.octet_mass_residual(12*scale,17*scale,13*scale,15*scale)==scale
`);
});

test("historical equal spacing is not an exact 1680 prediction or a fit to the discovered mass", () => {
  const r = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  const centers = r.historicalMassCentersMeV.map(BigInt);
  assert.deepEqual(r.printedSpacingsMeV, [String(centers[1] - centers[0]), String(centers[2] - centers[1])]);
  assert.equal(BigInt(r.arithmeticContinuationMeV), 2n * centers[2] - centers[1]);
  assert.equal(r.arithmeticContinuationMeV, "1679");
  assert.equal(r.sourceApproximateOmegaMassMeV, "1680");
  assert.equal(r.continuationMinusApproximateMeV, "-1");
  assert.equal(r.syntheticMassRelationChecks, 9);
  python("assert v.equal_spacing(1238,1386,1532)==(v.F(148),v.F(146),v.F(1678))");
});

test("flavor bookkeeping rejects non-quantized isospin and malformed mass inputs", () => {
  python(`
for args in [(-1,0,'x'),('1/3',0,'x'),(True,0,'x'),(1,0,'')]:
 try:v.weights(*args)
 except (AssertionError,ValueError,TypeError):pass
 else:raise AssertionError('invalid multiplet accepted')
for args in [(0,1,1,1),(-1,1,1,1),('NaN',1,1,1),(True,1,1,1)]:
 try:v.octet_mass_residual(*args)
 except (AssertionError,ValueError,TypeError):pass
 else:raise AssertionError('invalid masses accepted')
for args in [(0,1,2),(2,1,3),(1,1,2),(True,2,3)]:
 try:v.equal_spacing(*args)
 except (AssertionError,ValueError,TypeError):pass
 else:raise AssertionError('invalid spacing inputs accepted')
try:v.supplied_xi_mass(100,1,1)
except AssertionError:pass
else:raise AssertionError('negative constructed mass accepted')
`);
});
