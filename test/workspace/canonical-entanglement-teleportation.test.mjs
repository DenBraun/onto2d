import assert from "node:assert/strict";
import test from "node:test";
import {
  ENTANGLEMENT_TELEPORTATION_ADMISSION as admission,
  ENTANGLEMENT_TELEPORTATION_CHECKS,
  ENTANGLEMENT_TELEPORTATION_ANALYTICAL_SOURCES,
  validateEntanglementTeleportationContracts
} from "../../models/causal-emergence/canonical/entanglement-teleportation.mjs";

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
const claim = (data, suffix, method = false) => data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-boschi1998-teleportation-${suffix}`);
function replace(data, suffix, from, to, method = false) {
  const r = claim(data, suffix, method);
  assert.ok(r.statement.includes(from), "The mutation must change its intended statement");
  r.statement = r.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, method = false) {
  const r = claim(data, suffix, method), length = r.limitations.length;
  r.limitations = r.limitations.filter((s) => !s.includes(fragment));
  assert.equal(r.limitations.length, length - 1, "Exactly one boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateEntanglementTeleportationContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateEntanglementTeleportationContracts(context(changed)), undefined, name);
  }
}

test("teleportation inventory separates the ideal protocol, passive experiment and distinct input ensembles", () => {
  assert.deepEqual([...ENTANGLEMENT_TELEPORTATION_CHECKS], []);
  assert.deepEqual([...ENTANGLEMENT_TELEPORTATION_ANALYTICAL_SOURCES], []);
  assert.deepEqual(admission.localStudySources, []);
  assert.deepEqual(admission.definitions, [["phys:qubit-teleportation-protocol", "D-phys-qubit-teleportation"]]);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  const inputs = (target) => admission.dependencies.filter((r) => r[2] === target).map((r) => r[1]);
  assert.deepEqual(inputs("boschi1998-teleportation-fringes"), [
    "boschi1998-teleportation-acquisition-context", "boschi1998-teleportation-response-context"
  ]);
  assert.deepEqual(inputs("boschi1998-teleportation-score"), [
    "boschi1998-teleportation-acquisition-context", "boschi1998-teleportation-response-context",
    "boschi1998-teleportation-inference-context", "qubit-teleportation-protocol"
  ]);
  assert.equal(admission.dependencies.some((r) => r[1] === "boschi1998-teleportation-fringes"), false,
    "The illustrative linear/elliptical scans are not the three-input score data");
});

test("the ideal teleportation definition retains its resource, classical message and experimental boundary", async () => {
  await rejectMutations([
    ["the ideal resource cannot become an arbitrary correlated state", (d) => {
      const r = d.graph.claims.find((r) => r.id === "D-phys-qubit-teleportation");
      assert.ok(r.statement.includes("shared singlet"));
      r.statement = r.statement.replace("shared singlet", "separable shared state");
    }],
    ["the receiver cannot recover the input before the classical message", (d) => {
      d.graph.claims.find((r) => r.id === "D-phys-qubit-teleportation").limitations[1] = "Bob reads the input before the classical message arrives.";
    }],
    ["ideal success is not detector efficiency", (d) => {
      d.graph.claims.find((r) => r.id === "D-phys-qubit-teleportation").limitations[0] = "All emitted experimental pairs are successfully detected and recovered.";
    }],
    ["the theory publication is not the empirical source", (d) => {
      claim(d, "score").citations[0].sourceId = "bennett1993-teleportation";
    }],
    ["a formal construction cannot acquire an experimental preparation", (d) => {
      d.graph.claims.find((r) => r.id === "D-phys-qubit-teleportation").contextIds = ["boschi1998-teleportation-acquisition"];
    }]
  ]);
});

test("the realization retains local input encoding, Bell factors and passive conditional detection", async () => {
  await rejectMutations([
    ["the published input is encoded on a resource photon", (d) => removeLimit(d, "acquisition-context", "independently supplied external input", true)],
    ["Bell factors are path and polarization, not separate incoming photons", (d) => replace(d, "response-context", "path-polarization analyzer", "two-independent-photon analyzer", true)],
    ["passive verification cannot become active feedforward", (d) => replace(d, "response-context", "passive outcome-dependent verification rather than active conditional correction", "active feedforward correction of arbitrary external inputs", true)],
    ["orthogonal rates use the same Bob detector", (d) => replace(d, "response-context", "same Bob detector at orthogonal analyzer settings", "two simultaneous detectors with independently unknown efficiencies", true)],
    ["common normalization is a declared response assumption", (d) => removeLimit(d, "response-context", "normalization k", true)],
    ["conditional output still needs the classical outcome labels", (d) => removeLimit(d, "response-context", "classical information", true)],
    ["response interpretation is not an independent acquisition", (d) => {
      d.physics.studies.find((r) => r.id === "boschi1998-teleportation-response").studyType = "primary-experiment";
    }],
    ["illustrative elliptical fringes cannot become universal tomography", (d) => removeLimit(d, "fringes", "distinct from the three linear inputs")]
  ]);
});

test("the reported score preserves the three-state benchmark, weighting and uncertainty scope", async () => {
  await rejectMutations([
    ["the three-state benchmark is not the uniform Bloch-sphere benchmark", (d) => replace(d, "inference-context", "S<=3/4", "S<=2/3", true)],
    ["the input prior is essential", (d) => replace(d, "inference-context", "prior probability 1/3", "arbitrary unknown prior probability", true)],
    ["the paper equally weights the four outcomes", (d) => replace(d, "inference-context", "1/4 over the four Alice outcomes", "the observed click frequency over the four Alice outcomes", true)],
    ["the score and quoted uncertainty remain the published values", (d) => replace(d, "score", "0.853 +/- 0.012", "0.9853 +/- 0.0012")],
    ["the uncertainty is not an independently calibrated significance", (d) => removeLimit(d, "score", "statistical/systematic decomposition")],
    ["conditional score is not an active external-input realization", (d) => removeLimit(d, "score", "active recovery of an external unknown input")],
    ["the tested alternative remains the same classical task", (d) => {
      d.physics.comparisons.find((r) => r.id === "boschi1998-teleportation-classical-channel").alternative = "Every Bell-local theory predicts a uniform-qubit fidelity of 2/3.";
    }],
    ["source review cannot silently switch to the preprint", (d) => {
      d.graph.sources.find((r) => r.id === "boschi1998-teleportation").url = "https://arxiv.org/pdf/quant-ph/9710013v1";
    }]
  ]);
});

test("teleportation guards pin complete displays, evidence roles and all dependencies", async () => {
  await rejectMutations(admission.dependencies.map(([id]) => [
    `the declared input must remain: ${id}`, (d) => {
      const length = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, length - 1);
    }
  ]));
  await rejectMutations([
    ["display prose cannot outrun the checked claim", (d) => {
      d.graph.entities.find((r) => r.id === "phys:boschi1998-teleportation-score").description = "Information travels faster than light.";
    }],
    ["unreviewed extra entity fields cannot introduce semantics", (d) => {
      d.graph.entities.find((r) => r.id === "phys:qubit-teleportation-protocol").unconditionalSuccess = true;
    }],
    ["readiness cannot admit a located experimental instance", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:boschi1998-teleportation-score").instanceAdmission = "empirical";
    }],
    ["scoped detector boundaries cannot disappear from the display", (d) => {
      d.graph.entities.find((r) => r.id === "phys:boschi1998-teleportation-score").openObligations = [];
    }],
    ["a published result cannot borrow an executable check", (d) => {
      claim(d, "score").status = "analytically-checked";
      claim(d, "score").checkIds = ["bell-chsh-data"];
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.entities.find((r) => r.id === "phys:boschi1998-teleportation-score").description = "Unconditional teleportation without classical communication.";
  assert.throws(() => validateCanonicalSource(changed), undefined,
    "The full source validator invokes the complete teleportation contract");
});
