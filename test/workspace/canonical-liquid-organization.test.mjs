import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const boundary = "D-phys-liquid-correlation-observable-boundary";
const model = "D-phys-spce-water-reorientation-model";
const staticContext = "M-phys-skinner2013-water-context";
const dynamicContext = "M-phys-laage2006-water-context";
const staticMethod = "M-phys-skinner-water-pair-order";
const staticResult = "C-phys-skinner-water-pair-order";
const dynamicMethod = "M-phys-laage-water-reorientation";
const dynamicResult = "C-phys-laage-water-reorientation";
const synthesis = "C-phys-liquid-organization-source-scope";
const synthesisMethod = "M-phys-liquid-organization-source-scope";
const staticStudy = "skinner2013-water-reanalysis";
const dynamicStudy = "laage2006-water-dynamics";
const staticPaper = "skinner2013-water-pair-distribution";
const dynamicPaper = "laage-hynes2006-water-reorientation";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const role = (data, suffix) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Align the display/study copies so rejection protects the scientific meaning,
// rather than merely detecting an inconsistent duplicate of a sentence.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), previous = record.statement;
  assert.ok(previous.includes(before), `Reviewed phrase required: ${before}`);
  record.statement = previous.replace(before, after);
  for (const node of data.graph.entities) if (node.description === previous) node.description = record.statement;
  for (const item of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (item[field] === previous) item[field] = record.statement;
  }
}

function removeLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `One reviewed boundary must match: ${fragment}`);
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

test("liquid structure reanalysis and simulated dynamics keep separate studies and methods", async () => {
  const data = await source();
  assert.equal(study(data, staticStudy).studyType, "experimental-reanalysis");
  assert.equal(study(data, dynamicStudy).studyType, "computational-analysis");
  assert.equal(role(data, "skinner2013-water-context").role, "experimental-context");
  assert.equal(role(data, "laage2006-water-context").role, "model-context");
  for (const id of [boundary, model]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  for (const [id, context] of [[staticResult, staticStudy], [dynamicResult, dynamicStudy]]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [context]);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, [staticStudy, dynamicStudy]);
  await rejects([
    ["the common reanalysis cannot become a fifth acquisition", (changed) => {
      study(changed, staticStudy).studyType = "primary-experiment";
    }],
    ["the simulated trajectory cannot become a spectroscopy experiment", (changed) => {
      study(changed, dynamicStudy).studyType = "primary-experiment";
    }],
    ["the dynamic result cannot borrow the static acquisition context", (changed) => {
      claim(changed, dynamicResult).contextIds = [staticStudy];
    }],
    ["the synthesis must retain both distinct contexts", (changed) => {
      claim(changed, synthesis).contextIds = [staticStudy];
    }],
    ["a formal definition cannot replace the context-bound interpretation method", (changed) => {
      edge(changed, "liquid-correlation-observable-boundary", "liquid-organization-source-scope").claimIds = [boundary];
    }]
  ]);
});

test("radial shell structure does not uniquely determine a network, temporal persistence or liquid response", async () => {
  const data = await source();
  assert.match(claim(data, synthesis).statement, /finite ensemble-averaged radial oxygen shell structure under the reported conditions/);
  assert.match(claim(data, boundary).statement, /Static pair structure, orientational relaxation, exchange waiting time, angular-event duration and molecular persistence are different/);
  await rejects([
    ["static ensemble structure is not a measured persistent network lifetime", (changed) =>
      replaceStatement(changed, synthesis, "finite ensemble-averaged radial oxygen shell structure under the reported conditions",
        "a uniquely measured temporally persistent hydrogen-bond network with directly observed lifetime")],
    ["radial two-body data do not determine a unique potential or angular graph", (changed) =>
      removeLimit(changed, boundary, "A radial two-body distribution does not uniquely determine")],
    ["stationary distribution persistence remains a modelling statement", (changed) =>
      removeLimit(changed, synthesis, "Persistence of an equilibrium distribution is an additional modelling statement")],
    ["static scattering does not supply viscosity or a transport lifetime", (changed) =>
      removeLimit(changed, staticResult, "viscosity, surface tension, dielectric relaxation or transport")],
    ["short-distance subtraction residuals are not a newly identified liquid species", (changed) =>
      removeLimit(changed, staticMethod, "subtraction artifact")],
    ["Fourier artifacts cannot become observed distinct clusters", (changed) =>
      removeLimit(changed, staticMethod, "fine sub-peaks")]
  ]);
});

