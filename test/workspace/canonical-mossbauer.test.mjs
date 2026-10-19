import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const recoil = "D-phys-recoilless-nuclear-transition";
const boundary = "D-phys-mossbauer-observable-model-boundary";
const context = "M-phys-dubiel2020-fe-gluconate-context";
const measured = "C-phys-dubiel-fe-gluconate-transmission";
const measuredMethod = "M-phys-dubiel-fe-gluconate-transmission";
const fitted = "C-phys-dubiel-fe-gluconate-spectral-inference";
const fittedMethod = "M-phys-dubiel-fe-gluconate-spectral-inference";
const scope = "C-phys-mossbauer-source-scope";
const scopeMethod = "M-phys-mossbauer-source-scope";
const experiment = "dubiel2020-fe-gluconate";
const paper = "dubiel2020-amorphous-fe-gluconate";
const lecture = "mossbauer1961-nobel-lecture";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const publication = (data, id) => data.graph.sources.find((item) => item.id === id);
const study = (data) => data.physics.studies.find((item) => item.id === experiment);
const role = (data, suffix) => data.readiness.nodeRoles.find((item) => item.nodeId === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((item) =>
  item.source === `phys:${from}` && item.target === `phys:${to}`);

// Synchronize duplicated display/study prose so rejection protects a changed
// scientific assertion, rather than only an inconsistent copy of that assertion.
function replaceStatement(data, id, before, after) {
  const item = claim(data, id), previous = item.statement;
  assert.ok(previous.includes(before), `Reviewed phrase required: ${before}`);
  item.statement = previous.replace(before, after);
  for (const node of data.graph.entities) if (node.description === previous) node.description = item.statement;
  for (const record of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (record[field]?.includes(previous)) record[field] = record[field].replace(previous, item.statement);
  }
}

function removeLimit(data, id, fragment) {
  const item = claim(data, id), matches = item.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `One reviewed boundary must match: ${fragment}`);
  const removed = matches[0];
  item.limitations = item.limitations.filter((limit) => limit !== removed);
  for (const node of data.graph.entities) node.openObligations = node.openObligations.filter((limit) => limit !== removed);
  for (const record of data.physics.studies) record.limitations = record.limitations.filter((limit) => limit !== removed);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), name);
  }
}

test("a zero-phonon nuclear event retains momentum transfer and a conditional recoil scale", async () => {
  const data = await source();
  assert.match(claim(data, recoil).statement, /E_R=E_gamma\^2\/\(2\*M\*c\^2\)/);
  assert.match(claim(data, recoil).statement, /Momentum is still transferred.*negligibly small on the stated spectral scale/);
  await rejects([
    ["recoilless does not mean zero transferred momentum", (d) => replaceStatement(d, recoil,
      "Momentum is still transferred to the bound body", "No momentum is transferred to the bound body")],
    ["the free recoil formula cannot replace every individual bound-event energy", (d) => removeLimit(d, recoil, "energy balance of every bound event")],
    ["negligible translational recoil is not identically zero for every finite body", (d) => removeLimit(d, recoil, "arbitrary finite isolated body")],
    ["the zero-phonon channel preserves rather than changes internal occupations", (d) => replaceStatement(d, recoil,
      "leaves the internal vibrational occupation state unchanged", "always creates an internal vibrational quantum")],
    ["a fraction of recoilless events is not every emitted gamma ray", (d) => replaceStatement(d, recoil,
      "This zero-phonon channel is a fraction of events", "Every emitted gamma ray belongs to the zero-phonon channel")],
    ["the qualitative lecture condition is not an exact universal energy cutoff", (d) => removeLimit(d, recoil, "universal cutoff near 150 keV")]
  ]);
});

test("finite-temperature probability and directional displacement remain separate from no motion", async () => {
  const data = await source();
  assert.match(claim(data, boundary).statement, /f=exp\(-k_gamma\^2\*mean\(u_parallel\^2\)\)/);
  assert.match(claim(data, boundary).statement, /isomer and second-order-Doppler contributions/);
  await rejects([
    ["zero phonons exchanged does not require an empty initial phonon state", (d) => removeLimit(d, recoil, "contained no phonons")],
    ["finite temperature is compatible with a no-phonon component", (d) => removeLimit(d, boundary, "neither f=1 nor zero temperature")],
    ["projected displacement cannot silently become a three-dimensional total", (d) => replaceStatement(d, boundary,
      "u_parallel is displacement projected along the gamma wave vector", "u_parallel is the unprojected total three-dimensional displacement")],
    ["the harmonic Gaussian expression is not an unrestricted anharmonic law", (d) => removeLimit(d, boundary, "general anharmonic")],
    ["center shift is not purely an isomer shift at every temperature", (d) => replaceStatement(d, boundary,
      "center shift contains isomer and second-order-Doppler contributions", "center shift contains only the temperature-independent isomer contribution")],
    ["the two Debye routes require their different assumptions", (d) => removeLimit(d, boundary, "negligible temperature variation of the isomer shift")]
  ]);
});

