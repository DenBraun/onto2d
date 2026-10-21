import assert from "node:assert/strict";
import { CELL_STRUCTURE_RECORDS, CARD_SCOPES as structureScopes } from "./cell-structure.mjs";
import { CELL_REGULATION_RECORDS, CARD_SCOPES as regulationScopes } from "./cell-regulation.mjs";
import { CELL_IMMUNITY_RECORDS, CARD_SCOPES as immunityScopes } from "./cell-immunity.mjs";
import { CELL_PHOTOTRANSDUCTION_RECORDS, CARD_SCOPES as phototransductionScopes } from "./cell-phototransduction.mjs";

const groups = [
  { records: CELL_STRUCTURE_RECORDS, scopes: structureScopes },
  { records: CELL_REGULATION_RECORDS, scopes: regulationScopes },
  { records: CELL_IMMUNITY_RECORDS, scopes: immunityScopes },
  { records: CELL_PHOTOTRANSDUCTION_RECORDS, scopes: phototransductionScopes }
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

function normalizeScopes(scopes) {
  const entries = Array.isArray(scopes) ? scopes.map((scope) => [scope.code, scope]) : Object.entries(scopes);
  return entries.map(([key, scope]) => {
    const sourceIndex = scope.sourceIndex ?? scope.card ?? Number(String(key).split(".")[1]);
    return { ...scope, sourceIndex, code: scope.code ?? key ?? `4.${sourceIndex}` };
  });
}

// These are scientific admission contracts, not a second migration catalogue.
export const CELLULAR_RECORDS = Object.fromEntries(
  ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"]
    .map((kind) => [kind, mergeRecords(kind)])
);
export const CELLULAR_CARD_SCOPES = groups.flatMap((group) => normalizeScopes(group.scopes))
  .sort((a, b) => a.sourceIndex - b.sourceIndex);
export const CELLULAR_OWN_STUDY_IDS = new Set(CELLULAR_RECORDS.studies.map((study) => study.id));
export const CELLULAR_STUDY_TYPES = new Map(CELLULAR_RECORDS.studies.map((study) => [study.id, study.studyType]));
export const CELLULAR_CLAIM_IDS = new Set(CELLULAR_RECORDS.claims.map((claim) => claim.id));
