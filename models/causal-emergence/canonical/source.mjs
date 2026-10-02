import { ACCELERATOR_NEUTRINO_CHECKS, ACCELERATOR_NEUTRINO_ANALYTICAL_SOURCES } from "./accelerator-neutrino.mjs";
import { WEAK_BOSON_CHECKS, WEAK_BOSON_ANALYTICAL_SOURCES } from "./weak-boson.mjs";
import { HIGGS_COUPLING_CHECKS, HIGGS_COUPLING_ANALYTICAL_SOURCES } from "./higgs-coupling.mjs";
import { SOLAR_NEUTRINO_CHECKS, SOLAR_NEUTRINO_ANALYTICAL_SOURCES } from "./solar-neutrino.mjs";
import { ATMOSPHERIC_NEUTRINO_CHECKS, ATMOSPHERIC_NEUTRINO_ANALYTICAL_SOURCES } from "./atmospheric-neutrino.mjs";
import { MATTER_NEUTRINO_CHECKS, MATTER_NEUTRINO_ANALYTICAL_SOURCES } from "./matter-neutrino.mjs";
import { HIGGS_TAU_CHECKS, HIGGS_TAU_ANALYTICAL_SOURCES } from "./higgs-tau.mjs";
import { FIELD_DYNAMICS_CHECKS, FIELD_DYNAMICS_ANALYTICAL_SOURCES } from "./field-dynamics.mjs";
import { ELECTROWEAK_CHECKS, ELECTROWEAK_ANALYTICAL_SOURCES } from "./electroweak.mjs";
import { NEUTRINO_CHECKS, NEUTRINO_ANALYTICAL_SOURCES } from "./neutrino.mjs";
import { HADRON_FAMILY_CHECKS, HADRON_FAMILY_ANALYTICAL_SOURCES } from "./hadron-family.mjs";
import { MESON_FAMILY_CHECKS, MESON_FAMILY_ANALYTICAL_SOURCES } from "./meson-family.mjs";
import { VIRTUAL_PROCESS_CHECKS, VIRTUAL_PROCESS_ANALYTICAL_SOURCES } from "./virtual-process.mjs";
import { PION_DECAY_CHECKS, PION_DECAY_ANALYTICAL_SOURCES } from "./pion-decay.mjs";
import { ELECTRON_MOMENT_CHECKS, ELECTRON_MOMENT_ANALYTICAL_SOURCES } from "./electron-moment.mjs";
import { VACUUM_POLARIZATION_CHECKS, VACUUM_POLARIZATION_ANALYTICAL_SOURCES } from "./vacuum-polarization.mjs";
import { NUCLEON_ALGEBRA_CHECKS, NUCLEON_ALGEBRA_ANALYTICAL_SOURCES } from "./nucleon-algebra.mjs";
import { NEUTRON_FORM_FACTOR_CHECKS, NEUTRON_FORM_FACTOR_ANALYTICAL_SOURCES } from "./neutron-form-factor.mjs";
import { NUCLEAR_ENERGETICS_CHECKS, NUCLEAR_ENERGETICS_ANALYTICAL_SOURCES } from "./nuclear-energetics.mjs";
import { HADRON_PRODUCTION_CHECKS, HADRON_PRODUCTION_ANALYTICAL_SOURCES } from "./hadron-production.mjs";
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
import { ALPHA_GAMMA_CHECKS } from "./alpha-gamma.mjs";
import { NEUTRON_MOMENT_CHECKS } from "./neutron-moment.mjs";
import { PROTON_MOMENT_CHECKS } from "./proton-moment.mjs";
import { BERNAUER_CHECKS } from "./bernauer.mjs";
import { BEAM_NEUTRON_CHECKS } from "./beam-neutron.mjs";
import { PROTON_DECAY_CHECKS } from "./proton-decay.mjs";
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
  "balance-not-localization", "objecthood-negative", ...BELL_CHECKS.keys(), ...DEUTERON_CHECKS.keys(), ...MASS_CONSTRAINT_CHECKS.keys(), ...PROTON_DECAY_CHECKS.keys(), ...BEAM_NEUTRON_CHECKS.keys(), ...ALPHA_GAMMA_CHECKS.keys(), ...BERNAUER_CHECKS.keys(), ...PROTON_MOMENT_CHECKS.keys(), ...NEUTRON_MOMENT_CHECKS.keys(), ...NUCLEON_ALGEBRA_CHECKS.keys(), ...NEUTRON_FORM_FACTOR_CHECKS.keys(), ...NUCLEAR_ENERGETICS_CHECKS.keys(), ...HADRON_PRODUCTION_CHECKS.keys(), ...PION_DECAY_CHECKS.keys(), ...ELECTRON_MOMENT_CHECKS.keys(), ...VACUUM_POLARIZATION_CHECKS.keys(), ...HADRON_FAMILY_CHECKS.keys(), ...MESON_FAMILY_CHECKS.keys(), ...VIRTUAL_PROCESS_CHECKS.keys(), ...FIELD_DYNAMICS_CHECKS.keys(), ...ELECTROWEAK_CHECKS.keys(), ...NEUTRINO_CHECKS.keys(), ...SOLAR_NEUTRINO_CHECKS.keys(), ...ATMOSPHERIC_NEUTRINO_CHECKS.keys(), ...MATTER_NEUTRINO_CHECKS.keys(), ...HIGGS_TAU_CHECKS.keys(), ...ACCELERATOR_NEUTRINO_CHECKS.keys(), ...WEAK_BOSON_CHECKS.keys(), ...HIGGS_COUPLING_CHECKS.keys()
]);

