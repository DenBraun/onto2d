import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { loadGeometricModelData, verifyGeometricModelData } from "../../models/causal-emergence/canonical/geometric-model-data.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
const edge = (d, id) => d.graph.relations.find((r) => r.id === id);

test("shared-manifold proposals retain publication identity and conceptual scope", () => {
  for (const [label, mutate] of [
    ["separate publications shared a DOI", (d) => d.graph.sources.find((s) => s.id === "gallese2003-manifold").doi = "10.1159/000072786"],
    ["selected passages became a complete review", (d) => d.graph.sources.find((s) => s.id === "gallese2003-manifold").review.extent = "main-text-and-references"],
    ["conceptual proposal became established", (d) => claim(d, "C-shared-manifold-hypothesis").status = "publication-supported"],
    ["theory inherited a neural recording cohort", (d) => claim(d, "C-shared-manifold-hypothesis").contextIds = ["gallese1996-f5"]],
    ["shared code lost its separate publication", (d) => claim(d, "C-shared-manifold-hypothesis").citations.pop()],
    ["different empathy definitions lost their boundary", (d) => claim(d, "D-empathy-self-other").citations.pop()],
    ["simulation declared universally necessary", (d) => d.neural.comparisons.find((c) => c.id === "neural-shared-simulation").result = "supported"],
    ["descriptive levels became validated geometry", (d) => d.neural.comparisons.find((c) => c.id === "neural-shared-manifold-geometry").result = "supported"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("empathy definitions preserve instrument identity and separate necessity questions", () => {
  for (const [label, mutate] of [
    ["scale documentation became a primary cohort", (d) => claim(d, "D-empathy-measurement-boundary").contextIds = ["singer2004-partner-pain"]],
    ["instrument versions lost their primary description", (d) => claim(d, "D-empathy-measurement-boundary").citations.splice(1, 1)],
    ["manual metadata became reproduced validation", (d) => claim(d, "D-empathy-measurement-boundary").checkIds = ["operator-sign"]],
    ["architecture lost the nonprimitive-construct limit", (d) => claim(d, "C-empathy-functional-architecture").citations.pop()],
    ["generic perception declared necessary", (d) => d.neural.comparisons.find((c) => c.id === "neural-empathy-perceptual-necessity").result = "supported"],
    ["affect definition became causal necessity", (d) => d.neural.comparisons.find((c) => c.id === "neural-empathy-affective-necessity").result = "supported"],
    ["executive function became universal memory support", (d) => d.neural.comparisons.find((c) => c.id === "neural-empathy-working-memory").result = "supported"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("iEEG associations and virtual feature removal preserve sampling and causal limits", () => {
  for (const [label, mutate] of [
    ["channels became independent patients", (d) => d.neural.studies.find((s) => s.id === "tan2024-ieeg").organism = "297 independent patients"],
    ["model removal became a neural intervention", (d) => d.neural.studies.find((s) => s.id === "tan2024-decoder").studyType = "primary-experiment"],
    ["rating subset inherited the full recording sample", (d) => claim(d, "C-vicarious-rating-associations").contextIds = ["tan2024-ieeg"]],
    ["timing lost the smoothing sensitivity source", (d) => claim(d, "C-vicarious-detection-timing").citations.splice(1, 1)],
    ["coupling discarded the conflicting array counts", (d) => claim(d, "C-vicarious-phase-amplitude").citations.pop()],
    ["saved arrays became a full reproduction", (d) => claim(d, "C-vicarious-feature-removal").checkIds = ["operator-sign"]],
    ["proposed circuit became established", (d) => claim(d, "C-vicarious-neurodynamic-hypothesis").status = "publication-supported"],
    ["ordered removal established minimum cardinality", (d) => d.neural.comparisons.find((c) => c.id === "neural-vicarious-minimality").result = "supported"],
    ["transfer entropy became a functional dependency", (d) => d.graph.relations.push({ id: "neural:ieeg-causal-route", source: "neur:vicarious-transfer-entropy", target: "neur:vicarious-phase-amplitude", kind: "functional-support", role: "scoped-operating-support", assertion: "Transfer entropy establishes the necessary route.", claimIds: ["C-vicarious-transfer-entropy"], contextIds: ["tan2024-ieeg"] })]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("human social responses preserve recording scale, protocol and mechanism boundaries", () => {
  for (const [label, mutate] of [
    ["couples became twice as many scanned participants", (d) => d.neural.studies.find((s) => s.id === "singer2004-partner-pain").organism = "Thirty-two scanned adults"],
    ["multiunit signals became individual neurons", (d) => d.neural.studies.find((s) => s.id === "mukamel2010-action-units").organism = "1177 single neurons from twenty-one patients"],
    ["task observation became selective neural intervention", (d) => d.neural.studies.find((s) => s.id === "mukamel2010-action-units").studyType = "primary-experiment"],
    ["human matching inherited macaque controls", (d) => claim(d, "C-human-action-matching").contextIds = ["gallese1996-emg"]],
    ["reference comparison lost the conflicting source version", (d) => claim(d, "C-human-action-regional-reference").citations.pop()],
    ["response profiles lost supplementary methods", (d) => claim(d, "C-human-action-response-profiles").citations.pop()],
    ["BOLD overlap inherited unit-recording evidence", (d) => claim(d, "C-partner-pain-shared-bold").contextIds = ["mukamel2010-action-units"]],
    ["agency acquired an observed mechanism", (d) => claim(d, "C-human-action-agency-hypothesis").status = "publication-supported"],
    ["shared affect acquired measured support", (d) => claim(d, "C-partner-pain-shared-affect-hypothesis").citations[0].role = "supports"],
    ["pain specificity became resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-partner-pain-specificity").result = "candidate-favored"],
    ["imaging overlap became a causal empathy route", (d) => d.graph.relations.push({ id: "neural:bold-empathy", source: "neur:partner-pain-shared-bold", target: "neur:empathy-functional-architecture", kind: "functional-support", role: "scoped-operating-support", assertion: "Shared BOLD generates empathy.", claimIds: ["C-partner-pain-shared-bold"], contextIds: ["singer2004-partner-pain"] })]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("action-response evidence preserves separate controls and unresolved empathy mechanisms", () => {
  for (const [label, mutate] of [
    ["F5 units became an intervention", (d) => d.neural.studies.find((s) => s.id === "gallese1996-f5").studyType = "primary-experiment"],
    ["separate EMG inherited the F5 recording protocol", (d) => d.neural.studies.find((s) => s.id === "gallese1996-emg").preparation = d.neural.studies.find((s) => s.id === "gallese1996-f5").preparation],
    ["F1 null inherited F5 units", (d) => claim(d, "C-mirror-f1-control").contextIds = ["gallese1996-f5"]],
    ["observation-only units lost their conflicting table", (d) => claim(d, "C-mirror-visual-only").citations.pop()],
    ["empathy definition acquired a macaque assay", (d) => claim(d, "D-empathy-self-other").contextIds = ["gallese1996-f5"]],
    ["recognition proposal acquired experimental support", (d) => claim(d, "C-mirror-recognition-mechanism").citations[0].role = "supports"],
    ["empathy architecture became a tested minimum", (d) => d.neural.comparisons.find((c) => c.id === "neural-empathy-components").result = "candidate-favored"],
    ["author description became a complete manual review", (d) => d.graph.sources.find((s) => s.id === "mehrabian1996-bees").review.extent = "complete-manual-and-validation-data"],
    ["motor matching became an empathy dependency", (d) => d.graph.relations.push({ id: "neural:mirror-empathy", source: "neur:mirror-f5-responses", target: "neur:empathy-functional-architecture", kind: "functional-support", role: "scoped-operating-support", assertion: "Action matching generates empathy.", claimIds: ["C-mirror-f5-responses"], contextIds: ["gallese1996-f5"] })]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("geometric model comparisons preserve computational, selection and benchmark boundaries", () => {
  for (const [label, mutate] of [
    ["model fit became a neural intervention", (d) => d.neural.studies.find((s) => s.id === "pajot2026-memory").studyType = "primary-experiment"],
    ["unresolved cohort became a matched sample", (d) => d.neural.studies.find((s) => s.id === "pajot2026-quadrilaterals").organism = "330 independently matched adults"],
    ["ideal matching inherited the memory task", (d) => d.neural.studies.find((s) => s.id === "pajot2026-cross-format").preparation = d.neural.studies.find((s) => s.id === "pajot2026-memory").preparation],
    ["identity became an empirical finding", (d) => claim(d, "D-geom-identity-benchmark").contextIds = ["pajot2026-cross-format"]],
    ["symbolic null inherited the positive memory task", (d) => claim(d, "C-geom-quadrilateral-symbolic-null").contextIds = ["pajot2026-memory"]],
    ["joint fit lost layer inspection", (d) => claim(d, "C-geom-shape-memory-joint").citations = claim(d, "C-geom-shape-memory-joint").citations.filter((c) => c.sourceId !== "pajot2026-code")],
    ["numerical extract became model inference", (d) => d.graph.sources.find((s) => s.id === "pajot2026-selected-data").review.extent = "complete-network-reproduction"],
    ["model comparison became isolated training causation", (d) => d.neural.comparisons.find((c) => c.id === "neural-geometric-training-cause").result = "publication-reported-mixed-outcomes"],
    ["fit created a physical dependency", (d) => d.graph.relations.push({ id: "neural:geometric-generation", source: "neur:geom-shape-memory-joint", target: "neur:symbol-program-induction", kind: "functional-support", role: "scoped-operating-support", assertion: "The fit identifies a physical generator.", claimIds: ["C-geom-shape-memory-joint"], contextIds: ["pajot2026-memory"] })]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("deposited geometric readouts recompute with explicit aggregation and target identity", async () => {
  const values = await loadGeometricModelData();
  const result = verifyGeometricModelData(values);
  assert.ok(result.shapeMemory.models[0].jointFit > result.shapeMemory.models[0].correlation);
  for (const [label, mutate] of [
    ["prototype distances replaced average pair distances", (d) => d.quadrilateral.vectors.dinov3_huge = d.quadrilateral.vectors.prototype_dinov3_huge],
    ["individual response changed without recalculating the fit", (d) => d.shapeMemory.choiceTime[0] += 100],
    ["target became its own distractor", (d) => d.shapeMemory.distractorCounts[0][0] = 1],
    ["zero distance acquired a finite inverse", (d) => {
      const j = d.shapeMemory.distractorCounts[0].findIndex((count) => count > 0);
      d.shapeMemory.matrices[0].values[0][j] = 0;
      d.shapeMemory.matrices[0].values[j][0] = 0;
    }],
    ["human naming became measured matching", (d) => d.crossFormat.benchmark.measuredMatchingParticipants = 10],
    ["large model inherited the base label", (d) => d.crossFormat.matrices[0].model = "dinov3_base"],
    ["word format entered the image comparison", (d) => d.crossFormat.formats.push("word")]
  ]) {
    const changed = structuredClone(values);
    mutate(changed);
    assert.throws(() => verifyGeometricModelData(changed), undefined, label);
  }
});

test("binary sequence evidence preserves assay membership and limits of decoding", () => {
  for (const [label, mutate] of [
    ["imaging inherited all behavioral participants", (d) => d.neural.studies.find((s) => s.id === "alroumi2023-fmri").organism = d.neural.studies.find((s) => s.id === "alroumi2023-behavior").organism],
    ["attentive MEG inherited the button task", (d) => d.neural.studies.find((s) => s.id === "alroumi2023-meg").preparation = d.neural.studies.find((s) => s.id === "alroumi2023-behavior").preparation],
    ["bracketing lost the second cohort", (d) => claim(d, "C-binary-bracketing").contextIds.pop()],
    ["pooled mismatch became a single assay", (d) => claim(d, "C-binary-alternate-bracketing-null").status = "publication-supported"],
    ["grammar inherited an empirical preparation", (d) => claim(d, "D-binary-sequence-language").contextIds = ["alroumi2023-meg"]],
    ["task effect became a neural association", (d) => edge(d, "neural:binary-detection").target = "neur:binary-fmri-habituation"],
    ["decoder lost its inspected fold implementation", (d) => claim(d, "C-binary-meg-decoding").citations = claim(d, "C-binary-meg-decoding").citations.filter((c) => c.sourceId !== "alroumi2023-meg-code")],
    ["code acquired unread support", (d) => claim(d, "C-binary-meg-decoding").citations.find((c) => c.sourceId === "alroumi2023-meg-code").locator = "Complete preprocessing independently reproduced"],
    ["code inventory became an experiment", (d) => d.graph.sources.find((s) => s.id === "alroumi2023-meg-code").kind = "research-publication"],
    ["metadata reading became raw-data reproduction", (d) => d.graph.sources.find((s) => s.id === "alroumi2023-meg-data").review.extent = "raw-data-reproduced"],
    ["published sensor controls became executable evidence", (d) => claim(d, "C-binary-meg-transition-controls").checkIds = ["operator-sign"]],
    ["localizer overlap established necessity", (d) => d.neural.comparisons.find((c) => c.id === "neural-binary-language-necessity").result = "candidate-favored"],
    ["decoder established a generative circuit", (d) => d.neural.comparisons.find((c) => c.id === "neural-binary-neural-code").result = "candidate-favored"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("spatial MEG data separate task effects, decoder readouts and neural hypotheses", () => {
  for (const [label, mutate] of [
    ["selected sample became naive learners", (d) => d.neural.studies.find((s) => s.id === "alroumi2021-sequences").organism = "25 untrained adults"],
    ["primitive task inherited sequence protocol", (d) => d.neural.studies.find((s) => s.id === "alroumi2021-primitives").preparation = d.neural.studies.find((s) => s.id === "alroumi2021-sequences").preparation],
    ["matched sequence null inherited positive pair task", (d) => claim(d, "C-meg-matched-sequence-null").contextIds = ["alroumi2021-primitives"]],
    ["transfer lost its other task", (d) => claim(d, "C-meg-primitive-transfer-null").contextIds.pop()],
    ["ordinal readout lost supplementary nulls", (d) => claim(d, "C-meg-ordinal-grouping").citations.pop()],
    ["anticipation lost selection methods", (d) => claim(d, "C-meg-sequence-anticipation").citations.splice(1, 1)],
    ["behavioral effect became neural causation", (d) => edge(d, "neural:meg-sequence-behavior").target = "neur:meg-sequence-anticipation"],
    ["published decoding became independent reproduction", (d) => claim(d, "C-meg-location-decoding").checkIds = ["operator-sign"]],
    ["null transfer became measured binding", (d) => claim(d, "C-symbol-role-filler-binding").citations.at(-1).role = "supports"],
    ["fixed timing established ordinal identity", (d) => d.neural.comparisons.find((c) => c.id === "neural-meg-ordinal-timing").result = "candidate-favored"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("spatial sequence evidence preserves feedback, cohorts, nulls and formal limits", () => {
  for (const [label, mutate] of [
    ["preschool cohort inherited adult task", (d) => d.neural.studies.find((s) => s.id === "amalric2017-children").preparation = d.neural.studies.find((s) => s.id === "amalric2017-adults").preparation],
    ["preview comparison lost its other cohort", (d) => claim(d, "C-spatial-preview-benefit-null").contextIds = ["amalric2017-preview"]],
    ["between-cohort comparison became one experiment", (d) => claim(d, "C-spatial-preview-benefit-null").status = "publication-supported"],
    ["preschool result acquired preview participants", (d) => claim(d, "C-spatial-children-continuation").contextIds = ["amalric2017-preview"]],
    ["regularity edge acquired a null outcome", (d) => edge(d, "neural:spatial-adults-continuation").target = "neur:spatial-adult-rectangle-null"],
    ["positive result lost feedback procedure", (d) => claim(d, "C-spatial-adults-continuation").citations.pop()],
    ["syntax inherited a physical assay", (d) => claim(d, "D-spatial-octagon-language").contextIds = ["amalric2017-adults"]],
    ["resource fit became measured support", (d) => claim(d, "C-spatial-resource-availability").citations[0].role = "supports"],
    ["reading became model reproduction", (d) => claim(d, "C-spatial-resource-availability").checkIds = ["operator-sign"]],
    ["schooling contrast became a general refutation", (d) => d.neural.comparisons.find((c) => c.id === "neural-spatial-schooling").result = "universal-claim-contradicted-in-reviewed-preparation"],
    ["model supplied an empirical construction edge", (d) => d.graph.relations.push({id: "neural:spatial-model-generation", source: "neur:spatial-resource-availability", target: "neur:spatial-adults-continuation", kind: "functional-support", role: "scoped-operating-support", assertion: "The fit identifies the generating mechanism.", claimIds: ["C-spatial-adults-continuation"], contextIds: ["amalric2017-adults"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("symbolic definitions and construction hypotheses preserve their evidence boundaries", () => {
  for (const [label, mutate] of [
    ["book and precis merged", (d) => d.graph.sources.find((s) => s.id === "carey2009").doi = "10.1017/S0140525X10000919"],
    ["selected book reading became complete", (d) => d.graph.sources.find((s) => s.id === "carey2009").review.extent = "main-text-and-figures"],
    ["grammar cost became a physical process", (d) => d.graph.entities.find((e) => e.id === "neur:symbol-description-cost").kind = "scoped-process"],
    ["taxonomy became an experimental finding", (d) => claim(d, "D-sequence-nested-code").status = "publication-supported"],
    ["symbol vocabulary inherited a working-memory assay", (d) => claim(d, "D-symbol-composition").contextIds = ["miller1996"]],
    ["role binding became measured support", (d) => claim(d, "C-symbol-role-filler-binding").citations[0].role = "supports"],
    ["program induction lost current alternatives", (d) => claim(d, "C-symbol-program-induction").citations = claim(d, "C-symbol-program-induction").citations.filter((c) => c.sourceId !== "pajot2026")],
    ["bootstrapping became independently reproduced", (d) => claim(d, "C-symbol-bootstrapping").checkIds = ["operator-sign"]],
    ["comprehensive geometry discriminator became resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-symbol-geometry").result = "candidate-favored"],
    ["taxonomy became a necessary chain", (d) => d.graph.relations.push({id: "neural:sequence-construction", source: "neur:sequence-chunk-code", target: "neur:sequence-nested-code", kind: "descriptive", role: "definition", assertion: "Chunks necessarily construct trees.", claimIds: ["D-sequence-nested-code"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("working-memory readouts preserve assay identity and unresolved storage mechanisms", () => {
  for (const [label, mutate] of [
    ["assay cited an unread source passage", (d) => d.neural.studies.find((s) => s.id === "rose2016-fmri").reviewedLocators.push("Unreviewed cellular recordings")],
    ["PF recording became neural intervention", (d) => d.neural.studies.find((s) => s.id === "miller1996").studyType = "primary-experiment"],
    ["pooled participants became another experiment", (d) => d.neural.studies.find((s) => s.id === "rose2016-pooled-behavior").studyType = "primary-experiment"],
    ["behavior inherited EEG participants", (d) => claim(d, "C-wm-lure-behavior").contextIds = ["rose2016-eeg-targets"]],
    ["priority assay inherited category targeting", (d) => claim(d, "C-wm-eeg-relevance-contrast").contextIds = ["rose2016-eeg-targets"]],
    ["global null lost its source-level analysis", (d) => claim(d, "C-wm-global-complexity-null").citations.shift()],
    ["behavior lost allocation limits", (d) => claim(d, "C-wm-lure-behavior").citations.splice(1, 1)],
    ["feedback proposal became measured support", (d) => claim(d, "C-wm-pfc-guided-activation").citations.at(-1).role = "supports"],
    ["latent carrier became resolved", (d) => claim(d, "C-wm-latent-synaptic-trace").status = "publication-supported"],
    ["category readout became an item identity test", (d) => d.neural.comparisons.find((c) => c.id === "neural-wm-item-reactivation").result = "candidate-favored"],
    ["publication became reproduced decoding", (d) => claim(d, "C-wm-pfc-delay-selectivity").checkIds = ["operator-sign"]],
    ["delay readout acquired a causal route", (d) => d.graph.relations.push({id: "neural:wm-feedback", source: "neur:wm-pfc-delay-selectivity", target: "neur:wm-pfc-it-delay-comparison", kind: "functional-support", role: "scoped-operating-support", assertion: "PF drives IT.", claimIds: ["C-wm-pfc-delay-selectivity"], contextIds: ["miller1996"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("working-memory definitions and theories cannot become empirical mechanisms", () => {
  for (const [label, mutate] of [
    ["same-author reviews merged", (d) => d.graph.sources.find((s) => s.id === "baddeley2003-language").doi = "10.1038/nrn1201"],
    ["unread book acquired full-text review", (d) => d.graph.sources.find((s) => s.id === "fuster2008").review.extent = "main-text-and-figures"],
    ["book metadata supplied a neural mechanism", (d) => claim(d, "C-wm-adaptive-gating").citations.push({sourceId: "fuster2008", locator: "Publisher metadata and table of contents", role: "supports", note: "Book proves gating."})],
    ["functional minimum became a physical process", (d) => d.graph.entities.find((e) => e.id === "neur:wm-control-requirements").kind = "scoped-process"],
    ["vocabulary became an experimental result", (d) => claim(d, "D-wm-multicomponent-model").status = "publication-supported"],
    ["task construct inherited an assay", (d) => claim(d, "D-wm-task-construct").contextIds = ["hanks2006"]],
    ["buffer proposal became resolved", (d) => claim(d, "C-wm-episodic-buffer").status = "publication-supported"],
    ["theoretical provenance became causal support", (d) => claim(d, "C-wm-pfc-guided-activation").citations[0].role = "supports"],
    ["gating became independently reproduced", (d) => claim(d, "C-wm-adaptive-gating").checkIds = ["operator-sign"]],
    ["maintenance alternatives became resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-wm-maintenance").result = "candidate-favored"],
    ["schematic became an empirical connection", (d) => d.graph.relations.push({id: "neural:wm-update-control", source: "neur:wm-adaptive-gating", target: "neur:wm-pfc-guided-activation", kind: "functional-support", role: "scoped-operating-support", assertion: "The model establishes a measured update route.", claimIds: ["C-wm-adaptive-gating"], contextIds: ["hanks2006"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("Sox2 lineage evidence preserves targeting, assay boundaries and conditional ancestry", () => {
  for (const [label, mutate] of [
    ["culture inherited a birth-labeling cohort", (d) => claim(d, "C-sox2-culture-fates").contextIds = ["vanpraag2002"]],
    ["viral specificity lost the off-target controls", (d) => claim(d, "C-sox2-lentiviral-specificity").citations.splice(2, 1)],
    ["population fates inherited the cluster table", (d) => claim(d, "C-sox2-population-fates").citations[0].locator = claim(d, "C-sox2-cluster-census").citations[0].locator],
    ["cluster composition lost the depth-series source", (d) => claim(d, "C-sox2-mixed-clusters").citations.splice(2, 1)],
    ["running lost its control-identity methods", (d) => claim(d, "C-sox2-running-markers").citations.splice(1, 1)],
    ["density null inherited a culture assay", (d) => claim(d, "C-sox2-running-pool-null").citations[0].locator = claim(d, "C-sox2-culture-expansion").citations[0].locator],
    ["reading became independent lineage reproduction", (d) => claim(d, "C-sox2-cluster-census").checkIds = ["operator-sign"]],
    ["conditional ancestry became a proven lineage", (d) => claim(d, "C-sox2-clonal-selfrenewal").status = "publication-supported"],
    ["population model became an experimental result", (d) => claim(d, "C-sox2-population-homeostasis").contextIds = ["suh2007"]],
    ["radial cycle became experimentally resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-sox2-radial-transition").result = "candidate-favored"],
    ["HMG terminology became stage-transition support", (d) => claim(d, "D-ng-stage-framework").citations.find((c) => c.sourceId === "suh2007").role = "supports"],
    ["fixed clusters acquired a measured renewal edge", (d) => d.graph.relations.push({id: "neural:sox2-renewal", source: "neur:sox2-mixed-clusters", target: "neur:sox2-clonal-selfrenewal", kind: "functional-support", role: "scoped-operating-support", assertion: "The clusters establish serial renewal.", claimIds: ["C-sox2-mixed-clusters"], contextIds: ["suh2007"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("RGL regulation preserves intervention direction, endpoint contrasts and untested feedback", () => {
  for (const [label, mutate] of [
    ["PV suppression inherited the inhibition protocol", (d) => edge(d, "neural:pv-rgl-cycle-suppression").source = "neur:pv-rgl-inhibition-protocol"],
    ["tonic current became cell-cycle entry", (d) => edge(d, "neural:pv-rgl-tonic-current").target = "neur:pv-rgl-cycle-increase"],
    ["EdU residual became an MCM2 null", (d) => edge(d, "neural:pv-isolation-residual-edu").target = "neur:pv-isolation-mcm-null"],
    ["systemic population assay inherited a clonal result", (d) => edge(d, "neural:rgl-diazepam-cycle-markers").target = "neur:rgl-diazepam-genotype-response"],
    ["cycle markers inherited a neuronal physiology cohort", (d) => claim(d, "C-pv-rgl-cycle-suppression").contextIds = ["vanpraag2002"]],
    ["housing contrast lost the supplementary timeline", (d) => claim(d, "C-pv-isolation-residual-edu").citations.pop()],
    ["early activation lost the clone-class evidence", (d) => claim(d, "C-rgl-gamma2-clone-activation").citations.pop()],
    ["late clones inherited acute slice evidence", (d) => claim(d, "C-rgl-gamma2-late-composition").citations[0].locator = claim(d, "C-pv-rgl-tonic-current").citations[0].locator],
    ["publication became biological reproduction", (d) => claim(d, "C-pv-rgl-cycle-increase").checkIds = ["operator-sign"]],
    ["adaptive cartoon became measured feedback", (d) => claim(d, "C-rgl-homeostatic-loop").status = "publication-supported"],
    ["feedback hypothesis acquired an experimental context", (d) => claim(d, "C-rgl-homeostatic-loop").contextIds = ["song2012"]],
    ["exclusive mediation became resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-rgl-gaba-mediation").result = "candidate-favored"],
    ["SST null acquired a regulatory edge", (d) => d.graph.relations.push({id: "neural:sst-rgl-regulation", source: "neur:sst-rgl-cycle-null", target: "neur:pv-rgl-cycle-increase", kind: "functional-support", role: "scoped-operating-support", assertion: "The null establishes regulation.", claimIds: ["C-sst-rgl-cycle-null"], contextIds: ["song2012"]})]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("neurogenesis review definitions cannot supply lineage transitions or experimental support", () => {
  for (const [label, mutate] of [
    ["staging became an observed population", (d) => d.graph.entities.find((e) => e.id === "neur:ng-stage-framework").kind = "scoped-process"],
    ["review supplied a measured transition", (d) => claim(d, "D-ng-stage-framework").status = "publication-supported"],
    ["definition inherited a birth-labeling cohort", (d) => claim(d, "D-ng-stage-framework").contextIds = ["vanpraag2002"]],
    ["compartment distinction lost its primary source", (d) => claim(d, "D-ng-stage-framework").citations = claim(d, "D-ng-stage-framework").citations.filter((c) => c.sourceId !== "renzel2013")],
    ["GABA sign check became support for generic proliferation", (d) => claim(d, "D-ng-stage-framework").citations.find((c) => c.sourceId === "song2012").role = "supports"],
    ["metric definition became biological reproduction", (d) => claim(d, "D-ng-pattern-separation").checkIds = ["operator-sign"]],
    ["functional alternatives became resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-ng-function-theories").result = "candidate-favored"],
    ["schematic became a developmental transition", (d) => d.graph.relations.push({ id: "neural:staging-transition", source: "neur:ng-stage-framework", target: "neur:ng-pattern-separation", kind: "descriptive", role: "definition", assertion: "Stages establish the function.", claimIds: ["D-ng-stage-framework"] })]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("human birth labeling preserves observational scope, marker controls and untested function", () => {
  for (const [label, mutate] of [
    ["diagnostic labeling became a causal intervention", (d) => d.neural.studies.find((s) => s.id === "eriksson1998").studyType = "primary-experiment"],
    ["human labeling inherited a mouse preparation", (d) => claim(d, "C-human-brdu-neuronal-colabels").contextIds = ["vanpraag2002"]],
    ["density lost its clinical cohort", (d) => delete claim(d, "C-human-brdu-density-profile").contextIds],
    ["SVZ null inherited dentate marker evidence", (d) => claim(d, "C-human-brdu-svz-profile").citations[0].locator = claim(d, "C-human-brdu-neuronal-colabels").citations[0].locator],
    ["staining controls lost the methods", (d) => claim(d, "C-human-brdu-staining-controls").citations.pop()],
    ["histology became an independent witness", (d) => claim(d, "C-human-brdu-neuronal-colabels").checkIds = ["operator-sign"]],
    ["neuronal markers established human function", (d) => claim(d, "C-human-brdu-functional-integration").status = "publication-supported"],
    ["untested function acquired a measured context", (d) => claim(d, "C-human-brdu-functional-integration").contextIds = ["eriksson1998"]],
    ["diagnostic label acquired an induction edge", (d) => d.graph.relations.push({ id: "neural:human-brdu-induction", source: "neur:human-brdu-staining-controls", target: "neur:human-brdu-neuronal-colabels", kind: "functional-support", role: "scoped-operating-support", assertion: "Labeling generates functional neurons.", claimIds: ["C-human-brdu-neuronal-colabels"], contextIds: ["eriksson1998"] })]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("injury remodeling preserves recovery intervals, optical units and unresolved mechanisms", () => {
  for (const [label, mutate] of [
    ["late cohort inherited the early assay", (d) => edge(d, "neural:stroke-spine-formation-6w").source = "neur:stroke-spine-formation-1w-protocol"],
    ["density became acute spine turnover", (d) => edge(d, "neural:stroke-spine-density-1w").target = "neur:stroke-spine-formation-1w"],
    ["vascular occupancy became capillary velocity", (d) => edge(d, "neural:stroke-vascular-fraction-6w").target = "neur:stroke-capillary-velocity-null"],
    ["formation inherited the elimination null", (d) => edge(d, "neural:stroke-spine-formation-2w").target = "neur:stroke-spine-elimination-null"],
    ["anatomical distance became a selective intervention", (d) => edge(d, "neural:stroke-spine-formation-2w").source = "neur:stroke-near-far-profile"],
    ["injury acquired the motor-learning cohort", (d) => claim(d, "C-stroke-spine-formation-1w").contextIds = ["xu2009"]],
    ["late density lost its context", (d) => delete claim(d, "C-stroke-density-late-null").contextIds],
    ["orientation inherited a spine assay", (d) => claim(d, "C-stroke-orientation-profile").citations[0].locator = claim(d, "C-stroke-spine-formation-1w").citations[0].locator],
    ["formation lost its scoring limits", (d) => claim(d, "C-stroke-spine-formation-1w").citations.pop()],
    ["reading became biological reproduction", (d) => claim(d, "C-stroke-optical-map").checkIds = ["operator-sign"]],
    ["morphology established behavioral mediation", (d) => claim(d, "C-stroke-remodeling-function").status = "publication-supported"],
    ["alignment acquired a proven construction context", (d) => claim(d, "C-stroke-neurovascular-geometry").contextIds = ["brown2007"]]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("motor remodeling separates task history, morphological readouts and construction hypotheses", () => {
  for (const [label, mutate] of [
    ["adult task inherited the adolescent cohort", (d) => edge(d, "neural:motor-novel-reaching-turnover").source = "neur:motor-young-turnover-protocol"],
    ["new-spine survival became total spine balance", (d) => edge(d, "neural:motor-new-spine-retention").target = "neur:motor-spine-population-balance"],
    ["cross-training inherited the naive task", (d) => edge(d, "neural:motor-cross-training-turnover").source = "neur:motor-novel-capellini-turnover-protocol"],
    ["familiar-task null inherited a novel-task effect", (d) => edge(d, "neural:motor-novel-reaching-turnover").target = "neur:motor-retraining-null"],
    ["success association became an intervention", (d) => edge(d, "neural:motor-young-turnover").source = "neur:motor-success-association"],
    ["cortical spine imaging became dentate birth labeling", (d) => claim(d, "C-motor-new-spine-retention").contextIds = ["vanpraag2002"]],
    ["null lost its preparation", (d) => delete claim(d, "C-motor-filopodia-null").contextIds],
    ["count denominator lost its table", (d) => claim(d, "C-motor-spine-population-balance").citations.pop()],
    ["reading became independent imaging reproduction", (d) => claim(d, "C-motor-young-turnover").checkIds = ["operator-sign"]],
    ["persistent morphology became memory necessity", (d) => claim(d, "C-motor-spine-memory").status = "publication-supported"],
    ["construction hypothesis became a measured process", (d) => claim(d, "C-motor-homeostatic-construction").contextIds = ["xu2009"]],
    ["supplement replaced primary publication", (d) => d.graph.sources.find((s) => s.id === "xu2009-supplement").doi = "10.1038/nature08389"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("neuronal output and behavior preserve intervention, null and mediation boundaries", () => {
  for (const [label, mutate] of [
    ["population output became direct route classification", (d) => edge(d, "neural:toni-target-psc").target = "neur:toni-response-classification"],
    ["glutamate blockade inherited inhibitory profile", (d) => edge(d, "neural:toni-kyn-blockade").target = "neur:toni-bmi-response-profile"],
    ["optogenetic activation became behavior", (d) => edge(d, "neural:toni-light-spikes").target = "neur:bax-context-discrimination"],
    ["retained labels became pure count mediation", (d) => edge(d, "neural:bax-brdu-retention").target = "neur:bax-count-mediation"],
    ["late marker effect transferred to early comparison", (d) => edge(d, "neural:bax-dcx-eightweek").target = "neur:bax-dcx-fourweek-profile"],
    ["running effect transferred to nonrunning null", (d) => edge(d, "neural:bax-running-exploration").target = "neur:bax-affect-nulls"],
    ["bicuculline null inherited positive field effect", (d) => edge(d, "neural:bax-weak-ltp").target = "neur:bax-bicuculline-ltp-null"],
    ["irradiation marker depletion became cognitive necessity", (d) => edge(d, "neural:irradiation-dcx").target = "neur:irradiation-discrimination-profile"],
    ["behavior inherited output physiology context", (d) => claim(d, "C-bax-context-discrimination").contextIds = ["toni2008"]],
    ["null lost experimental context", (d) => delete claim(d, "C-bax-proliferation-null").contextIds],
    ["irradiation supplement replaced by positive main task", (d) => claim(d, "C-irradiation-discrimination-profile").citations.at(-1).locator = "Figure 2"],
    ["BrdU timing lost supplement", (d) => claim(d, "C-bax-brdu-retention").citations.pop()],
    ["cross-sectional recruitment became established rule", (d) => claim(d, "C-toni-target-recruitment").status = "publication-supported"],
    ["count mediation became an experimental observation", (d) => claim(d, "C-bax-count-mediation").contextIds = ["sahay2011"]],
    ["reading became independent reproduction", (d) => claim(d, "C-bax-context-discrimination").checkIds = ["operator-sign"]]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("neurogenesis separates birth labels, electrical input, human observations and cognitive hypotheses", () => {
  for (const [label, mutate] of [
    ["human cohort became intervention", (d) => d.neural.studies.find((s) => s.id === "disouky2026").studyType = "primary-experiment"],
    ["postsynaptic input became memory effect", (d) => edge(d, "neural:ng-perforant-input").target = "neur:ng-memory-route"],
    ["BrdU count became neuronal output", (d) => edge(d, "neural:ng-running-brdu").target = "neur:ng-perforant-input"],
    ["morphology became current injection", (d) => edge(d, "neural:ng-current-spikes").source = "neur:ng-morphology-profile"],
    ["mouse and human contexts pooled", (d) => claim(d, "C-human-ng-abundance").contextIds = ["vanpraag2002"]],
    ["null context removed", (d) => delete claim(d, "C-human-ng-sa-null").contextIds],
    ["cohort table replaced by contrast table", (d) => claim(d, "C-human-ng-cohort-census").citations[2].sourceId = "disouky2026-table8"],
    ["contrast denominator changed", (d) => claim(d, "C-human-ng-sa-null").citations.at(-1).locator = "diff: SA/AD"],
    ["table reading became biological validation", (d) => claim(d, "C-human-ng-abundance").checkIds = ["operator-sign"]],
    ["model inference became causal rule", (d) => claim(d, "C-ng-regulatory-geometry").status = "publication-supported"],
    ["cognitive hypothesis acquired experimental context", (d) => claim(d, "C-ng-memory-route").contextIds = ["vanpraag2002"]],
    ["rhesus evidence lost its full-text method boundary", (d) => d.graph.sources.find((s) => s.id === "rakic1985").review.extent = "metadata-and-abstract-only"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("gene-regulation evidence separates molecular assays, timepoints and proposed mediation", () => {
  const cells = (d, id) => claim(d, id).citations.find((c) => c.sourceId.startsWith("su2017-table"));
  for (const [label, mutate] of [
    ["RNA became accessibility", (d) => edge(d, "neural:ecs-transcripts-1h").target = "neur:ecs-accessibility-1h"],
    ["knockdown became overexpression", (d) => edge(d, "neural:cfos-knockdown-accessibility").source = "neur:cfos-overexpression-protocol"],
    ["parallel RNA effect became proven accessibility mediation", (d) => edge(d, "neural:cfos-knockdown-transcripts").source = "neur:cfos-knockdown-accessibility"],
    ["late-binding null became a maintenance intervention", (d) => edge(d, "neural:ecs-accessibility-persistence").source = "neur:cfos-late-binding-null"],
    ["adult stress cohort inherited a protein-assay context", (d) => edge(d, "neural:tsa-restraint-corticosterone").source = "neur:tsa-protein-protocol"],
    ["GR protein became RNA abundance", (d) => edge(d, "neural:tsa-gr-protein").target = "neur:ecs-transcripts-1h"],
    ["drug effect became direct promoter-to-protein mediation", (d) => edge(d, "neural:tsa-gr-protein").source = "neur:tsa-gr-site16"],
    ["maternal site-16 effect transferred to the site-17 null", (d) => edge(d, "neural:foster-gr-site16").target = "neur:foster-gr-site17-null"],
    ["association became cross-fostering intervention", (d) => edge(d, "neural:foster-gr-site16").source = "neur:maternal-gr-methylation-association"],
    ["high-care null inherited low-care positive effect", (d) => edge(d, "neural:tsa-restraint-corticosterone").target = "neur:tsa-high-care-corticosterone-null"],
    ["early region table substituted for persistence", (d) => cells(d, "C-ecs-accessibility-persistence").locator = "'E1-E0 gained-open'!A3:M11440"],
    ["RNA comparison substituted for peak list", (d) => { const c = cells(d, "C-ecs-accessibility-1h"); c.sourceId = "su2017-table5"; c.locator = "'Table S5a. E1-E0'!A2:H5144"; }],
    ["overexpression data substituted for knockdown", (d) => cells(d, "C-cfos-knockdown-transcripts").locator = "'Table S5f. cFos OE'!A2:H2034"],
    ["foster-control methods removed", (d) => claim(d, "C-foster-gr-site16").citations = claim(d, "C-foster-gr-site16").citations.filter((c) => c.sourceId !== "weaver2004-supplement")],
    ["primary experiment replaced by a review", (d) => claim(d, "C-tsa-gr-protein").citations[0] = { sourceId: "meaney2005-environment", locator: "PubMed metadata and abstract", role: "supports", note: "Review abstract" }],
    ["reading became sequencing reproduction", (d) => claim(d, "C-ecs-accessibility-1h").checkIds = ["operator-sign"]],
    ["maintenance hypothesis became established", (d) => claim(d, "C-cfos-maintenance-hypothesis").status = "publication-supported"],
    ["mediation hypothesis became established", (d) => claim(d, "C-maternal-chromatin-mediation").status = "publication-supported"],
    ["gene-programming hypothesis acquired experimental context", (d) => claim(d, "C-neural-gene-programming").contextIds = ["su2017"]]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("microglial evidence preserves measurement units, interventions and rescue specificity", () => {
  const cells = (d, id) => claim(d, id).citations.find((c) => c.sourceId === "badimon2020-fig4-data");
  for (const [label, mutate] of [
    ["baseline motility became an injury intervention", (d) => edge(d, "neural:microglial-injury-recruitment").source = "neur:microglial-process-motility"],
    ["process recruitment became soma migration", (d) => edge(d, "neural:microglial-injury-recruitment").target = "neur:microglial-soma-migration-null"],
    ["neonatal culture substituted for adult tissue", (d) => edge(d, "neural:cd39-striatal-fluorescence").source = "neur:microglial-cd39-culture-ado-protocol"],
    ["tissue fluorescence became dialysate concentration", (d) => edge(d, "neural:cd39-striatal-fluorescence").target = "neur:plx-striatal-dialysate"],
    ["gene deletion became cell depletion", (d) => edge(d, "neural:cd39-d1-seizures").source = "neur:plx-calcium-protocol"],
    ["receptor deletion inherited CD39 rescue", (d) => edge(d, "neural:cd39-cpa-rescue").target = "neur:adora1-cpa-rescue-null"],
    ["cortical morphology became striatal synchrony", (d) => edge(d, "neural:microglial-bouton-proximity").target = "neur:plx-striatal-synchrony"],
    ["dialysate cells substituted for fluorescence", (d) => cells(d, "C-cd39-striatal-fluorescence").locator = "4c!A1:J16"],
    ["fluorescence cells substituted for dialysate", (d) => cells(d, "C-plx-striatal-dialysate").locator = "4h!B1:C11"],
    ["another genotype supplied seizure counts", (d) => cells(d, "C-cd39-d1-seizures").locator = "4k!B1:D8"],
    ["culture lost source cells", (d) => claim(d, "C-microglial-cd39-culture-ado").citations = claim(d, "C-microglial-cd39-culture-ado").citations.filter((c) => c.sourceId !== "badimon2020-fig4-data")],
    ["morphology established immune protection", (d) => claim(d, "C-microglial-surveillance-protection").status = "publication-supported"],
    ["cross-assay feedback became uniquely established", (d) => claim(d, "C-microglial-purinergic-feedback").status = "publication-supported"],
    ["reading became independent reproduction", (d) => claim(d, "C-cd39-d1-seizures").checkIds = ["operator-sign"]],
    ["null moved to another preparation", (d) => claim(d, "C-plx-calcium-magnitude-null").contextIds = ["nimmerjahn2005"]],
    ["adjacent PDF article supplied the DOI", (d) => d.graph.sources.find((s) => s.id === "nimmerjahn2005").doi = "10.1126/science.1107891"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("glial homeostasis, metabolism, myelin and pruning preserve distinct assays", () => {
  for (const [label, mutate] of [
    ["uptake current substituted for field potentiation", (d) => edge(d, "neural:kir4-early-potentiation").target = "neur:kir4-potassium-current"],
    ["late null promoted from early potentiation", (d) => edge(d, "neural:kir4-early-potentiation").target = "neur:kir4-late-plasticity-null"],
    ["MCT4 rescue transferred to MCT2", (d) => edge(d, "neural:mct4-lactate-rescue").source = "neur:mct2-antisense-protocol"],
    ["short-term null became long-term impairment", (d) => edge(d, "neural:mct2-retention").target = "neur:mct2-short-retention-null"],
    ["MCT2 rescue null became a positive rescue", (d) => edge(d, "neural:mct4-lactate-rescue").target = "neur:mct2-rescue-null"],
    ["deprivation became selective myelin intervention", (d) => edge(d, "neural:md-conduction").source = "neur:md-internodes"],
    ["distinct myelin cohorts silently pooled", (d) => edge(d, "neural:md-internodes").source = "neur:md-cell-count-protocol"],
    ["TTX and forskolin contrasts conflated", (d) => edge(d, "neural:ttx-engulfment").target = "neur:forskolin-engulfment"],
    ["C3 genotype substituted for CR3", (d) => edge(d, "neural:cr3-engulfment").source = "neur:c3-engulfment-protocol"],
    ["structural puncta became electrical potentiation", (d) => edge(d, "neural:cr3-synaptic-puncta").target = "neur:kir4-early-potentiation"],
    ["anatomical observation became causal input", (d) => edge(d, "neural:cr3-engulfment").source = "neur:microglial-rgc-material"],
    ["publication reading became an executable witness", (d) => claim(d, "C-md-conduction").checkIds = ["operator-sign"]],
    ["unidentified mediation became a universal verdict", (d) => d.neural.comparisons.find((c) => c.id === "glial-myelin-conduction").result = "universal-claim-contradicted-in-reviewed-preparation"],
    ["commentary substituted for primary myelin experiment", (d) => d.graph.sources.find((s) => s.id === "etxeberria2016").doi = "10.1523/JNEUROSCI.2727-16.2016"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("glial effects preserve cell population, assay, null results and interpretation limits", () => {
  for (const [label, mutate] of [
    ["CA1 null substituted for DG potentiation", (d) => edge(d, "neural:astro-vglut1-ltp").target = "neur:ca1-ip3r2-null"],
    ["fish and mouse preparations pooled", (d) => edge(d, "neural:astro-gq-swimming").contextIds = ["agulhon2010"]],
    ["glutamate readout became calcium", (d) => edge(d, "neural:astro-vglut1-glutamate").target = "neur:ne-mo-astro-calcium"],
    ["ablated and intact fish pooled", (d) => edge(d, "neural:ne-mo-swimming").target = "neur:ne-mo-glia-ablated-null"],
    ["transcripts became causal intervention", (d) => edge(d, "neural:astro-vglut1-glutamate").source = "neur:glutamatergic-astro-transcripts"],
    ["unique algorithm admitted", (d) => claim(d, "C-glial-accumulation").status = "publication-supported"],
    ["source reading became independent witness", (d) => claim(d, "C-astro-vglut1-ltp").checkIds = ["operator-sign"]],
    ["wrong paired data cells", (d) => claim(d, "C-astro-vglut1-ltp").citations.at(-1).locator = "Fig3!AU5:BB15"],
    ["commentary replaced experiment", (d) => d.graph.sources.find((s) => s.id === "agulhon2010").doi = "10.1126/science.1187420"],
    ["unmatched plasticity experiments became a universal verdict", (d) => d.neural.comparisons.find((c) => c.id === "glial-plasticity-preparations").result = "universal-claim-contradicted-in-reviewed-preparation"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("connectome evidence keeps effective responses separate from theory and anatomy", () => {
  for (const [label, mutate] of [
    ["reversed propagation", (d) => { const r = edge(d, "neural:avjr-avdr"); [r.source, r.target] = [r.target, r.source]; }],
    ["different neuron", (d) => edge(d, "neural:aver-avar").target = "neur:avdr-response"],
    ["different preparation", (d) => edge(d, "neural:saadl-ollr").contextIds = ["cardin2009"]],
    ["atlas observation became an intervention", (d) => edge(d, "neural:avjr-avdr").source = "neur:signal-atlas"],
    ["unique anatomy mapping admitted", (d) => claim(d, "C-connectome-function-identity").status = "publication-supported"],
    ["formal model became a mechanism", (d) => claim(d, "C-neural-information-identity").status = "definition"],
    ["publication reading became reproduction", (d) => claim(d, "C-signal-atlas").checkIds = ["objecthood-negative"]],
    ["erratum became original paper", (d) => d.graph.sources.find((s) => s.id === "bullmore2009").doi = "10.1038/nrn2618"],
    ["one installment became the composite", (d) => d.graph.sources.find((s) => s.id === "shannon1948").doi = "10.1002/j.1538-7305.1948.tb01338.x"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("neural curation rejects silent source rewrites and unsupported interpretations", () => {
  for (const [label, mutate] of [
    ["wrong Sporns year", (d) => d.graph.sources.find((s) => s.id === "sporns2010").year = 2011],
    ["adjacent Bliss paper", (d) => d.graph.sources.find((s) => s.id === "bliss1973").doi = "10.1113/jphysiol.1973.sp010274"],
    ["behavioral learning promoted", (d) => claim(d, "N-plasticity-learning").status = "publication-supported"],
    ["rhythm interpretation promoted", (d) => claim(d, "N-rhythm-coding").status = "definition"],
    ["observation became intervention", (d) => d.neural.studies[0].studyType = "primary-experiment"],
    ["full reading invented", (d) => d.neural.studies[4].readExtent = "complete-full-text"],
    ["unread locator", (d) => claim(d, "N-cardin2009").citations[0].locator = "Unread main Methods"],
    ["generator gained support", (d) => claim(d, "N-rhythm-coding").citations.push({ sourceId: "morales2026", role: "provenance", locator: "Version 1: Main, Discussion, Methods and Algorithm 1", note: "Unreviewed admission" })],
    ["model comparison claimed", (d) => d.neural.comparisons[0].result = "universal-claim-contradicted-in-reviewed-preparation"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("neural relations preserve intervention direction, preparation and boundary specialization", () => {
  for (const [label, mutate] of [
    ["reversed intervention", (d) => { const r = edge(d, "neural:nmda-antagonism-ca1-potentiation-induction"); [r.source, r.target] = [r.target, r.source]; }],
    ["different preparation", (d) => edge(d, "neural:conditioning-potentiation").target = "neur:ca1-potentiation-induction"],
    ["phase effect relabeled", (d) => edge(d, "neural:phase-response").source = "neur:gamma-response"],
    ["wrong study", (d) => edge(d, "neural:fs-gamma").contextIds = ["bliss1973"]],
    ["observational causal edge", (d) => { const r = structuredClone(edge(d, "neural:fs-gamma")); r.id = "neural:geometry-causes-plasticity"; r.source = "neur:developmental-connectivity"; d.graph.relations.push(r); }],
    ["weight imported", (d) => edge(d, "neural:fs-gamma").weight = 0.4],
    ["missing endpoint evidence", (d) => d.graph.entities.find((e) => e.id === "neur:fs-activation").claimIds = ["N-rhythm-coding"]]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("task data rejects correlation-to-causation, null-effect promotion and model/edition conflation", () => {
  for (const [label, mutate] of [
    ["correlation promoted", (d) => edge(d, "neural:lip-motion-choice").source = "neur:decision-correlations"],
    ["null result became positive edge", (d) => edge(d, "neural:lip-spatial-choice").target = "neur:lip-motion-null"],
    ["different LIP protocols merged", (d) => edge(d, "neural:lip-motion-bias-timecourse").target = "neur:lip-motion-null"],
    ["compensation relabeled as plasticity", (d) => edge(d, "neural:lip-motion-bias-timecourse").source = "neur:dentate-potentiation"],
    ["aftereffect relabeled as field exposure", (d) => edge(d, "neural:field-removal-aftereffect").source = "neur:force-field-practice"],
    ["force effect reversed", (d) => { const r = edge(d, "neural:force-localization"); [r.source, r.target] = [r.target, r.source]; }],
    ["unique optimality admitted", (d) => claim(d, "C-perception-optimality").status = "publication-supported"],
    ["unique estimator admitted", (d) => claim(d, "C-internal-model").status = "definition"],
    ["wrong Wolpert paper", (d) => d.graph.sources.find((s) => s.id === "wolpert1995").doi = "10.1007/BF00241505"],
    ["digitization became original DOI", (d) => d.graph.sources.find((s) => s.id === "helmholtz1867").doi = "10.3931/e-rara-21259"],
    ["unread motor methods claimed", (d) => d.neural.studies.find((s) => s.id === "shadmehr1994").readExtent = "complete-full-text"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("engram evidence preserves selected populations, assay roles and unresolved mediation", () => {
  for (const [label, mutate] of [
    ["chromatin observation became an intervention", (d) => edge(d, "neural:engram-context-freezing").source = "neur:engram-accessibility-profile"],
    ["freezing became molecular causation", (d) => edge(d, "neural:engram-context-freezing").target = "neur:engram-nuclear-rna-profile"],
    ["persistent-tag null replaced co-label effect", (d) => edge(d, "neural:engram-context-colabels").target = "neur:engram-context-tagged-null"],
    ["ECS substituted for conditioning", (d) => edge(d, "neural:engram-context-freezing").contextIds = ["su2017"]],
    ["protein puncta became contact dynamics", (d) => edge(d, "neural:engram-context-colabels").source = "neur:engram-eif4e-shaft"],
    ["hypothesis promoted to measured mechanism", (d) => claim(d, "C-engram-chromatin-priming").status = "publication-supported"],
    ["source inspection became reproduction", (d) => claim(d, "C-engram-compartment-profile").checkIds = ["operator-sign"]],
    ["RNA source cells replaced by ATAC statistics", (d) => claim(d, "C-engram-nuclear-rna-profile").citations[1].sourceId = "marco2020-table13"],
    ["RNA contrast source range changed", (d) => claim(d, "C-engram-nuclear-rna-profile").citations[2].locator = "Basal_vs_Early!A1:G93"],
    ["library caveat became quantitative support", (d) => claim(d, "C-engram-accessibility-profile").citations[1].role = "supports"],
    ["primary result replaced by software", (d) => claim(d, "C-engram-context-freezing").citations[0].role = "method"],
    ["priming comparison declared tested", (d) => d.neural.comparisons.find((c) => c.id === "neural-engram-chromatin-priming").result = "publication-reported-mixed-outcomes"],
    ["wrong memory publication", (d) => d.graph.sources.find((s) => s.id === "marco2020").doi = "10.1038/s41586-020-2905-5"]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("affect and criticality data reject preparation conflation and simulated evidence promotion", () => {
  for (const [label, mutate] of [
    ["somatic and projection activation merged", (d) => edge(d, "neural:bla-projection-exploration").source = "neur:bla-somatic-activation"],
    ["gain/loss preparations pooled", (d) => edge(d, "neural:bla-inhibition-exploration").target = "neur:projection-exploration"],
    ["wake maintenance became awakening", (d) => edge(d, "neural:lc-wake-duration").target = "neur:lc-awakening"],
    ["null became positive effect", (d) => edge(d, "neural:lc-wake-duration").target = "neur:lc-inactive-null"],
    ["acute and cultured slices merged", (d) => edge(d, "neural:culture-inhibition-blockade").target = "neur:acute-avalanches"],
    ["event statistics identified criticality", (d) => claim(d, "C-neural-criticality").status = "publication-supported"],
    ["fitted model became experiment", (d) => d.neural.studies.push({ ...d.neural.studies.at(-1), id: "deco2012", sourceId: "deco2012" })],
    ["simulation became executable witness", (d) => claim(d, "C-resting-attractor").checkIds = ["objecthood-negative"]],
    ["erratum substituted for original", (d) => d.graph.sources.find((s) => s.id === "ledoux2012").doi = "10.1016/j.neuron.2012.02.018"],
    ["reprint substituted for book", (d) => d.graph.sources.find((s) => s.id === "damasio1994").year = 2005],
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("consciousness, sleep and ensemble review rejects overreach and conflated protocols", () => {
  for (const [label, mutate] of [
    ["visual decoding became neural intervention", (d) => edge(d, "neural:ensemble-recall-performance").source = "neur:visual-feature-decoding"],
    ["exploratory amplitude became causal phase effect", (d) => edge(d, "neural:phase-response").target = "neur:visual-amplitude-connectivity"],
    ["Hcrt and LC endpoints merged", (d) => edge(d, "neural:hcrt-sleep-to-wake").target = "neur:lc-awakening"],
    ["awakening became total duration", (d) => edge(d, "neural:hcrt-sleep-to-wake").target = "neur:hcrt-duration-null"],
    ["selected and nonselective stimulation pooled", (d) => edge(d, "neural:ensemble-recall-performance").source = "neur:ensemble-disrupt-context"],
    ["rare conditional group became intervention endpoint", (d) => edge(d, "neural:ensemble-recall-performance").target = "neur:ensemble-gray-selection"],
    ["ensemble null assigned to unrelated study", (d) => claim(d, "C-ensemble-control-null").contextIds = ["cogitate2025"]],
    ["consciousness hypothesis promoted", (d) => claim(d, "C-conscious-emergence").status = "publication-supported"],
    ["blackboard became measured anatomy", (d) => claim(d, "C-gwt-blackboard").status = "definition"],
    ["behavior identified subjective perception", (d) => claim(d, "C-ensemble-perception").status = "publication-supported"],
    ["selected reading became executable reproduction", (d) => claim(d, "C-cogitate-duration").checkIds = ["objecthood-negative"]],
    ["mixed comparison became decisive refutation", (d) => d.neural.comparisons[8].result = "universal-claim-contradicted-in-reviewed-preparation"],
    ["IIT versions conflated", (d) => d.graph.sources.find((s) => s.id === "tononi2004").year = 2014],
    ["unsigned notice borrowed authors", (d) => d.graph.sources.find((s) => s.id === "naccache2026-correction").authors = ["Lionel Naccache"]],
    ["original paper lost authors", (d) => d.graph.sources.find((s) => s.id === "naccache2025").authors = []],
    ["correction substituted for commentary", (d) => d.graph.sources.find((s) => s.id === "naccache2025").doi = "10.1093/nc/niag020"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("neuroimmune evidence distinguishes assays, controls, nulls and incomplete circuit claims", () => {
  for (const [label, mutate] of [
    ["endotoxin survival became live-infection protection", (d) => edge(d, "neural:trpa1-endotoxin-survival").source = "neur:trpa1-salmonella-protocol"],
    ["bacterial load became cytokine concentration", (d) => edge(d, "neural:trpa1-salmonella-burden").target = "neur:trpa1-activation-cytokines"],
    ["CALCA inherited the TRPA1 profile", (d) => edge(d, "neural:calca-activation-cytokines").target = "neur:trpa1-activation-cytokines"],
    ["TRAP and DBH populations conflated", (d) => edge(d, "neural:trap-inhibition-cytokines").source = "neur:dbh-activation-lps-protocol"],
    ["injected and perfused cytokines conflated", (d) => edge(d, "neural:perfused-cytokine-nodose-calcium").source = "neur:injected-cytokine-imaging-protocol"],
    ["tracing became functional stimulation", (d) => edge(d, "neural:dbh-activation-cytokines").source = "neur:vagal-cnst-tracing"],
    ["IL-10 null gained an edge", (d) => edge(d, "neural:calca-activation-cytokines").target = "neur:calca-il10-null"],
    ["corticosterone null assigned to infection", (d) => claim(d, "C-trpa1-corticosterone-null").citations[0].locator = claim(d, "C-trpa1-salmonella-burden").citations[0].locator],
    ["closed immune loop declared", (d) => claim(d, "C-neuroimmune-circuit-closure").status = "publication-supported"],
    ["general protection declared", (d) => claim(d, "C-neuroimmune-generalization").status = "publication-supported"],
    ["publication reading became reproduction", (d) => claim(d, "C-lps-cnst-fos").checkIds = ["objecthood-negative"]],
    ["primary finding became a review citation", (d) => claim(d, "C-lps-cnst-fos").citations[0].sourceId = "tracey2002"],
    ["study-design boundary lost", (d) => claim(d, "C-vagotomy-cnst-calcium").citations.pop()],
    ["reporting supplement acquired the primary DOI", (d) => d.graph.sources.find((s) => s.id === "jin2024-reporting").doi = "10.1038/s41586-024-07469-y"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});


test("vascular evidence preserves measurement, treatment and mediation boundaries", () => {
  for (const [label, mutate] of [
    ["voltage replaced by diameter", (d) => edge(d, "neural:cap-k-sm-voltage").target = "neur:cap-k-arteriole-dilation"],
    ["flux replaced by velocity", (d) => edge(d, "neural:cap-k-rbc-flux").target = "neur:cap-k-rbc-velocity"],
    ["cortical and capillary potassium conflated", (d) => edge(d, "neural:kir21-surface-k-hyperemia").source = "neur:cap-k-flux-protocol"],
    ["pericyte-site null became dilation", (d) => edge(d, "neural:cap-k-feed-diameter").target = "neur:cap-k-local-diameter-null"],
    ["channel current became membrane lipid concentration", (d) => edge(d, "neural:arf6-genetic-kir-current").target = "neur:arf6-kinase-proxy"],
    ["pharmacological and genetic perturbations conflated", (d) => edge(d, "neural:arf6-nav-dilation").source = "neur:arf6-genetic-patch-protocol"],
    ["PIP2 flow rescue assigned to the barium cohort", (d) => edge(d, "neural:arf6-pip2-hyperemia").source = "neur:arf6-genetic-flow-protocol"],
    ["pretreatment became sequential rescue", (d) => edge(d, "neural:arf6-nav-kir-current").source = "neur:arf6-pip2-patch-protocol"],
    ["constitutive and inducible studies pooled", (d) => claim(d, "C-kir21-cec-current").contextIds.push("noterman2026")],
    ["null lost its study scope", (d) => delete claim(d, "C-arf6-tone-null").contextIds],
    ["control null promoted to reproduced evidence", (d) => claim(d, "C-cap-k-pressure-null").checkIds = ["objecthood-negative"]],
    ["whole pathway declared", (d) => claim(d, "C-neurovascular-complete-route").status = "publication-supported"],
    ["exclusive lipid mediation declared", (d) => claim(d, "C-arf6-pip2-exclusive-mediation").status = "publication-supported"],
    ["hypothesis gained a study context", (d) => claim(d, "C-neurovascular-neural-readout").contextIds = ["longden2017"]],
    ["review replaced primary support", (d) => claim(d, "C-cap-k-rbc-flux").citations[0].sourceId = "iadecola2017"],
    ["reporting limits removed", (d) => claim(d, "C-cap-k-rbc-flux").citations.pop()],
    ["published article acquired an unrelated identifier", (d) => d.graph.sources.find((s) => s.id === "noterman2026").doi = "10.1038/nn.4533"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("arterial connexin evidence separates tissues, optical estimates and null outcomes", () => {
  for (const [label, mutate] of [
    ["aortic electrical assay became cortical diameter", (d) => edge(d, "neural:cx-aortic-electrical").target = "neur:cx-focal-diameter"],
    ["retinal loading became aortic patch loading", (d) => edge(d, "neural:cx-retinal-arterial-tracer").source = "neur:cx-aortic-tracer-protocol"],
    ["optical propagation became RBC velocity", (d) => edge(d, "neural:cx-opto-propagation").target = "neur:cap-k-rbc-velocity"],
    ["optical response became direct diameter", (d) => edge(d, "neural:cx-focal-hbt").target = "neur:cx-focal-diameter"],
    ["full-field inherited the focal stimulus", (d) => edge(d, "neural:cx-fullfield-hbt").source = "neur:cx-focal-hbt-protocol"],
    ["near-bin delay extended to far-bin null", (d) => edge(d, "neural:cx-opto-peak").target = "neur:cx-opto-far-peak-null"],
    ["local diameter null lost its context", (d) => delete claim(d, "C-cx-diving-diameter-null").contextIds],
    ["resting velocity null inherited a perfusion study", (d) => claim(d, "C-cx-resting-rbc-null").contextIds = ["longden2017"]],
    ["full-field null inherited optogenetic evidence", (d) => claim(d, "C-cx-fullfield-far-peak-null").citations[0].locator = claim(d, "C-cx-opto-far-peak-null").citations[0].locator],
    ["reporter observation became experimental support", (d) => edge(d, "neural:cx-focal-hbt").source = "neur:cx-reporter-zonation"],
    ["reading became a computational witness", (d) => claim(d, "C-cx-aortic-tracer").checkIds = ["objecthood-negative"]],
    ["signal carrier became established", (d) => claim(d, "C-cx-electrical-carrier").status = "publication-supported"],
    ["zonation became a proven routing rule", (d) => claim(d, "C-cx-zonation-routing").status = "definition"],
    ["whole route lost arterial evidence", (d) => claim(d, "C-neurovascular-complete-route").citations.pop()],
    ["arterial result inherited the capillary paper", (d) => claim(d, "C-cx-focal-hbt").citations[0].sourceId = "longden2017"],
    ["primary source identifier changed", (d) => d.graph.sources.find((s) => s.id === "krolak2025").doi = "10.1038/nn.4533"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("human radiocarbon measurements cannot become interventions, unique renewal laws or functional evidence", () => {
  for (const [name, mutate] of [
    ["isotope sampling became an intervention", (d) => d.neural.studies.find((s) => s.id === "spalding2013").studyType = "primary-experiment"],
    ["isotope inherited BrdU sampling", (d) => claim(d, "C-human-radiocarbon-neuronal-dna").contextIds = ["eriksson1998"]],
    ["nonneuronal data inherited a glial manipulation", (d) => claim(d, "C-human-radiocarbon-nonneuronal-dna").contextIds = ["nimmerjahn2005"]],
    ["fitted rate became observed truth", (d) => claim(d, "C-human-radiocarbon-renewal-model").status = "publication-supported"],
    ["survival model became a measured preparation", (d) => claim(d, "C-human-radiocarbon-survival-model").contextIds = ["spalding2013"]],
    ["sample exclusions and criterion disappeared", (d) => claim(d, "C-human-radiocarbon-renewal-model").citations = claim(d, "C-human-radiocarbon-renewal-model").citations.filter((c) => !c.locator.includes("sample selection"))],
    ["renewal acquired a functional consequence", (d) => d.graph.relations.push({ ...d.graph.relations.find((e) => e.id === "neural:ng-perforant-input"), id: "neural:radiocarbon-function", source: "neur:human-radiocarbon-neuronal-dna", target: "neur:ng-memory-route", contextIds: ["spalding2013"], claimIds: ["C-human-radiocarbon-neuronal-dna"] })],
    ["population feedback declared tested", (d) => d.neural.comparisons.find((c) => c.id === "neural-radiocarbon-population-control").result = "supported"],
    ["shared human functional hypothesis lost isotope provenance", (d) => claim(d, "C-human-brdu-functional-integration").citations.pop()]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
});

test("macaque birth labels preserve assay identity and unresolved construction mechanisms", () => {
  for (const [name, mutate] of [
    ["labeling became a causal intervention", (d) => d.neural.studies.find((s) => s.id === "kornack1999").studyType = "primary-experiment"],
    ["neuronal colabels inherited human histology", (d) => claim(d, "C-macaque-brdu-neuronal-colabels").contextIds = ["eriksson1998"]],
    ["oligodendroglial profiles inherited myelin manipulation", (d) => claim(d, "C-macaque-brdu-oligodendroglial-colabels").contextIds = ["etxeberria2016"]],
    ["PCNA became independently reproduced evidence", (d) => claim(d, "C-macaque-pcna-profiles").checkIds = ["objecthood-negative"]],
    ["retained-profile rate became a measured birth rate", (d) => claim(d, "C-macaque-neurogenesis-rate-model").status = "publication-supported"],
    ["nearby phenotypes became a measured clone", (d) => claim(d, "C-macaque-multipotent-progenitor").contextIds = ["kornack1999"]],
    ["static morphology became observed migration", (d) => claim(d, "C-macaque-neuron-migration-model").status = "publication-supported"],
    ["population replacement became observed feedback", (d) => claim(d, "C-macaque-neuron-replacement-model").contextIds = ["kornack1999"]],
    ["staining controls lost their protocol", (d) => claim(d, "C-macaque-brdu-staining-controls").citations.pop()],
    ["birth label acquired memory causation", (d) => d.graph.relations.push({ ...d.graph.relations.find((e) => e.id === "neural:ng-perforant-input"), id: "neural:macaque-memory", source: "neur:macaque-brdu-neuronal-colabels", target: "neur:ng-memory-route", contextIds: ["kornack1999"], claimIds: ["C-macaque-brdu-neuronal-colabels"] })],
    ["common-founder comparison declared resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-macaque-common-progenitor").result = "supported"],
    ["memory hypothesis lost primate scope", (d) => claim(d, "C-ng-memory-route").citations.pop()]
  ]) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
});

test("primate age markers cannot become completed aged lineages or hormonal interventions", () => {
  for (const [name, mutate] of [
    ["primate labeling became an experiment", (d) => d.neural.studies.find((s) => s.id === "gould1999-primate").studyType = "primary-experiment"],
    ["primate observation inherited the learning paper", (d) => claim(d, "C-primate-neuronal-colabels").contextIds = ["gould1999-learning"]],
    ["oldest-age completion became established", (d) => claim(d, "C-primate-aged-neuron-production").status = "publication-supported"],
    ["TOAD profiles inherited neuronal birthdating", (d) => claim(d, "C-primate-toad-age-profiles").citations[0].locator = claim(d, "C-primate-neuronal-colabels").citations[0].locator],
    ["hormonal hypothesis acquired an observed context", (d) => claim(d, "C-primate-glucocorticoid-aging").contextIds = ["gould1999-primate"]],
    ["regional profiles became a tracked olfactory lineage", (d) => claim(d, "C-primate-olfactory-route").status = "publication-supported"],
    ["age comparison declared resolved", (d) => d.neural.comparisons.find((c) => c.id === "neural-primate-aged-differentiation").result = "supported"]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
});

test("learning effects preserve task, labeling window, observable and untested survival", () => {
  for (const [name, mutate] of [
    ["trace gained a place protocol", (d) => edge(d, "neural:learning-trace-retained").source = "neur:learning-place-protocol"],
    ["early retained labels became a late-label null", (d) => edge(d, "neural:learning-trace-retained").target = "neur:learning-late-label-null"],
    ["degeneration became a volume null", (d) => edge(d, "neural:learning-place-pyknosis").target = "neur:learning-volume-null"],
    ["cue null inherited a positive trace passage", (d) => claim(d, "C-learning-cue-null").citations[0].locator = claim(d, "C-learning-trace-retained").citations[0].locator],
    ["SVZ null lost its sampling protocol", (d) => claim(d, "C-learning-svz-null").citations.pop()],
    ["marker profile became independently reproduced", (d) => claim(d, "C-learning-marker-profiles").checkIds = ["operator-sign"]],
    ["survival became identified causation", (d) => claim(d, "C-learning-survival-mechanism").status = "publication-supported"],
    ["universal learning necessity declared", (d) => d.neural.comparisons.find((c) => c.id === "neural-learning-neurogenesis-necessity").result = "supported"],
    ["two papers merged by DOI", (d) => d.graph.sources.find((s) => s.id === "gould1999-learning").doi = "10.1073/pnas.96.9.5263"],
    ["shared memory hypothesis lost training evidence", (d) => claim(d, "C-ng-memory-route").citations.pop()]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
});

test("autoradiographic nulls retain age, method, observation and publication boundaries", () => {
  for (const [label, mutate] of [
    ["course date replaced original year", (d) => d.graph.sources.find((s) => s.id === "rakic1985").year = 1988],
    ["birth labeling became an induction experiment", (d) => d.neural.studies.find((s) => s.id === "eckenhoff1988").studyType = "primary-experiment"],
    ["adult null inherited early developmental evidence", (d) => claim(d, "C-dentate-adult-neuronal-null").citations[0].locator = claim(d, "C-dentate-developmental-labeling").citations[0].locator],
    ["GFAP composition became a birthdated assay", (d) => claim(d, "C-dentate-gfap-composition").citations[0].locator = claim(d, "C-dentate-label-gfap-profiles").citations[0].locator],
    ["1985 result inherited 1988 preparation", (d) => claim(d, "C-rhesus-autoradiographic-neuronal-null").contextIds = ["eckenhoff1988"]],
    ["ultrastructure lost its methods", (d) => claim(d, "C-dentate-label-ultrastructure").citations.pop()],
    ["source reading became independent reproduction", (d) => claim(d, "C-rhesus-labeling-positive-controls").checkIds = ["operator-sign"]]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("spatial gaze and fMRI preserve measure direction, cohorts and observational limits", () => {
  for (const [label, mutate] of [
    ["gaze ratio became an anticipation percentage", (d) => claim(d, "D-spatial-gaze-index").statement = "Higher values indicate a greater percentage of anticipatory movements."],
    ["definition became an observed experiment", (d) => claim(d, "D-spatial-gaze-index").contextIds = ["wang2019-behavior"]],
    ["behavioral null inherited scanner membership", (d) => claim(d, "C-spatial-gaze-deep-null").contextIds = ["wang2019-scanner"]],
    ["scanner gaze silently covered all participants", (d) => d.neural.studies.find((s) => s.id === "wang2019-scanner").organism = "20 adults with complete eye tracking"],
    ["localizer became numerical reproduction", (d) => claim(d, "C-spatial-fmri-localizer").checkIds = ["operator-sign"]],
    ["masking lost its supplementary limits", (d) => claim(d, "C-spatial-fmri-complexity").citations.pop()],
    ["behavioral task acquired a BOLD endpoint", (d) => edge(d, "neural:spatial-gaze-anticipation").target = "neur:spatial-fmri-nesting"],
    ["language necessity declared established", (d) => d.neural.comparisons.find((c) => c.id === "neural-spatial-language-necessity").result = "supported"],
    ["program hypothesis lost the primary temporal limit", (d) => claim(d, "C-symbol-program-induction").citations.pop()]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});

test("negative detection cannot close developmental cessation, ancestry or memory mechanisms", () => {
  for (const [label, mutate] of [
    ["universal cessation became supported", (d) => claim(d, "C-primate-developmental-cessation").status = "publication-supported"],
    ["precursor hypothesis acquired a measured context", (d) => claim(d, "C-dentate-committed-precursors").contextIds = ["eckenhoff1988"]],
    ["shared memory interpretation lost the negative study", (d) => claim(d, "C-ng-memory-route").citations.pop()],
    ["null and positive preparations pooled", (d) => d.neural.comparisons.find((c) => c.id === "neural-primate-null-positive-methods").result = "not-tested"],
    ["publication dependence discarded", (d) => d.neural.comparisons.find((c) => c.id === "neural-autoradiographic-independence").sourceIds.pop()],
    ["phenotype acquired a developmental cause", (d) => d.graph.relations.push({ id: "neural:gfap-cessation", source: "neur:dentate-gfap-composition", target: "neur:primate-developmental-cessation", kind: "functional-support", role: "scoped-operating-support", assertion: "GFAP determines cessation.", claimIds: ["C-dentate-gfap-composition"], contextIds: ["eckenhoff1988"] })]
  ]) {
    const changed = structuredClone(data); mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
});
