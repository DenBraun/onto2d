import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const dipole = "D-phys-molecular-dipole-response";
const pair = "D-phys-point-dipole-interaction";
const ensemble = "D-phys-dipole-ensemble-dielectric-boundary";
const ni = "ni2008-krb-stark";
const yang = "yang2016-n2-alignment";
const niShifts = "C-phys-ni2008-krb-stark-shifts";
const niMoment = "C-phys-ni2008-krb-dipole";
const niMethod = "M-phys-ni2008-krb-dipole";
const yangPreparation = "M-phys-yang2016-n2-alignment-context";
const yangCounts = "C-phys-yang2016-n2-diffraction-anisotropy";
const yangInference = "C-phys-yang2016-n2-angular-inference";
const yangMethod = "M-phys-yang2016-n2-angular-inference";
const synthesis = "C-phys-molecular-polarization-source-scope";
const synthesisMethod = "M-phys-molecular-polarization-source-scope";
const nodeNames = ["molecular-dipole-response", "point-dipole-interaction", "dipole-ensemble-dielectric-boundary",
  "ni2008-krb-stark-context", "ni2008-krb-stark-shifts", "ni2008-krb-dipole",
  "yang2016-n2-alignment-context", "yang2016-n2-diffraction-anisotropy", "yang2016-n2-angular-inference",
  "molecular-polarization-source-scope"];
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === id);
const entity = (data, name) => data.graph.entities.find((record) => record.id === `phys:${name}`);
const study = (data, id) => data.physics.studies.find((record) => record.id === id);
const publication = (data, id) => data.graph.sources.find((record) => record.id === id);
const role = (data, name) => data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${name}`);
const edge = (data, from, to) => data.graph.relations.find((record) =>
  record.source === `phys:${from}` && record.target === `phys:${to}`);

// Keep presentation and combined study summaries consistent so each mutation
// challenges an actual scientific boundary rather than a stale duplicate.
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
  const record = claim(data, id);
  const matches = record.limitations.filter((limit) => limit.includes(fragment));
  assert.equal(matches.length, 1, `Exactly one reviewed boundary required: ${fragment}`);
  record.limitations = record.limitations.filter((limit) => limit !== matches[0]);
  if (record.limitations.length === 0) record.limitations = ["The selected molecular state is supplied."];
  for (const item of data.graph.entities.filter((item) => item.claimIds.includes(id))) {
    item.openObligations = item.openObligations.filter((limit) => limit !== matches[0]);
  }
  for (const item of data.physics.studies) item.limitations = item.limitations.filter((limit) => limit !== matches[0]);
}

async function rejects(mutations) {
  const original = await source();
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed),
      /Molecular|molecular|Physical|physical|physics|changed|Expected values|context|Context|role|Role|claim|Claim|source|Source/, name);
  }
}

test("molecular dipoles retain two primary preparations and separate definitions, outputs and synthesis", async () => {
  const data = await source();
  for (const id of [dipole, pair, ensemble]) {
    assert.equal(claim(data, id).status, "definition");
    assert.equal(claim(data, id).contextIds, undefined);
  }
  for (const id of [ni, yang]) {
    assert.equal(study(data, id).studyType, "primary-experiment");
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 1);
  }
  assert.equal(role(data, "ni2008-krb-stark-context").role, "experimental-context");
  assert.equal(role(data, "yang2016-n2-alignment-context").role, "experimental-context");
  assert.equal(claim(data, synthesis).status, "literature-synthesis");
  assert.deepEqual(claim(data, synthesis).contextIds, [ni, yang]);
  for (const id of ["likharev2022-dipoles", "ni2009-polar-thesis"]) {
    assert.equal(data.physics.studies.filter((item) => item.sourceId === id).length, 0,
      "Formal exposition and a correction do not create extra independent acquisitions");
  }
  for (const name of nodeNames) {
    assert.equal(entity(data, name).level, 2);
    assert.equal(role(data, name).instanceAdmission, "none");
    for (const id of entity(data, name).claimIds) assert.deepEqual(claim(data, id).checkIds, []);
  }
  await rejects([
    ["the two physical preparations cannot be collapsed into one generic molecular study", (changed) => {
      claim(changed, niMoment).contextIds = [yang];
    }],
    ["a formal definition cannot become a measured dielectric result", (changed) => {
      claim(changed, ensemble).status = "publication-supported";
      claim(changed, ensemble).contextIds = [yang];
    }]
  ]);
});

test("charge moments, induced response and field energy preserve frames, SI units and the neutral-system boundary", async () => {
  const data = await source();
  assert.match(claim(data, dipole).statement, /localized neutral molecular charge distribution in SI units/);
  assert.match(claim(data, dipole).statement, /C m\^2\/V/);
  assert.match(claim(data, dipole).statement, /zero laboratory vector average/);
  assert.match(claim(data, dipole).statement, /energy -\(p dot E\)\/2/);
  assert.match(claim(data, pair).statement, /4\*pi\*epsilon0\*r\^3/);
  await rejects([
    ["polarizability cannot be assigned dipole-moment units", (changed) =>
      replaceStatement(changed, dipole, "C m^2/V", "C m")],
    ["a reversible induced dipole cannot inherit fixed-dipole energy without one-half", (changed) =>
      replaceStatement(changed, dipole, "energy -(p dot E)/2", "energy -(p dot E)")],
    ["a charged-system origin shift cannot lose its charge dependence", (changed) =>
      dropLimit(changed, dipole, "charged subsystem")],
    ["optical polarizability cannot be silently assigned a static numeric value", (changed) =>
      dropLimit(changed, dipole, "frequency-specific")],
    ["a fixed-pair electrostatic term cannot become a universally averaged molecular potential", (changed) =>
      dropLimit(changed, pair, "orientation-averaged")]
  ]);
});

test("KRb Stark spectroscopy preserves the selected state, rotational interpretation and primary calibration correction", async () => {
  const data = await source();
  assert.match(claim(data, niShifts).statement, /6\.6836\(5\) GHz/);
  assert.match(claim(data, niMoment).statement, /permanent-moment magnitude 0\.566\(17\) D/);
  assert.match(claim(data, niMoment).statement, /corrects the moment to 0\.574\(17\) D/);
  assert.match(claim(data, niMethod).statement, /H=h\*B_Hz\*N_hat\^2/);
  assert.match(claim(data, niMethod).statement, /rotational mixing through N=5/);
  assert.equal(publication(data, "ni2009-polar-thesis").year, 2009);
  assert.ok(claim(data, niMoment).citations.some((ref) => ref.sourceId === "ni2009-polar-thesis" && ref.role === "supports"));
  await rejects([
    ["the corrected value cannot silently revert to the original number", (changed) =>
      replaceStatement(changed, niMoment, "corrects the moment to 0.574(17) D", "corrects the moment to 0.566(17) D")],
    ["a rotational frequency cannot be inserted directly as an energy", (changed) =>
      replaceStatement(changed, niMethod, "H=h*B_Hz*N_hat^2", "H=B_Hz*N_hat^2")],
    ["a fitted moment magnitude cannot claim the sign of atomic-end charge", (changed) =>
      dropLimit(changed, niMoment, "positive dipole values are magnitudes")],
    ["field-systematic uncertainty cannot become an independently calibrated statistical error", (changed) =>
      dropLimit(changed, niMoment, "3-5%")],
    ["the thesis correction is not a new independent dataset", (changed) =>
      dropLimit(changed, niMoment, "not a new dataset")]
  ]);
});

test("nitrogen alignment keeps the actual optical drive, diffraction observable and extrapolated angular-count boundary", async () => {
  const data = await source();
  assert.match(claim(data, yangPreparation).statement, /35 fs FWHM.*800 nm/);
  assert.match(claim(data, yangPreparation).statement, /3\.7 MeV electron diffraction/);
  assert.match(claim(data, yangPreparation).statement, /very faint plasma/);
  assert.match(claim(data, yangCounts).statement, /ratio of counts in horizontal and vertical angular cones/);
  assert.equal(edge(data, "yang2016-n2-alignment-context", "yang2016-n2-diffraction-anisotropy").role, "measurement-context");
  await rejects([
    ["a nonresonant interpretation does not establish a perfectly ionization-free preparation", (changed) =>
      dropLimit(changed, yangPreparation, "no perfectly ionization-free")],
    ["an extrapolated central detector region cannot be described as measured angular counts", (changed) =>
      dropLimit(changed, yangCounts, "missing region below 3.5")],
    ["diffraction anisotropy cannot become an absolute electronic dipole measurement", (changed) =>
      dropLimit(changed, yangCounts, "not a directly measured")]
  ]);
});

test("nitrogen angular reconstruction retains common-data fitting and separates alignment from vector orientation", async () => {
  const data = await source();
  assert.match(claim(data, yangInference).statement, /<cos\^2\(theta\)>=0\.41.*0\.28/);
  assert.match(claim(data, yangInference).statement, /100 fs RMS.*overlap factor 0\.42/);
  assert.match(claim(data, yangMethod).statement, /baseline uses this same overlap factor/);
  assert.equal(edge(data, "yang2016-n2-diffraction-anisotropy", "yang2016-n2-angular-inference").role,
    "interpretation-dependency");
  await rejects([
    ["an even alignment statistic cannot replace its square by net vector orientation", (changed) =>
      replaceStatement(changed, yangInference, "<cos^2(theta)>=0.41", "<cos(theta)>=0.41")],
    ["the fitted overlap cannot become a universal aligned fraction or carrier minimum", (changed) =>
      dropLimit(changed, yangInference, "0.42 overlap parameter")],
    ["estimated input values and fitted temperature/fluence cannot be merged", (changed) =>
      dropLimit(changed, yangMethod, "Initial estimated temperature 65 K")],
    ["the shared angular fit cannot create measured electronic-alpha precision", (changed) =>
      dropLimit(changed, yangMethod, "No uncertainty in electronic polarizability")]
  ]);
});

test("gas-state responses cannot acquire bulk dielectric, solvation, field-free order or original parent minima", async () => {
  const data = await source();
  assert.match(claim(data, ensemble).statement, /P=n\*<p>/);
  assert.match(claim(data, ensemble).statement, /dilute independent-dipole approximation/);
  assert.match(claim(data, ensemble).statement, /<cos\^2\(theta\)>.*1\/3.*<cos\(theta\)>/);
  const displayed = new Set(nodeNames.map((name) => `phys:${name}`));
  assert.ok(data.graph.relations.filter((record) => displayed.has(record.source) || displayed.has(record.target))
    .every((record) => record.kind === "descriptive"));
  await rejects([
    ["local and macroscopic fields cannot be equated without the dilute boundary", (changed) =>
      replaceStatement(changed, ensemble, "require a dilute independent-dipole approximation", "hold for every dense molecular material")],
    ["a single-molecule response cannot establish dense-phase constitutive behavior", (changed) =>
      dropLimit(changed, ensemble, "Constitutive response is material-specific")],
    ["a molecular dipole cannot prove regional integer ions or a solvation structure", (changed) =>
      dropLimit(changed, synthesis, "integer-charged regional ions")],
    ["parent weights and body counts have no measured necessity authority", (changed) =>
      dropLimit(changed, synthesis, "weights 0.30/0.25/0.25/0.20")],
    ["SOMA and phase grouping cannot establish a new rule-generating physical law", (changed) =>
      dropLimit(changed, synthesis, "SOMA stabilization")]
  ]);
});

test("dipole citations retain actual primary reading extents and keep formal instruction distinct from new experiments", async () => {
  const data = await source();
  for (const id of [dipole, pair, ensemble, niMoment, yangInference, synthesis, synthesisMethod]) {
    for (const citation of claim(data, id).citations) {
      assert.ok(publication(data, citation.sourceId).review.locators.includes(citation.locator));
    }
  }
  assert.match(publication(data, "ni2009-polar-thesis").review.limit, /footnote 3 explicitly corrects/);
  assert.match(publication(data, "likharev2022-dipoles").review.limit, /instructional formal exposition/);
  await rejects([
    ["an unread source passage cannot supply a bulk dielectric measurement", (changed) => {
      claim(changed, ensemble).citations[0].locator = "All-frequency measured liquid dielectric constant and cooperative phase threshold";
    }],
    ["the correction cannot lose its actual primary source", (changed) => {
      claim(changed, niMoment).citations = claim(changed, niMoment).citations
        .filter((ref) => ref.sourceId !== "ni2009-polar-thesis");
    }],
    ["formal textbook reading cannot become a full independent experimental replay", (changed) => {
      publication(changed, "likharev2022-dipoles").review.extent = "independently-replayed-experiment";
    }]
  ]);
});
