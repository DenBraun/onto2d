import assert from "node:assert/strict";
import { isDeepStrictEqual } from "node:util";
import { NEURAL_FOUNDATION_RECORDS, CARD_SCOPES as foundationScopes } from "./neural-foundations.mjs";
import { NEURAL_BIOLOGY_RECORDS, CARD_SCOPES as biologyScopes } from "./neural-biology.mjs";
import { NEURAL_COGNITION_RECORDS, CARD_SCOPES as cognitionScopes } from "./neural-cognition.mjs";

const groups = [NEURAL_FOUNDATION_RECORDS, NEURAL_BIOLOGY_RECORDS, NEURAL_COGNITION_RECORDS];
const kinds = ["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"];
const inventories = new Map();

export const NEURAL_SYSTEMS_RECORDS = Object.fromEntries(kinds.map((kind) => {
  const records = new Map();
  for (const group of groups) for (const record of group[kind]) {
    const id = kind === "readiness" ? record.nodeId : record.id;
    assert.ok(!records.has(id), `Duplicate Level-6 ${kind}: ${id}`);
    records.set(id, record);
  }
  inventories.set(kind, records);
  return [kind, [...records.values()]];
}));

export const NEURAL_SYSTEMS_CARD_SCOPES = [...foundationScopes, ...biologyScopes, ...cognitionScopes]
  .sort((a, b) => a.sourceIndex - b.sourceIndex);
export const NEURAL_SYSTEMS_CLAIM_IDS = new Set(NEURAL_SYSTEMS_RECORDS.claims.map((claim) => claim.id));
export const NEURAL_SYSTEMS_STUDY_TYPES = new Map(NEURAL_SYSTEMS_RECORDS.studies.map((study) => [study.id, study.studyType]));

/** Only the exact reviewed record can cross an earlier domain's closed inventory. */
export function isReviewedNeuralSystemsRecord(kind, record) {
  const expected = inventories.get(kind)?.get(kind === "readiness" ? record.nodeId : record.id);
  return expected !== undefined && isDeepStrictEqual(record, expected);
}

/** Representation links organize evidence; they never grant a physical dependency. */
export function isReviewedNeuralSystemsDescription(relation) {
  return relation.kind === "descriptive" && isReviewedNeuralSystemsRecord("relations", relation);
}
