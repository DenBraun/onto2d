import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import Ajv from "ajv";

export const INTERACTION_FIELDS = Object.freeze([
  "participants", "changedFactor", "observable", "response", "conditions",
  "resources", "boundary", "timeScale", "controls", "interpretation", "uncertainty"
]);

const FINDING_STATUSES = new Set(["publication-supported", "literature-synthesis", "analytically-checked"]);
const MEASURED_KINDS = new Set(["reported-observation", "measurement-inference", "model-result"]);
const REPORTED_KINDS = new Set(["reported-observation", "model-result"]);
const INFERRED_KINDS = new Set(["measurement-inference", "source-interpretation", "model-result"]);
const EVIDENCE_ROLES = new Set([
  "definition-dependency", "measurement-context", "interpretation-dependency", "computation-context"
]);
const UNKNOWN_VALUES = new Set(["unestablished", "unmeasured", "unisolated-mechanism", "necessity-unestablished"]);
const SUPPORT_ROLES = new Set(["supports", "method", "definition"]);
const PERSPECTIVES = Object.freeze([
  { id: "system", label: "Studied systems", boundary: "Source-scoped system descriptions and existing functional-support relations. Isolated descriptions assert no physical interaction or admitted instance." },
  { id: "evidence", label: "Measurements and evidence", boundary: "Existing descriptive relations organize definitions, measurement contexts, computations and interpretations. They are not promoted to physical causal relations." },
  { id: "hypotheses", label: "Hypotheses and correspondences", boundary: "Existing selected hypothesis records and anchors of cases participating in proposed correspondences. An anchor retains its original evidence status; analogy membership does not make its observations hypothetical. Correspondences add no physical graph edges." }
]);
let validateSchema;

function schemaValidator() {
  if (!validateSchema) {
    const schema = JSON.parse(readFileSync(new URL("../../../references/canonical/schema.json", import.meta.url), "utf8"));
    const { interactionCases, interactionAnalogies } = schema.properties.graph.properties;
    assert.ok(interactionCases && interactionAnalogies, "Canonical interactions: shared case/analogy schema is missing");
    validateSchema = new Ajv({ strict: true, allErrors: true }).compile({
      $schema: schema.$schema, type: "object", additionalProperties: false,
      required: ["interactionCases", "interactionAnalogies"],
      properties: { interactionCases, interactionAnalogies }, definitions: schema.definitions
    });
  }
  return validateSchema;
}

function index(records, subject) {
  assert.ok(Array.isArray(records), `Canonical interactions: ${subject} must be an array`);
  const result = new Map();
  for (const record of records) {
    assert.ok(record && typeof record.id === "string" && record.id.trim(), `Canonical interactions: missing ${subject} ID`);
    assert.ok(!result.has(record.id), `Canonical interactions: duplicate ${subject} ID ${record.id}`);
    result.set(record.id, record);
  }
  return result;
}

function subset(ids, allowed, subject) {
  for (const id of ids) assert.ok(allowed.has(id), `Canonical interactions: ${subject} outside selection: ${id}`);
}

function resolved(ids, records, subject) {
  for (const id of ids) assert.ok(records.has(id), `Canonical interactions: unknown ${subject} ${id}`);
}

function nonemptyText(value) {
  if (typeof value === "string") assert.ok(value.trim(), "Canonical interactions: blank text");
  else if (Array.isArray(value)) value.forEach(nonemptyText);
  else if (value && typeof value === "object") Object.values(value).forEach(nonemptyText);
}

function studyMode(study) {
  assert.ok(["primary-experiment", "primary-observation", "experimental-reanalysis", "computational-analysis"]
    .includes(study.studyType), `Canonical interactions: unsupported study type ${study.studyType}`);
  return study.studyType === "computational-analysis" ? "computation" : "experiment";
}

