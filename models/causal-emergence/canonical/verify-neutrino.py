"""Selected KamLAND energies and finite vacuum-phase algebra, not a fit replay."""

import cmath
import hashlib
import json
import math
import re
from decimal import Decimal as D, ROUND_HALF_UP
from fractions import Fraction as F
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / 'references/canonical/data'
FILES = {
    'kamland2005-description.html': (7016, '073e6de9a2dd1a75921e6616fd7d220b5f94636ecc7f99d94f3b75647128dab5'),
    'kamland2005-selected-energies.dat': (1548, '3d58312c39ec487da2e43466eb67aa84e9766602dae8eb1607a8698a87845f24'),
}


def finite(value):
    if isinstance(value, bool) or not isinstance(value, (int, float, F, D)):
        raise ValueError('A finite real number is required')
    try:
        result = float(value)
    except (OverflowError, ValueError):
        raise ValueError('A finite real number is required') from None
    if not math.isfinite(result):
        raise ValueError('A finite real number is required')
    return result


def mixing_matrix(values):
    """A closed two- or three-state unitary model, not a general 3-by-n U."""
    if not isinstance(values, (list, tuple)) or len(values) not in (2, 3):
        raise ValueError('A square two- or three-state mixing matrix is required')
    size = len(values)
    result = []
    for row in values:
        if not isinstance(row, (list, tuple)) or len(row) != size:
            raise ValueError('A square mixing matrix is required')
        converted = []
        for value in row:
            if isinstance(value, complex):
                if not math.isfinite(value.real) or not math.isfinite(value.imag):
                    raise ValueError('Finite mixing entries are required')
                converted.append(value)
            else:
                converted.append(complex(finite(value)))
        result.append(tuple(converted))
    for a in range(size):
        for b in range(size):
            overlap = sum(result[a][i] * result[b][i].conjugate() for i in range(size))
            if not math.isfinite(abs(overlap)) or abs(overlap - (a == b)) > 1e-12:
                raise ValueError('The declared closed mixing matrix must be unitary')
    return tuple(result)


def probabilities(values, mass_squared, phase_scale, source=0, antineutrino=False):
    """PDG14.35-37: U_beta,i exp(-i*m_i^2*L/(2E)) U*_alpha,i.

    hbar=c=1; phase_scale is L/(2E) in units inverse to mass_squared.
    Neutrino flavor kets use U*. Antineutrinos replace U by U*.
    Return detection probabilities for the supplied source flavor. No matter,
    flux, cross section, energy response or fitted experimental inputs enter.
    """
    u = mixing_matrix(values)
    n = len(u)
    if not isinstance(mass_squared, (list, tuple)) or len(mass_squared) != n:
        raise ValueError('One mass-squared input per propagation state is required')
    masses = tuple(finite(m) for m in mass_squared)
    scale = finite(phase_scale)
    if min(masses) < 0 or scale < 0:
        raise ValueError('Nonnegative mass squares and propagation scale are required')
    if type(source) is not int or not 0 <= source < n or type(antineutrino) is not bool:
        raise ValueError('A valid source-flavor index and explicit particle convention are required')
    phases = tuple(finite(m * scale) for m in masses)
    if antineutrino:
        u = tuple(tuple(z.conjugate() for z in row) for row in u)
    result = tuple(abs(sum(u[b][i] * cmath.exp(-1j * phases[i]) *
                           u[source][i].conjugate() for i in range(n))) ** 2
                   for b in range(n))
    if any(not math.isfinite(p) or p < 0 or p > 1 + 1e-11 for p in result):
        raise ValueError('Finite normalized probabilities are required')
    if abs(sum(result) - 1) > 1e-11:
        raise ValueError('Probability normalization failed')
    return result


def two_flavor_survival(theta, phase_difference):
    """P_ee = 1-sin^2(2 theta) sin^2(delta/2), delta=Delta m^2 L/(2E)."""
    angle, delta = finite(theta), finite(phase_difference)
    if not 0 <= angle <= math.pi / 2:
        raise ValueError('The declared mixing angle must lie between zero and pi/2')
    return 1 - math.sin(2 * angle) ** 2 * math.sin(delta / 2) ** 2


