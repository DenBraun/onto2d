import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { SOLAR_NEUTRINO_ADMISSION, SOLAR_NEUTRINO_CHECKS,
  SOLAR_NEUTRINO_ANALYTICAL_SOURCES, validateSolarNeutrinoContracts } from "../../models/causal-emergence/canonical/solar-neutrino.mjs";

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

const claim = (data, id) => data.graph.claims.find((c) => c.id === id);
const study = (data, id) => data.physics.studies.find((s) => s.id === id);

async function rejectMutations(mutations) {
  const original = await source();
  validateSolarNeutrinoContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateSolarNeutrinoContracts(context(changed)), undefined, name);
  }
}

test("solar-neutrino admission declares a source review without an invented executable replay", () => {
  assert.deepEqual([...SOLAR_NEUTRINO_CHECKS], []);
  assert.deepEqual([...SOLAR_NEUTRINO_ANALYTICAL_SOURCES], []);
  assert.deepEqual(SOLAR_NEUTRINO_ADMISSION.localStudySources, []);
  assert.equal(SOLAR_NEUTRINO_ADMISSION.definitions.length, 1);
  assert.equal(SOLAR_NEUTRINO_ADMISSION.contexts.length, 4);
  assert.equal(SOLAR_NEUTRINO_ADMISSION.observations.length, 5);
  assert.deepEqual(SOLAR_NEUTRINO_ADMISSION.studyIds, [
    "sno2002-acquisition", "sno2002-response", "sno2002-channel-fit", "sno2002-flavor-fit"
  ]);
  const inputs = SOLAR_NEUTRINO_ADMISSION.dependencies.filter((r) => r[2] === "sno2002-active-flavor-components");
  assert.deepEqual(inputs.map((r) => r[1]), [
    "sno2002-selected-events", "sno2002-background-estimate", "solar-neutrino-channel-response",
    "sno2002-response-context", "sno2002-flavor-fit-context"
  ]);
  assert.ok(!inputs.some((r) => r[1] === "sno2002-channel-fluxes"));
  assert.deepEqual(SOLAR_NEUTRINO_ADMISSION.dependencies.filter((r) => r[2] === "sno2002-selected-events")
    .map((r) => r[1]), ["sno2002-acquisition-context", "sno2002-response-context"]);
});

test("solar-neutrino canonical source pins the reviewed author version and actual publication extent", async () => {
  await rejectMutations([
    ["unreviewed author version", (d) => { d.graph.sources.find((s) => s.id === "sno2002-nc").url = "https://arxiv.org/abs/nucl-ex/0204008v1"; }],
    ["regenerated PDF date is not publication date", (d) => { d.graph.sources.find((s) => s.id === "sno2002-nc").year = 2008; }],
    ["publisher and upstream calculations were not read", (d) => { d.graph.sources.find((s) => s.id === "sno2002-nc").review.limit = "Publisher PDF, detector calibration and all cross-section calculations independently reproduced."; }],
    ["collective source identity remains", (d) => { d.graph.sources.find((s) => s.id === "sno2002-nc").authors = ["Onto2D contributors"]; }],
    ["joint inference needs its actual locator", (d) => { claim(d, "C-phys-sno2002-active-flavor-components").citations = []; }]
  ]);
});

