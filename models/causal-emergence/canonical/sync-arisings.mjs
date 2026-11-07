// Mirror the author's arising catalogue into references/canonical/graph.json.
// The catalogue (arising-catalogue.json) is the editable source of arisings, parent relations and organization;
// it holds the current state only.
// The graph keeps what the catalogue cannot hold: each arising's technical subgraph (anchorIds, memberIds) and
// the evidence state of each cause (status, claimIds, evidence, obligations). Usage:
//   node models/causal-emergence/canonical/sync-arisings.mjs [--check]
// --check reports whether the graph already mirrors the catalogue without writing.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CATALOGUE_ONLY_OBLIGATION, NO_RECORDS_OBLIGATION, PLACEHOLDER_OBLIGATION, arisingId, causeId, evidenceCoverage } from "./arisings.mjs";

const ROOT = fileURLToPath(new URL("../../../", import.meta.url));
const FILES = {
  graph: "references/canonical/graph.json",
  vocabulary: "references/canonical/arising-vocabulary.json",
  catalogue: "references/canonical/arising-catalogue.json"
};
const ROLE_OBLIGATION = {
  arising: (p, c) => `Show that arising ${c} does not first form without arising ${p}.`,
  maintenance: (p, c) => `Show that arising ${c}, once formed, does not persist without arising ${p}.`,
  modulation: (p, c) => `Show that arising ${p} changes the operating regime of arising ${c} without being required for its formation or persistence.`
};

const read = (file) => readFileSync(ROOT + file, "utf8");
const sha = (text) => createHash("sha256").update(text).digest("hex");

export function syncArisings({ graph, vocabulary, catalogue, hashes }) {
  const entities = new Map(graph.entities.map((entity) => [entity.id, entity]));
  const claims = new Map(graph.claims.map((claim) => [claim.id, claim]));
  const previousArisings = new Map((graph.arisings ?? []).map((arising) => [arising.id, arising]));
  const previousCauses = new Map((graph.causes ?? []).map((cause) => [cause.id, cause]));
  assert(vocabulary.id === "soma-arising-vocabulary" && catalogue.id === "soma-arising-catalogue", "Unexpected arising sources");

  // Bound author sources and their hashes.
  for (const [id, file] of [["arising-vocabulary", FILES.vocabulary], ["arising-catalogue", FILES.catalogue]]) {
    const source = graph.sources.find((entry) => entry.id === id);
    assert(source, `Missing source ${id}`);
    source.sha256 = hashes[file];
  }

  const rules = new Map(graph.rules.map((rule) => [rule.id, rule]));
  const coverage = (memberIds) => evidenceCoverage({ memberIds }, { entities, claims, rules });
  const clusterDomain = new Map((catalogue.clusters ?? []).map((cluster) => [cluster.id, cluster.domain]));
  graph.arisings = catalogue.arisings.map((card) => {
    const id = arisingId(card.Code);
    const previous = previousArisings.get(id);
    assert(previous, `New arising ${card.Code} needs its technical subgraph: add it to graph.json with anchorIds and memberIds first`);
    const memberIds = [...previous.memberIds].sort();
    const subgraphCoverage = coverage(memberIds);
    const computed = [];
    if (["established", "well-supported"].includes(card.ScientificStatus) && subgraphCoverage !== "published-findings") computed.push(CATALOGUE_ONLY_OBLIGATION);
    if (card.ScientificStatus === "methodological-placeholder") computed.push(PLACEHOLDER_OBLIGATION);
    if (memberIds.length === 0) computed.push(NO_RECORDS_OBLIGATION);
    const kept = (previous.openObligations ?? []).filter((text) => ![CATALOGUE_ONLY_OBLIGATION, PLACEHOLDER_OBLIGATION, NO_RECORDS_OBLIGATION].includes(text));
    return {
      id, code: card.Code, name: card.Name, summary: card.ShortDescription, description: card.Description,
      level: card.Level, phase: card.Phase, typeRole: card.TypeRole, cluster: card.Cluster, domain: clusterDomain.get(card.Cluster),
      disciplines: card.Science, status: card.ScientificStatus, evidenceCoverage: subgraphCoverage,
      requirements: { mustCover: card.Requirements?.MustCover ?? [], shouldCover: card.Requirements?.ShouldCover ?? [], optionalCover: card.Requirements?.OptionalCover ?? [] },
      anchorIds: previous.anchorIds, memberIds,
      sourceCoordinates: [{ sourceId: "arising-catalogue", locator: "Complete catalogue" }],
      claimIds: previous.claimIds ?? [], openObligations: [...computed, ...kept]
    };
  });

  graph.causes = catalogue.arisings.flatMap((card) => card.Parents.map((parent) => {
    const id = causeId(parent.ParentCode, card.Code);
    const role = parent.OntologicalRole;
    const previous = previousCauses.get(id);
    const template = ROLE_OBLIGATION[role](parent.ParentCode, card.Code);
    // Evidence survives a sync. A cause still open keeps its obligations, with the role template kept current.
    const status = previous?.status ?? "author-hypothesis";
    const roleTemplates = new Set(Object.values(ROLE_OBLIGATION).map((write) => write(parent.ParentCode, card.Code)));
    const extra = (previous?.openObligations ?? []).filter((text) => !roleTemplates.has(text));
    const openObligations = status === "author-hypothesis" ? [template, ...extra] : (previous?.openObligations ?? []);
    return {
      id, parent: arisingId(parent.ParentCode), child: arisingId(card.Code),
      causalDirections: parent.CausalDirections, interactionModes: parent.InteractionModes, dependencyType: parent.DependencyType,
      necessity: parent.Necessity, ontologicalRole: role,
      carrier: { group: parent.Quantization?.CarrierGroupId ?? null, type: parent.Quantization?.CarrierTypeId ?? null, nMin: null, nCrit: null, nSat: null },
      weight: null, status,
      sourceCoordinates: [{ sourceId: "arising-catalogue", locator: "Complete catalogue" }],
      claimIds: previous?.claimIds ?? [], evidence: previous?.evidence ?? { relationIds: [], contextIds: [] },
      openObligations
    };
  }));
  return graph;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const check = process.argv.includes("--check");
  const texts = Object.fromEntries(Object.entries(FILES).map(([key, file]) => [key, read(file)]));
  const hashes = { [FILES.vocabulary]: sha(texts.vocabulary), [FILES.catalogue]: sha(texts.catalogue) };
  const graph = syncArisings({ graph: JSON.parse(texts.graph), vocabulary: JSON.parse(texts.vocabulary), catalogue: JSON.parse(texts.catalogue), hashes });
  const next = `${JSON.stringify(graph, null, 2)}\n`;
  if (check) {
    if (next !== texts.graph) { console.error("graph.json does not mirror the arising catalogue; run sync-arisings.mjs"); process.exit(1); }
    console.log(`graph.json mirrors the arising catalogue: ${graph.arisings.length} arisings, ${graph.causes.length} causes.`);
  } else {
    writeFileSync(ROOT + FILES.graph, next);
    console.log(`Mirrored the arising catalogue: ${graph.arisings.length} arisings, ${graph.causes.length} causes.`);
  }
}
