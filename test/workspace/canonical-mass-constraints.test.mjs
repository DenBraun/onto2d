import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
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
function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("constraints", "models/causal-emergence/canonical/verify-mass-constraints.py")
b=importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("simultaneous acquisition retains alternating cooling, thermal motion and apparatus survival", () => {
  rejects([
    ["old sequential readout substituted", (d) => { d.physics.studies.find((s) => s.id === "fink2021-simultaneous").preparation = d.physics.studies.find((s) => s.id === "fink2020-ratio").preparation; }],
    ["collision survival becomes intrinsic lifetime", (d) => drop(d, "D-phys-coupled-cyclotron-readout", "intrinsic molecular lifetime")],
    ["field rejection becomes total precision", (d) => drop(d, "D-phys-coupled-cyclotron-readout", "total-uncertainty")],
    ["zero drive erases thermal motion", (d) => drop(d, "C-phys-fink2021-drive-extrapolation", "thermal imbalance")],
    ["correction error claimed independently propagated", (d) => { d.physics.comparisons.find((c) => c.id === "fink2021-drive-extrapolation").result = "conditional-support"; }]
  ]);
});

test("state alternatives cannot become unique identification or a single unconditional error", () => {
  rejects([
    ["five ratios become eleven assigned states", (d) => drop(d, "C-phys-fink2021-state-branches", "five ratios")],
    ["population prior hidden", (d) => drop(d, "C-phys-fink2021-state-branches", "population prior")],
    ["branch probabilities claimed replayed", (d) => drop(d, "C-phys-fink2021-state-branches", "missing supplement")],
    ["alternatives included in Gaussian error", (d) => drop(d, "C-phys-fink2021-deuteron-ratio", "discrete alternatives")],
    ["unique branch claimed", (d) => { d.physics.comparisons.find((c) => c.id === "fink2021-state-branches").result = "specified-alternative-disfavored"; }],
    ["state fit is a new experiment", (d) => { d.physics.studies.find((s) => s.id === "fink2021-state-fit").studyType = "primary-experiment"; }]
  ]);
});

test("nuclear conversion retains H2 theory and the direct deuteron reference", () => {
  rejects([
    ["HD replaces H2", (d) => { claim(d, "C-phys-korobov-h2-energy").statement = claim(d, "C-phys-korobov-hd-energy").statement; }],
    ["theoretical error becomes total", (d) => drop(d, "C-phys-korobov-h2-energy", "Rydberg")],
    ["binding sign boundary removed", (d) => drop(d, "C-phys-fink2021-deuteron-ratio", "positive binding addition")],
    ["adjusted mass replaces direct input", (d) => { d.graph.relations.find((r) => r.id === "physics:rau-deuteron-fink2021-proton-mass").source = "phys:rau-joint-adjustment"; }],
    ["shared reference becomes independent", (d) => drop(d, "C-phys-fink2021-proton-mass", "adopted absolute input")]
  ]);
});

test("CODATA constraints preserve publication-specific input sets and shared covariance", () => {
  rejects([
    ["obsolete FSU ratio used in later adjustment", (d) => { d.graph.relations.find((r) => r.id === "physics:fink2021-ground-ratio-codata2022-frequency-inputs").source = "phys:fink-deuteron-ratio"; }],
    ["later result rewrites Rau historical input", (d) => { d.graph.relations.find((r) => r.id === "physics:fink-deuteron-ratio-rau-joint-adjustment").source = "phys:fink2021-ground-ratio"; }],
    ["derived proton substituted for frequency input", (d) => { d.graph.relations.find((r) => r.id === "physics:liontrap2019-proton-codata2022-frequency-inputs").source = "phys:fink2021-proton-mass"; }],
    ["missing covariance implies independence", (d) => drop(d, "C-phys-codata2022-ion-covariance", "absence of listed")],
    ["capture independently calibrates lattice", (d) => drop(d, "C-phys-codata2022-capture-equation", "does not independently determine")]
  ]);
});

