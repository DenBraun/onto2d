"""Finite flavor-weight and supplied mass-relation algebra, not spectroscopy."""

import json
from fractions import Fraction as F
from itertools import combinations_with_replacement


def rational(value):
    assert not isinstance(value, bool)
    assert isinstance(value, (int, str, F))
    return F(value)


def charge(i3, hypercharge):
    """Q/e = I3 + Y/2 in the declared light u,d,s sector."""
    return rational(i3) + rational(hypercharge) / 2


def weights(isospin, hypercharge, family):
    """Enumerate an explicitly supplied isospin multiplet, not a fit."""
    i, y = rational(isospin), rational(hypercharge)
    assert i >= 0 and (2 * i).denominator == 1
    assert isinstance(family, str) and family
    return [dict(family=family, isospin=i, i3=-i + k, hypercharge=y,
                 charge=charge(-i + k, y), strangeness=y - 1)
            for k in range(int(2 * i) + 1)]


def baryon_weights():
    """Supplied ground-state flavor patterns, with B=1 throughout.

    These weights do not establish the irreducible decomposition, spin,
    antisymmetry of the complete state, dynamics or observed populations.
    Lambda and Sigma0 occupy the same (I3,Y) position but have different I.
    """
    octet = (weights('1/2', 1, 'N') + weights(1, 0, 'Sigma') +
             weights(0, 0, 'Lambda') + weights('1/2', -1, 'Xi'))
    decuplet = (weights('3/2', 1, 'Delta') + weights(1, 0, 'Sigma*') +
                weights('1/2', -1, 'Xi*') + weights(0, -2, 'Omega'))
    return octet, decuplet


def octet_mass_residual(nucleon, xi, lambda_mass, sigma):
    """Evaluate Gell-Mann Eq.8.1 as supplied, with masses in common units.

    A zero synthetic residual is not proof that measured masses exactly obey
    a relation which the source states only to first order in symmetry breaking.
    """
    n, x, l, s = map(rational, (nucleon, xi, lambda_mass, sigma))
    assert min(n, x, l, s) > 0
    return (n + x) / 2 - (3 * l + s) / 4


def supplied_xi_mass(nucleon, lambda_mass, sigma):
    """Solve the already supplied linear relation, without fitting parameters."""
    n, l, s = map(rational, (nucleon, lambda_mass, sigma))
    assert min(n, l, s) > 0
    result = (3 * l + s) / 2 - n
    assert result > 0
    return result


def equal_spacing(first, second, third):
    """Exact printed-center comparison; no uncertainty model is supplied."""
    a, b, c = map(rational, (first, second, third))
    assert 0 < a < b < c
    return b - a, c - b, c + (c - b)


def verify():
    octet, decuplet = baryon_weights()
    assert len(octet) == 8 and len(decuplet) == 10
    assert len({(w['i3'], w['hypercharge']) for w in octet}) == 7
    center = [w for w in octet if w['i3'] == w['hypercharge'] == 0]
    assert [w['family'] for w in center] == ['Sigma', 'Lambda']
    assert [w['isospin'] for w in center] == [F(1), F(0)]
    assert all(w['charge'].denominator == 1 for w in octet + decuplet)
    assert all(w['strangeness'] == w['hypercharge'] - 1 for w in octet + decuplet)
    omega = decuplet[-1]
    assert (omega['isospin'], omega['i3'], omega['hypercharge'],
            omega['strangeness'], omega['charge']) == (0, 0, -2, -3, -1)

    # Symmetric degree-three flavor monomials have these ten weights.
    # Agreement of their weights is not a proof of 3^3=10+8+8+1, and does
    # not assign orbital/spin wave functions or count quarks in an event.
    flavor = {'u': (F('1/2'), F('1/3')),
              'd': (F('-1/2'), F('1/3')),
              's': (F(0), F('-2/3'))}
    triples = list(combinations_with_replacement(flavor, 3))
    monomial_weights = [(sum((flavor[q][0] for q in qs), F(0)),
                         sum((flavor[q][1] for q in qs), F(0))) for qs in triples]
    expected = [(w['i3'], w['hypercharge']) for w in decuplet]
    assert sorted(monomial_weights) == sorted(expected)

    # Three explicitly synthetic positive-mass examples. The Xi value is
    # constructed from the supplied relation, not independently predicted.
    toy_inputs = [(1, 2, 3), (10, 13, 15), ('7/5', '3/2', '17/10')]
    synthetic_checks = 0
    for n, l, s in toy_inputs:
        n, l, s = map(rational, (n, l, s))
        x = supplied_xi_mass(n, l, s)
        assert octet_mass_residual(n, x, l, s) == 0
        common_shift = F('2/5')
        assert octet_mass_residual(n + common_shift, x + common_shift,
                                   l + common_shift, s + common_shift) == 0
        assert octet_mass_residual(n, x + F('1/7'), l, s) == F('1/14')
        synthetic_checks += 3

    # Barnes Fig.1's historical printed centers, not modern mass estimates.
    d1, d2, continuation = equal_spacing(1238, 1385, 1532)
    assert d1 == d2 == 147 and continuation == 1679
    reported_approximate = F(1680)
    assert continuation - reported_approximate == -1
    assert ((continuation + 5) // 10) * 10 == 1680

    serialize = lambda ws: [{k: str(v) if isinstance(v, F) else v
                            for k, v in w.items()} for w in ws]
    return dict(
        octetWeights=serialize(octet), decupletWeights=serialize(decuplet),
        octetWeightCount=8, octetDistinctPositions=7, decupletWeightCount=10,
        centralOctetStates=['Sigma0', 'Lambda'], symmetricFlavorMonomials=10,
        omegaWeight=dict(isospin='0', i3='0', hypercharge='-2',
                         strangeness='-3', charge='-1'),
        syntheticMassRelationChecks=synthetic_checks,
        suppliedMassRelation='(m_N+m_Xi)/2-(3*m_Lambda+m_Sigma)/4',
        historicalMassCentersMeV=['1238', '1385', '1532'],
        printedSpacingsMeV=[str(d1), str(d2)],
        arithmeticContinuationMeV=str(continuation),
        sourceApproximateOmegaMassMeV=str(reported_approximate),
        continuationMinusApproximateMeV=str(continuation-reported_approximate),
        irreducibleDecompositionProved=False, spinSpaceStateConstructed=False,
        inputsAreObservedQuarkCounts=False, fullHadronStateComputed=False,
        firstOrderBreakingDerived=False, measuredOctetRelationFitted=False,
        modernMassComparisonMade=False, discoveryKinematicFitReplayed=False,
        discoveryCovarianceReplayed=False, omegaSpinMeasured=False,
        populationLifetimeInferred=False, formationOrStabilityProved=False,
        limit='Supplied flavor-weight enumeration, three synthetic linear-relation witnesses and historical printed-center spacing only. The local calculation does not establish an irreducible decomposition, a full spin-space-color state, a dynamical formation path, exact measured mass relations, the Barnes event fit, spin/parity, lifetime or stability. The continuation 1679 is compared only with a source expectation described as about 1680 MeV/c^2.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