test("the positive XRD-amorphous case keeps finite diffraction sensitivity and measured transmission geometry", async () => {
  const data = await source();
  assert.match(claim(data, measured).statement, /broad XRD pattern classified as amorphous/);
  assert.match(claim(data, context).statement, /constant-acceleration drive.*1024 analyzer channels.*room-temperature Co-57\/Rh/);
  await rejects([
    ["the reported amorphous absorber cannot acquire perfect periodic order", (d) => replaceStatement(d, measured,
      "broad XRD pattern classified as amorphous", "sharp XRD Bragg pattern proving a perfect periodic single crystal")],
    ["finite-sensitivity XRD does not establish absence of all local order", (d) => removeLimit(d, context, "every atomic neighborhood has no order")],
    ["diffraction cannot supply an exact zero crystalline volume fraction", (d) => removeLimit(d, measured, "exactly absent crystalline volume fraction")],
    ["finite transmission spectroscopy is not a different scattering geometry", (d) => replaceStatement(d, context,
      "Record Fe-57 transmission spectra", "Record time-resolved grazing-incidence nuclear reflectivity spectra")],
    ["the figure temperature is 268 K rather than the study endpoint", (d) => replaceStatement(d, measured,
      "Figure 2 displays 78 K and 268 K examples", "Figure 2 displays 78 K and 295 K examples")],
    ["absorber temperature stability does not become the spectral error budget", (d) => removeLimit(d, context, "preparation/control values are not error bars")],
    ["fitted overlays are not independently imaged sites or magnetic phases", (d) => removeLimit(d, measuredMethod, "three distinct atom positions")]
  ]);
});

test("measured FWHM and source-relative shifts do not become natural widths or alpha-Fe calibration", async () => {
  const data = await source();
  assert.match(claim(data, fitted).statement, /finite widths.*distinct center shifts and quadrupole splittings/);
  await rejects([
    ["recoilless spectra need not show the natural nuclear width", (d) => removeLimit(d, boundary, "observed natural-width line")],
    ["the source-relative mm/s widths retain their reference and unit boundary", (d) => removeLimit(d, fitted, "not automatically to metallic alpha-Fe")],
    ["reported transmission widths cannot become direct natural energy widths", (d) => replaceStatement(d, fitted,
      "finite widths and distinct center shifts", "directly measured natural nuclear energy widths and absolute center shifts")],
    ["relative transmission does not measure an absolute gamma-emission probability", (d) => removeLimit(d, measured, "absolute gamma-emission probability")],
    ["typical fit errors cannot become an invented confidence/covariance budget", (d) => removeLimit(d, context, "complete covariance/systematic budget")],
    ["the spectrum name alone cannot establish magnetic order or complete phonon density", (d) => removeLimit(d, scope, "Magnetic ordering, exact site geometry")]
  ]);
});

test("relative spectral area and shared Debye fits preserve normalization and source discrepancies", async () => {
  const data = await source();
  assert.match(claim(data, fitted).statement, /0\.49,0\.46,0\.52 relative to 78 K/);
  assert.match(claim(data, fitted).statement, /377\(9\) K from CS1 and 204\(4\) K from a1/);
  await rejects([
    ["a normalized relative area is not an absolute f probability", (d) => replaceStatement(d, fitted,
      "normalized area quantities a1,a2,a3 are 0.49,0.46,0.52 relative to 78 K", "absolute recoilless probabilities f1,f2,f3 are 0.49,0.46,0.52")],
    ["the background and reference notation discrepancy cannot disappear", (d) => removeLimit(d, fittedMethod, "reuses a_k on the normalization reference")],
    ["relative component areas need not be exact atom-number fractions", (d) => removeLimit(d, fitted, "not automatically atom-number fractions")],
    ["the 268 K nominal area row cannot become an exact normalized probability mixture", (d) => removeLimit(d, fitted, "101.0 percent")],
    ["the printed Table 3 versus Table 2 cross-reference remains explicit", (d) => removeLimit(d, fitted, "adjacent displayed table is Table 2")],
    ["the distinct effective Debye estimates cannot acquire exact equality", (d) => replaceStatement(d, fitted,
      "377(9) K from CS1 and 204(4) K from a1", "377(9) K from both CS1 and a1 as two identical direct thermometers")],
    ["same-data Debye fits do not become independent determinations with invented errors", (d) => removeLimit(d, fitted, "full shared-data covariance")],
    ["the thin-absorber relative-area model cannot be silently removed", (d) => replaceStatement(d, fittedMethod,
      "in the source thin-absorber approximation", "without absorber-thickness assumptions")]
  ]);
});

