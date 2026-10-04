import assert from "node:assert/strict";
import test from "node:test";
import {
  Z_LINESHAPE_ADMISSION, Z_LINESHAPE_CHECKS, Z_LINESHAPE_ANALYTICAL_SOURCES,
  validateZLineshapeContracts
} from "../../models/causal-emergence/canonical/z-lineshape.mjs";

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) =>
      [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) =>
      [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}
let sourcePromise;
function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
async function rejects(mutations) {
  const original = await source();
  validateZLineshapeContracts(context(original));
  for (const [label, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateZLineshapeContracts(context(changed)), undefined, label);
  }
}

test("Z line-shape admission distinguishes scan responses, fits and dependent decay outputs", () => {
  assert.deepEqual([...Z_LINESHAPE_CHECKS], []);
  assert.deepEqual([...Z_LINESHAPE_ANALYTICAL_SOURCES], []);
  assert.deepEqual(Z_LINESHAPE_ADMISSION.localStudySources, []);
  assert.deepEqual(Z_LINESHAPE_ADMISSION.definitions, [
    ["phys:z-line-shape-conventions", "D-phys-z-line-shape-conventions"]
  ]);
  assert.deepEqual(Z_LINESHAPE_ADMISSION.studyIds,
    ["lep1-z-acquisition", "lep1-z-response", "lep1-z-combination"]);
  const inputs = (target) => Z_LINESHAPE_ADMISSION.dependencies
    .filter((entry) => entry[2] === target).map((entry) => entry[1]);
  assert.deepEqual(inputs("lep1-z-scan-responses"),
    ["lep1-z-acquisition-context", "lep1-z-response-context"]);
  assert.deepEqual(inputs("lep1-z-experiment-parameters"),
    ["lep1-z-scan-responses", "lep1-z-response-context", "z-line-shape-conventions"]);
  assert.deepEqual(inputs("lep1-z-line-shape"),
    ["lep1-z-experiment-parameters", "lep1-z-combination-context", "z-line-shape-conventions"]);
  assert.ok(inputs("lep1-z-partial-widths").includes("inclusive-decay-width-branching"));
  assert.ok(inputs("lep1-z-branching-fractions").includes("lep1-z-line-shape"));
  assert.ok(inputs("lep1-z-branching-fractions").includes("lep1-z-partial-widths"));
});

test("Z source contracts retain the actually read version and selected table scope", async () => {
  await rejects([
    ["primary version cannot become a current refit", (d) => {
      d.graph.sources.find((s) => s.id === "lep2006-z-lineshape").url = "https://arxiv.org/abs/hep-ex/0509008v1";
    }],
    ["journal identity does not prove publisher or upstream replay", (d) => {
      d.graph.sources.find((s) => s.id === "lep2006-z-lineshape").review.limit = "The publisher PDF, all detector calibrations and every radiative program were fully reproduced.";
    }],
    ["derived tables need exact coordinates", (d) => {
      claim(d, "C-phys-lep1-z-partial-widths").citations = [];
    }],
    ["selected inclusive rows do not admit heavy-flavor inputs", (d) => {
      claim(d, "C-phys-lep1-z-partial-widths").limitations = [];
    }]
  ]);
});

test("Z scan observables preserve corrected response and common acquisition ownership", async () => {
  await rejects([
    ["LEP-I is not a pooled UA1, SLD and LEP-II sample", (d) => {
      claim(d, "M-phys-lep1-z-acquisition-context").statement = "Pool historical UA1 candidates, SLD polarized events and LEP-II W pairs as one Z scan.";
    }],
    ["response corrections are not a new acquisition", (d) => {
      d.readiness.nodeRoles.find((r) => r.nodeId === "phys:lep1-z-response-context").role = "experimental-context";
    }],
    ["fitted bands are not independent observed points", (d) => {
      claim(d, "C-phys-lep1-z-scan-responses").statement = "Each band in Figure 2.3 is an independent measurement of the Z decay width.";
    }],
    ["scan outcomes retain the acquisition study", (d) => {
      claim(d, "C-phys-lep1-z-scan-responses").contextIds = ["lep1-z-combination"];
    }],
    ["fit summaries are computational outcomes of the same data", (d) => {
      study(d, "lep1-z-response").studyType = "primary-experiment";
    }]
  ]);
});

