import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  createOracleRequestBinding,
  validateOracleResponse
} from "../../packages/kernel/src/index.js";
import { runPhaseCChargedObjecthood } from "../../cases/level-0-oscillator/run-phase-c-charged-objecthood.mjs";
import {
  PHASE_C_CHARGED_CONTROL_PROBE,
  PHASE_C_CHARGED_SOLVER,
  blockTridiagonalNegativeCount,
  falseVacuumWitnessMargin,
  phaseCChargedSolver,
  probeQuantityPrefix,
  symmetricNegativeCount3,
  trueVacuumCertificateMargin
} from "../../cases/level-0-oscillator/solver/phase-c-charged-solver.mjs";

const CASE_ROOT = "../../cases/level-0-oscillator/";
const QUALIFIED = [
  "stiffer-quartic",
  "weaker-coupling",
  "asymmetric-frequencies",
  "equal-effective-mass",
  "phase-b-mass-ratios"
];

// One confirmatory replay is shared by every test in this file.
const chargedResult = runPhaseCChargedObjecthood();

async function chargedAnalysis() {
  return chargedResult;
}

async function caseBytes(name) {
  return readFile(new URL(`${CASE_ROOT}${name}`, import.meta.url));
}

async function caseText(name) {
  return readFile(new URL(`${CASE_ROOT}${name}`, import.meta.url), "utf8");
}

async function caseJson(name) {
  return JSON.parse(await caseText(name));
}

function scenarioById(result, id) {
  const scenario = result.scenarios.find((entry) => entry.id === id);
  assert.ok(scenario, `missing scenario ${id}`);
  return scenario;
}

function evidenceIdsOf(result) {
  return [
    result.sourceHash,
    ...result.dependencies.map((dependency) => dependency.analysisHash),
    result.modelHash
  ];
}

function effectiveMassSquared(parameters) {
  return parameters.massSquared.map(
    (value, index) => value - parameters.frequencies[index] ** 2
  );
}

// Declared potential with aligned phases, where the cubic term is most
// negative: Re(psi_1 psi_2 psi_3) <= |psi_1| |psi_2| |psi_3|.
function alignedPotential(u, { massSquared, lambda, quarticCoefficient }) {
  const squares = u[0] * u[0] + u[1] * u[1] + u[2] * u[2];
  return 0.5 * (massSquared[0] * u[0] * u[0] + massSquared[1] * u[1] * u[1] + massSquared[2] * u[2] * u[2]) -
    2 * lambda * u[0] * u[1] * u[2] +
    0.25 * quarticCoefficient * squares * squares;
}

// Lower band of a second-variation operator assembled from a frozen profile
// in scalar ordering (row 3 * gridIndex + component, half-bandwidth 3). The
// operators are derived here from the declared energy, not read from the
// solver: real directions carry -2 lambda f_k + 2 g f_i f_j off the diagonal
// and an extra 2 g f_i^2 on it; imaginary directions carry +2 lambda f_k.
function sectorBand(stationary, parameters, sector) {
  const size = stationary.components[0].length;
  const inverseDxSquared = 1 / (stationary.dx * stationary.dx);
  const effective = effectiveMassSquared(parameters);
  const real = sector === "real";
  const lower = new Float64Array(4 * 3 * size);
  for (let index = 0; index < size; index += 1) {
    const f = stationary.components.map((component) => component[index]);
    const sumSquared = f[0] * f[0] + f[1] * f[1] + f[2] * f[2];
    for (let component = 0; component < 3; component += 1) {
      const row = 3 * index + component;
      lower[4 * row] = 2 * inverseDxSquared + effective[component] +
        parameters.quarticCoefficient * sumSquared +
        (real ? 2 * parameters.quarticCoefficient * f[component] * f[component] : 0);
      for (let other = 0; other < component; other += 1) {
        const third = 3 - component - other;
        lower[4 * row + (component - other)] = real
          ? -2 * parameters.lambda * f[third] +
            2 * parameters.quarticCoefficient * f[component] * f[other]
          : 2 * parameters.lambda * f[third];
      }
      if (index > 0) lower[4 * row + 3] = -inverseDxSquared;
    }
  }
  return { order: 3 * size, lower };
}

