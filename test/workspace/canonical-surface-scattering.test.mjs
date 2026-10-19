import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const publicationId = "patrick2021-rosi";
const definition = "D-phys-angular-surface-radiometry";
const preparation = "M-phys-patrick2021-rosi-context";
const observed = "C-phys-rosi-ptfe-angular-response";
const inference = "M-phys-rosi-ptfe-angular-response";
const synthesis = "C-phys-surface-scattering-source-scope";
const method = "M-phys-surface-scattering-source-scope";
const contexts = ["hanssen2001", publicationId];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((item) => item.id === id);
const study = (data) => data.physics.studies.find((item) => item.id === publicationId);
const publication = (data) => data.graph.sources.find((item) => item.id === publicationId);
const bridge = (data, name) => data.graph.relations.find((item) =>
  item.id === `physics:opt-${name}-surface-scattering-source-scope`);

function replaceStatement(data, id, before, after) {
  const record = claim(data, id), original = record.statement;
  assert.ok(original.includes(before), `Reviewed phrase required: ${before}`);
  record.statement = original.replace(before, after);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    if (item.description === original) item.description = record.statement;
  }
  for (const item of data.physics.studies) {
    for (const field of ["preparation", "finding"]) {
      if (typeof item[field] === "string") item[field] = item[field].replace(original, record.statement);
    }
  }
}

