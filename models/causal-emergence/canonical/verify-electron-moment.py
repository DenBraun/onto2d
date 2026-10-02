"""Finite electron-moment algebra, not line fitting or a radiative calculation."""

import json
from decimal import Decimal as D, localcontext


def finite(*values):
    assert all(isinstance(value, D) and value.is_finite() for value in values)


def positive(*values):
    finite(*values)
    assert all(value > 0 for value in values)


def anomaly(g_half):
    """a_e = g/2 - 1; no theoretical prediction is used."""
    positive(g_half)
    result = g_half - 1
    finite(result)
    return result


def signed_spin_moment(g_half, spin_projection):
    """mu_z/mu_B = -2(g/2)m_s for the two electron spin eigenstates.

    e and mu_B are positive; the electron charge is -e. This implements
    the adopted sign convention, not a separate experimental sign test.
    """
    positive(g_half)
    finite(spin_projection)
    assert spin_projection in (D('-.5'), D('.5'))
    result = -2 * g_half * spin_projection
    finite(result)
    return result


def anomaly_frequency_ratio(anomaly_frequency, cyclotron_frequency):
    """Ideal positive electron anomaly and free-cyclotron frequencies.

    Both inputs must use the same units and magnetic field. A trap-modified
    line center cannot replace the free frequency without the declared
    conversion, and this identity includes no cavity correction.
    """
    finite(anomaly_frequency)
    assert anomaly_frequency >= 0
    positive(cyclotron_frequency)
    result = 1 + anomaly_frequency / cyclotron_frequency
    positive(result)
    return result


def separated_field_ratio(a, anomaly_field, cyclotron_field):
    """Synthetic ideal-frequency witness for nonsimultaneous sampling.

    nu_a = a*k*B_a and nu_c = k*B_c imply 1+a*B_a/B_c, rather than
    (1+a)*B_a/B_c. The actual trap measurement is more complex.
    """
    finite(a)
    assert a >= 0
    positive(anomaly_field, cyclotron_field)
    result = 1 + a * anomaly_field / cyclotron_field
    positive(result)
    return result


def leading_anomaly(alpha, pi):
    """Evaluate an already supplied leading-order formula, not its loop integral.

    The numerical pi input is explicit. No current empirical alpha is adopted
    and no inverse-alpha inference is performed by this finite check.
    """
    positive(alpha, pi)
    result = alpha / (2 * pi)
    positive(result)
    return result


def quadrature(components):
    """Arithmetic RSS comparison, without assuming experimental independence."""
    assert len(components) > 0
    finite(*components)
    assert all(value >= 0 for value in components)
    result = sum((value ** 2 for value in components), D(0)).sqrt()
    finite(result)
    return result


def quadrature_display_bounds(components, half_step):
    """Bounds from decimal display resolution, not confidence intervals."""
    positive(half_step)
    assert len(components) > 0
    finite(*components)
    assert all(value >= half_step for value in components)
    return (quadrature([value - half_step for value in components]),
            quadrature([value + half_step for value in components]))


