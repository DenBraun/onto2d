import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util,json
from decimal import Decimal as D,getcontext
from fractions import Fraction as F
from itertools import product,permutations
getcontext().prec=60
spec=importlib.util.spec_from_file_location('pion','models/causal-emergence/canonical/verify-pion-decay.py')
p=importlib.util.module_from_spec(spec)
spec.loader.exec_module(p)
def close(a,b):
    assert abs(a-b)<=D('1e-50')*max(D(1),abs(b)),(a,b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8", timeout: 10000 });
}

test("pion arithmetic retains exact factor direction and the ratio coefficient unit", () => {
  python(`
raw=D('1.1972');factors=list(map(D,['.9991','1.0316','1.0004']))
expected=F(raw)
for factor in factors:expected*=F(factor)
for order in permutations(factors):
    assert F(p.corrected_ratio(raw,order))==expected
    assert p.corrected_ratio(raw,order).quantize(D('.0001'))==D('1.2344')
for scale in map(D,['.0001','1','1000']):
    assert F(p.corrected_ratio(raw*scale,factors))==expected*F(scale)
# A multiplicative tail above one restores lost signal; dividing instead
# changes the observable rather than reproducing the reported correction.
wrong=p.corrected_ratio(raw,[factors[0],1/factors[1],factors[2]])
assert wrong<raw<p.corrected_ratio(raw,factors)
assert p.corrected_ratio(D(0),factors)==0
`);
});

test("pion arithmetic display bounds match independent rational corner extrema", () => {
  python(`
values=list(map(D,['1.1972','.9991','1.0316','1.0004']))
steps=[D('.00005')]*4
lo,hi=p.product_rounding_box(values,steps)
corners=[]
for signs in product((-1,1),repeat=4):
    r=F(1)
    for value,step,sign in zip(values,steps,signs):r*=F(value)+sign*F(step)
    corners.append(r)
assert F(lo)==min(corners) and F(hi)==max(corners)
assert F(lo)<F('1.2344')<F(hi)
# A simultaneous zero-width box is exactly the unrounded central product.
assert p.product_rounding_box(values,[D(0)]*4)==(p.corrected_ratio(values[0],values[1:]),)*2
for scale in map(D,['.0001','100']):
    changed=values.copy();changed[0]*=scale
    hs=steps.copy();hs[0]*=scale
    assert p.product_rounding_box(changed,hs)==(lo*scale,hi*scale)
`);
});

test("pion arithmetic forward counts cancel common exposure but retain efficiency and unequal-exposure bias", () => {
  python(`
for be,bm,ee,em,n in product(map(F,['.0001','.03']),map(F,['.6','.9']),map(F,['.2','.8']),map(F,['.4','1']),[F(10),F(100000)]):
    def dec(v):return D(v.numerator)/D(v.denominator)
    electronic,muonic=be*ee*n,bm*em*n
    recovered=p.efficiency_ratio(dec(electronic),dec(muonic),dec(ee),dec(em))
    close(recovered,dec(be/bm))
    close(p.efficiency_ratio(dec(electronic*13),dec(muonic*13),dec(ee),dec(em)),recovered)
    close(p.efficiency_ratio(dec(electronic*2),dec(muonic),dec(ee),dec(em)),2*recovered)
    if ee!=em:assert dec(electronic/muonic)!=recovered
    # Swapping the channel definitions reciprocates a nonzero ratio.
    close(p.efficiency_ratio(dec(muonic),dec(electronic),dec(em),dec(ee))*recovered,D(1))
assert p.efficiency_ratio(D(0),D(1),D('.3'),D('.5'))==0
`);
});

test("pion arithmetic distinguishes a measured ratio from an absolute channel probability", () => {
  python(`
for ratio in map(D,['0','.00012344','.1','2']):
    allocations=[]
    for mu in map(D,['.1','.2','.3']):
        e,m,other=p.partial_fraction_pair(ratio,mu)
        assert m==mu and e+m+other==1 and e/m==ratio
        allocations.append((e,m,other))
    if ratio>0:assert len({e for e,m,other in allocations})==3
    assert len({other for e,m,other in allocations})==3
    # R/(1+R) is available only after imposing zero residual probability.
    exact_mu=1/(1+F(ratio))
    assert F(ratio)*exact_mu+exact_mu==1
`);
});

