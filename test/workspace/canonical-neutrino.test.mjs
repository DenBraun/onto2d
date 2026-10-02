import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util,json,math,cmath
from decimal import Decimal as D
from fractions import Fraction as F
spec=importlib.util.spec_from_file_location('neutrino','models/causal-emergence/canonical/verify-neutrino.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8", timeout: 10000 });
}

test("neutrino arithmetic preserves the released prompt variable, duplicates and byte identity", () => {
  python(`
from pathlib import Path
import tempfile
raw=(m.DATA/'kamland2005-selected-energies.dat').read_bytes()
rows=m.parse_selected_energies(raw.decode('ascii'))
assert len(rows)==258 and len(set(rows))<len(rows)
# Independent integer-cent parsing checks the reported finite census.
cents=[int(line.strip().replace(b'.',b'')) for line in raw.splitlines()]
assert sum(cents)==109833 and min(cents)==261 and max(cents)==795
assert sum(v<340 for v in cents)==61
assert all(F(v,100)==F(value) for v,value in zip(cents,rows))
def reject(text):
    try:m.parse_selected_energies(text)
    except ValueError:return
    raise AssertionError('Malformed selected-energy table accepted')
text=raw.decode('ascii')
for changed in [text.rstrip(),text.replace(' 2.61',' 2.60',1),text.replace(' 7.95',' 8.50',1),text.replace(' 2.61',' NaN',1),text.replace(' 2.61',' 2.610',1),text.replace(' 2.61',' 2.61 1',1),text+' 7.95\\n',text.replace(' 2.61\\n','',1)]:reject(changed)
swapped=text.splitlines();swapped[0],swapped[-1]=swapped[-1],swapped[0];reject('\\n'.join(swapped)+'\\n')
# A domain-valid table alteration must still fail the byte-bound verifier.
original=m.DATA
with tempfile.TemporaryDirectory() as directory:
    m.DATA=Path(directory)
    for name in m.FILES:(m.DATA/name).write_bytes((original/name).read_bytes())
    (m.DATA/'kamland2005-selected-energies.dat').write_bytes(raw.replace(b' 2.61',b' 2.62',1))
    try:m.verify()
    except AssertionError:pass
    else:raise AssertionError('Changed selected data passed its source hash')
    (m.DATA/'kamland2005-selected-energies.dat').write_bytes(raw)
    desc=m.DATA/'kamland2005-description.html';desc.write_bytes(desc.read_bytes()+b' ')
    try:m.verify()
    except AssertionError:pass
    else:raise AssertionError('Changed quantity description passed its source hash')
`);
});

test("neutrino arithmetic two-state evolution has the declared half-phase and vacuum degeneracies", () => {
  python(`
for theta in [0,.13,.37,math.pi/4,1.2,math.pi/2]:
    u=[[math.cos(theta),math.sin(theta)],[-math.sin(theta),math.cos(theta)]]
    for phase in [0,.23,math.pi,2*math.pi,7.3]:
        p=m.probabilities(u,[2,3],phase)
        # Independently expand the two propagation amplitudes into a cosine.
        c,s=math.cos(theta),math.sin(theta)
        expected=c**4+s**4+2*c*c*s*s*math.cos(phase)
        assert abs(p[0]-expected)<1e-12
        assert abs(p[0]-m.two_flavor_survival(theta,phase))<1e-12
        assert abs(p[1]+p[0]-1)<1e-12
        assert abs(m.two_flavor_survival(theta,-phase)-p[0])<1e-12
        assert abs(m.two_flavor_survival(math.pi/2-theta,phase)-p[0])<1e-12
        shifted=m.probabilities(u,[7,8],phase)
        assert max(abs(a-b) for a,b in zip(p,shifted))<1e-12
        degenerate=m.probabilities(u,[4,4],phase)
        assert abs(degenerate[0]-1)<1e-12 and degenerate[1]<1e-24
# Maximal mixing at a relative phase pi must give full conversion, ruling out
# the common erroneous sin^2(delta) instead of sin^2(delta/2).
assert m.two_flavor_survival(math.pi/4,math.pi)<1e-15
assert abs(m.two_flavor_survival(math.pi/4,2*math.pi)-1)<1e-15
`);
});

test("neutrino arithmetic complex three-state probabilities obey conjugation and basis invariance", () => {
  python(`
omega=cmath.exp(2j*math.pi/3)
u=[[omega**(a*i)/math.sqrt(3) for i in range(3)] for a in range(3)]
masses=[.2,1.1,3.7];scale=.81
p=m.probabilities(u,masses,scale)
# Independent cosine expansion for the Fourier matrix and source flavor zero.
for b in range(3):
    expected=1/3+2/9*sum(math.cos(2*math.pi*b*(i-j)/3-(masses[i]-masses[j])*scale) for i in range(3) for j in range(i))
    assert abs(p[b]-expected)<1e-12
assert abs(sum(p)-1)<1e-12 and min(p)>=0
anti=m.probabilities(u,masses,scale,antineutrino=True)
assert max(abs(a-b) for a,b in zip(anti,p))>.01
for a in range(3):
    antia=m.probabilities(u,masses,scale,a,True)
    for b in range(3):
        assert abs(antia[b]-m.probabilities(u,masses,scale,b)[a])<1e-12
column_phases=[cmath.exp(1j*x) for x in [.3,1.7,-.9]]
rephased=[[z*column_phases[i] for i,z in enumerate(row)] for row in u]
permuted=[[row[i] for i in [2,0,1]] for row in u]
for transformed,ms in [(rephased,masses),(permuted,[masses[i] for i in [2,0,1]])]:
    q=m.probabilities(transformed,ms,scale)
    assert max(abs(a-b) for a,b in zip(p,q))<1e-12
assert max(abs(a-b) for a,b in zip(p,m.probabilities(u,[x+4 for x in masses],scale)))<1e-12
`);
});

