import assert from "node:assert/strict";
import test from "node:test";
import { hashArtifactBytes } from "@onto2d/kernel";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { compileCanonicalGraph } from "../../models/causal-emergence/canonical/build.mjs";
import { validateEmRegimeContracts } from "../../models/causal-emergence/canonical/em-regime.mjs";

const model = "D-phys-charged-matter-electromagnetic-regime";
const potential = "D-phys-coulomb-effective-potential";
const scope = "D-phys-electromagnetic-material-scope";
const synthesis = "C-phys-electromagnetic-material-evidence";
const method = "M-phys-electromagnetic-material-evidence";
const outcome = "phys:electromagnetic-material-evidence";
const evidenceContexts = ["lamb1947", "rau2020-awg1", "rau2020-awg2", "rau2020-hd", "hanssen2001"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, id) => data.graph.entities.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const comparison = (data) => data.physics.comparisons.find((record) => record.id === "electromagnetic-material-cross-scale");

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) =>
      [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) =>
      [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Actual scientific phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const node of data.graph.entities.filter((node) => node.claimIds.includes(id))) {
    if (node.description === original) node.description = record.statement;
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
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /Electromagnetic regime .*changed/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("the interacting electromagnetic model and potential retain formal rather than observed roles", async () => {
  const data = await source();
  validateEmRegimeContracts(context(data));
  assert.match(claim(data, model).statement, /D_mu=partial_mu\+i\*e\*A_mu/);
  assert.match(claim(data, model).statement, /current coupling is -e\*psi_bar\*gamma\^mu\*A_mu\*psi/);
  for (const id of [model, potential, scope]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.equal(comparison(data).result, "not-tested");
  assert.ok(entity(data, "phys:charged-matter-electromagnetic-regime").claimIds.includes(model));
  assert.equal(entity(data, "phys:electromagnetic-photon-field").level, 1);
  assert.equal(entity(data, "phys:charged-matter-electromagnetic-regime").level, 2);

  await rejects([
    ["a free Maxwell field cannot supply the charged-matter interaction term", (changed) =>
      replaceStatement(changed, model, "The current coupling is -e*psi_bar*gamma^mu*A_mu*psi", "The source-free Maxwell action alone supplies every material current")],
    ["the covariant derivative and interaction sign must remain compatible", (changed) =>
      replaceStatement(changed, model, "D_mu=partial_mu+i*e*A_mu", "D_mu=partial_mu-i*e*A_mu")],
    ["the charged spinor cannot be identified with a free transverse photon state", (changed) =>
      dropLimit(changed, model, "distinct from a source-free transverse photon state")],
    ["gauge covariance does not determine measured charges or a material state", (changed) =>
      dropLimit(changed, model, "Gauge covariance does not determine")],
    ["a formal Lagrangian cannot become an observed material occurrence", (changed) => {
      claim(changed, model).status = "publication-supported";
      for (const relation of changed.graph.relations.filter((record) => record.claimIds.includes(model))) {
        relation.claimIds.push("D-phys-electromagnetic-photon-field");
      }
    }, /Formal theory became an experimental result/]
  ]);
});

test("the Coulomb pair term preserves charge sign, normalization and its nonrelativistic domain", async () => {
  const data = await source();
  assert.match(claim(data, potential).statement, /equal-sign charges.*U\(r\)=\+e\^2\/\(4\*pi\*r\)/);
  assert.match(claim(data, potential).statement, /opposite-sign charges.*U\(r\)=-e\^2\/\(4\*pi\*r\)/);
  assert.match(claim(data, potential).statement, /r>0 in rationalized hbar=c=1 units/);
  await rejects([
    ["equal charges cannot silently become attractive", (changed) =>
      replaceStatement(changed, potential, "U(r)=+e^2/(4*pi*r)", "U(r)=-e^2/(4*pi*r)")],
    ["opposite charges cannot silently become repulsive", (changed) =>
      replaceStatement(changed, potential, "U(r)=-e^2/(4*pi*r)", "U(r)=+e^2/(4*pi*r)")],
    ["historical Gaussian charge normalization is not the rationalized e", (changed) =>
      replaceStatement(changed, potential, "U(r)=+e^2/(4*pi*r)", "U(r)=+e^2/r")],
    ["a leading low-velocity term is not exact at arbitrary energy and environment", (changed) =>
      dropLimit(changed, potential, "Relativistic, radiative, magnetic")],
    ["a pair potential cannot replace identical-electron antisymmetrization", (changed) =>
      dropLimit(changed, potential, "Identical-particle exchange")],
    ["different charge symbols still require unit conversion", (changed) =>
      dropLimit(changed, potential, "Feynman uses his historical")],
    ["an internal amplitude is not a detected exchanged-photon population", (changed) =>
      replaceStatement(changed, potential, "not a detected population of exchanged photons", "a measured population of real photons sustaining material bonds")]
  ]);
});

test("recurring electromagnetic descriptions do not establish an autonomous physical stage", async () => {
  await rejects([
    ["repeated use of a framework cannot create an observed emergence stage", (data) =>
      replaceStatement(data, scope, "does not itself identify a physical emergence stage", "identifies a universally observed physical emergence stage")],
    ["persistent pattern retains its temporal-stability boundary", (data) =>
      dropLimit(data, scope, "Persistent pattern is retained only")],
    ["a Hamiltonian term alone does not solve bound states or material stability", (data) =>
      dropLimit(data, scope, "bound-state existence or lifetime")],
    ["an electromagnetic description cannot omit nuclear and environmental inputs", (data) =>
      dropLimit(data, scope, "electromagnetism alone is sufficient")],
    ["conditional electroweak coupling is not a measured history of electromagnetism", (data) =>
      replaceStatement(data, scope, "conditional field and coupling definitions", "an experimentally measured temporal creation law for all material structure")],
    ["a scoped literature result cannot acquire an observed construction instance", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === outcome).denotes =
        "An observed autonomous electromagnetic stage that necessarily forms all matter.";
    }]
  ]);
});

