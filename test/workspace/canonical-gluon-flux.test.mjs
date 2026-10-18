import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  GLUON_FLUX_ADMISSION as admission,
  GLUON_FLUX_CHECKS,
  GLUON_FLUX_ANALYTICAL_SOURCES,
  validateGluonFluxContracts
} from "../../models/causal-emergence/canonical/gluon-flux.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const relation = (data, id) => data.graph.relations.find((record) => record.id === `physics:${id}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Missing scientific mutation target: ${from}`);
  record.statement = record.statement.replace(from, to);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Unique reviewed boundary: ${fragment}`);
}

async function rejects(mutations) {
  const original = await source();
  validateGluonFluxContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("the flux block separates formal observables, computational preparations and reported results", async () => {
  assert.equal(GLUON_FLUX_CHECKS.size, 0);
  assert.equal(GLUON_FLUX_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.localStudySources, []);
  assert.equal(admission.definitions.length, 2);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  assert.equal(admission.studyIds.length, 3);
  const data = await source();
  validateGluonFluxContracts(context(data));
  for (const id of admission.studyIds) {
    const study = data.physics.studies.find((record) => record.id === id);
    assert.equal(study.studyType, "computational-analysis");
    assert.equal(study.sourceId, "bali1995-flux");
    assert.ok(study.journal && study.doi, "Published computation retains real publication metadata");
  }
  for (const [id] of admission.contexts) {
    assert.equal(entity(data, id).kind, "context");
    assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${id}`).role, "model-context");
  }
});

test("published lattice results cannot become detector acquisitions or local numerical reproductions", async () => {
  await rejects([
    ...admission.studyIds.map((id) => [`computational study ${id} becomes an experiment`, (data) => {
      data.physics.studies.find((record) => record.id === id).studyType = "primary-experiment";
    }]),
    ["a reported result borrows an unrelated executable check", (data) => {
      const result = claim(data, "C-phys-bali1995-field-profiles");
      result.status = "analytically-checked";
      result.checkIds = ["neutrino-phase-data-algebra"];
    }],
    ["publication reading becomes an ensemble replay", (data) => {
      data.graph.sources.find((record) => record.id === "bali1995-flux").review.extent = "locally-reproduced-ensemble";
    }],
    ["the field probe is presented as a detector context", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:bali1995-field-extraction-context").role = "experimental-context";
    }]
  ]);
});

test("the local operator retains vacuum subtraction, squared components and separate source and probe traces", async () => {
  const id = "D-phys-static-source-plaquette-density";
  await rejects([
    ["the normalized SU(2) plaquette trace loses its factor", (data) => replace(data, id, "P_mu_nu=(1/2)Tr", "P_mu_nu=Tr")],
    ["vacuum subtraction becomes an absolute field", (data) => replace(data, id, "/<W>-<P>", "/<W>")],
    ["the loop normalization is dropped", (data) => replace(data, id, "/<W>-<P>", "-<P>")],
    ["the magnetic contrast loses its continuation sign", (data) => replace(data, id, "B_R,i=-(2 beta/a^4)", "B_R,i=(2 beta/a^4)")],
    ["action and energy definitions become interchangeable", (data) => replace(data, id, "sigma_R=(E_R-B_R)/2", "sigma_R=(E_R+B_R)/2")],
    ["a squared-field contrast becomes a color-vector measurement", (data) => replace(data, id, "color-contracted squared components", "gauge-invariant field-vector components")],
    ["negative contrast is interpreted as a negative squared field", (data) => dropLimit(data, id, "negative absolute squared field")],
    ["the separately traced operator is silently replaced", (data) => dropLimit(data, id, "single trace with connecting Wilson lines")],
    ["the source smearing is also applied to the local probe", (data) => replace(data, id, "an unsmeared normalized plaquette", "a smeared normalized plaquette")],
    ["leading matching becomes an exact condensate measurement", (data) => dropLimit(data, id, "anomalous beta-function factor")]
  ]);
});

