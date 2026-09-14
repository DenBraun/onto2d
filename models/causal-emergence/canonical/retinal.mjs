import assert from "node:assert/strict";
const sorted = (values) => [...values].sort();

export function validateRetinalPilot({ graph, pilot, routing, optics, visual, neural, physics }, { sources, claims, entities, relations }) {
  for (const [source, target] of [
    ["pigment-preparation", "photochemistry"], ["photochemistry", "rod-response"],
    ["catalytic-machinery", "rod-response"], ["cgmp-conductance", "rod-response"],
    ["recording-context", "rod-response"], ["ocular-optics", "spatial-sampling"],
    ["retinal-circuit", "retinal-filtering"], ["cone-drive", "retinal-filtering"],
    ["retinal-filtering", "ganglion-spiking"], ["excitable-membrane", "ganglion-spiking"],
    ["cone-drive", "ganglion-spiking"]
  ]) {
    const relation = relations.get(`retinal:${source}-${target}`);
    assert.equal(relation?.source, `ret:${source}`, "Retinal intervention or boundary changed");
    assert.equal(relation.target, `ret:${target}`, "Retinal observable changed");
    assert.deepEqual(relation.claimIds, [`C-retinal-${source}-${target}`], "Retinal evidence binding changed");
  }
  const studyRecords = [...pilot.studies, ...routing.studies, ...optics.studies, ...visual.studies, ...neural.studies, ...physics.studies];
  const studies = new Map(studyRecords.map((s) => [s.id, s]));
  assert.equal(studies.size, studyRecords.length, "Duplicate study");
  for (const s of studies.values()) {
    const source = sources.get(s.sourceId);
    assert.equal(source?.kind, "research-publication", `Missing pilot publication ${s.id}`);
    assert.equal(source.doi, s.doi, `Study DOI differs ${s.id}`);
    assert.equal(source.review.extent, s.readExtent);
    if (s.id === s.sourceId) assert.deepEqual(source.review.locators, s.reviewedLocators);
    else assert.ok(s.reviewedLocators.every((locator) => source.review.locators.includes(locator)),
      `Assay reading exceeds its publication review: ${s.id}`);
  }
  const admittedStatuses = new Set(["publication-supported", "literature-synthesis"]);
  for (const c of claims.values()) {
    if (admittedStatuses.has(c.status)) assert.ok(c.contextIds?.length, `Published claim lacks study context ${c.id}`);
    if (!c.contextIds) continue;
    for (const id of c.contextIds) {
      const s = studies.get(id);
      assert.ok(s?.studyType === "computational-analysis" && ["pajot2026-quadrilaterals", "pajot2026-memory", "pajot2026-cross-format", "tan2024-decoder", "creutz1980", "bali2005", "durr2008"].includes(id) || s?.studyType === "primary-experiment" || s?.studyType === "primary-observation" && ["witvliet2021", "disouky2026", "eriksson1998", "spalding2013", "kornack1999", "gould1999-primate", "rakic1985", "eckenhoff1988", "miller1996", "rose2016-pooled-behavior", "gallese1996-f5", "gallese1996-emg", "gallese1996-f1", "singer2004-partner-pain", "mukamel2010-action-units", "tan2024-ieeg", "tan2024-ratings"].includes(id), `Claim lacks reviewed primary evidence ${c.id}: ${id}`);
      assert.ok(c.citations.some((ref) => ref.sourceId === s.sourceId && s.reviewedLocators.includes(ref.locator)), `Unreviewed or missing study locator ${c.id}: ${id}`);
    }
    if (admittedStatuses.has(c.status)) {
      assert.ok(c.citations.some((ref) => ref.role === "supports" && c.contextIds.some((id) => {
        const study = studies.get(id);
        return study.sourceId === ref.sourceId && study.reviewedLocators.includes(ref.locator);
      })), `Publication support missing ${c.id}`);
      if (c.contextIds.length > 1) assert.equal(c.status, "literature-synthesis", `Multiple preparations presented as one experiment ${c.id}`);
    }
  }
  for (const r of relations.values()) {
    if ((r.id.startsWith("optical:") || r.id.startsWith("visual:") || r.id.startsWith("neural:") || r.id.startsWith("physics:"))) continue; // Checked by the respective domain contracts.
    if (!r.id.startsWith("retinal:")) {
      assert.equal(r.kind, "descriptive", "This pilot does not promote Level-0 definitions to physical support");
      continue;
    }
    assert.ok(r.source.startsWith("ret:") && r.target.startsWith("ret:"), "No empirical Level-0 bridge has been admitted");
    assert.ok(r.contextIds?.length, `Relation lacks contexts ${r.id}`);
    const supported = r.claimIds.filter((id) => r.kind === "descriptive" ? claims.get(id).status === "definition" : admittedStatuses.has(claims.get(id).status));
    assert.ok(supported.length, `Relation lacks an appropriate claim ${r.id}`);
    for (const id of r.contextIds) assert.ok(supported.some((cid) => claims.get(cid).contextIds?.includes(id)), `Relation context is not supported ${r.id}`);
    for (const cid of supported) assert.deepEqual(sorted(claims.get(cid).contextIds), sorted(r.contextIds), `Relation drops claim context ${r.id}`);
  }
  for (const e of entities.values()) {
    if ((e.id.startsWith("opt:") || e.id.startsWith("vis:") || e.id.startsWith("neur:") || e.id.startsWith("phys:"))) continue; // Checked by the respective domain contracts.
    if (!e.id.startsWith("ret:")) { assert.equal(e.level, 0); continue; }
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => admittedStatuses.has(claims.get(id).status)), `Entity lacks scoped evidence ${e.id}`);
  }
  for (const c of pilot.comparisons) {
    for (const id of c.sourceIds) assert.equal(studies.get(id)?.studyType, "primary-experiment");
    if (c.result !== "not-tested") assert.ok(c.sourceIds.length, "Comparison result lacks evidence");
  }

}
