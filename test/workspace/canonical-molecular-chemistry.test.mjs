import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (source, id) => source.graph.claims.find((record) => record.id === id);
const node = (source, suffix) => source.graph.entities.find((record) => record.id === `phys:${suffix}`);
const study = (source, id) => source.physics.studies.find((record) => record.id === id);
const publication = (source, id) => source.graph.sources.find((record) => record.id === id);

function statement(source, id, before, after) {
  const record = claim(source, id), previous = record.statement;
  assert.ok(previous.includes(before), `Actual reviewed phrase required: ${before}`);
  record.statement = previous.replace(before, after);
  for (const entity of source.graph.entities) if (entity.description === previous) entity.description = record.statement;
  for (const context of source.physics.studies) for (const key of ["preparation", "finding"]) {
    if (context[key] === previous) context[key] = record.statement;
  }
}

function removeLimit(source, id, fragment) {
  const record = claim(source, id);
  const matching = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matching.length, 1, `One actual reviewed limit required: ${fragment}`);
  const removed = matching[0];
  record.limitations = record.limitations.filter((limit) => limit !== removed);
  for (const entity of source.graph.entities) {
    entity.openObligations = entity.openObligations.filter((limit) => limit !== removed);
  }
  for (const context of source.physics.studies) context.limitations = context.limitations.filter((limit) => limit !== removed);
}

function rejects(mutations) {
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(data);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), name);
  }
}

test("the molecular model supplies two nuclear centers and one electron rather than solving neutral H2", () => {
  const model = claim(data, "D-phys-two-center-molecular-ion-model");
  assert.equal(model.status, "definition");
  assert.match(model.statement, /Z1=Z2=1 and one electron/);
  assert.match(model.statement, /1\/R/);
  rejects([
    ["a chosen composition cannot become a universal atom threshold", (source) => removeLimit(source, model.id, "chosen finite composition")],
    ["one-electron theory cannot silently solve the two-electron molecule", (source) => removeLimit(source, model.id, "Neutral H2 has two electrons")],
    ["the displayed adiabatic Hamiltonian is not the entire precision calculation", (source) => removeLimit(source, model.id, "m*alpha^6")]
  ]);
});

test("Liu spectroscopy retains supplied molecules and delayed field-ionization readout", () => {
  const context = study(data, "liu2009-h2");
  assert.equal(context.studyType, "primary-experiment");
  assert.match(context.preparation, /supersonic H2 beam/);
  assert.match(context.preparation, /Delayed pulsed-field ionization/);
  rejects([
    ["spectroscopy does not measure association", (source) => removeLimit(source, "M-phys-liu2009-h2-context", "do not observe two hydrogen atoms")],
    ["unassigned weak lines cannot become completely assigned spectra", (source) => removeLimit(source, "M-phys-liu2009-h2-context", "Four extra high-power lines")]
  ]);
});

test("the measured interval preserves linear final error addition and separate later quadrature", () => {
  const result = claim(data, "C-phys-liu-h2-transition");
  assert.match(result.statement, /25209\.99756 \+\/- 0\.00022 statistical \+\/- 0\.00007 systematic cm\^-1/);
  assert.match(result.statement, /linearly.*25209\.99756\(29\)/);
  assert.match(claim(data, "M-phys-liu-h2-ionization").statement, /interval uncertainties in quadrature/);
  rejects([
    ["final uncertainty convention cannot silently change", (source) => statement(source, result.id, "linearly", "in quadrature")],
    ["a conservative source error does not supply a Gaussian covariance", (source) => removeLimit(source, result.id, "complete Gaussian likelihood")]
  ]);
});

test("ortho and para thresholds retain their distinct rotational and hyperfine endpoints", () => {
  const result = claim(data, "C-phys-liu-h2-ionization");
  assert.match(result.statement, /124357\.23797\(36\)/);
  assert.match(result.statement, /124417\.49113\(37\)/);
  rejects([
    ["different endpoints are not independent direct edge measurements", (source) => removeLimit(source, result.id, "ortho and para thresholds")],
    ["the neutral rotational input cannot be replaced by the ionic input", (source) => statement(source, result.id, "118.48684(10)", "58.2336751(1)")],
    ["prior published intervals cannot acquire a local reanalysis", (source) => removeLimit(source, "M-phys-liu-h2-ionization", "not been separately refitted")]
  ]);
});

