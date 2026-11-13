import { defineScientificAdapter } from "../../../packages/scientific-adapter/src/index.js";
import {
  assertPortableQuantities,
  portableMetricValue,
  portableTraceValue,
  validatePortableReporting
} from "./portable-reporting.mjs";

// Rotating-phase ("charged") three-envelope states of the declared Phase-C
// energy. Every identity-bearing number is produced with IEEE addition,
// subtraction, multiplication, division and square root only. No exponential,
// trigonometric or power function is called, so long evolutions do not depend
// on a platform's transcendental-function implementation.

export const PHASE_C_CHARGED_SOLVER = Object.freeze({
  id: "onto2d-level-0-phase-c-charged",
  version: "1.0.0",
  method: "rotating-frame-block-newton-inertia-count-complex-verlet-portable-report-v1"
});

export const PHASE_C_CHARGED_CONTROL_PROBE = "unperturbed-control";

export const PHASE_C_CHARGED_SPATIAL_PROFILES = Object.freeze([
  "stationary-envelope",
  "squared-lorentzian-width-0.8-centered-at-1.5",
  "odd-squared-lorentzian-width-1-centered-at-minus-1.5"
]);

const CHARGED_RESIDUAL_IDS = new Set([
  "stationarity_max_residual_coarse",
  "stationarity_max_residual_fine",
  "stationarity_max_residual_extended",
  "stationarity_max_residual_refined"
]);

const COMPONENTS = 3;
const PERTURBATION_COUNT = 6;
const RESOLUTIONS = Object.freeze(["base", "time_refined", "space_refined"]);
// 1/(2k)! for k = 0..8: the even Taylor coefficients of cosh.
const COSH_SERIES = Object.freeze([
  1,
  1 / 2,
  1 / 24,
  1 / 720,
  1 / 40320,
  1 / 3628800,
  1 / 479001600,
  1 / 87178291200,
  1 / 20922789888000
]);

export class ChargedStationaryError extends Error {
  constructor(message) {
    super(message);
    this.name = "ChargedStationaryError";
    this.code = "CHARGED_STATIONARY_STATE_UNAVAILABLE";
  }
}

function finitePositive(value, name) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new TypeError(`${name} must be positive and finite.`);
  }
  return value;
}

function evenInteger(value, name, minimum = 8) {
  if (!Number.isInteger(value) || value < minimum || value % 2 !== 0) {
    throw new TypeError(`${name} must be an even integer of at least ${minimum}.`);
  }
  return value;
}

function positiveInteger(value, name) {
  if (!Number.isInteger(value) || value < 1) {
    throw new TypeError(`${name} must be a positive integer.`);
  }
  return value;
}

function finiteTriple(value, name, { positive = false } = {}) {
  if (!Array.isArray(value) || value.length !== COMPONENTS || !value.every(Number.isFinite)) {
    throw new TypeError(`${name} must contain three finite values.`);
  }
  if (positive && value.some((entry) => entry <= 0)) {
    throw new TypeError(`${name} values must be positive.`);
  }
  return value.slice();
}

function integerRatio(numerator, denominator, name) {
  const ratio = numerator / denominator;
  const rounded = Math.round(ratio);
  if (rounded < 1 || Math.abs(ratio - rounded) > 1e-9) {
    throw new TypeError(`${name} must divide the dynamic step count exactly.`);
  }
  return rounded;
}

export function probeQuantityPrefix(probeId) {
  return probeId.split("-").join("_");
}

function validateParameters(parameters) {
  if (!parameters || typeof parameters !== "object" || Array.isArray(parameters)) {
    throw new TypeError("Charged Phase-C parameters must be an object.");
  }
  finitePositive(parameters.baseHalfWidth, "baseHalfWidth");
  finitePositive(parameters.extendedHalfWidth, "extendedHalfWidth");
  if (parameters.extendedHalfWidth <= parameters.baseHalfWidth) {
    throw new TypeError("extendedHalfWidth must exceed baseHalfWidth.");
  }
  evenInteger(parameters.coarseIntervals, "coarseIntervals");
  evenInteger(parameters.fineIntervals, "fineIntervals");
  evenInteger(parameters.extendedIntervals, "extendedIntervals");
  evenInteger(parameters.dynamicRefinedIntervals, "dynamicRefinedIntervals");
  if (parameters.fineIntervals !== 2 * parameters.coarseIntervals) {
    throw new TypeError("fineIntervals must be twice coarseIntervals.");
  }
  if (parameters.dynamicRefinedIntervals !== 2 * parameters.fineIntervals) {
    throw new TypeError("dynamicRefinedIntervals must be twice fineIntervals.");
  }
  const fineDx = 2 * parameters.baseHalfWidth / parameters.fineIntervals;
  const extendedDx = 2 * parameters.extendedHalfWidth / parameters.extendedIntervals;
  if (Math.abs(fineDx - extendedDx) > Number.EPSILON * 32) {
    throw new TypeError("Fine and extended grids must share a spacing.");
  }
  finitePositive(parameters.newtonTolerance, "newtonTolerance");
  positiveInteger(parameters.newtonMaxIterations, "newtonMaxIterations");
  positiveInteger(parameters.continuationStages, "continuationStages");
  finitePositive(parameters.frequencyResponseStep, "frequencyResponseStep");
  finitePositive(parameters.kernelTolerance, "kernelTolerance");
  finitePositive(parameters.dynamicDuration, "dynamicDuration");
  positiveInteger(parameters.dynamicBaseSteps, "dynamicBaseSteps");
  if (parameters.timeRefinementFactor !== 2) {
    throw new TypeError("timeRefinementFactor must equal two.");
  }
  const baseDt = parameters.dynamicDuration / parameters.dynamicBaseSteps;
  if (baseDt / fineDx >= 0.5) {
    throw new TypeError("The base time step must keep dt/dx below 0.5.");
  }
  finitePositive(parameters.shapeSampleInterval, "shapeSampleInterval");
  finitePositive(parameters.conservationSampleInterval, "conservationSampleInterval");
  integerRatio(
    parameters.dynamicBaseSteps * parameters.shapeSampleInterval,
    parameters.dynamicDuration,
    "shapeSampleInterval"
  );
  integerRatio(
    parameters.conservationSampleInterval,
    parameters.shapeSampleInterval,
    "conservationSampleInterval"
  );
  finitePositive(parameters.perturbationFraction, "perturbationFraction");
  if (parameters.perturbationFraction >= 0.1) {
    throw new TypeError("perturbationFraction must remain below 0.1.");
  }
  if (!Number.isFinite(parameters.shapeBandFactor) || parameters.shapeBandFactor <= 1) {
    throw new TypeError("shapeBandFactor must exceed one.");
  }
  if (!Number.isInteger(parameters.traceCount) || parameters.traceCount < 3 || parameters.traceCount > 101) {
    throw new TypeError("traceCount must be an integer from three through 101.");
  }
  validatePortableReporting(parameters, { requireTraceDigits: true });
  finiteTriple(parameters.massSquared, "massSquared", { positive: true });
  finiteTriple(parameters.frequencies, "frequencies");
  finitePositive(parameters.lambda, "lambda");
  finitePositive(parameters.quarticCoefficient, "quarticCoefficient");
  if (!Array.isArray(parameters.perturbations) || parameters.perturbations.length !== PERTURBATION_COUNT) {
    throw new TypeError(`Exactly ${PERTURBATION_COUNT} perturbations are required.`);
  }
  const identifiers = new Set([PHASE_C_CHARGED_CONTROL_PROBE]);
  for (const perturbation of parameters.perturbations) {
    if (
      !perturbation ||
      typeof perturbation.id !== "string" ||
      !/^[a-z]+(?:-[a-z]+)*$/.test(perturbation.id) ||
      identifiers.has(perturbation.id)
    ) {
      throw new TypeError("Perturbations require unique lower-case hyphenated identifiers.");
    }
    identifiers.add(perturbation.id);
    if (!["real", "imaginary"].includes(perturbation.field)) {
      throw new TypeError("Perturbation field must be real or imaginary.");
    }
    finiteTriple(perturbation.componentDirection, "componentDirection");
    if (!PHASE_C_CHARGED_SPATIAL_PROFILES.includes(perturbation.spatialProfile)) {
      throw new TypeError("Unsupported perturbation spatial profile.");
    }
  }
  if (!Array.isArray(parameters.evidenceIds) || parameters.evidenceIds.length < 1) {
    throw new TypeError("evidenceIds must be a non-empty array.");
  }
  return parameters;
}

