import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
from decimal import Decimal as D, getcontext
from fractions import Fraction as F
from itertools import product
getcontext().prec = 60
spec = importlib.util.spec_from_file_location("proton_moment", "models/causal-emergence/canonical/verify-proton-moment.py")
p = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p)

def close(actual, expected):
    assert abs(actual - expected) <= D('1e-45') * max(D(1), abs(expected)), (actual, expected)

def decimal_fraction(value):
    return D(value.numerator) / D(value.denominator)

${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8", timeout: 10000 });
}

test("proton frequency reconstruction obeys the ideal-trap closure and common-unit invariants", () => {
  python(`
for plus, minus in [(D(30000000), D(7000)), (D(4), D(1)), (D('.1'), D('.04'))]:
    # Independent ideal Penning-trap identity: nu_z^2 = 2 nu_+ nu_-,
    # hence the free cyclotron frequency must equal nu_+ + nu_-.
    axial = (2 * plus * minus).sqrt()
    free = p.free_cyclotron(plus, axial, minus)
    close(free, plus + minus)
    for scale in map(D, ['.000001', '1', '60', '6.283185307179586']):
        scaled = p.free_cyclotron(plus * scale, axial * scale, minus * scale)
        close(scaled, free * scale)
        for g in map(D, ['2', '5.58569468924', '9']):
            close(p.moment_ratio(g * free * scale / 2, scaled), g / 2)

# Derive both frequencies from field and charge/mass, rather than reusing
# the reconstruction formula. Common clock or field scales cancel.
for field, charge_mass, clock in product(map(D, ['.01', '1.89', '5']),
                                       map(D, ['.25', '95800000']),
                                       map(D, ['.999', '1', '1.005'])):
    g, two_pi = D('5.58569468924'), D('6.283185307179586')
    cyclotron = charge_mass * field / two_pi
    larmor = g * charge_mass * field / (2 * two_pi)
    close(p.moment_ratio(larmor / clock, cyclotron / clock), g / 2)
    mismatched = p.moment_ratio(larmor * D('1.01') / clock, cyclotron / clock)
    close(mismatched, g / 2 * D('1.01'))
    assert mismatched != g / 2
`);
});

test("frequency shifts retain the measured-bias correction sign and the first-order boundary", () => {
  python(`
for larmor_shift, cyclotron_shift in product(map(D, ['-.1', '-.000000003', '0', '.000000007', '.2']), repeat=2):
    actual = p.relative_frequency_shift(larmor_shift, cyclotron_shift)
    exact = (1 + F(larmor_shift)) / (1 + F(cyclotron_shift)) - 1
    close(actual, decimal_fraction(exact))
    if larmor_shift == cyclotron_shift:
        assert actual == 0
    first_order = larmor_shift - cyclotron_shift
    remainder = -cyclotron_shift * first_order / (1 + cyclotron_shift)
    close(actual - first_order, remainder)

observed, bias = D('2.792847348'), D('-.64e-9')
corrected_first_order = p.corrected_value(observed, -bias)
exact_bias_removal = observed / (1 + bias)
assert corrected_first_order.quantize(D('1e-9')) == D('2.792847350')
assert exact_bias_removal.quantize(D('1e-9')) == D('2.792847350')
assert abs(exact_bias_removal - corrected_first_order) < D('2e-18')
assert p.corrected_value(observed, bias).quantize(D('1e-9')) == D('2.792847346')
for a, b in product(map(D, ['-.01', '0', '.03']), repeat=2):
    close(p.corrected_value(p.corrected_value(D(7), a), b),
          p.corrected_value(D(7), a + b + a * b))
`);
});

test("symmetric spin-step variance follows a probability distribution and squares frequency units", () => {
  python(`
for probability, step in product(map(D, ['0', '.01', '.3', '.8', '1']), map(D, ['.02', '.2', '3'])):
    distribution = [(-step, probability / 2), (D(0), 1 - probability), (step, probability / 2)]
    mean = sum(value * weight for value, weight in distribution)
    variance = sum((value - mean) ** 2 * weight for value, weight in distribution)
    assert mean == 0
    assert p.symmetric_spin_step_variance(probability, step) == variance
    assert p.symmetric_spin_step_variance(probability, step * 1000) == variance * 1000 ** 2
    if probability != 0:
        # The unsquared printed term cannot transform as a variance.
        assert probability * step * 1000 != probability * step * 1000 ** 2
`);
});

