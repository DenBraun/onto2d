import assert from "node:assert/strict";

const effects = [
  ["visual:ganglion-spiking-retinogeniculate-transfer", "ret:ganglion-spiking", "vis:retinogeniculate-transfer", "usrey1998", "C-visual-ganglion-spiking-retinogeniculate-transfer"],
  ["visual:geniculocortical-input-v1-simple-response", "vis:geniculocortical-input", "vis:v1-simple-response", "reid1995", "C-visual-geniculocortical-input-v1-simple-response"],
  ["visual:corticogeniculate-feedback", "vis:corticogeniculate-perturbation", "vis:dlgn-feedback-response", "denman2015", "V-denman2015"],
  ["visual:fef-v4-modulation", "vis:fef-perturbation", "vis:v4-modulation", "moore2003", "V-moore2003"]
];

/** Validate current visual evidence and interpretation boundaries. */
export function validateVisualReview({ graph, visual }, { sources, claims, entities, relations }) {
  const studies = new Map(visual.studies.map((s) => [s.id, s]));
  assert.deepEqual([...studies.keys()], ["usrey1998", "reid1995", "hubel1968", "ohki2005", "denman2015", "moore2003"], "Unreviewed visual experiment inventory");
  for (const [id, year, doi] of [["hubel1962", 1962, "10.1113/jphysiol.1962.sp006837"], ["hubel1968", 1968, "10.1113/jphysiol.1968.sp008455"], ["rao1999", 1999, "10.1038/4580"], ["marr1982", 1982, null]]) {
    assert.equal(sources.get(id).year, year, "Visual publication year changed");
    assert.equal(sources.get(id).doi, doi, "Visual publication identity changed");
  }
  assert.equal(sources.get("hubel1962").review.extent, "bibliographic-metadata");
  assert.equal(sources.get("marr1982").review.extent, "publisher-description-and-edition-metadata");
  const hypothesis = entities.get("vis:predictive-coding-hypothesis");
  assert.equal(hypothesis.kind, "hypothesis"); assert.equal(hypothesis.status, "hypothesis");
  assert.equal(claims.get("V-predictive").status, "unresolved", "Predictive interpretation promoted without a discriminating experiment");
  assert.equal(claims.get("V-predictive").contextIds, undefined);
  assert.deepEqual(claims.get("V-predictive").citations.map((c) => [c.sourceId, c.role]), [["rao1999", "provenance"], ["friston2005", "provenance"], ["clark2013", "provenance"]]);
  const visualRelations = graph.relations.filter((r) => r.id.startsWith("visual:") || r.source.startsWith("vis:") || r.target.startsWith("vis:"));
  assert.deepEqual(visualRelations.map((r) => r.id), effects.map((e) => e[0]), "Unreviewed visual relation or cross-preparation bridge");
  for (const [id, source, target, context, claimId] of effects) {
    const r = relations.get(id);
    assert.equal(r.source, source); assert.equal(r.target, target); assert.equal(r.kind, "functional-support");
    assert.deepEqual(r.contextIds, [context]); assert.deepEqual(r.claimIds, [claimId]);
    const c = claims.get(claimId);
    assert.equal(c.status, "publication-supported"); assert.deepEqual(c.contextIds, [context]);
    for (const eid of [source, target]) assert.ok(entities.get(eid).claimIds.some((cid) => claims.get(cid).status === "publication-supported" && claims.get(cid).contextIds?.includes(context)), "Visual endpoint lacks the matched experiment");
  }
  for (const e of graph.entities.filter((e) => e.id.startsWith("vis:"))) {
    assert.equal(e.level, 6);
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => claims.get(id).status === "publication-supported"), "Visual observation lacks scoped support");
    for (const id of e.claimIds) for (const c of claims.get(id).citations) {
      const source = sources.get(c.sourceId);
      if (source.kind === "research-publication") assert.ok(source.review.locators.includes(c.locator), "Visual citation exceeds reviewed reading");
    }
  }
  assert.deepEqual(visual.comparisons.map((c) => [c.result, c.sourceIds]), [["universal-claim-contradicted-in-reviewed-preparation", ["ohki2005"]], ["not-tested", []]], "Unperformed visual model comparison promoted");

}
