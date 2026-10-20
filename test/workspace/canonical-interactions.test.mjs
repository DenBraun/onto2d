import assert from "node:assert/strict";
import test from "node:test";
import {
  INTERACTION_FIELDS, projectCanonicalInteractionCase, projectCanonicalInteractions,
  validateCanonicalInteractions
} from "../../models/causal-emergence/canonical/interactions.mjs";

// These synthetic records test evidence boundaries, not scientific mechanisms.
function fixture() {
  const graph = { sources: [], claims: [], entities: [], relations: [], interactionCases: [], interactionAnalogies: [] };
  const studies = [];
  for (let n = 0; n < 3; n++) {
    const sourceId = `source-${n}`, studyId = `study-${n}`, claimId = `finding-${n}`, methodId = `method-${n}`;
    const input = `input-${n}`, response = `response-${n}`, hypothesis = `hypothesis-${n}`;
    const computation = n === 0;
    graph.sources.push({ id: sourceId, doi: `10.1234/synthetic-${n}`,
      review: { extent: "Synthetic passage only", limit: "No real experiment.", locators: ["Figure 1", "Methods"] } });
    studies.push({ id: studyId, sourceId, studyType: computation ? "computational-analysis" : "primary-experiment",
      readExtent: "Synthetic study only", reviewedLocators: ["Figure 1", "Methods"], limitations: ["No real evidence."] });
    graph.claims.push(
      { id: claimId, status: "publication-supported", statement: "Synthetic response.", contextIds: [studyId],
        citations: [{ sourceId, role: "supports", locator: "Figure 1" }] },
      { id: methodId, status: "method-contract", statement: "Synthetic preparation.", contextIds: [studyId],
        citations: [{ sourceId, role: "method", locator: "Methods" }] }
    );
    graph.entities.push(
      { id: input, kind: "context", status: "definition", claimIds: [methodId] },
      { id: response, kind: "scoped-process", status: "evidence-scoped", claimIds: [claimId] },
      { id: hypothesis, kind: "hypothesis", status: "hypothesis", claimIds: [claimId] }
    );
    graph.relations.push({ id: `descriptive-${n}`, source: input, target: response,
      kind: "descriptive", role: computation ? "computation-context" : "measurement-context",
      claimIds: [claimId, methodId], contextIds: [studyId] });
    if (n === 1) graph.relations.push({ id: "functional-1", source: input, target: response,
      kind: "functional-support", role: "scoped-operating-support", claimIds: [claimId], contextIds: [studyId] });
    graph.interactionCases.push({
      id: `case-${n}`, title: `Synthetic case ${n}`, domain: ["physics", "chemistry", "biochemistry"][n],
      entityIds: [input, response, hypothesis], anchorEntityId: response,
      claimIds: [claimId, methodId], studyIds: [studyId], sourceIds: [sourceId],
      evidenceMode: computation ? "computation" : "experiment",
      fields: Object.fromEntries(INTERACTION_FIELDS.map((field) => [field, {
        value: `Synthetic ${field}`, missingReason: null, claimIds: [field === "response" ? claimId : methodId]
      }])),
      observations: [
        { id: "measured", kind: computation ? "model-result" : "reported-observation",
          statement: "Synthetic reported response.", claimIds: [claimId], studyIds: [studyId] },
        { id: "interpretation", kind: "source-interpretation", statement: "A conditional synthetic account.",
          claimIds: [claimId], studyIds: [studyId] },
        { id: "unknown", kind: "not-established", statement: "Necessity was not established.",
          claimIds: [claimId], studyIds: [studyId] }
      ],
      limitations: ["Synthetic only; no independent scientific validation."],
      facets: [
        { id: "response-facet", kind: "operation", status: "reported", value: "different-response",
          statement: "The stated response differs.", observationIds: ["measured"], claimIds: [claimId], studyIds: [studyId] },
        { id: "resource-limit", kind: "resource", status: "not-established", value: "necessity-unestablished",
          statement: "Supply does not establish necessity.", observationIds: ["unknown"], claimIds: [claimId], studyIds: [studyId] }
      ],
      views: {
        system: { nodeIds: [input, response], edgeIds: n === 1 ? ["functional-1"] : [] },
        evidence: { nodeIds: [input, response], edgeIds: [`descriptive-${n}`] },
        hypotheses: { nodeIds: [hypothesis], edgeIds: [] }
      }
    });
  }
  graph.interactionAnalogies.push({ id: "synthetic-correspondence", familyId: "organization-operation",
    caseIds: ["case-0", "case-1"], fields: ["changedFactor", "response"],
    correspondence: "Both selected cases have a declared contrast.",
    breakdownConditions: "Mechanisms, quantities and conditions are not interchangeable.",
    status: "hypothesis", physicalCausalClaim: false });
  return { graph, context: { studies } };
}

