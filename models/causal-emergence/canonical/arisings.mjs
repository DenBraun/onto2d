import assert from "node:assert/strict";
import { isDeepStrictEqual } from "node:util";

/**
 * Ontological layer of the canonical graph: arisings and the causes between them.
 * The author's vocabulary and catalogue fix the structure; the technical records of the graph form each
 * arising's subgraph; a cause stays an author hypothesis until evidence supports it.
 */
export const ARISING_ROOT = "arising:0.15";
export const CAUSE_STATUSES = Object.freeze(["supported", "model-supported", "author-hypothesis"]);
export const EVIDENCE_COVERAGE = Object.freeze(["published-findings", "formal-or-computational", "author-definitions", "none"]);
export const NO_RECORDS_OBLIGATION = "The subgraph holds no technical records yet; add the evidence that this arising occurs.";
export const CATALOGUE_ONLY_OBLIGATION = "The subgraph holds no published findings for this arising yet; its scientific status rests on the catalogue.";
export const PLACEHOLDER_OBLIGATION = "Specify the observable or formal test that would instantiate this proposed arising.";
export const PUBLISHED_CLAIM_STATUSES = Object.freeze(["publication-supported", "literature-synthesis"]);
// A model-supported cause cites a specified derivation; an author definition alone is not one.
export const MODEL_CLAIM_STATUSES = Object.freeze(["method-contract", "analytically-checked"]);
const PUBLISHED = new Set(PUBLISHED_CLAIM_STATUSES);
const FORMAL = new Set(["definition", "method-contract", "analytically-checked", "case-negative", "unresolved"]);
const MODEL = new Set(MODEL_CLAIM_STATUSES);
const ROLE_ORDER = ["arising", "maintenance", "modulation"];
const ORGANIZATION_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Questions awaiting the author's decision; the validator admits the listed exceptions only while they are open.
 * Entries are `{ id, kind: "loop", members, question }` or `{ id, kind: "outside-cause", arising, question }`.
 * The author answered every question of the first structural review on 2026-11-06.
 */
export const PENDING_ARISING_QUESTIONS = Object.freeze([]);

export const arisingId = (code) => `arising:${code}`;
export const causeId = (parentCode, childCode) => `cause:${parentCode}>${childCode}`;

/** Evidence the subgraph holds for an arising, from the statuses of its members' claims (entities and construction rules). */
export function evidenceCoverage(arising, { entities, claims, rules = new Map() }) {
  if (arising.memberIds.length === 0) return "none";
  const statuses = arising.memberIds.flatMap((id) => ((entities.get(id) ?? rules.get(id))?.claimIds ?? []).map((claimId) => claims.get(claimId)));
  if (statuses.some((claim) => PUBLISHED.has(claim?.status))) return "published-findings";
  if (statuses.some((claim) => claim && FORMAL.has(claim.status) && claim.kind !== "author-definition")) return "formal-or-computational";
  return "author-definitions";
}

/**
 * Mandatory dependency types covered by the arising's causes, and the open cause slots.
 * The root's own cause lies beyond the graph (declared in the catalogue), so its requirements point there instead of to open slots.
 */
export function causalCompleteness(arising, causes) {
  const must = arising.requirements.mustCover;
  if (arising.id === ARISING_ROOT) return { mustCover: must, covered: [], supported: [], openSlots: [], beyondGraph: must };
  const covering = new Map();
  for (const cause of causes) if (cause.child === arising.id) {
    if (!covering.has(cause.dependencyType)) covering.set(cause.dependencyType, []);
    covering.get(cause.dependencyType).push(cause);
  }
  return {
    mustCover: must,
    covered: must.filter((type) => covering.has(type)),
    supported: must.filter((type) => covering.get(type)?.some((cause) => cause.status !== "author-hypothesis")),
    openSlots: must.filter((type) => !covering.has(type)),
    beyondGraph: []
  };
}

