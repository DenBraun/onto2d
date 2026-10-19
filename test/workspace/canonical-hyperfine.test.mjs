import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const parameters = "D-phys-hyperfine-state-parameters";
const siDefinition = "D-phys-hyperfine-clock-definition";
const csContext = "M-phys-rahaman2024-cs-hyperfine-context";
const intervals = "C-phys-cs133-hyperfine-intervals";
const couplings = "C-phys-cs133-hyperfine-couplings";
const clockContext = "M-phys-marion2003-rb-cs-context";
const clock = "C-phys-rb87-hyperfine-clock-frequency";
const synthesis = "C-phys-hyperfine-source-scope";
const synthesisMethod = "M-phys-hyperfine-source-scope";
const csStudy = "rahaman2024-cs-hyperfine";
const clockStudy = "marion2003-rb-cs-fountains";
const original = "rahaman2022-cs-hyperfine";
const correction = "rahaman2024-hyperfine-erratum";
const formal = "herd2021-hyperfine-formalism";
const siSource = "bipm2026-si-hyperfine-second";
const contexts = [csStudy, clockStudy];
const nodeNames = ["hyperfine-state-parameters", "hyperfine-clock-definition", "rahaman2024-cs-hyperfine-context",
  "cs133-hyperfine-intervals", "cs133-hyperfine-couplings", "marion2003-rb-cs-context",
  "rb87-hyperfine-clock-frequency", "hyperfine-source-scope"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Keep display/study copies synchronized so each mutation challenges the
// scientific admission boundary rather than merely duplicate text consistency.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), previous = record.statement;
  assert.ok(previous.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = previous.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === previous) item.description = record.statement;
  }
  for (const item of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (item[field]?.includes(previous)) item[field] = item[field].replace(previous, record.statement);
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one actual boundary must match: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  if (!record.limitations.length) record.limitations = ["The selected atomic state is supplied."];
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations =
    item.limitations.filter((limit) => limit !== matches[0]);
}

async function rejects(mutations) {
  const originalData = await source();
  for (const [name, mutate, expected = /Hyperfine|hyperfine|Physical|physics|changed|Expected values/] of mutations) {
    const changed = structuredClone(originalData);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

function cloneAsUnreviewedStudy(data, sourceId) {
  const paper = publication(data, sourceId);
  data.physics.studies.push({
    ...structuredClone(study(data, csStudy)),
    id: `${sourceId}-independent-experiment`, sourceId, doi: paper.doi,
    readExtent: paper.review.extent, reviewedLocators: [...paper.review.locators]
  });
}

test("hyperfine admission separates definitions, two experiments and source-reported findings", async () => {
  const data = await source();
  for (const id of [parameters, siDefinition]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  for (const id of contexts) assert.equal(study(data, id).studyType, "primary-experiment");
  for (const id of [formal, original, correction, siSource]) {
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 0,
      "A formal passage, superseded predecessor, correction or unit definition supplies no new experiment");
  }
  for (const [id, ctx] of [[intervals, csStudy], [couplings, csStudy], [clock, clockStudy]]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [ctx]);
  }
  for (const name of nodeNames) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, []);
  }
  await rejects([
    ["a formal multipole convention is not an observed spectral acquisition", (changed) => {
      claim(changed, parameters).status = "publication-supported";
      claim(changed, parameters).contextIds = [csStudy];
    }, /Formal theory became an experimental result/],
    ["reading corrected coupling values is not independently reproducing them", (changed) => {
      claim(changed, couplings).status = "analytically-checked";
    }, /Analytical claim lacks a witness/],
    ["the empirical Cs spectra cannot become an unperformed ab-initio calculation", (changed) => {
      study(changed, csStudy).studyType = "computational-analysis";
    }, /Hyperfine|hyperfine|study|Role contradicts source kind/]
  ]);
});

