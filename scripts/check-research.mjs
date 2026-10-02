import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// Explicit local command. Never called by ordinary CI, check or build.
const cwd = fileURLToPath(new URL("../", import.meta.url));
for (const script of [
  "check-history-benchmark.mjs",
  "check-structural-geometry.mjs",
  "check-structural-geometry-site.mjs",
  "build-model-studio-data.mjs",
  "check-canonical-source.mjs"
]) {
  console.log(`Research verification: ${script}`);
  const result = spawnSync(process.execPath, [`scripts/${script}`], { cwd, stdio: "inherit" });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log("Research replay passed.");
