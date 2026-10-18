import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  RG_SCOPE_ADMISSION as admission,
  RG_SCOPE_CHECKS,
  RG_SCOPE_ANALYTICAL_SOURCES,
  validateRgScopeContracts
} from "../../models/causal-emergence/canonical/rg-scope.mjs";

const definition = "D-phys-effective-description-scope";
const synthesis = "C-phys-running-evidence-boundary";
const method = "M-phys-running-evidence-boundary";
const contexts = ["cms2013-r32", "l3-2000-running-fit"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, suffix) => data.graph.entities.find((record) => record.id === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((record) => record.id === `physics:${from}-${to}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), length = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, length - 1, `Unique boundary ${fragment}`);
  const suffix = id.replace(/^[DCM]-phys-/, "");
  if (entity(data, suffix)) entity(data, suffix).openObligations = [...record.limitations];
}

async function rejects(mutations) {
  const original = await source();
  validateRgScopeContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("the effective-description synthesis reuses existing running studies without inventing an EFT experiment", async () => {
  assert.equal(RG_SCOPE_CHECKS.size, 0);
  assert.equal(RG_SCOPE_ANALYTICAL_SOURCES.size, 0);
  for (const key of ["contexts", "studyIds", "comparisonIds", "localStudySources"])
    assert.deepEqual(admission[key], []);
  assert.equal(admission.definitions.length, 1);
  assert.equal(admission.observations.length, 1);
  const data = await source();
  validateRgScopeContracts(context(data));
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, contexts);
  assert.deepEqual(claim(data, method).contextIds, contexts);
  assert.deepEqual(claim(data, synthesis).checkIds, []);
  assert.deepEqual(admission.dependencies.map(([, from]) => from), [
    "effective-description-scope", "cms-running-consistency", "l3-running-slope", "l3-running-difference"
  ]);
  assert.deepEqual(claim(data, "C-phys-l3-running-slope").contextIds,
    claim(data, "C-phys-l3-running-difference").contextIds,
    "Two interpretations of the L3 fit do not become two acquisitions");
  const owners = new Set(contexts.map((id) => data.physics.studies.find((record) => record.id === id).sourceId));
  const supplemental = new Map(admission.inferenceSources);
  for (const id of [synthesis, method]) {
    const role = id === method ? "method" : "supports";
    const unowned = [...new Set(claim(data, id).citations
      .filter((citation) => citation.role === role && !owners.has(citation.sourceId))
      .map((citation) => citation.sourceId))];
    assert.deepEqual(supplemental.get(id), unowned,
      "Formal RG/EFT publications remain supplemental sources, not owners of measured-data preparations");
  }
});

test("cutoff elimination, renormalization scale, hard momentum and physical time retain separate meanings", async () => {
  await rejects([
    ["the Wilsonian cutoff becomes the detector momentum or elapsed time", (data) => {
      const record = claim(data, definition);
      record.statement = "The renormalization scale is the measured hard momentum and elapsed physical time; integrating out fields is their actual temporal disappearance.";
      entity(data, "effective-description-scope").description = record.statement;
    }],
    ["a scale-convention comparison becomes empirical microscopic erasure", (data) => {
      edge(data, "qcd-renormalization-scale", "effective-description-scope").assertion =
        "The experimentally measured hard scale proves that high-energy microscopic causes vanish with time.";
    }],
    ["a beta function determines matching coefficients and boundary values", (data) => {
      edge(data, "threshold-matching", "effective-description-scope").assertion =
        "The beta function alone determines every threshold coefficient without matching inputs or boundary conditions.";
    }],
    ["a universal necessary QFT parent replaces the reviewed cutoff construction", (data) => {
      edge(data, "wilsonian-effective-action", "effective-description-scope").source = "phys:quantum-field-framework";
    }]
  ]);
});

test("operator selection and the tree weak contact limit do not erase heavy physics or measure a complete EFT", async () => {
  await rejects([
    ["structural importance becomes an unqualified universal ontology", (data) =>
      dropLimit(data, definition, "Structurally significant means")],
    ["the contact identity is promoted to loop matching or a measured coefficient", (data) =>
      dropLimit(data, definition, "Its Fermi relation is a parameter identity")],
    ["the tree approximation supplies an exact experimental weak amplitude", (data) => {
      edge(data, "low-energy-weak-exchange", "effective-description-scope").assertion =
        "The Fermi parameter identity is a measured all-orders matching coefficient and the complete gauge-consistent weak amplitude.";
    }],
    ["the power expansion loses its formal dependency", (data) => {
      data.graph.relations = data.graph.relations.filter((record) =>
        record.id !== "physics:effective-operator-expansion-effective-description-scope");
    }]
  ]);
});

test("a Gaussian fixed-point illustration does not become evidence for all universality classes", async () => {
  await rejects([
    ["marginal directions and finite universality assumptions disappear", (data) =>
      dropLimit(data, definition, "Marginal directions require higher-order analysis")],
    ["a generic condensed-matter evidence placeholder regains empirical standing", (data) =>
      dropLimit(data, definition, "No condensed-matter acquisition")],
    ["unreviewed parent weights, minima and SOMA codes become quantitative", (data) =>
      dropLimit(data, definition, "N_min=N_crit=1")],
    ["the fixed-point definition proves stable laws throughout physics", (data) => {
      edge(data, "fixed-point-scaling-fields", "effective-description-scope").assertion =
        "The Gaussian example proves every interacting universality class, its full basin and stable low-energy laws across physics.";
    }]
  ]);
});

test("the CMS comparison keeps the common PDF/RGE construction and correlated scale-region data", async () => {
  await rejects([
    ["the three points become independent theory-free measurements of the beta function", (data) =>
      dropLimit(data, synthesis, "CMS scale-region points")],
    ["conditional QCD and QED extractions become a pooled universal coupling", (data) =>
      dropLimit(data, synthesis, "QCD alpha_s and QED alpha")],
    ["the source-specific error bars certify Wilsonian truncation errors", (data) => {
      const record = claim(data, synthesis);
      record.statement = "CMS and L3 directly observe mode elimination, pool the same universal coupling and measure the Wilsonian truncation uncertainty.";
      entity(data, "running-evidence-boundary").description = record.statement;
    }],
    ["the operative method becomes a direct beta-function extraction", (data) => {
      claim(data, method).statement = "Treat the correlated CMS points as an independent, theory-free beta-function measurement.";
    }]
  ]);
});

test("the L3 slope, nominal-running reference and inverse-alpha difference stay interpretations of one fit", async () => {
  await rejects([
    ["S=0 becomes constant coupling and the display anchor becomes an independent measurement", (data) =>
      dropLimit(data, synthesis, "Its S=0 reference is nominal running")],
    ["two L3 outputs become independent evidence for all effective theories", (data) =>
      dropLimit(data, synthesis, "There is no new condensed-matter scaling measurement")],
    ["a literature synthesis claims a local fit or covariance reproduction", (data) =>
      dropLimit(data, synthesis, "No local CMS/L3 event")],
    ["the existing L3 fit context is silently replaced by another experiment", (data) => {
      for (const id of [synthesis, method]) claim(data, id).contextIds[1] = "kamland2005-response";
    }]
  ]);
});

test("interpretation dependencies, source ownership and readiness cannot become universal data-generation claims", async () => {
  await rejects([
    ["an interpretation input reverses direction", (data) => {
      const record = edge(data, "cms-running-consistency", "running-evidence-boundary");
      [record.source, record.target] = [record.target, record.source];
    }],
    ["a descriptive interpretation becomes a necessary physical cause", (data) => {
      const record = edge(data, "l3-running-difference", "running-evidence-boundary");
      record.kind = "functional-support";
      record.role = "scoped-operating-support";
    }],
    ["the same-fit L3 dependency disappears", (data) => {
      data.graph.relations = data.graph.relations.filter((record) =>
        record.id !== "physics:l3-running-slope-running-evidence-boundary");
    }],
    ["a theoretical citation borrows experimental-data ownership", (data) => {
      claim(data, synthesis).citations.find((citation) =>
        !["cms2013-r32", "l3-2000-running"].includes(citation.sourceId)).sourceId = "cms2013-r32";
    }],
    ["readiness presents the synthesis as an observed universal EFT", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === "phys:running-evidence-boundary").denotes =
        "A directly observed universal Wilsonian coarse-graining law for every physical system.";
    }],
    ["an unreviewed physical construction rule bypasses descriptive-only links", (data) => {
      const rule = structuredClone(data.graph.rules[0]);
      rule.id = "phys:universal-effective-reduction";
      rule.outputEntityIds = ["phys:running-evidence-boundary"];
      data.graph.rules.push(rule);
    }]
  ]);
});