test("finite pure-gauge sampling and Euclidean extraction do not become physical-QCD dynamics", async () => {
  const preparation = "M-phys-bali1995-flux-ensemble-context";
  const extraction = "M-phys-bali1995-field-extraction-context";
  await rejects([
    ["the pure two-color theory acquires physical sea quarks", (data) => replace(data, preparation, "pure SU(2) Wilson gauge theory without sea quarks", "physical SU(3) QCD with dynamical sea quarks")],
    ["the adopted conversion becomes an independently fitted scale", (data) => replace(data, preparation, "the adopted sqrt(kappa)=440 MeV", "the independently measured sqrt(kappa)=440 MeV")],
    ["the dimensionless string tension gets the printed inverse convention", (data) => replace(data, preparation, "K=a^2 kappa", "K=kappa/a^2")],
    ["the incompatible printed scale conventions disappear", (data) => dropLimit(data, preparation, "dimensionally consistent")],
    ["Monte Carlo updates become real-time organization", (data) => dropLimit(data, preparation, "real-time self-organization")],
    ["the Wilson-loop count is reused for the field sample", (data) => replace(data, preparation, "248 and 670 respectively", "248 and 1480 respectively")],
    ["the potential plateau certifies the local field projection", (data) => dropLimit(data, extraction, "potential plateau alone")],
    ["finite-time electric and magnetic fits become one density fit", (data) => replace(data, extraction, "separately in Euclidean T before combining them", "as a combined density before separate field extraction")],
    ["the static potential and field comparison becomes independent evidence", (data) => dropLimit(data, extraction, "share gauge ensembles")],
    ["a source-conditioned expectation becomes an autonomous field snapshot", (data) => dropLimit(data, "C-phys-bali1995-field-profiles", "autonomous field pattern")],
    ["action-profile precision is assigned to the noisy energy width", (data) => dropLimit(data, "C-phys-bali1995-field-profiles", "energy-profile widths become too noisy")]
  ]);
});

test("width definitions retain the transverse measure, cutoff and rms versus FWHM distinction", async () => {
  const id = "D-phys-transverse-flux-width";
  await rejects([
    ["the radial numerator loses a transverse-measure factor", (data) => replace(data, id, "dn n^3 sigma_R", "dn n^2 sigma_R")],
    ["a dimensionless lattice width becomes a physical length", (data) => replace(data, id, "physical cutoff radial rms is a delta_cut", "physical cutoff radial rms is delta_cut")],
    ["the Gaussian FWHM becomes a half width", (data) => replace(data, id, "rho=2 d sqrt(ln 2)", "rho=d sqrt(ln 2)")],
    ["the dipole FWHM borrows the Gaussian shape", (data) => replace(data, id, "rho=2 d sqrt(2^(1/3)-1)", "rho=2 d sqrt(ln 2)")],
    ["the full-plane parameter becomes the finite-cutoff moment", (data) => replace(data, id, "rho=2 d sqrt(ln 2)", "rho=2 delta_cut sqrt(ln 2)")],
    ["the reviewed half-width naming conflict disappears", (data) => dropLimit(data, id, "calls rho a half width")],
    ["the moment is guaranteed for arbitrary noisy subtracted profiles", (data) => dropLimit(data, id, "Positivity, finite moments")],
    ["the fitted, cutoff and geometric constructions are identified", (data) => dropLimit(data, id, "Finite n_cut generally makes delta_cut unequal to d")]
  ]);
});

