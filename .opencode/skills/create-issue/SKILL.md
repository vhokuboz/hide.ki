---
name: create-issue
description: Create GitHub issues grouped by PR scope with labels, priority, and structured templates
compatibility: opencode
metadata:
  workflow: github
---

## What I do

- Analyze code problems (bugs, security, a11y, patterns, tech debt)
- Group related problems that fit in a single PR into one issue
- Create GitHub issues via `gh` CLI with structured templates
- Apply labels and assign priority based on problem type
- Optionally activated after code reviews

## Issue grouping rules

Group problems into the same issue when they:
- Affect the same feature/scope (e.g., all metadata issues, all a11y issues)
- Can be resolved in a single PR without mixing concerns
- Share the same root cause

Create separate issues when:
- Problems belong to different scopes (security vs. a11y vs. metadata)
- They require different expertise or review
- One depends on another (note dependency in description)

## Label management

Before creating issues, check if the required labels exist in the repo:
```
gh label list --repo <owner>/<repo> --json name
```

If a label from the table below doesn't exist, create it:
```
gh label create <name> --repo <owner>/<repo> --color "<color>" --description "<description>"
```

Use these colors for consistency:
| Label | Color | Description |
|---|---|---|
| `security` | `d73a4a` | Security vulnerabilities or concerns |
| `bug` | `d73a4a` | Something isn't working |
| `a11y` | `7057ff` | Accessibility concerns |
| `enhancement` | `a2eeef` | New feature or request |
| `tech-debt` | `cfd3d7` | Code quality and technical debt |

## Complexity estimation

Evaluate complexity based on scope and impact:

| Level | Criteria | Example |
|---|---|---|
| `complexity/low` | 1-2 files, few lines, no logic changes | Rename, add aria-label, fix import |
| `complexity/medium` | 2-5 files, moderate logic, new components | Add metadata, loading states |
| `complexity/high` | 5+ files, cross-cutting, multiple concerns | Security audit, theming overhaul |

Create complexity labels if they don't exist:
```
gh label create complexity/low --repo <owner>/<repo> --color "bfe5bf" --description "1-2 files, trivial change"
gh label create complexity/medium --repo <owner>/<repo> --color "fbca04" --description "2-5 files, moderate change"
gh label create complexity/high --repo <owner>/<repo> --color "e99695" --description "5+ files, significant change"
```

## Priority & labels

| Type | Label | Priority | Examples |
|---|---|---|---|
| Security | `security` | high | XSS, exposed secrets, missing validation |
| Bug | `bug` | high | Broken functionality, wrong behavior |
| A11y | `a11y` | medium | Missing aria labels, keyboard nav |
| Enhancement | `enhancement` | medium | Missing metadata, patterns, DX |
| Tech debt | `tech-debt` | low | Dead code, unused imports, style nits |

## Issue template

Every issue should include:
1. **Summary** — what the problem is
2. **Files affected** — paths with line references
3. **Current behavior** — what's wrong
4. **Expected behavior** — what should happen
5. **Labels** — type label + complexity label
6. **Priority** — high/medium/low
7. **Complexity** — low/medium/high based on estimation table
8. **Scope** — single PR description (what else is included)

## Usage with code-review

When activated after a code review:
1. Collect all problems found during review
2. Group by PR scope using the grouping rules
3. For each group, create one issue using `gh issue create`
4. Use the template format above
5. Set labels and priority accordingly
6. Report back which issues were created

## Example

```
gh issue create \
  --title "fix: sanitize user input in RSS feed" \
  --label "security" \
  --label "bug" \
  --body "## Summary
...
## Files affected
- src/lib/feed.ts:42 — raw XML interpolation
## Current behavior
...
## Expected behavior
...
## Priority
high"
```
