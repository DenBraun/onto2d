import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateCellularReview } from "../../models/causal-emergence/canonical/cellular.mjs";
import { CELLULAR_RECORDS, CELLULAR_CARD_SCOPES } from "../../models/causal-emergence/canonical/level-four.mjs";

const source = await loadCanonicalSource();
const originals = JSON.parse(await readFile(new URL("../../references/level-4.json", import.meta.url), "utf8"));
const published = new Set(["publication-supported", "literature-synthesis"]);
const ctx = (data) => Object.fromEntries(["sources", "claims", "entities", "relations"]
  .map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]));
const validate = (data) => validateCellularReview(data, ctx(data));
const claim = (id) => source.graph.claims.find((record) => record.id === id);
const studies = new Map(source.cellular.studies.map((record) => [record.id, record]));

test("all original Level-4 cards have source-bound scopes, assertion decisions and complete ordered parents", () => {
  assert.equal(originals.length, 33);
  assert.equal(CELLULAR_CARD_SCOPES.length, originals.length);
  assert.deepEqual(CELLULAR_CARD_SCOPES.map((card) => card.sourceIndex), originals.map((card) => card.Id));
  for (const [i, card] of CELLULAR_CARD_SCOPES.entries()) {
    assert.equal(card.originalName, originals[i].Name);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode),
      originals[i].Parents.map((parent) => parent.ParentCode));
    assert.ok(card.assertions.length && card.excludedDefaults.length);
    assert.ok(card.assertions.every((assertion) => assertion.reason.length && assertion.claimIds.length));
    assert.ok(card.nodeIds.some((id) => ctx(source).entities.get(id).sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-4" && coordinate.locator === `/${i}`)));
  }
});

test("canonical graph, study ledger and readiness retain every reviewed cellular record without loss", () => {
  const actual = { ...ctx(source),
    studies, comparisons: new Map(source.cellular.comparisons.map((record) => [record.id, record])),
    readiness: new Map(source.readiness.nodeRoles.map((record) => [record.nodeId, record])) };
  for (const [key, rows] of Object.entries(CELLULAR_RECORDS)) for (const expected of rows) {
    assert.deepEqual(actual[key].get(key === "readiness" ? expected.nodeId : expected.id), expected);
  }
  assert.equal(source.cellular.independentScientificReviewComplete, false);
  assert.deepEqual(source.cellular.checkIds, []);
  assert.doesNotThrow(() => validate(source));
});

test("cellular findings retain their actual publication dependence and reviewed source locators", () => {
  const allStudies = new Map([source.pilot, source.routing, source.optics, source.visual,
    source.neural, source.physics, source.biochemistry, source.cellular]
    .flatMap((review) => review.studies).map((record) => [record.id, record]));
  const sources = ctx(source).sources;
  for (const record of CELLULAR_RECORDS.claims) {
    for (const citation of record.citations) assert.ok(sources.get(citation.sourceId).review.locators.includes(citation.locator));
    if (!published.has(record.status)) continue;
    assert.ok(record.contextIds.length);
    const publications = new Set(record.contextIds.map((id) => {
      const study = allStudies.get(id);
      assert.ok(record.citations.some((citation) => citation.sourceId === study.sourceId
        && citation.role === "supports" && study.reviewedLocators.includes(citation.locator)));
      return study.sourceId;
    }));
    assert.equal(record.status, publications.size > 1 ? "literature-synthesis" : "publication-supported");
  }
  for (const study of studies.values()) {
    const publication = sources.get(study.sourceId);
    assert.equal(study.readExtent, publication.review.extent);
    assert.ok(study.reviewedLocators.every((locator) => publication.review.locators.includes(locator)));
  }
});

