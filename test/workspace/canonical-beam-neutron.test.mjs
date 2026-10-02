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
  assert.ok(c.limitations.length < before, "Mutation must remove a reviewed limit");
}
function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("beam", "models/causal-emergence/canonical/verify-beam-neutron.py")
b=importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("beam proton counting preserves channel, monitor and trap boundaries", () => {
  rejects([
    ["proton rate becomes every disappearance channel", (d) => drop(d, "D-phys-beam-decay-ratio", "decay-channel")],
    ["spectrum cancellation becomes unconditional", (d) => drop(d, "D-phys-beam-decay-ratio", "inverse-velocity")],
    ["trap ends become ideal without correction", (d) => drop(d, "C-phys-nico2005-lifetime", "common-end-region")],
    ["proton detection becomes perfect counting", (d) => drop(d, "C-phys-nico2005-lifetime", "proton backscatter")],
    ["definition becomes observed process", (d) => { d.graph.entities.find((e) => e.id === "phys:beam-decay-ratio").kind = "scoped-process"; }]
  ]);
});

test("new monitor acquisition cannot create an independent neutron lifetime replicate", () => {
  rejects([
    ["shared acquisition suppressed", (d) => drop(d, "C-phys-yue2013-lifetime", "June 2000-February 2001")],
    ["updated lifetime labeled a new experiment", (d) => { d.physics.studies.find((s) => s.id === "yue2013-update").studyType = "primary-experiment"; }],
    ["calibration labeled an old-data reanalysis", (d) => { d.physics.studies.find((s) => s.id === "yue2013-calibration").studyType = "experimental-reanalysis"; }],
    ["old acquisition citation removed", (d) => { const c = claim(d, "C-phys-yue2013-lifetime"); c.citations = c.citations.filter((r) => r.sourceId !== "nico2005"); }],
    ["calibration dependence hidden", (d) => drop(d, "C-phys-yue2013-lifetime", "unrelated inputs")],
    ["monitor dependence becomes physical formation", (d) => { d.graph.relations.find((r) => r.id === "physics:yue2013-efficiency-yue2013-lifetime").kind = "functional"; }]
  ]);
});

test("monitor conversion retains author-version conflict and temporal assumptions", () => {
  rejects([
    ["formula conflict erased", (d) => drop(d, "C-phys-yue2013-efficiency", "opposite wavelength ratio")],
    ["author manuscript becomes published PDF review", (d) => { d.graph.sources.find((s) => s.id === "yue2013").review.extent = "full-primary-article"; }],
    ["transfer controls become exact zero drift", (d) => drop(d, "C-phys-yue2013-efficiency", "do not prove zero drift")],
    ["absolute monitor calibration becomes assumption-free lifetime", (d) => drop(d, "C-phys-yue2013-efficiency", "not all assumptions")],
    ["monitor efficiency becomes neutron survival", (d) => drop(d, "C-phys-yue2013-efficiency", "survival probabilities")]
  ]);
});

test("bounded beam arithmetic cannot certify raw acquisition or complete uncertainty", () => {
  rejects([
    ["arithmetic check moved to measured lifetime", (d) => { claim(d, "C-phys-yue2013-lifetime").checkIds = ["yue2013-printed-arithmetic"]; }],
    ["arithmetic context becomes experimental acquisition", (d) => { d.physics.studies.find((s) => s.id === "beam-neutron-replay").studyType = "primary-experiment"; }],
    ["local verifier citation removed", (d) => { const c = claim(d, "C-phys-beam-neutron-arithmetic"); c.citations = c.citations.filter((r) => r.sourceId !== "beam-neutron-verifier"); }],
    ["rounded budget becomes full covariance", (d) => drop(d, "C-phys-beam-neutron-arithmetic", "shared covariance")],
    ["central arithmetic becomes full experiment", (d) => drop(d, "C-phys-beam-neutron-arithmetic", "does not reproduce acquisition")],
    ["conditional support becomes independent alternative exclusion", (d) => { d.physics.comparisons.find((c) => c.id === "yue2013-lifetime").result = "specified-alternative-disfavored"; }]
  ]);
});

