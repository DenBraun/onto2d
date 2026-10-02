"""Check printed beam-monitor conversion, not neutron acquisition or loss fits."""

import json
from decimal import Decimal as D, localcontext


def thermal_efficiency(measured, wavelength, reference):
    assert all(isinstance(x, D) and x.is_finite() for x in (measured, wavelength, reference))
    assert 0 < measured <= 1 and wavelength > 0 and reference > 0
    result = measured * reference / wavelength
    assert 0 < result <= 1
    return result


def rescale_lifetime(previous, old_efficiency, new_efficiency, solid_angle_drift=D(0), deposit_drift=D(0)):
    values = (previous, old_efficiency, new_efficiency, solid_angle_drift, deposit_drift)
    assert all(isinstance(x, D) and x.is_finite() for x in values)
    assert previous > 0 and 0 < old_efficiency <= 1 and 0 < new_efficiency <= 1
    assert solid_angle_drift > -1 and deposit_drift > -1
    return previous * old_efficiency / new_efficiency * (1 + solid_angle_drift) * (1 + deposit_drift)


def verify():
    with localcontext() as context:
        context.prec = 40
        # Yue 2013 author manuscript v2, pp.2-4, Eqs.1-4 and Table II.
        # Equation 1 gives epsilon_mono = epsilon_0 * lambda_mono/lambda_0.
        # Printed Eq.2 reverses this conversion; preserve the conflict explicitly.
        measured, wavelength, reference = D('8.5797e-5'), D('.49605'), D('.1798')
        converted = thermal_efficiency(measured, wavelength, reference)
        literal_equation2 = measured * wavelength / reference
        reported = D('3.1098e-5')
        assert abs(converted - reported) < D('0.00005e-5')
        assert abs(literal_equation2 - reported) > reported
        # Eq.4 reuses Nico 2005's reported acquisition result; drifts are the
        # authors' adopted zero values, not estimates reproduced by this script.
        lifetime = rescale_lifetime(D('886.3'), D('3.1148e-5'), reported)
        assert lifetime.quantize(D('.1')) == D('887.7')
        correction = lifetime - D('886.3')
        assert correction.quantize(D('.1')) == D('1.4')
        uncertainty_rows = ['0.5', '0.9', '1.7', '1.2', '0.1']
        diagonal_budget = sum(D(x) ** 2 for x in uncertainty_rows).sqrt()
        assert diagonal_budget.quantize(D('.1')) == D('2.3')
        return dict(thermalEfficiencyFromEquation1=str(converted), reportedThermalEfficiency=str(reported),
                    literalEquation2Efficiency=str(literal_equation2),
                    printedEquation2MultiplierConsistent=False,
                    updatedLifetimeSeconds=str(lifetime), correctionSeconds=str(correction),
                    printedBudgetSigmaSeconds=str(diagonal_budget), reportedTotalSigmaSeconds='2.3',
                    reportedAbstractStatSigmaSeconds='1.2', reportedAbstractSystSigmaSeconds='1.9',
                    adoptedSolidAngleDrift='0', adoptedDepositDrift='0',
                    rawAcquisitionReplayed=False, protonLossFitReplayed=False,
                    absoluteCalibrationReplayed=False, depositStabilityModelReplayed=False,
                    fullCovarianceReplayed=False, publishedNumericalErrorEstablished=False,
                    limit='Printed central conversion, same-acquisition recalibration and diagonal budget bookkeeping only. Equation 1 supports the wavelength direction; the author-version Equation 2 conflict is retained. Zero drifts are adopted publication assumptions. This does not reproduce detector counts, proton losses, the absolute calibration chain, temporal stability, full uncertainty or a beam/bottle comparison.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
