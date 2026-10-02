"""Exact charge bookkeeping and color-tensor identities, not a QCD solution."""

from fractions import Fraction
from itertools import permutations, product
import json


FLAVORS = ("u", "d", "s", "c", "b", "t")
CHARGES = dict(zip(FLAVORS, (2, -1, -1, 2, -1, 2)))


def count(value):
    if type(value) is not int or not 0 <= value <= 1000000:
        raise ValueError("A finite nonnegative integer basis count is required")
    return value


def quantum_numbers(population):
    """Return additive quantum numbers of a declared occupation basis label."""
    allowed = {*FLAVORS, *("anti-" + f for f in FLAVORS), "g"}
    if not isinstance(population, dict) or set(population) - allowed:
        raise ValueError("Unknown quark/antiquark/gluon label")
    for value in population.values():
        count(value)
    net = {f: population.get(f, 0) - population.get("anti-" + f, 0) for f in FLAVORS}
    return {
        "charge": Fraction(sum(CHARGES[f] * net[f] for f in FLAVORS), 3),
        "baryon": Fraction(sum(net.values()), 3),
        "netFlavor": net,
        "basisQuanta": sum(population.values()),
    }


def epsilon(indices):
    """Levi-Civita tensor with epsilon(0,1,2)=+1."""
    if len(indices) != 3 or any(type(i) is not int or i not in range(3) for i in indices):
        raise ValueError("Three color indices are required")
    if len(set(indices)) != 3:
        return 0
    return -1 if sum(indices[i] > indices[j] for i in range(3) for j in range(i + 1, 3)) % 2 else 1


def add_monomial(poly, variables, coefficient):
    key = tuple(sorted(variables))
    poly[key] = poly.get(key, 0) + coefficient
    if not poly[key]:
        del poly[key]


def transformed_epsilon(output):
    """Exact polynomial in nine independent matrix entries U_ab."""
    epsilon(output)  # Validate the three row indices, including repeated ones.
    poly = {}
    for incoming in permutations(range(3)):
        add_monomial(poly, [3 * output[r] + incoming[r] for r in range(3)], epsilon(incoming))
    return poly


def determinant_polynomial():
    # Independent explicit 3x3 determinant expansion, not tensor enumeration.
    return {
        (0, 4, 8): 1, (1, 5, 6): 1, (2, 3, 7): 1,
        (2, 4, 6): -1, (1, 3, 8): -1, (0, 5, 7): -1,
    }


def center_factor(quarks, antiquarks):
    """Coefficients a,b of a+b*z with z^2+z+1=0 (a primitive cube root)."""
    count(quarks)
    count(antiquarks)
    return ((1, 0), (0, 1), (-1, -1))[(quarks - antiquarks) % 3]


def evaluate(poly, matrix):
    if len(matrix) != 9 or any(type(x) not in (int, Fraction) for x in matrix):
        raise ValueError("Nine exact rational entries are required")
    total = Fraction(0)
    for variables, coefficient in poly.items():
        term = Fraction(coefficient)
        for variable in variables:
            term *= matrix[variable]
        total += term
    return total


def verify():
    determinant = determinant_polynomial()
    for output in product(range(3), repeat=3):
        sign = epsilon(output)
        expected = {key: sign * value for key, value in determinant.items()} if sign else {}
        assert transformed_epsilon(output) == expected
    # Non-unit determinant control: a U(3) phase need not preserve the tensor.
    det_minus_one = [-1, 0, 0, 0, 1, 0, 0, 0, 1]
    assert evaluate(transformed_epsilon((0, 1, 2)), det_minus_one) == -1
    assert sum(epsilon(indices) ** 2 for indices in product(range(3), repeat=3)) == 6
    assert center_factor(1, 0) != (1, 0)
    assert center_factor(2, 0) != (1, 0)
    assert center_factor(3, 0) == (1, 0)
    assert center_factor(1, 1) == (1, 0)
    bases = [("proton", {"u": 2, "d": 1}, 1), ("neutron", {"u": 1, "d": 2}, 0)]
    samples = []
    for name, base, charge in bases:
        original = quantum_numbers(base)
        assert original["charge"] == charge and original["baryon"] == 1
        for flavor in FLAVORS:
            augmented = dict(base)
            augmented[flavor] = augmented.get(flavor, 0) + 1
            augmented["anti-" + flavor] = 1
            result = quantum_numbers(augmented)
            assert result["basisQuanta"] == 5
            for key in ("charge", "baryon", "netFlavor"):
                assert result[key] == original[key]
        gluon = quantum_numbers({**base, "g": 1})
        assert gluon["basisQuanta"] == 4
        for key in ("charge", "baryon", "netFlavor"):
            assert gluon[key] == original[key]
        samples.append({"label": name, "chargeInE": str(original["charge"]),
                        "baryonNumber": str(original["baryon"]), "netFlavor": original["netFlavor"],
                        "compatibleBookkeepingCounts": [3, 4, 5]})
    return {
        "status": "passed",
        "scope": "Exact algebra for declared quark occupation labels and the fundamental SU(3) color tensor",
        "samples": samples,
        "pairInsertionChecks": 12,
        "gluonInsertionChecks": 2,
        "determinantTensorComponents": 27,
        "determinantMonomials": 6,
        "epsilonSquaredNorm": 6,
        "normalization": "1/sqrt(6)",
        "centerObstructionFundamentalFactors": [1, 2],
        "threeFundamentalSingletWitness": "epsilon_abc",
        "minimumScope": "Nonempty tensor powers of the fundamental color representation without antiquarks or adjoint factors",
        "trialityZeroSufficientForArbitraryRepresentations": False,
        "fockCoefficientsCalculated": False,
        "qcdEigenproblemSolved": False,
        "particlePopulationMeasured": False,
        "confinementProven": False,
        "formationRuleEstablished": False,
        "lifetimePredicted": False,
    }


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
