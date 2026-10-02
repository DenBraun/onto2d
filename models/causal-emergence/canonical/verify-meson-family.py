"""Finite light-meson bookkeeping; not a hadronization or KLOE analysis replay."""

import json
from fractions import Fraction as F


def number(value):
    if isinstance(value, bool):
        raise ValueError("Boolean is not a numerical input")
    try:
        return F(value)
    except (ValueError, TypeError, ZeroDivisionError, OverflowError) as error:
        raise ValueError("A finite rational input is required") from error


def probability(value, *, positive=False):
    value = number(value)
    if not (0 <= value <= 1) or (positive and value == 0):
        raise ValueError("A probability in the declared domain is required")
    return value


def matrix(values):
    if not isinstance(values, (list, tuple)) or len(values) != 3:
        raise ValueError("A three-by-three matrix is required")
    if any(not isinstance(row, (list, tuple)) or len(row) != 3 for row in values):
        raise ValueError("A three-by-three matrix is required")
    return tuple(tuple(number(value) for value in row) for row in values)


def trace_split(values):
    """Project the real rational witness matrix onto scalar and traceless parts.

    The physical flavor space is complex. These real rational examples check
    the supplied trace projectors; they do not prove irreducibility or measure
    a q-qbar population or a physical mixing angle.
    """
    values = matrix(values)
    average = sum(values[i][i] for i in range(3)) / 3
    singlet = tuple(tuple(average if i == j else F(0) for j in range(3)) for i in range(3))
    octet = tuple(tuple(values[i][j] - singlet[i][j] for j in range(3)) for i in range(3))
    return singlet, octet


def flavor_weights():
    # q-qbar weights are differences of quark weights. The three diagonal
    # basis vectors share a zero weight before the isovector/octet/singlet
    # basis is resolved; nine labels are not nine observed constituent pairs.
    labels = {'u': (F(1, 2), F(1, 3)), 'd': (F(-1, 2), F(1, 3)), 's': (F(0), F(-2, 3))}
    result = []
    for q, (i3, y) in labels.items():
        for anti, (anti_i3, anti_y) in labels.items():
            wi, wy = i3 - anti_i3, y - anti_y
            result.append((q, anti, wi, wy, wi + wy / 2))
    return result


def mixed_efficiency(weights, efficiencies):
    if not isinstance(weights, (list, tuple)) or not isinstance(efficiencies, (list, tuple)):
        raise ValueError("Explicit branch and efficiency sequences are required")
    if not weights or len(weights) != len(efficiencies):
        raise ValueError("Each branch needs one efficiency")
    w = tuple(probability(value) for value in weights)
    e = tuple(probability(value) for value in efficiencies)
    if not 0 < sum(w) <= 1:
        raise ValueError("Disjoint branch probabilities must have positive sum at most one")
    return sum(a * b for a, b in zip(w, e)) / sum(w)


def corrected_ratio(n_prime, n_eta, efficiency_prime, efficiency_eta,
                    fls_prime, fls_eta, daughter_prime, daughter_eta, interference):
    """KLOE Eq.7 direction, with explicit daughter branches and FLS factors.

    Signal yields are background-subtracted inputs. Daughter_prime is the sum
    of the two selected cascade branching products. Interference is K_rho,
    not a probability. No listed efficiency alone reproduces the experiment.
    """
    np, ne = number(n_prime), number(n_eta)
    ep, ee, fp, fe, bp, be = (probability(v, positive=True) for v in
                             (efficiency_prime, efficiency_eta, fls_prime, fls_eta,
                              daughter_prime, daughter_eta))
    k = number(interference)
    if np < 0 or ne <= 0 or k <= 0:
        raise ValueError("Nonnegative signal, positive reference and correction are required")
    return np / ne * ee / ep * fe / fp * be / bp * k


def verify():
    witnesses = [((1, 2, 3), (4, 5, 6), (7, 8, 9)),
                 ((2, 0, 0), (0, 2, 0), (0, 0, 2)),
                 ((1, 3, -2), (0, -1, 4), (5, 0, 0))]
    for values in witnesses:
        a = matrix(values)
        singlet, octet = trace_split(a)
        assert sum(octet[i][i] for i in range(3)) == 0
        assert all(singlet[i][j] + octet[i][j] == a[i][j] for i in range(3) for j in range(3))
        assert trace_split(singlet)[0] == singlet
        assert trace_split(octet)[1] == octet
        assert sum(singlet[i][j] * octet[i][j] for i in range(3) for j in range(3)) == 0
    weights = flavor_weights()
    assert len(weights) == 9
    assert sum(i3 == 0 and y == 0 for _, _, i3, y, _ in weights) == 3
    assert all(charge in (-1, 0, 1) for _, _, _, _, charge in weights)
    # A synthetic two-cascade acquisition, unrelated to KLOE's actual branches.
    b1, b2, beta_neutral, beta_charged = F(2, 5), F(1, 5), F(3, 10), F(1, 5)
    branch_weights = (b1 * beta_neutral, b2 * beta_charged)
    bp, be = sum(branch_weights), beta_neutral
    ep = mixed_efficiency(branch_weights, (F(1, 5), F(2, 5)))
    ee, fp, fe, r = F(3, 5), F(9, 10), F(4, 5), F(1, 200)
    for exposure in (F(10), F(10000), F(1000000000)):
        reference_branch = F(1, 100)
        np = exposure * reference_branch * r * bp * ep * fp
        ne = exposure * reference_branch * be * ee * fe
        assert corrected_ratio(np, ne, ep, ee, fp, fe, bp, be, 1) == r
        assert corrected_ratio(np * 2, ne, ep, ee, fp, fe, bp, be, 1) == 2 * r
        assert corrected_ratio(np, ne, ep, ee, fp, fe, bp, be, F(19, 20)) == F(19, 20) * r
    assert sum((60, 153, 130)) == 343
    assert 3750 - 343 == 3407
    return dict(
        flavorBasisDimension=9, coincidentZeroWeightBasisVectors=3,
        traceProjectorWitnesses=len(witnesses), syntheticCascadeExposureChecks=3,
        printedBackgroundComponents=[60, 153, 130], printedBackgroundTotal=343,
        printedSelectedCandidates=3750, printedSubtractedSignal=3407,
        syntheticInputsAreMeasurements=False, irreducibilityProved=False,
        physicalMixingAngleCalculated=False, qQbarPopulationMeasured=False,
        experimentalRatioReproduced=False, daughterBranchingInputsReconstructed=False,
        eventSelectionOrBackgroundReplayed=False, covarianceReproduced=False,
        gluoniumContentInferred=False, universalTransitionRelationEstablished=False,
        limit='Rational trace-projector and net-flavor bookkeeping, synthetic two-cascade efficiency/exposure identities and printed background subtraction only. Neither SU(3) irreducibility nor physical mixing, unrounded decay inputs, detector reconstruction, the reported radiative ratio, its errors or the conditional mixing fit is independently reproduced.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