function functionalRelationAdmissible(relation, record, claims) {
  const selectedClaims = new Set(record.claimIds);
  const selectedStudies = new Set(record.studyIds);
  return relation.kind === "functional-support" && relation.role === "scoped-operating-support"
    && relation.claimIds?.length > 0 && relation.claimIds.every((id) => selectedClaims.has(id))
    && relation.contextIds?.length > 0 && relation.contextIds.every((id) => selectedStudies.has(id))
    && !(relation.experimentalContextIds?.length)
    && relation.claimIds.some((id) => ["publication-supported", "literature-synthesis"].includes(claims.get(id)?.status))
    && relation.claimIds.every((id) => (claims.get(id)?.contextIds ?? [])
      .every((contextId) => relation.contextIds.includes(contextId)))
    && relation.contextIds.every((id) => relation.claimIds.some((claimId) =>
      ["publication-supported", "literature-synthesis"].includes(claims.get(claimId)?.status)
        && claims.get(claimId)?.contextIds?.includes(id)));
}

/** Check source bindings and representation constraints, not scientific truth. */
export function validateCanonicalInteractions(graph, { studies }) {
  const validate = schemaValidator();
  assert.ok(validate({ interactionCases: graph.interactionCases, interactionAnalogies: graph.interactionAnalogies }),
    `Canonical interactions schema: ${JSON.stringify(validate.errors)}`);
  nonemptyText([graph.interactionCases, graph.interactionAnalogies]);
  const sources = index(graph.sources, "source");
  const claims = index(graph.claims, "claim");
  const entities = index(graph.entities, "entity");
  const contexts = index(studies, "study");
  const relations = index(graph.relations ?? [], "relation");
  const cases = index(graph.interactionCases, "case");
  for (const record of cases.values()) {
    const caseClaims = new Set(record.claimIds);
    const caseStudies = new Set(record.studyIds);
    const caseSources = new Set(record.sourceIds);
    const caseEntities = new Set(record.entityIds);
    resolved(record.entityIds, entities, "case entity");
    resolved(record.claimIds, claims, "case claim");
    resolved(record.studyIds, contexts, "case study");
    resolved(record.sourceIds, sources, "case source");
    assert.ok(caseEntities.has(record.anchorEntityId), `Canonical interactions: anchor outside case ${record.id}`);
    const modes = new Set(record.studyIds.map((id) => studyMode(contexts.get(id))));
    assert.equal(record.evidenceMode, modes.size === 2 ? "mixed" : [...modes][0],
      `Canonical interactions: evidence mode mismatch for ${record.id}`);
    for (const id of record.entityIds) {
      assert.ok(entities.get(id).claimIds?.some((claimId) => caseClaims.has(claimId)),
        `Canonical interactions: entity ${id} has no selected case claim`);
    }
    for (const id of record.sourceIds) {
      const review = sources.get(id).review;
      assert.ok(review?.extent && review?.limit && review?.locators?.length,
        `Canonical interactions: source ${id} lacks reading boundaries`);
      nonemptyText([review.extent, review.limit, review.locators]);
      assert.ok(record.claimIds.some((claimId) => claims.get(claimId).citations.some((citation) => citation.sourceId === id))
        || record.studyIds.some((studyId) => contexts.get(studyId).sourceId === id),
      `Canonical interactions: unused case source ${id}`);
    }
    for (const id of record.studyIds) {
      const study = contexts.get(id);
      assert.ok(caseSources.has(study.sourceId), `Canonical interactions: study ${id} outside case sources`);
      assert.ok(typeof study.readExtent === "string" && study.readExtent.trim()
        && Array.isArray(study.limitations) && study.limitations.length
        && Array.isArray(study.reviewedLocators) && study.reviewedLocators.length,
      `Canonical interactions: study ${id} lacks reading boundaries`);
      nonemptyText([study.readExtent, study.limitations, study.reviewedLocators]);
      subset(study.reviewedLocators, new Set(sources.get(study.sourceId).review.locators), `study ${id} reviewed locator`);
    }
    for (const id of record.claimIds) {
      const claim = claims.get(id);
      resolved(claim.citations.map((citation) => citation.sourceId), sources, `claim ${id} source`);
      subset(claim.contextIds ?? [], caseStudies, `claim ${id} study context`);
      assert.ok(!(claim.experimentalContextIds?.length),
        `Canonical interactions: claim ${id} requires unsupported experimental contexts`);
      for (const citation of claim.citations) {
        assert.ok(caseSources.has(citation.sourceId), `Canonical interactions: claim ${id} citation outside case sources`);
        assert.ok(sources.get(citation.sourceId).review?.locators?.includes(citation.locator),
          `Canonical interactions: claim ${id} has an unreviewed source locator`);
      }
      const support = claim.citations.filter((citation) => SUPPORT_ROLES.has(citation.role));
      assert.ok(support.length, `Canonical interactions: claim ${id} lacks an admissible citation`);
      const positive = FINDING_STATUSES.has(claim.status);
      if (positive) assert.ok(support.some((citation) => citation.role === "supports"),
        `Canonical interactions: finding ${id} lacks a supporting source`);
      for (const contextId of claim.contextIds ?? []) assert.ok(support.some((citation) =>
        citation.sourceId === contexts.get(contextId).sourceId && (!positive || citation.role === "supports")),
      `Canonical interactions: claim ${id} lacks its study source citation`);
    }
    for (const [name, field] of Object.entries(record.fields)) {
      subset(field.claimIds, caseClaims, `${record.id}.${name} claim`);
    }
    const observations = index(record.observations, `${record.id} observation`);
    for (const observation of observations.values()) {
      subset(observation.claimIds, caseClaims, `${observation.id} claim`);
      subset(observation.studyIds, caseStudies, `${observation.id} study`);
      const selectedClaims = observation.claimIds.map((id) => claims.get(id));
      for (const claim of selectedClaims) subset(claim.contextIds ?? [], new Set(observation.studyIds),
        `${observation.id} claim ${claim.id} study context`);
      for (const id of observation.studyIds) assert.ok(selectedClaims.some((claim) => claim.contextIds?.includes(id)),
        `Canonical interactions: observation ${observation.id} has an unsupported study context ${id}`);
      if (MEASURED_KINDS.has(observation.kind)) {
        assert.ok(observation.studyIds.every((id) => selectedClaims.some((claim) =>
          FINDING_STATUSES.has(claim.status) && claim.contextIds?.includes(id))),
        `Canonical interactions: observation ${observation.id} lacks a substantive finding for each study`);
        const mode = observation.kind === "model-result" ? "computation" : "experiment";
        assert.ok(observation.studyIds.every((id) => studyMode(contexts.get(id)) === mode),
          `Canonical interactions: observation ${observation.id} evidence mode mismatch`);
      }
    }
    index(record.facets, `${record.id} facet`);
    for (const facet of record.facets) {
      resolved(facet.observationIds, observations, `facet ${facet.id} observation`);
      const selected = facet.observationIds.map((id) => observations.get(id));
      subset(facet.claimIds, new Set(selected.flatMap((observation) => observation.claimIds)), `facet ${facet.id} observation claim`);
      subset(facet.studyIds, new Set(selected.flatMap((observation) => observation.studyIds)), `facet ${facet.id} observation study`);
      for (const id of facet.studyIds) assert.ok(facet.claimIds.some((claimId) => claims.get(claimId).contextIds?.includes(id)),
        `Canonical interactions: facet ${facet.id} has an unsupported study context`);
      const unknown = UNKNOWN_VALUES.has(facet.value);
      assert.equal(facet.status === "not-established", unknown,
        `Canonical interactions: facet ${facet.id} unknown value/status mismatch`);
      if (facet.kind === "persistence" && facet.value === "kinetic-inference") {
        assert.equal(facet.status, "inferred", `Canonical interactions: facet ${facet.id} kinetic inference must remain inferred`);
      }
      if (facet.kind === "regime" && facet.value === "model-regime") {
        assert.ok(selected.some((observation) => observation.kind === "model-result"
          && observation.claimIds.some((id) => facet.claimIds.includes(id))
          && observation.studyIds.some((id) => facet.studyIds.includes(id) && studyMode(contexts.get(id)) === "computation")),
        `Canonical interactions: facet ${facet.id} model regime lacks a selected computational result`);
      }
      if (!unknown) {
        assert.ok(facet.claimIds.some((id) => FINDING_STATUSES.has(claims.get(id).status)),
          `Canonical interactions: facet ${facet.id} has no substantive finding`);
        const requiredKinds = facet.status === "reported" ? REPORTED_KINDS : INFERRED_KINDS;
        assert.ok(selected.some((observation) => requiredKinds.has(observation.kind)
          && observation.claimIds.some((id) => facet.claimIds.includes(id) && FINDING_STATUSES.has(claims.get(id).status))),
        `Canonical interactions: facet ${facet.id} status exceeds its selected observations`);
        assert.ok(facet.studyIds.every((id) => selected.some((observation) => requiredKinds.has(observation.kind)
          && observation.studyIds.includes(id)
          && observation.claimIds.some((claimId) => facet.claimIds.includes(claimId)
            && FINDING_STATUSES.has(claims.get(claimId).status) && claims.get(claimId).contextIds?.includes(id)))),
        `Canonical interactions: facet ${facet.id} lacks finding support for each study`);
      }
    }
    for (const [perspective, view] of Object.entries(record.views)) {
      subset(view.nodeIds, caseEntities, `${record.id}.${perspective} node`);
      if (perspective === "hypotheses") for (const id of view.nodeIds) {
        assert.equal(entities.get(id).kind, "hypothesis", `Canonical interactions: direct hypothesis node ${id} is not a hypothesis`);
      }
      resolved(view.edgeIds, relations, `${record.id}.${perspective} edge`);
      const viewNodes = new Set(view.nodeIds);
      for (const id of view.edgeIds) {
        const relation = relations.get(id);
        assert.ok(viewNodes.has(relation.source) && viewNodes.has(relation.target),
          `Canonical interactions: view ${perspective} edge ${id} endpoint missing`);
        subset(relation.claimIds ?? [], caseClaims, `view edge ${id} claim`);
        subset(relation.contextIds ?? [], caseStudies, `view edge ${id} study`);
        if (perspective === "system") assert.ok(functionalRelationAdmissible(relation, record, claims),
          `Canonical interactions: system edge ${id} lacks scoped functional evidence`);
        else assert.ok(relation.kind === "descriptive" && EVIDENCE_ROLES.has(relation.role),
          `Canonical interactions: ${perspective} edge ${id} is not a descriptive evidence relation`);
      }
    }
  }
  const analogies = index(graph.interactionAnalogies, "analogy");
  for (const analogy of analogies.values()) {
    resolved(analogy.caseIds, cases, "analogy case");
    for (const field of analogy.fields) for (const id of analogy.caseIds) {
      assert.notEqual(cases.get(id).fields[field].value, null,
        `Canonical interactions: analogy ${analogy.id} maps missing field ${id}.${field}`);
    }
  }
  return graph.interactionCases;
}