test("hyperfine state parameters retain angular momentum, frequency units and conditional multipoles", async () => {
  const data = await source();
  assert.match(claim(data, parameters).statement, /K=F\(F\+1\)-I\(I\+1\)-J\(J\+1\)/);
  assert.match(claim(data, parameters).statement, /A expressed in frequency units.*E_F\/h=A\*K\/2/);
  assert.match(claim(data, parameters).statement, /J=3\/2 and F=2,3,4,5.*supplied I=7\/2/);
  assert.match(claim(data, parameters).statement, /quadrupole term is absent within a J=1\/2/);
  await rejects([
    ["electronic and nuclear angular momenta cannot exchange signs in K", (changed) =>
      replaceStatement(changed, parameters, "-I(I+1)-J(J+1)", "+I(I+1)-J(J+1)")],
    ["frequency-valued A cannot become an energy without h conversion", (changed) =>
      replaceStatement(changed, parameters, "E_F/h=A*K/2", "E_F=A*K/2")],
    ["the ground-state clock cannot acquire a compulsory first-order quadrupole term", (changed) =>
      replaceStatement(changed, parameters, "term is absent within a J=1/2", "term is necessarily nonzero within a J=1/2")],
    ["nuclear moment and electronic matrix-element dependence cannot be removed", (changed) =>
      dropLimit(changed, parameters, "not direct independent measurements of bare nuclear")],
    ["Hz does not silently become rad/s or A equal every adjacent interval", (changed) =>
      dropLimit(changed, parameters, "not angular frequency in rad/s")],
    ["hyperfine coupling is not the Lamb shift or all radiative corrections", (changed) =>
      dropLimit(changed, parameters, "distinct from electronic fine structure")],
    ["free-nucleon moments and staticZ1 binding do not predict composite Cs constants", (changed) =>
      dropLimit(changed, parameters, "composite Cs133 nuclear moments")]
  ]);
});

test("the optical acquisition retains isotope, excited state, fluorescence and polarization geometry", async () => {
  const data = await source();
  assert.match(claim(data, csContext).statement, /Cs133.*6s1\/2 F=3 or F=4.*7d2D3\/2 Fprime=2,3,4,5/);
  assert.match(claim(data, csContext).statement, /767\.8 nm.*AOM2.*double-pass.*672\.5 nm.*10 nm bandpass/);
  assert.match(claim(data, csContext).statement, /135 C.*2 mG.*63\+\/-3 micrometres.*25 mm.*67 mm/);
  assert.match(claim(data, csContext).statement, /theta between incident linear polarization and detection direction/);
  await rejects([
    ["the detected fluorescence wavelength cannot be the excitation wavelength", (changed) =>
      replaceStatement(changed, csContext, "record672.5 nm", "record767.8 nm")],
    ["a ground-state microwave acquisition cannot replace the excited7d optical method", (changed) =>
      replaceStatement(changed, csContext, "Doppler-free two-photon excitation", "direct ground-state microwave Ramsey excitation")],
    ["theta is polarization-to-detection angle, not beam crossing angle", (changed) =>
      replaceStatement(changed, csContext, "between incident linear polarization and detection direction", "between the counterpropagating laser beams")],
    ["the preparation is near135C, not an unperformed zero-temperature experiment", (changed) =>
      replaceStatement(changed, csContext, "near135 C", "at exactly0 K")],
    ["the source frequency coordinate and inferred excited interval remain distinct", (changed) =>
      dropLimit(changed, csContext, "not directly driven microwave transitions")],
    ["measured near-magic53+/-2 degrees and finite aperture do not guarantee zero residual shifts", (changed) =>
      dropLimit(changed, csContext, "do not certify exact cancellation")]
  ]);
});

test("resolved lines retain interference bias and simulations retain their measured HFS inputs", async () => {
  const data = await source();
  const limits = claim(data, csContext).limitations.join(" ");
  assert.match(limits, /resolved peaks still show interference-sensitive asymmetric residuals/);
  assert.match(limits, /measured splittings are inputs.*not an independent ab-initio prediction/);
  assert.match(limits, /reduces but does not completely remove angular dependence/);
  await rejects([
    ["resolving peaks does not justify independent symmetric line profiles", (changed) =>
      dropLimit(changed, csContext, "isolated symmetric fits are not an automatically valid measurement model")],
    ["a simulation supplied measured near-magic HFS is not independent HFS confirmation", (changed) =>
      dropLimit(changed, csContext, "measured splittings are inputs to the source simulated spectra")],
    ["remaining angular dependence and proposed fluorescence-volume explanation cannot disappear", (changed) =>
      dropLimit(changed, csContext, "not a completely resolved geometry correction")],
    ["inherited second-order calculations and unread supplement are not a new replay", (changed) =>
      dropLimit(changed, csContext, "full published Supplemental Material were not independently read")],
    ["source simulations cannot acquire an independent model-context preparation", (changed) => {
      role(changed, "rahaman2024-cs-hyperfine-context").role = "model-context";
    }]
  ]);
});

