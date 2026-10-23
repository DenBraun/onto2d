import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateOrganismalReview } from "../../models/causal-emergence/canonical/organismal.mjs";
import { ORGANISMAL_RECORDS, ORGANISMAL_CARD_SCOPES } from "../../models/causal-emergence/canonical/level-five.mjs";

const source = await loadCanonicalSource();
const originals = JSON.parse(await readFile(new URL("../../references/level-5.json", import.meta.url), "utf8"));
const published = new Set(["publication-supported", "literature-synthesis"]);
const ctx = (data) => Object.fromEntries(["sources", "claims", "entities", "relations"]
  .map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]));
const context = ctx(source);
const ledgers = (data) => [data.pilot, data.routing, data.optics, data.visual, data.neural,
  data.physics, data.biochemistry, data.cellular, data.organismal];
const studies = new Map(source.organismal.studies.map((record) => [record.id, record]));
const validate = (data) => validateOrganismalReview(data, ctx(data));
const claim = (id) => {
  const record = context.claims.get(id);
  assert.ok(record, `Missing expected scientific claim ${id}`);
  return record;
};
const study = (id) => {
  const record = studies.get(id);
  assert.ok(record, `Missing expected preparation ${id}`);
  return record;
};
const text = (record) => [record.system, record.preparation, record.observable, record.finding,
  record.statement, ...(record.limitations ?? [])].filter(Boolean).join(" ");

// These checks preserve scientific admission boundaries. They do not reproduce the experiments.
test("every original Level-5 card has explicit assertion decisions and every ordered parent occurrence", () => {
  assert.equal(originals.length, 34);
  assert.deepEqual(ORGANISMAL_CARD_SCOPES.map((card) => card.sourceIndex), originals.map((card) => card.Id));
  for (const [i, card] of ORGANISMAL_CARD_SCOPES.entries()) {
    assert.equal(card.code, `5.${i}`);
    assert.equal(card.originalName, originals[i].Name);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode),
      originals[i].Parents.map((parent) => parent.ParentCode));
    assert.ok(card.assertions.length && card.excludedDefaults.length);
    for (const entry of [...card.assertions, ...card.parentDispositions]) {
      assert.ok(["supported", "qualified", "excluded", "unresolved"].includes(entry.disposition));
      assert.ok(entry.reason.length && entry.claimIds.length);
      assert.ok(entry.claimIds.every((id) => context.claims.has(id)));
    }
    assert.ok(card.nodeIds.some((id) => context.entities.get(id).sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-5" && coordinate.locator === `/${i}`)));
  }
});

test("organismal records are integrated into the current graph, ledger and readiness with review obligations open", () => {
  const actual = { ...context, studies,
    comparisons: new Map(source.organismal.comparisons.map((record) => [record.id, record])),
    readiness: new Map(source.readiness.nodeRoles.map((record) => [record.nodeId, record])) };
  for (const [key, records] of Object.entries(ORGANISMAL_RECORDS)) for (const expected of records) {
    assert.deepEqual(actual[key].get(key === "readiness" ? expected.nodeId : expected.id), expected);
  }
  assert.equal(source.organismal.independentScientificReviewComplete, false);
  assert.deepEqual(source.organismal.checkIds, []);
  assert.doesNotThrow(() => validate(source));
});

test("published findings retain actual study citations and publication identity rather than counting assays as replications", () => {
  const allStudies = new Map(ledgers(source).flatMap((ledger) => ledger.studies).map((record) => [record.id, record]));
  const doiIds = new Map();
  for (const publication of ORGANISMAL_RECORDS.sources) {
    if (!publication.doi) continue; // The unsigned Hofer correction has no displayed DOI.
    const doi = publication.doi.toLowerCase();
    assert.ok(!doiIds.has(doi), `Duplicate new publication identity ${publication.id}/${doiIds.get(doi)}`);
    doiIds.set(doi, publication.id);
    assert.equal(source.graph.sources.filter((record) => record.doi?.toLowerCase() === doi).length, 1,
      `New publication aliases an existing DOI ${publication.id}`);
  }
  for (const record of ORGANISMAL_RECORDS.claims) {
    for (const citation of record.citations) assert.ok(context.sources.get(citation.sourceId).review.locators.includes(citation.locator));
    if (!published.has(record.status)) continue;
    assert.ok(record.contextIds.length);
    const publications = new Set(record.contextIds.map((id) => {
      const acquisition = allStudies.get(id);
      assert.ok(acquisition);
      assert.ok(record.citations.some((citation) => citation.sourceId === acquisition.sourceId
        && citation.role === "supports" && acquisition.reviewedLocators.includes(citation.locator)));
      return context.sources.get(acquisition.sourceId).doi?.toLowerCase() ?? acquisition.sourceId;
    }));
    assert.equal(record.status, publications.size > 1 ? "literature-synthesis" : "publication-supported");
  }
});

