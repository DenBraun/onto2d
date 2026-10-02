import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
from decimal import Decimal as D, getcontext
from itertools import product
getcontext().prec = 60
spec = importlib.util.spec_from_file_location("alpha_gamma", "models/causal-emergence/canonical/verify-alpha-gamma.py")
a = importlib.util.module_from_spec(spec)
spec.loader.exec_module(a)

def close(actual, expected):
    assert abs(actual - expected) <= D('1e-45') * max(D(1), abs(expected)), (actual, expected)

def gls_two(means, sigmas, shared_sigma):
    # Invert the complete 2x2 covariance matrix independently. The shared
    # additive uncertainty is frozen before constructing the covariance.
    c = shared_sigma ** 2
    v00, v01, v11 = sigmas[0] ** 2 + c, c, sigmas[1] ** 2 + c
    determinant = v00 * v11 - v01 ** 2
    inverse = [[v11 / determinant, -v01 / determinant],
               [-v01 / determinant, v00 / determinant]]
    column_sums = [sum(row[j] for row in inverse) for j in range(2)]
    precision = sum(column_sums)
    weights = [s / precision for s in column_sums]
    return sum(w * m for w, m in zip(weights, means)), (1 / precision).sqrt(), weights

${program}`], {
    cwd: new URL("../../", import.meta.url),
    encoding: "utf8",
    timeout: 10000
  });
}

test("source activity agrees with independent covariance GLS without reducing shared uncertainty", () => {
  python(`
for means, sigmas in [([D('23543.9'), D('23545.6')], [D('8.4'), D('5.2')]),
                      ([D(100), D(120)], [D(2), D(7)]),
                      ([D(3), D(11)], [D(4), D(1)])]:
    base_mean, base_sigma, base_weights = gls_two(means, sigmas, D(0))
    for fraction in map(D, ['0', '.000023', '.00023', '.2']):
        mean, independent, total = a.weighted_activity(means, sigmas, fraction)
        expected_mean, expected_sigma, weights = gls_two(means, sigmas, fraction * base_mean)
        close(mean, expected_mean)
        close(independent, base_sigma)
        close(total, expected_sigma)
        for observed, expected in zip(weights, base_weights):
            close(observed, expected)
        assert total >= independent
        # Reordering observations and changing the rate unit cannot alter
        # the underlying estimate or its covariance structure.
        reversed_result = a.weighted_activity(means[::-1], sigmas[::-1], fraction)
        scaled_result = a.weighted_activity([x * 1000 for x in means], [x * 1000 for x in sigmas], fraction)
        for original, reversed_value, scaled in zip((mean, independent, total), reversed_result, scaled_result):
            close(original, reversed_value)
            close(original * 1000, scaled)

for n in [1, 2, 4, 16]:
    mean, independent, total = a.weighted_activity([D(100)] * n, [D(2)] * n, D('.03'))
    assert mean == 100
    close(independent ** 2, D(4) / n)
    close(total ** 2 - independent ** 2, D(9))
    assert total > 3
`);
});

test("alpha gamma transfer cancels nuisance factors with unequal thin and thick run intensities", () => {
  python(`
for branch, response, angle, thin, thick in product(
        map(D, ['.0002', '.937', '1']), map(D, ['.000013', '.5', '1']),
        map(D, ['.0002', '.008', '.4']), map(D, ['11', '731', '12345.5']),
        map(D, ['2', '29000', '4700000.3'])):
    gamma_thin = response * branch * thin
    alpha_thin = angle * thin
    gamma_thick = response * branch * thick
    close(a.neutron_rate(gamma_thick, alpha_thin, gamma_thin, angle), thick)
    # Changing the earlier thin-run intensity leaves the thick-run rate
    # unchanged. Changing the counting-rate unit scales the inferred rate.
    close(a.neutron_rate(gamma_thick, alpha_thin * 7, gamma_thin * 7, angle), thick)
    close(a.neutron_rate(gamma_thick * 60, alpha_thin * 60, gamma_thin * 60, angle), thick * 60)

# Unequal gamma responses or branching factors do not cancel: this is a
# counterexample to unconditional transfer, not another physical result.
thin, thick, angle = D(100), D(900), D('.01')
thin_response, thick_response = D('.1'), D('.2')
thin_branch, thick_branch = D('.4'), D('.8')
biased = a.neutron_rate(thick_response * thick_branch * thick,
                       angle * thin, thin_response * thin_branch * thin, angle)
