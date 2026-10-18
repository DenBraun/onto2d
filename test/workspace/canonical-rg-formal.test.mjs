import assert from "node:assert/strict";
import test from "node:test";
import {
  RG_FORMAL_ADMISSION, RG_FORMAL_CHECKS, RG_FORMAL_ANALYTICAL_SOURCES,
  validateRgFormalContracts
} from "../../models/causal-emergence/canonical/rg-formal.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const action = "D-phys-wilsonian-effective-action";
const flow = "D-phys-renormalization-group-flow";
const fixed = "D-phys-fixed-point-scaling-fields";
const gaussian = "D-phys-gaussian-scaling-example";
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key,
      new Map(data.graph[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
function replace(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(from), `Mutation requires ${from}`);
  record.statement = record.statement.replace(from, to);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).description = record.statement;
}
function dropLimit(data, id, fragment) {
  const record = claim(data, id), before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, before - 1, `Remove exactly one limit: ${fragment}`);
  data.graph.entities.find((entity) => entity.claimIds.includes(id)).openObligations = [...record.limitations];
}
async function rejects(mutations) {
  const original = await source();
  validateRgFormalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const data = structuredClone(original);
    mutate(data);
    assert.throws(() => validateRgFormalContracts(context(data)), /RG formal .* changed/, name);
  }
}

test("RG formal admission is a four-definition theory block without empirical or replay results", () => {
  assert.deepEqual(RG_FORMAL_ADMISSION.definitions, [
    ["phys:wilsonian-effective-action", action],
    ["phys:renormalization-group-flow", flow],
    ["phys:fixed-point-scaling-fields", fixed],
    ["phys:gaussian-scaling-example", gaussian]
  ]);
  assert.equal(RG_FORMAL_ADMISSION.formalDependencies.length, 3);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(RG_FORMAL_ADMISSION[key], []);
  assert.equal(RG_FORMAL_CHECKS.size, 0);
  assert.equal(RG_FORMAL_ANALYTICAL_SOURCES.size, 0);
});

test("Wilsonian integration preserves its high-mode domain, normalized observables and truncation boundary", async () => {
  await rejects([
    ["IR step must lower the physical cutoff", (d) => replace(d, action, "Lambda_prime=Lambda/b", "Lambda_prime=b Lambda")],
    ["retained modes cannot silently become the integrated shell", (d) => replace(d, action, "Lambda_prime<|p|<=Lambda", "0<|p|<=Lambda_prime")],
    ["source functional is preserved only for retained sources", (d) => replace(d, action, "sources supported below Lambda_prime", "arbitrary sources at any momentum")],
    ["formal identity is conditional on a well-defined regulated model", (d) => dropLimit(d, action, "existence or convergence theorem")],
    ["local finite truncation is not an exact result of mode removal", (d) => dropLimit(d, action, "finite operator truncation")],
    ["a Wilsonian action cannot silently become a 1PI effective action", (d) => dropLimit(d, action, "one-particle-irreducible")]
  ]);
});

test("RG flow keeps rescaling, subtraction scale, hard momentum and elapsed time distinct", async () => {
  await rejects([
    ["momentum restoration requires p prime equal b p", (d) => replace(d, flow, "p_prime=b p", "p_prime=p/b")],
    ["position restoration requires inverse coordinate rescaling", (d) => replace(d, flow, "x_prime=x/b", "x_prime=b x")],
    ["larger IR ell must lower the physical cutoff", (d) => replace(d, flow, "Lambda_0 exp(-ell)", "Lambda_0 exp(ell)")],
    ["flow derivative and subtraction beta cannot be identified without matching", (d) => dropLimit(d, flow, "matching relation")],
    ["cutoff parametrization reverses the logarithmic derivative sign", (d) => {
      const record = claim(d, flow);
      record.limitations = record.limitations.map((limit) => limit.replace("is -d/dell", "is d/dell"));
      d.graph.entities.find((entity) => entity.claimIds.includes(flow)).openObligations = [...record.limitations];
    }],
    ["resolution flow does not establish physical time evolution", (d) => dropLimit(d, flow, "not physical time")]
  ]);
});

