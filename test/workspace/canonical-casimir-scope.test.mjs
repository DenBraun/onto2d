import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const boundary = "D-phys-casimir-observable-boundary";
const synthesis = "C-phys-casimir-source-scope";
const method = "M-phys-casimir-source-scope";
const contexts = ["lamoreaux1997", "bressi2002"];
const corrections = ["lamoreaux1998-note", "lambrecht2000", "lamoreaux2000-reply"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const study = (data, id) => data.physics.studies.find((item) => item.id === id);
const publication = (data, id) => data.graph.sources.find((item) => item.id === id);

function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), matches = record.limitations.filter((item) => item.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((item) => item !== matches[0]);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((item) => item !== matches[0]);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /Casimir|casimir|Physical|physical|physics|changed|Expected values|context|Context|claim|Claim|source|Source/, name);
  }
}

test("Casimir scope reuses the two original experiments and their full, distinct preparation contexts", async () => {
  const data = await source();
  assert.equal(claim(data, boundary).status, "definition");
  assert.equal(claim(data, boundary).contextIds, undefined);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  for (const id of [synthesis, method]) assert.deepEqual(claim(data, id).contextIds, contexts);
  for (const id of contexts) {
    assert.equal(study(data, id).studyType, "primary-experiment");
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 1);
  }
  assert.match(study(data, contexts[0]).preparation, /torsion balance.*216 retained sweeps/);
  assert.match(study(data, contexts[1]).preparation, /chromium-coated silicon cantilever.*1\.2 by 1\.2 mm/);
  await rejects([
    ["the two instruments cannot become one pooled preparation", (changed) => {
      claim(changed, synthesis).contextIds = ["lamoreaux1997"];
    }],
    ["an ideal definition cannot become a primary force measurement", (changed) => {
      claim(changed, boundary).status = "publication-supported";
      claim(changed, boundary).contextIds = contexts;
    }],
    ["the new synthesis cannot imply another acquired dataset", (changed) =>
      dropLimit(changed, synthesis, "not one pooled acquisition")]
  ]);
});

test("Casimir energy density, pressure, curved force and frequency-gradient inference keep separate units and powers", async () => {
  const data = await source();
  assert.match(claim(data, "D-phys-ideal-plate-casimir").statement, /energy per area.*720 a\^3.*force per area.*240 a\^4/);
  assert.match(claim(data, "C-phys-bressi-coefficient").statement, /Hz\^2 m\^5.*N m\^2/);
  assert.match(claim(data, boundary).statement, /energy per area.*pressure.*curved-body force.*force gradient.*different quantities/);
  assert.match(claim(data, synthesis).statement, /coefficient inferred from a calibrated residual resonance-frequency shift/);
  await rejects([
    ["an interaction energy cannot lose its per-area normalization", (changed) =>
      replaceStatement(changed, boundary, "Ideal interaction energy per area", "Ideal interaction energy")],
    ["force-gradient frequency readout cannot become direct pressure sensing", (changed) =>
      replaceStatement(changed, synthesis, "coefficient inferred from a calibrated residual resonance-frequency shift", "measured directly by a pressure sensor")],
    ["the frequency exponent cannot replace the ideal pressure exponent", (changed) =>
      dropLimit(changed, boundary, "squared-frequency exponent")],
    ["one ideal field model cannot establish a real-material force without geometry", (changed) =>
      dropLimit(changed, boundary, "different separation powers")]
  ]);
});

test("every new Casimir claim retains claim-local radius/optical correction links and vacuum-inference limits", async () => {
  const data = await source();
  for (const id of [boundary, synthesis, method]) {
    const record = claim(data, id);
    for (const sourceId of corrections) assert.ok(record.citations.some((ref) => ref.sourceId === sourceId));
    assert.ok(record.citations.some((ref) => ref.sourceId === "jaffe2005" && ref.locator.startsWith("Section IV:")));
    for (const ref of record.citations) assert.ok(publication(data, ref.sourceId).review.locators.includes(ref.locator));
  }
  for (const id of corrections) assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 0);
  assert.match(study(data, "lamoreaux1997").limitations.join(" "), /12\.5.*0\.3 cm.*minimal testing.*not a comprehensive 5%/);
  await rejects([
    ...corrections.map((sourceId) => [`the definition cannot lose correction ${sourceId}`, (changed) => {
      claim(changed, boundary).citations = claim(changed, boundary).citations.filter((ref) => ref.sourceId !== sourceId);
    }]),
    ["the material-response formulation cannot lose its explicit ontology-limit passage", (changed) => {
      claim(changed, synthesis).citations = claim(changed, synthesis).citations.filter((ref) =>
        !(ref.sourceId === "jaffe2005" && ref.locator.startsWith("Section IV:")));
    }],
    ["accepted corrections cannot become a comprehensive 5% precision certification", (changed) =>
      dropLimit(changed, synthesis, "not a comprehensive 5% uncertainty certification")]
  ]);
});

test("the parallel-surface result retains the selected estimator, voltage-sign conflict and alternative drift fit", async () => {
  const data = await source();
  const limits = study(data, "bressi2002").limitations.join(" ");
  assert.match(limits, /nine closest points, 0\.5-1\.1 micrometers/);
  assert.match(limits, /V0=\+\(60\.2.*-\(68\.6.*sign remains unresolved/);
  assert.match(limits, /linear time drift.*not the same estimator/);
  await rejects([
    ["nine selected points cannot establish the complete measured range", (changed) =>
      dropLimit(changed, synthesis, "Bressi nine-point selected fit")],
    ["nominal neutrality cannot prove the absence of fitted electrostatic backgrounds", (changed) =>
      dropLimit(changed, synthesis, "Nominally neutral surfaces")],
    ["the two experimental estimators cannot become one universal curve", (changed) =>
      replaceStatement(changed, method, "Reuse each study once", "Pool every estimator as an independent force replication")]
  ]);
});

test("finite attractive results cannot supply repulsion, absolute vacuum ontology, original minima or cross-level causation", async () => {
  const data = await source();
  for (const id of [boundary, synthesis, method]) assert.deepEqual(claim(data, id).checkIds, []);
  assert.equal(publication(data, "casimir1948").doi, null, "The original paper does not inherit a later reprint DOI");
  const nodes = new Set(["phys:casimir-observable-boundary", "phys:casimir-source-scope"]);
  assert.ok(data.graph.relations.filter((item) => nodes.has(item.source) || nodes.has(item.target))
    .every((item) => item.kind === "descriptive"));
  await rejects([
    ["attractive preparations cannot prove all force signs or every material geometry", (changed) =>
      dropLimit(changed, synthesis, "do not measure repulsion")],
    ["force measurements cannot uniquely establish absolute or cosmological vacuum energy", (changed) =>
      dropLimit(changed, synthesis, "No unique measurement of absolute vacuum energy")],
    ["the original parent fractions cannot become measured causal weights", (changed) =>
      dropLimit(changed, synthesis, "weights 0.55/0.45")],
    ["two boundaries cannot become a universal emergence carrier minimum", (changed) =>
      dropLimit(changed, synthesis, "group0/type2 resonant-mode count1")],
    ["a display group cannot verify SOMA downward causation", (changed) =>
      dropLimit(changed, synthesis, "SOMA downward causation")]
  ]);
});
