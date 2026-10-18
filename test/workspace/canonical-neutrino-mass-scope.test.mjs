import assert from "node:assert/strict";
import test from "node:test";
import {
  NEUTRINO_MASS_SCOPE_ADMISSION as admission,
  NEUTRINO_MASS_SCOPE_CHECKS,
  NEUTRINO_MASS_SCOPE_ANALYTICAL_SOURCES,
  validateNeutrinoMassScopeContracts
} from "../../models/causal-emergence/canonical/neutrino-mass-scope.mjs";

const definition = "D-phys-neutrino-mass-mixing-scope";
const synthesis = "C-phys-neutrino-mass-mixing-evidence";
const method = "M-phys-neutrino-mass-mixing-evidence";
const inputSuffixes = ["kamland2005-oscillation-fit", "superk1998-oscillation-fit",
  "sno2002-active-flavor-components", "opera2015-appearance-evidence", "opera2015-parameter-compatibility"];
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key,
      new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replaceStatement(data, id, statement) {
  claim(data, id).statement = statement;
  const node = data.graph.entities.find((item) => item.claimIds.includes(id));
  if (node) node.description = statement;
}
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one boundary: ${fragment}`);
  const node = data.graph.entities.find((item) => item.claimIds.includes(id));
  if (node) node.openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateNeutrinoMassScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateNeutrinoMassScopeContracts(context(data)), /Neutrino mass scope .* changed/, name);
  }
}

test("mass-mixing evidence compares named results without adding an experiment, fit or replay", async () => {
  assert.deepEqual(admission.definitions, [["phys:neutrino-mass-mixing-scope", definition]]);
  assert.equal(admission.observations.length, 1);
  assert.equal(NEUTRINO_MASS_SCOPE_CHECKS.size, 0);
  assert.equal(NEUTRINO_MASS_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  const data = await source();
  validateNeutrinoMassScopeContracts(context(data));
  assert.equal(claim(data, definition).status, "definition");
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  for (const id of [definition, synthesis, method]) assert.deepEqual(claim(data, id).checkIds, []);
  assert.deepEqual(new Set(admission.dependencies.map(([, from]) => from)),
    new Set(["neutrino-mass-mixing-scope", ...inputSuffixes]));
});

test("five selected outcomes retain four owning inference contexts and supplemental-source ownership", async () => {
  const data = await source();
  const expected = [...new Set(inputSuffixes.flatMap((suffix) => claim(data, `C-phys-${suffix}`).contextIds))];
  assert.deepEqual(expected, ["kamland2005-oscillation-fit", "superk1998-oscillation-fit",
    "sno2002-flavor-fit", "opera2015-inference"]);
  assert.deepEqual(claim(data, "C-phys-opera2015-appearance-evidence").contextIds,
    claim(data, "C-phys-opera2015-parameter-compatibility").contextIds);
  const studies = expected.map((id) => data.physics.studies.find((record) => record.id === id));
  assert.ok(studies.every((record) => record.studyType === "computational-analysis"));
  assert.deepEqual(studies.map((record) => record.sourceId),
    ["kamland2005", "superk1998-atmospheric", "sno2002-nc", "opera2015-appearance"]);
  const owners = new Set(studies.map((record) => record.sourceId));
  const supplemental = new Map(admission.inferenceSources);
  for (const id of [synthesis, method]) {
    assert.deepEqual(claim(data, id).contextIds, expected);
    const role = id === method ? "method" : "supports";
    const extra = [...new Set(claim(data, id).citations
      .filter((citation) => citation.role === role && !owners.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(supplemental.get(id), extra);
    assert.ok(extra.includes("opera2013-beam-method"), "Beam preparation does not invent another inference acquisition");
  }
});

test("source-card parent classifications cannot regain causal or mass-generation status", async () => {
  await rejects([
    ["unitarity and flavor labels remain conditional model/readout assumptions", (data) =>
      dropLimit(data, definition, "charged-lepton preparation/readout")],
    ["charged-fermion Yukawa couplings cannot silently become measured neutrino masses", (data) =>
      dropLimit(data, definition, "Charged-fermion Higgs/Yukawa relations")],
    ["parent weight and carrier count cannot become measured universal thresholds", (data) =>
      dropLimit(data, definition, "Weight 1, Nmin=Ncrit=1")],
    ["unknown mechanism is a declared boundary rather than permission for an invented mechanism", (data) =>
      dropLimit(data, definition, "original refusal to specify")],
    ["basis structure cannot become an observed formation intervention", (data) => replaceStatement(data, definition,
      "One lepton necessarily generates all neutrino masses through the charged-fermion Higgs coupling at the original unit parent weight.")]
  ]);
});

test("identifiability, unresolved mass questions and propagation applications stay separately scoped", async () => {
  await rejects([
    ["common-phase invariance and the unequal-splitting condition remain explicit", (data) =>
      dropLimit(data, definition, "Two unequal nonzero mass-squared differences")],
    ["oscillations cannot acquire unreviewed absolute, Majorana or cosmological bounds", (data) =>
      dropLimit(data, definition, "No beta-endpoint")],
    ["matter potentials cannot become generators of the input vacuum masses", (data) =>
      dropLimit(data, definition, "medium potential does not generate")],
    ["historical fits cannot prove all three masses are nonzero", (data) => replaceStatement(data, synthesis,
      "The reactor and atmospheric best fits measure all three positive absolute masses, their ordering and Majorana phases without additional assumptions.")],
    ["a formal definition cannot borrow a published detector context", (data) => {
      claim(data, definition).contextIds = ["kamland2005-oscillation-fit"];
    }]
  ]);
});

test("reactor, atmospheric and solar outputs cannot lose their distinct inferential quantities", async () => {
  await rejects([
    ["effective two-flavor fits cannot become exact modern three-state eigenpairs", (data) =>
      dropLimit(data, synthesis, "reactor-only rate-and-shape")],
    ["the joint SNO response cannot become an independently subtracted mass measurement", (data) =>
      dropLimit(data, synthesis, "SNO-only direct joint")],
    ["SNO active components cannot be relabeled as a measured mass splitting", (data) => replaceStatement(data, synthesis,
      "SNO independently measures the vacuum mass splitting by subtracting its independent NC and CC flux measurements.")],
    ["generic empirical placeholders cannot admit unreviewed astrophysical constraints", (data) =>
      dropLimit(data, synthesis, "Generic solar, atmospheric, reactor and accelerator evidence placeholders")],
    ["the synthesis cannot be relabeled as an independent numerical replay", (data) => {
      claim(data, synthesis).status = "analytically-checked";
      claim(data, synthesis).checkIds = ["neutrino-phase-data-algebra"];
    }]
  ]);
});

test("dependent OPERA outputs cannot create extra frequencies, replications or a pooled likelihood", async () => {
  await rejects([
    ["appearance and compatibility must retain their shared-data disclosure", (data) =>
      dropLimit(data, synthesis, "OPERA appearance significance")],
    ["four contexts and five outputs cannot become five independent acquisitions", (data) =>
      dropLimit(data, synthesis, "four named inference contexts and five outcomes")],
    ["a conditional embedding cannot become a new fitted spectrum", (data) =>
      dropLimit(data, synthesis, "supplied common three-state mass-induced interpretation")],
    ["method and synthesis cannot omit the shared OPERA inference context", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = claim(data, id).contextIds
        .filter((value) => value !== "opera2015-inference");
    }],
    ["a reactor arithmetic replay cannot replace a primary atmospheric inference", (data) => {
      const relation = data.graph.relations.find((record) => record.source === "phys:superk1998-oscillation-fit"
        && record.target === "phys:neutrino-mass-mixing-evidence");
      assert.ok(relation);
      relation.source = "phys:neutrino-arithmetic";
    }],
    ["nominal OPERA parameters cannot become an additional independent measurement", (data) => replaceStatement(data, method,
      "Combine OPERA nominal signal inputs, appearance significance and fitted splitting as independent frequencies in a new global mass likelihood.")]
  ]);
});

test("displayed roles and required dependencies cannot silently become empirical mass-construction rules", async () => {
  const mutations = admission.definitions.concat(admission.observations.map(([suffix]) => [`phys:${suffix}`]))
    .flatMap(([id]) => [
      [`${id} retains its source coordinates`, (data) => {
        data.graph.entities.find((record) => record.id === id).sourceCoordinates = [];
      }],
      [`${id} cannot admit an observed universal construction`, (data) => {
        data.readiness.nodeRoles.find((record) => record.nodeId === id).instanceAdmission = "observed";
      }],
      [`${id} cannot display an unsupported measured mechanism`, (data) => {
        data.readiness.nodeRoles.find((record) => record.nodeId === id).denotes =
          "A measured universal mechanism that generates every neutrino mass from one required lepton.";
      }]
    ]);
  for (const [id] of admission.formalDependencies) {
    mutations.push([`required formal boundary ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
    }]);
    mutations.push([`formal dependency ${id} is not a measured intervention`, (data) => {
      data.graph.relations.find((record) => record.id === id).kind = "functional";
    }]);
  }
  await rejects(mutations);
});
