import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  COSMOLOGY_SCOPE_ADMISSION as admission,
  COSMOLOGY_SCOPE_CHECKS,
  COSMOLOGY_SCOPE_ANALYTICAL_SOURCES,
  validateCosmologyScopeContracts
} from "../../models/causal-emergence/canonical/cosmology-scope.mjs";

const definition = "D-phys-primordial-origin-scope";
const synthesis = "C-phys-primordial-cmb-model-compatibility";
const method = "M-phys-primordial-cmb-model-compatibility";
const contexts = ["planck2018-cmb-acquisition", "planck2018-cmb-response", "planck2018-primordial-inference"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, suffix) => data.graph.entities.find((record) => record.id === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((record) => record.id === `physics:${from}-${to}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), length = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, length - 1, `Unique boundary ${fragment}`);
  const suffix = id.replace(/^[DCM]-phys-/, "");
  if (entity(data, suffix)) entity(data, suffix).openObligations = [...record.limitations];
}

async function rejects(mutations) {
  const original = await source();
  validateCosmologyScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("primordial-CMB compatibility reuses the three Planck contexts without inventing a joint origin measurement", async () => {
  assert.equal(COSMOLOGY_SCOPE_CHECKS.size, 0);
  assert.equal(COSMOLOGY_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  assert.equal(admission.definitions.length, 1);
  assert.equal(admission.observations.length, 1);
  const data = await source();
  validateCosmologyScopeContracts(context(data));
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, contexts);
  assert.deepEqual(claim(data, method).contextIds, contexts);
  assert.deepEqual(claim(data, synthesis).checkIds, []);
  const inputs = admission.dependencies.map(([, from]) => from);
  assert.deepEqual(inputs, [
    "primordial-origin-scope", "planck2018-cmb-acquisition-context",
    "planck2018-angular-spectra", "planck2018-scalar-spectrum"
  ]);
  const sourceOwners = new Set(contexts.map((id) => data.physics.studies.find((record) => record.id === id).sourceId));
  const extraSources = new Map(admission.inferenceSources);
  for (const id of [synthesis, method]) {
    const role = id === method ? "method" : "supports";
    const unowned = [...new Set(claim(data, id).citations
      .filter((citation) => citation.role === role && !sourceOwners.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(extraSources.get(id), unowned,
      "Theoretical and companion-publication sources remain supplemental, not fabricated preparations");
  }
});

test("flat-space variance and the original necessary-parent metadata cannot supply a cosmological model", async () => {
  await rejects([
    ["the old oscillator supplies the inflationary background and initial state", (data) =>
      dropLimit(data, definition, "No old oscillator replay")],
    ["unreviewed weights and minima regain quantitative scientific meaning", (data) =>
      dropLimit(data, definition, "N_min=N_crit=1")],
    ["the vacuum-correlator comparison becomes a numerical CMB input", (data) => {
      edge(data, "vacuum-two-point-function", "primordial-origin-scope").assertion =
        "The flat-space vacuum correlator determines the CMB spectrum without any cosmological background or initial-state input.";
    }],
    ["the original parent replaces the reviewed curvature-spectrum dependency", (data) => {
      edge(data, "primordial-curvature-spectrum", "primordial-origin-scope").source = "phys:vacuum-two-point-function";
    }]
  ]);
});

test("the synthesis does not identify field, curvature, density and observed angular statistics", async () => {
  await rejects([
    ["density no longer requires an epoch and gauge convention", (data) =>
      dropLimit(data, definition, "density also needs an epoch and gauge convention")],
    ["horizon exit universally freezes and classicalizes perturbations", (data) =>
      dropLimit(data, definition, "Hubble-radius exit alone")],
    ["an unreviewed galaxy-survey likelihood is silently included", (data) =>
      dropLimit(data, definition, "large-scale-structure likelihood is reviewed")],
    ["the selected model defines an uninterrupted quantum-to-galaxy construction", (data) => {
      const record = claim(data, definition);
      record.statement = "The admitted primordial field directly and uniquely produces measured galaxy formation without a transfer or bias model.";
      entity(data, "primordial-origin-scope").description = record.statement;
    }]
  ]);
});

test("the selected historical likelihood retains physical lensing, omitted extra datasets and shared-sample dependence", async () => {
  await rejects([
    ["omitted reconstructed-lensing likelihood is confused with absence of lensing physics", (data) => {
      const record = claim(data, synthesis);
      record.limitations = record.limitations.map((limit) => limit.includes("Physical gravitational lensing")
        ? "TT,TE,EE+lowE contains no gravitational lensing in its theoretical angular spectra." : limit);
      entity(data, "primordial-cmb-model-compatibility").openObligations = [...record.limitations];
    }],
    ["separate BAO and tensor datasets become part of the selected combination", (data) =>
      dropLimit(data, synthesis, "BAO, BK15")],
    ["three analysis stages become independent empirical confirmations", (data) =>
      dropLimit(data, synthesis, "stages of one chain")],
    ["the acquisition context is deleted from the synthesis and operative method", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds = contexts.slice(1);
    }],
    ["an unrelated neutrino preparation substitutes for the shared response context", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds[1] = "kamland2005-response";
    }]
  ]);
});

test("a fitted primordial power law is conditional compatibility rather than an initial-state or unique-inflation measurement", async () => {
  await rejects([
    ["the power-law posterior directly supplies a potential and inflationary energy scale", (data) =>
      dropLimit(data, synthesis, "phenomenological input parameterization")],
    ["Gaussianity rules out all classical and alternative generation histories", (data) =>
      dropLimit(data, synthesis, "No unreviewed alternative model is claimed to fit equally well")],
    ["a literature synthesis becomes a local Planck replay", (data) =>
      dropLimit(data, synthesis, "no local Planck likelihood/sky-map replay")],
    ["display and claim jointly assert a unique observed quantum origin", (data) => {
      const record = claim(data, synthesis);
      record.statement = "The TT,TE,EE+lowE posterior directly measures the initial vacuum and proves that quantum inflation uniquely generated the observed perturbations.";
      entity(data, "primordial-cmb-model-compatibility").description = record.statement;
    }],
    ["the operative interpretation method loses its no-initial-state-observation boundary", (data) => {
      claim(data, method).statement = "Interpret the Gaussian primordial fit as a direct initial-state observation.";
    }]
  ]);
});

test("interpretation dependencies and evidence ownership remain explicit and cannot become data-generation arrows", async () => {
  await rejects([
    ["the data-to-synthesis dependency reverses direction", (data) => {
      const record = edge(data, "planck2018-angular-spectra", "primordial-cmb-model-compatibility");
      [record.source, record.target] = [record.target, record.source];
    }],
    ["an interpretation edge becomes physical production of the observed sky", (data) => {
      edge(data, "planck2018-scalar-spectrum", "primordial-cmb-model-compatibility").assertion =
        "The inferred primordial parameters generate the acquired Planck sky as a verified necessary-parent construction.";
    }],
    ["acquisition provenance is removed from the synthesis graph", (data) => {
      data.graph.relations = data.graph.relations.filter((record) =>
        record.id !== "physics:planck2018-cmb-acquisition-context-primordial-cmb-model-compatibility");
    }],
    ["a supplemental theory citation borrows measured-data support", (data) => {
      claim(data, synthesis).citations.find((citation) => citation.sourceId === "polarski1996-classical").sourceId =
        "planck2018-cosmological-parameters";
    }],
    ["readiness presents compatibility as a directly observed initial state", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:primordial-cmb-model-compatibility").denotes =
        "A directly measured primordial vacuum state.";
    }],
    ["a new physical construction rule bypasses interpretation-only links", (data) => {
      const rule = structuredClone(data.graph.rules[0]);
      rule.id = "phys:primordial-quantum-origin";
      rule.outputEntityIds = ["phys:primordial-cmb-model-compatibility"];
      data.graph.rules.push(rule);
    }]
  ]);
});
