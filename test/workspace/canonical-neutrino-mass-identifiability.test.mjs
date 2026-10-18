import assert from "node:assert/strict";
import test from "node:test";
import {
  NEUTRINO_MASS_IDENTIFIABILITY_ADMISSION,
  NEUTRINO_MASS_IDENTIFIABILITY_CHECKS,
  NEUTRINO_MASS_IDENTIFIABILITY_ANALYTICAL_SOURCES,
  validateNeutrinoMassIdentifiabilityContracts
} from "../../models/causal-emergence/canonical/neutrino-mass-identifiability.mjs";

let sourcePromise;
function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const nodeId = "phys:oscillation-mass-identifiability";
const claimId = "D-phys-oscillation-mass-identifiability";
const relationId = "physics:neutrino-vacuum-phase-oscillation-mass-identifiability";
const claim = (data) => data.graph.claims.find((record) => record.id === claimId);
const entity = (data) => data.graph.entities.find((record) => record.id === nodeId);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replace(data, from, to) {
  const record = claim(data);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
  entity(data).description = record.statement;
}
function dropLimit(data, fragment) {
  const record = claim(data), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one limit: ${fragment}`);
  entity(data).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateNeutrinoMassIdentifiabilityContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateNeutrinoMassIdentifiabilityContracts(context(data)),
      /Neutrino mass identifiability .* changed/, name);
  }
}

test("mass identifiability is a formal vacuum dependency without a new fit, study or numerical replay", () => {
  assert.deepEqual(NEUTRINO_MASS_IDENTIFIABILITY_ADMISSION.definitions, [[nodeId, claimId]]);
  assert.deepEqual(NEUTRINO_MASS_IDENTIFIABILITY_ADMISSION.formalDependencies,
    [[relationId, ["phys:neutrino-vacuum-phase", nodeId]]]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(NEUTRINO_MASS_IDENTIFIABILITY_ADMISSION[key], []);
  assert.equal(NEUTRINO_MASS_IDENTIFIABILITY_CHECKS.size, 0);
  assert.equal(NEUTRINO_MASS_IDENTIFIABILITY_ANALYTICAL_SOURCES.size, 0);
});

test("common squared-mass offset stays an invariance of the leading vacuum probability within its validity", async () => {
  await rejects([
    ["leading relativistic expansion cannot become exact arbitrary-energy kinematics", (d) => replace(d,
      "leading coherent ultrarelativistic vacuum model", "exact coherent model at every energy")],
    ["mixing, propagation inputs and energy are held fixed", (d) => replace(d,
      "hold U, L and E fixed", "fit U, L and E independently for each mass shift")],
    ["the common amplitude phase is not a measured probability shift", (d) => replace(d,
      "leaving P=|A|^2 unchanged", "changing P=|A|^2 and fixing the absolute mass scale")],
    ["shifts must respect nonnegative squared masses", (d) => replace(d,
      "m_i^2+kappa>=0", "m_i^2+kappa<0")],
    ["large offsets cannot silently leave the ultrarelativistic regime", (d) => replace(d,
      "(m_i^2+kappa)/E^2<<1", "arbitrarily large (m_i^2+kappa)/E^2")],
    ["conditional invariance cannot be extended to source kinematics and time of flight", (d) => dropLimit(d, "time of flight")],
    ["approximation validity is not an experimental mass bound", (d) => dropLimit(d, "measured upper bound")]
  ]);
});

test("at least two massive states requires nondegenerate nonnegative three-state inputs and allows one zero mass", async () => {
  await rejects([
    ["the positivity argument must keep its nonnegative assumption", (d) => replace(d,
      "three nonnegative squared masses", "arbitrary signed squared masses")],
    ["two equal nonzero differences cannot establish three distinct values", (d) => replace(d,
      "both nonzero and unequal", "both nonzero, whether equal or unequal")],
    ["the conclusion must not require every mass to be positive", (d) => replace(d,
      "at least two masses are nonzero", "all three masses are nonzero")],
    ["the explicit degenerate and one-zero counterexamples remain visible", (d) => dropLimit(d, "(q,0,0)")],
    ["historical two-flavor fits cannot become an exact joint three-state result", (d) => dropLimit(d, "joint closed three-state likelihood")]
  ]);
});

test("formal mass identifiability retains the reviewed vacuum citation and cannot acquire empirical status", async () => {
  await rejects([
    ["a global-fit section cannot replace the reviewed formal vacuum passage", (d) => {
      claim(d).citations[0].locator = "2025 Section 14.7 global fit: every neutrino mass is measured";
    }],
    ["a formal consequence cannot borrow a published detector study", (d) => { claim(d).contextIds = ["kamland2005-oscillation-fit"]; }],
    ["an algebraic statement does not own an independent local replay", (d) => { claim(d).checkIds = ["neutrino-phase-data-algebra"]; }],
    ["the formal statement cannot be recast as a new measurement", (d) => { claim(d).status = "publication-supported"; }],
    ["source coordinates must stay explicit on the displayed definition", (d) => { entity(d).sourceCoordinates = []; }],
    ["the formal role does not admit an observed mass occurrence", (d) => {
      d.readiness.nodeRoles.find((record) => record.nodeId === nodeId).instanceAdmission = "observed";
    }],
    ["the dependency remains required", (d) => { d.graph.relations = d.graph.relations.filter((record) => record.id !== relationId); }],
    ["a phase formula is not a measured mass-generation intervention", (d) => {
      d.graph.relations.find((record) => record.id === relationId).assertion = "Vacuum propagation is measured to create absolute neutrino mass.";
    }]
  ]);
});
