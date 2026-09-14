import assert from "node:assert/strict";

export function validateOpticalReview({ graph, optics }, { sources, claims, entities, relations }) {
  for (const target of ["specular-response", "material-transmission"]) {
    const relation = relations.get(`optical:measurement-context-${target}`);
    assert.equal(relation?.source, "opt:measurement-context", "Optical measurement boundary changed");
    assert.equal(relation.target, `opt:${target}`, "Optical readout changed");
    assert.deepEqual(relation.claimIds, [`C-optical-measurement-context-${target}`]);
  }
  const expectedRelations = ["optical:measurement-context-specular-response", "optical:measurement-context-material-transmission", "optical:distribution-observation", "optical:coefficient-observation"];
  const opticalRelations = graph.relations.filter((r) => r.id.startsWith("optical:") || r.source.startsWith("opt:") || r.target.startsWith("opt:"));
  assert.deepEqual(opticalRelations.map((r) => r.id), expectedRelations, "Unreviewed optical relation or cross-domain bridge");
  for (const r of opticalRelations) {
    assert.ok(r.source.startsWith("opt:") && r.target.startsWith("opt:"), "No matched optical-to-retinal bridge is admitted");
    assert.equal(r.kind, "descriptive");
    assert.ok(r.claimIds.some((id) => ["definition", "method-contract"].includes(claims.get(id).status)));
  }
  for (const [id, source, target, claimId] of [
    ["optical:distribution-observation", "opt:brdf", "opt:specular-response", "O-brdf"],
    ["optical:coefficient-observation", "opt:absorption-coefficient", "opt:water-absorption", "O-coefficient"]
  ]) {
    const r = relations.get(id);
    assert.equal(r.source, source); assert.equal(r.target, target); assert.deepEqual(r.claimIds, [claimId]);
    assert.equal(r.contextIds, undefined);
  }
  for (const e of graph.entities.filter((e) => e.id.startsWith("opt:"))) {
    assert.equal(e.level, 2);
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => claims.get(id).status === "publication-supported"), "Missing optical observation evidence");
    for (const id of e.claimIds) for (const c of claims.get(id).citations) {
      const source = sources.get(c.sourceId);
      if (source.kind === "research-publication" || c.sourceId === "optical-witnesses") assert.ok(source.review.locators.includes(c.locator), "Unreviewed optical source locator");
    }
  }
  for (const id of ["quickenden2000", "fry2000-reply"]) assert.ok(claims.get("O-water").citations.some((c) => c.sourceId === id && c.role === "limits"), "Water-precision dispute was lost or promoted to supporting evidence");
  for (const c of optics.comparisons) {
    assert.equal(c.result, "not-tested", "No empirical optical graph-ranking experiment has been performed");
    assert.deepEqual(c.sourceIds, []);
  }

  assert.deepEqual(sources.get("optical-witnesses").review.locators, optics.checkIds);
}
