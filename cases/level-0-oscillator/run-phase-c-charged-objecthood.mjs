import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import {
  canonicalize,
  createOracleRequestBinding,
  hashCanonical,
  validateOracleResponse
} from "../../packages/kernel/src/index.js";
import { verifyLevelZeroSource } from "./run.mjs";
import { runPhaseCObjecthoodSearch } from "./run-phase-c-objecthood.mjs";
import { runPhaseCExpandedSearch } from "./run-phase-c-expanded-search.mjs";
import {
  PHASE_C_CHARGED_CONTROL_PROBE,
  PHASE_C_CHARGED_SOLVER,
  falseVacuumWitnessMargin,
  phaseCChargedSolver,
  probeQuantityPrefix,
  runPhaseCChargedNumerics,
  trueVacuumCertificateMargin
} from "./solver/phase-c-charged-solver.mjs";
import { portableMetricValue } from "./solver/portable-reporting.mjs";

const caseRoot = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(caseRoot, "../..");
const MODEL_DOMAIN = "onto2d:level-zero-phase-c-charged-model:v1";
const ANALYSIS_DOMAIN = "onto2d:level-zero-phase-c-charged-analysis:v1";
const SCENARIO_COUNT = 8;
const PERTURBATION_COUNT = 6;
const RESOLUTIONS = ["base", "time_refined", "space_refined"];
const EXPECTATIONS = new Set(["expected-pass", "expected-fail", "predicted-pass", "predicted-fail", "open"]);
const RESIDUAL_IDS = new Set([
  "stationarity_max_residual_coarse",
  "stationarity_max_residual_fine",
  "stationarity_max_residual_extended",
  "stationarity_max_residual_refined"
]);

function validateModel(model) {
  if (
    !model ||
    model.schemaVersion !== "1" ||
    model.caseId !== "level-0-oscillator" ||
    model.modelId !== "level-0-phase-c-charged-objecthood" ||
    model.modelVersion !== "1.0.0" ||
    model.status !== "preregistered-bounded-extension" ||
    model.preregisteredAt !== "2026-11-13"
  ) {
    throw new TypeError("Unsupported charged Level-0 Phase-C model.");
  }
  if (canonicalize(model.oracle?.solver) !== canonicalize(PHASE_C_CHARGED_SOLVER)) {
    throw new TypeError("Charged Phase-C solver identity does not match the model.");
  }
  if (!Array.isArray(model.scenarios) || model.scenarios.length !== SCENARIO_COUNT) {
    throw new TypeError(`Charged Phase-C model must freeze exactly ${SCENARIO_COUNT} scenarios.`);
  }
  if (!Array.isArray(model.perturbations) || model.perturbations.length !== PERTURBATION_COUNT) {
    throw new TypeError(`Charged Phase-C model must freeze exactly ${PERTURBATION_COUNT} perturbations.`);
  }
  if (!Array.isArray(model.dependencies) || model.dependencies.length !== 2) {
    throw new TypeError("Charged Phase-C model must bind both prior Phase-C artifacts.");
  }
  if (!model.stoppingRule || !model.hypotheses?.outcomePolicy) {
    throw new TypeError("Charged Phase-C model must freeze hypotheses and a stopping rule.");
  }
  if (model.exploration?.status !== "unregistered-exploratory-run-inspected-before-preregistration") {
    throw new TypeError("Charged Phase-C model must declare the prior exploratory inspection.");
  }
  const identifiers = new Set();
  for (const scenario of model.scenarios) {
    if (typeof scenario.id !== "string" || identifiers.has(scenario.id)) {
      throw new TypeError("Charged Phase-C scenarios require unique identifiers.");
    }
    identifiers.add(scenario.id);
    if (typeof scenario.eligible !== "boolean" || !EXPECTATIONS.has(scenario.expectation)) {
      throw new TypeError(`Charged Phase-C scenario ${scenario.id} has an invalid declaration.`);
    }
    const control = scenario.role === "inspected-control";
    if (control === scenario.eligible) {
      throw new TypeError("An inspected control cannot be eligible and every other scenario must be.");
    }
    if (control !== scenario.expectation.startsWith("expected-")) {
      throw new TypeError("Only inspected controls carry an expected outcome.");
    }
  }
  return model;
}

