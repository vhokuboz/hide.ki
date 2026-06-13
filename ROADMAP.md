# 🗺️ Roadmap — hide.ki

## Fase 1 — Fundação ✅
- Setup Next.js 16 + TypeScript + Tailwind 4
- Página inicial com Hero, badges sociais, cursor glow
- Seção de temas (dev, hoops, anime)
- Posts mockados na home

## Fase 2 — Estrutura de Conteúdo
- [ ] Criar páginas `/blog` e `/about`
- [ ] Implementar sistema de posts dinâmicos (MDX / Contentlayer / Keystatic)
- [ ] Mover dados mockados para arquivos `.mdx` individuais
- [ ] Página de post individual (`/blog/[slug]`)
- [ ] Categorização por tags (dev, hoops, anime)

## Fase 3 — Funcionalidades
- [ ] RSS feed funcional
- [ ] Página de tag (`/tag/[tag]`) filtrando posts
- [ ] Ordenação por data e paginação
- [ ] Compartilhamento de posts (og:image, meta tags)
- [ ] Sitemap.xml dinâmico

## Fase 4 — Polish & UX
- [ ] Página 404 customizada
- [ ] Loading states e skeletons
- [ ] Scroll suave e transições refinadas
- [ ] Responsividade mobile testada
- [ ] Acessibilidade (ARIA labels, focus states, etc.)

## Fase 5 — Performance & Infra
- [ ] Lighthouse audit e otimizações
- [ ] Image optimization com `next/image`
- [ ] Incremental Static Regeneration (ISR) para posts
- [ ] Analytics (Plausible / Umami / Vercel Analytics)
- [ ] Deploy (Vercel, Cloudflare Pages, etc.)
- [ ] Domínio próprio e DNS

## Fase 6 — Extras
- [ ] Newsletter / e-mail subscription
- [ ] Comentários (Cusdis, Giscus, ou similar)
- [ ] Dark mode toggle (tema light)
- [ ] Busca interna (Fuse.js / Pagefind)
- [ ] i18n (português + inglês)
