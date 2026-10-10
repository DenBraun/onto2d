import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { CONFINEMENT_LATTICE_ADMISSION, CONFINEMENT_LATTICE_CHECKS, CONFINEMENT_LATTICE_ANALYTICAL_SOURCES, validateConfinementLatticeContracts } from "../../models/causal-emergence/canonical/confinement-lattice.mjs";

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
  assert.equal(record.limitations.length, before - 1, `Unique limit: ${fragment}`);
}
function rejects(mutations) {
  validateConfinementLatticeContracts(context(data));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateConfinementLatticeContracts(context(changed)), /Confinement lattice (contract|role) drift/, name);
  }
}

test("lattice review protects existing records without registering duplicate admissions or analytical checks", () => {
  assert.ok(Object.values(CONFINEMENT_LATTICE_ADMISSION).every((entries) => entries.length === 0));
  assert.equal(CONFINEMENT_LATTICE_CHECKS.size, 0);
  assert.equal(CONFINEMENT_LATTICE_ANALYTICAL_SOURCES.size, 0);
  validateConfinementLatticeContracts(context(data));
  const extended = context(data);
  extended.relations.set("test:new-scoped-interpretation", {
    id: "test:new-scoped-interpretation", source: "phys:creutz-scaling", target: "test:new-criterion",
    kind: "descriptive", role: "interpretation-dependency", assertion: "A separately reviewed interpretation."
  });
  assert.doesNotThrow(() => validateConfinementLatticeContracts(extended));
});

test("Wilson and Creutz conventions do not turn a finite strong-coupling surface into physical continuum confinement", () => {
  rejects([
    ["SU2 trace is changed to an unnormalized physical SU3 observable", (d) => { claim(d, "D-phys-wilson-loop").statement = "W(C)=Tr(product U) in physical SU(3) QCD."; }],
    ["lattice regulator is promoted to a carrier minimum", (d) => dropLimit(d, "D-phys-lattice-gauge-formulation", "ultraviolet regulator")],
    ["sample update order becomes physical evolution", (d) => dropLimit(d, "D-phys-lattice-gauge-formulation", "Monte Carlo update order")],
    ["leading plaquettes become a minimum-particle law", (d) => dropLimit(d, "D-phys-lattice-strong-coupling", "fewest plaquettes")],
    ["leading term certifies all orders", (d) => dropLimit(d, "D-phys-lattice-strong-coupling", "Higher-order corrections")],
    ["classical matching certifies the quantum continuum", (d) => dropLimit(d, "D-phys-lattice-continuum-limit", "Classical action matching")],
    ["area criterion proves atomic stability", (d) => dropLimit(d, "D-phys-static-string-tension", "atomic stability")]
  ]);
});

test("Creutz retains finite-loop fitting, sampling errors and conditional scaling normalization", () => {
  rejects([
    ["five fluctuations become independent-sample errors", (d) => dropLimit(d, "C-phys-creutz-wilson-loops", "five iterations")],
    ["unresolved high-beta area term becomes a precision result", (d) => dropLimit(d, "C-phys-creutz-string-fit", "Above beta=2.5")],
    ["loop-value residuals become logarithmic residuals", (d) => { claim(d, "M-phys-creutz-string-fit").limitations[0] = "Minimize residuals of log W with independent equal-variance errors."; }],
    ["small-loop area dominance becomes a measured asymptote", (d) => dropLimit(d, "M-phys-creutz-string-fit", "below beta=1.6")],
    ["arbitrary scale normalization is treated as a physical measurement", (d) => dropLimit(d, "C-phys-creutz-scaling", "arbitrarily chosen")],
    ["fixed-tension comparison becomes an independent confinement proof", (d) => dropLimit(d, "M-phys-creutz-scaling", "prescription is based on confinement")]
  ]);
});

