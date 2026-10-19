import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const cohesion = "D-phys-metal-cohesion-reference";
const boundary = "D-phys-metal-spectral-transport-boundary";
const calculation = "gaissmaier2020-na-bulk";
const experiment = "potorochin2022-na-film";
const prediction = "C-phys-gaissmaier2020-na-cohesion";
const preparation = "M-phys-potorochin2022-na-film-context";
const spectrum = "C-phys-potorochin2022-na-spectrum";
const band = "C-phys-potorochin2022-na-band-inference";
const bandMethod = "M-phys-potorochin2022-na-band-inference";
const synthesis = "C-phys-metallic-bonding-source-scope";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Mutate the scientific claim consistently across its presentation and study
// summaries, leaving validation to reject the changed evidence boundary.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
  for (const item of data.physics.studies) {
    for (const field of ["preparation", "finding"]) {
      if (typeof item[field] === "string") item[field] = item[field].replace(original, record.statement);
    }
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /Metallic|metallic|Physical|physical|physics|changed|Expected values|context|Context|role|Role|claim|Claim|source|Source/, name);
  }
}

test("metallic sodium retains separate computational cohesion and experimental spectral contexts", async () => {
  const data = await source();
  assert.equal(study(data, calculation).studyType, "computational-analysis");
  assert.equal(study(data, experiment).studyType, "primary-experiment");
  assert.equal(role(data, "gaissmaier2020-na-bulk-context").role, "model-context");
  assert.equal(role(data, "potorochin2022-na-film-context").role, "experimental-context");
  assert.deepEqual(claim(data, prediction).contextIds, [calculation]);
  assert.deepEqual(claim(data, spectrum).contextIds, [experiment]);
  assert.deepEqual(claim(data, band).contextIds, [experiment]);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, [calculation, experiment]);
  assert.equal(data.physics.studies.filter((record) => record.sourceId === "potorochin2022-na-arpes").length, 1);
  await rejects([
    ["a DFT energy output cannot become a primary heat-of-cohesion experiment", (changed) => {
      study(changed, calculation).studyType = "primary-experiment";
    }],
    ["the prepared film cannot validate the bulk calculation as the same context", (changed) => {
      claim(changed, prediction).contextIds = [experiment];
    }],
    ["the spectral preparation cannot become a model-only context", (changed) => {
      role(changed, "potorochin2022-na-film-context").role = "model-context";
    }]
  ]);
});

test("positive cohesion keeps its neutral-atom reference, per-atom normalization and finite bulk branch", async () => {
  const data = await source();
  assert.match(claim(data, cohesion).statement, /E_coh=E_atom-E_bulk\/N/);
  assert.match(claim(data, cohesion).statement, /neutral isolated atoms/);
  assert.match(claim(data, prediction).statement, /a0=4\.19 Angstrom, E_coh=1\.09 eV\/atom and B0=7\.96 GPa/);
  assert.match(claim(data, prediction).statement, /a0=4\.18 Angstrom, E_coh=1\.15 eV\/atom and B0=8\.48 GPa/);
  await rejects([
    ["cohesive binding cannot lose its per-atom normalization", (changed) =>
      replaceStatement(changed, cohesion, "E_coh=E_atom-E_bulk/N", "E_coh=E_atom-E_bulk")],
    ["a positive cohesive-energy convention cannot silently reverse sign", (changed) =>
      replaceStatement(changed, cohesion, "E_coh=E_atom-E_bulk/N", "E_coh=E_bulk/N-E_atom")],
    ["a supplied bcc branch cannot establish the unique global ground-state phase", (changed) =>
      dropLimit(changed, prediction, "unique global 0 K phase")],
    ["an incomplete atomic-reference protocol cannot become a reproduced energy calculation", (changed) =>
      dropLimit(changed, prediction, "isolated-atom spin/cell")],
    ["electronic smearing cannot become a measured sample temperature", (changed) =>
      dropLimit(changed, cohesion, "smearing width")]
  ]);
});

test("functional-ensemble spread and zero-point correction parentheses remain different quantities", async () => {
  const data = await source();
  assert.match(claim(data, prediction).statement, /0\.25 eV\/atom.*functional-ensemble standard deviation/);
  assert.match(claim(data, prediction).limitations.join(" "), /experimental-row parentheses.*zero-point corrections, not measurement uncertainties/);
  await rejects([
    ["BEEF spread cannot become a primary experimental error bar", (changed) =>
      replaceStatement(changed, prediction, "functional-ensemble standard deviation", "experimental measurement uncertainty")],
    ["reference-row zero-point corrections cannot become uncertainty estimates", (changed) =>
      dropLimit(changed, prediction, "experimental-row parentheses")],
    ["a borrowed reference row cannot become an additional primary experiment", (changed) =>
      dropLimit(changed, prediction, "imported from another source")]
  ]);
});

