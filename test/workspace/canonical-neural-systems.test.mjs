import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { NEURAL_SYSTEMS_RECORDS, NEURAL_SYSTEMS_CARD_SCOPES, isReviewedNeuralSystemsDescription } from "../../models/causal-emergence/canonical/level-six.mjs";
import { neuralSystemsCards } from "../../models/causal-emergence/canonical/neural-systems.mjs";

const data = await loadCanonicalSource();
const originals = JSON.parse(await readFile(new URL("../../references/level-6.json", import.meta.url)));
const published = new Set(["publication-supported", "literature-synthesis"]);
const claims = new Map(data.graph.claims.map((claim) => [claim.id, claim]));
const sources = new Map(data.graph.sources.map((source) => [source.id, source]));
const studies = new Map(Object.values(data).flatMap((ledger) => ledger?.studies ?? []).map((study) => [study.id, study]));

function rejects(mutate, pattern) {
  const changed = structuredClone(data);
  mutate(changed);
  assert.throws(() => validateCanonicalSource(changed), pattern);
}

test("all 25 Level-6 cards retain substantive decisions and all 99 ordered parent occurrences", () => {
  assert.equal(originals.length, 25);
  assert.deepEqual(NEURAL_SYSTEMS_CARD_SCOPES.map((card) => card.sourceIndex), originals.map((card) => card.Id));
  assert.equal(NEURAL_SYSTEMS_CARD_SCOPES.reduce((sum, card) => sum + card.parentDispositions.length, 0), 99);
  for (const card of NEURAL_SYSTEMS_CARD_SCOPES) {
    assert.equal(card.originalName, originals[card.sourceIndex].Name);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode), originals[card.sourceIndex].Parents.map((parent) => parent.ParentCode));
    assert.ok(card.assertions.length && card.excludedDefaults.length);
    for (const entry of [...card.assertions, ...card.parentDispositions]) {
      assert.ok(entry.reason.length && entry.claimIds.every((id) => claims.has(id)));
    }
  }
});

test("complete decisions persist in canonical evidence while reused studies keep a single identity", () => {
  assert.deepEqual(data.neuralSystems.cards, neuralSystemsCards(data.graph));
  assert.equal(data.neuralSystems.independentScientificReviewComplete, false);
  assert.deepEqual(data.neuralSystems.checkIds, []);
  const ledgers = Object.values(data).filter((ledger) => Array.isArray(ledger?.studies));
  const ids = ledgers.flatMap((ledger) => ledger.studies.map((study) => study.id));
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(data.neural.studies.some((study) => study.id === "nimmerjahn2005"));
  assert.ok(!data.neuralSystems.studies.some((study) => study.id === "nimmerjahn2005"));
  for (const card of data.neuralSystems.cards) assert.ok(card.sourceIds.every((id) => sources.has(id)));
});

test("card, assertion and parent decisions cannot disappear or be silently promoted", () => {
  for (const mutate of [
    (d) => d.neuralSystems.cards.pop(),
    (d) => d.neuralSystems.cards[0].assertions.pop(),
    (d) => d.neuralSystems.cards[0].parentDispositions.reverse(),
    (d) => { d.neuralSystems.cards[0].parentDispositions[0].disposition = "supported"; },
    (d) => { d.neuralSystems.cards[0].excludedDefaults = []; }
  ]) rejects(mutate);
});

test("the vascular card distinguishes its named topic from copied immune prose and dependencies", () => {
  const card = NEURAL_SYSTEMS_CARD_SCOPES.find((card) => card.code === "6.16");
  assert.equal(originals[16].Name, "Neurovascular Coupling");
  assert.match(originals[16].Description, /^Neuro–Immune Interactions/);
  assert.match(card.scope, /vascular|blood flow/i);
  assert.ok(card.assertions.some((assertion) => /immune|description|title|copy/i.test(assertion.topic + assertion.reason)));
  assert.equal(card.parentDispositions.length, 13);
  assert.ok(card.parentDispositions.every((parent) => parent.disposition !== "supported"));
});

