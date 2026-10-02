"""Check proton-moment identities and printed arithmetic, not trap acquisition."""

import json
from decimal import Decimal as D, localcontext


def finite(*values):
    assert all(isinstance(value, D) and value.is_finite() for value in values)


def positive(*values):
    finite(*values)
    assert all(value > 0 for value in values)


def free_cyclotron(modified, axial, magnetron):
    """Brown-Gabrielse sum of squares for positive measured mode frequencies.

    This identity does not certify that arbitrary inputs describe a realizable
    trap or that imperfections and measurement offsets have been corrected.
    """
    positive(modified, axial, magnetron)
    result = (modified ** 2 + axial ** 2 + magnetron ** 2).sqrt()
    positive(result)
    return result


def moment_ratio(larmor, cyclotron):
    """Positive-proton mu_p/mu_N = g_p/2 = nu_L/nu_c, in common units."""
    positive(larmor, cyclotron)
    result = larmor / cyclotron
    positive(result)
    return result


def relative_frequency_shift(larmor_fraction, cyclotron_fraction):
    """Exact ratio shift; the difference of shifts is only first order."""
    finite(larmor_fraction, cyclotron_fraction)
    positive(1 + larmor_fraction, 1 + cyclotron_fraction)
    result = (1 + larmor_fraction) / (1 + cyclotron_fraction) - 1
    finite(result)
    return result


def symmetric_spin_step_variance(probability, step):
    """Synthetic symmetric +/-step/zero witness for Figure 7.2's units.

    This is not the experimental Bayesian spin-state or lineshape algorithm.
    """
    finite(probability)
    positive(step)
    assert 0 <= probability <= 1
    result = probability * step ** 2
    finite(result)
    return result


def systematic_budget(shifts, uncertainties):
    """Schneider Table 7.2: signed corrections and a linear error envelope."""
    assert len(shifts) == len(uncertainties) and len(shifts) > 0
    finite(*shifts, *uncertainties)
    assert all(value >= 0 for value in uncertainties)
    result = sum(shifts, D(0)), sum(uncertainties, D(0))
    finite(*result)
    return result


def quadrature(uncertainties):
    """Arithmetic comparison of separately quoted terms, not covariance replay."""
    assert len(uncertainties) > 0
    finite(*uncertainties)
    assert all(value >= 0 for value in uncertainties)
    result = sum((value ** 2 for value in uncertainties), D(0)).sqrt()
    finite(result)
    return result


def corrected_value(value, fractional_correction):
    positive(value)
    finite(fractional_correction)
    positive(1 + fractional_correction)
    result = value * (1 + fractional_correction)
    positive(result)
    return result


def correction_rounding_interval(value, half_step, fraction, fraction_half_step):
    """Independent printed last-digit bounds, not a confidence interval."""
    positive(value, half_step, fraction_half_step)
    finite(fraction)
    assert value > half_step
    positive(1 + fraction - fraction_half_step)
    return (corrected_value(value - half_step, fraction - fraction_half_step),
            corrected_value(value + half_step, fraction + fraction_half_step))


