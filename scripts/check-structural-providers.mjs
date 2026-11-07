import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const cwd = fileURLToPath(new URL("../", import.meta.url));
for (const [command, args] of [
  [process.execPath, ["cases/structural-geometry/providers/build.mjs", "--verify"]],
  [process.execPath, ["--test", "packages/structural-geometry/test/providers.test.mjs", "packages/structural-geometry/test/provider-contracts.test.mjs"]]
]) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit" });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log("Metric provider checks passed: frozen examples, exact legacy-envelope replay, capabilities and portable contracts.");
