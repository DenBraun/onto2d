import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const bulk = "D-phys-bulk-equilibrium-phase-conditions";
const boundary = "D-phys-phase-regime-stability-observable-boundary";
const result = "C-phys-phase-regime-source-scope";
const method = "M-phys-phase-regime-source-scope";
const paper = "gibbs1878-equilibrium-author-abstract";
const contexts = ["shechtman1984-alloy", "bernard2011-hard-disks",
  "skinner2013-water-reanalysis", "laage2006-water-dynamics"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const publication = (data, id) => data.graph.sources.find((item) => item.id === id);
const role = (data, suffix) => data.readiness.nodeRoles.find((item) => item.nodeId === `phys:${suffix}`);
const scopeEdges = (data) => data.graph.relations.filter((item) => item.target === "phys:phase-regime-source-scope");

// Keep display copies aligned: each mutation changes the scientific contract,
// rather than merely making two copies of a sentence disagree.
function replaceStatement(data, id, before, after) {
  const item = claim(data, id), previous = item.statement;
  assert.ok(previous.includes(before), `Reviewed phrase required: ${before}`);
  item.statement = previous.replace(before, after);
  for (const node of data.graph.entities) if (node.description === previous) node.description = item.statement;
  for (const study of data.physics.studies) for (const field of ["preparation", "finding"]) {
    if (study[field] === previous) study[field] = item.statement;
  }
}

function removeLimit(data, id, fragment) {
  const item = claim(data, id), matches = item.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `One reviewed boundary must match: ${fragment}`);
  const removed = matches[0];
  item.limitations = item.limitations.filter((limit) => limit !== removed);
  for (const node of data.graph.entities) node.openObligations = node.openObligations.filter((limit) => limit !== removed);
  for (const study of data.physics.studies) study.limitations = study.limitations.filter((limit) => limit !== removed);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), name);
  }
}

test("bulk equilibrium retains its constraints, exchange assumptions and notation", async () => {
  const data = await source();
  assert.equal(claim(data, bulk).status, "definition");
  assert.equal(claim(data, bulk).contextIds, undefined);
  assert.match(claim(data, bulk).statement, /entropy is maximal at fixed total energy, or energy is minimal at fixed entropy/);
  assert.match(claim(data, bulk).statement, /A=U-T\*S and G=U-T\*S\+p\*V/);
  await rejects([
    ["minimum energy needs its entropy constraint", (d) => replaceStatement(d, bulk,
      "energy is minimal at fixed entropy", "energy is always minimal under every constraint")],
    ["the Helmholtz and Gibbs potentials cannot have swapped pressure terms", (d) => replaceStatement(d, bulk,
      "A=U-T*S and G=U-T*S+p*V", "A=U-T*S+p*V and G=U-T*S")],
    ["coexistence does not imply unconditional equality across every membrane", (d) => removeLimit(d, bulk, "selective diaphragm")],
    ["component potential units are not automatically per molecule", (d) => removeLimit(d, bulk, "per chosen amount")],
    ["bulk hydrostatic criteria do not include unmodelled interface or driving terms", (d) => removeLimit(d, bulk, "Finite-interface energy")],
    ["the selected equalities require freely exchanging components", (d) => replaceStatement(d, bulk,
      "each freely exchangeable independently variable component", "every component even across an impermeable partition")]
  ]);
});

test("phase-rule degrees of freedom count intensive states rather than specimens or phase amounts", async () => {
  const data = await source();
  assert.match(claim(data, bulk).statement, /f=C\+2-N_ph.*independent components.*coexisting phases, not specimens/);
  await rejects([
    ["a phase specimen count is not the thermodynamic phase count", (d) => replaceStatement(d, bulk,
      "N_ph counts coexisting phases, not specimens", "N_ph counts every grain, droplet and specimen separately")],
    ["the selected phase-rule sign is fixed", (d) => replaceStatement(d, bulk, "f=C+2-N_ph", "f=C+2+N_ph")],
    ["phase amounts are not independent intensive freedoms", (d) => removeLimit(d, bulk, "relative amounts")],
    ["an identity cannot supply an equation of state or material boundary", (d) => removeLimit(d, bulk, "equation of state")],
    ["coexistence overall density changes need not create new intensive phases", (d) => removeLimit(d, boundary, "phase proportions")],
    ["phase-rule C and N_ph are not original carrier thresholds", (d) => removeLimit(d, result, "parent N_min=N_crit counts 2/3/3")]
  ]);
});

test("local stability, new-phase stability and kinetic persistence remain distinct", async () => {
  const data = await source();
  assert.match(claim(data, boundary).statement, /Local resistance to continuous perturbations is distinct from stability against formation of a different phase/);
  assert.match(claim(data, result).statement, /protocol-dependent metastability/);
  await rejects([
    ["local variation stability cannot prove global equilibrium", (d) => replaceStatement(d, boundary,
      "kinetic persistence can occur without global thermodynamic stability", "every kinetically persistent state is globally thermodynamically stable")],
    ["selected Gibbs criteria are not a nucleation-rate calculation", (d) => removeLimit(d, boundary, "nucleation barrier")],
    ["the three anneal protocols do not locate a critical temperature", (d) => removeLimit(d, result, "400-degree-C critical temperature")],
    ["bulk constraints cannot identify all stationary states as stable", (d) => removeLimit(d, result, "every stationary or long-lived state")],
    ["coexistence and kinetic pathways cannot be silently identified", (d) => removeLimit(d, result, "spinodal-like local-stability boundaries")],
    ["a static or dynamic single-liquid study is not a measured melting curve", (d) => removeLimit(d, boundary, "melting temperature")]
  ]);
});