test("Bali retains the shared ensemble, operator sensitivity and finite-mass continuum boundaries", () => {
  rejects([
    ["one heavy sea mass becomes physical 2+1 QCD", (d) => dropLimit(d, "M-phys-bali2005-context", "One lattice spacing")],
    ["20 and 184 configurations become independent experiments", (d) => dropLimit(d, "C-phys-bali-correlator-matrix", "aligned into 20 bins")],
    ["no Wilson-only signal disproves matrix mixing", (d) => dropLimit(d, "C-phys-bali-wilson-loop-null", "does not negate")],
    ["same-ensemble I1 sector becomes a quenched intervention", (d) => dropLimit(d, "C-phys-bali-correlator-matrix", "I=1 disconnected")],
    ["relative static energies become cutoff-independent absolute masses", (d) => dropLimit(d, "M-phys-bali-avoided-crossing", "self-energies cancel")],
    ["statistical errors silently include continuum and scale uncertainty", (d) => dropLimit(d, "C-phys-bali-avoided-crossing", "Quoted errors are statistical")]
  ]);
});

test("Bali's printed convention conflicts and Euclidean-versus-real-time distinction remain visible", () => {
  rejects([
    ["summary silently replaces Equation77", (d) => dropLimit(d, "D-phys-two-state-string-mixing", "summary interchanges")],
    ["rs is exactly equal mixing despite fitted c", (d) => dropLimit(d, "D-phys-two-state-string-mixing", "theta(r_s)=pi/2-c*pi/4")],
    ["finite-window ansatz becomes a universal asymptotic potential", (d) => dropLimit(d, "C-phys-bali-avoided-crossing", "incorrect large-distance asymptote")],
    ["energy coupling becomes a stochastic decay rate", (d) => dropLimit(d, "C-phys-bali-mixing-coupling", "units of energy")],
    ["same fitted gap becomes independent corroboration", (d) => dropLimit(d, "M-phys-bali-mixing-coupling", "Equation 96 consistency ratio")],
    ["closed two-state spectrum certifies irreversible hadronization", (d) => { claim(d, "C-phys-bali-mixing-coupling").statement = "The inferred energy g directly measures the irreversible rate of hadron formation."; }]
  ]);
});

test("source versions, displayed semantics, ownership and existing descriptive inputs are whole-record bound", () => {
  rejects([
    ["author review becomes a publisher replay", (d) => { d.graph.sources.find((r) => r.id === "bali2005").review.limit = "The publisher fit and all configurations were independently reproduced."; }],
    ["source DOI is replaced", (d) => { d.graph.sources.find((r) => r.id === "creutz1980").doi = "10.1103/PhysRevD.10.2445"; }],
    ["display summary promotes a computational result to a detector observation", (d) => { d.graph.entities.find((r) => r.id === "phys:bali-avoided-crossing").description = "A directly timed detector observation of universal confinement."; }],
    ["additional display metadata carries an unsupported claim", (d) => { d.graph.entities.find((r) => r.id === "phys:creutz-scaling").evidence = "Continuum confinement is experimentally proved."; }],
    ["readiness denotes an observed persistent carrier", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:static-string-tension").denotes = "A measured permanent material loop."; }],
    ["valid but foreign study ownership is substituted", (d) => { claim(d, "C-phys-bali-avoided-crossing").contextIds = ["creutz1980"]; }],
    ["computational study is promoted to an experiment", (d) => { d.physics.studies.find((r) => r.id === "creutz1980").studyType = "primary-experiment"; }],
    ["an untested continuum alternative becomes excluded", (d) => { d.physics.comparisons.find((r) => r.id === "creutz-string-fit").result = "specified-alternative-disfavored"; }],
    ["existing fit dependency becomes a causal weighted necessity", (d) => { const r = d.graph.relations.find((r) => r.id === "physics:creutz-loop-fit"); r.kind = "causal"; r.weight = 1; r.necessity = "necessary"; }],
    ["required matrix-to-spectrum dependency is deleted", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:bali-matrix-spectrum"); }]
  ]);
});

test("the complete source validator invokes the reviewed lattice contracts", () => {
  const changed = structuredClone(data);
  changed.graph.entities.find((r) => r.id === "phys:bali-mixing-coupling").description = "A detector measurement of irreversible string-breaking time.";
  assert.throws(() => validateCanonicalSource(changed), /Confinement lattice contract drift/);
});
