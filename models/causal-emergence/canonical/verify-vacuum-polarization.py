#!/usr/bin/env python3
"""Finite shape and parameterization algebra, not an L3 likelihood replay."""

import json
from fractions import Fraction


def number(value):
    if isinstance(value, bool):
        raise ValueError("Boolean is not a numerical input")
    try:
        return Fraction(value)
    except (ValueError, TypeError, ZeroDivisionError, OverflowError) as error:
        raise ValueError("A finite rational input is required") from error


def normalized_bins(values):
    if not isinstance(values, (list, tuple)) or len(values) < 2:
        raise ValueError("At least two bins are required")
    bins = tuple(number(value) for value in values)
    if any(value < 0 for value in bins) or sum(bins) <= 0:
        raise ValueError("Bin integrals must be nonnegative with positive sum")
    return tuple(value / sum(bins) for value in bins)


def inverse_alpha(alpha_zero_inverse, delta_alpha, slope, q_squared, q_zero_squared):
    a, delta, s, q, q0 = map(number, (alpha_zero_inverse, delta_alpha, slope, q_squared, q_zero_squared))
    denominator = 1 - delta - s * (q - q0)
    if a <= 0 or q >= 0 or q0 >= 0 or denominator <= 0:
        raise ValueError("Positive coupling and spacelike momentum arguments are required")
    return a * denominator


def inverse_difference_shift(alpha_zero_inverse, slope, q_squared, q_zero_squared):
    """Change in inverse-alpha(q0)-inverse-alpha(q) relative to S=0."""
    a, s, q, q0 = map(number, (alpha_zero_inverse, slope, q_squared, q_zero_squared))
    if a <= 0 or q >= 0 or q0 >= 0:
        raise ValueError("Positive reference and spacelike arguments are required")
    return a * s * (q - q0)


def exact_decimal(value):
    # These exported source-input calculations terminate in base ten.
    value = number(value)
    denominator, twos, fives = value.denominator, 0, 0
    while denominator % 2 == 0:
        denominator //= 2
        twos += 1
    while denominator % 5 == 0:
        denominator //= 5
        fives += 1
    if denominator != 1:
        return str(value)
    digits = max(twos, fives)
    numerator = value.numerator * 2 ** (digits - twos) * 5 ** (digits - fives)
    sign = "-" if numerator < 0 else ""
    body = str(abs(numerator)).zfill(digits + 1)
    return sign + (body if digits == 0 else body[:-digits] + "." + body[-digits:])


def verify():
    cases = [(7, 11, 13, 19), (0, 2, 3, 5), (103, 29, 17, 5)]
    scales = [Fraction(1, 8), Fraction(1), Fraction(9, 2)]
    for bins in cases:
        baseline = normalized_bins(bins)
        assert sum(baseline) == 1
        for scale in scales:
            assert normalized_bins([scale * value for value in bins]) == baseline
        assert normalized_bins([2 * bins[0], bins[1] + 1, bins[2], bins[3]]) != baseline
    # The nominal running values below are synthetic, not Eidelman-Jegerlehner
    # inputs or a reconstruction of the reported difference 0.78 +/- 0.26.
    a = "137.03599976"
    q0, q, s = "-2.1", "-6.25", "-0.00036"
    delta0, delta = Fraction(1, 100), Fraction(3, 200)
    nominal = inverse_alpha(a, delta0, 0, q0, q0) - inverse_alpha(a, delta, 0, q, q0)
    deformed = inverse_alpha(a, delta0, s, q0, q0) - inverse_alpha(a, delta, s, q, q0)
    shift = inverse_difference_shift(a, s, q, q0)
    assert deformed - nominal == shift
    assert shift > 0 and nominal > 0
    assert inverse_difference_shift(a, 0, q, q0) == 0
    assert inverse_difference_shift(a, s, q0, q0) == 0
    return {
        "syntheticNormalizationChecks": len(cases) * len(scales),
        "syntheticNonuniformControls": len(cases),
        "publishedAlphaZeroInverseInput": a,
        "publishedSlopeInputGeVMinus2": s,
        "referenceQSquaredGeV2": q0,
        "comparisonQSquaredGeV2": q,
        "inverseDifferenceDeformation": exact_decimal(shift),
        "zeroSlopeMeansNominalRunning": True,
        "absoluteCouplingMeasured": False,
        "publishedRunningDifferenceReproduced": False,
        "nominalVacuumPolarizationCalculated": False,
        "likelihoodOrSignificanceReproduced": False,
        "detectorResponseOrCovarianceReproduced": False,
        "hadronicContributionSeparated": False,
        "virtualParticlePopulationMeasured": False,
    }


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
