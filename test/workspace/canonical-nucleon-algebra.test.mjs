import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("algebra", "models/causal-emergence/canonical/verify-nucleon-algebra.py")
a=importlib.util.module_from_spec(spec)
spec.loader.exec_module(a)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("nucleon algebra preserves net charges across different basis occupations", () => {
  const result = JSON.parse(python("print(a.json.dumps(a.verify()))"));
  assert.deepEqual(result.samples.map((s) => [s.chargeInE, s.baryonNumber]), [["1", "1"], ["0", "1"]]);
  assert.deepEqual(result.samples.map((s) => s.compatibleBookkeepingCounts), [[3, 4, 5], [3, 4, 5]]);
  assert.equal(result.pairInsertionChecks, 12);
  assert.equal(result.gluonInsertionChecks, 2);
  assert.equal(result.determinantTensorComponents, 27);
  assert.equal(result.epsilonSquaredNorm, 6);
  for (const key of ["qcdEigenproblemSolved", "fockCoefficientsCalculated", "particlePopulationMeasured",
    "confinementProven", "formationRuleEstablished", "lifetimePredicted", "trialityZeroSufficientForArbitraryRepresentations"]) {
    assert.equal(result[key], false);
  }
});

test("the tensor polynomial agrees with independent matrix elimination and orientation controls", () => {
  python(`
from fractions import Fraction as F
from itertools import product
def determinant(matrix):
 rows=[[F(x) for x in matrix[i:i+3]] for i in (0,3,6)]
 result=F(1)
 for col in range(3):
  pivot=next((r for r in range(col,3) if rows[r][col]),None)
  if pivot is None:return F(0)
  if pivot!=col:rows[col],rows[pivot]=rows[pivot],rows[col];result=-result
  scale=rows[col][col];result*=scale
  rows[col]=[x/scale for x in rows[col]]
  for r in range(col+1,3):
   factor=rows[r][col]
   rows[r]=[x-factor*y for x,y in zip(rows[r],rows[col])]
 return result
eps={(0,1,2):1,(1,2,0):1,(2,0,1):1,(2,1,0):-1,(1,0,2):-1,(0,2,1):-1}
matrices=[
 [1,0,0,0,1,0,0,0,1],
 [F(3,5),-F(4,5),0,F(4,5),F(3,5),0,0,0,1],
 [0,1,0,1,0,0,0,0,1],
 [2,0,0,0,3,0,0,0,5],
 [1,2,3,4,5,6,7,8,9],
 [1,-2,3,5,7,11,13,17,19]]
for matrix in matrices:
 det=determinant(matrix)
 assert a.evaluate(a.determinant_polynomial(),matrix)==det
 for indices in product(range(3),repeat=3):
  assert a.evaluate(a.transformed_epsilon(indices),matrix)==det*eps.get(indices,0)
assert determinant(matrices[1])==1
assert determinant(matrices[2])==-1
assert determinant(matrices[3])==30
assert determinant(matrices[4])==0
`);
});

test("color triality distinguishes quarks from antiquarks and does not certify arbitrary singlets", () => {
  python(`
def multiply(x,y):
 # Independent reduction modulo z*z+z+1.
 return (x[0]*y[0]-x[1]*y[1], x[0]*y[1]+x[1]*y[0]-x[1]*y[1])
for nq in range(8):
 for na in range(8):
  phase=(1,0)
  for _ in range(nq):phase=multiply(phase,(0,1))
  for _ in range(na):phase=multiply(phase,(-1,-1))
  assert a.center_factor(nq,na)==phase
assert a.center_factor(1,0)!=(1,0)
assert a.center_factor(2,0)!=(1,0)
assert a.center_factor(3,0)==(1,0)
assert a.center_factor(1,1)==(1,0)
# The same triality for no fundamental factors gives no sufficiency theorem
# for an adjoint representation: no gluon singlet is inferred by this helper.
assert a.center_factor(0,0)==(1,0)
assert a.verify()['trialityZeroSufficientForArbitraryRepresentations'] is False
`);
});

test("charge conjugation, flavor changes and invalid populations retain their domains", () => {
  python(`
from fractions import Fraction as F
anti=a.quantum_numbers({'anti-u':2,'anti-d':1,'g':7})
assert anti['charge']==-1 and anti['baryon']==-1 and anti['basisQuanta']==10
strange=a.quantum_numbers({'u':2,'s':1})
proton=a.quantum_numbers({'u':2,'d':1})
assert strange['charge']==proton['charge'] and strange['baryon']==proton['baryon']
assert strange['netFlavor']!=proton['netFlavor']
# Equal charge and baryon number alone do not uniquely identify a nucleon.
assert a.quantum_numbers({'u':1})['charge']==F(2,3)
for bad in [{'u':-1},{'u':1.5},{'u':True},{'u':1000001},{'U':2},['u']]:
 try:a.quantum_numbers(bad)
 except ValueError:pass
 else:raise AssertionError('invalid occupation accepted')
for args in [(-1,0),(True,0),(0,1.5)]:
 try:a.center_factor(*args)
 except ValueError:pass
 else:raise AssertionError('invalid triality count accepted')
`);
});

test("nucleon graph contracts reject empirical promotion and ambiguous counting", async () => {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const data = await loadCanonicalSource();
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  const mutations = [
    (d) => { claim(d, "C-phys-nucleon-algebra").status = "publication-supported"; },
    (d) => { claim(d, "D-phys-nucleon-valence-numbers").statement = "A proton consists of exactly three particles."; },
    (d) => { claim(d, "D-phys-fundamental-color-singlet").limitations = ["Three is a universal physical minimum."]; },
    (d) => { claim(d, "D-phys-nucleon-fock-expansion").checkIds = ["nucleon-charge-color-algebra"]; },
    (d) => { claim(d, "C-phys-nucleon-algebra").citations = claim(d, "C-phys-nucleon-algebra").citations.filter((c) => c.sourceId !== "nucleon-algebra-verifier"); },
    (d) => { d.physics.studies.find((s) => s.id === "nucleon-algebra").studyType = "primary-experiment"; },
    (d) => { d.physics.studies.find((s) => s.id === "nucleon-algebra").journal = "Invented experimental journal"; },
    (d) => { d.graph.relations.find((r) => r.id === "physics:fundamental-color-singlet-nucleon-algebra").kind = "functional"; },
  ];
  for (const mutate of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed));
  }
});
