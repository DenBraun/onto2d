import assert from "node:assert/strict";
import test from "node:test";
import { WEAK_BOSON_ADMISSION, WEAK_BOSON_CHECKS, WEAK_BOSON_ANALYTICAL_SOURCES,
  validateWeakBosonContracts } from "../../models/causal-emergence/canonical/weak-boson.mjs";

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
const claim = (data, id) => data.graph.claims.find((r) => r.id === id);
const study = (data, id) => data.physics.studies.find((r) => r.id === id);
async function rejectMutations(mutations) {
  const original = await source();
  validateWeakBosonContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateWeakBosonContracts(context(changed)), undefined, name);
  }
}

test("weak-boson admission keeps separate original acquisitions without invented executable evidence", () => {
  assert.deepEqual([...WEAK_BOSON_CHECKS], []);
  assert.deepEqual([...WEAK_BOSON_ANALYTICAL_SOURCES], []);
  assert.deepEqual(WEAK_BOSON_ADMISSION.localStudySources, []);
  assert.equal(WEAK_BOSON_ADMISSION.definitions.length, 2);
  assert.equal(WEAK_BOSON_ADMISSION.contexts.length, 6);
  assert.equal(WEAK_BOSON_ADMISSION.observations.length, 8);
  assert.deepEqual(WEAK_BOSON_ADMISSION.studyIds, [
    "ua1-1983-w-acquisition", "ua1-1983-w-response", "ua1-1983-w-inference",
    "ua1-1983-z-acquisition", "ua1-1983-z-response", "ua1-1983-z-inference"
  ]);
  for (const boson of ["w", "z"]) {
    const prefix = `ua1-1983-${boson}`;
    const output = prefix + (boson === "w" ? "-electron-candidates" : "-pair-candidates");
    assert.deepEqual(WEAK_BOSON_ADMISSION.dependencies.filter((r) => r[2] === output).map((r) => r[1]),
      [prefix + "-acquisition-context", prefix + "-response-context"]);
  }
});

test("weak-boson canonical source versions retain the actually read preprints and unresolved table identifier", async () => {
  await rejectMutations([
    ["publisher metadata is not proof of publisher reading", (d) => {
      d.graph.sources.find((s) => s.id === "ua1-1983-z-discovery").review.limit = "The publisher PDF and all detector calibrations were independently reproduced.";
    }],
    ["reviewed W bytes cannot silently become another version", (d) => {
      d.graph.sources.find((s) => s.id === "ua1-1983-w-discovery").url = "https://example.org/updated-w-paper.pdf";
    }],
    ["Z run identifier mismatch remains visible in reading limits", (d) => {
      const s = d.graph.sources.find((s) => s.id === "ua1-1983-z-discovery");
      s.review.limit = s.review.limit.replace(/The reviewed preprint prints[\s\S]*?spellings\./, "All event identifiers agree.");
    }],
    ["collective primary authorship is retained", (d) => { d.graph.sources.find((s) => s.id === "ua1-1983-w-discovery").authors = ["Onto2D contributors"]; }],
    ["mass outcome needs actual inference coordinates", (d) => { claim(d, "C-phys-ua1-1983-z-electron-mass").citations = []; }]
  ]);
});

