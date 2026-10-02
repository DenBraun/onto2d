import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { selectTestFiles } from "./test-suites.mjs";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IGNORED_DIRECTORIES = new Set([".git", "coverage", "dist", "node_modules", "runs"]);

async function collectTests(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const tests = [];
  for (const entry of entries) {
    if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) continue;
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) tests.push(...await collectTests(absolutePath));
    if (entry.isFile() && /\.test\.(?:cjs|js|mjs)$/.test(entry.name)) tests.push(absolutePath);
  }
  return tests;
}

const args = process.argv.slice(2);
const suiteFlag = args.find(arg => arg.startsWith("--suite="));
const suite = suiteFlag?.slice("--suite=".length) ?? "unit";
const listOnly = args.includes("--list");
const scopes = args.filter(arg => !arg.startsWith("--"));
if (scopes.length > 1 || args.some(arg => arg.startsWith("--") && arg !== suiteFlag && arg !== "--list")) {
  throw new Error("Usage: node scripts/test.mjs [directory] [--suite=unit|research|all] [--list]");
}
const scope = scopes[0] ? path.resolve(REPOSITORY_ROOT, scopes[0]) : REPOSITORY_ROOT;
const available = (await collectTests(scope)).map(file => path.relative(REPOSITORY_ROOT, file).replaceAll(path.sep, "/")).sort();
const tests = selectTestFiles(available, suite);
if (tests.length === 0) {
  console.error(`No ${suite} tests found under ${path.relative(REPOSITORY_ROOT, scope) || "."}. Use --suite=research for scientific replays.`);
  process.exit(1);
}

console.log(`Running ${suite} suite: ${tests.length} files; ${available.length - tests.length} files belong to other suites.`);
if (listOnly) {
  console.log(tests.join("\n"));
  process.exit(0);
}

const result = spawnSync(process.execPath, ["--test", ...tests], {
  cwd: REPOSITORY_ROOT,
  stdio: "inherit"
});
process.exit(result.status ?? 1);
