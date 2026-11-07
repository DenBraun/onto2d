import assert from "node:assert/strict";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { hashArtifactBytes, hashCanonical } from "@onto2d/kernel";
import { buildModelPack, verifyModelPack } from "@onto2d/model-pack";
import { encodeJsonValueTable } from "../../../packages/model-pack/src/json-value-table.js";
import { ROOT, loadCanonicalSource, verifyCanonicalEvidence } from "./source.mjs";
import { projectCanonicalInteractions } from "./interactions.mjs";
import { compileSourceReadiness } from "./readiness.mjs";
import { ARISING_ROOT, PENDING_ARISING_QUESTIONS, causalCompleteness } from "./arisings.mjs";

// Generated semantic data uses compact transport; manifest and indexes remain
// readable. The canonical source files retain their own readable formatting.
const COMPACT_FILES = new Set([
  "bundle.json", "model/nodes.json", "model/edges.json", "model/dictionaries.json"
]);
const ENCODINGS = new Set(["plain", "value-table-v1"]);
// Callers may pass value-table codec limits, for example a lower byte bound to test a rejection.
function serialize(relative, value, transportEncoding, transportLimits = {}) {
  const encoded = transportEncoding === "value-table-v1" && ["model/nodes.json", "bundle.json"].includes(relative)
    ? encodeJsonValueTable(value, transportLimits) : value;
  return `${JSON.stringify(encoded, null, COMPACT_FILES.has(relative) ? undefined : 2)}\n`;
}

