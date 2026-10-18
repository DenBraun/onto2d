import assert from "node:assert/strict";
import test from "node:test";
import {
  COSMOLOGY_FORMAL_ADMISSION, COSMOLOGY_FORMAL_CHECKS,
  COSMOLOGY_FORMAL_ANALYTICAL_SOURCES, validateCosmologyFormalContracts
} from "../../models/causal-emergence/canonical/cosmology-formal.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const background = "D-phys-single-field-cosmology";
const mode = "D-phys-canonical-curvature-mode";
const spectrum = "D-phys-primordial-curvature-spectrum";
const evolution = "D-phys-superhorizon-curvature-evolution";
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
  // Coordinating the display cannot make an incorrect definition admissible.
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
  validateCosmologyFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateCosmologyFormalContracts(context(data)), /Cosmology formal .* changed/, name);
  }
}

test("cosmology formal inventory has four definitions and no experiment or local replay", () => {
  assert.deepEqual(COSMOLOGY_FORMAL_ADMISSION.definitions, [
    ["phys:single-field-cosmology", background],
    ["phys:canonical-curvature-mode", mode],
    ["phys:primordial-curvature-spectrum", spectrum],
    ["phys:superhorizon-curvature-evolution", evolution]
  ]);
  assert.equal(COSMOLOGY_FORMAL_ADMISSION.formalDependencies.length, 4);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(COSMOLOGY_FORMAL_ADMISSION[key], []);
  assert.equal(COSMOLOGY_FORMAL_CHECKS.size, 0);
  assert.equal(COSMOLOGY_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("the background keeps its canonical action, reduced Planck mass and inflation conditions", async () => {
  await rejects([
    ["unreduced mass cannot replace reduced mass in the same equations", (d) => replace(d, background, "M_pl^2=(8 pi G)^(-1)", "M_pl^2=G^(-1)")],
    ["wrong kinetic sign cannot be hidden by a matching displayed record", (d) => replace(d, background, "+ g^{mu nu} partial_mu phi partial_nu phi/2", "- g^{mu nu} partial_mu phi partial_nu phi/2")],
    ["canonical matter cannot make H increase with positive kinetic energy", (d) => replace(d, background, "dot(H)=-dot(phi)^2/(2 M_pl^2)", "dot(H)=dot(phi)^2/(2 M_pl^2)")],
    ["accelerated expansion is not automatically slow roll", (d) => dropLimit(d, background, "Slow roll is an additional approximation")],
    ["Hubble radius cannot silently become the particle horizon", (d) => dropLimit(d, background, "particle or event horizon")],
    ["a supplied action cannot become observed inflaton evidence", (d) => { claim(d, background).status = "publication-supported"; }]
  ]);
});

test("curvature mode retains gauge sign, pump normalization, constraints and regularity", async () => {
  await rejects([
    ["changing the R sign while retaining the metric convention is rejected", (d) => replace(d, mode, "R=psi+Hcal delta(phi)/phi'", "R=psi-Hcal delta(phi)/phi'")],
    ["the curvature pump cannot be replaced by a spectator pump", (d) => replace(d, mode, "k^2-z''/z", "k^2-a''/a")],
    ["canonical v is not the bare test-field fluctuation", (d) => dropLimit(d, mode, "test scalar delta(phi)")],
    ["turning points cannot lose the nonzero-velocity condition", (d) => dropLimit(d, mode, "Turning points dot(phi)=0")],
    ["linear gauge invariance cannot become an unrestricted nonlinear observable", (d) => dropLimit(d, mode, "Gauge invariance here is linear")],
    ["boundary conditions cannot be erased from the reduced action", (d) => dropLimit(d, mode, "Boundary terms are omitted")]
  ]);
});

test("the primordial spectrum keeps Fourier normalization and a conditional late-time amplitude", async () => {
  await rejects([
    ["Wronskian sign must match the annihilator temporal phase", (d) => replace(d, spectrum, "u_k u_k*'-u_k* u_k'=i", "u_k u_k*'-u_k* u_k'=-i")],
    ["vacuum mode normalization cannot lose sqrt two", (d) => replace(d, spectrum, "exp(-ik eta)/sqrt(2k)", "exp(-ik eta)/sqrt(k)")],
    ["same-sign momenta in the correlator require delta(k+q)", (d) => replace(d, spectrum, "delta^3(k+q)", "delta^3(k-q)")],
    ["power per logarithmic interval requires k cubed", (d) => replace(d, spectrum, "P_R=k^3|u_k/z|^2/(2pi^2)", "P_R=k^2|u_k/z|^2/(2pi^2)")],
    ["the slow-roll coefficient must use reduced Mpl", (d) => replace(d, spectrum, "H^2/(8pi^2 epsilon_H M_pl^2)", "H^2/(2pi^2 epsilon_H M_pl^2)")],
    ["a late amplitude cannot become the exact value at crossing", (d) => dropLimit(d, spectrum, "not the exact equal-time power at crossing")],
    ["commutators do not select every finite-time initial state", (d) => dropLimit(d, spectrum, "An arbitrary finite initial time")],
    ["exact stationary-scalar de Sitter cannot substitute epsilon zero", (d) => dropLimit(d, spectrum, "Exact stationary-scalar de Sitter")],
    ["a two-point function does not prove a realized classical or observed quantum origin", (d) => dropLimit(d, spectrum, "two-point function alone")]
  ]);
});

test("long-wavelength evolution retains the second mode and excludes automatic freezing", async () => {
  await rejects([
    ["the second solution has inverse z squared", (d) => replace(d, evolution, "integral d_eta/z^2", "integral d_eta*z^2")],
    ["the gradient term cannot change sign", (d) => replace(d, evolution, "+k^2 z^2 R_k=0", "-k^2 z^2 R_k=0")],
    ["Hubble exit alone is not a conservation condition", (d) => replace(d, evolution, "only when the second contribution and gradient corrections are negligible", "whenever k/(aH)<1")],
    ["non-attractor growth is not universally a decaying mode", (d) => dropLimit(d, evolution, "need not decay")],
    ["the homogeneous solution does not establish uniform finite-k accuracy", (d) => dropLimit(d, evolution, "formal long-wave basis")],
    ["reheating transfer requires stated regular variables and dynamics", (d) => dropLimit(d, evolution, "During zeros of dot(phi)")],
    ["canonical mode growth is not a local density or particle measurement", (d) => dropLimit(d, evolution, "Growth of the canonical mode")]
  ]);
});

test("theory source identity, displayed boundaries and definition inputs stay bound", async () => {
  const mutations = COSMOLOGY_FORMAL_ADMISSION.definitions.flatMap(([id, claimId]) => [
    [`${id} must retain its actual source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }],
    [`${id} cannot acquire an empirical instance`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }],
    [`${id} cannot display a uniquely measured quantum origin`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "The uniquely observed quantum origin of the universe."; }],
    [`${id} cannot borrow an unrelated executable check`, (d) => { claim(d, claimId).checkIds = ["field-dynamics-algebra"]; }]
  ]);
  for (const [id] of COSMOLOGY_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`required definition input ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`input ${id} cannot become an empirical intervention`, (d) => { d.graph.relations.find((r) => r.id === id).assertion = "This observed intervention causes every primordial perturbation."; }]);
  }
  mutations.push(
    ["a scan footer cannot silently replace the reviewed publication identity", (d) => { d.graph.sources.find((s) => s.id === "mukhanov1988-perturbations").year = 1989; }],
    ["the unestablished historical DOI cannot become a fabricated identifier", (d) => { d.graph.sources.find((s) => s.id === "mukhanov1988-perturbations").doi = "10.1000/invented"; }],
    ["the reviewed primary author version must remain fixed", (d) => { d.graph.sources.find((s) => s.id === "garriga1999-perturbations").url = "https://arxiv.org/abs/hep-th/9904176v2"; }],
    ["canonical restriction cannot disappear from the generalized source", (d) => { d.graph.sources.find((s) => s.id === "garriga1999-perturbations").review.limit = "All kinetic and curved models are independently confirmed."; }],
    ["a formal spectrum citation cannot become a Planck observational derivation", (d) => { claim(d, spectrum).citations[0].sourceId = "planck2018-parameters"; }]
  );
  await rejects(mutations);
});

test("canonical source validation invokes the cosmology formal contract", async () => {
  const data = structuredClone(await source());
  replace(data, spectrum, "P_R=k^3|u_k/z|^2/(2pi^2)", "P_R=k^3|u_k/z|^2/(4pi^2)");
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  assert.throws(() => validateCanonicalSource(data), /Cosmology formal .* changed/);
});