test("the selected fluid critical endpoint is not a universal continuous-transition criterion", async () => {
  const data = await source();
  assert.match(claim(data, boundary).statement, /selected Gibbs fluid critical endpoint.*not a universal criterion for every continuous ordering transition/);
  assert.match(claim(data, result).statement, /liquid, hexatic and solid regimes.*continuous upper ordering transition/);
  await rejects([
    ["KTHNY-like ordering need not coalesce two fluid states", (d) => removeLimit(d, boundary, "coalescing-fluid critical endpoint")],
    ["the positive finite model must retain both transitions", (d) => replaceStatement(d, result,
      "first-order coexistence and a continuous upper ordering transition", "two first-order transitions with a universal fluid critical endpoint")],
    ["the hard-disk density scan is not a temperature-driven liquid-gas map", (d) => removeLimit(d, result, "no distinct liquid-gas phases")],
    ["equilibrated finite-box pressure loops do not prove nonequilibrium hysteresis", (d) => removeLimit(d, boundary, "nonequilibrium hysteresis loop")],
    ["single-regime water observations cannot supply an unmeasured transition model", (d) => removeLimit(d, result, "single-regime structural/dynamical information")],
    ["Monte Carlo displacement time cannot become a physical kinetic clock", (d) => replaceStatement(d, method,
      "do not pool their controls or transfer model densities, thermal protocols or microscopic clocks between systems",
      "transfer all model densities, thermal protocols and microscopic clocks directly between systems")]
  ]);
});

test("the synthesis reuses exactly four studies and uses its own context-bound method", async () => {
  const data = await source();
  assert.equal(claim(data, result).status, "literature-synthesis");
  assert.deepEqual(claim(data, result).contextIds, contexts);
  assert.deepEqual(claim(data, method).contextIds, contexts);
  for (const id of contexts) assert.equal(data.physics.studies.filter((item) => item.id === id).length, 1);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === paper).length, 0);
  assert.equal(scopeEdges(data).length, 5);
  for (const edge of scopeEdges(data)) {
    assert.equal(edge.kind, "descriptive");
    assert.equal(edge.role, "interpretation-dependency");
    assert.deepEqual(edge.claimIds, [method]);
    assert.deepEqual(edge.contextIds, contexts);
  }
  await rejects([
    ["the synthesis cannot become another primary acquisition", (d) => { claim(d, result).status = "publication-supported"; }],
    ["removing a reused context changes the interpretation", (d) => { claim(d, result).contextIds = contexts.slice(0, 3); }],
    ["a definition does not replace the evidence interpretation method", (d) => { scopeEdges(d)[0].claimIds = [bulk]; }],
    ["scope dependencies must carry all target contexts", (d) => { scopeEdges(d)[0].contextIds = [contexts[0]]; }],
    ["an existing model study cannot be cloned as another acquisition", (d) => {
      const copy = structuredClone(d.physics.studies.find((item) => item.id === contexts[1]));
      copy.id = "bernard2011-phase-map-independent-replication";
      d.physics.studies.push(copy);
    }],
    ["reuse cannot be presented as a new joint fit or replication", (d) => removeLimit(d, result, "existing studies and source scopes are reused")],
    ["no unexecuted phase-map replay is admitted", (d) => removeLimit(d, method, "No equation-of-state fit")]
  ]);
});

test("actual author-summary reading and original catalogue provenance stay bounded", async () => {
  const data = await source();
  const record = publication(data, paper);
  assert.equal(record.doi, "10.2475/ajs.s3-16.96.441");
  assert.equal(record.year, 1878);
  assert.equal(record.review.extent, "selected-primary-published-passages");
  assert.match(record.review.limit, /450-458.*not admitted/);
  for (const suffix of ["bulk-equilibrium-phase-conditions", "phase-regime-stability-observable-boundary", "phase-regime-source-scope"]) {
    assert.equal(role(data, suffix).instanceAdmission, "none");
  }
  assert.equal(claim(data, result).citations.find((item) => item.sourceId === "legacy-2").role, "provenance");
  await rejects([
    ["the selected primary author summary is not the complete earlier treatise", (d) => { publication(d, paper).review.extent = "full-original-1876-1878-treatise"; }],
    ["an unread capillary section cannot become an admitted locator", (d) => { claim(d, bulk).citations[0].locator = "Published pages 450-458: fully reviewed capillary stability proof"; }],
    ["crystal, liquid and colloid are not universal necessary ancestors", (d) => removeLimit(d, result, "Original necessary parents 2.9")],
    ["catalogue weights are not measured causal fractions", (d) => removeLimit(d, result, "Original weights 0.4/0.35/0.25")],
    ["SOMA pattern labels do not add a measured physical entity", (d) => removeLimit(d, result, "SOMA global pattern/stability-map label")],
    ["generic legacy evidence does not admit unread calorimetric or transport data", (d) => removeLimit(d, result, "generic thermodynamics/Landau/critical-framework")],
    ["catalogue provenance cannot be promoted to scientific support", (d) => { claim(d, result).citations.find((item) => item.sourceId === "legacy-2").role = "supports"; }]
  ]);
});