test("solar-neutrino canonical observed count remains distinct from statistically fitted channel yields", async () => {
  await rejectMutations([
    ["selected event table is not raw acquisition", (d) => { claim(d, "C-phys-sno2002-selected-events").statement = "2928 raw detector records each identify a neutrino flavor."; }],
    ["fractional amplitudes are fitted parameters", (d) => { claim(d, "C-phys-sno2002-channel-yields").statement = "Three directly measured independent populations contain exactly the quoted channel counts."; }],
    ["fitted yield errors are statistical here", (d) => { claim(d, "C-phys-sno2002-channel-yields").limitations = []; }],
    ["radial display extends beyond the fiducial boundary", (d) => { claim(d, "C-phys-sno2002-selected-events").limitations = []; }],
    ["an analysis context is not an acquisition", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:sno2002-channel-fit-context").role = "experimental-context"; }],
    ["observed selection owns the acquisition study", (d) => { claim(d, "C-phys-sno2002-selected-events").contextIds = ["sno2002-channel-fit"]; }],
    ["calibrated energy and radius define the selection", (d) => { d.graph.relations = d.graph.relations.filter((r) =>
      r.id !== "physics:sno2002-response-context-sno2002-selected-events"); }]
  ]);
});

test("solar-neutrino canonical response keeps thresholds, efficiencies, backgrounds and spectral assumptions separate", async () => {
  await rejectMutations([
    ["capture and accepted detection are different efficiencies", (d) => { claim(d, "M-phys-sno2002-response-context").statement = "Apply a 29.9 percent detection efficiency to all internal and external neutron events."; }],
    ["neutrino and reconstructed energies differ", (d) => { claim(d, "D-phys-solar-neutrino-channel-response").limitations = []; }],
    ["fixed background does not mean exact known background", (d) => { claim(d, "C-phys-sno2002-background-estimate").statement = "The precisely known neutron background contains exactly 78 observed events."; }],
    ["ES flux is not total active flux", (d) => { claim(d, "C-phys-sno2002-channel-fluxes").limitations = []; }],
    ["joint fit retains B8 shape", (d) => { claim(d, "M-phys-sno2002-flavor-fit-context").statement = "Infer the component fluxes without any spectrum or response assumption."; }]
  ]);
});

test("solar-neutrino canonical joint inference retains each real data and response prerequisite", async () => {
  const required = [
    "sno2002-selected-events", "sno2002-background-estimate", "solar-neutrino-channel-response",
    "sno2002-response-context", "sno2002-flavor-fit-context"
  ];
  await rejectMutations(required.map((id) => [
    `joint inference lost ${id}`,
    (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}-sno2002-active-flavor-components`); }
  ]));
  await rejectMutations([
    ["do not reverse measurement and inference", (d) => {
      const edge = d.graph.relations.find((r) => r.id === "physics:sno2002-selected-events-sno2002-channel-yields");
      [edge.source, edge.target] = [edge.target, edge.source];
    }],
    ["the original joint result is not a later independent replication", (d) => { study(d, "sno2002-flavor-fit").studyType = "primary-experiment"; }],
    ["same acquisition is retained in the context", (d) => { claim(d, "M-phys-sno2002-flavor-fit-context").limitations = []; }]
  ]);
});

test("solar-neutrino canonical contracts reject added subtraction or unreviewed mechanism edges", async () => {
  await rejectMutations([
    ["channel centers cannot replace the direct joint likelihood", (d) => { d.graph.relations.push({
      id: "physics:unreviewed-sno-flux-subtraction", source: "phys:sno2002-channel-fluxes",
      target: "phys:sno2002-active-flavor-components", kind: "descriptive", role: "interpretation-dependency",
      assertion: "Subtract the channel flux centers to reproduce the joint result.",
      claimIds: ["M-phys-sno2002-active-flavor-components"], contextIds: ["sno2002-flavor-fit"]
    }); }],
    ["oscillation convention does not determine a unique SNO mechanism", (d) => { d.graph.relations.push({
      id: "physics:unreviewed-sno-vacuum-phase-cause", source: "phys:neutrino-vacuum-phase",
      target: "phys:sno2002-active-flavor-components", kind: "descriptive", role: "interpretation-dependency",
      assertion: "The vacuum oscillation phase uniquely fixes the measured SNO flavor conversion.",
      claimIds: ["M-phys-sno2002-active-flavor-components"], contextIds: ["sno2002-flavor-fit"]
    }); }]
  ]);
});

test("solar-neutrino canonical review preserves SNO-only inference and unresolved wider neutrino scopes", async () => {
  await rejectMutations([
    ["SNO-only result does not include SK constraint", (d) => { claim(d, "C-phys-sno2002-active-flavor-components").statement = "The independent SNO-only flux is 3.45 with 5.5-sigma significance."; }],
    ["shape-relaxed alternative is not the principal precision", (d) => { d.physics.comparisons.find((c) => c.id === "sno2002-shape-and-external-input-boundary").limit = "The principal result is fully shape independent."; }],
    ["mass and mechanism are not measured by this flux decomposition", (d) => { claim(d, "C-phys-sno2002-active-flavor-components").limitations = []; }]
  ]);
  const pending = JSON.parse(await readFile(new URL("../../references/canonical/pending-review.json", import.meta.url), "utf8"));
  for (const pointer of ["/17", "/25"]) assert.ok(pending.cards.some((c) =>
    c.sourcePath === "references/level-1.json" && c.pointer === pointer), `SNO alone must not close ${pointer}`);
});

test("solar-neutrino canonical original analyses cannot acquire unrelated local check ownership", async () => {
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const original = await source();
  validateSolarNeutrinoContracts(context(original));
  for (const id of ["D-phys-solar-neutrino-channel-response", "C-phys-sno2002-channel-yields", "C-phys-sno2002-active-flavor-components"]) {
    const changed = structuredClone(original);
    claim(changed, id).checkIds = ["neutrino-phase-data-algebra"];
    assert.throws(() => validateSolarNeutrinoContracts(context(changed)));
    assert.throws(() => validateCanonicalSource(changed));
  }
  await rejectMutations([
    ["original likelihood is not owned by the local vacuum-phase verifier", (d) => { study(d, "sno2002-flavor-fit").sourceId = "neutrino-verifier"; }],
    ["publication-supported result is not a local algebraic check", (d) => { claim(d, "C-phys-sno2002-active-flavor-components").status = "analytically-checked"; }]
  ]);
});
