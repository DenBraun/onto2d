#!/usr/bin/env python3
"""Exact synthetic scattering kinematics; no QED amplitude or loop calculation."""

import json
from fractions import Fraction


def number(value):
    if isinstance(value, bool):
        raise ValueError("Boolean is not a rational input")
    try:
        return Fraction(value)
    except (ValueError, TypeError, ZeroDivisionError, OverflowError) as error:
        raise ValueError("A finite rational input is required") from error


def vector(values):
    if not isinstance(values, (list, tuple)) or len(values) != 4:
        raise ValueError("Four components in the +--- convention are required")
    return tuple(number(value) for value in values)


def square(values):
    p = vector(values)
    return p[0] ** 2 - sum(x ** 2 for x in p[1:])


def difference(left, right):
    return tuple(a - b for a, b in zip(vector(left), vector(right)))


def elastic_invariants(mass, incoming, outgoing):
    mass = number(mass)
    if mass <= 0:
        raise ValueError("This witness requires a positive common external mass")
    if not all(isinstance(pair, (list, tuple)) and len(pair) == 2 for pair in (incoming, outgoing)):
        raise ValueError("Two incoming and two outgoing momenta are required")
    p1, p2 = map(vector, incoming)
    p3, p4 = map(vector, outgoing)
    if any(p[0] <= 0 or square(p) != mass ** 2 for p in (p1, p2, p3, p4)):
        raise ValueError("External legs must have positive energy and the declared mass shell")
    if any(a + b != c + d for a, b, c, d in zip(p1, p2, p3, p4)):
        raise ValueError("Four-momentum conservation is required")
    s = square(tuple(a + b for a, b in zip(p1, p2)))
    t, u = square(difference(p1, p3)), square(difference(p1, p4))
    assert s + t + u == 4 * mass ** 2
    return s, t, u


def boost_x(values, velocity, gamma):
    """Rational proper orthochronous x boost with explicitly checked gamma."""
    p, v, g = vector(values), number(velocity), number(gamma)
    if abs(v) >= 1 or g <= 0 or g ** 2 * (1 - v ** 2) != 1:
        raise ValueError("A subluminal velocity and matching positive gamma are required")
    return (g * (p[0] - v * p[1]), g * (p[1] - v * p[0]), p[2], p[3])


def verify():
    incoming = [(5, 3, 0, 0), (5, -3, 0, 0)]
    outgoing = [(5, Fraction(9, 5), Fraction(12, 5), 0),
                (5, Fraction(-9, 5), Fraction(-12, 5), 0)]
    s, t, u = elastic_invariants(4, incoming, outgoing)
    assert (s, t, u) == (100, Fraction(-36, 5), Fraction(-144, 5))
    assert difference(incoming[0], outgoing[0]) == (0, Fraction(6, 5), Fraction(-12, 5), 0)
    boosts = [(Fraction(3, 5), Fraction(5, 4)), (Fraction(-5, 13), Fraction(13, 12))]
    for v, g in boosts:
        before, after = [[boost_x(p, v, g) for p in pair] for pair in (incoming, outgoing)]
        assert elastic_invariants(4, before, after) == (s, t, u)
    # A forward boundary case has t=0. Internal lines are not always off shell:
    # the actual kernel also requires its pole prescription and full amplitude.
    assert elastic_invariants(4, incoming, incoming)[1] == 0
    # Generic complex numbers, not computed spinor or photon amplitudes.
    assert abs(1 + (-1)) ** 2 == 0 != abs(1) ** 2 + abs(-1) ** 2
    assert (1 + 1j) * (1 - 1j) == 2
    return {
        "metric": "+---", "externalMass": "4", "externalMassSquared": "16",
        "s": str(s), "t": str(t), "u": str(u), "sPlusTPlusU": "64",
        "syntheticBoostChecks": len(boosts), "forwardZeroTransferControl": True,
        "fourMomentumConserved": True, "genericInterferenceControl": True,
        "physicalElectronMassInput": False, "spinorAmplitudeCalculated": False,
        "loopIntegralOrGaugeCancellationReproduced": False,
        "crossSectionOrEventDataReproduced": False, "energyBorrowingInferred": False,
        "virtualParticlePopulationMeasured": False, "allInternalLinesOffShell": False,
    }


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