export function compileCanonicalGraph({ graph, pilot, routing, routingPolicy, readiness, optics, visual, neural, physics, biochemistry, cellular, organismal, neuralSystems, socialSystems, arisingVocabulary, arisingCatalogue, causeEvidence }, evidence, sourceFiles) {
  const sourceReadiness = compileSourceReadiness(readiness);
  const nodeRoles = new Map(readiness.nodeRoles.map((r) => [r.nodeId, r]));
  const claims = new Map(graph.claims.map((c) => [c.id, c]));
  const sources = new Map(graph.sources.map((s) => [s.id, s]));
  assert.equal(sources.size, graph.sources.length, "Citation source IDs must be unique before projection");
  const studies = new Map([...pilot.studies, ...routing.studies, ...optics.studies, ...visual.studies, ...neural.studies, ...physics.studies, ...(biochemistry?.studies ?? []), ...(cellular?.studies ?? []), ...(organismal?.studies ?? []), ...(neuralSystems?.studies ?? []), ...(socialSystems?.studies ?? []), ...(causeEvidence?.studies ?? [])].map((s) => [s.id, s]));
  const interactions = projectCanonicalInteractions(graph, { studies: [...studies.values()] });
  const caseSummaries = new Map(interactions.cases.map((record) => [record.id, {
    id: record.id, title: record.title, anchorEntityId: record.anchorEntityId
  }]));
  const anchoredCases = new Map();
  const caseRefs = new Map();
  const anchorAnalogies = new Map();
  for (const record of interactions.cases) {
    const citedSources = new Set(record.sourceIds);
    for (const id of record.claimIds) for (const citation of claims.get(id).citations) citedSources.add(citation.sourceId);
    const detail = {
      ...record,
      claims: record.claimIds.map((id) => claims.get(id)),
      sources: [...citedSources].map((id) => sources.get(id)),
      studies: record.studyIds.map((id) => studies.get(id))
    };
    if (!anchoredCases.has(record.anchorEntityId)) anchoredCases.set(record.anchorEntityId, []);
    anchoredCases.get(record.anchorEntityId).push(detail);
    for (const id of record.entityIds) {
      if (!caseRefs.has(id)) caseRefs.set(id, []);
      caseRefs.get(id).push(caseSummaries.get(record.id));
    }
  }
  for (const analogy of interactions.analogies) {
    const related = analogy.caseIds.map((id) => caseSummaries.get(id));
    for (const record of related) {
      if (!anchorAnalogies.has(record.anchorEntityId)) anchorAnalogies.set(record.anchorEntityId, []);
      anchorAnalogies.get(record.anchorEntityId).push({ ...analogy, cases: related });
    }
  }
  function rationale(ids) {
    return ids.map((id) => {
      const claim = claims.get(id);
      for (const citation of claim.citations) assert.ok(sources.has(citation.sourceId), `Missing citation source: ${citation.sourceId}`);
      return claim;
    });
  }
  const homeOf = new Map((graph.arisings ?? []).flatMap((arising) => arising.memberIds.map((id) => [id, arising.id])));
  const nodes = graph.entities.map((entity) => ({
    ...entity, typeRole: entity.kind, scientificStatus: entity.status,
    ...(homeOf.has(entity.id) ? { layer: "technical", arisingId: homeOf.get(entity.id) } : {}),
    rationale: rationale(entity.claimIds), representation: nodeRoles.get(entity.id),
    ...(caseRefs.has(entity.id) ? { interactionCaseRefs: caseRefs.get(entity.id) } : {}),
    ...(anchoredCases.has(entity.id) ? { interactionCases: anchoredCases.get(entity.id) } : {}),
    ...(anchorAnalogies.has(entity.id) ? { interactionAnalogies: anchorAnalogies.get(entity.id) } : {})
  }));
  // Entity summaries derive from description at presentation time. Keep that
  // source text once; construction rules below retain their distinct summary.
  // Relations reference the complete claims in dictionaries.claims. Expanding
  // their sources and study contexts again on every edge duplicates evidence
  // without adding information. Detail projections resolve their complete
  // publications and preparation contexts from the same verified dictionary.
  const edges = graph.relations.map(({ kind, ...relation }) => ({ ...relation, relationLayer: kind }));
  for (const rule of graph.rules) {
    nodes.push({
      ...rule, level: 0, typeRole: "construction-rule", scientificStatus: "proposed-rule",
      ...(homeOf.has(rule.id) ? { layer: "technical", arisingId: homeOf.get(rule.id) } : {}),
      shortDescription: rule.conditions.join("; "),
      description: `${rule.name}. ALL declared premises and conditions are jointly required. No successful instance is asserted by this rule specification.`,
      rationale: rationale(rule.claimIds), representation: nodeRoles.get(rule.id)
    });
    for (const input of rule.inputs) edges.push({
      id: `${input.entityId}->${rule.id}`, source: input.entityId, target: rule.id,
      relationLayer: "descriptive", role: "rule-premise", ruleId: rule.id,
      inputLogic: "all", multiplicity: input, claimIds: rule.claimIds,
      assertion: "This entity is a declared joint premise of the proposed rule; no physical causal effect is asserted."
    });
    for (const output of rule.outputEntityIds) edges.push({
      id: `${rule.id}->${output}`, source: rule.id, target: output,
      relationLayer: "descriptive", role: "rule-conclusion", ruleId: rule.id,
      claimIds: rule.claimIds, instanceAdmission: "none",
      assertion: "This is the proposed output class if every rule gate passes; existence is not established."
    });
  }
  // Ontological layer: arisings with their technical subgraph, and the causes between them.
  // Display names come from the author's vocabulary so that viewers need not load it.
  const names = (key) => new Map((arisingVocabulary?.[key] ?? []).map((entry) => [entry.Id, entry.Name]));
  const levelNames = names("complexityLevels"), phaseNames = names("levelPhases"), roleNames = names("typeRoles");
  const dependencyNames = names("dependencyTypes");
  for (const arising of graph.arisings ?? []) {
    const { status, typeRole, ...record } = arising;
    const completeness = causalCompleteness(arising, graph.causes);
    nodes.push({
      ...record, layer: "arising", typeRole: (roleNames.get(typeRole) ?? String(typeRole)).toLowerCase(), typeRoleId: typeRole, scientificStatus: status,
      levelName: levelNames.get(arising.level) ?? null, phaseName: phaseNames.get(arising.phase) ?? null,
      shortDescription: arising.summary,
      completeness: { ...completeness, openSlotNames: completeness.openSlots.map((id) => dependencyNames.get(id) ?? String(id)),
        beyondGraphNames: completeness.beyondGraph.map((id) => dependencyNames.get(id) ?? String(id)) },
      rationale: rationale(arising.claimIds)
    });
  }
  for (const cause of graph.causes ?? []) {
    const { parent, child, ontologicalRole, ...record } = cause;
    edges.push({ ...record, source: parent, target: child, relationLayer: "causal", role: ontologicalRole, ontologicalRole });
  }
  const arisingDeclarations = arisingCatalogue ? { root: arisingCatalogue.root, principles: arisingCatalogue.principles ?? [],
    coArisingLoops: arisingCatalogue.coArisingLoops ?? [], pendingQuestions: PENDING_ARISING_QUESTIONS } : null;
  const rootNote = arisingCatalogue?.root?.statement ?? null;
  const arisingCount = (graph.arisings ?? []).length;
  const technicalCount = graph.entities.length + graph.rules.length;
  const recordNote = arisingCount
    ? `${arisingCount} arisings joined by ${(graph.causes ?? []).length} causes; ${technicalCount} technical records with explicit representation roles, source citations and evidence limits.`
    : `${technicalCount} records with explicit representation roles, source citations and evidence limits.`;
  return buildModelPack({
    model: { ...graph.model, description: graph.scope.summary },
    source: { id: "canonical-research-source-v27", files: sourceFiles, auditHash: hashCanonical("onto2d:canonical-reconstruction-evidence:v1", evidence) },
    nodes, edges,
    dictionaries: {
      sources: graph.sources, claims: graph.claims, constructionRules: graph.rules, interactions,
      recordEvidence: { format: "dictionary-references-v1" },
      scope: graph.scope, evidence, pilot, routing, routingPolicy,
      sourceReadiness, optics, visual, neural, physics,
      ...(biochemistry ? { biochemistry } : {}), ...(cellular ? { cellular } : {}), ...(organismal ? { organismal } : {}), ...(neuralSystems ? { neuralSystems } : {}), ...(socialSystems ? { socialSystems } : {}), ...(causeEvidence ? { causeEvidence } : {}),
      ...(arisingDeclarations ? { arisingDeclarations } : {}),
      presentation: {
        labels: { catalogTitle: "Ontology of arisings", searchPlaceholder: "Find an arising or a technical record", typeFilter: "Type", statusFilter: "Status", layerFilter: "Layer", parents: "Causes / premises", children: "Conditioned arisings / dependents" },
        ...(arisingCount ? { defaults: { layer: "arising", focusId: ARISING_ROOT } } : {}),
        ...(arisingVocabulary ? { arisingTable: {
          layer: "arising",
          levels: arisingVocabulary.complexityLevels.map((entry) => ({ value: entry.Id, name: entry.Name })),
          phases: arisingVocabulary.levelPhases.map((entry) => ({ value: entry.Id, name: entry.Name })),
          dependencyTypes: arisingVocabulary.dependencyTypes.map((entry) => ({ value: entry.Id, name: entry.Name })),
          causalDirections: arisingVocabulary.causalDirections.map((entry) => ({ value: entry.Id, name: entry.Name })),
          interactionModes: arisingVocabulary.interactionModes.map((entry) => ({ value: entry.Id, name: entry.Name })),
          ...(rootNote ? { rootNote } : {}),
          ...(arisingCatalogue?.domains ? { domains: arisingCatalogue.domains.map((domain) => ({ value: domain.id, name: domain.name, definition: domain.definition })) } : {}),
          ...(arisingCatalogue?.clusters ? { clusters: arisingCatalogue.clusters.map((cluster) => ({ value: cluster.id, name: cluster.name, domain: cluster.domain, level: cluster.level })) } : {})
        } } : {}),
        boundary: {
          title: "Ontology of causal arisings · Arisings, causes and their evidence",
          summary: "The outer layer records arisings and the causes between them in the author's table of complexity levels and phases; each cause is an author hypothesis until evidence supports it. Inside every arising, the technical layer separates definitions, scoped observations, computational results, experimental interventions and hypotheses. Each scientific claim records the passages read, the preparation and the limits of its evidence. Behavioral success and fitted models do not identify a unique neural mechanism; mathematical specifications do not establish physical instances or universal minima. Levels organize the display. Review of the source catalogue and cross-domain dependencies remains incomplete.",
          note: `${recordNote} Levels are display groups. Formal Core implementation is deferred.`
        }
      }
    }
  });
}

