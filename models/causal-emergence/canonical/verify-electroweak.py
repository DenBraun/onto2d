"""Exact synthetic mass algebra in explicitly separate historical conventions.

No measured masses, background calibration, ATLAS data or likelihood enters
this calculation. Higgs's U(1) example is not the Weinberg lepton model.
"""

import json
from fractions import Fraction as F


def rational(value):
    if isinstance(value, bool) or not isinstance(value, (int, str, F)):
        raise ValueError("Use an exact rational input, not a float or Boolean")
    try:
        return F(value)
    except (ValueError, TypeError, ZeroDivisionError) as error:
        raise ValueError("A finite exact rational input is required") from error


def positive(value):
    value = rational(value)
    if value <= 0:
        raise ValueError("A positive input is required in this broken-phase witness")
    return value


def abelian_masses(background, coupling, quartic):
    """Higgs Eqs.1-4 with declared toy V(rho)=kappa*(rho-a^2)^2/4.

    rho=phi1^2+phi2^2 and (phi1,phi2)=(0,a). The real scalar fields
    have kinetic coefficient1/2. V''(a^2)=kappa/2, so the radial
    Hessian entry is4*a^2*V''=2*kappa*a^2; the phase entry is zero.
    The invariant vector of Eq.3 requires e*a !=0.
    """
    a, e, k = positive(background), positive(coupling), positive(quartic)
    return dict(vector_squared=e * e * a * a,
                radial_squared=2 * k * a * a, phase_squared=F(0),
                rho_stationarity=F(0), rho_curvature=k / 2)


def neutral_matrix(background, g, gprime):
    """Weinberg Eq.7 in the (A3,B) basis, retaining its positive cross term.

    <phi>=lambda_W*(1,0), not the modern (0,v/sqrt(2)) notation.
    L_mass=-1/2*(A3,B) M2 (A3,B)^T. No normalization translation is
    needed: all inputs and statements use this source's lambda_W.
    """
    lam, g, gp = positive(background), positive(g), positive(gprime)
    factor = lam * lam / 4
    return ((factor * g * g, factor * g * gp),
            (factor * g * gp, factor * gp * gp))


def matvec(matrix, vector):
    return tuple(sum(row[j] * vector[j] for j in range(2)) for row in matrix)


def lepton_mass(background, yukawa):
    # The phase was chosen to make Ge real. Positive Ge selects the mass
    # convention of these witnesses; varying Ge remains a free input.
    return positive(background) * positive(yukawa)


def verify():
    cases = [(F(2), F(3), F(4), F(1, 7)),
             (F(7, 3), F(2, 5), F(3, 7), F(2, 9)),
             (F(5, 4), F(1, 3), F(5, 8), F(3, 11))]
    summaries = []
    for lam, g, gp, ge in cases:
        m = neutral_matrix(lam, g, gp)
        norm2 = g * g + gp * gp
        mz2, mw2 = lam * lam * norm2 / 4, lam * lam * g * g / 4
        assert m[0][0] * m[1][1] - m[0][1] * m[1][0] == 0
        assert m[0][0] + m[1][1] == mz2 > 0
        assert matvec(m, (-gp, g)) == (0, 0)
        assert matvec(m, (g, gp)) == (mz2 * g, mz2 * gp)
        assert (-gp) * g + g * gp == 0
        assert mw2 / mz2 == g * g / norm2
        e2 = g * g * gp * gp / norm2
        assert e2 / (g * g) + e2 / (gp * gp) == 1
        me = lepton_mass(lam, ge)
        assert lepton_mass(lam, 2 * ge) == 2 * me
        summaries.append(dict(background=str(lam), g=str(g), gprime=str(gp),
                              yukawa=str(ge), chargedMassSquared=str(mw2),
                              neutralMassSquared=str(mz2), electronMass=str(me),
                              electricChargeSquared=str(e2)))
    for a, e, k in [(F(2), F(3, 5), F(7, 4)),
                    (F(5, 3), F(2, 7), F(3, 11)),
                    (F(1), F(1), F(1))]:
        result = abelian_masses(a, e, k)
        assert result['radial_squared'] == 4 * a * a * result['rho_curvature']
        assert result['vector_squared'] == (e * a) ** 2
        # Expand V(0,a+h): k*a^2*h^2+k*a*h^3+k*h^4/4.
        assert 2 * k * a * a == result['radial_squared']
        assert result['phase_squared'] == result['rho_stationarity'] == 0
    return dict(
        abelianSyntheticCases=3, electroweakSyntheticCases=len(cases),
        neutralNullDirection=['-gprime', 'g'],
        neutralMassiveDirection=['g', 'gprime'],
        neutralCrossTermSign='positive in Weinberg1967 (A3,B) convention',
        backgroundConvention='<phi>=lambda_W*(1,0)',
        yukawaRelation='M_e=lambda_W*G_e',
        cases=summaries,
        inputsAreMeasurements=False, modelsIdentifiedWithEachOther=False,
        modernNormalizationSubstituted=False, quantizedTheoryProved=False,
        vacuumStabilityEstablished=False, massHierarchyPredicted=False,
        neutrinoMassGenerated=False, detectorResponseReplayed=False,
        atlasMassFitReplayed=False, atlasSignificanceReplayed=False,
        atlasCovarianceReplayed=False, higgsIdentityUniquelyEstablished=False,
        limit='Exact synthetic linearized U(1) Hessian and Weinberg mass-matrix/Yukawa identities only; no measured parameter, full quantum theory, detector analysis or experimental likelihood is reconstructed.')


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