assert biased == 4 * thick
assert biased != thick
`);
});

test("attenuation conserves neutrons, composes path lengths and approaches the thin target limit", () => {
  python(`
previous_absorption, previous_shielding = D(0), D(1)
previous_transmission = D(1)
for depth in map(D, ['.00000001', '.000001', '.0001', '.01', '.2', '1', '5']):
    absorbed, transmitted, shielding = a.attenuation(depth)
    assert absorbed + transmitted == 1
    assert 0 < absorbed < min(depth, D(1))
    assert 0 < transmitted < 1
    assert absorbed > previous_absorption
    assert transmitted < previous_transmission
    assert shielding > previous_shielding
    close(shielding * absorbed, depth)
    if depth <= D('.01'):
        # Independent analytic bounds from x/(1-exp(-x)); these exclude
        # a transmission used as absorption and a missing thin-limit term.
        assert 1 + depth / 2 < shielding < 1 + depth / 2 + depth ** 2 / 12
    previous_absorption, previous_transmission, previous_shielding = absorbed, transmitted, shielding
for x, y in product(map(D, ['.001', '.1', '1']), repeat=2):
    tx = a.attenuation(x)[1]
    ty = a.attenuation(y)[1]
    combined_absorption, combined_transmission, _ = a.attenuation(x + y)
    close(combined_transmission, tx * ty)
    close(combined_absorption, (1 - tx) + tx * (1 - ty))

efficiency, angle, wavelength, reference = map(D, ['3.1101e-5', '.0042021', '.49605', '.1798'])
depth = a.central_optical_depth(efficiency, angle, wavelength, reference)
close(depth * 2 * angle * reference / wavelength, efficiency)
assert a.central_optical_depth(efficiency, angle, wavelength * 1000, reference * 1000) == depth
assert a.central_optical_depth(efficiency * 2, angle * 2, wavelength, reference) == depth
close(a.central_optical_depth(efficiency, angle, wavelength * 2, reference), depth * 2)
proper = a.attenuation(depth)
literal_equation28 = a.attenuation(efficiency / angle * wavelength / reference)
close(literal_equation28[1], proper[1] ** 2)
assert abs(proper[1] - D('.989846')) < D('.000012')
assert abs(literal_equation28[1] - D('.989846')) > D('.01')
assert abs(proper[0] - D('.989846')) > D('.9')
`);
});

test("display rounding bounds cover independent interior calculations without becoming measurement uncertainty", () => {
  python(`
means, sigmas, half_step = [D(10), D(13)], [D(1), D(3)], D('.1')
low, high = a.two_stack_rounding_interval(means, sigmas, half_step)
evaluated = []
for offsets in product(map(D, ['-.1', '-.05', '0', '.05', '.1']), repeat=4):
    values = [value + offset for value, offset in zip([*means, *sigmas], offsets)]
    observed, _, _ = gls_two(values[:2], values[2:], D(0))
    assert low - D('1e-45') <= observed <= high + D('1e-45')
    evaluated.append(observed)
close(low, min(evaluated))
close(high, max(evaluated))
tighter = a.two_stack_rounding_interval(means, sigmas, half_step / 2)
assert low < tighter[0] < tighter[1] < high
scaled = a.two_stack_rounding_interval([m * 100 for m in means], [s * 100 for s in sigmas], half_step * 100)
close(scaled[0], low * 100)
close(scaled[1], high * 100)

rate, angle, dr, da = map(D, ['125.740', '.0053415', '.0005', '.00000005'])
low, high = a.source_activity_interval(rate, angle, dr, da)
for r_fraction, a_fraction in product(map(D, ['-1', '-.5', '0', '.5', '1']), repeat=2):
    observed = (rate + r_fraction * dr) / (angle + a_fraction * da)
    assert low <= observed <= high
assert low > D('23538.4') + D('.05')
assert rate / angle - D('23538.4') < D('4.6')
# The last-digit interval excludes the printed central result although its
# measurement uncertainty is larger than this bookkeeping discrepancy.
assert high - low < D('4.6')
`);
});

test("calibration arithmetic rejects invalid domains and absorption below decimal precision", () => {
  python(`
def rejects(call):
    try:
        call()
    except AssertionError:
        return
    raise AssertionError('Invalid calibration arithmetic input admitted')

