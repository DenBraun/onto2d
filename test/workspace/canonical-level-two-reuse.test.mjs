import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { LEVEL_TWO_ADMISSION, LEVEL_TWO_NODE_IDS, validateLevelTwoContracts } from "../../models/causal-emergence/canonical/level-two.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const physicsIds = ["lamb1947", "rau2020-awg1", "rau2020-awg2", "rau2020-hd",
  "korobov2017-hd", "korobov2017-h2", "lamoreaux1997", "bressi2002"];

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((kind) =>
      [kind, new Map(data.graph[kind].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((kind) =>
      [kind, new Map(data.physics[kind].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function directInputIds() {
  return new Set([
    ...LEVEL_TWO_ADMISSION.dependencies.flatMap(([, from, to]) =>
      [from.includes(":") ? from : `phys:${from}`, `phys:${to}`]),
    ...LEVEL_TWO_ADMISSION.formalDependencies.flatMap(([, endpoints]) => endpoints)
  ].filter((id) => !LEVEL_TWO_NODE_IDS.has(id)));
}

test("Level-2 reuse retains the existing preparations and direct evidence inputs", async () => {
  const data = await source();
  validateLevelTwoContracts(context(data));
  const owned = new Set(LEVEL_TWO_ADMISSION.studyIds);
  const reused = new Set([...LEVEL_TWO_ADMISSION.contexts, ...LEVEL_TWO_ADMISSION.observations]
    .flatMap(([, , ids]) => ids).filter((id) => !owned.has(id)));
  assert.deepEqual(reused, new Set([...physicsIds, "hanssen2001"]));
  assert.equal(data.optics.studies.filter((record) => record.id === "hanssen2001").length, 1);
  for (const id of physicsIds) assert.equal(data.physics.studies.filter((record) => record.id === id).length, 1);
  for (const id of directInputIds()) {
    const input = data.graph.entities.find((record) => record.id === id);
    assert.ok(input.claimIds.length);
    assert.ok(input.claimIds.every((claimId) => data.graph.claims.some((claim) => claim.id === claimId)));
    assert.ok(data.readiness.nodeRoles.some((record) => record.nodeId === id));
  }
});

test("reused spectral, mass, energy and force observables cannot become universal formation measurements", async () => {
  const original = await source();
  for (const id of physicsIds) {
    const changed = structuredClone(original);
    changed.physics.studies.find((record) => record.id === id).observable =
      "Directly observed universal formation rate with all context and model uncertainties eliminated.";
    assert.throws(() => validateCanonicalSource(changed), /Level-2 reused physics study changed/,
      `${id}: the original acquisition or calculation must keep its observable`);
  }
});

test("reused physics contexts preserve preparation and interpretation limits in full", async () => {
  const original = await source();
  for (const id of physicsIds) {
    for (const field of ["preparation", "limitations"]) {
      const changed = structuredClone(original);
      const study = changed.physics.studies.find((record) => record.id === id);
      study[field] = field === "limitations" ? [] : "A new independently repeated acquisition without the original controls.";
      assert.throws(() => validateLevelTwoContracts(context(changed)), /Level-2 reused physics study changed/,
        `${id}: preserve ${field} rather than only the study ID`);
    }
  }
});

test("the actual reused spectral, Casimir and optical claims cannot acquire unsupported universal conclusions", async () => {
  const original = await source();
  for (const id of ["C-phys-lamb-separation", "C-phys-lamb-radiative-interpretation",
    "C-phys-lamoreaux-casimir", "O-reflection"]) {
    const changed = structuredClone(original);
    changed.graph.claims.find((record) => record.id === id).statement =
      "Direct observation proves a universal formation law with all context and model uncertainties eliminated.";
    assert.throws(() => validateCanonicalSource(changed), /Level-2 reused claims changed/,
      `${id}: a reused input retains its original evidence scope`);
  }
});

test("direct input descriptions and representation roles retain the same reviewed meaning", async () => {
  const original = await source();
  for (const id of directInputIds()) {
    const changedEntity = structuredClone(original);
    changedEntity.graph.entities.find((record) => record.id === id).description =
      "A directly observed universal formation mechanism without preparation or model limits.";
    assert.throws(() => validateLevelTwoContracts(context(changedEntity)), /Level-2 reused entities changed/, id);

    const changedRole = structuredClone(original);
    changedRole.readiness.nodeRoles.find((record) => record.nodeId === id).denotes =
      "A fully validated physical instance with no remaining evidence requirements.";
    assert.throws(() => validateLevelTwoContracts(context(changedRole)), /Level-2 reused readiness changed/, id);
  }
});
