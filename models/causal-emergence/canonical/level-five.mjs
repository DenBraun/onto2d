import assert from "node:assert/strict";
import { ORGANISM_MORPHOGENESIS_RECORDS, CARD_SCOPES as structureScopes } from "./organism-morphogenesis.mjs";
import { ORGANISM_PHYSIOLOGY_RECORDS, CARD_SCOPES as regulationScopes } from "./organism-physiology.mjs";
import { ORGANISM_INFLAMMATION_RECORDS, CARD_SCOPES as immunityScopes } from "./organism-inflammation.mjs";
import { ORGANISM_RETINAL_RECORDS, CARD_SCOPES as phototransductionScopes } from "./organism-retinal.mjs";

const groups = [
  { records: ORGANISM_MORPHOGENESIS_RECORDS, scopes: structureScopes },
  { records: ORGANISM_PHYSIOLOGY_RECORDS, scopes: regulationScopes },
  { records: ORGANISM_INFLAMMATION_RECORDS, scopes: immunityScopes },
  { records: ORGANISM_RETINAL_RECORDS, scopes: phototransductionScopes }
];

function mergeRecords(kind) {
  const records = new Map();
  for (const group of groups) for (const record of group.records[kind]) {
    const id = kind === "readiness" ? record.nodeId : record.id;
    if (records.has(id)) assert.deepEqual(record, records.get(id), `Conflicting Level-5 ${kind}: ${id}`);
    else records.set(id, record);
  }
  return [...records.values()];
}

function normalizeScopes(scopes) {
  const entries = Array.isArray(scopes) ? scopes.map((scope) => [scope.code, scope]) : Object.entries(scopes);
  return entries.map(([key, scope]) => {
    const sourceIndex = scope.sourceIndex ?? scope.card ?? Number(String(key).split(".")[1]);
    return { ...scope, sourceIndex, code: scope.code ?? key ?? `5.${sourceIndex}` };
  });
}

// These are scientific admission contracts, not a second migration catalogue.
export const ORGANISMAL_RECORDS = Object.fromEntries(
  ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"]
    .map((kind) => [kind, mergeRecords(kind)])
);
export const ORGANISMAL_CARD_SCOPES = groups.flatMap((group) => normalizeScopes(group.scopes))
  .sort((a, b) => a.sourceIndex - b.sourceIndex);
export const ORGANISMAL_OWN_STUDY_IDS = new Set(ORGANISMAL_RECORDS.studies.map((study) => study.id));
export const ORGANISMAL_STUDY_TYPES = new Map(ORGANISMAL_RECORDS.studies.map((study) => [study.id, study.studyType]));
export const ORGANISMAL_CLAIM_IDS = new Set(ORGANISMAL_RECORDS.claims.map((claim) => claim.id));