bad_positive = [D(0), D(-1), D('NaN'), D('sNaN'), D('Infinity'), D('-Infinity'), True, 1, '.1']
for bad in bad_positive:
    for index in range(4):
        args = [D(1), D(1), D(1), D('.1')]
        args[index] = bad
        rejects(lambda args=args: a.neutron_rate(*args))
        args = [D('.1'), D('.1'), D('.5'), D('.2')]
        args[index] = bad
        rejects(lambda args=args: a.central_optical_depth(*args))
    rejects(lambda bad=bad: a.attenuation(bad))
    rejects(lambda bad=bad: a.weighted_activity([bad], [D(1)], D(0)))
    rejects(lambda bad=bad: a.weighted_activity([D(1)], [bad], D(0)))

rejects(lambda: a.neutron_rate(D(1), D(1), D(1), D('1.01')))
rejects(lambda: a.central_optical_depth(D('1.01'), D('.1'), D(1), D(1)))
rejects(lambda: a.central_optical_depth(D('.1'), D('1.01'), D(1), D(1)))
for fraction in [D(-1), D('NaN'), D('Infinity'), False, '.01']:
    rejects(lambda fraction=fraction: a.weighted_activity([D(1)], [D(1)], fraction))
rejects(lambda: a.weighted_activity([], [], D(0)))
rejects(lambda: a.weighted_activity([D(1)], [D(1), D(2)], D(0)))
for means, sigmas, step in [([D(10), D(11)], [D(1), D(2)], D('.5')),
                            ([D(11), D(10)], [D(1), D(2)], D('.1')),
                            ([D(10), D(12)], [D('.1'), D(2)], D('.1')),
                            ([D(10)], [D(1)], D('.1')),
                            ([D(10), D(12)], [D(1), D(2)], D(0))]:
    rejects(lambda means=means, sigmas=sigmas, step=step: a.two_stack_rounding_interval(means, sigmas, step))
for args in [('1', '.1', '1', '.01'), ('1', '.1', '.01', '.1'), ('1', '.99', '.01', '.02')]:
    rejects(lambda args=args: a.source_activity_interval(*map(D, args)))
rejects(lambda: a.attenuation(D('1e-100')))
`);
});

test("printed arithmetic retains source conflicts and denies unavailable experimental replays", () => {
  const report = JSON.parse(python("print(a.json.dumps(a.verify()))"));
  for (const key of [
    "syntheticInputsAreMeasurements", "thesisPrintedMeanExactlyReproduced",
    "thesisPrintedCommonFractionsConsistent", "paperPrintedActivityRatioConsistent",
    "printedEquation28ConsistentWithEquation12", "printedFinalAbsorptionLabelConsistent",
    "printedCorrectionCentralValuesExactlyReproduced", "rawAcquisitionReplayed",
    "absoluteCalibrationReplayed", "fullCovarianceReplayed", "correctionIterationReplayed",
    "lifetimeInferenceReplayed", "publishedNumericalErrorEstablished"
  ]) assert.equal(report[key], false, key);
  assert.equal(report.thesisUnroundedMeanCompatibility, true);
  const printedMean = Number(report.thesisWeightedActivityPerSecond);
  assert.equal(printedMean.toFixed(1), "23545.1");
  assert.equal(report.thesisReportedActivityPerSecond, "23545.2");
  const [low, high] = report.thesisDisplayRoundingIntervalPerSecond.map(Number);
  assert.ok(low < 23545.15 && high > 23545.15);
  assert.equal(Number(report.thesisBodyTotalSigmaPerSecond).toFixed(1), report.thesisReportedSigmaPerSecond);
  assert.notEqual(Number(report.thesisAppendixTotalSigmaPerSecond).toFixed(1), report.thesisReportedSigmaPerSecond);
  assert.notEqual(report.thesisReportedActivityPerSecond, report.paperReportedActivityPerSecond);
  assert.ok(Number(report.paperActivityDisplayRoundingIntervalPerSecond[0]) > Number(report.paperReportedActivityPerSecond) + .05);
  assert.notEqual(Number(report.equation12Transmission), Number(report.reportedTransmission));
  assert.notEqual(Number(report.equation12SelfShielding), Number(report.reportedSelfShielding));
  assert.match(report.limit, /final measured efficiency is an input/i);
  assert.match(report.limit, /rounding intervals are not statistical intervals/i);
});
