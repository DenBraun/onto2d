import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import Ajv from "ajv";

export const INTERACTION_FIELDS = Object.freeze([
  "participants", "changedFactor", "observable", "response", "conditions",
  "resources", "boundary", "timeScale", "controls", "interpretation", "uncertainty"
]);

const schema = JSON.parse(readFileSync(new URL(
  "../../../references/canonical/interaction-pilot.schema.json", import.meta.url
), "utf8"));
const resolvedSchema = structuredClone(schema);
resolvedSchema.required = resolvedSchema.required.map((key) => key === "analogyIds" ? "analogies" : key);
delete resolvedSchema.properties.analogyIds;
resolvedSchema.properties.analogies = { type: "array", minItems: 1, items: { $ref: "#/definitions/resolvedAnalogy" } };
resolvedSchema.properties.cases.items = { $ref: "#/definitions/resolvedCase" };
const ajv = new Ajv({ strict: true, allErrors: true });
const validateProtocolSchema = ajv.compile(schema);
const validateSchema = ajv.compile(resolvedSchema);
const substantiveStatuses = new Set(["publication-supported", "literature-synthesis", "analytically-checked"]);
const measuredKinds = new Set(["reported-observation", "measurement-inference", "model-result"]);
const admissibleRoles = new Set(["supports", "method", "definition"]);
const copy = (value) => structuredClone(value);
const sorted = (records) => [...records].sort((a, b) => a.id.localeCompare(b.id, "en"));

function index(records, subject) {
  assert.ok(Array.isArray(records), `Interaction pilot: ${subject} must be an array`);
  const result = new Map();
  for (const record of records) {
    assert.equal(typeof record.id, "string", `Interaction pilot: missing ${subject} ID`);
    assert.ok(!result.has(record.id), `Interaction pilot: duplicate ${subject} ID ${record.id}`);
    result.set(record.id, record);
  }
  return result;
}

function resolved(ids, records, subject) {
  for (const id of ids) assert.ok(records.has(id), `Interaction pilot: unknown ${subject} ${id}`);
}

function subset(ids, allowed, subject) {
  for (const id of ids) assert.ok(allowed.has(id), `Interaction pilot: ${subject} outside selection: ${id}`);
}

function doiIdentity(doi) {
  return typeof doi === "string" ? doi.trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "").toLowerCase() : null;
}

function nonemptyText(value) {
  if (typeof value === "string") assert.ok(value.trim().length, "Interaction pilot: blank text");
  else if (Array.isArray(value)) value.forEach(nonemptyText);
  else if (value && typeof value === "object") Object.values(value).forEach(nonemptyText);
}

function studyMode(study) {
  assert.ok(["primary-experiment", "primary-observation", "experimental-reanalysis", "computational-analysis"]
    .includes(study.studyType), `Interaction pilot: unsupported study type ${study.studyType}`);
  return study.studyType === "computational-analysis" ? "computation" : "experiment";
}

/** The comparison selects canonical cases; it does not own a second copy. */
export function resolveInteractionPilot(protocol, graph) {
  assert.ok(validateProtocolSchema(protocol), `Interaction pilot protocol schema: ${JSON.stringify(validateProtocolSchema.errors)}`);
  const cases = index(graph.interactionCases, "canonical interaction case");
  const analogies = index(graph.interactionAnalogies, "canonical interaction analogy");
  const resolvedFields = Object.keys(schema.definitions.resolvedCase.properties);
  const selected = protocol.cases.map((selection) => {
    const record = cases.get(selection.id);
    assert.ok(record, `Interaction pilot: unknown canonical case ${selection.id}`);
    return Object.fromEntries(resolvedFields.filter((key) => Object.hasOwn(record, key) || Object.hasOwn(selection, key))
      .map((key) => [key, Object.hasOwn(selection, key) ? selection[key] : record[key]]));
  });
  const { analogyIds, ...rest } = protocol;
  return copy({ ...rest, cases: selected, analogies: analogyIds.map((id) => {
    assert.ok(analogies.has(id), `Interaction pilot: unknown canonical analogy ${id}`);
    return analogies.get(id);
  }) });
}