test("the hybrid dissociation energy preserves its historical theory inputs and fragment channel", () => {
  const method = claim(data, "M-phys-liu-h2-dissociation");
  const result = claim(data, "C-phys-liu-h2-dissociation");
  assert.match(method.statement, /CODATA 2006/);
  assert.match(result.statement, /36118\.06962\(37\) cm\^-1/);
  rejects([
    ["the 2017 H2+ energy cannot silently replace the 2009 source input", (source) => statement(source, method.id, "131058.121975(49)", "131058.1219937(6)")],
    ["zero-point-inclusive D0 is not the electronic well depth", (source) => removeLimit(source, result.id, "includes zero-point energy")],
    ["shared optical and theory inputs cannot become independent evidence", (source) => removeLimit(source, result.id, "cannot be counted as independent confirmations")]
  ]);
});

test("molecular synthesis retains both Rau generators and dependent constituent-mass closure", () => {
  const synthesis = claim(data, "C-phys-molecular-source-scope");
  assert.deepEqual(synthesis.contextIds, ["liu2009-h2", "korobov2017-h2", "korobov2017-hd", "rau2020-awg1", "rau2020-awg2", "rau2020-hd"]);
  assert.ok(synthesis.citations.some((citation) => citation.sourceId === "heisse2019"));
  rejects([
    ["AWG2 cannot disappear from the reused closure", (source) => {
      claim(source, synthesis.id).contextIds = synthesis.contextIds.filter((id) => id !== "rau2020-awg2");
    }],
    ["a closure is not independent evidence for each of its inputs", (source) => removeLimit(source, synthesis.id, "AWG1/AWG2")],
    ["binding energy does not determine a universal formation pathway", (source) => removeLimit(source, synthesis.id, "No molecular association kinetics")]
  ]);
});

test("all three chemistry source scopes point to the actual Level 2 catalogue", () => {
  for (const id of ["C-phys-molecular-source-scope", "C-phys-ionic-source-scope", "C-phys-resonance-source-scope"]) {
    const provenance = claim(data, id).citations.filter((citation) => citation.role === "provenance");
    assert.ok(provenance.length > 0);
    for (const citation of provenance) assert.equal(publication(data, citation.sourceId).path, "references/level-2.json");
    rejects([["a valid source ID from another level is not this card's provenance", (source) => {
      claim(source, id).citations.find((citation) => citation.role === "provenance").sourceId = "legacy-3";
    }]]);
  }
});

test("ionic charge bookkeeping distinguishes isolated charge from partial or effective charge", () => {
  const definition = claim(data, "D-phys-ionic-charge-state");
  assert.match(definition.statement, /z=sum_a\(Z_a\)-N_e/);
  rejects([
    ["mass-to-charge does not independently measure both quantities", (source) => removeLimit(source, definition.id, "not new absolute-charge measurements")],
    ["partial charge and species charge cannot silently merge", (source) => removeLimit(source, definition.id, "partial-charge partition")],
    ["a trapped cation does not require an anion partner", (source) => removeLimit(source, definition.id, "without a nearby anion")]
  ]);
});

test("the positive ion-production example is delayed field ionization of a prepared Rydberg state", () => {
  const result = claim(data, "C-phys-liu2009-pfi-ion-readout");
  assert.deepEqual(result.contextIds, ["liu2009-h2"]);
  assert.match(result.statement, /below the specified ionic limit/);
  assert.match(result.statement, /150 ns/);
  assert.equal(data.physics.studies.filter((context) => context.id === "liu2009-h2").length, 1);
  rejects([
    ["subthreshold excitation is not direct above-threshold photoionization", (source) => statement(source, result.id, "below the specified ionic limit", "above the ionic limit by direct photoionization")],
    ["an arbitrary-unit ion signal is not an absolute production rate", (source) => removeLimit(source, result.id, "absolute ion-yield")],
    ["pulse timing is not a universal ionization lifetime", (source) => removeLimit(source, result.id, "apparatus condition")]
  ]);
});