test("four common reanalyses retain three-dataset averaging, distinct Q cutoffs and uncertainty meanings", async () => {
  const data = await source();
  assert.match(claim(data, staticContext).statement, /APS, SPring-8, SSRL1 and SSRL2/);
  assert.match(claim(data, staticContext).statement, /22 and 26 degrees C/);
  assert.match(claim(data, staticResult).statement, /2\.80\(1\) angstrom.*2\.57\(5\)/);
  await rejects([
    ["the recommended peak is not an average of four equal-quality measurements", (changed) =>
      removeLimit(changed, staticResult, "not simply the arithmetic mean of all four")],
    ["Figure 10 cutoffs cannot become one universal instrumental range", (changed) =>
      removeLimit(changed, staticContext, "Q_max=23,18,15.5,13")],
    ["the source Table I typography discrepancy cannot be silently resolved", (changed) =>
      removeLimit(changed, staticContext, "apparent SPring-8 footnote/cutoff discrepancy")],
    ["estimated statistical differences are not a total systematic covariance", (changed) =>
      removeLimit(changed, staticContext, "twice neighboring S_OO(Q) differences")],
    ["parenthesized source errors cannot acquire an invented confidence level", (changed) =>
      removeLimit(changed, staticResult, "No new confidence level")],
    ["shared correction inputs prevent treating every output as independent", (changed) =>
      removeLimit(changed, staticContext, "share the reanalysis conventions")],
    ["the three-vs-four prose discrepancy cannot add an unreviewed fourth average", (changed) =>
      removeLimit(changed, staticMethod, "explicit three-dataset construction")]
  ]);
});

test("isolated oxygen correlations retain form-factor and O-H inputs plus cutoff-dependent coordination", async () => {
  const data = await source();
  assert.match(claim(data, staticContext).statement, /quantum molecular form-factor input.*O-H contribution in Q space.*H-H approximation/);
  assert.match(claim(data, staticResult).statement, /4\.3\(1\).*2\.4 to 3\.30 angstrom.*4\.6\(1\).*3\.40 angstrom/);
  await rejects([
    ["raw weighted X-ray scattering is not an already isolated O-O observable", (changed) =>
      replaceStatement(changed, staticContext, "subtract the literature O-H contribution in Q space",
        "identify raw total scattering directly with S_OO(Q) without O-H subtraction")],
    ["an imported molecular form factor is not independently measured here", (changed) =>
      removeLimit(changed, staticContext, "underlying acquisition papers and imported neutron O-H")],
    ["coordination cannot silently integrate to the wrong upper radius", (changed) =>
      replaceStatement(changed, staticResult, "from 2.4 to 3.30 angstrom", "from zero to 3.40 angstrom")],
    ["the r-squared-weighted minimum is not the unweighted g minimum", (changed) =>
      removeLimit(changed, staticResult, "minimum in r^2*g_OO(r)")],
    ["oxygen neighbors cannot become an exact hydrogen-bond count", (changed) =>
      replaceStatement(changed, staticResult, "oxygen coordination is 4.3(1)", "exact hydrogen-bond count is 4.3")],
    ["a shell integral alone does not prove tetrahedral geometry", (changed) =>
      removeLimit(changed, boundary, "proof of tetrahedral coordination")]
  ]);
});

test("SPC/E dynamics retains finite classical preparation and separate bond/switch criteria", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /256 rigid SPC\/E.*0\.5 fs.*50 ps.*300 K.*75 ps microcanonical/);
  assert.match(claim(data, model).statement, /3\.5 angstrom and 30 degrees.*4\.0 angstrom and 50 degrees/);
  await rejects([
    ["a rigid classical SPC/E trajectory cannot become ab initio quantum dynamics", (changed) =>
      replaceStatement(changed, model, "256 rigid SPC/E water molecules", "an infinite ab initio quantum-water ensemble")],
    ["ordinary bond criteria and broader selected-switch criteria cannot be merged", (changed) =>
      removeLimit(changed, model, "broader switch-selection bounds")],
    ["the explicitly read model cannot be silently replaced by a TIP force field", (changed) =>
      removeLimit(changed, model, "No TIP water model")],
    ["a 2006 model cannot claim calibration to the later 2013 benchmark", (changed) =>
      removeLimit(changed, model, "precede the Skinner 2013 benchmark")],
    ["switch events within one trajectory are not independent physical measurements", (changed) =>
      removeLimit(changed, dynamicContext, "16000 switches")],
    ["an absorbing product endpoint must not become unrestricted reversible survival", (changed) =>
      replaceStatement(changed, dynamicContext, "absorbing endpoint convention so subsequent back reaction or rupture does not contribute",
        "unrestricted survival convention including every back reaction and later rupture")]
  ]);
});