// Scalar banded LDL^T without pivoting. By Sylvester's law of inertia the
// number of negative pivots of M + shift is the number of eigenvalues of M
// below -shift. This uses scalar pivots, the solver uses 3x3 block pivots.
function negativePivotCount({ order, lower }, shift) {
  const factor = new Float64Array(4 * order);
  const pivots = new Float64Array(order);
  let negatives = 0;
  let smallest = Infinity;
  for (let row = 0; row < order; row += 1) {
    const first = Math.max(0, row - 3);
    for (let column = first; column < row; column += 1) {
      let entry = lower[4 * row + (row - column)];
      for (let prior = Math.max(first, column - 3); prior < column; prior += 1) {
        entry -= factor[4 * row + (row - prior)] * factor[4 * column + (column - prior)] * pivots[prior];
      }
      factor[4 * row + (row - column)] = entry / pivots[column];
    }
    let pivot = lower[4 * row] + shift;
    for (let prior = first; prior < row; prior += 1) {
      pivot -= factor[4 * row + (row - prior)] ** 2 * pivots[prior];
    }
    pivots[row] = pivot;
    if (pivot < 0) negatives += 1;
    if (Math.abs(pivot) < smallest) smallest = Math.abs(pivot);
  }
  return { negatives, smallest };
}