test("printed beam arithmetic retains wavelength conflict and separately reported errors", () => {
  const r = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.ok(Math.abs(Number(r.thermalEfficiencyFromEquation1) - 3.10982775929846e-5) < 1e-18);
  assert.ok(Number(r.literalEquation2Efficiency) > 7 * Number(r.reportedThermalEfficiency));
  assert.ok(Math.abs(Number(r.updatedLifetimeSeconds) - 887.725011254743) < 1e-10);
  assert.ok(Math.abs(Number(r.correctionSeconds) - 1.425011254743) < 1e-10);
  assert.ok(Math.abs(Number(r.printedBudgetSigmaSeconds) - Math.sqrt(.5 ** 2 + .9 ** 2 + 1.7 ** 2 + 1.2 ** 2 + .1 ** 2)) < 1e-14);
  assert.equal(r.reportedTotalSigmaSeconds, "2.3");
  assert.equal(r.reportedAbstractStatSigmaSeconds, "1.2");
  assert.equal(r.reportedAbstractSystSigmaSeconds, "1.9");
  assert.equal(r.adoptedSolidAngleDrift, "0");
  assert.equal(r.adoptedDepositDrift, "0");
  for (const key of ["printedEquation2MultiplierConsistent", "rawAcquisitionReplayed", "protonLossFitReplayed", "absoluteCalibrationReplayed", "depositStabilityModelReplayed", "fullCovarianceReplayed", "publishedNumericalErrorEstablished"]) assert.equal(r[key], false);
});

test("beam arithmetic respects reference-unit, calibration and composition invariants", () => {
  python(`
from decimal import Decimal as D
# At the reference wavelength, no conversion is needed. Changing wavelength
# units together cannot change the efficiency; a longer beam wavelength lowers
# the inferred thermal efficiency for a fixed measured response.
e=D('.001'); wavelength=D('.5'); reference=D('.2')
assert b.thermal_efficiency(e,reference,reference)==e
assert b.thermal_efficiency(e,wavelength*1000,reference*1000)==b.thermal_efficiency(e,wavelength,reference)
assert b.thermal_efficiency(e,wavelength*2,reference)<b.thermal_efficiency(e,wavelength,reference)
# An old lifetime inversely shares its old efficiency: rescaling that pair
# consistently leaves the final inferred value unchanged.
tau=D(880); old=D('.00003'); mid=D('.00004'); new=D('.00005')
assert b.rescale_lifetime(tau,old,old)==tau
assert b.rescale_lifetime(tau/2,old*2,new)==b.rescale_lifetime(tau,old,new)
assert b.rescale_lifetime(b.rescale_lifetime(tau,old,mid),mid,new)==b.rescale_lifetime(tau,old,new)
assert b.rescale_lifetime(tau,old,new*2)<b.rescale_lifetime(tau,old,new)
assert b.rescale_lifetime(tau,old,new,D('.1'),D('.2'))==b.rescale_lifetime(tau,old,new)*D('1.32')
for args in [(D(0),wavelength,reference),(e,D(0),reference),(e,wavelength,D(-1)),(D('NaN'),wavelength,reference),(D(2),wavelength,reference),(True,wavelength,reference)]:
 try:b.thermal_efficiency(*args)
 except AssertionError:pass
 else:raise AssertionError('Invalid efficiency or wavelength admitted')
for args in [(D(0),old,new),(tau,D(0),new),(tau,old,D(2)),(tau,old,new,D(-1)),(tau,old,new,D(0),D('-Infinity'))]:
 try:b.rescale_lifetime(*args)
 except AssertionError:pass
 else:raise AssertionError('Invalid lifetime, efficiency or drift admitted')
`);
});
