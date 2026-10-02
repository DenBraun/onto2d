"""Check printed calibration algebra; do not replay neutron acquisition or fits."""

import itertools
import json
from decimal import Decimal as D, localcontext


def positive(*values):
    assert all(isinstance(x, D) and x.is_finite() and x > 0 for x in values)


def neutron_rate(gamma_thick, alpha_thin, gamma_thin, solid_angle):
    """Yue 2018 Eq.10, corrected count rates and fractional 4-pi solid angle."""
    positive(gamma_thick, alpha_thin, gamma_thin, solid_angle)
    assert solid_angle <= 1
    return gamma_thick * alpha_thin / gamma_thin / solid_angle


def weighted_activity(means, uncorrelated_sigmas, common_fraction):
    """Yue 2011 B.6-B.8: weight independent errors, then add common error."""
    assert len(means) == len(uncorrelated_sigmas) and len(means) > 0
    positive(*means, *uncorrelated_sigmas)
    assert isinstance(common_fraction, D) and common_fraction.is_finite() and common_fraction >= 0
    weights = [1 / u ** 2 for u in uncorrelated_sigmas]
    total_weight = sum(weights)
    mean = sum(w * m for w, m in zip(weights, means)) / total_weight
    independent_variance = 1 / total_weight
    total_variance = independent_variance + (common_fraction * mean) ** 2
    return mean, independent_variance.sqrt(), total_variance.sqrt()


def two_stack_rounding_interval(means, sigmas, half_step):
    """Conservative display-rounding box, not a statistical confidence interval."""
    assert len(means) == len(sigmas) == 2
    positive(*means, *sigmas, half_step)
    assert means[0] + half_step < means[1] - half_step
    assert min(*means, *sigmas) > half_step
    # With ordered, disjoint means the weighted mean is monotone in each
    # independent box coordinate, so its extrema occur at corners.
    corners = []
    for signs in itertools.product((-1, 1), repeat=4):
        values = [v + sign * half_step for v, sign in zip([*means, *sigmas], signs)]
        corners.append(weighted_activity(values[:2], values[2:], D(0))[0])
    return min(corners), max(corners)


def source_activity_interval(rate, angle, rate_half_step, angle_half_step):
    """Eq.1 ratio with independent last-digit rounding bounds only."""
    positive(rate, angle, rate_half_step, angle_half_step)
    assert rate > rate_half_step and angle > angle_half_step and angle + angle_half_step <= 1
    return ((rate - rate_half_step) / (angle + angle_half_step),
            (rate + rate_half_step) / (angle - angle_half_step))


def attenuation(exponent):
    positive(exponent)
    transmission = (-exponent).exp()
    absorption = 1 - transmission
    assert absorption > 0, 'Exponent is below the current decimal precision'
    return absorption, transmission, exponent / absorption


def central_optical_depth(efficiency, solid_angle, wavelength, reference):
    """2018 Eq.12's factor two inserted into Eqs.26-27, printed inputs only."""
    positive(efficiency, solid_angle, wavelength, reference)
    assert efficiency <= 1 and solid_angle <= 1
    return efficiency / (2 * solid_angle) * wavelength / reference


