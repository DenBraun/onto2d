import assert from "node:assert/strict";
import test from "node:test";
import {
  QUARK_DIS_ADMISSION, QUARK_DIS_CHECKS, QUARK_DIS_ANALYTICAL_SOURCES,
  validateQuarkDisContracts
} from "../../models/causal-emergence/canonical/quark-dis.mjs";

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
  validateQuarkDisContracts(context(original));
  for (const [label, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateQuarkDisContracts(context(changed)), undefined, label);
  }
}

test("quark DIS inventory separates shared 1969 response from the later archived-data fit", () => {
  assert.deepEqual([...QUARK_DIS_CHECKS], []);
  assert.deepEqual([...QUARK_DIS_ANALYTICAL_SOURCES], []);
  assert.deepEqual(QUARK_DIS_ADMISSION.localStudySources, []);
  assert.deepEqual(QUARK_DIS_ADMISSION.definitions,
    [["phys:inclusive-dis-response", "D-phys-inclusive-dis-response"]]);
  assert.deepEqual(QUARK_DIS_ADMISSION.comparisonIds, [
    "bloom1969-radiative-response", "whitlow1990-target-consistency", "whitlow1990-parton-interpretation"
  ]);
  assert.equal(QUARK_DIS_ADMISSION.contexts.length, 5);
  assert.equal(QUARK_DIS_ADMISSION.observations.length, 5);
  assert.deepEqual(QUARK_DIS_ADMISSION.studyIds,
    ["bloom1969-response", "whitlow1990-reanalysis", "whitlow1990-separation", "whitlow1990-comparison"]);
  const inputs = (target) => QUARK_DIS_ADMISSION.dependencies
    .filter((entry) => entry[2] === target).map((entry) => entry[1]);
  assert.deepEqual(inputs("bloom1969-corrected-crosssections"),
    ["slac-context", "bloom1969-response-context"]);
  assert.deepEqual(inputs("whitlow1990-normalized-crosssections"),
    ["whitlow1990-archive-context", "whitlow1990-response-context"]);
  assert.deepEqual(inputs("whitlow1990-target-difference"),
    ["whitlow1990-normalized-crosssections", "whitlow1990-separation-context", "inclusive-dis-response"]);
  assert.ok(inputs("whitlow1990-separated-r").includes("whitlow1990-target-difference"));
  assert.ok(!inputs("whitlow1990-separated-r").includes("quark-parton-response"));
  assert.ok(inputs("whitlow1990-model-comparison").includes("quark-parton-response"));
  assert.deepEqual(inputs("whitlow1990-comparison-context"), []);
});

test("quark DIS source contracts retain the inspected reports and printed discrepancies", async () => {
  await rejects([
    ["the inspected author report is not an unreviewed publisher version", (d) => {
      d.graph.sources.find((s) => s.id === "whitlow1990-r").url = "https://doi.org/10.1016/0370-2693(90)91176-C";
    }],
    ["reported transcription conflicts cannot become claims of fit reproduction", (d) => {
      d.graph.sources.find((s) => s.id === "whitlow1990-r").review.limit = "Every formula and raw-data correction was independently reproduced without discrepancies.";
    }],
    ["derived standard response needs its separate formal source", (d) => {
      claim(d, "D-phys-inclusive-dis-response").citations =
        claim(d, "D-phys-inclusive-dis-response").citations.filter((c) => c.sourceId !== "pdg2025-structure-functions");
    }],
    ["plotted errors must retain the omitted systematic", (d) => {
      claim(d, "C-phys-whitlow1990-separated-r").limitations = [];
    }]
  ]);
});

test("Bloom response remains corrected electron data from the existing acquisition", async () => {
  await rejects([
    ["electron response is not a free-quark count", (d) => {
      claim(d, "C-phys-bloom1969-corrected-crosssections").statement = "The detector counted three freely propagating quarks in each proton.";
    }],
    ["two analysis teams do not create two preparations", (d) => {
      claim(d, "M-phys-bloom1969-response-context").statement = "SLAC and MIT acquired independent spectra before pooling them.";
    }],
    ["pre-radiative does not mean raw events", (d) => {
      claim(d, "C-phys-bloom1969-corrected-crosssections").limitations = ["Figure 1a is an uncorrected raw event histogram."];
    }],
    ["the different Table I unit factors cannot collapse", (d) => {
      claim(d, "C-phys-bloom1969-corrected-crosssections").statement =
        claim(d, "C-phys-bloom1969-corrected-crosssections").statement.replace("10^-32", "10^-31");
    }],
    ["same-data provenance must reach the old interpretation", (d) => {
      d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:bloom1969-corrected-crosssections-slac-scaling");
    }]
  ]);
});