function resolvedRepositoryPath(repositoryPath) {
  const resolved = path.resolve(repositoryRoot, repositoryPath);
  if (!resolved.startsWith(`${repositoryRoot}${path.sep}`)) {
    throw new TypeError("Charged Phase-C dependency path leaves the repository.");
  }
  return resolved;
}

async function exactArtifact(dependency, reproduce) {
  const artifact = JSON.parse(await readFile(
    resolvedRepositoryPath(dependency.repositoryPath),
    "utf8"
  ));
  const reproduction = await reproduce();
  if (canonicalize(artifact) !== canonicalize(reproduction)) {
    throw new TypeError(`${dependency.id} differs from its exact reproduction.`);
  }
  if (artifact.analysisHash !== dependency.analysisHash) {
    throw new TypeError(`${dependency.id} analysis hash differs from the model.`);
  }
  return artifact;
}

function vacuumRecord(studyId, scenarioId, parameters) {
  const certificate = trueVacuumCertificateMargin(parameters);
  const witness = falseVacuumWitnessMargin(parameters);
  return {
    studyId,
    scenarioId,
    massSquared: parameters.massSquared,
    lambda: parameters.lambda,
    quarticCoefficient: parameters.quarticCoefficient,
    trueVacuumCertificateMargin: Number.parseFloat(certificate.toPrecision(12)),
    falseVacuumWitnessMargin: Number.parseFloat(witness.toPrecision(12)),
    vacuum: certificate >= 0
      ? "true-vacuum-certified"
      : witness > 0
        ? "false-vacuum-witnessed"
        : "undetermined-by-declared-bounds"
  };
}

async function verifyDependencies(model) {
  const objecthoodDependency = model.dependencies.find(
    (dependency) => dependency.id === "phase-c-objecthood-search-v2"
  );
  const expandedDependency = model.dependencies.find(
    (dependency) => dependency.id === "phase-c-expanded-search-v2"
  );
  if (!objecthoodDependency || !expandedDependency) {
    throw new TypeError("Charged Phase-C dependency identifiers are incomplete.");
  }
  const objecthood = await exactArtifact(objecthoodDependency, runPhaseCObjecthoodSearch);
  const expanded = await exactArtifact(expandedDependency, runPhaseCExpandedSearch);
  const sourceScenario = objecthood.scenarios.find(
    (scenario) => scenario.id === objecthoodDependency.requiredScenarioId
  );
  if (
    !sourceScenario ||
    sourceScenario.candidateId !== objecthoodDependency.requiredCandidateId ||
    sourceScenario.scientificResult.trialObjecthoodPassed !== false
  ) {
    throw new TypeError("Charged Phase-C source scenario differs from its declared dependency.");
  }
  if (
    expanded.conclusion.result !== expandedDependency.requiredResult ||
    expanded.conclusion.qualifiedScenarioIds.length !== 0
  ) {
    throw new TypeError("Charged Phase-C expanded-search dependency has an unexpected result.");
  }
  // Parameter-only census of the frozen static scenarios. Their mass-squared
  // values, coupling and quartic coefficient are read from the verified
  // artifacts; the frozen objecthood search uses one common mass-squared value.
  const census = [
    ...objecthood.scenarios.map((scenario) => vacuumRecord(objecthoodDependency.id, scenario.id, {
      massSquared: new Array(3).fill(scenario.requestBinding.request.parameters.massSquared),
      lambda: scenario.requestBinding.request.parameters.lambda,
      quarticCoefficient: scenario.requestBinding.request.parameters.quarticCoefficient
    })),
    ...expanded.scenarios.map((scenario) => vacuumRecord(expandedDependency.id, scenario.id, {
      massSquared: scenario.parameters.massSquared,
      lambda: scenario.parameters.lambda,
      quarticCoefficient: scenario.parameters.quarticCoefficient
    }))
  ];
  return {
    records: [
      {
        ...objecthoodDependency,
        modelHash: objecthood.modelHash,
        sourceHash: objecthood.sourceHash,
        exactReproductionVerified: true
      },
      {
        ...expandedDependency,
        modelHash: expanded.modelHash,
        sourceHash: expanded.sourceHash,
        exactReproductionVerified: true
      }
    ],
    candidate: sourceScenario.requestBinding.request.candidate,
    priorStaticVacuumCensus: census
  };
}