test("systematic component errors form the stated linear envelope, not an independent-error reduction", () => {
  python(`
shifts = list(map(D, ['0', '8', '-44', '1', '-98', '0']))
sigmas = list(map(D, ['9', '4', '26', '1', '3', '80']))
center, envelope = p.systematic_budget(shifts, sigmas)
# Enumerate independently varied signed errors. The maximum absolute
# excursion is the linear envelope, including a fully correlated direction.
realizations = [sum(shift + sign * error for shift, sign, error in zip(shifts, signs, sigmas))
                for signs in product((-1, 1), repeat=len(shifts))]
assert max(realizations) - center == envelope
assert center - min(realizations) == envelope
assert center == -133 and envelope == 123
assert p.quadrature(sigmas) < envelope
assert p.systematic_budget(shifts[::-1], sigmas[::-1]) == (center, envelope)
assert p.systematic_budget([x * 1000 for x in shifts], [x * 1000 for x in sigmas]) == (center * 1000, envelope * 1000)
for repeats in [1, 2, 8]:
    assert p.systematic_budget([D(0)] * repeats, [D(3)] * repeats)[1] == 3 * repeats

# The final two quoted terms have a separate arithmetic compatibility check;
# this does not replace the authors' conservative component sum.
for stat, systematic, reported, unit in [('75e-11', '34e-11', '82e-11', '1e-11'),
                                          ('7e-9', '6e-9', '9e-9', '1e-9')]:
    result = p.quadrature([D(stat), D(systematic)])
    close(result ** 2, D(stat) ** 2 + D(systematic) ** 2)
    assert result.quantize(D(unit)) == D(reported)
`);
});

test("printed correction bounds contain independent rational evaluations without certifying exact centers", () => {
  python(`
mean, mean_half, correction, correction_half = map(D, ['2.79284734500', '5e-12', '-133e-12', '.5e-12'])
low, high = p.correction_rounding_interval(mean, mean_half, correction, correction_half)
independent = []
for x, y in product(map(F, ['-1', '-.5', '0', '.5', '1']), repeat=2):
    result = (F(mean) + x * F(mean_half)) * (1 + F(correction) + y * F(correction_half))
    independent.append(result)
    assert F(low) <= result <= F(high)
assert F(low) == min(independent) and F(high) == max(independent)
assert p.corrected_value(mean, correction).quantize(D('1e-11')) != D('2.79284734462')
reported = F('2.79284734462')
final_low, final_high = reported - F('5e-12'), reported + F('5e-12')
assert max(min(independent), final_low) < min(max(independent), final_high)
# Display compatibility does not imply the displayed final center itself
# equals a reconstruction from the central printed inputs.
assert reported < min(independent)
assert high - low < D('75e-11')
for scale in map(D, ['.1', '1000']):
    scaled = p.correction_rounding_interval(mean * scale, mean_half * scale, correction, correction_half)
    close(scaled[0], low * scale)
    close(scaled[1], high * scale)
`);
});

