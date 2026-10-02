import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import {
  ELECTRON_MOMENT_ADMISSION,
  ELECTRON_MOMENT_ANALYTICAL_SOURCES,
  ELECTRON_MOMENT_CHECKS
} from "../../models/causal-emergence/canonical/electron-moment.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("electron_moment", "models/causal-emergence/canonical/verify-electron-moment.py")
n=importlib.util.module_from_spec(spec)
spec.loader.exec_module(n)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("electron printed arithmetic preserves signs, uncertainty units and finite scope", () => {
  const r = JSON.parse(python("print(n.json.dumps(n.verify()))"));
  assert.equal(r.reportedGHalf, "1.00115965218059");
  assert.equal(r.reportedGHalfSigma, "1.3E-13");
  assert.equal(r.anomaly, "0.00115965218059");
  assert.equal(r.anomalySigma, r.reportedGHalfSigma);
  assert.equal(Number(r.signedMomentInBohrMagnetons), -Number(r.reportedGHalf));
  assert.equal(r.gFactor, "2.00231930436118");
  assert.equal(r.gFactorSigma, "2.6E-13");
  assert.equal(r.budgetSquaredSum, "1.8102");
  assert.ok(Number(r.budgetQuadrature) > 1.345 && Number(r.budgetQuadrature) < 1.346);
  assert.equal(r.budgetUnit, "1e-13 absolute uncertainty in g/2");
  assert.equal(r.budgetDisplayCompatible, true);
  assert.equal(r.budgetAllRoundedInputsMatchTotal, false);
  assert.deepEqual(r.budgetComponents, ["0.29", "0.94", "0.90", "0.12", "0.10", "0.09"]);
  assert.equal(r.reportedFieldDeterminations, 11);
  assert.equal(r.reportedCavityModes, 72);
  for (const key of ["syntheticInputsAreMeasurements", "cavityCorrectionIncludedInIdealCancellation",
    "historicalAlphaReconstructed", "rawTransitionTrialsReplayed", "lineShapeFitReplayed",
    "exactFieldFrequenciesReconstructed", "cavityCalibrationReplayed", "cavityShiftReplayed",
    "invarianceTheoremProved", "fullCorrectionBudgetReplayed", "fieldCovarianceReplayed",
    "leadingRadiativeCalculationReplayed", "fullQEDPredictionReplayed", "inverseAlphaInferred",
    "earlierMeasurementPooled"]) assert.equal(r[key], false, key);
});

test("electron normalization distinguishes spin projection, g and anomaly", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 ratio=D('1.00115965218059')
 a=n.anomaly(ratio)
 assert a+1==ratio and a!=2*ratio-1
 for value in [D(1),ratio,D('1.01')]:
  up=n.signed_spin_moment(value,D('.5'))
  down=n.signed_spin_moment(value,D('-.5'))
  assert up==-value and down==value and up+down==0
  assert down-up==2*value
 # An exact unit subtraction preserves absolute uncertainty, whereas g=2*r
 # doubles it. This is not a covariance assumption about two measurements.
 sigma=D('1.3e-13')
 assert n.anomaly(ratio+sigma)-a==sigma
 assert 2*(ratio+sigma)-2*ratio==2*sigma
`);
});

test("electron common-field identity does not erase nonsimultaneous drift", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 a,k,b=D('.0012'),D(100),D(5)
 for factor in [D('.1'),D(1),D(1000)]:
  assert n.anomaly_frequency_ratio(a*k*b*factor,k*b*factor)==1+a
  assert n.separated_field_ratio(a,b*factor,b*factor)==1+a
 for drift in [D('-.01'),D('.000001'),D('.01')]:
  measured=n.anomaly_frequency_ratio(a*k*b*(1+drift),k*b)
  assert measured==n.separated_field_ratio(a,b*(1+drift),b)
  assert measured-(1+a)==a*drift
  assert measured!=(1+a)*(1+drift)
 assert n.anomaly_frequency_ratio(D(0),D(1))==1
 assert n.separated_field_ratio(D(0),D(2),D(1))==1
 # The ideal ratio helper supplies no automatic additive cavity correction.
 correction=D('2e-12')
 assert n.anomaly_frequency_ratio(a*k*b,k*b)+correction!=1+a
`);
});

test("electron uncertainty RSS is a display comparison, not a complete covariance", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 values=list(map(D,['.29','.94','.90','.12','.10','.09']))
 rss=n.quadrature(values)
 lo,hi=n.quadrature_display_bounds(values,D('.005'))
 assert lo<rss<hi
 assert lo<D('1.35')<hi
 assert rss.quantize(D('.1'))==D('1.3')
 assert hi.quantize(D('.1'))==D('1.4')
 assert n.quadrature([v*D('1e-13') for v in values])==rss*D('1e-13')
 assert n.quadrature([D(0),D(0)])==0
 # The same marginal errors with fully positive correlation have the linear
 # sum as sigma, not RSS: a counterexample to inferring a joint covariance.
 assert sum(values)>rss
 assert n.quadrature([D(3),D(4)])==5
`);
});

test("Schwinger helper evaluates a supplied formula without importing an alpha reference", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 pi=D('3.1415926535897932384626433832795028841971693993751')
 for alpha in [D('.001'),D('.006'),D('.01')]:
  leading=n.leading_anomaly(alpha,pi)
  assert abs(2*pi*leading-alpha)<D('1e-49')
  assert abs(n.leading_anomaly(2*alpha,pi)-2*leading)<D('1e-49')
  assert leading!=alpha/pi
 # This function assumes the coefficient; its algebra cannot establish
 # the coefficient, calculate higher orders or choose physical alpha.
 assert n.leading_anomaly(D('.006'),D(3))==D('.001')
`);
});

