import assert from "node:assert/strict";
import test from "node:test";
import {
  GLUON_COLOR_ADMISSION, GLUON_COLOR_CHECKS, GLUON_COLOR_ANALYTICAL_SOURCES,
  validateGluonColorContracts
} from "../../models/causal-emergence/canonical/gluon-color.mjs";

const prefix = "opal2001-color";
let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) =>
      [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) =>
      [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (d, suffix, method = false) => d.graph.claims.find((r) =>
  r.id === `${method ? "M" : "C"}-phys-${prefix}-${suffix}`);
function replace(d, suffix, from, to, method = false) {
  const c = claim(d, suffix, method);
  assert.ok(c.statement.includes(from), "Mutation must alter the intended scientific statement");
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, suffix, fragment, method = false) {
  const c = claim(d, suffix, method), count = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(fragment));
  assert.equal(c.limitations.length, count - 1, "Remove exactly the intended boundary");
}
async function rejects(mutations) {
  const original = await source();
  validateGluonColorContracts(context(original));
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  for (const [label, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, label);
  }
}

test("OPAL color-factor topology distinguishes acquisition, corrections and correlated inference", () => {
  assert.deepEqual([...GLUON_COLOR_CHECKS], []);
  assert.deepEqual([...GLUON_COLOR_ANALYTICAL_SOURCES], []);
  assert.deepEqual(GLUON_COLOR_ADMISSION.localStudySources, []);
  assert.deepEqual(GLUON_COLOR_ADMISSION.definitions, []);
  assert.equal(GLUON_COLOR_ADMISSION.contexts.length, 3);
  assert.deepEqual(GLUON_COLOR_ADMISSION.observations, [
    [`${prefix}-distributions`, `C-phys-${prefix}-distributions`, [`${prefix}-response`]],
    [`${prefix}-factors`, `C-phys-${prefix}-factors`, [`${prefix}-inference`]]
  ]);
  const inputs = (target) => GLUON_COLOR_ADMISSION.dependencies.filter((r) => r[2] === `${prefix}-${target}`).map((r) => r[1]);
  assert.deepEqual(inputs("distributions"), [`${prefix}-acquisition-context`, `${prefix}-response-context`]);
  assert.deepEqual(inputs("factors"), [`${prefix}-distributions`, `${prefix}-response-context`, `${prefix}-inference-context`, "gluon-self-coupling"]);
});

test("OPAL corrected shapes preserve primary preparation, role and reviewed author version", async () => {
  await rejects([
    ["primary version cannot silently change", (d) => {
      d.graph.sources.find((r) => r.id === "opal2001-colour-factors").url = "https://arxiv.org/pdf/hep-ex/0101044v2";
    }],
    ["selected four-jet subset is not all selected events", (d) => replace(d, "acquisition-context", "about 250000 four-jet events", "3.6 million independently observed four-gluon events", true)],
    ["corrected partons are not direct observations", (d) => replace(d, "distributions", "after detector and hadronization correction", "before any modeling and as directly observed free gluons")],
    ["same-sample normalization and correlations must remain", (d) => removeLimit(d, "distributions", "normalized angles and rates")],
    ["response study is not an independent primary acquisition", (d) => {
      d.physics.studies.find((r) => r.id === `${prefix}-response`).studyType = "primary-experiment";
    }],
    ["corrected outcome cannot borrow acquisition ownership", (d) => {
      claim(d, "distributions").contextIds = [`${prefix}-acquisition`];
    }]
  ]);
});

test("OPAL inference retains correction models, perturbative order and fixed normalization", async () => {
  await rejects([
    ["corrections remain simulation-based", (d) => removeLimit(d, "response-context", "standard QCD color factors", true)],
    ["four-jet NLO is not an all-orders calculation", (d) => replace(d, "inference-context", "NLO O(alpha_s^3)", "exact all-orders", true)],
    ["flavor content is an adopted input", (d) => replace(d, "inference-context", "five massless quark flavors", "a measured number of exactly massless quarks", true)],
    ["T_R normalization is not separately measured", (d) => replace(d, "inference-context", "the normalization T_R=1/2", "an independently measured T_R=1/2", true)],
    ["statistical covariance cannot become independent-bin errors", (d) => removeLimit(d, "inference-context", "90 subsamples", true)],
    ["the unimported upstream calculations cannot become verified", (d) => {
      d.graph.sources.find((r) => r.id === "opal2001-colour-factors").review.limit = "All detector corrections, upstream NLO amplitudes and fit covariances were independently reproduced.";
    }]
  ]);
});

test("OPAL fitted factors preserve separate covariances, rounding and model comparison boundaries", async () => {
  await rejects([
    ["statistical and systematic errors cannot swap", (d) => replace(d, "factors", "0.25 statistical +/- 0.49 systematic", "0.49 statistical +/- 0.25 systematic")],
    ["ratio covariance is not the absolute-factor covariance", (d) => removeLimit(d, "factors", "rho(eta,x)=-0.33")],
    ["conditional SU3 agreement is not assumption-free discrimination", (d) => removeLimit(d, "factors", "retuned Abelian-model")],
    ["rounded ratio conversion is not a new experiment", (d) => removeLimit(d, "factors", "one inference")],
    ["benchmark display conflict cannot disappear", (d) => removeLimit(d, "distributions", "0.119")],
    ["comparison cannot claim complete Abelian exclusion", (d) => {
      d.physics.comparisons.find((r) => r.id === `${prefix}-su3`).limit = "Every Abelian theory is independently simulated and excluded without hadronization assumptions.";
    }],
    ["published inference cannot borrow an analytical check", (d) => {
      claim(d, "factors").status = "analytically-checked";
      claim(d, "factors").checkIds = ["electroweak-mass-algebra"];
    }]
  ]);
});

test("OPAL display and graph bindings fail closed under scientific metadata and input mutations", async () => {
  await rejects(GLUON_COLOR_ADMISSION.dependencies.map(([id]) => [
    `preserve reviewed dependency ${id}`, (d) => {
      const before = d.graph.relations.length;
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
      assert.equal(d.graph.relations.length, before - 1);
    }
  ]));
  await rejects([
    ["browser description cannot contradict its claim", (d) => {
      d.graph.entities.find((r) => r.id === `phys:${prefix}-factors`).description = "A camera directly images an isolated gluon self-interaction vertex.";
    }],
    ["readiness meaning cannot imply a free-particle image", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === `phys:${prefix}-distributions`).denotes = "Direct free-gluon observations without correction models.";
    }],
    ["source coordinates must preserve the actual reported inference", (d) => {
      d.graph.entities.find((r) => r.id === `phys:${prefix}-factors`).sourceCoordinates[0].locator = "Unreviewed isolated-vertex measurement";
    }],
    ["unrelated empirical scope cannot be borrowed", (d) => {
      claim(d, "factors").experimentalContextIds = ["unreviewed-direct-vertex"];
    }],
    ["no unreviewed physical-causation edge can be added", (d) => {
      d.graph.relations.push({id: "physics:unreviewed-gluon-color-formation", source: "phys:gluon-fields", target: `phys:${prefix}-factors`, kind: "descriptive", role: "interpretation-dependency", assertion: "The measured factors prove universal gluon formation and persistence.", claimIds: [`M-phys-${prefix}-factors`], contextIds: [`${prefix}-inference`]});
    }]
  ]);
});
