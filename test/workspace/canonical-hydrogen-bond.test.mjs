import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const definition = "D-phys-hydrogen-bond-evidence-definition";
const boundary = "D-phys-hydrogen-bond-state-energy-boundary";
const experiment = "rocher2011-water-dimer";
const model = "altun2018-water-dimer";
const expContext = "M-phys-rocher2011-water-dimer-context";
const modelContext = "M-phys-altun2018-water-dimer-context";
const measured = "C-phys-water-dimer-dissociation";
const calculated = "C-phys-water-dimer-model";
const synthesis = "C-phys-hydrogen-bond-source-scope";
const synthesisMethod = "M-phys-hydrogen-bond-source-scope";
const contexts = [experiment, model];
const nodeNames = ["hydrogen-bond-evidence-definition", "hydrogen-bond-state-energy-boundary",
  "rocher2011-water-dimer-context", "water-dimer-dissociation", "altun2018-water-dimer-context",
  "water-dimer-model", "hydrogen-bond-source-scope"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Keep duplicate study/presentation text consistent so mutations challenge the
// scientific contract instead of merely causing a stale-copy mismatch.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
  for (const item of data.physics.studies) {
    for (const field of ["preparation", "finding"]) {
      if (item[field] === original) item[field] = record.statement;
    }
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one actual boundary must match: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  // A single-boundary method remains schema-valid when that boundary is removed.
  if (record.limitations.length === 0) record.limitations = ["The selected molecular system is supplied."];
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) {
    item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /Hydrogen|hydrogen|Physical|physics|changed|Expected values/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("hydrogen-bond terminology, one cold experiment and one isolated model retain distinct evidence roles", async () => {
  const data = await source();
  for (const id of [definition, boundary]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  assert.equal(study(data, experiment).studyType, "primary-experiment");
  assert.equal(study(data, model).studyType, "computational-analysis");
  assert.equal(role(data, "rocher2011-water-dimer-context").role, "experimental-context");
  assert.equal(role(data, "altun2018-water-dimer-context").role, "model-context");
  assert.equal(claim(data, measured).status, "publication-supported");
  assert.equal(claim(data, calculated).status, "publication-supported");
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  for (const id of ["arunan2011-hbond-definition", "arunan2011-hbond-rationale"]) {
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 0,
      "IUPAC definition and rationale are not experimental acquisitions");
  }
  for (const name of nodeNames) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, [],
      "Published images and quantum chemistry have not been numerically replayed");
  }
  await rejects([
    ["a computational water dimer cannot gain an experimental study role", (changed) => {
      study(changed, model).studyType = "primary-experiment";
    }, /Hydrogen|hydrogen|study|Role contradicts source kind/],
    ["the IUPAC recommendation cannot become an observed cooperative network", (changed) => {
      claim(changed, definition).status = "publication-supported";
      claim(changed, definition).contextIds = [experiment];
    }],
    ["a geometry model context cannot become an acquisition context", (changed) => {
      role(changed, "altun2018-water-dimer-context").role = "experimental-context";
    }, /Hydrogen|hydrogen|context|Context|role|Role/]
  ]);
});

test("intra/intermolecular evidence criteria cannot become universal red-shift, radius, strength or network rules", async () => {
  const data = await source();
  assert.match(claim(data, definition).statement, /within one molecule or between molecules/);
  assert.match(claim(data, definition).statement, /electron-rich acceptor atom or group/);
  await rejects([
    ["intramolecular hydrogen bonds cannot be excluded by an intermolecular-only definition", (changed) =>
      replaceStatement(changed, definition, "within one molecule or between molecules", "only between separate molecules")],
    ["acceptors cannot be restricted to electronegative atoms while excluding electron-rich groups", (changed) =>
      replaceStatement(changed, definition, "electron-rich acceptor atom or group", "strictly F, O or N atomic acceptor")],
    ["blue/no shifts and borderline geometric evidence must remain possible", (changed) =>
      dropLimit(changed, definition, "blue shifts, no shift")],
    ["a dimer bond does not require a cooperative network", (changed) =>
      dropLimit(changed, definition, "Cooperative networks are possible")],
    ["a fixed strength ranking cannot be derived from the definition", (changed) =>
      dropLimit(changed, definition, "fixed intermediate-strength band")],
    ["an evidence classification cannot establish a carrier threshold or SOMA stage", (changed) =>
      dropLimit(changed, definition, "measured critical count")]
  ]);
});

