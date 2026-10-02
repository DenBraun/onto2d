import assert from "node:assert/strict";
import test from "node:test";
import {
  HIGGS_COUPLING_ADMISSION,
  HIGGS_COUPLING_CHECKS,
  HIGGS_COUPLING_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/higgs-coupling.mjs";

test("Higgs mass and coupling conventions remain formal definitions without borrowed evidence", () => {
  assert.equal(HIGGS_COUPLING_CHECKS.size, 0);
  assert.equal(HIGGS_COUPLING_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(HIGGS_COUPLING_ADMISSION[key], [], key);
  assert.deepEqual(HIGGS_COUPLING_ADMISSION.definitions.map(([id]) => id), [
    "phys:higgs-doublet-background", "phys:charged-fermion-higgs-coupling"
  ]);
  const endpoints = HIGGS_COUPLING_ADMISSION.formalDependencies.map(([, pair]) => pair);
  assert.ok(endpoints.some(([from, to]) => from === "phys:standard-model" && to === "phys:higgs-doublet-background"));
  for (const input of ["phys:higgs-doublet-background", "phys:lepton-fields", "phys:quark-fields"])
    assert.ok(endpoints.some(([from, to]) => from === input && to === "phys:charged-fermion-higgs-coupling"), input);
});

let source;
async function rejectChanges(mutations) {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  source ??= await loadCanonicalSource();
  for (const [name, change] of mutations) {
    const copy = structuredClone(source);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
const claim = (data, id) => data.graph.claims.find((c) => c.id === `D-phys-${id}`);
function replaceStatement(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), "Mutation must alter the intended formula");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, id, fragment) {
  const record = claim(data, id);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.ok(record.limitations.length < before, "Mutation must remove a reviewed limit");
}
function removeEdge(data, id) {
  const before = data.graph.relations.length;
  data.graph.relations = data.graph.relations.filter((r) => r.id !== `physics:${id}`);
  assert.equal(data.graph.relations.length, before - 1, "Mutation must remove the intended dependency");
}

test("Higgs background retains the declared quartic normalization and classical gauge scope", async () => {
  await rejectChanges([
    ["PDG squared quartic parameter is silently changed", (x) => replaceStatement(x, "higgs-doublet-background", "(lambda_P^2/2)*rho^2", "(lambda_P/2)*rho^2")],
    ["minimum loses its factor of two", (x) => replaceStatement(x, "higgs-doublet-background", "v^2=-2*mu2/lambda_P^2", "v^2=-mu2/lambda_P^2")],
    ["radial mass loses its squared coupling", (x) => replaceStatement(x, "higgs-doublet-background", "M_H^2=lambda_P^2*v^2", "M_H^2=lambda_P*v^2")],
    ["unbroken photon gains a tree mass", (x) => replaceStatement(x, "higgs-doublet-background", "M_photon=0", "M_photon=g*v/2")],
    ["declared signs and historical parameter distinction disappear", (x) => removeLimit(x, "higgs-doublet-background", "lambda_P denotes")],
    ["gauge coordinates become an observed vacuum medium", (x) => removeLimit(x, "higgs-doublet-background", "unitary-gauge coordinates")],
    ["classical minimum becomes absolute quantum-vacuum stability", (x) => removeLimit(x, "higgs-doublet-background", "absolute stability")],
    ["doublet background loses its specified model premise", (x) => removeEdge(x, "standard-model-higgs-doublet-background")]
  ]);
});

test("charged-fermion Higgs coupling does not predict hierarchy, neutrino masses or composite masses", async () => {
  await rejectChanges([
    ["mass and one-Higgs coefficient lose the square-root normalization", (x) => replaceStatement(x, "charged-fermion-higgs-coupling", "y_i/sqrt(2)=m_i/v", "y_i=m_i/v")],
    ["independent masses become a predicted numerical hierarchy", (x) => replaceStatement(x, "charged-fermion-higgs-coupling", "it does not calculate their numerical hierarchy", "it calculates their numerical hierarchy")],
    ["mass-basis and diagonal charged-Dirac boundary disappear", (x) => removeLimit(x, "charged-fermion-higgs-coupling", "charged Dirac fermions")],
    ["minimal field content becomes a demonstrated neutrino-mass mechanism", (x) => removeLimit(x, "charged-fermion-higgs-coupling", "no right-handed neutrinos")],
    ["quark mass convention becomes constituent mass addition", (x) => removeLimit(x, "charged-fermion-higgs-coupling", "composite hadron")],
    ["field assignments become derived chirality or universal formation", (x) => removeLimit(x, "charged-fermion-higgs-coupling", "derive chirality")],
    ["coupling loses the common background convention", (x) => removeEdge(x, "higgs-doublet-background-charged-fermion-higgs-coupling")],
    ["charged-lepton mass formula loses its field-content restriction", (x) => removeEdge(x, "lepton-fields-charged-fermion-higgs-coupling")],
    ["quark mass formula loses its distinct field-content premise", (x) => removeEdge(x, "quark-fields-charged-fermion-higgs-coupling")]
  ]);
});

test("Higgs definitions cannot borrow collider data, numerical checks or physical-instance admission", async () => {
  await rejectChanges([
    ["definition borrows an unrelated executable calculation", (x) => {
      const record = claim(x, "higgs-doublet-background");
      record.status = "analytically-checked";
      record.checkIds = ["neutrino-phase-data-algebra"];
    }],
    ["formal charged-fermion relation becomes a measured all-species coupling", (x) => {
      const record = claim(x, "charged-fermion-higgs-coupling");
      record.status = "publication-supported";
      record.statement += " All charged-fermion couplings are experimentally measured by this definition.";
    }],
    ["formal dependency becomes a physical maintenance relation", (x) => {
      const edge = x.graph.relations.find((r) => r.id === "physics:higgs-doublet-background-charged-fermion-higgs-coupling");
      edge.kind = "functional";
      edge.role = "maintenance-dependency";
    }],
    ["source reading expands silently to a global fit", (x) => {
      x.graph.sources.find((s) => s.id === "pdg2025-electroweak").review.extent = "full-text";
    }],
    ["gauge background definition becomes an observed instance", (x) => {
      x.readiness.nodeRoles.find((r) => r.nodeId === "phys:higgs-doublet-background").instanceAdmission = "empirical-instance";
    }]
  ]);
});
