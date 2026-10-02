# Maintaining Onto2D

## Responsibility and access

[@DenBraun](https://github.com/DenBraun) is the sole maintainer and final reviewer.
[CODEOWNERS](../.github/CODEOWNERS) assigns every path, including workflows,
source data and the ownership file itself, to this account. Directory ownership
in [Project Structure](PROJECT_STRUCTURE.md) describes technical boundaries.

New contributors use forks and PRs. Do not grant write access just to let someone
contribute. Consider collaborator access after sustained, reviewed work and an
explicit discussion of responsibility. Keep administration with the owner;
review collaborators and rules when adding maintainers or transferring ownership.
Document additional maintainers and update CODEOWNERS before relying on them for
required review. Contribution does not automatically confer merge or release rights.

## Main branch rules

Two active GitHub rulesets apply to `refs/heads/main`. Their reviewed API/import
definitions are committed in [.github/rulesets](../.github/rulesets).
Editing these files alone does not change GitHub: apply the reviewed definitions
in repository Settings → Rules → Rulesets, then inspect the active rules.

| Ruleset | Requirements | Bypass |
|---|---|---|
| [Main integrity](../.github/rulesets/main-integrity.json) | PR required; all review conversations resolved; all seven CI jobs successful with the latest main; no deletion or force push | None, including administrators |
| [Main review](../.github/rulesets/main-review.json) | One approving review, code-owner approval and dismissal of stale approvals after new reviewable commits | Repository administrator, only through a PR |

The review-only exception lets the sole maintainer merge their own PR after
self-review. Use it only for maintainer-authored work; external PRs must receive
the maintainer's actual approval. It cannot waive the separate integrity rules
or permit a direct push. GitHub cannot enforce the authorship restriction on
that exception; it is a maintainer responsibility visible in the PR history.

Required checks are `ollivier-reference` and `verify (OS, NODE)` for every
combination of `ubuntu-latest`, `macos-latest`, `windows-latest` and Node `22`,
`24`. Each is bound to the GitHub Actions integration. When renaming jobs or
changing the matrix, update the ruleset in the same maintenance operation so
merges do not wait for an obsolete check name. Pages deployment is not a
pre-merge check.

The `ollivier-reference` status name is retained for compatibility with the live
ruleset. Its current job runs source, schema and stored-artifact checks once;
it no longer runs Ollivier, NetworkX or any scientific replay. The six `verify`
jobs run the ordinary software suite once per environment. Neither status is
evidence of fresh scientific reproduction.

Keep source branches current with `main` before merging. Prefer a squash merge
for a focused contribution and give the resulting commit a clear description.
GitHub deletes merged topic branches automatically. Release and package
publication remain separate decisions under [Development](DEVELOPMENT.md#browser-and-publication-checks).

## Review a contribution

1. Confirm the issue scope, reproduction or proposed source claim. Help first-time
   contributors find a bounded task; do not label domain research a good first
   issue without a concrete scope and required expertise.
2. Before approving a first-time fork workflow, inspect the complete diff,
   including workflows and scripts. Run fork code only in the ordinary
   `pull_request` workflow with read-only token permissions. Approval to run CI
   is separate from approval of the change.
3. Check behavior, meaningful tests, source terms, scientific limitations,
   generated artifacts and the relevant documentation. Follow the
   [development review workflow](DEVELOPMENT.md#change-and-review-workflow).
4. Resolve review threads and approve the current external contribution. Wait
   for all required checks on the current revision and current base before
   merging. A pending, cancelled or failed check is not a pass.
5. Merge the focused PR, confirm the resulting main CI, and close only issues
   whose acceptance criteria are met. Keep unfinished work visible.

CI runs for PRs into `main`, pushes to `main` and manual dispatch. Superseded
runs are cancelled. Automatic CI has one test invocation per environment and
one shared check job; it never calls the duplicate build wrapper. Each job has
a ten-minute timeout to expose regressions in ordinary validation cost.
Research verification is local and opt-in, as described in
[Development](DEVELOPMENT.md#optional-research-verification). Keep replays and
whole-study reconstruction out of the automatic test suite.

## Repository settings and reports

- Issues and public fork PRs are enabled. Questions use the question form in
  [the issue chooser](https://github.com/DenBraun/Onto2D/issues/new/choose).
- New issues use bug, proposal/source-review or question forms. Keep starter
  tasks small and searchable with `good first issue` and `help wanted` labels.
- Actions default to read-only tokens and cannot approve PRs. First-time
  contributors need approval to run fork workflows; workflows do not persist
  checkout credentials or expose repository secrets to fork code.
- Private vulnerability reporting is enabled. Handle reports through
  [Security](../SECURITY.md), and conduct reports through the
  [Code of Conduct](../CODE_OF_CONDUCT.md).
- Auto-merge remains disabled; the maintainer makes the final merge decision.
  The Update branch action is enabled for bringing a PR current with `main`.

Repository settings are live GitHub state. Check them after applying changes;
the committed ruleset definitions and this guide are the intended configuration.
