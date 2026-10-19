import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const tensor = "D-phys-piezoelectric-tensor-conventions";
const switching = "D-phys-ferroelectric-switching-boundary";
const quartzContext = "M-phys-ogi2006-quartz-context";
const quartzResult = "C-phys-quartz-piezoelectric-response";
const filmContext = "M-phys-fichtner2019-alscn-context";
const filmSwitching = "C-phys-alscn-switching-evidence";
const filmResponse = "C-phys-alscn-piezoelectric-inversion";
const synthesis = "C-phys-piezoelectric-ferroelectric-source-scope";
const synthesisMethod = "M-phys-piezoelectric-ferroelectric-source-scope";
const quartzStudy = "ogi2006-quartz-piezoelectric";
const filmStudy = "fichtner2019-alscn-ferroelectric";
const formalPaper = "dejong2015-piezoelectric-tensors";
const contexts = [quartzStudy, filmStudy];
const nodeNames = ["piezoelectric-tensor-conventions", "ferroelectric-switching-boundary",
  "ogi2006-quartz-context", "quartz-piezoelectric-response", "fichtner2019-alscn-context",
  "alscn-switching-evidence", "alscn-piezoelectric-inversion", "piezoelectric-ferroelectric-source-scope"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Synchronize presentation/study duplicates so a mutation challenges the
// scientific boundary, including a claim embedded in the combined film finding.
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
  if (record.limitations.length === 0) record.limitations = ["The selected material preparation is supplied."];
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations =
    item.limitations.filter((limit) => limit !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /Piezo|piezo|Ferro|ferro|Physical|physics|changed|Expected values/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("piezoelectric definitions and two finite experiments do not create a database replay or switching by authority", async () => {
  const data = await source();
  for (const id of [tensor, switching]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  assert.equal(data.physics.studies.filter((item) => item.sourceId === formalPaper).length, 0,
    "Reading the formal tensor definitions does not admit941 new computations");
  for (const id of contexts) assert.equal(study(data, id).studyType, "primary-experiment");
  for (const name of ["ogi2006-quartz-context", "fichtner2019-alscn-context"]) {
    assert.equal(role(data, name).role, "experimental-context");
    assert.equal(entity(data, name).status, "definition");
  }
  for (const [id, context] of [[quartzResult, quartzStudy], [filmSwitching, filmStudy], [filmResponse, filmStudy]]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [context]);
  }
  for (const name of nodeNames) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, []);
  }
  await rejects([
    ["a source inference cannot become an independently reproduced numerical witness", (changed) => {
      claim(changed, quartzResult).status = "analytically-checked";
    }, /Analytical claim lacks a witness/],
    ["the quartz acquisition cannot become an unobserved first-principles calculation", (changed) => {
      study(changed, quartzStudy).studyType = "computational-analysis";
    }, /Piezo|piezo|study|Role contradicts source kind/],
    ["a tensor definition alone is not an experimentally observed ferroelectric state", (changed) => {
      claim(changed, tensor).status = "publication-supported";
      claim(changed, tensor).contextIds = [filmStudy];
    }]
  ]);
});

test("e and d retain derivative signs, units, thermodynamic boundaries and shear conventions", async () => {
  const data = await source();
  assert.match(claim(data, tensor).statement, /e_ijk=.*partial D_i\/partial strain_jk.*fixed E,T/);
  assert.match(claim(data, tensor).statement, /-\(partial stress_jk\/partial E_i\).*fixed strain,T/);
  assert.match(claim(data, tensor).statement, /C\/m\^2.*strain tensor d.*m\/V.*C\/N.*elastic compliance/);
  await rejects([
    ["the reciprocal stress derivative has a negative sign under the declared convention", (changed) =>
      replaceStatement(changed, tensor, "equivalently -(partial stress_jk/partial E_i)",
        "equivalently +(partial stress_jk/partial E_i)")],
    ["stress coefficient e cannot gain strain-coefficient units", (changed) =>
      replaceStatement(changed, tensor, "Its SI units are C/m^2", "Its SI units are m/V")],
    ["e-to-d conversion cannot omit elastic compliance", (changed) =>
      replaceStatement(changed, tensor, "requires elastic compliance and matching tensor/shear conventions",
        "requires no mechanical information or shear convention")],
    ["fixed-strain and fixed-E conditions cannot be silently conflated", (changed) =>
      dropLimit(changed, tensor, "contracted shear factors")],
    ["noncentrosymmetric compatibility does not imply all components or field-switchability", (changed) =>
      dropLimit(changed, tensor, "every noncentrosymmetric class")],
    ["intrinsic bulk constants cannot silently replace substrate-constrained effective film coefficients", (changed) =>
      dropLimit(changed, tensor, "substrate-constrained effective thin-film coefficients")]
  ]);
});