test("Z total-width inference preserves radiative convention and full shared covariance", async () => {
  await rejects([
    ["running width is not the untransformed constant-width pole parameter", (d) => {
      claim(d, "D-phys-z-line-shape-conventions").statement = "The same 2.4952 GeV is exactly the width in every complex-pole convention without rescaling.";
    }],
    ["instrumental spread does not directly time decay", (d) => {
      claim(d, "C-phys-lep1-z-line-shape").limitations = [];
    }],
    ["signed square roots are not correlation coefficients", (d) => {
      claim(d, "M-phys-lep1-z-combination-context").statement = "Use Tables 2.6, 2.7 and 2.9 directly as correlations and average independent width errors.";
    }],
    ["common theory contributes to diagonal blocks too", (d) => {
      claim(d, "M-phys-lep1-z-combination-context").statement = "Use Table 2.4 alone for diagonal covariance; all QED theory terms are only off diagonal.";
    }],
    ["mass parametric boundary cannot disappear", (d) => {
      d.physics.comparisons.find((c) => c.id === "lep1-z-convention-and-covariance").assumptions = [];
    }]
  ]);
});

test("Z derived decay quantities retain branch, units and residual dependence", async () => {
  await rejects([
    ["partial widths use MeV, not GeV", (d) => {
      claim(d, "C-phys-lep1-z-partial-widths").statement =
        claim(d, "C-phys-lep1-z-partial-widths").statement.replaceAll("MeV", "GeV");
    }],
    ["percentage is not a unit fraction", (d) => {
      claim(d, "C-phys-lep1-z-branching-fractions").statement = "The dimensionless hadronic branching fraction is 69.967.";
    }],
    ["invisible residual is not new observed data", (d) => {
      claim(d, "C-phys-lep1-z-partial-widths").statement = "An independent invisible-event count directly measures 497.4 MeV and confirms the same total width.";
    }],
    ["universal and nonuniversal values are not one fit vector", (d) => {
      claim(d, "C-phys-lep1-z-branching-fractions").limitations = [];
    }],
    ["a fit transformation owns its original computational study", (d) => {
      claim(d, "C-phys-lep1-z-branching-fractions").contextIds = ["lep1-z-acquisition"];
    }]
  ]);
});

test("Z inference fails closed if an operative prerequisite is deleted or an unreviewed cause added", async () => {
  await rejects(Z_LINESHAPE_ADMISSION.dependencies.map(([id]) => [
    `missing prerequisite ${id}`, (d) => {
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
    }
  ]));
  await rejects([
    ["virtual notation is not a necessary formation parent", (d) => {
      d.graph.relations.push({ id: "physics:unreviewed-virtual-z-formation", source: "phys:internal-propagator",
        target: "phys:lep1-z-line-shape", kind: "descriptive", role: "interpretation-dependency",
        assertion: "Every observed Z must form from this virtual population.",
        claimIds: ["M-phys-lep1-z-line-shape"], contextIds: ["lep1-z-combination"] });
    }],
    ["dependent fractions cannot become reverse confirming inputs", (d) => {
      d.graph.relations.push({ id: "physics:unreviewed-fraction-width-confirmation", source: "phys:lep1-z-branching-fractions",
        target: "phys:lep1-z-line-shape", kind: "descriptive", role: "interpretation-dependency",
        assertion: "Independent branching measurements prove this fitted total width.",
        claimIds: ["M-phys-lep1-z-line-shape"], contextIds: ["lep1-z-combination"] });
    }]
  ]);
});

test("Z reported fit results cannot acquire unrelated local executable ownership", async () => {
  await rejects([
    ["published width has no local algebra certificate", (d) => {
      claim(d, "C-phys-lep1-z-line-shape").checkIds = ["electroweak-mass-algebra"];
    }],
    ["reported parameter transform is not a new independently checked fit", (d) => {
      claim(d, "C-phys-lep1-z-branching-fractions").status = "analytically-checked";
    }],
    ["original combination is owned by the primary report", (d) => {
      study(d, "lep1-z-combination").sourceId = "electroweak-verifier";
    }]
  ]);
});
