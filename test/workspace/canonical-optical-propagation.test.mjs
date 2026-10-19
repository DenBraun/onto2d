import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const model = "D-phys-linear-optical-propagation";
const boundary = "D-phys-optical-channel-observable-boundary";
const scope = "C-phys-optical-propagation-source-scope";
const method = "M-phys-optical-propagation-source-scope";
const formalSource = "likharev2022-wave-propagation";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const publication = (data, id) => data.graph.sources.find((item) => item.id === id);
const incoming = (data) => data.graph.relations.filter((item) => item.target === "phys:optical-propagation-source-scope");
const opticalStudy = (data, id) => data.optics.studies.find((item) => item.id === id);

// Align display copies before validation so mutations test the protected science,
// rather than only detecting inconsistent duplicated prose.
function replaceStatement(data, id, before, after) {
  const item = claim(data, id), previous = item.statement;
  assert.ok(previous.includes(before), `Reviewed phrase required: ${before}`);
  item.statement = previous.replace(before, after);
  for (const node of data.graph.entities) if (node.description === previous) node.description = item.statement;
  for (const role of data.readiness.nodeRoles) if (role.denotes === previous) role.denotes = item.statement;
  for (const itemStudy of [...data.physics.studies, ...data.optics.studies]) for (const field of ["preparation", "finding"]) {
    if (itemStudy[field]?.includes(previous)) itemStudy[field] = itemStudy[field].replace(previous, item.statement);
  }
}

function removeLimit(data, id, fragment) {
  const item = claim(data, id), matches = item.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `One reviewed boundary must match: ${fragment}`);
  const removed = matches[0];
  item.limitations = item.limitations.filter((limit) => limit !== removed);
  for (const node of data.graph.entities) node.openObligations = node.openObligations.filter((limit) => limit !== removed);
  for (const itemStudy of [...data.physics.studies, ...data.optics.studies]) {
    itemStudy.limitations = itemStudy.limitations.filter((limit) => limit !== removed);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), name);
  }
}

test("the homogeneous model keeps absolute SI constitutive units and the passive harmonic sign", async () => {
  const data = await source();
  assert.equal(claim(data, model).status, "definition");
  assert.equal(claim(data, model).contextIds, undefined);
  assert.match(claim(data, model).statement, /exp\(i\*k\(omega\)\*z-i\*omega\*t\)/);
  assert.match(claim(data, model).statement, /omega\*sqrt\(epsilon\(omega\)\*mu\(omega\)\).*absolute SI/);
  await rejects([
    ["absolute epsilon and mu cannot silently become relative constants", (d) => replaceStatement(d, model,
      "in absolute SI constitutive units", "with epsilon and mu interpreted as dimensionless relative constants")],
    ["a changed time convention needs corresponding changes to the passive sign", (d) => replaceStatement(d, model,
      "exp(i*k(omega)*z-i*omega*t)", "exp(i*k(omega)*z+i*omega*t)")],
    ["the passive forward branch cannot imply exponential gain", (d) => replaceStatement(d, model,
      "k_imag>=0", "k_imag<0")],
    ["amplitude attenuation has the negative imaginary-k exponent", (d) => replaceStatement(d, model,
      "amplitude attenuation exp(-k_imag*z)", "amplitude attenuation exp(+k_imag*z)")],
    ["the local linear isotropic model cannot silently cover every material", (d) => removeLimit(d, model,
      "every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium")],
    ["the model input is not an experimentally fitted window susceptibility", (d) => removeLimit(d, scope,
      "formal chapter is not an independent experiment")]
  ]);
});

test("amplitude attenuation, intensity attenuation and measured transmission retain different quantities", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /alpha_int=2\*k_imag in m\^-1/);
  assert.match(claim(data, boundary).statement, /intensity attenuation in m\^-1 from dimensionless transmission and absorptance/);
  await rejects([
    ["intensity attenuation needs twice the amplitude exponent", (d) => replaceStatement(d, model,
      "alpha_int=2*k_imag", "alpha_int=k_imag")],
    ["a bulk attenuation coefficient is not dimensionless", (d) => replaceStatement(d, model,
      "alpha_int=2*k_imag in m^-1", "alpha_int=2*k_imag as a dimensionless flux fraction")],
    ["the squared-amplitude factor is algebraic rather than a new measurement", (d) => removeLimit(d, model,
      "intensity factor2 follows algebraically")],
    ["finite-aperture flux loss does not identify bulk heat deposition", (d) => removeLimit(d, model,
      "bulk heat deposition")],
    ["geometry and interfaces are required to infer bulk attenuation from transmission", (d) => removeLimit(d, boundary,
      "interface reflection, collection aperture and possible internal paths")],
    ["the observed transmission does not become a uniquely calibrated bulk coefficient", (d) => replaceStatement(d, scope,
      "finite measured transmission response under its stated sample and collection conditions",
      "unique absolute bulk absorption coefficient independently of sample and collection conditions")]
  ]);
});