test("proton moment arithmetic fails closed on invalid quantities and uncertainty domains", () => {
  python(`
def rejects(call):
    try:
        call()
    except AssertionError:
        return
    raise AssertionError('Invalid proton moment arithmetic input admitted')

for bad in [D('NaN'), D('sNaN'), D('Infinity'), D('-Infinity'), True, 1, '1']:
    rejects(lambda bad=bad: p.moment_ratio(bad, D(1)))
    rejects(lambda bad=bad: p.moment_ratio(D(1), bad))
    rejects(lambda bad=bad: p.free_cyclotron(D(3), bad, D(1)))
    rejects(lambda bad=bad: p.relative_frequency_shift(bad, D(0)))
    rejects(lambda bad=bad: p.relative_frequency_shift(D(0), bad))
    rejects(lambda bad=bad: p.symmetric_spin_step_variance(bad, D(1)))
    rejects(lambda bad=bad: p.systematic_budget([bad], [D(1)]))
    rejects(lambda bad=bad: p.systematic_budget([D(0)], [bad]))
    rejects(lambda bad=bad: p.quadrature([bad]))
    rejects(lambda bad=bad: p.corrected_value(D(1), bad))
for bad in [D(0), D(-1)]:
    rejects(lambda bad=bad: p.moment_ratio(bad, D(1)))
    rejects(lambda bad=bad: p.moment_ratio(D(1), bad))
    for index in range(3):
        modes = [D(3), D(2), D(1)]
        modes[index] = bad
        rejects(lambda modes=modes: p.free_cyclotron(*modes))
    rejects(lambda bad=bad: p.symmetric_spin_step_variance(D('.5'), bad))
for bad in [D(-1), D('-1.01')]:
    rejects(lambda bad=bad: p.relative_frequency_shift(bad, D(0)))
    rejects(lambda bad=bad: p.relative_frequency_shift(D(0), bad))
    rejects(lambda bad=bad: p.corrected_value(D(1), bad))
for bad in [D('-.01'), D('1.01')]:
    rejects(lambda bad=bad: p.symmetric_spin_step_variance(bad, D(1)))
rejects(lambda: p.systematic_budget([], []))
rejects(lambda: p.systematic_budget([D(0)], [D(1), D(2)]))
rejects(lambda: p.systematic_budget([D(0)], [D(-1)]))
rejects(lambda: p.quadrature([]))
rejects(lambda: p.quadrature([D(-1)]))
for args in [('1', '1', '0', '.1'), ('1', '.1', '-.9', '.1'),
             ('1', '0', '0', '.1'), ('1', '.1', '0', '0')]:
    rejects(lambda args=args: p.correction_rounding_interval(*map(D, args)))
assert p.quadrature([D(0), D(0)]) == 0
`);
});

test("proton moment evidence preserves source conflicts, cycle exclusions and unperformed replays", () => {
  const report = JSON.parse(python("print(p.json.dumps(p.verify()))"));
  assert.equal(report.observable, "mu_p/mu_N = g_p/2 = nu_L/nu_c");
  assert.equal(report.schneiderCycleCounts.reduce((total, value) => total + value, 0), report.schneiderAcquiredCycles);
  assert.equal(report.schneiderAcquiredCycles - report.schneiderRetainedCycles, report.schneiderExcludedCycles);
  assert.equal(report.schneiderSystematicRule, "linear-sum");
  assert.equal(report.schneiderDisplayRoundingCompatible, true);
  assert.equal(report.mooserSubtractionRoundsToPrintedFinal, true);
  for (const key of ["syntheticInputsAreMeasurements", "printedThesisGammaConsistentWithGFactor",
    "printedThesisVarianceTermConsistentWithFigure72", "schneiderPrintedCenterExactlyReproduced",
    "mooserDirectAdditionMatchesPrintedFinal", "rawAcquisitionReplayed", "cycleSelectionReplayed",
    "spinStateLikelihoodReplayed", "resonanceFitReplayed", "fullCorrectionBudgetReplayed",
    "fullCovarianceReplayed", "siMomentConversionReplayed", "bernauerNormalizationReplaced",
    "independentThesisMeasurement", "publishedNumericalErrorEstablished"]) {
    assert.equal(report[key], false, key);
  }
  assert.match(report.limit, /likelihood-normalization conflict is not implemented or resolved/);
  assert.match(report.limit, /not a publication discrepancy/);
});

