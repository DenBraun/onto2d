import assert from "node:assert/strict";
import test from "node:test";
import {
  CONFINEMENT_STRING_BREAKING_ADMISSION as admission,
  CONFINEMENT_STRING_BREAKING_CHECKS,
  CONFINEMENT_STRING_BREAKING_ANALYTICAL_SOURCES,
  validateConfinementStringBreakingContracts
} from "../../models/causal-emergence/canonical/confinement-string-breaking.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs").then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (data, suffix, method = false) => data.graph.claims.find((record) => record.id === `${method ? "M" : "C"}-phys-bulava2019-${suffix}`);
function replace(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), `Missing mutation target: ${from}`);
  record.statement = record.statement.replace(from, to);
}
function dropLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method), count = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, count - 1, "The mutation removes exactly one reviewed boundary");
}
async function rejects(mutations) {
  const original = await source();
  validateConfinementStringBreakingContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateConfinementStringBreakingContracts(context(changed)), undefined, name);
  }
}

test("string-breaking inventory separates an ensemble, energy extraction and conditional model", () => {
  assert.deepEqual([...CONFINEMENT_STRING_BREAKING_CHECKS], []);
  assert.deepEqual([...CONFINEMENT_STRING_BREAKING_ANALYTICAL_SOURCES], []);
  assert.deepEqual(admission.localStudySources, []);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  assert.equal(admission.studyIds.length, 3);
  const inputs = (target) => admission.dependencies.filter((record) => record[2] === target).map((record) => record[1]);
  assert.deepEqual(inputs("bulava2019-relative-spectrum"), [
    "bulava2019-ensemble-context", "bulava2019-spectral-context", "static-light-string-basis"
  ]);
  assert.deepEqual(inputs("bulava2019-string-breaking-scales"), [
    "bulava2019-relative-spectrum", "bulava2019-mixing-context", "bulava2019-ensemble-context"
  ]);
  assert.ok(admission.dependencies.every((record) => record[4] === "interpretation-dependency"),
    "The published computational chain is not an experimental intervention");
});

test("the N200 preparation preserves nonphysical masses, finite size and shared sampling", async () => {
  await rejects([
    ["two-plus-one sea flavors cannot become a quenched ensemble", (data) => replace(data, "ensemble-context", "Nf=2+1", "Nf=0", true)],
    ["finite spatial volume is a declared input", (data) => replace(data, "ensemble-context", "128 x 48^3", "128 x 96^3", true)],
    ["mass tuning is not physical-point validation", (data) => dropLimit(data, "ensemble-context", "light quarks are heavier", true)],
    ["open temporal boundaries constrain the sampled region", (data) => replace(data, "ensemble-context", "central half", "entire temporal extent", true)],
    ["the loop and quark-line samples are not independent", (data) => dropLimit(data, "ensemble-context", "shared inputs", true)],
    ["the spacing is an adopted scale, not locally recalibrated", (data) => dropLimit(data, "ensemble-context", "adopted from reference 29", true)],
    ["computational preparation cannot become a detector experiment", (data) => {
      data.physics.studies.find((record) => record.id === "bulava2019-ensemble").studyType = "primary-experiment";
    }]
  ]);
});

test("relative-energy extraction retains its basis, covariance and static-source subtraction", async () => {
  await rejects([
    ["three physical channels are not a three-operator implementation", (data) => replace(data, "spectral-context", "4 x 4", "3 x 3", true)],
    ["the string smearing levels are retained", (data) => replace(data, "spectral-context", "15 and 20", "15 and 30", true)],
    ["the fixed GEVP times remain explicit", (data) => replace(data, "spectral-context", "t0/a=5 and td/a=10", "t0/a=1 and td/a=2", true)],
    ["the denominator removes two static-light energies", (data) => replace(data, "spectral-context", "C_B(t)^2", "C_B(t)", true)],
    ["the spectral fit uses the stated covariance", (data) => replace(data, "spectral-context", "correlated single-exponential", "uncorrelated single-exponential", true)],
    ["fixed bootstrap covariance is not independently refitted", (data) => dropLimit(data, "spectral-context", "one fixed covariance", true)],
    ["relative energies are not absolute quark masses", (data) => dropLimit(data, "spectral-context", "divergent static-source mass", true)],
    ["threshold difference is not a single-meson splitting", (data) => replace(data, "relative-spectrum", "2E_Bs-2E_B", "E_Bs-E_B")],
    ["screening is not an isolated colored final state", (data) => dropLimit(data, "relative-spectrum", "color-singlet meson pairs")]
  ]);
});

