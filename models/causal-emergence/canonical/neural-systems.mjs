import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { hashCanonical } from "@onto2d/kernel";
import { NEURAL_SYSTEMS_RECORDS, NEURAL_SYSTEMS_CARD_SCOPES } from "./level-six.mjs";
import { BIOCHEMISTRY_CLAIM_IDS } from "./level-three.mjs";
import { ORGANISMAL_CLAIM_IDS } from "./level-five.mjs";

const originals = JSON.parse(readFileSync(new URL("../../../references/level-6.json", import.meta.url), "utf8"));
const root = fileURLToPath(new URL("../../../", import.meta.url));
const published = new Set(["publication-supported", "literature-synthesis"]);
const dispositions = new Set(["supported", "qualified", "excluded", "unresolved"]);
const sorted = (values) => [...values].sort();
const contexts = (claim) => claim.contextIds ?? [];
// Current admission contracts of the reused comparisons, bound to their owning ledger.
// Canonical content hashing ignores object property order; publication reuse does
// not authorize changing, copying or moving these source-specific interpretations.
const inheritedComparisonContracts = new Map([
  ["neural:neural-lip-causality", "sha256:7f12de323b3764e9634120ffaac0aca1750b139fd9a449f0576114937dafd994"],
  ["neural:neural-height-optimality", "sha256:5fd79b1de68f3e09542c0d841541714fd79e7e9dc14de72bf03f196142f4f135"],
  ["neural:neural-internal-model-identity", "sha256:aadac614530074b79f84fd6c8690bea0b0480e4161ddffadf9e8fcd66530ff90"],
  ["neural:neural-affect-proxy", "sha256:e893e34f79a4e4ea6577db3f014058025e09345295830f381a7c6a21a2eb3009"],
  ["neural:neural-lc-global-control", "sha256:3fe745fe6df27bb5bdf5613bdb32bb28a218196f8330e64f4938e034be5de9e8"],
  ["neural:neural-avalanche-criticality", "sha256:8715f95a46abf475f9c28b4f23d9877845d14b75f079802aa6b3cf96fa3e13dd"],
  ["neural:neural-resting-model-identity", "sha256:d1efe4f1af17126e853fb0c57568cb73a130ddde21b22d9dae33ca99995b4e57"],
  ["neural:neural-conscious-predictions", "sha256:7f68902be32c6c065cbec62b0b9100b0e5457350db8df98fbd80e197b12959ab"],
  ["neural:neural-sleep-endpoints", "sha256:be9410f036cb099bd22fac493f098be3ff3ec93cb9fa9220fc3fbf726e3d7e96"],
  ["neural:neural-ensemble-units", "sha256:b11fe17907cfe211e864962810ec5d51dd7c2bf447dac9f5a50e6f5014ecd824"],
  ["neural:neural-connectome-construction", "sha256:401d067e9d62be1936636e0640af3aa8125fdcdcfc4831eb1e6424976308b0ed"],
  ["neural:neural-information-mapping", "sha256:ab18b02356edfbad426ea082360790c1a005f21fb07c9ec13dcdbe51a436876c"],
  ["neural:glial-information-exclusion", "sha256:5abc03767ef74f309fbf88b271ded4e52eac2776cd4dbb39d0f6acb20c0c51f4"],
  ["neural:glial-plasticity-preparations", "sha256:ca124b8cadd7ebdf35158728e774763bdc73b140bef13f53a5a9a11000a9a608"],
  ["neural:glial-algorithm-identity", "sha256:58c4a9cada9dd6614d1e44020e501889ebe318d62c8c6e57b673d3c8c95f1165"],
  ["neural:glial-kir4-mediation", "sha256:4a3d1beceddbca72218d7cd0e1aa0bdb5f84262b7e209769a99f3b4a153e5a9c"],
  ["neural:glial-lactate-mechanism", "sha256:09acd089635535bf9f562cf9d9d7e75a1746bc3c0cf77ba794d65a6f2e6748f9"],
  ["neural:glial-myelin-conduction", "sha256:b1ec5d801cca04d45f04f86429bc5698c425e9a71cd46582c43428d43fbd2170"],
  ["neural:glial-pruning-sequence", "sha256:721223bbd4c0d90d252cf1c1dba320f2697bb9daadc3e58a7624083bb46b70c4"],
  ["neural:glial-surveillance-protection", "sha256:ab1efcc1cfb4225dd71010f26862254834003086f62ffb5697344de2fd382265"],
  ["neural:glial-purinergic-feedback", "sha256:93e8e8eaa599e64ea2b7be2bbc9a387ea7261b8974a53fd6781371c9dae1eb5b"],
  ["neural:neural-cfos-maintenance", "sha256:824d7bbe20c594e67305b5db69ea49520be0abaaf6b62571f89357dad8792401"],
  ["neural:neural-maternal-chromatin-mediation", "sha256:09b04513adf95c18c95c0dda9cf0ff31328eff22bb2d22d45f55834e63eb6148"],
  ["neural:neural-physiological-gene-programming", "sha256:dd56c469ff1318100be3905bf2702d10fed8f3d7cb49e941c5391c9dea51eaf2"],
  ["neural:neural-engram-chromatin-priming", "sha256:da802347dcfdc1cf7eb1c98932a066cc2f8562924dafcaa2577e01b571c6f417"],
  ["neural:neural-immune-circuit-closure", "sha256:755575d5fb7d1001613940ab56510a35716efb8a96e3c3f159798b81d2b4ca41"],
  ["neural:neural-immune-protection-generalization", "sha256:b9ca58936e3883457a8d4351dbabe0aa512ec650e7d33491fbd12c20c3b5b0b6"],
  ["neural:neural-vascular-conduction", "sha256:b3e8ef23c56d97a80536060b427acef5f48a7d81276dfb8bb4876f02eca93598"],
  ["neural:neural-vascular-readout", "sha256:4aca98edc73e0d0f9a4581b72f2b941f23cbc0f92a9a21b788a0aa521a3add96"],
  ["neural:neural-vascular-development", "sha256:11cd7ea12d243c186ee89ce34015f644bf5530755393ea52dbe40a9085242752"],
  ["neural:neural-arf6-lipid-mediation", "sha256:8aba78546f8d2c93966e4fcf967e9ff52cf0342af86045fcedb633ddea4e23b6"],
  ["neural:neural-cx-signal-carrier", "sha256:5979a6b5ecdabdf3908dcbd4b1b02a6b61b060ff5c205005589586691bb2afba"],
  ["neural:neural-cx-zonation-routing", "sha256:c22d253ced0fede030c0ba94007fe0d48571b044d6a93cf0cd18eb248519a43a"],
  ["neural:neural-ng-memory", "sha256:62c6f2b31e4dc8f81dfc874da791ace9bb859f7f406dfc4fde886478e5a7561a"],
  ["neural:neural-ng-geometry", "sha256:dee601d9a1b1649ddad7357ca3f786f1edd876b3d03bd06c9108b00602676f2f"],
  ["neural:neural-ng-target-recruitment", "sha256:1e02f9b486608b795e963885a8b780d60ad9941ed71a77fb6a50a11bd55c17db"],
  ["neural:neural-ng-count-mediation", "sha256:ba8b7dfdf62f7ac60788d54370f35ccde0ec1686a29c5ba802de4b709067a7d2"],
  ["neural:neural-motor-spine-memory", "sha256:80a4fa761e20261274a3d91aeb19b48b0a48cc10f45a41c0ba1d1bf1c284a55b"],
  ["neural:neural-motor-construction", "sha256:3190a2d95b8dfc320397da10ed956c87e4652b022be1b1ebc06c7396e5bc2829"],
  ["neural:neural-stroke-function", "sha256:cef27d793bb722fa316b90a5bab0aaa2a9e511b6a46e5f61e00f59ec91c7e85e"],
  ["neural:neural-stroke-geometry", "sha256:4c880a036aa4cbb8024487cc9fe34daca162bd64e3617f7496538c77025f3568"],
  ["neural:neural-human-birth-function", "sha256:06631529002a1aef2689ece0bffcc3de1ce0bb4b103dce9b2e2abe3571122f37"],
  ["neural:neural-radiocarbon-model-selection", "sha256:1a7ae31839f7e9f5214586f4b7d3e6a0b795c88aabdea87bb1cb0b80a96f47e2"],
  ["neural:neural-radiocarbon-population-control", "sha256:d20b20318632883ac195dc968742fa13d42a2e2c8cab2a77ca83911256b65368"],
  ["neural:neural-macaque-rate-identification", "sha256:1422e4ba5dd71bbfd393a231110b9604a0d7d01a5d99364f2524615847de85be"],
  ["neural:neural-macaque-common-progenitor", "sha256:1d1d674523eae90e2a223ceeb671930f899ab46aa0851a3ded9a85b1e1bc198e"],
  ["neural:neural-macaque-migration", "sha256:9f23fa5cd410911d8d554d1228a2769a8ed107fb25ff4e60fb0950bc1b3aec6c"],
  ["neural:neural-macaque-replacement", "sha256:a81884306708147ea829d99af31ae55f6f2013883cdd8de80256c3157aee74c4"],
  ["neural:neural-primate-aged-differentiation", "sha256:167469712feff65da22e3229b3260e171b939dd1469b50d06963160adc541088"],
  ["neural:neural-primate-labeling-agreement", "sha256:cf0a47cb06fde3e774f398c620fff86def895da037ca42318f3e0d5f200604e3"],
  ["neural:neural-primate-hormonal-aging", "sha256:eac9b37d946200823f557ad9c2c83b1cd3f285acdcc2669b0397f1f1d43bfdf3"],
  ["neural:neural-primate-olfactory-lineage", "sha256:8ebaa48c07e4805804fd6198ec3f89c8fd970ae7d591fa512715e5270d4f6504"],
  ["neural:neural-learning-survival-identification", "sha256:eea55fd84d26bf072bcd424763e6165e5f2663eb13ecdf6413677b1aad8a28cd"],
  ["neural:neural-learning-neurogenesis-necessity", "sha256:89b2780dbd93d677f815e7f0cafc47ef40c545bb545640c90baed352bda78ff0"],
  ["neural:neural-primate-null-positive-methods", "sha256:de343427e273a4f885807032baf859c8f7b16f345fd74489e284ead2896e0717"],
  ["neural:neural-autoradiographic-independence", "sha256:3ca7b0094690265c9fcb442d3726571db89c50e6b0f87be24feb4967b094ea7d"],
  ["neural:neural-dentate-founder-identity", "sha256:559df81762ae5e106c5631d0b4f5715cf9b2b85198b2690f0be237df4642271a"],
  ["neural:neural-primate-cessation-bound", "sha256:fbdc458433ff80165a3152aa2613c364924f30b4af83381267e57ecca0b3191a"],
  ["neural:neural-ng-function-theories", "sha256:1ae21fb25eb980ab148b7d369724762d3bc49d76fd71296daf3c6ebbbf77c517"],
  ["neural:neural-rgl-feedback-closure", "sha256:6174e7ca3aa216f7b8e16b881d6bc514c3ba4739e902a458446a45696e42f71a"],
  ["neural:neural-rgl-gaba-mediation", "sha256:a771e220fcf5d3ac5f5c5fe67a428d790b87738e7599f78056dd8b9a803241a3"],
  ["neural:neural-sox2-single-founder", "sha256:00b2f03598956be9fbe391da8d7e3ba013f42a95ecddbe1c90bf9c8a4e139a0f"],
  ["neural:neural-sox2-pool-control", "sha256:b64404a0cc47492d3d276ca00655b4a4a9b7d1d498261f63dae1b24e95c99df0"],
  ["neural:neural-sox2-radial-transition", "sha256:bd00c15324837865eec4935f4094d4d871c93ac6f24ec1954803fd81f684b55f"],
  ["neural:neural-wm-buffer", "sha256:9fe1f40a57875ee7b06025fb830b37baa2adab34c2e374e47911acdca50ff964"],
  ["neural:neural-wm-maintenance", "sha256:4bef66a95f991ec74d1591148b1f2347dbc9e058807f34aa69fc3799626d114b"],
  ["neural:neural-wm-gating", "sha256:7979bab1cc39ed701a52e62c7f243d6ae9ed4f0269b503d376a2cc2a38c978bb"],
  ["neural:neural-wm-item-reactivation", "sha256:69947ef9b89436909cd11e8a956db1bbe6423996678cd302aa52132def47e8a9"],
  ["neural:neural-wm-latent-carrier", "sha256:53228ca9d9f9e96f52e82bbde9a5fe3208da9ba2578144a75c47d126ad488e42"],
  ["neural:neural-symbol-nesting", "sha256:a2ef63c9e48aac6bb30214716f6a9a69ee75b4e11e83c123bdbb4bdb62653136"],
  ["neural:neural-symbol-binding", "sha256:0d98e35b1a73a304012d14edbc0a494cd0dfd1a9f5b49bbfe8deaf1bb3085a11"],
  ["neural:neural-symbol-geometry", "sha256:c9df19a709dde2f69fd5e81b5a32e2671d89ddbf29ad92f67b995dc8e930f62b"],
  ["neural:neural-symbol-development", "sha256:798782e14a38665722a2595589952614d2e70fdfa312c8a3f2b2727ad09faa19"],
  ["neural:neural-spatial-prefix-fit", "sha256:282df372bf95b0348a383eff1931c22aca854815ebd7c86d08c205e28f6ba836"],
  ["neural:neural-spatial-resource-identification", "sha256:a8de2b7d13d6e8d01e0217e20d73d3f4509ac4a9dfa50ea5456126fb7068a9c1"],
  ["neural:neural-spatial-schooling", "sha256:08b8c49410aba7e91f0648a0533ee652104611d9719ac23e2164c941773fa3fb"],
  ["neural:neural-meg-description-cost", "sha256:4facb39aef49f924c13a95d94a6926de38bb9ae35f2fb156cf96473e3edddb6e"],
  ["neural:neural-meg-primitive-transfer", "sha256:446389e1529001abdde97865a3af8e16964d1ecc68792a8c4e1916316d009c2d"],
  ["neural:neural-meg-ordinal-timing", "sha256:f685ad8c76ab4282a3bebac92f235d32e847699ab7dac3754c81e6e9ae049455"],
  ["neural:neural-spatial-fmri-selectivity", "sha256:7c75b8dc3e6f1e5f3578a57327d2c590432db839d948ca1cf2c567c65266d3bc"],
  ["neural:neural-spatial-nesting-code", "sha256:6b5339a347717067d6e16446fc17c90ce9d4a90403ad98ea64cdc5dbd27e3191"],
  ["neural:neural-spatial-language-necessity", "sha256:922d8da7692864f048e9b9614a43100dd05196cca12131f93307c50b1a2edb4c"],
  ["neural:neural-binary-compression-fit", "sha256:80b4a590ef16161c62192fe72a7271013e068731e5f1525e2057750569d1157c"],
  ["neural:neural-binary-neural-code", "sha256:fc2da20727170dcc08fd3c57e14d3ca994e9cdeb40e17a1d3afea41a81b672b8"],
  ["neural:neural-binary-language-necessity", "sha256:c38b51b9a2a7d4352ffc4cc5adf73ce307727eb364709e8b16e980f9b082380f"],
  ["neural:neural-geometric-model-fit", "sha256:dc80283983c7f9971bc514a0bdc0401d9ebe75bdc8837e69846cfbdafaf9e150"],
  ["neural:neural-geometric-training-cause", "sha256:ed40ef3232ee01ee586f02ba69b9114ce653853d146b793590451d75c02fdb49"],
  ["neural:neural-mirror-recognition", "sha256:f0cecdfb07a15292d60906f8ac70ca68c05d67f6833aca5a1ceb04bf55d1ea8e"],
  ["neural:neural-empathy-components", "sha256:8f351cbc1e9aecc3ee255d90b07a9b64a17fcd891aff790b109fe828c282ef3b"],
  ["neural:neural-human-action-agency", "sha256:fb61a388d012f2bed756a7402502255aa6874f613c7deb765aed09d07a199718"],
  ["neural:neural-partner-pain-specificity", "sha256:c907e83db78602d875ba2854247129518ae8ac5a7ea44165340760ac386a341f"],
  ["neural:neural-vicarious-minimality", "sha256:ae04292a1e28b3613d4bdd0e87b14c47c0ab215c74dbe699a43624b97266edff"],
  ["neural:neural-vicarious-routing", "sha256:935a9bb0377e8306730592ec77f4eb0543d8f51497aa22f447a2cffd795e2d8d"],
  ["neural:neural-empathy-perceptual-necessity", "sha256:4e97152fd10d12b75c8ab721f236ab321d1cd8dd6201062d2d8ac272e35df6bb"],
  ["neural:neural-empathy-affective-necessity", "sha256:e9caf9538a176d4c84d655db0cba47859caffb8d7afd0138d06b48404b5bccc1"],
  ["neural:neural-empathy-working-memory", "sha256:7684d0e12695bc262b62d8cfe37501a77dbb2cd5823bad66e4c036eedad9c4e9"],
  ["neural:neural-shared-simulation", "sha256:b000481fcc2a635cb2cbee5d1bb266bb62b3274fd893382a9381e25e6816e780"],
  ["neural:neural-shared-manifold-geometry", "sha256:5d39c221f6648793f62ce44bde77deb88ef30cb7a8e9d70606f98081e6e9b19f"],
  ["visual:visual-map-universality", "sha256:6b590b1088b7bde71374b1ac118d26db1ea59e315468c9572304bde080caca34"],
  ["organismal:organismal-neural-niche-specificity", "sha256:a8ffe06e336f07d561cace508a806d2acd41ac9a1a4ac02405928a89ffcc9b1b"]
]);
export const NEURAL_SYSTEMS_OBLIGATIONS = [
  "Obtain independent scientific review of the primary-source readings and unresolved reporting conflicts.",
  "Test proposed mechanisms, cross-domain necessities and construction claims with preparation-matched alternatives; descriptive scope links establish none of them.",
  "Reproduce selected raw data and analysis pipelines before admitting numerical replay, universal minima or causal weights."
];