test("quartz resonance inference retains inherited dielectric inputs and its sampling levels", async () => {
  const data = await source();
  assert.match(claim(data, quartzContext).statement, /17 synthetic alpha-quartz.*15.*2.*point group32/);
  assert.match(claim(data, quartzContext).statement, /1 Pa.*30 C.*3 acquisitions.*72 identified resonance/);
  assert.match(claim(data, quartzContext).statement, /epsilon11\/epsilon0=4\.424.*epsilon33\/epsilon0=4\.632/);
  await rejects([
    ["adopted dielectric ratios cannot become new independent measurements", (changed) =>
      replaceStatement(changed, quartzContext, "Supply the inherited fixed-strain dielectric ratios",
        "Independently measure the fixed-strain dielectric ratios")],
    ["the fit cannot silently change the supplied dielectric response", (changed) =>
      replaceStatement(changed, quartzContext, "epsilon11/epsilon0=4.424", "epsilon11/epsilon0=44.24")],
    ["the dielectric/piezoelectric identifiability boundary cannot disappear", (changed) =>
      dropLimit(changed, quartzContext, "not independently measured by this acquisition")],
    ["17 specimens,72 modes and3 replacements are not independent publications or universal minima", (changed) =>
      dropLimit(changed, quartzContext, "distinct sampling levels")],
    ["mode identification and the inverse fit use the same measurement chain", (changed) =>
      dropLimit(changed, quartzContext, "not an independent coefficient measurement")],
    ["frequency fitting does not independently measure absolute handedness or polarization reversal", (changed) =>
      dropLimit(changed, quartzContext, "independent absolute handedness")]
  ]);
});

test("quartz coefficients retain specimen scatter and do not become polarization switching", async () => {
  const data = await source();
  assert.match(claim(data, quartzResult).statement, /e11=0\.151 C\/m\^2.*e14=-0\.061 C\/m\^2.*30 C/);
  assert.match(claim(data, quartzResult).statement, /specimen standard deviations4\.75 percent and17\.8 percent/);
  await rejects([
    ["source matrix signs cannot be silently reversed", (changed) =>
      replaceStatement(changed, quartzResult, "e14=-0.061", "e14=+0.061")],
    ["specimen scatter cannot become the standard error of the mean", (changed) =>
      replaceStatement(changed, quartzResult, "specimen standard deviations", "standard errors of the mean")],
    ["0.001-percent frequency repeatability is not a complete e uncertainty budget", (changed) =>
      dropLimit(changed, quartzResult, "complete propagated measurement uncertainty")],
    ["a linear coupled response is not a demonstrated quartz ferroelectric switching event", (changed) =>
      replaceStatement(changed, quartzResult, "not a newly measured spontaneous polarization or demonstrated ferroelectric switching",
        "a newly measured spontaneous polarization with demonstrated ferroelectric switching")],
    ["the conclusion's duplicated coefficient label cannot become a silent source correction", (changed) =>
      dropLimit(changed, quartzResult, "conclusion repeats the label e11")]
  ]);
});

