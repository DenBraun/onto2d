import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateAtomicStructureContracts } from "../../models/causal-emergence/canonical/atomic-structure.mjs";

const binding = "D-phys-static-nucleus-hydrogen-binding";
const distinction = "D-phys-atomic-binding-formation-distinction";
const preparation = "M-phys-seager1999-hydrogen-formation-context";
const neutralization = "C-phys-seager1999-hydrogen-neutralization";
const synthesis = "C-phys-atomic-structure-source-scope";
const method = "M-phys-atomic-structure-source-scope";
const formationStudy = "seager1999-hydrogen-formation";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const study = (data, id = formationStudy) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, id) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${id}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) =>
      [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) =>
      [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

// Synchronize duplicate presentation/study text so a mutation removes the
// scientific boundary consistently instead of only introducing a stale copy.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const node of data.graph.entities.filter((node) => node.claimIds.includes(id))) {
    if (node.description === original) node.description = record.statement;
  }
  for (const item of data.physics.studies) {
    for (const field of ["preparation", "finding"]) {
      if (item[field] === original) item[field] = record.statement;
    }
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one actual boundary must match: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  for (const node of data.graph.entities.filter((node) => node.claimIds.includes(id))) {
    node.openObligations = node.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) {
    item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /Atomic structure .*changed/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("atomic binding, measured transitions and a reported formation model retain distinct roles", async () => {
  const data = await source();
  validateAtomicStructureContracts(context(data));
  for (const id of [binding, distinction]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(new Set(claim(data, synthesis).contextIds), new Set(["lamb1947", formationStudy]));
  assert.equal(entity(data, "atomic-structure-source-scope").kind, "scoped-process");
  assert.equal(role(data, "atomic-structure-source-scope").role, "scoped-phenomenon");
  assert.equal(study(data).studyType, "computational-analysis");
  assert.equal(role(data, "seager1999-hydrogen-formation-context").role, "model-context");
  assert.deepEqual(claim(data, neutralization).contextIds, [formationStudy]);
  assert.equal(claim(data, neutralization).status, "publication-supported");
  for (const suffix of ["static-nucleus-hydrogen-binding", "atomic-binding-formation-distinction",
    "seager1999-hydrogen-formation-context", "seager1999-hydrogen-neutralization", "atomic-structure-source-scope"]) {
    assert.equal(role(data, suffix).instanceAdmission, "none");
    for (const id of entity(data, suffix).claimIds) assert.deepEqual(claim(data, id).checkIds, [],
      "Published eigenvalues and ionization histories are not locally replayed results");
  }
});

test("the static Z=1 spectrum preserves mass, charge, units and its supplied nuclear approximation", async () => {
  const data = await source();
  assert.match(claim(data, binding).statement, /static point nucleus with charge \+e/);
  assert.match(claim(data, binding).statement, /alpha=e\^2\/\(4\*pi\).*H=-nabla\^2\/\(2\*m_e\)-alpha\/r/);
  assert.match(claim(data, binding).statement, /E_n=-m_e\*alpha\^2\/\(2\*n\^2\)/);
  assert.match(claim(data, binding).statement, /positive binding energy -E_n/);
  assert.equal(edge(data, "coulomb-effective-potential", "static-nucleus-hydrogen-binding").kind, "descriptive");
  await rejects([
    ["a fixed point nucleus cannot silently acquire exact finite-mass recoil", (changed) =>
      replaceStatement(changed, binding, "E_n=-m_e*alpha^2/(2*n^2)", "E_n=-mu*alpha^2/(2*n^2) including all recoil")],
    ["rationalized alpha cannot lose its 4 pi conversion", (changed) =>
      replaceStatement(changed, binding, "alpha=e^2/(4*pi)", "alpha=e^2")],
    ["an attractive electron-nucleus potential cannot become repulsive", (changed) =>
      replaceStatement(changed, binding, "H=-nabla^2/(2*m_e)-alpha/r", "H=-nabla^2/(2*m_e)+alpha/r")],
    ["the binding energy sign is relative to the separated-particle threshold", (changed) =>
      replaceStatement(changed, binding, "positive binding energy -E_n", "negative binding energy E_n")],
    ["the historical Gaussian formula is an explicit convention rewrite", (changed) =>
      dropLimit(changed, binding, "source uses Gaussian units")],
    ["the one-body model cannot hide nuclear size, spin or QED omissions", (changed) =>
      dropLimit(changed, binding, "Finite nuclear mass/recoil")]
  ]);
});

test("bound-state tails and one-electron states cannot become hard objects or all-element shell laws", async () => {
  await rejects([
    ["an electronic eigenfunction has a tail rather than an artificial hard surface", (data) =>
      replaceStatement(data, binding, "exponentially decreasing radial tails", "compact support ending at one fixed atomic radius")],
    ["an orbital eigenfunction cannot become a measured classical trajectory", (data) =>
      replaceStatement(data, binding, "not classical electron orbits or compact hard-edged objects", "classical electron trajectories inside a sharp atomic boundary")],
    ["Z=1 with one electron does not derive many-electron filling or criticality", (data) =>
      dropLimit(data, binding, "one electron and Z=1")],
    ["a supplied nuclear charge is not a derivation of every element identity", (data) =>
      replaceStatement(data, synthesis, "does not establish all many-electron shell structures, every element identity", "establishes every many-electron shell structure and element identity")],
    ["the admitted spectrum cannot imply all-environment permanence", (data) =>
      dropLimit(data, distinction, "absolute permanence")]
  ]);
});

test("Lamb spectroscopy and the shared Bethe interpretation do not measure atomic capture", async () => {
  const data = await source();
  assert.deepEqual(claim(data, "C-phys-lamb-separation").contextIds, ["lamb1947"]);
  assert.deepEqual(claim(data, "C-phys-lamb-radiative-interpretation").contextIds, ["lamb1947"]);
  assert.ok(!data.physics.studies.some((record) => record.sourceId === "bethe1947"),
    "The theoretical correction is not another spectroscopy acquisition");
  for (const suffix of ["lamb-separation", "lamb-radiative-interpretation"]) {
    const relation = edge(data, suffix, "atomic-structure-source-scope");
    assert.equal(relation.kind, "descriptive");
    assert.equal(relation.role, "interpretation-dependency");
    assert.deepEqual(relation.claimIds, [method]);
  }
  await rejects([
    ["a prepared metastable beam cannot become a free-particle capture experiment", (changed) =>
      dropLimit(changed, distinction, "thermally dissociate molecular hydrogen")],
    ["the approximate Lamb/Bethe comparison does not validate an uncorrected Coulomb degeneracy", (changed) =>
      dropLimit(changed, distinction, "approximate 1000 MHz displacement")],
    ["the measured separation and conditional correction cannot become independent acquisitions", (changed) =>
      replaceStatement(changed, method, "reuses the same spectroscopy", "independently replicates a second spectroscopy acquisition")],
    ["a stationary spectrum alone does not specify a population-changing rate", (changed) =>
      replaceStatement(changed, distinction, "Formation is a further population-changing process", "Formation is completely specified by the stationary energy eigenvalues")],
    ["the source-scope synthesis cannot lose the laboratory preparation", (changed) => {
      claim(changed, synthesis).contextIds = [formationStudy];
    }, /Physical finding changed preparation|Atomic structure/],
    ["Lamb's measurement cannot borrow a cosmological model context", (changed) => {
      edge(changed, "lamb-separation", "atomic-structure-source-scope").contextIds = [formationStudy];
    }, /Atomic structure|Expected values|preparation/i]
  ]);
});

test("Seager retains historical background inputs, total-hydrogen normalization and helium electrons", async () => {
  const data = await source();
  assert.match(claim(data, preparation).statement,
    /Omega_tot=1, Omega_B=0\.05, H_0=50 km\/s\/Mpc, Y_P=0\.24 and T_0=2\.728 K/);
  assert.match(claim(data, preparation).statement, /x_p=n_p\/n_H.*x_e=n_e\/n_H/);
  assert.ok(claim(data, preparation).limitations.some((limit) => limit.includes("total hydrogen-nucleus number density")));
  await rejects([
    ["the 1999 helium-composition input cannot be silently replaced by the 2018 BBN prediction", (changed) =>
      replaceStatement(changed, preparation, "Y_P=0.24", "Y_P=0.24709")],
    ["the historical Hubble input cannot become a later cosmological fit", (changed) =>
      replaceStatement(changed, preparation, "H_0=50 km/s/Mpc", "H_0=67.4 km/s/Mpc")],
    ["x_e cannot be normalized by neutral hydrogen alone", (changed) =>
      replaceStatement(changed, preparation, "x_e=n_e/n_H", "x_e=n_e/n_HI")],
    ["helium electrons prevent identifying x_e with the hydrogen proton fraction everywhere", (changed) =>
      dropLimit(changed, preparation, "x_e also includes helium electrons")],
    ["historical rate inputs do not become a reproduced modern ODE calculation", (changed) =>
      dropLimit(changed, preparation, "full companion-Paper-I calculation")],
    ["the reduced parametrization cannot lose its chemistry and cosmology limits", (changed) =>
      dropLimit(changed, preparation, "z<=300 chemistry")],
    ["capture alone cannot bypass radiative ground-state bottlenecks", (changed) =>
      replaceStatement(changed, preparation, "electron capture alone does not instantaneously make a persistent ground-state population",
        "electron capture instantaneously makes a permanent ground-state atom")]
  ]);
});

test("the ten-percent residual-x_e comparison is one historical modelling program, not measured formation", async () => {
  const data = await source();
  assert.match(claim(data, neutralization).statement, /approximately 10 percent lower residual x_e/);
  assert.equal(study(data).sourceId, "seager1999-recombination");
  assert.equal(edge(data, "seager1999-hydrogen-formation-context", "seager1999-hydrogen-neutralization").role,
    "computation-context");
  await rejects([
    ["a multilevel calculation cannot acquire a primary-observation role", (changed) => {
      study(changed).studyType = "primary-observation";
    }, /Atomic structure|Role contradicts source kind|study/i],
    ["the 10 percent model difference cannot become an observational error bar", (changed) =>
      dropLimit(changed, neutralization, "not an observational error bar")],
    ["a fitted reduced equation is not an independent replication of its parent model", (changed) =>
      dropLimit(changed, neutralization, "same modelling program")],
    ["source-reported neutralization cannot become measured atom-production events", (changed) =>
      replaceStatement(changed, neutralization, "not measured atom-production events", "directly measured atom-production events")],
    ["a supplied nuclear inventory cannot become newly derived nuclear stability", (changed) =>
      dropLimit(changed, neutralization, "initial nuclear inventory and rates are supplied")],
    ["the model-context role cannot acquire a physical occurrence description", (changed) => {
      role(changed, "seager1999-hydrogen-formation-context").denotes =
        "A newly observed cosmological capture experiment with directly measured atom-production events.";
    }]
  ]);
});

test("catalogue ancestry, equal parent weights and carrier minima remain excluded scientific defaults", async () => {
  await rejects([
    ["the static atom need not inherit the selected BBN calculation as its actual history", (data) =>
      dropLimit(data, synthesis, "Original parent 2.0 is primordial")],
    ["an effective Coulomb input is not an equal-strength causal ancestry estimate", (data) =>
      dropLimit(data, synthesis, "original weights 0.5/0.5")],
    ["one nucleus and one electron are not one BBN body and two resonant modes", (data) =>
      dropLimit(data, synthesis, "physical-body N_min=N_crit=1")],
    ["generic Schrodinger/Dirac and spectroscopy paragraphs cannot prove all-element taxonomy", (data) =>
      dropLimit(data, synthesis, "unnamed Schrodinger/Dirac")],
    ["the synthesis cannot claim a shared formation experiment or many-electron stability theorem", (data) => {
      claim(data, method).limitations = [
        "The combined evidence independently measures one shared formation experiment and proves many-electron stability."
      ];
    }]
  ]);
});

test("the expanded Seager reading retains its original boundary source and admits no unread formal proof", async () => {
  const data = await source();
  assert.equal(data.graph.sources.filter((record) => record.id === "seager1999-recombination").length, 1);
  assert.equal(data.physics.studies.filter((record) => record.sourceId === "seager1999-recombination").length, 1);
  const recombinationSource = publication(data, "seager1999-recombination");
  const oldBoundaryCitation = claim(data, "D-phys-bbn-recombination-boundary").citations
    .find((citation) => citation.sourceId === "seager1999-recombination");
  assert.ok(recombinationSource.review.locators.includes(oldBoundaryCitation.locator));
  assert.ok(claim(data, preparation).citations.some((citation) => recombinationSource.review.locators.includes(citation.locator)));
  assert.equal(publication(data, "schrodinger1926-hydrogen").review.extent, "selected-primary-formal-passages");
  await rejects([
    ["the historical article cannot become a complete modern mathematical proof", (changed) => {
      publication(changed, "schrodinger1926-hydrogen").review.extent = "complete-mathematical-proof-and-modern-QED-reproduction";
    }],
    ["an unread Dirac/many-electron result cannot silently support the selected one-electron case", (changed) => {
      claim(changed, binding).citations[0].locator = "Complete relativistic many-electron spectrum and all-element shell proof";
    }, /Unreviewed physics passage/],
    ["new Seager reading cannot discard the already used BBN boundary passage", (changed) => {
      publication(changed, "seager1999-recombination").review.locators = recombinationSource.review.locators
        .filter((locator) => locator !== oldBoundaryCitation.locator);
    }, /Unreviewed physics passage/],
    ["the recombination context cannot borrow primary experimental ownership from Lamb", (changed) => {
      study(changed).sourceId = "lamb1947";
    }, /Atomic structure|source|publication/i],
    ["source-card ancestry remains provenance rather than scientific support", (changed) => {
      claim(changed, synthesis).citations.find((citation) => citation.sourceId === "legacy-2").role = "supports";
    }, /Atomic structure|primary particle evidence/]
  ]);
});
