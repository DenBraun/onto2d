import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import Ajv from "ajv";
import { projectInteractionPilot, resolveInteractionPilot, validateInteractionPilot } from "../models/causal-emergence/canonical/interaction-pilot.mjs";
import { validateCanonicalInteractions } from "../models/causal-emergence/canonical/interactions.mjs";

const REPOSITORY_ROOT = fileURLToPath(new URL("../", import.meta.url));
const STUDY_INPUTS = [
  "references/canonical/retinal-review.json",
  "references/canonical/routing-review.json",
  "references/canonical/optical-review.json",
  "references/canonical/visual-review.json",
  "references/canonical/neural-review.json",
  "references/canonical/physics-review.json",
  "references/canonical/biochemistry-review.json",
  "references/canonical/cellular-review.json",
  "references/canonical/organismal-review.json"
];
const INPUTS = [
  "references/canonical/interaction-pilot.json",
  "references/canonical/interaction-pilot.schema.json",
  "references/canonical/graph.json",
  ...STUDY_INPUTS,
  "references/canonical/schema.json",
  "models/causal-emergence/canonical/interactions.mjs",
  "models/causal-emergence/canonical/interaction-pilot.mjs",
  "scripts/check-interaction-pilot.mjs"
];
const OUTPUT_ROOT = "cases/canonical-interactions";
const CETCH_ISSUE = "https://github.com/DenBraun/onto2d/issues/32";
const FIELD_LABELS = {
  participants: "Participants and states",
  changedFactor: "Changed factor",
  observable: "Observable",
  response: "Reported response",
  conditions: "Conditions",
  resources: "Supplied resources",
  boundary: "System and measurement boundary",
  timeScale: "Time and scale",
  controls: "Controls and comparisons",
  interpretation: "Interpretation",
  uncertainty: "Uncertainty and confounds"
};
const escapeCell = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const serialize = (value) => `${JSON.stringify(value, null, 2)}\n`;

/** The atlas may grow outside this comparison's selected publication groups. */
export function readComparisonStudies(inputs) {
  return STUDY_INPUTS.flatMap((relative) => {
    assert.ok(inputs.has(relative), `Interaction comparison: missing bound study ledger ${relative}`);
    return JSON.parse(inputs.get(relative).toString("utf8")).studies;
  });
}

