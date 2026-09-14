"""Replay the deposited Delft event tables, not raw acquisition or calibration."""
import csv
import hashlib
import io
import json
import math
import re
import zipfile
from collections import Counter
from datetime import datetime
from decimal import Decimal, localcontext
from fractions import Fraction
from pathlib import Path
from typing import NamedTuple

ROOT = Path(__file__).resolve().parents[3]
INPUTS = {
    2015: ("hensen2015-data.zip", "c28eb0f075759aef620a0b2e00a70fd675ce712bc8214d11c103f5a3d29492c0"),
    2016: ("hensen2016-data.zip", "876967e1cbe402b775d25392b773386325499b2343b18bf401d1825f2008a176"),
}


class Event(NamedTuple):
    day: int
    run: int
    time1: int
    channel1: int
    time2: int
    channel2: int
    setting_a: int
    setting_b: int
    setting_time_a: int
    setting_time_b: int
    readout_a: int
    readout_b: int
    excitation_a: int
    excitation_b: int
    invalid_a: int
    invalid_b: int


class Protocol(NamedTuple):
    start0: int  # picoseconds relative to the local sync pulse
    start1: int
    width: int
    allow_plus: bool


PROTOCOLS = {
    2015: [("bell_open_data.txt", Protocol(5426350, 5425700, 52450, False))],
    2016: [
        ("bell_open_data_2_old_detector.txt", Protocol(5426000, 5425100, 50000, True)),
        ("bell_open_data_2_new_detector.txt", Protocol(5425300, 5425100, 50000, True)),
    ],
}


def read_events(text):
    """Read every row in source order and reject missing or ambiguous fields."""
    events = []
    seen = set()
    previous = None
    for row in csv.reader(io.StringIO(text)):
        assert len(row) == 17, "Expected the 17 documented source columns"
        assert tuple(row) not in seen, "Duplicate deposited row"
        seen.add(tuple(row))
        timestamp = datetime.fromisoformat(row[0])
        assert previous is None or timestamp >= previous, "Source time order changed"
        previous = timestamp
        assert all(re.fullmatch(r"0|[1-9][0-9]*", x) for x in row[1:]), "Invalid integer field"
        e = Event(*map(int, row[1:]))
        assert e.day > 0 and e.run > 0
        assert all(x in (0, 1) for x in (e.channel1, e.channel2, e.setting_a, e.setting_b))
        assert 5415000 <= e.time1 < 5665000 and 5665000 <= e.time2 < 5915000
        assert all(x == 0 or 10620 <= x <= 14620 for x in (e.readout_a, e.readout_b))
        assert e.excitation_a == 0 or 7480 <= e.excitation_a <= 7680 or 7730 <= e.excitation_a <= 7930
        assert e.excitation_b == 0 or 5350 <= e.excitation_b <= 5550 or 5600 <= e.excitation_b <= 5800
        events.append((row[0], e))
    assert events, "Empty deposited table"
    return events


def selection(e, protocol):
    """Eligibility uses herald, prior markers and excitation fields only."""
    plus = e.channel1 == e.channel2
    starts = (protocol.start0, protocol.start1)
    second_width = (4000, 2500)[e.channel2] if plus and protocol.allow_plus else protocol.width
    herald = (
        (protocol.allow_plus or not plus)
        and starts[e.channel1] <= e.time1 < starts[e.channel1] + protocol.width
        and starts[e.channel2] + 250000 <= e.time2 < starts[e.channel2] + 250000 + second_width
    )
    markers = all(value == 0 or value > 250 for value in (e.invalid_a, e.invalid_b))
    excitation = e.excitation_a == 0 and e.excitation_b == 0
    return (herald, markers, excitation), "psi-plus" if plus else "psi-minus"


def readout(time):
    # Author scripts use an open start and closed end, in nanoseconds.
    # No click, or a click outside this integration window, remains outcome -1.
    return 1 if 10620 < time <= 14320 else -1


def win(a, b, x, y, tag):
    assert tag in ("psi-minus", "psi-plus")
    parity = a * (b + (tag == "psi-plus")) % 2
    return x * y == (-1 if parity else 1)


def upper_tail(n, k, q):
    """Direct high-precision binomial tail; q is an assumed bound, not a fit."""
    assert isinstance(n, int) and isinstance(k, int) and 0 <= k <= n <= 1000
    assert Decimal(0) <= q <= Decimal(1)
    with localcontext() as context:
        context.prec = 60
        if q == 0:
            return Decimal(int(k == 0))
        if q == 1:
            return Decimal(1)
        return sum(Decimal(math.comb(n, j)) * q**j * (1-q)**(n-j) for j in range(k, n+1))


def state_summary(matrix, tag):
    counts = list(map(sum, matrix))
    assert all(counts), "A conditional correlator has no observations"
    correlations = [Fraction(r[0]-r[1]-r[2]+r[3], n) for r, n in zip(matrix, counts)]
    signs = (1, 1, 1, -1) if tag == "psi-minus" else (1, 1, -1, 1)
    s = sum(sign*e for sign, e in zip(signs, correlations))
    variance = sum((1-e*e)/n for e, n in zip(correlations, counts))
    return s, variance, {
        "tag": tag, "trials": sum(counts), "settingCounts": counts,
        "outcomeCounts": matrix,
        "correlators": [float(x) for x in correlations],
        "S": float(s), "conventionalStandardDeviation": math.sqrt(float(variance)),
    }


