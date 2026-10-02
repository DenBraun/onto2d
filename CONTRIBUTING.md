# Contributing to Onto2D

Contributions are welcome: documentation, reproducible bug reports, interface
improvements, tests and carefully scoped source reviews. You do not need write
access to contribute. The project is in development, before its first release.

## Pick a first contribution

- Browse [good first issues](https://github.com/DenBraun/Onto2D/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22)
  for small, bounded tasks, or [help wanted](https://github.com/DenBraun/Onto2D/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22)
  for work that needs more context or domain knowledge.
- Comment on an issue before starting substantial work so the maintainer can
  confirm the scope and avoid duplicate efforts. Small typo fixes can go
  straight to a pull request.
- For a new idea or a question, [open an issue](https://github.com/DenBraun/Onto2D/issues/new/choose).
  Discuss new dependencies, architectural changes and scientific interpretation
  before implementing them. The [roadmap](docs/ROADMAP.md) records priorities.
- English and Russian are welcome in issues and reviews. Keep shared technical
  documentation in English; the maintainer can help with wording.

Read the [Development Guide](docs/DEVELOPMENT.md) for setup and focused commands,
and [Project Structure](docs/PROJECT_STRUCTURE.md) for package boundaries.
Participation follows the [Code of Conduct](CODE_OF_CONDUCT.md).

## From fork to pull request

1. Fork the repository on GitHub, clone your fork and create a topic branch from
   the current upstream `main`. Use one branch and one PR per focused change.

   ```sh
   git clone https://github.com/YOUR-USERNAME/Onto2D.git
   cd Onto2D
   git remote add upstream https://github.com/DenBraun/Onto2D.git
   git fetch upstream
   git switch -c docs/my-first-change upstream/main
   npm ci --ignore-scripts
   ```

2. Make the change, update relevant documentation and add meaningful tests when
   behavior changes. Keep generated artifacts out of unrelated changes.
3. Run the relevant checks below. Commit the change with a descriptive message
   and push your branch to your fork.
4. Open a PR against `DenBraun/Onto2D:main` and fill in the PR template: problem,
   result, related issue, exact checks and any remaining limitations. Draft PRs
   are welcome for early feedback. Include screenshots for interface changes.
5. Address review comments. If `main` advances, merge upstream `main` into your
   branch and rerun affected checks. New commits may require renewed approval.

Never include credentials, private data or unpublished third-party material in
an issue or PR. Report vulnerabilities through [Security](SECURITY.md).

## Required local checks

```sh
npm ci --ignore-scripts
npm test
npm run build
```

Use Node.js 22 or newer. Runtime packages intentionally have no third-party
runtime dependencies; repository schema checks use the pinned `ajv`
development dependency. Ordinary tests and checks need Node.js only.
Python and NetworkX are used by optional local research verification.

`npm run build` includes `npm run check`; running both is unnecessary. During
development use the [focused checks](docs/DEVELOPMENT.md#check-the-relevant-boundary).
For documentation-only work, run `npm run check:docs`. For runtime or contract
changes, run `npm test` and the build. `npm test` covers software behavior;
scientific replay and source reconstruction are separate, opt-in commands:
`npm run test:research` and `npm run check:research`. Use a case-specific command
when reviewing changes to that study. State which commands you actually ran.

CI runs ordinary tests once per supported Node.js 22/24 and Linux/macOS/Windows
combination. Source, schema and stored-artifact checks run once on Linux.
CI does not reconstruct scientific studies or run Python/NetworkX solvers.
A first-time contributor's workflow may wait for maintainer approval to run;
that approval is separate from code review.

## Review and merge

[@DenBraun](https://github.com/DenBraun) is the current sole maintainer and code
owner. External changes need the maintainer's approval, resolved review
conversations and passing required CI on a branch current with `main`.
The maintainer makes the final scope, scientific interpretation and merge
decision. There is no guaranteed response time; a follow-up in the same thread
after a week is welcome.

All changes to `main` go through PRs. While there is only one maintainer, the
owner can waive the review requirement for their own PR after self-review;
required CI still applies. Write access is not needed for ordinary contributions
and is granted separately after sustained collaboration. The
[maintainer guide](docs/MAINTAINERS.md) records the enforced rules and access policy.

By submitting a contribution, you agree to license your original contribution
under the repository's [MIT license](LICENSE). Preserve third-party notices and
source-specific terms; imported data and publications do not automatically
become MIT-licensed. No separate CLA or signed-off-by trailer is required.

## Change rules

- Do not rewrite `references/` data to make an audit pass. Update a reviewed golden
  only when the source change and its scientific rationale are intentional.
- Do not classify every `ParentCode` as generative. Source relation policy and
  node-resolution criteria must be frozen before topology-aware migration.
- Keep `@onto2d/kernel` dependency-free. Adapters may depend inward on kernel
  contracts; the kernel must never import an adapter.
- Add or update tests for behavior changes and update documentation in the same
  change.
- Never present a placeholder scientific adapter or a schema-valid artifact as
  scientific validation.

Contract changes to identity, quantities, source classification, evidence or
package boundaries must update the relevant [architecture guide](docs/README.md)
and its verification. Keep current requirements in that guide; use Git for
change history.
