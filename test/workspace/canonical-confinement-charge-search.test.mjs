import assert from "node:assert/strict";
import test from "node:test";
import {
  CONFINEMENT_CHARGE_SEARCH_ADMISSION as admission,
  CONFINEMENT_CHARGE_SEARCH_CHECKS,
  CONFINEMENT_CHARGE_SEARCH_ANALYTICAL_SOURCES,
  validateConfinementChargeSearchContracts
} from "../../models/causal-emergence/canonical/confinement-charge-search.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs").then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const record = (data, id) => data.graph.claims.find((r) => r.id === id);
function replace(data, id, from, to) {
  const r = record(data, id);
  assert.ok(r.statement.includes(from), "Mutation must change the intended scientific statement");
  r.statement = r.statement.replace(from, to);
}
function removeLimit(data, id, fragment) {
  const r = record(data, id), count = r.limitations.length;
  r.limitations = r.limitations.filter((s) => !s.includes(fragment));
  assert.equal(r.limitations.length, count - 1, "Mutation must remove exactly one boundary");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateConfinementChargeSearchContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateConfinementChargeSearchContracts(context(changed)), undefined, name);
  }
}
const method = (suffix) => `M-phys-cms2013-fcp-${suffix}`;
const observed = (suffix) => `C-phys-cms2013-fcp-${suffix}`;

test("charge-search admission separates acquisition, response, inference and results without an invented replay", () => {
  assert.deepEqual([...CONFINEMENT_CHARGE_SEARCH_CHECKS], []);
  assert.deepEqual([...CONFINEMENT_CHARGE_SEARCH_ANALYTICAL_SOURCES], []);
  assert.deepEqual(admission.localStudySources, []);
  assert.deepEqual(admission.definitions, []);
  assert.equal(admission.contexts.length, 3);
  assert.equal(admission.observations.length, 2);
  assert.equal(admission.dependencies.length, 6);
  assert.equal(admission.studyIds.some((id) => id === "lee2002"), false,
    "The existing Lee study must not be registered twice");
  assert.equal(admission.dependencies.some((r) => r[1].startsWith("lee")), false,
    "The oil-drop null does not produce CMS collision data or enter its likelihood");
  assert.deepEqual(admission.dependencies.filter((r) => r[2] === "cms2013-fcp-limits").map((r) => r[1]), [
    "cms2013-fcp-acquisition-context", "cms2013-fcp-response-context",
    "cms2013-fcp-inference-context", "cms2013-fcp-selected-count"
  ]);
});

test("Lee residuals, final exposure, source disagreement and missing confidence normalization remain bounded", async () => {
  await rejectMutations([
    ["electric residual is not QCD color", (d) => removeLimit(d, "D-phys-fractional-charge-residual", "not QCD color")],
    ["selected exposure cannot be rejected twice", (d) => removeLimit(d, "M-phys-lee2002-context", "do not subtract")],
    ["overlapping cuts cannot become independent efficiencies", (d) => removeLimit(d, "M-phys-lee2002-context", "individual cuts overlap")],
    ["author and published cut totals cannot be silently interchanged", (d) => removeLimit(d, "C-phys-lee-charge-null", "Author v2 Table II")],
    ["observed residual gap is not the narrower confidence window", (d) => removeLimit(d, "C-phys-lee-charge-null", "narrower 0.18-0.82")],
    ["the confidence construction cannot be invented from mass and zero", (d) => removeLimit(d, "C-phys-lee-abundance-limit", "simple unit-efficiency Poisson")],
    ["the unexplained printed conversion cannot become a certified normalization", (d) => removeLimit(d, "C-phys-lee-abundance-limit", "6.4 x 10^20")],
    ["material processing prevents a universal abundance theorem", (d) => removeLimit(d, "C-phys-lee-abundance-limit", "Processing may remove")],
    ["current reading cannot falsely claim a new publisher retrieval", (d) => {
      d.graph.sources.find((r) => r.id === "lee2002").review.limit = "The confidence construction has been exactly reproduced from published raw data.";
    }]
  ]);
});