function renderReport(pilot, artifact) {
  const groups = new Map(pilot.sourceGroups.map((group) => [group.id, group]));
  const sources = new Map(artifact.evidence.sources.map((source) => [source.id, source]));
  const lines = [
    "# Canonical interaction comparison",
    "",
    pilot.question,
    "",
    "This is a purposive, retrospective comparison of existing literature records. "
      + "The system view contains descriptions of studied systems, not admitted physical instances. "
      + "Support judgments below are explicit interpretations of the cited records, not automated scientific verification.",
    "",
    "Scientific cases, properties and proposed mappings are authoritative in "
      + "[the canonical graph](../../references/canonical/graph.json). The selection and comparison protocol are in "
      + "[interaction-pilot.json](../../references/canonical/interaction-pilot.json). "
      + "[analysis.json](analysis.json) contains separate system, evidence, analogy and evaluation views, "
      + "with exact input hashes. Case passports below resolve their current canonical records.",
    "",
    "Run `npm run case:canonical-interactions` to rebuild these two files, or "
      + "`npm run case:canonical-interactions:verify` to verify their exact reproduction. "
      + "The ordinary build checks this small comparison without replaying the full canonical release.",
    "",
    "## Current finding",
    "",
    pilot.review.currentConclusion,
    "",
    "## Evaluation boundary",
    "",
    pilot.review.retrospectiveExposure,
    "",
    pilot.review.splitRationale,
    "",
    "Independent scientific review: **not performed**. Prospective evaluation on unseen studies: "
      + "**not performed**. Scientific accuracy, emergence and causal scores: **not assigned**. "
      + "The challenge partition checks transfer across separate publication groups retrospectively; "
      + "it cannot recreate an unseen-study test after the findings have been read.",
    "",
    "## Selection",
    "",
    "| Case | Domain | Partition | Primary source |",
    "| --- | --- | --- | --- |"
  ];
  for (const record of pilot.cases) {
    const group = groups.get(record.sourceGroupId);
    const sourceLinks = group.sourceIds.map((id) => {
      const source = sources.get(id);
      const url = source.doi ? `https://doi.org/${source.doi}` : source.url;
      return url ? `[${escapeCell(source.title)}](${url})` : escapeCell(source.title);
    });
    lines.push(`| ${escapeCell(record.title)} | ${record.domain} | ${group.split} | ${sourceLinks.join("; ")} |`);
  }
  lines.push("", "## Comparison matrix", "",
    "Support concerns a bounded observation or inference; it can coexist with an unresolved mechanism. "
      + "A counterexample concerns the stated overextension. A dash means the family was not assessed for that case.", "",
    "| Case | Regime selection | Persistence | Organization and operation |",
    "| --- | --- | --- | --- |");
  const verdictLabels = {
    "supports-scoped-instance": "scoped support",
    "contradicts-overextension": "counterexample to extension",
    inconclusive: "inconclusive",
    "outside-scope": "outside scope"
  };
  for (const record of pilot.cases) {
    const cells = ["regime-selection", "persistence", "organization-operation"].map((id) => {
      const labels = record.assessments.filter((row) => row.familyId === id).map((row) =>
        row.criterionId === "persistence-inferred-kinetics" ? "inferred kinetics" : verdictLabels[row.verdict]);
      return [...new Set(labels)].join("; ") || "—";
    });
    lines.push(`| ${escapeCell(record.title)} | ${cells.join(" | ")} |`);
  }
  lines.push("", "## Candidate families and decision criteria", "",
    "These criteria define bounded comparisons. A counterexample to an overextension is not "
      + "automatically a refutation of the narrower candidate. Missing or unread measurements remain inconclusive.", "");
  for (const family of pilot.families) {
    lines.push(`### ${family.title}`, "", `Eligibility: ${family.eligibility}`, "",
      `Scoped prediction: ${family.scopedPrediction}`, "");
    for (const [key, label] of [["supportCriteria", "Support"], ["contraryCriteria", "Contrary observation or overextension test"], ["inconclusiveCriteria", "Inconclusive"]]) {
      lines.push(`${label}:`, "");
      for (const criterion of family[key]) lines.push(`- \`${criterion.id}\`: ${criterion.text}`);
      lines.push("");
    }
    lines.push(`Overextension to avoid: ${family.overextension}`, "");
  }
  lines.push("## Case passports", "",
    "The evidence view retains the exact selected claims, source reading limits and preparation records. "
      + "Claim identifiers below resolve in [the canonical graph](../../references/canonical/graph.json). "
      + "A reported finding, an interpretation and an unestablished property are recorded separately.", "");
  for (const record of pilot.cases) {
    lines.push(`### ${record.title}`, "", `ID: \`${record.id}\`. Publication group: `
      + `\`${record.sourceGroupId}\` (${groups.get(record.sourceGroupId).split}).`, "");
    lines.push("| Field | Source-scoped record |", "| --- | --- |");
    for (const [field, label] of Object.entries(FIELD_LABELS)) {
      const value = record.fields[field];
      const text = value.value === null ? `Unknown (${value.missingReason}).` : value.value;
      lines.push(`| ${label} | ${escapeCell(text)} |`);
    }
    lines.push("", "Evidence distinctions (exact field-to-claim mappings remain in the JSON):", "");
    for (const observation of record.observations) {
      lines.push(`- **${observation.kind}:** ${observation.statement}`);
    }
    lines.push("", "Comparison judgments:", "");
    for (const assessment of record.assessments) {
      lines.push(`- \`${assessment.familyId}\` / \`${assessment.criterionId}\`: **${assessment.verdict}**. ${assessment.rationale}`);
    }
    lines.push("", "Limits:", "");
    for (const limit of record.limitations) lines.push(`- ${limit}`);
    lines.push("");
  }
  lines.push("## Proposed cross-case correspondences", "",
    "These links compare named properties of cases. They assert no physical interaction, ancestry "
      + "or numerical equivalence between the systems.", "");
  for (const analogy of pilot.analogies) {
    lines.push(`- **${analogy.id}** (\`${analogy.familyId}\`; ${analogy.caseIds.map((id) => `\`${id}\``).join(" and ")}): `
      + `${analogy.correspondence} Boundary: ${analogy.breakdownConditions}`);
  }
  if (pilot.transferChecks?.length) {
    lines.push("", "## Transfer to new primary studies", "",
      "Each candidate is also checked against a primary publication absent from the canonical source inventory. "
        + "The questions and decision boundaries were assigned before the new full-text readings; title/search exposure "
        + "and outcome-aware selection prevent a claim of blind prospective validation. These are literature comparisons, "
        + "not independent experiments, quantitative forecasts or newly admitted canonical graph claims.", "",
      "Exact questions, observations, reviewed passages, supplementary-access limits and exposure/dependency notes "
        + "are recorded once in `transferChecks` in "
        + "[the source protocol](../../references/canonical/interaction-pilot.json). The evidence/evaluation JSON views "
        + "retain source identity and record pointers into that hash-bound input.", "",
      "| Candidate | Separate primary study | Reading | Judgment |",
      "| --- | --- | --- | --- |");
    for (const check of pilot.transferChecks) {
      const author = check.source.authors[0].split(" ").at(-1);
      lines.push(`| ${check.familyId} | [${escapeCell(author)} et al. ${check.source.year}]`
        + `(https://doi.org/${check.source.doi}) | ${check.source.readExtent} | ${check.verdict} |`);
    }
    lines.push("", "A scoped transfer means that the operational distinction remains useful in another source. "
      + "It does not establish a shared microscopic mechanism or a universal law. Unread controls and unisolated "
      + "mechanisms remain unresolved in each source record.");
  }
  lines.push("", "## Further tests", "",
    "1. Before reading a new primary study, record a case-specific predicted discriminator, comparator, "
      + "eligible conditions, uncertainty tolerance and failure criterion. Register the whole acquisition/dependency group, "
      + "including associated reanalyses, on one side of the comparison.",
    "2. Seek contrary cases and competing explanations. A failed comparator, missing functional readout or unread "
      + "supplement does not become positive evidence or a measured zero.",
    "3. Have a separate scientific reviewer check a small selection of source-to-passport mappings. "
      + "Software checks and additional agent inspection do not count as independent experimental reproduction or expert review.",
    `4. Complete [the detailed CETCH study and later case page](${CETCH_ISSUE}) before strengthening its electron-transfer mechanism claim.`,
    "",
    "## Reproduction boundary", "",
    "The generated JSON binds the current graph, all canonical study ledgers, selection, schema and projector/checker code. "
      + "Reproduction checks exact representation and provenance. It does not reproduce the experiments, fitted models "
      + "or scientific correctness of the published interpretations.", "");
  return lines.join("\n");
}

