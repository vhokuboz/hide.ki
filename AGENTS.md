# hide.ki — AGENTS.md

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`)
- `npm run test` — Vitest (unit/integration)
- `npm run test:e2e` — Playwright (E2E)

## Architecture
- **Next.js 16** App Router, TypeScript, Tailwind CSS 4
- Routes under `src/app/`: `/` (home), `/blog`, `/blog/[slug]`, `/about`
- Path alias `@/*` → `./src/*`
- Shared components in `src/components/` (Header, Footer, CursorGlow, FadeIn, PostCard, Markdown)
- Posts as `.md` files in `content/posts/` with YAML frontmatter (title, desc, tags, date)
- `src/lib/posts.ts` reads and parses posts via `gray-matter` (server-side only)
- Markdown rendered with `react-markdown` + `remark-gfm` in `src/components/Markdown.tsx`
- No CI/CD, no env vars

When you need to search docs, use `context7` tools.

## OpenCode config (`.opencode/`)
- `opencode.json` — main config with agents, commands, instructions
- `instructions/` — 6 skill files loaded as system prompts (coding-standards, frontend-patterns, verification-loop, api-design, security-review)
- `agents/` — 4 subagents (code-reviewer, build-error-resolver, refactor-cleaner, tdd-guide)
- `commands/` — 4 slash commands (/plan, /verify, /code-review, /refactor-clean)

## Tailwind CSS 4 quirks
- Uses `@import "tailwindcss"` (not `@tailwind` directives)
- Custom theme in `globals.css` via `@theme inline`:
  - `bg-background` `#0a0a0f`, `text-foreground` `#e4e4e7`
  - `text-primary` `#00f0ff` (cyan accent)
  - Colors: `surface` `#12121a`, `border` `#1e1e2a`, `muted` `#71717a`
- Custom font families: `font-sans` (Inter), `font-mono` (JetBrains Mono)

## Conventions
- Dark cyberpunk theme, cyan accent (`#00f0ff`), `font-mono` used heavily for labels/headings
- `"use client"` only on interactive components (HomeClient, CursorGlow, FadeIn, Post single page)

## Framework notes
- ESLint 9 flat config format (not `.eslintrc.*`)
- No `next.config.ts` customizations yet
- TypeScript strict mode enabled

---

# Behavioral Guidelines (Karpathy)

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

*Adapted from Andrej Karpathy's observations on LLM coding pitfalls.*