test("functional links use experimentally supported endpoints from the same preparation without construction defaults", () => {
  const effects = ORGANISMAL_RECORDS.relations.filter((relation) => relation.kind === "functional-support");
  assert.ok(effects.length);
  for (const relation of effects) {
    for (const id of relation.contextIds) {
      assert.equal(study(id).studyType, "primary-experiment");
      assert.doesNotMatch(study(id).readExtent, /abstract/i);
    }
    for (const id of [relation.source, relation.target]) assert.ok(context.entities.get(id).claimIds.some((cid) =>
      published.has(claim(cid).status) && relation.contextIds.every((sid) => claim(cid).contextIds?.includes(sid))));
    assert.equal(relation.Weight, undefined);
    assert.equal(relation.Quantization, undefined);
    if (relation.carrier) {
      assert.equal(relation.carrier.numericalAdmission, "none");
      assert.equal(relation.carrier.countingStatus, "unoperationalized");
      assert.deepEqual(relation.carrier.contextIds, relation.contextIds);
    }
  }
  for (const rule of source.graph.rules) assert.ok(![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds]
    .some((id) => id.startsWith("org:")));
});

test("source reading extent and analytical context roles remain explicit", () => {
  const roles = new Map(source.readiness.nodeRoles.map((record) => [record.nodeId, record]));
  for (const acquisition of source.organismal.studies) {
    const publication = context.sources.get(acquisition.sourceId);
    assert.equal(acquisition.readExtent, publication.review.extent);
    assert.ok(acquisition.reviewedLocators.every((locator) => publication.review.locators.includes(locator)));
    const methods = ORGANISMAL_RECORDS.claims.filter((record) => record.status === "method-contract" && record.contextIds?.includes(acquisition.id));
    assert.ok(methods.length);
    const node = ORGANISMAL_RECORDS.entities.find((record) => record.kind === "context"
      && methods.some((method) => record.claimIds.includes(method.id)));
    assert.ok(node);
    assert.equal(roles.get(node.id).role, acquisition.studyType === "computational-analysis" ? "model-context" : "experimental-context");
    assert.equal(roles.get(node.id).instanceAdmission, "none");
  }
  const abstract = study("orginfl-cani-antibiotic-abstract");
  assert.match(abstract.readExtent, /abstract/i);
  assert.ok(!ORGANISMAL_RECORDS.relations.some((relation) => relation.kind === "functional-support"
    && relation.contextIds.includes(abstract.id)));
});

test("Muir tumor labeling is one pre-steady-state endpoint and both reported protocol timing conflicts remain unknown", () => {
  const acquisition = study("muir2017-xenograft-cystine");
  const plasma = study("muir2017-plasma-cystine");
  assert.notEqual(plasma.id, acquisition.id);
  assert.equal(plasma.sourceId, acquisition.sourceId);
  assert.match(plasma.observable, /plasma cystine concentration/i);
  const evidence = text(acquisition);
  assert.match(evidence, /single|terminal|one.*(?:endpoint|harvest)/i);
  assert.match(evidence, /fractional.*label|label.*fraction/i);
  assert.match(evidence, /30.*45|thirty.*forty-five/i);
  assert.match(evidence, /300.*(?:6|six)|(?:6|six).*300/i);
  assert.match(evidence, /conflict|discrepan|inconsisten|unresolved/i);
  assert.match(evidence, /cannot.*(?:separat|distinguish)|not.*(?:separat|distinguish)/i);
  assert.doesNotMatch(acquisition.observable, /tumou?r[-\w ]{0,45}(?:time.?course|kinetic)/i);
  assert.doesNotMatch(acquisition.finding, /faster.*(?:measured|label)|measured.*faster/i);
});

