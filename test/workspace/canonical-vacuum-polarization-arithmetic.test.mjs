import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location('vp', 'models/causal-emergence/canonical/verify-vacuum-polarization.py')
v=importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("the printed alpha deformation agrees with independent scaled-integer arithmetic", () => {
  const result = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  const numerator = 13703599976n * 36n * 415n;
  assert.equal(BigInt(result.inverseDifferenceDeformation.replace(".", "")) * 10n, numerator);
  assert.equal(result.inverseDifferenceDeformation, "0.20473178364144");
  assert.equal(result.syntheticNormalizationChecks, 9);
  assert.equal(result.syntheticNonuniformControls, 3);
  assert.equal(result.zeroSlopeMeansNominalRunning, true);
  for (const key of ["absoluteCouplingMeasured", "publishedRunningDifferenceReproduced",
    "nominalVacuumPolarizationCalculated", "likelihoodOrSignificanceReproduced",
    "detectorResponseOrCovarianceReproduced", "hadronicContributionSeparated", "virtualParticlePopulationMeasured"]) {
    assert.equal(result[key], false);
  }
});

test("normalized shape loses common scale but retains relative-bin and mixture changes", () => {
  python(`
from fractions import Fraction as F
bins=[2,3,7,8]
assert v.normalized_bins(bins)==(F(1,10),F(3,20),F(7,20),F(2,5))
for scale in [F(1,1000),F(3,7),F(1999)]:
 assert v.normalized_bins([scale*x for x in bins])==v.normalized_bins(bins)
assert v.normalized_bins([4,3,7,8])!=v.normalized_bins(bins)
# Rescaling one acquisition before pooling changes the mixture. Per-set
# normalized fractions do not authorize arbitrary common sample weights.
assert v.normalized_bins([9+1,1+9])!=(v.normalized_bins([90+1,10+9]))
assert v.normalized_bins([0,2,0,3])==(F(0),F(2,5),F(0),F(3,5))
`);
});

test("zero fitted slope retains nominal running and the signed spacelike deformation", () => {
  python(`
from fractions import Fraction as F
# Inverting the original alpha denominator independently checks the helper.
alpha0=F(1,137)
for s in [F(-1,1000),F(0),F(1,1000)]:
 for q in [F(-2),F(-5),F(-9)]:
  delta=F(1,50);q0=F(-2)
  alpha=alpha0/(1-delta-s*(q-q0))
  assert v.inverse_alpha(137,delta,s,q,q0)==1/alpha
nominal0=v.inverse_alpha(137,F(1,100),0,-2,-2)
nominal1=v.inverse_alpha(137,F(2,100),0,-5,-2)
assert nominal0!=nominal1
assert v.inverse_difference_shift(137,0,-5,-2)==0
assert v.inverse_difference_shift(137,F(-1,1000),-5,-2)>0
assert v.inverse_difference_shift(137,F(1,1000),-5,-2)<0
assert v.inverse_difference_shift(137,F(-1,1000),-2,-5)<0
`);
});

test("effective-alpha helpers reject invalid normalization, nonfinite inputs and timelike scope", () => {
  python(`
for bins in [[],[1],[-1,2],[0,0],[True,1],['NaN',1],['Infinity',1],'12']:
 try:v.normalized_bins(bins)
 except ValueError:pass
 else:raise AssertionError('invalid bins accepted')
for args in [(0,0,0,-2,-2),(137,1,0,-2,-2),(137,0,0,2,-2),(137,0,0,-2,0),(137,0,True,-2,-2)]:
 try:v.inverse_alpha(*args)
 except ValueError:pass
 else:raise AssertionError('invalid effective coupling accepted')
for args in [(0,0,-2,-2),(137,0,2,-2),(137,'NaN',-2,-2),(137,0,-2,0)]:
 try:v.inverse_difference_shift(*args)
 except ValueError:pass
 else:raise AssertionError('invalid shift arguments accepted')
assert v.exact_decimal(v.Fraction(-1,8))=='-0.125'
assert v.exact_decimal(v.Fraction(1,3))=='1/3'
`);
});
