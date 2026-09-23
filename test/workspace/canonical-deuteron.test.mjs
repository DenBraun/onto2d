import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec = importlib.util.spec_from_file_location("deuteron", "models/causal-emergence/canonical/verify-deuteron-data.py")
b = importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}
function rejects(changes) {
  for (const [name, change] of changes) {
    const copy = structuredClone(data);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
function drop(d, id, fragment) {
  const c = claim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.ok(c.limitations.length < before, "Mutation must remove a reviewed limit");
}

test("mass constraints retain acquisition, adjustment and common absolute references", () => {
  rejects([
    ["adjusted quotient becomes raw", (d) => { drop(d, "C-phys-rau-local-adjustment", "not the quotient"); }],
    ["FSU absolute mass loses its adopted proton", (d) => { d.graph.relations = d.graph.relations.filter((e) => e.id !== "physics:liontrap2019-proton-fink-proton-referenced-mass"); }],
    ["joint fit loses its independent ratio input", (d) => { d.graph.relations = d.graph.relations.filter((e) => e.id !== "physics:fink-deuteron-ratio-rau-joint-adjustment"); }],
    ["joint fit loses the directly measured deuteron", (d) => { d.graph.relations = d.graph.relations.filter((e) => e.id !== "physics:rau-deuteron-rau-joint-adjustment"); }],
    ["joint fit loses molecular theory", (d) => { d.graph.relations = d.graph.relations.filter((e) => e.id !== "physics:korobov-hd-energy-rau-joint-adjustment"); }],
    ["joint fit becomes a new acquisition", (d) => { d.physics.studies.find((s) => s.id === "rau2020-joint-fit").studyType = "primary-experiment"; }],
    ["capture recalibration borrows the mass adjustment context", (d) => { claim(d, "C-phys-rau-capture-binding").contextIds = ["rau2020-joint-fit"]; }],
    ["internal closure becomes independent", (d) => { drop(d, "C-phys-rau-hd-closure", "not independent-facility"); }],
    ["updated ionic mass uses the old reference", (d) => { claim(d, "D-phys-rau-carbon-reference").limitations = data.graph.claims.find((c) => c.id === "D-phys-liontrap-carbon-reference").limitations; }]
  ]);
});

test("molecular ground states and theory have distinct evidence limits", () => {
  rejects([
    ["v=0 implies N=0", (d) => { drop(d, "C-phys-fink-deuteron-ratio", "does not imply rotational"); }],
    ["cooling is direct state readout", (d) => { drop(d, "C-phys-rau-hd-mass", "not directly state-resolved"); }],
    ["theory uncertainty becomes total", (d) => { drop(d, "C-phys-korobov-hd-energy", "excludes the Rydberg"); }],
    ["energy acquires erroneous 1e-7", (d) => { const c = claim(d, "C-phys-korobov-hd-energy"); c.statement = c.statement.replace("131224.6841650(6) cm^-1", "0.01312246841650 cm^-1"); }],
    ["missing supplement is concealed", (d) => { drop(d, "M-phys-fink-deuteron-ratio", "supplement"); }],
    ["HD+ theory is substituted for H2+", (d) => { drop(d, "C-phys-fink-deuteron-ratio", "unreviewed upstream"); }]
  ]);
});

test("silicon and neutron inference retain environment and unverified covariance", () => {
  rejects([
    ["shared silicon references become independent", (d) => { drop(d, "C-phys-ill2017-spacing", "share absolute-standard"); }],
    ["specimen scatter becomes standard error", (d) => { drop(d, "M-phys-ill2017-spacing", "not a standard error"); }],
    ["final calibration uncertainty is claimed replayed", (d) => { d.physics.comparisons.find((c) => c.id === "ill2017-spacing").result = "conditional-support"; }],
    ["recoil or binding sign is reversed", (d) => { const c = claim(d, "C-phys-rau-neutron-mass"); c.statement = c.statement.replace("m_d-m_p+E_B", "m_d-m_p-E_B"); }],
    ["updated binding loses original capture", (d) => { d.graph.relations = d.graph.relations.filter((e) => e.id !== "physics:kessler-recalibrated-wavelength-rau-capture-binding"); }],
    ["remaining mass tension disappears", (d) => { drop(d, "C-phys-rau-joint-adjustment", "three-sigma tension"); }]
  ]);
});

test("bounded arithmetic cannot certify a mass measurement or erase source conflicts", () => {
  rejects([
    ["replay check attached to measured mass", (d) => { claim(d, "C-phys-rau-deuteron").checkIds = ["deuteron-grouped-planes"]; }],
    ["table verifier loses its source workbook", (d) => { const c = claim(d, "C-phys-rau-grouped-replay"); c.citations = c.citations.filter((s) => s.sourceId !== "rau2020-fig3-data"); }],
    ["original uncertainty becomes replayed", (d) => { drop(d, "C-phys-rau-grouped-replay", "original uncertainty"); }],
    ["figure uncertainty silently repaired", (d) => { drop(d, "C-phys-rau-deuteron", "18 pu"); }],
    ["author version is claimed publisher record", (d) => { d.graph.sources.find((s) => s.id === "rau2020").review.extent = "full-primary-article"; }]
  ]);
});

test("published grouped data preserve three panels and unreproduced uncertainty", () => {
  const r = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.deepEqual(r.panels.map((p) => [p.id, p.groupedRows, p.degreesOfFreedom]), [["d-awg1", 10, 7], ["d-awg2", 10, 7], ["hd", 7, 4]]);
  assert.equal(r.groupedRows, 27);
  for (const p of r.panels) {
    assert.ok(Number(p.maxResidualDifferenceRatio1e12) < 0.005);
    assert.ok(Math.abs(Number(p.diagonalSigmaRatio1e12) - Number(p.reportedSigmaRatio1e12)) > 0.5);
  }
  assert.equal(r.figureMassUncertaintyPu, 18);
  assert.equal(r.articleMassUncertaintyPu, 17);
  for (const key of ["rawAcquisitionReplayed", "originalCovarianceReplayed", "adjustmentReplayed", "propagatedUncertaintyReplayed", "molecularTheoryReplayed", "crystalCalibrationReplayed", "uncertaintyDiscrepancyResolved"]) assert.equal(r[key], false);
});

test("weighted-plane implementation recovers an independent exact design and rejects singular data", () => {
  python(`
from decimal import localcontext
with localcontext() as c:
 c.prec=40
 D=b.D
 center=D('1.007')
 # A known plane on a rectangular excitation grid. Equal independent errors
 # give intercept variance 3/4 for design columns [1,x,y].
 rows=[]
 for x,y in [(0,0),(100,0),(0,100),(100,100)]:
  delta=D(2)+D(3)*(D(x)/100)**2-D(5)*(D(y)/100)**2
  rows.append((D(x),D(y),D(0),center+delta*D('1e-12'),D(1)))
 r=b.fit(rows,center)
 assert abs(D(r['intercept'])-(center+D('2e-12'))) < D('1e-38')
 assert abs(D(r['diagonalSigmaRatio1e12'])**2-D('.75')) < D('1e-36')
 assert D(r['chiSquared']) < D('1e-60')
 reverse=b.fit(list(reversed(rows)),center)
 assert abs(D(reverse['intercept'])-D(r['intercept'])) < D('1e-38')
 for bad in [[rows[0]]*4, [(*row[:4],D(0)) for row in rows]]:
  try:b.fit(bad,center)
  except AssertionError:pass
  else:raise AssertionError('Invalid design admitted')
`);
});

test("panel parser rejects molecular swaps, missing values and invalid uncertainty", () => {
  python(`
from copy import deepcopy
D=b.D
book=b.workbook(b.DATA/'rau2020-edfig1.xlsx')
base=book['a) surface_Plot_AWG2']
assert len(b.panel_rows(base,10,D('1.0070527378317')))==10
bad_rows=[]
bad=deepcopy(base);bad.pop('E5');bad_rows.append((bad,10,D('1.0070527378317')))
bad=deepcopy(base);bad['F5']=D(0);bad_rows.append((bad,10,D('1.0070527378317')))
bad=deepcopy(base);bad['A5']=D(1);bad_rows.append((bad,10,D('1.0070527378317')))
bad_rows.append((book['b) surface_Plot_HD'],7,D('1.0070527378317')))
for cells,n,center in bad_rows:
 try:b.panel_rows(cells,n,center)
 except (AssertionError,KeyError):pass
 else:raise AssertionError('Invalid panel admitted')
`);
});

test("molecular conversion excludes the spurious multiplier and recoil adds positive energy", () => {
  python(`
from decimal import localcontext
with localcontext() as c:
 c.prec=40
 r=b.printed_arithmetic()
 D=b.D
 assert abs(D(r['predictedMinusDirectPu'])-D('14.7308186')) < D('.000001')
 assert abs(D(r['captureBindingEv'])-D('2224566.35')) < D('.005')
 assert D(r['recoilEv']) > 0
 assert D(r['captureBindingEv']) == D(r['photonEv']) + D(r['recoilEv'])
 bad=b.printed_arithmetic(D('131224.6841650e-7'))
 assert abs(D(bad['predictedMinusDirectPu'])) > D(17000)
`);
});
