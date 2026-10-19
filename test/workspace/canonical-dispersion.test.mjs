import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const model = "D-phys-ground-state-dispersion-limits";
const boundary = "D-phys-dispersion-material-observable-boundary";
const preparation = "M-phys-perreault2005-phase-context";
const phase = "C-phys-perreault-atom-surface-phase";
const comparison = "C-phys-perreault-nonretarded-comparison";
const comparisonMethod = "M-phys-perreault-nonretarded-comparison";
const synthesis = "C-phys-dispersion-source-scope";
const synthesisMethod = "M-phys-dispersion-source-scope";
const experiment = "perreault2005-phase";
const primary = "perreault2005-atom-surface";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const study = (data, id = experiment) => data.physics.studies.find((record) => record.id === id);
const role = (data, suffix) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Keep display/study copies aligned: rejection should protect the scientific
// interpretation, rather than just detect an unsynchronized duplicate string.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), previous = record.statement;
  assert.ok(previous.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = previous.replace(before, after);
  for (const node of data.graph.entities) if (node.description === previous) node.description = record.statement;
  for (const item of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (item[field] === previous) item[field] = record.statement;
  }
}

function removeLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary must match: ${fragment}`);
  const removed = matches[0];
  record.limitations = record.limitations.filter((limit) => limit !== removed);
  for (const node of data.graph.entities) node.openObligations =
    node.openObligations.filter((limit) => limit !== removed);
  for (const item of data.physics.studies) item.limitations =
    item.limitations.filter((limit) => limit !== removed);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), name);
  }
}

test("dispersion retains analytic definitions and one phase experiment with dependent interpretation", async () => {
  const data = await source();
  for (const id of [model, boundary]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  assert.equal(study(data).sourceId, primary);
  assert.equal(study(data).studyType, "primary-experiment");
  assert.equal(data.physics.studies.filter((item) => item.sourceId === primary).length, 1);
  assert.equal(role(data, "perreault2005-phase-context").role, "experimental-context");
  for (const id of [phase, comparison, synthesis]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [experiment]);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  const dependency = edge(data, "perreault-atom-surface-phase", "perreault-nonretarded-comparison");
  assert.equal(dependency.kind, "descriptive");
  assert.equal(dependency.role, "interpretation-dependency");
  assert.deepEqual(dependency.claimIds, [comparisonMethod]);
  assert.deepEqual(dependency.contextIds, [experiment]);
  await rejects([
    ["a reported analytic limit cannot become an observed force", (changed) => {
      claim(changed, model).status = "publication-supported";
    }],
    ["the interpreted phase cannot acquire an independent acquisition", (changed) => {
      claim(changed, comparison).contextIds = ["lamoreaux1997"];
    }],
    ["the material comparison cannot bypass its measured phase dependency", (changed) => {
      const removed = edge(changed, "perreault-atom-surface-phase", "perreault-nonretarded-comparison");
      changed.graph.relations = changed.graph.relations.filter((item) => item !== removed);
    }]
  ]);
});

test("atom-pair and atom-wall energy powers retain distance, ground-state and unit limits", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /U_AB\(R\)=-C6\/R\^6 with C6>0/);
  assert.match(claim(data, model).statement, /-23\*hbar\*c\*a_A\(0\)\*a_B\(0\)\/\(4\*pi\*R\^7\)/);
  assert.match(claim(data, model).statement, /-C3_ideal\/z\^3.*-3\*hbar\*c\*a\(0\)\/\(8\*pi\*z\^4\)/);
  await rejects([
    ["a retarded atom-pair energy cannot silently retain the London exponent", (changed) =>
      replaceStatement(changed, model, "4*pi*R^7", "4*pi*R^6")],
    ["atom-wall and atom-pair geometry are not interchangeable", (changed) =>
      replaceStatement(changed, model, "-C3_ideal/z^3", "-C6/z^6")],
    ["the asymptote cannot extend through atomic overlap to R=0", (changed) =>
      removeLimit(changed, model, "outside atomic overlap")],
    ["Gaussian volume polarizability cannot silently become numerical SI polarizability", (changed) =>
      removeLimit(changed, model, "4*pi*epsilon_0")],
    ["polarizability cannot be identified with the fine-structure coupling", (changed) =>
      replaceStatement(changed, model, "explicitly distinct from the positive dimensionless fine-structure constant",
        "equal to the positive dimensionless fine-structure constant")],
    ["a lowest-state S-atom model is not every excited or thermal state", (changed) =>
      removeLimit(changed, model, "J=0 simplification")],
    ["energy powers cannot be relabelled as the same force powers", (changed) =>
      removeLimit(changed, model, "Force derivatives and plate energy/pressure")]
  ]);
});

test("finite silicon nitride and thermal populations do not inherit ideal-conductor universality", async () => {
  await rejects([
    ["the measured grating cannot silently become an ideal conductor", (data) =>
      removeLimit(data, boundary, "finite silicon-nitride channel")],
    ["an unspecified grating temperature cannot become a universal thermal prediction", (data) =>
      removeLimit(data, boundary, "thermal crossover law")],
    ["dispersion does not incorporate every permanent-dipole or applied-field response", (data) =>
      replaceStatement(data, boundary, "neither of which is estimated here", "both independently measured by this experiment")],
    ["an attractive phase alone does not exclude all static electric alternatives", (data) =>
      removeLimit(data, boundary, "Permanent-field/patch-charge")],
    ["two-atom dispersion is not an exact pair-additive dense-material law", (data) =>
      removeLimit(data, boundary, "exact pair-additive dense-material potential")]
  ]);
});

test("actual author-preprint reading retains archive version, later internal date and unread publisher limits", async () => {
  const data = await source();
  const reviewed = publication(data, primary);
  assert.equal(reviewed.year, 2005);
  assert.equal(reviewed.url, "https://arxiv.org/pdf/physics/0505160v1");
  assert.equal(reviewed.review.extent, "full-author-preprint");
  assert.match(reviewed.review.limit, /24 May 2005/);
  assert.match(reviewed.review.limit, /16 November 2018/);
  assert.match(reviewed.review.limit, /final publisher full PDF was not obtained/i);
  assert.equal(publication(data, "casimir-polder1948").review.extent, "selected-primary-published-passages");
  await rejects([
    ["the PDF internal compilation date is not a new 2018 acquisition", (changed) => {
      publication(changed, primary).year = 2018;
    }],
    ["the reviewed author version cannot become a full publisher reading", (changed) => {
      publication(changed, primary).review.extent = "full-published-primary-article";
    }],
    ["the later internal date discrepancy cannot disappear from the source limits", (changed) => {
      publication(changed, primary).review.limit = reviewed.review.limit
        .replace("16 November 2018", "24 May 2005");
    }],
    ["a checked journal abstract does not admit a separately unread Lifshitz calculation", (changed) =>
      removeLimit(changed, comparisonMethod, "No separately read Lifshitz calculation")],
    ["the cited model cannot silently claim the unread intermediate derivation", (changed) => {
      claim(changed, model).citations[0].locator = "Complete Part II intermediate derivation on unread pages 366-369";
    }]
  ]);
});

test("the relative diffraction-order phase is not the central local phase or a resolved trajectory", async () => {
  const data = await source();
  assert.match(claim(data, phase).statement, /approximately 0\.3 rad relative fringe-phase/);
  assert.match(claim(data, phase).statement, /sign reversed/);
  assert.match(claim(data, comparisonMethod).statement, /spatial diffraction-amplitude integral/);
  await rejects([
    ["Phi_0 cannot be replaced by the local midpoint phi_0", (changed) =>
      removeLimit(changed, phase, "constant/midpoint local phase phi_0")],
    ["the measured fringe phase is not the illustrated 0.05 rad central phase", (changed) =>
      replaceStatement(changed, phase, "approximately 0.3 rad", "exactly 0.05 rad")],
    ["channel geometry is not a separate 10 nm resolved position measurement", (changed) =>
      removeLimit(changed, phase, "as-small-as-10-nm")],
    ["the phase is not a direct force trace or a chemical-formation event", (changed) =>
      replaceStatement(changed, phase, "not a direct force trace or an event forming a molecular or ionic bond",
        "a direct force trace measuring molecular and ionic bond formation")],
    ["an approximate scale cannot acquire an invented precision", (changed) =>
      removeLimit(changed, phase, "No invented uncertainty")]
  ]);
});

test("C3 remains an adopted prediction parameter and the comparison reuses the same phase data", async () => {
  const data = await source();
  assert.match(claim(data, comparisonMethod).statement, /C3=3 meV\*nm\^3/);
  assert.match(claim(data, comparison).statement, /using adopted C3=3 meV\*nm\^3/);
  await rejects([
    ["an adopted coefficient cannot become a new fitted C3 estimate", (changed) =>
      replaceStatement(changed, comparison, "using adopted C3=3 meV*nm^3", "yielding newly fitted C3=(3.00 +/- 0.03) meV*nm^3")],
    ["the prior diffraction result cannot acquire a local independent reanalysis", (changed) =>
      removeLimit(changed, comparisonMethod, "not been separately reviewed or refitted")],
    ["the future ten-percent C3 precision was not achieved in this study", (changed) =>
      removeLimit(changed, comparisonMethod, "future prospect")],
    ["Na/silicon-nitride phase does not numerically test the ideal J=0 coefficient", (changed) =>
      removeLimit(changed, comparison, "different supplied atoms/material boundaries")],
    ["the phase comparison cannot become an independent repetition or atom-pair C6", (changed) =>
      replaceStatement(changed, comparison, "not a newly fitted C3, a measurement of an atom-pair C6",
        "a newly fitted C3 and an independent measurement of an atom-pair C6")]
  ]);
});

test("Figure 3 count statistics and Figure 4 corrected systematics remain distinct", async () => {
  const data = await source();
  const errors = claim(data, preparation).limitations.find((limit) => limit.includes("Poisson"));
  assert.match(errors, /Figure 3.*Poisson.*five-second/);
  assert.match(errors, /Figure 4.*30 percent.*systematic-parameter uncertainty/);
  assert.match(claim(data, preparation).statement, /50 s intervals.*fifth-order polynomial/);
  await rejects([
    ["Fig.4 systematic bars cannot become the Fig.3 Poisson errors", (changed) => {
      const record = claim(changed, preparation);
      const old = record.limitations.find((limit) => limit.includes("Poisson"));
      const replacement = old.replace("systematic-parameter uncertainty", "Poisson counting statistics only");
      record.limitations = record.limitations.map((limit) => limit === old ? replacement : limit);
      for (const node of changed.graph.entities) node.openObligations =
        node.openObligations.map((limit) => limit === old ? replacement : limit);
      for (const item of changed.physics.studies) item.limitations =
        item.limitations.map((limit) => limit === old ? replacement : limit);
    }],
    ["unwanted diffraction-order corrections cannot be omitted", (changed) =>
      removeLimit(changed, comparisonMethod, "30 percent diffraction-order offsets")],
    ["corrected fringe data do not become an unreduced raw measurement", (changed) =>
      replaceStatement(changed, preparation, "subtract a fifth-order polynomial fit to control-phase drift",
        "retain uncorrected control-phase drift as the interaction phase")],
    ["model-dependent error bars are not a supplied full covariance", (changed) =>
      removeLimit(changed, comparisonMethod, "total covariance")]
  ]);
});

test("finite dispersion evidence does not acquire universal cohesion, mandatory parents or carrier minima", async () => {
  const data = await source();
  for (const suffix of ["ground-state-dispersion-limits", "dispersion-material-observable-boundary",
    "perreault2005-phase-context", "perreault-atom-surface-phase", "perreault-nonretarded-comparison",
    "dispersion-source-scope"]) assert.equal(role(data, suffix).instanceAdmission, "none");
  assert.equal(claim(data, synthesis).citations.find((citation) => citation.sourceId === "legacy-2").role, "provenance");
  for (const from of ["ideal-plate-casimir", "casimir-material-model"]) {
    const dependency = edge(data, from, "dispersion-source-scope");
    assert.equal(dependency.kind, "descriptive");
    assert.equal(dependency.role, "interpretation-dependency");
    assert.deepEqual(dependency.claimIds, [synthesisMethod]);
  }
  await rejects([
    ["one ground-state experiment is not universal attraction", (changed) =>
      removeLimit(changed, synthesis, "does not establish universal attraction")],
    ["neutral atomic response does not require prior ionic and benzene-resonance stages", (changed) =>
      removeLimit(changed, synthesis, "does not require the original 2.3")],
    ["the atom-surface phase cannot prove noble-gas cohesion or every condensed phase", (changed) =>
      removeLimit(changed, synthesis, "No noble-gas cohesion energy")],
    ["catalogue parent weights are not fitted causal contributions", (changed) =>
      removeLimit(changed, synthesis, "Original parent weights 0.4/0.3/0.3")],
    ["a selected pair model does not measure catalogue critical carrier counts", (changed) =>
      removeLimit(changed, synthesis, "parent minima/critical counts 2/1/2")],
    ["Casimir reuse cannot duplicate corrected macroscopic acquisitions", (changed) =>
      removeLimit(changed, synthesisMethod, "no Lamoreaux/Bressi measurement")],
    ["an evidence-scoped observation cannot become an independently reproduced instance", (changed) => {
      role(changed, "perreault-atom-surface-phase").instanceAdmission = "observed";
    }]
  ]);
});
