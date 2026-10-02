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
spec=importlib.util.spec_from_file_location("decay", "models/causal-emergence/canonical/verify-proton-decay.py")
b=importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("partial-lifetime bounds cannot become all-channel or eternal stability", () => {
  rejects([
    ["branching fraction suppressed", (d) => drop(d, "D-phys-partial-lifetime", "B is unknown")],
    ["null becomes eternal stability", (d) => drop(d, "C-phys-takenaka2020-partial-bounds", "eternal proton stability")],
    ["units changed from years", (d) => { claim(d, "C-phys-takenaka2020-partial-bounds").statement = claim(d, "C-phys-takenaka2020-partial-bounds").statement.replaceAll("years", "seconds"); }],
    ["conditional inference becomes exclusion of all decay", (d) => { d.physics.comparisons.find((c) => c.id === "takenaka2020-partial-bounds").result = "specified-alternative-disfavored"; }],
    ["definition promoted to observed process", (d) => { d.graph.entities.find((e) => e.id === "phys:partial-lifetime").kind = "scoped-process"; }]
  ]);
});

test("the search retains shared acquisition, selected counts and detector boundaries", () => {
  rejects([
    ["reused exposure becomes replication", (d) => drop(d, "C-phys-takenaka2020-counts", "earlier 306")],
    ["unobserved neutron tag becomes no emitted neutron", (d) => drop(d, "C-phys-takenaka2020-counts", "no tag is not proof")],
    ["outside volume included", (d) => drop(d, "M-phys-takenaka2020-search-context", "outside region")],
    ["candidate becomes observed proton decay", (d) => { claim(d, "C-phys-takenaka2020-counts").statement = "A proton decay was observed in SK-IV."; }],
    ["recalibrated earlier candidate becomes new event", (d) => drop(d, "C-phys-takenaka2020-counts", "recalibration")],
    ["background expectation becomes measured count", (d) => drop(d, "C-phys-takenaka2020-counts", "model expectations")]
  ]);
});

test("response and Bayesian calculation keep their nonexperimental roles and inputs", () => {
  rejects([
    ["response simulation becomes acquisition", (d) => { d.physics.studies.find((s) => s.id === "takenaka2020-response").studyType = "primary-experiment"; }],
    ["same-data inference becomes new acquisition", (d) => { d.physics.studies.find((s) => s.id === "takenaka2020-inference").studyType = "primary-experiment"; }],
    ["nuclear response omitted", (d) => drop(d, "C-phys-takenaka2020-partial-bounds", "equal decay probability")],
    ["prior dependence hidden", (d) => drop(d, "C-phys-takenaka2020-partial-bounds", "uniform channel-rate prior")],
    ["printed formula certifies full likelihood", (d) => drop(d, "C-phys-takenaka2020-partial-bounds", "joint normalization")],
    ["counts inference becomes causal formation", (d) => { d.graph.relations.find((r) => r.id === "physics:takenaka2020-counts-takenaka2020-partial-bounds").kind = "functional"; }],
    ["unreviewed source scope promoted", (d) => { d.graph.sources.find((s) => s.id === "takenaka2020").review.extent = "full-primary-article-and-complete-code"; }]
  ]);
});

test("the local arithmetic cannot certify the published lifetime bounds", () => {
  rejects([
    ["check moved to published limit", (d) => { claim(d, "C-phys-takenaka2020-partial-bounds").checkIds = ["takenaka2020-printed-arithmetic"]; }],
    ["local verifier citation removed", (d) => { const c = claim(d, "C-phys-proton-decay-arithmetic"); c.citations = c.citations.filter((r) => r.sourceId !== "proton-decay-verifier"); }],
    ["censored cells silently become zero", (d) => drop(d, "C-phys-proton-decay-arithmetic", "replacing <0.01 by zero")],
    ["tail becomes posterior event identity", (d) => drop(d, "C-phys-proton-decay-arithmetic", "posterior probability")]
  ]);
});

test("rounded bookkeeping preserves nominal exposure, censored backgrounds and replay limits", () => {
  const r = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.equal(r.summedPrintedExposureKtonYears, "450.7");
  assert.equal(r.nominalPaperExposureKtonYears, "450");
  assert.equal(r.efficiencies.length, 4);
  assert.ok(Math.abs(r.muonBackgroundAtLeastOne - 0.609372164641479) < 1e-14);
  assert.deepEqual(r.backgrounds[0].printedCells.slice(0, 4), ["0.01", "0.01", "<0.01", "<0.01"]);
  assert.ok(Number(r.backgrounds[0].roundingLower) < .59 && Number(r.backgrounds[0].roundingUpperExclusive) > .59);
  for (const key of ["rawAcquisitionReplayed", "detectorSimulationReplayed", "backgroundModelReplayed", "lifetimeLimitReplayed"]) assert.equal(r[key], false);
});

test("bookkeeping obeys independent probability and exposure invariants", () => {
  python(`
from decimal import Decimal as D
# Independent Poisson recurrence for P(N>=1), rather than subtracting exp(-mu).
term=b.math.exp(-.94); tail=0
for k in range(1,40):
 term *= .94/k
 tail += term
assert abs(tail-b.at_least_one(.94)) < 1e-14
assert b.at_least_one(0)==0
assert b.at_least_one(2) > b.at_least_one(1)
# Two disjoint momentum bins, unequal exposure and unit-invariant weighting.
w=[D(1),D(3)]; lo=[D(10),D(20)]; hi=[D(20),D(40)]
assert b.weighted_efficiency(w,lo,hi)==D('52.5')
assert b.weighted_efficiency([100*v for v in w],lo,hi)==D('52.5')
assert b.weighted_efficiency(w[::-1],lo[::-1],hi[::-1])==D('52.5')
# Censoring has a different admissible interval from a displayed zero.
assert b.printed_background_interval(['<0.01']) == (D(0),D('.01'))
assert b.printed_background_interval(['0.00']) == (D(0),D('.005'))
for invalid in [-1,float('inf'),float('nan'),True]:
 try:b.at_least_one(invalid)
 except AssertionError:pass
 else:raise AssertionError('Invalid mean admitted')
for args in [([D(0)], [D(1)], [D(2)]), ([D(1)], [D(80)], [D(30)]), (w,lo,[D(20)]), ([D('NaN')],[D(1)],[D(2)])]:
 try:b.weighted_efficiency(*args)
 except AssertionError:pass
 else:raise AssertionError('Invalid exposure or acceptance admitted')
`);
});