test("nonlinear phase may deform a pulse while constant-speed k proportional to omega only supplies delay", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /Nonlinear real propagation phase across a pulse bandwidth can produce dispersive waveform deformation/);
  assert.match(claim(data, model).statement, /real phase linear in frequency supplies a delay/);
  await rejects([
    ["linear frequency-dependent k is not sufficient for waveform dispersion", (d) => replaceStatement(d, model,
      "A wave number proportional to frequency at fixed speed is not by itself dispersive deformation",
      "Every wave number proportional to frequency at fixed speed necessarily deforms the pulse")],
    ["the delay supplied by linear spectral phase is not automatically pulse broadening", (d) => replaceStatement(d, model,
      "a real phase linear in frequency supplies a delay", "a real phase linear in frequency necessarily broadens every pulse")],
    ["dispersive real phase and imaginary attenuation cannot be identified", (d) => replaceStatement(d, model,
      "These phase effects are distinct from imaginary-part attenuation", "These phase effects are identical to imaginary-part attenuation")],
    ["a deterministic response alone does not measure statistical coherence or signal-front delay", (d) => removeLimit(d, model,
      "measured signal-front/group delay")],
    ["aggregate transmission does not uniquely retrieve phase or a spatial impulse response", (d) => removeLimit(d, boundary,
      "No inverse propagation operator or phase retrieval")],
    ["one uniform plane wave cannot solve every refraction and diffraction problem", (d) => removeLimit(d, boundary,
      "omitted spatial/random-field cases")]
  ]);
});

test("the positive scope reuses the original Hanssen study and exact opt endpoints without aliases", async () => {
  const data = await source();
  assert.equal(claim(data, scope).status, "publication-supported");
  assert.deepEqual(claim(data, scope).contextIds, ["hanssen2001"]);
  assert.deepEqual(claim(data, method).contextIds, ["hanssen2001"]);
  assert.equal(opticalStudy(data, "hanssen2001").studyType, "primary-experiment");
  assert.match(opticalStudy(data, "hanssen2001").organism, /Si, ZnSe, KRS-5 and MgF2 windows/);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === "hanssen2001").length, 0);
  assert.equal(data.optics.studies.filter((item) => item.sourceId === "hanssen2001").length, 1);
  const edges = incoming(data);
  assert.equal(edges.length, 4);
  assert.ok(edges.some((item) => item.source === "opt:material-transmission"));
  assert.ok(edges.some((item) => item.source === "opt:absorption-coefficient"));
  for (const relation of edges) {
    assert.equal(relation.kind, "descriptive");
    assert.equal(relation.role, "interpretation-dependency");
    assert.deepEqual(relation.claimIds, [method]);
    assert.deepEqual(relation.contextIds, ["hanssen2001"]);
  }
  assert.equal(data.graph.entities.some((item) => item.id === "phys:material-transmission"), false);
  assert.equal(data.graph.entities.some((item) => item.id === "phys:absorption-coefficient"), false);
  await rejects([
    ["an optical result cannot route through an invented phys alias", (d) => {
      incoming(d).find((item) => item.source === "opt:material-transmission").source = "phys:material-transmission";
    }],
    ["the narrow allowed opt reuse cannot change to an unrelated existing endpoint", (d) => {
      incoming(d).find((item) => item.source === "opt:material-transmission").source = "opt:water-absorption";
    }],
    ["a context-free definition cannot replace the scoped interpretation method", (d) => { incoming(d)[0].claimIds = [model]; }],
    ["the actual target context cannot be dropped from a reuse edge", (d) => { incoming(d)[0].contextIds = []; }],
    ["the model chapter cannot become another experiment context", (d) => { claim(d, scope).contextIds = ["hanssen2001", formalSource]; }],
    ["the existing optical study cannot be cloned as another acquisition", (d) => {
      const duplicate = structuredClone(opticalStudy(d, "hanssen2001"));
      duplicate.id = "hanssen2001-propagation-replication";
      d.optics.studies.push(duplicate);
    }],
    ["reuse must retain the original FTIR integrating-sphere preparation", (d) => {
      opticalStudy(d, "hanssen2001").preparation = "A phase-resolved free-space pulse experiment without integrating-sphere collection";
    }],
    ["the reused acquisition cannot gain an unperformed phase measurement", (d) => {
      opticalStudy(d, "hanssen2001").observable = "Full complex wave-transfer operator and phase-resolved bulk index";
    }],
    ["the finite scope does not contain a new index or propagation-law fit", (d) => replaceStatement(d, method,
      "without fitting it to unavailable phase/scattering data", "as a new fit of unavailable phase/scattering data")]
  ]);
});