def verify():
    with localcontext() as context:
        context.prec = 50

        # Synthetic ideal-trap witness. For nu_z^2 = 2 nu_+ nu_-, the
        # invariance result equals nu_+ + nu_-. These are not acquired spectra.
        modified, magnetron = D('30000000'), D('7000')
        axial = (2 * modified * magnetron).sqrt()
        cyclotron = free_cyclotron(modified, axial, magnetron)
        assert cyclotron == modified + magnetron
        ratio = D('2.8')
        larmor = ratio * cyclotron
        assert moment_ratio(larmor, cyclotron) == ratio
        assert 2 * moment_ratio(larmor, cyclotron) == D('5.6')
        # A common clock-scale error cancels. An unequal field or clock
        # scale does not: the equality is conditional, not an empirical test.
        clock_scale = D('1.00003')
        common_clock_ratio = moment_ratio(larmor / clock_scale, cyclotron / clock_scale)
        unequal_clock_ratio = moment_ratio(larmor / clock_scale, cyclotron)
        assert abs(common_clock_ratio - ratio) < D('1e-45')
        assert unequal_clock_ratio != ratio

        # Thesis Eq.1.3, pp.4 and 88, support g = 2 nu_L/nu_c. Eq.7.4
        # and the prose p.85 instead print 2 nu_c/nu_L, which cannot be
        # normalized by g_CODATA as in Eq.7.6. Keep the printed conflict.
        literal_gamma = 2 * cyclotron / larmor
        proper_g = 2 * larmor / cyclotron
        assert literal_gamma != proper_g
        assert abs(literal_gamma * proper_g - 4) < D('1e-45')

        # Figure 7.2 includes the squared spin step; Eq.7.3 does not.
        # The symmetric-jump variance scales quadratically with frequency
        # units, while the literal printed term scales only linearly.
        probability, step = D('.3'), D('.2')
        variance = symmetric_spin_step_variance(probability, step)
        literal_variance_term = probability * step
        assert symmetric_spin_step_variance(probability, step * 1000) == variance * 1000 ** 2
        assert probability * step * 1000 != literal_variance_term * 1000 ** 2

        # Thesis Table 7.2, printed p.96. Signs are corrections to apply;
        # the component error envelope is expressly a LINEAR sum.
        shifts = list(map(D, ['0', '8', '-44', '1', '-98', '0']))
        uncertainties = list(map(D, ['9', '4', '26', '1', '3', '80']))
        correction_ppt, systematic_ppt = systematic_budget(shifts, uncertainties)
        assert correction_ppt == -133 and systematic_ppt == 123
        component_rss = quadrature(uncertainties)
        assert component_rss < systematic_ppt
        statistic, final = D('2.79284734500'), D('2.79284734462')
        corrected = corrected_value(statistic, correction_ppt * D('1e-12'))
        assert corrected.quantize(D('1e-11')) == D('2.79284734463')
        correction_interval = correction_rounding_interval(
            statistic, D('5e-12'), correction_ppt * D('1e-12'), D('0.5e-12'))
        final_display_interval = (final - D('5e-12'), final + D('5e-12'))
        rounding_overlap = max(correction_interval[0], final_display_interval[0]) < min(
            correction_interval[1], final_display_interval[1])
        assert rounding_overlap
        quoted_total = quadrature([D('75e-11'), D('34e-11')])
        assert quoted_total.quantize(D('1e-11')) == D('82e-11')
        relative_total_ppt = quoted_total / final * D('1e12')
        assert relative_total_ppt.quantize(D(1)) == 295
        # The published result is an input: compatibility does not reconstruct
        # raw spin histories, unrounded fit estimates or correction covariance.

        # Mooser author report pp.7-8 and Table 1: Eq.3 describes a bias of
        # the measured g value. The first-order correction subtracts that bias.
        # Adding it instead is a sign-convention counterexample, not a source
        # contradiction or a reconstruction of the frequency-level corrections.
        mooser_statistic, mooser_final = D('2.792847348'), D('2.792847350')
        mooser_shift = D('-.64e-9')
        mooser_add = corrected_value(mooser_statistic, mooser_shift)
        mooser_subtract = corrected_value(mooser_statistic, -mooser_shift)
        assert mooser_add.quantize(D('1e-9')) == D('2.792847346')
        assert mooser_subtract.quantize(D('1e-9')) == mooser_final
        mooser_total = quadrature([D('7e-9'), D('6e-9')])
        assert mooser_total.quantize(D('1e-9')) == D('9e-9')

        return dict(
            observable='mu_p/mu_N = g_p/2 = nu_L/nu_c',
            syntheticInputsAreMeasurements=False, syntheticFreeCyclotronHertz=str(cyclotron),
            syntheticMomentRatio=str(ratio), syntheticGFactor=str(proper_g),
            sharedClockRatio=str(common_clock_ratio), unequalClockRatio=str(unequal_clock_ratio),
            literalThesisEquation74Gamma=str(literal_gamma),
            printedThesisGammaConsistentWithGFactor=False,
            syntheticSpinStepVariance=str(variance), literalEquation73SpinStepTerm=str(literal_variance_term),
            printedThesisVarianceTermConsistentWithFigure72=False,
            schneiderCycleCounts=[420, 317, 577], schneiderAcquiredCycles=1314,
            schneiderRetainedCycles=1264, schneiderExcludedCycles=50,
            schneiderCorrectionPpt=str(correction_ppt), schneiderSystematicEnvelopePpt=str(systematic_ppt),
            schneiderComponentQuadraturePpt=str(component_rss), schneiderSystematicRule='linear-sum',
            schneiderStatisticalCenter=str(statistic), schneiderReportedCenter=str(final),
            schneiderCorrectedPrintedCenter=str(corrected),
            schneiderCorrectionDisplayInterval=[str(value) for value in correction_interval],
            schneiderFinalDisplayInterval=[str(value) for value in final_display_interval],
            schneiderPrintedCenterExactlyReproduced=False, schneiderDisplayRoundingCompatible=rounding_overlap,
            schneiderQuotedStatisticalSigma='0.00000000075', schneiderQuotedSystematicSigma='0.00000000034',
            schneiderQuotedTermsQuadrature=str(quoted_total), schneiderReportedCombinedSigma='0.00000000082',
            schneiderQuotedTermsRelativePpt=str(relative_total_ppt),
            mooserStatisticalCenter=str(mooser_statistic), mooserReportedCenter=str(mooser_final),
            mooserPrintedShiftPpb='-0.64', mooserAddingPrintedShift=str(mooser_add),
            mooserSubtractingPrintedShift=str(mooser_subtract),
            mooserDirectAdditionMatchesPrintedFinal=False, mooserSubtractionRoundsToPrintedFinal=True,
            mooserQuotedTermsQuadrature=str(mooser_total), mooserReportedCombinedSigma='0.000000009',
            rawAcquisitionReplayed=False, cycleSelectionReplayed=False, spinStateLikelihoodReplayed=False,
            resonanceFitReplayed=False, fullCorrectionBudgetReplayed=False, fullCovarianceReplayed=False,
            siMomentConversionReplayed=False, bernauerNormalizationReplaced=False,
            independentThesisMeasurement=False, publishedNumericalErrorEstablished=False,
            limit='Synthetic frequency and variance witnesses and printed arithmetic only. The observed quantity is the proton moment in nuclear magnetons, g_p/2, not g_p or an SI magnetic moment. Shared field and clock cancellation is conditional. The thesis frequency-ratio and variance conflicts remain explicit; its likelihood-normalization conflict is not implemented or resolved here. Its final central value is compatible only through display-rounding intervals, not exact replay. Systematic component errors are added linearly; quadrature of the separately quoted final terms is an arithmetic compatibility check. The Mooser measured bias is subtracted to form a correction; addition is a sign-convention counterexample, not a publication discrepancy. The thesis describes the Schneider campaign, not an independent measurement; Mooser is separate and the results are not averaged. No acquired spectra, spin likelihood, selection, resonance fit, complete correction/covariance or adopted Bernauer normalization is reproduced or replaced.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
