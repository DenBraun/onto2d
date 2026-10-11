import assert from "node:assert/strict";
import test from "node:test";
import {
  OSCILLATION_SOLAR_ADMISSION,
  OSCILLATION_SOLAR_CHECKS,
  OSCILLATION_SOLAR_ANALYTICAL_SOURCES,
  validateOscillationSolarContracts
} from "../../models/causal-emergence/canonical/oscillation-solar.mjs";

let sourcePromise;
async function source() {
  sourcePromise ??= import("../../models/causal-emergence/canonical/source.mjs")
    .then(({ loadCanonicalSource }) => loadCanonicalSource());
  return sourcePromise;
}
function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((r) => [r.id, r]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((r) => [r.id, r]))]),
    ["readiness", data.readiness]
  ]);
}
const claim = (d, suffix) => d.graph.claims.find((r) => r.id === `D-phys-solar-${suffix}`);
function replace(d, suffix, from, to) {
  const c = claim(d, suffix);
  assert.ok(c.statement.includes(from), "Mutation must change an actual convention");
  c.statement = c.statement.replace(from, to);
}
function removeLimit(d, suffix, text) {
  const c = claim(d, suffix), n = c.limitations.length;
  c.limitations = c.limitations.filter((s) => !s.includes(text));
  assert.equal(c.limitations.length, n - 1, "Mutation must remove exactly one reviewed boundary");
}
async function reject(mutations, full = false) {
  const original = await source();
  validateOscillationSolarContracts(context(original));
  const { validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateOscillationSolarContracts(context(changed)), undefined, name);
    if (full) assert.throws(() => validateCanonicalSource(changed), undefined, `Full source hook: ${name}`);
  }
}

test("solar application declares profile and survival conventions without a synthetic study or replay", () => {
  assert.deepEqual(OSCILLATION_SOLAR_ADMISSION.definitions, [
    ["phys:solar-matter-profile", "D-phys-solar-matter-profile"],
    ["phys:solar-adiabatic-survival", "D-phys-solar-adiabatic-survival"]
  ]);
  assert.deepEqual(OSCILLATION_SOLAR_ADMISSION.formalDependencies.map(([, endpoints]) => endpoints), [
    ["phys:neutrino-matter-evolution", "phys:solar-matter-profile"],
    ["phys:solar-matter-profile", "phys:solar-adiabatic-survival"],
    ["phys:neutrino-matter-mixing", "phys:solar-adiabatic-survival"],
    ["phys:neutrino-vacuum-phase", "phys:solar-adiabatic-survival"]
  ]);
  for (const key of ["contexts", "observations", "dependencies", "studyIds", "comparisonIds", "inferenceSources", "localStudySources"])
    assert.deepEqual(OSCILLATION_SOLAR_ADMISSION[key], []);
  assert.equal(OSCILLATION_SOLAR_CHECKS.size, 0);
  assert.equal(OSCILLATION_SOLAR_ANALYTICAL_SOURCES.size, 0);
});

test("solar density keeps its radial domain, weak-potential normalization and supplied inputs", async () => {
  await reject([
    ["profile is not exact over the whole Sun", (d) => replace(d, "matter-profile", "0<=R<0.9 R_sun", "0<=R<=R_sun")],
    ["profile scale is not a unit-free density coefficient", (d) => replace(d, "matter-profile", "r0=R_sun/10.54", "r0=10.54")],
    ["the source typo cannot replace the verified potential", (d) => replace(d, "matter-profile", "sqrt(2)*G_F", "G_F")],
    ["source production is not identically at the center", (d) => replace(d, "matter-profile", "generally different from", "identical to")],
    ["central density and parameters are not a reconstructed fit", (d) => removeLimit(d, "matter-profile", "supplied inputs")],
    ["finite radial approximation needs an outer continuation for a numerical path", (d) => removeLimit(d, "matter-profile", "outer-profile continuation")],
    ["the printed factor discrepancy is not silently erased", (d) => removeLimit(d, "matter-profile", "printed inconsistency")]
  ]);
});

