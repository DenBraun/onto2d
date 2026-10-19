import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const publicationId = "litvinov2007-pr-ec";
const contextId = "litvinov2007-pr-charge-states";
const channel = "D-phys-orbital-ec-channel-boundary";
const model = "D-phys-ec-population-loss-model";
const preparation = "M-phys-litvinov2007-pr-context";
const observed = "C-phys-litvinov2007-pr-schottky";
const rates = "C-phys-litvinov2007-pr-ec-rates";
const hyperfine = "C-phys-litvinov2007-pr-hyperfine-inference";
const synthesis = "C-phys-electronic-decay-source-scope";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const study = (data) => data.physics.studies.find((item) => item.id === contextId);
const publication = (data) => data.graph.sources.find((item) => item.id === publicationId);

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
  const record = claim(data, id), matches = record.limitations.filter((item) => item.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((item) => item !== matches[0]);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((item) => item !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations = item.limitations.filter((item) => item !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /[Ee]lectronic|Physical|physical|physics|changed|Expected values|context|Context|claim|Claim|source|Source/, name);
  }
}

test("electronic decay retains one primary experiment and separates readout, fitted rates and state interpretation", async () => {
  const data = await source();
  assert.equal(study(data).studyType, "primary-experiment");
  assert.equal(study(data).sourceId, publicationId);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === publicationId).length, 1);
  for (const id of [observed, rates, hyperfine, synthesis]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [contextId]);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.equal(claim(data, channel).status, "definition");
  assert.equal(claim(data, model).contextIds, undefined);
  assert.equal(publication(data).authors.length, 42);
  await rejects([
    ["a rate fit cannot create a second independent acquisition", (changed) => {
      claim(changed, rates).contextIds = ["lamoreaux1997"];
    }],
    ["one publication cannot become a multi-publication synthesis", (changed) => {
      claim(changed, synthesis).status = "literature-synthesis";
    }],
    ["a storage-ring experiment cannot be relabelled as a numerical replay", (changed) => {
      study(changed).studyType = "computational-analysis";
    }]
  ]);
});

test("orbital EC preserves ionic charge while changing the daughter element, rather than ordinary atomic neutralization", async () => {
  const data = await source();
  assert.match(claim(data, channel).statement, /A=140.*Z from 59 to 58/);
  assert.match(claim(data, channel).statement, /59\+.*58\+.*57\+.*zero, one and two bound electrons/);
  assert.match(claim(data, channel).statement, /daughter ionic charge remains the same/);
  assert.match(claim(data, channel).statement, /subsequent nuclear decay does change the element/);
  await rejects([
    ["ionization-state comparison cannot imply unchanged nuclear identity through EC", (changed) =>
      replaceStatement(changed, channel, "nuclear decay does change the element", "nuclear decay does not change the element")],
    ["the daughter ionic charge cannot be confused with its lower nuclear Z", (changed) =>
      replaceStatement(changed, channel, "daughter ionic charge remains the same", "daughter ionic charge increases by one")],
    ["absence of orbital electrons cannot prohibit continuum capture in every environment", (changed) =>
      dropLimit(changed, channel, "continuum-electron capture")],
    ["nuclear capture cannot become ordinary ion neutralization", (changed) =>
      dropLimit(changed, channel, "atomic neutralization")]
  ]);
});

test("Schottky observations stay indirect and retain beam loss, no-feeding and laboratory/rest-frame distinctions", async () => {
  const data = await source();
  assert.match(claim(data, observed).statement, /270 Hz.*31st harmonic/);
  assert.match(claim(data, preparation).statement, /195 spectra over 10\.5 s/);
  assert.match(claim(data, model).statement, /lambda_all=lambda_EC\+lambda_betaPlus\+lambda_loss/);
  assert.match(claim(data, model).statement, /lambda_EC\/\(lambda_all-lambda_loss\)/);
  assert.match(claim(data, model).statement, /lambda_rest=gamma\*lambda_lab/);
  await rejects([
    ["parent disappearance cannot silently discard storage losses", (changed) =>
      replaceStatement(changed, model, "lambda_all=lambda_EC+lambda_betaPlus+lambda_loss", "lambda_all=lambda_EC+lambda_betaPlus")],
    ["daughter-growth normalization cannot lose the loss correction", (changed) =>
      replaceStatement(changed, model, "lambda_EC/(lambda_all-lambda_loss)", "lambda_EC/lambda_all")],
    ["rest-frame rates cannot invert the time-dilation conversion", (changed) =>
      replaceStatement(changed, model, "lambda_rest=gamma*lambda_lab", "lambda_rest=lambda_lab/gamma")],
    ["a frequency peak cannot become direct neutrino/nuclear-event detection", (changed) =>
      dropLimit(changed, observed, "No direct neutrino detector")],
    ["the constant-rate population model cannot lose its no-feeding restriction", (changed) =>
      dropLimit(changed, model, "constant-rate/no-feeding")]
  ]);
});