test("the mixing model keeps its convention, fit range, dependent distances and units", async () => {
  await rejects([
    ["the second fit is not the correlated correlator fit", (data) => replace(data, "mixing-context", "uncorrelated six-parameter", "correlated six-parameter", true)],
    ["the separation range cannot silently extend to all r", (data) => replace(data, "mixing-context", "11<=r/a<=25", "0<=r/a<infinity", true)],
    ["a basis choice cannot prove no light-strange mixing", (data) => dropLimit(data, "mixing-context", "physical absence of interaction", true)],
    ["model diagonal constants are not measured threshold inputs", (data) => dropLimit(data, "mixing-context", "separately estimated two-meson thresholds", true)],
    ["crossing convention is not a minimum-gap estimator", (data) => dropLimit(data, "mixing-context", "Bali two-flavor minimum-gap", true)],
    ["the string tension has energy-per-length units", (data) => replace(data, "string-breaking-scales", "a^2*sigma=0.0229(3)", "a*sigma=0.0229(3)")],
    ["the strange and light crossing distances are distinct", (data) => replace(data, "string-breaking-scales", "r_cs/a=20.114(87)", "r_cs/a=19.053(82)")],
    ["physical-unit errors retain the adopted scale", (data) => dropLimit(data, "string-breaking-scales", "adopted scale uncertainty")],
    ["an energy mixing parameter is not a decay width", (data) => dropLimit(data, "string-breaking-scales", "real-time string-breaking rate")],
    ["rounded values are not a replicated fit", (data) => { claim(data, "string-breaking-scales").status = "analytically-checked"; }],
    ["the comparison cannot establish a universal theory", (data) => {
      data.physics.comparisons.find((record) => record.id === "bulava2019-crossing-definition").result = "specified-alternative-disfavored";
    }]
  ]);
});

test("string-breaking contracts protect all evidence, display roles and input dependencies", async () => {
  await rejects(admission.dependencies.map(([id]) => [
    `missing declared input ${id}`, (data) => { data.graph.relations = data.graph.relations.filter((record) => record.id !== `physics:${id}`); }
  ]));
  await rejects([
    ["display descriptions cannot add a universal confinement claim", (data) => {
      data.graph.entities.find((record) => record.id === "phys:bulava2019-string-breaking-scales").description = "A universal radius proves continuum confinement and nuclear stability.";
    }],
    ["displayed limitations cannot omit the unreproduced scope", (data) => {
      data.graph.entities.find((record) => record.id === "phys:bulava2019-relative-spectrum").openObligations = [];
    }],
    ["the exact publication remains the source", (data) => {
      data.graph.sources.find((record) => record.id === "bulava2019-string-breaking").doi = "10.1103/PhysRevD.71.114513";
    }],
    ["atlas role cannot turn a computed spectrum into a located instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:bulava2019-relative-spectrum").instanceAdmission = "empirical";
    }],
    ["an unreviewed semantic field cannot be appended", (data) => {
      data.graph.relations.find((record) => record.id === `physics:${admission.dependencies[0][0]}`).necessity = "necessary";
    }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:unreviewed-bali-bulava-numerical-input", source: "phys:bali-avoided-crossing", target: "phys:bulava2019-string-breaking-scales",
    kind: "descriptive", role: "interpretation-dependency", assertion: "The old two-flavor gap determines the new strange-channel crossing.",
    claimIds: ["M-phys-bulava2019-string-breaking-scales"], contextIds: ["bulava2019-mixing"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "The full validator rejects an unreviewed cross-ensemble numerical edge");
  const altered = structuredClone(await source());
  claim(altered, "string-breaking-scales").statement = "The mixing energies measure real-time pair-production rates.";
  assert.throws(() => validateCanonicalSource(altered), /String-breaking claims changed/,
    "The full source validator invokes the new exact scientific contract");
});
