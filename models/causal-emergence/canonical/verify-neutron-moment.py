"""Check Afach's printed ratios and conditional calibration, not acquired spins."""

import json
from decimal import Decimal as D, localcontext


# Afach arXiv:1410.8259v2, Table 2, author page 5. Grouped labels are
# preserved as printed; these are 16 analysis entries, not 18 replicates.
# direction, label, visibility, positive R, B_Hg/nT, gradient/(pT/cm), <B_T^2>/nT^2
RUNS = [
    ('down', '6015', '.41', '3.842321', '1031.86', '-175', '2.5'),
    ('down', '6016', '.48', '3.842587', '1031.33', '130', '1.8'),
    ('down', '6023', '.66', '3.842435', '1031.60', '-23', '1.1'),
    ('down', '6027-8', '.57', '3.842508', '1030.18', '32', '1.0'),
    ('down', '6030', '.55', '3.842415', '1030.32', '-43', '1.0'),
    ('down', '6031', '.38', '3.842622', '1029.92', '185', '2.6'),
    ('down', '6033', '.48', '3.842357', '1030.45', '-120', '1.7'),
    ('up', '6040-1', '.54', '3.842445', '1027.97', '9', '1.7'),
    ('up', '6042', '.36', '3.842325', '1028.23', '161', '2.6'),
    ('up', '6043', '.38', '3.842582', '1027.70', '-144', '3.0'),
    ('up', '6047', '.46', '3.842520', '1027.82', '-67', '2.1'),
    ('up', '6049', '.43', '3.842378', '1028.14', '86', '1.9'),
    ('up', '6058', '.53', '3.842434', '1027.82', '17', '1.7'),
    ('up', '6059', '.42', '3.842511', '1026.82', '-44', '2.0'),
    ('up', '6060', '.55', '3.842455', '1028.25', '5', '1.7'),
    ('up', '6064', '.44', '3.842392', '1029.47', '68', '1.9'),
]


def finite(*values):
    assert all(isinstance(value, D) and value.is_finite() for value in values)


def positive(*values):
    finite(*values)
    assert all(value > 0 for value in values)


def unshift_ratio(observed, fractional_shifts):
    """Invert the first-order measurement model in Eq.5.

    Algebraically exact inversion of that declared model does not supply
    unmodeled higher-order physics. A positive frequency never fixes spin sign.
    """
    positive(observed)
    assert len(fractional_shifts) > 0
    finite(*fractional_shifts)
    denominator = 1 + sum(fractional_shifts, D(0))
    positive(denominator)
    result = observed / denominator
    positive(result)
    return result


def subtract_printed_shifts(intermediate, absolute_shifts):
    """First-order Table 1 bookkeeping; entries are ratio shifts, not ppm."""
    positive(intermediate)
    assert len(absolute_shifts) > 0
    finite(*absolute_shifts)
    result = intermediate - sum(absolute_shifts, D(0))
    positive(result)
    return result


def gravity_fraction(height_cm, field_nt, gradient_pt_per_cm, direction):
    """Eq.6 with the paper's signed height and positive field magnitude."""
    finite(height_cm, gradient_pt_per_cm)
    positive(field_nt)
    assert direction in ('up', 'down')
    sign = D(1) if direction == 'up' else D(-1)
    result = sign * height_cm * gradient_pt_per_cm * D('.001') / field_nt
    finite(result)
    return result


def transverse_fraction(mean_square_transverse, field):
    """Eq.12: squared field and field must use compatible units."""
    finite(mean_square_transverse)
    assert mean_square_transverse >= 0
    positive(field)
    result = mean_square_transverse / (2 * field ** 2)
    finite(result)
    return result


def calibrated_magnitude(ratio, reference, ratio_error, reference_error, correlation):
    """Product and first-order covariance propagation with an explicit rho.

    All frequencies are positive magnitudes, with the reference's frequency/
    field unit. The rho=0 comparison is conditional, not covariance recovery.
    """
    positive(ratio, reference)
    finite(ratio_error, reference_error, correlation)
    assert ratio_error >= 0 and reference_error >= 0 and abs(correlation) <= 1
    result = ratio * reference
    a, b = reference * ratio_error, ratio * reference_error
    # Rearrangement avoids a spurious small negative variance at rho=-1.
    variance = (a - b) ** 2 + 2 * a * b * (1 + correlation)
    assert variance >= 0
    error = variance.sqrt()
    positive(result)
    finite(error)
    return result, error