function sha256Hex(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

test("the charged Phase-C study qualifies the preregistered branch and keeps both controls", async () => {
  const result = await chargedAnalysis();
  assert.equal(result.status, "completed-preregistered-bounded-extension");
  assert.equal(result.conclusion.result, "bounded-positive-qualified-charged-branch");
  assert.deepEqual(result.conclusion.qualifiedScenarioIds, QUALIFIED);
  assert.deepEqual(result.conclusion.indeterminateScenarioIds, []);
  assert.deepEqual(result.conclusion.rejectedScenarioIds, ["near-threshold"]);
  assert.equal(result.conclusion.controlsBehavedAsDeclared, true);
  assert.equal(result.conclusion.testedAllPreregisteredScenarios, true);
  assert.equal(result.conclusion.testedAllPreregisteredPerturbations, true);
  assert.deepEqual(result.conclusion.predictions, { declaredCount: 5, contraryScenarioIds: [] });
  assert.deepEqual(
    {
      scenarioCount: result.preregistration.scenarioCount,
      eligibleScenarioCount: result.preregistration.eligibleScenarioCount,
      controlScenarioCount: result.preregistration.controlScenarioCount,
      perturbationCount: result.preregistration.perturbationCount
    },
    { scenarioCount: 8, eligibleScenarioCount: 6, controlScenarioCount: 2, perturbationCount: 6 }
  );

  for (const id of QUALIFIED) {
    const scenario = scenarioById(result, id);
    assert.equal(scenario.eligible, true);
    assert.equal(scenario.oracleValidation.status, "accepted");
    assert.equal(scenario.oracleValidation.convergence, "converged");
    assert.equal(
      scenario.scientificResult.status,
      "trial-charged-objecthood-passed-within-declared-bank"
    );
    assert.equal(scenario.scientificResult.trialObjecthoodPassed, true);
    assert.deepEqual(scenario.scientificResult.failedNecessaryGates, []);
    assert.deepEqual(scenario.scientificResult.failedNumericalChecks, []);
    assert.equal(
      Object.values(scenario.scientificResult.gates).every((passed) => passed === true),
      true
    );
  }

  const stable = scenarioById(result, "inspected-stable-branch");
  assert.equal(stable.eligible, false);
  assert.equal(stable.scientificResult.status, "control-passed-every-declared-gate");
  // An ineligible control never counts as a qualified scenario.
  assert.equal(stable.scientificResult.trialObjecthoodPassed, false);
  assert.equal(stable.scientificResult.expectationOutcome, "as-declared");

  const unstable = scenarioById(result, "inspected-unstable-branch");
  assert.equal(unstable.eligible, false);
  assert.equal(unstable.scientificResult.status, "rejected-by-declared-necessary-gates");
  assert.deepEqual(unstable.scientificResult.failedNecessaryGates, [
    "charge-constrained-stability",
    "unperturbed-persistence",
    "dynamic-bank"
  ]);
  assert.deepEqual(unstable.scientificResult.failedNumericalChecks, []);
  assert.equal(unstable.scientificResult.expectationOutcome, "as-declared");
});

test("the count and the dynamic bank disagree only on the near-threshold scenario", async () => {
  const result = await chargedAnalysis();
  assert.deepEqual(result.conclusion.secondaryHypothesis, {
    evaluatedScenarioCount: 8,
    disagreeingScenarioIds: ["near-threshold"],
    countAndDynamicBankAgreeOnEveryEvaluatedScenario: false
  });
  const scenario = scenarioById(result, "near-threshold");
  const { values } = scenario.scientificResult;
  assert.equal(values.constrained_stability_flag, 1);
  assert.equal(scenario.scientificResult.gates.constrainedStabilityPassed, true);
  assert.equal(scenario.scientificResult.gates.unperturbedPersistencePassed, true);
  assert.equal(scenario.scientificResult.gates.dynamicBankPassed, false);
  assert.deepEqual(scenario.scientificResult.failedNecessaryGates, ["dynamic-bank"]);
  // The rejection is a physical verdict, not a numerical failure.
  assert.deepEqual(scenario.scientificResult.failedNumericalChecks, []);
  assert.equal(scenario.scientificResult.numericalQualityPassed, true);
  assert.equal(scenario.scientificResult.criterionDynamicsAgreement, "disagree");
  assert.equal(scenario.scientificResult.expectationOutcome, "as-declared");
  for (const resolution of ["base", "time_refined", "space_refined"]) {
    assert.equal(values[`dynamic_departure_count_${resolution}`], 3);
  }
  assert.equal(values.dynamic_departure_pattern_agreement, 1);
  assert.deepEqual(
    scenario.visualization.dynamics.filter((probe) => probe.departed).map((probe) => probe.id),
    ["real-amplitude-down", "complex-common-phase", "complex-dipole-packet"]
  );
  for (const other of result.scenarios.filter((entry) => entry.id !== "near-threshold")) {
    assert.equal(other.scientificResult.criterionDynamicsAgreement, "agree");
  }
});

test("the stability count follows from the reported inertia and charge response", async () => {
  const result = await chargedAnalysis();
  const acceptance = (await caseJson("phase-c-charged-objecthood-v1.json")).acceptance;
  const positiveCounts = {};
  for (const scenario of result.scenarios) {
    const { values } = scenario.scientificResult;
    // d'' = -sym(dQ/dOmega); its eigenvalues are -(trace/2) +- radius.
    const offDiagonal = 0.5 * (values.charge_response_12 + values.charge_response_21);
    const mean = 0.5 * (values.charge_response_11 + values.charge_response_22);
    const radius = Math.hypot(
      0.5 * (values.charge_response_11 - values.charge_response_22),
      offDiagonal
    );
    const eigenvalues = [-mean + radius, -mean - radius];
    assert.ok(Math.min(...eigenvalues.map(Math.abs)) > 1e-3, `${scenario.id} response is degenerate`);
    const positive = eigenvalues.filter((value) => value > 0).length;
    positiveCounts[scenario.id] = positive;
    assert.equal(values.charge_hessian_positive_count, positive);
    assert.equal(values.charge_hessian_positive_count_half_step, positive);
    assert.ok(
      Math.abs(
        values.charge_response_11 * values.charge_response_22 - offDiagonal * offDiagonal -
        values.charge_hessian_determinant
      ) < 1e-8
    );
    const scale = Math.max(
      Math.abs(values.charge_response_11),
      Math.abs(values.charge_response_12),
      Math.abs(values.charge_response_21),
      Math.abs(values.charge_response_22)
    );
    assert.ok(
      values.charge_response_symmetry_defect <=
        acceptance.chargeResponseRelativeSymmetryDefectMaximum * scale
    );
    assert.equal(values.real_sector_near_zero_count, 1);
    assert.equal(values.phase_sector_near_zero_count, 2);
    const negative = values.real_sector_negative_count + values.phase_sector_negative_count;
    assert.equal(negative, 1);
    assert.equal(values.constrained_stability_flag, negative === positive ? 1 : 0);
  }
  assert.deepEqual(positiveCounts, {
    "inspected-stable-branch": 1,
    "inspected-unstable-branch": 0,
    "stiffer-quartic": 1,
    "weaker-coupling": 1,
    "asymmetric-frequencies": 1,
    "equal-effective-mass": 1,
    "phase-b-mass-ratios": 1,
    "near-threshold": 1
  });
});

test("an independent polynomial evaluation reproduces the vacuum bounds and the prior census", async () => {
  const result = await chargedAnalysis();
  for (const scenario of result.scenarios) {
    const parameters = scenario.parameters;
    const certificate = 27 * Math.min(...parameters.massSquared) * parameters.quarticCoefficient -
      8 * parameters.lambda ** 2;
    assert.ok(Math.abs(trueVacuumCertificateMargin(parameters) - certificate) < 1e-12);
    assert.ok(
      Math.abs(scenario.scientificResult.values.true_vacuum_certificate_margin - certificate) < 1e-9
    );
    assert.ok(certificate >= 0, `${scenario.id} is not vacuum-certified`);
    // Outside radius 8 lambda / (3 sqrt(3) g) the quartic term dominates the
    // cubic bound, so the cube [0, 4]^3 contains every point that could be
    // negative. The declared potential must be non-negative on all of it.
    assert.ok(8 * parameters.lambda / (3 * Math.sqrt(3) * parameters.quarticCoefficient) < 4);
    let minimum = Infinity;
    for (let a = 0; a <= 100; a += 1) {
      for (let b = 0; b <= 100; b += 1) {
        for (let c = 0; c <= 100; c += 1) {
          const value = alignedPotential([0.04 * a, 0.04 * b, 0.04 * c], parameters);
          if (value < minimum) minimum = value;
        }
      }
    }
    assert.equal(minimum, 0, `${scenario.id} potential drops below the vacuum`);
  }

  assert.equal(result.priorStaticVacuumCensus.length, 9);
  for (const record of result.priorStaticVacuumCensus) {
    const sum = record.massSquared[0] + record.massSquared[1] + record.massSquared[2];
    const witness = 8 * record.lambda ** 2 - 9 * record.quarticCoefficient * sum;
    const certificate = 27 * Math.min(...record.massSquared) * record.quarticCoefficient -
      8 * record.lambda ** 2;
    assert.ok(Math.abs(falseVacuumWitnessMargin(record) - witness) < 1e-12);
    assert.ok(Math.abs(record.falseVacuumWitnessMargin - witness) < 1e-9);
    assert.ok(Math.abs(record.trueVacuumCertificateMargin - certificate) < 1e-9);
    if (record.scenarioId === "uncoupled-vacuum") {
      assert.equal(record.vacuum, "true-vacuum-certified");
      assert.ok(certificate >= 0);
      continue;
    }
    assert.equal(record.vacuum, "false-vacuum-witnessed");
    assert.ok(witness > 0);
    // The witness point on the symmetric ray lies below the vacuum energy.
    const amplitude = 4 * record.lambda / (9 * record.quarticCoefficient);
    assert.ok(alignedPotential([amplitude, amplitude, amplitude], record) < 0);
  }
  assert.deepEqual(
    result.priorStaticVacuumCensus
      .filter((record) => record.vacuum === "true-vacuum-certified")
      .map((record) => record.scenarioId),
    ["uncoupled-vacuum"]
  );
});

test("the block inertia count matches closed-form spectra", () => {
  assert.equal(symmetricNegativeCount3([2, 1, 0, 2, 1, 2]), 0);
  assert.equal(symmetricNegativeCount3([-2, -1, 0, -2, -1, -2]), 3);
  assert.equal(symmetricNegativeCount3([0, 1, 1, 0, 1, 0]), 2);
  assert.equal(symmetricNegativeCount3([-1, 0, 0, 2, 0, 3]), 1);

  // A (x) I + off * (I (x) T) with T the path adjacency has the eigenvalues
  // a_j + 2 * off * cos(k * pi / (N + 1)).
  const blockEigenvalues = [2 - Math.SQRT2, 2, 2 + Math.SQRT2];
  const blockCount = 37;
  const offDiagonal = -1.7;
  const blocks = new Float64Array(6 * blockCount);
  for (let block = 0; block < blockCount; block += 1) blocks.set([2, 1, 0, 2, 1, 2], 6 * block);
  const spectrum = [];
  for (let mode = 1; mode <= blockCount; mode += 1) {
    for (const value of blockEigenvalues) {
      spectrum.push(value + 2 * offDiagonal * Math.cos(mode * Math.PI / (blockCount + 1)));
    }
  }
  const counts = [];
  for (const shift of [-7.1, -6.3, -3.1, -1.45, -0.37, 0.61, 1.9, 3.3]) {
    assert.ok(Math.min(...spectrum.map((value) => Math.abs(value + shift))) > 1e-6);
    const expected = spectrum.filter((value) => value + shift < 0).length;
    assert.equal(blockTridiagonalNegativeCount(blocks, offDiagonal, shift), expected);
    counts.push(expected);
  }
  assert.equal(counts[0], 3 * blockCount);
  assert.equal(counts[counts.length - 1], 0);
  assert.ok(new Set(counts).size >= 6);
});

test("an independent scalar factorization reproduces the sector counts from the frozen profiles", async () => {
  const result = await chargedAnalysis();
  const tolerance = (await caseJson("phase-c-charged-objecthood-v1.json")).parameters.kernelTolerance;
  for (const scenario of result.scenarios) {
    const { values } = scenario.scientificResult;
    const counts = {};
    for (const sector of ["real", "phase"]) {
      const band = sectorBand(scenario.visualization.stationary, scenario.parameters, sector);
      const below = negativePivotCount(band, tolerance);
      const upTo = negativePivotCount(band, -tolerance);
      // A pivot near zero would make the count ill-defined.
      assert.ok(Math.min(below.smallest, upTo.smallest) > 1e-3, `${scenario.id} ${sector}`);
      counts[sector] = { negative: below.negatives, nearZero: upTo.negatives - below.negatives };
    }
    assert.deepEqual(counts, {
      real: {
        negative: values.real_sector_negative_count,
        nearZero: values.real_sector_near_zero_count
      },
      phase: {
        negative: values.phase_sector_negative_count,
        nearZero: values.phase_sector_near_zero_count
      }
    }, scenario.id);
  }
});

test("the frozen profiles reproduce the reported charges, Gamma and stationarity", async () => {
  const result = await chargedAnalysis();
  for (const scenario of result.scenarios) {
    const { values } = scenario.scientificResult;
    const parameters = scenario.parameters;
    const { dx, x, components, halfWidth, intervals } = scenario.visualization.stationary;
    const size = components[0].length;
    assert.equal(size, intervals - 1);
    assert.equal(x.length, size);
    assert.equal(dx, 2 * halfWidth / intervals);
    assert.equal(x[0], -halfWidth + dx);
    assert.equal(x[size - 1], halfWidth - dx);
    const effective = effectiveMassSquared(parameters);
    assert.ok(Math.abs(Math.min(...effective) - values.evanescence_minimum) < 1e-9);
    assert.ok(Math.min(...effective) > 0);
    assert.ok(
      Math.abs(
        Math.abs(parameters.frequencies[0] + parameters.frequencies[1] + parameters.frequencies[2]) -
        values.frequency_balance_abs
      ) < 1e-9
    );

    let gamma = 0;
    let peakDensity = 0;
    let residual = 0;
    const norms = [0, 0, 0];
    for (let index = 0; index < size; index += 1) {
      const f = components.map((component) => component[index]);
      const sumSquared = f[0] * f[0] + f[1] * f[1] + f[2] * f[2];
      gamma += (f[0] + f[1] + f[2]) ** 2;
      if (sumSquared > peakDensity) peakDensity = sumSquared;
      for (let component = 0; component < 3; component += 1) {
        const field = components[component];
        assert.ok(Math.abs(f[component] - field[size - 1 - index]) <= 2e-6);
        norms[component] += f[component] * f[component];
        const left = index === 0 ? 0 : field[index - 1];
        const right = index === size - 1 ? 0 : field[index + 1];
        const product = f[(component + 1) % 3] * f[(component + 2) % 3];
        const entry = -(left - 2 * f[component] + right) / (dx * dx) +
          effective[component] * f[component] -
          2 * parameters.lambda * product +
          parameters.quarticCoefficient * sumSquared * f[component];
        if (Math.abs(entry) > residual) residual = Math.abs(entry);
      }
    }
    gamma *= dx;
    const numbers = norms.map((norm, index) => parameters.frequencies[index] * norm * dx);
    // The frozen profile is rounded to 1e-6 per point: the integrals agree to
    // about 1e-5, and the second difference to 4 * 0.5e-6 / dx^2 < 2e-4.
    assert.ok(Math.abs(gamma - values.gamma_fine) < 5e-5, scenario.id);
    assert.ok(Math.abs(numbers[0] - numbers[2] - values.charge_1_fine) < 1e-5, scenario.id);
    assert.ok(Math.abs(numbers[1] - numbers[2] - values.charge_2_fine) < 1e-5, scenario.id);
    assert.ok(Math.abs(peakDensity - values.peak_density_fine) < 1e-5, scenario.id);
    assert.ok(residual < 2e-4, scenario.id);
    assert.ok(gamma > 1, scenario.id);
    assert.ok(Math.max(Math.abs(values.charge_1_fine), Math.abs(values.charge_2_fine)) > 0.1);
  }
});

test("an analytic continuum envelope independently matches the equal-effective-mass state", async () => {
  const result = await chargedAnalysis();
  const scenario = scenarioById(result, "equal-effective-mass");
  const { values } = scenario.scientificResult;
  const parameters = scenario.parameters;
  const effective = effectiveMassSquared(parameters);
  assert.ok(Math.max(...effective) - Math.min(...effective) < 1e-12);
  // With one effective mass mu the three envelopes coincide and solve
  // -f'' + mu f - 2 lambda f^2 + 3 g f^3 = 0, whose first integral
  // f'^2 = mu f^2 - alpha f^3 + beta f^4 has the localized solution below.
  const mu = effective[0];
  const alpha = 4 * parameters.lambda / 3;
  const beta = 1.5 * parameters.quarticCoefficient;
  const root = Math.sqrt(alpha * alpha - 4 * beta * mu);
  const envelope = (position) => 2 * mu / (alpha + root * Math.cosh(Math.sqrt(mu) * position));

  let analyticResidual = 0;
  const step = 1e-3;
  for (let position = -6; position <= 6; position += 0.37) {
    const value = envelope(position);
    const second = (envelope(position - step) - 2 * value + envelope(position + step)) / (step * step);
    analyticResidual = Math.max(analyticResidual, Math.abs(
      -second + mu * value - 2 * parameters.lambda * value * value +
      3 * parameters.quarticCoefficient * value ** 3
    ));
  }
  assert.ok(analyticResidual < 1e-6);

  const { x, components } = scenario.visualization.stationary;
  let pointwise = 0;
  for (let index = 0; index < x.length; index += 1) {
    for (const component of components) {
      pointwise = Math.max(pointwise, Math.abs(component[index] - envelope(x[index])));
    }
  }
  assert.ok(pointwise < 5e-4);

  let continuumGamma = 0;
  const quadratureStep = 1 / 512;
  for (let sample = -24 * 512; sample <= 24 * 512; sample += 1) {
    continuumGamma += 9 * envelope(sample * quadratureStep) ** 2 * quadratureStep;
  }
  const continuumPeakDensity = 3 * envelope(0) ** 2;
  assert.ok(Math.abs(continuumGamma - 8.67741) < 1e-5);
  assert.ok(Math.abs(continuumPeakDensity - 0.726290) < 1e-6);
  assert.ok(Math.abs(values.gamma_fine - continuumGamma) / continuumGamma < 5e-4);
  assert.ok(Math.abs(values.peak_density_fine - continuumPeakDensity) / continuumPeakDensity < 5e-4);
  // Second-order convergence: Richardson extrapolation of the two grids
  // removes the leading discretization error.
  const extrapolated = (4 * values.gamma_fine - values.gamma_coarse) / 3;
  assert.ok(Math.abs(extrapolated - continuumGamma) < 1e-5);
  const errorRatio = (values.gamma_coarse - continuumGamma) / (values.gamma_fine - continuumGamma);
  assert.ok(Math.abs(errorRatio - 4) < 0.05);
  // N_i = omega_i * integral f^2 and Gamma = 9 * integral f^2.
  const expectedCharge =
    (parameters.frequencies[0] - parameters.frequencies[2]) * values.gamma_fine / 9;
  assert.ok(Math.abs(values.charge_1_fine - expectedCharge) < 1e-8);
  assert.ok(Math.abs(values.charge_2_fine - expectedCharge) < 1e-8);
});

test("the frozen dynamic traces are finite, ordered and consistent with the reported departures", async () => {
  const result = await chargedAnalysis();
  const model = await caseJson("phase-c-charged-objecthood-v1.json");
  const { dynamicDuration, shapeBandFactor, shapeSampleInterval, traceCount } = model.parameters;
  const expectedIds = [
    PHASE_C_CHARGED_CONTROL_PROBE,
    ...model.perturbations.map((perturbation) => perturbation.id)
  ];
  for (const scenario of result.scenarios) {
    const { values } = scenario.scientificResult;
    const probes = scenario.visualization.dynamics;
    assert.deepEqual(probes.map((probe) => probe.id), expectedIds);
    let departures = 0;
    let worst = 1;
    for (const probe of probes) {
      const prefix = probeQuantityPrefix(probe.id);
      assert.equal(probe.steps, 2 * model.parameters.dynamicBaseSteps);
      assert.equal(probe.dt * probe.steps, dynamicDuration);
      assert.ok(Math.abs(probe.worstExcursion - values[`${prefix}_shape_excursion_space_refined`]) <= 1e-6);
      assert.equal(probe.departureTime, values[`${prefix}_departure_time_space_refined`]);
      assert.equal(probe.departed, probe.departureTime >= 0);
      assert.equal(probe.trace[0].time, 0);
      for (let index = 0; index < probe.trace.length; index += 1) {
        const sample = probe.trace[index];
        assert.ok(Number.isFinite(sample.peakRatio) && sample.peakRatio > 0);
        assert.ok(Number.isFinite(sample.radiusRatio) && sample.radiusRatio > 0);
        if (index > 0) assert.ok(sample.time > probe.trace[index - 1].time);
        // Every recorded sample precedes a departure, so it lies in the band.
        const excursion = Math.max(
          sample.peakRatio,
          1 / sample.peakRatio,
          sample.radiusRatio,
          1 / sample.radiusRatio
        );
        assert.ok(excursion <= shapeBandFactor + 1e-6);
        assert.ok(excursion <= probe.worstExcursion + 1e-5);
      }
      if (probe.departed) {
        departures += 1;
        assert.ok(probe.worstExcursion > shapeBandFactor);
        assert.ok(probe.departureTime > 0 && probe.departureTime <= dynamicDuration);
        const samples = probe.departureTime / shapeSampleInterval;
        assert.ok(Math.abs(samples - Math.round(samples)) < 1e-9);
        assert.ok(probe.trace[probe.trace.length - 1].time <= probe.departureTime);
      } else {
        assert.equal(probe.departureTime, -1);
        assert.ok(probe.worstExcursion <= shapeBandFactor);
        assert.equal(probe.trace.length, traceCount);
        assert.equal(probe.trace[traceCount - 1].time, dynamicDuration);
      }
      if (probe.worstExcursion > worst) worst = probe.worstExcursion;
    }
    assert.equal(departures, values.dynamic_departure_count_space_refined);
    assert.ok(Math.abs(worst - values.dynamic_worst_shape_excursion_space_refined) <= 1e-6);
    for (const resolution of ["base", "time_refined", "space_refined"]) {
      assert.ok(
        values[`dynamic_max_energy_relative_drift_${resolution}`] <=
          model.acceptance.energyRelativeDriftMaximum
      );
      assert.ok(
        values[`dynamic_max_charge_relative_drift_${resolution}`] <=
          model.acceptance.chargeRelativeDriftMaximum
      );
    }
  }
  for (const id of QUALIFIED) {
    const { values } = scenarioById(result, id).scientificResult;
    assert.equal(values.dynamic_departure_count_space_refined, 0);
    // The qualified states stay well inside the factor-two band.
    assert.ok(values.dynamic_worst_shape_excursion_space_refined < 1.25);
  }
  assert.equal(
    scenarioById(result, "inspected-unstable-branch")
      .scientificResult.values.dynamic_departure_count_space_refined,
    7
  );
});

test("the charged solver stays outside the kernel, avoids library transcendentals and binds all evidence", async () => {
  const source = await caseText("solver/phase-c-charged-solver.mjs");
  assert.doesNotMatch(source, /packages\/kernel|@onto2d\/kernel/);
  // Bit-reproducibility across platforms relies on correctly rounded IEEE
  // operations only: no library exp, cos, cosh, pow or the ** operator.
  assert.doesNotMatch(source, /Math\.(?!(?:abs|sqrt|max|min|floor|round)\b)[A-Za-z0-9_]+/);
  assert.doesNotMatch(source, /\*\*/);
  assert.deepEqual(
    {
      id: phaseCChargedSolver.id,
      version: phaseCChargedSolver.version,
      method: phaseCChargedSolver.method
    },
    PHASE_C_CHARGED_SOLVER
  );

  const result = await chargedAnalysis();
  assert.deepEqual(result.solver, PHASE_C_CHARGED_SOLVER);
  const evidenceIds = evidenceIdsOf(result);
  for (const scenario of result.scenarios) {
    assert.equal(scenario.requestBinding.request.parameters.modelHash, result.modelHash);
    assert.deepEqual(scenario.requestBinding.request.parameters.evidenceIds, evidenceIds);
    const rebound = createOracleRequestBinding(scenario.requestBinding.request);
    assert.equal(rebound.requestHash, scenario.requestBinding.requestHash);
    assert.deepEqual(
      validateOracleResponse(rebound, scenario.oracleResponse, { evidenceIds }),
      scenario.oracleValidation
    );
  }
});

test("charged Phase-C input and dependency drift fail closed", async () => {
  const model = await caseJson("phase-c-charged-objecthood-v1.json");
  const result = await chargedAnalysis();

  const fewerScenarios = structuredClone(model);
  fewerScenarios.scenarios.pop();
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: fewerScenarios }),
    /must freeze exactly 8 scenarios/
  );

  const fewerPerturbations = structuredClone(model);
  fewerPerturbations.perturbations.pop();
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: fewerPerturbations }),
    /must freeze exactly 6 perturbations/
  );

  const promotedControl = structuredClone(model);
  promotedControl.scenarios.find((scenario) => scenario.id === "inspected-stable-branch").eligible = true;
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: promotedControl }),
    /inspected control cannot be eligible/
  );

  const undeclaredExploration = structuredClone(model);
  undeclaredExploration.exploration.status = "none";
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: undeclaredExploration }),
    /must declare the prior exploratory inspection/
  );

  const otherSolver = structuredClone(model);
  otherSolver.oracle.solver.version = "1.0.1";
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: otherSolver }),
    /solver identity does not match/
  );

  const staleDependency = structuredClone(model);
  staleDependency.dependencies[0].analysisHash = `sha256:${"0".repeat(64)}`;
  await assert.rejects(
    runPhaseCChargedObjecthood({ model: staleDependency }),
    /analysis hash differs from the model/
  );

  // A changed scientific input is a different request: the frozen response
  // cannot be attached to it.
  const scenario = scenarioById(result, "stiffer-quartic");
  const changedRequest = structuredClone(scenario.requestBinding.request);
  changedRequest.parameters.quarticCoefficient = 1.61;
  const changedBinding = createOracleRequestBinding(changedRequest);
  assert.notEqual(changedBinding.requestHash, scenario.requestBinding.requestHash);
  assert.throws(
    () => validateOracleResponse(changedBinding, scenario.oracleResponse, {
      evidenceIds: evidenceIdsOf(result)
    }),
    /bound to a different request/
  );

  // A propagating component has no localized stationary state. The solver
  // reports a failure with no values and the kernel records it as
  // indeterminate, never as a rejected or accepted measurement.
  const propagatingRequest = structuredClone(scenario.requestBinding.request);
  propagatingRequest.parameters.frequencies = [1.2, 0.4, -1.6];
  const propagatingBinding = createOracleRequestBinding(propagatingRequest);
  const response = await phaseCChargedSolver.evaluate({
    requestHash: propagatingBinding.requestHash,
    request: propagatingBinding.request
  });
  assert.equal(response.convergence, "failed");
  assert.deepEqual(response.values, {});
  const validation = validateOracleResponse(propagatingBinding, response, {
    evidenceIds: evidenceIdsOf(result)
  });
  assert.equal(validation.status, "indeterminate");
  assert.deepEqual(validation.acceptedValues ?? {}, {});
});