test("Thevaranjan correction, anti-TNF dose-duration conflict and absence of demonstrated barrier rescue remain explicit", () => {
  const acquisition = study("orginfl-thevar-anti-tnf");
  const evidence = text(acquisition);
  assert.match(evidence, /50.*(?:ng|nanogram)/i);
  assert.match(evidence, /40.*(?:[µμ]g|microgram)/i);
  assert.match(evidence, /2.*3.*week|two.*three.*week/i);
  assert.match(evidence, /conflict|discrepan|inconsisten|unresolved/i);
  assert.match(claim("C-org-infl-anti-tnf-microbiota-not-permeability-rescue").statement,
    /no measurable.*permeability|no.*permeability.*(?:effect|rescue)|without.*barrier.*rescue/i);
  const correction = claim("D-org-infl-thevar-correction-boundary");
  assert.equal(correction.status, "definition");
  assert.match(correction.statement, /80 mg\/mL/);
  assert.match(correction.statement, /shared|simultaneous/i);
  assert.ok(![...studies.values()].some((record) => record.sourceId === "thevaranjan2018-permeability-correction"));
  for (const code of ["5.23", "5.31"]) {
    const scope = ORGANISMAL_CARD_SCOPES.find((card) => card.code === code);
    assert.ok(scope.assertions.some((entry) => /anti-TNF/i.test(entry.reason)));
    for (const entry of scope.assertions.filter((item) => /anti-TNF/i.test(item.reason))) {
      assert.doesNotMatch(entry.reason, /two-week|three-week/i,
        "A scope interpretation cannot select one of the source's conflicting durations");
    }
  }
});

test("displayed cardiac lineage tracing preserves embryonic induction before adult injury", () => {
  const acquisition = study("jopling2010-adult-lineage");
  assert.match(acquisition.preparation, /48 hpf/);
  assert.match(acquisition.preparation, /three months/);
  assert.match(acquisition.preparation, /Methods summary.*embryos\/adults/i);
  assert.match(acquisition.preparation, /not substituted.*embryonically induced/i);
  assert.match(acquisition.limitations.join(" "), /adult-label controls remain unread/i);
  assert.match(claim("C-org-cardiac-lineage-regeneration").statement, /label induced at 48 hpf/);
});

test("Paneth culture support and genetically qualified Paneth-loss renewal are different publications and preparations", () => {
  const culture = study("sato2011-paneth-reassociation"), pulse = study("sato2011-wnt-pulse-founding");
  const inVivo = study("kim2012-atoh1-paneth-loss");
  assert.equal(culture.sourceId, pulse.sourceId);
  assert.notEqual(culture.id, pulse.id);
  assert.notEqual(culture.sourceId, inVivo.sourceId);
  assert.match(culture.preparation, /500/);
  assert.match(pulse.preparation, /day 14/);
  assert.match(text(inVivo), /Atoh1.*Notch|Notch.*Atoh1/i);
  assert.match(claim("C-org-paneth-independent-renewal").statement, /without Paneth|Paneth-depleted/);
  const scope = ORGANISMAL_CARD_SCOPES.find((card) => card.code === "5.11");
  assert.ok(scope.assertions.some((entry) => entry.disposition === "excluded" && /abolishes identity/i.test(entry.topic)));
});

test("patient observation, controlled RNAi and selected-cell re-expression are separate organoid contexts", () => {
  const patient = study("lancaster2013-patient-organoid-observation");
  const rna = study("lancaster2013-cdk5rap2-perturbation");
  const rescue = study("lancaster2013-patient-reexpression");
  assert.equal(patient.studyType, "primary-observation");
  assert.equal(rna.studyType, "primary-experiment");
  assert.equal(new Set([patient.id, rna.id, rescue.id]).size, 3);
  assert.equal(new Set([patient.sourceId, rna.sourceId, rescue.sourceId]).size, 1);
  assert.match(text(patient), /not isogenic|not.*isogenic/i);
  assert.match(rna.preparation, /scrambled/);
  assert.match(text(rescue), /toxicity|toxic/i);
  assert.match(text(rescue), /survival|surviv/i);
});

test("ECM proliferation, organization and mechanotransduction sufficiency retain their contrary findings", () => {
  assert.match(claim("C-org-isc-growth-organization-failure").statement, /enhanced colony formation.*(?:depolarized|attenuated)/);
  assert.match(claim("C-org-isc-staged-organoid-formation").statement, /static.*(?:buckle|lose)/);
  assert.match(claim("C-org-yap-localization-insufficiency").statement, /similar ranges.*different|similar ranges.*despite/i);
  assert.match(claim("C-org-mammary-invasion-cooperation").statement, /alone.*does not reproduce invasion/);
  assert.notEqual(study("gjorevski2016-isc-expansion").id, study("gjorevski2016-dynamic-matrix").id);
});