test("functional cellular support has matched preparation endpoints and no numerical construction defaults", () => {
  const { entities, claims } = ctx(source);
  const effects = CELLULAR_RECORDS.relations.filter((relation) => relation.kind === "functional-support");
  assert.ok(effects.length > 0);
  for (const relation of effects) {
    for (const id of [relation.source, relation.target]) assert.ok(entities.get(id).claimIds.some((cid) =>
      published.has(claims.get(cid).status) && relation.contextIds.every((studyId) => claims.get(cid).contextIds?.includes(studyId))));
    assert.equal(relation.Weight, undefined);
    assert.equal(relation.Quantization, undefined);
    if (relation.carrier) {
      assert.equal(relation.carrier.numericalAdmission, "none");
      assert.equal(relation.carrier.countingStatus, "unoperationalized");
    }
  }
  assert.ok(source.graph.rules.every((rule) => ![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds]
    .some((id) => id.startsWith("cell:"))));
});

test("AMPK kinase evidence and nutrient-specific autophagic flux remain different preparations", () => {
  const activation = claim("C-cell-kim2011-ulk1-phosphorylation-response");
  const flux = claim("C-cell-nwadike2018-nutrient-flux-contrast-response");
  assert.notEqual(studies.get(activation.contextIds[0]).sourceId, studies.get(flux.contextIds[0]).sourceId);
  assert.match(activation.statement, /AMPK-dependent Ulk1 activation/);
  assert.match(flux.statement, /can suppress initiation and lysosomal activation/);
  assert.match(flux.statement, /LC3-II accumulation alone/);
  const lysosomeLocator = studies.get(flux.contextIds[0]).reviewedLocators.find((locator) => /Figure 10A-L/.test(locator));
  assert.ok(lysosomeLocator);
  assert.ok(flux.citations.some((citation) => citation.locator === lysosomeLocator && citation.role === "supports"));
  assert.ok(activation.limitations.some((limit) => /flux panel.*unread/.test(limit)));
  assert.equal(claim("C-cell-ampk-autophagy-transfer").status, "unresolved");
  assert.equal(source.cellular.comparisons.find((comparison) => comparison.id === "cellular-ampk-autophagy-cross-preparation").result,
    "inconclusive");
});

test("equal-cumulative p53 evidence measures gene expression separately from later fate outcomes", () => {
  const response = claim("C-cell-purvis2012-p53-dynamics-response");
  const study = studies.get(response.contextIds[0]);
  assert.match(study.preparation, /FISH.*pulsed cells at 21 hours.*sustained cells at 12 hours/);
  assert.match(study.preparation, /later proliferation\/arrest assays.*three-day signaling schedules/);
  assert.match(response.statement, /CDKN1A\/PML expression/);
  assert.match(response.statement, /does not directly compare later cell fate at matched cumulative exposure/);
  assert.ok(response.limitations.some((limit) => /different elapsed times, not directly against later senescence probabilities/.test(limit)));
});

test("apoptotic recovery distinguishes same-cell liver morphology from HeLa execution-reporter evidence", () => {
  const morphology = claim("C-cell-tang2012-apoptotic-washout-response");
  const execution = claim("C-cell-tang2012-hela-execution-recovery-response");
  assert.notDeepEqual(morphology.contextIds, execution.contextIds);
  assert.equal(studies.get(morphology.contextIds[0]).sourceId, studies.get(execution.contextIds[0]).sourceId);
  assert.match(morphology.statement, /morphology and mitochondrial fragmentation/);
  assert.doesNotMatch(morphology.statement, /caspase.*activation/);
  assert.match(execution.statement, /caspase-biosensor activation/);
  const executionStudy = studies.get(execution.contextIds[0]);
  assert.match(executionStudy.preparation, /Figure 1G same-cell imaging after 3 hours/);
  assert.match(executionStudy.preparation, /Figure 1H population quantification.*5 hours/);
  assert.match(executionStudy.preparation, /population fractions do not quantify the exact imaged cells/);
  assert.ok(execution.limitations.some((limit) => /3-hour Figure 1G.*5-hour Figure 1H/.test(limit)));
  const card = CELLULAR_CARD_SCOPES.find((scope) => scope.sourceIndex === 19);
  assert.equal(card.assertions.find((assertion) => assertion.topic === "Apoptotic commitment overrides all molecular survival and repair").disposition,
    "excluded");
});