function requestFor(model, scenario, modelHash, evidenceIds, candidate) {
  return createOracleRequestBinding({
    candidate,
    quantities: model.oracle.quantities,
    parameters: {
      modelId: model.modelId,
      modelVersion: model.modelVersion,
      modelHash,
      scenarioId: scenario.id,
      eligible: scenario.eligible,
      ...model.parameters,
      massSquared: scenario.massSquared,
      lambda: scenario.lambda,
      quarticCoefficient: scenario.quarticCoefficient,
      frequencies: scenario.frequencies,
      perturbations: model.perturbations,
      evidenceIds
    },
    toleranceTarget: model.oracle.toleranceTarget,
    solver: model.oracle.solver
  });
}

function quantityValues(validation) {
  return Object.fromEntries(Object.entries(validation.acceptedValues).map(([id, quantity]) => [
    id,
    quantity.value
  ]));
}

function expectationOutcome(scenario, verdict) {
  if (scenario.expectation === "open") return "no-declared-expectation";
  const expectedPass = scenario.expectation.endsWith("-pass");
  if (verdict === "indeterminate") return "indeterminate";
  return (verdict === "passed") === expectedPass ? "as-declared" : "contrary-to-declaration";
}

function indeterminateScenario(scenario, reason) {
  return {
    values: {},
    gates: {},
    numericalQualityPassed: false,
    failedNecessaryGates: [],
    failedNumericalChecks: [reason],
    allNecessaryGatesPassed: false,
    trialObjecthoodPassed: false,
    criterionDynamicsAgreement: "not-evaluated",
    expectationOutcome: expectationOutcome(scenario, "indeterminate"),
    status: "numerically-indeterminate"
  };
}