// ---------------------------------------------------------------------------
// Parameter-only admissibility checks.

// 27*min(m2)*g - 8*lambda^2 >= 0 is sufficient for U >= 0 at every field
// value: with r^2 = sum |psi_i|^2 the cubic term is bounded by
// 2*lambda*(r^2/3)^(3/2), and the resulting quadratic in r has no real root.
// For three equal mass-squared values the bound is attained on the symmetric
// ray, so the condition is also necessary.
export function trueVacuumCertificateMargin({ massSquared, lambda, quarticCoefficient }) {
  const minimum = Math.min(massSquared[0], massSquared[1], massSquared[2]);
  return 27 * minimum * quarticCoefficient - 8 * lambda * lambda;
}

// 8*lambda^2 - 9*g*sum(m2) > 0 exhibits a point on the symmetric ray
// u_1 = u_2 = u_3 with negative potential, so psi = 0 is not the global minimum.
export function falseVacuumWitnessMargin({ massSquared, lambda, quarticCoefficient }) {
  const sum = massSquared[0] + massSquared[1] + massSquared[2];
  return 8 * lambda * lambda - 9 * quarticCoefficient * sum;
}

function effectiveMassSquared(massSquared, frequencies) {
  return massSquared.map((value, index) => value - frequencies[index] * frequencies[index]);
}

// ---------------------------------------------------------------------------
// Three-by-three symmetric helpers. A symmetric block is stored as
// [m00, m01, m02, m11, m12, m22].

function inverseSymmetric3(m, out) {
  const c00 = m[3] * m[5] - m[4] * m[4];
  const c01 = m[2] * m[4] - m[1] * m[5];
  const c02 = m[1] * m[4] - m[2] * m[3];
  const determinant = m[0] * c00 + m[1] * c01 + m[2] * c02;
  if (!Number.isFinite(determinant) || Math.abs(determinant) < 1e-280) {
    throw new ChargedStationaryError("A three-component Schur block is singular.");
  }
  const scale = 1 / determinant;
  out[0] = c00 * scale;
  out[1] = c01 * scale;
  out[2] = c02 * scale;
  out[3] = (m[0] * m[5] - m[2] * m[2]) * scale;
  out[4] = (m[1] * m[2] - m[0] * m[4]) * scale;
  out[5] = (m[0] * m[3] - m[1] * m[1]) * scale;
  return out;
}