test("the AlScN leakage correction uses five controlled sweeps rather than ordinary DLCC or standard PUND", async () => {
  const data = await source();
  assert.match(claim(data, filmContext).statement, /x=0\.27 with400 nm.*x=0\.32,0\.36,0\.40 with600 nm.*x=0\.43 with1 micrometre/);
  assert.match(claim(data, filmContext).statement, /711 Hz.*711 and411 Hz/);
  const correction = claim(data, filmContext).limitations.find((limit) => limit.includes("5 successive"));
  assert.match(correction, /1 bipolar and4 non-switching unipolar.*two frequencies.*intervening reversals/);
  assert.match(correction, /frequency-independent leakage.*zero switching contribution.*distortions remain/);
  await rejects([
    ["the modified non-switching controls cannot become standard PUND by relabeling", (changed) =>
      dropLimit(changed, filmContext, "standard-PUND acquisition")],
    ["frequency-dependent coercivity prevents ordinary correction of complete switching loops", (changed) =>
      dropLimit(changed, filmContext, "ordinary dynamic leakage compensation")],
    ["loop correction cannot silently use identical frequencies", (changed) =>
      replaceStatement(changed, filmContext, "711 and411 Hz", "711 and711 Hz")],
    ["one publication does not mean every composition and readout used one identical specimen", (changed) =>
      dropLimit(changed, filmContext, "not all the same specimen")],
    ["the figure series cannot borrow a universal600 nm thickness for every composition", (changed) =>
      replaceStatement(changed, filmContext, "x=0.27 with400 nm thickness", "x=0.27 with600 nm thickness")]
  ]);
});

test("ferroelectric switching needs polarity controls and does not measure an absolute bulk-AlN polarization", async () => {
  const data = await source();
  assert.match(claim(data, switching).statement, /hysteresis loop alone is insufficient/);
  assert.match(claim(data, filmSwitching).statement, /polarity-selective etching.*piezoelectric sign reversal.*pulse controls/);
  assert.match(claim(data, filmContext).statement, /electrode removal with50 nm overetch/);
  await rejects([
    ["a hysteresis loop alone cannot classify every material as ferroelectric", (changed) =>
      replaceStatement(changed, switching, "hysteresis loop alone is insufficient", "hysteresis loop alone is sufficient")],
    ["a polar structure or predicted double well is not accessible field switching", (changed) =>
      dropLimit(changed, switching, "predicted double-well/barrier")],
    ["etch controls cannot silently lose electrode-removal overetch", (changed) =>
      replaceStatement(changed, filmContext, "50 nm overetch", "zero overetch")],
    ["electrical and ex-situ polarity evidence is not an in-situ atom movie or proof every grain reversed", (changed) =>
      dropLimit(changed, filmSwitching, "in-situ movie of unit-cell reversal")],
    ["integrated switching charge is not an absolute bulk polarization of pure AlN", (changed) =>
      dropLimit(changed, filmSwitching, "no pure-AlN absolute polarization")],
    ["breakdown before switching cannot establish an all-state composition threshold", (changed) =>
      dropLimit(changed, filmSwitching, "universal composition threshold")]
  ]);
});

test("effective transverse sign reversal cannot become longitudinal d33 or an unconstrained bulk coefficient", async () => {
  const data = await source();
  assert.match(claim(data, filmResponse).statement, /e31,f changes from-2\.90 C\/m\^2.*to\+2\.76 C\/m\^2/);
  assert.match(claim(data, filmContext).statement, /4-point bending and16 mm\^2 electrodes/);
  assert.match(claim(data, filmContext).statement, /0\.1 Hz.*-200 V over60 s/);
  await rejects([
    ["an effective transverse e31 response cannot become a longitudinal d33 measurement", (changed) =>
      replaceStatement(changed, filmResponse, "effective transverse coefficient e31,f", "longitudinal coefficient d33,f")],
    ["field reversal cannot retain the same reported coefficient sign", (changed) =>
      replaceStatement(changed, filmResponse, "to+2.76 C/m^2", "to-2.76 C/m^2")],
    ["the film result is not an unconstrained bulk-crystal constant", (changed) =>
      replaceStatement(changed, filmResponse, "not a longitudinal d33 coefficient or an unconstrained bulk-crystal constant",
        "a longitudinal d33 coefficient and an unconstrained bulk-crystal constant")],
    ["the source0.85/0.83 longitudinal correction and small/large-signal distinction cannot be silently resolved", (changed) =>
      dropLimit(changed, filmContext, "main text uses0.85 while SI gives0.83")],
    ["transverse coefficient signs retain electrode/axis/loading conventions", (changed) =>
      dropLimit(changed, filmResponse, "stated electrode, axis and loading convention")]
  ]);
});