export async function buildCanonicalRelease() {
  const data = await loadCanonicalSource();
  const evidence = await verifyCanonicalEvidence();
  const paths = [...new Set([
    "references/canonical/graph.json", "references/canonical/schema.json",
    "models/causal-emergence/canonical/source.mjs", "models/causal-emergence/canonical/build.mjs",
    "models/causal-emergence/canonical/interactions.mjs",
    "models/causal-emergence/canonical/retinal.mjs",
    "models/causal-emergence/canonical/routing.mjs", "models/causal-emergence/canonical/verify-routing-data.py",
    "models/causal-emergence/canonical/readiness.mjs",
    "models/causal-emergence/canonical/optics.mjs",
    "models/causal-emergence/canonical/visual.mjs",
    "models/causal-emergence/canonical/neural.mjs",
    "models/causal-emergence/canonical/neural-systems.mjs",
    "models/causal-emergence/canonical/level-six.mjs",
    "models/causal-emergence/canonical/neural-foundations.mjs",
    "models/causal-emergence/canonical/neural-biology.mjs",
    "models/causal-emergence/canonical/neural-cognition.mjs",
    "references/canonical/neural-systems-review.json",
    "models/causal-emergence/canonical/social-systems.mjs",
    "models/causal-emergence/canonical/publication-identity.mjs",
    "models/causal-emergence/canonical/bridges.mjs",
    "models/causal-emergence/canonical/bridge-records.mjs",
    "models/causal-emergence/canonical/arisings.mjs",
    "models/causal-emergence/canonical/cause-evidence.mjs",
    "models/causal-emergence/canonical/level-seven.mjs",
    "models/causal-emergence/canonical/social-common.mjs",
    "models/causal-emergence/canonical/social-animals.mjs",
    "models/causal-emergence/canonical/social-institutions.mjs",
    "models/causal-emergence/canonical/social-information.mjs",
    "references/canonical/social-systems-review.json",
    "references/canonical/cause-evidence-review.json",
    "models/causal-emergence/canonical/physics.mjs",
    "models/causal-emergence/canonical/biochemistry.mjs",
    "models/causal-emergence/canonical/cellular.mjs",
    "models/causal-emergence/canonical/level-four.mjs",
    "models/causal-emergence/canonical/cell-structure.mjs",
    "models/causal-emergence/canonical/cell-regulation.mjs",
    "models/causal-emergence/canonical/cell-immunity.mjs",
    "models/causal-emergence/canonical/cell-phototransduction.mjs",
    "references/canonical/cellular-review.json",
    "models/causal-emergence/canonical/organismal.mjs",
    "models/causal-emergence/canonical/level-five.mjs",
    "models/causal-emergence/canonical/organism-morphogenesis.mjs",
    "models/causal-emergence/canonical/organism-physiology.mjs",
    "models/causal-emergence/canonical/organism-inflammation.mjs",
    "models/causal-emergence/canonical/organism-retinal.mjs",
    "references/canonical/organismal-review.json",
    "models/causal-emergence/canonical/level-three.mjs",
    "models/causal-emergence/canonical/condensate-lipid.mjs",
    "models/causal-emergence/canonical/phage-scope.mjs",
    "models/causal-emergence/canonical/genetic-information.mjs",
    "models/causal-emergence/canonical/network-cycle.mjs",
    "models/causal-emergence/canonical/chromatin-protein-modification.mjs",
    "models/causal-emergence/canonical/channels-complex.mjs",
    "models/causal-emergence/canonical/template-chemistry.mjs",
    "models/causal-emergence/canonical/redox-ph.mjs",
    "models/causal-emergence/canonical/biochemical-source-reuse.mjs",
    "models/causal-emergence/canonical/bioenergetics.mjs",
    "models/causal-emergence/canonical/model-vesicles.mjs",
    "models/causal-emergence/canonical/recognition-hydration.mjs",
    "models/causal-emergence/canonical/protein-folding.mjs",
    "models/causal-emergence/canonical/enzyme-catalysis.mjs",
    "models/causal-emergence/canonical/protein-allostery.mjs",
    "models/causal-emergence/canonical/rna-catalysis.mjs",
    "models/causal-emergence/canonical/biochemical-transfer.mjs",
    "models/causal-emergence/canonical/protein-quality-control.mjs",
    "models/causal-emergence/canonical/biochemical-kinetics.mjs",
    "models/causal-emergence/canonical/deuteron.mjs",
    "models/causal-emergence/canonical/mass-constraints.mjs",
    "models/causal-emergence/canonical/proton-decay.mjs",
    "models/causal-emergence/canonical/beam-neutron.mjs",
    "models/causal-emergence/canonical/alpha-gamma.mjs",
    "models/causal-emergence/canonical/bernauer.mjs",
    "models/causal-emergence/canonical/proton-moment.mjs",
    "models/causal-emergence/canonical/neutron-moment.mjs",
    "models/causal-emergence/canonical/nucleon-algebra.mjs",
    "models/causal-emergence/canonical/neutron-form-factor.mjs",
    "models/causal-emergence/canonical/nuclear-energetics.mjs",
    "models/causal-emergence/canonical/hadron-production.mjs",
    "models/causal-emergence/canonical/pion-decay.mjs",
    "models/causal-emergence/canonical/electron-moment.mjs",
    "models/causal-emergence/canonical/vacuum-polarization.mjs",
    "models/causal-emergence/canonical/hadron-family.mjs",
    "models/causal-emergence/canonical/meson-family.mjs",
    "models/causal-emergence/canonical/virtual-process.mjs",
    "models/causal-emergence/canonical/field-dynamics.mjs",
    "models/causal-emergence/canonical/electroweak.mjs",
    "models/causal-emergence/canonical/neutrino.mjs",
    "models/causal-emergence/canonical/solar-neutrino.mjs",
    "models/causal-emergence/canonical/atmospheric-neutrino.mjs",
    "models/causal-emergence/canonical/matter-neutrino.mjs",
    "models/causal-emergence/canonical/higgs-tau.mjs",
    "models/causal-emergence/canonical/accelerator-neutrino.mjs",
    "models/causal-emergence/canonical/weak-boson.mjs",
    "models/causal-emergence/canonical/higgs-coupling.mjs",
    "models/causal-emergence/canonical/weak-sector.mjs",
    "models/causal-emergence/canonical/z-lineshape.mjs",
    "models/causal-emergence/canonical/w-decay.mjs",
    "models/causal-emergence/canonical/gluon-formal.mjs",
    "models/causal-emergence/canonical/gluon-spin.mjs",
    "models/causal-emergence/canonical/gluon-color.mjs",
    "models/causal-emergence/canonical/gluon-dis.mjs",
    "models/causal-emergence/canonical/confinement-formal.mjs",
    "models/causal-emergence/canonical/confinement-lattice.mjs",
    "models/causal-emergence/canonical/confinement-string-breaking.mjs",
    "models/causal-emergence/canonical/confinement-charge-search.mjs",
    "models/causal-emergence/canonical/oscillation-coherence.mjs",
    "models/causal-emergence/canonical/oscillation-solar.mjs",
    "models/causal-emergence/canonical/oscillation-formal.mjs",
    "models/causal-emergence/canonical/gluon-flux.mjs",
    "models/causal-emergence/canonical/gluon-structure.mjs",
    "models/causal-emergence/canonical/nuclear-lattice.mjs",
    "models/causal-emergence/canonical/nuclear-state-review.mjs",
    "models/causal-emergence/canonical/nuclear-bridge.mjs",
    "models/causal-emergence/canonical/cosmology-formal.mjs",
    "models/causal-emergence/canonical/cosmology-classical.mjs",
    "models/causal-emergence/canonical/cosmology-cmb.mjs",
    "models/causal-emergence/canonical/cosmology-scope.mjs",
    "models/causal-emergence/canonical/rg-formal.mjs",
    "models/causal-emergence/canonical/eft-matching.mjs",
    "models/causal-emergence/canonical/rg-scope.mjs",
    "models/causal-emergence/canonical/photon-formal.mjs",
    "models/causal-emergence/canonical/photon-anticorrelation.mjs",
    "models/causal-emergence/canonical/photon-scope.mjs",
    "models/causal-emergence/canonical/neutrino-mass-formal.mjs",
    "models/causal-emergence/canonical/neutrino-mass-identifiability.mjs",
    "models/causal-emergence/canonical/neutrino-mass-scope.mjs",
    "models/causal-emergence/canonical/gauge-sector-model.mjs",
    "models/causal-emergence/canonical/gauge-sector-boundary.mjs",
    "models/causal-emergence/canonical/gauge-sector-scope.mjs",
    "models/causal-emergence/canonical/scalar-dispersion-isotropy.mjs",
    "models/causal-emergence/canonical/field-anisotropy-boundary.mjs",
    "models/causal-emergence/canonical/polarization-state-scope.mjs",
    "models/causal-emergence/canonical/scalar-propagation.mjs",
    "models/causal-emergence/canonical/directional-stability-scope.mjs",
    "models/causal-emergence/canonical/level-two.mjs",
    "models/causal-emergence/canonical/optical-propagation.mjs",
    "models/causal-emergence/canonical/surface-scattering.mjs",
    "models/causal-emergence/canonical/hyperfine.mjs",
    "models/causal-emergence/canonical/casimir-scope.mjs",
    "models/causal-emergence/canonical/electronic-decay.mjs",
    "models/causal-emergence/canonical/mossbauer.mjs",
    "models/causal-emergence/canonical/piezoelectric-ferroelectric.mjs",
    "models/causal-emergence/canonical/phase-regime.mjs",
    "models/causal-emergence/canonical/metallic-bonding.mjs",
    "models/causal-emergence/canonical/colloid-interface.mjs",
    "models/causal-emergence/canonical/liquid-organization.mjs",
    "models/causal-emergence/canonical/quantum-reaction.mjs",
    "models/causal-emergence/canonical/aromatic-conjugation.mjs",
    "models/causal-emergence/canonical/crystal-order.mjs",
    "models/causal-emergence/canonical/molecular-polarization.mjs",
    "models/causal-emergence/canonical/hydrogen-bond.mjs",
    "models/causal-emergence/canonical/dispersion.mjs",
    "models/causal-emergence/canonical/bbn.mjs",
    "models/causal-emergence/canonical/em-regime.mjs",
    "models/causal-emergence/canonical/atomic-structure.mjs",
    "models/causal-emergence/canonical/molecular-binding.mjs",
    "models/causal-emergence/canonical/ionic-interactions.mjs",
    "models/causal-emergence/canonical/molecular-resonance.mjs",
    "models/causal-emergence/canonical/entanglement-formal.mjs",
    "models/causal-emergence/canonical/entanglement-vacuum.mjs",
    "models/causal-emergence/canonical/entanglement-bell.mjs",
    "models/causal-emergence/canonical/entanglement-teleportation.mjs",
    "models/causal-emergence/canonical/lepton-formal.mjs",
    "models/causal-emergence/canonical/lepton-tau.mjs",
    "models/causal-emergence/canonical/lepton-electron.mjs",
    "models/causal-emergence/canonical/quark-formal.mjs",
    "models/causal-emergence/canonical/quark-dis.mjs",
    "models/causal-emergence/canonical/quark-top-width.mjs",
    "models/causal-emergence/canonical/geometric-model-data.mjs",
    "models/causal-emergence/canonical/verify-neurogenesis-data.py",
    "packages/model-pack/src/canonical-options.js", "packages/model-pack/src/index.js",
    "packages/model-pack/src/transport-layout.js", "packages/model-pack/src/cache.js",
    "packages/model-pack/src/json-value-table.js", "packages/model-pack/src/model-pack-error.js",
    "cases/level-0-oscillator/model-v1.json", "cases/level-0-oscillator/level-zero-validation-v3.json",
    "cases/level-0-oscillator/source-lock.json",
    ...data.graph.sources.filter((s) => s.path).map((s) => s.path)
  ])].sort();
  const files = await Promise.all(paths.map(async (p) => ({ path: p, hash: hashArtifactBytes(new Uint8Array(await readFile(path.join(ROOT, p)))) })));
  return compileCanonicalGraph(data, evidence, files);
}

