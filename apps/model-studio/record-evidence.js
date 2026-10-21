const FORMAT = "dictionary-references-v1";

/** Canonical record references are resolved only from the same verified release. */
export function usesDictionaryEvidence(dictionaries) {
  if (dictionaries?.recordEvidence === undefined) return false;
  if (dictionaries.recordEvidence?.format !== FORMAT) throw new TypeError("Unknown record evidence representation");
  return true;
}

function index(rows, subject, idKey = "id") {
  const result = new Map();
  for (const row of rows) {
    if (!row || typeof row[idKey] !== "string" || result.has(row[idKey])) {
      throw new TypeError(`Invalid record evidence ${subject} identity`);
    }
    result.set(row[idKey], row);
  }
  return result;
}

function required(map, id, subject) {
  if (!map.has(id)) throw new TypeError(`Missing record evidence ${subject}: ${id}`);
  return map.get(id);
}

/** Collect a bounded set of complete evidence records for a detail chunk. */
export function recordEvidenceContext(records, dictionaries) {
  if (!usesDictionaryEvidence(dictionaries)) return null;
  const sources = index(dictionaries.sources ?? [], "source");
  const studies = index(Object.values(dictionaries).flatMap((value) =>
    Array.isArray(value?.studies) ? value.studies : []), "study");
  const routing = dictionaries.routing ?? {};
  const experiments = index(routing.contexts ?? [], "experimental context");
  const reviews = index(routing.reviews ?? [], "experimental review", "contextId");
  const selectedSources = new Map(), selectedStudies = new Map(), selectedExperiments = new Map();
  for (const record of records) for (const claim of record.rationale ?? []) {
    for (const citation of claim.citations ?? []) {
      selectedSources.set(citation.sourceId, required(sources, citation.sourceId, "source"));
    }
    for (const id of claim.contextIds ?? []) selectedStudies.set(id, required(studies, id, "study"));
    for (const id of claim.experimentalContextIds ?? []) {
      const context = required(experiments, id, "experimental context");
      selectedExperiments.set(id, {
        ...context,
        review: required(reviews, id, "experimental review"),
        measurement: routing.measurements?.find((measurement) => measurement.contextId === id) ?? null,
        routes: routing.routes ?? []
      });
    }
  }
  return { format: FORMAT, sources: [...selectedSources.values()], studies: [...selectedStudies.values()],
    experimentalContexts: [...selectedExperiments.values()] };
}

/** Return display evidence without modifying the exact node or its claims. */
export function resolveRecordEvidence(record, context = null) {
  const rationale = Array.isArray(record?.rationale) ? record.rationale : [];
  if (context === null) return rationale;
  if (context.format !== FORMAT) throw new TypeError("Unknown record evidence representation");
  const sources = index(context.sources, "source");
  const studies = index(context.studies, "study");
  const experiments = index(context.experimentalContexts, "experimental context");
  return rationale.map((claim) => ({
    ...claim,
    citations: (claim.citations ?? []).map((citation) => Object.hasOwn(citation, "source") ? citation
      : { ...citation, source: required(sources, citation.sourceId, "source") }),
    contexts: claim.contexts ?? (claim.contextIds ?? []).map((id) => required(studies, id, "study")),
    experimentalContexts: claim.experimentalContexts
      ?? (claim.experimentalContextIds ?? []).map((id) => required(experiments, id, "experimental context"))
  }));
}
