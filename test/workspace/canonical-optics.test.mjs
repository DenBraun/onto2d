import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { buildCanonicalRelease } from "../../models/causal-emergence/canonical/build.mjs";
import { verifyOpticalWitnesses } from "../../models/causal-emergence/canonical/optical-witnesses.mjs";

const data = await loadCanonicalSource();

test("optical validation rejects lost provenance, promoted placeholders and unsupported cross-preparation claims", () => {
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  for (const [label, mutate] of [
    ["unread locator", (d) => { claim(d, "O-water").citations[0].locator = "Full text"; }],
    ["method as experiment", (d) => { claim(d, "O-reflection").contextIds = ["nicodemus1977"]; }],
    ["lost critique", (d) => { const c = claim(d, "O-water"); c.citations = c.citations.filter((r) => r.sourceId !== "quickenden2000"); }],
    ["reply as new experiment", (d) => { claim(d, "O-water").citations.find((r) => r.sourceId === "fry2000-reply").role = "supports"; }],
    ["invented retinal transfer", (d) => { d.graph.relations.push({ ...structuredClone(d.graph.relations.find((r) => r.id === "optical:distribution-observation")), id: "optical:retinal-transfer", target: "ret:ocular-optics" }); }],
    ["empirical ranking without experiment", (d) => { d.optics.comparisons[0].result = "supports-canonical"; }],
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("quantity witnesses retain non-unique angular inversion, path dependence and covariance", () => {
  const w = verifyOpticalWitnesses();
  assert.equal(w.status, "passed");
  assert.equal(w.numericalAdmissions, 0);
  const [angular, path, balance] = w.cases;
  assert.deepEqual(w.cases.map((c) => c.id), data.optics.checkIds);
  assert.notDeepEqual(angular.first, angular.second);
  for (const bins of [angular.first, angular.second]) assert.equal(bins.reduce((a, b) => a + b * angular.projectedBin, 0), angular.reflectance);
  assert.ok(angular.narrowDensity > 1 && angular.narrowDensity * angular.narrowProjectedSolidAngle <= 1);
  assert.ok(path.internalTransmission[0] > path.internalTransmission[1]);
  assert.equal(balance.sharedVarianceUnits / balance.independentVarianceUnits, 2);
});