test("the actual erratum replaces old intervals and retains shared-line control dependencies", async () => {
  const data = await source();
  assert.match(claim(data, intervals).statement, /36\.760\(9\) MHz.*29\.427\(5\) MHz.*22\.073\(5\) MHz/);
  assert.match(claim(data, intervals).statement, /ground-F=4 column gives36\.760\(10\),29\.427\(5\) and22\.071\(5\)/);
  assert.ok(claim(data, intervals).citations.some((item) => item.sourceId === correction && item.role === "supports"));
  await rejects([
    ["the corrected groundF3 interval cannot revert to an old Voigt result", (changed) =>
      replaceStatement(changed, intervals, "22.073(5) MHz", "22.139(8) MHz")],
    ["the other groundF selection keeps its reported22.071 control rather than being forced identical", (changed) =>
      replaceStatement(changed, intervals, "22.071(5) MHz", "22.073(5) MHz")],
    ["shared line-center intervals cannot become six independent observations", (changed) =>
      dropLimit(changed, intervals, "Pairwise intervals sharing fitted levels are correlated")],
    ["the corrected source resolves apparent groundF inconsistency, not two intrinsic Hamiltonians", (changed) =>
      dropLimit(changed, intervals, "which ground hyperfine level was excited")],
    ["the A/B/C reconstructed column is not an independent measured spectrum", (changed) =>
      dropLimit(changed, intervals, "third column using A,B,C reconstructs intervals")],
    ["the actual primary correction cannot be replaced by an unchanged abstract", (changed) => {
      claim(changed, intervals).citations = claim(changed, intervals).citations.filter((item) => item.sourceId !== correction);
    }]
  ]);
});

test("corrected coupling constants keep mixed units, weak octupole precision and inherited theory", async () => {
  const data = await source();
  assert.match(claim(data, couplings).statement, /A=7\.3547\(8\) MHz, B=-0\.017\(7\) MHz and C=-0\.3\(4\) kHz/);
  assert.match(claim(data, couplings).statement, /C is consistent with zero.*does not resolve a precise nuclear magnetic octupole/);
  const dependence = edge(data, "cs133-hyperfine-intervals", "cs133-hyperfine-couplings");
  assert.equal(dependence.kind, "descriptive");
  assert.equal(dependence.role, "interpretation-dependency");
  assert.deepEqual(dependence.contextIds, [csStudy]);
  await rejects([
    ["corrected A cannot revert to the superseded2022 abstract", (changed) =>
      replaceStatement(changed, couplings, "A=7.3547(8) MHz", "A=7.3509(9) MHz")],
    ["corrected B cannot revert to the superseded2022 abstract", (changed) =>
      replaceStatement(changed, couplings, "B=-0.017(7) MHz", "B=-0.041(8) MHz")],
    ["octupole C kHz cannot gain a thousandfold MHz scale", (changed) =>
      replaceStatement(changed, couplings, "C=-0.3(4) kHz", "C=-0.3(4) MHz")],
    ["an unresolved octupole is not a precise independent nuclear moment", (changed) =>
      replaceStatement(changed, couplings, "C is consistent with zero", "C precisely excludes zero")],
    ["bare nuclear moments cannot replace state-dependent coupling constants", (changed) =>
      dropLimit(changed, couplings, "not directly the nuclear mu,Q or octupole moment")],
    ["inherited second-order inputs and disagreement with theory remain explicit", (changed) =>
      dropLimit(changed, couplings, "does not report perfect agreement")],
    ["old values cannot be independently pooled with their replacement", (changed) =>
      dropLimit(changed, couplings, "must not be pooled as independent current measurements")],
    ["dependent interval-to-coupling inference cannot become physical construction", (changed) => {
      const relation = edge(changed, "cs133-hyperfine-intervals", "cs133-hyperfine-couplings");
      relation.kind = "functional-support";
      relation.claimIds.push(couplings);
    }, /Measurement\/inference dependency became physical causation/]
  ]);
});