test("all three original parents retain their specific necessity, weight and mode-count exclusions", async () => {
  await rejects([
    ["vacuum variance does not supply a matter current or two-mode minimum", (data) =>
      dropLimit(data, scope, "Original necessary parent 1.5")],
    ["QCD asymptotic freedom is not an Abelian Maxwell-Dirac premise", (data) =>
      dropLimit(data, scope, "Original necessary parent 1.6")],
    ["an electroweak model origin does not measure a one-mode threshold", (data) =>
      dropLimit(data, scope, "Original parent 1.8")],
    ["0.30/0.30/0.40 and 2/2/1 do not become physical estimators", (data) =>
      dropLimit(data, scope, "Original weights 0.30")],
    ["unnamed Coulomb-law and dielectric placeholders cannot become primary evidence", (data) =>
      dropLimit(data, scope, "generic theoretical and empirical evidence paragraphs")]
  ]);
});

test("the cross-scale synthesis retains separate observations and every HD+ closure acquisition", async () => {
  const data = await source();
  for (const id of [synthesis, method]) {
    assert.deepEqual(new Set(claim(data, id).contextIds), new Set(evidenceContexts));
    assert.deepEqual(claim(data, id).checkIds, []);
    for (const sourceId of ["heisse2019", "korobov2017"]) {
      assert.ok(claim(data, id).citations.some((citation) => citation.sourceId === sourceId
        && citation.role === (id === method ? "method" : "supports")),
      "The molecular closure retains its adopted proton and theoretical binding-energy sources");
    }
  }
  const closureInputs = claim(data, "C-phys-rau-hd-closure").contextIds;
  assert.deepEqual(new Set(closureInputs), new Set(["rau2020-awg1", "rau2020-awg2", "rau2020-hd"]));
  for (const id of closureInputs) assert.ok(claim(data, synthesis).contextIds.includes(id),
    "Including molecular closure retains its deuteron and molecular acquisitions");
  for (const from of ["phys:lamb-separation", "phys:rau-hd-mass", "phys:rau-hd-closure"]) {
    const dependency = data.graph.relations.find((record) => record.source === from && record.target === outcome);
    assert.equal(dependency.kind, "descriptive");
    assert.equal(dependency.role, "interpretation-dependency");
    assert.deepEqual(new Set(dependency.contextIds), new Set(evidenceContexts));
  }
  await rejects([
    ...["rau2020-awg1", "rau2020-awg2", "rau2020-hd", "hanssen2001"].map((removed) => [
      `the synthesis and dependencies cannot jointly omit ${removed}`, (changed) => {
        for (const id of [synthesis, method]) claim(changed, id).contextIds =
          claim(changed, id).contextIds.filter((id) => id !== removed);
        for (const relation of changed.graph.relations.filter((record) => record.target === outcome)) {
          relation.contextIds = relation.contextIds.filter((id) => id !== removed);
        }
      }, /preparation|Electromagnetic regime/i
    ]),
    ["the HD+ mass and closure cannot become independent confirmations", (changed) =>
      dropLimit(changed, synthesis, "share nuclear/electronic mass references")],
    ...["heisse2019", "korobov2017"].map((removed) => [
      `molecular closure cannot lose its ${removed} reference input`, (changed) => {
        for (const id of [synthesis, method]) claim(changed, id).citations =
          claim(changed, id).citations.filter((citation) => citation.sourceId !== removed);
      }, /correction or theory input|Electromagnetic regime/
    ]),
    ["closure cannot cite only the molecular acquisition while hiding its deuteron source", (changed) => {
      for (const id of [synthesis, method]) claim(changed, id).citations = claim(changed, id).citations
        .filter((citation) => !citation.locator.includes("two excitation generators"));
    }],
    ["approximate hydrogen level separation is not a uniquely isolated radiative contribution", (changed) =>
      dropLimit(changed, synthesis, "Lamb level separation is approximate")],
    ["heterogeneous sources cannot become independent repetitions of one process", (changed) =>
      dropLimit(changed, method, "different source-specific preparations")],
    ["the literature comparison cannot acquire a successful universal-law result", (changed) => {
      comparison(changed).result = "conditional-support";
    }]
  ]);
});