test("solar survival preserves adiabatic and phase averaging conditions and normalized conditional weights", async () => {
  await reject([
    ["survival uses probabilities after phase smearing, not unsquared amplitudes", (d) => replace(d, "adiabatic-survival", "cos^2(theta_m,p)*cos^2(theta)", "cos(theta_m,p)*cos(theta)")],
    ["production distribution must remain normalized", (d) => replace(d, "adiabatic-survival", "integral d^3r f_s=1", "integral d^3r f_s=n_e(0)")],
    ["energy response cannot be an unnormalized event count", (d) => replace(d, "adiabatic-survival", "integral dE w_s=1", "integral dE w_s=N_events")],
    ["production and energy weights need not factor independently", (d) => replace(d, "adiabatic-survival", "f_s(r|E)", "f_s(r)")],
    ["flux alone does not supply the selected detector response", (d) => replace(d, "adiabatic-survival", "times its cross section and detection efficiency", "without a cross section or detection efficiency")],
    ["smooth density alone does not prove adiabaticity", (d) => removeLimit(d, "adiabatic-survival", "off-diagonal basis-derivative")],
    ["a long baseline alone does not justify phase averaging", (d) => removeLimit(d, "adiabatic-survival", "interference terms")],
    ["crossing resonance is not the high-density limit", (d) => removeLimit(d, "adiabatic-survival", "Merely crossing resonance")],
    ["the production distribution is not the electron density", (d) => removeLimit(d, "adiabatic-survival", "production density includes")],
    ["CC averaging is not a universal NC or elastic-scattering event rate", (d) => removeLimit(d, "adiabatic-survival", "exposed Earth surface")]
  ]);
});

test("solar event averaging cannot substitute energy flux for differential number flux", async () => {
  const original = await source();
  assert.match(claim(original, "adiabatic-survival").statement,
    /differential neutrino number flux dPhi_s\/dE/);
  await reject([
    ["energy-flux weighting adds an unsupported energy factor", (d) => {
      const record = claim(d, "adiabatic-survival");
      record.statement = record.statement.replace(
        "differential neutrino number flux dPhi_s/dE",
        "differential neutrino energy flux E*dPhi_s/dE"
      );
      // Matching display text must not make the incorrect convention admissible.
      d.graph.entities.find((r) => r.id === "phys:solar-adiabatic-survival")
        .description = record.statement;
    }]
  ], true);
});

test("solar displayed records, readiness and formal dependencies cannot acquire empirical or causal authority", async () => {
  const mutations = OSCILLATION_SOLAR_ADMISSION.definitions.flatMap(([id]) => [
    [`${id} summary cannot assert a uniquely measured mechanism`, (d) => { d.graph.entities.find((r) => r.id === id).description = "SNO directly measured the unique solar density profile and MSW mechanism."; }],
    [`${id} cannot erase its scoped display limits`, (d) => { d.graph.entities.find((r) => r.id === id).openObligations = []; }],
    [`${id} atlas denotes cannot invent a fitted distribution`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).denotes = "The reconstructed solar production distribution."; }],
    [`${id} cannot become a solar acquisition instance`, (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === id).instanceAdmission = "empirical-instance"; }]
  ]);
  for (const [id] of OSCILLATION_SOLAR_ADMISSION.formalDependencies) {
    mutations.push([`${id} cannot lose a model prerequisite`, (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== id); }]);
    mutations.push([`${id} is not an empirical maintenance relation`, (d) => { d.graph.relations.find((r) => r.id === id).kind = "functional-support"; }]);
    mutations.push([`${id} cannot hide an extra unsupported weight`, (d) => { d.graph.relations.find((r) => r.id === id).weight = 0.7; }]);
  }
  await reject(mutations);
});

test("solar source reading and full canonical ownership cannot silently expand to new empirical results", async () => {
  await reject([
    ["selected formal reading is not a complete empirical review", (d) => { d.graph.sources.find((r) => r.id === "pdg2025-neutrino-mixing").review.extent = "complete-experimental-review"; }],
    ["solar application must retain its actually read passage", (d) => {
      const s = d.graph.sources.find((r) => r.id === "pdg2025-neutrino-mixing");
      const n = s.review.locators.length;
      s.review.locators = s.review.locators.filter((s) => !s.includes("14.66-14.70"));
      assert.equal(s.review.locators.length, n - 1);
    }],
    ["source review cannot hide its printed discrepancies", (d) => { d.graph.sources.find((r) => r.id === "pdg2025-neutrino-mixing").review.limit = "All printed equations are exact and all solar likelihoods were reproduced."; }],
    ["a solar convention cannot adopt a detector study", (d) => { claim(d, "adiabatic-survival").experimentalContextIds = ["sno2002-acquisition"]; }],
    ["a formula cannot be promoted through an unrelated phase check", (d) => { claim(d, "adiabatic-survival").status = "analytically-checked"; claim(d, "adiabatic-survival").checkIds = ["neutrino-phase-data-algebra"]; }],
    ["a solar definition cannot claim a new observed survival fit", (d) => { claim(d, "adiabatic-survival").status = "publication-supported"; }]
  ], true);
});
