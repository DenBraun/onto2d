import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv";
import { validateRetinalPilot } from "./retinal.mjs";
import { validateRoutingReview } from "./routing.mjs";
import { validateDictionaryReview } from "./dictionaries.mjs";
import { verifyDictionaryWitnesses } from "./dictionary-witnesses.mjs";
import { validateSourceReadiness } from "./readiness.mjs";
import { validateOpticalReview } from "./optics.mjs";
import { validateNeuralReview } from "./neural.mjs";
import { validateVisualReview } from "./visual.mjs";
import { BELL_CHECKS, validatePhysicsDefinitions } from "./physics.mjs";
import { DEUTERON_CHECKS } from "./deuteron.mjs";
import { MASS_CONSTRAINT_CHECKS } from "./mass-constraints.mjs";
import { verifyOpticalWitnesses } from "./optical-witnesses.mjs";
import { loadGeometricModelData, verifyGeometricModelData } from "./geometric-model-data.mjs";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const json = async (relative) => JSON.parse(await readFile(path.join(ROOT, relative), "utf8"));
const schema = await json("references/canonical/schema.json");
const validate = new Ajv({ allErrors: true, strict: true }).compile(schema);
const proposalText = await readFile(path.join(ROOT, "docs/ONTO2D_FORMAL_CORE.md"), "utf8");
const CHECK_IDS = new Set([
  "operator-sign", "stationarity-not-minimum", "simple-cycle-minimum",
  "balance-not-localization", "objecthood-negative", ...BELL_CHECKS.keys(), ...DEUTERON_CHECKS.keys(), ...MASS_CONSTRAINT_CHECKS.keys()
]);

function index(records, subject) {
  const result = new Map();
  for (const record of records) {
    assert.ok(!result.has(record.id), `Duplicate ${subject}: ${record.id}`);
    result.set(record.id, record);
  }
  return result;
}


/** Current source integrity and evidence contract; prose still requires scientific review. */
export function validateCanonicalSource(data) {
  assert.ok(validate(data), `Canonical source schema: ${JSON.stringify(validate.errors)}`);
  const { graph } = data;
  const sources = index(graph.sources, "source");
  const claims = index(graph.claims, "claim");
  const entities = index(graph.entities, "entity");
  const rules = index(graph.rules, "rule");
  const relations = index(graph.relations, "relation");
  index([...graph.entities, ...graph.rules], "graph node");
  for (const source of sources.values()) {
    assert.equal(source.path === null, source.sha256 === null, `Unbound source ${source.id}`);
    assert.ok(source.path || source.url, `Source has no retrievable location: ${source.id}`);
    const unsignedNotice = source.id === "naccache2026-correction" && source.doi === "10.1093/nc/niag020";
    if (source.kind === "research-publication") assert.ok(source.url && (source.authors.length || unsignedNotice) && Number.isInteger(source.year), `Missing publication metadata: ${source.id}`);
  }
  for (const claim of claims.values()) {
    for (const citation of claim.citations) assert.ok(sources.has(citation.sourceId), `Unknown citation ${citation.sourceId}`);
    for (const check of claim.checkIds) {
      assert.ok(CHECK_IDS.has(check), `Unknown check ${check}`);
      if (BELL_CHECKS.has(check)) assert.equal(BELL_CHECKS.get(check), claim.id, "Bell arithmetic attached to an unverified claim");
      if (DEUTERON_CHECKS.has(check)) assert.equal(DEUTERON_CHECKS.get(check), claim.id, "Grouped or rounded mass arithmetic attached to an unverified claim");
      if (MASS_CONSTRAINT_CHECKS.has(check)) assert.equal(MASS_CONSTRAINT_CHECKS.get(check), claim.id, "Conditional mass arithmetic attached to an unverified claim");
    }
    if (claim.status === "analytically-checked") {
      assert.ok(claim.checkIds.some((id) => id !== "objecthood-negative"), `Analytical claim lacks a witness: ${claim.id}`);
      assert.ok(claim.citations.some((c) => c.sourceId === "witnesses" && c.role === "supports"), `Analytical claim lacks executable evidence: ${claim.id}`);
    }
    if (claim.status === "case-negative") {
      assert.ok(claim.checkIds.includes("objecthood-negative"), `Negative claim lacks case check: ${claim.id}`);
      assert.ok(claim.citations.some((c) => c.sourceId === "level-zero-v3" && c.role === "supports"), `Negative claim lacks case evidence: ${claim.id}`);
    }
    if (claim.kind === "method") assert.ok(claim.citations.some((c) => c.role === "method" && sources.get(c.sourceId).kind === "research-publication"), `Method lacks publication: ${claim.id}`);
  }
  for (const entity of entities.values()) {
    assert.ok(entity.claimIds.length, `Entity lacks a claim: ${entity.id}`);
    for (const id of entity.claimIds) assert.ok(claims.has(id), `Unknown entity claim ${id}`);
    for (const coord of entity.sourceCoordinates) assert.ok(sources.has(coord.sourceId), `Unknown coordinate source ${coord.sourceId}`);
    if (entity.kind.includes("class")) assert.equal(entity.status, "class-uninstantiated", "No physical instances are admitted");
  }
  for (const rule of rules.values()) {
    const inputIds = new Set();
    for (const input of rule.inputs) {
      assert.ok(entities.has(input.entityId), `Unknown premise ${input.entityId}`);
      assert.ok(!inputIds.has(input.entityId), `Duplicate premise ${input.entityId}`);
      inputIds.add(input.entityId);
      assert.ok(input.maxCount === null || input.maxCount >= input.minCount, `Inverted multiplicity ${rule.id}`);
      if (input.minCount > 1) assert.ok(input.distinct && input.role === "candidate-instances", `Missing distinct-instance semantics ${rule.id}`);
    }
    for (const id of rule.outputEntityIds) assert.ok(entities.has(id) && !inputIds.has(id), `Invalid conclusion ${id}`);
    for (const id of rule.claimIds) assert.ok(claims.has(id), `Unknown rule claim ${id}`);
  }
  for (const relation of relations.values()) {
    assert.ok(entities.has(relation.source) && entities.has(relation.target) && relation.source !== relation.target, `Invalid relation endpoints ${relation.id}`);
    for (const id of relation.claimIds) assert.ok(claims.has(id), `Unknown relation claim ${id}`);
    const support = relation.claimIds.map((id) => claims.get(id));
    if (relation.kind === "descriptive") assert.ok(support.some((c) => ["definition", "method-contract"].includes(c.status)), `Description lacks a definition or method: ${relation.id}`);
    else {
      assert.ok(relation.contextIds?.length, `Functional relation lacks preparation: ${relation.id}`);
      assert.ok(support.some((c) => ["publication-supported", "literature-synthesis"].includes(c.status)), `Functional relation lacks evidence: ${relation.id}`);
    }
  }
  const context = { sources, claims, entities, relations };
  validatePhysicsDefinitions(data, context);
  validateRetinalPilot(data, context);
  validateOpticalReview(data, context);
  validateVisualReview(data, context);
  validateNeuralReview(data, context);
  validateRoutingReview(data, context);
  validateDictionaryReview(data);
  validateSourceReadiness(data, null, proposalText);
  return data;
}