/** Validate representation and provenance. This is not scientific adjudication. */
export function validateInteractionPilot(pilot, { graph, studies }) {
  assert.ok(validateSchema(pilot), `Interaction pilot schema: ${JSON.stringify(validateSchema.errors)}`);
  nonemptyText(pilot);
  const date = new Date(`${pilot.date}T00:00:00Z`);
  assert.ok(Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === pilot.date,
    "Interaction pilot: invalid calendar date");
  const sources = index(graph.sources, "canonical source");
  const claims = index(graph.claims, "canonical claim");
  const entities = index(graph.entities, "canonical entity");
  const contexts = index(studies, "canonical study");
  const groups = index(pilot.sourceGroups, "source group");
  const families = index(pilot.families, "family");
  const cases = index(pilot.cases, "case");
  index(pilot.analogies, "analogy");
  assert.deepEqual(new Set(pilot.cases.map((record) => record.domain)), new Set(["physics", "chemistry", "biochemistry"]),
    "Interaction pilot: physics, chemistry and biochemistry cases are required");

  const sourceOwners = new Map();
  const doiOwners = new Map();
  for (const group of groups.values()) {
    resolved(group.sourceIds, sources, "group source");
    for (const id of group.sourceIds) {
      assert.ok(!sourceOwners.has(id), `Interaction pilot: source ${id} occurs in multiple dependency groups`);
      sourceOwners.set(id, group.id);
      const source = sources.get(id);
      assert.ok(source.review?.extent && source.review?.limit && source.review?.locators?.length,
        `Interaction pilot: source ${id} lacks reading boundaries`);
      const doi = doiIdentity(source.doi);
      if (doi) {
        assert.ok(!doiOwners.has(doi) || doiOwners.get(doi) === group.id,
          `Interaction pilot: DOI ${doi} leaks across dependency groups`);
        doiOwners.set(doi, group.id);
      }
    }
  }
  assert.deepEqual(new Set(pilot.sourceGroups.map((group) => group.split)), new Set(["development", "challenge"]),
    "Interaction pilot: both development and challenge groups are required");

  const criteria = new Map();
  for (const family of families.values()) {
    const entries = ["supportCriteria", "contraryCriteria", "inconclusiveCriteria"]
      .flatMap((kind) => family[kind].map((criterion) => ({ ...criterion, kind })));
    criteria.set(family.id, index(entries, `${family.id} criterion`));
  }
  const usedGroups = new Set();
  for (const record of cases.values()) {
    const group = groups.get(record.sourceGroupId);
    assert.ok(group, `Interaction pilot: unknown source group ${record.sourceGroupId}`);
    usedGroups.add(group.id);
    const groupSources = new Set(group.sourceIds);
    const caseClaims = new Set(record.claimIds);
    const caseStudies = new Set(record.studyIds);
    resolved(record.entityIds, entities, "case entity");
    resolved(record.claimIds, claims, "case claim");
    resolved(record.studyIds, contexts, "case study");
    const modes = new Set(record.studyIds.map((id) => studyMode(contexts.get(id))));
    const expectedMode = modes.size === 2 ? "mixed" : [...modes][0];
    assert.equal(record.evidenceMode, expectedMode, `Interaction pilot: case ${record.id} evidence mode mismatch`);
    for (const id of record.studyIds) {
      const study = contexts.get(id);
      assert.ok(groupSources.has(study.sourceId), `Interaction pilot: study ${id} outside source group`);
      assert.ok(typeof study.readExtent === "string" && study.readExtent.trim()
        && Array.isArray(study.limitations) && study.limitations.length
        && Array.isArray(study.reviewedLocators) && study.reviewedLocators.length,
      `Interaction pilot: study ${id} lacks reading boundaries`);
      nonemptyText([study.readExtent, study.limitations, study.reviewedLocators]);
      subset(study.reviewedLocators, new Set(sources.get(study.sourceId).review.locators),
        `study ${id} reviewed locator`);
    }
    for (const id of record.entityIds) {
      assert.ok(entities.get(id).claimIds.some((claimId) => caseClaims.has(claimId)),
        `Interaction pilot: entity ${id} has no selected case claim`);
    }
    for (const id of record.claimIds) {
      const claim = claims.get(id);
      resolved(claim.citations.map((citation) => citation.sourceId), sources, `claim ${id} citation source`);
      for (const citation of claim.citations) {
        assert.ok(sources.get(citation.sourceId).review?.locators?.includes(citation.locator),
          `Interaction pilot: claim ${id} has an unreviewed source locator: ${citation.locator}`);
      }
      subset(claim.contextIds ?? [], caseStudies, `claim ${id} study context`);
      assert.ok(!(claim.experimentalContextIds?.length),
        `Interaction pilot: claim ${id} requires experimental contexts outside this pilot contract`);
      const support = claim.citations.filter((citation) => admissibleRoles.has(citation.role));
      assert.ok(support.some((citation) => groupSources.has(citation.sourceId)),
        `Interaction pilot: claim ${id} has no admissible citation in its source group`);
      const positive = substantiveStatuses.has(claim.status);
      if (positive) assert.ok(support.some((citation) => citation.role === "supports" && groupSources.has(citation.sourceId)),
        `Interaction pilot: finding ${id} lacks supporting source citation`);
      for (const contextId of claim.contextIds ?? []) {
        assert.ok(support.some((citation) => citation.sourceId === contexts.get(contextId).sourceId
          && (!positive || citation.role === "supports")),
        `Interaction pilot: claim ${id} lacks its study ${contextId} source citation`);
      }
      for (const citation of support) {
        assert.ok(groupSources.has(citation.sourceId),
          `Interaction pilot: claim ${id} depends on source ${citation.sourceId} outside its source group`);
      }
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
      for (const studyId of observation.studyIds) {
        assert.ok(selectedClaims.some((claim) => claim.contextIds?.includes(studyId)),
          `Interaction pilot: ${observation.id} has an unsupported study context ${studyId}`);
      }
      if (measuredKinds.has(observation.kind)) {
        assert.ok(observation.studyIds.every((id) => selectedClaims.some((claim) =>
          substantiveStatuses.has(claim.status) && claim.contextIds?.includes(id))),
        `Interaction pilot: ${observation.id} has no substantive finding bound to each study`);
        const expectedObservationMode = observation.kind === "model-result" ? "computation" : "experiment";
        assert.ok(observation.studyIds.every((id) => studyMode(contexts.get(id)) === expectedObservationMode),
          `Interaction pilot: ${observation.id} observation/study evidence mode mismatch`);
      }
    }
    const assessmentIds = new Set();
    for (const assessment of record.assessments) {
      assert.ok(families.has(assessment.familyId), `Interaction pilot: unknown assessment family ${assessment.familyId}`);
      const criterion = criteria.get(assessment.familyId).get(assessment.criterionId);
      assert.ok(criterion, `Interaction pilot: unknown criterion ${assessment.criterionId}`);
      const key = `${assessment.familyId}\u0000${assessment.criterionId}`;
      assert.ok(!assessmentIds.has(key), `Interaction pilot: duplicate case assessment ${record.id}/${assessment.criterionId}`);
      assessmentIds.add(key);
      const expectedKind = assessment.verdict === "supports-scoped-instance" ? "supportCriteria"
        : assessment.verdict === "contradicts-overextension" ? "contraryCriteria" : "inconclusiveCriteria";
      assert.equal(criterion.kind, expectedKind, `Interaction pilot: criterion/verdict mismatch for ${assessment.criterionId}`);
      resolved(assessment.observationIds, observations, "assessment observation");
      if (assessment.verdict === "supports-scoped-instance") {
        assert.ok(assessment.observationIds.some((id) => measuredKinds.has(observations.get(id).kind)),
          "Interaction pilot: support cannot rest solely on interpretation or absence");
      }
      if (assessment.verdict === "contradicts-overextension") {
        assert.ok(assessment.observationIds.some((id) => {
          const observation = observations.get(id);
          return measuredKinds.has(observation.kind) || (observation.kind === "source-interpretation"
            && observation.claimIds.some((claimId) => substantiveStatuses.has(claims.get(claimId).status)));
        }), "Interaction pilot: contrary evidence cannot rest solely on missing evidence or methods");
      }
    }
  }
  assert.equal(usedGroups.size, groups.size, "Interaction pilot: unused source dependency group");
  for (const analogy of pilot.analogies) {
    assert.ok(families.has(analogy.familyId), `Interaction pilot: unknown analogy family ${analogy.familyId}`);
    resolved(analogy.caseIds, cases, "analogy case");
    for (const field of analogy.fields) {
      for (const id of analogy.caseIds) assert.notEqual(cases.get(id).fields[field].value, null,
        `Interaction pilot: analogy ${analogy.id} maps missing field ${id}.${field}`);
    }
  }
  const transfers = index(pilot.transferChecks ?? [], "external transfer");
  const transferFamilies = new Set();
  const transferDois = new Set();
  const canonicalDois = new Set(graph.sources.map((source) => doiIdentity(source.doi)).filter(Boolean));
  for (const transfer of transfers.values()) {
    assert.ok(families.has(transfer.familyId), `Interaction pilot: unknown transfer family ${transfer.familyId}`);
    assert.ok(!transferFamilies.has(transfer.familyId), "Interaction pilot: duplicate external transfer family");
    transferFamilies.add(transfer.familyId);
    resolved(transfer.developmentCaseIds, cases, "transfer development case");
    for (const id of transfer.developmentCaseIds) {
      const record = cases.get(id);
      assert.equal(groups.get(record.sourceGroupId).split, "development",
        "Interaction pilot: transfer development case belongs to challenge partition");
      assert.ok(record.assessments.some((row) => row.familyId === transfer.familyId),
        "Interaction pilot: transfer development case lacks the candidate family");
    }
    assert.ok(!sources.has(transfer.source.id), "Interaction pilot: external source already exists in canonical graph");
    const doi = doiIdentity(transfer.source.doi);
    assert.ok(!canonicalDois.has(doi), "Interaction pilot: external transfer reuses a canonical publication");
    assert.ok(!transferDois.has(doi), "Interaction pilot: external transfers reuse a publication");
    transferDois.add(doi);
    const locators = new Set(transfer.source.locators);
    for (const observation of transfer.observations) {
      assert.ok(locators.has(observation.locator), "Interaction pilot: transfer observation exceeds reviewed passages");
    }
    if (transfer.verdict !== "inconclusive") {
      assert.ok(transfer.observations.some((row) => measuredKinds.has(row.kind)),
        "Interaction pilot: external transfer verdict lacks an actual measured/model finding");
      assert.ok(["full-primary-main", "primary-main-and-selected-supplement", "selected-primary-main-passages"]
        .includes(transfer.source.readExtent),
        "Interaction pilot: abstract-only external reading cannot establish transfer");
    }
  }
  if (transfers.size) assert.equal(transferFamilies.size, families.size,
    "Interaction pilot: external checks must cover all candidate families");
  return pilot;
}

