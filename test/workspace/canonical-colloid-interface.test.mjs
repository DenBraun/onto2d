import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const stability = "D-phys-colloid-interface-stability-boundary";
const pairModel = "D-phys-screened-colloid-pair-model";
const pairContext = "M-phys-crocker1994-colloid-pair-context";
const pairMethod = "M-phys-colloid-pair-repulsion";
const pairResult = "C-phys-colloid-pair-repulsion";
const nucleusContext = "M-phys-gasser2001-colloid-context";
const nucleusResult = "C-phys-colloid-nucleus-growth";
const interfaceMethod = "M-phys-colloid-interface-free-energy";
const interfaceResult = "C-phys-colloid-interface-free-energy";
const synthesis = "C-phys-colloid-interface-source-scope";
const synthesisMethod = "M-phys-colloid-interface-source-scope";
const pairStudy = "crocker1994-colloid-pair";
const nucleusStudy = "gasser2001-colloid-nucleation";
const contexts = [pairStudy, nucleusStudy];
const nodeNames = ["colloid-interface-stability-boundary", "screened-colloid-pair-model",
  "crocker1994-colloid-pair-context", "colloid-pair-repulsion", "gasser2001-colloid-context",
  "colloid-nucleus-growth", "colloid-interface-free-energy", "colloid-interface-source-scope"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Keep presentation and study copies synchronized. Gasser's finding combines
// two derived outputs from one acquisition, so replace an embedded exact claim.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
  for (const item of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (item[field]?.includes(original)) item[field] = item[field].replace(original, record.statement);
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one actual boundary must match: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  if (record.limitations.length === 0) record.limitations = ["The specified experimental system is supplied."];
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) {
    item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /Colloid|colloid|Physical|physics|changed|Expected values/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("colloid definitions, two experiments and shared derived outputs keep their actual evidence roles", async () => {
  const data = await source();
  for (const id of [stability, pairModel]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  for (const id of contexts) {
    assert.equal(study(data, id).studyType, "primary-experiment");
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 1);
  }
  for (const name of ["crocker1994-colloid-pair-context", "gasser2001-colloid-context"]) {
    assert.equal(role(data, name).role, "experimental-context");
    assert.equal(entity(data, name).status, "definition");
  }
  for (const [id, context] of [[pairResult, pairStudy], [nucleusResult, nucleusStudy],
    [interfaceResult, nucleusStudy]]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [context]);
  }
  for (const name of nodeNames) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, []);
  }
  await rejects([
    ["a source-reported potential fit cannot become a locally replayed numerical witness", (changed) => {
      claim(changed, pairResult).status = "analytically-checked";
    }, /Analytical claim lacks a witness/],
    ["a colloid acquisition cannot become a computational-only study", (changed) => {
      study(changed, pairStudy).studyType = "computational-analysis";
    }, /Colloid|colloid|study|Role contradicts source kind/],
    ["the finite-sphere definition is not an acquired screened-force measurement", (changed) => {
      claim(changed, pairModel).status = "publication-supported";
      claim(changed, pairModel).contextIds = [pairStudy];
    }]
  ]);
});

test("screened pair energy retains finite-sphere amplitude, separation, charge and electrostatic units", async () => {
  const data = await source();
  assert.match(claim(data, pairModel).statement, /U\(x\)\/\(kB\*T\)=Zeff\^2\*lambdaB/);
  assert.match(claim(data, pairModel).statement, /\[exp\(kappa\*a\)\/\(1\+kappa\*a\)\]\^2\*exp\(-kappa\*x\)\/x/);
  assert.match(claim(data, pairModel).statement, /center-to-center separation.*sphere radius/);
  await rejects([
    ["a screened decay cannot become an exponentially increasing interaction", (changed) =>
      replaceStatement(changed, pairModel, "exp(-kappa*x)", "exp(kappa*x)")],
    ["a repulsive effective-charge pair term cannot gain an attractive sign", (changed) =>
      replaceStatement(changed, pairModel, "=Zeff^2*lambdaB", "=-Zeff^2*lambdaB")],
    ["center separation cannot silently become surface gap", (changed) =>
      replaceStatement(changed, pairModel, "center-to-center separation", "surface-to-surface gap")],
    ["finite-sphere radius cannot become diameter without changing the amplitude", (changed) =>
      replaceStatement(changed, pairModel, "a is sphere radius", "a is sphere diameter")],
    ["source Gaussian electrostatic normalization cannot silently become SI", (changed) =>
      replaceStatement(changed, pairModel, "source electrostatic-cgs convention", "rationalized SI convention")],
    ["the explicit SI conversion boundary cannot disappear", (changed) =>
      dropLimit(changed, pairModel, "4*pi*epsilon0*epsilonr")],
    ["far-field repulsion does not establish a complete DLVO coagulation barrier", (changed) =>
      dropLimit(changed, pairModel, "complete repulsion-plus-attraction DLVO potential")],
    ["an isolated pair does not establish an exact dense many-body interaction", (changed) =>
      dropLimit(changed, pairModel, "exact pair-additive description of a dense suspension")]
  ]);
});