test("repair closure, later regeneration and renewed injury do not collapse into one rescue", () => {
  assert.match(claim("C-org-closed-scarred-stump").statement, /closes.*(?:fails|fibrotic)/);
  assert.match(study("godwin2013-late-depletion").finding, /delays rather than blocks/);
  assert.match(study("godwin2013-reamputation-restart").limitations.join(" "), /not a macrophage-only/);
  assert.match(claim("C-org-cardiac-lineage-regeneration").statement, /pre-injury cardiomyocyte label/);
  assert.notEqual(study("godwin2013-early-depletion").sourceId, study("jopling2010-adult-lineage").sourceId);
});

test("Artal registration and component estimation remain bounded rather than a direct isolated-lens measurement", () => {
  const measured = study("artal2001-wavefronts"), model = study("artal2001-component-model");
  assert.equal(measured.studyType, "primary-observation");
  assert.equal(model.studyType, "computational-analysis");
  assert.equal(measured.sourceId, model.sourceId);
  assert.match(measured.preparation, /pupil geometric center/i);
  assert.match(measured.preparation, /corneal.pole/i);
  assert.match(text(measured), /unresolved|no unique registration/i);
  assert.match(context.sources.get(measured.sourceId).review.limit, /posterior cornea.*ocular media.*lens/);
  assert.equal(claim("C-org-ocular-optical-interface-unresolved").status, "unresolved");
});

test("Hofer corrected figures remain reporting corrections to one acquisition rather than new experiments", () => {
  const notice = context.sources.get("hofer2006-mosaic-erratum");
  assert.deepEqual(notice.authors, []);
  assert.equal(notice.doi, null);
  assert.match(notice.review.extent, /corrected-figure-inspection/);
  assert.match(notice.review.locators.join(" "), /Figures 6 and 9/);
  assert.equal(claim("D-org-hofer-figure-correction").status, "definition");
  assert.match(claim("D-org-hofer-figure-correction").statement, /duplicated Figure 6/);
  assert.equal(study("hofer2005-local-mosaic").sourceId, study("hofer2005-mosaic-analysis").sourceId);
  assert.equal(study("hofer2005-mosaic-analysis").studyType, "computational-analysis");
  assert.ok(![...studies.values()].some((record) => record.sourceId === notice.id));
});

test("CANTOS companion endpoints and overlapping Stanford analyses are not independent replications", () => {
  const trial = study("orginfl-cantos-main"), diabetes = study("orginfl-cantos-diabetes-companion");
  assert.notEqual(trial.sourceId, diabetes.sourceId);
  assert.match(text(diabetes), /NCT01327846/);
  assert.match(diabetes.limitations.join(" "), /dependent endpoints|same trial/i);
  assert.match(claim("C-org-infl-cantos-inflammation-not-diabetes-prevention").statement, /no reduction of incident diabetes/);
  assert.match(study("orginfl-alpert-acquisition").limitations.join(" "), /overlap.*Furman|Furman.*overlap/i);
  assert.match(study("orginfl-alpert-framingham-projection").preparation, /expression.*not direct|not direct.*IMM-AGE/i);
});

test("clinical biomarker induction cannot replace a failed phase-3 respiratory endpoint or erase infection harm", () => {
  const phase2 = study("orginfl-mannick-phase2b"), phase3 = study("orginfl-mannick-phase3");
  const biomarker = study("orginfl-mannick-phase3-biomarker");
  assert.equal(phase2.sourceId, phase3.sourceId);
  assert.equal(phase3.sourceId, biomarker.sourceId);
  assert.match(text(phase2), /fixed-sequence|gatekeeping/i);
  assert.match(claim("C-org-infl-torc1-phase3-null-clinical-endpoint").statement, /did not reduce/);
  assert.match(text(biomarker), /selected|selection/i);
  assert.match(claim("C-org-infl-torc1-gene-clinical-dissociation").statement, /primary.*null/);
  assert.match(claim("C-org-infl-cantos-infection-mortality-boundary").statement, /more fatal infection/);
});