/** Strongly connected components of the arising-role causes that contain a cycle (Tarjan, iterative). */
function arisingCycles(arisings, causes) {
  const next = new Map(arisings.map((a) => [a.id, []]));
  const selfLoops = new Set();
  for (const cause of causes) if (cause.ontologicalRole === "arising" && next.has(cause.parent)) {
    next.get(cause.parent).push(cause.child);
    if (cause.parent === cause.child) selfLoops.add(cause.parent);
  }
  const index = new Map(), low = new Map(), onStack = new Set(), stack = [], components = [];
  let counter = 0;
  for (const root of next.keys()) {
    if (index.has(root)) continue;
    const work = [[root, 0]];
    index.set(root, counter); low.set(root, counter); counter += 1; stack.push(root); onStack.add(root);
    while (work.length) {
      const frame = work.at(-1);
      const [node, position] = frame;
      const children = next.get(node);
      if (position < children.length) {
        frame[1] += 1;
        const child = children[position];
        if (!index.has(child)) {
          index.set(child, counter); low.set(child, counter); counter += 1; stack.push(child); onStack.add(child);
          work.push([child, 0]);
        } else if (onStack.has(child)) low.set(node, Math.min(low.get(node), index.get(child)));
        continue;
      }
      work.pop();
      if (work.length) { const parent = work.at(-1)[0]; low.set(parent, Math.min(low.get(parent), low.get(node))); }
      if (low.get(node) === index.get(node)) {
        const component = [];
        let member;
        do { member = stack.pop(); onStack.delete(member); component.push(member); } while (member !== node);
        if (component.length > 1 || selfLoops.has(node)) components.push(component.sort());
      }
    }
  }
  return components;
}

