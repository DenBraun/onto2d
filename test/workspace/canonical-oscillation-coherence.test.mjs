import assert from "node:assert/strict";
import test from "node:test";
import {
  OSCILLATION_COHERENCE_ADMISSION, OSCILLATION_COHERENCE_CHECKS,
  OSCILLATION_COHERENCE_ANALYTICAL_SOURCES, validateOscillationCoherenceContracts
} from "../../models/causal-emergence/canonical/oscillation-coherence.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const production = "D-phys-neutrino-production-detection-coherence";
const overlap = "D-phys-neutrino-wave-packet-overlap";
const averaging = "D-phys-neutrino-oscillation-averaging";
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one limit: ${fragment}`);
}
function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
}
async function rejects(mutations) {
  const original = await source();
  validateOscillationCoherenceContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateOscillationCoherenceContracts(context(data)), /Oscillation coherence .* changed/, name);
  }
}

test("coherence adds three formal definitions without a measured length, experiment or numerical replay", () => {
  assert.deepEqual(OSCILLATION_COHERENCE_ADMISSION.definitions, [
    ["phys:neutrino-production-detection-coherence", production],
    ["phys:neutrino-wave-packet-overlap", overlap],
    ["phys:neutrino-oscillation-averaging", averaging]
  ]);
  assert.equal(OSCILLATION_COHERENCE_ADMISSION.formalDependencies.length, 5);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(OSCILLATION_COHERENCE_ADMISSION[key], []);
  assert.equal(OSCILLATION_COHERENCE_CHECKS.size, 0);
  assert.equal(OSCILLATION_COHERENCE_ANALYTICAL_SOURCES.size, 0);
});

test("interaction coherence retains intrinsic uncertainties, localization and process limits", async () => {
  await rejects([
    ["instrument bin width cannot replace the intrinsic uncertainty", (d) => replace(d, production, "intrinsic process uncertainties, not the beam energy spread or reconstructed-energy bin size", "the reconstructed-energy bin size")],
    ["a sufficient regime cannot become a universal numerical theorem", (d) => dropLimit(d, production, "necessary-and-sufficient")],
    ["long quasistationary packets do not universally forbid oscillations", (d) => dropLimit(d, production, "packet length be shorter")],
    ["unitary mixing alone does not remove near-threshold dependence", (d) => dropLimit(d, production, "reaction energy release")],
    ["an apparatus-frame condition cannot lose its stated units and frame", (d) => { claim(d, production).scope = "An exact frame-independent criterion at every energy."; }],
    ["a formal condition cannot become a detector observation", (d) => { claim(d, production).status = "experimentally-supported"; }]
  ]);
});

test("packet separation retains detection coherence, group velocity and the vacuum approximation", async () => {
  await rejects([
    ["phase velocity cannot replace the group velocity", (d) => replace(d, overlap, "v_gi=p_i/E_i", "v_gi=E_i/p_i")],
    ["separation length cannot invert the velocity difference", (d) => replace(d, overlap, "v_g sigma_x/Delta v_g", "v_g sigma_x*Delta v_g")],
    ["emission alone cannot determine the effective overlap", (d) => replace(d, overlap, "includes both emission and detection coherence", "depends only on the source size")],
    ["zero separation and packet spreading need their boundary", (d) => dropLimit(d, overlap, "equal group velocities")],
    ["separated emitted packets cannot silently exclude coherent detection", (d) => dropLimit(d, overlap, "source-only packet width")],
    ["interference suppression is not fundamental collapse or absorption", (d) => dropLimit(d, overlap, "fundamental nonunitarity")],
    ["a source-defined scale cannot borrow an analytical check", (d) => { claim(d, overlap).checkIds = ["neutrino-flavor-probability"]; }]
  ]);
});

test("observable averaging keeps positive normalized channel weights and differs from coherent superposition", async () => {
  await rejects([
    ["event weighting cannot become a coherent amplitude sum", (d) => replace(d, averaging, "P_bar = integral dL dE w(L,E) P(L,E)", "P_bar = |integral dL dE w(L,E) A(L,E)|^2")],
    ["normalized weights cannot become arbitrary signed functions", (d) => replace(d, averaging, "w>=0 and integral w=1", "arbitrary signed w")],
    ["an average cannot certify exposure-normalized counts or cross-channel closure", (d) => dropLimit(d, averaging, "Actual event predictions")],
    ["ensemble widths cannot become intrinsic packet uncertainty", (d) => dropLimit(d, averaging, "Macroscopic source/detector positions")],
    ["the stationary approximation cannot become an equal-energy postulate", (d) => dropLimit(d, averaging, "stationary-source equivalence")],
    ["a smoothed pattern cannot certify a fundamental decoherence law", (d) => dropLimit(d, averaging, "fundamental decoherence mechanism")]
  ]);
});

test("displayed coherence records, source version and formal input links stay bound", async () => {
  const mutations = OSCILLATION_COHERENCE_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} cannot display a measured decoherence rate`, (d) => { d.graph.entities.find((record) => record.id === id).description = "The measured universal collapse rate of all neutrinos."; }],
    [`${id} cannot erase its operative limitations`, (d) => { d.graph.entities.find((record) => record.id === id).openObligations = []; }],
    [`${id} cannot replace its actual source coordinates`, (d) => { d.graph.entities.find((record) => record.id === id).sourceCoordinates = []; }],
    [`${id} cannot acquire an empirical atlas instance`, (d) => { d.readiness.nodeRoles.find((record) => record.nodeId === id).instanceAdmission = "observed"; }],
    [`${id} cannot acquire a contradictory atlas denotation`, (d) => { d.readiness.nodeRoles.find((record) => record.nodeId === id).denotes = "An independently measured collapse law."; }]
  ]);
  for (const [id] of OSCILLATION_COHERENCE_ADMISSION.formalDependencies) {
    mutations.push([`missing formal input ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((record) => record.id !== id); }]);
    mutations.push([`formal input ${id} cannot become physical causation`, (d) => { d.graph.relations.find((record) => record.id === id).kind = "causal"; }]);
  }
  mutations.push(
    ["a regenerated title date cannot become a new result", (d) => { d.graph.sources.find((record) => record.id === "akhmedov2009-coherence").year = 2024; }],
    ["the reviewed author version cannot silently change", (d) => { d.graph.sources.find((record) => record.id === "akhmedov2009-coherence").url = "https://arxiv.org/abs/0905.1903v1"; }],
    ["selected theory reading cannot become a full experimental reproduction", (d) => { d.graph.sources.find((record) => record.id === "akhmedov2009-coherence").review.extent = "full-experimental-reproduction"; }],
    ["a coherence citation cannot be replaced by an unrelated measurement", (d) => { claim(d, production).citations[0].sourceId = "opera2015"; }]
  );
  await rejects(mutations);
});

test("canonical source validation invokes the coherence contract", async () => {
  const data = structuredClone(await source());
  data.graph.entities.find((record) => record.id === "phys:neutrino-wave-packet-overlap").description = "All emitted wave packets are experimentally proved to collapse permanently.";
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  assert.throws(() => validateCanonicalSource(data), /Oscillation coherence .* changed/);
});
