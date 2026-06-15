"use client";

import { useEffect } from "react";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GlobalError({
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
          <p className="font-mono text-8xl font-bold tracking-tight text-red-500/20">
            ERROR
          </p>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            ops, algo deu errado
          </p>
          {error.digest && (
            <p className="mt-2 font-mono text-xs text-[var(--color-muted)]">
              digest: {error.digest}
            </p>
          )}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="rounded-lg border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-4 py-2 font-mono text-sm tracking-wider text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
            >
              tentar novamente
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