/** Complete card decisions remain inspectable without duplicating existing studies. */
export function neuralSystemsCards(graph) {
  const claims = new Map(graph.claims.map((claim) => [claim.id, claim]));
  return NEURAL_SYSTEMS_CARD_SCOPES.map((card) => {
    const ids = new Set([...card.claimIds, ...card.assertions.flatMap((entry) => entry.claimIds),
      ...card.parentDispositions.flatMap((entry) => entry.claimIds)]);
    const sourceIds = sorted(new Set([...ids].flatMap((id) => {
      assert.ok(claims.has(id), `Unknown Level-6 card claim ${card.code}: ${id}`);
      return claims.get(id).citations.map((citation) => citation.sourceId);
    })));
    return { ...card, sourceIds };
  });
}

function index(rows, label, idKey = "id") {
  const result = new Map();
  for (const row of rows) {
    assert.ok(!result.has(row[idKey]), `Duplicate neural-systems ${label}: ${row[idKey]}`);
    result.set(row[idKey], row);
  }
  return result;
}

function publicationIdentity(value) {
  if (!value) return null;
  let url;
  try { url = new URL(value); } catch { return null; }
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = url.pathname; }
  pathname = path.posix.normalize(pathname).replace(/\/+$/, "");
  if (["doi.org", "dx.doi.org"].includes(url.hostname)) return `doi:${pathname.slice(1).toLowerCase()}`;
  if (["pmc.ncbi.nlm.nih.gov", "www.ncbi.nlm.nih.gov", "ncbi.nlm.nih.gov", "europepmc.org", "www.europepmc.org"].includes(url.hostname)) {
    const pmcid = pathname.match(/\/(?:pmc\/)?articles\/(PMC\d+)(?:\/|$)/i)?.[1];
    if (pmcid) return `pmc:${pmcid.toUpperCase()}`;
  }
  // Institutional catalogues can identify different works through query fields.
  // Ignore only known tracking parameters; preserve and order the resource keys.
  for (const key of [...url.searchParams.keys()]) {
    if (/^utm_/i.test(key) || /^(fbclid|gclid|msclkid)$/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  const query = url.searchParams.toString();
  return `${url.host}${pathname}${query ? `?${query}` : ""}`;
}

/** Admission and evidence accounting; passing this contract is not scientific reproduction. */
export function validateNeuralSystemsReview(data, context) {
  const { graph, neuralSystems, readiness } = data;
  assert.equal(neuralSystems.id, "neural-systems-evidence");
  assert.equal(neuralSystems.independentScientificReviewComplete, false);
  assert.deepEqual(neuralSystems.checkIds, []);
  assert.deepEqual(neuralSystems.openObligations, NEURAL_SYSTEMS_OBLIGATIONS);
  const ledgers = [data.pilot, data.routing, data.optics, data.visual, data.neural,
    data.physics, data.biochemistry, data.cellular, data.organismal, neuralSystems];
  const inheritedLedgerIds = new Map([[data.neural, "neural"], [data.visual, "visual"], [data.organismal, "organismal"]]);
  const studies = index(ledgers.flatMap((ledger) => ledger.studies), "study");
  const records = { ...context, studies,
    comparisons: index(neuralSystems.comparisons, "comparison"),
    readiness: index(readiness.nodeRoles, "role", "nodeId") };
  const admitted = {};
  for (const [kind, expected] of Object.entries(NEURAL_SYSTEMS_RECORDS)) {
    const idKey = kind === "readiness" ? "nodeId" : "id";
    admitted[kind] = new Set();
    for (const record of expected) {
      assert.deepEqual(records[kind].get(record[idKey]), record,
        `Neural-systems ${kind} changed ${record[idKey]}: preserve reviewed evidence and scope`);
      admitted[kind].add(record[idKey]);
    }
  }
  const ownedSources = new Set([...admitted.sources, "neural-systems-review"]);
  const reviewedClaims = new Set(NEURAL_SYSTEMS_CARD_SCOPES.flatMap((card) => [
    ...card.claimIds, ...card.assertions.flatMap((entry) => entry.claimIds),
    ...card.parentDispositions.flatMap((entry) => entry.claimIds)
  ]));
  const reviewedEntities = new Set(NEURAL_SYSTEMS_CARD_SCOPES.flatMap((card) => card.nodeIds));
  const reusedSources = new Set([...reviewedClaims].flatMap((id) => context.claims.get(id)?.citations ?? [])
    .map((citation) => citation.sourceId).filter((id) => context.sources.get(id)?.kind === "research-publication"));
  const knownClaims = new Set([...reviewedClaims, ...admitted.claims, ...BIOCHEMISTRY_CLAIM_IDS, ...ORGANISMAL_CLAIM_IDS]);
  const reviewedStudies = new Set([...reviewedClaims].flatMap((id) => contexts(context.claims.get(id) ?? {})));
  const publicationSources = [...new Set([...admitted.sources, ...reusedSources])].map((id) => context.sources.get(id));
  const ownedFiles = new Map([
    ["references/level-6.json", { id: "legacy-6", kind: "legacy-catalogue" }],
    ["references/canonical/neural-systems-review.json", { id: "neural-systems-review", kind: "internal-review" }]
  ]);
  for (const [file, owner] of ownedFiles) {
    assert.equal(context.sources.get(owner.id)?.path, file, `Neural-systems source binding changed ${owner.id}`);
    assert.equal(context.sources.get(owner.id)?.kind, owner.kind, `Neural-systems source role changed ${owner.id}`);
  }
  const ownedDois = new Set(publicationSources.filter((source) => source.doi).map((source) => source.doi.toLowerCase()));
  const ownedUrls = new Set([...publicationSources.map((source) => publicationIdentity(source.url)),
    ...[...ownedDois].map((doi) => `doi:${doi}`)].filter(Boolean));
  const ownedPaths = new Map([...ownedFiles].map(([file, owner]) => [path.resolve(root, file), owner.id]));
  const usesEvidence = (record) => record.contextIds?.some((id) => admitted.studies.has(id))
    || record.citations?.some((citation) => ownedSources.has(citation.sourceId));
  const usesClaims = (record) => record.claimIds?.some((id) => admitted.claims.has(id));
  for (const source of graph.sources) {
    if (ownedDois.has(source.doi?.toLowerCase()) || ownedUrls.has(publicationIdentity(source.url))) {
      assert.ok(admitted.sources.has(source.id) || reusedSources.has(source.id), `Unreviewed neural-systems publication alias ${source.id}`);
    }
    if (source.path && ownedPaths.has(path.resolve(root, source.path))) {
      assert.equal(source.id, ownedPaths.get(path.resolve(root, source.path)), `Unreviewed neural-systems file alias ${source.id}`);
    }
  }
  for (const ledger of ledgers) {
    for (const study of ledger.studies) if (reusedSources.has(study.sourceId)) {
      assert.ok(reviewedStudies.has(study.id), `Unreviewed neural-systems reused-source acquisition ${study.id}`);
    }
    for (const study of ledger.studies) if (ownedSources.has(study.sourceId) || admitted.studies.has(study.id)) {
      assert.ok(ledger === neuralSystems && admitted.studies.has(study.id), `Unreviewed neural-systems study or moved acquisition ${study.id}`);
    }
    for (const comparison of ledger.comparisons ?? []) if (usesClaims(comparison)
      || comparison.claimIds?.some((id) => reviewedClaims.has(id))
      || comparison.sourceIds?.some((id) => ownedSources.has(id) || reusedSources.has(id)
        || admitted.studies.has(id) || reviewedStudies.has(id))) {
      // The pilot's sourceIds refer to acquisitions; the other ledgers use
      // publication IDs. Both identities must retain the reviewed ownership.
      const inherited = inheritedComparisonContracts.get(`${inheritedLedgerIds.get(ledger)}:${comparison.id}`)
        === hashCanonical("onto2d:neural-systems-inherited-comparison:v1", comparison);
      assert.ok(ledger === neuralSystems && admitted.comparisons.has(comparison.id) || inherited,
        `Unreviewed neural-systems comparison ${comparison.id}`);
    }
  }
  for (const claim of graph.claims) if (claim.citations.some((citation) => reusedSources.has(citation.sourceId))) {
    assert.ok(knownClaims.has(claim.id), `Unreviewed neural-systems reused-source claim ${claim.id}`);
  }
  assert.deepEqual(sorted(graph.entities.filter((entity) => entity.id.startsWith("cog:") || usesClaims(entity)
    || entity.sourceCoordinates.some((coordinate) => ownedSources.has(coordinate.sourceId))).map((entity) => entity.id)),
  sorted(admitted.entities), "Unreviewed neural-systems node");
  assert.deepEqual(sorted(graph.claims.filter((claim) => /^[^-]+-cog-/.test(claim.id) || usesEvidence(claim)).map((claim) => claim.id)),
    sorted(admitted.claims), "Unreviewed neural-systems claim");
  assert.deepEqual(sorted(neuralSystems.studies.map((study) => study.id)), sorted(admitted.studies), "Unreviewed neural-systems acquisition inventory");
  assert.deepEqual(sorted(neuralSystems.comparisons.map((comparison) => comparison.id)), sorted(admitted.comparisons), "Unreviewed neural-systems comparison inventory");
  assert.deepEqual(neuralSystems.cards, neuralSystemsCards(graph), "Level-6 scope decisions differ from reviewed contracts");
  assert.equal(NEURAL_SYSTEMS_CARD_SCOPES.length, originals.length, "Incomplete Level-6 card coverage");
  assert.deepEqual(NEURAL_SYSTEMS_CARD_SCOPES.map((card) => card.sourceIndex), originals.map((card) => card.Id));
  for (const card of NEURAL_SYSTEMS_CARD_SCOPES) {
    const original = originals[card.sourceIndex];
    assert.equal(card.code, `6.${original.Id}`);
    assert.equal(card.originalName, original.Name);
    assert.ok(card.scope.length && card.nodeIds.length && card.claimIds.length && card.assertions.length && card.excludedDefaults.length);
    assert.equal(new Set(card.nodeIds).size, card.nodeIds.length);
    assert.equal(new Set(card.claimIds).size, card.claimIds.length);
    assert.ok(card.nodeIds.some((id) => context.entities.get(id)?.sourceCoordinates.some((coordinate) =>
      coordinate.sourceId === "legacy-6" && coordinate.locator === `/${original.Id}`)), `Level-6 card lost its source coordinate ${card.code}`);
    for (const id of card.nodeIds) assert.ok(context.entities.has(id), `Unknown Level-6 scope node ${card.code}: ${id}`);
    for (const id of card.claimIds) assert.ok(context.claims.has(id), `Unknown Level-6 scope claim ${card.code}: ${id}`);
    assert.deepEqual(card.parentDispositions.map((parent) => parent.parentCode), original.Parents.map((parent) => parent.ParentCode),
      `Level-6 parent inventory/order changed ${card.code}`);
    for (const entry of [...card.assertions, ...card.parentDispositions]) {
      assert.ok(dispositions.has(entry.disposition) && entry.reason.length && entry.claimIds.length,
        `Level-6 disposition lacks reason or evidence ${card.code}`);
      for (const id of entry.claimIds) assert.ok(context.claims.has(id), `Unknown Level-6 disposition claim ${card.code}: ${id}`);
    }
  }
  for (const study of NEURAL_SYSTEMS_RECORDS.studies) {
    const source = context.sources.get(study.sourceId);
    assert.equal(source?.kind, "research-publication");
    assert.equal(study.doi, source.doi);
    assert.equal(study.readExtent, source.review.extent);
    assert.ok(study.reviewedLocators.every((locator) => source.review.locators.includes(locator)), `Neural-systems preparation exceeds reading ${study.id}`);
  }
  for (const claim of NEURAL_SYSTEMS_RECORDS.claims) {
    assert.deepEqual(claim.checkIds, [], "Neural-systems source interpretation is not numerical replay");
    for (const citation of claim.citations) assert.ok(context.sources.get(citation.sourceId)?.review.locators.includes(citation.locator),
      `Neural-systems citation exceeds reading ${claim.id}`);
    for (const id of contexts(claim)) {
      const study = studies.get(id);
      assert.ok(study && claim.citations.some((citation) => citation.sourceId === study.sourceId
        && study.reviewedLocators.includes(citation.locator)), `Neural-systems claim lacks preparation citation ${claim.id}: ${id}`);
    }
    if (published.has(claim.status)) {
      assert.ok(contexts(claim).length, `Neural-systems finding lacks preparation ${claim.id}`);
      const publications = new Set(claim.contextIds.map((id) => studies.get(id).sourceId));
      assert.equal(claim.status, publications.size > 1 ? "literature-synthesis" : "publication-supported");
      for (const sourceId of publications) assert.ok(claim.citations.some((citation) => citation.sourceId === sourceId && citation.role === "supports"));
    }
  }
  for (const entity of NEURAL_SYSTEMS_RECORDS.entities) {
    assert.equal(entity.level, 6);
    if (entity.kind === "context") for (const id of entity.claimIds) assert.equal(context.claims.get(id).status, "method-contract");
    assert.equal(records.readiness.get(entity.id).instanceAdmission, "none");
    for (const coordinate of entity.sourceCoordinates) assert.ok(context.sources.get(coordinate.sourceId)?.review.locators.includes(coordinate.locator),
      `Neural-systems coordinate exceeds reading ${entity.id}`);
  }
  for (const relation of graph.relations) {
    if (!relation.id.startsWith("neural-systems:") && !relation.source.startsWith("cog:") && !relation.target.startsWith("cog:")
      && !usesClaims(relation) && !usesEvidence(relation) && !(relation.carrier && usesEvidence(relation.carrier))) continue;
    assert.ok(admitted.relations.has(relation.id), `Unreviewed neural-systems relation or domain bridge ${relation.id}`);
    if (relation.kind === "descriptive") continue; // Exact admitted records retain their explicit representation/measurement role.
    assert.equal(relation.role, "scoped-operating-support");
    for (const id of relation.contextIds) {
      assert.equal(studies.get(id)?.studyType, "primary-experiment");
      assert.doesNotMatch(studies.get(id).readExtent, /abstract/i, "Functional support exceeds abstract-only reading");
    }
    for (const entityId of [relation.source, relation.target]) assert.ok(context.entities.get(entityId).claimIds.some((claimId) => {
      const claim = context.claims.get(claimId);
      return published.has(claim.status) && relation.contextIds.every((id) => contexts(claim).includes(id));
    }), `Neural-systems functional endpoints lack matched preparation ${relation.id}`);
  }
  for (const comparison of NEURAL_SYSTEMS_RECORDS.comparisons) {
    for (const id of comparison.sourceIds) assert.equal(context.sources.get(id)?.kind, "research-publication");
    for (const id of comparison.claimIds) assert.ok(context.claims.has(id));
  }
  const usesReviewedClaims = (record) => record.claimIds?.some((id) => reviewedClaims.has(id)
    || context.claims.get(id)?.citations.some((citation) => citation.sourceId === "legacy-6"));
  for (const rule of graph.rules) assert.ok(!usesClaims(rule) && !usesReviewedClaims(rule)
    && ![...rule.inputs.map((input) => input.entityId), ...rule.outputEntityIds].some((id) => id.startsWith("cog:")
      || admitted.entities.has(id) || reviewedEntities.has(id) || usesReviewedClaims(context.entities.get(id))),
  "Neural-systems source records do not prove construction rules");
  return data;
}
