import assert from "node:assert/strict";
import test from "node:test";
import {
  GAUGE_SECTOR_MODEL_ADMISSION, GAUGE_SECTOR_MODEL_CHECKS,
  GAUGE_SECTOR_MODEL_ANALYTICAL_SOURCES, validateGaugeSectorModelContracts
} from "../../models/causal-emergence/canonical/gauge-sector-model.mjs";

const id = "phys:standard-model-sector-decomposition";
const claimId = "D-phys-standard-model-sector-decomposition";
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (data) => data.graph.claims.find((record) => record.id === claimId);
const entity = (data) => data.graph.entities.find((record) => record.id === id);
function replaceStatement(data, from, to) {
  const record = claim(data);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
  entity(data).description = record.statement;
}
function replaceLimit(data, from, to) {
  const record = claim(data);
  const index = record.limitations.findIndex((limit) => limit.includes(from));
  assert.notEqual(index, -1, `Mutation requires ${from}`);
  record.limitations[index] = record.limitations[index].replace(from, to);
  entity(data).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateGaugeSectorModelContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateGaugeSectorModelContracts(context(data)),
      /Gauge sector model .* changed/, name);
  }
}

test("gauge-sector model admission declares one coupled field specification without measured or replay records", () => {
  assert.deepEqual(GAUGE_SECTOR_MODEL_ADMISSION.definitions, [[id, claimId]]);
  assert.deepEqual(GAUGE_SECTOR_MODEL_ADMISSION.formalDependencies.map(([, endpoints]) => endpoints), [
    ["phys:standard-model", id], ["phys:qcd", id],
    ["phys:weak-gauge-currents", id], ["phys:higgs-doublet-background", id]
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(GAUGE_SECTOR_MODEL_ADMISSION[key], []);
  assert.equal(GAUGE_SECTOR_MODEL_CHECKS.size, 0);
  assert.equal(GAUGE_SECTOR_MODEL_ANALYTICAL_SOURCES.size, 0);
});

test("declared chiral representations retain their explicit hypercharge conversion and field convention", async () => {
  await rejects([
    ["PDG doubled hypercharges cannot be used with Q=T3+Y", (d) => replaceStatement(d, "(3,2,1/6)", "(3,2,1/3)")],
    ["right-handed fermions are not left-handed charge conjugates", (d) => replaceStatement(d, "u_R~(3,1,2/3)", "u_R~(3bar,1,-2/3)")],
    ["color and weak representation slots cannot be exchanged", (d) => replaceStatement(d, "(3,2,1/6)", "(2,3,1/6)")],
    ["a weak lepton doublet has the declared half-unit hypercharge", (d) => replaceStatement(d, "(1,2,-1/2)", "(1,2,-1)")],
    ["the Higgs doublet is a scalar with the stated charge assignment", (d) => replaceStatement(d, "scalar is phi~(1,2,1/2)", "vector is phi~(1,2,0)")],
    ["the adopted color representation is the fundamental", (d) => replaceStatement(d, "3 means the color fundamental", "3 means three constituent particles")],
    ["the source normalization conversion must remain explicit", (d) => replaceLimit(d, "Y=Y_PDG/2", "Y=Y_PDG")],
    ["a weak flavor component cannot silently become a fixed mass eigenstate", (d) => replaceLimit(d, "dprime is a weak-interaction basis component", "dprime always denotes one down-type mass eigenstate")]
  ]);
});

test("product-group bookkeeping preserves shared interactions rather than independent physical subsystems", async () => {
  await rejects([
    ["all gauge factors acting on a quark doublet remain in its derivative", (d) => replaceLimit(d, "+i*gprime*Y*B_mu", "")],
    ["generator action must follow the representation of each field", (d) => replaceLimit(d, "zero action for a trivial factor", "identical nonzero action for all factors")],
    ["the quark doublet is shared by color and electroweak interactions", (d) => replaceLimit(d, "Q_L multiplet is charged under all three factors", "Q_L multiplet belongs to one isolated gauge subsystem")],
    ["commuting factors cannot imply independent full dynamics", (d) => replaceLimit(d, "do not make the full interacting sectors dynamically isolated", "make the full interacting sectors dynamically isolated")],
    ["a bosonic scalar is not another gauge vector mediator", (d) => replaceStatement(d, "without being a gauge vector mediator", "and is necessarily a gauge vector mediator")],
    ["generator dimensions cannot become measured particle multiplicities", (d) => replaceLimit(d, "neither a total physical-polarization count nor an observed particle population", "an exact observed physical-particle population")]
  ]);
});

test("electroweak field combinations retain the conditional background and chosen coupling conventions", async () => {
  await rejects([
    ["weak angle is fixed by the declared ratio", (d) => replaceLimit(d, "thetaW=arctan(gprime/g)", "thetaW=arctan(g/gprime)")],
    ["the photon field uses the stated B and W3 coefficients", (d) => replaceLimit(d, "A_mu=B_mu*cos(thetaW)+W_mu^3*sin(thetaW)", "A_mu=B_mu*sin(thetaW)+W_mu^3*cos(thetaW)")],
    ["neutral-field orthogonality keeps the relative sign", (d) => replaceLimit(d, "Z_mu=-B_mu*sin(thetaW)", "Z_mu=B_mu*sin(thetaW)")],
    ["charged-field normalization cannot drift", (d) => replaceLimit(d, "i*W_mu^2)/sqrt(2)", "i*W_mu^2)/2")],
    ["a basis map does not derive the input gauge content", (d) => replaceLimit(d, "they do not derive the original gauge factors", "they derive the original gauge factors")],
    ["tree conventions cannot be relabeled an all-orders fit", (d) => replaceLimit(d, "No all-orders mixing or mass fit is supplied", "An all-orders mixing and mass fit is supplied")]
  ]);
});

test("minimal model, local gauge structure and source evidence cannot acquire unreviewed inference", async () => {
  await rejects([
    ["minimal field content excludes a right-handed neutrino", (d) => replaceLimit(d, "contains no nu_R", "includes a measured nu_R")],
    ["this decomposition does not select a neutrino mass origin", (d) => replaceLimit(d, "selects no Dirac/Majorana mechanism", "proves a unique Majorana mechanism")],
    ["local gauge algebra does not fix a measured global quotient", (d) => replaceLimit(d, "No global gauge-group quotient", "A unique measured global gauge-group quotient")],
    ["three generations are an adopted model premise", (d) => replaceStatement(d, "For each of three generations", "By deriving exactly three generations")],
    ["a formal decomposition is not a measured field population", (d) => { claim(d).status = "publication-supported"; }],
    ["this formal result cannot borrow a numerical replay", (d) => { claim(d).checkIds = ["photon-sector-group-measurement"]; }],
    ["PDG conventions must keep their actual reviewed extent", (d) => { d.graph.sources.find((s) => s.id === "pdg2025-electroweak").review.limit = "All global fits and underlying primary acquisitions independently reproduced."; }],
    ["the quark charge source cannot be switched to an unrelated table", (d) => { d.graph.sources.find((s) => s.id === "pdg2025-quarks").url = "https://pdg.lbl.gov/2025/tables/rpp2025-sum-leptons.pdf"; }]
  ]);
});

test("gauge-sector display, readiness and definition dependencies preserve the same formal scope", async () => {
  const mutations = [
    ["source coordinates cannot disappear from the display", (d) => { entity(d).sourceCoordinates = []; }],
    ["a definition has no observed instance admission", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }],
    ["the displayed referent cannot become temporal sector formation", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "A measured sequence generating isolated gauge sectors."; }]
  ];
  for (const [relationId] of GAUGE_SECTOR_MODEL_ADMISSION.formalDependencies) {
    mutations.push([`required definition input ${relationId}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== relationId); }]);
    mutations.push([`formal relation ${relationId} cannot become causal maintenance`, (d) => { d.graph.relations.find((r) => r.id === relationId).role = "necessary-maintenance"; }]);
  }
  await rejects(mutations);
});
