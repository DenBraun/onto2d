import assert from "node:assert/strict";
import { CELL_STRUCTURE_RECORDS } from "./cell-structure.mjs";
import { CELL_REGULATION_RECORDS } from "./cell-regulation.mjs";
import { CELL_IMMUNITY_RECORDS } from "./cell-immunity.mjs";
import { CELL_PHOTOTRANSDUCTION_RECORDS } from "./cell-phototransduction.mjs";

const groups = [
  { records: CELL_STRUCTURE_RECORDS },
  { records: CELL_REGULATION_RECORDS },
  { records: CELL_IMMUNITY_RECORDS },
  { records: CELL_PHOTOTRANSDUCTION_RECORDS }
];

function mergeRecords(kind) {
  const records = new Map();
  for (const group of groups) for (const record of group.records[kind]) {
    const id = kind === "readiness" ? record.nodeId : record.id;
    if (records.has(id)) assert.deepEqual(record, records.get(id), `Conflicting Level-4 ${kind}: ${id}`);
    else records.set(id, record);
  }
  return [...records.values()];
}


// Scientific admission contracts for the cellular records.
export const CELLULAR_RECORDS = Object.fromEntries(
  ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"]
    .map((kind) => [kind, mergeRecords(kind)])
);
export const CELLULAR_OWN_STUDY_IDS = new Set(CELLULAR_RECORDS.studies.map((study) => study.id));
export const CELLULAR_STUDY_TYPES = new Map(CELLULAR_RECORDS.studies.map((study) => [study.id, study.studyType]));
export const CELLULAR_CLAIM_IDS = new Set(CELLULAR_RECORDS.claims.map((claim) => claim.id));