test("senescence secretion, fibroblast arrest and satellite-cell rescue are independent endpoints", () => {
  const secretion = studies.get("laberge2015-sasp-translation");
  const arrest = studies.get("laberge2015-arrest-boundary");
  const rescue = studies.get("garciaprat2016-geriatric-rescue");
  assert.equal(secretion.sourceId, arrest.sourceId);
  assert.notEqual(arrest.sourceId, rescue.sourceId);
  assert.match(arrest.finding, /does not reverse/);
  assert.match(rescue.finding, /finite assays/);
  assert.match(studies.get("garciaprat2016-young-atg7-loss").finding, /rapamycin does not rescue/);
  assert.match(rescue.limitations.join(" "), /not independent replications|not.*organismal rejuvenation/);
});

test("natural lineage profiles and engineered neuronal function do not silently prove identical genomes", () => {
  const natural = studies.get("ohnishi2014-icm-lineage");
  const engineered = studies.get("vierbuchen2010-neuronal-conversion");
  assert.match(natural.limitations.join(" "), /not.*identical whole genomes/);
  assert.match(engineered.limitations.join(" "), /does not demonstrate unchanged nucleotide sequence|does not prove that nucleotide sequence is unchanged/);
  assert.match(engineered.preparation, /lentiviruses/);
  const identity = CELLULAR_CARD_SCOPES.find((scope) => scope.sourceIndex === 5).assertions.find((assertion) =>
    assertion.topic === "Distinct functional states within genetically identical cells without sequence change");
  assert.equal(identity.disposition, "qualified");
});

test("a finding cannot lose its preparation while retaining publication-supported status", () => {
  const changed = structuredClone(source);
  delete changed.graph.claims.find((record) => record.id === "C-cell-kim2011-ulk1-phosphorylation-response").contextIds;
  assert.throws(() => validate(changed), /Cellular claims changed/);
});

test("an unreviewed cellular domain bridge is rejected", () => {
  const changed = structuredClone(source);
  changed.graph.relations.push({ id: "cellular:unreviewed-cross-domain",
    source: "cell:cellular-signaling-scope", target: "ret:rod-response", kind: "descriptive",
    role: "definition-dependency", assertion: "Unreviewed cross-system transfer.",
    claimIds: ["D-cell-cellular-signaling-boundary"] });
  assert.throws(() => validate(changed), /Unreviewed cellular relation or domain bridge/);
});

test("an effect cannot replace an empirically matched endpoint with an arbitrary cellular label", () => {
  const changed = structuredClone(source);
  const effect = changed.graph.relations.find((relation) => relation.kind === "functional-support" && relation.id.startsWith("cellular:"));
  effect.target = "cell:cellular-signaling-scope";
  assert.throws(() => validate(changed), /Cellular relations changed/);
});

test("an unresolved cellular mechanism cannot be promoted to established publication support", () => {
  const changed = structuredClone(source);
  const mechanism = changed.graph.claims.find((record) => record.id === "C-cell-ampk-autophagy-transfer");
  mechanism.status = "publication-supported";
  mechanism.statement = "AMPK always activates autophagic degradation in every cellular state.";
  assert.throws(() => validate(changed), /Cellular claims changed/);
});

test("GCAP expression, homogenate activity and intact-rod kinetics retain separate same-publication contexts", () => {
  const expression = studies.get("mendez2001-gcap-expression");
  const enzyme = studies.get("mendez2001-gcap-enzyme");
  const current = studies.get("mendez2001-gcap-current");
  assert.deepEqual(new Set([expression.sourceId, enzyme.sourceId, current.sourceId]), new Set(["mendez2001-gcap"]));
  assert.equal(new Set([expression.id, enzyme.id, current.id]).size, 3);
  assert.match(expression.finding, /not a dose-matched/);
  assert.match(enzyme.finding, /restores maximal homogenate activity/);
  assert.match(current.finding, /does not restore the early fast recovery/);
  assert.match(current.finding, /non-GCAP adaptation remains/);
  assert.match(current.preparation, /mean-variance scaling/);
  assert.equal(claim("C-cell-phototransduction-transfer-unresolved").status, "unresolved");
});