test("scope links organize evidence without converting nulls, hypotheses or observations to physical support", () => {
  const descriptions = NEURAL_SYSTEMS_RECORDS.relations.filter((relation) => relation.role === "definition-dependency");
  assert.ok(descriptions.some((relation) => relation.source.startsWith("neur:")));
  assert.ok(descriptions.some((relation) => relation.source.startsWith("vis:")));
  for (const relation of descriptions) {
    assert.equal(relation.kind, "descriptive");
    assert.ok(relation.claimIds.some((id) => claims.get(id).status === "definition"));
    assert.equal(isReviewedNeuralSystemsDescription(relation), true);
    assert.equal(isReviewedNeuralSystemsDescription({ ...relation, kind: "functional-support" }), false);
  }
  const relation = descriptions.find((relation) => relation.source.startsWith("neur:"));
  rejects((d) => {
    const changed = d.graph.relations.find((record) => record.id === relation.id);
    changed.kind = "functional-support"; changed.role = "scoped-operating-support"; changed.contextIds = ["nimmerjahn2005"];
  });
  rejects((d) => d.graph.relations.push({ ...relation, id: "neural-systems:unreviewed-bridge" }));
});

test("new primary findings cite the actual preparation and do not claim numerical reproduction", () => {
  for (const source of NEURAL_SYSTEMS_RECORDS.sources) assert.ok(NEURAL_SYSTEMS_RECORDS.claims.some((claim) =>
    claim.citations.some((citation) => citation.sourceId === source.id)), `Orphaned new source ${source.id}`);
  for (const claim of NEURAL_SYSTEMS_RECORDS.claims) {
    assert.deepEqual(claim.checkIds, []);
    if (!published.has(claim.status)) continue;
    assert.ok(claim.contextIds.length);
    for (const id of claim.contextIds) {
      const study = studies.get(id);
      assert.ok(study && claim.citations.some((citation) => citation.sourceId === study.sourceId
        && citation.role === "supports" && study.reviewedLocators.includes(citation.locator)));
    }
  }
  for (const relation of NEURAL_SYSTEMS_RECORDS.relations.filter((relation) => relation.kind === "functional-support")) {
    for (const id of relation.contextIds) {
      assert.equal(studies.get(id).studyType, "primary-experiment");
      assert.doesNotMatch(studies.get(id).readExtent, /abstract/i);
    }
  }
});

test("symbolic scope exposes the actual Fodor bibliography without claiming to have read its chapters", () => {
  const card = data.neuralSystems.cards.find((card) => card.code === "6.19");
  assert.ok(card.sourceIds.includes("fodor1975-language-thought"));
  const source = sources.get("fodor1975-language-thought");
  assert.match(source.review.extent, /bibliographic-metadata-only/);
  assert.ok(card.claimIds.some((id) => claims.get(id).citations.some((citation) =>
    citation.sourceId === source.id && citation.role === "provenance" && source.review.locators.includes(citation.locator))));
});

test("empirical placebo nulls retain publication support rather than a synthetic negative-case witness", () => {
  const nulls = NEURAL_SYSTEMS_RECORDS.claims.filter((claim) => /(?:suggestion|physiology|release|intracellular)-null$/.test(claim.id));
  assert.ok(nulls.length >= 5);
  for (const claim of nulls) {
    assert.equal(claim.status, "publication-supported");
    assert.deepEqual(claim.checkIds, []);
    assert.ok(claim.contextIds.length);
    assert.match(claim.statement, /nonsignificant|no significant|no detected/i);
  }
  assert.ok(!NEURAL_SYSTEMS_RECORDS.claims.some((claim) => claim.status === "case-negative"));
});

test("asthma symptom reports, airflow and conditioned immune responses remain distinct endpoints", () => {
  const card = NEURAL_SYSTEMS_CARD_SCOPES.find((card) => card.code === "6.21");
  const text = card.assertions.map((entry) => entry.topic + " " + entry.reason).join(" ");
  assert.match(text, /FEV1|spirometr|airflow/i);
  assert.match(text, /condition/i);
  assert.match(text, /expectation/i);
  assert.match(text, /immune/i);
  assert.ok(card.assertions.some((entry) => entry.disposition === "excluded" || entry.disposition === "unresolved"));
  const contexts = data.neuralSystems.studies.filter((study) => study.sourceId.includes("wechsler"));
  assert.ok(contexts.length >= 2);
  assert.ok(new Set(contexts.map((study) => study.observable)).size >= 2);
});

