import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
function rejects(mutations) {
  for (const [name, change] of mutations) {
    const copy = structuredClone(data);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
function drop(d, id, fragment) {
  const c = claim(d, id), before = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.ok(c.limitations.length < before, "Mutation must remove a reviewed limit");
}

test("AlphaGamma ideal cancellation retains response, nuclear corrections and quantity scope", () => {
  rejects([
    ["cancellation becomes unconditional", (d) => drop(d, "D-phys-alpha-gamma-transfer", "common detector response")],
    ["ideal identity eliminates every nuclear input", (d) => drop(d, "D-phys-alpha-gamma-transfer", "nuclear data from every correction")],
    ["source activity becomes pure isotope decay", (d) => drop(d, "D-phys-alpha-gamma-transfer", "240Pu/241Am")],
    ["monitor response loses beam and target normalization", (d) => drop(d, "D-phys-normalized-monitor-response", "self-shielding")],
    ["counting definition becomes observed physical process", (d) => { d.graph.entities.find((e) => e.id === "phys:alpha-gamma-transfer").kind = "scoped-process"; }]
  ]);
});

test("source calibrations cannot substitute incompatible preparations or erase common errors", () => {
  rejects([
    ["distinct apertures silently merge", (d) => drop(d, "C-phys-yue2011-source-activity", "Cu-Cu-1")],
    ["thesis fraction conflict disappears", (d) => drop(d, "C-phys-yue2011-source-activity", "factor of ten")],
    ["rounded mean becomes exact reproduction", (d) => drop(d, "C-phys-yue2011-source-activity", "23545.129016")],
    ["2018 printed quotient becomes exact source activity", (d) => drop(d, "C-phys-yue2018-source-activity", "23540.204")],
    ["thesis source replaces detailed-article input", (d) => { d.graph.relations.find((r) => r.id === "physics:yue2018-source-activity-yue2018-monitor-efficiency").source = "phys:yue2011-source-activity"; }]
  ]);
});

test("normalized efficiency retains shared campaign, corrections and reported source conflicts", () => {
  rejects([
    ["2018 publication becomes independent acquisition", (d) => drop(d, "C-phys-yue2018-monitor-efficiency", "March 2011")],
    ["historical transfer confused with within-run drift", (d) => drop(d, "C-phys-yue2018-monitor-efficiency", "long-term 6Li")],
    ["27 points become independent standards", (d) => drop(d, "C-phys-yue2018-monitor-efficiency", "common and configuration-specific")],
    ["source formula conflicts silently repaired", (d) => drop(d, "C-phys-yue2018-monitor-efficiency", "factor 1/2")],
    ["later efficiency silently replaces lifetime input", (d) => drop(d, "C-phys-yue2018-monitor-efficiency", "No new lifetime")],
    ["normalization calculation becomes new experiment", (d) => { d.physics.studies.find((s) => s.id === "yue2018-normalization").studyType = "primary-experiment"; }],
    ["2013 comparison loses its source", (d) => { const c = claim(d, "C-phys-yue2018-monitor-efficiency"); c.citations = c.citations.filter((r) => r.sourceId !== "yue2013"); }]
  ]);
});

test("AlphaGamma arithmetic cannot certify measured efficiency or an entire calibration", () => {
  rejects([
    ["arithmetic check certifies measured efficiency", (d) => { claim(d, "C-phys-yue2018-monitor-efficiency").checkIds = ["alpha-gamma-printed-arithmetic"]; }],
    ["arithmetic input becomes reproduced output", (d) => drop(d, "C-phys-alpha-gamma-arithmetic", "efficiency is an input")],
    ["attenuation check loses its measured efficiency input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:yue2018-monitor-efficiency-alpha-gamma-arithmetic"); }],
    ["printed activity mismatch is suppressed", (d) => drop(d, "C-phys-alpha-gamma-arithmetic", "display-rounding intervals")],
    ["arithmetic loses executable provenance", (d) => { const c = claim(d, "C-phys-alpha-gamma-arithmetic"); c.citations = c.citations.filter((r) => r.sourceId !== "alpha-gamma-verifier"); }],
    ["conditional arithmetic becomes alternative exclusion", (d) => { d.physics.comparisons.find((c) => c.id === "alpha-gamma-arithmetic").result = "specified-alternative-disfavored"; }]
  ]);
});

test("reviewed extents, record denotations and dependency meanings stay explicit", () => {
  rejects([
    ["selected thesis passages become full journal review", (d) => { d.graph.sources.find((s) => s.id === "yue2011-thesis").review.extent = "full-primary-article"; }],
    ["calibration dependency becomes physical causation", (d) => { d.graph.relations.find((r) => r.id === "physics:yue2018-normalization-context-yue2018-monitor-efficiency").kind = "functional"; }],
    ["edge falsely asserts independent validation", (d) => { d.graph.relations.find((r) => r.id === "physics:yue2018-source-activity-yue2018-monitor-efficiency").assertion = "The independent thesis calibration validates the 2018 neutron lifetime."; }],
    ["source alpha rate becomes neutron lifetime", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:yue2018-source-activity").denotes = "A directly measured neutron lifetime."; }],
    ["calculation context becomes experimental acquisition", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:alpha-gamma-replay-context").role = "experimental-context"; }]
  ]);
});
