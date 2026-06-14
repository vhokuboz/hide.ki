Review working or staged changes against hide.ki's project standards.

## Workflow

1. Run `git diff` (unstaged) or `git diff --staged` (staged) to get changes.
2. Read full context of each changed file.
3. Load the **code-reviewer** agent for the detailed review.
4. Also load coding-standards, frontend-patterns, and security-review instructions.

## Review areas

- TypeScript correctness (no `any`, proper types)
- React/Next.js patterns (Server Components first, client boundaries)
- Tailwind 4 conventions (CSS variables for theming, component patterns)
- Theming consistency (`var(--color-*)` vs hardcoded hexes)
- Portuguese accessibility (aria-labels, semantic HTML)
- Security (no `dangerouslySetInnerHTML`, external links)
- Edge cases (empty states, missing data, null checks)
- Dead code (unused imports/variables/exports)

## Checklist

- [ ] `any` used without justification
- [ ] Unnecessary or missing `"use client"`
- [ ] `params` not awaited (Next.js 16 async convention)
- [ ] Hardcoded color where `var()` is needed for theme support
- [ ] `dangerouslySetInnerHTML` introduced
- [ ] Missing Portuguese aria-labels
- [ ] console.log or debugger statements
- [ ] Unused imports or variables
- [ ] Edge case not handled (empty/null/undefined)
- [ ] Component style deviates from project patterns (card, badge, heading, button)

## Output

Provide a verdict: `approved` or `changes-requested`, with a list of issues.