test("the charged study leaves the frozen dispositions and Phase D untouched", async () => {
  const result = await chargedAnalysis();
  assert.equal(result.conclusion.phaseD, "eligible-for-separate-preregistration");
  assert.equal(result.conclusion.priorStaticObjecthoodDispositionChanged, false);
  assert.equal(result.conclusion.integratedLevelZeroDispositionChanged, false);
  assert.equal(result.conclusion.completeParameterOrPerturbationSpaceCovered, false);
  assert.equal(result.conclusion.independentReviewCompleted, false);
  assert.equal(result.conclusion.empiricalValidationClaimed, false);
  assert.equal(
    result.exploration.status,
    "unregistered-exploratory-run-inspected-before-preregistration"
  );
  for (const dependency of result.dependencies) {
    assert.equal(dependency.exactReproductionVerified, true);
  }
  const integrated = await caseJson("artifacts/level-zero-validation-v3.json");
  assert.equal(integrated.conclusion.declaredModelLevelZeroValidated, false);
  assert.equal(integrated.conclusion.priorDispositionChanged, false);
  assert.equal(
    integrated.dependencies.some((dependency) => /charged/.test(JSON.stringify(dependency))),
    false
  );
});

test("the frozen charged artifact, report and freeze record are exact reproductions", async () => {
  const frozen = await caseJson("artifacts/phase-c-charged-objecthood-v1.json");
  const result = await chargedAnalysis();
  assert.deepEqual(result, frozen);

  const report = await caseText("PHASE_C_CHARGED_OBJECTHOOD.md");
  assert.match(report, new RegExp(result.modelHash));
  assert.match(report, new RegExp(result.analysisHash));
  for (const dependency of result.dependencies) {
    assert.match(report, new RegExp(dependency.analysisHash));
  }
  assert.match(report, new RegExp(result.source.doi));
  assert.match(report, new RegExp(result.conclusion.result));
  assert.match(report, new RegExp(result.conclusion.phaseD));
  assert.match(report, /secondary hypothesis is \*\*not\s+supported\*\*/);
  assert.match(report, /Independent review is pending/);

  // The freeze is recorded as digests of the four files written before the
  // confirmatory run. Any later edit to one of them breaks this record.
  for (const name of [
    "phase-c-charged-objecthood-v1.json",
    "PHASE_C_CHARGED_PREREGISTRATION.md",
    "solver/phase-c-charged-solver.mjs",
    "run-phase-c-charged-objecthood.mjs"
  ]) {
    const digest = sha256Hex(await caseBytes(name));
    assert.ok(report.includes(`sha256:${digest}`), `${name} differs from its freeze digest`);
  }

  // Determinants quoted in the post-hoc note.
  for (const id of ["near-threshold", "inspected-stable-branch", "asymmetric-frequencies"]) {
    const determinant = scenarioById(result, id).scientificResult.values.charge_hessian_determinant;
    assert.ok(report.includes(`\`${determinant.toPrecision(6)}\``), `determinant of ${id}`);
  }
  const passingDeterminants = result.scenarios
    .filter((scenario) => scenario.scientificResult.allNecessaryGatesPassed)
    .map((scenario) => Math.abs(scenario.scientificResult.values.charge_hessian_determinant));
  const nearThresholdDeterminant = Math.abs(
    scenarioById(result, "near-threshold").scientificResult.values.charge_hessian_determinant
  );
  assert.equal(passingDeterminants.length, 6);
  assert.ok(Math.min(...passingDeterminants) / nearThresholdDeterminant > 29);

  for (const scenario of result.scenarios) {
    const { values } = scenario.scientificResult;
    const departed = values.dynamic_departure_count_space_refined;
    const row = [
      `\`${scenario.id}\``,
      scenario.eligible ? "yes" : "no",
      `\`${values.gamma_fine.toPrecision(6)}\``,
      String(values.real_sector_negative_count + values.phase_sector_negative_count),
      String(values.charge_hessian_positive_count),
      values.constrained_stability_flag === 1 ? "pass" : "fail",
      `${departed} of 7`,
      departed === 0
        ? `\`${values.dynamic_worst_shape_excursion_space_refined.toPrecision(6)}\``
        : "departed"
    ].join(" | ");
    assert.ok(report.includes(`| ${row} |`), `report row differs for ${scenario.id}`);
  }
});