def replay(year, tables):
    matrices = {tag: [[0]*4 for _ in range(4)] for tag in ("psi-minus", "psi-plus")}
    parts = []
    wins = 0
    for name, protocol in PROTOCOLS[year]:
        rows = read_events(tables[name])
        patterns, tags, negative = Counter(), Counter(), Counter()
        sequential = [0, 0, 0]
        for _, event in rows:
            gates, tag = selection(event, protocol)
            patterns["".join("1" if gate else "0" for gate in gates)] += 1
            for i in range(3):
                sequential[i] += all(gates[:i+1])
            if not all(gates):
                continue
            x, y = readout(event.readout_a), readout(event.readout_b)
            setting = 2*event.setting_a + event.setting_b
            outcome = 2*(x == -1) + (y == -1)
            matrices[tag][setting][outcome] += 1
            wins += win(event.setting_a, event.setting_b, x, y, tag)
            tags[tag] += 1
            negative["A"] += x == -1
            negative["B"] += y == -1
            negative["both"] += x == y == -1
        parts.append({
            "member": name, "rows": len(rows), "firstTimestamp": rows[0][0], "lastTimestamp": rows[-1][0],
            "protocol": protocol._asdict(), "gatePatterns": dict(sorted(patterns.items())),
            "sequentialSurvivors": sequential, "validByTag": dict(sorted(tags.items())),
            "negativeOutcomes": dict(negative),
        })
    n = sum(sum(row) for matrix in matrices.values() for row in matrix)
    states, weighted_s, weighted_variance = [], Fraction(0), Fraction(0)
    for tag, matrix in matrices.items():
        if not any(map(sum, matrix)):
            continue
        s, variance, state = state_summary(matrix, tag)
        weight = Fraction(state["trials"], n)
        weighted_s += weight*s
        weighted_variance += weight*weight*variance
        states.append(state)
    q = Decimal("0.75003240034992")  # 3/4 + 3*(tau + tau**2), tau = 0.0000108
    return {
        "contextId": f"hensen{year}", "sourceId": f"hensen{year}-data", "parts": parts,
        "rows": sum(p["rows"] for p in parts), "trials": n, "wins": wins, "states": states,
        "S": float(weighted_s), "conventionalStandardDeviation": math.sqrt(float(weighted_variance)),
        "scoreI": float(8*(Fraction(wins, n)-Fraction(1, 2))),
        "assumedTau": "0.0000108", "assumedSingleTrialBound": str(q),
        "conditionalUpperTail": str(upper_tail(n, wins, q)),
    }


def verify():
    results = []
    for year, (name, digest) in INPUTS.items():
        raw = (ROOT / "references/canonical/data" / name).read_bytes()
        assert hashlib.sha256(raw).hexdigest() == digest, "Deposited archive bytes changed"
        with zipfile.ZipFile(io.BytesIO(raw)) as archive:
            prefix = "bell_open_data" if year == 2015 else "bell_open_data_2"
            expected = {name for name, _ in PROTOCOLS[year]} | {
                prefix + "_analysis_example.py", prefix + "_readme.rtf", "bell_open_data_header.ods"
            }
            assert set(archive.namelist()) == expected and len(archive.namelist()) == len(expected)
            assert archive.testzip() is None
            # Read the deposited tables; never execute code contained in the archives.
            tables = {name: archive.read(name).decode("ascii") for name, _ in PROTOCOLS[year]}
        result = replay(year, tables)
        results.append(result)
    first, second = results
    assert (first["rows"], first["trials"], first["wins"]) == (4746, 245, 196)
    assert (second["rows"], second["trials"], second["wins"]) == (3918, 300, 237)
    # Independent printed-figure comparisons: correlated and anticorrelated counts.
    for state, expected in zip(first["states"] + second["states"], [
        [[46, 7], [63, 16], [46, 16], [10, 41]],
        [[42, 10], [48, 6], [42, 17], [16, 47]],
        [[14, 3], [12, 3], [2, 17], [15, 6]],
    ]):
        assert [[r[0]+r[3], r[1]+r[2]] for r in state["outcomeCounts"]] == expected
    assert [[s["tag"], s["trials"]] for s in second["states"]] == [["psi-minus", 228], ["psi-plus", 72]]
    assert [p["sequentialSurvivors"] for p in first["parts"] + second["parts"]] == [[361, 248, 245], [93, 56, 56], [353, 246, 244]]
    assert round(first["S"], 2) == 2.42 and round(second["S"], 2) == 2.35
    assert round(first["conventionalStandardDeviation"], 2) == .20
    assert round(second["conventionalStandardDeviation"], 2) == .18
    assert Decimal("0.039") < Decimal(first["conditionalUpperTail"]) < Decimal("0.0392")
    assert Decimal("0.0607") < Decimal(second["conditionalUpperTail"]) < Decimal("0.0608")
    return {
        "id": "bell-deposited-event-tables", "runs": results,
        "settingOrder": ["00", "01", "10", "11"], "outcomeOrder": ["++", "+-", "-+", "--"],
        "gateOrder": ["herald", "prior-invalid-markers", "local-excitation-clicks"],
        "checks": [{"id": f"bell-{part}-{year}", "passed": True} for year in INPUTS for part in ("event-table", "null-tail")],
        "rawAcquisitionReplayed": False, "stoppingRuleVerified": False,
        "rngCalibrationReproduced": False, "fullStatisticalProofVerified": False,
        "limit": "Recomputes the deposited, preselected 17-column event tables and the specified fixed-n null bound. Recorded marker ages, clock synchronization, missed events, original stopping decisions and the external predictability bound are not independently verified. Conventional S uncertainties retain their independent-trial interpretation; arithmetic agreement is not a new physical experiment.",
    }


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