test("ARPES keeps final-version film preparation, detector assignments and separately reported momentum cuts", async () => {
  const data = await source();
  assert.match(claim(data, preparation).statement, /15 nm Na\(110\).*20 K/);
  assert.match(claim(data, preparation).statement, /70 eV photons.*R8000\/R4000.*30 meV.*0\.2 degree/);
  assert.match(claim(data, preparation).statement, /0\.015 eV.*symmetrized about kx=0/);
  assert.match(claim(data, spectrum).statement, /0\.91 inverse Angstrom.*0\.88 inverse Angstrom.*69 eV/);
  assert.equal(edge(data, "potorochin2022-na-film-context", "potorochin2022-na-spectrum").role, "measurement-context");
  await rejects([
    ["the final published preparation cannot silently drop its second analyzer", (changed) =>
      replaceStatement(changed, preparation, "R8000/R4000", "R8000")],
    ["an angular setting cannot become a direct momentum resolution", (changed) =>
      replaceStatement(changed, preparation, "0.2 degree angular setting", "0.2 inverse-Angstrom momentum resolution")],
    ["different cuts cannot become an exact common Fermi radius", (changed) =>
      replaceStatement(changed, spectrum, "0.88 inverse Angstrom", "0.91 inverse Angstrom")],
    ["film, orientation and calibration limits cannot become universal spherical bands", (changed) =>
      dropLimit(changed, spectrum, "finite sodium film on tungsten")]
  ]);
});

test("the same ARPES map supports a model-dependent band inference without becoming cohesion or transport", async () => {
  const data = await source();
  assert.match(claim(data, band).statement, /0\.103-2\.263 eV.*E\(k\)=W-gamma1\*k\^2-gamma2\*k\^4.*W=2\.78 eV/);
  assert.match(claim(data, band).statement, /W_LDA=3\.18 eV.*m\*\/m0=1\.14/);
  assert.match(claim(data, band).statement, /not the cohesive energy per atom/);
  assert.match(claim(data, bandMethod).statement, /Reuse the ARPES acquisition once/);
  assert.equal(edge(data, "potorochin2022-na-spectrum", "potorochin2022-na-band-inference").role, "interpretation-dependency");
  await rejects([
    ["occupied spectral bandwidth cannot acquire cohesive-energy-per-atom units", (changed) =>
      replaceStatement(changed, band, "W=2.78 eV", "W=2.78 eV/atom")],
    ["the fitted band cannot lose the supplied LDA comparison reference", (changed) =>
      replaceStatement(changed, band, "W_LDA=3.18 eV", "W_LDA=2.78 eV")],
    ["a common-data inference cannot become another independent acquisition", (changed) =>
      dropLimit(changed, band, "reuse the same data")],
    ["spectral broadening cannot silently become a measured transport lifetime", (changed) =>
      dropLimit(changed, band, "detailed lifetime outputs")]
  ]);
});

test("metallic source scope excludes universal property chains, parent counts and unsupported replication", async () => {
  const data = await source();
  assert.equal(claim(data, cohesion).status, "definition");
  assert.equal(claim(data, boundary).status, "definition");
  assert.deepEqual(claim(data, synthesis).checkIds, []);
  assert.match(publication(data, "gaissmaier2020-na-cohesion").review.limit, /experimental values are imported.*not admitted as a new primary empirical dataset/);
  assert.match(study(data, calculation).correctionCheck, /accepted manuscript online 5 December 2019.*version of record online 21 January 2020/);
  assert.match(publication(data, "potorochin2022-na-arpes").review.limit, /no visual inspection of the final layout/);
  await rejects([
    ["three-body parent counts cannot become a measured metallicity onset", (changed) =>
      dropLimit(changed, synthesis, "three-body N_min/N_crit")],
    ["a spectral band cannot establish every metal's mechanical and transport properties", (changed) =>
      dropLimit(changed, synthesis, "No measured conductivity")],
    ["electron mobility cannot become a measured cause of cohesive binding", (changed) =>
      dropLimit(changed, synthesis, "mobility alone causes cohesion")],
    ["display grouping cannot create a SOMA developmental law", (changed) =>
      dropLimit(changed, synthesis, "SOMA transition")],
    ["supplied preparations cannot become universal resource thresholds", (changed) =>
      dropLimit(changed, synthesis, "sustained resource cause")]
  ]);
});
