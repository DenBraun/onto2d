import assert from "node:assert/strict";
import { ORGANISM_MORPHOGENESIS_RECORDS } from "./organism-morphogenesis.mjs";
import { ORGANISM_PHYSIOLOGY_RECORDS } from "./organism-physiology.mjs";
import { ORGANISM_INFLAMMATION_RECORDS } from "./organism-inflammation.mjs";
import { ORGANISM_RETINAL_RECORDS } from "./organism-retinal.mjs";

const groups = [
  { records: ORGANISM_MORPHOGENESIS_RECORDS },
  { records: ORGANISM_PHYSIOLOGY_RECORDS },
  { records: ORGANISM_INFLAMMATION_RECORDS },
  { records: ORGANISM_RETINAL_RECORDS }
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


// These are scientific admission contracts, not a second migration catalogue.
export const ORGANISMAL_RECORDS = Object.fromEntries(
  ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"]
    .map((kind) => [kind, mergeRecords(kind)])
);
export const ORGANISMAL_OWN_STUDY_IDS = new Set(ORGANISMAL_RECORDS.studies.map((study) => study.id));
export const ORGANISMAL_STUDY_TYPES = new Map(ORGANISMAL_RECORDS.studies.map((study) => [study.id, study.studyType]));
export const ORGANISMAL_CLAIM_IDS = new Set(ORGANISMAL_RECORDS.claims.map((claim) => claim.id));