test("water-dimer dissociation preserves fragment channels, energy signs and the fitted measurement chain", async () => {
  const data = await source();
  assert.match(claim(data, measured).statement, /D0=1105 \+\/- 10 cm\^-1/);
  assert.match(claim(data, measured).statement, /13\.2 \+\/- 0\.12 kJ\/mol/);
  assert.match(claim(data, expContext).statement, /10 \+\/- 5 K/);
  assert.match(claim(data, expContext).statement, /3602 cm\^-1/);
  assert.equal(edge(data, "rocher2011-water-dimer-context", "water-dimer-dissociation").role, "measurement-context");
  assert.deepEqual(claim(data, measured).contextIds, [experiment]);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === experiment).length, 1);
  await rejects([
    ["separated water monomers cannot become covalently cleaved O-H fragments", (changed) =>
      replaceStatement(changed, measured, "dissociation to water monomers", "dissociation to H and OH covalent fragments")],
    ["positive D0 cannot become a negative dimerization energy", (changed) =>
      replaceStatement(changed, measured, "D0=1105 +/- 10 cm^-1", "D0=-1105 +/- 10 cm^-1")],
    ["kJ/mol uncertainty cannot be replaced with the conflicting isolated printed value", (changed) =>
      replaceStatement(changed, measured, "13.2 +/- 0.12 kJ/mol", "13.2 +/- 0.05 kJ/mol")],
    ["the supplied cold dimer does not measure a formation pathway or bulk network", (changed) =>
      dropLimit(changed, expContext, "supplied cold dimer")],
    ["REMPI readout, spectra and eight fitted images are one dependent measurement chain", (changed) =>
      dropLimit(changed, expContext, "Eight images are not eight independent")],
    ["energy fitting cannot become a claimed new raw-image numerical witness", (changed) =>
      dropLimit(changed, "M-phys-water-dimer-dissociation", "No new fitted spectrum")],
    ["D0 and De cannot lose opposite-sign model dimerization conventions", (changed) =>
      dropLimit(changed, boundary, "negative dimerization")]
  ]);
});

test("the fit, adopted experimental value and printed uncertainty conflict remain distinguishable", async () => {
  await rejects([
    ["1100 fit and 1105 adopted values retain the qualified initial-energy connection", (changed) =>
      dropLimit(changed, measured, "1100 +/- 3 cm^-1")],
    ["the two printed kJ/mol uncertainties must remain visible", (changed) =>
      dropLimit(changed, measured, "0.05 kJ/mol")],
    ["a prior geometry or theory citation is not a new measurement made by this experiment", (changed) =>
      dropLimit(changed, measured, "geometry and theoretical comparison")],
    ["the source reading extent cannot claim a raw-image recalibration", (changed) => {
      study(changed, experiment).readExtent = "complete-raw-image-independent-calibration-reproduction";
    }, /Hydrogen|hydrogen|reading|extent/]
  ]);
});

test("model geometry, zero-point corrections and frozen-fragment energy retain their calculation boundaries", async () => {
  const data = await source();
  assert.match(claim(data, calculated).statement, /O\.\.\.O=2\.908 Angstrom.*H\.\.\.O=1\.943 Angstrom.*173\.6 degrees/);
  assert.match(claim(data, calculated).statement, /DeltaEe=-4\.95 kcal\/mol.*DeltaE0=-2\.82 kcal\/mol.*DeltaEint=-5\.01 kcal\/mol/);
  assert.match(claim(data, modelContext).statement, /RI-MP2\/aug-cc-pVTZ/);
  assert.match(claim(data, modelContext).statement, /TightPNO.*frozen O1s/);
  assert.deepEqual(claim(data, calculated).contextIds, [model]);
  await rejects([
    ["an optimized O-O separation cannot be relabelled as measured geometry", (changed) =>
      dropLimit(changed, calculated, "optimized model distances/angle")],
    ["computed geometry cannot silently change the named system's energy/geometry convention", (changed) =>
      replaceStatement(changed, calculated, "O...O=2.908 Angstrom", "O...O=2.976 Angstrom directly measured")],
    ["frozen-fragment interaction energy is not the electronic dimerization energy", (changed) =>
      replaceStatement(changed, calculated, "DeltaEe=-4.95 kcal/mol", "DeltaEe=-5.01 kcal/mol")],
    ["kcal/mol cannot silently become kJ/mol without conversion", (changed) =>
      replaceStatement(changed, calculated, "DeltaE0=-2.82 kcal/mol", "DeltaE0=-2.82 kJ/mol")],
    ["a model starts with its basis, localization and core assumptions", (changed) =>
      replaceStatement(changed, modelContext, "with frozen O1s cores", "including exact all-electron relativistic correlation")],
    ["a model cannot gain stable populations of imaginary-frequency conformers", (changed) =>
      dropLimit(changed, modelContext, "imaginary frequencies")]
  ]);
});

