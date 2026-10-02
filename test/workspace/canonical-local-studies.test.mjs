import assert from "node:assert/strict";
import { before, test } from "node:test";
import { validateRetinalPilot } from "../../models/causal-emergence/canonical/retinal.mjs";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const localStudies = [
  ["nucleon-algebra", "C-phys-nucleon-algebra", "nucleon-charge-color-algebra", "nucleon-algebra-verifier"],
  ["neutron-form-factor-replay", "C-phys-neutron-form-factor-arithmetic", "neutron-form-factor-printed-arithmetic", "neutron-form-factor-verifier"],
  ["deuteron-beta-energetics", "C-phys-deuteron-beta-threshold", "deuteron-beta-threshold-arithmetic", "nuclear-energetics-verifier"],
  ["hadron-production-replay", "C-phys-hadron-production-arithmetic", "hadron-production-printed-arithmetic", "hadron-production-verifier"],
  ["pion-decay-replay", "C-phys-pion-decay-arithmetic", "pion-decay-printed-arithmetic", "pion-decay-verifier"],
  ["electron-moment-replay", "C-phys-electron-moment-arithmetic", "electron-moment-printed-algebra", "electron-moment-verifier"],
  ["vacuum-polarization-replay", "C-phys-vacuum-polarization-arithmetic", "vacuum-polarization-shape-algebra", "vacuum-polarization-verifier"]
];
let original;
before(async () => { original = await loadCanonicalSource(); });

const study = (data, id) => data.physics.studies.find((entry) => entry.id === id);
const claim = (data, id) => data.graph.claims.find((entry) => entry.id === id);
const source = (data, id) => data.graph.sources.find((entry) => entry.id === id);

// Exercise the shared study guard directly: per-block exact-record pins must
// not be the reason invalid provenance or missing metadata is rejected.
function validateStudyBoundary(data) {
  const indexes = Object.fromEntries(["sources", "claims", "entities", "relations"].map((key) =>
    [key, new Map(data.graph[key].map((entry) => [entry.id, entry]))]));
  validateRetinalPilot(data, indexes);
}

test("registered local calculations use code provenance without invented publications", () => {
  validateStudyBoundary(original);
  for (const [id, claimId, checkId, sourceId] of localStudies) {
    const record = study(original, id), result = claim(original, claimId);
    assert.equal(record.sourceId, sourceId);
    assert.equal(record.studyType, "computational-analysis");
    assert.equal(source(original, sourceId).kind, "executable-check");
    for (const key of ["journal", "volume", "pages", "doi", "metadataUrl"]) assert.equal(record[key], null);
    assert.equal(record.issue, "");
    assert.equal(result.status, "analytically-checked");
    assert.deepEqual(result.checkIds, [checkId]);
    assert.ok(result.citations.some((ref) => ref.sourceId === sourceId && ref.role === "supports"));
  }
});

test("published experiments and published computations still require publication metadata", () => {
  for (const id of ["breidenbach1969", "creutz1980"]) for (const key of ["journal", "volume", "pages"]) {
    const copy = structuredClone(original);
    assert.equal(source(copy, study(copy, id).sourceId).kind, "research-publication");
    study(copy, id)[key] = null;
    assert.throws(() => validateStudyBoundary(copy), /Published study lacks metadata/, `${id}.${key}`);
  }
});

test("executable study sources require exact admitted ownership rather than a computational label", () => {
  const mutations = [
    [(data) => { study(data, "breidenbach1969").sourceId = "nucleon-algebra-verifier"; }, /Missing study publication/],
    [(data) => { study(data, "nucleon-algebra").id = "unreviewed-local-calculation"; }, /Missing study publication/],
    [(data) => { study(data, "nucleon-algebra").sourceId = "nuclear-energetics-verifier"; }, /changed executable owner/],
    [(data) => { source(data, "nucleon-algebra-verifier").kind = "research-publication"; }, /lacks executable evidence/],
    [(data) => { study(data, "nucleon-algebra").studyType = "primary-experiment"; }, /became an experiment/]
  ];
  for (const [mutate, error] of mutations) {
    const copy = structuredClone(original);
    mutate(copy);
    assert.throws(() => validateStudyBoundary(copy), error);
  }
});

test("every admitted local study rejects fabricated publisher metadata", () => {
  const metadata = { journal: "Invented journal", volume: "1", pages: "1-2", doi: "10.1234/invented", metadataUrl: "https://example.org/invented" };
  for (const [id] of localStudies) for (const [key, value] of Object.entries(metadata)) {
    const copy = structuredClone(original);
    study(copy, id)[key] = value;
    assert.throws(() => validateStudyBoundary(copy), /acquired publication metadata/, `${id}.${key}`);
  }
  const copy = structuredClone(original);
  study(copy, "nucleon-algebra").issue = "1";
  assert.throws(() => validateStudyBoundary(copy), { code: "ERR_ASSERTION" });
});

test("local analytical checks cannot migrate to other claims or lose their executable evidence", () => {
  for (const [, claimId, checkId, sourceId] of localStudies) {
    const wrongOwner = structuredClone(original);
    claim(wrongOwner, "C-phys-rau-joint-adjustment").checkIds = [checkId];
    assert.throws(() => validateCanonicalSource(wrongOwner), /Local arithmetic attached to an unreproduced or unrelated claim/);

    const missingWitness = structuredClone(original);
    claim(missingWitness, claimId).checkIds = [];
    assert.throws(() => validateCanonicalSource(missingWitness), /Analytical claim lacks a witness/);

    const wrongEvidence = structuredClone(original);
    const reference = claim(wrongEvidence, claimId).citations.find((ref) => ref.sourceId === sourceId && ref.role === "supports");
    reference.sourceId = "witnesses";
    assert.throws(() => validateCanonicalSource(wrongEvidence), /Analytical claim lacks executable evidence/);

    const wrongStatus = structuredClone(original);
    claim(wrongStatus, claimId).status = "publication-supported";
    assert.throws(() => validateCanonicalSource(wrongStatus), /analytically-checked/);
  }
});

test("local study context citations must retain their reviewed executable locator", () => {
  const copy = structuredClone(original);
  const result = claim(copy, "C-phys-nucleon-algebra");
  result.citations.find((ref) => ref.sourceId === "nucleon-algebra-verifier").locator = "unreviewed calculation";
  assert.throws(() => validateStudyBoundary(copy), /Unreviewed or missing study locator/);

  const unbound = structuredClone(original);
  const executable = source(unbound, "nucleon-algebra-verifier");
  executable.path = null;
  executable.sha256 = null;
  executable.url = "https://example.org/unbound-code";
  assert.throws(() => validateCanonicalSource(unbound), /Analytical evidence is not bound code/);
});
