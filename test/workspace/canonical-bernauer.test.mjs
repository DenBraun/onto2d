import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
function rejects(mutations) {
  for (const [name, change] of mutations) {
    const copy = structuredClone(data);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
function drop(d, id, fragment) {
  const c = claim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.ok(c.limitations.length < before, "Mutation must remove an admitted boundary");
}
function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("bernauer", "models/causal-emergence/canonical/verify-bernauer-data.py")
b=importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("elastic response retains squared-form-factor and imposed-normalization meaning", () => {
  rejects([
    ["signs become directly measured", (d) => { claim(d, "D-phys-sachs-form-factors").statement = "The cross section directly measures signed GE and GM."; }],
    ["reference moment becomes new measurement", (d) => drop(d, "C-phys-bernauer2014-form-factors", "new magnetic-moment measurement")],
    ["fit becomes a three-dimensional charge map", (d) => drop(d, "C-phys-bernauer2014-form-factors", "frame dependent")],
    ["hard TPE silently included", (d) => drop(d, "C-phys-bernauer2014-form-factors", "hard two-photon")],
    ["fitted spline becomes new acquisition", (d) => { d.physics.studies.find((s) => s.id === "bernauer2014-mainz-fit").studyType = "primary-experiment"; }],
  ]);
});

test("released ratios and separation preserve their shared fitted normalization", () => {
  rejects([
    ["reused acquisition becomes independent", (d) => drop(d, "C-phys-bernauer2014-separated", "independent replications")],
    ["already-scaled errors become counting errors", (d) => drop(d, "C-phys-bernauer2014-ratios", "second time")],
    ["release becomes raw prior input", (d) => drop(d, "C-phys-bernauer2014-ratios", "temporally prior")],
    ["reciprocal parameter conventions conflated", (d) => drop(d, "M-phys-bernauer2014-mainz-fit-context", "reciprocal nuisance")],
    ["spline normalization edge omitted", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:bernauer2014-form-factors-bernauer2014-separated"); }],
    ["released-ratio normalization provenance omitted", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:bernauer2014-mainz-fit-context-bernauer2014-ratios"); }],
    ["dependent extraction becomes formation causation", (d) => { d.graph.relations.find((r) => r.id === "physics:bernauer2014-ratios-bernauer2014-form-factors").kind = "functional-support"; }],
  ]);
});

test("table conventions, source versions and verification boundaries remain explicit", () => {
  rejects([
    ["pointwise errors become independent draws", (d) => drop(d, "C-phys-bernauer2014-form-factors", "simultaneous bands")],
    ["GM and GM/mu_p conflated", (d) => drop(d, "C-phys-bernauer2014-separated", "Rosenbluth.dat stores GM")],
    ["constrained alternatives become measured confidence interval", (d) => drop(d, "C-phys-bernauer2014-separated", "ordinary confidence interval")],
    ["central angle used for averaged kinematics", (d) => drop(d, "C-phys-bernauer2014-ratios", "central spectrometer angle")],
    ["unresolved source row erased", (d) => drop(d, "C-phys-bernauer-data-arithmetic", "1598/1377")],
    ["table check assigned to original fit", (d) => { claim(d, "C-phys-bernauer2014-form-factors").checkIds = ["bernauer2014-bound-tables"]; }],
    ["author report becomes publisher bytes", (d) => { d.graph.sources.find((s) => s.id === "bernauer2014").review.extent = "full-publisher-article"; }],
    ["arithmetic loses source table", (d) => { claim(d, "C-phys-bernauer-data-arithmetic").citations = claim(d, "C-phys-bernauer-data-arithmetic").citations.filter((c) => c.sourceId !== "bernauer2014-mainz-spline"); }],
  ]);
});

test("bound finite tables preserve their census, ratio identity and explicit source mismatch", () => {
  const r = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.equal(r.crossSectionRows, 1422);
  assert.equal(r.sharedNormalizationParameters, 31);
  assert.equal(r.rosenbluthUnconstrainedRows, 77);
  assert.equal(r.rosenbluthConstrainedAlternatives, 4);
  assert.equal(r.splineGridRows, 1000);
  assert.deepEqual(r.q2RangeGeV2, [.003839, .977245]);
  assert.ok(r.maxNormalizedRatioIdentityResidual < 1e-11);
  assert.equal(r.firstRatioWithoutCoulombCorrection, .9946743928);
  assert.deepEqual(r.unresolvedPrintedFitRows, ["friedrich-walcher"]);
  assert.equal(r.printedFitTable.filter((row) => row.roundingIntervalsOverlap).length, 9);
  const mismatch = r.printedFitTable.find((row) => row.model === "friedrich-walcher");
  assert.equal(mismatch.degreesOfFreedom, 1377);
  assert.equal(mismatch.printedReducedChiSquare, "1.1588");
  for (const key of ["rawAcquisitionReplayed", "acceptanceSimulationReplayed", "fitReoptimized", "covarianceReproduced", "radiiReproduced"]) assert.equal(r[key], false);
});

test("independent elastic and nuisance identities preserve units and reciprocal conventions", () => {
  python(`
from math import sin,cos,tan,isclose
E,M,angle=.585,.938272,.7
# Derive the energy from a chosen scattering angle, independently of the helper.
out=E/(1+E/M*(1-cos(angle)))
q2=2*E*out*(1-cos(angle))
k=b.kinematics(E,q2,M)
assert isclose(k['outgoingEnergy'],out,rel_tol=1e-14)
assert isclose(k['angleRadians'],angle,rel_tol=1e-14)
assert isclose(k['epsilon'],1/(1+2*(1+k['tau'])*tan(angle/2)**2),rel_tol=1e-14)
# A GeV-to-MeV conversion changes energies and Q^2 consistently.
u=b.kinematics(E*1000,q2*1e6,M*1000)
assert isclose(u['outgoingEnergy'],out*1000,rel_tol=1e-14)
assert isclose(u['epsilon'],k['epsilon'],rel_tol=1e-14)
# Two epsilon settings give the expected affine Rosenbluth slope/intercept.
ge,gm,tau=.7,2.0,.1
for eps in [.2,.5,.9]:
 reduced=b.born_ratio(eps,tau,ge,gm,1,0)*eps
 assert isclose(reduced,ge**2*eps+tau*gm**2,rel_tol=1e-14)
 assert b.born_ratio(eps,tau,ge,gm,ge,gm)==1
 assert b.born_ratio(eps,tau,-ge,-gm,ge,gm)==1
# Eq48 acts on data and error; ancillary model parameters use reciprocals.
ratio,error,model,factors=.95,.02,1.01,[.98,1.04]
product=.98*1.04
res=b.normalized_residual(ratio,error,model,factors)
assert isclose(res,(ratio-model/product)/error,rel_tol=1e-14)
assert isclose(res,b.normalized_residual(ratio*7,error*7,model*7,factors),rel_tol=1e-14)
assert isclose(res,b.normalized_residual(ratio,error,model,factors[::-1]),rel_tol=1e-14)
assert not isclose(res,(ratio-model*product)/error,rel_tol=1e-6)
for call in [lambda:b.kinematics(1,-1,1),lambda:b.kinematics(1,9,1),lambda:b.kinematics(True,1,1),lambda:b.kinematics(1e308,1,1),lambda:b.born_ratio(.5,1,1e200,1,1,1),lambda:b.born_ratio(.5,1,1,1,0,0),lambda:b.normalized_residual(1e308,1,0,[2]),lambda:b.normalized_residual(1,0,1,[1]),lambda:b.normalized_residual(1,1,1,[float('nan')])]:
 try:call()
 except (AssertionError,OverflowError):pass
 else:raise AssertionError('Invalid physical or nonfinite result admitted')
`);
});

test("parsers reject malformed fields and keep low-Q2 alternatives unpaired", () => {
  python(`
x=(b.DATA/'bernauer2014-cross-sections.dat').read_text(encoding='utf-8')
r=b.cross_sections(x)
assert r[0]['pointError']==.0030664
assert r[0]['normalizationFactors']==[3]
assert abs(r[0]['ratio']*r[0]['coulombUndoFactor']-.9946743928)<1e-14
assert abs(r[0]['ratio']/r[0]['coulombUndoFactor']-.9946743928)>.001
for row in r:
 b.kinematics(row['energyMeV']/1000,row['q2GeV2'],.938272)
free,constrained=b.rosenbluth((b.DATA/'bernauer2014-rosenbluth.dat').read_text(encoding='utf-8'))
assert constrained[0]['electricRange']==[.9511,.9530]
assert not constrained[0]['endpointPairingSpecified']
assert free[0]['magnetic']==3.2859
fit=(b.DATA/'bernauer2014-mainz-spline.dat').read_text(encoding='utf-8')
assert b.spline(fit)[0][7]==1
badrow=x.splitlines()[1].split()
for i,value in [(5,'-0.003'),(3,'NaN'),(10,'3:3'),(10,'0'),(17,'inf')]:
 row=badrow.copy();row[i]=value
 try:b.cross_sections(' '.join(row))
 except (AssertionError,ValueError):pass
 else:raise AssertionError('Malformed cross-section input admitted')
row=fit.splitlines()[100].split();row[7]=str(float(row[7])*2.7928)
try:b.spline(' '.join(row))
except AssertionError:pass
else:raise AssertionError('GM and GM/mu_p confused')
try:b.rosenbluth('0.01 (0.95-0.96) 0.001 # missing imposed magnetic convention')
except AssertionError:pass
else:raise AssertionError('Unscoped constrained row admitted')
`);
});

test("selected table bytes remain pinned independently of parsed numerical equivalence", () => {
  python(`
import tempfile
with tempfile.TemporaryDirectory() as directory:
 root=b.Path(directory)
 for name in b.FILES:
  (root/name).write_bytes((b.DATA/name).read_bytes())
 assert b.verify(root)['crossSectionRows']==1422
 path=root/'bernauer2014-cross-sections.dat'
 path.write_bytes(path.read_bytes()+b'\\n')
 try:b.verify(root)
 except AssertionError:pass
 else:raise AssertionError('Changed source bytes admitted')
`);
});
