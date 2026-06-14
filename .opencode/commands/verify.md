Run the project verification loop:

1. TypeScript check: `npx tsc --noEmit`
2. Lint: `npm run lint`
3. Build: `npm run build`

For each step:
- Report the command being run.
- If it passes, move to the next step.
- If it fails, stop and report the error clearly: what file, what line, what's wrong.

If all three pass, report: "All checks passed."