test("SLAC separation retains finite-mass response and correlated normalization", async () => {
  await rejects([
    ["the author epsilon typo is not the operative convention", (d) => {
      claim(d, "D-phys-inclusive-dis-response").statement =
        claim(d, "D-phys-inclusive-dis-response").statement.replace("1+2(1+nu^2/Q^2)", "1+(1+nu^2/Q^2)");
    }],
    ["the target-mass factor cannot be silently dropped", (d) => {
      claim(d, "D-phys-inclusive-dis-response").statement =
        claim(d, "D-phys-inclusive-dis-response").statement.replace("(1+4M^2*x^2/Q^2)", "");
    }],
    ["relative normalization is fitted, not independently measured", (d) => {
      claim(d, "C-phys-whitlow1990-normalized-crosssections").statement = "Every relative normalization is an independent luminosity observation with diagonal errors.";
    }],
    ["an excluded E140 fit sample still anchors normalization", (d) => {
      claim(d, "M-phys-whitlow1990-separation-context").statement = "The E140 points have no common calibration or correction dependence with any global point.";
    }],
    ["the archival reanalysis is not a fresh 1990 exposure", (d) => {
      study(d, "whitlow1990-reanalysis").studyType = "primary-experiment";
    }]
  ]);
});

test("target difference and model comparisons keep reported uncertainty and conditional meaning", async () => {
  await rejects([
    ["compatibility with zero is not exact equality", (d) => {
      claim(d, "C-phys-whitlow1990-target-difference").statement = "Rp equals Rd equals free-neutron R exactly at every scale.";
    }],
    ["the two errors have distinct reported roles", (d) => {
      claim(d, "C-phys-whitlow1990-target-difference").statement =
        claim(d, "C-phys-whitlow1990-target-difference").statement.replace("+/-0.009 systematic", "+/-0.009 statistical");
    }],
    ["the difference is its own adopted-model regression", (d) => {
      claim(d, "M-phys-whitlow1990-target-difference").statement = "Subtract two independent already-combined R points with no assumed Rp model.";
    }],
    ["curve disagreement is not exclusion of all QCD", (d) => {
      claim(d, "C-phys-whitlow1990-model-comparison").statement = "The measured longitudinal response disproves QCD and uniquely counts spin-one-half free quarks.";
    }],
    ["preliminary-data-fitted twist four is not independent prediction", (d) => {
      d.physics.comparisons.find((c) => c.id === "whitlow1990-parton-interpretation").assumptions = [];
    }]
  ]);
});

test("quark DIS dependencies reject missing prerequisites and retroactive model inputs", async () => {
  await rejects(QUARK_DIS_ADMISSION.dependencies.map(([id]) => [
    `missing prerequisite ${id}`, (d) => {
      d.graph.relations = d.graph.relations.filter((r) => r.id !== `physics:${id}`);
    }
  ]));
  await rejects([
    ["a leading-parton result cannot force the separated data", (d) => {
      d.graph.relations.push({ id: "physics:unreviewed-parton-forced-r", source: "phys:quark-parton-response",
        target: "phys:whitlow1990-separated-r", kind: "descriptive", role: "interpretation-dependency",
        assertion: "The assumed leading-parton formula fixes the measured R to zero.",
        claimIds: ["M-phys-whitlow1990-separated-r"], contextIds: ["whitlow1990-separation"] });
    }],
    ["late data cannot be added as an independent early exposure", (d) => {
      d.graph.relations.push({ id: "physics:unreviewed-retroactive-acquisition", source: "phys:whitlow1990-separated-r",
        target: "phys:bloom1969-corrected-crosssections", kind: "descriptive", role: "measurement-context",
        assertion: "The 1990 global fit was an independent 1969 detector exposure.",
        claimIds: ["M-phys-bloom1969-corrected-crosssections"], contextIds: ["bloom1969-response"] });
    }]
  ]);
});

test("reported SLAC regressions do not acquire unrelated executable ownership", async () => {
  await rejects([
    ["a reported separation is not a locally checked fit", (d) => {
      claim(d, "C-phys-whitlow1990-separated-r").status = "analytically-checked";
    }],
    ["a different algebra witness does not certify these data", (d) => {
      claim(d, "C-phys-whitlow1990-target-difference").checkIds = ["bernauer-printed-arithmetic"];
    }],
    ["the analysis remains owned by the primary report", (d) => {
      study(d, "whitlow1990-separation").sourceId = "bernauer-verifier";
    }]
  ]);
});