test("finite short-circuit retention and thermal steps do not locate an equilibrium Curie point or infinite memory", async () => {
  const data = await source();
  assert.match(claim(data, filmSwitching).statement, /short-circuited between2 ms.*up to10\^5 s.*not exactly zero/);
  assert.match(claim(data, filmResponse).limitations.join(" "), /consecutive5-minute treatments.*not an observed equilibrium Curie temperature at600 C/);
  await rejects([
    ["a finite10^5-second observation cannot become an infinite storage result", (changed) =>
      replaceStatement(changed, filmSwitching, "up to10^5 s", "for an infinite time")],
    ["shorted retention intervals cannot become driven open-circuit storage", (changed) =>
      replaceStatement(changed, filmSwitching, "capacitor short-circuited", "capacitor under a continuous dc bias")],
    ["the residual non-switching charge cannot be silently set to zero", (changed) =>
      replaceStatement(changed, filmSwitching, "non-switching charge is not exactly zero", "non-switching charge is exactly zero")],
    ["finite pulse retention cannot be promoted to unlimited endurance", (changed) =>
      dropLimit(changed, filmSwitching, "not infinite retention")],
    ["five-minute thermal survival and electrode degradation do not locate equilibriumTc=600C", (changed) =>
      dropLimit(changed, filmResponse, "equilibrium Curie temperature at600 C")],
    ["thirty-week repeated response checks are not a continuous zero-field polarization trace", (changed) =>
      dropLimit(changed, filmResponse, "limited storage details")]
  ]);
});

test("the synthesis retains both complete contexts, source-version limits and excluded catalogue defaults", async () => {
  const data = await source();
  for (const id of [synthesis, synthesisMethod]) assert.deepEqual(claim(data, id).contextIds, contexts);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.equal(data.physics.studies.filter((item) => item.sourceId === filmStudy).length, 1);
  const incoming = data.graph.relations.filter((item) => item.target === "phys:piezoelectric-ferroelectric-source-scope");
  assert.equal(incoming.length, 7);
  for (const item of incoming) {
    assert.equal(item.kind, "descriptive");
    assert.deepEqual(item.claimIds, [synthesisMethod]);
    assert.deepEqual(item.contextIds, contexts);
  }
  const legacy = claim(data, synthesis).citations.find((item) => item.sourceId === "legacy-2");
  assert.equal(legacy.role, "provenance");
  assert.match(legacy.note, /Original catalogue JSON pointer: \/16/);
  assert.match(publication(data, filmStudy).review.limit, /26November2018.*2019.*403/);
  assert.match(publication(data, formalPaper).review.limit, /not the941-material dataset/);
  await rejects([
    ["the shared interpretation cannot drop its quartz preparation and inherited inputs", (changed) => {
      claim(changed, synthesis).contextIds = [filmStudy];
    }],
    ["a joint dependency retains both complete experimental contexts", (changed) => {
      edge(changed, "alscn-piezoelectric-inversion", "piezoelectric-ferroelectric-source-scope").contextIds = [filmStudy];
    }],
    ["author-v2 reading cannot silently become obtained final-publisher reading", (changed) => {
      publication(changed, filmStudy).review.extent = "full-final-publisher-text-and-independent-data-reproduction";
    }],
    ["the actual source version and printed discrepancies cannot disappear", (changed) =>
      dropLimit(changed, synthesis, "Source-version and printed discrepancies")],
    ["parent fractions are not measured causal weights", (changed) =>
      dropLimit(changed, synthesis, "rather than measured causal fractions")],
    ["two carriers are not a measured piezoelectric or ferroelectric onset threshold", (changed) =>
      dropLimit(changed, synthesis, "N_min=N_crit=2")],
    ["SOMA and display labels cannot acquire independent physical-stage authority", (changed) =>
      dropLimit(changed, synthesis, "provenance/display classification")],
    ["a prepared specimen does not prove a universal microscopic soft-mode or Landau model", (changed) =>
      dropLimit(changed, synthesis, "universal soft-mode mechanism")]
  ]);
});
