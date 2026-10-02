import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util,json
from fractions import Fraction as F
from itertools import product
spec=importlib.util.spec_from_file_location('meson','models/causal-emergence/canonical/verify-meson-family.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8", timeout: 10000 });
}

test("meson arithmetic projectors have independent dimension, reconstruction and rotation checks", () => {
  python(`
def transpose(a):return list(map(list,zip(*a)))
def mul(a,b):return [[sum(x*y for x,y in zip(row,col)) for col in zip(*b)] for row in a]
def rank(rows):
    rows=[list(map(F,row)) for row in rows];p=0
    for col in range(len(rows[0])):
        at=next((i for i in range(p,len(rows)) if rows[i][col]),None)
        if at is None:continue
        rows[p],rows[at]=rows[at],rows[p];scale=rows[p][col]
        rows[p]=[v/scale for v in rows[p]]
        for i in range(len(rows)):
            if i!=p:
                scale=rows[i][col];rows[i]=[v-scale*w for v,w in zip(rows[i],rows[p])]
        p+=1
        if p==len(rows):break
    return p
images_s=[];images_o=[]
for i,j in product(range(3),repeat=2):
    a=[[F(r==i and c==j) for c in range(3)] for r in range(3)]
    s,o=m.trace_split(a)
    images_s.append(sum((list(row) for row in s),[]));images_o.append(sum((list(row) for row in o),[]))
    assert sum(s[k][k] for k in range(3))==F(i==j)
    assert sum(o[k][k] for k in range(3))==0
    assert m.trace_split(s)[1]==m.matrix([[0]*3]*3)
    assert m.trace_split(o)[0]==m.matrix([[0]*3]*3)
assert rank(images_s)==1 and rank(images_o)==8
# A nontrivial rational special-orthogonal subgroup element witnesses the
# conjugate action, not a full proof of complex SU(3) irreducibility.
u=[[F(3,5),F(-4,5),0],[F(4,5),F(3,5),0],[0,0,1]]
for a in [[[2,3,4],[-1,5,7],[3,0,-2]],[[0,1,0],[0,0,1],[1,0,0]]]:
    transformed=mul(mul(u,a),transpose(u));s,o=m.trace_split(a)
    st,ot=m.trace_split(transformed)
    assert st==m.matrix(mul(mul(u,s),transpose(u)))
    assert ot==m.matrix(mul(mul(u,o),transpose(u)))
    assert all(s[i][j]+o[i][j]==a[i][j] for i,j in product(range(3),repeat=2))
`);
});

test("meson arithmetic flavor weights retain antiparticle signs and coincident labels", () => {
  python(`
charges={'u':F(2,3),'d':F(-1,3),'s':F(-1,3)}
rows=m.flavor_weights();by_pair={(q,a):(i,y,c) for q,a,i,y,c in rows}
assert len(by_pair)==9
for q,a,i,y,c in rows:
    assert c==charges[q]-charges[a]
    assert by_pair[a,q]==(-i,-y,-c)
zeros=[(q,a) for q,a,i,y,c in rows if i==y==0]
assert set(zeros)=={('u','u'),('d','d'),('s','s')}
assert len({(i,y) for q,a,i,y,c in rows})==7
assert by_pair['u','s']==(F(1,2),F(1),F(1))
assert by_pair['d','s']==(F(-1,2),F(1),F(0))
`);
});

test("meson arithmetic reconstructs only synthetic two-cascade ratios with correct weighting", () => {
  python(`
for w1,w2,e1,e2 in product([F(1,10),F(1,5)],[F(1,20),F(1,4)],[F(1,5),F(2,3)],[F(1,4),F(3,4)]):
    bp=w1+w2;ep=m.mixed_efficiency([w1,w2],[e1,e2])
    assert ep*bp==w1*e1+w2*e2
    assert min(e1,e2)<=ep<=max(e1,e2)
    assert m.mixed_efficiency([w2,w1],[e2,e1])==ep
    ee,fp,fe,be,r=F(2,3),F(9,10),F(4,5),F(3,10),F(7,1000)
    for n in [F(1),F(10000)]:
        # Forward expected signal uses the two explicit branches, not the
        # helper's inverse or its averaged efficiency.
        np=n*r*(w1*e1+w2*e2)*fp;ne=n*be*ee*fe
        assert m.corrected_ratio(np,ne,ep,ee,fp,fe,bp,be,1)==r
        assert m.corrected_ratio(np*3,ne,ep,ee,fp,fe,bp,be,1)==3*r
        assert m.corrected_ratio(np,ne,ep,ee,fp,fe,bp,be,F(19,20))==F(19,20)*r
        swapped=m.corrected_ratio(ne,np,ee,ep,fe,fp,be,bp,1)
        assert swapped*r==1
        if w1!=w2 and e1!=e2:
            naive=(e1+e2)/2
            assert m.corrected_ratio(np,ne,naive,ee,fp,fe,bp,be,1)!=r
`);
});