export function releaseDirectory(pack) {
  return path.join(ROOT, "models/causal-emergence/releases", pack.manifest.model.version);
}

async function collectFiles(directory, prefix = "") {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}${entry.name}`;
    if (entry.isDirectory()) result.push(...await collectFiles(path.join(directory, entry.name), `${relative}/`));
    else result.push(relative);
  }
  return result.sort();
}

export async function verifyCanonicalRelease(pack, directory = releaseDirectory(pack), { transportEncoding = "plain", transportLimits = {} } = {}) {
  assert.ok(ENCODINGS.has(transportEncoding), "Unknown canonical transport encoding");
  const expected = { "manifest.json": pack.manifest, ...pack.files, "bundle.json": pack };
  assert.deepEqual(await collectFiles(directory), Object.keys(expected).sort(), "Release file inventory differs");
  for (const [relative, value] of Object.entries(expected)) {
    assert.equal(await readFile(path.join(directory, relative), "utf8"), serialize(relative, value, transportEncoding, transportLimits), `Stale canonical derivative: ${relative}`);
  }
  verifyModelPack(pack);
  return pack;
}

/** Existing releases may only be replayed byte-for-byte, never replaced. */
export async function writeCanonicalRelease(pack, directory = releaseDirectory(pack), { transportEncoding = "plain", transportLimits = {} } = {}) {
  assert.ok(ENCODINGS.has(transportEncoding), "Unknown canonical transport encoding");
  verifyModelPack(pack);
  let exists = false;
  try { await readdir(directory); exists = true; } catch (error) { if (error.code !== "ENOENT") throw error; }
  if (exists) {
    try { return await verifyCanonicalRelease(pack, directory, { transportEncoding, transportLimits }); }
    catch (error) { throw new Error(`Refusing to overwrite release ${pack.manifest.model.version}; choose a new source version. ${error.message}`); }
  }
  // Encoding can reject a valid semantic pack at its transport limit. Check
  // every output before creating an immutable version directory.
  const serialized = new Map(Object.entries({ "manifest.json": pack.manifest, ...pack.files, "bundle.json": pack })
    .map(([relative, value]) => [relative, serialize(relative, value, transportEncoding, transportLimits)]));
  await mkdir(directory, { recursive: true });
  for (const [relative, bytes] of serialized) {
    const target = path.join(directory, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, bytes, { flag: "wx" });
  }
  return verifyCanonicalRelease(pack, directory, { transportEncoding, transportLimits });
}

export async function run({ verify = false } = {}) {
  const pack = await buildCanonicalRelease();
  const options = { transportEncoding: "value-table-v1" };
  if (verify) await verifyCanonicalRelease(pack, undefined, options);
  else await writeCanonicalRelease(pack, undefined, options);
  console.log(`${verify ? "Verified" : "Built"} canonical reconstruction ${pack.manifest.model.version}: ${pack.manifest.statistics.nodeCount} records, ${pack.manifest.statistics.edgeCount} scoped connections; ${pack.manifest.rootHash}`);
  return pack;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run({ verify: process.argv.includes("--verify") }).catch((error) => { console.error(error); process.exitCode = 1; });
}
