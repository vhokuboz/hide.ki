# Frontend Patterns

Follow these patterns when building UI for hide.ki:

## Layout
- Max-width container: `mx-auto max-w-5xl px-6`
- Section spacing: `pb-32 pt-16 sm:pt-24`
- Header: fixed `h-16` with backdrop blur (`bg-[#0a0a0f]/80 backdrop-blur-xl`)
- CursorGlow is rendered once in the root layout (or page-level)

## Cards (PostCard, ThemeCard)
- Base: `rounded-2xl border border-[#1e1e2a] bg-[#12121a]/30 p-5`
- Hover: `hover:border-[#00f0ff]/20 hover:bg-[#12121a]/60 hover:-translate-y-0.5`
- Transition: `transition-all duration-300`
- Use `group` pattern on parent, `group-hover:` on children for coordinated effects

## Grid
- Blog listing: `grid gap-4 sm:grid-cols-2`
- Themes: `grid gap-4 sm:grid-cols-3`

## Markdown content
- Render via `src/components/Markdown.tsx` (uses react-markdown + remark-gfm)
- Code blocks: wrap in `<pre>` with `rounded-2xl border border-[#1e1e2a] bg-[#12121a] p-4`
- Inline code: `rounded border border-[#1e1e2a] bg-[#12121a] px-1.5 py-0.5 font-mono text-sm text-[#00f0ff]`
- Links: `text-[#00f0ff] underline decoration-[#00f0ff]/30`

## Animations
- FadeIn component for scroll-triggered fade-up animations
- CursorGlow for the ambient mouse-following glow
- Animated pulse for status badges: `animate-pulse`
- Bounce for scroll indicators: `animate-bounce`
- ThemeCards use radial gradient on hover via `--mouse-x` / `--mouse-y` CSS vars

## Icons / Badges
- Simple text/unicode icons wrapped in `<span>` (no icon library)
- Badge pattern: `rounded-full border border-[#1e1e2a] bg-[#12121a] px-4 py-1.5 font-mono text-xs tracking-wider`

## Font usage
- `font-mono` (JetBrains Mono) for: headings, labels, tags, badges, inline code, time elements, nav links
- `font-sans` (Inter) for: body paragraphs, descriptions, long-form content
