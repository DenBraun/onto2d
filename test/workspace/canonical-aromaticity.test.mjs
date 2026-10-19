import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const distinction = "D-phys-conjugation-aromaticity-boundary";
const criterion = "D-phys-ring-center-nics-criterion";
const preparation = "M-phys-schleyer1996-nics-context";
const result = "C-phys-benzene-ring-center-nics";
const synthesis = "C-phys-aromatic-conjugation-source-scope";
const method = "M-phys-aromatic-conjugation-source-scope";
const magneticStudy = "schleyer1996-nics";
const energeticStudy = "pauling1933-benzene";
const contexts = [energeticStudy, magneticStudy];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Synchronize presentation/study duplicates so mutations remove or contradict a
// scientific boundary consistently, rather than only leaving a stale copy.
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
  for (const [name, mutate, expected = /Aromatic|aromatic|Physical|physics|changed|Expected values/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("aromaticity definitions and two different computational criteria do not become empirical acquisitions", async () => {
  const data = await source();
  for (const id of [distinction, criterion]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  assert.equal(study(data, magneticStudy).studyType, "computational-analysis");
  assert.equal(study(data, energeticStudy).studyType, "computational-analysis");
  assert.equal(role(data, "schleyer1996-nics-context").role, "model-context");
  assert.equal(claim(data, result).status, "publication-supported");
  assert.deepEqual(claim(data, result).contextIds, [magneticStudy]);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.equal(data.physics.studies.filter((item) => item.sourceId === "iupac2022-pi-conjugation-aromaticity").length, 0);
  for (const name of ["conjugation-aromaticity-boundary", "ring-center-nics-criterion",
    "schleyer1996-nics-context", "benzene-ring-center-nics", "aromatic-conjugation-source-scope"]) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, [],
      "The source calculations are not newly executed numerical witnesses");
  }
  await rejects([
    ["a shielding calculation cannot become an observed proton resonance study", (changed) => {
      study(changed, magneticStudy).studyType = "primary-experiment";
    }, /Aromatic|aromatic|study|Role contradicts source kind/],
    ["a magnetic preparation cannot become an experimental-context", (changed) => {
      role(changed, "schleyer1996-nics-context").role = "experimental-context";
    }, /Aromatic|aromatic|[Cc]ontext|[Rr]ole/],
    ["a terminology recommendation cannot acquire an experimental finding role", (changed) => {
      claim(changed, distinction).status = "publication-supported";
      claim(changed, distinction).contextIds = [magneticStudy];
    }]
  ]);
});

test("the NICS criterion fixes shielding sign, point, units and the absence of an observed nucleus", async () => {
  const data = await source();
  assert.match(claim(data, criterion).statement, /sign-reversed computed absolute magnetic shielding, in ppm/);
  assert.match(claim(data, criterion).statement, /unweighted mean of the ring heavy-atom coordinates/);
  assert.match(claim(data, criterion).statement, /point has no observed nucleus/);
  await rejects([
    ["the NICS sign is opposite to absolute shielding", (changed) =>
      replaceStatement(changed, criterion, "sign-reversed computed absolute magnetic shielding", "same-sign computed absolute magnetic shielding")],
    ["a ring-center geometric probe cannot silently move to a proton coordinate", (changed) =>
      replaceStatement(changed, criterion, "unweighted mean of the ring heavy-atom coordinates", "coordinate of one bonded hydrogen nucleus")],
    ["a shielding descriptor cannot gain energy units", (changed) =>
      replaceStatement(changed, criterion, "in ppm", "in kcal/mol")],
    ["a point without a nucleus cannot become directly observed proton NMR", (changed) =>
      replaceStatement(changed, criterion, "point has no observed nucleus", "point contains a directly observed proton")],
    ["one local shielding cannot become a full magnetic current map", (changed) =>
      dropLimit(changed, criterion, "One point is not a full current-density map")],
    ["different magnetic, energetic and structural criteria cannot become identical observables", (changed) =>
      dropLimit(changed, criterion, "different observables")]
  ]);
});

test("benzene shielding preserves property basis, geometry method and the saturated negative control", async () => {
  const data = await source();
  assert.match(claim(data, preparation).statement, /Becke3LYP\/6-31G\*/);
  assert.match(claim(data, preparation).statement, /GIAO-SCF.*6-31\+G\*/);
  assert.match(claim(data, result).statement, /NICS=-9\.7 ppm.*D6h benzene.*-2\.2 ppm.*D3d cyclohexane/);
  assert.match(claim(data, result).statement, /6-31G\* column gives -11\.5 and -2\.1 ppm/);
  assert.equal(edge(data, "schleyer1996-nics-context", "benzene-ring-center-nics").role, "computation-context");
  await rejects([
    ["the selected -9.7 value cannot be silently replaced with -11.5 from another basis column", (changed) =>
      replaceStatement(changed, result, "NICS=-9.7 ppm", "NICS=-11.5 ppm")],
    ["the response calculation cannot borrow the geometry functional as its shielding method", (changed) =>
      replaceStatement(changed, preparation, "with GIAO-SCF", "with Becke3LYP exact response")],
    ["geometry and shielding basis choices cannot be conflated", (changed) =>
      replaceStatement(changed, preparation, "geometries from Becke3LYP/6-31G*", "geometries from GIAO-SCF/6-31+G*")],
    ["the negative saturated control cannot become aromatic solely from its sign", (changed) =>
      replaceStatement(changed, result, "saturated nonaromatic D3d cyclohexane", "aromatic D3d cyclohexane proved by its negative NICS")],
    ["the two basis columns are not independent experiments or a statistical error estimate", (changed) =>
      dropLimit(changed, preparation, "not repeat acquisitions or a statistical uncertainty")],
    ["the source's negative-sign caveat cannot be removed", (changed) =>
      dropLimit(changed, criterion, "negative sign alone")],
    ["a point descriptor cannot lose its local-shielding and probe-position boundary", (changed) =>
      dropLimit(changed, result, "Local shielding, geometry and probe location")]
  ]);
});

test("linear conjugation and stationary orbital phases cannot become universal aromatic or transport laws", async () => {
  const data = await source();
  assert.match(claim(data, distinction).statement, /linear systems such as butadiene/);
  assert.match(claim(data, distinction).statement, /six active electrons.*not a universal aromaticity classification/);
  await rejects([
    ["linear conjugation alone does not establish cyclic aromaticity", (changed) =>
      replaceStatement(changed, distinction, "It can occur in linear systems such as butadiene",
        "Every linear system such as butadiene is necessarily aromatic")],
    ["six supplied active electrons are not an all-system aromaticity theorem", (changed) =>
      replaceStatement(changed, distinction, "six active electrons or a delocalized representation alone are not a universal aromaticity classification",
        "six active electrons or a delocalized representation alone establish universal aromaticity")],
    ["stationary orbital phase consistency is not a measured coherence lifetime", (changed) =>
      dropLimit(changed, distinction, "measured coherence time")],
    ["a restricted HMO rule cannot become a theorem for every topology and electronic state", (changed) =>
      dropLimit(changed, distinction, "restricted monocyclic")],
    ["a static shielding value cannot prove infinite conductivity or optical spectra", (changed) =>
      dropLimit(changed, result, "does not derive an absorption spectrum")],
    ["terminology does not provide measurements of all conjugated materials", (changed) =>
      dropLimit(changed, distinction, "Real conjugated materials")],
    ["the table result cannot gain a locally reproduced response calculation", (changed) =>
      dropLimit(changed, preparation, "No raw input deck")]
  ]);
});

test("the aromaticity synthesis reuses Pauling once with its correction and retains both complete contexts", async () => {
  const data = await source();
  for (const id of [synthesis, method]) assert.deepEqual(claim(data, id).contextIds, contexts);
  for (const sourceId of ["pauling1933-resonance", "pauling1934-resonance-erratum"]) {
    assert.equal(data.graph.sources.filter((item) => item.id === sourceId).length, 1);
  }
  assert.equal(data.physics.studies.filter((item) => item.sourceId === "pauling1933-resonance").length, 1);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === "pauling1934-resonance-erratum").length, 0,
    "The attached correction does not become a separate independent computation");
  assert.ok(claim(data, synthesis).citations.some((item) => item.sourceId === "pauling1934-resonance-erratum"));
  const incoming = data.graph.relations.filter((item) => item.target === "phys:aromatic-conjugation-source-scope");
  assert.equal(incoming.length, 7);
  for (const item of incoming) {
    assert.equal(item.kind, "descriptive");
    assert.equal(item.role, "interpretation-dependency");
    assert.deepEqual(item.claimIds, [method]);
    assert.deepEqual(item.contextIds, contexts);
  }
  await rejects([
    ["the same benzene VB model cannot become an independent second calculation", (changed) =>
      dropLimit(changed, synthesis, "without cloning a new independent")],
    ["the linked erratum cannot disappear or become a second replication", (changed) =>
      dropLimit(changed, synthesis, "linked1934 erratum")],
    ["the VB context cannot be discarded because the new descriptor is magnetic", (changed) => {
      claim(changed, synthesis).contextIds = [magneticStudy];
    }],
    ["an incoming VB result must retain the full synthesis context", (changed) => {
      edge(changed, "pauling-benzene-vb-lowering", "aromatic-conjugation-source-scope").contextIds = [energeticStudy];
    }],
    ["different response questions cannot become a shared fitted likelihood or empirical agreement", (changed) =>
      dropLimit(changed, synthesis, "different methods and response questions")]
  ]);
});