const LOCAL_CHECKS = new Map([...NUCLEON_ALGEBRA_CHECKS, ...NEUTRON_FORM_FACTOR_CHECKS, ...NUCLEAR_ENERGETICS_CHECKS, ...HADRON_PRODUCTION_CHECKS, ...PION_DECAY_CHECKS, ...ELECTRON_MOMENT_CHECKS, ...VACUUM_POLARIZATION_CHECKS, ...HADRON_FAMILY_CHECKS, ...MESON_FAMILY_CHECKS, ...VIRTUAL_PROCESS_CHECKS, ...FIELD_DYNAMICS_CHECKS, ...ELECTROWEAK_CHECKS, ...NEUTRINO_CHECKS, ...SOLAR_NEUTRINO_CHECKS, ...ATMOSPHERIC_NEUTRINO_CHECKS, ...MATTER_NEUTRINO_CHECKS, ...HIGGS_TAU_CHECKS, ...ACCELERATOR_NEUTRINO_CHECKS, ...WEAK_BOSON_CHECKS, ...HIGGS_COUPLING_CHECKS]);
const ANALYTICAL_SOURCES = new Map([...NUCLEON_ALGEBRA_ANALYTICAL_SOURCES, ...NEUTRON_FORM_FACTOR_ANALYTICAL_SOURCES, ...NUCLEAR_ENERGETICS_ANALYTICAL_SOURCES, ...HADRON_PRODUCTION_ANALYTICAL_SOURCES, ...PION_DECAY_ANALYTICAL_SOURCES, ...ELECTRON_MOMENT_ANALYTICAL_SOURCES, ...VACUUM_POLARIZATION_ANALYTICAL_SOURCES, ...HADRON_FAMILY_ANALYTICAL_SOURCES, ...MESON_FAMILY_ANALYTICAL_SOURCES, ...VIRTUAL_PROCESS_ANALYTICAL_SOURCES, ...FIELD_DYNAMICS_ANALYTICAL_SOURCES, ...ELECTROWEAK_ANALYTICAL_SOURCES, ...NEUTRINO_ANALYTICAL_SOURCES, ...SOLAR_NEUTRINO_ANALYTICAL_SOURCES, ...ATMOSPHERIC_NEUTRINO_ANALYTICAL_SOURCES, ...MATTER_NEUTRINO_ANALYTICAL_SOURCES, ...HIGGS_TAU_ANALYTICAL_SOURCES, ...ACCELERATOR_NEUTRINO_ANALYTICAL_SOURCES, ...WEAK_BOSON_ANALYTICAL_SOURCES, ...HIGGS_COUPLING_ANALYTICAL_SOURCES]);

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
      if (LOCAL_CHECKS.has(check)) assert.equal(LOCAL_CHECKS.get(check), claim.id, "Local arithmetic attached to an unreproduced or unrelated claim");
      if (BELL_CHECKS.has(check)) assert.equal(BELL_CHECKS.get(check), claim.id, "Bell arithmetic attached to an unverified claim");
      if (DEUTERON_CHECKS.has(check)) assert.equal(DEUTERON_CHECKS.get(check), claim.id, "Grouped or rounded mass arithmetic attached to an unverified claim");
      if (NEUTRON_MOMENT_CHECKS.has(check)) assert.equal(NEUTRON_MOMENT_CHECKS.get(check), claim.id, "Printed neutron ratio arithmetic attached to an unreproduced Ramsey fit or absolute calibration");
      if (PROTON_MOMENT_CHECKS.has(check)) assert.equal(PROTON_MOMENT_CHECKS.get(check), claim.id, "Printed moment arithmetic attached to an unreproduced frequency acquisition or resonance fit");
      if (BERNAUER_CHECKS.has(check)) assert.equal(BERNAUER_CHECKS.get(check), claim.id, "Table verification attached to an unreproduced form-factor fit");
      if (ALPHA_GAMMA_CHECKS.has(check)) assert.equal(ALPHA_GAMMA_CHECKS.get(check), claim.id, "Printed AlphaGamma arithmetic attached to an unreproduced calibration");
      if (BEAM_NEUTRON_CHECKS.has(check)) assert.equal(BEAM_NEUTRON_CHECKS.get(check), claim.id, "Printed beam arithmetic attached to an unreproduced acquisition or inference");
      if (PROTON_DECAY_CHECKS.has(check)) assert.equal(PROTON_DECAY_CHECKS.get(check), claim.id, "Printed proton bookkeeping attached to an unverified lifetime claim");
      if (MASS_CONSTRAINT_CHECKS.has(check)) assert.equal(MASS_CONSTRAINT_CHECKS.get(check), claim.id, "Conditional mass arithmetic attached to an unverified claim");
    }
    if (claim.status === "analytically-checked") {
      assert.ok(claim.checkIds.some((id) => id !== "objecthood-negative"), `Analytical claim lacks a witness: ${claim.id}`);
      const sourceId = ANALYTICAL_SOURCES.get(claim.id) ?? "witnesses";
      assert.ok(claim.citations.some((c) => c.sourceId === sourceId && c.role === "supports"), `Analytical claim lacks executable evidence: ${claim.id}`);
      assert.ok(sources.get(sourceId)?.kind === "executable-check" && sources.get(sourceId).path, `Analytical evidence is not bound code: ${claim.id}`);
      if (ANALYTICAL_SOURCES.has(claim.id)) assert.ok(claim.checkIds.some((id) => LOCAL_CHECKS.get(id) === claim.id), `Local analytical claim lacks its owned check: ${claim.id}`);
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
  const fieldDynamics = spawnSync("python3", ["models/causal-emergence/canonical/verify-field-dynamics.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(fieldDynamics.status, 0, `FieldDynamics finite checks failed: ${fieldDynamics.error ?? fieldDynamics.stderr}`);
  const electroweak = spawnSync("python3", ["models/causal-emergence/canonical/verify-electroweak.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(electroweak.status, 0, `Electroweak finite checks failed: ${electroweak.error ?? electroweak.stderr}`);
  const neutrino = spawnSync("python3", ["models/causal-emergence/canonical/verify-neutrino.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(neutrino.status, 0, `Neutrino finite checks failed: ${neutrino.error ?? neutrino.stderr}`);
  const hadronFamily = spawnSync("python3", ["models/causal-emergence/canonical/verify-hadron-family.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(hadronFamily.status, 0, `HadronFamily finite checks failed: ${hadronFamily.error ?? hadronFamily.stderr}`);
  const mesonFamily = spawnSync("python3", ["models/causal-emergence/canonical/verify-meson-family.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(mesonFamily.status, 0, `MesonFamily finite checks failed: ${mesonFamily.error ?? mesonFamily.stderr}`);
  const virtualProcess = spawnSync("python3", ["models/causal-emergence/canonical/verify-virtual-process.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(virtualProcess.status, 0, `VirtualProcess finite checks failed: ${virtualProcess.error ?? virtualProcess.stderr}`);
  const pionDecay = spawnSync("python3", ["models/causal-emergence/canonical/verify-pion-decay.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(pionDecay.status, 0, `PionDecay finite checks failed: ${pionDecay.error ?? pionDecay.stderr}`);
  const electronMoment = spawnSync("python3", ["models/causal-emergence/canonical/verify-electron-moment.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(electronMoment.status, 0, `ElectronMoment finite checks failed: ${electronMoment.error ?? electronMoment.stderr}`);
  const vacuumPolarization = spawnSync("python3", ["models/causal-emergence/canonical/verify-vacuum-polarization.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(vacuumPolarization.status, 0, `VacuumPolarization finite checks failed: ${vacuumPolarization.error ?? vacuumPolarization.stderr}`);
  const nucleonAlgebra = spawnSync("python3", ["models/causal-emergence/canonical/verify-nucleon-algebra.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(nucleonAlgebra.status, 0, `NucleonAlgebra finite checks failed: ${nucleonAlgebra.error ?? nucleonAlgebra.stderr}`);
  const neutronFormFactor = spawnSync("python3", ["models/causal-emergence/canonical/verify-neutron-form-factor.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(neutronFormFactor.status, 0, `NeutronFormFactor finite checks failed: ${neutronFormFactor.error ?? neutronFormFactor.stderr}`);
  const nuclearEnergetics = spawnSync("python3", ["models/causal-emergence/canonical/verify-nuclear-energetics.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(nuclearEnergetics.status, 0, `NuclearEnergetics finite checks failed: ${nuclearEnergetics.error ?? nuclearEnergetics.stderr}`);
  const hadronProduction = spawnSync("python3", ["models/causal-emergence/canonical/verify-hadron-production.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(hadronProduction.status, 0, `HadronProduction finite checks failed: ${hadronProduction.error ?? hadronProduction.stderr}`);
  const neutronMoment = spawnSync("python3", ["models/causal-emergence/canonical/verify-neutron-moment.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(neutronMoment.status, 0, `Neutron moment printed arithmetic failed: ${neutronMoment.error ?? neutronMoment.stderr}`);
  const protonMoment = spawnSync("python3", ["models/causal-emergence/canonical/verify-proton-moment.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(protonMoment.status, 0, `Proton moment printed arithmetic failed: ${protonMoment.error ?? protonMoment.stderr}`);
  const bernauer = spawnSync("python3", ["models/causal-emergence/canonical/verify-bernauer-data.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(bernauer.status, 0, `Bound MAMI table checks failed: ${bernauer.error ?? bernauer.stderr}`);
  const alphaGamma = spawnSync("python3", ["models/causal-emergence/canonical/verify-alpha-gamma.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(alphaGamma.status, 0, `AlphaGamma printed arithmetic failed: ${alphaGamma.error ?? alphaGamma.stderr}`);
  const beamNeutron = spawnSync("python3", ["models/causal-emergence/canonical/verify-beam-neutron.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(beamNeutron.status, 0, `Beam neutron printed arithmetic failed: ${beamNeutron.error ?? beamNeutron.stderr}`);
  const protonDecay = spawnSync("python3", ["models/causal-emergence/canonical/verify-proton-decay.py"], { cwd: ROOT, encoding: "utf8", maxBuffer: 1024 * 1024 });
  assert.equal(protonDecay.status, 0, `Proton-decay printed bookkeeping failed: ${protonDecay.error ?? protonDecay.stderr}`);
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
    nucleonAlgebraData: JSON.parse(nucleonAlgebra.stdout),
    neutronFormFactorData: JSON.parse(neutronFormFactor.stdout),
    nuclearEnergeticsData: JSON.parse(nuclearEnergetics.stdout),
    hadronProductionData: JSON.parse(hadronProduction.stdout),
    pionDecayData: JSON.parse(pionDecay.stdout),
    electronMomentData: JSON.parse(electronMoment.stdout),
    vacuumPolarizationData: JSON.parse(vacuumPolarization.stdout),
    hadronFamilyData: JSON.parse(hadronFamily.stdout),
    mesonFamilyData: JSON.parse(mesonFamily.stdout),
    virtualProcessData: JSON.parse(virtualProcess.stdout),
    fieldDynamicsData: JSON.parse(fieldDynamics.stdout),
    electroweakData: JSON.parse(electroweak.stdout),
    neutrinoData: JSON.parse(neutrino.stdout),
    neutronMomentData: JSON.parse(neutronMoment.stdout),
    protonMomentData: JSON.parse(protonMoment.stdout),
    bernauerData: JSON.parse(bernauer.stdout),
    protonDecayData: JSON.parse(protonDecay.stdout),
    beamNeutronData: JSON.parse(beamNeutron.stdout),
    alphaGammaData: JSON.parse(alphaGamma.stdout),
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
    limit: "Replayed finite mathematical, vocabulary and optical witnesses, deposited Bell event-table filtering and conditional null-tail arithmetic, selected geometric-model readouts, published workbook cells, grouped deuteron figure fits, rounded-input mass/recoil arithmetic, conditional molecular-state branch arithmetic, printed proton-decay bookkeeping, beam-monitor rescaling, AlphaGamma rate identities and printed calibration arithmetic, bound MAMI form-factor table identities and printed fit-census arithmetic, proton magnetic-moment ratio identities and printed uncertainty bookkeeping, neutron/mercury ratio corrections and conditional reference calibration, exact nucleon charge/color algebra, selected neutron form-factor table and interpolation arithmetic, conditional deuteron beta-decay energetics, selected neutral-hadron production table integrals, printed pion decay-ratio corrections and conditional efficiency algebra, electron moment and ideal frequency-ratio algebra, conditional normalized scattering-shape and inverse-coupling algebra, supplied baryon flavor weights and historical mass spacing, meson trace-projector and synthetic cascade-response bookkeeping, synthetic external-state and exchange-transfer kinematics, finite free-mode evolution, declared electroweak mass algebra, selected reactor-neutrino energies and synthetic phase algebra, and the bound case disposition. This build does not reproduce raw Bell acquisition, stopping decisions or RNG calibration, network inference or training, the nonlinear solver, sequencing analyses or biological experiments, original mass acquisition, state-assignment likelihoods, correlated mass adjustments, molecular theory, crystal calibration or the full CODATA adjustment, proton-decay detector response or lifetime likelihoods, beam count acquisition, proton-loss fitting, monitor calibration or temporal stability, MAMI raw events, acceptance simulation, form-factor optimization, covariance or radii, proton spin-state classification, frequency acquisition, resonance fitting or systematic-effect models, neutron Ramsey fits, field-map/gradient reconstruction or upstream mercury calibration, neutron form-factor nuclear response or covariance, QCD Fock coefficients or confinement, full hadron-production reconstruction or extrapolation, PIENU timing fits or response-tail inference, electron resonance fits or correlated cavity corrections, L3 event selection, BHLUMI predictions or shape likelihoods, historical Omega tracking or mass reconstruction, KLOE detector response or pseudoscalar mixing, QED amplitudes or loop integrals, full field dynamics, collider mass or significance fits, reactor flux/detector modeling or neutrino likelihoods, or independently validate scientific prose."
  };
}
