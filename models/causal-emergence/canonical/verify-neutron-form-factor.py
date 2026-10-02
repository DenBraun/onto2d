"""Finite neutron response checks; no event, nuclear-model or fit replay."""

import hashlib
import itertools
import json
import re
from decimal import Decimal as D, localcontext, ROUND_HALF_UP
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / 'references/canonical/data'
FILES = {
    'lachniet2009-e111m1.tsv': '1a624c5e49f39334dbd331dda4470e0a7a9de5e48c5cb85051149db9ba0d7129',
    'lachniet2009-e111m1-description.html': 'c6c251614e94b6f994d9dd75ecf720e80d16badd90f4454ba9f43732f23a2e48',
    'lachniet2009-v2-figure3.eps': 'fb819bd18ce5f7116d8396ec707dffb63c7ab060e7d030da4bf9dc8aea987bdb',
}

# Riordan arXiv:1008.1738v2, p5 Table III. Values are dimensionless except
# the acceptance-mean Q2 and its RMS width (p2 Table I), both in GeV2.
# The RMS width is not an uncertainty of the mean. The seven final columns
# are relative GE systematic components: GMn, PHe, Pn, Pe, Dp/n, Din, other.
RIORDAN = [
    ('1.72', '.14', '.273', '.020', '.030', '.0236', '.0017', '.0026',
     ('.020', '.076', '.033', '.055', '.033', '.011', '.025')),
    ('2.48', '.18', '.412', '.048', '.036', '.0208', '.0024', '.0019',
     ('.024', '.059', '.024', '.031', '.036', '.027', '.023')),
    ('3.41', '.22', '.496', '.067', '.046', '.0147', '.0020', '.0014',
     ('.026', '.047', '.016', '.026', '.032', '.060', '.026')),
]


def finite(*values):
    assert all(isinstance(v, D) and v.is_finite() for v in values)


def positive(*values):
    finite(*values)
    assert all(v > 0 for v in values)


def dipole(q2):
    """The paper's reference dipole, with Q2 in GeV2; not a measured fit."""
    finite(q2)
    assert q2 >= 0
    result = (1 + q2 / D('.71')) ** -2
    positive(result)
    return result


def magnetic_from_reduced(q2, reduced, mu):
    """Convert GM/(mu*GD) using an explicitly supplied signed reference mu."""
    finite(reduced, mu)
    assert mu != 0
    result = reduced * mu * dipole(q2)
    finite(result)
    return result


def normalized_sachs_ratio(ge, gm, mu):
    """Riordan's gn=mu*GE/GM, distinct from the magnetic g factor."""
    finite(ge, gm, mu)
    assert gm != 0 and mu != 0
    result = mu * ge / gm
    finite(result)
    return result


def quasielastic_ratio(ge, gm, tau, tan_half_squared, nuclear_factor, mott, proton):
    """Lachniet Eq1, given its kinematic/model inputs in compatible units.

    The ratio remains energy/angle dependent at fixed Q2; this identity is
    not a calculation of nuclear or detector corrections from raw events.
    """
    finite(ge, gm, tan_half_squared)
    positive(tau, nuclear_factor, mott, proton)
    assert tan_half_squared >= 0
    response = (ge ** 2 + tau * gm ** 2) / (1 + tau) + 2 * tau * tan_half_squared * gm ** 2
    result = nuclear_factor * mott * response / proton
    finite(result)
    assert result >= 0
    return result


def magnetic_magnitude(ratio, ge, tau, tan_half_squared, nuclear_factor, mott, proton):
    """Invert Eq1 only for |GM|; sign requires an external convention."""
    finite(ratio, ge, tan_half_squared)
    positive(tau, nuclear_factor, mott, proton)
    assert ratio >= 0 and tan_half_squared >= 0
    numerator = ratio * proton / (nuclear_factor * mott) - ge ** 2 / (1 + tau)
    denominator = tau / (1 + tau) + 2 * tau * tan_half_squared
    finite(numerator)
    positive(denominator)
    assert numerator >= 0
    result = (numerator / denominator).sqrt()
    finite(result)
    return result


def linear(q, q0, q1, y0, y1):
    """No extrapolation; the interpolation quantity must be chosen explicitly."""
    finite(q, q0, q1, y0, y1)
    assert q0 < q1 and q0 <= q <= q1
    result = y0 + (y1 - y0) * (q - q0) / (q1 - q0)
    finite(result)
    return result