test("one primary experiment supports observed and fitted outputs without a lecture replication or replay", async () => {
  const data = await source();
  assert.equal(study(data).studyType, "primary-experiment");
  assert.equal(role(data, "dubiel2020-fe-gluconate-context").role, "experimental-context");
  assert.equal(data.physics.studies.filter((item) => item.sourceId === paper).length, 1);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === lecture).length, 0);
  for (const id of [measured, fitted, scope]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [experiment]);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  for (const suffix of ["recoilless-nuclear-transition", "mossbauer-observable-model-boundary",
    "dubiel-fe-gluconate-transmission", "dubiel-fe-gluconate-spectral-inference"]) {
    assert.deepEqual(edge(data, suffix, "mossbauer-source-scope").claimIds, [scopeMethod]);
    assert.deepEqual(edge(data, suffix, "mossbauer-source-scope").contextIds, [experiment]);
  }
  await rejects([
    ["the observed and inferred outputs retain their common acquisition", (d) => { claim(d, fitted).contextIds = ["unreviewed-independent-debye-experiment"]; }],
    ["the single-study scope is not a multi-acquisition literature synthesis", (d) => { claim(d, scope).status = "literature-synthesis"; }],
    ["the fitting method cannot be replaced by a context-free definition", (d) => { edge(d, "dubiel-fe-gluconate-transmission", "dubiel-fe-gluconate-spectral-inference").claimIds = [boundary]; }],
    ["the scope arrow retains its actual experiment context", (d) => { edge(d, "recoilless-nuclear-transition", "mossbauer-source-scope").contextIds = []; }],
    ["the lecture is not another independent primary experiment", (d) => removeLimit(d, recoil, "not a second independent acquisition")],
    ["same-specimen fits cannot become independent replications", (d) => removeLimit(d, context, "not independent replications")],
    ["an unperformed Debye/spectral analysis cannot acquire a reproduced lifetime", (d) => removeLimit(d, fitted, "dynamical lifetime is reproduced")]
  ]);
});

test("actual primary reading, catalogue parents and carrier thresholds remain bounded", async () => {
  const data = await source();
  assert.equal(publication(data, lecture).year, 1961);
  assert.equal(publication(data, lecture).doi, null);
  assert.equal(publication(data, paper).doi, "10.1016/j.ica.2020.119760");
  assert.match(publication(data, lecture).review.limit, /Pages596-601 were not reviewed or admitted/);
  assert.match(publication(data, paper).review.limit, /v1=6September2019, v2=5May2020/);
  assert.equal(claim(data, scope).citations.find((item) => item.sourceId === "legacy-2").role, "provenance");
  for (const suffix of ["recoilless-nuclear-transition", "mossbauer-observable-model-boundary",
    "dubiel2020-fe-gluconate-context", "dubiel-fe-gluconate-transmission",
    "dubiel-fe-gluconate-spectral-inference", "mossbauer-source-scope"]) assert.equal(role(data, suffix).instanceAdmission, "none");
  await rejects([
    ["the Nobel scan cannot acquire the unread 1959 journal article DOI", (d) => { publication(d, lecture).doi = "10.1515/zna-1959-0303"; }],
    ["selected preprint reading cannot become full publisher-article review", (d) => { publication(d, paper).review.extent = "full-publisher-article"; }],
    ["unread final lecture pages cannot become an admitted proof locator", (d) => { claim(d, recoil).citations[0].locator = "Printed pages 596-601: fully reviewed mathematical theorem and every experiment"; }],
    ["generic nucleon existence does not supply a resonance lifetime or overlap", (d) => removeLimit(d, scope, "Generic proton/neutron existence")],
    ["crystal and nucleon source parents do not become universal operational prerequisites", (d) => removeLimit(d, scope, "Original necessary parents 2.9")],
    ["parent weights are not measured causal fractions", (d) => removeLimit(d, scope, "Original parent weights 0.6/0.4")],
    ["one or two carrier minima do not follow from nuclear or spectral counts", (d) => removeLimit(d, scope, "N_min=N_crit values 2 and 1")],
    ["the SOMA effect label is not an extra measured carrier", (d) => removeLimit(d, scope, "SOMA effect-level/crystal-constraint label")],
    ["the contents-only anthology does not admit the original experiment paper", (d) => removeLimit(d, context, "seven-page anthology contents PDF")]
  ]);
});
