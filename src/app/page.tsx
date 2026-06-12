"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  {
    title: "voltando a estudar Rust",
    desc: "depois de meses sem tocar no compilador, resolvi voltar a estudar Rust.",
    tags: ["dev", "rust"],
    date: "2026-06-10",
  },
  {
    title: "meu novo setup de basquete",
    desc: "comprei uma bola nova e tô testando rotinas de treino ao ar livre.",
    tags: ["hoops", "life"],
    date: "2026-06-08",
  },
  {
    title: "por que eu amo anime dos anos 90",
    desc: "uma reflexão sobre o traço, a narrativa e a atmosfera dos animes dessa era.",
    tags: ["anime", "nostalgia"],
    date: "2026-06-05",
  },
  {
    title: "ferramentas que uso pra codar",
    desc: "meu setup dev: editor, terminal, plugins e workflows que não troco por nada.",
    tags: ["dev", "tools"],
    date: "2026-06-02",
  },
];

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Hero />
      <Themes />
      <LatestPosts />
      <Footer />
    </>
  );
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-64 w-64 rounded-full bg-[#00f0ff] opacity-[0.02] blur-3xl" />
    </div>
  );
}

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e2a]/50 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-mono text-sm font-semibold tracking-widest text-[#00f0ff] transition-colors hover:text-[#00f0ff]/80"
        >
          hide.ki
        </a>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          {["home", "blog", "about"].map((item) => (
            <a
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="transition-colors hover:text-zinc-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
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
        <div className="flex animate-pulse items-center gap-2 rounded-full border border-[#1e1e2a] bg-[#12121a] px-4 py-1.5 text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]" />
          vivo e codando
        </div>
        <h1 className="font-mono text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-zinc-100">hide</span>
          <span className="text-[#00f0ff]">.</span>
          <span className="text-zinc-100">ki</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-zinc-500 sm:text-lg">
          tracking my life through{" "}
          <span className="text-zinc-200">code</span>,{" "}
          <span className="text-zinc-200">hoops</span>, and{" "}
          <span className="text-zinc-200">anime</span>
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
          <Badge href="/rss" icon="⎋">
            rss
          </Badge>
        </div>
      </div>
      <a
        href="#temas"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600 transition-colors hover:text-zinc-400"
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
      className="inline-flex items-center gap-1.5 rounded-full border border-[#1e1e2a] bg-[#12121a] px-4 py-1.5 font-mono text-xs tracking-wider text-zinc-500 transition-all hover:border-[#00f0ff]/40 hover:text-[#00f0ff]"
    >
      <span className="text-zinc-600">{icon}</span>
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
          <h2 className="font-mono text-sm tracking-widest text-zinc-500 uppercase">
            temas
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">
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
      className="group relative overflow-hidden rounded-2xl border border-[#1e1e2a] bg-[#12121a]/50 p-6 transition-all duration-300 hover:border-[#1e1e2a]/80 hover:-translate-y-0.5"
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
          className="font-mono text-lg font-semibold text-zinc-100 transition-colors group-hover:text-[var(--accent)]"
          style={{ "--accent": accent } as React.CSSProperties}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

function LatestPosts() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32">
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="font-mono text-sm tracking-widest text-zinc-500 uppercase">
            latest
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">
            posts recentes
          </p>
        </div>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post, i) => (
          <FadeIn key={post.title}>
            <PostCard {...post} />
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ver todos os posts
            <span className="text-xs">→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

function PostCard({
  title,
  desc,
  tags,
  date,
}: {
  title: string;
  desc: string;
  tags: string[];
  date: string;
}) {
  return (
    <article className="group relative rounded-2xl border border-[#1e1e2a] bg-[#12121a]/30 p-5 transition-all duration-300 hover:border-[#00f0ff]/20 hover:bg-[#12121a]/60 hover:-translate-y-0.5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#1e1e2a] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-zinc-500 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-[#00f0ff]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>
        <time className="font-mono text-[11px] tracking-wide text-zinc-600">
          {date}
        </time>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1e1e2a]/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-zinc-600">
        <p className="font-mono tracking-wider">
          hide.ki — feito com 💜, ☕ e muito trap
        </p>
        <p>2026</p>
      </div>
    </footer>
  );
}