def parse_clas_table(text):
    lines = text.splitlines()
    assert lines[:8] == [
        'CLAS physics database search results', 'Measurement E111M1', 'E5',
        'W. K. Brooks and M. F. Vineyard', '2000', '',
        'Q^2\tGMn_reduced\tStat. error\tSyst. error', '\t\t\t',
    ]
    rows = []
    for line in lines[8:]:
        assert len(line.split('\t')) == 4
        row = tuple(D(v) for v in line.split('\t'))
        positive(*row)
        if rows:
            assert rows[-1][0] < row[0]
        rows.append(row)
    assert len(rows) == 26
    return rows


def compare_metadata(rows, text):
    """Read the deposited quantity definition and finite HTML table only."""
    assert '<h2>Measurement E111M1</h2>' in text
    assert 'Neutron magnetic form factor (GMn) divided by &mu;<sub>n</sub>*GD' in text
    assert 'PRL 102, 192001 (2009)' in text
    body = re.search(r'<tbody>(.*?)</tbody>', text, re.S)
    assert body is not None
    cells = re.findall(r'<td(?: class="f")?>([^<]+)</td>', body.group(1))
    assert len(cells) == 104
    assert [tuple(D(v) for v in cells[i:i + 4]) for i in range(0, 104, 4)] == rows


def compare_final_figure(rows, eps):
    """Compare the pinned author's vector coordinates, without running EPS.

    The labeled axes map Q2=0,5 to x=272,2154 and normalized response
    1,1.1 to y=735,897. Integer source coordinates limit the comparison.
    This identifies final plotted values, not an independent measurement.
    """
    matches = re.findall(r'(643 727(?:\s+-?\d+)+)\s+26 \{ m21\}', eps)
    assert len(matches) == 2 and matches[0].split() == matches[1].split()
    numbers = [int(v) for v in matches[0].split()]
    assert len(numbers) == 52 and len(rows) == 26
    positions = list(zip(numbers[::2], numbers[1::2]))
    dx = [abs(D(x) - (272 + D(1882) * row[0] / 5)) for (x, y), row in zip(positions, rows)]
    dy = [abs(D(y) - (735 + D(1620) * (row[1] - 1))) for (x, y), row in zip(positions, rows)]
    assert max(dx) < 1 and max(dy) < 1
    # Parse only the known relative-line sublanguage in this pinned path.
    path = re.search(r'643 284 m (.*?) f', eps, re.S)
    assert path is not None
    x, y, stack = 643, 284, []
    points = [(x, y)]
    for token in path.group(1).split():
        if token == 'd':
            assert len(stack) == 2
            dx_step, dy_step = stack
            x, y = x + dx_step, y + dy_step
        elif token == 'X':
            assert len(stack) == 1
            x += stack[0]
        else:
            assert re.fullmatch(r'-?\d+', token)
            stack.append(int(token))
            continue
        stack.clear()
        points.append((x, y))
    assert not stack and points[-3:] == [(2069, 272), (2068, 249), (641, 249)]
    return dict(maximumXError=str(max(dx)), maximumYError=str(max(dy)),
                uniqueMarkers=26, drawingPasses=2, endpointBandHeight=23,
                endpointBandResponse=str(D(23) / 1620))


def unmix_asymmetry(observed, signal_fraction, background):
    """A declared two-component identity, not the full TableII pipeline."""
    finite(observed, signal_fraction, background)
    assert abs(observed) <= 1 and abs(background) <= 1 and 0 < signal_fraction <= 1
    result = (observed - (1 - signal_fraction) * background) / signal_fraction
    finite(result)
    assert abs(result) <= 1
    return result


def rounded_overlap(center, half_unit, comparison, comparison_half_unit):
    finite(center, comparison)
    positive(half_unit, comparison_half_unit)
    return max(center - half_unit, comparison - comparison_half_unit) < min(center + half_unit, comparison + comparison_half_unit)


