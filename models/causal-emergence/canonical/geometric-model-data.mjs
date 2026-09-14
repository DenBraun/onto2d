import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sum = (xs) => xs.reduce((a, b) => a + b, 0);
const mean = (xs) => sum(xs) / xs.length;
const dot = (a, b) => sum(a.map((x, i) => x * b[i]));
const center = (xs) => { const m = mean(xs); return xs.map((x) => x - m); };
const close = (a, b, message) => assert.ok(Number.isFinite(a) && Math.abs(a - b) < 1e-9, message);
const vector = (xs, n) => assert.ok(xs.length === n && xs.every(Number.isFinite), "Invalid numeric vector");
const correlation = (a, b) => {
  const x = center(a), y = center(b);
  const denominator = Math.sqrt(dot(x, x) * dot(y, y));
  assert.ok(denominator > 0, "Correlation requires two nonconstant vectors");
  return dot(x, y) / denominator;
};

// Modified Gram-Schmidt with reorthogonalization; intercept and predictors are
// fitted to the same targets. This computes a descriptive fit, not a held-out score.
function regression(y, predictors) {
  vector(y, y.length);
  predictors.forEach((x) => vector(x, y.length));
  const columns = [y.map(() => 1), ...predictors];
  const q = [], r = columns.map(() => columns.map(() => 0));
  for (let j = 0; j < columns.length; j += 1) {
    let v = [...columns[j]];
    for (let pass = 0; pass < 2; pass += 1) for (let i = 0; i < j; i += 1) {
      const projection = dot(q[i], v);
      r[i][j] += projection;
      v = v.map((x, k) => x - projection * q[i][k]);
    }
    r[j][j] = Math.sqrt(dot(v, v));
    assert.ok(r[j][j] > 1e-12, "Rank-deficient design");
    q.push(v.map((x) => x / r[j][j]));
  }
  const coefficients = q.map((x) => dot(x, y));
  for (let j = coefficients.length - 1; j >= 0; j -= 1) {
    for (let k = j + 1; k < coefficients.length; k += 1) coefficients[j] -= r[j][k] * coefficients[k];
    coefficients[j] /= r[j][j];
  }
  const residual = y.map((value, i) => value - sum(columns.map((x, j) => x[i] * coefficients[j])));
  const centered = center(y);
  assert.ok(dot(centered, centered) > 0, "Fit requires variable targets");
  return { coefficients, residual, rSquared: 1 - dot(residual, residual) / dot(centered, centered) };
}

function matrix(values, n) {
  assert.equal(values.length, n);
  values.forEach((row) => vector(row, n));
  for (let i = 0; i < n; i += 1) for (let j = 0; j < n; j += 1) {
    assert.ok(values[i][j] >= 0, "Negative distance");
    close(values[i][j], values[j][i], "Asymmetric distance matrix");
  }
}

