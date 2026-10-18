import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  NUCLEAR_LATTICE_ADMISSION as admission,
  NUCLEAR_LATTICE_CHECKS,
  NUCLEAR_LATTICE_ANALYTICAL_SOURCES,
  validateNuclearLatticeContracts
} from "../../models/causal-emergence/canonical/nuclear-lattice.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const relation = (data, id) => data.graph.relations.find((record) => record.id === `physics:${id}`);
const shiftId = "C-phys-beane2013-two-nucleon-shifts";
const bindingId = "C-phys-beane2013-two-nucleon-binding";
const definitionId = "D-phys-nuclear-lattice-energy-shift";
const ensembleId = "M-phys-beane2013-nuclear-ensemble-context";
const extractionId = "M-phys-beane2013-nuclear-extraction-context";
const inferenceId = "M-phys-beane2013-nuclear-binding-context";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Missing scientific mutation target: ${from}`);
  record.statement = record.statement.replace(from, to);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique reviewed boundary: ${fragment}`);
}

async function rejects(mutations) {
  const original = await source();
  validateNuclearLatticeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("nuclear lattice evidence keeps separate preparation, extraction and conditional binding contexts", async () => {
  assert.equal(NUCLEAR_LATTICE_CHECKS.size, 0);
  assert.equal(NUCLEAR_LATTICE_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.localStudySources, []);
  assert.equal(admission.definitions.length, 1);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  assert.deepEqual(admission.studyIds, [
    "beane2013-nuclear-ensemble", "beane2013-nuclear-extraction", "beane2013-nuclear-binding"
  ]);
  const data = await source();
  validateNuclearLatticeContracts(context(data));
  for (const id of admission.studyIds) {
    const study = data.physics.studies.find((record) => record.id === id);
    assert.equal(study.sourceId, "beane2013-nuclei");
    assert.equal(study.studyType, "computational-analysis");
    assert.ok(study.journal && study.doi);
  }
  for (const [id] of admission.contexts) {
    assert.equal(entity(data, id).kind, "context");
    assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${id}`).role, "model-context");
  }
});

test("published nuclear computations cannot borrow empirical or local-replay ownership", async () => {
  await rejects([
    ...admission.studyIds.map((id) => [`${id} is not a new detector acquisition`, (data) => {
      data.physics.studies.find((record) => record.id === id).studyType = "primary-experiment";
    }]),
    ["the binding fit borrows the independent mass-threshold arithmetic check", (data) => {
      claim(data, bindingId).status = "analytically-checked";
      claim(data, bindingId).checkIds = ["deuteron-beta-threshold-arithmetic"];
    }],
    ["the displayed relative energy becomes an experimental detector result", (data) => {
      entity(data, "beane2013-two-nucleon-shifts").description = "A direct experimental measurement of physical deuteron binding.";
    }],
    ["the computational preparation is displayed as a detector context", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:beane2013-nuclear-ensemble-context").role = "experimental-context";
    }]
  ]);
});

test("nuclear shifts retain their rest-frame sign, same-ensemble threshold and shared uncertainty", async () => {
  await rejects([
    ["the relative shift reverses its subtraction sign", (data) =>
      replace(data, definitionId, "E_X(L)-2M_B(L)", "2M_B(L)-E_X(L)")],
    ["a deficit becomes the absolute two-nucleon mass", (data) =>
      replace(data, definitionId, "B_L=-DeltaE_X(L)", "B_L=E_X(L)")],
    ["a physical proton mass replaces the same-theory threshold", (data) =>
      replace(data, definitionId, "from the same theory and ensemble", "from an independent physical proton-mass measurement")],
    ["rest-frame subtraction is extended to arbitrary moving energies", (data) =>
      dropLimit(data, definitionId, "Moving-frame energies")],
    ["finite-volume deficits are treated as independent physical binding measurements", (data) =>
      dropLimit(data, shiftId, "not three independent physical binding measurements")],
    ["the published statistical and scale errors exchange meaning", (data) =>
      replace(data, shiftId, "statistical, fitting systematic and scale errors", "scale, fitting systematic and statistical errors")]
  ]);
});

test("the computational ensemble keeps heavy flavor degeneracy separate from color and physical calibration", async () => {
  await rejects([
    ["the pseudoscalar mass is silently replaced by the physical pion mass", (data) =>
      replace(data, ensembleId, "approximately 806 MeV", "approximately 135 MeV")],
    ["flavor symmetry is identified with color symmetry", (data) =>
      dropLimit(data, ensembleId, "Flavor SU(3) degeneracy")],
    ["the bare clover parameter becomes a physical negative quark mass", (data) =>
      dropLimit(data, ensembleId, "bare Wilson/clover parameter")],
    ["an adopted private scale becomes an independently checked continuum calibration", (data) =>
      dropLimit(data, ensembleId, "private communication")],
    ["a physical-light-mass continuum extrapolation is added to the displayed ensemble", (data) => {
      entity(data, "beane2013-nuclear-ensemble-context").description +=
        " These ensembles provide a controlled extrapolation to physical light masses and zero lattice spacing.";
    }]
  ]);
});

test("Euclidean extraction does not certify every state or erase the operator and fitting error boundaries", async () => {
  await rejects([
    ["plateau stability becomes complete ground-state isolation", (data) =>
      dropLimit(data, extractionId, "complete variational determination")],
    ["shared correlators and unpublished covariance are presented as independently replayed", (data) =>
      dropLimit(data, extractionId, "full covariance")],
    ["the published three errors become a complete excited-state and continuum budget", (data) =>
      dropLimit(data, extractionId, "excited-state error budget")],
    ["finite channel labels become physical deuteron and dineutron measurements", (data) =>
      dropLimit(data, shiftId, "physical bound dineutron")]
  ]);
});

test("the reported binding averages remain conditional rather than a new extrapolation or independent corroboration", async () => {
  await rejects([
    ["the large-volume average becomes a fitted infinite-volume extrapolation", (data) =>
      replace(data, inferenceId, "they do not obtain a refined extrapolation by fitting Equation 5", "they fit Equation 5 to obtain a controlled infinite-volume extrapolation")],
    ["the asymptotic finite-volume form loses its assumed pole and state identification", (data) =>
      dropLimit(data, inferenceId, "presupposes the relevant pole")],
    ["rest and moving systems are treated as independent experiments", (data) =>
      dropLimit(data, inferenceId, "share configurations and thresholds")],
    ["the original conclusion is presented as present consensus", (data) =>
      dropLimit(data, inferenceId, "not a consensus determination")],
    ["reported binding errors become a complete independently reproduced budget", (data) =>
      dropLimit(data, bindingId, "averaging covariance")],
    ["one heavy-mass point supplies a quark-mass slope and bulk compressibility", (data) =>
      dropLimit(data, bindingId, "One heavy-mass point")]
  ]);
});

test("new nuclear input links remain complete and cannot acquire unrelated numerical predecessors", async () => {
  await rejects([
    ...admission.formalDependencies.map(([id]) => [`missing formal input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
    }]),
    ...admission.dependencies.map(([id]) => [`missing reported-analysis input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== `physics:${id}`);
    }]),
    ["an adjusted physical deuteron mass is an invented numerical lattice input", (data) => {
      const input = structuredClone(relation(data, admission.dependencies.find((record) => record[2] === "beane2013-two-nucleon-binding")[0]));
      input.id = "physics:unreviewed-rau-mass-beane2013-binding";
      input.source = "phys:rau-joint-adjustment";
      input.assertion = "The experimental adjusted masses numerically determine this lattice binding result.";
      data.graph.relations.push(input);
    }],
    ["an interpretation input acquires a universal carrier minimum", (data) => {
      relation(data, admission.dependencies[0][0]).carrier = { minimum: 1, critical: 1 };
    }],
    ["the visible binding limitations disappear", (data) => {
      entity(data, "beane2013-two-nucleon-binding").openObligations = [];
    }]
  ]);
  const changed = structuredClone(await source());
  const text = "This single mass point establishes the physical derivative of nuclear binding and universal bulk compressibility.";
  claim(changed, bindingId).statement = text;
  entity(changed, "beane2013-two-nucleon-binding").description = text;
  changed.readiness.nodeRoles.find((record) => record.nodeId === "phys:beane2013-two-nucleon-binding").denotes = text;
  assert.throws(() => validateCanonicalSource(changed), /nuclear|lattice/i,
    "The full validator reaches the exact contract after coordinated scientific/display drift");
});
