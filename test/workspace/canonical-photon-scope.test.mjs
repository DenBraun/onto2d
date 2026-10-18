import assert from "node:assert/strict";
import test from "node:test";
import {
  PHOTON_SCOPE_ADMISSION as admission,
  PHOTON_SCOPE_CHECKS,
  PHOTON_SCOPE_ANALYTICAL_SOURCES,
  validatePhotonScopeContracts
} from "../../models/causal-emergence/canonical/photon-scope.mjs";

const definition = "D-phys-photon-evidence-scope";
const synthesis = "C-phys-photon-evidence-boundary";
const method = "M-phys-photon-evidence-boundary";
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
  const record = data.graph.entities.find((item) => item.claimIds.includes(id));
  if (record) record.description = statement;
}
function dropLimit(data, id, pattern) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !pattern.test(limit));
  assert.equal(record.limitations.length, before - 1, `Exactly one boundary matches ${pattern}`);
  const node = data.graph.entities.find((item) => item.claimIds.includes(id));
  if (node) node.openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validatePhotonScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validatePhotonScopeContracts(context(data)), /Photon scope .* changed/, name);
  }
}

test("photon evidence synthesis adds no experiment, pooled fit or numerical replay", async () => {
  assert.deepEqual(admission.definitions, [["phys:photon-evidence-scope", definition]]);
  assert.equal(admission.observations.length, 1);
  assert.equal(PHOTON_SCOPE_CHECKS.size, 0);
  assert.equal(PHOTON_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  const data = await source();
  validatePhotonScopeContracts(context(data));
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).checkIds, []);
  assert.deepEqual(claim(data, method).checkIds, []);
  const inputs = admission.dependencies.map(([, from]) => from);
  for (const required of ["photon-evidence-scope", "triggered-optical-coincidences",
    "triggered-optical-anticorrelation", "kessler-capture-wavelength", "kloe2007-radiative-ratio"])
    assert.ok(inputs.includes(required), `Required bounded input ${required}`);
  for (const excluded of ["kloe2007-pseudoscalar-angle", "field-dynamics-arithmetic", "virtual-process-arithmetic"])
    assert.ok(!inputs.includes(excluded), `No substituted evidence from ${excluded}`);
});

