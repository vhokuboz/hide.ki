import Link from "next/link";
import { getPostsPage } from "@/lib/posts";
import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";

export default function Blog() {
  const result = getPostsPage(1);

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-32">
        <div className="mb-12 text-center">
          <h2 className="font-mono text-sm tracking-widest text-[var(--color-muted)] uppercase">
            blog
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
            todos os posts
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {result.posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
        {result.totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2 font-mono text-sm" aria-label="paginação">
            <span className="px-3 py-1.5 text-[var(--color-muted)]" />
            <div className="flex items-center gap-1">
              {Array.from({ length: result.totalPages }, (_, i) => i + 1).map(
                (p) => (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog/page/${p}`}
                    className={`rounded-lg border px-3 py-1.5 transition-colors ${
                      p === 1
                        ? "border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {p}
                  </Link>
                ),
              )}
            </div>
            {result.totalPages > 1 ? (
              <Link
                href="/blog/page/2"
                className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
              >
                seguinte →
              </Link>
            ) : (
              <span className="px-3 py-1.5 text-[var(--color-muted)]" />
            )}
          </nav>
        )}
      </main>
      <Footer />
    </>
  );
}