// Load the assembled source only for admission-boundary tests. The numerical
// cases above remain independent of the graph's copied reported quantities.
let assembledSource;
async function rejectsSourceChanges(mutations) {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  assembledSource ??= await loadCanonicalSource();
  for (const [name, change] of mutations) {
    const copy = structuredClone(assembledSource);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}

const findClaim = (data, id) => data.graph.claims.find((claim) => claim.id === id);
function removeBoundary(data, id, fragment) {
  const claim = findClaim(data, id);
  const before = claim.limitations.length;
  claim.limitations = claim.limitations.filter((limit) => !limit.includes(fragment));
  assert.ok(claim.limitations.length < before, "Mutation must remove an existing reviewed boundary");
}

test("magnetic normalization cannot become a new mass measurement or replace the historical Sachs input", async () => {
  await rejectsSourceChanges([
    ["g replaces g/2", (data) => { findClaim(data, "D-phys-proton-moment-normalization").statement = "The magnetic moment in nuclear magnetons equals g_p."; }],
    ["unit definition becomes a proton-mass observation", (data) => removeBoundary(data, "D-phys-proton-moment-normalization", "separate absolute proton-mass")],
    ["later moment rewrites historical form-factor normalization", (data) => removeBoundary(data, "D-phys-proton-moment-normalization", "retroactively insert")],
    ["Sachs relation becomes measured calibration transfer", (data) => { data.graph.relations.find((relation) => relation.id === "physics:proton-moment-normalization-sachs").source = "phys:schneider2017-moment"; }],
    ["common reference removes differential drift", (data) => removeBoundary(data, "D-phys-proton-moment-frequency-ratio", "differential drift")]
  ]);
});

test("proton campaigns retain their identity, selections and source-specific formula conflicts", async () => {
  await rejectsSourceChanges([
    ["within-campaign cycles become independent replications", (data) => removeBoundary(data, "C-phys-schneider2017-moment-statistic", "1264")],
    ["printed inverse ratio and variance conflict disappears", (data) => removeBoundary(data, "C-phys-schneider2017-moment-statistic", "Equation 7.4")],
    ["likelihood discrepancy becomes calibrated coverage", (data) => removeBoundary(data, "C-phys-schneider2017-moment-statistic", "L=2*sum")],
    ["thesis becomes an independent measurement", (data) => removeBoundary(data, "C-phys-schneider2017-moment", "same result")],
    ["Mooser and Schneider can be independently averaged", (data) => removeBoundary(data, "C-phys-mooser2014-moment", "not averaged")],
    ["correction loses its reused statistical estimate", (data) => { data.graph.relations = data.graph.relations.filter((relation) => relation.id !== "physics:schneider2017-moment-statistic-schneider2017-moment"); }]
  ]);
});

test("proton correction and uncertainty roles cannot be replaced by exact numerical reproduction", async () => {
  await rejectsSourceChanges([
    ["systematic components silently become independent quadrature", (data) => removeBoundary(data, "C-phys-schneider2017-moment", "linearly to 123")],
    ["printed center becomes exact fit replay", (data) => removeBoundary(data, "C-phys-proton-moment-arithmetic", "display-rounding")],
    ["bias and correction sign are conflated", (data) => removeBoundary(data, "C-phys-mooser2014-moment", "Subtracting the negative")],
    ["arithmetic is attached to the measured moment", (data) => { findClaim(data, "C-phys-schneider2017-moment").checkIds = ["proton-moment-printed-arithmetic"]; }],
    ["comparison becomes a physical exclusion", (data) => { data.physics.comparisons.find((comparison) => comparison.id === "proton-moment-arithmetic").result = "specified-alternative-disfavored"; }]
  ]);
});

test("proton source review and executable evidence retain their actual extent", async () => {
  await rejectsSourceChanges([
    ["abstract review becomes a full primary article review", (data) => { data.graph.sources.find((source) => source.id === "schneider2017").review.extent = "full-primary-article"; }],
    ["reported final result loses the actual journal citation", (data) => { const claim = findClaim(data, "C-phys-schneider2017-moment"); claim.citations = claim.citations.filter((citation) => citation.sourceId !== "schneider2017"); }],
    ["arithmetic loses executable provenance", (data) => { const claim = findClaim(data, "C-phys-proton-moment-arithmetic"); claim.citations = claim.citations.filter((citation) => citation.sourceId !== "proton-moment-verifier"); }],
    ["correction calculation becomes a new acquisition", (data) => { data.readiness.nodeRoles.find((role) => role.nodeId === "phys:schneider2017-moment-inference-context").role = "experimental-context"; }],
    ["dependency becomes physical causation", (data) => { data.graph.relations.find((relation) => relation.id === "physics:proton-moment-frequency-ratio-schneider2017-moment").kind = "functional"; }]
  ]);
});
