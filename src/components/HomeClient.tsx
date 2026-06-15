"use client";

import { useRef } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import PostCard from "@/components/PostCard";
import type { PostMeta } from "@/lib/posts";

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Hero />
      <Themes />
      <LatestPosts posts={posts} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="flex animate-pulse items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]" />
          vivo e codando
        </div>
        <h1 className="font-mono text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-[var(--color-foreground)]">hide</span>
          <span className="text-[var(--color-primary)]">.</span>
          <span className="text-[var(--color-foreground)]">ki</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          tracking my life through{" "}
          <span className="text-[var(--color-foreground)]">code</span>,{" "}
          <span className="text-[var(--color-foreground)]">hoops</span>, and{" "}
          <span className="text-[var(--color-foreground)]">anime</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge href="https://github.com/vitorkabu" icon="">
            github
          </Badge>
          <Badge href="https://twitter.com" icon="✕">
            twitter
          </Badge>
          <Badge href="https://youtube.com" icon="▶">
            youtube
          </Badge>
          <Badge href="/feed.xml" icon="⎋">
            rss
          </Badge>
        </div>
      </div>
      <a
        href="#temas"
        aria-label="rolar para seção temas"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 3v10m0 0l-4-4m4 4l4-4" />
        </svg>
      </a>
    </section>
  );
}

function Badge({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={String(children)}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 font-mono text-xs tracking-wider text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
    >
      <span className="text-[var(--color-muted)]" aria-hidden="true">{icon}</span>
      {children}
    </a>
  );
}

function Themes() {
  return (
    <section
      id="temas"
      className="mx-auto max-w-5xl px-6 pb-32 pt-16 sm:pt-24"
    >
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
            temas
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
            sobre o que eu escrevo
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-3">
        <FadeIn>
          <ThemeCard
            emoji="⚡"
            title="dev"
            desc="código, ferramentas, projetos, bugs, aprendizados e tudo do mundo dev"
            accent="#00f0ff"
          />
        </FadeIn>
        <FadeIn>
          <ThemeCard
            emoji="🏀"
            title="hoops"
            desc="basquete, NBA, treinos, jogos, sneakers e a cultura da bola laranja"
            accent="#ff00aa"
          />
        </FadeIn>
        <FadeIn>
          <ThemeCard
            emoji="🍥"
            title="anime"
            desc="animes, mangás, recomendações, reviews e a otaku cultura em geral"
            accent="#00ff88"
          />
        </FadeIn>
      </div>
    </section>
  );
}

function ThemeCard({
  emoji,
  title,
  desc,
  accent,
}: {
  emoji: string;
  title: string;
  desc: string;
  accent: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 transition-all duration-300 hover:border-[var(--color-border)]/80 hover:-translate-y-0.5"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent}12, transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col gap-3">
        <span className="text-2xl">{emoji}</span>
        <h3
          className="font-mono text-lg font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--accent)]"
          style={{ "--accent": accent } as React.CSSProperties}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{desc}</p>
      </div>
    </div>
  );
}

function LatestPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32">
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
            latest
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
            posts recentes
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <FadeIn key={post.slug}>
            <PostCard {...post} />
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            ver todos os posts
            <span className="text-xs">→</span>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
