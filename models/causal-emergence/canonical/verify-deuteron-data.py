"""Replay published grouped means and rounded-input arithmetic, not acquisition."""

import json
import posixpath
import zipfile
from decimal import Decimal as D, localcontext
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / "references/canonical/data"
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
PANELS = [
    ("d-awg1", "fig3", "suface_Plot_AWG", 10, "1.0070527378313", "8.6"),
    ("d-awg2", "edfig1", "a) surface_Plot_AWG2", 10, "1.0070527378317", "7.0"),
    ("hd", "edfig1", "b) surface_Plot_HD", 7, "1.007310263850", "19"),
]


def workbook(path):
    """Keep OOXML decimal literals; binary floats would lose ratio precision."""
    sheets = {}
    with zipfile.ZipFile(path) as z:
        strings = ["".join(x.itertext()) for x in ET.fromstring(
            z.read("xl/sharedStrings.xml")).findall("m:si", NS)]
        links = {x.get("Id"): x.get("Target") for x in ET.fromstring(
            z.read("xl/_rels/workbook.xml.rels"))}
        for sheet in ET.fromstring(z.read("xl/workbook.xml")).findall("m:sheets/m:sheet", NS):
            target = links[sheet.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id")]
            target = target.lstrip("/") if target.startswith("/") else posixpath.normpath("xl/" + target)
            cells = {}
            for cell in ET.fromstring(z.read(target)).findall("m:sheetData/m:row/m:c", NS):
                assert cell.find("m:f", NS) is None, "Cached formula is not a measurement"
                value = cell.findtext("m:v", namespaces=NS)
                kind = cell.get("t")
                if kind == "s":
                    value = strings[int(value)]
                elif kind == "inlineStr":
                    value = "".join(cell.find("m:is", NS).itertext())
                elif value is not None:
                    assert kind in (None, "n"), "Unsupported workbook cell type"
                    value = D(value)
                    assert value.is_finite(), "Nonfinite data"
                if value is not None:
                    cells[cell.get("r")] = value
            assert sheet.get("name") not in sheets, "Duplicate sheet"
            sheets[sheet.get("name")] = cells
    return sheets


def panel_rows(cells, count, center):
    expected_headers = ["Plotpoint", "r(HD+) (10^-6 m)", "r(C4+) (10^-6 m)",
                        "R-Rfit (10^-12)", "meanvalues of R", "uncertainties (10^-12)"]
    assert [cells.get(c + "1") for c in "ABCDEF"] == expected_headers
    # Preserve the incorrect deuteron species headers. Identity comes from the
    # explicitly bound figure/sheet plus the article caption, never sheet order.
    nonblank = {k for k, v in cells.items() if not isinstance(v, str) or v.strip()}
    assert nonblank == {c + str(i) for c in "ABCDEF" for i in range(1, count + 2)}, "Missing or extra panel cells"
    rows = []
    for i in range(2, count + 2):
        row = [cells[c + str(i)] for c in "ABCDEF"]
        assert all(isinstance(x, D) and x.is_finite() for x in row)
        n, r1, r2, residual, ratio, sigma = row
        assert n == i - 1 and r1 > 0 and r2 > 0 and sigma > 0, "Invalid grouped row"
        assert abs(ratio - center) < D("1e-7"), "Panel belongs to a different ion comparison"
        rows.append((r1, r2, residual, ratio, sigma))
    return rows


def solve(matrix, values):
    n = len(values)
    a = [list(row) + [v] for row, v in zip(matrix, values)]
    for j in range(n):
        pivot = max(range(j, n), key=lambda k: abs(a[k][j]))
        a[j], a[pivot] = a[pivot], a[j]
        assert a[j][j] != 0, "Rank-deficient excitation design"
        divisor = a[j][j]
        a[j] = [v / divisor for v in a[j]]
        for k in range(n):
            if k != j:
                factor = a[k][j]
                a[k] = [v - factor * w for v, w in zip(a[k], a[j])]
    return [row[-1] for row in a]


def fit(rows, center):
    assert len(rows) > 3
    x = [[D(1), r[0] ** 2 / D(10000), r[1] ** 2 / D(10000)] for r in rows]
    y = [(r[3] - center) * D("1e12") for r in rows]
    assert all(r[4] > 0 for r in rows), "Nonpositive uncertainty"
    w = [1 / r[4] ** 2 for r in rows]
    normal = [[sum(wi * xi[j] * xi[k] for wi, xi in zip(w, x)) for k in range(3)] for j in range(3)]
    rhs = [sum(wi * xi[j] * yi for wi, xi, yi in zip(w, x, y)) for j in range(3)]
    beta = solve(normal, rhs)
    residuals = [yi - sum(a * b for a, b in zip(xi, beta)) for xi, yi in zip(x, y)]
    return dict(intercept=str(center + beta[0] * D("1e-12")),
                diagonalSigmaRatio1e12=str(solve(normal, [D(1), D(0), D(0)])[0].sqrt()),
                chiSquared=str(sum(wi * e ** 2 for wi, e in zip(w, residuals))),
                degreesOfFreedom=len(rows) - 3,
                maxResidualDifferenceRatio1e12=str(max(abs(e - r[2]) for e, r in zip(residuals, rows))))


def printed_arithmetic(hd_binding_cm=D("131224.6841650")):
    """Rounded constants from Rau Methods/ED Table 2; HD energy from Korobov V."""
    h, c, e = D("6.62607015e-34"), D(299792458), D("1.602176634e-19")
    uc2, me = D("9.3149410242e8"), D("0.000548579909065")
    md, mp = D("2.013553212535"), D("1.007276466598")
    binding_u = hd_binding_cm * D(100) * h * c / e / uc2
    predicted = md + mp + me - binding_u
    wavelength = D(".557671328e-12") * D("192.0155721") / D("192.0155822")
    photon = h * c / e / wavelength
    recoil = photon ** 2 / (2 * md * uc2)
    return dict(hdBindingU=str(binding_u), predictedHdU=str(predicted),
                predictedMinusDirectPu=str((predicted - D("3.021378241561")) * D("1e12")),
                wavelengthM=str(wavelength), photonEv=str(photon), recoilEv=str(recoil),
                captureBindingEv=str(photon + recoil), captureBindingU=str((photon + recoil) / uc2))


def verify():
    with localcontext() as context:
        context.prec = 40
        books = {name: workbook(DATA / f"rau2020-{name}.xlsx") for name in ("fig3", "edfig1", "fig4")}
        assert set(books["fig3"]) == {PANELS[0][2]}
        assert set(books["edfig1"]) == {PANELS[1][2], PANELS[2][2]}
        panels = []
        for identity, book, sheet, count, center, sigma in PANELS:
            result = fit(panel_rows(books[book][sheet], count, D(center)), D(center))
            assert abs(D(result["intercept"]) - D(center)) < D("5e-13")
            assert D(result["maxResidualDifferenceRatio1e12"]) < D("0.005")
            # The grouped diagonal uncertainty is not the paper's original fit.
            assert abs(D(result["diagonalSigmaRatio1e12"]) - D(sigma)) > D("0.5")
            panels.append(dict(id=identity, figure=book, sheet=sheet, groupedRows=count,
                               reportedIntercept=center, reportedSigmaRatio1e12=sigma, **result))
        assert len(books["fig4"]) == 1
        comparison = next(iter(books["fig4"].values()))
        assert comparison["A9"] == "this work" and comparison["B9"] == 0 and comparison["C9"] == 18
        arithmetic = printed_arithmetic()
        assert abs(D(arithmetic["predictedMinusDirectPu"]) - D(15)) < D("0.5")
        assert abs(D(arithmetic["captureBindingEv"]) - D("2224566.35")) < D(".005")
        return dict(study="rau2020", panels=panels, groupedRows=27, printedArithmetic=arithmetic,
                    figureMassUncertaintyPu=18, articleMassUncertaintyPu=17,
                    uncertaintyDiscrepancyResolved=False, rawAcquisitionReplayed=False,
                    originalCovarianceReplayed=False, adjustmentReplayed=False,
                    propagatedUncertaintyReplayed=False, molecularTheoryReplayed=False,
                    crystalCalibrationReplayed=False,
                    limit="Weighted planes use published grouped means and independent diagonal weights. Figure identity overrides incorrect deuteron column labels without rewriting source bytes. Central-value arithmetic uses rounded historical inputs; it does not reproduce the original fits, correlated adjustment, molecular theory, crystal calibration or uncertainty propagation.")


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