/** Recompute selected deposited readouts. No network weights or stimuli are run. */
export function verifyGeometricModelData(data) {
  assert.equal(data.id, "pajot2026-selected-model-readouts");
  assert.equal(data.upstream.commit, "204a4d6daa3b09df416aaa78d67d80772b2615f0");
  const source = (record) => assert.match(data.upstream.inputSha256[record.sourcePath], /^[a-f0-9]{64}$/);
  const quad = data.quadrilateral;
  assert.equal(quad.labels.length, 11);
  const pairs = [];
  for (let i = 0; i < 11; i += 1) for (let j = 0; j < i; j += 1) pairs.push([i, j]);
  assert.deepEqual(quad.pairOrder, pairs);
  for (const record of Object.values(quad.vectors)) { source(record); vector(record.values, 55); }
  const v = (key) => quad.vectors[key].values;
  const standardized = quad.expectedStandardizedOLS.predictors.map((key) => {
    const xs = center(v(key)), sd = Math.sqrt(dot(xs, xs) / xs.length);
    return xs.map((x) => x / sd);
  });
  assert.deepEqual(quad.expectedStandardizedOLS.predictors, ["dinov3_huge", "cornet", "symbolic"]);
  for (const key of ["dinov3_huge", "cornet", "convnext_xxlarge"]) assert.ok(quad.vectors[key].sourcePath.includes("/RDMs_avgdist/"), "Quadrilateral aggregation changed");
  const quadFit = regression(v("human"), standardized);
  quadFit.coefficients.forEach((x, i) => close(x, quad.expectedStandardizedOLS.coefficients[i], "Quadrilateral coefficient differs"));
  close(quadFit.rSquared, quad.expectedStandardizedOLS.rSquared, "Quadrilateral fit differs");
  close(quadFit.coefficients[1], 0.10716383976904201, "Published DINO coefficient not recovered");

  const memory = data.shapeMemory, n = memory.labels.length;
  assert.equal(n, 68); assert.equal(memory.participants, 125);
  assert.equal(memory.rawTaskTrials, 9250); assert.equal(memory.includedTrials, 8500);
  vector(memory.choiceTime, n); vector(memory.cost, n);
  assert.equal(new Set(memory.labels).size, n);
  assert.equal(memory.referenceCounts.length, n); assert.equal(memory.distractorCounts.length, n);
  memory.referenceCounts.forEach((count) => assert.equal(count, 125));
  memory.distractorCounts.forEach((row, i) => {
    assert.ok(row.length === n && row.every((x) => Number.isInteger(x) && x >= 0));
    assert.equal(row[i], 0); assert.equal(sum(row), 5 * memory.referenceCounts[i]);
  });
  const target = regression(memory.choiceTime, [memory.controls.greys]).residual;
  const memoryFits = memory.matrices.map((record) => {
    source(record); matrix(record.values, n);
    assert.equal(record.sourcePath, `2_shape_LoT/RDMs/${record.model}/layer_${record.layer}`);
    const distraction = memory.distractorCounts.map((counts, i) => sum(counts.map((count, j) => {
      if (count === 0) return 0;
      assert.ok(record.values[i][j] > 0, "Inverse-distance readout is undefined at zero");
      return count / record.values[i][j];
    })) / memory.referenceCounts[i]);
    const r = correlation(distraction, target);
    const joint = Math.sqrt(regression(target, [distraction, memory.cost]).rSquared);
    close(r, record.expected.r, "Shape-memory correlation differs");
    close(joint, record.expected.r_joint, "Shape-memory joint fit differs");
    return { model: record.model, layer: record.layer, correlation: r, jointFit: joint };
  });
  assert.deepEqual(memoryFits.map((r) => [r.model, r.layer]), [
    ["dinov3_small", 13], ["vit_giant_patch14_clip_224.laion2b", 24], ["vit_giant_patch14_clip_224.laion2b", 39]
  ]);
  assert.ok(memoryFits[1].jointFit > memoryFits[2].jointFit, "Selected and last layers lost their distinction");

  const cross = data.crossFormat;
  assert.deepEqual(cross.formats, ["photo", "drawing", "geo"]);
  assert.equal(cross.excludedFormat, "word");
  assert.equal(new Set(cross.items).size, 24);
  assert.deepEqual(cross.benchmark, { kind: "theoretical-identity", meanRank: 1, measuredMatchingParticipants: 0 }, "Ideal identity became a measured human benchmark");
  const ranks = cross.matrices.map((record) => {
    source(record); matrix(record.values, 72);
    assert.equal(record.sourcePath, `3_abstract_drawings/RDMs/${record.model}/layer_${record.layer}`);
    const values = [];
    for (let src = 0; src < 3; src += 1) for (let dst = 0; dst < 3; dst += 1) {
      if (src === dst) continue;
      for (let item = 0; item < 24; item += 1) {
        const row = record.values[src * 24 + item].slice(dst * 24, (dst + 1) * 24);
        const targetDistance = row[item];
        assert.equal(row.filter((x) => x === targetDistance).length, 1, "Rank requires an explicit tie policy");
        values.push(1 + row.filter((x) => x < targetDistance).length);
      }
    }
    assert.equal(values.length, 144);
    close(mean(values), record.expectedMeanRank, "Cross-format rank differs");
    return { model: record.model, layer: record.layer, meanRank: mean(values), queries: values.length };
  });
  assert.deepEqual(ranks.map((r) => [r.model, r.layer]), [["dinov3_large", 25], ["dinov3_base", 13]]);
  assert.ok(ranks[0].meanRank < ranks[1].meanRank, "Best deposited model confused with the paper's base label");
  return {
    quadrilateral: { pairs: 55, coefficients: quadFit.coefficients, rSquared: quadFit.rSquared, symbolicCorrelation: correlation(v("symbolic"), v("human")), bestSelectedCorrelation: correlation(v("convnext_xxlarge"), v("human")) },
    shapeMemory: { shapes: n, participants: 125, trials: 8500, symbolicCorrelation: correlation(memory.cost, target), models: memoryFits },
    crossFormat: { benchmark: cross.benchmark, models: ranks },
    limit: "Selected arithmetic from deposited matrices and derived behavioral sufficient statistics. Network inference, training, cohort reconciliation, all-model layer search, minimum-program search, uncertainty estimates and biological mechanisms are not reproduced by this offline check. Fitted correlations are not held-out predictions."
  };
}

export async function loadGeometricModelData() {
  return JSON.parse(await readFile(new URL("../../../references/canonical/data/pajot2026-model-check.json", import.meta.url), "utf8"));
}