function rejects(mutate, expected = /Canonical interactions/) {
  const { graph, context } = fixture();
  mutate(graph, context);
  assert.throws(() => validateCanonicalInteractions(graph, context), expected);
}

test("canonical cases are independent of pilot selection size and produce detached role views", () => {
  const { graph, context } = fixture();
  assert.equal(validateCanonicalInteractions(graph, context), graph.interactionCases);
  const atlas = projectCanonicalInteractions(graph, context);
  assert.equal(atlas.kind, "canonical-interaction-atlas");
  assert.equal(atlas.physicalInstancesAdmitted, false);
  assert.equal(atlas.cases.length, 3);
  assert.equal(atlas.analogies.length, 1);
  const system = atlas.perspectives.find((view) => view.id === "system");
  const evidence = atlas.perspectives.find((view) => view.id === "evidence");
  const hypotheses = atlas.perspectives.find((view) => view.id === "hypotheses");
  assert.deepEqual(system.edgeIds, ["functional-1"]);
  assert.ok(system.nodeIds.includes("response-0"), "system descriptions can remain isolated");
  assert.deepEqual(evidence.edgeIds, ["descriptive-0", "descriptive-1", "descriptive-2"]);
  assert.ok(hypotheses.nodeIds.includes("response-0"), "proposed analogy includes existing observed anchors");
  assert.equal(graph.entities.find((entity) => entity.id === "response-0").status, "evidence-scoped");
  assert.deepEqual(hypotheses.edgeIds, [], "correspondences never mint physical edges");
  atlas.cases[0].fields.response.value = "Changed projection";
  atlas.analogies[0].correspondence = "Changed projection";
  assert.equal(graph.interactionCases[0].fields.response.value, "Synthetic response");
  assert.equal(graph.interactionAnalogies[0].correspondence, "Both selected cases have a declared contrast.");
  const one = projectCanonicalInteractionCase(graph.interactionCases[0], { graph, ...context });
  one.observations[0].statement = "Changed projection";
  assert.equal(graph.interactionCases[0].observations[0].statement, "Synthetic reported response.");
});

test("unreported fields remain unknown and cannot acquire unsupported text", () => {
  const { graph, context } = fixture();
  graph.interactionCases[0].fields.timeScale = { value: null, missingReason: "not-reported", claimIds: [] };
  assert.equal(validateCanonicalInteractions(graph, context), graph.interactionCases);
  rejects((g) => { g.interactionCases[0].fields.response.value = null; });
  rejects((g) => { g.interactionCases[0].fields.response.claimIds = []; });
  rejects((g) => { g.interactionCases[0].fields.response.value = "  "; });
  rejects((g) => { g.interactionCases[0].fields.response.missingReason = "not-reviewed"; });
});

test("case provenance resolves selected entities, anchors, claims, sources and acquisition contexts", () => {
  rejects((g) => { g.interactionCases.push(structuredClone(g.interactionCases[0])); });
  rejects((g) => { g.interactionCases[0].anchorEntityId = "response-1"; });
  rejects((g) => { g.interactionCases[0].sourceIds = ["missing-source"]; });
  rejects((g) => { g.interactionCases[0].sourceIds.push("source-1"); });
  rejects((g) => { g.interactionCases[0].entityIds.push("missing-entity"); });
  rejects((g) => { g.entities[0].claimIds = ["finding-1"]; });
  rejects((g) => { g.interactionCases[0].evidenceMode = "experiment"; });
  rejects((g) => { g.claims[0].contextIds.push("study-1"); });
  rejects((g) => { g.claims[0].experimentalContextIds = ["external-context"]; });
  rejects((g) => { g.claims[0].citations[0].sourceId = "source-1"; });
  rejects((g) => { g.claims[0].citations[0].role = "method"; });
});

