import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { NEUTRON_MOMENT_ADMISSION, NEUTRON_MOMENT_CHECKS } from "../../models/causal-emergence/canonical/neutron-moment.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("neutron", "models/causal-emergence/canonical/verify-neutron-moment.py")
n=importlib.util.module_from_spec(spec)
spec.loader.exec_module(n)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("printed neutron ratios preserve grouped entries and the conservative error rule", () => {
  const r = JSON.parse(python("print(n.json.dumps(n.verify()))"));
  assert.equal(r.tableRows, 16);
  assert.equal(r.downRows, 7);
  assert.equal(r.upRows, 9);
  assert.deepEqual(r.groupedRunLabels, ["6027-8", "6040-1"]);
  assert.equal(r.correctedUp, "3.8424583");
  assert.equal(r.correctedDown, "3.8424562");
  assert.equal(r.reportedRatio, "3.8424574");
  assert.equal(Number(r.finalError), 3e-6);
  assert.equal(r.uncertaintyRule, "maximum directional error");
  assert.ok(Number(r.invalidIndependentError) < 2e-6);
  assert.equal(r.conditionalNeutronMagnitudeMHzPerTesla, "29.1647050759732");
  assert.equal(r.assumedCorrelation, "0");
  for (const key of ["combinationAlgorithmReproduced", "alternativeCalibrationIsIndependent", "signedMomentDetermined", "rawCountsReplayed", "ramseyFitsReplayed", "fieldMapsReplayed", "gradientFitReplayed", "fullCovarianceReproduced", "upstreamHgCalibrationReproduced"]) assert.equal(r[key], false);
});

test("correction identities distinguish absolute shifts, fractions and unequal fields", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 true=D('3.8'); effects=[D('.00001'),D('-.000003')]
 observed=true*(1+sum(effects))
 assert n.unshift_ratio(observed,effects)==true
 # Applying the correction in the wrong direction fails the independent model.
 assert observed*(1+sum(effects))!=true
 # First-order absolute bookkeeping has different units from fractional shifts.
 assert n.subtract_printed_shifts(D('4'),[D('.02'),D('-.01')])==D('3.99')
 assert n.unshift_ratio(D('4'),[D('.02'),D('-.01')])!=D('3.99')
 # Derive the gravitational field difference directly in nT.
 h,B,g=D('-.2'),D('1000'),D('100')
 field_difference_nt=h*g/D('1000')
 assert n.gravity_fraction(h,B,g,'up')==field_difference_nt/B
 assert n.gravity_fraction(h,B,g,'down')==-field_difference_nt/B
 assert n.gravity_fraction(h,B*7,g*7,'up')==n.gravity_fraction(h,B,g,'up')
 assert n.gravity_fraction(h,B,D(0),'up')==0
 # Change nT to pT in the transverse-field formula without changing its result.
 assert n.transverse_fraction(D('2'),B)==n.transverse_fraction(D('2e6'),B*1000)
 assert n.transverse_fraction(D(0),B)==0
 # A common clock scale cancels; distinct sampled fields do not cancel.
 neutron,hg=D('30'),D('8')
 assert (neutron/D('1.03'))/(hg/D('1.03'))==neutron/hg
 assert (neutron*D('1.00001'))/hg!=neutron/hg
`);
});

test("conditional product propagation exposes covariance and reference reuse", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 ratio,ref,ur,uf=D(3),D(7),D('.2'),D('.1')
 result,minus=n.calibrated_magnitude(ratio,ref,ur,uf,D(-1))
 _,plus=n.calibrated_magnitude(ratio,ref,ur,uf,D(1))
 _,zero=n.calibrated_magnitude(ratio,ref,ur,uf,D(0))
 assert result==21 and minus==D('1.1') and plus==D('1.7')
 assert abs(zero**2-D('2.05'))<D('1e-45')
 scaled,error=n.calibrated_magnitude(ratio,ref*1000,ur,uf*1000,D(0))
 assert scaled==result*1000 and abs(error-zero*1000)<D('1e-45')
 adopted_neutron=D('29.1646943'); R=D('3.8424574')
 inferred_hg=adopted_neutron/R
 assert abs(inferred_hg*R-adopted_neutron)<D('1e-45')
 # Equal covariance contributions can cancel only under the explicit rho=-1.
 assert n.calibrated_magnitude(D(2),D(3),D('.2'),D('.3'),D(-1))[1]==0
 assert n.conservative_direction_error([D('2.6e-6'),D('3.0e-6')])==D('3.0e-6')
 assert n.conservative_direction_error([D('3.0e-6'),D('2.6e-6')])==D('3.0e-6')
`);
});

