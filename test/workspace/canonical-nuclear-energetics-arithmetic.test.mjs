import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import {
  NUCLEAR_ENERGETICS_ADMISSION,
  NUCLEAR_ENERGETICS_ANALYTICAL_SOURCES,
  NUCLEAR_ENERGETICS_CHECKS
} from "../../models/causal-emergence/canonical/nuclear-energetics.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("energetics", "models/causal-emergence/canonical/verify-nuclear-energetics.py")
n=importlib.util.module_from_spec(spec)
spec.loader.exec_module(n)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

function scaledInteger(value, places) {
  const [whole, fraction = ""] = value.split(".");
  return BigInt(whole + fraction.padEnd(places, "0"));
}

test("bare deuteron Q agrees with independent integer unit arithmetic", () => {
  const r = JSON.parse(python("print(n.json.dumps(n.verify()))"));
  // Source masses in 10^-15 u and the conversion in 0.01 eV/u.
  const mass = 2013553212537000n - 2n * 1007276466580000n - 548579909065n;
  assert.equal(scaledInteger(r.qMassU, 15), mass);
  assert.equal(scaledInteger(r.qEv, 17), mass * 93149410242n);
  assert.equal(r.massPairCorrelation, "0.26");
  assert.equal(r.thresholdStatus, "energetically-excluded");
  assert.equal(r.captureCancellationExact, true);
  assert.equal(r.inferredNeutronMassU, "1.008664916037");
  assert.equal(Number(r.captureRoundDifferenceEv), 0.00279448230726);
  assert.equal(r.initialCharge, r.finalCharge);
  for (const key of ["roundingIntervalIsConfidenceInterval", "completeQUncertaintyReproduced", "massAdjustmentReplayed", "captureIsIndependentConfirmation", "weakAmplitudeCalculated", "lifetimePredicted", "allChannelStabilityEstablished", "arbitraryBoundNeutronStabilityEstablished"]) assert.equal(r[key], false);
});

test("display-rounding enclosure includes all independent endpoint combinations", () => {
  const r = JSON.parse(python("print(n.json.dumps(n.verify()))"));
  // Enumerate all 16 corners using 10^-18 u and 10^-3 eV/u integers.
  // Electron's printed half step is 5e-16 u, not its quoted standard error.
  const values = [];
  for (const sd of [-1n, 1n]) for (const sp of [-1n, 1n])
    for (const se of [-1n, 1n]) for (const sk of [-1n, 1n]) {
      const d = 2013553212537000000n + sd * 500000n;
      const p = 1007276466580000000n + sp * 500000n;
      const e = 548579909065000n + se * 500n;
      values.push((d - 2n * p - e) * (931494102420n + sk * 5n));
    }
  const minimum = values.reduce((a, b) => a < b ? a : b);
  const maximum = values.reduce((a, b) => a > b ? a : b);
  // Decimal multiplication may preserve additional trailing zeroes.
  assert.equal(Number(r.qRoundingIntervalEv[0]), Number(minimum) / 1e21);
  assert.equal(Number(r.qRoundingIntervalEv[1]), Number(maximum) / 1e21);
  assert.ok(maximum < 0n);
  assert.ok(Number(r.qRoundingIntervalEv[1]) < Number(r.roundedCaptureQEv));
});

test("shared capture binding cancels before uncertainty or rounding comparison", () => {
  python(`
from decimal import Decimal as D,localcontext
with localcontext() as c:
 c.prec=60
 md,mp,me=D('10'),D('4'),D('1')
 expected=md-(mp+mp+me)
 for binding in [D('.001'),D('.02'),D('1.5')]:
  mn=n.capture_neutron_mass(md,mp,binding)
  assert n.capture_route_q_mass(mn,mp,me,binding)==expected
  # Reusing an old inferred neutron with a different binding breaks the identity.
  assert n.capture_route_q_mass(mn,mp,me,binding+D('.01'))!=expected
 # Correlated perturbations of masses propagate through both routes identically.
 for dp,dd,db in [(D('.01'),D('-.02'),D('.003')),(D('-.03'),D('.01'),D('-.004'))]:
  bd=D('.1')+db
  assert n.capture_route_q_mass(n.capture_neutron_mass(md+dd,mp+dp,bd),mp+dp,me,bd)==expected+dd-2*dp
`);
});

