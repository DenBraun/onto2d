"""Check rounded published bookkeeping, not the proton-decay likelihood."""

import json
import math
from decimal import Decimal as D, localcontext


def weighted_efficiency(exposures, lower, upper):
    assert len(exposures) == len(lower) == len(upper) > 0
    assert all(isinstance(v, D) and v.is_finite() for v in exposures + lower + upper)
    assert all(v > 0 for v in exposures)
    assert all(0 <= a <= 100 and 0 <= b <= 100 and a + b <= 100
               for a, b in zip(lower, upper))
    return sum(w * (a + b) for w, a, b in zip(exposures, lower, upper)) / sum(exposures)


def printed_background_interval(cells):
    """Bounds from two-decimal rounding and '<0.01', not uncertainty bars."""
    assert len(cells) > 0
    lo, hi = D(0), D(0)
    for cell in cells:
        if cell == "<0.01":
            hi += D(".01")
        else:
            assert isinstance(cell, str) and len(cell.split(".")) == 2
            assert len(cell.split(".")[1]) == 2
            value = D(cell)
            assert value.is_finite() and value >= 0
            lo += max(D(0), value - D(".005"))
            hi += value + D(".005")
    return lo, hi


def at_least_one(mean):
    assert isinstance(mean, (int, float)) and not isinstance(mean, bool)
    assert math.isfinite(mean) and mean >= 0
    return -math.expm1(-mean)


def verify():
    # Takenaka et al. 2020, Table IV (p.112011-11). Hand transcription of
    # printed centers only; its uncertainty columns are not likelihood inputs.
    with localcontext() as context:
        context.prec = 30
        conventional = list(map(D, ["92.1", "49.1", "31.9", "199.5"]))
        additional = list(map(D, ["19.3", "10.3", "6.7", "41.8"]))
        rows = [
            ("e-pi0-conventional", conventional, ["19.9", "18.1", "20.3", "19.6"], ["21.0", "20.2", "21.1", "19.8"], "39.8"),
            ("e-pi0-additional", additional, ["9.6", "8.8", "9.9", "11.0"], ["14.5", "14.9", "16.4", "15.9"], "25.8"),
            ("mu-pi0-conventional", conventional, ["17.0", "16.2", "17.5", "19.9"], ["16.7", "16.5", "16.8", "18.9"], "36.3"),
            ("mu-pi0-additional", additional, ["11.1", "8.8", "11.0", "12.7"], ["12.0", "12.6", "12.5", "14.7"], "25.2"),
        ]
        efficiencies = []
        for name, exposures, lower, upper, reported in rows:
            calculated = weighted_efficiency(exposures, list(map(D, lower)), list(map(D, upper)))
            # Allow the displayed one-decimal input precision; do not claim
            # to reconstruct the unpublished unrounded central values.
            assert abs(calculated - D(reported)) < D(".1")
            efficiencies.append(dict(id=name, calculatedPercent=str(calculated), reportedPercent=reported))
        backgrounds = []
        for channel, cells, reported in [
            ("e-pi0", ["0.01", "0.01", "<0.01", "<0.01", "0.15", "0.11", "0.07", "0.25"], "0.59"),
            ("mu-pi0", ["0.03", "0.01", "0.01", "<0.01", "0.21", "0.14", "0.08", "0.46"], "0.94"),
        ]:
            lo, hi = printed_background_interval(cells)
            assert lo <= D(reported) < hi
            backgrounds.append(dict(channel=channel, printedCells=cells, roundingLower=str(lo),
                                    roundingUpperExclusive=str(hi), reportedMean=reported))
        exposure = sum(conventional) + sum(additional)
        assert exposure == D("450.7")
        tail = at_least_one(.94)
        assert abs(tail * 100 - 60.9) < .05
        return dict(conventionalExposureKtonYears=str(sum(conventional)),
                    additionalExposureKtonYears=str(sum(additional)),
                    summedPrintedExposureKtonYears=str(exposure),
                    nominalPaperExposureKtonYears="450", efficiencies=efficiencies,
                    backgrounds=backgrounds, muonBackgroundAtLeastOne=tail,
                    rawAcquisitionReplayed=False, detectorSimulationReplayed=False,
                    backgroundModelReplayed=False, lifetimeLimitReplayed=False,
                    limit="Hand-transcribed Table IV central bookkeeping and a fixed-mean Poisson tail only. Rounding intervals are not statistical confidence intervals. Censored background cells are not zero. No detector selection, nuclear response, covariance, nuisance integration or published partial-lifetime bound is reproduced.")


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
