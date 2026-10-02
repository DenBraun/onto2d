#!/usr/bin/env python3
"""Exact finite checks of one free oscillator mode, not a continuum QFT solver.

The 2 by 2 matrices below act on the coefficients of formal q,p operators;
they are not finite-dimensional representations of [q,p]=i.  Units hbar=c=1,
unit oscillator mass, omega>0.  Rational phase pairs sample cos(omega*t),
sin(omega*t) exactly; they do not supply an arbitrary-time numerical integrator.
"""

import json
from fractions import Fraction as F


def number(value):
    if isinstance(value, bool) or isinstance(value, float):
        raise ValueError("Use an exact rational input, not a boolean or float")
    try:
        return F(value)
    except (ValueError, TypeError, ZeroDivisionError, OverflowError) as error:
        raise ValueError("A finite rational input is required") from error


def frequency(value):
    value = number(value)
    if value <= 0:
        raise ValueError("A positive frequency is required; the zero mode is excluded")
    return value


def phase(values):
    if not isinstance(values, (list, tuple)) or len(values) != 2:
        raise ValueError("A cosine and sine pair is required")
    c, s = map(number, values)
    if c * c + s * s != 1:
        raise ValueError("The phase pair must lie exactly on the unit circle")
    return c, s


def compose_phase(left, right):
    c, s = phase(left)
    d, u = phase(right)
    return c * d - s * u, s * d + c * u


def matrix(values):
    if (not isinstance(values, (list, tuple)) or len(values) != 2
            or any(not isinstance(row, (list, tuple)) or len(row) != 2 for row in values)):
        raise ValueError("A 2 by 2 matrix of formal operator coefficients is required")
    return tuple(tuple(number(x) for x in row) for row in values)


def transpose(values):
    values = matrix(values)
    return tuple(tuple(values[j][i] for j in range(2)) for i in range(2))


def multiply(left, right):
    left, right = matrix(left), matrix(right)
    return tuple(tuple(sum(left[i][k] * right[k][j] for k in range(2))
                       for j in range(2)) for i in range(2))


def commutator_factor(values):
    """[a*q+b*p,c*q+d*p] = i*(a*d-b*c), conditional on formal CCR."""
    (a, b), (c, d) = matrix(values)
    return a * d - b * c


def flow(omega, phase_pair):
    omega = frequency(omega)
    c, s = phase(phase_pair)
    return ((c, s / omega), (-omega * s, c))


def flow_derivative(omega, phase_pair):
    """Derivative using dc/dt=-omega*s and ds/dt=omega*c, not finite differencing."""
    omega = frequency(omega)
    c, s = phase(phase_pair)
    return ((-omega * s, c), (-omega * omega * c, -omega * s))


def energy_form(omega):
    omega = frequency(omega)
    return ((omega * omega, F(0)), (F(0), F(1)))


def vacuum_word(word):
    """Vacuum expectation of a finite ladder word in an untruncated oscillator.

    + creates and - annihilates.  On the unnormalized polynomial basis,
    a^dagger*z^n=z^(n+1) and a*z^n=n*z^(n-1); no Fock cutoff is used.
    The constant term is the vacuum expectation for the finite word.
    """
    if not isinstance(word, str) or any(x not in "+-" for x in word):
        raise ValueError("A finite word in creation + and annihilation - is required")
    degree, coefficient = 0, 1
    for operator in reversed(word):
        if operator == "+":
            degree += 1
        else:
            if degree == 0:
                return 0
            coefficient *= degree
            degree -= 1
    return coefficient if degree == 0 else 0


def vacuum_data(omega):
    omega = frequency(omega)
    # A=a+a^dagger, B=a-a^dagger. q=A/sqrt(2*omega), p=-i*sqrt(omega/2)*B.
    aa = sum(vacuum_word(x + y) for x in "-+" for y in "-+")
    bb = sum(sx * sy * vacuum_word(x + y)
             for x, sx in [("-", 1), ("+", -1)]
             for y, sy in [("-", 1), ("+", -1)])
    ab = sum(sy * vacuum_word(x + y) for x in "-+"
             for y, sy in [("-", 1), ("+", -1)])
    ba = sum(sx * vacuum_word(x + y) for x, sx in [("-", 1), ("+", -1)]
             for y in "-+")
    assert (aa, bb, ab, ba) == (1, -1, -1, 1)
    n, n2 = vacuum_word("+-"), vacuum_word("+-+-")
    return {
        "covariance": ((F(aa, 2) / omega, F(0)), (F(0), -F(bb, 2) * omega)),
        "qp": (F(0), -F(ab, 2)), "pq": (F(0), -F(ba, 2)),
        "numberMean": n, "energyMean": omega * (n + F(1, 2)),
        "energyVariance": omega * omega * (n2 - n * n),
    }


