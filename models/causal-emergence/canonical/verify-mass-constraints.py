"""Check printed conditional mass arithmetic; no state assignment or fit replay."""

import json
from decimal import Decimal as D, localcontext


def mass_ratio(frequency_ratio, electron_u, binding_u, proton_reference_u):
    values = (frequency_ratio, electron_u, binding_u, proton_reference_u)
    assert all(isinstance(v, D) and v.is_finite() for v in values)
    assert frequency_ratio > 0 and electron_u > 0 and proton_reference_u > 0
    assert 0 < binding_u < 2 * proton_reference_u + electron_u
    # R = nu(H2+)/nu(D+) = m_d/m_H2+, with positive binding subtracted.
    return frequency_ratio * (2 + (electron_u - binding_u) / proton_reference_u)


def verify():
    with localcontext() as context:
        context.prec = 40
        # Korobov 2017 Table V H2+ energy; rounded CODATA 2018 mass inputs.
        h, c, e = D("6.62607015e-34"), D(299792458), D("1.602176634e-19")
        binding_u = D("131058.1219937") * 100 * h * c / e / D("9.3149410242e8")
        electron_u, reference_u = D("0.000548579909065"), D("1.007276466621")
        # Fink/Myers 2021 pp. 3-4: three conditional branches, same Table I
        # correction. These probabilities/assignments are not recomputed.
        branches = []
        for name, value, uncertainty in [
            ("published-choice", "0.9992316599712", "0.0000000000021"),
            ("lower-branch-1", "0.9992316599589", "0.0000000000029"),
            ("lower-branch-2", "0.9992316599550", "0.0000000000027"),
        ]:
            corrected = D(value) + D("31.8e-12")
            ratio = mass_ratio(corrected, electron_u, binding_u, reference_u)
            branches.append(dict(id=name, uncorrectedRatio=value,
                                 statisticalSigma=uncertainty,
                                 correctedRatio=str(corrected), massRatio=str(ratio)))
        selected = D(branches[0]["massRatio"])
        for branch in branches:
            branch["shiftInPublishedSigma"] = str((D(branch["massRatio"]) - selected) / D("9e-12"))
        proton = D("2.013553212535") / D("1.999007501272")
        diagonal_sigma = sum(D(x) ** 2 for x in ("1.4", "2.9", "0.2", "0.5")).sqrt()
        assert abs(selected - D("1.999007501272")) < D("0.5e-12")
        assert abs(proton - D("1.007276466574")) < D("1e-12")
        assert abs(D(branches[1]["shiftInPublishedSigma"]) + D("2.7")) < D(".05")
        assert abs(D(branches[2]["shiftInPublishedSigma"]) + D("3.6")) < D(".05")
        assert sum(D(x) for x in ("29.5", "2.9", "-1.1", "0.5")) == D("31.8")
        assert abs(diagonal_sigma - D("3.7")) > D(".4")
        return dict(branches=branches, h2BindingU=str(binding_u),
                    protonFromRoundedRatioU=str(proton),
                    independentSystematicSigmaRatio1e12=str(diagonal_sigma),
                    publishedSystematicSigmaRatio1e12="3.7",
                    rawAcquisitionReplayed=False, stateAssignmentReplayed=False,
                    branchProbabilitiesReplayed=False, propagatedUncertaintyReplayed=False,
                    molecularTheoryReplayed=False, codataAdjustmentReplayed=False,
                    systematicUncertaintyDiscrepancyResolved=False,
                    limit="Printed central arithmetic uses historical rounded constants and the paper's conditional choice. Alternative branches remain separate, not a Gaussian mixture. Independent quadrature is only a diagnostic; the original correction covariance and full uncertainty budget are unavailable.")


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