test("the exact SI hyperfine assignment is normative and distinct from measured clock accuracy", async () => {
  const data = await source();
  assert.match(claim(data, siDefinition).statement, /exactly9,192,631,770 Hz.*Hz=s\^-1/);
  assert.match(claim(data, siDefinition).statement, /F=4,mF=0 and F=3,mF=0.*isolated atom.*blackbody/);
  assert.equal(publication(data, siSource).doi, "10.59161/AUEZ1291");
  assert.equal(publication(data, siSource).year, 2026);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === siSource).length, 0);
  assert.ok(data.graph.relations.filter((item) => item.target === "phys:hyperfine-clock-definition")
    .every((item) => item.role === "definition-dependency" && item.contextIds === undefined));
  await rejects([
    ["the unit-defining Cs frequency cannot become the measured Rb frequency", (changed) =>
      replaceStatement(changed, siDefinition, "exactly9,192,631,770 Hz", "exactly6,834,682,610.904324 Hz")],
    ["an assigned exact number cannot erase finite apparatus uncertainty", (changed) =>
      replaceStatement(changed, siDefinition, "nonzero uncertainty", "zero uncertainty")],
    ["unit definition cannot acquire an empirical context", (changed) => {
      claim(changed, siDefinition).contextIds = [clockStudy];
    }, /Definition acquired an experimental preparation/],
    ["the Cs ground-state reference is not proof of an operating7D optical clock", (changed) =>
      dropLimit(changed, siDefinition, "demonstrates an operating7D optical frequency standard")],
    ["current definition wording cannot recalibrate the2002 result or its1999 reference", (changed) =>
      dropLimit(changed, siDefinition, "automatically recalibrated to a new uncertainty")],
    ["mF0 selection does not remove all second-order and thermal shifts", (changed) =>
      dropLimit(changed, siDefinition, "leading linear Zeeman response")]
  ]);
});

test("fountain spectroscopy retains Ramsey populations, shared flywheel and alternating species", async () => {
  const data = await source();
  assert.match(claim(data, clockContext).statement, /electronic ground states.*alternately with Rb and Cs/);
  assert.match(claim(data, clockContext).statement, /mF=0.*two Ramsey microwave interactions.*fluorescence.*digital servo/);
  assert.match(claim(data, clockContext).statement, /share a100 MHz.*one hydrogen-maser.*few minutes/);
  await rejects([
    ["a shared flywheel is not an independent maser per fountain", (changed) =>
      replaceStatement(changed, clockContext, "one hydrogen-maser flywheel", "independent hydrogen-maser flywheels per species")],
    ["the dual fountain alternates rather than simultaneously measuring both species", (changed) =>
      replaceStatement(changed, clockContext, "operated alternately with Rb and Cs", "operated simultaneously with independent Rb and Cs")],
    ["population/servo readout is not direct nuclear-moment acquisition", (changed) =>
      dropLimit(changed, clockContext, "direct nuclear-moment acquisition")],
    ["shared-maser timing and sampling dependence cannot disappear", (changed) =>
      dropLimit(changed, clockContext, "fluctuations are common")],
    ["TableI10^-16 fractions are not shifts in Hz and mF0 does not remove quadratic Zeeman shifts", (changed) =>
      dropLimit(changed, clockContext, "fractional units of10^-16")],
    ["historical source calibrations cannot become a current performance record", (changed) =>
      dropLimit(changed, clockContext, "current clock-performance record")]
  ]);
});

test("the historical Rb frequency retains statistical/systematic errors and its distinct display reference", async () => {
  const data = await source();
  assert.match(claim(data, clock).statement, /2002.*6,834,682,610\.904324\(4\)\(7\) Hz/);
  assert.match(claim(data, clock).statement, /first parenthesis is1-sigma statistical.*separate systematic.*DF_Rb,DF_Cs and FOM/);
  assert.match(claim(data, clock).statement, /1999 frequency6,834,682,610\.904333 Hz.*not the new2002 result/);
  await rejects([
    ["the1999 conventional display reference cannot replace the2002 measurement", (changed) =>
      replaceStatement(changed, clock, "6,834,682,610.904324(4)(7) Hz", "6,834,682,610.904333(4)(7) Hz")],
    ["the statistical and systematic uncertainties cannot exchange roles", (changed) =>
      replaceStatement(changed, clock, "first parenthesis is1-sigma statistical uncertainty", "first parenthesis is systematic uncertainty")],
    ["source uncertainty cannot become an exact unit assignment", (changed) =>
      replaceStatement(changed, clock, "6,834,682,610.904324(4)(7) Hz", "exactly6,834,682,610.904324 Hz")],
    ["statistical plot bars do not replace the full historical shift budget", (changed) =>
      dropLimit(changed, clockContext, "Figure2 error bars are statistical comparison scatter")],
    ["a clock ratio does not independently measure nuclear moments or single-parameter drift", (changed) =>
      dropLimit(changed, clockContext, "oversimplified Schmidt model")],
    ["the out-of-scope drift-sign inconsistency is not silently adjudicated", (changed) =>
      dropLimit(changed, clock, "positive0.2 versus final-summary negative0.2")]
  ]);
});

