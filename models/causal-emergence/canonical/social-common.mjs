import assert from "node:assert/strict";

export const SOCIAL_LIMIT = "Source reconstruction is not independent scientific review, raw-data replay or experimental reproduction. Catalogue levels, weighted necessary parents, universal carrier minima, irreducibility and a unique social construction sequence are not established.";
const unique = (values) => [...new Set(values)];
const entityId = (id) => id.includes(":") ? id : `soc:${id}`;
export function socialCitation(sourceId, locator, role = "supports", note = "Only the declared passage, population, preparation and observable support this statement; interpretation and extrapolation remain distinct.") {
  return { sourceId, locator, role, note };
}

/** Shared source/assay representation; scientific decisions reside in the topic modules. */
export function createSocialRecords() {
  const records = Object.fromEntries(["sources", "entities", "claims", "relations", "studies", "comparisons", "readiness"].map((key) => [key, []]));
  const CARD_SCOPES = [], sources = new Map(), studies = new Map(), findings = new Map();
  function publication(p) {
    assert.ok(!sources.has(p.id), `Duplicate social publication ${p.id}`);
    const source = { id: p.id, kind: p.kind ?? "research-publication", title: p.title, authors: p.authors, year: p.year,
      doi: p.doi ?? null, url: p.url, path: null, sha256: null,
      review: { extent: p.extent, locators: p.locators, limit: p.limit } };
    records.sources.push(source); sources.set(p.id, { ...p, source });
    return source.id;
  }
  function addNode(id, name, kind, description, claimIds, coordinates, limitations, status = "evidence-scoped", model = false) {
    const nodeId = entityId(id), ids = unique(claimIds);
    records.entities.push({ id: nodeId, name, kind, description, claimIds: ids, status,
      sourceCoordinates: coordinates, openObligations: unique([...limitations, SOCIAL_LIMIT]), level: 7 });
    records.readiness.push({ nodeId, role: kind === "context" ? model ? "model-context" : "experimental-context"
      : kind === "definition" ? "definition" : kind === "hypothesis" ? "hypothesis" : "scoped-phenomenon",
    denotes: description, instanceAdmission: "none", claimIds: ids });
    return nodeId;
  }
  function study(p) {
    assert.ok(!studies.has(p.id), `Duplicate social acquisition ${p.id}`);
    const publication = sources.get(p.sourceId);
    assert.ok(publication, `Register publication before study ${p.id}`);
    const locators = p.locators ?? publication.source.review.locators;
    assert.ok(locators.every((locator) => publication.source.review.locators.includes(locator)), `Unread social preparation locator ${p.id}`);
    const limits = unique([publication.limit, ...(p.limitations ?? []), SOCIAL_LIMIT]);
    const record = { id: p.id, sourceId: p.sourceId, studyType: p.studyType ?? "primary-experiment",
      doi: publication.doi ?? null, journal: publication.journal ?? null, volume: publication.volume ?? null,
      issue: publication.issue ?? "", pages: publication.pages ?? null, system: p.system,
      preparation: p.preparation, observable: p.observable, finding: p.finding, limitations: limits,
      readExtent: publication.extent, reviewedLocators: locators, metadataCheckedAt: "2026-11-04",
      metadataUrl: p.metadataUrl ?? publication.url,
      correctionCheck: p.correctionCheck ?? "The declared accessible primary record was checked within the stated reading boundary. This is not exhaustive correction surveillance; unread supplements and unreplayed original data remain outside the admitted evidence." };
    const methodId = `M-soc-${p.id}`;
    records.claims.push({ id: methodId, kind: "method", statement: p.preparation, scope: p.system, status: "method-contract",
      citations: locators.map((locator) => socialCitation(p.sourceId, locator, "method")), checkIds: [], limitations: limits, contextIds: [p.id] });
    const nodeId = addNode(`${p.id}-context`, `${p.id}: acquisition context`, "context", p.preparation, [methodId],
      locators.map((locator) => ({ sourceId: p.sourceId, locator })), limits, "definition", record.studyType === "computational-analysis");
    records.studies.push(record); studies.set(p.id, { record, methodId, nodeId, locators, limits });
    return methodId;
  }
  function observation(p) {
    const context = studies.get(p.studyId);
    assert.ok(context, `Unknown social acquisition ${p.studyId}`);
    const claimId = `C-soc-${p.id}`, limits = unique([...context.limits, ...(p.limitations ?? [])]);
    records.claims.push({ id: claimId, kind: "review-finding", statement: p.statement, scope: context.record.system,
      status: p.status ?? "publication-supported", citations: context.locators.map((locator) => socialCitation(context.record.sourceId, locator)),
      checkIds: [], limitations: limits, contextIds: [p.studyId] });
    const nodeId = addNode(p.id, p.name, "scoped-process", p.statement, [claimId, context.methodId],
      context.locators.map((locator) => ({ sourceId: context.record.sourceId, locator })), limits);
    records.relations.push({ id: `social-systems:${p.studyId}-measures-${p.id}`, source: context.nodeId, target: nodeId,
      kind: "descriptive", role: context.record.studyType === "computational-analysis" ? "computation-context" : "measurement-context",
      assertion: "This preparation fixes the sampled units, conditions, manipulation or observation and measured endpoint; the link is representational, not a physical prerequisite.",
      claimIds: [context.methodId, claimId], contextIds: [p.studyId] });
    findings.set(p.id, { claimId, nodeId, studyId: p.studyId });
    return claimId;
  }
  function definition(p) {
    const claimId = `${p.hypothesis ? "C" : "D"}-soc-${p.id}`, limits = unique([...(p.limitations ?? []), SOCIAL_LIMIT]);
    records.claims.push({ id: claimId, kind: "author-definition", statement: p.statement, scope: p.scope,
      status: p.hypothesis ? "unresolved" : "definition", citations: p.citations, checkIds: [], limitations: limits });
    addNode(p.id, p.name, p.hypothesis ? "hypothesis" : "definition", p.statement, [claimId],
      p.citations.map(({ sourceId, locator }) => ({ sourceId, locator })), limits, p.hypothesis ? "hypothesis" : "definition");
    return claimId;
  }
  function operating(p) {
    const a = findings.get(p.source), b = findings.get(p.target), context = studies.get(p.studyId);
    assert.ok(a && b && context && a.studyId === p.studyId && b.studyId === p.studyId, "Social functional endpoints must share a reviewed preparation");
    assert.equal(context.record.studyType, "primary-experiment", "Observed association or model fit is not an intervention");
    records.relations.push({ id: `social-systems:${p.source}-supports-${p.target}`, source: a.nodeId, target: b.nodeId,
      kind: "functional-support", role: "scoped-operating-support", assertion: p.assertion,
      claimIds: [a.claimId, b.claimId, context.methodId], contextIds: [p.studyId], carrier: {
        contextIds: [p.studyId], citations: context.locators.map((locator) => ({ sourceId: context.record.sourceId, locator })),
        interpretation: { bearer: p.bearer, input: p.input, observable: p.observable, limit: p.limit },
        countingStatus: "unoperationalized", numericalAdmission: "none" } });
  }
  function comparison(p) { records.comparisons.push(p); }
  function card(p) {
    const scopeClaim = `D-soc-${p.slug}-scope`, scopeNode = `soc:${p.slug}`;
    const locator = `Card 7.${p.index} scope contract`;
    const bibliography = p.bibliography.map((entry, sourceIndex) => ({ sourceIndex, ...entry }));
    const citations = [socialCitation("legacy-7", `/${p.index}`, "provenance", "Original claims, bibliography and ordered proposed parents; catalogue assertions are not empirical support."),
      socialCitation("social-systems-review", locator, "supports", "Internal topic representation and scoped decisions; empirical findings retain their original publication and preparation identities."),
      ...bibliography.map((entry) => socialCitation(entry.sourceId, entry.locator ?? "Bibliographic metadata", "provenance", entry.reason))];
    const evidence = p.evidence ?? [], evidenceClaims = unique(evidence.flatMap((entry) => entry.claimIds));
    const defaults = [...(p.excludedDefaults ?? []), "Original parent weights, carrier minima/critical values, phase/type assignments and universal necessary chains are not measured by the selected sources."];
    const unresolved = p.unresolved ?? [], limits = unique([...defaults, ...unresolved, SOCIAL_LIMIT]);
    records.claims.push({ id: scopeClaim, kind: "author-definition", statement: p.scope,
      scope: `Source card 7.${p.index}: declared definition and preparation-specific evidence, not a universal level or construction mechanism.`,
      status: "definition", citations, checkIds: [], limitations: limits });
    addNode(p.slug, `${p.name}: reviewed scope`, "definition", p.scope, [scopeClaim, ...evidenceClaims],
      [{ sourceId: "legacy-7", locator: `/${p.index}` }, { sourceId: "social-systems-review", locator }], limits, "definition");
    for (const entry of evidence) records.relations.push({ id: `social-systems:${entry.nodeId.replace(/:/g, "-")}-qualifies-${p.slug}`,
      source: entry.nodeId, target: scopeNode, kind: "descriptive", role: "definition-dependency",
      assertion: "This source-bound record qualifies the topic scope without converting a finding, null, model or hypothesis into a necessary physical dependency.",
      claimIds: unique([scopeClaim, ...entry.claimIds]) });
    const decision = (entry, name) => Array.isArray(entry) ? { [name]: entry[0], disposition: entry[1], reason: entry[2], claimIds: unique([scopeClaim, ...(entry[3] ?? [])]) }
      : { ...entry, claimIds: unique([scopeClaim, ...(entry.claimIds ?? [])]) };
    CARD_SCOPES.push({ sourceIndex: p.index, code: `7.${p.index}`, originalName: p.name, scope: p.scope,
      nodeIds: unique([scopeNode, ...evidence.map((entry) => entry.nodeId)]), claimIds: unique([scopeClaim, ...evidenceClaims]),
      assertions: p.assertions.map((entry) => decision(entry, "topic")), parentDispositions: p.parents.map((entry) => decision(entry, "parentCode")),
      bibliography, excludedDefaults: defaults, unresolved });
  }
  return { records, CARD_SCOPES, publication, study, observation, definition, operating, comparison, card,
    citation: socialCitation, sources, studies, findings };
}