test("the limited water report and author-instructional reading cannot acquire unreviewed precision", async () => {
  const data = await source();
  const formal = publication(data, formalSource);
  assert.equal(formal.review.extent, "selected-author-instructional-propagation-passages");
  assert.match(formal.review.limit, /not a new empirical publication/);
  for (const id of ["pope1997", "quickenden2000", "fry2000-reply"]) {
    assert.equal(publication(data, id).review.extent, "abstract-and-bibliographic-metadata");
    assert.equal(claim(data, scope).citations.find((item) => item.sourceId === id).role, "limits");
  }
  assert.equal(opticalStudy(data, "pope1997").readExtent, "abstract-and-bibliographic-metadata");
  assert.deepEqual(claim(data, scope).checkIds, []);
  await rejects([
    ["the Pope report cannot silently become a reviewed full calibration", (d) => {
      publication(d, "pope1997").review.extent = "full-primary-article";
    }],
    ["the existing Pope study cannot gain a full-text reading independently of its source scope", (d) => {
      opticalStudy(d, "pope1997").readExtent = "full-primary-article";
    }],
    ["the unadjudicated comment/reply must remain attached to the water limit", (d) => removeLimit(d, scope,
      "unadjudicated comment/reply")],
    ["Pope cannot become positive numerical evidence for this window response", (d) => {
      claim(d, scope).citations.find((item) => item.sourceId === "pope1997").role = "supports";
    }],
    ["the chapter review does not cover the full microscopic and scattering theory", (d) => {
      publication(d, formalSource).review.extent = "full-book-and-microscopic-material-fit";
    }],
    ["later unreviewed equations cannot become an admitted propagation locator", (d) => {
      claim(d, model).citations[0].locator = "Full Lorentz-oscillator, waveguide, scattering and statistical-coherence derivation";
    }],
    ["generic atmospheric and underwater uses do not become newly measured outputs", (d) => removeLimit(d, scope,
      "Atmospheric and underwater visibility")]
  ]);
});

test("no universal all-effects channel, chronological parent or carrier threshold follows from this scope", async () => {
  const data = await source();
  for (const suffix of ["linear-optical-propagation", "optical-channel-observable-boundary", "optical-propagation-source-scope"]) {
    assert.equal(data.readiness.nodeRoles.find((item) => item.nodeId === `phys:${suffix}`).instanceAdmission, "none");
  }
  assert.equal(claim(data, scope).citations.find((item) => item.sourceId === "legacy-2").role, "limits");
  await rejects([
    ["absorption, refraction and coherence are not effects every material must have simultaneously", (d) => removeLimit(d, boundary,
      "effects that every medium must produce simultaneously")],
    ["propagation need not follow scene reflection chronologically", (d) => removeLimit(d, boundary,
      "without a prior scene-reflection event")],
    ["isolated permanent dipoles cannot supply a universal constitutive prerequisite", (d) => removeLimit(d, boundary,
      "Permanent molecular dipoles are not established")],
    ["parent half-weights are not measured causal fractions", (d) => removeLimit(d, scope,
      "Original necessary parents2.1 and2.8")],
    ["a field mode or unit carrier count is not a measured onset threshold", (d) => removeLimit(d, scope,
      "Original carrier group1/type2")],
    ["SOMA classifications do not demonstrate universal information degradation", (d) => removeLimit(d, scope,
      "irreducible information degradation")],
    ["generic legacy evidence does not supply an executable radiative-transfer solver", (d) => removeLimit(d, scope,
      "full radiative-transfer solver")]
  ]);
});
