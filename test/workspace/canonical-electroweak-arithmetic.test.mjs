import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location('ew', 'models/causal-emergence/canonical/verify-electroweak.py')
v=importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("electroweak witnesses contain only synthetic parameters and scoped algebra", () => {
  const r = JSON.parse(python("print(v.json.dumps(v.verify()))"));
  assert.equal(r.abelianSyntheticCases, 3);
  assert.equal(r.electroweakSyntheticCases, 3);
  assert.deepEqual(r.neutralNullDirection, ["-gprime", "g"]);
  assert.deepEqual(r.neutralMassiveDirection, ["g", "gprime"]);
  assert.equal(r.backgroundConvention, "<phi>=lambda_W*(1,0)");
  assert.equal(r.cases[0].chargedMassSquared, "9");
  assert.equal(r.cases[0].neutralMassSquared, "25");
  assert.equal(r.cases[0].electronMass, "2/7");
  for (const key of ["inputsAreMeasurements", "modelsIdentifiedWithEachOther", "modernNormalizationSubstituted",
    "quantizedTheoryProved", "vacuumStabilityEstablished", "massHierarchyPredicted", "neutrinoMassGenerated",
    "detectorResponseReplayed", "atlasMassFitReplayed", "atlasSignificanceReplayed", "atlasCovarianceReplayed",
    "higgsIdentityUniquelyEstablished"]) assert.equal(r[key], false);
});

test("independent polynomial differences recover the declared radial Hessian", () => {
  python(`
from fractions import Fraction as F
for a,k,e in [(F(2),F(7,4),F(3,5)),(F(3,7),F(5),F(2,3))]:
 def potential(x,y):return k*(x*x+y*y-a*a)**2/4
 result=v.abelian_masses(a,e,k)
 for h in (F(1,2),F(1,7),F(2,13)):
  even=(potential(0,a+h)+potential(0,a-h)-2*potential(0,a))/(h*h)
  assert even-k*h*h/2==result['radial_squared']
  phase=(potential(h,a)+potential(-h,a)-2*potential(0,a))/(h*h)
  assert phase-k*h*h/2==result['phase_squared']==0
 assert result['vector_squared']==e*e*a*a
 assert potential(0,a)==0 and potential(0,0)>0
# A chosen positive toy potential does not prove the physical vacuum is stable.
assert v.verify()['vacuumStabilityEstablished'] is False
`);
});

test("quadratic forms independently verify the historical neutral sign and normalization", () => {
  python(`
from fractions import Fraction as F
for lam,g,gp in [(F(2),F(3),F(4)),(F(5,3),F(2,7),F(1,9))]:
 m=v.neutral_matrix(lam,g,gp)
 for x,y in [(F(1),F(0)),(F(0),F(1)),(F(2,3),F(-5,7)),(-gp,g)]:
  quadratic=x*x*m[0][0]+2*x*y*m[0][1]+y*y*m[1][1]
  assert quadratic==lam*lam*(g*x+gp*y)**2/4
  assert quadratic>=0
 # Reversing one off-diagonal sign while retaining the declared photon
 # vector is a convention mismatch, not a new physical prediction.
 wrong=((m[0][0],-m[0][1]),(-m[1][0],m[1][1]))
 assert v.matvec(wrong,(-gp,g))!=(0,0)
 assert v.matvec(wrong,(gp,g))==(0,0)
 assert m[0][0]>0 and m[1][1]>0
`);
});

test("free coupling and background scaling do not predict observed masses", () => {
  python(`
from fractions import Fraction as F
lam,ge=F(7,3),F(2,9)
assert v.lepton_mass(lam,ge)==F(14,27)
assert v.lepton_mass(lam,3*ge)==F(14,9)
assert v.lepton_mass(2*lam,ge)==F(28,27)
base=v.neutral_matrix(lam,F(2,5),F(3,7))
scaled=v.neutral_matrix(2*lam,F(2,5),F(3,7))
assert all(scaled[i][j]==4*base[i][j] for i in range(2) for j in range(2))
assert v.verify()['massHierarchyPredicted'] is False
`);
});

test("broken-phase witnesses reject singular, inexact and malformed inputs", () => {
  python(`
for function in [v.abelian_masses,v.neutral_matrix]:
 for args in [(0,1,1),(1,0,1),(1,1,0),(-1,1,1),(True,1,1),(1.0,1,1),('NaN',1,1),('1/0',1,1)]:
  try:function(*args)
  except ValueError:pass
  else:raise AssertionError('invalid witness accepted')
for args in [(1,0),(0,1),(1,False),(1,'Infinity')]:
 try:v.lepton_mass(*args)
 except ValueError:pass
 else:raise AssertionError('invalid Yukawa witness accepted')
`);
});
