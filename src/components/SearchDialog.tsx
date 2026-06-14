"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import type { PostMeta } from "@/lib/posts";

export default function SearchDialog({ posts }: { posts: PostMeta[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fuse = useMemo(
    () => new Fuse(posts, { keys: ["title", "desc", "tags", "slug"], threshold: 0.3 }),
    [posts],
  );

  const results = useMemo(
    () => (query.trim() ? fuse.search(query).map((r) => r.item) : []),
    [query, fuse],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onToggle = () => setOpen((p) => !p);
    window.addEventListener("keydown", onKey);
    window.addEventListener("toggle-search", onToggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("toggle-search", onToggle);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xl">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">
            ⌕
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="buscar posts..."
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] py-2.5 pl-9 pr-4 font-mono text-sm text-[var(--color-foreground)] placeholder-[var(--color-muted)] outline-none focus:border-[var(--color-primary)]"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-muted)]">
            ESC
          </kbd>
        </div>
        {results.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1">
            {results.map((post) => (
              <li key={post.slug}>
                <button
                  onClick={() => {
                    router.push(`/blog/${post.slug}`);
                    setOpen(false);
                  }}
                  className="flex w-full flex-col gap-0.5 rounded-xl border border-transparent px-3 py-2 text-left transition-colors hover:border-[var(--color-border)] hover:bg-[var(--color-background)]"
                >
                  <span className="font-mono text-sm font-medium text-[var(--color-foreground)]">
                    {post.title}
                  </span>
                  <span className="line-clamp-1 text-xs text-[var(--color-muted)]">
                    {post.desc}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query.trim() && results.length === 0 && (
          <p className="mt-6 text-center font-mono text-xs text-[var(--color-muted)]">
            nenhum post encontrado
          </p>
        )}
      </div>
    </div>
  );
}