test("the endpoint-transfer comparison supports a bounded difference rather than the universal alternative", () => {
  const comparison = data.neuralSystems.comparisons.find((comparison) => comparison.id === "cog:expectation-endpoint-transfer");
  assert.match(comparison.candidate, /respond differently/);
  assert.match(comparison.alternative, /same physiological effect/);
  assert.equal(comparison.result, "conditional-support");
  assert.ok(comparison.claimIds.some((id) => id.includes("suggestion-null")));
  assert.ok(comparison.claimIds.some((id) => id.includes("conditioned-response")));
});

test("Denman preparation is explicitly anesthetized without claiming a complete source replay", () => {
  const study = data.visual.studies.find((study) => study.id === "denman2015");
  assert.match(study.preparation, /isoflurane/);
  assert.match(study.preparation, /1\.2%/);
  assert.match(study.preparation, /distinct from awake/);
  assert.equal(study.readExtent, sources.get("denman2015").review.extent);
  assert.ok(study.reviewedLocators.includes("Materials and Methods: Procedures, Expression of opsins and Acute experiment preparation"));
  assert.doesNotMatch(study.readExtent, /complete-full-text/);
});

test("renamed findings and source aliases cannot bypass Level-6 admission", () => {
  const finding = NEURAL_SYSTEMS_RECORDS.claims.find((claim) => claim.status === "publication-supported");
  for (const id of ["P-cog-invented", "unscoped-finding"]) rejects((d) => d.graph.claims.push({ ...finding, id,
    statement: "A source-specific observation proves a universal construction law." }));
  const publication = sources.get(studies.get(finding.contextIds[0]).sourceId);
  for (const alias of [
    { doi: publication.doi.toUpperCase() },
    { doi: null, url: `https://doi.org/${publication.doi}` },
    { doi: null, url: publication.url.replace(/\/$/, "") + "?review=copy" }
  ]) rejects((d) => d.graph.sources.push({ ...publication, ...alias, id: "unreviewed-publication-copy" }), /publication alias/);
});

test("new arbitrary claims or acquisitions cannot reuse reviewed papers to manufacture support", () => {
  const existing = claims.get("C-microglial-surveillance-protection");
  rejects((d) => d.graph.claims.push({ ...existing, id: "unreviewed-generalization", statement: "All microglia necessarily protect all neurons." }), /reused-source claim/);
  rejects((d) => d.neuralSystems.studies.push({ ...d.neuralSystems.studies[0], id: "unreviewed-acquisition" }));
  rejects((d) => d.neuralSystems.studies.push({ ...d.neuralSystems.studies[0], id: "borrowed-old-acquisition",
    sourceId: "nimmerjahn2005", doi: sources.get("nimmerjahn2005").doi }), /reused-source acquisition/);
});

test("comparisons retain ledger ownership when they reference new or reused Level-6 evidence", () => {
  // The retinal pilot's sourceIds denote acquisitions rather than publication
  // records. Neither identifier permits an unreviewed inference in that ledger.
  for (const id of ["amanzio1999-expectation-antagonism", "benedetti2003-pain-suggestions", "hanks2006"]) {
    rejects((d) => d.pilot.comparisons.push({ ...d.pilot.comparisons[1],
      id: "unreviewed-cross-ledger-inference", sourceIds: [id],
      candidate: "One source-specific response identifies a universal mechanism."
    }), /Unreviewed neural-systems comparison/);
  }
  rejects((d) => d.neural.comparisons.push({ ...d.neural.comparisons[1],
    id: "unreviewed-reused-publication-inference", sourceIds: ["hanks2006"]
  }), /Unreviewed neural-systems comparison/);
  rejects((d) => {
    const comparison = d.neural.comparisons.find((entry) => entry.id === "neural-lip-causality");
    comparison.candidate = "The cited LIP response uniquely identifies a universally necessary accumulator.";
  }, /Unreviewed neural-systems comparison/);
  rejects((d) => {
    const comparison = d.neural.comparisons.find((entry) => entry.id === "neural-lip-causality");
    comparison.sourceIds = ["amanzio1999-placebo-dissection"];
  }, /Unreviewed neural-systems comparison/);
  rejects((d) => {
    const position = d.visual.comparisons.findIndex((entry) => entry.id === "visual-map-universality");
    d.pilot.comparisons.push(d.visual.comparisons.splice(position, 1)[0]);
  }, /Unreviewed neural-systems comparison/);
  const reordered = structuredClone(data);
  const position = reordered.neural.comparisons.findIndex((entry) => entry.id === "neural-lip-causality");
  reordered.neural.comparisons[position] = Object.fromEntries(Object.entries(reordered.neural.comparisons[position]).reverse());
  assert.doesNotThrow(() => validateCanonicalSource(reordered), "Property order changes no comparison meaning");
});

