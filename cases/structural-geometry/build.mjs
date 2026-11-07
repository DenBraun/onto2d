import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { canonicalClone, canonicalize } from "@onto2d/kernel/canonical";
import {
  analyzeStructuralGeometry,
  projectStructuralGeometry,
  verifyStructuralGeometryArtifact,
  verifyStructuralProjection
} from "@onto2d/structural-geometry";

import { CAUSAL_EMERGENCE_BUNDLE as MODEL } from "./causal-emergence/source.mjs";
const SOURCE_LOCK = new URL("./causal-emergence/source-lock.json", import.meta.url);
const PROJECTION = new URL("./causal-emergence/projection.json", import.meta.url);
const ARTIFACT = new URL("./causal-emergence/artifact.json", import.meta.url);
// The primary census covers the ontological layer; the technical layer inside arisings is a second census.
const TECHNICAL = { projectionPolicyId: "canonical-technical-directed-v1" };
const TECHNICAL_PROJECTION = new URL("./causal-emergence/technical-projection.json", import.meta.url);
const TECHNICAL_ARTIFACT = new URL("./causal-emergence/technical-artifact.json", import.meta.url);
const json = async (url) => JSON.parse(await readFile(url, "utf8"));
const encoded = (value) => `${JSON.stringify(canonicalClone(value), null, 2)}\n`;

export async function run({ verify = false, report = false } = {}) {
  if (verify && report) throw new Error("Choose verification or reporting, not both.");
  const pack = await json(MODEL);
  const lock = await json(SOURCE_LOCK);
  const projection = projectStructuralGeometry(pack);
  if (canonicalize(projection.model) !== canonicalize(lock)) {
    throw new Error("Causal Emergence differs from the exact structural-geometry source lock.");
  }
  const artifact = analyzeStructuralGeometry(pack);
  const technicalProjection = projectStructuralGeometry(pack, TECHNICAL);
  const technicalArtifact = analyzeStructuralGeometry(pack, TECHNICAL);
  const outputs = [[PROJECTION, projection], [ARTIFACT, artifact], [TECHNICAL_PROJECTION, technicalProjection], [TECHNICAL_ARTIFACT, technicalArtifact]];
  if (verify || report) {
    verifyStructuralProjection(await json(PROJECTION), pack);
    verifyStructuralGeometryArtifact(await json(ARTIFACT), pack);
    verifyStructuralProjection(await json(TECHNICAL_PROJECTION), pack, TECHNICAL);
    verifyStructuralGeometryArtifact(await json(TECHNICAL_ARTIFACT), pack, TECHNICAL);
    for (const [url, value] of outputs) {
      if (await readFile(url, "utf8") !== encoded(value)) {
        throw new Error(`Frozen structural geometry bytes differ: ${url.pathname}`);
      }
    }
  } else {
    for (const [url, value] of outputs) await writeFile(url, encoded(value));
  }
  if (report) {
    console.log(JSON.stringify({
      status: "descriptive-unit-geometry",
      model: artifact.model,
      nodeCount: artifact.result.nodes.length,
      edgeCount: artifact.result.edges.length,
      summary: artifact.result.summary,
      groups: Object.fromEntries(Object.entries(artifact.result.groups).map(([name, groups]) => [name,
        groups.map((entry) => ({ key: entry.key, count: entry.summary.count, sum: entry.summary.sum }))])),
      extrema: artifact.result.extrema,
      artifactHash: artifact.artifactHash
    }, null, 2));
  } else {
    console.log(`Causal Emergence structural geometry ${verify ? "verified" : "written"}: ` +
      `${projection.nodes.length} arisings, ${projection.edges.length} causes; technical layer ` +
      `${technicalProjection.nodes.length} nodes, ${technicalProjection.edges.length} edges.`);
  }
  return { pack, projection, artifact, technicalProjection, technicalArtifact };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  if (args.length > 1 || args.some((arg) => !["--verify", "--report"].includes(arg))) {
    console.error("Usage: node cases/structural-geometry/build.mjs [--verify | --report]");
    process.exitCode = 1;
  } else {
    run({ verify: args.includes("--verify"), report: args.includes("--report") }).catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
  }
}
