import assert from "node:assert/strict";
import test from "node:test";
import {
  PHOTON_FORMAL_ADMISSION, PHOTON_FORMAL_CHECKS, PHOTON_FORMAL_ANALYTICAL_SOURCES,
  validatePhotonFormalContracts
} from "../../models/causal-emergence/canonical/photon-formal.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const field = "D-phys-electromagnetic-photon-field";
const modes = "D-phys-transverse-photon-fock-state";
const packet = "D-phys-one-photon-wavepacket-boundary";
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).description = record.statement;
}
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one limit: ${fragment}`);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validatePhotonFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validatePhotonFormalContracts(context(data)), /Photon formal .* changed/, name);
  }
}

test("photon formal admission is a Maxwell definition block without empirical or replay results", () => {
  assert.deepEqual(PHOTON_FORMAL_ADMISSION.definitions, [
    ["phys:electromagnetic-photon-field", field],
    ["phys:transverse-photon-fock-state", modes],
    ["phys:one-photon-wavepacket-boundary", packet]
  ]);
  assert.equal(PHOTON_FORMAL_ADMISSION.formalDependencies.length, 2);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(PHOTON_FORMAL_ADMISSION[key], []);
  assert.equal(PHOTON_FORMAL_CHECKS.size, 0);
  assert.equal(PHOTON_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("Maxwell field keeps its gauge constraint, spacetime, mass assumption and neutrality interpretation", async () => {
  await rejects([
    ["the selected model is not a medium or curved-space calculation", (d) => replace(d, field, "Minkowski spacetime", "an arbitrary dispersive curved medium")],
    ["the Maxwell action sign and metric convention stay explicit", (d) => replace(d, field, "S=-(1/4)", "S=(1/4)")],
    ["field strength is antisymmetric", (d) => replace(d, field, "partial_mu A_nu-partial_nu A_mu", "partial_mu A_nu+partial_nu A_mu")],
    ["formal neutrality cannot become a measured exact charge", (d) => replace(d, field, "rather than a measured zero-charge result", "proving the experimentally exact zero photon charge")],
    ["radiation-gauge A0 requires source and boundary qualification", (d) => dropLimit(d, field, "Charged sources or different boundaries")],
    ["masslessness of a chosen action is not a theorem about every extension", (d) => dropLimit(d, field, "every gauge-invariant extension")],
    ["the free sector is not an interacting charged-sector construction", (d) => dropLimit(d, field, "infrared dressing")]
  ]);
});

test("photon modes retain two transverse bosonic polarizations and a normal-ordered free Hamiltonian", async () => {
  await rejects([
    ["only two independent physical polarizations are admitted", (d) => replace(d, modes, "r=1,2", "r=0,1,2,3")],
    ["physical polarization vectors must be transverse", (d) => replace(d, modes, "p dot epsilon_r=0", "p dot epsilon_r=1")],
    ["the selected CCR and integration measure cannot drift", (d) => replace(d, modes, "(2pi)^3 delta_rs delta^3(p-q)", "2|p| (2pi)^3 delta_rs delta^3(p-q)")],
    ["the free photon dispersion is massless", (d) => replace(d, modes, "dPi_p |p|", "dPi_p sqrt(|p|^2+m^2)")],
    ["a scalar construction cannot replace the gauge constraint", (d) => dropLimit(d, modes, "Maxwell gauge constraint")],
    ["the polarization basis is not a global vacuum direction", (d) => dropLimit(d, modes, "globally continuous real transverse basis")],
    ["a delta-normalized momentum mode is not a localized state", (d) => dropLimit(d, modes, "operator-valued distributions")]
  ]);
});

test("one-photon wavepacket preserves normalization, energy, free evolution and measurement boundaries", async () => {
  await rejects([
    ["one-photon norm is fixed to unity", (d) => replace(d, packet, "|f_r(p)|^2=1", "|f_r(p)|^2=2")],
    ["the packet needs finite mean energy", (d) => replace(d, packet, "be finite", "be arbitrarily divergent")],
    ["one-photon creation is not annihilation of the vacuum", (d) => replace(d, packet, "f_r(p)a_r_dagger(p)|0>", "f_r(p)a_r(p)|0>")],
    ["positive-energy free time evolution has the declared phase", (d) => replace(d, packet, "exp(-i|p|t)", "exp(+i|p|t)")],
    ["wavepacket normalization cannot imply a sharply localized trajectory", (d) => dropLimit(d, packet, "position-eigenstate")],
    ["number one does not certify source or detector response", (d) => dropLimit(d, packet, "instrument model")],
    ["a free conserved number cannot become an interacting permanent identity", (d) => dropLimit(d, packet, "interacting QED")]
  ]);
});

test("photon source reading cannot expand into an unread scalar substitution or empirical mass bound", async () => {
  await rejects([
    ["the actual gauge-field URL stays bound", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-free-maxwell").url = "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"; }],
    ["a formal lecture cannot become a primary photon experiment", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-free-maxwell").review.extent = "full-primary-photon-experiment"; }],
    ["reading limits cannot become precision mass-charge evidence", (d) => { d.graph.sources.find((s) => s.id === "tong-qft-free-maxwell").review.limit = "A measured exact zero mass and charge."; }],
    ["a formal packet cannot borrow an unrelated executable check", (d) => { claim(d, packet).checkIds = ["field-dynamics-algebra"]; }],
    ["formal photon definitions cannot acquire a measured status", (d) => { claim(d, field).status = "publication-supported"; }]
  ]);
});

test("photon displays, roles and dependencies preserve their formal rather than observed meaning", async () => {
  const mutations = PHOTON_FORMAL_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} retains its actual source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }],
    [`${id} cannot become an observed occurrence`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }],
    [`${id} cannot display a distinguishable permanent identity`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "A distinguishable object with a permanent identity through every absorption."; }]
  ]);
  for (const [id] of PHOTON_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`required definition link ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`formal input ${id} cannot become a measured intervention`, (d) => { d.graph.relations.find((r) => r.id === id).assertion = "A measured intervention produces a persistent photon identity."; }]);
  }
  await rejects(mutations);
});