test("the synthesis retains the actual counting, inference, capture and radiative-response contexts", async () => {
  const data = await source();
  const inputs = ["triggered-optical-coincidences", "triggered-optical-anticorrelation",
    "kessler-capture-wavelength", "kloe2007-radiative-ratio"];
  const expected = [...new Set(inputs.flatMap((suffix) => claim(data, `C-phys-${suffix}`).contextIds))];
  assert.equal(expected.length, 5);
  assert.deepEqual(new Set(expected), new Set(["grangier1986-counting", "grangier1986-anticorrelation-inference",
    "kessler1995", "kessler1998", "kloe2007-meson-response"]));
  for (const id of [synthesis, method]) assert.deepEqual(claim(data, id).contextIds, expected);
  const sourceOwners = new Set(expected.map((id) => data.physics.studies.find((record) => record.id === id).sourceId));
  const supplemental = new Map(admission.inferenceSources);
  for (const id of [synthesis, method]) {
    const role = id === method ? "method" : "supports";
    const extra = [...new Set(claim(data, id).citations
      .filter((citation) => citation.role === role && !sourceOwners.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(supplemental.get(id) ?? [], extra,
      "Formal and companion-publication citations do not invent independent acquisitions");
  }
});

test("an ideal photon state cannot acquire an exact empirical mass, charge or permanent detector identity", async () => {
  await rejects([
    ["formal masslessness is not a measured exact photon-mass bound", (data) => replaceStatement(data, definition,
      "The triggered counting experiment measures the photon mass to be exactly zero and excludes every gauge-invariant massive extension.")],
    ["neutral transformation law is not a photon-charge measurement", (data) => replaceStatement(data, definition,
      "The beam-splitter detector clicks establish exactly zero photon charge without an independent charge experiment.")],
    ["a click does not identify a permanent distinguishable carrier", (data) => replaceStatement(data, definition,
      "Every detector click identifies one distinguishable photon with permanent identity through arbitrary absorption and emission.")],
    ["the literature comparison is not an independently replayed optical experiment", (data) => {
      claim(data, synthesis).status = "analytically-checked";
      claim(data, synthesis).checkIds = ["field-dynamics-algebra"];
    }]
  ]);
});

test("source-card parent metadata, scalar evolution and an ideal occupation do not establish photon formation", async () => {
  await rejects([
    ["the original weights and minima cannot regain scientific threshold status", (data) =>
      dropLimit(data, definition, /weights 0\.55 and 0\.45/)],
    ["the old scalar oscillator cannot supply photon gauge constraints or measured dynamics", (data) =>
      dropLimit(data, definition, /explicitly a real scalar model/)],
    ["free-state occupation cannot become a permanent distinguishable carrier", (data) =>
      dropLimit(data, definition, /distinguishable permanent carrier/)],
    ["model masslessness cannot become an experimentally exact parameter", (data) =>
      dropLimit(data, definition, /historical Weinberg mass-matrix null direction/)],
    ["an unreviewed scalar parent cannot replace the Maxwell constraint input", (data) => {
      const record = data.graph.relations.find((item) => item.source === "phys:electromagnetic-photon-field"
        && item.target === "phys:photon-evidence-scope");
      assert.ok(record);
      record.source = "phys:free-field-vacuum";
    }]
  ]);
});

test("static binding, polarization, aggregate optics and generic evidence placeholders retain their exclusions", async () => {
  await rejects([
    ["a static Coulomb amplitude cannot become a measured real-photon flux", (data) =>
      dropLimit(data, definition, /static effective potential/)],
    ["prepared transverse polarization cannot orient the vacuum or close neighboring analyses", (data) =>
      dropLimit(data, definition, /preferred vacuum axis/)],
    ["unspecified Compton and photoelectric examples cannot become reviewed primary experiments", (data) =>
      dropLimit(data, definition, /Generic Compton, photoelectric and precision-QED placeholders/)],
    ["a detector statistic cannot establish arbitrary atomic or biological organization", (data) =>
      dropLimit(data, synthesis, /universal photon-driven biological organization/)],
    ["internal amplitude roles cannot acquire a transmitted real-photon interpretation", (data) => replaceStatement(data, method,
      "Interpret every internal photon propagator as a counted on-shell photon transmitted between atoms to maintain their bound-state identity.")]
  ]);
});

test("different radiative preparations and analysis stages cannot become one independent photon census", async () => {
  await rejects([
    ["shared source and changed interferometer configuration must remain disclosed", (data) =>
      dropLimit(data, synthesis, /same-source Mach-Zehnder visibility/)],
    ["a publication-reported error distance cannot silently become an exact significance replay", (data) =>
      dropLimit(data, synthesis, /greater-than-13-standard-deviation comparison/)],
    ["the capture calibration and KLOE response model must remain declared", (data) =>
      dropLimit(data, synthesis, /1999 crystal calibration/)],
    ["heterogeneous observations cannot lose their no-pooling boundary", (data) =>
      dropLimit(data, synthesis, /not one pooled photon-count sample/)],
    ["shared optical counting and inference stages cannot become independent replications", (data) => replaceStatement(data, synthesis,
      "The optical count sample and the statistic inferred from it independently replicate permanent single-photon identity.")],
    ["nine optical coincidences cannot be pooled with gamma-ray angles or meson rates", (data) => replaceStatement(data, synthesis,
      "The nine optical coincidences, capture diffraction angles and KLOE corrected decay ratio form one homogeneous photon-count sample.")],
    ["a conditional mixing angle cannot replace the selected corrected radiative ratio", (data) => {
      const record = data.graph.relations.find((item) => item.source === "phys:kloe2007-radiative-ratio"
        && item.target === "phys:photon-evidence-boundary");
      assert.ok(record);
      record.source = "phys:kloe2007-pseudoscalar-angle";
    }],
    ["method and outcome cannot omit the response contexts together", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = claim(data, id).contextIds
        .filter((item) => item !== "kloe2007-meson-response");
    }],
    ["aggregate IR sample response cannot replace direct quantum-optical counting", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = claim(data, id).contextIds
        .map((item) => item === "grangier1986-counting" ? "hanssen2001" : item);
    }]
  ]);
});

test("photon scope displays and relations cannot silently acquire measured universal construction semantics", async () => {
  const mutations = admission.definitions.concat(admission.observations.map(([suffix]) => [`phys:${suffix}`]))
    .flatMap(([id]) => [
      [`${id} must preserve its source coordinates`, (data) => {
        data.graph.entities.find((record) => record.id === id).sourceCoordinates = [];
      }],
      [`${id} cannot become an observed universal construction`, (data) => {
        data.readiness.nodeRoles.find((record) => record.nodeId === id).instanceAdmission = "observed";
      }],
      [`${id} cannot display an unsupported empirical mechanism`, (data) => {
        data.readiness.nodeRoles.find((record) => record.nodeId === id).denotes =
          "A universally observed mechanism that permanently maintains every photon and atomic bound state.";
      }]
    ]);
  for (const [id] of admission.formalDependencies) {
    mutations.push([`required formal boundary input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
    }]);
    mutations.push([`formal input ${id} is not a photon-formation intervention`, (data) => {
      data.graph.relations.find((record) => record.id === id).kind = "functional";
    }]);
  }
  await rejects(mutations);
});
