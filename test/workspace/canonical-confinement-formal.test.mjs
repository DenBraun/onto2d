import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { CONFINEMENT_FORMAL_ADMISSION, CONFINEMENT_FORMAL_CHECKS, CONFINEMENT_FORMAL_ANALYTICAL_SOURCES, validateConfinementFormalContracts } from "../../models/causal-emergence/canonical/confinement-formal.mjs";

const data = await loadCanonicalSource();
const criterionId = "D-phys-confinement-criteria";
const synthesisId = "C-phys-confinement-evidence-boundary";
const methodId = "M-phys-confinement-evidence-boundary";
const claim = (d, id) => d.graph.claims.find((record) => record.id === id);
const relation = (d, id) => d.graph.relations.find((record) => record.id === id);
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
  validateConfinementFormalContracts(context(data));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateConfinementFormalContracts(context(changed)), /Confinement criteria .* changed/, name);
  }
}

test("confinement synthesis reuses four declared studies without adding an acquisition or analytical result", () => {
  validateConfinementFormalContracts(context(data));
  assert.deepEqual(CONFINEMENT_FORMAL_ADMISSION.studyIds, []);
  assert.deepEqual(CONFINEMENT_FORMAL_ADMISSION.localStudySources, []);
  assert.equal(CONFINEMENT_FORMAL_CHECKS.size, 0);
  assert.equal(CONFINEMENT_FORMAL_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(claim(data, synthesisId).contextIds, ["durr2008", "tasso1979", "sld1999-neutral-acquisition", "sld1999-neutral-extrapolation"]);
  assert.equal(claim(data, synthesisId).status, "literature-synthesis");
});

test("unscreened area behavior, dynamical screening and hadronic interpretations remain distinct criteria", () => {
  rejects([
    ["all criteria become interchangeable", (d) => dropLimit(d, criterionId, "not interchangeable definitions")],
    ["finite SU2 loops certify physical continuum SU3", (d) => dropLimit(d, criterionId, "finite SU(2) loops")],
    ["screened ground energy must grow without bound", (d) => { claim(d, criterionId).statement = "With dynamical quarks the true ground-state energy grows indefinitely, proving confinement at every separation."; }],
    ["Euclidean mixing becomes a measured real-time rate", (d) => dropLimit(d, criterionId, "Euclidean mixing energies")],
    ["electric-charge nulls become color nulls", (d) => dropLimit(d, criterionId, "Electric charge is not color charge")],
    ["UV running supplies an infrared theorem", (d) => dropLimit(d, criterionId, "Asymptotic freedom concerns ultraviolet")]
  ]);
});

test("original parent weights, occurrence minima, phase placement and temporal maintenance remain excluded", () => {
  rejects([
    ["original weights and one-particle minima regain semantics", (d) => dropLimit(d, criterionId, "0.55, 0.20 and 0.25")],
    ["renormalization scale becomes elapsed time", (d) => dropLimit(d, criterionId, "Source card 1.30")],
    ["a lattice action becomes a necessary organization stage", (d) => { relation(d, "physics:lattice-gauge-formulation-confinement-criteria").assertion = "The lattice is the universally necessary preceding organization stage of confinement."; }],
    ["gluon interpretation becomes weighted maintenance causality", (d) => { const r = relation(d, "physics:gluon-self-coupling-confinement-criteria"); r.weight = 0.25; r.necessity = "necessary"; r.kind = "causal"; }],
    ["SOMA is added through display metadata", (d) => { d.graph.entities.find((r) => r.id === "phys:confinement-criteria").phase = "universally-necessary-material-organization"; }],
    ["downward constraint is silently revived", (d) => dropLimit(d, criterionId, "universal downward constraint")]
  ]);
});

test("selected hadron evidence does not acquire a nuclear or atomic stability theorem", () => {
  rejects([
    ["bare-deuteron channel boundary disappears", (d) => dropLimit(d, criterionId, "one specified bare-nucleus breakup channel")],
    ["QCD spectrum proves atomic binding", (d) => dropLimit(d, synthesisId, "atomic electronic binding")],
    ["method claims all-channel nuclear stability", (d) => { claim(d, methodId).statement = "The joint hadron results prove every nucleus and atom is permanently stable."; }],
    ["representation constraints become a universal formation mechanism", (d) => dropLimit(d, criterionId, "Color-singlet tensor algebra")],
    ["a selected spectrum becomes a complete colored-state exclusion", (d) => dropLimit(d, synthesisId, "Neither a selected hadron spectrum")]
  ]);
});

test("Durr, TASSO and SLD inputs keep their separate preparations and dependent extrapolations", () => {
  rejects([
    ["cross-study synthesis is promoted to an independent experiment", (d) => dropLimit(d, synthesisId, "not a new acquisition")],
    ["Durr calibration inputs become independent predicted masses", (d) => dropLimit(d, synthesisId, "Pion/kaon masses")],
    ["TASSO charged tracks become a complete stable final-state census", (d) => dropLimit(d, synthesisId, "TASSO uses selected charged tracks")],
    ["SLD reconstructed daughters and parents become disjoint primary populations", (d) => dropLimit(d, synthesisId, "Reconstructed parents and daughters")],
    ["method removes shared normalization and fragmentation extrapolation", (d) => dropLimit(d, methodId, "Full-range totals reuse")],
    ["SLD total edge invents an independent second sample", (d) => { relation(d, "physics:sld1999-neutral-totals-confinement-evidence-boundary").assertion = "Independent full-phase-space event counts directly measure the total population."; }],
    ["the extrapolation study is replaced with an unrelated valid primary study", (d) => { claim(d, synthesisId).contextIds[3] = "lee2002"; }],
    ["Durr input is removed from the topology", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:durr-hadron-spectrum-confinement-evidence-boundary"); }]
  ]);
});

test("source extent, citations and displayed evidence roles cannot silently strengthen the synthesis", () => {
  rejects([
    ["selected SLD passages become a complete publisher review", (d) => { d.graph.sources.find((r) => r.id === "sld1999-neutral-production").review.limit = "Every publisher page, flavor tag and charged-hadron result was independently reproduced."; }],
    ["source identity changes while the title stays plausible", (d) => { d.graph.sources.find((r) => r.id === "sld1999-neutral-production").url = "https://arxiv.org/pdf/hep-ex/9608016v1"; }],
    ["synthesis evidence is redirected to an unrelated source", (d) => { claim(d, synthesisId).citations[0].sourceId = "wilson1974"; }],
    ["public summary asserts a theorem despite qualified claims", (d) => { d.graph.entities.find((r) => r.id === "phys:confinement-evidence-boundary").description = "A directly measured universal proof of confinement and permanent atomic stability."; }],
    ["readiness denotes an independently observed universal law", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:confinement-evidence-boundary").denotes = "An independently measured all-channel law with a pooled significance."; }],
    ["formal definition becomes an observed physical instance", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:confinement-criteria").instanceAdmission = "observed"; }],
    ["qualified literature evidence is relabeled locally checked", (d) => { claim(d, synthesisId).status = "analytically-checked"; }]
  ]);
});

test("the full source validator invokes the confinement criteria and synthesis contract", () => {
  const changed = structuredClone(data);
  changed.graph.entities.find((r) => r.id === "phys:confinement-evidence-boundary").description = "A new independent detector measurement with universal significance.";
  assert.throws(() => validateCanonicalSource(changed), /Confinement criteria entities changed phys:confinement-evidence-boundary/);
});
