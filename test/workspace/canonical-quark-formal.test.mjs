import assert from "node:assert/strict";
import test from "node:test";
import {
  QUARK_FORMAL_ADMISSION,
  QUARK_FORMAL_CHECKS,
  QUARK_FORMAL_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/quark-formal.mjs";

test("quark conventions introduce three definitions without invented measurements or checks", () => {
  assert.equal(QUARK_FORMAL_CHECKS.size, 0);
  assert.equal(QUARK_FORMAL_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(QUARK_FORMAL_ADMISSION.definitions.map(([id]) => id), [
    "phys:quark-mass-prescription", "phys:quark-electromagnetic-current", "phys:quark-parton-response"
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(QUARK_FORMAL_ADMISSION[key], [], key);
  const endpoints = QUARK_FORMAL_ADMISSION.formalDependencies.map(([, pair]) => pair);
  assert.ok(endpoints.some(([a, b]) => a === "phys:qcd" && b === "phys:quark-mass-prescription"));
  assert.ok(endpoints.some(([a, b]) => a === "phys:quark-fields" && b === "phys:quark-electromagnetic-current"));
  for (const from of ["quark-electromagnetic-current", "quark-mass-prescription", "inclusive-dis-response"])
    assert.ok(endpoints.some(([a, b]) => a === `phys:${from}` && b === "phys:quark-parton-response"), from);
});

let source;
async function rejectChanges(mutations) {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  source ??= await loadCanonicalSource();
  for (const [name, change] of mutations) {
    const copy = structuredClone(source);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
const claim = (data, id) => data.graph.claims.find((c) => c.id === `D-phys-${id}`);
function replaceStatement(data, id, from, to) {
  const record = claim(data, id);
  assert.ok(record?.statement.includes(from), "Mutation must alter an admitted convention");
  record.statement = record.statement.replace(from, to);
}
function removeLimit(data, id, fragment) {
  const record = claim(data, id);
  const before = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.ok(record.limitations.length < before, "Mutation must remove an actual boundary");
}
function removeEdge(data, id) {
  const before = data.graph.relations.length;
  data.graph.relations = data.graph.relations.filter((r) => r.id !== `physics:${id}`);
  assert.equal(data.graph.relations.length, before - 1);
}

test("quark field labels retain quantum numbers without universal stability or construction claims", async () => {
  await rejectChanges([
    ["spin assignment changes", (x) => replaceStatement(x, "quark", "spin-one-half", "spin-zero")],
    ["color representation becomes a constituent count", (x) => removeLimit(x, "quark", "representation dimension")],
    ["top inference becomes an all-flavor lifetime", (x) => removeLimit(x, "quark", "No top result is transferred")],
    ["conditional top interpretation loses primary support", (x) => {
      const c = claim(x, "quark");
      assert.ok(c.citations.some((ref) => ref.sourceId === "cdf2013-top-width"));
      c.citations = c.citations.filter((ref) => ref.sourceId !== "cdf2013-top-width");
    }],
    ["temporal confinement and arbitrary minima return", (x) => removeLimit(x, "quark", "later temporal stage")]
  ]);
});

test("formal quark cards preserve their displayed meaning and evidence bindings", async () => {
  const mutations = QUARK_FORMAL_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} cannot display an unsupported measurement`, (d) => {
      d.graph.entities.find((e) => e.id === id).description =
        "The experiment directly counts stable isolated quarks with no model assumptions.";
    }],
    [`${id} cannot drop its unresolved scope`, (d) => {
      d.graph.entities.find((e) => e.id === id).openObligations = ["Every interpretation is independently verified."];
    }],
    [`${id} cannot borrow unrelated source coordinates`, (d) => {
      d.graph.entities.find((e) => e.id === id).sourceCoordinates =
        structuredClone(d.graph.entities.find((e) => e.id === "phys:cdf2013-top-sample").sourceCoordinates);
    }]
  ]);
  await rejectChanges(mutations);
});

test("quark mass conventions preserve scheme, scale and reconstructed-mass distinctions", async () => {
  await rejectChanges([
    ["light-quark reference scale changes", (x) => replaceStatement(x, "quark-mass-prescription", "u,d,s at 2 GeV", "u,d,s at any scale")],
    ["pole mass loses its ambiguity boundary", (x) => replaceStatement(x, "quark-mass-prescription", "has an ambiguity of order the QCD scale", "has no ambiguity")],
    ["fitted top parameter becomes an exact short-distance mass", (x) => removeLimit(x, "quark-mass-prescription", "direct top reconstruction")],
    ["massless approximation becomes an observed zero mass", (x) => removeLimit(x, "quark-mass-prescription", "physical mass parameter vanishes")],
    ["mass prescription loses the specified theory", (x) => removeEdge(x, "qcd-quark-mass-prescription")]
  ]);
});

test("quark electromagnetic current preserves color, flavor and charge boundaries", async () => {
  await rejectChanges([
    ["down-type charge changes sign", (x) => replaceStatement(x, "quark-electromagnetic-current", "-1/3 for d,s,b", "+1/3 for d,s,b")],
    ["current normalization absorbs a second electric charge", (x) => replaceStatement(x, "quark-electromagnetic-current", "L_em,q=-e*A_mu*J_em,q^mu", "L_em,q=-e^2*A_mu*J_em,q^mu")],
    ["color singlet becomes electric neutrality", (x) => removeLimit(x, "quark-electromagnetic-current", "need not be electrically neutral")],
    ["electromagnetic flavor label becomes permanent identity", (x) => removeLimit(x, "quark-electromagnetic-current", "under every interaction")],
    ["oil-drop electric null becomes proof of color confinement", (x) => removeLimit(x, "quark-electromagnetic-current", "bulk-material null search")],
    ["current loses declared field quantum numbers", (x) => removeEdge(x, "quark-fields-quark-electromagnetic-current")]
  ]);
});

test("leading parton response retains squared charges, antiquarks and a conditional spin model", async () => {
  await rejectChanges([
    ["response uses signed rather than squared charge", (x) => replaceStatement(x, "quark-parton-response", "Q_f^2*(q_f+qbar_f)", "Q_f*(q_f+qbar_f)")],
    ["inclusive response becomes net valence only", (x) => replaceStatement(x, "quark-parton-response", "Q_f^2*(q_f+qbar_f)", "Q_f^2*(q_f-qbar_f)")],
    ["Callan-Gross normalization loses its factor two", (x) => replaceStatement(x, "quark-parton-response", "2*x*F1_gamma=F2_gamma", "x*F1_gamma=F2_gamma")],
    ["large-Q2 approximation becomes an exact finite-mass identity", (x) => removeLimit(x, "quark-parton-response", "finite-mass R relation")],
    ["partonic response gains another color multiplicity", (x) => removeLimit(x, "quark-parton-response", "additional factor of three")],
    ["model forces the extracted longitudinal response", (x) => removeLimit(x, "quark-parton-response", "not forced by this definition")],
    ["model loses the independent inclusive response definition", (x) => removeEdge(x, "inclusive-dis-response-quark-parton-response")]
  ]);
});

test("quark conventions retain actual source reading extent and non-instance roles", async () => {
  await rejectChanges([
    ["selected formal reading becomes whole-review experimental evidence", (x) => {
      x.graph.sources.find((s) => s.id === "pdg2025-structure-functions").review.extent = "full-primary-article";
    }],
    ["QCD source loses the used mass-prescription passage", (x) => {
      const review = x.graph.sources.find((s) => s.id === "pdg2025-qcd").review;
      review.locators = review.locators.filter((s) => !s.includes("quark-mass prescriptions"));
    }],
    ["a formal parton response admits a measured instance", (x) => {
      x.readiness.nodeRoles.find((r) => r.nodeId === "phys:quark-parton-response").instanceAdmission = "measurement-scoped";
    }],
    ["an isolated parton definition loses its no-population boundary", (x) => removeLimit(x, "quark-parton-response", "free colored trajectory")]
  ]);
});