test("release trajectories stay distinct from stationary-distribution and potential inference", async () => {
  const data = await source();
  assert.match(claim(data, pairContext).statement, /radius326 nm.*796 pair trajectories/);
  assert.match(claim(data, pairContext).statement, /57 nm bins.*1\/30 s.*6502 initial\/final separation samples/);
  assert.match(claim(data, pairMethod).statement, /stationary probability vector.*U=-kB\*T\*log\(p_eq\)/);
  await rejects([
    ["released finite trajectories are not direct equilibrium-histogram samples", (changed) =>
      dropLimit(changed, pairContext, "finite non-equilibrium release trajectories")],
    ["the potential inference cannot bypass the transition model", (changed) =>
      replaceStatement(changed, pairMethod, "stationary probability vector of the measured transition matrix",
        "directly measured equilibrium separation histogram")],
    ["the inferred potential has the Boltzmann sign", (changed) =>
      replaceStatement(changed, pairMethod, "U=-kB*T*log(p_eq)", "U=+kB*T*log(p_eq)")],
    ["hydrodynamic coupling and reflecting-boundary assumptions remain explicit", (changed) =>
      dropLimit(changed, pairContext, "omits hydrodynamic coupling")],
    ["months-long dense-cell crystals are not the lifetime of a dilute pair", (changed) =>
      dropLimit(changed, pairContext, "different preparation")],
    ["a reference Bjerrum length at25 C is not an acquired experiment temperature", (changed) =>
      dropLimit(changed, pairContext, "does not establish the actual experimental temperature")]
  ]);
});

test("effective-charge and screening fits preserve uncertainty, shared data and finite attraction limits", async () => {
  const data = await source();
  assert.match(claim(data, pairResult).statement, /Zeff=1991\+\/-150.*kappa\^-1=161\+\/-10 nm/);
  assert.match(claim(data, pairResult).statement, /no statistically significant long-range attraction.*resolved preparation and separation range/);
  await rejects([
    ["an effective fitted charge is not the fully dissociated surface charge", (changed) =>
      replaceStatement(changed, pairResult, "not the fully dissociated surface charge", "the fully dissociated surface charge")],
    ["the161 nm fitted screening length cannot become161 micrometres", (changed) =>
      replaceStatement(changed, pairResult, "kappa^-1=161+/-10 nm", "kappa^-1=161+/-10 micrometres")],
    ["potential and parameters from one trajectory pool are not independent confirmations", (changed) =>
      dropLimit(changed, pairResult, "not independent confirmations")],
    ["source localization and lower-limit uncertainty caveats cannot be removed", (changed) =>
      dropLimit(changed, pairContext, "effective charge as a lower limit")],
    ["no resolved long-range attraction cannot exclude all preparations or short-range dispersion", (changed) =>
      dropLimit(changed, pairResult, "does not exclude short-range dispersion")]
  ]);
});