test("neural-cycle reuse preserves original claims without manufacturing another Song publication or preparation", () => {
  const reused = context.entities.get("org:existing-neural-cycle-evidence");
  assert.ok(reused.claimIds.includes("C-pv-rgl-cycle-suppression"));
  assert.ok(reused.claimIds.includes("C-pv-rgl-cycle-increase"));
  assert.ok(reused.claimIds.includes("C-pv-isolation-residual-edu"));
  assert.ok(!ORGANISMAL_RECORDS.sources.some((record) => record.id === "song2012"));
  assert.ok(!source.organismal.studies.some((record) => record.sourceId === "song2012"));
  assert.match(claim("D-org-existing-neural-cycle-evidence").statement, /significant EdU residual/);
  assert.match(claim("C-org-neural-marker-not-proliferation").statement, /quiescence persist/);
  assert.match(claim("C-org-acute-repair-versus-lineage-retention").statement, /later.*retention declines/);
});

// Mutation checks target actual over-admission paths in the closed reviewed graph.
test("a non-prefixed cross-domain bridge touching an organismal node is rejected", () => {
  const changed = structuredClone(source);
  changed.graph.relations.push({ id: "other:unreviewed-organismal-transfer",
    source: "org:tissue-patterning-scope", target: "ret:rod-response", kind: "descriptive",
    role: "definition-dependency", assertion: "An unreviewed transfer between distinct preparations.",
    claimIds: ["D-org-tissue-patterning-scope-scope"] });
  assert.throws(() => validate(changed), /Unreviewed organismal relation or domain bridge/);
});

test("an additional organismal finding cannot enter by copying a real publication-supported claim", () => {
  const changed = structuredClone(source);
  const added = structuredClone(claim("C-org-radial-fate-domains"));
  added.id = "C-org-unreviewed-inference";
  changed.graph.claims.push(added);
  assert.throws(() => validate(changed), /Unreviewed organismal claim/);
});

test("renaming a finding cannot move unreviewed organismal evidence outside the admission boundary", () => {
  for (const id of ["P-org-unreviewed-inference", "unrelated:unreviewed-inference"]) {
    const changed = structuredClone(source);
    changed.graph.claims.push({ ...structuredClone(claim("C-org-radial-fate-domains")), id,
      statement: "This selected experiment establishes a universal physical construction rule." });
    assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal claim/);
  }
});

test("new identifiers cannot alias an owned publication by DOI or primary URL", () => {
  const original = context.sources.get("warmflash2014-geometric-patterning");
  for (const changes of [
    { doi: original.doi.toUpperCase(), url: `https://doi.org/${original.doi}` },
    { doi: null, url: original.url },
    { doi: null, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4341966" },
    { doi: null, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4341966/?render=1#fig1" },
    { doi: null, url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4341966/" },
    { doi: null, url: "https://europepmc.org/articles/PMC4341966" },
    { doi: null, url: "https://doi.org/10.1038/NMETH.3016" }
  ]) {
    const changed = structuredClone(source);
    changed.graph.sources.push({ ...structuredClone(original), ...changes, id: "unreviewed-publication-alias" });
    assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal publication alias/);
  }
});

test("catalogue and review files cannot acquire aliases or different source roles", () => {
  for (const id of ["legacy-5", "organismal-review"]) {
    const original = context.sources.get(id);
    for (const pathname of [original.path, `./${original.path}`, original.path.replace("/", "/./"),
      original.path.replace("/", "//")]) {
      const changed = structuredClone(source);
      changed.graph.sources.push({ ...structuredClone(original), id: "unreviewed-file-alias", path: pathname });
      assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal file alias/);
    }
  }
  const changed = structuredClone(source);
  changed.graph.sources.find((record) => record.id === "legacy-5").kind = "internal-review";
  assert.throws(() => validateCanonicalSource(changed), /Organismal source role changed/);
});

test("a new acquisition cannot reuse an organismal publication under another ledger", () => {
  const changed = structuredClone(source);
  const { system, ...copied } = structuredClone(study("warmflash2014-colony-geometry"));
  // Keep the historical ledger's schema valid so provenance closes this path.
  changed.pilot.studies.push({ ...copied, id: "unreviewed-acquisition-alias", organism: system,
    pmid: null, metadataCheckedAt: "2026-09-12" });
  assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal study or moved acquisition/);
});