test("institutional bibliography identities preserve resource query fields and reject reordered tracking aliases", () => {
  const bibliography = sources.get("fodor1975-language-thought");
  const changed = structuredClone(data);
  const distinct = new URL(bibliography.url);
  distinct.searchParams.set("id", "600:another-publications");
  changed.graph.sources.push({ ...bibliography, id: "distinct-institutional-bibliography",
    title: "A separate institutional bibliography", url: distinct.href });
  assert.doesNotThrow(() => validateCanonicalSource(changed));
  for (const url of [
    "https://philosophy.rutgers.edu/research-programs-243/?view=article&id=599:jfodor-publications&catid=183",
    "https://philosophy.rutgers.edu/research-programs-243?view=article&catid=183&id=599%3Ajfodor-publications&utm_source=review#publications"
  ]) rejects((d) => d.graph.sources.push({ ...bibliography, id: "aliased-institutional-bibliography", url }), /publication alias/);
});

test("neural findings, hypotheses and catalogue-only rationale cannot become construction rules", () => {
  const scope = NEURAL_SYSTEMS_RECORDS.entities[0];
  for (const id of [scope.claimIds[0], "C-ng-memory-route"]) rejects((d) => { d.graph.rules[0].claimIds = [id]; }, /do not prove construction rules/);
  rejects((d) => { d.graph.rules[0].inputs[0].entityId = "neur:ng-memory-route"; }, /do not prove construction rules/);
  rejects((d) => {
    const original = d.graph.entities.find((entity) => entity.id === "neur:ng-memory-route");
    const clone = { ...original, id: "l0:relabeled-neural-hypothesis", level: 0 };
    d.graph.entities.push(clone);
    const role = d.readiness.nodeRoles.find((role) => role.nodeId === original.id);
    d.readiness.nodeRoles.splice(d.graph.entities.length - 1, 0, { ...role, nodeId: clone.id });
    d.graph.rules[0].inputs[0].entityId = clone.id;
  }, /do not prove construction rules/);
  rejects((d) => {
    const definition = { ...d.graph.claims.find((claim) => claim.id === scope.claimIds[0]), id: "catalogue-only-rule-rationale",
      citations: [{ sourceId: "legacy-6", locator: "/0", role: "provenance", note: "A catalogue assertion is not empirical support." }] };
    d.graph.claims.push(definition); d.graph.rules[0].claimIds = [definition.id];
  }, /do not prove construction rules/);
});

test("scope source identities, reading limits and declared physical admission cannot drift", () => {
  for (const mutate of [
    (d) => { d.graph.sources.find((source) => source.id === "neural-systems-review").kind = "research-publication"; },
    (d) => { d.neuralSystems.independentScientificReviewComplete = true; },
    (d) => { d.neuralSystems.studies[0].readExtent = "complete-raw-data-reproduction"; },
    (d) => { d.graph.entities.find((entity) => entity.id.startsWith("cog:")).Weight = 0.5; }
  ]) rejects(mutate);
});

test("only Level-7 source cards remain pending after complete Level-6 disposition", async () => {
  const pending = JSON.parse(await readFile(new URL("../../references/canonical/pending-review.json", import.meta.url)));
  assert.equal(pending.cards.length, 25);
  assert.ok(pending.cards.every((card) => card.sourcePath === "references/level-7.json"));
});