test("corrections, definitions and conditional simulations cannot add independent experiments or reading", async () => {
  const data = await source();
  assert.equal(data.physics.studies.filter((item) => item.sourceId === csStudy).length, 1);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === clockStudy).length, 1);
  assert.match(publication(data, correction).review.limit, /same2024 experiment.*not a third empirical context/);
  assert.match(publication(data, csStudy).review.limit, /Supplemental Material were not fully read.*401/);
  await rejects([
    ...[correction, formal, original, siSource].map((id) => [
      `${id} cannot be cloned as an unreviewed independent experiment`,
      (changed) => cloneAsUnreviewedStudy(changed, id), /Expected values|physics|study|Study|Hyperfine|hyperfine/
    ]),
    ["selected formal passages cannot become a full experimental reading", (changed) => {
      publication(changed, formal).review.extent = "full-published-experiment-and-raw-spectrum-replay";
    }],
    ["the unread published supplement cannot silently become fully reviewed and reproduced", (changed) => {
      publication(changed, csStudy).review.limit = "Full published supplement and all original second-order calculations independently reproduced.";
    }],
    ["the actual erratum cannot lose its replacement relationship", (changed) => {
      publication(changed, correction).review.limit = "A new independent2024 experiment confirming the unchanged2022 abstract.";
    }]
  ]);
});

test("the complete synthesis retains both preparations and dispositions of the original parents and defaults", async () => {
  const data = await source();
  for (const id of [synthesis, synthesisMethod]) assert.deepEqual(claim(data, id).contextIds, contexts);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  const incoming = data.graph.relations.filter((item) => item.target === "phys:hyperfine-source-scope");
  assert.equal(incoming.length, 7);
  for (const item of incoming) {
    assert.equal(item.kind, "descriptive");
    assert.deepEqual(item.claimIds, [synthesisMethod]);
    assert.deepEqual(item.contextIds, contexts);
  }
  const legacy = claim(data, synthesis).citations.find((item) => item.sourceId === "legacy-2");
  assert.equal(legacy.role, "provenance");
  assert.match(legacy.note, /Original catalogue JSON pointer: \/20/);
  await rejects([
    ["the synthesis cannot drop the clock realization preparation", (changed) => {
      claim(changed, synthesis).contextIds = [csStudy];
    }],
    ["a synthesis dependency cannot drop the optical preparation", (changed) => {
      edge(changed, "rb87-hyperfine-clock-frequency", "hyperfine-source-scope").contextIds = [clockStudy];
    }],
    ["a literature aggregate cannot become a single-publication inference", (changed) => {
      claim(changed, synthesis).status = "publication-supported";
    }],
    ["parent2.2/.55 and actual nucleon parent1.11/.45 are not measured causal fractions", (changed) =>
      dropLimit(changed, synthesis, "Original parent2.2 weight0.55 and parent1.11 weight0.45")],
    ["one carrier is not a measured universal hyperfine onset population", (changed) =>
      dropLimit(changed, synthesis, "N_min=N_crit=1")],
    ["SOMA and Level2 labels cannot become measured physical stage boundaries", (changed) =>
      dropLimit(changed, synthesis, "provenance/display classification")],
    ["source simulations and inherited corrections do not create independent confirmations", (changed) =>
      dropLimit(changed, synthesis, "Source simulations consume measured HFS")],
    ["the prepared findings cannot authorize an unreviewed physical edge between the two experiments", (changed) => {
      changed.graph.relations.push({
        ...structuredClone(edge(changed, "cs133-hyperfine-intervals", "hyperfine-source-scope")),
        id: "physics:cs-hfs-universal-clock-precursor", target: "phys:rb87-hyperfine-clock-frequency"
      });
    }, /Unreviewed cross-domain physical construction/]
  ]);
});