test("the Fung phototransduction correction is the actual left-column notice and does not upgrade unread methods", () => {
  const correction = ctx(source).sources.get("fung1981-correction");
  assert.equal(correction.doi, "10.1073/pnas.78.8.5260-a");
  assert.match(correction.review.locators.join(" "), /left-column/);
  assert.match(correction.review.limit, /IgD/);
  assert.match(correction.review.limit, /original 1981 paper remains abstract-only/);
  const boundary = claim("D-cell-fung-correction");
  assert.match(boundary.statement, /first can proceed without phosphodiesterase/);
  assert.match(boundary.statement, /second without photolyzed rhodopsin/);
  assert.ok(!source.graph.relations.some((relation) => relation.kind === "functional-support"
    && relation.claimIds.includes(boundary.id)));
});

test("metabolic acquisition and inferred internal flux do not become the same directly measured observable", () => {
  const acquisition = studies.get("hackett2016-chemostat-acquisition");
  const inference = studies.get("hackett2016-flux-inference");
  assert.equal(acquisition.sourceId, inference.sourceId);
  assert.equal(acquisition.studyType, "primary-experiment");
  assert.equal(inference.studyType, "computational-analysis");
  assert.match(acquisition.finding, /supplying inputs for the separate source flux/);
  assert.match(inference.limitations.join(" "), /Fluxes and control attribution are inferred/);
  assert.equal(source.readiness.nodeRoles.find((record) => record.nodeId === "cell:hackett2016-flux-inference-context").role,
    "model-context");
  assert.equal(claim("C-cell-cell-state-causal-identification").status, "unresolved");
});

test("the Laberge author correction preserves shRNA and vehicle controls rather than inventing combined interventions", () => {
  const correction = ctx(source).sources.get("laberge2021-author-correction");
  assert.equal(correction.doi, "10.1038/s41556-021-00655-4");
  assert.match(correction.review.limit, /GFP shRNA to Figure 6e/);
  assert.match(correction.review.limit, /DMSO to Figure 6g/);
  assert.match(claim("D-cell-laberge-corrected-controls").statement, /does not establish unreported rapamycin\/shRNA epistasis/);
  assert.match(studies.get("laberge2015-arrest-boundary").preparation, /not a combined drug\/shRNA intervention/);
  for (const id of ["laberge2015-sasp-translation", "laberge2015-arrest-boundary"]) {
    assert.match(studies.get(id).correctionCheck, /33824512/);
  }
  for (const id of ["C-cell-laberge2015-sasp-translation-response", "C-cell-laberge2015-arrest-boundary-response"]) {
    assert.ok(claim(id).citations.some((citation) => citation.sourceId === correction.id && citation.role === "limits"));
  }
});

test("adaptation is input-dependent and stress reporters do not identify all underlying damage", () => {
  const step = studies.get("muzzey2009-step-osmotic-response");
  const ramp = studies.get("muzzey2009-ramp-feedback-constraint");
  assert.equal(step.sourceId, ramp.sourceId);
  assert.match(step.finding, /returns near its pre-step level/);
  assert.match(ramp.finding, /Ramp inputs do not show the same perfect adaptation/);
  assert.equal(claim("C-cell-hog1-integrator-implementation").status, "unresolved");
  assert.match(studies.get("krakowiak2018-heat-feedback").finding, /Reporter persistence and aggregate clearance can dissociate/);
  assert.match(studies.get("orij2012-ph-growth").finding, /rather than an invariant pH set point/);
});