test("meson arithmetic rejects invalid probabilities, matrices and normalization", () => {
  python(`
def rejects(f):
    try:f()
    except ValueError:return
    raise AssertionError('Invalid meson input accepted')
for bad in [True,'NaN','Infinity',float('inf')]:
    rejects(lambda bad=bad:m.trace_split([[bad,0,0],[0,0,0],[0,0,0]]))
    rejects(lambda bad=bad:m.mixed_efficiency([bad],[1]))
    rejects(lambda bad=bad:m.corrected_ratio(bad,1,1,1,1,1,1,1,1))
for bad in [[],[[1]],[[1,2,3]]*2,[[1,2,3],[1,2],[1,2,3]]]:rejects(lambda bad=bad:m.trace_split(bad))
for ws,es in [([],[]),([0],[1]),([F(3,4),F(3,4)],[1,1]),([1],[]),([-1],[1]),([1],[2])]:
    rejects(lambda ws=ws,es=es:m.mixed_efficiency(ws,es))
for i in range(2,8):
    for bad in [0,-1,F(11,10)]:
        args=[F(1)]*9;args[i]=bad
        rejects(lambda args=args:m.corrected_ratio(*args))
for i in [1,8]:
    args=[1]*9;args[i]=0;rejects(lambda args=args:m.corrected_ratio(*args))
args=[1]*9;args[0]=-1;rejects(lambda:m.corrected_ratio(*args))
assert m.corrected_ratio(0,1,1,1,1,1,1,1,1)==0
`);
});

test("meson arithmetic output keeps reported and synthetic scopes explicit", () => {
  const evidence=JSON.parse(python("print(json.dumps(m.verify()))"));
  assert.equal(evidence.flavorBasisDimension,9);
  assert.equal(evidence.coincidentZeroWeightBasisVectors,3);
  assert.equal(evidence.printedBackgroundTotal,343);
  assert.equal(evidence.printedSelectedCandidates-evidence.printedBackgroundTotal,3407);
  for(const key of ["syntheticInputsAreMeasurements","irreducibilityProved","physicalMixingAngleCalculated",
    "qQbarPopulationMeasured","experimentalRatioReproduced","daughterBranchingInputsReconstructed",
    "eventSelectionOrBackgroundReplayed","covarianceReproduced","gluoniumContentInferred",
    "universalTransitionRelationEstablished"])assert.equal(evidence[key],false,key);
});

let source;
async function rejectChanges(mutations){
  const {loadCanonicalSource,validateCanonicalSource}=await import("../../models/causal-emergence/canonical/source.mjs");
  source??=await loadCanonicalSource();
  for(const [name,change] of mutations){
    const copy=structuredClone(source);change(copy);
    assert.throws(()=>validateCanonicalSource(copy),undefined,name);
  }
}
function removeLimit(data,id,part){
  const c=data.graph.claims.find(x=>x.id===id);const before=c.limitations.length;
  c.limitations=c.limitations.filter(x=>!x.includes(part));
  assert.ok(c.limitations.length<before,"Mutation must remove a reviewed limit");
}

test("meson admission preserves flavor classification and physical mixing boundaries",async()=>{
  await rejectChanges([
    ["flavor becomes color or complete constituents",x=>removeLimit(x,"D-phys-light-meson-nonets","color-SU(3)")],
    ["basis labels become exact physical states",x=>removeLimit(x,"D-phys-meson-isoscalar-mixing","pure octet/singlet")],
    ["shared flavor definition is disconnected",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:light-flavor-su3-light-meson-nonets");}],
    ["conditional model becomes arbitrary necessity",x=>{x.graph.relations.find(r=>r.id==="physics:light-meson-nonets-meson-isoscalar-mixing").kind="functional";}]
  ]);
});

test("meson admission preserves candidates, response, same-acquisition ratio and conditional angle",async()=>{
  await rejectChanges([
    ["selected candidates become corrected yields",x=>removeLimit(x,"C-phys-kloe2007-selected-candidates","background-subtracted")],
    ["daughter branches and interference disappear",x=>removeLimit(x,"C-phys-kloe2007-radiative-ratio","Equation 7")],
    ["partial ratio becomes absolute width",x=>removeLimit(x,"C-phys-kloe2007-radiative-ratio","absolute width")],
    ["zero gluonium becomes a measured result",x=>removeLimit(x,"C-phys-kloe2007-pseudoscalar-angle","assumes zero")],
    ["updated global fit becomes another acquisition",x=>removeLimit(x,"C-phys-kloe2007-pseudoscalar-angle","2009 abstract")],
    ["angle loses reused ratio",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:kloe2007-radiative-ratio-kloe2007-pseudoscalar-angle");}]
  ]);
});

test("meson admission cannot borrow arithmetic status for experimental inference",async()=>{
  await rejectChanges([
    ["ratio borrows local check",x=>{x.graph.claims.find(c=>c.id==="C-phys-kloe2007-radiative-ratio").checkIds=["meson-family-printed-arithmetic"];}],
    ["local result becomes a publication measurement",x=>{x.graph.claims.find(c=>c.id==="C-phys-meson-family-arithmetic").status="publication-supported";}],
    ["local study claims publisher identity",x=>{x.physics.studies.find(s=>s.id==="meson-family-replay").sourceId="kloe2007-meson-ratio";}],
    ["synthetic proof claims a full analysis",x=>removeLimit(x,"C-phys-meson-family-arithmetic","does not prove")]
  ]);
});