test("published pair covariance agrees with an independent discrete error model", () => {
  python(`
from decimal import Decimal as D
# Independent X,Y in {-1,+1}: dp=2X, dd=3X+4Y.
# sd=5, sp=2, cov=6, rho=.6. Enumerate the output instead of propagating diagonally.
errors=[(3*x+4*y)-2*(2*x) for x in [-1,1] for y in [-1,1]]
variance=D(sum(e*e for e in errors))/len(errors)
assert variance==17
assert n.mass_pair_variance(D(5),D(2),D('.6'))==variance
assert n.mass_pair_variance(D(5),D(2),D(0))!=variance
assert n.mass_pair_variance(D(4),D(2),D(1))==0
assert n.mass_pair_variance(D(4),D(2),D(-1))==64
assert n.mass_pair_variance(D(10),D(4),D('.6'))==4*variance
`);
});

test("electronic states and final neutrino mass change the declared threshold", () => {
  python(`
from decimal import Decimal as D
md,mp,me,k=D(10),D(4),D(1),D(100)
ih,id_=D(3),D(5)
hydrogen=mp+me-ih/k; deuterium=md+me-id_/k
bare=n.deuteron_q_mass(md,mp,me)*k
assert n.bare_q_from_atomic_masses(deuterium,hydrogen,id_,ih,k)==bare==100
assert (deuterium-2*hydrogen)*k!=bare
assert n.deuteron_q_mass(md,mp,me,D(2))*k==bare-200
assert n.threshold_status(D(-1))=='energetically-excluded'
for allowed in [D(0),D(1)]:
 assert n.threshold_status(allowed)=='not-excluded-by-rest-mass-threshold'
`);
});

test("threshold helpers reject nonfinite, invalid-state and covariance inputs", () => {
  python(`
from decimal import Decimal as D
bad=[
 lambda:n.deuteron_q_mass(True,D(1),D(1)),
 lambda:n.deuteron_q_mass(D(2),D(1),D('NaN')),
 lambda:n.deuteron_q_mass(D(2),D(1),D(1),D(-1)),
 lambda:n.rest_mass_excess(D(2),[D(1)]),
 lambda:n.capture_neutron_mass(D(1),D(4),D('.1')),
 lambda:n.capture_route_q_mass(D(2),D(1),D(0),D('.1')),
 lambda:n.mass_pair_variance(D(1),D(1),D('1.01')),
 lambda:n.mass_pair_variance(D(-1),D(1),D(0)),
 lambda:n.mass_pair_variance(D(1),D(1),D('Infinity')),
 lambda:n.q_rounding_interval(D(3),D(1),D('.1'),[D(0)]*2,D(2),D(0)),
 lambda:n.q_rounding_interval(D(3),D(1),D('.1'),[D(0)]*3,D(2),D(2)),
 lambda:n.q_rounding_interval(D(3),D(1),D('.1'),[D(0),D(0),D('.2')],D(2),D(0)),
 lambda:n.bare_q_from_atomic_masses(D(2),D(1),D(-1),D(1),D(1)),
 lambda:n.threshold_status(D('NaN')),
]
for call in bad:
 try: call()
 except (AssertionError,ArithmeticError): pass
 else: raise AssertionError('Invalid threshold, state or covariance input admitted')
`);
});

test("local analytical ownership does not certify the input mass measurements", () => {
  assert.deepEqual([...NUCLEAR_ENERGETICS_CHECKS], [["deuteron-beta-threshold-arithmetic", "C-phys-deuteron-beta-threshold"]]);
  assert.deepEqual([...NUCLEAR_ENERGETICS_ANALYTICAL_SOURCES], [["C-phys-deuteron-beta-threshold", "nuclear-energetics-verifier"]]);
  assert.deepEqual(NUCLEAR_ENERGETICS_ADMISSION.localStudySources, [["deuteron-beta-energetics", "nuclear-energetics-verifier"]]);
  assert.equal(NUCLEAR_ENERGETICS_ADMISSION.definitions.length, 1);
  assert.equal(NUCLEAR_ENERGETICS_ADMISSION.contexts.length, 1);
  assert.equal(NUCLEAR_ENERGETICS_ADMISSION.observations.length, 1);
  assert.ok(NUCLEAR_ENERGETICS_ADMISSION.dependencies.some(([, source, target]) => source === "rau-joint-adjustment" && target === "deuteron-beta-threshold"));
});
