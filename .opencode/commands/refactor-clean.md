Find and clean up dead code in the project.

1. Run TypeScript to find unused exports: `npx tsc --noEmit --noUnusedLocals --noUnusedParameters`
   - Note: check current tsconfig settings first, these may already be enabled.
2. Search for:
   - Unused imports in each file
   - Unused components or utility functions
   - Commented-out code blocks (search for `// ` or `/*`)
   - Orphan files (not imported anywhere)
3. For each finding, confirm it's truly unused before removing.
4. Make surgical removals only. Do not reformat or restructure.
5. Verify with `npx tsc --noEmit` after each removal.
6. Report what was removed.