test("angular duration, completed-switch rate and rank-two relaxation keep distinct numbers and assumptions", async () => {
  const data = await source();
  assert.match(claim(data, dynamicResult).statement, /about 250 fs.*1\.8 ps.*MD trajectory is 2\.0 ps.*1\.6 ps/);
  assert.match(claim(data, dynamicMethod).statement, /statistical-independence and long-time exponential approximations/);
  await rejects([
    ["the 250 fs angular event is not the waiting-time constant", (changed) =>
      removeLimit(changed, dynamicMethod, "not a measured waiting time")],
    ["the direct MD result and extended-model prediction cannot become identical", (changed) =>
      replaceStatement(changed, dynamicResult, "1.6 ps for the extended-jump-model", "2.0 ps for the extended-jump-model")],
    ["distinct numerical predictions cannot acquire invented exact concordance", (changed) =>
      removeLimit(changed, dynamicResult, "not numerically identical")],
    ["rank-two relaxation is not a Debye collective or molecular-destruction time", (changed) =>
      removeLimit(changed, dynamicMethod, "molecular destruction/formation time")],
    ["the source extended model does not freeze orientation between jumps", (changed) =>
      removeLimit(changed, dynamicMethod, "extension explicitly includes slower OO-frame motion")],
    ["a forward completed-switch time is not every geometric bond lifetime", (changed) =>
      removeLimit(changed, dynamicContext, "forward completed-switch rate")],
    ["earlier cited spectroscopy cannot become a newly reviewed acquisition", (changed) =>
      removeLimit(changed, dynamicResult, "not a new experiment in this paper")]
  ]);
});

test("actual author-upload text reading excludes unseen figures, unread primary inputs and numerical replay", async () => {
  const data = await source();
  for (const id of [staticPaper, dynamicPaper]) {
    assert.equal(publication(data, id).review.extent, "selected-primary-author-passages");
    assert.match(publication(data, id).review.limit, /not visually inspected/);
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 1);
  }
  assert.equal(publication(data, staticPaper).doi, "10.1063/1.4790861");
  assert.equal(publication(data, dynamicPaper).doi, "10.1126/science.1122154");
  assert.match(publication(data, dynamicPaper).review.limit, /has-review relation.*not a correction/);
  await rejects([
    ["author-upload body text cannot be relabelled as a visually reviewed full publisher PDF", (changed) => {
      publication(changed, dynamicPaper).review.extent = "full-publisher-article";
    }],
    ["unseen printed jump-equation typography cannot become an admitted source locator", (changed) => {
      claim(changed, dynamicMethod).citations[0].locator = "Visually verified full printed jump equation and all supplementary trajectories";
    }],
    ["an external appraisal relation is not an erratum", (changed) => {
      const reviewed = publication(changed, dynamicPaper).review;
      reviewed.limit = reviewed.limit.replace("external appraisal, not a correction", "published correction replacing the numerical results");
    }],
    ["the inherited experimental references cannot count as separately reviewed studies", (changed) =>
      removeLimit(changed, dynamicContext, "underlying experimental publications were not separately reviewed")],
    ["an unexecuted model cannot acquire a local trajectory replay", (changed) =>
      removeLimit(changed, dynamicContext, "new trajectory")]
  ]);
});

test("liquid scope admits neither universal self-organization nor crystal prerequisites, parent fractions or carrier thresholds", async () => {
  const data = await source();
  assert.equal(claim(data, synthesis).citations.find((ref) => ref.sourceId === "legacy-2").role, "provenance");
  for (const suffix of ["liquid-correlation-observable-boundary", "spce-water-reorientation-model",
    "skinner2013-water-context", "laage2006-water-context", "skinner-water-pair-order",
    "laage-water-reorientation", "liquid-organization-source-scope"]) assert.equal(role(data, suffix).instanceAdmission, "none");
  for (const suffix of ["skinner-water-pair-order", "laage-water-reorientation"]) {
    const relation = edge(data, suffix, "liquid-organization-source-scope");
    assert.equal(relation.kind, "descriptive");
    assert.deepEqual(relation.claimIds, [synthesisMethod]);
    assert.deepEqual(relation.contextIds, [staticStudy, dynamicStudy]);
  }
  await rejects([
    ["equilibrium correlation cannot become a driven universal self-organization proof", (changed) =>
      removeLimit(changed, synthesis, "driven nonequilibrium self-organization mechanism")],
    ["liquid organization does not require a prior crystalline phase", (changed) =>
      removeLimit(changed, synthesis, "does not require prior crystallization")],
    ["the selected water case does not require every liquid to be polar or hydrogen bonded", (changed) =>
      removeLimit(changed, synthesis, "every liquid is polar or hydrogen bonded")],
    ["catalogue weights are not measured causal fractions", (changed) =>
      removeLimit(changed, synthesis, "Original weights 0.4/0.35/0.25")],
    ["three carriers are not a measured onset threshold", (changed) =>
      removeLimit(changed, synthesis, "all N_min=N_crit=3")],
    ["the SOMA classification is not a new measured physical carrier", (changed) =>
      removeLimit(changed, synthesis, "SOMA higher-order pattern label")],
    ["the original name does not measure all macroscopic liquid properties", (changed) =>
      removeLimit(changed, synthesis, "Viscosity, surface tension, dielectric response and cooperative transport")],
    ["a literature-derived curve is not a locally reproduced physical instance", (changed) => {
      role(changed, "skinner-water-pair-order").instanceAdmission = "observed";
    }]
  ]);
});