test("lattice input identity and selected source reading remain unresolved", () => {
  rejects([
    ["E13 silently relabelled", (d) => drop(d, "C-phys-codata2022-ill-input", "WS1/NW04")],
    ["error in numerical adjustment asserted", (d) => drop(d, "C-phys-codata2022-ill-input", "does not establish an error")],
    ["calibration identity claimed resolved", (d) => { d.physics.comparisons.find((c) => c.id === "codata2022-ill-input").result = "conditional-support"; }],
    ["selected passages become full source review", (d) => { d.graph.sources.find((s) => s.id === "mohr2025-neutron").review.extent = "full-primary-article"; }],
    ["shared source reading regresses to neutron-only", (d) => { d.graph.sources.find((s) => s.id === "mohr2025-neutron").review.locators.splice(2); }],
    ["printed expression conflicts hidden", (d) => drop(d, "D-phys-mass-adjustment-constraint", "extra hbar")]
  ]);
});

test("printed arithmetic cannot certify a measured ratio or a CODATA adjustment", () => {
  rejects([
    ["arithmetic check transferred to measurement", (d) => { claim(d, "C-phys-fink2021-ground-ratio").checkIds = ["fink2021-printed-arithmetic"]; }],
    ["verifier source dropped", (d) => { const c = claim(d, "C-phys-mass-constraint-arithmetic"); c.citations = c.citations.filter((r) => r.sourceId !== "mass-constraint-verifier"); }],
    ["state likelihood inferred from rounded means", (d) => drop(d, "C-phys-mass-constraint-arithmetic", "does not estimate state assignments")],
    ["conditional branches averaged", (d) => drop(d, "C-phys-mass-constraint-arithmetic", "does not average them")]
  ]);
});

test("printed branch arithmetic retains alternatives, direct quotient and uncertainty limitations", () => {
  const r = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.deepEqual(r.branches.map((v) => v.id), ["published-choice", "lower-branch-1", "lower-branch-2"]);
  assert.equal(r.branches[0].correctedRatio, "0.9992316600030");
  assert.ok(Math.abs(Number(r.branches[1].shiftInPublishedSigma) + 2.7) < 0.05);
  assert.ok(Math.abs(Number(r.branches[2].shiftInPublishedSigma) + 3.6) < 0.05);
  assert.ok(Math.abs(Number(r.protonFromRoundedRatioU) - 1.007276466574) < 1e-12);
  assert.ok(Number(r.independentSystematicSigmaRatio1e12) < 3.3);
  assert.equal(r.publishedSystematicSigmaRatio1e12, "3.7");
  for (const key of ["rawAcquisitionReplayed", "stateAssignmentReplayed", "branchProbabilitiesReplayed", "propagatedUncertaintyReplayed", "molecularTheoryReplayed", "codataAdjustmentReplayed", "systematicUncertaintyDiscrepancyResolved"]) assert.equal(r[key], false);
});

test("mass conversion satisfies an independent balance and rejects impossible binding inputs", () => {
  python(`
from decimal import localcontext
with localcontext() as c:
 c.prec=40
 D=b.D
 # Synthetic masses: two protons of mass2 and electron .03, binding .01,
 # yield molecule4.02. A deuteron3 then requires R=3/4.02 and md/mp=1.5.
 R=D(3)/D('4.02')
 value=b.mass_ratio(R,D('.03'),D('.01'),D(2))
 assert abs(value-D('1.5')) < D('1e-37')
 assert abs(b.mass_ratio(1/R,D('.03'),D('.01'),D(2))-D('1.5')) > D('.1')
 assert b.mass_ratio(R,D('.03'),D('.02'),D(2)) < value
 # Uniform change of mass units leaves the ratio unchanged.
 assert abs(b.mass_ratio(R,D(30),D(10),D(2000))-value) < D('1e-37')
 for inputs in [(D(0),D('.03'),D('.01'),D(2)),(R,D('.03'),D(5),D(2)),(R,D('.03'),D('NaN'),D(2)),(R,D('.03'),D('-.01'),D(2))]:
  try:b.mass_ratio(*inputs)
  except AssertionError:pass
  else:raise AssertionError('Invalid mass balance admitted')
`);
});
