import assert from "node:assert/strict";

const roles = {
  definition: "definition", "quantity-definition": "quantity-definition",
  primitive: "model-primitive", "carrier-class": "carrier-class", "candidate-carrier-class": "carrier-class",
  "rule-family": "rule-pattern", "admission-rule": "rule-pattern", "selection-rule": "rule-pattern",
  context: "model-context", "model-assumption": "model-context", "variable-domain": "model-context",
  "transformation-claim": "hypothesis", hypothesis: "hypothesis", "hypothesized-effect": "hypothesis",
  "perturbation-protocol-candidate": "rule-pattern", "scoped-process": "scoped-phenomenon", "scoped-structure": "scoped-phenomenon"
};

/** Source accounting only: neither a formal evaluator nor a scientific oracle. */
export function validateSourceReadiness(data, dictionaries, proposalText) {
  const { graph, pilot, readiness, optics, visual, neural } = data;
  const sources = new Map(graph.sources.map((s) => [s.id, s]));
  for (const [id, expected] of [
    ["formal-core-proposal", "docs/ONTO2D_FORMAL_CORE.md"],
    ["source-readiness", "references/canonical/source-readiness.json"],
    ["source-readiness-guide", "references/canonical/SOURCE_READINESS.md"]
  ]) assert.equal(sources.get(id)?.path, expected, `Unbound readiness source: ${id}`);
  assert.equal(sources.get("formal-core-proposal").kind, "author-drafts", "A supplied proposal is not publication evidence");
  const sections = [...proposalText.matchAll(/^#{1,2} (\d+)\. /gm)].map((m) => Number(m[1]));
  assert.deepEqual(sections, Array.from({ length: 133 }, (_, i) => i), "Proposal section inventory changed; reassess read extent");
  for (const appendix of readiness.proposal.appendices) assert.ok(proposalText.includes(`# Appendix ${appendix} `), `Missing appendix ${appendix}`);
  assert.equal(new Set(readiness.proposal.findings.map((f) => f.id)).size, readiness.proposal.findings.length, "Duplicate proposal finding");
  for (const f of readiness.proposal.findings) for (const section of f.sections) assert.ok(sections.includes(section), `Unknown proposal section: ${section}`);

  const computationalStudies = new Set([...data.neural.studies, ...data.physics.studies]
    .filter((study) => study.studyType === "computational-analysis").map((study) => study.id));
  const claims = new Map(graph.claims.map((claim) => [claim.id, claim]));
  const modelContext = (node) => node.kind === "context" && node.claimIds.some((id) =>
    claims.get(id).contextIds?.some((context) => computationalStudies.has(context)));
  const nodes = [...graph.entities, ...graph.rules];
  assert.deepEqual(readiness.nodeRoles.map((r) => r.nodeId), nodes.map((n) => n.id), "Incomplete atlas role accounting");
  for (const [i, record] of readiness.nodeRoles.entries()) {
    const node = nodes[i];
    const expected = i >= graph.entities.length ? "rule-specification"
      : modelContext(node) ? "model-context"
      : (node.id.startsWith("ret:") || node.id.startsWith("opt:") || node.id.startsWith("vis:") || node.id.startsWith("neur:") || node.id.startsWith("phys:")) && node.kind === "context" ? "experimental-context" : roles[node.kind];
    assert.ok(expected, `Unreviewed atlas kind: ${node.kind}`);
    assert.equal(record.role, expected, `Role contradicts source kind: ${node.id}`);
    assert.deepEqual(record.claimIds, node.claimIds, `Role lost claim scope: ${node.id}`);
  }

  for (const relation of graph.relations) if (relation.carrier) {
    const carrier = relation.carrier;
    assert.deepEqual(carrier.contextIds, relation.contextIds, "Carrier preparation differs from relation");
    assert.equal(carrier.numericalAdmission, "none");
    assert.ok(carrier.interpretation, "Missing current carrier interpretation");
    for (const citation of carrier.citations) assert.ok(sources.get(citation.sourceId)?.review.locators.includes(citation.locator), "Unreviewed carrier source locator");
  }
}

export function compileSourceReadiness(readiness) {
  return { ...readiness, coverage: { atlasRecordCount: readiness.nodeRoles.length, numericalAdmissions: 0, physicalInstanceAdmissions: 0 } };
}