test("the electrolyte potential retains electrostatic-cgs normalization and electroneutral bulk", () => {
  const definition = claim(data, "D-phys-dilute-electrolyte-screening");
  assert.match(definition.statement, /sum_i\(n_i\*z_i\)=0/);
  assert.match(definition.statement, /kappa\^2=4\*pi\*e\^2/);
  assert.match(definition.statement, /psi\(r\)=q\*exp\(-kappa\*r\)\/\(D\*r\)/);
  rejects([
    ["vacuum rationalized units cannot silently replace the source cgs units", (source) => removeLimit(source, definition.id, "same numerical e")],
    ["the screening coefficient cannot lose its cgs 4 pi", (source) => statement(source, definition.id, "kappa^2=4*pi*e^2", "kappa^2=e^2")]
  ]);
});

test("Debye-Huckel remains a dilute equilibrium theory rather than exact core, crystal or transport evidence", () => {
  const id = "D-phys-dilute-electrolyte-screening";
  assert.equal(publication(data, "debye-huckel1923-electrolytes").doi, null);
  rejects([
    ["near-core and concentrated electrolytes need their own treatment", (source) => removeLimit(source, id, "Linearization needs")],
    ["statistical solution correlations are not a solid lattice or conductivity law", (source) => removeLimit(source, id, "literal salt-crystal lattice")],
    ["inherited freezing-point data are not a new direct screening experiment", (source) => removeLimit(source, id, "not a new direct screening measurement")]
  ]);
});

test("ionic synthesis reuses charged-state evidence without adding a mass-closure or universal-parent experiment", () => {
  const synthesis = claim(data, "C-phys-ionic-source-scope");
  assert.deepEqual(synthesis.contextIds, ["liu2009-h2", "rau2020-hd", "korobov2017-h2"]);
  rejects([
    ["molecular ancestry is not a prerequisite for atomic ions", (source) => removeLimit(source, synthesis.id, "bare nuclei")],
    ["parent weights have no quantitative causal estimator", (source) => removeLimit(source, synthesis.id, "equal weights 0.5/0.5")],
    ["no unmeasured conductivity or crystal mechanism can enter by implication", (source) => removeLimit(source, synthesis.id, "Microscopic donor-acceptor kinetics")],
    ["the reused trap acquisition does not become a closure input here", (source) => removeLimit(source, synthesis.id, "mass-closure output is not an input")]
  ]);
});

test("the benzene result is a six-electron source calculation and a model context", () => {
  const context = study(data, "pauling1933-benzene");
  assert.equal(context.studyType, "computational-analysis");
  assert.match(context.preparation, /six-electron spin-coupling/);
  assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === "phys:pauling1933-benzene-context").role, "model-context");
  rejects([["a source calculation cannot become a new primary experiment", (source) => { study(source, context.id).studyType = "primary-experiment"; }]]);
});

test("stationary nonorthogonal canonical functions are not hopping species or normalized probabilities", () => {
  const id = "D-phys-stationary-vb-resonance-representation";
  rejects([
    ["many-electron canonical functions cannot become one-electron orbitals", (source) => removeLimit(source, id, "not five one-electron molecular orbitals")],
    ["the canonical overlap matrix cannot silently become the identity", (source) => removeLimit(source, id, "does not make all canonical many-electron functions orthogonal")],
    ["stationary coefficients are not observed time fractions", (source) => statement(source, id, "not by themselves probabilities or time fractions", "measured probabilities and time fractions")]
  ]);
});