function classifyScenario(scenario, values, acceptance) {
  const all = (ids, test) => ids.every((id) => test(values[id]));
  const resolutionIds = (prefix) => RESOLUTIONS.map((id) => `${prefix}_${id}`);

  const vacuumAdmissibilityPassed =
    values.true_vacuum_certificate_margin >= acceptance.trueVacuumCertificateMinimum;
  const frequencyBalancePassed = values.frequency_balance_abs <= acceptance.frequencyBalanceMaximum;
  const evanescencePassed = values.evanescence_minimum > acceptance.evanescenceMinimumExclusive;
  const stationarityPassed = all([
    "stationarity_max_residual_coarse",
    "stationarity_max_residual_fine",
    "stationarity_max_residual_extended",
    "stationarity_max_residual_refined"
  ], (value) => value <= acceptance.stationarityMaxResidual);
  const gridConvergencePassed =
    values.gamma_grid_relative_change <= acceptance.gammaGridRelativeChangeMaximum &&
    values.profile_grid_relative_l2 <= acceptance.profileGridRelativeL2Maximum;
  const nontrivialGammaPassed = values.gamma_fine >= acceptance.gammaMinimum;
  const nontrivialChargePassed = Math.max(
    Math.abs(values.charge_1_fine),
    Math.abs(values.charge_2_fine)
  ) >= acceptance.chargeMagnitudeMinimum;
  const intrinsicLocalizationPassed =
    values.gamma_domain_relative_change <= acceptance.gammaDomainRelativeChangeMaximum &&
    values.support_radius_relative_change <= acceptance.supportRadiusRelativeChangeMaximum;
  const symmetryKernelPassed =
    values.real_sector_near_zero_count === acceptance.realSectorNearZeroCount &&
    values.phase_sector_near_zero_count === acceptance.phaseSectorNearZeroCount;
  // The two off-diagonal central differences approximate the same mixed
  // derivative with different stencils, so their defect is judged relative to
  // the size of the response.
  const responseScale = Math.max(
    Math.abs(values.charge_response_11),
    Math.abs(values.charge_response_12),
    Math.abs(values.charge_response_21),
    Math.abs(values.charge_response_22)
  );
  const chargeResponsePassed =
    responseScale > 0 &&
    values.charge_response_symmetry_defect <=
      acceptance.chargeResponseRelativeSymmetryDefectMaximum * responseScale &&
    values.charge_hessian_positive_count === values.charge_hessian_positive_count_half_step;
  const constrainedStabilityPassed =
    values.constrained_stability_flag === acceptance.constrainedStabilityFlag;
  const controlPrefix = probeQuantityPrefix(PHASE_C_CHARGED_CONTROL_PROBE);
  // The departure pattern must agree across resolutions (a numerical check
  // below), so the space-refined control decides unperturbed persistence.
  const unperturbedPersistencePassed =
    values[`${controlPrefix}_departure_time_space_refined`] < 0;
  const dynamicBankPassed = all(
    resolutionIds("dynamic_departure_count"),
    (value) => value <= acceptance.departureCountMaximum
  );
  const conservationPassed =
    all(
      resolutionIds("dynamic_max_energy_relative_drift"),
      (value) => value <= acceptance.energyRelativeDriftMaximum
    ) &&
    all(
      resolutionIds("dynamic_max_charge_relative_drift"),
      (value) => value <= acceptance.chargeRelativeDriftMaximum
    );
  const dynamicRefinementPassed =
    values.dynamic_departure_pattern_agreement === acceptance.departurePatternAgreementFlag &&
    values.dynamic_time_relative_change <= acceptance.dynamicRefinementRelativeChangeMaximum &&
    values.dynamic_space_relative_change <= acceptance.dynamicRefinementRelativeChangeMaximum;

  const numericalChecks = {
    stationarity: stationarityPassed,
    "grid-convergence": gridConvergencePassed,
    "symmetry-kernel": symmetryKernelPassed,
    "charge-response": chargeResponsePassed,
    conservation: conservationPassed,
    "dynamic-refinement": dynamicRefinementPassed
  };
  const necessaryGates = {
    "vacuum-admissibility": vacuumAdmissibilityPassed,
    "frequency-balance": frequencyBalancePassed,
    evanescence: evanescencePassed,
    "nontrivial-gamma": nontrivialGammaPassed,
    "nontrivial-charge": nontrivialChargePassed,
    "intrinsic-localization": intrinsicLocalizationPassed,
    "charge-constrained-stability": constrainedStabilityPassed,
    "unperturbed-persistence": unperturbedPersistencePassed,
    "dynamic-bank": dynamicBankPassed
  };
  const failedNumericalChecks = Object.entries(numericalChecks)
    .filter(([, passed]) => !passed).map(([id]) => id);
  const failedNecessaryGates = Object.entries(necessaryGates)
    .filter(([, passed]) => !passed).map(([id]) => id);
  const numericalQualityPassed = failedNumericalChecks.length === 0;
  const allNecessaryGatesPassed = failedNecessaryGates.length === 0;
  const trialObjecthoodPassed =
    scenario.eligible && numericalQualityPassed && allNecessaryGatesPassed;
  const dynamicVerdict = unperturbedPersistencePassed && dynamicBankPassed;
  const verdict = !numericalQualityPassed
    ? "indeterminate"
    : allNecessaryGatesPassed ? "passed" : "rejected";
  return {
    values,
    gates: {
      vacuumAdmissibilityPassed,
      frequencyBalancePassed,
      evanescencePassed,
      stationarityPassed,
      gridConvergencePassed,
      nontrivialGammaPassed,
      nontrivialChargePassed,
      intrinsicLocalizationPassed,
      symmetryKernelPassed,
      chargeResponsePassed,
      constrainedStabilityPassed,
      unperturbedPersistencePassed,
      dynamicBankPassed,
      conservationPassed,
      dynamicRefinementPassed
    },
    numericalQualityPassed,
    failedNecessaryGates,
    failedNumericalChecks,
    allNecessaryGatesPassed,
    trialObjecthoodPassed,
    criterionDynamicsAgreement: !numericalQualityPassed
      ? "not-evaluated"
      : constrainedStabilityPassed === dynamicVerdict ? "agree" : "disagree",
    expectationOutcome: expectationOutcome(scenario, verdict),
    status: verdict === "indeterminate"
      ? "numerically-indeterminate"
      : verdict === "passed"
        ? scenario.eligible
          ? "trial-charged-objecthood-passed-within-declared-bank"
          : "control-passed-every-declared-gate"
        : "rejected-by-declared-necessary-gates"
  };
}