function dropLimit(data, id, fragment) {
  const record = claim(data, id), matches = record.limitations.filter((item) => item.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((item) => item !== matches[0]);
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((item) => item !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations = item.limitations.filter((item) => item !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /[Ss]urface|[Oo]ptical|[Pp]hysical|physics|changed|Expected values|context|Context|claim|Claim|source|Source/, name);
  }
}

test("surface scattering reuses the existing IR experiment and adds one angular acquisition with exact source passages", async () => {
  const data = await source();
  assert.equal(study(data).studyType, "primary-experiment");
  assert.equal(study(data).doi, "10.1364/AO.435117");
  assert.equal(publication(data).authors.length, 5);
  assert.equal(study(data).readExtent, publication(data).review.extent);
  assert.deepEqual(study(data).reviewedLocators, publication(data).review.locators);
  assert.equal([...data.physics.studies, ...data.optics.studies].filter((item) => item.sourceId === "hanssen2001").length, 1);
  assert.equal(data.physics.studies.filter((item) => item.sourceId === publicationId).length, 1);
  assert.equal(claim(data, observed).status, "publication-supported");
  assert.deepEqual(claim(data, observed).contextIds, [publicationId]);
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  for (const id of [synthesis, method]) assert.deepEqual(claim(data, id).contextIds, contexts);
  await rejects([
    ["separate IR and PTFE preparations cannot become one acquisition", (changed) => {
      claim(changed, synthesis).contextIds = [publicationId];
    }],
    ["a reused IR source cannot become a clone of the new angular study", (changed) => {
      study(changed).sourceId = "hanssen2001";
    }],
    ["source passages cannot be replaced with an unread whole-paper claim", (changed) => {
      study(changed).reviewedLocators = ["Full article"];
    }],
    ["a cross-publication synthesis cannot become one experiment", (changed) => {
      claim(changed, synthesis).status = "publication-supported";
    }]
  ]);
});

test("directional radiometry retains units, projected geometry and calibrated flux normalization", async () => {
  const data = await source();
  assert.equal(claim(data, definition).status, "definition");
  assert.equal(claim(data, definition).contextIds, undefined);
  assert.match(claim(data, definition).statement, /BRDF f_r in sr\^-1.*dimensionless reflectance factor R=pi\*f_r/);
  assert.match(claim(data, definition).statement, /directional-hemispherical reflectance integrated over outgoing directions at fixed incidence/);
  assert.match(claim(data, definition).statement, /Omega_prime=\(A\/D\^2\)\*C_f\*C_e\*cos\(theta_r\)/);
  await rejects([
    ["BRDF cannot become a dimensionless energy fraction", (changed) =>
      replaceStatement(changed, definition, "BRDF f_r in sr^-1", "BRDF f_r as an integrated energy fraction")],
    ["the effective aperture cannot lose its projected-area cosine", (changed) =>
      replaceStatement(changed, definition, "*cos(theta_r)", "")],
    ["reflectance factor above unity cannot be confused with energy nonconservation", (changed) =>
      dropLimit(changed, definition, "factor above one")],
    ["an absolute incident-flux ratio cannot become calibration-free", (changed) =>
      dropLimit(changed, definition, "not calibration-free")],
    ["a directional observation cannot uniquely supply a full hemisphere or microscopic surface", (changed) =>
      dropLimit(changed, definition, "One integral or one direction")]
  ]);
});

test("the PTFE scan keeps actual Figure11 geometry, nominal hemispherical labels and unspecified polarization", async () => {
  const data = await source();
  assert.match(claim(data, preparation).statement, /550 nm.*azimuth180 degrees.*angles70 to0 degrees/);
  assert.match(claim(data, preparation).statement, /actual viewing polar angle is45 degrees with azimuth90 or135 degrees/);
  assert.match(claim(data, preparation).statement, /nominal vendor directional-hemispherical reflectances99 and10 percent/);
  for (const id of [preparation, observed, inference, synthesis, method]) {
    assert.match(claim(data, id).limitations.join(" "), /do not state whether its curves use s polarization, p polarization or an unpolarized average/);
  }
  await rejects([
    ["the example forty-degree view cannot replace the actual forty-five-degree scan", (changed) =>
      replaceStatement(changed, preparation, "viewing polar angle is45 degrees", "viewing polar angle is40 degrees")],
    ["vendor integrated labels cannot become calibrated directional response", (changed) =>
      replaceStatement(changed, preparation, "nominal vendor directional-hemispherical reflectances99 and10 percent", "measured constant bidirectional reflectance factors0.99 and0.10")],
    ["general source polarization cannot resolve missing Figure11 polarization", (changed) =>
      dropLimit(changed, observed, "no particular Figure11 polarization state is inferred")],
    ["polarization systematics cannot be counted as independent replicate errors", (changed) =>
      dropLimit(changed, observed, "highly correlated between polarizations")]
  ]);
});

test("reported angular deviations keep target-specific uncertainty and avoid an invented microscopic inverse solution", async () => {
  const data = await source();
  assert.match(claim(data, observed).statement, /gray target at90-degree viewing azimuth.*error exceeding30 percent/);
  assert.match(claim(data, observed).statement, /roughly estimates relative expanded uncertainties k=2 of1 percent for white and2 percent for gray/);
  await rejects([
    ["a nominal reference error cannot become a directly fitted microscopic roughness", (changed) =>
      replaceStatement(changed, observed, "reference-value error exceeding30 percent", "uniquely inferred microscopic roughness exceeding30 percent")],
    ["rough expanded uncertainty cannot become universal instrument precision", (changed) =>
      dropLimit(changed, observed, "rough, target- and geometry-specific")],
    ["same standards cannot become independent evidence at every wavelength", (changed) =>
      dropLimit(changed, observed, "same named standards and calibration chain")],
    ["angular response cannot uniquely separate surface and subsurface scattering", (changed) =>
      dropLimit(changed, observed, "subsurface contributions")],
    ["publication curves cannot become newly recalibrated raw signals or a validated scene solver", (changed) =>
      dropLimit(changed, observed, "No raw signal/angle recalibration")]
  ]);
});

test("only the two declared optical references bridge domains and preserve complete evidence contexts", async () => {
  const data = await source();
  for (const name of ["specular-response", "brdf"]) {
    const relation = bridge(data, name);
    assert.equal(relation.source, `opt:${name}`);
    assert.equal(relation.target, "phys:surface-scattering-source-scope");
    assert.equal(relation.kind, "descriptive");
    assert.equal(relation.role, "interpretation-dependency");
    assert.deepEqual(relation.claimIds, [method]);
    assert.deepEqual(relation.contextIds, contexts);
    assert.equal(data.graph.entities.some((item) => item.id === `phys:opt:${name}`), false);
  }
  await rejects([
    ["an allowed optical ID cannot conceal another endpoint", (changed) => {
      bridge(changed, "brdf").source = "opt:water-absorption";
    }],
    ["a declared optical reference cannot become physical causal ancestry", (changed) => {
      bridge(changed, "brdf").kind = "causal";
    }],
    ["an allowed bridge cannot drop the original IR context", (changed) => {
      bridge(changed, "specular-response").contextIds = [publicationId];
    }],
    ["new unrelated optical-to-physics bridges remain closed", (changed) => {
      const relation = structuredClone(bridge(changed, "brdf"));
      relation.id = "optical:unreviewed-surface-bridge";
      changed.graph.relations.push(relation);
    }]
  ]);
});

test("bounded optical response cannot acquire original causal weights, emergence minima or vision authority", async () => {
  const data = await source();
  for (const id of [definition, preparation, observed, inference, synthesis, method]) {
    assert.deepEqual(claim(data, id).checkIds, []);
  }
  assert.match(publication(data).review.limit, /No full instrument-design.*raw scan or new inverse fit/);
  await rejects([
    ["original parent weights cannot become measured causes or necessary crystal ancestry", (changed) =>
      dropLimit(changed, synthesis, "weights0.5/0.5")],
    ["two samples or optical directions cannot establish universal carrier minima", (changed) =>
      dropLimit(changed, synthesis, "N_min=N_crit=2")],
    ["a response map cannot independently establish SOMA autonomy", (changed) =>
      dropLimit(changed, synthesis, "classification choices")],
    ["surface radiometry cannot establish a matched retina or uniquely recover a scene", (changed) =>
      dropLimit(changed, synthesis, "optical-to-retinal transfer")],
    ["aggregate and angular studies cannot silently become one fitted likelihood", (changed) =>
      dropLimit(changed, synthesis, "neither is a duplicate acquisition or a joint fitted likelihood")]
  ]);
});