test("PMMA preparation and local-order connections do not become exact hard spheres or chemical bonds", async () => {
  const data = await source();
  assert.match(claim(data, nucleusContext).statement, /sterically stabilized.*a=1\.26 micrometres.*small charge/);
  assert.match(claim(data, nucleusContext).statement, /Shear melt.*50 microlitre.*58 by55 by20.*4000/);
  await rejects([
    ["the dye-associated charge cannot be erased by declaring an exact hard-sphere experiment", (changed) =>
      replaceStatement(changed, nucleusContext, "nearly hard spheres rather than an exact hard-sphere model",
        "an exact uncharged hard-sphere model")],
    ["packing-reference calibration is not an independent absolute radius measurement", (changed) =>
      dropLimit(changed, nucleusContext, "assigned random-close-packed0.64 and rhcp0.74")],
    ["l6 neighbor thresholds and8 connections cannot become chemical bonds or universal minima", (changed) =>
      dropLimit(changed, nucleusContext, "at least8 crystal-like bonds")],
    ["the critical nucleus cannot borrow the dilute water-pair preparation", (changed) => {
      claim(changed, nucleusResult).contextIds = [pairStudy];
    }],
    ["reference order histograms are analysis inputs rather than independent measured crystals", (changed) =>
      dropLimit(changed, nucleusContext, "Computer-generated order-reference histograms")]
  ]);
});

test("finite nucleus tracking preserves its unspecified sampling denominator and post-shear limits", async () => {
  const data = await source();
  const sampling = claim(data, nucleusContext).limitations.find((limit) => limit.includes("note27"));
  assert.match(sampling, /1500-2500 fully visible tracked nuclei per typical measurement/);
  assert.match(sampling, /without specifying its duration, frame count or unique-track\/repeated-observation accounting/);
  assert.match(sampling, /not a simultaneous population or a known number of independent events/);
  assert.match(claim(data, nucleusResult).statement, /fraction0\.47.*60<M<160.*spherical-equivalent/);
  assert.match(claim(data, nucleusResult).statement, /20,43,66 and89 minutes after shear melting/);
  await rejects([
    ["the source nucleus count cannot become a simultaneous population or known independent sample size", (changed) =>
      dropLimit(changed, nucleusContext, "unique-track/repeated-observation accounting")],
    ["immediate post-shear growth cannot establish globally equilibrated nucleation", (changed) =>
      dropLimit(changed, nucleusContext, "little equilibration time")],
    ["the finite critical range is not a universal2-particle carrier threshold", (changed) =>
      replaceStatement(changed, nucleusResult, "60<M<160 particles", "M=2 particles for all colloidal systems")],
    ["visibility and local classifier are essential to the reported critical range", (changed) =>
      dropLimit(changed, nucleusResult, "conditional on the local-order classifier")],
    ["a spherical-equivalent radius cannot replace rough nonspherical nuclei", (changed) =>
      dropLimit(changed, nucleusResult, "observed nuclei are nonspherical")],
    ["minutes of structural evolution cannot prove perpetual thermodynamic stability", (changed) =>
      dropLimit(changed, nucleusResult, "persistence over minutes proves global thermodynamic stability")]
  ]);
});

test("interfacial free energy remains a small-nucleus statistical fit with diffuse geometry and energy-per-area units", async () => {
  const data = await source();
  assert.match(claim(data, stability).statement, /4\*pi\*r\^2\*gamma-\(4\*pi\/3\)\*r\^3\*n\*DeltaMu/);
  assert.match(claim(data, interfaceMethod).statement, /r much less than rc.*exp\[-A\*gamma\/\(kB\*T\)\].*ellipsoidal geometry/);
  assert.match(claim(data, interfaceResult).statement, /0\.027\*kB\*T\/a\^2.*fraction0\.445.*0\.026\*kB\*T\/a\^2/);
  await rejects([
    ["surface cost competes with rather than reinforces the bulk growth term", (changed) =>
      replaceStatement(changed, stability, "gamma-(4*pi/3)", "gamma+(4*pi/3)")],
    ["the surface-area distribution has the Boltzmann suppression sign", (changed) =>
      replaceStatement(changed, interfaceMethod, "exp[-A*gamma/(kB*T)]", "exp[+A*gamma/(kB*T)]")],
    ["an interfacial energy per area cannot silently become an energy", (changed) =>
      replaceStatement(changed, interfaceResult, "0.027*kB*T/a^2", "0.027*kB*T")],
    ["the small-nucleus statistical assumptions cannot become direct mechanical tensiometry", (changed) =>
      dropLimit(changed, interfaceMethod, "not direct mechanical tensiometry")],
    ["a rough diffuse interface cannot become a permanent sharp material shell", (changed) =>
      dropLimit(changed, interfaceMethod, "rough diffuse boundary")],
    ["sample-specific0.026 is not a correction replacing the approximate0.027 overview", (changed) =>
      replaceStatement(changed, interfaceResult, "not competing independent measurements or a universal hard-sphere constant",
        "independent measurements of a universal hard-sphere constant")],
    ["the source's older-theory disagreement and weak-charge limitation remain", (changed) =>
      dropLimit(changed, interfaceResult, "approximately a factor four")]
  ]);
});