test("CMS selected tracks preserve unit-charge momentum, detector thresholds and the color-singlet signal hypothesis", async () => {
  await rejectMutations([
    ["unit-charge reconstruction is not true fractional-charge momentum", (d) => removeLimit(d, method("acquisition-context"), "pT_reco=pT_true/|q|")],
    ["control sample exclusion is part of the selected acquisition", (d) => removeLimit(d, method("acquisition-context"), "80<m_LL<100")],
    ["CMS and oil-drop preparations cannot become pooled replication", (d) => removeLimit(d, method("acquisition-context"), "distinct from Lee")],
    ["fractional electric charge does not imply QCD color", (d) => replace(d, method("response-context"), "singlets under SU(3)c and SU(2)L", "QCD color triplets")],
    ["detector-scale survival is an assumption, not a lifetime measurement", (d) => replace(d, method("response-context"), "assumed not to decay within the detector", "directly measured to remain stable forever")],
    ["conditional acceptance cannot become a universal electric-charge efficiency", (d) => removeLimit(d, method("response-context"), "neither is a universal charge acceptance")],
    ["simulated efficiencies are distinct from observed candidate counts", (d) => removeLimit(d, method("response-context"), "data-driven background prediction")],
    ["response simulations cannot become a separate primary acquisition", (d) => {
      d.physics.studies.find((r) => r.id === "cms2013-fcp-response").studyType = "primary-experiment";
    }],
    ["six measurements are not six selected particles", (d) => replace(d, observed("selected-count"), "six retained tracker measurements", "six fractional-charge particles")],
    ["a background expectation is not a negative observed yield", (d) => replace(d, observed("selected-count"), "before a subtraction", "after a subtraction")]
  ]);
});

test("CMS limits retain CLs, control extrapolation and the additional production hypothesis", async () => {
  await rejectMutations([
    ["the declared confidence procedure cannot become a generic zero-count Poisson replay", (d) => replace(d, method("inference-context"), "CLs", "an independently replayed unit-efficiency Poisson bound")],
    ["control-region assumptions remain explicit", (d) => removeLimit(d, method("inference-context"), "control-sample ionization statistics")],
    ["signal-response uncertainties are not absent", (d) => removeLimit(d, method("inference-context"), "2.2% luminosity uncertainty")],
    ["background prediction and observation remain distinct", (d) => removeLimit(d, method("inference-context"), "not an observed fractional-charge count")],
    ["charge ordering cannot be reversed", (d) => replace(d, observed("limits"), "310 GeV and 140 GeV", "140 GeV and 310 GeV")],
    ["model-dependent exclusions are not fitted masses", (d) => removeLimit(d, observed("limits"), "not fitted particle masses")],
    ["overlapping curves are not independent results", (d) => removeLimit(d, observed("limits"), "observed and expected curves")],
    ["distinct searches do not establish a color theorem", (d) => removeLimit(d, observed("limits"), "not pooled")],
    ["the tested alternative remains the selected background", (d) => {
      d.physics.comparisons.find((r) => r.id === "cms2013-fcp-benchmark-limits").alternative = "Universal deconfinement of every color charge.";
    }],
    ["published limits cannot borrow a formal or arithmetic executable check", (d) => {
      record(d, observed("limits")).checkIds = ["qcd-color-algebra"];
      record(d, observed("limits")).status = "analytically-checked";
    }]
  ]);
});

test("charge-search contracts reach every complete new and reused record and all evidence dependencies", async () => {
  await rejectMutations(admission.dependencies.map(([id]) => [id, (d) => {
    const n = d.graph.relations.length;
    d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
    assert.equal(d.graph.relations.length, n - 1);
  }]));
  await rejectMutations([
    ["reuse remains pinned, including prior displays", (d) => { d.graph.entities.find((r) => r.id === "phys:lee-abundance-limit").description = "All free quarks are impossible."; }],
    ["new display cannot omit the benchmark", (d) => { d.graph.entities.find((r) => r.id === "phys:cms2013-fcp-limits").description = "Model-independent confinement measured at 95%."; }],
    ["extra fields cannot silently add semantics", (d) => { d.graph.entities.find((r) => r.id === "phys:cms2013-fcp-selected-count").provesConfinement = true; }],
    ["readiness cannot admit an actual located instance", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:cms2013-fcp-limits").instanceAdmission = "empirical"; }],
    ["readiness interpretation is pinned for Lee too", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:lee-charge-null").denotes = "No colored particles exist."; }],
    ["citations cannot turn Lee into CMS empirical support", (d) => { record(d, observed("limits")).citations[0].sourceId = "lee2002"; }],
    ["source identity cannot switch to the later combined CMS search", (d) => { d.graph.sources.find((r) => r.id === "cms2013-fcp").url = "https://arxiv.org/abs/1305.0491"; }]
  ]);
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.entities.find((r) => r.id === "phys:cms2013-fcp-limits").openObligations = [];
  assert.throws(() => validateCanonicalSource(changed), undefined, "The full source validator must invoke the complete charge-search contract");
});
