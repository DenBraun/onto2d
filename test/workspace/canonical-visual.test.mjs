import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
const relation = (d, id) => d.graph.relations.find((r) => r.id === id);

test("visual relations reject reversed feedback, V4/V1 substitution and cross-preparation joins", () => {
  for (const [label, mutate] of [
    ["reversed feedback", (d) => { const r = relation(d, "visual:corticogeniculate-feedback"); [r.source, r.target] = [r.target, r.source]; }],
    ["V1 substituted for V4", (d) => { relation(d, "visual:fef-v4-modulation").target = "vis:v1-simple-response"; }],
    ["wrong preparation", (d) => { relation(d, "visual:ganglion-spiking-retinogeniculate-transfer").contextIds = ["reid1995"]; }],
    ["missing paired-recording source", (d) => { const e = d.graph.entities.find((n) => n.id === "ret:ganglion-spiking"); e.claimIds = e.claimIds.filter((id) => id !== "V-usrey1998"); }],
    ["transitive path promoted", (d) => { const r = structuredClone(relation(d, "visual:ganglion-spiking-retinogeniculate-transfer")); r.id = "visual:unmeasured-cascade"; r.target = "vis:v1-simple-response"; r.legacyReviewId = null; d.graph.relations.push(r); }],
    ["uncalibrated weight", (d) => { relation(d, "visual:ganglion-spiking-retinogeniculate-transfer").weight = 0.35; }],
    ["read extent exceeded", (d) => { claim(d, "V-moore2003").citations[0].locator = "Unread Methods"; }],
    ["study/source reading differs", (d) => { d.visual.studies.find((s) => s.id === "denman2015").readExtent = "complete-full-text"; }]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});