test("original 0.45/0.55 weights, three-carrier minima and Phase2 ontology remain excluded", async () => {
  await rejects([
    ["the original necessary parents and carrier minima are not measured causal fractions", (changed) =>
      dropLimit(changed, synthesis, "Original parent2.3 weight0.45")],
    ["a supplied benzene framework does not require the earlier H2 acquisition as its history", (changed) =>
      dropLimit(changed, synthesis, "earlier H2 formation/spectroscopy")],
    ["electrons, carbon centers, basis functions and one probe are distinct counting domains", (changed) =>
      dropLimit(changed, synthesis, "different supplied counting domains")],
    ["Phase2 and SOMA classification do not measure a new stage beyond resonance", (changed) =>
      dropLimit(changed, synthesis, "Phase2")],
    ["unreviewed optical and transport applications remain qualified real domains", (changed) =>
      dropLimit(changed, synthesis, "their existence is not blanket-excluded")],
    ["generic null-DOI evidence prose cannot become a measured ring-current or transport study", (changed) =>
      dropLimit(changed, synthesis, "null DOI/URL")]
  ]);
});

test("the selected glossary and historical model reviews do not acquire unread proofs or empirical authority", async () => {
  const data = await source();
  assert.equal(publication(data, "iupac2022-pi-conjugation-aromaticity").year, 2022,
    "Recommendations2021 is the title; publication year is2022");
  assert.equal(publication(data, "iupac2022-pi-conjugation-aromaticity").review.extent,
    "selected-published-terminology-entries");
  for (const id of [criterion, result, synthesis]) {
    for (const citation of claim(data, id).citations.filter((item) => item.sourceId !== "legacy-2")) {
      assert.ok(publication(data, citation.sourceId).review.locators.includes(citation.locator));
    }
  }
  await rejects([
    ["selected terminology entries cannot become a full182-page primary model proof", (changed) => {
      publication(changed, "iupac2022-pi-conjugation-aromaticity").review.extent =
        "complete182-page-review-and-primary-Huckel-proof-reproduced";
    }],
    ["a center-value citation cannot silently gain unread tensor scans", (changed) => {
      claim(changed, result).citations[0].locator = "Complete modern tensor scan and exact induced current-density proof";
    }, /Unreviewed physics passage|Aromatic|aromatic/],
    ["the new magnetic study cannot borrow ownership from the old VB source", (changed) => {
      study(changed, magneticStudy).sourceId = "pauling1933-resonance";
    }, /Aromatic|aromatic|publication|source/],
    ["a source-reported model cannot acquire an independent raw-output reproduction extent", (changed) => {
      study(changed, magneticStudy).readExtent = "independent-full-Gaussian-output-reproduction";
    }, /Aromatic|aromatic|reading|extent/],
    ["original catalogue provenance cannot become primary magnetic evidence", (changed) => {
      claim(changed, synthesis).citations.push({ sourceId: "legacy-2", locator: "/10", role: "supports",
        note: "The original catalogue independently measures benzene magnetic response." });
    }, /Aromatic|aromatic|Unreviewed physics passage|primary particle evidence/]
  ]);
});