test("sterile IL-1alpha signaling separates the necrotic sender from mesothelial receiver requirements", () => {
  const sender = claim("C-cell-necrotic-il1alpha-input");
  const receiver = claim("C-cell-mesothelial-il1r-output");
  assert.match(sender.statement, /Il1a-deficient donor extracts/);
  assert.match(receiver.statement, /Recipient Il1r or MyD88 deficiency/);
  assert.match(receiver.statement, /Tlr2\/Tlr4-, Asc- and caspase-1-deficient.*retain/);
  assert.doesNotMatch(receiver.statement, /Nlrp3-deficient|NLRP3 knockout/);
  assert.deepEqual(sender.contextIds, receiver.contextIds);
  const inVivo = studies.get("eigenbrod2008-peritoneal-recruitment");
  assert.notEqual(inVivo.id, sender.contextIds[0]);
  assert.match(inVivo.limitations.join(" "), /multicellular\/in-vivo outcome/);
});

test("canonical low-potassium NLRP3 output retains prior priming, genotype and AIM2 exceptions", () => {
  const context = studies.get("munoz2013-primed-bmdm-ion-gating");
  const response = claim("C-cell-nlrp3-caspase-il1beta-output");
  assert.match(context.preparation, /LPS priming/);
  assert.match(context.preparation, /Isosmotic/);
  assert.match(response.statement, /AIM2.*Nlrp3-R258W.*do not share the same K requirement/);
  assert.match(response.statement, /not universal necessary components/);
  assert.ok(context.limitations.some((limit) => /not a universal molecular threshold/.test(limit)));
});

test("tonic interferon production and recipient competence remain separable with unresolved assay timing", () => {
  const publication = ctx(source).sources.get("gough2010-tonic-ifnb-stat1");
  assert.equal(publication.authors.length, 11);
  assert.ok(!publication.authors.some((author) => /Skip W\.? Virgin/.test(author)));
  const input = claim("C-cell-tonic-ifnb-regulated-input");
  const output = claim("C-cell-stat1-ifng-response-competence");
  assert.match(input.statement, /IFNAR-deficient recipients fail/);
  assert.match(output.statement, /STAT1 re-expression in IFNAR1-deficient MEFs rescues/);
  assert.match(output.statement, /without requiring prior inflammasome activation/);
  const context = studies.get("gough2010-fibroblast-tonic-priming");
  assert.match(context.preparation, /24-hour viral assay.*Methods gives 16 hours/);
  assert.match(context.preparation, /timing is unresolved/);
});

test("the macrophage-spectrum bibliography retains the actual author list and inferred networks remain nonphysical", () => {
  const publication = ctx(source).sources.get("xue2014-macrophage-spectrum");
  assert.equal(publication.authors.length, 21);
  assert.ok(publication.authors.includes("Astrid Draffehn"));
  assert.ok(publication.authors.includes("Inga Quester"));
  assert.ok(!publication.authors.some((author) => /Andreas Draffehn/.test(author)));
  const inference = claim("C-cell-macrophage-network-inference-boundary");
  assert.match(inference.statement, /analytical associations/);
  const measured = studies.get("xue2014-human-macrophage-stimuli");
  const computed = studies.get("xue2014-network-analysis");
  assert.equal(measured.sourceId, computed.sourceId);
  assert.equal(measured.studyType, "primary-experiment");
  assert.equal(computed.studyType, "computational-analysis");
  assert.deepEqual(inference.contextIds, [computed.id]);
  assert.equal(inference.status, "publication-supported");
  assert.equal(source.readiness.nodeRoles.find((record) => record.nodeId === "cell:xue2014-network-analysis-context").role,
    "model-context");
  assert.ok(!source.graph.relations.some((relation) => relation.kind === "functional-support"
    && relation.claimIds.includes(inference.id)));
});

