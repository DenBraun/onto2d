"""Recount published workbook data; do not rerun or validate the biological model."""

import json
import math
import posixpath
import re
import zipfile
from collections import Counter
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / "references/canonical/data"
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def workbook(path):
    result = {}
    with zipfile.ZipFile(path) as archive:
        shared = []
        if "xl/sharedStrings.xml" in archive.namelist():
            shared = ["".join(x.itertext()) for x in ET.fromstring(
                archive.read("xl/sharedStrings.xml")).findall("m:si", NS)]
        relationships = {x.get("Id"): x.get("Target") for x in ET.fromstring(
            archive.read("xl/_rels/workbook.xml.rels"))}
        for sheet in ET.fromstring(archive.read("xl/workbook.xml")).findall("m:sheets/m:sheet", NS):
            target = relationships[sheet.get(
                "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id")]
            target = target.lstrip("/") if target.startswith("/") else posixpath.normpath("xl/" + target)
            cells = {}
            for cell in ET.fromstring(archive.read(target)).findall("m:sheetData/m:row/m:c", NS):
                # No cached formula is accepted as a freshly evaluated measurement.
                assert cell.find("m:f", NS) is None, "Workbook formula needs explicit evaluation"
                value = cell.findtext("m:v", namespaces=NS)
                kind = cell.get("t")
                if kind == "s":
                    value = shared[int(value)]
                elif kind == "inlineStr":
                    value = "".join(cell.find("m:is", NS).itertext())
                elif kind == "e":
                    raise ValueError(f"Excel error at {sheet.get('name')}!{cell.get('r')}")
                elif value is not None and kind not in ("str", "b"):
                    value = float(value)
                    assert math.isfinite(value), "Nonfinite workbook value"
                if value is not None:
                    cells[cell.get("r")] = value
            result[sheet.get("name")] = cells
    return result


def rows(cells):
    output = {}
    for address, value in cells.items():
        column, row = re.fullmatch(r"([A-Z]+)([0-9]+)", address).groups()
        output.setdefault(int(row), {})[column] = value
    return output


def verify():
    cohort = workbook(DATA / "STable1_Human_cohorts_used_in_the_study.xlsx")
    abundance = workbook(DATA / "STable8_Cell_type_abundance_copy.xlsx")
    by_id = {int(r["A"]): r for i, r in rows(cohort["By ID number"]).items() if i > 1}
    by_diagnosis = {int(r["A"]): r for i, r in rows(cohort["By diagnosis"]).items() if i > 1}
    assert by_id == by_diagnosis, "Cohort sheets disagree"
    metadata = {int(r["A"]): r["B"] for i, r in rows(abundance["metadata"]).items() if i > 1}
    assert set(by_id) == set(metadata) == set(range(1, 40)), "Published sample census changed"
    groups = dict(sorted(Counter(metadata.values()).items()))
    assert groups == {"AD": 10, "HA": 9, "PCI": 6, "SA": 6, "YA": 8}
    names = {"Alzheimer's Disease": "AD", "Healthy Aging": "HA", "Preclinical cognitive diagnosis with intermediate pathology": "PCI",
             "SuperAger": "SA", "SuperAgers": "SA", "Young Aging": "YA"}
    for sid, row in by_id.items():
        assert names[row["B"]] == metadata[sid], "Cohort labels disagree"
    counts = rows(abundance["filter_counts"])
    sample_columns = {col: int(sid) for col, sid in counts[1].items() if col != "A"}
    assert set(sample_columns.values()) == set(metadata) and len(sample_columns) == 39
    assert len(counts) == 14, "Cell-type census changed"
    totals = {sid: 0 for sid in metadata}
    for i, row in counts.items():
        if i == 1:
            continue
        assert set(row) == {"A", *sample_columns}, "Missing count cell"
        for col, sid in sample_columns.items():
            value = row[col]
            assert value >= 0 and value.is_integer(), "Invalid nucleus count"
            totals[sid] += int(value)
    libraries = {int(r["A"]): int(r["B"]) for i, r in rows(abundance["lib"]).items() if 2 <= i <= 40}
    assert totals == libraries, "Count matrix and library denominators disagree"
    assert sum(totals.values()) == 153530
    diff = abundance["diff"]
    assert [diff[f"A{i}"] for i in (2, 3, 4)] == ["NSC", "Neuroblast", "Immature"]
    contrasts = []
    for cell_type, row, pair, fc_col, q_col, sign, significant in [
        ("NSC", 2, "PCI/HA", "H", "K", 1, True),
        ("NSC", 2, "AD/HA", "L", "O", 1, True),
        ("Neuroblast", 3, "AD/HA", "L", "O", -1, True),
        ("Immature", 4, "AD/HA", "L", "O", -1, True),
        ("Immature", 4, "SA/HA", "P", "S", 1, True),
        ("Immature", 4, "SA/AD", "AN", "AQ", 1, True),
        ("Immature", 4, "SA/YA", "AB", "AE", 1, False),
        ("Immature", 4, "SA/PCI", "AJ", "AM", 1, False),
    ]:
        assert diff[fc_col + "1"] == pair + " : log2FC"
        assert diff[q_col + "1"] == pair + " : QValue"
        fc, q = diff[fc_col + str(row)], diff[q_col + str(row)]
        assert 0 <= q <= 1 and fc * sign > 0 and (q < 0.05) == significant
        contrasts.append(dict(cellLabel=cell_type, contrast=pair, reportedLog2FC=fc,
                              reportedAdjustedP=q, belowPointZeroFive=significant))
    return dict(study="disouky2026", sampleCount=39, groupCounts=groups,
                cellLabelCount=13, retainedNuclei=sum(totals.values()),
                publishedContrasts=contrasts, mainTextParticipantCount=38,
                mainTextHealthyAgerCount=8, cohortDiscrepancyResolved=False,
                statisticalModelReplayed=False, biologicalValidationClaimed=False,
                limit="Checks published workbook cells and denominators only; does not establish donor independence, cell identity, birth rates or causal memory effects.")


if __name__ == "__main__":
    print(json.dumps(verify(), sort_keys=True))