export async function loadCanonicalSource() {
  const fields = {
    graph: "graph", pilot: "retinal-review", routing: "routing-review", routingPolicy: "routing-policy",
    dictionaryReview: "dictionary-review", readiness: "source-readiness", optics: "optical-review", visual: "visual-review", neural: "neural-review", physics: "physics-review"
  };
  const data = validateCanonicalSource(Object.fromEntries(await Promise.all(Object.entries(fields).map(async ([key, file]) => [key, await json(`references/canonical/${file}.json`)]))));
  await Promise.all(data.graph.sources.filter((s) => s.path).map(async (source) => {
    const target = path.resolve(ROOT, source.path);
    assert.ok(target.startsWith(`${ROOT}${path.sep}`), "Source path escapes the project");
    const bytes = await readFile(target);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), source.sha256, `Source bytes changed: ${source.path}; review before rebinding`);
  }));
  return data;
}

export async function verifyCanonicalEvidence() {
  const massConstraints = spawnSync("python3", ["models/causal-emergence/canonical/verify-mass-constraints.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(massConstraints.status, 0, `Conditional mass arithmetic failed: ${massConstraints.error ?? massConstraints.stderr}`);
  const deuteron = spawnSync("python3", ["models/causal-emergence/canonical/verify-deuteron-data.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(deuteron.status, 0, `Deuteron figure/arithmetic checks failed: ${deuteron.error ?? deuteron.stderr}`);
  const bell = spawnSync("python3", ["models/causal-emergence/canonical/verify-bell-data.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(bell.status, 0, `Bell event-table checks failed: ${bell.error ?? bell.stderr}`);
  const neurogenesis = spawnSync("python3", ["models/causal-emergence/canonical/verify-neurogenesis-data.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(neurogenesis.status, 0, `Neurogenesis workbook checks failed: ${neurogenesis.error ?? neurogenesis.stderr}`);
  const routing = spawnSync("python3", ["models/causal-emergence/canonical/verify-routing-data.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(routing.status, 0, `Routing data replay failed: ${routing.error ?? routing.stderr}`);
  const result = spawnSync("python3", ["models/causal-emergence/reconstruction/verify.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(result.status, 0, `Foundation witnesses failed: ${result.error ?? result.stderr}`);
  const witnesses = JSON.parse(result.stdout);
  const artifact = await json("cases/level-0-oscillator/artifacts/level-zero-validation-v3.json");
  assert.equal(artifact.conclusion.declaredModelLevelZeroValidated, false, "Objecthood disposition changed: reassess the canonical claims and gates");
  assert.equal(artifact.conclusion.empiricalValidationClaimed, false);
  assert.equal(artifact.conclusion.declaredCaseExecutionComplete, true);
  return {
    massConstraintData: JSON.parse(massConstraints.stdout),
    deuteronData: JSON.parse(deuteron.stdout),
    bellData: JSON.parse(bell.stdout),
    geometricModelData: verifyGeometricModelData(await loadGeometricModelData()),
    opticalWitnesses: verifyOpticalWitnesses(),
    dictionaryWitnesses: verifyDictionaryWitnesses(),
    routingData: JSON.parse(routing.stdout),
    neurogenesisData: JSON.parse(neurogenesis.stdout),
    mathematicalWitnesses: witnesses.mathematicalWitnesses,
    objecthoodConclusion: artifact.conclusion,
    limit: "Replayed finite mathematical, vocabulary and optical witnesses, deposited Bell event-table filtering and conditional null-tail arithmetic, selected geometric-model readouts, published workbook cells, grouped deuteron figure fits, rounded-input mass/recoil arithmetic, conditional molecular-state branch arithmetic and the bound case disposition. This build does not reproduce raw Bell acquisition, stopping decisions or RNG calibration, network inference or training, the nonlinear solver, sequencing analyses or biological experiments, original mass acquisition, state-assignment likelihoods, correlated mass adjustments, molecular theory, crystal calibration or the full CODATA adjustment, or independently validate scientific prose."
  };
}