def verify():
    with localcontext() as context:
        context.prec = 50
        contents = {}
        for name, expected in FILES.items():
            raw = (DATA / name).read_bytes()
            assert hashlib.sha256(raw).hexdigest() == expected, f'Source bytes changed: {name}'
            contents[name] = raw.decode('utf-8')
        rows = parse_clas_table(contents['lachniet2009-e111m1.tsv'])
        compare_metadata(rows, contents['lachniet2009-e111m1-description.html'])
        figure = compare_final_figure(rows, contents['lachniet2009-v2-figure3.eps'])
        results = []
        for q, rms, gn, gn_stat, gn_syst, ge, ge_stat, ge_syst, components in RIORDAN:
            q, rms, gn, gn_stat, gn_syst, ge, ge_stat, ge_syst = map(D, (q, rms, gn, gn_stat, gn_syst, ge, ge_stat, ge_syst))
            components = tuple(map(D, components))
            positive(q, rms, gn, gn_stat, gn_syst, ge, ge_stat, ge_syst, *components)
            total_ge_syst = ge * sum(v ** 2 for v in components).sqrt()
            ratio_syst = gn * sum(v ** 2 for v in components[1:]).sqrt()
            propagated_stat = gn_stat * ge / gn
            assert total_ge_syst.quantize(D('.0001'), rounding=ROUND_HALF_UP) == ge_syst
            assert ratio_syst.quantize(D('.001'), rounding=ROUND_HALF_UP) == gn_syst
            assert propagated_stat.quantize(D('.0001'), rounding=ROUND_HALF_UP) == ge_stat
            a, b = next((a, b) for a, b in zip(rows, rows[1:]) if a[0] <= q <= b[0])
            # TableIII says interpolate GMn, not GMn/(mu*GD). mu cancels
            # only after each source point has been unnormalized at its Q2.
            gm_over_mu = linear(q, a[0], b[0], a[1] * dipole(a[0]), b[1] * dipole(b[0]))
            literal = gn * gm_over_mu
            alternative = gn * linear(q, a[0], b[0], a[1], b[1]) * dipole(q)
            half_from_gn_rounding = D('.0005') * gm_over_mu
            assert rounded_overlap(literal, half_from_gn_rounding, ge, D('.00005'))
            results.append(dict(q2=str(q), rmsQ2=str(rms), bracket=[str(a[0]), str(b[0])],
                literalGMInterpolationGE=str(literal), ratioFirstInterpolationGE=str(alternative),
                literalCentralRounded=str(literal.quantize(D('.0001'), rounding=ROUND_HALF_UP)),
                reportedGE=str(ge), roundingCompatible=True,
                gnRoundingOnlyGEInterval=[str(literal-half_from_gn_rounding), str(literal+half_from_gn_rounding)],
                geSystematicQuadrature=str(total_ge_syst), gnSystematicWithoutGMn=str(ratio_syst),
                geStatisticalPropagation=str(propagated_stat)))
        assert [r['literalCentralRounded'] for r in results] == ['0.0237', '0.0208', '0.0147']
        relative_endpoints = [r[3] / r[1] for r in rows[-2:]]
        assert all(v < D('.017') for v in relative_endpoints)
        # No repair of the final-table/prose conflict: even the endpoint
        # errors' displayed half-unit allowance lies below the stated floor.
        assert all((r[3]+D('.0005'))/(r[1]-D('.00005')) < D('.017') for r in rows[-2:])
        # Riordan TableII says only its most important corrections are listed.
        # Show why a naive Dt/Db/Ab correction cannot be sold as full replay.
        centers = (D('-.134'), D('.949'), D('.981'), D('-.018'))
        corners = []
        for signs in itertools.product((-1, 1), repeat=4):
            a, dt, db, ab = [v + sign*D('.0005') for v, sign in zip(centers, signs)]
            corners.append(unmix_asymmetry(a, db, ab) / dt)
        assert min(corners) > D('-.1445')  # Printed Aphys=-.145 has half-unit .0005.
        return dict(
            sourceHashes=FILES, clasRows=26, q2RangeGeV2=[str(rows[0][0]), str(rows[-1][0])],
            figureIdentity=figure, riordanRows=results,
            endpointRelativeSystematicErrors=[str(v) for v in relative_endpoints],
            endpointSystematicProseDiscrepancy=True,
            naiveTableIIRow2Interval=[str(min(corners)), str(max(corners))],
            naiveTableIIRow2Matches=False, tableIIDiscrepancyIsEstablishedSourceError=False,
            interpolationAlgorithmReproduced=False, signedMomentMeasured=False,
            rawEventsReplayed=False, acceptanceReplayed=False, nuclearModelReplayed=False,
            fullAsymmetryCorrectionReplayed=False, fitReplayed=False, fullCovarianceReproduced=False,
            flavorSeparationAdmitted=False, staticThreeDimensionalDensityInferred=False,
        )


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