test("Rodier dose labels use the actual erratum and secretion is not equated with arrest", () => {
  const correction = ctx(source).sources.get("rodier2009-dose-label-erratum");
  assert.equal(correction.doi, "10.1038/ncb1009-1272a");
  assert.match(correction.review.locators.join(" "), /reversed radiation-dose labels in Figure 1a/);
  const finding = claim("C-cell-senescence-damage-arrest");
  assert.match(finding.statement, /transient 0.5-Gy DDR.*10-Gy-associated persistent/);
  assert.ok(finding.citations.some((citation) => citation.sourceId === correction.id && citation.role === "limits"));
  assert.match(claim("C-cell-arrest-secretion-dissociation").statement, /p16-induced arrest produces little IL-6/);
  assert.match(claim("C-cell-persistent-ddr-secretory-subset").statement, /a subset rather than all/);
});

test("chronological immune aging remains observational and increased effector activity can carry a damage trade-off", () => {
  const age = studies.get("wertheimer2014-age-cmv-blood");
  const blockade = studies.get("barber2006-lcmv-inhibitory-blockade");
  assert.equal(age.studyType, "primary-observation");
  assert.equal(blockade.studyType, "primary-experiment");
  assert.ok(!source.graph.relations.some((relation) => relation.kind === "functional-support"
    && relation.contextIds.includes(age.id)));
  assert.match(age.finding, /not direct per-cell exhaustion measurements/);
  assert.match(claim("C-cell-older-cmv-function-counterexample").statement, /qualifies a universal age-decline narrative/);
  assert.match(claim("C-cell-pd1-blockade-response-tradeoff").statement, /immunopathologic death/);
  assert.match(claim("C-cell-chronic-tcell-inhibition").statement, /not chronological aging/);
});

test("mature NK plasticity retains undivided-cell and separate target-rejection boundaries", () => {
  const context = studies.get("joncker2010-mhc-environment-reset");
  assert.match(context.finding, /reset upward or downward/);
  assert.match(context.preparation, /CFSE-undivided/);
  assert.match(context.limitations.join(" "), /separate assays/);
  const finding = claim("C-cell-nk-plasticity-and-tolerance");
  assert.match(finding.statement, /have not divided/);
  assert.match(finding.statement, /not a fixed immune safety margin/);
  assert.match(finding.statement, /not.*guarantee.*reduced self-MHC always triggers elimination/);
});

test("peripheral training, tolerance recovery and progenitor history retain different compartments and times", () => {
  const peripheral = studies.get("saeed2014-monocyte-history");
  const culture = studies.get("novakovic2016-culture-recovery");
  const human = studies.get("novakovic2016-endotoxemia-exvivo");
  const progenitor = studies.get("mitroulis2018-progenitor-training");
  const transplant = studies.get("mitroulis2018-day28-transplant");
  assert.notEqual(culture.id, human.id);
  assert.equal(culture.sourceId, human.sourceId);
  assert.match(peripheral.preparation, /first 24 hours/);
  assert.match(peripheral.limitations.join(" "), /not permanent memory/);
  assert.match(claim("C-cell-trained-tolerant-day6-response").statement, /not.*stimulus-dose threshold curve/);
  assert.match(claim("C-cell-tolerance-output-dissociation").statement, /IL6 transcript induction need not coincide with released IL-6 protein/);
  assert.match(claim("C-cell-tolerance-partial-recovery").statement, /partially restores/);
  assert.notEqual(progenitor.id, transplant.id);
  assert.equal(progenitor.sourceId, transplant.sourceId);
  assert.match(transplant.preparation, /28 days.*Transfer 50 sorted donor LT-HSCs.*week 12/);
  assert.match(transplant.limitations.join(" "), /selection.*molecular storage mechanism|selective expansion versus instruction.*unresolved/);
  assert.deepEqual(claim("C-cell-trained-progenitor-pool").contextIds, [progenitor.id]);
  assert.deepEqual(claim("C-cell-trained-progenitor-lineage-output").contextIds, [transplant.id]);
  assert.ok(!source.graph.relations.some((relation) => relation.kind === "functional-support"
    && relation.source === "cell:trained-progenitor-pool" && relation.target === "cell:trained-progenitor-lineage-output"));
  assert.match(claim("C-cell-trained-progenitor-lineage-output").statement, /not identification of one obligatory epigenetic mark/);
});