test("unreviewed passages and methods alone cannot establish measured observations", () => {
  rejects((g) => { g.sources[0].review.limit = ""; });
  rejects((g) => { g.sources[0].review.extent = "  "; });
  rejects((g) => { g.claims[0].citations[0].locator = "Unread supplement"; });
  rejects((g, { studies }) => { studies[0].reviewedLocators.push("Unread supplement"); });
  rejects((g, { studies }) => { studies[0].limitations = []; });
  rejects((g) => { g.interactionCases[0].observations[0].claimIds = ["method-0"]; });
  rejects((g) => { g.interactionCases[0].observations[0].kind = "reported-observation"; });
  rejects((g) => { g.interactionCases[1].observations[0].kind = "model-result"; });
  rejects((g) => { g.interactionCases[0].observations[0].studyIds.push("study-1"); });
});

test("facet status and vocabulary retain inferred kinetics and unknown necessity", () => {
  const { graph, context } = fixture();
  const facet = graph.interactionCases[1].facets[0];
  Object.assign(facet, { kind: "persistence", value: "kinetic-inference", status: "inferred", observationIds: ["interpretation"] });
  validateCanonicalInteractions(graph, context);
  rejects((g) => { g.interactionCases[0].facets[0].value = "required"; });
  rejects((g) => { g.interactionCases[0].facets[0].kind = "resource"; });
  rejects((g) => { Object.assign(g.interactionCases[0].facets[0], { kind: "persistence", value: "kinetic-inference" }); });
  rejects((g) => { Object.assign(g.interactionCases[1].facets[0], { kind: "regime", value: "model-regime" }); });
  rejects((g) => { g.interactionCases[0].facets[1].status = "reported"; });
  rejects((g) => { g.interactionCases[0].facets[0].status = "not-established"; });
  rejects((g) => { g.interactionCases[1].facets[0].observationIds = ["interpretation"]; });
  rejects((g) => { g.interactionCases[1].facets[0].observationIds = ["unknown"]; });
  rejects((g) => { g.interactionCases[1].facets[0].claimIds = ["method-1"]; });
  rejects((g) => { g.interactionCases[1].facets[0].studyIds = ["study-2"]; });
  rejects((g) => { g.interactionCases[1].facets[0].observationIds = ["missing"]; });
});

test("explicit view edges preserve canonical roles, claim contexts and endpoints", () => {
  rejects((g) => { g.interactionCases[0].views.system.edgeIds.push("descriptive-0"); });
  rejects((g) => { g.interactionCases[1].views.evidence.edgeIds.push("functional-1"); });
  rejects((g) => { g.interactionCases[1].views.system.nodeIds = ["input-1"]; });
  rejects((g) => { g.interactionCases[1].views.system.edgeIds = ["invented-physical-edge"]; });
  rejects((g) => { g.interactionCases[1].views.system.nodeIds.push("response-2"); });
  rejects((g) => { g.relations.find((edge) => edge.id === "functional-1").contextIds = []; });
  rejects((g) => { g.relations.find((edge) => edge.id === "functional-1").claimIds = ["method-1"]; });
  rejects((g) => { g.relations.find((edge) => edge.id === "functional-1").experimentalContextIds = ["external"]; });
  rejects((g) => { g.interactionCases[0].views.hypotheses.nodeIds = ["response-0"]; });
});

test("analogy membership validates source fields without changing graph or evidence status", () => {
  rejects((g) => { g.interactionAnalogies[0].caseIds[1] = "missing-case"; });
  rejects((g) => { g.interactionAnalogies[0].caseIds[1] = "case-0"; });
  rejects((g) => { g.interactionAnalogies[0].familyId = "universal-emergence"; });
  rejects((g) => { g.interactionAnalogies[0].physicalCausalClaim = true; });
  rejects((g) => { g.interactionCases[0].fields.response = { value: null, missingReason: "not-reported", claimIds: [] }; });
  const { graph, context } = fixture();
  graph.interactionAnalogies = [];
  graph.interactionCases = [];
  const atlas = projectCanonicalInteractions(graph, context);
  assert.deepEqual(atlas.cases, []);
  assert.deepEqual(atlas.analogies, []);
  assert.ok(atlas.perspectives.every((view) => view.nodeIds.length === 0 && view.edgeIds.length === 0));
});
