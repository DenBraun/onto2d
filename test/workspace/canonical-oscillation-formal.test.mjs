import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  OSCILLATION_FORMAL_ADMISSION,
  OSCILLATION_FORMAL_CHECKS,
  OSCILLATION_FORMAL_ANALYTICAL_SOURCES,
  validateOscillationFormalContracts
} from "../../models/causal-emergence/canonical/oscillation-formal.mjs";

const data = await loadCanonicalSource();
const scopeId = "D-phys-neutrino-propagation-scope";
const transportId = "D-phys-neutrino-transport-boundary";
const synthesisId = "C-phys-neutrino-experiment-boundary";
const methodId = "M-phys-neutrino-experiment-boundary";
const claim = (d, id) => d.graph.claims.find((record) => record.id === id);
const entity = (d, id) => d.graph.entities.find((record) => record.id === `phys:${id}`);
const edge = (d, id) => d.graph.relations.find((record) => record.id === `physics:${id}`);

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
  assert.equal(record.limitations.length, before - 1, `Unique reviewed limit: ${fragment}`);
}

function rejects(mutations) {
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("oscillation synthesis reuses publication contexts without adding an experiment or executable result", () => {
  validateOscillationFormalContracts(context(data));
  assert.equal(OSCILLATION_FORMAL_CHECKS.size, 0);
  assert.equal(OSCILLATION_FORMAL_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(OSCILLATION_FORMAL_ADMISSION.studyIds, []);
  assert.deepEqual(OSCILLATION_FORMAL_ADMISSION.comparisonIds, []);
  assert.deepEqual(OSCILLATION_FORMAL_ADMISSION.localStudySources, []);
  assert.deepEqual(OSCILLATION_FORMAL_ADMISSION.contexts, []);
  assert.equal(claim(data, synthesisId).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesisId).contextIds, [
    "kamland2005-response", "kamland2005-oscillation-fit", "sno2002-flavor-fit",
    "superk1998-oscillation-fit", "opera2015-inference"
  ]);
  assert.deepEqual(claim(data, synthesisId).checkIds, []);
});

test("vacuum stationary states and conditional mass implications survive the full source validator", () => {
  rejects([
    ["degenerate or unmixed states must always oscillate", (d) => dropLimit(d, scopeId, "A degenerate pair")],
    ["a single mass eigenstate must change its flavor probabilities", (d) => dropLimit(d, scopeId, "A single vacuum mass eigenstate")],
    ["vacuum stationary exceptions are generalized to arbitrary matter", (d) => {
      claim(d, scopeId).limitations[1] = "Every vacuum mass eigenstate remains stationary in arbitrary varying matter.";
    }],
    ["mass differences determine all nonzero absolute masses", (d) => dropLimit(d, scopeId, "absolute mass scale")],
    ["phase evolution becomes repeated projective collapse", (d) => dropLimit(d, scopeId, "Continuous weak scattering")],
    ["displayed propagation becomes a directly tracked flavor-jump trajectory", (d) => {
      entity(d, "neutrino-propagation-scope").description = "Every neutrino is directly observed jumping continuously between flavors.";
    }]
  ]);
});

test("formal inputs cannot recover original parent necessity, weights, minima or arising order", () => {
  rejects([
    ["old parent weights and one-carrier minima become meaningful", (d) => dropLimit(d, scopeId, "weights 0.3/0.7")],
    ["flavor labels acquire necessary material parent semantics", (d) => {
      edge(d, "lepton-charge-flavor-neutrino-propagation-scope").assertion = "Lepton flavor is a necessary material parent that causes oscillations after its formation.";
    }],
    ["mixing relation gains weighted causal maintenance", (d) => {
      const relation = edge(d, "neutrino-flavor-mixing-neutrino-propagation-scope");
      relation.kind = "functional";
      relation.weight = 0.7;
    }],
    ["coherence definition supplies a universal carrier minimum", (d) => {
      edge(d, "neutrino-production-detection-coherence-neutrino-propagation-scope").carrier = { minimum: 1, critical: 1 };
    }],
    ["readiness treats a formal convention as an observed instance", (d) => {
      d.readiness.nodeRoles.find((record) => record.nodeId === "phys:neutrino-propagation-scope").instanceAdmission = "observed";
    }]
  ]);
});

test("qualitative transport scope does not certify collisions, self-refraction or cosmological predictions", () => {
  rejects([
    ["occupation matrices silently acquire trace-one normalization", (d) => dropLimit(d, transportId, "occupation matrices")],
    ["a single vacuum probability supplies cosmological evolution", (d) => dropLimit(d, transportId, "momentum redshift")],
    ["the selected bilinear Hamiltonian gains neutrino self-refraction", (d) => dropLimit(d, transportId, "Equation 2.5 explicitly leaves out")],
    ["phase averaging becomes a measured universal collision rate", (d) => dropLimit(d, transportId, "Macroscopic phase averaging")],
    ["the source claims a complete kinetic derivation was reviewed", (d) => {
      d.graph.sources.find((record) => record.id === "stirner2018-transport").review.extent = "complete-publisher-derivation";
    }],
    ["a formal boundary is displayed as a measured cosmic flux", (d) => {
      entity(d, "neutrino-transport-boundary").description = "This verified solver predicts cosmological abundances and all astrophysical flavor ratios.";
    }]
  ]);
});

test("four experimental preparations retain source-specific response, shared samples and historical fits", () => {
  rejects([
    ["reused summaries become independent acquisitions", (d) => dropLimit(d, synthesisId, "Reused events")],
    ["KamLAND display baseline becomes a fixed experimental baseline", (d) => dropLimit(d, synthesisId, "180 km display baseline")],
    ["SNO joint active-flavor fit becomes a measured oscillation phase", (d) => dropLimit(d, synthesisId, "SNO reports a joint")],
    ["Super-K disappearance becomes identified tau appearance", (d) => dropLimit(d, synthesisId, "1998 disappearance analysis")],
    ["OPERA counts become an unaveraged probability", (d) => dropLimit(d, synthesisId, "Dividing five candidates")],
    ["historical two-flavor fits become current global determinations", (d) => dropLimit(d, synthesisId, "Historical effective two-flavor")],
    ["the synthesis drops one experimental preparation", (d) => {
      claim(d, synthesisId).contextIds = claim(d, synthesisId).contextIds.filter((id) => id !== "sno2002-flavor-fit");
    }],
    ["the shared method substitutes a different valid experiment context", (d) => {
      claim(d, methodId).contextIds[4] = "superk1998-response";
    }],
    ["the synthesis borrows the finite KamLAND arithmetic certificate", (d) => {
      claim(d, synthesisId).status = "analytically-checked";
      claim(d, synthesisId).checkIds = ["neutrino-phase-data-algebra"];
    }],
    ["a publication citation is replaced by an unrelated valid primary source", (d) => {
      claim(d, synthesisId).citations[0] = structuredClone(claim(d, "C-phys-opera2015-appearance-evidence").citations[0]);
    }]
  ]);
});

test("declared synthesis inputs are preserved while feedback and pooled-probability edges fail", () => {
  const inputs = [
    "neutrino-propagation-scope", "kamland2005-average-survival", "kamland2005-oscillation-fit",
    "sno2002-active-flavor-components", "superk1998-oscillation-fit",
    "opera2015-appearance-evidence", "opera2015-parameter-compatibility"
  ];
  for (const from of inputs) {
    const id = `physics:${from}-neutrino-experiment-boundary`;
    const relation = data.graph.relations.find((record) => record.id === id);
    assert.ok(relation, `Reviewed input: ${from}`);
    assert.equal(relation.source, `phys:${from}`);
    assert.equal(relation.target, "phys:neutrino-experiment-boundary");
    assert.equal(relation.kind, "descriptive");
    assert.equal(relation.role, "interpretation-dependency");
    assert.deepEqual(relation.contextIds, claim(data, synthesisId).contextIds);
    rejects([[`remove ${from} from the synthesis`, (d) => {
      d.graph.relations = d.graph.relations.filter((record) => record.id !== id);
    }]]);
  }
  rejects([
    ["same-data OPERA parameter fit becomes an independent exposure", (d) => {
      edge(d, "opera2015-parameter-compatibility-neutrino-experiment-boundary").assertion = "A second independent accelerator acquisition measures a common probability.";
    }],
    ["synthesis feeds back into a measured source result", (d) => {
      const feedback = structuredClone(edge(d, "kamland2005-oscillation-fit-neutrino-experiment-boundary"));
      feedback.id = "physics:neutrino-experiment-boundary-kamland2005-oscillation-fit";
      feedback.source = "phys:neutrino-experiment-boundary";
      feedback.target = "phys:kamland2005-oscillation-fit";
      d.graph.relations.push(feedback);
    }],
    ["a kinetic exclusion becomes a claimed measured probability input", (d) => {
      edge(d, "opera2015-appearance-evidence-neutrino-experiment-boundary").source = "phys:neutrino-transport-boundary";
    }]
  ]);
});

test("full validation reaches exact display and readiness pins for all new scope records", () => {
  for (const id of ["neutrino-propagation-scope", "neutrino-transport-boundary", "neutrino-experiment-boundary"]) {
    const changed = structuredClone(data);
    entity(changed, id).description = "A directly measured universal transition probability.";
    assert.throws(() => validateCanonicalSource(changed), /Oscillation scope entities changed/, id);
  }
  const changed = structuredClone(data);
  changed.readiness.nodeRoles.find((record) => record.nodeId === "phys:neutrino-experiment-boundary").denotes = "A new independent four-experiment likelihood with pooled significance.";
  assert.throws(() => validateCanonicalSource(changed), /Oscillation scope readiness changed/);
});
