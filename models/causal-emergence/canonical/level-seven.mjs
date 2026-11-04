import assert from "node:assert/strict";
import { isDeepStrictEqual } from "node:util";
import { SOCIAL_ANIMAL_RECORDS, CARD_SCOPES as animalScopes } from "./social-animals.mjs";
import { SOCIAL_INSTITUTION_RECORDS, CARD_SCOPES as institutionScopes } from "./social-institutions.mjs";
import { SOCIAL_INFORMATION_RECORDS, CARD_SCOPES as informationScopes } from "./social-information.mjs";

const groups = [SOCIAL_ANIMAL_RECORDS, SOCIAL_INSTITUTION_RECORDS, SOCIAL_INFORMATION_RECORDS];
const inventories = new Map();
export const SOCIAL_SYSTEMS_RECORDS = Object.fromEntries(
  ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"].map((kind) => {
    const records = new Map();
    for (const group of groups) for (const record of group[kind]) {
      const id = kind === "readiness" ? record.nodeId : record.id;
      assert.ok(!records.has(id), `Duplicate Level-7 ${kind}: ${id}`);
      records.set(id, record);
    }
    inventories.set(kind, records);
    return [kind, [...records.values()]];
  })
);
export const SOCIAL_SYSTEMS_CARD_SCOPES = [...animalScopes, ...institutionScopes, ...informationScopes].sort((a, b) => a.sourceIndex - b.sourceIndex);
export const SOCIAL_SYSTEMS_CLAIM_IDS = new Set(SOCIAL_SYSTEMS_RECORDS.claims.map((record) => record.id));
export const SOCIAL_SYSTEMS_STUDY_TYPES = new Map(SOCIAL_SYSTEMS_RECORDS.studies.map((record) => [record.id, record.studyType]));
export function isReviewedSocialSystemsRecord(kind, record) {
  const expected = inventories.get(kind)?.get(kind === "readiness" ? record.nodeId : record.id);
  return expected !== undefined && isDeepStrictEqual(record, expected);
}
export function isReviewedSocialSystemsDescription(relation) {
  return relation.kind === "descriptive" && isReviewedSocialSystemsRecord("relations", relation);
}