test("conditional width inference preserves reused inputs and the unresolved constant versus logarithmic alternative", async () => {
  const inference = "M-phys-bali1995-profile-inference-context";
  const output = "C-phys-bali1995-profile-widths";
  await rejects([
    ["the geometric width loses its model-dependent shape factor", (data) => replace(data, inference, "delta_geom^2=gamma A/(pi h)", "delta_geom^2=A/(pi h)")],
    ["the width comparison adds an unreviewed finest lattice", (data) => replace(data, inference, "For beta=2.5 and 2.635", "For beta=2.5, 2.635 and 2.74")],
    ["the geometric method is extended below its stated range", (data) => dropLimit(data, inference, "approximately 0.75 fm range")],
    ["aligned static differences become a formation threshold", (data) => dropLimit(data, inference, "minimum formation size")],
    ["a reused potential constraint becomes independent corroboration", (data) => dropLimit(data, inference, "potential are reused constraints")],
    ["the tail-model range is called a confidence interval", (data) => {
      claim(data, output).limitations[0] = "The 0.5-0.75 fm interval is a statistical 95% confidence interval independent of the profile family.";
    }],
    ["a physical FWHM loses its lattice-spacing conversion", (data) => replace(data, output, "physical FWHM a rho", "physical FWHM rho")],
    ["the conditional width is a measured condensate or formation rate", (data) => dropLimit(data, output, "gauge-invariant gluon-condensate measurement")],
    ["the widths are declared an independent second acquisition", (data) => dropLimit(data, "M-phys-bali1995-profile-widths", "independent second acquisition")],
    ["the comparison excludes logarithmic broadening", (data) => {
      data.physics.comparisons.find((record) => record.id === "bali1995-width-dependence").result = "specified-alternative-disfavored";
    }]
  ]);
  const data = await source();
  assert.equal(data.physics.comparisons.find((record) => record.id === "bali1995-width-dependence").result, "inconclusive");
  const inputs = admission.dependencies.filter((record) => record[2] === "bali1995-profile-widths").map((record) => record[1]);
  assert.deepEqual(inputs, [
    "bali1995-field-profiles", "bali1995-profile-inference-context", "bali1995-flux-ensemble-context",
    "bali1995-field-extraction-context", "transverse-flux-width"
  ]);
});

test("flux evidence and display preserve their exact input graph through the full source validator", async () => {
  await rejects([
    ...admission.formalDependencies.map(([id]) => [`missing formal operator input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== id);
    }]),
    ...admission.dependencies.map(([id]) => [`missing declared input ${id}`, (data) => {
      data.graph.relations = data.graph.relations.filter((record) => record.id !== `physics:${id}`);
    }]),
    ["profile inference feeds back into its reported input", (data) => {
      const edge = relation(data, admission.dependencies[0][0]);
      [edge.source, edge.target] = [edge.target, edge.source];
    }],
    ["a Euclidean profile acquires a real-time display claim", (data) => {
      entity(data, "bali1995-field-profiles").description = "A real-time measurement of gluon self-organization in the physical vacuum.";
    }],
    ["the reported width loses all visible limitations", (data) => {
      entity(data, "bali1995-profile-widths").openObligations = [];
    }],
    ["an admitted dependency acquires universal carrier minima", (data) => {
      relation(data, admission.dependencies[0][0]).carrier = { minimum: 1, critical: 1 };
    }],
    ["a different ensemble's string-breaking result becomes a numerical width input", (data) => {
      const input = structuredClone(relation(data, "bali1995-field-profiles-bali1995-profile-widths"));
      input.id = "physics:unreviewed-string-breaking-bali1995-width";
      input.source = "phys:bali-avoided-crossing";
      input.assertion = "The later two-flavor string-breaking result determines the pure-gauge transverse width.";
      data.graph.relations.push(input);
    }]
  ]);
  const data = structuredClone(await source());
  const description = "The static profiles directly determine a universal real-time condensate formation law.";
  claim(data, "C-phys-bali1995-field-profiles").statement = description;
  entity(data, "bali1995-field-profiles").description = description;
  data.readiness.nodeRoles.find((record) => record.nodeId === "phys:bali1995-field-profiles").denotes = description;
  assert.throws(() => validateCanonicalSource(data), /flux/i,
    "The integrated validator reaches the new scientific contract after coordinated display drift");
});