/** Exact admission of the arising layer; it does not establish any cause beyond its stated evidence status. */
export function validateArisingModel(data, context) {
  const { graph, arisingVocabulary: vocabulary, arisingCatalogue: catalogue } = data;
  const { entities, claims, sources } = context;
  for (const [id, file] of [["arising-vocabulary", "references/canonical/arising-vocabulary.json"], ["arising-catalogue", "references/canonical/arising-catalogue.json"]]) {
    assert.equal(sources.get(id)?.path, file, `Arising source binding changed: ${id}`);
    assert.equal(sources.get(id)?.kind, "author-drafts", `Arising source role changed: ${id}`);
  }
  assert.equal(vocabulary.id, "soma-arising-vocabulary");
  assert.equal(catalogue.id, "soma-arising-catalogue");
  const ids = (key) => new Set(vocabulary[key].map((entry, index) => {
    assert.equal(entry.Id, index, `Vocabulary ${key} is not indexed by Id`);
    return entry.Id;
  }));
  const vocab = { levels: ids("complexityLevels"), phases: ids("levelPhases"), typeRoles: ids("typeRoles"), directions: ids("causalDirections"),
    modes: ids("interactionModes"), dependencies: ids("dependencyTypes"), carrierGroups: ids("carrierGroups"), carrierTypes: ids("carrierTypes"),
    disciplines: ids("disciplines") };
  for (const key of ["scientificStatus", "necessity", "ontologicalRoles"]) assert.ok(Array.isArray(vocabulary[key]) && vocabulary[key].length, `Vocabulary lacks ${key}`);
  const directionNamed = (name) => vocabulary.causalDirections.find((entry) => entry.Name === name)?.Id;
  const directionId = { upward: directionNamed("Upward causation"), downward: directionNamed("Downward causation"), horizontal: directionNamed("Horizontal causation") };
  assert.ok(Object.values(directionId).every(Number.isInteger), "Vocabulary lacks the level-ordered causal directions");
  assert.deepEqual(vocabulary.ontologicalRoles, ROLE_ORDER, "Ontological roles keep the theory's priority order");

  // Catalogue.
  const cards = new Map();
  for (const card of catalogue.arisings) {
    assert.ok(!cards.has(card.Code), `Duplicate catalogue arising ${card.Code}`);
    cards.set(card.Code, card);
  }
  // The catalogue holds the current state only: the root, the principles and the co-arising loops it declares.
  assert.ok(arisingId(catalogue.root?.code ?? "") === ARISING_ROOT && typeof catalogue.root.statement === "string" && catalogue.root.statement.length > 0,
    "The catalogue states that the root's own cause lies beyond the graph");
  for (const principle of catalogue.principles ?? []) assert.ok(ORGANIZATION_ID.test(principle.id) && principle.statement, `Principle lacks its statement: ${principle.id}`);
  const declared = new Set();
  for (const entry of [...(catalogue.principles ?? []), ...(catalogue.coArisingLoops ?? [])]) {
    assert.ok(!declared.has(entry.id), `Duplicate catalogue declaration: ${entry.id}`);
    declared.add(entry.id);
  }

  // Organization: clusters of one level, grouped into cross-level domains.
  const domains = new Map();
  for (const domain of catalogue.domains ?? []) {
    assert.ok(ORGANIZATION_ID.test(domain.id) && !domains.has(domain.id), `Domain id ${domain.id}`);
    assert.ok(domain.name && domain.definition && domain.criteria && Array.isArray(domain.levels) && domain.levels.length, `Domain lacks its definition, criteria or levels: ${domain.id}`);
    domains.set(domain.id, domain);
  }
  const clusters = new Map();
  for (const cluster of catalogue.clusters ?? []) {
    assert.ok(ORGANIZATION_ID.test(cluster.id) && !clusters.has(cluster.id), `Cluster id ${cluster.id}`);
    assert.ok(cluster.name && cluster.definition, `Cluster lacks its name or definition: ${cluster.id}`);
    assert.ok(domains.get(cluster.domain)?.levels.includes(cluster.level), `Cluster outside its domain's levels: ${cluster.id}`);
    clusters.set(cluster.id, cluster);
  }
  assert.ok(domains.size && clusters.size, "The catalogue organizes arisings into domains and clusters");
  const loops = catalogue.coArisingLoops ?? [];
  for (const loop of loops) {
    assert.ok(ORGANIZATION_ID.test(loop.id) && loop.statement && Array.isArray(loop.members) && loop.members.length >= 2, `Co-arising loop lacks its members or statement: ${loop.id}`);
    for (const code of loop.members) assert.ok(cards.has(code), `Co-arising loop names an absent arising: ${loop.id} ${code}`);
  }

  const used = new Map([...clusters.keys()].map((id) => [id, 0]));
  for (const card of cards.values()) {
    assert.equal(clusters.get(card.Cluster)?.level, card.Level, `Arising outside a cluster of its level: ${card.Code}`);
    used.set(card.Cluster, used.get(card.Cluster) + 1);
  }
  for (const [id, count] of used) assert.ok(count > 0, `Empty cluster: ${id}`);
  for (const id of domains.keys()) assert.ok([...clusters.values()].some((cluster) => cluster.domain === id), `Empty domain: ${id}`);

  // Arisings mirror the catalogue and own the technical subgraphs.
  const arisings = new Map();
  for (const arising of graph.arisings) {
    assert.ok(!arisings.has(arising.id), `Duplicate arising ${arising.id}`);
    arisings.set(arising.id, arising);
  }
  assert.deepEqual([...arisings.keys()].sort(), [...cards.keys()].map(arisingId).sort(), "Arisings differ from the author's catalogue");
  const home = new Map();
  const ruleRecords = new Map(graph.rules.map((rule) => [rule.id, rule]));
  const ruleIds = new Set(ruleRecords.keys());
  for (const arising of arisings.values()) {
    const card = cards.get(arising.code);
    assert.equal(arising.id, arisingId(card.Code));
    for (const [field, value] of [["name", card.Name], ["summary", card.ShortDescription], ["description", card.Description], ["level", card.Level],
      ["phase", card.Phase], ["typeRole", card.TypeRole], ["disciplines", card.Science], ["status", card.ScientificStatus]]) {
      assert.ok(isDeepStrictEqual(arising[field], value), `Arising ${field} differs from the catalogue: ${arising.id}`);
    }
    assert.equal(arising.cluster, card.Cluster, `Arising cluster differs from the catalogue: ${arising.id}`);
    assert.equal(arising.domain, clusters.get(card.Cluster).domain, `Arising domain differs from its cluster: ${arising.id}`);
    assert.deepEqual(arising.requirements, { mustCover: card.Requirements?.MustCover ?? [], shouldCover: card.Requirements?.ShouldCover ?? [], optionalCover: card.Requirements?.OptionalCover ?? [] },
      `Arising requirements differ from the catalogue: ${arising.id}`);
    assert.ok(vocab.levels.has(arising.level) && vocab.phases.has(arising.phase) && vocab.typeRoles.has(arising.typeRole), `Arising cell outside the vocabulary: ${arising.id}`);
    for (const id of arising.disciplines) assert.ok(vocab.disciplines.has(id), `Unknown discipline ${id}: ${arising.id}`);
    for (const id of [...arising.requirements.mustCover, ...arising.requirements.shouldCover, ...arising.requirements.optionalCover]) assert.ok(vocab.dependencies.has(id), `Unknown dependency type ${id}: ${arising.id}`);
    for (const coordinate of arising.sourceCoordinates) assert.ok(sources.get(coordinate.sourceId)?.review.locators.includes(coordinate.locator), `Arising coordinate exceeds the reading: ${arising.id}`);
    for (const id of arising.claimIds) assert.ok(claims.has(id), `Unknown arising claim ${id}: ${arising.id}`);
    for (const id of arising.anchorIds) assert.ok(arising.memberIds.includes(id), `Anchor outside the subgraph: ${arising.id} ${id}`);
    assert.deepEqual(arising.memberIds, [...arising.memberIds].sort(), `Subgraph members are not in canonical order: ${arising.id}`);
    for (const id of arising.memberIds) {
      const level = entities.get(id)?.level ?? (ruleIds.has(id) ? 0 : undefined);
      assert.equal(level, arising.level, `Subgraph member ${id} is not on the level of ${arising.id}`);
      assert.ok(!home.has(id), `Technical record ${id} belongs to two arisings`);
      home.set(id, arising.id);
    }
    assert.equal(arising.evidenceCoverage, evidenceCoverage(arising, { ...context, rules: ruleRecords }), `Arising evidence coverage is stale: ${arising.id}`);
    assert.equal(arising.openObligations.includes(NO_RECORDS_OBLIGATION), arising.memberIds.length === 0, `An arising without records states it: ${arising.id}`);
    const unsupportedStatus = ["established", "well-supported"].includes(arising.status) && arising.evidenceCoverage !== "published-findings";
    assert.equal(arising.openObligations.includes(CATALOGUE_ONLY_OBLIGATION), unsupportedStatus,
      `Arising must state whether its status rests on the catalogue alone: ${arising.id}`);
    assert.equal(arising.openObligations.includes(PLACEHOLDER_OBLIGATION), arising.status === "methodological-placeholder",
      `A methodological placeholder states its missing test: ${arising.id}`);
  }
  for (const id of [...entities.keys(), ...ruleIds]) assert.ok(home.has(id), `Technical record without an arising: ${id}`);

  // Causes mirror the catalogue's parent relations.
  const causes = new Map();
  for (const cause of graph.causes) {
    assert.ok(!causes.has(cause.id), `Duplicate cause ${cause.id}`);
    causes.set(cause.id, cause);
  }
  const expected = [...cards.values()].flatMap((card) => card.Parents.map((parent) => [causeId(parent.ParentCode, card.Code), card, parent]));
  assert.deepEqual([...causes.keys()].sort(), expected.map(([id]) => id).sort(), "Causes differ from the catalogue's parent relations");
  for (const [id, card, parent] of expected) {
    assert.ok(cards.has(parent.ParentCode), `Cause names a parent outside the catalogue: ${id}`);
    assert.notEqual(parent.ParentCode, card.Code, `A cause joins two distinct arisings: ${id}`);
    const cause = causes.get(id);
    assert.equal(cause.parent, arisingId(parent.ParentCode)); assert.equal(cause.child, arisingId(card.Code));
    for (const [field, value] of [["causalDirections", parent.CausalDirections], ["interactionModes", parent.InteractionModes], ["dependencyType", parent.DependencyType],
      ["necessity", parent.Necessity], ["ontologicalRole", parent.OntologicalRole]]) {
      assert.ok(isDeepStrictEqual(cause[field], value), `Cause ${field} differs from the catalogue: ${id}`);
    }
    for (const value of cause.causalDirections) assert.ok(vocab.directions.has(value), `Unknown causal direction: ${id}`);
    for (const value of cause.interactionModes) assert.ok(vocab.modes.has(value), `Unknown interaction mode: ${id}`);
    assert.ok(vocab.dependencies.has(cause.dependencyType) && vocabulary.necessity.includes(cause.necessity) && ROLE_ORDER.includes(cause.ontologicalRole), `Cause typing outside the vocabulary: ${id}`);
    assert.deepEqual(cause.carrier, { group: parent.Quantization?.CarrierGroupId ?? null, type: parent.Quantization?.CarrierTypeId ?? null, nMin: null, nCrit: null, nSat: null },
      `Carrier counts stay null until quantitatively supported: ${id}`);
    if (cause.carrier.group !== null) {
      assert.ok(vocab.carrierGroups.has(cause.carrier.group) && vocab.carrierTypes.has(cause.carrier.type), `Unknown carrier: ${id}`);
      const allowedLevels = vocabulary.carrierGroups[cause.carrier.group].AllowedLevels;
      assert.ok(allowedLevels.includes(card.Level) || allowedLevels.includes(cards.get(parent.ParentCode)?.Level), `Carrier group not allowed at the levels of the cause: ${id}`);
      assert.equal(vocabulary.carrierTypes[cause.carrier.type].GroupId, cause.carrier.group, `Carrier type outside its group: ${id}`);
    }
    // Across levels, the direction agrees with the level order; within a level the author's descriptive levels apply.
    const parentLevel = cards.get(parent.ParentCode)?.Level;
    if (parentLevel !== card.Level) {
      const against = parentLevel < card.Level ? [directionId.downward, directionId.horizontal] : [directionId.upward, directionId.horizontal];
      assert.ok(!cause.causalDirections.some((value) => against.includes(value)), `Cause direction contradicts the level order: ${id}`);
    }
    assert.equal(cause.weight, null, `A weight is not admitted without quantitative support: ${id}`);
    assert.ok(CAUSE_STATUSES.includes(cause.status), `Cause status ${cause.status}: ${id}`);
    for (const coordinate of cause.sourceCoordinates) assert.ok(sources.get(coordinate.sourceId)?.review.locators.includes(coordinate.locator), `Cause coordinate exceeds the reading: ${id}`);
    const support = cause.claimIds.map((claimId) => { assert.ok(claims.has(claimId), `Unknown cause claim ${claimId}: ${id}`); return claims.get(claimId); });
    if (cause.status === "supported") assert.ok(support.some((claim) => PUBLISHED.has(claim.status)), `Supported cause lacks published evidence: ${id}`);
    if (cause.status === "model-supported") assert.ok(support.some((claim) => MODEL.has(claim.status)), `Model-supported cause lacks a model: ${id}`);
    if (cause.status === "author-hypothesis") assert.ok(cause.openObligations.length, `An author hypothesis states what remains to be shown: ${id}`);
  }

  // Invariants: one root, no arising without an arising cause, declared co-arising loops only.
  const parentsOf = new Map([...arisings.keys()].map((id) => [id, []]));
  for (const cause of causes.values()) parentsOf.get(cause.child).push(cause);
  for (const [id, parents] of parentsOf) {
    if (id === ARISING_ROOT) { assert.equal(parents.length, 0, "The admissibility proto-field is the only root"); continue; }
    assert.ok(parents.some((cause) => cause.ontologicalRole === "arising"), `Arising without an arising cause: ${id}`);
  }
  const pendingLoops = PENDING_ARISING_QUESTIONS.filter((q) => q.kind === "loop");
  const pendingOutside = new Set(PENDING_ARISING_QUESTIONS.filter((q) => q.kind === "outside-cause").map((q) => arisingId(q.arising)));
  const loopMembers = [...loops, ...pendingLoops].map((loop) => new Set(loop.members.map(arisingId)));
  // A cyclic component must lie entirely inside one declared or pending loop.
  const cycles = arisingCycles([...arisings.values()], [...causes.values()]);
  for (const component of cycles) {
    assert.ok(loopMembers.some((members) => component.every((id) => members.has(id))), `Undeclared arising cycle: ${component.join(" > ")}`);
  }
  for (const loop of pendingLoops) {
    const members = new Set(loop.members.map(arisingId));
    assert.ok(cycles.some((component) => component.every((id) => members.has(id))), `Resolved question is still listed: ${loop.id}`);
  }
  for (const members of loopMembers) for (const id of members) {
    const outside = parentsOf.get(id).some((cause) => cause.ontologicalRole === "arising" && !members.has(cause.parent));
    assert.ok(outside !== pendingOutside.has(id), outside ? `Resolved question is still listed: ${id}` : `Co-arising loop member lacks an outside arising cause: ${id}`);
  }
  return data;
}