/** Return a detached case; no physical relation or independent instance is inferred. */
export function projectCanonicalInteractionCase(record, { graph, studies }) {
  validateCanonicalInteractions(graph, { studies });
  assert.ok(graph.interactionCases.includes(record), "Canonical interactions: projection requires the authoritative case record");
  return structuredClone(record);
}

/** Union explicit view memberships; their edges retain their canonical roles. */
export function projectCanonicalInteractions(graph, { studies }) {
  validateCanonicalInteractions(graph, { studies });
  const cases = new Map(graph.interactionCases.map((record) => [record.id, record]));
  const analogyAnchors = graph.interactionAnalogies.flatMap((analogy) => analogy.caseIds.map((id) => cases.get(id).anchorEntityId));
  return structuredClone({
    kind: "canonical-interaction-atlas", physicalInstancesAdmitted: false,
    cases: graph.interactionCases, analogies: graph.interactionAnalogies,
    perspectives: PERSPECTIVES.map((perspective) => ({
      ...perspective,
      nodeIds: [...new Set([
        ...graph.interactionCases.flatMap((record) => record.views[perspective.id].nodeIds),
        ...(perspective.id === "hypotheses" ? analogyAnchors : [])
      ])].sort(),
      edgeIds: [...new Set(graph.interactionCases.flatMap((record) => record.views[perspective.id].edgeIds))].sort()
    }))
  });
}
