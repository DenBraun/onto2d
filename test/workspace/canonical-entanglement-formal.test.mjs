import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateEntanglementFormalContracts } from "../../models/causal-emergence/canonical/entanglement-formal.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((record) => record.id === id);
function context(d) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(d.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(d.physics[key].map((record) => [record.id, record]))]),
    ["readiness", d.readiness]
  ]);
}
function dropLimit(d, id, fragment) {
  const record = claim(d, id);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1);
}
function rejects(mutations) {
  validateEntanglementFormalContracts(context(data));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateEntanglementFormalContracts(context(changed)), undefined, name);
  }
}

test("entanglement retains its partition, mixed-state counterexample and reduced states", () => {
  rejects([
    ["nonproduct mixed states become automatically entangled", (d) => { claim(d, "D-phys-entanglement").statement = "Every state other than rho_A tensor rho_B is entangled."; }],
    ["classical correlation counterexample disappears", (d) => dropLimit(d, "D-phys-entanglement", "<Z_A Z_B>=1")],
    ["entanglement removes local density operators", (d) => dropLimit(d, "D-phys-bipartite-state", "Local reduced states")],
    ["projective local model becomes all-measurement locality", (d) => { claim(d, "D-phys-werner-counterexample").statement = "All entangled states have local models for arbitrary measurement protocols."; }],
    ["conditioning becomes superluminal communication", (d) => dropLimit(d, "D-phys-local-marginals", "Conditioning on a selected remote outcome")]
  ]);
});

test("the entanglement card excludes unsupported firstness, particle minima and necessary field creation", () => {
  rejects([
    ["display order becomes physical firstness", (d) => dropLimit(d, "D-phys-entanglement", "SOMA pattern/phase")],
    ["two subsystem factors become two elementary particles", (d) => dropLimit(d, "D-phys-entanglement", "N_min=N_crit=2")],
    ["unqualified vacuum coherence becomes an entanglement criterion", (d) => dropLimit(d, "D-phys-entanglement", "Unspecified vacuum-linked")],
    ["formal relation becomes a necessary weighted parent", (d) => {
      const relation = d.graph.relations.find((r) => r.id === "physics:state-entanglement");
      relation.necessity = "necessary";
      relation.weight = 1;
    }]
  ]);
});

test("Delft trial selection and stopping stay external to the deposited-table calculation", () => {
  rejects([
    ["missing readout becomes a discarded event", (d) => dropLimit(d, "M-phys-hensen2015-readout", "Eligibility uses")],
    ["fixed-n bound permits stopping at a desired p-value", (d) => dropLimit(d, "M-phys-hensen2015-bell-test", "45-minute")],
    ["preselected archives become complete acquisition", (d) => dropLimit(d, "C-phys-hensen2016-correlations", "deposited archives provide")],
    ["second-run herald tags disappear", (d) => { claim(d, "M-phys-hensen2016-bell-test").statement = claim(d, "M-phys-hensen2015-bell-test").statement; }],
    ["pulse timing is claimed independently reconstructed", (d) => dropLimit(d, "M-phys-hensen2016-readout", "70 ns")],
    ["stored Twitter bits become fresh spacelike randomness", (d) => dropLimit(d, "M-phys-hensen2016-readout", "stored Twitter bits")]
  ]);
});

test("Delft source extent, conditional predictability and printed proof limits remain explicit", () => {
  rejects([
    ["Bell counts independently certify the RNG bound", (d) => dropLimit(d, "C-phys-hensen2015-bell-test", "adopted tau=1.08e-5")],
    ["numeric tail becomes proof verification", (d) => dropLimit(d, "M-phys-hensen2015-bell-test", "Equation 83")],
    ["later bias extension silently replaces the stored replay", (d) => dropLimit(d, "M-phys-hensen2016-bell-test", "2016 theoretical extension")],
    ["reviewed proof passage disappears", (d) => { d.graph.sources.find((r) => r.id === "hensen2015").review.locators.pop(); }],
    ["calibration limit disappears from displayed study", (d) => { d.physics.studies.find((r) => r.id === "hensen2015").limitations.pop(); }],
    ["second-run nonrejection becomes a universal exclusion", (d) => { d.physics.comparisons.find((r) => r.id === "hensen2016-bell").result = "specified-alternative-disfavored"; }]
  ]);
});

test("the complete source validator invokes the entanglement and Delft contracts", () => {
  const changed = structuredClone(data);
  dropLimit(changed, "D-phys-bipartite-state", "Local reduced states");
  assert.throws(() => validateCanonicalSource(changed), /Entanglement\/Delft contract drift/);
});