def parse_selected_energies(text):
    """Preserve every rounded selected prompt energy, including duplicates."""
    if not isinstance(text, str) or not text.endswith('\n'):
        raise ValueError('A newline-terminated selected-energy table is required')
    rows = text.splitlines()
    if len(rows) != 258 or any(re.fullmatch(r' [0-9]\.[0-9]{2}', row) is None for row in rows):
        raise ValueError('Exactly 258 single-column two-decimal prompt energies are required')
    energies = tuple(D(row.strip()) for row in rows)
    if any(not D('2.6') < value < D('8.5') for value in energies):
        raise ValueError('Prompt energies must satisfy the stated prompt selection')
    if tuple(sorted(energies)) != energies:
        raise ValueError('The released list is sorted and duplicates must be retained')
    return energies


def verify():
    bound = {}
    for name, (size, digest) in FILES.items():
        raw = (DATA / name).read_bytes()
        assert len(raw) == size and hashlib.sha256(raw).hexdigest() == digest
        bound[name] = raw
    energies = parse_selected_energies(bound['kamland2005-selected-energies.dat'].decode('ascii'))
    assert min(energies) == D('2.61') and max(energies) == D('7.95')
    assert sum(energies) == D('1098.33')
    # The fast-neutron 0.89-event upper bound is not a central contribution.
    background = D('2.69') + D('4.8') + D('10.3')
    assert background == D('17.79')
    assert background.quantize(D('.1'), rounding=ROUND_HALF_UP) == D('17.8')
    survival = (F(258) - F('17.8')) / F('365.2')
    assert survival == F(1201, 1826)
    displayed = (D(survival.numerator) / D(survival.denominator)).quantize(D('.001'), rounding=ROUND_HALF_UP)
    assert displayed == D('.658')
    theta = .37
    u = ((math.cos(theta), math.sin(theta)), (-math.sin(theta), math.cos(theta)))
    for delta in (0, .3, 1.7, 4.1):
        p = probabilities(u, (0, 1), delta)
        assert abs(p[0] - two_flavor_survival(theta, delta)) < 1e-12
        shifted = probabilities(u, (2, 3), delta)
        assert max(abs(a - b) for a, b in zip(p, shifted)) < 1e-12
    omega = cmath.exp(2j * math.pi / 3)
    complex_u = tuple(tuple(omega ** (a * i) / math.sqrt(3) for i in range(3)) for a in range(3))
    for source in range(3):
        p = probabilities(complex_u, (0, 1, 3), .7, source)
        anti = probabilities(complex_u, (0, 1, 3), .7, source, True)
        conjugated = tuple(tuple(z.conjugate() for z in row) for row in complex_u)
        assert max(abs(a - b) for a, b in zip(anti, probabilities(conjugated, (0, 1, 3), .7, source))) < 1e-12
        assert abs(sum(p) - 1) < 1e-12
        for detected in range(3):
            assert abs(anti[detected] - probabilities(complex_u, (0, 1, 3), .7, detected)[source]) < 1e-12
    return dict(
        assetCount=len(FILES), selectedCandidateCount=len(energies),
        promptEnergyUnit='MeV', promptEnergyMinimum=str(min(energies)),
        promptEnergyMaximum=str(max(energies)), promptEnergySum=str(sum(energies)),
        selectedPromptEnergiesBelow3Point4MeV=sum(e < D('3.4') for e in energies),
        printedBackgroundSum=str(background), printedAverageSurvival=str(survival),
        roundedAverageSurvival=str(displayed), syntheticTwoFlavorPhaseCases=4,
        syntheticComplexThreeFlavorSourceCases=3,
        phaseConvention='hbar=c=1; flavor ket uses U*; amplitude U_beta,i exp(-i m_i^2 L/(2E)) U*_alpha,i; antineutrino replaces U by U*',
        inputEnergiesAreTrueNeutrinoEnergies=False, rawDetectorDataReplayed=False,
        reactorPredictionReconstructed=False, backgroundModelReplayed=False,
        responseOrLikelihoodReconstructed=False, uncertaintyOrSignificanceReproduced=False,
        solarCombinedFitReplayed=False, absoluteMassDetermined=False,
        massGenerationMechanismEstablished=False, syntheticInputsAreMeasurements=False,
        limit='Exact released prompt-energy bytes, count/range/sum, printed central-value bookkeeping and synthetic closed-system vacuum phases only. No reactor-history, detector-response, background-spectrum, likelihood, covariance, significance or solar-data reconstruction; oscillation phases do not determine absolute mass or a unique mass-generation mechanism.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
