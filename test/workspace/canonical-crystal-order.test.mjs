import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const order = "D-phys-spatial-order-symmetry-boundary";
const model = "D-phys-hard-disk-equilibrium-model";
const alloyContext = "M-phys-shechtman1984-alloy-context";
const simulationContext = "M-phys-bernard2011-hard-disk-context";
const alloyMethod = "M-phys-shechtman-icosahedral-order";
const alloyResult = "C-phys-shechtman-icosahedral-order";
const simulationMethod = "M-phys-bernard-hard-disk-ordering";
const simulationResult = "C-phys-bernard-hard-disk-ordering";
const synthesis = "C-phys-crystal-order-source-scope";
const synthesisMethod = "M-phys-crystal-order-source-scope";
const alloyStudy = "shechtman1984-alloy";
const simulationStudy = "bernard2011-hard-disks";
const alloyPaper = "shechtman1984-icosahedral";
const simulationPaper = "bernard2011-hard-disks";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const role = (data, suffix) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${suffix}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Synchronize presentation/study copies so mutations challenge the scientific
// contract rather than merely introduce inconsistent copies of one sentence.
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

test("crystal evidence keeps the alloy experiment and hard-disk computation as separate contexts", async () => {
  const data = await source();
  for (const id of [order, model]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  assert.equal(study(data, alloyStudy).studyType, "primary-experiment");
  assert.equal(study(data, simulationStudy).studyType, "computational-analysis");
  assert.equal(role(data, "shechtman1984-alloy-context").role, "experimental-context");
  assert.equal(role(data, "bernard2011-hard-disk-context").role, "model-context");
  for (const [id, context] of [[alloyResult, alloyStudy], [simulationResult, simulationStudy]]) {
    assert.equal(claim(data, id).status, "publication-supported");
    assert.deepEqual(claim(data, id).contextIds, [context]);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, [alloyStudy, simulationStudy]);
  for (const from of ["shechtman-icosahedral-order", "bernard-hard-disk-ordering"]) {
    const dependency = edge(data, from, "crystal-order-source-scope");
    assert.equal(dependency.kind, "descriptive");
    assert.equal(dependency.role, "interpretation-dependency");
    assert.deepEqual(dependency.claimIds, [synthesisMethod]);
    assert.deepEqual(dependency.contextIds, [alloyStudy, simulationStudy]);
  }
  await rejects([
    ["the hard-disk simulation cannot become a physical alloy experiment", (changed) => {
      study(changed, simulationStudy).studyType = "primary-experiment";
    }],
    ["a model result cannot borrow the alloy acquisition", (changed) => {
      claim(changed, simulationResult).contextIds = [alloyStudy];
    }],
    ["the synthesis must retain both actual contexts", (changed) => {
      claim(changed, synthesis).contextIds = [simulationStudy];
    }],
    ["a formal model alone cannot replace the synthesis interpretation method", (changed) => {
      edge(changed, "hard-disk-equilibrium-model", "crystal-order-source-scope").claimIds = [model];
    }]
  ]);
});

test("finite icosahedral order does not acquire universal periodicity or a uniquely solved atomic structure", async () => {
  const data = await source();
  assert.match(claim(data, order).statement, /not imposed as a universal prerequisite/);
  assert.match(claim(data, alloyResult).statement, /six fivefold, ten threefold and fifteen twofold/);
  assert.match(claim(data, alloyResult).statement, /finite grains up to about 2 micrometers/);
  assert.match(claim(data, alloyContext).statement, /dark-field.*convergent-beam.*Cu K-alpha/);
  await rejects([
    ["periodic Bravais translation cannot become a universal crystal requirement", (changed) =>
      replaceStatement(changed, order, "not imposed as a universal prerequisite", "required as a universal prerequisite")],
    ["finite grain correlations do not directly measure an infinite sample", (changed) =>
      removeLimit(changed, order, "finite-grain correlation bound")],
    ["the diffraction controls do not uniquely solve a quasiperiodic atomic tiling", (changed) =>
      removeLimit(changed, alloyResult, "unique quasiperiodic atom arrangement")],
    ["the provisional parallel-icosahedron packing is not an established structure", (changed) =>
      removeLimit(changed, alloyMethod, "qualitative random packing")],
    ["the reported finite non-Bravais evidence cannot become a universal absence theorem", (changed) =>
      replaceStatement(changed, alloyResult, "support the authors rejection of a conventional multiply twinned Bravais-lattice explanation",
        "prove that every conceivable periodic or finite structural explanation is impossible")]
  ]);
});

test("Al-Mn annealing durations and morphology do not become an equilibrium transition temperature or latent heat", async () => {
  const data = await source();
  assert.match(claim(data, alloyResult).statement, /6 hours at 300 degrees C.*1 hour at 350 degrees C.*1 hour at 400 degrees C/);
  await rejects([
    ["a one-hour anneal at 400 C does not locate equilibrium Tc", (changed) =>
      removeLimit(changed, alloyResult, "equilibrium transition temperature of 400 degrees C")],
    ["morphological first-order inference is not a latent-heat measurement", (changed) =>
      removeLimit(changed, alloyContext, "not a measured latent heat")],
    ["the structural growth estimate cannot become measured physical kinetics", (changed) =>
      removeLimit(changed, alloyResult, "real-time growth curve")],
    ["protocol-dependent metastability cannot become unlimited stability", (changed) =>
      replaceStatement(changed, alloyResult, "metastable under the reported protocols", "thermodynamically stable for all temperatures and durations")],
    ["historical crystallization must not erase prior icosahedral order", (changed) =>
      removeLimit(changed, alloyMethod, "initial icosahedral material lacked spatial order")]
  ]);
});

test("the hard-disk model has radius-based two-dimensional packing and entropic rather than attractive cohesion", async () => {
  const data = await source();
  assert.match(claim(data, model).statement, /radius sigma.*area V=L\^2.*eta=N\*pi\*sigma\^2\/V/);
  assert.match(claim(data, model).statement, /zero potential energy and overlaps are forbidden/);
  assert.match(claim(data, model).statement, /independent of temperature.*pressure is proportional to temperature/);
  assert.match(claim(data, model).statement, /entropic without an attractive pair potential/);
  await rejects([
    ["sigma cannot silently change from radius to diameter", (changed) =>
      replaceStatement(changed, model, "disks of radius sigma", "disks of diameter sigma")],
    ["a square area cannot become three-dimensional volume", (changed) =>
      replaceStatement(changed, model, "two-dimensional periodic square of area V=L^2", "three-dimensional periodic cube of volume V=L^3")],
    ["allowed hard-disk configurations do not acquire negative cohesive potential energy", (changed) =>
      replaceStatement(changed, model, "zero potential energy", "negative dispersion cohesion energy")],
    ["density-controlled entropic ordering is not a cooling-induced binding transition", (changed) =>
      replaceStatement(changed, model, "independent of temperature", "controlled by an attractive binding temperature")],
    ["the mathematical model does not remove microscopic forces from the real alloy", (changed) =>
      removeLimit(changed, model, "real Al-Mn alloy")],
    ["two disks do not establish a critical count of ions or molecular dipoles", (changed) =>
      removeLimit(changed, model, "critical number of ions")]
  ]);
});

test("SEC global balance, computed peak wave vector and displacement clock remain explicit", async () => {
  const data = await source();
  assert.match(claim(data, simulationContext).statement, /breaks detailed balance and preserves global balance/);
  assert.match(claim(data, simulationContext).statement, /k_peak.*rather than imposing.*k_perf/);
  assert.match(claim(data, model).statement, /Psi_k=average_l exp\(6\*i\*phi_kl\)/);
  await rejects([
    ["SEC is not the detailed-balance algorithm in this calculation", (changed) =>
      replaceStatement(changed, simulationContext, "breaks detailed balance and preserves global balance",
        "preserves detailed balance and violates global balance")],
    ["positional analysis must not force the perfect-lattice reciprocal wave vector", (changed) =>
      replaceStatement(changed, simulationContext, "rather than imposing the perfect triangular-lattice k_perf",
        "replaced by the exact perfect triangular-lattice k_perf")],
    ["bond orientation of structureless disks is not a molecular permanent dipole", (changed) =>
      replaceStatement(changed, model, "Local sixfold bond orientation", "Permanent molecular electric dipole orientation")],
    ["simulation time cannot become a measured nucleation or melting rate", (changed) =>
      removeLimit(changed, simulationContext, "physical nucleation or melting rates")],
    ["the reported simulation size is not an arbitrary thermodynamic infinity", (changed) =>
      replaceStatement(changed, simulationContext, "up to 1024^2 disks", "an infinite number of disks")]
  ]);
});

test("equilibrium interface coexistence and the continuous upper transition remain distinct", async () => {
  const data = await source();
  assert.match(claim(data, simulationResult).statement, /first-order liquid-hexatic.*approximately eta=0\.700 to 0\.716/);
  assert.match(claim(data, simulationMethod).statement, /interface free energy per disk proportional to N\^-1\/2/);
  assert.match(claim(data, simulationResult).statement, /continuous hexatic-solid transition/);
  await rejects([
    ["the finite equilibrium interface pressure loop is not kinetic hysteresis", (changed) =>
      replaceStatement(changed, simulationMethod, "Keep a finite equilibrium interface loop distinct from a kinetic hysteresis loop",
        "Identify the finite equilibrium interface loop with a kinetic hysteresis loop")],
    ["coexistence cannot become a second continuous critical transition", (changed) =>
      replaceStatement(changed, simulationResult, "first-order liquid-hexatic coexistence", "continuous liquid-hexatic critical behavior")],
    ["the selected study does not establish two continuous KTHNY transitions", (changed) =>
      removeLimit(changed, simulationResult, "full two-continuous-transition KTHNY scenario")],
    ["approximate source packing fractions are not exact physical temperatures", (changed) =>
      removeLimit(changed, simulationResult, "not exact thresholds or experimentally measured temperatures")],
    ["the computed interface scaling is not an N-independent extensive barrier per disk", (changed) =>
      replaceStatement(changed, simulationMethod, "proportional to N^-1/2", "independent of N")]
  ]);
});

test("hexatic assignment retains unresolved orientation, algebraic two-dimensional order and finite-size limits", async () => {
  const data = await source();
  assert.match(claim(data, simulationResult).statement, /eta=0\.718.*exponential positional decay.*about 100 disk radii/);
  assert.match(claim(data, simulationResult).statement, /near r\^-1\/3 over the resolved range/);
  await rejects([
    ["the eta=.718 orientational data alone do not distinguish quasi from true LRO", (changed) =>
      removeLimit(changed, simulationMethod, "too slowly for the authors to numerically distinguish")],
    ["the phase assignment must retain its additional framework argument", (changed) =>
      removeLimit(changed, simulationResult, "phase assignment includes the framework argument")],
    ["a two-dimensional solid does not acquire nondecaying positional order", (changed) =>
      replaceStatement(changed, order, "algebraically decaying positional correlations rather than nondecaying positional order",
        "nondecaying positional order at every distance")],
    ["arbitrary two-dimensional potentials are outside the hard-disk conclusion", (changed) =>
      removeLimit(changed, order, "arbitrary interactions or boundaries")],
    ["large-distance finite-size effects cannot disappear near the continuous transition", (changed) =>
      removeLimit(changed, simulationMethod, "finite-size effects at the largest distances")],
    ["the approximate positional exponent is not a universal exact material law", (changed) =>
      replaceStatement(changed, simulationResult, "near r^-1/3 over the resolved range", "exactly r^-1/3 at every scale in all liquids and crystals")]
  ]);
});

test("primary reading and sampling errors do not imply unread publisher text or a new numerical reproduction", async () => {
  const data = await source();
  assert.equal(publication(data, alloyPaper).doi, "10.1103/PhysRevLett.53.1951");
  assert.equal(publication(data, simulationPaper).doi, "10.1103/PhysRevLett.107.155704");
  assert.equal(publication(data, simulationPaper).url, "https://arxiv.org/pdf/1102.4094v2");
  assert.match(publication(data, simulationPaper).review.limit, /7 October 2011.*30 August 2011/);
  assert.match(publication(data, alloyPaper).review.limit, /fourth page duplicating/);
  assert.equal(data.physics.studies.filter((record) => record.sourceId === simulationPaper).length, 1);
  await rejects([
    ["the author's v2 and supplement cannot become complete publisher reading", (changed) => {
      publication(changed, simulationPaper).review.extent = "full-publisher-article";
    }],
    ["the verified publication date is not 14 October", (changed) => {
      const record = publication(changed, simulationPaper).review;
      record.limit = record.limit.replace("7 October 2011", "14 October 2011");
    }],
    ["the duplicated enlarged figure is not a fourth published article page", (changed) => {
      const record = publication(changed, alloyPaper).review;
      record.limit = record.limit.replace("not a fourth article page", "a fourth article page");
    }],
    ["Gaussian sampling bars are not 64 independent physical replications", (changed) =>
      removeLimit(changed, simulationContext, "64 essentially independent configurations")],
    ["read code and undownloaded configurations cannot become an executed replay", (changed) =>
      removeLimit(changed, simulationContext, "read without execution")],
    ["the fitted pressure estimator is not an independently replayed contact analysis", (changed) =>
      removeLimit(changed, simulationContext, "No contact-fit")]
  ]);
});

test("crystal scope does not infer material response, universal parents or carrier minima by name", async () => {
  const data = await source();
  assert.equal(claim(data, synthesis).citations.find((citation) => citation.sourceId === "legacy-2").role, "provenance");
  for (const suffix of ["spatial-order-symmetry-boundary", "hard-disk-equilibrium-model",
    "shechtman1984-alloy-context", "bernard2011-hard-disk-context", "shechtman-icosahedral-order",
    "bernard-hard-disk-ordering", "crystal-order-source-scope"]) {
    assert.equal(role(data, suffix).instanceAdmission, "none");
  }
  await rejects([
    ["ordering is not a measurement of conductivity or anisotropic transport", (changed) =>
      removeLimit(changed, synthesis, "Elasticity, conductivity, anisotropic transport")],
    ["hard-disk entropy is not a proof of real-alloy force contributions", (changed) =>
      removeLimit(changed, synthesis, "which microscopic contributions stabilize the real Al-Mn alloy")],
    ["catalogue weights do not become fitted causal fractions", (changed) =>
      removeLimit(changed, synthesis, "Original weights 0.4/0.35/0.25")],
    ["finite order does not establish a two-unit crystallization threshold", (changed) =>
      removeLimit(changed, synthesis, "N_min=N_crit=2")],
    ["thermal protocols and one density model do not establish arbitrary external-field phase maps", (changed) =>
      removeLimit(changed, synthesis, "arbitrary temperature, pressure, composition or external fields")],
    ["SOMA's pattern classification is not an observed new physical entity", (changed) =>
      removeLimit(changed, synthesis, "SOMA pattern-level/higher-order label")],
    ["the two finite contexts cannot be declared mutual replications", (changed) =>
      removeLimit(changed, synthesisMethod, "not mutual replications")],
    ["a reported alloy grain is not a locally reproduced instance", (changed) => {
      role(changed, "shechtman-icosahedral-order").instanceAdmission = "observed";
    }]
  ]);
});