test("electron arithmetic helpers reject invalid domains and nonfinite outputs", () => {
  python(`
from decimal import Decimal as D
bad=[
 lambda:n.anomaly(D(0)),lambda:n.anomaly(D(-1)),lambda:n.anomaly(D('NaN')),
 lambda:n.anomaly(True),lambda:n.signed_spin_moment(D(1),D(0)),
 lambda:n.signed_spin_moment(D(1),D('1.5')),
 lambda:n.signed_spin_moment(D(1),D('Infinity')),
 lambda:n.anomaly_frequency_ratio(D(-1),D(1)),
 lambda:n.anomaly_frequency_ratio(D(1),D(0)),
 lambda:n.anomaly_frequency_ratio(D(1),D('NaN')),
 lambda:n.separated_field_ratio(D(-1),D(1),D(1)),
 lambda:n.separated_field_ratio(D(1),D(0),D(1)),
 lambda:n.separated_field_ratio(D(1),D(1),D(0)),
 lambda:n.leading_anomaly(D(0),D(3)),lambda:n.leading_anomaly(D(1),D(0)),
 lambda:n.quadrature([]),lambda:n.quadrature([D(-1)]),
 lambda:n.quadrature([D('NaN')]),lambda:n.quadrature([D('Infinity')]),
 lambda:n.quadrature_display_bounds([D('.01')],D('.02')),
 lambda:n.quadrature_display_bounds([D(1)],D(0)),
 lambda:n.signed_spin_moment(D('9e999999'),D('.5')),
 lambda:n.separated_field_ratio(D('1e999999'),D('1e999999'),D(1)),
 lambda:n.quadrature([D('1e999999')]),
]
for call in bad:
 try: call()
 except (AssertionError,ArithmeticError): pass
 else: raise AssertionError('Invalid physical/helper input admitted')
`);
});

test("electron topology separates acquisition, line inference and cavity calibration", () => {
  const a = ELECTRON_MOMENT_ADMISSION;
  assert.equal(a.definitions.length, 3);
  assert.equal(a.contexts.length, 4);
  assert.equal(a.observations.length, 6);
  assert.equal(a.formalDependencies.length, 2);
  assert.equal(a.dependencies.length, 16);
  const edges = a.dependencies.map(([, source, target]) => `${source}>${target}`);
  for (const edge of [
    "fan2023-moment-context>fan2023-frequency-lines",
    "fan2023-frequency-lines>fan2023-fitted-frequencies",
    "fan2023-inference-context>fan2023-fitted-frequencies",
    "fan2023-fitted-frequencies>fan2023-electron-moment",
    "fan2023-cavity-context>fan2023-cavity-calibration",
    "fan2023-cavity-calibration>fan2023-cavity-shift",
    "fan2023-cavity-shift>fan2023-electron-moment",
    "fan2023-electron-moment>electron-moment-arithmetic",
    "schwinger-leading-anomaly>electron-moment-arithmetic"
  ]) assert.ok(edges.includes(edge), edge);
  assert.ok(!edges.includes("fan2023-frequency-lines>fan2023-electron-moment"));
  assert.ok(!edges.includes("fan2023-moment-context>fan2023-cavity-calibration"));
  assert.ok(!edges.includes("schwinger-leading-anomaly>fan2023-electron-moment"));
  assert.ok(!edges.includes("schwinger-leading-anomaly>fan2023-cavity-shift"));
  assert.deepEqual([...ELECTRON_MOMENT_CHECKS], [["electron-moment-printed-algebra", "C-phys-electron-moment-arithmetic"]]);
  assert.deepEqual([...ELECTRON_MOMENT_ANALYTICAL_SOURCES], [["C-phys-electron-moment-arithmetic", "electron-moment-verifier"]]);
  assert.deepEqual(a.localStudySources, [["electron-moment-replay", "electron-moment-verifier"]]);
});

test("canonical electron contracts preserve measured versus inferred provenance", async () => {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const data = await loadCanonicalSource();
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  function drop(d, id, fragment) {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((s) => !s.includes(fragment));
    assert.ok(c.limitations.length < before, "Mutation must remove an actual boundary");
  }
  for (const [name, mutate] of [
    ["signed moment becomes a positive spin-up value", (d) => { claim(d, "D-phys-electron-moment-normalization").statement = "The spin-up electron has mu_z/mu_B=g/2>0."; }],
    ["historical Gaussian formula becomes SI", (d) => { claim(d, "D-phys-schwinger-leading-anomaly").statement = "In SI, alpha=e^2/(hbar*c)."; }],
    ["fit becomes an independent measurement", (d) => { claim(d, "C-phys-fan2023-fitted-frequencies").contextIds = ["fan2023-moment-acquisition"]; }],
    ["cavity calibration merges with jump sample", (d) => { d.graph.relations.find((r) => r.id === "physics:fan-calibration-modes").source = "phys:fan2023-moment-context"; }],
    ["cavity inference skips measured calibration", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:fan-modes-cavity-shift"); }],
    ["exact approximate-frequency reproduction is invented", (d) => drop(d, "C-phys-fan2023-electron-moment", "explanatory scales")],
    ["eleven fields become independent", (d) => drop(d, "C-phys-fan2023-electron-moment", "eleven field determinations")],
    ["RSS becomes covariance replay", (d) => drop(d, "C-phys-electron-moment-arithmetic", "Table I lists")],
    ["local check verifies measured moment", (d) => { claim(d, "C-phys-fan2023-electron-moment").checkIds = ["electron-moment-printed-algebra"]; }],
    ["local arithmetic borrows journal provenance", (d) => { d.physics.studies.find((s) => s.id === "electron-moment-replay").sourceId = "fan2023"; }],
  ]) {
    const copy = structuredClone(data);
    mutate(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
});
