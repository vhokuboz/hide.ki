# Security Review

Check the following when reviewing or writing code:

## Hardcoded secrets
- No API keys, tokens, or passwords in source code.
- No secrets in `.env` files committed to git.
- `.env` files must be in `.gitignore`.

## Dependencies
- Run `npm audit` before adding new dependencies.
- Prefer well-maintained libraries with regular releases.
- Check for known vulnerabilities in new dependencies.

## Content security
- User-generated content is rendered via `react-markdown` (safe by default — no `dangerouslySetInnerHTML`).
- Never use `dangerouslySetInnerHTML`. If absolutely needed, sanitize with DOMPurify.
- Validate YAML frontmatter in markdown files.

## Next.js specific
- External links should use `target="_blank"` with `rel="noopener noreferrer"`.
- Links to user-generated URLs must be validated.
- Image URLs from external sources should use a proxy or `next/image` with proper domains config.

## Git
- No secrets in commit history. Use `git secrets` or similar pre-commit hooks.
- Review diffs for accidentally committed credentials before push.
- `.env.local`, `.env.development`, etc. must never be committed.
