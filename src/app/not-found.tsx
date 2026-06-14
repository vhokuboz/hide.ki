import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="flex min-h-dvh items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-8xl font-bold tracking-tight text-zinc-800">
            404
          </p>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            página não encontrada
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm tracking-wider text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary)]/80"
          >
            <span className="text-xs">←</span>
            voltar pro início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