test("the negative exchange energy is explicitly distinct from the electromagnetic fine-structure constant", () => {
  const id = "D-phys-resonance-energy-reference-boundary";
  assert.match(claim(data, id).statement, /J_ex=alpha_source<0/);
  assert.match(claim(data, id).statement, /positive dimensionless electromagnetic fine-structure/);
  rejects([
    ["exchange energy cannot silently adopt fine-structure notation and sign", (source) => statement(source, id, "J_ex=alpha_source<0", "J_ex=alpha_EM>0")],
    ["decimal places are not physical uncertainty estimates", (source) => removeLimit(source, id, "not physical error bars")],
    ["unread thermochemical calibration cannot become quantitative support", (source) => removeLimit(source, id, "-1.5 eV")]
  ]);
});

test("the source energy lowering keeps its reference, sign and unnormalized expansion", () => {
  const id = "C-phys-pauling-benzene-vb-lowering";
  const result = claim(data, id);
  assert.match(result.statement, /W=Q\+\(sqrt\(13\)-1\)\*J_ex/);
  assert.match(result.statement, /W_single=Q\+1\.5\*J_ex/);
  assert.match(result.statement, /1\.1055\*J_ex<0/);
  rejects([
    ["the chosen negative energy difference cannot become a positive one", (source) => statement(source, id, "1.1055*J_ex<0", "1.1055*J_ex>0")],
    ["unnormalized coefficients do not measure structure populations", (source) => removeLimit(source, id, "not normalized probabilities")],
    ["the reference is not an isolated observed molecule", (source) => removeLimit(source, id, "isolated reference molecule")]
  ]);
});

test("the linked erratum is retained without importing unread radical results or a second calculation", () => {
  const correction = publication(data, "pauling1934-resonance-erratum");
  assert.equal(correction.doi, "10.1063/1.1749514");
  assert.equal(correction.review.extent, "complete-primary-erratum");
  assert.match(study(data, "pauling1933-benzene").correctionCheck, /not selected benzene Table I/);
  rejects([
    ["reading selected benzene passages is not reading the entire original paper", (source) => {
      publication(source, "pauling1933-resonance").review.extent = "full-primary-article";
    }],
    ["the linked correction cannot disappear from the admitted energy result", (source) => {
      const record = claim(source, "C-phys-pauling-benzene-vb-lowering");
      record.citations = record.citations.filter((citation) => citation.sourceId !== correction.id);
    }],
    ["a correction to the same work is not an independent experiment", (source) => {
      study(source, "pauling1933-benzene").limitations = study(source, "pauling1933-benzene").limitations.filter((limit) => !limit.includes("not another benzene calculation"));
    }]
  ]);
});

test("resonance scope does not acquire ionic necessity, carrier thresholds or complete aromaticity evidence", () => {
  const id = "C-phys-resonance-source-scope";
  rejects([
    ["the neutral model does not need an ionic regime", (source) => removeLimit(source, id, "does not require original parent 2.4")],
    ["six electrons and five functions are model counts, not universal minima", (source) => removeLimit(source, id, "Six active electrons and five basis functions")],
    ["energy comparison does not supply every aromaticity criterion", (source) => removeLimit(source, id, "future aromaticity card")],
    ["unmeasured densities and responses remain outside the finite model result", (source) => removeLimit(source, id, "fitted charge density")]
  ]);
});

test("chemistry dependencies remain descriptive and compilation does not admit physical instances", () => {
  for (const suffix of ["two-center-molecular-ion-model", "ionic-charge-state", "stationary-vb-resonance-representation"]) {
    assert.equal(node(data, suffix).level, 2);
  }
  rejects([["a molecular evidence dependency cannot become a measured causal edge", (source) => {
    source.graph.relations.find((relation) => relation.id === "physics:liu-h2-transition-liu-h2-ionization").kind = "functional";
  }]]);
  for (const id of ["C-phys-liu-h2-dissociation", "C-phys-liu2009-pfi-ion-readout", "C-phys-pauling-benzene-vb-lowering"]) {
    assert.deepEqual(claim(data, id).checkIds, []);
    const entity = data.graph.entities.find((record) => record.claimIds.includes(id));
    assert.equal(data.readiness.nodeRoles.find((record) => record.nodeId === entity.id).instanceAdmission, "none");
  }
});
