# Verification Loop

Before considering any task complete, run the verification loop:

## Step 1: TypeScript check
```bash
npx tsc --noEmit
```
Fix all type errors. No `@ts-expect-error` unless absolutely unavoidable.

## Step 2: Lint
```bash
npm run lint
```
Fix all lint errors. Warnings should be addressed but won't block.

## Step 3: Build
```bash
npm run build
```
Ensure production build succeeds with no errors.

## When verification fails
1. Read the error output carefully.
2. Fix the underlying issue — don't silence errors.
3. Re-run the failed step.
4. If the fix changes other files, re-run the full verification loop.

## Scope
- For small changes (1-2 files), run all 3 steps.
- For large changes, run TypeScript check first, fix incrementally, then lint and build.
- When adding new dependencies, always build after install.