def verify():
    with localcontext() as context:
        context.prec = 40
        # An algebra witness, not experimental counts. Thin and thick runs
        # deliberately have different rates. Common corrected gamma response
        # and complete thick-target absorption are assumptions of this identity.
        thin_absorptions, thick_neutrons = D(731), D(29000)
        gamma_response, branch, angle = D('.013'), D('.937'), D('.008')
        reconstructed = neutron_rate(gamma_response * branch * thick_neutrons,
                                     angle * thin_absorptions,
                                     gamma_response * branch * thin_absorptions, angle)
        assert reconstructed == thick_neutrons

        # Yue 2011 Appendix B, printed pp.149-150. The body p.92 states
        # 0.023 percent; Appendix B states 2.3e-5. Keep both rather than silently
        # correcting a source. Displayed central inputs do not exactly round
        # to the reported 23545.2; possible unrounded inputs can do so.
        means, sigmas = [D('23543.9'), D('23545.6')], [D('8.4'), D('5.2')]
        mean, independent, appendix_total = weighted_activity(means, sigmas, D('.000023'))
        _, _, body_total = weighted_activity(means, sigmas, D('.00023'))
        mean_interval = two_stack_rounding_interval(means, sigmas, D('.05'))
        assert mean.quantize(D('.1')) == D('23545.1')
        assert mean_interval[0] < D('23545.15') < mean_interval[1]
        assert body_total.quantize(D('.1')) == D('7.0')
        assert appendix_total.quantize(D('.1')) == D('4.5')

        # Yue 2018 pp.474-475: the count rate is described as already corrected
        # for dead time, backscatter and tunneled alphas. Equation 1 and the
        # displayed effective solid angle do not yield the reported activity.
        activity = D('125.740') / D('.0053415')
        activity_interval = source_activity_interval(D('125.740'), D('.0053415'), D('.0005'), D('.00000005'))
        assert activity_interval[0] > D('23538.45')
        activity_difference = activity - D('23538.4')
        assert 0 < activity_difference < D('4.6')

        # Yue 2018 Eqs.12,26-28, printed pp.464,481. Eq.28 lacks Eq.12's
        # factor one half, and the final value labeled phi_abs is a transmission.
        # The final measured efficiency is an INPUT here: this is not an
        # independent efficiency calculation or the authors' iterative fit.
        exponent = central_optical_depth(D('3.1101e-5'), D('.0042021'), D('.49605'), D('.1798'))
        absorption, transmission, shielding = attenuation(exponent)
        literal_absorption, literal_transmission, literal_shielding = attenuation(2 * exponent)
        assert abs(transmission - D('.989846')) < D('.000012')
        assert abs(shielding - D('1.005111')) < D('.000006')
        assert abs(literal_transmission - D('.989846')) > D('.01')

        return dict(
            syntheticNeutronRatePerSecond=str(reconstructed), syntheticInputsAreMeasurements=False,
            thesisWeightedActivityPerSecond=str(mean), thesisIndependentSigmaPerSecond=str(independent),
            thesisAppendixCommonFraction='0.000023', thesisBodyCommonFraction='0.00023',
            thesisAppendixTotalSigmaPerSecond=str(appendix_total), thesisBodyTotalSigmaPerSecond=str(body_total),
            thesisReportedActivityPerSecond='23545.2', thesisReportedSigmaPerSecond='7.0',
            thesisDisplayRoundingIntervalPerSecond=[str(v) for v in mean_interval],
            thesisPrintedMeanExactlyReproduced=False, thesisUnroundedMeanCompatibility=True,
            thesisPrintedCommonFractionsConsistent=False,
            paperActivityFromPrintedRatioPerSecond=str(activity), paperReportedActivityPerSecond='23538.4',
            paperReportedActivitySigmaPerSecond='4.6', paperActivityDifferencePerSecond=str(activity_difference),
            paperActivityDisplayRoundingIntervalPerSecond=[str(v) for v in activity_interval],
            paperPrintedActivityRatioConsistent=False,
            equation12OpticalDepth=str(exponent), equation12Absorption=str(absorption),
            equation12Transmission=str(transmission), equation12SelfShielding=str(shielding),
            literalEquation28Absorption=str(literal_absorption), literalEquation28Transmission=str(literal_transmission),
            literalEquation28SelfShielding=str(literal_shielding), reportedTransmission='0.989846',
            reportedSelfShielding='1.005111', printedEquation28ConsistentWithEquation12=False,
            printedFinalAbsorptionLabelConsistent=False, printedCorrectionCentralValuesExactlyReproduced=False,
            rawAcquisitionReplayed=False, absoluteCalibrationReplayed=False, fullCovarianceReplayed=False,
            correctionIterationReplayed=False, lifetimeInferenceReplayed=False, publishedNumericalErrorEstablished=False,
            limit='Formal corrected-rate cancellation and printed arithmetic only. The two source activities remain distinct. Display-rounding intervals are not statistical intervals. Both thesis common-error fractions and the 2018 activity-ratio, factor-two and absorption-label conflicts are preserved. The final measured efficiency is an input to the attenuation check. No raw counts, 27-point fit, full correction chain, covariance, calibration transfer to 2013 or neutron lifetime is reproduced; no underlying numerical-analysis error is established.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