test("neutron correction helpers reject invalid magnitudes and covariance domains", () => {
  python(`
from decimal import Decimal as D
bad=[
 lambda:n.unshift_ratio(D(-1),[D(0)]),
 lambda:n.unshift_ratio(D(1),[]),
 lambda:n.unshift_ratio(D(1),[D(-1)]),
 lambda:n.unshift_ratio(D(1),[D('NaN')]),
 lambda:n.subtract_printed_shifts(D(1),[D(2)]),
 lambda:n.gravity_fraction(D(1),D(0),D(1),'up'),
 lambda:n.gravity_fraction(D(1),D(1),D(1),'sideways'),
 lambda:n.transverse_fraction(D(-1),D(1)),
 lambda:n.transverse_fraction(D(1),D('Infinity')),
 lambda:n.calibrated_magnitude(D(1),D(1),D(-1),D(0),D(0)),
 lambda:n.calibrated_magnitude(D(1),D(1),D(0),D(0),D('1.01')),
 lambda:n.calibrated_magnitude(D(1),D(1),D(0),D(0),D('NaN')),
 lambda:n.conservative_direction_error([D(1)]),
 lambda:n.conservative_direction_error([D(0),D(1)]),
 lambda:n.unshift_ratio(True,[D(0)]),
]
for call in bad:
 try: call()
 except (AssertionError,ArithmeticError): pass
 else: raise AssertionError('Invalid correction or calibration input admitted')
`);
});

test("neutron admission assigns the local check solely to bounded arithmetic", () => {
  assert.deepEqual([...NEUTRON_MOMENT_CHECKS], [["afach2014-printed-arithmetic", "C-phys-neutron-moment-arithmetic"]]);
  assert.equal(NEUTRON_MOMENT_ADMISSION.contexts.length, 3);
  assert.equal(NEUTRON_MOMENT_ADMISSION.observations.length, 4);
  assert.ok(NEUTRON_MOMENT_ADMISSION.dependencies.some(([, source, target]) => source === "afach2014-hg-reference" && target === "afach2014-neutron-frequency"));
});

test("canonical neutron review rejects lost sign, reference and shared-analysis boundaries", async () => {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const data = await loadCanonicalSource();
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  function drop(d, id, fragment) {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((s) => !s.includes(fragment));
    assert.ok(c.limitations.length < before, "Mutation must remove an actual boundary");
  }
  for (const [name, change] of [
    ["positive ratio becomes signed moment", (d) => { claim(d, "C-phys-afach2014-ratio").statement = "The positive ratio directly determines the signed neutron moment."; }],
    ["same chamber becomes identical field", (d) => drop(d, "C-phys-afach2014-ratio", "identical sampled fields")],
    ["shared directions become independent", (d) => drop(d, "C-phys-afach2014-ratio", "larger directional uncertainty")],
    ["adopted atomic input becomes bare moment", (d) => drop(d, "C-phys-afach2014-hg-reference", "isolated bare Hg")],
    ["free proton replaces shielded input", (d) => drop(d, "C-phys-afach2014-neutron-frequency", "later free-proton")],
    ["reused reference becomes independent corroboration", (d) => drop(d, "C-phys-afach2014-neutron-frequency", "alternative calibrations")],
    ["zero covariance becomes established", (d) => drop(d, "C-phys-neutron-moment-arithmetic", "assumed zero correlation")],
    ["external input edge disappears", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:afach2014-hg-reference-afach2014-neutron-frequency"); }],
    ["absolute inference becomes new acquisition", (d) => { d.physics.studies.find((s) => s.id === "afach2014-conversion").studyType = "primary-experiment"; }],
    ["arithmetic verifies raw ratio", (d) => { claim(d, "C-phys-afach2014-ratio").checkIds = ["afach2014-printed-arithmetic"]; }],
  ]) {
    const copy = structuredClone(data);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
});