def conservative_direction_error(errors):
    """Eq.18 expressly uses the larger directional error to avoid data reuse."""
    assert len(errors) == 2
    positive(*errors)
    return max(errors)


def verify():
    with localcontext() as context:
        context.prec = 50
        assert len(RUNS) == 16 and len({row[1] for row in RUNS}) == 16
        assert [sum(row[0] == direction for row in RUNS) for direction in ('down', 'up')] == [7, 9]
        for direction, label, visibility, ratio, field, gradient, transverse in RUNS:
            visibility, ratio, field, gradient, transverse = map(D, (visibility, ratio, field, gradient, transverse))
            positive(visibility, ratio, field, transverse)
            assert visibility <= 1 and abs(gradient) < 200
            # The finite fields produce finite correction terms; this does not
            # re-fit the common height or its errors from rounded run summaries.
            gravity_fraction(D('-.235'), field, gradient, direction)
            transverse_fraction(transverse, field)

        intermediate_up, intermediate_down = D('3.8424580'), D('3.8424653')
        up = subtract_printed_shifts(intermediate_up, list(map(D, ['3.7e-6', '1.3e-6', '-5.3e-6'])))
        down = subtract_printed_shifts(intermediate_down, list(map(D, ['3.0e-6', '.8e-6', '5.3e-6'])))
        assert up == D('3.8424583') and down == D('3.8424562')
        errors = [D('2.6e-6'), D('3.0e-6')]
        final_error = conservative_direction_error(errors)
        # The central value is compatible with inverse-variance averaging,
        # but the paper does not specify its exact combination implementation.
        weights = [1 / error ** 2 for error in errors]
        compatible_mean = (up * weights[0] + down * weights[1]) / sum(weights)
        reported = D('3.8424574')
        assert compatible_mean.quantize(D('1e-7')) == reported
        invalid_independent_error = (1 / sum(weights)).sqrt()
        assert invalid_independent_error < min(errors) < final_error
        relative_ppm = final_error / reported * D('1e6')
        assert relative_ppm.quantize(D('.01')) == D('.78')

        # Eq.2's reference is ADOPTED from the upstream Hg/shielded-proton
        # chain, as quoted by Afach, not measured by the local verifier.
        reference, reference_error = D('7.590118'), D('.000013')
        neutron, neutron_error = calibrated_magnitude(reported, reference, final_error, reference_error, D(0))
        assert neutron.quantize(D('.000001')) == D('29.164705')
        assert neutron_error.quantize(D('.000001')) == D('.000055')
        # Eq.19 is conditional on this external reference. Feeding back a
        # reference derived from the same ratio (Eq.20's alternative) cannot
        # create an independent corroborating neutron measurement.
        known_neutron = D('29.1646943')
        alternative_hg = known_neutron / reported
        assert alternative_hg.quantize(D('.0000001')) == D('7.5901152')
        assert abs(reported * alternative_hg - known_neutron) < D('1e-45')

        return dict(
            observable='positive f_n/f_Hg; sign is not determined by the ratio magnitude',
            tableRows=len(RUNS), downRows=7, upRows=9,
            groupedRunLabels=[row[1] for row in RUNS if '-' in row[1]],
            correctedUp=str(up), correctedDown=str(down),
            centralWeightedCompatibility=str(compatible_mean), combinationAlgorithmReproduced=False,
            reportedRatio=str(reported), finalError=str(final_error), uncertaintyRule='maximum directional error',
            invalidIndependentError=str(invalid_independent_error), relativeErrorPpm=str(relative_ppm),
            adoptedHgMagnitudeMHzPerTesla=str(reference), adoptedHgErrorMHzPerTesla=str(reference_error),
            conditionalNeutronMagnitudeMHzPerTesla=str(neutron),
            diagonalConditionalErrorMHzPerTesla=str(neutron_error), assumedCorrelation='0',
            alternativeHgFromAdoptedNeutronMHzPerTesla=str(alternative_hg),
            alternativeCalibrationIsIndependent=False, signedMomentDetermined=False,
            rawCountsReplayed=False, ramseyFitsReplayed=False, fieldMapsReplayed=False,
            gradientFitReplayed=False, fullCovarianceReproduced=False,
            upstreamHgCalibrationReproduced=False,
        )


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