test("weak-boson canonical acquisition and response roles cannot merge 1982 W and 1983 Z data", async () => {
  await rejectMutations([
    ["W exposure uses its acquisition year", (d) => { claim(d, "M-phys-ua1-1983-w-acquisition-context").statement = "Use the April-May 1983 55 nb^-1 acquisition for the 1982 W result."; }],
    ["Z response is not a new acquisition", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:ua1-1983-z-response-context").role = "experimental-context"; }],
    ["Z pair count owns the Z acquisition study", (d) => { claim(d, "C-phys-ua1-1983-z-pair-candidates").contextIds = ["ua1-1983-w-acquisition"]; }],
    ["Z contemporary W comparison remains distinct", (d) => { claim(d, "C-phys-ua1-1983-z-electron-mass").limitations = []; }],
    ["original W inference is not an independent repeated experiment", (d) => { study(d, "ua1-1983-w-inference").studyType = "primary-experiment"; }]
  ]);
});

test("weak-boson canonical W selection preserves displayed candidates and the final restricted subset", async () => {
  await rejectMutations([
    ["six displayed events are not six final fit events", (d) => { claim(d, "C-phys-ua1-1983-w-electron-candidates").statement = "All six candidates and the tau candidate are independent confirmed electron-neutrino W events used in the final fit."; }],
    ["two selection paths share data", (d) => { claim(d, "C-phys-ua1-1983-w-selection-comparison").limitations = []; }],
    ["detector response defines selection", (d) => { d.graph.relations = d.graph.relations.filter((r) =>
      r.id !== "physics:ua1-1983-w-response-context-ua1-1983-w-electron-candidates"); }],
    ["negligible background is not a zero-background theorem", (d) => { claim(d, "M-phys-ua1-1983-w-response-context").limitations = []; }]
  ]);
});

test("weak-boson canonical transverse masses, confidence limits and conditional fits are distinct", async () => {
  await rejectMutations([
    ["transverse mass does not recover missing longitudinal momentum", (d) => { claim(d, "D-phys-transverse-two-body-mass").statement = "The W invariant mass is exactly the electron-neutrino transverse mass in every event."; }],
    ["single invisible daughter is an assignment", (d) => { claim(d, "D-phys-transverse-two-body-mass").limitations = []; }],
    ["detector errors can cross the exact physical bound", (d) => { claim(d, "D-phys-transverse-two-body-mass").statement = "Every reconstructed event obeys estimated mT <= true parent mass regardless of detector error."; }],
    ["reported confidence bound is not a mean mass", (d) => { claim(d, "C-phys-ua1-1983-w-mass-bound").statement = "The measured mean W mass is 73 GeV/c^2 with 90 percent precision."; }],
    ["recoil methods are not independent measurements", (d) => { claim(d, "C-phys-ua1-1983-w-mass-fit").limitations = []; }],
    ["printed event arithmetic cannot acquire analytical certification", (d) => { claim(d, "C-phys-ua1-1983-w-transverse-kinematics").status = "analytically-checked"; }],
    ["the chosen fit needs its model context", (d) => { d.graph.relations = d.graph.relations.filter((r) =>
      r.id !== "physics:ua1-1983-w-inference-context-ua1-1983-w-mass-fit"); }]
  ]);
});

test("weak-boson canonical Z retains common calibration and conditional same-event recoil inputs", async () => {
  await rejectMutations([
    ["full opening angle differs from azimuth", (d) => { claim(d, "D-phys-dilepton-invariant-mass").statement = "Use only the azimuthal angle to compute the dilepton invariant mass."; }],
    ["preliminary shared calibration cannot become independent precision", (d) => { claim(d, "C-phys-ua1-1983-z-electron-mass").limitations = []; }],
    ["four and one selected candidates are not stable Z tracks", (d) => { claim(d, "C-phys-ua1-1983-z-pair-candidates").statement = "Five stable Z bosons were directly tracked through the detector."; }],
    ["dimuon recoil needs the no-neutrino assumption", (d) => { claim(d, "C-phys-ua1-1983-z-dimuon-mass").statement = "The independent unconstrained muon momenta directly determine 95.5 +/- 7.3 GeV/c^2 without calorimeter input."; }],
    ["original interpretation does not extract an intrinsic width", (d) => { claim(d, "M-phys-ua1-1983-z-inference-context").limitations = []; }],
    ["electron and muon estimates do not own separate acquisitions", (d) => { study(d, "ua1-1983-z-inference").studyType = "primary-experiment"; }]
  ]);
});

test("weak-boson canonical inference retains every declared prerequisite and excludes added formation causes", async () => {
  const inputEdges = WEAK_BOSON_ADMISSION.dependencies.filter((r) =>
    ["ua1-1983-z-electron-mass", "ua1-1983-z-dimuon-mass"].includes(r[2]));
  await rejectMutations(inputEdges.map(([id]) => [
    `missing prerequisite ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`); }
  ]));
  await rejectMutations([
    ["internal propagator is not a mandatory observed production cause", (d) => { d.graph.relations.push({
      id: "physics:unreviewed-propagator-z-cause", source: "phys:internal-propagator", target: "phys:ua1-1983-z-pair-candidates",
      kind: "descriptive", role: "interpretation-dependency", assertion: "Virtual objects necessarily form every observed Z.",
      claimIds: ["M-phys-ua1-1983-z-pair-candidates"], contextIds: ["ua1-1983-z-acquisition"]
    }); }],
    ["predicted gauge mass is not an undisclosed W fit input", (d) => { d.graph.relations.push({
      id: "physics:unreviewed-predicted-w-fit", source: "phys:weinberg-gauge-mass-matrix", target: "phys:ua1-1983-w-mass-fit",
      kind: "descriptive", role: "interpretation-dependency", assertion: "Fix the mass to the theoretical prediction before claiming its measurement.",
      claimIds: ["M-phys-ua1-1983-w-mass-fit"], contextIds: ["ua1-1983-w-inference"]
    }); }]
  ]);
});

test("weak-boson canonical publication results cannot borrow local electroweak calculation ownership", async () => {
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await source();
  validateWeakBosonContracts(context(original));
  for (const id of ["D-phys-transverse-two-body-mass", "C-phys-ua1-1983-w-mass-bound", "C-phys-ua1-1983-z-electron-mass"]) {
    const changed = structuredClone(original);
    claim(changed, id).checkIds = ["electroweak-mass-algebra"];
    assert.throws(() => validateWeakBosonContracts(context(changed)));
    assert.throws(() => validateCanonicalSource(changed));
  }
  await rejectMutations([
    ["published Z interpretation is not a local computation", (d) => { study(d, "ua1-1983-z-inference").sourceId = "electroweak-verifier"; }],
    ["observed spread is not a certified intrinsic lifetime", (d) => {
      d.physics.comparisons.find((c) => c.id === "ua1-1983-z-scale-and-width-boundary").limit = "The displayed peak width directly measures the Z lifetime.";
    }]
  ]);
});
