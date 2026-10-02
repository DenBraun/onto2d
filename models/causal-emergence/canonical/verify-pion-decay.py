"""Bounded PIENU printed arithmetic, not a replay of acquisition or fitting."""
from decimal import Decimal as D, localcontext
from itertools import product
import json


# Author manuscript arXiv:1506.05845v2, page 4, Table I.
# Ratios/errors in the first and last rows are coefficients of 10^-4;
# correction factors and their errors are dimensionless multipliers.
TABLE = {
    'raw': ('1.1972', '0.0022', '0.0005'),
    'acceptance': ('0.9991', '0.0003'),
    'tail': ('1.0316', '0.0012'),
    'other': ('1.0004', '0.0008'),
    'corrected': ('1.2344', '0.0023', '0.0019'),
}


def finite(*values):
    assert all(isinstance(x, D) and x.is_finite() for x in values), 'Finite Decimal values required'


def corrected_ratio(raw, factors):
    finite(raw, *factors)
    assert raw >= 0 and factors and all(f > 0 for f in factors)
    result = raw
    for factor in factors:
        result *= factor
    finite(result)
    return result


def efficiency_ratio(electronic_signal, muonic_signal, electronic_efficiency, muonic_efficiency):
    """Synthetic selected-signal identity assuming equal corrected exposure.

    PIENU's intermediate ratio is obtained by fitting trigger-specific spectra;
    this identity must not replace that experimental fit or its exposure model.
    """
    finite(electronic_signal, muonic_signal, electronic_efficiency, muonic_efficiency)
    assert electronic_signal >= 0 and muonic_signal > 0
    assert 0 < electronic_efficiency <= 1 and 0 < muonic_efficiency <= 1
    result = electronic_signal * muonic_efficiency / (muonic_signal * electronic_efficiency)
    finite(result)
    return result


def partial_fraction_pair(ratio, muonic_fraction):
    """A family of possible branch allocations, not inferred pion fractions."""
    finite(ratio, muonic_fraction)
    assert ratio >= 0 and 0 < muonic_fraction <= 1
    electronic = ratio * muonic_fraction
    remainder = 1 - electronic - muonic_fraction
    finite(electronic, remainder)
    assert remainder >= 0, 'The proposed fractions exceed unity'
    return electronic, muonic_fraction, remainder


def product_rounding_box(values, half_steps):
    """Positive-factor display-rounding box; never a confidence interval."""
    assert values and len(values) == len(half_steps)
    finite(*values, *half_steps)
    assert all(0 <= h < x for x, h in zip(values, half_steps))
    low, high = D(1), D(1)
    for value, half in zip(values, half_steps):
        low *= value - half
        high *= value + half
    finite(low, high)
    return low, high


def verify():
    with localcontext() as context:
        context.prec = 60
        raw = D(TABLE['raw'][0])
        factors = [D(TABLE[key][0]) for key in ['acceptance', 'tail', 'other']]
        central = corrected_ratio(raw, factors)
        assert central == D('1.2344135596286528')
        reported = D(TABLE['corrected'][0])
        assert central.quantize(D('.0001')) == reported
        box = product_rounding_box([raw, *factors], [D('.00005')] * 4)
        assert max(box[0], reported - D('.00005')) < min(box[1], reported + D('.00005'))
        witnesses = 0
        for electronic_fraction, muonic_fraction, e_eff, mu_eff, exposure in product(
                map(D, ['.0001', '.0003']), map(D, ['.9', '.99']),
                map(D, ['.5', '.8']), map(D, ['.2', '.4']), map(D, ['1000', '100000'])):
            e_signal = electronic_fraction * exposure * e_eff
            mu_signal = muonic_fraction * exposure * mu_eff
            observed = efficiency_ratio(e_signal, mu_signal, e_eff, mu_eff)
            expected = electronic_fraction / muonic_fraction
            assert abs(observed - expected) < D('1e-55')
            assert efficiency_ratio(e_signal * 7, mu_signal * 7, e_eff, mu_eff) == observed
            # Unequal exposure does not cancel merely because efficiencies do.
            assert abs(efficiency_ratio(e_signal * 2, mu_signal, e_eff, mu_eff) - 2 * expected) < D('1e-55')
            witnesses += 1
        ratio = reported * D('1e-4')
        alternatives = [partial_fraction_pair(ratio, fraction) for fraction in map(D, ['.5', '.9'])]
        assert alternatives[0][0] != alternatives[1][0]
        assert all(e / mu == ratio and e + mu + other == 1 for e, mu, other in alternatives)
        return {
            'checkId': 'pion-decay-printed-arithmetic', 'status': 'passed',
            'sourceLocator': 'arXiv:1506.05845v2 page 4, Table I',
            'table': {key: list(values) for key, values in TABLE.items()},
            'ratioCoefficientUnit': '1e-4', 'correctionFactorsDimensionless': True,
            'correctedCoefficient': str(central), 'reportedCoefficient': str(reported),
            'correctedDimensionlessRatio': str(central * D('1e-4')),
            'centralRoundsToReported': True, 'coefficientDisplayRoundingBox': list(map(str, box)),
            'displayRoundingCompatible': True, 'roundingBoxIsConfidenceInterval': False,
            'syntheticEfficiencyWitnesses': witnesses, 'unequalExposureCancels': False,
            'syntheticFractionAlternatives': [[str(x) for x in row] for row in alternatives],
            'absoluteBranchingFractionIdentified': False, 'syntheticInputsAreMeasurements': False,
            'rawAcquisitionReplayed': False, 'timingFitReplayed': False,
            'calorimeterResponseReplayed': False, 'empiricalTailBoundsCombined': False,
            'correctionUncertaintiesReproduced': False, 'fullCovarianceReproduced': False,
            'pionOrMuonLifetimeMeasured': False, 'universalityFitReplayed': False,
            'limit': 'Only printed central correction arithmetic, display-rounding bounds and synthetic equal-exposure/efficiency identities are checked. The published uncertainties remain source inputs. Ratio-compatible synthetic branch allocations are not inferred pion branching fractions.'
        }


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