test("neutrino arithmetic rejects invalid domains and nonunitary closed models", () => {
  python(`
u=[[1,0],[0,1]]
def rejects(f):
    try:f()
    except ValueError:return
    raise AssertionError('Invalid phase/model input accepted')
for bad in [True,'1',float('nan'),float('inf'),D('NaN'),10**1000]:
    rejects(lambda bad=bad:m.probabilities(u,[0,bad],1))
    rejects(lambda bad=bad:m.probabilities(u,[0,1],bad))
    rejects(lambda bad=bad:m.two_flavor_survival(bad,1))
for bad in [[],[[1]],[[1,0,0],[0,1,0]],[[1,0],[0,.5]],[[1,0],[1,0]],[[complex(float('inf'),0),0],[0,1]],[[True,0],[0,1]]]:
    rejects(lambda bad=bad:m.probabilities(bad,[0,1],1))
for masses in [[],[0],[-1,0],[0,1,2]]:rejects(lambda masses=masses:m.probabilities(u,masses,1))
rejects(lambda:m.probabilities(u,[0,1],-1))
rejects(lambda:m.probabilities(u,[1e308,1e308],1e308))
for source in [-1,2,True,1.2]:rejects(lambda source=source:m.probabilities(u,[0,1],1,source))
for anti in [0,1,'yes']:rejects(lambda anti=anti:m.probabilities(u,[0,1],1,antineutrino=anti))
for angle in [-.1,math.pi]:rejects(lambda angle=angle:m.two_flavor_survival(angle,1))
`);
});

test("neutrino arithmetic separates finite source checks from experimental inference", () => {
  const result=JSON.parse(python("print(json.dumps(m.verify()))"));
  assert.equal(result.selectedCandidateCount,258);
  assert.equal(result.printedBackgroundSum,"17.79");
  assert.equal(result.printedAverageSurvival,"1201/1826");
  assert.equal(result.roundedAverageSurvival,"0.658");
  assert.equal(result.syntheticComplexThreeFlavorSourceCases,3);
  for(const flag of ["inputEnergiesAreTrueNeutrinoEnergies","rawDetectorDataReplayed",
    "reactorPredictionReconstructed","backgroundModelReplayed","responseOrLikelihoodReconstructed",
    "uncertaintyOrSignificanceReproduced","solarCombinedFitReplayed","absoluteMassDetermined",
    "massGenerationMechanismEstablished","syntheticInputsAreMeasurements"])assert.equal(result[flag],false,flag);
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
  const claim=data.graph.claims.find(x=>x.id===id);const before=claim.limitations.length;
  claim.limitations=claim.limitations.filter(x=>!x.includes(part));
  assert.ok(claim.limitations.length<before,"Mutation must remove a reviewed limit");
}

test("neutrino admission preserves flavor, phase and absolute-mass boundaries",async()=>{
  await rejectChanges([
    ["rectangular mixing becomes universally unitary",x=>removeLimit(x,"D-phys-neutrino-flavor-mixing","3-by-n")],
    ["phase differences become absolute masses",x=>removeLimit(x,"D-phys-neutrino-vacuum-phase","absolute masses")],
    ["massless lepton classification generates mass",x=>{x.graph.relations.find(r=>r.id==="physics:lepton-fields-neutrino-flavor-mixing").kind="functional";}],
    ["coherent phase loses its mixing convention",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:neutrino-flavor-mixing-neutrino-vacuum-phase");}]
  ]);
});

test("neutrino admission preserves selected energies, response and same-acquisition fit",async()=>{
  await rejectChanges([
    ["prompt threshold becomes neutrino threshold",x=>removeLimit(x,"C-phys-kamland2005-selected-energies","different variables")],
    ["selected list becomes raw detector sample",x=>removeLimit(x,"C-phys-kamland2005-selected-energies","258-value")],
    ["prior subset becomes independent replication",x=>removeLimit(x,"C-phys-kamland2005-selected-energies","reanalyzed earlier")],
    ["background upper bound becomes central",x=>removeLimit(x,"C-phys-kamland2005-background-estimate","upper bound")],
    ["fit becomes a solar-combined single-baseline curve",x=>removeLimit(x,"C-phys-kamland2005-oscillation-fit","KamLAND-only")],
    ["fit loses selected sample",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:kamland2005-selected-energies-kamland2005-oscillation-fit");}],
    ["survival loses model denominator",x=>{x.graph.relations=x.graph.relations.filter(r=>r.id!=="physics:kamland2005-unoscillated-prediction-kamland2005-average-survival");}]
  ]);
});

test("neutrino admission cannot promote data arithmetic into a likelihood replay",async()=>{
  await rejectChanges([
    ["fit borrows finite check",x=>{x.graph.claims.find(c=>c.id==="C-phys-kamland2005-oscillation-fit").checkIds=["neutrino-phase-data-algebra"];}],
    ["local result becomes reported experiment",x=>{x.graph.claims.find(c=>c.id==="C-phys-neutrino-arithmetic").status="publication-supported";}],
    ["local study borrows primary publication",x=>{x.physics.studies.find(s=>s.id==="neutrino-replay").sourceId="kamland2005";}],
    ["finite checks become experimental replay",x=>removeLimit(x,"C-phys-neutrino-arithmetic","local executable")]
  ]);
});