test("fixed-point classification preserves its IR sign, full dimensions and marginal higher-order qualification", async () => {
  await rejects([
    ["homogeneous operator exponent is d minus Delta", (d) => replace(d, fixed, "y_a=d-Delta_a", "y_a=Delta_a-d")],
    ["positive IR exponent means relevant", (d) => replace(d, fixed, "y_a>0 is relevant", "y_a<0 is relevant")],
    ["zero linear exponent is not exact marginality", (d) => replace(d, fixed, "y_a=0 linearly marginal", "y_a=0 exactly marginal")],
    ["interacting scaling dimensions cannot lose anomalous contributions", (d) => dropLimit(d, fixed, "including anomalous contributions")],
    ["Jordan blocks and operator mixing cannot be silently excluded for every theory", (d) => dropLimit(d, fixed, "non-diagonalizable blocks")],
    ["irrelevant does not imply a zero coefficient at finite resolution", (d) => dropLimit(d, fixed, "need not vanish at finite resolution")],
    ["local linear stability cannot establish universal global convergence", (d) => dropLimit(d, fixed, "every flow reaches a fixed point")]
  ]);
});

test("Gaussian example keeps canonical field scaling and does not promote bare monomials to exact eigenoperators", async () => {
  await rejects([
    ["kinetic normalization fixes the field exponent", (d) => replace(d, gaussian, "b^((d-2)/2)", "b^((d+2)/2)")],
    ["operator power counting includes each derivative", (d) => replace(d, gaussian, "n(d-2)/2+r", "n(d-2)/2-r")],
    ["four-dimensional sextic engineering perturbation is IR irrelevant", (d) => replace(d, gaussian, "engineering values y=2, 0 and -2", "engineering values y=-2, 0 and 2")],
    ["massless zero-mode normalization needs its stated prescription", (d) => dropLimit(d, gaussian, "massless zero mode")],
    ["unsubtracted phi powers can mix into lower operators", (d) => dropLimit(d, gaussian, "unmixed eigenoperators")],
    ["linear marginality and a Gaussian example cannot prove interacting QCD universality", (d) => dropLimit(d, gaussian, "nonlinear flow")]
  ]);
});

test("formal source identity and actual reading extent cannot become an empirical universality claim", async () => {
  await rejects([
    ["the actual publication DOI must remain bound", (d) => { d.graph.sources.find((s) => s.id === "wilson-kogut1974-rg").doi = "10.1000/invented"; }],
    ["selected formal passages cannot acquire a fictitious full experimental review", (d) => { d.graph.sources.find((s) => s.id === "wilson-kogut1974-rg").review.extent = "full-primary-experiment"; }],
    ["the graph must retain the source-to-action sign and variable conversion", (d) => { d.graph.sources.find((s) => s.id === "wilson-kogut1974-rg").review.limit = "A uniquely observed universal flow."; }],
    ["power counting cannot borrow an unrelated executable check", (d) => { claim(d, gaussian).checkIds = ["field-dynamics-algebra"]; }],
    ["formal fixed-point definitions are not measured results", (d) => { claim(d, fixed).status = "publication-supported"; }]
  ]);
});

test("definition displays, roles and input links retain their mathematical rather than intervention meaning", async () => {
  const mutations = RG_FORMAL_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} must retain its actual source coordinates`, (d) => { d.graph.entities.find((e) => e.id === id).sourceCoordinates = []; }],
    [`${id} cannot acquire an observed physical instance`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "observed"; }],
    [`${id} cannot display a universal empirical mechanism`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "A universally measured mechanism creating every higher-level law."; }]
  ]);
  for (const [id] of RG_FORMAL_ADMISSION.formalDependencies) {
    mutations.push([`required definition link ${id}`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`formal input ${id} cannot become a measured intervention`, (d) => { d.graph.relations.find((r) => r.id === id).assertion = "A measured intervention creates an autonomous law."; }]);
  }
  await rejects(mutations);
});