function portableReplay(metrics, parameters) {
  return Object.fromEntries(Object.entries(metrics).map(([id, value]) => [
    id,
    portableMetricValue(id, value, parameters, RESIDUAL_IDS)
  ]));
}

export async function runPhaseCChargedObjecthood({ model: suppliedModel } = {}) {
  const model = validateModel(suppliedModel ?? JSON.parse(await readFile(
    new URL("./phase-c-charged-objecthood-v1.json", import.meta.url),
    "utf8"
  )));
  const source = await verifyLevelZeroSource(model);
  const dependencies = await verifyDependencies(model);
  const sourceHash = source.sha256;
  const modelHash = hashCanonical(MODEL_DOMAIN, model);
  const evidenceIds = [
    sourceHash,
    ...dependencies.records.map((dependency) => dependency.analysisHash),
    modelHash
  ];
  const scenarios = [];
  for (const scenario of model.scenarios) {
    const requestBinding = requestFor(
      model,
      scenario,
      modelHash,
      evidenceIds,
      dependencies.candidate
    );
    const oracleResponse = await phaseCChargedSolver.evaluate({
      requestHash: requestBinding.requestHash,
      request: requestBinding.request
    });
    const oracleValidation = validateOracleResponse(
      requestBinding,
      oracleResponse,
      { evidenceIds }
    );
    let scientificResult;
    let visualization = null;
    if (oracleValidation.status !== "accepted") {
      scientificResult = indeterminateScenario(scenario, "oracle-reported-failure");
    } else {
      scientificResult = classifyScenario(
        scenario,
        quantityValues(oracleValidation),
        model.acceptance
      );
      const replay = runPhaseCChargedNumerics(requestBinding.request.parameters);
      if (
        canonicalize(portableReplay(
          replay.metrics,
          requestBinding.request.parameters
        )) !== canonicalize(scientificResult.values)
      ) {
        throw new TypeError(`${scenario.id} visualization replay differs from Oracle values.`);
      }
      visualization = replay.visualization;
    }
    scenarios.push({
      id: scenario.id,
      eligible: scenario.eligible,
      role: scenario.role,
      expectation: scenario.expectation,
      parameters: {
        massSquared: scenario.massSquared,
        lambda: scenario.lambda,
        quarticCoefficient: scenario.quarticCoefficient,
        frequencies: scenario.frequencies
      },
      requestBinding,
      oracleResponse,
      oracleValidation,
      scientificResult,
      visualization
    });
  }
  const eligible = scenarios.filter((scenario) => scenario.eligible);
  const controls = scenarios.filter((scenario) => !scenario.eligible);
  const qualified = eligible.filter((scenario) => scenario.scientificResult.trialObjecthoodPassed);
  const indeterminate = eligible.filter(
    (scenario) => scenario.scientificResult.status === "numerically-indeterminate"
  );
  const controlsBehavedAsDeclared = controls.every(
    (scenario) => scenario.scientificResult.expectationOutcome === "as-declared"
  );
  const evaluated = scenarios.filter(
    (scenario) => scenario.scientificResult.criterionDynamicsAgreement !== "not-evaluated"
  );
  const disagreeing = evaluated.filter(
    (scenario) => scenario.scientificResult.criterionDynamicsAgreement === "disagree"
  );
  const predicted = eligible.filter((scenario) => scenario.expectation !== "open");
  const result = !controlsBehavedAsDeclared || indeterminate.length > 0
    ? "bounded-search-indeterminate"
    : qualified.length > 0
      ? "bounded-positive-qualified-charged-branch"
      : "bounded-negative-no-qualified-charged-branch";
  const basis = {
    schemaVersion: "1",
    caseId: model.caseId,
    modelId: model.modelId,
    modelVersion: model.modelVersion,
    modelHash,
    sourceHash,
    source,
    dependencies: dependencies.records,
    exploration: model.exploration,
    inputMapping: model.inputMapping,
    preregistration: {
      date: model.preregisteredAt,
      hypotheses: model.hypotheses,
      stoppingRule: model.stoppingRule,
      scenarioCount: model.scenarios.length,
      eligibleScenarioCount: eligible.length,
      controlScenarioCount: controls.length,
      perturbationCount: model.perturbations.length
    },
    status: "completed-preregistered-bounded-extension",
    scope: model.scope,
    solver: PHASE_C_CHARGED_SOLVER,
    priorStaticVacuumCensus: dependencies.priorStaticVacuumCensus,
    scenarios,
    conclusion: {
      qualifiedScenarioIds: qualified.map((scenario) => scenario.id),
      indeterminateScenarioIds: indeterminate.map((scenario) => scenario.id),
      rejectedScenarioIds: eligible
        .filter((scenario) => scenario.scientificResult.status === "rejected-by-declared-necessary-gates")
        .map((scenario) => scenario.id),
      controlsBehavedAsDeclared,
      testedAllPreregisteredScenarios: scenarios.length === model.scenarios.length,
      testedAllPreregisteredPerturbations: scenarios.every((scenario) => (
        scenario.visualization === null ||
        scenario.visualization.dynamics.length === model.perturbations.length + 1
      )),
      secondaryHypothesis: {
        evaluatedScenarioCount: evaluated.length,
        disagreeingScenarioIds: disagreeing.map((scenario) => scenario.id),
        countAndDynamicBankAgreeOnEveryEvaluatedScenario: disagreeing.length === 0
      },
      predictions: {
        declaredCount: predicted.length,
        contraryScenarioIds: predicted
          .filter((scenario) => scenario.scientificResult.expectationOutcome === "contrary-to-declaration")
          .map((scenario) => scenario.id)
      },
      priorStaticObjecthoodDispositionChanged: false,
      integratedLevelZeroDispositionChanged: false,
      phaseD: qualified.length > 0 && result === "bounded-positive-qualified-charged-branch"
        ? "eligible-for-separate-preregistration"
        : "not-authorized",
      completeParameterOrPerturbationSpaceCovered: false,
      independentReviewCompleted: false,
      empiricalValidationClaimed: false,
      result
    }
  };
  return {
    ...basis,
    analysisHash: hashCanonical(ANALYSIS_DOMAIN, basis)
  };
}

function parseArguments(argv) {
  const options = {
    output: path.join(caseRoot, "artifacts", "phase-c-charged-objecthood-v1.json"),
    verify: false
  };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag === "--verify") options.verify = true;
    else if (flag === "--output" && argv[index + 1]) {
      options.output = path.resolve(argv[index + 1]);
      index += 1;
    } else {
      throw new Error(`Unknown or incomplete argument: ${flag}`);
    }
  }
  return options;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const options = parseArguments(process.argv.slice(2));
  const result = await runPhaseCChargedObjecthood();
  const serialized = `${JSON.stringify(result, null, 2)}\n`;
  if (options.verify) {
    const frozen = await readFile(options.output, "utf8");
    if (frozen !== serialized) {
      throw new Error("Frozen charged Phase-C artifact differs from reproduction.");
    }
    process.stdout.write(`Verified ${options.output}\n`);
  } else {
    await mkdir(path.dirname(options.output), { recursive: true });
    await writeFile(options.output, serialized, "utf8");
    process.stdout.write(`Wrote ${options.output}\n`);
  }
}