test("joint interpretation retains both full contexts and one shared Gasser acquisition", async () => {
  const data = await source();
  for (const id of [synthesis, synthesisMethod]) assert.deepEqual(claim(data, id).contextIds, contexts);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.equal(data.physics.studies.filter((item) => item.sourceId === nucleusStudy).length, 1);
  const shared = edge(data, "colloid-nucleus-growth", "colloid-interface-free-energy");
  assert.equal(shared.kind, "descriptive");
  assert.equal(shared.role, "interpretation-dependency");
  assert.deepEqual(shared.contextIds, [nucleusStudy]);
  const incoming = data.graph.relations.filter((item) => item.target === "phys:colloid-interface-source-scope");
  assert.equal(incoming.length, 7);
  for (const item of incoming) {
    assert.equal(item.kind, "descriptive");
    assert.deepEqual(item.claimIds, [synthesisMethod]);
    assert.deepEqual(item.contextIds, contexts);
  }
  await rejects([
    ["the synthesis cannot drop the distinct isolated-pair preparation", (changed) => {
      claim(changed, synthesis).contextIds = [nucleusStudy];
    }],
    ["a dependency targeting the joint result must retain both complete contexts", (changed) => {
      edge(changed, "colloid-interface-free-energy", "colloid-interface-source-scope").contextIds = [nucleusStudy];
    }],
    ["growth and interface outputs share data rather than independent confirming acquisitions", (changed) =>
      dropLimit(changed, synthesis, "not several independent experiments")],
    ["classification dependence is not a functional causal growth-to-surface-energy edge", (changed) => {
      edge(changed, "colloid-nucleus-growth", "colloid-interface-free-energy").kind = "functional-support";
      edge(changed, "colloid-nucleus-growth", "colloid-interface-free-energy").claimIds = [interfaceResult];
    }, /Colloid|colloid|physical|Physical|changed|Unreviewed/]
  ]);
});

test("original defaults and reading provenance cannot acquire scientific authority", async () => {
  const data = await source();
  const legacy = claim(data, synthesis).citations.find((item) => item.sourceId === "legacy-2");
  assert.equal(legacy.role, "provenance");
  assert.equal(legacy.locator, "/");
  assert.match(legacy.note, /Original catalogue JSON pointer: \/13/);
  assert.match(publication(data, pairStudy).review.extent, /full-published-scientific-main-text/);
  assert.match(publication(data, pairStudy).review.limit, /private communications.*complete DLVO/);
  assert.match(publication(data, nucleusStudy).review.limit, /Unrelated preceding references.*following photoexcited-molecule/);
  await rejects([
    ["original parent fractions are not measured causal weights", (changed) =>
      dropLimit(changed, synthesis, "not measured causal fractions")],
    ["original carrier minima are not validated critical populations", (changed) =>
      dropLimit(changed, synthesis, "N_min=N_crit=2")],
    ["catalogue SOMA labels are not independently measured physical stages", (changed) =>
      dropLimit(changed, synthesis, "catalogue classifications")],
    ["real emulsions and transport cannot be derived merely from a pair force", (changed) =>
      dropLimit(changed, synthesis, "Real droplets, controlled emulsions")],
    ["unread historical originals and private communications cannot silently become primary evidence", (changed) =>
      dropLimit(changed, synthesis, "original1941/1948 DLVO works")],
    ["legacy catalogue vocabulary is provenance rather than experimental support", (changed) => {
      claim(changed, synthesis).citations.find((item) => item.sourceId === "legacy-2").role = "supports";
    }, /Colloid|colloid|provenance|Catalogue|catalogue|primary particle evidence/],
    ["the selected source reading cannot silently become a locally reproduced dataset", (changed) => {
      publication(changed, nucleusStudy).review.extent = "raw-confocal-data-independent-reproduction";
    }]
  ]);
});
