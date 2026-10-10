import assert from "node:assert/strict";
import test from "node:test";
import {
  GLUON_DIS_ADMISSION, GLUON_DIS_CHECKS, GLUON_DIS_ANALYTICAL_SOURCES,
  validateGluonDISContracts
} from "../../models/causal-emergence/canonical/gluon-dis.mjs";

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
const claim = (data, suffix, method = false) => data.graph.claims.find((r) => r.id === `${method ? "M" : "C"}-phys-h1-2001-dis-${suffix}`);
function replace(data, suffix, from, to, method = false) {
  const record = claim(data, suffix, method);
  assert.ok(record.statement.includes(from), "The mutation must change its intended statement");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, suffix, fragment, method = false) {
  const record = claim(data, suffix, method);
  const count = record.limitations.length;
  record.limitations = record.limitations.filter((s) => !s.includes(fragment));
  assert.equal(record.limitations.length, count - 1, "Exactly one boundary must be removed");
}
async function rejectMutations(mutations) {
  const original = await source();
  validateGluonDISContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateGluonDISContracts(context(changed)), undefined, name);
  }
}

test("gluon DIS admission separates corrected responses from conditional PDFs without a numerical replay", () => {
  assert.deepEqual([...GLUON_DIS_CHECKS], []);
  assert.deepEqual([...GLUON_DIS_ANALYTICAL_SOURCES], []);
  assert.deepEqual(GLUON_DIS_ADMISSION.localStudySources, []);
  assert.deepEqual(GLUON_DIS_ADMISSION.definitions, []);
  assert.equal(GLUON_DIS_ADMISSION.contexts.length, 3);
  assert.equal(GLUON_DIS_ADMISSION.observations.length, 2);
  const inputs = (target) => GLUON_DIS_ADMISSION.dependencies.filter((r) => r[2] === target).map((r) => r[1]);
  assert.deepEqual(inputs("h1-2001-dis-crosssections"), ["h1-2001-dis-acquisition-context", "h1-2001-dis-response-context"]);
  assert.deepEqual(inputs("h1-2001-dis-gluon-distribution"), [
    "h1-2001-dis-crosssections", "h1-2001-dis-response-context", "h1-2001-dis-evolution-context", "qcd"
  ]);
  assert.equal(GLUON_DIS_ADMISSION.dependencies.some((r) => r[1].startsWith("cms") || r[1].startsWith("whitlow")), false,
    "Existing DIS and jet studies are not substituted for this H1 input dataset");
});

test("H1 acquisition and corrected response retain data reuse, longitudinal subtraction and correlation limits", async () => {
  await rejectMutations([
    ["the reviewed author version cannot silently change", (d) => { d.graph.sources.find((r) => r.id === "h1-2001-dis-gluon").url = "https://arxiv.org/pdf/hep-ex/0012053v2"; }],
    ["source review does not silently claim the revised publisher content", (d) => { d.graph.sources.find((r) => r.id === "h1-2001-dis-gluon").review.limit = "The final publisher article and complete acquisition were reproduced."; }],
    ["trigger subsets cannot become independent full exposures", (d) => removeLimit(d, "acquisition-context", "overlapping selections", true)],
    ["the positron energy is the collider input", (d) => replace(d, "acquisition-context", "27.6 GeV positrons", "820 GeV positrons", true)],
    ["longitudinal response retains its subtraction sign", (d) => replace(d, "response-context", "sigma_r=F2-y^2*FL", "sigma_r=F2+y^2*FL", true)],
    ["derived F2 is not a separate observed spectrum", (d) => replace(d, "response-context", "a derived response, not a separate acquired spectrum", "a separately acquired direct F2 spectrum", true)],
    ["generator starting values are not empirical longitudinal nulls", (d) => removeLimit(d, "response-context", "starting with FL=0", true)],
    ["the measurement range is not the fit range", (d) => removeLimit(d, "crosssections", "below the standard")],
    ["the corrected response cannot become an uncorrected event count", (d) => replace(d, "crosssections", "inclusive detector-corrected responses", "raw independent gluon counts")],
    ["response modeling is not an additional primary acquisition", (d) => { d.physics.studies.find((r) => r.id === "h1-2001-dis-response").studyType = "primary-experiment"; }]
  ]);
});

