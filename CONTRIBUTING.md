# Contributing to BC-Blocks

Thanks for helping improve BC-Blocks.

## Ground rules

- Be respectful and constructive in all discussions.
- Keep changes focused and easy to review.
- Prefer small pull requests over large rewrites.

## Development setup

Requirements:

- Node.js 20+
- npm 10+

Run locally:

```bash
npm install
npm run dev
```

Validation before opening a PR:

```bash
npm test
npm run build
```

## Branch and commit conventions

- Branch from `main`.
- Branch naming:
  - `feat/<short-description>`
  - `fix/<short-description>`
  - `docs/<short-description>`
  - `chore/<short-description>`
- Commit messages should follow Conventional Commits, for example:
  - `feat: add new testimonial block variant`
  - `fix: correct iframe tailwind runtime injection`
  - `docs: update contribution workflow`

## Pull request rules

- Do not push directly to `main`.
- Open a PR with a clear description and screenshots for UI changes.
- Keep PRs scoped to one main objective.
- Reference related issue(s) when available.
- Ensure all checks pass before requesting review.

## Code guidelines

- Preserve existing block structure and export conventions in `src/blocks`.
- Keep placeholder links explicit as `href="#!"` in block examples.
- Keep branding as `BC-Blocks` in UI-facing copy.
- Avoid adding dependencies unless they are necessary and justified.
- Prefer accessible markup (semantic elements, readable text, and clear focus states).

## Legal and attribution

- BC-Blocks includes adapted Tailblocks code under MIT.
- Do not remove or alter required copyright/license notices.
- New contributions are accepted under this repository's MIT license.
- Only contribute code/assets you have rights to use and redistribute.

## Review standards

A PR is ready to merge when:

- Tests/build pass.
- At least one reviewer approves.
- Requested changes are resolved.
- Conversation threads are resolved.

Thanks again for contributing.