/** Three views of the same literature records; never infer new physical edges. */
export function projectInteractionPilot(pilot, context) {
  validateInteractionPilot(pilot, context);
  const { graph, studies } = context;
  const selectedClaimIds = new Set(pilot.cases.flatMap((record) => record.claimIds));
  const selectedStudyIds = new Set(pilot.cases.flatMap((record) => record.studyIds));
  const selectedClaims = graph.claims.filter((claim) => selectedClaimIds.has(claim.id));
  const claims = new Map(selectedClaims.map((claim) => [claim.id, claim]));
  const citedSources = new Set(selectedClaims.flatMap((claim) => claim.citations.map((citation) => citation.sourceId)));
  for (const group of pilot.sourceGroups) for (const id of group.sourceIds) citedSources.add(id);
  const groups = new Map(pilot.sourceGroups.map((group) => [group.id, group]));
  return copy({
    system: {
      kind: "literature-system-summaries", physicalInstancesAdmitted: false,
      cases: pilot.cases.map((record) => {
        const entityIds = new Set(record.entityIds);
        const claimIds = new Set(record.claimIds);
        const studyIds = new Set(record.studyIds);
        const canonicalFunctionalRelations = sorted((graph.relations ?? []).filter((relation) =>
          relation.kind === "functional-support" && relation.role === "scoped-operating-support"
          && entityIds.has(relation.source) && entityIds.has(relation.target)
          && relation.claimIds.length > 0 && relation.claimIds.every((id) => claimIds.has(id))
          && relation.contextIds?.length > 0 && relation.contextIds.every((id) => studyIds.has(id))
          && !(relation.experimentalContextIds?.length)
          && relation.claimIds.some((id) => ["publication-supported", "literature-synthesis"].includes(claims.get(id).status))
          && relation.claimIds.every((id) => (claims.get(id).contextIds ?? [])
            .every((contextId) => relation.contextIds.includes(contextId)))
          && relation.contextIds.every((id) => relation.claimIds.some((claimId) =>
            ["publication-supported", "literature-synthesis"].includes(claims.get(claimId).status)
              && claims.get(claimId).contextIds?.includes(id)))));
        return {
          id: record.id, title: record.title, domain: record.domain, sourceGroupId: record.sourceGroupId,
          evidenceMode: record.evidenceMode,
          entityIds: record.entityIds, claimIds: record.claimIds, studyIds: record.studyIds,
          fields: record.fields, observations: record.observations, canonicalFunctionalRelations,
          limitations: record.limitations
        };
      })
    },
    evidence: {
      kind: "source-and-measurement-provenance",
      cases: pilot.cases.map((record) => ({ id: record.id, sourceGroupId: record.sourceGroupId,
        claimIds: record.claimIds, studyIds: record.studyIds, sourceIds: groups.get(record.sourceGroupId).sourceIds })),
      claims: sorted(selectedClaims), studies: sorted(studies.filter((study) => selectedStudyIds.has(study.id))),
      sources: sorted(graph.sources.filter((source) => citedSources.has(source.id))),
      externalTransferSources: (pilot.transferChecks ?? []).map((record, n) => ({
        id: record.source.id, title: record.source.title, authors: record.source.authors,
        year: record.source.year, doi: record.source.doi, url: record.source.url,
        readExtent: record.source.readExtent, recordPointer: `/transferChecks/${n}/source`
      }))
    },
    analogy: {
      kind: "candidate-cross-case-correspondences", physicalCausalClaim: false,
      families: pilot.families, links: pilot.analogies
    },
    evaluation: {
      kind: "retrospective-protocol-audit", prospectiveEvaluation: "not-performed",
      independentReview: "not-performed", scientificScores: null,
      scope: pilot.scope,
      caseCount: pilot.cases.length, sourceGroupCount: pilot.sourceGroups.length,
      transferChecks: (pilot.transferChecks ?? []).map((record, n) => ({
        id: record.id, familyId: record.familyId, developmentCaseIds: record.developmentCaseIds,
        sourceId: record.source.id, verdict: record.verdict,
        canonicalAdmission: false, blindProspective: false, recordPointer: `/transferChecks/${n}`
      })),
      sourceGroups: pilot.sourceGroups,
      assessments: pilot.cases.flatMap((record) => record.assessments.map((assessment) => ({
        caseId: record.id, sourceGroupId: record.sourceGroupId,
        split: groups.get(record.sourceGroupId).split, ...assessment
      }))),
      review: pilot.review
    }
  });
}
