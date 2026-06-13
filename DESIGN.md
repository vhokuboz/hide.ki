# hide.ki — Design System

## Visual Identity

Dark cyberpunk theme with cyan accent. Minimal, monochrome dark surface with neon highlights. Content sits on elevated cards with subtle borders. Typography-heavy, mono-spaced labels, generous whitespace.

## Colors

### Core palette (from `globals.css` via `@theme inline`)

| Token | Value | Usage |
|-------|-------|-------|
| `bg-background` | `#0a0a0f` | Page background |
| `text-foreground` | `#e4e4e7` | Body text |
| `text-primary` | `#00f0ff` | Accent, links, logo dot |
| `color-secondary` | `#ff00aa` | Hoops theme |
| `color-tertiary` | `#00ff88` | Anime theme, "online" dot |
| `color-surface` | `#12121a` | Cards, badges, nav bg |
| `color-border` | `#1e1e2a` | Borders, dividers |
| `color-muted` | `#71717a` | Secondary text |

### Text hierarchy

| Role | Color |
|------|-------|
| Heading / strong text | `text-zinc-100` (#f4f4f5) |
| Body / links | `text-zinc-500` (#71717a) |
| Highlighted inline words | `text-zinc-200` (#e4e4e7) |
| Metadata / footer | `text-zinc-600` (#52525b) |
| Icon inside Badge | `text-zinc-600` |

### Theme accents

| Theme | Color |
|-------|-------|
| dev | `#00f0ff` (cyan) |
| hoops | `#ff00aa` (pink) |
| anime | `#00ff88` (green) |

### Selection

- Background: `rgba(0, 240, 255, 0.2)`
- Text: `#00f0ff`

---

## Typography

| Font | Variable | Source | Usage |
|------|----------|--------|-------|
| Inter | `--font-inter` (via `next/font/google`) | `layout.tsx` | Body text, headings |
| JetBrains Mono | `--font-mono` (via `@theme`) | `globals.css` | Labels, logo, metadata, tags, nav |

### Type scale (from components)

| Level | Class | Weight | Tracking | Usage |
|-------|-------|--------|----------|-------|
| Display | `font-mono text-5xl sm:text-7xl` | Bold | `tracking-tight` | Hero title |
| Section heading | `text-2xl font-semibold` | Semibold | `tracking-tight` | "sobre o que eu escrevo", "posts recentes" |
| Section label | `font-mono text-sm` | — | `tracking-widest uppercase` | "temas", "latest" |
| Logo | `font-mono text-sm` | Semibold | `tracking-widest` | Header "hide.ki" |
| Nav / body | `text-sm` | — | — | Nav links, body copy |
| Badge label | `font-mono text-xs` | — | `tracking-wider` | Badge text |
| Tag | `font-mono text-[10px]` | — | `tracking-wider uppercase` | Post tags |
| Timestamp | `font-mono text-[11px]` | — | `tracking-wide` | Post dates |

---

## Spacing & Layout

### Container
- `max-w-5xl`, `mx-auto`, `px-6`

### Section defaults
- Vertical padding: `pt-16` (mobile), `sm:pt-24` (desktop), `pb-32`
- Section heading bottom margin: `mb-12`

### Grid
- Themes cards: `grid gap-4 sm:grid-cols-3`
- Post cards: `grid gap-4 sm:grid-cols-2`

### Gap scale
- `gap-2` — inline elements (tags row)
- `gap-3` — card content, badge row
- `gap-4` — grid items
- `gap-6` — nav links
- `gap-8` — hero content

### Padding
- Card: `p-6` (ThemeCard), `p-5` (PostCard)
- Badge: `px-4 py-1.5`
- Tag: `px-2.5 py-0.5`
- Header nav: `px-6 py-4`
- Footer: `px-6 py-8`

---

## Rounded corners
- `rounded-2xl` — cards
- `rounded-full` — badges, tags, status pill

---

## Components

### Header
- Fixed top, `z-50`, `border-b border-[#1e1e2a]/50`
- Background: `bg-[#0a0a0f]/80` with `backdrop-blur-xl`
- Logo: cyan `#00f0ff`, `font-mono`, hover fades to 80%
- Nav links: `text-zinc-500`, hover `text-zinc-200`

### Badge
- Social link pill: `rounded-full border border-border bg-surface px-4 py-1.5`
- Text: `font-mono text-xs tracking-wider text-zinc-500`
- Hover: border cyan at 40%, text cyan
- Icon: `text-zinc-600`

### ThemeCard
- `rounded-2xl border border-border bg-surface/50 p-6`
- Hover: border brighter, `-translate-y-0.5`
- Effects: mouse-tracking radial gradient overlay (`accent` at 12% opacity), `group-hover` text inherits accent color
- Layout: emoji (2xl), title (font-mono text-lg semibold), desc (text-sm text-zinc-400)

### PostCard
- `rounded-2xl border border-border bg-surface/30 p-5`
- Hover: `border-[#00f0ff]/20`, `bg-surface/60`, `-translate-y-0.5`
- Title hover: turns cyan
- Tags: inline row of `rounded-full border-border` pills
- Timestamp: `font-mono text-[11px] text-zinc-600`

### Footer
- `border-t border-[#1e1e2a]/50`, centered text
- `text-xs text-zinc-600`, `font-mono tracking-wider`

### CursorGlow
- Fixed position, follows mouse via `translate`
- 256px cyan radial blur (`blur-3xl`, `opacity-[0.02]`)
- `pointer-events-none`, `z-[9999]`

### Status pill (Hero)
- `rounded-full border-border bg-surface px-4 py-1.5 text-xs text-zinc-500`
- Green dot: `h-2 w-2 rounded-full bg-[#00ff88]` with `shadow-[0_0_8px_#00ff88]`
- `animate-pulse`

---

## Animation & Effects

| Effect | Duration | Details |
|--------|----------|---------|
| FadeIn scroll | 700ms | IntersectionObserver, `translate-y-8 → 0`, `opacity 0 → 1` |
| Card hover lift | 300ms | `-translate-y-0.5`, border color shift |
| ThemeCard overlay | 500ms | Radial gradient fade in on hover |
| Badge hover | — | Border + text color transition |
| Nav link hover | — | `text-zinc-500 → text-zinc-200` |
| Hero grid pattern | static | Cyan grid 60px, opacity 4% |
| Hero glow | static | Radial ellipse cyan 8% → transparent |
| Cursor glow | continuous | Follows mouse, 256px blur |
| Scroll arrow | continuous | `animate-bounce` |
| Status dot | continuous | `animate-pulse` + green glow |
| Selection | instant | Cyan tint, cyan text |

---

## Scrollbar
- `scrollbar-width: thin`
- `scrollbar-color: #1e1e2a transparent`
