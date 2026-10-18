import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  COSMOLOGY_CMB_ADMISSION as admission,
  COSMOLOGY_CMB_CHECKS,
  COSMOLOGY_CMB_ANALYTICAL_SOURCES,
  validateCosmologyCmbContracts
} from "../../models/causal-emergence/canonical/cosmology-cmb.mjs";

const outcome = "planck2018-scalar-spectrum";
const angular = "planck2018-angular-spectra";
const inference = "planck2018-primordial-inference-context";
const response = "planck2018-cmb-response-context";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replace(data, id, before, after) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(before), `Missing reviewed phrase: ${before}`);
  record.statement = record.statement.replace(before, after);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique boundary: ${fragment}`);
}

async function rejects(mutations) {
  const original = await source();
  validateCosmologyCmbContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("Planck retains one observation with separate spectral response and conditional primordial inference", async () => {
  assert.equal(COSMOLOGY_CMB_CHECKS.size, 0);
  assert.equal(COSMOLOGY_CMB_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.localStudySources, []);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  assert.equal(admission.dependencies.length, 6);
  assert.deepEqual(admission.comparisonIds, []);
  const data = await source();
  validateCosmologyCmbContracts(context(data));
  assert.equal(study(data, "planck2018-cmb-acquisition").studyType, "primary-observation");
  for (const id of ["planck2018-cmb-response", "planck2018-primordial-inference"]) {
    assert.equal(study(data, id).studyType, "computational-analysis");
  }
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${angular}`).role, "scoped-phenomenon");
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${response}`).role, "model-context");
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${outcome}`).role, "scoped-phenomenon");
  assert.deepEqual(claim(data, `C-phys-${outcome}`).contextIds, ["planck2018-primordial-inference"]);
  assert.deepEqual(claim(data, `C-phys-${outcome}`).checkIds, []);
});

test("the reported scalar intervals retain their dataset, logarithm, pivot and probability convention", async () => {
  await rejects([
    ["borrow the lensing-added uncertainty", (data) => replace(data, `C-phys-${outcome}`, "+/- 0.0044", "+/- 0.0042")],
    ["confuse log-amplitude with amplitude", (data) => replace(data, `C-phys-${outcome}`, "ln(10^10 A_s)=3.045", "A_s=3.045")],
    ["change the selected pivot", (data) => replace(data, `C-phys-${outcome}`, "0.05 Mpc^-1", "0.002 Mpc^-1")],
    ["turn marginal intervals into a joint confidence region", (data) => replace(data, `C-phys-${outcome}`, "each as a marginalized 68 percent interval", "as a joint 95 percent confidence region")],
    ["drop the joint-posterior limitation", (data) => dropLimit(data, `C-phys-${outcome}`, "joint posterior or covariance")]
  ]);
});

test("processed angular spectra cannot become raw quantum events or best-fit coadded input curves", async () => {
  await rejects([
    ["extend Plik by the summary's one-higher endpoints", (data) => replace(data, `C-phys-${angular}`, "TT 30-2508 and TE/EE 30-1996", "TT 30-2509 and TE/EE 30-1997")],
    ["include excluded low-TE", (data) => replace(data, `C-phys-${angular}`, "Commander TT and SimAll EE", "Commander TT and SimAll TE and EE")],
    ["replace frequency-pair likelihood data by the display", (data) => dropLimit(data, `C-phys-${angular}`, "actual Plik data vector")],
    ["hide covariance and sample variance", (data) => dropLimit(data, `C-phys-${angular}`, "one finite, masked realization")],
    ["coordinate a false direct-observation claim and browser description", (data) => {
      const text = "The telescope directly counts independent primordial quantum-vacuum fluctuations.";
      claim(data, `C-phys-${angular}`).statement = text;
      entity(data, angular).description = text;
      data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${angular}`).denotes = text;
    }]
  ]);
});

test("response controls preserve shared systematics and fixed versus fitted nuisance choices", async () => {
  await rejects([
    ["all nuisance amplitudes become free and independent", (data) => dropLimit(data, `M-phys-${response}`, "Not all corrections are freely fitted")],
    ["split maps are declared unconditionally noise-free", (data) => replace(data, `M-phys-${response}`, "only insofar as the split-map noises are uncorrelated", "exactly for every possible correlated detector noise")],
    ["simulation validation becomes exact instrument reproduction", (data) => dropLimit(data, `M-phys-${response}`, "finite-simulation and fixed-sky")],
    ["response analysis becomes an independent sky observation", (data) => {
      study(data, "planck2018-cmb-response").studyType = "primary-observation";
    }]
  ]);
});

test("the transfer model retains its priors, degeneracies and distinction from a quantum-origin proof", async () => {
  await rejects([
    ["change the amplitude prior measure", (data) => replace(data, `M-phys-${inference}`, "1.61 < ln(10^10 A_s) < 3.91", "1.61 < 10^10 A_s < 3.91")],
    ["make separate lensing data an undeclared input", (data) => dropLimit(data, `M-phys-${inference}`, "separate lensing-reconstruction likelihood")],
    ["make the hybrid covariance exact", (data) => dropLimit(data, `M-phys-${inference}`, "neglects low/high-multipole correlations")],
    ["erase numerical-replay limits", (data) => dropLimit(data, `M-phys-${inference}`, "Inherited prior bounds")],
    ["declare the primordial generation mechanism uniquely measured", (data) => dropLimit(data, `C-phys-${outcome}`, "direct proof of a quantum-vacuum origin")],
    ["pool the Planck papers as independent evidence", (data) => dropLimit(data, `C-phys-${outcome}`, "share the Planck acquisition")]
  ]);
});

test("primary version, publication ownership and reviewed extent remain exact", async () => {
  await rejects([
    ["silently select the pre-corrigendum VI version", (data) => {
      data.graph.sources.find((record) => record.id === "planck2018-cosmological-parameters").url = "https://arxiv.org/abs/1807.06209v3";
    }],
    ["claim complete numerical replay in the source review", (data) => {
      data.graph.sources.find((record) => record.id === "planck2018-cmb-likelihoods").review.extent = "full-locally-reproduced-planck-pipeline";
    }],
    ["borrow the inference study's source ownership from the response paper", (data) => {
      study(data, "planck2018-primordial-inference").sourceId = "planck2018-cmb-likelihoods";
    }],
    ["add an unsupported display quantity", (data) => {
      entity(data, outcome).name = "Observed unique quantum inflation and reheating";
    }]
  ]);
});

test("every required data, response, model and convention dependency remains descriptive", async () => {
  const original = await source();
  for (const [id] of admission.dependencies) {
    const changed = structuredClone(original);
    const index = changed.graph.relations.findIndex((record) => record.id === `physics:${id}`);
    assert.ok(index >= 0);
    changed.graph.relations.splice(index, 1);
    assert.throws(() => validateCanonicalSource(changed), undefined, `Missing ${id}`);
  }
  await rejects([
    ["the curvature convention becomes observed quantum causation", (data) => {
      const edge = data.graph.relations.find((record) => record.id === `physics:primordial-curvature-spectrum-${outcome}`);
      edge.assertion = "The selected quantum vacuum is experimentally proven to cause the measured CMB.";
    }],
    ["a data dependency becomes a universal causal edge", (data) => {
      const edge = data.graph.relations.find((record) => record.id === `physics:${angular}-${outcome}`);
      edge.kind = "causal";
    }]
  ]);
});
