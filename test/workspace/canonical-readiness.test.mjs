import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";

const data = await loadCanonicalSource();

test("readiness rejects occurrence promotion, lost representation roles and evidence overreach", () => {
  for (const mutate of [
    (d) => { d.readiness.nodeRoles.pop(); },
    (d) => { d.readiness.nodeRoles[0].instanceAdmission = "admitted"; },
    (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "l0:compensation").role = "carrier-class"; },
    (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "R-object").role = "scoped-phenomenon"; },
    (d) => { d.readiness.nodeRoles[0].claimIds = []; },
    (d) => { d.readiness.proposal.independentReviewComplete = true; },
    (d) => { d.readiness.proposal.implementationStatus = "implemented"; },
    (d) => { d.readiness.proposal.findings[0].sections = [133]; },
    (d) => { d.graph.sources.find((s) => s.id === "formal-core-proposal").kind = "internal-review"; }
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed));
  }
});
