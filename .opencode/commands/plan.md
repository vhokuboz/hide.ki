Create a detailed implementation plan for the requested feature or change.

## Process
1. Understand the requirement by reading relevant files.
2. Explore the codebase to find related components, patterns, and data flow.
3. Break the work into discrete, ordered steps.
4. For each step, specify:
   - Files to create or modify
   - What changes to make
   - Dependencies on previous steps

## Output format
```markdown
## Plan: <title>

### Step 1: <short description>
**Files:** `src/app/...`, `src/components/...`
**Changes:** <what to do>

### Step 2: <short description>
...
```

## Guidelines
- Prefer modifying existing files over creating new ones.
- Follow existing patterns (Server Components, Tailwind classes, etc.).
- Include a verification step at the end (typecheck, lint, build).
- If the plan has unknowns, list them for clarification before proceeding.
