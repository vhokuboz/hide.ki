# Coding Standards

You enforce these standards on every file touched:

## TypeScript
- Strict mode enabled. No `any`. Use `unknown` + type guards when type is uncertain.
- Prefer `interface` over `type` for object shapes. Use `type` for unions, intersections, and mapped types.
- Use `Readonly<{...}>` or `readonly` modifiers on immutable props.
- Use `satisfies` operator instead of type casts where possible.
- Import types with `import type { ... }`.

## React / Next.js
- Server Components by default. Add `"use client"` only when browser APIs, state, or event handlers are needed.
- Use `async` components for data fetching on the server. Never `useEffect` for data fetching.
- Use `useMemo` / `useCallback` sparingly — only when profiling shows a bottleneck.
- Composition over layout props: wrap children, don't pass className from parent.
- Use the `@/*` path alias for all imports.

## Tailwind CSS 4
- Use the custom theme tokens from `globals.css`:
  - `bg-background` (#0a0a0f), `text-foreground` (#e4e4e7)
  - `text-primary` (#00f0ff) for cyan accent
  - `bg-surface` / `border-[#1e1e2a]` / `text-muted` (#71717a)
- Prefer Tailwind utility classes over custom CSS.
- Use `font-mono` for labels, headings, tags, metadata.
- Use `font-sans` (Inter) for body text.
- Use `sm:`, `md:` breakpoints for responsive design.
- Use `gap-*` on flex/grid parents instead of margin on children.
- Use `rounded-2xl` consistently for cards, `rounded-full` for badges.

## Conventions
- `font-mono` + `tracking-wider` + `uppercase` for section headings.
- `text-zinc-400` or `text-zinc-500` for secondary text.
- `text-zinc-100` for primary headings.
- Border color `border-[#1e1e2a]` for containers.
- File names: PascalCase for components, camelCase for utilities, kebab-case for pages.
- One export per file (default export for components, named exports for utilities).