export async function run({ write = false, root = REPOSITORY_ROOT } = {}) {
  assert.equal(path.resolve(root), path.resolve(REPOSITORY_ROOT),
    "Interaction comparison must execute its bound checker/projector from the current repository");
  const inputs = new Map(await Promise.all(INPUTS.map(async (relative) => [relative, await readFile(path.join(root, relative))])));
  const parse = (relative) => JSON.parse(inputs.get(relative).toString("utf8"));
  const protocol = parse(INPUTS[0]);
  const schema = parse(INPUTS[1]);
  const graph = parse(INPUTS[2]);
  const studies = readComparisonStudies(inputs);
  const validateSchema = new Ajv({ allErrors: true, strict: true, validateFormats: false }).compile(schema);
  assert.ok(validateSchema(protocol), `Interaction pilot schema: ${JSON.stringify(validateSchema.errors)}`);
  validateCanonicalInteractions(graph, { studies });
  const pilot = resolveInteractionPilot(protocol, graph);
  validateInteractionPilot(pilot, { graph, studies });
  const views = projectInteractionPilot(pilot, { graph, studies });
  const sourceBindings = INPUTS.map((relative) => ({
    path: relative,
    sha256: createHash("sha256").update(inputs.get(relative)).digest("hex")
  }));
  const artifact = { schemaVersion: 1, id: pilot.id, date: pilot.date, sourceBindings, ...views };
  const outputs = new Map([
    [`${OUTPUT_ROOT}/analysis.json`, serialize(artifact)],
    [`${OUTPUT_ROOT}/README.md`, renderReport(pilot, artifact)]
  ]);
  for (const [relative, expected] of outputs) {
    const file = path.join(root, relative);
    const actual = await readFile(file, "utf8").catch((error) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (write && actual !== expected) {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, expected);
    } else if (!write) {
      assert.equal(actual, expected, `${relative} is stale; run npm run case:canonical-interactions`);
    }
  }
  return artifact;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  if (args.some((arg) => !["--write", "--verify"].includes(arg)) || (args.includes("--write") && args.includes("--verify"))) {
    console.error("Usage: node scripts/check-interaction-pilot.mjs [--write|--verify]");
    process.exitCode = 1;
  } else {
    run({ write: args.includes("--write") }).then((artifact) => {
      console.log(`Interaction comparison ${args.includes("--write") ? "built" : "verified"}: `
        + `${artifact.evaluation.caseCount} cases, ${artifact.evaluation.sourceGroupCount} publication groups; retrospective only.`);
    }).catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
  }
}