def transform_covariance(values, covariance):
    return multiply(multiply(values, covariance), transpose(values))


def correlation(omega, left_phase, right_phase):
    """<0|q(t_left)q(t_right)|0> as an exact (real, imaginary) pair."""
    data = vacuum_data(omega)
    a, b = flow(omega, left_phase)[0]
    c, d = flow(omega, right_phase)[0]
    return (a * c * data["covariance"][0][0] + b * d * data["covariance"][1][1],
            a * d * data["qp"][1] + b * c * data["pq"][1])


def verify():
    phases = [(1, 0), (0, 1), (-1, 0), (F(3, 5), F(4, 5)), (F(-5, 13), F(12, 13))]
    frequencies = [F(2), F(3, 2)]
    identity = ((1, 0), (0, 1))
    phase_checks = composition_checks = 0
    for omega in frequencies:
        data, metric = vacuum_data(omega), energy_form(omega)
        generator = ((0, 1), (-omega * omega, 0))
        assert data["numberMean"] == data["energyVariance"] == 0
        for p in phases:
            m = flow(omega, p)
            assert commutator_factor(m) == 1
            assert multiply(multiply(transpose(m), metric), m) == metric
            assert transform_covariance(m, data["covariance"]) == data["covariance"]
            assert flow_derivative(omega, p) == multiply(generator, m)
            assert multiply(m, flow(omega, (p[0], -p[1]))) == identity
            assert correlation(omega, p, p) == (F(1, 2) / omega, 0)
            phase_checks += 1
            for q in phases:
                assert multiply(m, flow(omega, q)) == flow(omega, compose_phase(p, q))
                # Common shifts of both arguments leave the vacuum correlation unchanged.
                shifted = (compose_phase(p, (F(3, 5), F(4, 5))),
                           compose_phase(q, (F(3, 5), F(4, 5))))
                assert correlation(omega, *shifted) == correlation(omega, p, q)
                composition_checks += 1
    omega, p = F(2), (F(3, 5), F(4, 5))
    unequal = correlation(omega, p, (1, 0))
    assert unequal == (F(3, 20), F(-1, 5)) != correlation(omega, (1, 0), (1, 0))
    assert unequal[1] * 2 == -p[1] / omega  # commutator is -i*sin(omega*t)/omega.
    # A symplectic squeeze preserves CCR but not this Hamiltonian or its vacuum.
    squeeze = ((2, 0), (0, F(1, 2)))
    covariance, metric = vacuum_data(omega)["covariance"], energy_form(omega)
    assert commutator_factor(squeeze) == 1
    assert transform_covariance(squeeze, covariance) != covariance
    assert multiply(multiply(transpose(squeeze), metric), squeeze) != metric
    # Attenuation alone fails a closed canonical map. A real open-system channel
    # can require additional environmental/noise operators; none is modeled here.
    attenuation = ((F(1, 2), 0), (0, F(1, 2)))
    assert commutator_factor(attenuation) == F(1, 4)
    assert vacuum_word("--++") == 2  # untruncated ladder algebra, not a two-level matrix.
    return {
        "units": "hbar=c=1", "oscillatorMass": "1", "positiveFrequencies": [str(x) for x in frequencies],
        "phaseChecks": phase_checks, "compositionAndCommonShiftChecks": composition_checks,
        "witnessFrequency": "2", "witnessPhase": ["3/5", "4/5"],
        "equalTimeVariance": "1/4", "unequalTimeCorrelation": [str(x) for x in unequal],
        "unequalTimeCommutatorImaginaryCoefficient": "-2/5",
        "numberMean": "0", "energyMean": "1", "energyVariance": "0",
        "squeezePreservesCCR": True, "squeezePreservesHamiltonianAndVacuum": False,
        "closedAttenuationCCRFactor": "1/4", "finiteDimensionalCCRRepresentation": False,
        "arbitraryTimeNumericalIntegration": False, "continuumLimitConstructed": False,
        "spacelikeMicrocausalityProved": False, "interactingQuantumFieldTheorySolved": False,
        "particleCreationOrVacuumMaintenanceInferred": False,
    }


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
