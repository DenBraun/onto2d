import assert from "node:assert/strict";
import test from "node:test";
import {
  ENTANGLEMENT_VACUUM_ADMISSION, ENTANGLEMENT_VACUUM_CHECKS, ENTANGLEMENT_VACUUM_ANALYTICAL_SOURCES,
  validateEntanglementVacuumContracts
} from "../../models/causal-emergence/canonical/entanglement-vacuum.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs").then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const findClaim = (d, id) => d.graph.claims.find((r) => r.id === id);
const D = "D-phys-regulated-scalar-region-state";
const M = "M-phys-srednicki1993-region-entropy-context";
const C = "C-phys-srednicki1993-area-entropy";
function replace(d, id, from, to) {
  const c = findClaim(d, id);
  assert.ok(c.statement.includes(from), "Mutation must change its intended text");
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, id, fragment) {
  const c = findClaim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.equal(c.limitations.length, before - 1, "Exactly one scientific boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateEntanglementVacuumContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateEntanglementVacuumContracts(context(changed)), undefined, name);
  }
}

test("vacuum-region admission declares a regulated construction and publication-only entropy result", () => {
  assert.deepEqual([...ENTANGLEMENT_VACUUM_CHECKS], []);
  assert.deepEqual([...ENTANGLEMENT_VACUUM_ANALYTICAL_SOURCES], []);
  assert.deepEqual(ENTANGLEMENT_VACUUM_ADMISSION.localStudySources, []);
  assert.equal(ENTANGLEMENT_VACUUM_ADMISSION.definitions.length, 1);
  assert.equal(ENTANGLEMENT_VACUUM_ADMISSION.contexts.length, 1);
  assert.equal(ENTANGLEMENT_VACUUM_ADMISSION.observations.length, 1);
  assert.deepEqual(ENTANGLEMENT_VACUUM_ADMISSION.dependencies.map((r) => r[1]), [
    "regulated-scalar-region-state", "srednicki1993-region-entropy-context", "bipartite-entanglement"
  ]);
  assert.equal(ENTANGLEMENT_VACUUM_ADMISSION.dependencies.some((r) => r[1] === "vacuum-two-point-function"), false,
    "Ordinary correlation is not substituted for the state/trace entanglement criterion");
});

test("vacuum partition retains state purity, radial regulator and oscillator rather than qubit factors", async () => {
  await rejectMutations([
    ["the actual author version is preserved", (d) => { d.graph.sources.find((r) => r.id === "srednicki1993-region-entropy").url = "https://arxiv.org/pdf/hep-th/9303048v1"; }],
    ["the state is the stipulated pure ground state", (d) => replace(d, D, "pure Gaussian ground state", "arbitrary mixed state")],
    ["the outer boundary is part of the theory", (d) => replace(d, D, "phi_(l,m,N+1)=0", "unconstrained phi_(l,m,N+1)")],
    ["the partition is between radial sites", (d) => replace(d, D, "R=(n+1/2)a", "R=n*a")],
    ["finite radial size does not imply finite-dimensional local factors", (d) => removeLimit(d, D, "infinite-dimensional")],
    ["the imaginary interface is not a physical entropy membrane", (d) => removeLimit(d, D, "not a new physical wall")],
    ["a theoretical computation is not an experimental measurement", (d) => { d.physics.studies.find((r) => r.id === "srednicki1993-region-entropy").studyType = "primary-experiment"; }]
  ]);
});

test("reduced entropy keeps its coefficient, trace interpretation and finite-box limits", async () => {
  await rejectMutations([
    ["inside/outside tracing cannot silently change", (d) => replace(d, M, "Trace the inside oscillators", "Trace both inside and outside oscillators")],
    ["the Gaussian off-diagonal correction retains its factor of two", (d) => replace(d, M, "beta=B^T A^-1 B/2", "beta=B^T A^-1 B")],
    ["partial-wave degeneracy is part of the entropy sum", (d) => replace(d, M, "(2l+1)S_l", "S_l")],
    ["entropy is not full-vacuum thermal entropy", (d) => removeLimit(d, M, "not a thermodynamic")],
    ["the fitted coefficient multiplies R squared, not sphere area", (d) => replace(d, C, "0.30(R/a)^2", "0.30*A/a^2")],
    ["the tested partition range is bounded", (d) => replace(d, C, "1<=n<=30", "1<=n<=60")],
    ["finite-box stability is not exact infrared independence", (d) => removeLimit(d, C, "finite-box comparison")],
    ["the pure-state criterion is not ordinary correlation or a creation mechanism", (d) => removeLimit(d, C, "two-point correlation")],
    ["reported numerical evidence is not a local reproduction", (d) => { findClaim(d, C).status = "analytically-checked"; findClaim(d, C).checkIds = ["field-mode-evolution-algebra"]; }],
    ["the coefficient is not universal continuum or black-hole entropy", (d) => removeLimit(d, C, "black-hole entropy")]
  ]);
});

test("vacuum evidence paths and displayed records cannot shed the scientific boundaries", async () => {
  const relationIds = [
    ...ENTANGLEMENT_VACUUM_ADMISSION.formalDependencies.map(([id]) => id),
    ...ENTANGLEMENT_VACUUM_ADMISSION.dependencies.map(([id]) => `physics:${id}`)
  ];
  await rejectMutations(relationIds.map((id) => [`required input ${id}`, (d) => {
    const before = d.graph.relations.length;
    d.graph.relations = d.graph.relations.filter((r) => r.id !== id);
    assert.equal(d.graph.relations.length, before - 1);
  }]));
  await rejectMutations([
    ["definition-to-result is descriptive interpretation, not maintenance", (d) => {
      d.graph.relations.find((r) => r.id === "physics:regulated-scalar-region-state-srednicki1993-area-entropy").kind = "functional";
    }],
    ["the numerical result retains its exact source extent", (d) => { findClaim(d, C).citations = []; }],
    ["the display cannot remove the cutoff", (d) => { d.graph.entities.find((r) => r.id === "phys:srednicki1993-area-entropy").description = "Every vacuum has a universal finite entropy proportional to area."; }],
    ["result obligations remain visible", (d) => { d.graph.entities.find((r) => r.id === "phys:srednicki1993-area-entropy").openObligations = []; }],
    ["a computed entropy is not an observed vacuum instance", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:srednicki1993-area-entropy").instanceAdmission = "empirical"; }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-two-point-srednicki", source: "phys:vacuum-two-point-function", target: "phys:srednicki1993-area-entropy",
    kind: "descriptive", role: "interpretation-dependency", assertion: "A nonzero ordinary correlation alone determines the entanglement entropy.",
    claimIds: ["M-phys-srednicki1993-area-entropy"], contextIds: ["srednicki1993-region-entropy"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "An unreviewed correlation-sufficiency edge is rejected");
});
