"use client";

import { useEffect } from "react";
import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="flex min-h-dvh items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-5xl font-bold tracking-tight text-red-500/20 sm:text-7xl">
            POST_ERROR
          </p>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            não foi possível carregar este post
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => reset()}
              className="rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-4 py-2 font-mono text-sm tracking-wider text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
            >
              tentar novamente
            </button>
            <Link
              href="/blog"
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-mono text-sm tracking-wider text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
            >
              voltar pro blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