function jacobiRotate(a, p, q, r) {
  // a is a full symmetric 3x3 stored as nine numbers, row-major.
  const apq = a[3 * p + q];
  if (Math.abs(apq) < 1e-300) return;
  const theta = (a[3 * q + q] - a[3 * p + p]) / (2 * apq);
  const tangent = (theta >= 0 ? 1 : -1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
  const cosine = 1 / Math.sqrt(tangent * tangent + 1);
  const sine = tangent * cosine;
  const app = a[3 * p + p] - tangent * apq;
  const aqq = a[3 * q + q] + tangent * apq;
  const arp = cosine * a[3 * r + p] - sine * a[3 * r + q];
  const arq = sine * a[3 * r + p] + cosine * a[3 * r + q];
  a[3 * p + p] = app;
  a[3 * q + q] = aqq;
  a[3 * p + q] = 0;
  a[3 * q + p] = 0;
  a[3 * r + p] = arp;
  a[3 * p + r] = arp;
  a[3 * r + q] = arq;
  a[3 * q + r] = arq;
}

// Number of negative eigenvalues of a symmetric 3x3 block by cyclic Jacobi
// sweeps with algebraic rotations.
export function symmetricNegativeCount3(m) {
  const a = [m[0], m[1], m[2], m[1], m[3], m[4], m[2], m[4], m[5]];
  for (let sweep = 0; sweep < 60; sweep += 1) {
    const off = Math.abs(a[1]) + Math.abs(a[2]) + Math.abs(a[5]);
    const diagonal = Math.abs(a[0]) + Math.abs(a[4]) + Math.abs(a[8]);
    if (off <= 1e-16 * diagonal || off < 1e-300) break;
    jacobiRotate(a, 0, 1, 2);
    jacobiRotate(a, 0, 2, 1);
    jacobiRotate(a, 1, 2, 0);
  }
  let count = 0;
  for (const value of [a[0], a[4], a[8]]) {
    if (!Number.isFinite(value) || value === 0) {
      throw new ChargedStationaryError("A Schur block has an undetermined eigenvalue sign.");
    }
    if (value < 0) count += 1;
  }
  return count;
}

// Number of negative eigenvalues of the symmetric block-tridiagonal matrix
// with the given symmetric 3x3 diagonal blocks (six numbers each), the
// off-diagonal block offDiagonal * I, and a scalar shift added to the diagonal.
// By Sylvester's law of inertia the count is the sum over the block Schur
// complements S_k = A_k + shift - offDiagonal^2 * inverse(S_{k-1}).
export function blockTridiagonalNegativeCount(diagonalBlocks, offDiagonal, shift) {
  const blockCount = diagonalBlocks.length / 6;
  const offSquared = offDiagonal * offDiagonal;
  const schur = new Float64Array(6);
  const inverse = new Float64Array(6);
  let count = 0;
  for (let block = 0; block < blockCount; block += 1) {
    const base = 6 * block;
    for (let entry = 0; entry < 6; entry += 1) schur[entry] = diagonalBlocks[base + entry];
    schur[0] += shift;
    schur[3] += shift;
    schur[5] += shift;
    if (block > 0) {
      for (let entry = 0; entry < 6; entry += 1) schur[entry] -= offSquared * inverse[entry];
    }
    count += symmetricNegativeCount3(schur);
    inverseSymmetric3(schur, inverse);
  }
  return count;
}

// ---------------------------------------------------------------------------
// Stationary rotating envelopes.

function gridPoint(halfWidth, dx, index) {
  return -halfWidth + (index + 1) * dx;
}

function coshSeries(ySquared) {
  let sum = COSH_SERIES[COSH_SERIES.length - 1];
  for (let index = COSH_SERIES.length - 2; index >= 0; index -= 1) {
    sum = sum * ySquared + COSH_SERIES[index];
  }
  return sum;
}

// Seed of the continuation: for equal effective mass-squared mu and zero
// quartic coefficient the envelope (3*mu/(4*lambda))/cosh(sqrt(mu)*x/2)^2 is an
// exact solution. The hyperbolic cosine is replaced by its degree-16 Taylor
// polynomial; Newton iteration then converges to the discrete solution.
function seedFields(meanEffectiveMass, lambda, halfWidth, intervals) {
  const size = intervals - 1;
  const dx = 2 * halfWidth / intervals;
  const amplitude = 3 * meanEffectiveMass / (4 * lambda);
  const base = new Float64Array(size);
  const centre = (size - 1) / 2;
  for (let offset = 0; offset <= centre; offset += 1) {
    const x = offset * dx;
    const series = coshSeries(meanEffectiveMass * x * x / 4);
    const value = amplitude / (series * series);
    base[centre + offset] = value;
    base[centre - offset] = value;
  }
  return [base.slice(), base.slice(), base.slice()];
}

function stationaryResidual(fields, dx, effectiveMass, lambda, quartic, residual) {
  const size = fields[0].length;
  const inverseDxSquared = 1 / (dx * dx);
  let maximum = 0;
  for (let index = 0; index < size; index += 1) {
    const f0 = fields[0][index];
    const f1 = fields[1][index];
    const f2 = fields[2][index];
    const sumSquared = f0 * f0 + f1 * f1 + f2 * f2;
    for (let component = 0; component < COMPONENTS; component += 1) {
      const field = fields[component];
      const value = field[index];
      const left = index === 0 ? 0 : field[index - 1];
      const right = index === size - 1 ? 0 : field[index + 1];
      const product = component === 0 ? f1 * f2 : component === 1 ? f0 * f2 : f0 * f1;
      const entry = -(left - 2 * value + right) * inverseDxSquared +
        effectiveMass[component] * value -
        2 * lambda * product +
        quartic * sumSquared * value;
      residual[COMPONENTS * index + component] = entry;
      const magnitude = Math.abs(entry);
      if (magnitude > maximum) maximum = magnitude;
    }
  }
  return maximum;
}

// Symmetric 3x3 diagonal blocks of the block-tridiagonal second-variation
// operators. sector "real" is the Hessian in real-amplitude directions (also
// the Newton Jacobian); sector "phase" is the Hessian in imaginary directions.
function hessianBlocks(fields, dx, effectiveMass, lambda, quartic, sector, blocks) {
  const size = fields[0].length;
  const inverseDxSquared = 1 / (dx * dx);
  const real = sector === "real";
  for (let index = 0; index < size; index += 1) {
    const f0 = fields[0][index];
    const f1 = fields[1][index];
    const f2 = fields[2][index];
    const sumSquared = f0 * f0 + f1 * f1 + f2 * f2;
    const base = 6 * index;
    const common = 2 * inverseDxSquared + quartic * sumSquared;
    if (real) {
      blocks[base] = common + effectiveMass[0] + 2 * quartic * f0 * f0;
      blocks[base + 3] = common + effectiveMass[1] + 2 * quartic * f1 * f1;
      blocks[base + 5] = common + effectiveMass[2] + 2 * quartic * f2 * f2;
      blocks[base + 1] = -2 * lambda * f2 + 2 * quartic * f0 * f1;
      blocks[base + 2] = -2 * lambda * f1 + 2 * quartic * f0 * f2;
      blocks[base + 4] = -2 * lambda * f0 + 2 * quartic * f1 * f2;
    } else {
      blocks[base] = common + effectiveMass[0];
      blocks[base + 3] = common + effectiveMass[1];
      blocks[base + 5] = common + effectiveMass[2];
      blocks[base + 1] = 2 * lambda * f2;
      blocks[base + 2] = 2 * lambda * f1;
      blocks[base + 4] = 2 * lambda * f0;
    }
  }
  return blocks;
}

// Solves the symmetric block-tridiagonal system with off-diagonal blocks
// offDiagonal * I by block elimination. rightHandSide is overwritten.
function solveBlockTridiagonal(blocks, offDiagonal, rightHandSide) {
  const blockCount = rightHandSide.length / COMPONENTS;
  const inverses = new Float64Array(6 * blockCount);
  const schur = new Float64Array(6);
  const inverse = new Float64Array(6);
  const offSquared = offDiagonal * offDiagonal;
  for (let block = 0; block < blockCount; block += 1) {
    const base = 6 * block;
    for (let entry = 0; entry < 6; entry += 1) schur[entry] = blocks[base + entry];
    if (block > 0) {
      for (let entry = 0; entry < 6; entry += 1) schur[entry] -= offSquared * inverse[entry];
      const row = COMPONENTS * block;
      const previous = row - COMPONENTS;
      const p0 = rightHandSide[previous];
      const p1 = rightHandSide[previous + 1];
      const p2 = rightHandSide[previous + 2];
      rightHandSide[row] -= offDiagonal * (inverse[0] * p0 + inverse[1] * p1 + inverse[2] * p2);
      rightHandSide[row + 1] -= offDiagonal * (inverse[1] * p0 + inverse[3] * p1 + inverse[4] * p2);
      rightHandSide[row + 2] -= offDiagonal * (inverse[2] * p0 + inverse[4] * p1 + inverse[5] * p2);
    }
    inverseSymmetric3(schur, inverse);
    for (let entry = 0; entry < 6; entry += 1) inverses[base + entry] = inverse[entry];
  }
  for (let block = blockCount - 1; block >= 0; block -= 1) {
    const base = 6 * block;
    const row = COMPONENTS * block;
    let r0 = rightHandSide[row];
    let r1 = rightHandSide[row + 1];
    let r2 = rightHandSide[row + 2];
    if (block < blockCount - 1) {
      r0 -= offDiagonal * rightHandSide[row + COMPONENTS];
      r1 -= offDiagonal * rightHandSide[row + COMPONENTS + 1];
      r2 -= offDiagonal * rightHandSide[row + COMPONENTS + 2];
    }
    rightHandSide[row] = inverses[base] * r0 + inverses[base + 1] * r1 + inverses[base + 2] * r2;
    rightHandSide[row + 1] = inverses[base + 1] * r0 + inverses[base + 3] * r1 + inverses[base + 4] * r2;
    rightHandSide[row + 2] = inverses[base + 2] * r0 + inverses[base + 4] * r1 + inverses[base + 5] * r2;
  }
  return rightHandSide;
}

// Block-Newton iteration restricted to even envelopes. The unknowns are the
// values at x >= 0; the mirror condition f(-dx) = f(+dx) closes the centre
// row, which is halved to keep the reduced system symmetric. Restricting to
// even states removes the translation direction, whose eigenvalue on a wide
// domain is too small for a stable linear solve.
function newtonSolve(initial, dx, effectiveMass, lambda, quartic, parameters) {
  const size = initial[0].length;
  const centre = (size - 1) / 2;
  const half = centre + 1;
  let fields = initial.map((field) => field.slice());
  const residual = new Float64Array(COMPONENTS * size);
  const proposalResidual = new Float64Array(COMPONENTS * size);
  const blocks = new Float64Array(6 * size);
  const halfBlocks = new Float64Array(6 * half);
  const delta = new Float64Array(COMPONENTS * half);
  const offDiagonal = -1 / (dx * dx);
  let maximum = stationaryResidual(fields, dx, effectiveMass, lambda, quartic, residual);
  let iterations = 0;
  while (maximum > parameters.newtonTolerance && iterations < parameters.newtonMaxIterations) {
    hessianBlocks(fields, dx, effectiveMass, lambda, quartic, "real", blocks);
    for (let entry = 0; entry < 6 * half; entry += 1) halfBlocks[entry] = blocks[6 * centre + entry];
    for (let entry = 0; entry < COMPONENTS * half; entry += 1) {
      delta[entry] = -residual[COMPONENTS * centre + entry];
    }
    for (let entry = 0; entry < 6; entry += 1) halfBlocks[entry] /= 2;
    for (let entry = 0; entry < COMPONENTS; entry += 1) delta[entry] /= 2;
    solveBlockTridiagonal(halfBlocks, offDiagonal, delta);
    let accepted = false;
    let scale = 1;
    for (let power = 0; power <= 28; power += 1) {
      const proposal = fields.map((field, component) => {
        const next = new Float64Array(size);
        for (let offset = 0; offset < half; offset += 1) {
          const value = field[centre + offset] + scale * delta[COMPONENTS * offset + component];
          next[centre + offset] = value;
          next[centre - offset] = value;
        }
        return next;
      });
      const proposalMaximum = stationaryResidual(
        proposal,
        dx,
        effectiveMass,
        lambda,
        quartic,
        proposalResidual
      );
      if (proposalMaximum < maximum || proposalMaximum <= parameters.newtonTolerance) {
        fields = proposal;
        residual.set(proposalResidual);
        maximum = proposalMaximum;
        accepted = true;
        break;
      }
      scale /= 2;
    }
    if (!accepted) throw new ChargedStationaryError("Charged block-Newton line search failed.");
    iterations += 1;
  }
  if (!(maximum <= parameters.newtonTolerance)) {
    throw new ChargedStationaryError("Charged block-Newton solve did not converge.");
  }
  return { fields, maxResidual: maximum };
}

function peakAmplitude(fields) {
  let peak = 0;
  for (const field of fields) {
    for (let index = 0; index < field.length; index += 1) {
      const magnitude = Math.abs(field[index]);
      if (magnitude > peak) peak = magnitude;
    }
  }
  return peak;
}

// Deterministic continuation: first the effective mass-squared values move
// from their mean to the target at zero quartic coefficient, then the quartic
// coefficient rises to its target.
function solveStationary(parameters, frequencies, halfWidth, intervals) {
  const dx = 2 * halfWidth / intervals;
  const target = effectiveMassSquared(parameters.massSquared, frequencies);
  if (target.some((value) => !(value > 0))) {
    throw new ChargedStationaryError("A component is not evanescent: m2 - omega^2 must be positive.");
  }
  const mean = (target[0] + target[1] + target[2]) / COMPONENTS;
  const stages = parameters.continuationStages;
  let fields = seedFields(mean, parameters.lambda, halfWidth, intervals);
  let maxResidual = 0;
  for (let stage = 0; stage <= stages; stage += 1) {
    const stageMass = target.map((value) => mean + stage * (value - mean) / stages);
    ({ fields, maxResidual } = newtonSolve(fields, dx, stageMass, parameters.lambda, 0, parameters));
  }
  for (let stage = 1; stage <= stages; stage += 1) {
    const quartic = stage * parameters.quarticCoefficient / stages;
    ({ fields, maxResidual } = newtonSolve(fields, dx, target, parameters.lambda, quartic, parameters));
  }
  if (!(peakAmplitude(fields) > 1e-6)) {
    throw new ChargedStationaryError("The continuation collapsed onto the trivial state.");
  }
  return { fields, dx, halfWidth, intervals, maxResidual, frequencies: frequencies.slice() };
}

function solveNeighbour(parameters, solution, frequencies) {
  const target = effectiveMassSquared(parameters.massSquared, frequencies);
  const { fields, maxResidual } = newtonSolve(
    solution.fields,
    solution.dx,
    target,
    parameters.lambda,
    parameters.quarticCoefficient,
    parameters
  );
  return { ...solution, fields, maxResidual, frequencies: frequencies.slice() };
}

function relativeChange(left, right) {
  const scale = Math.max(Math.abs(left), Math.abs(right));
  return scale === 0 ? 0 : Math.abs(left - right) / scale;
}

function gamma(solution) {
  let total = 0;
  for (let index = 0; index < solution.fields[0].length; index += 1) {
    const composite = solution.fields[0][index] + solution.fields[1][index] + solution.fields[2][index];
    total += composite * composite;
  }
  return solution.dx * total;
}

function supportRadius90(solution) {
  const size = solution.fields[0].length;
  const entries = [];
  let total = 0;
  for (let index = 0; index < size; index += 1) {
    const composite = solution.fields[0][index] + solution.fields[1][index] + solution.fields[2][index];
    const weight = composite * composite * solution.dx;
    total += weight;
    entries.push({ radius: Math.abs(gridPoint(solution.halfWidth, solution.dx, index)), weight, index });
  }
  if (total === 0) return 0;
  entries.sort((left, right) => left.radius - right.radius || left.index - right.index);
  let accumulated = 0;
  for (const entry of entries) {
    accumulated += entry.weight;
    if (accumulated >= 0.9 * total) return entry.radius;
  }
  return entries[entries.length - 1].radius;
}

function profileGridRelativeL2(coarse, fine) {
  let difference = 0;
  let reference = 0;
  for (let component = 0; component < COMPONENTS; component += 1) {
    for (let index = 0; index < coarse.fields[component].length; index += 1) {
      const fineValue = fine.fields[component][2 * index + 1];
      const delta = coarse.fields[component][index] - fineValue;
      difference += delta * delta * coarse.dx;
      reference += fineValue * fineValue * coarse.dx;
    }
  }
  return reference === 0 ? 0 : Math.sqrt(difference / reference);
}

function componentNorms(solution) {
  return solution.fields.map((field) => {
    let total = 0;
    for (let index = 0; index < field.length; index += 1) total += field[index] * field[index];
    return solution.dx * total;
  });
}

// Conserved charges of a stationary rotating state: N_i = omega_i * integral f_i^2.
function stationaryCharges(solution) {
  const norms = componentNorms(solution);
  const numbers = norms.map((norm, index) => solution.frequencies[index] * norm);
  return {
    numbers,
    charge1: numbers[0] - numbers[2],
    charge2: numbers[1] - numbers[2]
  };
}

function stationaryPeakDensity(solution) {
  let peak = 0;
  for (let index = 0; index < solution.fields[0].length; index += 1) {
    const density = solution.fields[0][index] * solution.fields[0][index] +
      solution.fields[1][index] * solution.fields[1][index] +
      solution.fields[2][index] * solution.fields[2][index];
    if (density > peak) peak = density;
  }
  return peak;
}

function stationaryEnergy(solution, parameters) {
  const size = solution.fields[0].length;
  let energy = 0;
  for (let component = 0; component < COMPONENTS; component += 1) {
    const field = solution.fields[component];
    const frequency = solution.frequencies[component];
    let previous = 0;
    for (let index = 0; index <= size; index += 1) {
      const current = index === size ? 0 : field[index];
      const step = current - previous;
      energy += 0.5 * step * step / solution.dx;
      previous = current;
    }
    for (let index = 0; index < size; index += 1) {
      energy += 0.5 * solution.dx *
        (frequency * frequency + parameters.massSquared[component]) * field[index] * field[index];
    }
  }
  for (let index = 0; index < size; index += 1) {
    const f0 = solution.fields[0][index];
    const f1 = solution.fields[1][index];
    const f2 = solution.fields[2][index];
    const sumSquared = f0 * f0 + f1 * f1 + f2 * f2;
    energy += solution.dx * (
      -2 * parameters.lambda * f0 * f1 * f2 +
      0.25 * parameters.quarticCoefficient * sumSquared * sumSquared
    );
  }
  return energy;
}

function sectorCounts(solution, parameters, sector) {
  const size = solution.fields[0].length;
  const blocks = hessianBlocks(
    solution.fields,
    solution.dx,
    effectiveMassSquared(parameters.massSquared, solution.frequencies),
    parameters.lambda,
    parameters.quarticCoefficient,
    sector,
    new Float64Array(6 * size)
  );
  const offDiagonal = -1 / (solution.dx * solution.dx);
  const negative = blockTridiagonalNegativeCount(blocks, offDiagonal, parameters.kernelTolerance);
  const belowPositive = blockTridiagonalNegativeCount(blocks, offDiagonal, -parameters.kernelTolerance);
  return { negative, nearZero: belowPositive - negative };
}

function chargeResponse(parameters, solution, step) {
  const response = [[0, 0], [0, 0]];
  for (let column = 0; column < 2; column += 1) {
    const plusFrequencies = solution.frequencies.slice();
    const minusFrequencies = solution.frequencies.slice();
    plusFrequencies[column] += step;
    minusFrequencies[column] -= step;
    plusFrequencies[2] = -(plusFrequencies[0] + plusFrequencies[1]);
    minusFrequencies[2] = -(minusFrequencies[0] + minusFrequencies[1]);
    const plus = stationaryCharges(solveNeighbour(parameters, solution, plusFrequencies));
    const minus = stationaryCharges(solveNeighbour(parameters, solution, minusFrequencies));
    response[0][column] = (plus.charge1 - minus.charge1) / (2 * step);
    response[1][column] = (plus.charge2 - minus.charge2) / (2 * step);
  }
  const offDiagonal = 0.5 * (response[0][1] + response[1][0]);
  // d'' = -dQ/dOmega, symmetrized. Its determinant equals that of the
  // symmetrized response; its trace is minus the response trace.
  const determinant = response[0][0] * response[1][1] - offDiagonal * offDiagonal;
  const trace = -(response[0][0] + response[1][1]);
  let positiveCount;
  if (determinant < 0) positiveCount = 1;
  else if (determinant > 0) positiveCount = trace > 0 ? 2 : 0;
  else positiveCount = trace > 0 ? 1 : 0;
  return {
    response,
    symmetryDefect: Math.abs(response[0][1] - response[1][0]),
    determinant,
    positiveCount
  };
}

// ---------------------------------------------------------------------------
// Complex dynamics. A state holds flat arrays of length 3 * size, component
// major: real, imaginary, realVelocity, imaginaryVelocity.

function spatialProfile(perturbation, solution, component, index) {
  if (perturbation.spatialProfile === "stationary-envelope") {
    return solution.fields[component][index];
  }
  const x = gridPoint(solution.halfWidth, solution.dx, index);
  if (perturbation.spatialProfile === "squared-lorentzian-width-0.8-centered-at-1.5") {
    const y = (x - 1.5) / 0.8;
    const denominator = 1 + y * y;
    return 1 / (denominator * denominator);
  }
  const y = x + 1.5;
  const denominator = 1 + y * y;
  return y / (denominator * denominator);
}

function initialState(solution, perturbation, parameters) {
  const size = solution.fields[0].length;
  const state = {
    real: new Float64Array(COMPONENTS * size),
    imaginary: new Float64Array(COMPONENTS * size),
    realVelocity: new Float64Array(COMPONENTS * size),
    imaginaryVelocity: new Float64Array(COMPONENTS * size)
  };
  let backgroundSquared = 0;
  for (let component = 0; component < COMPONENTS; component += 1) {
    for (let index = 0; index < size; index += 1) {
      const value = solution.fields[component][index];
      state.real[component * size + index] = value;
      backgroundSquared += value * value;
    }
  }
  if (perturbation) {
    const delta = new Float64Array(COMPONENTS * size);
    let deltaSquared = 0;
    for (let component = 0; component < COMPONENTS; component += 1) {
      for (let index = 0; index < size; index += 1) {
        const value = perturbation.componentDirection[component] *
          spatialProfile(perturbation, solution, component, index);
        delta[component * size + index] = value;
        deltaSquared += value * value;
      }
    }
    if (deltaSquared === 0 || backgroundSquared === 0) {
      throw new Error("Dynamic perturbation requires nonzero background and direction norms.");
    }
    const scale = parameters.perturbationFraction * Math.sqrt(backgroundSquared / deltaSquared);
    const target = perturbation.field === "real" ? state.real : state.imaginary;
    for (let index = 0; index < delta.length; index += 1) target[index] += scale * delta[index];
  }
  // Zero velocity in the co-rotating frame: dt(psi_i) = i * omega_i * psi_i.
  for (let component = 0; component < COMPONENTS; component += 1) {
    const frequency = solution.frequencies[component];
    for (let index = 0; index < size; index += 1) {
      const offset = component * size + index;
      state.realVelocity[offset] = -frequency * state.imaginary[offset];
      state.imaginaryVelocity[offset] = frequency * state.real[offset];
    }
  }
  return state;
}

function accelerations(state, size, inverseDxSquared, parameters, realAcceleration, imaginaryAcceleration) {
  const re = state.real;
  const im = state.imaginary;
  const lambda2 = 2 * parameters.lambda;
  const quartic = parameters.quarticCoefficient;
  const m0 = parameters.massSquared[0];
  const m1 = parameters.massSquared[1];
  const m2 = parameters.massSquared[2];
  const o1 = size;
  const o2 = 2 * size;
  for (let index = 0; index < size; index += 1) {
    const r0 = re[index];
    const r1 = re[o1 + index];
    const r2 = re[o2 + index];
    const i0 = im[index];
    const i1 = im[o1 + index];
    const i2 = im[o2 + index];
    const sumSquared = r0 * r0 + i0 * i0 + r1 * r1 + i1 * i1 + r2 * r2 + i2 * i2;
    const first = index === 0;
    const last = index === size - 1;
    const damping = quartic * sumSquared;
    realAcceleration[index] =
      ((first ? 0 : re[index - 1]) - 2 * r0 + (last ? 0 : re[index + 1])) * inverseDxSquared -
      m0 * r0 + lambda2 * (r1 * r2 - i1 * i2) - damping * r0;
    imaginaryAcceleration[index] =
      ((first ? 0 : im[index - 1]) - 2 * i0 + (last ? 0 : im[index + 1])) * inverseDxSquared -
      m0 * i0 - lambda2 * (r1 * i2 + i1 * r2) - damping * i0;
    realAcceleration[o1 + index] =
      ((first ? 0 : re[o1 + index - 1]) - 2 * r1 + (last ? 0 : re[o1 + index + 1])) * inverseDxSquared -
      m1 * r1 + lambda2 * (r0 * r2 - i0 * i2) - damping * r1;
    imaginaryAcceleration[o1 + index] =
      ((first ? 0 : im[o1 + index - 1]) - 2 * i1 + (last ? 0 : im[o1 + index + 1])) * inverseDxSquared -
      m1 * i1 - lambda2 * (r0 * i2 + i0 * r2) - damping * i1;
    realAcceleration[o2 + index] =
      ((first ? 0 : re[o2 + index - 1]) - 2 * r2 + (last ? 0 : re[o2 + index + 1])) * inverseDxSquared -
      m2 * r2 + lambda2 * (r0 * r1 - i0 * i1) - damping * r2;
    imaginaryAcceleration[o2 + index] =
      ((first ? 0 : im[o2 + index - 1]) - 2 * i2 + (last ? 0 : im[o2 + index + 1])) * inverseDxSquared -
      m2 * i2 - lambda2 * (r0 * i1 + i0 * r1) - damping * i2;
  }
}

function stateEnergy(state, size, dx, parameters) {
  let kinetic = 0;
  let gradient = 0;
  let potential = 0;
  for (let component = 0; component < COMPONENTS; component += 1) {
    const offset = component * size;
    let previousReal = 0;
    let previousImaginary = 0;
    for (let index = 0; index <= size; index += 1) {
      const currentReal = index === size ? 0 : state.real[offset + index];
      const currentImaginary = index === size ? 0 : state.imaginary[offset + index];
      const realStep = currentReal - previousReal;
      const imaginaryStep = currentImaginary - previousImaginary;
      gradient += realStep * realStep + imaginaryStep * imaginaryStep;
      previousReal = currentReal;
      previousImaginary = currentImaginary;
    }
    for (let index = 0; index < size; index += 1) {
      const vr = state.realVelocity[offset + index];
      const vi = state.imaginaryVelocity[offset + index];
      kinetic += vr * vr + vi * vi;
    }
  }
  const o1 = size;
  const o2 = 2 * size;
  for (let index = 0; index < size; index += 1) {
    const r0 = state.real[index];
    const r1 = state.real[o1 + index];
    const r2 = state.real[o2 + index];
    const i0 = state.imaginary[index];
    const i1 = state.imaginary[o1 + index];
    const i2 = state.imaginary[o2 + index];
    const n0 = r0 * r0 + i0 * i0;
    const n1 = r1 * r1 + i1 * i1;
    const n2 = r2 * r2 + i2 * i2;
    const sumSquared = n0 + n1 + n2;
    const productReal = r0 * r1 * r2 - r0 * i1 * i2 - i0 * r1 * i2 - i0 * i1 * r2;
    potential += 0.5 * (
      parameters.massSquared[0] * n0 +
      parameters.massSquared[1] * n1 +
      parameters.massSquared[2] * n2
    ) - 2 * parameters.lambda * productReal +
      0.25 * parameters.quarticCoefficient * sumSquared * sumSquared;
  }
  return 0.5 * dx * kinetic + 0.5 * gradient / dx + dx * potential;
}

function stateCharges(state, size, dx) {
  const numbers = [0, 0, 0];
  for (let component = 0; component < COMPONENTS; component += 1) {
    const offset = component * size;
    let total = 0;
    for (let index = 0; index < size; index += 1) {
      total += state.real[offset + index] * state.imaginaryVelocity[offset + index] -
        state.imaginary[offset + index] * state.realVelocity[offset + index];
    }
    numbers[component] = dx * total;
  }
  return [numbers[0] - numbers[2], numbers[1] - numbers[2]];
}

// Density peak and the 90-percent support radius about the density centroid.
// Both are invariant under the phase symmetry; the radius is also invariant
// under translation.
function stateShape(state, size, dx, halfWidth, density) {
  const o1 = size;
  const o2 = 2 * size;
  let peak = 0;
  let total = 0;
  let moment = 0;
  for (let index = 0; index < size; index += 1) {
    const r0 = state.real[index];
    const r1 = state.real[o1 + index];
    const r2 = state.real[o2 + index];
    const i0 = state.imaginary[index];
    const i1 = state.imaginary[o1 + index];
    const i2 = state.imaginary[o2 + index];
    const value = r0 * r0 + i0 * i0 + r1 * r1 + i1 * i1 + r2 * r2 + i2 * i2;
    density[index] = value;
    if (value > peak) peak = value;
    total += value;
    moment += gridPoint(halfWidth, dx, index) * value;
  }
  if (!(total > 0)) return { peak, radius: 0 };
  const centroid = moment / total;
  // Largest grid index at or to the left of the centroid.
  let left = Math.floor((centroid + halfWidth) / dx) - 1;
  if (left < -1) left = -1;
  if (left > size - 1) left = size - 1;
  let right = left + 1;
  const target = 0.9 * total;
  let accumulated = 0;
  let radius = 0;
  while (accumulated < target && (left >= 0 || right < size)) {
    const leftDistance = left >= 0 ? centroid - gridPoint(halfWidth, dx, left) : Infinity;
    const rightDistance = right < size ? gridPoint(halfWidth, dx, right) - centroid : Infinity;
    if (leftDistance <= rightDistance) {
      accumulated += density[left];
      radius = leftDistance;
      left -= 1;
    } else {
      accumulated += density[right];
      radius = rightDistance;
      right += 1;
    }
  }
  return { peak, radius };
}

function shapeExcursion(shape, reference) {
  if (!(shape.peak > 0) || !(shape.radius > 0)) return Infinity;
  return Math.max(
    shape.peak / reference.peak,
    reference.peak / shape.peak,
    shape.radius / reference.radius,
    reference.radius / shape.radius
  );
}

function runProbe(solution, perturbation, parameters, steps, includeTrace) {
  const size = solution.fields[0].length;
  const dx = solution.dx;
  const inverseDxSquared = 1 / (dx * dx);
  const dt = parameters.dynamicDuration / steps;
  const shapeStride = integerRatio(
    steps * parameters.shapeSampleInterval,
    parameters.dynamicDuration,
    "shapeSampleInterval"
  );
  const conservationStride = shapeStride * integerRatio(
    parameters.conservationSampleInterval,
    parameters.shapeSampleInterval,
    "conservationSampleInterval"
  );
  const sampleCount = steps / shapeStride;
  const traceSamples = new Set();
  if (includeTrace) {
    for (let index = 0; index < parameters.traceCount; index += 1) {
      traceSamples.add(Math.round(index * sampleCount / (parameters.traceCount - 1)));
    }
  }
  const density = new Float64Array(size);
  const reference = stateShape(initialState(solution, null, parameters), size, dx, solution.halfWidth, density);
  const state = initialState(solution, perturbation, parameters);
  const realAcceleration = new Float64Array(COMPONENTS * size);
  const imaginaryAcceleration = new Float64Array(COMPONENTS * size);
  accelerations(state, size, inverseDxSquared, parameters, realAcceleration, imaginaryAcceleration);
  const initialEnergy = stateEnergy(state, size, dx, parameters);
  const initialCharges = stateCharges(state, size, dx);
  let worstExcursion = 1;
  let maximumEnergyDrift = 0;
  let maximumChargeDrift = 0;
  let departureTime = -1;
  const trace = [];
  const half = 0.5 * dt;
  const length = COMPONENTS * size;
  for (let step = 0; step <= steps; step += 1) {
    if (step % shapeStride === 0) {
      const sample = step / shapeStride;
      const shape = stateShape(state, size, dx, solution.halfWidth, density);
      const excursion = shapeExcursion(shape, reference);
      if (excursion > worstExcursion) worstExcursion = excursion;
      if (step % conservationStride === 0) {
        const energyDrift = relativeChange(stateEnergy(state, size, dx, parameters), initialEnergy);
        if (energyDrift > maximumEnergyDrift) maximumEnergyDrift = energyDrift;
        const charges = stateCharges(state, size, dx);
        for (let index = 0; index < 2; index += 1) {
          const chargeDrift = relativeChange(charges[index], initialCharges[index]);
          if (chargeDrift > maximumChargeDrift) maximumChargeDrift = chargeDrift;
        }
      }
      if (includeTrace && traceSamples.has(sample)) {
        trace.push({
          time: portableTraceValue(sample * parameters.shapeSampleInterval, parameters),
          peakRatio: portableTraceValue(shape.peak / reference.peak, parameters),
          radiusRatio: portableTraceValue(shape.radius / reference.radius, parameters)
        });
      }
      if (!(excursion <= parameters.shapeBandFactor)) {
        departureTime = sample * parameters.shapeSampleInterval;
        break;
      }
    }
    if (step === steps) break;
    for (let index = 0; index < length; index += 1) {
      state.realVelocity[index] += half * realAcceleration[index];
      state.imaginaryVelocity[index] += half * imaginaryAcceleration[index];
      state.real[index] += dt * state.realVelocity[index];
      state.imaginary[index] += dt * state.imaginaryVelocity[index];
    }
    accelerations(state, size, inverseDxSquared, parameters, realAcceleration, imaginaryAcceleration);
    for (let index = 0; index < length; index += 1) {
      state.realVelocity[index] += half * realAcceleration[index];
      state.imaginaryVelocity[index] += half * imaginaryAcceleration[index];
    }
  }
  if (!Number.isFinite(worstExcursion)) worstExcursion = Number.MAX_SAFE_INTEGER;
  return {
    dt,
    steps,
    departed: departureTime >= 0,
    departureTime,
    worstExcursion,
    maximumEnergyDrift,
    maximumChargeDrift,
    trace
  };
}

function runBank(solution, parameters, steps, includeTrace) {
  const probes = [
    { id: PHASE_C_CHARGED_CONTROL_PROBE, perturbation: null },
    ...parameters.perturbations.map((perturbation) => ({ id: perturbation.id, perturbation }))
  ];
  return probes.map(({ id, perturbation }) => ({
    id,
    ...runProbe(solution, perturbation, parameters, steps, includeTrace)
  }));
}

function maximum(bank, field) {
  let value = 0;
  for (const entry of bank) if (entry[field] > value) value = entry[field];
  return value;
}

function departureCount(bank) {
  return bank.filter((entry) => entry.departed).length;
}

export function runPhaseCChargedNumerics(rawParameters) {
  const parameters = validateParameters(rawParameters);
  const frequencies = parameters.frequencies.slice();
  const coarse = solveStationary(
    parameters,
    frequencies,
    parameters.baseHalfWidth,
    parameters.coarseIntervals
  );
  const fine = solveStationary(
    parameters,
    frequencies,
    parameters.baseHalfWidth,
    parameters.fineIntervals
  );
  const extended = solveStationary(
    parameters,
    frequencies,
    parameters.extendedHalfWidth,
    parameters.extendedIntervals
  );
  const refined = solveStationary(
    parameters,
    frequencies,
    parameters.baseHalfWidth,
    parameters.dynamicRefinedIntervals
  );
  const gammaCoarse = gamma(coarse);
  const gammaFine = gamma(fine);
  const gammaExtended = gamma(extended);
  const radiusFine = supportRadius90(fine);
  const radiusExtended = supportRadius90(extended);
  const charges = stationaryCharges(fine);
  const energy = stationaryEnergy(fine, parameters);
  const freeQuantaEnergy = charges.numbers.reduce(
    (sum, value, index) => sum + Math.sqrt(parameters.massSquared[index]) * Math.abs(value),
    0
  );
  const realSector = sectorCounts(fine, parameters, "real");
  const phaseSector = sectorCounts(fine, parameters, "phase");
  const response = chargeResponse(parameters, fine, parameters.frequencyResponseStep);
  const halfStepResponse = chargeResponse(parameters, fine, parameters.frequencyResponseStep / 2);
  const negativeCount = realSector.negative + phaseSector.negative;
  const constrainedStability =
    realSector.nearZero === 1 &&
    phaseSector.nearZero === 2 &&
    response.positiveCount === halfStepResponse.positiveCount &&
    negativeCount === response.positiveCount;

  const baseSteps = parameters.dynamicBaseSteps;
  const refinedSteps = parameters.timeRefinementFactor * baseSteps;
  const banks = {
    base: runBank(fine, parameters, baseSteps, false),
    time_refined: runBank(fine, parameters, refinedSteps, false),
    space_refined: runBank(refined, parameters, refinedSteps, true)
  };
  const worst = Object.fromEntries(RESOLUTIONS.map((id) => [id, maximum(banks[id], "worstExcursion")]));
  const patternAgreement = banks.base.every((entry, index) => (
    entry.departed === banks.time_refined[index].departed &&
    entry.departed === banks.space_refined[index].departed
  ));

  const frequencySum = frequencies[0] + frequencies[1] + frequencies[2];
  const metrics = {
    true_vacuum_certificate_margin: trueVacuumCertificateMargin(parameters),
    frequency_balance_abs: Math.abs(frequencySum),
    evanescence_minimum: Math.min(...effectiveMassSquared(parameters.massSquared, frequencies)),
    stationarity_max_residual_coarse: coarse.maxResidual,
    stationarity_max_residual_fine: fine.maxResidual,
    stationarity_max_residual_extended: extended.maxResidual,
    stationarity_max_residual_refined: refined.maxResidual,
    gamma_coarse: gammaCoarse,
    gamma_fine: gammaFine,
    gamma_extended: gammaExtended,
    gamma_grid_relative_change: relativeChange(gammaCoarse, gammaFine),
    gamma_domain_relative_change: relativeChange(gammaFine, gammaExtended),
    profile_grid_relative_l2: profileGridRelativeL2(coarse, fine),
    support_radius_90_fine: radiusFine,
    support_radius_90_extended: radiusExtended,
    support_radius_relative_change: relativeChange(radiusFine, radiusExtended),
    peak_density_fine: stationaryPeakDensity(fine),
    charge_1_fine: charges.charge1,
    charge_2_fine: charges.charge2,
    energy_fine: energy,
    free_quanta_energy_ratio_fine: freeQuantaEnergy === 0 ? 0 : energy / freeQuantaEnergy,
    real_sector_negative_count: realSector.negative,
    real_sector_near_zero_count: realSector.nearZero,
    phase_sector_negative_count: phaseSector.negative,
    phase_sector_near_zero_count: phaseSector.nearZero,
    charge_response_11: response.response[0][0],
    charge_response_12: response.response[0][1],
    charge_response_21: response.response[1][0],
    charge_response_22: response.response[1][1],
    charge_response_symmetry_defect: response.symmetryDefect,
    charge_hessian_determinant: response.determinant,
    charge_hessian_positive_count: response.positiveCount,
    charge_hessian_positive_count_half_step: halfStepResponse.positiveCount,
    constrained_stability_flag: constrainedStability ? 1 : 0,
    dynamic_time_relative_change: relativeChange(worst.base, worst.time_refined),
    dynamic_space_relative_change: relativeChange(worst.time_refined, worst.space_refined),
    dynamic_departure_pattern_agreement: patternAgreement ? 1 : 0
  };
  for (const id of RESOLUTIONS) {
    metrics[`dynamic_departure_count_${id}`] = departureCount(banks[id]);
    metrics[`dynamic_worst_shape_excursion_${id}`] = worst[id];
    metrics[`dynamic_max_energy_relative_drift_${id}`] = maximum(banks[id], "maximumEnergyDrift");
    metrics[`dynamic_max_charge_relative_drift_${id}`] = maximum(banks[id], "maximumChargeDrift");
  }
  for (const probe of banks.space_refined) {
    const prefix = probeQuantityPrefix(probe.id);
    metrics[`${prefix}_shape_excursion_space_refined`] = probe.worstExcursion;
    metrics[`${prefix}_departure_time_space_refined`] = probe.departureTime;
  }
  const size = fine.fields[0].length;
  return {
    metrics,
    visualization: {
      schemaVersion: "1",
      scenarioId: parameters.scenarioId,
      stationary: {
        halfWidth: fine.halfWidth,
        intervals: fine.intervals,
        dx: portableTraceValue(fine.dx, parameters),
        x: Array.from({ length: size }, (_, index) => portableTraceValue(
          gridPoint(fine.halfWidth, fine.dx, index),
          parameters
        )),
        components: fine.fields.map((field) => Array.from(
          field,
          (value) => portableTraceValue(value, parameters)
        ))
      },
      dynamics: banks.space_refined.map((probe) => ({
        id: probe.id,
        dt: portableTraceValue(probe.dt, parameters),
        steps: probe.steps,
        departed: probe.departed,
        departureTime: portableTraceValue(probe.departureTime, parameters),
        worstExcursion: portableTraceValue(probe.worstExcursion, parameters),
        trace: probe.trace
      }))
    }
  };
}

export const phaseCChargedSolver = defineScientificAdapter({
  ...PHASE_C_CHARGED_SOLVER,
  async evaluate(envelope) {
    if (!envelope || typeof envelope !== "object" || Array.isArray(envelope)) {
      throw new TypeError("Charged Phase-C solver requires a request envelope.");
    }
    const { requestHash, request } = envelope;
    if (typeof requestHash !== "string" || !request || typeof request !== "object") {
      throw new TypeError("Charged Phase-C solver envelope requires requestHash and request.");
    }
    for (const field of ["id", "version", "method"]) {
      if (request.solver?.[field] !== PHASE_C_CHARGED_SOLVER[field]) {
        throw new TypeError(`Charged Phase-C solver ${field} does not match the request.`);
      }
    }
    const parameters = validateParameters(request.parameters);
    assertPortableQuantities(request.quantities, parameters.reportingPolicy);
    const solver = { ...PHASE_C_CHARGED_SOLVER, parameters: request.parameters };
    let metrics;
    try {
      ({ metrics } = runPhaseCChargedNumerics(parameters));
    } catch (error) {
      if (!(error instanceof ChargedStationaryError)) throw error;
      // The declared continuation reached no localized stationary state, or
      // an inertia count met a singular block. The kernel records the
      // response as indeterminate.
      return { requestHash, values: {}, convergence: "failed", solver, wallTimeMs: 0 };
    }
    const values = {};
    for (const specification of request.quantities) {
      if (!Object.prototype.hasOwnProperty.call(metrics, specification.id)) {
        throw new TypeError(`Unsupported charged Phase-C quantity: ${specification.id}`);
      }
      values[specification.id] = {
        value: portableMetricValue(
          specification.id,
          metrics[specification.id],
          parameters,
          CHARGED_RESIDUAL_IDS
        ),
        unit: specification.unit,
        tolerance: { absolute: parameters.reportingPolicy.absoluteTolerance },
        semantic: specification.semantic,
        provenance: {
          kind: "oracle",
          source: requestHash,
          method: PHASE_C_CHARGED_SOLVER.method,
          evidence: [...parameters.evidenceIds]
        }
      };
    }
    return { requestHash, values, convergence: "converged", solver, wallTimeMs: 0 };
  }
});