test("organismal findings and source coordinates cannot be relabeled as Level-0 entities", () => {
  for (const coordinatesOnly of [false, true]) {
    const changed = structuredClone(source);
    const entity = structuredClone(context.entities.get("org:radial-fate-domains"));
    entity.id = "l0:unreviewed-organismal-alias";
    entity.level = 0;
    if (coordinatesOnly) entity.claimIds = [...changed.graph.entities[0].claimIds];
    changed.graph.entities.push(entity);
    const role = structuredClone(source.readiness.nodeRoles.find((row) => row.nodeId === "org:radial-fate-domains"));
    role.nodeId = entity.id;
    role.claimIds = entity.claimIds;
    changed.readiness.nodeRoles.splice(changed.graph.entities.length - 1, 0, role);
    changed.graph.rules[0].inputs[0].entityId = entity.id;
    assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal node/);
  }
});

test("a differently named relation cannot transfer organismal evidence between unrelated endpoints", () => {
  const changed = structuredClone(source);
  changed.graph.relations.push({ id: "other:unreviewed-organismal-inference",
    source: "l0:oscillatory-mode", target: "l0:crt-node", kind: "descriptive", role: "definition-dependency",
    assertion: "The organismal result proves this otherwise unrelated construction.",
    claimIds: ["D-org-tissue-patterning-scope-scope"] });
  assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal relation or domain bridge/);
});

test("a foreign comparison cannot borrow organismal studies as a new universal inference", () => {
  const changed = structuredClone(source);
  changed.pilot.comparisons.push({ ...structuredClone(changed.pilot.comparisons[0]),
    id: "unreviewed-comparison-alias", sourceIds: ["warmflash2014-colony-geometry"] });
  assert.throws(() => validateCanonicalSource(changed), /Unreviewed organismal comparison or cross-ledger inference/);
});

test("an existing organismal finding cannot become a construction rule's rationale", () => {
  const changed = structuredClone(source);
  const rule = changed.graph.rules[0];
  rule.claimIds = ["C-org-radial-fate-domains"];
  changed.readiness.nodeRoles.find((row) => row.nodeId === rule.id).claimIds = [...rule.claimIds];
  assert.throws(() => validateCanonicalSource(changed), /Organismal source records do not prove construction rules/);
});

test("a functional effect cannot substitute a concept label for its matched experimental endpoint", () => {
  const changed = structuredClone(source);
  const relation = changed.graph.relations.find((record) => record.id === "organismal:micropattern-geometry-input-supports-radial-fate-domains");
  relation.target = "org:tissue-patterning-scope";
  assert.throws(() => validate(changed), /Organismal relations changed/);
});

test("an unresolved retinal transfer cannot be promoted into established support", () => {
  const changed = structuredClone(source);
  const record = changed.graph.claims.find((row) => row.id === "C-org-ocular-optical-interface-unresolved");
  record.status = "publication-supported";
  record.statement = "The reviewed optical experiment establishes every developmental and physiological enabling mechanism.";
  assert.throws(() => validate(changed), /Organismal claims changed/);
});

test("a published finding cannot drop its preparation while retaining evidence status", () => {
  const changed = structuredClone(source);
  delete changed.graph.claims.find((record) => record.id === "C-org-radial-fate-domains").contextIds;
  assert.throws(() => validate(changed), /Organismal claims changed/);
});

test("a numerical carrier minimum cannot be introduced into an admitted organismal effect", () => {
  const changed = structuredClone(source);
  const effect = changed.graph.relations.find((record) => record.id === "organismal:micropattern-geometry-input-supports-radial-fate-domains");
  effect.carrier.numericalAdmission = "universal-minimum";
  effect.carrier.minimumCount = 2;
  assert.throws(() => validate(changed), /Organismal relations changed/);
});

test("a correction notice cannot replace its original experimental publication in a study", () => {
  const changed = structuredClone(source);
  changed.organismal.studies.find((record) => record.id === "hofer2005-local-mosaic").sourceId = "hofer2006-mosaic-erratum";
  assert.throws(() => validate(changed), /Organismal studies changed/);
});

test("a duplicate preparation identity in another ledger is rejected before it can masquerade as replication", () => {
  const changed = structuredClone(source);
  changed.cellular.studies.push(structuredClone(study("artal2001-wavefronts")));
  assert.throws(() => validate(changed), /Duplicate organismal study/);
});

test("observations of existing organisms cannot silently become construction-rule premises", () => {
  const changed = structuredClone(source);
  const rule = structuredClone(changed.graph.rules[0]);
  rule.id = "unreviewed-organism-construction";
  rule.inputs[0].entityId = "org:tissue-patterning-scope";
  changed.graph.rules.push(rule);
  assert.throws(() => validate(changed), /Organismal source records do not prove construction rules/);
});