test("Hanssen stays one optical study whose context resolves in the compiled literature node", async () => {
  const data = await source();
  assert.equal(data.optics.studies.filter((record) => record.id === "hanssen2001").length, 1);
  assert.equal(data.physics.studies.filter((record) => record.sourceId === "hanssen2001").length, 0);
  assert.ok(!data.graph.relations.some((record) =>
    record.source.startsWith("phys:") && record.target.startsWith("opt:")));
  const opticalReferences = data.graph.relations.filter((record) =>
    record.source.startsWith("opt:") && record.target.startsWith("phys:"));
  assert.deepEqual(new Set(opticalReferences.map((record) => record.target)), new Set([
    "phys:surface-scattering-source-scope", "phys:optical-propagation-source-scope"
  ]));
  assert.ok(opticalReferences.every((record) =>
    record.kind === "descriptive" && record.role === "interpretation-dependency"));

  // Compile in memory only: no release build, scientific replay or file write.
  const pack = compileCanonicalGraph(data, {}, [{ path: "em-regime-context-fixture.json",
    hash: hashArtifactBytes(new TextEncoder().encode(JSON.stringify(data.graph))) }]);
  const compiled = pack.files["model/nodes.json"].find((record) => record.id === outcome);
  const contexts = compiled.rationale.find((record) => record.id === synthesis).contexts;
  assert.deepEqual(new Set(contexts.map((record) => record.id)), new Set(evidenceContexts));
  assert.deepEqual(contexts.find((record) => record.id === "hanssen2001"),
    data.optics.studies.find((record) => record.id === "hanssen2001"));

  await rejects([
    ["a reused FTIR context cannot be cloned as another physical acquisition", (changed) => {
      const cloned = structuredClone(changed.optics.studies.find((record) => record.id === "hanssen2001"));
      cloned.id = "hanssen2001-independent-em-acquisition";
      cloned.system = cloned.organism;
      delete cloned.organism;
      delete cloned.pmid;
      changed.physics.studies.push(cloned);
    }, /hanssen2001-independent-em-acquisition/],
    ["a cited optical result cannot gain an unreviewed phys-to-opt construction edge", (changed) => {
      changed.graph.relations.push({ id: "physics:unreviewed-em-to-optical-material",
        source: "phys:charged-matter-electromagnetic-regime", target: "opt:material-transmission",
        kind: "descriptive", role: "definition-dependency", assertion: "The model alone generates the measured optical specimen.",
        claimIds: [model] });
    }, /Unreviewed cross-domain physical construction/],
    ["derived absorptance cannot lose its sphere-geometry and balance boundary", (changed) =>
      dropLimit(changed, synthesis, "derives absorptance by balance")],
    ["a material spectrum cannot certify a common response calibration or carrier minimum", (changed) =>
      dropLimit(changed, synthesis, "No new acquisition, numerical replay")]
  ]);
});

test("only reviewed source passages and original measurement ownership support the regime", async () => {
  const data = await source();
  const support = claim(data, model).citations.filter((citation) => citation.role === "supports");
  assert.ok(support.some((citation) => citation.sourceId === "tong-qft-free-maxwell" && citation.locator.includes("6.561")));
  for (const id of [model, potential, scope, synthesis, method]) {
    for (const citation of claim(data, id).citations) {
      assert.ok(publication(data, citation.sourceId).review.locators.includes(citation.locator));
    }
  }
  await rejects([
    ["a reviewed gauge-covariance passage cannot silently extend to an unread theorem", (changed) => {
      claim(changed, model).citations.find((citation) => citation.locator.includes("6.561")).locator =
        "Complete nonperturbative interacting-QED existence and material-stability proof";
    }, /Unreviewed physics passage/],
    ["formal instructional material cannot become a primary photon experiment", (changed) => {
      publication(changed, "tong-qft-free-maxwell").review.extent = "full-primary-photon-experiment";
    }, /Photon formal|Electromagnetic regime|reading|source/i],
    ["Feynman's perturbative kernel cannot be promoted to an all-orders material proof", (changed) =>
      dropLimit(changed, model, "nonperturbative interacting QED")],
    ["the historical Weinberg quantum-extension caveat remains a limit", (changed) => {
      claim(changed, scope).citations.find((citation) => citation.sourceId === "weinberg1967-leptons"
        && citation.role === "limits").role = "supports";
    }]
  ]);
});