test("pion arithmetic fails closed on invalid rates, efficiencies and rounding domains", () => {
  python(`
def rejects(f):
    try:f()
    except (AssertionError,TypeError):return
    raise AssertionError('Invalid pion-ratio input admitted')
for bad in [D('NaN'),D('Infinity'),D('-1'),True,1,'1']:
    rejects(lambda bad=bad:p.corrected_ratio(bad,[D(1)]))
    rejects(lambda bad=bad:p.corrected_ratio(D(1),[bad]))
    rejects(lambda bad=bad:p.efficiency_ratio(bad,D(1),D('.5'),D('.5')))
    rejects(lambda bad=bad:p.partial_fraction_pair(bad,D('.5')))
    rejects(lambda bad=bad:p.product_rounding_box([D(1)],[bad]))
for bad in map(D,['0','1.1']):
    rejects(lambda bad=bad:p.efficiency_ratio(D(1),D(1),bad,D('.5')))
    rejects(lambda bad=bad:p.efficiency_ratio(D(1),D(1),D('.5'),bad))
rejects(lambda:p.corrected_ratio(D(1),[]))
rejects(lambda:p.corrected_ratio(D(1),[D(0)]))
rejects(lambda:p.efficiency_ratio(D(1),D(0),D('.5'),D('.5')))
rejects(lambda:p.partial_fraction_pair(D(2),D('.9')))
rejects(lambda:p.partial_fraction_pair(D(0),D(0)))
rejects(lambda:p.product_rounding_box([],[]))
rejects(lambda:p.product_rounding_box([D(1)],[]))
rejects(lambda:p.product_rounding_box([D(1)],[D(1)]))
`);
});

test("pion arithmetic evidence separates every reported input from unperformed experimental replay", () => {
  const evidence=JSON.parse(python("print(json.dumps(p.verify()))"));
  assert.equal(evidence.checkId,"pion-decay-printed-arithmetic");
  assert.equal(evidence.correctedCoefficient,"1.2344135596286528");
  assert.equal(evidence.ratioCoefficientUnit,"1e-4");
  assert.equal(evidence.centralRoundsToReported,true);
  assert.equal(evidence.syntheticEfficiencyWitnesses,32);
  for(const key of ["roundingBoxIsConfidenceInterval","unequalExposureCancels","absoluteBranchingFractionIdentified",
    "syntheticInputsAreMeasurements","rawAcquisitionReplayed","timingFitReplayed","calorimeterResponseReplayed",
    "empiricalTailBoundsCombined","correctionUncertaintiesReproduced","fullCovarianceReproduced",
    "pionOrMuonLifetimeMeasured","universalityFitReplayed"])assert.equal(evidence[key],false,key);
  assert.deepEqual(evidence.table.corrected,["1.2344","0.0023","0.0019"]);
  assert.match(evidence.limit,/uncertainties remain source inputs/);
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
  assert.ok(c.limitations.length<before,"Mutation must remove an existing reviewed limit");
}

test("pion admission preserves radiative inclusion, partial-rate meaning and detector-level spectra",async()=>{
  await rejectChanges([
    ["partial ratio becomes absolute probability",x=>removeLimit(x,"D-phys-pion-inclusive-decay-ratio","absolute branching fraction")],
    ["instrumental cut redefines radiative channels",x=>removeLimit(x,"C-phys-pienu2015-corrected-ratio","photon-exclusive")],
    ["detector spectra become unfolded rates",x=>removeLimit(x,"C-phys-pienu2015-spectra","unfolded differential")],
    ["chain proves universal lifetime ordering",x=>removeLimit(x,"C-phys-pienu2015-spectra","muon is longer-lived")]
  ]);
});

test("pion admission retains fit stages and auxiliary response measurements in one ratio analysis",async()=>{
  await rejectChanges([
    ["raw fit becomes a count split",x=>removeLimit(x,"C-phys-pienu2015-raw-ratio","simultaneous fit")],
    ["auxiliary calibration is hidden inside pion sample",x=>removeLimit(x,"C-phys-pienu2015-corrected-ratio","Auxiliary positron-beam")],
    ["tail bounds become independent Gaussian inputs",x=>removeLimit(x,"C-phys-pienu2015-corrected-ratio","independently Gaussian")],
    ["adopted lifetimes become new measured outputs",x=>removeLimit(x,"C-phys-pienu2015-raw-ratio","adopted pion/muon")],
    ["final ratio loses reused fit",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:pienu2015-raw-ratio-pienu2015-corrected-ratio");}]
  ]);
});

test("pion admission cannot promote source interpretation or local arithmetic to measured evidence",async()=>{
  await rejectChanges([
    ["universality conclusion loses separate theory input",x=>removeLimit(x,"C-phys-pienu2015-corrected-ratio","universality comparison")],
    ["local calculation claims to refit corrections",x=>removeLimit(x,"C-phys-pion-decay-arithmetic","does not replay acquisition")],
    ["arithmetic check borrowed by measured ratio",x=>{x.graph.claims.find(c=>c.id==="C-phys-pienu2015-corrected-ratio").checkIds=["pion-decay-printed-arithmetic"];}],
    ["local study masquerades as the publication",x=>{x.physics.studies.find(s=>s.id==="pion-decay-replay").sourceId="aguilar2015-pienu";}],
    ["local arithmetic acquires experiment status",x=>{x.graph.claims.find(c=>c.id==="C-phys-pion-decay-arithmetic").status="publication-supported";}],
    ["definition dependency becomes physical necessity",x=>{x.graph.relations.find(r=>r.id==="physics:partial-lifetime-pion-inclusive-decay-ratio").kind="functional";}]
  ]);
});