def verify():
    with localcontext() as context:
        context.prec = 50
        # Fan et al., PRL 130, 071801-4, Eq.6; the parenthetical uncertainty
        # has the same decimal position as the last two displayed digits.
        g_half, sigma = D('1.00115965218059'), D('0.00000000000013')
        a = anomaly(g_half)
        assert a == D('0.00115965218059')
        signed = signed_spin_moment(g_half, D('.5'))
        assert signed == -g_half
        assert signed_spin_moment(g_half, D('-.5')) == g_half
        assert 2 * g_half == D('2.00231930436118')
        relative_ppt = sigma / g_half * D('1e12')
        assert relative_ppt.quantize(D('.01')) == D('.13')

        # Synthetic units and field choices, not the experiment's rounded
        # frequency scales, fitted centers or measured drift series.
        synthetic_a, k, field = D('.0012'), D(100), D(5)
        nu_c, nu_a = k * field, synthetic_a * k * field
        assert anomaly_frequency_ratio(nu_a, nu_c) == 1 + synthetic_a
        assert anomaly_frequency_ratio(nu_a * 1000, nu_c * 1000) == 1 + synthetic_a
        common = separated_field_ratio(synthetic_a, field * 2, field * 2)
        assert common == 1 + synthetic_a
        drift_fraction = D('.000001')
        separated = separated_field_ratio(synthetic_a, field * (1 + drift_fraction), field)
        bias = separated - (1 + synthetic_a)
        assert bias == synthetic_a * drift_fraction
        assert bias != (1 + synthetic_a) * drift_fraction

        # Schwinger's supplied first-order expression in Gaussian units:
        # alpha=e^2/(hbar*c), delta_mu/mu=alpha/(2*pi). This substitution
        # does not evaluate a radiative diagram or reproduce his historical
        # printed 0.001162 using an undocumented alpha input.
        pi = D('3.1415926535897932384626433832795028841971693993751')
        toy_alpha = D('.006')
        leading = leading_anomaly(toy_alpha, pi)
        assert abs(2 * pi * leading - toy_alpha) < D('1e-49')
        assert leading_anomaly(toy_alpha * 2, pi) == leading * 2

        # Fan Table I, largest uncertainties in units of 10^-13 in g/2.
        # These are not 0.29 etc. ppt, and the total is NOT reconstructed
        # from an unpublished covariance matrix of eleven field settings.
        labels = ['statistical', 'cyclotron-broadening', 'cavity-correction',
                  'nuclear-paramagnetism', 'anomaly-power-shift', 'magnetic-field-drift']
        components = list(map(D, ['.29', '.94', '.90', '.12', '.10', '.09']))
        squared = sum((value ** 2 for value in components), D(0))
        assert squared == D('1.8102')
        rss = quadrature(components)
        assert rss.quantize(D('.1')) == D('1.3')
        bounds = quadrature_display_bounds(components, D('.005'))
        published_display = (D('1.25'), D('1.35'))
        compatible = max(bounds[0], published_display[0]) < min(bounds[1], published_display[1])
        assert compatible
        # Some allowed rounded components would round to 1.4. Only overlap
        # with the printed total is claimed, not equality for all inputs.
        assert bounds[0] < D('1.35') < bounds[1]
        return dict(
            reportedGHalf=str(g_half), reportedGHalfSigma=str(sigma),
            anomaly=str(a), anomalySigma=str(sigma),
            signedMomentInBohrMagnetons=str(signed),
            gFactor=str(2 * g_half), gFactorSigma=str(2 * sigma),
            relativeUncertaintyPpt=str(relative_ppt),
            syntheticInputsAreMeasurements=False,
            syntheticCommonFieldGHalf=str(common), syntheticSeparatedFieldGHalf=str(separated),
            syntheticFieldFractionalChange=str(drift_fraction), syntheticGHalfBias=str(bias),
            fieldBiasScalesAnomaly=True, cavityCorrectionIncludedInIdealCancellation=False,
            leadingFormulaSyntheticAlpha=str(toy_alpha), leadingFormulaValue=str(leading),
            schwingerHistoricalPrintedValue='0.001162', historicalAlphaReconstructed=False,
            budgetLabels=labels, budgetComponents=[str(value) for value in components],
            budgetUnit='1e-13 absolute uncertainty in g/2', budgetSquaredSum=str(squared),
            budgetQuadrature=str(rss), budgetQuadratureAbsolute=str(rss * D('1e-13')),
            budgetDisplayBounds=[str(value) for value in bounds], reportedBudgetTotal='1.3',
            budgetDisplayCompatible=compatible, budgetAllRoundedInputsMatchTotal=False,
            reportedFieldDeterminations=11, reportedCavityModes=72,
            rawTransitionTrialsReplayed=False, lineShapeFitReplayed=False,
            exactFieldFrequenciesReconstructed=False, cavityCalibrationReplayed=False,
            cavityShiftReplayed=False, invarianceTheoremProved=False,
            fullCorrectionBudgetReplayed=False, fieldCovarianceReplayed=False,
            leadingRadiativeCalculationReplayed=False, fullQEDPredictionReplayed=False,
            inverseAlphaInferred=False, earlierMeasurementPooled=False,
            limit='Exact signed normalization and anomaly conversion, synthetic common-field and nonsimultaneous-field witnesses, and display-precision RSS compatibility only. The Table I sum is not a covariance reconstruction. The approximate explanatory trap frequencies cannot reproduce the precision result. The cavity calibration uses distinct electron preparations; it is not the single-electron jump sample. Schwinger supplies a historical leading formula with renormalized mass and charge, not a modern full prediction or an observed vacuum population. No radiative integral, acquired transition series, line fit, cavity calculation, eleven-field fit/covariance, inverse-alpha determination or pooling with 2008 is reproduced.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
