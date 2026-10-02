#!/usr/bin/env python3
"""Finite SLD neutral-hadron table arithmetic; no acquisition or model replay."""
import json
import hashlib
from decimal import Decimal as D, getcontext
from pathlib import Path

getcontext().prec = 50
DATA = Path(__file__).resolve().parents[3] / 'references/canonical/data/sld1998-neutral-production.json'


def quantity(value, *, positive=False):
    assert isinstance(value, D) and value.is_finite(), 'Finite Decimal required'
    assert value > 0 if positive else value >= 0, 'Invalid quantity domain'
    return value


def corrected_density(signal, efficiency, events, width, neutral_factor=D(1)):
    quantity(signal)
    for value in (efficiency, events, width, neutral_factor):
        quantity(value, positive=True)
    assert efficiency <= 1 and width <= 1 and neutral_factor in (D(1), D(2))
    return signal * neutral_factor / (efficiency * events * width)


def extrapolated_total(observed, accepted_fraction):
    quantity(observed)
    quantity(accepted_fraction, positive=True)
    assert accepted_fraction <= 1
    return observed / accepted_fraction


def shared_normalization_error(integrated_bins, fraction):
    assert integrated_bins
    quantity(fraction)
    for value in integrated_bins:
        quantity(value)
    return sum(integrated_bins) * fraction


def half_digit(text):
    assert isinstance(text, str)
    value = D(text)
    quantity(value)
    return D(10) ** value.as_tuple().exponent / 2


def table_values(rows):
    assert rows and all(len(row) == 6 for row in rows)
    previous = None
    parsed = []
    for row in rows:
        assert all(isinstance(value, str) for value in row)
        low, high, mean, density, stat, syst = map(D, row)
        for value in (low, high, mean, density, stat, syst):
            quantity(value)
        assert low < mean < high <= 1
        assert previous is None or low == previous, 'Bins must be contiguous'
        previous = high
        parsed.append((low, high, mean, density, stat, syst))
    return parsed


def integrate(rows):
    return sum((high - low) * density for low, high, _, density, _, _ in table_values(rows))


def rounding_enclosure(rows):
    """Sharp bounds with shared edges, independent displayed rounding and positive widths.

    Densities enter with positive widths. Choose all their lower/upper limits;
    the resulting integral is linear in shared edges, whose signs give extrema.
    This is display arithmetic, not an experimental uncertainty interval.
    """
    parsed = table_values(rows)
    edge_texts = [rows[0][0]] + [row[1] for row in rows]
    for left, right in zip(rows, rows[1:]):
        assert half_digit(left[1]) == half_digit(right[0]), 'Shared edge precision differs'
    edge_ranges = [(max(D(0), D(x) - half_digit(x)), min(D(1), D(x) + half_digit(x))) for x in edge_texts]
    assert all(a[1] < b[0] for a, b in zip(edge_ranges, edge_ranges[1:])), 'Ambiguous ordered edges'
    density_ranges = [(max(D(0), row[3] - half_digit(text[3])), row[3] + half_digit(text[3])) for row, text in zip(parsed, rows)]
    output = []
    for maximize in (False, True):
        densities = [bounds[int(maximize)] for bounds in density_ranges]
        coefficients = [-densities[0]] + [a - b for a, b in zip(densities, densities[1:])] + [densities[-1]]
        total = sum(coefficient * bounds[int((coefficient > 0) == maximize)] for coefficient, bounds in zip(coefficients, edge_ranges))
        output.append(total)
    return tuple(output)