test("gluon PDF inference keeps fixed coupling, external constraints, scales and model errors distinct", async () => {
  await rejectMutations([
    ["the standard H1 PDF fit fixes rather than measures its coupling", (d) => replace(d, "evolution-context", "fixes alpha_s(MZ^2)=0.115", "independently measures alpha_s(MZ^2)=0.115 without PDF correlation", true)],
    ["initial and hard scales cannot be silently exchanged", (d) => replace(d, "evolution-context", "input scale Q0^2=4 GeV^2", "input scale Q0^2=3000 GeV^2", true)],
    ["heavy-quark masses remain adopted parameters", (d) => replace(d, "evolution-context", "adopted on-shell masses", "simultaneously directly measured masses", true)],
    ["same-running high-Q2 data are not independent replication", (d) => replace(d, "evolution-context", "from the same 1996/97 running", "from an independent replication", true)],
    ["the borrowed H1+BCDMS coupling uncertainty cannot become H1-only", (d) => removeLimit(d, "evolution-context", "not an independent H1-only", true)],
    ["PDF conventions and correlations remain declared", (d) => removeLimit(d, "evolution-context", "not measured clocks", true)],
    ["experimental precision is not a universal full theory error", (d) => replace(d, "gluon-distribution", "experimental uncertainty", "total model-independent uncertainty")],
    ["scale uncertainty is not silently a confidence interval", (d) => removeLimit(d, "gluon-distribution", "not a stated confidence interval")],
    ["large-x and nonobservable boundaries cannot disappear", (d) => removeLimit(d, "gluon-distribution", "x>0.1")],
    ["the comparison describes prescription dependence rather than repeated observation", (d) => {
      d.physics.comparisons.find((r) => r.id === "h1-2001-heavy-flavor-prescription").limit = "Independent gluon observations prove the massive prescription exactly and exclude every massless model.";
    }]
  ]);
});

test("gluon DIS declarations preserve evidence paths, publication status and every displayed record field", async () => {
  await rejectMutations(GLUON_DIS_ADMISSION.dependencies.map(([id]) => [
    `preserve declared input ${id}`, (d) => {
      const length = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, length - 1);
    }
  ]));
  await rejectMutations([
    ["the inference context cannot be replaced by acquisition alone", (d) => { claim(d, "gluon-distribution").contextIds = ["h1-2001-dis-acquisition"]; }],
    ["publication support cannot borrow an unrelated executable check", (d) => {
      claim(d, "gluon-distribution").status = "analytically-checked";
      claim(d, "gluon-distribution").checkIds = ["qcd-running-coupling"];
    }],
    ["the numerical precision requires its primary locator", (d) => { claim(d, "gluon-distribution").citations = []; }],
    ["QCD is an interpretive input rather than measured maintenance", (d) => {
      d.graph.relations.find((r) => r.id === "physics:qcd-h1-2001-dis-gluon-distribution").kind = "functional";
    }]
  ]);
  await rejectMutations([...GLUON_DIS_ADMISSION.contexts, ...GLUON_DIS_ADMISSION.observations].flatMap(([id]) => [
    [`display description cannot evade the claim for ${id}`, (d) => { d.graph.entities.find((r) => r.id === `phys:${id}`).description = "Free gluons were counted without a response or fit model."; }],
    [`display obligations cannot disappear for ${id}`, (d) => { d.graph.entities.find((r) => r.id === `phys:${id}`).openObligations = []; }],
    [`source coordinates cannot disappear for ${id}`, (d) => { d.graph.entities.find((r) => r.id === `phys:${id}`).sourceCoordinates = []; }],
    [`readiness cannot imply an empirical instance for ${id}`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === `phys:${id}`).instanceAdmission = "empirical"; }],
    [`readiness denotation remains scoped for ${id}`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === `phys:${id}`).denotes = "All gluon formation dynamics."; }]
  ]));
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const changed = structuredClone(await source());
  changed.graph.relations.push({
    id: "physics:cms-r32-h1-pdf-unreviewed", source: "phys:cms-r32", target: "phys:h1-2001-dis-gluon-distribution",
    kind: "descriptive", role: "interpretation-dependency", assertion: "CMS jet counts replace the H1 reduced-cross-section input.",
    claimIds: ["M-phys-h1-2001-dis-gluon-distribution"], contextIds: ["h1-2001-dis-evolution"]
  });
  assert.throws(() => validateCanonicalSource(changed), undefined, "No unreviewed CMS-to-H1 input is admitted");
});
