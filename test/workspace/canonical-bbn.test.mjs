import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import { validateBbnContracts } from "../../models/causal-emergence/canonical/bbn.mjs";
import { LEVEL_TWO_NODE_IDS } from "../../models/causal-emergence/canonical/level-two.mjs";

let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, suffix) => data.graph.entities.find((record) => record.id === `phys:${suffix}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, suffix) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${suffix}`);
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

// Keep duplicate display/study prose consistent so the mutation changes the
// scientific boundary, rather than merely breaking a display-copy invariant.
function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Actual source phrase required: ${before}`);
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
  const matching = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matching.length, 1, `Exactly one actual boundary must match: ${fragment}`);
  const removed = matching[0];
  record.limitations = record.limitations.filter((limit) => limit !== removed);
  for (const node of data.graph.entities.filter((node) => node.claimIds.includes(id))) {
    node.openObligations = node.openObligations.filter((limit) => limit !== removed);
  }
  for (const item of data.physics.studies) {
    item.limitations = item.limitations.filter((limit) => limit !== removed);
  }
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate, expected = /BBN .*changed/] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), expected, name);
  }
}

test("BBN retains a formal nuclear network, historical calculation and later astrophysical inferences", async () => {
  const data = await source();
  validateBbnContracts(context(data));
  assert.equal(claim(data, "D-phys-primordial-nuclear-network").status, "definition");
  assert.equal(claim(data, "D-phys-primordial-nuclear-network").contextIds, undefined);
  assert.equal(study(data, "pitrou2018-network").studyType, "computational-analysis");
  assert.equal(role(data, "bbn2018-network-context").role, "model-context");
  assert.equal(study(data, "cooke2018-absorption").studyType, "primary-observation");
  assert.equal(study(data, "cooke2018-columns").studyType, "computational-analysis");
  assert.equal(study(data, "cooke2018-pooling").studyType, "experimental-reanalysis");
  assert.equal(study(data, "aver2015-helium").studyType, "experimental-reanalysis");
  assert.equal(claim(data, "C-phys-bbn2018-abundance-compatibility").status, "literature-synthesis");
  for (const suffix of ["primordial-nuclear-network", "bbn2018-network-context", "cooke2018-absorption-readout",
    "cooke2018-deuterium-column", "cooke2018-primordial-deuterium", "aver2015-primordial-helium",
    "bbn2018-abundance-compatibility"]) {
    const node = entity(data, suffix);
    assert.equal(role(data, suffix).instanceAdmission, "none");
    for (const id of node.claimIds) assert.deepEqual(claim(data, id).checkIds, [],
      "Reading a prediction or reported abundance does not reproduce its numerical pipeline");
  }
});

test("a conditional nuclear network cannot become direct observation or neutral-atom formation", async () => {
  await rejects([
    ["formal rates are not a directly measured early-universe occurrence", (data) => {
      claim(data, "D-phys-primordial-nuclear-network").status = "publication-supported";
    }, /Formal theory became an experimental result/],
    ["a PRIMAT calculation cannot become a telescope acquisition", (data) => {
      study(data, "pitrou2018-network").studyType = "primary-observation";
    }, /BBN|computational|study type/i],
    ["dilution and destruction cannot be removed from the reaction balance", (data) =>
      replaceStatement(data, "D-phys-primordial-nuclear-network", "dn_i/dt+3*H*n_i", "dn_i/dt")],
    ["mass-seven bookkeeping cannot omit later beryllium decay", (data) =>
      replaceStatement(data, "D-phys-primordial-nuclear-network", "including beryllium-7, which later feeds lithium-7", "entirely as directly formed stable lithium-7")],
    ["nuclear synthesis does not bind the electrons of neutral atoms", (data) =>
      replaceStatement(data, "D-phys-bbn-recombination-boundary", "changes light-nucleus composition", "forms complete neutral atoms by binding orbital electrons")],
    ["the later recombination epoch does not prohibit every earlier bound electron", (data) =>
      dropLimit(data, "D-phys-bbn-recombination-boundary", "any earlier bound-electron population")],
    ["per-baryon number abundance cannot silently become helium mass fraction", (data) =>
      dropLimit(data, "D-phys-primordial-nuclear-network", "Y_i is a number abundance")],
    ["the model-context role cannot admit an observed construction instance", (data) => {
      role(data, "bbn2018-network-context").instanceAdmission = "observed";
    }, /BBN|schema/i]
  ]);
});

test("Cooke's spectra, fitted column ratio and pooled abundance preserve their shared data chain", async () => {
  const data = await source();
  const stages = ["cooke2018-absorption-readout", "cooke2018-deuterium-column", "cooke2018-primordial-deuterium"];
  assert.deepEqual(stages.map((suffix) => claim(data, `C-phys-${suffix}`).contextIds),
    [["cooke2018-absorption"], ["cooke2018-columns"], ["cooke2018-pooling"]]);
  assert.deepEqual(new Set(["cooke2018-absorption", "cooke2018-columns", "cooke2018-pooling"]
    .map((id) => study(data, id).sourceId)), new Set(["cooke2018-deuterium"]));
  for (const [from, to] of [[stages[0], stages[1]], [stages[1], stages[2]]]) {
    assert.equal(edge(data, from, to).kind, "descriptive");
    assert.equal(edge(data, from, to).role, "interpretation-dependency");
  }
  assert.match(claim(data, `C-phys-${stages[1]}`).statement, /-4\.622 \+\/- 0\.015/);
  assert.match(claim(data, `C-phys-${stages[2]}`).statement, /2\.527 \+\/- 0\.030/);

  await rejects([
    ["measured absorption profiles cannot become a direct primordial abundance", (changed) =>
      replaceStatement(changed, "C-phys-cooke2018-absorption-readout", "do not directly report a primordial abundance or observe BBN", "directly measure primordial nuclear formation")],
    ["the column fit cannot borrow the independent-acquisition role", (changed) => {
      study(changed, "cooke2018-columns").studyType = "primary-observation";
    }, /BBN|computational|study type/i],
    ["the pooled value cannot replace the selected absorber ratio", (changed) =>
      replaceStatement(changed, "C-phys-cooke2018-deuterium-column", "-4.622 +/- 0.015", "-4.5974 +/- 0.0052")],
    ["pooling cannot omit the single-system fitted input", (changed) => {
      const dependency = edge(changed, stages[1], stages[2]);
      changed.graph.relations = changed.graph.relations.filter((record) => record !== dependency);
    }, /BBN|Missing|undefined/],
    ["the pooling method cannot substitute acquisition for its inference context", (changed) => {
      claim(changed, "C-phys-cooke2018-primordial-deuterium").contextIds = ["cooke2018-absorption"];
    }, /preparation|BBN/],
    ["the selected absorber must remain part of the seven-system estimate", (changed) =>
      dropLimit(changed, "M-phys-cooke2018-pooling-context", "includes the newly fitted absorber")],
    ["linear and logarithmic reports are one estimate", (changed) =>
      replaceStatement(changed, "C-phys-cooke2018-primordial-deuterium", "one pooled estimate, not independent measurements", "two statistically independent abundance measurements")],
    ["zero best-fit intrinsic scatter does not prove absent systematics", (changed) =>
      dropLimit(changed, "M-phys-cooke2018-pooling-context", "does not prove zero astrophysical")]
  ]);
});

test("Cooke retains neutral-column assumptions, omitted correlations and conflicting acquisition metadata", async () => {
  await rejects([
    ["neutral and elemental ratios cannot lose their ionization condition", (data) =>
      dropLimit(data, "M-phys-cooke2018-column-context", "three different inference stages")],
    ["the profile fit cannot acquire a reconstructed pixel covariance", (data) =>
      dropLimit(data, "M-phys-cooke2018-column-context", "Neighboring-pixel correlations are omitted")],
    ["continuum/component sensitivity must not become a complete error budget", (data) =>
      dropLimit(data, "M-phys-cooke2018-column-context", "2.7 percent")],
    ["the March date and exposure conflict cannot be silently resolved", (data) =>
      dropLimit(data, "M-phys-cooke2018-absorption-context", "30 March 2016 and 13800 s")],
    ["instrumental line width is not an abundance error", (data) =>
      dropLimit(data, "M-phys-cooke2018-absorption-context", "instrumental FWHM")],
    ["a D/H summary cannot independently measure baryon density", (data) =>
      dropLimit(data, "M-phys-cooke2018-pooling-context", "d(p,gamma)3He rate")]
  ]);
});

test("helium regression distinguishes sixteen observations from fifteen independent objects", async () => {
  const data = await source();
  const preparation = claim(data, "M-phys-aver2015-helium-context");
  assert.ok(preparation.limitations.some((limit) => /Sixteen qualifying observations.*15 distinct.*SBS 0335-052E/.test(limit)));
  assert.match(claim(data, "C-phys-aver2015-primordial-helium").statement, /15 distinct.*zero-metallicity intercept Y_P=0\.2449 \+\/- 0\.0040/);
  assert.match(claim(data, "C-phys-aver2015-primordial-helium").statement, /helium mass fraction/);
  await rejects([
    ["duplicate object observations cannot increase the independent-object count", (changed) =>
      replaceStatement(changed, "C-phys-aver2015-primordial-helium", "15 distinct", "16 independent")],
    ["the source's duplicate-object explanation must survive", (changed) =>
      dropLimit(changed, "M-phys-aver2015-helium-context", "SBS 0335-052E")],
    ["an emission-line reanalysis cannot become a fresh acquisition", (changed) => {
      study(changed, "aver2015-helium").studyType = "primary-observation";
    }, /BBN|study type/i],
    ["a zero-metallicity intercept cannot become a helium number ratio", (changed) =>
      replaceStatement(changed, "C-phys-aver2015-primordial-helium", "Y_P is a helium mass fraction", "Y_P is a directly observed helium number ratio")],
    ["infrared/optical scaling cannot be omitted from response inference", (changed) =>
      replaceStatement(changed, "M-phys-aver2015-helium-context", "scaled to the optical data using the observed-to-theoretical Paschen-gamma ratio", "already identical to the optical data without response scaling")],
    ["the reported error does not close emissivity and selection systematics", (changed) =>
      dropLimit(changed, "C-phys-aver2015-primordial-helium", "Infrared scaling, emissivities")]
  ]);
});

test("Pitrou retains historical inputs, reused abundance evidence, lithium tension and conflicting tables", async () => {
  const data = await source();
  const synthesis = claim(data, "C-phys-bbn2018-abundance-compatibility");
  assert.deepEqual(synthesis.contextIds, ["pitrou2018-network", "cooke2018-pooling", "aver2015-helium"]);
  for (const suffix of ["bbn2018-network-context", "cooke2018-primordial-deuterium", "aver2015-primordial-helium"]) {
    assert.equal(edge(data, suffix, "bbn2018-abundance-compatibility").kind, "descriptive");
  }
  assert.match(synthesis.statement, /Table VIII reports Y_P=0\.24709 \+\/- 0\.00017/);
  assert.match(synthesis.statement, /Li\/H=\(5\.623 \+\/- 0\.247\)\*10\^-10/);
  await rejects([
    ["a historical model cannot silently adopt Planck 2018", (changed) =>
      replaceStatement(changed, "M-phys-bbn2018-network-context", "Ade 2016/Planck 2015 analysis", "Planck 2018 posterior")],
    ["neutron lifetime is an adopted model input, not a new fitted result", (changed) =>
      replaceStatement(changed, "M-phys-bbn2018-network-context", "tau_n=879.5 +/- 0.8 s", "tau_n=878.0 +/- 0.1 s")],
    ["Cooke and Aver adoption cannot become another acquisition", (changed) =>
      dropLimit(changed, "C-phys-bbn2018-abundance-compatibility", "Pitrou reuses the Cooke and Aver")],
    ["lithium mismatch cannot become universal light-element concordance", (changed) =>
      replaceStatement(changed, "C-phys-bbn2018-abundance-compatibility", "the lithium discrepancy prevents blanket concordance", "lithium independently establishes complete concordance")],
    ["the adopted stellar comparator cannot become separately reviewed lithium data", (changed) =>
      dropLimit(changed, "C-phys-bbn2018-abundance-compatibility", "whose primary acquisition is not separately reviewed")],
    ["helium prose/table disagreement and mass-seven scaling remain explicit", (changed) =>
      dropLimit(changed, "C-phys-bbn2018-abundance-compatibility", "helium discussion also prints")],
    ["the helium prose number cannot silently replace selected Table VIII", (changed) =>
      replaceStatement(changed, "C-phys-bbn2018-abundance-compatibility", "Y_P=0.24709 +/- 0.00017", "Y_P=0.24705 +/- 0.00019")],
    ["table marginal uncertainties do not supply a joint likelihood", (changed) =>
      dropLimit(changed, "C-phys-bbn2018-abundance-compatibility", "joint covariance")],
    ["a network helium-3 product is not an independent pristine observation", (changed) =>
      dropLimit(changed, "C-phys-bbn2018-abundance-compatibility", "independent primordial helium-3 measurement")]
  ]);
});

test("original parent weights and carrier minima cannot regain scientific authority", async () => {
  await rejects([
    ["confinement and electroweak labels do not derive a reaction history", (data) =>
      dropLimit(data, "D-phys-bbn-source-scope", "Original parents 1.7")],
    ["equal weights and two-carrier minima are not physical estimates", (data) =>
      dropLimit(data, "D-phys-bbn-source-scope", "weights 0.5/0.5")],
    ["generic evidence placeholders cannot become primary publications", (data) =>
      dropLimit(data, "D-phys-bbn-source-scope", "placeholders identify no publication")],
    ["a population-level isotope comparison is not a universal matter hierarchy", (data) =>
      dropLimit(data, "D-phys-bbn-source-scope", "Helium-3 is a network product")]
  ]);
});

test("selected author versions and reviewed passages cannot expand into unread source support", async () => {
  const data = await source();
  assert.match(publication(data, "cooke2018-deuterium").url, /1710\.11129v3$/);
  assert.match(publication(data, "aver2015-helium").url, /1503\.08146v1$/);
  assert.ok(claim(data, "D-phys-bbn-recombination-boundary").citations.some((citation) =>
    citation.sourceId === "seager1999-recombination"));
  await rejects([
    ["Pitrou's later archive version cannot replace the selected author manuscript", (changed) => {
      publication(changed, "pitrou2018-bbn").url = "https://arxiv.org/abs/1801.08023v3";
    }],
    ["selected passages cannot become a claimed complete PRIMAT reproduction", (changed) => {
      publication(changed, "pitrou2018-bbn").review.extent = "full-primary-article-and-reproduced-solver";
    }],
    ["an unread recombination result cannot acquire supporting citation status", (changed) => {
      claim(changed, "D-phys-bbn-recombination-boundary").citations
        .find((citation) => citation.sourceId === "seager1999-recombination").locator = "Complete precision recombination likelihood";
    }, /Unreviewed physics passage/],
    ["a deuterium fit cannot borrow a helium publication", (changed) => {
      study(changed, "cooke2018-columns").sourceId = "aver2015-helium";
    }, /BBN|source|publication/i],
    ["the observer-stage reading extent cannot claim a complete archive replay", (changed) => {
      study(changed, "cooke2018-absorption").readExtent = "complete-raw-frame-independent-reproduction";
    }, /BBN|reading|extent/i]
  ]);
});

test("only explicitly reviewed physical records may use the Level 2 display group", async () => {
  const data = await source();
  assert.equal(entity(data, "primordial-nuclear-network").level, 2);
  assert.ok(LEVEL_TWO_NODE_IDS.has("phys:primordial-nuclear-network"));
  assert.equal(entity(data, "electromagnetic-photon-field").level, 1);
  assert.ok(!LEVEL_TWO_NODE_IDS.has("phys:electromagnetic-photon-field"));
  await rejects([
    ["an existing physical definition cannot move to Level 2 without review", (changed) => {
      entity(changed, "electromagnetic-photon-field").level = 2;
    }, /Physical display group changed/],
    ["an admitted BBN definition cannot silently move back to Level 1", (changed) => {
      entity(changed, "primordial-nuclear-network").level = 1;
    }, /Physical display group changed/],
    ["a new Level 2 physical record cannot evade the admission inventory", (changed) => {
      changed.graph.entities.push({ ...structuredClone(entity(changed, "primordial-nuclear-network")),
        id: "phys:unreviewed-bbn-construction" });
    }, /Physical record lacks a reviewed admission contract/]
  ]);
});

test("unreviewed physical edges and compiled construction rules cannot bypass BBN's descriptive scope", async () => {
  await rejects([
    ["a fresh edge between admitted definitions still needs its own admission", (data) => {
      data.graph.relations.push({ id: "physics:unreviewed-bbn-formation",
        source: "phys:primordial-nuclear-network", target: "phys:bbn-recombination-boundary",
        assertion: "The nuclear network is asserted to supply neutral-atom formation without a reviewed boundary model.",
        kind: "descriptive", role: "definition-dependency", claimIds: ["D-phys-bbn-recombination-boundary"] });
    }, /Unreviewed physical definition dependency/],
    ["a cross-domain edge is not authorized by an innocent-looking identifier", (data) => {
      data.graph.relations.push({ id: "material:unreviewed-bbn-formation",
        source: "l0:distinction", target: "phys:bbn-source-scope",
        assertion: "The abstract distinction is asserted to supply the measured BBN abundance without an admitted construction.",
        kind: "descriptive", role: "definition-dependency", claimIds: ["D-phys-bbn-source-scope"] });
    }, /Unreviewed cross-domain physical construction/],
    ["an admitted analysis dependency cannot become physical causation", (data) => {
      const relation = edge(data, "cooke2018-deuterium-column", "cooke2018-primordial-deuterium");
      relation.kind = "functional-support";
      relation.claimIds = ["C-phys-cooke2018-primordial-deuterium"];
    }, /Measurement\/inference dependency became physical causation/],
    ...["id", "input", "output"].map((position) => [
      `a rule with a physical ${position} cannot manufacture an unreviewed compiled construction`, (data) => {
        const rule = structuredClone(data.graph.rules[0]);
        rule.id = position === "id" ? "phys:unreviewed-bbn-rule" : `R-unreviewed-bbn-${position}`;
        if (position === "input") rule.inputs[0].entityId = "phys:primordial-nuclear-network";
        if (position === "output") rule.outputEntityIds = ["phys:bbn-source-scope"];
        data.graph.rules.push(rule);
      }, /Unreviewed physical construction rule/
    ])
  ]);
});
