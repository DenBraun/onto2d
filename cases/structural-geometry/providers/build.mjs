import { mkdir, readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { canonicalClone, hashCanonical } from "@onto2d/kernel/canonical";
import { createStructuralMetricContext, buildStructuralProvider, analyzeStructuralGeometryWithProvider,
  verifyStructuralProviderArtifact, verifyStructuralProviderAnalysis } from "@onto2d/structural-geometry/providers";
import { directory, examplePack, examples } from "./fixtures.mjs";

const codec = { limits: { maxEntries: 500000 } };
const encoded = (value) => `${JSON.stringify(canonicalClone(value, codec), null, 2)}\n`;
export async function run({ write = false, report = false } = {}) {
  if (write && report) throw new Error("Choose write or verified report.");
  const pack = await examplePack(); const context = createStructuralMetricContext(pack); const outputs = [];
  for (const example of examples) {
    const a = example.type === "provider" ? buildStructuralProvider(pack, example.input) : analyzeStructuralGeometryWithProvider(pack, example.input);
    if (example.type === "provider") verifyStructuralProviderArtifact(a, pack, example.input);
    else verifyStructuralProviderAnalysis(a, pack, example.input);
    const file = `artifacts/${example.id}.json`;
    outputs.push([file, encoded(a)]);
    if (!write && await readFile(new URL(file, directory), "utf8") !== encoded(a)) throw new Error(`Provider example differs: ${example.id}`);
  }
  const body = { schemaVersion: "1", suiteId: "structural-provider-compatibility-v1", status: "compatibility-and-computational-agreement-only",
    context: context.binding, examples: examples.map((example, i) => ({ id: example.id, file: outputs[i][0], input: example.input,
      artifactHash: JSON.parse(outputs[i][1]).artifactHash })) };
  const suite = { ...body, artifactHash: hashCanonical("onto2d:structural-provider-suite:v1", body, codec) };
  if (write) {
    await mkdir(new URL("artifacts/", directory), { recursive: true });
    for (const [file, bytes] of [...outputs, ["suite.json", encoded(suite)]]) await writeFile(new URL(file, directory), bytes);
  } else if (await readFile(new URL("suite.json", directory), "utf8") !== encoded(suite)) throw new Error("Provider compatibility suite differs.");
  if (report) console.table(examples.map((example, i) => {
    const a = JSON.parse(outputs[i][1]);
    return { example: example.id, type: example.type, provider: example.input.providerId ?? example.input.metricProviderId,
      kind: example.type === "provider" ? a.result.kind : a.request.analysis, artifactHash: a.artifactHash };
  }));
  console.log(`Provider suite ${write ? "written" : "verified"}: ${examples.length} frozen examples over the synthetic typed-diamond control.`);
  return suite;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  if (args.length !== 1 || !["--write", "--verify", "--report"].includes(args[0])) {
    console.error("Usage: node cases/structural-geometry/providers/build.mjs --write | --verify | --report"); process.exitCode = 1;
  } else run({ write: args[0] === "--write", report: args[0] === "--report" }).catch((e) => { console.error(e.message); process.exitCode = 1; });
}