def verify(path=DATA):
    raw = Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest() == '94d6c887244528328b97e83e9f3971623972d95a69c1557557d97b8cc6b916aa', 'Changed bound SLD table bytes'
    data = json.loads(raw.decode('utf-8'))
    assert data['format'] == 'onto2d-sld1998-neutral-production-v1'
    assert data['source'] == {'arxiv': 'hep-ex/9805029v1', 'doi': '10.1103/PhysRevD.59.052001', 'tables': [6, 7, 16], 'pages': [22, 27, 46]}
    assert data['columns'] == ['xpLow', 'xpHigh', 'xpMean', 'density', 'statistical', 'systematic']
    assert data['units'] == 'Per hadronic Z0 decay per unit xp; xp=2p/Ecm'
    assert data['commonNormalizationFraction'] == '0.034'
    assert data['binSystematicIncludesCommonNormalization'] is False
    assert data['observedTotalSystematicIncludesCommonNormalization'] is True
    expected = {'K0': (17, 6, ['1.90', '0.02', '0.07'], ['2.01', '0.08']),
                'Lambda': (15, 6, ['0.37', '0.01', '0.02'], ['0.395', '0.022']),
                'Kstar0': (6, 7, ['0.647', '0.022', '0.029'], ['0.707', '0.041']),
                'phi': (6, 7, ['0.0985', '0.0046', '0.0055'], ['0.105', '0.008'])}
    assert set(data['species']) == set(expected)
    reports = {}
    for key, (count, table, observed, total) in expected.items():
        species = data['species'][key]
        assert len(species['rows']) == count and species['table'] == table
        assert species['observedTotal'] == observed and species['extrapolatedTotal'] == total
        central = integrate(species['rows'])
        low, high = rounding_enclosure(species['rows'])
        target = D(observed[0])
        compatible = max(low, target - half_digit(observed[0])) <= min(high, target + half_digit(observed[0]))
        assert compatible, f'{key}: printed integral outside coherent display-rounding envelope'
        assert D(total[0]) > target > 0
        reports[key] = {'bins': count, 'printedBinIntegral': str(central), 'reportedObservedIntegral': observed[0],
                        'centralDifference': str(central - target), 'coherentDisplayRoundingEnvelope': [str(low), str(high)],
                        'reportedDisplayCompatible': compatible, 'reportedExtrapolatedTotal': total[0],
                        'impliedAcceptedFractionDiagnostic': str(target / D(total[0])),
                        'sharedNormalizationOnReportedIntegral': str(target * D('.034'))}
    # Synthetic count construction verifies the branching fraction enters once
    # through efficiency. These are deliberately not experimental signal counts.
    witnesses = []
    for factor in (D(1), D(2)):
        produced, acceptance, branching, events, width = map(D, ['2.4', '.4', '.64', '10000', '.03'])
        efficiency = acceptance * branching
        signal = produced * efficiency * events * width / factor
        recovered = corrected_density(signal, efficiency, events, width, factor)
        assert recovered == produced
        witnesses.append({'neutralFactor': int(factor), 'recoveredSyntheticDensity': str(recovered)})
    return {'checkId': 'hadron-production-printed-arithmetic', 'status': 'passed', 'binCount': 44,
            'species': reports, 'syntheticCorrectionWitnesses': witnesses,
            'scope': {'experimentalReplay': False, 'spectrumFitReplay': False, 'efficiencyReplay': False,
                      'covarianceReplay': False, 'modelExtrapolationReplay': False, 'feedDownSubtraction': False,
                      'primaryHadronMultiplicity': False, 'formationMechanismIdentified': False},
            'limits': ['Printed xp edges and densities are rounded inputs; exact central sums need not equal the reported integrated centers.',
                       'Display-rounding envelopes are not measurement errors or confidence intervals.',
                       'Bin systematic errors omit the shared 3.4 percent normalization; published integral errors include it and correlated components are not reconstructed.',
                       'The inferred observed/total fraction is only a diagnostic of rounded published values, not an independently recovered Monte Carlo acceptance.',
                       'Branching fractions are already included in reconstruction efficiencies; K0/K0bar uses the separately stated factor two for the unobserved K0L component.',
                       'The inclusive corrected reconstructed yields are not a primary-only feed-down-subtracted sample.']}


if __name__ == '__main__':
    print(json.dumps(verify(), indent=2))
