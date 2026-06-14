# API Design (App Router)

## Route structure
- `/` — home page (server component, fetches posts via `getAllPosts()`)
- `/blog` — blog listing (server component, fetches all posts)
- `/blog/[slug]` — individual post (server component, dynamic param)
- `/about` — about page

## Data fetching
- All data fetching is server-side via `src/lib/posts.ts`.
- Posts are read from `content/posts/*.md` at request time using `gray-matter`.
- No API routes needed unless adding dynamic features (comments, likes, etc.).
- No `useEffect` for data fetching — use async server components.

## If adding API routes
- Place in `src/app/api/<name>/route.ts`
- Export `GET`, `POST`, etc. as named functions
- Use `NextRequest` and `NextResponse` from `next/server`
- Type all request/response shapes
- Add error handling with appropriate status codes

## Post frontmatter schema
```yaml
---
title: "Post Title"
desc: "Brief description"
tags: ["dev", "typescript"]
date: "2026-01-15"
---
```

## If adding dynamic features
- Use Search Params for filter/sort state (remains server component)
- Use client components only for interactivity (comments, search input, etc.)
- Keep data fetching in server components, pass results as props
