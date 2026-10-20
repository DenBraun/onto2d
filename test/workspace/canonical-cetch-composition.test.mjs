import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateBiochemistryReview } from "../../models/causal-emergence/canonical/biochemistry.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const find = (rows, id) => {
  const record = rows.find((row) => (row.id ?? row.nodeId) === id);
  assert.ok(record, `Missing CETCH record: ${id}`);
  return record;
};
const context = (data) => Object.fromEntries(["sources", "claims", "entities", "relations"]
  .map((kind) => [kind, new Map(data.graph[kind].map((record) => [record.id, record]))]));

test("CETCH stepwise conversion and combined non-completion retain separate, dependent preparation reports", async () => {
  const data = await source();
  const ids = ["schwander2016-cetch10-stepwise", "schwander2016-cetch10-combined",
    "schwander2016-cetch54-isotope-product"];
  const preparations = ids.map((id) => find(data.biochemistry.studies, id));
  assert.equal(new Set(preparations.map((record) => record.sourceId)).size, 1,
    "Different versions from the same publication are not independent replications");
  assert.match(preparations[0].preparation, /added first.*eleven other enzymes/);
  assert.match(preparations[1].preparation, /present from the start/);
  const publication = find(data.graph.sources, preparations[0].sourceId);
  for (const preparation of preparations.slice(0, 2)) {
    assert.equal(preparation.readExtent, publication.review.extent,
      "The cumulative publication reading does not certify a complete preparation protocol");
    assert.match(preparation.readExtent, /main-text.*supplement-unread/);
    assert.ok(preparation.limitations.some((limit) => /reaction duration.*unknown/.test(limit)));
    assert.ok(preparation.limitations.some((limit) => /no values are inherited from the 5\.4 assay/.test(limit)));
  }
  assert.match(preparations[2].preparation, /90 minutes/);
  assert.deepEqual(find(data.graph.claims, "C-bio-cetch10-stepwise-conversion").contextIds, [ids[0]]);
  assert.deepEqual(find(data.graph.claims, "C-bio-cetch10-combined-stall").contextIds, [ids[1]]);
  assert.deepEqual(find(data.graph.claims, "C-bio-cetch-composition-nonsufficiency").contextIds, ids);
});

test("CETCH reported non-completion stays distinct from unresolved mechanism and resource necessity", async () => {
  const data = await source();
  const failure = find(data.graph.claims, "C-bio-cetch10-combined-stall");
  const mechanism = find(data.graph.claims, "C-bio-cetch10-electron-acceptor-attribution");
  assert.equal(failure.status, "publication-supported");
  assert.match(failure.statement, /stopped at methylsuccinyl-CoA before a complete cycle turn/);
  assert.equal(mechanism.status, "unresolved");
  assert.match(mechanism.statement, /most likely/);
  assert.ok(mechanism.limitations.some((limit) => /does not uniquely identify this mechanism/.test(limit)));
  const hypothesis = find(data.graph.entities, "bio:cetch10-electron-acceptor-attribution");
  assert.equal(hypothesis.kind, "hypothesis");
  assert.equal(hypothesis.status, "hypothesis");
  assert.equal(find(data.readiness.nodeRoles, hypothesis.id).instanceAdmission, "none");
  const supplied = find(data.graph.claims, "C-bio-cetch54-supplied-assembly");
  assert.ok(supplied.limitations.some((limit) => /not an added resource-removal experiment/.test(limit)));
  assert.equal(find(data.biochemistry.comparisons, "cetch10-electron-acceptor-explanation-identification").result,
    "inconclusive");
});

test("CETCH interpretation links preserve methods without inventing measured functional interventions", async () => {
  const data = await source();
  const ids = ["biochemistry:cetch10-stall-electron-acceptor-attribution",
    "biochemistry:cetch54-supplied-assembly-finite-operation",
    "biochemistry:cetch10-stepwise-metabolic-scope", "biochemistry:cetch10-stall-metabolic-scope"];
  for (const id of ids) {
    const relation = find(data.graph.relations, id);
    assert.equal(relation.kind, "descriptive");
    assert.equal(relation.role, "interpretation-dependency");
    assert.ok(relation.claimIds.some((claimId) => {
      const claim = find(data.graph.claims, claimId);
      return claim.status === "method-contract"
        && relation.contextIds.every((contextId) => claim.contextIds?.includes(contextId));
    }), `${id} needs a method claim with the same preparation boundary`);
  }
});

test("CETCH admission rejects conflated protocols, certain mechanisms and unmeasured resource effects", async () => {
  const original = await source();
  const mutations = [
    ["A finite 5.4 duration cannot fill an unknown 1.0 protocol", (data) => {
      find(data.biochemistry.studies, "schwander2016-cetch10-combined").preparation += " The 1.0 duration was 90 minutes.";
    }],
    ["The proposed mechanism cannot be silently promoted to a verified finding", (data) => {
      find(data.graph.claims, "C-bio-cetch10-electron-acceptor-attribution").status = "publication-supported";
    }],
    ["Presence of supplied resources is not a measured removal effect", (data) => {
      const relation = find(data.graph.relations, "biochemistry:cetch54-supplied-assembly-finite-operation");
      relation.kind = "functional-support";
      relation.role = "scoped-operating-support";
    }],
    ["Main-text-only admission cannot discard unread-control limitations", (data) => {
      find(data.graph.claims, "C-bio-cetch10-combined-stall").limitations = ["All raw traces and controls independently verified."];
    }],
    ["Preparation descriptions cannot admit physical instances", (data) => {
      const row = data.readiness.nodeRoles.find((record) => record.nodeId === "bio:cetch10-combined-stall");
      row.instanceAdmission = "admitted";
    }]
  ];
  for (const [reason, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateBiochemistryReview(changed, context(changed)),
      /Biochemistry|biochemical|Biochemical|biochemistry|Publication|Unreviewed/, reason);
  }
});