test("hybrid ZPE agreement and LED/SAPT partitions do not become independent pure-theory observations", async () => {
  await rejects([
    ["the harmonic prediction cannot hide substitution of an inherited ZPE", (changed) =>
      dropLimit(changed, calculated, "harmonic ZPE correction 2.13")],
    ["the interpretation method must retain the inherited comparison boundary", (changed) =>
      dropLimit(changed, "M-phys-water-dimer-model", "2011 D0 comparison")],
    ["the underlying gas-phase input cannot become a newly read primary study", (changed) =>
      dropLimit(changed, modelContext, "inherited gas-phase water ionization input")],
    ["different partition schemes cannot become interchangeable measured components", (changed) =>
      dropLimit(changed, modelContext, "LED and DFT-SAPT organize")],
    ["an asymptotic dispersion component cannot define a universal whole H-bond potential", (changed) =>
      dropLimit(changed, calculated, "universal r^-6 potential")],
    ["one selected model cannot establish bulk structure or recognition performance", (changed) =>
      dropLimit(changed, calculated, "Only Conf1 water-dimer quantities")],
    ["an intramolecular H-bond energy cannot assume freely separable partners", (changed) =>
      replaceStatement(changed, boundary, "cannot generally be separated without changing the rest of the molecule",
        "can always be separated without changing the rest of the molecule")]
  ]);
});

test("the synthesis retains both preparations and excludes universal ancestry, minima and catalogue ontology", async () => {
  const data = await source();
  for (const id of [synthesis, synthesisMethod]) assert.deepEqual(claim(data, id).contextIds, contexts);
  const incoming = data.graph.relations.filter((record) => record.target === "phys:hydrogen-bond-source-scope");
  assert.equal(incoming.length, 6);
  for (const item of incoming) {
    assert.equal(item.kind, "descriptive");
    assert.equal(item.role, "interpretation-dependency");
    assert.deepEqual(item.claimIds, [synthesisMethod]);
    assert.deepEqual(item.contextIds, contexts);
  }
  await rejects([
    ["the combined scope cannot drop its experimental preparation", (changed) => {
      claim(changed, synthesis).contextIds = [model];
    }],
    ["a dependency into the synthesis must preserve the full output context", (changed) => {
      edge(changed, "water-dimer-model", "hydrogen-bond-source-scope").contextIds = [model];
    }],
    ["the covalent donor does not validate the original 0.4 molecular ancestry or Ncrit2", (changed) =>
      dropLimit(changed, synthesis, "Original parent2.3")],
    ["neutral water does not require free-ion formation, weight0.3 or Ncrit1", (changed) =>
      dropLimit(changed, synthesis, "Original parent2.4")],
    ["dispersion as a component is not an earlier physical stage with weight0.3 or Ncrit2", (changed) =>
      dropLimit(changed, synthesis, "Original parent2.6")],
    ["dimer composition is not a universal minimum for intramolecular cases", (changed) =>
      dropLimit(changed, synthesis, "Two monomers in the selected dimer")],
    ["SOMA pattern and display codes do not establish a new autonomous physical stage", (changed) =>
      dropLimit(changed, synthesis, "SOMA pattern labels")],
    ["qualifying unreviewed applications cannot become denying their existence", (changed) =>
      dropLimit(changed, synthesis, "real application domains")],
    ["null-DOI evidence prose cannot acquire experimental publication authority", (changed) =>
      dropLimit(changed, synthesis, "null DOI/URL")]
  ]);
});

test("source reviews preserve actual passages and cannot turn catalogue provenance into scientific support", async () => {
  const data = await source();
  const iupac = publication(data, "arunan2011-hbond-definition");
  assert.equal(iupac.review.extent, "selected-published-definition-passages");
  assert.match(iupac.review.limit, /HTTP403/);
  for (const id of [experiment, model]) {
    assert.equal(data.graph.sources.filter((item) => item.id === id).length, 1);
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 1);
  }
  for (const id of [measured, calculated, synthesis]) {
    for (const citation of claim(data, id).citations.filter((item) => item.sourceId !== "legacy-2")) {
      assert.ok(publication(data, citation.sourceId).review.locators.includes(citation.locator));
    }
  }
  await rejects([
    ["an indexed selected IUPAC passage cannot become a visually read complete PDF", (changed) => {
      publication(changed, "arunan2011-hbond-definition").review.extent = "full-primary-PDF-visually-read-and-all-experiments-reproduced";
    }],
    ["a source citation cannot silently gain unread bulk-network support", (changed) => {
      claim(changed, calculated).citations[0].locator = "Complete bulk liquid cooperative-network formation and exact many-body proof";
    }, /Unreviewed physics passage|Hydrogen|hydrogen/],
    ["an experimental study cannot borrow the model publication as its acquisition", (changed) => {
      study(changed, experiment).sourceId = model;
    }, /Hydrogen|hydrogen|publication|source/],
    ["source-card provenance cannot become primary hydrogen-bond evidence", (changed) => {
      claim(changed, synthesis).citations.push({ sourceId: "legacy-2", locator: "/7",
        role: "supports", note: "The original catalogue is primary experimental authority for hydrogen bonds." });
    }, /Hydrogen|hydrogen|Unreviewed physics passage|primary particle evidence/]
  ]);
});
