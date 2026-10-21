import { recordEvidenceContext, resolveRecordEvidence } from "../../apps/model-studio/record-evidence.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { compileCanonicalGraph } from "../../models/causal-emergence/canonical/build.mjs";
import { validateBiochemistryReview } from "../../models/causal-emergence/canonical/biochemistry.mjs";
import { BIOCHEMISTRY_CARDS } from "../../models/causal-emergence/canonical/level-three.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === id);
const study = (data, id) => data.biochemistry.studies.find((record) => record.id === id);
const context = (data) => Object.fromEntries(["sources", "claims", "entities", "relations"]
  .map((kind) => [kind, new Map(data.graph[kind].map((record) => [record.id, record]))]));

async function rejects(mutations) {
  const original = await source();
  for (const [reason, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateBiochemistryReview(changed, context(changed)),
      /Biochemistry|biochemical|Biochemical|biochemistry|Publication|Unreviewed|Duplicate study/, reason);
  }
}

test("folding and enzyme cards share their original acquisitions without multiplying publications", async () => {
  const data = await source();
  assert.ok([0, 1, 2].every((card) => BIOCHEMISTRY_CARDS.some((record) => record.card === card)));
  assert.equal(BIOCHEMISTRY_CARDS.find((record) => record.card === 1).records,
    BIOCHEMISTRY_CARDS.find((record) => record.card === 2).records);
  const ksi = ["kraut2010-ksi-kinetic-context", "kraut2010-ksi-structure-context", "kraut2010-ksi-probe-context"];
  assert.equal(new Set(ksi.map((id) => study(data, id).sourceId)).size, 1);
  assert.deepEqual(claim(data, "C-bio-ksi-solvation-interpretation").contextIds, ksi);
  assert.equal(claim(data, "C-bio-ksi-solvation-interpretation").status, "publication-supported");
  assert.equal(claim(data, "C-bio-t4-local-mechanistic-interpretation").status, "publication-supported");
  assert.equal(claim(data, "C-bio-enzyme-assay-and-active-site-scope").status, "literature-synthesis");
  assert.equal(data.biochemistry.independentScientificReviewComplete, false);
  assert.deepEqual(data.biochemistry.checkIds, []);
  assert.equal(new Set(data.biochemistry.studies.map((record) => record.id)).size, data.biochemistry.studies.length);
  for (const card of [0, 1, 2]) {
    assert.ok(data.graph.entities.some((record) => record.sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-3" && coordinate.locator === `/${card}`)));
  }
});

test("every empirical publication behind a positive biochemical claim has a supporting citation", async () => {
  const data = await source();
  const allStudies = new Map([data.pilot, data.routing, data.optics, data.visual, data.neural, data.physics, data.biochemistry]
    .flatMap((review) => review.studies).map((record) => [record.id, record]));
  const findings = data.graph.claims.filter((record) => record.id.startsWith("C-bio-")
    && ["publication-supported", "literature-synthesis"].includes(record.status));
  assert.ok(findings.length > 0);
  for (const finding of findings) {
    const publications = new Set(finding.contextIds.map((id) => {
      assert.ok(allStudies.has(id), `${finding.id} has an unknown empirical context: ${id}`);
      return allStudies.get(id).sourceId;
    }));
    for (const sourceId of publications) assert.ok(finding.citations.some((citation) =>
      citation.sourceId === sourceId && citation.role === "supports"),
    `${finding.id} counts ${sourceId} as empirical support; a method citation alone is insufficient`);
  }
});

test("RNase chemical, spectral and activity readouts preserve their substrate-dependent recovery and tentative mechanism", async () => {
  const data = await source();
  assert.match(claim(data, "C-bio-rnase-refolding-readouts").statement, /60-70%/);
  assert.match(claim(data, "C-bio-rnase-refolding-readouts").statement, /before substantial catalytic activity/);
  assert.match(claim(data, "C-bio-rnase-reshuffling-inference").statement, /tentatively/);
  await rejects([
    ["Bulk recovery must not become a universal thermodynamic proof", (d) => {
      claim(d, "C-bio-rnase-reshuffling-inference").statement = "Every sequence spontaneously reaches its unique global minimum.";
    }],
    ["Different substrate endpoints cannot become complete native recovery", (d) => {
      claim(d, "C-bio-rnase-refolding-readouts").statement = "All substrates recover exactly 100% native activity.";
    }],
    ["The source did not determine every lag-phase disulfide pairing", (d) => {
      claim(d, "C-bio-rnase-reshuffling-inference").limitations = ["The complete pathway was directly observed."];
    }]
  ]);
});

test("lymphotactin alternative folds, engineered variants and ligand-response proxies remain distinct", async () => {
  const data = await source();
  assert.match(claim(data, "C-bio-lymphotactin-nmr-folds").statement, /two WT Ltn NMR signal sets/);
  assert.ok(claim(data, "C-bio-lymphotactin-functional-readouts").limitations.some((limit) => /sequence and conformation together/.test(limit)));
  assert.ok(study(data, "tuinstra2008-lymphotactin-folds").limitations.some((limit) => /M63A\/M72A.*M63V\/M72A/.test(limit)));
  await rejects([
    ["Sequence-changing variants cannot become an identical-sequence intervention", (d) => {
      claim(d, "C-bio-lymphotactin-functional-readouts").limitations = ["Only the fold was changed in otherwise identical WT molecules."];
    }],
    ["A source construct conflict cannot be silently repaired", (d) => {
      study(d, "tuinstra2008-lymphotactin-folds").limitations = ["All construct identities were independently resolved."];
    }],
    ["A fluorescence proxy cannot become direct atomic dynamics", (d) => {
      claim(d, "C-bio-lymphotactin-heparin-response").statement = "The atomic heparin-driven folding trajectory was directly filmed in vivo.";
    }]
  ]);
});

test("protease persistence retains extrapolation, variant and reversible-state-model assumptions", async () => {
  const data = await source();
  const rates = claim(data, "C-bio-alp-folding-unfolding-rates");
  const inference = claim(data, "C-bio-alp-metastability-inference");
  assert.match(rates.statement, /extrapolated, not directly timed/);
  assert.ok(inference.limitations.some((limit) => /do not practically equilibrate/.test(limit)));
  assert.ok(inference.limitations.some((limit) => /S195A/.test(limit)));
  await rejects([
    ["Rate-derived half-times cannot become observed millennial incubations", (d) => {
      claim(d, rates.id).statement = "The sample was watched folding for thousands of years.";
    }],
    ["Rate ratios do not directly sample equilibrium populations", (d) => {
      claim(d, inference.id).limitations = ["I and N were directly equilibrated with identical variants and conditions."];
    }],
    ["Separate catalyzed and uncatalyzed pH cannot become a matched isolated-Pro effect", (d) => {
      claim(d, "M-bio-sohl1998-alp-context").limitations = ["Only Pro concentration changes; every other variable is matched."];
    }]
  ]);
});

test("KSI turnover, analogue geometry and probe spectra retain separate preparations and unresolved table arithmetic", async () => {
  const data = await source();
  const kinetics = claim(data, "M-bio-ksi-kinetic-preparation");
  assert.ok(kinetics.limitations.some((limit) => /does not print absolute kinetic enzyme concentrations/.test(limit)));
  assert.ok(kinetics.limitations.some((limit) => /13.2.*rather than 8/.test(limit)));
  assert.ok(claim(data, "C-bio-ksi-local-analogue-geometry").limitations.some((limit) => /left empty in the final model/.test(limit)));
  assert.ok(claim(data, "C-bio-ksi-local-probe-response").limitations.some((limit) => /not a measured local dielectric constant/.test(limit)));
  await rejects([
    ["Printed kcat/KM conflict cannot be silently converted to internally exact data", (d) => {
      claim(d, kinetics.id).limitations = claim(d, kinetics.id).limitations.filter((limit) => !limit.includes("13.2"));
    }],
    ["Crystallization stock is not a reported kinetic enzyme concentration", (d) => {
      study(d, "kraut2010-ksi-kinetic-context").preparation += " The kinetic enzyme concentration was 30 mg/ml.";
    }],
    ["Analogue double-mutant crystal is not the reacting single mutant", (d) => {
      claim(d, "C-bio-ksi-local-analogue-geometry").limitations = ["The reacting Y16S single-mutant transition state was directly observed."];
    }],
    ["Chemical shifts are not direct electric-field measurements", (d) => {
      claim(d, "C-bio-ksi-local-probe-response").statement = "A calibrated universal active-site electric field was directly measured.";
    }],
    ["Three methods in one publication are not independent replications", (d) => {
      claim(d, "C-bio-ksi-solvation-interpretation").status = "literature-synthesis";
    }]
  ]);
});

test("T4 product ratios retain endpoint timing, qualitative activity and inherited/unrefined structure limits", async () => {
  const data = await source();
  const products = claim(data, "C-bio-t4-transglycosylation-products");
  assert.match(products.statement, /10:1 after60 min/);
  assert.ok(products.limitations.some((limit) => /peak numbering.*conflicts/.test(limit)));
  assert.ok(claim(data, "C-bio-t4-local-mechanistic-interpretation").limitations.some((limit) => /were not refined/.test(limit)));
  await rejects([
    ["The 60-minute product ratio is not an initial-rate enhancement", (d) => {
      claim(d, products.id).statement = "T26H has a tenfold kcat enhancement over matched WT controls.";
    }],
    ["Qualitative halo inactivity cannot become an exact zero rate", (d) => {
      claim(d, "C-bio-t4-local-mechanistic-interpretation").statement = "Glu11 loss proves the microscopic catalytic rate is exactly zero in every lysozyme.";
    }],
    ["An inherited control is not a new independent structure acquisition", (d) => {
      study(d, "kuroki1999-t4-structure-context").preparation += " All mutant/control structures were newly refined and independently replicated.";
    }]
  ]);
});

test("new biochemical rules, carrier thresholds, bridge edges and evidence records require a reviewed admission", async () => {
  const data = await source();
  const ids = new Set(BIOCHEMISTRY_CARDS.filter((card) => [0, 1, 2].includes(card.card))
    .flatMap((card) => card.records.entities.map((record) => record.id)));
  assert.ok(data.graph.relations.filter((record) => ids.has(record.source) || ids.has(record.target))
    .every((record) => record.kind === "descriptive" && !record.carrier));
  await rejects([
    ["Catalogue minimum cannot become a physical threshold", (d) => {
      const edge = d.graph.relations.find((record) => record.id.startsWith("biochemistry:"));
      edge.carrier = { N_min: 1, N_crit: 1 };
    }],
    ["Separate physical source cannot become an unreviewed causal ancestor", (d) => {
      d.graph.relations.push({ ...d.graph.relations.find((record) => record.id.startsWith("biochemistry:")),
        id: "unreviewed-folding-bridge", source: "phys:h2-ground-binding", target: "bio:rnase-refolding-readouts" });
    }],
    ["A new biochemical experiment cannot be admitted by assigning a new ID", (d) => {
      d.biochemistry.studies.push({ ...d.biochemistry.studies[0], id: "invented-independent-replication" });
    }],
    ["Biochemical display grouping cannot invent a construction rule", (d) => {
      d.graph.rules[0].outputEntityIds.push("bio:rnase-refolding-readouts");
    }]
  ]);
  assert.doesNotThrow(() => validateCanonicalSource(data));
});

test("reviewed biochemical cards leave the pending queue with complete scoped records", async () => {
  const pending = JSON.parse(await readFile(new URL("../../references/canonical/pending-review.json", import.meta.url), "utf8"));
  for (const { card } of BIOCHEMISTRY_CARDS) assert.equal(pending.cards.some((entry) =>
    entry.sourcePath === "references/level-3.json" && entry.pointer === `/${card}`), false);
});

test("all fifty cards are required even when a missing card shares every scientific record", async () => {
  const data = await source();
  const expected = Array.from({ length: 50 }, (_, card) => card);
  assert.deepEqual(BIOCHEMISTRY_CARDS.map(({ card }) => card).sort((a, b) => a - b), expected);
  const index = BIOCHEMISTRY_CARDS.findIndex(({ card }) => card === 15);
  const shared = BIOCHEMISTRY_CARDS.find(({ card }) => card === 42);
  assert.equal(BIOCHEMISTRY_CARDS[index].records, shared.records);
  const [removed] = BIOCHEMISTRY_CARDS.splice(index, 1);
  try {
    assert.ok(BIOCHEMISTRY_CARDS.includes(shared), "The remaining shared card still admits the same records");
    assert.throws(() => validateBiochemistryReview(data, context(data)),
      /Incomplete Level-3 source-card inventory/);
  } finally {
    BIOCHEMISTRY_CARDS.splice(index, 0, removed);
  }
  assert.deepEqual(BIOCHEMISTRY_CARDS.map(({ card }) => card).sort((a, b) => a - b), expected);
});

test("CAPN negative cooperativity does not become a positive Hill response or a universal site-count law", async () => {
  const data = await source();
  const binding = claim(data, "C-bio-capn-sequential-binding");
  assert.match(binding.statement, /negative cooperativity/);
  assert.match(binding.statement, /0.04 and4micromolar/);
  assert.ok(binding.limitations.some((limit) => /combinatorial\/state convention/.test(limit)));
  assert.equal(claim(data, "C-bio-capn-entropic-interpretation").status, "publication-supported");
  assert.equal(new Set(claim(data, "C-bio-capn-entropic-interpretation").contextIds
    .map((id) => study(data, id).sourceId)).size, 1);
  await rejects([
    ["Sequential fitted constants are not a Hill coefficient or molecular count", (d) => {
      claim(d, binding.id).statement = "The Hill coefficient proves a universal two-molecule threshold and positive amplification.";
    }],
    ["An isolated CAP domain is not a transcription or catalytic assay", (d) => {
      study(d, "popovych2006-capn-nmr").limitations = ["Full-length CAP transcriptional activation and catalytic turnover were measured."];
    }],
    ["One paper with two methods cannot become independent corroboration", (d) => {
      claim(d, "C-bio-capn-entropic-interpretation").status = "literature-synthesis";
    }]
  ]);
});

test("CAPN remote motion and exchange protection do not identify a unique pathway or intrinsic bond strength", async () => {
  const data = await source();
  const inference = claim(data, "C-bio-capn-entropic-interpretation");
  assert.match(inference.statement, /upper-bound model estimates/);
  assert.match(inference.statement, /not the same quantity/);
  assert.ok(claim(data, "C-bio-capn-amide-exchange-response").limitations.some((limit) => /intrinsic bond strength/.test(limit)));
  const edges = data.graph.relations.filter((record) => record.kind === "functional-support"
    && record.id.startsWith("biochemistry:capn-ligation-comparison-"));
  assert.equal(edges.length, 2);
  for (const edge of edges) assert.deepEqual(edge.contextIds, ["popovych2006-capn-nmr"]);
  await rejects([
    ["Motion-derived conformational entropy is not total calorimetric entropy", (d) => {
      claim(d, inference.id).statement = "ITC directly measures the complete protein-only entropy and uniquely proves an entropy-only mechanism.";
    }],
    ["Exchange protection is not a direct bond-energy measurement", (d) => {
      claim(d, "C-bio-capn-amide-exchange-response").statement = "Every remote hydrogen bond became stronger by the directly measured amount.";
    }],
    ["A matched NMR response cannot acquire an unmatched ITC context", (d) => {
      d.graph.relations.find((record) => record.id === edges[0].id).contextIds.push("popovych2006-capn-itc");
    }],
    ["Limited chemical shifts cannot prove exact atomic structural identity", (d) => {
      claim(d, "C-bio-capn-distal-nmr-response").limitations = ["All structural and solvent alternatives have been rigorously excluded."];
    }]
  ]);
});

test("hammerhead FRET titrations and catalytic progress curves retain their different strands and ion backgrounds", async () => {
  const data = await source();
  assert.equal(BIOCHEMISTRY_CARDS.find((record) => record.card === 7).records,
    BIOCHEMISTRY_CARDS.find((record) => record.card === 8).records);
  const fret = claim(data, "C-bio-penedo-hammerhead-fret-response");
  const cleavage = claim(data, "C-bio-penedo-hammerhead-cleavage-response");
  assert.match(fret.statement, /decrease in FRET/);
  assert.match(cleavage.statement, /500 mM NaCl/);
  assert.ok(claim(data, "M-bio-penedo-hammerhead-fret-preparation").limitations.some((limit) => /not elapsed folding time/.test(limit)));
  await rejects([
    ["A concentration titration is not a measured temporal folding rate", (d) => {
      claim(d, fret.id).statement = "The RNA folds at 160 micromolar per second along a directly observed two-state trajectory.";
    }],
    ["Low magnesium does not erase the high sodium background", (d) => {
      claim(d, cleavage.id).statement = "The reaction occurs in physiological pure water with no supplied ions.";
    }],
    ["Noncleavable dye constructs are not simultaneous catalytic structural measurements", (d) => {
      claim(d, "M-bio-penedo-hammerhead-fret-preparation").limitations = ["The same unmodified RNA molecule supplies both measurements under identical conditions."];
    }],
    ["Prepared synthetic RNA does not establish a transcription prerequisite", (d) => {
      claim(d, "D-bio-rna-folding-cleavage-observables").limitations = ["Ongoing enzymatic transcription is universally necessary for every RNA catalyst."];
    }]
  ]);
});

test("hammerhead ion responses preserve reaction-model, active-fraction and extrapolation conflicts", async () => {
  const data = await source();
  const kinetics = claim(data, "M-bio-boots-hammerhead-cleavage-preparation");
  assert.ok(kinetics.limitations.some((limit) => /kcleave\+kligate/.test(limit)));
  assert.ok(kinetics.limitations.some((limit) => /230.*extrapolation/.test(limit)));
  assert.ok(kinetics.limitations.some((limit) => /0.50.*4600/.test(limit)));
  const global = claim(data, "C-bio-boots-hammerhead-global-response");
  assert.ok(global.limitations.some((limit) => /not a fractional ion molecule count/.test(limit)));
  await rejects([
    ["Approach-to-equilibrium kobs is not multiple-turnover kcat", (d) => {
      claim(d, "C-bio-boots-hammerhead-ion-response").statement = "The measured kcat is the isolated chemical cleavage rate of every RNA molecule.";
    }],
    ["Source extrapolation and table/prose conflict cannot become a direct corrected trace", (d) => {
      claim(d, kinetics.id).limitations = ["All high-salt rates were directly measured and the calcium row was independently corrected to 0.05."];
    }],
    ["Global proximity cannot uniquely identify active-core geometry or chemical mechanism", (d) => {
      claim(d, "C-bio-hammerhead-folding-catalysis-boundary").statement = "The same global FRET response proves the same catalytic structure and identifies a unique metal mechanism.";
    }],
    ["Unreviewed supporting figures cannot become newly inspected primary data", (d) => {
      const paper = d.graph.sources.find((record) => record.id === "boots2008-hammerhead-ions");
      paper.review.extent = "all-supplementary-and-raw-data-independently-reproduced";
    }]
  ]);
});

test("biochemical electron-capture extension remains unsupported rather than borrowing stored-ion evidence", async () => {
  const data = await source();
  const hypothesis = claim(data, "C-bio-biochemical-ec-boundary");
  assert.equal(hypothesis.status, "unresolved");
  assert.equal(hypothesis.contextIds, undefined, "No positive biochemical preparation has been admitted");
  assert.ok(hypothesis.citations.filter((citation) => citation.sourceId === "litvinov2007-pr-ec")
    .every((citation) => citation.role === "limits"));
  assert.equal(entity(data, "bio:biochemical-ec-hypothesis").status, "hypothesis");
  await rejects([
    ["A stripped-ion rate is not a measured enzyme intervention", (d) => {
      claim(d, hypothesis.id).status = "publication-supported";
      claim(d, hypothesis.id).contextIds = ["litvinov2007-pr-ec"];
    }],
    ["A bounded review cannot assert absence throughout nature or the literature", (d) => {
      claim(d, hypothesis.id).statement = "Biochemical electron-capture effects are proven impossible and absent from all literature.";
    }],
    ["A physical ion preparation cannot be relabelled biochemical", (d) => {
      d.physics.studies.find((record) => record.sourceId === "litvinov2007-pr-ec").preparation = "A matched biochemical enzyme intervention.";
    }]
  ]);
});

test("retinal reuse preserves actual reading, probabilistic yield and high-fluence transfer limits", async () => {
  const data = await source();
  const scope = claim(data, "C-bio-photopigment-source-scope");
  assert.deepEqual(scope.contextIds, ["peteanu1993", "kim2001", "gruhl2023"]);
  assert.ok(scope.limitations.some((limit) => /below unity and wavelength dependent/.test(limit)));
  assert.ok(scope.limitations.some((limit) => /Multiphoton influence cannot be excluded/.test(limit)));
  assert.ok(scope.limitations.some((limit) => /ground-singlet/.test(limit)));
  assert.ok(scope.limitations.some((limit) => /stationary six-electron benzene/.test(limit)));
  for (const id of scope.contextIds) assert.equal(data.biochemistry.studies.some((record) => record.id === id), false);
  await rejects([
    ["A successful single-photon event cannot become certainty per absorbed photon", (d) => {
      claim(d, scope.id).statement = "Every absorbed photon deterministically creates the complete downstream neural signal.";
    }],
    ["Existing abstract-only evidence cannot become fully read acquisition data", (d) => {
      d.pilot.studies.find((record) => record.id === "peteanu1993").readExtent = "full-primary-article-and-reproduced-raw-data";
    }],
    ["Reusing a preparation cannot duplicate it into a second evidence ledger", (d) => {
      d.biochemistry.studies.push(structuredClone(d.pilot.studies.find((record) => record.id === "peteanu1993")));
    }],
    ["Moving an original preparation cannot silently change domain ownership", (d) => {
      const index = d.pilot.studies.findIndex((record) => record.id === "peteanu1993");
      d.biochemistry.studies.push(d.pilot.studies.splice(index, 1)[0]);
    }],
    ["Old rods and pigment measurements cannot become one matched cascade", (d) => {
      claim(d, scope.id).limitations = ["One shared preparation directly measured every biochemical and electrical stage."];
    }]
  ]);
});

test("chaperonin recovery retains release/dimerization, aggregation proxies and combined protocol changes", async () => {
  const data = await source();
  const recovery = claim(data, "C-bio-rubisco-activity-recovery");
  assert.ok(recovery.limitations.some((limit) => /allow released monomers to assemble/.test(limit)));
  assert.ok(claim(data, "C-bio-mbp-fluorescence-and-scattering").limitations.some((limit) => /chloride alone is not isolated/.test(limit)));
  const inference = claim(data, "C-bio-chaperonin-aggregation-account");
  assert.equal(inference.status, "publication-supported");
  assert.equal(new Set(inference.contextIds.map((id) => study(data, id).sourceId)).size, 1);
  await rejects([
    ["Recovered activity after release is not an active dimer inside one chamber", (d) => {
      claim(d, recovery.id).statement = "Native Rubisco dimers were directly observed catalysing inside each single-client SR1 chamber.";
    }],
    ["Several changed solution components cannot become isolated chloride causation", (d) => {
      claim(d, "C-bio-mbp-chaperonin-protocol-comparison").statement = "Only chloride changed while all other conditions were identical.";
    }],
    ["Fluorescence is not a maltose-binding functional assay", (d) => {
      claim(d, "C-bio-mbp-fluorescence-and-scattering").statement = "The MBP maltose-binding affinity was directly measured from tryptophan fluorescence recovery.";
    }],
    ["These clients do not establish a universal passive-only mechanism", (d) => {
      claim(d, inference.id).statement = "All chaperonins are proven passive with identical microscopic folding routes for every client.";
    }]
  ]);
});

test("proteasome substrate susceptibility preserves lysate, tagging, clipping and control-condition boundaries", async () => {
  const data = await source();
  const degradation = claim(data, "C-bio-proteasome-tail-dependent-degradation");
  const clipping = claim(data, "C-bio-proteasome-stabilized-domain-clipping");
  assert.match(clipping.statement, /stabilized folded domain persists/);
  assert.ok(degradation.limitations.some((limit) => /not a newly measured native Lys48/.test(limit)));
  assert.ok(claim(data, "C-bio-proteasome-unfolding-control").limitations.some((limit) => /15 C.*100 micromolar/.test(limit)));
  await rejects([
    ["Lysate attribution is not a purified reconstituted proteasome measurement", (d) => {
      study(d, "prakash2004-substrate-degradation").preparation = "An independently purified and fully reconstituted proteasome with all components isolated.";
    }],
    ["Loss of a terminal epitope is not complete folded-domain destruction", (d) => {
      claim(d, clipping.id).statement = "Every stabilized DHFR molecule was completely destroyed into measured recycled amino acids.";
    }],
    ["Separate unfolding controls cannot erase temperature and ligand differences", (d) => {
      claim(d, "C-bio-proteasome-unfolding-control").limitations = ["Unfolding and degradation were measured simultaneously under identical conditions."];
    }],
    ["Defined folded substrates do not prove exclusive recognition of misfolding", (d) => {
      claim(d, "C-bio-selective-proteasome-degradation-source-scope").statement = "Only misfolded proteins are degraded and all native regulatory proteins are excluded.";
    }],
    ["Independent chaperone and proteasome studies cannot become a tested routing pathway", (d) => {
      d.graph.relations.push({ ...d.graph.relations.find((record) => record.id.startsWith("biochemistry:")),
        id: "biochemistry:invented-chaperone-proteasome-routing", source: "bio:rubisco-activity-recovery",
        target: "bio:proteasome-tail-dependent-degradation", kind: "functional-support" });
    }]
  ]);
});

test("kinetic conventions separate dimensionless equilibrium, elementary barriers and measured turnover", async () => {
  const data = await source();
  assert.match(claim(data, "D-bio-reaction-gibbs-equilibrium").statement, /K° is dimensionless/);
  const activation = claim(data, "D-bio-activation-gibbs-convention");
  assert.match(activation.statement, /κ.*c°.*1−n/);
  assert.ok(activation.limitations.some((limit) => /elementary reactions.*KSI kcat/.test(limit)));
  const ksi = claim(data, "C-bio-ksi-catalytic-energy-identifiability");
  assert.equal(ksi.status, "publication-supported");
  assert.deepEqual(ksi.contextIds, claim(data, "C-bio-ksi-solvation-interpretation").contextIds);
  await rejects([
    ["Thermodynamic K cannot inherit concentration units without its convention", (d) => {
      claim(d, "D-bio-reaction-gibbs-equilibrium").statement = "Every equilibrium constant has the same concentration units and is changed by a catalyst.";
    }],
    ["A composite turnover parameter cannot become an elementary barrier", (d) => {
      claim(d, activation.id).statement = "KSI kcat directly measures the unique microscopic transition-state energy with no reference-state or transmission factor.";
    }],
    ["Reused mutation/analogue/probe data cannot isolate a bond energy", (d) => {
      claim(d, ksi.id).statement = "The mutation directly isolates one hydrogen-bond energy and measures an altered equilibrium constant.";
    }]
  ]);
});

test("the bound antibody model does not supply affinity kinetics or an unbound-antibody comparison", async () => {
  const data = await source();
  const model = claim(data, "C-bio-hewl-d13-crystallographic-model");
  assert.match(model.statement, /2.8 angstrom.*0.28.*0.6 angstrom/);
  const scope = claim(data, "C-bio-antigen-antibody-recognition-source-scope");
  assert.ok(scope.limitations.some((limit) => /unliganded D1.3.*not been determined/.test(limit)));
  assert.ok(scope.limitations.some((limit) => /No solvent molecules were located/.test(limit)));
  await rejects([
    ["A static complex cannot determine induced fit versus selection", (d) => {
      claim(d, "C-bio-hewl-d13-conformational-comparison").statement = "Matched bound and unbound D1.3 structures prove the unique induced-fit pathway.";
    }],
    ["Inherited affinity work cannot become a new quantitative binding acquisition", (d) => {
      study(d, "amit1986-hewl-d13-crystallography").observable = "Newly measured association, dissociation and affinity constants across a complete specificity panel.";
    }],
    ["Unassigned solvent is not a resolved hydration mechanism", (d) => {
      claim(d, scope.id).limitations = ["All interfacial waters and their binding energies were independently resolved."];
    }]
  ]);
});

test("protein hydration preserves source fits, apparent water populations and the unresolved internal-water alternative", async () => {
  const data = await source();
  const fit = claim(data, "C-bio-bpti-mrd-source-fit");
  assert.match(fit.statement, /highest-frequency point excluded/);
  assert.match(fit.statement, /68.3 percent/);
  const scope = claim(data, "C-bio-protein-hydration-source-scope");
  assert.ok(scope.limitations.some((limit) => /W111.*inconsistent/.test(limit)));
  assert.ok(scope.limitations.some((limit) => /pH\*.*uncorrected/.test(limit)));
  await rejects([
    ["An apparent Nbeta*Sbeta^2 amplitude is not an exact molecule count", (d) => {
      claim(d, fit.id).statement = "Exactly three surface waters and all residence times were counted directly without a model.";
    }],
    ["Nonlocal magnetic sampling cannot become long-range solvent ordering", (d) => {
      claim(d, scope.id).statement = "The NOE proves a universal static long-range water and ionic shell that causes enzyme catalysis.";
    }],
    ["A stated internal-water conflict cannot silently disappear", (d) => {
      claim(d, scope.id).limitations = scope.limitations.filter((limit) => !limit.includes("W111"));
    }],
    ["Subzero emulsion MRD is not an ambient cellular acquisition", (d) => {
      study(d, "modig2004-bpti-supercooled-mrd").preparation = "Unmodified living cells at physiological temperature with directly imaged hydration and ion positions.";
    }]
  ]);
});

test("vesicle permeation, polymer retention and modified-nucleotide extension retain their separate preparations", async () => {
  const data = await source();
  const extension = claim(data, "C-bio-vesicle-template-extension");
  assert.deepEqual(extension.contextIds, ["mansy2008-encapsulated-primer-extension"]);
  assert.match(study(data, extension.contextIds[0]).preparation, /modified DNA primer/);
  assert.match(claim(data, "C-bio-vesicle-oligonucleotide-retention").statement, /24-hour/);
  assert.equal(claim(data, "C-bio-vesicle-permeability-scope").status, "publication-supported");
  await rejects([
    ["A homopolymer extension is not a copied RNA genome", (d) => {
      claim(d, extension.id).statement = "An encapsulated natural RNA genome replicated autonomously with measured fidelity across generations.";
    }],
    ["Passive solute selectivity is not measured active homeostasis", (d) => {
      claim(d, "C-bio-vesicle-permeability-scope").statement = "Every protocell actively regulates all nutrients, waste and internal ionic balance.";
    }],
    ["Finite retention cannot become indefinite genome inheritance", (d) => {
      claim(d, "C-bio-vesicle-oligonucleotide-retention").statement = "All copied genomes were retained indefinitely over self-sustained divisions.";
    }]
  ]);
});

test("fed vesicle division and membrane-area competition do not imply autonomous hereditary selection", async () => {
  const data = await source();
  const division = claim(data, "C-bio-vesicle-growth-division-scope");
  assert.match(division.statement, /applied fluid agitation/);
  assert.ok(division.limitations.some((limit) => /random short-RNA distribution/.test(limit)));
  const competition = claim(data, "C-bio-vesicle-competition-scope");
  assert.match(competition.statement, /21% area gain.*23% area loss/);
  assert.ok(competition.limitations.some((limit) => /Supporting Online Material remains unread/.test(limit)));
  await rejects([
    ["External membrane feed and agitation cannot become endogenous reproduction", (d) => {
      claim(d, division.id).statement = "Internally synthesized lipids drove autonomous division with accurate nonrandom genome segregation.";
    }],
    ["FRET membrane area is not measured genotype frequency", (d) => {
      claim(d, competition.id).statement = "Superior heritable genotypes increased their population frequency by exactly 21 percent.";
    }],
    ["A distinct sucrose/oleate arm cannot fill missing tRNA assay conditions", (d) => {
      study(d, "chen2004-trna-area-competition").limitations = ["Every exact tRNA preparation and uncertainty was independently reconstructed from the sucrose figure."];
    }]
  ]);
});

test("reconstituted energy transduction preserves external-pH and ATP-trapping readout boundaries", async () => {
  const data = await source();
  const proton = claim(data, "C-bio-racker-proton-response");
  const phosphorylation = claim(data, "C-bio-racker-phosphorylation-response");
  assert.notDeepEqual(proton.contextIds, phosphorylation.contextIds);
  const interpretation = claim(data, "C-bio-racker-coupling-interpretation");
  assert.equal(interpretation.status, "publication-supported");
  assert.deepEqual(interpretation.contextIds, [...proton.contextIds, ...phosphorylation.contextIds]);
  assert.ok(phosphorylation.limitations.some((limit) => /glucose-6-phosphate.*ATP is supplied initially/.test(limit)));
  assert.ok(proton.limitations.some((limit) => /not thermodynamic equilibrium/.test(limit)));
  const primitive = claim(data, "C-bio-primitive-chemiosmotic-coupling-open");
  assert.equal(primitive.status, "unresolved");
  assert.equal(primitive.contextIds, undefined);
  await rejects([
    ["The trapping assay is not directly accumulated ATP", (d) => {
      claim(d, phosphorylation.id).statement = "The assay directly measured net free ATP concentration from initially absent ATP.";
    }],
    ["A bulk external pH trace is not complete proton-motive force or homeostasis", (d) => {
      claim(d, proton.id).statement = "Internal pH, membrane voltage, H+/ATP efficiency and homeostatic feedback were measured simultaneously.";
    }],
    ["Two contexts from one paper cannot become independent publication synthesis", (d) => {
      claim(d, interpretation.id).status = "literature-synthesis";
    }],
    ["Modern biological proteins do not instantiate protein-free primitive coupling", (d) => {
      claim(d, primitive.id).status = "publication-supported";
      claim(d, primitive.id).contextIds = interpretation.contextIds;
    }],
    ["Driven activities cannot change the same reaction's intrinsic equilibrium constant", (d) => {
      claim(d, "D-bio-electrochemical-gradient-coupling").statement = "Ion pumps change the intrinsic standard equilibrium constant of every nearby unchanged reaction.";
    }]
  ]);
});

test("signal and sequence scopes reuse existing assays without inventing topology or inheritance", async () => {
  const data = await source();
  const signal = claim(data, "C-bio-signal-transduction-source-scope");
  assert.deepEqual(signal.contextIds, ["fung1981"]);
  assert.equal(data.biochemistry.studies.some((record) => record.id === "fung1981"), false);
  assert.equal(data.graph.sources.find((record) => record.id === "fung1981").review.extent, "abstract-and-bibliographic-metadata");
  const sequence = claim(data, "C-bio-sequence-dependent-folding-scope");
  assert.ok(sequence.limitations.some((limit) => /sequence and conformation together/.test(limit)));
  await rejects([
    ["Local biochemical activation is not a mapped adaptive network", (d) => {
      claim(d, signal.id).statement = "The complete branching, gain and feedback architecture was directly measured in the same electrically recorded rod.";
    }],
    ["Reusing an abstract cannot expand the source reading extent", (d) => {
      d.pilot.studies.find((record) => record.id === "fung1981").readExtent = "complete-primary-article-and-raw-data-reproduction";
    }],
    ["A construct-dependent function does not establish inherited sequence selection", (d) => {
      claim(d, sequence.id).statement = "Each sequence has one unique native fold, and its heritable selective amplification was directly measured.";
    }]
  ]);
});

test("redox reporter reversal and pH genotype responses do not become complete homeostatic mechanisms", async () => {
  const data = await source();
  const redox = claim(data, "C-bio-redox-recovery-inference");
  assert.equal(redox.status, "publication-supported");
  assert.equal(new Set(redox.contextIds.map((id) => study(data, id).sourceId)).size, 1);
  assert.ok(redox.limitations.some((limit) => /DTT-induced reversal.*imposed externally/.test(limit)));
  const ph = claim(data, "C-bio-yeast-glucose-ph-response");
  assert.ok(ph.limitations.some((limit) => /PMA1.*excluded/.test(limit)));
  assert.ok(ph.limitations.some((limit) => /30-second acquisition dead time/.test(limit)));
  await rejects([
    ["A sensor ratio is not every compartment's cofactor potential", (d) => {
      claim(d, redox.id).statement = "An absolute universal NAD+/NADH potential was directly measured in every organelle.";
    }],
    ["External reductant is not an endogenous feedback controller", (d) => {
      claim(d, "C-bio-hela-redox-response").statement = "Externally induced reduction uniquely proves autonomous glutathione-recycling feedback flux.";
    }],
    ["An excluded essential pump was not directly tested by deletion", (d) => {
      claim(d, ph.id).statement = "A PMA1 deletion directly measured proton-pump stoichiometry and a unique positive feedback loop.";
    }],
    ["An upstream standard curve cannot become a newly replayed absolute calibration", (d) => {
      claim(d, "D-bio-intracellular-ph-reporter").limitations = ["Every strain's complete calibration and absolute accuracy was independently reproduced."];
    }]
  ]);
});

test("template-copying rates retain separate-assay discrimination, supplied activation and source-condition conflicts", async () => {
  const data = await source();
  const discrimination = claim(data, "C-bio-template-dependent-rate-discrimination");
  assert.match(discrimination.statement, /98%/);
  const boundary = claim(data, "D-bio-template-chemistry-readout-boundary");
  assert.match(boundary.statement, /separate-assay convention/);
  const copying = claim(data, "C-bio-nonenzymatic-extension-source-scope");
  assert.equal(copying.status, "literature-synthesis");
  assert.equal(data.biochemistry.studies.filter((record) => record.id === "mansy2008-encapsulated-primer-extension").length, 1);
  const paper = data.graph.sources.find((record) => record.id === "prywes2016-helper-rna-copying");
  assert.match(paper.review.limit, /50mM.*25mM/);
  await rejects([
    ["Separate matched/mismatched rate fractions are not mixed-pool genome accuracy", (d) => {
      claim(d, discrimination.id).statement = "Every mixed-sequence genome was directly copied with exactly 98 percent fidelity through unlimited generations.";
    }],
    ["Prepared activated stock is not continuous prebiotic reactivation", (d) => {
      claim(d, "C-bio-prepared-nucleotide-activation").statement = "A universal natural energy source sustained autonomous activation without supplied reagents.";
    }],
    ["Conflicting caption and Methods conditions cannot be silently repaired", (d) => {
      d.graph.sources.find((record) => record.id === paper.id).review.limit = "All conditions agree exactly and every reaction temperature was directly reported.";
    }],
    ["The distinct Mansy modified-DNA reaction cannot inherit Prywes discrimination", (d) => {
      study(d, "mansy2008-encapsulated-primer-extension").finding = "The same RNA chemistry directly measured 98 percent mixed-genome copying fidelity.";
    }]
  ]);
});

test("channel conductance reuse and synthetic enzyme cages preserve structural and mechanism limits", async () => {
  const data = await source();
  const channel = claim(data, "C-bio-ion-channel-transport-source-scope");
  assert.deepEqual(channel.contextIds, ["fesenko1985"]);
  assert.equal(data.biochemistry.studies.some((record) => record.id === "fesenko1985"), false);
  assert.ok(channel.limitations.some((limit) => /single-channel current steps were not resolved/.test(limit)));
  const coupled = claim(data, "C-bio-gox-hrp-coupled-activity-response");
  assert.match(coupled.statement, /8 fold.*4 fold.*3 fold/);
  const account = claim(data, "C-bio-gox-hrp-compartment-account");
  assert.equal(account.status, "publication-supported");
  assert.ok(account.limitations.some((limit) => /Separate full cages and half-cages also increase/.test(limit)));
  const effects = data.graph.relations.filter((edge) => edge.id.startsWith("biochemistry:gox-hrp-") && edge.kind === "functional-support");
  assert.equal(effects.length, 1);
  assert.deepEqual(effects[0].contextIds, ["zhao2016-gox-hrp-cascade"]);
  await rejects([
    ["Patch-noise inference cannot become a resolved pore structure", (d) => {
      claim(d, channel.id).statement = "The full atomic pore and its exact molecular occupancy were directly determined from resolved single-channel steps.";
    }],
    ["A combined preparation comparison does not isolate channeling", (d) => {
      claim(d, coupled.id).statement = "An eightfold microscopic turnover increase uniquely proves direct intermediate channeling at identical active-site occupancy.";
    }],
    ["Morphology and bulk activity are not the same acquisition", (d) => {
      d.graph.relations.find((edge) => edge.id === effects[0].id).contextIds.push("zhao2016-cage-characterization");
    }],
    ["A porous synthetic scaffold is not a closed metabolic cycle", (d) => {
      claim(d, "C-bio-metabolic-compartment-source-scope").statement = "The compartment directly sustained a closed metabolic cycle with measured intermediate retention and synchronized feedback.";
    }]
  ]);
});

test("chromatin reuse separates profiles and broad perturbations from inherited causal packaging", async () => {
  const data = await source();
  const regulation = claim(data, "C-bio-epigenetic-regulation-source-scope");
  const packaging = claim(data, "C-bio-chromatin-packaging-source-scope");
  assert.deepEqual(regulation.contextIds, ["weaver2004"]);
  assert.equal(packaging.status, "literature-synthesis");
  assert.deepEqual(packaging.contextIds, ["su2017", "marco2020"]);
  for (const id of ["weaver2004", "su2017", "marco2020"]) {
    assert.equal(data.biochemistry.studies.some((record) => record.id === id), false);
  }
  assert.ok(packaging.limitations.some((limit) => /not unique three-dimensional coordinates/.test(limit)));
  assert.doesNotThrow(() => validateCanonicalSource(data), "Exact biochemical methods/synthesis can reuse intact neural preparations");
  await rejects([
    ["Broad TSA treatment does not isolate a methylation-mediated inherited state", (d) => {
      claim(d, regulation.id).statement = "A locus-specific edit uniquely proved mitotic and germline inheritance of the entire chromatin state.";
    }],
    ["Population contact profiles are not a unique mechanical causal geometry", (d) => {
      claim(d, packaging.id).statement = "Single-cell three-dimensional packing coordinates directly determined transcription rates and caused memory.";
    }],
    ["Reused neural evidence cannot lose its source conflicts", (d) => {
      d.neural.studies.find((record) => record.id === "weaver2004").limitations = [];
    }],
    ["The scoped reuse exemption cannot admit an arbitrary biochemical method", (d) => {
      d.graph.claims.push({ ...claim(d, "M-bio-chromatin-packaging-source-scope"), id: "M-bio-invented-chromatin-acquisition" });
    }]
  ]);
});

test("protein modification reuse distinguishes net conjugate accumulation from genetic fusion and universal reversibility", async () => {
  const data = await source();
  const modification = claim(data, "C-bio-protein-modification-source-scope");
  assert.deepEqual(modification.contextIds, ["prakash2004-substrate-ubiquitination"]);
  assert.ok(modification.limitations.some((limit) => /genetically encoded linear Ub4 fusion is not/.test(limit)));
  assert.ok(modification.limitations.some((limit) => /isolated ligation rate/.test(limit)));
  await rejects([
    ["An encoded linear fusion is not newly measured post-translational conjugation", (d) => {
      claim(d, modification.id).statement = "The Ub4 genetic fusion directly measured native Lys48-chain attachment at every exact substrate site.";
    }],
    ["Net band accumulation under inhibitors is not an isolated enzymatic rate", (d) => {
      claim(d, modification.id).limitations = ["The complete E1/E2/E3 mechanism and microscopic ligation rates were directly measured."];
    }],
    ["One ubiquitination assay does not demonstrate every fast reversible modification", (d) => {
      claim(d, modification.id).statement = "All protein modifications are proven fast and reversible after completed synthesis and universally sufficient for degradation.";
    }]
  ]);
});

test("reciprocal RNA amplification and CETCH cycling retain external resources and finite readout scope", async () => {
  const data = await source();
  const rna = claim(data, "C-bio-rna-finite-serial-amplification");
  assert.match(rna.statement, /fresh substrate.*30 hours/);
  const cycle = claim(data, "C-bio-cetch-intermediate-product-observation");
  assert.match(cycle.statement, /externally supplied acetyl-CoA carbon/);
  await rejects([
    ["Finite transfers are not unlimited all-resource autonomy", (d) => {
      claim(d, rna.id).statement = "The system generated all substrates and arbitrary genomes indefinitely without external replenishment.";
    }],
    ["Product trapping is not complete carbon balance or self-production of enzymes", (d) => {
      claim(d, "C-bio-cetch-finite-cyclic-operation").statement = "All malate carbon came from CO2 and every enzyme was autonomously regenerated with complete energetic accounting.";
    }],
    ["Separate prepared networks cannot become one measured evolutionary precursor chain", (d) => {
      d.graph.relations.push({ ...d.graph.relations.find((edge) => edge.id.startsWith("biochemistry:")),
        id: "biochemistry:invented-rna-cetch-ancestry", source: "bio:autocatalytic-network-source-scope",
        target: "bio:metabolic-cycle-source-scope", kind: "functional-support" });
    }]
  ]);
});

test("genetic-information assays distinguish isotope partition, RNA composition and polyU-driven product from sequence fidelity", async () => {
  const data = await source();
  const scope = claim(data, "C-bio-replication-transcription-source-scope");
  assert.equal(scope.status, "literature-synthesis");
  assert.equal(new Set(scope.contextIds.map((id) => study(data, id).sourceId)).size, 2);
  assert.match(claim(data, "C-bio-dna-heat-subunit-response").statement, /without direct chemical identification/);
  assert.match(claim(data, "C-bio-dna-rna-composition-response").statement, /without direct sequence fidelity/);
  await rejects([
    ["DNA nitrogen partition is not a measured copying error rate", (d) => {
      claim(d, "C-bio-dna-isotope-partition-response").statement = "Every nucleotide sequence was copied with exactly zero errors and single chains were chemically identified directly.";
    }],
    ["Bulk base composition is not a sequenced transcript or universal DNA requirement", (d) => {
      claim(d, "C-bio-dna-rna-composition-response").statement = "Every RNA base was sequenced and all RNA synthesis universally requires a DNA template.";
    }],
    ["PolyU product characterization does not determine codon size or reading-frame fidelity", (d) => {
      claim(d, "C-bio-translation-source-scope").statement = "The assay directly established UUU triplet size, every codon, translocation and genome-wide translation fidelity.";
    }]
  ]);
});

test("RNA interference preserves phenotype, fluorescence and transcript detection as distinct source readouts", async () => {
  const data = await source();
  const inference = claim(data, "C-bio-rnai-source-inference");
  assert.equal(inference.status, "publication-supported");
  assert.equal(inference.contextIds.length, 3);
  assert.equal(new Set(inference.contextIds.map((id) => study(data, id).sourceId)).size, 1);
  assert.match(claim(data, "C-bio-rnai-dual-gfp-comparison").statement, /incomplete and mosaic/);
  assert.match(claim(data, "C-bio-rnai-mex3-transcript-comparison").statement, /no detectable/);
  await rejects([
    ["A fluorescence contrast is not direct ribosome or degradation kinetics", (d) => {
      claim(d, "C-bio-rnai-dual-gfp-comparison").statement = "The direct translation and protein-degradation rates identified every silencing intermediate.";
    }],
    ["Undetectable staining does not prove exact zero transcript or its degradation route", (d) => {
      claim(d, "C-bio-rnai-mex3-transcript-comparison").statement = "Every transcript was counted as exactly zero through a directly observed unique degradation pathway.";
    }],
    ["Finite progeny effects cannot establish perpetual chromatin inheritance", (d) => {
      claim(d, inference.id).statement = "A complete modern silencing pathway and permanent chromatin inheritance were directly established in all descendants.";
    }]
  ]);
});

test("phage optical assembly, genome density and isolated-receptor association do not become a complete lifecycle", async () => {
  const data = await source();
  const pack = compileCanonicalGraph(data, {}, []);
  assert.match(claim(data, "C-bio-ms2-optical-assembly").statement, /variable delays/);
  assert.match(claim(data, "C-bio-ms2-asymmetric-genome").statement, /8.7 angstrom/);
  const contexts = ["garmann2019-ms2-optical-assembly-context", "koning2016-ms2-genome-structure-context", "dent2013-ms2-isolated-receptor-context"];
  assert.equal(new Set(contexts.map((id) => study(data, id).sourceId)).size, 3);
  for (const card of [10, 16, 30, 35]) {
    const hypothesis = claim(data, `C-bio-viral-card-${card}-unresolved`);
    assert.equal(hypothesis.status, "unresolved");
    const node = pack.files["model/nodes.json"].find((record) => record.id === `bio:viral-card-${card}-scope`);
    assert.equal(node.status, "hypothesis");
    assert.ok(node.rationale.some((record) => record.id.startsWith("D-bio-")));
    assert.ok(node.rationale.some((record) => record.id === hypothesis.id));
    for (const rationale of resolveRecordEvidence(node, recordEvidenceContext([node], pack.files["model/dictionaries.json"]))) {
      assert.match(rationale.id, /^[DC]-bio-/);
      assert.equal(rationale.contextIds, undefined,
        `${rationale.id}: neither the definition nor hypothesis inherits a structural preparation`);
      assert.deepEqual(rationale.contexts, []);
      assert.deepEqual(rationale.experimentalContexts, []);
    }
  }
  await rejects([
    ["Optical intensity is not an integer nucleus count or infectious-competence assay", (d) => {
      claim(d, "C-bio-ms2-optical-assembly").statement = "Exact molecular nuclei, irreversible assembly and infectious competence were directly measured in each trajectory.";
    }],
    ["Static density is not a complete resolved sequence or an assembly time series", (d) => {
      claim(d, "C-bio-ms2-asymmetric-genome").statement = "Every nucleotide and the complete genome-folding pathway were directly filmed at atomic resolution.";
    }],
    ["Isolated receptor association does not establish complete cellular genome delivery", (d) => {
      claim(d, "C-bio-viral-card-30-unresolved").status = "publication-supported";
      claim(d, "C-bio-viral-card-30-unresolved").contextIds = [contexts[2]];
    }],
    ["A scope definition cannot acquire unmatched structural preparations either", (d) => {
      claim(d, "D-bio-viral-card-10-scope").contextIds = contexts;
    }],
    ["A structural contact does not measure host-expression reprogramming", (d) => {
      claim(d, "C-bio-viral-card-35-unresolved").statement = "The structural map uniquely proves host shutoff and preferential viral translation.";
    }]
  ]);
});

test("Ddx4 demixing and qualitative mobility retain construct, thermal and FRAP mixture limits", async () => {
  const data = await source();
  const thermal = claim(data, "C-bio-ddx4-reversible-demixing");
  const mobility = claim(data, "C-bio-ddx4-qualitative-droplet-mobility");
  const frap = claim(data, "M-bio-nott2015-ddx4-frap-context");
  assert.notDeepEqual(thermal.contextIds, mobility.contextIds);
  assert.match(frap.statement, /60:1.*292\.5.*8\.1.*CFP/);
  assert.ok(frap.limitations.some((limit) => /No exact common composition or ratio is silently selected/.test(limit)));
  assert.ok(thermal.limitations.some((limit) => /without the central DEAD-box helicase/.test(limit)));
  assert.ok(thermal.limitations.some((limit) => /4 degrees C\/min.*2 degrees C\/min/.test(limit)));
  const scope = claim(data, "C-bio-condensate-phase-separation-source-scope");
  assert.equal(scope.status, "publication-supported");
  assert.equal(new Set(scope.contextIds.map((id) => study(data, id).sourceId)).size, 1);
  assert.ok(scope.limitations.some((limit) => /do not directly resolve fusion or fission dynamics/.test(limit)));
  await rejects([
    ["The main/SI FRAP composition discrepancy cannot be silently resolved", (d) => {
      claim(d, frap.id).limitations = frap.limitations.filter((limit) => !limit.includes("60:1"));
    }],
    ["Qualitative fluorescent recovery does not establish an exact universal diffusion constant", (d) => {
      claim(d, mobility.id).statement = "A precisely matched mixture directly established the exact diffusion constant of every constituent in all coacervates.";
    }],
    ["Terminal-region demixing is not native helicase catalysis or an equilibrium critical-count law", (d) => {
      claim(d, thermal.id).statement = "The native helicase directly catalyzed an equilibrium phase transition at a universal ten-protein threshold.";
    }],
    ["Unresolved fusion, fission and component exchange cannot become directly measured dynamics", (d) => {
      claim(d, scope.id).limitations = scope.limitations.filter((limit) => !limit.includes("fusion or fission"));
    }]
  ]);
});

test("Ddx4 DNA partition retains the dye conflict, outside/inside convention and fluorescence-proxy boundary", async () => {
  const data = await source();
  const partition = claim(data, "C-bio-ddx4-labeled-dna-partition");
  const preparation = claim(data, "M-bio-nott2015-ddx4-dna-partition-context");
  assert.match(preparation.statement, /Source K is outside\/inside/);
  assert.ok(partition.limitations.some((limit) => /atto657N.*Atto647N/.test(limit)));
  assert.ok(partition.limitations.some((limit) => /equal quantum yield\/dye behavior across phases/.test(limit)));
  assert.ok(partition.limitations.some((limit) => /sampling regions, not automatically sixty independent/.test(limit)));
  assert.notDeepEqual(partition.contextIds, claim(data, "C-bio-ddx4-qualitative-droplet-mobility").contextIds);
  await rejects([
    ["The source partition convention cannot be reversed without changing its interpretation", (d) => {
      claim(d, preparation.id).statement = preparation.statement.replace("outside/inside", "inside/outside");
    }],
    ["Conflicting dye annotations cannot silently become one verified dye identity", (d) => {
      claim(d, partition.id).limitations = partition.limitations.filter((limit) => !limit.includes("atto657N"));
    }],
    ["Regional fluorescent signal is not an independently calibrated intrinsic DNA affinity", (d) => {
      claim(d, partition.id).statement = "Sixty independent preparations directly established an unlabeled-DNA binding constant and universal sequence specificity without photophysical assumptions.";
    }]
  ]);
});

test("lipid chemistry, R18 response and PG morphology retain supplied membranes and distinct combined preparations", async () => {
  const data = await source();
  const chemistry = claim(data, "C-bio-supplied-pa-chemical-conversion");
  const r18 = claim(data, "C-bio-fatty-acid-r18-dequenching");
  const morphology = claim(data, "C-bio-phospholipid-preparation-morphology");
  const preparations = [chemistry, r18, morphology].map((record) => record.contextIds[0]);
  assert.equal(new Set(preparations).size, 3);
  assert.equal(new Set(preparations.map((id) => study(data, id).sourceId)).size, 1);
  assert.match(study(data, preparations[0]).preparation, /SI Figure S3.*5 mM ATP.*1 micromolar PlsB/);
  assert.match(study(data, preparations[2]).preparation, /PG-pathway.*lower magnesium/);
  assert.match(r18.statement, /on addition of oleic acid.*subsequent PA synthesis adds little/);
  assert.ok(morphology.limitations.some((limit) => /Feeding and magnesium are changed together/.test(limit)));
  const scope = claim(data, "C-bio-lipid-biosynthesis-membrane-source-scope");
  assert.deepEqual(scope.contextIds, preparations);
  assert.equal(scope.status, "publication-supported");
  assert.match(scope.statement, /pre-existing liposomes.*does not achieve de novo membrane formation/);
  const nodes = new Set(["bio:supplied-pa-chemical-conversion", "bio:fatty-acid-r18-dequenching",
    "bio:phospholipid-preparation-morphology"]);
  assert.ok(data.graph.relations.filter((edge) => nodes.has(edge.source) || nodes.has(edge.target))
    .every((edge) => edge.kind === "descriptive"), "Unmatched readouts do not isolate a synthesis-to-growth effect");
  await rejects([
    ["Fatty-acid-triggered dequenching is not an isolated enzyme-dependent growth signal", (d) => {
      claim(d, r18.id).statement = "Only enzymatic PA synthesis caused the fluorescence increase and directly measured exact bilayer area growth.";
    }],
    ["The S3 PA subsystem cannot inherit every eight-enzyme PE/PG preparation", (d) => {
      study(d, preparations[0]).preparation = "The same eight-enzyme PE/PG sample provided every S3, R18 and cryo-EM measurement under identical conditions.";
    }],
    ["Magnesium and feeding changes cannot become an isolated single-variable control", (d) => {
      claim(d, morphology.id).limitations = morphology.limitations.filter((limit) => !limit.includes("Feeding and magnesium"));
    }],
    ["Existing liposome reorganization cannot establish first-boundary origin or transport function", (d) => {
      claim(d, scope.id).statement = "The system autonomously formed its first membrane, selectively transported every solute and maintained calibrated electrochemical gradients through indefinite division.";
    }]
  ]);
});
