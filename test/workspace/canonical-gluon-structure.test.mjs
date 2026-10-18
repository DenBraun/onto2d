import assert from "node:assert/strict";
import test from "node:test";
import {
  GLUON_STRUCTURE_ADMISSION,
  GLUON_STRUCTURE_CHECKS,
  GLUON_STRUCTURE_ANALYTICAL_SOURCES,
  validateGluonStructureContracts
} from "../../models/causal-emergence/canonical/gluon-structure.mjs";

const definitionId = "D-phys-source-conditioned-field-structure";
const synthesisId = "C-phys-gauge-field-structure-evidence";
const methodId = "M-phys-gauge-field-structure-evidence";
const definitionNode = "phys:source-conditioned-field-structure";
const synthesisNode = "phys:gauge-field-structure-evidence";
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (data, id) => data.graph.claims.find((r) => r.id === id);
const entity = (data, id) => data.graph.entities.find((r) => r.id === id);
const relation = (data, id) => data.graph.relations.find((r) => r.id === id);
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one boundary: ${fragment}`);
}
async function reject(mutations) {
  const original = await source();
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  validateGluonStructureContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateGluonStructureContracts(context(changed)), /Gauge-field structure .* changed/, name);
    assert.throws(() => validateCanonicalSource(changed), undefined, `Full canonical guard: ${name}`);
  }
}

test("gauge-field synthesis reuses distinct computational contexts without inventing acquisition or replay", async () => {
  const data = await source();
  validateGluonStructureContracts(context(data));
  assert.deepEqual(GLUON_STRUCTURE_ADMISSION.definitions, [[definitionNode, definitionId]]);
  assert.deepEqual(GLUON_STRUCTURE_ADMISSION.formalDependencies.map(([, endpoints]) => endpoints), [
    ["phys:gluon-self-coupling", definitionNode],
    ["phys:lattice-gauge-formulation", definitionNode],
    ["phys:static-source-plaquette-density", definitionNode],
    ["phys:transverse-flux-width", definitionNode]
  ]);
  assert.deepEqual(GLUON_STRUCTURE_ADMISSION.dependencies.map(([, from, to]) => [from, to]), [
    ["source-conditioned-field-structure", "gauge-field-structure-evidence"],
    ["creutz-wilson-loops", "gauge-field-structure-evidence"],
    ["bali-avoided-crossing", "gauge-field-structure-evidence"],
    ["bulava2019-relative-spectrum", "gauge-field-structure-evidence"],
    ["bali1995-field-profiles", "gauge-field-structure-evidence"],
    ["bali1995-profile-widths", "gauge-field-structure-evidence"]
  ]);
  for (const key of ["contexts", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(GLUON_STRUCTURE_ADMISSION[key], []);
  assert.equal(GLUON_STRUCTURE_CHECKS.size, 0);
  assert.equal(GLUON_STRUCTURE_ANALYTICAL_SOURCES.size, 0);
  const expectedContexts = [...new Set([
    "creutz1980", "bali2005", "bulava2019-spectrum",
    ...claim(data, "C-phys-bali1995-field-profiles").contextIds,
    ...claim(data, "C-phys-bali1995-profile-widths").contextIds
  ])];
  assert.deepEqual(GLUON_STRUCTURE_ADMISSION.observations, [
    ["gauge-field-structure-evidence", synthesisId, expectedContexts]
  ]);
  assert.deepEqual(claim(data, synthesisId).contextIds, expectedContexts);
  assert.deepEqual(claim(data, methodId).contextIds, expectedContexts);
  for (const id of expectedContexts)
    assert.equal(data.physics.studies.find((r) => r.id === id).studyType, "computational-analysis", id);
  assert.equal(claim(data, synthesisId).status, "literature-synthesis");
});

test("formal SU3 interactions cannot supply SU2 numerical predictions or replace the declared field probe", async () => {
  await reject([
    ["formal comparison does not transfer numerical color factors or sea content", (d) => dropLimit(d, definitionId, "does not substitute SU(3) color factors")],
    ["a potential alone is not a spatial field measurement", (d) => dropLimit(d, synthesisId, "do not resolve the spatial field distribution")],
    ["self-coupling cannot become the numerical SU2 input", (d) => {
      relation(d, "physics:gluon-self-coupling-source-conditioned-field-structure").assertion =
        "The SU(3) color factors and physical quark ensemble directly determine the pure-SU(2) field profile.";
    }],
    ["width cannot become a universal physical radius", (d) => {
      relation(d, "physics:transverse-flux-width-source-conditioned-field-structure").assertion =
        "The reported width measures one universal radius for all gluon fields and hadrons.";
    }]
  ]);
});

test("static field structure cannot become a measured feedback history or a renormalized vacuum condensate", async () => {
  await reject([
    ["Monte Carlo and Euclidean projection are not physical-time feedback", (d) => dropLimit(d, definitionId, "Closed gauge-index contractions")],
    ["vacuum subtraction does not establish an absolute condensate", (d) => dropLimit(d, definitionId, "No named renormalized condensate operator")],
    ["a computational sampling arrow is not temporal formation", (d) => {
      relation(d, "physics:lattice-gauge-formulation-source-conditioned-field-structure").assertion =
        "The Monte Carlo update sequence directly measures the formation and causal maintenance of a gluon condensate.";
    }],
    ["an energy-spectrum fit cannot be relabeled local imaging", (d) => {
      claim(d, methodId).statement =
        "Interpret the Bali and Bulava energy fits as direct images of real-time gluon feedback and a measured condensate population.";
    }]
  ]);
});

test("original necessary parents, weights, minima and SOMA labels remain excluded scientific assertions", async () => {
  await reject([
    ["weights and unit thresholds cannot regain physical meaning", (d) => dropLimit(d, definitionId, "original weights 0.6/0.4")],
    ["phase and type labels are not experimentally validated stages", (d) => dropLimit(d, definitionId, "original SOMA phase 1")],
    ["a descriptive input cannot hide a necessary maintenance weight", (d) => {
      const r = relation(d, "physics:gluon-self-coupling-source-conditioned-field-structure");
      r.weight = 0.4;
      r.necessity = "necessary";
      r.N_min = 1;
      r.N_crit = 1;
    }],
    ["the existing nonperturbative formulation is not a newly established precursor", (d) => {
      claim(d, definitionId).statement +=
        " Source card 1.31 is a newly measured universal stage that necessarily precedes and maintains all gluon fields.";
    }]
  ]);
});

test("finite lattice evidence cannot establish common-ensemble significance or universal matter stability", async () => {
  await reject([
    ["different computations and repeated observables cannot be pooled as independent experiments", (d) => dropLimit(d, synthesisId, "not independent experiments")],
    ["profile and width share their preparation and tail assumptions", (d) => dropLimit(d, synthesisId, "profile and width inferences share")],
    ["Bali gaps and Bulava diagonal crossings remain different estimators", (d) => dropLimit(d, synthesisId, "not the same estimator as the Bali gap")],
    ["a screened spectrum is not a physical-mass continuum or stability theorem", (d) => dropLimit(d, synthesisId, "None of these finite results proves")],
    ["the definition does not derive nuclear or atomic stability", (d) => dropLimit(d, definitionId, "all-channel nuclear/atomic stability")],
    ["an interpretation arrow cannot assert universal maintenance", (d) => {
      relation(d, "physics:bulava2019-relative-spectrum-gauge-field-structure-evidence").assertion =
        "This spectrum proves that one universal field-organization mechanism permanently maintains all hadrons, nuclei and atoms.";
    }]
  ]);
});

test("synthesis ownership and citations cannot promote selected computations to new experiments or local checks", async () => {
  await reject([
    ["a valid unrelated study is not a replacement for Creutz", (d) => { claim(d, synthesisId).contextIds[0] = "lee2002"; }],
    ["method ownership cannot omit the screened-spectrum context", (d) => {
      const c = claim(d, methodId), before = c.contextIds.length;
      c.contextIds = c.contextIds.filter((id) => id !== "bulava2019-spectrum");
      assert.equal(c.contextIds.length, before - 1);
    }],
    ["a literature synthesis is not a new locally checked calculation", (d) => {
      claim(d, synthesisId).status = "analytically-checked";
      claim(d, synthesisId).checkIds = ["nucleon-charge-color-algebra"];
    }],
    ["formal support cannot silently change its source", (d) => { claim(d, definitionId).citations[0].sourceId = "lee2002"; }],
    ["unreviewed detector ownership cannot be appended to a computational synthesis", (d) => {
      claim(d, synthesisId).experimentalContextIds = ["lee2002"];
    }]
  ]);
});

test("every synthesis prerequisite remains an interpretation input rather than an empirical maintenance edge", async () => {
  const mutations = GLUON_STRUCTURE_ADMISSION.dependencies.flatMap(([suffix]) => [
    [`${suffix} cannot silently disappear`, (d) => {
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${suffix}`);
    }]
  ]);
  mutations.push([
    "the profile result cannot become a measured causal maintenance relation",
    (d) => { relation(d, "physics:bali1995-field-profiles-gauge-field-structure-evidence").kind = "functional-support"; }
  ]);
  mutations.push([
    "the width prerequisite cannot be silently removed from the formal scope",
    (d) => {
      d.graph.relations = d.graph.relations.filter((r) =>
        r.id !== "physics:transverse-flux-width-source-conditioned-field-structure");
    }
  ]);
  await reject(mutations);
});

test("public descriptions, atlas roles and display metadata cannot overstate the reviewed field structure", async () => {
  await reject([definitionNode, synthesisNode].flatMap((id) => [
    [`${id} cannot display an unqualified universal process`, (d) => {
      entity(d, id).description = "An experimentally imaged universal gluon condensate that permanently maintains matter.";
    }],
    [`${id} cannot erase all displayed limits`, (d) => { entity(d, id).openObligations = []; }],
    [`${id} cannot acquire a universal formation phase`, (d) => { entity(d, id).phase = "necessary-formation-stage"; }],
    [`${id} cannot gain an empirically certified atlas meaning`, (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes =
        "An independent experiment that proves a universal feedback mechanism with one necessary carrier.";
    }],
    [`${id} cannot become an observed material instance`, (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "empirical-instance";
    }]
  ]));
});

test("the full canonical validator invokes the new field-structure contract for display-only mutations", async () => {
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  entity(changed, synthesisNode).description =
    "Independent real-time measurements establish universally stable gluonic matter.";
  assert.throws(() => validateCanonicalSource(changed),
    /Gauge-field structure entities changed phys:gauge-field-structure-evidence/);
});