test("charge-state EC contrast retains partial rates, uncertainty and the bare-channel availability boundary", async () => {
  const data = await source();
  assert.match(claim(data, rates).statement, /rest-frame partial constants in s\^-1/);
  assert.match(claim(data, rates).statement, /0\.00158\(8\).*0\.00161\(10\).*0\.00219\(6\).*0\.00154\(11\).*0\.00147\(7\)/);
  assert.match(claim(data, rates).statement, /1\.49\(8\).*two to one/);
  await rejects([
    ["one-electron capture cannot inherit the two-electron rate", (changed) =>
      replaceStatement(changed, rates, "lambda_EC=0.00219(6)", "lambda_EC=0.00147(7)")],
    ["the orbital-EC dash cannot become a universal fitted zero", (changed) =>
      dropLimit(changed, rates, "orbital-EC dash")],
    ["finite beta+ precision cannot become exact environmental invariance", (changed) =>
      replaceStatement(changed, rates, "agree within their reported errors", "are exactly independent of all electronic environments")],
    ["a source half-life cannot become uncorrected total beam disappearance", (changed) =>
      dropLimit(changed, rates, "paper reuses lambda")]
  ]);
});

test("hyperfine interpretation keeps allowed-channel, moment-sign and population assumptions separate from measured rates", async () => {
  const data = await source();
  assert.match(claim(data, hyperfine).statement, /F=1\/2 or 3\/2/);
  assert.match(claim(data, hyperfine).statement, /allowed approximation only F=1\/2/);
  assert.match(claim(data, hyperfine).statement, /source-assumed lower F=1\/2 population/);
  await rejects([
    ["the lower-F assignment cannot become a directly measured nuclear magnetic moment", (changed) =>
      dropLimit(changed, hyperfine, "deduced in this source from neighboring nuclei")],
    ["cooling arguments cannot become a measured pure hyperfine population", (changed) =>
      dropLimit(changed, hyperfine, "not a state-resolved spin-population measurement")],
    ["a conditional 3/2 factor cannot become a universal occupancy law", (changed) =>
      dropLimit(changed, hyperfine, "not a universal occupancy rule")],
    ["an allowed-channel argument cannot exclude every higher-order transition", (changed) =>
      dropLimit(changed, hyperfine, "all higher-order transitions")]
  ]);
});

test("the finite nuclear-channel case cannot acquire broad chemical, hierarchy or replay authority", async () => {
  const data = await source();
  assert.match(publication(data).review.limit, /final publisher full text was not accessible/);
  assert.equal(publication(data).path, null);
  assert.equal(publication(data).sha256, null);
  assert.ok(claim(data, synthesis).limitations.some((limit) => limit.includes("1.12, Particle Decays")));
  await rejects([
    ["parent weights and unit counts cannot become measured emergence thresholds", (changed) =>
      dropLimit(changed, synthesis, "weights 0.35/0.65")],
    ["the broad Particle Decays parent cannot determine this channel, preparation or population model", (changed) =>
      dropLimit(changed, synthesis, "Original parent 1.12, Particle Decays")],
    ["the ion experiment cannot establish chemical or lattice effects", (changed) =>
      dropLimit(changed, synthesis, "solid-state/lattice effects")],
    ["source state assumptions cannot establish all ordinary decay responses", (changed) =>
      dropLimit(changed, synthesis, "all beta, alpha or gamma")],
    ["SOMA classification cannot supply a developmental law", (changed) =>
      dropLimit(changed, synthesis, "SOMA diagonal linkage")],
    ["source placeholders cannot become a numerical replay or oscillation result", (changed) =>
      dropLimit(changed, synthesis, "oscillation signal")]
  ]);
});
