import assert from "node:assert/strict";

/** Synthetic quantity checks, not calibrated optics or formation operators. */
export function verifyOpticalWitnesses() {
  const projectedBin = Math.PI / 2;
  const first = [1 / Math.PI, 0];
  const second = [0, 1 / Math.PI];
  const integrate = (bins) => bins.reduce((sum, value) => sum + value * projectedBin, 0);
  assert.equal(integrate(first), 0.5);
  assert.equal(integrate(second), 0.5);
  assert.notDeepEqual(first, second);
  const narrowDensity = 2;
  const narrowProjectedSolidAngle = 0.25;
  assert.equal(narrowDensity * narrowProjectedSolidAngle, 0.5);

  const coefficient = 0.5; // Synthetic m^-1, not a paper value.
  const lengths = [1, 2]; // Synthetic m.
  const internalTransmission = lengths.map((length) => Math.exp(-coefficient * length));
  assert.ok(internalTransmission[0] > internalTransmission[1]);
  assert.ok(Math.abs(internalTransmission[0] ** 2 - internalTransmission[1]) < 1e-15);
  assert.notEqual(coefficient, 1 - internalTransmission[0]);
  assert.equal(Math.exp(-0 * lengths[0]), 1);

  // Equal marginal variances, measured in units of 10^-4. The covariance
  // matrices for independence and a fully shared error are positive semidefinite.
  const independentVarianceUnits = 1 + 1;
  const sharedVarianceUnits = 1 + 1 + 2 * 1;
  assert.equal(independentVarianceUnits, 2);
  assert.equal(sharedVarianceUnits, 4);
  assert.equal(1 - 0.25 - 0.5, 0.25);
  return {
    status: "passed",
    cases: [
      { id: "angular-integral-not-inversion", projectedBin, first, second, reflectance: 0.5, narrowDensity, narrowProjectedSolidAngle,
        limit: "Fixed-illumination synthetic angular bins. An integral does not identify the distribution or a unique physical surface; BRDF has unit sr^-1." },
      { id: "coefficient-not-absorptance", coefficient, lengths, internalTransmission,
        limit: "Assumed homogeneous absorption-only path, excluding boundary reflection, scattering and emission. No fit or calibration to published samples." },
      { id: "balance-retains-covariance", independentVarianceUnits, sharedVarianceUnits,
        limit: "A = 1 - R - T needs a passive closed matched balance. Its uncertainty depends on covariance; these synthetic variances do not estimate an experiment." }
    ],
    numericalAdmissions: 0,
    limit: "Finite interpretation checks only; no universal physical theorem, carrier threshold or empirical validation."
  };
}
